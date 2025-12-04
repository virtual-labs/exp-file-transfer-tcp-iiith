// public/slow_start_sender.worker.js
let N = 1; // Congestion window size
var requiredWindowSize = 1;
let ssthresh = 100; // Slow start threshold
let base = 0;
let windowBase = 0;
let nextseqnum = 0;
let totalPackets;
let timeoutDuration;
let transition = false;
let acksReceivedForCurrentWindow = 0;
let phase = 'slow_start';

let timerInterval = null;
let timeLeft = 0;

const startTimer = () => {
  if (timerInterval) clearInterval(timerInterval);
  transition = true;

  timeLeft = timeoutDuration / 1000;
  postMessage({ type: 'TIMER_TICK', timeLeft, base });

  timerInterval = setInterval(() => {
    timeLeft--;
    postMessage({ type: 'TIMER_TICK', timeLeft, base });

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      acksReceivedForCurrentWindow = 0;
      transition = false;
      timerInterval = null;
      // ssthresh = Math.max(1, Math.floor(ssthresh / 2));
      requiredWindowSize = 1;
    //   N = 1;
      postMessage({ type: 'STATE_UPDATE', newRequiredWindowSize: requiredWindowSize });
      postMessage({ type: 'LOG', message: `(Sender): TIMEOUT for packets starting from base ${base}. ssthresh is now ${ssthresh} and cwnd is ${N}.` });
      postMessage({ type: 'LOG', message: `(Sender): ➡️ Required window size set to ${requiredWindowSize} due to timeout.` });
      postMessage({ type: 'TIMEOUT_EVENT' });
    }
  }, 1000);
};

const stopTimer = () => {
  if (timerInterval) clearInterval(timerInterval);
  transition = false;
  timerInterval = null;
  postMessage({ type: 'TIMER_STOP' });
};

onmessage = (e) => {
  const { type, payload } = e.data;

  switch (type) {
    case 'INIT':
      totalPackets = payload.totalPackets;
      timeoutDuration = payload.timeoutDuration;
      base = payload.senderBase;
      windowBase = payload.windowBase;
      nextseqnum = payload.nextseqnum;
      N = payload.windowSize;
      requiredWindowSize = payload.requiredWindowSize;
      ssthresh = payload.ssthresh || 100;
      acksReceivedForCurrentWindow = payload.acksReceivedForCurrentWindow || 0;
      phase = payload.phase || 'slow_start';
      stopTimer();
      postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum, newWindowSize: N, newCongestionWindow: N, newSlowStartThreshold: ssthresh, newRequiredWindowSize: requiredWindowSize, newAcksReceivedForCurrentWindow: acksReceivedForCurrentWindow });
      postMessage({ type: 'LOG', message: `(Sender): ➡️ Initial required window size: ${requiredWindowSize}.` });
      break;

    case 'SEND_WINDOW':
        if(timerInterval !== null) {
          postMessage({ type: 'LOG', message: `(Sender): 🔴 Please wait for the timeout to occur before sending more packets!`});
          return;
        }
        if(N !== requiredWindowSize) {
          postMessage({ type: 'LOG', message: `(Sender): 🔴 Please adjust the window size to ${requiredWindowSize} before sending more packets!`});
          return;
        }
      if (windowBase !== base) {
        postMessage({ type: 'LOG', message: `(Sender): 🔴 Please move the window!`})
      } else {
        for (let i = windowBase; i < Math.min(windowBase + N, totalPackets); i++) {
          if (i >= nextseqnum) {
            if(base === nextseqnum) {
              startTimer();
            }
            postMessage({ type: 'SEND_PACKET', packet: { seq: i } });
            nextseqnum++;
            postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum, newWindowSize: N, newCongestionWindow: N, newSlowStartThreshold: ssthresh, newRequiredWindowSize: requiredWindowSize, newAcksReceivedForCurrentWindow: acksReceivedForCurrentWindow });
          } else {
            postMessage({ type: 'LOG', message: `(Sender): 🔴 Packet ${i} already sent, please use resend window or move window!` });
            break;
          }
        }
      }
      break;
    
    case 'MOVE_WINDOW':
      if (windowBase < base) {
        windowBase += 1;
        postMessage({ type: 'LOG', message: `(Sender): Window moved to start at packet ${windowBase}.` });
        postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum, newWindowSize: N, newCongestionWindow: N, newSlowStartThreshold: ssthresh, newRequiredWindowSize: requiredWindowSize, newAcksReceivedForCurrentWindow: acksReceivedForCurrentWindow });
      } else {
        postMessage({ type: 'LOG', message: `(Sender): 🔴 Cannot move window beyond base ${base}.` });
      }
      break;
    
    case 'RESEND_WINDOW':
        if(timerInterval !== null) {
          postMessage({ type: 'LOG', message: `(Sender): 🔴 Cannot resend packets during an active timeout!`})
          return;
        }
        if(base === nextseqnum) {
          postMessage({ type: 'LOG', message: `(Sender): 🔴 No packets to resend!`});
          return;
        }
        if(windowBase !== base) {
          postMessage({ type: 'LOG', message: `(Sender): 🔴 Please move the window before resending packets!`});
          return;
        }
        if(N !== requiredWindowSize) {
          postMessage({ type: 'LOG', message: `(Sender): 🔴 Please adjust the window size to ${requiredWindowSize} before resending packets!`});
          return;
        }
        postMessage({ type: 'LOG', message: `(Sender): Resending window from ${base} to ${nextseqnum - 1}.`});
        // Resend all packets in the current window and restart the timer
        for (let i = base; i < Math.min(base + N, totalPackets); i++) {
            postMessage({ type: 'SEND_PACKET', packet: { seq: i } });
            nextseqnum = Math.max(nextseqnum, i + 1);
            postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum, newWindowSize: N, newCongestionWindow: N, newSlowStartThreshold: ssthresh, newRequiredWindowSize: requiredWindowSize, newAcksReceivedForCurrentWindow: acksReceivedForCurrentWindow });
        }
        if (base < nextseqnum) {
            startTimer();
        }
        break;

    case 'RECEIVE_ACK':
      if (payload.ack >= base) {
        requiredWindowSize = Math.min(requiredWindowSize + 1, 100);
        postMessage({ type: 'LOG', message: `(Sender): ➡️ ACK received. Required window size increases to ${requiredWindowSize}.` });
        acksReceivedForCurrentWindow++;

        base = payload.ack + 1;

        if(requiredWindowSize >= ssthresh) {
          phase = 'aimd';
        }
        
        if (base === Math.min(windowBase + N, nextseqnum)) {
          acksReceivedForCurrentWindow = 0;
          stopTimer();
          if (base === totalPackets) {
             postMessage({ type: 'LOG', message: `(Sender): ⭐️ All packets acknowledged!` });
          }
        }
        postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum, newWindowSize: N, newCongestionWindow: N, newSlowStartThreshold: ssthresh, newRequiredWindowSize: requiredWindowSize, newAcksReceivedForCurrentWindow: acksReceivedForCurrentWindow, newPhase: phase });
      }
      break;

    case 'INCREASE_WINDOW_MANUAL':
      if(transition) {
        postMessage({ type: 'LOG', message: `(Sender): 🔴 Cannot increase window size during an active timeout!`});
        return;
      }
        N++;
        postMessage({ type: 'LOG', message: `(Sender): Window size manually increased to ${N}.` });
      postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum, newWindowSize: N, newCongestionWindow: N, newSlowStartThreshold: ssthresh, newRequiredWindowSize: requiredWindowSize, newAcksReceivedForCurrentWindow: acksReceivedForCurrentWindow });
      break;
      
    case 'DECREASE_WINDOW_MANUAL':
      if(transition) {
        postMessage({ type: 'LOG', message: `(Sender): 🔴 Cannot decrease window size during an active timeout!`});
        return;
      }
      if(N <= 1) {
        postMessage({ type: 'LOG', message: `(Sender): 🔴 Window size cannot be less than 1!`});
        return;
      }
      N--;
      postMessage({ type: 'LOG', message: `(Sender): Window size manually decreased to ${N}` });
      postMessage({ type: 'STATE_UPDATE', base, windowBase, nextseqnum, newWindowSize: N, newCongestionWindow: N, newSlowStartThreshold: ssthresh, newRequiredWindowSize: requiredWindowSize, newAcksReceivedForCurrentWindow: acksReceivedForCurrentWindow });
      break;
  }
};