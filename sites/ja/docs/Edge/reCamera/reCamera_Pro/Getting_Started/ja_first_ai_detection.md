---
description: reCamera Pro の電源を入れ、Web UI にログインし、ライブプレビューを開始して、最初の AI 検出結果を確認します。開封から動作する AI カメラまで最速で到達するための手順です。
title: 'クイックスタート：最初の AI 検出を確認する'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - quick start
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/
---

# クイックスタート：最初の AI 検出を確認する

このガイドでは、開封したばかりの reCamera Pro から、AI 検出結果付きのライブビデオプレビューが表示される状態まで、約 10 分で進めます：

1. [ハードウェアを接続する](#1-connect-the-hardware)
2. [Web UI にログインする](#2-log-in-to-the-web-ui)
3. [ライブプレビューを開始する](#3-start-the-live-preview)
4. [AI 検出が動作していることを確認する](#4-confirm-ai-detection-is-working)

{/* TODO(verify): add a "detection success" screenshot showing the live preview with a bounding box overlaid on a person, and confirm which model ships preloaded on current firmware and which firmware versions this first-login flow applies to. */}

## 1. ハードウェアを接続する

開始する前に、次のものを用意してください：

- **電源**：DC 電源ケーブル（仕様：**12 V、1 A** 以上。工場出荷時の電源は 12 V、3 A）。
- **データケーブル**：**データ転送**に対応した USB Type-C ケーブル（充電専用ケーブルは不可）。初回はコンピュータと直接接続するために使用します。

接続手順：

1. 12 V DC 電源ケーブルをデバイスの電源インターフェースに接続します。USB Type-C ケーブルの一方を reCamera Pro に、もう一方をコンピュータ（以下の図では Windows ホスト）に接続します。
2. ステータスインジケータを確認します：**緑色 LED が点灯状態**になったら、デバイスの起動が完了しています。

![システムステータスランプとケーブル接続図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

### ステータスインジケータのリファレンス

緑色 LED はシステムステータスを示し、赤色 LED は電源インジケータです。

| 緑色 LED の状態 | 意味 |
| --- | --- |
| ゆっくり点滅（ブリージング） | デバイスが起動中 |
| 点灯 | デバイスは正常に動作中 |
| 消灯 | 異常状態 — コアプロセスが動作していません |
| 100 ms 点滅 | OTA アップデート実行中 |
| 短い点滅 | ファイルシステムが汚損した SD カードを検出しました |

## 2. Web UI にログインする

reCamera Pro には Web UI が内蔵されており、クライアントソフトウェアをインストールする必要はありません。USB ケーブルで接続すると、コンピュータからデフォルトアドレスで直接デバイスにアクセスできます。

:::note
ログインする前に、USB Type-C ケーブルが正しく接続され、緑色 LED が点灯状態であることを確認してください。
:::

1. コンピュータでブラウザを開きます（Chrome または Edge を推奨）。
2. デフォルト IP アドレスにアクセスします：`http://192.168.42.1`。
3. **初回ログイン**：初期パスワードは `recamera` です。新しいパスワードの設定を求められるので入力し、その後、ユーザー名 `admin` と新しいパスワードでログインします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />

4. ログイン後、メインインターフェース（デフォルトでは **Real-time Preview** ページ）が表示されます。

![Web ログインとメインインターフェースの図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip Windows で 192.168.42.1 にアクセスできませんか？
ページが読み込めない場合、Windows の仮想ネットワークアダプタが自動で IP アドレスを取得できていないことがよくあります。アダプタを修正する手順については、[症状別トラブルシューティング](/ja/recamera_pro_faqs/) を参照してください。
:::

:::info ワイヤレス接続に切り替えたい場合
USB 接続が必要なのは初期セットアップ時のみです。代わりにローカルネットワーク経由でデバイスを管理するには、[Wi-Fi 経由でデバイスにアクセスする](/ja/recamera_pro_wifi_access/) を参照してください。
:::

## 3. ライブプレビューを開始する

**Real-time Preview** ページで **Start** をクリックして再生を開始します。ブラウザ上にカメラのライブ映像が表示されるはずです。これを使ってカメラの向きを調整し、レンズを調整し、画質を確認します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

プレビューページでは、写真撮影、手動録画、メインストリームとサブストリームの切り替えにも対応しています。詳細は [プレビュー、キャプチャ、手動録画](/ja/recamera_pro_live_preview/) を参照してください。

## 4. AI 検出が動作していることを確認する

ライブプレビューだけでは、ビデオ経路が動作していることしか確認できません。**AI 検出**経路を確認するには、推論タスクを実行し、その出力を確認します：

1. 左側のナビゲーションバーで **AI Inference** を開きます。
2. **Inference Configuration** で、**Inference Enable** がオンになっていることを確認し、実行するモデル（検出モデルがデバイスにプリロードされています）を選択して、**Save Configuration** をクリックします。
3. **Inference Status** が **Running** となり、リアルタイム FPS が 0 でないことを確認します。
4. **Real-time Inference Monitoring** エリアを確認します：ターゲットが画角内に現れると、`class_name`、`score`、`bbox`、`detection_count` フィールドを含むログとして検出結果がストリーム表示されます。

**確認方法**：カメラの前に立つ（またはスマートフォン／人物の画像をかざす）と、1～2 秒以内に `class_name: person` のようなエントリと、その信頼度を示す `score` が表示され、プレビュー上にバウンディングボックスが描画されるはずです。結果が表示されれば、最初の AI 検出が確認できたことになります。

推論設定の詳細なリファレンス（モデル選択、検出カテゴリ、信頼度／IOU しきい値、推論頻度、モニタリング制御）は、[AI Inference 設定ページ](/ja/recamera_pro_ai_inference/) に記載されています。

{/* TODO(verify): confirm the exact preloaded model name shown in Running Model on current shipping firmware, and capture a screenshot of Real-time Inference Monitoring with a person detection. */}

## 次のステップ

- [最初のタスク：検出して録画する](/ja/recamera_pro_first_recording/) — 検出をイベント録画に変換し、再生して確認します。
- [Wi-Fi 経由でデバイスにアクセスする](/ja/recamera_pro_wifi_access/) — USB ケーブルを外し、ワイヤレスでデバイスを管理します。
- [導入前チェックリスト](/ja/recamera_pro_deploy_checklist/) — フィールドにデバイスを設置する前に確認します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
