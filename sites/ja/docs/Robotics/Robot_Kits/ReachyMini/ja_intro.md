---
description: Reachy Mini は、ハッカーや AI ビルダーのために作られた、オープンソースで表情豊かなロボットです。アプリストア、Python SDK、複数のプラットフォームオプションを備えています。
title: Reachy Mini
slug: /reachymini_intro
keywords:
- reachy mini
- robotics
- open source
- robot kit
- expressive robot
- python sdk
- ai robot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini 🤖

[![Discord](https://img.shields.io/badge/Discord-Join_the_Community-7289DA?logo=discord&logoColor=white)](https://discord.gg/Y7FgMqHsub)

**Reachy Mini は、ハッカーや AI ビルダーのために作られた、オープンソースで表情豊かなロボットです。**

🛒 [**Reachy Mini を購入**](https://www.hf.co/reachy-mini/)

[![Reachy Mini Hello](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_hello.gif)](https://www.pollen-robotics.com/reachy-mini/)

## ⚡️ 自分だけのロボットを組み立てて始めよう

**プラットフォームを選んで、対応するガイドにアクセスしてください：**

| **🤖 Reachy Mini (Wireless)** | **🔌 Reachy Mini Lite** | **💻 Simulation** |
| :---: | :---: | :---: |
| 完全自律型の体験。<br/>Raspberry Pi 4 + バッテリー + WiFi。 | 開発者向けバージョン。<br/>PC と USB 接続。 | ハードウェア不要。<br/>MuJoCo でプロトタイピング。 |
| 👉 [**Wireless ガイドへ**](/ja/reachymini_platforms_reachy_mini_get_started) | 👉 [**Lite ガイドへ**](/ja/reachymini_platforms_reachy_mini_lite_get_started) | 👉 [**シミュレーションへ**](/ja/reachymini_platforms_simulation_get_started) |

:::tip Pro tip
[uv](https://docs.astral.sh/uv/getting-started/installation/) をインストールすると、アプリのインストールが 10〜100 倍高速になります（自動検出され、`pip` にフォールバックします）。
:::

## 📱 アプリ & エコシステム

Reachy Mini には、Hugging Face Spaces によって提供されるアプリストアが付属しています。これらのアプリは、ロボットのダッシュボードからワンクリックで直接インストールできます。

* **🗣️ [Conversation App](https://huggingface.co/spaces/pollen-robotics/reachy_mini_conversation_app)：** LLM によって動作する Reachy Mini と自然に会話できます。
* **📻 [Radio](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio)：** Reachy Mini と一緒にラジオを聴きましょう。
* **👋 [Hand Tracker](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2)：** ロボットがあなたの手の動きをリアルタイムで追従します。

👉 [**Hugging Face 上のすべてのアプリを閲覧**](https://hf.co/reachy-mini/#/apps)

## 🚀 Reachy Mini SDK を使い始める

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/h2lyqR2eMyM"
  frameborder="0"
  allowfullscreen
/>

### クイックルック
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

### ユーザーガイド
* **[Installation](/ja/reachymini_sdk_installation)**: PC のセットアップに 5 分
* **[Quickstart Guide](/ja/reachymini_sdk_quickstart)**: Reachy Mini で最初の挙動を実行
* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞くことを学びます。
* **[AI Integrations](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開します。
* **[Core Concepts](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について。
* 🤗[**自分のアプリをコミュニティと共有する**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)
* 📂 [**サンプルフォルダを閲覧**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🛠 ハードウェア概要

Reachy Mini ロボットはキットとして販売されており、組み立てには通常 **2〜3 時間**かかります。詳細なステップバイステップガイドは、上記でリンクされているプラットフォーム別フォルダに用意されています。

* **Reachy Mini (Wireless)：** オンボード（RPi 4）で動作し、自律型で IMU を搭載。[仕様を見る](/ja/reachymini_platforms_reachy_mini_hardware)。
* **Reachy Mini Lite：** PC 上で動作し、コンセントから給電。[仕様を見る](/ja/reachymini_platforms_reachy_mini_lite_hardware)。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**

## 🤝 コミュニティ & コントリビュート

* **コミュニティに参加：** [Discord](https://discord.com/2bAhWfXme9) に参加して、Reachy との瞬間を共有し、一緒にアプリを作り、サポートを受けましょう。
* **バグを見つけましたか？** [このリポジトリ](https://github.com/pollen-robotics/reachy_mini/issues)で issue を作成してください。

## ライセンス

このプロジェクトは Apache 2.0 License の下でライセンスされています。詳細は [LICENSE](https://github.com/pollen-robotics/reachy_mini/tree/main/LICENSE) ファイルを参照してください。
ハードウェア設計ファイルは Creative Commons BY-SA-NC の下でライセンスされています。
