---
title: Grove - 振動モーター
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Vibration_Motor/
slug: /ja/Grove-Vibration_Motor
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib.jpg)

これは、非可聴インジケーターとして適したミニ振動モーターです。入力がHIGHの場合、モーターは携帯電話のサイレントモードのように振動します。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

## バージョントラッカー

| リビジョン | 説明                                                         | リリース日       |
|------------|--------------------------------------------------------------|------------------|
| v0.9b      | 初回公開リリース                                             | 2011年5月10日    |
| v1.0       | I/Oポートを直接使用して振動モーターを駆動                     | 2011年11月5日    |
| v1.2       | トランジスタを追加し、より大きな電流で振動モーターを駆動       | 2013年7月11日    |

## 特徴

- Grove互換
- 非可聴
- 低消費電力
- 高信頼性

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
標準
</th>
<th scope="col">
最大
</th>
</tr>
<tr align="center">
<th scope="row">
動作電圧
</th>
<td>
3.0V
</td>
<td>
5.0V
</td>
<td>
5.5V
</td>
</tr>
<tr align="center">
<th scope="row">
制御モード
</th>
<td colspan="3" rowspan="1">
ロジックレベル  
(ロジックHIGH時にモーターがON、LOW時にモーターがOFF)
</td>
</tr>
<tr align="center">
<th scope="row">
定格速度
</th>
<td colspan="3" rowspan="1">
9000 rpm
</td>
</tr>
</table>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

振動させるのはLEDを点灯させるのと同じくらい簡単です。以下は振動モーターを動作させる例です。

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - Vibration Motor |
|--------------|-------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **ステップ 2.** Grove - Vibration MotorをGrove-Base ShieldのD2に接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使ってSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/vibration_motor.png)

:::note
 Grove Base Shieldがない場合でも、以下のようにGrove - Vibration MotorをSeeeduinoに直接接続することができます。
:::
| Seeeduino       | Grove - Vibration Motor |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| 接続なし       | 白                     |
| D2            | 黄                     |

#### ソフトウェア

- **ステップ 1.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
int MoPin = 2;    // 振動モーターがデジタルピン9に接続されています

void setup()  {
    pinMode( MoPin, OUTPUT );
}

void loop()  {

    digitalWrite(MoPin, HIGH);
    delay(1000);

    digitalWrite(MoPin, LOW);
    delay(1000);
}
```

- **ステップ 2.** これでモーターの振動を感じることができます！

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Vibration MotorをBase ShieldのD2ポートに接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使ってSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[ArduinoでのCodecraftの使い方](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::
**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/cc_Vibration_Motor.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
    コードのアップロードが完了すると、振動モーターの振動を感じることができます。
:::

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry pi | GrovePi_Plus | Grove - Vibration Motor |
|--------------|-------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに差し込みます。
- **ステップ 3.** Grove - Vibration MotorをGrovePi_Plusの**D8**ポートに接続します。
- **ステップ 4.** USBケーブルを使ってRaspberryをPCに接続します。

#### ソフトウェア

- **ステップ 1.** デモディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/
```

- **ステップ 2.** コードを確認します：

```
nano grove_vibration_motor.py   # "Ctrl+x"で終了 #
```

```python
import time
import grovepi

# Grove Vibration MotorをデジタルポートD8に接続
# SIG,NC,VCC,GND
vibration_motor = 8

grovepi.pinMode(vibration_motor,"OUTPUT")

while True:
    try:
        # 1秒間振動を開始
        grovepi.digitalWrite(vibration_motor,1)
        print 'start'
        time.sleep(1)

        # 1秒間振動を停止し、繰り返す
        grovepi.digitalWrite(vibration_motor,0)
        print 'stop'
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(vibration_motor,0)
        break
    except IOError:
        print "Error"
```

- **ステップ 3.** デモを実行します。

```
sudo python grove_vibration_motor.py
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove - 振動モーター回路図](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip)

- **[データシート]** [S9013 データシート](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/S9013.pdf)

- **[データシート]** [ANDA-B1020 データシート](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/ANDA-B1020_datasheet.pdf)

- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove_Vibration_Motor/resource/Grove_Vibration_Motor_CDC_File.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Vibration_Motor から作成されました -->

## プロジェクト

**Grove - 振動モーターの紹介 - 大人向けのみ**: 初心者向け例

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-vibration-motor-only-for-adults-2acfc2/embed' width='350'></iframe>

**OVERWATCHにインスパイアされて、最近とてもクールな木製レーザーガンのおもちゃを作りました！**

木製レーザーガンとガンターゲットは、Seeeduino LotusというArduinoボードをベースにしています。レーザーガンのレーザーエミッターは、レーザーパルスを発射してガンターゲットを「起動」するように制御されます。そして、ガンターゲットにはレーザーパルスを検出するための3つの光センサーがあります。とてもシンプルに見えますよね？このプロジェクトに興味があるなら、自分やお子さんのためにぜひ作ってみてください！クリスマスプレゼントとしてDIYするのに1日を費やす価値があります。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>