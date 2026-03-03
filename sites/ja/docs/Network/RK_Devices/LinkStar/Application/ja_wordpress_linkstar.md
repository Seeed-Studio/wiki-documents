---
description: Web開発を効率化する完璧なデュオ - LinkstarとWordPress
title: Web開発を効率化する完璧なデュオ - LinkstarとWordPress
keywords:
  - LinkStar
  - 初めての手順
  - WordPress
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/wordpress_linkstar
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


# Web開発を効率化する完璧なデュオ - LinkstarとWordPress
この情報満載のWikiへようこそ。ここではDockerを使用したWordPressのインストールプロセスと、WordPressダッシュボードへのアクセス方法について説明します。Linkstarの革新的な力を活用してローカルホストウェブサイトをカスタマイズし、顧客を魅了し、売上を向上させましょう。Linkstarの最先端機能を活用することで、比類のない成長、効率性、技術力を体験してください。今日、比類のない成功への第一歩を踏み出しましょう。

## Dockerとは？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/)は、開発者が軽量で隔離されたコンテナ内でアプリケーションの展開と管理を自動化できるオープンソースプラットフォームです。コンテナは、アプリケーションとその依存関係、ライブラリ、設定ファイルをパッケージ化した自己完結型のユニットであり、異なる環境でも一貫して動作します。Dockerはアプリケーションの作成、配布、実行プロセスを簡素化し、一貫性と再現性のある方法でソフトウェアを開発および展開することを容易にします。Dockerを使用することで、開発者はアプリケーションをカプセル化し、異なるオペレーティングシステムやインフラストラクチャ設定でもスムーズに動作することを保証できます。これにより、ポータブルでスケーラブルなアプリケーションの構築、開発ワークフローの効率化、チームメンバー間の効率的なコラボレーションが可能になります。

## Portainerとは？
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/)は、Docker専用に設計された強力で直感的なオープンソース管理インターフェースです。その使いやすいWebベースのGUIにより、PortainerはDockerコンテナ、イメージ、ネットワーク、ボリュームの展開と管理を簡素化します。コンテナ環境を視覚的に表現し、数クリックでコンテナの作成、開始、停止、削除を簡単に行うことができます。リソース使用状況の監視、ログの表示、コンテナターミナルへのアクセスもPortainerインターフェース内で簡単に行えます。さらに、Portainerは役割ベースのアクセス制御をサポートしており、ユーザー権限を細かく管理することができます。初心者から経験豊富なDockerユーザーまで、Portainerはコンテナ管理を効率化し、誰にとってもアクセス可能で便利なツールです。

## WordPressとは？
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/wordpress.png" alt="pir" width="200" height="auto"/></p>

[WordPress](https://wordpress.com/)は、世界中で数百万のウェブサイトを支える人気の高いオープンソースのコンテンツ管理システム（CMS）です。使いやすいインターフェースと豊富なテーマ、プラグイン、拡張機能のエコシステムを提供し、ユーザーが簡単にウェブサイトを作成およびカスタマイズできるようにします。WordPressを使用すると、ブログ投稿、ページ、画像、マルチメディアなど、さまざまな種類のコンテンツを簡単に公開および管理できます。その柔軟性と拡張性により、シンプルなブログから複雑なeコマースプラットフォームまで、幅広いウェブサイトに適しています。初心者から経験豊富なユーザーまで、WordPressはオンラインプレゼンスを構築および管理するための堅牢で多用途なプラットフォームを提供します。

## LinkStar OpenWRTルーターでDocker環境をセットアップする

デフォルトでは、LinkStarにインストールされたDockerのストレージ容量は約250MBであり、イメージをインストールするには十分でない場合があります。そのため、Dockerにより多くのスペースを割り当てて、要件を満たす必要があります。[PlexメディアサーバーWiKi](https://wiki.seeedstudio.com/ja/plex_media_server/)と同様の手順を実行してください。すでに実行済みの場合は、このステップをスキップしてください。

**注意:** このガイドを進める前に、[LinkStar OpenWRTルーターでDocker環境をセットアップする](https://wiki.seeedstudio.com/ja/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router)手順を必ず実行してください。

## Portainerコンテナをインストールする

### ステップ1: Puttyを開き、SSHでOpenWrtターミナルに接続する

インストールプロセスを開始するには、Puttyを開き、SSH接続を確立してOpenWrtターミナルにアクセスします。以下の詳細を入力してください：

:::note

ユーザー名: root

パスワード: password

:::

### ステップ2: Portainerをインストールする

以下のコマンドを使用してください。

```sh
docker pull portainer/portainer
``` 
次に、ターミナルで以下のコマンドを入力します。

```sh
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
``` 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer1.PNG" alt="pir" width="600" height="auto"/></p>

Docker-Containerの下でLuCiインターフェースが動作している状態で、実行中のコンテナを確認できます。ポート番号は9000です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer2.PNG" alt="pir" width="600" height="auto"/></p>

### ステップ3: Portainerにアクセスする
ウェブブラウザを開き、次のアドレスを入力してください：**192.168.100.1:9000**。

これにより、Portainerのホームページに移動します。続行するには、希望するユーザー名とパスワードを入力し、「ユーザーを作成」ボタンをクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer3.PNG" alt="pir" width="600" height="auto"/></p>

## WordPressをインストールする

### ステップ1: WordPressイメージのカスタムテンプレートを作成する

Portainerのホームページで、「App Templates」セクションに移動します。スクロールしてWordPressテンプレートを見つけたら、「Copy as Custom」をクリックして、WordPressインストール用のカスタマイズされた設定を作成します。これにより、特定の要件に応じて設定やオプションを調整できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer4.PNG" alt="pir" width="600" height="auto"/></p>

### ステップ2: テンプレートを修正する

WordPressテンプレートの「Copy as Custom」をクリックすると、カスタマイズされた設定のタイトルと説明を入力するフォームが表示されます。WordPressインストールの目的と性質を正確に表す適切なタイトルと説明を入力してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer5.PNG" alt="pir" width="600" height="auto"/></p>

以下に、WordPress用のdocker-compose.ymlスクリプトがあります。このファイルは、Docker環境内でWordPressアプリケーションを定義および構成する上で重要な役割を果たします。コンテナイメージ、環境変数、ネットワーク設定、ボリュームマッピング、サービス依存関係など、さまざまなパラメータを指定できます。

docker-compose.ymlファイルでアプリケーションの望ましい状態を定義することで、Dockerは相互接続されたコンテナを自動的に作成、起動、管理できます。これにより、さまざまな環境で一貫性のある再現可能なデプロイメントが保証されます。docker-compose.ymlスクリプトは、コンテナとその構成をオーケストレーションするための設計図として機能し、複雑なアプリケーションを効率的かつ簡単に管理およびスケールすることを可能にします。

**Services >>db>>imageの下で以下に変更してください：**

```sh
mysql/mysql-server:8.0
``` 
:::note

MYSQL_USER、MYSQL_PASSWORDなどの他のパラメータを変更することもできます。ただし、ここではそのままにしておきます。

:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer8.PNG" alt="pir" width="600" height="auto"/></p>

その後、ページの下部にある**Create custom template**を見つけてクリックしてください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer9.PNG" alt="pir" width="600" height="auto"/></p>

次に、カスタムテンプレート名が表示されたページにリダイレクトされます。それをクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer10.PNG" alt="pir" width="600" height="auto"/></p>

次に、以下のようなページにリダイレクトされ、**Deploy the Stack**を押します。デプロイメントが完了するまで数分待ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer11.PNG" alt="pir" width="600" height="auto"/></p>

次に、以下のようなページにリダイレクトされます。スタックリストが表示され、作成したスタックをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer12.PNG" alt="pir" width="600" height="auto"/></p>

これで、2つのコンテナが実行中であり、WordPressのポート番号が49153であることが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer13.PNG" alt="pir" width="600" height="auto"/></p>

## Wordpressへのアクセス
次に、ウェブブラウザを開き、Linkstarルーターとポートアドレスを入力します。例：**192.168.100.1:49153**  
開始ページが表示されます :)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer15.PNG" alt="pir" width="600" height="auto"/></p>

**Continue**ボタンを押すと、フォームが表示されます。タイトル、ユーザー名、パスワード、メールアドレスを入力すると、ダッシュボードにアクセスできます。

こちらがダッシュボードです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer16.PNG" alt="pir" width="600" height="auto"/></p>

Linkstarを使用したローカルウェブホスティングは、**カフェ、ピザショップ、教育機関**など、さまざまなビジネスに多くの利点を提供します。ローカルでウェブサイトをホスティングすることで、これらのビジネスは待ち時間を短縮し、全体的な顧客体験を向上させることができます。ローカルホストウェブサイトを利用することで、顧客は**メニューの閲覧、注文、予約、またはアポイントメントのスケジュールを、自分のデバイスから簡単に行うことができます。この効率化されたプロセスにより、顧客とスタッフの両方の時間が節約され、待ち時間が短縮され、効率が向上します**。さらに、ローカルホストウェブサイトは、**最新のオファー、特別メニュー、イベントをターゲットオーディエンスに直接宣伝する効果的な広告の機会を提供します**。Linkstarの力を活用することで、ビジネスはシームレスで魅力的なオンラインプレゼンスを構築し、顧客を効果的に引き付け、全体的な満足度を向上させることができます。

## リソース

- **[ウェブページ]** [Docker公式ドキュメント](https://docs.docker.com)

- **[ウェブページ]** [Docker Hub](https://hub.docker.com)

- **[ウェブページ]** [Portainer](https://www.portainer.io/)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>