---
description: Seeed Studio XIAO RA4M1 を使用してシンプルなマウスを作成します。
title: XIAO RA4M1 マウス
keywords:
- ra4m1
- xiao
- mouse
image: https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/3.png
side_position: 2
slug: /ja/xiao_ra4m1_mouse
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/xiao_mouse.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 必要な材料

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove サムジョイスティック</th>
      <th>Grove ケーブル</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductmalejumper.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Thumb-Joystick.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

## 事前準備

### XIAO RA4M1 の内蔵 LED を点灯する

もし XIAO RA4M1 を初めて使用する場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_xiao_ra4m1/)。内蔵 LED を点灯させる方法を学び、開発環境が正常に動作していることを確認します。

### Grove ジョイスティックの X 軸と Y 軸データを読み取る

#### ステップ 1. デバイスを接続する

まず、以下の表に従って XIAO RA4M1 とジョイスティックをピンで接続します。

| XIAO RA4M1      | Grove - サムジョイスティック |
|-----------------|-------------------------|
| 3.3V            | 赤                      |
| GND             | 黒                      |
| A0              | 白                      |
| A1              | 黄                      |

次に、以下の画像のように Grove ケーブルを使用して接続します。

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/4.png" style={{width:600, height:'auto'}}/></div>

#### ステップ 2. テストプログラムをアップロードする

以下のコードをコピーして Arduino IDE に貼り付け、XIAO RA4M1 にアップロードします。

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("X と Y の座標は:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/2.png" style={{width:1000, height:'auto'}}/></div>

ジョイスティックを動かすと、軸データが同時に変化します。これにより、XIAO RA4M1 とジョイスティックが正常に動作していることが確認できます。

## XIAO RA4M1 を使用したマウスの構築

### ステップ 3. マウスコントローラープログラムをアップロード

```cpp
#include <Mouse.h>

const int xaxis = A0;
const int yaxis = A1;
const int sensitivity = 5; // マウスの感度を調整

void setup()
{
    Mouse.begin();
    delay(1000); // 初期化に最低1000ms必要
    Serial.begin(9600);
}

void loop()
{
  int xValue = analogRead(xaxis);
  int yValue = analogRead(yaxis);

  /*
  Groveジョイスティックの中央ボタンをクリックすると、xValueは1023になります。
  そのため、xValue < 1000の場合はマウスを移動し、xValue > 1000の場合はマウスをクリックします。
  */
  if(xValue < 1000){
  
    // マウス移動距離を定義
    int xDistance;
    int yDistance;

    /*
    ジョイスティックは、座標軸の中心を500としてxおよびy値を読み取ります。
    したがって、データを500で減算して処理する必要があります。また、微小な振動を排除します。
    */
    // X軸の微小な振動を排除
    if(abs(xValue - 500) < 10){
      xDistance = 0;
    }else{
      xDistance = (xValue - 500);
    }
    // Y軸の微小な振動を排除
    if(abs(yValue - 500) < 10){
      yDistance = 0;
    }else{
      yDistance = (yValue - 500);
    }
    // ジョイスティックから値を読み取る
    Serial.print("value: ");
    Serial.print(xValue);
    Serial.print(",");
    Serial.println(yValue);
    Serial.println(" ");
    // マウスが移動する距離を読み取る
    Serial.print("distance: ");
    Serial.print(xDistance);
    Serial.print(",");
    Serial.println(yDistance);
    Serial.println(" ");

    // マウスの感度を低くする
    Mouse.move(xDistance / sensitivity, -yDistance / sensitivity, 0);
  }else{
    // xValue > 1000の場合、マウスクリック
    Mouse.click();
  }
    delay(100);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/1.png" style={{width:1000, height:'auto'}}/></div>

ジョイスティックを操作すると、カーソルが動いているのが確認できるはずです ~

おめでとうございます！この小さなシンプルなマウスを無事に構築できました。XIAO RA4M1を使用して、さらに興味深いHID（ヒューマンインターフェースデバイス）機能を探索することができます。[もっと学びたいですか？こちらをクリックしてジャンプしてください~](https://docs.arduino.cc/tutorials/uno-r4-minima/usb-hid/)


## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>