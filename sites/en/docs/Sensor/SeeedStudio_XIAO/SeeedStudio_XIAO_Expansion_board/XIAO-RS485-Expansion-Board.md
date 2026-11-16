---
description: This guide will help you quickly set up the Seeed Studio XIAO RS485 Expansion Board and get started with RS485 communication.
title: RS485 Expansion Board for XIAO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /XIAO-RS485-Expansion-Board
sku: 113991354
last_update:
  date: 10/20/2026
  author: Zeller
createdAt: '2024-11-26'
updatedAt: '2026-10-20'
url: https://wiki.seeedstudio.com/XIAO-RS485-Expansion-Board/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Getting Started with Seeed Studio XIAO-RS485-Expansion-Board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>


:::tip

- V1.1 and earlier versions use **software direction control**. See the [software-to-software direction example](#software-direction-to-software-direction).

:::

## Features

- **Compatible with Seeed Studio XIAO**: Designed for Seeed Studio XIAO development boards.
- **Long-Distance Communication**: Supports RS-485 communication over distances of up to 1,200 m (approximately 3,937 ft).
- **5V or 12V DC Input**: Supports either supply voltage, with an onboard circuit that converts 12V to 5V.
- **Two 3-Pin Terminals**: Separate terminals for RS-485 signals (A, B, GND) and power (INT、5V、12V).
- **Compact Design**: Approximately the size of two XIAO boards, making it suitable for space-constrained projects.
- **Selectable Direction Control**: Configure hardware automatic or software-controlled RS-485 transmit/receive switching through the onboard 0 Ω resistors. The board ships configured for hardware automatic direction control by default.
- **RX/TX Activity LEDs**: Indicate data reception and transmission.
- **5V and 12V Power LEDs**: Indicate the presence of the corresponding input voltage

## Hardware Overview

<Tabs>
<TabItem value="XIAO RS485 Expansion Board " label="XIAO RS485 Expansion Board " default>

- XIAO RS485 Expansion Board indication diagram V1.2 Front

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
- XIAO RS485 Expansion Board indication diagram V1.2 Back

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Prepared material

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RS485-Expansion-Board × 2</th>
   <th>Seeed Studio XIAO ESP32-C3 × 2 </th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>


### Connection Schematic

- The XIAO RS-485 Expansion Board V1.2 uses the TP8485E-SR transceiver. The RS-485 signals map to the XIAO pins as follows: `RS485_TX` to D4, `RS485_RX` to D5, and `RS485_DE` to D2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_sch_1.png" style={{width:700, height:'auto'}}/></div>
<br/>
<div class="table-center">
  <table align="center">
    <tr>
        <th>Two RS485 expansion board connections</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_connect.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- **5V OUT/IN switch**: Controls the direction of power at the 5V terminal. Set it to `OUT` when this board supplies 5V to another device, or to `IN` when this board receives 5V through the terminal. 
- **120R switch**: Set it to `ON` to connect the onboard 120 Ω termination resistor across the RS-485 A and B lines, or to `NC` to disconnect it. For long cable runs, enable termination at the two physical ends of the bus; leave it disconnected on intermediate boards.
- **INT**: Reserved interrupt connection.

:::tip

- V1.2 is configured for **hardware automatic direction control** by default, so the sketch does not need to switch the direction through D2. To use software direction control, change the placement of the onboard 0 Ω resistors.

:::

- Location of the zero-ohm resistor for hardware auto-direction

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Hardware.png" style={{width:600, height:'auto'}}/></div>

- Location of the zero-ohm resistor for software manual direction

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Software.png" style={{width:600, height:'auto'}}/></div>

## Software Overview

In this project, the XIAO ESP32C3 communicates with the RS485 expansion board using D4 (GPIO6) and D5 (GPIO7).

### Hardware automatic direction to hardware automatic direction

When hardware automatic direction control is selected, the sketch does not need to control the DE pin.

**1. Sender Code**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware sender ready");
  delay(500);
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` starts USB serial output for the serial monitor.
- `Serial1.begin(9600, SERIAL_8N1, D5, D4)` starts RS-485 communication at 9600 baud. D5 is RX and D4 is TX.
- The board controls transmission direction automatically, so this sketch does not use D2.
- `Serial1.println()` sends a line of text every second. `Serial.println()` displays the local send status through USB; it does not confirm that the receiver received the message.

**2. Receiver Code**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware receiver ready");
  delay(500);
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` displays messages through USB. `Serial1` receives data from the RS-485 transceiver through D5.
- `Serial1.available()` checks whether received bytes are waiting in the UART buffer.
- `Serial1.readStringUntil('\n')` reads until a newline or timeout. `message.trim()` removes surrounding whitespace, including the carriage return sent by `println()`.
- If the resulting message is not empty, `Serial.print()` and `Serial.println()` display it in the USB serial monitor.
- The board controls direction automatically, so this sketch does not use D2.

**3. Test Results**

- Open the USB serial monitor for each XIAO to view the sent and received messages.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.png" style={{width:600, height:'auto'}}/></div>

- During data transfer, the onboard TX and RX indicators blink to show the corresponding activity.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### Hardware automatic direction to software direction

**1. Sender Code**

```cpp
#include <Arduino.h>

// Hardware -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Software sender ready");
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` starts USB serial output. `Serial1.begin(9600, SERIAL_8N1, D5, D4)` starts the RS-485 UART with RX on D5 and TX on D4.
- This board uses hardware automatic direction control, so the sender does not need to operate D2.
- In `loop()`, `Serial1.println()` sends a line of text over RS-485 once per second.
- `Serial.println()` displays the local send status through USB. Check the receiver's serial monitor to confirm reception.

**2. Receiver Code**

With software direction control, configure D2 as an output and keep it LOW on the receiver to enable receive mode.

```cpp
#include <Arduino.h>

// Hardware -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Hardware -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` is used for the USB serial monitor, while `Serial1` receives RS-485 data through D5.
- `pinMode(D2, OUTPUT)` configures D2 for direction control. Keeping D2 LOW selects receive mode.
- `Serial1.available()` checks for buffered data. `readStringUntil('\n')` reads a line, and `trim()` removes surrounding whitespace.
- `message.length() > 0` filters out empty messages. Valid received text is displayed through the USB serial monitor.


**3. Test Results**

- Open the USB serial monitor for each XIAO to view the sent and received messages.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-r.png" style={{width:600, height:'auto'}}/></div>

- During data transfer, the onboard TX and RX indicators blink to show the corresponding activity.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### Software direction to software direction

In software direction control, D2 selects the operating mode: LOW for receive and HIGH for transmit.

**1. Sender Code**

```cpp
#include <Arduino.h>

// Software -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 controls transmit/receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software sender ready");
}

void loop() {
  digitalWrite(D2, HIGH); // Enable RS485 transmission.
  delayMicroseconds(100); // Allow the transceiver to switch.
  Serial1.println("Hello from software sender"); // Send over the RS485 bus.
  Serial1.flush(true); // Wait for TX only; keep RX buffer intact.
  digitalWrite(D2, LOW); // Return to receive mode.
  Serial.println("Sent: Hello from software sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial` displays status through USB. `Serial1` sends RS-485 data through D4 at 9600 baud.
- D2 controls direction: LOW selects receive mode and HIGH selects transmit mode.
- Before sending, the sketch sets D2 HIGH and waits briefly for the transceiver to switch modes.
- `Serial1.println()` sends the text. `Serial1.flush(true)` waits for UART transmission to finish without clearing received data.
- After transmission, the sketch sets D2 LOW and displays the local send status through USB.

**2. Receiver Code**

```cpp
#include <Arduino.h>

// Software -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial.begin(115200)` starts USB serial output. `Serial1.begin(9600, SERIAL_8N1, D5, D4)` starts the RS-485 UART with RX on D5 and TX on D4.
- D2 is configured for direction control and kept LOW so the transceiver remains in receive mode.
- When `Serial1.available()` reports buffered data, `readStringUntil('\n')` reads a line.
- `trim()` removes surrounding whitespace. If the message is not empty, the sketch displays it through USB.

**3. Test Results**

- Open the USB serial monitor for each XIAO to view the sent and received messages.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_r-t-r.png" style={{width:600, height:'auto'}}/></div>

- During data transfer, the onboard TX and RX indicators blink to show the corresponding activity.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

## Resources

- **📄[Schematic]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.2](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH_20260917.pdf)
- **🗃️[PCB Design Files]** [Seeed Studio XIAO-RS485-Expansion-Board V1.2 Project](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH&PCB_20260917.zip)
<br/>

- **📄[Schematic]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.1](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)
- **🗃️[KiCad Schematic]** [Seeed Studio XIAO-RS485-Expansion-Board V1.1 SCH](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)

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
