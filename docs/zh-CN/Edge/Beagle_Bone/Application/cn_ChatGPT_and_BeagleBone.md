---
description: LLM - 集成 BeagleY-AI
title: ChatGPT - BeagleY-AI
keywords:
- BeagleY-AI
- LLM
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_lite_beagley-ai_chatgpt
last_update:
  date: 9/4/2024
  author: ShuishengPeng
---

## 简介

该项目使用 BeagleY-AI 集成了语音输入、大模型响应和语音输出功能。它采用 ReSpeaker Lite 作为音频输入和输出设备，实现与 ChatGPT 和语音转文本转换服务的无缝交互。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/Beaglebone_Solutions/bby_chatgpt.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<!-- 该项目主要实现了三个功能：语音输入、大模型响应和语音输出。使用 Respeaker Lite 作为音频输入和输出设备，使用 Raspberry Pi 5 作为主控设备连接大模型和语音转文本转换服务。 -->

## 所需硬件

* [ReSpeaker Lite USB 2-Mic Array](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)
* [BeagleY-AI](https://www.seeedstudio.com/BeagleYr-AI-beagleboard-orgr-4-TOPS-AI-Acceleration-powered-by-TI-AM67A.html)

## 入门指南

请查看 [入门文档](https://docs.beagle.cc/latest/boards/beagley/ai/02-quick-start.html) 来设置您的 BeagleY-AI，并将其连接到网络。

:::note
确保您的 Python 版本高于 Python3.7.1。<br/>
检查版本：
```
python3 --version
```
:::

### 安装库

```shell
sudo apt update
sudo apt install python3-pip python3-dev
sudo apt install portaudio19-dev
sudo apt install ffmpeg -y
sudo apt-get install flac
pip3 install pyaudio
pip3 install speechrecognition
pip3 install openai
pip3 install playsound
```

* 运行以下命令配置 ReSpeaker Lite：

```shell
pw-metadata -n settings 0 clock.force-rate 16000
```

:::tip
调整 ReSpeaker Lite 音量的命令：

```shell
alsamixer
```
:::

### 代码

以下 Python 代码实现了一个简单的语音助手，它会监听唤醒词，识别用户语音命令，将其转换为文本，使用 `GPT-4` 生成响应，然后将响应转换为语音并播放。

设备首先等待唤醒词，然后监听用户的命令。一旦接收到命令，程序会使用 GPT-4 生成响应并以语音形式播放。如果连续三次未能识别命令，程序会返回到监听唤醒词状态，您需要再次说出唤醒词以启动新的语音交互会话。

* **步骤1**：配置 API 密钥

```shell
export OPENAI_API_KEY= 'your-api-key-here'
```

* **步骤2**：创建一个新的 Python 文件并输入以下代码：

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



# 初始化识别器
recognizer = sr.Recognizer()
microphone = sr.Microphone()

# 定义唤醒词
WAKE_WORD = "hi"

def listen_for_wake_word():
    with microphone as source:
        recognizer.adjust_for_ambient_noise(source, duration=0.5)
        print("Listening for wake word...")
        
        while True:
            audio = recognizer.listen(source)
            # audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
            try:
                text = recognizer.recognize_google(audio).lower()
                if WAKE_WORD in text:
                    print(f"Wake word '{WAKE_WORD}' detected.")
                    text_to_speech("hi,what can i do for you?")
                    return True
            except sr.UnknownValueError:
                continue
            except sr.RequestError as e:
                print(f"Could not request results; {e}")
                continue

i=0
def listen_for_command():
    global i
    with microphone as source:
        print("Listening for command...")
        # audio = recognizer.listen(source)
        audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
        try:
            command = recognizer.recognize_google(audio)
            print(f"You said: {command}")
            i=0
            return command
        except sr.UnknownValueError:
            print("Could not understand the audio")
            i = i+1
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
            i = i+1


def get_gpt_response(prompt):
    completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Your name is speaker, you can answer all kinds of questions for me"},
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
                print(f"GPT says: {gpt_response}")
                text_to_speech(gpt_response)
                

if __name__ == "__main__":
    main()
```

* **步骤3**：运行 Python 文件。

<!--此代码将等待语音输入关键词 `Hi`。当输入关键词后，系统将开始检测语音输入命令并将命令传递给 OpenAI API。在获取回复后，将以语音形式播报；如果系统在输入关键词后未检测到语音输入达 3 次，将重新进入关键词等待模式。此时需要重新输入关键词以启动语音问答会话。-->

```shell
python LLM_beagle.py
```

现在一切准备就绪，试着用 `Hi` 唤醒它并与之交谈吧！


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/Beaglebone_Solutions/bby_chatgpt.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>