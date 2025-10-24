---
description: Grove - 円形フォースセンサー FSR402
title: Grove - 円形フォースセンサー FSR402
keywords:
- Grove Grove_Sensors タッチ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Round_Force_Sensor_FSR402
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/main.jpg)

Grove-円形フォースセンサー(FSR402)は、圧力に応じて抵抗が変化するフォースセンシティブモジュールです。センサーの先端には円形のフォースセンシティブ抵抗があり、この抵抗に加えられる圧力に応じて抵抗値が変化します。
簡単に言えば、圧力が大きいほど抵抗は小さくなります。ただし、このセンサーの出力は厳密には線形ではないため、正確な測定には推奨されません。圧力と抵抗の関係についての詳細は、[FSR402 データシート](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf)をご確認ください。

ご覧の通り、このモジュールはFSR402をベースにしています。Interlink ElectronicsのFSR® 400シリーズは、単一ゾーンのForce Sensing Resistor®ファミリーの一部です。フォースセンシングレジスタ（FSR）は、センサー表面に加えられる力が増加するにつれて抵抗が減少する特性を持つ、堅牢なポリマー厚膜（PTF）デバイスです。この力感知特性は、自動車電子機器、医療システム、産業用制御、ロボット工学などのヒューマンマシンインターフェースデバイスでの使用に最適化されています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-円形フォースセンサー(FSR402) | 初期リリース                                                                                               | 2018年6月      |

## 特徴

- アナログ出力
- 信頼性の高い機械構造  
- 高耐久性:

    1kg、4Hzで1,000万回の作動テスト済み / 平均抵抗変化 -10%

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V/5V|
|フォース感度範囲|0.2N--20N|
|フォース解像度|連続（アナログ）|
|アナログ出力|0-650|
|非作動時抵抗|>10 MΩ|
|最小抵抗|1 KΩ|
|デバイス応答時間|&lt;3マイクロ秒|
|サイズ|長さ: 75mm 幅: 20mm 高さ: 11mm|
|重量|2.5g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 10mm|
|総重量|10g|

:::tip
非作動時抵抗を測定したい場合は、センサーからこの部品を取り外してください。
:::

## 応用例

- 自動車電子機器
- 医療システム
- 産業用制御
- ロボット工学

## ハードウェア概要

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/pin_map.jpg)

### 回路図

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/hardware.png)

このモジュールは、DC-DCチップXC6206P332MRを使用して安定した3.3Vを供給します。図中で「3V3」と呼ばれる部分です。フォースセンサー**J1**は可変抵抗として考えることができ、これを**R<sub>f<sub></sub></sub>**とします。圧力が大きいほど、**R<sub>f<sub></sub></sub>**の値は小さくなります。

上記の図には2つの部分があります。左側の部分については：

<font color="#EE9A00">VIN = (3.3*30K)/(30K+R_f)</font>

右側の部分はエミッタフォロワーで、アンプ**U1**を使用して前段と後段の回路を分離しています。

<font color="#EE9A00">Vout = VIN</font>

したがって、出力は次のようになります：

<font color="#EE9A00">Vout = (3.3*30K)/(30K+R_f)</font>

:::tip
このセクションでは回路図の一部のみを示しています。完全なドキュメントについては、[リソース](#resources)をご参照ください。
:::

### 機械図面

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_A.jpg)
![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_B.jpg)
![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Exploded_View.jpg)

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove-Round Force Sensor(FSR402) |Grove-LED|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">今すぐ購入</a>|

:::note
 **1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本の線しかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove-Round Force Sensor(FSR402)をGrove-Base Shieldのポート**A0**に接続します。

- **ステップ 2.** Grove-LEDをGrove-Base Shieldのポート**D3**に接続します。

- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/connect.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove-Round Force Sensor(FSR402)|
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| 接続なし       | 白                   |
| A0           | 黄                  |

| Seeeduino     | Grove-LED|
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| 接続なし       | 白                   |
| D3            | 黄                  |

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を確認することを強くお勧めします。
:::

- **ステップ 1.** Arduino IDEを開き、新しいファイルを作成し、以下のコードを新しいファイルにコピーします。

```cpp
/* Arduinoで力感知抵抗を使用してLEDの明るさを調整する方法
   詳細情報: http://www.ardumotive.com/how-to-use-a-force-sensitive-resistor-en.html
   開発者: Michalis Vasilakis // 日付: 22/9/2015 // www.ardumotive.com  */

//定数:
const int ledPin = 3;     //ピン3はPWM機能を持つ
const int sensorPin = A0; //ピンA0はアナログ入力を読み取る

//変数:
int value; //アナログ値を保存


void setup(){
    
  pinMode(ledPin, OUTPUT);  //ピン3を「出力」として設定
  Serial.begin(9600);       //シリアル通信を開始

}

void loop(){
  
  value = analogRead(sensorPin);       //ポテンショメータからアナログ値を読み取り保存
  Serial.println(value);               //値を出力
  value = map(value, 0, 1023, 0, 255); //値を0-1023から0-255（PWM）にマッピング
  analogWrite(ledPin,255-value);          //LEDにPWM値を送信
  delay(100);                          //短い遅延
  
}

```

- **ステップ 2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 3.** Arduino IDEの**シリアルモニター**を開きます。**ツール->シリアルモニター**をクリックするか、++ctrl+shift+m++キーを同時に押します。すべてが正常に動作している場合、A0の出力が表示されます。また、Round Force Sensorを強く押すとLEDが明るくなるのが確認できます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-Round Force Sensor(FSR402) eagleファイル](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [FSR402のデータシート](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf)

## プロジェクト

こちらはこの製品の紹介動画です。簡単なデモが含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/55WQ3ia52JM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>