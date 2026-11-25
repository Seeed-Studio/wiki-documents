---
description: Wi-Fi HaLow Media Gateway アプリケーション — XIAO ESP32-S3 と Wi-Fi HaLow Transceiver for Seeed Studio XIAO を使用し、Wi-Fi HaLow リンク経由で HaLowLink 2 ゲートウェイと PC メディアコンソールへスマートフォンのメディアをアップロード
title: Wi-Fi HaLow Media Gateway
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - Media Gateway
  - XIAO ESP32-S3
  - Wi-Fi HaLow Transceiver
  - Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_media_gateway
sku: 100072966
last_update:
  date: 11/23/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-23'
url: https://wiki.seeedstudio.com/ja/halowlink2_media_gateway/
---

# Wi-Fi HaLow Media Gateway

<!-- Internal note: 最優先のアプリケーションページ。コンテンツは Seeed エンジニアリングのデモ資料「Wi-Fi HaLow Media Gateway Demo.docx」（2026-11-12 受領）から引用 — エンドツーエンドの経路は Seeed エンジニアリングによって実演され、以下の図はそのデモから取得したものです。ファームウェアファイル、ソースコード、および書き込み手順は、正式にリリースされ検証されるまでドキュメント化してはいけません；それらの部分は内部コメントのままとし、外部から見える TODO としては記載しません。 -->

## はじめに

このアプリケーションは、HaLowLink 2 と XIAO ESP32-S3 ノードを組み合わせて **メディアゲートウェイ** に変身させます。一般的なスマートフォンが、HaLow を一切サポートしていなくても、長距離の **Wi-Fi HaLow リンク** を介して PC に写真・動画・ファイルを送信できます。

実演されたエンドツーエンドの経路は次のとおりです：

```text
Smartphone --2.4 GHz Wi-Fi--> XIAO ESP32-S3 + HaLow Transceiver --Wi-Fi HaLow--> HaLowLink 2 --Ethernet--> PC (Media Console)
```

スマートフォン側に必要なのは通常の 2.4 GHz Wi-Fi だけです。XIAO ノードが 2 つの世界を橋渡しします：スマートフォン向けに 2.4 GHz ホットスポットをホストしつつ、ゲートウェイとの HaLow リンクを保持します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-setup.jpg" alt="HaLowLink 2 本体とアンテナ、リテールボックスの横に配置された様子と、その前にある XIAO ESP32-S3 と HaLow トランシーバのゲートウェイノード" width={600} height="auto" /></p>

## ハードウェア要件

| 製品 | SKU | デモ内での役割 |
|:----|:----|:----|
| HaLowLink 2 Wi-Fi HaLow Gateway | 100072966 | Wi-Fi HaLow アクセスポイント；PC への Ethernet ブリッジ |
| Wi-Fi HaLow Transceiver for Seeed Studio XIAO | 109100041 | ゲートウェイノード上の HaLow 無線 |
| Seeed Studio XIAO ESP32-S3 | 113991114 | ゲートウェイコントローラ：2.4 GHz SoftAP をホストし、メディアを中継 |

さらに次のものが必要です：

- 2.4 GHz Wi-Fi を備えたスマートフォン（HaLow 対応は不要）
- Ethernet ポートを備え、Media Console を実行する Windows PC
- すべてのデバイス用の電源とケーブル

## システムアーキテクチャ

5 つのステージがあり、それぞれがメディアを次のステージへ受け渡します：

| ステージ | リンク | 備考 |
|:-----:|:----:|:------|
| スマートフォン → XIAO ノード | 2.4 GHz Wi-Fi | ブラウザページを通じて、スマートフォンがノードの SoftAP にアップロードします |
| XIAO ESP32-S3 → HaLow トランシーバ | SPI | コントローラが受信したバイト列を HaLow 無線へストリーミングします |
| HaLow トランシーバ → HaLowLink 2 | Wi-Fi HaLow（サブ 1 GHz） | 長距離ホップ；ノードはゲートウェイの HaLow ネットワークに参加します |
| HaLowLink 2 → Windows PC | Ethernet | ゲートウェイがトラフィックを Media Console に届けます |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-architecture.png" alt="Wi-Fi HaLow Media Gateway デモのシステムアーキテクチャ：スマートフォン、XIAO ESP32-S3、Wi-Fi HaLow トランシーバ、HaLowLink 2、Windows PC" width={800} height="auto" /></p>

## ゲートウェイ側のセットアップ

1. **HaLowLink 2。** [Preparation](/ja/halowlink2_getting_started#preparation) に従って、アンテナ・電源・コンピュータ接続などゲートウェイをセットアップし、その後 [Access the Web UI](/ja/halowlink2_getting_started#access-the-web-ui) からログインします。スタンドアロンデモには、工場出荷時の Router 設定で十分です。既存の LAN に統合する場合は [Access Point Mode](/ja/halowlink2_getting_started#access-point-mode-推奨) を使用します。
2. **XIAO ノード。** [Wi-Fi HaLow Module for XIAO guide](/ja/getting_started_with_wifi_halow_module_for_xiao) に従って Seeed Studio XIAO ESP32-S3 と Wi-Fi HaLow Transceiver for Seeed Studio XIAO を組み立て、アンテナを接続し、Seeed Studio が提供する Media Gateway ファームウェアを書き込みます。
3. **PC。** Windows PC を Ethernet でゲートウェイの **LAN ポート**（デモネットワーク `192.168.12.x`）に接続し、Media Console サーバを起動します。

<!-- 正式リリース待ち（内部用）：XIAO ファームウェアのバイナリ／ソース、書き込み手順、および Media Console パッケージ。ダウンロードリンク、リポジトリ URL、サーバポート、書き込み手順をでっち上げてはいけません — リリースパッケージが届いたら、ここに正式な情報を挿入してください。 -->

電源投入後、ノードは自動的に動作します。ESP32-S3 が HaLow トランシーバを初期化し、Wi-Fi HaLow 経由で HaLowLink 2 アクセスポイントに接続し、スマートフォン向けに 2.4 GHz SoftAP を起動します。

**デモを実行する前に HaLow リンクを確認してください：** ゲートウェイの Home ページで **Access Point (HaLow)** カードを開きます — 接続されたノードが信号レベルと RX/TX レート付きで表示され、**Local Network** / **Network → Interfaces** ページには PC へトラフィックを運ぶ LAN 側が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-ap-clients.png" alt="HaLowLink 2 Web UI の Access Point (HaLow) ダイアログに、信号レベルと RX/TX レート付きで接続済みゲートウェイノードが表示されている様子" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>ゲートウェイ Web UI：Access Point (HaLow) カードに、信号レベルと RX/TX レート付きで接続済みゲートウェイノードが一覧表示されます — メディア転送前にリンクが確立されていることを示します。</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-lan-interface.png" alt="HaLowLink 2 Web UI の Network Interfaces ページに、デモネットワークで使用される LAN インターフェースが表示されている様子" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>ゲートウェイ Web UI、Network → Interfaces：LAN インターフェース（192.168.12.x）が、PC へのデモトラフィックを運びます。</em></p>

## デモの実行

1. **スマートフォン：** XIAO ノードの 2.4 GHz SoftAP に接続し、ブラウザで `192.168.4.1` の Media Gateway Web ページを開き、写真・動画・ファイルを選択してアップロードを開始します。
2. **ノード：** ESP32-S3 がアップロードを受信し、HaLow リンク経由でストリーミングします — 中間ストレージは使用しません。
3. **PC：** Media Console がファイルを受信・保存・一覧表示します。そこで開いてプレビュー、再生、保存、ダウンロードができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-phone-upload.png" alt="Media Gateway のスマートフォンブラウザページで、写真が選択されアップロードが進行中の様子" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>スマートフォン側：XIAO ノードの SoftAP から提供されるブラウザベースのアップロードページ。写真を選択し、転送が進行中の状態です。</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-console.png" alt="PC の Media Console ページに、受信した写真・動画・ファイルがプレビューやダウンロード操作付きで一覧表示されている様子" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>PC 側：Media Console が受信したすべてのファイル（写真・動画・ドキュメント）を一覧表示し、プレビュー・再生・保存・ダウンロードが可能です。</em></p>

ノードがデータを転送する仕組み：

- **デュアルネットワークゲートウェイ：** SoftAP がスマートフォン側を、HaLow インターフェースが PC 側を担当します。デフォルトルートの管理により、送信メディアは Wi-Fi HaLow 経路を通るよう維持されます。
- **ストリーミングリレー：** メディアは **16 KB チャンク** で転送されます — ESP32-S3 がメモリ内にファイル全体をバッファすることはなく、Base64 エンコードも使用しません。
- **ファイルタイプ：** JPG、PNG、MP4、および一般的なファイル。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-node.png" alt="Wi-Fi HaLow トランシーバモジュールとアンテナケーブルを積層した XIAO ESP32-S3。デモのゲートウェイノード。" width={600} height="auto" /></p>

## デモ結果

エンドツーエンドの完全な転送は、Seeed エンジニアリングによって実演されています：

- **写真アップロード** — JPG / PNG 転送を検証済み
- **動画転送** — MP4 のアップロードと再生を検証済み
- **汎用ファイル** — アップロードおよびダウンロードに対応
- **PC Media Console** — 受信ファイルのプレビュー、再生、保存、ダウンロードを実施
- **エンドツーエンド接続性** — スマートフォン側に HaLow 対応がなくても、Wi-Fi HaLow 経由でスマートフォンから PC へメディアを転送

<!-- デモ検証待ち（内部用）：エンジニアリングの資料が確定したら、実演で使用した正確なファームウェアバージョン、HaLow チャンネル／帯域幅、距離を記録し、実際の運用で観測されたステージごとのトラブルシューティング項目を追加してください。 -->

## トラブルシューティング

ゲートウェイや HaLow リンクに関する問題（Web UI へのアクセス、ペアリング、IP アドレッシング、スループットなど）については、[Getting Started → Troubleshooting](/ja/halowlink2_getting_started#troubleshooting) を参照してください。

## リソース

- [Getting Started with Wi-Fi HaLow Module for XIAO](/ja/getting_started_with_wifi_halow_module_for_xiao)
- [Getting Started with Wi-Fi HaLow Mini PCIe Module](/ja/getting_started_with_wifi_halow_mini_pcie_module)
- [HaLowLink 2 Getting Started](/ja/halowlink2_getting_started)

<!-- 正式リリース待ち（内部用）：リリース後にここへソースコード／ファームウェアのリンクを追加してください。 -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
