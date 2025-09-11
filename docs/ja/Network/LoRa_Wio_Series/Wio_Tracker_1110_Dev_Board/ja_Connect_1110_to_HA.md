---
description: Wio Tracker 1110 を Home Assistant に接続する
title: Home Assistant 統合
keywords:
- Home assistant
- Wio tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/wio_tracker_home_assistant
sidebar_position: 5
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>



[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) を Home Assistant に統合して、リアルタイムの追跡とライブ環境分析を実現します。[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) は、使いやすい LoRa ベースの追跡開発プラットフォームであり、この開発ボードを使用してカスタム機能をさらに開発し、家庭環境をよりインテリジェントで応答性の高いものにすることができます。



## はじめに

このチュートリアルでは、[Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) を Home Assistant ホストとして使用しますが、Supervisor を備えた任意の Home Assistant ホストを使用することができます。[インストール](https://www.home-assistant.io/installation/) の詳細を確認してください。



### デバイス設定

開始する前に、Wio Tracker 1110 Dev Board の[ユーザーガイド](https://wiki.seeedstudio.com/ja/Get_Started_with_Wio-Trakcer_1110/)を読んで、プラットフォームを `SenseCAP` に設定してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>


### Home Assistant 設定

[Home Assistant のウェブインターフェース](http://homeassistant.local:8123/) に移動します。

Home Assistant のフル機能をアンロックし、高度な機能にアクセスするには、ユーザーインターフェースで `Advanced mode` を有効にすることをお勧めします。

プロフィールをクリックして、`Advanced mode` を有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>


#### アドオンのインストール

[Settings > Add-ons](https://my.home-assistant.io/redirect/supervisor) に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png" alt="pir" width={800} height="auto" /></p>


公式の `add-ons` セクションの下に、`File editor` と `Advanced SSH & Web Terminal` アドオンが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png" alt="pir" width={800} height="auto" /></p>

`Show in sidebar` を有効にすることをお勧めします。これにより、より簡単に見つけることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png" alt="pir" width={800} height="auto" /></p>

#### HACS のインストール

Home Assistant Community Store は、すべてのカスタムニーズを処理するための強力な UI を提供します。

ターミナルを開き、config ディレクトリに移動します：

```cpp
cd /config
```

HACS インストールスクリプトをダウンロードして実行します：

```cpp
wget -q -O - https://install.hacs.xyz | bash -
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png" alt="pir" width={600} height="auto" /></p>


インストールスクリプトが完了したら、変更を適用するために Home Assistant を再起動します。

`Settings` > `System` > `Restart` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>



`Settings` ->  `Devices & Services` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png" alt="pir" width={800} height="auto" /></p>


`ADD INTEGRATION` をクリックして新しい統合を追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png" alt="pir" width={800} height="auto" /></p>


`HACS` を検索してクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png" alt="pir" width={800} height="auto" /></p>


最後の項目（実験的機能）はオプションですが、それ以外のすべてを受け入れる必要があります。その後、HACS を設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png" alt="pir" width={600} height="auto" /></p>


指示に従って、Home Assistant が GitHub アカウントにアクセスできるように認証します。通常、GitHub によって提供される確認コードを入力して本人確認を行います。



HACS は GitHub API に対する認証にデバイス OAuth フローを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png
" alt="pir" width={600} height="auto" /></p>


#### SenseCraft プラグインのインストール

`HACS` に移動し、右上のアイコンをクリックして `Custom repositories` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png
" alt="pir" width={800} height="auto" /></p>

`リポジトリ` をコピーします：

**リポジトリ**: 
```cpp
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```
**カテゴリー**: `Integration`

`Add` をクリックします。これでリポジトリが HACS に追加され、`Integrations` のリストに SenseCraft 統合が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png" alt="pir" width={800} height="auto" /></p>

`SenseCraft` 統合に移動して `DOWNLOAD` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" alt="pir" width={800} height="auto" /></p>

これで SenseCraft プラグインのインストールが正常に完了しました。

#### デバイスの追加

`Settings` -> `Devices & Services` -> `SenseCraft` に移動し、`ADD DEVICE` をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png" alt="pir" width={800} height="auto" /></p>

`Add devices using SenseCraft Account(账号集成)` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png" alt="pir" width={800} height="auto" /></p>

SenseCAP Mate APP アカウントでログインし、`global` バージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png" alt="pir" width={800} height="auto" /></p>

その後、アカウント内のすべてのデバイスが一覧表示されます。接続したいデバイスを選択し、`SUBMIT` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png" alt="pir" width={800} height="auto" /></p>

接続が成功すると、デバイスとエンティティが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png" alt="pir" width={800} height="auto" /></p>

デバイスをクリックすると、アップロードされたすべてのデータが表示されます。`ADD TO DASHBOARD` をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png" alt="pir" width={800} height="auto" /></p>

#### マップカードを追加する

マップカードを追加する前に、まず位置情報エンティティを追加する必要があります。

`File Editor` を開き、`configuration.yaml` ファイルに移動して、以下のコードを追加します：

```cpp
template:
  - sensor:
      - name: "Device Location"
        state: >
          {{ states('sensor.latitude') }},{{ states('sensor.longitude') }}
        attributes:
          latitude: "{{ states('sensor.latitude') }}"
          longitude: "{{ states('sensor.longitude') }}"
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/yaml2.png" alt="pir" width={800} height="auto" /></p>

:::tip
`name` はカスタマイズ可能であり、`states` はデバイスのエンティティ ID と一致する必要があります。

エンティティ ID は `Settings` -> `Devices and Services` -> `Entities` で確認できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png" alt="pir" width={600} height="auto" /></p>
:::

ダッシュボードで `ADD CARD` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png" alt="pir" width={800} height="auto" /></p>

マップカードを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png" alt="pir" width={800} height="auto" /></p>

以下のコードを `CODE EDITOR` にコピーして、`SAVE` をクリックします。

```cpp
type: map
entities:
  - entity: sensor.device_location
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png" alt="pir" width={800} height="auto" /></p>

:::tip
エンティティはエンティティ ID と一致する必要があります。エンティティ ID は `Settings` -> `Devices and Services` -> `Entities` で確認できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png" alt="pir" width={600} height="auto" /></p>
:::

これで、マップ上でライブ位置を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png" alt="pir" width={800} height="auto" /></p>

Dev Board のすべてのデータはダッシュボードで確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>