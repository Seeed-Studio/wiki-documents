---
description: Implementar o Whisper no NVIDIA Jetson Orin para conversão de fala em texto em tempo real
title: Speech2Text com Whisper
keywords:
  - Edge
  - reComputer
  - Jetson
  - whisper
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Whisper_on_Jetson_for_Real_Time_Speech_to_Text
last_update:
  date: 03/14/2024
  author: Jiahao
no_comments: false
createdAt: '2024-03-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/
---

# Implementar Whisper no NVIDIA Jetson Orin para conversão de fala em texto em tempo real

## Introdução

Sistemas de conversão de fala em texto (STT) em tempo real desempenham um papel vital em aplicações modernas, desde assistentes de voz até serviços de transcrição. Aqui estão alguns modelos STT populares: Whisper, Riva, DeepSpeech, Google Cloud Speech-to-Text API, Microsoft Azure Speech Service, IBM Watson Speech to Text, Kaldi, Wit.ai e assim por diante. O NVIDIA Jetson Orin, conhecido por seu alto desempenho e eficiência energética, oferece uma plataforma promissora para implementar esse tipo de aplicação exigente na borda.

[Whisper](https://github.com/openai/whisper), um sistema STT avançado que aproveita o aprendizado profundo, se destaca em precisão e eficiência. [Riva](https://github.com/nvidia-riva) é um framework abrangente e multimodal de IA conversacional desenvolvido pela NVIDIA. Ao implementar Whisper ou Riva no Jetson Orin, os desenvolvedores podem aproveitar sua poderosa GPU e núcleos de CPU, juntamente com tecnologias de aceleração de hardware como Tensor Cores, para alcançar STT em tempo real com baixa latência.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" /></div>

Neste wiki apresentamos para você o projeto [Real Time Whisper on Jetson](https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git); essa integração permite o processamento de fala diretamente no dispositivo, eliminando a necessidade de conectividade de rede constante e aumentando a privacidade e a segurança. Além disso, vamos comparar a velocidade de inferência do Whisper e do Riva quando implementados no mesmo dispositivo Jetson Orin. Em última análise, implementar o Whisper no Jetson Orin permite que desenvolvedores construam aplicações STT robustas e eficientes que oferecem alta precisão e baixa latência em vários domínios, de casas inteligentes à automação industrial.

## Configuração de hardware

### Componentes de hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>reComputer (Ou outros dispositivos baseados em Jetson)</th>
      <th>reSpeaker (Ou outros microfones com interface USB)</th>
  </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Conexão de hardware

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## Preparar o ambiente de execução

#### Passo 1. Instalar dependências

```shell
git clone https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git
cd Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text
pip install -r requirements.txt
sudo apt update && sudo apt install ffmpeg
arecord -D hw:2,0 --dump-hw-params #set microphone rate to 16000
```

#### Passo 2. Testar o ambiente

```shell
python test.py
```

Se você vir as seguintes informações impressas no terminal, isso significa que instalou com sucesso as bibliotecas necessárias.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Deploy-whisper-on-Nvidia-Jetson-orin-for-real-time-speech-to-text-test.png" alt="pir" width={1000} height="auto"/></p>

No seu terminal (Ctrl+Alt+T), digite ```ffmpeg -version```; se você obter algo como o seguinte, isso significa que o ffmpeg foi instalado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Whisper-ffmpeg.png" alt="pir" width={1000} height="auto"/></p>

## Vamos executá-lo

```shell
python main.py
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/KR0GYqUuo5Y?si=uSGUkKmCSZmaq5f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Riva vs Whisper

Riva, conhecido por seu reconhecimento de fala e processamento de linguagem natural avançados baseados em IA, oferece aos usuários transcrição, tradução e análise em tempo real de conversas faladas.

Whisper é um sistema de reconhecimento automático de fala (ASR) treinado com 680.000 horas de dados supervisionados multilíngues e multitarefa coletados na web. Além disso, ele permite a transcrição em vários idiomas, bem como a tradução desses idiomas para o inglês.

No próximo vídeo comparativo, vamos comparar a capacidade do [Riva](https://wiki.seeedstudio.com/pt-br/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/) e do Whisper em conversão de fala em texto desenvolvida no Nvidia Jetson.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/2l7yus611DI?si=XdEjwzpZdJkLC8aB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas do projeto

Neste projeto, usamos o Whisper para capturar dados da entrada do microfone em tempo real e exibi-los em uma página da web. No futuro, vamos aprimorar os recursos de processamento em tempo real do Whisper para reduzir ainda mais a latência e melhorar a precisão do reconhecimento de fala, além de explorar a integração com outros serviços ou APIs de IA para ampliar as funcionalidades da aplicação.
