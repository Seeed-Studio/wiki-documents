---
description: Aprenda a treinar e implantar modelos de voz TensorFlow Lite Micro (TFLM) no Seeed XIAO ESP32 com o XVF3800 ReSpeaker para reconhecimento de voz em tempo real. Este tutorial aborda o treinamento do modelo, conversão TFLite para código hex e gravação para obter detecção precisa de palavras‑chave em microcontroladores.
title: TensorFlow Lite no reSpeaker XVF3800
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
  - TensorFlow
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_tensorflow
last_update:
  date: 9/19/2025
  author: Kasun Thushara
createdAt: '2025-09-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_tensorflow/
---

## Introdução 

Neste tutorial, vamos guiá-lo na criação de um sistema personalizado de reconhecimento de voz usando TensorFlow Lite Micro (TFLM) no Seeed XIAO ESP32 com o XVF3800 ReSpeaker. Você aprenderá como coletar e rotular dados de áudio, pré-processá-los para treinamento e dividi-los em conjuntos de treinamento e validação. Em seguida, treinaremos um modelo personalizado de detecção de palavras‑chave adaptado ao seu conjunto de dados, o converteremos para o formato TFLite e, por fim, o implantaremos como um arquivo hex no ESP32 para reconhecimento de comandos de voz em tempo real. Ao final, você terá um sistema totalmente funcional baseado em microcontrolador capaz de classificar comandos falados com precisão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>


## Dependências

Para acompanhar este tutorial, você precisa instalar as seguintes bibliotecas do Arduino:

* [TFLite Micro Arduino Examples](https://github.com/pschatzmann/tflite-micro-arduino-examples)
* [Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools)

Certifique-se de instalar essas bibliotecas na sua IDE do Arduino. Cada repositório do GitHub contém um guia sobre como instalar e configurar corretamente as bibliotecas.


## Coletar os Dados

Vamos gravar pequenas amostras de voz (10 segundos cada) e dividi-las em clipes de 1 segundo. Para usar o XVF3800 ReSpeaker, talvez seja necessário instalar primeiro o firmware USB.

**Guia de Firmware:**
[Seeed Studio XVF3800 Firmware Flash](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#flash-firmware)

---

### Passo 1: Encontrar o ID do Dispositivo

Use o seguinte script Python para listar todos os dispositivos de áudio conectados ao seu PC e encontrar o índice de dispositivo correto para o ReSpeaker:

```python
import sounddevice as sd

# List all available devices
devices = sd.query_devices()

# Print all devices
for i, device in enumerate(devices):
    print(f"Device {i}: {device['name']} (input channels: {device['max_input_channels']})")
```

> Nota: atualize `DEVICE_INDEX` no próximo script de acordo com o número de dispositivo impresso para o ReSpeaker.


### Passo 2: Coletar Amostras de Áudio

Este script Python coleta amostras de áudio com base no nome da pessoa e no rótulo. Uma pasta será criada para cada pessoa, e arquivos WAV serão salvos sob os rótulos correspondentes.

```python
import os
import sounddevice as sd
from scipy.io.wavfile import write

# === Settings ===
SAMPLERATE = 16000
CHANNELS = 1  # ReSpeaker 4-Mic Array
DURATION = 10  # seconds
DEVICE_INDEX = 2  # Set to your ReSpeaker device index


def record_audio(filename, samplerate=SAMPLERATE, channels=CHANNELS, duration=DURATION, device=DEVICE_INDEX):
    print(f"Recording '{filename}' for {duration} seconds...")
    recording = sd.rec(int(duration * samplerate),
                       samplerate=samplerate,
                       channels=channels,
                       dtype='int16',
                       device=device)
    sd.wait()
    write(filename, samplerate, recording)
    print(f"Saved: {filename}")


def get_next_filename(directory, label):
    existing = [f for f in os.listdir(directory) if f.startswith(label) and f.endswith('.wav')]
    index = len(existing) + 1
    return os.path.join(directory, f"{label}.{index}.wav")


def collect_samples():
    while True:
        sample_name = input("Enter sample name (e.g., PersonA): ").strip()
        if not sample_name:
            print("Sample name cannot be empty.")
            continue

        sample_dir = os.path.join(os.getcwd(), sample_name)
        os.makedirs(sample_dir, exist_ok=True)
        print(f"Directory created: {sample_dir}")

        while True:
            label = input("Enter sound/voice to record (e.g., yes, no): ").strip()
            if not label:
                print("Label cannot be empty.")
                continue

            while True:
                filename = get_next_filename(sample_dir, label)
                record_audio(filename)

                cont = input("Record another sample for this label? (yes/no): ").strip().lower()
                if cont != 'yes':
                    break

            next_label = input("Do you want to record a different label? (yes/no): ").strip().lower()
            if next_label != 'yes':
                break

        next_sample = input("Do you want to create a new sample? (yes/no): ").strip().lower()
        if next_sample != 'yes':
            print("Audio collection completed.")
            break


if __name__ == "__main__":
    collect_samples()
```

**Como funciona:**

* Cria uma pasta para cada pessoa.
* Solicita rótulos (por exemplo, "sim", "não") e salva os arquivos de áudio correspondentes.
* Grava clipes de áudio de 10 segundos que depois podem ser divididos em segmentos de 1 segundo para treinamento.


## Pré-processamento de Dados

Depois de coletar suas amostras de áudio de 10 segundos, o próximo passo é dividi-las em clipes de 1 segundo para treinamento. Eu usei o **Edge Impulse** para visualizar e dividir as gravações facilmente.

### Formato de Arquivo de Áudio

Todos os arquivos de áudio devem atender aos seguintes requisitos:

* **Formato:** WAV (.wav)
* **Taxa de Amostragem:** 16 kHz
* **Canais:** Mono (1 canal)
* **Profundidade de Bits:** PCM de 16 bits
* **Duração:** 1 segundo (1000 ms)

> Nota: o Edge Impulse pode ajudar a dividir automaticamente gravações mais longas nesses segmentos de 1 segundo.

### Rótulos de Destino

* Cada **nome de pasta** é tratado como um **rótulo de classe**.
* Exemplos:

  * `hi_speaker` → o modelo reconhece “hi speaker”
  * `seeed` → o modelo reconhece “seeed”
* Você pode adicionar mais classes conforme necessário, mas os nomes das pastas **devem corresponder à lista `WANTED_WORDS`** usada durante o treinamento.

### Desconhecido / Outro

* A pasta `other/` deve conter **palavras aleatórias que não estejam na sua lista de destino**. Isso ajuda o modelo a classificar corretamente palavras desconhecidas.

### Silêncio / Ruído

* A pasta `_background_noise_/` deve incluir sons de ambiente, como:

  * Ruído de escritório
  * Ruído de rua
  * Digitação de teclado
  * Gravações de silêncio (microfone ligado, mas sem fala)

> Um pré-processamento adequado garante que o modelo aprenda a distinguir entre comandos de destino, palavras desconhecidas e ruído de fundo.

```sql
dataset_dir/
│
├── hi_speaker/           # All audio samples for the "hi_speaker" keyword
│   ├── audio_0.wav
│   ├── audio_1.wav
│   └── ...
│
├── seeed/                # All audio samples for the "seeed" keyword
│   ├── audio_2.wav
│   ├── audio_3.wav
│   └── ...
│
├── other/                # Random speech or non-target words
│   ├── audio_4.wav
│   ├── audio_5.wav
│   └── ...
│
└── _background_noise_/   # Background noise samples
    ├── noise_0.wav
    ├── noise_1.wav
    └── ...

```
## Treinamento de Dados

Para treinar seu modelo personalizado de reconhecimento de voz, é recomendado usar um PC com **Ubuntu x86**. Você também precisará da ferramenta `xxd`, que pode ser instalada via:

```bash
sudo apt-get install xxd
```

### Passo 1: Instalar o Anaconda

* Baixe e instale o [**Anaconda Navigator**](https://www.anaconda.com/products/navigator)
* Crie um novo ambiente no Anaconda para este projeto.

### Passo 2: Configurar o Ambiente

Instale os pacotes necessários no ambiente:

:::info

* **Framework de Deep Learning:** TensorFlow 1.5
* **Linguagem de Programação:** Python 3.7
:::

> Esta configuração garante compatibilidade com o TensorFlow Lite Micro para implantação em microcontroladores.

### Passo 3: Executar o Notebook de Treinamento

* Baixe o notebook Jupyter:
  [train\_micro\_speech\_model.ipynb](https://github.com/KasunThushara/TFLM_voice_module/blob/main/train_micro_speech_model.ipynb)
* Abra o notebook no Jupyter e siga as instruções.
* Ao concluir, o notebook irá gerar um **arquivo de modelo em hexadecimal** chamado `model.cc`, pronto para implantação no ESP32.

> O arquivo `model.cc` pode então ser incluído no seu projeto Arduino para executar detecção de palavras‑chave em tempo real no XIAO ESP32 com o XVF3800 ReSpeaker.




## Inferência no XIAO ESP32 com XVF3800

Quando o seu arquivo `model.cc` estiver pronto, você poderá implantá-lo no XIAO ESP32 para reconhecimento de comandos de voz em tempo real. Como o XVF3800 produz **amostras de áudio de 32 bits**, precisamos **convertê-las para 16 bits** para o TensorFlow Lite Micro. Também configuramos os pinos I2S, a taxa de amostragem e os canais para corresponder aos requisitos do modelo.



### Exemplo de Código Arduino

```cpp
#include "AudioTools.h"
#include "AudioTools/AudioLibs/TfLiteAudioStream.h"
#include "model.h"  // Replace with your generated model.cc

I2SStream i2s;  
TfLiteAudioStream tfl;  
StreamCopy copier(tfl, i2s);

const char* kCategoryLabels[] = {
    "silence",
    "unknown",
    "hi_respeaker", //change the key word that you trained
    "seeed" // change the key word that you trained 
};

void respondToCommand(const char* found_command, uint8_t score, bool is_new_command) {
  if (is_new_command) {
    Serial.printf("Detected: %s (score: %d)\n", found_command, score);
  }
}

// Temp buffer for 32-bit I2S samples
int32_t i2s_buffer[512];
int16_t conv_buffer[512];

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Warning);

  // XVF3800 I2S input configuration
  auto cfg = i2s.defaultConfig(RX_MODE);
  cfg.sample_rate = 16000;
  cfg.channels = 1;            // Mono
  cfg.bits_per_sample = 32;    // XVF3800 streams 32-bit samples
  cfg.pin_bck = 8;
  cfg.pin_ws = 7;
  cfg.pin_data = 44;
  cfg.pin_data_rx = 43;
  cfg.is_master = true;
  i2s.begin(cfg);

  // TensorFlow Lite configuration
  auto tcfg = tfl.defaultConfig();
  tcfg.setCategories(kCategoryLabels);
  tcfg.sample_rate = 16000;
  tcfg.channels = 1;
  tcfg.kTensorArenaSize = 15 * 1024;
  tcfg.respondToCommand = respondToCommand;
  tcfg.model = g_model;  // Replace with your model.cc
  tfl.begin(tcfg);
}

void loop() {
  // Read 32-bit audio from XVF3800
  size_t n = i2s.readBytes((uint8_t*)i2s_buffer, sizeof(i2s_buffer));

  if (n > 0) {
    size_t samples = n / sizeof(int32_t);

    // Convert 32-bit -> 16-bit
    for (size_t i = 0; i < samples; i++) {
      conv_buffer[i] = (int16_t)(i2s_buffer[i] >> 16);
    }

    // Feed converted data into TensorFlow
    tfl.write((uint8_t*)conv_buffer, samples * sizeof(int16_t));
  }
}
```

#### Notas Importantes

* Certifique-se de **substituir `g_model`** pelo nome do seu arquivo `model.cc` gerado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/tflm/image1.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/tflm/image2.png" alt="pir" width={800} height="auto" /></p>

* O XVF3800 gera **estéreo de 32 bits** por padrão; nós convertemos para **mono de 16 bits** para corresponder ao modelo.
* O TensorFlow Lite Micro lê continuamente os dados de áudio e aciona `respondToCommand()` sempre que um comando reconhecido é detectado.

> Com esta configuração, seu XIAO ESP32 agora pode reconhecer comandos de voz personalizados em tempo real usando o array de microfones XVF3800.



## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
