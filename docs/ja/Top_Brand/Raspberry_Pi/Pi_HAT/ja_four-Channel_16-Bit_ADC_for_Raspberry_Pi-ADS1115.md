---
description: Raspberry Pi用4チャンネル16ビットADC（ADS1115）
title: Raspberry Pi用4チャンネル16ビットADC（ADS1115）
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/main.jpg)

アナログ-デジタルコンバータ（ADC）はRaspberry Piの一般的なアクセサリです。これは、Texas InstrumentsのADS1115に基づいた4チャンネルADCで、精密で低消費電力の16ビットADCチップです。このADCをコンパクトなRaspberry Pi Zeroのフォームファクタにし、アナログGroveコネクタを統合しました。これにより、アナログGroveモジュールも使用できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Raspberry Pi用4チャンネル16ビットADC（ADS1115） | 初版                                                                                               | 2018年9月      |

## 特徴

- 低消費電流:
  - 連続モード: 150μAのみ
  - シングルショットモード: 自動シャットダウン
- 広い供給電圧範囲
- 2つの差動入力または4つの単一エンド入力を提供する入力マルチプレクサ（MUX）
- プログラム可能なコンパレータ
- 内部低ドリフト電圧リファレンス
- 内部オシレータ
- 内部PGA
- プログラム可能なデータレート: 8SPSから860SPS
- I2C互換シリアルインターフェース
- Raspberry Pi 3B/3B+/4をサポート

## 仕様

|項目|値|
|---|---|
|供給電圧|3.3V / 5V|
|アナログ入力電流|100mA（瞬間的）<br />10mA（連続）|
|保管温度|-60～150℃|
|最大接合温度|150℃|
|インターフェース|I2C|
|I2Cアドレス|0x48（デフォルト）<br />0x49～0x4B（設定可能）|
|サイズ|長さ: 65mm 幅: 30mm 高さ: 20mm|
|重量|36.5g|
|パッケージサイズ|長さ: 140mm 幅: 78mm 高さ: 27mm|
|総重量|37g|

このGroveには、0x48から0x4Bまでの4つの可能なI2Cアドレスがあります。デフォルトのI2Cアドレスは0x48です。I2Cアドレスを変更するには、はんだ付けを行う必要があります。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout1.png)

:::note
SDA（対応するアドレス0x4A）がデバイスアドレスとして使用される場合、I2C通信中にデバイスがアドレスを正しくデコードするように、SCLラインが低くなった後、SDAラインを少なくとも100ns低く保持してください。
:::

## 典型的な用途

- 携帯型計測機器
- 消費財
- バッテリーモニタリング
- 温度測定
- 工場の自動化およびプロセス制御

## ハードウェア概要

### ピンアウト

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout.png)

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### ハードウェア

**必要な材料**

|Raspberry Pi|Raspberry Pi用4チャンネル16ビットADC(ADS1115)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)|

### ソフトウェア

このセクションでは、ドライバのインストール方法とI2Cの有効化方法を紹介します。

**I2Cを有効化する**
I2Cはデフォルトでは無効化されているため、手動で設定する必要があります。

- **ステップ1**. Raspberry Piの電源を入れます。
- **ステップ2**. ターミナルで以下のコマンドを入力して`raspi-config`を開きます。

```cpp
sudo raspi-config
```

- **ステップ3**. 矢印キーで「5 Interfacing Options」に移動し、「Enter」を押して選択します。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp1.png)

- **ステップ4**. 矢印キーで「P5 I2C」に移動し、「Enter」を押して選択します。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp2.png)

- **ステップ4**. 「Yes」を選択して有効化します。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp3.png)

- **ステップ5**. 「Ok」を選択します。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp4.png)

- **ステップ6**. 「Finish」を選択して変更を保存します。

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp5.png)

**インストール**

- Raspberry PiでI2Cが有効化されているか確認します。

ターミナルで以下を実行して`config.txt`ファイルに移動します：

```sh
cd /boot
sudo nano config.txt
```

- ファイル内に`dtparam=i2c_arm=on`という行があることを確認してください。

- デフォルトのI2C速度は100kHzです。これを400kHzに増加させるには、以下の行を`config.txt`に追加します：

```sh
dtparam=i2c_arm_baudrate=400000
```

- 次に、`ads1115-overlay`を使用するために以下を`config.txt`に追加します：

```sh
dtoverlay=ads1115
```

- その後、ドライバを設定するためにオーバーレイにパラメータを提供する必要があります。ADCの4つのチャンネルすべてを単一エンドモードで有効化するには、以下を追加します：

```sh
dtparam=cha_enable
dtparam=chb_enable
dtparam=chc_enable
dtparam=chd_enable
```

- ファイルを保存してRaspberry Piを再起動します。

これらの変更を`config.txt`に加えた状態でシステムを再起動すると、以下のカーネルモジュールが表示されます：

- カーネルモジュールを確認するには以下を実行します：

```sh
lsmod | grep ads
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/1.png"/></div>

:::note
 注意：ADS1115はADS1015と同じカーネルを使用します。
:::

ADS1115がすでに存在し、Industrial IOで使用可能であることが確認できます。

- Industrial IOフォルダに移動します：

```sh
cd /sys/bus/iio/devices/iio\:device0/
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/2.png"/></div>

- これでハードウェア設定ファイルに簡単にアクセスできます：

```sh
cat in_voltage0-voltage1_raw
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/3.png"/></div>

チャンネル0と1は0.1875mVのスケールを使用しています。測定された電位差は**17670 * 0.1875mV = 3.3V**です。

このカーネル追加方法を使用すると、ADS1115を使用して独自のシェルまたはPythonスクリプトを開発することができます！

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Raspberry Pi用4チャンネル16ビットADC (ADS1115) Eagleファイル](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip)

- **[Zip]** [Raspberry Pi用4チャンネル16ビットADC (ADS1115) ソフトウェアライブラリ](https://github.com/Seeed-Studio/pi-hats/archive/master.zip)

- **[PDF]** [ADS1115データシート](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/ADS1115.pdf)

## 技術サポートと製品ディスカッション

.

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>