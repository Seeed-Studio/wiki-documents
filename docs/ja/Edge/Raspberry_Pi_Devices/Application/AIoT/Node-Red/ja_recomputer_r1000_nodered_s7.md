---
description: S7プロトコルを使用してSiemens PLCを設定し、効率的なエッジコンピューティングのためにRaspberry Piベースのrecomputerでnode-REDと統合する方法を学びます。S7ノードの設定、フローの作成、PLC変数の監視に関するステップバイステップのガイダンスをご覧ください。
title: reComputer R1000でS7プロトコルを使用してSiemens PLCを接続する

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
  date: 08/30/2024
  author: Kasun Thushara
---

## はじめに

**S7プロトコル**は、Siemensがプログラマブルロジックコントローラ（PLC）ファミリー向けに開発した通信標準です。Siemens PLC間でスムーズで信頼性の高いデータ交換を可能にするために重要です。このプロトコルは、ISO TCPと呼ばれる方法を使用してEthernet上で動作し、プロトコルデータユニット（PDU）として知られるデータブロックを中心に構造化されています。各PDUは情報のセグメントであり、そのサイズと構造は接続が最初に確立されるときに決定されます。

この記事では、人気のフローベース開発ツールであるNode-REDを、Raspberry Piベースのrecomputer上で使用して、S7プロトコルを使用してSiemens PLCとインターフェースする方法を探ります。このセットアップにより、産業オートメーションシステムと最新のIoTプラットフォームの効率的で柔軟な統合が可能になります。

## S7プロトコル用のPLC設定

ラダーまたはファンクションブロック図を設計した後、次のステップはS7プロトコルを有効にするためにSiemens PLCを設定することです。正確な手順は、使用しているPLCモデルによって異なる場合があります。例えば、[Siemens LOGO PLC](https://www.siemens.com/global/en/products/automation/systems/industrial/plc/logo.html)を使用している場合、LOGO Softプログラミングソフトウェアでこれを設定します。

**ネットワーク設定**: Ethernet設定の下で、PLCのIPアドレス、サブネットマスク、デフォルトゲートウェイを入力する必要があります。

**S7プロトコルの有効化**: S7通信を許可するオプションがあります—このボックスにチェックを入れてください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo1.PNG" /></center>

**S7通信の設定**: S7サーバーとして設定されたEthernet接続を追加します。また、クライアントとサーバーのTSAP（Transport Service Access Point）も設定する必要があります。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo2.PNG" /></center>

:::note
異なるSiemens PLCモデルを使用している場合は、特定の設定手順について関連ドキュメントを必ず参照してください。
:::

## Node-REDでのS7ノードの設定

Siemens PLCをNode-REDと統合するには、`node-red-contrib-s7`ノードを使用する必要があります。設定するには以下の手順に従ってください：

### S7ノードのインストール

- Node-REDの**パレット管理**オプションに移動します。
- **インストール**タブに移動し、`node-red-contrib-s7`を検索します。
- ノードをインストールして、Node-RED環境にS7機能を追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered_s7.PNG" /></center>

### フローの作成

- **S7 out**ノードを2つの**inject**ノードと一緒にワークスペースにドラッグアンドドロップします。
- injectノードをS7 outノードに接続して、PLCとの通信を開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_out.PNG" /></center>

### S7 Outノードの設定

- まず、`+（プラス）`アイコンをクリックしてエンドポイントを設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/editS7.PNG" /></center>

- PLCの`IPアドレス`を入力します。
- モードを`TSAP`に設定します。
- PLCのサーバー設定で設定した`Local TSAP`と`Remote TSAP`を入力します。
- 簡単に識別できるようにPLCに認識しやすい名前を付けます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/LOGO_endpoint.PNG" /></center>

### 変数の追加

- 各変数を**名前**と**アドレス**で定義します。
- 異なるブロックタイプ（例：コイル、入力）に対応する適切なアドレス空間を使用します。詳細については[Siemens S7アドレスドキュメント](https://www.winccoa.com/documentation/WinCCOA/3.18/en_US/S7_Driver/topics/s7_address.html)を参照してください。
- 各変数名がそのブロックタイプに正確に対応していることを確認します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo_variables.PNG" /></center>

### Injectノードの設定

- injectノードのペイロードを編集してブール値を設定します。1つのinjectノードを`true`用に、もう1つを`false`用に使用します。

<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/true.PNG" /></center>
<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/false.PNG" /></center>

### 監視用のS7 Inノードの追加

- 変数値を監視するために**S7 in**ノードをドラッグアンドドロップします。
- このノードを単一の変数またはすべての変数を表示するように設定できます。
- 監視したい対応する`PLC、モード`、および`変数`を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_in.PNG" /></center>

### フローのデプロイ

- すべてが設定されたら、フローをデプロイしてSiemens PLCとの通信を開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/final.PNG" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
