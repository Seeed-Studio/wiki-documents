---
description: XIAOシリーズのWiki機能ページ。
title: XIAOシリーズの展示
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_topic_page
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO 展示

[Seeed Studio XIAOシリーズ](https://www.seeedstudio.com/xiao-series-page)は、中国語で「小さい」を意味する言葉にちなんで名付けられた、ESP32、SAMD21、RP2040、nRF52840、RP2350、RA4M1、MG24などのさまざまなハードウェアプラットフォームに基づいた小型開発ボードで構成されています。これらの爪サイズのボードは、コンパクトな形状に強力な機能を詰め込んでいます。

私たちのチームはコミュニティと協力して、使いやすさと開発の容易さを実現するために、豊富なWiki、アプリケーション、ドキュメントのコレクションを作成しました。コミュニティ全体がこれらの有用なドキュメントを効率的に見つけられるように、このページでそれらをまとめ、必要なものを迅速に見つけられるインデックスとして提供しています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/xiao_topicpage/compatible_software.jpg" /></div>

私たちは、コミュニティからの愛と貢献なしではこれを実現できませんでした。そして、この活気あるエコシステムに貢献したい場合（空白部分を埋めるために）、[あなた自身のユニークな開発をコミュニティの他の人々にインスピレーションを与えるために提出することを歓迎します](https://wiki.seeedstudio.com/ja/Contribution-Guide/)。

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
		<li><a href="#supported_languages/platforms"><strong>対応言語/プラットフォーム</strong></a></li>
		<ul>
		<li><a href="#platformio"><strong>PlatformIO</strong></a></li>
		<li><a href="#micropython"><strong>MicroPython</strong></a></li>
		<li><a href="#circuitpython"><strong>CircuitPython</strong></a></li>
		<li><a href="#embedded_swift"><strong>Embedded Swift</strong></a></li>
		<li><a href="#esp_idf"><strong>ESP IDF</strong></a></li>
		<li><a href="#rust"><strong>Rust</strong></a></li>
		<li><a href="#tinygo"><strong>TinyGo</strong></a></li>
		<li><strong>Lua</strong></li>
		<li><strong>グラフィカルプログラミング言語</strong></li>
		</ul>
		<li><a href="#supported_rtos"><strong>対応RTOS</strong></a></li>
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
		<li><a href="#open_source_keyboard_firmware_support"><strong>オープンソースキーボードファームウェアのサポート</strong></a></li>
		<ul>
		<li><a href="#qmk"><strong>QMK</strong></a></li>
		<li><a href="#zmk"><strong>ZMK</strong></a></li>
		</ul>
		<li><a href="#other_hot_applications"><strong>その他の注目アプリケーション</strong></a></li>
		<ul>
		<li><a href="#wled"><strong>WLED</strong></a></li>
		<li><a href="#chatgpt"><strong>ChatGPT</strong></a></li>
		<li><a href="#ffmpeg"><strong>FFmpeg</strong></a></li>
		<li><strong>OpenHD</strong></li>
		<li><strong>ESP32Cam</strong></li>
		<li><a href="#mros2_esp32"><strong>mROS2-ESP32</strong></a></li>
		</ul>
		<li><a href="#prototyping_tools_pcb_layout_stimulation"><strong>プロトタイピングツール（PCBレイアウトとシミュレーション）</strong></a></li>
		<ul>
		<li><a href="#fritzing"><strong>Fritzing</strong></a></li>
		<li><a href="#fluxai"><strong>FluxAI</strong></a></li>
		<li><a href="#wokwi"><strong>Wokwi</strong></a></li>
		</ul>
		<li><a href="#iot_clouds_and_iot_platforms"><strong>IoTクラウドとIoTプラットフォーム</strong></a></li>
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
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/">はじめに WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/">単一サイクルIOBUS</a> by <a href="https://twitter.com/nanase_coder">@nanase_coder</a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_rp2040"><strong><font  size={"4"}>XIAO RP2040</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#getting-started">はじめに WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#pin-multuiplexing-on-the-seeed-studio-xiao-rp2040">ピン使用法</a></th>
			<th style={{width:333, height:'auto'}}></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_nrf52840_(sense)"><strong><font  size={"4"}>XIAO nRF52840 (Sense)</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_BLE/">はじめに WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Pin-Multiplexing/">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-IMU-Usage/">6軸IMU使用法</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-PDM-Usage/">PDM使用法</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-ble-qspi-flash-usage/">QSPIフラッシュ</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-NFC-Usage/">NFC使用法</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Bluetooth_Usage/">Bluetoothライブラリ (Seeed nRF52)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-Bluetooth-Usage/">Bluetoothライブラリ (Seeed nRF52 mbed)</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_esp32c3"><strong><font  size={"4"}>XIAO ESP32C3</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/">はじめに WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_WiFi_Usage/">Wi-Fi使用法</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Bluetooth_Usage/">Bluetooth使用法</a></th>
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
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/">はじめに WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_pin_multiplexing/">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_wifi_usage/">Wi-Fi使用法</a></th>
		</tr>
		<tr>			
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_bluetooth/">Bluetooth使用法</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_Consumption/">スリープモード</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_mic/">マイク使用法</a></th>          
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/">カメラ使用法</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/">MicroSDカード</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_esp32c6"><strong><font  size={"4"}>XIAO ESP32C6</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/">はじめに WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_pin_multiplexing_esp33c6/">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_wifi_usage_esp32c6/">Wi-Fi使用法</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_bluetooth/">Bluetooth使用法</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_rp2350"><strong><font  size={"4"}>XIAO RP2350</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/getting-started-xiao-rp2350/">はじめに WiKi</a></th>
			<th style={{width:333, height:'auto'}}><a href="">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_ra4m1"><strong><font size={"4"}>XIAO RA4M1</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/getting_started_xiao_ra4m1/">はじめに Wiki</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_ra4m1_pin_multiplexing/">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_mg24_(sense)"><strong><font size={"4"}>XIAO MG24 (Sense)</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_mg24_getting_started/">はじめに Wiki</a></th>
			<th style={{width:333, height:'auto'}}><a href="">ピン使用法</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="supported_languages/platforms">対応言語/プラットフォーム</span>

<br></br>
<div><a href="https://platformio.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio.png" style={{width:'auto', height:50}} /></a></div>

<span id="platformio"><strong><a href="https://platformio.org/">PlatformIO</a></strong></span>、Microsoft Visual Studio Code向けの最も人気のあるIDEソリューション。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/stable/boards/atmelsam/seeed_xiao.html">XIAO SAMD21 (Seeeduino XIAO)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_nrf52840_with_platform_io/">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html">XIAO ESP32C3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_with_platform_io/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://taunoerik.art/2023/05/15/start-seeed-xiao-rp2040-on-platformio/">XIAO RP2040</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_rp2350_with_platform_io/">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_mg24_with_platform_io/"> XIAO MG24 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_ra4m1_with_platform_io/">XIAO RA4M1</a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://micropython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython.png" style={{width:'auto', height:50}} /></a></div>

<span id="micropython"><strong><a href="https://micropython.org/">MicroPython</a></strong></span>、組み込みハードウェア上で直接動作するPython 3プログラミング言語の完全実装。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-SAMD21-MicroPython/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-MicroPython/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c3_with_micropython/">XIAO ESP32C3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_with_micropython/">XIAO ESP32S3 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_Micropython/">XIAO ESP32S3 Sense Only (Camera, Wi-Fi)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_NRF52/">XIAO nRF52840 Sense</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_micropython/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_RP2350/">XIAO RP2350</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://circuitpython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython.png" style={{width:'auto', height:50}} /></a></div>

<span id="circuitpython"><strong><a href="https://circuitpython.org/">CircuitPython</a></strong></span>、低コストのマイクロコントローラボードでの実験やコーディング学習を簡素化するために設計されたプログラミング言語。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-CircuitPython/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-CircuitPython/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE_CircutPython/">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c3_with_circuitpython/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_project_circuitpython/">XIAO ESP32S3 Sense</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_with_circuitpython/">XIAO ESP32C6</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://circuitpython.org/board/seeeduino_xiao_rp2350/">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.swift.org/getting-started/embedded-swift/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/swift.png" style={{width:'auto', height:50}} /></a></div>

<span id="embedded_swift"><strong><a href="https://www.swift.org/getting-started/embedded-swift/">Embedded Swift</a></strong></span>、スケーラブルな言語であり、デスクトップおよびモバイルアプリ、サーバーバックエンド、システムソフトウェアの作成に最適で、マイクロコントローラー上で動作します。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-esp32-swift/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://idf.espressif.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espressif.png" style={{width:'auto', height:50}} /></a></div>

<span id="esp_idf"><a href="https://idf.espressif.com/"><strong>ESP IDF</strong></a></span>、ESP32、ESP32-S、ESP32-CシリーズのSoC向けにEspressifが提供する公式IoT開発フレームワークであり、これらのプラットフォーム上での汎用アプリケーション開発のための自己完結型SDKを提供します。CやC++などのプログラミング言語を使用します。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_idf/">XIAO ESP32シリーズ (入門)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/getting_started_with_matter/">Matter開発 1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32_matter_env/">Matter開発 2</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/matter_development_framework/">Matter開発 3</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.rust-lang.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rust.png" style={{width:'auto', height:50}} /></a></div>

<span id="rust"><strong><a href="https://www.rust-lang.org/">Rust</a></strong></span>、信頼性が高く効率的なソフトウェアを構築するための言語です。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/atsamd-rs/atsamd/tree/master/boards/xiao_m0">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/en/tutorials/programing-in-rust-the-xiao-rp2040-board/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://forum.seeedstudio.com/t/rust-on-xiao-esp32s3/276724">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Wumpf/Seeed-nRF52840-Sense-projects">XIAO nRF52840 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://tinygo.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tinygo.png" style={{width:'auto', height:50}} /></a></div>

<span id="tinygo"><strong><a href="https://tinygo.org/">TinyGo</a></strong></span>、マイクロコントローラー、WebAssembly (wasm/wasi)、およびコマンドラインツールなどの小規模な環境での使用を目的としたGoコンパイラです。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-ble/">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-rp2040/">XIAO RP2040</a></th>
		</tr>
	</table>
</div>

## <span id="supported_rtos">対応RTOS</span>

<br></br>
<div><a href="https://docs.zephyrproject.org/latest/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr.png" style={{width:'auto', height:70}} /></a></div>

<span id="zephyr"><strong><a href="https://docs.zephyrproject.org/latest/">Zephyr</a></strong></span>は、複数のハードウェアアーキテクチャをサポートし、リソース制約のあるデバイス向けに最適化され、セキュリティを考慮して構築されたスケーラブルなリアルタイムオペレーティングシステム（RTOS）です。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-SAMD21-Zephyr-RTOS/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-Zephyr-RTOS/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-nRF52840-Zephyr-RTOS/">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-ESP32C3-Zephyr/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_zephyr_rtos/">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c6/doc/index.html">XIAO ESP32C6</a></th>		
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_ra4m1/doc/index.html">XIAO RA4M1</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_mg24/doc/index.html">XIAO MG24</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>	
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.freertos.org/"><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" style={{width:'auto', height:50}} /></a></div>

<span id="freertos"><strong><a href="https://www.freertos.org/">FreeRTOS</a></strong></span>は、マイクロコントローラーおよび小型マイクロプロセッサ向けのリアルタイムオペレーティングシステムです。
<br></br>
<br></br>
<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
			<th style={{width:333, height:'auto'}}>XIAO nRF52840</th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-esp32s3-freertos/">XIAO ESP32S3 (Sense)</a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://nuttx.apache.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nuttxrtos.png" style={{width:'auto', height:80}} /></a></div>

<span id="apache_nuttx_rtos"><strong><a href="https://nuttx.apache.org/">Apache NuttX RTOS</a></strong></span>は、標準準拠と小型フットプリントを重視したリアルタイムオペレーティングシステム（RTOS）です。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/samd2l2/boards/xiao-seeeduino/index.html">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-rp2040-with-nuttx/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html">XIAO nRF52840</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/ra4m1/boards/xiao-ra4m1/index.html ">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/xtensa/esp32s3/boards/esp32s3-xiao/index.html">XIAO ESP32S3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/boards/esp32c3-xiao/index.html">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="communications">通信</span>

<br></br>
<div><a href="https://kafka.apache.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/apachekafka.png" style={{width:'auto', height:50}} /></a></div>

<span id="apache_kafka"><strong><a href="https://kafka.apache.org/">Apache Kafka</a></strong></span>は、数千の企業が高性能なデータパイプライン、ストリーミング分析、データ統合、ミッションクリティカルなアプリケーションに使用しているオープンソースの分散イベントストリーミングプラットフォームです。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_kafka/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>


<br></br>
<div><a href="https://csa-iot.org/all-solutions/matter/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/matter.png" style={{width:'auto', height:50}} /></a></div>

<span id="matter"><strong><a href="https://csa-iot.org/all-solutions/matter/">Matter</a></strong></span>は、互換性のあるデバイスやシステムに信頼性が高く安全な接続を提供する業界統一の標準プロトコルです。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_idf/">XIAO ESP32シリーズ (C3, S3, C6)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/zigbee/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zigbee.png" style={{width:'auto', height:50}} /></a></div>

<span id="zigbee"><strong><a href="https://csa-iot.org/all-solutions/zigbee/">Zigbee</a></strong></span>は、低コスト・低消費電力のワイヤレスIoTデータネットワークの独自のニーズに対応するために開発されたオープンなグローバル市場接続標準のワイヤレス技術です。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_zigbee_arduino/">XIAO ESP32C6（Arduino）</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_zigbee/">XIAO ESP32C6（IDF）</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espnow.png" style={{width:'auto', height:50}} /></a></div>

<span id="espnow"><strong><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now">ESP-NOW</a></strong></span>は、迅速な応答と低消費電力を実現するワイヤレス通信プロトコルで、スマートホーム機器、リモートコントロール、センサーで広く使用されています。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_espnow/">XIAO ESP32シリーズ (ESP32C3, ESP32S3, ESP32S3 Sense, ESP32C6)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://meshtastic.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mashtastic.png" style={{width:'auto', height:70}} /></a></div>

<span id="meshtastic"><strong><a href="https://meshtastic.org/">Meshtastic</a></strong></span>は、手頃な価格で低消費電力のデバイス上で動作するよう設計されたオープンソースのオフグリッド分散型メッシュネットワークです。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_meshtastic/">XIAO ESP32S3 for Meshtastic and LoRa</a></th>
			<th style={{width:333, height:'auto'}}>XIAO nRF52840 </th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://aws.amazon.com/iot-core/sidewalk/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/amazonsidewalk.png" style={{width:'auto', height:50}} /></a></div>

<span id="amazon_sidewalk"><strong><a href="https://aws.amazon.com/iot-core/sidewalk/">Amazon Sidewalk</a></strong></span>は、数十億のデバイスに持続的な接続を提供する暗号化された無料接続の長距離ネットワークです。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-ble-sidewalk/">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.blecon.net/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/blecon.png" style={{width:'auto', height:60}} /></a></div>

<span id="blecon"><strong><a href="https://www.blecon.net/">Blecon</a></strong></span>は、Bluetooth Low Energyを使用して物理的な製品がクラウドアプリケーションと通信できるようにします。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://developer.blecon.net/modem-reference/boards-and-modules/seeed-xiao-nrf52840-breakout">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="tinyml/embedded_machine_learningtinyml">TinyML/組み込み機械学習プラットフォーム</span>

<br></br>
<div><a href="https://sensecraft.seeed.cc/ai/#/home"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/sensecraft.png" style={{width:'auto', height:50}} /></a></div>

<span id="sensecraft_ai"><strong><a href="https://sensecraft.seeed.cc/ai/#/home">SenseCraft AI</a></strong></span>, <strong>コード不要のモデルトレーニング、デプロイメントなどのための頼れるソリューション。</strong>
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_edgelab/">XIAO ESP32S3 Sense (モデルアシスタント)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://ai.google.dev/edge/litert"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tensorflowlite.png" style={{width:'auto', height:50}} /></a></div>

<span id="tensorflow_lite"><strong><a href="https://ai.google.dev/edge/litert">TensorFlow Lite</a></strong></span>, Googleが提供するオンデバイスAIのための高性能ランタイム。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-TFLite-Getting-Started/">XIAO nRF52840 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://edgeimpulse.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/edgeimpulse.png" style={{width:'auto', height:50}} /></a></div>

<span id="edge_impulse"><strong><a href="https://edgeimpulse.com/">Edge Impulse</a></strong></span>, エッジデバイス上での機械学習のための主要な開発プラットフォーム。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-TinyML/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO-RP2040-EI/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAOEI/">XIAO nRF52840 (Sense)-モーション認識</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/tinyml_course_Key_Word_Spotting/">XIAO ESP32S3 Sense (キーワードスポッティング)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/tinyml_course_Image_classification_project/">XIAO ESP32S3 Sense (画像分類)</a></th>
		</tr>
	</table>
</div>


## <span id="smart_home_and_automation">スマートホームとオートメーション</span>

<br></br>
<div><a href="https://www.home-assistant.io/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/homoassiatant.png" style={{width:'auto', height:50}} /></a></div>
<div><a href="https://esphome.io/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/esphome.png" style={{width:'auto', height:50}} /></a></div>


<span id="home_assistant_esphome"><strong><a href="https://www.home-assistant.io/">Home Assistant</a> & <a href="https://esphome.io/">ESPHome</a></strong></span>, シンプルでありながら強力な設定ファイルを使用してマイクロコントローラーを制御し、Home Assistantなどのホームオートメーションシステムを通じてリモートで制御するシステム。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_esphome/">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/#grove-compatibility-list-with-esphome">XIAO ESP32 + GroveセンサーをESPHome経由でHAに接続</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao-esp32c3-esphome/">XIAO ESP32C3 + mmWaveをHAに接続</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/">XIAO ESP32C3をESPHomeに追加</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://github.com/arendst/Tasmota"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tasmota.png" style={{width:'auto', height:50}} /></a></div>

<span id="tasmota"><strong><a href="https://github.com/arendst/Tasmota">Tasmota</a></strong></span>, ESP8266およびESP32ベースのデバイス向けの代替オープンソースファームウェアで、WebUIを使用した簡単な設定、OTAアップデート、タイマーやルールを使用したオートメーション、拡張性、MQTT、HTTP、シリアル、またはKNXを介した完全なローカル制御を提供します。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C3.html">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3.html">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3_SENSE.html">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C6.html">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_mmwave_sensor_kit.html">XIAO ESP32C3をベースにした人感センサーキット</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="open_source_keyboard_firmware_support">オープンソースキーボードファームウェアのサポート</span>

<br></br>
<div><a href="https://qmk.fm/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/qmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="qmk"><strong><a href="https://qmk.fm/">QMK</a></strong></span>、Atmel AVRおよびArm USBファミリー向けのオープンソースキーボードファームウェア。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/PJE66/hummingbird">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/kilipan/hummingbird_qmk">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}>XIAO nRF52840 (Sense)</th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://zmk.dev/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="zmk"><strong><a href="https://zmk.dev/">ZMK</a></strong></span>、Zephyr™プロジェクトリアルタイムオペレーティングシステム（RTOS）上に構築されたオープンソースキーボードファームウェア。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO RP2350</th>
			<th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>


## <span id="other_hot_applications">その他の注目アプリケーション</span>

<br></br>
<div><a href="https://kno.wled.ge/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wled.png" style={{width:'auto', height:50}} /></a></div>

<span id="wled"><strong><a href="https://kno.wled.ge/">WLED</a></strong></span>、NeoPixel（WS2812B、WS2811、SK6812）LEDやSPIベースのチップセットを制御するためのESP8266/ESP32ウェブサーバーの高速で機能豊富な実装。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.instructables.com/WLED-ON-XIAO-ESP32/">XIAO ESP32シリーズ（C3、S3、S3 Sense）</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://chatgpt.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/chatgtp.png" style={{width:'auto', height:50}} /></a></div>

<span id="chatgpt"><strong><a href="https://chatgpt.com/">ChatGPT</a></strong></span>、InstructGPTの兄弟モデルであり、プロンプト内の指示に従い詳細な応答を提供するように訓練されています。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.ffmpeg.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ffmpeg.png" style={{width:'auto', height:50}} /></a></div>

<span id="ffmpeg"><strong><a href="https://www.ffmpeg.org/">FFmpeg</a></strong></span>、音声、動画、字幕、関連メタデータなどのマルチメディアコンテンツを処理するためのライブラリとツールのコレクション。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/tutoriels/esp32-timelapse/#google_vignette">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://github.com/mROS-base/mros2-esp32"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mrosbase.png" style={{width:'auto', height:50}} /></a></div>

<span id="mros2_esp32"><strong><a href="https://github.com/mROS-base/mros2-esp32">mROS2-ESP32</a></strong></span>、組み込みesp32マイクロコントローラー上でROSノードを実行する軽量ランタイム環境。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/7">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/24">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/23">XIAO ESP32C6</a></th>
		</tr>
	</table>
</div>

## <span id="prototyping_tools_pcb_layout_stimulation">プロトタイピングツール（PCBレイアウト＆シミュレーション）</span>

<br></br>
<div><a href="https://fritzing.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/fritzing.png" style={{width:'auto', height:50}} /></a></div>

<span id="fritzing"><strong><a href="https://fritzing.org/">Fritzing</a></strong></span>は、メーカー、ホビイスト、教育者向けの電子設計およびプロトタイピングプラットフォームです。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20SAMD21(Seeeduino).fzpz">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2040.fzpz">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20nRF52840(Sense).fzpz">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C3.fzpz">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C6.fzpz">XIAO ESP32C6</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32S3(Sense).fzpz">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2350.fzpz">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/Seeed%20Studio%20XIAO%20RA4M1.fzpz">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.flux.ai/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/flux.png" style={{width:'auto', height:50}} /></a></div>

<span id="fluxai"><strong><a href="https://www.flux.ai/">FluxAI</a></strong></span>は、AIコパイロットを活用してプロフェッショナルなPCBを構築するためのより良い方法を提供します。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840">XIAO nRF52840</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840-sense">XIAO nRF52840 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3">XIAO ESP32S3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c6">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2350">XIAO RP2350</a></th>           
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-ra4m1">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://wokwi.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wokwi.png" style={{width:'auto', height:50}} /></a></div>

<span id="wokwi"><strong><a href="https://wokwi.com/">Wokwi</a></strong></span>は、世界で最も高度なESP32シミュレーターです。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/410433244849526785">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411276781876475905">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411265368570177537">XIAO ESP32C6</a></th>
		</tr>
	</table>
</div>

## <span id="iot_clouds_and_iot_platforms">IoTクラウドとIoTプラットフォーム</span>

<br></br>
<div><a href="https://aws.amazon.com/iot/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/awsiot.png" style={{width:'auto', height:50}} /></a></div>

<span id="aws_iot"><strong><a href="https://aws.amazon.com/iot/">AWS IoT</a></strong></span>は、デバイスを安全に接続および管理し、デバイスデータを収集および分析し、より高いビジネス価値を生み出すソリューションを構築および展開することを可能にします。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/xiao_esp32c6_aws_iot/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://thingspeak.mathworks.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/thingspeak.png" style={{width:'auto', height:70}} /></a></div>

<span id="thingspeak"><strong><a href="https://thingspeak.mathworks.com/">ThingSpeak</a></strong></span>は、MATLAB分析を備えたオープンIoTプラットフォームです。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://elchika.com/article/433216e7-90a9-4f59-bbb3-4a7531588140/">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://ubidots.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ubidots.png" style={{width:'auto', height:50}} /></a></div>

<span id="ubidots"><strong><a href="https://ubidots.com/">Ubidots</a></strong></span>は、エンジニアや開発者向けのローコードIoT開発プラットフォームで、完全な本番対応のIoTアプリケーションを構築する時間や労力がない場合に役立ちます。
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/ja/L76K_Path_Tracking_on_Ubidots/">XIAO ESP32S3 + L76K GNSSモジュールによるトラッキング</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>