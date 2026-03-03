---
description: LLM - integrated with BeagleY-AI
title: ChatGPT - BeagleY-AI
keywords:
- BeagleY-AI
- LLM
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_lite_beagley-ai_chatgpt
last_update:
  date: 9/4/2024
  author: ShuishengPeng
---

## Introduction

This project integrates voice input, large model response, and voice output functionalities using a BeagleY-AI. It employs the ReSpeaker Lite as the audio input and output device, enabling seamless interaction with ChatGPT and speech-to-text conversion services.


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/Beaglebone_Solutions/bby_chatgpt.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



<!-- This project mainly implements three functions: voice input, large model response, and voice output. Respeaker lite is used as the audio input and output device, and Raspberry Pi 5 is used as the main control to connect the large model and speech-to-text conversion services. -->


## Hardware Required

* [ReSpeaker Lite USB 2-Mic Array](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)
* [BeagleY-AI](https://www.seeedstudio.com/BeagleYr-AI-beagleboard-orgr-4-TOPS-AI-Acceleration-powered-by-TI-AM67A.html)

## Getting Started


Check the [Getting started documentation](https://docs.beagle.cc/latest/boards/beagley/ai/02-quick-start.html) to set up your BeagleY-AI first, connect your BeagleY-AI to the network.


:::note
Make sure your python version is newer than python3.7.1.<br/>
To check the version:
```
python3 --version
```
:::

### Install Libraries

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
* Run the following command to configure ReSpeaker Lite:

```shell
pw-metadata -n settings 0 clock.force-rate 16000
```

:::tip
Command to adjust the volume of ReSpeaker Lite:

```shell
alsamixer
```
:::

### Code

This Python code implements a simple voice assistant that listens for a wake word, recognizes user voice commands, converts them to text, generates a response using `GPT-4`, and then converts the response to speech and plays it back.

The device first waits for the wake word, then listens for the user's command. Once the command is received, the program generates a response using GPT-4 and plays it back as speech. If it fails to recognize the command three times, it returns to listening for the wake word, you'll need to say the wake word again to initiate a new voice interaction session.

* **Step1**: Configure API key


```shell
export OPENAI_API_KEY= 'your-api-key-here'
```

* **Step2**: Create a new python file and enter the following code:

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



# Initialize recognizer
recognizer = sr.Recognizer()
microphone = sr.Microphone()

# Define the wake word
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

* **Step3**: Run the python file.

<!--This code will wait for the voice input keyword `Hi`. When the keyword is entered, the system will start to detect the voice input command and pass the command to the openai API. After getting the reply, it will be broadcast in the form of voice; enter the keyword If the system does not detect voice input for 3 times, it will continue to enter the keyword waiting mode. At this point, you need to enter keywords to start the voice question and answer session. -->

```shell
python LLM_beagle.py
```

Now you are all set, try waking it up with `Hi` and talking to it!


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/Beaglebone_Solutions/bby_chatgpt.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>