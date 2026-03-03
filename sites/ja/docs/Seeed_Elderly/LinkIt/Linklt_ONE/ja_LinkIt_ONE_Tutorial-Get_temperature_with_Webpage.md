---
description: LinkIt ONE チュートリアル - Webページで温度を取得
title: LinkIt ONE チュートリアル - Webページで温度を取得
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**私たちが行うこと**

LinkIt OneはWi-Fi通信機能を備えています。LinkIt Oneを使用していくつかのデータを収集しました。このデバイスをインターネットAPとして使用し、Webサーバーを提供することでデータアクセスをサポートします。対応するIPアドレスにアクセスすることで、ブラウザを使用してデータを取得できます。次のステップでは、回路を接続し、温度センサーからデータを取得します。その後、Wi-Fiアンテナを装備し、ネットワークに接続します。ネットワークを選択し、3つのパラメータ（ネットワーク名（WiFi_AP）、アクセスパスワード（WIFI_PASSWORD）、ルーターの伝送モード（LWIFI_OPEN、LWIFI_WPA、LWIFI_WEPのいずれか））を入力してください。最後に、コードをLinkIt Oneにアップロードします。ネットワーク対応の端末を使用してブラウザを開き、IPアドレスを入力すると温度データを取得できます。（DHCPルーターアクセスを介して割り当てられたIPアドレスにアクセスします）

**必要なもの**

*   LinkIt One x 1

*   ブレイクボード x 1

*   抵抗 330Ω x 1
*   Wi-Fiアンテナ x 1

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_1.jpg)

**接続**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_2.jpg)

**コード**

以下のボタンをクリックして、キット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ファイルを解凍して、Arduino IDEの**Examples**フォルダに保存してください。

デモコードにアクセスするには、以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L10_Web_Temp_

**注意**：プログラムを開始するには、シリアルモニターを開いて何かを入力する必要があります。

**トラブルシューティング**

*   アンテナが動作しない？

    *   アンテナ接続が安定しているか確認してください。（アンテナソケットは背面にあり、「Wi-Fi/BT ANT」と記されています）

*   IPアドレスはどこにありますか？

    *   まずシリアルモードを調整します（DEBUG -> MODE）。シリアルポートを通じてクエリを実行できます。コンパイラの右上隅にある拡大アイコンをクリックしてください。割り当てられたIPアドレスを標準的にクエリします。（この手順を実行するには、Tools -> Port -> COMXを変更してください）

**改善方法**

リアルタイムでデータを変更したいですか？Webポートを通じて光感度値の変化を監視します。

デモコードにアクセスするには、以下を開きます：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L10_Web_Temp_Advanced_

**さらなるアイデア**

Webを使用してLinkIt Oneを制御したい場合、ハードウェアの動作をどのように制御できますか？

**参考**
<!-- 
*   [The Basics](/ja/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/ja/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/ja/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/ja/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/ja/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/ja/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/ja/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/ja/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/ja/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/ja/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>