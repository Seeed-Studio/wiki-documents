---
description: Grove Vision AI Module
title: Grove Vision AI Module
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100-Vision-AI-Module-Grove-LoRa-E5
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Grove Vision AI モジュール

このセクションでは、センサーの動作方法、Wio Terminalを使用してセンサーデータを取得する方法、Wio TerminalとGrove - Wio-E5を使用してデータを送信する方法について詳しく説明します。

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66のハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

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

## センサーの動作原理

デバイスのライブカメラを使用して、機械学習を利用して環境内のオブジェクトを検出することができます。

カメラのライブフィードを使用して、物理的な世界のオブジェクトを識別できます。ML KitのObject Detection & Tracking APIの「ストリーミング」モードを使用すると、カメラフィードがオブジェクトを検出し、それを入力として使用して、アプリ独自の画像分類モデル（現在開発中）でビジュアル検索（画像を入力として使用する検索クエリ）を実行できます。

ライブカメラを使用した検索は、犬や猫など、周囲のオブジェクトについてユーザーがより多くの情報を学ぶのに役立ちます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg" /></div>

Vision AI Moduleの使用に関する詳細情報は[こちら](https://wiki.seeedstudio.com/ja/Grove-Vision-AI-Module/)を参照してください。

独自にモデルをトレーニングしたい場合は、[こちら](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model/)の内容を参照してください。

## 必要な材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove Vision AI Module</td>
    </tr>
  </tbody></table>

## 事前準備

### 接続

この手順では、Grove - Wio-E5を使用して近くのLoRa®ゲートウェイに接続する必要があります。右側のWio TerminalのGroveポートをソフトシリアルポートとして構成し、ATコマンドを受信します。以下の図に従って、Vision AI Module（左側）を接続します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/aivision.jpg" /></div>

### ソフトウェア準備

**ステップ 1.** Arduinoソフトウェアをインストールします。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**ステップ 2.** Arduinoアプリケーションを起動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ 3.** Arduino IDEにWio Terminalを追加します。

Arduino IDEを開き、`File > Preferences`をクリックし、以下のURLを「Additional Boards Manager URLs」にコピーします：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

`Tools > Board > Board Manager`をクリックし、Boards Managerで**Wio Terminal**を検索します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**ステップ 4.** ボードとポートを選択します

`Tools > Board`メニューで、Arduinoに対応するエントリを選択します。**Wio Terminal**を選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

`Tools -> Port`メニューからWio Terminalボードのシリアルデバイスを選択します。これは通常、COM3以上（COM1およびCOM2は通常ハードウェアシリアルポートに予約されています）です。確認するには、Wio Terminalボードを切断してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択します。

:::tip
Macユーザーの場合、`/dev/cu.usbmodem141401`のようなものになります。

スケッチをアップロードできない場合、主にArduino IDEがWio Terminalをブートローダーモードにできなかったことが原因です（MCUが停止しているか、プログラムがUSBを処理しているため）。回避策として、Wio Terminalを手動でブートローダーモードにする必要があります。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**ステップ 5.** Grove - Wio-E5ライブラリをダウンロードします

[Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードします。

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ 6.** Arduino IDEにライブラリを追加します

次に、3軸デジタル加速度計ライブラリをArduino IDEにインストールします。Arduino IDEを開き、`sketch -> Include Library -> Add .ZIP Library`をクリックし、先ほどダウンロードした`Disk91_LoRaE5`ファイルを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Grove Vision AI モジュールの値を取得する

**ステップ 1.** Grove Vision AI モジュールコードライブラリをダウンロード

[Seeed-Grove-Vision-AI-Moudle](https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードしてください。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ 2.** Arduino IDE にライブラリを追加

次に、Vision AI モジュールライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ -> ライブラリをインクルード -> .ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed-Grove-Vision-AI-Moudle` ファイルを選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**ステップ 3.** Grove Vision AI モジュールデータを取得

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

このリポジトリを使用すると、カメラフィードによって識別されたモデルの数と信頼度を取得できます。これらは 8 ビット以下の符号なし整数データです。

```cpp
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;
void setup()
{
  Wire.begin();
  Serial.begin(115200);
  
  Serial.println("開始");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // オブジェクト検出と事前学習済みモデル1
  {
    Serial.print("バージョン: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("アルゴリズム: ");
    Serial.println( ai.algo());
    Serial.print("モデル: ");
    Serial.println(ai.model());
    Serial.print("信頼度: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("アルゴリズムの開始に失敗しました。");
  }
}

void loop()
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // 呼び出しを開始
    {
      while (1) // 呼び出しが終了するまで待機
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }

     uint8_t len = ai.get_result_len(); // 検出された人数を取得
     if(len)
     {
       int time1 = millis() - tick; 
       Serial.print("処理時間: ");
       Serial.println(time1);
       Serial.print("人数: ");
       Serial.println(len);
       object_detection_t data;       // データを取得

       for (int i = 0; i < len; i++)
       {
          Serial.println("結果: 検出されました");
          Serial.print("検出と計算中: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); // 結果を取得
  
          Serial.print("信頼度:");
          Serial.print(data.confidence);
          Serial.println();
        }
     }
     else
     {
       Serial.println("識別なし");
     }
    }
    else
    {
      delay(1000);
      Serial.println("呼び出しに失敗しました。");
    }
  }
  else
  {
    state == 0;
  }
}
```

Arduino IDE のシリアルモニタを開き、ボーレートを 115200 に設定して結果を観察してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/198.png" /></div>

## Grove - Wio-E5 を介してデータを送信する

Grove - Wio-E5 の以前のコードを組み合わせて、LoRa® ネットワークに接続します。AT コマンドを使用することで、Grove Vision AI モジュールの値を LoRa® ネットワークに送信することが可能です。

前節のコードでは、出力として検出されたオブジェクトの数と信頼度が正の整数であり、どちらも 8 ビットを超えないことがわかっています。

この方法により、AT コマンドを介して送信するデータの内容、サイズ、および形式を決定します。十分な大きさの配列を設定し、送信する必要のある文字列を配列に格納し、最後に **send_sync()** 関数を使用して配列を送信することができます。

上記のアイデアの擬似コードはおおよそ次のようになります。

```c
  ......
  static uint8_t data_val[4] = { 0x00 };  // data[] を使用してセンサーの値を格納
  
  if (state == 1)
  {
    if (ai.invoke()) // 実行開始
    {
      while (1) // 実行完了を待機
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
      uint8_t len = ai.get_result_len(); // 検出された人数を取得
      if(len)
      {
        Serial.print("Number of people: "); Serial.println(len);
        object_detection_t data;       // データを取得
    
        for (int i = 0; i < len; i++)
        {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); // 結果を取得
    
          Serial.print("confidence:"); Serial.println(data.confidence);

          data_decord(len, data.confidence, data_val);
          
          if ( lorae5.send_sync(              // センサー値を送信
                8,                            // LoRaWan ポート
                data_val,                     // データ配列
                sizeof(data_val),             // データサイズ
                false,                        // ACK を期待しない
                7,                            // スプレッドファクタ
                14                            // 送信出力 (dBm)
               ) 
          )
          ......
```

次に行う必要があるのは、`begin()` 関数を使用して Grove - Wio-E5 を初期化し、`setup()` 関数を使用して Grove - Wio-E5 のトリプレット情報を設定することです。`send_sync()` 関数を使用してデータメッセージを送信するとき、同時に LoRaWAN® に参加を試みます。一度成功すると、データが送信され、信号強度やアドレスなどの情報が返されます。

完全なコード例は [こちら](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data) で確認できます。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
現時点でコードをアップロードして結果を確認することはお勧めしません。なぜなら、この時点ではまだ Helium/TTN の設定が完了しておらず、「Join failed」という結果が得られるためです。このコードをアップロードするのは、[Connecting to Helium](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/) または [Connecting to TTN](https://wiki.seeedstudio.com/ja/Connecting-to-TTN/) の章を完了し、完全なデータ送信プロセスを完了した後にしてください。
:::

Grove Vision AI モジュールの動作とデータ形式を体験し理解したら、次のステップである LoRaWAN® への参加に進んでください。

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Helium セクション</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium の紹介</strong><br /><br />この章では、Helium コンソールの操作方法を紹介し、Helium コンソールの第一印象を得ることができます。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Helium-Introduction">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium に接続する</strong><br /><br />このセクションでは、センサーデータを Helium に正常にアップロードして表示できるようにするための Helium の設定方法について説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-Helium">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>TTN セクション</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN の紹介</strong><br /><br />この章では、TTN コンソールの操作方法を紹介し、TTN コンソールの第一印象を得ることができます。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/TTN-Introduction">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN に接続する</strong><br /><br />このセクションでは、センサーデータを TTN に正常にアップロードして表示できるようにするための TTN の設定方法について説明します。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-TTN">章にジャンプ &gt;</a></td>
    </tr>
  </tbody></table>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® マークは Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は LoRa Alliance® からのライセンスに基づいて使用されるマークです。