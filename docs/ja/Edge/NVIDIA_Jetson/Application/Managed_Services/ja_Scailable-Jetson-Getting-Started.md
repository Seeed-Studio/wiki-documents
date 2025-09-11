---
description: NVIDIA Jetson デバイスで Scailable を使用して AI モデルをデプロイする
title: Scailable の使い方
tags:
  - AI モデル デプロイ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Scailable-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイスでの Scailable の使い方

<div align="center"><img width="{1000}" src="https://files.seeedstudio.com/wiki/Scailable/wiki-thumb-4.gif" /></div>

## Scailable とは？

[Scailable](https://scailable.net) は、エッジ AI ソリューションを大規模に作成および管理するためのプラットフォームを提供します。Scailable を使用すると、対応するエッジデバイス（ルーター、ゲートウェイ、IPC など）を簡単に構成して「スマート」デバイスに変えることができます。スマートデバイスは、ビデオストリームなどの入力データに対して高度な人工知能（AI）および機械学習（ML）モデルを実行し、入力を意味のあるもの（例：ビデオ内の車の数のカウント）に変換することができます。

## NVIDIA Jetson で Scailable を使用する理由

NVIDIA Jetson プラットフォームは、Scailable を実行するのに最適な候補です。NVIDIA SoM を含むエッジ AI デバイスとして、これらのデバイスにさまざまな AI パイプラインを大規模に OTA（Over-The-Air）でデプロイした後、より優れた推論性能を発揮することができます。

この Wiki では、NVIDIA Jetson プラットフォームに Scailable AI Manager を簡単にインストールし、Scailable プラットフォームを使用して AI ソリューションをリモートで構成および管理する方法を説明します。

## 前提条件

- NVIDIA Jetson デバイスが NVIDIA JetPack 5.0+ を実行しており、インターネットに接続されていること

  - この Wiki は、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) で [JetPack 5.1.1](https://developer.nvidia.com/embedded/jetpack-sdk-511) を実行してテストされています。Seeed が提供するその他の NVIDIA Jetson デバイスを探索したい場合は、[こちらのページ](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf) をご覧ください。
- インターネットに接続された Windows、Linux、または Mac を実行するホスト PC

## Scailable AI Manager のインストール

**ステップ 1:** 以下のコマンドを実行して、Jetson Orin デバイスに Scailable AI Manager をインストールします。

```sh
sudo bash -ic "$(wget -q -O - https://get.sclbl.net)"
```

:::note
インストール中に、JetPack 5 サポートを有効にするかどうかを尋ねられるプロンプトに「y」と入力する必要があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/2.jpg
" style={{width:800, height:'auto'}}/></div>

**ステップ 2:** Web ブラウザで Jetson デバイスの IP アドレスに続けて **:8081** を入力するか、コマンドラインに表示される URL をそのまま入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/4.jpg
" style={{width:800, height:'auto'}}/></div>

## Scailable アカウントの登録

**ステップ 1:** Scailable AI Manager が表示されたら、デバイスに名前を付けて **Register** ボタンをクリックして登録します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/1.jpg
" style={{width:1000, height:'auto'}}/></div>

**ステップ 3:** 作成したデバイス名を確認し、**Register** をクリックしてから **Return to device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/7.jpg
" style={{width:650, height:'auto'}}/></div>

すべてが正常に進行した場合、以下のように **Status** タブの下で全てのステータスチェックが成功していることが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/8.jpg
" style={{width:850, height:'auto'}}/></div>

## AIアプリケーションの実行

Scailableには、試すことができるさまざまなAIモデルがあらかじめ搭載されています。ただし、自分のAIモデルを使用したい場合は、それをインポートすることも可能です。

**ステップ1:** **Model**タブの**First Model**セクション内で、**Assign Model**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/9.jpg
" style={{width:750, height:'auto'}}/></div>

**ステップ2:** ここでは、**add a model**をクリックして独自のモデルを追加するか、あらかじめ構築されたモデルを使用することができます。ここでは、**Scailable Models**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/10.jpg
" style={{width:900, height:'auto'}}/></div>

**ステップ3:** 例として、**People counter within a region**モデルを選択します。**Use this model**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/12.png
" style={{width:800, height:'auto'}}/></div>

これで、モデルが選択されたことが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/13.png
" style={{width:750, height:'auto'}}/></div>

**ステップ4:** **Input**タブで、入力ドライバーとして**Video driver**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/14.png
" style={{width:800, height:'auto'}}/></div>

ここでは、ビデオストリーム、画像、またはScailableにあらかじめ読み込まれたサンプル画像/ビデオを選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/16.png
" style={{width:800, height:'auto'}}/></div>

**ステップ5:** 例として、Scailableにあらかじめ読み込まれているビデオソースである**faces**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/15.jpg
" style={{width:800, height:'auto'}}/></div>

**ステップ6:** **output**タブでは、設定をデフォルトのままにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/17.png
" style={{width:800, height:'auto'}}/></div>

**ステップ7:** **Options**タブでは、設定をデフォルトのままにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/18.png
" style={{width:800, height:'auto'}}/></div>

**ステップ8:** **Test**タブで、**Test configuration**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/19.png
" style={{width:800, height:'auto'}}/></div>

成功した場合、以下のような出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/20.png
" style={{width:800, height:'auto'}}/></div>

**ステップ9:** **Run**タブで、**Run Model**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/21.png
" style={{width:800, height:'auto'}}/></div>

正常に実行されている場合、以下のような出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/22.png
" style={{width:800, height:'auto'}}/></div>

**ステップ10:** **View live visualization**をクリックして、推論結果をローカルでプレビューします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/23.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/25.png
" style={{width:800, height:'auto'}}/></div>

**ステップ11:** **View output in cloud**をクリックして、結果をCSVまたはJSON形式でダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/26.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/27.png
" style={{width:800, height:'auto'}}/></div>

## AIモデルをスケールでデプロイする

Scailableを使用すると、単一のモデルを複数のデバイスに簡単にスケールでデプロイすることができます。

**ステップ 1:** [このウェブページ](https://admin.sclbl.net/login)にアクセスし、Scailableアカウントにログインします。以下のようなダッシュボードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/32.png
" style={{width:800, height:'auto'}}/></div>

**ステップ 2:** **DEVICES**をクリックすると、Scailableアカウントに接続されているすべてのデバイスが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/28.png
" style={{width:750, height:'auto'}}/></div>

**ステップ 3:** チェックボックスをクリックしてすべてのデバイスを選択し、デバイスグループの名前を入力して**Save new groups**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/29.png
" style={{width:750, height:'auto'}}/></div>

**ステップ 4:** **Assign a model to all devices in group**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/30.png
" style={{width:750, height:'auto'}}/></div>

**ステップ 5:** 前回と同様にモデルを選択すると、そのモデルがグループ内のすべてのデバイスにリモートでデプロイされます。

モデルがリモートで正常にデプロイされると、以下のような出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/31.jpg
" style={{width:600, height:'auto'}}/></div>

## 詳細情報

Scailableは非常に詳細で包括的なドキュメントを提供しています。そのため、[こちら](https://docs.scailable.net)をチェックすることを強くお勧めします。

## 技術サポートと製品に関するディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>