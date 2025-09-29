---
description: 土壌水分モニタリングアラームシステム
title: 土壌水分モニタリングアラームシステム
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1111-Quick-Start-Guide
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# 土壌水分モニタリングアラームシステム

このWikiでは、キットに含まれるWio Terminalを使用して、Grove - Wio-E5およびGrove - 土壌水分センサーを接続し、それらをHeliumおよびAzure IoT Centralプラットフォームと連携させる方法を紹介します。これにより、リアルタイムの庭の植木鉢モニタリングと水やりリマインダーを構築し、モノのインターネット（IoT）の一端を垣間見ることができます。

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新のSenseCAP S210xをお試しください。

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

## 前提条件

すべてを始める前に、以下の前提条件を満たす必要があります。

### 必要な材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={310} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove 土壌湿度センサー</td>
    </tr>
  </tbody></table>

**ソフトウェア**

<div>
  - <a href="https://www.arduino.cc/" target="_blank"><span>Arduino</span></a>
</div>

Arduino を使用して Wio Terminal にプログラムをアップロードします。Arduino を Wio Terminal と初めて使用する場合は、<a href="https://wiki.seeedstudio.com/ja/Preliminary-Preparation/" target="_blank"><span>Getting Started with Wio Terminal</span></a> を参照することを強くお勧めします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

**その他**

- 植木鉢

このキックスタートデモでは、土壌湿度センサーを使用します。そのため、十分な深さの土壌を持つ植木鉢が最適です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit32.png" /></div>

### 接続のための Helium 登録

<a href="https://console.helium.com/" target="_blank"><span>Helium</span></a> は、LoRaWAN® 対応 IoT デバイス向けに公共の長距離無線通信を提供するグローバルで分散型のホットスポットネットワークです。

これにより、LoRa® を介して一定量のデータを無料で送信でき、Wio Terminal に接続します。Wio Terminal を接続するために必要なすべての情報は、アカウント登録後の**最初のページ**に表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

:::note
デバイスが完全に準備されるまで通常約20分かかります。最初に追加することをお勧めします。
:::

### 通知のための Azure IoT 登録

<a href="https://portal.azure.com/" target="_blank"><span>Azure IoT Central</span></a> は、IoT アプリケーションとその接続デバイス間の通信のための中央メッセージハブとして機能するクラウドホスト型の管理サービスです。

これにより、LoRa® データを管理し、最初の1週間は無料でいくつかのアクションを実行できます。これを Helium と統合して、**データを監視**し、自動的な**植木鉢の水やりリマインダー**を設定します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit30.png" /></div>

## 土壌湿度モニターの開始

この簡単なデモでは、Grove - 土壌湿度センサーを使用したシンプルな LoRa® 接続のみを必要とし、自動土壌湿度モニターとアラートを目的としています。

### 機器の初期設定

- **ステップ 1**. Grove ケーブルを使用してすべてを接続します。Grove - 土壌湿度センサーは Wio Terminal の**右側**に、Grove - Wio-E5 は**左側**に配置します。

:::note
Grove - Wio-E5 の位置は、アップロードされるコードに影響を与えます。
:::

- **ステップ 2**. Type-C ケーブルを使用して PC と Wio Terminal を接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>

### Wio Terminal を Helium に接続

- **ステップ 1**. PC 上で <a href="https://console.helium.com/" target="_blank"><span>Helium</span></a> ページを開き、左側の列で「Devices」をクリックします。**新しいデバイスを追加**し、以下の情報を確認します（例）：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3a.png" /></div>

- **ステップ 2**. 以下の Arduino コードをダウンロードし、Arduino で開きます。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></div><p />
</div>

- **ステップ 3**. 特定のコード行を見つけ、Helium 接続情報をコード行に入力します。この際、**文字と数字のみを変更**することを忘れないでください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit4a.png" /></div>

- **ステップ 4**. 正しいボードとポートを選択します。左上のボタンをクリックしてアップロードを進めます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3.png" /></div>

- **ステップ 5**. Arduino の右上にある「シリアルモニター」を開き、接続が完了し、データが送信されたことを確認します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit5a.png" /></div>

- **ステップ 6**. Helium のウェブサイトに戻り、「Devices」を確認します。下部にデータが受信されたことが表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/7.jpg" /></div>

LoRa® 通信の特性上、データの表示は数字と文字の配列になります。これにより混乱する可能性があるため、真の情報を得るためにデコードする必要があります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

### Helium で受信データをデコード

- **ステップ 1**. ページの左側の列で「Function」をクリックし、カスタム関数を追加します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

- **ステップ 2**. 以下のコードをコピーして「CUSTOM SCRIPT」に追加し、保存してください。

```cpp
function Decoder(bytes, port) {
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
  return decoded;
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit8.png" /></div>

- **ステップ 3**. 左側の「Flows」をクリックし、「Devices」と「Functions」ブロックをパレットにドラッグします。それらを以下のようにリンクしてください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit9.png" /></div>

これにより、データを読みやすい形式に変換できます。

- **ステップ 4（オプション）**. 「Function」ページに戻り、デバイスから<a href="https://wiki.seeedstudio.com/ja/Connecting-to-Helium/#upload-code-send-data-to-helium" target="_blank"><span>入力された16進データ</span></a>を取得できます。ポートを「8」に設定し、「RUN」ボタンをクリックしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

これでデータを読み取ることができますが、プロセスが少し複雑で使いやすいとは言えません。データを継続的に表示するにはどうすればよいでしょうか？

### Azure IoT プラットフォームの統合

データを表示および管理し、さらにはアクションを実行するために、別のプラットフォーム **Azure IoT** を統合できます。

- **ステップ 1**. まず Helium ページを開き、左側のカラムで「Integrations」をクリックし、「Azure IoT Central」を選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit15.png" /></div>

- **ステップ 2**. <a href="https://apps.azureiotcentral.com/" target="_blank"><span>Azure IoT Central</span></a> で新しいアプリケーションを作成します。その後、以下の必要な情報を入力して Helium に Azure IoT Central を統合します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit16.png" /></div>

- **ステップ 3**. ページの左側カラムで「Flows」をクリックし、Azure IoT Central のブロックをドラッグしてカスタマイズされた関数の後にリンクします。順序は以下のようになります。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit17.png" /></div>

- **ステップ 4**. 「Azure IoT Central」ページに移動し、左側で「Devices」を選択します。ランダムな番号で名前付けされたデバイスが表示されます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit18.png" /></div>

- **ステップ 5**. デバイスを選択し、以下の図のように「Raw data」情報を確認します。この情報には、Helium からのすべてのデータが含まれており、デコードされたデータも含まれています。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit19.png" /></div>

これで継続的なデータ表示が可能になりましたが、スケッチで表示したり、データを使用してアクションを実行することは可能でしょうか？

### Azure IoT Central のさらなる機能

Helium からのすべてのデータを管理し、関心のあるデータを選択して、自動メールアラートを構築することができます。

- **ステップ 1**. 「Devices」ページで「Unformatted data」をクリックし、自動デバイステンプレートを作成します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit20.png" /></div>

- **ステップ 2**. 「Device template」に移動すると、テンプレートが表示され、同じタイプのデータがそれぞれのブロックに個別に保存されるようになります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21.png" /></div>

- **ステップ 3**. 「Overview」を選択すると、データ値を表示するスケッチが自動的に作成されていることがわかります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21a.png" /></div>

表示したい土壌水分データを変更し、スケッチの名前を変更します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit22.png" /></div>

完了したら、**「Save」** をクリックし、その後 **「Publish」** をクリックしてテンプレートを保存してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit23.png" /></div>

- **ステップ 4**. 左側の「Rules」に移動し、新しいルールを作成します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit24.png" /></div>

- **ステップ 5**. 以下の情報を入力して自動メールアラートを作成します。

デバイステンプレート（通常はデフォルト）:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit25.png" /></div>

データの種類と設定したい値を設定します:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit11.png" /></div>

Azure IoT Central に登録されたメールアドレスと送信したいメモを入力します:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit12.png" /></div>

**結果**

- 左側の「Devices」に戻り、デバイスを選択すると、データがスケッチに表示されているのがわかります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit31.png" /></div>

- 同時に、設定した値がしきい値に達すると、事前に設定したメールが継続的に送信されます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit26.png" /></div>

メールの内容は以下のようになります:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit27.png" /></div>

鉢植えに水をあげるのを忘れないでください！

ありがとうございます！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1の気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xをぜひお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## 声明

- LoRa®マークはSemtech Corporationまたはその子会社の商標です。
- LoRaWAN®はLoRa Alliance®からライセンスを受けて使用されるマークです。