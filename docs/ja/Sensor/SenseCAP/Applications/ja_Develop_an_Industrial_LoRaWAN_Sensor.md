---
description: 商業利用可能な産業用LoRaWANセンサーを5分で開発する方法
title: 商業利用可能な産業用LoRaWANセンサーを5分で開発する方法
keywords:
- LoRaWAN
- センサー
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/develop_an_industrial_lorawan_sensor
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

5分で商業利用可能な産業用LoRaWANワイヤレスセンサーを迅速に構築しましょう。


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={600} height="auto" /></p>

商業データ収集プロジェクトのプロトタイピングでは、多くの時間とコストがかかります。例えば、農業プロジェクト用にワイヤレスpHセンサーを作成する必要がある場合、以下の手順が必要です。1) 開発ボードとセンサープローブを探す。2) コードを書く。3) シェルを3Dプリントする。4) 最終組み立てテストを行う。プロトタイプを完成させるまでに数日から数週間かかることがあります。

しかし、現在ではワイヤレスLoRaコレクターを使用し、センサーをBluetooth経由でアプリに接続して、5分で製品を構築し、商業プロジェクトに直接組み込むことができます。

### 準備

データロガー、センサープローブ、ゲートウェイ、ツールを準備します。
1) [データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html): MODBUS RS485/アナログ/GPIOセンサーをLoRaWAN対応センサーに変換し、LoRaWANプロトコルを介してデータを転送するLoRaWANコンバーターです。

2) センサープローブ: ケーブル付きのセンサープローブを準備し、RS485 / 4-20mA / 0-10V / パルス / レベルのいずれかの信号を出力します。このチュートリアルでは、液体レベル測定用のRS485超音波センサーを使用します。

3) 十字ドライバー: センサープローブを組み立てるために使用します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519859/image_iq7PU8q7nt.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

4) ゲートウェイ: LoRaWANセンサーはデータをLoRaWANゲートウェイに送信し、ゲートウェイはそれをクラウドサーバーに送信します。ゲートウェイがない場合、以下の2つのオプションがあります:

**オプション1**: センサーがHeliumネットワークでカバーされている地域で動作する場合([Helium Explorer](https://explorer.helium.com/)で確認)。Heliumネットワークが利用可能な場所では、ゲートウェイを購入せずにセンサーを使用してデータを転送できます。
**オプション2**: [ゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)を購入します。
5) SenseCAP Mate Appをダウンロードして設定します:


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519867/image_hQX9CstNtP.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={500} height="auto" /></p>

準備が整いました。それでは始めましょう！

### ネットワークアーキテクチャ

まずLoRaWANネットワークから始めましょう。

データロガーはセンサーデータをLoRaデータに変換し、ゲートウェイにデータをアップロードします。ゲートウェイはデータをサーバーにアップロードします。


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519879/image_SUwd9Yyglx.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### センサーの接続

1) データロガーを分解します。


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519881/image_TmNcqHz98z.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

2) センサーを端子に接続し、内蔵バッテリーでセンサーに電力を供給します。


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519884/image_XZETiBWTBz.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

:::info ヒント
別のプロトコル（例: 4-20mA）を使用している場合は、以下のピンテーブルを参照してください:
:::


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519889/image_RHiaxQkid9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) センサーを組み立てます。



<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519904/image_6qTGLlXoOZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>




<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519908/image_LDPEOEC9ik.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>



<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519912/image_jStYF3uKW6.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### アプリでセンサーを設定

1) SenseCAP Appを開いてログインします。

2) 「S2100 Data Logger」を選択し、設定ページで「Setup」をクリックします。



<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519915/image_au0YfmfVoo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) ボタンを押して3秒間保持すると、緑色のLEDが1秒間隔で点滅します。その後、「Scan」をクリックしてデータロガーのBluetoothをスキャンします。

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520082/video_ZKG2GDw54j.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>


4) LoRaWANおよびセンサーのパラメータ（RS485 Modbus-RTUコマンドを含む）を設定します。



<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520084/image_tAKr7NohSn.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

```cpp
#########基本設定#############
プラットフォーム: 
    -SenseCAP for helium (Heliumネットワークを使用)
    -SenseCAP for The Things Network (SenseCAPゲートウェイを使用)
周波数プラン: EU868 (ゲートウェイの周波数または地域に基づいて選択)
アップリンク間隔: 5分
パケットポリシー: 2C+1N (デフォルトのパラメータを使用)

#########センサー設定#############
プロトコル: RS485 Modbus RTU
ボーレート: 9600
Modbusアドレス: 128 (センサーのModbusアドレス)
電力タイプ: 定期的電力供給 (データ収集前にセンサーに電力を供給し、データ収集後にセンサーの電力をオフ)
電圧: 5V
センサーウォームアップ時間: 100ms
応答タイムアウト: 100ms
起動時間: 100ms
測定数: 2 (距離と温度)

#########測定1#############
レジスターアドレス: 256 (DEC)
ファンクションコード: 03
データタイプ: Unsigned 16bit integer,0xAB
精度: 0,# (小数点なし)
FactoryA: 1 (Y=Ax+B, “Y”: データロガーがアップロードする値。
“x”: 現在の元の値。生の値のみをアップロードする場合はA=1、B=0を設定。)
FactoryB: 0
書き込み戦略: なし

#########測定2#############
レジスターアドレス: 258 (DEC)
ファンクションコード: 03
データタイプ: Unsigned 16bit integer,0xAB
精度: 0,# (小数点なし)
FactoryA: 0.1 (最終値は10で割られる)
FactoryB: 0
書き込み戦略: なし
```

5) 「送信」をクリックし、「測定」をクリックしてセンサーをテストします。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520088/image_iAmOflFRIQ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

センサーの距離と温度が正常に取得されました！

### データを SenseCAP ポータルと Mate アプリにアップロードする

データをアップロードする前に、ゲートウェイが正常に動作しているか、Heliumネットワークのカバレッジがあることを確認してください。

1) アプリがホームページに戻り、Bluetooth接続が切断されます。データロガーは LoRaWAN ネットワークへの接続を試みます。

LoRaネットワークへの接続待機中: 赤い呼吸ライトが点滅  
LoRaネットワークへの接続成功: 緑色のLEDが2秒間高速点滅

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520108/video(1)_yWY0orezqU.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

2) QRコードをスキャンしてデータロガーをバインドします。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520115/image_9JdYx3MCrg.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3) アプリとポータル (https://sensecap.seeed.cc/) でデータを確認します。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520128/image_K6j6TDHXX4.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### 実際の環境でセンサーをテストする

屋外の実際のシーンに迅速に適用し、長期的なモニタリングを行います。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520150/image_MoA2h9E8lq.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

現在、LoRaWAN センサーが開発されています。

ぜひ新しいソリューションを試して、あなたのプロジェクトに活用してください！

### リソース

[5分で産業用 LoRaWAN センサーを開発する](https://www.hackster.io/jenkinlu001/5-minutes-to-develop-an-industrial-lorawan-sensor-6631dc)

[SenseCAP S2100 データロガー ユーザーガイド](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)