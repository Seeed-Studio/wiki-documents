---
description: Brushless_Motor_Shield_TB6605FTG
title: ブラシレスモーターシールド TB6605FTG
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Brushless_Motor_Shield_TB6605FTG
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/105030027-preview-wiki.jpg" alt="pir" width={600} height="auto" /></p>

ブラシレスモーターシールド（TB6605FTG）は、Arduino互換システム用のブラシレスモータードライバです。9V～24VのDC入力をサポートし、大電流を連続的に出力してブラシレスモーターを駆動することができます。オンボードのポテンショメータを使用して、モーターの速度を簡単に調整できます。このシールドはさまざまなモードを提供しており、4つのオンボードスイッチを使用して機能を切り替えることができます。  

オンボードのGrove I2Cインターフェースを使用すると、このシールドを他のGroveモジュールと簡単に連携させることができます。たとえば、[Grove - LCD RGB Backlight](Grove - LCD RGB Backlight)を使用してモーター速度を表示することができます。

また、このシールドをベースにした[T6605 BLDCモーターキット for Arduino](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html)もリリースしており、LCDと高品質のブラシレスモーターが含まれており、モーター速度を表示することができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 広い入力電圧範囲：9V～24V
- I2Cインターフェース
- ハードウェアによる速度調整（オンボードポテンショメータ）
- 複数のモード対応：CW/CWW、ブレーキ/通常、正弦波/方形波

## 仕様

<table align="center">
  <tbody>
  <tr>
    <td><h3>パラメータ</h3></td>
    <td><h3>値</h3></td>
  </tr>
  <tr>
    <td><h4>供給電圧</h4></td>
    <td><h4>3.3V / 5V</h4></td>
  </tr>
  <tr>
    <td><h4>DC電源入力</h4></td>
    <td><h4>9V～24V</h4></td>
  </tr>  
  <tr>
    <td><h4>最大出力電流</h4></td>
    <td><h4>0.02A</h4></td>
  </tr>
    <tr>
    <td><h4>駆動モード</h4></td>
    <td><h4>正弦波/方形波</h4></td>
  </tr>
    <tr>
    <td><h4>モーターインターフェース</h4></td>
    <td><h4>スクリュー端子</h4></td>
  </tr>
    <tr>
    <td><h4>外部Groveインターフェース</h4></td>
    <td><h4>I2C</h4></td>
  </tr>
  </tbody></table>

## ハードウェア概要

### ピン配置

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" /></a></p>

### スクリュー端子の定義

<table align="center">
  <tbody>
  <tr>
    <td><h3>ブラシレスモーターシールド</h3></td>
    <td><h3>ブラシレスモーター</h3></td>
    <td><h3>ワイヤーカラー</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>ロジック電源供給（正）</h4></td>
    <td><h4>赤</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>ロジック電源グラウンド</h4></td>
    <td><h4>黒</h4></td>
  </tr>  
  <tr>
    <td><h4>HU+</h4></td>
    <td><h4>ホールセンサー フェーズU</h4></td>
    <td><h4>オレンジ</h4></td>
  </tr>
  <tr>
    <td><h4>HV+</h4></td>
    <td><h4>ホールセンサー フェーズV</h4></td>
    <td><h4>ダークグリーン</h4></td>
  </tr>
  <tr>
    <td><h4>HW+</h4></td>
    <td><h4>ホールセンサー フェーズW</h4></td>
    <td><h4>ダークブルー</h4></td>
  </tr>
  <tr>
    <td><h4>U</h4></td>
    <td><h4>コイル フェーズU</h4></td>
    <td><h4>黄色</h4></td>
  </tr>
  <tr>
    <td><h4>V</h4></td>
    <td><h4>コイル フェーズV</h4></td>
    <td><h4>ライトグリーン</h4></td>
  </tr>
  <tr>
    <td><h4>W</h4></td>
    <td><h4>コイル フェーズW</h4></td>
    <td><h4>ライトブルー</h4></td>
  </tr>
  </tbody></table>

<div align="center"><b>表1.</b><i>配線マップ</i></div>

:::tip
42BLF01ブラシレスモーターを使用していない場合、配線の色が異なる場合があります。具体的な状況に応じて接続してください。
:::

## はじめに

### 必要な材料

- [ブラシレスモーターシールド (TB6605FTG) x1](https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html)
- [Grove - LCD RGB バックライト x1](Grove - LCD RGB Backlight)
- [Arduino または Seeeduino x1](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- ブラシレスモーター x1

または、[TB6605FTG ブラシレスモーターキット for Arduino](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html)を使用することもできます。このキットにはブラシレスモーターシールド、42BLF01ブラシレスモーター、Grove - LCD RGB バックライトが含まれています。

### ハードウェア接続

- **ステップ 1.**  
ブラシレスモーターをブラシレスモーターシールドのスクリュー端子に接続します。詳細は**表1**を参照してください。

- **ステップ 2.**  
Grove - LCD RGB バックライトをブラシレスモーターシールドの Grove I2C ポートに接続します。

- **ステップ 3.**  
ブラシレスモーターシールドを Arduino または Seeeduino に差し込みます。

- **ステップ 4.**  
シールドを DC ジャックで電源供給し、Arduino を USB ケーブルで電源供給します。

  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" /></a></p>

### ソフトウェア

:::caution
Arduino を初めて使用する場合は、開始する前に [Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) をご覧になることを強くお勧めします。
:::

- **ステップ 1.**  
[BLDC Motor Shield (TB6605) ライブラリ](https://github.com/Seeed-Studio/BLDC_Motor_Shield_TB6605) を Github からダウンロードします。  
[Grove-LCD RGB Backlight ライブラリ](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) を Github からダウンロードします。

- **ステップ 2.**  
[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino 用のライブラリをインストールします。

- **ステップ 3.**  
Arduino IDE を再起動します。サンプルを開きます。パスは次の通りです：  
**File --> Examples --> BLDC Motor Shield (TB6605) --> TB6605_demo**

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" /></a></p>

- **ステップ 4.**  
デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

:::tip success
すべてが正常に動作すれば、DC モーターが動き、LCD に速度が表示されます。ポテンショメーターを回してモーターの速度を制御することができます。  
:::

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [BLDC Motor Shield (TB6605) Eagle ファイル](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip)

- **[PDF]** [42BLF01 ブラシレスモーター仕様書](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/42BLF01-Specification.pdf)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>