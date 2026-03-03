---
description: Seeed Studio XIAO RA4M1を使ってシンプルなマウスを作る。
title: XIAO RA4M1 マウス
keywords:
- ra4m1
- xiao
- mouse
image: https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/3.png
side_position: 2
slug: /ja/xiao_ra4m1_mouse
last_update:
  date: 09/05/2024
  author: Allen
---

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Thumb-Joystick.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

## 事前準備

### XIAO RA4M1の内蔵LEDを点灯させる

XIAO RA4M1を使用したことがない場合は、[こちらをクリック](https://wiki.seeedstudio.com/ja/getting_started_xiao_ra4m1/)して内蔵LEDの点灯方法を学習してください。これにより、開発環境が正常に動作することを確認できます。

### Grove ジョイスティックのXおよびY軸データを読み取る

#### ステップ1.デバイスの接続

まず、以下の表に従ってXIAO RA4M1とジョイスティックをピン経由で接続する必要があります。

| XIAO RA4M1      | Grove - Thumb Joystick |
|-----------------|-------------------------|
| 3.3V            | Red                     |
| GND             | Black                   |
| A0              | White                   |
| A1              | Yellow                  |

次に、以下の画像のようにGroveケーブルを使用して接続します。

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/4.png" style={{width:600, height:'auto'}}/></div>

#### ステップ2.テストプログラムのアップロード

以下のコードをコピーし、Arduino IDEに貼り付けてからXIAO RA4M1にアップロードしてください

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("The X and Y coordinate is:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/2.png" style={{width:1000, height:'auto'}}/></div>

ジョイスティックを動かすと、軸データが同時に変化します。これは XIAO RA4M1 とジョイスティックが完璧に動作していることを意味します。

## XIAO RA4M1 でマウスを作る

### ステップ 3. マウスコントローラープログラムをアップロード

```cpp
#include <Mouse.h>

const int xaxis = A0;
const int yaxis = A1;
const int sensitivity = 5;//adjust the mouse sensetive

void setup()
{
    Mouse.begin();
    delay(1000);//at least 1000ms to initilize
    Serial.begin(9600);
}

void loop()
{
  int xValue = analogRead(xaxis);
  int yValue = analogRead(yaxis);

  /*
  when you click the central button of Grove joystick, xValue will equal to 1023,
  so when xValue < 1000, we move the mouse; when xValue>1000, we click the mouse
  */
  if(xValue<1000){
  
    //define mouse move distance
    int xDistance;
    int yDistance;

    /*
    The joystick reads the x and y values with 500 as the center of the coordinate axis, 
    so we need to process the data by subtracting 500, while also eliminating some minor vibrations.
    */
    //Eliminate X minor vibrations.
    if(abs(xValue-500)<10){
      xDistance = 0;
    }else{
      xDistance = (xValue - 500);
    }
    //Eliminate X minor vibrations.
    if(abs(yValue-500)<10){
      yDistance = 0;
    }else{
      yDistance = (yValue - 500);
    }
    //read value from joystick
    Serial.print("value: ");
    Serial.print(xValue);
    Serial.print(",");
    Serial.println(yValue);
    Serial.println(" ");
    //read distance the mouse will move
    Serial.print("distance: ");
    Serial.print(xDistance);
    Serial.print(",");
    Serial.println(yDistance);
    Serial.println(" ");

    //make the mouse not so sensetive
    Mouse.move(xDistance/sensitivity,-yDistance/sensitivity,0);
  }else{
    //when xValue>1000, mouse click
    Mouse.click();
  }
    delay(100);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/1.png" style={{width:1000, height:'auto'}}/></div>

ジョイスティックを操作すると、カーソルが動いているのが確認できます～

おめでとうございます！この小さなシンプルなマウスの構築に成功しました。XIAO RA4M1を通じて、より多くの興味深いHID（Human Interface Device）機能があなたの探求を待っています。[もっと学びたいですか？こちらをクリックしてジャンプしてください～](https://docs.arduino.cc/tutorials/uno-r4-minima/usb-hid/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
