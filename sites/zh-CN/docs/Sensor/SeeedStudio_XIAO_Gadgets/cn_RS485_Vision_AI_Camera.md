---
description: 入门使用 RS485 Vision AI Camera
title: RS485 Vision AI Camera
keywords:
  - RS485 Vision
  - Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /getting_started_with_rs485_vision_ai_cam
sku: 110992084
sidebar_position: 4
last_update:
  date: 12/26/2024
  author: Jason
createdAt: '2025-01-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/getting_started_with_rs485_vision_ai_cam/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## 支持的软件概览

- [**使用 SenseCraft AI 的零代码快速上手**](#jump1)
  - [什么是 SenseCraft AI？](#jump2)
  - [SenseCraft AI Model Assistant 入门](#jump3)
- [**在 Arduino 上编程并连接 Seeed Studio XIAO 开发板**](#jump4)
  - [Arduino 库介绍](#jump5)
  - [Seeed Studio XIAO 入门](#jump6)

## 硬件概览

### 介绍

Seeed Studio RS485 Vision AI Camera 是一款智能设备，将 ESP32-C3 MCU（Seeed Studio XIAO）与 Himax WiseEye2 HX6538 处理器相结合，后者采用双核 Arm Cortex-M55 并集成 Ethos-U55 神经处理器。该先进相机在 480×480 分辨率和 10 FPS 下提供高性能 AI 识别，同时通过灵活的推理结果传输选项保持低功耗。凭借标准 Modbus RS485 接口，它可以无缝集成到工业系统中，并通过 SenseCAP DTU 或其他标准 RS485 DTU 设备支持 LoRaWAN 和 4G 连接。IP66 级外壳保护使其能够承受恶劣环境，非常适合室内和室外应用。该相机在多种计算机视觉任务中表现出色，包括人数统计、目标检测和分类。用户可以从 300 多个预训练模型中部署模型，或在零代码 SenseCraft AI 平台上训练自定义模型，同时也支持 TensorFlow 和 PyTorch 框架的 AI 模型。通过仅传输推理结果的设计来解决隐私问题，并在需要时可选通过 Wi-Fi 传输关键帧。

### 设备准备

<div class="table-center">
<table align="center">
    <tr>
        <th>RS485 Vision AI Camera </th>
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

- 强大的视觉 AI 处理能力：基于 WiseEye2 HX6538 处理器（双核 Arm Cortex-M55，集成 Arm Ethos-U55 神经网络单元），本地推理最高可达 480*480 10FPS。

- 边缘计算保障高数据安全：本地图像推理，仅发送最终结果，适用于对数据传输量有限制且对数据隐私要求较高的应用。  

- 多功能 AI 模型：内置 3 种模型，支持人体检测、人数统计和表计读数，同时也可以在 SenseCraft AI 上轻松部署公共 AI 模型或训练自定义 AI 模型，只需几次点击。支持 TensorFlow 和 PyTorch 框架。

- 多种传输协议：支持通过标准 RS485 协议传输推理结果；连接 SenseCAP S2100/ 4G Sensor Hub DTU 可通过 LoRaWAN 或 4G 获取结果。同时支持通过 Wi-Fi 传输关键帧。

- 防尘防水：IP66 级防护确保在室内和室外环境中长期稳定部署。

- 通过 SenseCraft App 进行模型管理：只需轻点几下即可配置并在预装 AI 模型之间切换。可轻松调整模型置信度阈值，以针对您的特定应用优化性能。

### 规格参数

<table align="center">
 <tr>
     <th>产品型号</th>
        <th>S-VA-01B</th>
 </tr>
 <tr>
     <th>电流输入</th>
        <th>1A</th>
 </tr>
 <tr>
     <th>电压输入</th>
        <th>5V/12V</th>
 </tr>
 <tr>
     <th>微控制器</th>
        <td align="center">视觉 AI：<strong>Himax-6538</strong> <br></br> 网络：<strong>XIAO ESP32C3</strong> <br></br></td>
 </tr>
    <tr>
        <th>摄像头</th>
        <td align="center">
            镜头尺寸：<strong>“1/4"</strong><br />
            焦距：<strong>3.4 mm（可调）</strong><br />
            分辨率：<strong>2592 × 1944 像素</strong><br />
            像素尺寸：<strong>1.4 µm × 1.4 µm</strong><br />
            最大帧率：<strong>1080p @ 30 fps，720p @ 60 fps</strong><br />
            视场角（FOV）：<strong>62°</strong>
        </td>
    </tr>
    <tr>
     <th>模型执行与推理</th>
        <th>480 * 480  >10 fps</th>
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            芯片：<strong>TP8485E，半双工收发器
            RS485 Modbus-RTU 协议</strong><br />
            端子连接：<strong>端子连接：3 针端子用于信号线，3 针端子用于电源</strong><br />
            传输距离：<strong>传输距离：最长可达 1200 米（视环境而定）</strong><br />
            传输速率：<strong>传输速率：250k bps（最大）</strong>
        </td>
    </tr>
    <tr>
        <th>兼容性</th>
        <td align="center">
            Modbus RS485 DTU<br />
            SenseCAP Sensor Hub 4G DTU<br />
            SenseCAP S2100 LoRaWAN DTU
        </td>
    </tr>
 <tr>
     <th>存储</th>
        <th>8GB MicroSD 卡（Class 10）</th>
 </tr>
 <tr>
     <th>防护等级</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>工作温度</th>
        <th>0 - 70 °C</th>
 </tr>
 <tr>
     <th>工作湿度</th>
        <th>0 - 100 %RH（无冷凝）</th>
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
        <th>2 米</th>
 </tr>
</table>

### 引脚示意图

根据下图，A1102 不同颜色的线对应不同的引脚功能，具体引脚功能如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

找到与数据记录仪对应的功能进行连接

:::tip
如果接入 5v，就不需要接入 12v，12v 和 5v 选择一种电压供电，记住不要同时使用！
:::

## 软件概览

### 出厂 AI 模型的部署

#### 软件流程

**步骤 1：** 登录应用后，点击下方框中的 “User”，然后找到蓝牙连接设备的设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**步骤 2：** 勾选设备 “RS485 Vision AI Camera”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**步骤 3：** RS485 Vision AI Camera 上电后进行扫描

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**步骤 4：** 点击 “AI Model” 查看出厂设置的 AI 模型，并部署你想要的类型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**步骤 5：** 如果需要绑定 “DataLogger”，请输入对应的 SN 号；如果你没有设置所需的 “confidence”，点击 “Preview”，即可进入图像传感器采集画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**步骤 6：** 显示图像

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

恭喜你已在 SenseCraft APP 上成功使用 RS485 Vision AI V2 设备！🎉

### 使用 SenseCraft AI 的自定义 AI 模型

如果你想自定义模型，我们将引导你如何使用 SenseCraft AI 在 RS485 Vision AI Camera 设备上部署你喜欢的机器学习模型，以实现个性化功能和应用。

#### 硬件流程

按照以下说明，将 Type-C 接口连接到 Vision AI V2 和你的电脑

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### 软件流程

**步骤 1.** 打开 [SenseCraft AI](https://sensecraft.seeed.cc/ai)，并导航到 **`Models`** > **`Model Library`**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 在 Supported Devices 部分找到 **“SenseCAP A1102”**。在这里你需要找到与适配模型对应的设备型号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 这里我们选择第 31 页的 **“Face Detection”** 模型作为示例演示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**步骤 4.** 进入模型后，找到 **“Deploy Model”** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**步骤 5.** 找到 Connect Device 以及对应的 **“SenseCAP A1102”** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**步骤 6.** 进入后，插入你的 A1102 设备，并找到对应的串口进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**步骤 7.** 最后我们可以看到模型已经烧录完成，并显示相应的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confidence:`
    - 置信度是指模型对其预测结果所赋予的确定性或概率水平。

`IoU:`
    - IoU 用于评估预测边界框与真实边界框相比的准确性。

至此，我们已经成功在 RS485 Vision AI Camera 设备上部署了所需的模型，接下来我们继续进行下一步操作！

### XIAO 读取数据

要通过 XIAO 从烧录的模型中读取数据，请前往此 [wiki](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/)，其中详细说明了如何通过 XIAO 读取 Vision AI V2 数据。

### RS485 传输数据

#### 连接示意图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip
如果接入 5v，就不需要接入 12v，12v 和 5v 选择一种电压供电，记住不要同时使用！
:::

当你按照上图成功连接后，点击这个 [wiki](https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_rs485/) 链接，可以获得关于如何使用代码驱动的更详细说明。

## 资源

- 📄 **[PDF]** [Seeed Studio RS485 Vision AI Camera 原理图](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
