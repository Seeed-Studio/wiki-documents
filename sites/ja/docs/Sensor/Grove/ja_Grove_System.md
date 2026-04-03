---
description: Grove エコシステムの概要
title: Grove エコシステムの概要
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_System
last_update:
  date: 04/02/2026
  author: Matthew
createdAt: '2023-03-13'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/ja/Grove_System/
---
<!-- ![](https://media-cdn.seeedstudio.com/media/wysiwyg/grove9b5a_.jpeg) -->

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/grove9b5a_.jpeg" style={{width:1000, height:'auto'}}/></div>

## 目次

- [**Grove エコシステムとは？**](#jump1)
- [**Grove エコシステムには何が含まれていますか？**](#jump2)
  - [**Grove センサー**](#jump3)
  - [**Grove ネットワークモジュール**](#jump4)
  - [**Grove アクセサリ**](#jump5)
  - [**Grove インターフェース対応ボード**](#jump6)
  - [**Grove モジュール付きキットおよびコース**](#jump7)
  - [**Co-Create プログラム - Grove モジュール**](#jump8)
  - [**Grove ケーブル**](#jump9)
- [**Grove プロジェクト**](#jump10)
- [**Grove エコシステムに関するさらなる知識**](#jump11)
- [**Grove 関連リソース**](#jump12)
- [**技術サポート & 製品ディスカッション**](#jump13)

## <span id="jump1"> Grove エコシステムとは？ </span>

Grove は、モジュール式で標準化されたコネクタを備えたプロトタイピングシステムです。ジャンパー線やはんだ付けを用いるシステムと比べて、Grove のモジュール式ブロックアプローチにより、本格的な電子回路の組み立てが簡単になります。Grove システムは、ベースユニットと標準化コネクタを備えたさまざまなモジュールで構成されています。これらは元々「stems」と「twigs」と呼ばれていましたが、現在はその名称は使われていません。

ベースユニットは一般的にマイクロプロセッサであり、Grove モジュールからのあらゆる入力や出力を簡単に接続できます。各 Grove モジュールは通常、シンプルなボタンや、より複雑な心拍センサーなど、単一の機能に対応します。ほかの Grove モジュールに接続するために必ずしもベースユニットが必要なわけではありません。ケーブル（Grove to Pin Header Converter）を使用して、Raspberry Pi や Arduino のピンから Grove コネクタへ接続することも可能です。

<!-- <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/grove.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Grow Your Idea</font></span></strong>
    </a>
</div> -->

## <span id="jump2"> Grove エコシステムには何が含まれていますか？ </span>

Grove エコシステムは、電子システムのプロトタイピングや構築に対して、便利でユーザーフレンドリーなアプローチを提供します。そのモジュール式の構造、標準化されたコネクタ、および幅広いモジュール群により、初心者から経験豊富なメイカーまで、誰でも本格的な電子回路を素早く組み立てて試行錯誤できます。

### <span id="jump3"> Grove センサー </span>

Grove エコシステムは、電子工作プロジェクトに簡単に組み込める、幅広い種類のセンサーを提供します。これらのセンサーは特定の機能に対応するよう設計されており、さまざまな種類の入力データを取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/GroveSystem/images/grove_cover.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/Grove_Sensor_Intro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📖 Wiki プラットフォーム</font></span></strong></a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/grove" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 購入</font></span></strong></a>
</div>

### <span id="jump4"> Grove ネットワークモジュール</span>

Grove システムには、プロジェクトに通信機能や接続性を追加するネットワークモジュールも含まれます。これらのモジュールを使用すると、Wi-Fi、Bluetooth、LoRa、NFC、その他の標準プロトコルなど、さまざまなネットワークに電子機器を接続できます。

Grove ネットワークモジュールを使えば、プロジェクトに無線機能を簡単に追加でき、データ送信、リモートコントロール、他のデバイスやインターネットとの連携が可能になります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/Grove_network_module_intro" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📖 Wiki プラットフォーム</font></span></strong></a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?bazaar4_retailer-products%5BrefinementList%5D%5Bnetwork%5D%5B0%5D=Wi-Fi&bazaar4_retailer-products%5BrefinementList%5D%5Bnetwork%5D%5B1%5D=Bluetooth&bazaar4_retailer-products%5BrefinementList%5D%5Bnetwork%5D%5B2%5D=LoRa%2FLoRaWan&bazaar4_retailer-products%5BrefinementList%5D%5Bnetwork%5D%5B3%5D=Ethernet&q=Grove" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 購入</font></span></strong></a>
</div>

### <span id="jump5"> Grove アクセサリ </span>

センサーやネットワークモジュールに加えて、Grove エコシステムには、電子工作プロジェクトを補完・拡張するさまざまなアクセサリも用意されています。これらのアクセサリには、LCD ディスプレイ、LED マトリックス、モータードライバ、リレーモジュールなどのコンポーネントが含まれます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/Grove_Accessories_Intro" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📖 Wiki プラットフォーム</font></span></strong></a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?bazaar4_retailer-products%5BrefinementList%5D%5Bproduct_category%5D%5B0%5D=Accessories&q=Grove" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 購入</font></span></strong></a>
</div>

<!-- - [Grove Sensor](/ja/Grove_Sensor_Intro)
- [Grove Network Module](/ja/Grove_network_module_intro)
- [Grove Accessories](/ja/Grove_Accessories_Intro) -->

<!-- ## Grove Selection Guides

- [Seeed Accelerometer Selection Guide](https://wiki.seeedstudio.com/ja/Sensor_accelerometer/)
- [Seeed Barometer Selection Guide](https://wiki.seeedstudio.com/ja/Barometer-Selection-Guide/)
- [Seeed Biomedicine Selection Guide](https://wiki.seeedstudio.com/ja/Sensor_biomedicine/)
- [Seeed Distance Selection Guide](https://wiki.seeedstudio.com/ja/Sensor_distance/)
- [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)
- [Seeed Light Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Sensor_light/)
- [Seeed Relay Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Relay_Page/)
- [Seeed Sound Selection Guide](https://wiki.seeedstudio.com/ja/Sensor_sound/)
 -->

### <span id="jump6"> Grove インターフェース対応ボード </span>

Grove インターフェースは、幅広い開発ボードやマイクロコントローラとの互換性を持つように設計されています。

#### Seeed Studio 製

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Seeed Studio XIAO 拡張ボード</th>
      <th class="table-trnobg">Grove Base Shield for Arduino</th>
      <th class="table-trnobg">BitMaker Expansion for Micro:bit</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7fcf1504b9ae121117c384508995ea87/z/h/zheng1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7fcf1504b9ae121117c384508995ea87/h/t/httpsstatics3.seeedstudio.comseeedimg2016-09ojyc6a5jtrgslqwc5j7gw9ti.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7fcf1504b9ae121117c384508995ea87/1/1/114992653_front-05.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/CH-BitMaker-V2-p-5330.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
Raspberry Pi や Pi Zero をはじめ、Seeed Studio から発売されている、Grove インターフェースをサポートするその他の公認ボードについては、[こちら（拡張ボードおよびキット）](https://www.seeedstudio.com/catalogsearch/result/?bazaar4_retailer-products%5BrefinementList%5D%5Bproduct_category%5D%5B0%5D=Extension%2Fhats%2Fexpansion&q=Grove)を参照してください。
:::

#### Arduino 製

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Arduino MKR Connector Carrier</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://store.arduino.cc/cdn/shop/products/ASX00007_03.front_3c2038d5-8a94-4e18-bd9f-37dfe223be5f_643x483.jpg?v=1649769023" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://store.arduino.cc/products/arduino-mkr-connector-carrier-grove-compatible?queryID=undefined" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

#### Adafruit 製

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove Shield FeatherWing for Particle Mesh and all Feathers</th>
      <th class="table-trnobg">Grove to STEMMA QT / Qwiic / JST SH Cable</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://cdn-shop.adafruit.com/970x728/4309-00.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://cdn-shop.adafruit.com/970x728/4528-07.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.adafruit.com/product/4309" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.adafruit.com/product/4528" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

#### DIGI による公開

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove コネクタ開発ボード - XBee、スルーホールソケット</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://www.digi.com/products/models/76000956/product-images/xbee-th-grove-connector-dev-board" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.digi.com/products/models/76000956" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<!-- <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/Grove_Accessories_Intro" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📖 Wiki Platform</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/grove.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Purchase</font></span></strong>
    </a>
</div> -->

### <span id="jump7"> キットには Grove モジュールとコースが付属します </span>

#### Arduino ボードベース

Grove Beginner Kit for Arduino は、初心者にとって最高の Arduino 入門キットの 1 つです。Arduino 互換ボード 1 枚に 10 個の追加 Arduino センサーと一体型 PCB デザインが含まれています。すべてのモジュールは、PCB のスタンプホールを介して Seeeduino に接続されているため、接続に Grove ケーブルは不要です。ただし、モジュールを取り外して Grove ケーブルで接続することもできます。この Grove Beginner Kit For Arduino を使えば、好きな Arduino プロジェクトを構築できます！

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove Beginner Kit For Arduino</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/ja/Grove-Beginner-Kit-For-Arduino" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
Arduino に関するその他のキットについては、[こちら](https://www.seeedstudio.com/catalogsearch/result/?bazaar4_retailer-products%5BrefinementList%5D%5Bseries%5D%5B0%5D=Arduino&q=Arduino%20kits)をクリックしてください。
:::

#### Raspberry Pi ボードベース

Seeed では、基本的な Grove モジュールと Raspberry Pi 4 ボードを使って工作を始められるよう、8 つのチュートリアルを用意しました。このセクションでは、モジュールをどのように組み合わせて実際のアプリケーションに適用できるかについてガイドを提供します。

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove Base Kit for Raspberry Pi</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png" style={{width:400, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/ja/Grove_Base_Kit_for_Raspberry_Pi" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
Raspberry Pi に関するその他のキットについては、[こちら](https://www.seeedstudio.com/catalogsearch/result/?bazaar4_retailer-products%5BrefinementList%5D%5Bseries%5D%5B0%5D=Raspberry%20Pi&q=Raspberry%20Pi%20kits)をチェックしてください。
:::

#### SeeedStudio XIAO ボードベース

「XIAO: Big Power, Small Board」の主な読者層は、小型ハードウェアプラットフォームの可能性を探求し最大限に活用したい、エレクトロニクスおよび機械学習のホビイスト、学生、教育者、プロフェッショナルです。一般的に、これらの読者は電子工作愛好家、DIY プロジェクト制作者、エレクトロニクス教育者、あるいはジュニアの組み込みシステム開発者といった立場にあるかもしれません。キャリアが進むにつれて、エレクトロニクス設計エンジニア、IoT 開発者、あるいは機械学習ハードウェアインテグレーターといった役割に就くことを目指している可能性があります。

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">XIAO: Big Power, Small Board</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/ja/XIAO-Kit-Courses" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
Seeed Studio XIAO シリーズに関するその他のキットについては、[こちら](https://www.seeedstudio.com/catalogsearch/result/?bazaar4_retailer-products%5BrefinementList%5D%5Bseries%5D%5B0%5D=XIAO&q=XIAO%20kits)をチェックしてください。
:::

#### Wio Terminal ボードベース

このキットには、Wio Terminal と箱入りのコースが付属しています。本書は、教育者が Wio Terminal を教室やワークショップに取り入れ、学習者に TinyML の力を示せるよう特別に設計されています。ML のごく基本を教えるためにカバーすべき基礎を提供しつつ、概念をハンズオン演習に結び付けて解説します。

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Applications Kit ML101 with Prof. Vijay Course</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" style={{width:400, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/ja/Wio-Terminal-TinyML-Kit-Course" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
Wio Terminal に関するその他のキットについては、[こちら](https://www.seeedstudio.com/catalogsearch/result/?q=Wio+Terminal+kits)をチェックしてください。
:::

### <span id="jump8"> Co-Create プログラム - Grove モジュール  </span>

Seeed Studio Fusion は、エンジニアが Grove 設計を実際の製品にするのを支援するために、Grove センサー共同ブランドキャンペーンを開始しました。参加者は、自分の設計を製造し、Seeed Studio Bazaar（製品購入ページ）で販売してもらうことができます。

<div style={{textAlign:'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/project_2.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.google.com/forms/d/e/1FAIpQLSe3A7_rIbn2OLO4JyJd_poGZodItCaRy6M6-3FtdqL3xG1Usg/viewform" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ申し込む</font></span></strong></a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/co-create.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 詳細情報</font></span></strong></a>
</div>

### <span id="jump9"> Grove ケーブル </span>

<!-- ![fusion activity](https://www.seeedstudio.com/blog/wp-content/uploads/2022/07/Grove%E6%B4%BB%E5%8A%A81200x.png) -->

#### 通常の Grove ケーブル

あなたのプロジェクト向けに 5 種類の Grove ケーブルが用意されており、長さは 5cm、20cm、30cm、40cm、50cm です。以下に示します。

| 5cm | 20 cm | 30 cm | 40 cm | 50 cm |
|-----|-------|-------|-------|-------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_20.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_30.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_40.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_50.jpg)|
|[今すぐ入手](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-5-PCs-Pack-p-749.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-30cm-Cable-5-PCs-Pack.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-40cm-Cable-5-PCs-Pack.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-50cm-Cable-5-PCs-Pack.html)|

#### Grove - ブランチケーブル

このケーブルを使用すると、2つの I2C Grove モジュールを1つの I2C Stem コネクタに接続できます。このケーブルはすべての I2C Grove モジュールと互換性があります。1つ以上の I2C デバイスを Grove システムに接続する必要がある場合に非常に便利です。

<!-- [![// image](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_branch.jpg)](https://www.seeedstudio.com/depot/grove-branch-cable-5pcs-pack-p-847.html?cPath=98_106_57) -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/GroveSystem/images/cable_branch.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
[Bazaar 購入ページ](https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html)で確認できます。この用途向けに [Grove - I2C Hub (6 Port)](https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html) も発売しています。
:::

<!-- 
サンプルアプリケーションには次のものが含まれます：

* 2つ以上の I2C デバイスの接続またはデイジーチェーン接続。複数のブランチケーブルを使用して I2C バスを延長できます。
* 同時に動作させる必要がある2つのデバイスの接続。例えば、LED とリレーを単一の Grove Branch Cable を使って Grove Shield に接続できます。これにより、2つのデバイスは単一のデジタルピンで制御されるため、LED とリレーの両方を同時にオフまたはオンにすることが可能になります。 -->

#### Grove - サーボ用ブランチケーブル

Grove Branch Cable for Servos は、1つまたは2つのサーボを、電源と GND をコネクタ間で共有しつつ、Arduino の PWM 対応ピンに接続された各サーボ用の個別の PWM 信号でプロジェクトに接続するために使用されます。ケーブルの 4 ピン・キー付きコネクタは通常 Grove Shield のデジタルソケットに接続され、ワイヤの色（黄色または白）はサーボ入力に対応するデジタルピンを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/GroveSystem/images/cable_servo.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
[Bazaar 購入ページ](https://www.seeedstudio.com/Grove-Branch-Cable-for-Servo-5PCs-pack.html)で確認できます。
:::

#### Grove & Qwiic/STEMMA QT インターフェース to オス/メスジャンパケーブル

このケーブルは、1本のケーブルで複数の Grove、Qwiic、STEMMA QT モジュールを開発ボードに接続するのに役立ちます。

Grove モジュール 1 つと Qwiic モジュール 1 つ、または STEMMA QT モジュール 1 つを [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) や [Arduino UNO](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-2995.html) に接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/114992154/qwiic.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/114992154/stemma.png" style={{width:300, height:'auto'}}/></div>

:::tip
[Bazaar 購入ページ](https://www.seeedstudio.com/Grove-Qwiic-STEMMA-QT-Interface-to-Male-Female-Jumper-Cables-p-4467.html)で確認できます。
:::

#### Grove - 4 ピンメスジャンパから Grove 4 ピン変換ケーブル (1 パック 5 本入り)

4 ピンメスジャンパから Grove 4 ピン変換ケーブルは、Grove モジュールを Arduino で直接使用したいというお客様からの要望に基づいて提供されています。このケーブルのメスジャンパは 2.54 ピッチのピンヘッダと互換性があります。このケーブルを使用することで、Seeed のすべての Grove モジュールを任意の 2.54mm ピッチコネクタに簡単に接続できます。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductgrove4p254.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
[Bazaar 購入ページ](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)で確認できます。
:::

#### Grove - 4 ピンオスジャンパから Grove 4 ピン変換ケーブル (1 パック 5 本入り)

Grove は専用インターフェースを備えた便利なプラグアンドプレイシステムですが、それでもブレッドボードのようなオープンなエコシステムで使用できないわけではありません。このケーブルのオスジャンパは 2.54 ピッチのピンヘッダと互換性があります。このケーブルを使用することで、Seeed のすべての Grove モジュールを任意の 2.54mm ピッチコネクタに簡単に接続できます。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductmalejumper.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
[Bazaar 購入ページ](https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html)で確認できます。
:::

#### Grove メスヘッダ - DIP-4P-2.0mm-90 度

これは 4 ピン、2.0mm ピッチ、90 度タイプの DIP Grove メスヘッダ 10 個入りパックで、配線を引き出したり、ボードをコンポーネントに接続したりするのに適しています。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductuni4901s.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
[Bazaar 購入ページ](https://www.seeedstudio.com/Grove-Universal-4-pin-connector-90-10-PCs.html)で確認できます。
:::

#### Grove メスヘッダ - DIP-4P-2.0mm-10 個入り

これは 4 ピン、2.0mm ピッチの DIP Grove メスヘッダ 10 個入りパックで、配線を引き出したり、ボードをコンポーネントに接続したりするのに適しています。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductuni4s.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
[Bazaar 購入ページ](https://www.seeedstudio.com/Grove-Universal-4-pin-connector.html)で確認できます。
:::

## ✨ コントリビュータープロジェクト

- このページは [Seeed Studio Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6) によって更新されています。
- ご貢献いただいた [Elizabeth のご尽力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=33931997) に心より感謝いたします。その成果は感謝の印として展示されます。

## <span id="jump10"> Grove プロジェクト </span>

ここでは、参考として Grove を使って作られたプロジェクトをいくつか紹介します。さらに多くのプロジェクトについては、[Recipe](https://community.seeedstudio.com/discover.html?t=Grove) や [Instructables](https://www.instructables.com/howto/Grove/) を参照してください。

|自動水やり|IoT ジャーノーティファイア|マジックミラー|
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/planting.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/notifier.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Magic_mirror.png)|
|[今すぐ作ろう！](https://www.instructables.com/id/Automated-Watering-of-Potted-Plants-with-Intel-Edi/)|[今すぐ作ろう！](https://www.instructables.com/id/IoT-Jar-Chandelier-Physical-Gmail-Twitter-Facebook/)|[今すぐ作ろう！](https://www.instructables.com/id/Magic-Mirror-Mini-Android-Powered/)|

| クレイジーキャタピラー|音声制御 IR リモコン| 植物給水デバイス |
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Crazy_Caterpiller.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Learnable_IR_Remote.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/6.jpg)|
|[今すぐ作ろう！](https://www.instructables.com/id/Crazy-Caterpillar-an-Arduino-Robot/)|[今すぐ作ろう！](https://www.instructables.com/id/Make-a-Voice-Control-IR-Remote-Controller-by-Ardui/)|[今すぐ作ろう！](https://www.instructables.com/id/DIY-an-Automatic-Plant-Watering-Device/)|

| Wi-Fi スピーカー | おもちゃの車を自作 |温度制御 USB ファン|
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/7.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/8.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Temperature_controlled_fan.png)|
|[今すぐ作ろう！](https://www.instructables.com/id/DIY-a-Wi-Fi-Speaker/)|[今すぐ作ろう！](https://www.instructables.com/id/Make-a-mini-toy-car-with-Arduino/)|[今すぐ作ろう！](https://www.instructables.com/id/Temperature-controlled-USB-fan-MilCandy/)|

| Pokemon Go セーフティバッジ |LED クレイオーナメント| クオリティ・オブ・ライフメーター |
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/10.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/LED_Clay_Ornament.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/12.jpg)|
|[今すぐ作ろう！](https://www.instructables.com/id/5-Minutes-to-DIY-Your-Own-Pokemon-Go-SAFETY-BADGE/)|[今すぐ作ろう！](https://www.instructables.com/id/LED-Clay-Ornament/)|[今すぐ作ろう！](https://www.instructables.com/id/Quality-of-Life-Meter-Mk2-Smarter-and-Connected/)|

|Grove ミニマル温度計|より人に優しい水分量センサー| PI ゲームボックス |
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Grove_Minimal_Thermometer.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/More_Humane_Moisture_Sensor.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/15.jpg)|
|[今すぐ作ろう！](https://www.instructables.com/id/Grove-Minimal-Thermometer/)|[今すぐ作ろう！](https://www.instructables.com/id/More-Humane-Moisture-sensor/)|[今すぐ作ろう！](https://www.instructables.com/id/DIY-a-Raspberry-Game-2048/)|

## <span id="jump11"> Grove エコシステムに関する詳細な知識 </span>

以下の情報は Seeed Studio によって提供されたものであり、古くなっている可能性があります。必要であれば、コミュニティからの更新によって、ここにあるコンテンツを最新のものにしていただけると幸いです。

寄稿の方法について詳しくは、<strong><a href="/ja/Contributor"><span><font color={'8DC215'} size={"4"}>こちら!</font></span></a></strong>をクリックしてください。

### Grove モジュールのインターフェース

Grove ケーブルには 4 つの異なる色があることに気付くかもしれません。

- **ピン 1** - 黄色（例: I2C Grove コネクタ上の SCL）
- **ピン 2** - 白（例: I2C Grove コネクタ上の SDA）
- **ピン 3** - 赤 - すべての Grove コネクタにおける VCC
- **ピン 4** - 黒 - すべての Grove コネクタにおける GND

主に 4 種類の Grove モジュール用インターフェースがあります。

#### Grove デジタル

デジタル Grove コネクタは、Grove プラグに入る標準的な 4 本のラインで構成されます。2 本の信号線は一般的に D0 と D1 と呼ばれます。ほとんどのモジュールは D0 のみを使用しますが、LED Bar Grove ディスプレイのように両方を使用するものもあります。しばしばベースユニットでは、最初のコネクタが D0、2 番目が D1 と呼ばれ、配線は D0/D1、次に D1/D2 というようになっています。

Grove デジタルモジュールの例としては、**スイッチモジュール**、**ファンモジュール**、**LED モジュール**があります。図 8 では、LED Grove モジュールの回路図上で Grove コネクタがどのように見えるかを確認できます。これはシンプルなものから非常に複雑なものまでさまざまです。

|ピン|機能  | 備考   |
|--------|------|-----|
|pin1 | Dn   | 主要なデジタル入力/出力 |
|pin2   | Dn+1 | 二次的なデジタル入力/出力|
|pin3   | VCC  | Grove モジュール用電源、5V/3.3V|
|pin4 | GND  | グラウンド |

#### Grove アナログ

Grove アナログコネクタは、Grove プラグに入る標準的な 4 本のラインで構成されます。2 本の信号線は一般的に A0 と A1 と呼ばれます。ほとんどのモジュールは A0 のみを使用します。しばしばベースユニットでは、最初のコネクタが A0、2 番目が A1 と呼ばれ、配線は A0/A1、次に A1/A2 というようになっています。

|ピン|機能  | 備考   |
|--------|------|-----|
|pin1 | An | 主要なアナログ入力 |
|pin2   | An+1| 二次的なアナログ入力|
|pin3   | VCC  | Grove モジュール用電源、5V/3.3V|
|pin4 | GND  | グラウンド |

#### Grove UART

Grove UART モジュールは、Grove デジタルモジュールの特殊なバージョンです。シリアル入力と送信にピン 1 とピン 2 の両方を使用します。Grove UART プラグはベースユニットの視点からラベル付けされています。つまり、ピン 1 は RX ライン（ベースユニットがデータを受信するために使用するので入力）、ピン 2 は TX ライン（ベースユニットが Grove モジュールにデータを送信するために使用する）です。

|ピン|機能  | 備考   |
|--------|------|-----|
|pin1 | RX | シリアル受信 |
|pin2   | TX| シリアル送信|
|pin3   | VCC  | Grove モジュール用電源、5V/3.3V|
|pin4 | GND  | グラウンド |

#### Grove I2C

このブログを長く読んでくださっている方は、私たちのお気に入りのデバイスが I2C センサであることをご存知でしょう。I2C Grove センサには多くの種類があります。ほとんどは 5V/3.3V デバイスですが、3.3V 専用または 5.0V 専用のものもいくつかあります。仕様を確認する必要があります。

Grove I2C コネクタは標準的なレイアウトになっています。ピン 1 は SCL 信号、ピン 2 は SDA 信号です。電源とグラウンドは他のコネクタと同じです。これは Grove デジタルコネクタのもう 1 つの特殊なバージョンです。実際、多くの場合、コントローラ（ESP8266、Raspberry Pi、Arduino など）上の I2C バスは、I2C バスを実装するためにデジタル I/O ピンを使用しています。Raspberry Pi と Arduino 上のピンは、I2C バスをハードウェア的にサポートする特別なものです。

|ピン|機能  | 備考   |
|--------|------|-----|
|pin1 | SCL | I2C クロック |
|pin2   | SDA| I2C データ|
|pin3   | VCC  | Grove モジュール用電源、5V/3.3V|
|pin4 | GND  | グラウンド |

### Grove のサイズ

Grove ボードには 5 種類のサイズがあります。

| 1X1 | 1X2 | 1X3 | 2X2 | 2X3 |
|---|-----|------|-----|----|
|20x20mm|20x40mm|20x60mm|40x40mm|40x60mm|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/size1x1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/size1x2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/size1x3.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/size2x2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/size2x3.jpg)|

各サイズの寸法は次のとおりです。

- Grove 20X20 DIP：

![](https://files.seeedstudio.com/wiki/GroveSystem/images/20_20dip.png)

- Grove 20X20 SMD 水平：

![](https://files.seeedstudio.com/wiki/GroveSystem/images/20_20smd_horizontal.png)

- Grove 20X20 SMD 垂直：

![](https://files.seeedstudio.com/wiki/GroveSystem/images/20_20smd_vertical.png)

- Grove 20X40 DIP：

![](https://files.seeedstudio.com/wiki/GroveSystem/images/40_40dip.png)

- Grove 20X40 SMD 水平：

![](https://files.seeedstudio.com/wiki/GroveSystem/images/40_40smd_horizontal.png)

- Grove 20X40 SMD 垂直：

![](https://files.seeedstudio.com/wiki/GroveSystem/images/40_40smd_vertical.png)

詳細な機械図については、[Grove Mechnical Drawing](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove_Mechnical_Drawing.zip) を参照してください。

<!-- 
## Choose your Grove

Want some Grove modules for your project? Here are some recommendations, more products please refer to [Bazaar](https://www.seeedstudio.com/) or [Bazaar-Grove](https://www.seeedstudio.com/catalogsearch/result/?q=Grove).

### Grove Basic Input and Output

| Grove - LED| Grove - Rotary Angle Sensor |Grove - Button(P)|
|-----------|--------------------------|----------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/45d_small.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/101020017.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/image/Button_p_s.png)|
| [More Details](https://www.seeedstudio.com/Grove-Red-LED.html) | [More Details](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html) | [More Details](https://www.seeedstudio.com/Grove-Button-P.html) |

| Grove - Micro Switch| Grove - Encoder | Grove - I2C Touch Sensor |
|-----------|--------------------------|----------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/small.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/basic_5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/45d_small.jpg)|
| [More Details](https://www.seeedstudio.com/Grove-Micro-Switch.html) | [More Details](https://www.seeedstudio.com/Grove-Encoder-p-1352.html) | [More Details](https://www.seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html) |

### Grove for Display

| OLED Display 0.96" (SSD1315) | OLED Display 1.12" V2 | Triple Color E-Ink Display 2.13" |
|-----------|--------------------------|----------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/45d_small.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/thumbnail.jpg)|
| [More Details](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) | [More Details](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html) | [More Details](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html) |

|Tripple Color E-Ink Diaplay 1.54"|0.54 Red Dual Alphanumeric Display|4 Digit Display|
|-----------|--------------------------|----------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front-s.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/Thumbnail.png)|
| [More Details](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html) | [More Details](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) | [More Details](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |

### Grove for Motion Detect

|Single Axis Analog Accelerometer| Digital Accelerometer(±400g) | 3-Axis Digital Gyro |
|--------------------------|---------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Single-Axis-Analog-Accelerometer-100g-ADXL1001/img/Grove---Single-Axis-Analog-Accelerometer-100g-ADXL1001-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_3.jpg)|
|[More Details](https://www.seeedstudio.com/Grove-Single-Axis-Analog-Accelerometer-100g-ADXL1001-p-4035.html)|[More Details](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|[More Details](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|

| 3-Axis Digital Compass | 3-Axis Digital Compass V2 | 3-Axis Analog Accelerometer |
|--------------------------|---------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_6.JPG)|
|[More Details](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|[More Details](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2.html)|[More Details](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html)|

| 3-Axis Digital Acc(±16g) | 6-Axis Acc&Compass v2.0 | 6-Axis Acc&Gyroscope |
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_7.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_8.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_9.jpg)|
|[詳細はこちら](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B116g)-p-1156.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-p-2606.html)|

### 通信用 Grove

| Uart Wifi V2 | 433MHz シンプル RF リンクキット | 125KHz RFID リーダ |
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/thumbnail.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_2.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_5.jpg)|
|[詳細はこちら](https://www.seeedstudio.com/Grove-UART-WiFi-V2-ESP8285.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-433MHz-Simple-RF-link-kit-p-1062.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-125KHz-RFID-Reader-p-1008.html)|

|BLE|BLE（デュアルモデル） |BLE シールド|
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_6.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_7.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/small.png)|
|[詳細はこちら](https://www.seeedstudio.com/Grove-BLE-p-1929.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-BLE-(dual-model)-p-2407.html)|[詳細はこちら](https://www.seeedstudio.com/Seeed-Blueseeed-Shield-HM11.html)|

|NFC アンテナ| Grove - NFC | Grove - NFC タグ |
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_7.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_8.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_9.jpg)|
|[詳細はこちら](https://www.seeedstudio.com/NFC-Antenna-p-1805.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-NFC-p-1804.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-NFC-Tag-p-1866.html)|

### 環境用 Grove

|CO2＆温度＆湿度センサ|マルチチャネルガスセンサ v2|温度＆湿度＆気圧センサ|
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/env_3.jpg)|
|[詳細はこちら](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

|ラウンドフォースセンサ|空気質センサ v1.3| ガスセンサ（O2） |
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/thumbnail.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_Air_Quality_Sensor_small.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/env_6.jpg)|
|[詳細はこちら](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR402.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-Gas-Sensor(O2)-p-1541.html)|

| ダストセンサ | 水分量センサ |一体型圧力センサキット|
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/env_7.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/env_8.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-thumbnail.jpg)|
|[詳細はこちら](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html)|

### ロボット用 Grove

| I2C ミニモータドライバ | I2C モータドライバ | Grove - サーボ |
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_1.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_2.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_3.jpg)|
|[詳細はこちら](https://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|

|ラインファインダ v1.1| 超音波距離センサ | 80cm 赤外線近接センサ |
|--------------------------|---------------------------|-----------------------|
|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_5.jpg)|![画像の説明をここに入力](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_6.jpg)|
|[詳細はこちら](https://www.seeedstudio.com/Grove-Line-Finder-v1-1.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|[詳細はこちら](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html)| -->

## <span id="jump12"> Grove のリソース </span>

【**ZIP**】[Grove 機械図面](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove_Mechnical_Drawing.zip)

【**ZIP**】[Grove 20X20 DIP の寸法](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x20-Plug-vertical.zip)

【**ZIP**】[Grove 20X40 DIP の寸法](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x40-Plug-vertical.zip)

【**ZIP**】[Grove 20X20 SMD 垂直タイプの寸法](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x20-SMD-vertical.zip)

【**ZIP**】[Grove 20X40 SMD 垂直タイプの寸法](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x40-SMD-vertical.zip)

【**ZIP**】[Grove 20X20 SMD 水平タイプの寸法](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove20x20-SMD-horizontal.zip)

【**ZIP**】[Grove 20X40 SMD 水平タイプの寸法](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x40-SMD-horizontal.zip)

## <span id="jump13"> 技術サポート & 製品ディスカッション </span>

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
