---
description: WatcherをHome Assistantにローカルで接続する方法について説明します。
title: WatcherをHome Assistantに統合する
image: https://files.seeedstudio.com/wiki/watcher_ha/10.png
slug: /ja/integrate_watcher_to_ha
sidebar_position: 1
last_update:
  date: 08/20/2024
  author: Citric
---

# WatcherをHome Assistantに統合する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

人工知能（AI）の統合により、スマートホーム技術の世界は革命を遂げ、最先端のAI搭載デバイスであるWatcherがゲームチェンジャーとして登場しました。Watcherを人気のオープンソースホームオートメーションプラットフォームであるHome Assistantとシームレスに統合することで、ユーザーはスマートホームにおいて新たなレベルの利便性、セキュリティ、効率性を実現できます。

この包括的なwikiでは、WatcherをHome Assistantと統合するプロセスをガイドし、スマートホームセットアップでAIの潜在能力を最大限に活用できるようにします。経験豊富なHome Assistantユーザーでも、ホームオートメーションの初心者でも、この統合により刺激的な可能性の領域が開かれ、あなたの家をよりスマートで、より反応的で、あなた独自のニーズに合わせたものにすることができます。

以下は、この記事の主要なコンテンツフレームワークです。

1. [HACSプラグインのインストール](#installing-the-hacs-plugin): Home Assistant Community Store（HACS）をインストールして、Home Assistant内でSeeed StudioのSenseCraftプラグインのインストールを可能にします。
2. [SenseCraftプラグインのインストール](#installing-the-sensecraft-plugin): Seeed StudioのSenseCraftプラグインをインストールします。これにより、Seeed Studioの製品をHome Assistantに迅速に展開できます。
3. [SenseCAP WatcherをHome Assistantに統合](#integrate-sensecap-watcher-into-home-assistant): SenseCAP WatcherをHome Assistantに統合し、設定用のビジュアルダッシュボードをセットアップします。

## はじめに

この記事のチュートリアル内容が始まる前に、以下のハードウェアを準備する必要があります。

### 必要な材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Watcher</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/1.png" style={{width:180, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green は、あなたの家を自動化する最も簡単でプライバシーに重点を置いた方法です。簡単なセットアップを提供し、すべてのスマートデバイスを1つのシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは繁栄している Home Assistant エコシステムの恩恵を受け、オープンソースによって毎月改善されます。

このチュートリアルでは、Home Assistant Green を Home Assistant ホストとして使用することをお勧めしますが、Supervisor を搭載した任意の Home Assistant ホストを使用することもできます。

## HACS プラグインのインストール

### ステップ 1. Home Assistant でアドバンスドモードを開く

Home Assistant の潜在能力を最大限に引き出し、高度な機能にアクセスするために、ユーザーインターフェースで「アドバンスドモード」を有効にできます。

[Home Assistant ウェブインターフェース](http://homeassistant.local:8123)に移動します。Home Assistant サイドバーの左下隅にあるプロフィールアイコンをクリックします。プロフィールページで、下にスクロールして**アドバンスドモード**のトグルを見つけます。トグルをオンの位置に切り替えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. Terminal & SSH をインストール

サイドバーの**設定**をクリックして設定メニューにアクセスします。**アドオン**をクリックしてアドオンストアにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンを閲覧して**Terminal & SSH**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

**Terminal & SSH**を見つけたら、それをクリックして詳細を表示します。アドオンのページでは、概要、ドキュメント、設定オプションが表示されます。アドオンをインストールするには、**インストール**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. HACS をインストール

サイドバーで最近ダウンロードした**Terminal & SSH**を見つけます。ターミナルで、Home Assistant 設定のルートである config ディレクトリに移動します：

```
cd /config
```

以下のコマンドを実行してHACSインストールスクリプトをダウンロードし、実行します：

```
wget -q -O - https://install.hacs.xyz | bash -
```

インストールスクリプトが完了した後、変更を適用するためにHome Assistantを再起動する必要があります。UIから**設定 > システム > 再起動**に移動してHome Assistantを再起動できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

再起動後、サイドバーの**設定**をクリックして設定メニューを開きます。設定メニュー内で、**デバイスとサービス**に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

**統合を追加**をクリックして、Home Assistantセットアップに新しい統合を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

検索バーで**HACS**と入力して、Home Assistantコミュニティストア統合を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

HACSが見つかった場合、利用可能な統合のリストに表示されるはずです。それをクリックしてインストールプロセスを開始します。

ライセンス契約または利用規約がポップアップする場合があります。契約を注意深く読み、条件に同意する場合は、すべてのボックスにチェックを入れて同意を示します。**送信**をクリックしてインストールを続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

次に、GitHubアカウントでログインするよう求められます。HACSはGitHubと統合してコミュニティが作成した統合とプラグインのインストールを管理するため、これが必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

指示に従ってHome AssistantがあなたのGitHubアカウントにアクセスすることを承認します。これは通常、GitHubから提供される認証コードを入力してあなたの身元を確認することを含みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Home AssistantがあなたのGitHubアカウントを使用することを承認すると、HACSのインストールが完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

HACSがシステムに完全に統合されるために、Home Assistantを再起動する必要がある場合があります。

## SenseCraftプラグインのインストール

### ステップ4. HACSを介したSenseCraftプラグインのインストール

サイドバーでHACSを探してクリックし、HACSインターフェースを開きます。右下隅に、メニューボタン（HACSのバージョンによって3つの点またはプラス記号）があります。**カスタムリポジトリ**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

リポジトリURLの入力を求めるダイアログボックスが表示されます。ここで、SenseCraft統合のカスタムリポジトリURLを入力します。URLを入力した後、カテゴリを選択します（SenseCraft統合の場合、**統合**を選択します）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

**Add**をクリックします。リポジトリがHACSに追加され、**Integrations**の下のリストでSenseCraft統合を見つけることができるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft統合を見つけて「DOWNLOAD」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

この時点で、SenseCraftプラグインのインストールが正常に完了しました。

## SenseCAP WatcherをHome Assistantに統合する

### ステップ5. SenseCraftからWatcherを追加する

**Settings**ページで、**Devices & Services**を選択します。

次に右下の**ADD INTEGRATION**ボタンをクリックし、**SenseCraft**を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

SenseCraftをクリックし、Actionとして**Add device using host/id (局域网集成)**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

:::note
現在、**Add devices using SenseCraft Account（账号集成）**は利用できません。
:::

次にデバイスオプションで**Watcher**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/4.png" style={{width:500, height:'auto'}}/></div>

次のページで、WatcherのデバイスEUIを入力してください。WatcherのEUIは[SenseCraft APPのWatcherの設定](https://wiki.seeedstudio.com/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)で確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/5.png" style={{width:500, height:'auto'}}/></div>

:::note
EUIはすべて大文字にしてください！
:::

**SUBMIT**後、WatcherのHome Assistantコンポーネントが自動的に追加され、ダッシュボードに表示されます。現在はデータなしの状態になっているはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/6.png" style={{width:1000, height:'auto'}}/></div>

### ステップ6. タスクを配置してHTTPメッセージブロックを設定する

WatcherのデータがHome Assistantに到達するには、Watcherがタスクを実行している状態にし、HTTPメッセージブロックを設定してアラームストリームをHome Assistantに送信する必要があります。

例えば、現在Watcherに猫が食事をしているかどうかを検出するタスクを配置しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div><br />

**Detail Config**内で、「If yes, then do the following」を見つけ、下の**HTTP Push Notification**ボックスにチェックを入れます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/7.png" style={{width:250, height:'auto'}}/></div><br />

次に**Go Setup**ボタンをクリックし、そこでHome Assistantの情報を設定して、データがHome Assistantに到達できるようにします。

- **HTTP URL**: Home AssistantのIPアドレスを完全に記入し、ポート番号8887を指定します。例：`http://192.168.1.151:8887`。

- **HTTP Token**: 空白のままにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/8.png" style={{width:250, height:'auto'}}/></div><br />

正しく記入されていることを確認した後、下部のUpdate Nowをクリックします。その後、タスクがWatcherに送信されます。

次に、Watcherが猫の食事を検出すると、アラームがトリガーされ、センサーからのデータがHome Assistantに報告されます。これに基づいて、次にスマートホームの自動化を自由に設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>サンプルダッシュボードコードを表示するにはクリック</summary>

```javascript
views:
  - type: sections
    title: Home Assistant
    path: home
    icon: mdi:home-assistant
    sections:
      - cards:
          - type: tile
            entity: sensor.air_humidity
            name: SenseCAP Watcher Air Humidity
            color: blue
            show_entity_picture: true
          - type: tile
            entity: sensor.co2
            name: SenseCAP Watcher CO2
            color: deep-orange
          - type: tile
            entity: sensor.temperature
            name: SenseCAP Watcher Air Temperature
            color: purple
            show_entity_picture: true
          - type: tile
            entity: sensor.alarm
            name: SenseCAP Watcher Alarm Message
            color: red
            show_entity_picture: true
          - type: picture
            image_entity: image.alarm_image
```

</details>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
