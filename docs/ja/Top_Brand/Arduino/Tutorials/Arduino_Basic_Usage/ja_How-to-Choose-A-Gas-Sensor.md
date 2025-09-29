---
description: ガスセンサーの選び方
title: ガスセンサーの選び方

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How-to-Choose-A-Gas-Sensor
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---


[www.seeedstudio.com](https://www.seeedstudio.com) で「ガスセンサー」を検索すると、多くのガスセンサーが見つかります。空気の成分は多様であり、特定のガスセンサーは1つまたは複数の空気成分を検出することができます。そのため、私たちは一連のガスセンサーを設計しました。

販売されているガスセンサーは約10種類あります。それらは似た名前を持っているため、混乱を招く可能性があります。以下の説明を通じて、適切なガスセンサーを簡単に選べるようになることを願っています。

異なるセンサーが同じガスを検出できることは明らかです。例えば、MQ-2、MQ-3、MQ-5アルコールセンサー、Grove – HCHOセンサーはアルコールを検出できます。では、アルコールセンサーが必要な場合、どれを選ぶべきでしょうか？上記のセンサーのほとんどがアルコールを検出できますが、それぞれのアルコール検出範囲が異なることを理解しておく必要があります。

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
      <th className="tg-l5ls">ガス</th>
      <th className="tg-l5ls">範囲</th>
      <th className="tg-l5ls">製品名</th>
      <th className="tg-l5ls">SKU</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3">ほこり</td>
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
      <td className="tg-q7v3" rowSpan={5}><br /><br />アルコール</td>
      <td className="tg-q7v3">200~10000ppm</td>
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
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">ヘキサン</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={2}>プロペン</td>
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
      <td className="tg-q7v3">ブタン</td>
      <td className="tg-q7v3">3000~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">ベンゼン</td>
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
      <td className="tg-q7v3">煙</td>
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
      <td className="tg-q7v3">イソブタン</td>
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

そして時には、1つのセンサーで多くのガスをテストしたい場合があります。その場合、どのように選べばよいでしょうか？

<table className="tg" style={{tableLayout: 'fixed', width: 799}}>
  <thead>
    <tr>
      <th className="tg-l5ls">製品名</th>
      <th className="tg-l5ls">SKU</th>
      <th className="tg-l5ls">測定可能なガス</th>
      <th className="tg-l5ls">範囲</th>
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
      <td className="tg-q7v3">アルコール</td>
      <td className="tg-q7v3">10~500ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">プロパン</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NO2</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NH3</td>
      <td className="tg-q7v3">1~500ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">イソブタン</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
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
      <td className="tg-q7v3">アルコール</td>
      <td className="tg-q7v3">100~2000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">5000~20000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">プロパン</td>
      <td className="tg-q7v3">200~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">200~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">ブタン</td>
      <td className="tg-q7v3">3000~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">300~500ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">煙</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />101020006</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">アルコール</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">ヘキサン</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">ベンジン</td>
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
      <td className="tg-q7v3">アルコール</td>
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
      <td className="tg-q7v3">ほこり</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Alcohol Sensor</td>
      <td className="tg-q7v3">101020044</td>
      <td className="tg-q7v3">アルコール</td>
      <td className="tg-q7v3">20~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Gas Sensor(O2)<br /></td>
      <td className="tg-q7v3">101020002</td>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000ppm)</td>
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

以下は各ガスセンサーのリンクです。必要なものを選んでください！

- [Grove - Gas Sensor(MQ-2)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ2.html)

- [Grove - Gas Sensor(MQ-3)](https://www.seeedstudio.com/Grove-MQ3-Grove-Gas-Sensor.html)

- [Grove - Gas Sensor(MQ-5)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ5.html)

- [Grove - Gas Sensor(MQ-9)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ9.html)

<!-- - [Grove - Gas Sensor(O2)](https://www.seeedstudio.com/depot/grove-gas-sensoro2-p-1541.html?cPath=25_27) 未找到相应链接-->

- [Grove - HCHO Sensor](https://www.seeedstudio.com/Grove-HCHO-Sensor.html)

- [Grove - Alcohol Sensor](https://www.seeedstudio.com/Grove-Alcohol-Sensor.html)

- [Grove - CO2 センサー](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z16.html)

- [Grove - マルチチャンネルガスセンサー](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor.html)

- [Grove - ダストセンサー](https://www.seeedstudio.com/Grove-Dust-Sensor-PPD42NS.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>