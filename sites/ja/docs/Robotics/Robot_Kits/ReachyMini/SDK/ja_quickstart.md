---
description: Reachy Mini を実機またはシミュレーション上で動作させるためのクイックスタートガイドです。前提条件、デーモンのセットアップ、最初のスクリプトまでをカバーします。
title: クイックスタートガイド
slug: /ja/reachymini_sdk_quickstart
keywords:
- quickstart
- getting started
- first script
- daemon
- prerequisites
- tutorial
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# クイックスタートガイド

このガイドに従って、Reachy Mini を実機またはシミュレーション上で動作させましょう。

## 1. 前提条件

:::danger 重要
[installation guide](/ja/reachymini_sdk_installation) に従って、Reachy Mini をお使いのコンピュータにインストールしていることを確認してください。
:::

:::tip 仮想環境
Python の仮想環境を作成し、有効化していることを確認してください。**新しいターミナルを開くたびに必ず仮想環境を有効化してください！**
:::

:::info Wireless Reachy Mini 上で直接 SDK を実行する（オプション）

SDK をコンピュータからリモートで実行する代わりに、Wireless Reachy Mini 上で直接実行したい場合は、SSH で接続できます。

**ステップ 1: SSH 接続**

ターミナルを開き、次を実行します：
```bash
ssh pollen@reachy-mini
```

プロンプトが表示されたら、次の**デフォルト認証情報**を使用します：
* Username: `pollen`
* Password: `root`

**ステップ 2: Python 仮想環境を有効化する**

接続後、仮想環境を有効化します：
```bash
source /venvs/apps_venv/bin/activate
```

**ステップ 3: ローカルでスクリプトを実行する**

Reachy Mini 本体上でスクリプトを実行する場合は、標準の `ReachyMini()` コンストラクタを使用します。自動モードでは、明示的に上書きしない限り、接続は localhost のまま維持されます：
```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

**ローカル実行の利点：** レイテンシが低く、ネットワークに依存せず、ロボットのすべてのリソースへ直接アクセスできます。

**欠点：** CPU パワーが低く、GUI が利用できません。
:::

## 2. Robot Server（デーモン）が動作していることを確認する

:::info
**デーモン（Daemon）**は、モーターやセンサーとの低レベル通信を処理するバックグラウンドサービスです。コードを動作させるには、これが起動している必要があります。
:::

* **Reachy Mini（Wireless）の場合：** ロボットの電源が入っているときはデーモンが動作しています。コンピュータと Reachy Mini が同じネットワーク上にあることを確認してください。

:::tip Reachy Mini Lite（USB）
次の 2 つの方法があります：
<!-- * Start the [desktop application](../platforms/reachy_mini_lite/get_started) -->
* ターミナルを開き、次を実行します：
  ```bash
  reachy-mini-daemon
  ```
:::

:::tip シミュレーション（ロボット不要）
次の 2 つの方法があります：
<!-- * Start the [desktop application](../platforms/reachy_mini_lite/get_started) -->
* ターミナルを開き、次を実行します：

**Linux & Windows:**
```bash
reachy-mini-daemon --sim
```

**macOS:**
```bash
mjpython -m reachy_mini.daemon.app.main --sim
```
:::

:::warning macOS ユーザーへ
`uv` は macOS 上の MuJoCo と互換性の問題を抱えている可能性があります。インストールや実行時に問題が発生した場合は、MuJoCo 関連パッケージについては `uv` ではなく `pip` を直接使用することを推奨します。
:::

:::success 検証
ブラウザで [http://localhost:8000](http://localhost:8000) を開きます。Reachy Dashboard が表示されれば準備完了です！
:::

## 3. 最初のスクリプト

:::warning 重要
デーモンを実行しているターミナルは開いたままにしておいてください！ロボットを動作させるには、デーモンが動作し続けている必要があります。
:::

### Python スクリプトを作成する

:::tip ステップ 1
新しいターミナルウィンドウを開きます
:::

:::tip ステップ 2
`hello.py` という新しいファイルを作成し、次のコードをコピー＆ペーストします：
:::

:::info
コンストラクタは Lite と Wireless を自動検出し、localhost とネットワークを自動的に切り替えます。`ReachyMini(connection_mode="network")` のように、上級者向けのケースでのみ上書きしてください。
:::

```python
from reachy_mini import ReachyMini

# Connect to the running daemon
with ReachyMini() as mini:
    print("Connected to Reachy Mini!")

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.5, -0.5], duration=0.5)
    mini.goto_target(antennas=[-0.5, 0.5], duration=0.5)
    mini.goto_target(antennas=[0, 0], duration=0.5)

    print("Done!")
```

:::tip ステップ 3
ファイルを保存し、スクリプトを実行します：
:::

新しいターミナルで次を実行します：
```bash
python hello.py
```

🎉 すべてがうまくいけば、ロボットのアンテナがピクピク動くはずです！

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認してください](/ja/reachymini_troubleshooting)**

## AI コーディングエージェントを使用していますか？

:::info
**Claude Code**、**Codex**、**Copilot** のような AI エージェントを使用している場合は、すぐにアプリの構築を始められます。次のプロンプトを貼り付けてください：
:::

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md*

このガイドには、SDK、ベストプラクティス、利用可能なツールについて、AI エージェントに必要なすべての情報が記載されています。

## 次のステップ

* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞くことを学びましょう。
* **[サンプルフォルダを参照](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[AI 連携](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開します。
* **[コアコンセプト](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について。
