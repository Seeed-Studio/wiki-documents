---
description: reTerminalを始める
title: reTerminalを始める
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal
last_update:
  date: 1/31/2023
  author: jianjing Huang
---
# reTerminalを始める

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

reThingsファミリーの新しいメンバー、reTerminalをご紹介します。この未来対応のヒューマンマシンインターフェース（HMI）デバイスは、IoTやクラウドシステムと簡単かつ効率的に連携し、エッジでの無限のシナリオを実現します。

reTerminalは、1.5GHzで動作するクアッドコアCortex-A72 CPUを搭載したRaspberry Pi Compute Module 4（CM4）と、1280 x 720の解像度を持つ5インチIPSキャパシティブマルチタッチスクリーンを搭載しています。マルチタスクを実行するのに十分なRAM（4GB）と、オペレーティングシステムをインストールするのに十分なeMMCストレージ（32GB）を備えており、高速な起動時間とスムーズな全体的な体験を可能にします。デュアルバンド2.4GHz/5GHz Wi-FiとBluetooth 5.0 BLEによるワイヤレス接続機能を備えています。

reTerminalは、より多くの拡張性のための高速拡張インターフェースと豊富なI/Oで構成されています。このデバイスには、安全なハードウェアベースのキーストレージを備えた暗号化コプロセッサなどのセキュリティ機能があります。また、加速度計、光センサー、RTC（リアルタイムクロック）などの内蔵モジュールも備えています。reTerminalには、より高速なネットワーク接続のためのギガビットイーサネットポートと、デュアルUSB 2.0 Type-Aポートがあります。reTerminalの40ピンヘッダーは、幅広いIoTアプリケーションに対応します。

reTerminalは、Raspberry Pi OSが最初からインストールされた状態で出荷されます。そのため、電源に接続するだけで、すぐにIoT、HMI、エッジAIアプリケーションの構築を開始できます！

| リリース日 | プリインストールOS | プリインストールSTM32ファームウェア | ボードバージョン | 追加情報 |
|---|---|---|---|---|
| 06/15/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.0 | v1.3 | 初期版 |
| 08/03/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.1 | v1.4 |  |
| 09/03/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.6 | v1.6 | IO拡張チップをMCP23008-EからPCA9554に変更、<br />暗号化マイクロチップをATECC608A-SSHDA-BからATECC608A-TNGTLSS-Gに変更 [詳細情報](#../reTerminal-FAQ#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g) |
| 11/02/2021 | 2021-09-14-Raspbian(modified)-32-bit | V1.8 | v1.6 |  |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 高い安定性と拡張性を持つ統合モジュラー設計
- 4GB RAMと32GB eMMCを搭載したRaspberry Pi Computer Module 4で駆動
- 1280 x 720、293 PPIの5インチIPSキャパシティブマルチタッチスクリーン
- デュアルバンド2.4GHz/5GHz Wi-FiとBluetooth 5.0 BLEによるワイヤレス接続
- より多くの拡張性のための高速拡張インターフェースと豊富なI/O
- 安全なハードウェアベースのキーストレージを備えた暗号化コプロセッサ
- 加速度計、光センサー、RTCなどの内蔵モジュール
- ギガビットイーサネットポートとデュアルUSB 2.0 Type-Aポート
- IoTアプリケーション用の40ピンヘッダー

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
      <td>オンダイECC付きLPDDR4</td>
    </tr>
    <tr>
      <td>eMMC</td>
      <td>容量</td>
      <td>32GB</td>
    </tr>
    <tr>
      <td rowSpan={2}>ワイヤレス</td>
      <td>Wi-Fi</td>
      <td>2.4GHz および 5.0GHz IEEE 802.11b/g/n/ac</td>
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
      <td>1 x 2レーン MIPI CSI カメラインターフェース</td>
    </tr>
    <tr>
      <td rowSpan={3}>マルチメディア</td>
      <td>H.265 (4Kp60デコード)</td>
    </tr>
    <tr>
      <td>H.264 (1080p60デコード、1080p30エンコード)</td>
    </tr>
    <tr>
      <td>OpenGL ES 3.0 グラフィックス</td>
    </tr>
    <tr>
      <td rowSpan={10}>内蔵モジュール</td>
      <td rowSpan={2}>リアルタイムクロック</td>
      <td>NXP Semiconductors PCF8563T</td>
    </tr>
    <tr>
      <td>低バックアップ電流；VDD = 3.0 V、温度 = 25 ℃で標準0.25μA</td>
    </tr>
    <tr>
      <td rowSpan={2}>加速度センサー</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16ビット、±2g/±4g/±8g/±16g 動的選択可能フルスケール</td>
    </tr>
    <tr>
      <td rowSpan={2}>暗号化</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>セキュアハードウェアベースキーストレージ、非対称署名、検証、鍵合意</td>
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
      <td rowSpan={8}>GPIO</td>
      <td>最大 5 × UART</td>
    </tr>
    <tr>
      <td>最大 5 × I2C</td>
    </tr>
    <tr>
      <td>最大 5 × SPI</td>
    </tr>
    <tr>
      <td>1 × SDIOインターフェース</td>
    </tr>
    <tr>
      <td>1 × DPI（パラレルRGBディスプレイ）</td>
    </tr>
    <tr>
      <td>1 × PCM</td>
    </tr>
    <tr>
      <td>1 × PWMチャンネル</td>
    </tr>
    <tr>
      <td>最大 3× GPCLK出力</td>
    </tr>
    <tr>
      <td rowSpan={4}>垂直拡張<br />インターフェース</td>
      <td>1 × PCIe 1レーンホスト、Gen 2 (5Gbps)</td>
    </tr>
    <tr>
      <td>1 × USB 2.0ポート（ハイスピード）</td>
    </tr>
    <tr>
      <td>26 x GPIO</td>
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
      <td>3A（最小）</td>
    </tr>
    <tr>
      <td>温度</td>
      <td>動作温度</td>
      <td>0 - 70°C（LCDスクリーン：0 - 60°C）</td>
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

**注意:** 以下に示すように、reTerminalを正しい向きに保持してください。ここではLCDが右側を向き、背面が左側を向いています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
上記の図でのreTerminalの向きに注意深く注意してください。LCDとオンボードボタンは右側にあり、reTerminalの背面は左側にあります。また、デバイス全体が上下逆さまになっています。
:::

## reTerminalのクイックスタート

最も速く簡単な方法でreTerminalを始めたい場合は、以下のガイドに従ってください。

### 必要なハードウェア

reTerminalを始める前に、以下のハードウェアを準備する必要があります

- reTerminal
- Ethernetケーブルまたは Wi-Fi 接続
- 電源アダプター（5V/3A）
- USB Type-C ケーブル

### ソフトウェアセットアップ

#### Raspberry Pi OS にログイン

reTerminalには、箱から出してすぐに使えるようにRaspberry Pi OSが事前にインストールされています。そのため、reTerminalの電源を入れて、すぐにRaspberry Pi OSにログインできます！

- **ステップ 1.** USB Type-Cケーブルの一端をreTerminalに、もう一端を電源アダプター（5V/4A）に接続します

- **ステップ 2.** Raspberry Pi OSが起動したら、**警告**ウィンドウで**OK**を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** **Welcome to Raspberry Pi**ウィンドウで、**Next**を押して初期セットアップを開始します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 4.** **国、言語、タイムゾーン**を選択し、**Next**を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 5.** パスワードを変更するには、まず**Raspberry Pi**アイコンをクリックし、`Universal Access > Onboard`に移動してオンスクリーンキーボードを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 6.** 希望するパスワードを入力し、**Next**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**注意:** デフォルトパスワードの**raspberry**を保持したい場合は、空白のままにして**Next**をクリックできます

- **ステップ 7.** 以下について**Next**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 8.** WiFiネットワークに接続したい場合は、ネットワークを選択して接続し、**Next**を押します。ただし、後で設定したい場合は、**Skip**を押すことができます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 9.** **このステップは非常に重要です。** ソフトウェアの更新をスキップするために**Skip**を押すことを確認してください。ただし、ソフトウェアを更新したい場合は、[このwiki](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages)に従ってください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 10.** 最後に**Done**を押してセットアップを完了します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**注意:** 左上のボタンは、ソフトウェアでシャットダウンした後にreTerminalの電源を入れるために使用できます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**ヒント:** より大きな画面でRaspberry Pi OSを体験したい場合は、reTerminalのmicro-HDMIポートにディスプレイを接続し、reTerminalのUSBポートにキーボードとマウスを接続することもできます。

## reTerminal（拡張版）の使用開始

Raspberry Pi OSを自分でインストールしたい場合、64ビットUbuntuなどの他のOSをインストールしたい場合、WiFi経由のSSH、イーサネット経由のSSH、USB-シリアルアダプター経由でreTerminalにログインしたい場合は、以下のガイドに従ってください！

### 必要なハードウェア

以下のハードウェアを準備する必要があります

- reTerminal
- コンピューター（Windows/Mac/Linux）
- 8GB（以上）のmicro-SDカード（オプション）
- Micro-SDカードリーダー（オプション）
- USB-シリアル変換器（オプション）
- イーサネットケーブル（オプション）
- Wi-Fi接続（オプション）
- 電源アダプター（5V/3A）
- USB Type-Cケーブル

### <span id="jump2">Raspberry Pi OS/ 64ビットUbuntu OSまたは他のOSをeMMCにフラッシュ</span>

reTerminal上のCM4の**eMMCストレージ**に**Raspberry Pi OS/ 64ビットUbuntu OSまたは他のOS**をフラッシュできます。必要なドライバーがインストールされると、reTerminalのUSB Type-CポートをPCに接続するだけで、外部ドライブとして表示されます。まず、reTerminalの背面シェルを取り外します。

> **注意：** Seedによってパッケージ化された最新のシステムイメージには、適切なドライバーが含まれています：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ1.** 4つのゴムカバーを取り外し、下にある4つのネジを外してreTerminalの背面シェルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **ステップ2.** 2つのネジを取り外してヒートシンクを分解します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **ステップ3.** 以下の図に従って**ブートモードスイッチ**を下に倒します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

次にソフトウェアのセットアップに移ります。希望するオペレーティングシステムに応じて手順に従ってください

##### Windows用

- **ステップ1.** **[このリンク](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)**をクリックして**rpibootセットアップインストーラー**をダウンロードし、必要なドライバーとブートツールをインストールします

- **ステップ2.** USB Type-CケーブルでreTerminalをPCに接続します

Windowsがハードウェアを検出し、必要なドライバーをインストールします

- **ステップ3.** 以前にインストールした**rpiboot**ツールを検索して開きます

- **ステップ4.** **ファイルエクスプローラー**を開くと、Computer Module 4のeMMCが**USBマスストレージデバイス**として表示されます

- **ステップ5.** **[このリンク](https://www.raspberrypi.org/software/)**にアクセスして**Raspberry Pi Imager**ソフトウェアをダウンロードします

- **ステップ6.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ7.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **ステップ8.** **CHOOSE OS**をクリックして希望するOSを選択します

:::note
Raspbian OSをインストールしようとしている場合、テストを実施した結果、**Bullseye**の*32ビットと64ビット*の両方のバージョンがreTerminalで[**黒い画面の問題**](https://wiki.seeedstudio.com/ja/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)を発生させることなく正常に動作することがわかりました。さらに、新しい**Bookworm** *64ビット*バージョンもテストしており、reTerminalで正常に機能します。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS**に移動することで、**64ビットUbuntu**などの他のOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ9.** **CHOOSE STORAGE**をクリックして接続されたeMMCドライブを選択します

- **ステップ10.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ11.** **ブートモードスイッチ**を元の位置に戻し、reTerminalシェルを組み立てます

これで**[こちら](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**にスキップできます

##### Mac用

:::caution
**以下の手順を進める前に[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開いて```brew -V```と入力し、正しいhomebrew環境がセットアップされているかを確認してください。インストールされているhomebrew環境のバージョンが表示されるはずです。
:::

- **ステップ1.** **usbboot**リポジトリをクローンします

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 2.** **libusb** をインストールする

```sh
brew install libusb
```

- **ステップ 3.** **pkg-config** をインストールする

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

- **ステップ 6.** reTerminalをUSB Type-Cケーブルを使ってMacコンピュータに接続します

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager**アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **ステップ 10.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などのOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ 12.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 13.** **Boot Mode switch**を元の位置に戻し、reTerminalのシェルを組み立てます

これで**[こちら](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**にスキップできます

##### Linux用

**rpiboot**のソースコードを取得するためにGitを使用するので、Gitがインストールされていることを確認してください

- **ステップ 1.** **ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで **Git** をインストールします

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** 日付が正しく設定されていない場合、Gitがエラーを出力する可能性があります。これを修正するには以下を入力してください

```sh
sudo date MMDDhhmm
```

**注意:** **MM** は月、**DD** は日付、**hh** と **mm** はそれぞれ時と分です。

- **ステップ 4.** **usbboot** ツールリポジトリをクローンする

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 5.** usbbootツールをビルドしてインストールする

```sh
make
```

- **ステップ 6.** usbbootツールを実行すると、接続を待機します

```sh
sudo ./rpiboot
```

- **ステップ 7.** USB Type-Cケーブルを使用してreTerminalをPCに接続します

- **ステップ 8.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**ソフトウェアをダウンロードします

- **ステップ 9.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 10.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、WiFiの設定、ロケール設定**などを行うことができます

- **ステップ 11.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などのOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 12.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ 13.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 14.** **Boot Modeスイッチ**を元の位置に戻し、reTerminalのシェルを組み立てます

### Wi-Fi/Ethernet経由でSSHを使用してRaspberry Pi OS/Ubuntu OSまたはその他のOSにログインする

**Wi-Fi/Ethernet経由でSSH**を使用してRaspberry Pi OSにログインしたい場合は、以下の手順に従ってください。まずreTerminalでWi-Fi/Ethernetを設定し、次にWindows/Mac/LinuxでSSHを使用します。

**注意:** Raspberry Pi ImagerでWiFiを設定し、SSHを有効にしている場合は、ステップ1〜4をスキップできます

- **ステップ 1.** **Wi-Fi接続**がある場合は、Raspberry Pi OSデスクトップの右上角にある**Wi-Fiアイコン**をクリックし、Wi-Fiネットワークを選択して、画面上の仮想キーボードを使用してパスワードを入力します

**注意:** Wi-Fi設定の場所は、他のOSでは異なる場合があります

- **ステップ 2.** **Wi-Fi接続**がない場合は、ルーターからreTerminalのイーサネットポートにイーサネットケーブルを接続できます

**注意:** reTerminalとコンピューターが同じネットワークに接続されていることを確認してください

- **ステップ 3.** 左上角のRaspberry Piアイコンをタッチし、`Preferences > Raspberry Pi Configuration`に移動して**Interfaces**タブをクリックします

- **ステップ 4.** **SSH**の横にある**Enable**を選択し、**OK**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

次に、コンピューター上でソフトウェアを設定しましょう。お使いのオペレーティングシステムに従って進めてください

##### Windows用

- **ステップ 1.** **コマンドプロンプト**を開き、以下を入力します

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** プロンプトに対して **yes** と入力します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 3.** 以下のようにパスワードを入力します

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linux の場合

- **ステップ 1.** コンピュータで**ターミナル**を開き、以下を入力します

```sh
ssh pi@raspberrypi.local
```

- **ステップ2.** 以下のメッセージに対して **yes** と入力してください

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、以下を入力してください

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">新しいRaspberry Pi OS/ Ubuntu OSまたはその他のOSをフラッシュした後のreTerminalドライバーのインストール</span>

reTerminalには必要なドライバーが最初から事前インストールされているため、追加のドライバーをインストールする必要はありません。ただし、自分で新しいOSをフラッシュした場合は、必要なドライバーを別途インストールする必要があります。ドライバーが必要なハードウェアには、**5インチLCD、タッチパネル、加速度センサー、光センサー、ユーザーLED、ユーザーボタン、RTC、ブザー、暗号化コプロセッサー**が含まれます。

- **ステップ 1.** 以下のリポジトリをクローンします

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **ステップ 2.** リポジトリに入る

```sh
cd seeed-linux-dtoverlays
```

:::note
**32bit OS**の場合、`sudo ./scripts/reTerminal.sh`を実行する前に以下のステップを追加する必要があります。インストール完了後、変更を有効にするためにreTerminalを**再起動**することを忘れないでください。

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```

:::

- **ステップ 3.** 以下を入力してドライバーをインストールします

```sh
sudo ./scripts/reTerminal.sh
```

:::note

カーネルを同時にアップグレードしたくない場合は、以下を入力してください：

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```

:::

ドライバーが正常にインストールされた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** reTerminalを再起動します

```sh
sudo reboot
```

### seeedのドライバーを含むRaspberry Pi OSをeMMCにフラッシュする

- **ステップ 1.** 通常のミラー書き込み手順と同様に、まずデバイスモデルを選択する必要があります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

- **ステップ 2.** オペレーティングシステムを選択する際は、必要なシステムをダウンロードし、ローカルフォルダに解凍してから選択する必要があります。

- **以下のリンクにアクセスしてRaspberry Pi OSをダウンロードしてください**

| バージョン                     | 説明      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux version 6.6.20 | lastest |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux version 6.6.20           | lastest |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)               | 64bit Debian11(Bullseye) Linux version 5.15.32-v7+  | release |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                    | 32bit Debian11(Bullseye) Linux version 5.15.32-v7+  | release |

<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

ダウンロードしたOSを選択してください。ファイル名は **.img** で終わっているはずです。
<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution

最新のbookwormバージョンのイメージをインストールする場合は、詳細オプションボタンをクリックして設定を行わないでください。初期設定のためにこのインターフェースに入らないでください。
そうしないと、予期しないドライバーエラーが発生する可能性があります！！！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

誤って詳細設定を行い、画面反転エラーが発生した場合は、問題を修正するために[ドライバーを再インストール](#jump1)する必要があります。

:::

- **ステップ 3.** その他の操作については、[前述の手順](#jump2)を参照してください。
イメージがインストールされた後は、使用するためにドライバーをインストールする必要はありません。（提供するイメージにはドライバーファイルが含まれています）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### reTerminal 分解ガイド

reTerminalの分解方法については、以下の動画をご確認ください：

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## FAQ

よくある質問については、[こちらをクリック](https://wiki.seeedstudio.com/ja/reTerminal-FAQ)してreTerminal使用方法のFAQwikiをご覧ください

## リソース

- **[PDF]** [reTerminal 回路図 v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.pdf)

- **[ZIP]** [reTerminal 回路図 v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.zip)

- **[PDF]** [reTerminal 回路図 v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal 回路図 v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[STP]** [reTerminal 3Dモデル](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Raspberry Pi Compute Module 4 データシート](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi 公式ドキュメント](https://www.raspberrypi.org/documentation/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
