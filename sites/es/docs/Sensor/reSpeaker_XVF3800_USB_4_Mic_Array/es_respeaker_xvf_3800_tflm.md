---
description: Aprende cómo entrenar y desplegar modelos de voz de TensorFlow Lite Micro (TFLM) en el Seeed XIAO ESP32 con XVF3800 ReSpeaker para reconocimiento de voz en tiempo real. Este tutorial cubre el entrenamiento del modelo, la conversión de TFLite a código hex y la grabación en la placa para lograr una detección precisa de palabras clave en microcontroladores.
title: TensorFlow Lite en reSpeaker XVF3800
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
createdAt: '2025-09-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_tensorflow/
---

## Introducción 

En este tutorial, te guiamos para crear un sistema de reconocimiento de voz personalizado usando TensorFlow Lite Micro (TFLM) en el Seeed XIAO ESP32 con el XVF3800 ReSpeaker. Aprenderás cómo recopilar y etiquetar datos de audio, preprocesarlos para el entrenamiento y dividirlos en conjuntos de entrenamiento y validación. A continuación, entrenamos un modelo personalizado de detección de palabras clave adaptado a tu conjunto de datos, lo convertimos a formato TFLite y finalmente lo desplegamos como un archivo hex en el ESP32 para el reconocimiento de comandos de voz en tiempo real. Al final, tendrás un sistema totalmente funcional basado en microcontrolador capaz de clasificar comandos hablados con precisión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


## Dependencias

Para seguir este tutorial, necesitas instalar las siguientes librerías de Arduino:

* [TFLite Micro Arduino Examples](https://github.com/pschatzmann/tflite-micro-arduino-examples)
* [Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools)

Asegúrate de instalar estas librerías en tu Arduino IDE. Cada repositorio de GitHub contiene una guía sobre cómo instalar y configurar correctamente las librerías.


## Recopilar los datos

Grabaremos muestras de voz cortas (10 segundos cada una) y las dividiremos en clips de 1 segundo. Para usar el XVF3800 ReSpeaker, puede que primero tengas que instalar el firmware USB.

**Guía de firmware:**
[Seeed Studio XVF3800 Firmware Flash](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#flash-firmware)

---

### Paso 1:Encontrar el ID del dispositivo

Utiliza el siguiente script de Python para listar todos los dispositivos de audio conectados a tu PC y encontrar el índice de dispositivo correcto para el ReSpeaker:

```python
import sounddevice as sd

# List all available devices
devices = sd.query_devices()

# Print all devices
for i, device in enumerate(devices):
    print(f"Device {i}: {device['name']} (input channels: {device['max_input_channels']})")
```

> Nota: Actualiza `DEVICE_INDEX` en el siguiente script de acuerdo con el número de dispositivo impreso para el ReSpeaker.


### Paso 2:Recopilar muestras de audio

Este script de Python recopila muestras de audio según el nombre de la persona y la etiqueta. Se creará una carpeta para cada persona y los archivos WAV se guardarán bajo las etiquetas correspondientes.

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

**Cómo funciona:**

* Crea una carpeta para cada persona.
* Solicita etiquetas (por ejemplo, "yes", "no") y guarda los archivos de audio correspondientes.
* Graba clips de audio de 10 segundos que luego pueden dividirse en segmentos de 1 segundo para el entrenamiento.


## Preprocesamiento de datos

Después de recopilar tus muestras de audio de 10 segundos, el siguiente paso es dividirlas en clips de 1 segundo para el entrenamiento. Yo utilicé **Edge Impulse** para visualizar y dividir fácilmente las grabaciones.

### Formato de archivo de audio

Todos los archivos de audio deben cumplir los siguientes requisitos:

* **Formato:** WAV (.wav)
* **Frecuencia de muestreo:** 16 kHz
* **Canales:** Mono (1 canal)
* **Profundidad de bits:** PCM de 16 bits
* **Duración:** 1 segundo (1000 ms)

> Nota: Edge Impulse puede ayudar a dividir automáticamente grabaciones más largas en estos segmentos de 1 segundo.

### Etiquetas objetivo

* Cada **nombre de carpeta** se trata como una **etiqueta de clase**.
* Ejemplos:

  * `hi_speaker` → El modelo reconoce “hi speaker”
  * `seeed` → El modelo reconoce “seeed”
* Puedes añadir más clases según sea necesario, pero los nombres de las carpetas **deben coincidir con la lista `WANTED_WORDS`** utilizada durante el entrenamiento.

### Desconocido / Otros

* La carpeta `other/` debe contener **palabras aleatorias que no estén en tu lista objetivo**. Esto ayuda al modelo a clasificar correctamente las palabras desconocidas.

### Silencio / Ruido

* La carpeta `_background_noise_/` debe incluir sonidos ambientales como:

  * Ruido de oficina
  * Ruido de la calle
  * Tecleo de teclado
  * Grabaciones de silencio (micrófono encendido pero sin hablar)

> Un preprocesamiento adecuado garantiza que el modelo aprenda a distinguir entre comandos objetivo, palabras desconocidas y ruido de fondo.

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
## Entrenamiento de datos

Para entrenar tu modelo de reconocimiento de voz personalizado, se recomienda usar un PC con **Ubuntu x86**. También necesitarás la herramienta `xxd`, que se puede instalar mediante:

```bash
sudo apt-get install xxd
```

### Paso 1:Instalar Anaconda

* Descarga e instala [**Anaconda Navigator**](https://www.anaconda.com/products/navigator)
* Crea un nuevo entorno en Anaconda para este proyecto.

### Paso 2:Configurar el entorno

Instala los paquetes necesarios en el entorno:

:::info

* **Framework de Deep Learning:** TensorFlow 1.5
* **Lenguaje de programación:** Python 3.7
:::

> Esta configuración garantiza la compatibilidad con TensorFlow Lite Micro para el despliegue en microcontroladores.

### Paso 3:Ejecutar el cuaderno de entrenamiento

* Descarga el cuaderno de Jupyter:
  [train\_micro\_speech\_model.ipynb](https://github.com/KasunThushara/TFLM_voice_module/blob/main/train_micro_speech_model.ipynb)
* Abre el cuaderno en Jupyter y sigue las instrucciones.
* Una vez completado, el cuaderno generará un **archivo de modelo hexadecimal** llamado `model.cc` listo para desplegar en el ESP32.

> El archivo `model.cc` puede incluirse después en tu proyecto de Arduino para ejecutar la detección de palabras clave en tiempo real en el XIAO ESP32 con el XVF3800 ReSpeaker.




## Inferencia en XIAO ESP32 con XVF3800

Una vez que tu archivo `model.cc` esté listo, puedes desplegarlo en el XIAO ESP32 para el reconocimiento de comandos de voz en tiempo real. Debido a que el XVF3800 genera **muestras de audio de 32 bits**, necesitamos **convertirlas a 16 bits** para TensorFlow Lite Micro. También configuramos los pines I2S, la frecuencia de muestreo y los canales para que coincidan con los requisitos del modelo.



### Ejemplo de código Arduino

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

#### Notas clave

* Asegúrate de **reemplazar `g_model`** con el nombre de tu archivo `model.cc` generado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/tflm/image1.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/tflm/image2.png" alt="pir" width={800} height="auto" /></p>

* XVF3800 genera **estéreo de 32 bits** de forma predeterminada; lo convertimos a **mono de 16 bits** para que coincida con el modelo.
* TensorFlow Lite Micro lee los datos de audio de forma continua y activa `respondToCommand()` siempre que se detecta un comando reconocido.

> Con esta configuración, tu XIAO ESP32 ahora puede reconocer comandos de voz personalizados en tiempo real usando la matriz de micrófonos XVF3800.



## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
