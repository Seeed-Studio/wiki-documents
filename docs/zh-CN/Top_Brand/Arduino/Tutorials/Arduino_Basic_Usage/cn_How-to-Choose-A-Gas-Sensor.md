---
description: 如何选择气体传感器
title: 如何选择气体传感器

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How-to-Choose-A-Gas-Sensor
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---

如果您在 [www.seeedstudio.com](https://www.seeedstudio.com) 上搜索"气体传感器"，您会发现很多气体传感器。我们知道空气成分是多样的，某个气体传感器可以检测一种或多种空气成分，所以我们设计了一系列气体传感器。

目前有大约10种气体传感器在售。它们有相似的名称，很可能会造成混淆。希望通过以下介绍，我们能帮助您轻松选择合适的气体传感器。

很明显，不同的传感器可以检测相同的气体。比如MQ-2、MQ-3、MQ-5酒精传感器、Grove – HCHO传感器都可以检测酒精。所以如果您想要一个酒精传感器，那么应该选择哪一个呢？虽然上述大多数传感器都能够检测酒精，但您应该知道它们对酒精的检测范围是不同的。

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;
  vertical-align:top}
.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}
</style> -->

<table className="tg" style={{tableLayout: 'fixed', width: 800}}>
  <colgroup>
    <col style={{width: 119}} />
    <col style={{width: 259}} />
    <col style={{width: 271}} />
    <col style={{width: 151}} />
  </colgroup>
  <thead>
    <tr>
      <th className="tg-l5ls">气体</th>
      <th className="tg-l5ls">范围</th>
      <th className="tg-l5ls">产品名称</th>
      <th className="tg-l5ls">SKU</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3">粉尘</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
      <td className="tg-q7v3">Grove-粉尘传感器</td>
      <td className="tg-q7v3">101020012</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">20~2000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0~1000ppm</td>
      <td className="tg-q7v3">Grove-多通道气体传感器</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />酒精</td>
      <td className="tg-q7v3">200~10000pp</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">100ppm~2000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">10~500ppm</td>
      <td className="tg-q7v3">Grove-多通道气体传感器</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">20~1000ppm</td>
      <td className="tg-q7v3">Grove-酒精传感器</td>
      <td className="tg-q7v3">101020044</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000ppm)</td>
      <td className="tg-q7v3">Grove-气体传感器(O2)</td>
      <td className="tg-q7v3">101020002</td>
    </tr>
    <tr>
      <td className="tg-q7v3">HCHO</td>
      <td className="tg-q7v3">5~40ppm</td>
      <td className="tg-q7v3">Grove-HCHO传感器</td>
      <td className="tg-q7v3">101020001</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />CH4</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">5000~20000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">500~10000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">&gt;1000mmp</td>
      <td className="tg-q7v3">Grove-多通道气体传感器</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">己烷</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={2}>丙烯</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-多通道气体传感器</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~5000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">丁烷</td>
      <td className="tg-q7v3">3000~5000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">苯</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ3)</td>
      <td className="tg-q7v3">01020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={4}><br />LPG</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~5000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">500~10000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ3)</td>
      <td className="tg-q7v3">01020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={3}>H2</td>
      <td className="tg-q7v3">300~5000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">1~1000ppm</td>
      <td className="tg-q7v3">Grove-多通道气体传感器</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">烟雾</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NO2</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-多通道气体传感器</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NH3</td>
      <td className="tg-q7v3">1~500ppm</td>
      <td className="tg-q7v3">Grove-多通道气体传感器</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">异丁烷</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-多通道气体传感器</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CO2</td>
      <td className="tg-q7v3">0~2000ppm</td>
      <td className="tg-q7v3">Grove-CO2传感器</td>
      <td className="tg-q7v3">101020067</td>
    </tr>
  </tbody>
</table>

有时，我们想要在一个传感器中测试多种气体，那么我们应该如何选择呢？

<table className="tg" style={{tableLayout: 'fixed', width: 799}}>
  <thead>
    <tr>
      <th className="tg-l5ls">产品名称</th>
      <th className="tg-l5ls">SKU</th>
      <th className="tg-l5ls">可测量气体</th>
      <th className="tg-l5ls">范围</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />Grove-多通道气体传感器</td>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />101020088</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">酒精</td>
      <td className="tg-q7v3">10~500ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">丙烷</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NO2</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NH3</td>
      <td className="tg-q7v3">1~500p</td>
    </tr>
    <tr>
      <td className="tg-q7v3">异丁烷</td>
      <td className="tg-q7v3">&gt;1000pm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">1~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />Grove-气体传感器(MQ2)</td>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />101020055</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">酒精</td>
      <td className="tg-q7v3">100~2000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">5000^20000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">丙烷</td>
      <td className="tg-q7v3">200~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">200~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">丁烷</td>
      <td className="tg-q7v3">3000~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">300~500pp</td>
    </tr>
    <tr>
      <td className="tg-q7v3">烟雾</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />Grove-气体传感器(MQ3)</td>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />101020006</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">酒精</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">己烷</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">苯</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />Grove-气体传感器(MQ5)</td>
      <td className="tg-q7v3" rowSpan={5}><br /><br />101020056</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">酒精</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={3}>Grove-气体传感器(MQ9)</td>
      <td className="tg-q7v3" rowSpan={3}>101020045</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">20~2000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">500~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">500~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-粉尘传感器</td>
      <td className="tg-q7v3">101020012</td>
      <td className="tg-q7v3">粉尘</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-酒精传感器</td>
      <td className="tg-q7v3">101020044</td>
      <td className="tg-q7v3">酒精</td>
      <td className="tg-q7v3">20~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-气体传感器(O2)<br /></td>
      <td className="tg-q7v3">101020002</td>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000pp)</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-HCHO传感器</td>
      <td className="tg-q7v3">101020001</td>
      <td className="tg-q7v3">HCHO</td>
      <td className="tg-q7v3">5~40ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-CO2传感器</td>
      <td className="tg-q7v3">101020067</td>
      <td className="tg-q7v3">CO2</td>
      <td className="tg-q7v3">0~200ppm</td>
    </tr>
  </tbody>
</table>

以下是所有气体传感器到Bazaar的链接，选择您需要的那个！

- [Grove - 气体传感器(MQ-2)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ2.html)

- [Grove - 气体传感器(MQ-3)](https://www.seeedstudio.com/Grove-MQ3-Grove-Gas-Sensor.html)

- [Grove - 气体传感器(MQ-5)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ5.html)

- [Grove - 气体传感器(MQ-9)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ9.html)

<!-- - [Grove - Gas Sensor(O2)](https://www.seeedstudio.com/depot/grove-gas-sensoro2-p-1541.html?cPath=25_27) 未找到相应链接-->

- [Grove - HCHO传感器](https://www.seeedstudio.com/Grove-HCHO-Sensor.html)

- [Grove - 酒精传感器](https://www.seeedstudio.com/Grove-Alcohol-Sensor.html)

- [Grove - CO2 传感器](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z16.html)

- [Grove - 多通道气体传感器](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor.html)

- [Grove - 粉尘传感器](https://www.seeedstudio.com/Grove-Dust-Sensor-PPD42NS.html)

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