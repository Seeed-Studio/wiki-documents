---
description: XIAO RP2350 ボードでArduinoを使用する
title: Seeed Studio XIAO RP2350(Arduino)を始める
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /ja/xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 2024-10-30T01:39:16.136Z
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 と Arduino

Seeed Studio XIAO RP2350 ボードは、[arduino-pico core](https://github.com/earlephilhower/arduino-pico)のおかげで、Arduinoによるプログラミングをサポートしています。このガイドでは、RP2350 ボードでArduinoをセットアップして使い始める方法を説明します。

## 前提条件

開始するには、以下が必要です：

- RP2350 ボード
- Arduino IDE
- USBケーブル

## ソフトウェアのセットアップ

### 1. Arduino IDEのインストール

公式サイトから最新のArduino IDEをダウンロードしてインストールしてください：[Arduino Software](https://www.arduino.cc/en/software)。

### 2. RP2350 ボードサポートの追加

1. Arduino IDEを開き、**ファイル** > **環境設定**に移動します。
2. **追加のボードマネージャのURL**フィールドに、このURLを追加します：

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. **OK**をクリックして設定を保存します。
4. **ツール** > **ボード** > **ボードマネージャ**に移動します。
5. ボードマネージャで**pico**を検索し、**インストール**をクリックします。
6. インストール後、**ツール** > **ボード**に移動し、下図に示すボードをあなたのボードとして選択します。

:::note
XIAO RP2350 ボードの完全サポートには、バージョン4.2.0以降をインストールしてください。
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. スケッチのアップロード

スケッチをアップロードする前に、XIAO RP2350 をBOOTモードにしてください。以下のいずれかの方法を使用してください：

<Tabs>
<TabItem value="method1" label="方法1：コンピュータに接続する前" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Bootを押し続ける→ケーブルを接続→Bootを離す</em></div></div>

</TabItem>

<TabItem value="method2" label="方法2：コンピュータに接続中">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Bootを押し続ける→Resetをクリック→Bootを離す</em></div></div>

</TabItem>
</Tabs>

1. Arduino IDEを開き、新しいスケッチを作成します。
2. コードを書きます。例えば、`Blink`サンプルコードを使用してください。
3. **ツール** > **ポート**に移動し、RP2350 が接続されているポートを選択します。

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

## 追加リソース

- [arduino-pico GitHub](https://github.com/earlephilhower/arduino-pico)
- [Arduino-Pico Core Documentation](https://arduino-pico.readthedocs.io/en/latest/install.html)

## サポート & ディスカッション

Seeed製品をご利用いただき、ありがとうございます！サポートとコミュニティディスカッションのための複数のチャンネルを提供しています：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
