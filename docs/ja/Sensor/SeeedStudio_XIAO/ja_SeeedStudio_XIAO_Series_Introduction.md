---
description: SeeedStudio XIAO シリーズの紹介
title: XIAO 紹介
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/SeeedStudio_XIAO_Series_Introduction
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO 紹介

<br />
<br />
<br />

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/main.jpg" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Seeed Studio XIAO シリーズは、スペースを意識したプロジェクトで高性能とワイヤレス接続を必要とするために特別に設計された、親指サイズの強力なマイクロコントローラーユニット（MCU）のコレクションです。ESP32、RP2350、RP2040、nRF52840、SAMD21 などの人気ハードウェアプラットフォームの本質を体現し、Arduino 互換の XIAO シリーズは、エッジでの小型機械学習（TinyML）を活用するための完璧なツールセットです。</font>
    </div>
</div>
<br/> <br/>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/xiao-series-page" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 詳細を見る </font></span></strong></a>
</div>

<br/> <br/>

## Seeed Studio XIAO シリーズ比較表

<table align="center">
<font size={"2"}>
	<tr>
        <th></th>
	    <th><a href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">Seeed Studio XIAO SAMD21</a></th>
	    <th><a href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">Seeed Studio XIAO RP2040</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">Seeed Studio XIAO RP2350</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">Seeed Studio XIAO nRF52840</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">Seeed Studio XIAO nRF52840 Sense</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">Seeed Studio XIAO ESP32C3</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">Seeed Studio XIAO ESP32C6</a></th>
        <th><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">Seeed Studio XIAO ESP32S3</a></th>
        <th><a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">Seeed Studio XIAO ESP32S3 Sense</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html">Seeed Studio XIAO RA4M1</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html">Seeed Studio XIAO MG24</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">Seeed Studio XIAO MG24 Sense</a></th>
	</tr>
	<tr>
	    <th>SKU</th>
	    <td align="center">102010328</td>
	    <td align="center">102010428</td>
        <td align="center">102010550</td>
	    <td align="center">102010448</td>
	    <td align="center">102010469</td>
        <td align="center">113991054</td>
        <td align="center">113991254</td>
        <td align="center">113991114</td>
        <td align="center">113991115</td>
        <td align="center">102010551</td>
        <td align="center">102010590</td>
        <td align="center">102010610</td>
	</tr>
	<tr>
        <th>短い説明</th>
	    <td>汎用性が高く、安定性と互換性に優れる</td>
	    <td>Raspberry Pi RP2040エコシステムと互換性あり</td>
        <td>Raspberry Pi RP2350エコシステムと互換性あり</td>
	    <td>超低消費電力のBluetooth 5.0、消費者向け製品アプリケーションに適する</td>
	    <td>オンボードマイクと6軸IMUを備えたXIAO nRF52840の上位版</td>
        <td>WiFiとBLEを搭載、コストパフォーマンスに優れたRisc-V</td>
        <td>WiFi-6、BLE、Zigbee、Thread for Matterを搭載</td>
        <td>WiFiとBLEを搭載、高性能</td>
        <td>OV2640カメラとマイクを搭載したXIAO ESP32S3の上位版</td>
        <td>Renesas 32-bit ARM Cortex-M4 MCU、Arduino IDEと互換性あり</td>
        <td>Matter、Open Thread、Zigbee、Bluetooth Low Energy (BLE 5.3)、Bluetooth Mesh、独自の2.4 GHz</td>
        <td>6軸加速度センサーとマイクを搭載したXIAO MG24の上位版</td>
	</tr>
	<tr>
	    <th>チップ</th>
	    <td align="center">Microchip SAMD21</td>
	    <td align="center">Raspberry Pi RP2040</td>
        <td align="center">Raspberry Pi RP2350</td>
	    <td align="center">Nordic nRF52840</td>
	    <td align="center">Nordic nRF52840</td>
        <td align="center">Expressif ESP32C3</td>
        <td align="center">Expressif ESP32C6</td>
        <td align="center">Expressif ESP32S3</td>
        <td align="center">Expressif ESP32S3</td>
        <td align="center">Renesas RA4M1</td>
        <td align="center">Silicon Labs EFR32MG24</td>
        <td align="center">Silicon Labs EFR32MG24 Sense</td>
	</tr>
	<tr>
	    <th>アーキテクチャ</th>
	    <td align="center">Cortex-M0+<br />最大48MHzで動作</td>
	    <td align="center">デュアルコアCortex-M0+<br />最大133 MHzで動作</td>
        <td align="center">デュアルARM Cortex-M33<br />FPU付きで最大150 MHzで動作<br />デュアルHazard3 RISC‑Vコアを使用してRISC‑Vに切り替え可能</td>
	    <td align="center">Cortex-M4<br />最大64 MHzで動作</td>
	    <td align="center">Cortex-M4<br />最大64 MHzで動作</td>
        <td align="center">RISC-V<br/>最大160 MHzで動作</td>
        <td align="center">2つのRISC-Vプロセッサ<br />高性能プロセッサは最大160 MHzで動作<br/>低消費電力プロセッサは最大20 MHzで動作</td>
        <td align="center">デュアルコアXtensa LX7<br />最大240 MHzで動作</td>
        <td align="center">デュアルコアXtensa LX7<br />最大240 MHzで動作</td>
        <td align="center">Cortex-M4<br />FPU付きで最大48 MHzで動作</td>
        <td align="center">ARM Cortex-M33 <br />最大78 MHzで動作</td>
        <td align="center">ARM Cortex-M33 <br />最大78 MHzで動作</td>
	</tr>
	<tr>
	    <th>RAM</th>
	    <td align="center">32 KB SRAM</td>
	    <td align="center">264 KB SRAM</td>
        <td align="center">520kB SRAM<br/>2MB Flash</td>
	    <td align="center">256 KB RAM</td>
	    <td align="center">256 KB RAM</td>
        <td align="center">400 KB SRAM</td>
        <td align="center">512KB SRAM</td>
        <td align="center">512 KB SRAM<br />8MB PSRAM</td>
        <td align="center">512 KB SRAM<br />8MB PSRAM</td>
        <td align="center">32 KB SRAM</td>
        <td align="center">256kB RAM</td>
        <td align="center">256kB RAM</td>
	</tr>
    <tr>
	    <th>Flash&ROM (チップ)</th>
	    <td align="center">256KB</td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center">1MB</td>
	    <td align="center">1MB</td>
        <td align="center">4MB</td>
        <td align="center">4MB</td>
        <td align="center">384KB</td>
        <td align="center">384KB</td>
        <td align="center">256KB</td>
        <td align="center">1536KB+4MB</td>
        <td align="center">1536KB+4MB</td>
	</tr>
    <tr>
	    <th>Flash (オンボード)</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center">2MB</td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center">2MB</td>
	    <td align="center">2MB</td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center">8MB</td>
        <td align="center">8MB</td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	</tr>
    <tr>
	    <th>内蔵センサー</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center">IMU、マイク</td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center">OV2640カメラ、マイク</td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center">6軸加速度センサー、マイク</td>
	</tr>
    <tr>
	    <th>PWM/アナログピン</th>
	    <td align="center">11/11</td>
	    <td align="center">11/4</td>
        <td align="center">19/3</td>
	    <td align="center">11/6</td>
	    <td align="center">11/6</td>
        <td align="center">11/4</td>
        <td align="center">11/7</td>
        <td align="center">11/9</td>
        <td align="center">13/11</td>
        <td align="center">19/14</td>
        <td align="center">22/18</td>
        <td align="center">22/18</td>
	</tr>
    <tr>
	    <th>I2C/UART/SPI</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>Bluetooth</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>WiFi</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>リセットボタン</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>ブートボタン</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	</tr>
    <tr>
	    <th>ユーザーLED</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>バッテリーチャージLEDとチップ</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>低消費電力モード</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center">50μA</td>
	    <td align="center">5μA</td>
	    <td align="center">5μA</td>
        <td align="center">44μA</td>
        <td align="center">15μA</td>
        <td align="center">14μA</td>
        <td align="center">26.5mA</td>
        <td align="center">45μA</td>
        <td align="center">1.95μA</td>
        <td align="center">1.95μA</td>
	</tr>
   <tr>
	    <td colspan="11"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/xiao_topic_page/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"3"}>📚 互換プロジェクト</font></span></strong></a></div></td>        
	</tr>
    <tr>
	    <th>Arduino</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>PlatformIO</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	</tr>
    <tr>
	    <th>MicroPython</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	</tr>
    <tr>
        <th>CircuitPython</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
    </tr>
    <tr>
        <th>Zephyr</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>    
        <td align="center"><font size={"3"}>❌</font></td>   
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td> 
    </tr>
</font>
</table>

## Seeed Studio XIAO シリーズ対応アクセサリ
成長を続ける Seeed Studio XIAO エコシステムとして、Seeed Studio XIAO ボードと互換性のある幅広いアドオンを提供しています。[詳細はこちらをご覧ください](https://www.seeedstudio.com/xiao-series-page)。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/xiao_topicpage/add_on_accessories.png" /></div>

## Seeed Studio XIAO の使い方を始める

<table align="center">
<font size={"2"}>
    <tr>
        <th align="center"><strong>Wiki</strong></th>
        <th align="center"><strong>書籍</strong></th>
        <th align="center"><strong>Fab Academy</strong></th>
        <th align="center"><strong>ビデオ</strong></th>
        <th align="center"><strong>コース</strong></th>
    </tr>
    <tr>
        <td><strong>入門用Wiki</strong><br />Seeed Studio AEチーム & コミュニティによる</td>
        <td>パワー、小型ボード：ArduinoとTinyMLのマスター<br />Marcelo RovaiとLeo Fengによる</td>
        <td>Fab XIAO: 開発ボードをゼロから作る方法<br /><a href="https://www.linkedin.com/in/adri%C3%A1n-torres-oma%C3%B1a/">ADRIÁN TORRES</a>による</td>
        <td>Seeed XIAO を使ったTinyML<br/>Jim Bob Bennettによる</td>
        <td>Maker100-Eco (エコノミー) ロボティクス、IoT、TinyML機械学習コース<br />Jeremy Ellisによる</td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/xiao_topic_page/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Wiki</font></span></strong></a></div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-Kit-Courses/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 コース</font></span></strong></a></div></td> 
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://fabacademy.org/2020/labs/leon/students/adrian-torres/fabxiao.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Fab-Xiao</font></span></strong></a></div></td> 
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=ZsQ0-jXdnRY" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Part1</font></span></strong></a></div><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=-1EP3iqYYdU" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Part2</font></span></strong></a></div></td> 
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/hpssjellis/maker100-eco" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 GitHub</font></span></strong></a></div></td>  
    </tr>
</font>
</table>

## Seeed Studio XIAO のオープンソース化

### Seeed シリーズ Kicad ファイル

- **[kicad_sym]** [Kicad シンボル](https://files.seeedstudio.com/wiki/XIAO/Seeed_Studio_XIAO_Series-20240814.kicad_sym)
- **[ZIP]** [Kicad フットプリント](https://files.seeedstudio.com/wiki/XIAO/Seeed_Studio_XIAO_Series-20240814.pretty.zip)

### Seeed Studio XIAO SMAD21 オープンソース資料

- **[PDF]** [ATSAMD218A-MU データシート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO SAMD21 回路図](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[ZIP]** [Seeed Studio XIAO SAMD21 KiCAD ファイル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Seeed Studio XIAO SAMD21 DXF 寸法図](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Seeed Studio XIAO SAMD21 Eagle フットプリント](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO SAMD21 工場ファームウェア](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Seeed Studio XIAO SAMD21 ピンアウトシート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO SAMD21 3D モデル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)

### Seeed Studio XIAO RP2040 オープンソース資料

- **[PDF]** [RP2040 データシート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagle ファイル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040 DXF 寸法図](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040 Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3D モデル](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)


### Seeed Studio XIAO nRF52840 オープンソース資料

- **[PDF]** [nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagleファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840のDXF寸法図](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Eagleフットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)


### Seeed Studio XIAO nRF52840 Sense オープンソース資料

- **[PDF]** [nRF52840データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Sense回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCADファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagleファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 SenseのDXF寸法図](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Sense Eagleフットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 Senseピンアウトシート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO nRF52840 Sense 3Dモデル](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip)


### Seeed Studio XIAO nRF52840 (Sense) Plus オープンソース資料

- **[PDF]** [nRF52840データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_datasheet.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.0.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCADファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlAO_nRF52840_KiCAD_file.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 SenseのDXF寸法図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlA0_nRF52840_Sense_Dimension_in_DXF.dxf)

- **[ZIP]** [Seeed Studio XIAO Plus Base（ボトムパッドリードアウト付き）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)

- **[ZIP]** [Seeed Studio XIAO Plus Base（ボトムパッドリードアウトなし）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)


### Seeed Studio XIAO ESP32C3 オープンソース資料

- **[WiKi]** [Seeed Studio XIAO ESP32C3の初見](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)

- **[PDF]** [ESP32C3データシート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO ESP32C3回路図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCADライブラリ](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagleライブラリ](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)

- **[DXF]** [Seeed Studio XIAO ESP32C3のDXF寸法図](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)

- **[LBR]** [Seeed Studio XIAO ESP32C3 Eagleフットプリント](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32C3工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- **[XLSX]** [Seeed Studio XIAO ESP32C3ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO ESP32C3 3Dモデル](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)


### Seeed Studio XIAO ESP32C6 オープンソース資料

- **[PDF]** [ESP32C6データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32C6 KiCADライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH&PCB_24028.zip)

- **[PDF]** [Seeed Studio XIAO ESP32C6回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

- **[XLSX]** [Seeed Studio XIAO ESP32C6ピンアウトシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)


### Seeed Studio XIAO ESP32S3 オープンソース資料

- **[PDF]** [Seeed Studio XIAO ESP32S3回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagleライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3のDXF寸法図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagleフットプリント](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32S3工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3ピンアウトシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

- **[STEP]** [Seeed Studio XIAO ESP32S3 3Dモデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)


### Seeed Studio XIAO ESP32S3 Sense オープンソース資料

- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense 寸法 DXF (上面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense 寸法 DXF (底面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 工場ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

- **[STP]** [XIAO ESP32S3 Sense ハウジングデザイン (上面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)

- **[STP]** [XIAO ESP32S3 Sense ハウジングデザイン (底面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D モデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip)


### Seeed Studio XIAO ESP32S3 Plus オープンソース資料

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.0_SCH_PCB.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_KiCAD_Library.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus 寸法 DXF (上面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus 寸法 DXF (底面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Plus ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD ファイル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_V1.0_SCH%26PCB_KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO Plus Base ボトムパッド引き出し付き](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)

- **[ZIP]** [Seeed Studio XIAO Plus Base ボトムパッド引き出しなし](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

### Seeed Studio XIAO RP2350 Sense オープンソース資料

- **[PDF]** [Seeed Studio XIAO RP2350 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)

- **[XLSX]** [Seeed Studio XIAO RP2350 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)

- **[DXF]** [Seeed Studio XIAO RP2350 寸法 DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)

- **[STEP]** [Seeed Studio XIAO RP2350 3D STEP ファイル](https://grabcad.com/library/seeed-studio-xiao-rp2350-1)

### Seeed Studio XIAO MG24 Sense オープンソース資料

- **[PDF]** [Seeed Studio XIAO MG24 Sense データシート](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)

- **[PDF]** [Seeed Studio XIAO MG24 Sense 回路図](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)

- **[PDF]** [Seeed Studio XIAO MG24 Sense ワイヤレス SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)

- **[Kicad]** [Seeed Studio XIAO MG24 Sense フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[ZIP]** [Seeed Studio XIAO MG24 Sense PCB & SCH](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_Sense_v1.0_SCH&PCB.zip)

### Seeed Studio XIAO MG24 オープンソース資料

- **[PDF]** [Seeed Studio XIAO MG24 データシート](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)

- **[PDF]** [Seeed Studio XIAO MG24 回路図](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)

- **[PDF]** [Seeed Studio XIAO MG24 ワイヤレス SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)

- **[Kicad]** [Seeed Studio XIAO MG24 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[ZIP]** [Seeed Studio XIAO MG24 PCB & SCH](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_v1.0_SCH&PCB.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>