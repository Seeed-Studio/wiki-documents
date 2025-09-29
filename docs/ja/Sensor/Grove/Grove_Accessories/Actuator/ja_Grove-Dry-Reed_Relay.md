---
title: Grove - ドライリードリレー
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Dry-Reed_Relay/
slug: /ja/Grove-Dry-Reed_Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/img/DryReed_Relay_01.jpg)

**Grove-Dry Reed Relay**は、コイル内の電流によって振動リードを磁化することで動作するリレーモジュールです。電磁リレーと比較して、接点が完全に密閉されていることがドライリードリレーの最大の特徴です。また、構造が簡単でコンパクト、高速で長寿命という特性を持ち、マイクロ電子検出や自動制御など多くの分野で広く利用されています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)

特徴
-------

- Groveインターフェース
- 高速
- 優れた安定性
- 長い接点寿命
- 接点が完全に密閉

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

仕様
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小値
</th>
<th scope="col">
標準値
</th>
<th scope="col">
最大値
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
電圧
</th>
<td>
4.8
</td>
<td>
5.0
</td>
<td>
5.2
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
コイル抵抗
</th>
<td>
225
</td>
<td>
250
</td>
<td>
275
</td>
<td>
Ω
</td>
</tr>
<tr align="center">
<th scope="row">
ピックアップ電圧
</th>
<td colspan="3">
3.75
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
スイッチング電流(最大)
</th>
<td colspan="3">
0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
スイッチング電圧(最大)
</th>
<td colspan="3">
120 VAC/60VDC
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
キャリー電流(最大)
</th>
<td colspan="3">
1.0
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
動作時間(最大)
</th>
<td colspan="3">
1.0
</td>
<td>
mS
</td>
</tr>
<tr align="center">
<th scope="row">
リリース時間(最大)
</th>
<td colspan="3">
0.5
</td>
<td>
mS
</td>
</tr>
<tr align="center">
<th scope="row">
機械的寿命(無負荷時)
</th>
<td colspan="3">
1×10⁸回操作
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
周囲温度
</th>
<td>
-30
</td>
<td>
/
</td>
<td>
70
</td>
<td>
˚C
</td>
</tr>
</table>

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記でサポートされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

### Arduinoでの使用

ドライリードリレーは最大60VDC 1Aの負荷をサポートできます。抵抗負荷を制御するために使用できますが、<font color="red"> **誘導負荷（モーターなど）には適用できません**</font>。

このドライリードリレーの使用方法は、一般的なリレーの使用方法と非常に似ています。

- 電気ライトをGrove - ドライリードリレーに接続し、電気ライトに電源を供給します。
- Grove - ドライリードリレーをGrove - Base ShieldのD2ポートに接続し、Arduino/Seeeduinoに差し込みます。

- 以下のコードをアップロードします。

```
    int Relay = 2;

    // setupルーチンはリセットを押したときに1回実行されます:
    void setup() {                
      // デジタルピンを出力として初期化します。
      pinMode(Relay, OUTPUT);     
    }

    // loopルーチンは永遠に繰り返し実行されます:
    void loop() {
      digitalWrite(Relay, HIGH);   // リレーを閉じる(HIGHは電圧レベル)
      delay(5000);               // 5秒待機
      digitalWrite(Relay, LOW);    // リレーを通常開にする(電圧をLOWにする)
      delay(5000);               // 5秒待機
    }
```

- 電気ライトは数秒間点灯し、その後数秒間消灯を繰り返します。特別な用途の場合は、独自にコードを書く必要があります。

### Raspberry Piでの使用

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**でのみこのコマンドラインを使用する必要があります。
:::
1. Raspberry PiとGrovePiまたはGrovePi+を用意してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は[こちら](/ja/GrovePi_Plus)を参照してください。

3. 接続

- Groveケーブルを使用してセンサーをGrovePiのD4ソケットに接続します。

4. デモディレクトリに移動します:

```
    cd yourpath/GrovePi/Software/Python/
```

- コードを確認するには

```
    nano grove_relay.py   # "Ctrl+x"で終了 #
```

```
    import time
    import grovepi

    # GroveリレーをデジタルポートD4に接続
    # SIG,NC,VCC,GND
    relay = 4

    grovepi.pinMode(relay,"OUTPUT")

    while True:
        try:
            # 5秒間スイッチオン
            grovepi.digitalWrite(relay,1)
            print "on"
            time.sleep(5)

            # 5秒間スイッチオフ
            grovepi.digitalWrite(relay,0)
            print "off"
            time.sleep(5)

        except KeyboardInterrupt:
            grovepi.digitalWrite(relay,0)
            break
        except IOError:
            print "Error"
```

5. デモを実行します。

```
    sudo python3 grove_relay.py
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [Grove - Dry-Reed Relay Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip)
- [Dry-Reed Relay データシート](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Dry-Reed_Relay_Datasheet.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Dry-Reed_Relay から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>