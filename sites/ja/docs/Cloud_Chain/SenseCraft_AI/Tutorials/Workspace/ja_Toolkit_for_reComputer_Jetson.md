---
sidebar_position: 12
description: SenseCraft AI Jetson
title: reComputer Jetson用ツールキット
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-jetson
aliases:
  - /ja/sensecraft_ai_jetson
last_update:
  date: 08/16/2024
  author: Frank
---

SenseCraft AI-JetsonはNVIDIA Jetson Edge AIデバイス向けに設計された開発ツールキットおよびプラットフォームです。「クイックスタートスクリプト」を実行するだけで、事前に読み込まれた動画と事前に読み込まれたAIモデルを使用したサンプルアプリケーションを表示するインタラクティブなユーザーインターフェースが表示されます。独自のUSBカメラやIPカメラを追加したい場合は、数回のクリックで簡単に行うことができます！

すぐに使える様々な内蔵AIモデルに加えて、SenseCraft AIプラットフォーム上の多数のパブリックモデルにアクセスでき、特定のシナリオ向けのAIモデルをダウンロード・デプロイし、ニーズに基づいてパーソナライズされたAIソリューションを作成することができます。SenseCraft AIは、シンプルで柔軟かつ効率的な推論とソリューション構築機能を提供する、ビジョンAIのための知的意思決定パートナーです。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## SenseCraft AI-Jetsonのインストール

**ハードウェア要件**

- NVIDIA Jetsonデバイス
- イーサネット/WiFi経由のインターネット接続
- ディスプレイ

**ソフトウェア要件**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**クイックスタート**<br />

1. Jetsonをディスプレイに接続し、電源を入れます<br />
2. マウスとキーボードをデバイスに接続し、ターミナルで以下のコマンドを入力してアプリケーションを実行します

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. アプリケーションのインストール中に、以下のオプション設定を行う必要がありますので、ニーズに応じて設定してください

- **[オプション] jetson_clocksスクリプトを有効にして、CPU、GPU、EMCクロックを最大周波数に設定することでJetsonのパフォーマンスを最大化しますか？ [y/n] (デフォルト: y): y**<br />
CPU、GPU、EMCクロックを静的最大周波数に設定することで、Jetsonのパフォーマンスを最大化するjetson_clocksスクリプトを提供します。

- **[オプション] libreofficeなどの不要なパッケージをアンインストールし、スワップメモリのサイズを変更してスペースを節約しますか？ (/swapfile) [y/n] (デフォルト: n): n**<br />
メモリが不足している場合（特にjetson nano）、プログラムの正常な動作を確保するためにスワップを有効にすることをお勧めします。

- **[オプション] スワップメモリのサイズを作成または変更しますか？ (/swapfile)?**<br />
nanoからより良いパフォーマンスを得るために、スワップを有効にしてください。

- **[オプション] 外部ストレージを使用してDockerデータディレクトリを保存しますか？ (dockerイメージとボリューム用)?**<br />

- **(ルートパーティションが32GB未満の場合推奨). [y/n] (デフォルト: n): n**<br />

エッジAIプログラムの実行には最低32Gのストレージ容量が必要です。容量が不足している場合は、dockerデータボリュームを外部ディスクにマウントすることを選択できます。

4. これでSenseCraft AI-Jetsonを体験できます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **新しいモデルのデプロイ**

1. "AI Models"ページにアクセスし、必要なAIモデルを選択します<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. "Deploy Model"ボタンをクリックします

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. READMEを確認して、デバイスにSenseCraft AI-Jetsonがインストールされており、AIモデルがデバイスタイプに適合していることを確認します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. オンラインデバイスを選択します

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. AIモデルにはビデオストリームが必要です。ストリームがない場合は、まず有効なストリームを追加してください。Model zooはストリーム情報を直接デバイスに送信します。

:::note
ストリーム情報の詳細については、ストリーム管理をご確認ください
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. AIモデルとストリーム情報をデバイスに送信します。AIモデルのデプロイには数分かかりますので、現在のページを離れて数分後にデバイスでデプロイされたAIモデルを確認できます

### **ストリーム管理**

SenseCraft AI-Jetsonは複数のビデオストリームの追加をサポートし、必要に応じてUSBカメラとIPカメラの追加をサポートします。

追加できるビデオストリームの数は、デバイスのCPUとメモリリソースに依存します。デバイスのリソース使用量に注意してください。

#### **ストリームの追加**

1. ストリームページにアクセスし、+アイコンをクリックします<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. 新しいビデオストリームの有効なメッセージを設定します。詳細については以下の表をご確認ください<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **フィールド** | **内容** |
| --- | --- |
| **Stream Name** | 1 このストリームのカスタム名。<br />2 空にすることはできません |
| **Video Type** | 1 Ip camera：IPカメラにアクセス、有効なrtsp urlの入力が必要<br />2 Usb camera：usbカメラをデバイスに接続し、usbを自動認識してから、ビデオパスで正しいusbカメラを選択します。 |
| **Video Path** | ビデオパス、形式は"Video Type"によって決定されます。間違っている場合は、デフォルトビデオが使用されます。 |
| **Device AI Model** | 1 デバイスに既にダウンロードされているAIモデルを選択<br />2 デバイスにAIモデルがない場合は、AI Modelsページに移動してモデルをデバイスにダウンロードしてください。 |
| **Confidence Threshold** | 1 検出のためのオブジェクト信頼度閾値。<br />2 形式:float [0, 1] |
| **IoU Threshold** | 1 IoUは、真実の境界ボックスと比較して予測された境界ボックスの精度を評価するために使用されます2 形式:float [0, 1] |
| **FPS** | 1 ストリームの1秒あたりのフレーム数<br />2 形式: INT [1,60] |
| **Quality** | 1 出力ストリーム品質。デフォルト: 50<br />2 形式: int [0,100] |
| **Maximum Detections** | 1 画像あたりの最大検出数。デフォルト:3002 形式: int [0,1000] |
| **Display Frame Rate** | 1 ストリームのフレームレートを表示するかどうか<br />2 形式:Bool [True,False]<br />● True: FPSを表示<br />● False: FPSを表示しない |
| **Display Clock** | 1 時刻を表示するかどうか<br />2 形式:Bool [True,False]<br />● True: 時刻を表示<br />● False: 時刻を表示しない |

3. 「保存」ボタンをクリックしてホームページに戻り、新しいストリームとAI検出結果を確認します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **ストリームの削除**

ストリームの詳細に移動し、「削除」アイコンをクリックしてストリームを削除します<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **AIモデル管理**

デバイスにダウンロードされたすべてのAIモデルを管理します。

- AIモデルには、そのモデルを使用するストリームの名前が表示されます。<br />
- ストリームで使用されていないAIモデルは削除できます<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **設定**

#### **概要**

デバイス情報、詳細については以下の表を確認してください <br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **フィールド** | **内容** |
| --- | --- |
| **製品** | デバイスのモジュール |
| **IP** | デバイスのネットワークIPアドレス |
| **シリアル番号** | デバイスの固有の製造シリアル番号 |
| **MACアドレス** | ネットワークMACアドレス |
| **CPU使用率** | デバイスのCPU使用率 |
| **RAM** | デバイスのRAM |
| **スワップ** | デバイスのスワップ |
| **ディスク使用量** | デバイスのディスク使用量 |
| **Cudaバージョン** | デバイスにインストールされているCudaのバージョン |
| **Jetpackバージョン** | デバイスにインストールされているjetpackのバージョン |

#### **SenseCraft AI プラットフォームへのバインド**

SenseCraft AI -Jetsonはエッジ AI 用に設計されています。AI 推論とビデオストリーム処理はデバイス上でローカルに実行されます。より多くの AI モデルをダウンロードする必要がある場合のみ、デバイスを [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home) にバインドする必要があり、ダウンロード完了後はプラットフォームからデバイスを削除できます。

1. [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home) にアクセス<br />
2. 有効なメールアドレスで登録します。SenseCraft-AI Model Zoo アカウントは SenseCAP クラウドアカウントと同じです。すでに SenseCAP Cloud アカウントをお持ちの場合は、直接ログインできます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. 「Device Workspace」にアクセスし、「Add Device」ボタンをクリック<br />
4. デバイスのカスタム名を入力し、デバイスからバインドコードを取得します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. デバイスの SenseCraft AI アプリケーションに戻ります。「Bind to SenseCraft AI platform」をクリックすると、アプリケーションにバインドコードと一時的な名前が表示されます。

- Bind Code: [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home) で正しく有効なバインドコードを入力してデバイスのバインドを完了します。<br />
- Temporary Name: バインドコードが重複している場合は、正しい一時的な名前を入力する必要があります。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. 正しく有効なバインドコードを入力し、「Comfirm」ボタンをクリック<br />
7. バインドが成功しました。これで Model Zoo から新しい AI モデルを追加できます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **アンバインド**

AI プラットフォームでデバイスをリモート管理する必要がない場合は、AI プラットフォームのアカウントからデバイスを削除できます。デバイスから、またはプラットフォーム上でアンバインドできます<br />

- AI Model Zoo からデバイスをアンバインドするには、「Delete」をクリック<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- 「Bind to SenseCraft AI platform」を無効にしてデバイスをアンバインド<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

### **アプリの更新**

SenseCraft AI アプリの更新は自動更新と手動更新に分類され、必要に応じて設定できます。

**自動更新**: 5分ごとに更新をチェックし、新しいバージョンが検出されると、情報が自動的に更新され、手動で行う必要はありません。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**手動更新**: 手動で更新をチェックし、新しいバージョンが検出されたら Update ボタンをクリックして更新します

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

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
