---
description: このwikiは、reCameraでHTTP経由でXIAOに接続してC++プロジェクトを実行する方法を説明します。
title: reCameraがHTTP経由でXIAOに接続
keywords:
  - Http
  - reCamera
  - XIAO
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /ja/recamera_connects_to_xiao_via_http
last_update:
  date: 07/11/2025
  author: Liangyuxin

no_comments: false # for Disqus
---

# reCameraがHTTP経由でXIAOに接続

この文書では、reCameraと[XIAO](https://wiki.seeedstudio.com/ja/SeeedStudio_XIAO_Series_Introduction/)の間でHTTP経由での通信を可能にし、[XIAO](https://wiki.seeedstudio.com/ja/SeeedStudio_XIAO_Series_Introduction/)にデータを送信して、reCameraを独自のプロジェクトに統合する方法を説明します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/1.png" /></div>

## 準備

### reCamera

#### HTTP APIとネットワーク接続

**まず**、reCameraのC++スーパーバイザープロジェクトと実行環境を準備します。

- **ステップ1.** [Supervisor_add_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Supervisor_add_detection_http.7z)プロジェクトをダウンロードし、コンパイルして**.exe**ファイルをreCameraターミナルディレクトリにコピーします。（詳細な手順については、wiki：[Real-time YOLO object detection using reCamera based on Cpp / Environment Preparation / Pre-compilation](https://wiki.seeedstudio.com/ja/real_time_yolo_object_detection_using_recamera_based_on_cpp/)を参照してください。）これはスーパーバイザープロジェクトで、デモンストレーション目的で写真YOLO検出インターフェースのみを使用します。独自のプロジェクトがある場合は、このプロジェクト内で新しいHTTP APIとプロジェクトコードを追加できます。

- **ステップ2.** USBケーブルを使用してreCameraをPCに接続し、**MobaXterm**を使用してreCameraターミナル（**192.168.42.1**）にアクセスし、**/etc/init.d/**に移動して3つの自動起動プログラム：**S93sscma-supervisor、S03node-red、S91sscma-node**を削除します。（詳細な手順については、wiki：[Real-time YOLO object detection using reCamera based on Cpp / Environment Preparation / reCamera Preparation](https://wiki.seeedstudio.com/ja/real_time_yolo_object_detection_using_recamera_based_on_cpp/)を参照してください。）

**次に**、reCameraとXIAOが通信するには、同じ2.4GHzローカルエリアネットワーク（LAN）上にある必要があります。reCameraには内蔵ワイヤレスネットワークカードがあり、WiFiに接続できます。通常、カメラの[Node-RED web](http://192.168.42.1/#/workspace)を通じてWiFiに接続できます。ただし、カスタムC++プロジェクトを実行する場合は、Node-REDを無効にしてreCameraを再起動する必要があります。（参考：[Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/real_time_yolo_object_detection_using_recamera_based_on_cpp/)）。そのため、Linuxターミナル経由でWiFi接続を確立する必要があります。

```
cd /etc/
ls
```

**wpa_supplicant.conf** を確認できます：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/2.png" /></div>
左側のファイルディレクトリでも確認できます：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/3.png" /></div>

ファイルをデスクトップにドラッグし、メモ帳で開きます。画像に示すようにネットワークを追加し、あなたのSSIDとパスワードに変更してください。
**注意**：等号の両側に余分なスペースを含めないでください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/4.png" /></div>

reCameraターミナルの /etc/ にある元のファイルを削除します。

```
sudo rm wpa_supplicant.conf
```

PCのwindows powershellを開き、ファイルをreCamera端末の**/home/recamera/**にコピーしてください：

```
scp "C:\Users\{your username}\Desktop\wpa_supplicant.conf" recamera@192.168.42.1:/home/recamera
```

ファイルを **/home/recamera/** から **/etc/** にコピーします：

```
sudo scp wpa_supplicant.conf /etc/
```

reCamera を再起動してください。その後、プログラムを実行してください。

```
sudo ./Supervisor_add_detection_http
```

reCamera が WiFi ネットワークに接続されていることを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/5.png" /></div>

### XIAO

#### ネットワーク接続と HTTP リクエストの送信

XIAO（ESP32-C3）にプログラムを書き込むために、[Arduino](https://www.arduino.cc/en/software) をダウンロードする必要があります。

**ステップ 1.** お使いのオペレーティングシステムに応じて、[Arduino IDE](https://www.arduino.cc/en/software/) の最新バージョンをダウンロードしてインストールしてください。Arduino アプリケーションを起動します。

**ステップ 2.** Arduino IDE に ESP32 ボードパッケージを追加します
**File > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力してください：
**https://jihulab.com/esp-mirror/espressif/arduino-esp32.git**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/6.png" /></div>

**Tools > Board > Boards Manager...** に移動し、検索ボックスにキーワード "**esp32**" を入力し、**esp32** の最新バージョンを選択してインストールしてください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/12.png" /></div>

**ステップ 3.** ボードとポートを選択します

**ボード**
**Tools > Board > ESP32 Arduino** に移動し、"**XIAO_ESP32C3**" を選択してください。ボードのリストは少し長いので、下までスクロールする必要があります。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/13.png" /></div>

**ポート**
**Tools > Port** に移動し、接続された XIAO ESP32C3 のシリアルポート名を選択してください。これは COM3 以上である可能性が高いです（**COM1** と **COM2** は通常ハードウェアシリアルポート用に予約されています）。

**ステップ 4.** 以下のプログラムを記述し、アップロードボタンをクリックしてコンパイルとアップロードを行ってください。reCamera と XIAO が通信するためには、同じ 2.4GHz ローカルエリアネットワーク（LAN）上にある必要があります。

```
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN        A0 // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 60 // Popular NeoPixel ring size
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500

const char* ssid = {"your wifi name"};     
const char* password = {"your wifi password"}; 
const char* apiUrl = "http://{"your wifi ip"}/modeldetector";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
  #endif
  // END of Trinket-specific code.

  pixels.begin();
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(apiUrl); 
    http.addHeader("Content-Type", "application/json"); 


    int httpCode = http.GET();
    if (httpCode > 0) {
      String payload = http.getString(); 
      Serial.println("HTTP Response:");
      // Serial.println(payload); 

      DynamicJsonDocument doc(1024); 
      DeserializationError error = deserializeJson(doc, payload);
      if (error) {
        Serial.print("JSON read failed: ");
        Serial.println(error.c_str());
      } 
      else {
      Serial.print("Code:  ");
      Serial.println(doc["Code"].as<String>());      
      Serial.print("Msg:  ");
      Serial.println(doc["Msg"].as<String>());
      Serial.print("Target:  ");
      Serial.println(doc["Target"].as<String>());
      Serial.print("Score:  ");
      Serial.println(doc["Score"].as<String>());
      Serial.print("Release_duration:  ");
      Serial.print(doc["Release_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Capture_duration:  ");
      Serial.print(doc["Capture_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Image_preprocessing_duration:  ");
      Serial.print(doc["Image_preprocessing_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Detection_duration:  ");
      Serial.print(doc["Detection_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Total Duration:  ");
      Serial.print(doc["Duration"].as<String>());
      Serial.println("ms");


      if (doc["Target"].as<String>().indexOf("person") != -1){
          pixels.clear();
          pixels.show();
          int smileyLEDs[] = {21,26,29,32,35,39};
          int numLEDs = sizeof(smileyLEDs) / sizeof(smileyLEDs[0]);

          for (int i = 0; i < numLEDs; i++) {
              pixels.setPixelColor(smileyLEDs[i], pixels.Color(2, 2, 0)); // yellow
          }
          pixels.show();

          printf("Target contains 'person'\n");
        } else {
            pixels.clear();
            pixels.show();
            printf("Target does not contain 'person'\n");
        }
    }


    } else {
      pixels.clear();
      pixels.show();
      Serial.print("HTTP get failed: ");
      Serial.println(httpCode);
    }
    http.end(); 
  } else {
    pixels.clear();
    pixels.show();
    Serial.println("WiFi disconnected");
  }

  delay(5000);
}


```

**注意**: WiFi名（SSID）、パスワード、およびreCamera wlan0 IPアドレスを自分のものに変更してください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/7.png" /></div>

アップロードが完了するまで待つと、**シリアルモニター**でXIAOがWiFiに正常に接続されたことを確認できます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/9.png" /></div>

## 実行

reCameraがSupervisorプロジェクトを実行しており、WiFiに正常に接続されていることを確認してください。

```
sudo ./Supervisor_add_detection_http
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/10.png" /></div>

XIAOの**シリアルモニター**でHTTPサービスのJson結果を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/11.png" /></div>

人がカメラに向かうと、XIAOが笑顔を表示し、自分でDIYできるスマイリーカメラを実現します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/14.png" /></div>

詳細については、[GitHubリポジトリ](https://github.com/Seeed-Studio/OSHW-reCamera-Series)をご参照ください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
