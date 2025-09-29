---
description: SenseCAP_T1000_tracker_and_Trackpac_Integrated
title: Trackpac統合
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_trackpac
last_update:
  date: 10/26/2023
  author: Jessie
---

[Trackpac](https://trackpac.io/)は、幅広いIoTデバイスの監視、制御、通知プロセスを合理化するために設計された革新的なIoT（Internet of Things）ダッシュボード管理システムです。これらのデバイスには、トラッカー、温度センサー、湿度センサー、レベルインジケーター、その他のセンサーベースのデータ測定ツールなど、さまざまな機能が含まれます。

この章の内容では、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をTrackpacに接続する方法をユーザーに案内します。


## デバイスの設定

デバイスを正しく設定するには、[クイックスタート](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker/)を確認してください。

プラットフォームを`Other Platform`に選択し、`APP EUI`を推奨値に設定します：
```cpp 
545241434B504143
```

:::tip
元に戻したい場合は、`reset`で元のキーが復元されます。
:::

次に、`Device EUI`、`APP EUI`、`APP key`をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trackpac.png" alt="pir" width={300} height="auto" /></p>


## Trackpacポータルの設定


[Trackpacポータル](https://v2.trackpac.io)にログインします。

### デバイスの追加

`Devices`に移動し、`+`アイコンをクリックして新しいデバイスを追加します。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-device-trackpac.png" alt="pir" width={800} height="auto" /></p>

`Enter Keys Manually`を選択し、デバイスに名前を付け、`Device EUI`、`APP EUI`、`APP key`を設定します。

**LoRaWAN Network**: Helium

:::note
[Heliumネットワークカバレッジ](https://explorer.helium.com/)を確認してください。
:::

**Device Type**: SenseCAP T1000

次に`Add Device`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-trackpac.png" alt="pir" width={800} height="auto" /></p>


## トラッキング

これで、SenseCAP T1000がTrackpacに正常に統合されました。データを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check-trackpac.png" alt="pir" width={800} height="auto" /></p>


## ジオフェンスの追加（オプション）


ジオフェンスを追加する前に、まず連絡先を追加する必要があります。

`Contacts`セクションに移動し、右上の`+`ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact1.png" alt="pir" width={800} height="auto" /></p>

`Name`を入力し、`Select Contact Type`を選択します：提供されたフィールドに連絡先の名前を入力します。追加する連絡先のタイプを選択します—SMS、Email、またはBothでアラートを受信するかどうかを選択します。

それぞれのフィールドに連絡先のメールアドレスや電話番号を入力します。

必要な情報をすべて入力した後、`Add`ボタンをクリックして連絡先を確定し、追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact2.png" alt="pir" width={800} height="auto" /></p>

`Geofences`オプションに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence1.png" alt="pir" width={800} height="auto" /></p>


`+`矢印をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence2.png" alt="pir" width={800} height="auto" /></p>


ジオフェンス名を入力し、半径を設定します：スライダーまたは入力フィールドを使用して、ジオフェンスの半径をメートル単位で設定します。

**アラートの設定**：ジオフェンスの境界を越えたときにアラートを受信するかどうかをオン/オフで切り替えます。

* Out of Hours：特定の時間外にのみアラートを受信するかどうかを指定します。

* Start and End Time：「Out of Hours」が選択されている場合、アラートを受信したくない時間範囲を入力します。

**アラート用連絡先の選択**：

名前を入力するか、ボックスをクリックしてリストから選択することで、ジオフェンスアラートを受信する保存済み連絡先を選択します。

**ジオフェンス中心の設定**：

* マップをクリック：マウスを使用して、ジオフェンスの中心にしたい場所をクリックします。

* Geolocateを使用：または、geolocate機能（通常はコンパスまたは位置アイコンで表示）を使用して現在の位置にズームし、ジオフェンスの中心として設定できます。

`Add Geofence`をクリックして保存します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence3.png" alt="pir" width={800} height="auto" /></p>


これで、トラッカーがジオフェンスに入るか出るときにアラートを受信できます。