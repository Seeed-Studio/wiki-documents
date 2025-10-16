---
description: Raspberry Pi用3Dジェスチャートラッキングシールド MGC3130
title: Raspberry Pi用3Dジェスチャートラッキングシールド MGC3130
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/preview-wiki.jpg)

このシールドはMicrochipの[MGC3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf)チップをベースにしており、Raspberry Piに3Dジェスチャー認識とモーショントラッキング機能を提供します。x, y, zの位置情報を取得できるだけでなく、近接センサーやタッチセンサーとしても機能し、タップやダブルクリックをサポートします。

以下の図に示すように、認識エリアは周囲に分布するストリップエリアと中央パネルの2つの部分に分かれています。

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/detect-part.jpg)

<div align="center"><b>図 1.</b><i>感知エリア</i></div>

ストリップエリアは、北、南、西、東の方向変化を感知できます。中央エリアはタッチ、タップ、ダブルクリック、そしてその上の空中でのジェスチャーを感知できます。そのため、このシールドを「3Dジェスチャー＆トラッキングシールド」と呼んでいます。中央エリアに直接触れる必要はなく、中央エリアの上で手を振るだけで、このシールドは動きを感知します。

Microchipの特許技術であるGestIC®テクノロジーのおかげで、このシールドは電気的近接場センサーを利用して動きを検出します。このシールドは中央パネルの上に磁場を生成し、手が近づくと磁場が干渉を受けます。シールドの下にある磁場受信機がその変化を検出します。

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF1.jpg)
<div align="center"><b>図 2.</b><i>手がない場合の磁場</i></div>

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF2.jpg)
<div align="center"><b>図 3.</b><i>手がある場合の磁場</i></div>

このHATはI2Cインターフェースを介してRaspberry Piと通信します。また、他のモジュールと連携する必要がある場合に備えて、Grove I2Cコネクタも用意されています。

なんて素晴らしいモジュールでしょう！これを使えば、ジェスチャーでライト、テレビ、スピーカーなどを操作できます。想像力を解き放ち、さらに魔法のようなプロジェクトを作りましょう。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/iLav34w77ns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130-p-4073.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 3Dハンドジェスチャーとx, y, z位置データの認識
- 近接およびタッチセンサー機能
- 内蔵Colibriジェスチャースイート（チップ上で動作）
- 高度な3D信号処理ユニット
- 検出範囲：0～10cm
- チップ上の自動キャリブレーション
- Raspberry Pi 2、3、4、およびZeroのさまざまなモデルに対応

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V|
|主なチップ|MGC3130|
|検出範囲|0～10 cm|
|温度範囲|-20°C～+85°C|
|受信感度| &lt;1 fF|
|位置更新速度|200位置/秒|
|空間解像度|最大150 dpi|
|搬送周波数|44 kHz～115 kHz|
|出力インターフェース|I2C（デフォルトのI2Cアドレス：0X42）|
|総重量|55g|
|正味重量|17.6g|
|パッケージサイズ|115mm*75mm*25mm|
|サイズ|65mm*56mm|

## 応用例

- ノートパソコン/キーボード/PC周辺機器
- ホームオートメーション
- ゲームコントローラー
- オーディオコントロール

## ハードウェア概要

### ピンアウト

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/hardware-overview.png)

## Raspberry Piでの使用方法

### I2Cを有効化する

- ステップ 1. `sudo raspi-config` を実行します。
- ステップ 2. 下矢印キーを使用して「5 Interfacing Options」を選択します。
- ステップ 3. 「P5 I2C」を選択します。
- ステップ 4. I2Cを有効化するか尋ねられたら「はい」を選択します。
- ステップ 5. カーネルモジュールを自動的にロードするか尋ねられた場合も「はい」を選択します。
- ステップ 6. 右矢印キーを使用してボタンを選択します。
- ステップ 7. 再起動するか尋ねられたら「はい」を選択します。

:::tip
raspi-configに関する詳細情報は、[https://www.raspberrypi.org/documentation/configuration/raspi-config.md](https://www.raspberrypi.org/documentation/configuration/raspi-config.md) を参照してください。
:::

### ncursesをインストールする

**ステップ 1**：以下のリンクからダウンロードします：[こちら](https://invisible-mirror.net/archives/ncurses/)

```
cd ~
wget https://invisible-mirror.net/archives/ncurses/ncurses-6.1.tar.gz
```

**ステップ 2**：ncursesをインストールします

```
tar -xvf ncurses-6.1.tar.gz
cd ncurses-6.1/
./configure
make
sudo make install
```

**ステップ 3**：ncursesが正常にインストールされたか確認します

```
ncurses6-config --version
```

### デモを実行する

**ステップ 1**：mgc3103をインストールし、mgc3103を実行します。

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_mgc3x30.git
cd Seeed_mgc3x30
make clean && make
./mgc3130
```

**ステップ 2**：以下が出力例です。

```
 *
 *                                                          *
 * Position X : 65534                                       *
 * Position Y : 0                                           *
 * Position Z : 38465                                       *
 *                                                          *
 * Gesture :                                                *
 *                                                          *
 * Airwheel angle : -1530                                   *
 *                                                          *
 * Touch electrode :
 * Tap electrode :
 * Double Tap electrode :
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *
```

- **Position X/Y/Z**：左下隅がX=0、Y=0です。Zは高さを示します。最大値は65535です。
- **Gesture**：モジュールの上で手を振ると、波の方向が「西から東」「東から西」「南から北」「北から南」として表示されます。
- **Airwheel**：時計回りで数値が増加し、反時計回りで減少します。表示には若干の遅延があります。
- **Touch electrode**：特定のエリアに指を置くと、「中央」「東」「西」「南」「北」が取得されます。
- **Tap electrode**：特定のエリアを指でタップすると、「中央」「東」「西」「南」「北」が取得されます。
- **Double Tap electrode**：特定のエリアを指でダブルタップすると、「中央」「東」「西」「南」「北」が取得されます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/__9Vas2kGHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Raspberry Pi 用 3D ジェスチャートラッキングシールド MGC3130 Eagle ファイル](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip)

- **[PDF]** [MGC3030-3130 データシート](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf)

- **[Library]** [Seeed_mgc3x30 ライブラリ](https://github.com/Seeed-Studio/Seeed_mgc3x30)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>