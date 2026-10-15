---
description: Seeed Studio XIAO RP2040 を PlatformIO で使用する
title: PlatformIO で XIAO RP2040 を使う
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.webp
slug: /xiao_rp2040_with_platform_io
last_update:
  date: 04/08/2025
  author: Hugo
createdAt: '2024-08-27'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/ja/xiao_rp2040_with_platform_io/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.jpg" /></div>

## PlatformIO の紹介

PlatformIO は、多くの種類の開発ボードを統合し、優れた拡張性を備えた開発プラットフォームです。プラットフォームに必要なボードタイプがない場合は、自分でその開発ボードタイプを手動で追加できます。Arduino 上で記述したコードも、対応するライブラリを追加するだけで利用できます。

この Wiki では、PlatformIO でサンプルコードをインストールして実行する方法を紹介します。

## XIAO RP2040 で PlatformIO を使う

### セットアップ 1 . VS Code をダウンロード

使用しているシステムに応じて [VS Code](https://code.visualstudio.com/download) をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### セットアップ 2 . PlatformIO 拡張機能をインストール

VSCode を開き、Extensions をクリックして PlatformIO を検索し、インストールを選択します。インストールが完了したら、VSCode を再起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### セットアップ 3 . platform-seeedboards プラットフォームパッケージをインストール

Seeed Studio XIAO シリーズボードはカスタム PlatformIO プラットフォームを使用しているため、対応するプラットフォームパッケージを手動でインストールする必要があります。

- 新規インストールの場合は、次のコマンドを実行します：

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- すでに PlatformIO で Seeed Studio XIAO シリーズボードを使用したことがある場合は、以下のコマンドを実行して更新します：


```bash
pio pkg uninstall -g -p "SeeedStudio"
pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

別の方法として、既存プロジェクトをベースに置き換えを行うこともできます。

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
```

:::

### セットアップ 4 . PlatformIO で任意のプロジェクトを作成

PlatformIO 拡張機能を開き、Create New Project を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

### セットアップ 4 . コンパイルと書き込み

次のプログラムを `main.c` にコピーし、ボードにアップロードします。

```cpp
#include <Arduino.h>

void setup() {
    pinMode(PIN_LED, OUTPUT);
}

void loop() {
    digitalWrite(PIN_LED, HIGH);
    delay(1000);
    digitalWrite(PIN_LED, LOW);
    delay(1000);
}
```
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>