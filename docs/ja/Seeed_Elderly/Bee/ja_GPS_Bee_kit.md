---
description: GPS Beeキット
title: GPS Beeキット
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/GPS_Bee_kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/Gpsbee_05.jpg)

GPSモジュールを既存のシールドと簡単に互換性を持たせるために、XBeeワイヤレスモジュールと同じピンパッケージを採用しています。そのため、GPSモジュールをXBee互換の既存のシールドに挿入することができます。また、[UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109)を使用してGPSモジュールをUSBポートに接続し、u-centerというソフトウェアを実行してGPSデータを解析し、GPSモジュールのパラメータをリセットすることも可能です。GPS Beeを[UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109)に取り付け、[UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109)をPCに接続してu-center.exeを開き、UartSBポートを選択すると、GPSモジュールが送信するデータを確認できます。このソフトウェアはデータを解析し、時間、速度、緯度と経度、ASL（海抜高度）などの具体的な情報を表示します。

キットにはGPS用のMini Embedded Antenna U.FLが付属しています。また、より大きなサイズのアンテナ[Embedded Antenna U.FL for GPS](https://www.seeedstudio.com/depot/embedded-antenna-ufl-for-gps-p-564.html?cPath=84_89)を購入することも可能です。XBee標準ソケットを備えたすべてのシールド、ブレイクアウトボード、基板と互換性があります。

[4ピン 2.54mmから2.0mmのメスジャンパーワイヤー](https://www.seeedstudio.com/depot/4-pin-254mm-to-20mm-female-jumper-wire-100mm-p-403.html)も簡単に適応させるために利用可能です！

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/gps-bee-kit-with-mini-embedded-antenna-p-560.html?cPath=144_145)

## 特徴
---
* 50チャンネルのu-blox 5エンジン、100万以上の有効相関器を搭載
* ホットスタートおよび支援スタートで1秒未満のTime To First Fix
* -160dBmのSuperSense®取得および追跡感度
* KickStart機能を備えたモジュールで弱信号時の高速起動
* AssistNow OnlineおよびAssistNow Offline A-GPSサービスをサポート；OMA SUPL準拠
* 高いジャミング耐性
* 4Hzの位置更新レート
* XBeeソケットと互換性のある小型2.0mmピッチヘッダー
* UART、USB、DDC、SPIインターフェース
* RoHS準拠

## 応用アイデア
---
* 任意の位置システム

## 仕様
---
<table>
<tr>
<th>項目</th>
<th>記号</th>
<th>最小</th>
<th>典型</th>
<th>最大</th>
<th>単位</th>
</tr>
<tr>
<td>電源供給</td>
<td>Vcc</td>
<td>2.7</td>
<td>3.0</td>
<td>3.6</td>
<td>V</td>
</tr>
<tr>
<td>ピーク供給電流 (Vcc=3.6V)</td>
<td></td>
<td></td>
<td></td>
<td>150</td>
<td>mA</td>
</tr>
<tr>
<td>持続供給電流 (Vcc=3.0V)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>取得</td>
<td></td>
<td></td>
<td>102</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>追跡</td>
<td></td>
<td></td>
<td>44</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>アンテナゲイン</td>
<td></td>
<td></td>
<td>30</td>
<td></td>
<td>dB</td>
</tr>
<tr>
<td>動作温度</td>
<td></td>
<td>-40</td>
<td></td>
<td>85</td>
<td>℃</td>
</tr>
</table>

### ピン定義と定格

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPS.jpg)

<table>
<tr>
<th>ピン</th>
<th>名前</th>
<th>機能</th>
</tr>
<tr>
<td>1</td>
<td>Vcc</td>
<td>電源供給、2.7-3.6VDC</td>
</tr>
<tr>
<td>2</td>
<td>TX</td>
<td>シリアルポート1</td>
</tr>
<tr>
<td>3</td>
<td>RX</td>
<td>シリアルポート2</td>
</tr>
<tr>
<td>4</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>5</td>
<td>EX</td>
<td>予約済み</td>
</tr>
<tr>
<td>6</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>7</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>8</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>9</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>10</td>
<td>GND</td>
<td>グラウンド</td>
</tr>
<tr>
<td>11</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>12</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>13</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>14</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>15</td>
<td>TP</td>
<td>設定可能なパルス出力（デフォルト1Hz、最大4Hz）</td>
</tr>
<tr>
<td>16</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>17</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>18</td>
<td>NC</td>
<td>予約済み</td>
</tr>
<tr>
<td>19</td>
<td>SCL</td>
<td>I2Cクロックピン（設定専用）</td>
</tr>
<tr>
<td>20</td>
<td>SDA</td>
<td>I2Cデータピン（設定専用）</td>
</tr>
</table>

## 使用方法
---
1. **汎用GPSシールド**  
   XBee互換のピン配置と電圧を活用することで、GPS BeeはXBeeソケット（XBeeシールドやXBeeエクスプローラーなど）を再利用できます。例えば、XBeeモジュールをXBeeシールドを使ってArduinoプロジェクトに簡単に取り付けることができます。

2. **Bluetooth GPSモジュール**  
   UARTSBを使用してUSBポートGPSモジュールとして動作します。強力なUcenterを使用して簡単に実用的なデータを取得できます。また、Bluetoothモジュールを追加して、プロジェクト用のBluetooth GPSモジュールを作成することも可能です。

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam.jpg)

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-2.jpg)

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-3.jpg)

[こちらをクリック](http://garden.seeedstudio.com/images/2/20/GPSBee-exam-3.jpg)して、読みやすく完全な画像をご覧ください。

### SIM28モジュールに関する注意事項:

1. GPS Beeは、元のバージョンと同じフットプリントを持つSIM28モジュールに変更されました。

2. SIM28モジュールのデータを受信するには、["SIMCom GPS DEMO"](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip)ツールを使用してください。

3. SIMCom_GPS_DEMOツールを開き、`Module -> properties -> module -> select SIM28`を選択します。

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_select.jpg)

4. SIMCom_GPS_DEMOツールを開き、`Module -> connect`を選択します。GPSモジュールが使用しているシリアルポートを選択してください。

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_tools_pannel.jpg)

## バージョントラッカー

<table>
<tr>
<th>リビジョン</th>
<th>説明</th>
<th>リリース日</th>
</tr>
<tr>
<td width="300">GPS Beeキット（ミニ埋め込みアンテナ付き）</td>
<td width="500">-</td>
<td width="200">2009年11月8日</td>
</tr>
<tr>
<td>v0.91</td>
<td>補足</td>
<td>2011年3月15日</td>
</tr>
<tr>
<td>v1.2</td>
<td>アンテナ</td>
<td>2012年5月18日</td>
</tr>
<tr>
<td>v1.2</td>
<td>GPSモジュールをSIM28に変更</td>
<td>2013年12月5日</td>
</tr>
<tr>
<td>v1.3</td>
<td>GPSモジュールをSIM28に変更、LEDを底面に変更</td>
<td>2014年1月10日</td>
</tr>
</table>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
*   [NEO-5 U-bloxデータシート](https://www.seeedstudio.com/depot/datasheet/NEO-5x_Data_Sheet(GPS.G5-MS5-07025).pdf)

*   [NEO-6 U-bloxデータシート](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/NEO-6_DataSheet-GPS.G6-HW-09005-.pdf)

*   [LEA-6 NEO-6 ハードウェア統合マニュアル](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/LEA-6_NEO-6_HardwareIntegrationManual.pdf)

*   [U-center](https://www.seeedstudio.com/depot/datasheet/u-center_5.07_Installer.rar)

*   [GPSBee回路図 v1.2.pdf](http://garden.seeedstudio.com/images/5/58/GPSBee_v1.2.pdf)

*   [GPSBee v1.2 Eagleファイル](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPSBee_v1.2_eagle.zip)

*   [SIM28データファイル](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIM28_DATA_File.zip)

*   [SIMCom_GPS_DEMO_V1.07](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip)

*   [GPSBee V1.3 Eagleファイル](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip)

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