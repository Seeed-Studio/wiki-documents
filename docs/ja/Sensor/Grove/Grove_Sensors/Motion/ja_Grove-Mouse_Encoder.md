---
description: Grove - マウスエンコーダ
title: Grove - マウスエンコーダ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Mouse_Encoder
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg" alt="pir" width={600} height="auto" /></p>

Grove - マウスエンコーダは、回転方向と回転速度のフィードバックデータを持つ機械式インクリメンタルロータリーエンコーダの一種です<sup>\[1\]</sup>。標準的なGroveインターフェースを備えており、配線やプログラミングの作業を大幅に軽減します。また、重負荷や過酷な環境に適応しています。この製品は、玩具、ロボット、消費者向け入力デバイスに応用できます。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-%E2%80%93-Mouse-Encoder-p-2607.html)

<div className="admonition note">
  <p className="admonition-title">注意</p>
  回転速度は1000 rad/min（ラジアン毎分）未満に設計されています。
</div>


特徴
--------

-   様々な環境に対応可能。
-   重負荷や過酷な環境に適応。
-   デテント付きで快適な操作感。
-   標準的なGroveインターフェースでプログラミングと配線が簡単。
-   高精度で信頼性が高い。

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::
用途
------------

玩具、ロボット、消費者向け入力デバイスなど、過酷な環境での様々な用途に対応可能です。

仕様
--------------

| 項目                             | 最小値 | 標準値 | 最大値 |
|----------------------------------|--------|---------|--------|
| 動作電圧(V)                      |        | 3.3     | 5.5    |
| 動作電流(mA)                     |        | 10      | 13     |
| デューティ比（一定速度）         |        | 50%     |        |
| 位相差（一定速度）               |        | π/4     |        |
| 1回転あたりのパルス数            |        | 12      |        |

<div className="admonition note">
  <p className="admonition-title">注意</p>
  <ol>
    <li>製品リストにはノブが含まれていません。これは、このエンコーダを様々な環境により適応させるためです。</li>
    <li><a href="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove-Mouse_Encoder_Dimensions.pdf">寸法</a>ファイルをPDF形式で提供しており、寸法に基づいてノブをカスタマイズできます。</li>
  </ol></div>

<div className="admonition tip">
  <p className="admonition-title">ヒント</p>
  プロジェクトのプロトタイプを構築する場合は、適切な六角ドライバービットを使用するだけで済みます。
</div>


ハードウェア概要
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg" alt="pir" width={600} height="auto" /></p>

**Groveインターフェース**   
ドライバーボードと**Seeeduino**ボードなどのメイン制御ボードを接続します。

**六角形の開口部**   
ノブを通すための開口部。

### **部品リスト**

| 部品名                               | 数量     |
|--------------------------------------|----------|
| Grove - マウスエンコーダ（ノブなし） | 1 個     |
| Grove - ユニバーサルケーブル         | 1 個     |

はじめに
-----------

このセクションでは、Grove - マウスエンコーダを使用してアプリケーションを構築するためのIDE環境の構築方法を説明します。

<!-- 図有問題 Refer to [Seeeduino V4.2](/ja/Seeeduino_v4.2#Getting_Started_on_Windows)(It is exchangeable with Arduino board) for how to build a complete an IDE for your applications, or read [Arduino guide](https://www.arduino.cc/en/Guide/HomePage) if you use Arduino original board. -->

<div className="admonition note">
  <p className="admonition-title">注意</p>
  <ol><li>回転速度が遅い場合、デューティ比は大きくなります。</li>
    <li>回転速度が一定でない場合、パルス幅（PW）は同じになりません。</li>
    <li>回転速度が1000 rad/minを超えると、出力PWが狭くなるか、このエンコーダが損傷する可能性があります。</li>
    <li>このエンコーダ内のパルス位置が不確定であるため、回転していない場合の出力電圧は（高電圧または低電圧）不確定になります。</li></ol>
</div>


### 基本デモ

このデモでは、位置検出と方向検出の方法を示します。

#### 必要な材料

-   Seeeduino V4.2
-   ベースシールド V2.0
-   USBケーブル（タイプAからマイクロタイプB）

#### 接続

以下のように材料を接続します：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg)  -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg" alt="pir" width={600} height="auto" /></p>

#### コード

```
/* クアドラチャエンコーダの読み取り
* エンコーダをピン encoder0PinA, encoder0PinB, および +5V に接続します。
*
* スケッチ作成者: max wolf / www.meso.net
* バージョン 0.1 - 非常に基本的な機能 - mw 20061220
*
*/  
 
 
int val; 
int encoder0PinA = 3;
int encoder0PinB = 4;
int encoder0Pos = 0;
int encoder0PinALast = LOW;
int n = LOW;
 
void setup() { 
    pinMode (encoder0PinA,INPUT);
    pinMode (encoder0PinB,INPUT);
    Serial.begin (115200);
} 
 
void loop() { 
    n = digitalRead(encoder0PinA);
    if ((encoder0PinALast == LOW) && (n == HIGH)) {
        if (digitalRead(encoder0PinB) == LOW) {
            encoder0Pos--;
        } else {
            encoder0Pos++;
        }
        Serial.println(encoder0Pos);
        Serial.println ("/");
    } 
    encoder0PinALast = n;
}
```

1.  コードをコピーしてコントローラーボードにフラッシュします。
2.  モニターウィンドウを開きます。
3.  六角ドライバービットを左または右に回して、何が起こるか確認します。

出力結果：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png" alt="pir" width={600} height="auto" /></p>


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


リソース
---------

- [回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Mouser_Encoder から作成されました -->

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>