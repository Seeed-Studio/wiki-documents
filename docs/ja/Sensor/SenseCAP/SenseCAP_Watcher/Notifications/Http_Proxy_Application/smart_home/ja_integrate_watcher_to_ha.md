---
description: Watcher をローカルで Home Assistant に接続する方法を説明します。
title: Watcher を Home Assistant に統合する
image: https://files.seeedstudio.com/wiki/watcher_ha/10.png
slug: /ja/integrate_watcher_to_ha
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher を Home Assistant に統合する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

人工知能（AI）の統合はスマートホーム技術の世界を革新し、最先端のAI搭載デバイスである Watcher はそのゲームチェンジャーとして登場しました。Watcher を人気のオープンソースホームオートメーションプラットフォームである Home Assistant とシームレスに統合することで、ユーザーはスマートホームにおける利便性、セキュリティ、効率性の新たなレベルを引き出すことができます。

この包括的なウィキでは、Watcher を Home Assistant に統合するプロセスを案内し、スマートホーム設定で AI の可能性を最大限に活用できるようにします。Home Assistant の熟練ユーザーであれ、ホームオートメーションの初心者であれ、この統合により、家がよりスマートで、応答性が高く、あなたの独自のニーズに合わせてカスタマイズされたものになります。

以下はこの記事の主要な内容フレームワークです。

1. [HACS プラグインのインストール](#installing-the-hacs-plugin): Home Assistant Community Store (HACS) をインストールし、Home Assistant 内で Seeed Studio の SenseCraft プラグインをインストールできるようにします。
2. [SenseCraft プラグインのインストール](#installing-the-sensecraft-plugin): Seeed Studio の SenseCraft プラグインをインストールし、Seeed Studio の製品を Home Assistant に迅速に導入できるようにします。
3. [SenseCAP Watcher を Home Assistant に統合する](#integrate-sensecap-watcher-into-home-assistant): SenseCAP Watcher を Home Assistant に統合し、設定用のビジュアルダッシュボードをセットアップします。

## はじめに

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

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

Home Assistant Green は、最も簡単でプライバシーに配慮した方法で家を自動化するためのデバイスです。簡単なセットアップを提供し、すべてのスマートデバイスを1つのシステムで制御できるようにします。デフォルトでデータはすべてローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受けており、オープンソースによって毎月改善されます。

このチュートリアルでは、Home Assistant のホストとして Home Assistant Green を使用することをお勧めしますが、Supervisor を備えた任意の Home Assistant ホストを使用することも可能です。

## HACSプラグインのインストール

### ステップ 1. Home Assistantで高度なモードを有効化

Home Assistantの可能性を最大限に引き出し、高度な機能にアクセスするには、ユーザーインターフェースで「高度なモード」を有効にすることができます。

[Home Assistantのウェブインターフェース](http://homeassistant.local:8123)に移動します。Home Assistantのサイドバーの左下にあるプロフィールアイコンをクリックします。プロフィールページで下にスクロールし、**高度なモード**のトグルを見つけます。このトグルをオンの位置に切り替えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. Terminal & SSHをインストール

サイドバーで**設定**をクリックして設定メニューにアクセスします。**アドオン**をクリックしてアドオンストアにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンをブラウズして**Terminal & SSH**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

**Terminal & SSH**を見つけたら、それをクリックして詳細を表示します。アドオンのページでは、概要、ドキュメント、および設定オプションが表示されます。アドオンをインストールするには、**インストール**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. HACSをインストール

サイドバーで最近ダウンロードした**Terminal & SSH**を見つけます。ターミナルで、Home Assistantの設定のルートであるconfigディレクトリに移動します：

```
cd /config
```

次のコマンドを実行して、HACSインストールスクリプトをダウンロードして実行します：

```
wget -q -O - https://install.hacs.xyz | bash -
```

インストールスクリプトが完了したら、変更を適用するためにHome Assistantを再起動する必要があります。UIを通じて再起動するには、**設定 > システム > 再起動**に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

再起動後、サイドバーで**設定**をクリックして設定メニューを開きます。設定メニュー内で、**デバイスとサービス**に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

**統合を追加**をクリックして、Home Assistantセットアップに新しい統合を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

検索バーに**HACS**と入力して、Home Assistant Community Store統合を探します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

HACSが見つかった場合、利用可能な統合のリストに表示されます。それをクリックしてインストールプロセスを開始します。

ライセンス契約または利用規約が表示される場合があります。契約をよく読み、同意する場合はすべてのチェックボックスをチェックして同意を示します。**送信**をクリックしてインストールを進めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

次に、GitHubアカウントでログインするよう求められます。これは、HACSがGitHubと統合してコミュニティが作成した統合やプラグインのインストールを管理するために必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

指示に従って、Home AssistantがGitHubアカウントにアクセスすることを許可します。通常、GitHubから提供される確認コードを入力して本人確認を行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Home AssistantがGitHubアカウントを使用することを許可すると、HACSのインストールが完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

HACSをシステムに完全に統合するには、Home Assistantを再起動する必要がある場合があります。

## SenseCraftプラグインのインストール

### ステップ4. HACSを使用したSenseCraftプラグインのインストール

サイドバーでHACSを探し、それをクリックしてHACSインターフェースを開きます。右下にメニューボタン（三点またはプラス記号、HACSのバージョンによって異なります）が表示されます。**Custom repositories**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

ダイアログボックスが表示され、リポジトリURLを入力するよう求められます。ここで、SenseCraft統合用のカスタムリポジトリURLを入力します。URLを入力した後、カテゴリを選択します（SenseCraft統合の場合は**Integration**を選択します）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

**Add**をクリックします。これでリポジトリがHACSに追加され、**Integrations**のリスト内でSenseCraft統合を見つけることができるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft統合を見つけて「DOWNLOAD」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

これで、SenseCraftプラグインのインストールが正常に完了しました。

## SenseCAP WatcherをHome Assistantに統合する

### ステップ5. SenseCraftからWatcherを追加する

**Settings**ページで、**Devices & Services**を選択します。

右下の**ADD INTEGRATION**ボタンをクリックし、**SenseCraft**を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

SenseCraftをクリックし、アクションとして**Add device using host/id (局域网集成)**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

:::note
現在、**Add devices using SenseCraft Account（账号集成）**は利用できません。
:::

次にデバイスオプションで**Watcher**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/4.png" style={{width:500, height:'auto'}}/></div>

次のページで、WatcherのデバイスEUIを入力してください。WatcherのEUIは[SenseCraft APPのWatcher設定](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_look_tool/#other-settings)内で確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/5.png" style={{width:500, height:'auto'}}/></div>

:::note
EUIはすべて大文字で入力してください！
:::

**SUBMIT**をクリックすると、WatcherのHome Assistantコンポーネントが自動的に追加され、Dashboard内に表示されます。この時点ではデータがない状態です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/6.png" style={{width:1000, height:'auto'}}/></div>

### ステップ6. タスクを配置し、HTTPメッセージブロックを設定する

WatcherのデータをHome Assistantに送信するには、Watcherがタスクを実行している状態で、HTTPメッセージブロックを設定してアラームのストリームをHome Assistantに送信する必要があります。

例えば、現在Watcherに猫が食事をしているかどうかを検出するタスクを配置しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div><br />

**Detail Config**内で「もし条件が満たされた場合、以下を実行する」を見つけ、下の**HTTP Push Notification**ボックスをチェックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/7.png" style={{width:250, height:'auto'}}/></div><br />

次に**Go Setup**ボタンをクリックし、Home Assistant情報を設定してデータがHome Assistantに到達するようにします。

- **HTTP URL**: Home AssistantのIPアドレスを完全に記入し、ポート番号8887を指定します。例: `http://192.168.1.151:8887`。

- **HTTP Token**: 空白のままにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/8.png" style={{width:250, height:'auto'}}/></div><br />

正しく記入されていることを確認したら、下部のUpdate Nowをクリックします。これでタスクがWatcherに送信されます。

次に、Watcherが猫が食事をしていることを検出すると、アラームがトリガーされ、センサーからのデータがHome Assistantに報告されます。これに基づいて、スマートホームの自動化を自由に設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>サンプルDashboardコードを表示するにはクリックしてください</summary>

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

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>