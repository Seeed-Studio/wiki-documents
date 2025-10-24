---
description: GPS-Modules-Selection-Guide
title: GPS 模块选择指南

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/GPS-Modules-Selection-Guide
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

我们在近年来发布了各种类型的 GPS 模块。让我们仔细了解它们，找出哪一款最适合您！

如需查看我们商城中的所有 GPS 或通信模块，请点击 [Seeed Studio Bazaar](https://www.seeedstudio.com/) 进行查看。

## GPS 和 GPS 模块简介

全球定位系统（GPS）设备之一利用来自卫星的数据，通过一个名为三边测量的过程来定位地球上的特定点。同时，GPS 接收器使用无线电信号测量到卫星的距离来进行三边测量。三边测量类似于三角测量，后者测量角度，如本插图所示（Tim Gunther，2020）。GPS 模块包含微型处理器和天线，可直接接收卫星通过专用射频频率发送的数据。从那里，它将接收来自每个可见卫星的时间戳以及其他数据片段。如果模块的天线能够发现 4 颗或更多卫星，它就能够准确计算其位置和时间。

四个著名的全球导航卫星系统包括 GPS、BDS（北斗）、GLONASS 和 GALILEO 四个卫星导航系统。最早出现在美国的是 GPS（全球定位系统），这是目前技术最完善的系统。BDS、GLONASS 和 GALILEO 已成为世界上其他最大的卫星导航系统，目前正在现代化进程中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/28251.jpg" /><figcaption><b>图 1</b>. <i> 显示三颗卫星三角测量精确位置的地球插图。（Tim Gunther，2020）</i></figcaption></div>

我们将介绍并比较这两个 GPS 模块：

- [Grove – GPS Module](https://wiki.seeedstudio.com/cn/Grove-GPS/)  
- [Grove – GPS(Air530)](https://wiki.seeedstudio.com/cn/Grove-GPS-Air530/)

这些 GPS 模块与 Arduino 和 Raspberry Pi 兼容，让您可以轻松开始尝试。**Grove - GPS(Air530)** 中的 Air 530 模块是一个高性能、高度集成的多模式卫星定位和导航模块。它支持 GPS / 北斗 / Glonass / Galileo / QZSS / SBAS，这使其适用于汽车导航、智能穿戴和无人机等 GNSS 定位应用。Air530 模块还支持 NMEA 0183 V4.1 协议，并与以前的版本兼容。

同时，**Grove - GPS Module** 的 E-1612-UB 模块系列是一个独立 GPS 接收器系列，具有高性能的 u-blox 5 定位引擎。50 通道 u-blox 5 定位引擎拥有不到 1 秒的首次定位时间（TTFF）。专用的捕获引擎拥有超过 100 万个相关器，能够进行大规模并行时间/频率空间搜索，使其能够即时找到卫星。

## 工作原理

在购买GPS模块之前，您应该了解GPS模块的工作原理，下表提供了一些相关信息。

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-q854{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-uxnu{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
<!-- <table class="tg" style="undefined;table-layout: fixed; width: 791px">
<colgroup>
<col style="width: 200px">
<col style="width: 591px">
</colgroup>
<thead>
  <tr>
    <th class="tg-5hs1">GPS模块术语</th>
    <th class="tg-5hs1">工作原理</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-q854"><br><br>DGPS<br></td>
    <td class="tg-uxnu">DGPS是一种差分GPS参考站，它使用已知的精确三维坐标来获得伪距修正量或位置修正量，然后将此修正量实时或事后发送给用户（GPS导航仪）以修正用户的测量数据，从而提高GPS定位精度。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>通道</td>
    <td class="tg-uxnu">GPS模块运行的通道数量会影响您的首次定位时间（TTFF）。由于模块不知道它正在观察哪颗卫星，它可以同时检查更多频率/通道，因此可以更快地找到定位。模块锁定或定位后，一些模块会关闭额外的通道块以节省电力。</td>
  </tr>
  <tr>
    <td class="tg-q854">TTFF</td>
    <td class="tg-uxnu">首次定位时间。一个详细说明GPS接收器在开机后获得位置所需时间的规格。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br><br>NMEA</td>
    <td class="tg-uxnu">NMEA是由国家海洋电子协会为海洋电子设备开发的标准格式。NMEA数据以语句形式显示并从GPS模块的串行发送（TX）引脚输出。"GGA"是最常用的格式，它包括定位时间、纬度、经度、高度、用于定位的卫星数量、DOP值、差分状态和修正周期等。</td>
  </tr>
  <tr>
    <td class="tg-q854">更新频率</td>
    <td class="tg-uxnu">更新频率是指GPS模块重新计算并报告其位置的频率。</td>
  </tr>
  <tr>
    <td class="tg-q854">波特率</td>
    <td class="tg-uxnu">波特率是指数据通过串行线路发送的速度。更高的波特率允许更快地发送GPS数据。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>灵敏度</td>
    <td class="tg-uxnu">dBm数值决定了GPS模块捕获频率的能力。更高的dBm表示模块能够更好地接收卫星信号。</td>
  </tr>
  <tr>
    <td class="tg-q854">功耗要求</td>
    <td class="tg-uxnu">GPS模块可能消耗大量电力。平均在3.3V电压下消耗30mA。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>天线<br></td>
    <td class="tg-uxnu">每个天线都设计用于接收GPS L1频率1.5752 GHz。天线的位置和设计对GPS的最佳性能至关重要。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>精度<br></td>
    <td class="tg-uxnu">能够达到的距离越小=精度越高。通常能够在30秒内找到您的位置，精度达到+/- 10米，大多数模块可以达到+/-3米。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>热启动<br></td>
    <td class="tg-uxnu">指上次关机的地方没有太大移动，且距离上次定位的时间少于2小时。再次定位时，GPS芯片可以继续使用之前的星历通过软件快速搜星，实现秒级定位。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>温启动</td>
    <td class="tg-uxnu">指距离上次定位时间超过2小时的情况，搜索时间介于冷启动和热启动之间。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>冷启动<br></td>
    <td class="tg-uxnu">如果模块长时间断电，备用电容器电量耗尽，数据将丢失。下次上电时，GPS需要下载新的年历和星历数据。</td>
  </tr>
</tbody>
</table> -->

## 应用领域

GPS模块有着众多的应用。特别是，通过这些GPS模块的应用可以开发大量的社会活动。因此，GPS模块在各个领域都发挥着重要作用，包括环境测量、交通运输、紧急救援、农业、娱乐等。

<table className="tg" style={{tableLayout: 'fixed', width: 792}}>
  <colgroup>
    <col style={{width: 201}} />
    <col style={{width: 591}} />
  </colgroup>
  <thead>
    <tr>
      <th className="tg-5hs1">应用领域</th>
      <th className="tg-5hs1">功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-5z8m"><br /><br />测量<br /></td>
      <td className="tg-ut4k">它使用载波相位差分技术（RTK）实时处理两个观测站的载波相位，精度达到厘米级。测量结果统一在WGS84坐标系中，信息自动接收和存储，减少了繁琐的中间处理环节。</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />交通运输<br /></td>
      <td className="tg-ut4k">GPS模块可用于自主导航、港口管理和进港引导、路线交通管理以及跟踪监控。车载设备使用GPS进行精确定位，结合电子地图和实时交通状况，自动匹配最优路径，实现车辆的自主导航。</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br /><br />紧急救援<br /></td>
      <td className="tg-ut4k">利用GPS定位技术，可以进行消防、救护车和警察的紧急调度，提高应急响应部门对火灾、犯罪现场、交通事故、交通拥堵等紧急事件的响应效率。配备GPS模块的渔船在发生危险情况时可以快速定位和报警，从而能够更快、更及时地获得救援。</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />农业<br /><br /></td>
      <td className="tg-ut4k">GPS模块用于定位和获取农田信息，包括产量监测、土壤样本采集等。计算机系统通过分析和处理数据确定农田地块的管理措施，并将产量和土壤状况信息加载到GPS设备中。在喷洒设备中，它可以精确地对农田进行施肥和喷洒。</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />娱乐<br /></td>
      <td className="tg-ut4k">通过GPS模块，人们可以在陌生的城市中快速找到目的地，并可以沿着最优路径出行；露营者携带GPS接收器可以快速找到合适的露营地点，而不用担心迷路；甚至一些高端视频游戏也使用了GPS模拟技术。</td>
    </tr>
  </tbody>
</table>

## Seeed 的 GPS 模块

| 名称| 缩略图| 尺寸 |更新频率| 波特率| 导航灵敏度|功耗要求|通道数| 首次启动时间 | 天线 |精度 |点击购买|
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|--------------------------|
| [Grove – GPS Module](https://wiki.seeedstudio.com/cn/Grove-GPS/) | ![Grove GPS](https://files.seeedstudio.com/wiki/Grove-GPS/img/gps-module.jpg) | `40mm x 20mm x 13mm` | `1Hz, 最大 10Hz` | `9,600bps – 115,200bps` | `-160dBm` | `3.3V - 5V` | `22 个跟踪，66 个通道` | `冷启动：13s；温启动：1-2s；热启动：<1s` | 包含天线 | `2.5m GPS 水平位置精度` | [立即订购](https://www.seeedstudio.com/Grove-GPS-Module.html?utm_source=blog&utm_medium=blog) |
| [Grove – GPS (Air530)](https://wiki.seeedstudio.com/cn/Grove-GPS-Air530/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/03_11.png"/>|40mm x 20mm x 13mm|/|默认 9,600bps|-148dB|3.3V - 5V|/|冷启动：27s；温启动：4s；|包含天线|2.5m 水平定位精度|[立即订购](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

### 哪个 GPS 模块更好

#### 更好的功耗

**Grove – GPS (Air530)** 具有超低功耗，仅为 31uA，低功耗模式下为 0.85 mA，这使其成为功耗更低的更好的 GPS。

#### 可扩展性

凭借更高的最大更新频率，**Grove - GPS** 能够用于涉及高速移动物体的项目。此外，拥有更多通道也为其他应用开辟了空间，**Grove- GPS (Air 530)** 具有多模式卫星定位和导航功能，支持同时连接 6 颗以上卫星。

#### 精度

**Grove -GPS (Air530)** 具有 2.5m 的水平定位精度、3.5m 的高定位精度、0.1m/s 的速度精度和 30ns 的时间传输精度，即使在信号不良的条件下也能快速准确地定位。

## 项目

**GPS/GPRS 跟踪器项目**：在这个新项目中，我们将展示使用 GPRS 技术和 MQTT 协议连接的 GPS 跟踪器。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

**车辆跟踪系统**：现在您已经选择了 GPS 模块，这里有一些您可以用 Arduino 和 GPS 模块完成的项目。访问[这里](https://create.arduino.cc/projecthub/muchika/vehicle-tracking-system-based-on-gps-and-gsm-57b814?ref=tag&ref_id=gps&offset=15)获取详细信息。

<iframe frameborder='560' height='327.5' scrolling='no' src='https://hackster.imgix.net/uploads/attachments/1038379/FZNOC7NK0MP38U3.jpg?auto=compress%2Cformat&w=900&h=675&fit=min' width='350'></iframe>

**LED 自行车速度计**：想知道您骑行的速度有多快吗？使用这个 DIY 自行车速度计，采用 GPS 技术进行速度感应，您可以知道自己的骑行速度！它还配有 RGB LED 来向骑行者指示速度。访问[这里](https://create.arduino.cc/projecthub/JeremySCook/gps-led-bike-speedometer-c8f956?ref=tag&ref_id=gps&offset=26)获取详细信息。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=CeStrH-5Llo&feature=emb_rel_end" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**个人 GPS 助手**：这个项目是一个设备，让您监控人员和物品，持续告诉您它们的位置以及连接到它的传感器的数值。其中一个功能允许您为传感器设置限制值，当超过这些值时会向您发送短信警报。您还可以设置某些地方的限制，当设备离开该区域时会向您发出警报。还可以通过短信与设备通信，以获取有关它的信息。

访问[这里](https://create.arduino.cc/projecthub/Momy93/sandro-your-personal-gps-assistant-26dfa3?ref=tag&ref_id=gps&offset=32)获取详细信息。

<div class="video-container">
<iframe width="560" height="315" src="https://youtu.be/3lcP4YtxlCg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 资源

**[参考]** [来自 Tim Gunther，国家地理 (2020) 的三角测量](https://www.nationalgeographic.org/photo/triangulation-sized/)

**[ZIP]** [E-1612-UB 数据手册](https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf)

**[ZIP]** [Air530 数据手册](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。

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