---
description: RS485 大気温度・湿度・気圧センサー(S-THP-01A)
title: RS485 大気温度・湿度・気圧センサー(S-THP-01A)
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor
last_update:
  date: 10/14/2023
  author: Yvonne
---

# RS485 大気温度・湿度・気圧センサー(S-THP-01A)

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image1.png"/></div>

IP56規格のRS485大気温度・湿度・気圧センサーは、0-100% RH、-40～125°C、300-1100 hPaの広い動作範囲を持っています。スマート農業、気象監視、蒸発散量計算、カビ防止などの用途に最適です。このセンサーをSenseCAP S2100 [データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)と統合することで、ユーザーはシームレスなデータ収集と管理を実現できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP S2100 [データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)を使用することで、このセンサーを簡単にLoRaWAN®センサーに変換できます。Seeedはプロトタイピングをサポートするだけでなく、堅牢なSenseCAP シリーズの[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)でプロジェクトを拡張する可能性も提供します。

# S2100 LoRaWANデータロガーで遊ぶ

このページでは、S2100 LoRaWANデータロガーとRS485大気温度・湿度・気圧センサーを接続するプロセスをガイドし、わずか5分で商用利用可能な堅牢で産業グレードのLoRaWANワイヤレスセンサーを作成できるようにします。

## はじめに

### 準備

#### ハードウェア

##### 必要な材料

<table align="center">
 <tr>
     <th>SenseCAP S2100 データロガー</th>
      <th>RS485 大気温度・湿度・気圧センサー</th>
    <th>プラスドライバー</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/101991101/image1.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## 1. データロガー、RS485大気温度・湿度・気圧センサー、ゲートウェイ、およびツールの準備

1. **データロガー**: MODBUS RS485/アナログ/GPIOセンサーをLoRa対応センサーに変換し、LoRaWANプロトコルを通じてデータを転送するLoRaWANコンバーターです。

2. **RS485大気温度・湿度・気圧センサー**: このセンサーは、0-100% RH、-40～125°C、300-1100 hPaの範囲内で大気温度、湿度、気圧を正確に測定します。精密な産業環境監視アプリケーションに適しています。

3. **プラスドライバー**: センサープローブの組み立てに使用します。

4. **ゲートウェイ**: LoRaWANセンサーはLoRaWANゲートウェイにデータを送信し、ゲートウェイがクラウドサーバーに転送します。ゲートウェイをお持ちでない場合は、2つのオプションがあります：

- オプション1: センサーがHelium Networkでカバーされているエリアで動作する（[Helium Explorer](https://explorer.helium.com/)で確認）。heliumネットワークが利用可能な場所であれば、ゲートウェイを購入することなくセンサーを使用してデータを転送できます。
- オプション2: [ゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)を購入する。

5. 設定用のSenseCAP Mateアプリをダウンロードしてください：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mate App iOS&Android</div>

準備が完了しました。始めましょう！

### 2. ネットワークアーキテクチャ

LoRaWANのネットワーキングから始めましょう。
データロガーはセンサーデータをLoRaデータに変換し、ゲートウェイにデータをアップロードします。ゲートウェイはデータをサーバーにアップロードします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. RS485大気温度・湿度・気圧センサーの接続

- **ステップ1:** データロガーの3本のネジを外します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **ステップ2:** 底面カバーを取り外し、ネジ端子にアクセスできるまで内部のPCBAを取り出します。基板全体を取り出す必要はありません

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **ステップ3:** 反時計回りの方向にねじってスレッドキャップを取り外します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **ステップ4:** 付属のケーブルをスレッドキャップと底面カバーに通します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **ステップ5:** ケーブルの線を以下のようにネジ端子に接続します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**ヒント**: 4-20mAなど他のプロトコルを使用している場合は、ピン表を参照してください：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

RS485大気温度・湿度・気圧センサーの配線順序：

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image8.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image10.png"/></div>

- **ステップ6:** ハードウェアユニットをケース内に戻し、底面カバーで閉じてネジで固定します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **ステップ7:** スレッドキャップを締めて、ケーブルを所定の位置に固定します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

超音波レベルセンサーとデータロガーのすべての接続が完了すると、以下のようになります

<div align="center"><img width={500} src="https://files.seeedstudio.com/products/101991101/image9.png"/></div>

### 4. データロガーとRS485大気温度・湿度・気圧センサー通信の設定

- **ステップ1:** **S2100 Data Logger**を選択し、設定ページで**Setup**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **ステップ2:** ボタンを**3**秒間押し続けると、緑色のLEDが1秒間隔で点滅します。次に**Scan**をクリックして、データロガーのBluetoothのスキャンを開始します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **ステップ3:** LoRaWANとセンサーパラメータ（RS485 Modbus-RTUコマンドを含む）を設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### テンプレートのインポート方法

- **ステップ1:** このテンプレートリンクをクリックし、ブラウザを選択してダウンロードしてください。
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **ステップ2:** 右上角の「➕」をタップし、「import Template」を選択し、ダウンロードしたファイルを選択すると、テンプレートがインポートされます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **ステップ3:** Sendをクリックし、**Measure**をクリックしてセンサーをテストします

センサーの距離と温度が正常に取得されました！

### 5. SenseCAP PortalとMate Appへのデータアップロード

- **ステップ1:** アプリのホームページに戻ると、データロガーの赤色LEDが数秒間点滅し、続いて緑色LEDが短時間点滅して、LoRaWAN接続が成功し、データが送信されたことを示します。または、データロガーのボタンを一度クリックして、このデータ送信を強制的に実行することもできます。
データをアップロードする前に、ゲートウェイが正常に動作しているか、heliumネットワークのカバレッジがあることを確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

次に、クラウド上でデータを表示するために、このセンサーをSenseCapプラットフォームに追加する必要があります

- **ステップ 2:** QRコードをスキャンしてデータロガーをバインドします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **ステップ 3:** アプリとポータル(https://sensecap.seeed.cc/)でデータを確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

### 6. 実環境でのセンサーテスト

長期監視のための屋外実環境への迅速な適用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image7.png"/></div>

現在、LoRaWANセンサーが開発されています。

## リソース

- **[PDF]** [RS485 気温・湿度・気圧センサー](https://files.seeedstudio.com/products/101991101/Air%20Temperature%20&%20Humidity%20&%20Barometric%20Sensor%20User%20Guide%20v1.0.pdf)
- **[PDF]** [SenseCAP S2100 データロガーユーザーガイド](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
