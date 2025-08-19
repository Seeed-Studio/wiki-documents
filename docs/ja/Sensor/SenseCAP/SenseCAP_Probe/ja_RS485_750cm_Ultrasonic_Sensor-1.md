---
description: RS485 750cm 超音波レベルセンサー
title: RS485 750cm 超音波レベルセンサー
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RS485_750cm_Ultrasonic_Sensor-1
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# RS485 750cm 超音波レベルセンサー

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image1.jpeg"/></div>

RS485 750cm 超音波レベルセンサーは、超音波センシング技術を利用して距離を測定します。測定範囲は28〜750cmで、解像度は1mmです。ベルマウスを装備しており、最大750cmまでの物体を検出できます。IP67防水超音波トランスデューサを備えており、下水や水位監視、スマートゴミ箱管理システム、ロボットの回避、自動制御など、さまざまな用途で使用できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-750cm-Ultrasonic-Level-Sensor-p-5587.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP S2100 [データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)を使用することで、このセンサーを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

# S2100 LoRaWAN データロガーで遊ぶ

このページでは、S2100 LoRaWAN データロガーと750cm超音波レベルセンサーを接続するプロセスを案内します。これにより、商業利用可能な堅牢な産業用LoRaWANワイヤレスセンサーをわずか5分で作成できます。

## 始める

### 準備
#### ハードウェア
##### 必要な材料

<table align="center">
	<tr>
	    <th>SenseCAP S2100 データロガー</th>
      <th>750cm 超音波レベルセンサー</th>
    <th>十字ドライバー</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image1.jpeg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-750cm-Ultrasonic-Level-Sensor-p-5587.html?queryID=2bee749eb1a41d36e0d4d5fbdcbfb36f&objectID=5587&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

## 1. データロガー、RS485 750cm超音波レベルセンサー、ゲートウェイ、およびツールの準備

1. **データロガー**: これは、MODBUS RS485/アナログ/GPIOセンサーをLoRa対応センサーに変換し、LoRaWANプロトコルを介してデータを転送するLoRaWANコンバーターです。

2. **RS485 750cm超音波レベルセンサー**: 超音波センシング技術を使用して距離を測定します。測定範囲は28cmから750cmで、解像度は1mmに達することができます。IP67防水の超音波トランスデューサーを備えており、作業環境への適応性が高いです。

3. **プラスドライバー**: センサープローブを組み立てるために使用します。

4. **ゲートウェイ**: LoRaWANセンサーはデータをLoRaWANゲートウェイに送信し、その後クラウドサーバーに転送します。ゲートウェイを持っていない場合、以下の2つのオプションがあります：
   - オプション1: センサーがHeliumネットワークでカバーされているエリアで動作する（[Helium Explorer](https://explorer.helium.com/)で確認）。Heliumネットワークが利用可能な場所では、ゲートウェイを購入せずにセンサーでデータを転送できます。
   - オプション2: [ゲートウェイを購入](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)します。

5. 設定用にSenseCAP Mateアプリをダウンロードします：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mateアプリ iOS&Android</div>

準備が完了しました。それでは始めましょう！

### 2. ネットワークアーキテクチャ

まず、LoRaWANのネットワーク構成について説明します。
データロガーはセンサーデータをLoRaデータに変換し、そのデータをゲートウェイにアップロードします。ゲートウェイはデータをサーバーにアップロードします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. RS485 750cm超音波レベルセンサーをSenseCAPデータロガーに接続する

- **ステップ1:** データロガーの3つのネジを外します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **ステップ2:** 底面カバーを取り外し、ネジ端子にアクセスできるように内部のPCBAを取り出します。ただし、基板全体を取り出す必要はありません。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **ステップ3:** スレッドキャップを反時計回りに回して取り外します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **ステップ4:** 付属のケーブルをスレッドキャップと底面カバーを通して通します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **ステップ5:** ケーブルのワイヤーを以下のようにネジ端子に接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**ヒント**: 他のプロトコル（例: 4-20mA）を使用する場合は、以下のピンテーブルを参照してください：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

RS485 750cm超音波レベルセンサーの配線順：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/Picture3.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image%203.png"/></div>

- **ステップ6:** ハードウェアユニットをケース内に戻し、底面カバーを閉じてネジを締めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **ステップ7:** スレッドキャップを締めてケーブルを固定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

超音波レベルセンサーとデータロガーの接続が完了すると、以下のようになります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/Picture4.png"/></div>

### 4. データロガーとRS485 750cm超音波レベルセンサーの通信設定を構成する

- **ステップ1:** **S2100データロガー**を選択し、設定ページで**Setup**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **ステップ2:** ボタンを押して**3秒間**保持します。緑色のLEDが1秒間隔で点滅します。その後、**Scan**をクリックしてデータロガーのBluetoothをスキャンします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **ステップ3:** LoRaWANおよびセンサーのパラメータ（RS485 Modbus-RTUコマンドを含む）を構成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### テンプレートのインポート方法

- **ステップ1:** このテンプレートリンクをクリックし、ブラウザを選択してダウンロードします。
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **ステップ2:** 右上の「➕」をタップし、「インポートテンプレート」を選択してダウンロードしたファイルを選択します。これでテンプレートがインポートされます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **ステップ3:** **Send**をクリックし、**Measure**をクリックしてセンサーをテストします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2017.png"/></div>

センサーの距離と温度が正常に取得されました！

### 5. データをSenseCAPポータルおよびMateアプリにアップロードする

- **ステップ1:** アプリのホームページに戻り、データロガーの赤色LEDが数秒間点滅した後、緑色LEDが短時間点滅してLoRaWAN接続が成功し、データが送信されたことを示します。または、データロガーのボタンを1回押して、データ送信を強制的に行うこともできます。
データをアップロードする前に、ゲートウェイが正常に動作しているか、Heliumネットワークのカバレッジがあることを確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

次に、このセンサーをSenseCAPプラットフォームに追加し、クラウド上でデータを確認する必要があります。

- **ステップ 2:** QRコードをスキャンしてデータロガーをバインドします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **ステップ 3:** アプリとポータルでデータを確認します。(https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>


### 6. センサーを実環境でテストする

屋外の実際のシーンで迅速に適用し、長期的な監視を行います。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2020.png"/></div>

現在、LoRaWANセンサーが開発されています。

## リソース

- **[PDF]** [RS485 750cm 超音波レベルセンサー](https://files.seeedstudio.com/wiki/RS485-Ultrasonic-Level-Sensor/RS485-750cm-Ultrasonic-Level-Sensor.pdf)
- **[PDF]** [SenseCAP S2100 データロガー ユーザーガイド](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>