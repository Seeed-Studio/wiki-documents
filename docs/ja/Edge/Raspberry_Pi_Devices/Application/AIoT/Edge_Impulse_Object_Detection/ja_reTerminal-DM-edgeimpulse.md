---
description: Edge ImpulseとreTerminal DMを使用したオブジェクト検出
title: Edge ImpulseとreTerminal DMを使用したオブジェクト検出
keywords:
  - Edge
  - reTerminalDM Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-edgeimpulse
last_update:
  date: 9/21/2023
  author: Kasun Thushara
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## はじめに

今日のデジタル環境において、エッジAIとIoT（Internet of Things）技術の統合により、開発者や愛好家にとって刺激的な可能性が開かれています。エッジデバイス向けの機械学習モデルの作成を簡素化する強力なプラットフォームの一つがEdge Impulseです。このステップバイステップガイドでは、reTerminal DMデバイスにEdge Impulseをインストールし、ローカルオブジェクト検出ソリューションを作成するプロセスを説明します。

学習内容：

- reTerminal DMに必要な依存関係のインストール
- プロジェクト用のNode.jsとnpmのセットアップ
- Edge Impulse Linux CLIツールのデプロイ
- Edge Impulse内でのオブジェクト検出モデルの作成とトレーニング
- reTerminal DMデバイスでのモデルのローカルデプロイとテスト

このガイドの最後には、reTerminal DMのようなエッジデバイスでオブジェクト検出にEdge Impulseの力を活用する方法を実践的に理解できるようになります。それでは、ローカルAI駆動オブジェクト検出の刺激的な世界を探索してみましょう！

### ハードウェアの準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulseは、マイクロコントローラーや組み込みシステムなどのエッジデバイス向けに特化した機械学習モデルの開発を効率化することに特化した多機能プラットフォームです。この包括的なソリューションは、データ収集、前処理、モデル訓練、デプロイメント、監視を含む機械学習ワークフロー全体を統一環境内で簡素化します。その際立った特徴の一つは、ユーザーフレンドリーなインターフェースで、ユーザーが簡単にデータを収集・ラベル付けできるとともに、効率的なモデル開発のための事前構築された信号処理ブロックと機械学習アルゴリズムのライブラリを提供します。Edge Impulseは、リソース制約のあるエッジデバイスでの最適な推論性能を実現するよう設計されており、継続的なインターネット接続に依存することなくリアルタイム処理を保証します。さらに、幅広い人気のハードウェアプラットフォームとのシームレスな統合により強化されており、開発者が簡単にモデルをデプロイできるよう支援します。

### ソフトウェアの準備

公式ウェブサイトから最新版のRaspberry Pi 64ビットOSをインストールすることをお勧めします。新しいRaspbian OSをインストールしたい場合は、この[ガイド](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os)に記載されている手順に従ってください。

:::note

reTerminal DM（カメラ & PoE付き）を使用していない場合で、Raspberry Piカメラをセットアップしたい場合は、この[ガイド](https://wiki.seeedstudio.com/ja/reterminal-dm-hardware-guide/#install-camera)に記載されている手順に従って進めてください。

:::

開始するにはEdge Impulseアカウントが必要ですので、この[リンク](https://edgeimpulse.com/)にアクセスしてアカウントを作成してください。デフォルトで初期プロジェクトが作成されます。

## reTerminal DMデバイスに依存関係をインストール

**Edge Impulseでこのデバイスをセットアップするには、以下のコマンドを一つずつ実行してください**

```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## Edge Impulseへの接続

すべてのソフトウェアがセットアップされたら、カメラまたはマイクをreTerminal DMに接続します。Edge Impulseアカウントにリンクされたメールアドレス、パスワード、およびデバイス名を提供する必要があります。

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectingdevice.PNG" /></center>

## デバイスが接続されていることを確認する

以上です！これでデバイスがEdge Impulseに接続されました。これを確認するには、Edge Impulseプロジェクトに移動し、「Devices」をクリックしてください。デバイスがここにリストされます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectdevice.PNG" /></center>

## オブジェクトを検出する

### データセットの構築

接続されたRaspberry Piカメラから直接reTerminal DM経由でデータを収集するか、ローカルストレージから事前に収集したデータをアップロードするかを選択できます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/datacollection.png" /></center>

センサーとして「Camera」を選択し、ラベル名を提供することで、データサンプリングプロセスを開始できます。

### データのラベリング

収集したすべての画像は「labeling queue」でアノテーション待ちとなります。オブジェクトのラベリングは、オブジェクトの周りにボックスをドラッグし、ラベルを入力するだけで簡単に行えます。その後、「save label」をクリックしてください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/labeling.PNG" /></center>

### データセットのリバランス

モデルの有効性を検証するために、通常約20%のデータを「テストセット」として確保することが重要です。このデータはモデルの訓練中には使用せず、検証目的のみに使用します。「Data collected」ウィジェットの上にある2つのボタンを使用して、訓練セットとテストセットを簡単に切り替えることができます。開発ボードでデータを収集し、現在テストセットにデータがない場合は、**Dashboard > Perform train/test split**に移動することで解決できます。

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/split.PNG" /></center>

### インパルスの作成

このチュートリアルでは96x96の画像を使用していますが、Edge Impulseは画像が正方形である限り、他の解像度も処理できることに注意してください。これを設定するには、次の手順に従ってください：まず、**Create Impulse**に移動し、**image width**と**image height**を希望する寸法（例：96、160、または320）に設定します。次に、**resize mode**として**Fit shortest axis**を選択し、**Images**と**Object Detection (Images)**ブロックを追加します。最後に、**Save Impulse**をクリックしてこれらの設定を適用します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/impulse.PNG" /></center>

### 特徴量生成

このステップでは、以下のタスクを実行します：

- すべてのデータをリサイズする
- 処理ブロックをデータセット全体に適用する
- 完全なデータセットの3D可視化を生成する
- 「Generate features」をクリックしてプロセスを開始する

その後、「Feature explorer」が読み込まれます。この特徴量エクスプローラーは、データセット内のすべてのデータのプロットを表します。画像には多数の次元があるため、可視化する前にデータセットに「次元削減」と呼ばれる技術を使用します。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/generatf.PNG" /></center>

### 訓練

「**Object Detection**」タブ内で、データセットを訓練するオプションがあります。これを行うには、特定のパラメータを設定し、使用するモデルを選択する必要があります。このチュートリアルでは、FOMOモデルを選択しています。このモデルは、そのウェブサイトによると、リソース制約のあるデバイスでオブジェクト検出モデルを実行するための革新的なアプローチを導入しています。FOMOは、マイクロコントローラーにリアルタイムオブジェクト検出、追跡、カウント機能をもたらす革新的なアルゴリズムで、重要なマイルストーンを示しています。特に、FOMOはMobileNet SSDを30倍上回る驚くべき速度の優位性を誇り、200K未満のRAMで動作できます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/training.PNG" /></center>

訓練プロセスが完了すると、以下のような混同行列が表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/confutionmat.PNG" height="auto"/></center>

### モデルの検証

モデルが訓練されたので、テストデータを使用してテストしてみましょう。データ収集中に、データセットを訓練用とテスト用のサブセットに分割しました。モデルは訓練データのみで訓練されました。したがって、テストデータセットを使用して、モデルが実世界のシナリオでどの程度効果的に動作するかを評価できます。この検証ステップは、モデルが訓練データに過学習していないことを確認するために重要です。これは一般的な問題です。モデルを検証するには、**Model Testing**に移動し、**Classify all**を選択してください。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/test.png" height="auto"/></center>

### reTerminal DMデバイスでモデルを実行する

新しい空白のターミナルで以下のコマンドラインを実行してください。

```sh
edge-impulse-linux-runner
```

このアクションにより、モデルがビルドされ、ダウンロードされます。その後、reTerminal DM上で実行されます。同じネットワーク上にいる場合、カメラフィードのライブビューにアクセスし、reTerminal DMから直接分類結果を表示できます。デバイスが提案するURLにアクセスしてください。

```sh
Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912
```

## 結論

結論として、reTerminal DMとEdge Impulseのシームレスな統合により、開発者はエッジAIの可能性を最大限に引き出すことができます。reTerminal DMは、その堅牢なハードウェアと多様な機能により、リアルタイム物体検出ソリューションを実行するための優れたプラットフォームとして機能します。リソース制約のあるデバイスでの機械学習モデルの作成と展開を簡素化するEdge Impulseと組み合わせることで、可能性は無限大になります。IoTアプリケーション、ロボティクス、または効率的なオンデバイスAIを必要とするあらゆるプロジェクトに取り組んでいる場合でも、reTerminal DMとEdge Impulseの強力なシナジーは、テクノロジーのエッジでイノベーションの世界を切り開きます。

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
