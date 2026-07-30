---
description: Reachy Mini 会話アプリを使い、公式ソースコードを一切変更せずに、外部ツール機構を利用して音声コマンドで SO-ARM グリッパーの開閉を制御します。
title: SO-ARM 向け Reachy Mini 音声制御
slug: /reachymini_development_cases_gripper_voice_control
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp
keywords:
  - reachy mini
  - so-arm
  - Huggingface
  - conversation app
sku: 100090917，100025004，114993666,114993667
last_update:
  date: 7/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-29'
updatedAt: '2026-07-29'
url: https://wiki.seeedstudio.com/ja/reachymini_development_cases_gripper_voice_control/
---
# SO-ARM 向け Reachy Mini 音声制御

このケースでは、Reachy Mini 会話アプリを使用して、SO-ARM フォロワーアームのグリッパーを音声コマンドで開閉します。これは、**公式ソースコードを変更することなく**、アプリに組み込まれている外部ツール機構を利用して実現します。

<div align="center">
  <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp"
  />
</div>

## 仕組み

```text
Voice command
  → gripper_control external tool (LLM function calling)
  → subprocess runs the driver script: soarm_gripper.py open|close
  → lerobot SOFollower → /dev/ttyACM1 drives the SO-ARM gripper
```

このフォークで追加されたファイル：


| File                                                 | Purpose                                            |
| ---------------------------------------------------- | -------------------------------------------------- |
| `soarm_gripper.py`                                   | グリッパードライバースクリプト（lerobot ベース）   |
| `external_content/external_tools/gripper_control.py` | LLM に公開される外部ツール                         |
| `.gitignore`                                         | ツールファイルをコミットできるように ignore を解除 |

## 前提条件

1. Reachy Mini が接続されており（`/dev/ttyACM0`）、デーモンが動作していること。
2. SO-ARM フォロワーアームが接続されていること。本ガイドでは `/dev/ttyACM1` として認識されることを前提としています。`ls /dev/ttyACM*` で確認し、異なる場合は `soarm_gripper.py` 内の `PORT` を更新してください。
3. feetech サポート付きの `lerobot` conda 環境が作成されていること：

   ```bash
   conda create -n lerobot python=3.10
   conda activate lerobot
   pip install lerobot[feetech]
   ```
4. 一度 lerobot でアームのキャリブレーションを行っていること（これにより `~/.cache/huggingface/lerobot/calibration/robots/so_follower/` 配下にキャリブレーションファイルが生成されます）。スクリプトでは `ARM_ID = "my_awesome_follower_arm"` を使用しており、これはあなたのキャリブレーションファイル名と一致している必要があります。

## reachy_mini_conversation_app のインストール

> 注意：このアプリをインストールする前に、まず [Reachy Mini SDK](https://github.com/pollen-robotics/reachy_mini/) をインストールしておく必要があります。

フォークリポジトリをクローンします：

```bash
git clone https://github.com/xiehuangbao888/reachy_mini_conversation_app.git
cd reachy_mini_conversation_app
```

**conda を使用する場合**

```bash
conda create -n reachy_mini python=3.12
conda activate reachy_mini
pip install -e .
```

**（または）uv を使用する場合**

```bash
# macOS (Homebrew)
uv venv --python /opt/homebrew/bin/python3.12 .venv

# Linux / Windows (Python on PATH)
uv venv --python python3.12 .venv

source .venv/bin/activate
uv sync
```

:::caution
このアプリをある conda 環境にインストールし、`lerobot` が別の conda 環境に存在する場合（前提条件参照）、`.env` 内の `LEROBOT_PYTHON` を lerobot 環境の python パス（例：`/home/ubuntu/miniconda3/envs/lerobot/bin/python`）に設定してください。reachy_mini 環境と混在させないでください。
:::

## グリッパー音声制御の設定

リポジトリルートの `.env` に、次の 2 行を追加します（ファイルが存在しない場合は作成してください）：

```bash
REACHY_MINI_EXTERNAL_TOOLS_DIRECTORY=external_content/external_tools
AUTOLOAD_EXTERNAL_TOOLS=1
```

lerobot の python パスが異なる場合は、次も設定します：

```bash
LEROBOT_PYTHON=/path/to/lerobot/env/bin/python
```

## 実行

**`.env` と相対パスのツールディレクトリを正しく解決するため、必ずリポジトリルートからアプリを起動してください：**

```bash
cd reachy_mini_conversation_app
reachy-mini-conversation-app
```

## 音声コマンド

- 開く: "open the gripper" / "open the claw" / "release" / "let go"
- 閉じる: "close the gripper" / "close the claw" / "grab it" / "hold this"

## 手動テスト

会話アプリを起動せずに、まずハードウェアとキャリブレーションが正しく動作するか確認します：

```bash
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py open
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py close
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py demo   # open and close twice
```

## カスタマイズ：アームの他の部分を制御する

全体のチェーンは 2 つのファイルだけで構成されています。ニーズに合う方を変更してください：

### 1. モーション自体を変更する → `soarm_gripper.py`（リポジトリルート）

これは実際にアームを駆動するスクリプトです。現在はグリッパーアクションのみを送信します：

```python
robot.send_action({"gripper.pos": target})
```

SO-ARM フォロワーで利用可能なジョイントキーは、`shoulder_pan.pos`、`shoulder_lift.pos`、`elbow_flex.pos`、`wrist_flex.pos`、`wrist_roll.pos`、`gripper.pos`（正規化 0–100）です。他の部分を制御するには、`send_action()` に渡す dict に対応するジョイントを追加します。例：

```python
robot.send_action({
    "shoulder_pan.pos": 50.0,
    "elbow_flex.pos": 70.0,
    "gripper.pos": OPEN_POS,
})
```

また、`main()` 内で `open` / `close` / `demo` パターンに従って、`wave` や `home` など独自のアクション分岐を追加することもできます。

このファイルでよく調整するパラメータ：

- `OPEN_POS` / `CLOSE_POS` — グリッパーの移動量（正規化 0–100、デフォルトは 60 / 20）。
- `PORT` — フォロワーアームのシリアルデバイス。
- `ARM_ID` — キャリブレーションプロファイル名。

### 2. LLM に新しいアクションを呼び出させる → `external_content/external_tools/gripper_control.py`

これは LLM に公開される外部ツールであり、LLM が「利用可能であると認識している」アクションを決定します。アクションを追加する際は、次を同期して更新してください：

- `description` — ツールの説明。どのようなユーザー発話で呼び出すべきか（いつ呼び出すか）を LLM に伝えます。
- `parameters_schema` — 新しいアクション名（例：`"wave"`）を `action` の `enum` に追加します。
- `__call__()` — 新しい `action` をサブプロセスコマンド `cmd = [LEROBOT_PYTHON, GRIPPER_SCRIPT, action]` に渡します。

まったく別のデバイスを制御したい場合は、そのディレクトリ内に（例：`arm_control.py` のような）**新しいツールファイルを作成**することもできます。同様に `reachy_mini_conversation_app.tools.core_tools.Tool` を継承してください。`AUTOLOAD_EXTERNAL_TOOLS=1` の場合、そのディレクトリ内の有効なツールファイルはすべて自動的に読み込まれます。各ツールクラスは一意の `Tool.name` を持つ必要がある点に注意してください。

## トラブルシューティング

**バックエンドが起動しない：`Unknown scheme for proxy URL 'socks://...'`**

このアプリは httpx を使用しており、`ALL_PROXY` における `socks://` スキームを受け付けません（認識するのは `http(s)://`、`socks5://`、`socks5h://` のみです）。シェル（例：clash）が `ALL_PROXY=socks://...` を設定している場合は、起動時にこれを解除してください。`HTTPS_PROXY=http://...` を維持しておけば十分です：

```bash
env -u ALL_PROXY -u all_proxy reachy-mini-conversation-app
```

あるいはプロキシ変数を `socks5://127.0.0.1:port/` に変更します（httpx はこの形式を受け付けます。これは `socksio` を必要としますが、すでに環境にインストールされています）。
