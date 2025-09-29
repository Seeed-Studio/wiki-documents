---
description: Photon用Grove Base Shield
title: Photon用Grove Base Shield
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_Shield_for_Photon
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_product_view_1200_s.jpg)

<!-- **Photon用Grove Base Shield**は、[Grove](/ja/Grove_System)ポートを組み込んだ拡張シールドボードで、より強力で知的なアプリケーションを、より豊富でコスト効率の高いGrove機能モジュールを使用して構築することができます。デジタルポート3つ、アナログポート2つ、I<sup>2</sup>Cポート2つ、UARTポート1つを備えています。これはプラグアンドプレイ型のボードであり、プロトタイピングプロセスを劇的に加速します。 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Particle-Photon-Base-Shield-p-2598.html?cPath=98_106_57)

## 特徴
---
*   Groveインターフェース対応

*   低コストで大量のGroveモジュールに接続可能

*   I<sup>2</sup>C、UARTポート統合

## アプリケーションアイデア
---
*   スマートルーターなどのコンパクトなIoTアプリケーション

## 仕様
---
| 項目 | 仕様 |
|---|---|
| Groveポート | 3つのデジタルポート<br/>2つのアナログポート<br/>2つのI<sup>2</sup>Cポート<br/>1つのUARTポート |
| 寸法 | 53 × 53 mm |
| 重量 | 18g |

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_component_diagram_annotated_1200_s.jpg)

### **部品リスト**

| 部品名 | 数量 |
|---|---|
| Photon用Grove Base Shield | 1個 |

## はじめに
---
**注意:** このケースでは一般的な開発環境を示します。

<!-- ### 必要な材料

*   [Particle Photon](https://www.seeedstudio.com/depot/Particle-Photon-p-2527.html) × 1

*   USBケーブル（タイプAからマイクロタイプB） × 1
*   PCまたはMac

*   Photon用Grove Base Shield × 1

*   [Grove - Buzzer](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38) × 1 -->

### ブザーを鳴らす

1. [こちら](https://docs.particle.io/guide/getting-started/connect/core/)を参照してデバイス（PCまたはMac）に接続してください。

!!!注意
    1. 特にWindows 10ユーザーには**node.js v4.2.3 LTS**を選択することをお勧めします。
    2. **particle setup**コマンドを実行した後にもう1つのステップが必要になる場合があります。それは、Windows 10で特に、名前に**Photon**を含むWi-Fiアクセスポイントにデバイス（PCまたはMac）を接続することです。

2. プロジェクトには[Web IDE](https://build.particle.io/)を使用してください。アカウントでログインし、デバイスを選択します（左列の2番目のアイコンをクリック）。

:::注意
    インターネット接続があまり良くない場合は、Particle Devを使用するよりも[Web IDE](https://build.particle.io/)を選択してコードをコンパイルまたはPhotonにフラッシュすることをお勧めします。
:::
3. 以下のように接続してください:

![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_demo_conneciton_1200_S.jpg)

4. 次に、以下のコードをWeb IDEにコピーして、左列の最初のアイコン（稲妻のようなアイコン）をクリックしてPhotonにフラッシュしてください。

:::注意
    コードは_**filename.ino**_という名前のタブにのみコピーしてください。
:::
```
/*
   ブザーを鳴らす
   デジタルピンD4を使用
   このサンプルコードはパブリックドメインです。
   作成者: xiaohe
  */
int led1 = D4; //D4を出力として設定

void setup() {
    pinMode(led1, OUTPUT);
}

void loop() {
    // ブザーを有効化
    digitalWrite(led1, HIGH);

    // 1秒間オンにします...
    delay(1000);

    // 次にオフにします...
    digitalWrite(led1, LOW);

    // 1秒間待機...
    delay(1000);

    // これを繰り返します！
}
```

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
*   [回路図ファイル](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip)

<!-- *   [Grove_System](/ja/Grove_System) -->

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