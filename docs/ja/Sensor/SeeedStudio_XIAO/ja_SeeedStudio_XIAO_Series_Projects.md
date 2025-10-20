---
description: XIAO シリーズの Wiki 機能ページ。
title: XIAO シリーズ展示
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_topic_page
last_update:
  date: 07/04/2023
  author: Citric
---

# Seeed Studio XIAO 展示

[Seeed Studio XIAO シリーズ](https://www.seeedstudio.com/xiao-series-page)は、中国語の「小」（小さい）という言葉にちなんで名付けられ、ESP32、SAMD21、RP2040、nRF52840、RP2350、RA4M1、MG24 の様々なハードウェアプラットフォームをベースとした小型開発ボードで構成されています。これらの爪サイズのボードは、コンパクトなフォームファクターに強力な機能を詰め込んでいます。

私たちのチームはコミュニティと共に、使用と開発を容易にするための豊富な Wiki、アプリケーション、ドキュメントのコレクションを作成しました。コミュニティ全体がこれらの有用なドキュメントをより効率的に見つけられるよう、このページでそれらをまとめてインデックスとして提供し、お探しのものを素早く見つけられるようにしています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/xiao_topicpage/compatible_software.jpg" /></div>

コミュニティからの愛と貢献なしには実現できませんでした。この活気あるエコシステムに貢献したい場合（空白部分を埋めるため）、[コミュニティの他の人々にインスピレーションを与えるあなた独自の開発の投稿](https://wiki.seeedstudio.com/ja/Contribution-Guide/)を歓迎します。

## 目次

<div align="center">
   <div style={{width: "auto", height: 450, overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', textAlign: 'left',}}>
 <ul>
  <li><a href="#product_guides"><strong>製品ガイド（入門、ピン使用法など）</strong></a></li>
  <ul>
  <li><a href="#xiao_samd21"><strong>XIAO SAMD21</strong></a></li>
  <li><a href="#xiao_rp2040"><strong>XIAO RP2040</strong></a></li>
  <li><a href="#xiao_nrf52840_(sense)"><strong>XIAO nRF52840 (Sense)</strong></a></li>
  <li><a href="#xiao_esp32c3"><strong>XIAO ESP32C3</strong></a></li>
  <li><a href="#xiao_esp32s3_(sense)"><strong>XIAO ESP32S3 (Sense)</strong></a></li>
  <li><a href="#xiao_esp32c6"><strong>XIAO ESP32C6</strong></a></li>
  <li><a href="#xiao_rp2350"><strong>XIAO RP2350</strong></a></li>
  <li><a href="#xiao_ra4m1"><strong>XIAO RA4M1</strong></a></li>
  <li><a href="#xiao_mg24_(sense)"><strong>XIAO MG24 (Sense)</strong></a></li>
  </ul>
  <li><a href="#supported_languages/platforms"><strong>サポートされている言語/プラットフォーム</strong></a></li>
  <ul>
  <li><a href="#platformio"><strong>PlatformIO</strong></a></li>
  <li><a href="#micropython"><strong>MicroPython</strong></a></li>
  <li><a href="#circuitpython"><strong>CircuitPython</strong></a></li>
  <li><a href="#embedded_swift"><strong>Embedded Swift</strong></a></li>
  <li><a href="#esp_idf"><strong>ESP IDF</strong></a></li>
  <li><a href="#rust"><strong>Rust</strong></a></li>
  <li><a href="#tinygo"><strong>TinyGo</strong></a></li>
  <li><a href="#microblocks"><strong>MicroBlocks</strong></a></li>
  <li><strong>Lua</strong></li>
  <li><strong>グラフィカルプログラミング言語</strong></li>
  </ul>
  <li><a href="#supported_rtos"><strong>サポートされている RTOS</strong></a></li>
  <ul>
  <li><a href="#zephyr"><strong>Zephyr</strong></a></li>
  <li><a href="#freertos"><strong>FreeRTOS</strong></a></li>
  <li><a href="#apache_nuttx_rtos"><strong>Apache NuttX RTOS</strong></a></li>
  </ul>
  <li><a href="#communications"><strong>通信</strong></a></li>
  <ul>
  <li><a href="#apache_kafka"><strong>Apache Kafka</strong></a></li>
  <li><a href="#matter"><strong>Matter</strong></a></li>
  <li><a href="#zigbee"><strong>Zigbee</strong></a></li>
  <li><a href="#espnow"><strong>ESP-NOW</strong></a></li>
  <li><a href="#meshtastic"><strong>Meshtastic</strong></a></li>
  <li><a href="#amazon_sidewalk"><strong>Amazon Sidewalk</strong></a></li>
  <li><a href="#blecon"><strong>Blecon</strong></a></li>
  <li><a href="https://github.com/marvinroger/async-mqtt-client" target="_blank"><strong>ESP32-MQTT</strong></a></li>
  </ul>
  <li><a href="#tinyml/embedded_machine_learningtinyml"><strong>TinyML/組み込み機械学習プラットフォーム</strong></a></li>
  <ul>
  <li><a href="#sensecraft_ai"><strong>SenseCraft AI</strong></a></li>
  <li><a href="#tensorflow_lite"><strong>TensorFlow Lite</strong></a></li>
  <li><a href="#edge_impulse"><strong>Edge Impulse</strong></a></li>
  </ul>
  <li><a href="#smart_home_and_automation"><strong>スマートホームと自動化</strong></a></li>
  <ul>
  <li><a href="#home_assistant_esphome"><strong>Home Assistant & ESPHome</strong></a></li>
  <li><strong>OpenHAB</strong></li>
  <li><a href="#tasmota"><strong>Tasmota</strong></a></li>
  </ul>
  <li><a href="#open_source_keyboard_firmware_support"><strong>オープンソースキーボードファームウェアサポート</strong></a></li>
  <ul>
  <li><a href="#qmk"><strong>QMK</strong></a></li>
  <li><a href="#zmk"><strong>ZMK</strong></a></li>
  </ul>
  <li><a href="#other_hot_applications"><strong>その他の人気アプリケーション</strong></a></li>
  <ul>
  <li><a href="#wled"><strong>WLED</strong></a></li>
  <li><a href="#chatgpt"><strong>ChatGPT</strong></a></li>
  <li><a href="#ffmpeg"><strong>FFmpeg</strong></a></li>
  <li><strong>OpenHD</strong></li>
  <li><strong>ESP32Cam</strong></li>
  <li><a href="#mros2_esp32"><strong>mROS2-ESP32</strong></a></li>
  </ul>
  <li><a href="#prototyping_tools_pcb_layout_stimulation"><strong>プロトタイピングツール（PCB レイアウト & シミュレーション）</strong></a></li>
  <ul>
  <li><a href="#fritzing"><strong>Fritzing</strong></a></li>
  <li><a href="#fluxai"><strong>FluxAI</strong></a></li>
  <li><a href="#wokwi"><strong>Wokwi</strong></a></li>
  </ul>
  <li><a href="#iot_clouds_and_iot_platforms"><strong>IoT クラウドと IoT プラットフォーム</strong></a></li>
  <ul>
  <li><a href="#aws_iot"><strong>AWS IoT</strong></a></li>
  <li><strong>Azure IoT</strong></li>
  <li><a href="#thingspeak"><strong>ThingSpeak</strong></a></li>
  <li><a href="#ubidots"><strong>Ubidots</strong></a></li>
  <li><strong>Blynk</strong></li>
  <li><strong>Losant</strong></li>
  <li><strong>InfluxDB</strong></li>
  </ul>
 </ul>
 </div>
</div>

## <span id="product_guides">製品ガイド</span>

<br></br>

<span id="xiao_samd21"><strong><font size={"4"}>XIAO SAMD21</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/" target="_blank">入門 Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/" target="_blank">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/" target="_blank">シングルサイクル IOBUS</a> by <a href="https://twitter.com/nanase_coder" target="_blank">@nanase_coder</a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_rp2040"><strong><font  size={"4"}>XIAO RP2040</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#getting-started" target="_blank">入門 Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#pin-multuiplexing-on-the-seeed-studio-xiao-rp2040" target="_blank">ピン使用法</a></th>
   <th style={{width:333, height:'auto'}}></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_nrf52840_(sense)"><strong><font  size={"4"}>XIAO nRF52840 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_BLE/" target="_blank">入門 Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Pin-Multiplexing/" target="_blank">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-IMU-Usage/" target="_blank">6軸 IMU 使用法</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-PDM-Usage/" target="_blank">PDM 使用法</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-ble-qspi-flash-usage/" target="_blank">QSPI Flash</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-NFC-Usage/" target="_blank">NFC 使用法</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Bluetooth_Usage/" target="_blank">Bluetooth ライブラリ (Seeed nRF52)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Bluetooth-Usage/" target="_blank">Bluetooth ライブラリ (Seeed nRF52 mbed)</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32c3"><strong><font  size={"4"}>XIAO ESP32C3</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/" target="_blank">入門 Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/" target="_blank">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_WiFi_Usage/" target="_blank">Wi-Fi 使用法</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Bluetooth_Usage/" target="_blank">Bluetooth 使用法</a></th>
   <th style={{width:333, height:'auto'}}></th>
            <th style={{width:333, height:'auto'}}></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32s3_(sense)"><strong><font  size={"4"}>XIAO ESP32S3 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/" target="_blank">入門 Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_pin_multiplexing/" target="_blank">ピン使用方法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_wifi_usage/" target="_blank">Wi-Fi使用方法</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_bluetooth/" target="_blank">Bluetooth使用方法</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_Consumption/" target="_blank">スリープモード</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_mic/" target="_blank">マイク使用方法</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/" target="_blank">カメラ使用方法</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/" target="_blank">MicroSDカード</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32c6"><strong><font  size={"4"}>XIAO ESP32C6</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/" target="_blank">入門ガイドWiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_pin_multiplexing_esp33c6/" target="_blank">ピン使用方法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_wifi_usage_esp32c6/" target="_blank">Wi-Fi使用方法</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_bluetooth/" target="_blank">Bluetooth使用方法</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_rp2350"><strong><font  size={"4"}>XIAO RP2350</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/getting-started-xiao-rp2350/" target="_blank">入門ガイドWiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank">ピン使用方法</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_ra4m1"><strong><font  size={"4"}>XIAO RA4M1</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/getting_started_xiao_ra4m1/" target="_blank">入門ガイドWiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_ra4m1_pin_multiplexing/" target="_blank">ピン使用方法</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_mg24_(sense)"><strong><font  size={"4"}>XIAO MG24 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_mg24_getting_started/" target="_blank">入門ガイドWiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank">ピン使用方法</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="supported_languages/platforms">サポートされている言語/プラットフォーム</span>

<br></br>
<div><a href="https://platformio.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio.png" style={{width:'auto', height:50}} /></a></div>

<span id="platformio"><strong><a href="https://platformio.org/" target="_blank">PlatformIO</a></strong></span>、Microsoft Visual Studio Codeで最も愛されているIDEソリューション。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/stable/boards/atmelsam/seeed_xiao.html" target="_blank">XIAO SAMD21 (Seeeduino XIAO)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_nrf52840_with_platform_io/" target="_blank">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html" target="_blank">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_with_platform_io/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html" target="_blank">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://taunoerik.art/2023/05/15/start-seeed-xiao-rp2040-on-platformio/" target="_blank">XIAO RP2040</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_rp2350_with_platform_io/" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_mg24_with_platform_io/" target="_blank"> XIAO MG24 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_ra4m1_with_platform_io/" target="_blank">XIAO RA4M1</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://micropython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython.png" style={{width:'auto', height:50}} /></a></div>

<span id="micropython"><strong><a href="https://micropython.org/" target="_blank">MicroPython</a></strong></span>、組み込みハードウェア上で直接動作するPython 3プログラミング言語の完全な実装。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-SAMD21-MicroPython/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-MicroPython/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c3_with_micropython/" target="_blank">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_with_micropython/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_Micropython/" target="_blank">XIAO ESP32S3 Senseのみ（カメラ、Wi-Fi）</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_NRF52/" target="_blank">XIAO nRF52840 Sense</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_micropython/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_RP2350/" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_micropython/" target="_blank">XIAO nRF54L15</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://circuitpython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython.png" style={{width:'auto', height:50}} /></a></div>

<span id="circuitpython"><strong><a href="https://circuitpython.org/" target="_blank">CircuitPython</a></strong></span>、低コストマイクロコントローラーボードでの実験とコーディング学習を簡素化するために設計されたプログラミング言語。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-CircuitPython/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-CircuitPython/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE_CircutPython/" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c3_with_circuitpython/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_project_circuitpython/" target="_blank">XIAO ESP32S3 Sense</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_with_circuitpython/" target="_blank">XIAO ESP32C6</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://circuitpython.org/board/seeeduino_xiao_rp2350/" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.swift.org/getting-started/embedded-swift/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/swift.png" style={{width:'auto', height:50}} /></a></div>

<span id="embedded_swift"><strong><a href="https://www.swift.org/getting-started/embedded-swift/" target="_blank">Embedded Swift</a></strong></span>、デスクトップやモバイルアプリ、サーバーバックエンド、システムソフトウェアの作成に適したスケーラブルな言語で、マイクロコントローラー上で動作
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
    <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-esp32-swift/" target="_blank">XIAO ESP32C6</a></th>
    <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
    <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://idf.espressif.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espressif.png" style={{width:'auto', height:50}} /></a></div>

<span id="esp_idf"><a href="https://idf.espressif.com/" target="_blank"><strong>ESP IDF</strong></a></span>、ESP32、ESP32-S、ESP32-Cシリーズ SoC 向けの Espressif 公式 IoT 開発フレームワークで、C や C++ などのプログラミング言語を使用してこれらのプラットフォーム上で汎用アプリケーション開発を行うための自己完結型 SDK を提供します。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_idf/" target="_blank">XIAO ESP32 シリーズ（入門）</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/getting_started_with_matter/" target="_blank">Matter 開発 1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32_matter_env/" target="_blank">Matter 開発 2</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/matter_development_framework/" target="_blank">Matter 開発 3</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.rust-lang.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rust.png" style={{width:'auto', height:50}} /></a></div>

<span id="rust"><strong><a href="https://www.rust-lang.org/" target="_blank">Rust</a></strong></span>、誰もが信頼性が高く効率的なソフトウェアを構築できるようにする言語です。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/atsamd-rs/atsamd/tree/master/boards/xiao_m0" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/en/tutorials/programing-in-rust-the-xiao-rp2040-board/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://forum.seeedstudio.com/t/rust-on-xiao-esp32s3/276724" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Wumpf/Seeed-nRF52840-Sense-projects" target="_blank">XIAO nRF52840 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://tinygo.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tinygo.png" style={{width:'auto', height:50}} /></a></div>

<span id="tinygo"><strong><a href="https://tinygo.org/" target="_blank">TinyGo</a></strong></span>、マイクロコントローラー、WebAssembly（wasm/wasi）、コマンドラインツールなどの小さな場所での使用を意図した Go コンパイラです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-ble/" target="_blank">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-rp2040/" target="_blank">XIAO RP2040</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://microblocks.fun/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/microblocks.png" style={{width:'auto', height:50}} /></a></div>

<span id="microblocks"><strong><a href="https://microblocks.fun/" target="_blank">MicroBlocks</a></strong></span>、Scratch にインスパイアされたフィジカルコンピューティング用のブロックプログラミング言語です。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_samd21_microblocks" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_rp2040_microblocks" target="_blank">XIAO RP2040</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_rp2350_microblocks" target="_blank">XIAO RP2350</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_ble_microblocks" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c3_microblocks" target="_blank">XIAO ESP32-C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_microblocks" target="_blank">XIAO ESP32-S3</a></th>
  </tr>
 </table>
</div>

## <span id="supported_rtos">サポートされている RTOS</span>

<br></br>
<div><a href="https://docs.zephyrproject.org/latest/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr.png" style={{width:'auto', height:70}} /></a></div>

<span id="zephyr"><strong><a href="https://docs.zephyrproject.org/latest/" target="_blank">Zephyr</a></strong></span>、複数のハードウェアアーキテクチャをサポートし、リソース制約のあるデバイス向けに最適化され、セキュリティを念頭に置いて構築されたスケーラブルなリアルタイムオペレーティングシステム（RTOS）です。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-SAMD21-Zephyr-RTOS/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-Zephyr-RTOS/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-nRF52840-Zephyr-RTOS/" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-ESP32C3-Zephyr/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_zephyr_rtos/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c6/doc/index.html" target="_blank">XIAO ESP32C6</a></th>  
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_ra4m1/doc/index.html" target="_blank">XIAO RA4M1</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_mg24/doc/index.html" target="_blank">XIAO MG24</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.freertos.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" style={{width:'auto', height:50}} /></a></div>

<span id="freertos"><strong><a href="https://www.freertos.org/" target="_blank">FreeRTOS</a></strong></span>、マイクロコントローラーと小型マイクロプロセッサー向けのリアルタイムオペレーティングシステムです。
<br></br>
<br></br>
<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
   <th style={{width:333, height:'auto'}}>XIAO nRF52840</th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-esp32s3-freertos/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://nuttx.apache.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nuttxrtos.png" style={{width:'auto', height:80}} /></a></div>

<span id="apache_nuttx_rtos"><strong><a href="https://nuttx.apache.org/" target="_blank">Apache NuttX RTOS</a></strong></span>、標準準拠と小さなフットプリントに重点を置いたリアルタイムオペレーティングシステム（RTOS）です。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/samd2l2/boards/xiao-seeeduino/index.html" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-rp2040-with-nuttx/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html" target="_blank">XIAO nRF52840</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/ra4m1/boards/xiao-ra4m1/index.html" target="_blank">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/xtensa/esp32s3/boards/esp32s3-xiao/index.html" target="_blank">XIAO ESP32S3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/boards/esp32c3-xiao/index.html" target="_blank">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="communications">通信</span>

<br></br>
<div><a href="https://kafka.apache.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/apachekafka.png" style={{width:'auto', height:50}} /></a></div>

<span id="apache_kafka"><strong><a href="https://kafka.apache.org/" target="_blank">Apache Kafka</a></strong></span>は、高性能データパイプライン、ストリーミング分析、データ統合、ミッションクリティカルなアプリケーションのために何千もの企業で使用されているオープンソースの分散イベントストリーミングプラットフォームです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_kafka/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/matter/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/matter.png" style={{width:'auto', height:50}} /></a></div>

<span id="matter"><strong><a href="https://csa-iot.org/all-solutions/matter/" target="_blank">Matter</a></strong></span>は、互換性のあるデバイスとシステムに信頼性の高い安全な接続を提供する業界統一標準プロトコルです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_idf/" target="_blank">XIAO ESP32 シリーズ (C3, S3, C6)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/zigbee/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zigbee.png" style={{width:'auto', height:50}} /></a></div>

<span id="zigbee"><strong><a href="https://csa-iot.org/all-solutions/zigbee/" target="_blank">Zigbee</a></strong></span>は、低コスト、低消費電力のワイヤレス IoT データネットワークの独特なニーズに対応するオープンなグローバル市場接続標準として開発されたワイヤレス技術です。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_zigbee_arduino/" target="_blank">XIAO ESP32C6（Arduino）</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_zigbee/" target="_blank">XIAO ESP32C6（IDF）</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espnow.png" style={{width:'auto', height:50}} /></a></div>

<span id="espnow"><strong><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now" target="_blank">ESP-NOW</a></strong></span>は、迅速な応答と低消費電力のワイヤレス通信プロトコルで、スマートホーム家電、リモートコントロール、センサーで広く使用されています。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_espnow/" target="_blank">XIAO ESP32 シリーズ (ESP32C3, ESP32S3, ESP32S3 Sense, ESP32C6)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://meshtastic.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mashtastic.png" style={{width:'auto', height:70}} /></a></div>

<span id="meshtastic"><strong><a href="https://meshtastic.org/" target="_blank">Meshtastic</a></strong></span>は、手頃な価格で低消費電力のデバイス上で動作するように構築されたオープンソース、オフグリッド、分散型のメッシュネットワークです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_meshtastic/" target="_blank">XIAO ESP32S3 for Meshtastic and LoRa</a></th>
   <th style={{width:333, height:'auto'}}>XIAO nRF52840 </th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://aws.amazon.com/iot-core/sidewalk/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/amazonsidewalk.png" style={{width:'auto', height:50}} /></a></div>

<span id="amazon_sidewalk"><strong><a href="https://aws.amazon.com/iot-core/sidewalk/" target="_blank">Amazon Sidewalk</a></strong></span>は、数十億のデバイスに持続的な接続を提供する暗号化された無料接続の長距離ネットワークです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-ble-sidewalk/" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.blecon.net/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/blecon.png" style={{width:'auto', height:60}} /></a></div>

<span id="blecon"><strong><a href="https://www.blecon.net/" target="_blank">Blecon</a></strong></span>は、Bluetooth Low Energy を使用して物理的な製品がクラウドアプリケーションと通信できるようにします。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://developer.blecon.net/modem-reference/boards-and-modules/seeed-xiao-nrf52840-breakout" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="tinyml/embedded_machine_learningtinyml">TinyML/組み込み機械学習プラットフォーム</span>

<br></br>
<div><a href="https://sensecraft.seeed.cc/ai/#/home" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/sensecraft.png" style={{width:'auto', height:50}} /></a></div>

<span id="sensecraft_ai"><strong><a href="https://sensecraft.seeed.cc/ai/#/home" target="_blank">SenseCraft AI</a></strong></span>、<strong>ノーコードモデルトレーニング、デプロイメントなどのためのワンストップソリューション。</strong>
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_edgelab/" target="_blank">XIAO ESP32S3 Sense (Model Assistant)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://ai.google.dev/edge/litert" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tensorflowlite.png" style={{width:'auto', height:50}} /></a></div>

<span id="tensorflow_lite"><strong><a href="https://ai.google.dev/edge/litert" target="_blank">TensorFlow Lite</a></strong></span>は、デバイス上 AI のための Google の高性能ランタイムです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-TFLite-Getting-Started/" target="_blank">XIAO nRF52840 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://edgeimpulse.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/edgeimpulse.png" style={{width:'auto', height:50}} /></a></div>

<span id="edge_impulse"><strong><a href="https://edgeimpulse.com/" target="_blank">Edge Impulse</a></strong></span>は、エッジデバイス上の機械学習のための主要な開発プラットフォームです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-TinyML/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-EI/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAOEI/" target="_blank">XIAO nRF52840 (Sense)-モーション認識</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/tinyml_course_Key_Word_Spotting/" target="_blank">XIAO ESP32S3 Sense (キーワード検出)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/tinyml_course_Image_classification_project/" target="_blank">XIAO ESP32S3 Sense (画像分類)</a></th>
  </tr>
 </table>
</div>

## <span id="smart_home_and_automation">スマートホームと自動化</span>

<br></br>
<div><a href="https://www.home-assistant.io/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/homoassiatant.png" style={{width:'auto', height:50}} /></a></div>
<div><a href="https://esphome.io/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/esphome.png" style={{width:'auto', height:50}} /></a></div>

<span id="home_assistant_esphome"><strong><a href="https://www.home-assistant.io/" target="_blank">Home Assistant</a> & <a href="https://esphome.io/" target="_blank">ESPHome</a></strong></span>、シンプルでありながら強力な設定ファイルでマイクロコントローラーを制御し、Home Assistant などのホームオートメーションシステムを通じてリモートで制御するシステムです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_esphome/" target="_blank">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/#grove-compatibility-list-with-esphome" target="_blank">XIAO ESP32 + Grove センサーを ESPHome 経由で HA に接続</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-esp32c3-esphome/" target="_blank">XIAO ESP32C3 + mmWave を HA に接続</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/" target="_blank">XIAO ESP32C3 を ESPHome に追加</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://github.com/arendst/Tasmota" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tasmota.png" style={{width:'auto', height:50}} /></a></div>

<span id="tasmota"><strong><a href="https://github.com/arendst/Tasmota" target="_blank">Tasmota</a></strong></span>、ESP8266 および ESP32 ベースのデバイス用の代替オープンソースファームウェアで、WebUI を使用した簡単な設定、OTA アップデート、タイマーやルールを使用した自動化、拡張性、MQTT、HTTP、シリアル、または KNX による完全なローカル制御を提供します。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C3.html" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3.html" target="_blank">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3_SENSE.html" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C6.html" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_mmwave_sensor_kit.html" target="_blank">XIAO ESP32C3 ベースの人体検知センサーキット存在センサー</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="open_source_keyboard_firmware_support">オープンソースキーボードファームウェアサポート</span>

<br></br>
<div><a href="https://qmk.fm/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/qmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="qmk"><strong><a href="https://qmk.fm/" target="_blank">QMK</a></strong></span>、Atmel AVR および Arm USB ファミリー用のオープンソースキーボードファームウェアです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/PJE66/hummingbird" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/kilipan/hummingbird_qmk" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}>XIAO nRF52840 (Sense)</th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://zmk.dev/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="zmk"><strong><a href="https://zmk.dev/" target="_blank">ZMK</a></strong></span>、Zephyr™ プロジェクトリアルタイムオペレーティングシステム（RTOS）上に構築されたオープンソースキーボードファームウェアです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO RP2350</th>
   <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="other_hot_applications">その他の人気アプリケーション</span>

<br></br>
<div><a href="https://kno.wled.ge/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wled.png" style={{width:'auto', height:50}} /></a></div>

<span id="wled"><strong><a href="https://kno.wled.ge/" target="_blank">WLED</a></strong></span>、NeoPixel（WS2812B、WS2811、SK6812）LED や SPI ベースのチップセットを制御するための ESP8266/ESP32 ウェブサーバーの高速で機能豊富な実装です。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.instructables.com/WLED-ON-XIAO-ESP32/" target="_blank">XIAO ESP32 シリーズ（C3、S3、S3 Sense）</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://chatgpt.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/chatgtp.png" style={{width:'auto', height:50}} /></a></div>

<span id="chatgpt"><strong><a href="https://chatgpt.com/" target="_blank">ChatGPT</a></strong></span>、InstructGPT の兄弟モデルで、プロンプト内の指示に従い、詳細な応答を提供するように訓練されています。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.ffmpeg.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ffmpeg.png" style={{width:'auto', height:50}} /></a></div>

<span id="ffmpeg"><strong><a href="https://www.ffmpeg.org/" target="_blank">FFmpeg</a></strong></span>、オーディオ、ビデオ、字幕、関連メタデータなどのマルチメディアコンテンツを処理するためのライブラリとツールのコレクションです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/tutoriels/esp32-timelapse/#google_vignette" target="_blank">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://github.com/mROS-base/mros2-esp32" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mrosbase.png" style={{width:'auto', height:50}} /></a></div>

<span id="mros2_esp32"><strong><a href="https://github.com/mROS-base/mros2-esp32" target="_blank">mROS2-ESP32</a></strong></span>、組み込み esp32 マイクロコントローラー上で ROS ノードを実行するための軽量ランタイム環境です。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/7" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/24" target="_blank">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/23" target="_blank">XIAO ESP32C6</a></th>
  </tr>
 </table>
</div>

## <span id="prototyping_tools_pcb_layout_stimulation">プロトタイピングツール（PCB レイアウト & シミュレーション）</span>

<br></br>
<div><a href="https://fritzing.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/fritzing.png" style={{width:'auto', height:50}} /></a></div>

<span id="fritzing"><strong><a href="https://fritzing.org/" target="_blank">Fritzing</a></strong></span>、メーカー、愛好家、教育者向けの電子設計およびプロトタイピングプラットフォームです。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20SAMD21(Seeeduino).fzpz" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2040.fzpz" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20nRF52840(Sense).fzpz" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C3.fzpz" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C6.fzpz" target="_blank">XIAO ESP32C6</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32S3(Sense).fzpz" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2350.fzpz" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/Seeed%20Studio%20XIAO%20RA4M1.fzpz" target="_blank">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.flux.ai/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/flux.png" style={{width:'auto', height:50}} /></a></div>

<span id="fluxai"><strong><a href="https://www.flux.ai/" target="_blank">FluxAI</a></strong></span>、AI コパイロットでプロフェッショナルな PCB を構築するより良い方法。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840" target="_blank">XIAO nRF52840</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840-sense" target="_blank">XIAO nRF52840 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3" target="_blank">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3" target="_blank">XIAO ESP32S3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense" target="_blank">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c6" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2350" target="_blank">XIAO RP2350</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-ra4m1" target="_blank">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://wokwi.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wokwi.png" style={{width:'auto', height:50}} /></a></div>

<span id="wokwi"><strong><a href="https://wokwi.com/" target="_blank">Wokwi</a></strong></span>、世界で最も先進的な ESP32 シミュレーター。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/410433244849526785" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411276781876475905" target="_blank">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411265368570177537" target="_blank">XIAO ESP32C6</a></th>
  </tr>
 </table>
</div>

## <span id="iot_clouds_and_iot_platforms">IoT クラウドと IoT プラットフォーム</span>

<br></br>
<div><a href="https://aws.amazon.com/iot/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/awsiot.png" style={{width:'auto', height:50}} /></a></div>

<span id="aws_iot"><strong><a href="https://aws.amazon.com/iot/" target="_blank">AWS IoT</a></strong></span>、デバイスを安全に接続・管理し、デバイスデータを収集・分析し、より大きなビジネス価値を生み出すソリューションを構築・展開することを可能にします。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_aws_iot/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://thingspeak.mathworks.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/thingspeak.png" style={{width:'auto', height:70}} /></a></div>

<span id="thingspeak"><strong><a href="https://thingspeak.mathworks.com/" target="_blank">ThingSpeak</a></strong></span>、MATLAB 分析機能を備えたオープン IoT プラットフォーム。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://elchika.com/article/433216e7-90a9-4f59-bbb3-4a7531588140/" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://ubidots.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ubidots.png" style={{width:'auto', height:50}} /></a></div>

<span id="ubidots"><strong><a href="https://ubidots.com/" target="_blank">Ubidots</a></strong></span>、完全な本格的 IoT アプリケーションを構築する時間やエネルギーがないエンジニアや開発者のためのローコード IoT 開発プラットフォーム。
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/L76K_Path_Tracking_on_Ubidots/" target="_blank">XIAO ESP32S3 + L76K GNSS モジュールによるトラッキング</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
