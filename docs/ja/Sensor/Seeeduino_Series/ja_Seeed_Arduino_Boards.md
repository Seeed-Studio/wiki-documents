---
description: Arduino IDEにSeeedボードを追加する方法
title: Arduino IDEにSeeedボードを追加する方法
keywords:
  - チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeed_Arduino_Boards
last_update:
  date: 05/15/2025
  author: w0x7ce
---


SeeedはArduino IDEで動作する多くのボードを設計しています。以下を含みます：

- [Seeeduino XIAO](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)
- [Seeeduino Wio Terminal](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)
- [Seeeduino Lotus Cortex-M0+](https://wiki.seeedstudio.com/ja/Seeeduino_Lotus_Cortex-M0-/)
- [Seeeduino LoRaWAN](https://wiki.seeedstudio.com/ja/Seeeduino_LoRAWAN/)/GPS
- [Seeeduino Cortex M0](https://wiki.seeedstudio.com/ja/Seeeduino-Cortex-M0/)

:::caution
上記のボードはAT SAMD21マイクロコントローラーシリーズです。以下のURLをステップ2の*追加のボードマネージャーURL*にコピーしてください。
:::

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

* Seeeduino [V3](https://wiki.seeedstudio.com/ja/Seeeduino_v3.0/)/[4](https://wiki.seeedstudio.com/ja/Seeeduino_v4.0/)
- [Seeeduino Lotus](https://wiki.seeedstudio.com/ja/Seeeduino_Lotus/)
- Seeeduino Stalker [V2.3](https://wiki.seeedstudio.com/ja/Seeeduino_Stalker_v2.3/)/[3](https://wiki.seeedstudio.com/ja/Seeeduino_v3.0/)/[3.1](https://wiki.seeedstudio.com/ja/Seeeduino_Stalker_V3.1/)
- [Seeeduino Lite](https://wiki.seeedstudio.com/ja/Seeeduino_Lite/)
- [Seeeduino Mega](https://wiki.seeedstudio.com/ja/Seeeduino_Mega/)
- [Seeeduino Mega Protoshield Kit](https://wiki.seeedstudio.com/ja/Seeeduino_Mega_Protoshield_Kit/)
- [Seeeduino GPRS](https://wiki.seeedstudio.com/ja/Seeeduino_GPRS/)
- [Seeeduino Ethernet](https://wiki.seeedstudio.com/ja/Seeeduino_Ethernet/)
- [Seeeduino Cloud](https://wiki.seeedstudio.com/ja/Seeeduino_Cloud/)
- [Seeeduino Nano](https://wiki.seeedstudio.com/ja/Seeeduino-Nano/)
- [Seeeduino Crypto (ATmega4809 ECC608)](https://wiki.seeedstudio.com/ja/Seeeduino-Crypto-ATmega4809-ECC608/)
- [LinkIt ONE](https://wiki.seeedstudio.com/ja/LinkIt_ONE/)
- [RePhone Series](https://wiki.seeedstudio.com/ja/RePhone/)

:::note
上記のSeeeduino V3からRePhoneシリーズまでのボードはAT SAMD21マイクロコントローラーシリーズではありません。以下のURLをステップ2の*追加のボードマネージャーURL*にコピーしてください。
:::

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

Arduino IDEの新機能のおかげで、これらのボードをArduino IDEに簡単に追加できるようになりました。

以下の手順を実行してください。

## ステップ1. 最新のArduino IDEをダウンロードする

バージョン1.6.4以降のArduino IDEが必要です。コンピュータにArduino IDEがインストールされていない場合は、ダウンロードしてください。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

## ステップ2. Arduino IDEの設定

Arduino IDEを開き、**ファイル > 設定**をクリックし、以下のURLを*追加のボードマネージャーURL*にコピーしてください。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## ステップ3. ボードマネージャー

**ツール > ボード > ボードマネージャー**をクリックします。

ボード名で検索できます。例えば、`LinkIt ONE`を使用する場合は`LinkIt`と検索し、`RePhone Series`を使用する場合は`RePhone`と入力してください。このWikiでは、`Seeeduino Stalker V3`を例にします。

`Seeeduino Stalker V3`をクリックすると**インストール**ボタンが表示されます。それをクリックしてステップを完了してください。このプロセスはネットワーク速度によって約5分から30分かかります。

![](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/img/add_board.png)

## ステップ4. ボードを選択する

ステップ3が成功すると、Seeeduino Stalker V3という名前のボードがボードリストに表示されます。

**ツール > ボード**をクリックすると、*Seeeduino Stalker V3*が利用可能になります。

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
