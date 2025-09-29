---
description: Wio Terminal 光センサー
title: Wio Terminal 光センサー
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100-Light-Sensor-Grove-LoRa-E5
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Wio Terminal 光センサー

このセクションでは、センサーの動作原理、Wio Terminal を使用してセンサーデータを取得する方法、および Wio Terminal と Grove - Wio-E5 を使用してデータを送信する方法について詳しく説明します。

## 産業用センサーへのアップグレードが可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の産業プロジェクトで最新の SenseCAP S210x をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> データロガー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空気温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空気温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
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

このセクションでは、Wio Terminalに内蔵されている光センサーの使用方法を学びます。

光センサーは、光電素子を検出素子として使用するセンサーです。まず、測定された光の変化を光信号の変化に変換し、その後、光電素子を使用して光信号を電気信号に変換します。光センサーは通常、光源、光学経路、光電素子の3つの部分で構成されています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/102.png" /></div>

光センサーの使用に関する詳細情報は[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Light/)を参照してください。

## 必要な材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
    </tr>
  </tbody></table>

## 事前準備

### 接続

このルーチンでは、Grove - Wio-E5を使用して近くのLoRa®ゲートウェイに接続する必要があります。Wio Terminalの右側のGroveポートをソフトシリアルポートとして構成し、ATコマンドを受信します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

:::note
なぜ左側のGroveポートを使用しないのか？
  > 左側のGroveインターフェースはIIC対応であり、ほとんどのセンサーにIICインターフェースを使用するため、保持する方が良い解決策です。
:::

### ソフトウェア準備

**ステップ 1.** Arduinoソフトウェアをインストールする必要があります。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**ステップ 2.** Arduinoアプリケーションを起動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ 3.** Arduino IDEにWio Terminalを追加します。

Arduino IDEを開き、`File > Preferences`をクリックし、以下のURLを追加のボードマネージャURLにコピーします：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

`Tools > Board > Board Manager`をクリックし、ボードマネージャで**Wio Terminal**を検索します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**ステップ 4.** ボードとポートを選択する

Arduino IDEの`Tools > Board`メニューで、Arduinoに対応するエントリを選択します。**Wio Terminal**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

`Tools -> Port`メニューからWio Terminalボードのシリアルデバイスを選択します。これは通常COM3以上（COM1とCOM2は通常ハードウェアシリアルポートに予約されています）です。確認するには、Wio Terminalボードを切断してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択します。

:::tip
Macユーザーの場合、`/dev/cu.usbmodem141401`のようなものになります。

スケッチをアップロードできない場合、主にArduino IDEがWio Terminalをブートローダーモードに移行できなかったことが原因です。（MCUが停止しているか、プログラムがUSBを処理している場合）対策として、Wio Terminalを手動でブートローダーモードにする必要があります。
:::
 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**ステップ 5.** Grove - Wio-E5ライブラリをダウンロードする

[Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ 6.** Arduino IDEにライブラリを追加する

次に、3軸デジタル加速度計ライブラリをArduino IDEにインストールします。Arduino IDEを開き、`sketch -> Include Library -> Add .ZIP Library`をクリックし、先ほどダウンロードした`Disk91_LoRaE5`ファイルを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Wio Terminal の内蔵光センサーの値を取得する

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-lightsensor-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-lightsensor-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

このリポジトリでは、Wio Terminal のコンポーネントとして内蔵光センサーを使用する方法を示しています。光センサーはアナログインターフェースを使用しており、そのピンを読み取ることで周囲の光センサー値を簡単に取得できます。

```c
void setup() {
  pinMode(WIO_LIGHT, INPUT);
  Serial.begin(115200);
}
 
void loop() {
   int light = analogRead(WIO_LIGHT);
   Serial.print("光の値: ");
   Serial.println(light);
   delay(200);
}
```

:::note
`WIO_LIGHT` は内蔵光センサーのピンです。光センサーは **A13** に接続されています。

光センサーは Wio Terminal の背面、microSDカードスロットのすぐ上にあります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/20.png" /></div>

:::
Arduino IDE のシリアルモニターを開き、ボーレートを 115200 に設定して結果を観察してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/103.png" /></div>

## Grove - Wio-E5 を介してデータを送信する

Grove - Wio-E5 の以前のコードを組み合わせて、LoRa® ネットワークに接続します。ATコマンドを使用することで、光センサーの値を LoRa® ネットワークに送信することが可能です。

前述のコードからわかるように、光センサー値は8ビット未満の整数データとして取得されます。

この方法では、ATコマンドを介して送信するデータの内容、サイズ、形式を決定します。十分な大きさの配列を設定し、送信する必要のある文字列を配列に格納し、最後に **send_sync()** 関数を使用して配列を送信します。

上記のアイデアの擬似コードは以下のようになります。

```c
......
  int light = analogRead(WIO_LIGHT);  // Wio Terminal の光センサー値を取得

  static uint8_t data[2] = { 0x00 };  // センサー値を格納する data[] 配列

  data_decord(light, data);
  
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

残りの作業は、`begin()` 関数を使用して Grove - Wio-E5 を初期化し、`setup()` 関数を使用して Grove - Wio-E5 のトリプレット情報を設定することです。`send_sync()` 関数を使用してデータメッセージを送信するとき、同時に LoRaWAN® に参加を試みます。一度成功すると、データが送信され、信号強度やアドレスなどの情報が返されます。

完全なコード例は [こちら](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data) にあります。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
この時点ではまだ Helium/TTN の設定が完了していないため、コードをアップロードして結果を確認することはお勧めしません。この段階でコードをアップロードすると、「Join failed」という結果が得られます。[Connecting to Helium](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/) または [Connecting to TTN](https://wiki.seeedstudio.com/ja/Connecting-to-TTN/) の章を完了してから、このコードをアップロードして完全なデータ送信プロセスを完了することをお勧めします。
:::
光センサーの動作とデータ形式を体験し理解したら、次のステップである LoRaWAN® への参加に進んでください。

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Helium セクション</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium の紹介</strong><br /><br />この章では、Helium コンソールの操作を紹介し、Helium コンソールの第一印象を得ることができます。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Helium-Introduction">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium への接続</strong><br /><br />このセクションでは、センサーデータを Helium に正常にアップロードして表示できるようにするための設定方法を説明します。<br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-Helium">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>TTN セクション</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN の紹介</strong><br /><br />この章では、TTN コンソールの操作を紹介し、TTN コンソールの第一印象を得ることができます。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/TTN-Introduction">章にジャンプ &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN への接続</strong><br /><br />このセクションでは、センサーデータを TTN に正常にアップロードして表示できるようにするための設定方法を説明します。
        <br /><br /><a href="https://wiki.seeedstudio.com/ja/Connecting-to-TTN">章にジャンプ &gt;</a></td>
    </tr>
  </tbody></table>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

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
- LoRaWAN® は LoRa Alliance® からライセンスを受けて使用されているマークです。