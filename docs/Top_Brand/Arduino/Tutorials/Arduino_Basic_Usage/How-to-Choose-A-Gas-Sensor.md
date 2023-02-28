---
description: How to Choose A Gas Sensor
title: How to Choose A Gas Sensor
tags:
  - Tutorial
keywords:
  - Tutorial
image: https://avatars.githubusercontent.com/u/10758833
slug: /How-to-Choose-A-Gas-Sensor
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---

If you search “gas sensor” on [www.seeedstudio.com](https://www.seeedstudio.com) , you can find a lot of gas sensor. We know that the air component is diverse, and a certain gas sensor can detect one or more air components, so we designed a series of gas sensor.

There are about 10 kind of gas sensor for sale. They have similar name, it’s likely to cause confusion. Hope that through the following presentation, we can help you to choose the appropriate gas sensor easily.

It’s obvious that different sensor can detect the same gas. Such as MQ-2, MQ-3, MQ-5 Alcohol Sensor, Grove – HCHO Sensor can detect Alcohol. So if you want an alcohol sensor, then which on should you chosen? Although most of the above sensors are able to detect Alcohol, but you should know that they have different range to Alcohol.

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
      <th className="tg-l5ls">Gas</th>
      <th className="tg-l5ls">Range</th>
      <th className="tg-l5ls">Product Name</th>
      <th className="tg-l5ls">SKU</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3">Dust</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
      <td className="tg-q7v3">Grove-Dust Sensor</td>
      <td className="tg-q7v3">101020012</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">20~2000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0~1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />Alcohol</td>
      <td className="tg-q7v3">200~10000pp</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">100ppm~2000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">10~500ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">20~1000ppm</td>
      <td className="tg-q7v3">Grove-Alcohol Sensor</td>
      <td className="tg-q7v3">101020044</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000ppm)</td>
      <td className="tg-q7v3">Grove-Gas Sensor(O2)</td>
      <td className="tg-q7v3">101020002</td>
    </tr>
    <tr>
      <td className="tg-q7v3">HCHO</td>
      <td className="tg-q7v3">5~40ppm</td>
      <td className="tg-q7v3">Grove-HCHO Sensor</td>
      <td className="tg-q7v3">101020001</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />CH4</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">5000~20000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">500~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">&gt;1000mmp</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Hexane</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={2}>Propene</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Butane</td>
      <td className="tg-q7v3">3000~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Benzine</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">01020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={4}><br />LPG</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">500~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">01020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={3}>H2</td>
      <td className="tg-q7v3">300~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">1~1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Smoke</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NO2</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NH3</td>
      <td className="tg-q7v3">1~500ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Iso-butane</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CO2</td>
      <td className="tg-q7v3">0~2000ppm</td>
      <td className="tg-q7v3">Grove-CO2 Sensor</td>
      <td className="tg-q7v3">101020067</td>
    </tr>
  </tbody>
</table>

And sometimes, we want to test many gases in one sensor, so how should we choose it ?

<table className="tg" style={{tableLayout: 'fixed', width: 799}}>
  <thead>
    <tr>
      <th className="tg-l5ls">Product Name</th>
      <th className="tg-l5ls">SKU</th>
      <th className="tg-l5ls">Measurable Gases</th>
      <th className="tg-l5ls">Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />101020088</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">10~500ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Propane</td>
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
      <td className="tg-q7v3">Iso-butane</td>
      <td className="tg-q7v3">&gt;1000pm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">1~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />101020055</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">100~2000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">5000^20000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Propane</td>
      <td className="tg-q7v3">200~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">200~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Butane</td>
      <td className="tg-q7v3">3000~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">300~500pp</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Smoke</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />101020006</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Hexane</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Benzine</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3" rowSpan={5}><br /><br />101020056</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Alcohol</td>
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
      <td className="tg-q7v3" rowSpan={3}>Grove-Gas Sensor(MQ9)</td>
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
      <td className="tg-q7v3">Grove-Dust Sensor</td>
      <td className="tg-q7v3">101020012</td>
      <td className="tg-q7v3">Dust</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Alcohol Sensor</td>
      <td className="tg-q7v3">101020044</td>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">20~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Gas Sensor(O2)<br /></td>
      <td className="tg-q7v3">101020002</td>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000pp)</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-HCHO Sensor</td>
      <td className="tg-q7v3">101020001</td>
      <td className="tg-q7v3">HCHO</td>
      <td className="tg-q7v3">5~40ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-CO2 Sensor</td>
      <td className="tg-q7v3">101020067</td>
      <td className="tg-q7v3">CO2</td>
      <td className="tg-q7v3">0~200ppm</td>
    </tr>
  </tbody>
</table>

Following is the link of all gases to Bazaar, choose the one you needed!

- [Grove - Gas Sensor(MQ-2)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ2.html)

- [Grove - Gas Sensor(MQ-3)](https://www.seeedstudio.com/Grove-MQ3-Grove-Gas-Sensor.html)

- [Grove - Gas Sensor(MQ-5)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ5.html)

- [Grove - Gas Sensor(MQ-9)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ9.html)

<!-- - [Grove - Gas Sensor(O2)](https://www.seeedstudio.com/depot/grove-gas-sensoro2-p-1541.html?cPath=25_27) 未找到相应链接-->

- [Grove - HCHO Sensor](https://www.seeedstudio.com/Grove-HCHO-Sensor.html)

- [Grove - Alcohol Sensor](https://www.seeedstudio.com/Grove-Alcohol-Sensor.html)

- [Grove - CO2 Sensor](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z16.html)

- [Grove - Multichannel Gas Sensor](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor.html)

- [Grove - Dust Sensor](https://www.seeedstudio.com/Grove-Dust-Sensor-PPD42NS.html)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
