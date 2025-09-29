---
title: Grove - I2C モータードライバ (TB6612FNG)
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-I2C_Motor_Driver-TB6612FNG/
slug: /ja/Grove-I2C_Motor_Driver-TB6612FNG
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

Grove - I2C モータードライバ (TB6612FNG) は、2つのDCモーターを最大12V/1.2Aで駆動するか、1つのステッパーモーターを最大12V/1.2Aで駆動することができます。オンボードのMCUにより、Grove I2Cインターフェースを介してArduinoと簡単に連携できます。

このドライバーボードはTB6612FNGをベースにしており、低ON抵抗のLD MOS構造の出力トランジスタを備えたDCモーターおよびステッパーモーター用のドライバICです。2つの入力信号（IN1およびIN2）により、CW、CCW、ショートブレーキ、停止モードの4つのモードから選択できます。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C モータードライバ (TB6612FNG) | 初期リリース                                                                                               | 2018年9月      |

## 特徴

- オンボードMCU
- CW/CCW/ショートブレーキ/停止機能モード
- 内蔵の熱シャットダウン回路および低電圧検出回路
- スタンバイ（省電力）システム

## 仕様

|項目|値|
|---|---|
|MCU動作電圧|3.3V / 5V|
|モーター供給電圧|2.5 ~ 13.5 (5V 標準, 15V 最大)|
|出力電流|1.2 A(平均)/3.2 A (ピーク)|
|スイッチング周波数|100kHz|
|ロジックインターフェース|I2C|
|I2Cアドレス|0x14 (デフォルト)|
|I2Cアドレス範囲|0x01 ~ 0x7f (設定可能)|
|サイズ|長さ: 60mm 幅: 40mm 高さ: 12mm|
|重量|13g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 12mm|
|総重量|20g|

## 主な用途

- DCモーター制御
- ステッパーモーター制御

## ハードウェア概要

### ピン配置

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)

### ハードウェア詳細

___
**I2Cインターフェース**

このボードはI2Cインターフェースを使用して、オンボードMCUがホストコンピュータと通信します。
>GND: このモジュールをシステムのGNDに接続  
>VCC: このモジュールには5Vまたは3.3Vを使用可能  
>SDA: I2Cシリアルデータ  
>SCL: I2Cシリアルクロック

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**電源入力**

モーターにDC電源を供給します。入力範囲は2.5V ~ 13.5Vです。
>GND: システムのGNDに接続し、電源の"-"を接続  
>VM: 電源の"+"を接続し、モーターに電力を供給

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**DCモーター出力**

このボードには2チャンネルのDCモーター出力があり、各チャンネルで12V/1.2Aを出力できます。このドライバーボードを使用して、2つのDCモーターを同時に制御できます。
>A1: チャンネルA出力1  
>A2: チャンネルA出力2  
>B1: チャンネルB出力1  
>B2: チャンネルB出力2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**ステッパーモーター出力**

このボードを使用して4線式ステッパーモーターを制御することも可能で、最大12V/1.2Aを出力できます。
>OUT1: ステッパーモーターコイル1の一方の入力に接続  
>OUT2: ステッパーモーターコイル1のもう一方の入力に接続  
>OUT3: ステッパーモーターコイル2の一方の入力に接続  
>OUT4: ステッパーモーターコイル2のもう一方の入力に接続

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

:::note
実際には、DCポートとステッパーポートは物理的に接続されています。接続図は以下の通りです：
:::

|DCポート|ステッパーポート|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

*DCモーターデモ*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |DCモーター|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。

    **3** 少なくとも2本のジャンパーを準備する必要があります。ジャンパーがない場合は、[こちら](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html)をクリックして購入できます。
:::

- **ステップ 1.** DCモーターをドライバーボードの**DC Motor Output**ポートに接続し、外部DC電源を**Power In**ポートに接続します。

- **ステップ 2.** Grove - I2C Motor Driver (TB6612FNG)をGrove-Base Shieldの**I^2^C**ポートに接続します。

- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect1.jpg)

*ステッピングモーターデモ*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |ステッピングモーター|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/Motor%2024BYJ48_02.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank">今すぐ購入</a>|

- **ステップ 1.** ステッピングモーターをドライバーボードの**Stepper Motor Output**ポートに接続し、外部DC電源を**Power In**ポートに接続します。

:::tip
        このドライバーボードは4線式ステッピングモーターに適しています。使用するステッピングモーターによって配線の色が異なります。ここではモーター24BYJ48を使用し、配線は以下の表の通りです。
:::

|ピン名| ステッピングモーターのワイヤー|ワイヤー色(24BYJ48)|
|---|---|---|
|OUT1|コイル1の片端 |オレンジ|
|OUT2|コイル1のもう片端|青|
|OUT3|コイル2の片端|ピンク|
|OUT4|コイル2のもう片端|黄色|

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/p%2Blogo/coil.jpg)

- **ステップ 2.** Grove - I2C Motor Driver (TB6612FNG)をGrove-Base Shieldの**I^2^C**ポートに接続します。

- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect2.jpg)

:::note
        DCポートとステッパーポートは物理的に接続されているため、2つのDCポートを使用してステッパーモーターを制御することもできます。接続図は以下の通りです：
:::
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect3.jpg)

:::note
        Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino      |  Groveケーブル       |Grove - I2C Motor Driver (TB6612FNG)|
|--------------- |--------------------|-----|
| GND            | 黒                | GND |
| 5Vまたは3.3V   | 赤                | VCC |
| SDA            | 白                | SDA |
| SCL            | 黄                | SCL |

#### ソフトウェア

:::caution
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Grove_Motor_Driver_TB6612FNG](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG)ライブラリをGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。デフォルトの例を開きます。以下の2つの例を提供しています：

>dc_motor: DCモーターのデモ  
>stepper_motor_2phase: 4線式、2相ステッパーモーターのデモ。

以下の2つの方法で開くことができます（dc_motorを例に取ります）：  
    1. Arduino IDEで直接開く：**File --> Examples --> Grove - Motor Driver(TB6612FNG) --> dc_motor**のパスをたどります。  
    ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path1.jpg)  
    2. コンピュータで開く：**XXXX\Arduino\libraries\Grove_Motor_Driver_TB6612FNG-master\examples\dc_motor**フォルダ内の**dc_motor.ino**をクリックします。**XXXX**はArduino IDEをインストールした場所です。  
    ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path2.jpg)

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
        すべてが正常に動作すれば、外部電源ポートに電源を入れるとモーターが動作します。
:::

### Raspberry Pi 4 コンピュータで遊ぶ

#### ハードウェア

**必要な材料**

*DCモーターデモ*

| Raspberry Pi 4 コンピュータ | Grove Base Hat for Raspberry Pi | Grove - I2C Motor Driver (TB6612FNG) |DCモーター|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/products/102110421/raspberrypi4.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを慎重に差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーのケーブルはデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。

    **3** 少なくとも2本のジャンパーを準備する必要があります。持っていない場合は、[こちら](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html)をクリックして購入できます。
:::

- **ステップ1.** DCモーターをドライバーボードの**DC Motor Output**ポートに接続し、外部DC電源を**Power In**ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect1.jpg)

- **ステップ2.** Grove - I2C Motor Driver (TB6612FNG)をGrove Base Hat for Raspberry Piの**I^2^C**ポートに接続します。

- **ステップ3.** Grove Base Hat for Raspberry PiをRaspberry Pi 4 コンピュータに接続します。

- **ステップ4.** Raspberry Pi 4 コンピュータをディスプレイに接続します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect2.jpg)

:::note
        Raspberry Piを初めて使用する場合は、開始する前に[Getting started with Raspberry](https://wiki.seeedstudio.com/ja/Grove_Base_Kit_for_Raspberry_Pi/#getting-started)を参照してください。
:::

#### ソフトウェア

:::caution
     **Raspberry Pi OS >= Bullseye**を搭載したRaspberry Piを使用している場合は、このコマンドラインを**Python3のみ**で使用する必要があります。
MarkusBanskyがGrove_Motor_Driver_TB6612FNGのソフトウェアライブラリと学習リソースをRaspberry Pi 4およびPython3向けに提供しています。
これは、[Grove Arduino Library](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG)を[Raspberry Pi用Grove I2C Motor Driver on TB6612FNG](https://wiki.seeedstudio.com/ja/Grove-I2C_Motor_Driver-TB6612FNG/)に移植したものです。
:::

#### 必要条件

* RaspberryPi Linuxイメージ
- Python 3.6以上
- smbusライブラリ
- timeライブラリ
- mathライブラリ

:::note
    ライブラリにはモーターのスムーズな始動のための6つのイージング関数が含まれています。
    現在、イージング関数は1つのモーターに対してのみ使用可能です。
    INおよびOUT関数を含みます。
:::

#### ライブラリの使用方法

:::caution
     **Raspberry Pi OS >= Bullseye**を搭載したRaspberry Piを使用している場合は、このコマンドラインを**Python3のみ**で使用する必要があります。
  まず、**pip**の最新リリースバージョンを実行していることを確認してください。このライブラリをインストールするには、**pip.conf**に追加の`index-url`を追加する必要があります。これを行うには、`sudo nano /etc/pip.conf`で設定ファイルを編集し、`[global]`セクションの直後に次の行を挿入します：
:::

```
index-url=https://pypi.python.org/
```

これで通常通りパッケージをインストールできます。Python3を使用する場合、以下のように実行してください：

```
python3 -m pip install raspberry-i2c-tb6612fng
```

ライブラリのインストールが成功したら、以下のコードを使用して `raspberry-i2c-tb6612fng` ディレクトリに移動してください。

```
cd raspberry-i2c-tb6612fng
```

最後のステップとして、テストコードを実行します。

```
python3 test.py
```

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/putty.png)

:::tip
        すべてが正常に動作していれば、`python3 test.py` を入力するとモーターが動作します。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - I2C Motor Driver (TB6612FNG) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip)

- **[Zip]** [Grove_Motor_Driver_TB6612FNG ソフトウェアライブラリ](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG/archive/master.zip)

- **[PDF]** [TB6612FNG データシート](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/TB6612FNG.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>