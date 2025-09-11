---
description: NVIDIA Jetson デバイスで Cochl.Sense を使用して AI モデルをデプロイする
title: Cochl.Sense のはじめ方
tags:
  - AI モデルデプロイ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Cochl.Sense-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイスでの Cochl.Sense のはじめ方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif" style={{width:700, height:'auto'}}/></div>

このチュートリアルでは、Cochl.Sense を使用して NVIDIA Jetson ボード上で動作する音声認識システムを構築します。[Cochl.Sense](https://www.cochl.ai) は、NVIDIA® Jetson デバイスなどのエッジデバイス上でディープラーニングアプリケーションをデプロイするための Machine Listening 開発プラットフォームです。

Machine Listening（機械聴覚）、別名オーディオアナリティクスまたは音声認識は、人工知能と機械学習を使用してオーディオデータを分析し理解する急成長中の分野です。音楽、動物、車両、機械、都市の騒音、人間の音声などの音を自動的に分析し理解することを目的としています。Cochl.Sense は、銃声、犬の鳴き声、サイレン、赤ちゃんの泣き声など、37 種類のターゲット音を含む事前学習済みの Machine Listening モデルを備えています。

大量のデータでモデルをトレーニングし、Machine Listening アプリケーションをゼロから開発するには、オーディオ信号処理とディープラーニングに関する深い知識が必要です。Cochl.Sense は Machine Listening を開発者や企業にとって簡単にアクセス可能にし、数行のコードで強力なパフォーマンスを持つ Machine Listening アプリケーションを構築および実装できるようにしました。

## Cochl.Sense の主な特徴

- IEEE によって公式に測定された 94% の F-1 スコア
- 実世界でテストおよび検証された事前学習済みモデル
- マルチラベリング（複数の音を同時に検出）対応
- [30 種類以上のターゲット音に対応](https://docs.cochl.ai/sense/tags)

## トライアルライセンスの取得

Cochl.Sense SDK は完全な製品機能を備えているため、アクセスは審査後に許可されます。SDK にアクセスするには、この短い [Google フォーム](https://forms.gle/Pa2iYWirLJVNS7Pp6) に記入し、SDK の使用計画を教えてください。Cochl は 2 週間のトライアルライセンスをメールで送信します。

すぐに始めたい場合は、同じ機能を備えたクラウド上で動作する Cloud API を無料で利用することもできます。[こちらをクリック](https://www.cochl.ai/product) して詳細を確認してください！

## 対応ハードウェア

- NVIDIA Jetson

    - [Seeed による NVIDIA SoM を搭載した完全システム](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
    - NVIDIA の公式開発キット

- Raspberry Pi 3+ またはそれ以上
- Google Coral Board

Cochl.Sense は複数のハードウェアプラットフォームに対応していますが、このウィキでは NVIDIA Jetson プラットフォームでの Cochl.Sense の使用に焦点を当てます。

## 前提条件

このチュートリアルを進めるには、以下が必要です：

- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) または JetPack 4.6 以上を実行しているその他の NVIDIA Jetson デバイス
- 16 ビット深度のオーディオ、22,050 Hz のサンプリングレートをサポートする USB マイク

## Jetson に JetPack をフラッシュする

まず、Jetson デバイスに CUDA、TensorRT、cuDNN などの SDK コンポーネントを含む [JetPack](https://developer.nvidia.com/embedded/jetpack) システムがフラッシュされていることを確認する必要があります。JetPack をデバイスにフラッシュするには、NVIDIA SDK Manager またはコマンドラインを使用できます。

Seeed の Jetson ベースのデバイスのフラッシュガイドについては、以下のリンクを参照してください：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack)
- [A203 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A203_Flash_System)
- [A205 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 キット](https://wiki.seeedstudio.com/ja/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 キット](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## はじめに

最初の機械リスニングプロジェクトを展開するのに数分しかかかりません！この Wiki の終わりまでに、Jetson デバイスに接続されたマイクからのライブオーディオストリームで音を検出できるようになります。このチュートリアルでは以下を学びます：

1. Cochl ダッシュボードを使用してプロジェクトを作成する
2. Cochl.Sense SDK とサンプルアプリケーションのソースコードをダウンロードする
3. サンプルアプリケーションを認証する
4. 音検出アプリケーションを実行する

### 1. Cochl Dashboard を使用してプロジェクトを作成する

**ステップ 1:** Jetson からウェブブラウザを開きます。新しいプロジェクトを作成するには、[無料の Cochl アカウントに登録](https://dashboard.cochl.ai)し、Dashboard アカウントにサインインします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/2.png" /></div>

**ステップ 2:** サインイン後、**+ New project** ボタンをクリックします。プロジェクトに名前を付け、製品タイプから **Edge SDK** を選択し、検出したいターゲット音を追加するために **select tags** を選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/3.png" /></div>

### 2. SDK とサンプルアプリケーションのソースコードをダウンロードする

**ステップ 1:** 作成したプロジェクトをクリックし、**Cochl.Sense SDK** をクリックして外部リンクに移動し、[Cochl Docs](https://docs.cochl.ai) で SDK ファイルをダウンロードします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/4.png" /></div>

**ステップ 2:** **Cochl Docs** ページで、左側のタブから **Resources** をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/5.png" /></div>

**ステップ 3:** 下にスクロールして、C++ SDK と Python SDK の **Download Link** を見つけます。このチュートリアルでは、Jetson プラットフォームを使用しているため、`AArch64` SDK をダウンロードします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/6.png" /></div>

**ステップ 4:** 新しいタブを開き、[このリポジトリ](https://github.com/cochlearai/sense-sdk-cpp-tutorials) に移動して Sense-sdk C++ チュートリアルをダウンロードし、ソースコードを取得します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/7.png" /></div>

**ステップ 5:** ダウンロードしたファイルを解凍します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/8.png" /></div>

**ステップ 6:** `sense` フォルダを `sense-sdk-cpp-tutorials-main` フォルダに移動します。以下は `sense-sdk-cpp-tutorials-main` フォルダの構造です。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/9.png" /></div>

### 3. サンプルアプリケーションを認証する

**ステップ 1:** `example` フォルダに移動し、`sense-stream.cc` ファイルを見つけて任意のテキストエディタで開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/10.png" /></div>

**ステップ 2:** ブラウザに戻り、プロジェクトページを開き、**Settings** ページに移動して `Project key` をコピーします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/11.png" /></div>

**ステップ 3:** テキストエディタで開いた `sense-stream.cc` ファイルに戻ります。コピーした `Project Key` を `"Your project key"` の行に貼り付けてファイルを**保存**します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/12.png" /></div>

### 4. 音検出アプリケーションを実行する

**ステップ 1:** Jetson からターミナルを開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/13.png" /></div>

**ステップ 2:** 以下のコマンドを実行して依存関係をインストールします。

```sh
sudo apt update
sudo apt install libpulse-dev pulseaudio pulseaudio-utilss
```

**ステップ 3:** ソースコードフォルダに移動し、以下のコマンドでアプリケーションをビルドします。

```sh
cd Downloads/sense-sdk-cpp-tutorials-main
g++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib
```

**ステップ 4:** アプリケーションを実行し、自分で音を出したり、YouTube などの他のソースから音を再生してみてください。リアルタイムで音検出結果を確認できます。アプリケーションを実行する前に、マイクが Jetson デバイスに接続されていることを確認してください。

```sh
./sense-stream 
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/14.png" /></div>

:::note
スピーカーから再生する場合、銃声検出はうまく機能しない可能性があります。モデルは実際の銃声に最適化されています。
:::

**ステップ 5:** アプリケーションを停止するには、**Ctrl+C** を押します。

**ステップ 6:** Web で検出結果を確認したい場合は、**Dashboard** に移動し、Analytics タブをクリックして **Filter** ボタンの横で時間範囲を設定します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/15.png" /></div>

おめでとうございます！リアルタイムの機械聴覚アプリケーションを無事にデプロイできました。さらに進んで、カスタムのスマートシティやスマートホームアプリケーションを構築したり、他のアプリケーションと統合したりすることができます。他の機械聴覚技術に興味がある場合は、[こちらのページ](https://labs.cochl.ai)をご覧ください。音楽識別、音楽コンテンツ分析、話者認証など、Cochlの他のソリューションを試すことができます。

## リソース

- [Cochl ドキュメント](https://docs.cochl.ai)
- [Cochl ウェブサイト](https://www.cochl.ai)
- [ウェブベースのデモ](https://labs.cochl.ai)

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>