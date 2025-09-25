---
title: Grove - パッシブブザー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Passive-Buzzer/
slug: /ja/Grove-Passive-Buzzer
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/products/107020109/img/107020109_wiki.png)

これは3-5Vのパッシブブザーです。PWM周波数を変更することで異なるビープ音を生成し、「ブザー音楽」を作ることができます。また、セキュリティ用途のアラームとして設定することも可能です。ぜひ1つ手に入れて、あなた自身のプロジェクトを始めてみましょう！

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特徴

- パッシブ：調整可能なパッシブブザー
- インターフェース：Grove

## 仕様

|項目|値|
|---|---|
|電圧範囲|3V–5V|
|共振周波数|2700 Hz|
|音量|> 80dB|
|動作温度|-20-70 °C|
|寸法|20mm *20mm* 10mm|
|重量|3g|
|バッテリー|含まない|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 始め方

### Arduinoで遊ぶ

#### 必要な材料

|Seeeduino XIAO|Grove ブレッドボード|Grove パッシブブザー|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### ハードウェア接続

![](https://files.seeedstudio.com/products/107020109/img/wiki_buzzer_xiao.jpg)

ブレッドボード上のGroveインターフェースとGroveパッシブブザーはGroveケーブルで接続されます。

#### ソフトウェア

- **ステップ1** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

#### コード例1 - 単純なビープ音を鳴らす

```cpp
int buzzer = 5; // ブザーはピン5に接続
int frequency = 2700; // 共振周波数に到達
int cycle = 1000000/frequency;  
void setup()
{
Serial.begin(9600); // ボーレートを設定
pinMode(buzzer,OUTPUT); // ブザーを出力として設定
}

void loop() 
{
  digitalWrite(buzzer,HIGH);
  delayMicroseconds(cycle/2);
  digitalWrite(buzzer,LOW);
  delayMicroseconds(cycle/2);  // PWMサイクルを実行
}
```

- **ステップ2** コードをボードにアップロードした後、ブザーがビープ音を鳴らします。

#### コード例2 - ブザーで音楽を演奏する

```cpp
 //対応する音符と周波数を設定
 #define NOTE_D0 0
 #define NOTE_D1 294
 #define NOTE_D2 330
 #define NOTE_D3 350
 #define NOTE_D4 393
 #define NOTE_D5 441
 #define NOTE_D6 495
 #define NOTE_D7 556
 
 #define NOTE_DL1 147
 #define NOTE_DL2 165
 #define NOTE_DL3 175
 #define NOTE_DL4 196
 #define NOTE_DL5 221
 #define NOTE_DL6 248
 #define NOTE_DL7 278
 
 #define NOTE_DH1 589
 #define NOTE_DH2 661
 #define NOTE_DH3 700
 #define NOTE_DH4 786
 #define NOTE_DH5 882
 #define NOTE_DH6 990
 #define NOTE_DH7 112
 
 #define WHOLE 1
 #define HALF 0.5
 #define QUARTER 0.25
 #define EIGHTH 0.25
 #define SIXTEENTH 0.625
 
 //曲全体の音符部分
 int tune[] =
 {
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0,
 
   NOTE_D1, NOTE_D1, NOTE_D3,
   NOTE_D1, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_D6, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D7, NOTE_D7, NOTE_D5, NOTE_D3,
   NOTE_D5,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D3, NOTE_D3, NOTE_D1, NOTE_DL6,
   NOTE_D1,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_DH1, NOTE_D0, NOTE_D7, NOTE_D5,
   NOTE_D6,
 };
 
 //各音符の持続時間
 float duration[] =
 {
   1, 1, 0.5, 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5,
   0.5, 1, 0.5, 1, 0.5, 0.5,
   0.5, 0.5, 0.5, 0.5, 1, 1,
 
   1, 1, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1, 1, 0.5, 0.5, 1,
   0.5, 1, 1 + 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1
 };
 
 int length;//音符の数を定義
 int buzzer = 5; //ブザーのピンを設定
 void setup()
 {
   pinMode(buzzer, OUTPUT); // ブザーを出力モードに設定
   length = sizeof(tune) / sizeof(tune[0]); //音符の数をカウント
 }
 
 void loop()
 {
    for (int x = 0; x < length; x++) //音符を1つずつ「演奏」
    {
     tone(buzzer, tune[x]); //「x」音符を出力
     delay(400 * duration[x]); //音楽のリズム、数値「400」を変更することで速さを調整可能
     noTone(buzzer);//現在の音符を停止し、次の音符へ進む
    } 
    delay(5000);//曲全体を演奏した後、5秒間遅延
 }    
```

- **ステップ3** ボードにコードをアップロードした後、ブザーから音楽が聞こえます。

### Raspberry Piで遊ぶ

#### 必要な材料

|Raspberry Pi 4B(4GB)|Raspberry Pi用Grove Base Hat|Grove デジタル PIR モーションセンサー|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|

#### ハードウェア接続

![](https://files.seeedstudio.com/products/107020109/img/Hardware_connection_raspberry_buzzer.jpg)

ブザーをGrove Base Hatの「PWM」に接続します。

#### ソフトウェアコード

- **ステップ 1** RaspberryにGrove.pyをインストールします。

ワンクリックインストール、クイックスタート、何と呼んでも構いませんが、以下の単一コマンドで、すべての依存関係と最新のgrove.pyをインストール/更新できます。

:::warning
     **Raspberry Pi OS >= Bullseye**を使用している場合、このコマンドラインは使用できません。
:::

```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::success
        すべてが正常に進むと、以下の通知が表示されます。

        ```
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
        ``` -
:::

ワンクリックインストール以外にも、すべての依存関係と最新のgrove.pyをステップバイステップでインストールすることもできます。

:::warning
     **Raspberry Pi OS >= Bullseye**を使用している場合、**Python3のみ**で以下のコマンドラインを使用する必要があります。
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **ステップ 2** コード用のPythonファイルを作成します。

```
cd grove.py
nano example.py
```

- **ステップ 3** 以下のコードをPythonファイルにコピーします。

```
#!/usr/bin/env python
import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))

    CHORDS = [upmBuzzer.BUZZER_DO， upmBuzzer.BUZZER_RE， upmBuzzer.BUZZER_MI， 
        upmBuzzer.BUZZER_FA， upmBuzzer.BUZZER_SOL， upmBuzzer.BUZZER_LA， 
        upmBuzzer.BUZZER_SI]
    for i in range(0， len(CHORDS)):
        buzzer.playSound(CHORDS[i]， 500000)
        time.sleep(0.1)

    del buzzer
    print('application exiting...')

if __name__ == '__main__':
    main()
```

- **ステップ 4** プログラムを実行します。

```
sudo chmod +x example.py
sudo ./example.py
```

すべてが正常に進むと、「ド、レ、ミ、ファ、ソ、ラ、シ」の音が聞こえます。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [MLT_8530_DATASHEET](https://files.seeedstudio.com/products/107020109/document/MLT_8530_datasheet.pdf)
- **[PDF]** [ハードウェア回路図](https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_SCH_190925.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>