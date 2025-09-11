---
description: Home AssistantとSenseCAPセンサーを活用する方法
title: Home AssistantとSenseCAPセンサーを活用する方法
keywords:
- LoRaWAN
- センサー
- Home Assistant
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/home_assistant_with_sensecap_lorawan_sensors
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

LoRaWAN®センサーをHome Assistantに統合する方法を共有します。


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527151/_HMPRnIpF0p.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={800} height="auto" /></p>


スマートホームの分野にはすでに多くの知的デバイス（センサー、ライト、スイッチ）が存在しており、Apple Homekit、Google Home、Amazon Alexaなどの複数のアプリを使用して異なるデバイスを操作しているかもしれません。それらを一つの場所で相互接続することが非常に求められています。2022年9月にMatter 1.0がリリースされ、エコシステムを統一することを目指しているというニュースを最近読みましたが、これには時間がかかるでしょう。

実際、Matterがリリースされる数年前から、[Home Assistant](https://www.home-assistant.io/)は完全にカスタマイズされたスマートホームエコシステムを構築するための最良のプラットフォームの一つであり、主流のデバイスを統合し、自動化ルールを設定して家をより良く、よりスマートな場所にすることができます。これは私が学びたいことでもあり、その経験を共有したいと思っています。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527037/image_AC7YowxKbT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>


この記事シリーズでは、Home Assistantでまともなスマートホームを構築し、Seeed StudioのSenseCAP製品のセンサーを使用する方法を共有します。そして、これが最初のマイルストーンです。

Home Assistantをゼロから実行し、SenseCAPの気象センサーを統合します。


以下はその手順です：

* Raspberry PiにHome Assistantをインストールする
* SenseCAPセンサーをアプリでオンボードする
* MQTT統合を追加し、SenseCAPデータを購読する
* 異なるセンサー測定値でエンティティを追加する
* センサーデータダッシュボードを作成する

### Raspberry PiにHome Assistantをインストールする

Home Assistantを始めるには、[公式チュートリアル](https://www.home-assistant.io/getting-started/)が非常に役立ちます。

Home Assistantを実行するためのデバイスやプラットフォームは多数ありますが、私は使っていないRaspberry Piを持っているので、[こちら](https://www.home-assistant.io/installation/raspberrypi)から始めます。

SDカードをフラッシュする際にBalena Etcherを使用する代わりに、公式の[Raspberry Pi Imager](https://www.raspberrypi.com/software/)を使用することをお勧めします。軽量で使いやすいです。



<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527038/image_xXpG0MaQJS.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

32GB以上のMicro SDカードを用意し、コンピュータに接続します。ここではMacBookを例に使用します。


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527041/image_vb64IHZx5B.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

特定の目的用OSに移動し、Home AssistantとHome Automationを選択します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527042/image_xf5OXUliuo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Home Assistantを選択します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527044/image_tIB5zVlxm5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

RPi4用のHome Assistant OSバージョンを選択します。


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527045/image_UQdhYJt88T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次にSDカードドライブを選択します。注意してください。間違ったディスクを選択すると、ドライバがフォーマットされ、貴重なデータを失う可能性があります。


<img src="https://hackster.imgix.net/uploads/attachments/1527046/image_Le62Kc3fGH.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />
<img src="https://hackster.imgix.net/uploads/attachments/1527047/image_tiE1gwdlBw.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

インターネット速度によっては、Home Assistantイメージのダウンロードに時間がかかる場合があります。

次に、micro SDカードをRaspberry Piに挿入し、イーサネットケーブルを接続します。起動すると、赤色LEDが点灯し、緑色LEDが点滅を開始します。緑色LEDが点滅しない場合は、イメージフラッシュ中に何か問題が発生していることを示します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527053/image_UaCcGJHjzs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

`http://homeassistant.local:8123/`にアクセスし、インストールが完了するのを待ちます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527051/image_rEn7iALm78.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={400} height="auto" /></p>

この[リンク](https://www.home-assistant.io/getting-started/onboarding/)に従ってHome Assistantアカウントを登録し、ログインします。

ついに、Home Assistantがインストールされました。


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527055/image_5mAwRA0PMG.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>




### アプリでSenseCAPセンサーをオンボードする

SenseCAPは産業用センサー機器およびゲートウェイ製品のシリーズであり、その中でもS210x LoRaWANセンサーは主に長距離およびバッテリー駆動のシナリオ向けに設計されています。


私は新しく発売された[S2120 Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)を使用し、6階建ての屋根の上に設置したいと考えています。LoRaの長距離通信機能が非常に役立ちました。この製品は、迅速な設置のためのすべてのアクセサリーが付属しています。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527056/image_61yawsK9oe.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

このWeather Stationは標準的なLoRaWANデバイスとして機能するため、自宅で使用するために[SenseCAP M2屋内LoRaWANゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)を利用できます。このゲートウェイには磁石ベースの3dBiアンテナが付属しています。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527058/image_BRnDKw5tLD.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

次に、SenseCAP Mateアプリをダウンロードしてアカウントを登録します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

参考までに、以下の動画はSeeed Studioが提供する基本的なオンボーディングプロセスを示しています。

<iframe class="youtube-video" src="https://youtu.be/TUQ9UmF7e7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

M2 LoRaWANゲートウェイをイーサネットケーブルでインターネットに接続し、電源を入れる前にアンテナを接続します。パネルのRGB LEDが緑色に点灯している場合、ゲートウェイが正常に設定されていることを意味します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527070/image_zEm7RxadAf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

次に、M2 LoRaWANゲートウェイをオンボードします。

* Mateアプリを開き、「デバイス」タブに移動します<br/>
* 右上の「+」アイコンをクリックしてゲートウェイのQRコードをスキャンします（QRコードはデバイスラベルに記載されています）。<br/>
* デバイスに名前を付け、場所を設定します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527073/image_xoxYLPEmeE.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

同じ方法で、QRコードをスキャンしてS2120 Weather Sensorをオンボードします。S2120センサーをタップすると、天気データが表示されます。

* 気温
* 湿度
* 光強度
* 気圧
* 風向
* 風速
* 時間降水量
* UV指数

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527082/image_Tr85o39OKT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

そして、屋根に行き、ポールに取り付ける時が来ました。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527110/img_3683_qMfEaREbxR.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

さらに、[S2103 CO2、温度、湿度センサー](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html)と[S2105 土壌水分、温度、ECセンサー](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html)も持っています。これらはS210xシリーズの利点を共有しており、オンボーディングプロセスも同じです。これらは産業基準の高品質製品です。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527107/image_Q55T2OnZjs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

これらもSenseCAP Mateアプリに追加し、寝室や植木鉢に設置しました。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527108/image_rkLg6bXCX9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

これでSenseCAPセンサー側のすべてが設定されました。



### MQTT統合を追加

* **なぜセンサーデータをHome Assistantに統合する必要があるのか？**

`Home Assistantの自動化フローを活用できるためです。また、SenseCAPアプリには現在その機能がありません。`

* **SenseCAPデータをHome Assistantに取得するプロセスは？**

`SenseCAPアカウントのAPIキーを取得する<br/>
SenseCAPオープンストリームAPIドキュメント(MQTT)を読む<br/>
Home AssistantにMQTT統合を追加する<br/>
MQTTを介してSenseCAPデータを購読し、APIキーを使用する<br/>`

* **次に、SenseCAPポータルにアクセスします。ここで以下を見つけることができます**

`OrgID` = 組織ID<br/>
`Password` = APIキーへのアクセス

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527113/image_Q3vkEnuKU2.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

私のMQTT購読情報は以下の通りです：

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527114/image_V4qotIEmN1.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Home AssistantのWeb UIに戻ります。

Home Assistantには多くの統合があります。

https://www.home-assistant.io/integrations/

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527115/image_igs1T1yKAk.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

今日はMQTT統合を使用してJSON形式でデータを購読し、[MQTTセンサー統合](https://www.home-assistant.io/integrations/sensor.mqtt/)を使用してセンサー値を特定のエンティティにバインドします。

設定に移動し、「デバイスとサービス」に進みます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527116/image_udflzRbXDp.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
統合追加ボタンをクリックし、MQTTを検索します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527118/image_VPTvmh0hMc.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

クライアント ID を入力し忘れるとセットアップが失敗するため、必ず高度な設定を有効にしてください。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527120/image_y4yAFffD4f.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次に、CONFIGURE ボタンをクリックしてトピックをリスニングすることで、サブスクリプションが機能しているかどうかをテストできます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527123/image_Fku83wMfdA.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527121/image_G5lZNHW9P5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

しばらく待つと、センサーメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527122/image_5pGjBZ4ZqZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>
ここまでで、MQTT クライアントの設定が正常に完了しました。

### エンティティを追加する

センサー測定データを保存するために複数のエンティティを追加します。例えば、新しい「空気温度」エンティティを作成し、S2120 MQTT JSON メッセージから測定値を取得します。同様に他のセンサーエンティティも追加します。

これを Home Assistant の設定ファイルを編集することで完了します。

```cpp
configuration.yaml
```

設定に移動し、アドオンに進みます。

<img src="https://hackster.imgix.net/uploads/attachments/1527130/image_em25CYMJaj.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" /><img src="https://hackster.imgix.net/uploads/attachments/1527131/image_DfFNubnQaf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

インストールしてサイドバーに表示を有効にし、開始をクリックします。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527132/image_RNwnNZNnBX.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次に、以下のスクリプトで YAML ファイルを修正する重要な部分です。

```cpp
mqtt:
  sensor:
    - name: "空気温度"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4097"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "空気湿度"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4098"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "光強度"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4099"
      unit_of_measurement: "Lux"
      value_template: "{{ value_json.value }}"
    - name: "気圧"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4101"
      unit_of_measurement: "Pa"
      value_template: "{{ value_json.value }}"
    - name: "風向"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4104"
      unit_of_measurement: "°"
      value_template: "{{ value_json.value }}"
    - name: "風速"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4105"
      unit_of_measurement: "m/s"
      value_template: "{{ value_json.value }}"
    - name: "時間降雨量"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4113"
      unit_of_measurement: "mm/hour"
      value_template: "{{ value_json.value }}"
    - name: "UV指数"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4190"
      unit_of_measurement: "UV"
      value_template: "{{ value_json.value }}"
    - name: "土壌温度"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "土壌湿度"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%"
      value_template: "{{ value_json.value }}"
    - name: "電気伝導率"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "dS/m"
      value_template: "{{ value_json.value }}"
    - name: "寝室温度"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "寝室湿度"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "寝室CO2"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.value }}"
```

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527133/image_sWi5PsDmyl.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

保存して開発者ツールに移動し、YAML ファイルが正しいかどうかを確認します。

次に、Home Assistant を再起動します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527134/image_4eyghWeM61.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

再起動後、MQTT が SenseCAP トピックをリスニングしていることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527135/image_2zfIHuOxvC.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次に、設定 -> デバイスとサービス -> エンティティに移動します。

わぁ~~~ すべてのセンサー測定値がリストされています。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527136/image_nf7n2EARnh.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>



### センサーデータダッシュボードの作成


最後のステップは、センサーエンティティをダッシュボードに追加することです。

概要に移動し、「Dashboardを編集」を見つけます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527137/image_aUUUbBvb9V.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

エンティティカードを選択します。このカードには複数のセンサー値を含めることができます。

各センサー用に3つのカードを作成します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527138/image_Ebs1nBNDow.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

最後に、非常に基本的な統合を行い、Home AssistantでSenseCAPセンサーデータを表示しました。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527146/image_zV3lKcDL3T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次に、UIを最適化して見た目を美しくするためにさらに時間をかける予定です。

また、ESP32を使用して新しいセンサーをHome Assistantに追加します。


### リソース

[Tango with Home Assistant and SenseCAP Sensors](https://www.hackster.io/Pistachio9to5/tango-with-home-assistant-and-sensecap-sensors-1ee587)