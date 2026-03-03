---
description: TTNに接続する
title: TTNに接続する
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Connecting-to-TTN
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# TTNに接続する

この章では、TTNプラットフォームの基本的な使用方法と、センサーデータをTTNプラットフォームを通じて中継する方法について説明します。

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新のSenseCAP S210xをお試しください。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌水分 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌水分 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® コントローラー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 気象ステーション</strong></a></td>
    </tr>
  </tbody></table>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/27.png" /></div>

TTNに全く慣れていない場合は、まずTTNコンソールについて学ぶことをお勧めします。

<table align="center">
  <tbody><tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTNの紹介</strong><br /><br />この章では、TTNコンソールの操作について説明し、TTNコンソールの第一印象を得るための手順を紹介します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/TTN-Introduction">さあ始めましょう &gt;</a></td>
    </tr>
  </tbody></table>

:::note
このセクションを始める前に、展開環境周辺にTTN LoRaWAN®のカバレッジがあることを確認してください。そうでない場合、LoRa®を介してTTNにデバイスを追加することはできません。詳細については、[TTN LoRaWAN®](https://www.thethingsnetwork.org/docs/lorawan/)をご覧ください。
:::

## <span id="jump1">Grove - Wio-E5 デバイスをTTNコンソールに追加する</span>

センサーデータをTTNから中継するには、まずGrove - Wio-E5をTTNアプリケーションに追加し、ローカルデバイスとTTNプラットフォーム間の接続を構築する必要があります。

**ステップ1.** Grove - Wio-E5のDevEUI、AppEUIを取得する。

[事前準備](https://wiki.seeedstudio.com/ja/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation)でArduinoとWio Terminalの必要な環境をダウンロードしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

[こちら](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/example/Get-Grove-LoRa-E5-AppEUI-DevEUI/Get-Grove-LoRa-E5-AppEUI-DevEUI.ino)をクリックして、Grove - Wio-E5に付属するDevEUI、AppEUIを取得するコードをダウンロードし、Wio Terminalにアップロードしてください。

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // ATコマンドとデバッグトレースが出力される場所

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // シリアルモニタを開くか、3秒待機

  // ライブラリを初期化し、利用可能なWIOポートでWio-E5を検索
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 初期化失敗");
    while(1); 
  }
}

void loop() {
  // Grove - Wio-E5はDevEUI、AppEUIのクエリを許可しますが、AppKeyは許可しません。
  lorae5.sendATCommand("AT+ID=DevEui","","+ID: ERROR","",1000,false,NULL);
  lorae5.sendATCommand("AT+ID=AppEUI","","+ID: ERROR","",1000,false,NULL);
  delay(30000);
}
```

Arduino IDEのシリアルポートモニタを開き、ボーレートを**9600**に設定して設定を確認します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/95.png" /></div>

**DevEUI**と**AppEUI**の後に続く16桁の数字をメモしてください。これらはTTNでデバイスを追加する際に使用します。

**ステップ2.** アプリケーションを追加する

右上の**Add application**ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/31.png" /></div>

アスタリスクが付いている項目を入力し、好みに応じて内容を設定してください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/32.png" /></div>

その後、**Create Application**をクリックします。

**ステップ3.** デバイスを追加する

左側のメニューで**End devices**に移動し、**+ Add end device**をクリックしてエンドデバイス登録ページに進みます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/33.png" /></div>

デバイスリポジトリでGrove - Wio-E5を使用するには、**From the LoRaWAN® Device Repository**タブが選択されていることを確認してください。

次に、以下のオプションを選択してください。

- **Brand** -- SenseCAP
- **Model** -- LoRa-E5 STM32WLE5JC Module
- **Hardware Ver.** -- 1.0
- **Firmware Ver.** -- 1.0
- **Profile (Region)** -- 地域に適した周波数プランを選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/29.png" /></div>

:::note
地域に適した周波数プランを選択してください。デバイスとゲートウェイは同じ周波数プランを使用して通信する必要があります。異なる地域では異なる[周波数プラン](https://www.thethingsindustries.com/docs/reference/frequency-plans/)が使用されます。例: ヨーロッパでは863-870 MHz、北米では902-928 MHzなど。
:::
ここでは、使用しているTTNゲートウェイバンドとしてEU868を選択します。

次に、先ほど取得した**DevEUI**と**AppEUI**をTTNの対応するフィールドに入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/35.png" /></div>

**AppKey**については、**Generate**ボタンをクリックし、以下のコードを使用してWio TerminalにアップロードしてGrove - Wio-E5を有効にします。

TTNによって生成された32ビットのAppKeyをコード内の内容に置き換えてください。

```c
lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
```

以下は完全なコードです。

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // ATコマンドとデバッグトレースが出力される場所

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // シリアルモニタを開くか、3秒待機

  // ライブラリを初期化し、利用可能なWIOポートでWio-E5を検索
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 初期化失敗");
    while(1); 
  }
}

void loop() {
  // Grove - Wio-E5はDevEUI、AppEUIのクエリを許可しますが、AppKeyは許可しません。
  lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
  delay(30000);
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/96.png" /></div>

これで、Grove - Wio-E5とTTNの3つのコードが設定されました。**Register end device**をクリックするだけです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/37.png" /></div>

## 異なるセンサー用のデコーダー関数の作成

前のセクションでは、キット内の個々のセンサーの値をWio Terminalを使用して読み取る方法を説明しました。Grove - Wio-E5を介してセンサー値をTTNに送信するには、ATコマンドを使用する必要があります。送信されたデータはTTNで受信され、実際に読み取れるデータになる前にデコードする必要があります。このためにデコーダーを作成しました。

また、送信されるデータ形式が一様ではなく、センサーによっては整数、浮動小数点、正負のデータなどが含まれるため、各センサーに必要なデコーダーコードは異なります。

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
      <td align="center">Vision AI モジュール</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">ダウンロード</a></td>
    </tr>
  </tbody></table>

### オプション 1. Wio Terminal 光センサーデータデコーダー

前のセクション[Wio Terminal 光センサー](https://wiki.seeedstudio.com/ja/K1100-Light-Sensor-Grove-LoRa-E5/)では、光センサーで読み取った光の値を整数変数`light`に格納し、その値を**send_sync()**関数を使用して送信しました。そのため、TTNで作成したデコーダーの目的は、この整数データを解析できるようにすることです。

以下はデコーダーの設定コードです。このコードをTTNのコードセクションに貼り付けてください。**Save Function**をクリックしてこのデコーダーを保存します。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

デバイスの**Payload formatters** --> **Uplink** --> **Custom Javascript formatter**を順にクリックしてください。

その後、上記のデコーダーコードを**Formatter code**に貼り付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/38.png" /></div>

右側の**Test**ウィンドウで8ビット光センサーのデータを入力し、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/39.png" /></div>

### オプション 2. Wio Terminal IMUセンサーデータデコーダー

前のセクション[Wio Terminal IMUセンサー](https://wiki.seeedstudio.com/ja/K1100-IMU-Sensor-Grove-LoRa-E5/)では、IMUから返される3軸のデータを浮動小数点数`x_values`、`y_values`、`z_values`に格納し、これらのデータを100倍して整数に変換してから一緒に送信しました。

特に注意すべき点は、これらのデータは正負の値を取る可能性があるため、これを解析して浮動小数点数に戻す必要があることです。

以下はデコーダーの設定コードです。このコードをTTNのコードセクションに貼り付けてください。**Save changes**をクリックしてこのデコーダーを保存します。

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

右側の**Test**で48ビットIMUセンサーのデータを入力し、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/97.png" /></div>

### オプション 3. Grove 土壌湿度センサーデータデコーダー

前のセクション[Grove 土壌湿度センサー](https://wiki.seeedstudio.com/ja/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/)では、土壌湿度センサーで読み取った土壌湿度値を整数変数`sensorValue`に格納し、その値を**send_sync()**関数を使用して送信しました。そのため、TTNで作成したデコーダーの目的は、この整数データを解析できるようにすることです。

以下はデコーダーの設定コードです。このコードをTTNのコードセクションに貼り付けてください。**Save changes**をクリックしてこのデコーダーを保存します。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

右側の**Test**で8ビット土壌湿度センサーのデータを入力し、デコーダーが正しく解析するかどうかを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/23.png" /></div>

### オプション 4. Grove VOCおよびeCO2ガスセンサー (SGP30) データデコーダー

前のセクション [Grove VOC and eCO2 Gas Sensor (SGP30)](https://wiki.seeedstudio.com/ja/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/) では、整数変数 `tvoc_ppb` と `co2_eq_ppm` を使用して VOC と eCO2 の値を格納しました。

そのデコーダーの設定コードは以下の通りです。このコードを TTN のコードセクションに貼り付けてください。**Save changes** をクリックしてデコーダーを保存します。

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

右側の **Test** に 16 ビットの SGP30 のデータを入力して、デコーダーが正しく解析するか確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/24.png" /></div>

### オプション 5. Grove Temp&Humi Sensor (SHT40) データデコーダー

前のセクション [Grove Temp&Humi Sensor (SHT40)](https://wiki.seeedstudio.com/ja/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/) では、浮動小数点変数 `temperature` と `humidity` を使用して温度と湿度の値を格納しました。そして、これらの値を 100 倍に拡大して整数として送信しました。

そのデコーダーの設定コードは以下の通りです。このコードを TTN のコードセクションに貼り付けてください。**Save changes** をクリックしてデコーダーを保存します。

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

右側の **Test** に 32 ビットの SHT40 のデータを入力して、デコーダーが正しく解析するか確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/98.png" /></div>

### オプション 6. Grove Vision AI Module データデコーダー

前のセクション [Grove Vision AI Module](https://wiki.seeedstudio.com/ja/K1100-Vision-AI-Module-Grove-LoRa-E5/) では、整数変数 `model` と `confi` を使用して識別されたモデルの種類とその信頼度を格納しました。

そのデコーダーの設定コードは以下の通りです。このコードを TTN のコードセクションに貼り付けてください。**Save changes** をクリックしてデコーダーを保存します。

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

右側の **Test** に 16 ビットの Vision AI のデータを入力して、デコーダーが正しく解析するか確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/26.png" /></div>

## TTNにデータを送信するコードのアップロード

各センサーのページでは、データをアップロードするための詳細なコードを提供しています。以下のリストから使用したいセンサーコードを見つけることもできます。

:::note
このセクションで提供されているコードを使用する前に、コード内のDevice EUI、App EUI、およびApp KeyがTTNに追加されたデバイス情報と一致していることを確認してください。また、Grove - Wio-E5に設定された周波数帯が、地域やTTNのゲートウェイ帯域と一致しているか確認してください。これを怠ると、ネットワークへのアクセスに失敗する可能性があります。

LoRaWAN®帯域を設定するコードは以下の通りです。デフォルト設定はEU868帯域です。（EU868帯域はヨーロッパ地域で一般的に使用されます。）<br />
    `#define Frequency DSKLORAE5_ZONE_EU868`<br />
US915帯域（US915帯域は北米で一般的に使用されます。）<br />
    `#define Frequency DSKLORAE5_ZONE_US915`<br />
AU915帯域（AU915帯域はオーストラリア地域で一般的に使用されます。）<br />
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::

<table align="center">
  <tbody>
    <tr>
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
  </tbody>
</table>

上記のセンサー送信データ用コードは、Arduino IDEを使用してWio Terminalに直接アップロードして実行できます。その際、シリアルモニターをオンにし、ボーレートを9600に調整してデータ送信をリアルタイムで観察してください。

詳細については、リファレンスカタログの個別センサー使用セクションに戻ってください。

### リアルタイムデータ

**Application**タブで、**Live data**をクリックすると、TTNが受信したデータの情報を確認できます。

デコーダーによってデコードされた後のデータ情報を直接確認することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/40.png" /></div>

### ソースコード解析

このチュートリアルの内容を独自のプロジェクト開発に適用したい場合、コードの意味を理解することが重要です。ここでは、**SHT40**センサーのコードを例に、コード実装のロジックを説明します。

プログラムの冒頭では、TTNに接続するための必要なトライアド情報を準備し、Wio-E5の周波数を設定する必要があります。

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
ここで周波数帯域を選択します。
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

次に、`data_decord()`関数を定義します。この関数は、センサー値をTTNデコーダーで解析可能なデータフレームに変換し、LoRaWAN®プロトコルに準拠した形式で`data[]`配列に格納します。

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

SHT40センサーの場合、温度データと湿度データの2つのデータがあり、正負の値が存在するため、負の数値を処理する必要があります。また、小数点以下の値も処理する必要があります。

```cpp
int_temp = temperature*100;
int_humi = humidity*100;
```

次のステップは、SHT40の初期化とWio-E5の初期設定です。これらはすべて`setup()`関数内で実行されます。

```cpp
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

初期化コードでは、`DSKLORAE5_SWSERIAL_WIO_P2`はWio Terminalの**右側**のGroveインターフェースを表し、`DSKLORAE5_SWSERIAL_WIO_P1`は**左側**のGroveインターフェースを表します。外部センサーがないプロジェクトの場合、`DSKLORAE5_SEARCH_WIO`を使用することもでき、これによりWio-E5が接続されているGroveインターフェースを自動的に検索します。

```cpp
lorae5.send_sync(              // センサー値を送信
        8,                     // LoRaWanポート
        data,                  // データ配列
        sizeof(data),          // データサイズ
        false,                 // ACKを期待しない
        7,                     // スプレッドファクター
        14                     // 送信出力（dBm）
       ) 
```

`send_sync()` 関数の重要な役割は、センサー値を LoRaWAN® を介して送信することです。最初のパラメータはデータを送信するチャネル番号を示し、2番目のパラメータは送信するデータの内容を示し、3番目のパラメータは送信するデータの長さを示します。一般的に、最初の3つのパラメータの内容に注目するだけで十分です。

```cpp
delay(15000);
```

プログラムの最後にある delay は、データを送信する頻度を決定します。10秒未満の頻度で送信することは推奨しません。あまりにも高頻度で送信すると、Wio-E5 が正常に動作しなくなる可能性があり、TTN によって異常なデバイスと認識され、ブロックされる可能性があります。

Grove - Wio-E5 のコードや機能についてさらに詳しく知りたい場合は、[リポジトリの GitHub リンク](https://github.com/limengdu/Disk91_LoRaE5) を参照してください。Grove - Wio-E5 用のライブラリを作成してくださった [**Paul Pinault (disk91)**](https://github.com/disk91) に特別な感謝を申し上げます。

今後のコンテンツもお楽しみに！

## 技術サポート & 製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

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
- LoRaWAN® は LoRa Alliance® からライセンスを受けて使用されているマークです。