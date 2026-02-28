---
description: Reachy Mini の Dashboard Web インターフェース、アプリ管理、および Python SDK クイックスタートを網羅した使用ガイド。
title: Reachy Mini の使用方法
slug: /ja/reachymini_platforms_reachy_mini_usage
keywords:
- usage
- dashboard
- apps
- python
- sdk
- control
- management
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini の使用方法

ロボットが接続できたら、次はロボットとのやり取り方法です。**Dashboard** を使って視覚的に操作することも、**Python** を使ってプログラムから制御することもできます。

## 1. Dashboard 🕹️

:::info
Dashboard はロボット内部で動作している Web インターフェースです。ロボットの状態確認、システムの更新、アプリケーションの管理が行えます。
:::

**アクセス方法:** ブラウザで [http://reachy-mini.local:8000/](http://reachy-mini.local:8000/) を開きます。

### 機能

* **System Updates:** ロボットを常に最新の状態に保ちます。*Settings* タブに移動し、"Check for updates" をクリックします。
* **Hardware Monitor:** バッテリー残量、モーター温度、ディスク使用量を確認します。
* **Network:** Wi-Fi 接続を設定します。

## 2. アプリケーション 📱

:::tip
Reachy Mini は「Apps」を実行できます。これはロボット向けにパッケージ化された自律動作（会話デモ、ゲーム、ダンスなど）です。
:::

### Apps の使い方

**ステップ 1:** Dashboard 上の *Apps* タブに移動します。

**ステップ 2:** "Store" ボタンをクリックして、[Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) エコシステムを閲覧します。互換性のあるアプリはワンクリックでインストールできます。

**ステップ 3:** インストール済みアプリの "Play" ▶️ ボタンをクリックします。ロボットはすぐにその動作を開始します。

**ステップ 4:** "Stop" ⏹️ ボタンをクリックしてアプリケーションを停止します。

:::warning
App が実行中の間は、その App がロボットを制御します。App がアクティブな状態では Python スクリプトを実行できません。
:::

## 3. コーディング・クイックスタート 🐍

:::info
独自のロジックを書いてみますか？Reachy Mini はシンプルな Python SDK を通して制御できます。
:::

👉 **[SDK ドキュメントはこちら](/ja/reachymini_sdk_readme)** で、全体像を確認できます。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認してください](/ja/reachymini_troubleshooting)**
