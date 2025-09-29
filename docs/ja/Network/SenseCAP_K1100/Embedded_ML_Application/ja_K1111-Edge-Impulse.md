---
description: Edge Impulseを使用した内蔵センサー
title: Edge Impulseを使用した内蔵センサー
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1111-Edge-Impulse
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Heliumを介してクラウドにEdge Impulseアプリケーションを開発

## 産業用センサーへのアップグレード可能

SenseCAPの[S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用すると、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢です。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに最新のSenseCAP S210xを試してみてください。

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

## 使用するツール

- [Wio Terminal](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)
- [Edge Impulse](https://studio.edgeimpulse.com/)
- [Helium](https://console.helium.com/)
- [Wio Terminal 内蔵加速度計を使用した Edge Impulse の連続動作認識](https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-2/)
- [Google スプレッドシート](https://docs.google.com/spreadsheets/u/0/)
- [Google フォーム](https://docs.google.com/forms/u/0/)

:::note
このセクションを始める前に、**Wio Terminal** の製品について理解していることを確認してください。
詳細については、以下をお読みください：

- [**Wio Terminal の始め方**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)
- [**Helium への接続**](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/)
- [**Helium を介した Google スプレッドシートへの統合**](https://wiki.seeedstudio.com/ja/Integrate_into_Google_Sheets_via_Helium/)
:::

この記事では、Edge Impulse を使用してモデルを生成し、クラウドに接続したい人向けのソリューションを紹介します。デモでは Google スプレッドシートを使用します。これは直接的で簡単な方法です。

## Helium の設定

### ステップ 1. Google フォームをサポートする統合を作成する

このステップは、記事 [**Helium を介した Google スプレッドシートへの統合**](https://wiki.seeedstudio.com/ja/Integrate_into_Google_Sheets_via_Helium/) の手順と似ています。

必要な作業は、統合に名前を付けて設定を保存するだけです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png" /></div>

Google フォームへの接続：

- 作成
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_1.png" /></div>

- Google スプレッドシートとの接続
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_2.png" /></div>

- Google フォーム ID とのリンク
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_3.png" /></div>

### ステップ 2. Google フォーム API とデコーダ機能を使用した関数を作成する

Google フォームが関数に接続され、上記の手順で取得した ID が入力されていることを確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Func.png" /></div>

データフロー転送のためにデコーダサポートを備えた関数を以下のように作成する必要があります。

```Javascript
function Decoder(bytes, port) {

    var decoded = {};
 
    function transformers(bytes) {
        if (bytes[0] == 255 || bytes[0] == 0) {
            value = bytes[2] * 256 + bytes[3];
        }
        return value;
    }
 
    if (port == 8) {
        decoded.class = transformers(bytes.slice(0, 4));
    }
  
  var decodedPayload = {
    "class": decoded.class 
  };

  // TODO 終了

  return Serialize(decodedPayload)
}

var field_mapping = {
  "class": "entry.39410305"
};

function Serialize(payload) {
  var str = [];
  for (var key in payload) {
    if (payload.hasOwnProperty(key)) {
      var name = encodeURIComponent(field_mapping[key]);
      var value = encodeURIComponent(payload[key]);
      str.push(name + "=" + value);
    }
  }
  return str.join("&");
}
// 削除禁止: Google フォーム関数
```

### ステップ 3. フローを設定する

接続を確保する

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Flows.png" /></div>

## Edge Impulse 設定

:::note
詳細については、以下をお読みください：
[Wio Terminal Edge Impulse Continuous Motion Recognition with Built-in Accelerometer](https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-2/)
:::

## Arduino (Wio Terminal) 設定

:::note
センサーや環境が異なるため、異なるキャリアボードでトレーニングされたモデルを直接書き込むことは必ずしも理想的ではありません。信頼性の高いモデルはユーザー自身がトレーニングする必要があるため、ここでは迅速な体験のためのテストコードのみを提供します。
:::

### 体験してみる

Edge Impulse からライブラリを生成した後、Wio Terminal で LoRa を介してデータを送信するためにコードを修正する必要があります。もし単に体験したいだけであれば、以下のコードをコピーして Arduino IDE を使用して Wio Terminal にフラッシュしてください。

以下のテストコードをフラッシュします。

```cpp
#include <AIot_Example_inferencing.h>
#include"LIS3DHTR.h"
#include"TFT_eSPI.h"
LIS3DHTR<TwoWire> lis;
TFT_eSPI tft;
#include <SoftwareSerial.h>
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SoftwareSerial mySerial(A0, A1); // RX, TX

SensirionI2CSht4x sht4x;
 
static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;

static int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    mySerial.printf(p_cmd, args);
    Serial.printf(p_cmd, args);
    va_end(args);
    delay(200);
    startMillis = millis();
 
    if (p_ack == NULL)
    {
        return 0;
    }
 
    do
    {
        while (mySerial.available() > 0)
        {
            ch = mySerial.read();
            recv_buf[index++] = ch;
            Serial.print((char)ch);
            delay(2);
        }
 
        if (strstr(recv_buf, p_ack) != NULL)
        {
            return 1;
        }
 
    } while (millis() - startMillis < timeout_ms);
    return 0;
}
 
static void recv_prase(char *p_msg)
{
    if (p_msg == NULL)
    {
        return;
    }
    char *p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;
 
    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
    }
 
    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        Serial.println(rssi);
    }
 
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        Serial.println(snr);
    }
}
////// メッセージ送信ブロック終了


/* 定数定義 -------------------------------------------------------- */
#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f        // 2022年3月以降、モデルは+-2の範囲で生成されますが、この例では+-4gの範囲を設定するArduinoライブラリを使用しています。古いモデルを使用している場合は、この値を無視して4.0fを使用してください。

/* プライベート変数 ------------------------------------------------------- */
static bool debug_nn = false; // 生の信号から生成された特徴などを確認するには、これをtrueに設定します。

/**
* @brief      Arduino setup 関数
*/
void setup()
{
    // 初回実行時にここにコードを記述します：
    Serial.begin(115200);
    Serial.println("Edge Impulse Inferencing Demo");

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_WHITE);
 
    lis.begin(Wire1);
 
    if (!lis.available()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
    }
    else {
        ei_printf("IMU initialized\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // 出力データレートを25Hzに設定、最大5kHzまで設定可能
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // スケール範囲を2gに設定、2,4,8,16gから選択可能


    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\n");
        return;
    }

    mySerial.begin(9600);

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    delay(5000);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
    
    Serial.print("E5 LORAWAN TEST\r\n");
 
    if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
    {
        is_exist = true;
        at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"608XXXXXXXXEE7\"\r\n");
        at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"608XXXXXXXX85D\"\r\n");
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"E1EF1AC8XXXXXXXXXXXXXXXX05C5\"\r\n");
        at_send_check_response("+CLASS: A", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        delay(200);
        is_join = true;
    }
    else
    {
        is_exist = false;
        Serial.print("No E5 module found.\r\n");
    }
}

/**
 * @brief 数値の符号を返します
 * 
 * @param number 
 * @return int 正の数（または0）の場合は1、負の数の場合は-1
 */
float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

/**
* @brief      データを取得して推論を実行します
*
* @param[in]  debug  trueの場合、デバッグ情報を取得します
*/
void loop()
{
    ei_printf("\nStarting inferencing in 2 seconds...\n");

    delay(2000);

    ei_printf("Sampling...\n");

    // IMUから読み取る値のためにここでバッファを割り当てます
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // 次のティックを決定（その後スリープ）
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        lis.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // 生のバッファを信号に変換し、それを分類します
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // 分類器を実行
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // 予測結果を出力
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif
    
   int classification_flag = 0;

   if (result.classification[1].value > 0.7) {
    tft.fillScreen(TFT_PURPLE);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Wave", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
    classification_flag = 1;
   }
 
   if (result.classification[2].value > 0.7) {
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Circle", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
    classification_flag = 2;
   }

    
    if (is_exist){
        int ret = 0;
        if (is_join){
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret){
              is_join = false;
            }
            else{
                Serial.println("");
                Serial.print("JOIN failed!\r\n\r\n");
                delay(5000);
            }
        }
        else{
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%08X %08X\"\r\n", classification_flag);
            ret = at_send_check_response("Done", 10000, cmd);
            if (ret){
              Serial.print("classification_flag:");
              Serial.print(classification_flag);
              Serial.print("\t");
              recv_prase(recv_buf);
            }
            else{
              Serial.print("Send failed!\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
      delay(500);
    }

}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "Invalid model for current sensor"
#endif
```

### DIYでさらなる機能を追加

:::note
詳細については、以下のドキュメントをご覧ください。

- [**Connecting-to-Helium**](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/)
:::
注意すべき点：

- 分類結果の保存:

    特定の条件が存在する場合にフラグを変更するための閾値を設定できます。また、異なるカテゴリには異なるラベルを付けることができます。

    処理速度を向上させるために、tft関数をコメントアウトすることができます。

    ```c++
    int classification_flag = 0;
    if (result.classification[1].value > 0.7) {
        tft.fillScreen(TFT_PURPLE);
        tft.setFreeFont(&FreeSansBoldOblique12pt7b);
        tft.drawString("Wave", 20, 80);
        delay(1000);
        tft.fillScreen(TFT_WHITE);
        classification_flag = 1;
    }
    if (result.classification[2].value > 0.7) {
        tft.fillScreen(TFT_RED);
        tft.setFreeFont(&FreeSansBoldOblique12pt7b);
        tft.drawString("Circle", 20, 80);
        delay(1000);
        tft.fillScreen(TFT_WHITE);
        classification_flag = 2;
    }
    ....
    ```

- データ送信コードブロック:

    Loraネットワークが利用可能な場合、タグをHeliumに送信し、Heliumで作成したデコーダーを使用して回収することができます。

    ```c++
    if (is_exist){
        int ret = 0;
        if (is_join){
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret){
              is_join = false;
            }
            else{
                Serial.println("");
                Serial.print("JOIN failed!\r\n\r\n");
                delay(5000);
            }
        }
        else{
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%08X %08X\"\r\n", classification_flag); // classification_flagを送信したいデータに変更
            ret = at_send_check_response("Done", 10000, cmd);
            if (ret){
              Serial.print("classification_flag:");
              Serial.print(classification_flag);
              Serial.print("\t");
              recv_prase(recv_buf);
            }
            else{
              Serial.print("Send failed!\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
      delay(500);
    }
    ```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>