---
description: SenseCAP LoRaWAN スターターキットで始める
title: SenseCAP LoRaWAN スターターキットで始める
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/M2_Kit_Getting_Started
sidebar_position: 0
last_update:
  date: 05/15/2025
  author: Specner
---


# **概要**

## **LoRaWAN の基本**

LoRaWAN（Long Range Wide Area Network）は、IoT（モノのインターネット）アプリケーション向けに特別に設計された低消費電力・長距離のワイヤレス通信プロトコルです。IoTデバイスに対して長距離かつ低消費電力の通信能力を提供します。LoRaWAN の主な特徴は以下の通りです：

- 長距離通信
- 低消費電力
- 公共またはプライベートでの展開が可能
- 大規模なデバイス接続

これらの特性により、スマート農業、スマートシティ、環境モニタリングなどのワイヤレスセンシングアプリケーションで広く利用されています。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/1.png
"/></div>

LoRaWAN についてさらに詳しく知りたい方は、こちらをクリックしてください。

## **SenseCAP LoRaWAN スターターキット**

SenseCAP LoRaWAN スターターキットは、ユーザーがLoRaWANに関する実践的な知識を迅速に習得し、応用できるようにすることを目的としています。このキットには、NM2マルチプラットフォームゲートウェイ、XIAOS3、Grove Wio-E5、温湿度センサー、土壌水分センサー、その他の拡張可能なGroveが含まれており、ユーザーがLoRaWANアーキテクチャを実際に学び、自分自身のプロジェクトをさらに開発することを可能にします。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/2.jpg" /></div>

このLoRaWANスターターキットは、ノード、ゲートウェイ、さらにはSenseCAPクラウドプラットフォームを含むLoRaWANアーキテクチャのすべてのコンポーネントを備えています。このキットは、LoRaWAN技術を完全に体験できる包括的な機能を提供します。このキットを使用することで、距離テスト、ネットワークテスト、プロジェクト開発など、さまざまな実践的な活動に参加できます。実際のアプリケーションを通じてその性能と機能を検証する完全なソリューションを提供します。初心者から経験豊富な開発者まで、このキットはLoRaWANの学習と実践的なニーズに対応します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" /></div>

関連製品：

|名前|説明|
| :- | :- |
|[S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S210x)|一連のワイヤレスLoRaWAN®産業用センサー。|
|[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)|MODBUS-RTU RS485/アナログ/GPIOセンサーに接続し、センサーからLoRaWANネットワークへデータを送信可能。|
|[M2マルチプラットフォームLoRaWAN屋内ゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)|異なるネットワークサーバーへの接続をサポートする標準的なLoRaWAN®ゲートウェイ。|
|[Wio-E5開発キット](https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html)|Wio-E5 STM32WLE5JC LoRaモジュールの強力な性能を引き出すための使いやすいコンパクトな開発ツールセット。|

# **はじめに**

## **準備**

### **ハードウェア**

**電子部品**

キットには以下の電子部品が含まれているはずです。すべて揃っているか確認してください。    
**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg" /></div>

プロジェクトを開始する前に、XIAOボードにヘッダーをはんだ付けし、アンテナを取り付ける必要があります。

**ヘッダーのはんだ付け**

XIAO ESP32S3はデフォルトでピンヘッダーが付属していません。ピンヘッダーを準備し、XIAOの対応するピンにそれをはんだ付けする必要があります。これにより、拡張ボードやセンサーに接続できるようになります。

XIAO ESP32S3は非常に小型のため、ヘッダーをはんだ付けする際には注意が必要です。異なるピンを接触させたり、シールドや他の部品にハンダを付けないようにしてください。これを怠ると、XIAOがショートしたり正常に動作しなくなる可能性があり、その結果はユーザーの責任となります。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/5.png" /></div>

**アンテナの取り付け**

XIAO ESP32S3の前面左下には独立した「WiFi/BTアンテナコネクタ」があります。WiFi/Bluetooth信号をより良くするために、パッケージ内のアンテナを取り出し、コネクタに取り付ける必要があります。

アンテナの取り付けには少しコツがあります。直接強く押し込もうとすると、非常に難しく指が痛くなることがあります。正しい取り付け方法は、まずアンテナコネクタの片側をコネクタブロックに入れ、次にもう片側を少し押し込むことで、アンテナが取り付けられます。

アンテナを取り外す際も同様です。力任せにアンテナを直接引っ張らず、片側を持ち上げるようにすると簡単に取り外せます。
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/6.png" /></div>

### **ソフトウェア**
組み込みのSenseCAPクラウドプラットフォームを使用するか、The Things NetworkのようなサードパーティのLoRaWANネットワークサーバーを使用することができます。最適なユーザー体験を得るために、SenseCAPクラウドプラットフォームの使用を推奨します。以下に関連リンクを示します。

1. [SenseCAPポータル](https://sensecap.seeed.cc/portal/#/login)のWebページを開く

SenseCAP Mate APPをダウンロードするためにスキャン
<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/7.png" /></div>


# **LoRaWANスターターキットでの簡単かつコード不要の初期設定**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/8.png" /></div>


## **ステップ1 電源を入れてインターネットに接続**

キットには[SenseCAP Multi-Platform LoRaWAN Indoor Gateway(SX1302) - EU868 - Seeed Studio](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)が含まれており、これは異なるネットワークサーバーに接続をサポートする標準的なLoRaWAN®ゲートウェイです。個人のLoRa開発だけでなく、産業用センサーと組み合わせて使用することもできます。このWikiでは、データストリームがSenseCAPクラウドを通過します。このゲートウェイで実行されるデフォルトモデルはSenseCAPであるため、追加設定は不要です。ゲートウェイの電源を入れ、ETHまたはWIFIでインターネットに接続するだけです。

### **ETHケーブルに接続**

最速の方法 - イーサネットケーブルをイーサネットポートに接続し、ゲートウェイがインターネットに正常に接続されると、上部のインジケーターが緑色の点灯を示します。

### **Luciを介してWIFIに接続**

ユーザーがLuci設定ページにログインする方法は2つあります。

**ルーター経由でアクセス**

1. ゲートウェイをイーサネットケーブルに接続し、PCを同じルーターに接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/9.png" /></div>
 

**注意**: PCとデバイスは同じルーター/ネットワークに接続されている必要があります。

2. ルーター管理ページでデバイスのIPアドレスを確認します。
3. デバイスのユーザー名とパスワードを取得します。デバイスラベルにユーザー名とパスワードが記載されています。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/10.png" /></div>

4. ブラウザにデバイスのIPアドレスを入力してLuciページにアクセスします。その後、デバイスのユーザー名とパスワードを入力してログインします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/11.png" /></div>


**デバイスのAPホットスポット経由でアクセス**

1. ボタンを5秒間押し続け、青色のインジケーターがゆっくり点滅するまで待ち、設定モードに入ります。
2. APホットスポット名はSenseCAP_XXXXXX（6桁のMACアドレス）、デフォルトのパスワードは12345678です。コンピュータをこのAPホットスポットに接続します。

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/12.png" /></div>

3. デバイスのユーザー名とパスワードを取得します。デバイスラベルにユーザー名とパスワードが記載されています。

4. ブラウザにIPアドレス（192.168.168.1）を入力してローカルコンソールにアクセスします。その後、デバイスのユーザー名とパスワードを入力し、ログインボタンをクリックします。

**WIFIに接続**

ネットワーク - ワイヤレスをクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/13.png" /></div>

スキャンボタンをクリックしてWIFIをスキャンします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/14.png" /></div>

ネットワークに参加するために、使用するWIFIを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/15.png" /></div>

Wi-Fiパスワードを入力し、送信をクリックして保存します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/16.png" /></div>

次に、「Save and Apply」をクリックして設定を適用します。

ゲートウェイがWi-Fiに正常に接続されると、上部のインジケーターが緑色の点灯状態を示します。

## **ステップ2 ノードを接続する**
Grove-Capacitive Soil Moisture Sensor、Temperature & Humidity Sensor、および Grove-Wio-E5 Wireless モジュールを XIAO Expansion Board に挿入します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/17.png" /></div>

## **ステップ3 Grove-Wio-E5 のQRコードをスキャンする**

使用しているモバイルシステムに応じて対応するバージョンの SenseCAP Mate アプリをダウンロードした後、アプリを開きます。初めて SenseCAP プラットフォームを使用する場合は、まずアカウントを登録してください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/18.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/19.png" /></div>

右上の「+」をクリックし、「Add device」を選択して Grove-Wio-E5 をバインドします。

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/20.png" /></div>

カメラの中央のボックスを Grove-Wio-E5 の背面にあるQRコードに合わせてスキャンし、キットをバインドします。Grove-Wio-E5 の前面にあるQRコードはスキャンしないでください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/21.png" /></div>

## **ステップ4 データを確認する**
SenseCAP Mate アプリを使用してバインドが成功すると、アプリ上にセンサーのデータが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/22.jpg" /></div>

:::tip

SenseCAP Mate アプリはデータ情報を自動的に更新しません。センサーページで手動で下にスクロールしてデータを更新する必要があります。10分以上新しいデータが表示されない場合は、Wio Terminal の側面ボタンを一度下げて再起動を試みてください。
:::

## 付録

- [ネイティブファームウェアコード](https://github.com/Seeed-Solution/lorawan-kit)