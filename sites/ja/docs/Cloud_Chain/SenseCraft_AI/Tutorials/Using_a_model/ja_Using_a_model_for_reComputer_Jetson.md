---
sidebar_position: 4
description: SenseCraft AIプラットフォームでJetsonにモデルをデプロイする
title: reComputer Jetson用モデルの使用
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/sensecraft-ai/tutorials/sensecraft-deploy-model-to-jetson
aliases:
  - /ja/sensecraft_deploy_model_to_jetson
last_update:
  date: 08/22/2024
  author: Frank
---

## はじめに

SenseCraft AIプラットフォームは、Jetson orinやXIAO ESPS3などのエッジデバイスにAIモデルをデプロイする非常にシンプルな方法を提供します。シームレスなエッジAIモデルデプロイメントをお楽しみください！<br />

1. Jetsonデバイス用のAIモデルを選択またはアップロード<br />
2. AIモデルの詳細にアクセスし、「Deploy Model」ボタンをクリック<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/10.png)

### **ステップ1  SenseCraft AI-Jetsonのインストール**

1. JetsonデバイスにSenseCraft AIがすでにインストールされている場合は、直接ステップ2に進んでください

2. Jetsonをディスプレイに接続し、電源を入れます

3. マウスとキーボードをデバイスに接続し、ターミナルで以下のコマンドを入力してアプリケーションを実行します

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/11.png)

4. SenseCraft AI-Jetsonのインストールが完了しました。ステップ2に進んでください<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/12.png)

### **ステップ2  デバイスの選択**
1. すでにデバイスをプラットフォームに追加している場合は、直接デバイスを選択し、「次へ」をクリックしてステップ3に進んでください<br />


![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/13.png)

2. 新しいデバイスを追加する必要がある場合は、「Add Device」ボタンをクリックすると、デバイス追加ウィンドウが表示されます<br />
3. デバイス名を入力します<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/14.png)

4. デバイス上のSenseCraft AI-Jetsonアプリケーションにアクセスし、設定ページに移動します<br />
5. 「Bind to SenseCraft AI platform」設定を有効にし、バインドコードを取得します<br />
6. SenseCraft AIプラットフォームに戻り、有効なバインドコードを入力して追加を完了します<br />

:::note
このバインドコードが重複している場合は、一時的な名前を入力する必要があります。
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/15.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/16.png)

7. デバイスを選択し、「次へ」をクリックしてステップ3に進みます

### **ステップ3  ストリームの選択**
1. デバイスの既存のビデオストリームにAIモデルを適用したい場合は、直接ビデオストリームを選択し、「Send」をクリックしてモデルをデバイスに送信します<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/17.png)

2. 新しいビデオストリームにAIモデルを適用したい場合は、「Add Stream」ボタンをクリックし、新しいストリームの情報を入力します<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/18.png)

ストリーム情報の詳細については、以下の表を確認してください

| **フィールド** | **内容** |
| --- | --- |
| **Stream Name** | 1 このストリームのカスタム名<br />2 空にすることはできません |
| **Video Type** | 1 IPカメラ：IPカメラにアクセス、有効なrtsp urlの入力が必要<br />2 USBカメラ：USBカメラをデバイスに接続、USBを自動認識し、ビデオパスで正しいUSBカメラを選択<br />3 ビデオ：デバイスに内蔵されたビデオ、ビデオパスに入力 |
| **Video Path** | ビデオパス、形式は「Video Type」によって決定、間違っている場合はデフォルトビデオが使用されます |
| **Confidence Threshold** | 1 検出のためのオブジェクト信頼度閾値<br />2 形式：float [0, 1] |
| **IoU Threshold** | 1 IoUは真実のバウンディングボックスと比較して予測されたバウンディングボックスの精度を評価するために使用されます<br />2 形式：float [0, 1] |
| **FPS** | 1 ストリームの1秒あたりのフレーム数<br />2 形式：INT [1,60] |
| **Quality** | 1 出力ストリーム品質。デフォルト：50<br />2 形式：int [0,100] |
| **Maximum Detections** | 1 画像あたりの最大検出数。デフォルト：300<br />2 形式：int [0,1000] |
| **Display Frame Rate** | 1 ストリームのフレームレートを表示するかどうか<br />2 形式：Bool [True,False]<br />● True：FPSを表示<br />● False：FPSを表示しない |
| **Display Clock** | 1 時刻を表示するかどうか<br />2 形式：Bool [True,False]<br />● True：時刻を表示<br />● False：時刻を表示しない |

3. 「Send」ボタンをクリックしてモデルをデバイスに送信します。モデルのデプロイメントには約5分かかります。プレビューページを閉じて、デプロイメント完了後にデバイスワークスペースで確認してください。

4. デバイス上またはAIプラットフォームのデバイスワークスペースで新しいモデルを確認します<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/19.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/20.png)


## **技術サポート**

**SenseCAP Indicatorでお困りですか？サポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>