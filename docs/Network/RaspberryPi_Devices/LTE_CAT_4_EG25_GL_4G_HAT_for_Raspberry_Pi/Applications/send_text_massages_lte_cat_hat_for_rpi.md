---
description: Explore the critical role of SMS sending and receiving in IT systems using Quectel 4G HAT. Learn how SMS ensures reliable communication, enhances system alerts, enables remote control, and supports IoT applications with seamless integration and scalability. Perfect for IT professionals and IoT enthusiasts.

title: Sending and Receiving SMS Messages with Quectel 4G Raspberry pi Hat 
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - M2M
  - SMS
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.webp
slug: /send_receive_sms_raspberry_pi_4g_lte_hat
last_update:
  date: 12/11/2024
  author: Kasun Thushara
---

## Introduction

In rural and remote areas, where 4G coverage is sparse or unavailable, SMS communication through 2G networks becomes a vital tool for ensuring uninterrupted connectivity in IoT systems. **For wildlife preservation, this technology enables automated alert systems to monitor environmental conditions, track animal movements, and report critical events in real-time**. By leveraging 4G modules with SMS capabilities, devices can send automated alerts and receive instructions, ensuring that even in isolated regions, conservation efforts are not hindered by lack of modern network infrastructure. This integration of automation and communication helps enhance the effectiveness of monitoring systems in remote wildlife areas, offering a reliable solution for protection and research.

## Hardware Preparation

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

## The Setup

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

## Sending an SMS Using QCOM Tool on Windows

### Step 1: Setup the Module

- **Plug in the Module**
  - Connect the module to your Windows PC via USB. Make sure the DIP switches are positioned in the correct order. In this case, all switches are set to 0, which means they are disabled.
- **Turn on the Module**
  - Press the power button on the module.
- **Verify Communication Ports**
  - [Ensure that the drivers are installed correctly](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#for-windows). You should see the COM ports listed in the Windows Device Manager.

### Step 2: Open the QCOM Interface

- **Install and Launch QCOM**
  - Download and install the **QCOM v1.6** software.(if you not)
  - Launch the tool on your PC.
- **Configure the COM Port**
  - Select the COM port associated with the module (e.g., COM3) in the QCOM interface.
  - Set the baud rate to the recommended value (e.g., 9600).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG"
    style={{ width: 600}}
  />
</div>

### Step 3: Send an SMS

**Test the Module Communication**

- In the command input box, type the following command:

```bash
AT
```

- Click Send.
- The module should respond with:

```bash
OK
```

- This confirms that the module is ready.
  
**Set SMS Mode**

- Type the following command to set the SMS mode to text:

```bash
AT+CMGF=1
```

- Click Send.
- The module should respond with:

```bash
OK
```

**Check SMSC Number**

- Query the SMSC (Short Message Service Center) number from the SIM card by typing:

```bash
AT+CSCA?
```

- Click Send.The response should be something like:
  
```bash
+CSCA: "+1234567890",145
OK
```

- If no SMSC is set, contact your service provider to obtain the correct number, and set it using:

```bash
AT+CSCA="+1234567890"
```

**Compose and Send SMS**

- Type the command to initiate an SMS:

```bash
AT+CMGS="+9876543210"
```

- Replace +9876543210 with the recipient's phone number.

- Click Send.

- The QCOM interface will display:

```bash
>
```

- Now, type your message (e.g., Hello!) in the text box.

**Submit the SMS**

- Press Ctrl + Z or use the QCOM interface option to send the SMS.
- The module will respond with:

```bash
+CMGS: 25 
OK
```

- This indicates that the SMS was sent successfully.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_send.PNG"
    style={{ width: 600}}
  />
</div>

### Step 4: Verify the SMS

- Check the recipient’s phone to ensure the message has been received.

## Sending an SMS Using Minicom on Raspberry Pi

Assuming you have installed the drivers and booted the module correctly. If not, [please follow this guide](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).

**Step 1 :Open Minicom**

:::note
If the necessary drivers for communicating with AT commands are not installed, you will need to [install them](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)
:::

```bash
sudo minicom -D /dev/ttyUSB2
```

**Step 2:  Follow the Commands in the Table**

| **Command**          | **Response**                 | **Explanation**                                   |
|-----------------------|------------------------------|---------------------------------------------------|
| `ATE`                | `OK`                        | Enable echo to see typed commands in Minicom.     |
| `AT`                 | `OK`                        | Checks module readiness.                         |
| `AT+CMGF=1`          | `OK`                        | Sets the SMS mode to Text Mode.                  |
| `AT+CSCA?`           | `+CSCA: "+1234567890",145`  | Queries the SMSC (Short Message Service Center) number from the SIM. |
| `AT+CMGS="+94712222803"` | `>`                      | Prepares the module to accept the message content for the specified recipient. |
| *(Type the message: `Hello!`)* | *(No response)*     | Type the message content.                        |
| *(Press `Ctrl+Z`)*   | `+CMGS: 25` `OK`       | Sends the message. The module confirms with `+CMGS` and the message reference ID. |

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rpi_send_msg_1.PNG"
    style={{ width: 600}}
  />
</div>

## Python Script for Send Massages

```bash

import serial
import time

# Configure the serial port
SERIAL_PORT = "COM7"  # Replace with your module's COM port (e.g., COM3 on Windows, /dev/ttyUSB2 on Linux)
BAUD_RATE = 9600    # Adjust to the baud rate of your GSM module

# SMS details
SMSC_NUMBER = "+9477000000"  # Replace with your carrier's SMSC number in international format
RECIPIENT_NUMBER = "+94712222813"  # Replace with the recipient's phone number in international format
MESSAGE = "Hello, this is a test message from Python!"

def send_at_command(command, expected_response="OK", timeout=3):
    """Send an AT command to the GSM module and wait for a response."""
    ser.write((command + "\r").encode())
    time.sleep(timeout)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return expected_response in response

try:
    # Open the serial connection
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(2)  # Allow the module to initialize

    # Test communication with the GSM module
    if not send_at_command("AT"):
        raise Exception("GSM module not responding. Check the connection.")

    # Set SMSC number (optional, only if needed)
    if not send_at_command(f'AT+CSCA="{SMSC_NUMBER}"'):
        raise Exception("Failed to set SMSC number.")

    # Set SMS to text mode
    if not send_at_command("AT+CMGF=1"):
        raise Exception("Failed to set SMS mode to text.")

    # Send SMS
    if not send_at_command(f'AT+CMGS="{RECIPIENT_NUMBER}"', ">"):
        raise Exception("Failed to initiate SMS sending.")

    # Provide the message content and send Ctrl+Z to finalize
    ser.write((MESSAGE + "\x1A").encode())  # Ctrl+Z is sent as '\x1A'
    time.sleep(5)  # Wait for the module to send the SMS
    response = ser.read_all().decode()
    print(f"SMS Send Response: {response}")

    if "OK" in response:
        print("SMS sent successfully!")
    else:
        print("Failed to send SMS. Check the module or command syntax.")

except Exception as e:
    print(f"Error: {e}")

finally:
    if ser.is_open:
        ser.close()


```

## Receiving SMS Messages Using AT Commands on Windows Environment

This explains how to receive and read SMS messages using AT commands step-by-step. Follow these commands in the order listed.

Assuming you have installed the drivers and booted the module correctly. If not, [please follow this guide](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#for-windows).

### Step 1: Set SMS Mode to Text

Use the AT+CMGF=1 command to set the GSM module to Text Mode for easier SMS handling.

**Command:**

```bash
AT+CMGF=1
Expected Response:
OK
```

### Step 2: Check Current Message Storage

Use the AT+CPMS? command to check the current message storage configuration.

**Command:**

```bash
AT+CPMS?
```

**Expected Response:**
+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK

**Explanation:**

- `SR`: Status Report storage (e.g., SMS delivery reports).
- `MT`: Mobile Terminal memory (SIM and module storage).
In this example,"MT" contains 19 stored messages out of a capacity of 255.

### Step 3: Switch Message Storage to "MT"

To access the messages in the Mobile Terminal memory, switch the storage to "MT" using AT+CPMS="MT".

**Command:**

```bash
AT+CPMS="MT"
```

**Expected Response:**

```bash
+CPMS: 19,255,19,255,19,255 OK
```

**Explanation**

- 19,255: 19 messages are currently stored, and the storage has a capacity for 255 messages.

### Step 4: List All Stored Messages

Retrieve all messages stored in the selected memory using the AT+CMGL="ALL" command.

**Command:**

```bash
AT+CMGL="ALL"
```

**Expected Response:**

```bash
+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK
```

**Explanation:**

- +CMGL: 1: Index of the first message.
- "REC UNREAD": Status of the message (Unread).
- "+1234567890": Sender's phone number.
- Hello, this is a test message!: Message content.

### Step 5: Read a Specific Message

To read a specific message by its index (e.g., index 1), use the AT+CMGR=|index| command.

**Command:**

```bash
AT+CMGR=1
```

**Expected Response:**

```bash
+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK
```

**Explanation:**

- `REC UNREAD`: The message is marked as unread.
- `+1234567890`: The sender's phone number.
- Hello, this is a test message!: The message content.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rec_massages.PNG"
    style={{ width: 600}}
  />
</div>

## Receiving SMS Messages Using Minicom on Raspberry Pi

Assuming you have installed the drivers and booted the module correctly. If not, [please follow this guide](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).

## Step 1 :Open Minicom

```bash
sudo minicom -D /dev/ttyUSB2
```

## Step 2:  Follow the Commands in the Table

| **Step** | **Command**          | **Response Details**                                                                                                                                                 | **Purpose/Explanation**                                                                                                                                          |
|----------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1**    | `ATE`                | `OK`                                                                                                                                                                 | Enables echo to see typed commands in the terminal.                                                                                                               |
| **2**    | `AT+CMGF=1`          | `OK`                                                                                                                                                                 | Sets the SMS mode to Text Mode for easier SMS handling.                                                                                                           |
| **3**    | `AT+CPMS?`           | `+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK`                                                                                                                         | Checks the current message storage. `"SR"`: Status Reports. `"MT"` (Mobile Terminal): Contains stored messages on the SIM and module.                             |
| **4**    | `AT+CPMS="MT"`       | `+CPMS: 19,255,19,255,19,255 OK`                                                                                                                                     | Switches the message storage to `"MT"` (Mobile Terminal). `19,255`: Indicates 19 stored messages out of 255 available slots.                                       |
| **5**    | `AT+CMGL="ALL"`      | `+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK` | Retrieves all messages stored in the selected memory. `"REC UNREAD"`: Unread message. `+1234567890`: Sender's phone number.                                       |
| **6**    | `AT+CMGR=1`          | `+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK`                                                                      | Reads a specific message by its index (e.g., `1`). `"REC UNREAD"`: Indicates the message is unread. `Hello, this is a test message!`: Message content.            |

## Resources

- **[Web Page]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Web Page]** [AT Commands Manual V2.0](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_at_commands_manual_v2-0-2/)

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
