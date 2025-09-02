---
description: Discover how the 4G LTE HAT for Raspberry Pi and MQTT protocol enable efficient, real-time communication for IoT and IIoT applications. Simplify remote connectivity with AT commands for scalable, high-speed data transmission and remote management.

title: Setting Up 4G LTE Connectivity for IIoT with MQTT
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - IoT
  - MQTT
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.webp
slug: /mqtt_raspberry_pi_4g_lte_hat
last_update:
  date: 12/18/2024
  author: Kasun Thushara
---

## Introduction

The 4G LTE HAT for Raspberry Pi provides reliable, high-speed cellular connectivity, making it essential for remote and industrial IoT (IIoT) applications. With MQTT, a lightweight messaging protocol, devices can communicate efficiently over cellular networks, even in isolated locations. Using AT commands for configuration, it simplifies the process of connecting IoT devices to the network. This combination of 4G LTE and MQTT enhances real-time data transmission, enabling scalable IIoT solutions with remote management capabilities.

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

#### Mosquitto Explorer

We will be using the Mosquitto broker, specifically the test broker available at **https://test.mosquitto.org** , which `does not require a username or password`. For convenience, it is recommended to [install Mosquitto](https://mqtt-explorer.com/) directly on your PC for testing purposes.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.PNG"
    style={{ width: 500}}
  />
</div>

## Using AT commands Let's connect to MQTT Broker

**Step 1: Configure receiving mode**

```bash
AT+QMTCFG="recv/mode",0,0,1
```

**Step 2: Open a network for MQTT client**

```bash
AT+QMTOPEN=0,"test.mosquitto.org",1883

```

**Step 3: Check MQTT connection status (optional)**

```bash
AT+QMTOPEN?
```

**Step 4: Connect a client to the Mosquitto MQTT server**

```bash
AT+QMTCONN=0,"clientExample"
```

:::note
Note that the client ID must be unique, so ensure you generate a highly unique one. Mosquitto's public broker does not require a username or password for access.
:::

**Step 5: Publish a message to a topic**

```bash
AT+QMTPUBEX=0,0,0,0,"test/topic",30 

```

:::note
 when `>` appear type the massage and press ctrl+z
:::

```bash
> This is test data, hello MQTT.
```

Open Mosquitto Explorer and enter the topic you published to. You will see the updates appear there.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_pub.PNG"
    style={{ width: 500}}
  />
</div>

**Step 6: Subscribe to a topic**

```bash
AT+QMTSUB=0,1,"test/topic",2
```

Open Mosquitto Explorer and enter the topic  and massage you want to publish to from the 4G module.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_2.PNG"
    style={{ width: 500}}
  />
</div>

You will then see the published message successfully subscribed to at the 4G module's end.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_1.PNG"
    style={{ width: 500}}
  />
</div>

**Step 7: Unsubscribe from a topic**

```bash
AT+QMTUNS=0,2,"test/topic"
```

**Step 8:  Disconnect the client from the MQTT server**

```bash
AT+QMTDISC=0
```

## Python Code Implementation

### Step 1. Prepare the Directory and Virtual Environment

- Open a terminal on your Raspberry Pi.
- Create a new project folder and navigate into it:

```bash
mkdir mqtt_EX
cd mqtt_EX
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

- Save the file as test_mqtt.py in the **mqtt_EX** folder.

```bash

import serial
import time

# Serial port configuration
SERIAL_PORT = '/dev/ttyUSB2'  # Adjust based on your setup
BAUD_RATE = 9600


def send_at_command(ser, command, delay=1):
    """
    Sends an AT command to the Quectel module and waits for a response.
    """
    ser.write((command + '\r\n').encode())
    time.sleep(delay)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return response


def main():
    # Open serial connection
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5)
    if not ser.is_open:
        ser.open()

    try:
        # Configure MQTT receive mode
        send_at_command(ser, 'AT+QMTCFG="recv/mode",0,0,1')

        # Open MQTT connection
        send_at_command(ser, 'AT+QMTOPEN=0,"test.mosquitto.org",1883')
        send_at_command(ser, 'AT+QMTOPEN?')  # Check connection status

        # Connect to the MQTT broker
        send_at_command(ser, 'AT+QMTCONN=0,"clientExample"')

        # Subscribe to the topic
        send_at_command(ser, 'AT+QMTSUB=0,1,"test/topic_subscribe",2')

        print("Publishing and subscribing. Press Ctrl+C to stop.")

        while True:
            try:
                # Publish a message
                send_at_command(ser, 'AT+QMTPUBEX=0,0,0,0,"test/topic_publish",30')
                send_at_command(ser, 'This is test data, hello MQTT.', delay=0.5)

                # Read incoming messages
                print("Checking for subscribed topic messages...")
                incoming = ser.read_all().decode()
                if incoming:
                    print(f"Received: {incoming}")

                # Delay between operations
                time.sleep(2)
            except KeyboardInterrupt:
                print("Exiting loop...")
                break

        # Unsubscribe from the topic
        send_at_command(ser, 'AT+QMTUNS=0,2,"test/topic_subscribe"')

        # Disconnect from the broker
        send_at_command(ser, 'AT+QMTDISC=0')
    finally:
        # Close serial connection
        ser.close()


if __name__ == '__main__':
    main()

```

### Step 3. Run the Script

- Open a terminal, ensure you're in the project directory:

```bash
cd mqtt_EX
```

- Activate the virtual environment:

```bash
source env/bin/activate
```

- Run the script using Python:

```bash
python test_mqtt.py
```

- The output
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_python.PNG" style={{width:800}}/></div>

## Resources

- **[PDF Book]** [MQTT Application Guide](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_LTE_Standard_MQTT_Application_Note_V1.2.pdf )
  
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
