---
description: reCamera を Telegram と統合するためのチュートリアルを提供します。n8n に依存します。
title: Telegram 入門
keywords:
  - reCamera
  - Telegram
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png
slug: /getting_started_in_Telegram_work_with_recamera
sku: 102991896, 108990119, 100029708
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-20'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/getting_started_in_Telegram_work_with_recamera/
---


# reCamera n8n Telegram の連携

## はじめに

さまざまな IoT アプリケーションシナリオの中でも、デバイス間の情報交換や自動処理は、単なる認識機能以上にシステムの価値を示します。reCamera は安定したローカル AI ビジュアル認識機能を提供し、n8n はデータ処理とプロセス自動化のための柔軟なビジュアルオーケストレーションプラットフォームを提供します。この 2 つを組み合わせることで、検出情報はもはやローカルデバイスに限定されず、さらに活用できるイベントソースとなります。

このチュートリアルでは、シンプルかつ効率的な統合方法を紹介します。reCamera の認識結果をテキスト形式で n8n にプッシュし、その後 n8n が API を介して、ユーザーが作成した Telegram の個人 Bot に自動送信します。この連携により、あらゆる認識イベントを即座にモバイルデバイスへプッシュでき、複数のデバイスやプラットフォームにまたがる軽量な通知システムを構築できます。全体のプロセスで複雑なコードを書く必要はなく、必要なノード設定を完了するだけで、素早く目的を達成できます。

## ハードウェアの準備

reCamera 1 台（2002 シリーズ、HQ POE バージョン、またはパン・チルトバージョンのいずれでも構いません。ただし、POE バージョンには WiFi 機能がなく、同一セグメント内で POE 機能付きスイッチに接続する必要がある点に注意してください）  
PC 1 台（Ubuntu 22.04 を構成した仮想マシンで、n8n のインストールに使用）

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera ジンバル</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. n8n をインストールする（仮想マシン内）

### (1) Docker をインストール

```bash
sudo apt update
sudo apt install -y docker.io
```

インストール完了後、有効化して自動起動を設定します

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

インストールが成功したか確認します：

```bash
docker --version
```

次のような表示が出れば OK です：

```nginx
Docker version 28.2.2, build ...
```

### (2) 現在のユーザーが（毎回 sudo なしで）直接 docker を使えるようにする

```bash
sudo usermod -aG docker $USER
```

その後、現在のターミナルを終了し、再ログインします。

```bash
docker ps
```

### (3) n8n コンテナを起動

```bash
sudo docker run -it --rm \
  --name n8n \
  --network host \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

初回起動時には n8n イメージが自動的にプルされます。数百 MB 程度あり、少し時間がかかります。

### (4) n8n にアクセス

仮想マシン内で Firefox ブラウザを開き、次を入力します：

```bash
http://localhost:5678
```

n8n の画面に入り、アカウントを作成できます。

## 2. n8n を設定する

### (1) 「Webhook」ノードを作成して ReCamera のデータを受信

Personal をクリックし、Create workflow を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_1.png" /></div>

プラス記号をクリックし、検索ボックスに「webhook」と入力して、最初の「Webhook」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_2.png" /></div>

これで設定画面に入りました。ここでは 2 か所を変更する必要があります。まず、「HTTP Method」を「POST」に選択します。次に、「Path」を任意の名前に変更します。ここでは例として「recamera_detect」とします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_3.png" /></div>

このステップが終わると自動的に保存されています。この時点で左上の「Back to canvas」をクリックしてメイン画面に戻り、次のノードを作成する準備をします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_4.png" /></div>

### (2) 受信データを処理する「Code」ノードを作成

プラス記号をクリックし、検索ボックスに「code」と入力して、最初の「Code」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_5.png" /></div>

次に「Code in JavaScript」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_6.png" /></div>

元の内容を次のコードに置き換えます：

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_7.png" /></div>

左上の「Back to canvas」をクリックしてメイン画面に戻ります

## 3. Telegram を設定する

### (1) Telegram Bot を作成し、その API を取得

Telegram を開き、「BotFather」を検索します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_8.png" /></div>

Bot を作成し、ボット名とユーザー名を入力してから「CREATE BOT」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_9.png" /></div>

するとこの画面が表示されます。鍵のアイコンの後ろにある一連の文字列が、作成した Bot の API です。「Copy」をクリックしてコピーしておきます。後で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_10.png" /></div>

### (2) userinfobot を検索して自分の個人 Chat ID を取得

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_11.png" /></div>

クリックして入ったら、右上の「Start」をクリックします。このとき、自分の ID を含むメッセージが返ってきます。この ID を覚えておいてください。後で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_12.png" /></div>

### (3) n8n の設定を続けて 3 つ目のノードを追加

プラス記号をクリックし、検索ボックスに「telegram」と入力して、最初の「Telegram」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_13.png" /></div>

クリックした後、続けて「message」と入力し、「Send a text message」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_14.png" /></div>

ノードに入ったら、「Create new credentila」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_15.png" /></div>

そして先ほどコピーした Bot の API を「Access Token」に貼り付け、右上の「Save」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_16.png" /></div>

「Save」をクリックすると、システムが API の有効性を検証します。問題がなければ「Connection tested successfully」と表示されます。このとき、右上の Exit をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_17.png" /></div>

その後、先ほど取得した個人 Chat ID を入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_18.png" /></div>

次に「Text」を入力します：

```
当前人数：{{ $json["peopleCount"] }}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_19.png" /></div>

左上の「Back to canvas」をクリックしてメイン画面に戻ります

## 4. Node-Red を設定する

まず、仮想マシンの n8n 画面を開き、先ほど設定した「Webhook」ノードをダブルクリックして Webhook ノードの設定画面に入り、「Production URL」をクリックして、以下の「POST」アドレスをコピーします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_20.png" /></div>

前半の設定手順は [Home Assistant](https://wiki.seeedstudio.com/ja/getting_started_for_home_assistant_with_recamera/) と同じで、違いは「http request」ノードを設定する際に URL アドレスを変更する点だけです。つまり、仮想マシンで先ほどコピーした POST アドレスにし、その後 localhost を仮想マシンの IP アドレスに変更します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_21.png" /></div>

仮想マシンの IP を確認

```bash
ifconfig
```

:::note
必ず覚えておいてください！Recamera をネットワークに接続していることを確認してください!!! そうしないと通信できません。
:::

## 5. Active をオンにし、Executions 画面に入ってメッセージを確認

右上の「Inactive」スイッチをクリックして緑色の Active に切り替え、その後「Executions」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_22.png" /></div>

この時点で、左側に多くのタイムスタンプが表示され、更新され続けているのが分かります。タイムスタンプが更新されている場合は、reCamera のデータが n8n プラットフォームに接続されていることを意味します！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_23.png" /></div>

次に Telegram を確認すると、多くのメッセージ通知が届いているはずです。この時点で、reCamera のメッセージを Telegram へ正常にプッシュできています!!!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png" /></div>

ある時刻の検出内容を確認したい場合は、そのタイムスタンプをダブルクリックし、続いて "Code in JavaScript" をダブルクリックすると、右側の OUTPUT を確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_25.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
