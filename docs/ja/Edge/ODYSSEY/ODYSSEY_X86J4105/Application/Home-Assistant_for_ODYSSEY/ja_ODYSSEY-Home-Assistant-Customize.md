---
description: ODYSSEYでHome Assistantをカスタマイズする方法
title: Home Assistantのカスタマイズ方法
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-Home-Assistant-Customize
last_update:
  date: 05/15/2025
  author: w0x7ce
---


# Home Assistantのカスタマイズ方法

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" /></div>

## はじめに

以前のWikiでは、[reTerminal](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant)、[ODYSSEY-X86](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant)にHome Assistantをインストールし、PC、スマートフォン、タブレット、reTerminal LCDのキオスクモードでダッシュボードUIを表示する方法を説明しました。

このWikiでは、必要な設定を行いながらダッシュボードを構築する方法や、Home Assistantに付属する重要なアドオンの使用方法をステップバイステップで解説します。それでは始めましょう！

## アドオン、HACS、統合

Home Assistantは主に以下の3つの方法で機能を拡張できます：

- アドオン
- 統合
- HACS (Home Assistant Community Store)

[アドオン](https://www.home-assistant.io/addons)は、Home Assistantの周辺機能を拡張するために追加のアプリケーションをインストールすることを可能にします。例えば、ESPHomeを使用してスマートセンサーと接続したり、Home AssistantをGoogle Driveに自動バックアップしたりすることができます。

[統合](https://www.home-assistant.io/integrations)は、Home Assistantを他のサービスと接続することを可能にします。例えば、スマートライトやCCTVカメラと接続することができます。

[HACS (Home Assistant Community Store)](https://hacs.xyz/)は、Home Assistant内でカスタムフロントエンド統合のコンポーネントを追加することを可能にします。例えば、新しいハードウェア/センサーのサポートや新しいテーマを追加できます。

このWikiでは、上記の機能について簡単に説明します。ただし、さらに詳しく知りたい場合は、Home Assistantに関するオンラインリソースが豊富にあります。以下は、役立つYouTubeチャンネルの一部です：

- [EverythingSmartHome](https://www.youtube.com/c/EverythingSmartHome)
- [TheHookUp](https://www.youtube.com/c/TheHookUp)
- [PaulHibbert](https://www.youtube.com/c/PaulHibbert)
- [MakeItWorkTech](https://www.youtube.com/c/MakeItWorkTech)
- [MarkWattTech](https://www.youtube.com/c/MarkWattTech)
- [SmartHomeSolver](https://www.youtube.com/c/SmartHomeSolver)
- [mostlychris](https://www.youtube.com/c/mostlychris)
- [KPeyanski](https://www.youtube.com/c/KPeyanski)

## アドオン

デフォルトでは、すべてのアドオンが有効になっているわけではありません。そのため、すべてのアドオンを有効にするには「Advanced Mode」を有効にする必要があります。

- **ステップ1.** **ユーザー名**をクリックして**Advanced Mode**を有効にします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/17.png" /></div>

次に、アドオンパネルにアクセスする必要があります。

- **ステップ2.** **Settings > Add-ons**に移動します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/18.png" /></div>

- **ステップ3.** **ADD-ON STORE**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/19.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/20.png" /></div>

Home Assistantのデフォルトアドオンに加えて、コミュニティが開発した**サードパーティアドオン**を追加することもできます。ただし、これらはHome Assistantの開発者によって維持されているわけではありません。後ほど、これらのサードパーティアドオンを追加する方法を説明します。

### アドオンの使い方

次に、いくつかのアドオンを設定してみましょう。ここでは以下のアドオンの設定方法を紹介します：

- Terminal & SSH
- File editor
- Glances
- Google Drive Backup

また、**Node-RED、ESPHome、Adguard Home、BitWarden、Samba Share、Mosquitto broker、BookStack、Uptime Kuma、Cloudflared Tunnel**などのアドオンも設定できます。

#### アドオンのインストール

アドオンのインストールプロセスはすべてのアドオンに共通です。ここでその手順を説明します。

- **ステップ1.** 前述のように**Add-on Store**にアクセスします。

- **ステップ2.** アドオンを選択するか検索バーに入力します。例えば、ここでは**Terminal & SSH**アドオンを選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/21.png" /></div>

- **ステップ3.** **INSTALL**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/22.png" /></div>

- **ステップ4.** **Start on boot、Watchdog、Auto update、Show in sidebar**などの設定をさらに構成します。すべてオンにすることもできます。その後、**START**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/23.png" /></div>

アドオンが開始されて実行されている場合は、この**緑色のドット**が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/25.png" /></div>

- **ステップ5.** アドオンが開始された後、**Log**タブをクリックしてアドオンが正しく開始されたかどうかを確認します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/24.png" /></div>

#### File editorアドオン

Home Assistantのほとんどの設定は**Settings**のユーザーインターフェースから直接構成できますが、一部の部分では**configuration.yaml**などのファイルを編集する必要があります。このファイルには、ロードする統合やその設定が含まれています。この設定ファイルにコードスニペットを追加することで、特定の機能を有効にすることができます。

ただし、これらの設定ファイルにアクセスするには、ファイルエディタが必要です。そこで**File editor**アドオンが役立ちます。

- **ステップ1.** **Add-on Store**内で**File editor**アドオンを探し、**INSTALL**して**START**します。

- **ステップ2.** **OPEN WEB UI**または左側のナビゲーションペインの**File editor**をクリックしてアクセスします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/26.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/27.png" /></div>

#### Glancesアドオン

Home Assistant をインストールした後、ホストデバイスのハードウェアリソース使用状況を確認したい場合があります。**Glances** アドオンを使用すると、使用中のすべてのハードウェアリソースの概要を確認できます。

- **ステップ 1.** **Add-on Store** 内で **Glances** アドオンを探し、**INSTALL** をクリックしてインストールし、**START** をクリックして開始します。

- **ステップ 2.** **OPEN WEB UI** をクリックするか、左側のナビゲーションペインで **Glances** をクリックしてアクセスします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/28.png" /></div>

**注意:** **Protection mode** が無効になっていることを確認してください。有効の場合、Glances は起動しません。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/29.png" /></div>

#### Google Drive Backup アドオン

前述のように、Home Assistant にサードパーティのアドオンをインストールすることができます。**Google Drive Backup** はそのようなアドオンの一つです。Home Assistant を自分のニーズに合わせて設定するために多くの時間と労力を費やした後、システムが壊れてしまうとすべてが無駄になります。このような場合にバックアップが役立ちます。

デフォルトでは、Home Assistant はバックアップを作成し、Home Assistant を実行しているホストデバイスにオフラインで保存する機能を備えています。しかし、ホストデバイスが応答しない場合やアクセスできない場合、以前のバックアップからどのように復元するのでしょうか？

Google Drive Backup アドオンを使用すると、バックアップを自動的に設定し、毎日 Google Drive にアップロードすることができます。そのため、ホストデバイスにアクセスできない場合でも、Google Drive から保存されたバックアップをダウンロードしてデバイスに復元することができます。

- **ステップ 1.** **Add-on Store** にアクセスし、右上の **3つのドット** をクリックして **Repositories** を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/30.png" /></div>

- **ステップ 2.** **https://github.com/sabeechen/hassio-google-drive-backup** をコピーして空欄に貼り付け、**ADD** をクリックします。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/31.png" /></div>

以下の画面が表示されれば、正常に追加されています。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/32.png" /></div>

- **ステップ 3.** **Settings > System** に移動し、**RESTART** をクリックして Home Assistant を再起動します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/33.png" /></div>

- **ステップ 4.** **Add-on Store** にアクセスし、**Home Assistant Google Drive Backup** アドオンを探して **INSTALL** をクリックしてインストールし、**START** をクリックして開始します。

- **ステップ 5.** **OPEN WEB UI** をクリックするか、左側のナビゲーションペインで **Backups** をクリックしてアクセスします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/34.png" /></div>

- **ステップ 6.** **AUTHENTICATE WITH GOOGLE DRIVE** をクリックすると新しいウィンドウが開きます。Google アカウントでサインインし、アクセスを許可します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/36.png" /></div>

- **ステップ 7.** **COPY** をクリックして認証文字列をコピーします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/37.png" /></div>

- **ステップ 8.** Home Assistant の UI に戻り、コピーした文字列を貼り付けて **SAVE** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Home-Assistant/38.png" /></div>

これで Google Drive Backup の設定が完了しました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/39.png" /></div>

バックアップ頻度や保持するバックアップの数など、追加の設定を構成したい場合は、**Settings** をクリックして設定ページに移動します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/40.png" /></div>

## 統合

それでは、Home Assistantでの統合について見ていきましょう！ここでは、以下の統合の設定方法を説明します。

- スマートライトの制御  
- CCTVカメラストリーム  

また、**Philips Hue、Shelly、Tuya、Sonos、Z-Wave、HomeKit、WLED**などの統合も設定できます。

- **ステップ 1.** **設定 > デバイス & サービス**に移動します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/41.png" /></div>

- **ステップ 2.** **+ 統合を追加**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/42.png" /></div>

ここで、多くの統合を見つけることができます！

### スマートライトの統合

ここでは、**Xiaomiスマートライトの統合**を追加して、スマートライトのオン/オフを切り替える方法を説明します。進む前に、Xiaomiスマートライトにアクセスできることを確認してください。別のスマートライト（例：**Philips Hue**）をお持ちの場合は、**Philips Hueの統合**を追加することができ、手順はほぼ同じです。

- **ステップ 1.** **Yeelight**を検索して選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/43.png" /></div>

- **ステップ 2.** スマートライトのIPアドレスを入力し、**送信**をクリックします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/44.png" /></div>

- **ステップ 3.** **完了**をクリックします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/45.png" /></div>

- **ステップ 4.** **概要**ページで、左上の3点メニューをクリックし、**ダッシュボードを編集**を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/46.png" /></div>

- **ステップ 5.** ユーザー名が表示されているカードは不要なので、**3点メニュー**をクリックして**カードを削除**を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/47.png" /></div>

- **ステップ 6.** 削除を確認します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/48.png" /></div>

- **ステップ 7.** **+ カードを追加**をクリックし、**ライト**カードを選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/49.png" /></div>

- **ステップ 8.** **名前**を変更し、**保存**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/50.png" /></div>

- **ステップ 9.** **完了**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/51.png" /></div>

- **ステップ 10.** これでライトをオンにしたり、明るさを調整したりすることができます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/52.png" /></div>

- **ステップ 11.** **3点メニュー**をクリックすると、色や色温度を変更するなど、ライトの詳細な制御が可能です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/53.png" /></div>

### CCTV IPカメラの統合

ここでは、RTSPプロトコルを使用してCCTVカメラからリアルタイムのビデオストリームを表示できるようにするためのカメラ統合を追加します。進む前に、IP機能を備え、RTSPを介してストリームを送信できるCCTVカメラにアクセスできることを確認してください。

- **ステップ 1.** **統合**ページで、**新しい統合を設定**の下にある**generic camera**を検索して選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/54.png" /></div>

- **ステップ 2.** **RTSPストリームURL**を追加し、必要に応じて**ユーザー名、パスワード**を入力し、**フレームレート**を変更して**送信**をクリックします。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/55.png" /></div>

- **ステップ 3.** **概要**ページで、先ほどと同様に**+ カードを追加**ページに移動し、**Picture Entity**カードをクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/56.png" /></div>

- **ステップ 4.** **エンティティ**の下に**camera**と入力すると、先ほど設定したカメラが表示されます。それをクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/57.png" /></div>

- **ステップ 5.** **名前**を変更し、**カメラビュー**を**ライブ**に変更して**保存**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/58.png" /></div>

これで、ダッシュボードにライブビデオストリームが表示されます！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/59.png" /></div>

## HACS (Home Assistant コミュニティストア)

では、Home AssistantでHACSを探索してみましょう！HACSは、さまざまな統合やフロントエンドのカスタマイズオプションを提供します。ここでは、以下の設定方法を紹介します。

- Home Assistantのテーマを変更する
- ダッシュボードに天気カードを追加する

### HACSのインストール

- **ステップ 1.** 以前にインストールした**Terminal & SSH**アドオンを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/60.png" /></div>

- **ステップ 2.** ターミナルウィンドウ内で以下のコマンドを入力してHACSをインストールします。

```sh
wget -O - https://get.hacs.xyz | bash -
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/61.png" /></div>

- **ステップ 3.** HACSのインストールが完了したら、以下のコマンドでHome Assistantを再起動します。

```sh
ha ha restart
```

- **ステップ 4.** **Integrations**ページで、**Set up a new integration**の下にある検索バーで**HACS**を検索し、選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/62.png" /></div>

- **ステップ 5.** すべてのオプションを選択して同意し、**SUBMIT**をクリックします。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/63.png" /></div>

- **ステップ 6.** 認証コードをコピーし、リンクをクリックしてGitHubにサインインします。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/70.jpg" /></div>

- **ステップ 7.** GitHubにサインインし、コピーしたコードを貼り付けて**Continue**をクリックします。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/71.jpg" /></div>

- **ステップ 8.** **Authorize HACS**をクリックします。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/72.jpg" /></div>

- **ステップ 9.** **FINISH**をクリックします。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/68.png" /></div>

HACSがインストールされました！

- **ステップ 10.** システムを再起動することをお勧めします。**Settings > System > Hardware**に移動し、右上の**3-dots**をクリックして**Reboot Host**を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/69.png" /></div>

- **ステップ 11.** システムが再起動した後、左のナビゲーションペインに**HACS**が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/73.png" /></div>

### Home Assistantのテーマを変更する

次に、HACSを使用してデフォルトテーマを変更してみましょう！Home Assistantには、標準でダークモードのテーマが1つだけ付属しています。しかし、これをカスタマイズしたい場合は、以下の手順に従う必要があります。

- **ステップ 1.** カスタムテーマをインストールする前に、**configuration.yaml**ファイルにコードを追加する必要があります。**File editor**を開き、**Folder icon**をクリックしてファイルシステムを参照します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/76.jpg" /></div>

- **ステップ 2.** **configuration.yaml**をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/77.png" /></div>

- **ステップ 3.** ファイルの末尾に以下を追加します。

```sh
frontend:
  themes: !include_dir_merge_named themes
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/78.jpg" /></div>

- **ステップ 4.** 保存ボタンをクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/79.png" /></div>

- **ステップ 5.** 作成した設定が有効かどうかを確認するのがベストプラクティスです。そうしないと、次回Home Assistantが起動しなくなる可能性があります。**Developer Tools**に移動し、**CHECK CONFIGURATION**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/80.png" /></div>

**Configuration valid!**というメッセージが表示されたら、すべて正常です！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/81.png" /></div>

- **ステップ 6.** **RESTART**をクリックしてHome Assistantを再起動します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/82.png" /></div>

- **ステップ 7.** **HACS**ウィンドウ内で**Frontend**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/74.png" /></div>

- **ステップ 8.** **+ EXPLORE & DOWNLOAD REPOSITORIES**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/75.jpg" /></div>

- **ステップ 9.** ここでは多くのテーマが表示されます。例として、iOSテーマをインストールします。**iOS**を検索し、**iOS Themes - Dark Mode and Light Mode**を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/85.png" /></div>

- **ステップ 10.** **DOWNLOAD**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/86.png" /></div>

- **ステップ 11.** プロンプトで再度**DOWNLOAD**をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/87.png" /></div>

- **ステップ 12.** ダウンロードが完了したら、ユーザー名をクリックし、**Theme**の下で**ios-dark-mode-blue-red**を選択します。このテーマの他の色も選択できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/88.jpg" /></div>

新しいテーマが読み込まれると、**Overview**ページは次のようになります！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/89.png" /></div>

**注意:** テーマが正しく読み込まれない場合は、Home Assistantを再起動してください。

### ダッシュボードに天気カードを追加する

次に、HACSを使用して天気カードをインストールし、ダッシュボードに追加します！

この天気カードをインストールする前に、天気情報を取得するために**openweathermap**と接続する必要があります。そして、openweathermapと接続する前に、openweathermapからAPIキーを取得する必要があります。

- **ステップ 1.** [このリンク](https://home.openweathermap.org/users/sign_up)を訪問して、openweathermapアカウントにサインアップします。

- **ステップ 2.** [こちらのリンク](https://home.openweathermap.org/users/sign_in)にアクセスして、新しく作成したアカウントにサインインします。

- **ステップ 3.** アカウント名の下にある **My API keys** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/97.png" /></div>

- **ステップ 4.** APIキーの名前を入力し、**Generate** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/98.png" /></div>

- **ステップ 5.** 生成されたAPIキーをコピーします。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/99.png" /></div>

次に、このAPIキーを追加します。

- **ステップ 6.** Home Assistantで、**Settings > Devices & Services > Integrations > + ADD INTEGRATION** に移動し、**OpenWeathermap** を検索してクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/96.png" /></div>

- **ステップ 7.** コピーした **APIキー** を貼り付け、**緯度と経度** を自分の位置に合わせて変更します（これはGoogle検索で簡単に見つけられます）。モードを **hourly** に変更し、**SUBMIT** をクリックします。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/101.png" /></div>

- **ステップ 8.** **Finish** をクリックします。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/102.png" /></div>

次に、HACSから天気カードをインストールします。

- **ステップ 9.** **HACS > Frontend > + EXPLORE & DOWNLOAD REPOSITORIES** に移動します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/90.jpg" /></div>

- **ステップ 10.** **weather** と入力し、**Weather Card** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/91.png" /></div>

- **ステップ 11.** **DOWNLOAD** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/92.png" /></div>

- **ステップ 12.** プロンプトで再度 **DOWNLOAD** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/93.png" /></div>

- **ステップ 13.** **Overview** ページで、以前と同様に **+ ADD CARD** ページに移動し、**Custom: Weather Card** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/103.png" /></div>

- **ステップ 14.** 以前入力した **緯度と経度** に基づいて **City Name** を入力し、**SAVE** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/104.png" /></div>

完成したダッシュボードは以下のようになります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" /></div>

## リソース

- [Home Assistant ドキュメント](https://www.home-assistant.io/docs)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>