---
description: Trigger photo or video capture on reCamera Pro from external devices using GPIO pins, serial commands, or HTTPS requests.
title: Trigger Capture from External Devices
keywords:
  - reCamera
  - reCamera Pro
  - GPIO
  - UART
  - serial trigger
  - HTTPS trigger
  - external trigger
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_uart_usage
sku: 10003420
sidebar_position: 12
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_uart_usage/
---

# Trigger Capture from External Devices

reCamera Pro has two serial ports: a **DEBUG UART** for system debugging, and a **UART interface** on the expansion port for Web UI triggering and receiving AI inference data. Combined with GPIO and HTTPS triggers, you can integrate the camera with external controllers, sensors, and automation systems.

![Hardware Base Board Interface Diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)
![Expansion Port Schematic](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/EXT_GPIO.jpg)

## Connecting the DEBUG UART

The debug serial port baud rate is **1500000**, and the hardware interface is **MX1.25**.

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

1. Prepare a USB-to-serial converter.
2. Connect TX→RX, RX→TX, and GND→GND between the converter and the device.
3. Power on the device to see debugging information on the converter.

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

{/* TODO(verify): confirm whether the debug UART baud rate is configurable or fixed at 1500000 */}

## Using the expansion UART for triggering

### Connect the expansion port

1. Prepare a **10-pin MX1.25 cable** and plug it into the expansion interface.
2. Connect TX→RX, RX→TX, and GND→GND to your USB-to-TTL tool per the expansion diagram above.

### Set the baud rate

In **Device Info** → **Connection Settings**, set the serial port baud rate.

![UART connection config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_CONNECT_CONFIG.png)

### Serial port trigger

1. In **Recording Settings** → **Recording Configuration** → **Serial Port Trigger**, click **Configure** to set the trigger command.

![UART trigger config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_TRIGGER_CONFIG.png)

2. Open your serial port tool, select the correct serial port, and send the trigger command.

![UART send command](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_SEND_COMMAND.png)

3. In **Recording Settings** → **File Preview**, view the captured photo or video.

![UART file preview](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_FILE_SHOW.png)

:::note
The trigger command can only be sent in **ASCII format**. HEX sending and Chinese characters are not supported.
:::

### Receive AI inference results

1. In **AI Inference** → **Output Method**, select **Serial Port**.

![UART AI output config](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Open your serial port tool to see the inference results.

![UART AI output](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

{/* TODO(verify): document the exact serial data format for inference results and whether it matches the real-time monitoring log fields */}

## GPIO trigger

GPIO trigger is configured in **Recording Settings** → **Recording Configuration** → **GPIO Trigger**:

| Configuration Item | Description |
|---|---|
| GPIO Pin Name | Select the GPIO pin |
| Pin State | Default pin state, e.g. floating |
| Trigger Signal | Trigger level, e.g. high level |
| Debounce Duration | Debounce time in milliseconds |

Suitable for integration with external sensors, buttons, door magnets, PIR sensors, or relays.

{/* TODO(verify): document which GPIO pins are available on the expansion port and their voltage levels */}

## HTTPS trigger

HTTPS trigger is configured in **Recording Settings** → **Recording Configuration** → **HTTPS Trigger**. The page displays the HTTPS trigger address that external systems can call.

Suitable for integration with third-party platforms, alarm systems, or automation scripts.

{/* TODO(verify): document the exact HTTPS trigger URL format, HTTP method, and request body schema */}

## Related pages

- [Configure Event Recording](/recamera_pro_record_settings/)
- [Send Detection Results over HTTP/UART](/recamera_pro_http_uart/)
- [GPIO Pins Guide](/recamera_pro_gpio_guide/)

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
