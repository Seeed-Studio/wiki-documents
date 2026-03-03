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
  date: 1/25/2024
  author: Jessie
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>

[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) を Home Assistant に統合して、リアルタイム追跡とライブ環境分析を実現します。[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) は、ユーザーフレンドリーなLoRaベースの追跡開発プラットフォームです。この開発ボードを使用してより多くのカスタム機能を開発し、ホーム環境をより知的で応答性の高いものにできます。

## はじめに

このチュートリアルでは、Home Assistant ホストとして [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) を使用します。Supervisorを搭載した任意の Home Assistant ホストを使用できます。詳細については [Installation](https://www.home-assistant.io/installation/) を確認してください。

### デバイス設定

開始する前に、Wio Tracker 1110 Dev Board の [ユーザーガイド](https://wiki.seeedstudio.com/ja/Get_Started_with_Wio-Trakcer_1110/) を読み、プラットフォームを `SenseCAP` に選択していることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

### Home Assistant 設定

[Home Assistant ウェブインターフェース](http://homeassistant.local:8123/) にアクセスします。

Home Assistant の全機能を活用し、高度な機能にアクセスするために、ユーザーインターフェースで `Advanced mode` を有効にすることをお勧めします。

プロフィールをクリックし、`Advanced mode` を有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>

#### アドオンのインストール

[Settings > Add-ons](https://my.home-assistant.io/redirect/supervisor) に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png" alt="pir" width={800} height="auto" /></p>

公式の `add-ons` セクションで、`File editor` と `Advanced SSH & Web Terminal` アドオンを見つけることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png" alt="pir" width={800} height="auto" /></p>

より簡単に見つけられるように、`Show in sidebar` を有効にすることをお勧めします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png" alt="pir" width={800} height="auto" /></p>

#### HACS のインストール

Home Assistant Community Store は、すべてのカスタムニーズのダウンロードを処理するための強力なUIを提供します。

ターミナルを開き、config ディレクトリに移動します：

```cpp
cd /config
```

HACS インストールスクリプトをダウンロードして実行します：

```cpp
wget -q -O - https://install.hacs.xyz | bash -
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png" alt="pir" width={600} height="auto" /></p>

インストールスクリプトが完了したら、Home Assistantを再起動して変更を適用します。

`Settings` > `System` > `Restart`に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>

`Settings` -> `Devices & Services`に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png" alt="pir" width={800} height="auto" /></p>

`ADD INTEGRATION`をクリックして新しい統合を追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png" alt="pir" width={800} height="auto" /></p>

`HACS`を検索してクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png" alt="pir" width={800} height="auto" /></p>

最後の項目（実験的機能）のみがオプションです。HACSをセットアップする前に、それより上のすべてを受け入れる必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png" alt="pir" width={600} height="auto" /></p>

指示に従ってHome AssistantがあなたのGitHubアカウントにアクセスすることを承認します。これは通常、GitHubから提供される認証コードを入力してあなたの身元を確認することを含みます。

HACSはGitHub APIに対する認証にデバイスOAuthフローを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png
" alt="pir" width={600} height="auto" /></p>

#### SenseCraftプラグインのインストール

`HACS`に移動し、右上角のアイコンをクリックして、`Custom repositories`を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png
" alt="pir" width={800} height="auto" /></p>

`Repositorie`をコピーします：

**Repository**:

```cpp
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

**カテゴリ**: `Integration`

`Add` をクリックします。リポジトリがHACSに追加され、`Integrations` の下のリストでSenseCraftインテグレーションも見つけることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png" alt="pir" width={800} height="auto" /></p>

`SenseCraft` インテグレーションに移動し、`DOWNLOAD` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" alt="pir" width={800} height="auto" /></p>

これでSenseCraftプラグインのインストールが正常に完了しました。

#### デバイスの追加

`Settings` -> `Devices & Services` -> `SenseCraft` に移動し、`ADD DEVICE` をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png" alt="pir" width={800} height="auto" /></p>

`Add devices using SenseCraft Account(账号集成)` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png" alt="pir" width={800} height="auto" /></p>

SenseCAP Mate APPアカウントでログインし、`global` バージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png" alt="pir" width={800} height="auto" /></p>

その後、アカウント内のすべてのデバイスがリストされるので、接続したいデバイスを選択し、`SUBMIT` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png" alt="pir" width={800} height="auto" /></p>

接続が成功すると、デバイスとエンティティが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png" alt="pir" width={800} height="auto" /></p>

デバイスをクリックすると、アップロードされたすべてのデータが表示されます。`ADD TO DASHBOARD` をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png" alt="pir" width={800} height="auto" /></p>

#### マップカードの追加

マップカードを追加する前に、まず位置エンティティを追加する必要があります。

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
`name` はカスタマイズ可能で、`states` はデバイスのエンティティIDと同じである必要があります。

エンティティIDは `Settings` -> `Devices and Services` -> `Entities` で確認できます
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png" alt="pir" width={600} height="auto" /></p>
:::

ダッシュボードで `ADD CARD` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png" alt="pir" width={800} height="auto" /></p>

Map カードを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png" alt="pir" width={800} height="auto" /></p>

コードを `CODE EDITOR` にコピーして `SAVE` をクリックします。

```cpp
type: map
entities:
  - entity: sensor.device_location
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png" alt="pir" width={800} height="auto" /></p>

:::tip
Entityはあなたのentity idと同じである必要があります。entity idは`Settings` -> `Devices and Services` -> `Entities`で確認できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png" alt="pir" width={600} height="auto" /></p>
:::

マップ上でライブロケーションを確認できるようになりました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png" alt="pir" width={800} height="auto" /></p>

Dev Boardのすべてのデータはダッシュボードで確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>
