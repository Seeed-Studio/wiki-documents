---
title: LTE Cat 1 Pi HAT
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/LTE_Cat_1_Pi_HAT/
slug: /ja/LTE_Cat_1_Pi_HAT
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

SeeedのLTE CAT.1 Pi HATは、u-blox LARA-R2xxシリーズをベースにしたRaspberry Pi用のオープンソースセルラー拡張モデムです。Raspberry Pi 1 Model B+以降のバージョンに対応しています。

LTE CAT.1 Pi HATはLTEカテゴリ1ネットワーク向けに設計されており、2Gフォールバック（EUバージョンのみ）をサポートしています。TCP/UDP、HTTPなどの一般的なプロトコルを組み込んでいます。

LTE CAT.1 Pi HATはUARTおよびUSBインターフェースをサポートしています。UARTを使用することで、Raspberry Piは特別なドライバーなしでATコマンドを介してLTE CAT.1 Pi HATと通信できます。これにより迅速なプロトタイピング構築に適しています。


<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>



|バージョン|リンク|
|--|--|
|ヨーロッパ<br/>|<p style={{}}><a href="https://www.seeedstudio.com/TE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|USA-AT&T<br/> |<p style={{}}><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|USA-VZW<br />|<p style={{}}><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|



## バージョン

| 製品バージョン              | 変更点 | リリース日 |
|------------------------------|---------|---------------|
| LTE Cat 1 Pi HAT(USA-AT&T)   | 初版 | 2017年12月      |
| LTE Cat 1 Pi HAT(USA-VZW)    | 初版 | 2017年12月      |
| LTE Cat 1 Pi HAT(Europe)     | 初版 | 2017年12月      |



## 仕様

- Raspberry Pi 1 Model B+以降のバージョンに対応
    
- LTE CAT.1および2Gフォールバックをサポート（EUバージョンのみ）
    
- UARTおよびUSBインターフェースによる通信
    
- Grove I2Cおよびデジタルコネクタをサポート
    
- セルラーモジュール上のプロトコル
    
- TCP/UDPスタックを組み込み
    
- HTTP、FTP、SSLを組み込み
    
- デュアルスタックIPV4/IPV6
    
- 3GPP TS 27.007 [8], TS 27.005 [9]標準ATコマンド


## アプリケーション
- IoTゲートウェイ
- データロガー
- 自動販売機
- POS
- スマートホームデバイス
- ロボット
- 広告
- その他セルラーネットワークが必要なシナリオ


## ハードウェア概要

**インターフェース**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)


- **LTE CAT.1**: U-blox LARA-R2xxシリーズLTE CAT.1モジュール。詳細については[u-blox LARA-R2シリーズ製品ページ](https://www.u-blox.com/en/product/lara-r2-series)をご参照ください。
- **Groveポート**: 2つのGrove I2C/デジタルポート。SDA_RPI、SCL_RPIに接続されており、I2CまたはGPIOポートとして使用可能。
- **スイッチャー**: Groveポートの電圧を5Vまたは3.3Vに制御。
- **USBインターフェース**: LTE Cat.1 Pi HATとRaspberry Piを同時に電源供給するために使用可能。また、デバッグポートとしても使用可能。デバッグポートの使用方法についてはFAQ Q1をご参照ください。
- **バッテリーホルダー**: MP2617がバッテリー電源管理に使用されます。バッテリーが接続されていない場合、CHG LEDが6Hzの周波数で点滅します。充電中は消灯し、充電完了時に点灯します。コネクタはJST2.0標準です。
- **Lara-R2XXリセットボタン**: Lara-R2xxモジュールをリセット。
- **Lara-R2XX電源オンボタン**: Lara-R2xxモジュールを電源オンするには2秒間押します。
- **アンテナ**: 2つのアンテナを含みます。1つはメインアンテナで送受信に使用され、もう1つは受信専用で受信感度を向上させるためのものです。メインアンテナは必ず接続する必要があります。受信専用アンテナはオプションです。
- **Rpi 40ピン**: ピン配置を参照。
- **SIMカードスロット**: シルクスクリーンの方向に従ってLTE SIMカードを挿入してください。

:::caution
    バッテリーについては、3.7Vリチウムイオンバッテリーを推奨し、JST2.0に接続してください。特にLara-R211（ヨーロッパ）Pi HATでは、GSM機能が高い電力消費を伴います。周囲にLTE信号がない場合、LTE CAT.1 Pi HATは多くの電力を消費します。そのため、バッテリーを接続することを強く推奨します。
:::

**ピン配置**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg .tg-us36{border-color:inherit;vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-us36">使用ピン</th>
        <th className="tg-us36">Python (BCM)</th>
        <th className="tg-us36">WiringPi GPIO</th>
        <th className="tg-us36">名称</th>
        <th className="tg-us36" colSpan={2}>P1 ピン番号</th>
        <th className="tg-us36">名称</th>
        <th className="tg-us36">WiringPi GPIO</th>
        <th className="tg-us36">Python (BCM)</th>
        <th className="tg-us36">使用ピン</th>
      </tr>
      <tr>
        <td className="tg-us36">3V3_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">3.3v DC 電源</td>
        <td className="tg-us36">1</td>
        <td className="tg-us36">2</td>
        <td className="tg-us36">5v DC 電源</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">5V_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">SDA_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36">8</td>
        <td className="tg-us36">GPIO02 (SDA1, I2C)</td>
        <td className="tg-us36">3</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">5v DC 電源</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">5V_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">SCL_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36">9</td>
        <td className="tg-us36">GPIO03 (SCL1, I2C)</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">グラウンド</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">7</td>
        <td className="tg-us36">GPIO04</td>
        <td className="tg-us36">7</td>
        <td className="tg-us36">8</td>
        <td className="tg-us36">GPIO14 (TXD0)</td>
        <td className="tg-us36">15</td>
        <td className="tg-us36" />
        <td className="tg-us36">TX_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">グラウンド</td>
        <td className="tg-us36">9</td>
        <td className="tg-us36">10</td>
        <td className="tg-us36">GPIO15 (RXD0)</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36" />
        <td className="tg-us36">RX_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">RTS_RPI</td>
        <td className="tg-us36">17</td>
        <td className="tg-us36">0</td>
        <td className="tg-us36">GPIO17</td>
        <td className="tg-us36">11</td>
        <td className="tg-us36">12</td>
        <td className="tg-us36">GPIO18</td>
        <td className="tg-us36">1</td>
        <td className="tg-us36">18</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">2</td>
        <td className="tg-us36">GPIO27</td>
        <td className="tg-us36">13</td>
        <td className="tg-us36">14</td>
        <td className="tg-us36">グラウンド</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">3</td>
        <td className="tg-us36">GPIO22</td>
        <td className="tg-us36">15</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36">GPIO23</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">3V3_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">3.3v DC 電源</td>
        <td className="tg-us36">17</td>
        <td className="tg-us36">18</td>
        <td className="tg-us36">GPIO24</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36" />
        <td className="tg-us36">12</td>
        <td className="tg-us36">GPIO10 (SPI0_MOSI)</td>
        <td className="tg-us36">19</td>
        <td className="tg-us36">20</td>
        <td className="tg-us36">グラウンド</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36" />
        <td className="tg-us36">13</td>
        <td className="tg-us36">GPIO09 (SPI0_MISO)</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">GPIO25 </td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36" />
        <td className="tg-us36">14</td>
        <td className="tg-us36">GPIO11 (SPI0 SCLK)</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">GPIO08 (SPI0_CS0)</td>
        <td className="tg-us36">10</td>
        <td className="tg-us36" />
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">グラウンド</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">GPIO07 (SPI0_CS1)</td>
        <td className="tg-us36">11</td>
        <td className="tg-us36" />
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36" />
        <td className="tg-us36">30</td>
        <td className="tg-us36">予約済み</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">28</td>
        <td className="tg-us36">予約済み</td>
        <td className="tg-us36">31</td>
        <td className="tg-us36" />
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">LARA_PWR</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">GPIO05</td>
        <td className="tg-us36">29</td>
        <td className="tg-us36">30</td>
        <td className="tg-us36">グラウンド</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">LARA_RST</td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">GPIO06</td>
        <td className="tg-us36">31</td>
        <td className="tg-us36">32</td>
        <td className="tg-us36">GPIO12</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">12</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">13</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">GPIO13</td>
        <td className="tg-us36">33</td>
        <td className="tg-us36">34</td>
        <td className="tg-us36">グラウンド</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">19</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">GPIO19(SPI1 MISO)</td>
        <td className="tg-us36">35</td>
        <td className="tg-us36">36</td>
        <td className="tg-us36">GPIO16(SPI1 CS0)</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36">CTS_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">GPIO26</td>
        <td className="tg-us36">37</td>
        <td className="tg-us36">38</td>
        <td className="tg-us36">GPIO20(SPI1 MOSI)</td>
        <td className="tg-us36">28</td>
        <td className="tg-us36">20</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">グラウンド</td>
        <td className="tg-us36">39</td>
        <td className="tg-us36">40</td>
        <td className="tg-us36">GPIO21(SPI1 SCLK)</td>
        <td className="tg-us36">29</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">FREE</td>
      </tr>
    </tbody></table>
</div>


**寸法**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)


<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=eeee1715-69fe-4e5e-a643-15a3c1f3510d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>


**バージョン**

現在、LTE Cat 1 Pi HATの3つのバージョンを作成しています。異なるネットワークをサポートすることを除けば、ほぼ同じです。また、ヨーロッパ版のみが2Gネットワークをサポートしていることに注意してください。

| バージョン | モジュール   | ネットワーク |
|------------|--------------|--------------|
| ヨーロッパ | LARA-R211    | 2G/4G        |
| USA-AT&T   | LARA-R203    | 4G           |
| USA-VZW    | LARA-R204    | 4G           |


## はじめに

### ハードウェア

:::note
    以下のデモでは、Raspberry Pi3と2018-04-18版の[RASPBIAN STRETCH WITH DESKTOP](https://www.raspberrypi.org/downloads/raspbian/)を使用します。
:::
- ステップ1. LTE Cat 1 Pi HATをRaspberry Piの上に積み重ね、2つのアンテナを接続します。

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

- ステップ2. マウス、キーボード、モニターも接続します。
- ステップ3. Raspberry Piに電源を入れます。

### ソフトウェア

- ステップ1. dtoverlay=pi3-disable-btを使用してRaspberry Pi3/Pi4のUART0を有効にします。

```
sudo nano /boot/config.txt
```

次に、`dtoverlay=pi3-disable-bt`と`enable_uart=1`をconfig.txtの末尾に追加します。以下のようになります。

```bash
[all]
#dtoverlay=vc4-fkms-v3d
dtoverlay=pi3-disable-bt
enable_uart=1
```

- ステップ2. UART0を使用するためにシステムサービスを無効にします。

```
sudo systemctl disable hciuart 
```

:::note
    Pi3-disable-btはBluetoothデバイスを無効にし、UART0/ttyAMA0をGPIOs 14と15に戻します。また、モデムを初期化するシステムサービスを無効にする必要があります。これによりUARTが使用されません: sudo systemctl disable hciuart。
:::

- ステップ3. cmdline.txt内のconsole=serial0,115200を削除します。

```
sudo nano /boot/cmdline.txt
```

次に、文字列からconsole=serial0,115200を削除します。

- ステップ4. Raspberry Pi3/Pi4を再起動します。

```
sudo reboot
```

- ステップ5. 以下のコマンドを実行してデモを開始します。

```
cd ~
git clone https://github.com/Seeed-Studio/ublox_lara_r2_pi_hat.git
cd ublox_lara_r2_pi_hat
sudo python setup.py install
cd test
sudo python test01.py
```

- ステップ6. 以下はターミナルからの出力です。

```
pi@raspberrypi:~/Desktop/ublox_lara_r2_pi_hat/examples $ sudo python test01.py
40-pin GPIO header detected
Enabling CTS0 and RTS0 on GPIOs 16 and 17
rts cts on
waking up...
module name:  LARA-R211
RSSI:  3
```

## FAQ

**Q1: LTE Cat 1 Pi HATとPCを直接通信できますか？**

A1: はい、2つの方法があります。一つはUSB、もう一つはUARTポートです。

- USBの場合、Pi HATをPCに直接接続するためにUSBケーブルを使用してください。その後、[u-blox Cellular USB_Windows Driver, v2.0](https://www.u-blox.com/sites/default/files/ubloxCell_usbcdc_windows_3264_v2.0.0.0.exe.zip)をダウンロードしてインストールしてください。デバイスマネージャーではCOM3とCOM4がATコマンド用に使用されます。任意のシリアルCOMモニターツールを使用してATコマンドを実行するか、Windows用評価ソフトウェア[m-center for Windows, version 1.11.0](https://www.u-blox.com/sites/default/files/products/tools/m-center-01.11.00.exe)を使用できます。

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

- UARTポートの場合、[usb to serial adaptor](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)を使用し、以下の接続を行い、ボーレートを115200に設定してください。任意のシリアルCOMモニターツールを使用してATコマンドを実行できます。

| USB to UARTアダプター | LTE Cat1 Pi HAT              |
|-----------------------|------------------------------|
| GND                   | Pin6-GND                     |
| TX                    | Pin8-TX_RPI                  |
| RX                    | Pin10-RX_RPI                 |
| NA                    | Pin11-RTS_RPI Pin9-GNDに接続 |

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/UART.png)

:::caution
    UARTポートを使用して通信する場合、上記の画像で赤でマークされたRTS_RPIをGNDに接続してください。
:::
**Q2: ATコマンドリストはありますか？**

A2: こちらにあります：[u-blox-CEL_ATCommands](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf)。

**Q3: Lara-R203/204/211の違いは何ですか？**

A3: [u-blox LARA-R2シリーズ製品ページ](https://www.u-blox.com/en/product/lara-r2-series)をご参照ください。

**Q4: LARA-203でAT&Tネットワークに登録する方法は？**

A4: 以下のコマンドを実行してください。

```
AT+COPS=2
AT+UMNOCONF=2
AT+COPS=0
```

以下のコマンドを使用してAT&Tネットワーク接続を確認できます。

```
AT+UPSD=0,1,"AT&T"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

**Q5: LARA-204でVerizonネットワークに登録する方法は？**

A5: 以下のコマンドを実行してください。

```
AT+COPS=2
AT+UMNOCONF=3
AT+COPS=0
```

以下のコマンドを使用してVerizonネットワーク接続を確認できます。

```
AT+UPSD=0,1,"vzwinternet"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

## リソース

- **[PDF]** [LTE Cat.1 Pi HAT 回路図](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LTE%20CAT.1%20Pi%20HAT%20v1.0.pdf)
- **[PDF]** [u-blox-CEL_ATコマンド](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf)
- **[PDF]** [LARA-R2 データシート](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_DataSheet_(UBX-16005783).pdf)
- **[PDF]** [LARA-R2 システム統合マニュアル](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_SysIntegrManual_(UBX-16010573).pdf)
- **[PDF]** [ATコマンド例 アプリケーションノート](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/AT-CommandsExamples_AppNote_(UBX-13001820).pdf)

この部品は [geppetto](https://geppetto.seeedstudio.com/) で利用可能です。SeeedとGeppettoを使った簡単なモジュラー電子設計。今すぐ作成しましょう。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## プロジェクト

**LTE Pi HATを使用した顔認識スマートロック**: 顔認識はますます広く利用されるようになっており、これを使ってスマートロックを作成することができます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/face-recognization-smart-lock-with-lte-pi-hat-abcec9/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>