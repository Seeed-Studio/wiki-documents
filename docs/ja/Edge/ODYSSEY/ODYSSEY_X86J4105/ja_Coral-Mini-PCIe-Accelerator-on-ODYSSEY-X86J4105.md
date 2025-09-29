---
description: ODYSSEY - X86J41x5
title: ODYSSEY 用 Coral Mini PCIe Accelerator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Coral-Mini-PCIe-Accelerator-x86
last_update:
  date: 05/15/2025
  author: Lakshantha

---


<!-- ---
name: Coral-Mini-PCIe-Accelerator-x86
category: Platform
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 114992124
tags:
--- -->

![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)

ODYSSEY X86J41x5 上の Coral Mini PCIe Accelerator は、既存のシステムや製品にエッジ TPU コプロセッサを提供する M.2 モジュールです。

エッジ TPU は Google によって設計された小型の ASIC で、低消費電力で高性能な機械学習推論を提供します。これは、1 秒間に 4 兆回の演算（テラオペレーション）を実行でき、1 テラオペレーションあたり 0.5 ワット（1 ワットあたり 2 テラオペレーション）を使用します。例えば、MobileNet v2 のような最先端のモバイルビジョンモデルを、ほぼ 400 fps で電力効率よく実行できます。このオンデバイス処理により、遅延が削減され、データプライバシーが向上し、常時高帯域幅接続の必要性がなくなります。

M.2 Accelerator はデュアルキー M.2 カード（B+M キー）で、互換性のある M.2 スロットに適合するよう設計されています。このフォームファクタにより、ARM および x86 プラットフォームへの簡単な統合が可能となり、組み込みプラットフォーム、ミニ PC、産業用ゲートウェイなどの製品にローカル ML アクセラレーションを追加できます。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)

## 特徴

* 高速な機械学習推論を実行
* Debian Linux に対応
* TensorFlow Lite をサポート
* [AutoML Vision Edge](https://cloud.google.com/vision/automl/docs/edge-quickstart) をサポート

## 仕様

|物理仕様  | 値  |
|------|--------------|
|寸法| B+M キー: 22.00 x 80.00 x 2.35 mm  |
|重量| B+M キー: 5.8 g|
|ホストインターフェース|
|ハードウェアインターフェース| M.2 B+M キー (M.2-2280-B-M-S3)|
|シリアルインターフェース| PCIe Gen2 x1|
|動作電圧|  |
|DC 電源供給|  3.3V +/- 10 %|
|環境信頼性| |
|温度| -40 ~ 85°C（保管時） -20 ~ 70°C（動作時）|
|相対湿度|  0 ~ 100%（結露しないこと）|
|機械的信頼性| |
|動作衝撃| 100 G, 11ms（持続）1000 G, 0.5 ms（ストレス）1000 G, 1.0 ms（ストレス） |
|動作振動（ランダム）| 0.5 Grms, 5 - 500 Hz（持続）3 Grms, 5 - 800 Hz（ストレス）|
|動作振動（正弦波）|0.5 Grms, 5 - 500 Hz（持続）3 Grms, 5 - 800 Hz（ストレス）|

## ハードウェア概要

![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/hardware.jpg)

## はじめに

### ODYSSEY - X86J4105 を使う

**必要な材料**

| Coral Mini PCIe Accelerator | ODYSSEY  X86J41x5 |
|--------------|-------------|
|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/PC.png)|
|[今すぐ購入](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)|[今すぐ購入](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html)|

#### ハードウェア接続

ハードウェア接続の手順は非常に簡単です。

* **ステップ 1.** Coral Mini PCIe Accelerator を ODYSSEY - X86J41x5 に接続します。
* **ステップ 2.** ODYSSEY - X86J41x5 に電源を接続します。
* **ステップ 3.** ODYSSEY - X86J41x5 に電源とディスプレイを接続します。
* **ステップ 4.** ODYSSEY - X86J41x5 にキーボードとマウスを接続します。
* **ステップ 5.** ネットワークケーブルがある場合は、ODYSSEY - X86J41x5 に接続してください。

## ソフトウェア

ハードウェア接続が完了したら、次のステップはソフトウェアの問題を解決することです。ここでは、PCIe ドライバー、Edge TPU ランタイム、および TensorFlow Lite ランタイムをインストールする手順を説明します。

まず必要なのは Linux コンピュータです。以下の手順に従ってください。

* x86-64、ARMv7 (32ビット)、または ARMv8 (64ビット) システムを選択できます。

   ODYSSEY - X86J41x5 に Linux OS (Ubuntu Desktop 18.04) をインストールする方法については、[ブータブル USB ドライブを作成して Linux OS をインストールする方法](https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-OS/)を参照してください。

* ODYSSEY X86J41x5 上で利用可能な Coral Mini PCIe Accelerator

* Debian 6.0 Linux ディストリビューション以上、またはその派生版 (例: Ubuntu 10.0+)

* Python 3.5 以上

Uディスクのブートディスクを作成し、Linux OS ファイルをインストールした後、次のステップに進むことができます。

## 1. PCIe ドライバーのインストール

事前にビルドされた Apex ドライバーをインストールしている場合、Edge TPU が動作しなくなる可能性があるため、そのドライバーが問題を引き起こすかどうかを確認する必要があります。一部のドライバーにはバグがあり、これが原因で問題が発生することがあります。以下の手順に従って確認してください。

1. 次のコマンドを使用して Linux カーネルのバージョンを確認します：

   ```
      uname -r 
   ```

   出力が 4.18 以下の場合、問題はなく、PCIe ドライバーのインストールをスキップできます。

2. カーネルバージョンが 4.19 以上の場合、事前にビルドされた Apex ドライバーがインストールされているかどうかを確認します：

   ```
      lsmod | grep apex
   ```

   何も出力されない場合は問題なく、PCIe ドライバーのインストールを続行できます。

   Apex モジュール名が出力された場合は、ここで停止し、[Apex と Gasket を無効化するための回避策](https://coral.ai/docs/m2/get-started/#workaround-to-disable-apex-and-gasket)に従ってください。

PCIe ドライバーを以下の手順でインストールします：

1. モジュールを接続するホストシステムがシャットダウンされていることを確認します。

2. Coral PCIe モジュールをホストシステムの B Key M.2 インターフェースに接続します (SATA_SSD M.2 インターフェースは Coral モジュールをサポートしていません)。

3. システムを起動し、インターネット接続があることを確認します。その後、以下のコマンドを使用して Debian パッケージリポジトリをシステムに追加し、PCIe ドライバーをインストールします：

   ```
   echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

   curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

   sudo apt update

   sudo apt-get install gasket-dkms
   ```

4. 使用するユーザーアカウントに root 権限がない場合、以下の udev ルールを追加し、「apex」グループが存在すること、およびユーザーがそのグループに追加されていることを確認する必要があります：

   ```
   sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

   sudo groupadd apex

   sudo adduser $USER apex
   ```

5. システムを再起動します。

6. アクセラレータモジュールが検出されていることを確認します：

   ```
      lspci -x | grep 089a
   ```

   以下のような出力が表示されるはずです：
   ```
      03:00.0 System peripheral: Device 1ac1:089a
   ```

   「03」番号や「System peripheral」名はホストシステムによって異なる場合がありますが、「089a」というデバイスがリストされていれば問題なく次に進むことができます。

7. PCIe ドライバーがロードされていることを確認します：

   ```
   ls /dev/apex_0
   ```

   以下のように名前がそのまま返されるはずです：

   ```
   /dev/apex_0
   ```

## 2. Edge TPU ランタイムのインストール

Edge TPU ランタイムは Edge TPU と通信するために必要です。以下のコマンドを使用して、ホストコンピュータにインストールできます：

```
sudo apt-get install libedgetpu1-std
```

注意事項  
> [USB Accelerator](https://coral.ai/products/accelerator/) とは異なり、mini PCIe および M.2 アクセラレータは「低減」および「最大」クロック周波数用の異なるランタイムパッケージを使用しません。これらのデバイスはデフォルトで最大周波数で動作し、[熱制限に基づく電力スロットリング](https://coral.ai/docs/m2/get-started/#operating-frequency-and-thermal-settings)を実行します。

## 3. TensorFlow Lite ライブラリのインストール

TensorFlow の API をインストールする方法はいくつかありますが、Python を使用して始める場合、最も簡単な方法は `tflite_runtime` パッケージをインストールすることです。このパッケージは、Python で推論を実行するために必要な最小限のコード（主に [Interpreter](https://www.tensorflow.org/api_docs/python/tf/lite/Interpreter) API）を提供し、ディスクスペースを大幅に節約できます。

インストールするには、[TensorFlow Lite Python クイックスタート](https://www.tensorflow.org/lite/guide/python)に従い、`pip3 install` コマンドを実行した後、このページに戻ってください。

## 4. TensorFlow Lite API を使用してモデルを実行する

これで、Edge TPU 上で推論を実行する準備が整いました。以下の手順に従って、サンプルコードとモデルを使用して画像分類を実行してください：

1. GitHub からサンプルコードをダウンロードします：

```
mkdir coral && cd coral

git clone https://github.com/google-coral/tflite.git
```

2. 鳥の分類モデル、ラベルファイル、および鳥の写真をダウンロードします：

```
cd tflite/python/examples/classification

bash install_requirements.sh
```

3. 鳥の写真を使用して画像分類器を実行します（図1参照）：

```
python3 classify_image.py \
--model models/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels models/inat_bird_labels.txt \
--input images/parrot.jpg
```

![](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/parrot.jpg)

以下のような結果が表示されるはずです：

```
INFO: Initialized TensorFlow Lite runtime.
----INFERENCE TIME----
Note: The first inference on Edge TPU is slow because it includes loading the model into Edge TPU memory.
11.8ms
3.0ms
2.8ms
2.9ms
2.9ms
-------RESULTS--------
Ara macao (Scarlet Macaw): 0.76562
```

おめでとうございます！ TensorFlow Lite を使用して Edge TPU 上で推論を実行しました。

推論速度の変化を示すために、このサンプルでは同じ推論を5回繰り返します。各推論にかかった時間と、トップの分類結果（ラベル ID/名前および信頼スコア、0 から 1.0 の範囲）が表示されます。推論速度はホストシステムによって異なる場合があります。

上記の `classify_image.py` サンプルは TensorFlow Lite Python API を使用しています。動作の詳細については、[classify_image.py のソースコード](https://github.com/google-coral/tflite/blob/master/python/examples/classification/classify_image.py)を確認し、[TensorFlow Lite を使用した推論の実行](https://www.tensorflow.org/lite/guide/inference#load_and_run_a_model_in_python)について読んでください。

上記で使用した TensorFlow Lite API の代わりに、[Edge TPU Python API](https://coral.ai/docs/edgetpu/api-intro/) を使用することもできます。この API は、画像分類や物体検出モデルでの推論を数行のコードで実行できる高レベルの API を提供します。たとえば、[Edge TPU API を使用した classify_image.py の別バージョン](https://coral.ai/examples/classify-image/)を試してみてください。

また、[C++ と TensorFlow Lite を使用して推論を実行する](https://coral.ai/docs/edgetpu/tflite-cpp/)こともできます。

リソース
--------

* [データシート](https://github.com/SeeedDocument/Bazaar_Document/raw/master/Coral-M2-datasheet.pdf)
* [Coral AI ユーザーマニュアル](https://coral.ai/docs/mini-pcie/datasheet/#)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>