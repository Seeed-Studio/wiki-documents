---
description: 毫米波雷达传感器介绍
title: 毫米波雷达传感器介绍
keywords:
- Grove
- mmWave Radar Sensor

image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /cn/mmwave_radar_Intro
last_update:
  date: 03/28/2025
  author: Hugo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:'auto', height:'auto'}}/></div>

欢迎了解 Seeed Studio 的毫米波雷达传感器。本页面旨在成为一个全面的信息来源，指导您了解这些传感器的各个方面。

在这里，您可以找到产品参数的详细信息，包括工作频率、发射功率、运动和存在检测范围以及检测角度。我们还介绍了简单直接的安装方法，如顶部安装、侧面安装和倾斜安装。此外，我们还探讨了汽车安全、智能家居和医疗保健等各种应用场景。我们的毫米波雷达传感器适用于广泛的项目，为您提供可靠的传感解决方案。

## 毫米波雷达原理

毫米波（mmWave）雷达使用调频连续波（FMCW）雷达技术来检测物体及其速度、距离和角度。FMCW 雷达连续发射调频信号，并接收来自物体的反射信号。通过分析发射和接收频率之间的差异，雷达可以确定物体的距离（范围）和相对速度（速度）。这一原理使毫米波雷达能够检测细微运动，提供高精度，并在雨、雾或灰尘等各种环境条件下有效工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/Principle.png" style={{width:'auto', height:'auto'}}/></div>

<center>  
毫米波频段示意图，图片来源：<a href="https://www.everythingrf.com/community/what-are-millimeter-waves">EverythingRF</a>
</center>

## 不同类型的毫米波雷达传感器

毫米波（mmWave）雷达传感器能够检测物体，测量其距离、速度和角度，并且可以穿透各种材料，如塑料、衣物和干墙，使其适用于广泛的应用。
在 Seeed，我们利用毫米波的强大功能开发了各种传感器，可以执行多种操作，如跌倒检测和睡眠呼吸监测。

我们的毫米波雷达传感器系列如下所示，每种都具有不同的特性和功能。

<table align="center">
 <tr>
  <th>XIAO 60GHz 毫米波人体跌倒检测传感器 MR60FDA2</th>
  <th>XIAO 60GHz 毫米波人体呼吸心跳传感器 MR60BHA2</th>
  <th>24Ghz 毫米波人体静态存在传感器 for XIAO</th>
  <th>毫米波人体检测传感器套件 MR24HPC1</th>
        <th>24GHz 毫米波人体静态存在传感器模块 MR24HPC1 Lite</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
        </div></td>
 </tr>
</table>

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th><a href="https://wiki.seeedstudio.com/cn/getting_started_with_mr60fda2_mmwave_kit/">XIAO 60GHz 毫米波人体跌倒检测传感器 <strong>MR60FDA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/cn/getting_started_with_mr60bha2_mmwave_kit/">XIAO 60GHz 毫米波人体呼吸心跳传感器 <strong>MR60BHA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/cn/mmwave_for_xiao/">24Ghz 毫米波人体静态存在传感器 for XIAO</a></th>
        <th><a href="https://wiki.seeedstudio.com/cn/mmwave_human_detection_kit/">毫米波人体检测传感器套件 <strong>MR24HPC1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/cn/Radar_MR24HPC1/">24GHz 毫米波人体静态存在传感器模块 <strong>MR24HPC1 Lite</strong></a></th>
    </tr>
    <tr>
        <th>主要功能</th>
        <td>跌倒检测</td>
        <td>呼吸和心跳检测</td>
        <td>人体检测</td>
        <td>人体检测</td>
        <td>人体检测</td>
    </tr>
    <tr>
        <th>工作频率</th>
        <td>60GHz</td>
        <td>60GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
    </tr>
    <tr>
        <th>发射功率</th>
        <td>/</td>
        <td>/</td>
        <td>/</td>
        <td>8dBm</td>
        <td>8dBm</td>
    </tr>
    <tr>
        <th>收发数量</th>
        <td>双发双收</td>
        <td>双发双收</td>
        <td>单发单收</td>
        <td>单发单收</td>
        <td>单发单收</td>
    </tr>
    <tr>
        <th>运动范围</th>
        <td>6m</td>
        <td>6m</td>
        <td>6m</td>
        <td>5m</td>
        <td>5m</td>
    </tr>
    <tr>
        <th>存在范围</th>
        <td>3m</td>
        <td>1.5m</td>
        <td>4m</td>
        <td>4m</td>
        <td>4m</td>
    </tr>
    <tr>
        <th>检测角度</th>
        <td>120x100°</td>
        <td>120x100°</td>
        <td>60×60°</td>
        <td>90×60°</td>
        <td>90×60°</td>
    </tr>
    <tr>
        <th>工作电压</th>
        <td>5V</td>
        <td>5V</td>
        <td>5V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
    </tr>
    <tr>
        <th>引脚间距</th>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.00mm</td>
        <td>2.00mm</td>
    </tr>
    <tr>
        <th>尺寸 (WxH)</th>
        <td>30x48mm</td>
        <td>30x48mm</td>
        <td>22x18mm</td>
        <td>35x30mm</td>
        <td>35x30mm</td>
    </tr>
    <tr>
        <th>安装方式</th>
        <td>顶部安装</td>
        <td>侧面安装或倾斜安装</td>
        <td>无要求</td>
        <td>无要求</td>
        <td>无要求</td>
    </tr>
    <tr>
        <th>ESPHome 支持</th>
        <td><a href="https://github.com/limengdu/MR60FDA2_ESPHome_external_components">原生固件支持</a></td>
        <td><a href="https://github.com/limengdu/MR60BHA2_ESPHome_external_components">原生固件支持</a></td>
        <td><a href="https://wiki.seeedstudio.com/cn/mmwave_for_xiao/">指南</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
    </tr>
    <tr>
       <th>类别</th>
       <td>以 XIAO ESP32C6 为 MCU 的传感器</td>
       <td>以 XIAO ESP32C6 为 MCU 的传感器</td>
       <td>模块，兼容 XIAO（引脚对引脚）</td>
       <td>以 XIAO ESP32C3 为 MCU 的传感器</td>
       <td>模块，兼容 XIAO、Arduino（通过跳线）</td>
    </tr>
    <tr>
        <th>可购买性</th>
        <td><a href="https://www.seeedstudio.com/">Seeed Studio <strong>\$24.9</strong></a></td>
        <td><a href="https://www.seeedstudio.com/">Seeed Studio <strong>\$24.9</strong></a></td>
        <td><a href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html">Seeed Studio <strong>\$4.49</strong></a></td>
        <td><a href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html">Seeed Studio <strong>\$26.99</strong></a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html">Seeed Studio <strong>\$6.9</strong></a></td>
    </tr>
</font>
</table>

<!-- ### 60GHz mmWave 跌倒检测传感器套件配 XIAO ESP32C6 (MR60FDA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>MR60FDA2 传感器套件采用 60GHz mmWave 技术，可靠地进行跌倒检测和人体存在感知。它包含光照水平感知、可定制交互的 RGB LED，并支持额外的传感器和执行器以增强自动化功能。该套件由 XIAO ESP32C6 供电，具有预刷写的 ESPHome 固件和无线连接选项，包括 Wi-Fi、低功耗蓝牙 (BLE)、Zigbee 和 Thread。这种无代码、即插即用的 Home Assistant 集成允许用户轻松自定义检测区域，使其成为医疗监护、安全、老年护理和家庭自动化应用的理想选择。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/cn/getting_started_with_mr60fda2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong>
    </a>
</div>

### 60GHz mmWave 呼吸和心跳检测传感器套件配 XIAO ESP32C6 (MR60BHA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>MR60BHA2 传感器套件采用 60GHz mmWave 技术，可靠地检测呼吸、心跳和人体存在。它具有光照水平感知、可定制的 RGB LED，并支持额外的传感器和执行器以增强自动化功能。该套件由 XIAO ESP32C6 供电，配备预刷写的 ESPHome 固件，允许使用 Wi-Fi、低功耗蓝牙 (BLE)、Zigbee 和 Thread 轻松实现与 Home Assistant 的即插即用集成。它是医疗监护、安全、老年护理和家庭自动化的理想解决方案，使用户能够在无需编码的情况下自定义检测区域。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/cn/getting_started_with_mr60bha2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong>
    </a>
</div>

### 24GHz mmWave 人体检测传感器套件配 XIAO ESP32C3 (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>由 Seeed Studio 的 XIAO ESP32C3 供电，支持 WiFi/BLE 连接，并通过 mmWave 传感器实现精确的人体检测。连接 Grove 模块以获得附加功能，并在 1-2 分钟内设置 Home Assistant，支持 OTA 更新。其可更换的 mmWave 传感器实现多功能使用，非常适合智能家居自动化、入侵检测和老年监护。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/cn/mmwave_human_detection_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong>
    </a>
</div>

### Seeed Studio 24GHz mmWave for XIAO

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave Sensor for XIAO - Human Static Presence 是 Seeed Studio XIAO 系列的扩展板。它是一个集成天线、高灵敏度的 mmWave 雷达传感器，基于 FMCW 原理。结合雷达信号处理和精确的人体感知算法，它可以识别运动和静止状态下的人体。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/cn/mmwave_for_xiao/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong>
    </a>
</div>

### 24GHz mmWave 传感器 - 人体静态存在模块 Lite (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave 传感器 - 人体静态存在模块 Lite 是一个集成天线、健康友好的 mmWave 雷达传感器，应用 FMCW 测距技术，工作在 24GHz 频段，用于实现不受环境影响的人体静态存在检测。这也是一个个性化雷达，用户可以配置其底层参数来确定检测功能。</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即获取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/cn/Radar_MR24HPC1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong>
    </a>
</div> -->

## 不同参数毫米波雷达传感器的比较

### 毫米波雷达传感器与其他传感器在人体存在检测功能方面的比较

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>毫米波雷达传感器</th>
        <td>摄像头</td>
        <td>超声波传感器</td>
        <td>激光雷达</td>
        <td>被动红外传感器 (PIR)</td>
    </tr>
    <tr>
        <th>隐私性</th>
        <th>非视觉检测，隐蔽信号频段，数据泄露风险低</th>
        <td>收集包含大量私人信息的图像，容易泄露</td>
        <td>不涉及私人图像收集，但信号容易被检测到</td>
        <td>扫描数据可能暴露场景信息，存在泄露风险</td>
        <td>不涉及私人图像收集，但信号容易被检测到</td>
    </tr>
    <tr>
        <th>成本</th>
        <th>中等</th>
        <td>成本因分辨率和功能而异，某些类型相对较高</td>
        <td>成本低</td>
        <td>设备和维护成本高</td>
        <td>成本低</td>
    </tr>
    <tr>
        <th>精度</th>
        <th>高精度，能够准确检测目标的距离、速度和角度</th>
        <td>很大程度上受光照和分辨率影响</td>
        <td>短距离检测精度有限</td>
        <td>高精度3D成像，但受环境影响</td>
        <td>检测精度低，只能确定运动</td>
    </tr>
    <tr>
        <th>稳定性</th>
        <th>不受光照和温度影响，性能稳定</th>
        <td>受光照条件限制，在弱光下性能差</td>
        <td>容易受环境噪声影响</td>
        <td>很大程度上受恶劣天气影响</td>
        <td>容易受热源等环境因素影响</td>
    </tr>
</font>
</table>

比较表格突出了毫米波雷达相对于摄像头、超声波传感器、激光雷达和PIR传感器的优势。它在各种环境中提供稳定的性能，使其在跌倒检测、呼吸和心率监测以及人体存在检测方面非常有效。此外，毫米波雷达通过不捕获可识别图像来保护隐私，确保用户机密性。

### 24 GHz和60 GHz的比较

24 GHz和60 GHz毫米波雷达在特性上存在显著差异。24 GHz雷达具有强穿透力和更长的检测范围，使其在人体存在检测方面非常有效，特别是在汽车雷达系统中。相比之下，60 GHz雷达虽然穿透力较弱，但具有更高的角度分辨率，非常适合精确应用，如跌倒检测和心率监测，常见于智能家居设备中。最终，选择合适的频率取决于具体的应用需求，包括检测范围和目标特性。

### 毫米波雷达传感器人体存在检测功能比较

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>支持人体存在检测</th>
        <th>人体存在检测效果比较</th>
    </tr>
    <tr>
        <th>24GHz mmWave for XIAO</th>
        <td>✅</td>
        <td>该产品提供人体存在检测功能，开箱即用，满足基本需求。用户可以快速实现相对稳定的检测效果</td>
    </tr>
    <tr>
        <th>MR24HPC1 Lite</th>
        <td>✅</td>
        <td>该产品具有人体存在检测功能，允许具有动手能力的用户调整底层参数，以在复杂场景中获得最佳性能。但是，其检测精度在直接操作时略低于24GHz mmWave for XIAO</td>
    </tr>
    <tr>
        <th>MR60FDA2</th>
        <td>✅</td>
        <td>人体存在检测功能不是主要功能；主要用作辅助功能来支持跌倒检测</td>
    </tr>
    <tr>
        <th>MR60BHA2</th>
        <td>✅</td>
        <td>人体存在检测功能不是主要功能；主要用作辅助功能来支持呼吸频率和心率检测</td>
    </tr>
</font>
</table>

**24GHz mmWave for XIAO** 专为寻求便利和快速访问的用户而设计。它提供人体存在检测和运动检测等功能，全部可通过蓝牙移动应用程序控制。开箱即用，简化了设置过程，让用户能够快速受益于其功能。以下是蓝牙应用程序界面：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**MR24HPC1 Lite** 专为动手能力强的用户设计，具有人体存在、运动和速度检测功能，专注于针对各种场景的可定制参数调整。用户可以通过调整正确的参数来实现最佳检测效果，但必须仔细阅读文档才能充分利用其定制选项。以下是其上位机的操作界面：

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

## 毫米波雷达传感器：我们生活中的典型应用场景

毫米波雷达传感器在不同行业的各种创新项目中得到应用。以下是一些示例：

- 汽车安全系统：通过自适应巡航控制、自动紧急制动和盲点检测等功能增强驾驶员辅助系统。
- 智能家居设备：使用雷达传感器进行手势识别、存在检测和无物理接触的生命体征监测。
- 工业自动化：实施雷达监测机械、检测危险区域中的人体存在，并提高自动化环境中的安全性。
- 医疗保健应用：监测患者的生命体征、检测跌倒并提供非侵入性诊断工具。
- 无人机导航：使无人机能够避开障碍物、自主导航并执行精确着陆。

这些项目展示了毫米波雷达技术在通过改进传感和自动化能力来改变各个领域方面的多功能性和潜力。

当然，您也可以将我们的毫米波雷达传感器模块连接到HomeAssistant。以下是一些使用示例：

- [MR60FDA2 跌倒检测传感器与 Home Assistant](https://wiki.seeedstudio.com/cn/ha_with_mr60fda2/)
- [MR60BHA2 呼吸心跳传感器与 Home Assistant](https://wiki.seeedstudio.com/cn/ha_with_mr60bha2/)
- [毫米波套件和 Grove 连接到 ESPHome](https://wiki.seeedstudio.com/cn/mmWave_Kit_And_Grove_Connect_To_ESPHome/)
- [mmWave for XIAO 通过蓝牙连接到 Home Assistant](https://wiki.seeedstudio.com/cn/mmwave_for_xiao_to_ha_bt/)

## 毫米波雷达传感器的安装方法

**方法1：顶部安装。** 顶部安装悬挂高度2.2-3.0m，最大感应半径2m，带有毫米波传感器的一侧需要与检测方向对齐。

适用于：MR60FDA2、MR24HPC1、24GHz mmWave XIAO

:::note
MR60FDA2的安装高度阈值在2.4到3.0米之间，检测跌倒的高度阈值在0到0.6米之间。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>

**方法2：侧面安装。** 侧面安装，建议雷达安装高度与被测人员胸部高度一致，模块位置与胸部位置≤1.5m。

适用于：MR60BHA2、MR24HPC1、24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>

**方法3：倾斜安装。** 对于睡眠呼吸和心率检测需求，可以采用倾斜安装方法。要求雷达安装在床头正上方1m高度处，向下倾斜45°朝向床的中央，雷达与胸腔的距离控制在1.5m以内。雷达法线方向与主要检测位置对齐，确保雷达能够检测到呼吸和心跳数据。

适用于：MR60BHA2、MR24HPC1、24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
请在开放空间中使用此模块，并在检测范围内避免以下场景，以防止对模块造成干扰：

- 多个雷达安装得过于接近
- 风吹动窗帘和摇摆植物
- 水流和水膜
- 大面积金属和镜面反射
- 透过玻璃和薄木板检测
- 容易产生振动的安装位置
- 使用劣质电源

:::

## 开源 Seeed Studio 毫米波雷达传感器

### Seeed Studio MR60FDA2 毫米波套件开源资料

- **STL**: [毫米波 3D 外壳](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHub 仓库**: 在 [Seeed 毫米波库 GitHub 页面](https://github.com/Love4yzp/Seeed-mmWave-library) 访问完整代码库和文档。
- **ESPHome 文档**: 如需进一步定制和集成，请参考 [ESPHome 文档](https://esphome.io/)。
- **MR60FDA2 固件升级工具**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **MR60FDA2 固件 v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **MR60FDA2 GUI 软件**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **毫米波传感器原理图 V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60FDA2 模块技术规格**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **MR60FDA2 Tiny Frame 接口手册**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)

### Seeed Studio MR60BHA2 毫米波套件开源资料

- **STL**: [毫米波 3D 外壳](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **GitHub 仓库**: 在 [Seeed 毫米波库 GitHub 页面](https://github.com/Love4yzp/Seeed-mmWave-library) 访问完整代码库和文档。
- **ESPHome 文档**: 如需进一步定制和集成，请参考 [ESPHome 文档](https://esphome.io/)。
- **MR60BHA2 固件升级工具**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **MR60BHA2 固件 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **MR60BHA2 GUI 软件**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **毫米波传感器原理图 V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **MR60BHA2 模块技术规格**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **MR60BHA2 Tiny Frame 接口手册**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)

### Seeed Studio 24GHz 毫米波 for XIAO 开源资料

- **24GHz 毫米波 for XIAO 技术规格**: [24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **24GHz 毫米波 for XIAO 用户手册**: [24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **24GHz 毫米波 for XIAO 原理图**: [24GHz-mmWave-for-xiao-SCH.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

### Seeed Studio MR24HPC1 毫米波套件开源资料

- **GitHub 仓库**: 在 [项目开源](https://github.com/limengdu/mmwave-kit-external-components) 访问完整代码库和文档。
- **MR24HPC1 模块快速设置模板**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **MR24HPC1 模块技术规格**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **MR24HPC1 模块用户手册 V1.5**: [MR24HPC1_User_Manual-V1.5.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

#### 版本 1

- **MR24HPC1 模块原理图&PCB V1.0**: [mmWare-kit_sch&pcb.zip](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **MR24HPC1 模块原理图 V1.0**: [sch_mmware_kit.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

#### 版本 2

- **MR24HPC1 模块原理图&PCB V2.0**: [Human_Detection_Sensor_Board_V2.zip](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **MR24HPC1 模块原理图 V2.0**: [mmwave_kit_sch_V2.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

### Seeed Studio 24GHz 毫米波传感器 MR24HPC1 开源资料

- **MR24HPC1 模块快速设置模板**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **MR24HPC1 模块技术规格**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **MR24HPC1 模块用户手册 V2.0**: [MR24HPC1_User_Manual-V2.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **MR24HPC1 模块上位机软件**: [Human-Radar-Open-Protocol_2.0.exe](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **MR24HPC1 模块 CE 认证文件**: [101991030_CE.zip](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

:::note
Seeed Studio 毫米波雷达传感器中的原始数据和算法是非开源的。感谢您的理解和支持！
:::

## ✨ 贡献者项目

- 我们有一个更新此页面的任务列表，该列表归类在我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)下，因为我们致力于通过开发我们的 wiki 平台来增强用户体验并提供更好的支持。
- [您对此页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962026)对我们来说至关重要！我们非常重视您的意见，并将非常感谢您在产生想法方面的帮助。

## 技术支持与产品讨论

 <br />

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
