---
description: Getting started with the XIAO CAN Bus Expansion Board
title: XIAO CAN Bus Expansion Board
keywords:
- Grove
- can bus
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-can-bus-expansion
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# XIAO CAN Bus Expansion Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

The XIAO CAN Bus Expansion Board is specifically designed to work with the Seeed Studio XIAO development board, providing an easy and convenient way to add CAN bus communication functionality to your projects. CAN bus (Controller Area Network) is a widely used communication protocol in automotive, industrial, and other embedded systems, allowing for reliable and robust data exchange between different nodes.

The integration of the MCP2515 controller and SN65HVD230 transceiver chips on the expansion board ensures seamless and efficient communication over the CAN bus. The MCP2515 controller handles the protocol management, message filtering, and error handling, while the SN65HVD230 transceiver converts the digital signals from the controller into the differential signals required for CAN bus communication.

With the XIAO CAN Bus Expansion Board, you can leverage the power of the Seeed Studio XIAO development board and its extensive ecosystem to create projects that require CAN bus communication. Whether you're working on automotive applications, industrial control systems, robotics projects, or IoT devices, this expansion board provides a reliable and compact solution for integrating CAN bus capabilities into your designs.

The expansion board features a user-friendly terminal connection, allowing you to easily connect the CANH and CANL lines to the CAN bus network. The compact design of the board ensures compatibility with various project enclosures and facilitates seamless integration into your existing setups.

By utilizing the XIAO CAN Bus Expansion Board, you can take advantage of the robustness, reliability, and scalability of the CAN bus protocol, enabling efficient data exchange, system control, and interconnectivity in your projects.

## Introduction

### Features

- Compatibility: Designed to work seamlessly with the Seeed Studio XIAO development board.
- MCP2515 Controller: The onboard MCP2515 chip provides reliable control and handling of the CAN bus communication.
- SN65HVD230 Transceiver: The integrated SN65HVD230 chip ensures accurate signal conversion and robust communication over the CAN bus.
- Terminal Connection: The CANH and CANL lines are conveniently accessible through a 3-pin terminal, allowing easy connection to the CAN bus.
- Compact Design: The expansion board has been designed with a compact form factor, making it suitable for various applications.

### Specification

- Compatibility: Seeed Studio XIAO development board.
- Communication Interface: CAN bus (Controller Area Network).
- CAN Transceiver: SN65HVD230.
- CAN Controller: MCP2515.
- Terminal Connection: 2-pin terminal for CANH and CANL lines.

### Applications

The XIAO CAN Bus Expansion Board can be utilized in various projects that require CAN bus communication. Here are a few application ideas to inspire you:

- Automotive Projects: Connect the expansion board to the XIAO and build automotive applications that require CAN bus communication, such as vehicle diagnostics or data logging.
- Industrial Control Systems: Utilize the CAN bus capabilities to interface with industrial devices and systems, enabling efficient data exchange and control.
- Robotics: Incorporate the expansion board into your robotic projects to enable communication between different robotic modules and components.
- IoT Applications: Integrate the expansion board with IoT devices to facilitate communication and data exchange over the CAN bus protocol.

Please refer to the XIAO CAN Bus Expansion Board datasheet and examples for detailed usage instructions and code samples.

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/hw.jpg" alt="pir" width={500} height="auto" /></p>

1. GND
2. CAN-H
3. CAN-L
4. LED Indicators for RX/TX
5. SN65NVD230
6. MCP2515

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/3.png" alt="pir" width={500} height="auto" /></p>

XIAO CAN BUS Expansion Board has a pad P1 on the back of the board, which will add a termination resistor to the device after shorting. Considering that some users' communication devices may already have a terminating resistor, XIAO CAN-BUS does not short P1 by default, if you find that CAN communication cannot send or receive messages, you can try to short P1 pad to get a 120 ohm terminating resistor.

## Arduino Library Overview

We provide an [Arduino library for the MCP2515 board](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

The library includes several examples, including:

- ***OBDII-PIDs*** -  retrieve data from the OBD-II interface
- ***send*** - send a frame to the CAN bus
- ***recv*** - receive a frame from the CAN bus
- ***set_mask_filter_recv*** - receive a frame from the CAN bus with mask and filter settings

### 1. Set the Baud rate

This function is used to initialize the baud rate of the CAN Bus system.

The available baud rates are listed as follows:

```cpp
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31K25BPS 5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83K3BPS  10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666kbps  17
#define CAN_1000KBPS 18
```

### 2. Set Receive Mask and Filter

The controller chip has 2 receive mask registers and 5 filter registers that can be used to ensure that data is received from the targeted device. These registers are particularly useful in large networks with many nodes. We have provided two functions that allow you to utilize these mask and filter registers.

**Mask:**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**Filter:**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** represents which register to use. You can fill 0 or 1 for mask and 0 to 5 for filter.
- **ext** represents the status of the frame. 0 means it's a mask or filter for a standard frame. 1 means it's for a extended frame.
- **ulData** represents the content of the mask of filter.

### 3. Check Receive

The MCP2515 controller chip has the ability to operate in either a polled mode or an interrupt mode. In polled mode, the software regularly checks for a received frame. In interrupt mode, additional pins can be used to signal that a frame has been received or transmit has completed. This allows for more efficient use of resources as the processor does not need to constantly check for incoming data.

This function is used to check if there are any received frames waiting in the receive buffer. If there are, the function will return true, otherwise it will return false. You can use this function in a loop to continuously check for received frames.

```c
INT8U MCP_CAN::checkReceive(void);
```

### 4. Get CAN ID

You can use the following function to get the length of the data received from the "send" node.

```c
INT32U MCP_CAN::getCanId(void)
```

### 5. Send a frame

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

This function is used to send data onto the CAN Bus. The parameters are as follows:

- **id** - The ID of can frame.
- **ext** - A boolean value representing the status of the frame. '0' means standard frame. '1' means extended frame.
- **len** - The length of the frame.
- **data_buf** - The content of the message.

For example, In the 'send' example, we have:

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

### 6. Receive a frame

The following function is used to receive data on the 'receive' node:

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

In conditions that masks and filters have been set. This function can only get frames that meet the requirements of masks and filters.

- **len** represents the data length.
- **buf** is where you store the data.

## Getting Started

#### Hardware

This product does not include the XIAO module, so you will need to purchase a separate XIAO module. In this example, we use the XIAO ESP32C3 for demonstration purposes, but other versions of the XIAO module will work similarly. The hardware connection is straightforward - simply insert the XIAO module into the expansion board.

Please refer to the diagram below for the connection to XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/connect.jpg" alt="pir" width={500} height="auto" /></p>

#### Software

- **Step 1.** Download the [CAN Bus Library](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515) from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** After downloading and installing the library correctly, you can find an example program named send.ino in the examples folder. This program is designed for the D7S module.

```cpp
#include <mcp_can.h>
#include <SPI.h>

/* Please modify SPI_CS_PIN to adapt to different baords.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9
*/

#define SPI_CS_PIN  D7

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}

// END FILE
```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** After a successful code upload, you will notice that the RX and TX LEDs light up, indicating that the CAN bus is actively transmitting data. If your CAN bus is connected to other devices, these LEDs will blink instead of remaining constantly lit.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Troubleshooting

### Q1: What is the maximum baud rate supported by the XIAO CAN Bus Expansion Board?

The maximum baud rate supported by the MCP2515 controller on the expansion board is 1 Mbps. Please ensure that the baud rate settings of your CAN bus network are compatible with this limitation.

### Q2: Can I use multiple XIAO CAN Bus Expansion Boards in the same CAN bus network?

Yes, you can use multiple expansion boards in the same CAN bus network. Each expansion board should have a unique node ID assigned to it to ensure proper communication and avoid conflicts on the bus.

### Q3: Can I use the XIAO CAN Bus Expansion Board with other microcontrollers or development boards?

The XIAO CAN Bus Expansion Board is specifically designed to work with the Seeed Studio XIAO development board. However, with proper pin mapping and configuration, it may be possible to use it with other microcontrollers or development boards that support the necessary CAN bus communication protocols.

### Q4: Are there any limitations on the maximum cable length for the CAN bus connection?

The maximum cable length for the CAN bus connection depends on factors such as the baud rate, cable quality, and electromagnetic interference. In general, for lower baud rates, longer cable lengths (up to several hundred meters) can be supported. However, for higher baud rates, it is recommended to keep the cable length shorter (within a few meters) to maintain reliable communication.

### Q5: How can I troubleshoot CAN bus communication issues?

If you encounter any issues with CAN bus communication, you can follow these steps for troubleshooting:

- Verify the physical connections of the CAN bus network, ensuring correct wiring and termination.
- Check the baud rate settings and ensure they match on all devices connected to the CAN bus.
- Monitor the CAN bus traffic using a CAN bus analyzer or terminal software to identify any errors or issues in the transmitted messages.
- Double-check the program code for proper initialization and configuration of the MCP2515 controller.
- Ensure that the power supply to the XIAO development board and the CAN bus network is stable and within the specified voltage range.
- If you have any other questions or issues not covered in this FAQ section, please feel free to contact our technical support team for further assistance.

## Resources

- **[ZIP]** [XIAO CAN Bus Expansion board SCH&PCB](https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.zip)
- **[PDF]** [Datasheet - MCP2515](https://files.seeedstudio.com/wiki/xiao_can_bus_board/MCP2515-Stand-Alone-CAN-Controller-with-SPI-200018-708845.pdf)
- **[PDF]** [Datasheet - SN65HVD230](https://files.seeedstudio.com/wiki/xiao_can_bus_board/20001667G-1115479.pdf)

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
