---
description: SenseCAP と Node-RED の使用方法
title: SenseCAP と Node-RED の使用方法
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100_sensecap_node-red
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# SenseCAP コンソールと Node-RED クイックスタート

**SenseCAP K1100 - センサープロトタイプキット** は、Seeed Studio が LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® と IoT アプリケーションを最も簡単に展開し習得できるように設計されています。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに最新の SenseCAP S210x をお試しください。

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

**Node-RED** は、ハードウェアデバイス、API、およびオンラインサービスを新しい興味深い方法で接続するためのプログラミングツールです。

ブラウザベースのエディターを提供しており、パレット内の幅広いノードを使用してフローを簡単に接続し、ワンクリックでランタイムにデプロイできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" /></div>

SenseCAP プラットフォームからさまざまな他の PaaS プラットフォームにデータを接続し、より深いデータ処理を行いやすくするために、**SenseCAP & Node-RED** に関する一連のチュートリアルを作成します。

このチュートリアルはシリーズの最初のもので、Node-RED のインストールと使用方法、および SenseCAP のバックエンド API を呼び出して Node-RED に接続する方法を説明します。

## Node.js® のインストール

Node-RED をローカルにインストールするには、[サポートされている Node.js のバージョン](https://nodered.org/docs/faq/node-versions)が必要です。

公式の [Node.js ホームページ](https://nodejs.org/en/) から最新の 14.x LTS バージョンをダウンロードしてください。システムに最適なバージョンが提供されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
ダウンロードした MSI ファイルを実行してください。Node.js のインストールにはローカル管理者権限が必要です。管理者でない場合、インストール時に管理者パスワードを求められます。インストール時にはデフォルト設定を受け入れてください。インストールが完了したら、開いているコマンドプロンプトを閉じて再度開き、新しい環境変数が適用されるようにしてください。
:::

プログラミング環境がインストールされていないコンピューターを使用している場合、Node.js のインストール中に必要なツールをインストールするチェックボックスをオンにすることをお勧めします。これにより、多くの手間を省くことができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

Node-RED をインストールする最も簡単な方法は、Node のパッケージ管理ツール **npm** を使用することです。ただし、npm 1.x で Node-RED をインストールすることは推奨されません。代わりに最新の **npm 2.x** バージョンにアップグレードしてください。

:::note
**Windows**（Windows 10 以上が必要）では、**Win+R** ショートカットを使用してポップアップウィンドウに `cmd` と入力し、ターミナルを開いて以下のコマンドを実行してください。

**MacOS** または **Linux** を使用している場合は、ターミナルで以下のコマンドを実行し、非ルートユーザーの場合はコマンドの前に `sudo` を追加してください。
:::

```sh
npm install -g npm@2.x
```

インストール後、コマンドプロンプトを開き、以下のコマンドを実行して Node.js と npm が正しくインストールされていることを確認してください。

```sh
node --version && npm --version
```

以下のような出力が返されるはずです：

```sh
> v16.17.0
> 2.15.12
```

## Node-RED のインストール

Node-RED をグローバルモジュールとしてインストールすると、システムパスに `node-red` コマンドが追加されます。コマンドプロンプトで以下を実行してください：

```sh
npm install -g --unsafe-perm node-red
```

Node-RED がグローバル npm パッケージとしてインストールされている場合、以下のコマンドを直接実行してください：

```sh
node-red
```

これにより、Node-RED のログがターミナルに出力されます。Node-RED を実行し続けるには、ターミナルを開いたままにしておく必要があります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

これにより、http://localhost:1880 で Node-RED エディターを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## <span id="jump1">SenseCAP API を取得する</span>

このセクションに進む前に、SenseCAP コンソールで K1100 デバイスをバインドしていることを確認してください。

[SenseCAP コンソール](https://sensecap.seeed.cc/portal/#/dashboard) にログインします。ダッシュボードの上部にあるユーザー名の右側のドロップダウンバーで、**組織情報**を見つけて選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/5.png" /></div>

組織情報ページでは、**組織 ID** を確認できます。これを記録しておき、後の手順で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/6.png" /></div>

次に、SenseCAP の API キーを取得する必要があります。ダッシュボードの左側で **Security -> Access API keys** をクリックしてください。その後、アクセスキーを作成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/11.png" /></div>

作成した **API ID** をクリックすると、**Access API keys** を取得できます。これを記録しておき、後の手順で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/7.png" /></div>

## HTTP ノードを作成する

エディタウィンドウは以下の 4 つのコンポーネントで構成されています：

- 上部のヘッダー：デプロイボタン、メインメニュー、ユーザー認証が有効な場合はユーザーメニューを含む。
- 左側の [パレット](https://nodered.org/docs/user-guide/editor/palette)：使用可能なノードを含む。
- 中央のメイン [ワークスペース](https://nodered.org/docs/user-guide/editor/workspace)：フローを作成する場所。
- 右側の [サイドバー](https://nodered.org/docs/user-guide/editor/sidebar)。

上記のリンクをクリックして、それぞれのコンポーネントについて詳しく学んでください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/12.png" /></div>

この例では、MQTT ノードを使用して SenseCAP から受信したセンサー値を表示する方法を説明します。その前に、今後使用するノードについて理解を深めましょう。

### http ノード

#### http in ノード

**http in** ノードは、Web サービスを作成するために使用できます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/13.png" /></div>

ノードをワークスペースにドラッグし、ノードをダブルクリックしてノードの設定ページにアクセスします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/14.png" /></div>

ここで、作成した Web サービスの URL を設定する必要があります。これにより、`http://localhost:1880/<URL>` のアドレスを通じて作成した Web ページにアクセスできます。

#### http response ノード

**http response** ノードは、HTTP 入力ノードから受信したリクエストに対してレスポンスを返します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/15.png" /></div>

通常、これを個別に設定する必要はなく、ワークベンチに直接ドラッグして使用します。

#### template ノード

テンプレートノードは、提供されたテンプレートに基づいてプロパティを設定できます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/17.png" /></div>

このノードを使用して、簡単な HTML 言語を使用して Web ページの表示内容を設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/18.png" /></div>

例えば、「Hello World!」を表示したい場合：

<div>
  ```html
  <h1>Hello World!</h1>
  ```
</div>

最後に、**http in** を **template** に接続し、**template** を **http response** に接続します。その後、右上の **デプロイ** ボタンをクリックすると、簡単な Web ページが作成されます。これが基本的な Node-RED の操作手順です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/19.png" /></div>

この例では、センサーデータの URL を作成しました。デプロイ後、ブラウザのアドレスバーに `http://localhost:1880/sensor_data` を入力すると、作成したページにアクセスできます。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100-nodered/20.png" /></div>

## MQTT ノードを作成する

このセクションでは、MQTT ノードを使用して SenseCAP のデータ情報を取得する方法について説明します。

### debug ノード

選択したメッセージプロパティをデバッグサイドバータブに表示し、オプションでランタイムログにも表示します。デフォルトでは `msg.payload` を表示しますが、任意のプロパティ、完全なメッセージ、または JSONata 式の結果を表示するように設定できます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/23.png" /></div>

### mqtt ノード

MQTT ブローカーに接続し、指定されたトピックからのメッセージを購読します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/26.png" /></div>

**ステップ 1.** 新しい mqtt-broker ノードを追加します。

**mqtt in** ノードをドラッグして配置し、ダブルクリックして設定ページを開きます。その後、**Add new mqtt-broker** の横にある編集ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/27.png" /></div>

mqtt-broker の設定は以下のように入力する必要があります。

- サーバー: openstream.api.sensecap.seeed.cc
- ポート: 1883
- プロトコル: MQTT V3.1.1
- クライアント ID: フォーマットは `org-<Organization ID>-<Random ID>`
  - `<Organization ID>`: 組織 ID。これは [Get the SenseCAP API](#jump1) で取得済みです。
  - `<Random ID>`: ランダムに生成した数字または小文字の英字を使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/28.png" /></div>

次に、**Security** オプションフィールドにユーザー名とパスワードを入力します。

- ユーザー名: フォーマットは `org-<Organization ID>`
  - `<Organization ID>`: 組織 ID。これは [Get the SenseCAP API](#jump1) で取得済みです。
- パスワード: [Get the SenseCAP API](#jump1) で取得した **Access API keys** を入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/29.png" /></div>

最後に、右上の **Add** ボタンをクリックして **mqtt in** ノードの設定ページに戻ります。

- トピック: 特定のフォーマットでトピックを設定することで、受信するデバイスとデータタイプを決定します。

トピックフォーマット: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody>
    <tr>
      <td align="center">OrgID</td>
      <td align="center">組織 ID。これは <a href="#jump1" target="_blank">Get the SenseCAP API</a> で取得済みです。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">センサー機器の一意の識別子。この情報は Grove - Wio E5 の背面ステッカーや SenseCAP コンソールデバイスで確認できます。</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">センサーが接続されているデバイスの物理インターフェース。K1100 キットの場合、デフォルト値は 1 です。</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">予約フィールド。</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">測定値 ID。この ID は <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP ドキュメント</a> の Measurement IDs セクションで確認できます。</td>
    </tr>
  </tbody>
</table>

:::note
このチュートリアルの内容は K1100 キットにのみ適用されます。そのため、**LoraWAN Dev Kit** 内の測定値 ID を参照し、他の ID を使用しないでください。
:::
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/k1100-nodered/30.png" /></div>

例えば、Wio Terminal が送信する光センサーのデータを取得したい場合、入力するトピック情報は以下のようになります。

```
/device_sensor_data/424324324324324/2CF7F1C043200002/1/+/4193
```

:::tip
`<OrgID>` フィールドは必須です。`+` はこのフィールドにフィルターがなく、すべてに一致することを意味します。そのため、`/ + / + / + / +` はすべての `<DeviceEUI>`, `<Channel>`, `<Reserved>`, `<MeasurementID>` をリッスンします。

すべてのメッセージをリッスンしたい場合、トピックは以下のように設定します。

```
/device_sensor_data/424324324324324/+/+/+/+
```

:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/31.png" /></div>

**ステップ 2.** debug ノードを追加する

次に、debug ノードを追加して、すべてが正常に動作しているかどうかを確認しやすくします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/34.png" /></div>

**ステップ 3.** Wio Terminal の電源を入れ、SenseCAP にデータ送信を開始する

**Deploy** ボタンをクリックし、すべてが正しく設定されていれば、**mqtt in** ノードが接続済みと表示されます。Wio Terminal の電源を入れて動作を開始し、SenseCAP にデータ送信を開始すると、デバッグウィンドウにデータが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/33.png" /></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>