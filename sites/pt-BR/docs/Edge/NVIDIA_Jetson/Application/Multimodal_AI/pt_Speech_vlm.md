---
description: Este wiki fornece um tutorial sobre como executar um modelo de linguagem visual com interação por voz no reComputer AGX Orin 64G.
title: Executar VLM com interação por voz
keywords:
  - Multimodal
  - NanoVLM
  - TTS
  - STT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /speech_vlm
last_update:
  date: 08/23/2024
  author: YaoHui Zhu
createdAt: '2024-08-24'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/speech_vlm/
---

# Como executar VLM com interação por voz no reComputer Jetson

## Introdução

Este guia fornece uma explicação detalhada sobre como executar um modelo de Linguagem Visual Multimodal (VLM) com interação por voz em um dispositivo reComputer Nvidia Jetson. O modelo aproveita os poderosos recursos computacionais da plataforma oficial Nvidia Jetson, combinados com o modelo open-source de conversão de fala em texto SenseVoice da Alibaba e o modelo de conversão de texto em fala (TTS) da coqui-ai, para realizar tarefas multimodais complexas. Seguindo este guia, você conseguirá instalar e operar este sistema com sucesso, habilitando-o com capacidades de reconhecimento visual e interação por voz, oferecendo assim soluções mais inteligentes para seus projetos.

### [Introdução ao VLM (Visual Language Model)](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html)

O Visual Language Model (VLM) é um modelo multimodal otimizado para a plataforma Nvidia Jetson. Ele combina processamento visual e de linguagem para lidar com tarefas complexas, como reconhecimento de objetos e geração de linguagem descritiva. O VLM é aplicável em áreas como direção autônoma, vigilância inteligente e casas inteligentes, oferecendo soluções inteligentes e intuitivas.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/vlmgif.gif" />
</div>

### [Introdução ao SenseVoice](https://github.com/FunAudioLLM/SenseVoice/tree/main)

SenseVoice é um modelo open-source focado em reconhecimento de fala multilíngue de alta precisão, reconhecimento de emoção na fala e detecção de eventos de áudio. Treinado com mais de 400.000 horas de dados, ele oferece suporte a mais de 50 idiomas e supera o modelo Whisper. O modelo SenseVoice-Small oferece latência ultrabaixa, processando 10 segundos de áudio em apenas 70 ms. Ele também fornece ajuste fino conveniente e suporta implantação em vários idiomas de programação, incluindo Python, C++, HTML, Java e C#.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/sensevoice2.png" />
</div>

### [Introdução ao TTS (Text-to-Speech)](https://github.com/coqui-ai/TTS)

O modelo TTS é um modelo de deep learning de alto desempenho para tarefas de conversão de texto em fala. Ele inclui vários modelos como Tacotron2 e vocoders como MelGAN e WaveRNN. O modelo TTS oferece suporte a TTS multisspeaker, treinamento eficiente e fornece ferramentas para curadoria de conjuntos de dados e teste de modelos. Sua base de código modular permite a fácil implementação de novos recursos.

<div align="center">
    <img width={800}
     src="https://raw.githubusercontent.com/coqui-ai/TTS/main/images/coqui-log-green-TTS.png" />
</div>

## Pré-requisitos

- Dispositivo reComputer Jetson AGX Orin 64G ou reComputer Jetson J4012 16G com mais de 16 GB de memória.
- Microfone com alto-falante USB que não necessita de driver
- Uma câmera IP que possa fornecer um endereço de stream RTSP. Também incluímos instruções sobre [como usar a ferramenta NVIDIA Nvstreamer](/pt-br/getting_started_with_nvstreamer) para converter vídeos locais em streams RTSP.

:::note
Já testamos a viabilidade deste wiki no Developer Kit do reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) e [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html).
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Instalação

### Inicializar o ambiente do sistema

1. Após instalar o sistema inicial com o JP6, você precisa verificar a instalação do `CUDA` e de outras bibliotecas. Você pode verificá-las e instalá-las executando `sudo apt-get install nvidia-jetpack`.

2. Instale `python3-pip`, `jtop` e `docker-ce`.
3. Instale as dependências necessárias executando os seguintes comandos:

    ```bash
    sudo apt-get install libportaudio2 libportaudiocpp0 portaudio19-dev
    sudo pip3 install pyaudio playsound subprocess wave keyboard
    sudo pip3 --upgrade setuptools
    sudo pip3 install sudachipy==0.5.2
    ```

4. Verifique se a entrada e saída de áudio, bem como o microfone com alto-falante USB, estão funcionando corretamente e se a conexão de rede é estável.

### Instalar o VLM

A funcionalidade central deste projeto é o modelo de linguagem visual (VLM). Fornecemos um guia sobre [como usar o VLM no reComputer Nvidia Jetson](/pt-br/run_vlm_on_recomputer). Consulte este link para obter instruções de instalação e uso. Certifique-se de entender completamente como realizar inferência usando descrições de texto no VLM antes de prosseguir com as etapas a seguir.

### Instalar Pytorch Torchaudio

Fornecemos um curso de IA Nvidia Jetson para iniciantes, que inclui instruções sobre [como instalar PyTorch, Torchaudio e Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md). Baixe e instale esses pacotes de acordo com o ambiente do seu sistema.

### Instalar Speech_vlm (Baseado em SenseVoice)

1. Clone os pacotes Speech_vlm:

    ```bash
    cd ~/
    git clone https://github.com/ZhuYaoHui1998/speech_vlm.git
    ```

2. Instale o ambiente do Speech_vlm:

    ```bash
    cd ~/speech_vlm
    sudo pip3 install -r requement.txt
    ```

### Instalar TTS (Baseado em Coqui-ai)

```bash
cd ~/speech_vlm/TTS
sudo pip3 install .[all]
```

## Uso

A estrutura do repositório speech_vlm é a seguinte:

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

1. Iniciar o VLM

    ```bash
    cd ~/speech_vlm
    sudo docker compose up -d
    ```

    <div align="center">
        <img width={800}
        src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/dockerps.png" />
    </div>

2. Adicionar stream RTSP ao VLM

Veja o conteúdo de `set_streamer_id.sh` no repositório `speech_vlm`:

```sh
#!/bin/bash
curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
--header 'Content-Type: application/json' \
--data '{"liveStreamUrl": "RTSP stream address"}'
```

Substitua `0.0.0.0` pelo endereço IP do dispositivo Jetson e substitua `RTSP stream address` pelo endereço de stream RTSP da câmera.
Por exemplo:

```sh
#!/bin/bash
curl --location 'http://192.168.49.227:5010/api/v1/live-stream' \
--header 'Content-Type: application/json' \
--data '{"liveStreamUrl": "rtsp://admin:IHFXnM8k@192.168.49.15:554//Streaming/Channels/1"}'
```

:::note
Se você não tiver uma câmera RTSP, fornecemos instruções sobre [como usar o NVStreamer para transmitir vídeos locais como RTSP](/pt-br/getting_started_with_nvstreamer) e [adicioná-los ao VLM](/pt-br/run_vlm_on_recomputer).
:::

Execute set_streamer_id.sh

```bash
cd ~/speech_vlm
sudo chmod +x ./set_streamer_id.sh
./set_streamer_id.sh
```

Obtivemos um ID de câmera; esse ID é muito importante e precisa ser anotado, assim:

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/set_id.png" />
</div>

3. Executar vlm_voice.py

Você precisa substituir `0.0.0.0` nas duas linhas de código Python a seguir:

```python
API_URL = 'http://0.0.0.0:5010/api/v1/chat/completions'  # API endpoint
REQUEST_ID = ""  # Request ID
```

pelo endereço IP do Jetson e preencher o ID da câmera retornado na Etapa 2 no lugar de `REQUEST_ID`.

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

Execute o python:

```bash
cd ~/speech_vlm
sudo python3 vlm_voice.py
```

Após o início do programa, ele fará a varredura de todos os dispositivos de entrada e saída de áudio. Você precisará selecionar manualmente o ID de índice do dispositivo de áudio desejado. O programa está prestes a começar a funcionar, então pressione `1` para gravar e `2` para enviar.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/audio_vlm/select_mic.png" />
</div>

4. Ver resultado

Nós preparamos um script `view_rtsp.py` para visualizar os resultados de saída. Você precisa substituir a parte do IP em `rtsp_url = "rtsp://0.0.0.0:5011/out"` pelo endereço IP do seu dispositivo Jetson.

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

### Demonstração

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/eYaA9WGXh4Y" title="Run VLM with Speech Interaction on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
