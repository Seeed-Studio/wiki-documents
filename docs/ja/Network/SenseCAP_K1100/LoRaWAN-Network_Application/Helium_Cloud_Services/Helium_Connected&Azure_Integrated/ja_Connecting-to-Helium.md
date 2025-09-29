---
description: Heliumへの接続
title: Heliumへの接続
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Connecting-to-Helium
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Heliumへの接続

この章では、Heliumプラットフォームの基本的な使用方法と、Heliumプラットフォームを通じてセンサーデータを中継する方法について説明します。

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてAPPからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div>
  <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <tbody>
      <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP産業用センサー</strong></font></td></tr>
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
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空気温度＆湿度</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空気温度＆湿度＆CO2</strong></a></td>
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
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌水分＆温度</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌水分＆温度＆EC</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN®コントローラー</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1気象ステーション</strong></a></td>
      </tr>
    </tbody></table>
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/28.png" /></div>
  Heliumに全く経験がない場合は、まずHeliumコンソールについて読むことをお勧めします。
  <table align="center">
    <tbody><tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Heliumの紹介</strong><br /><br />この章では、Heliumコンソールの操作方法を紹介し、Heliumコンソールの第一印象を得るための方法を説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Helium-Introduction">さあ始めましょう &gt;</a></td>
      </tr>
    </tbody></table>
</div>

:::note
このセクションを開始する前に、展開環境周辺にHelium LoRaWAN®のカバレッジがあることを確認してください。そうでない場合、LoRa®を介してHeliumにデバイスを追加することはできません。詳細については、[Helium LoRaWAN®](https://www.helium.com/lorawan)をご覧ください。
:::

## <span id="jump1">Grove - Wio-E5 デバイスを Helium コンソールに追加する</span>

センサーデータをHeliumから中継するには、まずGrove - Wio-E5をHeliumコンソールに追加し、ローカルデバイスとHeliumプラットフォーム間の接続を構築する必要があります。

Grove - Wio-E5を追加するには、**Devices**に移動し、ウィンドウ右上の**+** Add Device アイコンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

上記のように、Heliumコンソールデバイス用に、**DevEUI**、**AppEUI**、および**AppKey**のデータトリプレットがこの時点で自動的に生成されます。

まずデバイスの名前を入力します。ここでは**lora wio terminal**と名付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/129.png" /></div>

:::note
必要なArduinoおよびWio Terminal環境を[事前承認済みコンテンツ](https://wiki.seeedstudio.com/ja/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation)からダウンロードしてください。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

Grove - Wio-E5は、ユーザーが独自の**DevEUI**、**AppEUI**、および**AppKey**を設定できるため、上記でHeliumによって生成されたトリプレット情報を対応する列に入力できます。

Arduino IDEを開き、以下のコードをArduino IDEにコピーします。

```c
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // ATコマンドとデバッグトレースが出力される場所

#define Frequency DSKLORAE5_ZONE_EU868
/*
ここで周波数帯域を選択してください。
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */

char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";

void setup() {

  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 1500 );  // シリアルモニタを開くか、1.5秒待機

  // ライブラリを初期化し、利用可能なWIOポートでLORAE5を検索
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("LoRa E5 初期化失敗");
    while(1); 
  }

  // LoRaWanの認証情報を設定
  if ( ! lorae5.setup(
        Frequency,     // LoRaWan ラジオゾーン EU868
        deveui,
        appeui,
        appkey
     ) ){
    Serial.println("LoRa E5 設定失敗");
    while(1);         
  }
}

void loop() {

}
```

:::note
上記のコードにはGrove - Wio-E5接続に制限はなく、Grove - Wio-E5が接続されているGroveポートを自動的に検索します。ただし、検索プロセスには時間がかかる場合があります（約1分程度）。
:::
使用したいLoRaWAN®バンドを選択してください。このバンドは使用しているゲートウェイバンドと一致している必要があります。利用可能な周波数バンドは以下のコードのコメントに記載されています。このチュートリアルでは、デフォルトで**EU868**バンドを使用します。

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
ここで周波数帯域を選択してください。
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
```

:::tip
**EU868**バンドは主に**ヨーロッパ**地域で使用されます。<br />
**US915**バンドは主に**北米**で使用されます。<br />
**AU915**バンドは主に**オーストラリア**地域で使用されます。
:::
以下のコードにHeliumで生成された**DevEUI**、**AppEUI**、および**AppKey**を置き換えてください。

```c
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/89.png" /></div>

Wio Terminalにコードをアップロードし、Arduino IDEのシリアルポートモニタを開き、ボーレートを9600に設定して設定を確認します。

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/K1100/90.png" /></div>

上記の情報がすべて完了したことを確認したら、下部の**Save Device**をクリックしてデバイスの追加を完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/130.png" /></div>

デバイスが追加されるまでしばらくお待ちください。（約20分かかります。）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/131.png" /></div>

## 各種センサー用デコーダー関数の作成

前のセクションでは、キット内の個々のセンサーの値をWio Terminalを使用して読み取る方法を説明しました。センサーの値をGrove - Wio-E5を介してHeliumに送信するには、ATコマンドを使用する必要があります。送信されたデータはHeliumで受信され、実際に読み取れるデータになる前にデコードする必要があります。このため、デコーダーを作成しました。

また、送信されるデータ形式が一律ではなく、センサーによって整数、浮動小数点、正負のデータなどが異なるため、各センサーに必要なデコーダーコードも異なります。

<table align="center">
  <tbody><tr>
      <th>センサータイプ</th>
      <th>ダウンロードアドレス</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内蔵光センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-Light-Sensor-data-decoder.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内蔵IMUセンサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-IMU-Sensor-data-decoder.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">土壌湿度センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">VOCおよびeCO2ガスセンサー (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SGP30-data-decoder.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">温湿度センサー (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SHT40-data-decoder.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Vision AIモジュール</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">ダウンロード</a></td>
    </tr>
  </tbody></table>

### オプション1. Wio Terminal 光センサーデータデコーダー

新しいカスタムスクリプトを作成し、「Light_data」と名付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/132.png" /></div>

前のセクション[Wio Terminal 光センサー](https://wiki.seeedstudio.com/ja/K1100-Light-Sensor-Grove-LoRa-E5/)では、光センサーで読み取った光の値を整数変数`light`に格納し、その値を**send_sync()**関数を使用して送信しました。そのため、Heliumで作成したデコーダーの目的は、この整数データを解析できるようにすることです。

以下はデコーダーの設定コードです。このコードをHeliumのコードセクションに貼り付け、**Save Function**をクリックしてデコーダーを保存してください。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/133.png" /></div>

右側の**SCRIPT VALIDATOR**に8ビットの光センサーデータを入力して、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/134.png" /></div>

Flowsに戻り、デバイスをデコーダーに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/180.png" /></div>

### オプション2. Wio Terminal IMUセンサーデータデコーダー

新しいカスタムスクリプトを作成し、「IMU_data」と名付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/135.png" /></div>

前のセクション[Wio Terminal IMUセンサー](https://wiki.seeedstudio.com/ja/K1100-IMU-Sensor-Grove-LoRa-E5/)では、IMUから返される3軸のデータを`x_values`、`y_values`、`z_values`という浮動小数点数に格納し、これらのデータを100倍して整数に変換してから一緒に送信しました。

特に注意すべき点は、これらのデータが正負の値を取る可能性があるため、これを解析して浮動小数点数に戻す必要があることです。

以下はデコーダーの設定コードです。このコードをHeliumのコードセクションに貼り付け、**Save Function**をクリックしてデコーダーを保存してください。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    if (value >= 32768) {
      value = 32768 - value;
    }
    value = value/100.0;
    return value;
  }
    
  if (port == 8) {
    decoded.x = transformers(bytes.slice(0,2));
    decoded.y = transformers(bytes.slice(2,4));
    decoded.z = transformers(bytes.slice(4,6));
  }
  
  return decoded;
}
```

右側の**SCRIPT VALIDATOR**に48ビットのIMUセンサーデータを入力して、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/91.png" /></div>

Flowsに戻り、デバイスをデコーダーに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/179.png" /></div>

### オプション3. Grove土壌湿度センサーデータデコーダー

新しいカスタムスクリプトを作成し、「Soil_data」と名付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

前のセクション[Grove土壌湿度センサー](https://wiki.seeedstudio.com/ja/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/)では、土壌湿度センサーで読み取った土壌湿度値を整数変数`sensorValue`に格納し、その値を**send_sync()**関数を使用して送信しました。そのため、Heliumで作成したデコーダーの目的は、この整数データを解析できるようにすることです。

そのデコーダーの設定コードは以下の通りです。このコードをHeliumのコードセクションに貼り付けてください。**Save Function**をクリックしてこのデコーダーを保存します。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

**SCRIPT VALIDATOR**の右側に8ビット土壌湿度センサーのデータを入力して、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

Flowsに戻り、デバイスをデコーダーに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/186.png" /></div>

### オプション4. Grove VOCおよびeCO2ガスセンサー（SGP30）のデータデコーダー

新しいカスタムスクリプトを作成し、名前をSGP30_dataとします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/173.png" /></div>

前のセクション[Grove VOCおよびeCO2ガスセンサー（SGP30）](https://wiki.seeedstudio.com/ja/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/)では、整数変数`tvoc_ppb`と`co2_eq_ppm`を使用してVOCとeCO2の値を格納しました。

そのデコーダーの設定コードは以下の通りです。このコードをHeliumのコードセクションに貼り付けてください。**Save Function**をクリックしてこのデコーダーを保存します。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.voc = transformers(bytes.slice(0,2));
    decoded.eco2 = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

**SCRIPT VALIDATOR**の右側に16ビットSGP30のデータを入力して、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/174.png" /></div>

Flowsに戻り、デバイスをデコーダーに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/181.png" /></div>

### オプション5. Grove Temp&Humiセンサー（SHT40）のデータデコーダー

新しいカスタムスクリプトを作成し、名前をSHT40_dataとします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/189.png" /></div>

前のセクション[Grove Temp&Humiセンサー（SHT40）](https://wiki.seeedstudio.com/ja/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/)では、浮動小数点変数`temperature`と`humidity`を使用して温度と湿度の値を格納しました。そして、これらの値を100倍して整数に変換して送信しました。

そのデコーダーの設定コードは以下の通りです。このコードをHeliumのコードセクションに貼り付けてください。**Save Function**をクリックしてこのデコーダーを保存します。

```java
function Decoder(bytes, port) {

    var decoded = {};

    function transformers(bytes){
        value = bytes[0] * 256 + bytes[1];
        if (value >= 32768) {
        value = 32768 - value;
        }
        value = value/100.0;
        return value;
    }

    if (port == 8) {
        decoded.temp = transformers(bytes.slice(0, 2));
        decoded.humi = transformers(bytes.slice(2, 4));
    }

    return decoded;
}
```

**SCRIPT VALIDATOR**の右側に32ビットSHT40のデータを入力して、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/92.png" /></div>

Flowsに戻り、デバイスをデコーダーに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/190.png" /></div>

### オプション6. Grove Vision AIモジュールのデータデコーダー

新しいカスタムスクリプトを作成し、名前をAI_Version_dataとします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/195.png" /></div>

前のセクション[Grove Vision AIモジュール](https://wiki.seeedstudio.com/ja/K1100-Vision-AI-Module-Grove-LoRa-E5/)では、整数変数`model`と`confi`を使用して識別されたモデルの種類とその信頼度を格納しました。

そのデコーダーの設定コードは以下の通りです。このコードをHeliumのコードセクションに貼り付けてください。**Save Function**をクリックしてこのデコーダーを保存します。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.model = transformers(bytes.slice(0,2));
    decoded.confidence = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

**SCRIPT VALIDATOR**の右側に16ビットVision AIのデータを入力して、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/200.png" /></div>

Flowsに戻り、デバイスをデコーダーに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/196.png" /></div>

## コードをアップロードしてHeliumにデータを送信

各センサーのページでは、データをアップロードするための詳細なコードを提供しています。以下のリストから使用したいセンサーコードを見つけることもできます。

:::note
このセクションで提供されるコードを使用する前に、コード内のDevice EUI、App EUI、およびApp KeyがHeliumに追加されたデバイス情報と一致していることを確認してください。また、Grove - Wio-E5に設定された周波数帯が、地域のゲートウェイ帯域またはHeliumの帯域と一致しているか確認してください。これを怠ると、ネットワークアクセスに失敗する可能性があります。

LoRaWAN®帯域を設定するコードは以下の通りです。デフォルト設定はEU868帯域です。（EU868帯域はヨーロッパ地域で一般的に使用されています。）
    `#define Frequency DSKLORAE5_ZONE_EU868`
US915帯域（US915帯域は北米で一般的に使用されています。）
    `#define Frequency DSKLORAE5_ZONE_US915`
AU915帯域（AU915帯域はオーストラリア地域で一般的に使用されています。）
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::
<table align="center">
  <tbody><tr>
      <th>センサータイプ</th>
      <th>ダウンロードアドレス</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal内蔵光センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal内蔵IMUセンサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">土壌湿度センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">VOCおよびeCO2ガスセンサー（SGP30）</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">温湿度センサー（SHT40）</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Vision AIモジュール</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data">ダウンロード</a></td>
    </tr>
  </tbody></table>

上記のセンサー送信コードは、Arduino IDEを使用してWio Terminalに直接アップロードして実行できます。その際、シリアルモニターをオンにして、ボーレートを**9600**に調整し、リアルタイムでデータ送信を観察してください。

詳細については、参考カタログの個別センサー使用セクションに戻ってください。

### リアルタイムデータとデバッグ

デバイスを接続したら、リアルタイムのパケットとイベントログでデータ転送を確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/93.png" /></div>

:::note
Heliumの最新バージョンの更新では、Heliumは新規ユーザーに10,000 DATA CREDITSを提供することをやめ、**250 DATA CREDITS**のみを提供しています。データ送信頻度を調整してDC消費を減らすか、必要に応じて購入することができます。
:::
**My Devices**タブでは、画面右側の**ビートルボタン**をクリックして、Heliumが受信したデータに関する情報を確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

以下のセクションの情報に特に注意を払うことができます。

- payload: Heliumに送信されたデータのbase64形式の情報。

- port: データが受信されたポート番号。

:::note
コードでは、メッセージ送信のポート番号を**8**に設定しているため、デバッグウィンドウでは、センサーに関するすべてのメッセージがポート**8**のペイロードになります。ペイロードの読み取りとデコードは、この[デコードウェブサイト](https://cryptii.com/pipes/base64-to-hex)を使用して行うことができます。
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/175.png" /></div>

### ソースコード解析

このチュートリアルの内容を独自のプロジェクト開発に適用したい場合、コードの意味を理解することが重要です。ここでは、**SHT40**センサーのコードを例に、コード実装のロジックを説明します。

プログラムの冒頭では、Heliumに接続するための必要な三要素情報を準備し、Wio-E5の周波数を設定する必要があります。

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
ここで周波数帯を選択してください。
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
 
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

次に、`data_decord()`関数を定義します。この関数はセンサー値をHeliumデコーダーで解析可能なデータフレームに変換し、LoRaWAN®プロトコルに準拠した形式で`data[]`配列に格納します。

一般的に、データのオーバーフローを防ぐため、センサーが読み取る可能性のある最大値と最小値を考慮し、オーバーフローしない16進数に分割します。

```cpp
void data_decord(int val_1, int val_2, uint8_t data[4])
{
  int val[] = {val_1, val_2};

  for(int i = 0, j = 0; i < 2; i++, j += 2)
  {
    if(val[i] < 0)
    {
      val[i] = ~val[i] + 1;
      data[j] = val[i] >> 8 | 0x80;
      data[j+1] = val[i] & 0xFF;
    }
    else
    {
      data[j] = val[i] >> 8 & 0xFF;
      data[j+1] = val[i] & 0xFF;
    }
  }
}
```

SHT40センサーの場合、温度データと湿度データの2つのデータがあり、正負の値が存在するため、負の値を処理する必要があります。また、小数点以下の値も処理する必要があります。

```cpp
int_temp = temperature*100;
int_humi = humidity*100;
```

次のステップは、SHT40の初期化とWio-E5の初期設定です。これらはすべて`setup()`関数内で実行されます。

```cpp
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

初期化コードでは、`DSKLORAE5_SWSERIAL_WIO_P2`はWio Terminalの**右側**のGroveインターフェースを表し、`DSKLORAE5_SWSERIAL_WIO_P1`は**左側**のGroveインターフェースを表します。外部センサーを使用しない他のプロジェクトでは、`DSKLORAE5_SEARCH_WIO`を使用することもできます。これにより、Wio-E5が接続されているGroveインターフェースを自動的に検索します。

```cpp
lorae5.send_sync(              // センサー値を送信
        8,                     // LoRaWanポート
        data,                  // データ配列
        sizeof(data),          // データのサイズ
        false,                 // 応答を期待しない
        7,                     // スプレッドファクター
        14                     // 送信出力（dBm）
       ) 
```

`send_sync()`関数の重要な役割は、センサー値をLoRaWAN®を介して送信することです。最初のパラメータはデータを送信するチャンネル番号を示し、2番目のパラメータは送信するデータの内容を示し、3番目のパラメータは送信するデータの長さを示します。一般的には、最初の3つのパラメータの内容に注目するだけで十分です。

```cpp
delay(15000);
```

プログラムの最後の遅延は、データを送信する頻度を決定します。10秒未満の頻度で送信することは推奨されません。高頻度で送信すると、Wio-E5が正常に動作しなくなる可能性があり、Heliumによって異常なデバイスと認識され、ブロックされる可能性があります。

Grove - Wio-E5のコードと機能についてさらに学ぶには、[リポジトリのGitHubリンク](https://github.com/limengdu/Disk91_LoRaE5)を参照してください。Grove - Wio-E5用のライブラリを作成してくれた[**Paul Pinault (disk91)**](https://github.com/disk91)に特別な感謝を申し上げます。

上記のセクションは、デバイスを使用してHeliumに接続し、データを受信する方法を段階的に説明しています。ただし、実用的な観点から見ると、現在Heliumに送信されているデータは人間が読み取れる形式ではありません。データの可視化が必要な場合は、以下の手順を参照して、HeliumをMicrosoft Azure IoTハブに統合するチュートリアルを完了してください。このチュートリアルでは、データをグラフィカルに表示するプロセスを説明します。

<div>
  <table align="center">
    <tbody><tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/azure.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>HeliumをAzure IoT Hubに統合</strong><br /><br />このセクションでは、Microsoft Azureを構成し、Heliumと統合してデータをMicrosoft Azureプラットフォームにアップロードする方法を説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Integrate-into-Azure-IoT-Hub">始めましょう &gt;</a></td>
      </tr>
    </tbody></table>
  必要に応じて、他のプラットフォームを選択することもできます。
  <table align="center">
    <tbody><tr>
        <td colSpan={2} bgcolor="8FBC8F"><b>クラウドプラットフォームセクション</b></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/Google-Sheets.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>HeliumをGoogle Sheetsに統合</strong><br /><br />このセクションでは、Google Formsを使用してHeliumを統合し、センサーデータを保存する方法を紹介します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Configuring-Web-APP-Visualization">章にジャンプ &gt;</a></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/AWS.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>HeliumをAWS IoT Coreに統合</strong><br /><br />このセクションでは、Microsoft Azureで受信したデータ情報を無料のWeb APP統合を使用して可視化する方法を説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Configuring-Web-APP-Visualization">章にジャンプ &gt;</a></td>
      </tr>
    </tbody></table>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

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
- LoRaWAN® は LoRa Alliance® からライセンスを受けて使用されるマークです。