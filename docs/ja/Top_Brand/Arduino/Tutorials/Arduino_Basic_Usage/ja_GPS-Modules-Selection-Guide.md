---
description: GPS-Modules-Selection-Guide
title: GPSモジュール選定ガイド

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/GPS-Modules-Selection-Guide
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---


近年、さまざまな種類のGPSモジュールをリリースしてきました。それらを詳しく見て、あなたに最適なものを見つけましょう！

すべてのGPSまたは通信モジュールについては、[Seeed Studio Bazaar](https://www.seeedstudio.com/)をクリックして確認してください。

## GPSとGPSモジュールの紹介

グローバルポジショニングシステム（GPS）デバイスの1つは、衛星からのデータを利用して地球上の特定の地点を特定する「三辺測量」と呼ばれるプロセスを使用します。一方、GPS受信機は、無線信号を使用して衛星までの距離を測定し、三辺測量を行います。三辺測量は角度を測定する三角測量に似ており、以下の図で説明されています（Tim Gunther, 2020）。GPSモジュールには小型プロセッサとアンテナが含まれており、専用のRF周波数を介して衛星から送信されるデータを直接受信します。これにより、モジュールは各可視衛星からタイムスタンプを受信し、その他のデータも受信します。モジュールのアンテナが4つ以上の衛星を検出できる場合、位置と時間を正確に計算することができます。

よく知られている4つのグローバルナビゲーション衛星システムには、GPS、BDS（北斗）、GLONASS、GALILEOがあります。最も早く登場したのはアメリカのGPS（グローバルポジショニングシステム）で、現時点で最も完成された技術です。BDS、GLONASS、GALILEOは世界の他の主要な衛星ナビゲーションシステムとなり、現在近代化が進行中です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/28251.jpg" /><figcaption><b>図1</b>. <i> 3つの衛星が正確な位置を三角測量する地球のイラスト (Tim Gunther, 2020) </i></figcaption></div>

以下の2つのGPSモジュールを紹介し、比較します：

- [Grove – GPSモジュール](https://wiki.seeedstudio.com/ja/Grove-GPS/)  
- [Grove – GPS(Air530)](https://wiki.seeedstudio.com/ja/Grove-GPS-Air530/)

これらのGPSモジュールはArduinoおよびRaspberry Piと互換性があり、簡単に試してみることができます。**Grove - GPS(Air530)**に搭載されているAir530モジュールは、高性能で高度に統合されたマルチモード衛星測位およびナビゲーションモジュールです。GPS / 北斗 / GLONASS / Galileo / QZSS / SBASをサポートしており、車のナビゲーション、スマートウェア、ドローンなどのGNSS測位アプリケーションに適しています。また、Air530モジュールはNMEA 0183 V4.1プロトコルをサポートしており、以前のバージョンとも互換性があります。

一方、**Grove - GPSモジュール**のE-1612-UBモジュールシリーズは、高性能なu-blox 5測位エンジンを搭載したスタンドアロンGPS受信機のファミリーです。50チャンネルのu-blox 5測位エンジンは、1秒未満のTime-To-First-Fix（TTFF）を誇ります。専用の取得エンジンは100万以上の相関器を備えており、大規模な並列時間/周波数空間検索を可能にし、衛星を瞬時に見つけることができます。

## 動作原理

GPSモジュールの原理を理解することは、購入前に重要です。以下の表は関連情報を提供しています。

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-q854{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-uxnu{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
<!-- <table class="tg" style="undefined;table-layout: fixed; width: 791px">
<colgroup>
<col style="width: 200px">
<col style="width: 591px">
</colgroup>
<thead>
  <tr>
    <th class="tg-5hs1">GPSモジュールの用語</th>
    <th class="tg-5hs1">動作原理</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-q854"><br><br>DGPS<br></td>
    <td class="tg-uxnu">DGPSは、既知の正確な三次元座標を使用して疑似距離補正量または位置補正量を取得する差分GPS基準局であり、この補正量をユーザー（GPSナビゲーター）にリアルタイムまたは後で送信して、ユーザーの測定データを修正し、GPSの位置精度を向上させます。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>チャネル</td>
    <td class="tg-uxnu">GPSモジュールが動作するチャネル数は、最初の位置確定時間（TTFF）に影響を与えます。モジュールが衛星を探していることを知らない場合、一度により多くの周波数/チャネルをチェックでき、それに応じて修正を迅速に見つけることができます。モジュールがロックまたは修正された後、一部のモジュールは余分なチャネルブロックを閉じて電力を節約します。</td>
  </tr>
  <tr>
    <td class="tg-q854">TTFF</td>
    <td class="tg-uxnu">最初の位置確定時間。GPS受信機が電源オン後に位置を取得するのに必要な時間を詳細に示す仕様です。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br><br>NMEA</td>
    <td class="tg-uxnu">NMEAは、海洋電子機器のためにNational Marine Electronics Associationによって開発された標準フォーマットです。NMEAデータは文として表示され、GPSモジュールのシリアル送信（TX）ピンから送信されます。"GGA"は最も一般的に使用されるフォーマットであり、位置決定時間、緯度、経度、高度、位置決定に使用される衛星の数、DOP値、差分ステータスおよび補正期間などを含みます。</td>
  </tr>
  <tr>
    <td class="tg-q854">更新レート</td>
    <td class="tg-uxnu">更新レートは、GPSモジュールが位置を再計算し報告する頻度を指します。</td>
  </tr>
  <tr>
    <td class="tg-q854">ボーレート</td>
    <td class="tg-uxnu">ボーレートは、シリアルラインを介してデータが送信される速度を指します。ボーレートが高いほど、GPSデータがより速く送信されます。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>感度</td>
    <td class="tg-uxnu">dBm値は、GPSモジュールが周波数をキャプチャする能力を示します。dBm値が高いほど、モジュールが衛星信号をより良く受信できることを示します。</td>
  </tr>
  <tr>
    <td class="tg-q854">電力要件</td>
    <td class="tg-uxnu">GPSモジュールはかなりの電力を消費する可能性があります。平均は3.3Vで30mAです。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>アンテナ<br></td>
    <td class="tg-uxnu">各アンテナは、1.5752 GHzのGPS L1周波数を受信するように設計されています。アンテナの位置と設計は、GPSの最適な性能にとって重要です。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>精度<br></td>
    <td class="tg-uxnu">距離が短いほど＝精度が高いことを意味します。通常、30秒以内に位置を特定し、±10m以内で、ほとんどのモジュールは±3mまで精度を向上させることができます。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>ホットスタート<br></td>
    <td class="tg-uxnu">最後に電源がオフになった場所であまり移動がなく、最後の位置決定から2時間未満の場合を指します。この場合、GPSチップは以前の暦表を使用してソフトウェアを介して迅速に衛星を検索し、数秒で位置決定を達成します。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>ウォームスタート</td>
    <td class="tg-uxnu">最後の位置決定から2時間以上経過している場合を指し、検索時間はコールドスタートとホットスタートの間になります。</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>コールドスタート<br></td>
    <td class="tg-uxnu">モジュールの電源が長時間オフになり、バックアップコンデンサが消失した場合、データが失われます。次回電源を入れると、GPSは新しい暦表と暦データをダウンロードする必要があります。</td>
  </tr>
</tbody>
</table> -->

## 適用分野

GPSモジュールには多くの利用方法があります。特に、これらのGPSモジュールの応用によって多くの社会活動が展開可能です。そのため、GPSモジュールは環境測定、交通、緊急救助、農業、エンターテインメントなど、さまざまな分野で重要な役割を果たしています。

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-5z8m{background-color:#FFF;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-ut4k{background-color:#FFF;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
| 適用分野 | 機能 |
|---------|------|
| 測定 | 搬送波位相差分技術（RTK）を使用して、2つの観測ステーションの搬送波位相をリアルタイムで処理し、精度はセンチメートルレベルです。測定結果はWGS84座標で統一され、情報は自動的に受信および保存されるため、煩雑な中間処理を削減します。 |
| 交通 | GPSモジュールは、自律航行、港湾管理と進入ガイダンス、ルート交通管理、追跡と監視に使用できます。車載機器はGPSを使用して正確な位置を特定し、電子地図とリアルタイムの交通状況を組み合わせて最適なルートを自動的に選択し、車両の自律航行を実現します。 |
| 緊急救助 | GPS位置特定技術を使用して、消防、救急車、警察の緊急派遣を行い、火災、犯罪現場、交通事故、交通渋滞などの緊急事態に対する緊急対応部門の効率を向上させます。GPSモジュールを搭載した漁船は、危険な状況が発生した際に迅速に位置を特定し、警報を発することで、より迅速かつタイムリーに救助を受けることができます。 |
| 農業 | GPSモジュールは、収量監視、土壌サンプル収集などを含む農地情報の位置特定と取得に使用されます。コンピューターシステムはデータを分析・処理することで農地区画の管理措置を決定し、収量と土壌状態の情報をGPS機器にロードします。スプレー散布機では、農地に正確に肥料を散布し、噴霧を行うことができます。 |
| エンターテインメント | GPSモジュールを通じて、人々は見知らぬ都市で目的地を迅速に見つけ、最適なルートで移動できます。キャンプをする人々はGPS受信機を携帯して適切なキャンプ地を迅速に見つけることができ、迷子になる心配がありません。さらに、一部の高級ビデオゲームではGPSシミュレーション技術も使用されています。 |

## Seeed の GPS モジュール

| 名前 | サムネイル | サイズ | 更新レート | ボーレート | ナビゲーション感度 | 電力要件 | チャンネル数 | 初回起動時間 | アンテナ | 精度 | 購入リンク |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|--------------------------|
| [Grove – GPS Module](https://wiki.seeedstudio.com/ja/Grove-GPS/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/gps-module.jpg"/>|40mm x 20mm x 13mm|1Hz, 最大10Hz|9,600bps – 115,200bps|-160dBm|3.3V - 5V|22トラッキング、66チャンネル|コールドスタート: 13秒; ウォームスタート: 1-2秒; ホットスタート: &lt;1秒|アンテナ付属|2.5m GPS水平位置精度|[今すぐ注文](https://www.seeedstudio.com/Grove-GPS-Module.html?utm_source=blog&utm_medium=blog)|
| [Grove – GPS (Air530)](https://wiki.seeedstudio.com/ja/Grove-GPS-Air530/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/03_11.png"/>|40mm x 20mm x 13mm|/|デフォルト 9,600bps|-148dB|3.3V - 5V|/|コールドスタート: 27秒; ウォームスタート: 4秒;|アンテナ付属|2.5m 水平位置精度|[今すぐ注文](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

### どちらのGPSモジュールが優れているか

#### より良い電力消費

**Grove – GPS (Air530)** は超低消費電力で、わずか31uA、低電力モードでは0.85mAで動作します。そのため、より低消費電力のGPSモジュールとして優れています。

#### 拡張性

最大更新レートが高い**Grove - GPS**は、より高速で移動する物体を含むプロジェクトに使用することができます。さらに、より多くのチャンネルを開放することで、他の用途にも対応可能です。**Grove- GPS (Air530)**はマルチモード衛星測位とナビゲーションを備え、同時に6つ以上の衛星をサポートします。

#### 精度

水平位置精度2.5m、高位置精度3.5m、速度精度0.1m/s、時間転送精度30nsを特徴とする**Grove - GPS (Air530)**は、信号が悪い状況でも迅速かつ正確に位置を特定することができます。

## プロジェクト

**GPS/GPRSトラッカーのプロジェクト**: この新しいプロジェクトでは、GPSトラッカーをGPRS技術とMQTTプロトコルを使用して接続する方法を紹介します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

**車両追跡システム**: GPSモジュールを選んだら、ArduinoとGPSモジュールを使ってできるプロジェクトをいくつか紹介します。詳細情報は[こちら](https://create.arduino.cc/projecthub/muchika/vehicle-tracking-system-based-on-gps-and-gsm-57b814?ref=tag&ref_id=gps&offset=15)をご覧ください。

<iframe frameborder='560' height='327.5' scrolling='no' src='https://hackster.imgix.net/uploads/attachments/1038379/FZNOC7NK0MP38U3.jpg?auto=compress%2Cformat&w=900&h=675&fit=min' width='350'></iframe>

**LEDバイクスピードメーター**: 自分がどれだけ速く走っているか知りたいですか？このDIYバイクスピードメーターでは、GPS技術を使用して速度を測定し、どれだけ速く走っているかを確認できます。また、速度をライダーに示すRGB LEDも搭載しています。詳細情報は[こちら](https://create.arduino.cc/projecthub/JeremySCook/gps-led-bike-speedometer-c8f956?ref=tag&ref_id=gps&offset=26)をご覧ください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=CeStrH-5Llo&feature=emb_rel_end" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**個人GPSアシスタント**: このプロジェクトは、人や物を監視し、その位置や接続されたセンサーの値を継続的に知らせるデバイスです。センサーの制限値を設定する機能があり、これを超えるとSMSアラートが送信されます。また、特定の場所からの制限を設定することができ、デバイスがそのエリアを離れると通知が届きます。さらに、SMSを通じてデバイスと通信し、情報を取得することも可能です。

詳細情報は[こちら](https://create.arduino.cc/projecthub/Momy93/sandro-your-personal-gps-assistant-26dfa3?ref=tag&ref_id=gps&offset=32)をご覧ください。

<div class="video-container">
<iframe width="560" height="315" src="https://youtu.be/3lcP4YtxlCg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## リソース

**[参考]** [三角測量に関する Tim Gunther, National Geographic (2020)](https://www.nationalgeographic.org/photo/triangulation-sized/)

**[ZIP]** [E-1612-UB データシート](https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf)

**[ZIP]** [Air530 データシート](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)

## 技術サポート & 製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。

<br />
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>