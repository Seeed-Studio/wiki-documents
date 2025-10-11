---
description: NVIDIA Jetson デバイスで Cochl.Sense を使用した AI モデルのデプロイ
title: Cochl.Sense の始め方
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Cochl.Sense-Jetson-Getting-Started
last_update:
  date: 03/27/2023
  author: Lakshantha
---

# NVIDIA® Jetson デバイスでの Cochl.Sense の始め方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif" style={{width:700, height:'auto'}}/></div>

このチュートリアルでは、Cochl.Sense を使用して NVIDIA Jetson ボード上で動作する音声認識システムを構築します。[Cochl.Sense](https://www.cochl.ai) は、NVIDIA® Jetson デバイスなどのエッジデバイスにディープラーニングアプリケーションをデプロイするための Machine Listening 開発プラットフォームです。

Machine Listening（音響解析または音声認識とも呼ばれる）は、人工知能と機械学習を使用してオーディオデータを分析・理解する急速に成長している分野です。音楽、動物、車両、機械、都市騒音、そして人間の音声からの音の自動分析と理解を目指しています。Cochl.Sense は、銃声、犬の鳴き声、サイレン、赤ちゃんの泣き声など、37種類の異なるターゲット音を含む事前訓練済み Machine Listening モデルで構築されています。

大量のデータでモデルを訓練し、Machine Listening アプリケーションをゼロから開発するには、音響信号処理とディープラーニングの深い知識が必要です。Cochl.Sense は Machine Listening を開発者や企業にとって簡単にアクセス可能にしており、数行のコードで強力なパフォーマンスを持つ Machine Listening アプリケーションを構築・実装できます。

## Cochl.Sense の主要機能

- IEEE により公式に測定された 94% の F-1 スコア
- 実世界でテスト・検証済みの事前訓練モデル
- マルチラベリング（複数の音を同時に検出）をサポート
- [30種類以上のターゲット音が利用可能](https://docs.cochl.ai/sense/tags)

## 試用ライセンスの取得

Cochl.Sense SDK は完全な製品機能を備えているため、審査後にアクセスが許可されます。SDK にアクセスするには、この短い [Google フォーム](https://forms.gle/Pa2iYWirLJVNS7Pp6) を送信し、SDK をどのように使用する予定かをお知らせください。Cochl から 2 週間の試用ライセンスがメールで送信されます。

クイックスタートをお望みの場合は、同じ機能を持ちながらクラウド上で動作する Cloud API から無料で始めることもできます。[こちらをクリック](https://www.cochl.ai/product) して探索してください！

## サポートされているハードウェア

- NVIDIA Jetson

    - [Seeed による NVIDIA SoM を搭載した完全システム](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
    - NVIDIA による公式開発キット

- Raspberry Pi 3+ 以上
- Google Coral Board

Cochl.Sense は複数のハードウェアプラットフォームでサポートされていますが、この wiki では NVIDIA Jetson プラットフォームでの Cochl.Sense の使用にのみ焦点を当てます。

## 前提条件

このチュートリアルには以下が必要です：

- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) または JetPack 4.6 以上を実行している他の NVIDIA Jetson デバイス
- 16 ビット深度オーディオ、22,050 Hz のサンプリングレートをサポートする USB マイクロフォン

## Flash JetPack を Jetson に

次に、Jetsonデバイスに[JetPack](https://developer.nvidia.com/embedded/jetpack)システムがフラッシュされていることを確認する必要があります。これにはCUDA、TensorRT、cuDNNなどのSDKコンポーネントが含まれています。NVIDIA SDK Managerまたはコマンドラインを使用してJetPackをデバイスにフラッシュできます。

SeeedのJetson搭載デバイスのフラッシュガイドについては、以下のリンクを参照してください：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/ja/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/ja/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/ja/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## はじめに

初めての機械学習音響プロジェクトのデプロイは数分で完了します！このwikiの最後には、Jetsonデバイスに接続されたマイクからのライブオーディオストリームで音を検出できるようになります。このチュートリアルでは、以下の方法を学習します：

1. Cochlダッシュボードを使用してプロジェクトを作成する
2. Cochl.Sense SDKとサンプルアプリケーションのソースコードをダウンロードする
3. サンプルアプリケーションを認証する
4. 音検出アプリケーションを実行する

### 1. Cochl Dashboardを使用してプロジェクトを作成する

**ステップ1：** JetsonからWebブラウザを開きます。新しいプロジェクトを作成するために、無料のCochlアカウントに[サインアップ](https://dashboard.cochl.ai)し、Dashboardアカウントにサインインします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/2.png" /></div>

**ステップ2：** サインイン後、**+ New project**ボタンをクリックします。プロジェクトに名前を付け、Product typeから**Edge SDK**を選択し、検出したい対象音を追加するために**select tags**を選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/3.png" /></div>

### 2. SDKとサンプルアプリケーションのソースコードをダウンロードする

**ステップ1：** 作成したプロジェクトをクリックし、**Cochl.Sense SDK**をクリックして外部リンクにアクセスし、[Cochl Docs](https://docs.cochl.ai)でSDKファイルをダウンロードします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/4.png" /></div>

**ステップ2：** **Cochl Docs**ページで、左側のタブの**Resources**をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/5.png" /></div>

**ステップ3：** 下にスクロールして、C++ SDKとPython SDKの**Download Link**を見つけます。このチュートリアルでは、Jetsonプラットフォームを使用しているため、`AArch64` SDKをダウンロードします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/6.png" /></div>

**ステップ4：** 新しいタブを開き、Sense-sdk C++チュートリアル用の[このリポジトリ](https://github.com/cochlearai/sense-sdk-cpp-tutorials)にアクセスし、ソースコードをダウンロードします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/7.png" /></div>

**ステップ5：** ダウンロードしたファイルを展開します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/8.png" /></div>

**ステップ6：** senseフォルダを`sense-sdk-cpp-tutorials-main`フォルダに移動します。以下が`sense-sdk-cpp-tutorials-main`フォルダの外観です。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/9.png" /></div>

### 3. サンプルアプリケーションを認証する

**ステップ1：** `example`フォルダに移動し、`sense-stream.cc`ファイルを見つけて、任意のテキストエディタで開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/10.png" /></div>

**ステップ2：** ブラウザに戻り、プロジェクトページを開き、**Settings**ページに移動して、`Project key`をコピーします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/11.png" /></div>

**ステップ3：** テキストエディタで開いた`sense-stream.cc`ファイルに移動します。コピーした`Project Key`を貼り付けて`"Your project key"`行を置き換え、ファイルを**保存**します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/12.png" /></div>

### 4. 音検出アプリケーションを実行する

**ステップ1：** JetsonからTerminalを開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/13.png" /></div>

**ステップ2：** 以下のコマンドを実行して依存関係をインストールします

```sh
sudo apt update
sudo apt install libpulse-dev pulseaudio pulseaudio-utilss
```

**ステップ 3:** ソースコードフォルダに移動し、以下のコマンドでアプリケーションをビルドします。

```sh
cd Downloads/sense-sdk-cpp-tutorials-main
g++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib
```

**ステップ4:** アプリケーションを実行し、自分で音を出したり、YouTubeなどの他のソースから音を再生したりしてみてください。リアルタイムで音検出結果を確認できます。アプリケーションを実行する前に、マイクがJetsonデバイスに接続されていることを確認してください。 

```sh
./sense-stream 
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/14.png" /></div>

:::note
スピーカーから再生した場合、銃声検出はうまく検出できないことにご注意ください。モデルは実際の銃声で最適に動作するように訓練されているためです。
:::

**ステップ 5:** アプリケーションを停止するには、**Ctrl+C** を押してください。

**ステップ 6:** ウェブから検出結果を表示したい場合は、**Dashboard** に移動し、Analytics タブをクリックして、**Filter** ボタンの横で時間範囲を設定してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/15.png" /></div>

おめでとうございます！リアルタイム Machine Listening アプリケーションの展開に成功しました。さらに進んで、カスタムのスマートシティやスマートホームアプリケーションを構築したり、他のアプリケーションと統合したりできます。他の Machine Listening 技術に興味がある場合は、[このページ](https://labs.cochl.ai)にアクセスして、音楽識別、音楽コンテンツ分析、話者認証などの他の Cochl ソリューションを試すことができます。

## リソース

- [Cochl Docs](https://docs.cochl.ai)
- [Cochl Website](https://www.cochl.ai)
- [Web-based Demos](https://labs.cochl.ai)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>