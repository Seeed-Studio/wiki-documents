---
description: reCamera を n8n と統合するためのチュートリアルを提供します。n8n は仮想マシンにインストールされています。
title: n8n 入門ガイド
keywords:
  - reCamera
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/n8n_11.png
slug: /getting_started_for_n8n_with_recamera_bak
sku: 102991896, 108990119, 100029708
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-20'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/getting_started_for_n8n_with_recamera_bak/
---
# reCamera を使った n8n 入門ガイド

## はじめに

reCamera はローカルでの画像認識をサポートし、デバイス上でリアルタイムに検出結果を生成できるインテリジェントカメラです。n8n はオープンソースの自動化ワークフローツールです。ユーザーはビジュアルインターフェースを通じて、さまざまな通知、ストレージ、またはアプリケーション連携のフローを素早く構築できます。本チュートリアルでは、reCamera が認識した情報をテキスト形式で n8n にプッシュし、それをワークフローのトリガーソースとして利用する方法を紹介します。これにより、ユーザーはカメラの検出イベントを自分の自動化システムに簡単に統合でき、メッセージアラート、ログ記録、サードパーティサービス呼び出しなどの基本機能を実現し、将来的なより複雑なビジネスロジックの基盤を築くことができます。

## ハードウェアの準備

reCamera 1 台（2002 シリーズ、HQ POE バージョン、またはパン・チルトバージョンのいずれでも構いませんが、POE バージョンには WiFi 機能がなく、同一セグメント内で POE 機能付きスイッチに接続する必要がある点に注意してください）  
コンピュータ 1 台（Ubuntu 22.04 を構成した仮想マシンで、n8n のインストールに使用）

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

### (1) Docker をインストールする

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

その後、現在のターミナルを終了し、再度ログインします。

```bash
docker ps
```

### (3) n8n コンテナを実行する

```bash
sudo docker run -it --rm \
  --name n8n \
  --network host \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

初回実行時には n8n イメージが自動的にプルされます。数百 MB 程度あり、少し時間がかかります。

### (4) n8n にアクセスする

仮想マシン内で Firefox ブラウザを開き、次を入力します：

```bash
http://localhost:5678
```

n8n の画面に入り、アカウントを作成できます。

## 2. n8n を設定する

### (1) 「Webhook」ノードを作成して reCamera のデータを受信する

Personal - Create workflow をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_1.png" /></div>

プラス記号をクリックし、検索ボックスに「webhook」と入力して、最初の「Webhook」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_2.png" /></div>

ここで設定画面に入りました。ここでは 2 か所を変更する必要があります。まず、「HTTP Method」を「POST」に選択します。次に、「Path」を任意の名前に変更します。ここでは例として「recamera_detect」とします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_3.png" /></div>

このステップが終わると、自動的に保存されています。この時点で左上の「Back to canvas」をクリックしてメイン画面に戻り、次のノードを作成する準備をします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_4.png" /></div>

### (2) 受信データを処理する「Code」ノードを作成する

プラス記号をクリックし、検索ボックスに「code」と入力して、最初の「Code」ノードをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_5.png" /></div>

次に「Code in JavaScript」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_6.png" /></div>

元の内容を次のコードに置き換えます：

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_7.png" /></div>

左上の「Back to canvas」をクリックしてメイン画面に戻ります

## 3. Node-Red を設定する

まず仮想マシンの n8n 画面を開き、先ほど設定した「Webhook」ノードをダブルクリックして Webhook ノードの設定画面に入り、「Production URL」をクリックして、以下の「POST」アドレスをコピーします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_8.png" /></div>

前の設定手順は[Home Assistant](https://wiki.seeedstudio.com/ja/getting_started_for_home_assistant_with_recamera/)と同じですが、「http request」ノードを設定する際に URL アドレスを変更する必要があります。つまり、仮想マシンで先ほどコピーした POST アドレスにし、その後 localhost アドレスを仮想マシンの IP アドレスに変更します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_9.png" /></div>

仮想マシンの IP を確認する

```bash
ifconfig
```

:::note
必ず覚えておいてください！必ず Recamera をネットワークに接続してください！！！そうしないと通信できません。
:::

## 4. Active をオンにして Executions 画面に入り、メッセージを確認する

右上の「Inactive」スイッチをクリックして緑色の Active に切り替え、その後「Executions」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_10.png" /></div>

このとき、左側に多くのタイムスタンプが表示され、更新され続けているのが見えるはずです。タイムスタンプが更新され続けていれば、reCamera のデータが n8n プラットフォームに接続されていることを意味します！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_11.png" /></div>

ある時刻の検出内容を確認したい場合は、そのタイムスタンプをダブルクリックし、続いて「Code in JavaScript」をダブルクリックして、右側の OUTPUT を確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_12.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
