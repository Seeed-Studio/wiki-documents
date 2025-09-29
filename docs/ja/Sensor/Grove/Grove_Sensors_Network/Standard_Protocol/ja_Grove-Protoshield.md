---
title: Grove - Protoshield
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Protoshield.md/
slug: /ja/Grove-Protoshield
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proto1.jpg)

このGroveは、Groveシステムのプロトタイプに独自の回路やコンポーネントを追加することを可能にします。Groveコネクタケーブルの4本のライン（S0、S1、VCC、GND）すべてにアクセスできます。また、通常開ボタン用のスペースも確保されています。標準的な2.54mmピッチにより、通常のDIP形式のICやその他のコンポーネントを基板に簡単に取り付けることができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Protoshield-p-772.html)

## 特徴

---

* 標準化されたGroveインターフェース
* ブレッドボードスタイル
* 標準ピッチ
* シルクスクリーンラベル
* 通常開ボタン用のスペース確保

## インターフェース

---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Grove-Protoshield_Interface_1.jpg)

GroveインターフェースのVCCとGNDは、上図のように2本のバスとして引き出されています。2本の電源バスの間にSig0とSig1のはんだ付けパッドがあります。

## 使用方法

---
GroveインターフェースのVCCとGNDは、上図のように2本のバスとして引き出されています。2本の電源バスの間にSig0とSig1のはんだ付けパッドがあります。これらは白い線でマークされています。
右側の四角いエリアは汎用の一時的なボタン用で、以下の図のように簡単に取り付けることができます。

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield1.jpg)

また、Protoshieldには2つの20ピンのオスヘッダーが付属しています。これを小さなピースに分割して、他のブレッドボードやプロトボードで拡張が必要な場合にProtoshieldに取り付けることができます。通常のブレッドボードジャンパーと相性が良いです。

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield2.jpg)

**デモ: LEDを点灯する**

1. LEDの長いピンをVCCインターフェースに、短いピンをSig0インターフェースに挿入します。

2. ProtoshieldにLEDをはんだ付けします。

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proshield3.jpg)

3. モジュールを4ピンGroveケーブルを使用してGrove - Basic Shieldのデジタル8に接続します。

4. Grove - Basic ShieldをArduinoに差し込み、USBケーブルを使用してArduinoをPCに接続します。

5. 以下のコードを新しいArduinoスケッチにコピー＆ペーストしてください。アップロード方法がわからない場合は[こちら](https://wiki.seeedstudio.com/ja/Upload_Code)をクリックしてください。

```
デモコード:
int led = 8;

// setupルーチンはリセットボタンを押したときに1回実行されます:
void setup() {
    // デジタルピンを出力として初期化します。
    pinMode(led, OUTPUT);
}

// loopルーチンは永遠に繰り返し実行されます:
void loop() {
    digitalWrite(led, HIGH);   // LEDを点灯 (HIGHは電圧レベル)
    delay(1000);               // 1秒待機
    digitalWrite(led, LOW);    // 電圧をLOWにしてLEDを消灯
    delay(1000);               // 1秒待機
}
```

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---
* [Grove_-_Protoshield Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip)

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