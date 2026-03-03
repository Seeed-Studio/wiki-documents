---
description: WatcherをローカルでHome Assistantに接続する方法について説明します。
title: WatcherをHome Assistantに統合する
image: https://files.seeedstudio.com/wiki/watcher_ha/10.png
slug: /ja/integrate_watcher_to_ha
sidebar_position: 1
last_update:
  date: 10/11/2025
  author: Twelve
---

# WatcherをHome Assistantに統合する

:::caution 注意
このチュートリアルは小智ファームウェアバージョンには適用されません。  
小智ファームウェアについては、詳細な手順について[小智 Watcher ガイド](https://wiki.seeedstudio.com/ja/ha_dify_watcher_llms/)をご覧ください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

人工知能（AI）の統合により、スマートホーム技術の世界は革命を起こし、最先端のAI搭載デバイスであるWatcherがゲームチェンジャーとして登場しました。WatcherをHome Assistant（人気のオープンソースホームオートメーションプラットフォーム）とシームレスに統合することで、ユーザーはスマートホームにおいて新たなレベルの利便性、セキュリティ、効率性を実現できます。

この包括的なwikiでは、WatcherをHome Assistantと統合するプロセスをガイドし、スマートホームセットアップでAIの潜在能力を最大限に活用できるようにします。経験豊富なHome Assistantユーザーでも、ホームオートメーションの初心者でも、この統合により刺激的な可能性の領域が開かれ、あなたの家をよりスマートで、より反応的で、あなた独自のニーズに合わせたものにすることができます。

以下がこの記事の主要なコンテンツフレームワークです。

1. [HACSプラグインのインストール](#hacsプラグインのインストール)：Home Assistant Community Store（HACS）をインストールして、Home Assistant内でSeeed StudioのSenseCraftプラグインのインストールを可能にします。
2. [SenseCraftプラグインのインストール](#sensecraftプラグインのインストール)：Seeed StudioのSenseCraftプラグインをインストールして、Seeed Studioの製品をHome Assistantに迅速にデプロイできるようにします。
3. [SenseCAP WatcherをHome Assistantに統合](#sensecap-watcherをhome-assistantに統合)：SenseCAP WatcherをHome Assistantに統合し、設定用のビジュアルダッシュボードをセットアップします。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Greenは、家庭を自動化する最も簡単でプライバシーに焦点を当てた方法です。簡単なセットアップを提供し、すべてのスマートデバイスを1つのシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは繁栄するHome Assistantエコシステムの恩恵を受け、オープンソースによって毎月改善されます。

このチュートリアルでは、Home Assistant GreenをHome Assistantホストとして使用することをお勧めします。または、Supervisorを備えた任意のHome Assistantホストを使用できます。

## HACSプラグインのインストール

### ステップ1. Home AssistantでAdvanced Modeを開く

Home Assistantの潜在能力を最大限に引き出し、高度な機能にアクセスするために、ユーザーインターフェースで「Advanced Mode」を有効にできます。

[Home Assistant Webインターフェース](http://homeassistant.local:8123)に移動します。Home Assistantサイドバーの左下隅にあるプロフィールアイコンをクリックします。プロフィールページで、下にスクロールして**Advanced Mode**トグルを見つけます。トグルをオンの位置に切り替えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ2. Terminal & SSHをインストール

サイドバーの**Settings**をクリックして設定メニューにアクセスします。**Add-ons**をクリックしてアドオンストアにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンを参照して**Terminal & SSH**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

**Terminal & SSH**を見つけたら、それをクリックして詳細を表示します。アドオンのページでは、概要、ドキュメント、設定オプションが表示されます。アドオンをインストールするには、**Install**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ3. HACSをインストール

サイドバーで最近ダウンロードした**Terminal & SSH**を見つけます。ターミナルで、Home Assistant設定のルートであるconfigディレクトリに移動します：

```
cd /config
```

以下のコマンドを実行して、HACSインストールスクリプトをダウンロードして実行します：

```
wget -q -O - https://install.hacs.xyz | bash -
```

インストールスクリプトが完了したら、変更を適用するためにHome Assistantを再起動する必要があります。**Settings > System > Restart**に移動してUIからHome Assistantを再起動できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

再起動後、サイドバーの**Settings**をクリックして設定メニューを開きます。設定メニュー内で、**Devices & Services**に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

**ADD INTEGRATION**をクリックして、Home Assistantセットアップに新しい統合を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

検索バーで**HACS**と入力して、Home Assistant Community Store統合を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

HACSが見つかった場合、利用可能な統合のリストに表示されるはずです。それをクリックしてインストールプロセスを開始します。

ライセンス契約または利用規約がポップアップする場合があります。契約を注意深く読み、条件に同意する場合は、すべてのボックスにチェックを入れて同意を示します。**SUBMIT**をクリックしてインストールを続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

次に、GitHubアカウントでログインするよう求められます。HACSはGitHubと統合してコミュニティが作成した統合とプラグインのインストールを管理するため、これが必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

指示に従って、Home AssistantがGitHubアカウントにアクセスすることを承認します。これには通常、GitHubから提供される認証コードを入力して身元を確認することが含まれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Home AssistantがGitHubアカウントを使用することを承認すると、HACSのインストールが完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

HACSがシステムに完全に統合されるために、Home Assistantの再起動が必要な場合があります。

## SenseCraftプラグインのインストール

### ステップ4. HACS経由でのSenseCraftプラグインのインストール

サイドバーでHACSを探してクリックし、HACSインターフェースを開きます。右下隅に、メニューボタン（HACSのバージョンによって3つの点またはプラス記号）があります。**Custom repositories**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

リポジトリURLの入力を求めるダイアログボックスが表示されます。ここで、SenseCraft統合のカスタムリポジトリURLを入力します。URLを入力した後、カテゴリを選択します（SenseCraft統合の場合、**Integration**を選択します）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

**Add**をクリックします。リポジトリがHACSに追加され、**Integrations**の下のリストでSenseCraft統合を見つけることができるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft統合を見つけて「DOWNLOAD」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

この時点で、SenseCraftプラグインのインストールが正常に完了しました。

## SenseCAP WatcherをHome Assistantに統合

### ステップ5. SenseCraftからWatcherを追加

**Settings**ページで、**Devices & Services**を選択します。

次に、右下隅の**ADD INTEGRATION**ボタンをクリックして**SenseCraft**を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

SenseCraftをクリックし、Actionとして**Add device using host/id (局域网集成)**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

:::note
現在、**Add devices using SenseCraft Account（账号集成）**は利用できません。
:::

次に、デバイスオプションで**Watcher**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/4.png" style={{width:500, height:'auto'}}/></div>

次のページで、WatcherのデバイスEUIを入力してください。WatcherのEUIは[SenseCraft APPのWatcherの設定](https://wiki.seeedstudio.com/ja/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)で確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/5.png" style={{width:500, height:'auto'}}/></div>

:::note
EUIはすべて大文字で入力してください！
:::

**SUBMIT**後、WatcherのHome Assistantコンポーネントが自動的に追加され、ダッシュボードに表示されます。現在はデータなしの状態になっているはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/6.png" style={{width:1000, height:'auto'}}/></div>

### ステップ6. タスクを配置してHTTP Message Blockを設定する

WatcherのデータがHome Assistantに到達するためには、Watcherがタスクを実行している状態にし、HTTP Message Blockを設定してHome Assistantにアラームのストリームを送信する必要があります。

例えば、現在Watcherに猫が食事をしているかどうかを検出するタスクを配置しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div><br />

**Detail Config**内で、「If yes, then do the following」を見つけ、下の**HTTP Push Notification**ボックスにチェックを入れます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/7.png" style={{width:250, height:'auto'}}/></div><br />

次に**Go Setup**ボタンをクリックし、そこでHome Assistantの情報を設定して、データがHome Assistantに到達できるようにします。

- **HTTP URL**: Home AssistantのIPアドレスを完全に入力し、ポート番号8887を指定します。例：`http://192.168.1.151:8887`。

- **HTTP Token**: 空白のままにしておきます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/8.png" style={{width:250, height:'auto'}}/></div><br />

正しく入力されていることを確認した後、下部の**Update Now**をクリックします。その後、タスクがWatcherに送信されます。

次に、Watcherが猫の食事を検出すると、アラームがトリガーされ、センサーからのデータがHome Assistantに報告されます。これに基づいて、スマートホームの自動化を自由に設定できます。

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

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
