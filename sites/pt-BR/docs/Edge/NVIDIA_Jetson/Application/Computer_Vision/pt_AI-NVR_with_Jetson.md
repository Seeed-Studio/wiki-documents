---
description: Este artigo fornece um guia abrangente sobre como implementar um NVR (Network Video Recorder) com IA usando a plataforma NVIDIA Jetson. Ele abrange tudo, desde a configuração de hardware e instalação de software até a configuração do DeepStream e do VST para análise de vídeo em tempo real e exibição em uma parede de vídeo.
title: NVR de IA com Jetson Orin
keywords:
  - reComputer
  - AI NVR
  - Jetpack6.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_nvr_with_jetson
last_update:
  date: 08/12/2024
  author: Youjiang
createdAt: '2024-08-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ai_nvr_with_jetson/
---

# NVR de IA com reServer Jetson

## Introdução

Com o avanço da tecnologia de inteligência artificial, os sistemas tradicionais de vigilância por vídeo estão evoluindo para se tornarem mais inteligentes. O NVR de IA (Network Video Recorder) combina inteligência artificial com tecnologia de vigilância por vídeo, permitindo não apenas gravar vídeo, mas também analisar, reconhecer e processar o conteúdo de vídeo em tempo real. Isso aumenta a eficiência e a precisão do monitoramento de segurança. Este artigo apresentará como implementar um NVR de IA usando a plataforma NVIDIA Jetson. 

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/vst.png" />
</div>

Neste wiki, usaremos o [Nvidia VST](https://docs.nvidia.com/mms/text/media-service/VST_Overview.html) e outros microsserviços do [Jetson Platform Service](https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started) para implantar rapidamente um NVR de IA local em um dispositivo Jetson.
Aqui, usamos o VST para adicionar câmeras, empregamos o modelo de detecção de pedestres do DeepStream para detectar objetos e exibimos os resultados da detecção juntamente com o fluxo de vídeo original na parede de vídeo do VST.

### O que é um NVR de IA?

Um NVR de IA é um dispositivo que integra funções de gravação de vídeo e análise com inteligência artificial. Diferente dos NVRs tradicionais, um NVR de IA pode identificar automaticamente eventos importantes nas imagens de vídeo, como invasões ou objetos ausentes, e até acionar alarmes com base em regras predefinidas. Esse nível de inteligência depende de capacidades de computação poderosas e de algoritmos de aprendizado profundo.


### Por que escolher a plataforma reServer (NVIDIA Jetson)?

A NVIDIA Jetson é uma plataforma de computação embarcada de alto desempenho e baixo consumo de energia, sendo ideal para aplicações de IA e aprendizado profundo. A plataforma Jetson é equipada com GPUs NVIDIA, que aceleram o processo de inferência de aprendizado profundo e suportam uma ampla gama de ferramentas e frameworks de IA, como TensorFlow e PyTorch.

O reServer é um dispositivo de computação de borda baseado na plataforma Nvidia Jetson. Ele possui design compacto, resfriamento passivo, 5x RJ45 GbE com PoE, 2 compartimentos para unidades de 2,5" HDD/SSD e uma grande variedade de interfaces industriais, tornando-o uma escolha ideal para dispositivos de borda de IoT com IA.

## Pré-requisitos

- Dispositivo Jetson Orin (com o sistema operacional [jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-r363)).
- Câmera IP.

:::note
Neste wiki, concluiremos as seguintes tarefas usando o [reServer Industrial J4012](https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html), mas você também pode tentar usar outros dispositivos Jetson.
:::

:::note
Podemos seguir as instruções neste [wiki](https://wiki.seeedstudio.com/pt-br/reServer_Industrial_Getting_Started/#flash-jetpack) para gravar o sistema JetPack 6.0 mais recente no reServer.
:::

<div align="center">
    <img width={1000} 
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110247.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

## Primeiros Passos

### Conexão de Hardware
- Conecte o dispositivo Jetson à rede, mouse, teclado e monitor.
- Conecte a câmera IP à rede.

:::note
Claro, você também pode acessar o dispositivo Jetson remotamente via SSH pela rede local.
:::

### Etapa 1. Instalar `nvidia-jetson-services`

Abra o terminal do dispositivo Jetson e digite:

```bash
sudo apt update
sudo apt install nvidia-jetson-services
```
Então podemos perceber que há muitos microsserviços em `/opt/nvidia/jetson/services/`.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/jps.png" />
</div>

### Etapa 2. Modificar a configuração do ingress

No diretório `/opt/nvidia/jetson/services/ingress/config/`, crie um novo arquivo chamado ai-nvr-nginx.conf e preencha com:

```bash
# specify you service discovery config here

location /emdx/ {
    rewrite ^/emdx/?(.*)$ /$1 break;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    access_log /var/log/nginx/access.log timed_combined;
    proxy_pass http://emdx_api;
}

location /ws-emdx/ {
    rewrite ^/ws-emdx/?(.*)$ /$1 break;
    proxy_set_header Host $host;
    proxy_pass http://emdx_websocket;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}

```

### Etapa 3. Modificar o local de armazenamento de dados do NVR (opcional)

Abra o arquivo `/opt/nvidia/jetson/services/vst/config/vst_storage.json` e altere o diretório conforme necessário.

```bash
{
    "data_path": "/home/seeed/VST/storage/data/",
    "video_path": "/home/seeed/VST/storage/video/",
    "total_video_storage_size_MB": 10000
}
```

### Etapa 4. Iniciar o serviço VST
O serviço VST depende de outros serviços, portanto todos os serviços dependentes precisam ser iniciados juntos.

```bash
sudo systemctl start jetson-redis
sudo systemctl start jetson-ingress
sudo systemctl start jetson-vst
```

Após a inicialização dos microsserviços, os contêineres Docker correspondentes serão criados.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/dockers.png" />
</div>

:::info
Agora, podemos abrir a interface web do VST no navegador.

Na rede local, abra o navegador e digite: `http://<ip-of-jetson>:81/`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/webui.png" />
</div>

### Etapa 5. Baixar o arquivo de configuração do NVR de IA

Abra o navegador e acesse a [página de download](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources).

`Download(Top right corner)` --> `Browser(Diect Download)`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/download_ai_nvr.png" />
</div>

```bash
cd <path-of-download>
unzip files.zip
cd files
tar -xvf ai_nvr-1.1.0.tar.gz
cd ai_nvr
```

### Etapa 6. Modificar o arquivo de configuração do DeepStream

Queremos conseguir ver os resultados de inferência do modelo em tempo real, então precisamos modificar o método de entrada do DeepStream. Aqui, podemos configurá-lo para saída como RTSP.


Localize este arquivo de configuração e atualize seu conteúdo.

`<path-of-ai_nvr>/config/deepstream/pn26/service-maker/ds-config-0_nx16.yaml`

<details>

<summary> ds-config-0_nx16.yaml </summary>

```yaml
################################################################################
# SPDX-FileCopyrightText: Copyright (c) 2024 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: MIT
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish, distribute, sublicense,
# and/or sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
# DEALINGS IN THE SOFTWARE.
################################################################################

deepstream:
  nodes:
  - type: nvinfer
    # name of the primary inference must be 'pgie' for test app to route streams here
    name: pgie
    properties:
      config-file-path: "/ds-config-files/pn26/config_infer_primary_RN34_PN26_960x544_dla0_orin_unprune_nx.txt"
      model-engine-file: "/pn26-files/dla0_pn26_jp6_halfmem_bs4.engine"
      unique-id: 1
      # be sure to rename model-engine-file whenever batch-size is changed
      batch-size: 4
  - type: nvtracker
    name: tracker
    properties:
      ll-config-file: "/ds-config-files/pn26/config_tracker_NvDCF_PNv2.6_Interval_1_PVA.yml;/ds-config-files/pn26/config_tracker_NvDCF_PNv2.6_Interval_1_PVA.yml"
      ll-lib-file: "/opt/nvidia/deepstream/deepstream/lib/libnvds_nvmultiobjecttracker.so"
      sub-batches: "2:2"
      tracker-width: 960
      tracker-height: 544
  - type: nvmsgconv
    name: msgconv
    properties:
      payload-type: 1
  - type: nvmsgbroker
    name: msgbroker
    properties:
      config: "/ds-config-files/pn26/cfg_redis.txt"
      proto-lib: "/opt/nvidia/deepstream/deepstream/lib/libnvds_redis_proto.so"
      conn-str: "localhost;6379;test"
      topic: "test"
      sync: false
      async: false
  - type: queue
    name: checkpoint
  - type: nvmultistreamtiler
    name: tiler
    properties:
      width: 1280
      height: 720
  - type: nvdsosd
    name: osd
  - type: nvvideoconvert
    name: converter
  - type: tee
    name: tee
  - type: queue
    name: queue_tracker
  - type: queue
    name: queue_tee
  - type: queue
    name: queue_tiler
  - type: queue
    name: queue_msgconv
  - type: queue
    name: queue_converter
  - type: queue
    name: queue_osd
  - type: queue
    name: queue_sink
  - type: queue
    name: queue_msgbroker
  - type: nvvideoconvert
    name: converter1
  - type: nvrtspoutsinkbin
    name: sink
    properties:
      rtsp-port: 8555
      sync: false
  - type: sample_video_probe.sample_video_probe
    name: osd_counter
    properties:
      font-size: 15
  edges:
    pgie: [queue_tracker, osd_counter]
    queue_tracker: tracker
    tracker: queue_tee
    queue_tee: tee
    tee: [queue_tiler, queue_msgconv]
    queue_tiler: tiler
    tiler: queue_converter
    queue_converter: converter
    converter: queue_osd
    queue_osd: osd
    osd: queue_sink
    queue_sink: converter1
    converter1: sink
    queue_msgconv: msgconv
    msgconv: queue_msgbroker
    queue_msgbroker: msgbroker
```

</details>

:::note
Observe o modelo do seu dispositivo Jetson. Neste caso, o módulo Orin Nx 16GB está sendo usado. Se você estiver usando um modelo diferente, localize o arquivo de configuração correspondente e faça as modificações necessárias.
:::

Adicione a variável de ambiente WDM_WL_NAME_IGNORE_REGEX em SDR no arquivo compose.
Aqui, meu dispositivo Jetson é o reServer J4012, alimentado pelo Orin Nx 16GB, então preciso editar este arquivo compose:

`<path-of-ai_nvr>/compose_nx16.yaml`

```yaml
...
WDM_CONSUMER_GRP_ID: sdr-deepstream-cg
WDM_CLUSTER_CONTAINER_NAMES: '["deepstream", "vst"]'
WDM_WL_NAME_IGNORE_REGEX: ".*deepstream.*"
...
```


### Etapa 7. Iniciar o aplicativo AI NVR

No terminal do Jetson, insira o comando apropriado para iniciar o aplicativo AI NVR.

```bash
cd <path-of-download>/files/ai_nvr

# Orin AGX: 
# sudo docker compose -f compose_agx.yaml up -d --force-recreate
# Orin NX16: 
sudo docker compose -f compose_nx16.yaml up -d --force-recreate
# Orin NX8: 
# sudo docker compose -f compose_nx8.yaml up -d --force-recreate
# Orin Nano: 
# sudo docker compose -f compose_nano.yaml up -d --force-recreate
```

Durante o processo de inicialização, o aplicativo criará contêineres Docker adicionais, como o DeepStream.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/all_containers.png" />
</div>

### Etapa 8. Configurar o AI NVR local pela interface web

Neste ponto, já instalamos e iniciamos com sucesso o aplicativo AI NVR no dispositivo Jetson.
A próxima etapa é configurar a câmera pela interface web.

Na rede local, abra o navegador e digite: `http://<ip-of-jetson>:30080/vst/`

Configure manualmente a câmera IP e o fluxo de vídeo de saída do DeepStream.

`Sensor Management` -->  `Add device manually`  --> `Submit`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/confing_camera.png" />
</div>

:::info
Aqui, precisamos inserir um endereço de câmera válido ou o caminho do fluxo RTSP.
:::

:::danger
O fluxo de saída do DeepStream é rtsp://192.168.49.161:8555/ds-test. 

Isso depende do arquivo de configuração do DeepStream, que pode ser modificado conforme suas necessidades.
:::

:::danger
Ao configurar o fluxo de saída do deepstream, precisamos adicionar o campo `deepstream` no nome da câmera
:::


Quando a configuração for concluída com sucesso, você poderá visualizar todos os feeds no video wall.

`Video Wall` -->  `Select All`  --> `Start`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/result.png" />
</div>

### Fechar o aplicativo ai-nvr

No terminal do Jetson, insira o comando apropriado para fechar o aplicativo AI NVR.

```bash
cd <path-of-download>/files/ai_nvr

# Orin AGX: 
# sudo docker compose -f compose_agx.yaml down --remove-orphans

# Orin NX16: 
sudo docker compose -f compose_nx16.yaml down --remove-orphans

# Orin NX8: 
# sudo docker compose -f compose_nx8.yaml down --remove-orphans

# Orin Nano: 
# sudo docker compose -f compose_nano.yaml down --remove-orphans
```

Os serviços podem ser interrompidos usando os comandos:

`sudo systemctl stop <service-name>`

por exemplo:
```bash
sudo systemctl stop jetson-redis
sudo systemctl stop jetson-ingress
sudo systemctl stop jetson-vst
```

## Referências
- https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started
- https://docs.nvidia.com/jetson/jps/moj-overview.html

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>