---
description: ホームエンターテインメントの未来、LinkStar-H68KルーターとPlexメディアサーバー
title: ホームエンターテインメントの未来、LinkStar-H68KルーターとPlexメディアサーバー
keywords:
  - LinkStar
  - 初めての設定
  - plexメディアサーバー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/plex_media_server
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


# ホームエンターテインメントの未来；LinkStar-H68KルーターとPlexメディアサーバー

ルーターをコンパクトでありながら強力なエンターテインメントメディアサーバーに変えるという画期的なアイデアを発見してください。一つのデバイスに統合された無限のエンターテインメントオプションへのゲートウェイを想像してみてください。この革新的な技術は、従来のネットワークデバイスの能力を超え、日常生活を豊かにし、カフェやレストランのような小規模施設を革命的に変え、顧客に素晴らしい体験を提供します。魅力的な可能性の世界に飛び込み、あらゆる瞬間を向上させ、比類のないエンターテインメントを保証する準備をしてください。このような驚くべきルーター変換を求めている場合に考慮すべき潜在的な用途と要因を以下に示します。

## Dockerとは？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/)は、開発者が軽量で隔離されたコンテナ内でアプリケーションの展開と管理を自動化できるオープンソースプラットフォームです。コンテナは、アプリケーションとその依存関係、ライブラリ、設定ファイルをパッケージ化した自己完結型のユニットであり、異なる環境で一貫して動作することを可能にします。Dockerは、アプリケーションの作成、配布、実行プロセスを簡素化し、一貫性と再現性のある方法でソフトウェアを開発および展開することを容易にします。Dockerを使用すると、開発者はアプリケーションをカプセル化し、異なるオペレーティングシステムやインフラストラクチャ設定でスムーズに動作することを保証できます。これにより、ポータブルでスケーラブルなアプリケーションの構築、開発ワークフローの効率化、チームメンバー間の効率的なコラボレーションが可能になります。

## Plexとは？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

[Plexメディアサーバー](https://www.plex.tv)は、ユーザーが個人のメディアライブラリを整理、アクセス、ストリーミングできる強力なメディア管理およびストリーミングプラットフォームです。Plexメディアサーバーを使用すると、ユーザーは映画、テレビ番組、音楽、写真などのコレクションを簡単に集中管理し、家庭内ネットワーク内で統一されたメディアハブを作成できます。Plexはメディアファイルを自動的に整理およびインデックス化し、説明、アートワーク、字幕などのメタデータを取得して、視覚的に魅力的で使いやすいインターフェースを提供します。サーバーはスマートフォン、タブレット、スマートテレビ、ストリーミングデバイス用の専用Plexアプリを通じてアクセス可能で、家庭内およびリモートでのメディアコンテンツのシームレスなストリーミングを可能にします。Plexメディアサーバーは、ペアレンタルコントロール、マルチユーザーサポート、トランスコーディング機能などの強力な機能も提供し、異なるデバイスやネットワーク条件での互換性と最適なストリーミング品質を保証します。全体として、Plexメディアサーバーは、ユーザーが個人のメディアコレクションをいつでもどこでも楽しむことを可能にし、包括的で没入感のあるエンターテインメント体験を提供します。

## LinkStar OpenWRTルーターでDocker環境をセットアップする

- **ステップ 01** OpenWRTをLinkStarにインストールする

LinkStarデバイスにOpenWRTをインストールするには、LinkStar Wikiに記載されている包括的なインストールガイドを参照してください。このチュートリアルでは、OpenWRTシステムを利用し、LinkStarをソフトルーターとして機能させながらPlexコンテナをインストールする方法を説明します。
以下のオプションのいずれかを選択して、LinkStarにOpenWRTをインストールしてください：
1. TFカードにOpenWRTをフラッシュする。[こちらがチュートリアルです](https://wiki.seeedstudio.com/ja/linkstar-install-system/#flash-openwrt-to-the-tf-card)
2. eMMCにOpenWRTをフラッシュする。[こちらがチュートリアルです](https://wiki.seeedstudio.com/ja/linkstar-install-system/#flash-openwrt-to-emmc)

- **ステップ 02** LinkStarネットワークの設定

LinkStarデバイスのネットワーク設定を開始するには、ネットワークケーブルを使用してコンピュータに接続します。次に、IPアドレス192.168.100.1をウェブブラウザに入力してOpenWRTの管理画面にアクセスします。初期アカウントのパスワードは以下の通りです：

```
アカウント: root
パスワード: password
```
ログイン後、LinkStarデバイスのインターネット接続を確立する必要があります。
ネットワークケーブルまたはWiFiを使用して接続することができます。セットアップと好みに応じて接続方法を選択してください。ここでは無線接続方法を使用しました。無線ネットワークを選択した後、パスフレーズを入力して保存し、適用します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img1.png"/></div>

- **ステップ 03** Dockerのストレージ容量を増やす

デフォルトでは、LinkStarにインストールされたDockerのストレージ容量は約250MBであり、イメージをインストールするには十分ではない場合があります。そのため、Dockerに必要な容量を確保するために、ストレージを増やす必要があります。
まず、OpenWRTの管理画面で「System」セクションに移動します。その後、「Disk Man」をクリックし、**EDIT**オプションを見つけます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img2.png"/></div>

**"END SECTOR"**列に、Dockerに割り当てる追加ストレージ容量の希望サイズを指定します。この例では、20GBのストレージを追加します。値を入力した後、**"NEW"**ボタンをクリックして新しいストレージ割り当てを作成します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img3.png"/></div>

ext4形式を選択し、次に「FORMAT」ボタンをクリックします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img4.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img5.png"/></div>

割り当てが完了すると、新しい20GBのスペースが追加されていることが確認できます。ただし、このスペースは現在未マウント状態であり、Dockerに関連付ける必要があります。
続行するには、OpenWRTの管理画面で「System」セクションに移動し、「Mount Points」を選択します。「Mount Point」セクションを探し、**"ADD"**ボタンをクリックします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img6.png"/></div>

作成した新しいスペースを選択します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img7.png"/></div>

マウントポイントの使用方法として**Docker data (/opt)**を選択します。「Enable this mount」のチェックボックスを忘れずにチェックし、**SAVE & APPLY**ボタンをクリックします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img8.png"/></div>

ストレージ拡張の設定を完了した後、変更を適用するためにLinkStarデバイスを再起動する必要があります。

再起動プロセスを開始するには、OpenWRTの管理画面で「System」セクションに移動し、「Reboot」を選択します。**"PERFORM REBOOT"**ボタンをクリックして再起動プロセスを開始します。OpenWRTが再起動するのを待ち、システムが準備完了したら再度ログインしてください。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img9.png"/></div>

## Plex Media Server Docker コンテナの作成

次に、Plex の Docker イメージを取得する必要があります。そのためには、この [リンク](https://hub.docker.com/r/linuxserver/plex) を訪問して詳細を確認してください。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img.PNG"/></div>

次に、Containers タブに移動し、追加ボタンをクリックします。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img2.png"/></div>

その後、入力フォームが表示されます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex3.PNG"/></div>

- **ステップ 1**: コンテナ名とネットワークの設定

        コンテナ名を "plex" に設定します。
        ネットワークモードを "host" に選択します。

- **ステップ 2**: 環境変数の設定

    提供された [リンク](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) にアクセスしてタイムゾーンを取得し、TZ データベース名をコピーします。
    以下の形式でタイムゾーンを設定します。
        
        TZ=&lt;タイムゾーンを入力&gt;

    提供された [リンク](https://www.plex.tv/claim/) にアクセスして claimToken を取得し、コピーして貼り付けます。
    以下の形式で claimToken を設定します。
    
         PLEX_CLAIM=&lt;claimToken を入力&gt;

- **ステップ 3**: バインドマウントの設定

 バインドマウントセクションで、以下の行を一つずつ追加します。

        /plex/database:/config
        /plex/temp:/transcode
        /plex/media:/data

- **ステップ 4**: 設定の送信

    コンテナ名、ネットワーク、環境変数、バインドマウントを設定した後、「Submit」ボタンをクリックして変更を保存します。
    
    これらの手順に従うことで、指定された設定で Plex コンテナを正常に構成できます。

## Plex Media Server の実行とセットアップ
- **ステップ 1**:

    Docker コンテナの下にコンテナ情報が表示されます。チェックボタンをクリックし、「Start」を押します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker 1.PNG"/></div>

- **ステップ 2**: Plex Media Server 初期セットアップを開く

    Web ブラウザでアドレス `192.168.2.1:32400/web` を入力します。これにより、Plex Media Server の初期セットアップページが開きます。なお、32400 は Plex Docker コンテナが実行されているポートです。

- **ステップ 3**: サーバー名を設定

    提供されたフィールドに希望するサーバー名を入力し、「NEXT」をクリックして進みます。

- **ステップ 4**: メディアライブラリの整理

    メディアライブラリの整理を開始するには、「ADD LIBRARY」ボタンをクリックします。

- **ステップ 5**: ライブラリタイプの選択

     映画、テレビ番組、音楽など、メディアに適したライブラリタイプを選択し、「NEXT」をクリックします。

- **ステップ 6**: メディアフォルダの追加

     「BROWSE FOR MEDIA FOLDER」をクリックしてデータフォルダを選択します。以前に Plex コンテナを構成したことで、このデータフォルダは OpenWrt 上の `/plex/media` フォルダにリンクされています。「ADD LIBRARY」をクリックして確認します。

- **ステップ 7**: セットアップの完了

     「NEXT」をクリックし、その後「DONE」をクリックして初期セットアッププロセスを完了します。

これで、Plex Media Server のユーザーインターフェースが表示され、メディアコレクションをシームレスにアクセスおよび管理できるようになります。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex interface.PNG"/></div>

## PCにPlexディレクトリをマウントしてメディアを転送する

- **ステップ 1.** OpenWrt Luciインターフェースで、`NAS > Network Shares > ADD`に移動します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS1.PNG"/></div>

- **ステップ 2.** 以下のように項目を記入します。

        - 名前: Plex 
        - パス: /plex
        - 閲覧可能: チェック
        - ゲストを許可: チェック
        - 作成マスク: 0666
        - ディレクトリマスク: 0777
- **ステップ 3.** **Save and apply**を押します。
- **ステップ 4.** Windowsエクスプローラーを開き、**ネットワークドライブの割り当て**をクリックし、`//192.168.100.1/plex`と入力します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS2.PNG"/></div>

- **ステップ 5.** お気に入りの映画や音楽をメディアフォルダに追加します。
- **ステップ 6.** 再度Plexメディアサーバーに移動し、**More**をクリックします。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS3.PNG"/></div>

- **ステップ 7.** 次に、これらの3つのドットをクリックし、**Scan Library Files**を選択します。これで、最近ライブラリに追加した映画や曲が表示されます。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS4.PNG"/></div>

メディアサーバーを導入することで、自宅や小規模なホテル、カフェなどで、ユーザーは自分自身、家族、ゲスト、顧客に優れたエンターテインメント体験を提供できます。これは、メディアストレージを一元化し、デバイスの煩雑さを軽減し、リモートアクセスやカスタマイズオプションを提供する、コスト効率の高いソリューションです。

## リソース

- **[ウェブページ]** [Docker公式ドキュメント](https://docs.docker.com)

- **[ウェブページ]** [Docker Hub](https://hub.docker.com)

- **[ウェブページ]** [Plex Media Server](https://www.plex.tv)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>