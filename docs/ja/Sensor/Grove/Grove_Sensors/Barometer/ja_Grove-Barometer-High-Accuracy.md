---
description: Grove - 気圧計（高精度）
title: Grove - 気圧計（高精度）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.webp
slug: /ja/Grove-Barometer-High-Accuracy
last_update:
  date: 05/15/2025
  author: carla guo
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" alt="pir" width={600} height="auto" /></p>

この Grove - 気圧計（高精度）センサーは、HP206F 高精度チップを搭載しており、気圧、高度計、および温度を検出します。300mbar～1200mbar の範囲で広く測定可能で、測定時の分解能は 0.02mbar です。
このチップは 1.8V～3.6V の入力電圧のみを受け付けますが、外部回路を追加することで、このモジュールは 3.3V および 5V に対応します。そのため、Arduino/Seeeduino または Seeeduino Stalker で修正なしで使用できます。このモジュールは I2C バスを介してマイクロコントローラーに直接接続するよう設計されています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入 </font></span></strong></a>
</div>

## 特徴

-   デジタル 2 線式（I2C）インターフェース
-   コマンドベースの読み取り、補正済み（オプション）
-   プログラム可能なイベントおよび割り込み制御
-   完全なデータ補正
-   広い気圧測定範囲
-   柔軟な供給電圧範囲
-   超低消費電力
-   高度分解能 0.01 メートルまで
-   温度測定を含む
-   I2C アドレス: 0x76

:::note
    複数の I2C デバイスを使用したい場合は、[ソフトウェア I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/) を参照してください。
:::
:::tip
    Grove モジュールの詳細については、[Grove システム](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 応用例

-   高精度モバイル高度計 / 気圧計
-   産業用圧力および温度センサーシステム
-   自動車システム
-   個人用電子機器の高度測定
-   冒険およびスポーツ用時計
-   医療用ガス制御システム
-   気象観測機器
-   屋内ナビゲーションおよび地図支援
-   暖房、換気、空調

## 仕様

<div class="table-center">
<table align="center">
	<tr>
	    <th style={{width:300, height:'auto'}}>パラメータ</th>
      <th style={{width:300, height:'auto'}}>説明</th>
	</tr>
  <tr>
    <td>供給電圧</td>
    <td>1.8v～3.6v</td>
  </tr>
  <tr>
    <td>動作温度範囲</td>
    <td>-40℃～85℃</td>
  </tr>
  <tr>
    <td>気圧測定範囲</td>
    <td>300mbar～1200mbar</td>
  </tr>
  <tr>
    <td>気圧分解能</td>
    <td>0.02mbar</td>
  </tr>
  <tr>
    <td>高度分解能</td>
    <td>0.2m</td>
  </tr>
  <tr>
    <td>寸法</td>
    <td>20.4 × 41.8 × 9.7 mm</td>
  </tr>
</table></div>

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応しているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg) -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg" style={{width:700, height:'auto'}}/></div>

## はじめに

### Arduinoで遊ぶ

気圧条件は、天候の変化や海抜高度を予測するための基準の1つです。ここでは、このGrove - Barometerセンサーから気圧データを読み取る方法を示すデモを紹介します。

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.2</th>
			<th>Base Shield</th>
			<th>Grove-Barometer-High-Accuracy</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **ステップ2.** Grove-Barometer-High-AccuracyをGrove-Base Shieldの**I2C**ポートに接続します。
- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldがない場合、このモジュールを以下のようにSeeeduinoに直接接続することもできます。
:::
<!--I2C-->
| seeeduino_v4 | Grove-Barometer-High-Accuracy  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### ソフトウェア

**ステップ1.** [ライブラリ](https://github.com/Seeed-Studio/Grove_Barometer_HP20x)をGithubからダウンロードします。

**ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

**ステップ3.** 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、次のパスから直接コードを開きます：File -> Example -> Grove barometer HP20x -> HP20x_demo。

以下がコードです：

```c
/*
* デモ名  : HP20x_dev demo
* 使用方法: I2C 高精度気圧計および高度計 [HP206F hopeRF]
* 作成者  : Oliver Wang from Seeed Studio
* バージョン: V0.2
* 変更履歴: カルマンフィルタを追加 2014/04/04
             チップをHP206Fに更新 2025/04/07
*/

#include <HP20x_dev.h>
#include <KalmanFilter.h>

#include "Arduino.h"
#include "Wire.h"

unsigned char ret = 0;

    /* インスタンス */
KalmanFilter t_filter;    // 温度フィルタ
KalmanFilter p_filter;    // 気圧フィルタ
KalmanFilter a_filter;    // 高度フィルタ

void setup()
{
    Serial.begin(9600);        // 出力用シリアル開始

    Serial.println("****HP20x_dev demo by seeed studio****\n");
    Serial.println("計算式: H = [8.5(101325-P)]/100 \n");
      /* 電源オン、150ms待機、電圧が安定するまで */
    delay(150);
      /* HP20x_devをリセット */
    HP20x.begin();
    delay(100);

      /* HP20x_devが利用可能かどうかを確認 */
    ret = HP20x.isAvailable();
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("HP20x_devは利用可能です。\n");
    }
    else
    {
        Serial.println("HP20x_devは利用できません。\n");
    }
}

void loop()
{
    char display[40];
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("------------------\n");
        long Temper = HP20x.ReadTemperature();
        Serial.println("温度:");
        float t = Temper/100.0;
        Serial.print(t);
        Serial.println("C.\n");
        Serial.println("フィルタ:");
        Serial.print(t_filter.Filter(t));
        Serial.println("C.\n");

        long Pressure = HP20x.ReadPressure();
        Serial.println("気圧:");
        t = Pressure/100.0;
        Serial.print(t);
        Serial.println("hPa.\n");
        Serial.println("フィルタ:");
        Serial.print(p_filter.Filter(t));
        Serial.println("hPa\n");

        long Altitude = HP20x.ReadAltitude();
        Serial.println("高度:");
        t = Altitude/100.0;
        Serial.print(t);
        Serial.println("m.\n");
        Serial.println("フィルタ:");
        Serial.print(a_filter.Filter(t));
        Serial.println("m.\n");
        Serial.println("------------------\n");
        delay(1000);
    }
}
```

**ステップ4.** シリアルモニターを開き、温度、気圧値、相対気圧、そして高度を含むセンサーのデータを受信します。

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

<div class="table-center">
	<table align="center">
		<tr>
			<th>Raspberry Pi</th>
			<th>Grove Base Hat for Raspberry Pi</th>
			<th>Grove-Barometer-High-Accuracy</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **ステップ 2.** Grove Base Hat for Raspberry Pi を Raspberry Pi に接続します。
- **ステップ 3.** Grove-Barometer-High-Accuracy を Grove Base Hat for Raspberry Pi の **I2C** ポートに接続します。
- **ステップ 4.** USB ケーブルを使用して Raspberry Pi を PC に接続します。

<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#install-dependencies) に従って開発環境を設定し、依存関係をインストールします。

- **ステップ 2.** GitHub リポジトリをクローンします。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

- **ステップ 3.** 以下のコマンドを実行して、このセンサーを使用します。

```bash
sudo apt install python3-virtualenv
virtualenv -p python3 env
source env/bin/activate
cd ./grove.py/grove
python3 grove_i2c_hp206f_driver.py
```

以下はコードです：

```python
#!/usr/bin/env python
#
# Grove - HP20x センサー（温度、気圧、高度を測定するためのライブラリ）
#
# Raspberry Pi 用 Grove Base Hat に対応するライブラリです。
#

'''
## ライセンス

MIT ライセンス (MIT)

Raspberry Pi 用 Grove Base Hat、Grove センサーを接続するために使用されます。
Copyright (C) [Your Company Name or Relevant Party] 

本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得したすべての人に対し、ソフトウェアを制限なく使用、コピー、修正、結合、公開、配布、サブライセンス、および/または販売する権利を無償で許可します。また、ソフトウェアが提供される人に以下の条件の下で許可されます：

上記の著作権表示および本許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。

本ソフトウェアは「現状のまま」提供され、いかなる種類の保証もありません。明示的または黙示的を問わず、商品性、特定目的への適合性、および非侵害性を含むがこれに限定されない保証もありません。いかなる場合も、著作者または著作権者は、契約、不法行為、またはその他の行為に基づくか否かを問わず、本ソフトウェアまたはその使用またはその他の取引に起因する請求、損害、またはその他の責任について責任を負いません。
'''

import time
from grove.i2c import Bus

# HP20x センサーとやり取りするためのクラス
class HP20x:
    def __init__(self):
        # Raspberry Pi 上の I2C バス（バス 1）を初期化
        self.bus = Bus()
        # HP206F センサーの I2C アドレス（実際の状況に応じて調整が必要な場合があります）
        self.address = 0x76

        # CSB ピンが VDD レベルの場合の I2C デバイス ID（アドレスは 0x76）
        self.HP20X_I2C_DEV_ID = (0xEC) >> 1
        # CSB ピンが GND レベルの場合の I2C デバイス ID（アドレスは 0x77）
        self.HP20X_I2C_DEV_ID2 = (0XEE) >> 1
        # HP20x センサーのソフトリセットコマンド
        self.HP20X_SOFT_RST = 0x06
        # HP20x センサーの変換コマンド
        self.HP20X_WR_CONVERT_CMD = 0x40
        # 変換のための異なるオーバーサンプリングレート（OSR）設定
        self.HP20X_CONVERT_OSR4096 = 0 << 2
        self.HP20X_CONVERT_OSR2048 = 1 << 2
        self.HP20X_CONVERT_OSR1024 = 2 << 2
        self.HP20X_CONVERT_OSR512 = 3 << 2
        self.HP20X_CONVERT_OSR256 = 4 << 2
        self.HP20X_CONVERT_OSR128 = 5 << 2

        # 気圧、標高、温度などを読み取るためのコマンド
        self.HP20X_READ_P = 0x30  # 気圧読み取りコマンド
        self.HP20X_READ_A = 0x31  # 標高読み取りコマンド
        self.HP20X_READ_T = 0x32  # 温度読み取りコマンド
        self.HP20X_READ_PT = 0x10  # 気圧と温度読み取りコマンド
        self.HP20X_READ_AT = 0x11  # 標高と温度読み取りコマンド
        self.HP20X_READ_CAL = 0X28  # 再キャリブレーションコマンド

        # HP20x センサーのレジスタ書き込みモード
        self.HP20X_WR_REG_MODE = 0xC0
        # HP20x センサーのレジスタ読み取りモード
        self.HP20X_RD_REG_MODE = 0x80

        # オーバーサンプリングレート設定を指定
        self.OSR_CFG = self.HP20X_CONVERT_OSR1024
        # オーバーサンプリングレートに対応する変換時間（ミリ秒単位）
        self.OSR_ConvertTime = 25

    def begin(self):
        # HP20x センサーにソフトリセットコマンドを送信
        self.HP20X_IIC_WriteCmd(self.HP20X_SOFT_RST)
        # リセット操作が完了するまで 0.1 秒待機
        time.sleep(0.1)

    def isAvailable(self):
        # HP20x センサーが利用可能かどうかを確認（アドレス 0x0F のレジスタを読み取る）
        return self.HP20X_IIC_ReadReg(0x0F)

    def ReadTemperature(self):
        # 指定されたオーバーサンプリングレート設定で変換コマンドを送信
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # 変換時間（秒単位に変換）を待機
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # センサーから 3 バイトの生温度データを読み取る
        t_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_T, 3)
        # 3 バイトのデータを結合して 1 つの値にする
        t = t_raw[0] << 16 | t_raw[1] << 8 | t_raw[2]
        # 負の値を 2 の補数で処理
        if t & 0x800000:
            t |= 0xff000000
            us = (1 << 32)
            t = -1 * (us - t)
        # 温度値を摂氏（100 で割る）で返す
        return t / 100.0

    def ReadPressure(self):
        # 指定されたオーバーサンプリングレート設定で変換コマンドを送信
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # 変換時間（秒単位に変換）を待機
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # センサーから 3 バイトの生気圧データを読み取る
        p_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_P, 3)
        # 3 バイトのデータを結合して 1 つの値にする
        p = p_raw[0] << 16 | p_raw[1] << 8 | p_raw[2]
        # 負の値を 2 の補数で処理
        if p & 0x800000:
            p |= 0xff000000
        # 気圧値をヘクトパスカル（100 で割る）で返す
        return p / 100.0

    def ReadAltitude(self):
        # 指定されたオーバーサンプリングレート設定で変換コマンドを送信
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # 変換時間（秒単位に変換）を待機
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # センサーから 3 バイトの生標高データを読み取る
        a_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_A, 3)
        # 3 バイトのデータを結合して 1 つの値にする
        a = a_raw[0] << 16 | a_raw[1] << 8 | a_raw[2]
        # 負の値を 2 の補数で処理
        if a & 0x800000:
            a |= 0xff000000
            us = (1 << 32)
            a = -1 * (us - a)
        # 標高値をメートル（100 で割る）で返す
        return a / 100.0

    def HP20X_IIC_WriteCmd(self, uCmd):
        # 指定された I2C アドレスにコマンドバイトを書き込む
        self.bus.write_byte(self.address, uCmd)

    def HP20X_IIC_ReadReg(self, bReg):
        # 指定されたレジスタアドレスから 1 バイトを読み取る
        return self.bus.read_byte_data(self.address, bReg | self.HP20X_RD_REG_MODE)


# カルマンフィルタを表すクラス
class KalmanFilter:
    def __init__(self):
        # プロセスノイズ共分散
        self.q = 0.01
        # 測定ノイズ共分散
        self.r = 0.1
        # 初期推定値
        self.x = 0
        # 初期推定誤差共分散
        self.p = 1
        # 初期カルマンゲイン
        self.k = 0

    def Filter(self, measurement):
        # 予測ステップ：推定誤差共分散を更新
        self.p = self.p + self.q
        # 更新ステップ：カルマンゲインを計算
        self.k = self.p / (self.p + self.r)
        # 更新ステップ：測定値に基づいて推定値を更新
        self.x = self.x + self.k * (measurement - self.x)
        # 更新ステップ：推定誤差共分散を更新
        self.p = (1 - self.k) * self.p
        # フィルタリングされた推定値を返す
        return self.x


# 温度データ用のカルマンフィルタ
t_filter = KalmanFilter()
# 気圧データ用のカルマンフィルタ
p_filter = KalmanFilter()
# 標高データ用のカルマンフィルタ
a_filter = KalmanFilter()

# HP20x センサーのインスタンスを作成
hp20x = HP20x()


# セットアッププロセスをシミュレートする関数
def setup():
    print("****HP20x_dev demo by seeed studio****\n")
    print("計算式: H = [8.5(101325-P)]/100 \n")
    # 電源投入後 0.15 秒待機して電圧を安定させる
    time.sleep(0.15)
    # HP20x センサーを初期化
    hp20x.begin()
    # 0.1 秒待機
    time.sleep(0.1)
    # HP20x センサーが利用可能かどうかを確認
    ret = hp20x.isAvailable()
    if ret:
        print("HP20x_dev は利用可能です。\n")
    else:
        print("HP20x_dev は利用できません。\n")
    return ret


# ループプロセスをシミュレートする関数
def loop(ret):
    if ret:
        while True:
            print("------------------\n")
            # HP20x センサーから温度値を読み取る
            temper = hp20x.ReadTemperature()
            print("温度:")
            print(f"{temper}C.\n")
            print("フィルタ:")
            # 温度値にカルマンフィルタを適用
            print(f"{t_filter.Filter(temper)}C.\n")

            # HP20x センサーから気圧値を読み取る
            pressure = hp20x.ReadPressure()
            print("気圧:")
            print(f"{pressure}hPa.\n")
            print("フィルタ:")
            # 気圧値にカルマンフィルタを適用
            print(f"{p_filter.Filter(pressure)}hPa\n")

            # HP20x センサーから標高値を読み取る
            altitude = hp20x.ReadAltitude()
            print("標高:")
            print(f"{altitude}m.\n")
            print("フィルタ:")
            # 標高値にカルマンフィルタを適用
            print(f"{a_filter.Filter(altitude)}m.\n")
            print("------------------\n")
            # 次の読み取りまで 1 秒待機
            time.sleep(1)


if __name__ == "__main__":
    # セットアッププロセスを実行
    ret = setup()
    # センサーが利用可能であればループプロセスを開始
    loop(ret)

```


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

-  **[Eagle]** [Grove_Barometer_High-Accuracy_v1.0_sch_pcb Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_ v1.0_sch_pcb.zip)
-  **[データシート]** [HP206F データシート](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/HP206F_Datasheet.pdf)
-  **[ライブラリ]** [Arduino 用 Grove_Barometer_HP20x の Github リポジトリ](https://github.com/Carla-Guo/Grove_Barometer_HP20x)

## プロジェクト

**スマート作物**: 従来の農業に IoT を導入！
私たちの自然との使命はそれを保護することです。IoT を活用して技術と監視方法を設計・実装します。Helium を通じて。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能
SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして APP からの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x を試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

