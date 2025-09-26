---
description: Home Assistantをカスタマイズする方法
title: Home Assistantをカスタマイズする方法
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-Home-Assistant-Customize
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Home Assistantをカスタマイズする方法

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## はじめに

以前のwikiでは、[reTerminal](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant)、[ODYSSEY-X86](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant)にHome Assistantをインストールし、PC、スマートフォン、タブレット、およびreTerminal LCDのキオスクモードでダッシュボードUIを表示する方法について説明しました。

このwikiでは、必要な設定を行ってダッシュボードを構築する方法と、Home Assistantに付属する重要なアドオンの使用方法について、ステップバイステップで説明します。それでは始めましょう！

## アドオン、HACS、インテグレーション

Home Assistantは主に3つの方法でその機能を拡張できます：

- アドオン
- インテグレーション
- HACS（Home Assistant Community Store）

[アドオン](https://www.home-assistant.io/addons)を使用すると、追加のアプリケーションをインストールしてHome Assistant周辺の機能を拡張できます。例えば、ESPHomeでスマートセンサーと接続したり、Home AssistantをGoogle Driveに自動バックアップしたりできます。

[インテグレーション](https://www.home-assistant.io/integrations)を使用すると、Home Assistantを他のサービスと接続できます。例えば、スマートライト、CCTVカメラなどと接続できます。

[HACS（Home Assistant Community Store）](https://hacs.xyz/)を使用すると、Home Assistant内でカスタムフロントエンドインテグレーション用のコンポーネントを追加できます。例えば、新しいハードウェア/センサーサポート、新しいテーマなどです。

このwikiでは、上記の機能について簡単に説明します。ただし、詳しく学びたい場合は、Home Assistantに関するオンラインリソースが豊富にあり、以下のYouTubeチャンネルが良いガイドとなります。

- [EverythingSmartHome](https://www.youtube.com/c/EverythingSmartHome)
- [TheHookUp](https://www.youtube.com/c/TheHookUp)
- [PaulHibbert](https://www.youtube.com/c/PaulHibbert)
- [MakeItWorkTech](https://www.youtube.com/c/MakeItWorkTech)
- [MarkWattTech](https://www.youtube.com/c/MarkWattTech)
- [SmartHomeSolver](https://www.youtube.com/c/SmartHomeSolver)
- [mostlychris](https://www.youtube.com/c/mostlychris)
- [KPeyanski](https://www.youtube.com/c/KPeyanski)

## アドオン

デフォルトでは、すべてのアドオンが有効になっているわけではありません。すべてのアドオンを有効にするには、「アドバンスドモード」を有効にする必要があります。

- **ステップ1.** **ユーザー名**をクリックして**アドバンスドモード**を有効にします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/17.png"/></div>

次に、アドオンパネルにアクセスする必要があります

- **ステップ2.** **設定 > アドオン**に移動します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/18.png"/></div>

- **ステップ3.** **アドオンストア**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/20.png"/></div>

Home Assistantのデフォルトアドオンに加えて、コミュニティが開発した**サードパーティアドオン**を追加できます。ただし、これらはHome Assistant開発者によって保守されていません。後でこれらのサードパーティアドオンを追加する方法を説明します。

### アドオンの使い始め

それでは、いくつかのアドオンを設定してみましょう。ここでは、以下のアドオンの設定方法を説明します。

- Terminal & SSH
- File editor
- Glances
- Google Drive Backup

**Node-RED、ESPHome、Adguard Home、BitWarden、Samba Share、Mosquitto broker、BookStack、Uptime Kuma、Cloudflared Tunnelなど**のアドオンも設定できます。

#### アドオンのインストール

アドオンのインストールプロセスは、すべてのアドオンに共通です。ここで説明します。

- **ステップ1.** 前述の通り**アドオンストア**にアクセスします

- **ステップ2.** アドオンを選択するか、検索バーに入力します。例えば、ここでは**Terminal & SSH**アドオンを選択します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/21.png"/></div>

- **ステップ3.** **インストール**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/22.png"/></div>

- **ステップ4.** **起動時に開始、ウォッチドッグ、自動更新、サイドバーに表示**などの詳細設定を行います。お好みですべてをオンにして、**開始**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/23.png"/></div>

アドオンが開始され、実行されている場合、この**緑色のドット**が表示されます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/25.png"/></div>

- **ステップ5.** アドオンが開始された後、**ログ**タブをクリックして、アドオンが正常に開始されているかどうかを確認します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/24.png"/></div>

#### File editorアドオン

**設定**の下のユーザーインターフェースから直接Home Assistantのほとんどを設定できますが、一部では**configuration.yaml**などのファイルを編集する必要があります。このファイルには、読み込まれるインテグレーションとその設定が含まれています。この設定ファイルにコードスニペットを追加して、特定の機能を有効にできます。

ただし、これらの設定ファイルにアクセスするには、ファイルエディターが必要です。そこで**File editor**アドオンが役立ちます。

- **ステップ1.** **アドオンストア**内で**File editor**アドオンを探し、**インストール**して**開始**します。

- **ステップ2.** **WEB UIを開く**をクリックするか、左側のナビゲーションペインの**File editor**をクリックしてアクセスできます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/26.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/27.png"/></div>

#### Glancesアドオン

Home Assistantをインストールした後、ホストデバイスのハードウェアリソース使用量を確認したい場合があります。**Glances**アドオンは、使用されているすべてのハードウェアリソースの概要を提供します。

- **ステップ1.** **アドオンストア**内で**Glances**アドオンを探し、**インストール**して**開始**します。

- **ステップ2.** **WEB UIを開く**をクリックするか、左側のナビゲーションペインの**Glances**をクリックしてアクセスできます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/28.png"/></div>

**注意:** **保護モード**が無効になっていることを確認してください。そうでなければGlancesは開始されません

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/29.png"/></div>

#### Google Drive Backupアドオン

前述したように、Home Asssitantにサードパーティのアドオンをインストールでき、**Google Drive Backup**はそのようなアドオンの一つです。Home Assistantをニーズに合わせて設定するために多くの時間と労力を投資した後、システムが壊れてしまうと、すべてが無駄になってしまいます。ここでバックアップが役に立ちます。

デフォルトでは、Home Assistantにはバックアップを行い、Home Assistantを実行しているホストデバイス上にオフラインで保存する機能があります。しかし、ホストデバイスが応答せず、アクセスすることさえできない場合、以前のバックアップからどのように復元するのでしょうか？

Google Drive Backupアドオンを使用すると、自動バックアップを設定でき、毎日Google Driveにバックアップをアップロードします。ホストデバイスにアクセスできない場合、Google Driveから保存されたバックアップをダウンロードして、デバイス上で復元できます。

- **ステップ1.** **アドオンストア**にアクセスし、右上角の**3つの点**をクリックして**リポジトリ**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/30.png"/></div>

- **ステップ2.** **https://github.com/sabeechen/hassio-google-drive-backup**をコピーして空の列に貼り付け、**追加**をクリックします

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/31.png"/></div>

正常に追加されると以下のように表示されます

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/32.png"/></div>

- **ステップ3.** **設定 > システム**に移動し、**再起動**をクリックしてHome Assistantを再起動します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/33.png"/></div>

- **ステップ4.** **アドオンストア**にアクセスし、**Home Assistant Google Drive Backup**アドオンを探し、**インストール**して**開始**します。

- **ステップ5.** **WEB UIを開く**をクリックするか、左側のナビゲーションペインの**バックアップ**をクリックしてアクセスできます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/34.png"/></div>

- **ステップ6.** **GOOGLE DRIVEで認証**をクリックすると、新しいウィンドウが開きます。Googleアカウントでサインインし、アクセスを許可します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/36.png"/></div>

- **ステップ7.** **コピー**をクリックして認証文字列をコピーします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/37.png"/></div>

- **ステップ8.** Home Assistant UIに戻り、コピーした文字列を貼り付けて**保存**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Home-Assistant/38.png"/></div>

これでGoogle Drive Backupsの設定が正常に完了しました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/39.png"/></div>

バックアップ頻度、保持するバックアップ数などの追加設定を構成したい場合は、**設定**をクリックして設定ページに入ることができます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/40.png"/></div>

## インテグレーション

それでは、Home Assistantのインテグレーションを探索してみましょう！ここでは、以下のインテグレーションの設定方法を紹介します。

- スマートライト制御
- CCTVカメラストリーム

**Philips Hue、Shelly、Tuya、Sonos、Z-Wave、HomeKit、WLEDなど**のインテグレーションも設定できます。

- **ステップ 1.** **設定 > デバイスとサービス**に移動します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/41.png"/></div>

- **ステップ 2.** **+ インテグレーションを追加**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/42.png"/></div>

ここでたくさんのインテグレーションを見つけることができます！

### スマートライトインテグレーション

スマートライトのON/OFFができるように、**Xiaomiスマートライトインテグレーション**を追加してみましょう。進める前に、Xiaomiスマートライトにアクセスできることを確認してください。**Philips Hue**などの異なるスマートライトをお持ちの場合は、**Philips Hueインテグレーション**を追加でき、手順はほぼ同様です。

- **ステップ 1.** **Yeelight**を検索して選択します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/43.png"/></div>

- **ステップ 2.** スマートライトのIPアドレスを入力し、**送信**をクリックします

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/44.png"/></div>

- **ステップ 3.** **完了**をクリックします

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/45.png"/></div>

- **ステップ 4.** **概要**ページで、左上の3点ドットをクリックし、**ダッシュボードを編集**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/46.png"/></div>

- **ステップ 5.** ここではユーザー名のカードは不要です。**3点ドット**をクリックし、**カードを削除**をクリックして削除します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/47.png"/></div>

- **ステップ 6.** 削除を確認します

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/48.png"/></div>

- **ステップ 7.** **+ カードを追加**をクリックし、**ライト**カードをクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/49.png"/></div>

- **ステップ 8.** **名前**を変更し、**保存**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/50.png"/></div>

- **ステップ 9.** **完了**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/51.png"/></div>

- **ステップ 9.** これでライトをONにして、明度も制御できます

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/52.png"/></div>

- **ステップ 10.** **3点ドット**をクリックすると、色や色温度を変更する機能など、ライトをより詳細に制御できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/53.png"/></div>

### CCTV IPカメラインテグレーション

ここでは、RTSPプロトコル経由でCCTVカメラからのリアルタイム映像ストリームを表示できるように、カメラインテグレーションを追加します！進める前に、IP機能を持ち、RTSP経由でストリーミングできるCCTVカメラにアクセスできることを確認してください。

- **ステップ 1.** **インテグレーション**ページの**新しいインテグレーションを設定**で、**generic camera**を検索して選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/54.png"/></div>

- **ステップ 2.** **RTSPストリームURL**を追加し、必要に応じて**ユーザー名、パスワード**を入力し、**フレームレート**を変更して**送信**をクリックします

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/55.png"/></div>

- **ステップ 3.** **概要**ページで、前と同様に**+ カードを追加**ページに移動し、**Picture Entity**カードをクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/56.png"/></div>

- **ステップ 4.** **エンティティ**の下に**camera**と入力すると、前に設定したカメラが表示されます。それをクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/57.png"/></div>

- **ステップ 5.** **名前**を変更し、**カメラビュー**を**live**に変更して**保存**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/58.png"/></div>

これでダッシュボードにライブ映像ストリームが表示されます！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/59.png"/></div>

## HACS (Home Assistant コミュニティストア)

それでは、Home AssistantでHACSを探索してみましょう！HACSは多数の統合機能とフロントエンドのカスタマイズオプションを提供します。ここでは以下の設定方法を紹介します

- Home Assistantテーマの変更
- ダッシュボードへのWeatherカードの追加

### HACSのインストール

- **ステップ 1.** 以前にインストールした**Terminal & SSH**アドオンを開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/60.png"/></div>

- **ステップ 2.** ターミナルウィンドウ内で以下のコマンドを入力してHACSをインストールします

```sh
wget -O - https://get.hacs.xyz | bash -
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/61.png"/></div>

- **ステップ 3.** HACS のインストールが完了したら、以下のコマンドで Home Assistant を再起動します

```sh
ha ha restart
```

- **ステップ 4.** **Integrations** ページで、**Set up a new integration** の下で **HACS** を検索して選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/62.png"/></div>

- **ステップ 5.** すべてのオプションを選択してすべてに同意し、**SUBMIT** をクリックします

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/63.png"/></div>

- **ステップ 6.** 認証コードをコピーし、リンクをクリックして GitHub にサインインします。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/70.jpg"/></div>

- **ステップ 7.** GitHub にサインインし、コピーしたコードを貼り付けて **Continue** をクリックします

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/71.jpg"/></div>

- **ステップ 8.** **Authorize HACS** をクリックします

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/72.jpg"/></div>

- **ステップ 9.** **FINISH** をクリックします

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/68.png"/></div>

HACS がインストールされました！

- **ステップ 10.** **Settings > System > Hardware** に移動し、右上角の **3つの点** をクリックして **Reboot Host** をクリックして、システムを再起動することをお勧めします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/69.png"/></div>

- **ステップ 11.** システムが再起動された後、左側のナビゲーションペインに **HACS** が表示されます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/73.png"/></div>

### Home Assistant テーマの変更

それでは HACS を使用してデフォルトテーマを変更しましょう！標準では、Home Assistant は単一のダークモードテーマのみが付属しています。しかし、これをカスタマイズしたい場合は、以下の手順に従う必要があります

- **ステップ 1.** カスタムテーマをインストールする前に、**configuration.yaml** ファイルにいくつかのコードを追加する必要があります。**File editor** を開き、**フォルダアイコン** をクリックしてファイルシステムを参照します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/76.jpg"/></div>

- **ステップ 2.** **configuration.yaml** をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/77.png"/></div>

- **ステップ 3.** このファイルの最後に以下を追加します

```sh
frontend:
  themes: !include_dir_merge_named themes
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/78.jpg"/></div>

- **ステップ 4.** 保存ボタンをクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/79.png"/></div>

- **ステップ 5.** 作成した設定が有効かどうかを確認することがベストプラクティスです。そうしないと、次回Home Assistantの起動に失敗します。**Developer Tools**に移動し、**CHECK CONFIGURATION**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/80.png"/></div>

**Configuration valid!**というメッセージが表示されれば、すべて正常です！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/81.png"/></div>

- **ステップ 6.** **RESTART**をクリックしてHome Assistantを再起動します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/82.png"/></div>

- **ステップ 7.** **HACS**ウィンドウ内で、**Frontend**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/74.png"/></div>

- **ステップ 8.** **+ EXPLORE & DOWNLOAD REPOSITORIES**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/75.jpg"/></div>

- **ステップ 9.** ここでは多くのテーマが表示されます。例として、iOSテーマをインストールします。**iOS**を検索し、**iOS Themes - Dark Mode and Light Mode**を選択します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/85.png"/></div>

- **ステップ 10.** **DOWNLOAD**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/86.png"/></div>

- **ステップ 11.** プロンプトに対して再度**DOWNLOAD**をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/87.png"/></div>

- **ステップ 12.** ダウンロードが完了したら、ユーザー名をクリックし、**Theme**の下で**ios-dark-mode-blue-red**を選択します。お好みに応じて、このテーマの他の色も選択できます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/88.jpg"/></div>

新しいテーマが読み込まれると、**Overview**ページは次のようになります！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/89.png"/></div>

**注意:** テーマが正しく読み込まれない場合は、Home Assistantを再起動してください。

### ダッシュボードに天気カードを追加

次に、HACSを使用して天気カードをインストールし、ダッシュボードに追加します！

この天気カードをインストールする前に、天気情報を取得するために**openweathermap**に接続する必要があります。そして、openweathermapに接続する前に、openweathermapからAPIキーを取得する必要があります。

- **ステップ 1.** [このリンク](https://home.openweathermap.org/users/sign_up)にアクセスして、openweathermapアカウントにサインアップします

- **ステップ 2.** [このリンク](https://home.openweathermap.org/users/sign_in)にアクセスして、新しく作成したアカウントにサインインします

- **ステップ 3.** アカウント名の下で、**My API keys**をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/97.png"/></div>

- **ステップ 4.** APIキー名を入力し、**Generate**をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/98.png"/></div>

- **ステップ 5.** 生成されたAPIキーをコピーします

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/99.png"/></div>

次に、このAPIキーを追加します

- **ステップ 6.** Home Assistantで、**Settings > Devices & Services > Integrations > + ADD INTEGRATION**に移動し、**OpenWeathermap**を検索してクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/96.png"/></div>

- **ステップ 7.** コピーした**API key**を貼り付け、あなたの場所に応じて**Latitude and Logitude**を変更し（これは簡単なGoogle検索で見つけることができます）、Modeを**hourly**に変更して**SUBMIT**をクリックします

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/101.png"/></div>

- **ステップ 8.** **Finish**をクリックします

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/102.png"/></div>

次に、HACSから天気カードをインストールします

- **ステップ 9.** **HACS > Frontend > + EXPLORE & DOWNLOAD REPOSITORIES**に移動します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/90.jpg"/></div>

- **ステップ 10.** **weather**と入力し、**Weather Card**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/91.png"/></div>

- **ステップ 11.** **DOWNLOAD**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/92.png"/></div>

- **ステップ 12.** プロンプトに対して再度**DOWNLOAD**をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/93.png"/></div>

- **ステップ 13.** **Overview**ページで、以前と同様に**+ ADD CARD**ページに移動し、**Custom: Weather Card**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/103.png"/></div>

- **ステップ 14.** 以前に入力した**Latitude and Logitude**に応じて**City Name**を入力し、**SAVE**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/104.png"/></div>

完成したダッシュボードは以下のようになります

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## リソース

- [Home Assistantドキュメント](https://www.home-assistant.io/docs)
