---
description: mcp エンドポイントの使用ガイド
title: MCP エンドポイント
sidebar_position: 5
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - Endpoint
  - Model
  - Context
  - protocol
  - MCP
  - Server
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /mcp_endpoint
last_update:
  date: 10/30/2025
  author: Twelve
translation:
  skip: [zh-CN]
createdAt: '2025-10-22'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/ja/mcp_endpoint/
---

# MCP エンドポイント

## 概要

このプロジェクトの実現を可能にしたオープンソースへの貢献に対し、[XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) に特別な感謝を表します。

**MCP (Model Context Protocol)** は、リモート制御、計算、メール操作、ナレッジ検索などを可能にすることで、AI の能力を拡張する強力なフレームワークです。

MCP により、サーバーは明確に定義されたプロトコルを通じて、言語モデルから呼び出し可能なツールを公開できます。これらのツールにより、モデルはデータベースのクエリ、API の呼び出し、複雑な計算の実行など、外部システムと対話できます。各ツールには一意の名前が割り当てられ、その機能を定義するメタデータによって説明されます。

**MCP Endpoint** は、ローカルの MCP サービスと Xiaozhi AI モデルの間のブリッジとして機能します。音声対応デバイスやその他の端末が、これらの外部機能をシームレスに活用できるインターフェースを提供します。

## MCP Endpoint を取得する

1. **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`** > **`Watcher Agent`** の順に操作して Watcher Agent コントロールパネルにアクセスするか、[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/37)を使用し、左サイドバーの **`Watcher Agent`** をクリックします。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_agent_workspace.png" style={{width:800, height:'auto'}}/></div>

2. エージェント設定を開きます

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

3. `MCP Setting` と `Get MCP Endpoint` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI14.png" style={{width:800, height:'auto'}}/></div>

4. Endpoint アドレスと接続ステータスを取得します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI15.png" style={{width:400, height:'auto'}}/></div>

## MCP の例

このプロジェクトの実現を可能にしたオープンソースへの貢献に対し、[XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) に特別な感謝を表します。

[MCP Example Code Github](https://github.com/78/mcp-calculator) から以下のコードを取得できます。

### MCP サーバーコード例

```python
  # server.py
  from mcp.server.fastmcp import FastMCP
  import logging
  logger = logging.getLogger('test_mcp')

  import math
  import random

  # Create an MCP server
  mcp = FastMCP("Calculator")

  # Add an addition tool
  @mcp.tool()
  def calculator(python_expression: str) -> dict:
      """For mathamatical calculation, always use this tool to calculate the result of a python expression. `math` and `random` are available."""
      result = eval(python_expression)
      logger.info(f"Calculating formula: {python_expression}, result: {result}")
      return {"success": True, "result": result}

  # Start the server
  if __name__ == "__main__":
      mcp.run(transport="stdio")
```

### コードの説明

以下は、MCP サーバー例の主要な部分についての詳細な説明です。

- `@mcp.tool()` : 次の関数を MCP ツールとして登録し、AI モデルからリモートで呼び出せるようにします。

- `def calculator(python_expression: str) -> dict`: モデルから数式を受け取るツールを定義します。

- `result = eval(python_expression)` : Python の eval() を使用して式を評価します。上部でインポートされているため、math や random などのライブラリを使用できます。

- `mcp.run(transport="stdio")` : サーバーを起動します。stdio トランスポートにより、Watcher Agent や MCP クライアントと通信できます。

### クイックスタート

- 必要条件
  - [MCP Example Code Github](https://github.com/78/mcp-calculator)
  - Python 3.7+
  - websockets>=11.0.3
  - python-dotenv>=1.0.0
  - mcp>=1.8.1
  - pydantic>=2.11.4
  - mcp-proxy>=0.8.2

- ステップ1. リポジトリをクローンし、プロジェクトフォルダに移動します

  ```bash
  git clone https://github.com/78/mcp-calculator.git
  cd mcp-calculator
  ```

- ステップ2. 依存関係をインストールします

  ```bash
  pip install -r requirements.txt
  ```

- ステップ3. 環境変数を設定します
  - Linux/macOS の場合
    ```bash
    export MCP_ENDPOINT=<your_mcp_endpoint>
    ```
  - Windows（PowerShell）の場合
    ```bash
    $env:MCP_ENDPOINT="<your_mcp_endpoint>"
    ```
  - Windows（CMD）の場合
    ```bash
    set MCP_ENDPOINT=<your_mcp_endpoint>
    ```

- ステップ4. 電卓のサンプルを実行します
  ```bash
  python mcp_pipe.py calculator.py
  ```

- または、設定済みのすべてのサーバーを実行します
  ```bash
  python mcp_pipe.py
  ```

  :::note
  これは、サーバー設定を定義する mcp_config.json 構成ファイルを必要とします。
  :::

### 実行結果

```bash
export MCP_ENDPOINT=<mcp_endpoint_address_get_from_your_agent_configuration>
python mcp_pipe.py calculator.py
2025-05-16 09:07:09,009 - MCP_PIPE - INFO - Connecting to WebSocket server...
2025-05-16 09:07:09,096 - MCP_PIPE - INFO - Successfully connected to WebSocket server
2025-05-16 09:07:09,097 - MCP_PIPE - INFO - Started test.py process
Processing request of type ListToolsRequest
Processing request of type CallToolRequest
Calculating formula: 3.14159 * (8 / 2) ** 2, result: 50.26544
Processing request of type CallToolRequest
Calculating formula: math.comb(10, 3), result: 120
```

### MCP Endpoint ステータス

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP1.png" style={{width:400, height:'auto'}}/></div>

- Connection Status: MCP 接続が正しく動作しているかどうかを表示します。
- Refresh アイコン: MCP 接続ステータスを更新します。
- Enabled Services: Watcher が使用できる MCP サービスをすべて一覧表示します。
- Endpoint Address: mcp_endpoint_address（公式テクニカルサポートにより要求された場合を除き、他人と共有しないでください）

### 会話ログ

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP3.png" style={{width:800, height:'auto'}}/></div>

### 注意事項
#### 1. MCP におけるツール名とパラメータ名

ツールおよびそのパラメータの名前は、大規模モデルがその目的を理解できるよう、明確でなければなりません。
可能な限り略語の使用は避け、ツールの機能と使用すべきタイミングを説明するコメントを記述してください。

たとえば、calculator という名前のツールであれば、モデルはそれが電卓であることを理解し、python_expression というパラメータ名から、Python の式を入力すべきであると判断できます。

bing_search ツールを作成する場合、パラメータ名は keywords とするべきです。

#### 2. 関数 docstring によるガイド

docstring（"""...""" を使用）は、モデルに対してツールをいつ使用すべきかをガイドします。

また、式の中で math および random ライブラリの関数を使用できることを記載することもできます。

これら 2 つのライブラリは、サンプルコード内ですでにインポートされています。

#### 3. print の代わりにログ出力を使用する

この MCP Server の例では、標準入出力はデータ伝送に使用されるため、情報の出力に print を使用することはできません。

代わりに logger を使用してデバッグおよびログ出力を行ってください。

#### 4. 戻り値

MCP の戻り値は通常、文字列または JSON です。この例では、計算結果は result という名前の JSON フィールドで返されます。

戻り値の長さには通常制限があり、IoT デバイスのコマンドと同様に、一般的には 1024 バイト以内です。

#### 5. ツールリストの上限

MCP ツールリストには上限があります。

後に設定ページに表示され、トークン数に基づいて計算されます。

注意: ツールが多すぎると、デバイスのスケジューリング効率に影響を与える可能性があります。

#### 6. 接続数の制限

各 MCP エンドポイントには、同時接続数の上限があります。

注意: この上限を超えたり、同時接続が多すぎたりすると、デバイスのパフォーマンスが低下する可能性があります。

## 事前提供される MCP サービスの選択

前述の MCP Setting から選択できる、次の 4 つの MCP サービスが用意されています。

設定を保存してデバイスを再起動すると、選択したサービスが自動的に有効になります。

サービスは `×` をクリックして削除できます。

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI16.png" style={{width:800, height:'auto'}}/></div>

## テクニカルサポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
