---
description: LinkStar、Grocy、BookStackをオフィスに統合するためのガイド
title: LinkStar、Grocy、BookStackをオフィスに統合するためのガイド
keywords:
  - LinkStar
  - 初めての設定
  - Bookstack
  - Grocy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/grocy-bookstack-linkstar
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


# 管理を掌握する：LinkStar、Grocy、BookStackを活用したオフィス管理のためのセルフホストソリューション
LinkStarルーターを活用したセルフホスト型オフィスサーバーにGrocyとBookStackを統合することで、効率的で整理された運用を実現する魅力的なソリューションが提供されます。Grocyを使用することで、企業は食料品、買い物リスト、タスクを効果的に管理し、プロセスを合理化し、無駄を削減できます。一方、BookStackは、コラボレーション、知識共有、重要な情報への簡単なアクセスを促進する集中型ドキュメントプラットフォームを提供します。これらのアプリケーションをLinkStarルーター上でホスティングすることで、企業はデータの管理を強化し、セキュリティを向上させ、外部サービスへの依存を排除できます。このセルフホスト型セットアップにより、オフィスはワークフローを最適化し、生産性を向上させ、構造化された生産的な作業環境を構築することができます。本ブログ記事では、LinkStarを活用したオフィスサーバー内でGrocyとBookStackを統合する重要性について掘り下げ、その利点を探り、この組み合わせがどのようにオフィス管理を革新するかを紹介します。

## Dockerとは？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/)は、軽量で隔離されたコンテナ内でアプリケーションのデプロイと管理を自動化するためのオープンソースプラットフォームです。コンテナは、アプリケーションとその依存関係、ライブラリ、設定ファイルをパッケージ化した自己完結型のユニットであり、異なる環境間で一貫して動作することを可能にします。Dockerは、アプリケーションの作成、配布、実行のプロセスを簡素化し、一貫性があり再現可能な方法でソフトウェアを開発およびデプロイすることを容易にします。Dockerを使用することで、開発者はアプリケーションをカプセル化し、異なるオペレーティングシステムやインフラストラクチャ設定でもスムーズに動作することを保証できます。これにより、ポータブルでスケーラブルなアプリケーションの構築、開発ワークフローの合理化、チームメンバー間の効率的なコラボレーションが可能になります。

## Portainerとは？
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/)は、Docker専用に設計された強力で直感的なオープンソースの管理インターフェースです。その使いやすいウェブベースのGUIにより、PortainerはDockerコンテナ、イメージ、ネットワーク、ボリュームのデプロイと管理を簡素化します。コンテナ環境の視覚的な表現を提供し、ユーザーは数回のクリックでコンテナを作成、開始、停止、削除することができます。リソース使用状況の監視、ログの表示、コンテナターミナルへのアクセスもPortainerインターフェース内で簡単に行えます。さらに、Portainerはロールベースのアクセス制御をサポートしており、ユーザー権限を細かく制御することができます。初心者から経験豊富なDockerユーザーまで、Portainerはコンテナ管理を合理化し、誰にとってもアクセスしやすく効率的なツールです。

## BookStackとは何ですか？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstackicon.png" alt="pir" width="200" height="auto"/></p>

[BookStack](https://www.bookstackapp.com/)は、ドキュメントやナレッジベースを作成・管理するために設計された、強力で使いやすいオープンソースプラットフォームです。その直感的なインターフェースにより、BookStackはチームや組織が情報を効率的に整理し共有することを可能にします。本は階層構造を持ち、コンテンツを本、章、ページに整理することで、情報の簡単なナビゲーションと取得を実現します。BookStackはリッチテキスト編集をサポートしており、ユーザーがコンテンツを効果的にフォーマットおよびスタイル設定することができます。また、画像埋め込み、バージョン管理、コラボレーションツールなどの機能を提供し、スムーズなチームワークと効率的な知識管理を促進します。内部ドキュメント、顧客サポート、教育目的など、BookStackは包括的なナレッジベースを作成・維持するプロセスを簡素化する汎用性の高い広く使用されているソリューションです。

## Grocyとは何ですか？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy_logo.svg" alt="pir" width="200" height="auto"/></p>

[Grocy](https://grocy.info/)は、食品、家庭用品、タスクを管理するためのセルフホスト型オープンソースのWebアプリケーションです。食品在庫の追跡、買い物リストの作成、レシピの管理、有効期限の管理などの機能を提供します。

## LinkStar OpenWRTルーターでDocker環境をセットアップする

LinkStarのDockerインストールはデフォルトで約250MBのストレージ容量を持っていますが、これはイメージをインストールするには十分ではない場合があります。そのため、Dockerにより多くのスペースを割り当てる必要があります。[PlexメディアサーバーWiKi](https://wiki.seeedstudio.com/ja/plex_media_server/)と同様に手順を実行する必要があります。すでに実行済みの場合、このステップはスキップしてください。

**注意:** このガイドを進める前に、[LinkStar OpenWRTルーターでDocker環境をセットアップする](https://wiki.seeedstudio.com/ja/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router)手順を必ず確認してください。

## Portainerコンテナをインストールする
このトピックはLinkStarへのWordPress統合で議論されています。そのため、Portainerを初めてインストールする場合はこれらの手順を実行する必要があります。[Portainerコンテナのインストール](https://wiki.seeedstudio.com/ja/wordpress_linkstar/#install-portainer-container)のリンクをご覧ください。

## BookStackをインストールする
### ステップ01: 新しいスタックを作成する

アプリケーション使用の文脈では、スタックは関連するサービスのセットを指します。そのため、最初のステップは新しいスタックを確立することです。サイドバーに移動し、**Stacks**オプションを見つけます。それをクリックして**Add Stack**を選択して進めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack1.PNG" alt="pir" width="600" height="auto"/></p>

### ステップ02: Webエディターを使用してBookStackをインストールする

このステップでは、スタック名を指定し、以下のdocker-compose形式のテキストをWebエディターにコピーする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack2.PNG" alt="pir" width="600" height="auto"/></p>

```sh
---
version: "2"
services:
  bookstack:
    image: lscr.io/linuxserver/bookstack
    container_name: bookstack
    environment:
      - APP_URL=http://192.168.100.1:6875
      - DB_HOST=bookstack_db
      - DB_PORT=3306
      - DB_USER=bookstack
      - DB_PASS=yourdbpass
      - DB_DATABASE=bookstackapp
    volumes:
      - ./bookstack_app_data:/config
    ports:
      - 6875:80
    restart: unless-stopped
    depends_on:
      - bookstack_db
  bookstack_db:
    image: lscr.io/linuxserver/mariadb
    container_name: bookstack_db
    environment:
      - MYSQL_ROOT_PASSWORD=yourdbpass
      - TZ=Asia/Colombo
      - MYSQL_DATABASE=bookstackapp
      - MYSQL_USER=bookstack
      - MYSQL_PASSWORD=yourdbpass
    volumes:
      - ./bookstack_db_data:/config
    restart: unless-stopped
```

提供されたdocker-composeファイルには、BookStackアプリケーション用のコンテナとSQLデータベース用のコンテナの2つの異なるDockerコンテナが含まれています。これはBookStackをインストールするための推奨方法です。ただし、進める前にいくつか重要な変更を行う必要があります。

まず、「yourappurl」をBookStackアプリケーションにアクセスするために使用する希望のURLに置き換えます。また、「yourdbpass」を希望するパスワードに変更します。両方のコンテナで同じパスワードを使用することが重要です。

最後に、「TZ」変数を特定の[タイムゾーン](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)に合わせて調整してください。

これらの必要な変更を行うことで、BookStackインストール用のdocker-composeファイルを正常に構成できます。

ページの下部に**Deploy Stack**ボタンが表示されるので、それをクリックしてください。

### ステップ03: BookStackへのアクセス
デプロイプロセスが完了すると、新しいスタックが作成されていることが確認できます。この場合、スタック名はbookstackで、それをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack3.PNG" alt="pir" width="600" height="auto"/></p>

次に、2つのコンテナが稼働していることが確認でき、ポート番号は6875です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack4.PNG" alt="pir" width="600" height="auto"/></p>

次に、Webブラウザを開き、192.168.100.1:6875を入力します。すると、ログインページに移動します。

:::note

メール: admin@admin.com

パスワード: password

:::

これでBookStackのホームページに正常にアクセスできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack5.PNG" alt="pir" width="600" height="auto"/></p>

## Grocy をインストールする

### ステップ 01: 新しいスタックを作成する

BookStack のインストールの最初のステップと同様に、新しいスタックを作成する必要があります。新しいスタックの作成方法については、上記のガイドラインを参照してください。

### ステップ 02: Web エディタを使用して Grocy をインストールする

BookStack のインストールの 2 番目のステップと同様に、スタック名を指定する必要があります。その後、以下の docker-compose テキストを Web エディタにコピー＆ペーストしてください。

```sh
---
version: "2.1"
services:
  grocy:
    image: lscr.io/linuxserver/grocy
    container_name: grocy
    environment:
      - TZ=Asia/Colombo
    volumes:
      - /grocy/config:/config
    ports:
      - 9283:80
    restart: unless-stopped
```

ページの下部に **Deploy Stack** ボタンが表示されるので、それをクリックしてください。

### ステップ 03: Grocy にアクセスする

デプロイプロセスが完了すると、新しいスタックが作成されたことが確認できます。この場合、スタック名は "grocy" です。それをクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy1.PNG" alt="pir" width="600" height="auto"/></p>

次に、Grocy コンテナが実行中であることと、ポート番号が 9283 であることを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy2.PNG" alt="pir" width="600" height="auto"/></p>

次に、Web ブラウザを開き、`192.168.100.1:9283` と入力してください。ログインページに移動します。

:::note

ユーザー名: admin

パスワード: admin

:::

これで、Grocy のホームページに正常にアクセスできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy3.PNG" alt="pir" width="600" height="auto"/></p>

## リソース

- **[Web ページ]** [Docker 公式ドキュメント](https://docs.docker.com)

- **[Web ページ]** [Docker Hub](https://hub.docker.com)

- **[Web ページ]** [Portainer](https://www.portainer.io/)

- **[Web ページ]** [BookStack](https://www.bookstackapp.com/)

- **[Web ページ]** [Grocy](https://grocy.info/)

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>