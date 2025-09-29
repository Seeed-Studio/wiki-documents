---
description: Google Sheets 統合
title: Google Sheets 統合
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Integrate_into_Google_Sheets_via_Helium
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Google Sheets への統合 Helium 経由

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/83.jpg" /></div>

Google Sheets は、ユーザーがスプレッドシートを作成、更新、修正し、リアルタイムでデータをオンラインで共有できるウェブベースのアプリケーションです。

Google Sheets のオンラインスプレッドシートアプリケーションを使用すると、ユーザーは情報を整理し分析するためにスプレッドシートをオンラインで作成、編集、フォーマットできます。Google Sheets は Microsoft Excel とよく比較されます。両方のアプリケーションは似た目的で使用されますが、Google Sheets は基本的に Microsoft Excel の基本機能をクラウドベースで提供する Google のバージョンです。

Helium の統合機能のおかげで、センサーデータを Google Sheets に簡単に保存し、それに基づいて簡単なデータ分析を行うことができます。

## 産業用センサーへのアップグレード可能

SenseCAP の [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用すると、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新の SenseCAP S210x をお試しください。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光強度</strong></a></td>
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

## Googleフォームの作成

このチュートリアルを学ぶ前にGoogleアカウントを登録していない場合は、まず[こちら](https://accounts.google.com/signup/v2/webcreateaccount?biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&hl=en-GB)でGoogleアカウントを作成してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/67.png" /></div>

アカウント登録が完了したら、[Googleフォームのページ](https://docs.google.com/forms/u/0/)にログインしてください。そして、新しいGoogleフォームを作成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/68.png" /></div>

質問形式は「短い回答」に設定することをお勧めします。

ここでは、Vision AI Moduleを使用してテーブルを作成する例を示します。このテーブルには、検出された人数とその信頼度レベルの2つのデータセットが含まれます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/69.png" /></div>

:::note
    新しいセンサータグを作成するたびに「短い回答」を選択する必要があります。
:::
回答タブに移動し、Google Sheetsボタンをクリックしてフォームの結果をGoogle Sheetsに送信するように設定します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/70.png" /></div>

新しいポップアップウィンドウでGoogleフォームのタイトルを入力し、右下の**作成**ボタンをクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/71.png" /></div>

必要な列が作成されていることを確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/72.png" /></div>

## フォームを公開する

フォーム設定ページに戻り、右上の**送信**ボタンをクリックしてフォームを共有するリンクを取得します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/73.png" /></div>

以下のような共有リンクが表示されます。

`https://docs.google.com/forms/d/e/1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw/viewform?usp=sf_link`

ここではフォームのIDのみが必要なので、`https://docs.google.com/forms/d/e/`というプレフィックスと`/viewform?usp=sf_link`というサフィックスを削除します。スラッシュを含まない大きな文字列が残ります。

`1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw`

このIDを記録してください。このIDはHelium統合で使用されます。

## HeliumでGoogle Sheets統合を追加する

Heliumに戻り、コンソールでGoogle Sheets統合を追加します。左側のメニューからIntegrationsに移動します。この場合、以下のようにGoogle Sheets統合を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/74.png" /></div>

新しいページで**Add Integration**をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/75.png" /></div>

新しいページで、先ほど取得したフォームIDを対応するフィールドに入力し、**Get Google Form Fields**をクリックしてIDが正しいか確認します。クリック後、フォームの列ラベルの内容を取得できればリンクは正しいです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/76.png" /></div>

下部の**Generate Function Body w/ Fields Above**をクリックすると、Heliumが必要なデコーダを自動生成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/77.png" /></div>

:::tip
この時点では、右側のAdd Integrationボタンを急いでクリックする必要はありません。統合は、渡されたセンサー値に対応するように少し修正が必要です。
:::

## デコーダーを作成する

キット内のすべてのセンサーをGoogle Sheetsにインポートするために必要な完全なデコーダーコードを準備しました。以下の表をご参照ください。

対応するセンサーのデコーダーコードを使用する前に、上記のチュートリアルに従ってGoogleフォームを作成し、共有していることを確認してください。また、提供されたコードを直接使用する場合、**フォーム内のセンサーのラベルがコードと一致している必要があります**。

<table align="center">
  <tbody><tr>
      <th>センサータイプ</th>
      <th>ダウンロードアドレス</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内蔵光センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/light.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内蔵IMUセンサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/IMU.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">土壌湿度センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">VOCおよびeCO2ガスセンサー (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sgp30.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">温度＆湿度センサー (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sht40.js">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Vision AIモジュール</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/visionai.js">ダウンロード</a></td>
    </tr>
  </tbody></table>

:::note
Googleフォームで使用されるデコーダーは、[Connecting to Helium](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/#write-decoders-function-for-different-sensors)で提供されるデコーダーとは互換性がありません。
:::
前のステップから続けて、使用しているセンサーのコーデックをHeliumのコードエリアにコピーして置き換えます。その後、右側の「Add Integration」をクリックするだけです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/78.png" /></div>

もちろん、デコーダーとGoogleフォームの統合を**Flow**に追加することを忘れないでください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/79.png" /></div>

## コードをアップロードしてデータをHeliumに送信する

センサー値をHeliumに送信するコードをアップロードするには、[Connecting to Helium tutorial](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/#upload-code-send-data-to-helium)の指示に従ってください。

データの送信が開始されると、Google Sheetsでデータがリアルタイムで更新されるのを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/81.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/84.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/85.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/86.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/87.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/88.png" /></div>

上記のように、Google Sheetsにさまざまな表スタイルを追加することで、データをより直感的に表示したり、データの傾向を理解しやすくすることができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/80.png" /></div>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>