---
sidebar_position: 13
description: Nvidia Jetson Workspace on SenseCraft AI Platform
title: reComputer Jetson Workspace
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft-ai/tutorials/nvidia-jetson-workspace
aliases:
  - /ja/nvidia_jetson_workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## はじめに

Jetsonデバイスをワークスペースに追加する前に、まずJetsonにSenseCraft AIアプリをインストールしてください。

SenseCraft AI-JetsonはNVIDIA Jetson Edge AIデバイス向けに設計された開発ツールキットおよびプラットフォームです。「クイックスタートスクリプト」を実行するだけで、事前に読み込まれた動画と事前に読み込まれたAIモデルを使用したサンプルアプリケーションを表示するインタラクティブなユーザーインターフェースが表示されます。独自のUSBカメラやIPカメラを追加したい場合は、数回のクリックで簡単に行うことができます！

**ハードウェア要件**

- NVIDIA Jetsonデバイス
- Ethernet/WiFi経由のインターネット接続
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

- **[オプション] libreofficeなどの不要なパッケージをアンインストールしてスペースを節約し、スワップメモリのサイズを変更しますか？ (/swapfile) [y/n] (デフォルト: n): n**<br />
メモリが不足している場合（特にjetson nano）、プログラムの正常な動作を確保するためにスワップを有効にすることをお勧めします。

- **[オプション] スワップメモリのサイズを作成または変更しますか？ (/swapfile)?**<br />
nanoからより良いパフォーマンスを得るために、スワップを有効にしてください。

- **[オプション] 外部ディスクを使用してDockerデータディレクトリを保存しますか？ (dockerイメージとボリューム用)?**<br />

- **(ルートパーティションが32GB未満の場合は推奨). [y/n] (デフォルト: n): n**<br />

エッジAIプログラムの実行には最低32Gのストレージ容量が必要です。容量が不足している場合は、dockerデータボリュームを外部ディスクにマウントすることを選択できます。

4. これでSenseCraft AI-Jetsonを体験できます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### デバイスの追加

1. Device Workspace Pageで「Add Device」ボタンをクリックします
2. デバイスのカスタム名を入力し、デバイスからバインドコードを取得します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. デバイスのSenseCraft AIアプリケーションに戻ります。「Bind to SenseCraft AI platform」をクリックすると、アプリケーションにバインドコードと一時的な名前が表示されます。

- Bind Code: デバイスのバインドを完了するために、SenseCraft AI-Model Zooで正しく有効なバインドコードを入力してください。
- Temporary Name: バインドコードが重複している場合は、正しい一時的な名前を入力する必要があります。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. 正しく有効なバインドコードを入力し、「Confirm」ボタンをクリックします

5. バインドが成功しました。これでデバイスを管理できます

:::note

各アカウントは5台の無料デバイスのみ追加できます

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### デバイス情報

デバイス情報は、一般情報、ビデオストリーム情報、AIモデルの3つの部分に分かれています。

### 一般情報

デバイス情報は、一般情報、ビデオストリーム情報、AIモデルの3つの部分に分かれています。詳細については以下の表をご確認ください

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **フィールド** | **内容** |
| --- | --- |
| **Device Name** | デバイスのカスタム名、ユーザーが名前を変更可能 |
| **Device SN** | デバイスの固有製造シリアル番号 |
| **Device EUI** | Device EUI |
| **Online Status** | Online: デバイスがオンライン<br />Offline: デバイスがオフライン、ユーザーはオフラインデバイスを操作できません |
| **Equipped Module** | デバイスのモジュール |
| **CPU Usage** | デバイスのCPU使用率 |
| **Memory** | デバイスのRAM使用量 |
| **Storage** | デバイスのディスク使用量 |
| **IP Address** | デバイスのネットワークIPアドレス |
| **MAC Address** | デバイスのMACアドレス |
| **SenseCraft AI Version** | デバイスにインストールされているSenseCraft AIアプリケーションのバージョン |
| **Collect Time** | デバイスから最後に情報が収集された時刻 |

### デバイスの削除

AIモデルのデプロイが完了し、デバイスをリモートで管理する必要がない場合は、プラットフォームからデバイスを削除することができます。デバイスはエッジで独立してローカル推論、ストリーム管理、AIモデル管理を行うことができます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### ビデオストリーム管理

ビデオストリームでは、リアルタイムの推論結果をリモートで表示し、デバイスのビデオストリームを管理できます。ストリームの追加、編集、表示、削除をサポートしています。

#### リアルタイム推論

デバイスにビデオストリームが追加されている場合、ユーザーはプラットフォーム上ですべてのストリームのリアルタイム推論結果を表示できます。推論結果と例外のリアルタイム監視が可能です。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### ストリームの追加

「ストリームを追加」をクリックし、有効なストリーム情報を入力してから「確認」ボタンをクリックして、新しいストリームをデバイスに送信します。デバイスが新しいストリームを追加するには時間がかかり、プラットフォーム情報は後で更新されます。詳細情報については以下の表をご確認ください。

:::note

新しいストリームを追加するには、デバイスがオンラインである必要があります

:::

| **フィールド** | **内容** |
| --- | --- |
| **ストリーム名** | 1 このストリームのカスタム名。<br />2 空にすることはできません |
| **ビデオタイプ** | 1 IPカメラ：IPカメラにアクセスし、有効なrtsp urlを入力する必要があります<br />2 USBカメラ：USBカメラをデバイスに接続し、USBを自動認識してから、ビデオパスで正しいUSBカメラを選択します。 |
| **ビデオパス** | ビデオパス、形式は「ビデオタイプ」によって決定されます。間違っている場合は、デフォルトビデオが使用されます。 |
| **デバイスAIモデル** | 1 デバイスに既にダウンロードされているAIモデルを選択<br />2 デバイスにAIモデルがない場合は、AIモデルページに移動してモデルをデバイスにダウンロードしてください。 |
| **信頼度閾値** | 1 検出のためのオブジェクト信頼度閾値。<br />2 形式：float [0, 1] |
| **IoU閾値** | 1 IoUは、真実の境界ボックスと比較して予測された境界ボックスの精度を評価するために使用されます2 形式：float [0, 1] |
| **FPS** | 1 ストリームの1秒あたりのフレーム数<br />2 形式：INT [1,60] |
| **品質** | 1 出力ストリーム品質。デフォルト：50<br />2 形式：int [0,100] |
| **最大検出数** | 1 画像あたりの最大検出数。デフォルト：3002 形式：int [0,1000] |
| **フレームレート表示** | 1 ストリームのフレームレートを表示するかどうか<br />2 形式：Bool [True,False]<br />● True：FPSを表示<br />● False：FPSを表示しない |
| **時計表示** | 1 時刻を表示するかどうか<br />2 形式：Bool [True,False]<br />● True：時刻を表示<br />● False：時刻を表示しない |

#### ストリーム詳細

ストリームの「目」アイコンをクリックすると、ストリームの詳細情報を表示できます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### ストリーム編集

ストリームの「編集」アイコンをクリックすると、ユーザーはストリームのすべての設定を編集でき、「確認」ボタンをクリックして変更されたストリーム情報をデバイスに送信できます。デバイスがストリーミング設定を更新するのに時間がかかるため、プラットフォーム情報は後で更新されます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### ストリーム削除

ストリームの「削除」アイコンをクリックしてストリームを削除します。デバイスがストリームを削除するのに時間がかかるため、プラットフォーム情報は後で更新されます

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### デバイス AI モデル

デバイスにダウンロードされたすべての AI モデルを管理し、モデルの追加、モデル詳細の表示、モデルの削除をサポートします。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

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
