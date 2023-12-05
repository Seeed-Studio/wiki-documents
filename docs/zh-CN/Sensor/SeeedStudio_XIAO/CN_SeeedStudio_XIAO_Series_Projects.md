---
description: Wiki feature page for the XIAO series.
title: XIAO 系列教程和项目合集
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_topic_page
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# 基于 Seeed Studio XIAO 的教程和项目合集

XIAO系列开发板，其中“XIAO”代表小，是Seeed Studio推出的指甲盖大小的微型开发板。

我们在这里对这一系列开发板的应用进行清晰易懂的介绍，希望能为大家以后的使用提供参考和帮助。此外，我们还收集了使用这些小型开发板创作的小杰作，并热切期待您的 [上传](https://wiki.seeedstudio.com/Contribution-Guide/)。

## 目录

- [**全功能用法**](#jump1)
  - [**开始**](#jump2)
  - [**引脚使用**](#jump3)
  - [**各板的功能使用(蓝牙、WiFi、其他教程)**](#jump4)
  - [**平台支持(Platform, MicroPython, CircuitPython)**](#jump5)
- [**创意作品展示**](#jump6)
  - [**嵌入式机器学习(TinyML)**](#jump7)
  - [**杰出项目**](#jump8)

## <span id="jump1">全功能用法</span>

### <span id="jump2">开始</span>

这里收集了每个 XIAO 的动手准备内容，您可以在其中找到为每个 XIAO 准备硬件和软件的完整过程。这将为您的开发之旅扫清道路。
<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO SAMD21</th>
			<th>XIAO RP2040</th>
            <th>XIAO nRF52840 (Sense)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/1.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/2.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#getting-started"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_BLE/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3 (Sense)</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/4.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:280, height:'auto'}}/></div></td>
		</tr>
		<tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>


### <span id="jump3">引脚使用</span>

以下是每个 XIAO 关于如何使用 pin 函数的教程集合。我们通常提到的引脚功能包括常见的GPIO、数字、模拟、SPI、IIC等。在这里，您将掌握每个XIAO基本功能的使用。连接您的传感器系统，发挥创意！

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO SAMD21</th>
			<th>XIAO RP2040</th>
            <th>XIAO nRF52840 (Sense)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/4.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/m/mnakai/20220525/20220525134331.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#pin-multuiplexing-on-the-seeed-studio-xiao-rp2040"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Pin-Multiplexing/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3 (Sense)</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://yokahiyori.com/wp-content/uploads/2022/12/2022-15-22_DSC01683_b_169_r4-2048x1151.png" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:280, height:'auto'}}/></div></td>
		</tr>
		<tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_pin_multiplexing/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### <span id="jump4">各板的功能用途</span>

本节旨在列出 Wiki 中有关每个 XIAO 模型的特定功能点的教程。它允许用户应用这些功能。

#### Seeed Studio XIAO SAMD21

<div class="table-center">
	<table align="center">
		<tr>
			<th colspan="3">Seeed Studio XIAO SAMD21</th>
		</tr>
        <tr>
			<th>使用单周期IOBUS</th>
            <th>XIAO SAMD21 作为 USB 设备 （TinyUSB）</th>
            <th>XIAO SAMD 21 DAPLink</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/midi-monitor.jpg" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg" style={{width:400, height:'auto'}}/></div></td>
		</tr>
        <tr>
            <td><font size={"1"}>Cortex M0+ 具有称为单周期 IOBUS 的功能，可以在一个时钟周期内操作 GPIO 输出。写入特定寄存器可能会反转逻辑、禁用引脚或更改引脚驱动电流。</font></td>
            <td><font size={"1"}>本 wiki 介绍如何在 TinyUSB 库的帮助下将 Seeed Studio XIAO SAMD21 用作 USB 客户端。它允许 Seeed Studio XIAO SAMD21 用于键盘、鼠标等 HID 设备。</font></td>
            <td><font size={"1"}>现在，我们已经开发了在您的Arduino板（SAMD系列）上运行的DAPLink固件，例如Wio Terminal和Seeeduino Xiao，以便您可以以最具成本效益的方式上传和调试支持DAPLink的开发板！</font></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/#single-cycle-iobus"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-TinyUSB/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-DAPLink/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO SAMD21 登录您的 Raspberry PI</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>如果没有额外的HDMI显示器，易于连接的鼠标和键盘或经济实惠的USB到串行适配器，使用Raspberry Pi可能会很不方便。但是有了Seeed Studio XIAO SAMD21，这些问题就很容易解决。</font></td>
        </tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

<br />

#### Seeed Studio XIAO nRF52840 (Sense)

<div class="table-center">
	<table align="center">
		<tr>
			<th colspan="3">Seeed Studio XIAO nRF52840 (Sense)</th>
		</tr>
        <tr>
			<th>低功耗模式</th>
            <th>设置充电电流</th>
            <th>访问 SWD 引脚以进行调试和重新刷新引导加载程序</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEpowerresult.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/m/mnakai/20220531/20220531111415.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
        <tr>
            <td><font size={"1"}>Seeed Studio xiao nRF52840是低功耗的，在这里我们提供了一种验证方法。强烈建议在此处使用 Seeed nRF52 板库。</font></td>
            <td><font size={"1"}>电池充电电流可选择为50mA或100mA，您可以将Pin13设置为高或低以将其更改为50mA或100mA。</font></td>
            <td><font size={"1"}>使用SWD引脚</font></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_BLE/#power-consumption-verification"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_BLE/#battery-charging-current"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_BLE/#access-the-swd-pins-for-debugging-and-reflashing-bootloader"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>6轴IMU使用和温度传感器</th>
            <th>PDM 麦克风使用情况</th>
            <th>QSPI 闪存使用情况</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/imu.jpg" style={{width:180, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mic.png" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/qspi.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>Seeed Studio Xiao nRF52840 Sense配备了高精度6轴惯性测量单元（IMU），其中包括一个3轴加速度计和一个3轴陀螺仪。该模块上还有一个嵌入式温度传感器。</font></td>
            <td><font size={"1"}>Seeed Studio Xiao nRF52840 Sense配备了PDM（脉冲密度调制）麦克风，可以实时接收音频数据，并可用于音频识别。</font></td>
            <td><font size={"1"}>在本教程中，您将学习如何在小板上使用 QSPI 闪存，这可以极大地扩展存储容量并加快您的项目速度。</font></td>
        </tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-IMU-Usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-PDM-Usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao-ble-qspi-flash-usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr class="form_without_frame">
			<th>人行道上的XIAO nRF52840</th>
            <th>XIAO nRF52840 和 mbed BLE</th>
            <th>XIAO nRF52840 和 nRF52 BLE</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/25.jpg" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/and5.jpeg" style={{width:180, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>Amazon Sidewalk 是一种协议，允许兼容设备共享互联网带宽，以扩展智能家居设备的范围并改善连接性。</font></td>
            <td><font size={"1"}>介绍基于mbed的低功耗蓝牙的使用。</font></td>
            <td><font size={"1"}>介绍基于 nRF52 的低功耗蓝牙的使用。</font></td>
        </tr>
		<tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao-ble-sidewalk/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth-Usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth_Usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

<br />

#### Seeed Studio XIAO ESP32C3

<div class="table-center">
	<table align="center">
		<tr>
			<th colspan="3">Seeed Studio XIAO ESP32C3</th>
		</tr>
        <tr>
			<th>XIAO ESP32C3 WiFi 使用情况</th>
            <th>XIAO ESP32C3 BLE 使用</th>
            <th>XIAO ESP32C3 通过 ESPHome 服务访问 Home Assistant</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wifi.png" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-4.jpg" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr>
            <td><font size={"1"}>Seeed Studio XIAO ESP32C3 支持 IEEE 802.11b/g/n 的 WiFi 连接。本 wiki 将介绍此板上 WiFi 使用的基础知识。</font></td>
            <td><font size={"1"}>Seeed Studio XIAO ESP32C3 支持蓝牙 5 （LE） 连接。本 wiki 将介绍此板上蓝牙使用的基础知识。</font></td>
            <td><font size={"1"}>了解如何在您的家庭助理环境中安装 ESPHome，并使用其 WiFi 功能将 XIAO ESP32C3无缝连接到您的家庭终端。</font></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Bluetooth_Usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao-esp32c3-esphome/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO ESP32C3 & 闪存数据存储</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/c3flash.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>本教程将介绍如何从两种不同的存储方法将重要数据存储在 XIAO ESP32C3 的闪存上。</font></td>
        </tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiaoesp32c3-flash-storage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

<br />

#### Seeed Studio XIAO ESP32S3 (Sense)

<div class="table-center">
	<table align="center">
		<tr>
			<th colspan="3">Seeed Studio XIAO ESP32S3 (Sense)</th>
		</tr>
        <tr>
			<th>XIAO ESP32S3 WiFi 使用情况</th>
            <th>XIAO ESP32S3 BLE用法</th>
            <th>XIAO ESP32S3 Sense 麦克风的使用</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.gif" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr>
            <td><font size={"1"}>在本教程中，我们将探讨如何利用 XIAO ESP32S3的 Wi-Fi 功能连接到 Wi-Fi 网络并执行基本的网络任务。</font></td>
            <td><font size={"1"}>在本教程中，我们将介绍 XIAO ESP32S3 蓝牙功能的基础知识，包括扫描附近的设备、建立连接以及发送/接收数据。</font></td>
            <td><font size={"1"}>在本教程中，我们将为您带来如何使用XIAO ESP32S3 Sense扩展板的麦克风。</font></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_wifi_usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_bluetooth/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO ESP32S3 Sense 文件系统</th>
            <th>XIAO ESP32S3 Sense 相机使用</th>
            <th>XIAO ESP32S3 & SenseCraft 模型助手</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:350, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://seeed-studio.github.io/EdgeLab/images/EdgeLab-Logo.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>在本教程中，我们将重点介绍XIAO ESP32S3文件系统的使用，主要介绍Sense版本microSD卡插槽的使用。同时，我们将介绍官方的ESP文件系统SPIFFS，芯片内置的Flash等。</font></td>
            <td><font size={"1"}>在本教程中，我们将引导您使用 XIAO ESP32S3 Sense 上的摄像头模块。</font></td>
            <td><font size={"1"}>SenseCraft Model Assistant 是一个专注于嵌入式 AI 的开源项目。我们针对真实场景优化了 OpenMMLab 的优秀算法，使实现更加人性化，在嵌入式设备上实现更快、更准确的推理。</font></td>
        </tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### <span id="jump5">XIAO系列的平台支持</span>

本节将列出 XIAO 支持的主要平台，包括 PlatformIO、MicroPython、CircuitPython。支持是实时更新的。

#### Plarform IO

<div class="table-center">
	<table align="center">
		<tr>
			<th colspan="3">平台IO</th>
		</tr>
        <tr>
			<th>XIAO SAMD21</th>
            <th>XIAO RP2040</th>
            <th>XIAO nRF52840 (Sense)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio-samd21.png" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio-rp2040.png" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio-ble.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.platformio.org/en/stable/boards/atmelsam/seeed_xiao.html"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://taunoerik.art/2023/05/15/start-seeed-xiao-rp2040-on-platformio/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://medium.com/@alwint3r/working-with-seeed-xiao-ble-sense-and-platformio-ide-5c4da3ab42a3"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO ESP32C3</th>
            <th>XIAO ESP32S3 (Sense)</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio-c3.png" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio-s3.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.platformio.org/en/stable/boards/espressif32/seeed_xiao_esp32c3.html"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

#### Zephyr

<div class="table-center">
	<table align="center">
		<tr>
			<th colspan="3">Zephyr</th>
		</tr>
        <tr>
			<th>XIAO SAMD21</th>
			<th>XIAO nRF52840 (Sense)</th>
            <th>XIAO ESP32C3</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.zephyrproject.org/latest/boards/arm/seeeduino_xiao/doc/index.html"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.zephyrproject.org/latest/boards/arm/xiao_ble/doc/index.html"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.zephyrproject.org/latest/boards/riscv/xiao_esp32c3/doc/index.html"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO ESP32S3 (Sense)</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32s3.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.zephyrproject.org/latest/boards/xtensa/xiao_esp32s3/doc/index.html"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

#### MicroPython

<div class="table-center">
	<table align="center">
		<tr>
			<th colspan="3">MicroPython</th>
		</tr>
        <tr>
			<th>XIAO SAMD21</th>
            <th>XIAO RP2040</th>
            <th>XIAO nRF52840 (Sense)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython-samd21.png" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython-rp2040.png" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython-ble.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-SAMD21-MicroPython/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-MicroPython/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://micropython.org/download/SEEED_XIAO_NRF52/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO ESP32C3</th>
            <th>XIAO ESP32S3 (Sense)</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython-c3.png" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython-s3.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://lab.seeed.co.jp/entry/2023/02/20/120000"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/xiao_topic_page/#platform-support"><strong><span><font color={'FFFFFF'} size={"4"}>即将到来！</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

#### CircuitPython

<div class="table-center">
	<table align="center">
		<tr>
			<th colspan="3">CircuitPython</th>
		</tr>
        <tr>
			<th>XIAO SAMD21</th>
            <th>XIAO RP2040</th>
            <th>XIAO nRF52840 (Sense)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython-samd21.png" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython-rp2040.png" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython-ble.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-CircuitPython/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE_CircutPython/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO ESP32C3</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython-esp32c3.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://circuitpython.org/board/seeed_xiao_esp32c3/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## <span id="jump6">创意作品展示</span>

我们将继续在这里收集和展示Seeed Studio XIAO的项目。

### <span id="jump7">嵌入式机器学习(TinyML)</span>

一些 XIAO 确实支持嵌入式机器学习，我们将在此处列出有关嵌入式机器学习的相关教程内容。

<div class="table-center">
	<table align="center">
        <tr>
			<th>XIAO RP2040 和 XIAO SAMD21 上的 TinyML</th>
            <th>XIAO RP2040 上的运动识别</th>
            <th>XIAO nRF52840 Sense 上的语音识别</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr>
            <td><font size={"1"}>该项目涵盖在 Seeed Studio XIAO SAMD21 和 Seeed Studio XIAO RP2040 开发板上训练和部署模型。</font></td>
            <td><font size={"1"}>在本 wiki 中，我们将向您展示如何利用 Seeed Studio XIAO RP2040 上的加速度计与 Edge Impulse 相结合来实现运动识别。最新版本的 XIAO RP2040 开发板支持我们在这里提供的代码。</font></td>
            <td><font size={"1"}>本 wiki 将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并使用板载麦克风执行语音识别。</font></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-TinyML/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-EI/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Mic/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>XIAO nRF52840 Sense & Edge Impulse（感应和边缘脉冲）</th>
            <th>XIAO nRF52840 Sense 上的 TensorFlow Lite</th>
			<th>TinyML Made Easy：声音分类 （KWS）</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" style={{width:200, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1485670/_U7e9Y2ayIw.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>欢迎使用此快速入门 wiki，了解如何将 Edge Impulse 与 Seeed Studio XIAO nRF52840 Sense 配合使用！在本指南中，我们将探讨如何使用板载 IMU 传感器来检测人体运动并对不同的动作进行分类。</font></td>
            <td><font size={"1"}>本 wiki 将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并使用板载加速度计检测打孔和弯曲等手势。在这里，数据训练将在设备本身上完成。</font></td>
			<td><font size={"1"}>我们正在一个巨大的微型设备上继续探索机器学习，即 Seeed XIAO BLE Sense。现在，对声波进行分类。</font></td>
        </tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAOEI/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Getting-Started/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-sound-classification-kws-2fb3ab"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
		<tr  class="form_without_frame">
			<th>TinyML 变得简单：图像分类</th>
			<th>TinyML Made Easy：异常检测和运动分类</th>
		</tr>
			<td><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1587471/_nOXij20mq1.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1472235/_d2Lefd6Xrq.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
		<tr  class="form_without_frame">
			<td><font size={"1"}>在 Seeed XIAO 系列的全新微型设备 ESP32S3 Sense 上探索机器学习。</font></td>
			<td><font size={"1"}>在一个巨大的微型设备上探索机器学习，Seeed XIAO BLE。意义。</font></td>
		</tr>
		<tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-image-classification-cb42ae"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-anomaly-detection-motion-classification-958fd2"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### <span id="jump8">杰出项目</span>

<div class="table-center">
	<table align="center">
        <tr>
			<th>XIAO ESP32C3 和 ChatGPT</th>
            <th>基于XIAO ESP32S3的微型ChatGPT语音助手</th>
            <th>带有XIAO ESP32S3的地理位置跟踪器</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/22.jpg" style={{width:280, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr>
            <td><font size={"1"}>在本教程中，我们将指导用户学习和使用 XIAO ESP32C3 WiFiClient 和 HTTPClient 库，如何连接到网络，如何发布网页以及 HTTP GET 和 POST 的基础知识。目标是调用 OpenAI ChatGPT 并创建自己的问答网站。</font></td>
            <td><font size={"1"}>介绍我们的新项目，包括 XIAO ESP32S3 Sense 和 Round Display！该项目包括一个语音识别系统，使用 Sense 的麦克风和 Google Cloud 的语音转文本服务，然后是 OpenAI 的界面，用于询问 ChatGPT 问题并在屏幕上显示答案。</font></td>
            <td><font size={"1"}>在本教程中，我们将探索两种更流行的方法来部署 XIAO（不带 GPS 模块）以创建令人惊讶的跟踪器。</font></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_speech2chatgpt/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/geolocation_tracker_with_XIAO_ESP32S3/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>TOTEM | 一个带有张开功能的小分体式键盘</th>
            <th>PhatStats PC 性能 TFT 显示屏</th>
            <th>遥控风扇</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1523414/_CrkqKScb9m.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://github.com/koogar/Phat-Stats/raw/main/images/PhatStats%20RTX3080_i9-13900k.jpg" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>在阅读有关Seeed Fusion DIY XIAO Mechanical Keyboard Contest的信息时，我认为这可能是创建一个微型廉价蓝牙板的好机会，该板也可以有线使用（使用XIAO RP2040）。</font></td>
            <td><font size={"1"}>Arduino TFT PC 性能监控器，带有由 XIAO SAMD21 提供支持的客户端软件。</font></td>
            <td><font size={"1"}>本 wiki 介绍了如何制作迷你风扇来保持房间凉爽。</font></td>
        </tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/geist/totem-a-tiny-splitkeyboard-with-splay-cb2e43"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/koogar/Phat-Stats"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/#project-1---remote-control-fan"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>遥控车</th>
            <th>指纹解锁宝箱</th>
            <th>空气质量传感器集线器</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif" style={{width:200, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>本 wiki 介绍如何制作遥控车。</font></td>
            <td><font size={"1"}>此盒子使用指纹身份验证来确保您的物品安全。如果尝试未经授权的访问，蜂鸣器将响起，LED 环将变为红色。只有注册的指纹才能访问盒子。当您将手指放在板上并经过身份验证时，LED 环将变为绿色。</font></td>
            <td><font size={"1"}>这是一种环境检测设备，分别通过 Grove - 激光 PM2.5 传感器、Grove - CO10 和温度和湿度传感器和 Grove - 灰尘传感器收集 PM2.2、PM5、温度、湿度、CO2 和灰尘颗粒。</font></td>
        </tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/#project-2---remote-control-car"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/#project-3---fingerprint-unlocks-treasure-box--seeed-studio-xiao"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/#project-5---air-quality-sensor-hub---seeed-studio-expansion-base-for-xiao"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
        <tr>
			<th>气体数据记录</th>
            <th>用相机拍照</th>
            <th>与XIAO一起释放跟踪的力量</th>
		</tr>
		<tr class="form_without_frame">
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:300, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:200, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://lh4.googleusercontent.com/0isUSLW9W7tLM32pOkuGozfLGkDcji6i1UjqrTteTCQWwV3fQvx_GmfTAOzfY_Z89rpUmp4psfIldVTyrbVpgspiq6-JcAZvdGu43yxMS41d_W9Kyfn9OxQpHc7qmP5gNl_2Q-6ekg2UfM2jVQiwVZg" style={{width:400, height:'auto'}}/></div></td>
		</tr>
        <tr class="form_without_frame">
            <td><font size={"1"}>本项目展示了如何使用XIAO ESP32S3 Sense 将带有时间戳的数据记录到TF卡中。例如，我们将每10分钟记录一次来自多通道气体传感器的温度读数。XIAO ESP32S3将在每次读取之间处于深度睡眠模式，并将使用网络时间协议（NTP）请求日期和时间。</font></td>
            <td><font size={"1"}>我们将使用microSD卡的第一个项目，该程序的主要任务是每分钟获取一次相机素材，然后将素材保存到microSD。</font></td>
            <td><font size={"1"}>XIAO 的低功耗微控制器、无线连接和紧凑的尺寸使其成为开发高性价比跟踪器的理想选择。</font></td>
        </tr>
        <tr class="form_without_frame">
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/#microsd-card-application-based-on-gas-data-logging"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#taking-photos-with-the-camera"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/pet-activity-tracker-using-xiao-ble-sense-edge-impulse-858d73"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>











