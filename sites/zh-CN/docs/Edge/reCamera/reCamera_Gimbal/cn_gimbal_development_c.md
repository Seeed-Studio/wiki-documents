---
description: reCamera 的基本 linux 命令
title: 使用 C 语言进行深度开发
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /cn/gimbal_development_c
sidebar_position: 4
last_update:
  date: 4/15/2025
  author: Parker Hu & Dawn Yao
---

# 使用 C 语言进行 Gimbal 深度开发

有三种方法可以为 reCamera Gimbal 进行开发：

1. **使用 Node-RED 节点进行应用逻辑开发**
2. **通过终端命令使用 can-utils 工具进行 Bash 脚本编程**  
3. **需要设置交叉编译环境和二进制编译的 C 语言编程**

本文档将提供关于如何使用 C 语言编程为 reCamera Gimbal 进行开发的全面指南。

有关基于 Node-RED 的开发，请参考：  
[Node-RED 开发文档](https://wiki.seeedstudio.com/cn/recamera_gimbal_node_red/)

在开发之前，您需要将交叉编译环境安装到您的开发环境中。

Linux：

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
## 下载示例程序

```bash
sudo apt-get install unzip
wget https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip
unzip CAN.zip
```
目录结构如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN_Directory.png" /></div>

您需要修改 Makefile，将 CC 变量替换为您自己的交叉编译工具链。

```bash
CC = $HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-gcc
```

## 编译程序

```bash
cd CAN/can_send
mkdir build && cd build
cmake ../
make
```

将编译好的二进制文件上传到 reCamera

```bash
scp can_send recamera@ip_address:/home/recamera
```

使用 `candump can0` 查看 CAN 总线数据
使用 `sudo ./can_send` 测试脚本

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_send.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_dump.png" /></div>

## 程序分析

这些命令用于设置 CAN 总线速率和接口状态，在应用程序中只需要初始化一次。

```bash
"sudo ip link set can0 type can bitrate 100000"
"sudo ifconfig can0 up"
```
如图所示，在 can_send.c 文件中，使用 system 函数调用了上述命令。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Initialization_can0.png" /></div>

您需要定义一个 CAN 帧结构来存储 CAN 帧的 ID、数据长度和数据。
并使用 memset 函数将 CAN 帧结构清零。

```c
struct can_frame frame;
memset(&frame, 0, sizeof(struct can_frame));
```

您可以设置 can_id 和 can_dlc 来配置 CAN 帧的 ID 和数据长度。
这是标准的 CAN 帧数据格式。
使用 `nbytes = write(s, &frame, sizeof(frame));` 将 CAN 帧发送到 CAN 总线，它返回发送的字节数。您可以将返回值与预期字节数进行比较，以确定 CAN 帧是否发送成功。

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

您可以在我们的 [Github 仓库](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/reCamera_Gimbal/src) 中参考更多 C 程序。

请注意，Gimbal 相关程序是基于 Node-RED 组件开发的。我们今后只会维护 Node-RED 程序，因此您可以直接在 Node-RED 中参考和开发。

由于 C 程序不再维护，随着电机固件的更新，它们可能会失效。请使用我们的 [最新电机手册](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf) 来封装正确的命令进行开发。


## 资源

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)
- [CAN_Script_C](https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>