---
description: XIAO ePaper Display Board(ESP32-S3) - EE05 入門ガイド
sku: 100057220
title: EE05 入門ガイド
image: https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.webp
slug: /epaper_ee05
sidebar_position: 4
last_update:
  date: 09/22/2026
  author: Nemo
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/ja/epaper_ee05/
updatedAt: '2026-09-22'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EE05 入門ガイド

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE05-p-6755.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO ESP32-S3 Plus** を搭載したディスプレイボード EE05 は、幅広い 24 ピン ePaper ディスプレイをサポートし、SenseCraft Seeedash によるノーコード UI 設計とデプロイを可能にします。拡張 IO とバッテリーコネクタ用電源スイッチを備えており、低消費電力のスマートディスプレイ用途に最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/4.jpg" style={{width:800, height:'auto'}}/></div>

### 特長

- **XIAO ESP32-S3 Plus 搭載:** 対応する ePaper ディスプレイに接続するだけですぐに動作します。
- **多用途なディスプレイサポート:** 幅広い 24 ピン ePaper ディスプレイに対応し、さまざまなプロジェクト要件に対応できます。
- **拡張 IO ポート:** 温湿度センサなどの追加センサを接続でき、機能を拡張できます。
- **スイッチ付き BAT コネクタ:** バッテリー接続を簡素化し、スイッチを統合することで効率的な電源管理と省エネを実現します。
- **SenseCraft Seeedash によるノーコード UI 設計とデプロイ:** 新しい AI 搭載ノーコードプラットフォーム SenseCraft Seeedash を使って、パーソナライズされたダッシュボードを簡単に設計・デプロイできます。ドラッグ＆ドロップ要素で UI を作成し、豊富なテンプレートから選ぶか、AI に手伝ってもらうこともできます。Web API からリアルタイムデータを接続し、数クリックで完成したダッシュボードを ePaper ディスプレイにデプロイできます。設計からデータ設定、デプロイまで、すべてが 1 つのプラットフォーム上でシームレスに完結します。

### 仕様

| パラメータ | 説明 |
|---|---|
| **プロセッサ** | XIAO ESP32-S3 Plus |
| **ePaper コネクタ** | SPI FPC 24 ピン 0.5mm |
| **バッテリーコネクタ** | JST 2.0mm |
| **スイッチ** | ハードウェア電源スライドスイッチ |
| **電源** | 3.7V リチウムバッテリー / USB Type-C |
| **ボタン** | 1x リセットボタン（側面実装） <br/> 3x ユーザーボタン（側面実装） |

### 応用例

- **スマートホームダッシュボード**: 天気情報、カレンダーイベント、各種スマートホームデバイスからの通知などのリアルタイム情報を表示します。
- **エネルギーモニタリング**: スマートメーターからの電力消費データを表示し、家庭でのエネルギー使用状況をより効率的に把握・管理できるようにします。
- **セキュリティアラート**: 人感検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **デジタルフォトフレーム**: スマートホームネットワーク上の画像を表示できる WiFi 対応デジタルフォトフレームを作成します。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Pin.png" style={{width:900, height:'auto'}}/></div>

### 対応 ePaper ディスプレイ

EE05 は、以下を含むさまざまな 24 ピン SPI ePaper ディスプレイをサポートします（これらに限定されません）。

- [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch Monochrome ePaper Display with 800x480 Pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### ボタン

EE05 には 3 つのユーザーボタンと 1 つのリセットボタンがあり、いずれも側面に配置されていてアクセスしやすくなっています。

- **Key1 / Key2 / Key3**: カスタム操作やナビゲーション用の 3 つのプログラマブルユーザーボタンです。XIAO ESP32-S3 Plus の **D1 (GPIO2)**、**D2 (GPIO3)**、**D9 (GPIO8)** にそれぞれ割り当てられており、各ボタンには 10k の外付けプルアップ抵抗が接続されています（押下時に LOW アクティブ）。
- **RESET**: EN ピンに接続されたハードウェアリセットボタンで、デバイスを再起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Buttons.jpg" style={{width:700, height:'auto'}}/></div>

### 拡張 IO ポート

EE05 には拡張 IO ポートが搭載されており、追加のセンサやモジュールを接続して、ディスプレイ機能を超えたボードの機能を拡張できます。温湿度センサ、モーションセンサ、その他の I2C/SPI 周辺機器などを接続して、より高度なプロジェクトを構築できます。

### バッテリーコネクタ

ボードには JST 2.0mm バッテリーコネクタとハードウェア電源スライドスイッチが搭載されており、3.7V リチウムバッテリーで簡単に給電でき、ポータブルかつ低消費電力のアプリケーションに適しています。

:::note
以下の現象は、SenseCraft Seeedash ファームウェア自体に固有の正常な動作です。

- ePaper ディスプレイ用途向けに最適化された低消費電力設計
- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電時、通常は約 3 か月）
- バッテリー残量が 20% 未満になると、画面にバッテリー低下アイコンが表示されます
:::

## SenseCraft Seeedash の使い方

:::note
このガイドでは、**7.5-inch Monochrome ePaper (800 x 480)** を例として使用します。このセクションのすべてのスクリーンショットは、この画面モデルを示しています。別の画面モデルを使用している場合は、手順 2 でお使いの画面用ファームウェアを選択してください — それ以外の手順はすべて同じです。
:::

:::caution
XIAO EE05 DIY Kit には、出荷時に画面専用ファームウェアはプリインストールされていません。最初に画面を接続してボードの電源を入れたとき、**画面が黒いままでも — これは正常であり不良ではありません**。まず SenseCraft Seeedash Firmware Flasher を使用して、お使いの画面モデルに対応するファームウェアを書き込む必要があります。書き込み後、ウェルカム画面とセットアップ画面が表示されます。
:::

### 事前準備

- XIAO ePaper Display Board - EE05
- 対応する ePaper ディスプレイ
- USB Type-C ケーブル
- Web ブラウザを搭載したコンピュータ（Chrome または Edge 推奨）

### 機器のセットアップ

**ステップ 1. ディスプレイと電源を接続する**

1. EE05 ボード上の 24 ピン FPC コネクタに ePaper ディスプレイを接続します。コネクタが確実にロックされていることを確認してください。
2. USB Type-C ケーブルを使用して、EE05 ボードをコンピュータに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/Connect.gif" style={{width:800, height:'auto'}}/></div>

:::tip
バッテリーでボードに給電している場合は、ハードウェアスライドスイッチが **ON** 位置になっていることを確認してください。
:::

**ステップ 2. 画面用ファームウェアを書き込む**

SenseCraft Seeedash を使用する前に、お使いの画面モデル専用のファームウェアを書き込む必要があります。

1. ブラウザで [SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi) の Web サイトを開きます。
2. 左側のサイドバーで **Tools** をクリックし、**Firmware Flasher** を選択します。
3. **Device** ドロップダウンで **XIAO EE05 DIY Kit** を選択し、リストからお使いの画面モデルを選びます（例: "7.5 inch Monochrome ePaper Display with 800*480"）。
4. **Flash** ボタンをクリックし、EE05 ボードのシリアルポートを選択して、ファームウェア書き込みプロセスを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_6.png" style={{width:800,height:'auto'}}/></div>

:::tip
シリアルポートが表示されない場合は、ボード上の **RESET** ボタンを押すか、別の USB ケーブルを使用してみてください（充電専用ではなくデータ通信に対応していることを確認してください）。
:::

**ステップ 3. ウェルカム画面**

ファームウェアの書き込みが完了すると、ボードは自動的に再起動します。SenseCraft Seeedash のウェルカム画面が表示され、その後に Wi-Fi セットアップ画面が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_1.png" style={{width:300,height:'auto'}}/></div>

### ネットワーク設定

**ステップ 4. Wi-Fi に接続する**

スマートフォンを使用して、画面に表示されている QR コードをスキャンします。スマートフォン上の指示に従い、ローカル Wi-Fi の SSID とパスワードを入力して、EE05 をインターネットに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**ステップ 5. デバイスをバインドする**

ネットワーク設定が正常に完了すると、画面が再度リフレッシュされ、一意の **Pair Code** が表示されます。次のステップでこのコードを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### プラットフォームでのバインドと更新

**ステップ 6. SenseCraft Seeedash 上でデバイスをバインドする**

[SenseCraft Seeedash Platform](https://sensecraft.seeed.cc/hmi/device) にアクセスし、アカウントにログインします。デバイス管理セクションに移動して **New Device** を選択し、E-ink 画面に表示されている Pair Code を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**ステップ 7. 新しいインターフェースを作成してプッシュする**

SenseCraft Seeedash プラットフォームで、7.5インチ画面に適したテンプレートを選択して新しいインターフェースを作成するか、画像をアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_4.png" style={{width:500, height:'auto'}}/></div>

**ステップ 8. 画像を適用する**

完了したら、"Apply" ボタンをクリックし、EE05 デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_5.png" style={{width:800, height:'auto'}}/></div>

**ステップ 9. 画面に表示する**

最後に EE05 がデータを受信し、7.5インチ画面を新しいコンテンツでリフレッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_3.png" style={{width:300, height:'auto'}}/></div>

## Arduino でのはじめ方

### Seeed GFX2 ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ち、かつそれとは**互換性がありません**。すでに TFT ライブラリやその他の類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX2 ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

ライブラリをダウンロードしたら、**スケッチ** -> **ライブラリをインクルード** -> **.ZIP 形式のライブラリをインストール** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### プログラムの設定と書き込み

画像に示すように、次のメニューからサンプルへ移動します：
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → XIAO ePaper Display Board - EE05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Arduino_2.png" style={{width:800, height:'auto'}}/></div>

:::note
このガイドでは、例として **7.5-inch Monochrome ePaper (800 x 480)** を使用しています。別の画面をお持ちの場合は、代わりに `EE05` 配下の、ご自身のパネルモデルに対応するサンプルフォルダを開いてください。
:::

その後、**ツール** -> **ボード** -> **XIAO ESP32S3 Plus** および **ツール** -> **シリアルポート** -> **ボードが接続されているポートを選択** に進みます。 

PSRAM が有効になっていることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

その後、**Upload** をクリックしてコードを書き込みます。
これで ePaper 画面にフィードバックが表示されます！ 以下は HelloWorld サンプルの結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Arduino_1.png" style={{width:500, height:'auto'}}/></div>

## ソフトウェア概要

### ボタンテストのサンプル

EE05 には 3 つのユーザーボタン（シルク印刷：Key1 / Key2 / Key3）があり、プロジェクトで使用できます。回路図によると、これらは D1（GPIO2）、D2（GPIO3）、D9（GPIO8）にマッピングされており、3.3V への外付け 10k プルアップが接続されています — ボタンを押すとピンが LOW に引き下げられます。以下は簡単なボタンテストのサンプルです：

```cpp
#define KEY1_PIN  2  // Key1 -> D1 (GPIO2)
#define KEY2_PIN  3  // Key2 -> D2 (GPIO3)
#define KEY3_PIN  8  // Key3 -> D9 (GPIO8)

void setup() {
  Serial.begin(115200);
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(KEY1_PIN) == LOW) {
    Serial.println("Key1 (GPIO2) pressed");
    delay(200);
  }
  if (digitalRead(KEY2_PIN) == LOW) {
    Serial.println("Key2 (GPIO3) pressed");
    delay(200);
  }
  if (digitalRead(KEY3_PIN) == LOW) {
    Serial.println("Key3 (GPIO8) pressed");
    delay(200);
  }
}
```

## リソース

- **[PDF]** [XIAO ePaper Display Board Ex05 回路図](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_EE05_V1.11_SCH&PCB_260420.zip)
- **[GitHub]** [Seeed_GFX2 ライブラリ](https://github.com/Seeed-Studio/Seeed_GFX2)
- **[Website]** [SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi)

## トラブルシューティング

**Q1: コードを書き込んだ後も画面に何も表示されません。**

- **FPC ケーブルを確認**：ePaper の FPC ケーブルが正しい向きで挿入され、コネクタでしっかりロックされていることを確認してください。
- **PSRAM が有効か確認**：Arduino IDE の Tools → PSRAM で "OPI PSRAM" を選択していることを確認してください。
- **画面モデルの選択を確認**：お使いの画面モデルに対して正しいサンプルを選択しているか、再度確認してください。

**Q2: 色が反転している、または表示が異常なパターンになります。**

- **正確なモデルを選択**：画面サイズや IC のリビジョンが異なると、特定の設定が必要になります。お使いの画面モデルに対して正しいサンプルを使用していることを確認してください。
- **電源を確認**：7.5インチのような大きな画面では、画面リフレッシュ時に十分な電流を供給できる電源を使用してください。

**Q3: バッテリー接続時にボードの電源が入りません。**

- **ハードウェアスイッチ**：ボード上のハードウェアスライドスイッチが **ON** 位置になっていることを確認してください。
- **バッテリー接続**：JST 2.0mm コネクタの極性がボードの設計と一致しているか確認してください。
- **バッテリー残量**：バッテリーに十分な電荷があることを確認してください。USB-C 経由でバッテリーの充電を試してください。

**Q4: SenseCraft Seeedash ファームウェアフラッシャーがボードを検出しません。**

- **RESET を押す**：フラッシャーがデバイスを検索している間に、ボード上の RESET ボタンを押してみてください。
- **USB ケーブルを確認**：データ転送に対応した USB ケーブル（充電専用ではない）を使用していることを確認してください。

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
