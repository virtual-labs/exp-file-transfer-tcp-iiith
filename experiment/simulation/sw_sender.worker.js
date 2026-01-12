// public/sw_sender.worker.js
let base = 0;
let windowBase = 0;
let nextseqnum = 0;
let totalPackets;
let timeoutDuration;
let timerInterval = null;
let timeLeft = 0;

const startTimer = () => {
  if (timerInterval) clearInterval(timerInterval);
  timeLeft = timeoutDuration / 1000;
  postMessage({ type: 'TIMER_TICK', timeLeft, base });
  timerInterval = setInterval(() => {
    timeLeft--;
    postMessage({ type: 'TIMER_TICK', timeLeft, base });
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      postMessage({ type: 'LOG', message: `(Sender): TIMEOUT for packet ${base}. Manual resend required.` });
      postMessage({ type: 'TIMEOUT_EVENT' });
    }
  }, 1000);
};

const stopTimer = () => {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  postMessage({ type: 'TIMER_STOP' });
};

onmessage = (e) => {
  const { type, payload } = e.data;
  switch (type) {
    case 'INIT':
      totalPackets = payload.totalPackets;
      timeoutDuration = payload.timeoutDuration;
      base = 0;
      windowBase = 0;
      nextseqnum = 0;
      stopTimer();
      postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum });
      break;
    case 'SEND_PACKET':
      if (windowBase !== base) {
        postMessage({ type: 'LOG', message: `(Sender): 🔴 Please move the window!` });
      } else if (nextseqnum < totalPackets && nextseqnum === base) {
        startTimer();
        postMessage({ type: 'SEND_PACKET', packet: { seq: nextseqnum } });
        nextseqnum++;
        postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum });
      } else if (nextseqnum < totalPackets && nextseqnum > base) {
        postMessage({ type: 'LOG', message: `(Sender): 🔴 Packet ${base} is already in flight.` });
      } else {
        postMessage({ type: 'LOG', message: `(Sender): 🔴 All packets have been sent and acknowledged.` });
      }
      break;
    case 'MOVE_WINDOW':
      if (windowBase < base) {
        windowBase++;
        postMessage({ type: 'LOG', message: `(Sender): Window moved to start at packet ${windowBase}.` });
        postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum });
      }
      break;
    case 'RESEND_PACKET':
      postMessage({ type: 'LOG', message: `(Sender): Resending packet ${base}.` });
      postMessage({ type: 'SEND_PACKET', packet: { seq: base } });
      startTimer();
      break;
    case 'RECEIVE_ACK':
      if (payload.ack === base) {
        base++;
        if (base === nextseqnum) {
          stopTimer();
          if (base === totalPackets) {
            postMessage({ type: 'LOG', message: `(Sender): ⭐️ All packets acknowledged!` });
          }
        } else {
          startTimer();
        }
        postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum });
      }
      break;
  }
};