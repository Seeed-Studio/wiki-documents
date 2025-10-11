---
description: Desplegar Whisper en NVIDIA Jetson Orin para Conversión de Voz a Texto en Tiempo Real
title: Voz a Texto con Whisper
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

# Desplegar Whisper en NVIDIA Jetson Orin para Conversión de Voz a Texto en Tiempo Real

## Introducción

Los sistemas de conversión de voz a texto (STT) en tiempo real desempeñan un papel vital en las aplicaciones modernas, desde asistentes de voz hasta servicios de transcripción. Aquí hay algunos modelos STT populares: Whisper, Riva, DeepSpeech, Google Cloud Speech-to-Text API, Microsoft Azure Speech Service, IBM Watson Speech to Text, Kaldi, Wit.ai y muchos más. El NVIDIA Jetson Orin, conocido por su alto rendimiento y eficiencia energética, ofrece una plataforma prometedora para desplegar tales aplicaciones exigentes en el borde.

[Whisper](https://github.com/openai/whisper), un sistema STT avanzado que aprovecha el aprendizaje profundo, sobresale en precisión y eficiencia. [Riva](https://github.com/nvidia-riva) es un marco integral de IA conversacional multimodal desarrollado por NVIDIA. Al desplegar Whisper o Riva en el Jetson Orin, los desarrolladores pueden aprovechar su potente GPU y núcleos de CPU, junto con tecnologías de aceleración de hardware como Tensor Cores, para lograr STT en tiempo real con baja latencia.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" /></div>

En esta wiki te presentamos [Real Time Whisper on Jetson](https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git), esta integración permite el procesamiento de voz directamente en el dispositivo, eliminando la necesidad de conectividad de red constante y mejorando la privacidad y seguridad. Además, compararemos la velocidad de inferencia de Whisper y Riva cuando se despliegan en el mismo dispositivo Jetson Orin. En última instancia, desplegar Whisper en el Jetson Orin permite a los desarrolladores construir aplicaciones STT robustas y eficientes que ofrecen alta precisión y baja latencia en varios dominios, desde hogares inteligentes hasta automatización industrial.

## Configuración de Hardware
### Componentes de hardware
<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer(O otros dispositivos basados en Jetson)</th>
      <th>reSpeaker (O otros micrófonos con interfaz USB)</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### conexión de hardware
<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## Preparar el entorno de ejecución

#### Paso1. Instalar dependencias:

```shell
git clone https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git
cd Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text
pip install -r requirements.txt
sudo apt update && sudo apt install ffmpeg
arecord -D hw:2,0 --dump-hw-params #configurar la tasa del micrófono a 16000
```
#### Paso2. Probar el entorno:

```shell
python test.py
```
Si ves la siguiente información impresa en la terminal, significa que has instalado exitosamente las librerías necesarias.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Deploy-whisper-on-Nvidia-Jetson-orin-for-real-time-speech-to-text-test.png" alt="pir" width={1000} height="auto"/></p>

En tu terminal(Ctrl+Alt+T), ingresa ``` ffmpeg -version``` si obtienes algo como lo siguiente, eso significa que has instalado ffmpeg.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Whisper-ffmpeg.png" alt="pir" width={1000} height="auto"/></p>

## Vamos a ejecutarlo

```shell
python main.py
``` 
<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/KR0GYqUuo5Y?si=uSGUkKmCSZmaq5f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Riva vs Whisper

Riva, conocido por su reconocimiento de voz avanzado impulsado por IA y procesamiento de lenguaje natural, empodera a los usuarios con transcripción, traducción y análisis en tiempo real de conversaciones habladas.

Whisper es un sistema de reconocimiento automático de voz (ASR) entrenado con 680,000 horas de datos supervisados multilingües y multitarea recopilados de la web. Además, permite la transcripción en múltiples idiomas, así como la traducción de esos idiomas al inglés.

En el próximo video comparativo, compararemos la capacidad de [Riva](https://wiki.seeedstudio.com/es/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/) y Whisper en Conversión de Voz a Texto desarrollado en Nvidia Jetson.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/2l7yus611DI?si=XdEjwzpZdJkLC8aB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas del Proyecto

En este proyecto, usamos Whisper para capturar datos de la entrada del micrófono en tiempo real y mostrarlos en una página web. En el futuro, mejoraremos las capacidades de procesamiento en tiempo real de Whisper para reducir aún más la latencia y mejorar la precisión del reconocimiento de voz y explorar la integración con otros servicios de IA o APIs para mejorar la funcionalidad de la aplicación.