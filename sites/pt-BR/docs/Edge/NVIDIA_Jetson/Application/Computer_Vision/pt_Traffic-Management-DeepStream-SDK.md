---
description: Gerenciamento Inteligente de Tráfego com DeepStream SDK
title: Gerenciamento de Tráfego com DeepStream SDK
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Traffic-Management-DeepStream-SDK
last_update:
  date: 01/04/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Traffic-Management-DeepStream-SDK/
---

# Sistema Inteligente de Gerenciamento de Tráfego usando DeepStream SDK

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## Visão geral

À medida que as cidades crescem dia após dia, também aumenta o número de veículos nas estradas. Por causa disso, a congestão do tráfego também cresce rapidamente e, por sua vez, pode impactar fortemente o desenvolvimento de um país. Este wiki propõe uma solução para esse problema usando visão de IA. O vídeo de streaming das câmeras de CFTV já implantadas em cada semáforo pode ser capturado, realizar detecção de objetos para detectar todos os veículos e então controlar os semáforos de acordo com a congestão de veículos. Além disso, esses dados podem ser enviados para um banco de dados juntamente com a marca do veículo e o número de pedestres para análise posterior.

Para esta aplicação de visão de IA, usaremos o DeepStream SDK da NVIDIA e realizaremos inferência na borda em um dispositivo NVIDIA Jetson. Também usaremos um modelo pré-treinado para esta tarefa do [NVIDIA NGC Model Catalog](https://catalog.ngc.nvidia.com/models) para tornar o processo de implantação rápido e fácil. O NVIDIA NGC Model Catalog fornece um grande número de modelos pré-treinados para muitas outras aplicações diferentes também.

## O que é o DeepStream SDK?

O [DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) da NVIDIA oferece um kit de ferramentas completo de análise de streaming para processamento multisensor baseado em IA, compreensão de vídeo, áudio e imagem. O DeepStream traz flexibilidade de desenvolvimento ao dar aos desenvolvedores a opção de desenvolver em C/C++, Python ou usar programação gráfica de baixo código com o Graph Composer. O DeepStream é fornecido com vários plugins e extensões acelerados por hardware.

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

O DeepStream é desenvolvido tanto para desenvolvedores quanto para empresas e oferece amplo suporte a modelos de IA para modelos populares de detecção e segmentação de objetos, como os mais avançados SSD, YOLO, FasterRCNN e MaskRCNN. Você também pode integrar funções e bibliotecas personalizadas no DeepStream.

O DeepStream oferece flexibilidade desde a prototipagem rápida até soluções em nível de produção completa. Ele também permite que você escolha seu caminho de inferência. Com a integração nativa ao NVIDIA Triton Inference Server, você pode implantar modelos em frameworks nativos, como PyTorch e TensorFlow, para inferência. Usando o NVIDIA TensorRT para inferência de alta taxa de transferência com opções para multi-GPU, multi-stream e suporte a batching, você pode obter o melhor desempenho possível.

## Hardware compatível

O DeepStream SDK é suportado pelo seguinte hardware:

- Kits da Seeed:

  - reComputer J1010 construído com Jetson Nano
  - reComputer J1020 construído com Jetson Nano
  - reComputer J2011 construído com Jetson Xavier NX 8GB
  - reComputer J2012 construído com Jetson Xavier NX 16GB

- Carrier Boards da Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Kit Jetson Xavier AGX H01
  - Placa-mãe A203
  - Placa-mãe A203 (Versão 2)
  - Placa-mãe A205
  - Placa-mãe A206

- Kits de Desenvolvimento Oficiais da NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- SoMs oficiais da NVIDIA:

  - Módulo NVIDIA® Jetson Nano
  - Módulo NVIDIA® Jetson Xavier NX
  - Módulo NVIDIA® Jetson TX2 NX
  - Módulo NVIDIA® Jetson TX2
  - Módulo NVIDIA® Jetson AGX Xavier

## Pré-requisitos

- Qualquer um dos dispositivos Jetson acima executando JetPack
- Teclado e monitor HDMI
- PC host com Windows, Linux ou Mac
- Webcam USB ou câmera MIPI CSI compatível com seu dispositivo Jetson

## Primeiros passos

Aqui usaremos o [modelo DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet), que atua como o detector primário, detectando os objetos de interesse e, para cada carro detectado, o [modelo VehicleTypeNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet) e o [modelo VehicleMakeNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet) atuam como classificadores secundários, determinando o tipo do carro e a marca do carro, respectivamente. O VehicleTypeNet classifica o seguinte: cupê, sedã, SUV, van, veículo grande e caminhão. Já o VehicleMakeNet classifica os seguintes carros: Acura, Audi, BMW, Chevrolet, Chrysler, Dodge, Ford, GMC, Honda, Hyundai, Infiniti, Jeep, Kia, Lexus, Mazda, Mercedes, Nissan, Subaru, Toyota e Volkswagen.

> O fluxo de trabalho abaixo foi testado em um [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) executando [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)

**Passo 1:** Certifique-se de que você instalou corretamente todos os **Componentes do SDK** e o **DeepStream SDK** no dispositivo Jetson. (consulte [este wiki](https://wiki.seeedstudio.com/pt-br/reComputer_J1020_A206_Flash_JetPack/) como referência para a instalação)

**Nota:** Recomenda-se usar o **NVIDIA SDK Manager** para instalar todos os componentes do SDK e o DeepStream SDK

**Passo 2:** Baixe os arquivos de configuração

```sh
git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git
cd deepstream_reference_apps/deepstream_app_tao_configs/
sudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
```

**Passo 3:** Baixe os modelos

```sh
sudo apt install -y wget zip
cd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
sudo ./download_models.sh
```

**Passo 4:** Abra **deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt**

```sh
vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

**Passo 5:** Altere **sync=1** para **sync=0** em [sink0]

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**Passo 6:** Em [primary-gie], altere model-engine-file para **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine**

```sh
[primary-gie]
enable=1
gpu-id=0
# Modify as necessary
model-engine-file=../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine
batch-size=1
#Required by the app for OSD, not a plugin property
bbox-border-color0=1;0;0;1
bbox-border-color1=0;1;1;1
bbox-border-color2=0;0;1;1
bbox-border-color3=0;1;0;1
gie-unique-id=1
config-file=config_infer_primary_dashcamnet.txt
```

**Passo 7:** Em [secondary-gie0], altere model-engine-file para **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine**

```sh
[secondary-gie0]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=4
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehiclemakenet.txt
```

**Passo 8:** Em [secondary-gie1], altere model-engine-file para **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine**

```sh
[secondary-gie1]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=5
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehicletypenet.txt
```

**Passo 9:** Conecte a câmera, o teclado e o monitor HDMI ao dispositivo Jetson e execute o seguinte

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

Agora você pode visualizar a demonstração no monitor HDMI conectado da seguinte forma

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

Se você quiser testar outras demos disponíveis em **/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/**, você pode simplesmente executá-las da seguinte forma

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
