---
description: この Wiki では、TensorFlow Lite を使用して ReSpeaker 2-Mics Pi HAT v2 でキーワードスポッティングを行い、音声認識を実行する方法を紹介します。
title: Raspberry Pi Mic HAT 上で TensorFlow Lite を用いたキーワードスポッティング
keywords:
  - ReSpeaker_2-Mics_Pi_HAT
  - Keyword_Spotting
  - TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /respeaker_2_mics_pi_hat_v2_speech_recognition
last_update:
  date: 12/23/2024
  author: Joshua Lee
createdAt: '2024-12-24'
updatedAt: '2024-12-24'
url: https://wiki.seeedstudio.com/ja/respeaker_2_mics_pi_hat_v2_speech_recognition/
---

## はじめに

このプロジェクトでは、TensorFlow Lite を使用して ReSpeaker 2-Mics Pi HAT v2 上でキーワードスポッティングを行う方法を紹介します。キーワードスポッティングは、音声入力からあらかじめ定義された単語をリアルタイムに検出する技術であり、音声制御デバイスやインタラクティブシステムなどのアプリケーションを実現できます。ここでは、TensorFlow Lite モデルを学習し、ReSpeaker HAT にデプロイし、ローカルで音声認識を実行するまでの手順を順を追って説明します。

### ハードウェアおよびソフトウェア要件

- ハードウェア: ReSpeaker 2-Mics Pi HAT v2 を搭載した Raspberry Pi
- ソフトウェア: TensorFlow Lite、Google Colab、Python、および関連ライブラリ

### 応用例

キーワードスポッティングは次のような用途に利用できます:

- スマートホームデバイス
- 音声制御ロボット
- インタラクティブキオスク

### TensorFlow Lite とは？

TensorFlow Lite は、モバイルおよび組み込みデバイス向けに設計された TensorFlow の軽量版です。低レイテンシかつ小さなバイナリサイズで機械学習の推論を実行できるため、Raspberry Pi のようなエッジデバイス上でモデルを動作させるのに最適です。

## TensorFlow Lite モデルの学習と取得

### データセット

学習には Speech Commands データセットのサブセットを使用します。このデータセットには、人々がさまざまな単語を発話した WAV 音声ファイルが含まれており、Google によって収集され、CC BY ライセンスの下で公開されています。データセットはここからダウンロードできます。データセットの詳細については、このガイドを参照してください。

### なぜ Google Colab を使うのか？

Google Colab は、Jupyter Notebook を実行するためのクラウドベースのプラットフォームです。GPU リソースに無料でアクセスできるため、ローカルの計算能力を必要とせずに機械学習モデルを学習させるのに最適な選択肢です。

### 手順

ここでは Google Colab Notebook を使用してデータの学習を行い、`.tflite` 形式の TensorFlow Lite モデルを生成します。

- **Step 1.** [この Python Notebook](https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/audio/simple_audio.ipynb) を開きます

  ![Load Notebook](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_1.png)

  デフォルトでは、Speech Commands データセットの小規模版である [mini Speech Commands データセット](http://storage.googleapis.com/download.tensorflow.org/data/mini_speech_commands.zip) が読み込まれます。元のデータセットは、35 種類の単語を人々が発話した、WAV（Waveform）音声ファイル形式の 105,000 以上の音声ファイルで構成されています。このデータは Google によって収集され、CC BY ライセンスの下で公開されています。

- **Step 2.** **Changing runtime type -> CPU -> Save** を選択して新しいランタイムに接続し、その後 **Connect** をクリックします。

  ![Change runtime type - 1](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_2.png)
  ![Change runtime type - 2](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_3.png)

- **Step 3.** `Runtime > Run all` に移動して、すべてのコードセルを実行します。この処理には約 10 分かかります。

  ![Run all](https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png)

- **Step 4.** すべてのコードセルの実行が完了したら、新しいセルを追加し、次のコードを実行して `.tflite` モデルファイルを生成します。

  ```python
  converter = tf.lite.TFLiteConverter.from_keras_model(model)
  tflite_model = converter.convert()

  with open('model.tflite', 'wb') as f:
  f.write(tflite_model)
  ```

  ![Append a new cell](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_4.png)

- **Step 5.** 生成された `model.tflite` ファイルを右クリックし、**Download** を選択してコンピュータに保存します。

  ![Download](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_5.png)

## ローカル推論

### 推論スクリプトの実行

スクリプト inference.py は、次の手順を実行します:

1. 学習済みの TensorFlow Lite モデルを読み込みます。
2. 入力音声を推論に適したスペクトログラムに変換します。
3. 推論を実行し、検出されたキーワードと各ラベルの信頼度スコアを出力します。

### 実行手順

1. `model.tflite` モデルファイルを Pi にアップロードします。この例では `~/speech_recognition/model.tflite` に配置します。
2. 次のスクリプトを `~/speech_recognition/inference.py` として保存します:

    ```python
    import numpy as np
    from scipy import signal
    from tflite_runtime.interpreter import Interpreter
    import soundfile as sf

    MODEL_PATH = 'model.tflite'
    LABELS = ['no', 'yes', 'down', 'go', 'left', 'up', 'right', 'stop']


    def get_spectrogram(waveform, expected_time_steps=124, expected_freq_bins=129):
        _, _, Zxx = signal.stft(
            waveform,
            fs=16000,
            nperseg=255,
            noverlap=124,
            nfft=256
        )
        spectrogram = np.abs(Zxx)

        if spectrogram.shape[0] != expected_freq_bins:
            spectrogram = np.pad(spectrogram, ((
                0, expected_freq_bins - spectrogram.shape[0]), (0, 0)), mode='constant')
        if spectrogram.shape[1] != expected_time_steps:
            spectrogram = np.pad(spectrogram, ((
                0, 0), (0, expected_time_steps - spectrogram.shape[1])), mode='constant')

        if spectrogram.shape != (expected_freq_bins, expected_time_steps):
            raise ValueError(
                f"Invalid spectrogram shape. Got {spectrogram.shape}, expected ({expected_freq_bins}, {expected_time_steps})."
            )

        spectrogram = np.transpose(spectrogram)

        return spectrogram


    def preprocess_audio(file_path):
        waveform, sample_rate = sf.read(file_path)
        if sample_rate != 16000:
            raise ValueError("Expected sample rate is 16 kHz")

        if len(waveform.shape) > 1:
            waveform = waveform[:, 0]

        spectrogram = get_spectrogram(waveform)
        spectrogram = spectrogram[..., np.newaxis]
        spectrogram = spectrogram[np.newaxis, ...]

        return spectrogram


    def run_inference(file_path):
        spectrogram = preprocess_audio(file_path)

        interpreter = Interpreter(MODEL_PATH)
        interpreter.allocate_tensors()

        input_details = interpreter.get_input_details()
        output_details = interpreter.get_output_details()

        input_shape = input_details[0]['shape']
        if spectrogram.shape != tuple(input_shape):
            raise ValueError(
                f"Expected input shape {input_shape}, got {spectrogram.shape}"
            )

        interpreter.set_tensor(
            input_details[0]['index'], spectrogram.astype(np.float32))

        interpreter.invoke()

        output_data = interpreter.get_tensor(output_details[0]['index'])[0]
        prediction = np.argmax(output_data)
        confidence = np.exp(output_data) / \
            np.sum(np.exp(output_data))

        print(f"command: {LABELS[prediction].upper()}")
        for label, conf in zip(LABELS, confidence):
            print(f"{label}: {conf:.2%}")


    if __name__ == "__main__":
        audio_file_path = 'test_audio.wav'
        run_inference(audio_file_path)
    ```

3. 次のコマンドを使用して音声を録音します。利用可能なキーワードは `no`, `yes`, `down`, `go`, `left`, `up`, `right`, `stop` です。

    ```
    $ arecord -D "plughw:2,0" -f S16_LE -r 16000 -d 1 -t wav ~/speech_recognition/test_audio.wav
    ```

4. スクリプトを実行します:

    ```
    $ python3 inference.py
    INFO: Created TensorFlow Lite XNNPACK delegate for CPU.
    command: YES
    no: 8.74%
    yes: 21.10%
    down: 5.85%
    go: 14.57%
    left: 11.02%
    up: 8.25%
    right: 10.53%
    stop: 19.94%
    ```

### 結果の解釈

スクリプトは、検出されたコマンド（例: YES）と、すべてのラベルに対する信頼度スコアを出力します。これにより、モデルの予測内容を把握し、その性能を評価することができます。

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
