---
description: Grove - MOSFET
title: Grove - MOSFET
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-MOSFET
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_01.jpg" /></div>

Grove – MOSFET は、マイクロコントローラの低電圧（例えば 5V）で高電圧プロジェクト（例えば 15V DC）を制御することを可能にします。MOSFET はスイッチの一種でもありますが、そのスイッチング周波数は最大 5MHz に達し、通常の機械式リレーよりもはるかに高速です。基板には 2 つのスクリュー端子があります。一方は外部電源用、もう一方は制御したいデバイス用です。Grove – MOSFET は閉じた状態で一方の端から他方の端へ電力を通します。ただし、外部電源がない場合でも、デバイスは Grove インターフェースを介してマイクロコントローラから電力を供給することができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-MOSFET-p-1594.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - MOSFET V1.0 | 初版                                                                                                                                                                                    | 2015年10月      |

## 仕様

|パラメータ| 値/範囲|
|:--------|:-----------|
|動作電圧|  5V|
|Vin      |   5 ~ 15V|
|MOSFET モデル| CJQ4435|

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### デモンストレーション

ここでは、Grove - MOSFETを使用してモーターを制御する方法を説明します。外部電源を使用して電力を供給しますが、制御するデバイスが300mA未満の電流を必要とする場合、Seeeduinoだけで十分であり、追加の電源は必要ありません。

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - MOSFET |
|----------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **ステップ 2.** Grove - MOSFETをGrove-Base ShieldのD6ポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/2.jpg" /></div>

:::note
Grove Base Shieldがない場合でも、以下のようにGrove_MOSFETをSeeeduinoに直接接続することができます。
:::

| Seeeduino       | Grove_MOSFET |
|-----------------|--------------|
| 5V             | 赤           |
| GND            | 黒           |
| 接続なし       | 白           |
| D6             | 黄           |

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/MOSFET_Interface_Function.jpg" /></div>

Vin: 5V ~ 15Vの電源を受け入れます（電流は2A未満）。

Vout: ここにアクチュエータを接続します。

#### ソフトウェア

- **ステップ 1.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
// Grove - MOSFETのデモ
// PWMピン6を使用してモーターを制御

int motorPin = 6;

void setup()
{
    Serial.begin(38400);
    pinMode(motorPin, OUTPUT);
    Serial.println("Grove - MOSFET テストデモ！");
}

void loop()
{
    motorOnThenOffWithSpeed();
    motorAcceleration();
}

void motorOnThenOffWithSpeed()
{
    int onSpeed  = 200;                         // 0（停止）から255（全速）の間の数値
    int onTime   = 2500;
    int offSpeed = 50;                          // 0（停止）から255（全速）の間の数値
    int offTime  = 1000;
    analogWrite(motorPin, onSpeed);
    delay(onTime);
    analogWrite(motorPin, offSpeed);
    delay(offTime);
}

void motorAcceleration()
{
    int delayTime = 50;
    for(int i=0; i<256; i++)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }

    for(int i=255; i>=0; i--)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }
}
```

- **ステップ 2.** モーターの状態を観察します。

![](https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Static_image.gif)

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove - MOSFET |
|--------------|--------------|----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **ステップ 2.** GrovePi_PlusをRaspberry Piに差し込みます。
- **ステップ 3.** Grove-MOSFETをGrovePi_Plusの**D6**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/1.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** デモディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/
```

- **ステップ 2.** コードを確認します：

```
nano grove_mosfet.py   # "Ctrl+x"で終了 #
```

```python
import time
import grovepi

# Grove MOSFETをデジタルポートD6に接続
# SIG,NC,VCC,GND
mosfet = 6

grovepi.pinMode(mosfet,"OUTPUT")
time.sleep(1)

while True:
    try:
        # 全速
        grovepi.analogWrite(mosfet,255)
        print "全速"
        time.sleep(2)

        # 半速
        grovepi.analogWrite(mosfet,128)
        print "半速"
        time.sleep(2)

        # 停止
        grovepi.analogWrite(mosfet,0)
        print "停止"
        time.sleep(2)

    except KeyboardInterrupt:
        grovepi.analogWrite(mosfet,0)
        break
    except IOError:
        print "エラー"
```

- **ステップ 3.** デモを実行します：

```
sudo python grove_mosfet.py
```

- **ステップ 4.** ターミナルに以下のような出力が表示されます。

<div><img width="{1000}" src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/pi_result.png" /></div>
|
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove - MOSFET 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip)
- **[PDF]** [Grove - MOSFET 回路図 PDF](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove%20-%20MOSFET%20.pdf)
- **[データシート]** [CJQ4435 データシート](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/CJQ4435.pdf)
- **[WIKI]** [MOSFET Wikipedia](https://en.wikipedia.org/wiki/MOSFET)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_MOSFET から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>