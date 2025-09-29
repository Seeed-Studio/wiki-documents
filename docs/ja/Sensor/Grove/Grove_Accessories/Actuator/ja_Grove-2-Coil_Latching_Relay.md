---
title: Grove - 2-Coil Latching Relay
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-2-Coil_Latching_Relay/
slug: /ja/Grove-2-Coil_Latching_Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/2Coil_Latching_Relay_01.jpg)

このモジュールは2-Coil Latching Relayをベースにしています。通常のリレーとは対照的に、このラッチングリレーは状態を保持するために連続的な電力を必要とせず、状態を変更するには上昇/下降パルスのみが必要です。状態を変更する必要がない場合には電力を切ることも可能であり、このモジュールは特に低消費電力プロジェクトに適しています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)

特徴
-------

- Groveコネクタ
- 低消費電力
- デュアルスイッチ

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

仕様
-------------

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
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
動作電圧
</th>
<td>
4.7
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
セット/リセット電圧(最大)
</th>
<td colspan="3">
4.0
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
151
</td>
<td>
167
</td>
<td>
183
</td>
<td>
Ω
</td>
</tr>
<tr align="center">
<th scope="row">
スイッチング電圧(最大)
</th>
<td colspan="3">
35VAC/35VDC
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
スイッチング電流(最大)
</th>
<td colspan="3">
3
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
セット時間(ラッチング)
</th>
<td colspan="3">
4.5(最大)
</td>
<td>
ms
</td>
</tr>
<tr align="center">
<th scope="row">
リセット時間(ラッチング)
</th>
<td colspan="3">
3.5(最大)
</td>
<td>
ms
</td>
</tr>
</table>

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用前に
------------

### 関連資料

ガスセンサーを使用する前に、以下の知識を読むことをお勧めします。これにより、Arduinoや当社の製品についてより深く理解でき、オープンソースハードウェアをより簡単に使用できるようになります。

<!-- - [Getting Started with Arduino](/ja/Getting_Started_with_Seeeduino)
- [What is Grove system](/ja/Grove_System)
- [Why i need a Base shield?](/ja/Base_Shield_V2) -->

- Arduinoの使い方
- Groveシステムとは
- なぜBase Shieldが必要なのか？

これらを読んだ後、Base Shieldを使用してGrove製品をArduinoと連携させる方法がわかります。それでは始めましょう！

### 準備するもの

このチュートリアルでは、以下の必要な製品を含みます：

<!-- - [Arduino UNO R3](https://www.seeedstudio.com/depot/Arduino-Uno-Rev3-p-694.html) or [Seeeduino v4](https://www.seeedstudio.com/depot/Seeeduino-V4-p-669.html)
- [Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)
- Grove - 2-Coil Latching Relay -->

- Arduino UNO R3 または Seeeduino v4
- Base Shield
- Grove - 2-Coil Latching Relay

使い始める
-----

### Arduinoでの使用

ラッチングリレーは、状態を変更する際にのみ電力を消費します。信号ピンに上昇/下降電圧パルスが加わると、その動作状態が変わります。これは、エネルギー効率が重要な状況や、リレーがその状態を記憶する必要がある状況で非常に便利です。

それでは使い始めましょう。

- モジュールをGrove - Base ShieldのD3ポートに接続します。
- リレーはデフォルトで「セット」状態（CommとNOが接続）を保持しており、SIGピンに上昇エッジがあると「リセット」状態（CommとNCが接続）に切り替わります。以下に参考コードを示します：

```c
#define LatchingRelay 3
void setup()
{
    pinMode(LatchingRelay,OUTPUT);

    digitalWrite(LatchingRelay,LOW);
    delay(1000);
    digitalWrite(LatchingRelay,HIGH);
    delay(1000);
}
void loop()
{

}
```

- リレーは「リセット」状態（CommとNCが接続）を保持しており、SIGピンに下降エッジがあると「セット」状態（CommとNOが接続）に切り替わります。以下に参考コードを示します：

```c
#define LatchingRelay 3
void setup()
{
    pinMode(LatchingRelay,OUTPUT);

    digitalWrite(3,HIGH);
    delay(1000);
    digitalWrite(3,LOW);
    delay(1000);
}
void loop()
{

}
```

- このモジュールは動作状態が変化しない場合、消費電力が非常に少なくなります。リレーの状態を設定した後は、ラッチングリレーに電力を供給する必要がなくなるため、特に低消費電力となります。

<div class="admonition note">
<p class="admonition-title">注意</p>
リレーは出荷時に「リセット」状態になっています。
</div>

![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/Latching_Relay_Diagram.jpg)

<div class="admonition note">
<p class="admonition-title">注意事項</p>
<p> 1. 双方向リレーは同時に制御されます。</p>
<p> 2. 「セット」または「リセット」状態に切り替える際、NO(NC)インジケーターが一度点滅します。</p>
</div>

### Raspberry Piでの使用

1. Raspberry PiとGrovePiまたはGrovePi+を準備してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は[こちら](/ja/GrovePi_Plus)を参照してください。

3. 接続

- センサーをGrovePiのD4ソケットにGroveケーブルを使用して接続します。

4. デモディレクトリに移動します:

```
cd yourpath/GrovePi/Software/Python/
```

- コードを確認するには

```
nano grove_2_coil_latching_relay.py   # "Ctrl+x"で終了 #
```

```
import time
import grovepi

# Grove 2-Coil Latching RelayをデジタルポートD4に接続
# SIG,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # 5秒間オンにする
        grovepi.digitalWrite(relay,1)
        print "オン"
        time.sleep(5)

        # 5秒間オフにする
        grovepi.digitalWrite(relay,0)
        print "オフ"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "エラー"
```

5. デモを実行します。

```
sudo python grove_2_coil_latching_relay.py
```

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [Grove - 2-Coil Latching Relay Eagle File](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip)
- [Latching_Relay_Datasheet](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Latching_Relay_Datesheet.pdf)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Grove_-_2-Coil_Latching_Relayから作成されました -->

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