---
title: Grove - Wio-E5 TTN デモ
nointro:
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Wio_E5_TTN_Demo
last_update:
  date: 05/15/2025
  author: Salman
---


## はじめに

[The Things Network](https://www.thethingsnetwork.org/) は、低コストで次の IoT アプリケーションを構築するためのオープンツールセットを備えた、グローバルでオープンな LoRaWAN ネットワークを提供します。最大限のセキュリティを特徴とし、スケール可能な設計です。堅牢なエンドツーエンド暗号化を通じて、世界中の多くの国々にまたがる安全で協力的な IoT ネットワークが構築されています。現在、数千のゲートウェイが運用され、数百万人にカバレッジを提供しています。

### 準備

ここでは、[TTN (The Things Network)](https://www.thethingsnetwork.org/) と Grove - Wio-E5 モジュールを介して Seeeduino XIAO モジュールを接続する方法を示すデモを紹介します。これらのモジュールは環境から温度と湿度のパラメータを収集し、それらを TTN に送信することができます。Seeeduino Xiao の点滅する LED ライトは、TTN クラウドに接続する温度と湿度センサーの状態を示します。

:::caution
使用しているエンドノード、ゲートウェイ、および TTN 設定間で周波数帯域の一貫性を確保してください。この指示に従ってください。
このデモで適用される周波数プランは **EU868** です。
:::

### 必要なハードウェア

| Seeeduino XIAO | Grove - Wio-E5 | Seeeduino XIAO 拡張ボード | Grove - 温度 & 湿度センサー (DHT11) |
|--------------|--------------|--------------|--------------|
|  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|   <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/11302009_preview-34.png" alt="pir" width={600} height="auto" /></p>| <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>|  <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/r/grove-temperature-humidity-sensor-dht11-preview.png" alt="pir" width={600} height="auto" /></p> |[今すぐ購入](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

:::note
Seeeduino XIAO を初めて使用する場合は、[Seeeduino XIAO の wiki](https://wiki.seeedstudio.com/ja/Seeeduino_Lotus/) を参照してください。
Arduino を初めて使用する場合は、[Arduino のウェブサイト](https://www.arduino.cc/) が Arduino の旅を始めるための素晴らしいリソースです。
:::

### ハードウェア接続

- **ステップ 1.** Wio-E5 モジュールを "UART" スロットに直接接続します。

- **ステップ 2.** DH11 を "A0/D0" ソケットに挿入します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

### ソフトウェア準備

:::note
Arduino を初めて使用する場合は、[Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を開始する前に必ずご覧ください。
[Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) の詳細についてはクリックしてください。
:::

#### ライブラリのダウンロード

- **ステップ 1.** [u8g2 ライブラリ](https://github.com/olikraus/U8g2_Arduino) をインストールします。

- **ステップ 2.** [DHT センサーライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) をインストールします。

#### ソフトウェアコード

例をダウンロードし、コードを Arduino IDE にコピーしてアップロードしてください。

```cpp
# include <Arduino.h>
# include <U8x8lib.h>
# include "DHT.h"

# define DHTPIN 0 // 接続しているピン番号

// 使用しているタイプをコメント解除してください！
# define DHTTYPE DHT11 // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);
// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/*clock=*/ SCL, /*data=*/ SDA, /*reset=*/ U8X8_PIN_NONE);   // リセットなしの OLED ディスプレイ

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    Serial1.printf(p_cmd, args);
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
        while (Serial1.available() > 0)
        {
            ch = Serial1.read();
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
char*p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
        u8x8.setCursor(2, 4);
        u8x8.print("led :");
        led = !!data;
        u8x8.print(led);
        if (led)
        {
            digitalWrite(LED_BUILTIN, LOW);
        }
        else
        {
            digitalWrite(LED_BUILTIN, HIGH);
        }
    }

    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        u8x8.setCursor(0, 6);
        u8x8.print("                ");
        u8x8.setCursor(2, 6);
        u8x8.print("rssi:");
        u8x8.print(rssi);
    }
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        u8x8.setCursor(0, 7);
        u8x8.print("                ");
        u8x8.setCursor(2, 7);
        u8x8.print("snr :");
        u8x8.print(snr);
    }
}

void setup(void)
{
    u8x8.begin();
    u8x8.setFlipMode(1);
    u8x8.setFont(u8x8_font_chroma48medium8_r);

    Serial.begin(115200);
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH);

    Serial1.begin(9600);
    Serial.print("E5 LORAWAN TEST\r\n");
    u8x8.setCursor(0, 0);

    if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
    {
        is_exist = true;
        at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"2B7E151628AED2A6ABF7158809CF4F3C\"\r\n");
        at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        delay(200);
        u8x8.setCursor(5, 0);
        u8x8.print("LoRaWAN");
        is_join = true;
    }
    else
    {
        is_exist = false;
        Serial.print("E5 モジュールが見つかりません。\r\n");
        u8x8.setCursor(0, 1);
        u8x8.print("E5 が見つかりません！");
    }

    dht.begin();

    u8x8.setCursor(0, 2);
    u8x8.setCursor(2, 2);
    u8x8.print("temp:");

    u8x8.setCursor(2, 3);
    u8x8.print("humi:");

    u8x8.setCursor(2, 4);
    u8x8.print("led :");
    u8x8.print(led);
}

void loop(void)
{
    float temp = 0;
    float humi = 0;

    temp = dht.readTemperature();
    humi = dht.readHumidity();

    Serial.print("湿度: ");
    Serial.print(humi);
    Serial.print(" %\t");
    Serial.print("温度: ");
    Serial.print(temp);
    Serial.println(" *C");

    u8x8.setCursor(0, 2);
    u8x8.print("      ");
    u8x8.setCursor(2, 2);
    u8x8.print("temp:");
    u8x8.print(temp);
    u8x8.setCursor(2, 3);
    u8x8.print("humi:");
    u8x8.print(humi);

    if (is_exist)
    {
        int ret = 0;
        if (is_join)
        {

            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret)
            {
                is_join = false;
            }
            else
            {
                at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                Serial.print("JOIN に失敗しました！\r\n\r\n");
                delay(5000);
            }
        }
        else
        {
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)temp, (int)humi);
            ret = at_send_check_response("Done", 5000, cmd);
            if (ret)
            {
                recv_prase(recv_buf);
            }
            else
            {
                Serial.print("送信に失敗しました！\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
        delay(1000);
    }
}

```

### TTNコンソール設定手順

- **ステップ1.** [The Things Network](https://www.thethingsnetwork.org) のウェブサイトにアクセスし、新しいアカウントを登録してください。

- **ステップ2.** ログイン後、プロフィールをクリックして **Console** を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ3.** クラスターを選択して、デバイスやゲートウェイを追加する作業を開始してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width="600" height="auto"/></p>

- **ステップ4.** **Go to applications** をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ5.** **+ Add application** をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width="400" height="auto"/></p>

- **ステップ6.** **Application ID** を入力し、**Create application** をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width="500" height="auto"/></p>

**注意:** **Application name** と **Description** は必須項目ではありません。**Application name** を空白のままにすると、デフォルトで **Application ID** と同じ名前が使用されます。

以下は新しく作成されたアプリケーションです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ7:** `Payload formatters > Uplink` に移動し、**Formatter Type** を **Javascript** に選択し、以下の **Formatter parameter** を入力してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/1.png" alt="pir" width="550" height="auto"/></p>

```js
function Decoder(bytes, port) {
  
  var decoded = {};
  if (port === 8) {
    decoded.temp = bytes[0] <<8 | bytes[1];
    decoded.humi = bytes[2] <<8 | bytes[3];
  }

  return decoded;
}
```

- **ステップ8:** 以前説明したように、ArduinoコードをSeeeduino XIAO にアップロードし、シリアルモニターを開いて以下の出力を確認してください。

```
Humidity: 50%       Temperature: 25.00 *C
AT+JOIN
+JOIN: Start
+JOIN: NORMAL
+JOIN: Join failed
+JOIN: Done
AT+ID
+ID: DevAddr, 24:40:00:7C
+ID: DevEui, 2C:F7:F1:20:24:90:03:63
+ID: AppEui, 80:00:00:00:00:00:00:07
+JOIN: Join failed
```

上記で生成された **DevEui** と **AppEUi** をメモしてください。

- **ステップ9:** 作成したアプリケーションの **Overview** ページに戻り、**+ Add end device** をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width="500" height="auto"/></p>

- **ステップ10.** **Manually** をクリックして、登録資格情報を手動で入力してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width="420" height="auto"/></p>

- **ステップ11.** 地域に応じた **Frequency plan** を選択してください。また、このデバイスを接続するゲートウェイと同じ周波数を使用することを確認してください。**MAC V1.0.2** を **LoRaWAN® version** として選択し、**PHY V1.0.2 REV B** を **Regional Parameters version** として選択してください。これらの設定は Wio-E5 のLoRaWAN®スタックに基づいています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width="450" height="auto"/></p>

- **ステップ12.** **ステップ8** で取得した情報を **DevEUI** と **AppEUI** フィールドにコピー＆ペーストしてください。**End device ID** フィールドは **DevEUI** を入力すると自動的に埋められます。**AppKey** フィールドには次の値を使用してください: 2B7E151628AED2A6ABF7158809CF4F3C。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width="450" height="auto"/></p>

最後に **Register end device** をクリックしてください。

- **ステップ13.** TTNコンソールで LoRaWAN® ゲートウェイを登録してください。詳細な手順は [こちら](https://wiki.seeedstudio.com/ja/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console) を参照してください。

すべての設定が完了した後、シリアルモニターに以下の出力が表示された場合、Seeeduino XIAO がTTNに正常に接続され、温度と湿度センサーのデータを送信していることを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113020091/Screen%20Shot%202021-03-09%20at%203.20.00%20PM.png" alt="pir" width="500" height="auto"/></p>

- **ステップ14.** アプリケーションページに戻り、**End devices** に移動して、作成したデバイスを選択し、**Live data** をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/2.png" alt="pir" width="1000" height="auto"/></p>

ここで、リアルタイムで温度と湿度センサーのデータが表示されます！

- **ステップ15.** `Messaging > Downlink` に移動し、**Payload** に **01** を入力して **Schedule downlink** をクリックし、Seeeduino XIAO の **内蔵黄色LED** を **オン** にしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/3.png" alt="pir" width="550" height="auto"/></p>

- **ステップ16.** **Payload** に **00** を送信して、**内蔵黄色LED** を **オフ** にしてください。

## リソース

データシート:

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd">Grove Wio-E5 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf">Grove Wio-E5 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch">Grove Wio-E5 v1.0.sch</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Wio-E5 データシートおよび仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 ATコマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

認証:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 認証 -DTS</a></p>

関連SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WLシリーズ用 STM32Cube MCU パッケージ</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>