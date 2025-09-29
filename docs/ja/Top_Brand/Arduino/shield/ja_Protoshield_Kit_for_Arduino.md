---
description: Protoshield_Kit_for_Arduino
title: Arduino用Protoshieldキット

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Protoshield_Kit_for_Arduino
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/ProtoShield.jpg" alt="pir" width={600} height="auto" /></p>

コンパクトで柔軟なProto Shieldキットを使用して、独自のArduinoシールドを作成しましょう。このキットを使えば、無限の回路をはんだ付けして、すべてのArduinoプロジェクトで再利用することができます。標準的な0.1インチのプロトタイピンググリッドは、一般的に使用されるスルーホール部品やチップに対応しています。基本的な部品（抵抗、ポテンショメータ、LED、スイッチ）が含まれており、カスタムシールドの作成をすぐに始めることができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Protoshield-Kit-for-Arduino-p-318.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴
---
* Arduino互換

* 0.1インチピッチの広いプロトタイピングエリア

* ほとんどの部品に対応するさまざまなスルーホールサイズ

* Arduino UARTおよびI2Cポートピンのブレークアウトにより、外部通信インターフェースが簡単

* デュアルISPブレークアウトにより、プログラミングとスタッキングが簡単

* 3.3ボルト、5ボルト、およびグランドの電源レールがボード上のどこでも簡単に利用可能

* ブレッドボードスタイルのプロトタイピングエリア

* USBタイプBコネクタ

* 基本的な部品が含まれています（ボタン、スイッチ、LED、抵抗、USBジャック）

## キットに含まれる部品
---
* Arduino互換Protoボード 1枚

* BタイプUSBコネクタ 1個

* 40ピン 2.54mmオスロングヘッダー 1個

* 40ピン 2.54mmメスヘッダー 1個

* 40ピン 2.54mmオスヘッダー 2個

* 40ピン 2.54mmスペーサー 1個

* 8ピン 2.54mmメスヘッダー 3個

* 6ピン 2.54mmメスヘッダー 1個

* ISPメスピンヘッダー 1個

* ISPオスピンヘッダー 1個

* 10kΩポテンショメータ 1個

* 1kΩ抵抗 4個

* 10kΩ抵抗 2個

* 3mm赤色LED 2個

* 3mm緑色LED 2個

* 3mmデュアルカラーLED 1個

* ミニプッシュボタンスイッチ 4個

* DPDTスイッチ 2個

## ボードトレース回路図
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/ProtoShield_Kit.png" alt="pir" width={600} height="auto" /></p>

## 組み立て

**ステップ1:** 電源ソケットのアウトラインの穴に赤色LEDをはんだ付けします。LEDの平らな側をボードのアウトラインに合わせることを確認してください。次に、緑色LEDをボードのピン13アウトラインの穴にはんだ付けします。同様に、LEDの平らな側をボードのアウトラインに合わせてください。R1とR2に1kΩ抵抗を2本はんだ付けします。リセットボタンとISPヘッダーを以下の写真に従ってはんだ付けします。注意: リセットボタンは、ISPヘッダーを挿入する前に取り付けると簡単です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/Step1.jpg" alt="pir" width={600} height="auto" /></p>

**ステップ2:** メスおよびオスコネクタをはんだ付けします。注意: [Seeeduino](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;zenid=15c0e10e2d81d5481f863ae4eaaf7ca1&amp;keyword=seeeduino&amp;x=0&amp;y=0)を使用する場合にのみ、ADC6およびADC7をはんだ付けしてください。Arduinoを使用する場合は、ADC6およびADC7をはんだ付けしないでください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/Step2.jpg" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/Step22.jpg" alt="pir" width={600} height="auto" /></p>

**ステップ3:** USBコネクタをUSBポートにはんだ付けし、ポテンショメータを80ミルの穴にはんだ付けします。プロジェクトに合わせて左下の電源ピンをはんだ付けします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/Step3.jpg" alt="pir" width={600} height="auto" /></p>

完成したキットは、上の写真のように見えるはずです。

## リソース
---
* [ソースファイル](https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/res/ProtoShield.brd)

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>