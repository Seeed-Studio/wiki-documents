---
description: reComputer for Jetson Series 
title: reComputer for Jetson Series Introduction
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_Introduction
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# reComputer for Jetson シリーズ紹介

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div>

## ✨ コントリビュータープロジェクト

- パブリック Seeed Studio Wiki プラットフォーム更新
- このページの更新に関するタスクリストがあり、これは私たちの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の下に分類されています。私たちはwikiプラットフォームの開発を通じてユーザーエクスペリエンスの向上とより良いサポートの提供に専念しています。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35025656)は私たちにとって不可欠です！私たちはあなたの意見を本当に大切にしており、アイデアの創出においてあなたの支援を心から感謝いたします。

## はじめに

reComputer for Jetsonシリーズは、NVIDIA の先進的なAI組み込みシステムで構築されたコンパクトなエッジコンピューター：reComputer J10（Nano）とreComputer J20（Xavier NX）です。豊富な拡張モジュール、産業用周辺機器、熱管理とSeeedの数十年にわたるハードウェア専門知識を組み合わせることで、reComputer for Jetsonは多様なAIシナリオで登場する次世代AI製品の加速とスケーリングを支援する準備が整っています。

このシリーズはNVIDIA Jetsonソフトウェアスタック、クラウドネイティブワークフロー、業界をリードするAIフレームワークと互換性があり、シームレスなAI統合の実現を支援します。現在、以下に示す4つの製品を発売しています：

| 製品                 | [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html ) | [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) | [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)   | [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)   |
|-------------------------|----------------|----------------|------------------|------------------|
| SKU | 110061362 |110061361 |110061363 | 110061401 |
|          サイドビュー               |  <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" />|     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />          |     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />            |    <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png"  />            |
| 搭載モジュール         | Jetson Nano 4GB   | Jetson Nano 4GB   | Jetson Xavier NX 8GB | Jetson Xavier NX 16GB |
| 動作キャリアボード | J1010 Carrier Board  | Jetson A206           | Jetson A206             |Jetson A206             |
| 電源インターフェース         | Type-Cコネクタ  | DC電源アダプタ           | DC電源アダプタ             | DC電源アダプタ            |
|リンク |<a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |

## インターフェース詳細

現在の4つのreComputerプロダクトは同じ外観を持ちますが、背面のインターフェースに違いがあります。[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)は1つのインターフェース組み合わせを使用し、他の3つは同じ別のインターフェース組み合わせを使用します。これは、シャーシに2つの異なるキャリアボードが使用されているためです。

### J1010キャリアボード

このキャリアボードは[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)に適用されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-a01mark.png" alt="pir" width={900} height="auto" /></p>

| マーク | 名称                    | 備考                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image> | DCIN(Type-Cインターフェース)  | 電源供給のみ     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>     |  HDMI               |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | 1x USB 3.0 Type-Aポート  |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 2x USB 2.0 Type-Aポート |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>   | USB Type-Cポート         | データ転送のみ |

### Jetson A206 キャリアボード

このキャリアボードは[reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、および[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)用です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-h01mark.png" alt="pir" width={900} height="auto" /></p>

| マーク | 名前                    | 注記                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image>    | DCIN（円形インターフェース）| 電源供給のみ     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>    | DP
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | HDMI |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 4x USB 3.0 Type-A ポート                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN        |             |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>    | Micro-B ポート         | データ転送のみ |

## 同梱物

電源を入れて起動する前に、reComputerの初回起動に向けてすべてのチェックと準備を行う必要があります。受け取った製品を開封し、購入した製品モデルに応じてパッケージの内容が完全であることを確認してください。

### [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-A0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**同梱物リスト：**

- reComputer J1010、以下を含む：
  - 4G Jetson Nano module1 x1
  - J1010 キャリアボード x1

**電源投入に必要だが同梱されていないアクセサリ：**

- USB キーボードとマウス
- ディスプレイ画面
- Type-C 電源ケーブルと電源アダプタ

:::note
    Type-C 電源ケーブルと電源アダプタは製品に含まれていません。
:::

---

### [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-H0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**同梱物リスト：**

- reComputer J1020、以下を含む：
  - 4G Jetson Nano module1 x1
  - Jetson A206 キャリアボード x1
- 12V/2A 電源アダプタ（5つの交換可能なアダプタプラグ付き）x1

**電源投入に必要だが同梱されていないアクセサリ：**

- USB キーボードとマウス
- ディスプレイ画面

:::note
5つの選択可能な電源アダプタが用意されています。Type-C 電源ケーブルと電源アダプタが製品に含まれています。そのため、追加の電源アダプタを購入することなく、お住まいの国や地域に適したものを選択してreComputerに電源を供給できます。
:::

---

### [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H1shangxiang.png" alt="pir" width={500} height="auto" /></p>

**同梱物リスト：**

- reComputer Jetson J2011、以下を含む：
  - 8G Jetson Xavier NX モジュール x1
  - Jetson A206 キャリアボード x1
- 19V/4.74A（最大90W）電源アダプタ（電源ケーブルなし）x1

**電源投入に必要だが同梱されていないアクセサリ：**

- USB キーボードとマウス
- ディスプレイ画面
- アダプタ電源ケーブル

:::note
お住まいの地域の電源プラグ規格に応じて、電源アダプタ用の電源ケーブルをご用意ください。
:::

---

### [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang1.png" alt="pir" width={500} height="auto" /></p>

**同梱物リスト：**

- reComputer J2012、以下を含む：
  - 16G Jetson Xavier NX モジュール x1
  - Jetson A206 キャリアボード x1
- 19V/4.74A（最大90W）電源アダプタ（電源ケーブルなし）x1

**電源投入に必要だが同梱されていないアクセサリ：**

- USB キーボードとマウス
- ディスプレイ画面
- アダプタ電源ケーブル

:::note
お住まいの地域の電源プラグ規格に応じて、電源アダプタ用の電源ケーブルをご用意ください。
:::

---

## さらに詳しく

ここでは、NVIDIA® Jetson Module搭載デバイス比較とNVIDIA® Jetson Module対応キャリアボード比較のより完全な表をご紹介します。画像またはタイトルをクリックすると、より詳細にご覧いただけます。

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank"><span>NVIDIA® Jetson Module搭載デバイス比較</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" alt="" /></a></p>
</div>
</div>

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank"><span>NVIDIA® Jetson Module対応キャリアボード比較</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" alt="" /></a></p>
</div>
</div>

## リソース

- **[PDF]** [NVIDIA Jetsonデバイスとキャリアボード比較](https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
