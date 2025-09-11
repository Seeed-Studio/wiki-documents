---
description: reCamera 用の基本的な Linux コマンド
title: Linux 基礎
keywords:
  - Edge
  - reCamera
  - recamera
  - linux コマンド
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /ja/recamera_linux_fundamentals
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Parker Hu & Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Linux 基礎

## **1. Linux システムの紹介**

Linux はオープンソースで Unix に似たオペレーティングシステムであり、その信頼性、柔軟性、パフォーマンスの高さから広く採用されています。サーバー、デスクトップ、モバイルデバイス、組み込みシステムなどで広く使用されています。

### Linux の主な特徴:

- **無料でオープンソース**: Linux のソースコードは無料で利用可能であり、ユーザーは必要に応じて修正できます。
- **マルチタスク**: Linux は複数のアプリケーションを同時に実行することができます。
- **セキュリティ**: ファイル権限、ユーザー管理、SELinux などの強力なセキュリティ機能で知られています。
- **移植性**: Linux はさまざまなハードウェアアーキテクチャで動作可能です。

## **2. Linux ファイルシステムの紹介**

Linux はファイルやディレクトリを階層構造で整理します。この構造の最上位にはルートディレクトリ `/` があり、そこから他のディレクトリが分岐します。

### Linux ファイルシステムの主なディレクトリ:

- `/`: ルートディレクトリ。Linux ファイルシステムの出発点です。
- `/home`: ユーザーホームディレクトリ。各ユーザーにはここにサブディレクトリがあります（例: `/home/user`）。
- `/etc`: システムの設定ファイル。
- `/bin`: 基本的なバイナリファイルとコマンド。
- `/var`: ログやデータベースなどの可変データ。
- `/tmp`: 一時ファイル。
- `/dev`: ハードウェアコンポーネントを表すデバイスファイル。

## **3. ターミナルとコマンドラインの使用**

ターミナルは Linux オペレーティングシステムと対話するための強力なツールです。さまざまなタスクを実行するためのコマンドを入力できます。

**ターミナルの開き方:**

- アクセスアドレス：http://192.168.42.1/#/terminal（デフォルトのユーザー名とパスワード：`recamera`）
- ssh [ツール](https://mobaxterm.mobatek.net/) を使用してリモートでログインします。
以下のコマンドを使用して、リモートで reCamera にアクセスできます:
```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

その後、```Enter``` を押すと、リモートで reCamera を操作できるようになります。

### 基本的なコマンドライン構造:

Linux のコマンドは一般的に以下の構造に従います:

```bash
command [options] [arguments]
```

例えば、`ls -l /home/recamera` は `/home/recamera` ディレクトリ内のすべてのファイルを長い形式で一覧表示します。

## **4. ユーザー recamera と root**

初めて reCamera を使用する際には、デフォルトの recamera パスワードをリセットします。このパスワードはターミナルへのログインにも使用されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-1.png" /></div>

:::note

ターミナルでパスワードを入力すると、内容は表示されません。パスワードを入力した後に `Enter` を押して実行してください。

:::

特定の操作で権限が不足する問題が発生する場合があります。その場合、コマンドを実行する前に `sudo` を追加する必要があります。または、`root` ユーザーに切り替えてシステム内のすべてのコマンドを実行します。

root ユーザーにはデフォルトでパスワードが設定されていません。以下のコマンドを使用してパスワードを設定します。

- `sudo passwd root`: ユーザーのパスワードを変更する
- `su root`: root ユーザーに切り替える

:::note

root ユーザーはシステム関連のファイルを変更できるため、システム障害を引き起こす可能性があります。操作は慎重に行ってください。

:::

## **5. 基本的なLinuxコマンド**

以下は基本的なコマンドとその使用方法です：

### ファイルとディレクトリ管理:

- `pwd`: 現在の作業ディレクトリを表示します。
- `ls`: 現在のディレクトリ内のファイルとディレクトリを一覧表示します。
- `cd [directory]`: 現在のディレクトリを変更します。
- `mkdir [directory]`: 新しいディレクトリを作成します。
- `rm [file]`: ファイルを削除します。
- `rmdir [directory]`: 空のディレクトリを削除します。

### ファイルの権限と所有権:

- `chmod [permissions] [file]`: ファイルの権限を変更します。
- `chown [owner] [file]`: ファイルの所有者を変更します。

### ファイル操作:

- `cp [source] [destination]`: ファイルまたはディレクトリをコピーします。
- `mv [source] [destination]`: ファイルまたはディレクトリを移動または名前変更します。
- `cat [file]`: ファイルの内容を表示します。
- `nano [file]`: テキストエディタ（Nano）でファイルを開きます。

### システム情報:

- `top`: リアルタイムのシステムプロセスとリソース使用状況を表示します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-2.png" /></div>
- `df`: ディスクスペースの使用状況を表示します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-3.png" /></div>
- `free`: メモリ使用状況を表示します。
- `uname -r`: カーネルバージョンを表示します。

## 6. ファイル転送

Linuxでは、ローカルネットワークやインターネットを介してシステム間でファイルを転送するためのいくつかの方法が提供されています。以下は、Linuxで一般的に使用されるファイル転送ツールとプロトコルです。

### **SCP（Secure Copy Protocol）の使用**

SCPは、ローカルホストとリモートホスト間、または2つのリモートホスト間でファイルを安全にコピーするための方法です。

#### 基本的なSCPコマンド:

- ローカルからリモートへファイルをコピー:

  ```bash
  scp [file] username@remote_host:/path/to/destination
  ```

- リモートからローカルへファイルをコピー:

  ```bash
  scp username@remote_host:/path/to/file /local/destination
  ```

- ディレクトリをコピー（再帰的コピーには`-r`フラグを使用）:

  ```bash
  scp -r [directory] username@remote_host:/path/to/destination
  ```

#### 例:

ローカルマシンからリモートサーバーにファイルをコピーする場合:

```bash
scp myfile.txt recamera@192.168.1.100:/home/recamera/
```

### **SFTP（Secure File Transfer Protocol）の使用**

SFTPは、SSHを介して動作するもう1つの安全なファイル転送方法で、リモートサーバー上のファイルを対話的に管理できます。

#### 基本的なSFTPコマンド:

1. SFTPセッションを開始:

   ```bash
   sftp username@remote_host
   ```

2. 接続後、以下のコマンドを使用:

   - `ls`: リモートディレクトリ内のファイルを一覧表示します。
   - `cd [directory]`: リモートディレクトリを変更します。
   - `get [file]`: リモートサーバーからローカルマシンにファイルをダウンロードします。
   - `put [file]`: ローカルマシンからリモートサーバーにファイルをアップロードします。
   - `exit`: SFTPセッションを終了します。

#### 例:

リモートサーバーにファイルをアップロードする場合:

```bash
sftp recamera@192.168.42.1
sftp> put myfile.txt /home/user/Documents/
```

## **7. ハードウェアコマンド**

recameraデバイスのハードウェアを制御する方法については、[こちらのドキュメント](https://wiki.seeedstudio.com/ja/recamera_hardware_and_specs/#hardware-interface)を参照してください。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>