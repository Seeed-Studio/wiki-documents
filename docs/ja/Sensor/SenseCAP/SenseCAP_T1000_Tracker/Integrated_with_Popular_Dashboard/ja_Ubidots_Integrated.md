---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated
title: Ubidots 統合 (TTS 経由)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_Ubidots_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Ubidots](https://ubidots.com/?_gl=1%2a89g1t2%2a_ga%2aMzUzMzM3MDY5LjE2NjE5MzcyMTI.%2a_ga_VEME7QQ5EZ%2aMTY2MzY0Mzc4NS44LjEuMTY2MzY0NTI3MC4wLjAuMA..) は、コードを書くことなく、またはソフトウェア開発チームを雇うことなく、IoT アプリケーションを迅速に組み立てて展開できるローコード IoT アプリケーション開発プラットフォームです。現在、40,000 以上のアプリケーションが Ubidots を利用して接続されています。

IoT アプリケーション構築の需要が高まる中、私たちは Ubidots と協力し、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を The Things Network を通じて簡単に Ubidots に追加できるよう、コミュニティをサポートしています。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/09/%E5%8D%9A%E5%AE%A2%E6%8F%92%E5%9B%BE.jpg" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、まず [SenseCAP T1000 を TTS に接続する](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN) を確認し、SenseCAP T1000 Tracker を TTS に接続してください。

## Ubidots の設定

まず、[Ubidots](https://stem.ubidots.com/accounts/signin/) にアカウントを作成してください。

Ubidots アカウントにログインし、ダッシュボードの上部にある「Devices」タブを見つけます。そのドロップダウンリストから「Plugins」を選択します。

### Ubidots プラグイン

**+** または **Create Data Plugin** ボタンをクリックして、新しいプラグインを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/plugins.png" alt="pir" width={800} height="auto" /></p>

利用可能なプラグインが表示されたら、**The Things Stack** プラグインを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/addtts.png" alt="pir" width={800} height="auto" /></p>

次に、Ubidots トークンを選択する必要があります。**Default token** を使用することも、新しいトークンを作成することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/default_token.png" alt="pir" width={800} height="auto" /></p>

新しいトークンを作成するには、まず右上のアバターをクリックし、**API Credentials** を選択します。その後、Default token の下にある **More** を選択し、API Credentials ページ内で新しいトークンを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_toekn.png" alt="pir" width={800} height="auto" /></p>

**>** を選択して続行し、チェックマークをクリックして完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/name-description.png" alt="pir" width={800} height="auto" /></p>

### デコーダーの設定

プラグインを作成したら、デコーダーセクションに移動し、すべてのコードを削除して以下のコードに置き換えます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decoding_function.png" alt="pir" width={800} height="auto" /></p>

```cpp
const HOTSPOT_INFO = false;

// エラーが存在する場合の処理
function handleErrorIfExists(data){
	const error = 'error' in data;
	if (error) {
        const errorMsg = { "error": { "value": data.errorCode, "context" : { "reason": data.error } } };
		return errorMsg;
	}
	return false;
}

// 緯度を追加
function addLat(lat, ubidotsPayload){
	ubidotsPayload.position.context.lat = lat;
}

// 経度を追加
function addLng(lng, ubidotsPayload){
	ubidotsPayload.position.context.lng = lng;
}

const coordinateActions = {
	"Longitude": addLng,
	"Latitude": addLat,
}

// ペイロードキーの割り当て
const assignPayloadKeys = (data, ubidotsPayload) => {
	const { type, measurementValue } = data;

	if (type === "Longitude" || type === "Latitude") {
		if (!ubidotsPayload.position) {
			ubidotsPayload.position = { "value": 1, "context": { "lat": undefined, "lng": undefined } };
		}
		coordinateActions[type](measurementValue, ubidotsPayload);
	}
	else if (data.type === "Timestamp") {
		ubidotsPayload.timestamp = data.measurementValue;
	}
	else {
		ubidotsPayload[type] = measurementValue;
	}
};

// Ubidots ペイロードの構築
function buildUbidotsPayload(data){
	const ubidotsPayload = {};
	data.forEach(innerData => {
		innerData.forEach(innerInnerData => {
			assignPayloadKeys(innerInnerData, ubidotsPayload);
		});
	});
	return ubidotsPayload;
}

// ペイロードのフォーマット
async function formatPayload(args){

	const data = args.uplink_message.decoded_payload.messages;
	let ubidotsPayload = {};

	const error = handleErrorIfExists(data[0][0]);
	if (error) return error;

	if (HOTSPOT_INFO) {
		const { hotspots, port, fcnt } = args;
		const { snr, rssi } = hotspots[0];
		Object.assign(ubidotsPayload, { SNR: snr, RSSI: rssi, port, 'Frame Counter': fcnt });
	}
	ubidotsPayload = buildUbidotsPayload(data);
	console.log(ubidotsPayload);
	return ubidotsPayload;
};

module.exports = { formatPayload };
```

## The Things Stack の設定

Ubidots 上でのセットアップを準備したら、Ubidots Webhook テンプレートを使用して The Things Stack 上で Webhook 統合を作成する必要があります。

The Things Stack で、**Integrations** → **Webhooks** に移動し、**Add Webhook** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Ubidots Webhook テンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-ubidots.png" alt="pir" width={800} height="auto" /></p>

Webhook ID を入力して統合に名前を付け、Plugin ID と Ubidots トークンの値を貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ubi_web.png" alt="pir" width={800} height="auto" /></p>

:::info
Plugin ID を見つけるには、新しく作成したプラグインをクリックし、左側の Decoder タブに移動します。Plugin ID は HTTPs エンドポイント URL の一部として表示されます（以下の画像でハイライトされています）。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ids.png" alt="pir" width={800} height="auto" /></p>

## データの監視

統合を完了した後、**Devices** メニューに移動します。エンドデバイスがアップリンクメッセージを送信すると、エンドデバイスリストに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check_data_ubi.png" alt="pir" width={800} height="auto" /></p>