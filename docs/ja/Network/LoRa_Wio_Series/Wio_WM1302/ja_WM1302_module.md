---
description: LoRaWAN® ゲートウェイモジュール WM1302 の入門ガイド。
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

[こちら](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Wio-E5 Module](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/) [Grove module](https://wiki.seeedstudio.com/ja/Grove_LoRa_E5_New_Version/)、[mini Dev boards](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/) から [Development Kit](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/) まで、LoRa-E5 ファミリーの新しいメンバーをご覧ください。

STM32WL シリーズ用 STM32Cube MCU パッケージ（SDK）を使用して LoRaWAN® エンドノードを作成し、LoRaWAN® ネットワークに参加してデータを送信する方法について詳しく学ぶには、[mini Dev boards](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/) と [Development Kit](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/) の wiki ページをご覧ください。
:::

WM1302 モジュールは、mini-PCIe フォームファクターを採用した新世代の LoRaWAN® ゲートウェイモジュールです。Semtech® SX1302 ベースバンド LoRaWAN® チップをベースとした WM1302 は、ゲートウェイ製品の長距離無線伝送のより大きな潜在能力を解き放ちます。従来の SX1301 および SX1308 LoRa® チップと比較して、より高い感度、より少ない消費電力、より低い動作温度を特徴としています。

WM1302 LoRaWAN® ゲートウェイモジュールは、US915 と EU868 の両方の周波数帯域で SPI と USB バージョンを提供し、EU868、US915、AS923、AS920、AU915、KR920、IN865 を含む幅広い LoRaWAN® 周波数プランオプションから選択できます。

WM1302 モジュールは CE、FCC、Telec 認証を取得しており、LoRaWAN® ゲートウェイデバイスの開発と認証プロセスを簡素化するのに役立ちます。

WM1302 は M2M および IoT アプリケーション向けに設計されており、LPWAN ゲートウェイ対応シナリオで広く適用できます。LoRaWAN® ゲートウェイ、ホットスポットなどの LoRa® ゲートウェイデバイスを開発する際の技術的困難と時間消費を大幅に削減するための完璧な選択肢となるでしょう。

## 特徴

- **Semtech® SX1302 ベースバンド LoRa® チップを搭載**、極めて低い消費電力と高性能。
- **標準 52 ピンゴールドフィンガーを備えた Mini-PCIe フォームファクター**、様々なゲートウェイデバイスとの統合が容易。
- **超低動作温度**、追加の放熱が不要で、LoRaWAN® ゲートウェイのサイズを削減。
- **高感度** SX1250 TX/RX フロントエンドで SF12 時 -139 dBm まで対応；TX 出力は 3.3V で最大 26 dBm。
- **CE、FCC、TELEC 認証取得済み**。最終製品の認証プロセスを簡素化。

## ハードウェア概要

### 図

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

<br />

#### Raspberry Pi ピン配置マッピング

<table class="tg">
<thead>
<tr>
<th class="tg-4onr">40 ピン番号（BOARD#）</th><th class="tg-ev79">Raspberry Pi GPIO（BCM#）</th><th class="tg-ev79">WM1302 Pi HAT ピン配置</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="tg-4onr">1</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">2</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">3</td>
  <td class="tg-f42p">GPIO 2</td>
  <td class="tg-f42p">I2C_SDA</td>
</tr>

<tr>
  <td class="tg-4onr">4</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">5</td>
  <td class="tg-f42p">GPIO 3</td>
  <td class="tg-f42p">I2C_SCL</td>
</tr>

<tr>
  <td class="tg-4onr">6</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">7</td>
  <td class="tg-f42p">GPIO 4</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">8</td>
  <td class="tg-f42p">GPIO 14</td>
  <td class="tg-f42p">GPS_RXD</td>
</tr>

<tr>
  <td class="tg-4onr">9</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">10</td>
  <td class="tg-f42p">GPIO 15</td>
  <td class="tg-f42p">GPS_TXD</td>
</tr>

<tr>
  <td class="tg-4onr">11</td>
  <td class="tg-f42p">GPIO 17</td>
  <td class="tg-f42p">SX1302_RESET<br />SPI バージョン：アクティブ HIGH<br />USB バージョン：アクティブ LOW</td>
</tr>

<tr>
  <td class="tg-4onr">12</td>
  <td class="tg-f42p">GPIO 18</td>
  <td class="tg-f42p">SX1262_BUSY</td>
</tr>

<tr>
  <td class="tg-4onr">13</td>
  <td class="tg-f42p">GPIO 27</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">14</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">15</td>
  <td class="tg-f42p">GPIO 22</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">16</td>
  <td class="tg-f42p">GPIO 23</td>
  <td class="tg-f42p">SX1262_DIO1</td>
</tr>

<tr>
  <td class="tg-4onr">17</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">18</td>
  <td class="tg-f42p">GPIO 24</td>
  <td class="tg-f42p">SX1262_DIO2</td>
</tr>

<tr>
  <td class="tg-4onr">19</td>
  <td class="tg-f42p">GPIO 10</td>
  <td class="tg-f42p">SPI_MOSI</td>
</tr>

<tr>
  <td class="tg-4onr">20</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">21</td>
  <td class="tg-f42p">GPIO 9</td>
  <td class="tg-f42p">SPI_MISO</td>
</tr>

<tr>
  <td class="tg-4onr">22</td>
  <td class="tg-f42p">GPIO 25</td>
  <td class="tg-f42p">GPS_RST</td>
</tr>

<tr>
  <td class="tg-4onr">23</td>
  <td class="tg-f42p">GPIO 11</td>
  <td class="tg-f42p">SPI_SCK</td>
</tr>

<tr>
  <td class="tg-4onr">24</td>
  <td class="tg-f42p">GPIO 8</td>
  <td class="tg-f42p">SX1302_CS</td>
</tr>

<tr>
  <td class="tg-4onr">25</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">26</td>
  <td class="tg-f42p">GPIO 7</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">27</td>
  <td class="tg-f42p">GPIO 0</td>
  <td class="tg-f42p">I2C_SDA(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">28</td>
  <td class="tg-f42p">GPIO 1</td>
  <td class="tg-f42p">I2C_SCL(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">29</td>
  <td class="tg-f42p">GPIO 5</td>
  <td class="tg-f42p">SX1262_RST</td>
</tr>

<tr>
  <td class="tg-4onr">30</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">31</td>
  <td class="tg-f42p">GPIO 6</td>
  <td class="tg-f42p">SX1262_CS</td>
</tr>

<tr>
  <td class="tg-4onr">32</td>
  <td class="tg-f42p">GPIO 12</td>
  <td class="tg-f42p">GPS_WAKE_UP</td>
</tr>

<tr>
  <td class="tg-4onr">33</td>
  <td class="tg-f42p">GPIO 13</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">34</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">35</td>
  <td class="tg-f42p">GPIO 19</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">36</td>
  <td class="tg-f42p">GPIO 16</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">37</td>
  <td class="tg-f42p">GPIO 26</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">38</td>
  <td class="tg-f42p">GPIO 20</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">39</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">40</td>
  <td class="tg-f42p">GPIO 21</td>
  <td class="tg-f42p">NC</td>
</tr>

</tbody>
</table>


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
    <td class="tg-4onr">TX 出力</td>
    <td class="tg-f42p">26 dBm（3.3V 電源供給時）</td>
    <td class="tg-f42p">25 dBm（3.3V 電源供給時）</td>
  </tr>
  <tr>
    <td class="tg-4onr">LED</td>
    <td class="tg-f42p" colspan="2">電源：緑 設定：赤 TX：緑 RX：青</td>
  </tr>
  <tr>
    <td class="tg-4onr">フォームファクター</td>
    <td class="tg-f42p" colspan="2">Mini PCIe、52 ピンゴールドフィンガー</td>
  </tr>
  <tr>
    <td class="tg-4onr">消費電力（SPI バージョン）</td>
    <td class="tg-f42p" colspan="2">スタンバイ：7.5 mA<br />TX 最大出力：415 mA<br />RX：40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">消費電力（USB バージョン）</td>
    <td class="tg-f42p" colspan="2">スタンバイ：20 mA<br />TX 最大出力：425 mA<br />RX：53 mA</td>
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
    <td class="tg-f42p" colspan="2">-40°C to 85°C</td>
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

- LPWANゲートウェイデバイス開発

- あらゆる長距離無線通信アプリケーション開発

- LoRa®およびLoRaWAN®アプリケーションの学習と研究

## 寸法

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## 入門ガイド

### SPIバージョンとUSBバージョンの違い

WM1302 LoRaWAN®ゲートウェイモジュールSPIバージョンでは、Semtech SX1302とSX126xチップは、異なるチップセレクト（CS）ピンを使用して同じSPIバス経由でRaspberry Piに接続されます。

WM1302 LoRaWAN®ゲートウェイモジュールUSBバージョンでは、Semtech SX1302とSX126xチップはSTM32L4 MCUに接続され、この工場でプログラムされたMCUはUSBデバイスとして動作し、Raspberry PiとSX1302/SX126x間のブリッジとなります。

### WM1302のクイックスタート

#### 必要なハードウェア

- WM1302 LoRaWAN®ゲートウェイモジュール

- 40ピンGPIOヘッダー付きRaspberry Piボード（例：Raspberry Pi 4BまたはRaspberry 3B+）

- Raspberry Pi用WM1302 Pi Hat

- Raspberry Pi用電源アダプタ

- LoRa®アンテナ

- 8GB以上のSDカードとカードリーダー

- WM1302 LoRaWAN®ゲートウェイモジュールUSBバージョンを使用する場合はType C USBケーブル

#### 必要なソフトウェア

- [最新のRaspberry Pi OSイメージ](https://www.raspberrypi.org/software/operating-systems/)：Raspberry Pi OS Liteを推奨

- [Balena Etcher](https://www.balena.io/etcher/)：Raspberry Pi OSイメージをSDカードに書き込むため

- [putty](https://www.putty.org/)：WindowsでSSH経由でRaspberry Piに接続するため

<br />

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Version" label="WM1302 SPIバージョン">

#### ステップ1. WM1302 Raspberry Pi Hatの取り付けとWM1302モジュールのインストール

まずRaspberry Piの電源を切り、以下の写真のようにWM1302モジュールをPi Hatに挿入してネジで固定します。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>


#### ステップ2. Raspbian I2CおよびSPIインターフェースの有効化

WM1302モジュールはSPIおよびI2Cインターフェース経由でRaspberry Piと通信します。しかし、これら2つのインターフェースはRaspbianではデフォルトで有効になっていないため、開発者はWM1302を使用する前にそれらを有効にする必要があります。ここでは、SPIおよびI2Cインターフェースを有効にするコマンドライン方法を紹介します。

まず、SSH経由またはモニターを使用してRaspberry Piにログインし（Pi HatのGPSモジュールがPiのハードウェアUARTピンを占有するため、シリアルコンソールは使用しないでください）、コマンドラインで`sudo raspi-config`と入力してRaspberry Piソフトウェア設定ツールを開きます：

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. `Interface Options`を選択

2. `SPI`を選択し、`Yes`を選択して有効にする

3. `I2C`を選択し、`Yes`を選択して有効にする

4. `Serial Port`を選択し、"Would you like a login shell..."に対して`No`を選択し、"Would you like the serial port hardware..."に対して`Yes`を選択

5. この後、これらの設定が動作することを確認するためにRaspberry Piを再起動してください。

#### ステップ3. SX1302ソースコードの取得とコンパイル

それでは`git`をインストールし、githubから`sx1302_hal`（SX1302 LoRaゲートウェイ用ライブラリとプログラム）をダウンロードしましょう：

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

`sx1302_hal`フォルダに移動してすべてをコンパイルします：

```shell
cd ~/sx1302_hal
make
```

#### ステップ4. Semtech SX1302パケットフォワーダーの実行

`reset_lgw.sh`を`packet_forwarder`フォルダにコピーし、テキストエディタ`nano`を使用して`reset_lgw.sh`スクリプト内のSX1302およびSX1261の`reset pin`を変更します：

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder
nano tools/reset_lgw.sh
```

以下のようなデフォルトの`reset pin`が表示されます：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

`SX1302_RESET_PIN`、`SX1302_POWER_EN_PIN`、`SX1261_RESET_PIN`を以下のように変更します：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

`CTRL + x`を押し、続いて`y`と`Enter`を押してテキストエディタを閉じ、これらの変更を保存します。

<br />

以下の完全なスクリプトも参照できます：

<details>
<summary>reset_lgw.sh</summary>

```shell
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0

```
</details>

<br />

使用しているモジュールに基づいて、対応する`global_conf.json.sx1250.xxxxx`で希望するLoRaWANネットワークサーバー`server_address`とゲートウェイEUI `gateway_ID`を選択し、`up/down port`を`1700`に変更します。その後、以下のコードを実行してコンセントレータを開始します：


```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

</TabItem>
<TabItem value="WM1302 USB Version" label="WM1302 USBバージョン">

#### ステップ1. WM1302 Raspberry Pi Hatの取り付けとWM1302モジュールのインストール

まずRaspberry Piの電源を切り、以下の写真のようにWM1302モジュールをPi Hatに挿入してネジで固定します。Type CポートをType C USBケーブルでRaspberry PiのUSBポートの1つに接続します。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### ステップ2. Raspbian I2CおよびSPIインターフェースの有効化

WM1302モジュールはSPIおよびI2C経由でRaspberry Piと通信します。しかし、これら2つのインターフェースはRaspbianではデフォルトで有効になっていないため、開発者はWM1302を使用する前にそれらを有効にする必要があります。ここでは、SPIおよびI2Cインターフェースを有効にするコマンドライン方法を紹介します。

まず、SSH経由またはモニターを使用してRaspberry Piにログインし（Pi HatのGPSモジュールがPiのハードウェアUARTピンを占有するため、シリアルコンソールは使用しないでください）、コマンドラインで`sudo raspi-config`と入力してRaspberry Piソフトウェア設定ツールを開きます：


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

#### ステップ3. SX1302 ソースコードの取得とコンパイル

それでは `git` をインストールし、github から `sx1302_hal`（SX1302 LoRa ゲートウェイ用のライブラリとプログラム）をダウンロードしましょう：

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

`sx1302_hal` フォルダに移動してすべてをコンパイルします：

```shell
cd ~/sx1302_hal
make
```

#### ステップ4. Semtech SX1302 パケットフォワーダーの実行

特定の USB ポートを取得するには、以下の手順に従ってください：

```shell
lsusb
```

私の場合、WM1302 モジュールの `Product` ID は `8047` です

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ lsusb
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 2109:3431 VIA Labs, Inc. Hub
Bus 001 Device 003: ID 2886:8047 Seeed Technology Co., Ltd. WM1302 USB Port  
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
```

次に、`Product ID` `8047` の USB デバイスを取得します。

```shell
sudo dmesg | grep 8047
sudo modprobe cdc_acm
```

私の場合、USB ポート番号は `1-1.3` です。

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 8047
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
```

これで以下を使用してデバイスポートを取得できます：

```shell
sudo dmesg | grep 1-1.3
```

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 1-1.3
[  215.364299] usb 1-1.3: new full-speed USB device number 3 using xhci_hcd
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
[  215.459643] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  215.459657] usb 1-1.3: Product: WM1302 USB Port  
[  215.459669] usb 1-1.3: Manufacturer: SEEED
[  215.459680] usb 1-1.3: SerialNumber: 4E100336FF7F
[  215.543301] cdc_acm 1-1.3:1.0: ttyACM0: USB ACM device
```

つまり私の場合、USB デバイスは `ttyACM0` です。`global_conf.json.sx1250.xxxxx.USB` のデフォルト USB デバイス設定は `ttyACM0` なので、ここでは何もする必要がありません。

デバイスが他の USB ポートを使用している場合、`sed` コマンド `sed -i 's/search_string/replacement_string/g' filename` を使用して、対応する地域の `global_conf.json.sx1250.xxxxx.USB` 設定ファイルを変更できます。

<br />

使用しているモジュールに基づいて、対応する `global_conf.json.sx1250.xxxxx` で希望する LoRaWAN ネットワークサーバー `server_address` とゲートウェイ EUI `gateway_ID` を選択し、`up/down port` を `1700` に変更します。その後、以下のコードを実行してコンセントレーターを開始します：

```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

</TabItem>
</Tabs>

<!-- Code END -->

---

これで、パケットフォワーダーが正常に動作できるようになりました。LoRaWAN ネットワークサーバー（TTN や ChripStack など）にデータを正常に転送するには、サーバー側でいくつかの設定を行う必要があります。

そのためには、まず構築した Raspberry Pi ゲートウェイを LoRa ネットワークサーバーに登録する必要があります。[TTN](https://www.thethingsindustries.com/docs/getting-started/) を例に取ると、[TTN コンソール](https://eu1.cloud.thethings.network/console) にログインし、左側のパネルの `Gateways` ボタンをクリックして `Register gateway` をクリックします。`Gateway EUI`、`Gateway Server address`、`Frequency plan` を入力し、他のオプションはデフォルト設定のままにします。

- **Gateway EUI:** ゲートウェイの 64 ビット一意識別子。

- **Gateway Server address:** ネットワークサーバーがデプロイされているクラスターの URL（例：`eu1.cloud.thethings.network`）。

- **Frequency plan:** 地域に基づいて対応する周波数プランを設定します。ヨーロッパの場合は `Europe 863-870 MHz (SF9 for RX2-recommended)`、米国の場合は `United States 902-928 MHz, FSB 2`。

<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>

<br />

ゲートウェイの登録が正常に完了したら、`CTRL + c` を押して `lora_pkt_fwd` を停止し、`global_conf.json.sx1250.xxxx` 設定ファイルを編集・確認して、`"gateway_ID"` と `"server_address"` エントリが LNS の設定と正確に一致することを確認します。

```json
    ...
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
    ...
```

`./lora_pkt_fwd -c global_conf.json.sx1250.xxxxx` コマンドを使用して `lora_pkt_fwd` を再起動すると、Raspberry Pi ゲートウェイが TTN に接続されていることを確認できるはずです。

## FAQ

<details>
<summary>すべての設定が正しくても、デバイスがネットワークサーバーに参加できないのはなぜですか？</summary>

<br />

ハードウェアの違いにより、特定のモジュール（WM1302-US915 USB バージョン）がダウンリンクデータパケットを適切に送信できない場合があることが確認されています。この問題を修正するには、マクロ `TX_JIT_DELAY`（このマクロは `/sx1302_hal/packet_forwarder/src/jitqueue.c` にあります）の値を 40000 から 120000 に変更し、sx1302_hal を再作成してください。


</details>

## ソース

- [Semtech SX1302 データシート](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## 認証

- [WM1302(USB) CE 認証](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [WM1302(SPI) CE 認証](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## 技術サポート & 製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/) に投稿してください。

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
