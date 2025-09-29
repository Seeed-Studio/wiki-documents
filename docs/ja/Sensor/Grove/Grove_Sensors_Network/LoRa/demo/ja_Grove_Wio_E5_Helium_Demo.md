---
title: Grove - Wio-E5 Helium デモ
nointro:
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Wio_E5_Helium_Demo
last_update:
  date: 05/15/2025
  author: Salman 
---


## はじめに

Helium IoT ネットワークは LoRaWAN プロトコルを使用して「モノのインターネット」デバイスにインターネット接続を提供し、Helium エコシステム内の元のサブネットワークです。世界中の開発者や企業が Helium IoT ネットワークを接続に利用しています。

:::note
必ず Helium ネットワークのカバレッジ内にいることを確認してください。ネットワークカバレッジは [explorer.helium.com](https://explorer.helium.com/) で確認できます。
:::

### 準備

ここでは、Grove - Wio-E5 モジュールを介して Helium IoT ネットワークと Seeeduino XIAO モジュールを接続する方法を示すデモを紹介します。これらのモジュールは環境から温度と湿度のパラメータを収集し、それらを TTN に送信することができます。Seeeduino Xiao の点滅する LED ライトは、TTN クラウドへの接続中の温度および湿度センサーの状態を示します。

:::caution
使用しているエンドノード、ゲートウェイ、および Helium 設定間で周波数帯域が一致していることを、この指示に従って確認してください。
このデモで使用される周波数プランは **IN865** です。
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

### Helium IoT コンソール準備

- **ステップ 1.** [Helium コンソール](https://console.helium.com/welcome) のウェブサイトにアクセスし、既存のアカウントでログインします。アカウントをお持ちでない場合は、[Metroscientific](https://console.meteoscientific.com/) などの他のパブリックコンソール LNS プロバイダーを使用する必要があります。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Helium-login.png" alt="pir" width={500} height="auto" /></p> 

- **ステップ 2.** ログイン後、「Devices」をクリックしてデバイスを管理します。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 3.** 次に「Add New Device」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/CreateaDevice01.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** ここで、**1) 新しいデバイスを追加**、**2) Dev EUI をコピー**、**3) App EUI をコピー**、**4) App Key をコピー**、**5) 最後に保存をクリック**します。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Id01.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 5.** これで「Devices」セクションにデバイスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device02.png" alt="pir" width="1000" height="auto"/></p>

これで Helium コンソールのセットアップが完了しました。次にソフトウェア部分に進み、Helium LoRa ネットワークを介してデータを Helium コンソールにアップロードします。

### ソフトウェア準備

:::note
Arduino を初めて使用する場合は、開始前に [Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) をご覧になることを強くお勧めします。
[Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) の詳細については、こちらをクリックしてください。
:::

#### ライブラリのダウンロード

- **ステップ 1.** [u8g2 ライブラリ](https://github.com/olikraus/U8g2_Arduino) をインストールします。

- **ステップ 2.** [DHT センサーライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) をインストールします。

#### ソフトウェアコード

例をダウンロードし、コードを Arduino IDE にコピーしてアップロードします。

```cpp
/*
* Grove - Wio-E5 Helium デモ
* 日付: 2023/08/30
* 著者: Salman Faris (Seeed TTN スケッチを改変)
*/

#include <Arduino.h>
#include <U8x8lib.h>
#include "DHT.h"

//# define DHTPIN 0 // 接続されているピン

// 使用しているタイプをアンコメントしてください！
#define DHTTYPE DHT11  // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);
// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/*clock=*/ SCL, /*data=*/ SDA, /*reset=*/ U8X8_PIN_NONE);   // リセットなしの OLED ディスプレイ

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

static int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...) {
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

  if (p_ack == NULL) {
    return 0;
  }

  do {
    while (Serial1.available() > 0) {
      ch = Serial1.read();
      recv_buf[index++] = ch;
      Serial.print((char)ch);
      delay(2);
    }

    if (strstr(recv_buf, p_ack) != NULL) {
      return 1;
    }

  } while (millis() - startMillis < timeout_ms);
  return 0;
}

static void recv_prase(char *p_msg) {
  if (p_msg == NULL) {
    return;
  }
  char *p_start = NULL;
  int data = 0;
  int rssi = 0;
  int snr = 0;

  p_start = strstr(p_msg, "RX");
  if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data))) {
    Serial.println(data);
    u8x8.setCursor(2, 4);
    u8x8.print("led :");
    led = !!data;
    u8x8.print(led);
    if (led) {
      digitalWrite(LED_BUILTIN, LOW);
    } else {
      digitalWrite(LED_BUILTIN, HIGH);
    }
  }

  p_start = strstr(p_msg, "RSSI");
  if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi))) {
    u8x8.setCursor(0, 6);
    u8x8.print("                ");
    u8x8.setCursor(2, 6);
    u8x8.print("rssi:");
    u8x8.print(rssi);
  }
  p_start = strstr(p_msg, "SNR");
  if (p_start && (1 == sscanf(p_start, "SNR %d", &snr))) {
    u8x8.setCursor(0, 7);
    u8x8.print("                ");
    u8x8.setCursor(2, 7);
    u8x8.print("snr :");
    u8x8.print(snr);
  }
}

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);

  Serial1.begin(9600);
  Serial.print("E5 LORAWAN TEST\r\n");
  u8x8.setCursor(0, 0);

  if (at_send_check_response("+AT: OK", 100, "AT\r\n")) {
    is_exist = true;
    at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"xxxxxxxxxxxxx\"\r\n"); // 'xxxxxxxxxxxxx' を DevEui に置き換え
    at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"xxxxxxxxxxxxx\"\r\n"); // 'xxxxxxxxxxxxx' を AppEui に置き換え
    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"xxxxxxxxxxxxx\"\r\n"); // 'xxxxxxxxxxxxx' を AppKey に置き換え
    at_send_check_response("+ID: DevAddr", 1000, "AT+ID=DevAddr\r\n"); 
    at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
    at_send_check_response("+DR: IN865", 1000, "AT+DR=IN865\r\n");  // 場所に応じて FREQ を変更
    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
    at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
    at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
    delay(200);
    u8x8.setCursor(5, 0);
    u8x8.print("LoRaWAN");
    is_join = true;
  } else {
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

void loop(void) {

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

  if (is_exist) {
    int ret = 0;
    if (is_join) {

      ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
      if (ret) {
        is_join = false;
      } else {
        at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
        Serial.print("JOIN に失敗しました！\r\n\r\n");
        delay(5000);
      }
    } else {
      char cmd[128];
      sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)temp, (int)humi);
      ret = at_send_check_response("Done", 5000, cmd);
      if (ret) {
        recv_prase(recv_buf);
      } else {
        Serial.print("送信に失敗しました！\r\n\r\n");
      }
      delay(5000);
    }
  } else {
    delay(1000);
  }
}

```

**DevEui**、**AppEui**、および **AppKey** をコードをアップロードする前に必ず置き換えてください。

```cpp
at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"xxxxxxxxxxxxx\"\r\n"); // 'xxxxxxxxxxxxx' をあなたの DevEui に置き換えてください
at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"xxxxxxxxxxxxx\"\r\n"); // 'xxxxxxxxxxxxx' をあなたの AppEui に置き換えてください
at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"xxxxxxxxxxxxx\"\r\n"); // 'xxxxxxxxxxxxx' をあなたの AppKey に置き換えてください
```

- **ステップ 8**: 前述の手順に従って Arduino コードを Seeeduino XIAO にアップロードし、シリアルモニターを開いて以下の出力を確認してください。

```
+ID: DevAddr, 26:0B:20:25
+ID: DevEui, 60:81:F9:A4:84:XX:XX:XX
+ID: AppEui, 60:81:F9:A6:90:XX:XX:XX
AT+MODE=LWOTAA
+MODE: LWOTAA
AT+DR=IN865
+DR: IN865
AT+CH=NUM,0-2
+CH: NUM, 0-2
AT+CLASS=A
+CLASS: A
AT+PORT=8
+PORT: 8
Humidity: 43.00 %	Temperature: 23.00 *C
AT+JOIN
+JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 326548 DevAddr 48:00:00:0E
+JOIN: Done
Humidity: 29.00 %	Temperature: 32.00 *C
AT+CMSGHEX="0020001D"
+CMSGHEX: Start
+CMSGHEX: Wait ACK
+CMSGHEX: ACK Received
+CMSGHEX: RXWIN1, RSSI -30, SNR 6.0
+CMSGHEX: Done
Humidity: 8.00 %	Temperature: 30.00 *C
AT+CMSGHEX="001E0008"
+CMSGHEX: Start
```

このようなメッセージ **+JOIN: Network joined** が表示されたら、**"REAL TIME PACKETS"** セクションを開き、アップリンク情報を確認してください。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/realtimepkts.png" alt="pir" width={1000} height="auto" /></p> 

また、**"Event Log"** セクションでイベントログを確認することもできます。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/eventlog.png" alt="pir" width={1000} height="auto" /></p> 

さらに、デバッグウィンドウを開くと、ライブデータペイロードやその他の情報を確認できます。

<p style={{textAlign: 'center'}}><img src="https://github.com/salmanfarisvp/resource/blob/main/Images/LoRa/Helium/Networksetup/payload.png?raw=true" alt="pir" width={1000} height="auto" /></p> 

## リソース

データシート:

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd">Grove Wio-E5 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf">Grove Wio-E5 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch">Grove Wio-E5 v1.0.sch</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Wio-E5 データシートと仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT コマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

認証:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 認証 -DTS</a></p>

関連 SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WL シリーズ向け STM32Cube MCU パッケージ</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>