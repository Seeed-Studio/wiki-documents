---
description: Gravador de legendas em tempo real no Nvidia Jetson
title: Gravador de legendas em tempo real
keywords:
  - Edge
  - reComputer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Real_Time_Subtitle_Recoder_on_Nvidia_Jetson
last_update:
  date: 02/23/2024
  author: Jiahao
no_comments: false
createdAt: '2024-02-26'
updatedAt: '2026-03-05'
url: https://wiki.seeedstudio.com/pt-br/Real_Time_Subtitle_Recoder_on_Nvidia_Jetson/
---

# Geração de legendas de voz no Nvidia Jetson

## Introdução

Hoje em dia, temos muitas reuniões todos os dias, mas parte do conteúdo das reuniões não é destinado à publicação. Enviar o conteúdo da reunião para a nuvem para gravação e retorno de legendas pode representar uma ameaça significativa à privacidade da reunião. E o mais importante é que você perderá o conteúdo da reunião se a internet estiver lenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" /></div>

E aqui apresentamos o [Speech Subtitle Generation on Jetson](https://github.com/yuyoujiang/Real-time-Subtitle-Recorder-on-Jetson), que pode oferecer serviços de conversão de voz em legendas em tempo real, evitando vazamento de informações na internet. O conteúdo da reunião pode ser transcrito e exibido em telas usando um modelo de IA em forma de legenda, o que pode proteger a privacidade da reunião e reduzir a carga de trabalho do responsável pela ata.

## Configuração de hardware

- [reComputer](https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products) (ou outros dispositivos baseados em Jetson)

<p style={{textAlign: 'center'}}>
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" alt="left" width={800} height="auto" />
 </p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

- [reSpeaker](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products) (ou outros microfones com interface USB)

<p style={{textAlign: 'center'}}>
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png"
alt="auto" width={800} height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

- conexão de hardware

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## Prepare o ambiente de execução

#### Etapa 1. Instalar o Riva ASR Server

Consulte [este wiki](https://wiki.seeedstudio.com/pt-br/Local_Voice_Chatbot/#install-riva-server) para instalar o Riva ASR Server.

No seu terminal (Ctrl+Alt+T), digite ```sudo docker ps``` e você verá algo como o seguinte, o que significa que você concluiu a primeira etapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/riva.png" alt="pir" width={1000} height="auto"/></p>

#### Etapa 2. Instalar o flask

Abra o terminal (`Ctrl+Alt+T`) e use o seguinte comando para instalar o flask:

```shell
pip3 install flask
python3 -c 'import flask; print(flask.__version__)
```

Se você obtiver algo como o seguinte, isso significa que você concluiu esta etapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flask.png" alt="pir" width={1000} height="auto"/></p>

#### Etapa 3. Atualizar pip setuptools wheel

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

No seu terminal (Ctrl+Alt+T), digite ```pip --version``` e você verá algo como o seguinte; isso significa que você concluiu a atualização do pip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pip.png" alt="pir" width={1000} height="auto"/></p>

No seu terminal (Ctrl+Alt+T), digite ```python3 -c 'import setuptools; print(setuptools.__version__)``` se você obtiver algo como o seguinte, isso significa que você atualizou o setuptools.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/setuptools.png" alt="pir" width={1000} height="auto"/></p>

No seu terminal (Ctrl+Alt+T), digite ```wheel version``` e você verá algo como o seguinte; isso significa que você concluiu a atualização do wheel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/wheel.png" alt="pir" width={1000} height="auto"/></p>

#### Etapa 4. Instalar pyaudio

```shell
# pyaudio
sudo apt-get install -y --no-install-recommends python3-pyaudio
python3 -c 'import pyaudio; print(pyaudio.__version__)'
```

Se o seu terminal mostrar algo como o seguinte, você concluiu a última etapa, parabéns!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pyaudio.png" alt="pir" width={1000} height="auto"/></p>

## Vamos executá-lo

```shell
git clone https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson.git
cd Real-time-Subtitle-Recorder-on-Jetson
python3 recorder.py
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XypO6BlXkCY?si=CczjuOXxak1xAelO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Perspectivas do projeto

Neste projeto, usamos o [Riva ASR Server](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/riva/resources/riva_quickstart) para capturar dados da entrada do microfone em tempo real e exibi-los em uma página da web. No futuro, adicionaremos mais aplicativos, como traduzir um idioma para outro, com velocidade de resposta ainda maior.
