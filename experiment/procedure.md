The simulation has following 7 sections:

## 1. Stop and Wait
- Execute the Stop and Wait protocol for 2 packets.
- Use `Re-Send` to resend the last packet.
- Use `Send New` to send the next packet.

## 2. GBN-Sender
- Execute the Go-Back-N protocol for entire window.
- Use `Move Window` to move sender window position by 1 to right.
- Use `Re-Send` to resend a specific packet after the *timeout*.
- Use `Send New` to send the next packet in the sequence.
- Then click on Submit to validate. 

## 3. 3-Way-Handshake
- Demonstrate the 3-Way-Handshake.
- Send the `SYN`, `SYN+ACK` and `ACK` in appropriate order, and from appropriate user.
- Begin from the Sender.

## 4. Slow Start
- Execute the Go-Back-N protocol for entire window.
- Use `Move Window` to move window position by 1 to right.
- Use `Send New` to send the next packet in sequence.
- Use `Extend Window` to increase the Sender Window Size by 1.

## 5. AIMD
- Execute the Additive Increase, Multiplicative Decrease protocol for entire window.
- Use `Move Window` to move window position by 1 to right.
- Use `Send New` to send the next packet in sequence.
- Use `Re-Send` to resend a specific packet after the *timeout*.
- Use `Add 1` to increase the Sender Window Size by 1.
- Use `Divide 2` to decrease Window Size by factor of 2.

## 6. TCP Closure
- Demonstrate the TCP Closure.
- Send the `FIN` and `ACK` in appropriate order, and from appropriate user.
- Begin from the Sender.

## 7. TCP
- Demonstrate the entire Transmission Control Protocol.
    - Step 1: TCP 3-Way Handshake
    - Step 2: Slow Start (Congestion Window Size - 8)
    - Step 3: Additive Increase, Multiplicative Decrease (All remaining packets)
    - Step 4: TCP Closure
- Use `Send New` to send the next packet in sequence.
- Use `Re-Send` to resend a specific packet after the *timeout*.
- Use `Move Window` to move window position by 1 to right.
- Use `Size + 1` to increase the Sender Window Size by 1.
- Use `Size ÷ 2` to decrease Window Size by factor of 2.
- Use `SYN`, `FIN` and `ACK` to send those packets during handshake and closure.
