## **Introduction**  
- **TCP (Transmission Control Protocol)** is a **connection-oriented** protocol, meaning that a connection must be established before data transmission.  
- It ensures **reliable, ordered, and error-checked** delivery of data between applications.  
- TCP operates in **full-duplex mode** and supports **point-to-point** communication.  


## **TCP Connection Establishment**  

### **3-Way Handshake**  
Before data transmission begins, TCP establishes a connection using a **three-step process**:  

1. **SYN (Synchronize)** → The client sends a **SYN** segment to the server, requesting a connection.  
2. **SYN-ACK (Acknowledge)** → The server responds with a **SYN-ACK**, acknowledging the request.  
3. **ACK (Acknowledge)** → The client sends an **ACK**, confirming the connection is established.  

**After this handshake, data transmission begins.**  


## **Stop-and-Wait vs. Pipelined Protocols**  

### **Stop-and-Wait Protocol**  
- The sender transmits **one packet at a time** and waits for an acknowledgment (ACK) before sending the next packet.  
- Simple but **inefficient**, especially for long-distance communication.  

### **Pipelined Protocols (Efficient Data Transmission)**  
- The sender **transmits multiple packets** before waiting for an acknowledgment.  
The **Go-Back-N (GBN) Protocol**  
     - The sender can have up to **N unacknowledged packets** in the pipeline.  
     - If a packet is lost, **all subsequent packets** must be retransmitted.  

## **TCP Congestion Control**  

### **Slow-Start Phase**  
- Initially, TCP **doubles the congestion window size** with each round-trip time (RTT), allowing a quick increase in transmission speed.  

### **Additive Increase and Multiplicative Decrease (AIMD)**  
- **Additive Increase**: If there is no congestion, TCP **gradually increases** its congestion window.  
- **Multiplicative Decrease**: When packet loss occurs, TCP **reduces the congestion window exponentially**, preventing further congestion.  

---

## **TCP Connection Termination (Closure)**  

### **TCP uses a 4-way handshake to close a connection:**  
1. **FIN** → The sender sends a **FIN** packet, requesting to close the connection.  
2. **ACK** → The receiver acknowledges the request.  
3. **FIN** → The receiver sends its **FIN** packet when ready to close.  
4. **ACK** → The sender acknowledges the receiver’s **FIN**, completing the termination.  

After termination, TCP enters the **TIME-WAIT** state before completely closing the connection.  