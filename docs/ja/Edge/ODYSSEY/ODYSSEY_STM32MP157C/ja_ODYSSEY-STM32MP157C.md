---
description: ODYSSEY – STM32MP157C
title: ODYSSEY – STM32MP157C
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-STM32MP157C
last_update:
  date: 05/15/2025
  author: w0x7ce

---


# ODYSSEY – STM32MP157C

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19.png)

ODYSSEY – STM32MP157C は、650MHzで動作するデュアルコア Arm-Cortex-A7 プロセッサ STM32MP157C をベースとしたシングルボードコンピュータです。このプロセッサには Arm Cortex-M4 コプロセッサも統合されており、リアルタイムタスクに適しています。ODYSSEY – STM32MP157C は、SoM（System on Module）とキャリアボードの形で構成されています。SoM には MPU、PMIC、RAM が含まれ、キャリアボードは Raspberry Pi のフォームファクタに準拠しています。キャリアボードには、ギガビットイーサネット、WiFi/BLE、DC 電源、USB ホスト、USB-C、MIPI-DSI、カメラ用 DVP、オーディオなど、必要な周辺機器がすべて含まれています。このボードを使用することで、顧客は SoM を迅速に評価し、自分のキャリアボードに簡単かつ迅速に展開することができます。

[![今すぐ購入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)

## 特徴

- Cortex-M4 を統合したデュアルコア Arm-Cortex-A7 プロセッサ
- SoM（System on Module）には MPU、PMIC、RAM を含む
- Raspberry Pi 40ピン互換キャリアボード
- コンパクトで高性能
- オープンソースハードウェア/SDK/API/BSP/OS

## 仕様

|項目|値|
|----|------|
|周辺インターフェース| 2 x USB ホスト<br />1 x ギガビットイーサネットインターフェース<br />1 x 3.5mm オーディオインターフェース<br />1 x MIPI DSI ディスプレイインターフェース<br />1 x DVP カメラインターフェース<br />2 x Grove (GPIO &amp; I2C)<br />1 x SD カードインターフェース（ボード背面）|
|WiFi/Bluetooth|WiFi 802.11 b/g/n 2.4GHz<br />Bluetooth 4.1|
|オンボード LED|1 x リセット LED<br />3 x ユーザー定義 LED<br />1 x 電源 LED|
|電源|1 x DC インターフェース（12V/2A 電源入力推奨）<br />1 x USB Type-C|
|ボタン|1 x リセットボタン<br />1 x ユーザーボタン<br />1 x ダイヤルコードキー|
|寸法|56mm x 85mm|
|動作温度| 0 ~ 75 ℃ |

## 応用例

- 産業用途（CAN-イーサネットゲートウェイなど）
- 家電製品（冷蔵庫、電子レンジなど）
- 医療機器（データロガーなど）
- 高性能ウェアラブル（VR デバイスなど）
- スマートホームデバイス

## ハードウェア概要

<iframe src="https://3dwarehouse.sketchup.com/embed/6eecf961-5dd1-4baf-94e4-72f130c5542d" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} width={580} height={326} allowFullScreen />

ODYSSEY – STM32MP157C は、キャリアボードと Seeed SoM - STM32MP157C の 2 部構成です。

キャリアボードのハードウェア詳細は以下の通りです：

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/front.png)

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/back.png)

- **1. キャリアボード:** Seeed SoM-STM32MP157C を取り付けるエリア。コアボードを取り外す場合は、コアボードをゆっくりと上に傾けてから取り外してください。手で直接取り外さないでください。

- **2. DC 電源入力ポート:** 12V~24V/2A（12V/2A 電源入力推奨）（5.5x2.1mm センタープラスバレル）。

- **3. ETH インターフェース:** ネットワークケーブルインターフェースで、ギガビットレベルのネットワークに接続可能。

- **4. USB ホスト:** 2 つの USB ホストポート。

- **5. USB デバイス:** USB 2.0 Type-C。Type-C をボードの電源入力として使用する場合は、5V/3A 電源アダプタを使用してください。

- **6. デジタル Grove インターフェース:** Grove インターフェースをデジタルピンに接続。

- **7. IIC Grove インターフェース:** Grove インターフェースを IIC ピンに接続。

- **8. アメリカ標準 3.5mm:** オーディオインターフェース。

- **9. MIPI DSI インターフェース:** MIPI DSI インターフェースを持つディスプレイに接続（FPC 20Pin 1.0mm）。

- **10. 40 ピン GPIO インターフェース:** Raspberry Pi の 40 ピンと互換性あり。

- **11. AP6236:** 2.4G WiFi & BT 4.2 コントロールチップ。

- **12. スライドスイッチ:** SD カードまたは eMMC を選択して起動可能。

- **13. デバッグ UART:** システムデフォルトのデバッグシリアルポート。このシリアルポートにアクセスしてシステムに入ることができます。詳細は後述します。

- **14. JST 1.0mm:** 3VRTC バッテリーインターフェース。

- **15. RST キー:** システムリセットキー。

- **16. PWR ボタン:** 約 8 秒間長押しでシャットダウン、短押しで起動。

- **17. ユーザーボタン:** ユーザーがプログラム可能なボタン。

- **18. PWR LED:** 開発ボードの電源 LED。

- **19. ユーザー LED:** ユーザーがプログラム可能な LED。

- **20. ACA-5036-A2-CC-S:** オンボード 2.4G セラミックアンテナ。

- **21. IPEX 第 1 世代:** 外部 2.4G アンテナ用ソケット（外部アンテナを使用する場合、R49、R51 の 0Ω はんだを取り外す必要があります）。

- **22. SD カードスロット:** システムを挿入した micro-SD カードのエリア。

- **23. DVP カメラインターフェース:** DVP インターフェースを持つカメラに接続（FPC 20Pin 1.0mm）。

- **24. KSZ9031:** 1000M ネットワークケーブルドライブネットワークカード。

- **25. STMPS2252MTR:** 電源スイッチチップ。

- **26. MP9943:** 降圧 DCDC 電源チップ。

- **27. WM8960:** オーディオコーデックチップ。

- **28. MP2161:** 降圧 DCDC 電源チップ。

### ピン機能

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/GPIO.png)

ODYSSEY - STM32MP157C の 40 ピンは、Raspberry Pi の 40 ピンと完全互換で、GPIO、IIC、UART、SPI、IIS、PWM ピンを含みます。

## ソフトウェアの紹介

### 準備作業

**必要な材料**

- ODYSSEY – STM32MP157C
- Wi-Fiネットワーク
- 4GB以上のメモリを持つSDカードとSDカードリーダー
- PCまたはMac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（オプション）
- 12V/2A DCインターフェースアダプター（オプション）
- USB Type-Cケーブル

<div className="admonition warning">
  <p className="admonition-title">注意</p>
  USBケーブルを慎重に接続してください。そうしないとインターフェースが損傷する可能性があります。また、内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、<a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><b>こちら</b></a>をクリックして購入できます。
</div>

**ミラーインストール**

Raspberry Piと同様に、ODYSSEY – STM32MP157Cを起動するには、SDカードからイメージをインストールする必要があります。ODYSSEY – STM32MP157Cを起動する方法は2つあります。SDカードから起動する方法とeMMCから起動する方法です。

**A. SDカードから起動**

- **ステップ1.** ダウンロードする[ファームウェア](https://files.seeedstudio.com/linux/ODYSSEY%E2%80%93STM32MP157C/stm32mp1-debian-buster-console-armhf-latest-2gb.img.xz)を選択します。

- **ステップ2.** SDカードリーダーを使用してSDカードをPCまたはMacに接続します。4GB以上のメモリを持つSDカードが必要です。

- **ステップ3.** <font face>こちらをクリックして<a href="https://etcher.io/">Etcher</a>をダウンロードし、Etcherを使用して```*.img.xz```ファイルを直接SDカードに書き込みます。または、```*.img.xz```ファイルを```*.img```ファイルに抽出し、別のミラー書き込みツールを使用してSDカードに書き込むこともできます。<br /><br />新しくダウンロードしたイメージファイルを追加するにはプラスアイコンをクリックし、ソフトウェアが挿入したSDカードを自動的に選択します。その後、Flash!をクリックして書き込みを開始します。完了まで約10分かかります。</font>

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/stm32_flash_sd.png)

- **ステップ4.** イメージをSDカードに書き込んだ後、SDカードをODYSSEY – STM32MP157Cに挿入します。USB Type-Cポートを使用してキャリアボードに電力を供給します。書き込み中はSDカードを取り出さないでください。ODYSSEY – STM32MP157CはSDカードから起動し、SOM上のPWRとUSER LEDが点灯しているのが確認できます。次のセクション「シリアルコンソール」に進みます。

<div class="admonition note">
<p class="admonition-title">注意</p>
USER LEDが点滅しない場合、起動が失敗したことを意味します。ブートスイッチがSD_CARDに設定されているか確認してください。
</div>

- **ステップ5.** イメージをSDカードに書き込んだ後、SDカードをODYSSEY – STM32MP157Cに挿入します。USB Type-Cポートを使用してキャリアボードに電力を供給します。書き込み中はSDカードを取り出さないでください。ODYSSEY – STM32MP157CはSDカードから起動し、SOM上のPWRとUSER LEDが点灯しているのが確認できます。次のセクション「シリアルコンソール」に進みます。

**B. eMMCから起動**

<div class="admonition note">
<p class="admonition-title">注意</p>
eMMCから起動する場合、まず次のセクション「シリアルコンソール」にアクセスする必要があります。
</div>

- **ステップ1.** ODYSSEY – STM32MP157Cを初めて起動する場合、プロセスは**A. SDカードから起動**と同じです。

- **ステップ2.** /boot/uEnv.txtを編集してeMMCブートを開始し、その後再起動します。

```bash
sudo sh -c "echo cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3-stm32mp1.sh >> /boot/uEnv.txt"
sudo reboot
```

- **ステップ3.** USER LEDが連続して点灯するのを待ちます。USER LEDが連続して点灯している場合、eMMCブートが成功したことを示します。

- **ステップ4.** 電源を切り、SDカードを取り外します。

- **ステップ5.** スライドスイッチをEMMCに設定し、再起動します。

**シリアルコンソール**

ODYSSEY – STM32MP157Cが起動したら、コンソールを通じてLinuxシステムにアクセスし、ネットワークの設定などを行うことができます。Linuxアクセス用にシリアルポートアクセス方法が提供されています：

- UARTポート - 低レベルの問題をデバッグするために使用します。（推奨）

**UARTポートを介した接続**

このセクションでは、USB to TTLアダプターを使用してODYSSEY – STM32MP157CのUARTポート（ODYSSEY – STM32MP157Cの右上に位置）に接続し、コンピューターとODYSSEY – STM32MP157C間の接続を確立する方法を説明します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/uart_connection.png)

- **ステップ1.** USB to TTLアダプターを使用してUARTポートをPC/Macに接続します。USB to TTLアダプターを持っていない場合は、[こちら](https://www.seeedstudio.com/catalogsearch/result/?q=UART)をクリックして購入できます。（RX->TX、TX->RX）

- **ステップ2.** 以下のシリアルデバッグツールを使用します。ボーレートは115200です：
  - Windows : [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)を使用し、```Serial```プロトコルを選択します。ODYSSEY – STM32MP157Cに対応するCOMポート、```115200```ボーレート、8ビット、パリティなし、ストップビット1、フロー制御なしを入力します。
  - Linux : USB to TTLアダプターに応じて、```screen /dev/ttyACM0(,1,など) 115200```または```screen /dev/ttyUSB0(,1,など) 115200```を使用します。
  - Mac : USB to TTLアダプターに応じて、```screen /dev/cu.usbserial1412(,1422,など) 115200```または```screen /dev/cu.usbmodem1412(,1422,など) 115200```を使用します。

- **ステップ3.** デフォルトのユーザー名は```debian```、パスワードは```temppwd```です。

- **ステップ4.** USB to TTLアダプターを持っていない場合は、Arduinoを使用することもできます。Arduinoを使用する場合、ジャンパーの片方をArduinoのRESETピンに接続し、もう片方をArduinoのGNDピンに接続します。これにより、ArduinoのATMEGA MCUをバイパスし、ArduinoをUSB to TTLアダプターとして使用できます。[こちら](https://www.youtube.com/watch?v=qqSLwK1DP8Q)のビデオチュートリアルを参照してください。次に、ArduinoのGNDピンをODYSSEY – STM32MP157CのUARTポートのGNDピンに接続します。ArduinoのRxピンをODYSSEY – STM32MP157CのRxピンに接続します。ArduinoのTxピンをODYSSEY – STM32MP157CのUARTポートのTxピンに接続します。最後に、ArduinoをArduinoのUSBケーブルを使用してPC/Macに接続します。次のコマンドを入力して、PC/MacがArduinoを認識しているか確認してください：

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

以下のようなフィードバックが得られるはずです：

```
/dev/cu.usbmodem14XX （XXは使用したUSBポートに応じて変わります）（Macの場合）
/dev/ttyACMX （Xは使用したUSBポートに応じて変わります）（Linuxの場合）
```

その後、上記の手順に従ってシリアル接続を介してODYSSEY – STM32MP157Cに接続します。通常、初回起動時にこれを行い、その後ODYSSEY – STM32MP157CをWi-Fi接続およびSSH接続の設定に進めます。

**ネットワーク設定**

**A. イーサネット接続**

イーサネットケーブルを使用してネットワークに接続できます。イーサネットケーブルをインターネットに接続してください。
次のセクション「基本ツールのインストール」に進んでください。

**B. Wi-Fi設定**

<div className="admonition note">
  <p className="admonition-title">注意</p>
  Wi-Fiを使用したい場合は、まず次のセクション「基本ツールのインストール」にアクセスする必要があります。
</div>

- **ステップ1.** 現在の環境でLinuxカーネルのバージョンを確認し、そのバージョンのヘッダーファイルをインストールします。

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **ステップ2.** GitHubの`seeed-linux-dtverlays`からstm32p1のドライバを作成してインストールします。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **ステップ3.** `/boot/uEnv.txt`にdtboパッケージを追加し、再起動後に有効にします。

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **ステップ4.** Wi-Fiに接続します。

ネットワーク管理ツール`connmanctl`を使用してODYSSEY – STM32MP157Cのネットワークを構成します。このツールはODYSSEY - STM32MP157Cイメージにインストールされています。以下の手順に従って簡単に構成を完了できます。

```
robot@ev3dev:~$ sudo connmanctl
Error getting VPN connections: The name net.connman.vpn was not provided by any
connmanctl> enable wifi
Enabled wifi
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO Wired                ethernet_b827ebbde13c_cable
                         wifi_e8de27077de3_hidden_managed_none
    AH04044914           wifi_e8de27077de3_41483034303434393134_managed_psk
    Frissie              wifi_e8de27077de3_46726973736965_managed_psk
    ruijgt gast          wifi_e8de27077de3_7275696a67742067617374_managed_psk
    schuur               wifi_e8de27077de3_736368757572_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_e8de27077de3_41      # この時点でTABキーを使用して名前を自動補完できます
connmanctl> connect wifi_e8de27077de3_41483034303434393134_managed_psk
Agent RequestInput wifi_e8de27077de3_41483034303434393134_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
Passphrase? *************
Connected wifi_e8de27077de3_41483034303434393134_managed_psk
connmanctl> quit
```

次のコマンドを使用してODYSSEY – STM32MP157CのIPアドレスを確認します。

```
ifconfig
```

**基本ツールのインストール**

***1.SSH***

SSH（Secure Shell）は、IETFのネットワークワーキンググループによって策定されたセキュリティプロトコルです。SSHはアプリケーション層に基づくセキュリティプロトコルであり、リモートログインセッションやその他のネットワークサービスにセキュリティを提供する信頼性の高いプロトコルです。提供されるイメージにはSSHプロトコルが含まれていないため、シリアルポートを介して構成し、SSHプロトコルを使用してデバイスとコンピュータ間の通信を実現する必要があります。以下のコマンドを入力してODYSSEY - STM32MP157CにSSHサービスをインストールします。

```bash
sudo apt install ssh -y
```

次に、SSHを使用してODYSSEY – STM32MP157Cにアクセスします。WindowsユーザーはサードパーティのSSHクライアントを使用できます。Linux/Macユーザーは、SSHクライアントが組み込まれています。

- Windowsユーザー: PUTTYを使用し、SSHプロトコルを選択して正しいIPアドレスを入力し、「Open」をクリックします。ユーザー名は`debian`、パスワードは`temppwd`です。

- Linux/Macユーザー:

```
ssh debian@IP
// パスワード: temppwd
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
SSHを使用中にパフォーマンスが低下した場合は、よりアクセスしやすいWi-Fiネットワークに切り替えてください。
</div>

***2.GIT***

Gitは、小規模から非常に大規模なプロジェクトまでを高速かつ効率的に処理するために設計された、無料でオープンソースの分散型バージョン管理システムです。

```bash
sudo apt install git -y
```

***3.MAKE***

```bash
sudo apt install make device-tree-compiler gcc -y
```

***4.WGET***

```bash
sudo apt install wget -y
```

**Bluetoothの設定**

- **ステップ1.** 現在の環境でLinuxカーネルのバージョンを確認し、そのバージョンのヘッダーファイルをインストールします。

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **ステップ2.** GitHubの`seeed-linux-dtverlays`からstm32p1のドライバを作成してインストールします。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **ステップ3.** `/boot/uEnv.txt`にdtboパッケージを追加し、再起動後に有効にします。

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

**Bluetoothを有効化する**

次のコマンドを使用してBluetoothを有効化します。

```
sudo apt -y install bluetooth bluez bluez-tools rfkill
systemctl is-enabled bluetooth.service
```

**Bluetoothに接続する**

- **ステップ1.** `bluetoothctl`を使用してBluetoothをスキャンします。

`bluetoothctl`は、他のBluetoothデバイスに接続するためのBluetooth制御ツールです。

```
debian@npi:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#
```

- **ステップ 2.** コマンド `pair + デバイスID` を使用して、Bluetoothデバイスを ODYSSEY – STM32MP157C とペアリングします。

- **ステップ 3.** `Pairing successful` というメッセージが表示されたら、`connect + デバイスID` を入力します。

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

`Connection successful` が表示されたら、設定完了です！

## CANBUS通信

以下は、ODYSSEY -- STM32MP157C をベースにした [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html) を使用した CANBUS 通信のプロセスです。まず [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) を使用して環境温度と湿度を収集し、その後 Seeeduino V4.2 上の [CAN - BUS shields V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html) と Raspberry Pi 用の ODYSSEY – STM32MP157C チャネル 2 CAN BUS FD シールドを介して通信を行います。

### 準備作業

**必要な材料**

- ODYSSEY - STM32MP157C
- Wi-Fi ネットワーク
- 4GB（またはそれ以上）の SD カードと SD カードリーダー
- PC または Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（オプション）
- 12V/2ADC インターフェースアダプター（オプション）
- USB Type-C ケーブル
- ダブルオスのデュポン線 2 本
- [CAN-BUS Shield V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html)
- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)
- [Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2.html)
- [Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/catalogsearch/result/?q=sht35)

**ハードウェア接続**

- **ステップ 1.** [インストールガイド](https://wiki.seeedstudio.com/ja/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) に従って、2 Channel CAN BUS FD Shield for Raspberry Pi を ODYSSEY - STM32MP157C に取り付けます。
- **ステップ 2.** CAN BUS Shield V2 を Seeeduino V4.2 に取り付けます。
- **ステップ 3.** ジャンパーワイヤーを使用して、Raspberry Pi 用の 2 Channel CAN BUS FD Shield を CAN-BUS Shield V2 に接続します。

|Raspberry Pi用2チャンネル CAN BUS FD シールド|CAN-BUS シールド V2|
|:----:|:------:|
|CAN_0_L|CANL|
|CAN_0_H|CANH|

- **ステップ 4.** ODYSSEY STM32MP157C と Seeeduino V4.2 に電源を供給します。

**依存関係のインストール**

- **ステップ 1.** `python` の環境をインストールします。

```bash
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y
sudo pip3 install python-can pyqtgraph
```

- **ステップ 2.** `git` をインストールします。

```bash
sudo apt install git -y
```

- **ステップ 3.** `make` 関連の環境をインストールします。

```bash
sudo apt install make device-tree-compiler gcc -y
```

### ソフトウェアのインストール

**CAN-HAT と LCD ドライバのインストール**

- **ステップ 1.** 現在の環境で Linux カーネルのバージョンを確認し、カーネルバージョンのヘッダーファイルをインストールします。

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **ステップ 2.** GitHub の `seeed-linux-dtverlays` から stm32p1 ドライバを作成してインストールします。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **ステップ 3.** `/boot/uEnv.txt` に dtbo パッケージを追加し、再起動後に有効にします。

```bash
sudo sh -c "echo uboot_overlay_addr7=/lib/firmware/stm32mp1-seeed-lcd-01.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr8=/lib/firmware/stm32mp1-MCP2517FD-can0.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **ステップ 4.** `dmesg` を使用してドライバが正常にインストールされたか確認します。成功した場合、以下の情報が表示されます。

```bash
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
debian@npi:~$ dmesg | grep spi
[    1.057609] spi_stm32 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

debian@npi:~$ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

**CAN-HAT と LCD の設定**

- **ステップ 1.** `can-bus` を設定します。

```bash
sudo ip link set can0 up type can bitrate 500000 dbitrate 8000000 restart-ms 1000 berr-reporting on fd on
sudo ifconfig can0 txqueuelen 65536

debian@npi:~$ ip -details link show can0
3: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 minmtu 0 maxmtu 0
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0
          bitrate 500000 sample-point 0.875
          tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
          mcp25xxfd: tseg1 2..256 tseg2 1..128 sjw 1..128 brp 1..256 brp-inc 1
          mcp25xxfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp-inc 1
          clock 40000000numtxqueues 1 numrxqueues 1 gso_max_size 65536 /gso_max_segs 65535
```

- **ステップ 2.** `lcd` 環境を設定する

```bash
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb0
```

### デモを実行する

以下のコードを 'ODYSSEY - STM32MP157C' 上で実行します。

```bash
cd ~
git clone https://github.com/SeeedDocument/ODYSSEY-STM32MP157C.git
cd ~/ODYSSEY-STM32MP157C/examples
python3 QtViewerForStm32p1.py
```

`Seeeduino V4.2` 上で [CanBus_SendForArduino.ino](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/examples/CanBus_SendForArduino.ino) を実行します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/can_bus_demo.png)

## GPIO を操作する

このセクションでは、**grove.py** を使用して ODYSSEY STM32MP157C 上の GPIO と Grove ソケットを制御する方法を紹介します。このボードでは、Grove ソケットに接続する方法が2つあります。一つはデジタル Grove インターフェースと IIC Grove インターフェースを使用する方法、もう一つは ODYSSEY - STM32MP157C の 40 ピンを使用する方法です。ODYSSEY - STM32MP157C の 40 ピンのピン定義については [Pin Function](#Pin Function) を参照してください。この ODYSSEY - STM32MP157C の 40 ピンを使用するのは便利です。それでは始めましょう。

### GPIO モードに設定する

- **ステップ 1.** 現在の環境で Linux カーネルのバージョンを確認し、カーネルバージョンのヘッダーファイルをインストールします。

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **ステップ 2.** GitHub の `seeed-linux-dtverlays` から stm32p1 のドライバを作成してインストールします。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **ステップ 3.** `/boot/uEnv.txt` に dtbo パッケージを追加し、再起動後に有効にします。

```bash
sudo sh -c "echo uboot_overlay_addr1=/lib/firmware/stm32mp1-seeed-spi5.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr2=/lib/firmware/stm32mp1-seeed-usart2.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr3=/lib/firmware/stm32mp1-seeed-i2c4.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **ステップ 4.** `python3` の環境をインストールします。

```bash
sudo apt install python3 python3-pip -y
```

### Grove.py を使用した Basehat 上のデジタル出力

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| ODYSSEY – STM32MP157C |  Grove - Buzzer | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **ステップ 2.** Grove Base Hat を ODYSSEY - STM32MP157C に接続します。

- **ステップ 3.** Grove Buzzer を Base Hat の D5 ポートに接続します。

- **ステップ 4.** ODYSSEY - STM32MP157C を USB ケーブルで PC に接続します。

#### ソフトウェア

- **ステップ 1.** Grove.py をインストールします。

```bash
sudo pip3 install Seeed-grove.py
```

- **ステップ 2.** grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```bash
cd grove.py/grove
sudo python3 grove_gpio.py 5
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
すべてが正常に動作していれば、ブザーから音が聞こえます。
</div>

### Grove.py を使用した Basehat 上のデジタル入力

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| ODYSSEY – STM32MP157C |  Grove - Button | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Button-P.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **ステップ 2.** Grove Base Hat を ODYSSEY - STM32MP157C に接続します。

- **ステップ 3.** Grove Button を Base Hat の D5 ポートに接続します。

- **ステップ 4.** ODYSSEY - STM32MP157C を USB ケーブルで PC に接続します。

#### ソフトウェア

- **ステップ 1.** Grove.py をインストールします。

```bash
sudo pip3 install Seeed-grove.py
```

- **ステップ 2.** grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```bash
cd grove.py/grove
sudo python3 grove_button.py 5
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
ボタンが押されると、ターミナルに情報が表示されます。
</div>

### Grove.py を使用した Basehat 上の ADC

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| ODYSSEY – STM32MP157C |  Grove - Temperature Sensor | Grove Base Hat for RasPi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **ステップ 2.** Grove Base Hat を ODYSSEY - STM32MP157C に接続します。

- **ステップ 3.** 温度センサーを Base Hat の A0 ポートに接続します。

- **ステップ 4.** ODYSSEY - STM32MP157C を USB ケーブルで PC に接続します。

#### ソフトウェア

- **ステップ 1**. Grove.py をインストールします

```bash
sudo pip3 install Seeed-grove.py
```

- **ステップ 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```bash
cd grove.py/grove
sudo python3 grove_temperature_sensor.py 0
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
すべてが正常に動作していれば、ターミナルで温度データを確認できます。
</div>

### Grove.py を使用した Basehat 上の UART

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| ODYSSEY – STM32MP157C | Grove Base Hat for RasPi |
|--------------|----------------|
|![画像をここに入力](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![画像](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|

- **ステップ 2**. Grove Base Hat を ODYSSEY - STM32MP157C に接続します。

- **ステップ 3**. ジャンパーを使用して Basehat の RX を TX に接続します。

- **ステップ 4**. USB ケーブルを使用して ODYSSEY - STM32MP157C を PC に接続します。

#### ソフトウェア

- **ステップ 1**. Grove.py をインストールします

```bash
sudo pip3 install Seeed-grove.py
```

- **ステップ 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```bash
cd grove.py/grove
python uart.py
```

TX を RX に接続すると、ターミナルで `hello seeder` を確認できます。また、TX と RX の位置は [Pin Function](https://wiki.seeedstudio.com/ja/ODYSSEY-STM32MP157C/#pin-function) で確認できます。

### ODYSSEY-STM32MP157C 上の I2S

このセクションでは、Linux I2S プログラミングの制御原理を説明します。ここでは、I2S と ReSpeaker 2-Mics Pi HAT を使用してその使い方を説明します。

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| ODYSSEY – STM32MP157C | ReSpeaker 2-Mics Pi HAT |
|--------------|----------------|
|![画像をここに入力](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![画像](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/res-thumbnail.png)|
|[今すぐ購入](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[今すぐ購入](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|

- **ステップ 2.** [インストールハードウェアガイド](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/#getting-started) に従って、ReSpeaker 2-Mics Pi HAT を ODYSSEY – STM32MP157C に挿入します。

#### ソフトウェア

- **ステップ 1.** `apt` を使用して alsa-utils をインストールします

```bash
sudo apt install alsa-utils -y
```

- **ステップ 2.** dtbs ファイルの場所に移動し、stm32mp1 dtb ファイルをダウンロードします。

```sh
debian@npi:~$ cd /boot/dtbs/4.19.9-stm32-r1/
debian@npi:/boot/dtbs/4.19.9-stm32-r1$ sudo wget https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb
```

**注意:** stm32mp1 `.dtb` ファイルは [**こちら**](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb) からもダウンロードできます。

- **ステップ 3.** `uEnv.txt` を以下のように設定します：

```sh
debian@npi:~$ sudo vi /boot/uEnv.txt
```

dtb 設定を以下に変更します：

```
dtb=stm32mp1-seeed-npi-full-rpi-exp.dtb
```

- **ステップ 4.** 再起動します

```
sudo reboot
```

- **ステップ 5.** `seeed-linux-dtverlays` フォルダに移動し、以下のように soundstate を設定します：

```sh
debian@npi:~$ cd ~/seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound-stm32mp1 /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **ステップ 6.** `aplay` と `arecord` を使用してドライバーが正常にインストールされているか確認します。成功している場合、以下の情報が表示されます。

```sh
debian@npi:~/seeed-linux-dtverlays$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 0: 4400b004.audio-controller-wm8960-hifi0 wm8960-hifi0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~/seeed-linux-dtverlays$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 1: 4400b024.audio-controller-wm8960-hifi1 wm8960-hifi1-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **ステップ 7.** これで ReSpeaker 2-Mics Pi Hat を使い始めることができます！簡単な録音と再生テストを行うには、以下のコマンドを実行します：

1. `test.wav` に音声を録音するには：

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. `test.wav` 音声を再生するには。ヘッドフォンまたはスピーカーを接続して音声を出力してください。

```sh
aplay -Dhw:0 -r 48000 test.wav
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
音声が出力されない場合は、再度再起動してみてください。
</div>

ReSpeaker 2-Mics Pi HAT の詳細については [wiki](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/) を参照してください。

## リソース

-----

- **[PDF]** [STM32MP157C データシート](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/stm32mp157c.pdf)
- **[SCH]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[SCH]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[3Dファイル]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/st.skp)
- **[OrCAD]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB.zip)
- **[OrCAD]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB%20.zip)
- **[PDF]** [ODYSSEY-STM32MP157C 2Dファイル](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32-2d-file.pdf)
- **[PDF]** [STM32 リファレンスガイド](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32+Reference+Guide+V1.0.pdf)
- **[URL]** [高度なシステム開発](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C)

# ODYSSEY-STM32MP157C 高度なシステム開発

- [在庫状況](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Availability)
- [ベンダー文書](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-VendorDocumentation)
- [基本要件](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-BasicRequirements)
- [ARM クロスコンパイラ: GCC](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-ARMCrossCompiler:GCC)
- [ブートローダー: U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Bootloader:U-Boot)
- [Linux カーネル](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-LinuxKernel)
- [ルートファイルシステム](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Ubuntu20.04LTS)
- [microSDカードのセットアップ](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-SetupmicroSDcard)
- [カーネルとルートファイルシステムのインストール](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-InstallKernelandRootFileSystem)
- [ルートファイルシステムのコピー](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyRootFileSystem)
- [/boot/uEnv.txtでのuname_rの設定](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Setuname_rin/boot/uEnv.txt)
- [デバイスツリーバイナリ](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-DeviceTreeBinary)
- [カーネルイメージのコピー](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelImage)
- [カーネルデバイスツリーバイナリのコピー](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelDeviceTreeBinaries)
- [カーネルモジュールのコピー](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelModules)
- [ファイルシステムテーブル (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-FileSystemsTable(/etc/fstab))
- [microSD/SDカードの取り外し](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RemovemicroSD/SDcard)
- [コメント](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Comments)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
