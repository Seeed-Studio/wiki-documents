---
description: 本页面是所有TinyML内容的合集。
title: TinyML
keywords:
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/tinyml_topic
last_update:
  date: 05/28/2024
  author: Yaohao
---

# 微型机器学习(TinyML)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/main.jpg" style={{width:1000, height:'auto'}}/></div>

<br />

TinyML是机器学习和嵌入式系统领域的一个研究方向，它探索在小型、低功耗微控制器上的机器学习，在边缘设备上实现安全、低延迟、低功耗和低带宽的机器学习推理。如果您对TinyML感到兴奋但不知道从哪里开始，我们的一站式指南非常适合您。本指南概述了什么是TinyML、它提供的机会，以及如何开始的分步说明。加入这个令人兴奋的领域，今天就开始您的TinyML之旅！

## 什么是TinyML？

微型机器学习（TinyML）是机器学习的一个领域，专注于在低功耗、小尺寸微控制器设备（例如Arduino）上开发和部署机器学习模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/1.png" style={{width:1000, height:'auto'}}/></div>

机器学习是计算机系统的一个领域，旨在开发自我改进的算法和统计模型。这是通过大量数据完成的，模型分析这些数据并从中提取模式，以便学习和改进给定任务。这个看似简单的范式已经在预测、异常检测和计算机视觉等复杂任务中带来了突破性的进展！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/06/14/everything-about-tinyml-basics-courses-projects-more/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

## 支持TinyML的推荐开发板

### Seeed Studio XIAO ESP32S3 Sense

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>超小型ESP32-S3开发板，配备OV2640摄像头，是AIoT领域的新星</font>
        <br /><font size={"3"}>高性能</font>
        <font size={"2"}>240MHz Xtensa 32位LX7双核处理器</font>
        <br /><font size={"3"}>内存</font>
        <font size={"2"}>8MB PSRAM + 8MB FLASH</font>
        <br /><font size={"3"}>多功能</font>
        <font size={"2"}>麦克风/SD卡槽/可拆卸OV2640</font>
        <br /><font size={"3"}>无线连接</font>
        <font size={"2"}>2.4GHz WiFi和BLE 5</font>
        <br /><font size={"3"}>支持TINYML</font>
        <font size={"2"}>图像处理/语音识别</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiaos3sense.jpg" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br /> <br /> <br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 了解更多 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

### Seeed Studio XIAO nRF52840 Sense

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nrf52840sense.jpg" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO nRF52840 Sense配备板载麦克风和6轴IMU，适用于TinyML AI+IOT项目</font>
        <br /><font size={"3"}>高性能</font>
        <font size={"2"}>ARM® Cortex™-M4 32位处理器，带FPU，运行频率64 MHz</font>
        <br /><font size={"3"}>内存</font><font size={"2"}>256 KB RAM + 2MB FLASH</font>
        <br /><font size={"3"}>多功能</font><font size={"2"}>板载麦克风和6轴IMU</font>
        <br /><font size={"3"}>无线连接</font><font size={"2"}>蓝牙5.0，NFC，带板载天线</font>
        <br /><font size={"3"}>支持TINYML</font><font size={"2"}>手势/语音识别</font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 了解更多 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAO_BLE/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

### Seeed Studio XIAO RP2040

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <br />
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rp2040.jpg" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO RP2040是一款超小型、高性能通用开发板。配备板载2MB闪存，支持micropython</font>
        <br /><font size={"3"}>快速入门</font>
        <font size={"2"}>支持Arduino/Micropython/CircuitPython</font>
        <br /><font size={"3"}>成本效益</font>
        <font size={"2"}>降低入门门槛</font>
        <br /><font size={"3"}>更强大的MCU（RP2040）</font>
        <font size={"2"}>双核ARM Cortex M0+ 树莓派RP2040芯片，运行频率高达133 MHz</font>
        <br /><font size={"3"}>丰富的片上内存</font>
        <font size={"2"}>264KB SRAM，2MB板载Flash</font>
        <br /><font size={"3"}>接口丰富</font>
        <font size={"2"}>11个数字引脚，4个模拟引脚，11个PWM引脚，1个I2C接口，1个UART接口，1个SPI接口，1个SWD焊盘接口</font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAO-RP2040/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

### Seeed Studio XIAO SAMD21

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO SAMD21 是一款超小型、高性能的通用开发板</font>
        <br /><font size={"3"}>用户最爱</font>
        <font size={"2"}>XIAO 系列的首款开创性产品！</font>
        <br /><font size={"3"}>拇指大小</font>
        <font size={"2"}>Seeed Studio 开发板系列中最小的 Arduino 兼容开发板</font>
        <br /><font size={"3"}>强大的 MCU (SAMD21)</font>
        <font size={"2"}>ARM® Cortex®-M0+ 32位 48MHz 微控制器(SAMD21G18)，配备 256KB Flash，32KB SRAM</font>
        <br /><font size={"3"}>灵活兼容</font>
        <font size={"2"}>兼容 Arduino IDE，面包板友好</font>
        <br /><font size={"3"}>接口丰富</font>
        <font size={"2"}>11 个数字/模拟引脚，10 个 PWM 引脚，1 个 DAC 输出，1 个 SWD 焊盘接口，1 个 I2C 接口，1 个 UART 接口，1 个 SPI 接口</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/samd21.jpg" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

### Wio Terminal

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>一个完整的 AI 平台，用于开始使用 TinyML 和物联网 - 基于 ATSAMD51P19 和 ARM Cortex-M4F 120MHz 构建，与各种微控制器机器学习框架高度兼容</font>
        <br /><font size={"3"}>高性能</font>
        <font size={"2"}>ATSAMD51 核心，配备 Realtek RTL8720DN BLE 5.0 和 Wi-Fi 2.4G/5G 开发板</font>
        <br /><font size={"3"}>内存</font><font size={"2"}>4 MB 外部 Flash，192 KB RAM</font>
        <br /><font size={"3"}>多功能</font><font size={"2"}>配备屏幕 + 开发板 + 输入/输出接口 + 外壳的完整系统</font>
        <br /><font size={"3"}>无线连接</font><font size={"2"}>可靠的无线连接，配备 Realtek RTL8720DN，双频 2.4Ghz / 5Ghz Wi-Fi</font>
        <br /><font size={"3"}>支持 TINYML</font><font size={"2"}>经过 Azure 认证，支持 Edge Impulse 的设备，可快速开始使用物联网和 TinyML</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/wio.png" style={{width:600, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 了解更多 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

### Grove Vision AI

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/vision.png" style={{width:600, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <br /><br /><br />
        <font size={"2"}>一款预训练的嵌入式 AI 视觉传感器，配备 Himax HX6537-A 处理器、OV2640 摄像头传感器、数字麦克风和 6 轴惯性测量单元 (IMU)，支持 YOLO v5 和 Edge Impulse</font>
        <br /><font size={"3"}>多功能</font><font size={"2"}>配备 OV2640 传感器用于图像处理<br />数字麦克风和 6 轴惯性测量单元 (IMU)</font>
        <br /><font size={"3"}>支持 TINYML</font><font size={"2"}>官方支持 Edge Impulse，提供 3 个定制模型来实现主流机器学习功能，如目标检测</font>
        <br /><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 了解更多 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Grove-Vision-AI-Module/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

### Grove Vision AI V2

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:600, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <br />
        <font size={"2"}>这是一款基于 MCU 的视觉 AI 模块，由 Arm Cortex-M55 和 Ethos-U55 驱动。它支持 TensorFlow 和 PyTorch 框架，兼容 Arduino IDE。通过 SenseCraft AI 算法平台，可以将训练好的机器学习模型部署到传感器上，无需编码。</font>
        <br /><font size={"3"}>多样化的 AI 模型支持：</font><font size={"2"}> 轻松部署来自 SenseCraft AI 的现成或自定义 AI 模型，包括 Mobilenet V1、V2、Efficientnet-lite、Yolo v5 和 v8。支持 TensorFlow 和 PyTorch 框架。</font>
        <br /><font size={"3"}>完全开源：</font><font size={"2"}>所有代码、设计文件和原理图均可用于修改和使用。</font>
        <br /><font size={"3"}>丰富的外设：</font><font size={"2"}> 包括 PDM 麦克风、SD 卡槽、Type-C、Grove 接口和其他外设。</font><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 了解更多 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/grove_vision_ai_v2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

### SenseCAP K1100

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <br /><br /><br />
        <font size={"2"}>快速开始使用 LoRa® 和 AI 的传感器原型套件<br /><br />10分钟部署，通过3个步骤构建AIoT项目<br /><br />机器学习和 LoRa® 技术的结合<br /><br />兼容400多种 Grove 传感器，支持广泛的应用<br /><br />板载集成主流平台，提供云端支持<br /><br />可升级到SenseCAP系列工业传感器</font>
        <br /><br /><br />
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/k1100.png" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 了解更多 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-quickstart/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

### SenseCAP A1101

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/a1101.png" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
      <br /><br /><br /><br />
      <font size={"2"}>TinyML 边缘AI智能图像传感器，支持多种AI模型，如图像识别、人员计数、目标检测、仪表识别等。</font>
      <br /><font size={"3"}>TINYML支持</font><font size={"2"}>官方支持Edge Impulse，快速开始训练和部署您的机器学习模型！</font>
      <br /><br /><br /><br /><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 了解更多 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/SenseCAP-Vision-AI-Get-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 快速入门</font></span></strong></a>
</div>

<br />

## 支持平台

我们的设备现在得到了大量合作平台和案例的支持。

- **Seeed Studio SenseCraft Model Assistant** 是一个专注于嵌入式AI的开源项目。
- **Edge Impulse** 针对基于传感器的应用进行了优化。
- **TensorFlow Lite** 轻量级且针对深度学习进行了优化。

通过支持这些平台，我们使开发者能够轻松地在边缘设备上构建和部署机器学习模型，从微控制器到单板计算机。

### SenseCraft Model Assistant

SenseCraft Model Assistant是由Seeed Studio开发的专注于嵌入式AI的开源项目。它为现实世界场景提供了一系列优化算法，使实现更加用户友好，并在嵌入式设备上实现更快、更准确的推理。

SenseCraft Model Assistant目前支持异常检测、计算机视觉和特定场景算法，未来将添加更多功能。

<div class="button_tech_support_container">
<a href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" class="button_edgelab"></a>
</div>

它提供了一个用户友好的平台，用于对收集的数据进行训练和可视化算法性能，其模型设计为在低成本硬件上运行，如ESP32、Arduino开发板和Raspberry Pi。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/pfld_meter.gif" style={{width:700, height:'auto'}}/></div>

SenseCraft Model Assistant还支持多种模型导出格式，包括TensorFlow Lite、ONNX以及TensorRT和OpenVINO等特殊格式。使用SenseCraft Model Assistant，开发者可以轻松地在各种嵌入式设备上构建和部署机器学习模型。

### Codecraft

Codecraft基于Scratch 3.0语言，通过简单的"拖拽"积木块即可实现编程。除了Scratch编程交互式游戏或动画的能力外，Codecraft还支持多种常见硬件设备，实现软硬件结合，使编程更加有趣。

<div class="button_tech_support_container">
<a href="https://ide.tinkergen.com/" class="button_codecraft"></a>
</div>

通过Codecraft和Wio Terminal，现在可以体验完整的嵌入式机器学习过程，而无需处理复杂的编程环境和编程知识。

在Edge Impulse的支持下，初学者可以使用Codecraft图形化编程轻松接触微型机器学习。通过简单的拖拽编程，数据获取、训练和模型部署比以往任何时候都更加生动。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4625491.gif" style={{width:400, height:'auto'}}/></div>

### Edge Impulse

Edge Impulse是一个强大的机器学习平台，用于构建和部署嵌入式机器学习模型。

<div class="button_tech_support_container">
<a href="https://edgeimpulse.com/" class="button_edgeimpulse"></a>
</div>

它为开发者提供了一系列工具，用于收集和处理传感器数据、设计和训练机器学习模型，以及将这些模型部署到边缘设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4262777.gif" style={{width:500, height:'auto'}}/></div>

Edge Impulse 针对基于传感器的应用进行了优化，支持广泛的硬件平台。使用 Edge Impulse，开发者可以轻松地在嵌入式设备上构建和部署机器学习模型，使其成为物联网和智能设备应用的宝贵工具。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/edgeimpulse.png" style={{width:600, height:'auto'}}/></div> -->

### TensorFlow Lite

TensorFlow Lite 是流行的 TensorFlow 机器学习框架的轻量级版本，专为在嵌入式和移动设备上运行而设计。

<div class="button_tech_support_container">
<a href="https://www.tensorflow.org/lite" class="button_tensorflowlite"></a>
</div>

它为开发者提供了一系列工具，用于在资源受限的设备上构建和部署机器学习模型，包括对专用硬件加速器的支持。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/image5.gif" style={{width:800, height:'auto'}}/></div>

TensorFlow Lite 支持广泛的硬件平台，特别适合深度学习应用。使用 TensorFlow Lite，开发者可以轻松地在嵌入式和移动设备上构建和部署机器学习模型，使其成为物联网、移动和智能设备领域广泛应用的宝贵工具。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/tensorflowlite.png" style={{width:600, height:'auto'}}/></div> -->

## 入门很简单

让我们来看看 TinyML 可以实现的有趣功能！

### XIAO 上的 TinyML

<div class="button_tech_support_container">
<a href="https://wiki.seeedstudio.com/cn/SeeedStudio_XIAO_Series_Introduction/" class="button_xiao"></a>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">XIAO RP2040 和 XIAO SAMD21 上的 Edge Impulse</th>
      <th class="table-trnobg">XIAO nRF52840 Sense 上的 Edge Impulse</th>
      <th class="table-trnobg">XIAO nRF52840 Sense 上的 TensorFlow Lite</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" style={{width:200, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>本项目涵盖了在 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040 开发板上训练和部署模型。</font></td>
      <td class="table-trnobg"><font size={"1"}>欢迎来到这个关于在 Seeed Studio XIAO nRF52840 Sense 上使用 Edge Impulse 的快速入门指南！在本指南中，我们将探索如何使用板载 IMU 传感器检测人体运动并分类不同的动作。</font></td>
      <td class="table-trnobg"><font size={"1"}>本指南将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并使用板载加速度计检测拳击和弯曲等手势。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAOEI/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAO-BLE-Sense-TFLite-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr>
      <th class="table-trnobg">XIAO ESP32S3 Sense 上的 Edge Impulse</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/2.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>本项目涵盖了在 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040 开发板上训练和部署模型。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/xiao_esp32s3_keyword_spotting/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

---

### Wio Terminal 上的 TinyML

Wio Terminal 是一款功能强大且易于使用的开发板，专为创客、爱好者和物联网爱好者设计。它配备了 2.4 英寸 LCD 屏幕、Wi-Fi 和蓝牙连接、一系列传感器以及多种输入/输出接口。

Wio Terminal 支持多种编程语言，包括 Arduino、MicroPython、CircuitPython 等，使开发者能够轻松上手。凭借其紧凑便携的设计，Wio Terminal 非常适合各种项目，从创建智能设备到构建工业应用原型。

<div class="video-container">
<iframe width="960" height="500" src="https://www.youtube.com/embed/3Fp3W9VJUL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

---

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Wio Terminal 上的 Edge Impulse</th>
      <th class="table-trnobg">Wio Terminal 上的 TensorFlow Lite</th>
      <th class="table-trnobg">Wio Terminal 上的 Codecraft TinyML</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4625071.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>现在，Wio Terminal 已获得 Edge Impulse 的官方支持。让我们看看如何让 Wio Terminal 开始在边缘进行机器学习！</font></td>
      <td class="table-trnobg"><font size={"1"}>本文介绍如何将官方 Arduino Tensorflow Lite 库安装到您的 Wio Terminal 中，让您能够使用 Wio Terminal 测试一些机器学习模型。</font></td>
      <td class="table-trnobg"><font size={"1"}>使用 Codecraft 图形化编程、Wio Terminal 和 Edge Impulse 的简单语音识别项目。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-TFLM-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.yuque.com/tinkergen-help-en/codecraft/tinyml" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### Grove Vision AI 上的 TinyML

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Grove Vision AI 上的 Edge Impulse</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><iframe width="960" height="515" src="https://www.youtube.com/embed/N7xpzzD1bYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>Grove - Vision AI 模块是一款基于 Himax HX6537-A 处理器的拇指大小的开发板，配备了 200 万像素 OV2640 摄像头、麦克风、3 轴加速度计和 3 轴陀螺仪。它提供 32 MB SPI 闪存存储，预装了用于人脸识别和人员检测的机器学习算法，同时也支持自定义模型。它与 XIAO 生态系统和 Arduino 兼容，这些特性使其非常适合开始 AI 驱动的摄像头项目！它完全支持 Edge Impulse，这意味着您将能够从摄像头采样原始数据、构建模型，并直接从工作室将训练好的机器学习模型部署到模块，无需任何编程。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/edge-impulse-vision-ai/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### SenseCAP A1101 上的 TinyML

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
        <th class="table-trnobg">SenseCAP A1101 上的 Roboflow/ YOLOv5/ TensorFlow Lite</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/sensecapa1101.png" style={{width:800, height:400}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>Seeed SenseCAP A1101 - LoraWAN 视觉 AI 传感器是专为开发者设计的图像识别 AI 传感器。SenseCAP A1101 - LoRaWAN 视觉 AI 传感器结合了 TinyML AI 技术和 LoRaWAN 长距离传输，为室内外使用提供了低功耗、高性能的 AI 设备解决方案。该传感器采用 Himax 高性能、低功耗 AI 视觉解决方案，支持 Google TensorFlow Lite 框架和多个 TinyML AI 平台。在本教程中，我们将教您如何为您的特定应用训练自己的 AI 模型，然后轻松将其部署到 SenseCAP A1101 - LoRaWAN 视觉 AI 传感器。让我们开始吧！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## TinyML 课程

### Wio Terminal Codecraft 课程

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"3"}>通过详细的课程和循序渐进的项目指导，开始您进入 TinyML 和 Wio Terminal 世界的第一步！现在，简单的硬件也能解决复杂的问题。</font>
        <br /><font size={"3"}><strong>丰富的课程资源</strong></font>
        <font size={"2"}>本课程配有完整的项目材料和代码程序，并且全部在 GitHub 上开源。所有读者都可以自由使用和进一步学习。</font>
        <br /><font size={"3"}><strong>详细易懂的课程内容</strong></font><font size={"2"}>该课程由 Seeed Studio EDU 部门开发。课程涵盖原理、部署和应用，使课堂生动有趣，同时课程内容完整且专业。</font>
        <br /><font size={"3"}><strong>从零开始的课程设计</strong></font><font size={"2"}>考虑到学生学习的实际情况，每一课，甚至整个课程体系，都设计为从浅入深。因此，教学是根据学生的能力量身定制的。</font>
        <br /><font size={"3"}><strong>无需复杂的编程基础</strong></font><font size={"2"}>该课程专注于使用 Seeed Studio 开发的 Codecraft 平台进行编程，这是一个基于 Scratch 3.0 的积木式图形化编程平台。它使编程变得更容易、更有趣，不需要您具备任何高级编程语言使用基础。</font>
        <br />
    </div>
    <div class="xiao_topic_page_pic">
      <img src="https://files.seeedstudio.com/wiki/tinyml-topic/cc_tinyml_2.png" style={{width:800, height:'auto'}}/>
      <br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🖱 了解更多</font></span></strong></a>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 立即下载</font></span></strong></a>
</div>

---

### Seeed Studio 出品的 Wio Terminal TinyML 基础教程

<div class="button_tech_support_container">
<a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" class="button_wiotinyml"></a>
</div>

### Wio Terminal Edge Impulse 教程

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">使用嵌入式机器学习构建连续运动识别系统</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse 使用内置麦克风进行音频场景识别</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse 使用超声波传感器进行人员计数</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><iframe width="280" height="180" src="https://www.youtube.com/embed/FseGCn-oBA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_p.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>在本教程中，我们将向您展示如何构建一个能够检测连续运动的机器学习系统，如何从真实设备采样数据，如何设计信号处理管道，以及如何将模型部署回设备。</font></td>
   <td class="table-trnobg"><font size={"1"}>在这个项目中，我们将学习如何使用 Wio Terminal 和 Edge Impulse 训练和部署音频场景分类器。更多详细信息和视频教程，请观看相应的视频！</font></td>
   <td class="table-trnobg"><font size={"1"}>在这个项目中，我们将使用 Wio Terminal、普通超声波测距仪和特殊的深度学习技术来创建一个人员计数系统，让它真正发挥作用。</font></td>
     </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-3/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal Edge Impulse 用于预测性维护的异常检测</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse 使用多通道气体传感器区分饮料</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>在这个项目中，我们将使用来自 Wio Terminal 内置加速度计的数据，在设备上执行异常检测，然后将数据发送到 Blynk Edgent 云。</font></td>
      <td class="table-trnobg"><font size={"1"}>在这个 wiki 中，我们将介绍如何使用 Wio Terminal 和 Edge Impulse 简单部署机器学习项目。Wio Terminal 与 Grove 系统结合可以非常强大，它可以引入数百种传感器数据进行分析，并可能评估不同的场景！</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-6/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Wio Terminal TensorFlow Lite 教程

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Wio Terminal Tensorflow Lite Micro 智能气象站与 BME280</th>
      <th class="table-trnobg">Wio Terminal Tensorflow Lite Micro MCU 语音识别 – 语音转意图</th>
      <th class="table-trnobg">Wio Terminal 机器学习 - 手势识别</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/IMG_9575.JPG" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-7-768x570.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>在这个项目中，我们将使用 Wio Terminal 和 Tensorflow Lite for Microcontrollers 创建一个智能气象站，能够基于 BME280 环境传感器的本地数据预测未来 24 小时的天气和降水情况。</font></td>
   <td class="table-trnobg"><font size={"1"}>在这个项目中，我们将采用一种更高效的方法，直接将用户话语解析为意图/槽位形式的可操作输出。</font></td>
   <td class="table-trnobg"><font size={"1"}>本教程将演示如何使用 Wio Terminal 在 TensorFlow Lite 的帮助下设置一个简单的手势识别机器学习演示。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-TFLM-2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-TFLM-3/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Gesture-Recognition/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Udemy 上的 Wio Terminal TinyML 教程

<div class="button_tech_support_container">
<a href="https://www.udemy.com/course/tinyml-wio-terminal/" class="button_udemy"></a>
</div>

## TinyML 应用

在这里我们将向您展示一些我们 TinyML 设备的精彩示例。这些案例研究将按应用场景分类，因此我们希望您能在这里找到感兴趣的内容，并加入我们一起实现您的想法！

### 人机交互

使用 TinyML 技术可以将传感器数据与机器学习模型相结合，实现语音识别、手势识别和姿态识别等人机交互应用。

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">XIAO nRF52840 Sense 上的语音识别</th>
      <th class="table-trnobg">TinyML 变简单：异常检测和运动分类</th>
      <th class="table-trnobg">使用 XIAO nRF52840 和 Edge Impulse 的语音控制玩具和显示器</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1472235/_d2Lefd6Xrq.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/voicetoy.gif" style={{width:280, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>本 wiki 将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并使用板载麦克风执行语音识别。</font></td>
   <td class="table-trnobg"><font size={"1"}>在巨大的微型设备 Seeed XIAO nRF52840 Sense 上探索机器学习。</font></td>
   <td class="table-trnobg"><font size={"1"}>此演示展示了使用 XIAO nRF52840 Sense 开发板的嵌入式机器学习语音控制动画屏幕显示和有趣玩具。</font></td>
     </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/XIAO-BLE-Sense-TFLite-Mic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-anomaly-detection-motion-classification-958fd2" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/yuwork58426/voice-control-toy-and-display-using-xiao-and-edge-impulse-592bb4" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">TinyML 变简单：手势识别</th>
      <th class="table-trnobg">我如何构建一个联网的人工鼻子</th>
      <th class="table-trnobg">使用 TinyML 进行液体分类</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1347750/_wTExmhrtW6.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/nose.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/liquid.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>使用 Codecraft/Edge Impulse 编程的 Seeed Wio Terminal 是初学者开始学习 tinyML（嵌入式机器学习）的绝佳工具。</font></td>
   <td class="table-trnobg"><font size={"1"}>在过去的几个月里，我一直在做一个非常酷的项目，你们中的一些人可能已经听说过，因为它有点火了。我构建了一个 DIY 的通用人工鼻子，可以闻到你教它识别的几乎任何东西！</font></td>
   <td class="table-trnobg"><font size={"1"}>使用水质传感器测量浊度，并在 Seeed Studio Wio Terminal 上运行机器学习模型对各种液体进行分类。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-gesture-recognition-ce13a5" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://blog.benjamin-cabe.com/2021/08/03/how-i-built-a-connected-artificial-nose" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.edgeimpulse.com/experts/prototype-and-concept-projects/liquid-classification-tinyml" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">物理方式玩 Chrome 恐龙游戏</th>
      <th class="table-trnobg">使用 Wio Terminal 和 Edge Impulse 构建手写识别</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/dinogame.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2021/03/Copy-of-Copy-of-Clean-6-1030x601.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>在这个项目中，我们将在机器学习和嵌入式电子设备的帮助下，以物理方式玩 Chrome 恐龙游戏。</font></td>
   <td class="table-trnobg"><font size={"1"}>在今天的教程中，我将向您展示如何使用 Wio Terminal 和 Edge Impulse 构建基于机器学习的手写识别设备。按照这个详细指南了解单个飞行时间传感器如何让您识别手写手势并将其转换为文本！</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://makergram.com/blog/play-chromes-dino-game-physically/?fbclid=IwAR3h19XxXITb4jh6Ot1pvc7yDXJ5g8gvNAOPA7DYTs8rpQ1DaiHmd_WsGFo" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/03/02/handwriting-recognition-with-wio-terminal-edge-impulse/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### 零售

TinyML 技术可以应用于零售行业的销售预测、客户行为分析、资源优化、损失预防和智能营销，帮助实现更智能、更高效的业务管理和运营。

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">使用 XIAO nRF52840 Sense 和 Edge Impulse 的宠物活动追踪器</th>
      <th class="table-trnobg">基于 BLE AI 驱动的智能手表检测潜在阳光伤害</th>
      <th class="table-trnobg">使用人体传感器的智能空气冷却器.Ft Useful Sensor</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1424908/_vDVFksQ0VV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/smartwatch.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1509781/_hEJTTPV6Rb.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>我们的宠物值得保持更多活力。一个 tinyML 模型基于来自 3 轴 IMU 的数据预测活动。</font></td>
   <td class="table-trnobg"><font size={"1"}>在 SD 卡上记录紫外线和天气数据以训练 Edge Impulse 模型。然后运行它，通过 Android 应用程序通过 BLE 获得阳光伤害信息。</font></td>
      <td class="table-trnobg"><font size={"1"}>在这个时代，每个其他设备都变得更智能，为什么不为我们亲爱的老夏日朋友空气冷却器增加智能呢？然而，如果传感器可以直接呈现图像数据的提取特征会怎样？这不是很有趣吗？</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/pet-activity-tracker-using-xiao-ble-sense-edge-impulse-858d73" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/ble-ai-driven-smartwatch-detecting-potential-sun-damage-7d08be" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/phatta/smart-air-cooler-using-person-sensor-ft-useful-sensor-7daa73" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">TinyML 🧠 和 Azure IoT 与 Edge Impulse 和 Wio Terminal</th>
      <th class="table-trnobg">NMCS：不再洒咖啡！</th>
      <th class="table-trnobg">用于安全露营的 AI 驱动热像仪</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><iframe width="300" height="200" src="https://www.youtube.com/embed/JCirUbyY60s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1579836/_rL5FcyTm6U.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1367564/_W4FrYx6LrV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>春天来了，所以我可以升级我的 Azure IoT 松鼠喂食器，现在添加计算机视觉功能。为了做到这一点，我将使用 Edge Impulse 为当前场景的喂食器添加 TinyML 功能。</font></td>
      <td class="table-trnobg"><font size={"1"}>NMCS 是一个使用其听觉和视觉技能的设备，确保在制作能量增强剂时咖啡不会洒出。</font></td>
      <td class="table-trnobg"><font size={"1"}>运行在 Wio Terminal 上的 TinyML 模型可以识别动物或人类是否在黑暗中接近并警告露营者。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=JCirUbyY60s" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/sashrikad/nmcs-no-more-coffee-spills-55897a" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/ai-powered-thermal-camera-for-safe-camping-8fc887" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

---

### 农业

使用TinyML技术，可以将传感器数据与机器学习模型相结合，实现灌溉自动化、天气预报以及作物病虫害检测。

<div class="table-center">

<table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">基于视觉的沙土流失预防套件 (VSDP)</th>
      <th class="table-trnobg">基于热成像和 TensorFlow 的灌溉水位评估</th>
      <th class="table-trnobg">使用 Tensorflow Lite for Microcontrollers 进行天气预测</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1502609/_8nie9S4suc.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/irrigation.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/weatherstation.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>我想建立一个通过 LoRaWAN 连接的基础设施，其中包含监控沙土流失区域的边缘 AI 节点。</font></td>
   <td class="table-trnobg"><font size={"1"}>通过热成像收集灌溉水位数据，构建和训练神经网络模型，并直接在 Wio Terminal 上运行模型。</font></td>
   <td class="table-trnobg"><font size={"1"}>在今天的文章中，我们将使用 Wio Terminal 和 Tensorflow Lite for Microcontrollers 创建一个智能气象站，能够基于 BME280 环境传感器的本地数据预测未来 24 小时的天气和降水情况。</font></td>
    </tr>
  <tr></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/rahulkhanna/vision-based-sand-depletion-prevention-kit-vsdp-bde664" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/irrigation-level-assessment-by-thermal-imaging-w-tensorflow-c60b2c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/03/18/learn-tinyml-using-wio-terminal-and-arduino-ide-4-weather-prediction-with-tensorflow-lite-for-microcontrollers-a-k-a-i-just-like-data/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">可食用藻类生长周期监测器</th>
      <th class="table-trnobg">IoT 食品变质传感器和监控仪表板</th>
      <th class="table-trnobg">智能湖泊 - 藻华早期检测</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1510607/_dve7mQFzUj.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1502746/_dSmk8zVpyV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1498224/_dDVOnd2yVz.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>我决定开发一个系统，帮助在自给自足的空间中培养螺旋藻。</font></td>
   <td class="table-trnobg"><font size={"1"}>DeViridi 是一个智能 IoT 驱动的工具，可用于：监控食品储存条件并确定食品变质情况。</font></td>
      <td class="table-trnobg"><font size={"1"}>使用来自不同传感器的数据和边缘机器学习，该设备可以检测藻华的早期迹象并通知当局或市民。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/skruglewicz/edible-algae-growing-cycle-monitor-bca939" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/cyborgash122/deviridi-iot-food-spoilage-sensor-and-monitoring-dashboard-e2f933" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/smart-lake-early-detection-of-algae-bloom-6494c9" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <th class="table-trnobg">基于 IoT AI 驱动的树木疾病识别器（使用 Edge Impulse 和 MMS）</th>
      <th class="table-trnobg">湖泊塑料瓶检测器</th>
      <th class="table-trnobg">NOMOS：蚊虫生长监测系统</th>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/mms.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1499166/_i5AfIuVOPD.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1498662/_4hNXTHVvlf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
  <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>检测树木疾病并通过 MMS 获得结果通知，以防止疾病传播并危害森林、农场和耕地。</font></td>
      <td class="table-trnobg"><font size={"1"}>为了对抗塑料污染对海洋生物的影响。受到标志性电影角色 WALL-E 的启发，我的项目旨在提高人们对乱扔垃圾问题及其对环境影响的认识。</font></td>
      <td class="table-trnobg"><font size={"1"}>基于下水道管线的温度、湿度和水流的蚊虫生长监测系统，以最大限度地减少登革热的传播。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/iot-ai-driven-tree-disease-identifier-w-edge-impulse-mms-1b5ff6" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/JuanYi/plastic-bottle-detector-for-lake-353996" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/rifqiabdillah/nomos-mosquito-growth-monitoring-system-6def4c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">使用 Wio Terminal 构建 TinyML 智能气象站！</th>
      <th class="table-trnobg">灭火 🔥 - 使用 TinyML 进行野火预测</th>
      <th class="table-trnobg">早期山洪预警系统</th>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1264506/_2yKmoX1X3P.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1503029/_Uq5VHx9Sf0.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1503004/_dDriQ77DIf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>学习构建您自己的由机器学习驱动的智能气象站，从数据采集到训练再到部署！</font></td>
      <td class="table-trnobg"><font size={"1"}>Fight Fire 是一个野火预测设备，将帮助消防部门快速响应野火。</font></td>
      <td class="table-trnobg"><font size={"1"}>这个想法旨在提供一个解决方案，生成早期预警，允许及时应对洪水或雪崩造成的灾害。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/supperted825/build-a-tinyml-smart-weather-station-with-wio-terminal-1ec8ee" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/user102774/fight-fire-wild-fire-prediction-using-tinyml-df7572" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mrmolex/early-flash-flood-warn-system-8cfdee" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

---

### 工业

使用TinyML技术可以将传感器数据与机器学习模型相结合，自动化和优化生产过程，如质量控制和设备维护。

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">使用 Edge Impulse 和 Notecard 进行电梯机器学习异常检测</th>
      <th class="table-trnobg">物联网AI驱动的酸奶加工和质地预测 | Blynk</th>
      <th class="table-trnobg">使用 tinyML 进行油罐泄漏检测</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/elevator.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/aidriven.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1412712/_pEJAZLxsMf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
        <td class="table-trnobg"><font size={"1"}>物联网设备实现预测性维护，确保商用电梯性能稳定，减少昂贵的维修和停机时间。这对于高效的建筑流动和公共安全、生产力、能耗和生活质量至关重要。</font></td>
        <td class="table-trnobg"><font size={"1"}>在生产酸奶时收集环境因素和培养量数据。然后通过 Blynk 运行神经网络模型来预测其质地。</font></td>
        <td class="table-trnobg"><font size={"1"}>这个机器学习驱动的设备能够嗅探柴油并在手机上发送实时通知。使用 Wio terminal、Edge Impulse 和 Blynk。</font></td>
     </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/ivan-arakistain/ml-anomaly-detection-in-elevators-w-edge-impulse-notecard-344198" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/iot-ai-driven-yogurt-processing-texture-prediction-blynk-560c52" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/450327/oil-tank-leak-detection-using-tinyml-by-sashrika-29222f" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">用于气体泄漏检测的网页浏览器操作机器人</th>
      <th class="table-trnobg">使用流量计和TinyML进行管道堵塞检测</th>
      <th class="table-trnobg">使用 Tiny ML + LoRa 检测排水管堵塞</th>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1548875/_F9M97NN1KO.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><iframe title="vimeo-player" src="https://player.vimeo.com/video/784835596?h=cc9173caab" width="300" height="230" frameborder="0" allowfullscreen></iframe></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1580113/_N3O8kRxik8.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>绿色氢能是一种减少排放并保护我们星球的替代能源。然而，它仍处于早期阶段，安全性是一个主要关注点，因为必须不惜一切代价避免氢气泄漏。为了实现气体泄漏的早期检测，我们想要构建一个大型远程操作机器人来携带所需的传感设备。</font></td>
      <td class="table-trnobg"><font size={"1"}>作为工业操作中管道堵塞问题的建议解决方案，我们引入了人工智能（AI）和机器学习的使用。我们的AI系统使用流量传感器数据，通过分析可能表明堵塞的流量变化来检测管道中的堵塞。</font></td>
      <td class="table-trnobg"><font size={"1"}>使用户外智能传感器 - A1101 检测阳台排水管中树叶、花朵和其他碎片的积累并提醒用户。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/ivan-arakistain/web-browser-operated-robot-for-gas-leak-detection-4cbe1b" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.edgeimpulse.com/experts/prototype-and-concept-projects/clog-detection-with-ai" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/vitaminCC/detect-the-drain-blockage-with-tiny-ml-lora-6d8957" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

---

### 医疗保健

TinyML 可以应用于健康监测，帮助医疗行业实现更高效、更准确的健康监测。

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">基于 Edge Impulse 的智能听诊器</th>
      <th class="table-trnobg">潮热的非侵入性解决方案</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1284920/_lKAIVXYzeU.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1119627/_vk6o5mjK8D.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>一款数字听诊器，使用边缘端的 tinyML 进行听诊并检测呼吸系统异常。</font></td>
   <td class="table-trnobg"><font size={"1"}>在这个项目中，我构建了一个可以用来检测潮热并触发某些动作来缓解患者症状的设备，在这种情况下是使用红外发射器打开空调制冷系统。作为输入，它采用多维红外热传感器数据。其输出将是一个简单的分类，通知我们是否识别到人员以及最近是否发生了温度的突然变化。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/phatta/smart-stethoscope-powered-by-edge-impulse-a09826" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/naveenbskumar/no-pause-f1bcbf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### 交通运输

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">基于 TinyML 的微控制器语音激活机器人车</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/autocar.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>使用内置麦克风进行语音识别，Wio Terminal 将能够通过 TinyML 识别前进、停止和背景噪音。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/vincekok/voice-activated-robo-car-on-microcontroller-with-tinyml-39a8fb" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### 畜牧业

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
      <th class="table-trnobg">野生动物保护区监测器</th>
      <th class="table-trnobg">企鹅计数和监测</th>
      <th class="table-trnobg">守门员 - 基于物联网的大象检测系统</th>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1494879/_vVl6arJ5L8.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:700, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1501504/image_YwTN2w1Ca6.png?auto=compress%2Cformat&w=740&h=555&fit=max" style={{width:280, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1500778/inshot_20220925_2048546541_MCWMtzTNBg.jpg?auto=compress%2Cformat&w=740&h=555&fit=max" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>一个野生动物保护区环境和动物监测器，用于维护保护区的可持续性。</font></td>
      <td class="table-trnobg"><font size={"1"}>构建 AI 物体识别摄像头的概念验证，用于检测和计数小蓝企鹅上岸和出海的情况。</font></td>
      <td class="table-trnobg"><font size={"1"}>将指导您构建基于 Grove AI 视觉模块和 Wio Terminal 的物联网大象检测器。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/hendra/wildlife-sanctuary-monitor-4162ec" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mediapod/penguin-counting-and-monitoring-2bdc1c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/482632/gate-keeper-an-iot-based-elephant-detection-system-ae726c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Microsoft Reactor

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
      <th class="table-trnobg">Microsoft Reactor 第1部分</th>
      <th class="table-trnobg">Microsoft Reactor 第2部分</th>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><iframe width="450" height="240" src="https://www.youtube.com/embed/ZsQ0-jXdnRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
   <td class="table-trnobg"><iframe width="450" height="240" src="https://www.youtube.com/embed/-1EP3iqYYdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
  </tr>
  <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
   <td class="table-trnobg" colspan="2"><font size={"1"}>AI不再局限于云端。过去几年，AI已经来到了小型设备上，这要归功于TinyML——可以在微控制器上运行的机器学习模型，而不是依赖于配备GPU的强大计算机。你身边可能已经有使用这种技术的设备，从语音控制的智能音箱到健身追踪器。<br />在这个2部分的节目中，Jim亲自动手体验TinyML，使用来自矽递工作室的小型微控制器——Seeed XIAO BLE，构建一个能够区分划船和跑步的健身追踪器。训练和部署这些模型非常复杂，所以Jim寻求Edge Impulse的帮助，这是一个用于捕获训练数据和构建TinyML模型的在线工具。<br />一旦Jim有了他的模型，他将使用VS Code和PlatformIO将其部署到设备上，PlatformIO是VS Code的一个扩展，用于微控制器开发。从那里，他将处理构建低功耗健身追踪器的复杂性之一——连接性。许多健身追踪器使用蓝牙与手机应用同步，所以Jim将采用这种方式，通过移动应用将健身数据同步到Azure IoT Central。</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=ZsQ0-jXdnRY" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=-1EP3iqYYdU" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## 向我们贡献您的TinyML项目

通过提交您的项目或探索，加入我们共同构建TinyML公共资源池！通过分享您的工作，您可以为社区对TinyML领域挑战和机遇的理解做出贡献。无论您是在从事物体检测、语音识别还是任何其他TinyML应用，您的见解和经验都可以帮助他人学习和创新！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/sharecase.jpg" style={{width:1000, height:'auto'}}/></div>

<!-- <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/tinyml-workshops-for-fab-23-how-to-add-ai-to-almost-anything/projects" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Share Your Project</font></span></strong></a></div> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.google.com/forms/d/1k4aCFeehVkTLucVVHIzrJAJL_prbZqJ2h5YaRmvbdQQ/edit" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>分享您的项目</font></span></strong></a></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
