---
description: Train_AI_With_A1102
title: SenseCraft AI を使用して SenseCAP A1102 に AI モデルをデプロイする
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /ja/train_ai_with_a1102
sidebar_position: 2
# sidebar_class_name: hidden
last_update:
  date: 05/15/2025
  author: Zeke
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCraft AI を使用して SenseCAP A1102 に AI モデルをデプロイする

SenseCAP A1102 は、高度な AI 機能と簡単なデプロイメントを兼ね備えた強力なセンサー機器です。このガイドでは、**SenseCraft AI** アプリを使用して A1102 に AI モデルをデプロイする手順を、ペアリング、設定、テストのステップごとに説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>


## **SenseCAP A1102 の概要**

### **SenseCAP A1102 とは？**
SenseCAP A1102 は、エッジ AI アプリケーション向けに設計されたインテリジェントなカメラセンサーです。8GB のメモリを搭載しており、以下のことが可能です：
- カスタム AI モデルのデプロイ。
- 認識した画像を自動保存。
- 高精度なリアルタイム認識を実現。

### **必要なもの**
開始する前に、以下を準備してください：
- SenseCAP A1102 デバイス。
- スマートフォンにインストールされた **SenseCraft AI** アプリ。
- デプロイ用の事前学習済み AI モデル。

## **SenseCAP A1102 の設定**

### Vision AI カメラの電源を入れる

:::tip
AI カメラの設定を変更する必要がある場合は、以下の手順に従って AI カメラの電源を入れてください。

LoRaWAN 送信関連の設定のみを変更する場合は、このセクションをスキップできます。
:::

以下の手順に従って、Type-C ポートを使用して A1102 をコンピュータに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

正しく接続されている場合、2 つのインジケーターが点灯しているのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **高度な設定にアクセスする**

下部のナビゲーションバーで「ユーザー」を選択し、「デバイス Bluetooth 設定」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

下にスクロールして「SenseCAP A1102」を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

SenseCAP A1102 の電源ボタンを **3 秒間**押し続けて、ペアリングモードを有効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

ペアリングが完了したら、SenseCraft AI アプリで **高度な設定** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

さらに設定オプションに進むには、再度 **高度な設定** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

## **AIモデルのデプロイ**

### **AIモデルの選択**
設定メニューから、デプロイするAIモデルを選択します。プリロードされたモデルから選ぶか、カスタムモデルをアップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **モデルパラメータの設定**

以下のようなパラメータを設定します：
- **信頼度レベル**: オブジェクト認識の閾値を調整します（例: 80%の信頼度）。
- **認識画像の保存**: 認識された画像をメモリーカードに保存するかどうかを有効化または無効化します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>


## **モデルのテストと実行**

### **カメラキャプチャのプレビュー**
モデルをデプロイした後、アプリ内でカメラがキャプチャした画像をプレビューして、モデルが期待通りに動作しているか確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **デバイス情報の確認**
アプリのホームページに戻り、A1102のデバイス情報（モデルの状態や接続状況など）を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **認識結果のレビュー**
認識データとログを確認します。例えば、報告間隔を設定（例: 5分ごと）して認識されたオブジェクトを追跡します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>


### **SDカードへのアクセス**
A1102ユニットの隙間を見つけ、ドライバーを挿入します。少し力を加えて開けます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

4つのネジ穴を見つけ、ノブを回して開けます。ネジが緩むように一定の力を加えながら回してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

ネジが緩んだら、カバーを取り外してSDカードスロットにアクセスします。その後、SDカードを取り出して保存された情報を読み取ることができます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **画像の自動保存**
A1102は8GBの内部メモリを備えており、認識された画像をメモリーカードに自動保存することができます。これらの画像は後で分析や報告のためにアクセスして取得できます。

:::tip
A1102は8GBのメモリを搭載しており、ターゲットが認識されると画像をメモリーカードに自動保存することが可能です。画像情報にアクセスする必要がある場合、メモリーカードから必要な画像データを直接抽出してアクセスできます。
:::

## **技術サポートと製品ディスカッション**

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>