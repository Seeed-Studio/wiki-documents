---
title: Wio Link
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_Link/
slug: /ja/Wio_Link
last_update:
  date: 05/15/2025
  author: gunengyu
---


IoTアプリケーションを構築する際の最も難しい部分は何でしょうか？ある人はジャンプワイヤーが彼をイライラさせると言い、別の人はハンダ付けが最も嫌いだと言います。中にはブレッドボードが好きではない人もいます。あなたがそのような人ではないかもしれませんが、電子工学、マイクロコントローラープログラミング、ネットワークプログラミング、IoTプロトコルの取り扱いに関する知識は、成功するIoTプロジェクトを実現する上で依然として大きな障害となっています。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

これらすべてのステップを簡素化するために、2015年末にSeeed Studioは[KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)でWio Linkを開始し、IoTアプリケーションを開発する新しい方法を定義しました。Wio LinkはESP8266 SoCをベースとしたオープンソースのWi-Fi開発ボードで、その最大の特徴は、プラグアンドプレイモジュールをモバイルアプリを使用してRESTful APIに仮想化することでIoTアプリケーションを作成できる関連プラットフォームです。これにより、ハードウェアプログラミング、ブレッドボード、ジャンプワイヤー、ハンダ付けが不要となり、スマートフォンにアプリをインストールするだけで、5分で簡単なIoTプロジェクトを構築することができます。

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


:::caution
     WioのIFTTT機能はEOL（End of Life）となっています。ただし、Wio APPは利用可能です。Wio APPのAPIを使用してセンサーの状態を読み取り、アクチュエータを制御することができます。
:::

## 特徴

- ハードウェアプログラミング不要、ブレッドボード不要、ジャンプワイヤー不要、ハンダ付け不要。
- 多くのGroveモジュールがサポートされています（モバイルアプリでリストを確認してください）。
- プラグアンドプレイのGroveモジュール。
- マイクロコントローラープログラミングの代わりに視覚的な設定。
- クラウドコンパイルとOTAによる自動更新。
- 現実世界を仮想プラットフォームに持ち込む。すべてのセンサーが仮想RESTful APIになります。
- Wio Linkを管理するためのAndroid & iOSアプリ。
- SeeedのチャンネルによるIFTTT対応。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

## 仕様
----
|一般|値|電源管理|値|
|:---|---|:---|---:|
|**サイズ**|55mm * 48mm|**I/OピンあたりのDC電流**|12mA|
|**クリスタル**|26MHz|**入力電圧（Micro USB）**| 5V|
|**フラッシュメモリ**|4MBytes (W25Q32B)|**入力電圧（バッテリーホルダー）**|3.4~4.2V|
|**Wi-Fiネットワークプロトコル**|802.11b/g/n|**出力DC電流**|1000mA MAX|
|**Wi-Fi暗号化技術**|WEP/TKIP/AES|**動作電圧**|3.3V|
|**Groveコネクタ**|6 |**充電電流**|500mA MAX|
|**フラッシュ**|	4MB (W25Q32B)|

## Wio Linkで作る
----
Wio Linkは、以下のようなプロジェクトに簡単なWi-Fiソリューションを提供するよう設計されています：

- スマートホーム
- 知的環境モニタリング
- 面白いおもちゃ
- Web of Things
- Internet of Things

実際、私たちはすでに[**レシピ**](https://community.seeedstudio.com/projects.html?t=Wio)で多くのプロジェクトを設計しています。興味深いプロジェクトを見つけたり、あなた自身のプロジェクトを共有したりするために訪れてみてください。きっと多くのファンを獲得できるでしょう！

|灌漑制御システム |LEDウォールのインターネット | 犬の餌やり機|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1274)    |[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1594) |[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarterモニター|着信通知モニター|ボスキー|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1081)    |[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1059) |[今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
       * 一部のレシピはWio Node用に作られていますが、Wio Linkにも適用可能です。
:::

## ハードウェア概要
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

|部品|機能|
|---|---|
|MCU|ESP8266|
|デジタルポート 0|GPIO 14|
|デジタルポート 1|GPIO 12|
|デジタルポート 2|GPIO 13|
|アナログポート|A3|
|UARTポート|ピン 1 & ピン 3|
|I2Cポート|ピン 4 & ピン 5|
|ステータスライト|青色LEDはWiFiステータスインジケーター、赤色LEDは動作ステータスを示します|
|設定ボタン|Wio Linkの設定と管理を行います|
|バッテリーホルダー|JST2.0|
|Micro USB|ボードに電力を供給したり、PCと通信するために使用します|
|リセットボタン|MCUをリセットします|

### ステータスLED
FUNCTIONボタンの近くには青色と赤色の2つのステータスLEDがあります。青色LEDはネットワークステータスを示すLEDで、以下の点滅パターンがあります：

- 呼吸モード：設定モード中
- 2回素早く点滅後1秒間消灯：ルーターからIPアドレスを要求中
- 1回素早く点滅後1秒間消灯：サーバーに接続中
- 1秒間点灯後1秒間消灯：ノードがオンライン
- 常時点灯：IP取得失敗またはサーバー接続失敗でノードが停止
- 素早く点滅（100ms点灯後100ms消灯）：OTA中

:::note
     * 青色LEDはGPIO2に接続されており、UART1のTXピンでもあります。ファームウェアをダウンロードする際、UART1はUART0で送信されるデータを本能的にダンプします。そのため、ファームウェアダウンロード中は青色LEDが点滅します。起動後、GPIO2はGPIOとして設定され、UART1のTXとしては使用されません。
:::
赤色LEDは別のステータスLEDで、Groveモジュールの電源ステータスを示します。6つのGroveインターフェースのVCCは一緒に収束し、GPIO15で制御できます。ノードがディープスリープモードの場合、すべてのGroveモジュールの電源が失われます。Groveモジュールが電源供給されている場合は赤色LEDが点灯し、電源が供給されていない場合は消灯します。

### ボーナス！
Wio Linkには内蔵のLiPoバッテリー充電器が搭載されており、USB接続時にJST 2.0ポートを通じて3.7V LiPoバッテリーを充電できます。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

:::note
     * バッテリーは別途購入する必要があります。[Bazaar](https://www.seeedstudio.com/s/Battery.html)で多くの選択肢をご用意していますのでご覧ください。
:::

## はじめに
---

Wio Linkを使って非常に基本的なLEDアプリケーションを構築してみましょう。このアプリケーションでは、スマートフォンを使って約5分でLEDを制御できるようになります。始める前に、以下のものを手元に用意してください：

|Wio Link|Grove - LED|Micro USBケーブル|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[今すぐ購入](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note
    * スマートフォンも必要です（Android OSバージョン4.1以上、iOSバージョン7以上）
    * Grove - LEDにはすでにGroveケーブルが含まれています
:::

### **ステップ 1:** Android/iOSアプリをインストール
Wio Linkデバイスを管理および設定するために、Wio Linkアプリをインストールする必要があります。

AndroidまたはiOSアプリをダウンロードしてインストールしてください。または、AppleのApp StoreやGoogle Marketで「Wio Link」と検索すると見つかります。

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Androidアプリを入手](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[iOSアプリを入手](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
    * Android OSバージョンが4.1以上、iOSバージョンが7以上であることを確認してください。
:::

### **ステップ 2:** アカウントを作成
- 初めてWio APPを使用する場合、GPS認証が必要になることがあります。承認した後、サインアップしてください。
- すでにアカウントをお持ちの場合は、ログイン前にサーバーの場所を確認してください。

:::note
    * サーバーの場所に注意してください。間違ったサーバーの場所を選択すると、Wio Linkへの接続が失敗する原因になります。
:::

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **ステップ 3:** Wio Link Wi-Fi APに接続
- CONFIGボタンを押し続けて青色LEDが呼吸モード（フェードイン＆フェードアウト効果で点滅）になるまで待ちます。これにより、Wio Linkが設定モードに成功して移行し、Wio Appによって検出可能になります。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- 「Add your first Device」を押します。
- Wio Linkを選択します。
- 「Go to Wi-Fi list」を押すと、スマートフォンのWi-Fi設定画面に移動します。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- 青色LEDを呼吸モードに成功させた場合、Wi-FiリストにWio Linkが表示されます。それに接続してください！（通常、Wi-FiリストではWio Linkとは呼ばれず、例では「Wio_8B2F12」と表示されています。リスト内に「wio_xxxxxx」と名付けられたものを見つけることができます。）
- 接続が成功すると通知が届きます。その後、アプリに戻ることができます。
- 次のステップは、自宅または会社のWi-Fiに接続することです。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- 接続したいWi-Fiにパスワードがある場合、パスワードの入力が求められることがあります。
- 将来的に複数のWioデバイスを接続する可能性を考慮して、特別な名前を付けることでそれらを簡単に区別できるようにします。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **ステップ 4:** モジュールを仮想的にWio Linkと接続し、ファームウェアを更新
- Wio Linkをクリックすると、メインインターフェースに移動します。
- 6つのGroveコネクタが表示されます。左側の最初のコネクタを選択します。
- LEDは出力デバイスであるため、出力カテゴリを選択します。
- 電球のようなアイコンを見つけ、それを選択します。
- その後、下部の赤い長方形のボタンが「View API」から「Update Firmware」に変わります。「Update Firmware」を選択してください。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- APPでLEDをDigital 0ポートに接続するよう選択したため、実際のGrove-LEDもWio LinkのDigital 0ポートに接続する必要があります。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **ステップ 5**: APIを使用してアプリケーションをテストする
- LEDをWio Linkに正常に接続したら、「View API」をクリックしてWio LinkのAPIを確認します。
- 「Test Request」エリアに「1」または「0」を入力し、「Post」ボタンをクリックして何が起こるか確認してください。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)



## IFTTT & DoButtonの使い方
---
プログラミングがわからない？心配しないでください。[IFTTT](https://en.wikipedia.org/wiki/IFTTT)を使えば、プログラミングの知識がなくても簡単なプロジェクトを構築することができます。

IFTTTは「If This Then That」の略で、無料のウェブベースのサービスです。ユーザーは「レシピ」と呼ばれる簡単な条件付きステートメントのチェーンを作成でき、Gmail、Facebook、Instagramなどの他のウェブサービスの変更に基づいてトリガーされます。IFTTTはWio Linkとどのように連携するのでしょうか？以下の画像に示されているように、Seeedはwio.seeed.ioでクラウドサービスを提供しており、データを交換し、IFTTTやWio Linkに指示を送ることができます。簡単なレシピを作成することで、プログラミングなしでハッキングが可能になります。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

IFTTTアカウントを持っていない場合は、[こちら](https://ifttt.com/join)をクリックして登録してください。

すでにIFTTTアカウントをお持ちの場合は、[こちら](https://ifttt.com/recipes/search?q=seeed)をクリックしてSeeedと接続するか、IFTTTウェブサイトでSeeedを検索してください。そこでは、Seeedが提供する9つのレシピが見つかり、IFTTTの使い方を学ぶことができます。
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

DoButtonとは何ですか？DoButtonはIFTTTのアプリケーションの1つで、タップするだけで自分専用のボタンを作成できる機能を提供します。IoTプロジェクトを構築し、スマートフォンを通じて制御するのに非常に適しています。以下は、IFTTTとDoButtonを使用して便利なアプリケーションを作成する方法を示す2つの例です。

### 例:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**レシピ**][プログラミングなしで自動庭灌漑をDIYする](https://community.seeedstudio.com/project_detail.html?id=1080)|[**レシピ**][家にいないときにペットに餌を与える方法](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**ビデオ**][IFTTTの使い方](https://vimeo.com/148590984)|[**ビデオ**][DoButtonの使い方](https://vimeo.com/146988454)|


## 上級ユーザー向けガイド
----
これらの例が簡単すぎると感じますか？もっと複雑なプロジェクトを作りたいですか？以下は、Wio Linkを使ってハッキングするための上級ユーザー向けの最適なガイドです。このガイドを通じて、上級ユーザーはWio Linkの詳細情報を知り、プライベートサーバーを展開し、さらにはWio Linkのモジュールドライバーを書くことができます。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

このガイドには以下が含まれます：

- APIリファレンス
- サーバー展開ガイド
- 上級ユーザーガイド
- Wio Linkのモジュールドライバーを書く方法

## 上級チュートリアル
スマートフォンで Grove-LED を制御することに成功し、もう少し難しいけれどそれほど複雑ではないことに挑戦したい場合、このチュートリアルを試してみてはいかがでしょうか？このチュートリアルを学ぶことで、温度と湿度を監視し、Wio Link を使用して RGB LED ストリップを点灯させることができるようになります。

始める前に、以下のデバイスを手元に用意してください。

|RGB LED ストリップ|Grove-温度・湿度センサー|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/s/led%20strip.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **ステップ1**: Grove LED を Grove コネクタから取り外し、LED ストリップを Wio Link に接続し、アプリ内で同じモジュールを Wio Link にドラッグします。
- ファームウェアを更新します。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- **ステップ2**: Grove-温度・湿度センサーを Wio Link に接続し、アプリ内で同じモジュールを Wio Link にドラッグします。
- ファームウェアを更新します。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- **ステップ3**: API を確認し、家の中の温度と湿度を読み取ります。以下の画像は、Grove を手に持つ前後の温度変化を示しています。温度を 1 度上昇させました。試してみて、家の中の温度と湿度をどのように変化させられるか確認してください。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- **ステップ4**: RGB 値を変更して LED ストリップの光を制御します。

Wio Link アプリは RGB 値を 16 進数で読み取るため、RGB 値を 16 進数に変換する必要があります。ここでおすすめのウェブサイトは [RGB to Hex](https://www.rgbtohex.net/) です。このウェブサイトでは、3 つの RGB 要素（赤、緑、青）の値を入力するだけで、RGB 値を簡単に 16 進数に変換できます。以下は例です。
- 入力: 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- 変換すると、16 進数値は FF0000 となり、色は赤になります。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

:::note
    * 入力する RGB 値は 0 から 255 の間の自然数である必要があります（0 と 255 を含む）。
:::
次に、アプリで点灯させたい LED の数と 16 進数値を入力します。ここでは、私の LED ストリップには 30 個の LED があるので、すべて点灯させました。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20control%20led%20strip.png)

また、ストリップの特定の部分を点灯させて特別な色を付けたり、虹色モードで点滅させたりすることもできます。たくさんの素晴らしい機能があなたの探求を待っています！

## リソース
---

### ハードウェア

- [EAGLE 回路図ファイル](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio_Link_SCH_v1.0.rar)
- [EAGLE PCB ファイル](https://files.seeedstudio.com/wiki/Wio_Link/resource/202000877%20Wio%20Link%20v1.0%20sch%20pcb.zip)
- [回路図ファイル (PDF)](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio%20Link%20v1.0%20sch.pdf)

### ソフトウェア

- [GitHub 上のソースコード](https://github.com/Seeed-Studio/Wio_Link)

### その他のドキュメントと参考資料

- [API リファレンス](https://seeed-studio.github.io/Wio_Link/)
- [サーバー展開ガイド](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
- [Wio Link 用モジュールドライバの書き方](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- [iot.seeed.cc](http://iot.seeed.cc/index.html) でさらに詳しい情報を入手してください。

## FAQ
----
以下は、新しいユーザーからよく寄せられる質問です。Wio Linkやその他のWio製品を使用する際に他の問題が発生した場合は、[Wioのコミュニティ](https://community.seeedstudio.com/topics.html?t=Wio)をご利用ください。多くのプロフェッショナルなユーザーがアドバイスを提供しており、またWio製品の使用方法について多くのアイデアを提供している上級ユーザーもいます！

**1. 電源とバッテリー － Wio LinkにはLipoバッテリーが付属していますか？**

いいえ。各Wio Linkには充電用のマイクロUSBケーブルが付属していますが、3.7VのLipoバッテリーをBazaarで購入することもできます。以下は参考用の仕様です：
- 最大入力電圧：4.2V
- 最大充電電流：500mA

**2. 電源とバッテリー - Wio Linkに電源アダプターを使用できますか？どのタイプですか？また、一般的なバッテリーホルダーは？**

Wio Linkには、マイクロUSBケーブルまたは3.7VのLipoバッテリーの2つの電源供給方法があります。マイクロUSBとバッテリーの両方がボードに接続されている場合、バッテリーはUSB電源で充電されます。マイクロUSBケーブルに接続でき、5Vdc出力のすべての種類の電源アダプターを使用できます。バッテリーホルダーはJST-2.0コネクターです。

**3. 消費電力 - Wio Linkの消費電力はどのくらいですか？**

平均消費電力は70mAです。700mAhのバッテリーを使用すると、最大10時間稼働できます。Low-Power-APIを使用すると、Wio Linkを動作モードからスリープモードに変更できます。これにより、平均消費電力を150uA以下に削減できます。

**4. Groveケーブル - すべてのキットにGroveケーブルが付属していますか？**

はい、各Groveモジュールには標準の4ピンGroveケーブルが1本付属しています。

**5. RESTful API - エンドポイントはどこですか？呼び出しはクラウドサーバーを経由する必要がありますか？インターネット接続が必要ですか、それともローカルネットワークを通じてすべて行えますか？**

REST APIサーバーはiot.seeed.ccにデプロイされています。そのため、iot.seeed.ccからセンサーやアクチュエーターにアクセスできます。現在のところ、Wio Linkはインターネットに接続する必要があります。また、サーバーをオープンソース化する予定であり、ユーザーが非常に簡単なDocker方式でローカルサーバーをデプロイできるようにします。ローカルサーバーをデプロイすることで、オンラインにアクセスすることなくローカルでコンパイルやデータ交換サービスを利用できます。

**6. サポートされるプログラミング方法 - Arduino IDEなどの他のプログラミング方法はサポートされますか？**

Wio LinkはArduino IDEでプログラム可能です。ただし、その場合RESTful APIの機能は失われます（同時に別のAPIを実装しない限り）。Wio Linkは主に物理ハードウェアのWeb of Things変換を実現することを目的としているため、インターネットやウェブ上での操作が期待されています。しかし、ソフトウェアアーキテクチャは柔軟であり、ソースコードをローカルにダウンロードしてWio Linkをローカルサーバーに接続し、ソースコードを変更してコンパイルすることが可能です。

ArduinoやRPIと連携したい場合は、サードパーティのモジュールドライバーを開発できます。以下のガイドをご覧ください：https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F また、例として以下のドライバーがあります：https://github.com/Seeed-Studio/Grove_Drivers_for_Wio/tree/master/grove_example

**7. サポートされるプラットフォーム - Wio LinkはWindowsプラットフォームをサポートしていますか？**

現在、Wio LinkはAndroidとiOSの2つのモバイルアプリを提供しています。ユーザーアカウントやOTAなどのすべてのサービスはRESTful APIとして提供されており、APIドキュメントに従ってサードパーティの開発者が独自のアプリケーション（モバイルアプリやデスクトップアプリなど）を構築できます。
Wio Linkはコミュニティフレンドリーなプロジェクトであり、特定のプラットフォームに限定されることはありません。ユーザーが自分の方法でWio Linkを楽しむことを期待しています。

**8. Wio Linkを使用して既存のシステムと連携できますか？**

はい。Wio Linkは以下の方法で既存のシステムと連携できます。  
1. Wio Linkの任意のGPIOを他のシステムに接続し、モバイルアプリで「Generic Digital Input」または「Generic Digital Output」仮想Groveモジュールを選択します。その後、RESTful API呼び出しを使用して既存のシステムに信号を送信/受信します。  
2. Wio Linkのアナログポートを他のシステムに接続し、モバイルアプリで「Generic Analog Input」仮想Groveモジュールを選択します。その後、既存のシステムの物理量のアナログ測定値を読み取ります。  
3. より柔軟に既存のシステムと連携するために、サードパーティのモジュールドライバーを開発し、インターネットからのリクエストをI2CまたはUARTインターフェースを介して既存のシステムに転送します。サードパーティのモジュールドライバーの開発方法についてのガイド[1]があります。また、開発に関する技術サポートも提供可能です。

[1] https://github.com/Seeed-Studio/Wio_Link#how-to-write-module-driver-for-wio-link

**9. Wio LinkでサポートされるGroveの数は？**

150種類以上のプラグアンドプレイ可能なGroveモジュールが利用可能で、そのうち36種類が現在Wio Linkでサポートされています。これらの多くはRewardsで見つけることができ、さらに多くのモジュールを継続的に追加しています。

以下は現在サポートされているGroveのリストです：

### Groveサポートリスト

|SKU       |名前                                        |インターフェース |ドライバー                 |リンク       |
|----------|--------------------------------------------|----------------|---------------------------|-------------|
|101020008 |    Grove - Moisture Sensor                 |アナログ        |itself                     | [リンク](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - Light Sensor                    |アナログ        |Generic Analog Input       | [リンク](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - Temperature Sensor              |アナログ        |itself                     | [リンク](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - Rotary Angle Sensor             |アナログ        |Generic Analog Input       | [リンク](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - Light Sensor(P)                 |アナログ        |Generic Analog Input       | [リンク](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - Sound Sensor                    |アナログ        |itself                     | [リンク](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - Electricity Sensor              |アナログ        |Generic Analog Input       | [リンク](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - Slide Potentiometer             |アナログ        |Generic Analog Input       | [リンク](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - 80cm Infrared Proximity Sensor  |アナログ        |Generic Analog Input       | [リンク](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - UV Sensor                       |アナログ        |itself                     | [リンク](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - Rotary Angle Sensor(P)          |アナログ        |Generic Analog Input       | [リンク](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - Loudness Sensor                 |アナログ        |itself                     | [リンク](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - Luminance Sensor                |アナログ        |itself                     | [リンク](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - Air quality sensor v1.3         |アナログ        |Generic Analog Input       | [リンク](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |

...（リストは続きます）

**10. Wio Link エラーコードと解決方法**

| 1021 | Wi-Fiへの接続失敗         | Wi-Fiに接続できません。Wi-Fiのパスワードを確認して再試行してください。                                                           |
|------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 1031 | Wio Wi-Fiへの接続失敗     | WioのWi-Fiホットスポットに接続できません。再試行するか、システム設定で手動でWioのWi-Fiホットスポットを選択してください。          |
| 1032 | Wi-Fi選択エラー           | "Wio_xxxxxx"のようなWi-Fiを選択してください。                                                                                     |
| 1033 | Wi-Fi不一致               | 現在の接続がWi-Fi選択前のWi-Fiと一致していません。                                                                                |
| 1041 | コマンド送信エラー         | インターネット接続を確認して再試行してください。問題が解決しない場合はFAQセクションを確認し、サポートにお問い合わせください。       |
| 1042 | 接続エラー                | お使いのスマートフォンとデバイスのWi-Fiが切断されています。                                                                      |
| 1043 | Wi-Fiへの接続失敗         | インターネット接続を確認して再試行してください。または「設定」をクリックして手動設定画面に移動してください。                     |
| 1044 | 接続エラー                | インターネット接続を確認して再試行してください。問題が解決しない場合はFAQセクションを確認し、サポートにお問い合わせください。       |

## プロジェクト

**Wio-LinkとNode-Redを使用したLEDサウンドメーター**: SeeedStudio GroveサウンドセンサーとLEDストリップをWio-Linkに接続し、Node-Redフローで制御します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>