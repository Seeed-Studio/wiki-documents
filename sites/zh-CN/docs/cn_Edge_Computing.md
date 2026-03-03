---
description: 本主题介绍了 Seeed Studio 关于边缘计算架构的产品文档，该架构处理需要实时处理的应用中各种传感器生成的"即时"数据。
title: 边缘计算
keywords:
- edge computing
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edge_Computing
last_update:
  date: 05/24/2024
  author: Matthew
---

本主题介绍了 Seeed Studio 关于边缘计算架构的产品文档，该架构处理需要实时处理的应用中各种传感器生成的"即时"数据。本页面展示了多种具有不同计算能力的设备，以满足不同用户的需求。

您可以在本页面探索三个主要部分：

- 设备及其各自的应用。
- 单板计算机及其预期用途。
- 微控制器及其相应的应用。

## 设备

<strong><font color={'8DC215'} size={"4"}>本部分包括集成了边缘计算架构的设备。您可以了解更多关于：</font></strong>

- 具有工业级计算能力的设备
- 基于不同设备的应用
- 软件部署
- 操作系统安装
- 设备专用扩展板或载板
- 教程和指南

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/cn/reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal 入门指南 </font></span></a>
            <br/>
            <a href="/cn/reTerminal-hardware-interfaces-usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 硬件和接口使用 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal DM</font></div>
            <a href="https://wiki.seeedstudio.com/cn/reterminal-dm/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM 入门指南 </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/cn/reterminal-dm-hardware-guide/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 硬件布局 </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer</font></div>
            <a href="/cn/reComputer_Jetson_Series_Initiation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer 系列入门指南 </font></span></a>
            <br/>
            <a href="/cn/reComputer_Jetson_Series_Hardware_Layout" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer 系列硬件布局 </font></span></a>
            <br/>
            <a href="/cn/reComputer_Jetson_Series_GPIO_Grove" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer 系列的 GPIO 和 Grove </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="/cn/reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer X86 系列 - Intel® Core™ </font></span></a>
            <br/>
            <a href="/cn/reServer_J2032_Getting_Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer J2032 - NVIDIA® Jetson NX Xavier </font></span></a>
            <br/>
    </div>
</div>


<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edge 系列</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - 基于 ESP32/ RS485/ 以太网 </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - 基于 Raspberry Pi CM4/ IEC </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - 基于 Raspberry Pi CM4</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 替代方案</font></div>
            <a href="/cn/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 / NVIDIA Jetson AGX Xavier 开发套件 - Jetpack 4.4 | Jetpack 4.6 | Jetpack 5.0</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>工业级迷你 PC</font></div>
            <a href="/cn/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 - Jetpack 5.0, Jetson Xavier NX 8GB, RS232 </font></span></a>
            <br/>
            <a href="/cn/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E - Jetpack 5.0, Jetson Xavier NX 8GB, 2xGbE</font></span></a>
            <br/>
            <a href="/cn/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 - Jetpack 5.0, Jetson AGX Orin 32GB, 10Gps </font></span></a>
            <br/>
    </div>
</div>

### 应用程序 / 软件

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/cn/reTerminal-build-UI-using-LVGL" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LVGL</font></span></a>,
            <a href="/cn/reTerminal-build-UI-using-Flutter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Flutter</font></span></a>,
            <a href="/cn/reTerminal-build-UI-using-Electron" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Electro</font></span></a>,
            <a href="/cn/weather-dashboard-with-Grafana-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grafana</font></span></a>
            <br/>
            <a href="/cn/Mender-Client-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Mender Client</font></span></a>,
            <a href="/cn/reTerminal-build-UI-using-Qt-for-Python" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Qt with Python</font></span></a>
            <br/>
            <a href="/cn/reTerminal_ML_MediaPipe" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Google MediaPipe</font></span></a>
            <br/>
            <a href="/cn/reTerminal_ML_TFLite" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TensorFlow Lite</font></span></a>
            <br/>
            <a href="/cn/reTerminal_Home_Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Home Assistant</font></span></a>
            <br/>
            <a href="/cn/reTerminal-Home-Assistant-Customize" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 自定义 Home Assistant</font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edge 系列</font></div>
            <a href="/cn/Edgebox-rpi-200-codesys" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 上的 Codesys</font></span></a>
            <br/>
            <a href="/cn/Edgebox-ESP-100-Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 上的 Arduino 入门</font></span></a>
            <br/>
            <a href="/cn/Contributor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 更多内容即将发布</font></span></a>
            <br/>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal DM</font></div>
            <a href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Getting-Started-with-Node-Red/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM Node Red 入门</font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Node-Red-RS485/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM RS485 端口与 Node-RED </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Node-Red-mqtt/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM MQTT 与 Node-RED </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Node-Red-canbus/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM CAN BUS 与 Node-RED </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/cn/reterminal-dm-sensecraft-edge-os-intro/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM SenseCraft Edge OS 入门 </font></span></a>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer 应用</font></div>
            <a href="/cn/HardHat" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 安全帽检测 </font></span></a>
            <br/>
            <a href="/cn/No-code-Edge-AI-Tool" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 无代码边缘 AI 工具 </font></span></a>
            <br/>
            <a href="/cn/Jetson-Nano-MaskCam" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MaskCam </font></span></a>
            <br/>
            <a href="/cn/DashCamNet-with-Jetson-Xavier-NX-Multicamera" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier NX 多摄像头 DashCamNet </font></span></a>
            <br/>
            <a href="/cn/Traffic-Management-DeepStream-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 交通管理 DeepStream SDK </font></span></a>
            <br/>
            <a href="/cn/YOLOv5-Object-Detection-Jetson" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 少样本目标检测 </font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer 软件</font></div>
            <a href="/cn/CVEDIA-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  CVEDIA-RT </font></span></a> , 
            <a href="/cn/Cochl.Sense-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Cochl.Sense </font></span></a> ,
            <a href="/cn/Lumeo-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  Lumeo </font></span></a>
            <br/>
            <a href="/cn/Allxon-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Allxon 入门 </font></span></a>
            <br/>
            <a href="/cn/jetson-docker-getting-started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Docker 入门</font></span></a>
            <br/>
            <a href="/cn/alwaysAI-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> alwaysAI 入门 </font></span></a>
            <br/>
            <a href="/cn/DeciAI-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Deci 入门 </font></span></a>
            <br/>
            <a href="/cn/YOLOv8-DeepStream-TRT-Jetson" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 TensorRT 和 DeepStream SDK 部署 YOLOv8 </font></span></a>
            <br/>
    </div>
</div>

### 操作系统安装 / 固件更新

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/cn/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 原版操作系统安装</font></span></a>
            <br/>
            <a href="/cn/reTerminal-Buildroot-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Buildroot</font></span></a>,
            <a href="/cn/reTerminal-Yocto" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Yocto</font></span></a>
            <br/>
            <a href="/cn/Streampi_OBS_On_reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Stream-pi & OBS studio</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer 系列</font></div>
            <a href="/cn/reComputer_J1010_J101_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1010 | J101 原版操作系统安装</font></span></a>
            <br/>
            <a href="/cn/reComputer_J2021_J202_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J2021 | J202 原版操作系统安装</font></span></a>
            <br/>
            <a href="/cn/reComputer_J1020_A206_Flash_JetPack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1020 | A206 原版操作系统安装</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal DM</font></div>
            <a href="https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 原版操作系统安装</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="/cn/reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 原版操作系统安装</font></span></a>
            <br/>
            <a href="/cn/reServer-Update-BIOS-Install-Drivers" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 升级BIOS和安装驱动程序</font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Mini PC</font></div>
            <a href="/cn/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 原版操作系统安装</font></span></a>
            <br/>
            <a href="/cn/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E 原版操作系统安装</font></span></a>
            <br/>
            <a href="/cn/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 原版操作系统安装</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edge 系列</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - 操作系统安装 </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - 操作系统安装 </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - 操作系统安装</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 替代方案</font></div>
            <a href="/cn/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 原版操作系统安装</font></span></a>
    </div>
</div>

### 扩展板 / 载板

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal 扩展板</font></div>
            <a href="/cn/reTerminalBridge" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 - 扩展UPS、千兆以太网、LTE/4G/5G/LoRaWAN®、RS485/232、CAN、SATA 2.0</font></span></a>
            <br/>
            <a href="/cn/reTerminal_Mount_Options" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 安装选项</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 扩展板</font></div>
            <a href="/cn/reComputer_A203_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203，支持 Jetson Nano / Xavier NX/TX2 NX</font></span></a>
            <br/>
            <a href="/cn/reComputer_A205_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205，支持 Jetson Nano / Xavier NX/TX2 NX</font></span></a>
            <br/>
            <a href="/cn/Jetson-Mate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Mate 集群，支持 4 个 Jetson Nano/NX </font></span></a>
            <br/>
    </div>
</div>

### 教程 / 常见问题

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/cn/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal 使用常见问题</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer / NVIDIA Jetson</font></div>
            <a href="/cn/reComputer_Jetson_Memory_Expansion" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NVIDIA Jetson 开发板内存扩展</font></span></a>
            <br/>
            <a href="/cn/J1010_Boot_From_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 在 reComputer J1010 上从 SD 卡启动</font></span></a>
            <br/>
            <a href="/cn/J101_Enable_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 在 J101 载板上启用 SD 卡</font></span></a>
            <br/>
    </div>
</div>

## 微控制器

<strong><font color={'8DC215'} size={"4"}>本节提供嵌入式计算模块的详细信息。您可以了解更多关于：</font></strong>

- 具有嵌入式计算功能的微控制器
- 基于物联网和机器学习的应用
- 模块的扩展板和配件
- 带课程的套件
- 教程

<!-- Open Source Controllers -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>开源控制器</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}> 介绍开源微控制器。</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO SAMD21</font></div>
            <a href="/cn/Seeeduino-XIAO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 入门指南 </font></span></a>
            <br/>
            <a href="/cn/XIAO-SAMD21-MicroPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MicroPython </font></span></a>,
            <a href="/cn/Seeeduino-XIAO-CircuitPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> CircuitPython </font></span></a>
            <br/>
            <a href="/cn/Seeeduino-XIAO-TinyUSB" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TinyUSB </font></span></a>,
            <a href="/cn/Seeeduino-XIAO-by-Nanase" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Nanase </font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO RP2040</font></div>
            <a href="/cn/XIAO-RP2040" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 入门指南 </font></span></a>
            <br/>
            <a href="/cn/XIAO-RP2040-with-MicroPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MicroPython </font></span></a>,
            <a href="/cn/XIAO-RP2040-with-CircuitPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> CircuitPython </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO nRF52840</font></div>
            <a href="/cn/XIAO_BLE" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 入门指南 </font></span></a>
            <br/>
            <a><span><font color={'FFFFFF'} size={"2"}> Sense 版本: </font></span></a>
            <a href="/cn/XIAO-BLE-Sense-IMU-Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IMU </font></span></a>,
            <a href="/cn/XIAO-BLE-Sense-PDM-Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> PDM </font></span></a>
            <br/>
            <a href="/cn/XIAO-BLE-Sense-Bluetooth_Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 低功耗蓝牙</font></span></a> ,
            <a href="/cn/XIAO-BLE-Sense-IMU-Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NFC </font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO ESP32C3</font></div>
            <a href="/cn/XIAO_ESP32C3_Getting_Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 入门指南 </font></span></a>
            <br/>
            <a href="/cn/XIAO_ESP32C3_Pin_Multiplexing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 引脚复用 </font></span></a>
            <br/>
            <a href="/cn/XIAO_ESP32C3_WiFi_Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wi-Fi </font></span></a> ,
            <a href="/cn/XIAO_ESP32C3_Bluetooth_Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 低功耗蓝牙</font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO ESP32S3</font></div>
            <a href="/cn/xiao_esp32s3_getting_started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 入门指南 </font></span></a>
            <br/>
            <a href="/cn/xiao_esp32s3_edgelab" target="_blank"><span><font color={'FFFFFF'} size={"2"}> SenseCraft Model Assistant 使用指南 </font></span></a>
            <br/>
            <a href="/cn/xiao_esp32s3_wifi_usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wi-Fi</font></span></a> ,
            <a href="/cn/xiao_esp32s3_bluetooth" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 蓝牙 5.0 </font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal(Wio系列)</font></div>
            <a href="/cn/Wio-Terminal-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 入门指南 </font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-LCD-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LCD</font></span></a>,
            <a href="/cn/Wio-Terminal-IMU-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IMU</font></span></a>,
            <a href="Wio-Terminal-Mic" target="_blank"><span><font color={'FFFFFF'} size={"2"}> PDM</font></span></a>,
            <a href="/cn/Wio-Terminal-IO-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IO端口</font></span></a>,
            <a href="/cn/Wio-Terminal-Light" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 光传感器</font></span></a>,
            <a href="/cn/Wio-Terminal-FS-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> SD卡</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-CircuitPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> CircuitPython</font></span></a>,
            <a href="/cn/Wio-Terminal-Network-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wi-Fi</font></span></a>,
            <a href="/cn/Wio-Terminal-Bluetooth-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Bluetooth</font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio系列</font></div>
            <a href="/cn/LoRa_E5_mini" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Wio-E5开发板</font></span></a>
            <br/>
            <a href="/cn/Wio_RP2040_mini_Dev_Board-Onboard_Wifi" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Wio RP2040开发板</font></span></a>
            <br/>
            <a href="/cn/Wio_Tracker" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Wio Tracker开发板</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeeduino系列</font></div>
            <a href="/cn/Seeeduino_v4.2" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Seeeduino V4.2开发板</font></span></a>
            <br/>
            <a href="/cn/Seeeduino_Cloud" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Seeeduino Cloud开发板</font></span></a>
            <br/>
            <a href="/cn/Seeeduino_LoRAWAN" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Seeeduino LoRaWAN®开发板</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arch</font></div>
            <a href="/cn/Arch_Mix" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Arch Mix开发板</font></span></a>
            <br/>
            <a href="/cn/Arch_BLE" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Arch BLE开发板</font></span></a>
            <br/>
            <a href="/cn/Arch_GPRS" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Arch GPRS开发板</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduino</font></div>
            <a href="/cn/Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Arduino介绍</font></span></a>
            <br/>
            <a href="/cn/Getting_Started_with_Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Arduino开发板入门指南</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Micro:bit</font></div>
            <a href="/cn/microbit_wiki_page" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Micro:bit介绍</font></span></a>
            <br/>
            <a href="/cn/Grove_Inventor_Kit_for_microbit" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Micro:bit开发板入门指南</font></span></a>
            <br/>
    </div>
</div>

<!-- Proprietary Controllers -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>专有控制器</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>介绍具有专有平台用途的微控制器。</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Azure IoT</font></div>
            <a href="/cn/Azure_Sphere_MT3620_Development_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 用于Azure Sphere的MT3620开发套件</font></span></a>
            <br/>
            <a href="/cn/MT3620_Mini_Dev_Board" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 用于Azure Sphere的MT3620迷你开发板</font></span></a>
            <br/>
            <a href="https://seeedjp.github.io/ReButton/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 用于Azure IoT Hub/IoT Central的reButton</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>AWS IoT</font></div>
            <a href="/cn/SEEED-IOT-BUTTON-FOR-AWS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio一键式AWS IoT按钮</font></span></a>
            <br/>
    </div>
</div>

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>ReProduct</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>这是 Seeed Studio 经典微控制器的介绍。</font></div>
            <a href="/cn/UartSB_Frame" target="_blank"><span><font color={'FFFFFF'} size={"3"}> 点击这里 </font></span></a> 查看完整图片。
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>rePhone</font></div>
            <a href="/cn/rePhone" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 介绍</font></span></a>
            <br/>
            <a href="/cn/Arduino_IDE_for_RePhone_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Arduino</font></span></a>
            <br/>
            <a href="/cn/JavaScript_for_RePhone" target="_blank"><span><font color={'FFFFFF'} size={"2"}> JavaScript</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Xadow</font></div>
            <a href="/cn/Xadow_BLE" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BLE</font></span></a>,
            <a href="/cn/Xadow_GPS_V2" target="_blank"><span><font color={'FFFFFF'} size={"2"}> GPS</font></span></a>,
            <a href="/cn/Xadow_NFC_v2" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NFC</font></span></a>,
            <br/>
            <a href="/cn/Xadow_IMU_10DOF" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IMU</font></span></a>,
            <a href="/cn/Xadow_UV_Sensor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> UV</font></span></a>
            <br/>
            <a href="/cn/Xadow_Audio" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 音频</font></span></a>,
            <a href="/cn/Xado_OLED_128multiply64" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OLED</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BEE 系列</font></div>
            <a href="/cn/Mesh_Bee" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Mesh Bee</font></span></a>
            <br/>
            <a href="/cn/BLE_Bee" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BLE</font></span></a>,
            <a href="/cn/Wifi_Bee_v2.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wi-Fi</font></span></a>
            <br/>
            <a href="/cn/RFbee_V1.1-Wireless_Arduino_compatible_node" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RFBee</font></span></a>,
            <a href="/cn/UartSBee_v5" target="_blank"><span><font color={'FFFFFF'} size={"2"}> UARTBee</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Air 系列</font></div>
            <a href="/cn/Air602_WiFi_Development_Board" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Air602 WiFi 开发板</font></span></a>,
            <br/>
            <a href="/cn/Air602_Firmware_Programming_Manual" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Air602 固件手册</font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>W600</font></div>
            <a href="/cn/W600_Module" target="_blank"><span><font color={'FFFFFF'} size={"2"}> W600 模块</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Artik</font></div>
            <a href="/cn/Artik" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 介绍</font></span></a>
            <br/>
            <a href="/cn/Eagleye_530s" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Eagleye 530s</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Linklt</font></div>
            <a href="/cn/LinkIt" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 介绍</font></span></a>
            <br/>
            <a href="/cn/LinkIt_ONE" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Linklt ONE</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Rainbowduino</font></div>
            <a href="/cn/Rainbowduino_v3.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Rainbowduino V3.0</font></span></a>
            <br/>
            <a href="/cn/Rainbowduino_LED_driver_platform-ATmega328" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ATmega328</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Skeleton Bot</font></div>
            <a href="/cn/Skeleton_Box" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 介绍</font></span></a>
            <br/>
            <a href="/cn/Skeleton_Bot-4WD_hercules_mobile_robotic_platform" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 移动机器人平台</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>其他</font></div>
            <a href="/cn/Hercules_Dual_15A_6-20V_Motor_Controller" target="_blank"><span><font color={'FFFFFF'} size={"3"}> 更多独立产品</font></span></a>
            <br/>
    </div>
</div>

<!-- Application -->

### 应用

### 简易物联网应用

<!-- Easy IoT Application -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>简易物联网应用</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>这是易于应用和部署的物联网应用介绍。</font></div>
    </div>
</div>


<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal</font></div>
            <a href="/cn/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Google Cloud IoT</font></span></a>
            <br/>
            <a href="/cn/Get-Started-with-Wio-Terminal-and-Wappsto-IoT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wappsto IoT</font></span></a>
            <br/>
            <a href="/cn/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Azure IoT Central</font></span></a>,
            <a href="/cn/Wio-Terminal-Azure-IOT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Azure IoT Hub</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio RP2040</font></div>
            <a href="/cn/Use_MQTT_to_remotely_light_up_LED_lights" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用MQTT远程点亮LED灯</font></span></a>
            <br/>
            <a href="/cn/Use_Socket_to_connect_to_the_forum" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用Socket连接到论坛</font></span></a>
            <br/>
            <a href="/cn/Wireless-Fall-Detection-Device" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 无线跌倒检测设备</font></span></a>
            <br/>
    </div>
</div>

<!-- Embedded ML Scenarios -->

### 嵌入式机器学习场景

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>嵌入式机器学习场景</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>这是易于应用和训练的嵌入式机器学习(TinyML)使用介绍。</font></div>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal</font></div>
            <span><font color={'FFFFFF'} size={"4"}> 使用Edge Impulse的TinyML </font></span>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-EI-2" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 连续动作识别</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-EI-3" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 音频场景识别</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-EI-4" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 使用超声波传感器进行人数统计</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-EI-5" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 饮料识别</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-EI-6" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 预测性维护的异常检测</font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal</font></div>
            <span><font color={'FFFFFF'} size={"4"}> 使用TensorFlow Lite的TinyML </font></span>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-TFLM-1" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > TensorFlow Lite Micro入门</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-TFLM-2" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 天气预测</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-TFLM-3" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 语音识别和语音转互联网</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-Gesture-Recognition" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 手势识别</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO SAMD21</font></div>
            <a href="/cn/Contributor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 即将发布</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO RP2040</font></div>
            <a href="/cn/XIAO-RP2040-EI" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 使用Edge Impulse进行动作识别</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO nRF52840</font></div>
            <a href="/cn/XIAO-BLE-Sense-TFLite-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > TensorFlow Lite入门</font></span></a>
            <br/>
            <a href="/cn/XIAO-BLE-Sense-TFLite-Mic" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 使用TensorFlow Lite进行语音识别</font></span></a>
            <br/>
            <a href="/cn/XIAOEI" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 使用Edge Impulse进行动作识别</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO ESP32C3</font></div>
            <a href="/cn/xiaoesp32c3-chatgpt" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 在XIAO ESP32C3上使用WiFiClient和HTTPClient - XIAO ESP32C3与ChatGPT实战</font></span></a>
            <br/>
    </div>
</div>

<!-- Extensions -->

### 扩展板

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduino / Arduino 兼容 - 扩展板</font></div>
            <a href="/cn/Bluetooth_Shield_V2" target="_blank"><span><font color={'FFFFFF'} size={"3"}> 蓝牙扩展板</font></span></a>,
            <a href="/cn/Solar_Charger_Shield_V2.2" target="_blank"><span><font color={'FFFFFF'} size={"3"}> 太阳能充电扩展板</font></span></a>,
            <a href="/cn/Base_Shield_V2" target="_blank"><span><font color={'FFFFFF'} size={"3"}> Grove 底板</font></span></a>,
            <a href="/cn/CAN-BUS_Shield_V2.0" target="_blank"><span><font color={'FFFFFF'} size={"3"}> CAN-BUS 扩展板</font></span></a>,
            <a href="/cn/RS232_Shield" target="_blank"><span><font color={'FFFFFF'} size={"3"}> RS232 扩展板</font></span></a>
            <br/>
            <a href="/cn/Grove_Shield_for_Arduino_Nano" target="_blank"><span><font color={'FFFFFF'} size={"3"}> 了解更多</font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal - 扩展板</font></div>
            <a href="/cn/Wio-Terminal-Audio-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 音频扩展板</font></span></a>,
            <a href="/cn/Wio-Terminal-Ethernet" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 以太网扩展板</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-Battery-Chassis" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 电池底座</font></span></a>,
            <a href="/cn/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 带 LoRaWAN® 的电池底座</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO - 扩展板</font></div>
            <a href="/cn/Seeeduino-XIAO-Expansion-Board" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 扩展板 1：4个 Grove 接口 / OLED / RTC / SD 卡槽</font></span></a>
            <br/>
            <a href="/cn/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 扩展板 2：8个 Grove 接口 / 电池管理</font></span></a>
            <br/>
            <a href="/cn/get_start_round_display" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio XIAO 圆形显示扩展板 </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi Pico - 扩展板 </font></div>
            <a href="/cn/Grove-Starter-Kit-for-Raspberry-Pi-Pico" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi Pico Grove 扩展板</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio 系列 - 扩展板</font></div>
            <a href="/cn/Grove-Shield-for-Wio-Lite" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Lite Grove 扩展板</font></span></a>
            <br/>
            <a href="/cn/Wio-Extension-RTC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Tracker RTC 模块</font></span></a>
            <br/>
    </div>
</div>

### 配件 

<!-- Grove 配件 -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>Grove 配件</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>这是 Grove 配件的介绍。</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>显示器</font></div>
            <a><span><font color={'FFFFFF'} size={"2"}>OLED -</font></span></a>
            <a href="/cn/Grove-OLED-Display-0.66-SSD1306_v1.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}>0.66"</font></span></a>,
            <a href="/cn/Grove-OLED-Display-0.96-SSD1315" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 0.96"</font></span></a>,
            <a href="/cn/Grove-OLED-Display-1.12-SH1107_V3.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 1.12" </font></span></a>
            <br/>
            <a href="/cn/Grove-LCD_RGB_Backlight" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LCD RGB 背光 </font></span></a>
            <br/>
            <a href="/cn/Grove-0.54_inch_Red_Dual_Alphanumeric_Display" target="_blank"><span><font color={'FFFFFF'} size={"2"}>双位</font></span></a>,
            <a href="/cn/Grove-0.54_inch_Red_Quad_Alphanumeric_Display" target="_blank"><span><font color={'FFFFFF'} size={"2"}>四位 </font></span></a>
            <a><span><font color={'FFFFFF'} size={"2"}> 字母数字 LED</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>执行器</font></div>
            <a href="/cn/Grove-I2C_Motor_Driver_V1.3" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  电机驱动器 </font></span></a>
            <br/>
            <a href="/cn/Grove-Relay" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  继电器 </font></span></a>,
            <a href="/cn/Grove-Servo" target="_blank"><span><font color={'FFFFFF'} size={"2"}>舵机 </font></span></a>
            <br/>
            <a href="/cn/Grove-16-Channel_PWM_Driver-PCA9685" target="_blank"><span><font color={'FFFFFF'} size={"2"}>PWM 驱动器 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>时间</font></div>
            <a href="/cn/Grove-RTC" target="_blank"><span><font color={'FFFFFF'} size={"2"}>RTC - 基于 DS1307 </font></span></a>
            <br/>
            <a href="/cn/Grove_High_Precision_RTC" target="_blank"><span><font color={'FFFFFF'} size={"2"}>RTC - 基于 PCF85063TP </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>电流</font></div>
            <a href="/cn/Grove-2.5A-DC-Current-Sensor-ACS70331" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 2.5A</font></span></a>,
            <a href="/cn/Grove-10A_DC_Current_Sensor-ACS725" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 10A </font></span></a>
            <a><span><font color={'FFFFFF'} size={"2"}> 直流电流传感器</font></span></a>
            <br/>
            <a href="/cn/Grove-5A_DC_AC_Current_Sensor-ACS70331" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ±5A 直流/交流电流传感器 </font></span></a>
            <br/>
            <a href="/cn/Grove-MOSFET" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MOSFET </font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>LED</font></div>
            <a href="/cn/Grove-Red_LED" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 红色LED </font></span></a>
            <br/>
            <a href="/cn/Grove-LED_Bar" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LED条形灯 </font></span></a>
            <br/>
            <a href="/cn/Grove-LED_ring" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RGB LED环形灯 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>开关和按钮</font></div>
            <a href="/cn/Grove-Button" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 按钮 </font></span></a>
            <br/>
            <a href="/cn/Grove-6-Position_DIP_Switch" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 6位DIP开关 </font></span></a>
            <br/>
            <a href="/cn/Grove-Switch-P" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 面板安装开关 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>输入/输出</font></div>
            <a href="/cn/Grove-Differential_Amplifier_v1.2" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 差分放大器 </font></span></a>
            <br/>
            <a href="/cn/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 8通道I2C多路复用器 </font></span></a>
            <br/>
            <a href="/cn/Grove-Qwiic-Hub" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove转Qwiic集线器 </font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>外壳</font></div>
            <a href="/cn/Grove-Wrapper" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove - 包装器</font></span></a>
            <br/>
    </div>
</div>

<!-- Beyond Grove / Retired Product -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>传统产品</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>这是Seeed不再维护的产品和配件部分</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>显示器</font></div>
            <a href="/cn/LCD_16-2_Characters-Green_Yellow_back_light" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LCD 16*2 </font></span></a>
            <br/>
            <a href="/cn/LCD_8-2_Characters-Blue_back_light" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LCD 8*2 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>充电</font></div>
            <a href="/cn/Lipo_Rider_Pro" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Lipo Rider Pro </font></span></a>
            <br/>
            <a href="/cn/3W_Solar_Panel_138x160" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 太阳能电池板 </font></span></a>
            <br/>
            <a href="/cn/DC_framework_miniature_solenoid_VL-0063" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 直流框架 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>电流</font></div>
            <a href="/cn/Adjustable_DC_DC_Power_Converter_1V-12V-1.5A" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 1V至12V直流电源转换器</font></span></a>
            <br/>
            <a href="/cn/RS-232_To_TTL_Conveter-MAX3232IDR" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RS-232转TTL转换器</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>LED</font></div>
            <a href="/cn/FSM-55" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FSM-55 LED</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>输入/输出</font></div>
            <a href="/cn/USB_To_Uart_5V_3V3" target="_blank"><span><font color={'FFFFFF'} size={"2"}> USB转UART 5V/3V3</font></span></a>
            <br/>
<a href="/cn/13.56Mhz_RFID_module-IOS-IEC_14443_type_a" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RFID模块</font></span></a>
            <br/>
<a href="/cn/AVR_USB_Programmer" target="_blank"><span><font color={'FFFFFF'} size={"2"}> AVR USB编程器</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>外壳</font></div>
            <a href="/cn/Bracket_for_Infrared_Proximity_Sensor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 红外接近传感器支架外壳</font></span></a>
            <br/>
            <a href="/cn/Shield-MaTrix-V0.9b" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Shield MaTrix V0.9</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>工具</font></div>
            <a href="/cn/Bluetooth_Multimeter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 蓝牙万用表</font></span></a>
            <br/>
            <a href="/cn/DSO_Nano" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DSO Nano示波器</font></span></a>
            <br/>
            <a href="/cn/RF_Explorer_Software" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RF Explorer软件</font></span></a>
            <br/>
    </div>
</div>

<!-- Kit with Courses -->

### 套件与课程

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduino 套件</font></div>
            <a href="/cn/Grove_Beginner_Kit_for_Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Arduino 初学者套件 </font></span></a>
            <br/>
            <a href="/cn/Grove_Speech_Recognizer_Kit_for_Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Arduino 语音识别套件 </font></span></a>
            <br/>
            <a href="/cn/Grove_Smart_Plant_Care_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove 智能植物护理套件 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal 套件</font></div>
            <a href="/cn/Wio-Terminal-TinyML" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 什么是 TinyML </font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-TinyML-Kit-Course" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 应用套件 ML101 与 Vijay 教授课程 </font></span></a>
            <br/>
            <a href="/cn/Introduction_to_Artificial_Intelligence_for_Makers" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 创客人工智能入门 </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO 套件</font></div>
            <a href="/cn/XIAO-Kit-Courses" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio XIAO 套件与课程 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Micro:bit 套件</font></div>
            <a href="/cn/Grove_Inventor_Kit_for_microbit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Micro:bit 发明家套件</font></span></a>
            <br/>
    </div>
</div>

### 教程

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>Arduino 开发板教程</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>在这里探索 Arduino 开发板的不同教程和指南</font></div>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><a href="/cn/Download-Arduino-and-install-Arduino_Driver" target="_blank"><span><font color={'8DC215'} size={"5"}>📖 Arduino 基础使用</font></span></a></div>
            <a href="/cn/Download-Arduino-and-install-Arduino_Driver" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 下载 Arduino 并安装 Arduino 驱动程序</font></span></a>
            <br/>
            <a href="/cn/Seeed_Arduino_Boards" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何将 Seeed Studio 开发板添加到 Arduino IDE</font></span></a>
            <br/>
            <a href="/cn/Guide_to_use_demos_downloaded_from_Seeed-s_Github" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何使用从 Seeed Studio Github 下载的示例</font></span></a>
            <br/>
            <a href="/cn/How_to_use_and_write_a_library" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何使用和编写库</font></span></a>
            <br/>
            <a href="/cn/Upload_Code" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何上传代码</font></span></a>
            <br/>
            <a href="/cn/Use_External_Editor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用外部编辑器</font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><a href="/cn/Arduino-AWS-IOT-Bridge" target="_blank"><span><font color={'8DC215'} size={"5"}>📖 Arduino 高级使用</font></span></a></div>
            <a href="/cn/Suli" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Suli</font></span></a>,
            <a href="/cn/Seeed_Arduino_Serial" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Seeed Arduino Serial</font></span></a>
            <br/>
            <a href="/cn/I2C_And_I2C_Address_of_Seeed_Product" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed 产品的 I2C 和 I2C 地址</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-Firmata" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Firmata 教程 - 如何在 Arduino 兼容板上使用 Firmata</font></span></a>
            <br/>
            <a href="/cn/Software-FreeRTOS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FreeRTOS 教程 - 如何使用 FreeRTOS 实现多任务</font></span></a>
            <br/>
            <a href="/cn/Software-SWD" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何使用 SWD 接口调试 Arduino 开发板</font></span></a>
            <br/>
            <a href="/cn/Flashing-Arduino-Bootloader-DAPLink" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 DAP Link 刷写 Arduino 引导程序</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduino 编译平台</font></div>
            <a href="/cn/Software-PlatformIO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> PlatformIO </font></span></a>
            <br/>
            <a href="/cn/Compiling_MicroPython_for_embedded_devices" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 为嵌入式设备编译 MicroPython </font></span></a>
            <br/>
            <a href="/cn/Guide_for_Codecraft_using_Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Arduino 的 Codecraft 平台 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}> Arduino 开发板趣味项目</font></div>
            <a href="/cn/IR_Remote" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 红外遥控器</font></span></a>
            <br/>
            <a href="/cn/Joystick_Control_RGB_Led" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 摇杆控制 RGB LED</font></span></a>
            <br/>
            <a href="/cn/Light_Sensor_and_LED_Bar" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 光传感器和 LED 条</font></span></a>
            <br/>
    </div>
</div>

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>Wio Terminal 教程</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>在这里探索不同的指南和教程</font></div>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><a><span><font color={'8DC215'} size={"5"}>Wio Terminal 基础使用</font></span></a></div>
            <a href="/cn/Wio-Terminal-Firmware" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何在 Wio Terminal 上玩复古游戏</font></span></a>
            <br/>
            <a><span><font color={'FFFFFF'} size={"2"}>USB 主机用于</font></span></a>
            <a href="/cn/Wio-Terminal-USBH-Keyboard" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 键盘</font></span></a>,
            <a href="/cn/Wio-Terminal-USBH-Mouse" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 鼠标</font></span></a>,
            <a href="/cn/Wio-Terminal-USBH-Xbox" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Xbox</font></span></a>
            <br/>
            <a><span><font color={'FFFFFF'} size={"2"}>USB 客户端用于</font></span></a>
            <a href="/cn/Wio-Terminal-USBCLIENT-Keyboard" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 键盘</font></span></a>,
            <a href="/cn/Wio-Terminal-USBCLIENT-Mouse" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 鼠标</font></span></a>,
            <a href="/cn/Wio-Terminal-USBCLIENT-MIDI" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MIDI</font></span></a>,
            <a href="/cn/Wio-Terminal-HMI-Usermode-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> HMI</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-Displaying-Gyro" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何在 Wio Terminal 上显示陀螺仪数据</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-Storting-Analog-Data" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何使用 Wio Terminal 存储数据</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-Displaying-Photos" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何使用 Wio Terminal 显示照片</font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal 趣味项目</font></div>
            <a href="/cn/Azure_IoT_CC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 Codecraft 编译平台连接 Azure IoT</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-Interactive-Face" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal 交互式表情演示</font></span></a>
            <br/>
            <a href="/cn/Barometric-Pressure-sensor-using-the-Wio-terminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 Wio terminal 的气压传感器</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-Reading-COVID19" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 Wio Terminal 读取冠状病毒实时数据</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-Sound-Meter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何使用 Wio Terminal 测量噪音水平</font></span></a>
            <br/>
            <a href="/cn/Wio-Terminal-8720-dev" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 如何将 Wio Terminal 用作 RTL8720DN 开发板</font></span></a>
            <br/>
    </div>
</div>

## 单板计算机

<strong><font color={'8DC215'} size={"4"}>本节介绍如何使用单板计算机进行基础开发。您可以探索以下内容：</font></strong>

- 单板计算机开发
- 基于 SBC 的应用
- 不同的软件部署
- 操作系统安装
- SBC 的扩展板或载板
- SBC 的配件
- 基于 SBC 的课程套件
- 教程

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><a href="/cn/BeagleBone" target="_blank"><span><font color={'8DC215'} size={"5"}> BeagleBone® </font></span></a></div>
            <a href="/cn/BeagleBone_Blue" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Blue </font></span></a>
            <br/>
            <a href="/cn/BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green </font></span></a>
            <br/>
            <a href="/cn/BeagleBone_Green_Wireless" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green Wireless </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY</font></div>
            <a href="/cn/ODYSSEY-X86J4105" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 </font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-GPIO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 硬件 </font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-STM32MP157C" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY STM32MP157C </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Quantum 开发板</font></div>
            <a href="/cn/Quantum-Mini-Linux-Development-Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  Quantum Mini Linux 开发套件 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi®</font></div>
            <a href="/cn/Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 介绍 </font></span></a>
            <br/>
            <a href="/cn/Raspberry_Pi_3_Model_B" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 3 Model B </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'808080'} size={"5"}>传统设备</font></div>
            <a href="/cn/ReSpeaker" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker 系列 </font></span></a>
            <br/>
            <a href="/cn/NPi-i.MX6ULL-Dev-Board-Linux-SBC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NPi 系列</font></span></a>
     </div>
</div>

### 应用 / 软件

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSY 应用</font></div>
            <a href="/cn/ODYSSEY-X86J4105-AzureIOT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 将 ODYSSEY 连接到 Azure IoT</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-Intel-OpenVINO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 Intel OpenVINO 工具包的计算机视觉</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-Frigate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 Frigate 的计算机视觉</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY 软件</font></div>
            <a href="/cn/ODYSSEY-X86-Home-Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY 上的 Home Assistant</font></span></a>
            <br/>
            <a href="/cn/Connect-Grove-to-Home-Assistant-ESPHome" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 使用 ESPHome 连接 Grove 模块</font></span></a>
            <br/>
            Mender
            <a href="/cn/Mender-Client-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 客户端</font></span></a>,
            <a href="/cn/Mender-Server-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 服务器</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/cn/BeagleBone_Solutions" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® 解决方案</font></span></a>
    </div>
</div>

### 操作系统安装 / 固件更新

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
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
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/cn/Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 原始操作系统安装</font></span></a>
    </div>
</div>

### 扩展板

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi - Pi HAT</font></div>
            <a href="/cn/Grove_Base_Hat_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Base HAT </font></span></a>,
            <a href="/cn/Grove_AI_HAT_for_Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove AI HAT</font></span></a>,
            <a href="/cn/RS-485_Shield_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RS-485 Pi HAT</font></span></a>,
            <a href="/cn/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 8通道12位ADC HAT</font></span></a>,
            <a href="/cn/ReSpeaker_4_Mic_Array_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker Pi HAT</font></span></a>
            <br/>
            <a href="/cn/Grove_Base_HAT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 了解更多</font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/cn/BeagleBone_Green_HDMI_Cape" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green HDMI Cape</font></span></a>
            <br/>
            <a href="/cn/Motor_Bridge_Cape_v1.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® 电机桥接扩展板 v1.0</font></span></a>
            <br/>
            <a href="/cn/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green 电阻式触摸LCD扩展板</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reSpeaker</font></div>
            <a href="/cn/ReSpeaker_Drive_Unit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker系列驱动单元</font></span></a>
            <br/>
            <a href="/cn/ReSpeaker_Mic_Array_v2.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker系列麦克风阵列</font></span></a>
            <br/>
    </div>
</div>

### 配件

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/cn/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 骨架盒</font></span></a>
            <br/>
            <a href="/cn/Raspberry_PI_Bplus_Case" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry PI B Plus 外壳</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/cn/Coral-Mini-PCIe-Accelerator-x86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Coral Mini PCIe 加速器</font></span></a>
            <br/>
            <a href="/cn/ODYSSEY-X86J4105-LTE-Module" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LTE 模块</font></span></a>
            <br/>
    </div>
</div>

### 课程套件

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/cn/Grove_Base_Kit_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi Grove 基础套件</font></span></a>
            <br/>
            <a href="/cn/LoRa_LoRaWan_Gateway_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LoRa®/LoRaWAN® 网关套件</font></span></a>
            <br/>
            <a href="/cn/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 基于Raspberry Pi的IoT Grove 入门套件</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/cn/Grove_Starter_Kit_for_BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green Grove 入门套件</font></span></a>
            <br/>
            <a href="/cn/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone Green Grove IoT 入门 AWS IoT 套件 </font></span></a>
            <br/>
    </div>
</div>

### 教程 / 常见问题

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/cn/remote_connect" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 远程连接到Raspberry Pi/reComputer</font></span></a>
            <br/>
            <a href="/cn/Raspberry_pi_CM4_update_eeprom" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 更新Raspberry pi CM4的eeprom</font></span></a>
    </div>
</div>