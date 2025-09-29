---
description: Solar Charger Shield V2.2
title: Solar Charger Shield V2.2

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Solar_Charger_Shield_V2.2
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2.jpg" alt="pir" width={600} height="auto" /></p>

ソーラーチャージャーは、Arduino互換プラットフォームにスタック可能なシールドで、適応型バッテリーパワーを可能にし、フィールドでの充電のためのエネルギーハーベスターとして機能します。3.0V～4.2Vの電圧を持つさまざまなバッテリーを使用して5V出力に昇圧することができたり、Li-ionバッテリーとソーラーパネルを組み合わせて自律型センサーユニットを構成することができます。このボードが提供する最大電流は600mAに達します。また、USBコネクタもバッテリーの充電に便利です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Solar-Charger-Shield-v2.2-p-2391.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

---

* 短絡保護
* バッテリー接続時の3W出力
* 最大900mAの連続充電電流
* バッテリーステータス表示（赤：充電中、緑：充電完了）
* Micro-USBコネクタ

## 仕様

---

* バッテリー入力電圧: 3.0~4.5V
* USB入力電圧: 4.75~5.25V
* ソーラー入力電圧: 4.8~6V
* 最大出力電力（バッテリー使用時）: 3W（600mA@5V）
* リップル電圧：&lt;100mV @ 500mA
* 寸法: 68*53mm

## 応用例

---

* ワイヤレスセンサーユニット
* ソーラー充電
* Tweet-a-volt-arduino

## ソーラーパネルを使用した充電に関する情報

---

1) ソーラーチャージャーシールドは、日光およびフィラメント電球の光の下で充電を行います。日光の下での方が、フィラメント電球よりも効果的に機能します。ソーラーパネルは、紫外線や赤外線といった目に見えない放射線を必要とします。

2) フィラメント電球の下でシステムをテストする場合、ソーラーパネルを20cm未満（&lt; 0.5フィート）の距離に保ちます。ただし、フィラメント電球の下では充電が効果的でない場合があります。

3) ソーラーパネルに最大限の日光が当たるような角度に配置してください。

4) ソーラーパネルを過剰な水や水蒸気への露出から保護してください。これによりソーラーパネルの表面が酸化し、性能が低下する可能性があります。

5) ソーラーパネルには通常、保護用の透明なシートが付いています。ソーラーパネルの性能を向上させるために、この透明なプラスチックシートを取り外してください。

6) ソーラーパネルの表面を傷から保護してください。

## 注意事項

---

1) ソーラーチャージャーシールドは、潜在的な短絡を防ぐよう設計されています。ただし、そのような状況を避けるために注意が必要です。

2) ソーラーシールドは、5Vを超える電圧で動作させないでください。

## 使用方法

---

1) 以下の図に示すように、ソーラーパネルとLi-Polバッテリーを指定された場所に接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_inputs.jpg" alt="pir" width={600} height="auto" /></p>

Solar_Charger_Shield_v2.2_inputs.jpg

2) 「ソーラーパネルの使用に関する情報」セクションで説明されているように、ソーラーパネルを日光またはフィラメント電球の下に配置します。

3) 以下の図に示すように、充電中（赤）のライトが点灯していることを確認してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_charging.jpg" alt="pir" width={600} height="auto" /></p>

4) バッテリーが完全に充電されると、緑色のライトが点灯します。

5) その後、シールドをArduinoに取り付けることができます。ソーラーチャージャーシールドに電源を入れると、以下の図に示すようにArduinoが電源を供給されるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar-Charger-Shield-v2.2_power-arduino.jpg" alt="pir" width={600} height="auto" /></p>

## Arduinoプログラムを使用したソーラーシールドのテスト

---
このセクションでは、Lipoバッテリーの電圧を測定する方法を説明します。

VBATピンをアナログピンA0に接続し、A0ピンからデータを読み取るためには、図に示すようにR7を0Ω抵抗でショートする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_shortR7.jpg" alt="pir" width={600} height="auto" /></p>

### プログラミング例

以下の例を使用してバッテリーの電圧を測定できます：

```cpp
/*
 ソーラー充電シールド電圧測定例。VBATピンをアナログピンA0に接続してください。

 ピンは直射日光が当たらない場合は2.0Vを測定し、日光が当たる場合は5Vを測定します。

 この例のコードはパブリックドメインです。
 */

// これらの定数は変更されません。使用されるピンに名前を付けるために使用されます：
const int analogInPin = A0;  // VBATピンが接続されているアナログ入力ピン

int BatteryValue = 0;        // VBATピンから読み取った値
float outputValue = 0;       // 電圧計算用の変数

void setup() {
    // シリアル通信を9600bpsで初期化：
    Serial.begin(9600);
}

void loop() {
    // アナログ入力値を読み取る：
    BatteryValue = analogRead(analogInPin);
    // バッテリー電圧値を計算する
    outputValue = (float(BatteryValue)*5)/1023*2;
    // 結果をシリアルモニターに出力する：
    Serial.print("アナログ値 = " );
    Serial.print(BatteryValue);
    Serial.print("\t 電圧 = ");
    Serial.println(outputValue);
    Serial.println("V \n");

    // 次のループの前に10ミリ秒待機
    // 最後の読み取り後にアナログ-デジタルコンバータが安定するため：
    delay(10);
}
```

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---
* [Solar Charger Shield v2.2 sch&amp;pcb](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip)

* [Solar Charger Shield v2.2.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar%20Charger%20Shield%20v2.2.pdf)
* [DSE-CN3065.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/DSE-CN3065.pdf)

* [ETA1036.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/ETA1036.pdf)

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