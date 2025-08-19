---
description: このWikiは、reComputer AGX Orin 64G上で音声インタラクションを備えた視覚言語モデルを実行する方法のチュートリアルを提供します。
title: 音声インタラクションを備えたVLMの実行
keywords:
- マルチモーダル
- NanoVLM
- TTS
- STT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/speech_vlm
last_update:
  date: 05/15/2025
  author: YaoHui Zhu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer Jetson上で音声インタラクションを備えたVLMを実行する方法

## はじめに

このガイドでは、reComputer Nvidia Jetsonデバイス上で音声インタラクションを備えたマルチモーダル視覚言語モデル（VLM）を実行する方法について詳しく説明します。このモデルは、公式のNvidia Jetsonプラットフォームの強力な計算能力と、Alibabaのオープンソース音声認識モデルSenseVoiceおよびcoqui-aiのテキスト読み上げ（TTS）モデルを組み合わせて、複雑なマルチモーダルタスクを実行します。このガイドに従うことで、視覚認識と音声インタラクションの両方を備えたシステムを成功裏にインストールおよび操作でき、プロジェクトにスマートなソリューションを提供することが可能になります。

### [VLM（視覚言語モデル）の紹介](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html)

視覚言語モデル（VLM）は、Nvidia Jetsonプラットフォーム向けに最適化されたマルチモーダルモデルです。視覚と言語処理を組み合わせて、物体認識や説明的な言語生成などの複雑なタスクを処理します。VLMは、自動運転、インテリジェント監視、スマートホームなどの分野で適用可能で、知的で直感的なソリューションを提供します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/vlmgif.gif" />
</div>

### [SenseVoiceの紹介](https://github.com/FunAudioLLM/SenseVoice/tree/main)

SenseVoiceは、高精度の多言語音声認識、音声感情認識、および音声イベント検出に焦点を当てたオープンソースモデルです。40万時間以上のデータでトレーニングされ、50以上の言語をサポートし、Whisperモデルを上回る性能を発揮します。SenseVoice-Smallモデルは超低遅延を実現し、10秒の音声をわずか70msで処理します。また、便利な微調整機能を提供し、Python、C++、HTML、Java、C#など複数の言語での展開をサポートします。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/sensevoice2.png" />
</div>

### [TTS（テキスト読み上げ）の紹介](https://github.com/coqui-ai/TTS)

TTSモデルは、テキスト読み上げタスク向けの高性能な深層学習モデルです。Tacotron2やMelGAN、WaveRNNなどのボコーダーを含むさまざまなモデルを提供します。TTSモデルは、マルチスピーカーTTS、効率的なトレーニングをサポートし、データセットの作成やモデルテストのためのツールを提供します。そのモジュール式コードベースにより、新機能の簡単な実装が可能です。

<div align="center">
    <img width={800} 
     src="https://raw.githubusercontent.com/coqui-ai/TTS/main/images/coqui-log-green-TTS.png" />
</div>

## 必要条件

- reComputer Jetson AGX Orin 64GまたはreComputer Jetson J4012 16Gデバイス（16GB以上のメモリを搭載）。
- USBドライバ不要のスピーカーマイク。
- RTSPストリームアドレスを出力できるIPカメラ。ローカルビデオをRTSPストリームに変換するためのNVIDIA Nvstreamerツールの使用方法についても説明を含めています。[NVIDIA Nvstreamerの使い方](../Developer_Tools/ja_NVStreamer_Getting_Started.md)。

:::note
このWikiの実現可能性は、reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)および[AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html)開発キットで既にテスト済みです。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## インストール

### システム環境の初期化

1. JP6で初期システムをインストールした後、`CUDA`やその他のライブラリがインストールされているか確認する必要があります。以下のコマンドを実行して確認およびインストールを行います：
    ```bash
    sudo apt-get install nvidia-jetpack
    ```

2. `python3-pip`、`jtop`、および`docker-ce`をインストールします。
3. 以下のコマンドを実行して必要な依存関係をインストールします：
    ```bash
    sudo apt-get install libportaudio2 libportaudiocpp0 portaudio19-dev
    sudo pip3 install pyaudio playsound subprocess wave keyboard
    sudo pip3 --upgrade setuptools
    sudo pip3 install sudachipy==0.5.2
    ```
4. オーディオ入力と出力、USBスピーカーマイクが正常に動作していること、ネットワーク接続が安定していることを確認してください。

### VLMのインストール

このプロジェクトのコア機能は視覚言語モデル（VLM）です。Nvidia Jetson上でreComputerを使用してVLMを実行する方法についてのガイドを提供しています。[こちらのリンク](../Generative_AI/ja_How_to_run_VLM_on_reComputer.md)を参照してインストールと使用方法を確認してください。以下の手順を進める前に、VLMを使用してテキスト記述を用いた推論を行う方法を十分に理解してください。

### Pytorch Torchaudioのインストール

初心者向けのNvidia Jetson AIコースを提供しており、PyTorch、Torchaudio、Torchvisionをインストールする方法についての説明があります。[こちらのリンク](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md)からダウンロードして、システム環境に応じてこれらのパッケージをインストールしてください。

### Speech_vlmのインストール（SenseVoiceベース）
1. Speech_vlmパッケージをクローンします：
    ```bash
    cd ~/
    git clone https://github.com/ZhuYaoHui1998/speech_vlm.git
    ```
2. Speech_vlm環境をインストールします：
    ```bash
    cd ~/speech_vlm
    sudo pip3 install -r requement.txt
    ```

### TTSのインストール（Coqui-aiベース）
```bash
cd ~/speech_vlm/TTS
sudo pip3 install .[all]
```

## 使用方法
Speech_vlmリポジトリの構造は以下の通りです：
```bash
speech_vlm/
├── /TTS   # Coqui-ai TTSプログラム
├── config # VLM設定
├── README.md    #プロジェクト紹介
├── requirements.txt   #SenseVoice必要環境ライブラリ
├── compose.yaml   #VLM Docker Compose起動ファイル
├── delete_id.sh     #カメラID削除スクリプト
├── example_1.wav     #オーディオフィードバック音トーンテンプレート（置き換え可能）
├── model.py     #SenseVoiceメインプログラム
├── set_alerts.sh     #カメラアラート設定
├── set_describe.sh     #テキスト入力で現在のシーンをVLMに説明させる
├── set_streamer_id.sh  #RTSPカメラをVLMに追加
├── view_rtsp.py  # OpenCVでRTSPストリームを表示
└── vlm_voice.py  # マルチモーダルメインプログラム
```

1. VLMを起動します：
    ```bash
    cd ~/speech_vlm
    sudo docker compose up -d
    ```

    <div align="center">
        <img width={800} 
        src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/dockerps.png" />
    </div>

2. RTSPストリームをVLMに追加します

`speech_vlm`リポジトリ内の`set_streamer_id.sh`の内容を確認します：

```sh
#!/bin/bash
curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
--header 'Content-Type: application/json' \
--data '{"liveStreamUrl": "RTSP stream address"}'
```
`0.0.0.0`をJetsonデバイスのIPアドレスに置き換え、`RTSP stream address`をカメラのRTSPストリームアドレスに置き換えます。
例：
```sh
#!/bin/bash
curl --location 'http://192.168.49.227:5010/api/v1/live-stream' \
--header 'Content-Type: application/json' \
--data '{"liveStreamUrl": "rtsp://admin:IHFXnM8k@192.168.49.15:554//Streaming/Channels/1"}'
```
:::note
RTSPカメラを持っていない場合、[NVStreamerを使用してローカルビデオをRTSPとしてストリームする方法](../Developer_Tools/ja_NVStreamer_Getting_Started.md)と[それをVLMに追加する方法](../Generative_AI/ja_How_to_run_VLM_on_reComputer.md)についての説明を提供しています。
:::

`set_streamer_id.sh`を実行します：
```bash
cd ~/speech_vlm
sudo chmod +x ./set_streamer_id.sh
./set_streamer_id.sh
```

カメラIDを取得します。このIDは非常に重要で、記録する必要があります。以下のようになります：

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/set_id.png" />
</div>

3. `vlm_voice.py`を実行します

以下のPythonコードの2行で`0.0.0.0`を置き換える必要があります：

```python
API_URL = 'http://0.0.0.0:5010/api/v1/chat/completions'  # APIエンドポイント
REQUEST_ID = ""  # リクエストID
```

JetsonのIPアドレスに置き換え、ステップ2で返されたカメラIDを`REQUEST_ID`の代わりに記入します。

<details>
<summary>vlm_voice.py</summary>

```python
import pyaudio
import wave
import keyboard
import subprocess
import json
from funasr import AutoModel
from funasr.utils.postprocess_utils import rich_transcription_postprocess
import time
import torch
from TTS.api import TTS
import os
# デバイスを取得
device = "cuda" if torch.cuda.is_available() else "cpu"

# TTSの初期化
api = TTS("tts_models/en/ljspeech/glow-tts").to(device)

# 設定パラメータ 
FORMAT = pyaudio.paInt16  # 16ビット解像度
CHANNELS = 1  # モノラルチャンネル
CHUNK = 1024  # チャンクごとのサンプル数
OUTPUT_FILENAME = "output.wav"  # 出力ファイル名
API_URL = 'http://192.168.49.227:5010/api/v1/chat/completions'  # APIエンドポイント
REQUEST_ID = "1388b691-3b9f-4bda-9d70-0ff0696f80f4"  # リクエストID

# PyAudioの初期化
audio = pyaudio.PyAudio()
# 録音データを保存するリストを準備
frames = []

# マイクのレートを初期化
print("利用可能なオーディオ入力デバイス:")
for i in range(audio.get_device_count()):
    info = audio.get_device_info_by_index(i)
    print(f"デバイス {i}: {info['name']} - {info['maxInputChannels']} チャンネル")

device_index = int(input("USBマイクのデバイスインデックスを選択してください: "))

device_info = audio.get_device_info_by_index(device_index)
supported_sample_rates = [8000, 16000, 32000, 44100, 48000]
supported_rate=0
for rate in supported_sample_rates:
    try:
        if audio.is_format_supported(rate,
                                     input_device=device_index,
                                     input_channels=1,
                                     input_format=pyaudio.paInt16):
            supported_rate=rate
            print(f"{rate} Hzはサポートされています。")
    except ValueError:
        print(f"{rate} Hzはサポートされていません。")


# モデルの初期化
model = "./SenseVoiceSmall"
model = AutoModel(
    model=model,
    vad_model="./speech_fsmn_vad_zh-cn-16k-common-pytorch",
    vad_kwargs={"max_single_segment_time": 30000},
    trust_remote_code=True,
    disable_log=True
)



def extract_content(json_response):
    try:
        # JSON文字列を解析
        data = json.loads(json_response)
        
        # content部分を抽出
        content = data["choices"][0]["message"]["content"]
        
        print(f"{content}")
        return content
    except KeyError as e:
        print(f"キーエラー: {e}")
    except json.JSONDecodeError as e:
        print(f"JSONデコードエラー: {e}")
    except Exception as e:
        print(f"予期しないエラーが発生しました: {e}")

def start_recording():
    global frames
    frames = []
    
    try:
        stream = audio.open(format=FORMAT, channels=CHANNELS,
                            rate=supported_rate, input=True,
                            frames_per_buffer=CHUNK, input_device_index=device_index)
        print("録音を開始しました... '2'を押して録音を停止してください。")
    
        while True:
            if keyboard.is_pressed('2'):
                print("録音を停止しました。")
                break
            data = stream.read(CHUNK)
            frames.append(data)
    
        stream.stop_stream()
        stream.close()
    
    except Exception as e:
        print(f"録音中にエラーが発生しました: {e}")

def save_recording():
    try:
        waveFile = wave.open(OUTPUT_FILENAME, 'wb')
        waveFile.setnchannels(CHANNELS)
        waveFile.setsampwidth(audio.get_sample_size(FORMAT))
        waveFile.setframerate(supported_rate)
        waveFile.writeframes(b''.join(frames))
        waveFile.close()
        print(f"録音が{OUTPUT_FILENAME}として保存されました")
    except Exception as e:
        print(f"録音を保存中にエラーが発生しました: {e}")

def send_alert(text):
    # JSONペイロードを構築
    payload = {
        "messages": [
            {
                "role": "system",
                "content": "あなたは役立つAIアシスタントです。"
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "stream",
                        "stream": {
                            "stream_id": REQUEST_ID
                        }
                    },
                    {
                        "type": "text",
                        "text": text
                    }
                ]
            }
        ],
        "min_tokens": 1,
        "max_tokens": 128
    }
    
    # ペイロードをJSON文字列に変換
    json_payload = json.dumps(payload)
    
    # subprocessを使用してcurlコマンドを実行
    curl_command = [
        'curl', '--location', API_URL,
        '--header', 'Content-Type: application/json',
        '--data', json_payload
    ]
    
    try:
        result = subprocess.run(curl_command, check=True, capture_output=True, text=True)
        ##結果を取得
        content_result=extract_content(result.stdout)
        # TTS 
        api.tts_to_file(
            str(content_result),
            speaker_wav="./example_1.wav",
            file_path="speech.wav"
        )
        # オーディオレートを変換
        subprocess.run(['ffmpeg', '-i', 'speech.wav', '-ar',str(supported_rate), 'speech1.wav','-y'])
        # オーディオを再生
        wf = wave.open('./speech1.wav', 'rb')
        stream = audio.open(format=pyaudio.paInt16,
                        channels=1,
                        rate=supported_rate,
                        output=True,
                        output_device_index=device_index)
        data = wf.readframes(1024)
        while data:
            stream.write(data)
            data = wf.readframes(1024)
        # オーディオを再生
        os.remove('speech.wav')
        os.remove('speech1.wav')
        stream.stop_stream()
        stream.close()
        wf.close()  # waveファイルも閉じる

        #print(f"アラートが正常に送信されました: {result.stdout}")
    except subprocess.CalledProcessError as e:
        print(f"アラート送信中にエラーが発生しました: {e.stderr}")
    finally:
        # エラーが発生してもストリームを閉じる
        if stream.is_active():
            stream.stop_stream()
            os.remove('speech.wav')
            os.remove('speech1.wav')
            stream.close()
print("録音および音声認識システムへようこそ！")
print("'1'を押して録音を開始し、'2'を押して録音を停止してください。")

while True:
    if keyboard.is_pressed('1'):
        print("録音を開始する準備をしています...")
        start_recording()
        save_recording()
        
        print("録音ファイルを処理中です。しばらくお待ちください...")
        try:
            res = model.generate(
                input=f"./{OUTPUT_FILENAME}",
                cache={},
                language="auto",  # "zh", "en", "yue", "ja", "ko", "nospeech"
                use_itn=True,
                batch_size_s=60,
                merge_vad=True,
                merge_length_s=15,
            )
            text = rich_transcription_postprocess(res[0]["text"])
            print(f"音声認識結果:\n{text}")
            
            # 音声認識結果をアラートとして送信
            send_alert(text)
            
        except Exception as e:
            print(f"録音処理中にエラーが発生しました: {e}")
        
    time.sleep(0.1)  # CPU使用率を削減
```
</details>

Pythonを実行します：
```bash
cd ~/speech_vlm
sudo python3 vlm_voice.py
```
プログラムが開始すると、すべての音声入力および出力デバイスをスキャンします。希望する音声デバイスのインデックスIDを手動で選択する必要があります。プログラムが動作を開始する準備が整ったら、`1`を押して録音し、`2`を押して送信します。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/select_mic.png" />
</div>

4. 結果を確認する

出力結果を確認するために、`view_rtsp.py`スクリプトを準備しています。`rtsp_url = "rtsp://0.0.0.0:5011/out"`のIP部分をJetsonデバイスのIPアドレスに置き換える必要があります。

<details>
<summary>viwe_rtsp.py</summary>

```python
import cv2

rtsp_url = "rtsp://192.168.49.227:5011/out"

cap = cv2.VideoCapture(rtsp_url)

if not cap.isOpened():
    print("RTSPストリームを開けません")
    exit()

while True:
    ret, frame = cap.read()
    if not ret:
        print("フレームの取得に失敗しました")
        break

    height, width = frame.shape[:2]

    frame_resized = cv2.resize(frame, (int(width // 1.1), int(height // 1.1)))

    cv2.imshow('RTSPストリーム', frame_resized)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```
</details>

```bash
sudo pip3 install opencv-python
cd ~/speech_vlm
sudo python3 view_rtsp.py
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/view_result.png" />
</div>

### デモンストレーション

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/eYaA9WGXh4Y" title="Run VLM with Speech Interaction on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品に関する議論

弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>