---
description: reComputer Jetson ボードで 40 ピン GPIO を使用する方法
title: reComputer Jetson ボードで 40 ピン GPIO を使用する方法
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_GPIO
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer Jetson ボードで 40 ピン GPIO を使用する方法

このウィキでは、reComputer Jetson ボードの 40 ピン GPIO にアクセスして制御する方法を説明します。このウィキでは、例として reComputer J4012 を使用しています。ただし、他の reComputer Jetson ボードでも手順はほぼ同じです。

## 始める前に

reComputer Jetson デバイスの 40 ピン GPIO を使用する前に知っておくべき情報を以下に示します。

- 各 GPIO ピンの電圧レベルは 3.3V です。
- GPIO ピンの電流制限のため、GPIO を介して reComputer Jetson ボードに逆電力を供給することはできません。

## GPIO 名を見つける

**ステップ 1:** reComputer Jetson ボードのデータシートを開きます。以下に、利用可能なすべての reComputer Jetson ボードのデータシートを示します。

- [J101 キャリアボード](https://files.seeedstudio.com/products/102991694/reComputer%20J101V2%20datasheet.pdf)
    - reComputer J1010

- [A206 キャリアボード](https://files.seeedstudio.com/products/114110049/A206%20carrier%20board%20pin%20description.pdf)
    - reComputer J2011
    - reComputer J2012
    - reComputer J1020
    
- [J202 キャリアボード](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202-carrier-board-datasheet.pdf)
    - reComputer J2021
    - reComputer J2022
    - reComputer J1020 V2

- [J401 キャリアボード](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J401-datasheet.pdf)
    - reComputer J4011
    - reComputer J4012 
    - reComputer J3010
    - reComputer J3011

ここでは、[reComputer J4012](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf) のデータシートを選択しました。

**ステップ 2:** **40 ピン拡張ヘッダー - J10** セクションに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png" /></div>

**ステップ 3:** **Default Usage / Description** 列でデフォルトの使用法が **GPIO** であることを確認しながら、**Header Pin #** の名前を見つけます。

例えば、**Header Pin 15** を確認します。その **Default Usage** は **GPIO** です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg" /></div>

**ステップ 4:** 同じピンについて、**Module Pin Name** 列の名前を見つけます。この例では、**GPIO12** です。

## GPIO へのアクセスと制御

ここでは、Jetson ボード上の GPIO にアクセスするための 2 つの異なる方法を紹介します。これらは GPIO ラベルの直接的な可用性に基づいています。最初の方法では、デバイス内でコマンドを実行した後に GPIO ピンラベルを直接知ることができます。ただし、ピンラベルが直接表示されない場合は、2 番目の方法を使用します。

### 方法 1

この方法では、JetPack バージョンに含まれる GPIO 用の dts ファイルが既に適切にラベル付けされているため、デバイスから直接ピンラベルを取得できます。

**ステップ 1:** Jetson デバイスのターミナルに入り、以下のコマンドを実行します。

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**ステップ 2:** 先ほど取得した **Module Pin Name** に対応する **GPIO 番号** を見つけます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png" /></div>

この場合、**GPIO12** に対応するのは **gpio-268** です。

**ステップ 3:** ターミナル内で以下を実行して gpio-268 ピンをエクスポートします。

```sh
cd /sys/class/gpio
echo 268 > export
```

**ステップ 4:** 方向を設定し、値を設定します。ここで方向は **in/ out**、値は **0/ 1** に設定できます。

例えば、GPIO12 を HIGH に設定するには：

```sh
cd gpio268
echo "out" > direction
echo 1 > value
```

GPIO12 を LOW に設定するには：

```sh
echo 0 > value
```

**ステップ 5:** エクスポートした GPIO ピンをデフォルト状態に戻すには、以下を実行します。

```sh
cd ..
echo 268 > unexport
```

### 方法 2

この方法では、JetPack バージョンに GPIO 用の dts ファイルが含まれておらず、GPIO が適切にラベル付けされていない場合に使用します。そのため、別のドキュメント（pinmux）を参照してピンラベル情報を取得する必要があります。以下のリンクを SoM に応じて参照してください。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**ステップ 1:** 使用している SoM に応じて pinmux ドキュメントをダウンロードします。ここでは [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) ドキュメントを選択します。

**ステップ 2:** 先ほど取得した Module Pin Name に対応する GPIO ラベル（Customer Usage 列）を見つけます。例えば、**GPIO12** の場合、**GPIO3_PN.01** に対応し、ここでは **PN.01** を参照します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**ステップ 3:** Jetson デバイスのターミナルに入り、以下のコマンドを実行します。

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**ステップ 4:** 先ほど取得した **GPIO ラベル** に対応する **GPIO 番号** を見つけます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png" /></div>

この場合、**PN.01** に対応するのは **gpio-433** で、これは **GPIO12** にも等しいです。

**ステップ 5:** ターミナル内で以下を実行して gpio-433 ピンをエクスポートします。

```sh
cd /sys/class/gpio
echo 433 > export
```

**ステップ 6:** 方向を設定し、値を設定します。ここで方向は **in/ out**、値は **0/ 1** に設定できます。

例えば、GPIO12 を HIGH に設定するには：

```sh
cd PN.01
echo "out" > direction
echo 1 > value
```

GPIO12 を LOW に設定するには：

```sh
echo 0 > value
```

**ステップ 7:** エクスポートした GPIO ピンをデフォルト状態に戻すには、以下を実行します。

```sh
cd ..
echo 433 > unexport
```

### Jetpack6+ の場合
方法 2 と同様に、別のドキュメント（pinmux）を参照してピンラベル情報を取得する必要があります。SoM に応じて以下のリンクを参照してください。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)  
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)  
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)  

**ステップ 1:** 使用している SoM に応じて pinmux ドキュメントをダウンロードします。ここでは [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) ドキュメントを選択します。

**ステップ 2:** 以前取得したモジュールピン名に対応する GPIO ラベル（Customer Usage 列の下）を見つけます。例えば、**GPIO12** の場合、それは **GPIO3_PN.01** に対応し、ここでは **PN.01** を参照します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**ステップ 3:** Jetson デバイスのターミナルに入り、以下のコマンドを実行します。

```bash
sudo apt update
sudo apt install gpiod

gpioinfo
```

**ステップ 4:** 以前取得した **GPIO ラベル** に対応する **GPIO 番号** を見つけます。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo1.png" />
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo2.png" />
</div>

この場合、**gpiochip0 line85** が **PN.01** に対応し、これは **GPIO12** にも等しいです。

**ステップ 5:** 次に、**gpioset** コマンドを使用して GPIO の動作モードを設定できます。

```bash
# GPIO12 を HIGH に設定
sudo gpioset --mode=wait gpiochip0 85=1
# GPIO12 を LOW に設定
sudo gpioset --mode=wait gpiochip0 85=0 
```

:::info
**gpioset** コマンドについてさらに学びたい場合は、以下を参照してください：  
https://www.acmesystems.it/gpiod
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>