---
description: SenseCraft AI プラットフォーム上の Grove Vision AI v2 ワークスペース
title: SenseCraft AI プラットフォーム上の Grove Vision AI v2 ワークスペース
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /ja/sensecraft-ai/grove-vision-ai-v2-workspace
aliases:
  - /ja/grove_vision_ai_v2_workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## はじめに

### Grove-Vision AI v2 の接続

1. CSI 接続ケーブルを使用して、Grove - Vision AI V2 をカメラに接続します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

2. USB を使用して Grove - Vision AI V2 をコンピュータに接続し、USB Single/serial debug unit を選択して接続します。

:::note

XIAO ESP32S3 Sense と Grove Vision AI v2 に AI モデルをデプロイするには、Chrome、Opera、または Edge をご使用ください。

:::

3. デバイスに接続すると、デバイス情報、モデル情報を読み取り、モデルを実行して推論を行います。ユーザーは Confidence と IoU の設定を調整して、モデルの推論精度を微調整できます。

- Confidence：Confidence は、モデルがその予測に割り当てる確実性または確率のレベルを指します
- IoU：IoU は、真値のバウンディングボックスと比較して、予測されたバウンディングボックスの精度を評価するために使用されます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image11.png)

### AI モデルの置き換え

デバイスで現在実行中のモデルを置き換える必要がある場合、SenseCrfat AI プラットフォームでは 2 つの方法を提供しています。

1. SenseCraft AI プラットフォームで公開されているモデルまたはユーザーアカウント下のモデルを選択して置き換えます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image12.png)

2. モデルを直接アップロードして置き換えます。

- Model Name：名前を入力
- Model File：tflite 形式のモデルをアップロード
- ID Object：モデル認識のクラス

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image13.png)

### 設定

デバイスからの推論結果を独自の MQTT サービスまたは Sensecraft Data プラットフォームにプッシュする必要がある場合は、Wi-Fi と MQTT を設定してください。次に、Sensecraft Data プラットフォームを例として使用します。

1. 有効な 2.4G Wi-Fi を入力します。
2. [SenseCraft Data プラットフォーム](https://sensecap.seeed.cc/portal/#/login)にアクセスしてログインします。

:::note

Sensecraft AI と Sensecraft Data プラットフォームの両方に同じアカウントでログインできます。

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image14.png)

3. Development Kit ページにアクセスし、「Create Development Kit」ボタンをクリックします。
4. デバイス名を入力し、デバイスタイプとして「Grove-Vision AI v2」を選択します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image15.png)

5. デバイスが作成されたら、「connect」をクリックし、Host、Port、clientId、Username、Password を順次コピーして貼り付けます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image16.jpg)

6. フォームの入力が完了したら、Save ボタンをクリックします。デバイスが変更を正常に適用したら、Process ページに移動します。IP Address と Service Status: MQTT connected が表示されます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image17.png)

7. これで Sensecraft Data プラットフォームの Development Kit ページに戻ることができます。デバイスの EUI をクリックしてデバイス詳細に入ると、推論結果を確認できます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image18.png)

### 出力

検出されたターゲットが条件を満たした場合に、XIAO ESP32S3 の黄色 LED が点灯するように条件を設定します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image19.png)

例：デバイスが Face を検出し、信頼度が 43 より大きい場合、デバイスの黄色 LED を点灯させる

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image20.png)

### トレーニング

SenseCraft AI は YoLo-World を統合して、ユーザー入力クラスに基づいて単一クラス AI モデルを迅速に生成し、Grove-Vision AI v2 デバイスに直接デプロイできます。

### クイック生成

1. クラスを入力し、Quick Generate ボタンをクリックして、モデルが生成されるまで待ちます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image21.png)

2. モデルが生成されたら、モデルを選択し、Deploy to device ボタンをクリックして、生成されたモデルをデバイスにフラッシュします。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image22.jpg)

3. 推論結果を確認します

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image23.png)

### キャプチャしてトレーニング

迅速に生成されたモデルは精度が高くない場合があります。Capture to Train をクリックして、ターゲット画像を撮影・収集できます。収集した画像を Yolo-World に送信して最適化トレーニングを行います。最適化されたモデルはより良い精度を持ちます。

1. Grove-Vision AI v2 カメラをターゲットに向け、Capture ボタンをクリックして画像を収集します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image24.png)

2. キャプチャした画像でターゲットを選択して確認します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image25.png)

3. ステップ 1-2 を繰り返して、トレーニング用に少なくとも 10 枚の写真を収集します。画像の収集が完了したら、Train Model ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image26.png)

4. モデルが生成されたら、新しく生成されたモデルを選択し、デバイスにデプロイして、推論結果を確認します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image27.png)

## **技術サポート**

**SenseCAP Indicatorでお困りですか？私たちがサポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
