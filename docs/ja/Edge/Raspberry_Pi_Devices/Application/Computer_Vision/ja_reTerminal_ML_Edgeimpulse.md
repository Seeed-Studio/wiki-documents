---
description: Edge ImpulseとreTerminalを使用した物体検出
title: Edge ImpulseとreTerminalを使用した物体検出
keywords:
  - Edge
  - reTerminal アプリケーション
  - 組み込みML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_ML_Edgeimpulse
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## はじめに

今日のデジタル環境では、エッジAIとIoT（モノのインターネット）技術の統合により、開発者や愛好家にとってエキサイティングな可能性が広がっています。その中でも、エッジデバイス向けの機械学習モデルの作成を簡素化する強力なプラットフォームがEdge Impulseです。このステップバイステップガイドでは、reTerminalデバイスにEdge Impulseをインストールし、ローカルの物体検出ソリューションを作成するプロセスを説明します。

学べること:

- reTerminalに必要な依存関係をインストールする方法
- プロジェクト用にNode.jsとnpmを設定する方法
- Edge Impulse Linux CLIツールをデプロイする方法
- Edge Impulse内で物体検出モデルを作成し、トレーニングする方法
- モデルをreTerminalデバイス上でローカルにデプロイしてテストする方法

このガイドを終える頃には、Edge Impulseの力を活用して、reTerminalのようなエッジデバイスで物体検出を行う方法を実践的に理解できるようになります。それでは、ローカルAI駆動の物体検出のエキサイティングな世界を探求してみましょう！

### ハードウェア準備
<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal</th>
        <th>カメラモジュール V1</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/reterminal.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/camera.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulseは、マイクロコントローラーや組み込みシステムなどのエッジデバイス向けに機械学習モデルの開発を簡素化することを目的とした多用途なプラットフォームです。この包括的なソリューションは、データ収集、前処理、モデルのトレーニング、デプロイ、モニタリングといった機械学習のワークフロー全体を統一された環境で簡素化します。その特徴の一つは、ユーザーフレンドリーなインターフェースで、データの収集とラベル付けを簡単に行える点です。また、効率的なモデル開発のための事前構築された信号処理ブロックや機械学習アルゴリズムのライブラリも提供しています。Edge Impulseは、リソースが限られたエッジデバイスでの推論性能を最適化するよう設計されており、継続的なインターネット接続に依存せずリアルタイム処理を実現します。さらに、幅広い人気のあるハードウェアプラットフォームとのシームレスな統合により、開発者はモデルを簡単にデプロイすることができます。

### ソフトウェア準備

公式ウェブサイトから最新バージョンのRaspberry Pi 64ビットOSをインストールすることをお勧めします。新しいRaspbian OSをインストールしたい場合は、この[ガイド](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)に従ってください。

その後、Raspberry Piカメラを設定する必要があります。この[ガイド](https://wiki.seeedstudio.com/ja/reTerminal-piCam/)に従ってください。

Edge Impulseを始めるにはアカウントが必要ですので、この[リンク](https://edgeimpulse.com/)を訪れてアカウントを作成してください。デフォルトで初期プロジェクトが作成されます。

## reTerminal デバイスに依存関係をインストールする

**このデバイスを Edge Impulse にセットアップするには、以下のコマンドを一つずつ実行してください**

```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## Edge Impulse への接続

ソフトウェアのセットアップが完了したら、カメラまたはマイクを reTerminal に接続してください。Edge Impulse アカウントにリンクされたメールアドレス、パスワード、およびデバイス名を入力する必要があります。

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/connectingdevice.png" /></center>

## デバイスが接続されていることの確認

これで完了です！ デバイスは Edge Impulse に接続されました。これを確認するには、Edge Impulse プロジェクトに移動し、「Devices」をクリックしてください。ここにデバイスがリストされているはずです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/connectdevice.PNG" /></center>

## オブジェクトを検出する

### データセットの構築

Raspberry Pi カメラを reTerminal に接続して直接データを収集するか、ローカルストレージから事前に収集したデータをアップロードすることができます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/datacollection.png" /></center>

「Camera」をセンサーとして選択し、ラベル名を入力することで、データサンプリングプロセスを開始できます。

### データのラベリング

収集したすべての画像は「ラベリングキュー」にステージングされます。オブジェクトのラベリングは、オブジェクトの周りにボックスをドラッグし、ラベルを入力するだけで簡単に行えます。その後、「Save Label」をクリックしてください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/labeling.PNG" /></center>

### データセットの再バランス調整

モデルの有効性を検証するためには、データの一部（通常は約20%）を「テストセット」として予約することが重要です。このデータはモデルのトレーニングには使用せず、検証のみに使用します。「Data collected」ウィジェットの上にある2つのボタンを使用して、トレーニングセットとテストセットを簡単に切り替えることができます。開発ボードでデータを収集し、テストセットにデータがない場合は、**Dashboard > Perform train/test split** に移動して解決できます。

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/ReTerminal/ML/split.PNG" /></center>

### インパルスの作成

このチュートリアルでは96x96の画像を使用していますが、Edge Impulse は正方形であれば他の解像度にも対応しています。これを設定するには、以下の手順に従ってください。まず、**Create Impulse** に移動し、**image width** と **image height** を希望の寸法（例：96）に設定します。次に、**Fit shortest axis** を **resize mode** として選択し、**Images** と **Object Detection (Images)** ブロックを追加します。最後に、**Save Impulse** をクリックして設定を適用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/impulse.PNG" /></center>

### 特徴量の生成

このステップでは、以下のタスクを実行します：

- データをすべてリサイズする。
- 処理ブロックをデータセット全体に適用する。
- データセット全体の3Dビジュアライゼーションを生成する。
- 「Generate features」をクリックしてプロセスを開始する。

その後、「Feature explorer」が読み込まれます。この「Feature explorer」は、データセット内のすべてのデータをプロットしたものです。画像には多くの次元があるため、可視化する前にデータセットに「次元削減」という手法を適用します。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/generatf.PNG" /></center>

### トレーニング

**「Object Detection」** タブ内で、データセットをトレーニングするオプションがあります。これを行うには、特定のパラメータを設定し、使用するモデルを選択する必要があります。このチュートリアルでは、FOMO モデルを選択しています。このモデルは、リソースが限られたデバイスでオブジェクト検出モデルを実行するための革新的なアプローチを提供します。FOMO は、リアルタイムのオブジェクト検出、追跡、およびカウント機能をマイクロコントローラーに提供し、重要なマイルストーンを達成しています。特に、FOMO は MobileNet SSD よりも30倍高速で、200K未満のRAMで動作可能です。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/training.PNG" /></center>

トレーニングプロセスが完了すると、以下のような混同行列が表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/confutionmat.PNG" height="auto"/></center>

### モデルの検証

モデルがトレーニングされたので、テストデータを使用してテストしてみましょう。データ収集時に、データセットをトレーニング用とテスト用に分割しました。モデルはトレーニングデータのみでトレーニングされました。そのため、テストデータセットを使用して、モデルが実際のシナリオでどれだけ効果的に動作するかを評価できます。この検証ステップは、モデルがトレーニングデータに過剰適合していないことを確認するために重要です。モデルを検証するには、**Model Testing** に移動し、**Classify all** を選択してください。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/test.png" height="auto"/></center>

### reTerminal デバイスでモデルを実行する

新しい空のターミナルで以下のコマンドラインを実行します。

```sh
edge-impulse-linux-runner
```

この操作により、モデルがビルドされ、ダウンロードされます。その後、reTerminal 上で実行されます。同じネットワーク上にいる場合、カメラフィードのライブビューをブラウザで確認し、reTerminal から直接分類結果を確認できます。デバイスが提案するURLにアクセスしてください。

```sh
Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912
```

## 結論

結論として、reTerminal と Edge Impulse のシームレスな統合により、開発者はエッジ AI の可能性を最大限に引き出すことができます。堅牢なハードウェアと多用途な機能を備えた reTerminal は、リアルタイムの物体検出ソリューションを実行するための優れたプラットフォームとして機能します。一方、Edge Impulse は、リソースが限られたデバイス上での機械学習モデルの作成と展開を簡素化し、その可能性を無限に広げます。IoT アプリケーション、ロボティクス、または効率的なオンデバイス AI を必要とするプロジェクトに取り組む際、この reTerminal と Edge Impulse の強力なシナジーは、技術の最前線での革新の世界を切り開きます。

# 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>