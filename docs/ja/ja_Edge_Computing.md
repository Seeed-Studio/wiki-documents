---
description: このトピックでは、リアルタイム処理を必要とするアプリケーションで、さまざまなセンサーによって生成される「即時」データを処理するエッジコンピューティングアーキテクチャに関する Seeed Studio の製品ドキュメントを紹介します。
title: エッジコンピューティング
keywords:
- エッジコンピューティング
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edge_Computing
last_update:
  date: 05/15/2025
  author: Matthew
---


このトピックでは、リアルタイム処理を必要とするアプリケーションで、さまざまなセンサーによって生成される「即時」データを処理するエッジコンピューティングアーキテクチャに関する Seeed Studio の製品ドキュメントを紹介します。このページでは、さまざまな要件に対応する異なる計算能力を持つ複数のデバイスを紹介します。

このページでは、以下の3つの主要セクションを探索できます：

- デバイスとその対応するアプリケーション
- シングルボードコンピュータとその用途
- マイクロコントローラとその対応するアプリケーション

## デバイス

<strong><font color={'8DC215'} size={"4"}>このセクションでは、エッジコンピューティングアーキテクチャを統合したデバイスを紹介します。以下について詳しく知ることができます：</font></strong>

- 産業レベルの計算能力を持つデバイス
- デバイスに基づくアプリケーション
- ソフトウェアのデプロイ
- OSのインストール
- デバイス固有の拡張ボードまたはキャリアボード
- チュートリアルとガイド

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/ja/reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal の使い方 </font></span></a>
            <br/>
            <a href="/ja/reTerminal-hardware-interfaces-usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ハードウェアとインターフェースの使用方法 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal DM</font></div>
            <a href="https://wiki.seeedstudio.com/ja/reterminal-dm/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM の使い方 </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja/reterminal-dm-hardware-guide/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ハードウェアレイアウト </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer</font></div>
            <a href="/ja/reComputer_Jetson_Series_Initiation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer シリーズの使い方 </font></span></a>
            <br/>
            <a href="/ja/reComputer_Jetson_Series_Hardware_Layout" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer シリーズのハードウェアレイアウト </font></span></a>
            <br/>
            <a href="/ja/reComputer_Jetson_Series_GPIO_Grove" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer シリーズのGPIOとGrove </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="/ja/reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer X86シリーズ - Intel® Core™ </font></span></a>
            <br/>
            <a href="/ja/reServer_J2032_Getting_Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer J2032 - NVIDIA® Jetson NX Xavier </font></span></a>
            <br/>
    </div>
</div>


<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edgeシリーズ</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - ESP32ベース/ RS485/ Ethernet </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - Raspberry Pi CM4ベース/ IEC </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - Raspberry Pi CM4ベース</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 代替品</font></div>
            <a href="/ja/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 / NVIDIA Jetson AGX Xavier 開発キット - Jetpack 4.4 | Jetpack 4.6 | Jetpack 5.0</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>産業用ミニPC</font></div>
            <a href="/ja/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 - Jetpack 5.0, Jetson Xavier NX 8GB, RS232 </font></span></a>
            <br/>
            <a href="/ja/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E - Jetpack 5.0, Jetson Xavier NX 8GB, 2xGbE</font></span></a>
            <br/>
            <a href="/ja/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 - Jetpack 5.0, Jetson AGX Orin 32GB, 10Gps </font></span></a>
            <br/>
    </div>
</div>

### アプリケーション / ソフトウェア

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/ja/reTerminal-build-UI-using-LVGL" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LVGL</font></span></a>,
            <a href="/ja/reTerminal-build-UI-using-Flutter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Flutter</font></span></a>,
            <a href="/ja/reTerminal-build-UI-using-Electron" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Electro</font></span></a>,
            <a href="/ja/weather-dashboard-with-Grafana-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grafana</font></span></a>
            <br/>
            <a href="/ja/Mender-Client-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Mender Client</font></span></a>,
            <a href="/ja/reTerminal-build-UI-using-Qt-for-Python" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Qt with Python</font></span></a>
            <br/>
            <a href="/ja/reTerminal_ML_MediaPipe" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Google MediaPipe</font></span></a>
            <br/>
            <a href="/ja/reTerminal_ML_TFLite" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TensorFlow Lite</font></span></a>
            <br/>
            <a href="/ja/reTerminal_Home_Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Home Assistant</font></span></a>
            <br/>
            <a href="/ja/reTerminal-Home-Assistant-Customize" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Customize Home Assistant</font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edge Series</font></div>
            <a href="/ja/Edgebox-rpi-200-codesys" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Codesys on EdgeBox-RPI-200</font></span></a>
            <br/>
            <a href="/ja/Edgebox-ESP-100-Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Getting Start with Arduino on EdgeBox-ESP-100</font></span></a>
            <br/>
            <a href="/ja/Contributor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> More to be published soon</font></span></a>
            <br/>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal DM</font></div>
            <a href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Getting-Started-with-Node-Red/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM Getting Started with Node Red</font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-RS485/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM RS485 Port with Node-RED </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-mqtt/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM MQTT with Node-RED </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja/reTerminal-DM-Node-Red-canbus/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM CAN BUS with Node-RED </font></span></a>
            <br/>
            <a href="https://wiki.seeedstudio.com/ja/reterminal-dm-sensecraft-edge-os-intro/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal DM SenseCraft Edge OS Getting Started </font></span></a>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer Application</font></div>
            <a href="/ja/HardHat" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Hard Hat Detection </font></span></a>
            <br/>
            <a href="/ja/No-code-Edge-AI-Tool" target="_blank"><span><font color={'FFFFFF'} size={"2"}> No code Edge AI Tool </font></span></a>
            <br/>
            <a href="/ja/Jetson-Nano-MaskCam" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MaskCam </font></span></a>
            <br/>
            <a href="/ja/DashCamNet-with-Jetson-Xavier-NX-Multicamera" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DashCamNet with Jetson Xavier NX Multicamera </font></span></a>
            <br/>
            <a href="/ja/Traffic-Management-DeepStream-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Traffic Management DeepStream SDK </font></span></a>
            <br/>
            <a href="/ja/YOLOv5-Object-Detection-Jetson" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Few-Shot Object Detection </font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Software for reComputer</font></div>
            <a href="/ja/CVEDIA-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  CVEDIA-RT </font></span></a> , 
            <a href="/ja/Cochl.Sense-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Cochl.Sense </font></span></a> ,
            <a href="/ja/Lumeo-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  Lumeo </font></span></a>
            <br/>
            <a href="/ja/Allxon-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Getting Started with Allxon </font></span></a>
            <br/>
            <a href="/ja/jetson-docker-getting-started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Getting Started with Docker</font></span></a>
            <br/>
            <a href="/ja/alwaysAI-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Getting Started with alwaysAI </font></span></a>
            <br/>
            <a href="/ja/DeciAI-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Getting Started with Deci </font></span></a>
            <br/>
            <a href="/ja/YOLOv8-DeepStream-TRT-Jetson" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Deploy YOLOv8 with TensorRT and DeepStream SDK </font></span></a>
            <br/>
    </div>
</div>

### OSインストール / ファームウェア更新

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/ja/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reTerminal-Buildroot-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Buildroot</font></span></a>,
            <a href="/ja/reTerminal-Yocto" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Yocto</font></span></a>
            <br/>
            <a href="/ja/Streampi_OBS_On_reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Stream-pi & OBS studio</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer シリーズ</font></div>
            <a href="/ja/reComputer_J1010_J101_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1010 | J101 オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reComputer_J2021_J202_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J2021 | J202 オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reComputer_J1020_A206_Flash_JetPack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1020 | A206 オリジナルOSインストール</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal DM</font></div>
            <a href="https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナルOSインストール</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="/ja/reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reServer-Update-BIOS-Install-Drivers" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BIOSアップグレードとドライバインストール</font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Mini PC</font></div>
            <a href="/ja/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 オリジナルOSインストール</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edgeシリーズ</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - OSインストール </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - OSインストール </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - OSインストール</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 代替</font></div>
            <a href="/ja/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 オリジナルOSインストール</font></span></a>
    </div>
</div>

### 拡張機能 / キャリアボード

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal 拡張機能</font></div>
            <a href="/ja/reTerminalBridge" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 - UPS拡張、ギガビットイーサネット、LTE/4G/5G/LoRaWAN®、RS485/232、CAN、SATA 2.0</font></span></a>
            <br/>
            <a href="/ja/reTerminal_Mount_Options" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 マウントオプション</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 拡張機能</font></div>
            <a href="/ja/reComputer_A203_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203, Jetson Nano / Xavier NX/TX2 NX対応</font></span></a>
            <br/>
            <a href="/ja/reComputer_A205_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205, Jetson Nano / Xavier NX/TX2 NX対応</font></span></a>
            <br/>
            <a href="/ja/Jetson-Mate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Mate クラスター, 4つのJetson Nano/NX対応 </font></span></a>
            <br/>
    </div>
</div>

### チュートリアル / FAQ

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/ja/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal 使用に関するFAQ</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer / NVIDIA Jetson</font></div>
            <a href="/ja/reComputer_Jetson_Memory_Expansion" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NVIDIA Jetson ボードのメモリ拡張</font></span></a>
            <br/>
            <a href="/ja/J1010_Boot_From_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer J1010でのSDカードからの起動</font></span></a>
            <br/>
            <a href="/ja/J101_Enable_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J101キャリアボードでのSDカード有効化</font></span></a>
            <br/>
    </div>
</div>

## マイクロコントローラー

<strong><font color={'8DC215'} size={"4"}>このセクションでは、組み込みコンピューティングモジュールに関する詳細を提供します。以下の内容を発見できます：</font></strong>

- 組み込みコンピューティングを備えたマイクロコントローラー
- IoTおよびMLベースのアプリケーション
- モジュール用の拡張ボードとアクセサリー
- コース付きキット
- チュートリアル

<!-- オープンソースコントローラー -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>オープンソースコントローラー</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}> オープンソースのマイクロコントローラーを紹介します。</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO SAMD21</font></div>
            <a href="/ja/Seeeduino-XIAO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> はじめに </font></span></a>
            <br/>
            <a href="/ja/XIAO-SAMD21-MicroPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MicroPython </font></span></a>,
            <a href="/ja/Seeeduino-XIAO-CircuitPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> CircuitPython </font></span></a>
            <br/>
            <a href="/ja/Seeeduino-XIAO-TinyUSB" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TinyUSB </font></span></a>,
            <a href="/ja/Seeeduino-XIAO-by-Nanase" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Nanase </font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO RP2040</font></div>
            <a href="/ja/XIAO-RP2040" target="_blank"><span><font color={'FFFFFF'} size={"2"}> はじめに </font></span></a>
            <br/>
            <a href="/ja/XIAO-RP2040-with-MicroPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MicroPython </font></span></a>,
            <a href="/ja/XIAO-RP2040-with-CircuitPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> CircuitPython </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO nRF52840</font></div>
            <a href="/ja/XIAO_BLE" target="_blank"><span><font color={'FFFFFF'} size={"2"}> はじめに </font></span></a>
            <br/>
            <a><span><font color={'FFFFFF'} size={"2"}> センスバージョン: </font></span></a>
            <a href="/ja/XIAO-BLE-Sense-IMU-Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IMU </font></span></a>,
            <a href="/ja/XIAO-BLE-Sense-PDM-Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> PDM </font></span></a>
            <br/>
            <a href="/ja/XIAO-BLE-Sense-Bluetooth_Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Bluetooth Low Energy</font></span></a> ,
            <a href="/ja/XIAO-BLE-Sense-IMU-Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NFC </font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO ESP32C3</font></div>
            <a href="/ja/XIAO_ESP32C3_Getting_Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> はじめに </font></span></a>
            <br/>
            <a href="/ja/XIAO_ESP32C3_Pin_Multiplexing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ピンマルチプレクシング </font></span></a>
            <br/>
            <a href="/ja/XIAO_ESP32C3_WiFi_Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wi-Fi </font></span></a> ,
            <a href="/ja/XIAO_ESP32C3_Bluetooth_Usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Bluetooth Low Energy</font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO ESP32S3</font></div>
            <a href="/ja/xiao_esp32s3_getting_started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> はじめに </font></span></a>
            <br/>
            <a href="/ja/xiao_esp32s3_edgelab" target="_blank"><span><font color={'FFFFFF'} size={"2"}> SenseCraftモデルアシスタントの使用 </font></span></a>
            <br/>
            <a href="/ja/xiao_esp32s3_wifi_usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wi-Fi</font></span></a> ,
            <a href="/ja/xiao_esp32s3_bluetooth" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Bluetooth 5.0 </font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal(Wioシリーズ)</font></div>
            <a href="/ja/Wio-Terminal-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> はじめに </font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-LCD-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LCD</font></span></a>,
            <a href="/ja/Wio-Terminal-IMU-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IMU</font></span></a>,
            <a href="Wio-Terminal-Mic" target="_blank"><span><font color={'FFFFFF'} size={"2"}> PDM</font></span></a>,
            <a href="/ja/Wio-Terminal-IO-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IOポート</font></span></a>,
            <a href="/ja/Wio-Terminal-Light" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 光センサー</font></span></a>,
            <a href="/ja/Wio-Terminal-FS-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> SDカード</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-CircuitPython" target="_blank"><span><font color={'FFFFFF'} size={"2"}> CircuitPython</font></span></a>,
            <a href="/ja/Wio-Terminal-Network-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wi-Fi</font></span></a>,
            <a href="/ja/Wio-Terminal-Bluetooth-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Bluetooth</font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wioシリーズ</font></div>
            <a href="/ja/LoRa_E5_mini" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Wio-E5 ボード</font></span></a>
            <br/>
            <a href="/ja/Wio_RP2040_mini_Dev_Board-Onboard_Wifi" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Wio RP2040 ボード</font></span></a>
            <br/>
            <a href="/ja/Wio_Tracker" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Wio トラッカーボード</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeeduinoシリーズ</font></div>
            <a href="/ja/Seeeduino_v4.2" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Seeeduino V4.2 ボード</font></span></a>
            <br/>
            <a href="/ja/Seeeduino_Cloud" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Seeeduino Cloud ボード</font></span></a>
            <br/>
            <a href="/ja/Seeeduino_LoRAWAN" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Seeeduino LoRaWAN® ボード</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arch</font></div>
            <a href="/ja/Arch_Mix" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Arch Mix ボード</font></span></a>
            <br/>
            <a href="/ja/Arch_BLE" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Arch BLE ボード</font></span></a>
            <br/>
            <a href="/ja/Arch_GPRS" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Arch GPRS ボード</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduino</font></div>
            <a href="/ja/Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Arduinoの紹介</font></span></a>
            <br/>
            <a href="/ja/Getting_Started_with_Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Arduinoボードの使い方</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Micro:bit</font></div>
            <a href="/ja/microbit_wiki_page" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Micro:bitの紹介</font></span></a>
            <br/>
            <a href="/ja/Grove_Inventor_Kit_for_microbit" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Micro:bitボードの使い方</font></span></a>
            <br/>
    </div>
</div>

<!-- 独自コントローラー -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>独自コントローラー</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>独自プラットフォームを使用するマイクロコントローラーの紹介。</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Azure IoT</font></div>
            <a href="/ja/Azure_Sphere_MT3620_Development_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Azure Sphere用 MT3620 開発キット</font></span></a>
            <br/>
            <a href="/ja/MT3620_Mini_Dev_Board" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Azure Sphere用 MT3620 ミニ開発ボード</font></span></a>
            <br/>
            <a href="https://seeedjp.github.io/ReButton/" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Azure IoT Hub/IoT Central用 reButton</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>AWS IoT</font></div>
            <a href="/ja/SEEED-IOT-BUTTON-FOR-AWS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio AWS用ワンクリックIoTボタン</font></span></a>
            <br/>
    </div>
</div>

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>ReProduct</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>これはSeeed Studioの多機能マイクロコントローラーの紹介です。</font></div>
            <a href="/ja/UartSB_Frame" target="_blank"><span><font color={'FFFFFF'} size={"3"}> ここをクリック </font></span></a>して全体像をご覧ください。
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>rePhone</font></div>
            <a href="/ja/rePhone" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 紹介</font></span></a>
            <br/>
            <a href="/ja/Arduino_IDE_for_RePhone_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Arduino</font></span></a>
            <br/>
            <a href="/ja/JavaScript_for_RePhone" target="_blank"><span><font color={'FFFFFF'} size={"2"}> JavaScript</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Xadow</font></div>
            <a href="/ja/Xadow_BLE" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BLE</font></span></a>,
            <a href="/ja/Xadow_GPS_V2" target="_blank"><span><font color={'FFFFFF'} size={"2"}> GPS</font></span></a>,
            <a href="/ja/Xadow_NFC_v2" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NFC</font></span></a>,
            <br/>
            <a href="/ja/Xadow_IMU_10DOF" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IMU</font></span></a>,
            <a href="/ja/Xadow_UV_Sensor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> UV</font></span></a>
            <br/>
            <a href="/ja/Xadow_Audio" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オーディオ</font></span></a>,
            <a href="/ja/Xado_OLED_128multiply64" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OLED</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BEEシリーズ</font></div>
            <a href="/ja/Mesh_Bee" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Mesh Bee</font></span></a>
            <br/>
            <a href="/ja/BLE_Bee" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BLE</font></span></a>,
            <a href="/ja/Wifi_Bee_v2.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wi-Fi</font></span></a>
            <br/>
            <a href="/ja/RFbee_V1.1-Wireless_Arduino_compatible_node" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RFBee</font></span></a>,
            <a href="/ja/UartSBee_v5" target="_blank"><span><font color={'FFFFFF'} size={"2"}> UARTBee</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Air Serial</font></div>
            <a href="/ja/Air602_WiFi_Development_Board" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Air602 WiFi開発ボード</font></span></a>,
            <br/>
            <a href="/ja/Air602_Firmware_Programming_Manual" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Air602ファームウェアマニュアル</font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>W600</font></div>
            <a href="/ja/W600_Module" target="_blank"><span><font color={'FFFFFF'} size={"2"}> W600モジュール</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Artik</font></div>
            <a href="/ja/Artik" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 紹介</font></span></a>
            <br/>
            <a href="/ja/Eagleye_530s" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Eagleye 530s</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Linklt</font></div>
            <a href="/ja/LinkIt" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 紹介</font></span></a>
            <br/>
            <a href="/ja/LinkIt_ONE" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Linklt ONE</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Rainbowduino</font></div>
            <a href="/ja/Rainbowduino_v3.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Rainbowduino V3.0</font></span></a>
            <br/>
            <a href="/ja/Rainbowduino_LED_driver_platform-ATmega328" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ATmega328</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Skeleton Bot</font></div>
            <a href="/ja/Skeleton_Box" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 紹介</font></span></a>
            <br/>
            <a href="/ja/Skeleton_Bot-4WD_hercules_mobile_robotic_platform" target="_blank"><span><font color={'FFFFFF'} size={"2"}> モバイルロボットプラットフォーム</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>その他</font></div>
            <a href="/ja/Hercules_Dual_15A_6-20V_Motor_Controller" target="_blank"><span><font color={'FFFFFF'} size={"3"}> その他の個別製品</font></span></a>
            <br/>
    </div>
</div>

### アプリケーション

### 簡単な IoT アプリケーション

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>簡単な IoT アプリケーション</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>簡単に適用および展開できる IoT アプリケーションの紹介です。</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal</font></div>
            <a href="/ja/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Google Cloud IoT</font></span></a>
            <br/>
            <a href="/ja/Get-Started-with-Wio-Terminal-and-Wappsto-IoT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wappsto IoT</font></span></a>
            <br/>
            <a href="/ja/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Azure IoT Central</font></span></a>,
            <a href="/ja/Wio-Terminal-Azure-IOT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Azure IoT Hub</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio RP2040</font></div>
            <a href="/ja/Use_MQTT_to_remotely_light_up_LED_lights" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MQTT を使用してリモートで LED ライトを点灯</font></span></a>
            <br/>
            <a href="/ja/Use_Socket_to_connect_to_the_forum" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ソケットを使用してフォーラムに接続</font></span></a>
            <br/>
            <a href="/ja/Wireless-Fall-Detection-Device" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ワイヤレス転倒検知デバイス</font></span></a>
            <br/>
    </div>
</div>

### 組み込み ML シナリオ

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>組み込み ML シナリオ</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>簡単に適用およびトレーニング可能な組み込み機械学習（TinyML）の使用例を紹介します。</font></div>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal</font></div>
            <span><font color={'FFFFFF'} size={"4"}> TinyML with Edge Impulse </font></span>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-EI-2" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 継続的な動作認識</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-EI-3" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> オーディオシーン認識</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-EI-4" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 超音波センサーを使用した人数カウント</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-EI-5" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 飲料の識別</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-EI-6" target="_blank"><span><font color={'FFFFFF'} size={"2"}>> 予知保全のための異常検知</font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal</font></div>
            <span><font color={'FFFFFF'} size={"4"}> TinyML with TensorFlow Lite</font></span>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-TFLM-1" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > TensorFlow Lite Micro 入門</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-TFLM-2" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 天気予測</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-TFLM-3" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 音声認識とインターネットへの音声送信</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-Gesture-Recognition" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > ジェスチャー認識</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO SAMD21</font></div>
            <a href="/ja/Contributor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > 近日公開</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO RP2040</font></div>
            <a href="/ja/XIAO-RP2040-EI" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > Edge Impulse を使用した動作認識</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO nRF52840</font></div>
            <a href="/ja/XIAO-BLE-Sense-TFLite-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > TensorFlow Lite 入門</font></span></a>
            <br/>
            <a href="/ja/XIAO-BLE-Sense-TFLite-Mic" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > TensorFlow Lite を使用した音声認識</font></span></a>
            <br/>
            <a href="/ja/XIAOEI" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > Edge Impulse を使用した動作認識</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO ESP32C3</font></div>
            <a href="/ja/xiaoesp32c3-chatgpt" target="_blank"><span><font color={'FFFFFF'} size={"2"}> > XIAO ESP32C3 で WiFiClient と HTTPClient を使用 - XIAO ESP32C3 & ChatGPT の実践</font></span></a>
            <br/>
    </div>
</div>

### 拡張機能

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduino / Arduino 互換 - 拡張機能</font></div>
            <a href="/ja/Bluetooth_Shield_V2" target="_blank"><span><font color={'FFFFFF'} size={"3"}> Bluetooth シールド</font></span></a>,
            <a href="/ja/Solar_Charger_Shield_V2.2" target="_blank"><span><font color={'FFFFFF'} size={"3"}> ソーラーチャージャーシールド</font></span></a>,
            <a href="/ja/Base_Shield_V2" target="_blank"><span><font color={'FFFFFF'} size={"3"}> Grove ベースシールド</font></span></a>,
            <a href="/ja/CAN-BUS_Shield_V2.0" target="_blank"><span><font color={'FFFFFF'} size={"3"}> CAN-BUS シールド</font></span></a>,
            <a href="/ja/RS232_Shield" target="_blank"><span><font color={'FFFFFF'} size={"3"}> RS232 シールド</font></span></a>
            <br/>
            <a href="/ja/Grove_Shield_for_Arduino_Nano" target="_blank"><span><font color={'FFFFFF'} size={"3"}> 詳細はこちら</font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal - 拡張機能</font></div>
            <a href="/ja/Wio-Terminal-Audio-Overview" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オーディオ拡張ボード</font></span></a>,
            <a href="/ja/Wio-Terminal-Ethernet" target="_blank"><span><font color={'FFFFFF'} size={"2"}> イーサネット拡張ボード</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-Battery-Chassis" target="_blank"><span><font color={'FFFFFF'} size={"2"}> バッテリーチャーシス</font></span></a>,
            <a href="/ja/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LoRaWAN® 対応バッテリーチャーシス</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO - 拡張機能</font></div>
            <a href="/ja/Seeeduino-XIAO-Expansion-Board" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ボード 1: 4つのGroveポート / OLED / RTC / SDカードスロット</font></span></a>
            <br/>
            <a href="/ja/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ボード 2: 8つのGroveポート / バッテリーマネジメント</font></span></a>
            <br/>
            <a href="/ja/get_start_round_display" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio XIAO 用ラウンドディスプレイ拡張ボード</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi Pico - 拡張機能</font></div>
            <a href="/ja/Grove-Starter-Kit-for-Raspberry-Pi-Pico" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi Pico 用 Grove 拡張ボード</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio シリーズ - 拡張機能</font></div>
            <a href="/ja/Grove-Shield-for-Wio-Lite" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Lite 用 Grove シールド</font></span></a>
            <br/>
            <a href="/ja/Wio-Extension-RTC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Tracker 用 RTC</font></span></a>
            <br/>
    </div>
</div>

### アクセサリ

<!-- Grove アクセサリ -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>Grove アクセサリ</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>これは Grove アクセサリの紹介です。</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ディスプレイ</font></div>
            <a><span><font color={'FFFFFF'} size={"2"}>OLED -</font></span></a>
            <a href="/ja/Grove-OLED-Display-0.66-SSD1306_v1.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}>0.66"</font></span></a>,
            <a href="/ja/Grove-OLED-Display-0.96-SSD1315" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 0.96"</font></span></a>,
            <a href="/ja/Grove-OLED-Display-1.12-SH1107_V3.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 1.12" </font></span></a>
            <br/>
            <a href="/ja/Grove-LCD_RGB_Backlight" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LCD RGB バックライト </font></span></a>
            <br/>
            <a href="/ja/Grove-0.54_inch_Red_Dual_Alphanumeric_Display" target="_blank"><span><font color={'FFFFFF'} size={"2"}>デュアル</font></span></a>,
            <a href="/ja/Grove-0.54_inch_Red_Quad_Alphanumeric_Display" target="_blank"><span><font color={'FFFFFF'} size={"2"}>クアッド </font></span></a>
            <a><span><font color={'FFFFFF'} size={"2"}> アルファLED</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>アクチュエータ</font></div>
            <a href="/ja/Grove-I2C_Motor_Driver_V1.3" target="_blank"><span><font color={'FFFFFF'} size={"2"}> モータードライバー </font></span></a>
            <br/>
            <a href="/ja/Grove-Relay" target="_blank"><span><font color={'FFFFFF'} size={"2"}> リレー </font></span></a>,
            <a href="/ja/Grove-Servo" target="_blank"><span><font color={'FFFFFF'} size={"2"}>サーボ </font></span></a>
            <br/>
            <a href="/ja/Grove-16-Channel_PWM_Driver-PCA9685" target="_blank"><span><font color={'FFFFFF'} size={"2"}>PWM ドライバー </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>時間</font></div>
            <a href="/ja/Grove-RTC" target="_blank"><span><font color={'FFFFFF'} size={"2"}>RTC - DS1307 ベース </font></span></a>
            <br/>
            <a href="/ja/Grove_High_Precision_RTC" target="_blank"><span><font color={'FFFFFF'} size={"2"}>RTC - PCF85063TP ベース </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>電流</font></div>
            <a href="/ja/Grove-2.5A-DC-Current-Sensor-ACS70331" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 2.5A</font></span></a>,
            <a href="/ja/Grove-10A_DC_Current_Sensor-ACS725" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 10A </font></span></a>
            <a><span><font color={'FFFFFF'} size={"2"}> DC 電流センサー</font></span></a>
            <br/>
            <a href="/ja/Grove-5A_DC_AC_Current_Sensor-ACS70331" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ±5A DC/AC 電流センサー </font></span></a>
            <br/>
            <a href="/ja/Grove-MOSFET" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MOSFET </font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>LED</font></div>
            <a href="/ja/Grove-Red_LED" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 赤色LED </font></span></a>
            <br/>
            <a href="/ja/Grove-LED_Bar" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LEDバー </font></span></a>
            <br/>
            <a href="/ja/Grove-LED_ring" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RGB LEDリング </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>スイッチ & ボタン</font></div>
            <a href="/ja/Grove-Button" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ボタン </font></span></a>
            <br/>
            <a href="/ja/Grove-6-Position_DIP_Switch" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 6ポジションDIPスイッチ </font></span></a>
            <br/>
            <a href="/ja/Grove-Switch-P" target="_blank"><span><font color={'FFFFFF'} size={"2"}> パネルマウントスイッチ </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>入力 / 出力</font></div>
            <a href="/ja/Grove-Differential_Amplifier_v1.2" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 差動 - 増幅 </font></span></a>
            <br/>
            <a href="/ja/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 8チャンネルI2Cマルチプレクサ </font></span></a>
            <br/>
            <a href="/ja/Grove-Qwiic-Hub" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove to Qwiicハブ </font></span></a>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ケース</font></div>
            <a href="/ja/Grove-Wrapper" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove - ラッパー</font></span></a>
            <br/>
    </div>
</div>

<!-- Beyond Grove / Retired Product -->

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>レガシープロダクト</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>これは、Seeedによってもはやメンテナンスされていない製品とアクセサリのセクションです</font></div>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ディスプレイ</font></div>
            <a href="/ja/LCD_16-2_Characters-Green_Yellow_back_light" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LCD 16*2 </font></span></a>
            <br/>
            <a href="/ja/LCD_8-2_Characters-Blue_back_light" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LCD 8*2 </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>充電</font></div>
            <a href="/ja/Lipo_Rider_Pro" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Lipo Rider Pro </font></span></a>
            <br/>
            <a href="/ja/3W_Solar_Panel_138x160" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ソーラーパネル </font></span></a>
            <br/>
            <a href="/ja/DC_framework_miniature_solenoid_VL-0063" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DCフレームワーク </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>電流</font></div>
            <a href="/ja/Adjustable_DC_DC_Power_Converter_1V-12V-1.5A" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 1Vから12V DC電源コンバータ</font></span></a>
            <br/>
            <a href="/ja/RS-232_To_TTL_Conveter-MAX3232IDR" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RS-232からTTLコンバータ</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>LED</font></div>
            <a href="/ja/FSM-55" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FSM-55 LED</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>入力 / 出力</font></div>
            <a href="/ja/USB_To_Uart_5V_3V3" target="_blank"><span><font color={'FFFFFF'} size={"2"}> USBからUART 5V/3V3</font></span></a>
            <br/>
<a href="/ja/13.56Mhz_RFID_module-IOS-IEC_14443_type_a" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RFIDモジュール</font></span></a>
            <br/>
<a href="/ja/AVR_USB_Programmer" target="_blank"><span><font color={'FFFFFF'} size={"2"}> AVR USBプログラマ</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ケース</font></div>
            <a href="/ja/Bracket_for_Infrared_Proximity_Sensor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 赤外線近接センサー用ブラケットケース</font></span></a>
            <br/>
            <a href="/ja/Shield-MaTrix-V0.9b" target="_blank"><span><font color={'FFFFFF'} size={"2"}> シールドMaTrix V0.9</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ツール</font></div>
            <a href="/ja/Bluetooth_Multimeter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Bluetoothマルチメーター</font></span></a>
            <br/>
            <a href="/ja/DSO_Nano" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DSO Nanoオシロスコープ</font></span></a>
            <br/>
            <a href="/ja/RF_Explorer_Software" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RF Explorerソフトウェア</font></span></a>
            <br/>
    </div>
</div>

### コース付きキット

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduino付きキット</font></div>
            <a href="/ja/Grove_Beginner_Kit_for_Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Beginner Kit for Arduino </font></span></a>
            <br/>
            <a href="/ja/Grove_Speech_Recognizer_Kit_for_Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Speech Recognizer Kit for Arduino </font></span></a>
            <br/>
            <a href="/ja/Grove_Smart_Plant_Care_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Smart Plant Care Kit </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal付きキット</font></div>
            <a href="/ja/Wio-Terminal-TinyML" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TinyMLとは </font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-TinyML-Kit-Course" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Prof. VijayによるML101アプリケーションキットコース </font></span></a>
            <br/>
            <a href="/ja/Introduction_to_Artificial_Intelligence_for_Makers" target="_blank"><span><font color={'FFFFFF'} size={"2"}> メーカー向け人工知能入門 </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Seeed Studio XIAO付きキット</font></div>
            <a href="/ja/XIAO-Kit-Courses" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio XIAOコース付きキット </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Micro:bit付きキット</font></div>
            <a href="/ja/Grove_Inventor_Kit_for_microbit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Inventor Kit for Micro:bit</font></span></a>
            <br/>
    </div>
</div>

### チュートリアル

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>Arduinoボードチュートリアル</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>Arduinoボードに関するさまざまなチュートリアルとガイドをここで探索してください</font></div>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><a href="/ja/Download-Arduino-and-install-Arduino_Driver" target="_blank"><span><font color={'8DC215'} size={"5"}>📖 Arduino基本使用法</font></span></a></div>
            <a href="/ja/Download-Arduino-and-install-Arduino_Driver" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ArduinoをダウンロードしてArduinoドライバーをインストールする</font></span></a>
            <br/>
            <a href="/ja/Seeed_Arduino_Boards" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Arduino IDEにSeeed Studioボードを追加する方法</font></span></a>
            <br/>
            <a href="/ja/Guide_to_use_demos_downloaded_from_Seeed-s_Github" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio Githubからダウンロードしたデモを使用する方法</font></span></a>
            <br/>
            <a href="/ja/How_to_use_and_write_a_library" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ライブラリを使用して作成する方法</font></span></a>
            <br/>
            <a href="/ja/Upload_Code" target="_blank"><span><font color={'FFFFFF'} size={"2"}> コードをアップロードする方法</font></span></a>
            <br/>
            <a href="/ja/Use_External_Editor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 外部エディターを使用する</font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><a href="/ja/Arduino-AWS-IOT-Bridge" target="_blank"><span><font color={'8DC215'} size={"5"}>📖 Arduino拡張使用法</font></span></a></div>
            <a href="/ja/Suli" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Suli</font></span></a>,
            <a href="/ja/Seeed_Arduino_Serial" target="_blank"><span><font color={'FFFFFF'} size={"2"}>Seeed Arduino Serial</font></span></a>
            <br/>
            <a href="/ja/I2C_And_I2C_Address_of_Seeed_Product" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed製品のI2CおよびI2Cアドレス</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-Firmata" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Firmataチュートリアル - Arduino互換でFirmataを使用する方法</font></span></a>
            <br/>
            <a href="/ja/Software-FreeRTOS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FreeRTOSチュートリアル - マルチタスクを適用する方法</font></span></a>
            <br/>
            <a href="/ja/Software-SWD" target="_blank"><span><font color={'FFFFFF'} size={"2"}> SWDインターフェースを使用してArduinoボードをデバッグする方法</font></span></a>
            <br/>
            <a href="/ja/Flashing-Arduino-Bootloader-DAPLink" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DAP Linkを使用してArduinoブートローダーをフラッシュする</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduinoのコンパイルプラットフォーム</font></div>
            <a href="/ja/Software-PlatformIO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> PlatformIO </font></span></a>
            <br/>
            <a href="/ja/Compiling_MicroPython_for_embedded_devices" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 組み込みデバイス向けMicroPythonのコンパイル </font></span></a>
            <br/>
            <a href="/ja/Guide_for_Codecraft_using_Arduino" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Arduino用Codecraftプラットフォーム </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'left'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Arduinoボードの楽しいプロジェクト</font></div>
            <a href="/ja/IR_Remote" target="_blank"><span><font color={'FFFFFF'} size={"2"}> IRリモート</font></span></a>
            <br/>
            <a href="/ja/Joystick_Control_RGB_Led" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ジョイスティックでRGB LEDを制御</font></span></a>
            <br/>
            <a href="/ja/Light_Sensor_and_LED_Bar" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 光センサーとLEDバー</font></span></a>
            <br/>
    </div>
</div>

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>Wio Terminal チュートリアル</font></div>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>さまざまなガイドやチュートリアルをここで探索してください</font></div>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><a><span><font color={'8DC215'} size={"5"}>Wio Terminal の基本的な使い方</font></span></a></div>
            <a href="/ja/Wio-Terminal-Firmware" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal でレトロゲームをプレイする方法</font></span></a>
            <br/>
            <a><span><font color={'FFFFFF'} size={"2"}>USBホストとしての</font></span></a>
            <a href="/ja/Wio-Terminal-USBH-Keyboard" target="_blank"><span><font color={'FFFFFF'} size={"2"}> キーボード</font></span></a>,
            <a href="/ja/Wio-Terminal-USBH-Mouse" target="_blank"><span><font color={'FFFFFF'} size={"2"}> マウス</font></span></a>,
            <a href="/ja/Wio-Terminal-USBH-Xbox" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Xbox</font></span></a>
            <br/>
            <a><span><font color={'FFFFFF'} size={"2"}>USBクライアントとしての</font></span></a>
            <a href="/ja/Wio-Terminal-USBCLIENT-Keyboard" target="_blank"><span><font color={'FFFFFF'} size={"2"}> キーボード</font></span></a>,
            <a href="/ja/Wio-Terminal-USBCLIENT-Mouse" target="_blank"><span><font color={'FFFFFF'} size={"2"}> マウス</font></span></a>,
            <a href="/ja/Wio-Terminal-USBCLIENT-MIDI" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MIDI</font></span></a>,
            <a href="/ja/Wio-Terminal-HMI-Usermode-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> HMI</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-Displaying-Gyro" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal でジャイロを表示する方法</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-Storting-Analog-Data" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal を使用してデータを保存する方法</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-Displaying-Photos" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal を使用して写真を表示する方法</font></span></a>
            <br/>
    </div>
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Wio Terminal 楽しいプロジェクト</font></div>
            <a href="/ja/Azure_IoT_CC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Codecraft コンパイルプラットフォームを使用して Azure IoT に接続する</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-Interactive-Face" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal インタラクティブフェイスデモ</font></span></a>
            <br/>
            <a href="/ja/Barometric-Pressure-sensor-using-the-Wio-terminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal を使用した気圧センサー</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-Reading-COVID19" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal を使用して新型コロナウイルスのライブデータを読み取る</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-Sound-Meter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal で騒音レベルを測定する方法</font></span></a>
            <br/>
            <a href="/ja/Wio-Terminal-8720-dev" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Wio Terminal を RTL8720DN 開発ボードとして使用する方法</font></span></a>
            <br/>
    </div>
</div>

## シングルボードコンピュータ

<strong><font color={'8DC215'} size={"4"}>このセクションでは、シングルボードコンピュータを使用した基本的な開発について説明します。以下の内容を探索できます：</font></strong>

- シングルボードコンピュータの開発
- SBCを基にしたアプリケーション
- さまざまなソフトウェアのデプロイ
- OSのインストール
- SBC用の拡張ボードまたはキャリアボード
- SBC用アクセサリ
- SBCを基にしたコース付きキット
- チュートリアル

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><a href="/ja/BeagleBone" target="_blank"><span><font color={'8DC215'} size={"5"}> BeagleBone® </font></span></a></div>
            <a href="/ja/BeagleBone_Blue" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Blue </font></span></a>
            <br/>
            <a href="/ja/BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green </font></span></a>
            <br/>
            <a href="/ja/BeagleBone_Green_Wireless" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green Wireless </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY</font></div>
            <a href="/ja/ODYSSEY-X86J4105" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 </font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-GPIO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105用ハードウェア </font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-STM32MP157C" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY STM32MP157C </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Quantum Development Board</font></div>
            <a href="/ja/Quantum-Mini-Linux-Development-Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Quantum Mini Linux Development Kit </font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi®</font></div>
            <a href="/ja/Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Piの紹介 </font></span></a>
            <br/>
            <a href="/ja/Raspberry_Pi_3_Model_B" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 3 Model B </font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'808080'} size={"5"}>レガシーデバイス</font></div>
            <a href="/ja/ReSpeaker" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeakerシリーズ </font></span></a>
            <br/>
            <a href="/ja/NPi-i.MX6ULL-Dev-Board-Linux-SBC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NPiシリーズ</font></span></a>
     </div>
</div>

### アプリケーション / ソフトウェア

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSYアプリケーション</font></div>
            <a href="/ja/ODYSSEY-X86J4105-AzureIOT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEYをAzure IoTに接続</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-Intel-OpenVINO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Intel OpenVINO Toolkitを使用したコンピュータビジョン</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-Frigate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Frigateを使用したコンピュータビジョン</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEYソフトウェア</font></div>
            <a href="/ja/ODYSSEY-X86-Home-Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEYでのHome Assistant</font></span></a>
            <br/>
            <a href="/ja/Connect-Grove-to-Home-Assistant-ESPHome" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ESPHomeを使用したGroveモジュールの接続</font></span></a>
            <br/>
            Mender
            <a href="/ja/Mender-Client-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> クライアント</font></span></a>,
            <a href="/ja/Mender-Server-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> サーバー</font></span></a>
            <br/>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/ja/BeagleBone_Solutions" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone®ソリューション</font></span></a>
    </div>
</div>

### OSインストール / ファームウェア更新

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/ja/ODYSSEY-X86J4105-Installing-OS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナルOSのインストール</font></span></a>,
            <a href="/ja/ODYSSEY-X86J4105-Updating-Firmware" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ファームウェアの更新</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-Installing-openwrt" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OpenWRT</font></span></a>,
            <a href="/ja/ODYSSEY-X86-OPNsense" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OPNsense</font></span></a>,
            <a href="/ja/ODYSSEY-X86J4105-pfSense" target="_blank"><span><font color={'FFFFFF'} size={"2"}> pfSense</font></span></a>,
            <a href="/ja/Jellyfin-on-Docker-Ubuntu-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jellyfin</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86-TrueNAS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TrueNAS</font></span></a>,
            <a href="/ja/ODYSSEY-X86J4105-Installing-FreeNAS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FreeNAS</font></span></a>,
            <a href="/ja/ODYSSEY-X86J4105-Installing-Android" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Android-x86</font></span></a>,
            <a href="/ja/BalenaOS-X86-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> balenaOS</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/ja/Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナルOSのインストール</font></span></a>
    </div>
</div>

### 拡張機能

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi - Pi HAT</font></div>
            <a href="/ja/Grove_Base_Hat_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Base HAT </font></span></a>,
            <a href="/ja/Grove_AI_HAT_for_Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove AI HAT</font></span></a>,
            <a href="/ja/RS-485_Shield_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RS-485 Pi HAT</font></span></a>,
            <a href="/ja/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 8-Channel 12-Bit ADC HAT</font></span></a>,
            <a href="/ja/ReSpeaker_4_Mic_Array_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker Pi HAT</font></span></a>
            <br/>
            <a href="/ja/Grove_Base_HAT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 詳細はこちら</font></span></a>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/ja/BeagleBone_Green_HDMI_Cape" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green HDMI Cape</font></span></a>
            <br/>
            <a href="/ja/Motor_Bridge_Cape_v1.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Motor Bridge Cape v1.0 for BeagleBone®</font></span></a>
            <br/>
            <a href="/ja/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green LCD Cape with Resistive Touch</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reSpeaker</font></div>
            <a href="/ja/ReSpeaker_Drive_Unit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeakerシリーズ用ドライブユニット</font></span></a>
            <br/>
            <a href="/ja/ReSpeaker_Mic_Array_v2.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeakerシリーズ用マイクアレイ</font></span></a>
            <br/>
    </div>
</div>

### アクセサリー

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/ja/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi用スケルトンボックス</font></span></a>
            <br/>
            <a href="/ja/Raspberry_PI_Bplus_Case" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry PI B Plusケース</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/ja/Coral-Mini-PCIe-Accelerator-x86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Coral Mini PCIeアクセラレータ</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-LTE-Module" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LTEモジュール</font></span></a>
            <br/>
    </div>
</div>

### コース付きキット

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/ja/Grove_Base_Kit_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi用Groveベースキット</font></span></a>
            <br/>
            <a href="/ja/LoRa_LoRaWan_Gateway_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LoRa®/LoRaWAN®ゲートウェイキット</font></span></a>
            <br/>
            <a href="/ja/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi用Grove IoTスターターキット</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/ja/Grove_Starter_Kit_for_BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green用Groveスターターキット</font></span></a>
            <br/>
            <a href="/ja/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone Green用Grove IoTスターターAWS IoTキット</font></span></a>
            <br/>
    </div>
</div>

### チュートリアル / FAQ

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/ja/remote_connect" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi/reComputerへのリモート接続</font></span></a>
            <br/>
            <a href="/ja/Raspberry_pi_CM4_update_eeprom" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi CM4のEEPROMを更新</font></span></a>
    </div>
</div>