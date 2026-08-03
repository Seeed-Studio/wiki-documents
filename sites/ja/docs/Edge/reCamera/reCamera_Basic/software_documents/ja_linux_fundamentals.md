---
description: reCamera 向けの基本的な Linux コマンド
title: Linux 基礎
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /recamera_linux_fundamentals
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
createdAt: '2025-02-14'
updatedAt: '2025-04-08'
url: https://wiki.seeedstudio.com/ja/recamera_linux_fundamentals/
---
# Linux 基礎

## **1. Linux システムの概要**

Linux はオープンソースの Unix 系オペレーティングシステムであり、その信頼性、柔軟性、パフォーマンスの高さから広く採用されています。サーバー、デスクトップ、モバイルデバイス、組み込みシステムなどで広く利用されています。

### Linux の主な特徴:

- **無料かつオープンソース**：Linux のソースコードは無償で公開されており、ユーザーは自分の要件に応じて修正できます。
- **マルチタスク**：Linux は複数のアプリケーションを同時に実行することをサポートします。
- **セキュリティ**：ファイルパーミッション、ユーザー管理、SELinux など、堅牢なセキュリティ機能で知られています。
- **移植性**：Linux はさまざまなハードウェアアーキテクチャ上で動作できます。

## **2. Linux ファイルシステムの概要**

Linux はファイルとディレクトリを階層構造で整理します。この構造の最上位にはルートディレクトリ `/` があり、そこから他のディレクトリが枝分かれしています。

### Linux ファイルシステムの主なディレクトリ:

- `/`: ルートディレクトリ。Linux ファイルシステムの起点です。
- `/home`: ユーザーのホームディレクトリ。各ユーザーはここにサブディレクトリを持ちます（例：`/home/user`）。
- `/etc`: システムの設定ファイル。
- `/bin`: 重要なバイナリファイルとコマンド。
- `/var`: ログやデータベースなどの可変データ。
- `/tmp`: 一時ファイル。
- `/dev`: ハードウェアコンポーネントを表すデバイスファイル。

## **3. ターミナルとコマンドラインの使用**

ターミナルは Linux オペレーティングシステムと対話するための強力なツールです。さまざまな作業を行うためのコマンドを実行できます。

**ターミナルを開く：**

- アクセスアドレス：http://192.168.42.1/#/terminal（デフォルトのユーザー名とパスワード：`recamera`）
- ssh [tool](https://mobaxterm.mobatek.net/) を介してリモートログインします。
次のコマンドを使用して、reCamera にリモートアクセスできます：
```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

その後 ```Enter``` を押すと、reCamera をリモートで操作できるようになります。

### 基本的なコマンドライン構造:

Linux のコマンドは一般的に次のような構造に従います：

```bash
command [options] [arguments]
```

例えば、`ls -l /home/recamera` は `/home/recamera` ディレクトリ内のすべてのファイルを詳細形式で一覧表示します。

## **4.User recamera と root**

recamera を初めて使用する際に、デフォルトの recamera パスワードをリセットします。このパスワードはターミナルにログインする際にも使用されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-1.png" /></div>

:::note

ターミナルでパスワードを入力しても、内容は表示されません。パスワード入力後に `Enter` を押して実行してください。

:::

一部の特殊な操作では、権限不足の問題が発生します。コマンドを実行するには、コマンドの前に sudo を付けて実行する必要があります。または、`root` ユーザーに切り替えて、システム内のすべてのコマンドを実行します。

root ユーザーにはデフォルトではパスワードが設定されていません。次のコマンドを使用してパスワードを設定します。

- `sudo passwd root`: ユーザーのパスワードを変更します。
- `su root`: root ユーザーに切り替えます。

:::note

root ユーザーはシステム関連ファイルを変更できるため、システム障害を引き起こす可能性があります。十分注意して操作してください。

:::

## **5. 基本的な Linux コマンド**

ここでは、いくつかの基本的なコマンドとその使い方を紹介します：

### ファイルおよびディレクトリ管理:

- `pwd`: 現在の作業ディレクトリを表示します。
- `ls`: 現在のディレクトリ内のファイルとディレクトリを一覧表示します。
- `cd [directory]`: 現在のディレクトリを変更します。
- `mkdir [directory]`: 新しいディレクトリを作成します。
- `rm [file]`: ファイルを削除します。
- `rmdir [directory]`: 空のディレクトリを削除します。

### ファイルのパーミッションと所有権:

- `chmod [permissions] [file]`: ファイルのパーミッションを変更します。
- `chown [owner] [file]`: ファイルの所有者を変更します。

### ファイル操作:

- `cp [source] [destination]`: ファイルまたはディレクトリをコピーします。
- `mv [source] [destination]`: ファイルまたはディレクトリを移動または名前変更します。
- `cat [file]`: ファイルの内容を表示します。
- `nano [file]`: テキストエディタ（Nano）でファイルを開きます。

### システム情報:

- `top`: システムプロセスとリソース使用状況をリアルタイムで表示します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-2.png" /></div>
- `df`: ディスク使用量を表示します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-3.png" /></div>
- `free`: メモリ使用量を表示します。
- `uname -r`: カーネルバージョンを表示します。

## 6.ファイル転送

Linux では、ローカルネットワークやインターネット経由でシステム間のファイルを転送するための、いくつかの方法が用意されています。以下は、Linux でファイル転送に使用される一般的なツールとプロトコルです。

### **SCP（Secure Copy Protocol）の使用**

SCP を使用すると、ローカルホストとリモートホスト間、または 2 つのリモートホスト間でファイルを安全にコピーできます。

#### 基本的な SCP コマンド:

- ローカルからリモートへファイルをコピー：

  ```bash
  scp [file] username@remote_host:/path/to/destination
  ```

- リモートからローカルへファイルをコピー：

  ```bash
  scp username@remote_host:/path/to/file /local/destination
  ```

- ディレクトリをコピー（再帰的コピーには `-r` フラグを使用）：

  ```bash
  scp -r [directory] username@remote_host:/path/to/destination
  ```

#### 例:

ローカルマシンからリモートサーバーにファイルをコピーするには：

```bash
scp myfile.txt recamera@192.168.1.100:/home/recamera/
```

### **SFTP（Secure File Transfer Protocol）の使用**

SFTP は、SSH 上で動作するもう 1 つの安全なファイル転送方法です。リモートサーバー上のファイルを対話的に管理できます。

#### 基本的な SFTP コマンド:

1. SFTP セッションを開始：

   ```bash
   sftp username@remote_host
   ```

2. 接続後、次のコマンドを使用します：

   - `ls`: リモートディレクトリ内のファイルを一覧表示します。
   - `cd [directory]`: リモートディレクトリを変更します。
   - `get [file]`: リモートサーバーからローカルマシンへファイルをダウンロードします。
   - `put [file]`: ローカルマシンからリモートサーバーへファイルをアップロードします。
   - `exit`: SFTP セッションを終了します。

#### 例:

リモートサーバーにファイルをアップロードするには：

```bash
sftp recamera@192.168.42.1
sftp> put myfile.txt /home/user/Documents/
```

## **7.ハードウェアコマンド**

recamera デバイス上のハードウェアを制御するには、この[ドキュメント](https://wiki.seeedstudio.com/ja/recamera_basicardware_and_specs/)を参照してください。

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>