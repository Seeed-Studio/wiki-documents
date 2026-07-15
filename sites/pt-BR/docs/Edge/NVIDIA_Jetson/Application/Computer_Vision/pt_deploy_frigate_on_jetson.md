---
description: Frigate é um NVR (Network Video Recorder) de código aberto com Detecção de Objetos em Tempo Real para câmeras IP. Neste guia, vamos percorrer as etapas para implantar o Frigate em um dispositivo NVIDIA Jetson.
title: Implantar Frigate no Jetson
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /deploy_frigate_on_jetson
last_update:
  date: 08/29/2024
  author: kourosh
createdAt: '2024-08-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/deploy_frigate_on_jetson/
---

# Implantar Frigate em um dispositivo reComputer (NVIDIA Jetson)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigate é um NVR (Network Video Recorder) de código aberto com Detecção de Objetos em Tempo Real para câmeras IP. Neste guia, vamos percorrer as etapas para implantar o Frigate em um dispositivo NVIDIA Jetson. NVIDIA Jetson é uma plataforma de IA de borda que permite a implantação eficiente de cargas de trabalho de IA. Combinar Frigate com Jetson aproveita o aprendizado de máquina acelerado por hardware para processar fluxos de vídeo de forma eficiente e detectar objetos.

Objetivos do projeto:

- Configurar um ambiente Frigate em um dispositivo NVIDIA Jetson para processamento eficiente de vídeo.
- Habilitar detecção de objetos em tempo real em fluxos de vídeo de múltiplas câmeras IP.

Ao final deste projeto, os usuários terão um sistema de vigilância totalmente operacional que pode detectar objetos em tempo real, enviar alertas e integrar-se com outros dispositivos inteligentes. Essa solução não apenas aumenta a segurança, mas também garante que o processamento seja feito localmente, preservando a privacidade e reduzindo a dependência de serviços em nuvem.

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## Preparação de Hardware

Para implantar Frigate com sucesso em um NVIDIA Jetson usando uma câmera IP, você precisará preparar os seguintes componentes de hardware. Esta seção descreve o equipamento necessário e fornece breves descrições para ajudar você a começar.

### 1. Dispositivo NVIDIA Jetson

Um dispositivo NVIDIA Jetson serve como a unidade de processamento central para executar o Frigate e realizar detecção de objetos em tempo real. Dependendo dos seus requisitos e orçamento, você pode escolher entre vários modelos:

- Jetson Nano: Uma opção econômica com poder de processamento suficiente para configurações de vigilância de pequena escala com poucas câmeras.
- Jetson Xavier NX: Oferece mais potência e pode lidar com implantações em maior escala ou tarefas de detecção de objetos mais complexas.
- Jetson Orin Série: A opção mais poderosa, adequada para aplicações de alto desempenho e configurações com múltiplas câmeras.

:::info
**Acessórios Necessários**:

- Fonte de alimentação apropriada para o modelo Jetson.
- Cartão MicroSD (para Jetson Nano e Orin) ou eMMC (para Jetson Xavier NX/AGX Orin) com pelo menos 32 GB de capacidade.
- Uma solução de refrigeração (por exemplo, uma ventoinha ou dissipador de calor) para garantir temperaturas de operação ideais.
Monitor, teclado e mouse para a configuração inicial.

:::

### 2. Câmera IP

Câmeras IP fornecem fluxos de vídeo de alta qualidade essenciais para uma detecção de objetos eficaz. Você precisará de pelo menos uma câmera IP Dahua compatível com RTSP (Real-Time Streaming Protocol), o que permite que o Frigate receba fluxos de vídeo.

### 3. Resumo do Hardware Necessário

- Dispositivo Jetson: Jetson Nano, Xavier NX ou série Orin
- Câmera IP: Compatível com RTSP
- MicroSD/eMMC: Pelo menos 32 GB (para configuração do Jetson)
- Fonte de Alimentação e Refrigeração: Para o dispositivo Jetson
- Equipamento de Rede: Cabos Ethernet
- Opcional: Armazenamento externo, injetor/comutador PoE

## Preparação de Software

Configurar o ambiente de software é uma etapa crucial para implantar Frigate no seu dispositivo NVIDIA Jetson. Esta seção descreve os componentes de software necessários e as etapas de instalação para garantir que seu sistema esteja pronto para executar Frigate e processar fluxos de vídeo da câmera IP.

### 1. Sistema Operacional (Jetpack)

Certifique-se de que seu dispositivo NVIDIA Jetson esteja executando a versão mais recente do NVIDIA JetPack SDK. O JetPack fornece um sistema operacional baseado em Linux juntamente com bibliotecas e ferramentas essenciais para desenvolvimento de IA.

- Baixar JetPack SDK: Visite a página de downloads do NVIDIA JetPack para baixar o JetPack SDK mais recente compatível com o seu dispositivo Jetson (usei Jetpack 5.1.3 com Xavier NX).

- Gravar o Dispositivo Jetson: Use o SDK Manager para gravar a imagem do JetPack no cartão SD do dispositivo Jetson (para Jetson Nano) ou no eMMC (para Jetson Xavier NX/AGX Orin).

Para guias de gravação dos dispositivos Jetson alimentados pela Seeed, consulte os links abaixo:

- [reComputer J1010 | J101](https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/pt-br/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/pt-br/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/pt-br/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/pt-br/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/pt-br/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/pt-br/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. Atualizações de Sistema e Dependências

Após configurar o sistema operacional, execute uma atualização do sistema e instale as dependências necessárias.

:::info
**Atualizar o Sistema: Abra um terminal no dispositivo Jetson e execute:**

```
sudo apt-get update && sudo apt-get upgrade
```

**Instalar Dependências Adicionais: Instale dependências comuns necessárias para compilar e executar software no Jetson:**

```
sudo apt-get install -y \
python3-pip \
python3-dev \
python3-venv \
build-essential \
libssl-dev \
libffi-dev \
git
```

:::

### 2. Instalação do Docker

Frigate é executado como um contêiner Docker. Instale o Docker no dispositivo Jetson usando as etapas a seguir:

##### 1. instalar docker

* Instalar as dependências do Docker:

```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```

* Adicionar a chave GPG oficial do Docker:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

* Adicionar o repositório do Docker:

```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

* instalar docker:

```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Instalação do Docker Compose

Docker Compose é usado para definir e executar aplicações Docker multi-contêiner, como Frigate, e manipular arquivos yaml para executar contêineres Docker.

- Instalar Docker Compose: Use o seguinte comando para instalar o Docker Compose:

```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```

* Verificar a Instalação do Docker Compose:

```
docker-compose --version
```

##### 3. NVIDIA Container Toolkit

Para instalar o Nvidia container toolkit você pode ir para o link na referência. Com base no seu sistema, você pode seguir as seguintes diretrizes de instalação. Você precisa instalá-lo para poder usar a GPU no contêiner docker.

##### 4. Configuração do Frigate

* Configurar Diretório de Configuração: Crie um diretório para armazenar os arquivos de configuração do Frigate:

```
mkdir ~/frigate
cd ~/frigate
```

* Criar Arquivos de Configuração: Você precisará criar um arquivo docker-compose.yml e um arquivo config.yml dentro do diretório ~/frigate. Esses arquivos definirão como o Frigate é implantado e como ele se conecta às suas câmeras IP. docker-compose.yml define os serviços Docker para o Frigate e config.yml: especifica configurações do Frigate, como fluxos de câmera, configurações de detecção e integração MQTT.

Ao concluir estas etapas, seu dispositivo NVIDIA Jetson estará totalmente preparado para executar o Frigate, e você estará pronto para prosseguir com a implantação do Frigate e a integração da sua câmera IP para detecção de objetos em tempo real.

## Primeiros Passos

Agora que você tem o hardware preparado e o ambiente de software configurado, é hora de implantar o Frigate no seu dispositivo NVIDIA Jetson e conectá-lo à sua câmera IP Dahua. Siga estas etapas para iniciar sua implantação:

### 1. Fazer pull da imagem docker do Frigate

No site do Frigate, executar em Docker com compose é o método de instalação recomendado. Primeiro, você precisa fazer pull da imagem Docker do Frigate otimizada para TensorRT. Essa imagem é especificamente projetada para aproveitar os recursos de GPU dos dispositivos NVIDIA Jetson para detecção de objetos eficiente.

Aqui estamos trabalhando no JP5.1.3 e o comando de pull é:

```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

As tags de imagem docker oficiais para a versão estável atual são:

- stable : Build padrão do Frigate para amd64 e build otimizado do Frigate para arm64 em RPi
- stable-standard-arm64 : Build padrão do Frigate para arm64
- stable-tensorrt : Build do Frigate específico para dispositivos amd64 executando uma GPU nvidia

As tags de imagem docker com suporte da comunidade para a versão estável atual são:

- stable-tensorrt-jp5 : Build do Frigate otimizado para dispositivos nvidia Jetson executando Jetpack 5
- stable-tensorrt-jp4 : Build do Frigate otimizado para dispositivos nvidia Jetson executando Jetpack 4.6
- stable-rk : Build do Frigate para SBCs com SoC Rockchip
- stable-rocm : Build do Frigate para GPUs e iGPUs AMD

Você pode usar cada uma dessas tags com base na sua implantação. Mas aqui estamos trabalhando com Jetson, tensorrt e Jetpack 5.1.3, então precisamos fazer pull de 'stable-tensorrt-jp5'. Essa imagem docker contém todos os pacotes de que você precisa para executar o Frigate e não é necessário instalar tensorrt ou similares.

### 2. Preparar Arquivos de Configuração do Frigate

Antes de iniciar a implantação, você precisa configurar o Frigate para funcionar com sua configuração específica, incluindo fluxos de câmera e configurações de detecção.

arquivo cinfig.yml: Este arquivo conterá a configuração do Frigate, incluindo configurações de câmera e parâmetros de detecção. Crie um novo arquivo chamado config.yml usando um editor de texto e adicione o seguinte conteúdo. Essa configuração configura o Frigate em um dispositivo NVIDIA Jetson usando TensorRT para detecção de objetos eficiente a partir de uma câmera IP Dahua.

```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- this will be changed to your actual camera later
    enabled: True
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: rtsp://admin:admin1234@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - detect

birdseye:

  enabled: True
  mode: objects

detectors:
  tensorrt:
    type: tensorrt
    device: 0 #This is the default, select the first GPU

model:
  path: /config/model_cache/tensorrt/yolov7-320.trt
  input_tensor: nchw
  input_pixel_format: rgb
  width: 320
  height: 320

detect:
  fps : 20
  width: 1280
  height: 720

objects:
  track:
    - person 
```

Os pontos principais incluem:

**MQTT Desativado**: A integração MQTT está desligada, portanto o Frigate não enviará eventos de detecção via MQTT.

**Configuração da Câmera**: Uma câmera de espaço reservado chamada dummy_camera está habilitada, usando aceleração de hardware para streams de vídeo H.264 via FFmpeg. Ela se conecta à câmera IP Dahua usando uma URL RTSP para detecção.

**Visualização Birdseye Ativada**: Fornece uma visão geral exibindo apenas objetos detectados de todos os feeds de câmera.

**Detector TensorRT**: Usa TensorRT para inferência na GPU principal, otimizando a velocidade e a eficiência da detecção.

**Detalhes do Modelo**: Especifica um modelo YOLOv7 otimizado com TensorRT para detecção de objetos, com tamanho de entrada de 320x320 e formato RGB.

**Configurações de Detecção**: Processa vídeo a 20 quadros por segundo, com resolução de detecção de 1280x720.
Rastreamento de Objetos: Configurado para rastrear apenas pessoas, reduzindo a carga computacional e focando em detecções relevantes.

### 2. Preparar o Arquivo docker-compose.yml

Este arquivo define o serviço Frigate e como ele será executado usando o Docker Compose. Crie um novo arquivo chamado docker-compose.yml no mesmo diretório com o seguinte conteúdo:

```
services:
  frigate:
    privileged: true
    environment:
      - YOLO_MODELS=yolov7-320
      - USE_FP16=false
    container_name: frigate
    runtime: nvidia 
    #devices:
      #- /dev/video0:/dev/video0 
    volumes:
      - /home/jetson/frigate/config:/config
      - /home/jetson/frigate/storage:/media/frigate
      #- type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

O trecho de código fornecido parece ser uma configuração para o serviço Frigate dentro de uma configuração Docker Compose. Frigate é um sistema de vigilância por vídeo de código aberto com IA que pode ser usado para detectar e rastrear objetos em tempo real.

Aqui está uma explicação da configuração:

1. **services**: Esta seção define os serviços que farão parte da configuração do Docker Compose.

2. **frigate**: Este é o nome do serviço para o contêiner Frigate.

3. **privileged: true**: Isso concede ao contêiner Frigate acesso privilegiado, o que geralmente é necessário para acessar dispositivos de hardware como câmeras.

4. **environment**: Esta seção define duas variáveis de ambiente para o contêiner Frigate:
   - `YOLO_MODELS=yolov7-320`: Especifica o modelo YOLO (You Only Look Once) a ser usado para detecção de objetos.
   - `USE_FP16=false`: Desativa o uso de precisão em ponto flutuante de 16 bits, o que pode melhorar o desempenho em alguns hardwares.

5. **container_name: frigate**: Define o nome do contêiner Frigate.

6. **runtime: nvidia**: Especifica o ambiente de execução a ser usado para o contêiner Frigate, neste caso, o runtime NVIDIA para processamento acelerado por GPU.

7. **volumes**: Monta os seguintes diretórios:
   - `/home/jetson/frigate/config:/config`: Monta o diretório de configuração local no diretório `/config` do contêiner.
   - `/home/jetson/frigate/storage:/media/frigate`: Monta o diretório de armazenamento local no diretório `/media/frigate` do contêiner.
   - As linhas comentadas mostram uma configuração opcional para usar um tmpfs (sistema de arquivos em memória) para cache, o que pode ajudar a reduzir o desgaste em dispositivos de armazenamento.

8. **ports**: Expõe as seguintes portas:
   - `5000:5000`: Mapeia a porta 5000 do contêiner para a porta 5000 do host.
   - `8554:8554`: Mapeia a porta 8554 do contêiner para a porta 8554 do host.

9. **image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**: Especifica a imagem Docker a ser usada para o contêiner Frigate, neste caso, a tag `stable-tensorrt-jp5` do repositório `blakeblackshear/frigate` no GitHub Container Registry.

Essa configuração configura um serviço Frigate em um ambiente Docker Compose, fornecendo uma maneira de executar o sistema de vigilância por vídeo Frigate com configurações personalizadas e suporte a aceleração de hardware.

### 3. Fazer o Deploy do Frigate Usando Docker Compose

Com os arquivos de configuração preparados e a imagem Docker baixada, agora você pode fazer o deploy do Frigate usando Docker Compose.

1. Navegue até o Diretório do Frigate: Certifique-se de estar no diretório onde você criou os arquivos de configuração:

```
cd ~/frigate
```

2. Inicie o Frigate com Docker Compose: Execute o seguinte comando para iniciar o Frigate:

```
docker-compose up -d
```

Este comando inicia o serviço Frigate em modo destacado. O contêiner Docker agora será executado em segundo plano.

3. Verifique se o Frigate está em Execução: Verifique se o contêiner Frigate está em execução usando:

```
docker ps
```

4. Depois de executar o docker, você pode ver logs do Tensorrt, o que significa que o Frigate está sendo executado na GPU.

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)

### 4. Acessar a Interface Web do Frigate

Assim que o Frigate estiver em execução, você poderá acessar a interface web para monitorar os feeds de vídeo e configurar as definições:

1. Abra um Navegador Web: Em um dispositivo conectado à mesma rede que o seu dispositivo Jetson, abra um navegador web.
2. Digite o Endereço IP do Dispositivo Jetson: Na barra de endereços, digite o endereço IP do seu dispositivo Jetson seguido pela porta 5000 (por exemplo, `http://jetson-ip-address:5000` ou `http://127.0.0.1:5000`).
3. Veja o Dashboard: O dashboard do Frigate exibirá feeds de vídeo ao vivo da(s) câmera(s) IP Dahua conectada(s), eventos de detecção e opções de configuração.
4. Agora você pode verificar se o Jetson está usando a GPU para detecção com jtop ou no sistema do Frigate. Abaixo podemos ver que a parte de detecção está sendo executada em cerca de 33 ms para cada quadro.

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## Solução de Problemas

Alguns problemas podem ser encontrados no processo de conexão de hardware, depuração de software ou upload, especialmente ao executar o docker. Você pode usar o log do docker para superar os erros.

```
docker logs frigate
```

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Referências

1. [Site do Frigate](https://frigate.video/)
2. [Frigate Github](https://github.com/blakeblackshear/frigate)
3. [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
