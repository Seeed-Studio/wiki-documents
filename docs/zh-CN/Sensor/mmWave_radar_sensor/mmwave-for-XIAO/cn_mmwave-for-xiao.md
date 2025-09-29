---
description: Seeed Studio 24GHz mmWave for XIAO 入门指南
title: 24GHz mmWave for XIAO
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmwave_for_xiao
last_update:
  date: 11/09/2023
  author: Citric
---

# Seeed Studio 24GHz mmWave for XIAO

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:300, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

## 介绍

24GHz mmWave Sensor for XIAO - Human Static Presence 是 Seeed Studio XIAO 系列的扩展板。它是一个集成天线的高灵敏度毫米波雷达传感器，基于 FMCW 原理。结合雷达信号处理和精确的人体感应算法，它可以识别运动和静止状态下的人体。

### 特性

- **基于 FMCW 原理**：高灵敏度且不受环境干扰影响
- **全面的人体检测**：传感器不仅能高灵敏度地检测运动中的人体，还对静止的个体、微动作以及坐着或躺着的个体表现出灵敏度。
- **多级智能参数调节**：使用蓝牙或串口进行调节，提供灵活性以满足不同的环境条件和场景变化。此外，它支持通过应用程序直接配置参数，无需串口连接。
- **宽检测角度和长感应距离**：视野范围高达 60 度，传感器可以从宽角度检测运动。此外，它可以检测到 5 米远的物体。
- **优秀的外壳穿透性和美观性增强**：具有良好的外壳穿透性，允许它在产品外壳内部隐蔽工作，无需表面开孔。

### 应用

- 人体感应灯光控制
- 生命安全保护
- 智能家电
- 智能安防

### 规格参数

<div class="table-center">
  <table align="center">
    <tr>
        <th>参数</th>
        <th>数值</th>
    </tr>
    <tr>
        <td align="center">工作频率</td>
        <td align="center">24GHz ~ 24.25GHz</td>
    </tr>
    <tr>
        <td align="center">工作电压</td>
        <td align="center">DC 5V</td>
    </tr>
    <tr>
        <td align="center">电源容量</td>
        <td align="center">>200mA</td>
    </tr>
    <tr>
        <td align="center">平均工作电流</td>
        <td align="center">79mA</td>
    </tr>
    <tr>
        <td align="center">调制方式</td>
        <td align="center">FMCW</td>
    </tr>
    <tr>
        <td align="center">接口</td>
        <td align="center">GPIO (IO 电平 3.3V), UART</td>
    </tr>
    <tr>
        <td align="center">目标应用</td>
        <td align="center">人体存在传感器</td>
    </tr>
    <tr>
        <td align="center">检测距离</td>
        <td align="center">0.75m ~ 6m (可调)</td>
    </tr>
    <tr>
        <td align="center">检测角度</td>
        <td align="center">±60°</td>
    </tr>
    <tr>
        <td align="center">距离分辨率</td>
        <td align="center">0.75m</td>
    </tr>
    <tr>
        <td align="center">扫频带宽</td>
        <td align="center">250MHz</td>
    </tr>
    <tr>
        <td align="center">环境温度</td>
        <td align="center">-40℃ ~ 85℃</td>
    </tr>
    <tr>
        <td align="center">尺寸</td>
        <td align="center">18mm x 22mm</td>
    </tr>
  </table>
</div>

## 硬件概述

这款毫米波传感器兼容全系列的 XIAO，因此引脚定义遵循 XIAO 的引脚定义。但是，考虑到串口的广泛使用，我们为毫米波传感器设计了软串口连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/2.png" style={{width:800, height:'auto'}}/></div>

该传感器主要依赖软串口（D2 - TX，D3 - RX）和 3.3V 电源。除此之外，不会使用其他任何引脚。

## 入门指南

该传感器模块支持直接软件查看（通过蓝牙）和二次开发（使用 XIAO 和 UART）。如果您想尽快观察传感器数值，可以参考**入门指南**步骤来使用我们提供的软件。

## 硬件连接

该传感器专为 XIAO 兼容性而设计，因此一般来说，如果您想使用此传感器，需要准备一个 XIAO 并为传感器安装母排针。连接到 XIAO 时，请特别注意传感器的安装方向，请不要插反，否则很可能烧毁传感器或 XIAO。

:::caution
正确的方向是传感器的天线应朝外。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

确认连接方向正确后，您可以将 USB-C 类型电缆连接到计算机或电源，传感器将开始工作。

### 毫米波传感器软件

HLKRadarTool 软件可用于直接观察雷达的传感器数值。该软件目前支持 iOS、Android 和 Windows 系统。

- [从 Google Play 下载 HLKRadarTool](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool)。

- [从 App Store 下载 HLKRadarTool](https://apps.apple.com/us/app/hlkradartool/id1638651152)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

- [下载 Windows 版 HLKRadarTool](https://files.seeedstudio.com/wiki/mmwave-for-xiao/HLKRadarTool.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/4.png" style={{width:250, height:'auto'}}/></div>

下面，我们描述如何结合传感器使用这些软件。

### 移动软件操作指南

如果您希望在手机上观察传感器的数值，那么您需要使用传感器的蓝牙与手机通信，这意味着您还需要一部支持蓝牙的手机。并提前下载上述软件。

**步骤 1.** 打开应用程序，应用程序搜索附近的雷达设备。设备的广播名称是 **HLK-LD2410_xxxx**（xxxx 是 mac 地址的后四位数字）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

:::tip
APP 的使用距离不应超过蓝牙信号范围（4 米内）。
:::

**步骤 2.** 模块成功连接后，您可以查看雷达信息，或调试和保存参数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**步骤 3.** 在软件右上角的更多选项中，您可以访问设置菜单来为传感器设置自定义参数和功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/8.png" style={{width:400, height:'auto'}}/></div>

:::tip
在修改这些参数和设置之前，我们建议您仔细阅读[用户协议手册](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)并参考手册的说明来修改这些参数。有关软件显示数值的含义和设置参数的更多详细信息，请阅读[用户协议手册](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)。
:::

### Windows 软件操作指南

为了方便用户快速高效地测试和配置模块，提供了 PC 配置工具。用户可以使用此工具软件连接模块串口，读取和配置模块参数，接收模块报告的检测结果数据，并进行实时可视化显示，极大地方便了用户的使用。

**步骤 1.** 使用 USB 转串口工具正确连接模块串口。

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
   <th>USB 转串口工具</th>
            <th>毫米波传感器</th>
  </tr>
  <tr>
   <td rowspan="5"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/9.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td align="center">3V3</td>
   <td align="center">3V3</td>
  </tr>
  <tr>
   <td align="center">GND</td>
   <td align="center">GND</td>
  </tr>
  <tr>
   <td align="center">RX</td>
   <td align="center">TX</td>
  </tr>
  <tr>
   <td align="center">TX</td>
   <td align="center">RX</td>
  </tr>
 </table>
</div>

**步骤 2.** 在上位机工具中选择对应的串口号，将波特率设置为 **256000**，选择 **工程模式**，然后点击 **连接** 设备。

:::tip
如果您在将传感器连接到计算机之前就打开了软件，您可能需要点击刷新来刷新端口号。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/10.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 连接成功后，点击开始按钮，右侧的图形界面将显示测试结果和数据。连接成功后，点击开始按钮，右侧的图形界面将显示测试结果和数据。

:::note
点击开始后无法读取和配置参数，只有在停止后才能进行配置。
:::

球体是目标状态输出指示：红色表示有运动目标；紫色表示有静止目标；绿色表示无人。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/11.png" style={{width:800, height:'auto'}}/></div>

## 传感器异常恢复

如果您在使用传感器的过程中遇到雷达异常，如数据不上报、停机等。您可以尝试根据此处恢复传感器固件。

恢复固件的方法是使用具有蓝牙功能的手机APP，在软件主界面的右上角，选择 **更多**，然后选择 **初始化**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/14.png" style={{width:500, height:'auto'}}/></div>

## OTA升级

当设备固件已更新时，固件版本上会出现 **可升级** 字样，长按版本号进入升级界面；只有 **V1.07.22091516** 或更新版本支持升级。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/12.png" style={{width:800, height:'auto'}}/></div>

整个升级时间需要1~3分钟。升级必须从模块执行，否则如果蓝牙信号差，升级将失败。

在升级完成前不要断电或重启模块，也不要强制退出APP，否则升级将失败。如果升级失败，传感器程序将被禁用，无法进行传感器检测。如果设备升级失败，请重启设备并重新连接APP，设备列表上会出现"等待升级"提示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/13.png" style={{width:800, height:'auto'}}/></div>

点击要升级的设备重新升级，只有升级成功后才能恢复雷达功能。

## 资源

- **[PDF]** [24GHz mmWave for XIAO 数据手册-V1.00](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **[PDF]** [24GHz mmWave for XIAO 用户协议手册](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **[PDF]** [24GHz mmWave for XIAO 原理图](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

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
