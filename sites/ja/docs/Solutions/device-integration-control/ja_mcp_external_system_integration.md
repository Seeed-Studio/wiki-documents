---
description: MCP を介して外部業務システムを SenseCAP Watcher と連携するためのガイド
title: 音声 AI を業務システムに導入する（MCP）
sidebar_position: 6
keywords:
  - MCP
  - API
  - 連携
  - 倉庫
  - 音声制御
  - Watcher
  - 外部システム
  - AI 対応デバイス
  - Qwen
  - OA
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /mcp_external_system_integration
last_update:
  date: 04/07/2026
  author: Spencer
tags:
  - mcp
  - agents
createdAt: '2025-12-01'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/ja/mcp_external_system_integration/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概要

このガイドでは、Model Context Protocol（[MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)）を使用して、音声 AI と既存のソフトウェアエコシステムを接続する方法を説明します。REST API を MCP ツールとしてラップすることで、***SenseCAP Watcher*** が倉庫管理システム（WMS）、CRM、ERP、あるいはカスタム IT ダッシュボードなど、あなたのビジネスロジックと直接対話できるようになります。

<table class="table-center">
  <tr>
      <th>スマート空間インタラクション</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/wms-watcher-scenario.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> ソリューションバンドル 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeed.cc/solutions/voicecollectionanalysis-zh-hans" target="_blank">スマート空間インタラクション</a></h2>
      <p>音声から API へ：インテントをアクションに変換します。新しいアプリを一から構築する必要はありません。既存の WMS エンドポイントを Watcher に公開するだけで、現場の作業者がすぐに音声操作を利用できるようになります。</p>
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
                <p>作業者は、手袋を着用しているときやフォークリフトを運転しているときでも、在庫を問い合わせたり出荷を記録したりできます。最大限の安全性と効率性を実現するために、目は作業に、手はハンドルに専念できます。</p>
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
                <h3>ゼロレイテンシーなデータ同期</h3>
                <p>紙による記録のタイムラグをなくします。音声コマンドは ERP への直接的な API 呼び出しをトリガーし、品物が移動した瞬間に在庫データが同期されます。</p>
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
                <h3>ユニバーサルなシステム相互運用性</h3>
                <p>SAP、Oracle、またはカスタムの SQL バックエンドを利用している場合でも、システムに API があれば Watcher で制御できます。AI を導入するためにレガシーシステムを移行する必要はありません。</p>
            </div>
        </li>
    </ul>
</div>

## アーキテクチャ

コードを書く前に、データフローを理解することが重要です。この連携では、**MCP サーバー**が AI と社内ネットワーク間のセキュアなゲートウェイとして機能するブリッジパターンを採用しています。

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**主なコンポーネント：**

1. **Watcher デバイス：** 自然言語によるインテント（例：「在庫を確認して」）を取得し、クラウドに送信します。
2. **MCP エンドポイント（クラウド）：** SenseCraft が提供するセキュアトンネルで、インテントをローカル環境に転送します。
3. **MCP サーバー（ローカルブリッジ）：** マシン上で動作する軽量な Python スクリプトです。AI のインテントを特定のコード関数に変換します。
4. **バックエンド API：** 実際のロジックを実行する既存の業務アプリケーション（FastAPI、Flask など）。
5. **インフラストラクチャ：** バックエンドが依存するデータベースやその他のサービス。

**汎用的な連携シナリオ**：

このガイドではリファレンス実装として **倉庫システム** を使用しますが、このアーキテクチャはあらゆる場面に適用できます：

| **業界**        | **音声コマンド**                     | **背後で行われるシステムアクション** |
| --------------- | --------------------------------- | ---------------------------- |
| **物流**        | *「50 個入庫して」*                  | `POST /api/inventory/add`    |
| **営業（CRM）** | *「案件ステータスを Closed に更新して」* | `PUT /api/deals/{id}/status` |
| **IT 運用**     | *「ステージングサーバーを再起動して」*   | `POST /api/servers/restart`  |

## デモ 1：音声制御倉庫システム

ローカルマシン上でモックの **倉庫バックエンド** と **MCP ブリッジ** を実行し、業務環境をシミュレートします。このデモでは次のことが可能になります：

- 🗣️ **在庫確認：** 「Xiaozhi Standard の在庫はいくつある？」
- 🗣️ **データ入力：** 「Watcher Xiaozhi を 5 台入庫して」
- 🗣️ **業務インサイト：** 「今日の在庫サマリーを教えて」

### 前提条件

- **ハードウェア：** SenseCAP Watcher、Docker 対応のコンピュータ
- **ソフトウェア：** Docker または [Docker Desktop](https://www.docker.com/products/docker-desktop/)（Docker Compose を含む）、Git
- **アカウント：** [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) アカウント

:::note Watcher のセットアップ
[SenseCraft AI Device Center](https://sensecraft.seeed.cc/ai/device/local/37) を通じて、SenseCAP Watcher が **Xiaozhi AI** で構成されていることを確認してください。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/sensecap-setup.png" alt="sensecap-setup"/>
</div>
:::

### ステップ 1：倉庫システムをデプロイする

このデプロイには Docker を使用し、すべてのプラットフォーム（Windows、macOS、Linux）で一貫した環境を保証します。

**1. リポジトリをクローンする：**

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

**2. Docker Compose で起動する：**

```bash
docker-compose -f docker-compose.prod.yml up -d
```

この 1 つのコマンドで次のことが行われます：

- 倉庫アプリケーションサーバーをビルドして起動（ポート 2125）
- データベース用の永続ボリュームを作成

**3. デプロイを確認する：**

コンテナが起動するまで約 30 秒待ち、次を確認します：

```bash
docker-compose -f docker-compose.prod.yml ps
```

`warehouse-prod` コンテナが実行中であることを確認してください。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="API Documentation"/>
</div>

- **Web UI：** ブラウザで `http://localhost:2125` を開きます
- **API ドキュメント：** `http://localhost:2125/docs` を開いて Swagger UI を表示します

### ステップ 2：システムの初期設定

倉庫システムには、セキュリティのためにユーザー認証と API キー管理が含まれています。MCP を接続する前に、これらを設定する必要があります。

**1. 管理者アカウントを作成する：**

ブラウザで `http://localhost:2125` を開きます。初回アクセス時には、登録フォームが表示されます：

- 希望する **ユーザー名** を入力します（例：`admin`）
- **パスワード** を入力します（例：`admin123`）
- **Register** をクリックします

:::tip 最初のユーザーは管理者
最初に登録されたユーザーは自動的に管理者になります。
:::

**2. ログインしてユーザー管理に移動する：**

登録後、認証情報でログインします。ナビゲーション内の **User Management** タブをクリックします。

**3. API キーを作成する：**

User Management セクションで、**API Key Management** エリアを見つけます：

1. キーのわかりやすい名前を入力します（例：`MCP Bridge`）
2. **Create API Key** をクリックします
3. **重要：** 生成された API キーはすぐにコピーしてください！表示されるのは一度きりです。

API キーは次のような形式です：`wh_xxxxxxxxxxxxxxxxxxxx`

:::warning API キーを保存する
API キーは作成時に一度だけ表示されます。安全な場所に保管してください。次のステップで必要になります。
:::

### ステップ 3：MCP ブリッジを構成する

ここから、バックエンドを AI に接続します。ブリッジコードは `mcp/` ディレクトリ内にあります。

:::tip uv をインストールする
MCP ブリッジは Python 環境マネージャーとして `uv` を使用します。次のコマンドでインストールします：

<Tabs>
<TabItem value="mac" label="Linux/macOS" default>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

</TabItem>
<TabItem value="win" label="Windows (PowerShell)">

```powershell
irm https://astral.sh/uv/install.ps1 | iex
```

</TabItem>
</Tabs>

:::

**1. MCP エンドポイントを取得する：**

**MCP Endpoint Address**（`wss://...`）を [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration から取得します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. API キーを設定する**:

ターミナルを開き、`mcp` フォルダへ移動します:

```bash
cd mcp

# Copy the example config file
cp config.yml.example config.yml
```

Step 2 で取得した API キーを使って `config.yml` を編集します:

:::caution
`config.yml.example` 内のデフォルトの `api_base_url` は `http://localhost:2124/api`（ローカル開発用ポート）です。今回はポート **2125** を使用する `docker-compose.prod.yml` でデプロイしているため、それに合わせて更新する必要があります。
:::

```yaml
# Backend API address (change from default 2124 to 2125 for Docker deployment)
api_base_url: "http://localhost:2125/api"

# API key authentication (from User Management -> API Key Management)
auth:
  type: api_key
  key: "wh_your-api-key-here"
```

**3. MCP Bridge を起動する**:

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

```bash
# Set the MCP Endpoint (replace with your actual address)
export MCP_ENDPOINT="wss://your-endpoint-address"

# Start the Bridge
./start_mcp.sh
```

</TabItem>

<TabItem value="win" label="Windows (PowerShell)">

```powershell
# Set the MCP Endpoint (replace with your actual address)
$env:MCP_ENDPOINT="wss://your-endpoint-address"

# Start the Bridge
./start_mcp.ps1
```

</TabItem>

</Tabs>

成功すると、`MCP 服务启动成功！`（MCP サービスが正常に起動しました）というメッセージが表示されます

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/mcp-bridge-start-successfully.png" alt="mcp-bridge-start-successfully"/>
</div>

### Step 4: 動作確認

すべて接続が完了しました。ここからは SenseCAP Watcher を使ってローカルシステムと対話します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="MCP_connected"/>
</div>

それでは、Watcher デバイスを使って連携をテストしてみましょう！

### 音声コマンド例

| 音声コマンド                                           | 期待される動作                                         |
| ------------------------------------------------------ | ----------------------------------------------------- |
| 「小智標準版の在庫を確認して」                         | `query_stock` ツールを呼び出す                        |
| 「小智プロフェッショナル版はいくつ在庫がありますか？」 | プロフェッショナル版を指定して `query_stock` を呼び出す |
| 「Watcher 小智標準版を 5 台入庫して」                  | 数量=5 で `stock_in` ツールを呼び出す                 |
| 「小智を 3 台出庫して販売用に回して」                  | 数量=3 で `stock_out` ツールを呼び出す                |
| 「今日の在庫サマリーは？」                             | `get_today_statistics` ツールを呼び出す               |
| 「小智製品をすべて一覧表示して」                       | entity_type="material" を指定して `search` ツールを呼び出す |

**裏側では何が起きているのか？**

| **コンポーネント** | **動作**                                             |
| -------------- | -------------------------------------------------- |
| **Watcher**    | 音声データをクラウドへ送信する。                    |
| **MCP Bridge** | インテントを受信し、使用するツールが `query_stock` だと判断する。 |
| **System**     | API キー認証付きで `GET /materials/product-stats` を実行する。 |
| **Result**     | Watcher が *「現在の在庫は 150 台です。」* と音声で応答する。 |

### 期待されるレスポンス

**在庫照会:**

> 「在庫照会が完了しました。Watcher 小智標準版は現在、A-01-01 のロケーションに 150 台在庫があります。在庫ステータスは正常です。」

**入庫:**

> 「Watcher 小智標準版を 5 台正常に入庫しました。以前の数量は 150 台、新しい数量は 155 台です。」

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## システムへのカスタマイズ

倉庫デモはあくまで出発点に過ぎません。MCP Bridge は**Provider プラグインアーキテクチャ**を採用しており、既存コードを変更する必要はありません。その代わりに、新しい Provider を作成して、ご自身のバックエンドシステムにブリッジを適合させます。

### 仕組み

ブリッジは責務が明確に分離されています:

- **`warehouse_mcp.py`** — 6 つの固定 MCP ツール（`query_stock`、`stock_in`、`stock_out`、`search`、`resolve_name`、`get_today_statistics`）を定義します。**このファイルを変更する必要はありません。**
- **`providers/base.py`** — インターフェース（6 メソッド）を定義する抽象基底クラス。
- **`providers/default.py`** — デモ用倉庫バックエンド向けのデフォルト実装。
- **カスタムプロバイダ** — `providers/` 内に作成する新しい `.py` ファイルで、6 つのメソッドをあなたのシステムの API に適合させます。

### 1. カスタムプロバイダを作成する

新しいファイル `mcp/providers/my_erp.py` を作成します:

```python
from .base import BaseProvider

class MyERPProvider(BaseProvider):
    """Adapter for My ERP System."""

    PROVIDER_NAME = "my_erp"

    def query_stock(self, product_name, show_batches=False):
        # Call your ERP's inventory API
        return self.http_get(f"/inventory/query", params={"sku": product_name})

    def stock_in(self, product_name, quantity, reason, operator, fuzzy,
                 location=None, contact_id=None, variant=None):
        return self.http_post("/inventory/receive", {
            "sku": product_name, "qty": quantity, "note": reason
        })

    def stock_out(self, product_name, quantity, reason, operator, fuzzy,
                  variant=None):
        return self.http_post("/inventory/ship", {
            "sku": product_name, "qty": quantity, "note": reason
        })

    def search(self, query, entity_type, category, status, contact_type,
               fuzzy, include_batches=False, max_results=0):
        return self.http_get("/search", params={"q": query, "type": entity_type})

    def resolve_name(self, text, entity_type="all"):
        return self.http_get("/fuzzy-match", params={"q": text})

    def get_today_statistics(self):
        return self.http_get("/dashboard/today")
```

基底クラス（`BaseProvider`）は、自動的に認証ヘッダーを付与しエラー処理も行う `http_get()` と `http_post()` ヘルパーを提供するため、プロバイダ側のコードを最小限に保てます。

:::tip 自動検出
`.py` ファイルを `mcp/providers/` に配置するだけで、ブリッジはすべての `BaseProvider` サブクラスを自動的に検出して登録します — 手動での登録は不要です。
:::

### 2. `config.yml` で設定する

まだの場合は、まずテンプレートから `config.yml` を作成します:

```bash
cd mcp
cp config.yml.example config.yml
```

その後、プロバイダを切り替えて実際のサーバーを指すようにします — **コード変更は一切不要です**:

```yaml
# Switch to your custom provider
provider: "my_erp"

# Your production API address
api_base_url: "http://192.168.50.10:8080/api/v1"

# Authentication (supports api_key, bearer, basic)
auth:
  type: api_key
  key: "your-production-api-key"
```

環境変数 `WAREHOUSE_API_URL`、`WAREHOUSE_API_KEY`、`WAREHOUSE_PROVIDER` を使って設定を上書きすることもできます。

<details>

<summary>サポートされている認証方式</summary>

基底クラスは `config.yml` 経由で複数の認証タイプを標準サポートしています:

```yaml
# API Key (default)
auth:
  type: api_key
  header: X-API-Key    # optional, defaults to X-API-Key
  key: "your-key"

# Bearer Token
auth:
  type: bearer
  token: "your-bearer-token"

# Basic Auth
auth:
  type: basic
  username: "admin"
  password: "secret"
```

独自の認証方式（例: HMAC 署名）を使用する場合は、プロバイダ内で `get_auth_headers()` メソッドをオーバーライドしてください。

</details>

<details>

<summary>プロバイダ開発のベストプラクティス</summary>

### 戻り値のフォーマット

戻り値は AI によって読み取られ、音声応答の生成に使われます。簡潔に保ってください（通常は 1024 バイト未満）。

```Python
# Good — concise
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# Bad — too verbose
return {
    "success": True,
    "full_product_details": {...},
    "complete_history": [...]
}
```

### エラー処理

基底クラスの `http_get()` / `http_post()` は、すでに接続エラーと HTTP ステータスコードを処理します。追加の業務ロジック上のエラーについては、構造化されたエラー dict を返してください:

```Python
return {
    "success": False,
    "error": "Product not found",
    "message": "No matching product in the ERP system."
}
```

### ロギング

:::danger print() を絶対に使わないでください
MCP は通信に標準入出力（stdio）を使用しています。`print()` を使うとプロトコルのデータストリームが破損します。必ずロガーを使用してください:
:::

```Python
import logging
logger = logging.getLogger("WarehouseMCP")
logger.info(f"Querying stock for: {product_name}")
```

</details>

### 3. 本番環境へのデプロイ

デモはローカルのターミナルで実行されます。長期的に 24 時間 365 日稼働させるには、次のようにします:

- **Docker 化:** 環境の安定性を確保するため、`mcp/` フォルダを Docker コンテナとしてパッケージングします。
- **バックグラウンドサービス:** 開いたターミナルで `./start_mcp.sh` を実行する代わりに、`systemd`（Linux）や `NSSM`（Windows）を使ってスクリプトをバックグラウンドサービスとして実行します。
- **ネットワーク:** MCP Bridge を実行するマシンが SenseCraft Cloud（`wss://...`）に接続できる安定したインターネットアクセスを持っていることを確認します。

## トラブルシューティング

<details>
<summary>❌ Docker コンテナが起動しない</summary>

- **症状:** `docker-compose ps` でコンテナが "Exited" 状態になっている。
- **解決策:**
  1. Docker Desktop が起動していることを確認する
  2. ログを確認する: `docker-compose -f docker-compose.prod.yml logs`
  3. ポート 2125 が使用中でないことを確認する
  4. 再ビルドを試す: `docker-compose -f docker-compose.prod.yml up -d --build`

</details>

<details>
<summary>❌ API キーが無効（401 Unauthorized）</summary>

- **症状:** MCP Bridge のログに `401 Unauthorized` または "Invalid API Key" が表示される。
- **解決策:**
  1. `mcp/config.yml` 内の API キーが正しいか確認する
  2. ユーザー管理画面で API キーがまだ有効であることを確認する
  3. キーの前後に余分なスペースや引用符がないことを確認します
  4. 新しい API キーを作成してみてください

</details>

<details>
<summary>❌ バックエンドサービスが動作していない</summary>

- **症状:** AI が "Cannot connect to backend service" と応答する。
- **解決方法:**
  1. コンテナが動作しているか確認します: `docker-compose -f docker-compose.prod.yml ps`
  2. バックエンドのヘルスチェックを行います: `curl http://localhost:2125/api/dashboard/stats`
  3. ログを確認します: `docker-compose -f docker-compose.prod.yml logs`

</details>

<details>
<summary>❌ MCP 接続タイムアウト</summary>

- **症状:** スクリプトが "Connecting to WebSocket server..." の状態で無期限に止まる。
- **解決方法:**
  1. `MCP_ENDPOINT` が正しいか確認します（タイプミスがないかチェック）。
  2. URL が `wss://`（セキュア WebSocket）で始まっていることを確認します。
  3. インターネット接続（SenseCraft Cloud へのアウトバウンド通信）を確認します。

</details>

<details>
<summary>❌ ツールが認識されない</summary>

- **症状:** コマンドを話しても、AI が "I don't know how to do that" と言うか、ツールが起動しない。
- **解決方法:**
  1. **名前を確認:** 関数には分かりやすい英語の説明的な名前を使用します。
  2. **Docstring を確認:** docstring が *意図* を明確に記述していることを確認します（例: "Use this to check stock"）。
  3. **再起動:** コードを変更した後は MCP サーバースクリプトを再起動する必要があります。

</details>

<details>
<summary>❌ 接続数上限超過</summary>

- **症状:** エラーログに "Maximum connections reached" と表示される。
- **解決方法:**
  1. 各 Endpoint には接続数の上限があります。複数のターミナルで同時にスクリプトを実行していないことを確認します。
  2. 他の接続を閉じ、数分待ってから再試行します。

</details>

<details>
<summary>❌ 接続拒否 / WebSocket 443 がブロックされている</summary>

**症状:**
`[WinError 1225] Connection refused` が表示される、または Endpoint URL が正しいにもかかわらず、スクリプトが `Connecting to WebSocket server...` の状態で止まる。

**原因:**
**企業ファイアウォールによるブロック。** 多くのオフィスネットワーク（や VPN）は、ポート 443 であっても **WebSocket (wss://)** トラフィックや非標準プロトコルを厳しくブロックします。

**クイックな解決策:**

1. **📱 「ホットスポットテスト」（推奨）**
   オフィスネットワーク/VPN から切断し、コンピュータを **モバイルホットスポット（4G/5G）** に接続します。
   - *動作した場合:* オフィスネットワークが接続をブロックしています。

2. **🔧 プロキシを設定する**
   会社でプロキシの使用が必須の場合は、実行前に次を設定します:
   - **Windows:** `$env:HTTPS_PROXY="http://your-proxy:port"`
   - **Mac/Linux:** `export HTTPS_PROXY="http://your-proxy:port"`

3. **🛡️ ホワイトリスト登録**
   IT 部門に依頼して、`*.seeed.cc` への **WebSocket (WSS)** トラフィックを許可してもらいます。

</details>

## リソース

- [MCP Endpoint セットアップガイド](/ja/mcp_endpoint) - MCP Endpoint の作成と管理方法について学びます。
- [Warehouse System リポジトリ](https://github.com/suharvest/warehouse_system) - Provider の例を含む、完全なソースコード。
- [FastMCP ドキュメント](https://github.com/PrefectHQ/fastmcp) - 高度なツール定義についてさらに深く学べます。

## テクニカルサポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
