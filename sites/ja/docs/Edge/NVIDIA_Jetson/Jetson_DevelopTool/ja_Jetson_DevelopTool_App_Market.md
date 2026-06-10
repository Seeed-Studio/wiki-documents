---
description: Seeed Jetson DevelopTool の App Market を使用して Jetson デバイス上で AI アプリケーション（YOLOv8、Ollama、DeepSeek、Node-RED など）を閲覧およびインストールします。
title: App Market
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - App Market
  - YOLOv8
  - Ollama
  - DeepSeek
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_app_market
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/ja/jetson_developtool_app_market/
---

**App Market** モジュールを使用すると、Jetson デバイス上に人気の AI アプリケーションを直接ブラウズしてインストールできます。手動で Docker コマンドを実行したり、依存関係を管理したりする必要はありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-app-market.png" style={{width:800, height:'auto'}}/></div>

## 利用可能なアプリケーション

| アプリ | カテゴリ | 説明 |
|-----|----------|-------------|
| YOLOv8 | コンピュータビジョン | NVIDIA TensorRT によるリアルタイム物体検出 |
| Ollama | LLM | 大規模言語モデルを Jetson 上でローカル実行 |
| DeepSeek | LLM | エッジ展開向けに最適化された DeepSeek 推論エンジン |
| Node-RED | IoT / 自動化 | IoT パイプライン向けのローコード・フローベースプログラミング |
| Jupyter Lab | 開発 | 対話型 Python ノートブックサーバー |
| VS Code Server | 開発 | ブラウザベースの VS Code IDE |

## アプリのインストール

1. Jetson デバイスに接続します（[Connect Device](/ja/jetson_developtool_connect_device) を参照）。
2. **App Market** タブを開きます。
3. 利用可能なアプリをブラウズするか、検索バーを使用してカテゴリで絞り込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/appmarket-categories.png" style={{width:800, height:'auto'}}/></div>

4. 目的のアプリで **Install** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/appmarket-app-cards.png" style={{width:800, height:'auto'}}/></div>

5. ツールが適切な Docker イメージを取得し、Jetson の JetPack バージョンに合わせて自動的に構成します。
6. インストールが完了したら、**Launch** をクリックしてアプリを起動し、（Web ベースのアプリの場合は）アクセス URL または接続情報を取得します。

:::tip
App Market のアプリは Docker コンテナとしてパッケージされています。Jetson に Docker がインストールされていることを確認してください。インストールされていない場合、ツールが自動インストールを提案します。
:::

## デモ：ワンクリックで Depth Anything V3 をデプロイ

次のビデオでは、**Depth Anything V3** を App Market からのワンクリックで Jetson デバイス上にデプロイする方法を紹介します。

<div style={{textAlign:'center'}}>
  <video width="800" controls>
    <source src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/depth-anything-v3-deploy.mp4" type="video/mp4"/>
  </video>
</div>

## インストール済みアプリの管理

**Installed** タブでは、次のことができます：

- 個々のアプリを **Start / Stop** する
- 最新バージョンに **Update** する
- ストレージを解放するためにアプリを **Remove** する
- 各アプリのポートマッピングとアクセス URL を表示する

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
