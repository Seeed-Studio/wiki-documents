---
description: Docker上でのPlex Media Server
title: Plex Media Server
keywords:
- ソフトウェア OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/OpenWrt-Plex-Media-Server-on-Docker
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/thumb-1.png" alt="pir" width="1000" height="auto"/></p>

このガイドでは、Seeed OpenWrtファームウェア上でDockerコンテナとしてPlex Media Serverをセットアップする方法を説明します。Plex Media Serverを使用することで、世界中どこからでもローカルメディアファイルをストリーミングできます！ここでは、OpenWrtを[ODYSSEY – X86 Board](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)または[Raspberry Pi Compute Module 4用デュアルギガビットイーサネットキャリアボード](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html)で実行できます。

**注意:** このガイドを進める前に、[OpenWrtの始め方ガイド](https://wiki.seeedstudio.com/ja/OpenWrt-Getting-Started)を必ず確認してください。

## Dockerとは？

[Docker](https://docs.docker.com/)は、アプリケーションの開発、配布、実行のためのオープンプラットフォームです。Dockerは、コンテナと呼ばれる緩やかに隔離された環境でアプリケーションをパッケージ化して実行する機能を提供します。この隔離とセキュリティにより、ホスト上で多数のコンテナを同時に実行することが可能です。コンテナは軽量で、アプリケーションの実行に必要なすべてを含んでいるため、ホストに現在インストールされているものに依存する必要がありません。作業中にコンテナを簡単に共有でき、共有相手が同じ方法で動作するコンテナを確実に受け取ることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width="200" height="auto"/></p>

## Plex Media Serverとは？

[Plex Media Server](https://www.plex.tv)は、1つのデバイスに保存された音楽、写真、動画を他の多くのデバイスでアクセスできるツールです。Plex Media Serverソフトウェアは、Windows、Mac、Linuxコンピュータ、ネットワーク接続ストレージ（NAS）デバイス、さらにはルーターにインストールすることができます。Plexアプリを使用して、インターネット経由でPlex Media Serverに保存されたすべてのメディアファイルをリモートでストリーミングし、世界中どこからでもアクセスできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

## Docker上のPlex Media Server

それでは、OpenWrt上でDockerコンテナとしてPlex Media Serverを実行する手順を見ていきましょう。

### Plexアカウントを作成する

まず、Plexアカウントを作成する必要があります。

- **ステップ1.** [このリンク](https://www.plex.tv)をクリックしてPlexのウェブサイトにアクセスします。

- **ステップ2.** **Sign Up**をクリックして新しいPlexアカウントを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-sign-up.jpg" alt="pir" width="1000" height="auto"/></p>

### メディアを保存するための外部ストレージを接続する

次に、X86およびCM4ボードのストレージを拡張するために外部ストレージドライブを接続し、すべてのメディアを保存できるようにします。

ODYSSEY - X86J4125には以下のようなストレージオプションがあります：

- PCIe SSD
- SATA SSD
- SATA HDD
- Micro-SDカード
- USBフラッシュドライブ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width="650" height="auto"/></p>

Raspberry Pi CM4用デュアルギガビットイーサネットキャリアボードには以下のようなストレージオプションがあります：

- USBフラッシュドライブ
- Micro-SDカード
- 9ピンヘッダーを介したUSB拡張

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/cm4-storage-2.jpg" alt="pir" width="1000" height="auto"/></p>

上記のストレージオプションを参考にして、任意の外部ストレージを接続してください。

### OpenWrtで外部ストレージをマウントする

外部ストレージデバイスを接続した後、それをマウントして使用できるようにします。

- **ステップ1.** ウェブブラウザを開き、OpenWrtデバイスにログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Luci.png" alt="pir" width="1000" height="auto"/></p>

**注意:** 以前に**192.168.2.1**をOpenWrtにログインするためのIPアドレスとして設定しました。このIPアドレスをウェブブラウザに入力してください。

- **ステップ2.** `System > Disk Man`に移動すると、OpenWrtデバイスに接続されたストレージドライブが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Disk-man-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ3.** 接続されたストレージドライブの下で、**EDIT**をクリックします。

- **ステップ4.** **Partitions Info**の下で、パーティションの横にある**REMOVE**をクリックしてすべてのパーティションを削除します。

- **ステップ5.** **Device Info**の下で、**Partition Table**に**GPT**を選択します。

- **ステップ6.** **Partitions Info**の下で、**NEW**をクリックしてパーティションを作成します。

- **ステップ7.** 新しく作成したパーティションの下で、**FORMAT**をクリックし、**ext4**を選択して**FORMAT**をクリックしてパーティションをフォーマットします。

- **ステップ8.** 再度`System > Disk Man`に移動します。

- **ステップ9.** **Mount Point**の下で、先ほど作成したパーティションを選択します。

- **ステップ10.** **File system**は**auto**のままにします。

- **ステップ11.** **Mount Options**の下で、**rw**と入力してこのパーティションへの読み取りおよび書き込みアクセスを許可します。

- **ステップ12.** **Mount Point**の下で**/plex**と入力し、**MOUNT**をクリックしてパーティションをマウントします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/disk-mount-1.png" alt="pir" width="1000" height="auto"/></p>

### Plex Media Server Dockerコンテナを作成する

次に、Plex Media Server Dockerコンテナを作成します。

- **ステップ1.** OpenWrt Luciインターフェースで、`Docker > Images`に移動します。

- **ステップ2.** **Pull Image**の下で**linuxserver/plex**と入力し、**PULL**をクリックしてPlex Media Server Dockerイメージをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-image.png" alt="pir" width="1000" height="auto"/></p>

**注意:** 画像がダウンロードされるまで数秒待ってください。

- **ステップ 3.** `Docker > Containers` に移動し、**ADD** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-add.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** **COMMAND LINE** をクリックし、以下を入力してください：

```sh
docker run \
-d \
--name plex \
--network=host \
-e TZ=<タイムゾーンを入力> \
-e PLEX_CLAIM=<claimTokenを入力> \
-v /plex/database:/config \
-v /plex/temp:/transcode \
-v /plex/media:/data \
linuxserver/plex
```

**注意:** **タイムゾーン**を取得するには、[このリンク](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)を訪問し、**TZデータベース名**をコピーしてください。**claimToken**を取得するには、[このリンク](#www.plex.tv/claim)を訪問し、トークンをコピーして貼り付けてください。

- **ステップ 5.** 最後に **SUBMIT** をクリックします。

### Plex Media Server の実行とセットアップ

- **ステップ 1.** コンテナがリストに表示されます。**チェックボックス**をクリックし、**START** をクリックしてコンテナを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-start.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 2.** **192.168.2.1:32400/web** を入力して Plex Media Server の初期セットアップを開きます。

**注意:** 32400 は Plex Docker コンテナが実行されているポートです。

- **ステップ 3.** **サーバー名**を入力し、**NEXT** をクリックします。

- **ステップ 4.** **Organize Media** の下で **ADD LIBRARY** をクリックします。

- **ステップ 5.** **ライブラリタイプ**を選択し、**NEXT** をクリックします。

- **ステップ 6.** **BROWSE FOR MEDIA FOLDER** をクリックし、**data** フォルダを選択して **ADD LIBRARY** をクリックします。

**注意:** 以前に設定したように、Plex コンテナ内の **data** フォルダは OpenWrt の **/plex/media** フォルダとリンクされています。

- **ステップ 7.** **NEXT** をクリックし、**DONE** をクリックして初期セットアップを完了します。

これで Plex Media Server のユーザーインターフェースが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-ui.png" alt="pir" width="1000" height="auto"/></p>

### Plex ディレクトリを PC にマウントしてメディアを転送する

外部ストレージを以前にマウントした後、**/plex** ディレクトリを PC にマウントして簡単にアクセスできるようにします。

- **ステップ 1.** OpenWrt Luci インターフェースで `Services > Network Shares` に移動します。

- **ステップ 2.** **Shared Directories** の下で **ADD** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/network-shares.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** 以下のように行を記入してください：

        - name: Plex 
        - Path: /plex
        - Browse-able: チェック
        - Force Root: チェック
        - Allow guests: チェック
        - Create mask: 0666
        - Directory mask: 0777

**注意:** **name** フィールドは任意の名前を指定できます。**Force Root** はこのフォルダへのルートアクセスを許可するために有効にします。

- **ステップ 4.** **SAVE** をクリックし、次に **SAVE & APPLY** をクリックします。

- **ステップ 5.** PC の **ファイルエクスプローラー** に移動し、**ネットワーク** をクリックします。

- **ステップ 6.** `OpenWrt > plex > media` に移動し、このディレクトリ内にすべてのメディアをコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/PC-shares.png" alt="pir" width="1000" height="auto"/></p>

### Plex クライアントアプリケーションでメディアを再生する

これで Plex クライアントアプリケーションを使用して Plex Media Server 内のすべてのメディアを視聴できます。Plex アプリはスマートフォン、PC、スマートテレビなどのさまざまなデバイスにインストールできます。

[このリンク](https://www.plex.tv/media-server-downloads/#plex-app)を訪問して、対応デバイスを確認し、それらに Plex アプリをインストールしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-client.jpg" alt="pir" width="1000" height="auto"/></p>

これで Plex クライアントアプリに移動し、ログインして Plex Media Server に保存された映画、音楽、写真、その他のメディアをすべてストリームできます！

### 普通のテレビをスマートテレビに変えて Plex を実行する

自宅でスマートテレビを使用して Plex Media Server から映画などのメディアをストリームするのは非常に便利です。スマートテレビが必要なのは、テレビにアプリストアがある場合に Plex アプリをインストールできるためです。しかし、普通のテレビしかない場合は、Raspberry Pi を使用してスマートテレビに変えることができます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" alt="pir" width="1000" height="auto"/></p>

[このリンク](https://pimylifeup.com/raspberry-pi-android-tv-lineageos)を訪問して詳細を学んでください！

## リソース

- **[ウェブページ]** [Docker公式ドキュメント](https://docs.docker.com)

- **[ウェブページ]** [Docker Hub](https://hub.docker.com)

- **[ウェブページ]** [Plex Media Server](https://www.plex.tv)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>