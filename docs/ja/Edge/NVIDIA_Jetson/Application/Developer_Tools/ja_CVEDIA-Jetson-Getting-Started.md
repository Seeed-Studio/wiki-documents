---
description: NVIDIA Jetson デバイスで CVEDIA-RT を使用して AI モデルをデプロイする
title: CVEDIA-RT の使い方
tags:
  - AI モデル デプロイ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/CVEDIA-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイスで CVEDIA-RT を始める

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt) は、意思決定支援システムを構築するための堅固な基盤を提供するモジュール式でクロスプラットフォーム対応の AI 推論エンジンです。開発者や統合者を念頭に置いて設計されており、高レベルおよび低レベルのインターフェースの両方を提供します。

この Wiki では、NVIDIA Jetson プラットフォームに CVEDIA-RT を簡単にインストールし、エキサイティングなアプリケーションを構築する方法を説明します。

## 対応ハードウェア

CVEDIA-RT は以下のプラットフォームでサポートされています：

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

ただし、この Wiki では NVIDIA Jetson プラットフォームへの CVEDIA-RT のデプロイ方法にのみ焦点を当てます。

## 前提条件

- NVIDIA Jetson デバイス（NVIDIA JetPack がインストールされ、すべての SDK コンポーネントがインストールされており、インターネットに接続されていること）

  - この Wiki は、[JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51) を実行している [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) でテストされています。
- インターネットに接続された Windows、Linux、または Mac を実行するホスト PC

## NVIDIA Jetson 用 CVEDIA-RT インストーラーのダウンロード

**ステップ 1:** [このページ](https://rt.cvedia.com/) にアクセスし、**Sign in** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**ステップ 2:** 新しい CVEDIA アカウントを作成するか、Google アカウントでサインインします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**ステップ 3:** **NVIDIA Jetson** の下にある **Download** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**ステップ 4:** **Docker(Recommended)** をクリックして、CVEDIA-RT インストーラーを含む tar.gz ファイルをダウンロードします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## NVIDIA Jetson に CVEDIA-RT をインストール

**ステップ 1:** ダウンロードしたファイルを Jetson デバイス上の新しいフォルダに移動し、以下のコマンドを実行して解凍します。

```sh
tar -xzvf <filename.tar.gz>
```

**ステップ 2:** Jetson デバイス上で解凍したフォルダ内に移動し、インストーラースクリプトを実行します。

```sh
sudo ./install.sh
```

インストーラースクリプトのプロンプトに従い、必要に応じて応答してください。

## NVIDIA Jetson で CVEDIA-RT を実行

アプリケーションを実行します。

```sh
./run.sh
```

すると、以下のように CVEDIA-RT アプリケーションが開きます。このアプリケーションには、以下のような多くの異なるアプリケーションがあらかじめ組み込まれています：

- 群衆推定
- ドローン検出
- 転倒検出
- 車線占有
- 車両タイプカウンター
- パッケージ検出 など

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

インターネット接続なしで CVEDIA-RT をローカルで実行したい場合は、以下のように実行します。

```sh
./run.sh -U
```

ただし、特定のアプリケーションを少なくとも一度はインターネット接続で実行し、必要なファイルやモデルをダウンロードする必要があります。

## プリロードされたアプリケーションを探索する

ここでは、初期状態で提供されるいくつかのアプリケーションを探索し、それらをどのように設定できるかを説明します。

**ステップ 1:** **intelligent-transportation-systems** をクリックし、**lane-occupancy** ソリューションの横にある実行ボタンをクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

これにより、モデルファイル、設定ファイル、サンプルビデオファイルなどの必要なファイルがダウンロードされ、デモが開始されます。ここでは、車線に応じて描画されたゾーンが表示され、それぞれのゾーン内に何台の車両が存在するかが示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**ステップ 2:** アプリケーション内で、バウンディングボックスやラベルのオン/オフ、ゾーンの変更、ゾーンの色の変更など、好みに応じて設定を変更します。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**ステップ 3:** **lane-occupancy** の横にある2つのアイコンを使用して、デモを停止または一時停止します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**ステップ 4:** **lane-occupancy** の横にある歯車アイコンをクリックし、**Edit Source** をクリックして、好みに応じてビデオストリームを変更します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

ここでは、複数のオプションから選択できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**ステップ 5:** 希望するビデオソースを選択したら、**Save Instance** をクリックして、選択したビデオソースでアプリケーションを実行します。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**注意:** アプリケーションを停止し、再度実行することで、変更が反映されることを確認してください。

**ステップ 6:** 同様に、**crowd-estimation** の下にある **people_walking** ソリューションに移動し、再生ボタンをクリックしてソリューションを実行します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

ここでも、前述のソリューションと同様に、設定をさらに構成したり、ビデオストリームを変更したりできます。

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## 詳細を学ぶ

CVEDIA-RT は非常に詳細で包括的なドキュメントを提供しています。ぜひ [こちら](http://docs.cvedia.com) をご確認ください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>