---
description: LinkIt ONE チュートリアル - SMSでLEDを制御
title: LinkIt ONE チュートリアル - SMSでLEDを制御
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE_Tutorial-SMS_control_the_LED
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**何をするのか**

このセクションでは、いくつかのクールな機能を実現します。LinkIt Oneの際立った特徴は、通信モジュールが統合されていることです。GSM通信モジュールを使用してメッセージを送信し、スイッチ状態をLEDの変更に反映させます。これは非常にエキサイティングです。まずアンテナを接続し、次にLinkIt OneのスロットにSIMカードを挿入します。その後、回路図に従って回路を接続します。GSM対応の携帯電話を使用して、メッセージ内容を「ON」または「OFF」と編集し、指定された番号（SIM番号）に送信します。これでLEDのスイッチ状態を制御でき、グローバル同期が可能になります。

**必要なもの**

*   LinkIt One x 1

*   ブレークボード x 1

*   抵抗 1kΩ, 330Ω x 1

*   トランジスタ（2N3904） x 1

*   GIS ANT x 1

**回路図**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_1.jpg)

**接続**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_2.png)

**コード**

以下のボタンをクリックして、キット用のコードをダウンロードしてください：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

ファイルをArduino IDEの**Examples**フォルダに解凍してください。

デモコードにアクセスするには以下を開きます：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L9_SMS_Light_

*   アンテナが動作しない場合？

    *   アンテナ接続が安定しているか確認してください。（アンテナソケットは背面にあり、GSM-ANTと記されています）

*   メッセージを送信しても応答がない場合？

    *   SIMカードはロック解除されたバージョンが必要です。（つまり、どの電話機にも制限されないSIMカード）

**改善する方法**

GSMモジュール通信機能を完璧にします。短時間で動作させたい場合、コードをどのように修正すればよいでしょうか？60秒の時間を設定します（ON60形式で送信）。メッセージを送信して、到着後1分で自動的に消灯するように設定します。

デモコードにアクセスするには以下を開きます：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L10_SMS_Light_Advanced_

**さらにアイデアを広げる**

Bluetooth、GPS、Wi-Fi機能モジュールを使用して、新しい遊び方を試してみませんか？

**参考**

<!-- *   [The Basics](/ja/LinkIt_ONE_Tutorial-The_Basics)

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

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>