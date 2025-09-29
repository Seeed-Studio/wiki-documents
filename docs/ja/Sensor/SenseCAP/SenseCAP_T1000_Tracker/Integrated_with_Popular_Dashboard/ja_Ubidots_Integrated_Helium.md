---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)
title:  Ubidots統合（Helium経由）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Ubidots_Helium
last_update:
  date: 8/16/2023
  author: Jessie
---


この記事では、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をHelium LNS経由でUbidotsに接続するプロセスを説明します。

<div align="right">
Ubidotsチーム - Juan David Tangarife 著
</div>

[ソース](https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns)

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png" alt="pir" width={400} height="auto" /></p>

### 必要なもの

アクティブなUbidotsアカウント
[SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig)
DCを持つHeliumコンソールのアクティブアカウント
Google Play StoreまたはAppStoreとBluetoothをサポートする携帯電話

### SenseCAP Mateアプリのインストールとトラッカーの設定

以下のQRコードをスキャンしてください。Seeed StudioのSenseCAP Mateアプリ公式ダウンロードページに移動します。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png" alt="pir" width={200} height="auto" /></p>

インストールが完了したら、携帯電話のBluetoothを有効にしてアプリを起動してください。まだアカウントをお持ちでない場合は、アプリを使用するために登録する必要があります。

その後、トラッカーのボタンを少なくとも3秒間、またはLEDが点滅し始めるまで長押しします。次に、デバイスのリストから**Tracker T1000**を選択します。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif" alt="pir" width={800} height="auto" /></p>

デバイスをタップします：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png" alt="pir" width={300} height="auto" /></p>

**設定**タブに移動し、次に**LoRa**タブに移動します。そこで_プラットフォーム_として**Helium**を選択し、要件に応じて_周波数プラン_を選択します。また、後の手順で必要になるため、**Device EUI、APP EUI**、**APP Key**をコピーしてください。完了したら、**送信**ボタンをタップして設定を保存します。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png" alt="pir" width={300} height="auto" /></p>

### Helium LNSでのトラッカー登録

Heliumコンソールにログインし、**「Devices」**セクションに移動して**「Add device」**ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png" alt="pir" width={800} height="auto" /></p>

デバイス名**、**LoRaWAN認証情報などの必要なフィールドを入力します。次に**Save Device**ボタンをクリックします。
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png" alt="pir" width={800} height="auto" /></p>

### Heliumでのデコーダー関数の作成

次のステップは、生のバイトを人間が読める形式にデコードする関数を設定することです。左側のパネルの**Function**タブに移動します。次に**Add New Function**ボタンをクリックして名前を付けます：
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

Seeed Studioは、以下の[リポジトリ](https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js)でこのデバイス専用のデコーダーを提供しています。そのデコーダーをテキストフィールドに貼り付けて、変更を保存します。

### Ubidotsへの統合の作成

**Integrations**セクションに移動し、**Add integration**をクリックしてUbidots統合を検索します：
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png" alt="pir" width={800} height="auto" /></p>

**+Add integration**をクリックします
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png" alt="pir" width={800} height="auto" /></p>

該当するフィールドにUbidotsトークンを入力し、**Continue**ボタンをクリックして確認ポップアップメッセージを待ちます。その後、統合に名前を付けて**Add Integration**ボタンをクリックします：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png" alt="pir" width={800} height="auto" /></p>

この手順を実行すると、Ubidotsアカウントに新しい**Heliumプラグイン**が作成されます。

### 統合をUbidotsに接続するフローの作成

**Flows**セクションに移動し、左上角のドロップダウンメニューから、デバイス、デコーダー関数、統合を空白エリアにドラッグアンドドロップし、以下のGIFに示すようにドットを接続します：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif" alt="pir" width={800} height="auto" /></p>

この例では、デバイスとデコーダー関数の両方が「sensecap-lorawan-tracker」と呼ばれ、統合は「send data to ubidots」と呼ばれています。

Seeed Studioのデコーダーが返すJSONオブジェクトはUbidotsスキーマと互換性がないため、関心のあるデータを抽出した後に変換が必要です。  
Heliumプラグインのデコーダーセクションに移動し、そこにあるすべてのコードを削除して、以下のコードに置き換えます：  

```cpp
#Set to true in order to enable hotspot information
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

すべてが正しく接続されていれば、Ubidots上で新しく作成されたデバイスで以下のように表示されるはずです
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png" alt="pir" width={800} height="auto" /></p>
