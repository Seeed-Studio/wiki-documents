---
description: Grove - 電磁石
title: Grove - 電磁石
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Electromagnet
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - Electromagnet
category: Sensor
bzurl: https://seeedstudio.com/Grove-Electromagnet-p-1820.html
oldwikiname: Grove_-_Electromagnet
prodimagename: Grove_Electromagnet_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove Electromagnet.jpg
surveyurl: https://www.research.net/r/Grove-Electromagnet
sku: 101020073
tags: grove_digital, io_5v, plat_duino, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02.jpg)

電磁石は、磁場が電流によって生成されるタイプの磁石です。アンペールの法則によれば、電流が流れる導線の周囲には磁場が発生します（以下の図を参照）。磁場を集中させるために、電磁石では導線がコイル状に巻かれ、多くの巻き線が並んでいます。これにより、コイルの中心を通る磁場が強力になり、強い磁場を生成します。Grove - 電磁石は1kgの重量を吸着して保持することができます。電磁石の原理を学ぶのに簡単で使いやすい製品です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 特徴

- Grove形状
- 最大1kgの吸着力
- 低スタンバイ電流

## 仕様

| 項目             | 値     |
|------------------|--------|
| 動作電圧         | DC 5V  |
| 動作電流         | 400mA  |
| スタンバイ電流   | 200uA  |
| 負荷重量         | 1kg    |

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove-Electromagnet |
|----------------|-------------|---------------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **ステップ 2.** Grove-ElectromagnetをGrove-Base Shieldのポート**D2**に接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/2-connect.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにGrove-Electromagnetを直接Seeeduinoに接続することもできます。
:::

| Seeeduino       | Grove-Ultrasonic Ranger |
|-----------------|-------------------------|
| 5V              | 赤                     |
| GND             | 黒                     |
| 接続なし         | 白                     |
| D2              | 黄                     |

**ソフトウェア**

- **ステップ 1.** 以下のコードをArduino IDEにコピーしてArduinoにアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
/*
  電磁石を1秒間オンにし、その後1秒間オフにする動作を繰り返します。
  このサンプルコードはパブリックドメインにあります。
*/

int Electromagnet = 2;
int LED = 13;

// setupルーチンはリセットボタンを押したときに1回だけ実行されます:
void setup() {
    // デジタルピンを出力として初期化します。
    pinMode(Electromagnet, OUTPUT);
    pinMode(LED, OUTPUT);
}

// loopルーチンは永遠に繰り返し実行されます:
void loop() {
    digitalWrite(Electromagnet, HIGH);  // 電磁石をオンにします（HIGHは電圧レベル）
    digitalWrite(LED, HIGH);           // LEDをオンにします（HIGHは電圧レベル）
    delay(1000);                       // 1秒待ちます
    digitalWrite(Electromagnet, LOW);  // 電磁石をオフにします（LOWは電圧レベル）
    digitalWrite(LED, LOW);            // LEDをオフにします（LOWは電圧レベル）
    delay(1000);                       // 1秒待ちます
}
```

- **ステップ 2.** Grove-Electromagnetが動作します。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet-3.png)

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - ElectromagnetをBase ShieldのポートD2に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[Arduinoを使用したCodecraftのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/cc_Electromagnet.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
コードのアップロードが完了したら、鉄製品を電磁石に近づけてみてください。電磁石が動作しているとき、Arduinoの13ピンに接続されたLEDが点灯します。
:::

### Raspberry Piで遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove-Electromagnet |
|--------------|--------------|---------------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに差し込みます。

- **ステップ 3.** Grove-ElectromagnetをGrovePi_Plusの**D4**ポートに接続します。

- **ステップ 4.** USBケーブルを使用してRaspberryをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/1_pi_connect.jpg)

**ソフトウェア**

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。

- **ステップ 2.** [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)に従ってGrovePiの最新ファームウェアを更新します。

:::tip
このWikiでは、パス**~/GrovePi/**を使用していますが、**/home/pi/Desktop/GrovePi**の代わりに使用してください。ステップ2とステップ3で同じパスを使用する必要があります。
:::

:::note
ファームウェアを更新することを強くお勧めします。一部のセンサーでは、エラーが発生する可能性があります。
:::

- **ステップ 3.** Githubリポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 4.** デモディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/
```

以下はgrove_electromagnet.pyコードです。

```python
import time
import grovepi

# 電磁石は1KGの重さを保持できます

# Grove ElectromagnetをデジタルポートD4に接続します
# SIG,NC,VCC,GND
electromagnet = 4

grovepi.pinMode(electromagnet,"OUTPUT")
time.sleep(1)

while True:
    try:
        # 電磁石をオンにします
        grovepi.digitalWrite(electromagnet,1)
        print "on"
        time.sleep(2)

        # 電磁石をオフにします
        grovepi.digitalWrite(electromagnet,0)
        print "off"
        time.sleep(2)

    except KeyboardInterrupt:
        grovepi.digitalWrite(electromagnet,0)
        break
    except IOError:
        print "Error"
```

5. デモを実行する

```
    sudo python grove_electromagnet.py
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- **[**Eagle**]**[Grove Electromagnet v1.0 SCH PCB.zip](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip)
- **[**データシート**]**[Datasheet ZYE1-P20-15 PDF](https://files.seeedstudio.com/wiki/Bazaar_file/101020073/ZYE1-P%20electro%20holding%20magnets.pdf)
- **[**Codecraft**]**[CDC File](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_CDC_File.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Electromagnet から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>