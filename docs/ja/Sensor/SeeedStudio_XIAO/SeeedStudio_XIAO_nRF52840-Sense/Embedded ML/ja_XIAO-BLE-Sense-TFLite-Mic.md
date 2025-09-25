---
description: 音声認識
title: 音声認識
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-TFLite-Mic
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO nRF52840 Senseでの音声認識

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" alt="pir" width={1000} height="auto" /></p>


このwikiでは、Seeed Studio XIAO nRF52840 SenseでTensorFlow Liteを使用し、オンボードマイクを使って音声認識を実行する方法を説明します。

> 組み込みAIアプリケーションに関しては、「Seeed nrf52 mbed-enabled Boards Library」の使用を強く推奨します。

## ソフトウェアセットアップ

まず、初期のハードウェアとソフトウェアのセットアップについて、["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/ja/XIAO_BLE/) wikiに従ってください。

それでは、残りのソフトウェアセットアップに進みましょう。

- **ステップ1**. [tflite-micro-arduino-examples library](https://github.com/lakshanthad/tflite-micro-arduino-examples)をzipファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png" alt="pir" width={1000} height="auto" /></p>


- **ステップ2**. Arduino IDEを開き、`Sketch > Include Library > Add .ZIP Library...`に移動し、ダウンロードしたzipファイルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


## データの訓練とTensorFlow Liteモデルの生成

次に、Google Colabノートブックを使用してデータ訓練を実行し、TensorFlow Liteモデルを生成します。

- **ステップ1.** [このPythonノートブック](https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb)を開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg" alt="pir" width={1000} height="auto" /></p>


デフォルトでは、**"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**の単語を認識できる[このデータセット](https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz)が読み込まれます

- **ステップ2.** **Configure Defaults**列の下で、モデルに認識させたい単語に応じて**WANTED_WORDS**パラメータを変更します。**"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**から選択できます
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png" alt="pir" width={600} height="auto" /></p>


**注意:** この例では、**yes,no,up,down**の単語が選択されています

- **ステップ3.** `Runtime > Run all`に移動して、すべてのコードセルを実行します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png" alt="pir" width={450} height="auto" /></p>


- **ステップ4.** ポップアップするエラーメッセージに対して**Run anyway**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


**注意:** このプロセスは完了まで約2時間かかります

- **ステップ5.** すべてのコードセルが実行されると、左隅の**files**タブに移動し、**models**フォルダの下に新しい**model.cc**ファイルが生成されていることがわかります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png" alt="pir" width={300} height="auto" /></p>


**注意:** 上記の**model.cc**ファイルが表示されない場合は、ページを更新してください。

- **ステップ6.** ファイルを右クリックし、**Download**をクリックしてファイルをPCにダウンロードします

## 推論

これで、ダウンロードしたTensorFlow Liteモデルファイル **(model.cc)** を使用して、Seeed Studio XIAO nRF52840 Senseのマイクを使って異なる単語を認識します。

- **ステップ 1.** **tflite-micro-arduino-examples** ライブラリのライブラリパスに移動し（通常は **Documents > Arduino > libraries > tflite-micro-arduino-examples** の下）、**examples > micro_speech** にアクセスして **micro_features_model.cpp** を開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png" alt="pir" width={550} height="auto" /></p>


- **ステップ 2.** `const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {` の下の値を **model.cc** ファイルの新しい値に置き換えます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png" alt="pir" width="550" height="auto" /></p>


- **ステップ 3.** **model.cc** の値に従って **g_model_len** を変更します。ここでは **26720** を取得しました

```cpp
const int g_model_len = 26720;
```

- **ステップ 4.** **micro_speech** フォルダ内の **micro_features_micro_model_settings.cpp** を開き、トレーニングプロセスで定義したすべての単語を追加します。ここでは **yes,no,up,down** を使用しました

```cpp
#include "micro_features_micro_model_settings.h"

const char* kCategoryLabels[kCategoryCount] = {
    "silence",
    "unknown",
    "yes",
    "no",
    "up",
    "down",
};
```

- **ステップ 5.** **micro_speech** フォルダ内の **micro_features_micro_model_settings.h** を開き、定義されたカテゴリ数に応じて **constexpr int kCategoryCount** を変更します。ここでは 6 つのカテゴリがあります

```cpp
constexpr int kCategoryCount = 6;
```

- **ステップ 6.** **micro_speech** フォルダ内の **micro_speech.ino** を開き、コードを Seeed Studio XIAO nRF52840 Sense にアップロードします

- **ステップ 7.** **シリアルモニターウィンドウ** を開き、先ほど定義した単語を声に出して言います。認識後、シリアルモニターに話した正しい単語が出力されるのを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png" alt="pir" width={300} height="auto" /></p>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>