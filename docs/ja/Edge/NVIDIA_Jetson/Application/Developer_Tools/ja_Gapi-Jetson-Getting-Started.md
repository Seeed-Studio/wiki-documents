---
description: この記事では、NVIDIA Jetson デバイス上で Gapi を使用する方法を紹介します。Gapi は、低コードのワークフローエンジンとマイクロサービスフレームワークを通じて、Jetson AI Lab の成果を迅速に実世界のアプリケーションに変換するために設計された埋め込み可能な API ゲートウェイです。
title: Gapi の使い方入門
tags:
  - AI モデル最適化
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/gapi_getting_started-with_jetson
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイスでの Gapi の使い方入門

[Gapi](https://genainerds.com/#/Gapi) は、AI マイクロサービスと日常的に使用されるシステム間でストリーミング統合を作成する埋め込み可能な API ゲートウェイです。

このプロジェクトの目標は、Jetson AI Lab の成果を実世界の環境でのパイロットやデモに変換するスピードを加速することです。「オンデバイス」の生成 AI は、孤立した存在である必要はありません！

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiGIF.gif"/></div>

- 数十のオープン統合とモバイル、ウェブ、デスクトップ向けのカスタマイズ可能なクライアントを備えた低コード UI のワークフローエンジン。
- Jetson コンテナ（Ollama、Whisper、Piper TTS などが既に対応済み、さらに追加予定）をラップするためのマイクロサービスフレームワーク。または独自のモデル/コードをラップしてワークフローに統合可能。
- リアルタイムのハイブリッドなバイナリ+JSON メッセージングにより、サービス間の呼び出しをスムーズにし、遅延を削減。
- 実際の環境でステークホルダーに生成 AI の価値を証明するための迅速な手段。

## Gapi サーバー

Gapi サーバーは、低コードのワークフロー UI を備えたバックグラウンドで動作する埋め込み可能な API ゲートウェイソフトウェアです。このサーバーは、マイクロサービスと通信するワークフロー「ノード」のためのメッセージハブおよび状態マシンとして機能します。アプリケーションの「接続組織」として考えることができます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiDiagram3.png"/></div>

:::note
マイクロサービスとは、カスタムコード/モデルをストリーミング API を使用してワークフローに統合するラッパー Python スクリプトを実行するプロセスのことです。
:::

- Gapi サーバーは、任意の Jetson Orin または、マイクロサービスが安全なウェブソケットを介して外部接続する任意のコンピュータ上で実行可能です。GPU リソースは使用しません。また、サーバーのインストールをスキップするための小さなデモバージョンもあります（ただし、独自のマイクロサービスを実行する必要があります）。
- [Gapi プロジェクトページ](https://genainerds.com/#/Gapi)
- [Gapi Github](https://github.com/GenAI-Nerds/Gapi/)
- [Gapi ドキュメント](https://genainerds.com/#/Docs)
- [Gapi ホストデモ](https://genaigapi.com/)

## 必要条件
- 任意の NVIDIA Jetson Orin
- Docker
- 十分なストレージ容量：1.3GB

## Jetson に Gapi をインストールする

**以下の手順を実行して Jetson に Gapi をインストールします：**
```bash
mkdir ~/gapiData && cd ~/gapiData
curl -L https://raw.githubusercontent.com/genai-nerds/Gapi/main/gapiConfigs.zip -o gapiConfigs.zip
unzip -q gapiConfigs.zip
docker run -d --name gapi --network host -v ~/gapiData:/opt/gapi/vdata genainerds/gapi:arm64 /bin/bash -c "cd /opt/gapi/bin && ./startGapi.sh"
echo "You may need to hit Enter now. Afterwards the Docker container 'gapi' s
```

**ログイン**
- ブラウザで以下にアクセス：http://[host-device-ip]:8090
- ユーザー名：root
- パスワード：!gapi2024
- 設定でパスワードを変更してください！SSL 証明書の追加方法はドキュメントに記載されています。

## ワークフロー

ワークフローは、ノード間のデータの実行と流れを視覚的に接続します。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/gapi-diagram-pic.png"/></div>

トランザクション（または単一の発火）は、ノードからノードへと進むにつれて、各ステップでマイクロサービスやAPIと通信しながら「ローリング入力」データを蓄積します。すべてのノードは、馴染みのあるJSONやJavaScriptの概念を使用して変数やフロー制御を楽しむことができます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/switchproperties.png"/></div>

各ノードは、トランザクション内のローリングデータを追加または参照しながら、途中で意思決定を行うことができます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/visualfeedback.png"/></div>

クライアント、Webhook、マイクロサービスからの公開メッセージから始まるライブトランザクションを視覚的なフィードバックとデバッグを通じて監視できます。

## マイクロサービス

マイクロサービスは、カスタムコードやモデルを統合してGapiワークフローに組み込むためのラッパーPythonスクリプトを実行するプロセスです。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices2.png"/></div>

マイクロサービスはどこででも実行でき、ストリーミング、ハイブリッドバイナリ+JSONメッセージプロトコルを介してGapiサーバーに接続できます。

いくつかの「コミュニティマイクロサービス」がすぐに利用可能で、これらは統合、テストされ、Dockerイメージにパックされています。これらを実行すると、自動的に統合され、NVIDIAレイヤーが正しくロードされ、ホストシステムへのログ記録が提供されます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices3.png"/></div>

さらに、自分自身で作成することも可能です！リクエストを処理し応答するためのon_message Pythonハンドラーを実装するだけです。その他の部分は自動的に処理されます。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices4.png"/></div>

マイクロサービスは、あなたが持っているコードやモデルの単純なラッパーと考えてください。これはワークフロー内の他のノードと同じように機能します。マイクロサービスノードの順番が来ると、on_message関数が呼び出されます。スクリプトはコンテキストとしてローリングトランザクションデータを取得し、その後データを直接フローに公開します。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices1.png"/></div>

## コミュニティマイクロサービスの実行

**コミュニティマイクロサービスの要件**
1. NVIDIA Jetson Orin
2. 十分なストレージ容量：
    - 独自のマイクロサービスにはわずか4KB
    - 各コミュニティマイクロサービスには約4GBから10GB

**手順:**
1. ログインしてマイクロサービスタブに移動します
2. ページ内の青いボックスに記載された指示に従い、カスタム構成をダウンロードします
3. その後、インストールしたいマイクロサービスの指示に従います

## おめでとうございます！ワークフローのヒントを確認できます

<div align="center"><img width ="1000" src="https://genainerds.com/assets/img/WorkflowsHome.png"/></div>

## 技術サポートと製品に関するディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>