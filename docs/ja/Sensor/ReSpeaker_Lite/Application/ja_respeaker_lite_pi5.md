---
description: LLM - Raspberry Pi5 に統合
title: ChatGPT - Raspberry Pi
keywords:
- Raspberry Pi
- LLM
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_lite_pi5
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---


このプロジェクトでは、Raspberry Pi 5 を使用して音声入力、大規模モデルの応答、および音声出力機能を統合しています。ReSpeaker Lite を音声入出力デバイスとして使用し、ChatGPT および音声認識サービスとのシームレスな対話を可能にします。



<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



<!-- このプロジェクトでは主に音声入力、大規模モデルの応答、音声出力の3つの機能を実現しています。Respeaker Lite を音声入出力デバイスとして使用し、Raspberry Pi 5 をメインコントローラーとして、大規模モデルおよび音声認識サービスに接続します。 -->


## 必要なハードウェア

* [ReSpeaker Lite USB 2-Mic Array](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)
* [Raspberry Pi 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)

## はじめに


まず、[Raspberry Pi のセットアップドキュメント](https://www.raspberrypi.com/documentation/computers/getting-started.html#getting-started-with-your-raspberry-pi)を確認し、Raspberry Pi をネットワークに接続してください。


:::note
Python のバージョンが python3.7.1 以上であることを確認してください。<br/>
バージョンを確認するには以下を実行してください：
```
python3 --version
```
:::

### ライブラリのインストール

```shell
sudo apt update
sudo apt install python3-pip python3-dev
sudo apt install portaudio19-dev
pip3 install pyaudio
pip3 install speechrecognition
pip3 install openai
pip3 install playsound
```
* Raspberry Pi 5 では、以下のコマンドを実行して ReSpeaker Lite を設定してください：

```shell
pw-metadata -n settings 0 clock.force-rate 16000
```

永続的な変更を行うには、`/etc/pipewire/pipewire.conf` の `default.clock.rate` 行をアンハッシュして編集してください（まず /usr/share/ からコピーしてください）。

:::tip
ReSpeaker Lite の音量を調整するコマンド：

```shell
alsamixer
```
:::

### コード

この Python コードは、ウェイクワードを認識し、ユーザーの音声コマンドをテキストに変換し、`GPT-4` を使用して応答を生成し、その応答を音声に変換して再生するシンプルな音声アシスタントを実装します。

デバイスはまずウェイクワードを待機し、その後ユーザーのコマンドを聞き取ります。コマンドを受信すると、プログラムは GPT-4 を使用して応答を生成し、それを音声として再生します。コマンドの認識に3回失敗すると、ウェイクワードの待機状態に戻り、新しい音声対話セッションを開始するには再度ウェイクワードを言う必要があります。

* **ステップ1**: API キーを設定

```shell
export OPENAI_API_KEY= 'your-api-key-here'
```

* **ステップ2**: 新しい Python ファイルを作成し、以下のコードを入力してください：

```python
import speech_recognition as sr
from openai import OpenAI
from pathlib import Path
from pydub import AudioSegment
import os


client = OpenAI()

def text_to_speech(text):
    speech_file_path = Path(__file__).parent / "speech.mp3"
    response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input=text
    )

    response.stream_to_file(speech_file_path)
    audio = AudioSegment.from_mp3("speech.mp3")
    audio.export("speech.wav", format="wav")
    cmdline = 'aplay ' + " speech.wav" 
    os.system(cmdline)



# 音声認識器を初期化
recognizer = sr.Recognizer()
microphone = sr.Microphone()

# ウェイクワードを定義
WAKE_WORD = "hi"

def listen_for_wake_word():
    with microphone as source:
        recognizer.adjust_for_ambient_noise(source, duration=0.5)
        print("ウェイクワードを待機中...")
        
        while True:
            audio = recognizer.listen(source)
            # audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
            try:
                text = recognizer.recognize_google(audio).lower()
                if WAKE_WORD in text:
                    print(f"ウェイクワード '{WAKE_WORD}' を検出しました。")
                    text_to_speech("hi,what can i do for you?")
                    return True
            except sr.UnknownValueError:
                continue
            except sr.RequestError as e:
                print(f"結果をリクエストできませんでした； {e}")
                continue

i=0
def listen_for_command():
    global i
    with microphone as source:
        print("コマンドを待機中...")
        # audio = recognizer.listen(source)
        audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
        try:
            command = recognizer.recognize_google(audio)
            print(f"あなたの発言: {command}")
            i=0
            return command
        except sr.UnknownValueError:
            print("音声を認識できませんでした")
            i = i+1
        except sr.RequestError as e:
            print(f"結果をリクエストできませんでした； {e}")
            i = i+1


def get_gpt_response(prompt):
    completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "あなたの名前は speaker です。私のためにあらゆる質問に答えることができます"},
        {"role": "user", "content": prompt}
    ]
    )

    content_string = completion.choices[0].message.content
    paragraphs = content_string.split('\n\n')
    combined_content = ' '.join(paragraphs)
    return combined_content




def main():
    global i
    while 1:
        flag = listen_for_wake_word()
        while flag == True:
            user_input = listen_for_command()
            if i==3:
                flag = False
                i = 0
            if user_input:
                gpt_response = get_gpt_response(user_input)
                print(f"GPT の応答: {gpt_response}")
                text_to_speech(gpt_response)
                

if __name__ == "__main__":
    main()
```

* **ステップ3**: Python ファイルを実行してください。

<!--このコードは音声入力キーワード「Hi」を待機します。キーワードが入力されると、システムは音声入力コマンドの検出を開始し、そのコマンドをOpenAI APIに渡します。返信を受け取った後、音声形式で放送されます。キーワードを入力した後、システムが音声入力を3回検出できない場合、キーワード待機モードに戻ります。この時点で、音声の質問と回答セッションを開始するにはキーワードを入力する必要があります。-->

```shell
python openai.py
```

これで準備完了です。「Hi」で起動して話しかけてみてください！

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>