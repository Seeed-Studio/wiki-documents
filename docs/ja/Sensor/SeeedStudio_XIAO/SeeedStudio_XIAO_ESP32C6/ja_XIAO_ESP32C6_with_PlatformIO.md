---
description: Seeed Studio XIAO ESP32C6 with PlatformIO
title: XIAO ESP32C6 with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /ja/xiao_esp32c6_with_platform_io
last_update:
  date: 08/13/2024
  author: Jason
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/7.png" /></div>

## PlatformIO 紹介

PlatformIOは多くの種類の開発ボードを統合し、優れた拡張性を持つ開発プラットフォームです。プラットフォームに必要なタイプがない場合は、手動で開発ボードのタイプを追加することができます。Arduinoで書いたコードはそのまま使用でき、対応するライブラリを追加するだけです。

このwikiでは、PlatformIOのインストール方法とサンプルコードの実行方法を紹介します。

## XIAO ESP32C6でPlatformIOを使用する

### セットアップ1. 公式サイトから[PlatformIO](https://platformio.org/platformio-ide)をインストール

PlatformIOソフトウェアをまだインストールしていない場合は、上記のリンクをクリックしてください。

### セットアップ2. PlatformIOでプロジェクトを作成

プラットフォームには既にXIAO ESP32S3とXIAO ESP32C3開発ボードのオプションがあるため、そのうちの1つを選択してファイルを作成できます。もちろん、他のファイルでも構いません。プロジェクト名も任意に選択できます。ここではXIAO ESP32 C3を例として使用します。

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
これより前に、私は既にXIAO ESP32C6インストールパッケージをインストールしていたため、操作2の画像でXIAO ESP32C6のオプションが表示されていますが、あなたが操作を行う際にはそれがありません
:::

### セットアップ3. platformio.iniファイルを修正

PlatformIOファイルの作成に成功すると、左列に多くのファイルが表示されます。platform.iniという名前のファイルが見えます。次に、その中身を置き換える必要があります。

<table align="center">
  <tr>
      <th>操作3</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

以下のコードをコピーして、platform.iniファイルの内容を置き換える必要があります

```
[env:seeed_xiao_esp32_c6]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c6
framework = arduino
```
:::tip
ファイルを保存することを忘れずに、ctrl+sでローディングが始まります
:::

### セットアップ4. コンパイルと書き込み

<table align="center">
  <tr>
      <th>操作4</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/setup3.png" /></div>
  </tr>
</table>

最終的に、以下の画像と同じ結果が得られれば、XIAO ESP32C6開発ボードの追加が成功したことを意味します。再度プロジェクトを作成する際に、XIAO ESP32C6の操作が可能になります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>