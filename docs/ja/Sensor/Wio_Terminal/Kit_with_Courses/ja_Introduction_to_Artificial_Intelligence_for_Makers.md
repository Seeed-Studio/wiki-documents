---
description: メーカー向け人工知能の入門
title: メーカー向け人工知能の入門
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Introduction_to_Artificial_Intelligence_for_Makers
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


**単語数:** 2000

**読了時間:** 30分

**対象読者:**

- コンピュータサイエンスの事前知識がないメーカー向けの人工知能（AI）入門ガイド。

**目次**

この記事のセクションの概要。

- 1.「人工知能（AI）」とは何か？
- 2.人工知能（AI）の興味深い応用例
- 3.人工知能（AI）製品の一覧
- 4.おすすめの書籍、コース、ビデオチュートリアル

## 概要

AIは現在非常に注目されているトピックであり、関連するAI製品は私たちの[オンラインショップ](https://www.seeedstudio.com/)でよく売れています。しかし、私たちの顧客の中には、伝統的なハードウェア開発者で、コンピュータサイエンスの確固たる基礎を持っていない方もいます。本記事の目的は、メーカーがディープラーニングの旅を始めるための興味を引き出し、一般的な理解を提供することです。この記事では、一般的なユースケースや潜在的な落とし穴を指摘します。また、記事の最後には、このトピックをさらに学ぶためのコースや書籍をいくつかおすすめします。

## 1. 「人工知能（AI）」とは何か？

AIは今日、至る所で見られます。「データマイニング」、「人工知能」、「人工ニューラルネットワーク」…混乱してしまいますよね？企業やコンピュータ科学者たちは毎年何千もの新しい用語を作り出しますが、それが実際に何を意味するのかを説明することはほとんどありません。

Wikipediaによると：
 >人工知能（AI）は、機械によって示される知能であり、人間や動物が示す自然の知能とは対照的なものです。

しかし、厳密な学術用語として使用されない限り、一般的にはこの用語を「人工ニューラルネットワーク」を指すために使用します。近年、この技術の爆発的な発展により、数多くのコンピューティング製品や商業的な宣伝が行われ、この結果、「AI」という用語自体の意味が徐々に置き換えられてきました。そのため、現在企業が「AI製品」と言うとき、それは一般的にニューラルネットワークの操作を高速化するために使用される製品を指します。

いくつかの広告や「チュートリアル」では、以下のような画像を見せてきます。これは私たちの脳内のニューロンを思い起こさせます。しかし実際には、ニューロンは単なる優雅な比喩に過ぎません。コンピュータサイエンスにおける「ニューラルネットワーク」という用語は完全に数学的な問題です。そして、アルゴリズムを理解していない場合、この画像は**何の意味も持ちません。**

![](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1554974523222.png)

したがって、ディープラーニングに取り組みたい場合、最初に行うべきことは、この用語の背後にある数学的原理を理解することです。今日はアルゴリズムの詳細を説明するつもりはありませんが、知っておくべきことは、ニューラルネットワークモデルは高校の代数クラスで学んだ単純な問題の遠い親戚であるということです。この記事の最後の部分では、初心者向けのコースや書籍をいくつかおすすめします。

ディープラーニングは若い実験的な学問であり、日々更新されています。これを習得したい場合、最も重要なことは、トピックや実際の問題を選び、それに関連する研究論文をできるだけ多く読むことです。

## 2. 人工知能 (AI) の興味深い応用例

### コンピュータビジョン

人間は数秒間見つめるだけでどんな物体でも識別できますが、これは非常に簡単なことです。一方で、機械にとって物体の識別は非常に複雑な課題でした。しかし、Hinton と Alex Krizhevsky が 2012 年の ImageNet コンペティションで優勝して以来、この状況は変わりました。

その後、ニューラルネットワークがビジョン分野、特に分類とセグメンテーションの問題を支配するようになり、畳み込みニューラルネットワーク (Convolutional Neural Network) は近年多くのコンペティションで勝利を収めた最も注目すべきアプローチの一つとなりました。画像認識において優れた成果を上げています。
Nvidia は Jetson Nano 用に多くの [Vision Demos](https://github.com/dusty-nv/jetson-inference) を構築しており、分類と顔検出のための 2 つのデモをテストしました：
<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/U0rNdI9pl_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### アート

**[Google Magenta](https://magenta.tensorflow.org/)** は、創造的プロセスにおけるツールとしての機械学習の役割を探求するオープンソースの研究プロジェクトです。このプロジェクトグループは、AI を活用した Doodle [Celebrating-Johann-Sebastian-Bach](https://www.google.com/doodles/celebrating-johann-sebastian-bach) によって一般に知られています。
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056026898.png)

以下は、いくつかのインタラクションデモです：

[Magic Sketchpad](https://magic-sketchpad.glitch.me/) あなたが落書きを描き始めるたびに、Sketch RNN がそれを完成させ、選択したカテゴリに一致させようとします。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059163496.png)

[Piano Genie](http://piano-genie.glitch.me/) 機械学習を使ってピアノの名手になりきって楽しんでみましょう。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059135929.png)

[Latent Loops](https://goo.gl/magenta/latent-loops) 異なるスケールに調整されたマトリックス上でメロディをスケッチし、生成されたメロディックループのパレットを探索し、それらを使用して長い作曲をシーケンス化します。Google の Pie Shop によって構築されました。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059104497.png)

### IoT とセンサー

**スマート駐車** 密集した交通環境で車両を駐車することは、空きスペースを探すために余分な運転時間が必要となり、渋滞や環境汚染を引き起こすことがあります。空き駐車スペースへの案内情報の欠如は、非効率的な駐車行動の一因です。スマート駐車センサーと技術は、運転者を空き駐車スペースに案内することで駐車効率を向上させます。現在、オープン駐車場ではそのようなセンサーや技術は使用されていません。そのため、まだやるべきことがあります。
[Deep Learning for Decentralized Parking Lot Occupancy](https://github.com/fabiocarrara/deep-parking)

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555055835602.png)

[**LSTMs for Human Activity Recognition**](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition) 人間の活動認識 (HAR) は、ユビキタスコンピューティングや人間とコンピュータの相互作用における重要な研究分野です。モバイルまたはウェアラブルセンサーを使用して活動を認識するために、適切なセンサーを使用してデータを収集し、セグメント化し、必要な特徴を抽出し、識別モデル (SVM、HMM、MLP など) を使用して活動を分類します。このプロジェクトでは、開発者が LSTM を使用し、最終的な精度は 91% に達し、最大値は 93.25% に達しました。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555057001717.png)

### 自然言語処理 (NLP)

知識の時代において、自然言語処理 (NLP) は幅広い利用によってその需要を示しています。以前は NLP は静的データを扱っていましたが、現在ではコーパス、辞書データベース、パターン認識を用いて大幅に進化しています。ディープラーニング (DL) 手法を考慮すると、人工ニューラルネットワーク (NN) が非線形プロセスを認識し、NLP ツールはますます正確で効率的になり、革新をもたらしています。
[NLP-progress](https://github.com/sebastianruder/NLP-progress) このプロジェクトは、自然言語処理 (NLP) の進捗を追跡し、最も一般的な NLP タスクとそれに対応するデータセットにおける最先端 (SOTA) の概要を提供することを目的としています。

#### 医療

人工知能は医療の世界を変革しています。AI は医師がより迅速かつ正確な診断を行うのを助けることができます。また、病気のリスクを予測し、予防するための時間を提供します。さらに、遺伝的変異が病気にどのように影響するかを研究者が理解するのを助けます。医療画像の分析能力を向上させ、個別化医療の未来を進展させています。
現在、これらのアルゴリズムを使用して病気診断システムのエラーを診断する医療画像アプリケーションの強化に向けた大規模な取り組みが行われています。これにより、非常に曖昧な医療処置が発生する可能性があります。機械学習およびディープラーニングアルゴリズムは、病気の初期症状を予測するための医療画像において重要な方法です。特に畳み込みネットワークを用いたディープラーニング技術は、医療画像を調査するための特定の方法論として急速に発展しています。これらのアルゴリズムを使用して病気を調査し、自動意思決定を行うためのスイートに関する考慮が進んでいます。

[**Deep Learning Toolkit (DLTK) for Medical Imaging**](https://github.com/DLTK/DLTK)  
DLTK は TensorFlow 上に構築された Python 製のニューラルネットワークツールキットです。低い参入障壁で迅速なプロトタイピングを可能にし、画像分析アプリケーション、特に医療画像における再現性を確保するために開発されました。その目標は、最先端の方法とモデルをコミュニティに提供し、このエキサイティングな分野での研究を加速させることです。
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png)

#### その他

[**LotteryPredict**](https://github.com/chengstone/LotteryPredict)  
このデモは LSTM と TensorFlow を使用して宝くじを予測します。

## 3. 人工知能（AI）製品の一覧

AI は現在、消費者向けから企業向けアプリケーションまで広く普及しています。開発者はこれを組み込みシステムやロボット分野に応用しようと試みていますが、従来の組み込み開発ボードの性能では明らかに不十分です。Intel、Nvidia、Google、Huawei などの多国籍企業は、すでにそれぞれのディープラーニング製品を発表しており、その中でも Jetson Nano は最近最も注目を集めています。これにより、手頃な価格と超低消費電力で、組み込みシステムに中規模のニューラルネットワークを展開することが可能になりました。また、Sipeed や Firefly のような小規模企業も、特定の細分化された分野向けに独自の製品を発表しています。以下にいくつかの例を挙げます。

[**NVIDIA Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-p-2916.html)  
>NVIDIA® Jetson Nano™ 開発者キットは、これまでにないサイズ、消費電力、コストで最新の AI ワークロードを実行するための計算性能を提供します。開発者、学習者、メーカーは、画像分類、物体検出、セグメンテーション、音声処理などのアプリケーション向けに AI フレームワークやモデルを実行できるようになりました。  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050651109.png)

[**Google Coral Dev Board**](https://www.seeedstudio.com/Coral-Dev-Board-p-2900.html)  
>Coral Dev Board は、eMMC、SOC、無線ラジオ、Google の Edge TPU を含む取り外し可能なシステムオンモジュール (SOM) を備えたシングルボードコンピュータです。高速なオンデバイス ML 推論を必要とする IoT デバイスやその他の組み込みシステムに最適です。  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050567750.png)

[**Sipeed MAix Go Suit for RISC-V AI+IoT**](https://www.seeedstudio.com/Sipeed-MAix-GO-Suit-for-RISC-V-AI-IoT-p-2874.html)  
>MAIX は、エッジで AI を実行するために設計された Sipeed の専用モジュールで、これを AIoT と呼びます。小型の物理サイズと低消費電力で高性能を実現し、高精度の AI をエッジで展開することが可能です。また、競争力のある価格により、あらゆる IoT デバイスに組み込むことが可能です。ご覧の通り、Sipeed MAIX は Google Edge TPU に非常に似ていますが、Edge TPU のようなアクセラレータではなく、マスターコントローラーとして機能します。そのため、AP+Edge TPU ソリューションよりも低コストで低消費電力です。  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051060453.png)

[**Intel Movidius MA245X AI Kit Compatible w/ Intel Movidius Stick**](https://www.seeedstudio.com/Intel-Movidius-MA245X-AI-Kit-Compatible-w-Intel-Movidius-Stick-p-3146.html)  
>「Plug and AI」を念頭に置いて設計された Horned Sungem (HS) は、すべての開発者、学生、AI 愛好家が簡単に独自の AI アプリケーションを作成できるようにする、最もシンプルで扱いやすい AI デバイスです。ディープラーニングフレームワークや複雑なライブラリに依存することなく、Horned Sungem を USB ポートに接続し、短いインストールスクリプトを実行するだけで、デバイスが世界を見て理解できるようになります。  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050985486.png)

[**HiKey 970 Development Board**](https://www.seeedstudio.com/HiKey-970-Development-Board.html)  
>Hikey970 は、Kirin970 SOC による 4 x Cortex A73、4 x Cortex A53 を搭載したスーパーエッジ AI コンピューティングプラットフォームです。Hikey970 は 6GB LPDDR4 RAM、64GB UFS ストレージ、ギガビットイーサネット、GPS、PCIE Gen2、CAN を搭載しています。世界初の専用 NPU AI プラットフォームとして、Hikey970 は Huawei HiAI コンピューティングアーキテクチャと、CPU、GPU AI、AI アクセラレーション専用のニューラルプロセッシングユニットをサポートする人気のニューラルネットワークフレームワークを統合しています。また、Huawei の HiAI SDK も付属しています。Hikey 970 は、ディープラーニング、ロボット、自動車、スマートシティの構築におけるほとんどのアプリケーションで使用できます。  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051309338.png)

## 4. 推奨書籍、コース、およびビデオチュートリアル

### 書籍

1. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)  
   世界中で最も親しみやすいニューラルネットワークの教科書の1つで、煩雑な専門用語がなく、完全に無料でオンラインで利用可能です。ただし、この本のコードは少し古くなっているため、C++に慣れている場合は、原理を理解するために使用することをお勧めします。

2. [Deep Learning with Python](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438)  
   この本は、ゼロからディープラーニングを学びたい人や、ディープラーニングの理解を深めたい人向けに書かれています。機械学習エンジニア、ソフトウェア開発者、または大学生であっても、この本から価値を見出すことができるでしょう。

3. [Python For Data Analysis](https://www.cin.ufpe.br/~embat/Python%20for%20Data%20Analysis.pdf)  
   データ分析のための古典的なチュートリアルで、現在でも有用です。

### コース

1. [Creative Applications of Deep Learning with TensorFlow](https://link.zhihu.com/?target=https://www.class-central.com/mooc/6679/kadenze-creative-applications-of-deep-learning-with-tensorflow)  
   このコースでは、ディープラーニングの基礎を紹介します。ディープラーニングは、人工知能アルゴリズムを構築するための最先端のアプローチです。

2. [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](https://link.zhihu.com/?target=http://cs231n.stanford.edu/)  
   このコースは、ディープラーニングアーキテクチャの詳細を深く掘り下げ、特に画像分類のためのエンドツーエンドモデルの学習に焦点を当てています。

3. [UC Berkeley AI-Sys Spring 2019](https://ucbrise.github.io/cs294-ai-sys-sp19/)  
   このコースでは、AlexNetのような古典的な構造から、次世代のAIアプリケーションをより良くサポートするための最新のシステム設計トレンドまでを説明します。また、AIを活用してシステムのアーキテクチャとパフォーマンスを最適化するアプリケーションについても取り上げています。オンライン学習者にとって最も価値のある部分は、提供されている必読リストです。

### ビデオチュートリアル

1. [ScaledML 2019](https://www.youtube.com/playlist?list=PLRM2gQVaW_wWXoUnSfZTxpgDmNaAS1RtG)  
2. [A New Golden Age for Computer Architecture History, Challenges, and Opportunities.](https://www.youtube.com/watch?v=uyc_pDBJotI&t=767s)  
3. [SysML 18: Perspectives and Challenges.](https://www.youtube.com/watch?v=4inIBmY8dQI&t=26s)  
4. [RL Course by David Silver](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-)  

私たちの製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>