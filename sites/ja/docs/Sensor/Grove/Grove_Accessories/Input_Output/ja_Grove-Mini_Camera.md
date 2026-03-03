---
title: Grove - Mini Camera
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Mini_Camera/
slug: /ja/Grove-Mini_Camera
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Grove_camera.jpg)

小型カメラを探しているなら、Grove-Mini Cameraが最適な選択肢かもしれません。これはArduinoで制御可能なミニカメラです。1280\*720のJPEG画像を生成するための画像処理が統合されています。撮影した写真はSDカードに保存され、Mini 8Pin USBインターフェースを介してSDカード情報を読み取ることができます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Mini-Camera-p-1578.html)

特徴
-------

- 標準USBインターフェースとGroveインターフェース
- 高解像度
- 小型で軽量

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

仕様
-------------

| 項目                         | 性能パラメータ         |
|------------------------------|-----------------------|
| CPU                          | ARM9                  |
| ビデオデコード               | H.263アクセラレーション |
| ビデオフォーマット           | AVI                   |
| ビデオエンコード             | MPEG4                 |
| ビデオ解像度                 | 640\*480              |
| ビデオフレームレート         | 30FPS                 |
| 実行ソフトウェア             | AVIプレーヤー対応      |
| 写真フォーマット             | JPEG                  |
| 画像解像度                   | 1280\*720             |
| 充電モード                   | DC5V                  |
| データ通信インターフェース   | Mini 8Pin USB         |
| ストレージ媒体               | Micro SD (最大32G)    |

デモンストレーション
-------------

一般的なカメラとは異なり、Grove - Mini CameraはArduino/Seeeduinoで制御可能です。

ここでは、Grove - Mini Cameraを使用して、誰かが近づくたびに写真を撮影する機能を実現します。

この機能を実現するには、一定範囲内の動きを検知できる**Grove - PIR Motion Sensor**が必要です。

以下の手順で作業を開始します：

- SDカードをSDカードソケットに挿入します。このGroveにはSDカードは含まれておらず、サイズは32G以下でなければなりません。
- Grove - Mini Cameraを**Grove - Base Shield**のD2ポートに接続し、Grove - PIR Motion SensorをD5ポートに接続します。
- Grove - Base ShieldをArduino/Seeeduinoに差し込み、USBケーブルを使用してArduino/SeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Connecting_Picture.JPG)

- Arduino IDEを開き、以下のコードを新しいスケッチにコピー＆ペーストします：

```
    /* デジタル2を使用してカメラを制御 */
    /* デジタル5を使用してセンサー信号を受信 */
    #define KEY 2
    #define PIR_MOTION_SENSOR 5  
     
    void setup()
    { 
      Serial.begin(9600);
      pinMode(KEY,OUTPUT);
      pinMode(PIR_MOTION_SENSOR,INPUT);
      delay(100);
      enterStandbyMode();
      makeVideo(5000);

    }
    void loop()
    {
        int sensorValue = digitalRead(PIR_MOTION_SENSOR);
        if(sensorValue == HIGH)  //センサー値がHIGHの場合、誰かがここにいる
        {
           takePicture();
               delay(5000);      
        }
    }
    void takePicture(void)
    {
       digitalWrite(KEY,HIGH);
       delay(1000);
       digitalWrite(KEY,LOW);
       delay(1000);
    }
    void enterStandbyMode(void)
    {
      //キーを2秒間HIGHレベルに設定してスタンバイ状態に入る  
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
    void makeVideo(long int videoTime)
    {
      //キーを再び2秒間HIGHレベルに設定して、スタンバイ状態からビデオ状態に移行
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(videoTime); //videoTimeの間ビデオを作成します。単位はmsです。  
     //ビデオを停止
      digitalWrite(KEY,HIGH);
      delay(1000);
      digitalWrite(KEY,LOW);
      delay(1000);
    }
    void PoweroffMode(void)
    {
      //キーを5秒間HIGHレベルに設定して電源オフ状態に入る  
      digitalWrite(KEY,HIGH);
      delay(5000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
```

- コードをアップロードします。
- Setup()内で関数を一度呼び出すため、SDカードにはビデオが保存されているはずです。ビデオを再生するには、カメラをUSBケーブルでPCに直接接続するか、リーダーを使用して読み取ります。また、動作中に誰かが近づいた場合、SDカードには写真も保存されているはずです。

参考情報
---------

以下はこのミニカメラの状態説明です。動作状態は5つあります。

**1. スタンバイ：** 電源オフ状態でキーを2秒間HIGHレベルに設定すると、赤色LEDが点灯し、ミニカメラがスタンバイ状態に入ります。

**2. 電源オフ：** キーを5秒間HIGHレベルに設定すると、カメラが電源オフ状態に入り、赤色LEDが消灯します。

**3. 写真撮影：** 電源オン状態でキーを約1000ms間HIGHレベルに設定すると、カメラが写真を撮影します。赤色LEDが一度点滅して写真が撮影されたことを知らせます。その後、自動的にスタンバイ状態に戻ります。

**4. ビデオ：** スタンバイ状態でキーを2秒間HIGHレベルに設定すると、カメラがビデオ状態に入り、赤色LEDが連続して点滅します。停止するには、キーを約1000ms間HIGHレベルに設定すると、カメラがスタンバイ状態に戻ります。

**5. ファイル保存：** USBケーブルを使用してカメラをPCに接続すると、画像ファイルやビデオファイルを開くことができます。また、SDカードリーダーを使用してSDカード内のファイルにアクセスすることも可能です。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Mini Camera Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Mini_Camera から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>