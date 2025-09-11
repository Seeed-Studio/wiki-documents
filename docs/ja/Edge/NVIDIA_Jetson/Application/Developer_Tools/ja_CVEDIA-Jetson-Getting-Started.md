---
description: NVIDIA Jetsonデバイス上でCVEDIA-RTを使用してAIモデルをデプロイする
title: CVEDIA-RTを始める
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/CVEDIA-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# NVIDIA® JetsonデバイスでCVEDIA-RTを始める

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt)は、意思決定支援システムを構築するための堅固な基盤を提供するモジュラー型のクロスプラットフォームAI推論エンジンです。開発者とインテグレーターを念頭に置いて一から設計されており、高レベルと低レベルの両方のインターフェースを提供します。

このwikiでは、NVIDIA JetsonプラットフォームにCVEDIA-RTを簡単にインストールし、エキサイティングなアプリケーションの構築を開始する方法を説明します。

## サポートされているハードウェア

CVEDIA-RTは以下のプラットフォームでサポートされています：

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

ただし、このwikiではNVIDIA JetsonプラットフォームにCVEDIA-RTをデプロイする方法のみに焦点を当てます。

## 前提条件

- すべてのSDKコンポーネントがインストールされ、インターネットに接続されたNVIDIA JetPackを実行するNVIDIA Jetsonデバイス

  - このwikiは[JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)を実行する[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)でテストしました
- Windows、Linux、またはMacを搭載し、インターネットに接続されたホストPC
 
## NVIDIA Jetson用CVEDIA-RTインストーラーのダウンロード

**ステップ1：** [このページ](https://rt.cvedia.com/)にアクセスし、**Sign in**をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**ステップ2：** 新しいCVEDIAアカウントにサインアップするか、Googleアカウントでサインインします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**ステップ3：** **NVIDIA Jetson**の下の**Download**をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**ステップ4：** **Docker(Recommended)**をクリックして、CVEDIA-RTインストーラーを含むtar.gzファイルをダウンロードします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## NVIDIA JetsonにCVEDIA-RTをインストール

**ステップ1：** 先ほどダウンロードしたファイルをJetsonデバイス上の新しいフォルダに移動し、以下を実行して展開します

```sh
tar -xzvf <filename.tar.gz>
```

**ステップ2:** Jetsonデバイス上の展開されたフォルダ内で、インストーラースクリプトを実行します

```sh
sudo ./install.sh
```

インストーラースクリプトのプロンプトに必要に応じて応答してください

## NVIDIA Jetson で CVEDIA-RT を実行する

アプリケーションを実行してください

```sh
./run.sh
```

CVEDIA-RTアプリケーションが以下のように開かれ、すでに多くの異なるアプリケーションがすぐに使える状態でプリロードされています：

- 群衆推定
- ドローン検出
- 転倒検出
- 車線占有率
- 車両タイプカウンター
- パッケージ検出など！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

インターネット接続なしでCVEDIA-RTをローカルで実行したい場合は、以下のように実行してください

```sh
./run.sh -U
```

ただし、必要なファイルとモデルがダウンロードされるように、インターネット接続で特定のアプリケーションを少なくとも一度実行する必要があります

## プリロードされたアプリケーションを探索する

ここでは、すぐに使用できるいくつかのアプリケーションと、それらの設定方法について説明します

**ステップ 1:** **intelligent-transportation-systems** をクリックし、**lane-occupancy** ソリューションの横にある実行ボタンをクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

これで、モデルファイル、設定ファイル、サンプル動画ファイルなどの必要なファイルがダウンロードされ、デモが開始されます。ここでは、レーンに応じてゾーンが描画され、各ゾーンがその特定のゾーン内にある車両数を示しているのが確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**ステップ 2:** バウンディングボックスとラベルのON/OFF切り替え、ゾーンの変更、ゾーンの色の変更など、アプリケーション内で設定をお好みに応じて変更します

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**ステップ 3:** **lane-occupancy** の横にある2つのアイコンを使用してデモを停止または一時停止します

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**ステップ 4:** **lane-occupancy** の横にある歯車アイコンをクリックし、**Edit Source** をクリックしてお好みに応じて動画ストリームを変更します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

ここでは複数のオプションから選択できます

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**ステップ 5:** 希望する動画ソースを選択したら、**Save Instance** をクリックして、選択した動画ソースでアプリケーションを実行できます

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**注意:** 変更を有効にするために、アプリケーションを停止してから再度実行してください

**ステップ 6:** 同様に、**crowd-estimation** の下にある **people_walking** などの別のソリューションに移動し、再生ボタンをクリックしてソリューションを実行できます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

ここでも、前述のソリューションと同様に、さらなる設定の構成や動画ストリームの変更が可能です

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## さらに詳しく学ぶ

CVEDIA-RTは非常に詳細で包括的なドキュメントを提供しています。そのため、[こちら](http://docs.cvedia.com)で確認することを強くお勧めします。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>