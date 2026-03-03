---
description: NVIDIA Jetson デバイスで Scailable を使用して AI モデルをデプロイする
title: Scailable を始める
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Scailable-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# NVIDIA® Jetson デバイスで Scailable を始める

<div align="center"><img width="{1000}" src="https://files.seeedstudio.com/wiki/Scailable/wiki-thumb-4.gif" /></div>

## Scailable とは？

[Scailable](https://scailable.net) は、Edge AI ソリューションを大規模に作成・管理するためのプラットフォームを提供します。Scailable を使用すると、サポートされている任意のエッジデバイス（ルーター、ゲートウェイ、IPC など）を簡単に設定して「スマート」デバイスに変えることができます。スマートデバイスは、ビデオストリームなどの入力データに対して高度な人工知能（AI）と機械学習（ML）モデルを実行し、入力をビデオ内の車の数のカウントなど、意味のあるものに変換できます。

## なぜ NVIDIA Jetson で Scailable を使うのか？

NVIDIA Jetson プラットフォームは、NVIDIA SoM を含む Edge AI デバイスとして、これらのデバイスに様々な AI パイプラインを大規模にオーバーザエアでデプロイした後、より良い推論性能を提供できるため、Scailable を実行するのに最適な候補です。

この wiki では、NVIDIA Jetson プラットフォームに Scailable AI Manager を簡単にインストールし、Scailable Platform を使用して AI ソリューションを大規模にリモートで設定・管理する方法を説明します。

## 前提条件

- NVIDIA JetPack 5.0+ を実行し、インターネットに接続された NVIDIA Jetson デバイス

  - この wiki は [JetPack 5.1.1](https://developer.nvidia.com/embedded/jetpack-sdk-511) を実行する [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) でテストしました。Seeed が提供するより多くの NVIDIA Jetson デバイスを探索したい場合は、[このページ](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)をご覧ください。
- Windows、Linux または Mac を搭載し、インターネットに接続されたホスト PC

## Scailable AI Manager のインストール

**ステップ 1:** 以下のコマンドを実行して、Jetson Orin デバイスに Scailable AI Manager をインストールします 

```sh
sudo bash -ic "$(wget -q -O - https://get.sclbl.net)"
```

:::note
インストール中に、JetPack 5サポートを有効にするかどうかを尋ねるプロンプトに対して「y」を入力する必要があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/2.jpg
" style={{width:800, height:'auto'}}/></div>

**ステップ2:** WebブラウザでJetsonデバイスのIPアドレスに続けて**:8081**を入力するか、以下のようにコマンドラインに表示されるURLを入力してください

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/4.jpg
" style={{width:800, height:'auto'}}/></div>

## Scailableアカウントの登録

**ステップ1:** Scailable AI Managerが表示されたら、デバイスに名前を付けてデバイスを登録し、**Register**ボタンをクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/1.jpg
" style={{width:1000, height:'auto'}}/></div>

**ステップ3:** 以前に作成したデバイス名を確認し、**Register**をクリックして**Return to device**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/7.jpg
" style={{width:650, height:'auto'}}/></div>

すべてが正常に進んだ場合、以下のように**Status**タブの下ですべてのステータスチェックが成功していることが確認できます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/8.jpg
" style={{width:850, height:'auto'}}/></div>

## AIアプリケーションの実行

Scailableには、試すことができる多くの異なるAIモデルが事前に読み込まれています。ただし、独自のAIモデルを使用したい場合は、それをインポートすることもできます。

**ステップ1:** **Model**タブの下の**First Model**セクション内で、**Assign Model**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/9.jpg
" style={{width:750, height:'auto'}}/></div>

**ステップ2:** ここで、**add a model**をクリックして独自のモデルを追加するか、事前構築されたモデルを使用できます。ここでは**Scailable Models**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/10.jpg
" style={{width:900, height:'auto'}}/></div>

**ステップ3:** 例として、**People counter within a region**モデルを選択します。**Use this model**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/12.png
" style={{width:800, height:'auto'}}/></div>

これで、モデルが選択されたことが確認できます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/13.png
" style={{width:750, height:'auto'}}/></div>

**ステップ4:** **Input**タブの下で、Input driverに**Video driver**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/14.png
" style={{width:800, height:'auto'}}/></div>

ここでは、ビデオストリーム、画像、またはScailableに事前読み込まれた例の画像/ビデオのいずれかを選択できます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/16.png
" style={{width:800, height:'auto'}}/></div>

**ステップ5:** 例として、Scailableに付属する事前読み込まれたビデオソースである**faces**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/15.jpg
" style={{width:800, height:'auto'}}/></div>

**ステップ6:** **output**タブの下で、設定をデフォルトのままにしておきます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/17.png
" style={{width:800, height:'auto'}}/></div>

**ステップ7:** **Options**タブの下で、設定をデフォルトのままにしておきます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/18.png
" style={{width:800, height:'auto'}}/></div>

**ステップ7:** **Test**タブの下で、**Test configuration**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/19.png
" style={{width:800, height:'auto'}}/></div>

成功した場合、以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/20.png
" style={{width:800, height:'auto'}}/></div>

**ステップ8:** **Run**タブの下で、**Run Model**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/21.png
" style={{width:800, height:'auto'}}/></div>

正常に実行されている場合、以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/22.png
" style={{width:800, height:'auto'}}/></div>

**ステップ9:** **View live visualization**をクリックして、推論結果をローカルでプレビューします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/23.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/25.png
" style={{width:800, height:'auto'}}/></div>

**ステップ10:** **View output in cloud**をクリックして、結果をCSVまたはJSON形式でダウンロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/26.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/27.png
" style={{width:800, height:'auto'}}/></div>

## AIモデルの大規模デプロイ

Scailableを使用すると、単一のモデルを複数のデバイスに簡単に大規模デプロイできます

**ステップ1:** [このウェブページ](https://admin.sclbl.net/login)にアクセスし、Scailableアカウントにログインすると、以下のようなダッシュボードが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/32.png
" style={{width:800, height:'auto'}}/></div>

**ステップ2:** **DEVICES**をクリックすると、Scailableアカウントに接続されているすべてのデバイスが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/28.png
" style={{width:750, height:'auto'}}/></div>

**ステップ3:** チェックボックスをクリックしてすべてのデバイスを選択し、デバイスグループの名前を入力して**Save new groups**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/29.png
" style={{width:750, height:'auto'}}/></div>

**ステップ4:** **Assign a model to all devices in group**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/30.png
" style={{width:750, height:'auto'}}/></div>

**ステップ5:** 以前と同様にモデルを選択すると、モデルがグループ内のすべてのデバイスにリモートでデプロイされます

モデルのリモートデプロイが正常に完了すると、以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/31.jpg
" style={{width:600, height:'auto'}}/></div>

## さらに詳しく学ぶ

Scailableは非常に詳細で包括的なドキュメントを提供しています。[こちら](https://docs.scailable.net)で確認することを強くお勧めします。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>