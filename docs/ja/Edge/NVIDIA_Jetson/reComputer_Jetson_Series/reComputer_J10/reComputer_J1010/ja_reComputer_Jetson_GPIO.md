---
description: reComputer Jetson ボードで 40 ピン GPIO を使用する方法
title: reComputer Jetson ボードで 40 ピン GPIO を使用する方法
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_GPIO
last_update:
  date: 04/12/2023
  author: Lakshantha
---

# reComputer Jetson ボードで 40 ピン GPIO を使用する方法

この wiki では、reComputer Jetson ボードの 40 ピン GPIO にアクセスして制御する方法を説明します。この wiki では、例として reComputer J4012 を使用しています。ただし、他の reComputer Jetson ボードでも手順は同様です。

## 始める前に

reComputer Jetson デバイスで 40 ピン GPIO を使用する前に知っておく必要がある情報をいくつか紹介します。

- GPIO ピンあたりの電圧レベルは 3.3V です
- GPIO ピンからの電流制限により、GPIO 経由で reComputer Jetson ボードに逆電力供給することはできません

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

ここでは [reComputer J4012](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf) のデータシートを選択しました。

**ステップ 2:** **40 Pin Expansion Header - J10** セクションに移動します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png" /></div>

**ステップ 3:** **Default Usage / Description** 列で、デフォルトの使用法が **GPIO** である **Header Pin #** の名前を見つけます

例えば、**Header Pin 15** を確認してください。その **Default Usage** は **GPIO** です

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg" /></div>

**ステップ 4:** 同じピンについて、**Module Pin Name** 列の下の名前を見つけます。この例では、**GPIO12** です

## GPIO へのアクセスと制御

GPIO ラベルが直接利用できるかどうかに基づいて、Jetson ボード上の GPIO にアクセスする 2 つの異なる方法があります。最初の方法を使用すると、デバイス内でコマンドを実行した後、GPIO ピンラベルを直接知ることができます。ただし、ピンラベルが直接表示されない場合は、2 番目の方法を使用できます。

### 方法 1

この方法では、GPIO 用の dts ファイルがフラッシュする JetPack バージョンに含まれており、GPIO が適切にラベル付けされているため、デバイスから直接ピンラベルを取得できます。

**ステップ 1:** Jetson デバイスのターミナルに入り、このコマンドを実行します

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**ステップ 2:** 前に取得した**モジュールピン名**に対応する**GPIO番号**を見つける

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png" /></div>

この場合、**GPIO12**に対応するのは**gpio-268**です

**ステップ 3:** ターミナル内で以下を実行してgpio-268ピンをエクスポートする

```sh
cd /sys/class/gpio
echo 268 > export
```

**ステップ4:** 方向を設定し、値を設定します。ここで方向は **in/ out** にでき、値は **0/ 1** にできます

例えば、GPIO12をHIGHに設定するには

```sh
cd gpio268
echo "out" > direction
echo 1 > value
```

To set GPIO12 to LOW

```sh
echo 0 > value
```

**ステップ 5:** エクスポートしたGPIOピンをデフォルト状態に戻すには、以下を実行します

```sh
cd ..
echo 268 > unexport
```

### 方法 2

この方法では、フラッシュした JetPack バージョンに GPIO の dts ファイルが含まれておらず、GPIO が適切にラベル付けされません。そのため、別の文書（pinmux）を参照して、このピンラベル情報を取得する必要があります。SoM に応じて以下のリンクを参照してください。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**ステップ 1:** 使用している SoM に応じて pinmux 文書をダウンロードします。ここでは [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) 文書を選択します

**ステップ 2:** 以前に取得したモジュールピン名に対応する GPIO ラベル（Customer Usage 列の下）を見つけます。例えば、**GPIO12** の場合、それは **GPIO3_PN.01** であり、ここでは **PN.01** を参照します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**ステップ 3:** Jetson デバイスのターミナルに入り、このコマンドを実行します

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**ステップ 4:** 前に取得した**GPIOラベル**に対応する**GPIO番号**を見つける

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png" /></div>

この場合、**PN.01**に対応する**gpio-433**であり、これは**GPIO12**と等しい

**ステップ 5:** ターミナル内で以下を実行してgpio-433ピンをエクスポートする

```sh
cd /sys/class/gpio
echo 433 > export
```

**ステップ6:** 方向を設定し、値を設定します。ここで方向は **in/ out** にでき、値は **0/ 1** にできます

例えば、GPIO12をHIGHに設定するには

```sh
cd PN.01
echo "out" > direction
echo 1 > value
```

GPIO12をLOWに設定するには

```sh
echo 0 > value
```

**ステップ 7:** エクスポートしたGPIOピンをデフォルト状態に戻すには、以下を実行します

```sh
cd ..
echo 433 > unexport
```

### Jetpack6+の場合
方法2と同様に、別の文書（pinmux）を参照し、このピンラベル情報を取得する必要があります。SoMに応じて以下のリンクを参照してください。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**ステップ1:** 使用しているSoMに応じてpinmux文書をダウンロードします。ここでは[Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)文書を選択します

**ステップ2:** 前に取得したModule Pin Nameに対応するGPIOラベル（Customer Usage列の下）を見つけます。例えば、**GPIO12**の場合、それは**GPIO3_PN.01**であり、ここでは**PN.01**を参照します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**ステップ3:** Jetsonデバイスのターミナルに入り、このコマンドを実行します

```bash
sudo apt update
sudo apt install gpiod

gpioinfo
```

**ステップ 4:** 前に取得した**GPIOラベル**に対応する**GPIO番号**を見つける

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo1.png" />
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo2.png" />
</div>

この場合、**PN.01**に対応するのは**gpiochip0 line85**で、これは**GPIO12**と等しくなります

**ステップ 5:** 次に**gpioset**コマンドを使用してGPIOの動作モードを設定できます。

```bash
# To set GPIO12 to HIGH
sudo gpioset --mode=wait gpiochip0 85=1
# To set GPIO12 to LOW
sudo gpioset --mode=wait gpiochip0 85=0 
```

:::info
**gpioset** コマンドについてさらに詳しく知りたい場合は、こちらを参照してください：
https://www.acmesystems.it/gpiod
:::

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>