---
sidebar_position: 13
description: SenseCraft AI プラットフォーム上の Nvidia Jetson ワークスペース
title: reComputer Jetson ワークスペース
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/nvidia-jetson-workspace
aliases:
  - /nvidia_jetson_workspace
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/nvidia-jetson-workspace/
---


## はじめに

Jetson デバイスをワークスペースに追加する前に、まず Jetson に SenseCraft AI アプリをインストールしてください。

SenseCraft AI-Jetson は、NVIDIA Jetson エッジ AI デバイス向けに設計された開発ツールキットおよびプラットフォームです。"Quickstart Script" を実行するだけで、あらかじめ用意された動画と AI モデルを使ったサンプルアプリケーションを表示できるインタラクティブなユーザーインターフェースが表示されます。USB カメラや IP カメラを追加したい場合も、数回クリックするだけで簡単に追加できます。

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
2. マウスとキーボードをデバイスに接続し、ターミナルで次のコマンドを入力してアプリケーションを実行します

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. アプリケーションのインストール中に、以下のオプション設定を行う必要があります。必要に応じて設定してください

- **[Optional] Enable jetson_clocks script to maximize Jetson performance by setting max frequency to CPU, GPU, and EMC clocks? [y/n] (default: y): y**<br />
CPU、GPU、EMC クロックの最大周波数を固定で設定することで Jetson の性能を最大化する `jetson_clocks` スクリプトを提供します。

- **[Optional] Save space by uninstalling some unnecessary packages like libreoffice, change the size of the Swap Memory? (/swapfile) [y/n] (default: n): n**<br />
メモリが不足している場合（特に Jetson Nano）、プログラムを正常に動作させるために Swap を有効にすることをお勧めします。

- **[Optional] Do you want to create or change the size of the Swap Memory? (/swapfile)?**<br />
Nano の性能をより引き出すには、Swap をオンにしてください。

- **[Optional] Use external · to store the Docker data directory? (for docker images & volumes)?**<br />

- **(Recommended if your root partition is smaller than 32 GB). [y/n] (default: n): n**<br />

エッジ AI プログラムを実行するには最低 32G のストレージ容量が必要です。満たない場合は、Docker のデータボリュームを外部ディスクにマウントすることを選択できます。

4. これで SenseCraft AI-Jetson を体験できます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### デバイスの追加

1. SenseCraft AI プラットフォームで **`Models`** > **`Workspace`** > **`NVIDIA Jetson`** に移動し、**`Add Device`** をクリックします。
2. デバイスのカスタム名を入力し、デバイスからバインドコードを取得します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. デバイスの SenseCraft AI アプリケーションに戻ります。"Bind to SenseCraft AI platform" をクリックすると、アプリケーションにバインドコードと一時名が表示されます。

- Bind Code: SenseCraft AI プラットフォーム上で正しく有効なバインドコードを入力して、デバイスのバインドを完了します。
- Temporary Name: バインドコードが重複している場合は、正しい一時名を入力する必要があります。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. 正しく有効なバインドコードを入力し、"Comfirm" ボタンをクリックします

5. バインドが成功すると、デバイスを管理できるようになります

:::note

各アカウントで追加できる無料デバイスは 5 台までです

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### デバイス情報

デバイス情報は、一般情報、ビデオストリーム情報、AI モデルの 3 つの部分に分かれています。

### 一般情報

デバイス情報は、一般情報、ビデオストリーム情報、AI モデルの 3 つの部分に分かれています。詳細は以下の表を確認してください。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **項目** | **内容** |
| --- | --- |
| **Device Name** | デバイスのカスタム名。ユーザーが名前を変更可能 |
| **Device SN** | デバイスの一意の製造シリアル番号 |
| **Device EUI** | デバイスの EUI |
| **Online Status** | Online: デバイスがオンライン<br />Offline: デバイスがオフライン。オフラインのデバイスは操作できません |
| **Equipped Module** | デバイスに搭載されているモジュール |
| **CPU Usage** | デバイスの CPU 使用率 |
| **Memory** | デバイスの RAM 使用量 |
| **Storage** | デバイスのディスク使用量 |
| **IP Address** | デバイスのネットワーク IP アドレス |
| **MAC Address** | デバイスの MAC アドレス |
| **SenseCraft AI Version** | デバイスにインストールされている SenseCraft AI アプリケーションのバージョン |
| **Collect Time** | デバイスから最後に情報を収集した時刻 |

### デバイスの削除

AI モデルのデプロイが完了し、デバイスをリモートで管理する必要がない場合は、プラットフォームからデバイスを削除できます。削除後も、デバイスはエッジ側でローカル推論、ストリーム管理、AI モデル管理を自律的に行うことができます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### ビデオストリーム管理

Video Stream では、リアルタイム推論結果をリモートで確認し、デバイスのビデオストリームを管理できます。ストリームの追加、編集、閲覧、削除をサポートします。

#### リアルタイム推論

デバイスにビデオストリームが追加されている場合、ユーザーはプラットフォーム上で全ストリームのリアルタイム推論結果を確認できます。推論結果や異常をリアルタイムで監視できます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### ストリームの追加

"Add Stream" をクリックして有効なストリーム情報を入力し、"Confirm" ボタンをクリックして新しいストリームをデバイスに送信します。デバイスが新しいストリームを追加するには時間がかかるため、プラットフォーム上の情報は後で更新されます。詳細情報は以下の表を確認してください。

:::note

新しいストリームを追加するには、デバイスがオンラインである必要があります

:::

| **項目** | **内容** |
| --- | --- |
| **Stream Name** | 1 このストリームのカスタム名<br />2 空欄にはできません |
| **Video Type** | 1 Ip camera：IP カメラにアクセスします。有効な RTSP URL を入力する必要があります<br />2 Usb camera：USB カメラをデバイスに接続すると USB を自動認識し、Video Path で正しい USB カメラを選択します。 |
| **Video Path** | Video Path。形式は "Video Type" によって決まります。誤っている場合はデフォルトの動画が使用されます。 |
| **Device AI Model** | 1 デバイスにすでにダウンロードされている AI モデルを選択します<br />2 デバイスに AI モデルがない場合は、AI Models ページに移動してモデルをデバイスにダウンロードしてください。 |
| **Confidence Threshold** | 1 検出のためのオブジェクト信頼度しきい値<br />2 形式: float [0, 1] |
| **IoU Threshold** | 1 IoU は、予測されたバウンディングボックスと真のバウンディングボックスを比較して精度を評価するために使用されます2 形式: float [0, 1] |
| **FPS** | 1 ストリームのフレームレート（Frames per second）<br />2 形式: INT [1,60] |
| **Quality** | 1 出力ストリームの画質。デフォルト: 50<br />2 形式: int [0,100] |
| **Maximum Detections** | 1 画像あたりの最大検出数。デフォルト: 3002 形式: int [0,1000] |
| **Display Frame Rate** | 1 ストリームのフレームレートを表示するかどうか<br />2 形式: Bool [True,False]<br />● True: FPS を表示<br />● False: FPS を表示しない |
| **Display Clock** | 1 時刻を表示するかどうか<br />2 形式: Bool [True,False]<br />● True: 時刻を表示<br />● False: 時刻を表示しない |

#### ストリーム詳細

ストリームの "Eye" アイコンをクリックすると、ストリームの詳細情報を表示できます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### ストリームの編集

ストリームの "Edit" アイコンをクリックすると、ユーザーはストリームのすべての設定を編集でき、"Confirm" ボタンをクリックして変更されたストリーム情報をデバイスに送信できます。デバイスがストリーミング設定を更新するには時間がかかるため、プラットフォーム上の情報は後で更新されます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### ストリームの削除

ストリームの "Delete" アイコンをクリックしてストリームを削除します。デバイスがストリームを削除するには時間がかかるため、プラットフォーム上の情報は後で更新されます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### デバイス AI モデル

デバイスにダウンロード済みのすべての AI モデルを管理し、モデルの追加、モデル詳細の表示、モデルの削除をサポートします。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

## **技術サポート**

**reComputer Jetson でお困りですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
/div>
