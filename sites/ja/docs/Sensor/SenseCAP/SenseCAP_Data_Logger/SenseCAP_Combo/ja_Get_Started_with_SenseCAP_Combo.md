---
description: Get_Started_with_SenseCAP_Combo
title: SenseCAP Combo を使い始める
keywords:
  - SenseCAP Combo
  - データロガー
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /get_started_with_sensecap_combo
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/ja/get_started_with_sensecap_combo/
---

# SenseCAP Combo を使い始める

この章では、SenseCAP Combo 5-in-1 Sensor with 4G を素早くセットアップし、SenseCAP クラウドプラットフォームに接続する方法を説明します。

:::tip note
SenseCAP Combo 5-in-1 Sensor with 4G は、4G Cat.1 接続と MQTT プロトコルを使用して、SenseCAP クラウドプラットフォームまたは独自のサードパーティ MQTT サーバーにデータをアップロードします。設置エリアでセルラー通信が利用可能な有効な Micro SIM カード（3FF）を必ず用意してください。
:::

### 動作環境

SenseCAP Combo は、安定した性能とバッテリーの安全性を確保するため、特定の温度範囲内で確実に動作するように設計されています。性能の低下やバッテリーの問題を避けるため、必ずこの温度範囲内で使用および充電してください。

| パラメータ | 仕様 |
|---------|---------------|
| 動作温度 | 0°C ~ 40°C |
| 充電温度 | 0°C ~ 40°C |
| 動作湿度 | 0 ~ 100% RH（結露なきこと） |

:::caution note
本機の動作温度は、同梱の電源アダプタによって制限されており、電源アダプタの対応動作温度範囲は 0°C ～ 40°C です。

電源アダプタは屋内専用です。電源アダプタを屋外環境に直接さらさないでください。適切な保護を確保するため、電源アダプタは防水エンクロージャまたは電気キャビネット内に設置する必要があります。
:::
<br />

## SIM カードの取り付け

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/14.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

1. 「SIM」と表示されたゴムカバーを開け、金属ホルダーを持ち上げます。
2. SIM カードをスロットに挿入し、金属ホルダーで固定してから、ゴムカバーをしっかり閉めます。


:::caution note
SIM カードを取り付けた後、ゴムカバーが完全に密閉されていることを確認してください。そうしないと、本機の防水性能に影響を与える可能性があります。
:::

<br />

## センサー接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/15.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

本機には、外部 Modbus-RTU センサーを接続するための RS-485 ポートが用意されています。

1. インターフェースの保護キャップを外し、センサーを RS-485 ポートに接続します。
2. センサーを接続した後、航空コネクタが確実に締め付けられていることを確認してください。コネクタを使用しない場合でも、水の侵入や機器の損傷を防ぐため、必ず締め付けてください。

:::caution note
1. 本機の電源を入れる**前に**センサーを接続してください。そうしないと、センサーが検出されない場合があります。その場合は、本機を再起動してください。
2. 分岐ケーブルを使用する場合、同じ Modbus アドレスを持つセンサーを RS-485 インターフェースに接続しないでください。
3. 12V センサーを接続する場合は、本機を外部 DC 電源で給電する必要があります。
:::

<br />

## SenseCAP クラウドプラットフォームへの設定

設置前に、本機が正常に動作し、データをアップロードできることを確認してください。

### ステップ 1. SenseCraft APP をダウンロード

App Store または Google Play から SenseCraft APP をダウンロードし、本機を管理します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### ステップ 2. 新規アカウントの作成

SenseCraft APP または PC から SenseCAP クラウドプラットフォーム（[https://sensecap.seeed.cc/portal](https://sensecap.seeed.cc/portal)）にアクセスし、アカウントを作成してください。

1. "Register" をクリックし、メールアドレスを入力して送信します。確認メールが送信されます。
2. "SenseCAP" からのメールを開き、リンクをクリックして登録を完了します。
3. アプリを開き、"Global Server" を選択して、アカウントとパスワードを入力し、ログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/login-page.PNG" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

### ステップ 3. デバイスのバインド

1. "Devices" ページに移動します。右上の "+" アイコンをクリックします。
2. 本機のラベルにある QR コードをスキャンして、デバイスをバインドします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-new.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

<br />

## デバイスの電源オン（インジケータ状態）

電源を入れる前に、センサーと SIM カードが取り付けられていることを確認してください。

:::caution note
センサーを取り付ける際は、本機の電源がオフになっていることを確認してください。そうしないと、外部センサーが検出されない場合があります。
:::

本機底部の金属ボタンを押します。赤色インジケータが点灯します。本機がオンラインになるまで約 3 分待ちます。（時間はセンサーの数と種類によって異なります。センサーが多いほど時間が長くなります。）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/1.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

:::note
1. 本機には充電用のソーラーパネルが内蔵されています。
2. 12V センサーを使用する場合は、外部アダプタが必要です。アダプタを使用する際は、防水保護を適切に行ってください。
:::

<br />

## データとステータスの確認

アプリまたは PC から、本機のデータとステータスを確認できます。

### SenseCraft APP 経由

デバイスをバインドしてオンラインになった後、アプリ上で直接データを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/2.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### SenseCAP Portal 経由

[https://sensecap.seeed.cc](https://sensecap.seeed.cc) にアクセスしてログインし、"Data" をクリックしてデータが正常にアップロードされているか確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/3.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## SenseCAP API

SenseCAP API は、ユーザーが IoT デバイスとデータを管理するためのものです。HTTP プロトコル、MQTT プロトコル、Websocket プロトコルの 3 種類の API メソッドが含まれます。

- HTTP API を使用すると、ユーザーは LoRa デバイスを管理し、生データや履歴データを取得できます。
- MQTT API を使用すると、ユーザーは MQTT プロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket API を使用すると、ユーザーは Websocket プロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については、[API User Guide](https://sensecap-docs.seeed.cc/) を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/16.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## 一般設定

サーバーアドレスの設定、センサーの追加、送信間隔の変更を行うには、PC 用設定ツールを使用します：

- ツールのダウンロード: [SenseCAP Sensor Hub Configuration Tool NG](https://github.com/Seeed-Solution/SenseCAP-Sensor-Hub-Configuration-Tool-NG/releases)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/4.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

- ドライバ（初回使用時）: [CH341 USB Driver](https://wch-ic.com/downloads/CH341SER_EXE.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/5.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### MQTT サーバー設定

1. USB Type-C ケーブルを使用して、本機を PC に接続します。
2. ツールを開き、COM ポートを選択し、"Enter configuration mode automatically on device's booted" を有効にして "Connect" をクリックし、その後金属ボタンを押します。（"General Settings" と "Sensor Settings" ボタンが濃い青色に変わります。）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/6.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

3. "General Settings" をクリックします。右側のパネルにデバッグメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/7.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

4. 入力エリアをクリックし、**b** と入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/8.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

5. コマンド **2** を入力した後、Enter キーを押します。新しいクラウドプラットフォーム 2 に切り替わったことを示します。

:::note
- **1** は SenseCAP クラウドプラットフォーム（デフォルト）
- **2** はユーザーのサードパーティ MQTT サーバー
- **3** は SenseCAP のプライベートデプロイ
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/9.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

6. "General Settings" をクリックします。MQTT サーバーアドレス、ポート、ユーザー名、パスワードを入力し、"Write" をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/10.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### データ送信間隔 & CO₂ 送信間隔

- **Reporting interval:** CO₂ 以外のすべてのセンサーに適用される送信間隔
- **CO₂ interval:** 送信間隔の倍数

設定後に "Write" をクリックします。

:::note
送信間隔が短すぎると、ソーラー充電速度が放電速度を下回り、本機が充電できなくなる可能性があります。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/11.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### APN 設定

必要に応じて APN、ユーザー名、パスワードを入力します。デフォルトは自動です。

### キャッシュデータのエクスポート

"Export Cache Data" をクリックして、すべての履歴データをエクスポートします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/12.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### サーバーへのデータアップロードの確認

サーバーを設定した後：

1. ツールを閉じる
2. USB ケーブルを取り外す
3. 金属ボタンを押して本機を再起動する

数分待ってから、MQTT 購読ツールを使用してトピック形式に従ってメッセージを購読し、本機のデータを受信できるか確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/13.png" alt="SenseCAP Combo で始める" width={800} height="auto" /></p>


<br />

## トラブルシューティング

### クラウドプラットフォーム上でのセンサーチャンネル状態の異常

- 通常、動作中にセンサーが切断されたことが原因です。

### [ERROR] No sensor found. Is the sensor connected?

次の点を確認してください：

- センサーの配線順序（正極/負極/RS485 A、B）が正しいことを確認してください；
- センサーの Modbus アドレスが「Sensor Settings」で設定したアドレスと一致していることを確認してください；
- センサーの電源供給方式が正しく設定されていることを確認してください；
- ウォームアップ時間、起動時間、および応答タイムアウト時間がセンサーの要件を満たしていることを確認してください；
- 測定値用のファンクションコードおよびレジスタが正しく設定されていることを確認してください；

### [ERROR] RS485 err code: XX

一部のセンサーはウォームアップ時間を必要とします。このウォームアップ時間に達する前に通信を開始すると、センサーはファンクションコードエラーを返します。

センサーをテストする際、最初のステップはセンサーが存在するかどうかを確認することです。この確認ではウォームアップ時間ではなく、起動時間だけを待てば十分です。例えば、センサーの起動時間が 1 秒、ウォームアップ時間が 5 分であり、データ収集ユニットがセンサーに電源を入れた後、1 秒だけ待って通信を試みた場合、ファンクションコードエラーが返されます。ウィンドウには「[ERROR] rs485 err code」と表示されます。データ取得時には、通信の前にウォームアップ時間を待機してから行うことで、データ取得を確実にします。

<br />

## 取り付けと注意事項

### 低温環境で内蔵バッテリーを使用する場合

- 放電温度範囲：0°C ～ 50°C
- 充電温度範囲：0°C ～ 40°C

本製品にはリチウムバッテリーが内蔵されているため、ソーラーパネルまたはアダプターを使用する場合は次の点に注意してください：

1. 周囲温度が 0°C 未満の状態が続く場合、周囲温度が 0°C を上回るまでバッテリーは充電されません。
2. 充電が停止している期間中にバッテリーが完全に放電した場合、ソーラーパネルやアダプターだけでは装置を動作させることはできません。周囲温度が 0°C を上回り、リチウムイオンバッテリーが安全レベルまで充電されるのを待ってからでないと、装置は正常に動作しません。
<br />

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>