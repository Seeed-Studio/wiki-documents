---
description: Edge Impulse Tuner
title: Edge Impulse Tuner
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edge-Impulse-Tuner
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# EON Tuner - Edge Impulseの最適化機能

## **概要**

Edge Impulseは、組み込み機械学習モデルとデバイスのメモリ使用量を最適化する機能を導入しました。この機能は、パラメータを調整することで、機械学習アルゴリズムに詳しくない人でも、アプリケーションに最適な学習モデルを迅速に選択できるようにします。同時に、デバイスがより少ないメモリと性能を使用できるようにするため、制約内でTinyMLモデルを特定の機器に展開することが可能になります。

EON Tunerは、入力データ、潜在的な信号処理ブロック、およびニューラルネットワークアーキテクチャを分析します。その後、選択したデバイスのレイテンシーとメモリ要件に適合する可能性のあるモデルアーキテクチャの概要を提供します。これらの中から任意のものを選択することができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## **EON Tunerの位置**

![](https://files.seeedstudio.com/wiki/EON-Tuner/weizhituner.png)

ご覧の通り、EON Tunerの位置は[Edge Impulse](https://www.edgeimpulse.com/)プロジェクトページの左側にあり、分類のすぐ下にあります。アプリケーションを完成させた後、簡単にTunerを選択してプロジェクトを強化することができます。

## **EON Tunerの改善点**

以下は、EON Tunerを使用した場合と使用しない場合の違いを示す例です。

![](https://files.seeedstudio.com/wiki/EON-Tuner/duibi.png)

## **はじめに**

ここでは、オーディオ分類プロジェクトを提供し、EON Tunerの使用方法を示します。[Wio TerminalとEdge Impulseを使用してLoRaでデータを送信する](https://wiki.seeedstudio.com/ja/AIoTs_GPS_state_tester/)ことに興味がある場合は、例のプロジェクトをクリックして確認できます。

### **ハードウェア**

**必要なハードウェア**

このデモでは、以下のデバイスが必要です：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminalシャーシ - バッテリー（オプション）](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**ハードウェア接続**

Type-Cケーブルを介してコンピュータに接続します。

![](https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png)

### **ソフトウェア**

**必要なソフトウェア**

- [Arduino IDE](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)

### Wio Terminalを使用した機械学習

ここでは、Wio Terminalを使用して機械学習モデルをトレーニングし、使用する方法を示します。このプロジェクトはArduinoプラットフォームに基づいているため、Arduino IDEとさまざまなArduinoライブラリが必要です。初めてWio Terminalを使用する場合は、[Wio Terminalの使い方](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)ガイドを参照することをお勧めします。

#### Edge Impulseトレーニングの開始

まず、Edge Impulseのアカウントを作成し、プロジェクトを作成する必要があります。

- **ステップ1**. [Edge Impulseのウェブサイト](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)を開き、アカウントを登録します。

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **ステップ2**. 新しいプロジェクトを作成します。

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### Wio Terminalとのウェブサイト接続

- **ステップ3**. 接続準備のためにファームウェア[wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2)をダウンロードします。

[Wio Terminalの使い方](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)ガイドラインに従って：

Wio Terminal（すでにPCに接続済み）の左下をダブルクリックすると、コンピュータにドライバ（以下のような「Arduino (F:)」）がポップアップ表示されます。その後、[wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2)ファームウェアをドライバにドラッグします。ドライバが消えるのを確認したら、ファームウェアがプログラムされたことを意味します。これでウェブサイトにアクセスしてWio Terminalを接続できます。

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **ステップ4**. ファームウェアが設定されたら、「WebUSBを使用して接続」をクリックしてWio Terminalをウェブサイトに接続します。

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

「デバイス」、「ラベル」、「センサー」が以下のように表示されたら、接続が完了し、データ収集を開始できます。

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### データ収集

Edge Impulseでデータを収集できます。

- **ステップ5**. 「ラベル」、「サンプル長（ms）」を入力し、「サンプリング開始」をクリックします。

  - 「ラベル」は分類したいカテゴリを意味します。
  - 「サンプル長」はサンプリング中の時間を意味します。

ここで行う例のプロジェクトはオーディオ分類であり、内蔵マイクを使用します。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji.png)

データを10回以上サンプリングすることを強くお勧めします。録音にはSPIフラッシュを使用する必要があり、消去操作が必要なため、通常設定した時間よりも長くかかります。（このプロジェクトでは約7秒かかりますが、設定時間は「3秒」です）。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji2.png)

#### 機械学習モデルの生成

データが収集されたら、それを使用してMLモデルをトレーニングできます。

- **ステップ6**. データをサンプリングした後、「インパルスを作成」をクリックしてデータを処理します。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji3.png)

ここで選択した処理ブロックと学習ブロックはAudio(MFE)とニューラルネットワーク(Keras)です。処理ブロックを追加し、学習ブロックを追加することで見つけることができます。その後、「インパルスを保存」をクリックして次に進みます。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji4.png)

- **ステップ 7**. 「Spectral features」ページに移動し、下部にある「Save parameters」をクリックします。これにより自動的に「Generate feature」セクションに移動します。データは以下のように表示されるかもしれません：

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi.png)

こちらが「Generate feature」セクションです。このセクションでは、データを機械学習に必要な特徴に変換することができます。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi2.png)

「Generate feature」をクリックすると、結果が右側に表示されます：

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi3.png)

- **ステップ 8**. 「NN Classifier」ページに移動し、特徴を使用して機械学習モデルをトレーニングします。ページの下部にある「Start training」をクリックします。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi4.png)

トレーニングの出力はページの右側に表示されます。出力が表示されたら、モデルが生成されたことを意味します。

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

ここで、出力が期待したものではないことがわかります：

![](https://files.seeedstudio.com/wiki/EON-Tuner/inputfail.png)

データを再収集することも選択肢ですが、ここでは別の方法として **「EON Tuner」** を使用することができます。

#### EON Tuner を使用して ML モデルを最適化する

ここで、EON Tuner を使用して組み込み機械学習モデルを最適化することができます。

- **ステップ 9**. ページ右側の「EON Tuner」を選択し、「Start EON Tuner」をクリックします。

![](https://files.seeedstudio.com/wiki/EON-Tuner/button.png)

多数の出力モデルが表示されますが、最初に表示されるモデルは適切でない場合があります：

![](https://files.seeedstudio.com/wiki/EON-Tuner/outputfail.png)

しかし、数秒待つと、モデルが徐々に良好にトレーニングされ、デプロイ可能な状態になります：

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi5.png)

「Select」をクリックすると、ウェブサイトがこのモデルを主要モデルとして設定するかどうかを尋ねます。「Yes」をクリックしてください：

![](https://files.seeedstudio.com/wiki/EON-Tuner/dataupdate.png)

#### 機械学習モデルのデプロイ

ここで、新しい機械学習モデルを Wio Terminal にデプロイすることができます。

- **ステップ 10**. 左側の「Deployment」列を選択してクリックします。

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

次に「Arduino Library」を選択し、下部の「build」を選択して Arduino に必要なライブラリを作成します。これにより、サードパーティライブラリを含む zip ファイルが自動的にダウンロードされます。

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

必要なライブラリの名前はプロジェクトの名前に基づいています。つまり、**ステップ 2** でプロジェクトに記載した名前がここに表示されます。これにより、必要な正しいファイルを見つけることができます。

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **ステップ 10**. [こちら](https://files.seeedstudio.com/wiki/EON-Tuner/EON_tuner_HelloWorld.ino)からコードをダウンロードし、Arduino IDE で開きます。上記のようにサードパーティライブラリを変更し、コードを実行します。

![](https://files.seeedstudio.com/wiki/EON-Tuner/librarymingzi.png)

最後に、Arduino IDE の「Serial Monitor」をクリックし、「Data Acquisition」で設定した Wio Terminal に言葉を話しかけます。モニターには結果と「Wio Terminal が結果に対してどれだけの信頼度を持っているか」、つまり精度が表示されるはずです。

![](https://files.seeedstudio.com/wiki/EON-Tuner/jieguo.png)

チューナーがどのような違いをもたらすかに興味がある場合は、**ステップ 9** をスキップして同じ手順を進めて確認することができます。