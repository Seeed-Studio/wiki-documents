---
description: Seeed Studio XIAO nRF52840 with PlatformIO
title: XIAO nRF52840-Sense with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png
slug: /ja/xiao_nrf52840_with_platform_io
last_update:
  date: 08/14/2024
  author: Jason
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png" /></div>

# **Seeed Studio XIAO nRF52840 と PlatformIO**

PlatformIOは多くの種類の開発ボードを統合し、優れた拡張性を持つ開発プラットフォームです。プラットフォームに必要なタイプがない場合は、手動で開発ボードのタイプを追加することができます。Arduinoで書いたコードを使用でき、対応するライブラリを追加するだけです。

このwikiでは、PlatformIOでサンプルコードをインストールして実行する方法を紹介します。

## XIAO nRF52840でPlatformIOを使用する

### セットアップ1. 公式サイトで[PlatformIO](https://platformio.org/platformio-ide)をインストール

PlatformIOソフトウェアをまだインストールしていない場合は、上記のリンクをクリックしてください。

### セットアップ2. PlatformIOで任意のプロジェクトを作成

プラットフォームにはすでにXIAO ESP32S3とXIAO ESP32C3開発ボードのオプションがあるため、そのうちの1つを選択してファイルを作成できます。もちろん、他のファイルでも構いません。プロジェクト名も任意に選択できます。ここではXIAO ESP32 C3を例として使用します。

<table align="center">
  <tr>
      <th>操作1</th>
        <th>操作2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
</table>

:::tip
これより前に、すでにXIAO ESP32C6とXIAO nRF52840のインストールパッケージをインストールしていたため、操作2の画像にXIAO ESP32C6とXIAO nRF52840のオプションが表示されていますが、操作を実行する際にはそれらは表示されません。
:::

### セットアップ3. platformio.iniファイルを修正

PlatformIOファイルの作成に成功すると、左列に多くのファイルが表示されます。platform.iniという名前のファイルが見えます。次に、その中身を置き換える必要があります。
<table align="center">
  <tr>
      <th>操作3</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

以下のコードをコピーして、platform.iniファイルの内容を置き換える必要があります。

```
[env:seeed_xiao_nrf52840_sense]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
```
:::tip
ファイルを保存することを忘れないでください。Ctrl+Sで保存すると、読み込みが開始されます。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>