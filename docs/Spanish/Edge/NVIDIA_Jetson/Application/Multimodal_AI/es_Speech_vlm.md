---
description: Esta wiki proporciona un tutorial sobre cómo ejecutar un modelo de lenguaje visual con interacción de voz en la reComputer AGX Orin 64G.
title: Ejecutar un VLM con interacción de voz
keywords:
- Multimodal 
- NanoVLM
- TTS
- STT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/speech_vlm
last_update:
  date: 08/23/2024
  author: YaoHui Zhu
---

# Cómo ejecutar un VLM con interacción de voz en la reComputer Jetson

## Introducción

Esta guía proporciona una explicación detallada sobre cómo ejecutar un modelo de lenguaje visual (VLM) multimodal con interacción de voz en un dispositivo reComputer Nvidia Jetson. El modelo aprovecha las poderosas capacidades computacionales de la plataforma oficial Nvidia Jetson, combinada con el modelo de voz a texto de código abierto SenseVoice y el modelo de texto a voz (TTS) de coqui-ai, para realizar tareas multimodales complejas. Si sigues esta guía, podrás instalar y operar con éxito este sistema, con capacidades de reconocimiento visual e interacción de voz, ofreciendo así soluciones más inteligentes para tus proyectos.

### [Introducción a VLM (modelo de lenguaje visual)](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html)

El modelo de lenguaje visual (VLM) es un modelo multimodal optimizado para la plataforma Nvidia Jetson. Combina procesamiento visual y del lenguaje para manejar tareas complejas, como el reconocimiento de objetos y la generación de lenguaje descriptivo. Un VLM es aplicable en campos como la conducción autónoma, la vigilancia inteligente, hogares inteligentes y ofrece soluciones inteligentes e intuitivas.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/vlmgif.gif" />
</div>

### [Introducción a SenseVoice](https://github.com/FunAudioLLM/SenseVoice/tree/main)

SenseVoice es un modelo de código abierto centrado en el reconocimiento de voz multilingüe de alta precisión, el reconocimiento de emociones del habla y la detección de eventos de audio. Capacitado con más de 400,000 horas de datos, admite más de 50 idiomas y supera al modelo Whisper. El modelo SenseVoice-Small ofrece una latencia ultrabaja y procesa 10 segundos de audio en solo 70 ms. También proporciona un ajuste cómodo y admite la implementación en varios lenguajes, incluidos Python, C++, HTML, Java y C#.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/sensevoice2.png" />
</div>

### [Introducción a TTS (Texto a voz)](https://github.com/coqui-ai/TTS)

El modelo TTS es un modelo de aprendizaje profundo de alto rendimiento para tareas de conversión de texto a voz. Incluye varios modelos como Tacotron2 y vocoders como MelGAN y WaveRNN. El modelo TTS admite TTS de múltiples hablantes, capacitación eficiente y ofrece herramientas para la curación de conjuntos de datos y pruebas de modelos. Su base de código modular permite una fácil implementación de nuevas funciones.

<div align="center">
    <img width={800} 
     src="https://raw.githubusercontent.com/coqui-ai/TTS/main/images/coqui-log-green-TTS.png" />
</div>

## Prerequisitos

- Dispositivo reComputer Jetson AGX Orin 64G o reComputer Jetson J4012 16G con más de 16GB de memoria.
- Micrófono altavoz USB sin controlador
- Una cámara IP que puede generar una dirección de transmisión RTSP. También hemos incluido instrucciones sobre [cómo utilizar la herramienta NVIDIA Nvstreamer](../Developer_Tools/es_NVStreamer_Getting_Started.md) para convertir videos locales en transmisiones RTSP.

:::nota
Ya hemos probado la viabilidad de esta wiki en la reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) y [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) Developer Kit.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products">
      <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>

## Instalación

### Inicializar el entorno del sistema

1. Después de instalar el sistema inicial con JP6, debes verificar la instalación de `CUDA` y otras bibliotecas. Puedes verificarlos e instalarlos ejecutando `sudo apt-get install nvidia-jetpack`.

2. Instalar `python3-pip`, `jtop`, y `docker-ce`.
3. Instalar las dependencias necesarias ejecutando los siguientes comandos:
    ```bash
    sudo apt-get install libportaudio2 libportaudiocpp0 portaudio19-dev
    sudo pip3 install pyaudio playsound subprocess wave keyboard
    sudo pip3 --upgrade setuptools
    sudo pip3 install sudachipy==0.5.2
    ```
4. Comprueba que la entrada y salida de audio, así como el micrófono del altavoz USB, funcionan correctamente y que la conexión de red es estable.

### Instalar el VLM

La funcionalidad principal de este proyecto es el modelo de lenguaje visual (VLM). Hemos proporcionado una guía sobre [cómo usar VLM en la reComputer Nvidia Jetson](../Generative_AI/es_How_to_run_VLM_on_reComputer.md). Consulta este enlace para obtener instrucciones de instalación y uso. Asegúrate de comprender completamente cómo realizar inferencias utilizando descripciones de texto en VLM antes de continuar con los siguientes pasos.

### Instalar Pytorch Torchaudio

Proporcionamos un curso de Nvidia Jetson AI para principiantes, que incluye instrucciones sobre [cómo instalar PyTorch, Torchaudio y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md). Descarga e instala estos paquetes de acuerdo con el entorno de tu sistema.

### Instalar Speech_vlm (Basado en SenseVoice)
1. Clona los paquetes de Speech_vlm:
    ```bash
    cd ~/
    git clone https://github.com/ZhuYaoHui1998/speech_vlm.git
    ```
2. Instala el entorno Speech_vlm:
    ```bash
    cd ~/speech_vlm
    sudo pip3 install -r requement.txt
    ```

### Instalar TTS (Basado en Coqui-ai)
```bash
cd ~/speech_vlm/TTS
sudo pip3 install .[all]
```

## Uso
La estructura del repositorio de Speech_vlm es la siguiente:
```bash
speech_vlm/
├── /TTS   # Coqui-ai TTS program
├── config # VLM config
├── README.md    #Project Introduction
├── requirements.txt   #SenseVoice required environment libraries
├── compose.yaml   #VLM Docker Compose startup file
├── delete_id.sh     #Delete camera ID script
├── example_1.wav     #Audio feedback sound tone template (replaceable)
├── model.py     #SenseVoice main program
├── set_alerts.sh     #Set up camera alerts
├── set_describe.sh     #Text input to have the VLM describe the current scene
├── set_streamer_id.sh  #Add RTSP camera to VLM
├── view_rtsp.py  # View RTSP stream by opencv
└── vlm_voice.py  # multimodal main program
```

1. Inicia el VLM
    ```bash
    cd ~/speech_vlm
    sudo docker compose up -d
    ```

    <div align="center">
        <img width={800} 
        src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/dockerps.png" />
    </div>

2. Agregar transmisión RTSP al VLM

Ve el contenido de `set_streamer_id.sh` en el repositorio `speech_vlm`:

```sh
#!/bin/bash
curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
--header 'Content-Type: application/json' \
--data '{"liveStreamUrl": "RTSP stream address"}'
```
Reemplaza `0.0.0.0` con la dirección IP de tu dispositivo Jetson y reemplaza `dirección de transmisión RTSP` con la dirección de transmisión RTSP de la cámara.
Por ejemplo:
```sh
#!/bin/bash
curl --location 'http://192.168.49.227:5010/api/v1/live-stream' \
--header 'Content-Type: application/json' \
--data '{"liveStreamUrl": "rtsp://admin:IHFXnM8k@192.168.49.15:554//Streaming/Channels/1"}'
```
:::nota
Si no tienes una cámara RTSP, te proporcionamos instrucciones sobre [cómo usar NVStreamer para transmitir videos locales como RTSP](../Developer_Tools/es_NVStreamer_Getting_Started.md) y [agregarlos al VLM](../Generative_AI/es_How_to_run_VLM_on_reComputer.md).
:::

Ejecuta set_streamer_id.sh
```bash
cd ~/speech_vlm
sudo chmod +x ./set_streamer_id.sh
./set_streamer_id.sh
```

Obtendremos una identificación de la cámara, esta identificación es muy importante y debe registrarse, así:

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/set_id.png" />
</div>

3. Ejecuta vlm_voice.py

Debes reemplazar `0.0.0.0` en las siguientes dos líneas de código Python:

```python
API_URL = 'http://0.0.0.0:5010/api/v1/chat/completions'  # API endpoint
REQUEST_ID = ""  # Request ID
```

Con la dirección IP de la Jetson y completa la ID de la cámara devuelta en el Paso 2 en lugar de `REQUEST_ID`.

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
# Get device
device = "cuda" if torch.cuda.is_available() else "cpu"

# Init TTS
api = TTS("tts_models/en/ljspeech/glow-tts").to(device)

# Configuration parameters 
FORMAT = pyaudio.paInt16  # 16-bit resolution
CHANNELS = 1  # Mono channel
CHUNK = 1024  # Number of samples per chunk
OUTPUT_FILENAME = "output.wav"  # Output file name
API_URL = 'http://192.168.49.227:5010/api/v1/chat/completions'  # API endpoint
REQUEST_ID = "1388b691-3b9f-4bda-9d70-0ff0696f80f4"  # Request ID

# Initialize PyAudio
audio = pyaudio.PyAudio()
# Prepare the list to store recording data
frames = []

# Initialize Micphone Rate
print("Available audio input devices:")
for i in range(audio.get_device_count()):
    info = audio.get_device_info_by_index(i)
    print(f"Device {i}: {info['name']} - {info['maxInputChannels']} channels")

device_index = int(input("Please select the device index for your USB microphone: "))

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
            print(f"{rate} Hz is supported.")
    except ValueError:
        print(f"{rate} Hz is not supported.")


# Initialize the model
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
        # 解析JSON字符串
        data = json.loads(json_response)
        
        # 提取content部分
        content = data["choices"][0]["message"]["content"]
        
        print(f"{content}")
        return content
    except KeyError as e:
        print(f"Key error: {e}")
    except json.JSONDecodeError as e:
        print(f"JSON decode error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def start_recording():
    global frames
    frames = []
    
    try:
        stream = audio.open(format=FORMAT, channels=CHANNELS,
                            rate=supported_rate, input=True,
                            frames_per_buffer=CHUNK, input_device_index=device_index)
        print("Recording started... Press '2' to stop recording.")
    
        while True:
            if keyboard.is_pressed('2'):
                print("Recording stopped.")
                break
            data = stream.read(CHUNK)
            frames.append(data)
    
        stream.stop_stream()
        stream.close()
    
    except Exception as e:
        print(f"An error occurred during recording: {e}")

def save_recording():
    try:
        waveFile = wave.open(OUTPUT_FILENAME, 'wb')
        waveFile.setnchannels(CHANNELS)
        waveFile.setsampwidth(audio.get_sample_size(FORMAT))
        waveFile.setframerate(supported_rate)
        waveFile.writeframes(b''.join(frames))
        waveFile.close()
        print(f"Recording saved as {OUTPUT_FILENAME}")
    except Exception as e:
        print(f"An error occurred while saving the recording: {e}")

def send_alert(text):
    # Construct the JSON payload
    payload = {
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful AI assistant."
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
    
    # Convert the payload to a JSON string
    json_payload = json.dumps(payload)
    
    # Execute the curl command using subprocess
    curl_command = [
        'curl', '--location', API_URL,
        '--header', 'Content-Type: application/json',
        '--data', json_payload
    ]
    
    try:
        result = subprocess.run(curl_command, check=True, capture_output=True, text=True)
        ##Get words
        content_result=extract_content(result.stdout)
        # TTS 
        api.tts_to_file(
            str(content_result),
            speaker_wav="./example_1.wav",
            file_path="speech.wav"
        )
        # Convert audio rate
        subprocess.run(['ffmpeg', '-i', 'speech.wav', '-ar',str(supported_rate), 'speech1.wav','-y'])
        # Play audio
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
        # Play audio
        os.remove('speech.wav')
        os.remove('speech1.wav')
        stream.stop_stream()
        stream.close()
        wf.close()  # Close the wave file as well

        #print(f"Alert sent successfully: {result.stdout}")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while sending the alert: {e.stderr}")
    finally:
        # Even if an error occurs, try to close the stream
        if stream.is_active():
            stream.stop_stream()
            os.remove('speech.wav')
            os.remove('speech1.wav')
            stream.close()
print("Welcome to the Recording and Speech-to-Text System!")
print("Press '1' to start recording, '2' to stop recording.")

while True:
    if keyboard.is_pressed('1'):
        print("Preparing to start recording...")
        start_recording()
        save_recording()
        
        print("Processing the recording file, please wait...")
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
            print(f"Speech-to-Text Result:\n{text}")
            
            # Send the transcription result as an alert
            send_alert(text)
            
        except Exception as e:
            print(f"An error occurred while processing the recording: {e}")
        
    time.sleep(0.1)  # Reduce CPU usage
```
</details>

Ejecuta python:
```bash
cd ~/speech_vlm
sudo python3 vlm_voice.py
```
Una vez que se inicia el programa, escaneará todos los dispositivos de entrada y salida de audio. Deberás seleccionar manualmente el ID de índice del dispositivo de audio deseado. El programa está a punto de comenzar a funcionar, luego presiona `1` para grabar y `2` para enviar.


<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/select_mic.png" />
</div>


4. Visualización de resultados

Hemos preparado un script `view_rtsp.py` para ver los resultados. Debes reemplazar la parte IP de `rtsp_url = "rtsp://0.0.0.0:5011/out"` con la dirección IP de tu dispositivo Jetson.

<details>
<summary>viwe_rtsp.py</summary>

```python
import cv2

rtsp_url = "rtsp://192.168.49.227:5011/out"

cap = cv2.VideoCapture(rtsp_url)

if not cap.isOpened():
    print("Cannot open RTSP stream")
    exit()

while True:
    ret, frame = cap.read()
    if not ret:
        print("Failed to retrieve frame")
        break

    height, width = frame.shape[:2]

    frame_resized = cv2.resize(frame, (int(width // 1.1), int(height // 1.1)))

    cv2.imshow('RTSP Stream', frame_resized)

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

### Demostración

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/eYaA9WGXh4Y" title="Run VLM with Speech Interaction on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>