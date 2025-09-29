---
description: Base_Shield_V2
title: Base Shield V2

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Base_Shield_V2
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" alt="pir" width={600} height="auto" /></p>

Arduino Unoはこれまでで最も人気のあるArduinoボードですが、プロジェクトで多くのセンサーやLEDを必要とする場合、ジャンパーワイヤーが混乱してしまうことがあります。Base Shieldを作成した目的は、ブレッドボードやジャンパーワイヤーを取り除くことです。Base Shield上の豊富なGroveコネクタを使用することで、Arduino UnoにすべてのGroveモジュールを簡単に追加できます！Base Shield V2のピン配置はArduino Uno R3と同じです。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/base-shield-v13-p-1378.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
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
    <td><h4>初期リリース</h4></td>
    <td><h4>2011年10月</h4></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.3</h4></td>
    <td><h4>Groveコネクタのレイアウトと数量を変更</h4></td>
    <td><h4>2012年8月</h4></td>
  </tr>  
  <tr>
    <td><h4>Base Shield V2.0</h4></td>
    <td><h4>Groveコネクタのレイアウトと数量を変更し、3.3Vと5Vの両方を有効にする電源スイッチを追加</h4></td>
    <td><h4>2014年3月</h4></td>
  </tr>
  </tbody></table>

## 仕様

<table align="center">
  <tbody>
  <tr>
    <td><h3>パラメータ</h3></td>
    <td><h3>値/範囲</h3></td>
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
    <td><h4>UARTポート</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>I2Cポート</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>サイズ</h4></td>
    <td><h4>69mm x 53mm</h4></td>
  </tr>
  </tbody></table>

## 対応ボード

Base Shieldは以下のボードでテストされ、完全に互換性があります：

- Arduino Uno（すべてのリビジョン）/ Seeeduino（V4 & V4.2）
- Arduino Mega / Seeeduino Mega
- Arduino Zero（M0）/ Seeeduino Lorawan
- Arduino Leonardo / Seeeduino Lite
- Arduino 101
- Arduino Due 3.3V
- Intel Edison 5V
- Linkit One

:::caution
Grove Base ShieldのデフォルトのI2CピンはD70/D71ですが、Arduino DUEのデフォルトのI2C WireはD20/D21として定義されています。そのため、両方を一緒に使用する場合、`Wire`定義を使用すると拡張ボードのI2Cピンを正しく使用できません。`Wire1`を使用する必要があります。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/hardware_overview.jpg" alt="pir" width={600} height="auto" /></p>

- **1-アナログポート**: A0, A1, A2, A3の4つのアナログポートを含む。
- **2-デジタルポート**: D2, D3, D4, D5, D6, D7, D8の7つのデジタルポートを含む。
- **3-UARTポート**: 1つのUARTポート。
- **4-I2Cポート**: 4つのI2Cポート。
- **5-電源スイッチ**: Arduino UNOとBase Shield v2を使用する場合はスイッチを5V位置に切り替えます。Seeeduino ArchとBase Shield v2を使用する場合はスイッチを3.3V位置に切り替えます。
- **6-リセットボタン**: Arduinoボードをリセットします。
- **7-PWR LED**: 電源がオンになると緑色のLEDが点灯します。
- **8-P1, P2**: Seeeduino V3とBase Shield v2を使用する場合、P1とP2のパッドをはんだ付けしてください。
- **寸法**: 2.1 * 2.7インチ  

## はじめに

### ハードウェア

- ステップ 1. 以下のものを準備してください：

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
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
  </tr>  
  </tbody></table>

- ステップ 2. Grove - Buzzer を Base Shield のポート D3 に接続します。
- ステップ 3. Grove - Button を Base Shield のポート D2 に接続します。
- ステップ 4. Base Shield を Seeeduino に差し込みます。
- ステップ 5. USB ケーブルを使用して Seeeduino を PC に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-3.png" alt="pir" width={600} height="auto" /></p>

### ソフトウェア

- ステップ 1. 以下のコードを Arduino IDE にコピーし、Seeeduino にアップロードします。

```cpp
const int button = 2;       // ボタンを接続
const int buzzer = 3;       // ブザーを接続
void setup()
{
    pinMode(button, INPUT); // ボタンを入力デバイスとして設定
    pinMode(buzzer, OUTPUT);   // LEDを出力デバイスとして設定
}
void loop()
{
    int btn = digitalRead(button); // ボタンの状態を読み取る
    digitalWrite(buzzer, btn);
    delay(10);
}
```

- ステップ 2. ボタンを押すと、ブザーが鳴ります。

## FAQ

Base Shield V2 に関するすべての FAQ を確認するには、[こちら](http://support.seeedstudio.com/knowledgebase/articles/1826443-base-shield-v2-sku-103030000)をクリックしてください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Wiki PDF をダウンロード](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shield V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shield V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shield V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shield V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.pdf)

## プロジェクト

**Smart Plant IoT**: Helium と Microsoft Azure IoT を活用して植物の自動給水と健康状態の追跡を行うプロジェクト。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/Nyceane/smart-plant-iot-59cbc3/embed" width={350} />

**ソーラーパワー環境モニタリングキット**: 空気質、音量、湿度、温度をモニタリングするためのソーラーパワーを利用したオープンソースキット。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed" width={350} />

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供できるよう、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>