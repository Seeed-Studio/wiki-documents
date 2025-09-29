---
description: Unleash the power of TCP for your Raspberry Pi 4G HAT. Explore how TCP ensures reliable data exchange, essential for IoT applications, remote monitoring, and more.

title: 4G LTE HAT on Raspberry Pi- TCP/IP Networking Explained
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - IoT
  - TCP/IP
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.webp
slug: /tcp_ip_raspberry_pi_4g_lte_hat
last_update:
  date: 12/20/2024
  author: Kasun Thushara
---

## Introduction 

TCP (Transmission Control Protocol) is vital for applications involving the Raspberry Pi 4G HAT because it ensures reliable, ordered, and error-checked data transmission over the internet. This is crucial for real-time applications like IoT devices, where consistent communication with cloud servers or remote systems is needed. TCP’s reliability makes it ideal for sending critical data (e.g., sensor readings, telemetry) and receiving commands, ensuring no data is lost or corrupted. It supports diverse applications such as remote monitoring, messaging systems, and file transfers with the Raspberry Pi acting as a gateway or client.

## Prerequisites

### Hardware Requirements

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Software Requirements 

#### Communication drivers and tools 

If you have not installed relevant drivers and communication tools, please check the [guide](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#software-preparation) first

### Additional Requirements 

You will need a pre-configured TCP server with the following details:

- **Host**: For example, your own server or for testing purposes tcpbin.com
- **Port Number**: A dedicated port number, or in this case, we will use port `4242` of `tcpbin.com`.

tcpbin.com is a public TCP server used for testing and debugging TCP/IP communication. It echoes back the messages sent to it, making it ideal for verifying connectivity and data transmission.



## Send AT Commands to tcpbin.com

Open Minicom on Raspberry Pi or Qcom Tool on Windows via USB.

```bash
sudo minicom -D /dev/ttyUSB2
```

 Step | Action                                              | AT Command                       | Expected Response                              |
|------|-----------------------------------------------------------|---------------------------------------------|-----------------------------------------------|
| 1    | Configure the APN for your mobile network provider.        | `AT+QICSGP=1,1,"dialogbb","","",1`           | `OK`                                           |
| 2    | Activate the PDP context.                | `AT+QIACT=1`                                 | `OK`                                           |
| 3    | Verify the PDP context is activated.     | `AT+QIACT?`                                  | `+QIACT: 1,1,1,"<Your_IP_Address>"` `OK`  |
| 4    | Open a TCP connection to the server.     | `AT+QIOPEN=1,0,"TCP","tcpbin.com",4242,0,0`  | `+QIOPEN: 0,0` (Indicates a successful connection) |
| 5    | Send a message to the server.            | `AT+QISEND=0`                                | `>` (Prompt to enter the message)  After typing message: `Hello TCPBin<Ctrl+Z>`  `SEND OK` |
| 6    | Read the response from the server.       | `AT+QIRD=0,1500`                             | `+QIRD: <length>`  `Hello TCPBin`  `OK` |
| 7    | Close the TCP connection.                | `AT+QICLOSE=0`                               | `OK`                                           |


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp.PNG" 
    style={{ width: 500}} 
  />
</div>

## Automated Python Script

Below is an automated Python script to interact with the Quectel 4G LTE module on a Raspberry Pi. The script uses the serial library to send AT commands to the module. You can customize the variables for APN, port, baud rate, TCP port, and address.


## Python Code Implementation 

### Step 1. Prepare the Directory and Virtual Environment


- Open a terminal on your Raspberry Pi.
- Create a new project folder and navigate into it:
```bash
mkdir TCP_EX
cd TCP_EX
```
- Set up a Python virtual environment:
```bash
python3 -m venv --system-site-packages env
```

- Activate the virtual environment:

```bash
source env/bin/activate
```

- Install the required libraries:

```bash
pip install pyserial 
```

### Step 2. Prepare the Python Script

- Open the **Thonny Python IDE** (pre-installed on Raspberry Pi).

- Create a new file in Thonny and paste the provided code into the editor.

- Update the usb_port parameter to match your Raspberry Pi's serial port for the 4G HAT. Typically, it might be `/dev/ttyUSB2` or `/dev/ttyUSB3`. Example:

```bash
usb_port = "/dev/ttyUSB2"
```
- Save the file as test_mqtt.py in the **TCP_EX** folder.

```bash 
import serial
import time

# Configuration Variables
APN = "dialogbb"  # Replace with your network APN
PORT = "/dev/ttyUSB2"  # Serial port connected to the Quectel module
BAUDRATE = 9600  # Communication baud rate
TCP_ADDRESS = "tcpbin.com"  # TCP server address
TCP_PORT = 4242  # TCP server port
MESSAGE = "Hello TCPBin"  # Message to send


def send_command(ser, command, wait_for="OK", timeout=5):
    """
    Send an AT command to the module and wait for a response.
    """
    ser.write((command + "\r\n").encode())
    time.sleep(0.5)
    end_time = time.time() + timeout
    response = b""
    while time.time() < end_time:
        if ser.in_waiting > 0:
            response += ser.read(ser.in_waiting)
            if wait_for.encode() in response:
                break
    print(f">> {command}")
    print(response.decode().strip())
    return response.decode().strip()


def main():
    try:
        # Open serial connection
        ser = serial.Serial(PORT, BAUDRATE, timeout=1)
        time.sleep(2)  # Allow the module to initialize

        # 1. Configure APN
        send_command(ser, f'AT+QICSGP=1,1,"{APN}","","",1')

        # 2. Activate PDP Context
        send_command(ser, "AT+QIACT=1")

        # 3. Check PDP Context State
        send_command(ser, "AT+QIACT?")

        # 4. Open TCP Connection
        send_command(ser, f'AT+QIOPEN=1,0,"TCP","{TCP_ADDRESS}",{TCP_PORT},0,0')
        time.sleep(5)  # Allow connection to establish

        # 5. Send Data
        send_command(ser, f"AT+QISEND=0")
        ser.write((MESSAGE + "\x1A").encode())  # Send message and end with Ctrl+Z
        time.sleep(1)  # Allow time for sending
        print("Message sent.")

        # 6. Read Response
        response = send_command(ser, "AT+QIRD=0,1500")
        print(f"Server Response: {response}")

        # 7. Close Connection
        send_command(ser, "AT+QICLOSE=0")
        print("Connection closed.")

        # Close serial port
        ser.close()

    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()


```

### Step 3. Run the Script

- Open a terminal, ensure you're in the project directory:
```bash
cd TCP_EX
```

- Activate the virtual environment:

```bash
source env/bin/activate
```

- Run the script using Python:
```bash
python test_tcp.py
```
- The output 
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.PNG" style={{width:600}}/></div>


## Resources


- **[PDF Book]** [TCP Application Guide](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_tcpip_application_note_v1-3/ )
  



## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>