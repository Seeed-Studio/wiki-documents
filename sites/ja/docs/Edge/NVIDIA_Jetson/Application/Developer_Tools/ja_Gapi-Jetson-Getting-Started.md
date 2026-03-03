---
description: この記事では、NVIDIA Jetsonデバイス上でGapiを使用する方法を紹介します。Gapiは、低コードワークフローエンジンとマイクロサービスフレームワークを通じて、Jetson AI Labの成果を実世界のアプリケーションに迅速に変換するために設計された組み込み可能なAPIゲートウェイです。
title: Gapiの使い始め方
tags:
  - AI model optimize
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/gapi_getting_started-with_jetson
last_update:
  date: 09/20/2024
  author: Youjiang
---

# NVIDIA® JetsonデバイスでGapiを始める

[Gapi](https://genainerds.com/#/Gapi)は、AIマイクロサービスとユーザーが日常的に活用するシステム間でストリーミング統合を作成する組み込み可能なAPIゲートウェイです。

このプロジェクトの目標は、Jetson AI Labの成果を実世界の環境でのパイロットやデモに変換する速度を加速することです。「オンデバイス」生成AIは、孤立した島に住む必要はありません！

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiGIF.gif"/></div>

- 数十のオープン統合と、モバイル、ウェブ、デスクトップ向けのカスタマイズ可能なクライアントを備えた低コードUIワークフローエンジン。
- Jetsonコンテナ（Ollama、Whisper、Piper TTSなど）をラップするためのマイクロサービスフレームワーク。または独自のモデル/コードをラップしてワークフローに統合。
- リアルタイム、ハイブリッド、バイナリ+jsonメッセージングにより、サービス間呼び出しを円滑化し、レイテンシを削減。
- ステークホルダーの実際の環境で生成AIの価値を証明するための高速パス。

## Gapiサーバー

テスト用の低コードワークフローUIを備えたバックグラウンドで動作する組み込み可能なAPIゲートウェイソフトウェア。サーバーは、マイクロサービスと通信するワークフロー「ノード」のメッセージハブおよびステートマシンです。アプリケーションの結合組織として考えてください。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiDiagram3.png"/></div>

:::note
マイクロサービスは、ストリーミングAPIを使用してカスタムコード/モデルをワークフローに統合するラッパーPythonスクリプトを実行するプロセスです。
:::

- Gapiサーバーは、マイクロサービスがセキュアなWebソケット経由でアウトバウンド接続するため、任意のJetson Orinまたは実際にはどのコンピューターでも実行できます。GPUリソースは使用しません。サーバーのインストールをスキップするための小さなデモ版もあります（ただし、独自のマイクロサービスを実行する必要があります）。
- [Gapiプロジェクトページ](https://genainerds.com/#/Gapi)
- [Gapi Github](https://github.com/GenAI-Nerds/Gapi/)
- [Gapiドキュメント](https://genainerds.com/#/Docs)
- [Gapiホスト型デモ](https://genaigapi.com/)

## 要件

- 任意のNVIDIA Jetson Orin
- Docker
- 十分なストレージ容量：1.3GB

## JetsonにGapiをインストール

**JetsonにGapiをインストールするには、以下の手順を実行してください：**

```bash
mkdir ~/gapiData && cd ~/gapiData
curl -L https://raw.githubusercontent.com/genai-nerds/Gapi/main/gapiConfigs.zip -o gapiConfigs.zip
unzip -q gapiConfigs.zip
docker run -d --name gapi --network host -v ~/gapiData:/opt/gapi/vdata genainerds/gapi:arm64 /bin/bash -c "cd /opt/gapi/bin && ./startGapi.sh"
echo "You may need to hit Enter now. Afterwards the Docker container 'gapi' s
```

**ログイン**

- ブラウザで開く: http://[host-device-ip]:8090
- ユーザー: root
- パスワード: !gapi2024
- 設定でパスワードを変更してください！ドキュメントにSSL証明書の追加方法が記載されています。

## ワークフロー

ワークフローは、ノード間での実行とデータフローを視覚的に接続します。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/gapi-diagram-pic.png"/></div>

トランザクション（または単一の実行）には「ローリング入力」データがあり、ノードからノードへのステップでマイクロサービスとAPIと通信しながらデータを蓄積していきます。すべてのノードは、馴染みのあるjsonとjavascriptの概念を使用して変数とフロー制御を利用できます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/switchproperties.png"/></div>

各ノードは、途中で判断を下しながら、トランザクション内のローリングデータを追加または参照できます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/visualfeedback.png"/></div>

クライアント、Webhook、マイクロサービスから公開されたメッセージから開始されるライブトランザクションを、視覚的なフィードバックとデバッグ機能で監視できます。

## マイクロサービス

マイクロサービスは、カスタムコード/モデルを統合するラッパーPythonスクリプトを実行するプロセスで、Gapiワークフローに統合できるようにします。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices2.png"/></div>

マイクロサービスは好きな場所で実行でき、ストリーミング、ハイブリッドバイナリ+jsonメッセージプロトコルを介してGapiサーバーに接続できます。

私たちが統合、テスト、Dockerイメージにパッケージ化した、すぐに使える「コミュニティマイクロサービス」がいくつかあります。これらを実行すると、自動統合され、NVIDIAレイヤーが正しく読み込まれ、ホストシステムへのログ記録が提供されます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices3.png"/></div>

さらに良いことに、独自のものを作成できます！リクエストを処理して応答するon_message Pythonハンドラーを実装するだけです。残りの部分は自動的に処理されます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices4.png"/></div>

マイクロサービスは、持っているコードやモデルへのシンプルなラッパーと考えてください。ワークフロー内の他のノードと同じように動作します。マイクロサービスノードの番になると、on_message関数が呼び出されます。スクリプトはコンテキスト用のローリングトランザクションデータを取得し、データを直接フローに戻して公開します。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices1.png"/></div>

## コミュニティマイクロサービスの実行

**コミュニティマイクロサービスの要件**

1. 任意のNVIDIA Jetson Orin
2. 十分なストレージ容量:
    - 独自のマイクロサービスには文字通り4KB
    - 各コミュニティマイクロサービスには約4GBから10GB

**手順:**

1. ログインしてマイクロサービスタブに移動
2. そのページの青いボックス内の指示に従って、カスタム設定をダウンロード
3. その下の指示に従って、必要なマイクロサービスをインストール

## おめでとうございます！これでワークフローのヒントを確認できます

<div align="center"><img width ="1000" src="https://genainerds.com/assets/img/WorkflowsHome.png"/></div>

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
