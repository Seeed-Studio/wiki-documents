---
title: Wifi Halow 入門ガイド
description: このアプリケーションケースでは、最新の YOLO11n モデルを reCamera エッジコンピューティングプラットフォーム上で実行した際の、極限の性能と測定データを示します。
keywords:
  - reCamera
  - エッジ AI
  - Wifi Halow
slug: /wifi_halow_getting_started
sku: 100063704
image: https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/getting_start/wifi_halow_log.jpg
sidebar_position: 1
last_update:
  date: 2026-06-02T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/ja/wifi_halow_getting_started/
---

# Wifi Halow 入門ガイド

設定を開始する前に、以下のハードウェアが準備できていることを確認してください：
* **データケーブル**：データ転送機能を備えた USB Type-C ケーブル（充電専用ケーブルは使用しないでください）。
* **reCamera**：ボトムボードを取り外した状態の reCamera デバイス。
---


## はじめに

Wifi Halow は reCamera 用の無線ネットワークモジュールであり、reCamera を無線ネットワークに接続してリモート監視および管理を行うことができます。従来の Wifi 接続と比較して、Wifi Halow はより強力な壁貫通性と信号浸透能力、超長距離伝送、極めて低い消費電力、大量デバイス接続能力といった利点を備えています。

---


## 開封と組み立て

商品を受け取ると、箱の中には次の 3 点が入っています：

1. Wifi Halow モジュール
2. 背面カバー
3. ネジ

![Item List](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_list.png)

次に、背面カバーを取り外した状態の reCamera を用意します。下図のようになります：

![reCamera with back cover removed](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/reCamera_uncover.jpg)

取り付けチュートリアル動画：
<video 
  src="https://github.com/6zsz6/seeed_wiki_video/blob/main/Wifi_Halow%E5%AE%89%E8%A3%85%E8%A7%86%E9%A2%91.mp4" 
  controls 
  width="100%" 
  preload="metadata">
  お使いのブラウザはこの動画の再生をサポートしていません。
</video>


:::note Note
お使いの reCamera の OS バージョンは最新である必要があります。そうでない場合、Wifi Halow モジュールが正しく認識されません。OS バージョンの更新については、[Upgrade OS Version](https://wiki.seeedstudio.com/cn/recamera_gimbal_getting_started/#ota-%E7%B3%BB%E7%BB%9F%E5%8D%87%E7%BA%A7) を参照してください。
:::


## ハードウェアインターフェース

Wifi Halow モジュールには複数のインターフェースがあり、次のとおりです：
- BAT インターフェース：バッテリー接続用、パッケージ仕様は MX1.25-2P
- DC インターフェース：12V DC 電源接続用、パッケージ仕様は PH2.0-2P
- USB 変換ケーブルポート：reCamera デバイス接続用、パッケージ仕様は GH1.25-4P
![Interface diagram](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_hardware_line.jpg)

---


## Web 接続インターフェースの紹介

USB ケーブルを接続し、IP アドレス ***192.168.42.1*** から Web インターフェースにログインした後、左側の ***Network*** をクリックしてネットワーク設定画面に入ります。下図のようになります：

![Network Settings Interface](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_network_set.png)
- ***Enable Halow***：Wifi Halow モジュールを有効にするスイッチ
- ***Keep-Alive***：サーバーとの接続を維持するための Keep-Alive 機能のスイッチ（Keep-Alive の時間間隔は設定で最小 1s まで調整可能）で、切断を防ぎます
- ***Networks Found***：現在スキャンされた無線ネットワークの一覧を表示します（接続したい wifi がスキャンされない場合は、右側の「+」ボタンをクリックしてネットワークを手動で追加できます）
- ***IPEX Antenna***：アンテナの切り替え（Wifi Halow モジュールには外部 SMA アンテナと内部 IPEX アンテナの 2 本のアンテナがあります）。これをオンにすると内部アンテナが有効になります。詳細は下図を参照してください：

  ![Antenna location](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_antenna.jpg)

---

## Wi‑Fi HaLow ネットワークへの接続

1. ***Networks Found*** の下から参加したい Wifi Halow ネットワークを選択します
2. 接続したいネットワークをクリックし、自身のネットワークと同じ設定を維持したままパスワードを入力し、***Confirm*** をクリックして接続します
3. 接続に成功したら、***My Networks*** 配下のネットワークをクリックして、IP などの詳細情報を確認します。下図のようになります：
![Antenna location](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_detial.png)

---


## バッテリー電圧の確認

Wifi Halow モジュールにはバッテリー接続用の PH インターフェースがあり、その横に 2 つの LED インジケーターがあります。バッテリー充電中は赤色ランプが点灯し、満充電になると緑色ランプが点灯します。下図のようになります：

![Battery](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_BAT.jpg)

### 1. Node-Red モジュールでバッテリー電圧を確認
***node-red*** パネル左側のリストから ***reCamera*** セクションを探します。その中に ***Battery Voltage*** モジュールがあります。このモジュールの目的はバッテリー残量を確認することです。これをパネルにドラッグし、右上の deploy をクリックします。デプロイが成功すると、その下にバッテリー電圧が表示されます。下図のようになります：
![node-red_battery_voltage](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_node-red_bat.png)

### 2. Linux コマンドでバッテリー電圧を確認

***ssh*** コマンドで reCamera に接続した後、ターミナルに次のコマンドを入力してバッテリー電圧を確認します（取得される値の単位は ***mV*** です）：
```bash
curl -s [http://192.168.42.1/api/deviceMgr/queryBatteryInfo](http://192.168.42.1/api/deviceMgr/queryBatteryInfo) | python3 -c 'import sys,json; print(json.load(sys.stdin)["data"]["voltage"])'
```

結果は下図のようになります：
![linux_battery_voltage](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_linux_bat.png)

:::note Note
1. バッテリーが接続されていない場合、上記 2 つの方法で表示される値は大きく変動します。
2. 長距離での連続ビデオ伝送を行うと、このときアンテナの消費電力が高くなるため、ボード全体の発熱がより大きくなります。
:::

---


## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択できるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
