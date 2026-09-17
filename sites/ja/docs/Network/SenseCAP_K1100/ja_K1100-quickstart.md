---
description: SenseCraft によるクイック & ノーコード入門
title: SenseCraft によるクイック & ノーコード入門
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-quickstart
sku: 110991748
last_update:
  date: 1/12/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/K1100-quickstart/
---

# SenseCAP K1100 ですぐに始める - センサープロトタイプキット

## はじめに

**SenseCAP K1100 - The Sensor Prototype Kit** は、LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® と IoT アプリケーションを最も簡単に展開・習得できるようにした Seeed Studio の製品です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/004(1).jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

私たちは、ユーザーが最短時間で、かつほとんど手間をかけずにデータをクラウドへ送信する、より良い方法を体験できる **SenseCraft** をお届けできることを誇りに思います。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" /></div>

これは、完全に自社設計した **SenseCAP** プラットフォームの助けがあってこそ実現しました。SenseCAP は使いやすいクラウドプラットフォームを提供します。ユーザーは **SenseCAP Mate App** で QR コードをスキャンして、LoRaWAN® ネットワークのカバレッジ環境下でデバイスを自分のアカウントにバインドして管理し、SenseCAP Portal 上でセンサーノードのデータを確認できます。SenseCAP Portal は、Portal 上のデータに基づいてユーザーがさらに開発できるように API を提供します。

現時点で周囲に LoRaWAN® カバレッジがなくても心配はいりません。WiFi と LoRa® を自由に切り替えることができ、WiFi 経由で **Ubidots** や **Microsoft Azure IoT Central** にデータを転送して、さらなるデータ処理を行うこともできます。

私たちは現在のプロジェクトの進捗を皆さんと共有するのを待ちきれません。すべてのユーザーの皆さんに、ぜひこのプロジェクトを体験していただきたいと思います。

## 産業用センサーへのアップグレード

SenseCAP の [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用すれば、Grove を簡単に LoRaWAN® センサーへと変換できます。Seeed はプロトタイピングを支援するだけでなく、堅牢な SenseCAP シリーズの [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) によって、プロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバルな LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして APP による強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、気温・湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれます。次の産業用プロジェクトの成功に、最新の SenseCAP S210x をぜひお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> データロガー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 気温 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 気温 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌水分 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌水分 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® コントローラ</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 気象ステーション</strong></a></td>
    </tr>
  </tbody>
</table>

## 概要

SenseCAP K1100 キットの特徴の 1 つとして IoT 機能があるため、始める前にその実装ロジックを確認しておく必要があります。

まとめると、IoT を体験するためにユーザーに提供しているパスは 2 つあり、1 つは LoRa®、もう 1 つは WiFi です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/lora.png" /></div>

LoRa® を使用したい場合は、あらかじめ適切な LoRa® ゲートウェイを用意し、Grove Wio E5 モジュールを使用して LoRaWAN® に接続し、SenseCAP プラットフォームにデータを接続する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/wifi.png" /></div>

WiFi を使用したい場合は、周囲の環境に安定した WiFi ネットワークのカバレッジが必要です。プロファイルに WiFi 名とパスワード、さらに IoT プラットフォームから提供されるキーなどの情報を入力するだけで、優れた IoT 体験を実現できます。

## 事前準備

始める前に、最も安定した体験を得るため、SenseCraft を最新バージョンにアップグレードすることを強くお勧めします。

以下のアイコンをクリックして、**SenseCraft distribution** から最新バージョンをダウンロードおよび更新できます。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

もちろん、ここをクリックして最新の .uf2 ファイルを直接ダウンロードすることもできます。

<table align="center">
  <tbody><tr>
      <td align="center">SenseCraft-v0.2-20220907.uf2</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/K1100-quick-start/SenseCraft-v0.2-20220907.uf2" target="_blank">Download</a></td>
    </tr>
  </tbody></table>

SenseCraft をローカルディスクにダウンロードしたら、以下の手順に従って Wio Terminal に書き込んでください。

Wio Terminal を PC に接続して電源を ON にし、電源スイッチを「ON」位置からさらに下にスライドして離し、もう一度スライドして離すことで **Bootloader Mode** に入ります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

:::note
Wio Terminal が Bootloader モードになると、青色 LED が点滅とは異なる、ゆっくりとした明滅（ブリージング）を始めます。
:::

PC でエクスプローラーを開くと **Arduino** という名前の新しい外部ドライブが表示されるので、先ほどダウンロードした **.uf2** ファイルをこの **Arduino** ドライブにドラッグします。

SenseCraft の書き込みが完了すると、Arduino という名前の外部メモリが自動的にポップアップし、SenseCraft プログラムが動作を開始します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/38.png" /></div>

## ボタンを使って UI を操作する

操作インターフェースの学習に入る前に、Wio Terminal 用に設計したボタンロジックに慣れておく必要があります。そうすることで、固定されたボタンロジックに従って、ページをとてもスムーズに選択・操作できるようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/button.png" /></div>

まず、Wio Terminal 上部にある 3 つのボタンです。これらは 3 つの主要機能の表示画面に対応しており、それぞれ **Sense**、**Process**、**Uplink** です。

どこにいても、上部の 3 つのボタンを押せば、これら 3 つの画面に戻ることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/101.png" /></div>

次に、Wio Terminal の右下にある 5 方向ボタンがあり、これを使って以下の操作を行うことができます。

- **左 / 右:** ページ / メニューを左右にスクロール
- **中央:** 選択を確定
- **上:** 前のページに戻る

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/40.png" /></div>

ページ上に緑色の枠が表示されている場合、その内容が選択状態であることを示します。

## ページロジック

前述のとおり、SenseCraft には 3 つのページを用意しており、SenseCraft の 3 つの主要な機能モジュール、つまり **Sense**、**Process**、**Uplink** を表しています。

### Sense

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

**Sense** ページの主な機能は、センサーデータの表示です。Sense ページから、Wio Terminal に内蔵されたセンサーの動作状態とセンサー値を確認できます。

もちろん、キット内の Grove センサーを Wio Terminal の**右側**にある Grove コネクタに接続してみると、Wio Terminal がセンサーの種類を自動的に検出し、その値を読み取ることがわかります。

### Process

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/41.png" /></div>

**Process** ページの主な機能は、データ処理のプロセスを表示することです。現在、このページでは Grove Vision AI モジュールの認識およびモデル処理用のログ出力を開発しています。

今後、このページに対して、Wio Terminal にさらに強力なデータフィルタリングおよび処理機能を持たせる予定です。

### Uplink

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

**Uplink** ページの主な機能は、データをクラウドにアップロードすることです。このページで、使用したい IoT 手段、LoRa® か WiFi かをユーザーが設定できます。

ここでは、自分専用の IoT 機能を自由に設定し、さまざまなネットワークやプラットフォームを自由に切り替え、このデバイス一式に価値を持たせることができます。

## 内蔵センサーからのデータ表示

**SenseCraft** を Wio Terminal に書き込み、電源を入れた後、数秒待つと、**Sense** ページに内蔵センサーの値が直接表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

Wio Terminal には、光センサー、音の大きさセンサー、3 軸センサーの 3 つの内蔵センサーがあります。

この時点では何もする必要はなく、内蔵センサーの値は 1 秒ごとに自動的に更新されます。現在の環境の明るさ、音の大きさ、3 軸データを自然に観察することができます。

## LoRa® を介して SenseCAP にセンサーデータを送信する

**ステップ 1.** 右端の上部ボタンを押して **Network** タブに入ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

LoRa® がすでにハイライト表示されていることに気づくでしょう。

**ステップ 2.** **中央押し** して **LoRa®** を選択し、**Grove-Wio E5** を左側の Grove コネクタに接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/44.png" /></div>

**ステップ 3.** 画面に表示されている LoRaWAN® 周波数帯をスクロールし、自分の地域に応じた周波数帯を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/45.png" /></div>

ここで、Wio-E5 を SenseCAP プラットフォームにバインドするよう促されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/46.png" /></div>

SenseCAP プラットフォームでは、デバイスをバインドする方法を 2 つ用意しています。

- **オプション 1. モバイル APP でデバイスをバインドする**

携帯電話を使ってデバイスをスキャンしてバインドしたり、一部のセンサーデータをリモートで確認したい場合は、以下のリンクから SenseCAP Mate APP をダウンロードしてください。

- App Store の [SenseCAP Mate APP for iOS](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- Google Play Store の [SenseCAP Mate APP for Android](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/K1100/2.jpg" /></div>

使用しているすべてのモバイル端末のシステムに応じて対応するバージョンの APP をダウンロードした後、SenseCAP Mate APP を開きます。初めて SenseCAP プラットフォームを使用する場合は、まずアカウントを登録してください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/7.jpg" /></div>

:::note
    登録の際は **Global** バージョンを選択してください。
:::

登録情報入力ページでは、*が付いている項目は必須項目で、*が付いていない項目は任意で入力できます。すべて完了したら Register ボタンをクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/8.jpg" /></div>

その後、先ほど登録したアカウントを使用して APP にログインしてください。

メインインターフェース下部の Device ディレクトリを選択すると、バインド済みのすべての SenseCAP デバイスの情報を確認できます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/9.jpg" /></div>

右上の **+** をクリックし、**Add device** を選択して Grove - Wio-E5 をバインドします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100-quick-start/10.jpg" /></div>

カメラ中央の枠を Grove - Wio-E5 の**背面の** QR コードに合わせてコードをスキャンし、キットをバインドします。**Wio E5 前面の QR コードはスキャンしないでください**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100-quick-start/49.png" /></div>

SenseCAP Mate App を使ってバインドに成功すると、アプリ上にセンサーデータが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/104.jpg" /></div>

:::tip
 SenseCAP Mate App はデータ情報を自動更新しないため、センサーページで手動で下方向にスワイプしてデータを更新する必要があります。
 10 分以上新しいデータが表示されない場合は、側面のボタンを一度下に切り替えて Wio Terminal を再起動してみてください。
:::

- **オプション 2. SenseCAP Web プラットフォームでデバイスをバインドする**

ブラウザで [SenseCAP Console](https://sensecap.seeed.cc/portal/#/login) を開いてください。初めて当社プラットフォームを使用する場合は、まずアカウントを登録してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/3.png" /></div>

その後、先ほど登録したアカウントを使用して SenseCAP コンソールにログインします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/4.png" /></div>

**Dashboard** 画面を選択し、**Bind Device** をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/5.png" /></div>

次のページでは、**EUI**、**Code/KEY**、**Device Name** を入力する必要があり、さらにデバイスの位置情報を設定することもできます。（Grove - Wio-E5 には位置情報機能はありません）

一部の必須情報は、Grove - Wio-E5 の背面に貼られているステッカーで確認できます。デバイス名は必要に応じて入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/6.png" /></div>

上記の内容を入力したら、下部の **Confirm** ボタンをクリックしてデバイスのバインドを完了します。

Web プラットフォームでのバインドに成功すると、プラットフォーム上にセンサーデータが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/105.png" /></div>

:::tip
 Web 上の SenseCAP も自動データ更新機能はないため、最新のデータを確認するにはブラウザを更新する必要があります。
:::

バンドを選択したら、Grove Wio E5 の初期化が完了するまでしばらく待つ必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/47.png" /></div>

LoRaWAN® が SenseCAP プラットフォームに正常に接続されると、次のような画面が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/48.png" /></div>

Grove Wio E5 に接続していない場合、または処理の途中で LoRaWAN® が切断された場合は、送信失敗と表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/50.png" /></div>

## WiFi を介して Microsoft Azure IoT Central にセンサーデータを送信する

ここでは、デバイスは WiFi 通信を使用してセンサーデータをクラウドに送信します。Microsoft Azure IoT Central を使用して、WiFi 経由で Wio Terminal に接続されたセンサーから送られてくるデータを可視化します。

スペースの都合上、この章のこのパートの導入については、こちらのリンクを参照してください。

- [Connect Wio Terminal to Microsoft Azure IoT Central](https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## WiFi 経由でセンサーデータを Ubidots に送信する

ここでは、デバイスが WiFi 通信を使用してセンサーデータをクラウドに送信します。Ubidots プラットフォームを使用して、WiFi 経由で Wio Terminal に接続されたセンサーから送られてくるデータを可視化します。

**Step 1.** Ubidots に登録してログインする

初めて Ubidots を使用する場合は、[Ubidots website](https://ubidots.com/) にアクセスして、自分のアカウントを登録してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

登録が完了したら、登録したアカウントを使って Ubidots にログインしてください。

**Step 2.** 固有の **Ubidots TOKEN** を割り当てる

Ubidots へのすべてのリクエストには TOKEN が必要です。自分の TOKEN を取得する最も簡単な方法は、ユーザードロップダウンから **API Credentials** をクリックすることです。

ユーザードロップダウンを開き、API credentials をクリックします。

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**：API リクエストで使用する、一時的で取り消し可能なキーです。TOKEN はここで保存しておいてください。後で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::caution
すべての API 呼び出しは **TOKEN** のみを受け付けます。API Key を使用しようとしても動作しません。また、ユーザードロップダウンの My Profile 設定内にある Ubidots API Keys セクションから、すべての Ubidots API Key にアクセスできます。**My Profile** –> **API Credentials** を選択して、特定の Ubidots アカウントに関連する API TOKEN の一覧を確認してください。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**Step 3.** 必要な情報を準備する

MQTT 接続を確立するために、あらかじめ次の情報を準備しておく必要があります。

- **WiFi Name**
  - Wio Terminal が接続できる WiFi 名を入力します。Wio Terminal は周囲の WiFi を検索し、その WiFi への接続を試みます。
- **Password for WiFi**
  - Wio Terminal が接続できる WiFi のパスワードを入力します。
- **MQTT client name**
  - これは特別なもので、ブローカーがこの ID を使ってデバイスを識別するため、**必ず**一意でなければなりません。すでに別のデバイスに使用されている ID で接続しようとすると、接続は拒否されます。英数字のみで 8〜12 文字以上の MQTT クライアント名を自分で作成し、コード内の該当箇所に入力してください。
 一意の MQTT クライアント名の作成に少し助けが必要な場合は、この [random ascii builder](https://www.random.org/strings/) を確認するか、各 MAC アドレスは世界的に一意であるため、単純にデバイスの MAC アドレスを使用してください。

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

- **Ubidots TOKEN**
  - これは **step 2** で生成した TOKEN です。
- **Device label**
  - これはデバイス名であり、ユーザーが指定したデバイス名が Ubidots によるデバイス識別に使用されます。最初のドットが送信される前に Device label が存在しない場合、Ubidots は自動的にそれらを作成します。

上記の情報を準備しておいてください。次のステップで使用します。

**Step 4.** **config.txt** を設定する

SenseCraft を使用すると、Wio Terminal をコンピュータに接続した瞬間に外部ドライブが表示されます。

:::caution
これは、Wio Terminal をコンピュータに接続したときに USB メモリが表示されることを意味し、**側面のボタンを追加で 2 回切り替える必要はありません**。
:::
通常、この外部ドライブには **config.txt** というファイルがあるので、それを開きます。

このファイルにはネットワーク接続に関する必要な情報が保存されており、これを変更することで、電源投入時の自動設定を実現できます。**config.txt** ファイルの内容は次の形式になっています。

```
SSID=WiFi_Name
PASSWORD=WiFi_Password
MQTT_CLIENT_NAME=Topic
TOKEN=Default_Token
DEVICE_LABEL=Device_Name
```

上記の必須フィールドに、**step 3** で取得した情報に対応する値を入力してください。入力が完了すると、config.txt ファイルの内容は次の例のようになります。

```
SSID=CHCK
PASSWORD=123456
MQTT_CLIENT_NAME=al49mw880j
TOKEN=BBFF-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DEVICE_LABEL=Wio-Terminal
```

:::caution
変更を加えたら、config.txt ファイルを**保存**し、側面のボタンを一度下に倒して Wio Terminal を**再起動**してください。
:::
**Step 5.** **Network** タブに入り、**WiFi** を選択する

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

これで、設定が読み込まれるのを待つ状態になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

読み込まれた WiFi 設定が取得されると、まず WiFi ネットワークに接続し、その後 Ubidots プラットフォームに接続します。Ubidots との接続に成功すると、次のように表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**Step 6.** Ubidots でデータを確認する

データが正常に Ubidots に送信されると、Ubidots 上の自分のデバイスでデータ情報を確認できるようになります。

Ubidots は非常にシンプルなインターフェースを備えており、デバイスに関する情報を確認したい場合は、ダッシュボード上部の **Devices** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

ここで自分のデバイス名をクリックすると、すべての履歴タブを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/54.png" /></div>

:::note
Ubidots の無料版では、作成できる **TOKEN は 1 つ**、**ラベルは 10 個**までしかサポートされていません。ラベルが 10 個を超えると、アップロードしたラベルおよびデータは破棄されます。
:::
:::note
Ubidots を使ってさらに独自開発を行いたい場合は、こちらの [tutorials on Ubidots](https://wiki.seeedstudio.com/ja/Getting_started_with_Ubidots/) を参照してください。
:::

## キット内の他の Grove センサーを接続する

内蔵センサーに加えて、SenseCraft の可能性は無限大です。キット内の Grove センサーも Wio Terminal に接続することができ、自動的に認識されます。

### Grove センサーを Wio Terminal に接続する

現在のバージョンの SenseCraft では、同時に接続して使用できるセンサーは 1 つのみサポートしています。（Grove Wio E5 を除く）

接続の際は、キットに付属の Grove ケーブルを使用して、使用したいセンサーの 1 つを Wio Terminal 右下の Grove コネクタに接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

上の図は Grove Vision AI を例に、キット内のセンサーがどのように接続されるかを示しています。もちろん、他のセンサーについても同様です。（Grove Wio E5 を除く）

:::caution
キット内の Grove センサーを Wio Terminal 左側の Grove コネクタに接続しないでください。左側の Grove コネクタは、現在 Grove Wio E5 を接続するために設計されています。
:::

### Grove センサーの値を確認する

Grove センサーを接続すると、Sense ページで Grove センサーの値を確認できるようになります。

**Sense** ページで、外部センサーの値が表示されるまで下部の**右**矢印ボタンを押すだけです。通常、外部センサーの値は **IMU センサー** の後に表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/56.png" /></div>

### Grove センサーからクラウドへのデータアップロード

SenseCraft によるセンサーの検出は完全に自動で行われるため、ユーザーが追加で何かを行う必要はありません。もちろん、これは新たに挿入された Grove センサーからのデータアップロードもすべて含まれます。

- 同様に、Grove センサーからのデータを LoRaWAN® 経由で送信したい場合は、**左側に Grove Wio E5 を同時に接続する**だけで構いません。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/57.png" /></div>

その後、**[Send sensor data to SenseCAP via LoRa®](https://wiki.seeedstudio.com/ja/K1100-quickstart/#send-sensor-data-to-sensecap-via-lora)** の手順に従ってください。

- データを WiFi 経由で送信したい場合は、他に何も接続する必要はありません。引き続き **[Send sensor data to Ubidots via WiFi](https://wiki.seeedstudio.com/ja/K1100-quickstart/#send-sensor-data-to-ubidots-via-wifi)** の内容を参照して操作してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/58.png" /></div>

## 上級編

SenseCraft を使って遊ぶための、とても面白く高度な方法をいくつか用意しました。このセクションでは、それらの機能を素早く把握し、利用することができます。

### Vision AI リアルタイム解析

これは Grove Vision AI 向けに設計された機能です。ユーザーはこのインターフェースで Vision AI の実行ログを観察できるため、Vision AI の認識結果をリアルタイムで確認したり、カメラ画面を調整したりするのに便利です。

**Step 1.** Grove Vision AI を接続する

Grove Vision AI を Wio Terminal 右側の Grove コネクタに接続してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

**Step 2.** Vision AI リアルタイム解析インターフェースに入る

Wio Terminal 上部の 2 番目のボタンを押して、**Process** 画面に入ってください。

Process 画面のデフォルトの選択は **Vision AI real-time analysis** になっているので、その状態で 5 方向ボタンを**中央押し**して入ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/59.png" /></div>

すると、このページで Vision AI のログを確認できるようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/61.png" /></div>

### TinyML 例

これは、組み込み機械学習における Wio Terminal 向けに設計された機能です。このページでは、私たちが用意した TinyML シリーズのコースにアクセスして、Wio Terminal と Vision AI の強力な機械学習機能を体験することができます。

**Step 1.** 上部の Wio Terminal の 2 番目のボタンをクリックして、**Process** 画面にアクセスしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/60.png" /></div>

**Step 2.** TinyML Example インターフェースにアクセスします

5 方向ボタンの右矢印を押して TinyML Example を選択します。5 方向ボタンを**中央押し**するだけで、そこに入ることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/62.png" /></div>

### グラフ可視化

各センサーの値がどのように変化するかを観察できるように、Wio Terminal には折れ線グラフ表示を用意しています。

ここでは、光の値の折れ線グラフを例に説明します。

Light 列はすでにハイライトされているので、5 方向ボタンを**中央押し**して、光センサーからのデータのグラフ可視化モードに入ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/63.png" /></div>

### TF カードへの保存

ユーザーがオフラインで TF カードに保存し、その後にデータのフィルタリングや解析だけを行いたいというニーズを考慮して、Wio Terminal にはデータを TF カードに保存する機能も備えています。

前述のグラフ可視化モードの状態で、もう一度**中央押し**すると、このページが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/65.png" /></div>

ここで、センサーからのデータを TF カードに保存することができます。まず、TF カードを Wio Terminal に挿入してください。

その後、**中央ボタン**を押して **Save to TF card** を選択すると、**Saving has been started** というメッセージが表示されます。このメッセージが消えると保存は完了し、データは **.csv ファイル**として保存されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/64.png" /></div>

TF カードのストレージがいっぱいの場合は、次のように通知されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/66.png" /></div>

## 次に何ができるでしょうか？

このクイックスタートガイドに記載された手順を無事完了したこと、おめでとうございます。センサーデバイスから SenseCAP Console / Ubidots のビューへ、最小限の時間でデータが転送される様子を確認できました！

次に、センサーのプログラミングや LoRaWAN®、クラウドプラットフォームなどをさらに深く学びたい場合は、[SenseCAP - The Sensor Prototype Kit Overview](https://wiki.seeedstudio.com/ja/K1100-Getting-Started/) を続けてお読みください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/41.png" /></div>

## リソース

- **[GitHub]**[Seeed_Arduino_K1100 ソースコード](https://github.com/Seeed-Studio/Seeed_Arduino_K1100)

## トラブルシューティング

> Q1: SenseCAP プラットフォームのデータ内容が、Wio Terminal に表示されるデータと異なるのはなぜですか？

A: データは 5 分ごとに読み取られ、その後 3 分以内に送信されるためです。そのため、取得されるセンサー値は、ある 5 分間隔のうち 1 回読み取られた値であり、多少の遅延を伴う場合があります。一方、Wio Terminal のデータはリアルタイムであるため、両者の間に不一致が生じる可能性があります。

> Q2: なぜ LoRaWAN® に接続できないのですか？

A: どうしても LoRaWAN® に接続できない場合は、周囲の環境に十分強く安定した LoRaWAN ネットワークの電波があることを確認してください。プロセス全体を体験するには、自前の LoRaWAN ゲートウェイを用意することをお勧めします。Grove - Wio-E5 はあくまでプロトタイプであり、そのアンテナ強度は大型の LoRa® デバイスには及びません。

> Q3: なぜ、あるデータセットの中で、一部のセンサーデータが SenseCAP 上に表示されないことがあるのですか？

A: Grove - Wio-E5 でパケットロスが発生している可能性があります。一般的に、パケットロスは通常起こりうる状況であり、過度に心配する必要はありません。もし非常に深刻なパケットロスがある場合は、Wio Terminal を再起動してみてください。
リアルタイム性と安定性に非常に高い要件がある場合は、産業グレードの SenseCAP シリーズデバイスを検討してみてください。

> Q4: K1101 用のキットを購入していませんが、このファームウェアを使ってこのルーチンを体験できますか？

A: このキットを購入していないお客様の場合、SenseCAP へのフルアクセスを体験できない可能性があります。キットに含まれる Grove - Wio-E5 は特別版であり、単体で購入した製品には SenseCAP へのアクセス権がありません。

> Q5: 別のプログラムを使用した場合、ファームウェアを復元できますか？

A: いつでもこのファームウェアを Wio Terminal に書き込むことができ、理論上は Grove - Wio-E5 の元のファームウェアを破壊しない限り、常にこのルーチンを使用できます。ファームウェアを書き込む方法は次のとおりです。
次のように、スイッチを素早く 2 回スライドします：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

この時点で、コンピュータ上に **Arduino** という名前のディスクが表示されますので、そのディスクにファームウェア（.uf2 ファイル）をコピーするだけです。ファームウェアのインストールが完了すると、ディスクは自動的に取り出され、Wio Terminal は再起動して Setup Band インターフェースに入ります。

> Q6: Grove - Wio-E5 の Dev EUI、App EUI、App Key を変更した場合、それを取得する方法はありますか？

A: 私たちはユーザー向けに照会用インターフェースを公開しているため、プロジェクトに合わせてこれら 3 つのコードの情報を変更した場合でも、Grove - Wio-E5 の背面にあるステッカー情報を使って、いつでもそれらにアクセスできます。

```
https://sensecap.seeed.cc/makerapi/device/view_device_info?nodeEui=<your_eui>&deviceCode=<your_code>
```

ブラウザで上記のウェブサイトを開き、Grove - Wio-E5 の背面に記載されている **EUI** と **Code** の情報を使用して、対応する位置に入力することで、お使いのデバイスに対応する 3 つのコードを確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/36.png" /></div>

**3 つのコードは大切に保管してください。コードの紛失によって生じた損失については、ユーザーの自己責任となります。**

> Q7: SenseCAP の DevEUI、AppEUI、AppKey を他のプラットフォーム（例えば TTN）で使用することは可能ですか？

A: これは不可能です。SenseCAP の 3 つのコードは他のプラットフォームにバインドするために使用することはできません。そうしないと、異なるプラットフォーム間でデータ異常が発生する高いリスクがあります。

## 技術サポート & 製品ディスカッション


弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 免責事項

- LoRa® マークは、Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は、LoRa Alliance® からライセンス供与されたマークです。
