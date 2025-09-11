---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)
title: Ubidots統合 (via Helium)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Ubidots_Helium
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

この記事では、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をHelium LNSを通じてUbidotsに接続する手順を説明します。

<div align="right">
執筆者: Juan David Tangarife - Ubidotsチームより
</div>

[出典](https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns)

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png" alt="pir" width={400} height="auto" /></p>

### 必要条件

- Ubidotsのアクティブなアカウント  
- [SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig)  
- HeliumコンソールのアクティブなアカウントといくつかのDC  
- Google Play StoreまたはApp StoreをサポートするBluetooth対応の携帯電話  

### SenseCAP Mateアプリをインストールしてトラッカーを設定する

以下のQRコードをスキャンしてください。Seeed StudioのSenseCAP Mateアプリ公式ダウンロードページに移動します。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png" alt="pir" width={200} height="auto" /></p>

インストール後、携帯電話のBluetoothを有効にしてアプリを起動します。アカウントをまだお持ちでない場合は、アプリを使用するために登録が必要です。

その後、トラッカーのボタンを少なくとも3秒間、またはLEDが点滅するまで押し続けます。次に、デバイスのリストから**Tracker T1000**を選択します。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif" alt="pir" width={800} height="auto" /></p>

デバイスをタップします：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png" alt="pir" width={300} height="auto" /></p>

**設定**タブに移動し、次に**LoRa**タブを選択します。そこで、_プラットフォーム_として**Helium**を選択し、要件に応じて_周波数プラン_を選択します。また、後の手順で必要になるため、**Device EUI、APP EUI**、および**APP Key**を必ずコピーしてください。完了したら、**送信**ボタンをタップして設定を保存します。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png" alt="pir" width={300} height="auto" /></p>

### トラッカーをHelium LNSに登録する

Heliumコンソールにログインし、**「デバイス」**セクションに移動して**「デバイスを追加」**ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png" alt="pir" width={800} height="auto" /></p>

デバイス名、LoRaWANの認証情報など、必要なフィールドを入力します。その後、**デバイスを保存**ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png" alt="pir" width={800} height="auto" /></p>

### Heliumでデコーダー関数を作成する

次のステップは、生のバイトデータを人間が読める形式にデコードする関数を設定することです。左側のパネルの**関数**タブに移動し、**新しい関数を追加**ボタンをクリックして名前を付けます。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

Seeed Studioは、このデバイス専用のデコーダーを以下の[リポジトリ](https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js)で提供しています。そのデコーダーをテキストフィールドに貼り付け、変更を保存します。

### Ubidotsへの統合を作成する

**統合**セクションに移動し、**統合を追加**をクリックしてUbidots統合を検索します。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png" alt="pir" width={800} height="auto" /></p>

**+統合を追加**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png" alt="pir" width={800} height="auto" /></p>

Ubidotsトークンを該当フィールドに入力し、**続行**ボタンをクリックして確認ポップアップメッセージを待ちます。その後、統合に名前を付けて**統合を追加**ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png" alt="pir" width={800} height="auto" /></p>

このステップを実行すると、Ubidotsアカウントに新しい**Heliumプラグイン**が作成されます。

### Ubidotsへの統合を接続するフローを作成する

**フロー**セクションに移動し、左上のドロップダウンメニューからデバイス、デコーダー関数、および統合を空白エリアにドラッグ＆ドロップします。その後、以下のGIFが示すように点をつなぎます。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif" alt="pir" width={800} height="auto" /></p>

この例では、デバイスとデコーダー関数の両方が「sensecap-lorawan-tracker」と呼ばれ、統合は「send data to ubidots」と呼ばれています。

Seeed Studioのデコーダーが返すJSONオブジェクトはUbidotsのスキーマと互換性がないため、必要なデータを抽出した後に変換が必要です。  
Heliumプラグインのデコーダーセクションに移動し、そこにあるすべてのコードを削除して、以下のコードに置き換えてください：

```cpp
# ホットスポット情報を有効にするにはTrueに設定
HOTSPOT_INFO_ENABLE = False

def format_payload(args):

    messages = args.get("decoded", {}).get("payload", {}).get("data", {}).get("messages", [])
    ubidots_payload = {}

    error = assert_error(messages[0][0])
    if error is not None:
        return error

    if HOTSPOT_INFO_ENABLE:
        hotspot_info = args.get('hotspots', None)
        ubidots_payload['SNR'] = hotspot_info[0].get('snr') if hotspot_info is not None else None
        ubidots_payload['RSSI'] = hotspot_info[0].get('rssi') if hotspot_info is not None else None
        ubidots_payload["port"] = args.get("port", None)
        ubidots_payload['Frame Counter'] = args.get('fcnt', None)

    for msg in messages:
        for sensor in msg:
            message_type = sensor.get("type", None)
            value = sensor.get("measurementValue")
            if message_type == "Latitude" or message_type == "Longitude":
                position = ubidots_payload.setdefault("position", {})
                position.update({message_type.lower(): value})
                continue
            elif message_type == "Timestamp":
                ubidots_payload["timestamp"] = value
                continue
            ubidots_payload[message_type] = value

    print(ubidots_payload)
    return ubidots_payload
    

def assert_error(data : dict):
    if "error" in data:
        return {"ERROR" : { "value" :  data["errorCode"], "context" : { "status" : data["error"]}}}
    return None
```

すべてが正しく接続されていれば、Ubidots 上で新しく作成されたデバイスに以下のような画面が表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png" alt="pir" width={800} height="auto" /></p>