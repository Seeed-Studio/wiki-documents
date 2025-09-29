---
title: Wio Node
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_Node/
slug: /ja/Wio_Node
last_update:
  date: 05/15/2025
  author: gunengyu
---


IoTプロジェクトを構築することは非常に魅力的です。周囲のほぼすべてのものを接続して制御することができます。しかし、IoTアプリケーションを構築するのは簡単ではありません。ハードウェア、プログラミング、ジャンパーワイヤー、はんだ付けなど、多くの作業が必要です。熟練したユーザーでもすべての作業を処理するのに数時間を費やすことがあり、初心者にとってはなおさらです。IoTプロジェクトの開発を簡素化するために、Seeedは**[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)**を**[Kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)**で発表し、大成功を収めました。Kickstarterでのスローガンは、Wio Linkの主な特徴をよく表しています。

**3ステップ。5分。自分のIoTアプリケーションを構築しよう！**

非常に簡単で、迅速に構築できますが、すべての条件に理想的というわけではありません。
例えば、グローブコネクタが2つだけ必要な場合はどうでしょうか？アプリケーションのスペースが限られていて、Wio Linkが大きすぎる場合はどうでしょうか？コストを削減したい場合はどうでしょうか？そこで、Wio Linkをリリースした直後に、マイクロで経済的なソリューションが計画されました。数か月間、SeeederはWi-Fiボードを再設計し最適化し、ついに新しいWioファミリーのメンバーである**Wio Node**が誕生しました。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

その名前の意味の通り、Wio NodeはIoTプロジェクトで物を接続する真のWi-Fiノードです。Wio Linkが兄なら、Wio NodeはWioファミリーの弟に違いありません。このかわいい小さなデバイスは、Wio Linkの4分の1のサイズでありながら、Wio Linkの基本的な機能をすべて統合しています。

Wio Nodeのエコシステムは、オープンハードウェアの**Wio Nodeボード**、**オープンソースのWio Linkモバイルアプリ**、および**オープンソースのIoTサーバー実装**で構成されています。そのため、Wio LinkのソフトウェアプラットフォームはWio Nodeでも利用可能です。

[![今すぐ購入](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)

:::caution
WioのIFTTT機能はEOL（End of Life）となっています。しかし、Wio APPは利用可能です。Wio APPのAPIを使用してセンサーの状態を読み取り、アクチュエータを制御することができます。
:::

## 特徴

----

- ハードウェアプログラミング不要、ブレッドボード不要、ジャンパーワイヤー不要、はんだ付け不要。
- 多くのGroveモジュールに対応（モバイルアプリでリストを確認してください）。
- Groveモジュールのプラグアンドプレイ。
- マイクロコントローラプログラミングの代わりに視覚的な構成。
- クラウドコンパイルとOTAによる自動更新。
- 現実世界を仮想プラットフォームに接続。すべてのセンサーが仮想RESTful APIに変換。
- Wio Nodeを管理するためのAndroid & iOSアプリ。
- SeeedのチャンネルによるIFTTT対応。
- コアモジュールESP-WROOM-02はCE/FCC/TELEC認証済み。

## 仕様

----
|一般|値|電源管理|値|
|:---|---|:---|---:|
|**サイズ**|28mm * 28mm|**I/OピンあたりのDC電流**|12mA|
|**クリスタル**|26MHz|**入力電圧（Micro USB）**| 5V|
|**フラッシュメモリ**|4MBytes (W25Q32B)|**入力電圧（バッテリーホルダー）**|3.4~4.2V|
|**Wi-Fiネットワークプロトコル**|802.11b/g/n|**出力DC電流**|1000mA MAX|
|**Wi-Fi暗号化技術**|WEP/TKIP/AES|**動作電圧**|3.3V|
|**拡張Groveコネクタ1**|UART0/I2C0/D0 |**充電電流**|500mA MAX|
|**拡張Groveコネクタ2**|アナログ/I2C1/D1|

## アプリケーションのアイデア

----
Wio Nodeは、以下のようなプロジェクトに対してシンプルで経済的なWi-Fiソリューションを提供するよう設計されています：

- スマートホーム
- 知的環境モニタリング
- 面白いおもちゃ
- Web of Things
- Internet of Things

実際、私たちの[**レシピ**](https://community.seeedstudio.com/projects.html?t=Wio)には多くのプロジェクトがあります。ぜひ訪問して興味深いプロジェクトを見つけたり、自分自身のプロジェクトを共有してください。きっと多くのファンを獲得できるでしょう。

|灌漑制御システム |LEDウォールのインターネット | 犬の餌やり機|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1274)    |[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1594) |[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarterモニター|不在着信モニター|ボスキー|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1081)    |[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1059) |[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
一部のレシピはWio Linkで作成されていますが、Wio Nodeに置き換えることができます。
:::

## ハードウェア概要

----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|No.|名前|機能|
|---|----|--------|
|1  |Function|Wio Nodeの動作モードを設定|
|2  |ESP8266|ESP8266ベースのマイクロコントローラー|
|3  |Reset|デバイスをリセット|
|4  |Micro USB|デバイスに電力を供給し、バッテリーを充電|
|5  |バッテリーホルダー|JST2.0コネクター、3.7Vリチウムバッテリーを接続|
|6  |Analog/I2C1/D1|Groveポート、デジタル/I2C/アナログタイプのGroveモジュールを接続可能|
|7  |UART/I2C0/D0|Groveポート、UART/I2C/デジタルタイプのGroveモジュールを接続可能|

### ステータスLED

FUNCTIONボタンの近くには2つのステータスLEDがあります。青色のLEDと赤色のLEDです。青色のLEDはネットワークステータスを示すLEDで、以下の点滅パターンがあります：

- 呼吸状態：設定モード中
- 2回素早く点滅後1秒オフ：ルーターからIPアドレスを要求中
- 1回素早く点滅後1秒オフ：サーバーに接続中
- 1秒オン後1秒オフ：ノードがオンライン
- 常時点灯：IP取得失敗またはサーバー接続失敗でノードが停止
- 素早く点滅（100msオン後100msオフ）：OTA中

:::note
青色LEDはGPIO2に接続されており、これはUART1のTXピンでもあります。ファームウェアをダウンロードする際、UART1はUART0で送信されるデータを本能的にダンプします。そのため、ファームウェアダウンロード中は青色LEDが点滅します。起動後、GPIO2はUART1のTXではなくGPIOとして設定されます。
:::
赤色LEDはもう一つのステータスLEDで、Groveモジュールの電源ステータスを示します。6つのGroveインターフェースのVCCは一緒に収束し、GPIO15で制御可能です。ノードがディープスリープモードになると、すべてのGroveモジュールの電源も失われます。赤色LEDはGroveモジュールが電源供給されているときに点灯し、電源が供給されていないときに消灯します。

### ボーナス

Wio Nodeには内蔵のLiPoバッテリー充電器が搭載されており、USB接続時にJST 2.0ポートを通じて3.7V LiPoバッテリーを充電することができます。

:::note

- USBマイクロタイプBソケットを丁寧に扱ってください。そうしないと、ソケットが基板から外れる可能性があります。

- バッテリーはパッケージに含まれていません。ただし、[Bazaar](https://www.seeedstudio.com/s/battery.html)で多くの選択肢を用意しています。
:::

## はじめに

----
Wio Node を使用して非常に基本的な LED アプリケーションを構築してみましょう。このアプリケーションでは、スマートフォンを使って約5分で LED を制御できるようになります。始める前に、以下のものを手元に用意してください：

|Wio Node|Grove - LED|Micro USB ケーブル|
|--------|-----------|------------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[今すぐ購入](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note

- スマートフォンも必要です（Android OS バージョン 4.1 以上、iOS バージョン 7 以上）

- Grove - LED にはすでに Grove ケーブルが含まれています
:::

### **ステップ 1:** Android/iOS アプリをインストールする

Wio Node デバイスを管理および設定するために Wio Link アプリをインストールする必要があります。

Android または iOS アプリをダウンロードしてインストールしてください。または、Apple の App Store や Google Play ストアで「Wio Link」と検索すると見つかります。

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Android アプリを入手](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[iOS アプリを入手](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
Android OS バージョンが 4.1 以上、iOS バージョンが 7 以上であることを確認してください。
:::

### **ステップ 2:** アカウントを作成する

- 初めて Wio アプリを使用する場合、GPS の許可が求められることがあります。許可を与えた後、サインアップしてください。
- すでにアカウントをお持ちの場合は、ログインする前にサーバーの場所を確認してください。

:::note
サーバーの場所に注意してください。間違ったサーバーの場所を選択すると、Wio Node に接続する際に失敗する可能性があります。
:::
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **ステップ 3**: Wio Node をインターネットに接続する

- CONFIG ボタンを押し続け、青色の LED が呼吸モード（フェードインとフェードアウトの点滅効果）になるまで待ちます。これにより、Wio Node が設定モードに成功し、Wio アプリによって検出可能になります。
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Confiture%20button.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Confiture%20button.png)
- 「Add your first Device」を押します。
- Wio Node を選択します。
- 「Go to Wi-Fi list」を選択すると、スマートフォンの Wi-Fi 設定画面に移動します。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)

- 青色の LED を呼吸モードに成功させた場合、Wi-Fi リストに Wio Node が表示されます。それに接続してください！（通常、Wi-Fi リストでは Wio Node と表示されません。例では、私のデバイスは Wio_091016 と表示されていますが、リストには wio_xxxxxx と表示される場合があります。）
- 接続が完了すると通知が届きます。その後、アプリに戻ることができます。
- 次のステップは、自宅または会社の Wi-Fi に接続することです。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)

- 接続したい Wi-Fi にパスワードがある場合、パスワードの入力が求められることがあります。
- 将来的に複数の Wio Node を接続する可能性を考慮して、特別な名前を付けることで簡単に区別できるようにしてください。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)

### **ステップ 4:** Wio Node とモジュールを仮想的に接続し、ファームウェアを更新する

- Wio Node をクリックすると、メインインターフェースに移動します。
- 2つの Grove コネクタがあります。左側（D0）を選択してください。
- LED は出力デバイスなので、出力カテゴリを選択します。
- 電球のアイコンを見つけ、それを選択します。
- すると、下部の長方形のボタンが赤くなり、「View API」が「Update Firmware」に変わります。「Update Firmware」を選択してください。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)

- アプリで D0 ポートを選択して LED を接続したので、実際の Grove-LED を Wio Node の D0 ポートに接続する必要があります。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)

### **ステップ 5**: API を使用してアプリケーションをテストする

- LED を Wio Node に正常に接続したら、「View API」をクリックして Wio Node の API を確認します。
- 「Test Request」エリアに「1」または「0」を入力し、「Post」ボタンをクリックして何が起こるか確認してください。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)

## IFTTT & DoButton を使ったスタートガイド

-----
コードを書く方法がわからない？心配しないでください。[IFTTT](https://en.wikipedia.org/wiki/IFTTT) の助けを借りれば、コードの知識がなくても簡単なプロジェクトを構築することができます。

IFTTTは「If This Then That」の略で、無料のウェブベースのサービスです。ユーザーは「レシピ」と呼ばれる簡単な条件付きステートメントのチェーンを作成でき、これらはGmail、Facebook、Instagramなどの他のウェブサービスの変更に基づいてトリガーされます。IFTTTはWio Nodeとどのように連携するのでしょうか？以下の画像でわかるように、Seeedはwio.seeed.ioでクラウドサービスを提供しており、これがデータを交換し、IFTTTとWio Nodeに指示を送ることができます。簡単なレシピを作成することで、コードを書くことなく物をハックすることが可能です。

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/WioLink-Workshop.png)

IFTTTアカウントをお持ちでない場合は、[こちら](https://ifttt.com/join)をクリックしてサインアップしてください。

すでにIFTTTアカウントをお持ちの場合は、[こちら](https://ifttt.com/recipes/search?q=seeed)をクリックしてSeeedと接続するか、IFTTTのウェブサイトでSeeedを検索してください。そこでは、Seeedによる9つのレシピが見つかり、IFTTTの使い方を学ぶことができます。
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)

DoButtonとは何ですか？DoButtonはIFTTTのアプリケーションの1つで、タップするだけで自分専用のボタンを作成することができます。これはIoTプロジェクトを構築し、スマートフォンを通じて制御するのに非常に適しています。以下に、IFTTTとDoButtonを使用して便利なアプリケーションを作成する方法を示す2つの例を紹介します。

### 例

|**IFTTT**|**DoButton**|
|:---|:---|
|**[レシピ]**[コードなしでDIY自動庭園灌漑](https://community.seeedstudio.com/project_detail.html?id=1080)|**[レシピ]**[家にいないときにペットに餌を与える方法](https://community.seeedstudio.com/project_detail.html?id=1066)|
|**[ビデオ]**[IFTTTの使い方](https://vimeo.com/148590984)|**[ビデオ]**[DoButtonの使い方](https://vimeo.com/146988454)|

## 上級者向けガイド

----
これらの例が簡単すぎると感じますか？もっと複雑なプロジェクトを作りたいですか？ここでは、上級者向けにWio Nodeを使って物をハックするための最高のガイドを紹介します。このガイドを使えば、上級者はWio Nodeに関する詳細情報を知り、プライベートサーバーを展開し、さらにはWio Node用のモジュールドライバーを書くことができます。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

このガイドには以下が含まれます：

- APIリファレンス
- サーバー展開ガイド
- 上級者向けガイド
- Wio Link用モジュールドライバーの書き方

:::note
    このガイドはWio Link向けに書かれていますが、Wio Nodeにも適用されます。
:::

## Grove対応リスト

|SKU       |名前                                        |インターフェース |ドライバー                 |リンク       |
|----------|--------------------------------------------|----------------|-------------------        |-----------|
|101020008 |    Grove - 湿度センサー                   |アナログ        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - 光センサー                     |アナログ        |汎用アナログ入力         | [リンク](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - 温度センサー                   |アナログ        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - 回転角センサー                 |アナログ        |汎用アナログ入力         | [リンク](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - 光センサー(P)                  |アナログ        |汎用アナログ入力         | [リンク](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - 音センサー                     |アナログ        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - 電気センサー                   |アナログ        |汎用アナログ入力         | [リンク](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - スライドポテンショメータ       |アナログ        |汎用アナログ入力         | [リンク](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - 80cm赤外線近接センサー         |アナログ        |汎用アナログ入力         | [リンク](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - UVセンサー                     |アナログ        |自身                     | [リンク](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - 回転角センサー(P)              |アナログ        |汎用アナログ入力         | [リンク](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - 音量センサー                   |アナログ        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - 輝度センサー                   |アナログ        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - 空気品質センサーv1.3           |アナログ        |汎用アナログ入力         | [リンク](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
|101020003 |    Grove - ボタン                         |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|101020004 |    Grove - スイッチ(P)                    |デジタル        |汎用デジタル入力         | [リンク](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html) |
|101020005 |    Grove - 衝突センサー                   |デジタル        |汎用デジタル入力         | [リンク](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html) |
|101020009 |    Grove - ラインファインダー              |デジタル        |汎用デジタル入力         | [リンク](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html) |
|101020018 |    Grove - 水センサー                     |デジタル        |汎用デジタル入力         | [リンク](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html) |
|101020020 |    Grove - PIRモーションセンサー           |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html) |
|101020025 |    Grove - 傾きスイッチ                   |デジタル        |汎用デジタル入力         | [リンク](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html) |
|101020037 |    Grove - タッチセンサー                 |デジタル        |汎用デジタル入力         | [リンク](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html) |
|101020038 |    Grove - 磁気スイッチ                   |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html) |
|101020046 |    Grove - ホールセンサー                 |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Hall-Sensor-p-965.html) |
|101020049 |    Grove - 炎センサー                     |デジタル        |汎用デジタル入力         | [リンク](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html) |
|111020000 |    Grove - ボタン(P)                      |デジタル        |汎用デジタル入力         | [リンク](https://www.seeedstudio.com/Grove-Button(P)-p-1243.html) |
|101020073 |    Grove - 電磁石                         |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html) |
|101020090 |    Grove - 水霧化v1.0                     |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/s/101020090.html#) |
|103020004 |    Grove - ソリッドステートリレー          |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html) |
|103020005 |    Grove - リレー                          |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|103020008 |    Grove - MOSFET                         |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html) |
|103020010 |    Grove - 2コイルラッチングリレー         |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) |
|103020014 |    Grove - ドライリードリレー              |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html) |
|104020001 |    Grove - 可変色LED                      |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html) |
|104020002 |    Grove - 紫色LED (3mm)                  |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Purple-LED-(3mm)-p-1143.html) |
|104020005 |    Grove - LEDストリングライト            |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
|104030005 |    Grove - 赤色LED                        |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) |
|104030007 |    Grove - 緑色LED                        |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html) |
|104030009 |    Grove - 白色LED                        |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) |
|104030010 |    Grove - 青色LED                        |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html) |
|104030014 |    Grove - マルチカラー点滅LED (5mm)      |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-(5mm)-p-1141.html) |
|105020003 |    Grove - 振動モーター                   |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html) |
|105020004 |    Grove - ミニファン                     |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html) |
|105020005 |    Grove - ELドライバー                   |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html) |
|107020000 |    Grove - ブザー                         |デジタル        |汎用デジタル出力         | [リンク](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|107020001 |    Grove - スピーカー                     |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Speaker-p-1445.html) |
|101020034 |    Grove - 3軸デジタルコンパス            |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - 3軸デジタル加速度計(±1.5g)         |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - 3軸デジタルジャイロ            |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
|101020072 |    Grove - 気圧センサー (BMP180)          |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html) |
|101020083 |    Grove - ジェスチャー                   |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-Gesture-p-2463.html) |
|101020088 |    Grove - マルチチャンネルガスセンサー   |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
|103020013 |    Grove - I2C ADC                        |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) |
|104030008 |    Grove - OLEDディスプレイ 1.12''         |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|104030011 |    Grove - OLEDディスプレイ 0.96''         |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|105020001 |    Grove - I2Cモータードライバー          |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html) |
|107020006 |    Grove - I2C FMレシーバー               |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html) |
|101020192 |    Grove - 気圧センサー(BMP280)           |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html) |
|101020193 |Grove - 温度&湿度&気圧センサー(BME280)     |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-Temp%26Humi%26Barometer-Sensor-(BME280)-p-2653.html) |
|101020010 |    Grove - 超音波レンジャー               |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|101020016 |    Grove - 赤外線受信機                   |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html) |
|101020019 |    Grove - 温度&湿度センサーPro           |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html) |
|101020026 |    Grove - 赤外線エミッター               |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html) |
|101020029 |    Grove - 赤外線反射センサー             |その他         |自身                     | [リンク](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html) |
|101020030 |    Grove - デジタル光センサー             |I2C           |自身                     | [リンク](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - 赤外線距離インタラプター       |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - レコーダー                     |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - LEDバーv2.0                    |UART          |自身                     | [リンク](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - 4桁ディスプレイ                |UART          |自身                     | [リンク](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - サーボ                         |デジタル        |自身                     | [リンク](https://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - CO2センサー                    |UART          |自身                     | [リンク](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

## FAQ

----
以下は新しいユーザーからよく寄せられる質問です。Wio Nodeやその他のWio製品を使用する際に問題がある場合は、[Wioのコミュニティ](https://community.seeedstudio.com/topics.html?t=Wio)にぜひ参加してください。そこでは多くのプロフェッショナルユーザーがアドバイスを提供しており、また多くの上級ユーザーがWio製品の使用方法に関するアイデアを共有しています！

**Q1. Wio NodeとWio Linkの違いは何ですか？**

>Wio NodeはミニWio Linkのようなもので、Wio Linkの4分の1のサイズで、価格も非常に安価です。サイズと価格を除けば、Wio NodeはWio Linkの完全な機能を備えています。より多くのGroveコネクタよりも小型サイズを好む方には、Wio Nodeが最適な選択です。

**Q2. サーバーに接続できない場合はどうすればよいですか？**

>ログアウトして、ログイン前に間違ったサーバーを選択していないか確認してください。中国本土以外にいる場合は、グローバルサーバーを選択してください。

**Q3. Wio Nodeの設定に失敗し、WiFiリストにWio Nodeが見つからない場合はどうすればよいですか？**

>青色LEDに注意してください。次のステップに進む前に、LEDがブリージングモード（フェードイン＆フェードアウト効果で点滅する非常にユニークなモード）になっていることを確認してください。LEDがブリージングモードである場合のみ、WiFiリストにWio Nodeが表示されます。

**Q4. 複数のI2Cデバイスを接続したい場合はどうすればよいですか？**

>Wio Nodeの2つのGrove-I2Cポートに同時に2つのGrove-I2Cデバイスを接続することはできません。[Grove-I2Cハブ](https://www.seeedstudio.com/s/I2C%20hub.html)を使用すると、1つのI2Cポートを4つに分岐できます。[Bazaar](https://www.seeedstudio.com/s/I2C%20hub.html)で購入できます！

**Q5. Wio Nodeをスリープモードに変更できますか？**

>はい、最後のAPIを確認してください。そこでWio Nodeをスリープモードにするコマンドを送信できます。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

----

- **ドキュメントと参考資料**
  - [APIリファレンス](https://seeed-studio.github.io/Wio_Link/)
  - [サーバー展開ガイド](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
  - [Wio Link用モジュールドライバーの書き方](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- **ソフトウェア**
  - [**Github**でのソースコード](https://github.com/Seeed-Studio/Wio_Link)
- **ハードウェア**
  - [**PDF**形式の回路図ファイル](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio%20Node%20v1.0.pdf)
  - [**Eagle**形式の回路図ファイル](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip)
- **認証**
  - [CE/FCC/TELEC認証（コアモジュールESP-WROOM-02のみ）](https://files.seeedstudio.com/wiki/Wio_Node/Recources/CE-FCC-TELEC_Certified(only)_for_core_module_ESP-WROOM-02.zip)

## プロジェクト

**Wio Link/Wio NodeとTelegramアプリを使用したスマートホーム**: Seeedstudio Wio-Link/Wio-Nodeを使用してスマートホームを構築し、Telegramボットに接続します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/smart-home-with-wio-link-wio-node-and-telegram-app-831f78/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>