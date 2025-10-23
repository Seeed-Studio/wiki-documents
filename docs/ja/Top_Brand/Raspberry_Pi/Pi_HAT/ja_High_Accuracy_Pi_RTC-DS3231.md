---
description: DS3231 高精度 RTC（リアルタイムクロック） for Raspberry Pi
title: DS3231 高精度 RTC（リアルタイムクロック） for Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/High_Accuracy_Pi_RTC-DS3231
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/main.jpg"/></div>

高精度 Pi RTC は、DS3231 クロックチップをベースにしています。DS3231 は低コストで非常に高精度な I2C リアルタイムクロック（RTC）です。I2C インターフェースを介して Raspberry Pi に RTC を提供します。TCXO（温度補償型水晶発振器）からのクロックソースにより、RTC は秒、分、時、日、日付、月、年の情報を保持します。月末の日付は、31 日未満の月に自動的に調整され、うるう年の補正も含まれます。クロックは 24 時間形式または AM/PM インジケータ付きの 12 時間形式で動作します。このクロックは、2 つのプログラム可能な時刻アラームとプログラム可能な方形波出力を提供します。INT/SQW ピンは、アラーム条件による割り込みを生成するか、方形波信号を出力し、選択は INTCN ビットによって制御されます。

Raspberry Pi の電源がオフになっても時刻情報を保持したい場合は、バッテリーホルダーに 3V CR1225 リチウム電池を挿入する必要があります。また、Arduino プロジェクト用の RTC を探している場合は、ブログ「Arduino RTC チュートリアル：DS1307 RTC を使用した Arduino の使い方」をご覧ください。簡単に始めることができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-%28DS3231%29-p-3214.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| 高精度 Pi RTC (DS3231) | 初期リリース                                                                                               | 2018年9月      |

:::note
        バッテリーは含まれていません。
:::

## 特徴

- Raspberry Pi 2/3 B/B+/4/Zero をサポート
- 秒、分、時、曜日、月、年をサポート
- AM/PM インジケータ付きの 24 時間または 12 時間形式をサポート
- 低消費電力
- 2 つの時刻アラーム
- 高速 (400kHz) I2C インターフェース

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V|
|動作温度|0℃ ～ +70℃|
|精度|0°C ～ +40°C で ±2ppm|
|インターフェース|I2C|
|I2C アドレス|0x68|
|サイズ|長さ: 25mm 幅: 25mm 高さ: 8mm|
|重量|4.2g|
|パッケージサイズ|長さ: 85mm 幅: 75mm 高さ: 25mm|
|総重量|15g|

## 主な用途

Raspberry Pi 上でリアルタイムが必要なすべてのアプリケーション。

## 始め方

### 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

### 必要な材料

|Raspberry Pi|高精度 Pi RTC(DS3231)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-DS3231.html" target="_blank">今すぐ購入</a>|

:::note
USB ケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に 4 本のワイヤーがある USB ケーブルを使用してください。2 本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
:::

### ピン配置

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/pin_out.jpg)

:::note

- チップ自体はアラーム機能をサポートしており、関連するハードウェアインターフェースも予約されていますが、ソフトウェアライブラリにはこの機能（S/INT ピン）が含まれていません。関連するソフトウェア開発を行う必要があります。

- このモジュールでは RX/TX は使用されませんが、6x2 ヘッダーが Raspberry Pi の RX/TX ピンを占有するため、RX/TX を引き出し、2 ピンヘッダーを付属しています。
:::

### インストール

提供されるドライバーは Raspbian Jessie/Stretch のみ対応しています。

:::tip
Raspberry Pi の使い方がわからない場合は、開始する前に[こちら](https://www.raspberrypi.org/documentation/)を確認してください。
:::

- **ステップ 1. ドライバーのインストール**

ターミナルに以下のコマンドを入力してください。

```
git clone https://github.com/Seeed-Studio/pi-hats.git
```

ダウンロードが完了したら、ターミナルで以下のコマンドを入力してください。

```
cd pi-hats
sudo ./install.sh -u rtc_ds3231
```

- **ステップ 2. Raspberry Pi の電源を切る**

```
sudo shutdown -h now
```

- **ステップ 3. HAT を Raspberry Pi に取り付ける**

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/connect.jpg)

この HAT のピン 1 を Raspberry Pi の GPIO のピン 1 に差し込むことを確認してください。上記の写真のように接続してください。

- **ステップ 4. Raspberry Pi の電源を入れる**

## 使用方法

次のコマンドを使用して、ドライバが正常にインストールされたか確認できます。

```
./install.sh -l
```

ドライバをアンインストールしたい場合は、以下のコマンドを使用してください。

```
sudo ./install.sh -u
```

**次に、RTC モジュールの機能を見てみましょう：**

ハードウェアクロックを読み取り、結果を表示する

```
sudo hwclock -r
```

ハードウェアクロックからシステム時刻を設定する

```
sudo hwclock -s
```

現在のシステム時刻からハードウェアクロックを設定する

```
sudo hwclock -w
```

その他の使用方法

```
hwclock --help
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [高精度 Pi RTC(DS3231) Eagle ファイル](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip)

- **[PDF]** [DS3231 データシート](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/datasheet.pdf)

## プロジェクト

この製品の紹介動画です。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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