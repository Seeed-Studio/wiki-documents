---
description: DAP Linkを使用してArduinoブートローダーをフラッシュする
title: DAP Linkを使用してArduinoブートローダーをフラッシュする
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Flashing-Arduino-Bootloader-DAPLink
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# DAP Linkを使用してArduinoブートローダーをフラッシュする

これは、DAP Link（OpenOCD）を使用してArduinoブートローダーをArduinoボードにフラッシュする方法のWikiチュートリアルです。もしArduinoボードのブートローダーが中断された場合、このガイドを使用してブートローダーを再フラッシュすることができます。

## 準備

1. まず最初に、[**ArduinoボードをDAPLinkデバイスとして使用する方法**](https://wiki.seeedstudio.com/ja/Arduino-DAPLink/)を参照して、SAMDボードの1つをDAP-Linkデバイスに変換してください。一度設定を完了し、**daplink Arduino inoプログラムをアップロード**したら、このWikiチュートリアルに戻ってください。

2. ターゲットハードウェアをDAP Linkデバイス（SAMDボード）と以下のピン構成に従って接続します。

     - SWO > SWO
     - CLK > CLK
     - GND > GND

以下のように、Seeeduino XIAOがDAP Linkデバイスとして、Seeeduino Cortex M0+がターゲットとして接続される場合があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/examples.png"/></div>

## 始めましょう

この例では、Seeeduino XIAOがDAPLinkデバイスとして機能し、Seeeduino Lotus Cortex M0+のArduinoブートローダーをフラッシュするために使用されます。

- ターミナルで**Arduinoボードライブラリパスのルート位置**に移動し、そのパス内でOpenOCDのパスを見つけます。以下のように見えるかもしれません：

```sh
cd ~/Library/Arduino15/packages/arduino/tools/openocd/
cd 0.10.0-arduino7/bin # バージョンは異なる場合があります
```

- 特定のスクリプトを使用してOpenOCDを実行します：

**注意:** `ansonhe`を自分のユーザー名に変更するか、正しいパスに調整する必要があります。

```sh
./openocd -s ../share/openocd/scripts/ -f /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/variants/arduino_zero/openocd_scripts/arduino_zero.cfg
```

すべてが正常に動作すると、以下のような出力が表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/server.png"/></div>

これでサーバーが起動しました！

- 前のターミナルをそのままにして、新しいターミナルを開きます。同様にArduinoボードパスのルート位置に移動します。その後、arm-gccパスに移動します：

```sh
cd ~/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

- このパスの下で、以下を実行します：

```sh
./arm-none-eabi-gdb
```

- gdb内でターゲットに接続します：

```sh
target remote localhost:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/target.png"/></div>

- ArduinoボードライブラリのルートパスからArduinoブートローダーをロードします：

> Seeed SAMDボード用のブートローダーはこちらでも見つけることができます：https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/bootloaders

**注意:** `ansonhe`を自分のユーザー名に変更するか、正しいパスに調整する必要があります。

```sh
file /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/bootloaders/zero/samd21_sam_ba.elf
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/file.png"/></div>

- ターゲットにブートローダーをフラッシュします：

```sh
load
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/load.png"/></div>

- リセットボタンを押してターゲットデバイスをリセットします。これでCOMポートが表示されるはずです。これで、Seeeduino XIAOをDAPLinkデバイスとして使用して、Seeeduino Lotus Cortex M0+にArduinoブートローダーがフラッシュされました！

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/ports.png"/></div>

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