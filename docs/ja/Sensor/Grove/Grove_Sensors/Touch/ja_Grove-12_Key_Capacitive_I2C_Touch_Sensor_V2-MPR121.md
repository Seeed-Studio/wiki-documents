---
description: Grove - 12キー静電容量式I2CタッチセンサーV2 (MPR121)
title: Grove - 12キー静電容量式I2CタッチセンサーV2 (MPR121)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/main.jpg)

**Grove - 12キー静電容量式I2CタッチセンサーV2 (MPR121)** は、多チャンネルの近接静電容量式タッチセンサーです。このモジュールは以下の機能を備えた3-in-1モジュールです：静電容量検知、タッチ検知、近接検知。

**静電容量検知**: このモジュールは一定の直流電流静電容量検知方式を使用しています。10 pFから2000 pF以上の静電容量を測定でき、解像度は最大0.01 pFです。

**タッチ検知**: 電極の静電容量データが取得されると、静電容量の基準値と比較して電極のタッチ/リリース状態が判断されます。

**近接検知**: MPR121の新機能の1つは近接検知システムです。これにより、システムのすべての電極を合計して1つの大きな電極を作成することができます。

Freescale MPR121をベースにしたこのセンサーは、完全に独立した12個の電極を持ち、内蔵の自動構成機能を備えています。I2Cインターフェースのおかげで、1つのGroveポートで12個の電極信号をすべて検出でき、I2Cアドレスは0X5Bから0X5Dまでハードウェアで設定可能です。これにより、複数の**Grove - 12キー静電容量式I2CタッチセンサーV2 (MPR121)** を1つのシステムで使用してチャンネルを拡張することが可能になり、最大36個の電極を含むタッチシステムを構築できます。

このセンサーは、[Grove - I2Cタッチセンサー](https://www.seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html)のアップグレード版です。お客様の1人である松澤隆氏のニーズに応えるため、I2Cアドレスを変更可能にし、さらに旧バージョンよりも安価にしました。そのため、Grove製品全般に関するご提案があれば、ぜひお寄せください。私たちは常にお客様の声に耳を傾けています。それが新たなアップグレードや新しいGrove製品の誕生につながるかもしれません。ご提案は[Grove 100+](https://www.seeedstudio.com/grove_100)ページにご記入ください。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン変更

|項目| Grove - 12キー静電容量式I2CタッチセンサーV2 | Grove - I2Cタッチセンサー |
|---|---|---|
|メインチップ|MPR121|MPR121|
|I2Cアドレス|変更可能(0X5B ~ 0X5D)|変更不可(0X5A)|
|タッチセンサー感知器|x|√|
|入力インターフェース|ワニ口クリップインターフェース|DIP 2ピンメスヘッダー|
|コストパフォーマンス|高い|低い|
|リリース時期|2018年9月11日|2015年10月31日|

## 特徴

- 内部10ビットADC
- 各電極入力に対する独立した自動キャリブレーションを統合
- 完全に独立した電極と内蔵の自動構成機能
- 電極状態の変化を通知するIRQ割り込み出力付きI2Cインターフェース
- ハードウェアで設定可能なI2Cアドレス
- 12個の電極/静電容量センサー入力（うち8個はLED駆動およびGPIOとして多機能）
- 各電極入力に対する充電電流と充電時間の自動構成
- 各電極に対してヒステリシスと独立性を提供する、タッチおよびリリースの閾値を個別に設定可能

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作温度|-40°C ～ +85°C|
|保存温度範囲|-40°C ～ +125°C|
|静電容量範囲|10 pF ～ 2000 pF以上|
|分解能|0.01 pF|
|ピンごとのGPIOソース電流|12 mA|
|ピンごとのGPIOシンク電流|1.2 mA|
|インターフェース|I2C|
|I2Cアドレス範囲|0x5B, 0x5C, 0x5D|
|デフォルトI2Cアドレス|0x5B|

## 応用例

- PC周辺機器
- MP3プレーヤー
- リモコン
- 携帯電話
- 照明制御

## ハードウェア概要

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/pin_map.jpg)

|ピン番号|ピン名|機能|ピンの多重化|
|---|---|---|---|
|8|CH0| チャンネル0、電極0、静電容量値を入力|-|
|9|CH1| チャンネル1、電極1、静電容量値を入力|-|
|10|CH2| チャンネル2、電極2、静電容量値を入力|-|
|11|CH3| チャンネル3、電極3、静電容量値を入力|-|
|12|CH4| チャンネル4、電極4、静電容量値を入力|GPIOまたはLEDドライバー|
|13|CH5| チャンネル5、電極5、静電容量値を入力|GPIOまたはLEDドライバー|
|14|CH6| チャンネル6、電極6、静電容量値を入力|GPIOまたはLEDドライバー|
|15|CH7| チャンネル7、電極7、静電容量値を入力|GPIOまたはLEDドライバー|
|16|CH8| チャンネル8、電極8、静電容量値を入力|GPIOまたはLEDドライバー|
|17|CH9| チャンネル9、電極9、静電容量値を入力|GPIOまたはLEDドライバー|
|18|CH10| チャンネル10、電極10、静電容量値を入力|GPIOまたはLEDドライバー|
|19|CH11| チャンネル11、電極11、静電容量値を入力|GPIOまたはLEDドライバー|

:::tip
CH0～CH11については、電極の静電容量データが取得されると、静電容量の基準値と比較して電極のタッチ/リリース状態が決定されます。各チャンネルの基準値を個別に設定することができます。ピン12～ピン19は多機能であり、GPIOまたはLEDドライバーとして構成可能です。詳細については、Freescaleのアプリケーションノート[AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf)を参照してください。
:::

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/pin_map_back_1.jpg)

:::caution
中央パッドはアドレスワイヤに接続されています。ワイヤを切断して再溶接することでI2Cアドレスを変更できます。ナイフや溶接ガンを使用する際は、自分や他人の安全に十分注意してください。
:::

### 回路図

**電源**

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/schematic.jpg)

Freescale MPR121の動作電圧は1.71V～3.6Vですが、Arduinoの電圧は3.3Vまたは5Vです。5Vシステムに対応させるため、電圧変換チップを使用してFreescale MPR121に3.3Vを供給しています。

**双方向レベルシフター回路**

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/schematic_1.jpg)

これは、I<sup>2</sup>Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは3.3Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q1**および**Q2**はNチャンネルMOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)であり、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

このセクションでは、**Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)** をタッチセンサーとして使用する方法を紹介します。静電容量センサーや近接センサーとして設定する方法については、[データシート](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/MPR121.pdf)をご確認ください。

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | I2C Touch Sensor V2|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121) をBase Shieldの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/connect.jpg)

:::note
Grove Base Shieldがない場合は、以下のように直接このモジュールをSeeeduinoに接続することもできます。
:::

| Seeeduino     |  Grove-MPR121          |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| SDA           | 白                   |
| SCL           | 黄色                  |

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を確認することを強くお勧めします。
:::

- **ステップ 1.** Githubから[Grove touch sensor MPR121](https://github.com/linux-downey/Grove_touch_sensor_MPR121)ライブラリをダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開くには、以下の3つの方法があります：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove touch sensor MPR121 --> MPR121_demo**のパスをたどります。
    ![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/path.jpg)

    2. コンピュータで開く：**xxxx\Arduino\libraries\Grove_touch_sensor_MPR121-master**にある**MPR121_demo.ino**をクリックします。**XXXX**はArduino IDEをインストールした場所です。
    ![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/path_1.jpg)

    3. または、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp
#include "Seeed_MPR121_driver.h"

Mpr121 mpr121;

u16 touch_status_flag[CHANNEL_NUM]={0};
void setup()
{
  s32 ret=0;
  Serial.begin(115200);
  if(mpr121.begin()<0)
  {
    Serial.println("デバイスを検出できません!!!!");
  }
  else
  {
    Serial.println("mpr121 初期化成功!");
  }
  delay(100);
}
void loop()
{
  u16 result=0;
  u16 filtered_data_buf[CHANNEL_NUM]={0};
  u8 baseline_buf[CHANNEL_NUM]={0};
  
  result=mpr121.check_status_register();

  mpr121.get_filtered_reg_data(&result,filtered_data_buf);

  for(int i=0;i<CHANNEL_NUM;i++)
  {
    if(result&(1<<i))                             /*キー i が押されました!!*/
    {
      if(0==touch_status_flag[i])             
      { 
        touch_status_flag[i]=1;
        Serial.print("キー ");
        Serial.print(i);
        Serial.println("が押されました");
      }
    }
    else
    {
      if(1==touch_status_flag[i])
      {
        touch_status_flag[i]=0;
        Serial.print("キー ");
        Serial.print(i);
        Serial.println("が離されました");
      }
    }
  }
  delay(50); 
}
```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、`ctrl`+`shift`+`m` キーを同時に押します。ボーレートを **115200** に設定してください。

:::tip
すべてが正常に動作すれば、結果が得られます。CH0 ~ CH11 のパッドに触れると、**キー ?pressed** および **キー ?release** がトリガーされます。
:::

```cpp
mpr121 inmpr121 init OK!
key 11pressed
key 11release
key 10pressed
key 10release
key 0pressed
key 0release
key 2pressed
key 2release
```

### Raspberry Pi で遊ぶ

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | I2C Touch Sensor V2 |
|--------------|---------------------------|---------------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html)|

- **ステップ 2.** Grove Base Hat を Raspberry Pi に接続します。
- **ステップ 3.** Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121) を Base Hat の **I2C** ポートに接続します。
- **ステップ 4.** Raspberry Pi を USB ケーブルを介して PC に接続します。
![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/rasp_MPR121.jpg)

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみで以下のコマンドラインを使用してください。
:::

- **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を構成します。
- **ステップ 2.** grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_12_chan_touch_sensor_MPR121.py
```

以下は grove_12_chan_touch_sensor_MPR121.py のコードです。

```python
import time
from grove.i2c import Bus


TOUCH_SENSOR_DEFAULT_ADDR                 = 0x5b

MODE_CONFIG_REG_ADDR                      = 0x5e
GLOBAL_PARAM_REG_ADDR_L                   = 0x5c
TOUCH_STATUS_REG_ADDR_L                   = 0x00
SET_DEBOUNCE_REG_ADDR                     = 0x5b

FILTERED_DATA_REG_START_ADDR_L            = 0x04
CHANNEL_NUM                               = 12

STOP_MODE                                 = 0
NORMAL_MODE                               = 0x3c

class TouchSensorMpr121():
    def __init__(self,bus_num = 1,addr = TOUCH_SENSOR_DEFAULT_ADDR):
        self.bus = Bus(bus_num)
        self.addr = addr
        self.threshold = 0
        self.touch_flag = [0]*CHANNEL_NUM

    def sensor_init(self):
        self._set_mode(STOP_MODE)
        data = [0x23,0x10]
        self._set_global_param(data)
        self._set_debounce(0x22)
        self._set_mode(NORMAL_MODE)

    def set_threshold(self,threshold):
        self.threshold = threshold

    def wait_for_ready(self):
        time.sleep(.2)

    def _set_mode(self,mode):
        self.bus.write_byte_data(self.addr,MODE_CONFIG_REG_ADDR,mode)
    
    def _set_global_param(self,data):
        self.bus.write_i2c_block_data(self.addr,GLOBAL_PARAM_REG_ADDR_L,data)
    
    def _set_debounce(self,data):
        self.bus.write_byte_data(self.addr,SET_DEBOUNCE_REG_ADDR,data)

    def _check_status_register(self):
        data_status = self.bus.read_i2c_block_data(self.addr,TOUCH_STATUS_REG_ADDR_L,2)
        return data_status
    
    def get_filtered_touch_data(self,sensor_status):
        result_value = []
        for i in range(CHANNEL_NUM):
            time.sleep(.01)
            if(sensor_status & (1<<i)):
                channel_data = self.bus.read_i2c_block_data(self.addr,FILTERED_DATA_REG_START_ADDR_L+2*i,2)
                result_value.append(channel_data[0] | channel_data[1]<<8 )
            else:
                result_value.append(0)
        return result_value

    def listen_sensor_status(self):
        data = self._check_status_register()
        touch_status = data[0] | (data[1]<<8) 
        touch_result_value = self.get_filtered_touch_data(touch_status)

        for i in range(CHANNEL_NUM):
            if(touch_result_value[i] < self.threshold ):
                touch_result_value[i] = 0
        return touch_result_value
    
    def parse_and_print_result(self,result):
        for i in range(CHANNEL_NUM):
            if(result[i] != 0):
                if(0 == self.touch_flag[i]):
                    self.touch_flag[i] = 1
                    print("Channel %d is pressed,value is %d" %(i,result[i]))
            else:
                if(1 == self.touch_flag[i]):
                    self.touch_flag[i] = 0
                    print("Channel %d is released,value is %d" %(i,result[i]))
        


mpr121 = TouchSensorMpr121() 
def main():
    mpr121.sensor_init()
    mpr121.set_threshold(0x60)
    mpr121.wait_for_ready()
    while 1:
        result = mpr121.listen_sensor_status()
        mpr121.parse_and_print_result(result)
        time.sleep(.1)

if __name__  == '__main__':
    main()
```

:::tip
すべてが正常に動作すれば、結果が得られます。CH0 ~ CH11 のパッドに触れると、対応する圧力値とともに **channel # pressed** および **Channel # released** がトリガーされます。
:::

```cpp
>>> %Run grove_12_chan_touch_sensor_MPR121.py
    Channel 8 is pressed, value is 308
    Channel 8 is released, value is 0
    Channel 9 is pressed, value is 170
    Channel 9 is released, value is 0
    Channel 10 is pressed, value is 340
    Channel 8 is pressed, value is 180
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 12 Key Capacitive I2C Touch Sensor V2 eagle ファイル](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip)

- **[Zip]** [Grove タッチセンサー MPR121 ライブラリ](https://github.com/linux-downey/Grove_touch_sensor_MPR121/archive/master.zip)

- **[PDF]** [MPR121 のデータシート](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/MPR121.pdf)

- **[PDF]** [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf)

## プロジェクト

この製品の紹介ビデオです。簡単なデモを含んでおり、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**リーフピアノ**: タッチセンサーを使用してピアノを作り、葉をピアノのキーとして使用しました。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**Scratchで遊ぶ**: タッチセンサーを使ってScratchゲームをプレイする方法は？

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

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