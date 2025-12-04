let expectedseqnum = 0;

onmessage = (e) => {
  const { type, packet, payload } = e.data;

  if(type === 'INIT') {
      expectedseqnum = payload.expectedseqnum || 0;
      postMessage({ type: 'STATE_UPDATE', newExpectedSeqNum: expectedseqnum });
      return;
  }

  if (type === 'RECEIVE_PACKET') {
    if (packet.seq === expectedseqnum) {
      postMessage({ type: 'LOG', message: `(Receiver): 🟢 Packet ${packet.seq} received correctly. Sending ACK ${expectedseqnum}.` });
      postMessage({ type: 'SEND_ACK', ack: expectedseqnum });
      expectedseqnum++;
      postMessage({ type: 'STATE_UPDATE', newExpectedSeqNum: expectedseqnum });
    } else {
      postMessage({ type: 'LOG', message: `(Receiver): 🟡 Packet ${packet.seq} discarded (expected ${expectedseqnum}). Resending ACK ${expectedseqnum - 1}.` });
      if (expectedseqnum > 0) {
        postMessage({ type: 'SEND_ACK', ack: expectedseqnum - 1 });
      }
    }
  }
};