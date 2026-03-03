---
description: Grove 土壌湿度センサー
title: Grove 土壌湿度センサー
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Grove 土壌湿度センサー

このセクションでは、センサーの動作原理、Wio Terminal を使用してセンサーデータを取得する方法、Wio Terminal と Grove - Wio-E5 を使用してデータを送信する方法について詳しく説明します。

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌湿度、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x を試してみてください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> データロガー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空気温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空気温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌湿度 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® コントローラー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 気象ステーション</strong></a></td>
    </tr>
  </tbody></table>

## センサーの動作原理

このセクションでは、土壌水分センサーについて簡単に紹介し、センサーの動作をより明確に理解できるようにします。

Grove - 土壌水分センサーは、植物のための土壌水分を測定することができます。この土壌水分センサーは、2つのプローブで構成されており、電流を土壌に通して抵抗値を取得し、土壌の水分含有量を測定します。これにより、庭の植物に水やりが必要かどうかを判断することができます。また、庭で植物への水やりを自動化するためにも使用できます。このセンサーは、土壌に挿入してADCを使用して出力を読み取るだけで、非常に簡単に使用できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/162.jpg" /></div>

土壌水分センサーの使用に関する詳細情報は[こちら](https://wiki.seeedstudio.com/ja/Grove-Moisture_Sensor/)を参照してください。

## 必要な材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={310} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove 土壌水分センサー</td>
    </tr>
  </tbody></table>

## 事前準備

### ソフトウェアの準備

**ステップ 1.** Arduino ソフトウェアをインストールします。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**ステップ 2.** Arduino アプリケーションを起動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ 3.** Arduino IDE に Wio Terminal を追加します。

Arduino IDE を開き、`ファイル > 設定` をクリックし、以下の URL を追加のボードマネージャー URL にコピーします：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

`ツール > ボード > ボードマネージャー` をクリックし、ボードマネージャーで **Wio Terminal** を検索します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**ステップ 4.** ボードとポートを選択します。

`ツール > ボード` メニューで、使用する Arduino に対応するエントリを選択します。**Wio Terminal** を選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

`ツール -> ポート` メニューから Wio Terminal ボードのシリアルデバイスを選択します。これは通常、COM3以上（COM1およびCOM2は通常ハードウェアシリアルポート用に予約されています）です。確認するには、Wio Terminal ボードを切断してメニューを再度開き、消えたエントリが Arduino ボードであるはずです。ボードを再接続して、そのシリアルポートを選択します。

:::tip
Mac ユーザーの場合、`/dev/cu.usbmodem141401` のようなものになります。

スケッチをアップロードできない場合、主に Arduino IDE が Wio Terminal をブートローダーモードにできなかったことが原因です（MCU が停止しているか、プログラムが USB を処理している場合）。回避策として、Wio Terminal を手動でブートローダーモードにする必要があります。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**ステップ 5.** Grove - Wio-E5 ライブラリをダウンロードします。

[Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードします。

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ 6.** Arduino IDE にライブラリを追加します。

次に、3軸デジタル加速度計ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ -> ライブラリをインクルード -> .ZIP ライブラリを追加` をクリックし、先ほどダウンロードした `Disk91_LoRaE5` ファイルを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## 土壌湿度センサーの値を取得する

**ステップ 1.** センサーの接続

土壌湿度センサーを使用する場合は、土壌センサーをWio Terminalの**右側**のGroveポートに接続し、Grove - Wio-E5を**左側**のGroveポートに接続してください。他のセンサーとは接続方法が異なります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>

:::tip
土壌湿度センサーの配線方法が他のセンサーと異なる理由は、アナログ入力インターフェースを使用するためです。左側のIICインターフェースにはアナログ入力がないため、土壌湿度センサーから返される電圧値を取得することができません。
:::

**ステップ 2.** 土壌湿度センサーから湿度値を取得する

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-soil-moisture-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-soil-moisture-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

このリポジトリでは、土壌湿度センサーの使用方法を示しています。土壌湿度センサーはアナログインターフェースを使用しており、ピンを読み取ることで簡単に土壌の湿度値を取得できます。

```cpp
int sensorPin = A0;
int sensorValue = 0;
 
void setup() {
    Serial.begin(9600);
}
void loop() {
    // センサーから値を読み取る
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

Arduino IDEのシリアルモニターを開き、ボーレートを9600に設定して結果を観察してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/164.png" /></div>

## Grove - Wio-E5を介してデータを送信する

Grove - Wio-E5のコードを組み合わせてLoRa®ネットワークに接続します。ATコマンドを使用して、土壌湿度センサーの値をLoRa®ネットワークに送信することができます。

前述のコードから土壌湿度センサーの値を取得する方法を知っているように、取得した土壌湿度値は8ビット未満の整数データです。

この方法では、ATコマンドを介して送信するデータの内容、サイズ、形式を決定します。十分な大きさの配列を設定し、送信する必要がある文字列を配列に格納し、最後に**send_sync()**関数を使用して配列を送信します。

上記のアイデアの擬似コードは以下のようになります。

```c
  ......
  sensorValue = analogRead(sensorPin);

  static uint8_t data[2] = { 0x00 };  // data[]を使用してセンサーの値を格納

  data_decord(sensorValue, data);

  if ( lorae5.send_sync(              // センサー値を送信
        8,                            // LoRaWanポート
        data,                         // データ配列
        sizeof(data),                 // データのサイズ
        false,                        // ACKを期待しない
        7,                            // スプレッドファクター
        14                            // Txパワー（dBm）
       ) 
  )
  .......
```

次に必要なことは、`begin()`関数を使用してGrove - Wio-E5を初期化し、`setup()`関数を使用してGrove - Wio-E5のトリプレット情報を設定することです。`send_sync()`関数を使用してデータメッセージを送信すると、同時にLoRaWAN®に参加しようとします。成功すると、データが送信され、信号強度やアドレスなどの情報が返されます。

完全なコード例は[こちら](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data)で確認できます。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
このコードを今すぐアップロードして結果を確認することはお勧めしません。現時点ではHelium/TTNの設定がまだ完了していないため、「Join failed」という結果が得られます。[Connecting to Helium](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/)または[Connecting to TTN](https://wiki.seeedstudio.com/ja/Connecting-to-TTN/)の章を完了してから、このコードをアップロードし、完全なデータ送信プロセスを完了することをお勧めします。
:::

土壌湿度センサーの動作とデータ形式を理解したら、次のステップであるLoRaWAN®への参加に進んでください。

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Helium セクション</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium の紹介</strong><br /><br />この章では、Heliumコンソールの操作方法を紹介し、Heliumコンソールの第一印象を得ることができます。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Helium-Introduction">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Heliumへの接続</strong><br /><br />このセクションでは、Heliumを設定してセンサーデータを正常にアップロードし、Heliumに表示する方法を説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-Helium">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>TTN セクション</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN の紹介</strong><br /><br />この章では、TTNコンソールの操作方法を紹介し、TTNコンソールの第一印象を得ることができます。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/TTN-Introduction">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTNへの接続</strong><br /><br />このセクションでは、TTNを設定してセンサーデータを正常にアップロードし、TTNに表示する方法を説明します。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-TTN">章にジャンプ &gt;</a></td>
    </tr>
  </tbody></table>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® マークは Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は LoRa Alliance® からのライセンスの下で使用されるマークです。