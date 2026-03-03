---
description: Home AssistantをLoRaWANデバイス（XIAO-ESP32-S3）で拡張する
title: Home AssistantをLoRaWANデバイス（XIAO-ESP32-S3）で拡張する
keywords:
- LoRaWAN
- Home Assistant
- XIAO ESP32
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ha_xiao_esp32
last_update:
  date: 05/15/2025
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao1.png" alt="pir" width={1000} height="auto" /></p>

### はじめに

Home Assistantはオープンソースのスマートホームプラットフォームシステムであり、ユーザーは自分のIoTデバイスを簡単にシステムに接続して統一管理を行うことができます。しかし、Home Assistantの主な特徴は、さまざまなセンサーデバイスの表示を実現するだけでなく、クロスプラットフォームデバイスの自動連携を実現することにあります。このようなスマートホームプラットフォームこそが、十分な活力を持つものと言えます。

### Home AssistantにLoRaWANセンサーを追加する

#### Arduinoプログラムコード

* **ハードウェア**

以下の図のように、XIAOを拡張ボードに取り付け、E5モジュールをボードのGND、3V3、SDA-4、SL-5ピンに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao-hardware.png" alt="pir" width={700} height="auto" /></p>

* **ソフトウェア**

以下のコードにいくつかの修正を加えます。たとえば、LoRa通信モジュールのAppKEYやその他の必要な情報を変更してLoRaWANにアクセスできるようにし、送信したいデータをコマンド`AT+CMSGHEX`で変更します。ここでは、温度（temp）と湿度（humi）をシミュレートしてデータを送信します。

```cpp
# include <Arduino.h>

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int temp = 25;
int humi = 56;

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
    char *p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
        Serial.print("led :");
        led = !!data;
        Serial.print(led);
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
        Serial.print("rssi:");
        Serial.print(rssi);
    }
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        Serial.print("snr :");
        Serial.print(snr);
    }
}

void setup() {
  Serial.begin(115200); // シリアル通信を初期化
  Serial1.begin(9600, SERIAL_8N1, 44, 43);

  if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
  {
      is_exist = true;
      
      // AT+IDコマンドを送信
      if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
          // コマンドが正常に送信され、応答を受信
          // 返されたデータはrecv_bufに格納される
          Serial.print("受信したIDデータ: ");
          Serial.println(recv_buf);
      } else {
          // コマンド送信失敗または応答なし
          Serial.println("IDデータの取得に失敗しました。");
      }

      // その他のコマンド
      at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
      at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
      at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
      at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"\r\n");
      at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
      at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
      
      delay(200);
      is_join = true;
  }
  else
  {
      is_exist = false;
      Serial.print("E5モジュールが見つかりません。\r\n");
  }
}

void loop() {
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
                Serial.print("JOINに失敗しました！\r\n\r\n");
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
            delay(30000);
        }
    }
    else
    {
        delay(1000);
    }
    temp++;
    humi++;
}
```

#### ChirpStackの設定

ChirpStackで新しいデバイスプロファイルを作成し、以下のコードをPayload codecに入力します：

```cpp
function decodeUplink(input, port) {
    var decoded = {
        temp: 0,
        humi: 0
    };
    var bytes = input['bytes']
    bytes = bytes2HexString(bytes)
  
    decoded.temp = parseInt(bytes.slice(0, 4), 16);
    decoded.humi = parseInt(bytes.slice(-4), 16);

    let messages = [
        {
            type: 'temp',
            measurementId: 4097,
            measurementValue: decoded.temp
        },
        {
            type: 'humi',
            measurementId: 4098,
            measurementValue: decoded.humi
        }
    ];

    var result = {};
    result.messages = messages;
    return { data: result };
}
  
/**
 * 数値を先頭に0を付けて8桁のバイナリに変換
 * @param arr
 * @returns {string}
 */
function toBinary (arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    let ret = binaryData.toString()
        .replace(/,/g, '')
    return ret
}

function bytes2HexString (arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}
```

次に「Submit」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao3.png" alt="pir" width={800} height="auto" /></p>

以下の図のように、関連データが受信され、データが正常に送信されたことを示しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao4.png" alt="pir" width={700} height="auto" /></p>

#### Home Assistantの設定

以下のチュートリアルを使用して、Home Assistantの統合を完了してください：[SenseCAP Integration for Home Assistant](https://wiki.seeedstudio.com/ja/home_assistant_sensecap/)。数分待つと、デバイスXIAO-ESP32-S3が認識され、デバイス内に2つのエンティティ（温度と湿度）があることが確認できます。これらは先ほど送信した2つのデータであり、Home Assistant内で対応するセンサーエンティティとして識別されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao6.png" alt="pir" width={700} height="auto" /></p>

デバイスを概要に追加した後、XIAOをHome Assistantに追加する全プロセスが完了しました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao5.png" alt="pir" width={700} height="auto" /></p>

### 議論

Home Assistantは非常に強力なスマートホームオープンソースシステムであり、さまざまなデバイスをこのプラットフォームに接続することができます。スマートホームのエコシステムはますます拡大しており、XIAOを使用してApple HomePodを制御することを想像できますか？このチュートリアルを通じて、XIAOをHome Assistantに接続しましたが、これはほんの始まりに過ぎません。同様に、主要なセンサーをHome Assistantに接続することで、より興味深い機能を実現することができ、スマートホームのエコシステムはますます大きくなっていくでしょう。

## 技術サポートと製品に関する議論

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>