---
description: reCamera のオペレーティングシステム（OS）構造の詳細な解説
title: reCamera OS 構造
keywords:
  - Edge
  - reCamera
  - opereating system
  - OS
image: https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.webp
slug: /ja/recamera_os_structure
sidebar_position: 2
last_update:
  date: 02/15/2025
  author: Dawn Yao
---

# reCamera ソフトウェア構造

このソフトウェアには、ファームウェア OTA アップデートをサポートする安定した reCamera OS が付属しています。さらに、より簡単なデプロイメント体験のために、Node-RED と Sensecraft AI プラットフォームがデバイスに統合されています。この統合により、初心者の開発者には Node-RED ノードベースのモジュラープログラミング体験を提供します。上級開発者には、詳細な Linux ベースの開発と Python も利用可能で、自由にカスタマイズできます。

JavaScript、C/C++、Python、Linux OS、buildroot に精通した開発者、そしてギーク、学生、初心者の皆様に、さらなる開発とアプリケーションの探求に参加していただくことを心より歓迎いたします。

## reCamera OS

これは Buildroot 上に構築された組み込みオペレーティングシステムで、`supervisor`、`sscma`（Seeed SenseCraft Model Assistant）、および `Node-RED` サービスを統合しています。アーキテクチャ図は以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.png" /></div>

OS の[ソースコード](https://github.com/Seeed-Studio/reCamera-OS)は GitHub で公開されています。私たちのチームは OS をより使いやすく多機能にするために努力しており、各アップデートは[こちら](https://github.com/Seeed-Studio/reCamera-OS/releases)で公開されます。新しいバージョンは Web インターフェースで OTA アップデートするか、[手動でアップデート](https://wiki.seeedstudio.com/ja/recamera_os_version_control)することができます。

### 🧩 Supervisor

Supervisor は他のサービスを監視・管理する軽量なプロセスマネージャーです。サービスの開始と停止、システムイベントの処理、他のサービスや UI へのインターフェース提供を担当します。以下のサービスを提供します：

#### システムサービス

- ***デバイス管理***：接続されたデバイス、ストレージデバイスなどの識別と設定。
- ***ユーザー管理***：ユーザーアカウント、認証情報、SSH キーの管理。
- ***ネットワーク設定***：有線および無線ネットワーク接続の設定。
- ***ファイルシステム操作***：デバイスファイルの管理。
- ***デバイス検出***：
  - mDNS を使用してデバイス情報をブロードキャストします。デバイスのホスト名は recamera.local です。
  - Web インターフェースがリクエストを送信すると、reCamera デバイスは mDNS を介してローカルネットワーク上の他の reCamera デバイスをスキャンし、検出されたデバイスのリストを生成し、データをフォーマットして Web インターフェースに返します。（注：現在は1つのデバイスの情報のみが返されます。）

#### アップデートサービス

- パッケージ/ファームウェアダウンロード管理
- セキュリティ検証
- インストール自動化

#### デーモンサービス

- システムヘルス監視
- アプリケーション自動復旧

#### ログサービス

- ランタイムステータス追跡
- エラー診断

#### アプリケーションサービス

- アプリケーションデプロイメント
- アプリケーションパッケージング

### 🧩 基本 Web インターフェース

基本 Web インターフェースは、ユーザーがデバイスを管理するためのユーザーフレンドリーなインターフェースを提供します。Supervisor からデータを取得し、電源投入時に reCamera の基本 Web インターフェースを形成します。インターフェースは以下の通りです：

- 開始ページ：`ip_address/#/init`
- ワークスペース：`ip_address/#/workspace`（OS バージョン 0.1.4 以上）
- ネットワーク設定：`ip_address/#/network`
- セキュリティ：`ip_address/#/security`
- ターミナル：`ip_address/#/terminal`
- システム：`ip_address/#/system`
- 電源：`ip_address/#/power`

これらの基本 Web インターフェースにより、ユーザーは電源投入時にデバイスのコア設定機能に安全にアクセスできます。基本 Web インターフェースのフロントエンドを変更したい場合は、[ソースコード](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/supervisor/www)も Github で公開されています。

### 🧩 Node-RED モジュール

#### sscma-node

これは Node-RED クライアントと sscma サービス間の通信を可能にする Node-RED のサーバーサイドモジュールです。C/C++ 開発者が拡張開発を行うための[ソースコード](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/sscma-node)は Github で公開されています。以下の機能を提供します：

- 画像処理サービス
- AI モデル管理
- メディアストリーミングサービス
- データストレージサービス

#### node-red-sscma

`node-red-contrib-sscma` は、フローベースプログラミングを通じて AI モデルの迅速なデプロイメントを促進するために設計された Node-RED ノードコンポーネントです。[プロトコル](https://wiki.seeedstudio.com/ja/node_red_protocol)に従って拡張開発を行う開発者向けに、[ソースコード](https://github.com/Seeed-Studio/node-red-contrib-sscma)も Github で公開されています。これにより、AI モデルの出力を他のデバイスとシームレスに統合し、スマート自動化とインテリジェントワークフローを実現できます。

`camera node` と `model node` がどのように通信するかの例を以下に示します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/vision_inference.png" /></div>

### 🧩 SenseCraft 統合

モデルとアプリケーションフローのための SenseCraft プラットフォームへのインターフェースもあります。Node-Red フローは SenseCraft クラウドサービスに保存できます。独自のモデルをトレーニングして公開することもでき、デバイス上で異なるアプリケーションを非常に簡単にワンクリックでデプロイできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/sensecraft_applications.png" /></div>

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
