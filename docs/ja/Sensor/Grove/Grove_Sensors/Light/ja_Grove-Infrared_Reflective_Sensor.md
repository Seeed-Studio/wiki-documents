---
description: Grove - 赤外線反射センサー
title: Grove - 赤外線反射センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Infrared_Reflective_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/main.jpg" /></div>

Grove - 赤外線反射センサーは、特定の範囲内で物体の存在を検出するために使用されます。このセンサーは、IR LEDとフォトセンサー（フォトトランジスタ）のペアで構成されています。IR LEDから放射される光は、センサーの前に置かれた物体によって反射され、その反射光をフォトセンサー（フォトトランジスタ）が検出します。白色（または明るい色）の表面は、黒色（または暗い色）の表面よりも多く反射します。

反射光が検出されると、**SIG**ピンに**デジタルLOW**（またはバイナリ**0**）出力が生成されます。オンボードのLEDインジケーターも点灯します。反射光が検出されない場合や、物体がセンサーから遠すぎる場合、**SIG**ピンの出力は**デジタルHIGH**（バイナリ**1**）のままです。この場合、オンボードのLEDインジケーターは消灯します。このセンサーの検出可能範囲は4～16mmです。モジュールには、フォトトランジスタの出力を増幅するためのRail-to-Railオペアンプが組み込まれています。また、アンプのゲイン、つまり検出感度を調整するためのポテンショメータが搭載されています。

このセンサーを使用することで、以下のような（ただしこれに限定されない）アプリケーションを構築できます：**ライン追従ロボット**、**光学エンコーダ**、および**物体カウントアプリケーション**。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

:::caution
この製品は非赤外線放射にもわずかに敏感であるため、フォトセンサーに強い光が当たると赤外線光の検出が妨害されることがあります。
:::

## バージョントラッカー

| 製品バージョン              | 変更点        | リリース日       |
|------------------------------|--------------|------------------|
| v1.2以前のバージョン         | 初期版        | 2012年6月        |
| バージョン1.2（現行バージョン） | レイアウトの最適化 | 2016年4月        |

## 特徴

- Grove互換で使いやすい
- 高感度で信頼性が高い
- 小型設計
- 様々な用途に合わせて感度を調整可能

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 仕様

| パラメータ                                    | 値                                                                            |
|----------------------------------------------|--------------------------------------------------------------------------------|
| 動作電圧(V)                                  | 3.3–5V                                                                       |
| 動作電流(mA)                                 | 14.69–15.35 mA                                                                 |
| 有効検出距離                                 | 4–15 mm                                                                     |
| 応答時間                                     | 10 μs                                                                          |
| フォトトランジスタ：ピーク感度波長           | 800 nm                                                                         |
| IR LED：ピーク発光波長                       | 940 nm                                                                         |
| 反射型フォトセンサー                         | [データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR-220.pdf)          |
| 出力オペアンプ                               | [データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf) |
| 重量                                         | 4 g                                                                            |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Grove-Infrared_Reflective_Sensor_v1.2_hardware_overview_1200_z.jpg" /></div>

- **RPR220 反射型フォトセンサー** - 高感度の反射型フォトセンサー。
- **LMV358** - レール・ツー・レールのオペアンプ。
- **LEDインジケーター** - 受信した赤外線の強度が設定値を超えるとLEDが点灯します。
- **光感度調整用ポテンショメーター** - フォトセンサーの光に対する感度を調整します。

## はじめに

このモジュールを使用していくつかの基本的なアプリケーションを実装する方法を見てみましょう：

### Arduinoで遊ぶ

#### ライン追従

このセンサーはロボットカーが黒いラインを追従するのを助けるために使用できます。

##### ハードウェア

- **ステップ1.** 以下の材料を準備してください：

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | 白い紙と黒いペン|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>||
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|   🙂   |

- **ステップ2.** Groveケーブルを使用して、Grove - Infrared Reflective SensorをGrove-Base Shieldの任意のポートに接続します。このデモでは**D2**を使用します。

- **ステップ3.** このセンサーを白色（またはその他の明るい色）の紙の上12mmに配置します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-4.JPG" /></div>

- **ステップ4.** ドライバーを使用してポテンショメーターを調整し、反射型フォトセンサーの感度を変更します。LEDインジケーターが点灯するまで調整してください。時計回りに回すと、反射型フォトセンサーが光に対してより敏感になります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-5.JPG" /></div>

:::note
小さなポテンショメーターを調整する際には適切なドライバーを使用してください。強い圧力をかけたり頻繁に調整すると、ポテンショメーターのワイパーが損傷する可能性があります。
:::

- **ステップ5.** 垂直距離を維持しながら、センサーを黒いラインに向かって水平に移動させます。インジケーターLEDは黒いラインの上で消灯するはずです。まだ点灯している場合は、消灯するまでポテンショメーターを調整してください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-6.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-7.JPG" /></div>

#### 回転速度検出

モーターの速度を検出するための簡単な光学エンコーダを実装してみましょう。

##### ハードウェア

- **ステップ1.** 以下の材料を準備してください：

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | 3V/5V DCモーター|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/N30%203V%20DC%2012000RPM%20DC%20Motor.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|  [今すぐ購入](https://www.seeedstudio.com/N30-3V-DC-12000RPM-DC-Motor-p-1886.html)   |

- **ステップ 2.** 赤外線反射センサーを Grove - Base Shield の **D2** ポートに接続し、モーターを **D6** に接続します（実際には、モーターに電力を供給するために VCC と GND を接続するだけで十分です）。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_arduino.jpg" /></div>

- **ステップ 3.** モーターに丸い白い紙皿（黒い線が描かれているもの）を取り付けます。この回転エンコーダーの近くにセンサーを配置し、モーターを動作させます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-9.JPG" /></div>

##### ソフトウェア

- **ステップ 1.** [Arduino timer1 *ライブラリ*](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip) をダウンロードし、Arduino IDE のライブラリフォルダに追加します。デモコードの実行方法については[ガイド](/ja/Guide_to_use_demos_downloaded_from_Seeed-s_Github/)を参照してください。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino 用のライブラリをインストールします。

- **ステップ 3.** 新しいスケッチを開き、以下のコードをスケッチにコピーします。

```cpp
unsigned int counter=0;
void blink()
{
    counter++;
}
void timerIsr()
{
    Timer1.detachInterrupt();  // timer1 を無効化
    Serial.print("モーターの速度: ");
    Serial.print(counter,DEC);
    Serial.println("回転/秒");
    counter=0;
    Timer1.attachInterrupt( timerIsr );  // timer1 を有効化
}
void setup()
{
    Serial.begin(9600);
    Timer1.initialize(1000000); // 1秒のタイマーを設定
    attachInterrupt(0, blink, RISING);  // INT0
    Timer1.attachInterrupt( timerIsr ); // サービスルーチンをここにアタッチ
}
void loop()
{

}
```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、++ctrl+shift+m++ キーを同時に押します。すべてが正常に動作していれば、速度が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-10.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-12.JPG" /></div>

### Raspberry Pi で遊ぶ

#### ハードウェア

- **ステップ 1.** 以下の材料を準備します：

| Raspberry Pi | GrovePi_Plus | Grove - 赤外線反射センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry Pi に接続します。

- **ステップ 3.** Grove - 赤外線反射センサーを GrovePi_Plus の **D4** ポートに接続します。

- **ステップ 4.** Raspberry Pi を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_pi.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。

- **ステップ 2.** [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)に従って、GrovePi の最新ファームウェアを更新します。

:::tip
このウィキでは、**~/GrovePi/** のパスを使用しています。**/home/pi/Desktop/GrovePi** の代わりに使用してください。ステップ 2 とステップ 3 で同じパスを使用する必要があります。
:::

:::note
ファームウェアを更新することを強くお勧めします。一部のセンサーでは、更新しないとエラーが発生する可能性があります。
:::

- **ステップ 3.** Github リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 4.** コードを確認します。

```python
cd ~/GrovePi/Software/Python
sudo nano grove_infrared_reflective_sensor.py
```

次のようなコードが表示されます：

```python
import time
import grovepi
 
# Grove 赤外線反射センサーをデジタルポート D4 に接続
# SIG,NC,VCC,GND
sensor = 4
 
grovepi.pinMode(sensor,"INPUT")
 
while True:
    try:
        # センサーは黒い表面で HIGH、白い表面で LOW を返します
        if grovepi.digitalRead(sensor) == 1:
            print "黒い表面を検出"
        else:
            print "白い表面を検出"
 
        time.sleep(.5)
 
    except IOError:
        print "エラー"
```

次に ++ctrl+x++ を押して nano を終了します。

- **ステップ 5.** デモを実行するには、ターミナルで以下のコマンドを実行します：

```
sudo python grove_infrared_reflective_sensor.py
```

結果は次のようになります：

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_infrared_reflective_sensor.py
黒い表面を検出
黒い表面を検出
黒い表面を検出
黒い表面を検出
黒い表面を検出
白い表面を検出
白い表面を検出
白い表面を検出
黒い表面を検出
黒い表面を検出
黒い表面を検出
黒い表面を検出
黒い表面を検出
黒い表面を検出
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]**  [Grove-Infrared Reflective Sensor v1.2 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip)
- **[Zip]**  [Arduino Timer1 ライブラリ](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip)
- **[Pdf]**  [RPR220 データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR220_datasheet.pdf)
- **[Pdf]** [LMV358 データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Infrared_Reflective_Sensor から作成されました -->

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

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x をぜひお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>