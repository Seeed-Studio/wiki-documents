---
description: MuJoCo を使用した Reachy Mini シミュレーションのセットアップガイドです。物理ハードウェアなしで、アプリケーションのプロトタイピングとテストができるリアルな物理環境を提供します。
title: Reachy Mini シミュレーション セットアップ
slug: /reachymini_platforms_simulation_get_started
keywords:
  - シミュレーション
  - mujoco
  - 物理演算
  - プロトタイプ
  - テスト
  - デバッグ
  - 仮想ロボット
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_platforms_simulation_get_started/
---

# Reachy Mini シミュレーション - セットアップガイド

物理ロボットがなくても開発を始められます！Reachy Mini シミュレーションは [MuJoCo](https://mujoco.org) 上で動作し、アプリケーションのプロトタイピング、テスト、デバッグのためのリアルな物理環境を提供します。

![Simulation](https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f7777772e706f6c6c656e2d726f626f746963732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032352f30362f5265616368795f6d696e695f73696d756c6174696f6e2e676966)

## 1. インストール

> **📋 前提条件:** シミュレーションをセットアップする前に、まず **[インストールガイド](/ja/reachymini_sdk_installation)** に従って、基本的なインストールと仮想環境のセットアップを完了しておく必要があります。本ガイドでは、すでに Reachy Mini SDK がインストールされ、仮想環境が有効化されていることを前提とします。

シミュレーションには `mujoco` Python バインディングが必要です。Reachy Mini ソフトウェアと一緒に、追加タグ `[mujoco]` を付けてインストールできます。

`pip` を使う場合は、次を実行します：
```bash
pip install "reachy-mini[mujoco]"
```
`uv` を使う場合は、次を実行します：
```bash
uv pip install "reachy-mini[mujoco]"
```

## 2. シミュレーションの起動

シミュレートされたロボットを起動するには、`--sim` フラグ付きでデーモンコマンドを実行するだけです：

```bash
reachy-mini-daemon --sim
```

ロボットの 3D ビューを表示するウィンドウが開きます。マウスを使ってビューを操作できます（ドラッグで回転、右クリックでパン、スクロールでズーム）。

### 🍎 Mac ユーザー（Apple Silicon / Intel）
macOS では、MuJoCo を GUI と正しく動作させるために特定のランチャーが必要です。上記のコマンドの代わりに、`mjpython` を使用してください：

```bash
mjpython -m reachy_mini.daemon.app.main --sim
```

> **⚠️ macOS ユーザー:** `uv` は macOS 上の MuJoCo と互換性の問題を抱えている可能性があります。インストールや実行時に問題が発生した場合は、MuJoCo 関連パッケージについては `uv` ではなく `pip` を直接使用することを推奨します。

## 3. Reachy Mini Control とアプリ

**Reachy Mini Control** を使って、シミュレートされたロボットと対話できます。アプリを開き、ローカルシミュレーションに接続するだけです。

![Control App with local daemon](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-external-daemon.png)

* **アプリ:** アプリをインストールして実行できます！アプリはシミュレーション内で実行されます（例：ロボットが 3D ビューア内で動きます）。

## 4. シーンとオプション

`--scene` 引数を使って、シミュレーション環境をカスタマイズできます。

* **`empty`**（デフォルト）：何もない空間にロボットだけが存在します。
* **`minimal`**：テーブルと、遊ぶためのいくつかのオブジェクト（リンゴ、クロワッサン、アヒル）を追加します。

**例:**
```bash
reachy-mini-daemon --sim --scene minimal
```

## 5. 自分のコードを接続する

シミュレーションが動作してしまえば、USB 接続された実機の **Reachy Mini Lite** とまったく同じように振る舞います。デーモンは `localhost` で待ち受けており、任意の Python SDK スクリプトを変更なしで実行できます：

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
* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞くことを学びます。
* **[AI 連携](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開します。
* **[コアコンセプト](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について説明します。

## ❓ トラブルシューティング

<details>
<summary><strong>macOS で <code>mjpython</code> を使用した際に <code>libgstpython.dylib</code> からセグメンテーションフォルトが発生する</strong></summary>

次のようなエラーが表示される場合があります：

```
ERROR: Caught a segmentation fault while loading plugin file:
.../gstreamer_python/lib/gstreamer-1.0/libgstpython.dylib
```

この GStreamer プラグインのセグフォは既知の問題で、実機ロボットでも発生しますが、その場合は並列プロセス内で起こるため、目に見える問題は発生しません。しかし `mjpython` ではメインプロセスがクラッシュしてしまいます。対処法は、GStreamer がこのプラグインを読み込まないように、プラグインの名前を変更することです：

```bash
# Find the file inside your environment (adjust the path to match yours)
mv $(python -c "import gstreamer_python, pathlib; print(pathlib.Path(gstreamer_python.__file__).parent / 'lib/gstreamer-1.0/libgstpython.dylib')") \
   $(python -c "import gstreamer_python, pathlib; print(pathlib.Path(gstreamer_python.__file__).parent / 'lib/gstreamer-1.0/libgstpython_.dylib')")
```

これは単に GStreamer がプラグインを自動ロードしないようにするだけで、通常のオーディオ／ビデオ機能には影響しません。

</details>

他の問題が発生していますか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**