---
description: デスクトップアプリケーションのダッシュボード、クイックアクションデモ、アプリのインストール、および Python SDK クイックスタートを網羅した Reachy Mini Lite の使用ガイド。
title: Reachy Mini Lite を使う
slug: /ja/reachymini_platforms_reachy_mini_lite_usage
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
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini Lite を使う

Lite バージョンは、インテリジェンスを実行するためにお使いのコンピュータに依存します。その中核となるハブが **Reachy Mini Control** アプリケーションです。

:::info
まだインストールしていない場合は、[このガイド](/ja/reachymini_platforms_reachy_mini_lite_get_started)を確認してください。
:::

## 1. Reachy Mini Control（ダッシュボード）🖥️

アプリケーションを開くと、ロボット用の完全なコントロールパネルにアクセスできます。

:::info ステータス & ビジュアライザ（左ペイン）
* **3D View:** ロボットのリアルタイムな位置を表示します。
* **Ready/Not Ready:** ロボットが USB で正しく接続されているかどうかを示します。
* **Sensors:** マイク入力とスピーカー音量を監視します。
* **Logs:** 下部に技術的な詳細と接続イベントを表示します。
:::

## 2. アプリケーション & デモ 📱

:::tip
楽しみ始めるのにコードを書く必要はありません。アプリには統合されたエコシステムが付属しています。
:::

### クイックアクション

右下にあるこれらは、すぐに起動できる組み込みデモです：
* **Expressions:** Reachy に感情（Happy、Sad、Angry など）を表現させます。
* **Controller:** ゲームコントローラまたはスライダーを使ってロボットを遠隔操作します。

### 新しいアプリのインストール

コミュニティが作成した振る舞いで Reachy の機能を拡張するには：

**Step 1:** **"Discover apps"** ボタンをクリックします。Hugging Face Spaces ストアが開きます。

**Step 2:** アプリ（Game や Conversation デモなど）を選択し、"Install" をクリックします。

**Step 3:** インストールが完了すると、アプリは "Applications" リストに表示されます。**"Play"** をクリックするだけで起動できます。

:::warning
アプリが実行中のときは、そのアプリがロボットを制御します。自分の Python スクリプトを実行する前に、アプリを停止してください。
:::

## 3. Python でコーディングする 🐍

:::info
独自のロジックを書いてみませんか？Reachy Mini はシンプルな Python SDK を通じて制御できます。
:::

👉 **[SDK ドキュメントに移動](/ja/reachymini_sdk_readme)** して、全体像を確認してください。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**
