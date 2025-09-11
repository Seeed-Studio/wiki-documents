---
description: reComputer for Jetson シリーズ
title: reComputer for Jetson シリーズの紹介
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_Introduction
last_update:
  date: 05/15/2025
  author: w0x7ce

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer for Jetson シリーズの紹介

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div>

## ✨ コントリビュータープロジェクト

- 公開 Seeed Studio Wiki プラットフォームの更新
- このページの更新タスクリストは、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)に分類されています。私たちはユーザー体験の向上と、Wikiプラットフォームの開発を通じたより良いサポートの提供に尽力しています。
- [このページへの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35025656)は私たちにとって非常に重要です！皆様のご意見を大切にしており、アイデアの提供にご協力いただければ幸いです。

## 紹介

reComputer for Jetson シリーズは、NVIDIAの高度なAI組み込みシステムを搭載したコンパクトなエッジコンピュータです。reComputer J10 (Nano) と reComputer J20 (Xavier NX) を含みます。豊富な拡張モジュール、産業用周辺機器、熱管理、そしてSeeedの数十年にわたるハードウェアの専門知識を組み合わせることで、reComputer for Jetson は多様なAIシナリオで次世代AI製品の加速とスケールアップを支援する準備が整っています。

このシリーズは、NVIDIA Jetson ソフトウェアスタック、クラウドネイティブワークフロー、業界をリードするAIフレームワークと互換性があり、シームレスなAI統合を提供します。現在、以下の4つの製品を発売しています：

| 製品                 | [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html ) | [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) | [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)   | [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)   |
|-------------------------|----------------|----------------|------------------|------------------|
| SKU | 110061362 |110061361 |110061363 | 110061401 |
|          側面ビュー               |  <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" />|     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />          |     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />            |    <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png"  />            |
| 搭載モジュール         | Jetson Nano 4GB   | Jetson Nano 4GB   | Jetson Xavier NX 8GB | Jetson Xavier NX 16GB |
| オペレーティングキャリアボード | J1010 キャリアボード  | Jetson A206           | Jetson A206             |Jetson A206             |
| 電源インターフェース         | Type-C コネクタ  | DC電源アダプタ           | DC電源アダプタ             | DC電源アダプタ            |
|リンク |<a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |

## インターフェース詳細

現在の4つのreComputer製品は同じ外観を持っていますが、背面のインターフェースに違いがあります。[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)は1つのインターフェース構成を使用しており、他の3つは同じ別のインターフェース構成を使用しています。これはシャーシ内で使用されている2種類のキャリアボードによるものです。

### J1010キャリアボード

このキャリアボードは[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)に適しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-a01mark.png" alt="pir" width={900} height="auto" /></p>

| マーク | 名前                    | 備考                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image> | DCIN(Type-Cインターフェース)  | 電源供給のみ     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>     | HDMI               |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | 1x USB 3.0 Type-Aポート  |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 2x USB 2.0 Type-Aポート |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>   | USB Type-Cポート         | データ送信のみ |

### Jetson A206キャリアボード

このキャリアボードは[reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、および[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)に適しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-h01mark.png" alt="pir" width={900} height="auto" /></p>

| マーク | 名前                    | 備考                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image>    | DCIN(円形インターフェース)| 電源供給のみ     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>    | DP
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | HDMI |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 4x USB 3.0 Type-Aポート                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN        |             |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>    | Micro-Bポート         | データ送信のみ |

## 箱の中身

電源を入れて起動する前に、reComputer の初回起動に向けてすべてのチェックと準備を行う必要があります。受け取った製品を開封し、購入した製品モデルに応じてパッケージ内容が完全であることを確認してください。

### [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-A0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**箱に含まれる内容:**

- reComputer J1010、以下を含む:
  - 4G Jetson Nano モジュール x1
  - J1010 キャリアボード x1

**電源を入れるために必要だが含まれていない付属品:**

- USB キーボードとマウス
- ディスプレイ画面
- Type-C 電源ケーブルと電源アダプター

:::note
    製品には Type-C 電源ケーブルと電源アダプターは含まれていません。
:::

---

### [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-H0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**箱に含まれる内容:**

- reComputer J1020、以下を含む:
  - 4G Jetson Nano モジュール x1
  - Jetson A206 キャリアボード x1
- 12V/2A 電源アダプター (5つの交換可能なアダプタープラグ付き) x1

**電源を入れるために必要だが含まれていない付属品:**

- USB キーボードとマウス
- ディスプレイ画面

:::note
5種類の選択可能な電源アダプターが付属しています。製品には Type-C 電源ケーブルと電源アダプターが含まれているため、追加の電源アダプターを購入することなく、国や地域に適したものを選択して reComputer に電源を供給できます。
:::

---

### [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H1shangxiang.png" alt="pir" width={500} height="auto" /></p>

**箱に含まれる内容:**

- reComputer Jetson J2011、以下を含む:
  - 8G Jetson Xavier NX モジュール x1
  - Jetson A206 キャリアボード x1
- 19V/4.74A (最大90W) 電源アダプター (電源ケーブルなし) x1

**電源を入れるために必要だが含まれていない付属品:**

- USB キーボードとマウス
- ディスプレイ画面
- アダプター電源ケーブル

:::note
電源アダプターに適した電源ケーブルを、現地の電源プラグ規格に合わせて選択してください。
:::

---

### [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang1.png" alt="pir" width={500} height="auto" /></p>

**箱に含まれる内容:**

- reComputer J2012、以下を含む:
  - 16G Jetson Xavier NX モジュール x1
  - Jetson A206 キャリアボード x1
- 19V/4.74A (最大90W) 電源アダプター (電源ケーブルなし) x1

**電源を入れるために必要だが含まれていない付属品:**

- USB キーボードとマウス
- ディスプレイ画面
- アダプター電源ケーブル

:::note
電源アダプターに適した電源ケーブルを、現地の電源プラグ規格に合わせて選択してください。
:::

---

## さらに詳しく

ここでは、NVIDIA® Jetson モジュール搭載デバイスの比較表と、NVIDIA® Jetson モジュール互換キャリアボードの比較表をより完全な形でご紹介します。画像またはタイトルをクリックすると、詳細をご覧いただけます。

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank"><span>NVIDIA® Jetson モジュール搭載デバイスの比較</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" alt="" /></a></p>
</div>
</div>

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank"><span>NVIDIA® Jetson モジュール互換キャリアボードの比較</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" alt="" /></a></p>
</div>
</div>

## リソース

- **[PDF]** [NVIDIA Jetson デバイスとキャリアボードの比較](https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>