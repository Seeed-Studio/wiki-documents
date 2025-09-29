---
description: エッジコンピューティング
title: エッジコンピューティング
keywords:
- エッジコンピューティング
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeed_Elderly/Navigation/Edge_Computing_4.7
last_update:
  date: 05/15/2025
  author: Matthew
---


このトピックでは、リアルタイム処理が必要なアプリケーションにおいて、さまざまなセンサーによって生成される「即時」データを処理するエッジコンピューティングアーキテクチャに関するSeeed Studio製品ドキュメントを紹介します。このページでは、異なる計算能力を持つ複数のデバイスが紹介されています。

このページは、大きく2つのセクションに分かれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/edge_computing/edge_computing_publish.png" alt="pir" width={1000} height="auto" /></p>

## 産業用計算

<strong><font color={'8DC215'} size={"4"}>このセクションでは、エッジコンピューティングアーキテクチャを統合したデバイスを紹介します。以下の内容が含まれます:</font></strong>

- 産業レベルの計算能力を持つデバイス
- デバイスを基にしたアプリケーション
- 異なるソフトウェアのデプロイメント
- OSのインストール
- デバイス用の拡張ボードまたはキャリアボード
- チュートリアル

### デバイス

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/ja/reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal の使い方 </font></span></a>
            <br/>
            <a href="/ja/reTerminal-hardware-interfaces-usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ハードウェアとインターフェースの使用方法 </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer</font></div>
            <a href="/ja/reComputer_Jetson_Series_Initiation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer シリーズの使い方 </font></span></a>
            <br/>
            <a href="/ja/reComputer_Jetson_Series_Hardware_Layout" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer シリーズのハードウェアレイアウト </font></span></a>
            <br/>
            <a href="/ja/reComputer_Jetson_Series_GPIO_Grove" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer シリーズのGPIOとGrove </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="//reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer X86シリーズ - Intel® Core™ </font></span></a>
            <br/>
            <a href="//reServer_J2032_Getting_Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer J2032 - NVIDIA® Jetson NX Xavier </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>産業用ミニPC</font></div>
            <a href="/ja/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 - Jetpack 5.0, Jetson Xavier NX 8GB, RS232 </font></span></a>
            <br/>
            <a href="/ja/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E - Jetpack 5.0, Jetson Xavier NX 8GB, 2xGbE</font></span></a>
            <br/>
            <a href="/ja/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 - Jetpack 5.0, Jetson AGX Orin 32GB, 10Gps </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>エッジシリーズ</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - ESP32ベース/ RS485/ Ethernet </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - Raspberry Pi CM4ベース/ IEC </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - Raspberry Pi CM4ベース</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 代替品</font></div>
            <a href="/ja/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 / NVIDIA Jetson AGX Xavier 開発キット - Jetpack 4.4 | Jetpack 4.6 | Jetpack 5.0</font></span></a>
            <br/>
    </a>
</div>

### アプリケーション / ソフトウェア

<div class="independent_container">
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/ja/reTerminal-build-UI-using-LVGL" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LVGL</font></span></a>,
            <a href="/ja/reTerminal-build-UI-using-Flutter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Flutter</font></span></a>,
            <a href="/ja/reTerminal-build-UI-using-Electron" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Electron</font></span></a>,
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
            <a href="/ja/reTerminal-Home-Assistant-Customize" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Home Assistantのカスタマイズ</font></span></a>
            <br/>
    </a>
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>エッジシリーズ</font></div>
            <a href="/ja/Edgebox-rpi-200-codesys" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 コントローラーでのCodesys</font></span></a>
            <br/>
            <a href="/ja/Contributor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 近日公開予定の詳細</font></span></a>
            <br/>
    </a>
</div>

<div class="independent_container">
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer アプリケーション</font></div>
            <a href="/ja/HardHat" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ヘルメット検出 </font></span></a>
            <br/>
            <a href="/ja/No-code-Edge-AI-Tool" target="_blank"><span><font color={'FFFFFF'} size={"2"}> コード不要のエッジAIツール </font></span></a>
            <br/>
            <a href="/ja/Jetson-Nano-MaskCam" target="_blank"><span><font color={'FFFFFF'} size={"2"}> マスクカム </font></span></a>
            <br/>
            <a href="/ja/DashCamNet-with-Jetson-Xavier-NX-Multicamera" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DashCamNet with Jetson Xavier NX マルチカメラ </font></span></a>
            <br/>
            <a href="/ja/Traffic-Management-DeepStream-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> トラフィック管理 DeepStream SDK </font></span></a>
            <br/>
            <a href="/ja/YOLOv5-Object-Detection-Jetson" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 少数ショットオブジェクト検出 </font></span></a>
            <br/>
    </a>
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer 用ソフトウェア</font></div>
            <a href="/ja/Allxon-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Allxon の使い方 </font></span></a>
            <br/>
            <a href="/ja/jetson-docker-getting-started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Docker の使い方</font></span></a>
            <br/>
            <a href="/ja/alwaysAI-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> alwaysAI の使い方 </font></span></a>
            <br/>
            <a href="/ja/DeciAI-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Deci の使い方 </font></span></a>
            <br/>
            <a href="/ja/Update-Jetson-Linux-OTA-Using-Allxon" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Allxon を使用した Jetson Linux のOTA更新 </font></span></a>
            <br/>
            <a href="/ja/reComputer_Jetson_Series_Resource" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson リソース </font></span></a>
            <br/>
    </a>
</div>

### OSインストール / ファームウェア更新

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/ja/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reTerminal-Buildroot-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Buildroot</font></span></a>,
            <a href="/ja/reTerminal-Yocto" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Yocto</font></span></a>
            <br/>
            <a href="/ja/Streampi_OBS_On_reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Stream-pi & OBS studio</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer シリーズ</font></div>
            <a href="/ja/reComputer_J1010_J101_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1010 | J101 オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reComputer_J2021_J202_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J2021 | J202 オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reComputer_J1020_A206_Flash_JetPack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1020 | A206 オリジナルOSインストール</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="//reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナルOSインストール</font></span></a>
            <br/>
            <a href="//reServer-Update-BIOS-Install-Drivers" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BIOSのアップグレードとドライバのインストール</font></span></a>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ミニPC</font></div>
            <a href="/ja/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E オリジナルOSインストール</font></span></a>
            <br/>
            <a href="/ja/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 オリジナルOSインストール</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>エッジシリーズ</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - OSインストール </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - OSインストール </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - OSインストール</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 代替</font></div>
            <a href="/ja/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 オリジナルOSインストール</font></span></a>
    </a>
</div>

### 拡張機能 / キャリアボード

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal 拡張機能</font></div>
            <a href="/ja/reTerminalBridge" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 - UPS、ギガビットイーサネット、LTE/4G/5G/LoRaWAN®、RS485/232、CAN、SATA 2.0 を拡張</font></span></a>
            <br/>
            <a href="/ja/reTerminal_Mount_Options" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 マウントオプション</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>NVIDIA Jetson 拡張機能</font></div>
            <a href="/ja/reComputer_A203_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203、Jetson Nano / Xavier NX/TX2 NX をサポート</font></span></a>
            <br/>
            <a href="/ja/reComputer_A205_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205、Jetson Nano / Xavier NX/TX2 NX をサポート</font></span></a>
            <br/>
            <a href="/ja/Jetson-Mate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Mate クラスター、4つのJetson Nano/NX をサポート</font></span></a>
            <br/>
    </a>
</div>

### チュートリアル / FAQ

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/ja/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal 使用に関するFAQ</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer / NVIDIA Jetson</font></div>
            <a href="/ja/reComputer_Jetson_Memory_Expansion" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NVIDIA Jetson ボードのメモリ拡張</font></span></a>
            <br/>
            <a href="/ja/J1010_Boot_From_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reComputer J1010 でのSDカードからの起動</font></span></a>
            <br/>
            <a href="/ja/J101_Enable_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J101キャリアボードでのSDカードの有効化</font></span></a>
            <br/>
    </a>
</div>

## 基本開発

<strong><font color={'8DC215'} size={"4"}>このセクションでは、基本的な開発のためのシングルボードコンピュータ（SBC）を紹介します。以下の内容が含まれます：</font></strong>

- 開発用シングルボードコンピュータ
- SBCを基にしたアプリケーション
- 各種ソフトウェアのデプロイ
- OSのインストール
- SBC用の拡張ボードまたはキャリアボード
- SBC用アクセサリ
- SBCを基にしたコース付きキット
- チュートリアル

### シングルボードコンピュータ

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><a href="/ja/BeagleBone" target="_blank"><span><font color={'8DC215'} size={"5"}> BeagleBone® </font></span></a></div>
            <a href="/ja/BeagleBone_Blue" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Blue </font></span></a>
            <br/>
            <a href="/ja/BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green </font></span></a>
            <br/>
            <a href="/ja/BeagleBone_Green_Wireless" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green Wireless </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY</font></div>
            <a href="/ja/ODYSSEY-X86J4105" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 </font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-GPIO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 用ハードウェア </font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-STM32MP157C" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY STM32MP157C </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Quantum 開発ボード</font></div>
            <a href="/ja/Quantum-Mini-Linux-Development-Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Quantum Mini Linux 開発キット </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi®</font></div>
            <a href="/ja/Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi の紹介 </font></span></a>
            <br/>
            <a href="/ja/Raspberry_Pi_3_Model_B" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 3 Model B </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'808080'} size={"5"}>廃止されたデバイス</font></div>
            <a href="/ja/ReSpeaker" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker シリーズ </font></span></a>
            <br/>
            <a href="/ja/NPi-i.MX6ULL-Dev-Board-Linux-SBC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> NPi シリーズ</font></span></a>
     </a>
</div>

### アプリケーション / ソフトウェア

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSY アプリケーション</font></div>
            <a href="/ja/ODYSSEY-X86J4105-AzureIOT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY を Azure IoT に接続</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-Intel-OpenVINO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Intel OpenVINO Toolkit を使用したコンピュータビジョン</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-Frigate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Frigate を使用したコンピュータビジョン</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY ソフトウェア</font></div>
            <a href="/ja/ODYSSEY-X86-Home-Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY 上の Home Assistant</font></span></a>
            <br/>
            <a href="/ja/Connect-Grove-to-Home-Assistant-ESPHome" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ESPHome を使用した Grove モジュールの接続</font></span></a>
            <br/>
            Mender
            <a href="/ja/Mender-Client-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> クライアント</font></span></a>,
            <a href="/ja/Mender-Server-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> サーバー</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/ja/BeagleBone_Solutions" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® ソリューション</font></span></a>
    </a>
</div>

### OS インストール / ファームウェア更新

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/ja/ODYSSEY-X86J4105-Installing-OS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナル OS インストール</font></span></a>,
            <a href="/ja/ODYSSEY-X86J4105-Updating-Firmware" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ファームウェア更新</font></span></a>
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
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/ja/Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> オリジナル OS インストール</font></span></a>
    </a>
</div>

### 拡張 / キャリアボード

<div class="title_container">
    <a class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi - Pi HAT</font></div>
            <a href="/ja/Grove_Base_Hat_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Base HAT </font></span></a>,
            <a href="/ja/Grove_AI_HAT_for_Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove AI HAT</font></span></a>,
            <a href="/ja/RS-485_Shield_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RS-485 Pi HAT</font></span></a>,
            <a href="/ja/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 8チャンネル 12ビット ADC HAT</font></span></a>,
            <a href="//ReSpeaker_4_Mic_Array_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker Pi HAT</font></span></a>
            <br/>
            <a href="/ja/Grove_Base_HAT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 詳細を見る</font></span></a>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/ja/BeagleBone_Green_HDMI_Cape" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green HDMI ケープ</font></span></a>
            <br/>
            <a href="/ja/Motor_Bridge_Cape_v1.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® 用モーターブリッジケープ v1.0</font></span></a>
            <br/>
            <a href="/ja/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch" target="_blank"><span><font color={'FFFFFF'} size={"2"}> 抵抗膜タッチ付き BeagleBone® Green LCD ケープ</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reSpeaker</font></div>
            <a href="//ReSpeaker_Drive_Unit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker シリーズ用ドライブユニット</font></span></a>
            <br/>
            <a href="//ReSpeaker_Mic_Array_v2.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker シリーズ用マイクアレイ</font></span></a>
            <br/>
    </a>
</div>

### アクセサリー

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/ja/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 用スケルトンボックス</font></span></a>
            <br/>
            <a href="/ja/Raspberry_PI_Bplus_Case" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry PI B Plus ケース</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/ja/Coral-Mini-PCIe-Accelerator-x86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Coral Mini PCIe アクセラレータ</font></span></a>
            <br/>
            <a href="/ja/ODYSSEY-X86J4105-LTE-Module" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LTE モジュール</font></span></a>
            <br/>
    </a>
</div>

### コース付きキット

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/ja/Grove_Base_Kit_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 用 Grove ベースキット</font></span></a>
            <br/>
            <a href="/ja/LoRa_LoRaWan_Gateway_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LoRa®/LoRaWAN® ゲートウェイキット</font></span></a>
            <br/>
            <a href="/ja/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi ベースの IoT 用 Grove スターターキット</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/ja/Grove_Starter_Kit_for_BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green 用 Grove スターターキット</font></span></a>
            <br/>
            <a href="/ja/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone Green 用 Grove IoT スターター AWS IoT キット</font></span></a>
            <br/>
    </a>
</div>

### チュートリアル / FAQ

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/ja/remote_connect" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi/reComputer にリモート接続する</font></span></a>
            <br/>
            <a href="/ja/Raspberry_pi_CM4_update_eeprom" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi CM4 の EEPROM を更新する</font></span></a>
    </a>
</div>