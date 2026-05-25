---
description: Reachy Mini のダッシュボード Web インターフェース、アプリ管理、および Python SDK クイックスタートを網羅した使用ガイド。
title: Reachy Mini の使用方法
slug: /reachymini_platforms_reachy_mini_usage
keywords:
  - usage
  - dashboard
  - apps
  - python
  - sdk
  - control
  - management
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_platforms_reachy_mini_usage/
---

# Reachy Mini の使用方法

ロボットの接続が完了したら、次はロボットとのやり取り方法です。**Reachy Mini Control** を使って視覚的に操作することも、**Python** を使ってプログラムから制御することもできます。

## 1. Reachy Mini Control 🕹️

**Reachy Mini Control** はロボット用のデスクトップアプリです。ロボットのステータス確認、システムの更新、アプリケーションの管理ができます。

**ダウンロード：** [公式サイト](https://hf.co/reachy-mini/#/download) から **Reachy Mini Control** の最新バージョンを入手してください。

**Reachy Mini Control** を開き、ロボットに接続します。接続が完了すると、ロボットに関するリアルタイム情報が表示されます。

![Reachy Mini Control](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-dashboard.png)

### 機能

* *Controller* タブを使って **Head** と **Antennas** を制御します。

![Controller Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-controller.png)

* **Expressions** で遊ぶ：組み込みの表情を使って、ロボットを楽しい、悲しい、怒っている、などさまざまな表情にできます。

![Expressions Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-expressions.png)

* *⚙️* タブでは、次のことができます：
    * **System Updates:** ロボットを常に最新の状態に保ちます。
    * **Network:** Wi-Fi 接続を設定します。

## 2. アプリケーション 📱

Reachy Mini は「Apps」を実行できます。これはロボット用にパッケージ化された自律動作（会話デモ、ゲーム、ダンスなど）です。

### Apps の使い方
1.  **閲覧：** Reachy Mini Control の *Applications* タブに移動し、"Discover Apps" をクリックします。これにより Hugging Face Spaces エコシステムが開き、ロボットで利用可能なアプリを見つけることができます。
2.  **インストール：** アプリの "Install" ボタンをクリックして、ロボットに追加します。
3.  **起動：** インストール済みアプリの "Start ▶️" ボタンをクリックします。ロボットはすぐにその動作を開始します。
4.  **停止：** アプリケーションを停止するには "Stop" ⏹️ ボタンをクリックします。

> **注意：** App が実行中の間は、その App がロボットを制御します。App がアクティブな状態では Python スクリプトを実行できません。

## 3. コーディング・クイックスタート 🐍

独自のロジックを書いてみませんか？Reachy Mini はシンプルな Python SDK を通じて制御できます。

👉 **[SDK ドキュメントに移動](/ja/reachymini_sdk_readme)** して、全体像を確認してください。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**