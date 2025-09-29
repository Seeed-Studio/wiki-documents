---
title: Grove - IR距離インタラプター v1.2
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-IR_Distance_Interrupter_v1.2/
slug: /ja/Grove-IR_Distance_Interrupter_v1.2
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Grove_-_IR_Distance_Interrupter_v1.2.jpg)

**Grove - IR距離インタラプター**は、光の経路を遮る物体を検出するために使用されます。このモジュールは、IR LEDとフォトセンサー（フォトトランジスタ）のペアで構成されています。IR LEDから放射された光は、センサーの前に置かれた物体によって反射され、この反射がフォトセンサー（フォトトランジスタ）によって検出されます。白色（または明るい色）の表面は、黒色（または暗い色）の表面よりも多く反射します。

反射光が検出されると、**SIG**ピンに**デジタルHIGH**（またはバイナリ**1**）の出力が生成されます。オンボードのLEDインジケーターも点灯します。反射が検出されない場合や、物体がセンサーから遠すぎる場合、**SIG**ピンの出力は**デジタルLOW**（バイナリ**0**）のままです。オンボードのLEDインジケーターも消灯します。このセンサーの検出可能範囲は7.5～40cmです。モジュールには、フォトトランジスタの出力を増幅するためのRail-to-Railオペアンプが組み込まれています。アンプのゲイン、つまり検出感度を調整するためのポテンショメータも備えています。

このセンサーを使用して、以下のような（ただしこれに限定されない）アプリケーションを構築できます：**ライン追従ロボット、光学エンコーダー**、および**物体カウントアプリケーション**。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)

<div class="admonition note">
<p class="admonition-title">注意</p>
この製品は非IR放射にもわずかに感度があり、フォトセンサーに強い光が当たるとIR光の検出が妨げられることがあります。
</div>

<div className="admonition tip">
  <p className="admonition-title">ヒント</p>
  この製品の使用方法は<span style={{fontWeight: 'bold'}}>Grove - 赤外線反射センサー</span>と同じです。Grove - 赤外線反射センサーを使用したことがある場合、この製品を直接使用できます。
</div>

バージョントラッカー
-------------------

| 製品バージョン                                       | リリース日   | サポート状況     |
|-------------------------------------------------------|--------------|------------------|
| v1.2以前のバージョン                                  | 2012年6月    | サポート対象外   |
| Grove - IR距離インタラプター v1.2（現在のバージョン） | 2016年4月    | サポート対象     |

特徴
--------

- Grove互換で使いやすい
- 高感度で信頼性が高い
- 長い検出可能距離
- 様々な用途に合わせた感度調整可能
- より耐久性が高い

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

仕様
--------------

| パラメータ                     | 値                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------|
| 動作電圧(V)                   | 3.3または5ボルト                                                                       |
| 動作電流(mA)                  | 最大: 20 mA                                                                            |
| 有効検出距離                  | 7.5～40 cm                                                                             |
| 反射型フォトセンサー          | [データシート](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf) |
| 出力オペアンプ                | [データシート](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)                  |
| 重量                          | モジュール: 2.5 g、単一パッケージ全体: 8.5 g                                           |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応しているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/hardware_overview.png)

- **ITR9909 反射型フォトセンサー**、高感度反射型フォトセンサー。
- **LM393 オペアンプ**、レール・ツー・レールオペアンプ。
- **LEDインジケーター**、受信した赤外線光の強度が設定したレベルを超えるとLEDが点灯します。
- **光感度調整用ポテンショメータ**、反射型フォトセンサーの光に対する感度を調整します。

### **パッケージ内容**

| 部品名                                                                                                                        | 数量     |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - 赤外線反射センサー                                                                                                    | 1個      |
| [Groveケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1個      |

はじめに
---------------

このモジュールを使用していくつかの基本的なアプリケーションを実装する方法を見てみましょう。

### Arduinoでの使用

#### 必要な材料

- Grove - IR距離インタラプタ v1.2 × 1
- Arduino UNO（他のモデルでも可） × 1
- Groveケーブル × 1
- Grove - ベースシールド × 1

#### 接続方法

1. Grove - IR距離インタラプタ v1.2をGroveケーブルを使ってArduino UNOに接続します。

2. 反射型フォトセンサーを白色（または明るい色）の表面に向けて保持します。

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor3.jpg)

3. ドライバーを使用してポテンショメータを調整し、反射型フォトセンサーの感度を変更します。LEDインジケーターが点灯するまで調整してください。時計回りに回すと、反射型フォトセンサーの光に対する感度が高くなります。

<div class="admonition note">
<p class="admonition-title">注意</p>
適切なドライバーを使用して小さなポテンショメータを調整してください。強い圧力をかけたり頻繁に調整すると、ポテンショメータのワイパーが損傷する可能性があります。
</div>

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor1.jpg)

4. Arduinoスケッチを作成し、以下のコードをコピーして貼り付けます。

```
void setup()  {
    Serial.begin(9600);
    pinMode(6,INPUT);
}
void loop()  {
    while(1)  {
        delay(500);
        if(digitalRead(6)==LOW)  {
            Serial.println("誰かがいます。");
        }
        else  {
            Serial.println("誰もいません。");
        }
    }
}
```

5. コードをアップロードします。Arduinoスケッチのアップロード方法がわからない場合は、Windowsユーザーは[こちら](https://www.arduino.cc/en/Guide/Windows)、Macユーザーは[こちら](https://www.arduino.cc/en/Guide/MacOSX)を参照してください。以下のような結果が表示されます。

6. 光の経路が何かの物体によって遮られると、シリアルターミナルに「誰かがいます。」と表示されます。それ以外の場合は「誰もいません。」と表示されます。

### Raspberry Piでの使用

#### 必要な材料

- Raspberry Pi（他のモデルでも可） × 1
- [GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html?cPath=73) または [Grovepi+](https://www.seeedstudio.com/depot/GrovePi-p-2241.html?cPath=122_154_158) × 1
- [Groveケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

#### ハードウェア接続とソフトウェア作業

1. Raspberry PiとGrovePiまたはGrovePi+を用意します。このデモではGrovePiを使用します。

2. 開発環境が正常に構築されていることを前提とします。まだの場合は、このチュートリアルに従ってください。

3. 接続：

Groveケーブルを使用して、Grove - IR距離インタラプタをGrovePiのポートD4に接続します。

4. デモディレクトリに移動し、ターミナルで以下のコマンドを実行します。

```
    cd yourpath/GrovePi/Software/Python/
```

ターミナルで以下のコマンドを実行します：

```
    nano grove_infrared_distance_interrupt.py
```

以下のコードをコピーして保存します。

```
import time
import grovepi
 
# Grove赤外線距離インタラプタセンサーをデジタルポートD4に接続
# SIG,NC,VCC,GND
sensor = 4
 
grovepi.pinMode(sensor,"INPUT")
 
while True:
    try:
        # センサーは受信した赤外線光の強度が校正されたレベルを超えるとLOWを返し、オンボードLEDが点灯します
        if grovepi.digitalRead(sensor) == 0:
            print "何かを検出しました"
        else:
            print "何もありません"
 
        time.sleep(.5)
 
    except IOError:
        print "エラー"
```

5. デモを実行するには、ターミナルで以下のコマンドを実行します。

```
    sudo python grove_infrared_distance_interrupt.py
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Grove - IR Distance Interrupter v1.2 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip)
- [反射型フォトセンサー データシート(ITR9909)](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf)
- [LM393 データシート](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)
- [LMV358 データシート](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LMV358_datasheet.pdf)
- [赤外線反射センサー ソースファイル](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Grove-Infrared_Reflective_Sensor_v1.0_SourceFile.zip)

このMarkdownファイルは[こちら](https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2)から作成されました。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>