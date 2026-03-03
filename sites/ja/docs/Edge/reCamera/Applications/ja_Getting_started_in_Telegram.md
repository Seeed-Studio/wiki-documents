---
description: reCamera と Telegram の統合チュートリアルを提供します。n8n に依存します。
title: Telegram での開始方法
keywords:
  - reCamera
  - Telegram
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png
slug: /ja/getting_started_in_Telegram_work_with_recamera
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
---


# reCamera n8n Telegram の連携

## はじめに

様々な IoT アプリケーションシナリオにおいて、デバイス間の情報交換と自動処理は、単なる認識機能よりもシステムの価値をより多く実証します。reCamera は安定したローカル AI 視覚認識機能を提供し、n8n はデータ処理とプロセス自動化のための柔軟な視覚的オーケストレーションプラットフォームを提供します。この2つを組み合わせることで、検出情報はもはやローカルデバイスに限定されず、さらに活用できるイベントソースになることができます。

このチュートリアルでは、シンプルで効率的な統合方法を紹介します：reCamera の認識結果をテキスト形式で n8n にプッシュし、その後 n8n が API を介してユーザー構築の Telegram 個人 Bot に自動的に送信します。このリンクを通じて、任意の認識イベントをモバイルデバイスに即座にプッシュでき、複数のデバイスとプラットフォームにまたがる軽量な通知システムを構築できます。全体のプロセスは複雑なコードを書く必要がなく、必要なノード設定を完了するだけで迅速に目標を達成できます。

## ハードウェア準備

reCamera 1台（2002 シリーズ、HQ POE バージョン、またはパンチルトバージョンのいずれでも可能ですが、POE バージョンには WiFi 機能がないため、同じネットワークセグメントで POE 機能付きスイッチに接続する必要があることに注意してください）  
コンピュータ 1台（Ubuntu 22.04 で設定された仮想マシン、n8n のインストールに使用）

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera Gimbal</th>
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

## 1. n8n のインストール（仮想マシン内）

### (1) Docker のインストール

```bash
sudo apt update
sudo apt install -y docker.io
```

インストール完了後、有効化して起動時設定を行います

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

インストールが成功したことを確認します：

```bash
docker --version
```

次のような表示が出れば成功です：

```nginx
Docker version 28.2.2, build ...
```

### (2) 現在のユーザーが docker を直接使用できるようにする（毎回 sudo を使わないため）

```bash
sudo usermod -aG docker $USER
```

その後、現在のターミナルを終了して再度ログインします。

```bash
docker ps
```

### (3) n8n コンテナの実行

```bash
sudo docker run -it --rm \
  --name n8n \
  --network host \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

初回実行時は自動的に n8n イメージをプルします。数百 MB 程度で、少し時間がかかります

### (4) n8n へのアクセス

仮想マシン内で Firefox ブラウザを開き、以下を入力します：

```bash
http://localhost:5678
```

n8n インターフェースに入ってアカウントを作成できます。

## 2. n8n の設定

### (1) ReCamera データを受信する「Webhook」ノードの作成

Personal-Create workflow をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_1.png" /></div>

プラス記号をクリック-検索ボックスに「webhook」と入力-最初の「Webhook」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_2.png" /></div>

設定インターフェースに入りました。ここで2箇所を修正する必要があります。まず、「HTTP Method」を「POST」に選択します。次に、「Path」を任意の名前に修正します。ここでは「recamera_detect」を例にします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_3.png" /></div>

このステップの後、自動的に保存されます。この時、左上の「Back to canvas」をクリックしてメインインターフェースに戻り、次のノードの作成準備をします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_4.png" /></div>

### (2) 受信データを処理する「Code」ノードの作成

プラス記号をクリック-検索ボックスに「code」と入力-最初の「Code」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_5.png" /></div>

次に「Code in JavaScript」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_6.png" /></div>

元の内容を以下のコードに置き換えます：

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_7.png" /></div>

左上の「Back to canvas」をクリックしてメインインターフェースに戻ります

## 3. Telegram の設定

### (1) Telegram Bot の作成と API の取得

Telegram を開いて「BotFather」を検索します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_8.png" /></div>

Bot を作成し、ロボット名とユーザー名を入力して、「CREATE BOT」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_9.png" /></div>

このインターフェースが表示されます。キーチェーンアイコンの後に、一連の文字列があります。これが作成した Bot の API です。「Copy」をクリックして、後で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_10.png" /></div>

### (2) userinfobot を検索して個人の Chat ID を取得

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_11.png" /></div>

クリックして入った後、右上の「Start」をクリックします。この時、あなたの ID を含むメッセージが返されます。この ID を覚えておいてください。後で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_12.png" /></div>

### (3) n8n の設定を続行し、3番目のノードを追加

プラス記号をクリック-検索ボックスに「telegram」と入力-最初の「Telegram」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_13.png" /></div>

クリック後、「message」と入力を続け、「Send a text message」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_14.png" /></div>

ノードに入った後、「Create new credentila」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_15.png" /></div>

次に、先ほどコピーした Bot の API を「Access Token」にコピーし、右上の「Save」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_16.png" /></div>

「Save」をクリックした後、システムは API が存在するかどうかを確認します。すべてが正しければ、「Connection tested successfully」という文字が表示されます。この時、右上の Exit をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_17.png" /></div>

次に、先ほど取得した個人の Chat ID を入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_18.png" /></div>

次に「Text」を入力します：

```
当前人数：{{ $json["peopleCount"] }}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_19.png" /></div>

左上の「Back to canvas」をクリックしてメインインターフェースに戻ります

## 4. Node-Red の設定

まず、仮想マシンの n8n インターフェースを開き、先ほど設定した「Webhook」ノードをダブルクリックして、Webhook ノードの設定インターフェースに入り、「Production URL」をクリックして以下の「POST」アドレスをコピーします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_20.png" /></div>

前の設定手順は [Home Assistant](https://wiki.seeedstudio.com/ja/getting_started_for_home_assistant_with_recamera/) と同じですが、「http request」ノードを設定する際に、URL アドレスを修正する必要があります。つまり、仮想マシンで先ほどコピーした POST アドレスで、localhost を仮想マシンの IP アドレスに修正します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_21.png" /></div>

仮想マシン IP の確認

```bash
ifconfig
```

:::note
覚えておいてください！Recamera をネットワークに接続することを確認してください！！！そうでなければ通信できません。
:::

## 5. Active を開いて Executions インターフェースに入り、メッセージを確認

右上の「Inactive」スイッチをクリックして緑色の Active に変更し、「Executions」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_22.png" /></div>

この時点で、左側に多くのタイムスタンプが更新され続けているのが見えるでしょう。タイムスタンプが更新され続けているのが見える場合、reCameraのデータがn8nプラットフォームに接続されていることを意味します！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_23.png" /></div>

次にTelegramを確認してください。多くのメッセージ通知があるはずです。この時点で、reCameraメッセージをTelegramに正常にプッシュできました！！！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png" /></div>

特定の時間の検出内容を表示したい場合は、そのタイムスタンプをダブルクリックし、次に「Code in JavaScript」をダブルクリックして右側のOUTPUTを表示できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_25.png" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
