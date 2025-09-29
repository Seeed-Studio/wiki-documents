---
title: WiFi シリアルトランシーバーモジュール
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/WiFi_Serial_Transceiver_Module/
slug: /ja/WiFi_Serial_Transceiver_Module
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/WiFi%20Serial%20Transceiver%20Module.jpg)

このチュートリアルでは、Seeeduino を使用して ESP8266 WiFi モジュールを制御し、インターネットから静的ページをリクエストします。これは TCP ソケットの基本的な使用例です。他の使用方法については、モジュールの AT コマンドガイドを参照してください。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)

**必要な材料リスト:**

- [Seeeduino V3](https://www.seeedstudio.com/Seeeduino-V30-Atmega-328P-p-669.html) / Arduino Uno
- [ESP8266 シリアル WiFi モジュール](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)
- [UartSBee v4](https://www.seeedstudio.com/UartSBee-V4-p-688.html) / その他の USB から TTL へのコンバータ

!!!注意
    Seeeduino ボードにはハードウェアシリアルが 1 つしかないため、デバッグ情報を出力するためにソフトウェアシリアルを使用しました。ただし、ソフトウェアシリアルの制限として、19200 を超えるボーレートで通信することはできません。そのため、ESP モジュールのボーレート 57600 がソフトウェアシリアルのボーレートを超えているため、一部の出力が失われます。複数のハードウェアシリアルを持つボード（例: Arduino Mega 2560）を使用する場合は、より簡単になります。

## 手順
---
- **ステップ 1**: 以下の図のようにモジュールを接続します。

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Wifi_connection.jpg)

- **ステップ 2**: Seeeduino ボードをプログラムします。

   - Arduino IDE を開き、新しいスケッチを作成します。
   - 以下のコードをスケッチエディタに貼り付けます（SSID と PASS マクロを自分の環境に合わせて変更する必要があります）。

```c
#include <SoftwareSerial.h>
   #define SSID "xxxxxxxx"
   #define PASS "xxxxxxxx"
   #define DST_IP "220.181.111.85" //baidu.com
   SoftwareSerial dbgSerial(10, 11); // RX, TX
   void setup()
   {
     // シリアル通信を開き、ポートが開くのを待つ
     Serial.begin(57600);
     Serial.setTimeout(5000);
     dbgSerial.begin(9600); // ソフトウェアシリアルでは 19200 を超えられない
     dbgSerial.println("ESP8266 デモ");
     // モジュールが準備できているかテスト
     Serial.println("AT+RST");
     delay(1000);
     if(Serial.find("ready"))
     {
       dbgSerial.println("モジュールは準備完了");
     }
     else
     {
       dbgSerial.println("モジュールが応答しません。");
       while(1);
     }
     delay(1000);
     // WiFi に接続
     boolean connected=false;
     for(int i=0;i<5;i++)
     {
       if(connectWiFi())
       {
         connected = true;
         break;
       }
     }
     if (!connected){while(1);}
     delay(5000);
     // IP アドレスを表示
     /*Serial.println("AT+CIFSR");
     dbgSerial.println("IP アドレス:");
     while (Serial.available())
     dbgSerial.write(Serial.read());*/
     // 単一接続モードを設定
     Serial.println("AT+CIPMUX=0");
   }
   void loop()
   {
     String cmd = "AT+CIPSTART=\"TCP\",\"";
     cmd += DST_IP;
     cmd += "\",80";
     Serial.println(cmd);
     dbgSerial.println(cmd);
     if(Serial.find("Error")) return;
     cmd = "GET / HTTP/1.0\r\n\r\n";
     Serial.print("AT+CIPSEND=");
     Serial.println(cmd.length());
     if(Serial.find(">"))
     {
       dbgSerial.print(">");
       }else
       {
         Serial.println("AT+CIPCLOSE");
         dbgSerial.println("接続タイムアウト");
         delay(1000);
         return;
       }
       Serial.print(cmd);
       delay(2000);
       //Serial.find("+IPD");
       while (Serial.available())
       {
         char c = Serial.read();
         dbgSerial.write(c);
         if(c=='\r') dbgSerial.print('\n');
       }
       dbgSerial.println("====");
       delay(1000);
     }
     boolean connectWiFi()
     {
       Serial.println("AT+CWMODE=1");
       String cmd="AT+CWJAP=\"";
       cmd+=SSID;
       cmd+="\",\"";
       cmd+=PASS;
       cmd+="\"";
       dbgSerial.println(cmd);
       Serial.println(cmd);
       delay(2000);
       if(Serial.find("OK"))
       {
         dbgSerial.println("OK, WiFi に接続しました。");
         return true;
         }else
         {
           dbgSerial.println("WiFi に接続できません。");
           return false;
         }
       }
```

- **ステップ 3**: シリアルモニタを開き、Seeeduino ボードのリセットボタンを押すと、出力が表示されます。

最後に、ハッキングを楽しんでください！ :)

## 関連プロジェクト
---
[Recipe Community](https://www.seeedstudio.com/recipe/)は、メイカーが素晴らしい作品を共有するための素晴らしい場所です。私たちのメイカーたちはESP8266を使って多くの素晴らしいプロジェクトを作成しています。ぜひチェックしてみてください！

**WiFiスキャナー - 周囲のWiFi信号を確認**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-WiFi_Scanner-Know_the_WiFi_Signal_around_you.jpg)

簡単な手順で自分だけのWiFiスキャナーを作りましょう。必要なものは以下の通りです：

- NodeMcu開発ボード
- I2C OLED
- いくつかのケーブル
- そして最も重要なのは、ESP8266への熱い情熱！

[さあ、自分だけのスキャナーを作ってみませんか？](https://community.seeedstudio.com/project_detail.html?id=220)

**NodeMcu >ESP8266< を使った初歩的なIoTプロジェクト**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-Primary_IoT_Make_with_NodeMcu--ESP8266--.jpg)

オンライン温度＆湿度モニターを以下の材料で作成：

- NodeMcu開発ボード
- Grove - 温度＆湿度センサー
- いくつかのケーブル

もう一つ簡単なトリック、[自分で作ってみませんか？](https://community.seeedstudio.com/project_detail.html?id=232)

まだ物足りない？もっと[ESP8266を使った素晴らしいプロジェクト](https://community.seeedstudio.com/discover.html?t=wio)をご覧ください。

さらに多くの素晴らしいプロジェクトは[Recipe](https://community.seeedstudio.com/projects.html#recipe)で見つけられます。

## 技術サポート＆製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>