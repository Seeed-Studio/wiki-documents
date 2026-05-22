---
description: デスクトップアプリケーションのダッシュボード、クイックアクションのデモ、アプリのインストール、および Python SDK クイックスタートを網羅した Reachy Mini Lite の使用ガイドです。
title: Reachy Mini Lite の使い方
slug: /reachymini_platforms_reachy_mini_lite_usage
keywords:
  - usage
  - dashboard
  - desktop app
  - applications
  - demos
  - python
  - sdk
  - control
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_platforms_reachy_mini_lite_usage/
---

# Reachy Mini Lite の使い方

ロボットの接続が完了したら、次はロボットとのやり取り方法です。**Reachy Mini Control** を使って視覚的に操作することも、**Python** を使ってプログラムから制御することもできます。

まだアプリをインストールしていない場合は、[このガイド](/ja/reachymini_platforms_reachy_mini_lite_get_started)を確認してください。

## 1. Reachy Mini Control 🖥️

**Reachy Mini Control** はロボット用のデスクトップアプリです。ロボットのステータス確認、システムの更新、アプリケーションの管理ができます。

**Reachy Mini Control** を開き、USB でロボットを接続します。接続されると、ロボットに関するリアルタイム情報が表示されます。

* **ステータス & ビジュアライザ（左ペイン）：**
    * **3D View:** ロボットの現在の姿勢をリアルタイムで表示します。
    * **Ready/Not Ready:** ロボットが USB で正しく接続されているかどうかを示します。
    * **Sensors:** マイク入力とスピーカー音量を監視します。
    * **Logs:** 画面下部に技術的な詳細や接続イベントを表示します。

### 機能

* *Controller* タブを使って **Head** と **Antennas** を操作します。

![Controller Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-controller.png)

* **Expressions** で遊ぶ：内蔵された表情を使って、ロボットをうれしい、悲しい、怒っている、などさまざまな表情にできます。

![Expressions Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-expressions.png)

## 2. アプリケーション 📱

Reachy Mini は「Apps」を実行できます。これはロボット用にパッケージ化された自律動作（会話デモ、ゲーム、ダンスなど）です。

### Apps の使い方
1.  **Browse:** Reachy Mini Control の *Applications* タブに移動し、"Discover Apps" をクリックします。これにより Hugging Face Spaces エコシステムが開き、ロボットで利用可能なアプリを見つけることができます。
2.  **Install:** アプリの "Install" ボタンをクリックして、ロボットに追加します。
3.  **Launch:** インストール済みアプリの "Start ▶️" ボタンをクリックします。ロボットはすぐにその動作を開始します。
4.  **Stop:** "Stop" ⏹️ ボタンをクリックしてアプリケーションを停止します。

> **Note:** App が実行中の間は、その App がロボットの制御を占有します。App がアクティブな間は Python スクリプトを実行できません。

## 3. コーディング・クイックスタート 🐍

自分でロジックを書いてみたいですか？Reachy Mini はシンプルな Python SDK を通して制御できます。

👉 **[SDK ドキュメントはこちら](/ja/reachymini_sdk_readme)** で、全体像を確認してください。

## ❓ トラブルシューティング

問題が発生しましたか？👉 **[トラブルシューティング & FAQ ガイドを確認してください](/ja/reachymini_troubleshooting)**