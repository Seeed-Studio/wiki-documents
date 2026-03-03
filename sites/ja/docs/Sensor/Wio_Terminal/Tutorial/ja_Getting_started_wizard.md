---
description: スタートアップウィザード
title: スタートアップウィザード
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Getting_started_wizard
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Edge Impulse を活用して Wio Terminal に 5 分で ML モデルを構築・デプロイ

## **はじめに**

Edge Impulse は、機械学習初心者に非常に優しい新しい **スタートアップウィザード** をリリースしました。このウィザードは、短い文章を録音し、データセットを自動的に改善して、5 分以内にオープンソースモデルを提供する少量データのキーワード検出モデルを使用します。このモデルは Wio Terminal に適用できます。本記事では、この「ウィザード」の使用方法を説明し、その後、ウィザードからモデルを Wio Terminal にデプロイする方法を紹介します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

## **Edge Impulse の使い方**

ここでは、スタートアップウィザードの起動方法とその手順を説明します。

### **ハードウェア**

**必要なハードウェア**

このデモでは、以下のデバイスが必要です：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- PC
- PC用マイク
- Type-C ケーブル

**ハードウェアの接続**

Type-C ケーブルを使用してコンピュータに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.png"/></div>

### **ソフトウェア**

**必要なソフトウェア**

- [Arduino IDE](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)

このプロジェクトは Arduino プラットフォームに基づいているため、Arduino IDE とさまざまな Arduino ライブラリが必要です。Wio Terminal を初めて使用する場合は、[Wio Terminal のクイックスタートガイド](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)を参照することをお勧めします。

### Edge Impulse トレーニングの開始

まず、Edge Impulse のアカウントを作成し、プロジェクトを作成する必要があります。

- **ステップ 1**. [Edge Impulse のウェブサイト](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1) を開き、アカウントを登録します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots1.png"/></div>

- **ステップ 2**. 新しいプロジェクトを作成します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png"/></div>

- **ステップ 3**. "ダッシュボード" ページの下部にある **"Launch getting started wizard"** ボタンをクリックしてウィザードを開始します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.jpg"/></div>

- **ステップ 4**. 指示に従ってボタンをクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI03.jpg"/></div>

- **ステップ 5**. 単語または短い文章を入力します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI04a.jpg"/></div>

- **ステップ 6**. コンピュータのマイクを使用して、38 秒間自分の声で単語を録音します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI06.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI07.jpg"/></div>

録音が明瞭で十分なデータを収集できていることを確認してください。そうでない場合は、追加の収集を求められます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI08.jpg"/></div>

十分なデータを収集すると、ブロックが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI09.jpg"/></div>

- **ステップ 7**. 「次へ」をクリックすると、Edge Impulse がデータセット内の他の単語や背景ノイズを混ぜてくれます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI10.jpg"/></div>

その後、モデルはあなたの単語と他の音を区別する方法を学習します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI12.jpg"/></div>

- **ステップ 8**. 指示に従って「インパルス」を作成します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI13.jpg"/></div>

これにより、機械学習に使用できる特徴を抽出します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI14.jpg"/></div>

自動的に機能し、完了したら「次へ」をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI15.jpg"/></div>

- **ステップ 9**. 指示に従ってニューラルネットワークをトレーニングします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI16.jpg"/></div>

モデルがトレーニングされるまで進めます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI17.jpg"/></div>

再度マイクを使用して結果を確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI18.jpg"/></div>

おめでとうございます！新しい単語分類モデルが完成しました。次に、このモデルを Wio Terminal にデプロイします。

### Wio Terminal に機械学習モデルをデプロイ

ここでは、モデルを Wio Terminal にデプロイします。

- **ステップ 10**. 左側の「Deployment」列を選択してクリックします。その後、「Arduino Library」を選択し、下部の「build」を選択して Arduino に必要なライブラリを作成します。これにより、サードパーティライブラリを含む zip ファイルが自動的にダウンロードされます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Alots/Alots19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI21.jpg"/></div>

プロジェクト名に関連するライブラリ名は、**ステップ 2**でプロジェクトに入力した名前がここに表示されます。この情報は、必要な正しいファイルを見つけるのに役立ちます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI22.jpg"/></div>

- **ステップ 11**. 音声認識コードを[こちら](https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/example.ino)からダウンロードし、Arduino IDEで開きます。同時に、ダウンロードした.zipファイルを追加する必要があります。これにより、サードパーティライブラリを適用できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI23.jpg"/></div>

サードパーティライブラリの名前を自分のものに変更し、最初に発話する言葉を設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI24.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI25.jpg"/></div>

最後に、言葉を発話し、Wio Terminalがそれを表示するかどうかを確認します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI26.jpg"/></div>