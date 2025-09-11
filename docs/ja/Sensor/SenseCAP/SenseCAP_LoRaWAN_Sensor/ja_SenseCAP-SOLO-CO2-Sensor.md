---
description: SenseCAP CO2センサー
title: SenseCAP CO2センサー
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP-SOLO-CO2-Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![NDIR CO2センサー](https://files.seeedstudio.com/wiki/NDIR_CO2_Sensor/101990665.png)

## 製品説明

これはNDIR（非分散型赤外線）技術に基づいたデジタルCO2濃度センサーで、空気中の単位体積あたりのCO2濃度を継続的に収集し計算し、汎用インターフェース形式で出力することができます。PTFEフィルムと保護エンクロージャを組み合わせた設計により、通気性能が向上しています。このセンサーは、より高精度、安定性、信頼性、低消費電力、そしてユーザーフレンドリーな特性を持っています。コンパクトなサイズで、さまざまなアプリケーションシナリオに簡単に統合できます。

このデジタルNDIR CO2濃度センサーは、MODBUS RS485シリアル通信、SDI-12通信プロトコルをサポートし、5-16Vの広範な電源電圧に対応しています。内蔵のキャリブレーション機能を備えており、屋内外の環境で広く使用できます。この製品は、シングルエアチャンバーとダブルチャンネルの両方を採用しています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SOLO-CO2-5000-A1-p-4757.html)

## 特徴

* 高性能：高精度、迅速な応答、優れた安定性
* MODBUS RS485およびSDI-12をサポート
* コンパクトサイズ、最高のコストパフォーマンス
* ユーザーフレンドリー：完全キャリブレーション済み、簡単な設置と統合
* 広範な電源供給範囲：5V ~ 16V
* 広範囲＆高精度：400ppm ~ 5,000 ppm、± (50ppm+5%*MV)

## アプリケーション

![アプリケーション](https://files.seeedstudio.com/wiki/NDIR_CO2_Sensor/Applications.png)

* スマート農業
* スマートシティ
* 建物の換気システム
* 産業用換気システム
* 空港、鉄道駅、ショッピングモール、家庭、オフィス、教室など
* 空気質測定と指標のための公共の場所
* CO2レベルを監視するための研究室、倉庫、その他の場所

## 仕様
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-2fdn{border-color:#9b9b9b;text-align:left;vertical-align:top}
.tg .tg-e2cz{background-color:#9b9b9b;border-color:#9b9b9b;color:#ffffff;text-align:left;vertical-align:top}
</style> -->
<table class="tg">
<thead>
<tr><th class="tg-e2cz">CO2</th><th class="tg-5b55"></th></tr>
</thead>
<tbody>
<tr>
<td class="tg-qya6">範囲</td>
<td class="tg-qya6">400~5000 ppm</td>
</tr>
<tr>
<td class="tg-qya6">精度</td>
<td class="tg-qya6"><span data-style="font-weight: 400; font-style: normal;">± (50ppm+5%*MV)(400~3000ppmの場合)</span></td>
</tr>
<tr>
<td class="tg-qya6">分解能</td>
<td class="tg-qya6">1 ppm</td>
</tr>
</tbody>
<thead>
<tr><th class="tg-e2cz">一般パラメータ</th><th class="tg-5b55"></th></tr>
</thead>
<tbody>
<tr>
<td class="tg-qya6">製品モデル</td>
<td class="tg-qya6">SOLO CO2 5000</td>
</tr>
<tr>
<td class="tg-qya6">インターフェース</td>
<td class="tg-qya6">RS-485</td>
</tr>
<tr>
<td class="tg-qya6">プロトコル</td>
<td class="tg-qya6">MODBUS-RTU RS485/ MODBUS-ASCII RS485/ SDI-12 (v1.4)</td>
</tr>
<tr>
<td class="tg-qya6">応答時間 (T90)</td>
<td class="tg-qya6">&lt;5分で90%のステップ変化（典型値）</td>
</tr>
<tr>
<td class="tg-qya6">IP等級</td>
<td class="tg-qya6">IPx5<br />(PTFEフィルターは防水ではありません)</td>
</tr>
<tr>
<td class="tg-qya6">動作温度</td>
<td class="tg-qya6">-10 ~ +50 °C</td>
</tr>
<tr>
<td class="tg-qya6">動作湿度</td>
<td class="tg-qya6">0 ~ 85% (結露しないこと)</td>
</tr>
<tr>
<td class="tg-qya6">ケーブル長</td>
<td class="tg-qya6">2メートル</td>
</tr>
<tr>
<td class="tg-qya6">プローブ寸法</td>
<td class="tg-qya6">110* 50 * 35 mm</td>
</tr>
<tr>
<td class="tg-qya6">デバイス重量</td>
<td class="tg-qya6">300g</td>
</tr>
<tr></tr>
</tbody>
<thead>
<tr><th class="tg-e2cz">MODBUS RS-485</th><th class="tg-5b55"></th></tr>
</thead>
<tbody>
<tr>
<td class="tg-qya6">電源供給</td>
<td class="tg-qya6">5V ~ 16V</td>
</tr>
<tr>
<td class="tg-qya6">消費電流</td>
<td class="tg-qya6">Vin=16V; 22mA (典型値)<br />Vin=12V; 28mA (典型値)<br /><span data-style="font-weight: 400; font-style: normal;">Vin=9V; 34mA (典型値)</span><br /><span data-style="font-weight: 400; font-style: normal;">Vin=5V; 57mA (典型値)</span></td>
</tr>
<tr>
<td class="tg-qya6">ウォームアップ時間</td>
<td class="tg-qya6">120秒 (典型値)</td>
</tr>
<tr>
<td class="tg-qya6">スキャン間隔</td>
<td class="tg-qya6">1秒</td>
</tr>
<tr>
<td class="tg-qya6">ポールレート</td>
<td class="tg-qya6">1Hz</td>
</tr>
<tr>
<td class="tg-qya6">応答時間</td>
<td class="tg-qya6"><span data-style="font-style: normal;">≤ 4ms</span></td>
</tr>
<tr></tr>
</tbody>
<thead>
<tr><th class="tg-e2cz">SDI-12</th><th class="tg-5b55"></th></tr>
</thead>
<tbody>
<tr>
<td class="tg-qya6">電源供給</td>
<td class="tg-qya6">5V ~ 16V</td>
</tr>
<tr>
<td class="tg-qya6">消費電流 <br />(スリープモード)</td>
<td class="tg-qya6">Vin=16V; 28mA (典型値)<br />Vin=12V; 29mA (典型値)<br /><span data-style="font-weight: 400; font-style: normal;">Vin=9V; 30mA (典型値)</span><br /><span data-style="font-weight: 400; font-style: normal;">Vin=5V; 35mA (典型値)</span></td>
</tr>
<tr>
<td class="tg-qya6">消費電流 <br />(アクティブモード)</td>
<td class="tg-qya6">Vin=16V; 20mA (典型値)<br />Vin=12V; 27mA (典型値)<br /><span data-style="font-weight: 400; font-style: normal;">Vin=9V; 33mA (典型値)</span><br /><span data-style="font-weight: 400; font-style: normal;">Vin=5V; 55mA (典型値)</span></td>
</tr>
<tr>
<td class="tg-qya6">ウォームアップ時間</td>
<td class="tg-qya6">15ms</td>
</tr>
<tr>
<td class="tg-qya6">スキャン間隔</td>
<td class="tg-qya6">120秒 (典型値)</td>
</tr>
</tbody>
</table>

## 寸法

![d](https://files.seeedstudio.com/wiki/NDIR_CO2_Sensor/dimension.png)

## 電気配線

![ew](https://files.seeedstudio.com/wiki/NDIR_CO2_Sensor/wiring.jpg)

## ソース

* [SenseCap Solo CO2 ユーザーガイド](https://files.seeedstudio.com/wiki/NDIR_CO2_Sensor/SenseCAP_SOLO_CO2_5000-UserGuide.pdf)

* [SenseCap Solo CO2 データシート](https://files.seeedstudio.com/wiki/NDIR_CO2_Sensor/SenseCAP_SOLO_CO2_5000-Datasheet.pdf)