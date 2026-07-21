---
description: Reachy Mini の前提条件、デーモン設定、最初のロボットスクリプトをカバーするクイックスタートガイドです。
title: クイックスタートガイド
slug: /reachymini_sdk_quickstart
keywords:
  - クイックスタート
  - 最初のスクリプト
  - デーモン
  - セットアップ
  - hello world
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_quickstart/
---

# クイックスタートガイド

このガイドに従って、Reachy Mini を実機またはシミュレーション上で動作させましょう。

## 1. 前提条件

[installation guide](/ja/reachymini_sdk_installation) に従って、Reachy Mini をコンピュータにインストールしていることを確認してください。

:::tip
Python の仮想環境を作成して有効化していることを確認してください。**新しいターミナルを開くたびに必ず有効化することを忘れないでください！**
:::

<details>
<summary><strong>🔧 Wireless Reachy Mini 上で直接 SDK を実行する（オプション）</strong></summary>

SDK をコンピュータ上でリモート実行する代わりに、Wireless Reachy Mini 上で直接実行したい場合は、SSH で接続できます。

### ステップ 1: SSH 接続

ターミナルを開いて次を実行します：

```bash
ssh pollen@reachy-mini
```

プロンプトが表示されたら、次の **デフォルト認証情報** を使用します：
- ユーザー名: `pollen`
- パスワード: `root`

### ステップ 2: Python 仮想環境を有効化する

接続後、仮想環境を有効化します：

```bash
source /venvs/apps_venv/bin/activate
```

### ステップ 3: ローカルでスクリプトを実行する

Reachy Mini 本体上でスクリプトを実行する場合は、標準の `ReachyMini()` コンストラクタを使用します。自動モードでは、明示的に上書きしない限り、接続は localhost のまま維持されます：

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

:::tip
ローカル実行の利点
レイテンシが低く、ネットワークに依存せず、すべてのロボットリソースへ直接アクセスできます。
:::
:::warning
欠点
CPU パワーが低く、GUI が利用できません。
:::

</details>

## 2. ロボットサーバー（デーモン）が動作していることを確認する

**デーモン** は、モーターやセンサーとの低レベル通信を処理するバックグラウンドサービスです。コードを動作させるには、これが起動している必要があります。

* **Reachy Mini（Wireless）上**: ロボットの電源が入っているとき、デーモンは動作しています。コンピュータと Reachy Mini が同じネットワーク上にあることを確認してください。
* **Reachy Mini Lite（USB）上** - 次の 2 つの方法があります：
  - [desktop application](/ja/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control) を起動する
  - ターミナルを開いて次を実行する：
    ```bash
    reachy-mini-daemon
    ```
* **シミュレーション用（ロボット不要）** - 次の 2 つの方法があります：
  - [desktop application](/ja/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control) を起動する
  - ターミナルを開いて次を実行する：
    - **Linux & Windows:**
      ```bash
      reachy-mini-daemon --sim
      ```
    - **macOS:**
      ```bash
      mjpython -m reachy_mini.daemon.app.main --sim
      ```
      > **⚠️ macOS ユーザーへ:** `uv` は macOS 上の MuJoCo と互換性の問題を起こす可能性があります。インストールや実行時に問題が発生した場合は、MuJoCo 関連パッケージについては `uv` ではなく `pip` を直接使用することを推奨します。
      >
      > `libgstpython` によるセグメンテーションフォルトが発生した場合は、[simulation troubleshooting](/ja/reachymini_platforms_simulation_get_started#-トラブルシューティング) セクションを参照してください。

:::success
ブラウザで [http://localhost:8000/docs](http://localhost:8000/docs) を開いてください。Reachy SDK API ドキュメントが表示されれば準備完了です！
:::

## 3. 最初のスクリプト

:::warning
デーモンを実行しているターミナルは開いたままにしておいてください！ロボットを動作させるには、デーモンが動き続けている必要があります。
:::

### Python スクリプトを作成する

**ステップ 1:** 新しいターミナルウィンドウを開きます

**ステップ 2:** `hello.py` という新しいファイルを作成し、次のコードをコピー＆ペーストします：

:::tip
コンストラクタは Lite と Wireless を自動検出し、localhost とネットワークを自動的に切り替えます。`ReachyMini(connection_mode="network")` のように、上級者向けのケースでのみ明示的に上書きしてください。
:::

```python
from reachy_mini import ReachyMini

# Connect to the running daemon
with ReachyMini() as mini:
    print("Connected to Reachy Mini! ")

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.5, -0.5], duration=0.5)
    mini.goto_target(antennas=[-0.5, 0.5], duration=0.5)
    mini.goto_target(antennas=[0, 0], duration=0.5)

    print("Done!")
```

**ステップ 3:** ファイルを保存し、スクリプトを実行します：

新しいターミナルで次を実行します：

```bash
python hello.py
```

🎉 すべてがうまくいけば、ロボットのアンテナがピクピク動くはずです！

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認してください](/ja/reachymini_troubleshooting)**


## AI コーディングエージェントを使用していますか？

**Claude Code**、**Codex**、**Copilot** のような AI エージェントを使用している場合は、すぐにアプリの構築を始められます。次のプロンプトを貼り付けてください：

> *Reachy Mini アプリを作成したいです。まず https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md を読んでください*

このガイドには、SDK、ベストプラクティス、利用可能なツールについて、AI エージェントが知る必要のあるすべてが記載されています。

## 次のステップ
* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞くことを学びましょう。
* **[Browse the Examples Folder](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[AI Integrations](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して、Hugging Face に公開します。
* **[Core Concepts](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について説明します。