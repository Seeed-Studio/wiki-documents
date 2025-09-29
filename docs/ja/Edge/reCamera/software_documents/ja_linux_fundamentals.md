---
description: reCamera用の基本的なLinuxコマンド
title: Linux基礎
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /ja/recamera_linux_fundamentals
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---
# Linux基礎

## **1. Linuxシステムの紹介**

Linuxは、信頼性、柔軟性、パフォーマンスにより広く採用されているオープンソースのUnix系オペレーティングシステムです。サーバー、デスクトップ、モバイルデバイス、組み込みシステムで広く使用されています。

### Linuxの主な特徴：

- **フリーでオープンソース**: Linuxのソースコードは無料で利用でき、ユーザーは要件に応じて変更することができます。
- **マルチタスク**: Linuxは複数のアプリケーションを同時に実行することをサポートしています。
- **セキュリティ**: ファイル権限、ユーザー管理、SELinuxなどの堅牢なセキュリティ機能で知られています。
- **移植性**: Linuxは様々なハードウェアアーキテクチャで動作できます。

## **2. Linuxファイルシステムの紹介**

Linuxはファイルとディレクトリを階層構造で整理しています。この構造の最上位にはルートディレクトリ`/`があり、そこから他のディレクトリが分岐しています。

### Linuxファイルシステムの主要ディレクトリ：

- `/`: ルートディレクトリ。Linuxファイルシステムの起点です。
- `/home`: ユーザーのホームディレクトリ。すべてのユーザーはここにサブディレクトリを持ちます（例：`/home/user`）。
- `/etc`: システムの設定ファイル。
- `/bin`: 必須のバイナリファイルとコマンド。
- `/var`: ログやデータベースなどの可変データ。
- `/tmp`: 一時ファイル。
- `/dev`: ハードウェアコンポーネントを表すデバイスファイル。

## **3. ターミナルとコマンドラインの使用**

ターミナルはLinuxオペレーティングシステムと対話するための強力なツールです。ユーザーが様々なタスクを実行するためのコマンドを発行することができます。

**ターミナルを開く：**

- アクセスアドレス：http://192.168.42.1/#/terminal（デフォルトのユーザー名とパスワード：`recamera`）
- ssh[ツール](https://mobaxterm.mobatek.net/)を使用してリモートでログインします。
以下のコマンドを使用してreCameraにリモートでアクセスできます：

```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

次に```Enter```を押すと、reCameraをリモートで制御できるようになります。

### 基本的なコマンドライン構造：

Linuxのコマンドは一般的な構造に従います：

```bash
command [options] [arguments]
```

例えば、`ls -l /home/recamera` は `/home/recamera` ディレクトリ内のすべてのファイルを詳細形式で一覧表示します。

## **4.ユーザー再カメラ && root**

recameraを初めて使用する際は、デフォルトのrecameraパスワードをリセットします。これはターミナルにログインする際に使用するパスワードでもあります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-1.png" /></div>

:::note

ターミナルでパスワードを入力する際、内容は表示されません。パスワード入力後、`Enter`を押して実行してください。

:::

一部の特別な操作では権限不足の問題が発生します。コマンドを実行するには、コマンド実行前にsudoを追加する必要があります。または`root`ユーザーに切り替えて、システム内のすべてのコマンドを実行します。

rootユーザーはデフォルトでパスワードが設定されていません。このコマンドを使用してパスワードを設定してください。

- `sudo passwd root`:ユーザーのパスワードを変更
- `su root`:rootユーザーに切り替え

:::note

rootユーザーはシステム関連ファイルを変更でき、システム障害を引き起こす可能性があります。慎重に操作してください。

:::

## **5. 基本的なLinuxコマンド**

以下は基本的なコマンドとその使用方法です：

### ファイルとディレクトリ管理

- `pwd`: 現在の作業ディレクトリを表示します。
- `ls`: 現在のディレクトリ内のファイルとディレクトリを一覧表示します。
- `cd [directory]`: 現在のディレクトリを変更します。
- `mkdir [directory]`: 新しいディレクトリを作成します。
- `rm [file]`: ファイルを削除します。
- `rmdir [directory]`: 空のディレクトリを削除します。

### ファイル権限と所有権

- `chmod [permissions] [file]`: ファイルの権限を変更します。
- `chown [owner] [file]`: ファイルの所有者を変更します。

### ファイル操作

- `cp [source] [destination]`: ファイルまたはディレクトリをコピーします。
- `mv [source] [destination]`: ファイルまたはディレクトリを移動または名前変更します。
- `cat [file]`: ファイルの内容を表示します。
- `nano [file]`: テキストエディタ（Nano）でファイルを開きます。

### システム情報

- `top`: リアルタイムのシステムプロセスとリソース使用状況を表示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-2.png" /></div>
- `df`: ディスク容量使用状況を表示します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-3.png" /></div>
- `free`: メモリ使用状況を表示します。
- `uname -r`: カーネルバージョンを表示します。

## 6.ファイル転送

Linuxは、ローカルネットワークやインターネット経由でシステム間でファイルを転送するための複数の方法を提供しています。以下は、Linuxでファイル転送に使用される一般的なツールとプロトコルです。

### **SCP（Secure Copy Protocol）の使用**

SCPを使用すると、ローカルホストとリモートホスト間、または2つのリモートホスト間でファイルを安全にコピーできます。

#### 基本的なSCPコマンド

- ローカルからリモートにファイルをコピー:

  ```bash
  scp [file] username@remote_host:/path/to/destination
  ```

- リモートからローカルにファイルをコピーする：

  ```bash
  scp username@remote_host:/path/to/file /local/destination
  ```

- ディレクトリをコピーする（再帰的コピーには `-r` フラグを使用）：

  ```bash
  scp -r [directory] username@remote_host:/path/to/destination
  ```

#### 例：

ローカルマシンからリモートサーバーにファイルをコピーするには：

```bash
scp myfile.txt recamera@192.168.1.100:/home/recamera/
```

### **SFTP（Secure File Transfer Protocol）の使用**

SFTPはファイル転送のもう一つの安全な方法で、SSH上で動作します。リモートサーバー上のファイルを対話的に管理することができます。

#### 基本的なSFTPコマンド：

1. SFTPセッションを開始する：

   ```bash
   sftp username@remote_host
   ```

2. 接続後、以下のコマンドを使用します：

   - `ls`: リモートディレクトリ内のファイルを一覧表示します。
   - `cd [directory]`: リモートディレクトリを変更します。
   - `get [file]`: リモートサーバーからローカルマシンにファイルをダウンロードします。
   - `put [file]`: ローカルマシンからリモートサーバーにファイルをアップロードします。
   - `exit`: SFTPセッションを終了します。

#### 例：

リモートサーバーにファイルをアップロードするには：

```bash
sftp recamera@192.168.42.1
sftp> put myfile.txt /home/user/Documents/
```

## **7.ハードウェアコマンド**

recameraデバイス上のハードウェアを制御するには、この[ドキュメント](https://wiki.seeedstudio.com/ja/recamera_hardware_and_specs/#hardware-interface)を参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
