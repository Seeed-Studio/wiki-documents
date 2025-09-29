---
title: Grove - TF Mini LiDAR
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-TF_Mini_LiDAR/
slug: /ja/Grove-TF_Mini_LiDAR
last_update:
  date: 05/15/2025
  author: gunengyu
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR.JPG" alt="pir" width={600} height="auto" /></p>

この製品はToF（Time of Flight）原理に基づいており、独自の光学設計と電気設計を統合することで、安定性、精度、高感度、高速の距離検出を実現しています。

ToFはTime of Flight技術の略で、その動作原理は以下の通りです。センサーから変調された近赤外線が送信され、物体によって反射されます。光の送信と反射の間の時間差または位相差を計算することで、センサーは撮影対象物までの距離を変換し、深度情報を生成します。

[![今すぐ購入](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)

:::warning
    レンズにほこりやその他の異物が入らないようにしてください。光の透過に影響を与える可能性があります。
:::

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-TF Mini LiDAR V1.0 | 初版 | 2017年11月      |

## 仕様

---
| 製品名                              | TFmini                           |
|---------------------------------------------|----------------------------------|
| 動作範囲                             | 0.3m-12m                         |
| 10%反射率での最大動作範囲 | 5m                               |
| 平均消費電力                   | 0.6W                            |
| 適用電圧範囲                    | 4.5V-6V                          |
| 受光角度                            | 2.3°                             |
| 最小分解能                    | 1cm                              |
| 周波数                                   | 100Hz                            |
| 精度                                    | 1%（6m未満）、2%（6m-12m） |
| 距離検出単位                     | cm                               |
| 波長                                  | 850nm                            |
| サイズ                                        | 42mm×15mm×16mm                   |
| 動作温度                       | -20℃-60℃                       |
| 光感度                           | 70,000lux                        |
| 重量                                      | 4.7g                             |
| 通信インターフェース                     | UART 115200                      |
| LEDピーク電流                            | 800ma                            |
| シリアルポートTTL電圧レベル               | 3.3V                              |
| 電磁適合性(EMC)          | EN 55032 Class B                  |

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

---

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1**. 以下のアイテムを準備してください:

|Seeeduino V4.2| Base Shield|Grove-TF Mini LiDAR|
|--------------|------------|-----------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR_S.JPG)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR.html)|

- **ステップ 2**. Grove-TF-Mini-LiDARをBase Shieldの**D2**ポートに接続し、SeeeduinoをUSBケーブルを介してPCに接続します。

- **ステップ 3**. [デモコード](https://github.com/Seeed-Studio/Seeed_Arduino_TFlidar/archive/master.zip)をダウンロードし、**Seeed_Arduino_TFlidar**ファイル全体をArduino IDEのライブラリファイルにコピーして貼り付けます。

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/hardware_connection2.jpg)

#### ソフトウェア

- **ステップ 1**. Grove-TF Mini LiDARは16進数の出力データです。各フレームデータは9バイトでエンコードされており、1つの距離データ（Dist）が含まれています。各距離データには対応する信号強度情報（Strength）があります。フレームの終わりはデータのパリティビットです。

| バイト  | データエンコードの解釈                |
|-------|---------------------------------------------|
| Byte1 | 0x59, フレームヘッダー、すべてのフレームで同じ |
| Byte2 | 0x59, フレームヘッダー、すべてのフレームで同じ |
| Byte3 | Dist_L 距離値の下位8ビット。       |
| Byte4 | Dist_H 距離値の上位8ビット。      |
| Byte5 | Strength_L の下位8ビット。                  |
| Byte6 | Strength_H の上位8ビット。                  |
| Byte7 | 統合時間。                           |
| Byte8 | 予約バイト。                             |
| Byte9 | チェックサムパリティ。                             |

- **ステップ 2**. 以下のコードをArduino IDEにコピーしてアップロードします。

```cpp
#include "TFLidar.h"

#define USETFMINI
// #define USETFLUNA

#define SERIAL Serial

#if defined(SEEED_XIAO_M0)
    #define uart  Serial1
#elif defined(SEEED_WIO_TERMINAL)
    #define uart  Serial1
#else
    SoftwareSerial uart(2, 3);
#endif

#ifdef USETFLUNA
TFLuna SeeedTFLuna;
TFLidar SeeedTFLidar(&SeeedTFLuna);
#endif

#ifdef USETFMINI
TFMini SeeedTFMini;
TFLidar SeeedTFLidar(&SeeedTFMini);
#endif 


void setup() {
  // 初期設定コード
  SERIAL.begin(9600);
  while(!Serial);
  SeeedTFLidar.begin(&uart,115200);
}

void loop() {
  while(!SeeedTFLidar.get_frame_data()){
    delay(1); 
  }
  // メインコード
  SERIAL.print("dist = ");
  SERIAL.print(SeeedTFLidar.get_distance()); // LiDARの測定距離値を出力
  SERIAL.print('\t');
  SERIAL.print("strength = ");
  SERIAL.print(SeeedTFLidar.get_strength()); // 信号強度値を出力
#ifdef USETFLUNA
  SERIAL.print("\t Chip Temprature = ");
  SERIAL.print(SeeedTFLidar.get_chip_temperature());
  SERIAL.print(" celcius degree"); // LiDARのチップ温度を出力
#endif
  SERIAL.println(" ");
  // delay(1000);
}
```

- **ステップ 3**. ターミナルに距離が表示されます。**青い曲線**が距離を示し、**赤**が信号強度を示します。

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/curve.png)

:::note
      デモコードで**距離**のみが必要な場合は、**41行目**から**43行目**を削除することができます:
:::

```cpp
SERIAL.print("strength = ");
SERIAL.print(SeeedTFLidar.get_strength()); // 信号強度値を出力
```

### Wio Terminalで遊ぶ

#### ハードウェア

| Wio Terminal |  Grove-TF-Mini-LiDAR | ジャンパー |
|--------------|-----------------|----------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR_S.JPG)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Jumper.png)|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)|[今すぐ購入](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)|

#### ハードウェア接続

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/hardware_connection.jpg)

#### ピン配置

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/pinout_wio.png" alt="Grove-TF_Mini_LiDARのピン配置" title="デモ" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

:::tip
     Wio Terminalとジャンパーを接続する前に、上記のピン配置説明を参照してください。
:::

**ステップ 1** Grove-TF-Mini-LiDARをジャンパーを介してWio Terminalに接続し、Wio TerminalをUSBケーブルを介してPCに接続します。

**ステップ 2** [デモコード](https://github.com/Seeed-Studio/Seeed_Arduino_Linechart/archive/master.zip)をダウンロードし、**Seeed_Arduino_Linechart**ファイル全体をArduino IDEのライブラリファイルにコピーして貼り付けます。

**ステップ 3** デモコードをArduino IDEにコピーします。

#### ソフトウェア

```cpp
#include"seeed_line_chart.h" // ライブラリをインクルード
#include "TFLidar.h"
#define LINE_DIS 0X00
#define STRING_DIS 0X01
TFMini SeeedTFMini;
TFLidar SeeedTFLidar(&SeeedTFMini);
#define uart  Serial1

TFT_eSPI tft;
 
#define max_size 10 // データの最大サイズ
doubles data; // データを格納するためのdoubles型を初期化
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト 
 
void setup() {
    Serial.begin(115200);
    pinMode(WIO_KEY_C, INPUT_PULLUP);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    SeeedTFLidar.begin(&uart,115200);
}
uint8_t mode = LINE_DIS;
void loop() {
    
    if (digitalRead(WIO_KEY_C) == LOW) {
        mode ++;
        if(mode > STRING_DIS ) mode = LINE_DIS;
        while(!digitalRead(WIO_KEY_C));
    }
    display(get_Lidar_data(),mode);
    delay(50);
}

uint16_t get_Lidar_data()
{
    while(!SeeedTFLidar.get_frame_data()){
        delay(1); 
    }
    return SeeedTFLidar.get_distance();
}

void display(uint16_t lidar_data,uint8_t mode){

    spr.fillSprite(TFT_WHITE);
    // ライングラフタイトルの設定
    auto header =  text(0, 0)
                .value("Lidar Terminal")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .color(green)
                .thickness(3);
    header.height(header.font_height() * 2);
    header.draw(); // ヘッダーの高さはフォントの高さの2倍
    if (LINE_DIS == mode){
        if (data.size() == max_size) {
            data.pop();// 最初の読み取り変数を削除
        }
        data.push(lidar_data); // 変数を読み取りデータに格納
    // ライングラフの設定
        auto content = line_chart(10, header.height()); //(x,y) ライングラフの開始位置
            content
                    .height(tft.height() - header.height() * 1.5) // ラインチャートの実際の高さ
                    .width(tft.width() - content.x() * 2) // ラインチャートの実際の幅
                    .based_on(0.0) // y軸の開始点、float型で指定
                    .show_circle(false) // 各ポイントに円を描画、デフォルトはオン
                    .value(data) // データをラインチャートに渡す
                    .color(TFT_RED) // ラインの色を設定
                    .draw();
    }
    else if (STRING_DIS == mode){
        for(int8_t line_index = 0;line_index < 5 ; line_index++)
        {
            spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
        }        
        auto header =  text(0, 0)
                    .thickness(1);
        spr.setFreeFont(&FreeSansBoldOblique24pt7b); 
        spr.setTextColor(TFT_BLUE);
        spr.drawFloat(lidar_data / 100.00,2,80,110);
        spr.drawString(" M",80 + 90,110,1);

    }
    spr.pushSprite(0, 0);

}
```

:::success
     すべてが正常に動作している場合、以下のような画像が Wio Terminal の画面に表示されます。
:::

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Outcome_wio.jpg)

## リソース

---

- **[データシート]** [Grove-TF-Mini-LiDAR
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/SJ-PM-TF-Luna-A03-Product-Manual.pdf)
- **[データシート]** [Grove-TF-Luna-LiDAR
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/DE-LiDAR%20TFmini%20Datasheet-V1.7-EN.pdf)
- **[ZIP]** [Seeed_Arduino_TFlidar](https://github.com/Seeed-Studio/Seeed_Arduino_TFlidar/archive/master.zip)
- **[ZIP]** [Seeed_Arduino_Linechart](https://github.com/Seeed-Studio/Seeed_Arduino_Linechart/archive/master.zip)

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