---
title: SenseCraft Robotics ソフトウェア概要
description: SenseCraft Robotics、対応アーム構成、ソフトウェアのインストールとアカウント設定、プロジェクトワークフロー、設定、クレジットと課金について説明します。
keywords:
  - SenseCraft Robotics
  - ロボティクス
  - ロボットアーム
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sensecraft-robotics-official-website-en.webp
slug: /sensecraft_robotics
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

## 1. ソフトウェア概要

SenseCraft™ Robotics は、実環境でのロボットアームタスク向けのトレーニングおよびランタイムプラットフォームです。デバイス接続、キャリブレーション、データ収集、モデル学習、検証までをカバーする一体型ワークフローを提供し、教育・研究・ロボティクス応用のユーザーが、デモンストレーションデータから実際の物理動作へと素早く移行できるよう支援します。

![SenseCraft Robotics official website](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sensecraft-robotics-official-website-en.webp)

### 1.1 ソフトウェアの全体像

メインプラットフォームのワークフローは次のとおりです。

1. **デバイスセットアップ**：ロボットアームモデルを選択し、Leader アーム、Follower アーム、およびカメラをバインドしてから、キャリブレーションと遠隔操作の検証を完了します。
2. **データ収集**：タスクのデモンストレーション中に Leader アームで Follower アームを操作し、複数のデータセグメントを記録します。
3. **アクションライブラリ**：個別に実行可能なアクションセグメントを記録・管理し、再生します。
4. **データセット管理**：動画をプレビューし、データセットの修復、マージ、アップロードを行います。
5. **トレーニング**：データセットを選択し、クラウドまたはローカルでトレーニングを実行します。
6. **実行**：学習済みモデルを選択し、ローカルまたはクラウドで推論を行い、ロボットアームが自律的にタスクを実行できるようにします。

### 1.2 主な機能

- **ガイド付きワークフロー**：デバイスセットアップ、データ収集、トレーニング、ランタイム検証をステップバイステップで完了できます。
- **クラウドトレーニング**：主要なトレーニングタスクをクラウドに送信し、ローカルの計算要件を軽減します。
- **プロジェクト管理**：プロジェクト、データセット、モデルを一元管理し、再利用と継続的な反復を可能にします。

公式エントランス： [SenseCraft Robotics](https://sensecraft.seeed.cc/en?utm_source=sensecraft_wiki&utm_medium=socil)

### 1.3 ユースケース

- **教育・トレーニング / STEM 教育機関**：AI ロボティクスの講座、プロジェクト型学習、学生プロジェクトのデモンストレーションを実施します。
- **大学 / 研究機関 / 研究室**：エンボディドインテリジェンス、模倣学習、ロボットデータ収集、モデル検証をサポートします。
- **イノベーションセンター / デモ・ソリューションチーム**：一般向け教育、顧客体験、シナリオベースのソリューション設計のために、実演可能な AI ロボティクスアプリケーションのプロトタイプを構築します。

<span id="supported-devices"></span>

## 2. 対応デバイス

### 2.1 対応ロボットアーム

![Three robotic arm selection recommendations](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/device-model-selection.webp)

目的に応じてデバイスを選択してください。入門学習や基礎開発にはエントリーモデルを選択し、より高い性能や二次開発機能が必要な場合は上位モデルを選択します。位置決め精度や動作安定性が重要な場合は、高精度アプリケーションモデルを選択します。

| モデル | デバイス構成（Leader + Follower） | 購入リンク | 専用ガイド |
|---|---|---|---|
| 01 | SO-ARM101 + SO-ARM101 | [Buy now](https://www.seeedstudio.com/SO-101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html?utm_source=sensecraft_wiki&utm_medium=socil) | [SO-ARM101 ガイド](/ja/sensecraft_robotics_so_arm101/) |
| 02 | reBot Arm 102 + B601 DM | [Buy now](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html?utm_source=sensecraft_wiki&utm_medium=socil) | [DM ガイド](/ja/sensecraft_robotics_rebot_arm_102_b601_dm/) |
| 03 | reBot Arm 102 + B601 RS | [Buy now](https://www.seeedstudio.com/reBot-Arm-B601-RS-Assembled-Kit-with-Gripper-p-6865.html?utm_source=sensecraft_wiki&utm_medium=socil) | [RS ガイド](/ja/sensecraft_robotics_rebot_arm_102_b601_rs/) |

> 本記事では、上記 3 種類のデバイス構成に共通するソフトウェアワークフローについて説明します。ロボットアームの設置、配線、電源要件については、該当するデバイス構成の専用ガイドを参照してください。

### 2.2 コンピュータおよびソフトウェア要件

- Windows または macOS コンピュータ。
- ログイン、プロジェクト管理、クラウドトレーニング、推論検証のための安定したネットワーク接続。
- 最新バージョンの SenseCraft Robotics クライアント。
- 登録済みの SenseCraft アカウント。具体的な OS およびハードウェア要件については、公式ソフトウェアダウンロードページを参照してください。

<span id="download-and-account"></span>

## 3. ソフトウェアのダウンロードとインストール

![Software download](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/software-overview-en.webp)

### 3.1 ソフトウェアをダウンロードする

[SenseCraft Robotics 公式ページ](https://sensecraft.seeed.cc/en?utm_source=sensecraft_wiki&utm_medium=socil)を開き、ソフトウェアダウンロードセクションに移動して、使用しているオペレーティングシステム用のインストーラーを選択します。

### 3.2 ソフトウェアをインストールする

インストーラーを実行し、インストールウィザードに従います。インストール後、SenseCraft Robotics クライアントを起動します。動画、データセット、モデルファイル用に十分なディスク容量を確保することを推奨します。

### 3.3 アカウントを作成する

ユーザーセンターで **Sign up** または **Create account** を選択し、画面の指示に従ってメールアドレスを確認し、パスワードを設定します。登録後、SenseCraft Robotics クライアントに戻ります。

![Account registration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sign-up-en.webp)

### 3.4 ソフトウェアにログインする

SenseCraft Robotics クライアントは、システムブラウザで SenseCraft ユーザーセンターを開き、サインインを完了します。クライアント自体がパスワードを直接収集することはありません。

1. SenseCraft Robotics クライアントを起動し、ログインウィンドウで **Log in** をクリックします。
2. システムブラウザが SenseCraft ユーザーセンターを開きます。登録済みのメールアドレスとパスワードでサインインし、表示されるアカウント確認や認可の手順を完了します。
3. サインイン後、**Projects** ページに移動し、新しいプロジェクトを作成するか、既存のプロジェクトを開くことができます。



## 4. ソフトウェアの概要

<span id="home"></span>

### 4.1 ホーム

ホームページでは、プラットフォーム、プロジェクトの状態、よく使う機能にアクセスできます。初めてプラットフォームを使用する場合は、ホームページからプロジェクトに入るか、ヘルプ情報を表示できます。

![Home page overview](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/overview-en.webp)

<span id="projects"></span>

### 4.2 プロジェクト

プロジェクトは、デバイス、タスク、データセット、モデルを管理するための統合ワークスペースです。サインイン後、初回利用時は次の手順に従います。

1. プロジェクトを作成し、ロボットアームの構成を選択します。
2. Leader アーム、Follower アーム、およびカメラを接続します。
3. デバイスのキャリブレーションと遠隔操作の検証を完了します。
4. デモンストレーション用のデータセグメントを 1 つ記録します。
5. データセットを確認し、アップロードするかトレーニングに使用します。
6. ランタイム検証用のモデルを選択します。

![Project settings](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/project-settings-en.webp)

<span id="settings"></span>

### 4.3 設定

上部ナビゲーションバーの **Settings** をクリックして、設定ページを開きます。主に次の 3 つのモジュールで構成されています。

- **個人情報**：アバター、ユーザー名、紐付けられたメールアドレス、職業など、アカウントの基本情報を表示および**編集**します。
- **パスワード設定**：アカウントのパスワードを変更します。本人確認のために**現在のパスワード**を入力し、その後**新しいパスワード**を設定して確認します。
- **ソフトウェアとサービス**：
  - **サービス接続**：Hugging Face などのサードパーティ AI プラットフォームへの認可済み接続を管理します。
  - **バージョン管理**：現在のソフトウェアバージョンを表示し、更新を確認します。**Check for updates**、**Download update**、**Restart and update** を実行できます。検証に問題が発生した場合は、表示されるメッセージに従って公式ダウンロードページにアクセスしてください。

![Settings](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/software-settings-en.webp)

<span id="credits"></span>

## 5. クレジットと課金

### 5.1 課金モデル

SenseCraft Robotics はクレジットベースのモデルを採用しており、GPU 使用量に応じて実際の利用分が課金されます。

> クレジットの価格、有効期限、課金タイミング、返金ルール、教育向け特典は、地域、ソフトウェアバージョン、プロモーションによって異なる場合があります。本セクションは機能説明のみを目的としています。最新のルールについては、現在の SenseCraft Robotics の課金ページ、タスク確認ページ、利用規約を参照してください。

- 購入または引き換えたクレジットは、トレーニングおよび推論タスクに使用できます。
- 課金は、選択した GPU モデルと実際の実行時間に基づいて行われます。
- 待ち行列およびリソース準備には通常料金は発生せず、タスクが実際に実行された時点から課金が開始されます。
- 具体的な価格については、現在のプラットフォームページを参照してください。

### 5.2 クレジットの追加

ユーザーは、プラットフォームでのチャージ、引き換えコード、教育コースコードを通じてクレジットを取得できます。

- チャージ金額が多いほど、より多くのボーナスクレジットが付与される場合があります。
- 新規ユーザーには、一度限りのクレジットボーナスが付与される場合があります。
- 教育ユーザーは、学校や組織がコースコードを通じて提供する共有クレジットを利用できる場合があります。
- クレジットの種類によって、有効期限や返金ルールが異なる場合があります。

### 5.3 トレーニングおよび推論の課金

タスク作成時に、プラットフォームはタスクタイプ、GPU モデル、トレーニングステップ数に基づいて想定消費量を見積もります。最終的な料金は、実際の実行時間に応じて精算されます。

- トレーニングタスクでは、トレーニングステップ数に基づいて実行時間を見積もります。
- 推論タスクは、実際の実行時間に応じて課金されます。
- 最終的な料金は、見積もりより少なくなる場合も多くなる場合もあります。
- 残高が不足している場合、タスクは自動的に停止することがあります。アカウントがマイナスのクレジット残高になることはありません。

### 5.4 クレジットの返金と有効期限

- 購入クレジット、ボーナスクレジット、教育クレジットは、プラットフォームのルールに従って管理されます。
- タスクが開始できなかった場合や、プラットフォームまたは GPU に問題が発生した場合、未使用のクレジットは原則として返還されることがあります。
- ユーザーがタスクをキャンセルした場合、すでに実行された部分については実際の使用量に応じて課金されます。
- 使用済みクレジットは、原則として返金不可です。
- 具体的な有効期限および返金ルールについては、現在のプラットフォーム情報を参照してください。
