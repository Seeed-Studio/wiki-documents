---
description: Reachy Mini SDK の概要、クイックスタートガイド、コード例、インストール、Python SDK ドキュメント、コミュニティリソースへのリンクをまとめています。
title: Reachy Mini SDK
slug: /ja/reachymini_sdk_readme
keywords:
- sdk
- quick start
- python
- code examples
- tutorials
- getting started
- robot control
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini でつくる・遊ぶ・革新する 🤖

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/h2lyqR2eMyM"
  frameborder="0"
  allowfullscreen
/>

## ⚡️ クイックルック
ロボットを操作するのに必要なのは、**ほんの数行のコード**だけです：

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

:::tip Reachy Mini を初めて使う方へ
次のガイドをこの順番で進めてください：
:::

* **[Installation](https://wiki.seeedstudio.com/ja/reachymini_sdk_installation)**: 5 分でコンピュータのセットアップを行います
* **[Quickstart Guide](https://wiki.seeedstudio.com/ja/reachymini_sdk_quickstart)**: Reachy Mini で最初の動作を実行します
* **[Python SDK](https://wiki.seeedstudio.com/ja/reachymini_sdk_python-sdk)**: 動く・見る・話す・聞くを学びます。
* **[AI Integrations](https://wiki.seeedstudio.com/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開します。
* **[Core Concepts](https://wiki.seeedstudio.com/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について説明します。

## 📂 コード例

:::info すぐに実行可能
ロボットの特定の機能の使い方を理解できるよう、すぐに実行できるスクリプト集を用意しています。
:::

[**👉 サンプルフォルダを閲覧する**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 AI 支援開発

:::tip AI コーディングエージェントを使う方へ
AI コーディングエージェント（Claude Code、Codex、Copilot など）を使っていますか？すぐにアプリ開発を始められます。次のプロンプトをエージェントに貼り付けてください：
:::

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md*

この [**AGENTS.md**](/ja/reachymini_agents) ガイドには、AI エージェントに必要な情報がすべて含まれています：SDK パターン、ベストプラクティス、サンプルアプリ、ステップバイステップのスキル解説などです。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認してください](https://wiki.seeedstudio.com/ja/reachymini_troubleshooting)**

## 💬 コミュニティ

* [Discord](https://discord.gg/Y7FgMqHsub) - サポートを受けたり、プロジェクトを共有したりできます。
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - コミュニティのアプリを見つけましょう。
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - 機能要望やバグ報告はこちら。
