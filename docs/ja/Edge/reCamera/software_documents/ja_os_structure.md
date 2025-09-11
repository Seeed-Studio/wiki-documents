---
description: reCamera のオペレーティングシステム (OS) 構造に関する詳細な解説
title: reCamera OS 構造
keywords:
  - Edge
  - reCamera
  - オペレーティングシステム
  - OS
image: https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.webp
slug: /ja/recamera_os_structure
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reCamera ソフトウェア構造
このソフトウェアには、ファームウェアのOTAアップデートをサポートする安定したreCamera OSが搭載されています。さらに、Node-REDとSensecraft AIプラットフォームがデバイスに統合されており、より簡単なデプロイ体験を提供します。この統合により、初心者の開発者にはNode-REDノードに基づいたモジュール型プログラミング体験が提供されます。一方で、上級開発者にはLinuxベースの詳細な開発環境やPythonを利用した柔軟な操作が可能です。

JavaScript、C/C++、Python、Linux OS、Buildrootに精通した開発者、または技術愛好家、学生、初心者の方々がさらなる開発やアプリケーションの探求に参加することを歓迎します。

## reCamera OS
これはBuildrootを基盤とした組み込みオペレーティングシステムであり、`supervisor`、`sscma`（Seeed SenseCraft Model Assistant）、および`Node-RED`のサービスを統合しています。以下にアーキテクチャ図を示します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.png" /></div>

OSの[ソースコード](https://github.com/Seeed-Studio/reCamera-OS)はGitHubで公開されています。また、OSをより使いやすく多機能にするために、チームは努力を続けており、各アップデートは[こちら](https://github.com/Seeed-Studio/reCamera-OS/releases)で公開されます。新しいバージョンはWebインターフェースを使用してOTAで更新するか、[手動で更新](https://wiki.seeedstudio.com/ja/recamera_os_version_control)することができます。

### 🧩 Supervisor
Supervisorは軽量なプロセスマネージャーで、他のサービスを監視および管理します。サービスの起動と停止、システムイベントの処理、他のサービスやUIへのインターフェース提供を担当します。以下のサービスを提供します：

#### システムサービス
- ***デバイス管理***：接続されたデバイス、ストレージデバイスなどの識別と設定。
- ***ユーザー管理***：ユーザーアカウント、認証情報、SSHキーの管理。
- ***ネットワーク設定***：有線および無線ネットワーク接続の設定。
- ***ファイルシステム操作***：デバイスファイルの管理。
- ***デバイス検出***：
    - mDNSを使用してデバイス情報をブロードキャストします。デバイスのホスト名は`recamera.local`です。
    - Webインターフェースがリクエストを送信すると、reCameraデバイスはmDNSを介してローカルネットワーク内の他のreCameraデバイスをスキャンし、検出されたデバイスのリストを生成してデータをフォーマットし、Webインターフェースに返します。（注：現在は1台のデバイス情報のみが返されます。）

#### アップデートサービス
- パッケージ/ファームウェアのダウンロード管理
- セキュリティ検証
- インストールの自動化

#### デーモンサービス
- システムのヘルスモニタリング
- アプリケーションの自動復旧

#### ロギングサービス
- 実行時の状態追跡
- エラーダイアグノスティクス

#### アプリケーションサービス
- アプリケーションのデプロイ
- アプリケーションのパッケージ化

### 🧩 基本Webインターフェース
基本Webインターフェースは、ユーザーがデバイスを管理するための使いやすいインターフェースを提供します。電源を入れると、Supervisorからデータを取得し、reCameraの基本Webインターフェースを形成します。インターフェースは以下の通りです：

- 起動ページ：`ip_address/#/init`
- ワークスペース：`ip_address/#/workspace`（OSバージョン0.1.4以降）
- ネットワーク設定：`ip_address/#/network`
- セキュリティ：`ip_address/#/security`
- ターミナル：`ip_address/#/terminal`
- システム：`ip_address/#/system`
- 電源：`ip_address/#/power`

これらの基本Webインターフェースにより、電源投入時にデバイスのコア設定機能に安全にアクセスできます。[ソースコード](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/supervisor/www)もGitHubで公開されており、基本Webインターフェースのフロントエンドを変更したい場合に利用できます。

### 🧩 Node-RED モジュール
#### sscma-node:
これはNode-REDのサーバーサイドモジュールで、Node-REDクライアントとsscmaサービス間の通信を可能にします。[ソースコード](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/sscma-node)はGitHubで公開されており、C/C++開発者が拡張開発を行うことができます。以下の機能を提供します：
- 画像処理サービス
- AIモデル管理
- メディアストリーミングサービス
- データストレージサービス

#### node-red-sscma:
`node-red-contrib-sscma`は、フローベースのプログラミングを通じてAIモデルを迅速にデプロイするために設計されたNode-REDノードコンポーネントです。[ソースコード](https://github.com/Seeed-Studio/node-red-contrib-sscma)もGitHubで公開されており、[プロトコル](https://wiki.seeedstudio.com/ja/node_red_protocol)に従って開発者が拡張開発を行うことができます。これにより、AIモデルの出力を他のデバイスとシームレスに統合し、スマートオートメーションやインテリジェントなワークフローを実現できます。

以下に`camera node`と`model node`がどのように通信するかの例を示します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/vision_inference.png" /></div>

### 🧩 SenseCraft 統合
SenseCraftプラットフォームには、モデルやアプリケーションフローのインターフェースも用意されています。Node-REDフローはSenseCraftクラウドサービスに保存できます。また、自分自身でモデルをトレーニングし、デバイス上で異なるアプリケーションをワンクリックでデプロイすることが可能です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/sensecraft_applications.png" /></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>