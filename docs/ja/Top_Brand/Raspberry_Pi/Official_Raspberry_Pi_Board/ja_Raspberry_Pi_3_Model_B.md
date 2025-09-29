---
description: Raspberry Pi 3 Model B
title: Raspberry Pi 3 Model B
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Raspberry_Pi_3_Model_B
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


**Raspberry Pi®** は、[Raspberry Pi Foundation](http://www.raspberrypi.org) によって開発された、クレジットカードサイズの **ARM** ベースの **SBC**（シングルボードコンピュータ）です。Raspberry Pi は Debian ベースの **GNU/Linux** オペレーティングシステム [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) を実行し、この SBC 用に多くの他の OS の移植版も存在します。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rpi4.png)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)

## はじめに

### 必要なもの

- [Raspberry Pi 4](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)/[3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B--p-3037.html)/[3B](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)/[3](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-3-p-2848.html)/[3A+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-p-3216.html)/[2B](https://www.seeedstudio.com/Raspberry-Pi-2-Model-B-w-ARMv7-Quad-Core-1GB-RAM-p-2289.html)/[B](https://www.seeedstudio.com/Raspberry-Pi-Model-B-p-1634.html)/[Zero](https://www.seeedstudio.com/Raspberry-Pi-Zero-p-4254.html)
- Wi-Fi ネットワーク/モバイルホットスポット
- 4GB（またはそれ以上）の SD カードと SD リーダー
- PC または Mac
- 5V 3A USB アダプター（オプション）
- 1 本の USB-C データケーブル（例として Pi 4 を使用）

:::note
USB ケーブルを挿入する際は優しく行ってください。そうしないとインターフェースが損傷する可能性があります。内部に 4 本のケーブルがある USB ケーブルを使用してください。内部に 2 本のケーブルしかない USB ケーブルではデータを転送できません。ケーブルが適切かどうかわからない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)で購入できます。
:::

### SD カードからの起動

#### Raspberry Pi OS の書き込み方法

**1. Raspberry Pi OS Stretch のダウンロード**

[Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) を Raspberry Pi の公式ウェブサイトからダウンロードし、「デスクトップと推奨ソフトウェア付き」バージョンを選択します。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rspberrypios.png)

**2. Etcher**

<a href="https://etcher.io/">Etcher</a> をここからダウンロードし、```*.img.xz``` ファイルを直接 SD カードに書き込みます。または、```*.img.xz``` ファイルを解凍して ```*.img``` ファイルに変換し、他のイメージ書き込みツールを使用して SD カードに書き込むこともできます。
<br />

- プラスアイコンをクリックしてダウンロードしたイメージを追加します。ソフトウェアは挿入した SD カードを自動的に選択します。その後、Flash! をクリックして書き込みを開始します。完了まで約 10 分かかります。
- イメージャーを終了し、SD カードを取り出します。
- イメージを SD カードに書き込んだ後、SD カードを Raspberry Pi に挿入します。USB アダプターと USB-C インターフェースを使用して電源を供給します。書き込みプロセス中に SD カードを取り外さないでください。Raspberry Pi は SD カードから起動します。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/etcher.png)

#### 基本設定

**無線接続と SSH**

**1.** 「wpa_supplicant.conf」という名前のファイルを /boot フォルダに作成し、以下のコードをコピーします。

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
Wi-Fi 名とパスワードは、PC が接続しているローカル Wi-Fi と同じである必要があります（PC と Raspberry Pi が同じ LAN にあることを確認してください）。
:::

**2.** 「ssh」という名前の空のファイルを /boot フォルダに作成します。

**3.** Raspberry Pi OS をインストールした SD カードを Raspberry Pi に挿入します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** Raspberry Pi を電源に接続して起動します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** Putty を開いて PC を Raspberry Pi に接続します。

Putty のダウンロード：[https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
デフォルトのユーザー名 : pi  
デフォルトのパスワード : raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**VNC 設定**

**1.** ターミナルで以下のコマンドを入力して raspi-config を開きます。

```bash
sudo raspi-config
```

矢印キーで「5 Interfacing Options」に移動し、「Enter」を押して選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

矢印キーで「P3 VNC」に移動し、「Enter」を押して選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

「Yes」を選択して有効にします。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

「Ok」を選択します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** VNC Viewer のインストール

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) をダウンロードします。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

VNC Viewer を開き、Raspberry Pi の IP アドレスを入力します。Raspberry Pi のターミナルで `ifconfig` コマンドを入力して IP アドレスを確認するか、`raspberrypi.local` を入力することもできます。

:::note
`raspberrypi.local` を使用して Pi にログインする場合、LAN 内で使用している Raspberry Pi が 1 台だけであることを確認してください。
:::

デフォルトのユーザー名とパスワードを入力すると、Raspberry Pi のリモートデスクトップにアクセスできます！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

成功！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

## UART 有効化

- miniuart-bt を有効化

## GrovePi と一緒に使用する

[Grove Base Hat for Raspberry Pi wiki](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/) を参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供できるよう、さまざまなサポートを用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>