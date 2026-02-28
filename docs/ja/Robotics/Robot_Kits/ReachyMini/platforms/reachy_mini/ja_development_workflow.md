---
description: Wireless Reachy Mini 向けの開発ワークフローガイド。SSH アクセス、クロスプラットフォームの選択肢、リモート編集、効率的なコードテスト方法を扱います。
title: Wireless Reachy Mini 向け開発ワークフロー
slug: /ja/reachymini_platforms_reachy_mini_development_workflow
keywords:
- development
- workflow
- wireless
- ssh
- sshfs
- remote editing
- vs code
- rsync
- cross-platform
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Wireless Reachy Mini 向け開発ワークフロー

このガイドでは、Wireless Reachy Mini 上でコードを開発・テストするための効率的なワークフローについて説明します。

## 前提条件

- ロボットへの SSH アクセス（`ssh pollen@reachy-mini.local`、パスワード: `root`）
- お使いのコンピュータに SSHFS がインストールされていること（Ubuntu/Debian では `sudo apt install sshfs`）
- ロボットの IP アドレス（ダッシュボードやルーターで確認するか、SSH 後に `ifconfig` を実行）

## クイックなクロスプラットフォームの選択肢

本格的なワークフローに入る前に、よりシンプルなクロスプラットフォームの方法を 2 つ紹介します。

### VS Code Remote SSH

VS Code の [Remote - SSH extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) を使うと、ロボット上のファイルを直接編集できます。`pollen@reachy-mini.local` に接続し、任意のフォルダを開きます。変更はロボット上に直接保存されます。Windows、macOS、Linux で動作します。

### Rsync

ローカルのソースコードをロボットの site-packages に同期するには `rsync` を使用します。高速で、ほぼすべての環境で動作します。

```bash
rsync -avz /path/to/your_app/src/your_app/ \
    pollen@reachy-mini.local:/venvs/apps_venv/lib/python3.12/site-packages/your_app/
```

編集のたびにこれを実行して変更を反映します。ローカルに存在しなくなったファイルを削除したい場合は `--delete` を追加します。

どちらの方法でも、ロボット上でコードを実行するには [Approach A の Step 3](#step-3-install-and-run-your-code-on-the-robot) を参照してください。

---

## アプローチ A: ロボット上にクローンし、ローカルで編集する（推奨）

これは推奨されるワークフローです。コードはロボット上に置きつつ、お使いのコンピュータから好みの IDE や AI コーディングツールで編集します。

### Step 1: リポジトリをロボット上にクローンする

```bash
ssh pollen@reachy-mini.local
cd /home/pollen
git clone https://github.com/YOUR_USER/YOUR_APP.git
```

### Step 2: ロボットのファイルをローカルマシンにマウントする

ローカルコンピュータ上でマウントポイントを作成し、マウントします。

```bash
mkdir -p ~/wireless_dev
sshfs pollen@reachy-mini.local:/home/pollen/YOUR_APP ~/wireless_dev \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

これで IDE で `~/wireless_dev` を開き、ローカルファイルと同じように編集できます。

### Step 3: ロボット上でコードをインストールして実行する

ロボットに SSH 接続し、アプリをインストール／実行します。

```bash
ssh pollen@reachy-mini.local
cd /home/pollen/YOUR_APP

# Install in editable mode (changes apply immediately):
/venvs/apps_venv/bin/pip install -e .

# Then run your app:
/venvs/apps_venv/bin/python -m YOUR_MODULE.main

# Or run directly without installing:
/venvs/apps_venv/bin/python your_script.py
```

### Step 4: 作業終了時にアンマウントする

```bash
fusermount -u ~/wireless_dev
```

## アプローチ B: インストール済みアプリのソースを上書きする

すでにダッシュボード経由でアプリをインストールしており、そのソースコードを直接変更したい場合に、ローカルファイルをロボットにマウントして上書きします。

### Step 1: ロボット上でインストール済みアプリの場所を特定する

アプリは次の場所にインストールされます。
```
/venvs/apps_venv/lib/python3.12/site-packages/YOUR_APP_NAME/
```

### Step 2: ローカルソースをインストール済みの場所にマウントする

ロボット上でこれを実行し、PC のソースコードをインストール済みパッケージの上にマウントします。

```bash
ssh pollen@reachy-mini.local

# Mount your local src content onto site-packages
sshfs YOUR_USER@YOUR_PC_IP:/path/to/your_app/src/your_app \
    /venvs/apps_venv/lib/python3.12/site-packages/YOUR_APP_NAME \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

重要: リポジトリ全体ではなく、**`src/your_app/` ディレクトリの中身だけ**をマウントしてください。site-packages ディレクトリにはリポジトリ構造ではなく、パッケージ本体が直接配置されています。

あとは PC 上でファイルを編集するだけです。アプリを再起動すると変更がすぐに反映されます。

## アプローチ C: ローカルソースをマウントして直接実行する

アプローチ B に似ていますが、pip install やダッシュボードを使いません。ローカルソースをロボットにマウントし、アプリを直接実行します。

### Step 1: ローカルソースをロボットにマウントする

ロボット上でこれを実行します。

```bash
ssh pollen@reachy-mini.local
mkdir -p /home/pollen/my_app_mount

sshfs YOUR_USER@YOUR_PC_IP:/path/to/your_app /home/pollen/my_app_mount \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

### Step 2: アプリを直接実行する

```bash
cd /home/pollen/my_app_mount
/venvs/apps_venv/bin/python main.py
```

このアプローチはテストには高速ですが、アプリはダッシュボードに登録されません。

## 特定のブランチまたはバージョンをインストールする

特定のバージョンをシステム全体にインストールするには次のようにします。

```bash
ssh pollen@reachy-mini.local
/venvs/apps_venv/bin/python -m pip install --force-reinstall \
    "git+https://github.com/pollen-robotics/MY_AWESOME_APP.git@MY_AWESOME_BRANCH"
```

`MY_AWESOME_BRANCH` をブランチ名（`develop`）、タグ、またはコミットハッシュに置き換えてください。

## よくある落とし穴

### SSHFS 経由での pip install が遅い

ファイルを**コンピュータからロボットへ**マウントする（アプローチ A の逆）場合、pip install の処理は非常に遅くなります。pip が多数の小さなファイルをネットワーク越しに読み込むためです。

**解決策:** 次のいずれかを行います。
- アプローチ A を使用する（ファイルはロボット上に置き、コンピュータにマウントする）
- もしくは pip install を行わず、`python -m your_module` で手動実行する

### site-packages のマウントポイントが間違っている

git リポジトリは次のような構造です。
```
your_app/
  src/
    your_app/
      __init__.py
      main.py
```

しかし site-packages には次のように入っています。
```
your_app/
  __init__.py
  main.py
```

リポジトリ全体を site-packages の上にマウントすると、Python はコードを見つけられません。パッケージの内側のディレクトリだけをマウントしてください。


## クイックリファレンス

| タスク | コマンド |
|------|---------|
| ロボットに SSH 接続 | `ssh pollen@reachy-mini.local` |
| デーモンを停止 | `sudo systemctl stop reachy-mini-daemon` |
| デーモンを開始 | `sudo systemctl start reachy-mini-daemon` |
| デーモンのログを表示 | `journalctl -u reachy-mini-daemon -f` |
| ロボットの状態を確認 | `reachyminios_check` |
| ロボットのファイルをローカルにマウント | `sshfs pollen@IP:/path ~/local_mount -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3` |
| アンマウント | `fusermount -u ~/local_mount` |

## 関連情報

- [Install Daemon from Branch](/ja/reachymini_platforms_reachy_mini_install_daemon_from_branch) - 未リリースの daemon バージョンをテストするため
- [Troubleshooting](/ja/reachymini_troubleshooting) - よくある問題とその解決策
