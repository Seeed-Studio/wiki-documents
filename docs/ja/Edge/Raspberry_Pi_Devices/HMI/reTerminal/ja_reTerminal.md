---
description: reTerminal の使い方ガイド
title: reTerminal の使い方ガイド
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal の使い方ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

reTerminal をご紹介します。これは、私たちの reThings ファミリーの新しいメンバーです。この未来対応のヒューマンマシンインターフェース (HMI) デバイスは、IoT やクラウドシステムと簡単かつ効率的に連携し、エッジで無限のシナリオを実現します。

reTerminal は、Raspberry Pi Compute Module 4 (CM4) によって駆動されており、1.5GHz で動作するクアッドコア Cortex-A72 CPU と、解像度 1280 x 720 の 5 インチ IPS 静電容量式マルチタッチスクリーンを備えています。マルチタスクを実行するのに十分な 4GB の RAM と、オペレーティングシステムをインストールするのに十分な 32GB の eMMC ストレージを備えており、高速な起動時間とスムーズな全体的な体験を提供します。また、デュアルバンド 2.4GHz/5GHz Wi-Fi と Bluetooth 5.0 BLE によるワイヤレス接続も可能です。

reTerminal は、高速拡張インターフェースと豊富な I/O を備えており、さらなる拡張性を提供します。このデバイスには、セキュリティ機能として、セキュアなハードウェアベースのキー保存を備えた暗号化コプロセッサが搭載されています。また、加速度計、光センサー、RTC（リアルタイムクロック）などの内蔵モジュールも備えています。reTerminal には、より高速なネットワーク接続のためのギガビットイーサネットポートと、デュアル USB 2.0 Type-A ポートがあります。さらに、40 ピンヘッダーにより、幅広い IoT アプリケーションに対応可能です。

reTerminal は、出荷時に Raspberry Pi OS がプリインストールされています。そのため、電源を接続するだけで、すぐに IoT、HMI、エッジ AI アプリケーションの構築を開始できます！

| リリース日 | プリインストール OS | プリインストール STM32 ファームウェア | ボードバージョン | 追加情報 |
|---|---|---|---|---|
| 2021/06/15 | 2021-06-02-Raspbian(modified)-32-bit | V1.0 | v1.3 | 初期リリース |
| 2021/08/03 | 2021-06-02-Raspbian(modified)-32-bit | V1.1 | v1.4 |  |
| 2021/09/03 | 2021-06-02-Raspbian(modified)-32-bit | V1.6 | v1.6 | IO 拡張チップを MCP23008-E から PCA9554 に変更、<br />暗号化マイクロチップを ATECC608A-SSHDA-B から ATECC608A-TNGTLSS-G に変更 [詳細はこちら](#../reTerminal-FAQ#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g) |
| 2021/11/02 | 2021-09-14-Raspbian(modified)-32-bit | V1.8 | v1.6 |  |



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 高い安定性と拡張性を備えた統合モジュラー設計
- 4GB RAM と 32GB eMMC を搭載した Raspberry Pi Compute Module 4 による駆動
- 解像度 1280 x 720、293 PPI の 5 インチ IPS 静電容量式マルチタッチスクリーン
- デュアルバンド 2.4GHz/5GHz Wi-Fi と Bluetooth 5.0 BLE によるワイヤレス接続
- 高速拡張インターフェースと豊富な I/O によるさらなる拡張性
- セキュアなハードウェアベースのキー保存を備えた暗号化コプロセッサ
- 加速度計、光センサー、RTC などの内蔵モジュール
- ギガビットイーサネットポートとデュアル USB 2.0 Type-A ポート
- IoT アプリケーション向けの 40 ピンヘッダー

## 仕様

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th colSpan={2}>仕様</th>
      <th>詳細</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>プラットフォーム</td>
      <td>プロセッサ</td>
      <td>Broadcom BCM2711 クアッドコア Cortex-A72 (ARM v8)</td>
    </tr>
    <tr>
      <td>周波数</td>
      <td>64ビット SoC @ 1.5GHz</td>
    </tr>
    <tr>
      <td rowSpan={2}>メモリ</td>
      <td>容量</td>
      <td>4GB</td>
    </tr>
    <tr>
      <td>技術</td>
      <td>LPDDR4（オンダイECC付き）</td>
    </tr>
    <tr>
      <td>eMMC</td>
      <td>容量</td>
      <td>32GB</td>
    </tr>
    <tr>
      <td rowSpan={2}>ワイヤレス</td>
      <td>Wi-Fi</td>
      <td>2.4GHzおよび5.0GHz IEEE 802.11b/g/n/ac</td>
    </tr>
    <tr>
      <td>Bluetooth</td>
      <td>Bluetooth 5.0, BLE</td>
    </tr>
    <tr>
      <td rowSpan={2}>ディスプレイ</td>
      <td>LCD</td>
      <td>5インチ 720x1280 LCD</td>
    </tr>
    <tr>
      <td>タッチパネル</td>
      <td>静電容量式タッチパネル（マルチタッチ対応）</td>
    </tr>
    <tr>
      <td rowSpan={5}>ビデオ</td>
      <td>HDMI</td>
      <td>1 x Micro HDMI出力（最大4Kp60対応）</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td>1 x 2レーン MIPI CSIカメラインターフェース</td>
    </tr>
    <tr>
      <td rowSpan={3}>マルチメディア</td>
      <td>H.265 (4Kp60デコード)</td>
    </tr>
    <tr>
      <td>H.264 (1080p60デコード, 1080p30エンコード)</td>
    </tr>
    <tr>
      <td>OpenGL ES 3.0グラフィックス</td>
    </tr>
    <tr>
      <td rowSpan={10}>内蔵モジュール</td>
      <td rowSpan={2}>リアルタイムクロック</td>
      <td>NXP Semiconductors PCF8563T</td>
    </tr>
    <tr>
      <td>低バックアップ電流; 典型値0.25μA (VDD = 3.0 V, 温度 = 25 ℃)</td>
    </tr>
    <tr>
      <td rowSpan={2}>加速度センサー</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16ビット, ±2g/±4g/±8g/±16g 動的選択可能なフルスケール</td>
    </tr>
    <tr>
      <td rowSpan={2}>暗号化</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>セキュアなハードウェアベースのキー保存, 非対称署名, 検証, キー合意</td>
    </tr>
    <tr>
      <td rowSpan={2}>光センサー</td>
      <td>Levelek LTR-303ALS-01</td>
    </tr>
    <tr>
      <td>デジタル光センサー</td>
    </tr>
    <tr>
      <td>内部IO<br />拡張</td>
      <td>Microchip MCP23008-E/ PCA9554</td>
    </tr>
    <tr>
      <td>ブザー</td>
      <td>≥85dB @10cm 2700±300Hz</td>
    </tr>
    <tr>
      <td rowSpan={12}>外部I/O</td>
      <td rowSpan={8}>GPIOs</td>
      <td>最大5 × UART</td>
    </tr>
    <tr>
      <td>最大5 × I2C</td>
    </tr>
    <tr>
      <td>最大5 × SPI</td>
    </tr>
    <tr>
      <td>1 × SDIOインターフェース</td>
    </tr>
    <tr>
      <td>1 × DPI (並列RGBディスプレイ)</td>
    </tr>
    <tr>
      <td>1 × PCM</td>
    </tr>
    <tr>
      <td>1 × PWMチャンネル</td>
    </tr>
    <tr>
      <td>最大3 × GPCLK出力</td>
    </tr>
    <tr>
      <td rowSpan={4}>垂直拡張<br />インターフェース</td>
      <td>1 × PCIe 1レーン ホスト, Gen 2 (5Gbps)</td>
    </tr>
    <tr>
      <td>1 × USB 2.0ポート (高速)</td>
    </tr>
    <tr>
      <td>26 x GPIOs</td>
    </tr>
    <tr>
      <td>POE</td>
    </tr>
    <tr>
      <td rowSpan={2}>電源</td>
      <td>電圧</td>
      <td>5V DC</td>
    </tr>
    <tr>
      <td>電流</td>
      <td>3A (最小)</td>
    </tr>
    <tr>
      <td>温度</td>
      <td>動作温度</td>
      <td>0 - 70°C (LCDスクリーンの場合: 0 - 60°C)</td>
    </tr>
    <tr>
      <td rowSpan={2}>機械的仕様</td>
      <td>寸法</td>
      <td>140mm x 95mm x 21mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>285g</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## ブロック図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/reTerminal_block_diagram-v1.3.png" alt="pir" width="1000" height="auto"/></p>

## ピン配置図

**注意:** 以下の図に示されているように、reTerminal を正しい向きに保つようにしてください。ここでは、LCD が右側を向き、背面が左側を向いています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
上記の図における reTerminal の向きに注意してください。LCD とオンボードボタンは右側にあり、reTerminal の背面は左側にあります。また、デバイス全体が上下逆さまになっています。
:::

## reTerminal のクイックスタート

reTerminal を最速かつ最も簡単に始めるには、以下のガイドに従ってください。

### 必要なハードウェア

reTerminal を始める前に、以下のハードウェアを準備してください。

- reTerminal
- イーサネットケーブルまたは Wi-Fi 接続
- 電源アダプタ (5V/3A)
- USB Type-C ケーブル

### ソフトウェアセットアップ

#### Raspberry Pi OS にログイン

reTerminal には、出荷時に Raspberry Pi OS がプリインストールされています。そのため、reTerminal を起動してすぐに Raspberry Pi OS にログインできます！

- **ステップ 1.** USB Type-C ケーブルの一端を reTerminal に接続し、もう一端を電源アダプタ (5V/4A) に接続します。

- **ステップ 2.** Raspberry Pi OS が起動したら、**Warning** ウィンドウで **OK** を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** **Welcome to Raspberry Pi** ウィンドウで **Next** を押して初期セットアップを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 4.** **国、言語、タイムゾーン** を選択し、**Next** を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 5.** パスワードを変更するには、まず **Raspberry Pi** アイコンをクリックし、`Universal Access > Onboard` に移動してオンスクリーンキーボードを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 6.** 希望するパスワードを入力し、**Next** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**注意:** デフォルトのパスワード **raspberry** を保持したい場合は、この欄を空白のままにして **Next** をクリックしてください。

- **ステップ 7.** 次の画面で **Next** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 8.** WiFi ネットワークに接続したい場合は、ネットワークを選択して接続し、**Next** を押します。ただし、後で設定したい場合は **Skip** を押してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 9.** **このステップは非常に重要です。** ソフトウェアの更新をスキップするには、必ず **Skip** を押してください。ただし、ソフトウェアを更新したい場合は、[このウィキ](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages) を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 10.** 最後に **Done** を押してセットアップを完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**注意:** ソフトウェアを使用してシャットダウンした後、左上のボタンを使用して reTerminal を再度オンにすることができます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**ヒント:** Raspberry Pi OS をより大きな画面で体験したい場合は、reTerminal の micro-HDMI ポートにディスプレイを接続し、USB ポートにキーボードとマウスを接続することができます。

## reTerminal の使用開始 (拡張版)

もし自分で Raspberry Pi OS をインストールしたり、64ビット版 Ubuntu などの他の OS をインストールしたり、Wi-Fi 経由で SSH、Ethernet 経由で SSH、または USB シリアルアダプタを使用して reTerminal にログインしたい場合は、以下のガイドに従ってください！

### 必要なハードウェア

以下のハードウェアを準備してください：

- reTerminal
- コンピュータ (Windows/Mac/Linux)
- 8GB (またはそれ以上) の micro-SD カード (オプション)
- micro-SD カードリーダー (オプション)
- USB シリアルコンバータ (オプション)
- Ethernet ケーブル (オプション)
- Wi-Fi 接続 (オプション)
- 電源アダプタ (5V/3A)
- USB Type-C ケーブル

### <span id="jump2">Raspberry Pi OS/ 64ビット Ubuntu OS またはその他の OS を eMMC に書き込む</span>

**Raspberry Pi OS/ 64ビット Ubuntu OS またはその他の OS** を reTerminal の CM4 の **eMMC ストレージ** に書き込むことができます。必要なドライバをインストールした後、reTerminal の USB Type-C ポートを PC に接続すると、外部ドライブとして認識されます。まず、reTerminal の背面シェルを取り外してください。

> **注意:** Seeed によってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ 1.** 4つのゴムカバーを取り外し、下にある4つのネジを外して reTerminal の背面シェルを開けます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 2.** ヒートシンクを分解するために2つのネジを取り外します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **ステップ 3.** 下図に従って **ブートモードスイッチ** を下げます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

次にソフトウェアのセットアップに進みます。希望するオペレーティングシステムに応じて以下の手順に従ってください。

##### Windowsの場合

- **ステップ 1.** 必要なドライバとブートツールをインストールするために、**[このリンク](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** をクリックして **rpiboot セットアップインストーラー** をダウンロードします

- **ステップ 2.** USB Type-C ケーブルを使用して reTerminal を PC に接続します

Windows がハードウェアを認識し、必要なドライバをインストールします

- **ステップ 3.** 以前にインストールした **rpiboot** ツールを検索して開きます

- **ステップ 4.** **ファイルエクスプローラー** を開くと、Computer Module 4 の eMMC が **USB マスストレージデバイス** として表示されます

- **ステップ 5.** **[このリンク](https://www.raspberrypi.org/software/)** にアクセスして **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **ステップ 6.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 7.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の構成、ロケール設定** などを行うことができます

- **ステップ 8.** **CHOOSE OS** をクリックして希望の OS を選択します

:::note
Raspbian OS をインストールしようとしている場合、テストを行った結果、**Bullseye** の *32ビットおよび64ビット* バージョンが reTerminal で問題なく動作することが確認されています（[**ブラックスクリーン問題**](https://wiki.seeedstudio.com/ja/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal) に遭遇することはありません）。さらに、新しい **Bookworm** の *64ビット* バージョンも reTerminal でスムーズに動作します。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64ビット Ubuntu** などの他の OS を選択する場合は、**Other general purpose OS** に移動してください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 9.** **CHOOSE STORAGE** をクリックして接続された eMMC ドライブを選択します

- **ステップ 10.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ってください。

- **ステップ 11.** **ブートモードスイッチ** を元の位置に戻し、reTerminal のシェルを組み立てます

次に **[こちら](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)** に進むことができます。

##### Macの場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開いて ```brew -V``` と入力し、正しい homebrew 環境がセットアップされているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
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

- **ステップ 4.** make を使用してビルドします

```sh
make
```

- **ステップ 5.** バイナリを実行します

```sh
sudo ./rpiboot
```

- **ステップ 6.** USB Type-C ケーブルを使用して reTerminal を Mac コンピュータに接続します

- **ステップ 7.** **[このリンク](https://www.raspberrypi.org/software/)** にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの構成、ロケール設定の変更**などを行うことができます。

- **ステップ 10.** **CHOOSE OS** をクリックし、希望するOSを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS** に移動すると、**64-bit Ubuntu** などのOSを選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** **CHOOSE STORAGE** をクリックし、接続されているeMMCドライブを選択します。

- **ステップ 12.** 最後に **WRITE** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ちます。

- **ステップ 13.** **Boot Modeスイッチ**を元の位置に戻し、reTerminalのシェルを組み立てます。

これで、**[こちら](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)** に進むことができます。

##### Linuxの場合

**rpiboot**のソースコードを取得するためにGitを使用しますので、Gitがインストールされていることを確認してください。

- **ステップ 1.** **Terminal**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します。

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで**Git**をインストールします。

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** Gitは日付が正しく設定されていない場合にエラーを出すことがあります。以下を入力して修正してください。

```sh
sudo date MMDDhhmm
```

**注意:** **MM**は月、**DD**は日付、**hh**と**mm**はそれぞれ時間と分を表します。

- **ステップ 4.** **usbboot**ツールのリポジトリをクローンします。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 5.** usbbootツールをビルドしてインストールします。

```sh
make
```

- **ステップ 6.** usbbootツールを実行すると、接続を待機します。

```sh
sudo ./rpiboot
```

- **ステップ 7.** reTerminalをUSB Type-CケーブルでPCに接続します。

- **ステップ 8.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**ソフトウェアをダウンロードします。

- **ステップ 9.** Raspberry Pi Imagerソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 10.** キーボードで **CTRL + SHIFT + X** を押して**Advanced options**ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの構成、ロケール設定の変更**などを行うことができます。

- **ステップ 11.** **CHOOSE OS** をクリックし、希望するOSを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS** に移動すると、**64-bit Ubuntu** などのOSを選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 12.** **CHOOSE STORAGE** をクリックし、接続されているeMMCドライブを選択します。

- **ステップ 13.** 最後に **WRITE** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ちます。

- **ステップ 14.** **Boot Modeスイッチ**を元の位置に戻し、reTerminalのシェルを組み立てます。

### SSHを使用してWi-Fi/Ethernet経由でRaspberry Pi OS/Ubuntu OSまたはその他のOSにログインする

**SSHを使用してWi-Fi/Ethernet経由でRaspberry Pi OSにログイン**する場合は、以下の手順に従ってください。まずreTerminalでWi-Fi/Ethernetを設定し、その後Windows/Mac/Linuxを使用してSSHを行います。

**注意:** Raspberry Pi Imagerを使用してWi-Fiを構成し、SSHを有効にした場合は、ステップ1〜4をスキップできます。

- **ステップ 1.** **Wi-Fi接続**がある場合は、Raspberry Pi OSデスクトップの右上にある**Wi-Fiアイコン**をクリックし、Wi-Fiネットワークを選択して、画面上の仮想キーボードを使用してパスワードを入力します。

**注意:** 他のOSではWi-Fi設定の場所が異なる場合があります。

- **ステップ 2.** **Wi-Fi接続**がない場合は、ルーターからreTerminalのイーサネットポートにイーサネットケーブルを接続します。

**注意:** reTerminalとコンピュータが同じネットワークに接続されていることを確認してください。

- **ステップ 3.** 左上のRaspberry Piアイコンをタッチし、`Preferences > Raspberry Pi Configuration` に移動して**Interfaces**タブをクリックします。

- **ステップ 4.** **SSH**の横にある**Enable**を選択し、**OK**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

次に、コンピュータ上でソフトウェアを構成します。使用しているオペレーティングシステムに応じて以下の手順に従ってください。

##### Windowsの場合

- **ステップ 1.** **Command Prompt**を開き、以下を入力します。

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** プロンプトに対して**yes**を入力します。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 3.** 以下のようにパスワードを入力します。

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linuxの場合

- **ステップ 1.** コンピュータで**Terminal**を開き、以下を入力します。

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** 以下のメッセージに対して**yes**を入力します。

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、以下を入力します。

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">新しい Raspberry Pi OS/Ubuntu OS またはその他の OS をフラッシュした後に reTerminal ドライバをインストールする</span>

reTerminal には必要なドライバがあらかじめインストールされているため、追加のドライバをインストールする必要はありません。ただし、自分で新しい OS をフラッシュした場合は、必要なドライバを別途インストールする必要があります。ドライバが必要なハードウェアには、**5インチLCD、タッチパネル、加速度計、光センサー、ユーザーLED、ユーザーボタン、RTC、ブザー、暗号化コプロセッサ**が含まれます。

- **ステップ 1.** 以下のリポジトリをクローンします。

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **ステップ 2.** リポジトリに移動します。

```sh
cd seeed-linux-dtoverlays
```

:::note
**32bit OS** の場合、`sudo ./scripts/reTerminal.sh` を実行する前に以下のステップを追加する必要があります。インストールが完了したら、変更を有効にするために **reTerminal を再起動** してください。
```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```
:::

- **ステップ 3.** 以下を入力してドライバをインストールします。

```sh
sudo ./scripts/reTerminal.sh
```

:::note

カーネルを同時にアップグレードしたくない場合は、以下を入力してください：

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```
:::

ドライバが正常にインストールされた場合、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** reTerminal を再起動します。

```sh
sudo reboot
```

### seeed 提供のドライバ付き Raspberry Pi OS を eMMC にフラッシュする

- **ステップ 1.** 通常のミラー書き込み手順と同様に、最初にデバイスモデルを選択する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

- **ステップ 2.** OS を選択する際、必要なシステムをダウンロードし、ローカルフォルダで解凍してから選択します。

- **以下のリンクから Raspberry Pi OS をダウンロードしてください**

| バージョン                     | 説明              | タグ                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux version 6.6.20 | 最新 |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux version 6.6.20           | 最新 |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)               | 64bit Debian11(Bullseye) Linux version 5.15.32-v7+  | リリース |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                    | 32bit Debian11(Bullseye) Linux version 5.15.32-v7+  | リリース |

<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

ダウンロードした OS を選択します。ファイルは **.img** で終わるはずです。
<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution

最新の bookworm バージョンのイメージをインストールする場合、詳細オプションボタンをクリックして設定を行わないでください。このインターフェースに初期設定のために入らないでください。
そうしないと、予期しないドライバエラーが発生する可能性があります!!!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

誤って詳細設定を行い、画面の反転エラーが発生した場合は、[ドライバを再インストール](#jump1) して問題を修正する必要があります。

:::

- **ステップ 3.** その他の操作については、[前述の手順](#jump2) を参照してください。
イメージがインストールされた後は、ドライバをインストールする必要はありません。（提供されるイメージにはドライバファイルが含まれています）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### reTerminal 分解ガイド

以下の動画で reTerminal の分解方法をご確認ください：

<p align="center"><iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>></p>

## FAQ

よくある質問については、[こちらをクリック](https://wiki.seeedstudio.com/ja/reTerminal-FAQ)して、reTerminal 使用に関するFAQ Wikiをご覧ください。

## リソース

- **[PDF]** [reTerminal 回路図 v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.pdf)

- **[ZIP]** [reTerminal 回路図 v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.zip)

- **[PDF]** [reTerminal 回路図 v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal 回路図 v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[STP]** [reTerminal 3Dモデル](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Raspberry Pi Compute Module 4 データシート](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi 公式ドキュメント](https://www.raspberrypi.org/documentation/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>