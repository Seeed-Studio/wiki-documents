---
description: LLM - integrado con Raspberry Pi5
title: ChatGPT - Raspberry Pi
keywords:
- Raspberry Pi
- LLM
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_lite_pi5
last_update:
  date: 8/12/2024
  author: ShuishengPeng
---


Este proyecto integra funcionalidades de entrada de voz, respuesta de modelo grande y salida de voz utilizando una Raspberry Pi 5. Emplea el ReSpeaker Lite como dispositivo de entrada y salida de audio, permitiendo una interacción fluida con ChatGPT y servicios de conversión de voz a texto.


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


<!-- Este proyecto implementa principalmente tres funciones: entrada de voz, respuesta de modelo grande y salida de voz. Respeaker lite se utiliza como dispositivo de entrada y salida de audio, y Raspberry Pi 5 se utiliza como control principal para conectar el modelo grande y los servicios de conversión de voz a texto. -->


## Hardware Requerido

* [ReSpeaker Lite USB 2-Mic Array](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)
* [Raspberry Pi 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)

## Comenzando


Consulta la [documentación de introducción](https://www.raspberrypi.com/documentation/computers/getting-started.html#getting-started-with-your-raspberry-pi) para configurar tu Raspberry Pi primero, conecta tu Pi a la red.


:::note
Asegúrate de que tu versión de python sea más reciente que python3.7.1.<br/>
Para verificar la versión:
```
python3 --version
```

:::

### Instalar Bibliotecas

```shell
sudo apt update
sudo apt install python3-pip python3-dev
sudo apt install portaudio19-dev
pip3 install pyaudio
pip3 install speechrecognition
pip3 install openai
pip3 install playsound
```

* Para Raspberry Pi 5, ejecuta el siguiente comando para configurar ReSpeaker Lite:

```shell
pw-metadata -n settings 0 clock.force-rate 16000
```

Para un cambio permanente, descomenta y edita la línea `default.clock.rate` en `/etc/pipewire/pipewire.conf` (cópialo primero desde /usr/share/).

:::tip
Comando para ajustar el volumen del ReSpeaker Lite:

```shell
alsamixer
```

:::

### Código

Este código de Python implementa un asistente de voz simple que escucha una palabra de activación, reconoce comandos de voz del usuario, los convierte a texto, genera una respuesta usando `GPT-4`, y luego convierte la respuesta a voz y la reproduce.

El dispositivo primero espera la palabra de activación, luego escucha el comando del usuario. Una vez que se recibe el comando, el programa genera una respuesta usando GPT-4 y la reproduce como voz. Si no logra reconocer el comando tres veces, regresa a escuchar la palabra de activación, necesitarás decir la palabra de activación nuevamente para iniciar una nueva sesión de interacción de voz.

* **Paso1**: Configurar clave API


```shell
export OPENAI_API_KEY= 'your-api-key-here'
```

* **Paso2**: Crea un nuevo archivo de python e ingresa el siguiente código:

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

* **Paso 3**: Ejecuta el archivo de Python.

<!--Este código esperará la palabra clave de entrada de voz `Hi`. Cuando se ingrese la palabra clave, el sistema comenzará a detectar el comando de entrada de voz y pasará el comando a la API de openai. Después de obtener la respuesta, se transmitirá en forma de voz; si el sistema no detecta entrada de voz 3 veces después de ingresar la palabra clave, continuará en el modo de espera de palabra clave. En este punto, necesitas ingresar palabras clave para iniciar la sesión de preguntas y respuestas por voz. -->

```shell
python openai.py
```

¡Ahora ya está todo listo, intenta despertarlo con `Hi` y hablar con él!

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>