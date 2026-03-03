---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API リファレンス
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference
aliases:
  - /ja/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference
last_update:
  date: 02/14/2023
  author: Matthew
---

<div class="post-content">
<div id="toc">

&nbsp;

</div>
<h2 id="the-connection-information" class="clickable-header top-level-header">接続情報</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Host: 中国ステーション: sensecap-openstream.seeed.cn グローバルステーション: sensecap-openstream.seeed.cc</li>
  <li>Port: MQTTの場合は1883、またはMQTT Over WebSocketの場合は8083</li>
  <li>ClientID: org-&lt;Organization ID&gt;-&lt;Random ID&gt;、&lt;Orgnization ID&gt;をSenseCAP Portalから取得したものに置き換え、&lt;Random ID&gt;をランダムに生成した数字と小文字に置き換えてください。</li>
  <li>Username: org-&lt;Organization ID&gt;、&lt;Organization ID&gt;をダッシュボードから取得したものに置き換えてください（クイックスタートを参照）。</li>
  <li>Password: SenseCAP Portalの「security /API Access Key」でAccess API keysを取得してください（クイックスタートを参照）。</li>
</ul>
<h2 id="publish-and-subscribe-model" class="clickable-header top-level-header">パブリッシュ・アンド・サブスクライブモデル</h2>
<i class="icon-arrow-up back-to-top"></i>SenseCAP OpenStream APIは、MQTTプロトコルと同様に「パブリッシュ・アンド・サブスクライブモデル」を実装しています。標準的なpub-subプロトコルで通信するために、MQTTまたはMQTT Over WebSocketを通じてサーバーをSenseCAP OpenStream APIに接続できます。

メッセージを受信するために「subscribe」できます。「subscribe」は、デバイスからのテレメトリデータを継続的に監視する最も一般的な方法です。
<h2 id="message-topic" class="clickable-header top-level-header">メッセージトピック</h2>
<i class="icon-arrow-up back-to-top"></i>
<h3 id="receive-devices-telemeasuring-data">デバイスのテレメトリデータの受信</h3>
トピック形式: /device_sensor_data/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Channel&gt;/&lt;Reserved&gt;/&lt;MeasurementID&gt;
<table>
<thead>
<tr>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>あなたの「Organization ID」で、SenseCAP Portalで確認できます。固有のOrganization IDを所有しており、すべてのトピックでこれが必要になります。</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>デバイスの一意識別子</td>
</tr>
<tr>
<td>Channel</td>
<td>センサーが接続されるデバイス上の物理ソケット</td>
</tr>
<tr>
<td>Reserved</td>
<td>予約済み</td>
</tr>
<tr>
<td>MeasurementID</td>
<td>このドキュメントの「測定IDリスト」を参照してください</td>
</tr>
</tbody>
</table>
<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>注意:</b> "+"は、このフィールドにフィルタリング条件がないことを意味し、すべての可能な設定にマッチします。したがって、"/+/+/+/+"は、すべての"&lt;DeviceEUI&gt;"、"&lt;Channel&gt;"、"&lt;SensorEUI&gt;"、"&lt;MeasurementID&gt;"をリッスンすることを意味します</div>
トピックは、指定されたデバイス、チャネル、測定タイプでのリスニングを実装するためのフィルタリング条件を指定できます。例えば、デバイスIDが「2F000000000000」のデバイスのみをリッスンしたい場合、&lt;DeviceEUI&gt;フィールドを2F000000000000に置き換えることができます。

この例の「2F000000000000」は、すでにあなたのアカウントにバインドされているデバイスである必要があります。そして、&lt;OrgID&gt;を常にあなた自身の「Organization ID」に置き換えることを忘れないでください。
<h4 id="message-body">メッセージボディ</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

これは、デバイスによってアップロードされたセンサー測定データで、JSON形式に準拠しており、JSONパーサーで解析できます。一般的に、ほとんどの機能要件では、ボディはトピック内のいくつかのフィールドと組み合わせて使用する必要があります。
<table>
<thead>
<tr>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>センサーの測定値</td>
</tr>
<tr>
<td>timestamp</td>
<td>データの収集タイムスタンプ、単位はミリ秒</td>
</tr>
</tbody>
</table>
<h3 id="receive-devices-status-data">デバイスのステータスデータの受信</h3>
トピック形式: /device_status_event/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Reserved&gt;/&lt;StatusID&gt;
<table>
<thead>
<tr>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>あなたの「Organization ID」で、SenseCAP Portalで確認できます。固有のOrganization IDを所有しており、すべてのトピックでこれが必要になります。</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>デバイスの一意識別子</td>
</tr>
<tr>
<td>Reserved</td>
<td>予約済み</td>
</tr>
<tr>
<td>StatusID</td>
<td>このドキュメントの「デバイスステータスIDリスト」を参照してください</td>
</tr>
</tbody>
</table>
予期しないIDへのサブスクライブを避けるために、デバイス状態IDリストに従って必要なStatusIDをサブスクライブしてください
<h4 id="message-body-1">メッセージボディ</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

<table>
<thead>
<tr>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>センサーのステータス値</td>
</tr>
<tr>
<td>timestamp</td>
<td>データの収集タイムスタンプ、単位はミリ秒</td>
</tr>
</tbody>
</table>
</div>