---
description: LoRaWAN® ゲートウェイモジュール WM1302 の使用開始ガイド。
title: LoRaWAN® ゲートウェイモジュール WM1302
keywords:
  - wio 
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /ja/WM1302_module
last_update:
  date: 4/24/2025
  author: Leo
---

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN® は LoRa Alliance® からライセンスを受けて使用されているマークです。
LoRa® マークは Semtech Corporation またはその子会社の商標です。

:::note
私たちは最近、Wio-E5 モジュールをベースとした Wio-E5 シリーズをリリースしました。

[ここ](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Wio-E5 モジュール](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/)から[Grove モジュール](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/)、[mini 開発ボード](https://wiki.seeedstudio.com/LoRa_E5_mini/)、[開発キット](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/)まで、LoRa-E5 ファミリーの新しいメンバーをご覧ください。

STM32WL シリーズ用 STM32Cube MCU パッケージ（SDK）を使用して LoRaWAN® エンドノードを作成し、LoRaWAN® ネットワークに参加してデータを送信する方法について詳しく学ぶには、[mini 開発ボード](https://wiki.seeedstudio.com/LoRa_E5_mini/)と[開発キット](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/)の wiki ページをお読みください。
:::

WM1302 モジュールは、mini-PCIe フォームファクターを採用した新世代の LoRaWAN® ゲートウェイモジュールです。Semtech® SX1302 ベースバンド LoRaWAN® チップをベースとした WM1302 は、ゲートウェイ製品の長距離無線伝送のより大きな潜在能力を引き出します。従来の SX1301 および SX1308 LoRa® チップと比較して、より高い感度、より少ない消費電力、より低い動作温度を特徴としています。

WM1302 LoRaWAN® ゲートウェイモジュールは、US915 と EU868 の両方の周波数帯域で SPI と USB バージョンを提供し、EU868、US915、AS923、AS920、AU915、KR920、IN865 を含む幅広い LoRaWAN® 周波数プランオプションから選択できます。

WM1302 モジュールは CE、FCC、Telec 認証を取得しており、LoRaWAN® ゲートウェイデバイスの開発と認証プロセスの簡素化に役立ちます。

WM1302 は M2M および IoT アプリケーション向けに設計されており、LPWAN ゲートウェイ対応シナリオで広く適用できます。LoRaWAN® ゲートウェイ、ホットスポットなどの LoRa® ゲートウェイデバイスを開発する際の技術的困難と時間消費を大幅に削減する完璧な選択肢となるでしょう。

## 特徴

- **Semtech® SX1302 ベースバンド LoRa® チップを搭載**、極めて低い消費電力と高性能を実現。
- **標準 52 ピンゴールドフィンガーを備えた Mini-PCIe フォームファクター**、様々なゲートウェイデバイスとの統合が容易。
- **超低動作温度**、追加の放熱が不要で、LoRaWAN® ゲートウェイのサイズを削減。
- **高感度**、SX1250 TX/RX フロントエンドで SF12 時 -139 dBm まで対応；TX 出力は @3.3V で最大 26 dBm。
- **CE、FCC、TELEC 認証取得済み**。最終製品の認証プロセスを簡素化。

## ハードウェア概要

### 図

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
    <td class="tg-4onr">送信電力</td>
    <td class="tg-f42p">26 dBm（3.3V電源供給時）</td>
    <td class="tg-f42p">25 dBm（3.3V電源供給時）</td>
  </tr>
  <tr>
    <td class="tg-4onr">LED</td>
    <td class="tg-f42p" colspan="2">電源：緑 設定：赤 送信：緑 受信：青</td>
  </tr>
  <tr>
    <td class="tg-4onr">フォームファクタ</td>
    <td class="tg-f42p" colspan="2">Mini PCIe、52ピン金メッキ端子</td>
  </tr>
  <tr>
    <td class="tg-4onr">消費電力（SPI版）</td>
    <td class="tg-f42p" colspan="2">スタンバイ：7.5 mA<br />送信最大電力：415 mA<br />受信：40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">消費電力（USB版）</td>
    <td class="tg-f42p" colspan="2">スタンバイ：20 mA<br />送信最大電力：425 mA<br />受信：53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT（Listen Before Talk）</td>
    <td class="tg-f42p" colspan="2">サポート</td>
  </tr>
  <tr>
    <td class="tg-4onr">アンテナコネクタ</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">動作温度</td>
    <td class="tg-f42p" colspan="2">-40°C～85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">寸法</td>
    <td class="tg-f42p" colspan="2">30 mm（幅）× 50.95 mm（長さ）</td>
  </tr>
  <tr>
    <td class="tg-4onr">認証</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## アプリケーション

- LPWAN ゲートウェイデバイス開発

- あらゆる長距離無線通信アプリケーション開発

- LoRa® および LoRaWAN® アプリケーションの学習と研究

## 寸法

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## はじめに

### SPI バージョンと USB バージョンの違い

WM1302 LoRaWAN® ゲートウェイモジュール SPI バージョンでは、Semtech SX1302 と SX126x チップは、異なるチップセレクト（CS）ピンを使用して同じ SPI バス経由で Raspberry Pi に接続されます。

WM1302 LoRaWAN® ゲートウェイモジュール USB バージョンでは、Semtech SX1302 と SX126x チップは STM32L4 MCU に接続され、この工場でプログラムされた MCU は USB デバイスとして動作し、Raspberry Pi と SX1302/SX126x 間のブリッジとなります。

### WM1302 のクイックスタート

#### 必要なハードウェア

- WM1302 LoRaWAN® ゲートウェイモジュール

- 40 ピン GPIO ヘッダー付き Raspberry Pi ボード（例：Raspberry Pi 4B または Raspberry 3B+）

- Raspberry Pi 用 WM1302 Pi Hat

- Raspberry Pi 用電源アダプター

- LoRa® アンテナ

- 8GB 以上の SD カードとカードリーダー

- WM1302 LoRaWAN® ゲートウェイモジュール USB バージョンを使用する場合は Type C USB ケーブル

#### 必要なソフトウェア

- [最新の Raspberry Pi OS イメージ](https://www.raspberrypi.org/software/operating-systems/)：Raspberry Pi OS Lite を推奨

- [Balena Etcher](https://www.balena.io/etcher/)：Raspberry Pi OS イメージを SD カードに書き込むため

- [putty](https://www.putty.org/)：Windows で SSH 経由で Raspberry Pi に接続するため

#### ステップ1. WM1302 Raspberry Pi Hat の取り付けと WM1302 モジュールのインストール

Pi Hat を Raspberry Pi 40 ピンヘッダーに取り付けるのは簡単です。まず Raspberry Pi の電源を切り、以下の写真のように WM1302 モジュールを Pi Hat に挿入してネジで固定します。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>
USB バージョンの WM1302 モジュールを使用する場合は、Type C USB ケーブルで Type C ポートを Raspberry Pi の USB ポートに接続してください。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### ステップ2. Raspbian I2C と SPI インターフェースの有効化

WM1302 モジュールは SPI と I2C で Raspberry Pi と通信します。しかし、これら2つのインターフェースは Raspbian でデフォルトでは有効になっていないため、開発者は WM1302 を使用する前にそれらを有効にする必要があります。ここでは、SPI と I2C インターフェースを有効にするコマンドライン方法を紹介します。

まず、SSH 経由または モニターを使用して Raspberry Pi にログインし（Pi Hat の GPS モジュールが Pi のハードウェア UART ピンを使用するため、シリアルコンソールは使用しないでください）、コマンドラインで `sudo raspi-config` と入力して Raspberry Pi ソフトウェア設定ツールを開きます：

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. `Interface Options` を選択します

2. `SPI` を選択し、`Yes` を選択して有効にします

3. `I2C` を選択し、`Yes` を選択して有効にします

4. `Serial Port` を選択し、"Would you like a login shell..." に対して `No` を選択し、"Would you like the serial port hardware..." に対して `Yes` を選択します

5. この後、これらの設定が動作することを確認するために Raspberry Pi を再起動してください。

#### Step3. SX1302 ソースコードの取得とコンパイル

それでは `git` をインストールし、github から `sx1302_hal`（SX1302 LoRa Gateway 用のライブラリとプログラム）をダウンロードしましょう：

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Move to `sx1302_hal` folder and compile everything:

```shell
cd ~/sx1302_hal
make
```

#### ステップ4. Semtech SX1302 パケットフォワーダーの実行

:::caution Note
新しいLinuxカーネルでは、**sysfsインターフェース**が**chardevインターフェース**に置き換えられました。

これにより、sx_1302リポジトリで提供されているreset_lgw.shがモジュールを適切にリセットできず、以下のログが出力されます：

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

実行しているシステムがまだ **sysfs インターフェース** を持っているかどうかを確認するには、以下のコマンドを実行できます：

```shell
ls /sys/class/gpio
```

:::

**sysfsインターフェースを持つLinuxの場合：**

その中に一連の`gpiox`フォルダが表示される場合、システムカーネルがまだ**sysfsインターフェース**を持っていることを意味し、上記のスクリプトを使用してモジュールをリセットできます。

テキストエディタ`nano`を使用して、`reset_lgw.sh`スクリプト内のSX1302とSX1261の`reset pin`を変更します：

```shell
nano tools/reset_lgw.sh
```

テキストエディタの先頭に以下のコードが表示されます：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

ナビゲーションキーを使用してカーソルを移動し、`SX1302_RESET_PIN=23` を `SX1302_RESET_PIN=17` に、`SX1261_RESET_PIN=22` を `SX1261_RESET_PIN=5` に変更します。以下のようになります：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

これらの変更を保存するには、`CTRL + x` を押し、次に `y` を押し、最後に `Enter` を押してテキストエディタを閉じます。

**sysfs インターフェースがない Linux の場合：**

その中に `gpiox` という名前のフォルダがない場合は、**Libgpiod パッケージ** を使用して GPIO を呼び出す必要があります。

Libgpiod パッケージを使用して GPIO を制御する reset_lgw.sh スクリプトは以下の通りです：

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

`reset_lgw.sh` を `packet_forwarder` フォルダにコピーし、`lora_pkt_fwd` を実行してください。使用しているモジュールに基づいて `global_conf.json.sx1250.xxxx` 設定ファイルを選択する必要があることに注意してください：

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

現在、パケットフォワーダーは正常に動作しています。しかし、開発者がLoRa®パケットを自分のLoRa®サーバー（例：TTNやchripstack）に転送する必要がある場合、まだやるべきことがあります。

この目標を達成するために、開発者はまずRaspberry Pi GatewayをLoraサーバーに追加する必要があります。[TTNv3](https://www.thethingsindustries.com/docs/getting-started/)を例に取ると、[TTNv3コンソール](https://eu1.cloud.thethings.network/console)にログインし、`Go to gateways`をクリックして`Add gateway`をクリックします。`Add gateway`ページでは、記入すべき数十の設定項目があります。注目すべきは`Gateway EUI`と`Gateway Server address`と`Frequency plan`で、その他はデフォルトのままにしておきます。

- `Gateway EUI`: ゲートウェイの64ビット拡張一意識別子です。このwikiでは`AA555A0000000000`に設定します

- `Gateway Server address`: ゲートウェイが接続するサーバーアドレスです。これをクリップボードにコピーし、開発者は後でこれを設定ファイルに保存する必要があります

- `Frequency plan`: EU868モジュールを使用している場合は`Europe 863-870 MHz (SF9 for RX2)`を選択し、US915モジュールを使用している場合は`United States 902-928 MHz, FSB 2`を選択します
<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>
ゲートウェイを追加した後、Raspberry Piに戻り、`CTRL + c`を押して`lora_pkt_fwd`を停止し、先ほど使用した`global_conf.json.sx1250.xxxx`設定ファイルをテキストエディタ`nano`で編集します：

```shell
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
nano global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
nano global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
nano global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
nano global_conf.json.sx1250.US915.USB
```

基本的に、これらのパラメータを変更する必要があります：`"gateway_ID" "server_address" "serv_port_up" "serv_port_down"`、これらは設定ファイルの末尾にあります。`Gateway Server address`を`"server_address"`にコピーし、`"serv_port_up"`と`"serv_port_down"`を`1700`に変更します。これらのパラメータは次のように編集する必要があります：

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
```

これらの変更を保存するには、`CTRL + x` を押し、次に `y` を押し、最後に `Enter` を押してテキストエディタを閉じます。

`lora_pkt_fwd` を再起動すると、Raspberry Pi ゲートウェイが TTNv3 に接続されていることがわかります。

```shell
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

## ソース

- [Semtech SX1302 データシート](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## 認証

- [WM1302(USB) CE認証](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [WM1302(SPI) CE認証](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## 技術サポート & 製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/)にお寄せください。

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
