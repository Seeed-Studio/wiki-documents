---
description: Linux、macOS、Windows 向けの Reachy Mini Python SDK とデーモンの包括的なインストールガイドです。前提条件、仮想環境のセットアップ、トラブルシューティングを網羅しています。
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
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# 📦 インストールガイド

:::note Reachy Mini へようこそ！
このガイドでは、ロボットを操作し始めるための Python SDK とデーモンのインストール方法を説明します。
:::

<div align="center">

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ✅ 対応 | ✅ 対応 | ✅ 対応 |

</div>

**サポートが必要ですか？** 問題が発生した場合は、遠慮なく[issue](https://github.com/pollen-robotics/reachy_mini/issues) を作成してください。

## コマンドラインを使うのは初めてですか？ 🖥️

:::note コマンドラインは初めてですか？
**コマンドライン**（ターミナルやコマンドプロンプトとも呼ばれます）は、コンピュータと対話するためにコマンドを入力するテキストベースのインターフェースです。心配はいりません——見た目よりずっと簡単です！

**コマンドラインの開き方：**
* **Windows:** `Win + R` を押し、`cmd` または `powershell` と入力して Enter を押します
* **macOS:** `Cmd + Space` を押し、`Terminal` と入力して Enter を押します
* **Linux:** `Ctrl + Alt + T` を押すか、アプリケーションで「Terminal」を検索します

**基本的なヒント：**
* 手順に記載されているコマンドは、表示されているとおりに正確に入力してください
* 各コマンドを入力したら `Enter` を押して実行します
* コマンドはコピー＆ペーストできます（ほとんどのコマンドラインインターフェースでは右クリックで貼り付けできます）
:::

:::tip
_怖がらないでください！_ コマンドラインは、コンピュータに指示を与えるもう一つの方法にすぎません。コマンドを一つずつ順番に実行していけば、すぐに Reachy Mini を操作できるようになります！
:::

## 1. 📋 前提条件

<div align="center">

| ツール | バージョン | 目的 |
|------|---------|---------|
| 🐍 **Python** | 3.10 - 3.12 | Reachy Mini SDK を実行 |
| 📂 **Git** | 最新 | ソースコードとアプリをダウンロード |
| 📦 **Git LFS** | 最新 | モデルアセットをダウンロード |

</div>

### 🐍 Python をインストールする

ここでは `uv` を使用します。これは、高速な Python パッケージマネージャで、インストールを簡単にしてくれます！

#### ステップ 1: uv をインストールする

:::tip Linux / macOS
ターミナルで次を実行します：
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
:::

:::tip Windows
ターミナルで次を実行します：
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
:::

:::success インストールの確認
インストールが完了したら、ターミナルを一度閉じて新しく開き直してください。次のコマンドで、すべてが正しくインストールされたか確認できます：
```bash
uv --version
```
:::

#### ステップ 2: Python をインストールする

ターミナルで次を実行します：
```bash
uv python install 3.12 --default
```

:::tip
Reachy Mini では、サポートされている最新バージョンである Python 3.12 を推奨します。
:::

### 📂 Git と Git LFS をインストールする

:::info Linux
#### Git と Git LFS をインストールする

ターミナルで次を実行します：
```bash
sudo apt install git git-lfs
```
:::

:::info macOS
#### 1. Homebrew をインストールする（未インストールの場合）

ターミナルで次を実行します：
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Apple Silicon（M1, M2 など）の場合、次のコマンドを実行するように求められます：

```zsh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

:::success Homebrew の確認
インストールが完了したら、次のコマンドで正しくインストールされたか確認できます：
```zsh
brew --version
```
:::

#### 2. Git と Git LFS をインストールする

ターミナルで次を実行します：
```zsh
brew install git git-lfs
```
:::

:::info Windows
#### Git for Windows をダウンロードしてインストールする

Git for Windows をダウンロードしてインストールします：
https://git-scm.com/install/windows
:::

:::success インストールの仕上げ
最後に、次のコマンドで Git LFS を初期化する必要があります：
```bash
git lfs install
```
:::

## 2. 🏠 仮想環境をセットアップする

:::tip なぜ仮想環境を使うのですか？
Reachy Mini のインストールを分離し、他の Python プロジェクトとの競合を防ぐためです。現在の Python 開発では必須の手法です！
:::

### 環境を作成する

ターミナルで次を実行します：
```bash
uv venv reachy_mini_env --python 3.12
```

### 環境を有効化する

:::info Linux / macOS
ターミナルで次を実行します：
```bash
source reachy_mini_env/bin/activate
```
:::

:::warning Windows - 初回セットアップ
仮想環境を有効化する前に、Windows にスクリプトの実行を許可する必要があります。これは一度だけ行えば大丈夫です！

**ステップ 1:** 管理者としてターミナルを開く
- `Win + R` を押し、`powershell` と入力します
- 「Windows PowerShell」を右クリックし、「Run as administrator」を選択します

**ステップ 2:** スクリプト実行を有効化する

管理者権限のターミナルで次を実行します：
```powershell
powershell Set-ExecutionPolicy RemoteSigned
```

**ステップ 3:** 管理者権限のターミナルを閉じ、通常のターミナルを開く

これで、次のコマンドを実行して仮想環境を有効化できるようになります：
```powershell
reachy_mini_env\Scripts\activate
```
:::

:::success 成功の目印
コマンドラインプロンプトの先頭に `(reachy_mini_env)` と表示されていれば成功です！
:::

## 3. 🚀 Reachy Mini をインストールする

インストール方法を選択してください：

<div align="center">

| 📦 **PyPI からインストール** | 🔧 **ソースからインストール** |
|:---:|:---:|
| **すべてのユーザー向け** | **開発者向け** |
| すぐに利用可能 | コードを変更可能 |

</div>

### 📦 オプション A: PyPI からインストール

:::tip ほとんどのユーザーに推奨
ロボットを操作したいだけですか？この方法がおすすめです！
:::

ターミナルで次を実行します：
```bash
uv pip install "reachy-mini"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

シミュレーションモードを使用したい場合は、`mujoco` エクストラを追加する必要があります：
```bash
uv pip install "reachy-mini[mujoco]"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

:::note
gstreamer のインストール後処理は、PyPi に関する[issue](https://github.com/pypi/support/issues/8847#issuecomment-3899714506) が原因で必要になっており、将来的には解決される予定です。
:::

### 🔧 オプション B: ソースからインストール

:::info 開発者向け
SDK を変更したり、コントリビュートしたい場合は、このオプションを選択してください！
:::

ターミナルで次を実行します：
```bash
git clone https://github.com/pollen-robotics/reachy_mini
cd reachy_mini
uv pip install -e .
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

シミュレーションモードを使用したい場合は、`mujoco` エクストラを追加する必要があります：
```bash
uv pip install -e ".[mujoco]"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

### 🐧 Linux ユーザー向け

:::info Linux + USB 接続ですか？
Reachy Mini のシリアルポートへのアクセス権を付与する必要があります。

ターミナルで次のコマンドを実行します：
```bash
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
| sudo tee /etc/udev/rules.d/99-reachy-mini.rules

sudo udevadm control --reload-rules && sudo udevadm trigger
sudo usermod -aG dialout $USER
```
:::

:::warning
変更を反映させるには、一度ログアウトしてから再度ログインしてください！
:::

:::tip PortAudio
デフォルトのバックエンドで音声機能を有効にするには、システムに portaudio がインストールされていることを確認してください。

ターミナルで次のコマンドを実行します：
```bash
sudo apt-get install libportaudio2
```
:::

#### Gstreamer

メディア管理は GStreamer ライブラリによって行われます。Windows と MacOSX ユーザーは、pip を使ってインストールできます：
```bash
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

Linux ユーザーは、追加の手順に従う必要があります：

<div align="center">

[![GStreamer Installation Guide](https://img.shields.io/badge/📖-GStreamer%20Installation%20Guide-blue?style=for-the-badge)](/ja/reachymini_sdk_gstreamer-installation)

</div>

## 🎉 おめでとうございます！

Reachy Mini のインストールが完了しました！ロボットを動かす準備が整いました。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認してください](/ja/reachymini_troubleshooting)**

## 次のステップ

* **[クイックスタートガイド](/ja/reachymini_sdk_quickstart)**: Reachy Mini で最初の挙動を実行する
* **[Python SDK](/ja/reachymini_sdk_python-sdk)**: 動かす・見る・話す・聞く方法を学ぶ
* **[AI 連携](/ja/reachymini_sdk_integration)**: LLM を接続し、アプリを構築して Hugging Face に公開する
* **[コアコンセプト](/ja/reachymini_sdk_core-concept)**: アーキテクチャ、座標系、安全制限について
