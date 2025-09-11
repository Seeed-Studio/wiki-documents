---
description: SenseCraft AI プラットフォーム上の XIAO ESP32S3 ワークスペース
title: SenseCraft AI プラットフォーム上の XIAO ESP32S3 ワークスペース
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /ja/sensecraft-ai/xiao-esp32s3-workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## はじめに

### XIAO ESP32S3 の接続

1. カメラセンサー拡張ボードのコネクタを XIAO ESP32S3 Sense の B2B コネクタに合わせて押し込み、カメラセンサーを取り付けます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

2. XIAO ESP32S3 Sense を USB でコンピュータに接続し、USB JAG/シリアルデバッグユニットを選択してデバイスに接続します。

:::note

XIAO ESP32S3 Sense と Grove Vision AI v2 に AI モデルをデプロイするには、Chrome、Opera、または Edge をご使用ください。

:::

3. デバイスに接続すると、デバイス情報、モデル情報を読み取り、モデルを実行して推論を行います。ユーザーは Confidence と IoU の設定を調整して、モデルの推論精度を微調整できます。

- Confidence：信頼度とは、モデルがその予測に割り当てる確実性または確率のレベルを指します
- IoU：IoU は、真値のバウンディングボックスと比較して予測されたバウンディングボックスの精度を評価するために使用されます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image5.png)

### AI モデルの置き換え

デバイスで現在実行中のモデルを置き換える必要がある場合、SenseCrfat AI プラットフォームでは 2 つの方法を提供しています

1. SenseCraft AI プラットフォーム上で公開されているモデルまたはユーザーアカウント下のモデルを選択して置き換えます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image6.png)

2. モデルを直接アップロードして置き換えます。

- Model Name：名前を入力
- Model File：tflite 形式のモデルをアップロード
- ID Object：モデル認識のクラス

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image7.png)

### 出力

検出されたターゲットが条件を満たした場合に、XIAO ESP32S3 の黄色 LED が点灯するように条件を設定します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image8.png)

例：デバイスが Face を検出し、信頼度が 43 より大きい場合、デバイスの黄色 LED を点灯させる

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image9.png)

## **技術サポート**

**SenseCAP Indicator でお困りですか？サポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>