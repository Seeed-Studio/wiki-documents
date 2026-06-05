---
description: このガイドでは、ハードウェア接続の完了、デバイスの Web インターフェースへのログイン、無線ネットワークの設定、および一般的な接続失敗時のトラブルシューティング方法について説明します。
title: reCamera Pro クイックスタートガイド
keywords:
  - reCamera
  - reCamera Pro
  - エッジ AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 
sidebar_position: 12
last_update:
  date: 06/01/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/
---

# reCamera Pro クイックスタートガイド

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## はじめに

**reCamera Pro** へようこそ。このガイドでは、ハードウェア接続の完了、デバイスの Web インターフェースへのログイン、無線ネットワークの設定、および一般的な接続失敗時のトラブルシューティング方法について説明します。

---

## 1. ハードウェア接続

設定を開始する前に、以下のハードウェアを準備していることを確認してください：
* **データケーブル**：データ通信が可能な USB Type-C ケーブル（充電専用ケーブルは使用しないでください）。
* **電源**：DC 電源ケーブル（仕様要件：**12V, 1A**、標準付属の電源は 12V, 2A です）。

### 接続手順

1. 下図のように、12V DC 電源ケーブルをデバイスの電源インターフェースに接続し、USB Type-C ケーブルの一端を reCamera Pro に、もう一端を Windows ホストマシン（ホスト PC）に接続します。
2. デバイスのステータスインジケータを確認します。**緑色のランプが点灯状態**になっていれば、デバイスが正常に起動し、動作状態に入っていることを示します。

![システムステータスランプとケーブル接続図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

---

## 2. デバイス Web 管理インターフェースへのログイン

reCamera Pro には直感的な Web 管理システムが内蔵されており、ブラウザから直接設定を行うことができます。

:::note 注意
Web インターフェースへのログインを試みる前に、USB Type-C ケーブルがコンピュータに正しく接続されており、デバイスの起動初期化が完了していることを確認してください。
:::

### 操作手順

1. ホストマシンでブラウザを開きます（Chrome または Edge ブラウザを推奨）。
2. アドレスバーにデフォルトの IP アドレス `192.168.42.1` を入力し、Enter キーを押します。
3. ログイン画面が表示されたら、デバイスのログインパスワードを入力します。
4. ログインボタンの下にある 2 つのコンプライアンスおよび記憶のオプションにチェックを入れ、ログインをクリックして reCamera Pro システムのメインインターフェースに入ります（デフォルトでは「Real-time Preview」ページが表示されます）。

![Web ログインおよびメインインターフェース図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip よくあるトラブルシューティング
Windows システムで `192.168.42.1` を入力してもページが読み込まれない場合は、本ドキュメントの末尾にある [4. よくある質問とトラブルシューティング (FAQ)](#4-よくある質問とトラブルシューティングfaq) セクションに直接移動し、ネットワークアダプタの確認を行ってください。
:::

---

## 3. 無線ネットワーク（Wi-Fi）設定

デバイスをインターネットに接続したり、ローカルエリアネットワーク内で無線管理を行えるようにするには、Wi-Fi 接続を設定してください。

### 操作手順

1. Web のメインインターフェースに正常にログインしたら、左側のナビゲーションバーで **Device Info** をクリックします。
2. サブメニューまたは右側の設定エリアで **Network Settings** をクリックします。
3. Wi-Fi 機能を有効にします（デフォルトで無効になっている場合）。システムが周辺の無線ネットワークを自動的にスキャンします。
4. 利用可能なネットワークリストから自分の Wi-Fi SSID を選択し、正しい無線パスワードを入力して接続をクリックします。

![無線ネットワーク設定手順図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

### 無線リモート接続（任意の手順）

Wi-Fi への接続に成功した後、接続済みの Wi-Fi 名をクリックすると、割り当てられた IP アドレスや MAC アドレスなどの詳細なネットワーク情報を確認できます。

![Wi-Fi 詳細表示図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

:::tip 無線管理のために Type-C ケーブルを抜く
Wi-Fi によって割り当てられたローカルエリアネットワーク IP（例：`192.168.4.200`）を取得した後、コンピュータと reCamera Pro が同じローカルエリアネットワーク内にあれば、ブラウザにこの IP アドレス（例：`http://192.168.4.200`）を直接入力してデバイスにログインできます。
この時点で、**USB Type-C ケーブルを安全に抜いて**、完全な無線での操作および管理を実現できます。
:::

---

## 4. よくある質問とトラブルシューティング (FAQ)

### Q1: Windows システムで 192.168.42.1 からログイン画面に入れない場合はどうすればよいですか？

Type-C ケーブルを接続しても Web インターフェースを開けない場合、通常は Windows システムの仮想ネットワークカードが正しく IP アドレスを取得していないことが原因です。次の手順に従ってトラブルシューティングを行ってください：

1. Windows ホストマシンで **Control Panel** を開きます。
2. **Network and Internet** -> **Network and Sharing Center** -> **Change adapter settings** の順にクリックして進みます。
3. 表示されたネットワーク接続一覧の中から、`Remote NDIS based Internet Sharing Device` などの名称、または reCamera に関連する名称の仮想ネットワークカードを探します（デバイスを抜き差しして、どのネットワークポートが消えて再表示されるかを確認すると、そのポートが reCamera Pro の仮想ネットワークカードインターフェースです）。
4. このネットワークアダプタを右クリックし、**Properties** を選択します。
5. 一覧の中から **Internet Protocol Version 4 (TCP/IPv4)** をダブルクリックします。
6. 設定で **Obtain an IP address automatically** および **Obtain DNS server address automatically** にチェックが入っていることを確認します。
7. OK をクリックして設定を保存し、ブラウザで再度 `192.168.42.1` にアクセスします。

<video 
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4" 
  controls 
  width="100%" 
  preload="metadata">
  お使いのブラウザはこの動画の再生に対応していません。
</video>

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>