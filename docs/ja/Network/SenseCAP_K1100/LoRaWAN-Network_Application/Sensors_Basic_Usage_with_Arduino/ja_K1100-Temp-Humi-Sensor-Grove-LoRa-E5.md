---
description: Grove Temp&Humi Sensor (SHT40)
title: Grove Temp&Humi Sensor (SHT40)
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100-Temp-Humi-Sensor-Grove-LoRa-E5
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Grove 温湿度センサー (SHT40)

このセクションでは、センサーの動作原理、Wio Terminal を使用してセンサーデータを取得する方法、そして Wio Terminal と Grove - Wio-E5 を使用してデータを送信する方法について詳しく説明します。

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetooth設定、世界的なLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1の気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

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

SHT40の温度は熱電対方式を使用して測定されます。熱電対は異なる材料の2種類の金属線で構成されています。2本の線の一端を溶接して作業端を形成し、測定する温度に配置します。もう一端は自由端と呼ばれ、メインコントロールに接続して閉ループを形成します。作業端と自由端の温度が異なる場合、ループ内に熱電位が発生し、この電圧の変化が回路の変換を通じてSCMに送られ、機械が認識可能な信号に変換されます。

SHT40の湿度は、2つの導電性電極に堆積されたポリアミンまたは酢酸ポリマー膜（高度に分画された化合物）を使用して測定されます。この膜が水を吸収または失うと、2つの電極間の誘電率が変化し、それによりコンデンサ容量が変化します。この容量の変化は外部測定回路を使用して捕捉および変換され、最終的に出力上で簡単に識別可能な信号として表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" /></div>

Grove Temp&Humi Sensorの使用に関する詳細情報は[こちら](https://wiki.seeedstudio.com/ja/Grove-SHT4x/)を参照してください。

## 必要な材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={160} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove Temp&amp;Humi Sensor (SHT40)</td>
    </tr>
  </tbody></table>

## 事前準備

### 接続

このルーチンでは、Grove - Wio-E5を使用して近くのLoRa®ゲートウェイに接続する必要があります。右側のWio TerminalのGroveポートをソフトシリアルポートとして構成し、ATコマンドを受信します。以下の図に従って、左側にGrove Temp&Humi Sensorを接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/SHT40.jpg" /></div>

### ソフトウェア準備

**ステップ1.** Arduinoソフトウェアをインストールします。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**ステップ2.** Arduinoアプリケーションを起動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ3.** Arduino IDEにWio Terminalを追加します。

Arduino IDEを開き、`File > Preferences`をクリックし、以下のURLを追加のボードマネージャURLにコピーします：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

`Tools > Board > Board Manager`をクリックし、ボードマネージャで**Wio Terminal**を検索します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**ステップ4.** ボードとポートを選択します

Arduinoに対応するエントリを`Tools > Board`メニューで選択する必要があります。**Wio Terminal**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

`Tools -> Port`メニューからWio Terminalボードのシリアルデバイスを選択します。これは通常COM3以上（COM1およびCOM2は通常ハードウェアシリアルポートに予約されています）です。確認するには、Wio Terminalボードを切断してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択します。

:::tip
Macユーザーの場合、`/dev/cu.usbmodem141401`のようなものになります。

スケッチをアップロードできない場合、主にArduino IDEがWio Terminalをブートローダーモードにすることができなかったためです。（MCUが停止しているか、プログラムがUSBを処理している場合）対策として、Wio Terminalを手動でブートローダーモードにする必要があります。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**ステップ5.** Grove - Wio-E5ライブラリをダウンロードします

[Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ6.** Arduino IDEにライブラリを追加します

次に、3軸デジタル加速度計ライブラリをArduino IDEにインストールします。Arduino IDEを開き、`sketch -> Include Library -> Add .ZIP Library`をクリックし、先ほどダウンロードした`Disk91_LoRaE5`ファイルを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Grove Temp&Humi センサー (SHT40) の値を取得する

**ステップ 1.** Grove Temp&Humi センサーコードライブラリをダウンロード

[arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x) リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードしてください。

<div>
  <p style={{}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank" /></p><div align="center"><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

[Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core) リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードしてください。

<div>
  <p style={{}}><a href="https://github.com/Sensirion/arduino-core" target="_blank" /></p><div align="center"><a href="https://github.com/Sensirion/arduino-core" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ 2.** ライブラリを Arduino IDE に追加

次に、Grove Temp&Humi センサーライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ -> ライブラリをインクルード -> .ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `arduino-i2c-sht4x` ファイルを選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**ステップ 3.** SHT40 から温度と湿度データを取得

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SHT40-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SHT40-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

このリポジトリでは、取得した温度と湿度データを確認できます。コード内では、`measureHighPrecision()` 関数を使用して温度と湿度の情報を取得します。このデータは正の値で、浮動小数点型です。

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

Arduino IDE のシリアルモニタを開き、ボーレートを 115200 に設定して結果を観察してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" /></div>

## Grove - Wio-E5 を使用してデータを送信

前述の Grove - Wio-E5 のコードを組み合わせて、LoRa® ネットワークに接続します。AT コマンドを使用することで、Grove Temp&Humi センサーの値を LoRa® ネットワークに送信することが可能です。

前節のコードでは、温度と湿度の値は通常、2 桁の整数と小数点以下 2 桁の組み合わせであり、すべて正の浮動小数点数であることがわかります。

データ送信の制限により、送信側で浮動小数点数を整数に変換する必要があります。これにより、送信されるデータが整数であることを保証します。そのため、すべての温度と湿度の値を 100 倍します。

この方法により、AT コマンドを介して送信されるデータの内容、サイズ、形式を決定します。十分な大きさの配列を設定し、送信する必要のある文字列を配列に格納し、最後に **send_sync()** 関数を使用して配列を送信します。

上記のアイデアに基づく擬似コードは以下の通りです。

```c
  ......
  error = sht4x.measureHighPrecision(temperature, humidity);

  int_temp = temperature*100;
  int_humi = humidity*100;
  
  static uint8_t data[4] = { 0x00 };  // センサーの値を格納するための data[] を使用

  data_decord(int_temp, int_humi, data);
  
  if ( lorae5.send_sync(              // センサー値を送信
        8,                            // LoRaWan ポート
        data,                         // データ配列
        sizeof(data),                 // データのサイズ
        false,                        // ACK を期待しない
        7,                            // スプレッドファクタ
        14                            // 送信出力 (dBm)
       ) 
  )
  ......
```

残りの作業として、`begin()` 関数を使用して Grove - Wio-E5 を初期化し、`setup()` 関数を使用して Grove - Wio-E5 のトリプレット情報を設定する必要があります。`send_sync()` 関数を使用してデータメッセージを送信する際、同時に LoRaWAN® に参加を試みます。一度成功すれば、データが送信され、信号強度やアドレスなどの情報が返されます。

完全なコード例は [こちら](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data) にあります。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
この時点では、Helium/TTN の設定がまだ完了していないため、コードをアップロードして結果を確認することはお勧めしません。この段階でコードをアップロードすると、「Join failed」という結果が得られます。[Connecting to Helium](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/) または [Connecting to TTN](https://wiki.seeedstudio.com/ja/Connecting-to-TTN/) の章を完了してから、このコードをアップロードして完全なデータ送信プロセスを完了することをお勧めします。
:::

Grove Temp&Humi センサーの動作とデータ形式を体験し理解したら、次のステップである LoRaWAN® への参加に進んでください。

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Helium セクション</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium の紹介</strong><br /><br />この章では、Helium コンソールの操作について説明し、Helium コンソールの第一印象を得ることを目的としています。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Helium-Introduction">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium への接続</strong><br /><br />このセクションでは、センサーのデータを正常にアップロードし、Helium に表示できるようにするための Helium の設定方法について説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-Helium">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>TTN セクション</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN の紹介</strong><br /><br />この章では、TTN コンソールの操作について説明し、TTN コンソールの第一印象を得ることを目的としています。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/TTN-Introduction">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN への接続</strong><br /><br />このセクションでは、センサーのデータを正常にアップロードし、TTN に表示できるようにするための TTN の設定方法について説明します。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-TTN">章にジャンプ &gt;</a></td>
    </tr>
  </tbody></table>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa®マークは、Semtech Corporationまたはその子会社の商標です。
- LoRaWAN®は、LoRa Alliance®からライセンスを受けて使用されているマークです。