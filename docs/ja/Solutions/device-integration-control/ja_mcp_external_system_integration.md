---
description: MCP を使用して外部ビジネスシステムと SenseCAP Watcher を統合するためのガイド
title: ビジネスシステムに音声 AI を導入する（MCP）
sidebar_position: 6
keywords:
- MCP
- API
- Integration
- Warehouse
- Voice Control
- Watcher
- External System
- AI Enabled Devices
- Qwen
- OA
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /ja/mcp_external_system_integration
last_update:
  date: 12/06/2025
  author: Spencer
tags:
  - mcp
  - agents
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概要

このガイドでは、Model Context Protocol（[MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)）を使用して音声 AI を既存のソフトウェアエコシステムと連携させる方法を説明します。REST API を MCP ツールとしてラップすることで、***SenseCAP Watcher*** が倉庫管理システム（WMS）、CRM、ERP、またはカスタム IT ダッシュボードなど、ビジネスロジックと直接やり取りできるようになります。

<table class="table-center">
  <tr>
      <th>スマート空間インタラクション</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/wms-watcher-scenario.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> ソリューションバンドル 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com.cn/solutions/voicecollectionanalysis-zh-hans" target="_blank">スマート空間インタラクション</a></h2>
      <p>音声から API へ：意図をアクションに変換。新しいアプリをゼロから構築する必要はありません。既存の WMS エンドポイントを Watcher に公開するだけで、作業員の音声制御を即座に実現できます。</p>
  </div>
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
            </div>
            <div class="info-content">
                <h3>真のハンズフリー生産性</h3>
                <p>作業員は手袋を着用したままやフォークリフトを運転しながら在庫照会や出荷記録を行えます。最大限の安全性と効率性のために、目は作業に、手はハンドルに集中できます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                    <path d="M16 21h5v-5"></path>
                </svg>
            </div>
            <div class="info-content">
                <h3>ゼロレイテンシーデータ同期</h3>
                <p>紙記録の遅延を排除します。音声コマンドが ERP への直接 API 呼び出しをトリガーし、アイテムが移動した瞬間に在庫データが同期されます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
            </div>
            <div class="info-content">
                <h3>汎用システム相互運用性</h3>
                <p>SAP、Oracle、またはカスタム SQL バックエンドを実行している場合でも、システムに API があれば Watcher が制御できます。AI を採用するためにレガシーシステムを移行する必要はありません。</p>
            </div>
        </li>
    </ul>
</div>

## アーキテクチャ

コードを書く前にデータフローを理解することが重要です。統合は **MCP サーバー** が AI と内部ネットワーク間のセキュアなゲートウェイとして機能するブリッジパターンに従います。

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**主要コンポーネント：**

1. **Watcher デバイス：** 自然言語の意図（例：「在庫確認」）をキャプチャし、クラウドに送信します。
2. **MCP エンドポイント（クラウド）：** SenseCraft が提供するセキュアなトンネルで、意図をローカル環境に転送します。
3. **MCP サーバー（ローカルブリッジ）：** マシン上で実行される軽量な Python スクリプト。AI の意図を特定のコード関数に変換します。
4. **バックエンド API：** 実際のロジックを実行する既存のビジネスアプリケーション（FastAPI、Flask など）。
5. **インフラストラクチャ：** バックエンドが依存するデータベースやその他のサービス。

**汎用統合シナリオ**：

このガイドでは **倉庫システム** を参考実装として使用していますが、アーキテクチャは汎用的に適用できます：

| **業界**        | **音声コマンド**                   | **基盤システムアクション**       |
| --------------- | --------------------------------- | ---------------------------- |
| **物流**        | *「50 個入庫」*                   | `POST /api/inventory/add`    |
| **営業（CRM）** | *「取引ステータスをクローズに更新」* | `PUT /api/deals/{id}/status` |
| **IT 運用**     | *「ステージングサーバーを再起動」*  | `POST /api/servers/restart`  |

## デモ 1：音声制御倉庫

ローカルマシン上でモック **倉庫バックエンド** と **MCP ブリッジ** を実行してビジネス環境をシミュレートします。このデモでは以下が可能になります：

- 🗣️ **在庫確認：** 「Xiaozhi Standard は何個ありますか？」
- 🗣️ **データ入力：** 「Watcher Xiaozhi を 5 個入庫」
- 🗣️ **ビジネス洞察：** 「今日の在庫サマリーは？」

### 前提条件

- **ハードウェア：** SenseCAP Watcher、コンピュータ（Windows/macOS/Linux）。
- **ソフトウェア：** Python 3.10+、Git。
- **アカウント：** [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) アカウント。

:::note セットアップ
SenseCAP Watcher が [SenseCraft AI Device Center](https://sensecraft.seeed.cc/ai/device/local/37) を通じて **Xiaozhi AI** で設定されていることを確認してください。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/sensecap-setup.png" alt="sensecap-setup"/>
</div>

:::

### ステップ 1：ターゲットシステムのデプロイ

まず、モックビジネスバックエンドを開始する必要があります。依存関係の処理（`uv` を使用）とサービス起動を処理する自動化スクリプトを提供しています。

:::tip uv のインストール
以下のコマンドを使用して、軽量な Python 環境マネージャーである uv をインストールします：

```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

:::

**1. リポジトリのクローン**：

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

**2. サービスの開始**：

オペレーティングシステムを選択して依存関係をインストールし、バックエンドを自動的に開始します。

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

シェルスクリプトを実行してバックエンドとフロントエンドを開始します：

```shell
# Navigate to the project directory warehouse_system
chmod +x start.sh
./start.sh # which runs the run_backend and frontend/app.py
```

</TabItem>

<TabItem value="win" label="Windows">

PowerShell スクリプトを実行してバックエンドとフロントエンドを開始します：

```powershell
# Navigate to the project directory warehouse_system
.\start.ps1
```

</TabItem>

</Tabs>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/running-warehouse-demo-successfully.png" alt="running-warehouse-demo-successfully"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="specific-location-management"/>
</div>

- **確認：** ブラウザを開いて `http://localhost:2124/docs` にアクセスします。API ドキュメントページ（上図のように）が表示されれば、「ビジネスシステム」が実行されています。

### ステップ 2：MCP ブリッジの設定

次に、バックエンドを AI に接続します。ブリッジコードは `mcp/` ディレクトリにあります。

**1. MCP エンドポイントの取得**：

[SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration から **MCP エンドポイントアドレス**（`wss://...`）を取得します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. 設定と実行**：

**新しいターミナルウィンドウ** を開き（前のバックエンドターミナルは実行したまま）、`mcp` フォルダに移動します。

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

```Bash
cd mcp

# 1. Set the Endpoint (Replace with your actual address)
export MCP_ENDPOINT="wss://your-endpoint-address"

# 2. Start the Bridge
./start_mcp.sh
```

</TabItem>

<TabItem value="win" label="Windows (PowerShell)">

```PowerShell
cd mcp

# 1. Set the Endpoint (Replace with your actual address)
$env:MCP_ENDPOINT="wss://your-endpoint-address"

# 2. Start the Bridge
./start_mcp.ps1
```

</TabItem>

</Tabs>

成功すると、`MCP Service Started Successfully!` というメッセージが表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/mcp-bridge-start-successfully.png" alt="mcp-bridge-start-successfully"/>
</div>

### ステップ 3: 検証

すべてが接続されました。今度は、SenseCAP Watcher を使用してローカルシステムと対話してみましょう。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="MCP_connected"/>
</div>

これで Watcher デバイスを使用して統合をテストできます！

### 音声コマンドの例

| 音声コマンド                                          | 期待される動作                                       |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "Query the stock of Xiaozhi Standard Version"          | `query_xiaozhi_stock` ツールを呼び出し                      |
| "How many Xiaozhi Professional Version do we have?"    | プロフェッショナル版で `query_xiaozhi_stock` を呼び出し |
| "Stock in 5 units of Watcher Xiaozhi Standard Version" | 数量=5 で `stock_in` ツールを呼び出し                 |
| "Stock out 3 Xiaozhi units for sales"                  | 数量=3 で `stock_out` ツールを呼び出し                |
| "What's today's inventory summary?"                    | `get_today_statistics` ツールを呼び出し                     |
| "List all Xiaozhi products"                            | `list_xiaozhi_products` ツールを呼び出し                    |

**舞台裏で何が起こっているのか？**

| **コンポーネント**  | **動作**                                         |
| -------------- | -------------------------------------------------- |
| **Watcher**    | 音声オーディオをクラウドに送信。                        |
| **MCP Bridge** | インテントを受信し、ツールが `query_stock` であることを判定。 |
| **System**     | `GET /materials/product-stats` を実行。           |
| **Result**     | Watcher が話す：*「現在の在庫は 150 個です。」*    |

### 期待される応答

**在庫照会：**

> "在庫照会が成功しました。Watcher Xiaozhi Standard Version は現在、場所 A-01-01 に 150 個の在庫があります。在庫状況は正常です。"

**入庫：**

> "Watcher Xiaozhi Standard Version を 5 個正常に追加しました。以前の数量は 150 個、新しい数量は 155 個です。"

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## システムのカスタマイズ

倉庫デモは単なるテンプレートです。独自の**注文管理システム**、**CRM**、または**IT ダッシュボード**を統合するには、以下の手順に従ってブリッジコードを変更してください。

### 1. 実際のサーバーを指定

`mcp/warehouse_mcp.py` を開きます。最初のステップは、実際の API がどこにあるかをブリッジに伝えることです。

```python
# Change this line to point to your actual production server IP/Domain
# API_BASE_URL = "http://localhost:2124/api" 
API_BASE_URL = "http://192.168.50.10:8080/api/v1" 
```

### 2. カスタムツールの定義

新しい音声コマンドを追加するために、モデルをトレーニングする必要はありません。Python 関数を書くだけです。

`@mcp.tool()` デコレータを使用して API 呼び出しをラップします。

**ワークフロー：**

1. **操作の特定：** 音声で制御したい動作は何ですか？（例：「注文確認」、「サーバー再起動」）。
2. **API の文書化：** エンドポイント URL とパラメータを確実に把握してください（例：`GET /orders/{id}`）。
3. **ラッパーの作成：** 以下のパターンを使用して Python 関数を作成します。

**例：注文管理システムへの適応**：

:::tip 「Docstring」が魔法の鍵
AI は Python の **docstring**（`""" ... """` 内のテキスト）を読んで、**いつ**関数を呼び出すかを決定します。説明的に書いてください！
:::

```Python
@mcp.tool()
def check_order_status(order_id: str) -> dict:
    """
    Check the status of a customer order.
    Use this when the user asks about order tracking or delivery status.

    Args:
        order_id: The unique order identifier (e.g., "ORD-2024-001")

    Returns:
        Order status, estimated delivery date, and tracking information
    """
    # Call your real API
    return api_get(f"/orders/{order_id}/status")
```

<details>

<summary>カスタムツール定義のベストプラクティス</summary>

優れた MCP ツールを書くことは、標準的な Python 関数を書くこととは異なります。AI は何をすべきかを理解するために、コード構造に大きく依存しています。

### 1. 命名が重要

ツール名とパラメータは説明的でなければなりません。AI はこれらを読んで、どのツールを選ぶかを「推測」します。

```Python
# ✅ Good - Clear and descriptive
@mcp.tool()
def query_xiaozhi_stock(product_name: str) -> dict:
    ...

# ❌ Bad - Unclear abbreviations
@mcp.tool()
def qry_stk(pn: str) -> dict:
    ...
```

### 2. Docstring がユーザーインターフェース

docstring は単なるコメントでは**ありません**；それは AI モデルの**ユーザーインターフェース**です。AI に*いつ*、*どのように*ツールを使用するかを指導します。

```Python
@mcp.tool()
def stock_in(product_name: str, quantity: int) -> dict:
    """
    Record stock intake for watcher-xiaozhi products.
    Use this tool when the user wants to add inventory.  <-- Tells AI "When"

    Args:
        product_name: The exact product name             <-- Tells AI "How"
        quantity: Number of units (must be integer)
    """
```

### 3. Logger vs. Print（重要！）

:::danger print() は絶対に使用しない

MCP はブリッジと AI エージェント間の通信に標準 I/O（stdio）を使用します。print() を使用すると、プロトコルデータストリームが破損し、接続が切断されます。

:::

デバッグには常にロガーを使用してください：

```Python
import logging
logger = logging.getLogger(__name__)

# ✅ Good - Logs to file/stderr, safe for MCP
logger.info(f"Processing stock in: {product_name}")

# ❌ Bad - Breaks MCP communication
print(f"Processing stock in: {product_name}")
```

### 4. 戻り値の最適化

戻り値は AI によって読み取られ、音声応答を生成します。遅延とトークン使用量を削減するために簡潔に保ってください（通常 1024 バイト未満）。

```Python
# ✅ Good - Concise
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# ❌ Bad - Too verbose (AI doesn't need the full database history)
return {
    "success": True,
    "full_product_details": {...}, 
    "complete_history": [...] 
}
```

### 5. エラーハンドリング

API がオフラインになったり、404 を返したりする可能性があります。AI がクラッシュする代わりにユーザーに問題を説明できるように、これらを適切に処理してください。

```Python
try:
    result = api_post("/materials/stock-in", data)
    return result
except Exception as e:
    logger.error(f"Stock in failed: {str(e)}")
    return {
        "success": False,
        "error": str(e),
        "message": "Failed to record stock. Please try again."
    }
```

</details>

### 3. 本番環境へのデプロイ

デモはローカルターミナルで実行されます。長期間の 24/7 運用の場合：

- **Docker 化：** 環境の安定性を確保するために、`mcp/` フォルダを Docker コンテナにパッケージ化します。
- **バックグラウンドサービス：** 開いているターミナルで `./start_mcp.sh` を実行する代わりに、`systemd`（Linux）または `NSSM`（Windows）を使用してスクリプトをバックグラウンドサービスとして実行します。
- **ネットワーク：** MCP Bridge を実行するマシンが SenseCraft Cloud（`wss://...`）に接続するための安定したインターネットアクセスを確保してください。

## トラブルシューティング

<details>
<summary>❌ バックエンドサービスが実行されていない</summary>

- **症状：** AI が「バックエンドサービスに接続できません」と応答する。
- **解決策：**
  1. バックエンドが実行されていることを確認：`uv run python run_backend.py`。
  2. ポートの可用性を確認：`curl http://localhost:2124/api/dashboard/stats`。

</details>

<details>
<summary>❌ MCP 接続タイムアウト</summary>

- **症状：** スクリプトが「WebSocket サーバーに接続中...」で無期限にハングする。
- **解決策：**
  1. `MCP_ENDPOINT` が正しいことを確認（タイプミスをチェック）。
  2. URL が `wss://`（セキュア WebSocket）で始まることを確認。
  3. インターネット接続を確認（SenseCraft Cloud への送信トラフィック）。

</details>

<details>
<summary>❌ ツールが認識されない</summary>

- **症状：** コマンドを話しても、AI が「それをする方法がわかりません」と言ったり、ツールをトリガーしない。
- **解決策：**
  1. **命名をチェック：** 関数には明確で説明的な英語名を使用してください。
  2. **Docstring をチェック：** docstring が*意図*を明示的に説明していることを確認してください（例：「在庫をチェックするために使用」）。
  3. **再起動：** コード変更後は MCP サーバースクリプトを再起動する必要があります。

</details>

<details>
<summary>❌ 接続制限を超過</summary>

- **症状：** エラーログに「最大接続数に達しました」と表示される。
- **解決策：**
  1. 各エンドポイントには接続制限があります。複数のターミナルで同時にスクリプトを実行していないことを確認してください。
  2. 他の接続を閉じて、数分待ってから再試行してください。

</details>

<details>
<summary>❌ 接続拒否 / WebSocket 443 ブロック</summary>

**症状：**  
正しいエンドポイント URL でも、`[WinError 1225] Connection refused` が表示されたり、スクリプトが `WebSocket サーバーに接続中...` でハングしたりする。

**原因：**  
**企業ファイアウォールによるブロック。** 多くのオフィスネットワーク（または VPN）は、ポート 443 でも **WebSocket（wss://）** トラフィックや非標準プロトコルを厳格にブロックします。

**迅速な解決策：**

1. **📱 「ホットスポットテスト」（推奨）**  
   オフィスネットワーク/VPN から切断し、コンピュータを**モバイルホットスポット（4G/5G）**に接続します。  
   - *動作する場合：* オフィスネットワークが接続をブロックしています。

2. **🔧 プロキシの設定**  
   会社でプロキシが必要な場合、実行前に設定してください：
   - **Windows:** `$env:HTTPS_PROXY="http://your-proxy:port"`
   - **Mac/Linux:** `export HTTPS_PROXY="http://your-proxy:port"`

3. **🛡️ ホワイトリスト**  
   IT に `*.seeed.cc` の **WebSocket（WSS）** トラフィックを許可するよう依頼してください。

</details>

## リソース

- [MCP エンドポイント設定ガイド](/ja/mcp_endpoint) - MCP エンドポイントの作成と管理方法を学習。
- [FastMCP ドキュメント](https://github.com/jlowin/fastmcp) - 高度なツール定義をより深く理解。

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
