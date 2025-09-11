---
description: Siemens PLC を S7 プロトコルで構成し、Raspberry Pi を搭載した reComputer を使用して Node-RED に統合する方法を学びます。S7 ノードの設定、フローの作成、PLC 変数の監視に関するステップバイステップのガイドを発見してください。
title: S7 プロトコルを使用した Siemens PLC の reComputer R1000 への接続

keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Siemens
  - S7
  - PLC
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_nodered_s7
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

**S7 プロトコル**は、Siemens が開発したプログラマブルロジックコントローラー (PLC) ファミリー向けの通信標準です。このプロトコルは、Siemens PLC 間でスムーズで信頼性の高いデータ交換を可能にするために重要です。このプロトコルは ISO TCP と呼ばれる方法で Ethernet 上で動作し、Protocol Data Units (PDU) と呼ばれるデータブロックを中心に構成されています。各 PDU は情報のセグメントであり、そのサイズと構造は接続が確立された際に決定されます。

この記事では、Raspberry Pi を搭載した reComputer 上で人気のフロー型開発ツールである Node-RED を使用して Siemens PLC と S7 プロトコルを介してインターフェースする方法を探ります。このセットアップにより、産業オートメーションシステムを最新の IoT プラットフォームと効率的かつ柔軟に統合することが可能になります。

## S7 プロトコル用の PLC の構成

ラダーまたはファンクションブロック図を設計した後、次のステップは Siemens PLC を構成して S7 プロトコルを有効にすることです。具体的な手順は使用している PLC モデルによって異なる場合があります。例えば、[Siemens LOGO PLC](https://www.siemens.com/global/en/products/automation/systems/industrial/plc/logo.html) を使用している場合は、LOGO Soft プログラミングソフトウェアでこれを構成します。

**ネットワーク構成**: Ethernet 設定で PLC の IP アドレス、サブネットマスク、デフォルトゲートウェイを入力する必要があります。

**S7 プロトコルの有効化**: S7 通信を許可するオプションがあります。このボックスをチェックしてください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo1.PNG" /></center>

**S7 通信の設定**: S7 サーバーとして構成された Ethernet 接続を追加します。また、クライアントとサーバーの TSAP (Transport Service Access Point) を設定する必要があります。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo2.PNG" /></center>

:::note
異なる Siemens PLC モデルを使用している場合は、特定の構成手順について関連するドキュメントを必ず参照してください。
:::



## Node-RED での S7 ノードの構成

Siemens PLC を Node-RED に統合するには、`node-red-contrib-s7` ノードを使用する必要があります。以下の手順で設定を行います。

### S7 ノードのインストール

- Node-RED の **Manage Palette** オプションに移動します。
- **Install** タブに移動し、`node-red-contrib-s7` を検索します。
- ノードをインストールして、Node-RED 環境に S7 機能を追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered_s7.PNG" /></center>

### フローの作成

- **S7 out** ノードをワークスペースにドラッグ＆ドロップし、2 つの **inject** ノードを追加します。
- inject ノードを S7 out ノードに接続して、PLC との通信を開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_out.PNG" /></center>

### S7 Out ノードの構成

- まず、`+ (プラス)` アイコンをクリックしてエンドポイントを構成します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/editS7.PNG" /></center>

- PLC の `IP アドレス` を入力します。
- モードを `TSAP` に設定します。
- PLC のサーバー設定で構成された `Local TSAP` と `Remote TSAP` を入力します。
- PLC を簡単に識別できる名前を付けます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/LOGO_endpoint.PNG" /></center>

### 変数の追加

- 各変数を **Name** と **Address** で定義します。
- 異なるブロックタイプ (例: コイル、入力) に対応する適切なアドレス空間を使用します。[Siemens S7 Address Documentation](https://www.winccoa.com/documentation/WinCCOA/3.18/en_US/S7_Driver/topics/s7_address.html) を参照して詳細を確認できます。
- 各変数名がそのブロックタイプに正確に対応していることを確認してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo_variables.PNG" /></center>

### Inject ノードの構成

- Inject ノードのペイロードを編集してブール値を設定します。1 つの Inject ノードを `true` 用、もう 1 つを `false` 用に使用します。

<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/true.PNG" /></center>
<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/false.PNG" /></center>

### 変数監視用の S7 In ノードの追加

- **S7 in** ノードをドラッグ＆ドロップして変数値を監視します。
- このノードを構成して、単一の変数またはすべての変数を表示できます。
- 対応する `PLC、モード`、および監視したい `変数` を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_in.PNG" /></center>

### フローのデプロイ

- すべてが構成されたら、フローをデプロイして Siemens PLC との通信を開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/final.PNG" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>