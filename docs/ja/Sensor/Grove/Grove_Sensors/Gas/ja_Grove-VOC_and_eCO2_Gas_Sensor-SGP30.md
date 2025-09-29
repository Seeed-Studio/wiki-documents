---
description: Grove-VOCおよびeCO2ガスセンサー(SGP30)
title: Grove-VOCおよびeCO2ガスセンサー(SGP30)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-VOC_and_eCO2_Gas_Sensor-SGP30
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg" alt="pir" width={600} height="auto" /></p>

Grove-VOCおよびeCO2ガスセンサー(SGP30)は、空気品質を検出するセンサーです。このGroveモジュールはSGP30をベースにしており、TVOC（総揮発性有機化合物）およびCO2eqの出力を提供します。

SGP30は、空気清浄機、需要制御換気、およびIoTアプリケーションへの簡単な統合を目的としたデジタルマルチピクセルガスセンサーです。SensirionのCMOSens®技術は、デジタルI2Cインターフェース、温度制御マイクロホットプレート、および2つの事前処理された室内空気品質信号を備えた単一チップ上の完全なセンサーシステムを提供します。複数のセンサー要素を1つのチップに搭載した初の金属酸化物ガスセンサーとして、SGP30は空気品質に関するより詳細な情報を提供します。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::tip
[Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶのに役立ちます。
:::

## 産業用センサーへのアップグレード可能
SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気品質モニタリングのための高性能で堅牢なS2103ワイヤレスCO2、温度、湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、および8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
          <strong>S2103 空気温度 &amp; 湿度 &amp; CO2</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

- 室内空気質アプリケーション向けのマルチピクセルガスセンサー
- 優れた長期安定性
- TVOCおよびCO2eq出力信号を備えたI2Cインターフェース
- 低消費電力
- チップモジュールはテープ＆リールでパッケージ化され、リフローはんだ付け可能


## 仕様

<table border="2" colspan="tg" style={{ width: 529}}>
  <colgroup>
    <col style={{width: 143}}/>
    <col style={{width: 98}}/>
    <col style={{width: 288}}/>
  </colgroup>
  <tr>
    <th colspan="tg-xf7g">パラメータ</th>
    <th colspan="tg-xf7g">信号</th>
    <th colspan="tg-xf7g">値</th>
  </tr>
  <tr>
    <td colspan="tg-f5ry">動作電圧</td>
    <td colspan="tg-f5ry" colspan="1">                   3.3V/5V</td>
  </tr>
  <tr>
    <td colspan="tg-f5ry" rowspan="2">出力範囲</td>
    <td colspan="tg-f5ry">TVOC</td>
    <td colspan="tg-28l8" >  0 ppb ～ 60000 ppb </td>>
  </tr>
  <tr>
    <td colspan="tg-eh2d">CO₂eq</td>
    <td colspan="tg-3xi5">    400 ppm ～ 60000 ppm</td>
  </tr>
   <tr>
    <td colspan="tg-f5ry" rowspan="2">サンプリング 
    レート</td>
    <td colspan="tg-eh2d">TVOC</td>
    <td colspan="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td colspan="tg-eh2d">CO₂eq</td>
    <td colspan="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td colspan="tg-3we0"
    rowspan="7">解像度</td>
    <td colspan="tg-3we0" rowspan="3">TVOC</td>
    <td colspan="tg-i81m">0 ～ 2008 ppb / 1 ppb</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">2008 ～ 11110 ppb / 6 ppb</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">11110 ～ 60000 ppb / 32 ppb</td>
  </tr>
  <tr>
    <td colspan="tg-3we0" rowspan="4">CO₂eq</td>
    <td colspan="tg-i81m">400 ～ 1479 ppm / 1 ppm</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">1479 ～ 5144 ppm / 3 ppm</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">5144 ～ 17597 ppm / 9 ppm</td>
  </tr>
  <tr>
    <td colspan="tg-i81m">17597 ～ 60000 ppm / 31 ppm</td>
  </tr>
  <tr>
    <td colspan="tg-3we0">デフォルトI2Cアドレス</td>
    <td colspan="tg-i81m" colspan="1">0X58</td>
  </tr>
</table>

## 応用例

- 空気清浄機
- 需要制御型換気
- IoTアプリケーション
- 新築住宅の空気状態モニタリング


## ハードウェア概要

### ピンマップ

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg" alt="pir" width={600} height="auto" /></p>


### 回路図

**電源**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg" alt="pir" width={600} height="auto" /></p>

SGP30の標準動作電圧は1.8Vです。安定した3.3VをMCP9600に供給するために、電源変換チップ *XC6206P182MR* を使用しています。


**双方向レベルシフター回路**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg" alt="pir" width={600} height="auto" /></p>


これは、I<sup>2</sup>Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは1.8Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vまたは3.3Vを使用する場合、この回路が必要になります。上記の回路図では、**Q7**と**Q8**はNチャネルMOSFET [BSS138LT3G](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf)で、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。



## 対応プラットフォーム
<!-- 

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのハードウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | ベースシールド | Grove-VOCおよびeCO2ガスセンサー(SGP30) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
    
    **2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove-VOCおよびeCO2ガスセンサー(SGP30)をGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove-Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Grove Base Shieldがない場合でも、以下のようにGrove-VOCおよびeCO2ガスセンサー(SGP30)をSeeeduinoに直接接続することができます。
:::

| Seeeduino     | Grove-VOCおよびeCO2ガスセンサー(SGP30) |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| SDA           | 白                     |
| SCL           | 黄                     |

#### ソフトウェア

- **ステップ1.** [Seeed SGP30ライブラリ](https://github.com/Seeed-Studio/SGP30_Gas_Sensor)をGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** ダウンロードした`SGP30_Gas_Sensor-master.zip`を解凍すると、`examples`フォルダ内に3つのサブフォルダが表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png" alt="pir" width={600} height="auto" /></p>

`absolute_humidity_example`は外部湿度センサーのキャリブレーションが必要です。

`base_example`はキャリブレーションなしでデータを単純に収集します。

`baseline_operation_example`はデータベース値をフラッシュに保存できます。このソフトウェアは自動的にベース値を収集し、それを保存します。

`baseline_operation_example`を使用することをお勧めします。その後、`xxx.ino`ファイルをクリックして例を開きます。

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニター**を開きます。**ツール->シリアルモニター**をクリックするか、++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、結果が表示されます。

結果は以下のようになります：

```
318
tVOC  濃度:74ppb
CO2eq 濃度:506ppm
319
tVOC  濃度:80ppb
CO2eq 濃度:509ppm
320
tVOC  濃度:66ppb
CO2eq 濃度:500ppm
321
tVOC  濃度:69ppb
CO2eq 濃度:511ppm
322
tVOC  濃度:70ppb
CO2eq 濃度:511ppm
323
tVOC  濃度:60ppb
CO2eq 濃度:493ppm
324
tVOC  濃度:72ppb
CO2eq 濃度:502ppm
```

:::tip
        1- ppm: 百万分率。1 ppm = 1000 ppb (十億分率)
        
        2- 結果は`baseline_operation_example.ino`に基づいています。

        3- このデモはオフィスルームでテストしました。テスト環境によって結果は異なる場合があります。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi| Grove-VOCおよびeCO2ガスセンサー(SGP30)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html)|

- **ステップ2.** Grove Base HatをRaspberry Piに差し込みます。
- **ステップ3.** Grove-VOCおよびeCO2ガスセンサー(SGP30)をBase HatのI2Cポートに接続します。
- **ステップ4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note

     **Raspberry Pi OS >= Bullseye** を搭載した **Raspberry Pi** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

- **ステップ 1**. [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を構成します。
- **ステップ 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_Python_SGP30.git

```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
cd Seeed_Python_SGP30
sudo python3 setup.py install
cd examples
python3 sgp30_simpleread.py
```

**エラー**

いくつかのエラーが発生する可能性がありますが、心配する必要はありません。

エラーファイルのパスをコピーします。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png" alt="pir" width={600} height="auto" /></p>

以下は例として表示されるパスです: “/usr/local/lib/python3.7/dist-packages/sgp30-0.1.6-py3.7.egg/sgp30"

"cd" コマンドを使用してそのパスに移動し、コンパイラを使用して "sgp30.py" のコードを変更します。例えば: “sudo nano sgp30.py”。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png" alt="pir" width={600} height="auto" /></p>

2行目の "SMBusWrapper" を削除して保存します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png" alt="pir" width={600} height="auto" /></p>

“Seeed_Python_SGP30/examples” フォルダに戻り、"python3 sgp30_simpleread.py" を適用すると、すべてが正常に動作します。

以下は sgp30_simpleread.py のコードです。

```python
import seeed_sgp30
from grove.i2c import Bus

sgp30 = seeed_sgp30.grove_sgp30(Bus())
while True:
  data = sgp30.read_measurements()
  co2_eq_ppm, tvoc_ppb = data.data
  print("\r  tVOC = {} ppb CO2eq = {}  ".format(
                               tvoc_ppb, co2_eq_ppm))
```

:::success
    すべてが正常に動作すれば、以下のような結果が表示されます。
:::   
```python

pi@raspberrypi:~/Seeed_Python_SGP30/examples $ python3 sgp30_simpleread.py
  tVOC = 9 ppb CO2eq = 943  
  tVOC = 9 ppb CO2eq = 931  
  tVOC = 10 ppb CO2eq = 920  
  tVOC = 14 ppb CO2eq = 904  
  tVOC = 12 ppb CO2eq = 888  
  tVOC = 13 ppb CO2eq = 873  
  tVOC = 11 ppb CO2eq = 865  
  tVOC = 11 ppb CO2eq = 842  
  tVOC = 9 ppb CO2eq = 828  
  tVOC = 10 ppb CO2eq = 814  
  tVOC = 11 ppb CO2eq = 794  
  tVOC = 14 ppb CO2eq = 786  
  tVOC = 9 ppb CO2eq = 764  
  tVOC = 12 ppb CO2eq = 744  
  tVOC = 11 ppb CO2eq = 739  
  tVOC = 12 ppb CO2eq = 715  
  tVOC = 15 ppb CO2eq = 688  
  tVOC = 13 ppb CO2eq = 669  

```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

## 注意事項

- SGP30は動的なベースライン補正アルゴリズムとオンチップキャリブレーションパラメータを使用して、2つの補完的な空気質信号を提供します。ベースラインはEEPROMに保存する必要があります。初回の電源投入時にEEPROMにベースライン値がない場合、またはベースライン記録が7日以上古い場合、センサーはベースラインを保存できるようになるまで12時間動作させる必要があります。以下のプログラムフローチャートを参照してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png" alt="pir" width={600} height="auto" /></p>

- H2_SignalとEthanol_signalの両方の信号を使用して、基準濃度 cref に対するガス濃度 c を次の式で計算できます：  
  ln(C/Cref) = (Sref - Sout) / a  
  ここで、a = 512、sref は基準濃度での H2_signal または Ethanol_signal の出力、sout は Sout_H2 または Sout_EthOH です。

- より正確な測定を行うために、絶対湿度補正を設定することができます。デフォルト値は11.57g/m³です。ただし、SGP30には湿度測定部分が統合されていないため、環境の相対湿度値を別の方法で取得する必要があります。これは少し手間がかかります。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png" alt="pir" width={600} height="auto" /></p>

幸いなことに、通常の状況ではそれほど必要ではありません。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-VOC and eCO2 Gas Sensor(SGP30) eagleファイル](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip)
- **[PDF]** [SGP30 データシート](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)
- **[PDF]** [BSS138L データシート](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf)
- **[PDF]** [SGP30 ドライバー統合ガイド HW I2C](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Driver-Integration-Guide_HW_I2C.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>