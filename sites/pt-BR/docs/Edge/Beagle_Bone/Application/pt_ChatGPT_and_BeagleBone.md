---
description: LLM - integrado com BeagleY-AI
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
createdAt: '2024-08-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_lite_beagley-ai_chatgpt/
---

## Introdução

Este projeto integra funcionalidades de entrada de voz, resposta de modelo de linguagem e saída de voz usando um BeagleY-AI. Ele utiliza o ReSpeaker Lite como dispositivo de entrada e saída de áudio, possibilitando uma interação contínua com o ChatGPT e serviços de conversão de fala em texto.


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/Beaglebone_Solutions/bby_chatgpt.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



<!-- This project mainly implements three functions: voice input, large model response, and voice output. Respeaker lite is used as the audio input and output device, and Raspberry Pi 5 is used as the main control to connect the large model and speech-to-text conversion services. -->


## Hardware Necessário

* [ReSpeaker Lite USB 2-Mic Array](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)
* [BeagleY-AI](https://www.seeedstudio.com/BeagleYr-AI-beagleboard-orgr-4-TOPS-AI-Acceleration-powered-by-TI-AM67A.html)

## Primeiros Passos


Verifique a [documentação de primeiros passos](https://docs.beagle.cc/latest/boards/beagley/ai/02-quick-start.html) para configurar primeiro o seu BeagleY-AI e conectá-lo à rede.


:::note
Certifique-se de que a sua versão do python seja mais recente que python3.7.1.<br/>
Para verificar a versão:
```
python3 --version
```
:::

### Instalar Bibliotecas

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
* Execute o seguinte comando para configurar o ReSpeaker Lite:

```shell
pw-metadata -n settings 0 clock.force-rate 16000
```

:::tip
Comando para ajustar o volume do ReSpeaker Lite:

```shell
alsamixer
```
:::

### Código

Este código em Python implementa um assistente de voz simples que escuta uma palavra de ativação, reconhece comandos de voz do usuário, converte-os em texto, gera uma resposta usando `GPT-4` e então converte a resposta em fala e a reproduz.

O dispositivo primeiro aguarda a palavra de ativação e então escuta o comando do usuário. Quando o comando é recebido, o programa gera uma resposta usando o GPT-4 e a reproduz como fala. Se ele não conseguir reconhecer o comando três vezes, retorna a escutar pela palavra de ativação; você precisará dizer a palavra de ativação novamente para iniciar uma nova sessão de interação por voz.

* **Passo1**: Configurar chave de API


```shell
export OPENAI_API_KEY= 'your-api-key-here'
```

* **Passo2**: Crie um novo arquivo python e insira o seguinte código:

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

* **Passo3**: Execute o arquivo python.

<!--This code will wait for the voice input keyword `Hi`. When the keyword is entered, the system will start to detect the voice input command and pass the command to the openai API. After getting the reply, it will be broadcast in the form of voice; enter the keyword If the system does not detect voice input for 3 times, it will continue to enter the keyword waiting mode. At this point, you need to enter keywords to start the voice question and answer session. -->

```shell
python LLM_beagle.py
```

Agora está tudo pronto, tente acordá-lo com `Hi` e converse com ele!


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/Beaglebone_Solutions/bby_chatgpt.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>