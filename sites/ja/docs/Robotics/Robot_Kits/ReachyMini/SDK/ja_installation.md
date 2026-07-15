---
description: Linux、macOS、Windows における Reachy Mini Python SDK とデーモンの包括的なインストールガイド。前提条件、仮想環境のセットアップ、トラブルシューティングを網羅します。
title: インストールガイド
slug: /reachymini_sdk_installation
keywords:
  - installation
  - setup
  - python
  - virtual environment
  - uv
  - git
  - prerequisites
  - cross-platform
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_installation/
---

# 📦 インストールガイド

> **Reachy Mini へようこそ！** このガイドでは、ロボットを操作し始めるための Python SDK とデーモンのインストール方法を説明します。

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ✅ 対応 | ✅ 対応 | ✅ 対応 |

**サポートが必要ですか？** 問題が発生した場合は、遠慮なく[issue](https://github.com/pollen-robotics/reachy_mini/issues) を作成してください。

## コマンドラインは初めてですか？ 🖥️

<details>
<summary>ターミナル / コマンドラインの使用が初めての場合はこちらをクリック</summary>

**コマンドライン**（ターミナルやコマンドプロンプトとも呼ばれます）は、コンピュータと対話するためにコマンドを入力するテキストベースのインターフェースです。心配はいりません — 見た目ほど難しくはありません！

**コマンドラインの開き方：**
* **Windows:** `Win + R` を押し、`cmd` または `powershell` と入力して Enter を押します
* **macOS:** `Cmd + Space` を押し、`Terminal` と入力して Enter を押します
* **Linux:** `Ctrl + Alt + T` を押すか、アプリケーション内で「Terminal」を検索します

**基本的なヒント：**
* 手順に記載されているとおりにコマンドを正確に入力します
* 各コマンドを入力したら `Enter` を押して実行します
* コマンドはコピー＆ペーストできます（多くのコマンドラインインターフェースでは右クリックで貼り付けできます）

:::tip
_怖がらないでください！_ コマンドラインは、コンピュータに指示を与えるもう一つの方法にすぎません。コマンドを一つずつ順番に実行していけば、すぐに Reachy Mini を操作できるようになります！
:::

</details>

## 1. 📋 事前準備

| ツール | バージョン | 用途 |
|------|---------|---------|
| 🐍 **Python** | 3.10 - 3.12 | Reachy Mini SDK を実行 |
| 📂 **Git** | 最新 | ソースコードとアプリをダウンロード |
| 📦 **Git LFS** | 最新 | モデルアセットをダウンロード |

### 🐍 Python をインストール

ここでは `uv` を使用します。高速な Python パッケージマネージャーで、インストールが簡単になります！

#### ステップ 1: uv をインストール

:::info Linux / macOS
ターミナルで次を実行します：
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
:::

:::info Windows
ターミナルで次を実行します：
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
:::

**✅ インストールの確認：**

インストールが完了したら、一度ターミナルを閉じて新しく開き直してください。次のコマンドで正しくインストールされたか確認できます：
```bash
uv --version
```

#### ステップ 2: Python をインストール

ターミナルで次を実行します：
```bash
uv python install 3.12 --default
```

:::tip
Reachy Mini では、サポートされている最新バージョンである Python 3.12 の使用を推奨します。
:::

### 📂 Git と Git LFS をインストール

:::info Linux
#### Git と Git LFS をインストール

ターミナルで次を実行します：
```bash
sudo apt install git git-lfs
```
:::

:::info macOS
#### 1. Homebrew をインストール（未インストールの場合）

ターミナルで次を実行します：
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Apple Silicon（M1, M2 など）の場合、次のコマンドを実行するように指示されます：

```zsh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

✅ Homebrew の確認：

インストールが完了したら、次のコマンドで正しくインストールされたか確認できます：
```zsh
brew --version
```

#### 2. Git と Git LFS をインストール

ターミナルで次を実行します：
```zsh
brew install git git-lfs
```
:::

:::info Windows
#### Git for Windows をダウンロードしてインストール

Git for Windows をダウンロードしてインストールします：
https://git-scm.com/install/windows
:::

**✅ インストールの最終処理：**

最後に、次のコマンドで Git LFS を初期化する必要があります：

```bash
git lfs install
```

## 2. 🏠 仮想環境をセットアップ

> **なぜ仮想環境を使うのですか？** Reachy Mini のインストールを他の Python プロジェクトから分離し、依存関係の競合を防ぐためです。現在の Python 開発では必須の手法です！

### 環境を作成

ターミナルで次を実行します：
```bash
uv venv reachy_mini_env --python 3.12
```

### 環境を有効化

:::info Linux / macOS
ターミナルで次を実行します：
```bash
source reachy_mini_env/bin/activate
```
:::

:::warning Windows - 初回セットアップ
仮想環境を有効化する前に、Windows にスクリプトの実行を許可する必要があります。これは一度だけ行えば大丈夫です！

**ステップ 1:** 管理者としてターミナルを開く
- `Win + R` を押し、`powershell` と入力
- 「Windows PowerShell」を右クリックし、「管理者として実行」を選択

**ステップ 2:** スクリプトの実行を有効化

管理者権限のターミナルで次を実行します：
```powershell
powershell Set-ExecutionPolicy RemoteSigned
```

**ステップ 3:** 管理者ターミナルを閉じて、通常のターミナルを開く

その後、次を実行して仮想環境を有効化できます：
```powershell
reachy_mini_env\Scripts\activate
```
:::

> **✅ 成功の目印：** コマンドラインプロンプトの先頭に `(reachy_mini_env)` と表示されていれば成功です！

## 3. 🚀 Reachy Mini をインストール

インストール方法を選択してください：

:::info 📦 オプション A: PyPI
**ほとんどのユーザーに推奨** — とにかくロボットを操作したいだけなら、この方法がおすすめです！

ターミナルで次を実行します：
```bash
uv pip install "reachy-mini"
```

シミュレーションモードを使用したい場合は、`mujoco` エクストラを追加する必要があります：
```bash
uv pip install "reachy-mini[mujoco]"
```

:::tip
gstreamer の事後インストールは、PyPi に関する[issue](https://github.com/pypi/support/issues/8847#issuecomment-3899714506) が原因で必要になっており、将来的には解消される予定です。
:::

<details>
<summary>🐧 <strong>Linux ユーザー: 追加の手順が必要です</strong></summary>

**GStreamer** は Linux では手動でインストールする必要があります：

**[📖 GStreamer インストールガイド](https://wiki.seeedstudio.com/ja/reachymini_sdk_gstreamer-installation/)**

**USB 権限** — Reachy Mini と USB 接続するために必要です：

```bash
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
| sudo tee /etc/udev/rules.d/99-reachy-mini.rules

sudo udevadm control --reload-rules && sudo udevadm trigger
sudo usermod -aG dialout $USER
```

:::warning
変更を反映させるには、一度ログアウトしてから再度ログインしてください！
:::

</details>
:::

:::info 🔧 オプション B: ソース
**開発者向け** — SDK を変更したり、コントリビュートしたい場合はこちらを選択してください！

ターミナルで次を実行します：
```bash
git clone https://github.com/pollen-robotics/reachy_mini && cd reachy_mini
uv sync
```

シミュレーションモードを使用したい場合は、`mujoco` エクストラを追加する必要があります：
```bash
uv sync --extra mujoco
```

<details>
<summary>🐧 <strong>Linux ユーザー: 追加の手順が必要です</strong></summary>

**GStreamer** は Linux では手動でインストールする必要があります：

**[📖 GStreamer インストールガイド](https://wiki.seeedstudio.com/ja/reachymini_sdk_gstreamer-installation/)**

**USB 権限** — Reachy Mini と USB 接続するために必要です：

```bash
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
| sudo tee /etc/udev/rules.d/99-reachy-mini.rules

sudo udevadm control --reload-rules && sudo udevadm trigger
sudo usermod -aG dialout $USER
```

> [!WARNING]
> 変更を反映させるには、一度ログアウトしてから再度ログインしてください！

</details>

## 🎉 おめでとうございます！

Reachy Mini のインストールが完了しました！ロボットを動かす準備が整いました。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**

## 次のステップ

* **[クイックスタートガイド](/ja/reachymini_sdk_quickstart)**: Reachy Mini で最初の挙動を実行します
* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞く方法を学びます。
* **[AI 連携](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開します。
* **[コアコンセプト](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について説明します。