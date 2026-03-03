---
description: 边缘计算
title: 边缘计算
keywords:
- edge computing
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeed_Elderly/Navigation/Edge_Computing_4.7
last_update:
  date: 01/20/2023
  author: Matthew
---

本文介绍了 Seeed Studio 产品文档中关于边缘计算架构的内容，该架构处理由各种传感器生成的“即时”数据，适用于需要实时处理的应用场景。本页面展示了多个具有不同计算能力的设备。

您可以通过两个主要部分探索本页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/edge_computing/edge_computing_publish.png" alt="pir" width={1000} height="auto" /></p>

## 工业计算

<strong><font color={'8DC215'} size={"4"}>此部分包括集成设备的完整边缘计算架构。您可以在这里找到：</font></strong>

- 具有工业级计算能力的设备
- 基于设备的应用
- 不同的软件部署
- 操作系统安装
- 设备的扩展板或载板
- 教程

### 设备

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/cn/reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal 入门指南 </font></span></a>
            <br/>
            <a href="/cn/reTerminal-hardware-interfaces-usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 硬件和接口使用 </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer</font></div>
            <a href="/cn/reComputer_Jetson_Series_Initiation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer 系列入门指南 </font></span></a>
            <br/>
            <a href="/cn/reComputer_Jetson_Series_Hardware_Layout" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer 系列硬件布局 </font></span></a>
            <br/>
            <a href="/cn/reComputer_Jetson_Series_GPIO_Grove" target="_blank"><span><font color={'FFFFFF'} size={"2"}> GPIO 和 Grove 用于 reComputer 系列 </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="//reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer X86 系列 - Intel® Core™ </font></span></a>
            <br/>
            <a href="//reServer_J2032_Getting_Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer J2032 - NVIDIA® Jetson NX Xavier </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>工业用迷你电脑</font></div>
            <a href="/cn/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 - Jetpack 5.0, Jetson Xavier NX 8GB, RS232 </font></span></a>
            <br/>
            <a href="/cn/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E - Jetpack 5.0, Jetson Xavier NX 8GB, 2xGbE</font></span></a>
            <br/>
            <a href="/cn/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 - Jetpack 5.0, Jetson AGX Orin 32GB, 10Gps </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edge 系列</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - 基于 ESP32/ RS485/ 以太网 </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - 基于 Raspberry Pi CM4/ IEC </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - 基于 Raspberry Pi CM4</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 替代方案</font></div>
            <a href="/cn/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 / NVIDIA Jetson AGX Xavier 开发套件 - Jetpack 4.4 | Jetpack 4.6 | Jetpack 5.0</font></span></a>
            <br/>
    </a>
</div>

### 应用 / 软件

<div class="independent_container">
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/cn/reTerminal-build-UI-using-LVGL" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LVGL</font></span></a>,
            <a href="/cn/reTerminal-build-UI-using-Flutter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Flutter</font></span></a>,
            <a href="/cn/reTerminal-build-UI-using-Electron" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Electron</font></span></a>,
            <a href="/cn/weather-dashboard-with-Grafana-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grafana</font></span></a>
            <br/>
            <a href="/cn/Mender-Client-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Mender 客户端</font></span></a>,
            <a href="/cn/reTerminal-build-UI-using-Qt-for-Python" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Qt 与 Python</font></span></a>
            <br/>
            <a href="/cn/reTerminal_ML_MediaPipe" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Google MediaPipe</font></span></a>
            <br/>
            <a href="/cn/reTerminal_ML_TFLite" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TensorFlow Lite</font></span></a>
            <br/>
            <a href="/cn/reTerminal_Home_Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Home Assistant</font></span></a>
            <br/>
            <a href="/cn/reTerminal-Home-Assistant-Customize" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 定制 Home Assistant</font></span></a>
            <br/>
    </a>
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edge 系列</font></div>
            <a href="/cn/Edgebox-rpi-200-codesys" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 控制器上的 Codesys</font></span></a>
            <br/>
            <a href="/cn/Contributor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 更多内容即将发布</font></span></a>
            <br/>
    </a>
</div>

<div class="independent_container">
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer 应用</font></div>
            <a href="/cn/HardHat" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 安全帽检测 </font></span></a>
            <br/>
            <a href="/cn/No-code-Edge-AI-Tool" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 无代码边缘 AI 工具 </font></span></a>
            <br/>
            <a href="/cn/Jetson-Nano-MaskCam" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MaskCam </font></span></a>
            <br/>
            <a href="/cn/DashCamNet-with-Jetson-Xavier-NX-Multicamera" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DashCamNet 与 Jetson Xavier NX 多摄像头 </font></span></a>
            <br/>
            <a href="/cn/Traffic-Management-DeepStream-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 交通管理 DeepStream SDK </font></span></a>
            <br/>
            <a href="/cn/YOLOv5-Object-Detection-Jetson" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 少样本目标检测 </font></span></a>
            <br/>
    </a>
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer 软件</font></div>
            <a href="/cn/Allxon-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Allxon 入门指南 </font></span></a>
            <br/>
            <a href="/cn/jetson-docker-getting-started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Docker 入门指南 </font></span></a>
            <br/>
            <a href="/cn/alwaysAI-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> alwaysAI 入门指南 </font></span></a>
            <br/>
            <a href="/cn/DeciAI-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Deci 入门指南 </font></span></a>
            <br/>
            <a href="/cn/Update-Jetson-Linux-OTA-Using-Allxon" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 Allxon 进行 Jetson Linux OTA 更新 </font></span></a>
            <br/>
            <a href="/cn/reComputer_Jetson_Series_Resource" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson 资源 </font></span></a>
            <br/>
    </a>
</div>

### 操作系统安装 / 固件更新

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/cn/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 原始操作系统安装 </font></span></a>
            <br/>
            <a href="/cn/reTerminal-Buildroot-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Buildroot </font></span></a>,
            <a href="/cn/reTerminal-Yocto" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Yocto </font></span></a>
            <br/>
            <a href="/cn/Streampi_OBS_On_reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Stream-pi & OBS studio </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer 系列</font></div>
            <a href="/cn/reComputer_J1010_J101_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1010 | J101 原始操作系统安装 </font></span></a>
            <br/>
            <a href="/cn/reComputer_J2021_J202_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J2021 | J202 原始操作系统安装 </font></span></a>
            <br/>
            <a href="/cn/reComputer_J1020_A206_Flash_JetPack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1020 | A206 原始操作系统安装 </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="//reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 原始操作系统安装 </font></span></a>
            <br/>
            <a href="//reServer-Update-BIOS-Install-Drivers" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BIOS 升级与驱动安装 </font></span></a>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>迷你电脑</font></div>
            <a href="/cn/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 原始操作系统安装 </font></span></a>
            <br/>
            <a href="/cn/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E 原始操作系统安装 </font></span></a>
            <br/>
            <a href="/cn/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 原始操作系统安装 </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>边缘系列</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - 操作系统安装 </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - 操作系统安装 </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - 操作系统安装 </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 替代方案</font></div>
            <a href="/cn/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 原始操作系统安装 </font></span></a>
    </a>
</div>

### 扩展板 / 载板

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal 扩展板</font></div>
            <a href="/cn/reTerminalBridge" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 - 扩展 UPS、千兆以太网、LTE/4G/5G/LoRaWAN®、RS485/232、CAN、SATA 2.0</font></span></a>
            <br/>
            <a href="/cn/reTerminal_Mount_Options" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 安装选项</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 扩展板</font></div>
            <a href="/cn/reComputer_A203_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203，支持 Jetson Nano / Xavier NX/TX2 NX</font></span></a>
            <br/>
            <a href="/cn/reComputer_A205_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205，支持 Jetson Nano / Xavier NX/TX2 NX</font></span></a>
            <br/>
            <a href="/cn/Jetson-Mate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Mate 集群，支持 4 个 Jetson Nano/NX</font></span></a>
            <br/>
    </a>
</div>

### 教程 / 常见问题解答

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/cn/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal 使用常见问题解答</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer / NVIDIA Jetson</font></div>
            <a href="/cn/reComputer_Jetson_Memory_Expansion" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NVIDIA Jetson 板的内存扩展</font></span></a>
            <br/>
            <a href="/cn/J1010_Boot_From_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 从 SD 卡启动 reComputer J1010</font></span></a>
            <br/>
            <a href="/cn/J101_Enable_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 在 J101 载板上启用 SD 卡</font></span></a>
            <br/>
    </a>
</div>

## 基础开发

<strong><font color={'8DC215'} size={"4"}>此部分包括用于基础开发的单板计算机。您可以找到以下内容：</font></strong>

- 开发单板计算机
- 基于单板计算机的应用
- 不同的软件部署
- 操作系统安装
- 单板计算机的扩展板或载板
- 单板计算机的配件
- 基于单板计算机的课程套件
- 教程

### 单板计算机

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><a href="/cn/BeagleBone" target="_blank"><span><font color={'8DC215'} size={"5"}> BeagleBone® </font></span></a></div>
            <a href="/cn/BeagleBone_Blue" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Blue </font></span></a>
            <br/>
            <a href="/cn/BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green </font></span></a>
            <br/>
            <a href="/cn/BeagleBone_Green_Wireless" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green Wireless </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY</font></div>
            <a href="/cn/ODYSSEY-X86J4105" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 </font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-GPIO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 的硬件 </font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-STM32MP157C" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY STM32MP157C </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>量子开发板</font></div>
            <a href="/cn/Quantum-Mini-Linux-Development-Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 量子迷你 Linux 开发套件 </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi®</font></div>
            <a href="/cn/Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 简介 </font></span></a>
            <br/>
            <a href="/cn/Raspberry_Pi_3_Model_B" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 3 Model B </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'808080'} size={"5"}>退役设备</font></div>
            <a href="/cn/ReSpeaker" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker 系列 </font></span></a>
            <br/>
            <a href="/cn/NPi-i.MX6ULL-Dev-Board-Linux-SBC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NPi 系列</font></span></a>
     </a>
</div>

### 应用 / 软件

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSY 应用</font></div>
            <a href="/cn/ODYSSEY-X86J4105-AzureIOT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 将 ODYSSEY 连接到 Azure IoT</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-Intel-OpenVINO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 Intel OpenVINO 工具包进行计算机视觉</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-Frigate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 Frigate 进行计算机视觉</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSY 软件</font></div>
            <a href="/cn/ODYSSEY-X86-Home-Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 在 ODYSSEY 上运行 Home Assistant </font></span></a>
            <br/>
            <a href="/cn/Connect-Grove-to-Home-Assistant-ESPHome" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 ESPHome 连接 Grove 模块</font></span></a>
            <br/>
            Mender
            <a href="/cn/Mender-Client-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 客户端</font></span></a>,
            <a href="/cn/Mender-Server-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 服务器</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/cn/BeagleBone_Solutions" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® 解决方案</font></span></a>
    </a>
</div>

### 操作系统安装 / 固件更新

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/cn/ODYSSEY-X86J4105-Installing-OS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 原始操作系统安装</font></span></a>,
            <a href="/cn/ODYSSEY-X86J4105-Updating-Firmware" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 固件更新</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-Installing-openwrt" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OpenWRT</font></span></a>,
            <a href="/cn/ODYSSEY-X86-OPNsense" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OPNsense</font></span></a>,
            <a href="/cn/ODYSSEY-X86J4105-pfSense" target="_blank"><span><font color={'FFFFFF'} size={"2"}> pfSense</font></span></a>,
            <a href="/cn/Jellyfin-on-Docker-Ubuntu-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jellyfin</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86-TrueNAS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TrueNAS</font></span></a>,
            <a href="/cn/ODYSSEY-X86J4105-Installing-FreeNAS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FreeNAS</font></span></a>,
            <a href="/cn/ODYSSEY-X86J4105-Installing-Android" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Android-x86</font></span></a>,
            <a href="/cn/BalenaOS-X86-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> balenaOS</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/cn/Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 原始操作系统安装</font></span></a>
    </a>
</div>

### 扩展 / 承载板

<div class="title_container">
    <a class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi - Pi HAT</font></div>
            <a href="/cn/Grove_Base_Hat_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove 基础 HAT </font></span></a>,
            <a href="/cn/Grove_AI_HAT_for_Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove AI HAT</font></span></a>,
            <a href="/cn/RS-485_Shield_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RS-485 Pi HAT</font></span></a>,
            <a href="/cn/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 8通道12位ADC HAT</font></span></a>,
            <a href="//ReSpeaker_4_Mic_Array_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker Pi HAT</font></span></a>
            <br/>
            <a href="/cn/Grove_Base_HAT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 了解更多</font></span></a>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/cn/BeagleBone_Green_HDMI_Cape" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green HDMI Cape</font></span></a>
            <br/>
            <a href="/cn/Motor_Bridge_Cape_v1.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® 电机桥接 Cape v1.0</font></span></a>
            <br/>
            <a href="/cn/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green LCD Cape 带电阻触摸</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reSpeaker</font></div>
            <a href="//ReSpeaker_Drive_Unit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker 系列驱动单元</font></span></a>
            <br/>
            <a href="//ReSpeaker_Mic_Array_v2.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker 系列麦克风阵列</font></span></a>
            <br/>
    </a>
</div>

### 配件

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/cn/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 骨架盒</font></span></a>
            <br/>
            <a href="/cn/Raspberry_PI_Bplus_Case" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry PI B Plus 外壳</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/cn/Coral-Mini-PCIe-Accelerator-x86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Coral Mini PCIe 加速器</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-LTE-Module" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LTE 模块</font></span></a>
            <br/>
    </a>
</div>

### 套件与课程

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>树莓派</font></div>
            <a href="/cn/Grove_Base_Kit_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove 树莓派基础套件</font></span></a>
            <br/>
            <a href="/cn/LoRa_LoRaWan_Gateway_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LoRa®/LoRaWAN® 网关套件</font></span></a>
            <br/>
            <a href="/cn/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove 基于树莓派的物联网入门套件</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/cn/Grove_Starter_Kit_for_BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Seeed Studio BeagleBone® Green 入门套件</font></span></a>
            <br/>
            <a href="/cn/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove AWS 物联网套件 for BeagleBone Green</font></span></a>
            <br/>
    </a>
</div>

### 教程 / 常见问题

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>树莓派</font></div>
            <a href="/cn/remote_connect" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 远程连接树莓派/reComputer</font></span></a>
            <br/>
            <a href="/cn/Raspberry_pi_CM4_update_eeprom" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 更新树莓派 CM4 的 EEPROM</font></span></a>
    </a>
</div>