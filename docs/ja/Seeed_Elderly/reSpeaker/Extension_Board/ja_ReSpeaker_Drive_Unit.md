---
description: ReSpeaker Drive Unit
title: ReSpeaker Drive Unit
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Drive_Unit
last_update:
  date: 1/12/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/Meow_King_Drive_Unit.jpg)

ReSpeaker Drive Unitは、ReSpeaker Core専用に設計された独立したスピーカードライブユニットです。

このドライブユニットを使用することで、Amazon Alexa Voice Servicesやその他の音声サービスを使った独自のスマートスピーカーを構築できます。さらに、Airplayをサポートしているため、スマートフォン、PC、Macから音楽をストリーミングできます。もちろん、ローカル音楽の再生も可能です。

ReSpeaker Coreは強力な拡張機能を備えており、プロトタイプ/製品に音声機能を簡単に追加できるよう支援します。

## 特徴

- 充電式バッテリー内蔵
- タッチボタン
- Airplayサポート
- インピーダンス4Ω、定格出力5W
- ReSpeaker Core上のインジケーターLED

## 仕様

- 定格出力: 5W
- インピーダンス: 4Ω
- SNR: ≥ 75dBA
- 感度: 550 ± 50mV
- 歪み率: ≤ 0.5%
- 周波数応答: 85Hz - 20kHz
- 電源: USB経由5Vまたは3.7V、1500mAhバッテリー経由
- スピーカー直径: 40mm

## 開封ガイド

### ReSpeaker Coreの準備

Meow King ドライブユニットを駆動するには、ReSpeaker Coreのファームウェアを更新する必要があります。元のストックファームウェアとこのファームウェアの違いについては、[こちら](https://onedrive.live.com/?authkey=%21AKD3ZD6g0DE2M9E&cid=5219529519B9B6A1&id=5219529519B9B6A1%21720&parId=5219529519B9B6A1%21721&o=OneUp)の変更ログを参照してください。

それでは、ファームウェアを更新しましょう。まず、[OneDrive](https://1drv.ms/f/s!AqG2uRmVUhlShUyg92Q-oNAxNjPR)から`ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin`をダウンロードします。ファームウェアをSDカードにコピーし、SDカードをReSpeaker Coreに挿入します。[こちらの手順](https://wiki.seeedstudio.com/ja/ReSpeaker_Core/#2-connect-to-serial-console)に従ってシリアルコンソールを取得してください。なお、USBシリアルを動作させるには、変更した場合はArduinoチップ（ATMega32U4）の[デフォルトファームウェア](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/res/respeaker_arduino_library/examples/pixels_pattern/pixels_pattern.ino)を復元する必要があります。USBシリアルを取得した後、以下のコマンドを入力してファームウェアを更新します：

```shell
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin
```

システムイメージが書き込まれた後、ReSpeaker Coreは再起動します。

### 組み立て

下の画像のように、ReSpeaker CoreをMeow King ドライブユニットに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_1.jpg" /></div>

電源ロゴを5秒以上押すと、ドライブユニットが電源オンになり、ReSpeaker Coreボードも電源が入ります。

:::note
電源制御回路はドライブユニット内にあるため、ReSpeaker Coreを取り外した状態でも、電源ロゴを5秒以上押すとドライブユニットの電源が入ります。
:::

デバイス全体の電源を切るには、電源ロゴを再度5秒以上押してください。

デバイスの電源が入ると、ReSpeaker Coreは起動プロセスに入ります。LEDリングが1秒間赤色に点灯し、ReSpeaker Coreが起動中であることを示します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_2.jpg" /></div>

数秒待ってから、スマートフォンを用意してMeow King ドライブユニットに音楽をストリーミングする準備をします。

### 音楽のストリーミング

#### iOS用

1. iOSデバイスとReSpeakerを同じWi-Fiネットワークに接続します。
2. iOSデバイスで、画面下部から上にスワイプしてコントロールセンターを開きます。
3. コントロールセンターで、水平にスワイプして「再生中」画面を見つけます。
4. 以下の画像のようにReSpeakerを選択します：

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/airplay.png" /></div>

5. ヘッドフォン/スピーカーをrespeakerに接続すると、音楽を楽しめます。

#### Android用

1. スマートフォンを**ReSpeakerのWi-Fi**に接続します。
2. スマートフォンで、*AllConnect*などのAirPlayクライアントソフトウェアを開きます。
3. 以下の画像のようにReSpeakerを選択します：

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/dlna.png" width="50%" height="50%" />
</div>

4. ヘッドフォン/スピーカーをrespeakerに接続すると、音楽を楽しめます。

:::note
再生後に音が聞こえない場合は、プレーヤーアプリケーションの音量を上げてみてください。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>