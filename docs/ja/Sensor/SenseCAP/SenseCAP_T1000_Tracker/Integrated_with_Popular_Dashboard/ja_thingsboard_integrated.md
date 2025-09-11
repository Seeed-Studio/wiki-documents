---
description: SenseCAP T1000 トラッカーと ThingsBoard の統合
title: ThingsBoard 統合 (via TTS)
keywords:
- ThingsBoard
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/thingsboard_integrated
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[ThingsBoard](https://thingsboard.io/) は、IoT プロジェクトの迅速な開発、管理、スケーリングを可能にするオープンソースの IoT プラットフォームです。私たちの目標は、IoT アプリケーションのサーバーサイドインフラストラクチャを提供する、すぐに使える IoT クラウドまたはオンプレミスソリューションを提供することです。

この章の内容では、[SenseCAP T1000 トラッカー](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を TTN を介して ThingsBoard に接続する方法をユーザーに案内します。

## はじめに

セットアップを開始する前に、まず [SenseCAP T1000 を TTS に接続する](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN) を確認して、SenseCAP T1000 トラッカーを TTS に接続してください。

## ThingsBoard の設定

まず、[ThingsBoard](https://thingsboard.cloud/) にアカウントを作成してください。

### コンバーターの作成

最初に、TTS からメッセージを受信するために使用される Uplink Data Converter を作成する必要があります。

`Data converters` に移動し、`Create new converter` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter.png" alt="pir" width={800} height="auto" /></p>

コンバーターに名前を付け、`Debug mode` を有効にし、以下のコードをコピーして `Add` をクリックします。

```cpp
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var telemetry = {};

var messages = data.uplink_message.decoded_payload.messages[0];
for (var i = 0; i < messages.length; i++) {
    var measurement = messages[i];
    
    var type = measurement.type.toLowerCase();
    var typeKey = '';
    for (var j = 0; j < type.length; j++) {
        if (type[j] === ' ') {
            typeKey += '_';
        } else {
            typeKey += type[j];
        }
    }

    telemetry[typeKey] = measurement.measurementValue;
}

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: telemetry
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter2.png" alt="pir" width={800} height="auto" /></p>

### 統合の追加

`Integration` に移動し、`Add Integration` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/integrate1.png" alt="pir" width={800} height="auto" /></p>

**Type**: `The Things Stack Community`<br/>
**Enable**: `Enable integration`  `Debug mode`  `Allow create devices or assets`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-inte.png" alt="pir" width={800} height="auto" /></p>

`Select existing` を選択し、先ほど作成したものを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-converter.png" alt="pir" width={800} height="auto" /></p>

`Downlink data converter` はスキップします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/skip-down.png" alt="pir" width={800} height="auto" /></p>

**Region**: TTS 内でアプリケーションが登録された地域<br/>
**Username**: TTS のユーザー名<br/>
**Password**: TTS のパスワード<br/>
**Use API v3**: `Enable` に設定

:::tip
情報は TTS MQTT 統合で確認できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createNEW.png" alt="pir" width={800} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-inte2.png" alt="pir" width={800} height="auto" /></p>

### データビュー

`Entities` -> `Devices` に移動すると以下が確認できます：

* 新しいデバイスが ThingsBoard に登録されている
* `Latest Telemetry` セクションでデバイスからの更新データが確認できる

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telemetry.png" alt="pir" width={800} height="auto" /></p>

### Dashboard の追加

`Dashboards` に移動し、`Create new dashboard` をクリックします。

ダッシュボードのタイトルを入力し、`Next` をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-dash.png" alt="pir" width={800} height="auto" /></p>

`widget` を追加し、追加するウィジェットを選択します。

### ロケーションマップ

`map` ウィジェットを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map1.png" alt="pir" width={800} height="auto" /></p>

**Type**: `Device`<br/>
**Device**: 作成したデバイス<br/>
**Data key**: `latitude`, `longitude`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-map.png" alt="pir" width={800} height="auto" /></p>

### その他のパラメータ

上記の手順を参考にして、他のウィジェットを追加します。

#### 温度

**Device**: 作成したデバイス<br/>
**Data key**: `air_temperature`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-temp.png" alt="pir" width={800} height="auto" /></p>

#### バッテリー

**Device**: 作成したデバイス<br/>
**Data key**: `battery`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-battery.png" alt="pir" width={800} height="auto" /></p>

以下は基本的な例です。独自のダッシュボードをカスタマイズすることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard3.png" alt="pir" width={800} height="auto" /></p>