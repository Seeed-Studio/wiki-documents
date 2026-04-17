---
description: Primeiros Passos com Docker
title: Primeiros Passos com Docker
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson-docker-getting-started
last_update:
  date: 01/04/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/jetson-docker-getting-started/
---

# Primeiros Passos com Docker

> Esta é uma republicação do [blog](https://collabnix.com/getting-started-with-docker-on-seeed-studios-recomputer-powered-by-nvidia-jetson) escrito por [Ajeet](https://collabnix.com/author/ajeetraina) em [collabnix.com](https://collabnix.com). Todos os créditos vão para ele.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/1.jpeg" /></div>

Na semana passada, tive a sorte de ter acesso pela primeira vez ao mais recente dispositivo de borda de IA Seeed Studio [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html). O reComputer J1020 é alimentado pelo kit de desenvolvimento Jetson Nano. É um pequeno e poderoso computador do tamanho da palma da mão que traz o poder da IA moderna para desenvolvedores embarcados. Este pequeno dispositivo de US$ 259 é construído em torno do módulo de sistema NVIDIA Jetson Nano e projetado para aplicações de Edge AI. Este dispositivo permite executar várias redes neurais em paralelo para aplicações como classificação de imagens, detecção de objetos, segmentação e processamento de fala. Com ricos módulos de extensão, periféricos industriais e gerenciamento térmico, o reComputer J1020 está pronto para ajudar você a acelerar e escalar o produto de IA de próxima geração, implantando modelos DNN populares e frameworks de ML na borda e fazendo inferência com alto desempenho, para tarefas como classificação e detecção de objetos em tempo real, estimação de pose, segmentação semântica e processamento de linguagem natural (NLP).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/2.jpg" /></div>

## O que há de único no reComputer J1020?

[Seeed Studio reComputer J1020](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Introduction/#recomputer-j1020) vem com tudo o que você precisa para começar a construir sua aplicação baseada em IA. Em comparação com o kit de desenvolvimento Jetson Nano fornecido pela NVIDIA, ele não requer gravar o sistema operacional em um cartão SD do zero. Ele vem com o sistema operacional Ubuntu já pré-instalado em um eMMC de 16 GB. O reComputer com Jetpack 4.6 pré-instalado inclui um pacote de suporte à placa (BSP), sistema operacional Linux, NVIDIA CUDA, cuDNN e bibliotecas de software TensorRT para aprendizado profundo, visão computacional, computação em GPU, processamento multimídia, etc. Ele suporta toda a [pilha de software Jetson](https://developer.nvidia.com/embedded/develop/software) e várias [ferramentas de desenvolvedor](https://wiki.seeedstudio.com/pt-br/Jetson-AI-developer-tools) para [construir aplicações de IA rápidas e robustas](https://wiki.seeedstudio.com/pt-br/Jetson-AI-developer-tools) fornecidas pelos parceiros Seeed Edge AI.

## Alguns recursos notáveis incluem

- 128 núcleos NVIDIA CUDA® – fornecem 0,5 TFLOPs (FP16) para executar frameworks e modelos de IA para aplicações como classificação de imagens, detecção de objetos, segmentação e processamento de fala.
- Equipado com processador Armv8
- Vem com NVIDIA Tegra X1(nvgpu)/Integrado
- Tamanho de disco de 16GB
- Memória de 4GB
- Sistema operacional de 64 bits
- Ubuntu 18.04.5
- Seeed Studio reComputer vem com o sistema JetPack 4.6 já instalado
- Você não precisa gravar um cartão SD, ele vem com o sistema operacional já instalado
- Suporte a CUDA 10.2.300
- Arquitetura CUDA: 5.3
- Versão do OpenCV: 4.1.1

[Saiba mais sobre o Layout de Hardware do reComputer](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Hardware_Layout)

## Componentes do reComputer

Ele vem com a seguinte lista de partes:

- NVIDIA Jetson Nano x1
- Placa Carrier de Referência Seed x1
- Dissipador de calor passivo de alumínio x1
- Gabinete de alumínio x1
- Adaptador de energia 12V x1
- 4x portas USB 3.0
- 2x portas HDMI
- Conector de câmera MIPI-CSI
- Header de controle e UART
- Header de expansão de 40 pinos (GPIO, I2C, Header)
- SODIMM de 260 pinos
- MicroUSB
- Porta Ethernet Gigabit
- Luzes LED

## Configuração de Hardware

Para começar, você precisará ter os conectores mínimos abaixo em uso:

- Cabo de energia
- Módulo Wi-Fi / Cabo Ethernet Gigabit
- Receptor USB para teclado e mouse Wi-Fi
- Conectividade HDMI com seu monitor

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/3.jpg" /></div>

## Executando CUDA deviceQuery

```sh
cd /usr/local/cuda/samples/1_Utilities/deviceQuery
sudo make 
./deviceQuery
```

Aqui estão os resultados:

```sh
./deviceQuery Starting...

 CUDA Device Query (Runtime API) version (CUDART static linking
Detected 1 CUDA Capable device(s)

Device 0: "NVIDIA Tegra X1"
  CUDA Driver Version / Runtime Version          10.2 / 10.2
  CUDA Capability Major/Minor version number:    5.3
  Total amount of global memory:                 3956 MBytes (4148273152 bytes)
  ( 1) Multiprocessors, (128) CUDA Cores/MP:     128 CUDA Cores
  GPU Max Clock rate:                            922 MHz (0.92 GHz)
  Memory Clock rate:                             13 Mhz
  Memory Bus Width:                              64-bit
  L2 Cache Size:                                 262144 bytes
  Maximum Texture Dimension Size (x,y,z)         1D=(65536), 2D=(65536, 65536), 3D=(4096, 4096, 4096)
  Maximum Layered 1D Texture Size, (num) layers  1D=(16384), 2048 layers
  Maximum Layered 2D Texture Size, (num) layers  2D=(16384, 16384), 2048 layers
  Total amount of constant memory:               65536 bytes
  Total amount of shared memory per block:       49152 bytes
  Total number of registers available per block: 32768
  Warp size:                                     32
  Maximum number of threads per multiprocessor:  2048
  Maximum number of threads per block:           1024
  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)
  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)
  Maximum memory pitch:                          2147483647 bytes
  Texture alignment:                             512 bytes
  Concurrent copy and kernel execution:          Yes with 1 copy engine(s)
  Run time limit on kernels:                     Yes
  Integrated GPU sharing Host Memory:            Yes
  Support host page-locked memory mapping:       Yes
  Alignment requirement for Surfaces:            Yes
  Device has ECC support:                        Disabled
  Device supports Unified Addressing (UVA):      Yes
  Device supports Compute Preemption:            No
  Supports Cooperative Kernel Launch:            No
  Supports MultiDevice Co-op Kernel Launch:      No
  Device PCI Domain ID / Bus ID / location ID:   0 / 0 / 0
  Compute Mode:
     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >
deviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 10.2, CUDA Runtime Version = 10.2, NumDevs = 1

Result = PASS
```

## Executando Docker no reComputer Jetson Nano

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/4.png" /></div>

[Docker](https://www.docker.com) é um conjunto de ferramentas de desenvolvimento de software para criar, compartilhar e executar contêineres individuais. É uma plataforma de conteinerização que empacota sua aplicação e todas as suas dependências juntas na forma de um contêiner Docker para garantir que sua aplicação funcione perfeitamente em qualquer ambiente. Um contêiner Docker é uma unidade padronizada que pode ser criada sob demanda para implantar uma aplicação ou ambiente específico.

Desenvolver qualquer tipo de aplicação hoje é complexo. É muito mais do que escrever código. Há uma infinidade de linguagens de programação, frameworks web, arquiteturas complexas e interfaces descontínuas entre ferramentas para cada estágio do ciclo de vida, o que cria uma complexidade enorme. O Docker simplifica e acelera seu fluxo de trabalho, ao mesmo tempo em que dá aos desenvolvedores a liberdade de inovar com a sua escolha de ferramentas, pilhas de aplicações e ambientes de implantação para cada projeto. Ele permite separar suas aplicações da sua infraestrutura para que você possa entregar software rapidamente.

Docker é oficialmente suportado no reComputer J1020, um kit de desenvolvimento alimentado por Jetson Nano. O kit vem com a versão mais recente do Docker pré-instalada por padrão. Você pode verificar a versão do Docker executando o seguinte comando:

```sh
sudo docker version

Client: Docker Engine - Community
 Cloud integration: v1.0.25
 Version:           20.10.17
 API version:       1.41
 Go version:        go1.17.11
 Git commit:        100c701
 Built:             Mon Jun  6 23:02:19 2022
 OS/Arch:           linux/arm64
 Context:           default
 Experimental:      true


Server: Docker Engine - Community
 Engine:
  Version:          20.10.17
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.11
  Git commit:       a89b842
  Built:            Mon Jun  6 23:00:46 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.6
  GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
 runc:
  Version:          1.1.2
  GitCommit:        v1.1.2-0-ga916309
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

## Instalando o Docker Compose

O reComputer Jetson não vem com Docker Compose instalado. Você pode seguir as etapas abaixo para instalar o Docker Compose no seu sistema:

```sh
export DOCKER_COMPOSE_VERSION=2.6.0
sudo apt-get install libhdf5-dev
sudo apt-get install libssl-dev
sudo pip3 install docker-compose=="${DOCKER_COMPOSE_VERSION}"
apt install python3
apt install python3-pip
pip install docker-compose
```

## Instalar a versão mais recente do kit de ferramentas CUDA

```sh
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/sbsa/cuda-ubuntu1804.pin
sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo dpkg -i cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo apt-key add /var/cuda-repo-ubuntu1804-11-3-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```

## Verificar o runtime do Docker

```sh
docker info | grep runtime

 Runtimes: nvidia runc io.containerd.runc.v2 io.containerd.runtime.v1.linuxs
```

## Executando seu primeiro contêiner Python

Vamos testar uma imagem Docker Python simples baseada em Arm executando o comando abaixo:

```sh
sudo docker run arm64v8/python:slim ls
```

## Monitorando CPU, GPU e Memória usando o contêiner Docker JTOP

Nesta seção, você verá como configurar um utilitário de monitoramento do sistema para monitorar CPU, RAM e GPU. Usaremos o utilitário JTOP. Jtop é um utilitário de monitoramento de sistema que roda no terminal e vê e controla em tempo real o status do seu kit reComputer Jetson Nano, status e frequência de CPU, RAM e GPU. Você verá como pode conteinerizar o utilitário. Vamos começar –

Primeiro, crie um Dockerfile com o seguinte conteúdo:

```sh
FROM python:3-alpine

RUN apk update \

    && apk --no-cache add bash \

    && pip install jetson-stats \

    && rm -rf /var/cache/apk/*
```

A primeira linha mostra que escolhemos python:3-alpine como imagem base. A segunda linha instala jetson-stats e pacotes dependentes

## Construindo a imagem Docker do JTOP

Use o CLI do Docker build para construir a imagem Docker

```sh
docker build -t ajeetraina/jetson-stats-nano .
```

## Executando o contêiner Docker JTOP

Agora é hora de executar o contêiner Docker passando –gpus como parâmetro e montando-o no socket do jtop.

```sh
docker run --rm -it --gpus all -v /run/jtop.sock:/run/jtop.sock ajeetraina/jetson-stats-nano jtop
```

Você verá os seguintes resultados:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/jetson-docker/5.png" /></div>

Em nosso próximo post no blog, veremos como implementar identificação de veículos usando OpenDatacam rodando dentro de um contêiner Docker. Fique ligado!

Confira o seguinte exemplo de aplicação com tutoriais!

- [Detecção de pedestres por Edge Impulse](https://www.edgeimpulse.com/blog/recognizing-your-blind-spots-pedestrian-detection-system-with-nvidia-jetson-nano)
- [Detecção de capacete de segurança](https://www.seeedstudio.com/blog/2022/03/03/deploy-hard-hat-detection-for-enforcing-workplace-safety) e construa uma detecção personalizada de EPI
- [Estimativa de Pose com alwaysAI](https://alwaysai.co/blog/using-pose-estimation-on-the-jetson-nano-with-alwaysai)
- [Detecção visual de anomalias usando NVIDIA Deepstream IoT](https://developer.nvidia.com/gtc/2020/video/s22675-vid)
- [Detecção de itens em loja de varejo](https://www.seeedstudio.com/blog/2022/06/08/retail-store-items-detection-using-yolov5-roboflow-and-node-red)
- [Detecção de incêndios florestais](https://github.com/Seeed-Studio/node-red-contrib-ml)
- [Detecção de animais](https://github.com/Seeed-Studio/node-red-contrib-ml)

Siga Ajeet em:

- [Twitter](https://twitter.com/ajeetsraina)
- [LinkedIn](https://www.linkedin.com/in/ajeetsraina)
- [collabnix](https://collabnix.com/author/ajeetraina)

## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

