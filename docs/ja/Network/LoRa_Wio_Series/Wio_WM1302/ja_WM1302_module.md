---
description: LoRaWAN®ゲートウェイモジュールWM1302の使い方を紹介します。
title: LoRaWAN®ゲートウェイモジュールWM1302
keywords:
  - wio 
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /ja/WM1302_module
last_update:
  date: 05/15/2025
  author: Leo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN®はLoRa Alliance®のライセンスの下で使用される商標です。
LoRa®マークはSemtech Corporationまたはその子会社の商標です。

:::note
最近、Wio-E5モジュールを基にしたWio-E5シリーズをリリースしました。

[こちら](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Wio-E5モジュール](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/)、[Groveモジュール](https://wiki.seeedstudio.com/ja/Grove_LoRa_E5_New_Version/)、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)、[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)など、LoRa-E5ファミリーの新しいメンバーをご覧ください。

STM32WLシリーズ(SDK)向けのSTM32Cube MCUパッケージを使用してLoRaWAN®エンドノードを作成し、LoRaWAN®ネットワークに参加してデータを送信する方法については、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)および[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)のWikiページをご覧ください。
:::

WM1302モジュールは、mini-PCIeフォームファクターを備えた新世代のLoRaWAN®ゲートウェイモジュールです。Semtech® SX1302ベースバンドLoRaWAN®チップを基にしており、ゲートウェイ製品の長距離無線通信の潜在能力をさらに引き出します。このモジュールは、以前のSX1301およびSX1308 LoRa®チップと比較して、感度が高く、消費電力が少なく、動作温度が低いという特徴があります。

WM1302 LoRaWAN®ゲートウェイモジュールは、SPIおよびUSBバージョンがあり、US915およびEU868周波数帯域に対応しています。これにより、EU868、US915、AS923、AS920、AU915、KR920、IN865など、幅広いLoRaWAN®周波数プランオプションを選択できます。

WM1302モジュールはCE、FCC、Telec認証を取得しており、LoRaWAN®ゲートウェイデバイスの開発および認証プロセスを簡素化します。

WM1302はM2MおよびIoTアプリケーション向けに設計されており、LPWANゲートウェイ対応のシナリオに広く適用できます。LoRaWAN®ゲートウェイやホットスポットなどのLoRa®ゲートウェイデバイスを開発する際の技術的な困難や時間を大幅に削減するための最適な選択肢となるでしょう。

## 特徴

- **Semtech® SX1302ベースバンドLoRa®チップ搭載**、非常に低消費電力で高性能。
- **標準的な52ピンゴールデンフィンガーを備えたmini-PCIeフォームファクター**、さまざまなゲートウェイデバイスへの統合が容易。
- **超低動作温度**、追加の放熱が不要で、LoRaWAN®ゲートウェイのサイズを縮小。
- **高感度** -139 dBm @SF12（SX1250 TX/RXフロントエンド搭載）、TX出力最大26 dBm @3.3V。
- **CE、FCC、TELEC認証取得済み**。最終製品の認証プロセスを簡素化。

## ハードウェア概要

### 図解

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

## 仕様

<table class="tg">
<thead>
<tr><th class="tg-4onr">地域</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">周波数</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">感度</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">送信出力</td>
    <td class="tg-f42p">26 dBm (3.3V電源使用時)</td>
    <td class="tg-f42p">25 dBm (3.3V電源使用時)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LED</td>
    <td class="tg-f42p" colspan="2">電源: 緑 設定: 赤 送信: 緑 受信: 青</td>
  </tr>
  <tr>
    <td class="tg-4onr">フォームファクタ</td>
    <td class="tg-f42p" colspan="2">Mini PCIe, 52ピンゴールデンフィンガー</td>
  </tr>
  <tr>
    <td class="tg-4onr">消費電力 (SPIバージョン)</td>
    <td class="tg-f42p" colspan="2">待機: 7.5 mA<br />最大送信出力: 415 mA<br />受信: 40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">消費電力 (USBバージョン)</td>
    <td class="tg-f42p" colspan="2">待機: 20 mA<br />最大送信出力: 425 mA<br />受信: 53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT (Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">対応</td>
  </tr>
  <tr>
    <td class="tg-4onr">アンテナコネクタ</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">動作温度</td>
    <td class="tg-f42p" colspan="2">-40°C ～ 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">寸法</td>
    <td class="tg-f42p" colspan="2">30 mm (幅) × 50.95 mm (長さ)</td>
  </tr>
  <tr>
    <td class="tg-4onr">認証</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## アプリケーション

- LPWANゲートウェイデバイスの開発

- 長距離無線通信アプリケーションの開発

- LoRa®およびLoRaWAN®アプリケーションの学習と研究

## 寸法

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## はじめに

### SPIバージョンとUSBバージョンの違い

WM1302 LoRaWAN® ゲートウェイモジュールのSPIバージョンでは、Semtech SX1302およびSX126xチップが同じSPIバスを介して異なるチップセレクト(CS)ピンでRaspberry Piに接続されます。

WM1302 LoRaWAN® ゲートウェイモジュールのUSBバージョンでは、Semtech SX1302およびSX126xチップがSTM32L4 MCUに接続され、この工場出荷時にプログラムされたMCUがUSBデバイスとして動作し、Raspberry PiとSX1302/SX126xの間のブリッジとなります。

### WM1302のクイックスタート

#### 必要なハードウェア

- WM1302 LoRaWAN® ゲートウェイモジュール

- 40ピンGPIOヘッダーを備えたRaspberry Piボード（例: Raspberry Pi 4BまたはRaspberry 3B+）

- Raspberry Pi用WM1302 Pi Hat

- Raspberry Pi用電源アダプタ

- LoRa®アンテナ

- 8GB以上のSDカードとカードリーダー

- WM1302 LoRaWAN® ゲートウェイモジュールUSBバージョンを使用する場合はType C USBケーブル

#### 必要なソフトウェア

- [最新のRaspberry Pi OSイメージ](https://www.raspberrypi.org/software/operating-systems/): Raspberry Pi OS Liteを推奨

- [Balena Etcher](https://www.balena.io/etcher/): Raspberry Pi OSイメージをSDカードに書き込むため

- [putty](https://www.putty.org/): WindowsでSSHを介してRaspberry Piに接続するため

#### ステップ1. WM1302 Raspberry Pi Hatの取り付けとWM1302モジュールのインストール

Pi HatをRaspberry Piの40ピンヘッダーに取り付けるのは簡単です。まずRaspberry Piの電源を切り、以下の写真のようにWM1302モジュールをPi Hatに挿入し、ネジで固定します。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>
USBバージョンのWM1302モジュールを使用する場合は、Type CポートをType C USBケーブルでRaspberry PiのUSBポートに接続してください。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### ステップ2. RaspbianのI2CおよびSPIインターフェースを有効化

WM1302モジュールはSPIおよびI2Cを介してRaspberry Piと通信します。しかし、これらのインターフェースはRaspbianではデフォルトで無効になっているため、WM1302を使用する前に有効化する必要があります。ここでは、コマンドラインを使用してSPIおよびI2Cインターフェースを有効化する方法を紹介します。

まず、SSHを介してRaspberry Piにログインするか、モニターを使用してログインします（GPSモジュールがPi Hat上のハードウェアUARTピンを占有するため、シリアルコンソールは使用しないでください）。その後、コマンドラインで`sudo raspi-config`を入力してRaspberry Piソフトウェア設定ツールを開きます：

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. `Interface Options`を選択

2. `SPI`を選択し、`Yes`を選択して有効化

3. `I2C`を選択し、`Yes`を選択して有効化

4. `Serial Port`を選択し、「ログインシェルを使用しますか...」に対して`No`を選択し、「シリアルポートハードウェアを使用しますか...」に対して`Yes`を選択

5. 次に、これらの設定が正しく動作することを確認するために、Raspberry Piを再起動してください。

#### Step3. SX1302ソースコードの取得とコンパイル

まず、`git`をインストールし、GitHubから`sx1302_hal`（SX1302 LoRa Gateway用のライブラリとプログラム）をダウンロードします：

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

`sx1302_hal`フォルダに移動し、すべてをコンパイルします：

```shell
cd ~/sx1302_hal
make
```

#### Step4. Semtech SX1302パケットフォワーダーの実行

:::caution 注意
新しいLinuxカーネルでは、**sysfsインターフェース**が**chardevインターフェース**に置き換えられています。

これにより、sx_1302リポジトリに提供されているreset_lgw.shがモジュールを正しくリセットできず、以下のログが出力されます：

```shell
...
./reset_lgw.sh: 26: echo: echo: I/O error
./reset_lgw.sh: 27: echo: echo: I/O error
./reset_lgw.sh: 28: echo: echo: I/O error
./reset_lgw.sh: 29: echo: echo: I/O error
./reset_lgw.sh: 32: cannot create /sys/class/gpio/gpio17/direction: Directory nonexistent
./reset_lgw.sh: 33: cannot create /sys/class/gpio/gpio5/direction: Directory nonexistent
./reset_lgw.sh: 34: cannot create /sys/class/gpio/gpio18/direction: Directory nonexistent
./reset_lgw.sh: 35: cannot create /sys/class/gpio/gpio13/direction: Directory nonexistent
CoreCell reset through GPIO17...
SX1261 reset through GPIO17...
CoreCell power enable through GPIO18...
CoreCell ADC reset through GPIO13...
./reset_lgw.sh: 45: cannot create /sys/class/gpio/gpio18/value: Directory nonexistent
./reset_lgw.sh: 47: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 48: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 50: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 51: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 53: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
./reset_lgw.sh: 54: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
...
```

システムがまだ**sysfsインターフェース**を持っているかどうかを確認するには、以下のコマンドを実行してください：

```shell
ls /sys/class/gpio
```

:::

**sysfsインターフェースを持つLinuxの場合：**

`gpiox`フォルダが表示される場合、システムカーネルがまだ**sysfsインターフェース**を持っていることを意味し、上記のスクリプトを使用してモジュールをリセットできます。

`reset_lgw.sh`スクリプト内のSX1302とSX1261の`リセットピン`をテキストエディタ`nano`で変更します：

```shell
nano tools/reset_lgw.sh
```

テキストエディタの冒頭に以下のコードが表示されます：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

カーソルを移動して、`SX1302_RESET_PIN=23`を`SX1302_RESET_PIN=17`に、`SX1261_RESET_PIN=22`を`SX1261_RESET_PIN=5`に変更します。以下のようになります：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

これらの変更を保存するには、`CTRL + x`を押し、次に`y`を押し、最後に`Enter`を押してテキストエディタを閉じます。

**sysfsインターフェースを持たないLinuxの場合：**

`gpiox`という名前のフォルダが表示されない場合、**Libgpiodパッケージ**を使用してGPIOを呼び出す必要があります。

Libgpiodパッケージを使用してGPIOを制御するreset_lgw.shスクリプトは以下の通りです：

<details>
<summary>reset_lgw.sh</summary>

```shell
SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5     # SX1261 reset (LBT / Spectral Scan)


WAIT_GPIO() {
    sleep 0.1
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1261_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    gpioset gpiochip0 $SX1302_POWER_EN_PIN=1; WAIT_GPIO
    
    gpioset gpiochip0 $SX1302_RESET_PIN=1; WAIT_GPIO
    gpioset gpiochip0 $SX1302_RESET_PIN=0; WAIT_GPIO

    gpioset gpiochip0 $SX1261_RESET_PIN=0; WAIT_GPIO
    gpioset gpiochip0 $SX1261_RESET_PIN=1; WAIT_GPIO
}

case "$1" in
    start)
    reset
    ;;
    stop)
    reset
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

</details>

`reset_lgw.sh`を`packet_forwarder`フォルダにコピーし、`lora_pkt_fwd`を実行します。使用しているモジュールに基づいて`global_conf.json.sx1250.xxxx`設定ファイルを選択してください：

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder

# 以下のコマンドからモジュールに基づいて選択してください
# WM1302 LoRaWAN Gateway Module (SPI) - EU868の場合
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# WM1302 LoRaWAN Gateway Module (USB) - EU868の場合
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# WM1302 LoRaWAN Gateway Module (SPI) - US915の場合
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# WM1302 LoRaWAN Gateway Module (USB) - US915の場合
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

これで、パケットフォワーダーは正しく動作するようになります。ただし、開発者がLoRa®パケットをLoRa®サーバー（例：TTNやchirpstack）に転送する必要がある場合、まだいくつかの作業が必要です。

この目的を達成するには、まずRaspberry Pi GatewayをLoRa Serverに追加する必要があります。例として[TTNv3](https://www.thethingsindustries.com/docs/getting-started/)を取り上げます。[TTNv3コンソール](https://eu1.cloud.thethings.network/console)にログインし、`Go to gateways`をクリックして`Add gateway`をクリックします。`Add gateway`ページでは、入力する必要がある多数の設定が表示されます。注目すべきは`Gateway EUI`、`Gateway Server address`、`Frequency plan`であり、その他はデフォルトのままにしておきます。

- `Gateway EUI`: ゲートウェイの64ビット拡張ユニーク識別子。このWikiでは`AA555A0000000000`に設定します。

- `Gateway Server address`: ゲートウェイが接続するサーバーアドレスです。これをクリップボードにコピーしてください。開発者は後でこれを設定ファイルに保存する必要があります。

- `Frequency plan`: EU868モジュールを使用する場合は、`Europe 863-870 MHz (SF9 for RX2)`を選択してください。US915モジュールを使用する場合は、`United States 902-928 MHz, FSB 2`を選択してください。
<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>
ゲートウェイを追加した後、Raspberry Piに戻り、`CTRL + c`を押して`lora_pkt_fwd`を停止します。その後、先ほど使用した`global_conf.json.sx1250.xxxx`設定ファイルをテキストエディタ`nano`で編集します：

```shell
# モジュールに応じて以下のコマンドのいずれかを選択してください
# WM1302 LoRaWAN ゲートウェイモジュール (SPI) - EU868の場合
nano global_conf.json.sx1250.EU868

# WM1302 LoRaWAN ゲートウェイモジュール (USB) - EU868の場合
nano global_conf.json.sx1250.EU868.USB

# WM1302 LoRaWAN ゲートウェイモジュール (SPI) - US915の場合
nano global_conf.json.sx1250.US915

# WM1302 LoRaWAN ゲートウェイモジュール (USB) - US915の場合
nano global_conf.json.sx1250.US915.USB
```

基本的に、以下のパラメータを変更する必要があります：`"gateway_ID" "server_address" "serv_port_up" "serv_port_down"`。これらは設定ファイルの末尾にあります。`Gateway Server address`を`"server_address"`にコピーし、`"serv_port_up"`と`"serv_port_down"`を`1700`に変更します。これらのパラメータは以下のように編集されるべきです：

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* デフォルトのサーバーアドレス/ポートに変更 */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
```

これらの変更を保存するには、`CTRL + x`を押し、その後`y`を押して、最後に`Enter`を押してテキストエディタを閉じます。

`lora_pkt_fwd`を再起動すると、Raspberry PiゲートウェイがTTNv3に接続されていることが確認できます。

```shell
# モジュールに応じて以下のコマンドのいずれかを選択してください
# WM1302 LoRaWAN ゲートウェイモジュール (SPI) - EU868の場合
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# WM1302 LoRaWAN ゲートウェイモジュール (USB) - EU868の場合
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# WM1302 LoRaWAN ゲートウェイモジュール (SPI) - US915の場合
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# WM1302 LoRaWAN ゲートウェイモジュール (USB) - US915の場合
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

## ソース

- [Semtech SX1302 データシート](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## 証明書

- [WM1302(USB) CE 証明書](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [WM1302(SPI) CE 証明書](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## 技術サポート & 製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)にご投稿ください。

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>