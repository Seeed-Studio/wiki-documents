---
description: reTerminal を使い始める
title: Getting Started with reTerminal
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal
sku: 110070048,102110638,103060001,E2025081502,E2025081503
last_update:
  date: 1/31/2023
  author: jianjing Huang
---
# reTerminal を使い始める

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

reTerminal は、私たちの reThings ファミリーに新しく加わった製品です。この将来性のあるヒューマンマシンインターフェース (HMI) デバイスは、IoT やクラウドシステムと簡単かつ効率的に連携し、エッジにおける無限のユースケースを実現します。

reTerminal は、1.5GHz で動作するクアッドコア Cortex-A72 CPU を搭載した Raspberry Pi Compute Module 4 (CM4) と、解像度 1280 x 720 の 5 インチ IPS 静電容量式マルチタッチスクリーンによって駆動されています。マルチタスクを実行するのに十分な RAM（4GB）と、オペレーティングシステムをインストールできる十分な eMMC ストレージ（32GB）を備えており、高速な起動時間とスムーズな全体的な操作体験を実現します。2.4GHz/5GHz デュアルバンド Wi-Fi と Bluetooth 5.0 BLE によるワイヤレス接続も備えています。

reTerminal は、高速拡張インターフェースと豊富な I/O を備えており、拡張性に優れています。このデバイスには、安全なハードウェアベースのキー格納を行う暗号コプロセッサなどのセキュリティ機能があります。また、加速度センサ、照度センサ、RTC（リアルタイムクロック）などの内蔵モジュールも搭載しています。reTerminal には、高速なネットワーク接続のためのギガビット Ethernet ポートと、デュアル USB 2.0 Type-A ポートがあります。reTerminal 上の 40 ピンヘッダにより、幅広い IoT アプリケーションに対応できます。


reTerminal には Raspberry Pi OS があらかじめインストールされた状態で出荷されます。そのため、電源を接続するだけで、メイカープロジェクト、IoT やホームオートメーション構築、オフグリッドの DIY 実験をすぐに始めることができます。

| リリース日 | プリインストール OS | プリインストール STM32 ファームウェア | ボードバージョン | 追加情報 |
|---|---|---|---|---|
| 06/15/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.0 | v1.3 | 初期リリース |
| 08/03/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.1 | v1.4 |  |
| 09/03/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.6 | v1.6 | IO 拡張チップを MCP23008-E から PCA9554 に変更, <br />暗号化マイクロチップを ATECC608A-SSHDA-B から ATECC608A-TNGTLSS-G に変更 [More Info](#../reTerminal-FAQ#q13-暗号化チップが-atecc608a-sshda-b-か-atecc608a-tngtlss-g-かを確認する方法) |
| 11/02/2021 | 2021-09-14-Raspbian(modified)-32-bit | V1.8 | v1.6 |  |



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特長

- 高い安定性と拡張性を備えた一体型モジュラー設計
- 4GB RAM と 32GB eMMC を備えた Raspberry Pi Computer Module 4 搭載
- 1280 x 720、293 PPI の 5 インチ IPS 静電容量式マルチタッチスクリーン
- 2.4GHz/5GHz デュアルバンド Wi-Fi と Bluetooth 5.0 BLE によるワイヤレス接続
- 高速拡張インターフェースと豊富な I/O による高い拡張性
- 安全なハードウェアベースのキー格納を行う暗号コプロセッサ
- 加速度センサ、照度センサ、RTC などの内蔵モジュール
- ギガビット Ethernet ポートとデュアル USB 2.0 Type-A ポート
- IoT アプリケーション向け 40 ピンヘッダ

## 仕様

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th colSpan={2}>Specification</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Platform</td>
      <td>Processor</td>
      <td>Broadcom BCM2711 quad-core Cortex-A72 (ARM v8)</td>
    </tr>
    <tr>
      <td>Frequency</td>
      <td>64-bit SoC @ 1.5GHz</td>
    </tr>
    <tr>
      <td rowSpan={2}>Memory</td>
      <td>Capacity</td>
      <td>4GB</td>
    </tr>
    <tr>
      <td>Technology</td>
      <td>LPDDR4 with on-die ECC</td>
    </tr>
    <tr>
      <td>eMMC</td>
      <td>Capacity</td>
      <td>32GB</td>
    </tr>
    <tr>
      <td rowSpan={2}>Wireless</td>
      <td>Wi-Fi</td>
      <td>2.4GHz and 5.0GHz IEEE 802.11b/g/n/ac</td>
    </tr>
    <tr>
      <td>Bluetooth</td>
      <td>Bluetooth 5.0, BLE</td>
    </tr>
    <tr>
      <td rowSpan={2}>Display</td>
      <td>LCD</td>
      <td>5-inch 720x1280 LCD</td>
    </tr>
    <tr>
      <td>Touch Panel</td>
      <td>静電容量式タッチパネル（マルチタッチ対応）</td>
    </tr>
    <tr>
      <td rowSpan={5}>Video</td>
      <td>HDMI</td>
      <td>1 x Micro HDMI 出力（最大 4Kp60 対応）</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td>1 x 2 レーン MIPI CSI カメラインターフェース</td>
    </tr>
    <tr>
      <td rowSpan={3}>Multimedia</td>
      <td>H.265 (4Kp60 decode)</td>
    </tr>
    <tr>
      <td>H.264 (1080p60 decode,1080p30 encode)</td>
    </tr>
    <tr>
      <td>OpenGL ES 3.0 graphics</td>
    </tr>
    <tr>
      <td rowSpan={10}>Built-In Modules</td>
      <td rowSpan={2}>Real-Time Clock</td>
      <td>NXP Semiconductors PCF8563T</td>
    </tr>
    <tr>
      <td>低バックアップ電流；標準 0.25μA（VDD = 3.0 V、温度 = 25 ℃ のとき）</td>
    </tr>
    <tr>
      <td rowSpan={2}>Accelerometer</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16 ビット、±2g/±4g/±8g/±16g 動的選択可能フルスケール</td>
    </tr>
    <tr>
      <td rowSpan={2}>Encryption</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>安全なハードウェアベースのキー格納、非対称署名、検証、鍵共有</td>
    </tr>
    <tr>
      <td rowSpan={2}>Light Sensor</td>
      <td>Levelek LTR-303ALS-01</td>
    </tr>
    <tr>
      <td>デジタル照度センサ</td>
    </tr>
    <tr>
      <td>Internal IO<br />Expansion</td>
      <td>Microchip MCP23008-E/ PCA9554</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>≥85dB @10cm 2700±300Hz</td>
    </tr>
    <tr>
      <td rowSpan={12}>External I/O</td>
      <td rowSpan={8}>GPIOs</td>
      <td>最大 5 × UART</td>
    </tr>
    <tr>
      <td>最大 5 × I2C</td>
    </tr>
    <tr>
      <td>最大 5 × SPI</td>
    </tr>
    <tr>
      <td>1 × SDIO インターフェース</td>
    </tr>
    <tr>
      <td>1 × DPI（パラレル RGB ディスプレイ）</td>
    </tr>
    <tr>
      <td>1 × PCM</td>
    </tr>
    <tr>
      <td>1 × PWM チャンネル</td>
    </tr>
    <tr>
      <td>最大 3 × GPCLK 出力</td>
    </tr>
    <tr>
      <td rowSpan={4}>垂直拡張<br />インターフェース</td>
      <td>1 × PCIe 1 レーンホスト、Gen 2 (5Gbps)</td>
    </tr>
    <tr>
      <td>1 × USB 2.0 ポート（ハイスピード）</td>
    </tr>
    <tr>
      <td>26 x GPIOs</td>
    </tr>
    <tr>
      <td>POE</td>
    </tr>
    <tr>
      <td rowSpan={2}>Power</td>
      <td>Voltage</td>
      <td>5V DC</td>
    </tr>
    <tr>
      <td>Current</td>
      <td>3A(Minimum)</td>
    </tr>
    <tr>
      <td>Temperature</td>
      <td>Operating Temperature</td>
      <td>0 - 70°C（LCD スクリーンの場合: 0 - 60°C）</td>
    </tr>
    <tr>
      <td rowSpan={2}>Mechanical</td>
      <td>Dimensions</td>
      <td>140mm x 95mm x 21mm</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>285g</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal_1.png" alt="pir" width="1000" height="auto"/></p>

## ブロック図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal_2.png" alt="pir" width="1000" height="auto"/></p>

## ピン配置図

**注意:** 下図のような向きを必ず保って reTerminal を配置してください。ここでは LCD が右側を向き、背面が左側を向いています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
上の図における reTerminal の向きに十分注意してください。LCD とオンボードボタンは右側にあり、reTerminal の背面は左側にあります。また、デバイス全体が上下逆さまになっています。
:::

## reTerminal クイックスタート

reTerminal を最も速く、かつ簡単に使い始めたい場合は、以下のガイドに従ってください。

### 必要なハードウェア

reTerminal を使い始める前に、以下のハードウェアを用意する必要があります。

- reTerminal
- Ethernet ケーブルまたは Wi-Fi 接続
- 電源アダプタ (5V/3A)
- USB Type-C ケーブル

### ソフトウェアセットアップ

#### Raspberry Pi OS にログインする

reTerminal には Raspberry Pi OS があらかじめインストールされています。そのため、reTerminal の電源を入れるだけで、すぐに Raspberry Pi OS にログインできます。

- **ステップ 1.** USB Type-C ケーブルの一端を reTerminal に、もう一端を電源アダプタ (5V/4A) に接続します

- **ステップ 2.** Raspberry Pi OS が起動したら、**Warning** ウィンドウで **OK** を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** **Welcome to Raspberry Pi** ウィンドウで、初期セットアップを開始するために **Next** を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 4.** **country, language, timezone** を選択し、**Next** を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 5.** パスワードを変更するには、まず **Raspberry Pi** アイコンをクリックし、`Universal Access > Onboard` に移動してオンスクリーンキーボードを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 6.** 希望するパスワードを入力し、**Next** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**注意：** デフォルトのパスワードを **raspberry** のままにしておきたい場合は、ここは空白のままにして **Next** をクリックします

- **ステップ 7.** 次の画面では **Next** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 8.** WiFi ネットワークに接続したい場合は、ネットワークを選択して接続し、**Next** を押します。後で設定したい場合は、**Skip** を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 9.** **このステップは非常に重要です。** ソフトウェアの更新をスキップするために、必ず **Skip** を押してください。ただし、ソフトウェアを更新したい場合は、[この wiki](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages) に従ってください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 10.** 最後に **Done** を押してセットアップを完了します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**注意：** 左上のボタンは、ソフトウェアでシャットダウンした後に reTerminal の電源を入れるために使用できます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**ヒント：** より大きな画面で Raspberry Pi OS を体験したい場合は、reTerminal の micro-HDMI ポートにディスプレイを接続し、さらに reTerminal の USB ポートにキーボードとマウスを接続することができます。

## reTerminal を使い始める（拡張編）

自分で Raspberry Pi OS をインストールしたり、64-bit Ubuntu などの他の OS をインストールしたり、WiFi 経由の SSH、Ethernet 経由の SSH、USB to Serial Adapter を介して reTerminal にログインしたい場合は、以下のガイドに従ってください！

### 必要なハードウェア

以下のハードウェアを準備する必要があります

- reTerminal
- コンピュータ（Windows/Mac/Linux）
- 8GB（以上）の micro-SD カード（オプション）
- Micro-SD カードリーダー（オプション）
- USB シリアルコンバータ（オプション）
- Ethernet ケーブル（オプション）
- Wi-Fi 接続（オプション）
- 電源アダプタ（5V/3A）
- USB Type-C ケーブル

### <span id="jump2">Raspberry Pi OS / 64-bit Ubuntu OS またはその他の OS を eMMC に書き込む</span>

reTerminal 上の CM4 の **eMMC ストレージ** に **Raspberry Pi OS / 64-bit Ubuntu OS またはその他の OS** を書き込むことができます。必要なドライバがインストールされると、reTerminal の USB Type-C ポートを PC に接続するだけで、外部ドライブとして表示されます。まず、reTerminal の背面カバーを取り外します。

> **注意：** Seeed によってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)


- **ステップ 1.** 4 つのゴムカバーを外し、その下の 4 本のネジを外して reTerminal の背面カバーを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 2.** ヒートシンクを取り外すために 2 本のネジを外します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **ステップ 3.** 下の図に従って **boot mode switch** を下側に倒します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

それではソフトウェアのセットアップに進みましょう。使用したいオペレーティングシステムに応じて手順に従ってください

##### Windows の場合

- **ステップ 1.** **[this link](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** をクリックして **rpiboot setup installer** をダウンロードし、必要なドライバとブートツールをインストールします

- **ステップ 2.** USB Type-C ケーブルで reTerminal を PC に接続します

Windows はハードウェアを検出し、必要なドライバをインストールします

- **ステップ 3.** 先ほどインストールした **rpiboot** ツールを検索して開きます

- **ステップ 4.** **file explorer** を開くと、Computer Module 4 の eMMC が **USB mass storage device** として表示されます

- **ステップ 5.** **[this link](https://www.raspberrypi.org/software/)** にアクセスして **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **ステップ 6.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 7.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSH の有効化、パスワードの設定、wifi の設定、ロケール設定** などを行うことができます

- **ステップ 8.** **CHOOSE OS** をクリックして、希望する OS を選択します

:::note
Raspbian OS のインストールを試みている場合、テストの結果、**Bullseye** の *32-bit および 64-bit* の両バージョンが、reTerminal で [**black screen issue**](https://wiki.seeedstudio.com/ja/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal) に遭遇することなく正常に動作することを確認しています。さらに、新しい **Bookworm** の *64-bit* バージョンもテスト済みで、reTerminal 上でスムーズに動作します。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS** に進むことで、**64-bit Ubuntu** などの他の OS を選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 9.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します

- **ステップ 10.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。

- **ステップ 11.** **Boot Mode switch** を元の位置に戻し、reTerminal の筐体を組み立てます

これで **[here](#Raspberry-Pi-OS-Ubuntu-OS-またはその他の-OS-に-Wi-Fi-または-Ethernet-経由の-SSH-でログインする)** までスキップできます

##### MAC の場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -V``` と入力して、正しい homebrew 環境がセットアップされているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** **usbboot** リポジトリをクローンします

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 2.** **libusb** をインストールします

```sh
brew install libusb
```

- **ステップ 3.** **pkg-config** をインストールします

```sh
brew install pkg-config
```

- **ステップ 4.** make を使ってビルドします

```sh
make
```

- **ステップ 5.** バイナリを実行します

```sh
sudo ./rpiboot
```

- **ステップ 6.** USB Type-C ケーブルで reTerminal を Mac コンピュータに接続します

- **ステップ 7.** [this link](https://www.raspberrypi.org/software/) にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSH の有効化、パスワードの設定、wifi の設定、ロケール設定** などを行うことができます

- **ステップ 10.** **CHOOSE OS** をクリックして、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS** に進むことで、**64-bit Ubuntu** などの OS を選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します

- **ステップ 12.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。

- **ステップ 13.** **Boot Mode switch** を元の位置に戻し、reTerminal の筐体を組み立てます

これで **[here](#Raspberry-Pi-OS-Ubuntu-OS-またはその他の-OS-に-Wi-Fi-または-Ethernet-経由の-SSH-でログインする)** までスキップできます

##### Linux の場合

Git を使用して **rpiboot** のソースコードを取得するので、Git がインストールされていることを確認してください

- **ステップ 1.** **Terminal** ウィンドウを開き、**パッケージリスト** を更新するために次のコマンドを入力します

```sh
sudo apt-get update
```

- **ステップ 2.** 次のコマンドで **Git** をインストールします

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** 日付が正しく設定されていない場合、Git はエラーを出すことがあります。これを修正するために次のコマンドを入力します

```sh
sudo date MMDDhhmm
```

**注意：** ここで **MM** は月、**DD** は日付、**hh** と **mm** はそれぞれ時と分です。

- **ステップ 4.** **usbboot** ツールのリポジトリをクローンします

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 5.** usbboot ツールをビルドしてインストールします

```sh
make
```

- **ステップ 6.** `usbboot` ツールを実行すると、接続待ちの状態になります

```sh
sudo ./rpiboot
```

- **ステップ 7.** USB Type-C ケーブルで reTerminal を PC に接続します

- **ステップ 8.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **ステップ 9.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 10.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ロケール設定** などを行うことができます

- **ステップ 11.** **CHOOSE OS** をクリックして、好みの OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS** に進むことで、**64-bit Ubuntu** などの OS を選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 12.** **CHOOSE STORAGE** をクリックして、接続されている eMMC ドライブを選択します

- **ステップ 13.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。

- **ステップ 14.** **Boot Mode スイッチ** を元の位置に戻し、reTerminal の筐体を組み立てます

### Wi-Fi / Ethernet 経由の SSH を使用して Raspberry Pi OS / Ubuntu OS またはその他の OS にログインする

**SSH over Wi-Fi / Ethernet** を使用して Raspberry Pi OS にログインしたい場合は、以下の手順に従ってください。まず reTerminal で Wi-Fi / Ethernet を設定し、その後 Windows / Mac / Linux から SSH 接続します。

**注意：** Raspberry Pi Imager を使用して WiFi を設定し、SSH を有効にしている場合は、ステップ 1 ～ 4 をスキップできます

- **ステップ 1.** **Wi-Fi 接続** がある場合は、Raspberry Pi OS デスクトップ右上の **Wi-Fi アイコン** をクリックし、Wi-Fi ネットワークを選択して、オンスクリーンの仮想キーボードを使用してパスワードを入力します

**注意：** Wi-Fi 設定の場所は、他の OS では異なる場合があります

- **ステップ 2.** **Wi-Fi 接続** がない場合は、ルーターから reTerminal の Ethernet ポートに Ethernet ケーブルを接続します

**注意：** reTerminal とコンピュータが同じネットワークに接続されていることを確認してください

- **ステップ 3.** 左上の Raspberry Pi アイコンにタッチし、`Preferences > Raspberry Pi Configuration` に移動して **Interfaces** タブをクリックします

- **ステップ 4.** **SSH** の横にある **Enable** を選択し、**OK** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

次にコンピュータ側のソフトウェアを設定します。ご使用のオペレーティングシステムに応じて、以下に従ってください

##### Windows の場合

- **ステップ 1.** コンピュータで **Command Prompt** を開き、次のように入力します

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** プロンプトに対して **yes** と入力します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 3.** 次のようにパスワードを入力します

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OS へのログインに成功すると、次のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac / Linux の場合

- **ステップ 1.** コンピュータで **Terminal** を開き、次のように入力します

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** 次のメッセージに対して **yes** と入力します

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、次のように入力します

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OS へのログインに成功すると、次のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">新しい Raspberry Pi OS / Ubuntu OS またはその他の OS をフラッシュした後に reTerminal ドライバをインストールする</span>

reTerminal には必要なドライバがあらかじめインストールされているため、追加のドライバをインストールする必要はありません。しかし、自分で新しい OS をフラッシュした場合は、必要なドライバを別途インストールする必要があります。ドライバが必要なハードウェアには、**5 インチ LCD、タッチパネル、加速度センサ、光センサ、ユーザー LED、ユーザーボタン、RTC、ブザー、暗号コプロセッサ** が含まれます。

- **ステップ 1.** 次のリポジトリをクローンします

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **ステップ 2.** リポジトリに入ります

```sh
cd seeed-linux-dtoverlays
```

:::note
**32bit OS** の場合は、`sudo ./scripts/reTerminal.sh` を実行する前に、次のステップを追加する必要があります。インストールが完了したら、変更を有効にするために reTerminal を**再起動**することを忘れないでください。
```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```
:::

- **ステップ 3.** ドライバをインストールするために次のコマンドを入力します

```sh
sudo ./scripts/reTerminal.sh
```

:::note

カーネルを同時にアップグレードしたくない場合は、次のコマンドを入力します：

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```
:::

ドライバのインストールに成功すると、次のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>


- **ステップ 4.** reTerminal を再起動します

```sh
sudo reboot
```

### seeed 提供のドライバ入り Raspberry Pi OS を eMMC にフラッシュする

- **ステップ 1.** 通常のイメージ書き込み手順と同様に、まずデバイスモデルを選択する必要があります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

- **ステップ 2.** オペレーティングシステムを選択する際には、必要なシステムをダウンロードし、ローカルフォルダで解凍してから選択する必要があります。

- **以下のリンクにアクセスして Raspberry Pi OS をダウンロードします**

| バージョン                     | 説明      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux version 6.6.20 | lastest |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux version 6.6.20           | lastest |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)               | 64bit Debian11(Bullseye) Linux version 5.15.32-v7+  | release |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                    | 32bit Debian11(Bullseye) Linux version 5.15.32-v7+  | release |

<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

ダウンロードした OS を選択します。**.img** で終わるファイルである必要があります。
<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution

最新の bookworm バージョンのイメージをインストールする場合は、advance option ボタンをクリックして設定を行わないでください。初期設定のためにこのインターフェースに入らないでください。
そうしないと、予期しないドライバエラーが発生する可能性があります!!!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

誤って advanced configuration を行い、画面の反転エラーが発生した場合は、問題を解決するために[ドライバを再インストール](#jump1)する必要があります。

:::

- **ステップ 3.** その他の操作については、[前のステップ](#jump2)を参照してください。
イメージのインストール後は、ドライバをインストールしなくても使用できます。（提供しているイメージにはドライバファイルが含まれています）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### reTerminal 分解ガイド

reTerminal の分解方法については、以下のビデオを確認してください：

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## FAQ

よくある質問については、[こちらをクリック](https://wiki.seeedstudio.com/ja/reTerminal-FAQ)して reTerminal Usage wiki の FAQ を参照してください

## リソース

- **[STP]** [reTerminal 3D モデル](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Raspberry Pi Compute Module 4 データシート](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi 公式ドキュメント](https://www.raspberrypi.org/documentation/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
