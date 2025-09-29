---
description: Camera_Shield
title: Camera Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Camera_Shield
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield.jpg" alt="pir" width={600} height="auto" /></p>

Camera Shieldは写真撮影をサポートする初のシールドボードであり、**VC0706 + OV7725**のソリューションに基づいています。VC0706は高性能なカメラプロセッサで、強化された画像処理機能を備え、ハードウェアJPEGコーデックを内蔵しています。一方、OV7725は小型パッケージに収められた高性能な1/4インチ単一チップVGAカメラおよび画像プロセッサです。私たちはCamera ShieldをUART/SPI経由で制御するためのライブラリを作成しており、Arduinoボードを使用して簡単に写真を撮ることが可能です。さあ、これを使って写真を撮りましょう！

## 仕様

---

* ArduinoまたはSeeeduinoと完全互換

* 静止画解像度: (640x480) JPEG出力

* 高速シリアルバス制御: UART/SPI

* 統合されたMicroSDカードインターフェース

* 電源供給: 5 V

## ハードウェアインターフェース

---
Camera ShieldはSPIまたはUARTインターフェースを介して制御できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface2.png" alt="pir" width={600} height="auto" /></p>

## 初めての使用方法

---
以下はCamera Shieldの使用方法の簡単な紹介です。

1. [Camera Shieldライブラリ](https://github.com/Seeed-Studio/Camera_Shield_VC0706)ファイルをGitHubからダウンロードし、Arduinoのライブラリフォルダにライブラリファイルを展開します。

2. libraries/Camera_Shield_VC0706フォルダ内のexampleフォルダを開き、snapshot例のスケッチを見つけます。snapshot.inoファイルをダブルクリックしてArduino IDEで開きます。

3. ライブラリを整理して、Software Serial/Hardware Serial/SPIを介してCamera Shieldを制御できるようにしました。コードを変更することで選択できます。

```cpp
#include "SoftwareSerial.h"
#include <VC0706_UART.h>
#include <SD.h>
#include <SPI.h>
#define SS_SD  10

//ソフトウェアシリアルを使用
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
//ハードウェアシリアルを使用
//VC0706 cam = VC0706(&Serial1);

void setup()
{
    Serial.begin(9600);
    Serial.println("VC0706 Camera Snapshot Test ...");

    if (!SD.begin(SS_SD)) {
        Serial.println("SD Card init failed...");
        return;
    }
    if(true == cameraInit()){
        snapShot();
    }else{
        Serial.println("camera init error...");
    }
}

void loop()
{
    //何もすることはありません
}

bool cameraInit()
{
    cam.begin(BaudRate_19200);
    char *reply = cam.getVersion();
    if (reply == 0) {
        Serial.println("Failed to get version");
        return false;
    } else {
        Serial.println("version:");
        Serial.println("-----------------");
        Serial.println(reply);
        Serial.println("-----------------");
        return true;
    }
}

void snapShot()
{
    Serial.println("Snap in 3 secs...");
    delay(3000);
    if (! cam.takePicture()){
        Serial.println("Failed to snap!");
    }else {
        Serial.println("Picture taken!");
    }
    // IMAGExx.JPGという名前の画像を作成
    char filename[13];
    strcpy(filename, "IMAGE00.JPG");
    for (int i = 0; i < 100; i++) {
        filename[5] = '0' + i/10;
        filename[6] = '0' + i%10;
        // 存在しない場合は作成、既存のものは開かず、書き込み、書き込み後に同期
        if (! SD.exists(filename)) {
            break;
        }
    }
    // 書き込み用にファイルを開く
    File imgFile = SD.open(filename, FILE_WRITE);
    Serial.print("create ");
    Serial.println(filename);
    uint16_t jpglen = cam.getFrameLength();
    Serial.print("wait to fetch ");
    Serial.print(jpglen, DEC);
    Serial.println(" byte image ...");
    int32_t time = millis();
    cam.getPicture(jpglen);
    uint8_t *buffer;
    while(jpglen != 0){
        uint8_t bytesToRead = min(32, jpglen);
        buffer = cam.readPicture(bytesToRead);
        imgFile.write(buffer, bytesToRead);
        //Serial.print("Read ");  Serial.print(bytesToRead, DEC); Serial.println(" bytes");
        jpglen -= bytesToRead;
    }
    imgFile.close();
    time = millis() - time;
    Serial.println("Done!");
    Serial.print("Took "); Serial.print(time); Serial.println(" ms");
    cam.resumeVideo();
}
```

**Hardware SerialまたはSoftware Serialを使用した通信**

Camera Shieldとの通信にはSerial(Software SerialまたはHardware Serial)を使用します。以下のようにアプリケーションを生成できます。

```cpp
//ソフトウェアシリアルを使用
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
```

または、ハードウェアシリアルを使用したい場合は以下のようにします。

```cpp
//ハードウェアシリアルを使用
VC0706 cam = VC0706(&Serial1);
```

デフォルトではソフトウェアシリアルを使用します。ハードウェアシリアルを選択する場合は、VC0706_UARTヘッダーファイルのコードを変更する必要があります。以下を変更します。

```cpp
#define USE_SOFTWARE_SERIAL         1
```

次のように変更します。

```cpp
#define USE_SOFTWARE_SERIAL         0
```

**UARTまたはSPIを使用したデータ送信**

通常、以下の手順で写真を撮ることができます。

```cpp
cam.takePicture();
uint16_t jpglen = cam.getFrameLength();
cam.getPicture(jpglen);
buffer = cam.readPicture(bytesToRead);
```

そして、データを以下の2つのモードで読み取ることができます。

* 1. UART —— 遅いモード。Software Serialは9600/19200ボーレートのみをサポートします。Hardware Serialは115200/38400/19200/9600を使用できます。UARTモードを選択し、19200ボーレートの場合、写真を取得するのに約30秒かかります。
* 2. SPI —— 高速モード。全体の写真を取得するのに約1秒から2秒しかかかりません。

VC0706_UARTヘッダーファイルでモードを選択できます。デフォルトではSPIモードを使用します。

```cpp
#define TRANSFER_BY_SPI             1
```

これを以下のように変更してUARTモードを使用します。

```cpp
#define TRANSFER_BY_SPI             0
```

4. カメラシールドをArduinoに積み重ね、カメラシールドにmicro-SDカードを挿入します。この際、コード内で定義したシリアルジャンパーに注意してください。

5. スケッチをコンパイルしてArduinoボードにアップロードします。Arduino IDEのシリアルポートを開くと、シリアルポートから表示されるデバッグ情報を見ることができます。また、データ転送中はSDカードのステータスLEDが素早く点滅します。

6. プログラムが終了したら、SDカードを取り出してコンピュータに挿入します。写真を見ることができます。楽しんでください！

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [GitHub上のカメラシールドライブラリ](https://github.com/Seeed-Studio/Camera_Shield_VC0706)

* [カメラシールドの回路図](https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>