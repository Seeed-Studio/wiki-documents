---
description: XIAO nRF52840 (Sense) の NFC 使用方法
title: 両バージョンの NFC 使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/31/2023
  author: Matthew
---

# Seeed Studio XIAO nRF52840 (Sense) での NFC 使用方法

<!-- :::note
Seeed Studio XIAO nRF52840 ボードの NFC 機能は一時的に動作していません。新しい NFC ライブラリが公開され次第、新しい wiki が更新される予定です。
::: -->

:::note
Seeed nRF52 Boards バージョン 1.1.3 と Seeed nRF52 mbed-enabled Boards バージョン 2.9.2 がテストされ、承認されています。
:::

**Seeed Studio XIAO nRF52840** と **Seeed Studio XIAO nRF52840 Sense** の両方には **NFC（Near Field Communication）モジュール** が搭載されています。この wiki では、これらのボードで NFC を使用する方法を説明します。ここでは、スマートフォンを NFC アンテナに近づけた後、ボードからスマートフォンにテキスト文字列を送信する基本的な例を実演します。

## 準備作業

> NFC 機能は「Seeed nRF52 mbed-enabled Boards Library」を使用すると良好に動作します。

ボードライブラリのインストールについては、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照してインストールを完了してください。既にインストール済みの場合は、次に進んでプロジェクトを進めることができます。

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## 必要なハードウェア

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x NFC アンテナ
- 1 x USB Type-C ケーブル
- 1 x スマートフォン

## 必要なソフトウェア

- [NFC TagInfo App (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo App (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## ハードウェア接続と概要

以下のように NFC アンテナを Seeed Studio XIAO nRF52840 (Sense) にはんだ付けします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3(1).png" alt="pir" width={550} height="auto" /></p>

- **性質**: nRF52840 の 13.56 MHz 差動電流駆動ポート（NFC1 = P0.09、NFC2 = P0.10）；ペアで使用する必要があります。
- **違い**: 逆位相のみ；個別の機能はありません。交換は可能ですが、UID が反転します。
- **注意**: 裸のピン、ESD/TVS なし。はんだ付け前にリストストラップを着用し、両方のパッドが必須で、GPIO として使用しないでください。

## NFC でテキスト文字列を送信

- **ステップ 1.** Arduino IDE を開き、以下のコードをアップロードします

```cpp
#include <NFCT.h>

void setup() { 
  // set the NFC message as first parameter and the language code as second
  NFC.setTXTmessage("Hello World!", "en");
  // start the NFC module
  NFC.start();
}

void loop() {
}

```

ここでは単純にテキスト文字列「Hello World!」を送信します。

- **ステップ 2.** 「NFC TagInfo」モバイルアプリを開き、**Scan & Launch** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **ステップ 3.** NFC アンテナをスマートフォンに近づけると、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>

## アンテナチューニング


  以下で説明するすべての操作は、この文書のコアロジックに基づいています。**[Nordic 公式 NFC アンテナ設計](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)**
 - NFC キャリアは 13.56 MHz に固定されています；チップは共振時に **差動 100 Ω 負荷** を見た時のみフルパワーを供給します。

- チューニング = 2つのコンデンサを使用して **共振とインピーダンス変換** を同時に実現し、コイルが **正確に 100 Ω** に見えるようにします。

**1. 3つの「変更不可」数値**

| 項目 | 固定値 | ソース |
|---|---|---|
| 動作周波数 f | 13.56 MHz | グローバル NFC 標準、nRF52840 にハードコード |
| チップが見たい負荷 | 100 Ω（差動） | Nordic ホワイトペーパー nWP_026 |

**2. 測定すべき2つの量**

   **コイルインダクタンス L** – DMM / LCR メーター / VNA で 100 kHz で測定、値は µH 単位。

   **コイル損失抵抗 R** – 同じ画面から直列抵抗を読み取り、Ω 単位（太い線と大きな面積 → 低い R）。

**3 事前チェック：コイルサイズは適切か？**
インピーダンス変換式を使用：


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="pir" width={250} height="auto" /></p>

目標：90–120 Ω、100 Ω に近いほど良い。

| 結果 | 意味 | 次のステップ |
|---|---|---|
| < 60 Ω | アンテナが「小さすぎる」 | ターン数を増やすか面積を拡大 |
| 90 – 120 Ω | **合格** | ステップ 4 へ |
| > 150 Ω | アンテナが「大きすぎる」 | ターン数を減らすか面積を縮小 |

> このゲートを通過した後にのみコンデンサを計算してください；そうでなければどのキャップ値も無用です。

**4 共振容量 C を計算**

13.56 MHz 固定での式：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="pir" width={250} height="auto" /></p>


→ **総容量** を与えます；π ネットワークでは等分割：

**C1 = C2 = C / 2**  
最も近い E12 値を選択（39 pF、47 pF、56 pF、68 pF …）。

