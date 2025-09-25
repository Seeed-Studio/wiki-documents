---
description: Grove - 3軸デジタル加速度センサー(±16g)
title: Grove - 3軸デジタル加速度センサー(±16g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Digital_Accelerometer-16g
last_update:
  date: 05/15/2025
  author: shuxu hu
---


---
<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove-3-Axis_16g_v1.3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove-3-Axis_16g_v1.3.jpg" alt="pir" width={600} height="auto" /></p>


3軸デジタル加速度センサーは、方向検出、ジェスチャー検出、モーション検出などのプロジェクトにおいて重要な役割を果たします。この3軸デジタル加速度センサー(±16g)は、低消費電力IC ADXL345をベースにしています。最大10,000gの高衝撃耐性と、サンプルレートの設定が可能な特徴を持っています。大きな測定範囲を必要としない一般的なアプリケーションにおいて、このセンサーは耐久性があり、省エネルギーでコスト効率が高いため、優れた選択肢となります。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)



## 仕様
---
- 動作電圧: 3.0 - 5.5V
- 測定範囲: ±16g
- 感度: 3.9mg / LSB
- スタンバイ電流: 0.1μA（スタンバイモード時 Vcc = 2.5 V（標準値））
- 10,000gの高衝撃耐性
- ECOPACK®RoHSおよび「グリーン」準拠
- Suli互換ライブラリ

:::tip
    - Groveモジュールに関する詳細は、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::
## デモンストレーション
---
**Arduinoを使用する場合**

すべての加速度センサーは出荷前に個別にテストされています。ただし、稀にゼロオフセットを自分でリセットする必要がある場合があります。以下に、この加速度センサーから生データを読み取り、g（重力加速度）の単位でデータを取得する方法を示します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove_-_3-Axis_Digital_Accelerometer_ADXL345_connect_photo.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove_-_3-Axis_Digital_Accelerometer_ADXL345_connect_photo.JPG" alt="pir" width={600} height="auto" /></p>

- **ステップ1:** Grove - Base ShieldのI2Cポートに接続します。
- **ステップ2:** [Digital Accelerometer(±16g) Library](https://github.com/Seeed-Studio/Accelerometer_ADXL345) .zipをダウンロードし、Arduinoインストールフォルダ内のarduino-1.0\librariesに解凍します。Arduino用ライブラリのインストール方法がわからない場合は、[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。
- **ステップ3:** ライブラリがインストールされている場合、以下のパスからデモコードを直接開きます：
** File(ファイル) -> Example(例) ->DigitalAccelerometer_ADXL345->ADXL345_demo_code. **
- **ステップ4:** コードをアップロードし、シリアルモニターを開きます（通常は右上隅にあります）。アップロード方法がわからない場合は、[コードのアップロード](https://wiki.seeedstudio.com/ja/Upload_Code/)を参照してください。
- **ステップ5:** 結果は以下の画像の形式で表示されます。Groveを振ると数値が変化するのがわかります。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Digital_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Digital_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

このセンサーの出力は、生データと、重力単位「g」に変換された3軸加速度情報の2つの部分で構成されています。

### Codecraftを使って遊ぶ

#### ハードウェア

**ステップ1.** Groveケーブルを使用して、Grove - 3軸デジタル加速度センサー(±16g)をSeeeduinoのI2Cポートに接続します。Arduinoを使用する場合は、Base Shieldを利用してください。

**ステップ2.** Seeeduino/ArduinoをUSBケーブルでPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メイン手順を作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Arduinoを使用したCodecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/img/cc_3_Axis_Digital_Accelerometer.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/img/cc_3_Axis_Digital_Accelerometer.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、シリアルモニターに加速度が表示されます。
:::
**Raspberry Piを使用する場合**

- **ステップ1:** Raspberry PiとGrovePiまたはGrovePi+を用意します。

- **ステップ2:** 開発環境の設定を完了している必要があります。設定がまだの場合は、[こちら](https://wiki.seeedstudio.com/ja/GrovePi_Plus/#Introducing_the_GrovePi.2B)を参照してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9-create-tab.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9-create-tab.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9_newfile.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9_newfile.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ3:** 接続
   - Groveケーブルを使用して、センサーをGrovePiのI2Cソケット（1〜3）に接続します。

- **ステップ4:** デモのディレクトリに移動します：

```python
cd yourpath/GrovePi/Software/Python/
```
コードを確認するには以下を実行します：

```
  nano grovepi_tilt_switch.py   # "Ctrl+x"で終了 #
```

```python
import smbus
from time import sleep

# Raspberry Piのこのリビジョンに適したi2cバスを選択
revision = ([l[12:-1] for l in open('/proc/cpuinfo','r').readlines() if l[:8]=="Revision"]+['0000'])[0]
bus = smbus.SMBus(1 if int(revision, 16) >= 4 else 0)

# ADXL345定数
EARTH_GRAVITY_MS2   = 9.80665
SCALE_MULTIPLIER    = 0.004

DATA_FORMAT         = 0x31
BW_RATE             = 0x2C
POWER_CTL           = 0x2D

BW_RATE_1600HZ      = 0x0F
BW_RATE_800HZ       = 0x0E
BW_RATE_400HZ       = 0x0D
BW_RATE_200HZ       = 0x0C
BW_RATE_100HZ       = 0x0B
BW_RATE_50HZ        = 0x0A
BW_RATE_25HZ        = 0x09

RANGE_2G            = 0x00
RANGE_4G            = 0x01
RANGE_8G            = 0x02
RANGE_16G           = 0x03

MEASURE             = 0x08
AXES_DATA           = 0x32

class ADXL345:

    address = None

    def __init__(self, address = 0x53):
        self.address = address
        self.setBandwidthRate(BW_RATE_100HZ)
        self.setRange(RANGE_2G)
        self.enableMeasurement()

    def enableMeasurement(self):
        bus.write_byte_data(self.address, POWER_CTL, MEASURE)

    def setBandwidthRate(self, rate_flag):
        bus.write_byte_data(self.address, BW_RATE, rate_flag)

    # 10ビットの読み取り用に測定範囲を設定
    def setRange(self, range_flag):
        value = bus.read_byte_data(self.address, DATA_FORMAT)

        value &= ~0x0F;
        value |= range_flag;
        value |= 0x08;

        bus.write_byte_data(self.address, DATA_FORMAT, value)

    # センサーから各軸の現在の読み取り値を返す
    #
    # パラメータ gforce:
    #    False (デフォルト): 結果はm/s^2で返される
    #    True           : 結果はgsで返される
    def getAxes(self, gforce = False):
        bytes = bus.read_i2c_block_data(self.address, AXES_DATA, 6)

        x = bytes[0] | (bytes[1] << 8)
        if(x & (1 << 16 - 1)):
            x = x - (1<<16)

        y = bytes[2] | (bytes[3] << 8)
        if(y & (1 << 16 - 1)):
            y = y - (1<<16)

        z = bytes[4] | (bytes[5] << 8)
        if(z & (1 << 16 - 1)):
            z = z - (1<<16)

        x = x * SCALE_MULTIPLIER
        y = y * SCALE_MULTIPLIER
        z = z * SCALE_MULTIPLIER

        if gforce == False:
            x = x * EARTH_GRAVITY_MS2
            y = y * EARTH_GRAVITY_MS2
            z = z * EARTH_GRAVITY_MS2

        x = round(x, 4)
        y = round(y, 4)
        z = round(z, 4)

        return {"x": x, "y": y, "z": z}

if __name__ == "__main__":
    # 直接実行された場合、クラスのインスタンスを作成し、
    # 現在の読み取り値を出力する
    adxl345 = ADXL345()

    axes = adxl345.getAxes(True)
    print "ADXL345 on address 0x%x:" % (adxl345.address)
    print "   x = %.3fG" % ( axes['x'] )
    print "   y = %.3fG" % ( axes['y'] )
    print "   z = %.3fG" % ( axes['z'] )
```

5.デモを実行します。

```
    sudo python grove_tilt_switch.py
```

**Beaglebone Greenを使用する場合**

BBG上のプログラムを編集するには、Cloud9 IDEを使用できます。
Cloud9 IDEに慣れるための簡単な演習として、BeagleBoneの4つのユーザープログラム可能なLEDの1つを点滅させる簡単なアプリケーションを作成するのが良いでしょう。

Cloud9 IDEを初めて使用する場合は、以下のリンクを参照してください。

- ステップ1: Grove - UARTソケットをGrove - GPIOソケットとして設定します。以下のリンクを参照してください。

- ステップ2: 右上の"+"をクリックして新しいファイルを作成します。

- ステップ3: 以下のコードを新しいタブにコピーして貼り付けます。

```python
import smbus
import time

bus = smbus.SMBus(1)

# ADXL345デバイスアドレス
ADXL345_DEVICE = 0x53

# ADXL345定数
EARTH_GRAVITY_MS2   = 9.80665
SCALE_MULTIPLIER    = 0.004

DATA_FORMAT         = 0x31
BW_RATE             = 0x2C
POWER_CTL           = 0x2D

BW_RATE_1600HZ      = 0x0F
BW_RATE_800HZ       = 0x0E
BW_RATE_400HZ       = 0x0D
BW_RATE_200HZ       = 0x0C
BW_RATE_100HZ       = 0x0B
BW_RATE_50HZ        = 0x0A
BW_RATE_25HZ        = 0x09

RANGE_2G            = 0x00
RANGE_4G            = 0x01
RANGE_8G            = 0x02
RANGE_16G           = 0x03

MEASURE             = 0x08
AXES_DATA           = 0x32

class ADXL345:

    address = None

    def __init__(self, address = ADXL345_DEVICE):
        self.address = address
        self.setBandwidthRate(BW_RATE_100HZ)
        self.setRange(RANGE_2G)
        self.enableMeasurement()

    def enableMeasurement(self):
        bus.write_byte_data(self.address, POWER_CTL, MEASURE)

    def setBandwidthRate(self, rate_flag):
        bus.write_byte_data(self.address, BW_RATE, rate_flag)

    # 10ビットの読み取り用に測定範囲を設定
    def setRange(self, range_flag):
        value = bus.read_byte_data(self.address, DATA_FORMAT)

        value &= ~0x0F;
        value |= range_flag;
        value |= 0x08;

        bus.write_byte_data(self.address, DATA_FORMAT, value)

    # センサーから各軸の現在の読み取り値を返す
    #
    # パラメータ gforce:
    #    False (デフォルト): 結果はm/s^2で返される
    #    True           : 結果はgsで返される
    def getAxes(self, gforce = False):
        bytes = bus.read_i2c_block_data(self.address, AXES_DATA, 6)

        x = bytes[0] | (bytes[1] << 8)
        if(x & (1 << 16 - 1)):
            x = x - (1<<16)

        y = bytes[2] | (bytes[3] << 8)
        if(y & (1 << 16 - 1)):
            y = y - (1<<16)

        z = bytes[4] | (bytes[5] << 8)
        if(z & (1 << 16 - 1)):
            z = z - (1<<16)

        x = x * SCALE_MULTIPLIER
        y = y * SCALE_MULTIPLIER
        z = z * SCALE_MULTIPLIER

        if gforce == False:
            x = x * EARTH_GRAVITY_MS2
            y = y * EARTH_GRAVITY_MS2
            z = z * EARTH_GRAVITY_MS2

        x = round(x, 4)
        y = round(y, 4)
        z = round(z, 4)

        return {"x": x, "y": y, "z": z}

if __name__ == "__main__":
    # 直接実行された場合、クラスのインスタンスを作成し、
    # 現在の読み取り値を出力する
    adxl345 = ADXL345()

    while True:
        axes = adxl345.getAxes(True)
        print "ADXL345 on address 0x%x:" % (adxl345.address)
        print "   x = %.3fG" % ( axes['x'] )
        print "   y = %.3fG" % ( axes['y'] )
        print "   z = %.3fG" % ( axes['z'] )
        time.sleep(2)
```

- ステップ4: ファイルを保存するには、ディスクアイコンをクリックし、拡張子を .py にします。

- ステップ5: Grove - 3-Axis Digital Accelerometer(±16g) を BBG の Grove I2C ソケットに接続します。

- ステップ6: コードを実行します。ターミナルが2秒ごとに重力情報を出力することが確認できます。


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/202000067_PCBA-Grove-3-Axis-Digital-Accelerometer=16g-v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
- [Eagle file.zip](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/202000067_PCBA-Grove%203%20Axis%20Digital%20Accelerometer%C2%B116g%20v1.2.zip)
- [Suli互換ライブラリ](https://github.com/Seeed-Studio/ACC_Adxl345_Suli)
- [ADXL345データシート.pdf](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/res/ADXL345_datasheet.pdf)
- [3-Axis Digital Accelerometer(±16g)のGitHubリポジトリ](https://github.com/Seeed-Studio/Accelerometer_ADXL345)
- [Grove - 3-Axis Digital Accelerometer(±16g)](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/DigitalAccelerometer_ADXL345.zip)
- [Codecraft CDC ファイル](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/res/Grove_3_Axis_Digital_Acceleromete_CDC_File.zip)

## プロジェクト

**Grove - 3-Axis Digital Accelerometer の紹介**: 3軸デジタル加速度計の使用方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed' width='350'></iframe>


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