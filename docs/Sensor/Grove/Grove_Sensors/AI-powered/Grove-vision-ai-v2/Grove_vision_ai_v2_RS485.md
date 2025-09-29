---
description: Guide on how to transfer recognition data from Vision AI V2 via RS485
title: RS485 transmission of Vision AI V2 data
keywords:
- RS485
- Vision AI
image: https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.webp
slug: /grove_vision_ai_v2_rs485
last_update:
  date: 12/19/2024
  author: Jason
---



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.jpg" style={{width:500, height:'auto'}}/></div>

:::tip

If you need to use the RS485 expansion board in conjunction with Vision AI V2, you will need to re-solder new header pins to the back of the RS485 expansion board.

:::


### Hadware Preparation

<table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Grove Vision AI V2</th>
        <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
        <th>Seeed Studio XIAO RS485-Expansion-Board</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
        <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>

### Connection method

First of all, prepare two expansion boards, two XIAO series development boards, and one Vision AI V2, and connect the corresponding pins according to the diagram，This routine uses the XIAO ESP32C3 as a demo.

**Step 1 . Prepare two RS485 expansion boards and two XIAO series development boards and connect the pins according to the following figure**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connect_modifg.png" style={{width:700, height:'auto'}}/></div>

**Step 2 . Prepare Vision AI V2 to be mounted on the reverse side of one of the two RS485 expansion boards as a sender**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/11.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
If you are using an RS485 expansion board for the first time and are not sure how to wire it, click on this link(https://wiki.seeedstudio.com/XIAO-RS485-Expansion-Board/)

If you don't know how to burn the model and add the model output code, click on this link(https://wiki.seeedstudio.com/grove_vision_ai_v2_software_support/), which will tell you each step in detail

For better subsequent use, do not skip these two steps！
:::

## Software Prearation

### Sender Code

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

HardwareSerial Serial3(1); 

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

#define enable_pin D2 // Define the enable pin as D2

SSCMA AI;

void setup()
{
    Serial3.begin(115200, SERIAL_8N1, 7, 6); // Initialize Serial3 with 115200 baud rate, 8 data bits, no parity, 1 stop bit
    Serial.begin(9600); // Initialize Serial for debugging output
    AI.begin(&atSerial); // Initialize the AI module with the AT serial

    pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
    digitalWrite(enable_pin, HIGH); // Set the enable pin to high to enable the AI module
}

void loop()
{
    if (!AI.invoke(1, false, true)) { // Invoke the AI to start processing

        Serial.println("invoke success"); // Print success message

        // Print performance metrics
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        // Loop through detected boxes
        for (int i = 0; i < AI.boxes().size(); i++) {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }

        // Loop through detected classes
        for (int i = 0; i < AI.classes().size(); i++) {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.println(AI.classes()[i].target);

            // Check the target class and send corresponding status
            if (AI.classes()[i].target == 0) {
                String status_a = "no people detected"; // Define status for no people detected
                Serial3.println(status_a); // Send status to Serial3
                Serial.println(status_a); // Print status to Serial monitor
            } else if (AI.classes()[i].target == 1) {
                String status_b = "people detected"; // Define status for people detected
                Serial3.println(status_b); // Send status to Serial3
                Serial.println(status_b); // Print status to Serial monitor
            }
        }
        delay(1000); // Wait for 1 second before the next loop iteration
    }
}
```

### Code Detailed Functions

- **Library Inclusion**
  - Include the `HardwareSerial` library to use hardware serial functionality.
  - Include the `Seeed_Arduino_SSCMA` library for AI module control.

- **Serial Object Creation**

    ```cpp
    HardwareSerial Serial3(1); 
    HardwareSerial atSerial(0);
    ```

    Create Serial3 and atSerial objects for serial communication.

- **AI Object Creation**

    ```cpp
    SSCMA AI;
    ```

    Create an instance of the SSCMA class for AI processing.

- **Performance Metrics**

    ```cpp
    Serial.print("perf: prepocess=");
   Serial.print(AI.perf().prepocess);
   Serial.print(", inference=");
   Serial.print(AI.perf().inference);
   Serial.print(", postpocess=");
   Serial.println(AI.perf().postprocess);
    ```

    Print performance metrics of the AI processing stages: preprocessing, inference, and postprocessing.

- **Detected Boxes Loop**

    ```cpp

    for (int i = 0; i < AI.boxes().size(); i++) {
        Serial.print("Box[");
        Serial.print(i);
        Serial.print("] target=");
        Serial.print(AI.boxes()[i].target);
        Serial.print(", score=");
        Serial.print(AI.boxes()[i].score);
        Serial.print(", x=");
        Serial.print(AI.boxes()[i].x);
        Serial.print(", y=");
        Serial.print(AI.boxes()[i].y);
        Serial.print(", w=");
        Serial.print(AI.boxes()[i].w);
        Serial.print(", h=");
        Serial.println(AI.boxes()[i].h);
    }
    ```

    Loop through detected boxes and print their details, including target, score, and bounding box coordinates.

- **Detected Classes Loop**

    ```cpp
    for (int i = 0; i < AI.classes().size(); i++) {
       Serial.print("Class[");
       Serial.print(i);
       Serial.print("] target=");
       Serial.println(AI.classes()[i].target);
    ```

    Loop through detected classes and print their targets.

- **Macro Definition**

    ```cpp
    pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
    digitalWrite(enable_pin, LOW);
    ```

    Define the enable pin as D2.

- **Send Message**

    ```cpp
    // Check the target class and send corresponding status
    if (AI.classes()[i].target == 0) {
        String status_a = "no people detected"; // Define status for no people detected
        Serial3.println(status_a); // Send status to Serial3
        Serial.println(status_a); // Print status to Serial monitor
    } else if (AI.classes()[i].target == 1) {
        String status_b = "people detected"; // Define status for people detected
        Serial3.println(status_b); // Send status to Serial3
        Serial.println(status_b); // Print status to Serial monitor
    }
    ```

    Determine whether a person is detected, if a person is detected it is sent to the receiver PEOPLE DETECTED, if no person is detected it is sent to the receiver NO PEOPLE DETECTED.

### Receiver Code

```cpp
#include <HardwareSerial.h>

HardwareSerial Serial3(1); // Use UART2
#define enable_pin D2 // Define the enable pin as D2


void setup() {
  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200
  Serial3.begin(115200, SERIAL_8N1, 7, 6); // Initialize Serial3 with 115200 baud rate, 8 data bits, no parity, 1 stop bit (RX=D4(GPIO4), TX=D5(GPIO5))
  
  // Wait for the hardware serial to be ready
  while(!Serial3);
  while(!Serial); // This line is generally unnecessary as Serial.begin() is ready immediately

  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
  digitalWrite(enable_pin, LOW); // Set the enable pin to low to enable the device
}

void loop() {
    delay(100); // Delay for 100 milliseconds
    // Check if there is data available from the hardware serial
    if (Serial3.available()) {
        String receivedData = Serial3.readStringUntil('\n'); // Read string until newline character
        Serial.print("Received data: "); // Print label for received data
        Serial.println(receivedData); // Directly print the received data
    }
}
```

### Code Detailed Functions

- **Library Inclusion**
  - Include the `HardwareSerial` library to use hardware serial functionality.

- **Serial Object Creation**
  - Create a `Serial3` object using UART2.

- **Macro Definition**

    ```cpp
    pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
    digitalWrite(enable_pin, LOW);
    ```

    Define the enable pin as D2.

- **Setup Function**

    ```cpp
    Serial3.begin(115200, SERIAL_8N1, 7, 6);
    ```

    nitialize the main serial and Serial3, setting baud rate, data bits, etc.this is the serial port that communicates with the vision ai v2 to transfer data.

    ```cpp
    while(!Serial3);
    while(!Serial); 
    ```

    Wait for the all serial ports to be ready, set the enable pin as output, and pull it low to enable the device.

- **Loop Function**
  - `if (Serial3.available());`: wCheck every 100 milliseconds if there is data available on Serial3.
  - `String receivedData = Serial3.readStringUntil('\n');`:If data is available, read it until a newline character and print the received data to the main serial.
- **Print results**

    ```cpp
    Serial.print("Received data: "); 
    Serial.println(receivedData); 
    ```

    Printing the sender's message

### Results Chart

However, the camera will send **“people detected”** when it recognizes a person and **"no people detected"** when it does not recognize a person, and the receiver will display the result of the sender's recognition on the serial port.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/result.png" style={{width:1000, height:'auto'}}/></div>

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
