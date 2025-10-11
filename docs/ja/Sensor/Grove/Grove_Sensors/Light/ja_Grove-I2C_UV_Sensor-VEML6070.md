---
description: Grove - I2C UVセンサー (VEML6070)
title: Grove - I2C UVセンサー (VEML6070)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-I2C_UV_Sensor-VEML6070
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/perspective.jpg" /></div>

Grove - I2C UVセンサー(VEML6070)は、I2Cプロトコルインターフェースを備えた高度な紫外線(UV)光センサーです。紫外線(UV)は波長が10nmから400nmの電磁放射で、可視光より短く、X線より長いものです。このセンサーは320〜410nmの光を最も効果的に検出し、太陽紫外線の強度をデジタルデータに変換します。

このモジュールはVEML6070をベースにしており、太陽紫外線に対する線形感度を持ち、外部抵抗によって簡単に調整できます。

さらに、閾値ウィンドウ設定を伴うアクティブアクノリッジ(ACK)機能により、UVセンサーがUVIアラートメッセージを送信することが可能です。強い太陽紫外線条件下では、スマートACK信号をソフトウェアプログラミングによって簡単に実装できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 長時間の太陽紫外線曝露下での優れた紫外線測定性能
- 優れた紫外線感度と線形性
- 優れた温度補償
- 高い動的検出解像度
- アクノリッジ機能(ACK)をサポート

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|スペクトル感度範囲|320 ~ 410 nm|
|ピーク感度|355 nm|
|UVA感度|5 μW/cm2/ステップ(典型値) |
|インターフェース|I2C|
|I2Cアドレス|0x38(データLSB) / 0x39(データMSB)|

:::caution
実際には、このセンサーには3つのI2Cアドレスがあります。
:::

## 典型的な用途

- 太陽紫外線指標
- 化粧品/屋外スポーツ用携帯製品
- 消費者向け製品

## ハードウェア概要

### ピンアウト

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out_back.jpg" /></div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - I2C UV Sensor (VEML6070) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが適切かどうかわからない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - I2C UV Sensor (VEML6070) を Grove-Base Shield の **I2C** ポートに接続します。

- **ステップ 2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USBケーブルを使用して Seeeduino をPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/connect.jpg" /></div>

:::note
Grove Base Shield がない場合でも、以下のようにこのモジュールを直接 Seeeduino に接続することができます。
:::

| Seeeduino      |  Groveケーブル       | Grove - I2C UV Sensor (VEML6070) |
|--------------- |--------------------|-----|
| GND            | 黒                 | GND |
| 5V または 3.3V | 赤                 | VCC |
| SDA            | 白                 | SDA |
| SCL            | 黄                 | SCL |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [Seeed_VEML6070](https://github.com/Seeed-Studio/Seeed_VEML6070) ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。以下の3つの方法のいずれかで例を開くことができます：
    1. Arduino IDEで直接開く：**File --> Examples --> Seeed_VEML6070 --> INT_mode** のパスをたどります。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_1.jpg" /></div>

    2. コンピュータ上で開く：**XXXX\Arduino\libraries\Seeed_VEML6070-master\examples\INT_mode** フォルダ内にある **INT_mode.ino** をクリックします（**XXXX** はArduino IDEをインストールした場所です）。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_2.jpg" /></div>

    3. または、以下のコードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp
#include "Seeed_VEML6070.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

VEML6070 sensor;

char *UV_str[]={"低レベル","中程度のレベル","高レベル","非常に高い","極端"};

err_t read_UV()
{
    err_t ret=NO_ERROR;
    u16 step;
    sensor.wait_for_ready();
    CHECK_RESULT(ret,sensor.read_step(step));
    SERIAL.print("UVステップ = ");
    SERIAL.println(step);
    RISK_LEVEL level=sensor.convert_to_risk_level(step);
    SERIAL.print("UVレベルは ");
    SERIAL.println(UV_str[level]);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    return ret;
}



void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("シリアル開始!!");
    delay(1000);
    if(sensor.init())
    {
      SERIAL.println("初期化失敗!!!");
    }
    /*しきい値は145ステップ*/
    /*有効化*/
    sensor.set_interrupt(INT_145_STEP,ENABLE);
}


void loop()
{
    if(read_UV())
    {
      SERIAL.print("UVセンサーの読み取りに失敗しました!!");
    }
    //sensor.enable();
    //sensor.disable();
    delay(1000);
}
```

:::note
**ライブラリには2つのデモがあります：**  
**basic_demo.ino**  
        >この例では、シリアルからUVインデックスとUVレベルを取得できます。データのポーリングを行います。

**INT_mode.ino**  
        >センサーモジュールにはINTパッドがあり、VEML6070のACKピンに接続されています。UVしきい値を102ステップまたは145ステップ（2つの選択肢のみ）に設定できます。UV値が制限を超えると、INTピンは低出力を出します。INTピンをホストの割り込みピンに接続することで、プログラムの動作効率を向上させることができます。  
:::

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDEの**シリアルモニター**を開きます。**Tool-> Serial Monitor** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **115200** に設定します。

:::tip
すべてが正常に動作している場合、UV光をこのモジュールに照射すると、以下のような情報が表示されます：
:::

```
4シリアル開始!!
cmd reg=32
UVステップ = 20
UVレベルは低レベル
 
 
 
UVステップ = 125
UVレベルは低レベル
 
 
 
UVステップ = 511
UVレベルは低レベル

```

#### アラート機能

ハードウェア概要の部分で確認できるように、ACKピンは割り込み信号として機能するために使用できます。良いニュースとしては、102ステップと145ステップの2つの閾値を選択できることです。悪いニュースとしては、独自の数値を設定することはできず、102と145のみが有効です。ACKピンはデフォルトでLowを出力し、設定した閾値をUV値が超えるとACKピンがHighを出力します。それでは、例のコード **INT_mode.ino** に戻りましょう。

46行目では、デフォルトの閾値設定が145になっています。102を使用したい場合は、以下のようにコードを変更してください：

```cxx title="old.ino"
sensor.set_interrupt(INT_145_STEP,ENABLE); // この行を変更
```

```cxx title="modify.ino"
sensor.set_interrupt(INT_102_STEP,ENABLE); // 修正済み
```

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - I2C UV Sensor (VEML6070) |
|--------------|---------------------------|----------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html)|

- **ステップ 2**. Grove Base HatをRaspberry Piに接続します。
- **ステップ 3**. Grove - I2C UV Sensor (VEML6070)をBase Hatの**I2C**ポートに接続します。
- **ステップ 4**. USBケーブルを使用してRaspberry PiをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/UV_Hat.jpg" /></div>

#### ソフトウェア

- **ステップ 1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成し、grove.pyをRaspberry Piにインストールします。
- **ステップ 2**. 以下のコマンドを実行してコードを実行します。

```
# Python3用のvirtualenv
virtualenv -p python3 env
source env/bin/activate
# コマンドを入力
grove_uv_sensor
```

以下はgrove_uv_sensor.pyのコードです。

```python
from __future__ import print_function
from grove.i2c import Bus
import time


# デバイスのI2Cアドレス
VEML6070_DEFAULT_ADDRESS				= 0x38

# VEML6070コマンドセット
VEML6070_CMD_ACK_DISABLE				= 0x00 # ACK無効
VEML6070_CMD_ACK_ENABLE					= 0x20 # ACK有効
VEML6070_CMD_ACK_THD_102				= 0x00 # ACK閾値102ステップ
VEML6070_CMD_ACK_THD_145				= 0x10 # ACK閾値145ステップ
VEML6070_CMD_IT_1_2T					= 0x00 # 統合時間 = 1/2T
VEML6070_CMD_IT_1T						= 0x04 # 統合時間 = 1T
VEML6070_CMD_IT_2T						= 0x08 # 統合時間 = 2T
VEML6070_CMD_IT_4T						= 0x0C # 統合時間 = 4T
VEML6070_CMD_RESERVED					= 0x02 # 予約済み、1に設定
VEML6070_CMD_SD_DISABLE					= 0x00 # シャットダウン無効
VEML6070_CMD_SD_ENABLE					= 0x01 # シャットダウン有効
VEML6070_CMD_READ_LSB					= 0x38 # データのLSBを読み取る
VEML6070_CMD_READ_MSB					= 0x39 # データのMSBを読み取る

class VEML6070():
	def __init__(self, address = VEML6070_DEFAULT_ADDRESS):
		self._addr = address
		self._bus  = Bus()
		self.write_command()
	
	def write_command(self):
		"""提供された値からUVライトコマンドを選択"""
		COMMAND_CONFIG = (VEML6070_CMD_ACK_DISABLE | VEML6070_CMD_IT_1_2T | VEML6070_CMD_SD_DISABLE | VEML6070_CMD_RESERVED)
		self._bus.write_byte(VEML6070_DEFAULT_ADDRESS, COMMAND_CONFIG)
	
	def read_uvlight(self):
		"""データを読み取る VEML6070_CMD_READ_MSB(0x73) と VEML6070_CMD_READ_LSB(0x71), uvlight MSB, uvlight LSB"""
		data0 = self._bus.read_byte(VEML6070_CMD_READ_MSB)
		data1 = self._bus.read_byte(VEML6070_CMD_READ_LSB)
		
		# データを変換
		uvlight = data0 * 256 + data1
		
		return {'u' : uvlight}


def main():

	veml6070 = VEML6070()

	## 終了ハンドラ ##
	# この関数は、control-Cを押したときにPythonがスタックトレースを表示するのを防ぎます
	def SIGINTHandler(signum, frame):
		raise SystemExit

	# この関数は、終了時にコードを実行できるようにします
	def exitHandler():
		print("終了します")
		sys.exit(0)
	
	while True:
		light = veml6070.read_uvlight()
		print("UV値: {0}".format(light['u']))
		print(" *********************************** ")
		time.sleep(1)

if __name__ == '__main__':
	main()
```

:::tip
すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python

(env)pi@raspberrypi:~ grove_uv_sensor
UV値: 0
UV値: 0
UV値: 0
UV値: 0
^C終了します

```

このプログラムは、`ctrl`+`c`を押すだけで終了できます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - I2C UVセンサー (VEML6070) Eagleファイル](https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip)

- **[Zip]** [Seeed VEML6070ライブラリ](https://github.com/Seeed-Studio/Seeed_VEML6070/archive/master.zip)

- **[PDF]** [VEML6070データシート](https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/VEML6070.pdf)

- **[PDF]** [VEML6070アプリケーションノート](https://github.com/Seeed-Studio/Seeed_VEML6070/raw/master/doc/designingveml6070.pdf)

## プロジェクト

こちらはこの製品の紹介ビデオです。簡単なデモが含まれており、ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>