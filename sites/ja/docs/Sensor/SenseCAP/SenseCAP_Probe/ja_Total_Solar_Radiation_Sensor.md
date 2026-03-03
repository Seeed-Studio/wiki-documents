---
description: 全天日射センサー
title: 全天日射センサー
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.webp
slug: /ja/total_solar_radiation_sensor
last_update:
  date: 4/23/2025
  author: Leo
---

# 全天日射センサー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p>

IP68 RS485 全天日射センサーは、300から1100ナノメートルの範囲でリアルタイムの太陽全放射を測定します。環境監視や農業に最適です。SenseCAP Sensor Hub 4Gデータロガーまたは SenseCAP S2100 LoRaWAN® データロガーと組み合わせることで、シームレスなデータ収集と管理が可能です。

## 産業用センサーへのアップグレード可能

SenseCAP S2100 [データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)を使用することで、このセンサーを簡単にLoRaWAN®センサーに変換できます。Seeedはプロトタイピングをサポートするだけでなく、堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)のSenseCAPシリーズでプロジェクトを拡張する可能性も提供します。

## S2100 LoRaWANデータロガーとの使用

このページでは、S2100 LoRaWANデータロガーと全天日射センサーを接続するプロセスをガイドし、わずか5分で商用利用可能な堅牢で産業グレードのLoRaWANワイヤレスセンサーを作成できるようにします。

### ハードウェアの準備

<table align="center">
 <tr>
     <th>SenseCAP S2100 データロガー</th>
      <th>全天日射センサー</th>
    <th>プラスドライバー</th>
 </tr>
 <tr>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p></td>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image2.png" alt="pir" width={800} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image3.png" alt="pir" width={800} height="auto" /></p></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-p-5691.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td>
  </td>
 </tr>
</table>

**データロガー**: MODBUS RS485/アナログ/GPIOセンサーをLoRa対応センサーに変換し、LoRaWANプロトコルを通じてデータを転送するLoRaWANコンバーターです。

**全天日射センサー**: 全天日射センサーは、光が照射されると入射光の強度に比例した電流信号を生成するシリコンフォトディテクターを利用し、W/㎡で測定値を直接出力できます。

**プラスドライバー**: センサープローブの組み立てに使用します。

**ゲートウェイ**: LoRaWANセンサーはLoRaWANゲートウェイにデータを送信し、ゲートウェイがクラウドサーバーに転送します。ゲートウェイをお持ちでない場合は、2つのオプションがあります：

- オプション1: センサーがHelium Networkでカバーされているエリアで動作する場合（[Helium Explorer](https://explorer.helium.com/)で確認）。Heliumネットワークが利用可能な場所であれば、ゲートウェイを購入することなくセンサーを使用してデータを転送できます。
- オプション2: [ゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)を購入する。

**設定用のSenseCAP Mateアプリをダウンロード:**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image4.png" alt="pir" width={300} height="auto" /></p>

準備が完了しました。始めましょう！

### 2. ネットワークアーキテクチャ

LoRaWANのネットワーキングから始めましょう。
データロガーはセンサーデータをLoRaデータに変換し、ゲートウェイにデータをアップロードします。ゲートウェイはサーバーにデータをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image5.png" alt="pir" width={800} height="auto" /></p>

### 全天日射センサーをSenseCAP データロガーに接続

- **ステップ1:** データロガーの3本のネジを外します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **ステップ2:** 底面カバーを取り外し、ネジ端子にアクセスできるまで内部のPCBAを取り出します。基板全体を取り出す必要はありません

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **ステップ3:** 反時計回りにねじってスレッドキャップを取り外します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **ステップ4:** 付属のケーブルをスレッドキャップと底面カバーに通します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **ステップ5:** ケーブルの線を以下のようにネジ端子に接続します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**ヒント**: 4-20mAなど他のプロトコルを使用している場合は、ピン表を参照してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image6.png" alt="pir" width={800} height="auto" /></p>

全天日射センサーの配線順序、防水コネクターがデフォルトで含まれています。S2100と接続するには、コネクターを切断する必要があります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image7.png" alt="pir" width={800} height="auto" /></p>

- **ステップ6:** ハードウェアユニットをケース内に戻し、底面カバーで閉じてネジで固定します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **ステップ7:** スレッドキャップを締めて、ケーブルを所定の位置に固定します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

全天日射センサーとデータロガーのすべての接続が完了すると、以下のようになります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image8.jpg" alt="pir" width={800} height="auto" /></p>

### RS485通信の設定

**ステップ1:** **S2100 データロガー**を選択し、設定ページで**Setup**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image9.png" alt="pir" width={800} height="auto" /></p>

**ステップ2:** ボタンを**3**秒間押し続けると、緑色のLEDが1秒間隔で点滅します。次に**Scan**をクリックして、データロガーのBluetoothのスキャンを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/gif1.gif" alt="pir" width={800} height="auto" /></p>

**ステップ3:** LoRaWANとセンサーパラメーター（RS485 Modbus-RTUコマンドを含む）を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image10.png" alt="pir" width={800} height="auto" /></p>

#### テンプレートのインポート方法

**ステップ1:** 以下のリンクをクリックし、ブラウザを選択してダウンロードしてください。[全天日射センサー](https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/Total%20Solar%20Radiation%20Sensor.seeed)

**ステップ2:** 右上角の「➕」をタップし、「import Template」を選択し、ダウンロードしたファイルを選択すると、テンプレートがインポートされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image11.png" alt="pir" width={800} height="auto" /></p>

**ステップ3:** Sendをクリックし、**Measure**をクリックしてセンサーをテストします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image12.png" alt="pir" width={600} height="auto" /></p>

センサーの全天日射量が正常に取得されました！

## Resources

- **[PDF]** [Total Solar Radiation Sensor User Manual](https://files.seeedstudio.com/products/SenseCAP/rs485%E4%BC%A0%E6%84%9F%E5%99%A8/Total%20Solar%20Radiation%20Sensor%20(S-ZFS-02)%20User's%20Manual.pdf)
- **[PDF]** [SenseCAP S2100 Data Logger User Guide](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
