---
title: Grove - GPS
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-GPS/
slug: /ja/Grove-GPS
last_update:
  date: 05/15/2025
  author: gunengyu
---


<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/Grove-GPS.jpg" /><figcaption><b /><i /></figcaption>
</div>

この Grove - GPS モジュールは、SIM28（旧バージョンは u-blox 6）とシリアル通信構成を備えた、コスト効率が高くフィールドプログラム可能なデバイスです。22トラッキング / 66アクイジションチャンネルのGPS受信機を搭載しています。トラッキングとアクイジションの感度はどちらも-160dBmに達し、個人用ナビゲーションプロジェクトや位置情報サービスに最適で、同価格帯の製品の中でも優れた選択肢となっています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-GPS-Module.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>


:::tip
[Seeed GPS Modules Selection Guide](https://wiki.seeedstudio.com/ja/GPS-Modules-Selection-Guide/)を公開しました。これにより、あなたのニーズに最適なGPSモジュールを選択する手助けができます。
:::

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日       |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - GPS V1.2 | 初期バージョン                                                                                                                                                                                    | 2015年10月      |

## 特徴

- NMEAおよびu-blox 6プロトコルをサポート。（2014年1月10日まで、それ以降はSIM28に変更）
- 低消費電力
- ボーレート設定可能
- Grove互換インターフェース

:::tip
 Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 仕様

| **パラメータ**    | **範囲/値**              |
|------------------|------------------------------|
| 入力電圧         | 3.3/5V                       |
| ボーレート         | 4800 - 57600(u-bloxバージョン) |
| ボーレート         | 9600 - 115200(SIM28バージョン) |
| デフォルトボーレート | 9600                         |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

このサンプルは、ソフトウェアシリアルを使用してGPSからデータを読み取り、それをシリアルポートに送信する簡単なものです。

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - GPS |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-GPS/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-GPS-p-959.html)|

- **ステップ 2.** Grove - GPSをGrove-Base Shieldのポート**D2**に接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/with_ardu.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove - GPSをSeeeduinoに直接接続することもできます。
:::
| Seeeduino     | Grove - GPS |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| D3            | 白                   |
| D2            | 黄色                  |

#### ソフトウェア

:::note
    u-centerソフトウェアはWindows専用ですのでご注意ください。
:::

- **ステップ 1.** [u-center](https://www.u-blox.com/en/product/u-center-windows)ソフトウェアをインストールします。
- **ステップ 2.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];                   // シリアルポート経由で受信するデータ用のバッファ配列
int count=0;                                // バッファ配列のカウンター
void setup()
{
    SoftSerial.begin(9600);                 // SoftSerialのボーレート
    Serial.begin(9600);                     // Arduinoのシリアルポートのボーレート
}

void loop()
{
    if (SoftSerial.available())                     // ソフトウェアシリアルポートからデータが来ている場合
    {
        while(SoftSerial.available())               // データを文字配列に読み込む
        {
            buffer[count++]=SoftSerial.read();      // 配列にデータを書き込む
            if(count == 64)break;
        }
        Serial.write(buffer,count);                 // データ送信が終了していない場合、バッファをハードウェアシリアルポートに書き込む
        clearBufferArray();                         // 配列に保存されたデータをクリアする関数を呼び出す
        count = 0;                                  // whileループのカウンターをゼロに設定
    }
    if (Serial.available())                 // ハードウェアシリアルポートにデータがある場合（PCまたはノートブックからデータが来ている場合）
    SoftSerial.write(Serial.read());        // SoftSerialシールドにデータを書き込む
}


void clearBufferArray()                     // バッファ配列をクリアする関数
{
    for (int i=0; i<count;i++)
    {
        buffer[i]=NULL;
    }                      // 配列のすべてのインデックスをNULLでクリア
}
```

- **ステップ 3.** U-centerを開きます。

- **ステップ 4.** Receiver -> Portをクリックし、Arduinoが使用しているCOMポートを選択します。

- **ステップ 5.** Receiver -> Baudrateをクリックし、9600が選択されていることを確認します。

- **ステップ 6.** View -> Text Consoleをクリックすると、NMEAデータがストリームされるウィンドウが表示されます。

- **ステップ 7.** シリアルモニターを開くと、以下のように表示されます：

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/GPS_result.jpg)

**Google Earthでデータを表示することもできます：**

- **ステップ 1.** File -> Database Export -> Google Earth KMLをクリックします。

- **ステップ 2.** これにより、u-centerでキャプチャされた履歴を含むGoogle Earthが起動します。

- **ステップ 3.** または、ツールバーの赤い丸を押してデータを記録し、保存先を指定することができます。

- **ステップ 4.** 十分なデータをキャプチャしたら、黒い四角をクリックして記録を停止します。

- **ステップ 5.** 生成された.ubxファイルを[GPSVisualizer](http://www.gpsvisualizer.com/)にアップロードしてKMLに変換することができます。

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry pi | GrovePi_Plus | Grove - GPS |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-GPS/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに差し込みます。
- **ステップ 3.** Groveケーブルを使用してセンサーをGrovePi+のソケット**RPISER**に接続します。
- **ステップ 4.** USBケーブルを使用してRaspberryをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/witu_rpi.jpg)

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。

- **ステップ 2.** デモディレクトリに移動します：

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
cd GrovePi/Software/Python/grove_gps
```

- **ステップ 3.** コードを確認します：

```
nano grove_gps_data.py   # "Ctrl+x"で終了 #
```

```py
import serial, time
import smbus
import math
import RPi.GPIO as GPIO
import struct
import sys
#import ir_receiver_check

enable_debug=1
enable_save_to_file=0

#if ir_receiver_check.check_ir():
# print("Disable IR receiver before continuing")
# exit()
 
ser = serial.Serial('/dev/ttyAMA0',  9600, timeout = 0) # 9600ボーレートでシリアルポートを開く
ser.flush()

def cleanstr(in_str):
 out_str = "".join([c for c in in_str if c in "0123456789.-" ])
 if len(out_str)==0:
  out_str = "-1"
 return out_str

def safefloat(in_str):
 try:
  out_str = float(in_str)
 except ValueError:
  out_str = -1.0
 return out_str

class GPS:
 # 使用するGPSモジュールはGrove GPSモジュール https://www.seeedstudio.com/depot/Grove-GPS-p-959.html
 inp=[]
 # SIM28 NMEA仕様ファイルを参照 https://www.seeedstudio.com/wiki/images/a/a0/SIM28_DATA_File.zip
 GGA=[]


 # GPSからデータを読み取る
 def read(self): 
  while True:
   GPS.inp=ser.readline()
   if GPS.inp[:6] =='$GPGGA': # GGAデータ、パケット1、必要なすべてのデータが含まれる
    break
   time.sleep(0.1)     # コマンドがないとプログラムがクラッシュする
  try:
   ind=GPS.inp.index('$GPGGA',5,len(GPS.inp)) # 時々複数のGPSデータパケットがストリームに入る。最後の'$GPGGA'の後のデータのみを取得する
   GPS.inp=GPS.inp[ind:]
  except ValueError:
   print ("")
  GPS.GGA=GPS.inp.split(",") # ストリームを個々の部分に分割する
  return [GPS.GGA]
  
 # データを個々の要素に分割する
 def vals(self):
  if enable_debug:
   print(GPS.GGA)
   
  time=GPS.GGA[1]
  
  if GPS.GGA[2]=='':  # 緯度。技術的には浮動小数点
   lat =-1.0
  else:
   lat=safefloat(cleanstr(GPS.GGA[2]))
  
  if GPS.GGA[3]=='':  # これはNまたはSであるべき
   lat_ns=""
  else:
   lat_ns=str(GPS.GGA[3])
   
  if  GPS.GGA[4]=='':  # 経度。技術的には浮動小数点
   long=-1.0
  else:
   long=safefloat(cleanstr(GPS.GGA[4]))
  
  if  GPS.GGA[5]=='': # これはWまたはEであるべき
   long_ew=""
  else:
   long_ew=str(GPS.GGA[5])
   
  fix=int(cleanstr(GPS.GGA[6]))
  sats=int(cleanstr(GPS.GGA[7]))
  
  if  GPS.GGA[9]=='':
   alt=-1.0
  else:
   # strに変更（浮動小数点ではなく）
   # 27"1は有効な値のようです
   alt=str(GPS.GGA[9])
  return [time,fix,sats,alt,lat,lat_ns,long,long_ew]
 
 # 十進度に変換する
 def decimal_degrees(self, raw_degrees):
  try:
   degrees = float(raw_degrees) // 100
   d = float(raw_degrees) % 100 / 60
   return degrees + d
  except: 
   return raw_degrees


if __name__ == "__main__":
 g=GPS()
 if enable_save_to_file:
  f=open("gps_data.csv",'w') # データをログに記録するファイルを開く
  f.write("name,latitude,longitude\n") # ファイルの上部にヘッダーを書き込む
 ind=0
 while True:
  time.sleep(0.01)
  try:
   x=g.read() # GPSから読み取る
   [t,fix,sats,alt,lat,lat_ns,longitude,long_ew]=g.vals() # 個々の値を取得する
    
   # 十進度に変換する
   if lat !=-1.0:
    lat = g.decimal_degrees(safefloat(lat))
    if lat_ns == "S":
     lat = -lat

   if longitude !=-1.0:
    longitude = g.decimal_degrees(safefloat(longitude))
    if long_ew == "W":
     longitude = -longitude
     
   # print ("Time:",t,"Fix status:",fix,"Sats in view:",sats,"Altitude",alt,"Lat:",lat,lat_ns,"Long:",long,long_ew)
   try:
    print("Time\t\t: %s\nFix status\t: %d\nSats in view\t: %d\nAltitude\t: %s\nLat\t\t: %f\nLong\t\t: %f") %(t,fix,sats,alt,lat,longitude)
   except:
    print("Time\t\t: %s\nFix status\t: %s\nSats in view\t: %s\nAltitude\t: %s\nLat\t\t: %s\nLong\t\t: %s") %(t,str(fix),str(sats),str(alt),str(lat),str(longitude))
    
   s=str(t)+","+str(safefloat(lat)/100)+","+str(safefloat(longitude)/100)+"\n" 
    
   if enable_save_to_file:
    f.write(s) # ファイルに保存する
   time.sleep(2)
  except IndexError:
   print ("読み取り不可")
  except KeyboardInterrupt:
   if enable_save_to_file:
    f.close()
   print ("終了")
   sys.exit(0)
```

- **ステップ 4.** デモを実行します。

```
sudo python grove_gps_data.py
```

<div class="admonition note">
<p class="admonition-title">注意</p>
GPSは屋外で使用するのが望ましいです。ラズベリーパイを窓の外や屋外の場所に置くことをお勧めします。
</div>

## SIM28モジュールに関する注意事項

- **ステップ 1.** Grove-GPSは、元のバージョンと同じフットプリントを持つSIM28モジュールに変更されました。
- **ステップ 2.** SIM28モジュールのデータを受信するために、["SIMCom GPS DEMO"](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIMCom_GPS_DEMO_V1.07.zip)ツールを使用する必要があります。
- **ステップ 3.** SIMCom_GPS_DEMOツールを開き、Module->properties->module->select SIM28に進みます。
- **ステップ 4.** SIMCom_GPS_DEMO_V1.07はWindows専用です。

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/SIM28_module_select.jpg)

- **ステップ 5.** SIMCom_GPS_DEMOツールを開き、Module->connectに進みます。GPSモジュールが使用しているシリアルポートを選択します。

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/SIM28_module_tools_pannel.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove-GPS Eagleファイル](https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.zip)
- **[PDF]** [GPS回路図(PDF)](https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.pdf)
- **[データシート]** [E-1612-UBデータシート](https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf)
- **[データシート]** [U-Blox6受信機説明プロトコル仕様](https://files.seeedstudio.com/wiki/Grove-GPS/res/U-blox-6-Receiver-Description-Including-Protocol-Specification.zip)
- **[ソフトウェア]** [U-Blox u-center GPS評価ソフトウェア](https://www.u-blox.com/en/product/u-center-windows)
- **[ドキュメント]** [SIM28_DATA_File](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIM28_DATA_File.zip)
- **[ドキュメント]** [SIMCom_GPS_DEMO_V1.07](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIMCom_GPS_DEMO_V1.07.zip)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Grove_-_GPSから作成されました -->

## プロジェクト

**GPS/GPRSトラッカーのプロジェクト**: この新しいプロジェクトでは、GPRS技術とMQTTプロトコルを使用して接続されたGPSトラッカーを紹介します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

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