---
description: Grove - LED ソケットキット
title: Grove - LED ソケットキット
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-LED_Socket_Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-White-LED-p-2016.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-White-LED-p-2016.jpeg" alt="pir" width={600} height="auto" /></p>

Grove - LED は、Arduino/Seeeduino の初心者向けに設計されており、デジタルポートからの制御を監視するためのものです。ボックスや机の表面に簡単に取り付けることができ、電源や信号のパイロットランプとして使用できます。明るさはポテンショメータで調整可能です。

## 特徴
---
*   Grove 互換インターフェース

*   3.3V/5V 互換

*   LED の向きを調整可能

*   LED の明るさを調整可能

## 仕様
---
<table>
  <tbody>
    <tr>
      <td width={400}><strong>項目</strong></td>
      <td width={400}><strong>説明</strong></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>LED 制御モード</td>
      <td>Arduino のデジタルピン</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>動作電圧</td>
      <td>5V</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>供給モード</td>
      <td>Grove インターフェース</td>
    </tr>
  </tbody>
</table>


## Arduino を使った始め方
---
ここでは、Arduino を使用して LED の状態を制御する方法を示します。

1. LED を Base Shield の **デジタルポート 2** に 4 ピン Grove ケーブルで接続します。必要に応じて他の有効なデジタルポートに変更することもできますが、その場合はポートの定義も変更する必要があります。

2. Arduino/Seeeduino に取り付けます。USB ケーブルを使用してボードを PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-LED.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-LED.jpg" alt="pir" width={600} height="auto" /></p>

3. デモコードをスケッチにコピーし、Arduino または Seeeduino ボードにアップロードします。アップロード方法がわからない場合は [こちら](https://www.seeedstudio.com/wiki/Upload_Code) をクリックしてください。

LED が毎秒点滅するのが確認できます。
```
/*************************************************************************
* ファイル名          : GroveLEDDemoCode.ino
* 作成者              : Seeedteam
* バージョン          : V1.1
* 日付                : 18/2/2012
* 説明                : Grove - LED のデモコード
*************************************************************************/

#define LED 2 // LED をデジタルピン 2 に接続
void setup() {
    // デジタルピン 2 を出力として初期化
    pinMode(LED, OUTPUT);
}

void loop() {
    digitalWrite(LED, HIGH);   // LED をオンにする
    delay(500);               // 500ms 待機
    digitalWrite(LED, LOW);   // LED をオフにする
    delay(500);
}
```
## Raspberry Pi を使った始め方
---
**ポート D4** に LED を接続し、Grove ワイヤコネクタを使用して Raspberry Pi を電源オンします。これは LED を点滅させるテストです。以下の画像のように GrovePi+ に接続できます。
```
# GrovePi LED 点滅例

import time
from grovepi import *

# Grove LED をデジタルポート D4 に接続
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        # LED を点滅させる
        digitalWrite(led,1)		# HIGH を送信して LED をオンにする
        time.sleep(1)

        digitalWrite(led,0)		# LOW を送信して LED をオフにする
        time.sleep(1)

    except KeyboardInterrupt:	# 停止前に LED をオフにする
        digitalWrite(led,0)
        break
    except IOError:				# 通信エラーが発生した場合に "Error" を出力
        print "Error"
```
### プログラムの実行

*   ファイルへのパスを見つける（自身のパスに応じて）
```
cd GrovePi/Software/Python/
```

*   プログラムを実行
```
sudo python grove_led_blink.py
```

# Grove - LED
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - LED v1.3
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.3_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
*   [Grove - LED V1.3 ソースファイル (Eagle と pdf)](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.3_Schematics.zip)

*   [Grove - LED ソースファイル (Eagle と pdf)](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.0_Source_File.zip)

*   [GroveLEDDemoCode](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/GroveLEDDemoCode.zip)

*   [Grove-LED ソケットキット](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_Socket_Eagle_File.zip)

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