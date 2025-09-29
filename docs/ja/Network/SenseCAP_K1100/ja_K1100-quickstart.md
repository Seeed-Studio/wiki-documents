---
description: SenseCraftを使用した迅速かつコード不要の開始
title: SenseCraftを使用した迅速かつコード不要の開始
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100-quickstart
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# SenseCAP K1100 - センサープロトタイプキットのクイックスタート

## はじめに

**SenseCAP K1100 - センサープロトタイプキット**は、Seeed StudioがLoRa®通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa®およびIoTアプリケーションを最も簡単に展開し、習得できるように設計されたものです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/004(1).jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

私たちは、ユーザーが最短時間で非常に少ない手間でデータをクラウドに送信するためのより良い方法を体験できる**SenseCraft**を提供できることを誇りに思います。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" /></div>

これは、完全に社内で設計された**SenseCAP**プラットフォームの助けを借りて可能となっています。SenseCAPは使いやすいクラウドプラットフォームを提供します。ユーザーは**SenseCAP Mate App**でQRコードをスキャンしてデバイスを対応するアカウントにバインドし、LoRaWAN®ネットワークのカバレッジ環境でデバイスを管理し、SenseCAPポータルでセンサーノードデータを確認できます。SenseCAPポータルは、ポータル上のデータを基にさらに開発するためのAPIを提供します。

現在、周囲にLoRaWAN®カバレッジがない場合でも心配ありません。WiFiとLoRa®の間で自由に切り替えることができ、WiFiを介して**Ubidots**や**Microsoft Azure IoT Central**にデータを転送してさらにデータ処理を行うことも可能です。

私たちは現在のプロジェクト進捗を共有することを楽しみにしており、すべてのユーザーが私たちのプロジェクトを体験することを歓迎します！

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用すると、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてAPPからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> データロガー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空気温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空気温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌水分 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌水分 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® コントローラー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 気象ステーション</strong></a></td>
    </tr>
  </tbody></table>

## 概要

SenseCAP K1100キットの特徴の一つとしてIoT機能がありますが、使用を開始する前にその実装ロジックを確認する必要があります。

要約すると、ユーザーがIoTを体験するための2つの方法を提供しています。一つはLoRa®、もう一つはWiFiです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/lora.png" /></div>

LoRa®を使用したい場合は、適切なLoRa®ゲートウェイを事前に準備し、Grove Wio E5モジュールを使用してデータをLoRaWAN®に接続し、SenseCAPプラットフォームにデータを送信する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/wifi.png" /></div>

WiFiを使用したい場合は、環境内に安定したWiFiネットワークが必要です。プロファイルにWiFi名とパスワードを入力し、IoTプラットフォームから提供されるキーなどの情報を追加するだけで、優れたIoT体験を実現できます。

## 事前準備

開始する前に、最新バージョンのSenseCraftにアップグレードすることを強くお勧めします。これにより、最も安定した体験が得られます。

以下のアイコンをクリックして、**SenseCraft配布ページ**から最新バージョンをダウンロードおよび更新できます。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

もちろん、ここをクリックして最新の.uf2ファイルを直接ダウンロードすることもできます。

<table align="center">
  <tbody><tr>
      <td align="center">SenseCraft-v0.2-20220907.uf2</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/K1100-quick-start/SenseCraft-v0.2-20220907.uf2" target="_blank">ダウンロード</a></td>
    </tr>
  </tbody></table>

SenseCraftをローカルディスクにダウンロードした後、以下の手順に従ってWio Terminalにフラッシュしてください。

Wio TerminalをPCに接続して電源を入れ、スイッチを「ON」位置からさらに下にスライドさせて**ブートローダーモード**に入ります。一度リリースし、再度スライドしてリリースします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

:::note
Wio Terminalがブートローダーモードに入ると、青色のLEDが点滅とは異なる呼吸のような動きを始めます。
:::

PCのファイルエクスプローラーを開くと、**Arduino**という名前の新しい外部ドライブが表示されます。先ほどダウンロードした**.uf2**ファイルをこの**Arduino**ドライブにドラッグしてください。

SenseCraftのフラッシュが完了すると、Arduinoという名前の外部メモリが自動的にポップアップし、SenseCraftプログラムが動作を開始します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/38.png" /></div>

## ボタンを使ったUIの操作

操作インターフェースを学ぶ前に、Wio Terminal用に設計されたボタンロジックに慣れる必要があります。これにより、固定されたボタンロジックに従ってページをスムーズに選択および操作できるようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/button.png" /></div>

まず、Wio Terminalの上部にある3つのボタンです。これらは3つの主要な機能の表示画面に対応しています。それぞれ**Sense**、**Process**、**Uplink**です。

どこにいても、上部の3つのボタンを押すことで、これら3つの画面に戻ることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/101.png" /></div>

次に、Wio Terminalの右下にある5方向の方向ボタンがあります。これを使用して以下の操作を行うことができます：

- **左/右:** ページ/メニューを左右にスクロール
- **中央:** 選択を確定
- **上:** 前のページに戻る

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/40.png" /></div>

ページに緑色の枠が表示されている場合、その内容が選択状態であることを示しています。

## ページロジック

前述の通り、SenseCraftには3つのページを用意しており、SenseCraftの3つの主要な機能モジュール、すなわち**Sense**、**Process**、**Uplink**を表しています。

### Sense

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

**Sense**ページの主な機能はセンサーデータの表示です。このページから、Wio Terminalに内蔵されたセンサーの動作状況やセンサー値を観察することができます。

もちろん、キット内のGroveセンサーをWio Terminalの**右側**にあるGroveコネクタに接続すると、Wio Terminalがセンサーの種類を自動的に検出し、その値を読み取ることができます。

### Process

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/41.png" /></div>

**Process**ページの主な機能は、データ処理のプロセスを表示することです。このページでは、現在、Grove Vision AIモジュールの認識およびモデル処理のログ出力を開発しています。

将来的には、このページにおいてWio Terminalにより強力なデータフィルタリングおよび処理機能を提供する予定です。

### Uplink

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

**Uplink**ページの主な機能は、データをクラウドにアップロードすることです。このページで、LoRa®またはWiFiのどちらのIoT方式を使用するかを設定できます。

ここでは、独自のIoT機能を自由に設定し、異なるネットワークやプラットフォーム間を自由に切り替えることができ、このデバイスセットに価値を生み出すことができます。

## 内蔵センサーのデータ表示

**SenseCraft**をWio Terminalに書き込み、電源を入れると、数秒後に**Sense**ページで内蔵センサーの値を直接確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

Wio Terminalには、光センサー、音量センサー、三軸センサーの3つの内蔵センサーがあります。

この時点で何も操作する必要はなく、内蔵センサーの値は1秒ごとに自動的に更新され、現在の環境の光、音量、三軸データを自然に観察することができます。

## センサーデータをLoRa®経由でSenseCAPに送信する

**ステップ1.** 右端の上部ボタンを押して**Network**タブに入ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

LoRa®がすでにハイライトされていることに気付くでしょう。

**ステップ2.** **中央ボタンを押して**LoRa®を選択し、Grove-Wio E5を左側のGroveコネクタに接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/44.png" /></div>

**ステップ3.** 画面に表示されるLoRaWAN®周波数帯をスクロールして、地域に応じた周波数帯を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/45.png" /></div>

これで、Wio-E5をSenseCAPプラットフォームにバインドするように促されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/46.png" /></div>

SenseCAPプラットフォームでデバイスをバインドする方法は2つあります。

- **オプション1. モバイルアプリでデバイスをバインドする**

携帯電話を使用してデバイスをスキャンしてバインドしたり、センサーデータをリモートで確認したい場合は、以下のリンクからSenseCAP Mateアプリをダウンロードしてください。

- [iOS用SenseCAP Mateアプリ](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)（App Store）
- [Android用SenseCAP Mateアプリ](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)（Google Play Store）

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/K1100/2.jpg" /></div>

使用しているモバイルシステムに応じて対応するバージョンのアプリをダウンロードした後、SenseCAP Mateアプリを開きます。SenseCAPプラットフォームを初めて使用する場合は、まずアカウントを登録してください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/7.jpg" /></div>

:::note
    登録時には**Global**バージョンを選択してください。
:::

登録情報入力ページでは、*が付いているフィールドは必須項目で、*が付いていないフィールドは任意で入力できます。すべて完了したら、登録ボタンをクリックしてください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/8.jpg" /></div>

その後、先ほど登録したアカウントを使用してアプリにログインしてください。

メインインターフェースの下部にあるデバイスディレクトリを選択すると、バインドしたすべてのSenseCAPデバイスの情報が表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/9.jpg" /></div>

右上の**+**をクリックし、**デバイスを追加**を選択してGrove - Wio-E5をバインドします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100-quick-start/10.jpg" /></div>

カメラの中央のボックスをGrove - Wio-E5の**背面**にあるQRコードに合わせてスキャンし、キットをバインドします。**Wio E5の前面にあるQRコードはスキャンしないでください**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100-quick-start/49.png" /></div>

SenseCAP Mateアプリを使用してバインドが成功すると、アプリにセンサーデータが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/104.jpg" /></div>

:::tip
 SenseCAP Mateアプリはデータ情報を自動的に更新しません。センサーページで手動で下にスクロールしてデータを更新する必要があります。
 10分以上新しいデータが表示されない場合は、側面ボタンを一度下げてWio Terminalを再起動してみてください。
:::

- **オプション2. SenseCAPウェブプラットフォームでデバイスをバインドする**

ブラウザを使用して [SenseCAP コンソール](https://sensecap.seeed.cc/portal/#/login) を開いてください。初めてこのプラットフォームを使用する場合は、まずアカウントを登録してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/3.png" /></div>

次に、登録したアカウントを使用して SenseCAP コンソールにログインしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/4.png" /></div>

**Dashboard** 画面を選択し、**Bind Device** をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/5.png" /></div>

次のページでは、**EUI**、**Code/KEY**、**Device Name** を入力する必要があります。また、デバイスの位置情報を設定することもできます。（Grove - Wio-E5 には位置情報機能はありません）

必要な情報の一部は、Grove - Wio-E5 の背面にあるステッカーに記載されています。デバイス名は必要に応じて入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/6.png" /></div>

上記の内容を入力したら、下部の **Confirm** ボタンをクリックしてデバイスのバインドを完了します。

ウェブプラットフォームを使用してバインドが成功すると、プラットフォーム上にセンサーデータが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/105.png" /></div>

:::tip
ウェブ上の SenseCAP には自動データ更新機能がないため、最新のデータを確認するにはブラウザをリフレッシュする必要があります。
:::

バンドを選択した後、Grove Wio E5 が初期化を完了するまで少し待つ必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/47.png" /></div>

LoRaWAN® が SenseCAP プラットフォームに正常に接続されると、以下のような画面が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/48.png" /></div>

Grove Wio E5 に接続されていない場合や、プロセス中に LoRaWAN® が切断された場合、送信失敗が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/50.png" /></div>

## センサーデータを WiFi 経由で Microsoft Azure IoT Central に送信

ここでは、デバイスが WiFi 通信を使用してセンサーデータをクラウドに送信します。Microsoft Azure IoT Central を使用して、WiFi 経由で Wio Terminal に接続されたセンサーからのデータを可視化します！

スペースの都合上、この章の詳細な説明については以下のリンクを参照してください。

- [Wio Terminal を Microsoft Azure IoT Central に接続](https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## センサーデータを WiFi 経由で Ubidots に送信

ここでは、デバイスが WiFi 通信を使用してセンサーデータをクラウドに送信します。Ubidots プラットフォームを使用して、WiFi 経由で Wio Terminal に接続されたセンサーからのデータを可視化します！

**ステップ 1.** Ubidots に登録してログイン

初めて Ubidots を使用する場合は、[Ubidots ウェブサイト](https://ubidots.com/) にアクセスしてアカウントを登録してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

登録が完了したら、登録したアカウントで Ubidots にログインしてください。

**ステップ 2.** ユニークな **Ubidots TOKEN** を取得

Ubidots へのすべてのリクエストには TOKEN が必要です。最も簡単な方法は、ユーザードロップダウンから **API Credentials** をクリックすることです。

ユーザードロップダウンに移動し、API Credentials をクリックしてください：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**: API リクエストで使用する一時的かつ取り消し可能なキーです。この TOKEN を保存してください。後で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::caution
すべての API 呼び出しは **TOKEN** のみを受け付けます。API Key を使用しようとしても動作しません！また、ユーザードロップダウンの My Profile 設定の Ubidots API Keys セクションにアクセスして、特定の Ubidots アカウントに関連する API TOKEN のリストを確認できます。**My Profile** → **API Credentials** を選択してください。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**ステップ 3.** 必要な情報を準備

MQTT 接続を確立するには、以下の情報を事前に準備する必要があります。

- **WiFi 名**
  - Wio Terminal が接続できる WiFi 名を入力してください。Wio Terminal は周囲の WiFi を検索し、それに接続しようとします。
- **WiFi のパスワード**
  - Wio Terminal が接続できる WiFi のパスワードを入力してください。
- **MQTT クライアント名**
  - これは特別なもので、ブローカーによってデバイスが識別されるための ID です。したがって、**一意である必要があります**。他のデバイスによって既に使用されている ID で接続しようとすると、接続は拒否されます。独自の英数字 8～12 文字以上の MQTT クライアント名を作成し、コードに入力してください。
  ユニークな MQTT クライアント名を作成するのに助けが必要な場合は、この [ランダム ASCII ビルダー](https://www.random.org/strings/) をチェックするか、デバイスの MAC アドレスを使用してください。すべての MAC アドレスはグローバルに一意です。

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

- **Ubidots TOKEN**
  - これは **ステップ 2** で生成された TOKEN です。
- **デバイスラベル**
  - これはデバイスの名前であり、ユーザーが提供するデバイス名は Ubidots によってデバイスを識別するために使用されます。最初のデータが送信される前にデバイスラベルが存在しない場合、Ubidots はそれを自動的に作成します。

上記の情報を準備してください。次のステップで使用します。

**ステップ 4.** **config.txt** を設定

SenseCraft を使用する際、Wio Terminal がコンピュータに接続されると、外部ドライバが自動的に表示されます。

:::caution
これは、Wio Terminal がコンピュータに接続されると USB スティックが表示されることを意味します。**サイドボタンを追加で 2 回切り替える必要はありません**！
:::
通常、外部ドライバには **config.txt** というファイルが存在しますので、それを開いてください。

ネットワーク接続に関する必要な情報が含まれており、これを変更することで電源投入時の自動設定を実現できます。**config.txt** ファイルの内容は以下の形式です。

```
SSID=WiFi_Name
PASSWORD=WiFi_Password
MQTT_CLIENT_NAME=Topic
TOKEN=Default_Token
DEVICE_LABEL=Device_Name
```

上記の必要なフィールドを、**ステップ3**で取得した情報に対応するように記入してください。記入が完了すると、config.txt ファイルの内容は以下の例のようになります。

```
SSID=CHCK
PASSWORD=123456
MQTT_CLIENT_NAME=al49mw880j
TOKEN=BBFF-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DEVICE_LABEL=Wio-Terminal
```

:::caution
変更を加えた後、**config.txt** ファイルを**保存**し、側面のボタンを一度下に倒して Wio Terminal を**再起動**してください。
:::

**ステップ5.** **ネットワーク**タブに入り、**WiFi**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

これで設定の読み込みを待機します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

WiFi設定が読み込まれると、まずWiFiネットワークに接続し、その後Ubidotsプラットフォームに接続します。Ubidotsとの接続が成功すると、以下の画面が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**ステップ6.** Ubidotsでデータを確認する

データが正常にUbidotsに送信されると、Ubidotsデバイスでデータ情報を確認できます。

Ubidotsは非常にシンプルなインターフェースを持っており、デバイス情報を確認したい場合は、ダッシュボードの上部にある**Devices**を選択できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

ここでデバイス名をクリックすると、すべての履歴タブを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/54.png" /></div>

:::note
Ubidotsの無料版では、**1つのTOKEN**と**10個のラベル**のみ作成可能です。10個以上のラベルを作成すると、アップロードされたラベルやデータは破棄されます。
:::

:::note
Ubidotsを使用してさらに独立した開発を行いたい場合は、[Ubidotsに関するさらなるチュートリアル](https://wiki.seeedstudio.com/ja/Getting_started_with_Ubidots/)をご参照ください。
:::

## キット内の他のGroveセンサーを接続する

内蔵センサーに加えて、SenseCraftの可能性は無限です。キット内のGroveセンサーもWio Terminalに接続可能で、自動的に認識されます。

### GroveセンサーをWio Terminalに接続する

現在のSenseCraftバージョンでは、同時に1つのセンサーのみ接続して使用することがサポートされています。（Grove Wio E5を除く）

接続する際は、キットに付属のGroveケーブルを使用して、使用したいセンサーをWio Terminalの右下にあるGroveコネクタに接続してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

上図はGrove Vision AIを例に示しており、キット内のセンサーがどのように接続されるかを示しています。もちろん、他のセンサーにも同様に適用されます。（Grove Wio E5を除く）

:::caution
キット内のGroveセンサーをWio Terminalの左側のGroveコネクタに接続しないでください。左側のGroveコネクタは現在、Grove Wio E5の接続専用に設計されています。
:::

### Groveセンサーの値を確認する

Groveセンサーを接続すると、SenseページでGroveセンサーの値を確認できます。

**Sense**ページで**右**矢印ボタンを押すだけで、外部センサーの値が表示されます。通常、外部センサーの値は**IMUセンサー**の後に表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/56.png" /></div>

### Groveセンサーのデータをクラウドにアップロードする

SenseCraftによるセンサーの検出は完全に自動化されているため、ユーザーが追加で何かを行う必要はありません。もちろん、これには新しく挿入されたGroveセンサーのデータアップロードも含まれます。

- 同様に、GroveセンサーのデータをLoRaWAN®経由で送信したい場合は、**左側にあるGrove Wio E5を接続**するだけです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/57.png" /></div>

その後、**[LoRa®経由でセンサーのデータをSenseCAPに送信する](https://wiki.seeedstudio.com/ja/K1100-quickstart/#send-sensor-data-to-sensecap-via-lora)**の手順に従ってください。

- WiFi経由でデータを送信したい場合は、他に何も接続する必要はありません。**[WiFi経由でセンサーのデータをUbidotsに送信する](https://wiki.seeedstudio.com/ja/K1100-quickstart/#send-sensor-data-to-ubidots-via-wifi)**の内容を引き続き参照してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/58.png" /></div>

## 高度なプレイ

SenseCraftを使用して遊ぶための非常に興味深く高度な方法をいくつか設計しました。このセクションを使用して、これらの機能を簡単に確認し、活用することができます。

### Vision AIリアルタイム分析

これはGrove Vision AI用に設計された機能です。このインターフェースを通じて、Vision AIの実行ログを観察することができ、Vision AIの認識をリアルタイムで確認したり、カメラ画面を調整したりするのに便利です。

**ステップ 1.** Grove Vision AIを接続する

Grove Vision AIをWio Terminalの**右側**にあるGroveコネクタに接続してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

**ステップ 2.** Vision AIリアルタイム分析インターフェースにアクセスする

Wio Terminalの上部にある2番目のボタンをクリックして、**Process**画面にアクセスしてください。

Process画面のデフォルト選択は**Vision AIリアルタイム分析**です。この状態で、5方向ボタンの**中央を押す**ことで、インターフェースに入ることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/59.png" /></div>

その後、このページでVision AIのログを確認することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/61.png" /></div>

### TinyML例

これは、組み込み機械学習用に設計されたWio Terminalの機能です。このページでは、用意されたTinyMLシリーズのコースにアクセスし、Wio TerminalとVision AIの強力な機械学習機能を体験できます。

**ステップ 1.** Wio Terminalの上部にある2番目のボタンをクリックして、**Process**画面にアクセスしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/60.png" /></div>

**ステップ 2.** TinyML例インターフェースにアクセスする

5方向ボタンの右矢印を押してTinyML例を選択します。その後、5方向ボタンの**中央を押す**ことでインターフェースに入ることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/62.png" /></div>

### グラフ可視化

Wio Terminalには折れ線グラフ表示機能が搭載されており、各センサーの値がどのように変化するかを観察することができます。

光センサーの値の折れ線グラフを例にとります。

Light列がすでにハイライトされている状態で、5方向ボタンの**中央を押す**ことで、光センサーのデータのグラフ可視化モードに入ることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/63.png" /></div>

### TFカードへの保存

ユーザーがオフラインでTFカードにデータを保存し、その後データをフィルタリングまたは分析する必要がある場合を考慮して、Wio TerminalにはデータをTFカードに保存する機能も設計されています。

前述のグラフ可視化モードにいるときに、再度**中央を押す**と、このページが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/65.png" /></div>

ここで、センサーのデータをTFカードに保存することができます。まず、TFカードをWio Terminalに挿入してください。

その後、**中央ボタン**を押して**Save to TF card**を選択すると、**Saving has been started**というメッセージが表示されます。このメッセージが消えると保存が完了し、データは**.csvファイル**として保存されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/64.png" /></div>

もしTFカードの容量がいっぱいの場合、以下のように通知されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/66.png" /></div>

## 次に何をすればいいですか？

このクイックスタートガイドの手順を無事に完了し、センサー機器から SenseCAP コンソールや Ubidots ビューにデータが短時間で転送されるのを確認できましたね！おめでとうございます。

次に、センサーのプログラミングや LoRaWAN®、クラウドプラットフォームなどについてさらに深く学びたい場合は、[SenseCAP - センサープロトタイプキット概要](https://wiki.seeedstudio.com/ja/K1100-Getting-Started/)をご覧ください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/41.png" /></div>

## リソース

- **[GitHub]** [Seeed_Arduino_K1100 ソースコード](https://github.com/Seeed-Studio/Seeed_Arduino_K1100)

## トラブルシューティング

> Q1: SenseCAP プラットフォームのデータ内容が Wio Terminal に表示されるデータと異なるのはなぜですか？

A: データは5分ごとに読み取られ、その後3分以内に送信されるためです。そのため、センサー値は5分間隔で読み取られた値の1つであり、遅延が生じる可能性があります。一方、Wio Terminal のデータはリアルタイムであるため、両者の間に不一致が生じることがあります。

> Q2: LoRaWAN® に接続できないのはなぜですか？

A: もし常に LoRaWAN® に接続できない場合は、周囲の環境で十分に強い信号と安定した Helium ネットワークカバレッジがあることを確認してください。完全なプロセスを体験するために、独自の Helium ゲートウェイを持つことをお勧めします。Grove - Wio-E5 はプロトタイプであり、そのアンテナの強度は大型の LoRa® デバイスと比較して劣ります。
さらに、これは Helium ネットワークの不安定性にも関連している可能性があります。2022年7月以降、一部の応答がない状態が続いており、これは Helium の公式修正を待つしかありません。

> Q3: なぜ時々、データセット内の一部のセンサーデータが SenseCAP に表示されないのですか？

A: Grove - Wio-E5 がパケットロスを経験している可能性があります。一般的に、パケットロスは通常の状況であり、過度に心配する必要はありません。非常に深刻なパケットロスが発生した場合は、Wio Terminal を再起動してみてください。
リアルタイムデータと安定性に非常に高い要求がある場合は、産業用グレードの SenseCAP シリーズデバイスを検討してください。

> Q4: K1101用のキットを購入していない場合、このルーチンを体験することはできますか？

A: このキットを購入していないお客様は、SenseCAP への完全なアクセスを体験することはできないかもしれません。このキットに含まれる Grove - Wio-E5 は特別版であり、個別に購入した製品では SenseCAP にアクセスできません。

> Q5: 別のプログラムを使用した場合、ファームウェアを復元することはできますか？

A: Wio Terminal 用のファームウェアをいつでも書き込むことができ、Grove - Wio-E5 の元のファームウェアを破壊しない限り、このルーチンを常に使用することが理論的に可能です。ファームウェアを書き込む方法は以下の通りです。
スイッチを素早く2回スライドさせます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

この時点で、コンピュータに **Arduino** という名前のディスクが表示されます。このディスクにファームウェア（.uf2ファイル）をコピーするだけです。ファームウェアがインストールされると、ディスクは自動的に取り出され、Wio Terminal はセットアップバンドインターフェースに再起動します。

> Q6: Grove - Wio-E5 の Dev EUI、App EUI、App Key を変更した場合、それを取得する方法はありますか？

A: ユーザーがプロジェクトに合わせて3つのコードの情報を変更した場合でも、Grove - Wio-E5 の背面にあるステッカー情報を使用して、いつでもそれらを取得できるように問い合わせインターフェースを公開しています。

```
https://sensecap.seeed.cc/makerapi/device/view_device_info?nodeEui=<your_eui>&deviceCode=<your_code>
```

上記のウェブサイトをブラウザで開き、Grove - Wio-E5 の背面に記載されている **EUI** と **Code** の情報を対応する位置に入力して、デバイスに対応する3つのコードを確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/36.png" /></div>

**3つのコードを大切に保管してください。コードの紛失による損失はユーザーの責任となります。**

> Q7: SenseCAP の DevEUI、AppEUI、AppKey を他のプラットフォーム（例: Helium や TTN）で使用することは可能ですか？

A: これは不可能です。SenseCAP の3つのコードは他のプラットフォームにバインドするために使用することはできません。そうしないと、異なるプラットフォームでデータ異常が発生するリスクが高まります。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® マークは、Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は、LoRa Alliance® からのライセンスの下で使用されるマークです。