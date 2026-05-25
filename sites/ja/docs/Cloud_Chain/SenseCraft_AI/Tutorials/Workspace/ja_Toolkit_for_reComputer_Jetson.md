---
sidebar_position: 12
description: SenseCraft AI Jetson
title: reComputer Jetson 用ツールキット
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/sensecraft-ai-jetson
aliases:
  - /sensecraft_ai_jetson
last_update:
  date: 08/16/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-jetson/
---

SenseCraft AI-Jetson は、NVIDIA Jetson エッジ AI デバイス向けに設計された開発ツールキットおよびプラットフォームです。"Quickstart Script" を実行するだけで、事前に読み込まれた動画と AI モデルを用いたサンプルアプリケーションを確認できるインタラクティブなユーザーインターフェースが表示されます。独自の USB カメラや IP カメラを追加したい場合も、数回クリックするだけで簡単に追加できます。

標準で提供されるさまざまな組み込み AI モデルに加えて、SenseCraft AI プラットフォーム上の多数の公開モデルにアクセスでき、特定のシナリオ向けに AI モデルをダウンロードしてデプロイし、ニーズに基づいたパーソナライズされた AI ソリューションを作成できます。SenseCraft AI はビジョン AI のインテリジェントな意思決定パートナーとして、シンプルで柔軟かつ効率的な推論およびソリューション構築機能を提供します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## SenseCraft AI-Jetson のインストール

**ハードウェア要件**

- NVIDIA Jetson デバイス
- Ethernet / WiFi によるインターネット接続
- ディスプレイ

**ソフトウェア要件**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**クイックスタート**<br />

1. Jetson をディスプレイに接続し、電源を入れます<br />
2. デバイスにマウスとキーボードを接続し、ターミナルで次のコマンドを入力してアプリケーションを実行します

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. アプリケーションのインストール中に、以下のオプション設定を行う必要があります。必要に応じて設定してください

- **[Optional] Enable jetson_clocks script to maximize Jetson performance by setting max frequency to CPU, GPU, and EMC clocks? [y/n] (default: y): y**<br />
CPU、GPU、EMC クロックの静的な最大周波数を設定することで Jetson の性能を最大化する `jetson_clocks` スクリプトを提供します。

- **[Optional] Save space by uninstalling some unnecessary packages like libreoffice, change the size of the Swap Memory? (/swapfile) [y/n] (default: n): n**<br />
メモリが不足している場合（特に Jetson Nano）、プログラムを正常に動作させるために Swap を有効にすることをお勧めします。

- **[Optional] Do you want to create or change the size of the Swap Memory? (/swapfile)?**<br />
Nano の性能をより引き出すには、Swap を有効にしてください。

- **[Optional] Use external · to store the Docker data directory? (for docker images & volumes)?**<br />

- **(Recommended if your root partition is smaller than 32 GB). [y/n] (default: n): n**<br />

エッジ AI プログラムを実行するには最低 32G のストレージ容量が必要です。満たない場合は、Docker のデータボリュームを外部ディスクにマウントすることを選択できます。

4. これで SenseCraft AI-Jetson を体験できます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **新しいモデルのデプロイ**

1. “AI Models“ ページにアクセスし、必要な AI モデルを選択します<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. "Deploy Model" ボタンをクリックします

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. Readme を確認し、デバイスに SenseCraft AI-Jetson がインストールされていることと、AI モデルがデバイスタイプに適合していることを確認します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. オンラインのデバイスを 1 台選択します

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. AI モデルには動画ストリームの適用が必要です。ストリームがない場合は、まず有効なストリームを追加してください。Model zoo はストリーム情報を直接デバイスに送信します。

:::note
ストリーム情報の詳細な説明については Streams Management を確認してください
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. AI モデルとストリーム情報をデバイスに送信します。AI モデルのデプロイには数分かかるため、現在のページを離れて数分後にデバイス側でデプロイ済みの AI モデルを確認できます

### **Streams 管理**

SenseCraft AI-Jetson は複数の動画ストリームの追加をサポートしており、必要に応じて USB カメラや IP カメラを追加できます。

追加できる動画ストリームの数は、デバイスの CPU およびメモリリソースに依存します。デバイスのリソース使用状況に注意してください。

#### **ストリームの追加**

1. Streams ページにアクセスし、+ アイコンをクリックします<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. 新しい動画ストリームの有効な情報を設定します。詳細は以下の表を確認してください<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **項目** | **内容** |
| --- | --- |
| **Stream Name** | 1 このストリーム用のカスタム名<br />2 空欄にはできません |
| **Video Type** | 1 Ip camera：IP カメラへアクセスします。有効な RTSP URL を入力する必要があります<br />2 Usb camera：USB カメラをデバイスに接続すると自動的に USB を認識し、その後 Video Path で正しい USB カメラを選択します。 |
| **Video Path** | Video Path。形式は "Video Type" によって決まります。誤っている場合はデフォルト動画が使用されます。 |
| **Device AI Model** | 1 すでにデバイスにダウンロードされている AI モデルを選択します<br />2 デバイスに AI モデルがない場合は、AI Models ページに移動してモデルをデバイスにダウンロードしてください。 |
| **Confidence Threshold** | 1 検出のためのオブジェクト信頼度しきい値<br />2 形式: float [0, 1] |
| **IoU Threshold** | 1 IoU は、予測されたバウンディングボックスと正解のバウンディングボックスの精度を評価するために使用されます2 形式: float [0, 1] |
| **FPS** | 1 ストリームのフレームレート（Frames per second）<br />2 形式: INT [1,60] |
| **Quality** | 1 出力ストリームの画質。デフォルト: 50<br />2 形式: int [0,100] |
| **Maximum Detections** | 1 1 画像あたりの最大検出数。デフォルト: 3002 形式: int [0,1000] |
| **Display Frame Rate** | 1 ストリームのフレームレートを表示するかどうか<br />2 形式: Bool [True,False]<br />● True: FPS を表示<br />● False: FPS を表示しない |
| **Display Clock** | 1 時刻を表示するかどうか<br />2 形式: Bool [True,False]<br />● True: 時刻を表示<br />● False: 時刻を表示しない |

3. "Save" ボタンをクリックし、ホームページに戻って新しいストリームと AI 検出結果を確認します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **ストリームの削除**

ストリームの詳細ページに移動し、"Delete" アイコンをクリックしてストリームを削除します<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **AI モデル管理**

デバイスにダウンロード済みのすべての AI モデルを管理します。

- AI モデルには、そのモデルを使用しているストリーム名が表示されます。<br />
- ストリームで使用されていない AI モデルは削除できます<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **設定**

#### **About**

デバイス情報です。詳細は以下の表を確認してください <br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **項目** | **内容** |
| --- | --- |
| **Product** | デバイスのモジュール |
| **IP** | デバイスのネットワーク IP アドレス |
| **Serial number** | デバイスの一意の製造シリアル番号 |
| **MAC address** | ネットワーク MAC アドレス |
| **CPU Usage** | デバイスの CPU 使用率 |
| **RAM** | デバイスの RAM |
| **Swap** | デバイスの Swap |
| **Disk usage** | デバイスのディスク使用量 |
| **Cuda version** | デバイスにインストールされている Cuda のバージョン |
| **Jetpack version** | デバイスにインストールされている JetPack のバージョン |

#### **SenseCraft AI プラットフォームへのバインド**

SenseCraft AI for Jetson はエッジ AI 向けに設計されています。AI 推論と動画ストリーム処理はデバイス上でローカルに実行されます。より多くの AI モデルをダウンロードする必要がある場合にのみ、デバイスを [SenseCraft AI プラットフォーム](https://sensecraft.seeed.cc/ai) にバインドする必要があります。ダウンロード後はデバイスを削除できます。

1. [SenseCraft AI](https://sensecraft.seeed.cc/ai) にアクセスします。<br />
2. 有効なメールアドレスで登録します。SenseCraft AI アカウントは SenseCAP Cloud アカウントと共通であり、すでにお持ちの場合はそのままログインできます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. **`Models`** > **`Workspace`** > **`NVIDIA Jetson`** に移動し、**`Add Device`** をクリックします。<br />
4. デバイスのカスタム名を入力し、デバイスからバインドコードを取得します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. デバイス側の SenseCraft AI アプリケーションに戻ります。"Bind to SenseCraft AI platform" をクリックすると、アプリケーションにバインドコードと一時名が表示されます。

- Bind Code: デバイスのバインドを完了するには、[SenseCraft AI プラットフォーム](https://sensecraft.seeed.cc/ai) 上で正しく有効なバインドコードを入力します。<br />
- Temporary Name: バインドコードが重複している場合は、正しい一時名を入力する必要があります。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. 正しく有効なバインドコードを入力し、"Comfirm" ボタンをクリックします<br />
7. バインドが成功すると、model zoo から新しい AI モデルを追加できるようになります

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **Ubind**

AI プラットフォーム上でデバイスをリモート管理する必要がなくなった場合は、AI プラットフォームのアカウントからデバイスを削除できます。デバイス側またはプラットフォーム側のどちらからでもバインド解除が可能です<br />

- AI model zoo からデバイスのバインドを解除するには、"Delete" をクリックします<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- "Bind to SenseCraft AI platform" を無効にしてデバイスのバインドを解除します<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

### **アプリのアップデート**

SenseCraft AI アプリのアップデートは自動更新と手動更新に分類されており、ニーズに応じて設定できます。

**自動更新**: 5 分ごとにアップデートを確認し、新しいバージョンが検出されると情報が自動的に更新され、手動で行う必要はありません。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**手動更新**: 手動でアップデートを確認し、新しいバージョンが検出されたら Update ボタンをクリックして更新します

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

## **技術サポート**

**SenseCAP Indicator でお困りですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
