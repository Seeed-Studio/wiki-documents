---
description: BeagleBone®用 Grove Base Cape v2
title: BeagleBone®用 Grove Base Cape v2
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_Cape_for_BeagleBone_v2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg)

**Grove Base Cape for BeagleBone®** v2は、BeagleBone®プラットフォーム用のGroveシステム拡張ボードです。このケープを使用すると、Groveモジュールとして提供される多くのトランスデューサ（センサーおよびアクチュエータ）をBeagleBone®プラットフォームに簡単に接続できます。このボードには256kbのシリアルEEPROMも含まれています。はんだ付け不要の設計とコンパクトなプラグアンドプレイポートにより、製品開発プロセスでの労力を大幅に削減できます。

このケープは、Groveモジュールの大家族とプラグアンドプレイを行うための12個の使いやすいGroveコネクタを提供します。コネクタには、2x UART、2x ADC、4x デジタルI/O、4x I2Cが含まれており、BeagleBone®ボードのピンにインターフェースします。これにより、ほぼすべての必要な機能が提供されます。また、アドレス競合が発生した場合にI2Cアドレスをリセットするための2つのスイッチが用意されています。さらに、通常の5Vから3.3Vおよびその逆への電圧変換用スイッチも統合されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)

## 特徴

---

* BeagleBone®とGroveモジュール間の接続が簡単に。
* はんだ付け不要。
* 時間とコストを節約。

## 仕様

---
<table>
  <tbody><tr>
      <td> 出力電圧 </td>
      <td> 3.3 V または 5 V（切り替え可能）</td>
    </tr>
    <tr>
      <td> 最大出力電流 </td>
      <td> 3.3Vで500mA、5Vで500mA</td>
    </tr>
    <tr>
      <td> デジタルGroveポート </td>
      <td> 6（UART1（ラベル付き）およびUART4（ラベル付き）と同じピンを共有）</td>
    </tr>
    <tr>
      <td> アナログGroveポート </td>
      <td> 2</td>
    </tr>
    <tr>
      <td> I<sup>2</sup>C Groveポート </td>
      <td> 4</td>
    </tr>
    <tr>
      <td> UART Groveポート </td>
      <td> 2（UART1、UART4）</td>
    </tr>
    <tr>
      <td> EEPROM </td>
      <td> 256kb（モデル: CAT24C256WI）</td>
    </tr>
    <tr>
      <td> 寸法 </td>
      <td> 長さ70mm × 幅50mm</td>
    </tr></tbody></table>

### 部品リスト

<table>
  <tbody><tr>
      <th>部品名 </th>
      <th> 数量</th>
    </tr>
    <tr>
      <td>BeagleBone®用 Grove Base Cape v2 </td>
      <td> 1個</td>
    </tr></tbody></table>

## ハードウェア概要

---
![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_hardware_overview_1200.jpg)

**出力電圧スイッチ**は、Groveポートへの出力電圧を制御するスイッチです。

**USERボタン**は、BeagleBone®のUSERボタンとして使用できるボタンです。

**ケープアドレススイッチ**は、複数のケープが接続されている場合にI2Cアドレスの競合を回避するためにケープアドレスを選択するスイッチです。複数のケープの使用に関する詳細は、[https://beagleboard.org/Support/bone101/#capes](https://beagleboard.org/Support/bone101/#capes)および[http://elinux.org/BeagleBone_Community#Capes](http://elinux.org/BeagleBone_Community#Capes)をご覧ください。このスイッチを使用して、**00**（バイナリ、工場出荷時設定でプルダウン）から**11**（バイナリ、Grove Base Cape for BeagleBone v2上）までのアドレスを選択できます。これにより、すべてのケープで0x54から0x57に対応します。

**書き込み保護ピン**は、これらのピンが接続されている場合にケープのEEPROMの書き込み保護を無効にするために使用されます。デフォルトでは接続されていません。

**LMV324オペアンプ**は、アナログ電圧を制御するための低電圧レールツーレール出力オペアンプです。[詳細はこちら](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

**TXB0108PW**は、8ビット双方向電圧レベル変換器です。[詳細はこちら](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf)。

**注意** Grove Base Cape for BeagleBone® v2.0の一端には、穴のある丸い角のノッチが2つあります。この端は、BeagleBone® Greenの同じノッチがある端に対応しています。このノッチを使用して、正しい向きを確保できます。

## はじめに

このセクションでは、このボードを使用するための基本的な例を紹介します。さらに多くのデモは [BeagleBone® Recipes](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) ページで見つけることができます。これらのプロジェクトに Grove Base Cape for BeagleBone® v2 を追加することで、配線接続を便利にすることができます。

### 推奨読書

* [BeagleBone® Green](/ja/BeagleBone_Green)

* [BeagleBone® コミュニティ](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

### 必要な材料

* Grove Base Cape for BeagleBone® v2 × 1

* [Grove - Button](https://www.seeedstudio.com/item_detail.html?p_id=766) × 1

* [BeagleBone® Green](https://www.seeedstudio.com/item_detail.html?p_id=2504) (HDMI出力なしでBeagleBone® Blackと完全互換)

* USBケーブル (タイプAからタイプB、Arduino用) × 1 または USBケーブル (タイプAからマイクロタイプB、Seeeduino用) × 1

* [Groveケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

### コーディング作業

1. BeagleBone® Green をUSBケーブルでPCまたはMACに接続します。[http://192.168.7.2:3000/ide.html](http://192.168.7.2:3000/ide.html) をクリックしてCloud9 IDEを開きます。

2. Grove - Button(P) をGroveケーブルを使ってGrove Base Cape for BeagleBone® v2に接続します。GroveケーブルをGPIOピン51に差し込みます。

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_1200.jpg)

3. 以下のコードをCloud9にコピーし、**.js** ファイルとして保存します。

```
var b = require('bonescript');
b.pinMode('P9_16', b.INPUT);//GPIO 51はP9_16に対応します。詳細は https://beagleboard.org/Support/bone101/#headers を参照してください。

setInterval(check,1000);

function check(){
    b.digitalRead('P9_16', checkButton);
}

function checkButton(x) {
    console.log(x.value);
    if(x.value == 1){
        console.log("Groveボタンを押しています");
    }
    else{
        console.log("Groveボタンを押していません");
    }
}
```

4. Cloud9 IDEで **Run** をクリックして、BeagleBone® Green上でプログラムを実行します。

5. 約10秒待つと、Cloud9 IDEの下部に出力が表示されます。出力は以下のスクリーンショットのようになる可能性があります：

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_result_600_s.png)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [EAGLE回路図＆PCBファイルおよびPDF形式の回路図](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip)

* [BeagleBone® Green](/ja/BeagleBone_Green)

* [BeagleBone® コミュニティ](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

* [Cloud9](https://c9.io/)

* [TXB0108PW データシート](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf)

* [LMV324 データシート](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

* その他のデモは [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) および [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) で確認できます。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>