---
description: SenseCAP K1100 指南 - 传感器原型套件
title: SenseCAP K1100 指南 - 传感器原型套件
keywords:
- SenseCAP 网关
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_K1100_Intro
last_update:
  date: 08/07/2024
  author: Frank
---

## 简介

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/___-1-_-7_1_.png" style={{width:800, height:'auto'}}/></div>

SenseCAP K1100 是一款全面且先进的环境监测套件，旨在提供无缝的数据采集和分析功能。它集成了先进的传感器和连接选项，是各种环境监测应用的多功能解决方案。该套件非常适合开发人员、研究人员和爱好者，帮助他们高效地原型设计和部署强大的物联网解决方案。

## 真正野外的理念

SenseCAP K1100 原型套件弥合了初始概念开发与实际部署之间的差距。它使用户能够快速创建和测试其环境监测解决方案，然后将其部署到实际环境中。这种从原型到真正野外解决方案的过渡，确保了设备的可靠性、耐用性，并能够承受各种环境条件。

## 开始使用 SenseCAP K1100

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>传感器原型套件简介</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 SenseCraft 快速且无代码启动</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/banner.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本教程中，您可以通过我们的开源项目，在最短的时间内体验数据采集和数据处理的乐趣。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 我们为用户提供了两种体验物联网的路径，一种是 LoRa®，另一种是 WiFi。本教程将教您如何使用它们。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-quickstart/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## LoRaWAN-网络应用

### 传感器在 Arduino 中的基本使用

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal 光传感器</th>
      <th class="table-trnobg">Wio Terminal IMU 传感器</th>
      <th class="table-trnobg">Grove 土壤湿度传感器</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/102.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/162.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本节中，我们将详细介绍光传感器的工作原理，如何使用 Wio Terminal 获取传感器数据，以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本节中，我们将详细介绍 IMU 传感器的工作原理，如何使用 Wio Terminal 获取传感器数据，以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本节中，我们将详细介绍 Grove 土壤湿度传感器的工作原理，如何使用 Wio Terminal 获取传感器数据，以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-Light-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-IMU-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove VOC 和 eCO2 气体传感器 (SGP30)</th>
      <th class="table-trnobg">Grove 温湿度传感器 (SHT40)</th>
      <th class="table-trnobg">Grove 视觉 AI 模块</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本节中，我们将详细介绍 Grove VOC 和 eCO2 气体传感器的工作原理，如何使用 Wio Terminal 获取传感器数据，以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本节中，我们将详细介绍 Grove 温湿度传感器的工作原理，如何使用 Wio Terminal 获取传感器数据，以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本节中，我们将详细介绍 Grove 视觉 AI 模块的工作原理，如何使用 Wio Terminal 获取传感器数据，以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>


### 云服务

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Helium 云服务</th>
      <th class="table-trnobg">TTN 云服务</th>
      <th class="table-trnobg">SenseCAP 和 Node-Red 云服务</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/25.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本章中，我们将介绍 Helium 控制台的操作，帮助您初步了解 Helium 控制台。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本章中，我们将介绍 TTN 控制台的操作，帮助您初步了解 TTN 控制台。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Node-RED 是一种编程工具，用于以新颖有趣的方式将硬件设备、API 和在线服务连接在一起。我们将为 SenseCAP 和 Node-RED 提供一系列教程。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Wi-Fi 网络应用

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">高级 WiFi 使用</th>
      <th class="table-trnobg">云服务</th>
      <th class="table-trnobg">Azure IoT 平台使用</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 介绍了一些高级 Wi-Fi 库的使用方法，例如 HTTPClient、DNSServer 和 WebServer 库。通过实现这些库，您可以使用简单的 API 开发物联网项目。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本章节中，我们将指导您通过 Wio Terminal 连接 Ubidots、Blynk 和 Google Cloud。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本教程中，我们将引导您将 Wio Terminal 连接到 Microsoft Azure IoT Central，并从 Wio Terminal 上的板载传感器/硬件（如三轴加速度计、光传感器、三个按钮）向 Microsoft Azure IoT Central 发送遥测数据。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Advanced-WiFi/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Getting_started_with_Ubidots/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>


## 嵌入式机器学习应用

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>内置传感器与 Edge Impulse</font></th>
      <th class="table-trnobg"><font size={"4"}>可定制模型的视觉 AI</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本文为希望使用 Edge Impulse 生成模型并连接云的用户提供了解决方案。在我们的演示中，我们将使用 Google 表格。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中，我们将教您如何为您的特定应用训练自己的 AI 模型，然后轻松部署到 Grove - Vision AI 模块。让我们开始吧！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1111-Edge-Impulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Vision_AI_with_Customizable_Models/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## 项目部分

除了上述每个平台的基本教程外，我们还准备了丰富的示例，展示了如何使用此套件。您可以在这里看到，这个套件的价值是无限的！

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>2022 可持续星球的 IoT Into the Wild 比赛</font></th>
      <th class="table-trnobg"><font size={"4"}>具有可定制模型的视觉 AI</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100_overview/000000.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 我们很高兴与您分享参赛者使用此优秀套件制作的项目。您还可以参考他们的项目，探索更多可能性！</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，我们将向您展示如何利用 Wio Terminal 将套件中的 Grove - Wio-E5 和 Grove - 土壤湿度传感器连接到 Helium 和 Azure IoT Central 平台，构建一个实时的后院盆栽监控和浇水提醒系统，体验物联网的魅力。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/IoT-into-the-wild-contest/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/K1111-Quick-Start-Guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>




## ✨ 贡献者项目

- 我们为更新此页面制定了一个任务列表，该任务被归类为我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)，因为我们致力于通过改进我们的 Wiki 平台来提升用户体验并提供更好的支持。
- [您对本页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962909)对我们至关重要！我们非常重视您的意见，并非常感谢您为我们提供创意支持。

## SenseCAP 技术支持

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>