---
description: This wiki will provide a brief introduction on how to use the serial port on the device for debugging and triggering photo/video shooting/recordings.
title: reCamera Pro UART Usage
keywords:
  - reCamera
  - reCamera Pro
  - UART
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-9'
url: https://wiki.seeedstudio.com/recamera_pro_uart_usage/
---

# Using the UART Interface

There are two serial ports on the device: one is the DEBUG UART dedicated to debugging, and the other is the UART interface used for web UI triggering.
![Hardware Base Board Interface Diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![Expansion Port Schematic](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## Connecting the DEBUG UART
The baud rate of the debug serial port is 1500000, and the hardware interface specification is MX1.25. The pin sequence is shown below.
![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. First, prepare a USB-to-serial converter. Connect the TX of the converter to the RX pin of the device, and connect the RX of the converter to the TX pin of the device. Remember to connect GND as well.
2. Power on the device, and you will be able to see the device debugging information on the converter.
![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

## Using the UART on the Expansion Interface

This UART interface is used as the UART interface for web UI triggering. It can be used to receive AI inference data, and it can also be used to send commands to trigger events.

### Serial Port Trigger
1. First, prepare a 10-pin MX1.25 cable and plug it into the expansion interface.

2. Then, according to the pin sequence in the expansion diagram above, connect it to your USB-to-TTL tool. Connect the TX of the converter to the RX pin of the device, and connect the RX of the converter to the TX pin of the device. Remember to connect GND as well.

3. In ***Device Info*** -> ***Connection Settings***, you can set the serial port baud rate.
![DEBUG_UART_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

4. In ***Recording Settings*** -> ***Recording Configuration*** -> ***Serial Port Trigger***, click Configure to set the trigger command.
![DEBUG_UART_COMMAND_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

5. Open the serial port tool, select the corresponding serial port device, and send the trigger command.
![DEBUG_UART_SEND_COMMAND](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

6. In ***Recording Settings*** -> ***File Preview***, you can view the photo or video captured by the serial port trigger just now.
![DEBUG_UART_FILE_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
The trigger command can only be sent in ASCII format. HEX sending is not supported, and Chinese characters are not supported.
:::

### Receiving AI Inference Results
1. First, in ***AI Inference*** -> ***Output Method***, select ***Serial Port***.
![UART_AI_OUTPUT_CONFIG](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Open the serial port tool, and you will be able to see the output results.
![UART_AI_OUTPUT](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>