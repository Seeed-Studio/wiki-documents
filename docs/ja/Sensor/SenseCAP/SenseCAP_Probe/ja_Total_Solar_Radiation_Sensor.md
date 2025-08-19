---
description: 全日射センサー
title: 全日射センサー
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.webp
slug: /ja/total_solar_radiation_sensor
last_update:
  date: 05/15/2025
  author: Leo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 全日射センサー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p>

IP68 RS485 全日射センサーは、300～1100ナノメートルの範囲でリアルタイムの太陽全放射を測定します。環境モニタリングや農業に最適です。SenseCAP センサーハブ 4G データロガーや SenseCAP S2100 LoRaWAN® データロガーと組み合わせることで、データ収集と管理をシームレスに行えます。

## 産業用センサーへのアップグレード可能

SenseCAP S2100 [データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)を使用すれば、このセンサーを簡単に LoRaWAN® センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

## S2100 LoRaWAN データロガーとの使用

このページでは、S2100 LoRaWAN データロガーと全日射センサーを接続する手順を説明します。これにより、商業利用可能な堅牢な産業用 LoRaWAN ワイヤレスセンサーをわずか5分で作成できます。

### ハードウェア準備

<table align="center">
 <tr>
     <th>SenseCAP S2100 データロガー</th>
      <th>全日射センサー</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-p-5691.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
  <td>
  </td>
 </tr>
</table>

**データロガー**: MODBUS RS485/アナログ/GPIOセンサーをLoRa対応センサーに変換し、LoRaWAN プロトコルを介してデータを転送する LoRaWAN コンバーターです。

**全日射センサー**: 全日射センサーは、シリコンフォトディテクターを使用しており、光が照射されると入射光の強度に比例した電流信号を生成し、W/㎡単位で測定値を直接出力できます。

**プラスドライバー**: センサープローブを組み立てるために使用します。

**ゲートウェイ**: LoRaWAN センサーはデータを LoRaWAN ゲートウェイに送信し、ゲートウェイはそれをクラウドサーバーに送信します。ゲートウェイをお持ちでない場合、以下の2つのオプションがあります：

- オプション1: センサーが Helium ネットワークでカバーされているエリアで動作する場合（[Helium Explorer](https://explorer.helium.com/)で確認）。Heliumネットワークが利用可能な場所では、ゲートウェイを購入せずにセンサーを使用してデータを転送できます。
- オプション2: [ゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)を購入する。

**構成用に SenseCAP Mate アプリをダウンロードしてください:**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image4.png" alt="pir" width={300} height="auto" /></p>

準備が整いました。それでは始めましょう！

### 2. ネットワークアーキテクチャ

まずは LoRaWAN のネットワーキングから始めましょう。
データロガーはセンサーデータをLoRaデータに変換し、そのデータをゲートウェイにアップロードします。ゲートウェイはデータをサーバーにアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image5.png" alt="pir" width={800} height="auto" /></p>

### 全日射センサーを SenseCAP データロガーに接続する

- **ステップ1:** データロガーの3つのネジを外します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **ステップ2:** 底面カバーを取り外し、内部のPCBAをネジ端子がアクセス可能になるまで取り出します。基板全体を取り出す必要はありません

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **ステップ3:** ネジキャップを反時計回りに回して取り外します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **ステップ4:** 付属のケーブルをネジキャップと底面カバーを通して通します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **ステップ5:** ケーブルの配線を以下のようにネジ端子に接続します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**ヒント**: 他のプロトコル（例: 4-20mA）を使用している場合は、ピンテーブルを参照してください:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image6.png" alt="pir" width={800} height="auto" /></p>

総太陽放射センサーの配線順序について、デフォルトで防水コネクタが含まれていますが、S2100に接続するためにはコネクタを切断する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image7.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 6:** ハードウェアユニットをケース内に戻し、底部カバーで閉じてネジで固定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **ステップ 7:** スレッドキャップを締めてケーブルを固定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

総太陽放射センサーとデータロガーのすべての接続が完了すると、以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image8.jpg" alt="pir" width={800} height="auto" /></p>

### RS485通信の設定を構成する

**ステップ 1:** **S2100データロガー**を選択し、設定ページで**Setup**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image9.png" alt="pir" width={800} height="auto" /></p>

**ステップ 2:** ボタンを押して**3秒間**保持します。緑色のLEDが1秒間隔で点滅します。その後、**Scan**をクリックしてデータロガーのBluetoothスキャンを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/gif1.gif" alt="pir" width={800} height="auto" /></p>

**ステップ 3:** LoRaWANおよびセンサーのパラメータ（RS485 Modbus-RTUコマンドを含む）を構成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image10.png" alt="pir" width={800} height="auto" /></p>

#### テンプレートをインポートする方法

**ステップ 1:** 以下のリンクをクリックし、ブラウザを選択してダウンロードしてください。[総太陽放射センサー](https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/Total%20Solar%20Radiation%20Sensor.seeed)

**ステップ 2:** 右上の「➕」をタップし、「テンプレートをインポート」を選択して、ダウンロードしたファイルを選択します。これでテンプレートがインポートされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image11.png" alt="pir" width={800} height="auto" /></p>

**ステップ 3:** **Send**をクリックし、**Measure**をクリックしてセンサーをテストします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image12.png" alt="pir" width={600} height="auto" /></p>

センサーの総太陽放射が正常に取得されました！

## リソース

- **[PDF]** [総太陽放射センサー ユーザーマニュアル](https://files.seeedstudio.com/products/SenseCAP/rs485%E4%BC%A0%E6%84%9F%E5%99%A8/Total%20Solar%20Radiation%20Sensor%20(S-ZFS-02)%20User's%20Manual.pdf)
- **[PDF]** [SenseCAP S2100 データロガー ユーザーガイド](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>