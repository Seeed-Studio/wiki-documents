---
description: Grabador de Subtítulos en Tiempo Real en Nvidia Jetson
title: Grabador de Subtítulos en Tiempo Real
keywords:
  - Edge
  - reComputer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Real Time Subtitle Recoder on Nvidia Jetson
last_update:
  date: 02/23/2024
  author: Jiahao
no_comments: false # for Disqus
---

# Generación de Subtítulos de Voz en Nvidia Jetson

## Introducción


Hoy en día, tenemos muchas reuniones todos los días, pero parte del contenido de las reuniones no está destinado a ser publicado. Enviar el contenido de las reuniones a la nube para grabación y recibir subtítulos de vuelta puede representar una amenaza significativa para la privacidad de las reuniones. Y lo más importante es que perderás el contenido de tu reunión si hay retrasos en internet.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" /></div>

Y aquí te presentamos [Generación de Subtítulos de Voz en Jetson](https://github.com/yuyoujiang/Real-time-Subtitle-Recorder-on-Jetson), que puede ofrecer servicios de voz a subtítulos en tiempo real mientras evita la filtración de información en internet. El contenido de las reuniones puede ser transcrito y mostrado en pantallas usando un modelo de IA en forma de subtítulos, lo que puede proteger la privacidad de las reuniones y reducir la carga de trabajo del grabador de reuniones.


## Configuración de Hardware

- [reComputer ](https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products) (O otros dispositivos basados en Jetson)

<p style={{textAlign: 'center'}}> 
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" alt="left" width={800} height="auto" />
 </p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

-  [reSpeaker](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products) (O otros micrófonos con interfaz USB)

<p style={{textAlign: 'center'}}> 
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" 
alt="auto" width={800} height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

-  conexión de hardware
<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## Preparar el entorno de ejecución

#### Paso1. Instalar Riva ASR Server:

Por favor consulta [este wiki](https://wiki.seeedstudio.com/es/Local_Voice_Chatbot/#install-riva-server) para instalar Riva ASR Server.

En tu terminal(Ctrl+Alt+T), ingresa ```sudo docker ps``` y verás algo como lo siguiente, eso significa que has terminado el primer paso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/riva.png" alt="pir" width={1000} height="auto"/></p>

#### Paso2. Instalar flask:

Abre la terminal (`Ctrl+Alt+T`) y usa el siguiente comando para instalar flask:

```shell
pip3 install flask
python3 -c 'import flask; print(flask.__version__)
```
Si obtienes algo como lo siguiente, eso significa que has terminado este paso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flask.png" alt="pir" width={1000} height="auto"/></p>

#### Paso3. actualizar pip setuptools wheel:

```shell
# riva client
git clone --depth=1 --recursive https://github.com/nvidia-riva/python-clients
cd python-clients
sudo pip3 install --upgrade pip setuptools wheel
pip3 install --no-cache-dir --verbose -r requirements.txt
python3 setup.py --verbose bdist_wheel
pip3 install --no-cache-dir --verbose dist/nvidia_riva_client*.whl
python3 -c 'import riva.client; print(riva.client.__version__)'
```
En tu terminal(Ctrl+Alt+T), ingresa ```pip --version``` verás algo como lo siguiente, significa que terminaste de actualizar pip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pip.png" alt="pir" width={1000} height="auto"/></p>

En tu terminal(Ctrl+Alt+T), ingresa ```python3 -c 'import setuptools; print(setuptools.__version__)``` si obtienes algo como lo siguiente, eso significa que has actualizado setuptools.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/setuptools.png" alt="pir" width={1000} height="auto"/></p>

En tu terminal(Ctrl+Alt+T), ingresa ```wheel version``` verás algo como lo siguiente, significa que terminaste de actualizar wheel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/wheel.png" alt="pir" width={1000} height="auto"/></p>

#### Paso4. instalar pyaudio:

```shell
# pyaudio
sudo apt-get install -y --no-install-recommends python3-pyaudio
python3 -c 'import pyaudio; print(pyaudio.__version__)'
```
Si tu terminal obtiene algo como lo siguiente, terminaste el último paso, ¡felicitaciones!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pyaudio.png" alt="pir" width={1000} height="auto"/></p>

## Vamos a ejecutarlo

```shell
git clone https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson.git
cd Real-time-Subtitle-Recorder-on-Jetson
python3 recorder.py
```
<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XypO6BlXkCY?si=CczjuOXxak1xAelO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Perspectivas del Proyecto

En este proyecto, usamos el [Riva ASR Server](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/riva/resources/riva_quickstart) para capturar datos de la entrada del micrófono en tiempo real y mostrarlos en una página web. En el futuro agregaremos más aplicaciones como traducir un idioma a otro, tener velocidad de respuesta más rápida.