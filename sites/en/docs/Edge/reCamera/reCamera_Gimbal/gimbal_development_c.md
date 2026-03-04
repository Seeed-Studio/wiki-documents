---
description: Basic linux command for reCamera
title: Deep development with C
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /gimbal_development_c
sidebar_position: 4
last_update:
  date: 4/15/2025
  author: Parker Hu & Dawn Yao
---

# Deep development of Gimbal with C

There are three approaches to develop for reCamera Gimbal:

1. **Application Logic Development using Node-RED nodes**
2. **Bash scripting using can-utils tools via terminal commands**  
3. **C programming requiring cross-compilation environment setup and binary compilation**

This document will provide a comprehensive guide on how to develop for reCamera Gimbal using C programming.

For Node-RED based development, please refer to:  
[Node-RED Development Documentation](https://wiki.seeedstudio.com/recamera_gimbal_node_red/)

Before developing, you need to install the cross-compile environment into your development environment.

Linux:

```bash
sudo apt-get update
sudo apt-get install can-utils

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.2.0/reCameraOS_sdk_v0.2.0.tar.gz

tar -xzvf reCameraOS_sdk_v0.2.0.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```
## Download the case program

```bash
sudo apt-get install unzip
wget https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip
unzip CAN.zip
```
The directory structure is shown as follows:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN_Directory.png" /></div>

You need to modify the Makefile to replace the CC variable with your own cross-compilation toolchain.

```bash
CC = $HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-gcc
```

## Compile the program

```bash
cd CAN/can_send
mkdir build && cd build
cmake ../
make
```

Upload the compiled binary to reCamera

```bash
scp can_send recamera@ip_address:/home/recamera
```

Use `candump can0` to view CAN bus data
Use `sudo ./can_send` to test the script

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_send.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_dump.png" /></div>

## Program Analysis

These commands are used to set the CAN bus rate and interface status, which only need to be initialized once in the application.

```bash
"sudo ip link set can0 type can bitrate 100000"
"sudo ifconfig can0 up"
```
As shown, in the can_send.c file, the above commands are called using the system function.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Initialization_can0.png" /></div>

You need to define a CAN frame structure to store the CAN frame's ID, data length, and data.
And use the memset function to clear the CAN frame structure to zero.

```c
struct can_frame frame;
memset(&frame, 0, sizeof(struct can_frame));
```

You can set can_id and can_dlc to configure the CAN frame's ID and data length.
This is the standard CAN frame data format.
Using `nbytes = write(s, &frame, sizeof(frame));` to send the CAN frame to the CAN bus, it returns the number of bytes sent. You can compare the returned value with the expected number of bytes to determine if the CAN frame was sent successfully.

```c
 //5.Set send data
    frame.can_id = 0x141;
    frame.can_dlc = 8;
    frame.data[0] = 0x80;
    frame.data[1] = 0x00;
    frame.data[2] = 0x00;
    frame.data[3] = 0x00;
    frame.data[4] = 0x00;
    frame.data[5] = 0x00;;
    frame.data[6] = 0x00;
    frame.data[7] = 0x00
```

You can refer to more C programs in our [Github repository](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/reCamera_Gimbal/src).

Please note that the Gimbal-related programs are developed based on Node-RED components. We will only maintain Node-RED programs going forward, so you can directly reference and develop in Node-RED.

Since the C programs are not maintained, they may become invalid as the motor firmware updates. Please use our [latest motor manual](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf) to encapsulate the correct commands for development.


## Resources

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)
- [CAN_Script_C](https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip)

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
