---
description: Ethernet Shield V2.0
title: Ethernet Shield V2.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Ethernet_Shield_V2.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Ethernet Shield V2.0‏‎
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V2.0‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V2-0
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/IMG_0042.jpg)

Ethernet Shield が完全に新しくなりました！このシールドは、高性能 Ethernet コントローラー W5200 を搭載し、v1.0 の2倍のバッファサイズを持ち、最大8つの TCP/UDP 接続を同時にサポートします。さらに、SD スロットが付属しており、大量のデータを保存する必要があるアプリケーション（例：IoT データロギング）に対応します。RJ45 ポートが低く設計されているため、この Ethernet Shield の上にほとんどのシールドを柔軟に追加することができます。

モデル：[SLD91000P](https://www.seeedstudio.com/depot/w5200-ethernet-shield-p-1577.html)

## 特徴 ##

- 高速 Ethernet コントローラー W5200

- SPI インターフェース

- 32 Kbytes 内部バッファ

- 最小限の RJ45 Ethernet ポート

- 最大8つの TCP/UDP 接続を同時サポート

- 便利な SD カード機能

- I2C と UART 用の Grove ポートを搭載

## インターフェース ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Ethernet_Interface.jpg)

**ハードウェア構成**

- RJ45: Ethernet ポート

- IC HX1198: 10/100BASE-T 信号ポート

- IC W5200: ハードウェア TCP/IP Ethernet コントローラー

- U3: IC CJ117、低ドロップアウトリニアレギュレーター

- U6: IC 74VHC125PW、クアッドバッファ

- リセットキー: 押すと Ethernet シールドと Arduino をリセット

- SD カード: FAT16 または FAT32 に対応した Micro SD カードをサポート；最大ストレージ容量は 2GB

**Arduino 上のピン使用**

- D4: SD カードチップセレクト

- D10: W5200 チップセレクト

- D11: SPI MOSI

- D12: SPI MISO

- D13: SPI SCK

**注意:**

W5200 と SD カードはどちらも SPI バスを介して Arduino と通信します。ピン10とピン4は W5200 と SD スロットのチップセレクトピンです。これらは一般的な I/O として使用できません。

## 使用方法 ##

クライアントからのリクエストに応答し、A0 から A5 の読み取り値を SD カードに保存する簡単なウェブサーバーを構築します。

**ステップ 1: 接続**

1. Ethernet Shield v2.0 を Arduino に取り付けます。

2. 標準の Ethernet ケーブルを使用して、シールドをコンピュータまたはネットワークハブまたはルーターに接続します。

3. USB ケーブルを使用して Arduino を PC に接続します。

4. SD カードスロットに SD カードを挿入します。

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/IMG_0039.jpg)

**ステップ 2: プログラムをアップロード**

1. ライブラリをダウンロードします：[Ethernet Shield V2.0 Library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)  
注意: 廃止された/旧バージョンの IDE 1.0.x 用ライブラリ：[リンク](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_Library.zip)。

2. 解凍して Arduino IDE のライブラリフォルダに配置します。パス: ..\arduino-1.0.1\libraries。

3. Arduino IDE を再起動します。

4. サンプル "WebServerWithSD" を開きます。パス: File --> Examples --> EthernetV2.0 --> WebServerWithSD。 このサンプルでは、リクエスト時にアナログ A0 から A5 の読み取り値を表示する簡単なウェブサーバーを構築する方法を示します。その後、これらの読み取り値を SD カードに保存します。

**注意:**

この新しいライブラリは、Arduino IDE の組み込み Ethernet ライブラリに含まれるすべての機能をカバーしています。以前の Ethernet ライブラリと同じ方法で他のサンプルを使用できます。

5. プログラムを Arduino にアップロードします。コードのアップロード方法がわからない場合は、こちらをクリックしてください。

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Open_WebSeverWithSD_code.jpg)

このコードでは、ピン4を SD カードのチップセレクトポート、ピン10を W5200 のチップセレクトポートとして定義しています。

最初に、クライアントがこのサーバーへのアクセスをリクエストした場合、リンクをクライアントに送信します。その後、各アナログ入力ピンの値をネットワークに送信します。

最後に、SD カードファイルを開くことで各アナログピンを確認できます。

**ステップ 3: 結果**

ウェブブラウザを開き、コントローラーの IP アドレスを入力します。これはローカルネットワークに依存しますが、通常は 192.168.168.178 です。その後、以下のように A0 から A5 の読み取り値が表示されます。

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Ethernet_Score.jpg)

SD カードで何が起こっているかを確認するには、シリアルモニターを開きます。Arduino IDE の組み込みシリアルモニターまたは他のシリアルモニターツールを使用できます。シリアルモニターを開いた後、アナログピンの読み取り値を保存するために作成したファイル "test.txt" の内容を読むことができます。

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/WebServerWithSD_Result.jpg)

**注意:**

1） Ethernet Shield とコンピュータが同じローカルネットワーク内にあることを確認してください。

2） コードが正常にアップロードされた後は、ボードをコンピュータから切断し、独立した電源を供給して単独で動作させることができます。

## 関連プロジェクト ##

残念ながら、[Recipe](https://www.seeedstudio.com/recipe/)にはまだEthernet Shieldに関するデモがありません。

Ethernet Shieldに関する素晴らしいプロジェクトを投稿して、**$100クーポンを獲得しましょう！** お気軽にお問い合わせください: **recipe@seeed.cc**

ここでは、[LinkIt ONE](https://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html)に関するいくつかのプロジェクトを紹介します。

### LinkIt ONEとは ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Linkit-one-page.jpg)

LinkIt ONE開発ボードは、ウェアラブルおよびIoTデバイスのプロトタイピング用のオープンソースで高性能なボードです。

世界をリードするウェアラブル向けSoCであるMediaTek Aster（MT2502）をベースに、高性能Wi-Fi（MT5931）およびGPS（MT3332）チップセットを組み合わせて、MediaTek LinkItのすべての機能にアクセスできます。

また、Arduinoボードと同様のピンアウト機能を提供しており、さまざまなセンサー、周辺機器、Arduinoシールドに簡単に接続できます。

### LinkIt ONE IoTデモ ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Seeed-recipe-77-20141020151546.jpg)

これはLinkIt ONEで作られたIoTデモです。

このデモでは以下のことが可能です：

- 家庭内の温度、湿度、明るさ、音量制御データをOLEDスクリーンに表示

- クラウドサービス、データをクラウドプラットフォームXivelyにアップロードし、リアルタイムで監視

- データ保持により、データの変化を時間経過でレビュー可能

- メッセージを送信して家庭用電化製品を遠隔操作

- テーブルランプや3Dプリントをスマートフォンで制御

[作ってみたい](https://www.seeedstudio.com/recipe/77-linkit-one-iot-demo.html)。

### LinkIt ONEを使ったプリングルズ缶アンテナ ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/5515ae26588ec.jpg)

プリングルズ缶を使って集中的なアンテナを作成。

[作ってみたい](https://www.seeedstudio.com/recipe/177-pringles-can-antenna-with-a-linkit-one.html)。

[LinkIt ONEによるさらに素晴らしいプロジェクト](https://www.seeedstudio.com/recipe/index.php?m=Home&amp;controller=Recipe&amp;action=productDetail&amp;id=2)

### 素晴らしいプロジェクトを私たちと共有してください ###

作ることと共有することの精神を持つこと、それが私たちが信じる「メイカー」の本質です。

この精神があるからこそ、オープンソースコミュニティは今日のように繁栄しています。

あなたが何者であるか、何を作ったかは重要ではありません。ハッカー、メイカー、アーティスト、エンジニア、どんな人でも構いません。

自分の作品を他の人と共有し始めることで、あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ[Recipe](https://community.seeedstudio.com/projects.html#recipe)で素晴らしいプロジェクトを共有し、Seeedのコアユーザーになるチャンスを手に入れましょう。

- コアユーザーとは、Seeed製品に高い関心を持ち、Recipeで重要な貢献をする人々です。

- 私たちはコアユーザーと協力して新製品の開発を行います。つまり、コアユーザーはSeeedの新製品を公式発売前に体験する機会を得ることができ、その代わりに製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。さらに、コアユーザーが良いアイデアを持っている場合、ハードウェア部品、PCBAサービス、技術サポートを提供します。また、コアユーザーとのさらなる商業的な協力も十分に可能性があります。

コアユーザーに関する詳細情報は以下にメールしてください：[recipe@seeed.cc](mailto:recipe@seeed.cc)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[ライブラリ]**[Ethernet Shield V2.0 ライブラリ](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)
- **[ライブラリ]**[旧バージョンの Ethernet Shield V2.0 ライブラリ](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_Library.zip)
- **[Eagle]**[Ethernet Shield V2.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_eagle_files.zip)
- **[PDF]**[Ethernet Shield v2.0 PCB](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/Ethernet%20Shield%20v2.0.pdf)
- **[PDF]**[Ethernet Shield v2.0 SCH](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/Ethernet%20Shield%20v2.0%20sch.pdf)
- **[データシート]**[W5200 データシート.pdf](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なるニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>