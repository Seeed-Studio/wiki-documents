---
description: 开始使用 RS485 Vision AI 摄像头
title: RS485 Vision AI 摄像头
keywords:
- RS485 Vision
- Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /cn/getting_started_with_rs485_vision_ai_cam
sidebar_position: 4
last_update:
  date: 12/26/2024
  author: Jason
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## 支持的软件概述

- [**使用 SenseCraft AI 无代码入门**](#jump1)
  - [什么是 SenseCraft AI？](#jump2)
  - [SenseCraft AI 模型助手入门](#jump3)
- [**在 Arduino 上编程连接 Seeed Studio XIAO 开发板**](#jump4)
  - [Arduino 库介绍](#jump5)
  - [Seeed Studio XIAO 入门](#jump6)

## 硬件概述

### 介绍

Seeed Studio RS485 Vision AI 摄像头是一款智能设备，结合了 ESP32-C3 MCU（Seeed Studio XIAO）和 Himax WiseEye2 HX6538 处理器，具有双核 Arm Cortex-M55 和集成的 Ethos-U55 神经处理器。这款先进的摄像头在 480×480 分辨率和 10 FPS 下提供高性能 AI 识别，同时通过灵活的推理结果传输选项保持低功耗。凭借其标准的 Modbus RS485 接口，它可以无缝集成到工业系统中，并通过 SenseCAP DTU 或其他标准 RS485 DTU 设备支持 LoRaWAN 和 4G 连接。受 IP66 级外壳保护，它能够承受恶劣的环境条件，使其非常适合室内和室外应用。该摄像头在各种计算机视觉任务中表现出色，包括人数统计、物体检测和分类。用户可以从 300 多个预训练模型中部署模型，或在无代码 SenseCraft AI 平台上训练自定义模型，同时支持 TensorFlow 和 PyTorch 框架的 AI 模型。通过设计仅传输推理结果来解决隐私问题，在需要时可选择 Wi-Fi 关键帧传输。

### 设备准备

<div class="table-center">
<table align="center">
    <tr>
        <th>RS485 Vision AI 摄像头 </th>
    </tr>
    <tr>
    <td><div align="center"><img width ={550} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/shop.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Vision-AI-Camera-p-6346.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### 特性

- 强大的视觉AI处理能力：采用WiseEye2 HX6538处理器，配备双核Arm Cortex-M55和集成Arm Ethos-U55神经网络单元，本地推理可达480*480 10FPS。

- 边缘计算实现高数据安全性：本地图像推理，仅发送最终结果，适用于需要限制数据传输和高数据隐私的应用。

- 多功能AI模型：内置3个模型，包括人体检测、人数统计和仪表读数，同时可轻松部署公共AI模型或在SenseCraft AI上一键训练定制AI模型。支持TensorFlow和PyTorch框架。

- 多传输协议：支持通过标准RS485协议传输推理结果；连接SenseCAP S2100/ 4G传感器集线器DTU，通过LoRaWAN或4G获取结果。同时支持通过Wi-Fi传输关键帧。

- 防尘防水：IP66级防护确保在室内外环境中稳定长期部署。

- 通过SenseCraft应用进行模型管理：只需轻点几下即可配置和切换预装AI模型。轻松调整模型置信度阈值，为您的特定用例优化性能。

### 规格参数

<table align="center">
 <tr>
     <th>产品型号</th>
        <th>S-VA-01B</th>
 </tr>
 <tr>
     <th>输入电流</th>
        <th>1A</th>
 </tr>
 <tr>
     <th>输入电压</th>
        <th>5V/12V</th>
 </tr>
 <tr>
     <th>微控制器</th>
        <td align="center">视觉AI：<strong>Himax-6538</strong> <br></br> 网络：<strong>XIAO ESP32C3</strong> <br></br></td>
 </tr>
    <tr>
        <th>摄像头</th>
        <td align="center">
            镜头尺寸：<strong>"1/4"</strong><br />
            焦距：<strong>3.4 mm（可调节）</strong><br />
            分辨率：<strong>2592 × 1944 像素</strong><br />
            像素尺寸：<strong>1.4 µm × 1.4 µm</strong><br />
            最大帧率：<strong>1080p @ 30 fps，720p @ 60 fps</strong><br />
            视场角：<strong>62°</strong>
        </td>
    </tr>
    <tr>
     <th>模型执行和推理</th>
        <th>480 * 480  >10 fps</th>
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            芯片：<strong>TP8485E，半双工收发器
            RS485 Modbus-RTU协议</strong><br />
            端子连接：<strong>端子连接：信号线3针端子和电源3针端子</strong><br />
            传输距离：<strong>传输距离：最远1200米（因环境而异）</strong><br />
            传输速度：<strong>传输速度：250k bps（最大）</strong>
        </td>
    </tr>
    <tr>
        <th>兼容性</th>
        <td align="center">
            Modbus RS485 DTU<br />
            SenseCAP传感器集线器4G DTU<br />
            SenseCAP S2100 LoRaWAN DTU
        </td>
    </tr>
 <tr>
     <th>存储</th>
        <th>8GB MicroSD卡（Class 10）</th>
 </tr>
 <tr>
     <th>IP等级</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>工作温度</th>
        <th>0 - 70 °C</th>
 </tr>
 <tr>
     <th>工作湿度</th>
        <th>0 - 100 %RH（非冷凝）</th>
 </tr>
 <tr>
     <th>设备尺寸</th>
        <th>180mm*75mm*70mm</th>
 </tr>
 <tr>
     <th>设备重量</th>
        <th>439g</th>
 </tr>
 <tr>
     <th>线缆长度</th>
        <th>2米</th>
 </tr>
</table>

### 引脚图

根据下图，A1102 的不同线缆颜色对应不同的引脚功能。具体引脚功能如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

找到与数据记录器对应的功能进行连接

:::tip
如果接入5v，则不需要接入12v，12v和5v选择其中一种电压供电，记住不要同时使用！
:::

## 软件概述

### 出厂AI模型部署

#### 软件工作流程

**步骤 1：** 登录应用后，点击下方框中的"用户"，然后找到蓝牙连接设备的设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**步骤 2：** 勾选设备"RS485 Vision AI Camera"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**步骤 3：** 给RS485 Vision AI Camera上电后进行扫描

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**步骤 4：** 点击"AI Model"查看出厂设置的AI模型，并部署您想要的类型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**步骤 5：** 如果需要绑定"DataLogger"，请输入相应的SN号码，如果不设置您需要的"置信度"，点击"Preview"，可以进入图像传感器采集图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**步骤 6：** 显示图片

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

恭喜您成功在SenseCraft APP上使用RS485 Vision AI V2设备！🎉

### 使用SenseCraft AI自定义AI模型

如果您想自定义模型，我们将指导您如何使用SenseCraft AI在RS485 Vision AI Camera设备上部署您喜欢的机器学习模型，以实现个性化功能和应用。

#### 硬件工作流程

按照以下说明将Type-C端口连接到Vision AI V2到您的计算机

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### 软件工作流程

**步骤 1.** 首先，点击[SenseCraftAI](https://sensecraft.seeed.cc/ai/#/home)，在SenseCraft AI网站顶部菜单栏中找到**"Pretrained Models"**并点击。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 在支持设备部分找到**"SenseCAP A1102"**。这里您需要找到与适配模型对应的设备型号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 这里我们选择第31页的**"Face Detection"**模型作为示例演示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**步骤 4.** 进入模型后，找到**"Deploy Model"**选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**步骤 5.** 找到Connect Device和相应的选项**"SenseCAP A1102"**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**步骤 6.** 进入后，插入您的A1102设备并找到相应的串口进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**步骤 7.** 最后我们可以看到模型烧录完成并显示相应的结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`置信度：`
    - 置信度是指模型对其预测结果分配的确定性或概率水平。

`IoU：`
    - IoU用于评估预测边界框与真实边界框相比的准确性。

至此，我们已经成功在RS485 Vision AI Camera设备上部署了我们需要的模型。接下来，我们进行下一步操作！

### XIAO读取数据

要通过XIAO读取烧录模型的数据，请访问此[wiki](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/)，其中详细说明了如何通过XIAO读取Vision AI V2数据。

### 传输数据RS485

#### 连接示意图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip
如果接入5v，则不需要接入12v，12v和5v选择其中一种电压供电，记住不要同时使用！
:::

按照上图成功连接后，点击此[wiki](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_rs485/)链接，获取如何使用代码驱动的更详细说明

## 资源

- 📄 **[PDF]** [Seeed Studio RS485 Vision AI Camera 原理图](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

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
