---
description: SenseCAP Vision AI V2 入门指南
title: SenseCAP Vision AI V2 入门指南
keywords:
  - SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /sensecap_a1102
sidebar_position: 1
last_update:
  date: 3/12/2025
  author: Zeke
createdAt: '2025-01-03'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/cn/sensecap_a1102/
---

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

在本地运行 TinyML AI 模型，仅通过 LoRaWAN®（863-928MHz）传输推理结果，从而提升隐私保护并提高能效。其工作分辨率为 480×480、帧率为 10 FPS，内置三种预部署模型，用于人体检测、人数统计和仪表读数。同时，通过 [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home) 平台，可零代码访问 300+ 预训练模型或进行自定义模型训练。它还支持从 [TensorFlow Lite](https://www.tensorflow.org/) 和 [PyTorch](https://pytorch.org/) 框架部署模型。用户可以通过 [SenseCraft App](https://sensecap-mate-download.seeed.cn/) 配置设备和频段，并将这款具备 IP66 防护等级的传感器部署在严苛的室内或室外环境中。其内置电池，非常适合各种需要远距离通信的 AI 应用场景。

## 特性

- 高级边缘 AI 摄像机：配备强大的基于 MCU 的视觉摄像处理器，可在 480×480 分辨率、10 FPS 下进行本地推理。通过仅传输推理结果，确保数据隐私并最大限度减少网络带宽占用。

- 零代码 AI 模型部署与训练：预置三种本地 AI 模型（人体检测、人数统计和仪表读数），开箱即用实现视觉应用。原生集成基于 Web 的 SenseCraft AI 平台，提供 300+ 预训练模型可即时部署，并支持分类和检测模型的简单 3 步训练流程，从而在无需编程经验的情况下实现快速模型训练与部署。此外，设备还支持从 TensorFlow 和 PyTorch 框架转换而来的自定义 AI 模型在边缘侧部署。

- LoRaWAN® 连接：支持全球频段（863-928 MHz），在理想条件下传输距离可达 10 km，实现可靠的远距离通信。

- 两种供电方式与电池寿命：内置 19Ah SOCl2 D 型电池，同时也可通过可选接线盒接入外部 DC 电源。

- IP66 级环境耐久性：具备 IP66 级防护，可防尘并抵御强力喷水。在 0°C 至 70°C 的温度范围内可靠运行，适用于多种室内外部署场景。

- SenseCraft Cloud 集成：配套 SenseCraft Mate 移动应用和 Web 门户，便于设备配置、设备管理和快速数据可视化。支持开放 API，并提供 3 个月免费试用访问，兼容第三方物联网平台。

## 规格参数

<table align="center">
 <tr>
     <th>产品型号</th>
        <th>SenseCAP A1102</th>
 </tr>
 <tr>
     <th>微控制器</th>
        <td align="center">
            <strong>Vision AI：</strong>Himax-6538 <br></br>
            <strong>LoRaWAN 网络：</strong>Wio-E5 (STM32WLE5JC)<br></br>
            <strong>蓝牙：</strong> XIAO ESP32C3<br></br>
        </td>
 </tr>
    <tr>
        <th>摄像头</th>
        <td align="center">
            <strong>模组：</strong>OV5647<br />
            <strong>镜头尺寸：</strong>1/4"<br />
            <strong>焦距：</strong>3.4 mm（可调）<br />
            <strong>分辨率：</strong> 2592 × 1944 像素<br />
            <strong>像素尺寸：</strong> 1.4 µm × 1.4 µm<br />
            <strong>最大帧率：</strong> 1080p @ 30 fps，720p @ 60 fps<br />
            <strong>视场角 (FOV)：</strong>62°
        </td>
    </tr>
    <tr>
     <th>模型执行与推理</th>
        <th>480 * 480  >10 fps</th> 
    </tr>
    <tr>
        <th>LoRaWAN® 传输</th>
        <td align="center">
        <strong>协议：</strong> LoRaWAN v1.0.3 Class A<br />
        <strong>LoRaWAN® 频段：</strong> IN865/EU868/US915/AU915/ AS923<br />
        <strong>通信距离：</strong> 2 至 10km（取决于环境）<br />
        <strong>最大发射功率：</strong> 19dBm<br />
        </td>
    </tr>
    <tr>
        <th>电源</th>
        <td align="center">
        内置电池或 DC 12V/1A（需外接接线盒布线）
        </td>
    </tr>
 <tr>
     <th>功耗</th>
        <th>102mA</th>
 </tr>
 <tr>
       <th>电池</th>
        <td align="center">
        <strong>容量：</strong> 19Ah（不可充电）<br />
        <strong>类型：</strong> 标准 D 型 SOCl2 电池<br />
        </td>
 </tr>
 <tr>
     <th>本地存储容量</th>
        <th>8GB MicroSD 卡（Class 10），可存储多达 20,000 张带时间戳的图像，并支持导出</th>
 </tr>
 <tr>
     <th>防护等级</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>工作温度</th>
        <th>0-70 °C</th>
 </tr>
 <tr>
     <th>工作湿度</th>
        <th>0-100% RH（无冷凝）</th>
 </tr>
 <tr>
     <th>线缆长度</th>
        <th>2 米</th>
 </tr>
 <tr>
     <th>设备重量</th>
        <th>719g</th>
 </tr>
 <tr>
     <th>设备尺寸</th>
        <td align="center">
        <strong>摄像头：</strong>180mm*75mm*70mm<br />
        <strong>DTU：</strong> 144.5mm*63mm*57mm<br />
        </td>
 </tr>
</table>

## 供电选项

- 选项 1：SenseCAP A1102 使用内置 19Ah D 型 Li-SOCl2 电池，以循环模式运行。该电池可在市面上轻松购买并更换，使其无需外部供电即可实现独立的户外部署。

- 选项 2：SenseCAP A1102 支持通过 12V DC 电源连接实现持续运行。需要额外配套的接线盒以便于安装和组装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## 硬件概览

- 板载实物图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>

## 连接到 LoraWAN®

LoRaWAN®（Long Range Wide Area Network，长距离广域网）是一种为物联网（Internet of Things）设备与网关之间的低功耗、长距离通信而设计的无线通信协议。它使用工业、科学和医疗（ISM）频段中的免授权无线频谱，通常在欧洲为 868 MHz、在美国为 915 MHz。LoRaWAN® 为远距离连接物联网设备提供了一种低成本、高能效的解决方案。该技术支持设备与网关之间的双向通信，并提供多种数据速率，以适配不同类型的应用。

## 如何选择网关和 LoraWAN®

在使用传感器时，需要 LoRaWAN® 网络覆盖，有以下两种选择。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## 如何使用传感器

除了可以直接连接电脑查看实时检测数据外，你还可以通过 LoraWAN® 传输这些数据，并最终将其上传到 [SenseCAP 云平台](https://sensecap.seeed.cc/)或第三方云平台。在 SenseCAP 云平台上，你可以周期性地查看数据，并通过手机或电脑以图形方式展示。SenseCAP 云平台与 SenseCAP Mate App 使用同一账号体系。

由于我们在此主要关注模型训练流程，因此不会详细展开云平台数据展示的内容。但如果你感兴趣，随时可以访问 SenseCAP 云平台，尝试添加设备并查看数据。这是更好地了解平台能力的绝佳方式！

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## 常见问题

**图像采集时，理想的摄像头设置是什么？**

- 对于 500 万像素摄像头，建议在 1m 至 5m 的范围内采集图像，以获得最佳图像质量。采集过程中，请确保摄像头正对拍摄目标，光线充足（无眩光或过曝），并避免明显的运动或振动。

**SenseCAP Vision AI 摄像头在多远的距离内可以检测物体并获得良好效果？**

- 根据我们使用人体检测模型的测试结果，在 1m 至 5m 的范围内，摄像头可以达到 70% 的置信度。

**是否可以更换摄像头，或定制 SenseCAP Vision AI 传感器？**

- 可以，如果你有大批量需求，请通过 sensecap@seeed.cc 与我们联系。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
