---
title: Grove - Wio-E5 LoRa P2P Example 
nointro:
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Wio_E5_P2P
last_update:
  date: 05/15/2025
  author: Matthew
---


IoTプロジェクトにおいて、シンプルで柔軟性があり、コスト効率の良いソリューションをお探しですか？LoRa P2Pを試してみてください。

LoRaは低消費電力のワイヤレス変調技術であり、デバイスが長距離で通信を行う際に最小限のエネルギー消費で済むようにします。「P2P」とは「ポイント・ツー・ポイント」を意味し、デバイスが基地局やルーターなどの中間ネットワークインフラを必要とせずに直接通信できることを指します。

LoRa P2Pを活用することで、長距離通信と低消費電力が求められる環境でIoTデバイス同士が直接通信することが可能になります。

以下は、Grove Wio-E5とSeeed Studio XIAO SAMD21を使用してLoRaポイント・ツー・ポイント通信アプリケーションを構築する例です。

### 準備

- [Grove - Wio E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html) *2
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) *2
- [XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) *2
- USB Type-Cケーブル *2

初めてSeeed Studio XIAO SAMD21を使用する場合は、この[wiki](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)を参照してください。

Arduinoを初めて使用する場合は、[こちら](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)からArduinoの旅を始めてください。

### ハードウェアの接続

以下の画像のように、Wio-E5モジュールをUARTソケットに直接接続できます。

![point to point transmission with grove wio e5](https://files.seeedstudio.com/products/113020091/P2P.png)

### ライブラリのダウンロード

このデモでは[u8g2](https://github.com/olikraus/U8g2_Arduino)ライブラリをインストールする必要があります。ライブラリをダウンロードしてインストールしてください（[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)）。

### サンプルコードのダウンロード

以下のコードをArduino IDEにコピーしてアップロードしてください。
1つはマスターとして使用し、コード内のNODE_SLAVEマクロ定義をコメントアウトする必要があります。もう1つはスレーブとして使用し、NODE_SLAVEマクロ定義をオンにする必要があります。

```cpp
# include <Arduino.h>
# include <U8x8lib.h>

// #define NODE_SLAVE

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);
// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/*clock=*/ SCL, /*data=*/ SDA, /*reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

static char recv_buf[512];
static bool is_exist = false;

static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch = 0;
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

static int recv_prase(void)
{
    char ch;
    int index = 0;
    memset(recv_buf, 0, sizeof(recv_buf));
    while (Serial1.available() > 0)
    {
        ch = Serial1.read();
        recv_buf[index++] = ch;
        Serial.print((char)ch);
        delay(2);
    }

    if (index)
    {
        char *p_start = NULL;
        char data[32] = {
            0,
        };
        int rssi = 0;
        int snr = 0;

        p_start = strstr(recv_buf, "+TEST: RX \"5345454544");
        if (p_start)
        {
            p_start = strstr(recv_buf, "5345454544");
            if (p_start && (1 == sscanf(p_start, "5345454544%s", data)))
            {
                data[4] = 0;
                u8x8.setCursor(0, 4);
                u8x8.print("               ");
                u8x8.setCursor(2, 4);
                u8x8.print("RX: 0x");
                u8x8.print(data);
                Serial.print(data);
                Serial.print("\r\n");
            }

            p_start = strstr(recv_buf, "RSSI:");
            if (p_start && (1 == sscanf(p_start, "RSSI:%d,", &rssi)))
            {
                u8x8.setCursor(0, 6);
                u8x8.print("                ");
                u8x8.setCursor(2, 6);
                u8x8.print("rssi:");
                u8x8.print(rssi);
            }
            p_start = strstr(recv_buf, "SNR:");
            if (p_start && (1 == sscanf(p_start, "SNR:%d", &snr)))
            {
                u8x8.setCursor(0, 7);
                u8x8.print("                ");
                u8x8.setCursor(2, 7);
                u8x8.print("snr :");
                u8x8.print(snr);
            }
            return 1;
        }
    }
    return 0;
}

static int node_recv(uint32_t timeout_ms)
{
    at_send_check_response("+TEST: RXLRPKT", 1000, "AT+TEST=RXLRPKT\r\n");
    int startMillis = millis();
    do
    {
        if (recv_prase())
        {
            return 1;
        }
    } while (millis() - startMillis < timeout_ms);
    return 0;
}

static int node_send(void)
{
    static uint16_t count = 0;
    int ret = 0;
    char data[32];
    char cmd[128];

    memset(data, 0, sizeof(data));
    sprintf(data, "%04X", count);
    sprintf(cmd, "AT+TEST=TXLRPKT,\"5345454544%s\"\r\n", data);

    u8x8.setCursor(0, 3);
    u8x8.print("                ");
    u8x8.setCursor(2, 3);
    u8x8.print("TX: 0x");
    u8x8.print(data);

    ret = at_send_check_response("TX DONE", 2000, cmd);
    if (ret == 1)
    {

        count++;
        Serial.print("送信成功！\r\n");
    }
    else
    {
        Serial.print("送信失敗！\r\n");
    }
    return ret;
}

static void node_recv_then_send(uint32_t timeout)
{
    int ret = 0;
    ret = node_recv(timeout);
    delay(100);
    if (!ret)
    {
        Serial.print("\r\n");
        return;
    }
    node_send();
    Serial.print("\r\n");
}

static void node_send_then_recv(uint32_t timeout)
{
    int ret = 0;
    ret = node_send();
    if (!ret)
    {
        Serial.print("\r\n");
        return;
    }
    if (!node_recv(timeout))
    {
        Serial.print("受信タイムアウト！\r\n");
    }
    Serial.print("\r\n");
}

void setup(void)
{

    u8x8.begin();
    u8x8.setFlipMode(1);
    u8x8.setFont(u8x8_font_chroma48medium8_r);

    Serial.begin(115200);
    // while (!Serial);

    Serial1.begin(9600);
    Serial.print("ピンポン通信！\r\n");
    u8x8.setCursor(0, 0);

    if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
    {
        is_exist = true;
        at_send_check_response("+MODE: TEST", 1000, "AT+MODE=TEST\r\n");
        at_send_check_response("+TEST: RFCFG", 1000, "AT+TEST=RFCFG,866,SF12,125,12,15,14,ON,OFF,OFF\r\n");
        delay(200);
# ifdef NODE_SLAVE
        u8x8.setCursor(5, 0);
        u8x8.print("スレーブ");
# else
        u8x8.setCursor(5, 0);
        u8x8.print("マスター");
# endif
    }
    else
    {
        is_exist = false;
        Serial.print("E5モジュールが見つかりません。\r\n");
        u8x8.setCursor(0, 1);
        u8x8.print("E5未検出！");
    }
}

void loop(void)
{
    if (is_exist)
    {
# ifdef NODE_SLAVE
        node_recv_then_send(2000);
# else
        node_send_then_recv(2000);
        delay(3000);
# endif
    }
}
```

### レビュー結果

![](https://github.com/seeed-lora/Grove-LoRa-E5-P2P-Example/blob/master/Doc/result.jpg?raw=true)

## リソース

データシート:

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd">Grove Wio-E5 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf">Grove Wio-E5 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch">Grove Wio-E5 v1.0.sch</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Wio-E5 データシートと仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 ATコマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

認証:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC認証 -DTS</a></p>

関連SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WLシリーズ向けSTM32Cube MCUパッケージ</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>