---
description: ORCH S4 気象ステーション
title: ORCH S4 気象ステーション
keywords:
- SenseCAP センサー_プローブ&アクセサリー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/ORCH-S4-Weather-Station
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![Orch S4 Weather Sensors](https://files.seeedstudio.com/wiki/Orch_S4_Weather_Station/01_16_2.png)

## 製品説明

ORCH S4 は、空気温度、湿度、大気圧、光の4つの要素を一体化したコンパクトな気象計で、優れた性能、超低消費電力、簡単な設置が特徴です。この製品は、空気温度、湿度、大気圧、光強度のパラメータを監視する4つのセンサーを統合しています。高い堅牢性を備えており、屋内外の過酷な環境での使用に特に適しています。

この気象計は、MODBUS（MODBUS-RTU/MODBUS-ASCII）およびSDI-12という2つの汎用標準プロトコルをサポートしています。3.6Vから16Vまでの広範な電源電圧範囲と超低消費電力により、長期的な気象監視を維持する耐久性を確保しています。内蔵されたデータ前処理機能により、ユーザーは新しいシステム開発や統合を便利に行うことができます。また、この気象送信機には太陽放射シールドが付属しており、太陽放射の影響を効果的に軽減し、データの精度をさらに保証します。工業用グレードの製品として、IP66エンクロージャーはセンサーを雨、ほこり、紫外線から保護します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ORCH-S4-A1A-p-4810.html)

## 特徴

* **優れた性能:** 高い信頼性、優れた安定性、超低消費電力
* **コンパクトサイズ:** 空気温度、湿度、大気圧、光を一体化
* **汎用プロトコル:** MODBUS RS-485 または SDI-12
* **広範な電源供給:** 3.6V ~ 16V
* **高い堅牢性:** IP66エンクロージャー、屋外用途や非常に複雑な環境に適応
* **ユーザーフレンドリー:** 内蔵データ前処理機能により、使いやすく、統合や設置が簡単

## 応用分野

![Applications](https://files.seeedstudio.com/wiki/Orch_S4_Weather_Station/applications.png)

* スマート農業
* 温室
* スマート産業
* スマートシティ
* 環境モニタリング
* その他のIoTセンサーアプリケーション

## 仕様

<table class="tg">
<thead>
<tr><th class="tg-qw69" colspan="2">MODBUS RS-485</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-855q">電源供給</td>
<td class="tg-855q">3.6V ~ 16V</td>
</tr>
<tr>
<td class="tg-855q">消費電流</td>
<td class="tg-855q">Vin=16V: 3.6mA (標準値)<br />Vin=12V: 4.7mA (標準値)<br />Vin=5V: 11.0mA (標準値)<br />Vin=3.6V: 14.5mA (標準値)</td>
</tr>
<tr>
<td class="tg-855q">ウォームアップ時間</td>
<td class="tg-855q">250ms (標準値)</td>
</tr>
<tr>
<td class="tg-855q">スキャン間隔</td>
<td class="tg-855q">1秒</td>
</tr>
<tr>
<td class="tg-855q">ポールレート</td>
<td class="tg-855q">1Hz</td>
</tr>
<tr>
<td class="tg-855q">応答時間</td>
<td class="tg-855q">≤ 4ms</td>
</tr>
</tbody>
</table>

<table class="tg">
<thead>
<tr><th class="tg-qw69">一般パラメータ</th><th class="tg-qw69"></th></tr>
</thead>
<tbody>
<tr>
<td class="tg-855q">製品モデル</td>
<td class="tg-855q">SenseCAP ORCH S4</td>
</tr>
<tr>
<td class="tg-855q">電源供給</td>
<td class="tg-855q">3.6 ~ 16V</td>
</tr>
<tr>
<td class="tg-855q">プロトコル</td>
<td class="tg-855q">MODBUS-RTU RS485/ MODBUS-ASCII RS485/ SDI-12 (v1.4)</td>
</tr>
<tr>
<td class="tg-855q">IP等級</td>
<td class="tg-855q">IP66 (防水ボックス)；IPX5 (太陽放射シールド)</td>
</tr>
<tr>
<td class="tg-855q">動作温度</td>
<td class="tg-855q">-40 ℃~ +65 ℃</td>
</tr>
<tr>
<td class="tg-855q">動作湿度</td>
<td class="tg-855q">0 ~ 100 %RH （結露しないこと）</td>
</tr>
</tbody>
</table>

<table class="tg">
<thead>
<tr><th class="tg-qw69" colspan="3">気圧</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-wo29">パラメータ</td>
<td class="tg-wo29">条件</td>
<td class="tg-wo29">値</td>
</tr>
<tr>
<td class="tg-wo29">範囲</td>
<td class="tg-wo29">-</td>
<td class="tg-wo29">300-1100 hPa</td>
</tr>
<tr>
<td class="tg-wo29">分解能</td>
<td class="tg-wo29">-</td>
<td class="tg-wo29">1 Pa</td>
</tr>
<tr>
<td class="tg-wo29">相対精度</td>
<td class="tg-wo29">700～900 hPa<br />25～40 °C</td>
<td class="tg-wo29"><span data-style="font-weight: 400; font-style: normal;">±0.12 hPa</span></td>
</tr>
<tr>
<td class="tg-wo29">絶対精度</td>
<td class="tg-wo29">300～1100 hPa<br />-20～0 °C</td>
<td class="tg-wo29"><span data-style="font-weight: 400; font-style: normal;">±1.7 hPa</span></td>
</tr>
<tr>
<td class="tg-wo29"><span data-style="font-weight: 400; font-style: normal;">絶対精度</span></td>
<td class="tg-wo29">300～1100 hPa<br />0～65 °C</td>
<td class="tg-wo29"><span data-style="font-weight: 400; font-style: normal;">±1.0 hPa</span></td>
</tr>
<tr>
<td class="tg-wo29">温度係数オフセット</td>
<td class="tg-wo29">900 hPa<br />25～40 °C</td>
<td class="tg-wo29">1.5 Pa/K</td>
</tr>
<tr>
<td class="tg-wo29">ドリフト</td>
<td class="tg-wo29">-</td>
<td class="tg-wo29"><span data-style="font-weight: 400; font-style: normal;">±1.0 hPa/年</span></td>
</tr>
</tbody>
</table>

<!-- <div class="wide-screen-container__39MF" data-is-widescreen="false" data-type="paragraph">

<style type="text/css" xml="space">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 10px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 10px;word-break:normal;}
.tg .tg-qw69{background-color:#9b9b9b;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-855q{background-color:#ffffff;border-color:#c0c0c0;text-align:left;vertical-align:top}
</style> -->

<table class="tg">
<thead>
<tr><th class="tg-qw69" colspan="2">気温</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-855q">範囲</td>
<td class="tg-855q">-40 °C ～ +85 °C</td>
</tr>
<tr>
<td class="tg-855q">精度</td>
<td class="tg-855q"><span data-style="font-weight: 400; font-style: normal;">±0.2 </span>°C</td>
</tr>
<tr>
<td class="tg-855q">分解能</td>
<td class="tg-855q">0.1 °C</td>
</tr>
<tr>
<td class="tg-855q">ドリフト</td>
<td class="tg-855q">&lt; 0.03 °C /年</td>
</tr>
<tr><th class="tg-qw69" colspan="2">湿度</th></tr>
<tr>
<td class="tg-855q">範囲</td>
<td class="tg-855q">0 ～ 100 %RH</td>
</tr>
<tr>
<td class="tg-855q">精度</td>
<td class="tg-855q"><span data-style="font-weight: 400; font-style: normal;">±1.5 %RH</span></td>
</tr>
<tr>
<td class="tg-855q">分解能</td>
<td class="tg-855q">1 %RH</td>
</tr>
<tr>
<td class="tg-855q">ドリフト</td>
<td class="tg-855q">&lt; 0.25 %RH/年</td>
</tr>
<tr><th class="tg-qw69" colspan="2">光強度</th></tr>
<tr>
<td class="tg-855q">範囲</td>
<td class="tg-855q">0 ～ 188000 Lux</td>
</tr>
<tr>
<td class="tg-855q">精度</td>
<td class="tg-855q"><span data-style="font-weight: 400; font-style: normal;">±1.5%</span></td>
</tr>
<tr>
<td class="tg-855q">分解能</td>
<td class="tg-855q">0.045 Lux</td>
</tr>
</tbody>
</table>

<div class="wide-screen-container__39MF" data-is-widescreen="false" data-type="paragraph"></div>

## 寸法

![d](https://files.seeedstudio.com/wiki/Orch_S4_Weather_Station/d1.png)

![d](https://files.seeedstudio.com/wiki/Orch_S4_Weather_Station/d2.png)

![d](https://files.seeedstudio.com/wiki/Orch_S4_Weather_Station/d3.png)

## ソース

* [SenseCAP ORCH S4 ユーザーガイド](https://files.seeedstudio.com/wiki/Orch_S4_Weather_Station/SenseCAP_ORCH_S4-User_Guide.pdf)

* [SenseCAP ORCH S4 仕様書 & データシート](https://files.seeedstudio.com/wiki/Orch_S4_Weather_Station/SenseCAP_ORCH_S4-DataSheet.pdf)