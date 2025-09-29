---
description: Wifi Bee v2.0
title: Wifi Bee v2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wifi_Bee_v2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_bee_v2_01.jpg)

Wifi Bee v2.0は、Wifi Bee v1.0のアップデート版です。SPIインターフェースを使用するトランシーバーモジュールMRF24WB0MAを、UARTインターフェースを使用するRN-171に置き換えました。Wifi Bee v2.0モジュールは、802.11 b/gラジオ、32ビットプロセッサ、TCP/IPスタック、リアルタイムクロック、暗号化アクセラレータ、電源管理ユニット、アナログセンサーインターフェースを統合しています。このモジュールはBeeソケットに直接差し込み、UARTポートを使用して通信できます。また、ATコマンドを使用して高度な設定を行い、独自の要件に対応することも可能です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Bee-v2.0-p-1637.html)

##  仕様
---
*   任意のBeeソケットと互換性あり

*   ホストインターフェース：UART

*   送信出力：0dBmから12dBm

*   周波数：2402~2480 MHz

*   チャンネル：0~13

*   統合されたTCP/IPプロトコルスタック

*   オンボード多層チップアンテナ

##  デモンストレーション
---
このセクションでは、Wifi Beeを使用してWebサーバーを作成するサンプルアプリケーションを紹介します。以下の手順に従って動作させてみましょう！
注意：このモジュールを設定するには、モジュールと通信できるアダプターまたはXbeeシールドが必要です。その後、他のモジュールに差し込んで使用できます。

###  ハードウェアのインストール

必要なハードウェアは以下の通りです。

*   1) Wifi Bee

*   2) アダプター（例：[SBee](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16Uart)、[Grove -Xbee Carrier](https://www.seeedstudio.com/depot/grove-xbee-carrier-p-905.html?cPath=98_16)、[Xbee Shield](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)）

*   3) Mini USBケーブル

Wifi BeeをアダプターのBeeソケットに差し込み、Mini USBケーブルを使用してアダプターをコンピューターに接続します。Wifi Beeがネットワークに接続されていない場合、ASSOCインジケーターは点滅状態になります。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_Beev2.0.jpg)

###  Wifi Beeの設定

Wifi Beeを設定するには、シリアルモニターが必要です。そのため、Wifi Beeを設定する前にシリアルツールを準備してください。この場合、一般的な[SSCOM3.2](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Sscom32E.zip)を選択します。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool.png)

*   1) 正しいシリアルポートを選択し、「Open Com」ボタンをクリックします。上記のように、ボーレートを9600に設定します。

*   2) 「SendNew」を選択せず、ATコマンド$$$をWifi Beeに送信すると、「CMD」と返信され、正しく設定モードに入ったことを示します。

*   3) 設定モードに入った後、「SendNew」を選択し、ATコマンドset u b 9600を送信してボーレートを9600に設定します。もちろん、38400に設定することも可能です。

*   4) show netと入力すると、現在のネットワーク設定が表示されます。

*   5) scanと入力して、周囲のWifiネットワークのリストを表示します。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool_Scan_net.png)

*   6) ATコマンドset wlan join 1を送信すると、シリアルポートが「ADK」と返信し、Wifi Beeが自動制御モードに入ったことを示します。

*   7) ルーターのSSIDに接続するには、次のように入力します（例：join Seeed-STU）：

set wlan ssid ルーターのSSID

set wlan pass ルーターのパスワード

save

reboot

モニターが現在のIPアドレスと開いているポートを返信します。例えば、Wifi BeeのIPアドレスが192.168.0.28で、ポートが2000であることが簡単に確認できます。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Join_network.png)

*   8) Webブラウザを使用して `http://ip:port` にアクセスします（例：`http://192.168.0.28:2000` ）。モニターはWebブラウザからのHTTPリクエストを受信しますが、Wifi Beeが何も返信しないため、Webブラウザは何も受信しません。

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Web_access.png)

詳細なコマンドについては、リソース部分のWifly Command Referenceをご覧ください。

###  TCPサーバーとWifi Beeの接続

ここでは[TCPUDPbg](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/TCPUDPDbg.zip)を選択し、TCPクライアントとして動作させ、Wifi Beeにコマンドを送信します。

*   1）TCPUDPbgをダウンロードして実行します。「CreatConnection」をクリックすると、次の画面が表示されます：

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/TCPUDPTool.png)

*   2）TCPタイプを選択した後、Wifi BeeのIPアドレスとポートを入力し、「Create」をクリックします。

*   3）左サイドバーの「Connect」ボタンをクリックします。これで、TCPUDPbgでシミュレートされたTCPクライアントを介してWifi Beeにコマンドを送信できます。また、TCPUDPbgはシリアルモニターから送信された文字列も受信します！

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Communication.png)

## バージョントラッカー
---
<table>
<tr>
<th>改訂版</th>
<th>説明</th>
<th>リリース日</th>
</tr>
<tr>
<td width="300px">Wifi Bee v1.0</td>
<td width="500px">SPIインターフェースを持つMRF24WB0MAトランシーバーモジュールを使用し、Atmega328pを搭載</td>
<td width="200px">2011年12月13日</td>
</tr>
<tr>
<td width="300px">Wifi Bee v2.0</td>
<td width="500px">MRF24WB0MAをRN-171に置き換え、Atmega328pチップを廃止</td>
<td width="200px">2013年11月11日</td>
</tr>
</table>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
*   [Wifi Bee v2.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip)

*   [RN-171 データシート](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-171.pdf)

*   [Wifi コマンドリファレンス](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-UM.pdf)

*   [アンテナデータシート](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Antenna_Datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>