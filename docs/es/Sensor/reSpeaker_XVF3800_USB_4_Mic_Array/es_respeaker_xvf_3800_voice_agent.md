---
description: Construye tu propio agente de voz local usando Whisper, Ollama y NVIDIA Jetson. Guía paso a paso para configuración de GPU, speech-to-text, LLM, TTS e IA de voz offline.
title: Desplegando un Asistente de Voz Inteligente Offline de Extremo a Extremo
keywords:
- reSpeaker
- TTS
- STT
- LLM
- Voice Assistant
- Speech Recognition
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /es/respeaker_voice_assistant
last_update:
  date: 12/16/2025
  author: Kasun Thushara
---

## Descripción General

Este proyecto demuestra un asistente de voz inteligente completamente local diseñado para oficinas inteligentes y espacios inteligentes. Utiliza el array de micrófonos ReSpeaker XVF3800 para captura de voz de alta calidad, combinado con speech-to-text (STT) en el dispositivo para transcripción precisa. Un modelo de lenguaje grande (LLM) local procesa las consultas del usuario de manera inteligente sin depender de la nube, asegurando privacidad y baja latencia. Text-to-speech (TTS) genera respuestas de voz naturales, permitiendo interacción en tiempo real. El sistema es ideal para entornos como oficinas, centros comerciales, quioscos y salas de reuniones donde el control de voz seguro y offline es esencial.

## Hardware Requerido

<table align="center">
  <tr>
    <th>ReSpeaker XVF3800 </th>
    <th>Jetson AGX Orin 32GB H01 Kit</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Preparar los Dispositivos

#### ReSpeaker XVF3800 – Instalación de Firmware USB

Asegúrate de que el Array de Micrófonos USB ReSpeaker XVF3800 esté actualizado con el firmware más reciente antes de usarlo.

- Sigue la guía oficial de actualización de firmware:

  - Actualización de Firmware ReSpeaker XVF3800 [Seeed Studio Wiki](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#update-firmware)

Este paso asegura entrada de audio USB estable y compatibilidad con pipelines de procesamiento de voz posteriores.

#### NVIDIA Jetson AGX Orin – Configuración Inicial

Si tu Jetson AGX Orin aún no está configurado, flashéalo con la versión apropiada de JetPack.

- Guía de configuración oficial:

  - Jetson AGX Orin 32GB H01 Flash JetPack [Seeed Studio Wiki](https://wiki.seeedstudio.com/es/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/#prerequisites)

Después de flashear y arrancar en Ubuntu, actualiza el sistema e instala los componentes de JetPack:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

### Configuración del Entorno CUDA

#### Verificar la Versión de CUDA Instalada

Verifica qué directorios de CUDA están disponibles:

```bash
ls /usr/local
```

Deberías ver una carpeta como `cuda`, `cuda-12.x`, o similar.

#### Agregar Rutas de CUDA Permanentemente

Edita tu archivo de configuración de shell:

```bash
nano ~/.bashrc
```

Agrega las siguientes líneas al final (reemplaza con tu versión real de CUDA):

```bash
# CUDA paths
export PATH=/usr/local/cuda-(your_version)/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-(your_version)/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

Aplica los cambios:

```bash
source ~/.bashrc
```

#### Verificar la Instalación de CUDA

Confirma que CUDA esté correctamente instalado y accesible:

```bash
nvcc --version
```

Si se muestra la versión de CUDA, el soporte de GPU está listo.

### Instalar Whisper con Soporte de GPU

#### Clonar el Repositorio de Whisper

Whisper se construye desde el código fuente para habilitar la aceleración CUDA.

- Repositorio:

  - [https://github.com/ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)

Instala las dependencias requeridas:

```bash
sudo apt-get install libsdl2-dev
```

#### Construir Whisper con CUDA Habilitado

Desde el directorio `whisper.cpp`, ejecuta:

```bash
cmake -B build -DGGML_CUDA=1 -DWHISPER_SDL2=ON
cmake --build build -j --config Release
```

Esto compila Whisper con aceleración de GPU y soporte SDL.

#### Descargar el Modelo de Whisper

Descarga el modelo de Whisper desde Hugging Face:

- Modelo:

  - ggml-base-q8_0.bin

Coloca el modelo descargado dentro del directorio `models/`:

```bash
whisper.cpp/models/
```

#### Ejecutar el Servidor de Whisper

Inicia el servidor de Whisper con soporte de GPU:

```bash
cd whisper.cpp
./build/bin/whisper-server \
  -m models/ggml-base.en.bin \
  --host 0.0.0.0 \
  --port 8080 \
  --gpu
```

Esto lanza un servidor de speech-to-text en tiempo real accesible a través de la red.

### Instalar Ollama para Inferencia de LLM Local

Ollama oficialmente soporta dispositivos NVIDIA Jetson y proporciona ejecución de LLM local acelerada por CUDA.

Instala Ollama usando el instalador oficial:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Ejecuta el modelo Gemma 3:

```bash
ollama run gemma3:4b
```

## Asistente de IA de Voz Inteligente – Guía de Inicio Rápido

### Resumen de Arquitectura

1. **Detección de Palabra de Activación** – Escucha continuamente una frase de activación predefinida.
2. **Speech-to-Text (STT)** – Convierte el habla del usuario en texto usando un motor de reconocimiento de voz local.
3. **LLM potenciado por RAG** – Recupera contexto relevante de una base de datos vectorial y genera respuestas inteligentes usando un LLM local.
4. **Text-to-Speech (TTS)** – Convierte la respuesta generada en habla de sonido natural.

Todo el procesamiento se realiza localmente para asegurar baja latencia, privacidad de datos y capacidad offline.

Repositorio del proyecto:

- [https://github.com/KasunThushara/LocalVoiceAssistant.git](https://github.com/KasunThushara/LocalVoiceAssistant)

Clona el repositorio

```bash
git clone https://github.com/KasunThushara/LocalVoiceAssistant.git
```

### Inicio Rápido

#### Instalar Dependencias

Asegúrate de que Python y las dependencias del sistema requeridas estén instaladas, luego ejecuta:

```bash
pip install -r requirements.txt
```

#### Descargar un Modelo de Text-to-Speech (TTS)

Este proyecto usa modelos **Piper TTS**. A continuación se muestra un ejemplo usando una voz masculina en inglés (Amy):

```bash
# Example: female voice (amy)
wget -O models/en_US-amy-low.onnx \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx

wget -O models/en_US-amy-low.onnx.json \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx.json
```

Puedes reemplazar esto con cualquier modelo de voz Piper compatible según sea necesario.

#### Descargar Modelo de Embedding (Configuración Única)

El modelo de embedding es requerido para construir la base de datos vectorial usada por el pipeline RAG.

```bash
python download_sentence_tf.py
```

Este paso solo necesita ejecutarse una vez.

#### Construir la Base de Datos Vectorial

Crea o reconstruye la base de datos vectorial usada para recuperación contextual:

```bash
python test_scripts/rebuild_vector.py
```

Este proceso indexa tus documentos y los prepara para búsqueda semántica rápida.

#### Ejecutar la Aplicación

Inicia el Asistente de IA de Voz Inteligente:

```bash
python app.py
```

Una vez en funcionamiento, el sistema escuchará la palabra de activación y responderá a consultas de voz en tiempo real.

## Referencias

- [Ejemplo de Servidor Whisper:](https://github.com/ggml-org/whisper.cpp/tree/master/examples/server)
- [Repositorio de Whisper:](https://github.com/ggml-org/whisper.cpp)
- [Biblioteca de Modelos Ollama:](https://ollama.com/library/gemma3)
- [Guía de Ollama en Jetson:](https://www.jetson-ai-lab.com/tutorial_ollama.html)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
