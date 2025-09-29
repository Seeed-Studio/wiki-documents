---
description: ODYSSEY - X86J41x5
title: Jellyfin メディアサーバーのインストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jellyfin-on-Docker-Ubuntu-X86
last_update:
  date: 05/15/2025
  author: w0x7ce

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/thumb.png" alt="pir" width={1000} height="auto" /></p>

このガイドでは、[ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)上で動作するUbuntuシステムにDockerコンテナとしてJellyfinメディアサーバーをセットアップする方法を説明します。Jellyfinを使用することで、世界中どこからでもローカルメディアファイルをストリーム配信できます！

## Dockerとは？

[Docker](https://docs.docker.com/)は、アプリケーションを開発、配布、実行するためのオープンプラットフォームです。Dockerは、コンテナと呼ばれる緩やかに隔離された環境でアプリケーションをパッケージ化して実行する機能を提供します。この隔離とセキュリティにより、ホスト上で多数のコンテナを同時に実行することが可能です。コンテナは軽量で、アプリケーションの実行に必要なすべてを含んでいるため、ホストに現在インストールされているものに依存する必要はありません。コンテナを簡単に共有でき、共有相手が同じコンテナを同じ方法で動作させることが保証されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width={200} height="auto" /></p>

## Jellyfin メディアサーバーとは？

[Jellyfin メディアサーバー](https://www.plex.tv)は、1つのデバイスに保存された音楽、写真、動画を他の多くのデバイスでアクセスできるようにするツールです。Jellyfinソフトウェアは、Windows、Mac、Linuxコンピュータ、ネットワーク接続ストレージ（NAS）デバイス、さらにはルーターにもインストールできます。Jellyfinメディアサーバーに保存されたすべてのメディアファイルをインターネット経由でリモートでストリーム配信し、世界中どこからでもJellyfinアプリを使用してアクセスできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/23.png" alt="pir" width={300} height="auto" /></p>

## 始めに

それでは、UbuntuシステムにインストールされたDockerコンテナとしてJellyfinメディアサーバーを実行するプロセスを見ていきましょう。

### X86にUbuntuをインストールする

[このWiki](https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-OS)に従ってODYSSEY-X86にUbuntuをインストールしてください。最新のUbuntu OSは[こちら](https://ubuntu.com/download/desktop)からダウンロードできます。

### UbuntuにDockerをインストールする

- **ステップ 1.** 既存のパッケージリストを更新する

```sh
sudo apt update
```

- **ステップ 2.** 必要な前提パッケージをインストールする

```sh
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

- **ステップ 3.** Ubuntuシステムに公式DockerリポジトリのGPGキーを追加する

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- **ステップ 4.** APTソースにDockerリポジトリを追加する

```sh
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- **ステップ 5.** Dockerをインストールする

```sh
sudo apt install docker-ce -y
```

- **ステップ 6.** Dockerがインストールされて既に実行されていることを確認する

```sh
sudo systemctl status docker
```

以下のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/1.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 7.** デフォルトでは、dockerコマンドはrootユーザーまたはdockerグループのユーザーのみが実行できます。そのため、ユーザー名をDockerグループに追加します

```sh
sudo usermod -aG docker ${USER}
```

- **ステップ 8.** 新しいグループメンバーシップを適用する

```sh
su - ${USER}
```

### DockerでJellyfinメディアサーバーをインストールする

- **ステップ 1.** 最新のJellyfinコンテナイメージをダウンロードする

```sh
docker pull jellyfin/jellyfin
```

- **ステップ 2.** 設定とキャッシュデータの永続ストレージを作成する

```sh
docker volume create jellyfin-config
docker volume create jellyfin-cache
```

- **ステップ 3.** メディアファイルを保存するフォルダを作成する

```sh
# 例として
mkdir /home/username/movies
```

**注意:** ここで **username** はUbuntuシステム上のユーザー名に置き換えてください

- **ステップ 4.** コンテナを作成して実行する

```sh
docker run -d \
 --name jellyfin \
 --net=host \
 --volume jellyfin-config:/config \
 --volume jellyfin-cache:/cache \
 --mount type=bind,source=/path/to/media,target=/media \
 --restart=unless-stopped \
 jellyfin/jellyfin
```

**注意:** ここで **/path/to/media** は先ほど作成した **/home/username/movies** ディレクトリです

### Jellyfinメディアサーバーの初期設定

- **ステップ 1.** ODYSSEY-X86またはODYSSEY-X86と同じネットワーク上の他のPCからウェブブラウザで以下を入力します

```sh
<IP_address_of_ODYSSEY-X86>:8096
```

```sh
# 例として:
192.168.1.133:8096
```

- **ステップ 2.** Jellyfinセットアップホームページで希望の言語を選択し、**Next**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/2.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 3.** 管理者アカウントの**ユーザー名**、**パスワード**を入力し、**Next**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/3.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 4.** **Add Media Library**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/4.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5.** ドロップダウンメニューから**コンテンツタイプ**を選択し、表示名を入力します。ここで表示名はコンテンツタイプと同じものを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/5.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 6.** **Folders**の横にある**+**記号をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/6.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 7.** Dockerコンテナ内の**/media**フォルダをクリックし、**OK**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/7.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/8.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 8.** 他の設定をデフォルトのままにして、再度 **OK** をクリックします。必要に応じて他の設定を変更することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/9.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 9.** **Next** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/10.png" alt="pir" width={1000} height="auto" /></p>

**注意:** **Next** をクリックする前に、TV 番組などの他のメディアライブラリを追加することもできます。**Add Media Library** をクリックして、同じ手順を繰り返してください。

- **ステップ 10.** 必要に応じて設定を変更し、次の画面で **Next** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/11.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/12.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 11.** 最後に **Finish** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/13.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 12.** 先ほど作成した管理者アカウントでサインインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/14.png" alt="pir" width={1000} height="auto" /></p>

すると、Jellyfin のホームページに移動します！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/15.png" alt="pir" width={1000} height="auto" /></p>

### 映画/TV 番組を追加する

ここでは、Jellyfin で再生できるようにいくつかの映画を追加します。

- **ステップ 1.** すべての映画ファイルを、以前作成したディレクトリ (/home/username/movies) にコピー＆ペーストします。

- **ステップ 2.** Jellyfin のホームページに戻り、3 つのドットをクリックして **Refresh metadata** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/16.png" alt="pir" width={400} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/17.png" alt="pir" width={400} height="auto" /></p>

- **ステップ 3.** デフォルトの **Refresh mode** をそのままにして **Refresh** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/18.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 4.** **Movies** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/20.png" alt="pir" width={1000} height="auto" /></p>

すると、すべての映画が読み込まれたことが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/19.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5.** 映画をクリックし、**Play** ボタンをクリックして映画の再生を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/21.png" alt="pir" width={1000} height="auto" /></p>

### Jellyfin クライアントアプリでメディアを再生する

Jellyfin クライアントアプリを使用して、Jellyfin メディアサーバー内のすべてのメディアを視聴できます。Jellyfin アプリは、スマートフォン、PC、スマート TV などのさまざまなデバイスにインストールできます。

[Jellyfin クライアントアプリの対応デバイス一覧はこちら](https://jellyfin.org/clients) をご覧ください。対応デバイスにアプリをインストールできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/22.png" alt="pir" width={1000} height="auto" /></p>

Jellyfin クライアントアプリに移動し、ログインして、Jellyfin メディアサーバーに保存されているすべてのメディアをストリーミングしましょう！

### 外部ストレージを接続してメディアを保存する

X86 に外部ストレージドライブを接続してストレージを拡張し、すべてのメディアを保存することもできます。

ODYSSEY - X86J4125 には以下のようなストレージオプションがあります：

- PCIe SSD
- SATA SSD
- SATA HDD
- Micro-SD カード
- USB フラッシュドライブ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

上記のストレージオプションを参考にして、お好みの外部ストレージを接続してください。

## 普通のテレビをスマートテレビに変えて Jellyfin を実行する

自宅でスマートテレビを使用して Jellyfin Media Server から映画などのメディアをストリーミングするのは非常に便利です。スマートテレビが必要なのは、テレビにアプリストアがあれば Jellyfin アプリをインストールできるからです。しかし、普通のテレビしか持っていない場合でも、Raspberry Pi を使用してスマートテレビに変えることができます！

[こちらのリンク](https://pimylifeup.com/raspberry-pi-android-tv-lineageos)をクリックして詳細を確認してください！

## コミュニティ

<iframe width={560} height={315} src="https://www.youtube.com/embed/4VkY1vTpCJY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## リソース

- **[ウェブページ]** [Docker 公式ドキュメント](https://docs.docker.com)

- **[ウェブページ]** [Docker Hub](https://hub.docker.com)

- **[ウェブページ]** [Jellyfin Media Server](https://jellyfin.org)

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>