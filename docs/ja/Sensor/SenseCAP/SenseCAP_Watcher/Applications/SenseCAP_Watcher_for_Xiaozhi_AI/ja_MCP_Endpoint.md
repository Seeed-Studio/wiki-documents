---
description: MCP エンドポイントの使用ガイド
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
slug: /ja/mcp_endpoint
last_update:
  date: 10/30/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# MCP エンドポイント

## 概要

このプロジェクトを可能にしたオープンソースの貢献に対して、[XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) に特別な感謝を表します。

**MCP（Model Context Protocol）** は、リモート制御、計算、メール操作、知識検索などを可能にすることで AI の機能を拡張する強力なフレームワークです。

MCP により、サーバーは明確に定義されたプロトコルを通じて言語モデルに呼び出し可能なツールを公開できます。これらのツールにより、モデルはデータベースのクエリ、API の呼び出し、複雑な計算の実行など、外部システムとの相互作用が可能になります。各ツールは名前によって一意に識別され、その機能を定義するメタデータによって記述されます。

**MCP エンドポイント** は、ローカル MCP サービスと Xiaozhi AI モデルの間の橋渡しとして機能します。音声対応デバイスやその他の端末がこれらの外部機能をシームレスに活用するためのインターフェースを提供します。

## MCP エンドポイントの取得

1. [SenseCraft AI プラットフォーム](https://sensecraft.seeed.cc/ai/home) にアクセスします

2. コントロールパネルにアクセスするには、ページの右上角にある Watcher Agent をクリックします。

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>

3. エージェント設定を開きます

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

4. `MCP Setting` と `Get MCP Endpoint` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI14.png" style={{width:800, height:'auto'}}/></div>

5. エンドポイントアドレスと接続ステータスを取得します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI15.png" style={{width:400, height:'auto'}}/></div>

## MCP の例

このプロジェクトを可能にしたオープンソースの貢献に対して、[XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) に特別な感謝を表します。

以下のコードは [MCP Example Code Github](https://github.com/78/mcp-calculator) から取得できます

### MCP サーバーコードの例

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

以下は、MCP サーバーの例の主要部分の詳細な説明です：

- `@mcp.tool()` : 以下の関数を AI モデルによってリモートで呼び出し可能な MCP ツールとして登録します。

- `def calculator(python_expression: str) -> dict`: モデルから数式を受け取るツールを定義します。

- `result = eval(python_expression)` : Python の eval() を使用して式を評価します。上記でインポートされているため、math や random などのライブラリを使用できます。

- `mcp.run(transport="stdio")` : サーバーを開始します。stdio トランスポートにより、Watcher Agent や MCP クライアントとの通信が可能になります。

### クイックスタート

- 要件
  - [MCP Example Code Github](https://github.com/78/mcp-calculator)
  - Python 3.7+
  - websockets>=11.0.3
  - python-dotenv>=1.0.0
  - mcp>=1.8.1
  - pydantic>=2.11.4
  - mcp-proxy>=0.8.2

- ステップ1. リポジトリをクローンしてプロジェクトフォルダに移動します

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

- ステップ4. 計算機の例を実行します
  ```bash
  python mcp_pipe.py calculator.py
  ```

- または設定されたすべてのサーバーを実行します
  ```bash
  python mcp_pipe.py
  ```

  :::note
  これには、サーバー設定を定義する mcp_config.json 設定ファイルが必要です。
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

### MCP エンドポイントのステータス

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP1.png" style={{width:400, height:'auto'}}/></div>

- Connection Status: MCP 接続が正常に動作しているかどうかを表示します。
- Refresh icon: MCP 接続ステータスを更新します。
- Enabled Services: Watcher が使用できるすべての MCP サービスを一覧表示します。
- Endpoint Address: MCP エンドポイントアドレス（公式技術サポートが必要な場合を除き、これを他の人と共有しないでください）

### 会話ログ

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP3.png" style={{width:800, height:'auto'}}/></div>

### 注意事項
#### 1. MCP でのツールとパラメータの命名

ツールとそのパラメータの名前は、大規模モデルがその目的を理解できるように明確でなければなりません。
可能な限り略語の使用を避け、ツールの機能といつ使用すべきかを説明するコメントを提供してください。

例えば、calculator という名前のツールはモデルにそれが計算機であることを知らせ、python_expression パラメータはモデルが Python 式を入力すべきであることを示します。

bing_search ツールを作成する場合、パラメータ名は keywords にすべきです。

#### 2. 関数の docstring ガイダンス

docstring（"""...""" を使用）は、モデルにツールをいつ使用するかを指導します。

また、式で math や random ライブラリの関数を使用できることも言及できます。

これら2つのライブラリは、例のコードで既にインポートされています。

#### 3. 印刷ではなくログ記録

この MCP サーバーの例では標準入出力がデータ送信に使用されているため、print を使用して情報を出力することはできません。

代わりに、デバッグとログ記録には logger を使用してください。

#### 4. 戻り値

MCP の戻り値は通常、文字列または JSON です。例では、計算結果は result という名前の JSON フィールドで返されます。

戻り値の長さは通常制限されており、IoT デバイスコマンドと同様に、通常は 1024 バイト以内です。

#### 5. ツールリストの制限

MCP ツールリストには上限があります。

後で設定ページに表示され、トークン数に基づいて計算されます。

注意：ツールが多すぎると、デバイスのスケジューリング効率に影響する可能性があります。

#### 6. 接続制限

各 MCP エンドポイントには同時接続数の上限があります。

注意：この制限を超えたり、同時接続が多すぎたりすると、デバイスのパフォーマンスが低下する可能性があります。

## 事前提供 MCP サービスの選択

前述の MCP Setting から選択できる以下の4つの MCP サービスが利用可能です。

設定を保存してデバイスを再起動すると、選択したサービスが自動的に有効になります。

`×` をクリックしてサービスを削除できます

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI16.png" style={{width:800, height:'auto'}}/></div>

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
