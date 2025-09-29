---
description: Grove - ガスセンサ V2（マルチチャンネル）
title: Grove - ガスセンサ V2（マルチチャンネル）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Multichannel-Gas-Sensor-V2
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" alt="pir" width={600} height="auto" /></p>




<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

:::tip
[Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサを選ぶ際に役立ちます。
:::

Grove - マルチチャンネルガスセンサ V2 は4つの測定ユニットを備えており、それぞれがさまざまな種類のガスに敏感です。これにより、同時に4セットのデータを取得することが可能です。また、これらの4セットのデータを使用して異なる種類のガスを判別することもできます。このモジュールに使用されているガスセンサはMEMS技術に基づいており、小型で測定の安定性が高いという利点があり、定量的な測定よりも定性的な測定に適しています。

## 特徴

- 1つのパッケージに完全に独立した4つのセンサ要素を搭載。
- 一酸化炭素（CO）、二酸化窒素（NO2）、エチルアルコール（C2H5CH）、揮発性有機化合物（VOC）など、さまざまなガスを検出可能。
- 定量的ではなく定性的な検出。
- コンパクトなサイズで簡単に展開可能。

## 仕様

|      項目      |                値               |
|:--------------:|:----------------------------------:|
|       MCU      |              STM32F030             |
|    インターフェース   |              Grove I2C             |
|   I2Cアドレス  |                0x08                |
| 出力電圧 |               3.3V~5V              |
|     センサ    | GM-102B; GM-302B; GM-502B; GM-702B |

**GM-102B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 828}}>
    <colgroup>
      <col style={{width: 412}} />
      <col style={{width: 416}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls"><span style={{fontWeight: 'bold'}}>製品タイプ</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-102B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>V0(V)</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5-4.5</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>V0-VS(V)</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≥1.0</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>負荷</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>調整可能</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>応答時間</span>（tres，S）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤30</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>回復時間</span>（trec，S）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤60</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>加熱抵抗</span>（RH，Ω）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>80±20</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>動作電圧</span>（V）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH=2.0±0.1 AC または DC	VC=5.0±0.1DC</span></td>
      </tr>
    </tbody>
  </table>
</div>



**GM-302B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>製品タイプ</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-302B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>標準パッケージ</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>セラミックパッケージ</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>濃度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1</span>～500ppm</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>標準回路条件</span><br /> </td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>ループ電圧</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤24V DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加熱電圧</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5V±0.1V AC または DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>負荷抵抗</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>調整可能</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={5}> <br /><br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>標準試験条件下でのガスセンサ特性</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加熱抵抗</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>60~100Ω</span>（室温）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加熱消費電力</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤50mW</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>感応体抵抗</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1KΩ</span>～30KΩ（50ppmエタノール時）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>感度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Rs（空気中）/Rs（50ppmエタノール時）≥3.0</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>濃度傾斜</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤0.9（R200ppm/R50ppmエタノール時）</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br /><span style={{fontWeight: 'bold'}}>標準試験条件</span></td>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>温度/湿度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>20℃±2℃</span>；55%±5%RH</td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>標準試験回路</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH:2.5V±0.1V</span>； VC:5.0V±0.1V</td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>予熱時間</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>48時間未満</span></td>
      </tr>
    </tbody>
  </table>
</div>

**GM-502B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 822}}>
    <colgroup>
      <col style={{width: 296}} />
      <col style={{width: 211}} />
      <col style={{width: 35}} />
      <col style={{width: 280}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>製品タイプ</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-502B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>標準パッケージ</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>セラミックパッケージ</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>濃度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1～500ppm</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><span style={{fontWeight: 'bold'}}>標準回路条件</span><br /><br /> </td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>ループ電圧</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤24V DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加熱電圧</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5V±0.1V AC または DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>負荷抵抗</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>調整可能</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={5}> <br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>標準試験条件下でのガスセンサー特性</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加熱抵抗</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>80Ω ± 20Ω（</span>室温）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加熱電力消費</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤50mW</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>感応体抵抗</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1KΩ～30KΩ (50ppm エタノール中)</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>感度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>R0 (空気中) / Rs (50ppm エタノール中) ≥3.0</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>濃度スロープ</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤0.9 (R200ppm / R50ppm エタノール)</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" rowSpan={2}><span style={{fontWeight: 'bold'}}>標準試験条件</span><br /></td>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>温度 / 湿度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>20℃ ± 2℃；55% ± 5%RH</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}>標準試験回路<br /></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH:2.5V ± 0.1V；</span><br /><span style={{fontWeight: 'normal'}}>VC:5.0V ± 0.1V</span></td>
      </tr>
    </tbody>
  </table>
</div>



**GM-702B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}\n.tg .tg-wzu8{background-color:#ffffff;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 822}}>
    <colgroup>
      <col style={{width: 304}} />
      <col style={{width: 211}} />
      <col style={{width: 35}} />
      <col style={{width: 272}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>製品タイプ</span></th>
        <th className="tg-v0nz">GM-702B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>標準パッケージ</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>セラミックパッケージ</span></td>
      </tr>
      <tr>
        <td className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>濃度</span></td>
        <td className="tg-v0nz">5～5000ppm(CO)</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={3}><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>標準回路条件</span><br /> </td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>ループ電圧</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-v0nz">≤24V DC</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><br /><span style={{fontWeight: 'normal'}}>加熱電圧</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-v0nz">2.5V±0.1V AC または DC（高温）<br />0.5V±0.1V AC または DC（低温）</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>負荷抵抗</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-v0nz">60s±1s（高温）；90s±1s（低温）</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={5}> <br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>標準試験条件下でのガスセンサー特性</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>加熱抵抗</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>調整可能</span></td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>加熱電力消費</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-v0nz">80Ω±20Ω（<span style={{fontWeight: 'normal'}}>室温</span>）</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>感応体抵抗</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-v0nz">≤50mW</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>感度</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-v0nz">1KΩ～30KΩ(150ppmCO中)</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>濃度スロープ</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-v0nz">R0(空気中)/Rs(150ppmCO中)≥3</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={2}><br /><span style={{fontWeight: 'bold'}}>標準試験条件</span><br /></td>
        <td className="tg-v0nz" colSpan={2}><span style={{fontWeight: 'normal'}}>温度 / 湿度</span></td>
        <td className="tg-v0nz">20℃±2℃；55%±5%RH</td>
      </tr>
      <tr>
        <td className="tg-v0nz" colSpan={2}><span style={{fontWeight: 'normal'}}>標準試験回路</span></td>
        <td className="tg-v0nz">VH: 2.5V±0.1V（高温）<br />0.5V±0.1V（低温） VC : 5.0V±0.1V</td>
      </tr>
    </tbody>
  </table>
</div>

## サンプルテスト結果

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0c4t{background-color:#ffffff;border-color:#000000;color:#fe0000;font-size:16px;font-weight:bold;text-align:left;
  vertical-align:top}
.tg .tg-bjhj{background-color:#FFF;border-color:#000000;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}
.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;
  vertical-align:top}
.tg .tg-i1ym{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:left;
  vertical-align:top}
.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-w9f5{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:middle}
.tg .tg-anz3{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:middle}
</style>

<table class="tg" style="undefined;table-layout: fixed; width: 818px">
<colgroup>
<col style="width: 43px">
<col style="width: 84px">
<col style="width: 100px">
<col style="width: 96px">
<col style="width: 112px">
<col style="width: 93px">
<col style="width: 92px">
<col style="width: 89px">
<col style="width: 109px">
</colgroup>
<thead>
  <tr>
    <th class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">日時：2019.06.27</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">試験条件：</span> <span style="font-weight:700;font-style:normal;text-decoration:none">VH=2.5V，VC=3.3V</span></td>
  </tr>
  <tr>
    <td class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">タイプ：GM-102B、GM-302B、GM-502B、GM-702B</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">1#</span></td>
    <td class="tg-l5ls" colspan="4">ガス：NO2</td>
    <td class="tg-l5ls" colspan="4">ガス：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初期値(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初期値(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.38</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.03</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.42</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.58</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.48</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.46</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.95</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.06</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.11</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.42</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.53</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.89</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.93</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.52</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.54</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.55</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.99</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.86</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.51</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">2#</span></td>
    <td class="tg-l5ls" colspan="4">ガス：NO2</td>
    <td class="tg-l5ls" colspan="4">ガス：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初期値(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初期値(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.22</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.92</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.49</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.45</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.24</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.21</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.09</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.74</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.45</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.49</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.96</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.51</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.88</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.37</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.77</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.3</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.47</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.74</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.73</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.99</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">3#</span></td>
    <td class="tg-l5ls" colspan="4">ガス：NO2</td>
    <td class="tg-l5ls" colspan="4">ガス：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初期値(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">初期値(V)</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.29</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.27</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.02</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.2</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.62</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.42</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.12</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.61</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.51</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.12</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.21</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.82</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.58</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.24</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.72</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.86</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.14</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.06</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.37</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.69</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.08</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.8</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.72</span></td>
  </tr>
  <tr>
    <td class="tg-w9f5" colspan="9"></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-style:normal;text-decoration:none">1#</span></td>
    <td class="tg-l5ls" colspan="4">ガス：CO</td>
    <td class="tg-w9f5" colspan="4"></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初期値(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">センサーの種類</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">測定されたガス</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.31</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.02</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">NO2</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.88</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.16</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">C2H5OH</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.02</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">VOC</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.22</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.09</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.87</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">CO</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">2#</span></td>
    <td class="tg-l5ls" colspan="4">ガス：CO</td>
    <td class="tg-0c4t" colspan="4" rowspan="12"><br><br><br><br><br>注意：ガスの判定に関しては、GM-102Bを例として挙げることができます。上記および横の4つのチャートからわかるように、GM-102Bは各ガス検出に3回参加しています。そして、NO2の雰囲気下で他のガスよりも差分が最大となりました。したがって、GM-102BはNO2に敏感であり、NO2を検出することができます。このことは他のセンサーやガスの種類にも適用されます。他の種類のガスの下に置かれると、センサーは最も差分を生じさせるガスを検出することができます。<br></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初期値(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.95</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.36</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.48</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.12</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.46</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.5</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.04</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.46</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">3#</span></td>
    <td class="tg-l5ls" colspan="4">ガス：CO</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">タイプ</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初期値(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差分(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.17</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.25</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.07</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.71</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.01</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.7</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.69</span></td>
  </tr>
  <tr>
    <td class="tg-anz3" rowspan="15"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/1.png" alt="Image" width="400" height="300"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/2.png" alt="Image" width="400" height="300"></td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
    <td class="tg-anz3" rowspan="15"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/3.png" alt="Image" width="400" height="300"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/4.png" alt="Image" width="400" height="300"></td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</tbody>
</table> -->

[結果](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/Grove-Gas-Sensor-V2(Multichannel)-result-outcome.pdf)

## 特性説明

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png" alt="pir" width={600} height="auto" /></p>

図中の Rs は、異なるガス濃度におけるセンサーの抵抗値を表しています。R0 は、清浄な空気中でのセンサーの抵抗値を表しています。図中のすべてのテストは標準試験条件下で行われています。黄色の線はトルエン、青の線はエタノール、赤の線はアセトン、紫の線はホルムアルデヒドを示しており、以下のグラフでも同様です。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png" alt="pir" width={600} height="auto" /></p>

グラフ3の出力電圧は、センサーの負荷抵抗（RL）に直列にかかる電圧を示しています。図中のテストは標準試験条件下で行われ、試験ガスは50ppmのエタノールです。グラフ4の出力電圧も、センサーの負荷抵抗（RL）に直列にかかる電圧を示しています。図中のすべてのテストは標準試験条件下で行われています。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png" alt="pir" width={600} height="auto" /></p>

グラフ5の Rs は、異なるガス濃度におけるセンサーの抵抗値を表しています。R0 は、清浄な空気中でのセンサーの抵抗値を表しています。図中のすべてのテストは標準試験条件下で行われています。黄色の線はトルエン、青の線はエタノール、赤の線はアセトン、紫の線はホルムアルデヒドを示しており、以下のグラフでも同様です。グラフ6では、Rs は50ppmエタノールおよびさまざまな温度/湿度条件下での抵抗値を表しています。Rs0 は50ppmエタノール、20℃、55%RH条件下での抵抗値を表しています。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png" alt="pir" width={600} height="auto" /></p>

グラフ7の出力電圧は、センサーの負荷抵抗（RL）に直列にかかる電圧を示しています。図中のテストは標準試験条件下で行われ、試験ガスは50ppmのエタノールです。グラフ8の出力電圧も、センサーの負荷抵抗（RL）に直列にかかる電圧を示しています。図中のすべてのテストは標準試験条件下で行われています。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png" alt="pir" width={600} height="auto" /></p>

グラフ9では、Rs は異なるガス濃度におけるセンサーの抵抗値を表しています。R0 は清浄な空気中でのセンサーの抵抗値を表しています。図中のすべてのテストは標準試験条件下で行われています。黒い線はCO、赤い線はCH4、紫の線はH2、ピンクの線は空気を示しています。グラフ10では、Rs は150ppmCOおよびさまざまな温度/湿度条件下での抵抗値を表しています。Rs0 は150ppmCO、20℃、55%RH条件下での抵抗値を表しています。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png" alt="pir" width={600} height="auto" /></p>

グラフ11の電圧は、センサーの負荷抵抗（RL）に直列にかかる電圧を示しています。図中のテストは標準試験条件下で行われ、試験ガスは150ppmCOです。グラフ12の出力電圧も、センサーの負荷抵抗（RL）に直列にかかる電圧を示しています。図中のすべてのテストは標準試験条件下で行われています。

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

#### 必要な材料

| Wio Terminal | Grove-Multichannel Gas Sensor V2 | 
|--------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" style={{width:250, height:'auto'}}/></div> |<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png" style={{width:250, height:'auto'}}/></div> |
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)|

#### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Connection+Image.jpg" alt="pir" width={500} height="auto" /></p>
 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Diagram.png" alt="pir" width={600} height="auto" /></p> 

:::note
ハードウェア接続画像のモジュールは、上記のハードウェア図の画像と同じ配置になっています。ハードウェア図で確認できるように、左側の枠で囲まれた部分がGroveインターフェースです。また、小さな穴のある4つの四角形はガスセンサーを指します。センサー付きのボードをWio Terminalに接続すると、ガスの情報が画面に表示されます。
:::

- **ステップ 1.** Grove - Multichannel Gas Sensor V2をGrove-Base ShieldのI2Cポートに接続します。Grove - Base ShieldをWio Terminalに差し込みます。そして、Wio TerminalをUSBケーブルでPCに接続します。

- **ステップ 2.** Githubから[ Grove_Multichannel_Gas_Sensor_v2 ライブラリ](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip)をダウンロードします。そして、[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してライブラリをインストールしてください。

- **ステップ 3.** コードをWio Terminalにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)を確認してください。

- **ステップ 4.** [TFT LCDライブラリのインストール方法](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/)を参照してTFT LCDライブラリをインストールしてください。最後に、以下のソフトウェアコードをアップロードし、データが正常に表示されることを確認してください。

#### ソフトウェアコード

```cpp
#include <TFT_eSPI.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

TFT_eSPI tft; 
// 標準フォントとGFXFF参照ハンドル
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト 

void setup() {
  // 初回実行時のセットアップコード
  tft.begin();
  tft.setRotation(3);
  spr.createSprite(tft.width(),tft.height()); 
  gas.begin(Wire, 0x08); // ハードウェアI2Cを使用
}

void loop() {
  // 繰り返し実行されるメインコード
  int val;
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique18pt7b); 
  spr.setTextColor(TFT_BLUE);
  spr.drawString("Gas Terminal", 60 - 15, 10 , 1);// カスタムフォントでテキストを表示
  for(int8_t line_index = 0;line_index < 5 ; line_index++)
  {
    spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
  }
  
  spr.setFreeFont(&FreeSansBoldOblique9pt7b);                 // フォントを選択
  // GM102B NO2センサー
  val = gas.getGM102B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("NO2:", 60 - 24, 100 -24 , 1);// カスタムフォントでテキストを表示
  spr.drawRoundRect(60 - 24,100,80,40,5,TFT_WHITE); 
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,60 - 20,100+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM302B C2H5CHセンサー
  val = gas.getGM302B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("C2H5CH:", 230 -24 , 100 - 24 , 1);// カスタムフォントでテキストを表示
  spr.drawRoundRect(230 - 24,100,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,230 - 20,100+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM502B VOCセンサー
  val = gas.getGM502B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("VOC:", 60 - 24, 180 -24 , 1);// カスタムフォントでテキストを表示
  spr.drawRoundRect(60 - 24,180,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,60 - 20,180+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM702B COセンサー
  val = gas.getGM702B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("CO:", 230 -24 , 180 - 24, 1);// カスタムフォントでテキストを表示
  spr.drawRoundRect(230 - 24 ,180,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val ,230 - 20 ,180+10,1);
  spr.setTextColor(TFT_GREEN);
  
  spr.pushSprite(0, 0);
  delay(100);

}
```

:::caution
- モジュールは揮発性シリコン化合物の蒸気にさらされることを避けてください。これにより感度が低下し、回復不能になる可能性があります。
- モジュールは高濃度の腐食性ガス（例：H2S、SOX、Cl2、HClなど）にさらされることを避けてください。これにより不可逆的な損傷を受ける可能性があります。
- モジュールを水や氷の中に置かないでください。
- モジュールが電源オンされると、センサーはプロセス中に一定の温度まで加熱されますが、これは正常な現象です。
- ユーザーはガス測定を開始する前にモジュールを必ず予熱してください。
- このセンサーで得られる値はアナログ値であり、定性的な測定結果としてのみ使用可能で、定量的な測定には使用できません。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020820/Grove+-+Multichannel+Gas+Sensor+V2.0_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove_Multichannel_Gas_Sensor_v2 ライブラリ](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip)
- **[PDF]** [GM-102B 技術パラメータ.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-102B+Technical+Parameter.pdf)
- **[PDF]** [GM-302B MEMS 技術パラメータ v2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-302B+MEMS+Technical+Parameterv2.1.pdf)
- **[PDF]** [サンプルテスト結果.pdf](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/Grove-Gas-Sensor-V2(Multichannel)-result-outcome.pdf)
- **[PDF]** [GM-502B MEMS VOC 技術パラメータ v2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-502B+MEMS+VOC+Technical+Parameter+v2.1.pdf)
- **[PDF]** [GM-702B 技術パラメータ(Ver1.1).pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-702B+Technical+Parameter(Ver1.1).pdf)

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力な APP サポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>