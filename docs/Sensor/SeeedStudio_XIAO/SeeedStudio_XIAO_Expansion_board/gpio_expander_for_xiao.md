---
description: Create a doc page with rich content.
title: IO Expander for XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /io_expander_for_xiao
last_update:
  date: 09/18/2023
  author: Stephen Lo
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

The IO Expander for XIAO is a state-of-the-art expansion board designed to enhance the capabilities of the Seeed Studio XIAO series. Powered by the MCP23017 chip, this board offers an additional 16 IO pins, allowing users to expand their projects without constraints. Whether you're a hobbyist looking to experiment with more components or a professional seeking a reliable IO expansion solution, this board is tailored to meet your needs. Its compatibility with the XIAO series ensures seamless integration, making your development process smoother and more efficient.

## Features

- Seamless Integration with XIAO: Designed to work perfectly with the Seeed Studio XIAO series.
- 16 Additional IO Pins: Powered by the MCP23017, it provides 16 extra IO pins for your projects.
- I2C Interface with Configurable Address: Default I2C address is 0x21, but can be configured to 0x20.
- Robust Design: Built with high-quality materials to ensure longevity and reliability.

## Specification

- Chip: MCP23017
- Number of IO Pins: 16
- Communication Protocol: I2C
- Default I2C Address: 0x21 (Configurable to 0x20)
- Operating Voltage: 3.3V
- Dimensions: 21mm x 17mm

## Applications

The IO Expander for XIAO is versatile and can be used in a multitude of applications, including but not limited to:

- Home Automation Systems: Expand the number of devices you can control in your smart home setup.
- Robotics: Add more sensors, motors, or other components to your robot without running out of IO pins.
- Gaming Consoles: Design custom controllers or other peripherals with a plethora of buttons and switches.
- Industrial Control Systems: Manage more devices and sensors in your industrial setup.
- Educational Projects: Teach students about microcontrollers and electronics without being limited by the number of IO pins.

## Hardware Overview

This section provides a detailed overview of the various components and interfaces on the XIAO IO Expander Board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. Standard XIAO Pads

These are the standard pads for connecting the XIAO microcontroller.

### 1. J1 Pads

The J1 pads allow users to decide whether to connect the MCP23017's RST, INTB, and INTA pins to the XIAO's D6, D1, and D0 pins through soldering. From top to bottom, they are RST, INTB, INTA.

By default, when you use the Expansion Board, the Additional Output Pads in area 8 are enabled. If you don't want to enable them, you need to cut the two adjacent pads in area J1 with a knife.

### 2. MCP23017 Chip

This is the main I/O expander chip, providing an additional 16 IOs.

### 3. J2 Pads

This pad is for selecting the I2C address. The default address is 0x21. If you solder this pad, the address can be changed to 0x20.

### 4. MCP23017 Output Pins

These are the output pins from the MCP23017 chip. Each pin's definition can be seen on the back of the board. They range from PA0 to PB7, providing a total of 16 IOs.

### 5. Grove Pads

If you wish to connect a Grove module, you can solder the provided Grove socket. This Grove interface is connected to the I2C bus. If you choose to use the IIC pins here, then you will not be able to use the extended IO pins in area 4.

### 6. VCC Pin

This is an output pin that can be used to power other components.

### 7. GND Pin

This is also an output pin that can be used for grounding other components.

### 8. Additional Output Pads

These are some additional output pads, including GND, INTB, INTA, RST. If you wish to solder these pins for use elsewhere, you can do so.


## Getting Started

Welcome to the quick start guide for the IO Expander for XIAO. This guide aims to help you set up and get started with your new IO Expander board in conjunction with the XIAO RP2040 main controller.

### Hardware Preparation

There are three main ways to use this expansion board, 

**Mode 1: SMD**

If your XIAO is unsoldered pins, then you can choose the direct SMD method to solder the XIAO and the expansion board to the PCB board to use the function of GPIO expansion.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::note
The PCBs pictured are for display only and were not on the shelves for sale as of the article.
:::

**Mode 2: XIAO connects directly with the expansion board through the row of pins**

In this approach, you have the option of soldering connecting wires directly to the GPIO expansion board to connect your target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>


**Mode 3: XIAO connects with the expansion board through the long row of pins, and the expansion board is expanded by soldering the row of pins**

With this connection method, you are free to install DuPont cables to the GPIO expansion board. Convenient wiring for your application.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>


Once the soldering is complete, you can proceed to connect the expansion board to the XIAO RP2040 main controller.


For programming the XIAO RP2040, you'll need a TYPE-C USB data cable. Connect one end to the XIAO RP2040 and the other to your computer. For a detailed guide on programming the XIAO RP2040, please refer to this [Wiki](https://wiki.seeedstudio.com/XIAO-RP2040/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### Software Preparation

Before you can start programming the board, you'll need a specific library for XIAO. Download the MCP23017 library from this [GitHub link](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library). Once downloaded, install the library in your programming environment.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Demo: IO output high and low level

In the Arduino IDE, open a new sketch and copy the following example code:

```cpp
#include <Adafruit_MCP23X17.h>

Adafruit_MCP23X17 mcp;

void setup() {
    Serial.begin(9600);
    Serial.println("MCP23xxx Blink Test!");
    if (!mcp.begin_I2C()) {
        Serial.println("Error.");
        while (1);
    }

    Serial.println("Looping...");

    for(int i=0; i<16; i++) {
        mcp.pinMode(i, OUTPUT);
    }
}

void loop() {
    mcp.digitalWrite(15, LOW); //PB7
    mcp.digitalWrite(14, HIGH); //PB6
    mcp.digitalWrite(13, HIGH); //PB5
    mcp.digitalWrite(12, HIGH); //PB4
    mcp.digitalWrite(11, HIGH); //PB3
    mcp.digitalWrite(10, HIGH); //PB2
    mcp.digitalWrite(9, HIGH); //PB1
    mcp.digitalWrite(8, HIGH); //PB0
    mcp.digitalWrite(7, HIGH); //PA7
    mcp.digitalWrite(6, HIGH); //PA6
    mcp.digitalWrite(5, HIGH); //PA5
    mcp.digitalWrite(4, HIGH); //PA4
    mcp.digitalWrite(3, HIGH); //PA3
    mcp.digitalWrite(2, HIGH); //PA2
    mcp.digitalWrite(1, HIGH); //PA1
    mcp.digitalWrite(0, HIGH); //PA0
    delay(1000);
}
```

Upload the above code to your XIAO. After the code is successfully uploaded, you will see that all pins are 3.3V high except for the PB7 pin.

:::caution
This expansion board can only use digital inputs and outputs, not PWM or analog input and output functions.
:::

### Pin Addressing

When using single pin operations such as _pinMode(pinId, dir)_ or _digitalRead(pinId)_  or _digitalWrite(pinId, val)_ then the pins are addressed using the ID's below. For example, for set the mode of _GPB0_ then use _pinMode(8, ...)_. **NOTE** The MCP23008 and MCP23S08 only have _GPAx_ pins.

| MCP23x17 Pin # | Pin Name | Pin ID |
| :------------: | :------: | :----: |
|       21       |   GPA0   |   0    |
|       22       |   GPA1   |   1    |
|       23       |   GPA2   |   2    |
|       24       |   GPA3   |   3    |
|       25       |   GPA4   |   4    |
|       26       |   GPA5   |   5    |
|       27       |   GPA6   |   6    |
|       28       |   GPA7   |   7    |
|       1        |   GPB0   |   8    |
|       2        |   GPB1   |   9    |
|       3        |   GPB2   |   10   |
|       4        |   GPB3   |   11   |
|       5        |   GPB4   |   12   |
|       6        |   GPB5   |   13   |
|       7        |   GPB6   |   14   |
|       8        |   GPB7   |   15   |


## FAQ

### 1. Why isn't my IO Expander for XIAO responding?

**Answer**: Ensure that the XIAO module is correctly plugged into the expansion board. Also, check if the necessary libraries are installed and the correct board and port are selected in the Arduino IDE.

### 2. Can I use the IO Expander for XIAO with other microcontrollers?

**Answer**: Yes, the IO Expander is designed primarily for the XIAO module, but it can be used with other microcontrollers that support I2C communication. You might need to adjust the code and connections accordingly.

### 3. How do I change the I2C address of the MCP23017 chip on the IO Expander for XIAO?

**Answer**: The default I2C address is set to 0x21. If you want to change it to 0x20, there's a jumper labeled "J2" on the board. You'll need to solder the J2 jumper to change the address.

### 4. I'm getting noise or erratic behavior on my IO pins. What could be the cause?

**Answer**: Ensure that the connections are secure and there's no interference. Using pull-up or pull-down resistors can help stabilize the input pins. Also, ensure that the power supply is stable and can provide the necessary current for all connected devices.


## Resources

- **[ZIP]** [Eagle file](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [Datasheet - MCP23017](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>


