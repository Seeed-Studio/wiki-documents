---
description: Home AssistantとSenseCAP Sensorsとの連携
title: Home AssistantとSenseCAP Sensorsとの連携
keywords:
- LoRaWAN
- Sensor
- Home Assistant
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/home_assistant_with_sensecap_lorawan_sensors
last_update:
  date: 9/14/2023
  author: Jessie
---

LoRaWAN®センサーをHome Assistantに統合する方法を共有します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527151/_HMPRnIpF0p.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={800} height="auto" /></p>

スマートホームの分野には既に十分な数のインテリジェントデバイス（センサー、ライト、スイッチ）があり、Apple Homekit、Google Home、Amazon Alexaなど、異なるデバイスに対応する複数のアプリを既にお持ちかもしれません。これらすべてを一箇所で相互に接続することが強く求められています。最近2022年9月にmatter 1.0がリリースされ、エコシステムの統一を目指すというニュースを読みましたが、これには確実に時間がかかるでしょう。

実際、matterがリリースされる数年前から、[Home Assistant](https://www.home-assistant.io/)は完全にカスタマイズされたスマートホームエコシステムを構築するための最高のプラットフォームの一つであり、主流デバイスを統合し、自動化ルールを設定して、あなたの家をより良く、よりスマートな場所にします。これは間違いなく私が学び、経験を共有したいことです。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527037/image_AC7YowxKbT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

この一連の記事では、Home Assistantで適切なスマートホームを構築し、Seeed Studio SenseCAP製品のセンサーを使用する方法を共有します。そして、これが最初のマイルストーンです。

ゼロからHome Assistantを実行し、SenseCAP気象センサーを統合します。

そこに到達するための手順は以下の通りです：

- Raspberry PiにHome Assistantをインストール
- アプリでSenseCAP センサーをオンボード
- MQTT統合を追加し、SenseCAP データを購読
- 異なるセンサー測定値でエンティティを追加
- センサーデータダッシュボードを作成

### Raspberry PiにHome Assistantをインストール

Home Assistantを始めるには、[公式チュートリアル](https://www.home-assistant.io/getting-started/)が非常に有用です。

Home Assistantを実行するデバイスやプラットフォームは多数ありますが、たまたま未使用のRaspberry Piを持っているので、[ここ](https://www.home-assistant.io/installation/raspberrypi)から始めます。

Balena etcherを使用してSDカードをフラッシュする代わりに、公式の[Raspberry Pi Imager](https://www.raspberrypi.com/software/)を使用することを好みます。軽量でシンプルに使用できます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527038/image_xXpG0MaQJS.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

32GB以上のMicro SDカードを用意し、コンピューターに接続します。ここではMacBookを例として使用します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527041/image_vb64IHZx5B.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

その他の特定目的OSに移動し、Home AssistantとHome Automationを選択します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527042/image_xf5OXUliuo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Home Assistantを選択

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527044/image_tIB5zVlxm5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

RPi4用のHome Assistant OSバージョンを選択

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527045/image_UQdhYJt88T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次にSDカードドライブを選択します。注意深く行い、間違ったディスクを選択しないでください。ドライブをフォーマットして貴重なデータをすべて失う可能性があります。

<img src="https://hackster.imgix.net/uploads/attachments/1527046/image_Le62Kc3fGH.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />
<img src="https://hackster.imgix.net/uploads/attachments/1527047/image_tiE1gwdlBw.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

インターネット速度によっては、Home Assistantイメージのダウンロードに時間がかかる場合があります。

次に、micro SDカードをRaspberry Piに挿入し、イーサネットケーブルを接続します。起動すると、赤色LEDは赤色のままで、緑色LEDが点滅を始めます。緑色LEDが点滅しない場合は、イメージフラッシュ中に何か問題があったことを示します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527053/image_UaCcGJHjzs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

`http://homeassistant.local:8123/`にアクセスし、インストールが完了するまで待ちます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527051/image_rEn7iALm78.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={400} height="auto" /></p>

この[リンク](https://www.home-assistant.io/getting-started/onboarding/)に従ってHome Assistantアカウントを登録し、ログインします。

ついに、Home Assistantのインストールが完了しました。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527055/image_5mAwRA0PMG.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### アプリでSenseCAP センサーをオンボード

SenseCAP は一連の産業用センサーデバイスとゲートウェイ製品であり、その中でもS210x LoRaWANセンサーは主に長距離およびバッテリー駆動のシナリオ向けに構築されています。

新しく発売された[S2120 Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)を使用し、6階建ての屋上に設置したいと思います。LoRaの長距離通信機能が非常に役立ちます。クイックインストール用のアクセサリーがすべて付属しています。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527056/image_61yawsK9oe.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Weather Stationは標準的なLoRaWANデバイスとして動作するため、自宅で[SenseCAP M2 indoor LoRaWAN gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)を使用できます。マグネットベース付きの3dBiアンテナが付属しています。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527058/image_BRnDKw5tLD.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

次に、SenseCAP Mate Appをダウンロードしてアカウントを登録します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

参考までに、こちらはSeeed Studioによる基本的なオンボーディングプロセスを説明した動画です。

<div class="video-container">
<iframe class="youtube-video" src="https://youtu.be/TUQ9UmF7e7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

M2 LoRaWANゲートウェイをイーサネットケーブルでインターネットに接続し、電源を入れる前にアンテナを接続します。パネルのRGB LEDが緑色で点灯したら、ゲートウェイが正常に設定されたことを意味します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527070/image_zEm7RxadAf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

それでは、M2 LoRaWANゲートウェイをオンボードしましょう

- Mate Appを開き、「device」タブに移動します<br/>
- 右上角の「+」アイコンをクリックして、デバイスラベルにあるゲートウェイのQRコードをスキャンします。<br/>
- デバイスに名前を付けて場所を設定します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527073/image_xoxYLPEmeE.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

同様に、QRコードをスキャンしてS2120気象センサーをオンボードします。S2120センサーをタップすると、気象データを確認できます。

- 気温
- 湿度
- 光強度
- 気圧
- 風向
- 風速
- 時間降雨量
- UV指数

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527082/image_Tr85o39OKT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
そして今度は屋上に行って、ポールに設置する時です。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527110/img_3683_qMfEaREbxR.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

また、[S2103 CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html)と[S2105 Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html)も持っています。これらはS210xシリーズの同じメリットを共有し、オンボーディングプロセスも同じです。そして、産業標準の高品質です。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527107/image_Q55T2OnZjs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

そこで、これらもSenseCAP Mate Appに追加し、寝室と植木鉢に設置しました。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527108/image_rkLg6bXCX9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

これで、SenseCAP センサー側のすべての設定が完了しました。

### MQTT統合の追加

- **なぜセンサーデータをHome Assistantに統合する必要があるのですか？**

`Home Assistantの自動化フローを活用できるためです。SenseCAP Appには現在その機能がありません。`

- **SenseCAP データをHome Assistantに取得するプロセスは何ですか？**

`SenseCAP アカウントのAPIキーを取得<br/>
SenseCAP オープンストリームAPI ドキュメント（MQTT）を読む<br/>
Home AssistantにMQTT統合を追加<br/>
MQTT経由でSenseCAP データを購読し、APIキーを使用<br/>`

- **それでは、SenseCAP Portalに移動しましょう。ここで以下を見つけることができます**

`OrgID` = Organization ID<br/>
`Password` = Access API keys

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527113/image_Q3vkEnuKU2.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

私のMQTT購読情報は：

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527114/image_V4qotIEmN1.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Home AssistantのWeb UIに戻ります。

Home Assistantには多くの統合があります

https://www.home-assistant.io/integrations/

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527115/image_igs1T1yKAk.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

今日はMQTT統合を使用してJSON形式でデータを購読し、[MQTT sensor integration](https://www.home-assistant.io/integrations/sensor.mqtt/)を使用してセンサー値を特定のエンティティにバインドします。

設定に移動し、Devices & Servicesに入ります

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527116/image_udflzRbXDp.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
統合を追加ボタンをクリックしてMQTTを検索します

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527118/image_VPTvmh0hMc.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

高度な設定を有効にすることを忘れないでください。Client IDの入力を忘れると、セットアップが失敗します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527120/image_y4yAFffD4f.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次に、CONFIGUREボタンをクリックしてトピックをリッスンすることで、サブスクリプションが機能するかテストできます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527123/image_Fku83wMfdA.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527121/image_G5lZNHW9P5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

しばらく待つと、センサーメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527122/image_5pGjBZ4ZqZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>
これで、MQTTクライアントが正常に設定されました。

### エンティティの追加

センサー測定データを保存するために複数のエンティティを追加します。例えば、新しい「気温」エンティティを作成し、S2120 MQTT JSONメッセージから測定値を取得します。同様に他のセンサーエンティティも追加します。

これはHome Assistant設定ファイルを編集することで完了します。

```cpp
configuration.yaml
```

設定に移動してAdd-onsに移動し、次に

<img src="https://hackster.imgix.net/uploads/attachments/1527130/image_em25CYMJaj.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" /><img src="https://hackster.imgix.net/uploads/attachments/1527131/image_DfFNubnQaf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

インストールしてサイドバーに表示を有効にし、開始をクリックします。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527132/image_RNwnNZNnBX.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

ここで重要な部分は、以下のスクリプトでYAMLファイルを変更することです

```cpp
mqtt:
  sensor:
    - name: "Air Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4097"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Air Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4098"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Light Intensity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4099"
      unit_of_measurement: "Lux"
      value_template: "{{ value_json.value }}"
    - name: "Barometric Pressure"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4101"
      unit_of_measurement: "Pa"
      value_template: "{{ value_json.value }}"
    - name: "Wind Direction"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4104"
      unit_of_measurement: "°"
      value_template: "{{ value_json.value }}"
    - name: "Wind Speed"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4105"
      unit_of_measurement: "m/s"
      value_template: "{{ value_json.value }}"
    - name: "Rainfall Hourly"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4113"
      unit_of_measurement: "mm/hour"
      value_template: "{{ value_json.value }}"
    - name: "UV Index"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4190"
      unit_of_measurement: "UV"
      value_template: "{{ value_json.value }}"
    - name: "Soil Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Soil Moisture"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%"
      value_template: "{{ value_json.value }}"
    - name: "Electrical Conductivity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "dS/m"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room CO2"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.value }}"
```

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527133/image_sWi5PsDmyl.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

保存してから開発者ツールに移動し、YAMLファイルが正しいかどうかを確認します。

その後、Home Assistantを再起動します

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527134/image_4eyghWeM61.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

再起動後、MQTTがSenseCAP トピックをリッスンしていることを確認します

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527135/image_2zfIHuOxvC.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次に、Settings -> Devices and Services -> Entitiesに移動します

わあ〜〜〜 すべてのセンサー測定値がそこにリストされています。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527136/image_nf7n2EARnh.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### センサーデータダッシュボードの作成

最後のステップは、センサーエンティティをダッシュボードに追加することです。

overviewに移動して「Edit Dashboard」を見つけます

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527137/image_aUUUbBvb9V.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

エンティティカードを選択します。このカードは1つのカードに複数のセンサー値を含めることができます。

各センサーに対して3つのカードを作成します

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527138/image_Ebs1nBNDow.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

最終的に、非常に基本的な統合を行い、Home AssistantでSenseCAP センサーデータを表示しました。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527146/image_zV3lKcDL3T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

次に、UIの最適化により多くの時間を費やし、美しく見えるようにします。

そしてESP32を使用して新しいセンサーをHome Assistantに追加します。

### リソース

[Tango with Home Assistant and SenseCAP Sensors](https://www.hackster.io/Pistachio9to5/tango-with-home-assistant-and-sensecap-sensors-1ee587)
