---
description: Grove VOCおよびeCO2ガスセンサー（SGP30）
title: Grove VOCおよびeCO2ガスセンサー（SGP30）
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Grove VOCおよびeCO2ガスセンサー（SGP30）

このセクションでは、センサーの動作原理、Wio Terminalを使用してセンサーデータを取得する方法、およびWio TerminalとGrove - Wio-E5を使用してデータを送信する方法について詳しく説明します。

## 産業用センサーへのアップグレードが可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに向けて、最新のSenseCAP S210xをお試しください。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光強度</strong></a></td>
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

SGP30は、単一コア上に複数の検知要素を持つ金属酸化物室内ガスセンサーです。このセンサーは4つのガス検知要素を組み込み、完全に校正された空気質出力信号を提供し、主に空気質の検出に使用されます。

SGP30の検知部分（MEMS）は、金属酸化物（MOx）ナノ粒子の加熱膜に基づいています。ガス感応材料は、金属酸化物粒子上に吸着された酸素をターゲットガスと反応させ、電子を放出します。この反応により、センサーが測定する金属酸化物層の抵抗が変化します。

簡単に言えば、還元性ガスの存在により、ガス感応材料の表面の酸素濃度が減少し、半導体の抵抗（または導電性）が変化します。その後、抵抗の検出、信号処理、および変換は回路（ASIC）部分によって行われます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" /></div>

Grove VOCおよびeCO2ガスセンサーの使用に関する詳細情報は[こちら](https://wiki.seeedstudio.com/ja/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/)をご参照ください。

## 必要な材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove VOCおよびeCO2ガスセンサー (SGP30)</td>
    </tr>
  </tbody></table>

## 事前準備

### 接続

この手順では、Grove - Wio-E5を使用して近くのLoRa®ゲートウェイに接続する必要があります。Wio Terminalの右側のGroveポートをソフトシリアルポートとして構成し、ATコマンドを受信します。以下の図に従って、左側にGrove VOCおよびeCO2ガスセンサーを接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/sgp30.jpg" /></div>

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

**ステップ4.** ボードとポートを選択します。

`Tools > Board`メニューでArduinoに対応するエントリを選択します。**Wio Terminal**を選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

`Tools -> Port`メニューからWio Terminalボードのシリアルデバイスを選択します。これは通常、COM3以上（COM1およびCOM2は通常ハードウェアシリアルポート用に予約されています）です。確認するには、Wio Terminalボードを切断してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択します。

:::tip
Macユーザーの場合、`/dev/cu.usbmodem141401`のようなものになります。

スケッチをアップロードできない場合、主にArduino IDEがWio Terminalをブートローダーモードに切り替えられなかったことが原因です（MCUが停止しているか、プログラムがUSBを処理している場合）。回避策として、Wio Terminalを手動でブートローダーモードに切り替えます。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**ステップ5.** Grove - Wio-E5ライブラリをダウンロードします。

[Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードします。

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ6.** Arduino IDEにライブラリを追加します。

次に、3軸デジタル加速度計ライブラリをArduino IDEにインストールします。Arduino IDEを開き、`sketch -> Include Library -> Add .ZIP Library`をクリックし、先ほどダウンロードした`Disk91_LoRaE5`ファイルを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Grove VOC および eCO2 ガスセンサー (SGP30) の値を取得する

**ステップ 1.** Grove VOC および eCO2 ガスセンサーコードライブラリをダウンロードする

[SGP30_Gas_Sensor](https://github.com/Seeed-Studio/SGP30_Gas_Sensor) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードしてください。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ 2.** Arduino IDE にライブラリを追加する

次に、Grove VOC および eCO2 ガスセンサーライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ -> ライブラリを含める -> .ZIP ライブラリを追加` をクリックし、先ほどダウンロードした `SGP30_Gas_Sensor` ファイルを選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**ステップ 3.** SGP30 から VOC および eCO2 データを取得する

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

このリポジトリでは、取得された VOC および eCO2 データが示されています。コード内では、`sgp_measure_signals_blocking_read()` 関数を使用して VOC および eCO2 の情報を取得します。この情報は正の整数値です。

```cpp
#include <Arduino.h>
#include "sensirion_common.h"
#include "sgp30.h"

void setup() {
    s16 err;
    u32 ah = 0;
    u16 scaled_ethanol_signal, scaled_h2_signal;
    Serial.begin(115200);
    Serial.println("シリアル開始!!");

    /* モジュールを初期化し、すべてのベースラインをリセットします。
       初期化には最大約15秒かかり、その間、IAQ(室内空気質)の測定APIの出力は変化しません。
       デフォルト値はCO2が400(ppm)、TVOCが0(ppb)です。 */
    while (sgp_probe() != STATUS_OK) {
        Serial.println("SGPが失敗しました");
        while (1);
    }
    /* ブロッキング方式でH2とエタノール信号を読み取ります */
    err = sgp_measure_signals_blocking_read(&scaled_ethanol_signal,
                                            &scaled_h2_signal);
    if (err == STATUS_OK) {
        Serial.println("RAM信号を取得しました!");
    } else {
        Serial.println("信号の読み取りエラー");
    }

    // 絶対湿度を13.000 g/m^3に設定します
    // これはテスト値です
    sgp_set_absolute_humidity(13000);
    err = sgp_iaq_init();
}

void loop() {
    s16 err = 0;
    u16 tvoc_ppb, co2_eq_ppm;
    err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);
    if (err == STATUS_OK) {
        Serial.print("tVOC 濃度:");
        Serial.print(tvoc_ppb);
        Serial.println("ppb");

        Serial.print("CO2eq 濃度:");
        Serial.print(co2_eq_ppm);
        Serial.println("ppm");
    } else {
        Serial.println("IAQ値の読み取りエラー\n");
    }
    delay(1000);
}
```

Arduino IDE のシリアルモニターを開き、ボーレートを 115200 に設定して結果を観察してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/171.png" /></div>

## Grove - Wio-E5 を介してデータを送信する

Grove - Wio-E5 の以前のコードを組み合わせて、LoRa® ネットワークに接続します。AT コマンドを使用することで、Grove VOC および eCO2 ガスセンサーの値を LoRa® ネットワークに送信することが可能です。

前のセクションのコードでは、VOC および eCO2 の値が正の整数であることがわかっています。そして、これらの整数の長さは 8 ビットを超えません。

この方法により、AT コマンドを介して送信するデータの内容、サイズ、および形式を決定します。十分な大きさの配列を設定し、送信する必要のある文字列を配列に格納し、最後に **send_sync()** 関数を使用して配列を送信することができます。

上記のアイデアの擬似コードは以下のようになります。

```c
  ......
  s16 err = 0;
  u16 tvoc_ppb, co2_eq_ppm;
  err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);
  
  static uint8_t data[4] = { 0x00 };  // センサーの値を格納するための data[] を使用

  data_decord(tvoc_ppb, co2_eq_ppm, data);

  if ( lorae5.send_sync(              // センサー値を送信
        8,                            // LoRaWan ポート
        data,                         // データ配列
        sizeof(data),                 // データのサイズ
        false,                        // ACK を期待しない
        7,                            // スプレッドファクター
        14                            // 送信出力 (dBm)
       ) 
  ) 
  ......
```

次に必要なことは、`begin()` 関数を使用して Grove - Wio-E5 を初期化し、`setup()` 関数を使用して Grove - Wio-E5 のトリプレット情報を設定することです。`send_sync()` 関数を使用してデータメッセージを送信するとき、同時に LoRaWAN® に参加を試みます。一度成功すると、データが送信され、信号強度やアドレスなどの情報が返されます。

完全なコード例は [こちら](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data) にあります。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
現時点でコードをアップロードして結果を確認することはお勧めしません。なぜなら、この時点ではまだ Helium/TTN の設定が完了しておらず、「Join failed」という結果が得られるためです。[Connecting to Helium](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/) または [Connecting to TTN](https://wiki.seeedstudio.com/ja/Connecting-to-TTN/) の章を完了してから、このコードをアップロードして完全なデータ送信プロセスを完了することをお勧めします。
:::

Grove VOC および eCO2 ガスセンサーの動作とデータ形式を理解したら、次のステップである LoRaWAN® への参加に進んでください。

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
      <td align="left"><strong>Helium への接続</strong><br /><br />このセクションでは、センサーデータを Helium に正常にアップロードして表示できるようにするための Helium の設定方法について説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-Helium">章にジャンプ &gt;</a></td>
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
      <td align="left"><strong>TTN への接続</strong><br /><br />このセクションでは、センサーデータを TTN に正常にアップロードして表示できるようにするための TTN の設定方法について説明します。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-TTN">章にジャンプ &gt;</a></td>
    </tr>
  </tbody></table>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® マークは、Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は、LoRa Alliance® からのライセンスに基づいて使用されるマークです。