---
description: Raspberry Pi 用 DS1307 RTC（リアルタイムクロック）
title: Raspberry Pi 用 DS1307 RTC（リアルタイムクロック）
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Pi_RTC-DS1307
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/main.jpg)

Pi RTC は DS1307 クロックチップをベースにしており、I2C インターフェースを介して Raspberry Pi にリアルタイムクロック（RTC）を提供できます。このモジュールのリアルタイムクロックは秒、分、時間、月の日付、月、曜日、年を計算し、2100年まで有効なうるう年補正を備えています。クロックは 24 時間形式または AM/PM インジケータ付きの 12 時間形式で動作します。Raspberry Pi の電源がオフの状態でもこのモジュールの時刻を保持したい場合は、バッテリーホルダーに 3 ボルトの CR1225 リチウム電池を入れる必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Pi-RTC-DS1307.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::note
バッテリーは含まれていません。
:::

## 特徴

- Raspberry Pi 2/3 B/B+/4/Zero をサポート
- 秒、分、時間、曜日、月、年をサポート
- AM/PM インジケータ付きの 24 時間または 12 時間形式をサポート
- データストレージ用の 56 バイトのバッテリーバックアップ付き不揮発性（NV）RAM
- 2 線式シリアルインターフェース
- プログラム可能な方形波出力信号
- 自動電源障害検出および切り替え回路

## 仕様

|項目|値|
|---|---|
|動作電圧|5V|
|インターフェース|I2C|
|I2C アドレス|0x68|

## 典型的な用途

リアルタイムが必要なすべてのアプリケーション。

## ピン配置

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/pin_out.jpg)

:::note
RX/TX はこのモジュールでは使用されませんが、5x2 ヘッダーが Raspberry Pi の RX/TX ピンを占有するため、RX/TX を外部に引き出し、2 ピンヘッダーを付属させています。
:::

### 回路図

**双方向レベルシフター回路**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/schematic.jpg)

これは、I^2^C バスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。Raspberry Pi の I<sup>2</sup>C バスは 3.3V を使用しますが、DS1307 チップは 5V で動作するため、この回路が必要です。上記の回路図では、**Q1** と **Q2** は N チャネル MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf) であり、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf) を参照することができます。

## 対応プラットフォーム

|                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|  ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### 必要な材料

|Raspberry Pi|Pi RTC(DS1307)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|

:::note
USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。また、内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
:::

### インストール

提供されているドライバーは、Raspbian Jessie/Stretch のみ対応しています。

:::tip
Raspberry Pi の使い方がわからない場合は、開始する前に[こちら](https://www.raspberrypi.org/documentation/)を確認してください。
:::

- **ステップ 1. ドライバーのインストール**

ターミナルで以下のコマンドを入力してください。

```
git clone https://github.com/Seeed-Studio/pi-hats.git
```

ダウンロードが完了したら、ターミナルで以下のコマンドを入力してください。

```
cd ~/pi-hats/tools
sudo ./install.sh -u rtc_ds1307
```

- **ステップ 2. Raspberry Pi の電源を切る**

```
sudo shutdown -h now
```

- **ステップ 3. HAT を Raspberry Pi に挿入する**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/connect.jpg)

この HAT のピン1を Raspberry GPIO のピン1に差し込むことを確認してください。上記の画像のように接続してください。

- **ステップ 4. Raspberry Pi の電源を入れる**

### 使用方法

以下のコマンドを使用して、ドライバーが正常にインストールされているか確認できます。

```
./install.sh -l
```

ドライバーをアンインストールしたい場合は、以下のコマンドを使用してください。

```
sudo ./install.sh -u
```

次に、RTCモジュールでできることを見てみましょう：

___
ハードウェアクロックを読み取り、結果を表示

```
sudo hwclock -r
```

___

ハードウェアクロックからシステム時間を設定

```
sudo hwclock -s
```

___

現在のシステム時間からハードウェアクロックを設定

```
sudo hwclock -w
```

___

その他の使用方法

```
hwclock --help
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Pi RTC(DS1307) Eagle ファイル](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip)

- **[http]** [Seeed Pi RTC ライブラリ](https://github.com/Seeed-Studio/pi-hats)

- **[PDF]** [DS1307 データシート](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/DS1307.pdf)

## プロジェクト

この製品の紹介ビデオです。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>