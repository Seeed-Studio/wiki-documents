---
description: Base_Shield_V2
title: Base Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Base_Shield_V2
sku: 103030000
last_update:
  date: 7/7/2026
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-07-07'
url: https://wiki.seeedstudio.com/ja/Base_Shield_V2/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" alt="pir" width={600} height="auto" /></p>

Arduino Uno はこれまでで最も人気のある Arduino ボードですが、プロジェクトで多くのセンサーや LED を必要とする場合、ジャンパワイヤが散らかってしまい、時にはイライラすることがあります。Base Shield を作成した目的は、ブレッドボードとジャンパワイヤから解放されることです。ベースボード上の豊富な Grove コネクタにより、すべての Grove モジュールを Arduino Uno に簡単に追加できます！Base Shield V2 のピン配置は Arduino Uno R3 と同じです。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/base-shield-v13-p-1378.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## バージョン

<table align="center">
  <tbody>
  <tr>
    <td><h3>製品バージョン</h3></td>
    <td><h3>変更点</h3></td>
    <td><h3>リリース日</h3></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.2</h4></td>
    <td><h4>初版</h4></td>
    <td><h4>2011年10月</h4></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.3</h4></td>
    <td><h4>Grove コネクタのレイアウトと数量を変更</h4></td>
    <td><h4>2012年8月</h4></td>
  </tr>  
  <tr>
    <td><h4>Base Shield V2.0</h4></td>
    <td><h4>Grove コネクタのレイアウトと数量を変更し、3.3V と 5V の両方を有効にできる電源スイッチを追加。</h4></td>
    <td><h4>2014年3月</h4></td>
  </tr>
  </tbody></table>

## 仕様

<table align="center">
  <tbody>
  <tr>
    <td><h3>パラメータ</h3></td>
    <td><h3>値 / 範囲</h3></td>
  </tr>
  <tr>
    <td><h4>動作電圧</h4></td>
    <td><h4>3.⅗V</h4></td>
  </tr>
  <tr>
    <td><h4>動作温度</h4></td>
    <td><h4>-25℃ ～ +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>アナログポート</h4></td>
    <td><h4>4</h4></td>
  </tr>  
  <tr>
    <td><h4>デジタルポート</h4></td>
    <td><h4>7</h4></td>
  </tr>
  <tr>
    <td><h4>UART ポート</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>I2C ポート</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>サイズ</h4></td>
    <td><h4>69mm x53mm</h4></td>
  </tr>
  </tbody></table>

## 対応ボード

Base Shield は以下のボードでテストされており、完全に互換性があります：

- Arduino Uno（全リビジョン）/Seeeduino（V4 & V4.2）
- Arduino Mega/Seeeduino Mega
- Arduino Zero（M0）/Seeeduino Lorawan
- Arduino Leonardo/Seeeduino Lite
- Arduino 101
- Arduino Due 3.3V
- Intel Edison 5V
- Linkit One

:::caution
Grove Base Shield のデフォルトの I2C ピンは D70/D71 ですが、Arduino DUE のデフォルトの I2C `Wire` は D20/D21 として定義されています。そのため、両方を一緒に使用する場合、`Wire` 定義を使用すると拡張ボードの I2C ピンを正しく使用できません。`Wire1` を使用する必要があります。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/hardware_overview.jpg" alt="pir" width={600} height="auto" /></p>

- **1-アナログポート**：4 つのアナログポート A0、A1、A2、A3 を含みます。
- **2-デジタルポート**：7 つのデジタルポート D2、D3、D4、D5、D6、D7、D8 を含みます。
- **3-UART ポート**：UART ポートを 1 つ備えています。
- **4-I2C ポート**：I2C ポートを 4 つ備えています。
- **5-電源スイッチ**：Arduino UNO と Base Shield v2 を使用する場合は、スイッチを 5V の位置にしてください。Seeeduino Arch と Base Shield v2 を使用する場合は、スイッチを 3.3V にしてください。
- **6-リセットボタン**：Arduino ボードをリセットします。
- **7-PWR LED**：電源投入時に緑色の LED が点灯します。
- **8-P1, P2**：Base Shield v2 を Seeeduino V3 と一緒に使用する場合は、パッド P1 と P2 をはんだ付けしてください。
- **寸法**：2.1 × 2.7 インチ  

## 入門ガイド

### ハードウェア

- ステップ 1. 以下のものを準備します：

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4.2</h3></td>
    <td><h3>Base Shield</h3></td>
    <td><h3>Grove - Buzzer</h3></td>
    <td><h3>Grove - Button</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>今すぐ入手</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>今すぐ入手</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>今すぐ入手</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>今すぐ入手</span></a></h4></td>
  </tr>  
  </tbody></table>

- ステップ 2. Grove - Buzzer を Base Shield のポート D3 に接続します。
- ステップ 3. Grove - Button を Base Shield のポート D2 に接続します。
- ステップ 4. Base Shield を Seeeduino に挿し込みます。
- ステップ 5. Seeeduino を USB ケーブルで PC に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-3.png" alt="pir" width={600} height="auto" /></p>

### ソフトウェア

- ステップ 1. 下記のコードを Arduino IDE にコピーし、Seeeduino に書き込みます。

```cpp
const int button = 2;       // connect a button
const int buzzer = 3;       // connect a buzzer
void setup()
{
    pinMode(button, INPUT); //set button as an INPUT device
    pinMode(buzzer, OUTPUT);   //set LED as an OUTPUT device
}
void loop()
{
    int btn = digitalRead(button); //read the status of the button
    digitalWrite(buzzer, btn);
    delay(10);
}
```

- ステップ 2. ボタンを押すと、ブザーが鳴ります。

## FAQ

すべての Base Shield V2 に関する FAQ を見るには[こちら](http://support.seeedstudio.com/knowledgebase/articles/1826443-base-shield-v2-sku-103030000)をクリックしてください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Wiki PDF をダウンロード](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shiled V2 回路図（SCH）](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shiled V2 基板（PCB）](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shiled V2 回路図（SCH）](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shiled V2 基板（PCB）](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
