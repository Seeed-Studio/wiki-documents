---
description: Reachy Mini SDK の概要、クイックスタートガイド、コード例、インストール、Python SDK ドキュメント、コミュニティリソースへのリンクをまとめています。
title: Reachy Mini SDK
slug: /reachymini_sdk_readme
keywords:
  - sdk
  - クイックスタート
  - python
  - コード例
  - チュートリアル
  - はじめに
  - ロボット制御
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_readme/
---

# Reachy Mini で作って、遊んで、革新しよう 🤖


<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: '1px solid #ddd', borderRadius: '8px'}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

## ⚡️ クイックルック
ロボットを制御するのに必要なのは、**ほんの数行のコード**だけです：

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # Look up and tilt head
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## 🚀 はじめに
* **[Installation](/ja/reachymini_sdk_installation)**: PC のセットアップに 5 分
* **[Quickstart Guide](/ja/reachymini_sdk_quickstart)**: Reachy Mini で最初の挙動を実行
* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞くを学ぶ
* **[AI Integrations](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開
* **[Building & Publishing Apps](/ja/reachymini_sdk_apps)**: Reachy Mini アプリの作成、テスト、公開、デバッグ
* **[Core Concepts](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限

## 📂 コード例

ロボットの特定の機能の使い方を理解できるよう、すぐに実行できるスクリプト集を用意しています。

[**👉 サンプルフォルダを閲覧**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 AI 支援開発

AI コーディングエージェント（Claude Code、Codex、Copilot など）を使っていますか？ すぐにアプリ開発を始められます。次のプロンプトをエージェントに貼り付けてください：

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

この [**AGENTS.md**](/ja/reachymini_agents) ガイドには、AI エージェントに必要な情報がすべて含まれています：SDK パターン、ベストプラクティス、サンプルアプリ、ステップバイステップのスキル解説。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**

## 💬 コミュニティ
* [Discord](https://discord.gg/Y7FgMqHsub) - サポートを受けたり、プロジェクトを共有したりできます。
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - コミュニティ製アプリを見つけましょう。
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - 機能要望やバグ報告に。