---
description: SenseCAP_T1000_tracker_and_Trackpac_Integrated
title: Trackpac 統合
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_trackpac
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Trackpac](https://trackpac.io/) は、IoT（モノのインターネット）デバイスの監視、制御、通知プロセスを簡素化するために設計された革新的な IoT ダッシュボード 管理システムです。このシステムは、トラッカー、温度センサー、湿度センサー、レベルインジケーター、その他のセンサーを基盤としたデータ測定ツールなど、幅広い機能を持つデバイスを対象としています。

この章では、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を Trackpac に接続する方法を説明します。


## デバイスの設定

デバイスを正しく設定するには、[クイックスタートガイド](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker/) を確認してください。

プラットフォームを `Other Platform` に選択し、`APP EUI` を推奨値に設定します：
```cpp 
545241434B504143
```

:::tip
元のキーに戻したい場合は、`リセット` を行うことで元のキーが復元されます。
:::

次に、`Device EUI`、`APP EUI`、`APP key` をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trackpac.png" alt="pir" width={300} height="auto" /></p>


## Trackpac ポータルの設定


[Trackpac ポータル](https://v2.trackpac.io) にログインします。

### デバイスの追加

`Devices` に移動し、`+` アイコンをクリックして新しいデバイスを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-device-trackpac.png" alt="pir" width={800} height="auto" /></p>

`Enter Keys Manually` を選択し、デバイスに名前を付け、`Device EUI`、`APP EUI`、`APP key` を設定します。

**LoRaWAN ネットワーク**: Helium

:::note
[Helium ネットワークカバレッジ](https://explorer.helium.com/) を確認してください。
:::

**デバイスタイプ**: SenseCAP T1000

その後、`Add Device` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-trackpac.png" alt="pir" width={800} height="auto" /></p>


## トラッキング

これで SenseCAP T1000 が Trackpac に正常に統合され、データを確認できるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check-trackpac.png" alt="pir" width={800} height="auto" /></p>


## ジオフェンスの追加（オプション）


ジオフェンスを追加する前に、まず連絡先を追加する必要があります。

`Contacts` セクションに移動し、右上の `+` ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact1.png" alt="pir" width={800} height="auto" /></p>

`Name` を入力し、`Select Contact Type` を選択します：提供されたフィールドに連絡先の名前を入力します。連絡先が SMS、メール、またはその両方で通知を受け取るかどうかを選択します。

連絡先のメールアドレスおよび/または電話番号をそれぞれのフィールドに入力します。

必要な情報をすべて入力したら、`Add` ボタンをクリックして連絡先を追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact2.png" alt="pir" width={800} height="auto" /></p>

`Geofences` オプションに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence1.png" alt="pir" width={800} height="auto" /></p>


`+` 矢印をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence2.png" alt="pir" width={800} height="auto" /></p>


ジオフェンス名を入力し、半径を設定します：スライダーまたは入力フィールドを使用して、ジオフェンスの半径をメートル単位で設定します。

**通知の設定**: ジオフェンスの境界を越えた場合に通知を受け取るかどうかをオンまたはオフにします。

* 営業時間外: 特定の時間外のみ通知を受け取りたい場合に指定します。

* 開始時間と終了時間: 「営業時間外」が選択されている場合、通知を受け取りたくない時間範囲を入力します。

**通知を受け取る連絡先の選択**: 

保存した連絡先の中から、ジオフェンス通知を受け取る連絡先を選択します。名前を入力するか、ボックスをクリックしてリストから選択します。

**ジオフェンスの中心を設定**:

* 地図をクリック: マウスを使用して、ジオフェンスの中心にしたい場所をクリックします。

* ジオロケートを使用: または、ジオロケート機能（通常はコンパスまたは位置アイコンで表される）を使用して現在の位置にズームインし、それをジオフェンスの中心として設定します。

`Add Geofence` をクリックして保存します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence3.png" alt="pir" width={800} height="auto" /></p>


これで、トラッカーがジオフェンスに入ったり出たりすると通知を受け取ることができます。