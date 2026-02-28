---
description: MuJoCo を使用した Reachy Mini シミュレーションのセットアップガイドです。物理ハードウェアなしで、アプリケーションのプロトタイピングとテストができるリアルな物理環境を提供します。
title: Reachy Mini シミュレーションセットアップ
slug: /ja/reachymini_platforms_simulation_get_started
keywords:
- simulation
- mujoco
- physics
- prototype
- test
- debug
- virtual robot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini シミュレーション - セットアップガイド

物理ロボットがなくても開発を始められます！Reachy Mini シミュレーションは [MuJoCo](https://mujoco.org) 上で動作し、アプリケーションのプロトタイピング、テスト、デバッグのためのリアルな物理環境を提供します。

![Simulation](https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f7777772e706f6c6c656e2d726f626f746963732e636f6d2f77702d636f6e74656e742f75706c6f6164646c6f6164732f323032352f30362f5265616368795f6d696e695f73696d756c6174696f6e2e676966)

## 1. インストール

:::danger 前提条件
シミュレーションをセットアップする前に、まず **[Installation Guide](../../SDK/installation.md)** に従って基本的なインストールと仮想環境のセットアップを完了しておく必要があります。このガイドでは、すでに Reachy Mini SDK がインストールされ、仮想環境が有効化されていることを前提としています。
:::

シミュレーションには `mujoco` の Python バインディングが必要です。Reachy Mini ソフトウェアと一緒に、追加タグ `[mujoco]` を付けてインストールできます。

:::tip pip を使う場合
```bash
pip install "reachy-mini[mujoco]"
```
:::

:::tip uv を使う場合
```bash
uv pip install "reachy-mini[mujoco]"
```
:::

## 2. シミュレーションの起動

シミュレートされたロボットを起動するには、`--sim` フラグを付けて daemon コマンドを実行するだけです：

:::tip シミュレーションを開始
```bash
reachy-mini-daemon --sim
```
:::

ロボットの 3D ビューを表示するウィンドウが開きます。マウスを使ってビューを操作できます（ドラッグで回転、右クリックでパン、スクロールでズーム）。

### 🍎 Mac ユーザー（Apple Silicon / Intel）

:::tip macOS 固有
macOS では、MuJoCo を GUI と正しく連携させるために特定のランチャーが必要です。上記のコマンドの代わりに `mjpython` を使用してください：
:::

```bash
mjpython -m reachy_mini.daemon.app.main --sim
```

:::warning macOS ユーザー
`uv` は macOS 上の MuJoCo と互換性の問題を抱えている可能性があります。インストールや実行時に問題が発生した場合は、MuJoCo 関連のパッケージについては `uv` ではなく `pip` を直接使用することを推奨します。
:::

## 3. ダッシュボードと Apps

:::info
ダッシュボードには **[http://localhost:8000](http://localhost:8000)** からアクセスできます。
:::

* **Apps:** Apps をインストールして実行できます。Apps はシミュレーション内で実行されます（例：ロボットが 3D ビューア内で動きます）。

## 4. シーンとオプション

:::info カスタマイズ
`--scene` 引数を使用して、シミュレーション環境をカスタマイズできます。
:::

* **`empty`**（デフォルト）：何もない空間にロボットだけが存在します。
* **`minimal`**：テーブルと、遊ぶためのいくつかのオブジェクト（リンゴ、クロワッサン、アヒル）を追加します。

:::tip 例
```bash
reachy-mini-daemon --sim --scene minimal
```
:::

## 5. 自分のコードを接続する

シミュレーションが動作しているとき、その挙動は USB 接続された実機の **Reachy Mini Lite** とまったく同じです。daemon は `localhost` で待ち受けており、Python SDK のスクリプトは一切変更せずに実行できます：

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

# Connects to the simulation running on localhost
with ReachyMini() as mini:
    print("Connected to simulation!")

    # Look up and tilt head
    print("Moving head...")
    mini.goto_target(
        head=create_head_pose(z=20, roll=10, mm=True, degrees=True),
        duration=1.0
    )

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.6, -0.6], duration=0.3)
    mini.goto_target(antennas=[-0.6, 0.6], duration=0.3)

    # Reset to rest position
    mini.goto_target(
        head=create_head_pose(),
        antennas=[0, 0],
        duration=1.0
    )
```

## 次のステップ

:::info 学習を続ける
* **[Python SDK](../../SDK/python-sdk.md)**: 動かす・見る・話す・聞くことを学びます。
* **[AI Integrations](../../SDK/integration.md)**: LLM を接続し、Apps を構築し、Hugging Face に公開します。
* **[Core Concepts](../../SDK/core-concept.md)**: アーキテクチャ、座標系、安全制限について説明します。
:::

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[Troubleshooting & FAQ Guide を確認してください](../../troubleshooting.md)**
