---
description: Seeed Studio XIAO MG24 with PlatformIO
title: XIAO MG24 with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /ja/xiao_mg24_with_platform_io
last_update:
  date: 03/17/2024
  author: Jason
  sidebar_position: 5
---


<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp" /></div>

## PlatformIO 紹介

PlatformIOは多くの種類の開発ボードを統合し、優れた拡張性を持つ開発プラットフォームです。プラットフォームに必要なタイプがない場合は、手動で開発ボードのタイプを追加することができます。Arduinoで書いたコードはそのまま使用でき、対応するライブラリを追加するだけです。

このwikiでは、PlatformIOでサンプルコードをインストールして実行する方法を紹介します。

## XIAO MG24でPlatformIOを使用する

### セットアップ1. 公式サイトから[PlatformIO](https://platformio.org/platformio-ide)をインストール

PlatformIOソフトウェアをまだインストールしていない場合は、上記のリンクをクリックしてください。

### セットアップ2. PlatformIOで任意のプロジェクトを作成

ここでは任意の開発バージョンを選択してプロジェクトファイルを作成できます。例としてXIAO ESP32 C3を使用します。

<table align="center">
  <tr>
      <th>操作1</th>
        <th>操作2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>


### セットアップ3. platformio.iniファイルを修正

PlatformIOファイルの作成に成功すると、左列に多くのファイルが表示されます。platform.iniという名前のファイルが見えます。次に、その中身を置き換える必要があります。
<table align="center">
  <tr>
      <th>操作3</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/mg24platform.jpg"/></div>
  </tr>
</table>

以下のコードをコピーして、platform.iniファイルの内容を置き換える必要があります。

```
[env:seeed_xiao_mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
```

:::tip
ファイルを保存することを忘れずに、Ctrl+Sでローディングが始まります
:::

### セットアップ4. コンパイルと書き込み

**次に、このコードを使用してコンパイルと書き込みを行います**

```cpp
#include <Arduino.h>
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}
```


<table align="center">
  <tr>
      <th>操作4</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/mg24_platform/mg.png" /></div>
  </tr>
</table>

コンパイルが正常に完了したことが表示されます。次に、XIAO MG24にアクセスして書き込みを行うことができます。


### セットアップ5. 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>