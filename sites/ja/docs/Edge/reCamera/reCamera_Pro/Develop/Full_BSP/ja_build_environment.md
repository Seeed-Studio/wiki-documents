---
description: フルソースパッケージをビルドするために、ホスト側の依存関係を準備して検証します。
title: BSP ビルド環境
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_build_environment
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_build_environment/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# BSP ビルド環境

## ワンショットインストールスクリプト

SDK のルートには `setup_build_env.sh` が含まれています（実際のスクリプトは `project/setup_build_env.sh` で、ルートにはシンボリックリンクがあります）。これは**冪等**であり、すでに許容バージョンでインストールされているツールを再インストールしたりアップグレードしたりしないため、何度でも実行できます。

```bash
cd recamera-pro-sdk-v1.0.10
./setup_build_env.sh             # Install all missing tools
./setup_build_env.sh --check     # Dry run: report missing tools without changing anything
./setup_build_env.sh --help      # Show script help
```

初回実行時は、`--check` を使用して、パッケージをインストールしたりネットワークにアクセスしたりするかどうかを決める前に、何が不足しているかを確認します。

## ビルドターゲット向けツールのインストール

必要なツールは、何をビルドするかによって異なります。最初に SDK 全体をビルドする場合は、スクリプトを使ってすべての依存関係をインストールおよびチェックするのが最も簡単です。C/C++ アプリケーションのみをビルドする場合は、まずその Makefile、リンクされるライブラリ、および sysroot が何を要求しているかを確認し、それらのツールだけをインストールしてください。Rust、Go、Node.js、Docker は SDK 内の特定の高レベルアプリケーションで使用されますが、カーネルやすべての C プログラムをビルドするための共通前提条件ではありません。

スクリプトは必要なツールを要約してチェックします。インストールのステージは次のとおりです。

| ステージ | 内容 | 使用対象 |
| --- | --- | --- |
| Step 1 | ハードウェアチェック：64 ビット CPU と SDK パーティションの空き容量（20 GB 以上、100 GB 以上を推奨） | すべてのビルド |
| Step 2 | `apt` による基本的なビルドパッケージ：`repo git make gcc g++ cmake bison flex libssl-dev autoconf pkg-config python3 device-tree-compiler` など | U-Boot / カーネル / Buildroot / 共通アプリケーション依存関係 |
| Step 3 | Rust（`rustup` / `cargo`）、Docker（27.0.0 以上、かつユーザーを `docker` グループに追加）、`cross`（Rust クロスコンパイル補助ツール）、nvm / Node.js（18 以上） | `recamera_services`、`recamera_web` |
| Step 4 | CMake 3.21 以上、`libblkid-dev`、`libprotobuf-dev`、`protobuf-compiler` | `recamera_ipc`、`common/vigil` |
| Step 5 | Go 1.24.0 以上、UPX | `recamera_go2rtc` および関連アプリケーション |
| Step 6 | すべてのツールのバージョンサマリを表示 | すべてのビルド |

> 「C SDK」がなぜ Rust、Go、Node.js をチェックするのですか？これは単なる C コードではなく、完成された製品ソースパッケージだからです。`recamera_services` は Rust を使用し、go2rtc 関連プログラムは Go を使用し、Web フロントエンドは Node.js ツールチェーンを使用し、通知サービスは Python を使用します。これらのツールは、対応するコンポーネントをビルドする場合にのみ必要です。フルビルドがツール不足で失敗した場合は、まずどのアプリケーションが失敗したかを特定してください。アプリケーション一覧については [reCamera 上位レイヤサービスアーキテクチャ](/ja/recamera_pro_bsp_services/) を参照してください。

## ユーザーと権限

- スクリプトは **sudo 権限を持つ一般ユーザー** または root として実行してください。
- `sudo ./setup_build_env.sh` として呼び出された場合、rustup、nvm、Go 設定などのユーザーレベルのツールは root ではなく、`$SUDO_USER` で識別される実ユーザー向けにインストールされます。これは意図的なものであり、後続のビルド時のパーミッション問題を回避します。

## インストール後に必要な手順

1. スクリプトが現在のユーザーを `docker` グループに追加した場合、変更を有効にするには、**一度ログアウトして再度ログインする**か、一時的に `newgrp docker` を実行します。
2. 新しいターミナルを開くか、`source ~/.bashrc` を実行して、Go、cargo、nvm の PATH 変更を反映させます。
3. Step 6 のバージョンサマリで、必要なツールが `NOT INSTALLED` と表示されていないことを確認します。

環境を次のコマンドで検証します。

```bash
./setup_build_env.sh --check
```

## 制限付きネットワーク：ミラーとオフラインパッケージ

スクリプトは、ダウンロード元を上書きするための環境変数をサポートしています。

| 環境変数 | 上書き対象 |
| --- | --- |
| `GO_MIRROR_BASE` | Go ダウンロードベース URL |
| `DOCKER_REPO_BASE` | Docker apt リポジトリベース URL |
| `CMAKE_BASE_URL` | CMake ダウンロードベース URL |
| `RUSTUP_DIST_SERVER` | rustup 配布サーバー |

例：

```bash
export GO_MIRROR_BASE=https://golang.google.cn/dl
export RUSTUP_DIST_SERVER=https://rsproxy.cn
./setup_build_env.sh
```

オフラインアーカイブ `go1.24.0.linux-*.tar.gz` を **SDK ルート** に配置すると、スクリプトはネットワークからのダウンロードを試みる前に、それを使用して Go をインストールします。

## 手動インストール（スクリプトを使用しない場合）

社内ポリシーによりインストーラーの実行が許可されていない場合は、少なくとも次のものをインストールしてください。

```bash
sudo apt install -y build-essential git make cmake bison flex libssl-dev \
    autoconf pkg-config python3 device-tree-compiler libblkid-dev \
    libprotobuf-dev protobuf-compiler
```

最小バージョン要件：

- CMake 3.21 以上（`recamera_ipc` がその CMakeLists で要求）
- Docker 27.0.0 以上（Rust のクロスコンパイラ `cross` に必要）
- Node.js 18 以上（フロントエンドビルド）
- Go 1.24.0 以上（go2rtc）

**クロスツールチェーンを手動でインストールする必要はありません。** SDK には `tools/linux/toolchain/` 配下に含まれています。

- `aarch64-rockchip1240-linux-gnu`（GCC 12.4.0、64 ビット；reCamera Pro で使用）
- `arm-rockchip1240-linux-gnueabihf`（32 ビット）

`project/app/Makefile.param` は `tools/linux/toolchain/<RK_TOOLCHAIN_CROSS>/bin` を自動的に `PATH` に追加するため、システムの PATH を変更する必要はありません。

## ビルド環境が準備できているかの確認

SDK には次のチェックコマンドが用意されています。

```bash
./build.sh check
```

これはコンポーネント SDK の依存関係をチェックします。`lunch` 実行後、`./build.sh info` は現在のボード設定と、環境が正しく読み込まれていることを確認するのに役立つすべての `RK_*` 変数も表示します。

> 注意：`./build.sh --help` はヘルプコマンドでは**ありません**。認識されない引数が指定されると、`build.sh` はボード選択メニューを表示します。使用方法の情報は `project/build.sh` の `usage()` 関数内にあり、[First Full Build](/ja/recamera_pro_bsp_full_build/) のコマンド一覧表にも要約されています。

## よくあるインストールの問題

| 症状 | 原因 | 解決策 |
| --- | --- | --- |
| `docker: permission denied` | グループ変更が反映されていない | 一度ログアウトして再ログインするか、`newgrp docker` を実行する |
| インストール後に `go: command not found` と表示される | PATH が更新されていない | 新しいターミナルを開くか、`source ~/.bashrc` を実行する |
| rustup のダウンロードがタイムアウトする | 制限付きネットワーク | `RUSTUP_DIST_SERVER` を設定してインストーラーを再実行する |
| ディスク容量チェックに失敗する | パーティションの空き容量が 20 GB 未満 | 別のパーティションを使用するか、空き容量を増やして再試行する。ビルド成果物にはさらに数十 GB が必要になる場合があります |
| `cross` ビルドが失敗する | Docker が起動していない | `sudo systemctl start docker` を実行する |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>