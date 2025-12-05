---
description: MCP を介して外部ビジネスシステムと SenseCAP Watcher を統合するためのガイド
title: 外部システムとの MCP 統合
sidebar_position: 6
keywords:
- MCP
- API
- Integration
- Warehouse
- Voice Control
- Watcher
- External System
- Enterprise
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /ja/mcp_external_system_integration
last_update:
  date: 11/27/2025
  author: Harvest

---

# 外部システムとの MCP 統合

## 概要

このガイドでは、**MCP（Model Context Protocol）**を通じて既存のビジネスシステムを **SenseCAP Watcher** と統合する方法を説明します。基本的な計算機の例とは異なり、このチュートリアルでは産業用途に焦点を当てています：**音声制御による倉庫管理**。

このチュートリアルを完了すると、以下のことができるようになります：

- 企業システム統合のための MCP アーキテクチャを理解する
- 既存の REST API を MCP ツールとしてラップする
- *「Xiaozhi Standard Version の在庫を確認して」*や*「Watcher Xiaozhi を 5 台入庫して」*などの音声コマンドを有効にする

### 使用例：音声制御による倉庫管理

手が塞がっている間に在庫確認や在庫移動の記録が必要な倉庫作業員を想像してください。MCP 統合により、Watcher デバイスに話しかけるだけで済みます：

- **「Xiaozhi Standard Version の在庫はいくつありますか？」**
- **「Watcher Xiaozhi Standard Version を 5 台入庫してください」**
- **「今日の在庫サマリーは？」**

Watcher が音声コマンドを処理し、適切な MCP ツールを呼び出し、それが倉庫管理システムにクエリを送信したり更新したりします。

### アーキテクチャ概要

```bash
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                  │     │                 │     │                 │
│  Watcher Device │────▶│   MCP Endpoint   │────▶│   MCP Server    │────▶│  Backend API    │
│  (Voice Input)  │     │  (Cloud Bridge)  │     │  (Your Code)    │     │  (Your System)  │
│                 │     │                  │     │                 │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘     └─────────────────┘
                                                                                  │
                                                                                  ▼
                                                                         ┌─────────────────┐
                                                                         │                 │
                                                                         │    Database     │
                                                                         │                 │
                                                                         └─────────────────┘
```

**主要コンポーネント：**

- **Watcher デバイス**：音声コマンドをキャプチャし、AI モデルに送信
- **MCP エンドポイント**：ローカル MCP サーバーと AI モデルを橋渡しするクラウドサービス
- **MCP サーバー**：ビジネスロジックを呼び出し可能なツールとしてラップする Python コード
- **バックエンド API**：既存の REST API（FastAPI、Flask など）
- **データベース**：ビジネスデータストレージ

## 前提条件

### ハードウェア

- SenseCAP Watcher デバイス（Xiaozhi AI で設定済み）
- バックエンドシステムと MCP サーバーを実行するためのコンピューター（Windows/macOS/Linux）

### ソフトウェア

- Python 3.10 以上
- [uv](https://docs.astral.sh/uv/) パッケージマネージャー（推奨）または pip
- Git

### アカウント

- MCP エンドポイントアクセス権限を持つ SenseCraft AI Platform アカウント
- MCP エンドポイントアドレスを取得するには [MCP エンドポイントガイド](/ja/mcp_endpoint) を参照してください

### デプロイメント注意事項

MCP サーバーはバックエンドシステムと同じマシンで実行することも、別のマシンで実行することもできます。`mcp/warehouse_mcp.py` で API エンドポイント URL を設定するだけです：

```python
# Backend API address - change this to your actual backend URL
API_BASE_URL = "http://localhost:2124/api"  # Same machine
# API_BASE_URL = "http://192.168.1.100:2124/api"  # Different machine
```

## パート 1：デモ倉庫システムのセットアップ

参考として使用できる完全なデモ倉庫管理システムを提供しています。これには以下が含まれます：

- REST API を持つ FastAPI バックエンド
- Web ベースのダッシュボード
- 事前に入力されたサンプルデータ（Watcher Xiaozhi 製品）

### ステップ 1：リポジトリのクローン

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

### ステップ 2：依存関係のインストール

uv を使用（推奨）：

```bash
# Install uv if you haven't
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install project dependencies
uv sync
```

または pip を使用：

```bash
pip install fastapi uvicorn requests pydantic fastmcp websockets
```

### ステップ 3：バックエンドサービスの開始

```bash
uv run python run_backend.py
```

以下のように表示されるはずです：

```bash
INFO:     Uvicorn running on http://0.0.0.0:2124
INFO:     Database initialized with sample data
```

### ステップ 4：API の確認

新しいターミナルを開いて API をテストします：

```bash
curl http://localhost:2124/api/materials/xiaozhi
```

期待されるレスポンス：

```json
[
  {
    "id": 1,
    "name": "watcher-xiaozhi(标准版)",
    "sku": "WX-STD-001",
    "category": "mainboard",
    "quantity": 150,
    "unit": "个",
    "safe_stock": 50,
    "location": "A-01-01"
  },
  ...
]
```

インタラクティブな API ドキュメントも http://localhost:2124/docs で確認できます

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="mcp-system-integration"/>
</div>

## パート 2：API を MCP ツールとしてラップ

デモシステムには既に倉庫操作用の REST API があります。今度はそれらを音声制御用の MCP ツールとしてラップしましょう。

:::tip
バックエンドサーバーを実行した後、http://localhost:2124/docs（Swagger UI）のインタラクティブドキュメントを通じて利用可能なすべての API を確認できます。完全な MCP サーバーコードはリポジトリの `mcp/warehouse_mcp.py` にあります。
:::

### 核となる概念：API から MCP ツールへ

パターンは簡単です：

1. **FastMCP で MCP サーバーを作成**
2. **`@mcp.tool()` デコレーターでツール関数を定義**
3. **ツール関数内で既存の API を呼び出し**
4. **AI が解釈するための構造化された結果を返す**

### 主要コードの解説

#### 1. MCP サーバーの初期化

```python
from fastmcp import FastMCP
import requests

mcp = FastMCP("Warehouse System")  # Server name shown in MCP Endpoint
API_BASE_URL = "http://localhost:2124/api"  # Your backend URL
```

#### 2. `@mcp.tool()` でツールを定義

```python
@mcp.tool()
def query_xiaozhi_stock(product_name: str = "watcher-xiaozhi(标准版)") -> dict:
    """
    Query stock information for watcher-xiaozhi products.
    Use this tool when user asks about inventory levels or stock quantity.

    Args:
        product_name: Product name to query (e.g., "watcher-xiaozhi(标准版)")
    """
    # Call your existing API
    response = requests.get(f"{API_BASE_URL}/materials/product-stats",
                           params={"name": product_name})
    data = response.json()

    # Return structured result
    return {
        "success": True,
        "quantity": data["current_stock"],
        "message": f"{data['name']} has {data['current_stock']} {data['unit']} in stock"
    }
```

**重要なポイント：**

- **関数名**（`query_xiaozhi_stock`）→ AI が認識するツール名
- **ドキュメント文字列** → AI がこのツールをいつ使用するかのガイド
- **パラメーター** → AI が音声コマンドから抽出する必要があるもの
- **戻り値** → AI がユーザーに読み上げるもの

#### 3. サーバーの開始

```python
if __name__ == "__main__":
    mcp.run(transport="stdio")
```

### このデモのツール

`warehouse_mcp.py` では 5 つのツールを定義しています：

| ツール名                | 音声トリガー例                    | 呼び出される API               |
| ----------------------- | --------------------------------- | ------------------------------ |
| `query_xiaozhi_stock`   | "Xiaozhi Standard の在庫を確認"   | GET `/materials/product-stats` |
| `stock_in`              | "Xiaozhi を 5 台入庫"             | POST `/materials/stock-in`     |
| `stock_out`             | "販売用に Xiaozhi を 3 台出庫"    | POST `/materials/stock-out`    |
| `list_xiaozhi_products` | "すべての Xiaozhi 製品をリスト"   | GET `/materials/xiaozhi`       |
| `get_today_statistics`  | "今日の在庫サマリー"              | GET `/dashboard/stats`         |

### サーバーの開始

```python
if __name__ == "__main__":
    mcp.run(transport="stdio")
```

## パート 3：MCP エンドポイントへの接続

### ステップ 1：MCP エンドポイントの取得

1. [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) にログイン
2. 右上角の **Watcher Agent** をクリック
3. **Agent Configuration** → **MCP Setting** を開く
4. **Get MCP Endpoint** をクリックして固有のエンドポイントアドレスを取得

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="mcp-system-integration"/>
</div>

:::warning
MCP エンドポイントアドレスは非公開にしてください。公開で共有しないでください。
:::

### ステップ 2：環境変数の設定

**Linux/macOS の場合：**

```bash
export MCP_ENDPOINT="wss://your-endpoint-address"
```

**Windows（PowerShell）の場合：**

```powershell
$env:MCP_ENDPOINT="wss://your-endpoint-address"
```

**Windows（CMD）の場合：**

```cmd
set MCP_ENDPOINT=wss://your-endpoint-address
```

### ステップ 3：MCP サーバーの開始

mcp ディレクトリに移動して開始スクリプトを実行します：

```bash
cd mcp
./start_mcp.sh
```

期待される出力：

```shell
================================
  MCP Service Startup Script
================================

MCP Endpoint: wss://your-endpoint-address

Checking backend service...
Backend service running normally (port 2124)

Starting MCP service...

================================
  MCP Service Started Successfully!
================================

Press Ctrl+C to stop the service
```

### ステップ 4：接続状態の確認

SenseCraft AI プラットフォームに戻り、MCP 接続状態を確認します。以下のように表示されるはずです：

- **接続状態**: 接続済み
- **有効なサービス**: Warehouse System

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="mcp-system-integration"/>
</div>

## パート 4: 音声コマンドのテスト

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

### 期待される応答

**在庫照会:**

> "在庫照会が成功しました。Watcher Xiaozhi Standard Version は現在、場所 A-01-01 に 150 個の在庫があります。在庫状態は正常です。"

**入庫:**

> "Watcher Xiaozhi Standard Version を 5 個正常に追加しました。以前の数量は 150 個、新しい数量は 155 個です。"

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## ベストプラクティス

### 1. ツールとパラメータの命名

ツール名とパラメータは、AI モデルがその目的を理解できるよう明確で説明的である必要があります：

```python
# Good - Clear and descriptive
@mcp.tool()
def query_xiaozhi_stock(product_name: str) -> dict:
    ...

# Bad - Unclear abbreviations
@mcp.tool()
def qry_stk(pn: str) -> dict:
    ...
```

### 2. 包括的な docstring

docstring は AI モデルにツールをいつどのように使用するかを指導します：

```python
@mcp.tool()
def stock_in(product_name: str, quantity: int) -> dict:
    """
    Record stock intake for watcher-xiaozhi products.
    Use this tool when the user wants to add inventory.

    Args:
        product_name: The exact product name (e.g., "watcher-xiaozhi(标准版)")
        quantity: Number of units to add (must be positive integer)

    Returns:
        Success status and updated inventory information
    """
```

### 3. print の代わりに Logger を使用

MCP は通信に stdio を使用するため、デバッグに `print()` を使用しないでください：

```python
# Good - Use logger
logger.info(f"Processing stock in: {product_name}")

# Bad - Will break MCP communication
print(f"Processing stock in: {product_name}")
```

### 4. 戻り値の制限

戻り値は簡潔に保ってください（通常 1024 バイト未満）：

```python
# Good - Concise response
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# Bad - Too verbose
return {
    "success": True,
    "full_product_details": {...},  # Avoid large nested objects
    "complete_history": [...]  # Avoid long arrays
}
```

### 5. エラーハンドリング

常にエラーを適切に処理し、意味のあるメッセージを返してください：

```python
try:
    result = api_post("/materials/stock-in", data)
    return result
except Exception as e:
    logger.error(f"Stock in failed: {str(e)}")
    return {
        "success": False,
        "error": str(e),
        "message": "Failed to record stock intake. Please try again."
    }
```

## トラブルシューティング

### バックエンドサービスが実行されていない

**症状:** MCP ツールが "Cannot connect to backend service" を返す

**解決策:**

1. バックエンドが実行されていることを確認: `uv run python run_backend.py`
2. ポート 2124 が利用可能かチェック: `curl http://localhost:2124/api/dashboard/stats`

### MCP 接続タイムアウト

**症状:** "Connecting to WebSocket server..." が無期限にハングする

**解決策:**

1. MCP_ENDPOINT が正しいことを確認
2. ネットワーク接続をチェック
3. エンドポイント URL が `wss://` で始まることを確認

### ツールが認識されない

**症状:** 音声コマンドが期待されるツールをトリガーしない

**解決策:**

1. ツール命名をチェック - 明確で説明的な名前を使用
2. docstring がツールをいつ使用するかを説明していることを確認
3. コード変更後に MCP サーバーを再起動

### 接続制限を超過

**症状:** "Maximum connections reached" エラー

**解決策:**

1. 他の MCP 接続を閉じる
2. 数分待ってから再試行
3. 各エンドポイントには接続制限があります

## 独自システムへの適応

独自のビジネスシステムを統合するには：

1. **主要な操作を特定**: ユーザーが音声で必要とするアクションは何か？
2. **API を文書化**: バックエンドがこれらの操作用の REST エンドポイントを持つことを確認
3. **MCP ツールを作成**: 各 API エンドポイントを `@mcp.tool()` 関数としてラップ
4. **明確な docstring を記述**: AI が各ツールをいつ使用するかを理解できるよう支援
5. **徹底的にテスト**: 音声コマンドが正しいツールをトリガーすることを確認

### 例: 異なるシステムへの適応

注文管理システムがある場合：

```python
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
    return api_get(f"/orders/{order_id}/status")
```

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
