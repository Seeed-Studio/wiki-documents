---
description: LLM - 与 Raspberry Pi5 集成
title: ChatGPT - Raspberry Pi
keywords:
- Raspberry Pi
- LLM
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_lite_pi5
last_update:
  date: 8/12/2024
  author: ShuishengPeng
---


本项目使用 Raspberry Pi 5 集成了语音输入、大模型响应和语音输出功能。它采用 ReSpeaker Lite 作为音频输入和输出设备，实现与 ChatGPT 和语音转文本服务的无缝交互。


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


<!-- 本项目主要实现三个功能：语音输入、大模型响应和语音输出。使用 Respeaker lite 作为音频输入和输出设备，使用 Raspberry Pi 5 作为主控来连接大模型和语音转文本服务。 -->


## 所需硬件

* [ReSpeaker Lite USB 2-Mic Array](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)
* [Raspberry Pi 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)

## 入门指南


查看[入门文档](https://www.raspberrypi.com/documentation/computers/getting-started.html#getting-started-with-your-raspberry-pi)首先设置您的 Raspberry Pi，将您的 Pi 连接到网络。


:::note
确保您的 python 版本高于 python3.7.1。<br/>
检查版本：

```
python3 --version
```

### 安装库

```shell
sudo apt update
sudo apt install python3-pip python3-dev
sudo apt install portaudio19-dev
pip3 install pyaudio
pip3 install speechrecognition
pip3 install openai
pip3 install playsound
```

* 对于树莓派 5，运行以下命令来配置 ReSpeaker Lite：

```shell
pw-metadata -n settings 0 clock.force-rate 16000
```

对于永久更改，请取消注释并编辑 `/etc/pipewire/pipewire.conf` 中的 `default.clock.rate` 行（首先从 /usr/share/ 复制它）。

:::tip
调整 ReSpeaker Lite 音量的命令：

```shell
alsamixer
```

### 代码

这个 Python 代码实现了一个简单的语音助手，它监听唤醒词，识别用户语音命令，将其转换为文本，使用 `GPT-4` 生成响应，然后将响应转换为语音并播放。

设备首先等待唤醒词，然后监听用户的命令。一旦收到命令，程序使用 GPT-4 生成响应并以语音形式播放。如果连续三次无法识别命令，它会返回到监听唤醒词状态，您需要再次说出唤醒词来启动新的语音交互会话。

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
        print("正在监听唤醒词...")
        
        while True:
            audio = recognizer.listen(source)
            # audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
            try:
                text = recognizer.recognize_google(audio).lower()
                if WAKE_WORD in text:
                    print(f"检测到唤醒词 '{WAKE_WORD}'。")
                    text_to_speech("你好，我能为你做什么？")
                    return True
            except sr.UnknownValueError:
                continue
            except sr.RequestError as e:
                print(f"无法请求结果；{e}")
                continue

i=0
def listen_for_command():
    global i
    with microphone as source:
        print("正在监听命令...")
        # audio = recognizer.listen(source)
        audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
        try:
            command = recognizer.recognize_google(audio)
            print(f"你说：{command}")
            i=0
            return command
        except sr.UnknownValueError:
            print("无法理解音频")
            i = i+1
        except sr.RequestError as e:
            print(f"无法请求结果；{e}")
            i = i+1


def get_gpt_response(prompt):
    completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "你的名字是speaker，你可以为我回答各种问题"},
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
                print(f"GPT 说：{gpt_response}")
                text_to_speech(gpt_response)
                

if __name__ == "__main__":
    main()
```

* **步骤3**：运行Python文件。

<!--此代码将等待语音输入关键词`Hi`。当输入关键词时，系统将开始检测语音输入命令并将命令传递给openai API。获得回复后，将以语音形式播放；如果系统连续3次未检测到语音输入，将继续进入关键词等待模式。此时，您需要输入关键词来开始语音问答会话。-->

```shell
python openai.py
```

现在您已经全部设置完成，尝试用`Hi`唤醒它并与它对话吧！


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>