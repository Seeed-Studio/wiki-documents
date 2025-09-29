---
description: ODYSSEY - X86J4105
title: ODYSSEY 入門ガイド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY_Getting_Started
last_update:
  date: 05/15/2025
  author: w0x7ce

---


最新バージョンをご確認ください: https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105/

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105/
sku: 102110399
--- -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ODYSSEY-X86J4105-side.png)

ODYSSEY - X86J4105は、Intel Celeron J4105をベースにした製品で、クアッドコア1.5GHz CPU（最大2.5GHzまでブースト可能）を搭載しています。標準的なコンピュータに必要なすべての優れた機能を備えており、8GB LPDDR4 RAM、64GB eMMCストレージ（オプション）、オンボードWi-Fi/BLE、デュアルギガビットイーサネットポート、オーディオ入出力、USBポート、HDMI、SATAコネクタ、PCIeなどが含まれています。

## 主な特徴:

- Intel® Celeron® J4105、クアッドコア 1.5-2.5GHz
- デュアルバンド周波数 2.5GHz/5GHz WiFi/ Bluetooth 5.0
- Intel® UHD Graphics 600
- デュアルギガビットイーサネット
- 統合Arduinoコプロセッサ ATSAMD21 ARM® Cortex®-M0+
- Raspberry Pi 40ピン互換
- 2 x M.2 PCIe（BキーおよびMキー）
- Windows 10 Enterprise プリインストール済み
- Groveエコシステムと互換性あり

<p style={{}}><a href="https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## ハードウェア仕様

| コンポーネント       | ODYSSEY - X86J4105                                                                                                                                      |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| プロセッサ        | Intel® Celeron® J4105 (周波数: 1.5 - 2.5GHz)                                                                                                    |
| コプロセッサ      | Microchip® ATSAMD21G18 32ビット ARM® Cortex® M0+                                                                                                        |
| グラフィックス         | Intel® UHD Graphics 600 (周波数: 250 – 750MHz)                                                                                                     |
| メモリ           | LPDDR4 8GB                                                                                                                                              |
| ストレージ          | 64GB eMMC V5.1                                                                                                                                         |
| ワイヤレス         | Wi-Fi 802.11 a/b/g/n/ac @ 2.4/5 GHz HT160 & Bluetooth® 5.0                                                                                          |
| ネットワーキング       | Intel® I211AT PCIe ギガビットLAN                                                                                                                          |
| オーディオ            | マイク + ヘッドフォンコンボコネクタ                                                                                                                 |
| ヘッダー          | SAMD21G18用28ピンヘッダー & Raspberry Pi互換40ピンヘッダー                                                                             |
| USB              | USB 2.0 Type-A x2, USB 3.1 Type-A x1, USB 3.1 Type-C x1                                                                                           |
| ビデオインターフェース | HDMI2.0a: 最大4096x2160 @ 60Hz 24bpp / DP1.2a: 最大4096x2160 @60Hz 24bpp                                                                                                                                                                 |
| 拡張スロット  | M.2(Key B, 2242/2280): SATA III, USB2.0, UIM; M.2 (Key M, 2242/2280): PCIe 2.0 ×4; Micro SDカードソケット; SIMカードソケット; SATA III           |
| RTC              | JST 1.0 CR2032 3V                                                                                                                                      |
| TPM              | 内蔵TPM (2.0)                                                                                                                                  |
| 電源コネクタ           |DCジャック 5.5/2.1mm または Type-C PD                                                                 |
|電源供給 (ベアボード用)| <div >DCジャック入力: 最小:12V @ 300mA - 1.2A, 最大:19V @ 200mA - 0.7A <br />Type-C入力: 最小: 15V @ 0.27A, 最大:15V @ 0.93A </div>
|
| 寸法       | 110x110mm                                                                                                                                               |
| 認証   | FCC, CE                                                                                                                                                 |

!!!注意
        ODYSSEY – X86J4105で3.5インチHDDドライブを使用する場合は、12V@2AのDC電源または15V@2AのType-C電源を使用してください。

!!!注意
        X86をモバイルバッテリーで電源供給する場合、USB PDプロトコルに対応したモバイルバッテリーを使用し、USB C経由で接続する必要があります。また、USB C電源とDC電源の間でシームレスに切り替えることが可能です。

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-08-n.png)

## ピンアウト図

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-Pinout.png)

## ODYSSEY - X86J4105 のクイックスタート

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Connected.png)

### 必要なハードウェア

1. ODYSSEY - X86J4105

2. 電源アダプター（付属）

3. 外部モニター

4. HDMIケーブル

5. キーボードとマウス

### 外部ストレージの接続

ODYSSEY - X86J4105 の 64 GB EMMC ストレージバージョンを使用している場合、このステップをスキップできます。ただし、必要に応じてストレージを追加したい場合は、この手順に従ってください。

ODYSSEY - X86J4105 にストレージを追加する方法は4つありますが、オペレーティングシステムのインストールをサポートするのは3つの方法（M.2 SATA、M.2 PCIE、SATA）のみです。Micro SDカードスロットは外部ストレージとしてのみ使用できます。

- **方法1 - M.2 PCIEコネクタ**

- **方法2 - M.2 SATAコネクタ**

- **方法3 - SATAコネクタ**

- **方法4 - Micro SDカードスロット**

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Storage.png)

### オペレーティングシステムのインストール

ODYSSEY - X86J4105 は、WindowsおよびLinuxのオペレーティングシステムをサポートしています。

- Non-EMMCバージョンの場合、前述の手順に従って外部ストレージを接続し、ブータブルUSBドライブを使用して希望のオペレーティングシステムをインストールします。

- EMMCバージョンの場合、Windows 10 Enterpriseがプリインストールされています。

#### ステップ1

ブータブルUSBドライブをODYSSEY - X86J4105のUSBポートの1つに接続します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/USB.png)

**注意:** ブータブルUSBドライブの作成方法については、「Creating Bootable USB and Installing OS」を参照してください。

#### ステップ2

電源ボタンを押し、キーボードの**F7**キーを押し続けて、ブートマネージャ画面が表示されるまで待ちます。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/F7.jpg)

#### ステップ3

接続されたUSBドライブを1番目のブートドライブとして選択し、Enterキーを押します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/boot.png)

#### ステップ4

インストールの指示に従ってオペレーティングシステムのインストールを完了します。

**注意:** BIOSセットアップにアクセスするには、起動時に**DEL**キーを押し続けてください。

### アンテナの接続

2つのアンテナをボード上の2つのソケットに接続します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/WiFi.png)

注意: 1つのアンテナはWi-FiおよびBluetooth用で、もう1つは強力な5G接続用です。

### 4Gセルラー接続の追加

4Gセルラー接続を使用するには、標準SIMカードをボードのSIMカードスロットに挿入します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Sim.png)

#### PCIE 4Gモジュールの挿入

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/4g.png)

**注意:** SIMカードを使用する場合、このモジュールが必要です。

### ディスプレイへの接続

ディスプレイへの接続方法は2つあります：

#### 方法1 - HDMIポート

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/hdmi.png)

#### 方法2 - USB-Cポート経由のDP

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

### キーボードとマウスの接続

USBポートを使用してキーボードとマウスを接続します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/keyboard.png)

## 電源を入れる

ODYSSEY - X86J4105 の電源を入れる方法は2つあります：

### 方法 1

最も簡単な方法は、パッケージに含まれている12V/2A電源アダプターを使用し、ODYSSEY - X86J4105のDCジャックに接続することです。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/power.png)

### 方法 2

また、USB-Cポートを使用して12V入力でODYSSEY - X86J4105に電源を供給することもできます。さらに、モニターがUSB-PDをサポートしている場合、1本のケーブルだけでODYSSEY - X86J4105に電源を供給し、表示することが可能です！

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

## パフォーマンス統計

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/CPU.png)

### Wi-Fi接続

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Stats.png)

### Bluetooth接続

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Bluetooth.png)

## コンピュータとしての使用

- YouTubeでのブラウジングと動画視聴

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/YouTube%20-%20Google%20Chrome%202019-12-04%2017-05-19.2019-12-05%2009_33_09.gif)

- Google T-Rexゲームをプレイ！

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/T-Rex%20Run!%20-%20Chrome%20Dinosaur%20Game%20-%20Google%20Chrome%202019-12-04%2017-01-42.2019-12-05%2009_38_40.gif)

## WindowsでArduino Core (ATSAMD21G18) を使用する

ODYSSEY - X86J4105はArduino Core (ATSAMD21G18) を搭載しており、ボードにさらなる機能を提供します。これを使用するには、[Arduino IDE](https://www.arduino.cc/en/main/software) をダウンロードし、Windowsバージョンをインストールしてください。

1. `ファイル` -> `環境設定` -> `追加のボードマネージャURL:` をクリックし、以下のリンクをコピーして貼り付けます：  
   `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`

2. `ツール` -> `ボード:` -> `ボードマネージャ...` をクリックすると、ボードマネージャが表示されます。**`Seeeduino Zero`** ボードライブラリを検索してインストールします。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoBoard.png)

3. アップロードする前に正しいポートとボードを選択します。

- `ポート` -> `COMxx(Seeeduno Zero)`

- `ボード` -> `Seeeduino Zero`

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoPort.png)

ODYSSEY - X86J4105で創造性を自由に発揮してください！

## Linux OSでArduino Core (ATSAMD21G18) を使用する

Linux OSをインストールしている場合は、[Arduino IDE](https://www.arduino.cc/en/main/software) のLinuxバージョンをダウンロードし、以下の手順でインストールしてください：

### Arduino IDEのインストール

1. ターミナルを開き、Downloadsディレクトリに移動します。

```sh
cd ~/Downloads
```

2. tarコマンドを使用してダウンロードしたファイルを解凍します。

```sh
tar -xvf arduino -1.8.10-linux64.tar.xz
```

3. ファイルをoptディレクトリに移動します。

```sh
sudo mv arduino-1.8.10 /opt
```

4. Arduino IDEをインストールし、デスクトップショートカットを作成します。

```sh
cd /opt/arduino-1.8.10/ && chmod +x install.sh && ./install.sh
```

5. Arduinoがアップロードできるように権限を許可します。

```sh
cd /opt/arduino-1.8.10 && ./arduino-linux-setup.sh
```

### ボードライブラリのインストール

1. `ファイル` -> `環境設定` -> `追加のボードマネージャURL:` をクリックし、以下のリンクをコピーして貼り付けます：  
   `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`

2. `ツール` -> `ボード:` -> `ボードマネージャ...` をクリックすると、ボードマネージャが表示されます。**`Seeeduino Zero`** ボードライブラリを検索してインストールします。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/LinuxBoard.png)

3. アップロードする前に正しいポートとボードを選択します。

- `ポート` -> `ttyACM0(Seeeduno Zero)`

- `ボード` -> `Seeeduino Zero`

## よくある質問 (FAQs)

### BIOS 設定にアクセスするにはどうすればよいですか？

電源ボタンを押し、DEL キーを押し続けると BIOS 設定画面が表示されます。

### Arduino IDE がオンボードマイクロコントローラーを認識しません

**RST ピン**と**GND ピン**の間にジャンパーワイヤーを接続してください（SAMD21 の 28 ピンの左側にある 4 ピンヘッダー）。これにより AMSAMDG21 をリセットできます。

### Wi-Fi と Bluetooth に接続できません

BIOS 設定を確認し、Wi-Fi と Bluetooth を BIOS で有効にしてください。

### ODYSSEY - X86J4105 が起動しません

同梱されている 12V/2A の電源アダプターを使用していることを確認し、接続を確認してください。

### ODYSSEY - X86J4105 の電源ボタンの異なる状態

他のコンピューターと同じ電源ボタンの状態を持っています：

- `短押し（電源オフ時）` -> `電源オン`
- `短押し（電源オン時）` -> `スリープ`
- `長押し（電源オン時）` -> `強制シャットダウン`

### 内蔵ファンは制御可能ですか？

現在、ファンは BIOS によって制御されており、ユーザーによる制御はできません。ファンの速度は CPU の温度に応じて設定されています。詳細は BIOS 設定画面の `Chipset` -> `FAN Control` を確認してください。

### BIOS をアップグレードする方法

BIOS アップグレードの手順については、OS インストールセクションを確認してください。

### ODYSSEY - X86J4105 を電源接続時に自動的に電源オンに設定する方法

これも BIOS で設定する必要があります。DEL キーを押して BIOS 設定に入り、**Chipset** -> **Restore on AC Power Loss** に移動し、設定を **Last State** に変更してください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" /></div>

### ファンが回転しません

Odyssey のファンは Embedded Controller (EC) によって制御されています。この EC はシステムが起動する前にデバイスを初期化する役割を果たします。BIOS 内の温度は EC によって検出され、温度センサーは Intel CPU の近くに配置されていますが、センサーピンはありません。つまり、温度は CPU の直接的な値ではなく、約 5 度の誤差がある可能性があります。システムで表示される温度値は CPU 内部からのフィードバックであり、BIOS 画面で表示される温度は EC からのフィードバックです。ファンの動作は EC の値に基づいています。

- EC が検出した値（BIOS 画面）とファン速度のテーブルは以下の通りです：

**ファン停止状態**: 停止

**通常ファン状態**: 40°C 未満–停止，45-50°C–50%，50-60°C–60%，60°C 以上–80%

**積極ファン状態**: 40°C 未満–停止，45-50°C–70%，50-60°C–80%，60°C 以上–100%

### ファンのピン配置

DIY や独自のファンに交換するために 5V PWM ファンのピン配置を知りたい方もいるかもしれません。Odyssey には通常の 5V ピンヘッダーよりも小さいヘッダーを持つ 5V PWM ピンがあります。適合させるためにヘッダーを交換する必要があるかもしれません。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/x86-fan.png" /></div>

### 元の Windows を再インストールする方法

ODYSSEY-X86 の eMMC バージョンには Windows 10 がプリインストールされています。他の OS をインストールした後に元の Windows 10 に戻したい場合は、以下を確認してください：

- [**元の Windows 10 イメージ**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Ant-image/SD-JX-CJ41G-M-101-H.zip)

    - このイメージは **自動フラッシュ** をサポートしています。上記のイメージをダウンロードしてファイルを解凍し、**USB ドライブのルートディレクトリ**に配置してください。

    - USB ドライブを ODYSSEY-X86 に接続し、USB ドライブから起動します。これにより、元の Windows 10 イメージが eMMC に自動的にフラッシュされます。

### Odyssey に TPM はありますか？

Odyssey にはプロセッサに統合された FTPM が搭載されています。

### Odyssey ボードにはセキュアブート用の Boot Guard がありますか？

はい、BIOS で「Security Boot」オプションを有効にすることができます。これを有効にすると、認証されていないデバイスからの起動が無効になります。

### Odyssey がシャットダウンした後も GPIO が動作しているのはなぜですか？

これを設定するには、[最新の BIOS](https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Updating-Firmware/) に更新する必要があります。最新の BIOS では、GPIO と ODYSSEY の両方をオフにするために、ここで有効を無効に変更できます。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png)

## リソース

- **[ZIP]** [ODYSSEY-X86J4105 3Dモデル](http://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-3D-Model.zip)

- **[PDF]** [ODYSSEY-X86J4105 2Dモデル](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.pdf)

- **[DXF]** [ODYSSEY-X86J4105 2Dモデル](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.dxf)

- **[PDF]** [Atmel-SAMD21データシート](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/Atmel-SAMD21-datasheet.pdf)

- **[PDF]** [ODYSSEY-X86 ユーザーマニュアル](https://files.seeedstudio.com/products/102110399/Documents/ODYSSEY-X86%20User-Manual-v1.1.pdf)

- **[ZIP]** [ODYSSEY-X86 Windows 10 ドライバーパッケージ](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-WIndows-Drivers.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>