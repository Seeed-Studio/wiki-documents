---
description: Getting started with Seeed Studio 24GHz mmWave for XIAO
title: 24GHz mmWave for XIAO
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmwave_for_xiao
last_update:
  date: 03/21/2024
  author: AnXiaodie
---

# Seeed Studio 24GHz mmWave for XIAO

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:300, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />


## 介绍

24GHz毫米波传感器是Seeed Studio XIAO系列的扩展板，主要用于人体静态存在检测。它是一款集成了天线的高灵敏度毫米波雷达传感器，基于调频连续波（FMCW）原理。结合雷达信号处理和精准的人体感应算法，它能够识别处于运动状态和静止状态的人体。

### 特点
- **基于FMCW原理**：高灵敏度，对环境干扰免疫。
- **全面的人体检测**：该传感器不仅具有高灵敏度地检测移动人体，还能对静止个体、微小动作以及坐着或躺着的个体展现出敏感性。
- **多级智能参数调整**：可通过蓝牙或串口进行调整，以灵活应对不同的环境条件和场景变化。此外，它还支持通过应用程序直接进行参数配置，无需串口连接。
- **大检测角度和长感应距离**：视野可达60度，传感器可以从大角度检测移动物体。此外，它还能探测到距离达5米远的物体。
- **出色的外壳穿透能力和审美增强**：具有良好的外壳穿透性，可以隐藏在产品外壳内部工作，无需在表面打孔，从而保持美观。

### 应用领域
- 人体感应灯光控制
- 生命安全防护
- 智能家电
- 智能安防

### 规格

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
        <td align="center">平均工作电流</td>
        <td align="center">>200mA</td>
    </tr>
    <tr>
        <td align="center">调制方式 </td>
        <td align="center">79mA</td>
    </tr>
    <tr>
        <td align="center">接口</td>
        <td align="center">FMCW</td>
    </tr>
    <tr>
        <td align="center">Interface</td>
        <td align="center">GPIO (IO 电平 3.3V), UART</td>
    </tr>
    <tr>
        <td align="center">目标应用 </td>
        <td align="center">人体存在传感器 </td>
    </tr>
    <tr>
        <td align="center"> 检测距离</td>
        <td align="center">0.75m ~ 6m (可调)</td>
    </tr>
    <tr>
        <td align="center"> 检测角度</td>
        <td align="center">±60°</td>
    </tr>
    <tr>
        <td align="center">距离分辨率</td>
        <td align="center">0.75m</td>
    </tr>
    <tr>
        <td align="center">扫描带宽</td>
        <td align="center">250MHz</td>
    </tr>
    <tr>
        <td align="center">环境温度</td>
        <td align="center">-40℃ ~ 85℃</td>
    </tr>
    <tr>
        <td align="center">尺寸</td>
        <td align="center">17.5mm x 21mm</td>
    </tr>
  </table>
</div>

## 硬件概述

这款毫米波传感器与全系列XIAO兼容，因此引脚定义遵循XIAO的引脚定义。然而，考虑到串行端口的广泛应用，我们为毫米波传感器设计了一个软串行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/2.png" style={{width:800, height:'auto'}}/></div>

该传感器主要依赖于软串行端口（D2 - TX，D3 - RX）和3.3V电源供电。除此之外，其他引脚均不会使用。

## 入门指南

该传感器模块既支持直接软件查看（通过蓝牙），也支持二次开发（使用XIAO和UART）。如果您希望尽快查看传感器数值，可以参照**入门指南**中的步骤，使用我们提供的软件。

## 硬件连接

该传感器专为与XIAO兼容而设计，因此一般来说，如果您想要使用这款传感器，您需要准备一个XIAO并为传感器安装一排母针脚。在与XIAO连接时，请特别注意传感器的安装方向，请勿反向插入，否则可能会烧毁传感器或XIAO。

:::警告
正确的方向是确保传感器的天线朝外。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

- 确认连接方向正确后，您可以将USB-C型电缆连接到电脑或电源，传感器将开始工作。

  ### 毫米波传感器软件

  可以使用HLKRadarTool软件直接观察雷达的传感器数值。该软件目前支持IOS、Android和Windows系统。

- [从Google Play下载HLKRadarTool](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [从App Store下载HLKRadarTool](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>


- [下载适用于Windows的HLKRadarTool](https://files.seeedstudio.com/wiki/mmwave-for-xiao/HLKRadarTool.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/4.png" style={{width:250, height:'auto'}}/></div>

接下来，我们将描述如何将这些软件与传感器结合使用。

### 移动端软件操作指南

如果您希望在手机上查看传感器的数值，那么您需要使用传感器的蓝牙与手机进行通信，这意味着您还需要一部支持蓝牙的手机。请提前下载上述软件。

**步骤一**。 打开应用程序，应用程序会搜索附近的雷达设备。设备的广播名称为**HLK-LD2410_xxxx**（xxxx为mac地址的最后四位）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

:::提示
APP的使用距离不应超过蓝牙信号范围（4米以内）。
:::

**步骤二**。 模块成功连接后，您可以查看雷达信息，或调试并保存参数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**步骤三**。 在软件右上角的“更多”选项中，您可以进入设置菜单，为传感器设置自定义参数和功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/8.png" style={{width:400, height:'auto'}}/></div>

:::提示
在修改这些参数和设置之前，我们建议您仔细阅读[用户协议手册](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)，并参考手册中的说明进行修改。关于软件显示值的含义和设置参数的更多详细信息，请阅读[用户协议手册](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)。
:::

### Windows软件操作指南

为方便用户快速有效地测试和配置模块，我们提供了一个PC配置工具。用户可以使用该工具软件连接模块的串口，读取和配置模块的参数，接收模块报告的检测结果数据，并进行实时可视化显示，从而大大方便用户的使用。

**步骤一**。 使用USB转串口工具正确连接模块串口。

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th>USB to serial port tool</th>
            <th>mmWave Sensor</th>
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
**步骤二**。 在主机工具中选择对应的串口号，将波特率设置为**256000**，选择**工程模式**，然后点击**连接**设备。

:::提示
如果您在将传感器连接到电脑之前打开了软件，您可能需要点击“刷新”来刷新端口号。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/10.png" style={{width:800, height:'auto'}}/></div>

**步骤三** 连接成功后，点击“开始”按钮，右侧的图形界面将显示测试结果和数据。

:::注意
点击“开始”后无法读取和配置参数，必须在停止后才能进行配置。

:::

小球是目标状态输出指示：红色表示有移动目标；紫色表示有静止目标；绿色表示无人。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/11.png" style={{width:800, height:'auto'}}/></div>

## 传感器异常恢复

如果您在使用传感器的过程中遇到了雷达异常，如数据不报告、停机等问题，您可以尝试按照此处说明恢复传感器的固件。

恢复固件的方法是使用手机带有蓝牙功能的APP，在软件主界面的右上角选择**更多**，然后选择**初始化**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/14.png" style={{width:500, height:'auto'}}/></div>



## OTA Upgrade

## OTA升级

当设备的固件有更新时，固件版本处会显示“可升级”字样，长按版本号进入升级界面；仅**V1.07.22091516**或更高版本支持升级。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/12.png" style={{width:800, height:'auto'}}/></div>

整体升级过程需要1~3分钟。升级必须从模块端进行，否则如果蓝牙信号不佳，升级将失败。

在升级完成之前，请勿关闭或重启模块，也不要强行退出APP，否则升级会失败。如果升级失败，传感器程序将被禁用，无法进行传感器检测。如果设备升级失败，请重启设备并重新连接APP，设备列表中会出现“等待升级”的提示：

（请确保在升级过程中保持蓝牙信号稳定，并遵循上述提示操作，以避免升级失败导致的问题。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/13.png" style={{width:800, height:'auto'}}/></div>

点击待升级的设备进行重新升级，只有升级成功后才能恢复雷达功能。

## 资源

- **[PDF]** [适用于XIAO的24GHz毫米波数据手册-V1.00](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **[PDF]** [适用于XIAO的24GHz毫米波用户协议手册](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **[PDF]** [适用于XIAO的24GHz毫米波电路图（SCH通常指电路图）](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供全方位的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>







