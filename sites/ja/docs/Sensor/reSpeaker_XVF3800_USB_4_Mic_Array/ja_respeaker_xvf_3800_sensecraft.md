---
description: SenseCraft AI は Seeed Studio が提供するノーコード／ローコードの AIoT プラットフォームで、reSpeaker XVF3800 のようなエッジデバイスに事前学習済み AI モデルをデプロイできます。ウェイクワード「Lumio」によって、このセットアップで音声制御の AI アプリケーションを実現でき、複雑なコーディングは不要です。
title: reSpeaker XVF3800 で SenseCraft AI を使う
keywords:
  - SenseCraft
  - reSpeaker XVF3800
  - キーワードスポッティング
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg
slug: /respeaker_xvf3800_sensecraft
sku: 114993702,114993700
last_update: 
  date: 6/4/2026
  author: Kasun Thushara
createdAt: '2026-06-04'
updatedAt: '2026-06-04'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_sensecraft/
---


## はじめに

SenseCraft AI は、Seeed Studio のノーコード／ローコード AI プラットフォームで、reSpeaker XVF3800 などのエッジデバイスへの事前学習済み人工知能モデルのデプロイを簡素化します。本ガイドでは、カスタムトリガー「Lumio」を使用したウェイクワード検出用に reSpeaker XVF3800 を構成し、複雑なコードを書くことなく、プロジェクトで音声起動による制御を可能にすることに焦点を当てます。SenseCraft AI を使えば、ウェイクワードイベントをすばやくテスト、プレビューし、ハードウェアワークフローに統合できます。また、このプラットフォームでは、特定の音イベントやカスタムウェイクワードを検出するための独自のカスタムモデルを作成してアップロードすることもでき、用途に合わせて音声インタラクションを柔軟にカスタマイズできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 既存モデルのデプロイ

### ステップ 1: デバイスのファームウェアを更新する

ウェイクワードモデルをデプロイする前に、reSpeaker XVF3800 が正しいファームウェアバージョンで動作していることを確認してください。

必要なファームウェアファイルは次のとおりです:
> `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.7_48k_test5.bin`

このファイルを reSpeaker XVF3800 に書き込むには、デバイス標準の DFU（Device Firmware Update）[手順](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#ファームウェアを更新する)に従ってください。


### ステップ 2: SenseCraft AI プラットフォームに移動する

Web ブラウザを開き、次のページにアクセスします:
> **https://sensecraft.seeed.cc/**

### ステップ 3: トレーニングセクションにアクセスする

メインナビゲーションメニューから:
1. **Products** をクリック
2. **SenseCraft AI** を選択
3. **Training AI Models** を選択



### ステップ 4: ワークスペースを開く

1. 自分の **Workspace** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_0.jpg" alt="pir" width={800} height="auto" /></p>

2. ワークスペースで、アクティブなデバイスタイプとして **reSpeaker** が設定されていることを確認します
3. デバイスリストから **reSpeaker** を選択します
4. **Connect** ボタンをクリックしてデバイスとの接続を確立します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_1.jpg" alt="pir" width={800} height="auto" /></p>

### ステップ 5: 実行中のモデルを置き換える

接続が確立されたら、デバイス上の既存モデルを置き換えます:

1. 「Replace the device running model」の下にある **Model** セクションを探します
2. **Select Model** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_2.jpg" alt="pir" width={800} height="auto" /></p>

3. 利用可能なオプションから **Keyword Spotting- Lumos Keyword recognition** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_3.jpg" alt="pir" width={800} height="auto" /></p>

:::note

デプロイするモデルは **Lumos** と呼ばれます。これは、エッジデバイス向けに効率的で低レイテンシな音声インタラクション機能を提供するよう設計された軽量音声認識モデルです。音声のスペクトル特徴を解析することで、このモデルは複雑な環境雑音の中でも特定のウェイクワード **「Lumos」** を高精度に検出できます。
:::


### ステップ 6: モデルのデプロイを確認する

1. モデルの詳細を示すダイアログボックスが表示されます
2. **Confirm** をクリックして、モデルをデバイスにフラッシュする処理を続行します
3. モデルが reSpeaker XVF3800 にフラッシュされるまでしばらく待ちます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={800} height="auto" /></p>

### ステップ 8: ウェイクワード検出をテストする

デプロイが正常に完了すると、次のものが表示されます:

- **オーディオスペクトラムの可視化** – リアルタイムの音声入力を表示
- **2 つの検出クラス**:
  - *Background Noise*
  - *Lumos*

ウェイクワードをテストするには:
1. **「Lumos」** という単語を reSpeaker のマイクに向かってはっきりと話します
2. Lumos クラスの信頼度レベルが上昇する様子を確認します
3. 必要に応じて **threshold parameter** を調整し、検出感度を微調整します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={800} height="auto" /></p>

## 独自のオーディオ分類器を学習・デプロイする

### ステップ 1: Training タブを開く

1. **https://sensecraft.seeed.cc/** にアクセスします
2. メインメニューから **Products** → **SenseCraft AI** → **Training AI Models** に進みます
3. **Training** タブをクリックして、オーディオ分類インターフェースにアクセスします


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_6.jpg" alt="pir" width={800} height="auto" /></p>

### ステップ 2: reSpeaker デバイスを接続する

**Audio Classification / Detection** の下で:

1. 入力デバイスとして **reSpeaker Microphone** が選択されていることを確認します
2. **Connect** ボタンをクリックして接続を確立します
3. プラットフォームが接続成功を確認するまで待ちます


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_7.jpg" alt="pir" width={800} height="auto" /></p>



### ステップ 3: バックグラウンドノイズデータを収集する

カスタムサウンドを学習させる前に、通常の環境ノイズの基準を確立する必要があります。

1. **Collect Training Data for Background Noise** を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_8.jpg" alt="pir" width={800} height="auto" /></p>

2. プラットフォームは自動的に約 **20 秒間** 録音します
3. 録音は **1 秒サンプル** に分割されます
4. 完了すると、バックグラウンドデータサンプルのプレビューが表示されます
5. サンプルを確認し、問題なければ **Apply** を押します


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_10.jpg" alt="pir" width={600} height="auto" /></p>


### ステップ 4: カスタムサウンドクラスを作成する

ここでは、モデルに検出させたい特定の音のための新しいクラスを追加します。

**4.1 クラスに名前を付ける**

1. **Add New Class** をクリックします
2. クラス名として **Grassbreaking** と入力します
3. **Create** を押すか、新しいクラスを確定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_11.jpg" alt="pir" width={800} height="auto" /></p>

**4.2 カスタムクラスのトレーニングデータを収集する**

1. **Grassbreaking** クラスを選択します
2. **Collect Training Data** を押します
3. プラットフォームは約 **2 秒間** 録音します
4. 録音は **1 秒サンプル** に分割されます

**4.3 サンプルを確認して適用する**

1. 収集後、**2 つのサンプル** のプレビューが表示されます
2. サンプルを再生または確認します
3. 品質に満足したら **Apply** を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_9.jpg" alt="pir" width={800} height="auto" /></p>

**4.4 さらにサンプルを収集するために繰り返す**

信頼性の高い検出を実現するには、Grassbreaking クラスについて少なくとも **8 サンプル** を収集できるまで、データ収集プロセスを繰り返してください。

**良いサンプルのためのヒント:**
- 草が折れる音の強さを変えてみる
- 少し異なる位置や角度からサンプルを収集する
- 音がバックグラウンドノイズよりもはっきり聞こえるようにする


### ステップ 5: モデルを学習させる

十分なデータを収集したら、モデルを学習させます。

#### 5.1 Training ステップに移動する

インターフェースで **Step 2: Training** に移動します。

#### 5.2 デバイス選択を確認する

学習対象デバイスとして **reSpeaker** が選択されていることを確認します。

#### 5.3 学習を開始する

1. **Train** ボタンを押します
2. 学習プロセスが完了するまで数分待ちます
3. 学習中はブラウザを閉じたり、デバイスの接続を切断したりしないでください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_12.jpg" alt="pir" width={800} height="auto" /></p>

#### 5.4 学習結果を確認する

学習が完了すると、学習済みクラスが次の情報とともに表示されます:
- 信頼度レベルを示す **アニメーション付き確率バー**
- ライブ音声入力に基づくリアルタイム予測

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_13.jpg" alt="pir" width={800} height="auto" /></p>

### ステップ 6: モデルを reSpeaker にデプロイする

**6.1 デプロイメントステップに進む**

インターフェースで **Step 3: Deploy** に移動します。

**6.2 モデルをデプロイする**

1. **Deploy** ボタンをクリックして、モデルをデバイスにプッシュします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_14.jpg" alt="pir" width={800} height="auto" /></p>


2. 確認ダイアログが表示されます
3. **Confirm** して、TFLM（TensorFlow Lite Micro）モデルを reSpeaker の XIAO ESP32-S3 にプッシュします


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_15.jpg" alt="pir" width={600} height="auto" /></p>

**6.3 完了を待つ**

デプロイプロセスには少し時間がかかる場合があります。デプロイ成功を示す確認メッセージが表示されるまで待ちます。


### ステップ 7: リアルタイム検出をモニタリングする

デプロイが正常に完了したら:

1. インターフェースに、検出された各クラスの **アニメーション付き信頼度バー** が表示されます
2. 草が折れる音を出して検出をテストします
3. **Grassbreaking** クラスの信頼度レベルが上昇する様子を確認します
4. カスタムサウンドが検出されたときに **Background Noise** の信頼度が低下する様子を確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_16.jpg" alt="pir" width={600} height="auto" /></p>



## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

