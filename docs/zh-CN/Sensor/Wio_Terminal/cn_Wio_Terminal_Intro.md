---
description: Wio Terminal 指南
title: Wio Terminal 指南
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio_Terminal_Intro
last_update:
  date: 08/6/2024
  author: Frank
---

## 介绍

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:600, height:'auto'}}/></div>

Wio Terminal 是一款多功能开发板，搭载 ATSAMD51 微控制器并配备 2.4" LCD 屏幕。它包含板载 Wi-Fi/蓝牙功能、内置加速度计、麦克风、蜂鸣器、microSD 卡槽以及各种 I/O 接口。Wio Terminal 旨在简化物联网应用的开发，使其成为初学者和经验丰富的开发者的理想工具。

## OSHW（可制造开源硬件）的理念

开源硬件（OSHW）是指设计公开可用的硬件，任何人都可以研究、修改、分发、制造和销售该设计或基于该设计的硬件。[Wio Terminal 体现了 OSHW 理念，提供了详尽的文档、开源代码和设计文件](https://github.com/Seeed-Studio/OSHW-WioTerminal)，允许用户完全理解和复制硬件。这种开放性促进了开发者社区内的创新、协作和学习。

## Wio Terminal 入门

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal 入门</th>
      <th class="table-trnobg">Wio Terminal 上的 CircuitPython</th>
      <th class="table-trnobg">如何在 Arduino 中使用 FreeRTOS 进行多任务处理</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在这个展示中，我们的工程师 Lakshantha 将解释如何使用 Wio terminal 以及软件，并为您展示有趣的演示！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何在 Seeeduino Wio Terminal 上安装和运行 Adafruit Industries 的官方 CircuitPython！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>为了兼容 Arduino，我们已将 FreeRTOS 移植到 Arduino 框架中，这样您就能够轻松地在您喜爱的 Arduino 开发板上使用 FreeRTOS！本 wiki 介绍如何开始使用 Arduino 的 FreeRTOS。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Software-FreeRTOS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## 硬件概述

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">LCD 使用</th>
      <th class="table-trnobg">输入/输出</th>
      <th class="table-trnobg">IMU 使用</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0129.2019-12-03%2014_10_15.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何安装 Wio Terminal 上使用的 TFT LCD 库。它以最小的努力为 Wio Terminal 提供基本的图形功能！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何使用 Wio Terminal 上的 Grove IO 接口。这让您可以享受 Grove 生态系统的即插即用功能，以及使用 40 针 Raspberry pi 兼容的 GPIO！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何安装 Wio Terminal 上使用的内置 3 轴数字加速度计（LIS3DHTR）库。这让您可以访问 Wio Terminal 的加速度计信息，以及将其用于运动控制等。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-IO-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-IMU-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">SD 卡</th>
      <th class="table-trnobg">Wi-Fi</th>
      <th class="table-trnobg">蓝牙</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何安装 Wio Terminal 上使用的文件系统库。它提供了与 SD 卡进行文件操作的基本功能，允许使用 SPI 接口从 SD 卡读取/写入数据。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何为 Wio Terminal 上的无线核心 Realtek RTL8720 更新最新固件，以及安装所有依赖库以启用 Wio Terminal 的无线连接功能。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何为 Wio Terminal 上的无线核心 Realtek RTL8720 更新最新固件，以及安装所有依赖库以启用 Wio Terminal 的蓝牙连接功能。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-FS-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Bluetooth-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">RTC</th>
      <th class="table-trnobg">红外发射器</th>
      <th class="table-trnobg">麦克风</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何使用 Wio Terminal 内 SAMD51 核心内置的 RTC 功能来跟踪时间。此功能让您无需向系统添加外部 RTC 模块！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 演示如何使用 Wio Terminal 中内置的红外发射器组件。红外发射器是一个数字接口，可用于发送红外信号，就像遥控器一样！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 wiki 介绍如何使用 Wio Terminal 中内置的麦克风进行音频输入。麦克风可用于检测周围的声音并做出相应响应。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-RTC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Infrared-Emitter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Mic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>按钮</font></th>
      <th class="table-trnobg"><font size={"4"}>五向开关</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程演示如何在Wio Terminal中使用可配置按钮。Wio Terminal有三个可用的按钮。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程演示如何在Wio Terminal中使用五向开关。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Buttons/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Switch/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>光传感器</font></th>
      <th class="table-trnobg"><font size={"4"}>蜂鸣器</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程演示如何在Wio Terminal中使用内置光传感器作为组件。光传感器使用模拟接口，您可以通过读取其引脚来简单地读取周围的光传感器值。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程演示如何在Wio Terminal中使用内置压电蜂鸣器作为组件。压电蜂鸣器可以连接到模拟脉宽调制(PWM)输出，以产生各种音调和效果！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Light/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Buzzer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>


## 扩展板

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Wio Terminal 电池底座(650mAh)</font></th>
      <th class="table-trnobg"><font size={"4"}>Wio Terminal LoRaWan 底座，内置天线的LoRa-E5和GNSS，EU868/US915</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Wio Terminal电池底座是Wio-Terminal开发板的必备扩展板，因为它为Wio Terminal提供外部电源，以增强其便携性和紧凑性。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Wio Terminal LoRaWan底座，内置天线的LoRa-E5和GNSS，EU868/US915，嵌入了LoRa-E5 STM32WLE5JC，由ARM Cortex M4超低功耗MCU内核和LoRa SX126x驱动，是一个支持EU868和US915频率上的LoRa和LoRaWAN协议以及(G)FSK、BPSK、(G)MSK、LoRa调制的无线射频模块。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Chassis-Battery_650mAh/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>以太网连接</font></th>
      <th class="table-trnobg"><font size={"4"}>音频扩展板</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/enc-wio.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程介绍如何在Wio Terminal上使用树莓派的ENC28J60 OVERLAYS HAT来实现稳定的网络连接。这是在Wio Terminal上使用树莓派40引脚扩展板的完美示例。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程介绍如何使用ReSpeaker 2-Mic Hat在Wio Terminal上使用音频库。借助这个库，您可以使用Wio Terminal录制、播放和分析音频！此外，这个音频库可以应用到不同的领域，如语音识别等等！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Ethernet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Audio-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## 套件与课程

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">应用套件 ML101 与 Vijay 教授课程</th>
      <th class="table-trnobg">什么是 TinyML？</th>
      <th class="table-trnobg">面向创客的人工智能入门</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本书专为教育工作者设计，能够将 Wio Terminal 引入课堂或工作坊，向学习者展示 TinyML 的强大功能。它提供了教授机器学习基础知识所需的基本理论基础，同时通过实践练习保持概念的具体性。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>如您所猜测的，ML 代表机器学习，在大多数情况下（虽然不总是如此），现在指的是深度学习。TinyML 中的 Tiny 意味着 ML 模型经过优化，可以在功耗极低且占用空间很小的设备上运行，例如各种 MCU。它是边缘机器学习或嵌入式机器学习的一个子集。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本文的目的是为想要开始深度学习之旅的创客建立兴趣并提供一般性理解。我将指出一些常见用例和潜在陷阱。此外，在本文末尾，我将推荐一些课程和书籍来深入学习这个主题。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-Kit-Course/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Introduction_to_Artificial_Intelligence_for_Makers/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## 应用

### 简易物联网

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>将 Wio Terminal 连接到 Microsoft Azure IoT Central</font></th>
      <th class="table-trnobg"><font size={"4"}>将 Wio Terminal 连接到 Microsoft Azure IoT</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/Wio-terminal-azureiot.jpeg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本教程中，我们将引导您完成将 Wio Terminal 连接到 Microsoft Azure IoT Central 的过程，并从 Wio Terminal 上的板载传感器/硬件（如 3 轴加速度计、光传感器、3 个按钮）向 Microsoft Azure IoT Central 发送遥测数据。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 此示例应用程序展示了如何将您的 Wio Terminal 连接到 Azure IoT Hub。它基于 Azure SDK for Embedded C 构建，这是一个占用空间小、易于移植的库，用于与 Azure 服务通信。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Azure-IOT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>将 Wio Terminal 连接到 Google Cloud IoT Core</font></th>
      <th class="table-trnobg"><font size={"4"}>Wio Terminal 和 Wappsto IoT 入门</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本教程中，我们将引导您完成将 Wio Terminal 连接到 Google Cloud IoT Core 的过程，并从 Wio Terminal 向 Google Cloud IoT Core 发送遥测数据。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本教程中，我们将指导您将 Wio Terminal 连接到 Wappsto IoT，并在连接后使用 Wappsto 的各种功能。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Get-Started-with-Wio-Terminal-and-Wappsto-IoT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### 嵌入式机器学习

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">基于 Edge Impulse 的项目</th>
      <th class="table-trnobg">基于 TensorFlow Lite 的项目</th>
      <th class="table-trnobg">带有 AIoTs GPS 的 LoRa 节点</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Alots/connectpc.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Edge Impulse 使开发者能够通过嵌入式机器学习创建下一代智能设备解决方案。边缘机器学习将能够有效利用目前由于成本、带宽或功耗限制而被丢弃的 99% 传感器数据。
      现在，Wio Terminal 已获得 Edge Impulse 的官方支持。让我们看看如何让 Wio Terminal 开始使用边缘机器学习！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本文介绍如何将官方 Arduino Tensorflow Lite 库安装到您的 Wio Terminal 中，让您可以使用 Wio Terminal 测试一些机器学习模型。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在这个项目中，将使用内置的 3 轴加速度计传感器和神经网络算法来构建一个智能识别系统。基于 Wio Terminal 的运动，它可以实时显示其状态。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-TFLM-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/AIoTs_GPS_state_tester/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## 教程

### 基本用法

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">USB 主机</th>
      <th class="table-trnobg">USB 客户端</th>
      <th class="table-trnobg">显示陀螺仪</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0279.2019-11-28%2018_25_43.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程介绍如何将 Wio Terminal 用作 USB 主机，这意味着您可以将 USB 设备插入 Wio Terminal 并像使用计算机一样使用它！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程介绍如何将 Wio Terminal 用作 USB 客户端，包括将其用作人机接口设备（HID），如键盘、鼠标等。它还支持乐器数字接口（MIDI）。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>此示例演示如何在 Wio Terminal 上绘制线图。在此示例中，3 轴加速度计读数（3 组数据）被绘制成一个线图，以显示 Wio Terminal 的实时位置！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-USBH-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-USBCLIENT-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Displaying-Gyro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">存储数据</th>
      <th class="table-trnobg">显示照片</th>
      <th class="table-trnobg">交互式表情演示</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>此示例演示使用线图功能在 Wio Terminal 上显示 Grove - 光传感器读数，就像串口绘图器一样！此外，光传感器数据存储在 SD 卡中。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>此示例演示如何循环显示 SD 卡中的图像。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>此示例演示如何通过 SD 卡将多个图像（眼睛）显示到 LCD 屏幕上（BMP 格式），并使用内置按钮和陀螺仪与用户交互。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Storting-Analog-Data/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Displaying-Photos/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Interactive-Face/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 项目

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">使用 Wio Terminal 的压力传感器</th>
      <th class="table-trnobg">使用 Wio Terminal 读取冠状病毒实时数据</th>
      <th class="table-trnobg">使用 Wio Terminal 构建红外热成像相机</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IRcamera.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>该演示显示 Grove - 高精度压力传感器 DPS310 与 Wio Terminal 完全兼容，其测量具有高精度。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程是对"从 Wio Terminal 读取 Github 仓库统计信息"的修改，其中修改为访问冠状病毒 COVID19 API 并解析数据，在 LCD 屏幕上显示实时 COVID-19 数据。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>使用 Grove - 红外温度传感器阵列（AMG8833）和 Wio Terminal，我们可以轻松构建一个低成本的类似 FLIR™ 的热成像相机！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Barometric-Pressure-sensor-using-the-Wio-terminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Reading-COVID19/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Thermal-Camera/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">为树莓派构建HMI显示器</th>
      <th class="table-trnobg">如何使用Wio Terminal测量噪音水平</th>
      <th class="table-trnobg">使用Wio Terminal访问GitHub</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter_gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Github.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本教程中，我们将介绍如何将Wio Terminal用作树莓派、Nvidia Jetson Nano、BeagleBone甚至Odyssey X86J4105的HMI（人机界面）USB显示器。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>此示例使用ReSpeaker 2-Mic Hat上的麦克风检测分贝，检测周围环境，然后在显示器上显示。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程介绍如何使用Wio Terminal访问HTTPS服务器，这意味着您可以使用Wio Terminal从互联网获取实时数据！在这里，Wio Terminal连接到Wi-Fi并从Github获取数据。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-HMI/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Sound-Meter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Reading-Github/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal的Blynk应用</th>
      <th class="table-trnobg">Edge Impulse调谐器</th>
      <th class="table-trnobg">Codecraft连接Azure IoT与Wio Terminal</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程介绍如何将Wio Terminal与Blynk软件配合使用，通过Wi-Fi或蓝牙进行交互。这使您可以将Wio Terminal用作IoT设备的核心，并能够非常轻松地通过手机控制硬件！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在这里我们将提供音频分类项目并向您展示EON Tuner的使用方法。如果您对基于Wio Terminal和Edge Impulse使用LoRa传输数据感兴趣，您可以随时点击查看示例项目。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在这里我们将向您展示如何基于Wio Terminal将Codecraft与Azure IoT连接，并将传感器应用到IoT项目中。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Blynk/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Edge-Impulse-Tuner/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Azure_IoT_CC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## ✨ 贡献者项目

- 我们有一个更新此页面的任务列表，该列表归类在我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)下，因为我们致力于通过开发我们的wiki平台来增强用户体验并提供更好的支持。
- [您对此页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962236)对我们来说至关重要！我们非常重视您的意见，并将非常感谢您在产生想法方面的帮助。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>