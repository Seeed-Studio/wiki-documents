---
description: SenseCraft AI は Seeed Studio のノーコード/ローコード AIoT プラットフォームで、reSpeaker XVF3800 のようなエッジデバイスへ事前学習済み AI モデルをデプロイできます。ウェイクワード「Lumio」によって、このセットアップは音声制御の AI アプリケーションを実現し、複雑なコーディングは不要です。
title: reSpeaker XVF3800 と SenseCraft AI
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

SenseCraft AI は、reSpeaker XVF3800 などのエッジデバイスへ事前学習済み人工知能モデルを簡単にデプロイできる、Seeed Studio のノーコード/ローコード AI プラットフォームです。本ガイドでは、カスタムトリガー「Lumio」を用いたウェイクワード検出のために reSpeaker XVF3800 を設定し、複雑なコードを書くことなく、プロジェクトに音声起動による制御を実現する方法に焦点を当てます。SenseCraft AI を使えば、ウェイクワードイベントをすばやくテスト、プレビューし、ハードウェアワークフローへ統合できます。また、このプラットフォームでは、特定の音イベントやカスタムウェイクワードを検出するための独自モデルを作成・アップロードすることもでき、用途に合わせて音声インタラクションを柔軟にカスタマイズできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 既存モデルのデプロイ

### ステップ 1: デバイスのファームウェアを更新する

ウェイクワードモデルをデプロイする前に、reSpeaker XVF3800 が正しいファームウェアバージョンで動作していることを確認してください。

必要なファームウェアファイルは次のとおりです：
> `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.7_48k_test5.bin`

標準的な DFU（Device Firmware Update）[手順](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#ファームウェアを更新する)に従って、このファイルを reSpeaker XVF3800 に書き込んでください。


### ステップ 2: SenseCraft AI プラットフォームへ移動する

Web ブラウザを開き、次のページへアクセスします：
> **https://sensecraft.seeed.cc/**

### ステップ 3: トレーニングセクションへアクセスする

メインナビゲーションメニューから：
1. **Products** をクリック
2. **SenseCraft AI** を選択
3. **Training AI Models** を選択



### ステップ 4: ワークスペースを開く

1. 自分の **Workspace** に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_0.jpg" alt="pir" width={800} height="auto" /></p>

2. アクティブなデバイスタイプとして、ワークスペースが **reSpeaker** に設定されていることを確認します
3. デバイスリストから **reSpeaker** を選択します
4. **Connect** ボタンをクリックして、デバイスとの接続を確立します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_1.jpg" alt="pir" width={800} height="auto" /></p>

### ステップ 5: 実行中のモデルを置き換える

接続が完了したら、デバイス上の既存モデルを置き換えます：

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
2. **Confirm** をクリックして、モデルをデバイスに書き込む処理を続行します
3. モデルが reSpeaker XVF3800 に書き込まれるまで、しばらく待ちます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_4.jpg" alt="pir" width={800} height="auto" /></p>

### ステップ 8: ウェイクワード検出をテストする

デプロイが正常に完了すると、次のように表示されます：

- **オーディオスペクトラムの可視化** – リアルタイムの音声入力を表示
- **2 つの検出クラス**：
  - *背景雑音*
  - *Lumos*

ウェイクワードをテストするには：
1. **「Lumos」** という単語を、reSpeaker のマイクに向かってはっきりと発声します
2. Lumos クラスの信頼度レベルが上昇する様子を確認します
3. 必要に応じて **threshold parameter** を調整し、検出感度を微調整します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/sensecraft/sense_5.jpg" alt="pir" width={800} height="auto" /></p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

