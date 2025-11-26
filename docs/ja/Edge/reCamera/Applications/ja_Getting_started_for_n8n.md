---
description: reCamera と n8n の統合チュートリアルを提供します。N8N は仮想マシンにインストールされています。
title: n8n の入門ガイド
keywords:
  - reCamera
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/n8n_11.png
slug: /ja/getting_started_for_n8n_with_recamera
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
---
# reCamera を使った n8n の入門ガイド

## はじめに

reCamera は、ローカル視覚認識をサポートし、デバイス上でリアルタイムに検出結果を生成できるインテリジェントカメラです。n8n はオープンソースの自動化ワークフローツールです。ユーザーは視覚的なインターフェースを通じて、様々な通知、ストレージ、またはアプリケーション連携プロセスを迅速に構築できます。このチュートリアルでは、reCamera で認識された情報をテキスト形式で n8n にプッシュし、ワークフローのトリガーソースとして機能させる方法を紹介します。これにより、ユーザーはカメラ検出イベントを自分の自動化システムに簡単に統合でき、メッセージアラート、ログ記録、サードパーティサービス呼び出しなどの基本機能を実現し、将来のより複雑なビジネスロジックの基盤を築くことができます。

## ハードウェアの準備

reCamera 1台（2002 シリーズ、HQ POE バージョン、またはパンチルトバージョンのいずれでも可能ですが、POE バージョンには WiFi 機能がないため、同じネットワークセグメントで POE 機能付きスイッチに接続する必要があることに注意してください）  
コンピューター1台（Ubuntu 22.04 が設定された仮想マシン、n8n のインストールに使用）

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

### (2) 現在のユーザーが docker を直接使用できるようにする（毎回 sudo を使わずに済むように）

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

初回実行時は自動的に n8n イメージをプルします。数百 MB あるため、少し時間がかかります

### (4) n8n へのアクセス

仮想マシン内で Firefox ブラウザを開き、以下を入力します：

```bash
http://localhost:5678
```

n8n インターフェースに入り、アカウントを作成できます。

## 2. n8n の設定

### (1) ReCamera データを受信する「Webhook」ノードの作成

Personal-Create workflow をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_1.png" /></div>

プラス記号をクリック-検索ボックスに「webhook」と入力-最初の「Webhook」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_2.png" /></div>

設定インターフェースに入りました。ここで2箇所を修正する必要があります。まず、「HTTP Method」を「POST」に選択します。次に、「Path」を任意の名前に修正します。ここでは「recamera_detect」を例にします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_3.png" /></div>

この手順の後、自動的に保存されます。この時点で、左上の「Back to canvas」をクリックしてメインインターフェースに戻り、次のノードの作成準備をします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_4.png" /></div>

### (2) 受信データを処理する「Code」ノードの作成

プラス記号をクリック-検索ボックスに「code」と入力-最初の「Code」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_5.png" /></div>

次に「Code in JavaScript」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_6.png" /></div>

元の内容を以下のコードに置き換えます：

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_7.png" /></div>

左上の「Back to canvas」をクリックしてメインインターフェースに戻ります

## 3. Node-Red の設定

まず仮想マシンの n8n インターフェースを開き、先ほど設定した「Webhook」ノードをダブルクリックして、Webhook ノードの設定インターフェースに入り、「Production URL」をクリックして以下の「POST」アドレスをコピーします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_8.png" /></div>

前の設定手順は [Home Assistant](https://wiki.seeedstudio.com/ja/getting_started_for_home_assistant_with_recamera/) と同じですが、「http request」ノードを設定する際に URL アドレスを修正する必要があります。つまり、仮想マシンで先ほどコピーした POST アドレスを使用し、localhost アドレスを仮想マシンの IP アドレスに修正する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_9.png" /></div>

仮想マシン IP の確認

```bash
ifconfig
```

:::note
忘れずに！Recamera をネットワークに接続してください！！！そうしないと通信ができません。
:::

## 4. Active を開いて Executions インターフェースでメッセージを確認

右上の「Inactive」スイッチをクリックして緑色の Active に変更し、「Executions」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_10.png" /></div>

この時点で、左側に多くのタイムスタンプが更新され続けているのが見えるでしょう。タイムスタンプが更新され続けているのが見えれば、reCamera データが n8n プラットフォームに接続されていることを意味します！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_11.png" /></div>

特定の時刻の検出内容を確認したい場合は、そのタイムスタンプをダブルクリックし、「Code in JavaScript」をダブルクリックして右側の OUTPUT を確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_12.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
