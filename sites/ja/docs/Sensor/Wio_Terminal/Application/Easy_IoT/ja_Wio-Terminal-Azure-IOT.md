---
title: Wio Terminal を Microsoft Azure IoT に接続する   
nointro:
keywords:
  - ドキュメント
  - ドキュサウラス
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-Azure-IOT/
slug: /ja/Wio-Terminal-Azure-IOT
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wio Terminal を Microsoft Azure IoT に接続する

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/Wio-terminal-azureiot.jpeg" /></div>


>このドキュメントは [**@Benjamin Cabé**](https://twitter.com/kartben) によって作成されました。素晴らしい仕事をしてくださった Benjamin に感謝します！また、[Benjamin の作品](https://github.com/kartben)もこちらでご覧いただけます。

このサンプルアプリケーションでは、[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) を [Azure IoT Hub](https://azure.microsoft.com/services/iot-hub) に接続する方法を示します。このアプリケーションは、Azure サービスと通信するための移植が容易で小型のライブラリである [Azure SDK for Embedded C](https://github.com/Azure/azure-sdk-for-c) を基盤としています。

Wio Terminal を使用して Microsoft Azure IoT に接続する方法については、[**Benjamin のガイド**](https://github.com/kartben/wioterminal-azureiothub-sample)をご覧ください。

## MQTT サーバーへの接続

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/MQTT.png" /></div>


Wio Terminal を MQTT サーバー（Microsoft Azure IoT など）に接続したい場合は、[**Wio Terminal での MQTT に関する Benjamin のガイド**](https://github.com/kartben/wioterminal-mqtts-sample)もチェックしてください！

## 技術サポート & 製品に関する議論
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>