---
description: Implementa Whisper en una NVIDIA Jetson Orin para convertir voz a texto en tiempo real
title:  Speech2Text con Whisper
keywords:
  - Edge
  - reComputer
  - Jetson
  - whisper
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Whisper_on_Jetson_for_Real_Time_Speech_to_Text

last_update:
  date: 03/14/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Despliegue de Whisper en la NVIDIA Jetson Orin para conversión de voz a texto en tiempo real

## Introducción

Los sistemas de conversión de voz a texto (STT) en tiempo real desempeñan un papel vital en las aplicaciones modernas, desde asistentes de voz hasta servicios de transcripción. A continuación se muestran algunos modelos STT populares: Whisper, Riva, DeepSpeech, Google Cloud Speech-to-Text API, Microsoft Azure Speech Service, IBM Watson Speech to Text, Kaldi, Wit.ai, etc. NVIDIA Jetson Orin, conocida por su alto rendimiento y eficiencia energética, ofrece una plataforma prometedora para implementar aplicaciones exigentes de computo en el borde.

[Whisper](https://github.com/openai/whisper), un sistema STT avanzado que aprovecha el aprendizaje profundo, destaca por su precisión y eficiencia. [Riva](https://github.com/nvidia-riva) es un framework integral de IA conversacional multimodal desarrollado por NVIDIA. Al implementar Whisper o Riva en la Jetson Orin, los desarrolladores pueden aprovechar sus potentes núcleos de GPU y CPU, junto con tecnologías de aceleración de hardware como Tensor Cores, para lograr STT en tiempo real con baja latencia.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" /></div>

En esta wiki, te presentamos [Whisper en tiempo real en la Jetson](https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git), esta integración permite el procesamiento de voz directamente en el dispositivo, eliminando la necesidad de una conectividad de red constante y mejorando la privacidad y la seguridad. Además, compararemos la velocidad de inferencia de Whisper y Riva cuando se implementen en el mismo dispositivo Jetson Orin. En última instancia, la implementación de Whisper en la Jetson Orin permite a los desarrolladores crear aplicaciones STT sólidas y eficientes que ofrecen alta precisión y baja latencia en diversos dominios, desde hogares inteligentes hasta automatización industrial.

## Configuración de Hardware
### Componentes de Hardware
<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer (u otros dispositivos potenciados por Jetson)
      </th>
      <th>reSpeaker (u otros micrófonos con interfaz USB)</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products">
				<strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products">
				<strong><span><font color={'FFFFFF'} size={"4"}> Conseguir uno 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Conexiones de Hardware
<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## Preparar el entorno de ejecución

#### Paso 1. Instalar dependencias

```shell
git clone https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git
cd Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text
pip install -r requirements.txt
sudo apt update && sudo apt install ffmpeg
arecord -D hw:2,0 --dump-hw-params #set microphone rate to 16000
```
#### Paso 2. Probar el entorno:

```shell
python test.py
```
Si ves la siguiente información impresa en el terminal, significa que has instalado correctamente las bibliotecas necesarias.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Deploy-whisper-on-Nvidia-Jetson-orin-for-real-time-speech-to-text-test.png" alt="pir" width={1000} height="auto"/></p>

En tu terminal (Ctrl+Alt+T), ingresa ``` ffmpeg -version``` si obtienes algo como lo siguiente, eso significa que has instalado ffmpeg.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Whisper-ffmpeg.png" alt="pir" width={1000} height="auto"/></p>

## Ahora ejecuta el programa

```shell
python main.py
``` 
<iframe width="800" height="400" src="https://www.youtube.com/embed/KR0GYqUuo5Y?si=uSGUkKmCSZmaq5f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Riva vs Whisper

Riva, conocida por su avanzado reconocimiento de voz impulsado por inteligencia artificial y procesamiento del lenguaje natural, brinda a los usuarios transcripción, traducción y análisis en tiempo real de conversaciones habladas. 

Whisper es un sistema de reconocimiento automático de voz (ASR) entrenado con 680.000 horas de datos supervisados ​​multilingües y multitarea recopilados de la web. Además, permite la transcripción en varios idiomas, así como la traducción de esos idiomas al inglés.

En el video mostrado a continuación, compararemos la capacidad de [Riva](https://wiki.seeedstudio.com/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/) y Whisper siendo ejecutados sobre un dispositivo Nvidia Jetson corriendo tareas de transcripción de voz a texto.

<iframe width="800" height="400" src="https://www.youtube.com/embed/2l7yus611DI?si=XdEjwzpZdJkLC8aB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Perspectivas del proyecto

En este proyecto, utilizamos Whisper para capturar datos de la entrada del micrófono en tiempo real y mostrarlos en una página web. En el futuro, mejoraremos las capacidades de procesamiento en tiempo real de Whisper para reducir aún más la latencia y mejorar la precisión del reconocimiento de voz y exploraremos la integración con otros servicios de IA o API para mejorar la funcionalidad de la aplicación.