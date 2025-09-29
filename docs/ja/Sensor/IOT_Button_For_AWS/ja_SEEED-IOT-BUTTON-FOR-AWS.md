---
description: SEEED IOT BUTTON FOR AWS
title: SEEED IOT BUTTON FOR AWS
keywords:
- IOT_Button_For_AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SEEED-IOT-BUTTON-FOR-AWS
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Side.png)

Seeed IoT Button For AWSは、Wi-Fiベースのプログラム可能なボタンで、設定が簡単で使いやすいデバイスです。このボタンを使用することで、顧客に時間のかかるアンケートを負担させることなく、迅速なフィードバックを収集できます。このデバイスは、[AWS IoT 1-Clickサービス](https://docs.aws.amazon.com/iot-1-click/latest/developerguide/what-is-1click.html)を使用して、既存のビジネスワークフローやシステムに簡単に統合できるように設計されています。また、このIoTボタンは公式のAWS IoT 1-Click iOSアプリおよびAndroidアプリと完全に互換性があります。このデバイスのバッテリーはNCR18650B充電式リチウムイオンバッテリーです。パッケージにはバッテリーが含まれていないため、顧客自身で準備する必要があります。推奨されるバッテリーはPanasonic NCR18650B 3.6V 3400mAhです。このIoTボタンにはブラケットが付属しており、壁やその他の表面に貼り付けてボタンを簡単に取り付けたり取り外したりできます。Seeed IoT Button For AWSは、シングルクリック、ダブルクリック、長押しの3種類のクリックをサポートし、異なるインジケーション用の3つのLEDを備えています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Seeed-IoT-Button-for-AWS-p-4527.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- シングル/ダブル/長押しクリックイベント
- オンボードの電源/イベント/Wi-Fi設定ステータスLED
- Realtek RTL8720DN搭載、デュアルバンド2.4GHz / 5GHz Wi-Fi
- 取り外し可能で充電可能なNCR18650Bバッテリー
- バッテリー極性逆転保護とインジケーション
- USB Type-C充電
- 貼り付け可能なブラケット

## 仕様

|パラメータ|値|
|---|---|
|サイズ|92\*32\*25mm|
|MCU|Realteak, RTL8720DNL 20MHz Cortex M0; 200MHz Cortex M4F|
|フラッシュ|4MB |
|ボタン| 100,000回のサイクル|
|LED|RGB|
|Wi-Fi|802.11 a/b/g/n 2.4GHz & 5GHz|
|Bluetooth|BLE 5.0|
|バッテリー|3.6Vリチウムイオン18650充電式バッテリー|
|充電インターフェース|USB Type-C|
|充電電流|500mA|
|充電時間|4-6時間（バッテリー容量による）|
|バッテリー保護|過充電、過電流、過放電、逆極性保護|
|ファームウェア更新|OTA対応|

## ハードウェア概要

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" /></a></p>
</figure>
</div>

### LEDステータスインジケーション

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>電源LEDステータス</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>インジケーション</th></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>バッテリー逆挿入</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>赤</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>バッテリー充電中</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>緑点灯</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>バッテリー充電完了</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>緑消灯</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>イベントLEDステータス</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>インジケーション</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>赤点灯</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>証明書がフラッシュされていない、または証明書が無効</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>白点滅 -&gt; 緑</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>イベント送信成功</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>白点滅 -&gt; 赤</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>イベント送信失敗</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>白点滅 -&gt; オレンジ</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Wi-Fi接続失敗、ルーターを確認するかネットワーク設定を変更してください</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>白点滅 -&gt; 紫</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>サーバー接続失敗、ネットワーク環境を確認してください</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Wi-Fi設定LEDステータス</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>インジケーション</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>青点滅</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>BLEネットワーク設定中</td></tr></tbody></table>

## 初期設定

### 電源オン

初期設定の最初のステップは、IoTボタンの電源をオンにすることです。ボタンを電源オンにする方法は2つあります。

#### 方法1 - USB Type-C

USB Type-CケーブルをUSBポートに接続するだけでデバイスの電源をオンにできます。電源インジケーションLEDが**緑**に一度点滅するのが確認できます。

:::note
緑のライトが一度点滅した後、非常に低い明るさで緑のライトが点滅するのが確認できます。暗い環境で見ることができます。
:::

#### 方法2 - バッテリー使用

バッテリーを使用してIoTボタンの電源をオンにすることもできます。ケースを開け（以下のGIFを参照）、バッテリーを挿入します。バッテリーを取り付けた後、バッテリー回路を初期化するためにUSB Type-Cを介してコンピュータまたは電源アダプタに**一度**接続する必要があります。電源インジケーションLEDが**緑**に点灯するのが確認できます。その後、USB接続を取り外し、LEDが消灯し、すべてが設定されます。

:::note
電源ステータスLEDが赤の場合、バッテリーが逆挿入されていることを示します！
:::

#### ケースの取り外し方法

以下のGIFは、パッケージに含まれている三角形のプラスチックプライオープニングツールを使用してケースを取り外す方法を示しています。

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/takingApart.gif"/></div>

### ボタンのWi-Fi設定

1. Apple App StoreまたはGoogle Play Storeから最新のAWS IoT 1-Clickアプリをダウンロードします。

2. **AWS IoT 1-Clickアプリ**を起動し、Amazon AWSアカウントでサインアップします。

:::note
Bluetoothがオンになっていることを確認してください。そうでない場合、以下のようなエラーが表示されます。
:::

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Bluetooth-error.jpg"/></div>

3. アプリで**Claim with Device ID**を押します。アプリで**Scan**を押し、Seeed IoT Button for AWSの底部にある**DSN**をスキャンします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/05.png"/></div>

4. **Configure**を押します。

5. **Seeed IoT Button for AWS**を7秒間押し続け、青いライトが点滅するまで待ちます。

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/07-1.png"/></div>

6. ネットワークリストからWi-Fiネットワークを選択します。これはボタンが使用するWi-Fiネットワークです。

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/08.png"/></div>

7. Wi-Fiネットワークのパスワード（必要な場合）を入力し、続行します。

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/09.png"/></div>

8. アプリで設定成功が表示されるまで待ち、**Finish**を押します。設定が完了しました。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/10.png"/></div>

これでAWS 1-Clickサービスを使用して楽しむ準備が整いました！

最新のファームウェアに更新するには、[**こちら**](https://wiki.seeedstudio.com/ja/SEEED-IOT-BUTTON-FOR-AWS/#ota-update)を参照してください。

### 操作手順

- **シングルクリック:** シングルクリックイベントを送信

- **ダブルクリック:** ダブルクリックイベントを送信

- **長押し(2秒～5秒):** 長押しイベントを送信
  
- **長押し(>7秒):** BLEネットワーク設定モードに入ります。このモードでは他のイベントがブロックされます。BLE配信モードを手動で終了する必要がある場合は、再度7秒以上押し続けると自動的に終了します（2分後に自動終了）。

## OTA更新

新しいバージョンのアップグレードを検索するには、**15秒間長押し**します：

1. **長押し(>7秒)**、Wi-Fi設定LEDが点滅を開始します。この時点でリリースするとネットワーク設定モードに入ります。

2. **さらに8秒以上押し続ける（合計15秒以上）**、イベントステータスLEDが青く点滅し、OTAモードに入ります。

**最新バージョンの場合**、イベントステータスLEDが**青**から**緑**に点滅します。詳細については、以下の表を参照してください：

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>イベントLEDステータス</th><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>インジケーション</th></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>青点滅 -&gt; 緑</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>更新送信成功</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>青点滅 -&gt; 赤</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>更新送信失敗</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>青点滅 -&gt; オレンジ</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Wi-Fi接続失敗、ルーターを確認するかネットワーク設定を変更してください</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>青点滅 -&gt; 紫</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>サーバー接続失敗、ネットワーク環境を確認してください</td></tr></tbody></table>

## FAQs

**Q1.** 外部ケースのSN（シリアル番号）が擦り切れている。

AWSボタンケース内のバッテリーの下にバックアップSNステッカーがあります。

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/SN.png"/></div>

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