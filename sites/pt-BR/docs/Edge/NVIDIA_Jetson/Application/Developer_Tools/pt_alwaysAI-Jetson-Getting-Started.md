---
description: Envio e Rotulagem de Dados com alwaysAI em dispositivos NVIDIA Jetson
title: Primeiros Passos com alwaysAI
tags:
  - Data Label
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /alwaysAI-Jetson-Getting-Started
sku: 802000061,113020031
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/alwaysAI-Jetson-Getting-Started/
---

# Primeiros Passos com alwaysAI em Dispositivos NVIDIA® Jetson

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/thumb-5.gif"/></div>

[alwaysAI](https://alwaysai.co) é uma plataforma essencial de desenvolvimento de Visão Computacional para criar e implantar aplicações de aprendizado de máquina em dispositivos de Borda, como dispositivos NVIDIA® Jetson. Desenvolver e implantar essas aplicações é simplesmente muito complexo e demorado, exigindo conhecimento profundo de uma grande variedade de tecnologias e técnicas de visão computacional que são mais relevantes e acessíveis a especialistas do que a desenvolvedores do dia a dia. alwaysAI remove essas barreiras e torna a criação de aplicativos de visão computacional fácil, rápida e eficaz.

## Hardware compatível

alwaysAI é compatível com o seguinte hardware relacionado a Jetson:

- Kits da Seeed:

  - reComputer J1010 construído com Jetson Nano
  - reComputer J1020 construído com Jetson Nano
  - reComputer J2011 construído com Jetson Xavier NX 8GB
  - reComputer J2012 construído com Jetson Xavier NX 16GB

- Placas Carrier da Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - Placa Carrier A203
  - Placa Carrier A203 (Versão 2)
  - Placa Carrier A205
  - Placa Carrier A206

- Kits de Desenvolvimento Oficiais da NVIDIA:

  - Kit de Desenvolvimento NVIDIA® Jetson Nano
  - Kit de Desenvolvimento NVIDIA® Jetson Xavier NX
  - Kit de Desenvolvimento NVIDIA® Jetson AGX Xavier
  - Kit de Desenvolvimento NVIDIA® Jetson TX2
  - Kit de Desenvolvimento NVIDIA® Jetson AGX Orin

- SoMs Oficiais da NVIDIA:

  - módulo NVIDIA® Jetson Nano
  - módulo NVIDIA® Jetson Xavier NX
  - módulo NVIDIA® Jetson TX2 NX
  - módulo NVIDIA® Jetson TX2
  - módulo NVIDIA® Jetson AGX Xavier

## Pré-requisitos

- Qualquer um dos dispositivos Jetson acima executando JetPack 4.6 com todos os componentes do SDK instalados (consulte [este wiki](https://wiki.seeedstudio.com/pt-br/reComputer_J1020_A206_Flash_JetPack/) como referência para instalação)
- PC host com Windows, Linux ou Mac
- Webcam USB ou câmera MIPI CSI compatível com o seu dispositivo Jetson

## Primeiros passos

Implantar seu primeiro projeto de visão computacional leva apenas alguns minutos! Ao final deste wiki, você será capaz de detectar objetos em um fluxo de vídeo ao vivo de uma câmera conectada a um dispositivo Jetson e também em um arquivo de vídeo pré-carregado.

1. Configurar o ambiente para o computador de desenvolvimento
2. Configurar o ambiente para o dispositivo Jetson
3. Criar uma conta alwaysAI
4. Criar um projeto usando o painel alwaysAI
5. Implantar seu projeto no dispositivo Jetson usando o computador de desenvolvimento
6. Detecção de objetos em fluxo de vídeo ao vivo da câmera
7. Detecção de objetos em arquivo de vídeo pré-carregado

### Configurar o ambiente para o computador de desenvolvimento

Agora você precisa configurar o ambiente de desenvolvimento. Aqui você pode usar um computador Windows, Linux ou Mac.

:::note
Neste guia, usaremos um computador de desenvolvimento Windows. No entanto, se você quiser configurar um Mac ou Linux como seu PC de desenvolvimento, por favor [visite aqui](https://alwaysai.co/docs/get_started/development_computer_setup.html) para saber mais.
:::

- **Passo 1.** Baixe e instale o aplicativo desktop alwaysAI e a interface de linha de comando clicando [aqui](https://alwaysai.co/installer/windows)

- **Passo 2.** Após a conclusão da instalação, abra uma interface de linha de comando e digite o seguinte

```sh
aai -v
```

Se você vir um número de versão impresso, você instalou com sucesso o alwaysAI CLI. O número de versão no momento da escrita deste wiki é **1.4.3**

- **Passo 3.** Verifique se o OpenSSH já está instalado no seu sistema operacional. Você precisa do OpenSSH na máquina de desenvolvimento para se conectar ao seu dispositivo de borda e implantar os projetos de aprendizado de máquina.

```sh
ssh -V
```

Se você vir um número de versão impresso, você já tem o OpenSSH instalado. Por exemplo **OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2**. Desde o final de 2018, o Windows 10 suporta OpenSSH nativamente. Confira [este artigo](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) na documentação da Microsoft para mais informações sobre a instalação do OpenSSH no Windows

### Configurar o ambiente para o dispositivo Jetson

Em seguida, você precisa configurar o ambiente no dispositivo de borda (dispositivo Jetson neste caso).

**Passo 1.** Ao executar nosso projeto de aprendizado de máquina no dispositivo Jetson, é usado o runtime edgeIQ que está disponível como uma [imagem docker](https://hub.docker.com/r/alwaysai/edgeiq). Você não precisa instalar o Docker porque ele já vem pré-instalado com o JetPack. No entanto, você precisa adicionar o grupo "docker" ao seu usuário para que não precise de privilégios de root (sudo) para acessar o Docker. Acesse o dispositivo Jetson e execute o seguinte em um terminal

```sh
sudo usermod -aG docker $USER
```

**Passo 2.** Para aplicar a nova associação de grupo, saia do dispositivo Jetson e entre novamente, ou digite o seguinte

```sh
su - $USER
```

**Passo 3.** Teste sua instalação do docker sem **sudo**

```sh
docker run hello-world
```

<div align="center"><img width= "{630}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/2.png"/></div>

### Criar uma conta alwaysAI

- **Passo 1.** Visite [esta página](https://console.alwaysai.co/auth?register=true) para criar uma conta alwaysAI

- **Passo 2.** Preencha o formulário e clique em **Sign Up for Free** para concluir o processo de criação de conta

### Criar um projeto usando o painel alwaysAI

Após concluir as configurações de ambiente na máquina de desenvolvimento e no dispositivo Jetson, e criar uma conta alwaysAI, podemos começar a criar um novo projeto de detecção de objetos usando o painel alwaysAI.

**Passo 1.** Visite o [painel alwaysAI](https://console.alwaysai.co/dashboard) e crie um novo projeto clicando no botão **New Project**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/4.png"/></div>

**Passo 2.** Escolha **Object Detection** como modelo inicial, digite um nome de projeto e clique em **Create Project**

<div align="center"><img width="{550}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/5.png"/></div>

**Passo 3.** Clique em **Click Here To View Your Project** para entrar no seu projeto recém-criado

Agora você verá informações sobre o projeto recém-criado, como o modelo usado e outros detalhes úteis

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/6.png"/></div>

Para o **Projeto de Detecção de Objetos** padrão, **mobilenet_ssd** é usado como modelo, o qual foi treinado com o **conjunto de dados Pascal VOC**. Isso significa que este aplicativo pode reconhecer **20 classes de objetos** como pessoa, pássaro, gato, vaca, cachorro, cavalo, ovelha, avião, bicicleta, barco, ônibus, carro, moto, trem, garrafa, cadeira, mesa de jantar, planta em vaso, sofá, tv/monitor.

No entanto, este modelo não é otimizado para rodar em hardware Jetson e terá uma taxa de quadros muito baixa. Portanto, vamos escolher um modelo que é otimizado para **Jetson Xavier NX** com **suporte a TensorRT**.

**Passo 4.** Clique nos três pontos ao lado do modelo e clique em **Delete**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/32.png"/></div>

**Passo 5.** Clique em **Add New Model** e clique em **Go to Model Catalog** para entrar no Catálogo de Modelos alwaysAI

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/33.png"/></div>

**Passo 6.** Digite **ssd_mobilenet_v1_coco_2018_01_28_xavier_nx** na caixa de pesquisa e clique em **+ Use this Model**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/34.png"/></div>

Este modelo foi treinado com o **conjunto de dados COCO**, que pode reconhecer **80 classes de objetos**, como pessoa, bicicleta, carro, motocicleta, avião, ônibus, trem, caminhão, barco, semáforo, hidrante, placa de parada, parquímetro, banco, pássaro, gato, cachorro, cavalo, ovelha, vaca, elefante, urso, zebra, girafa, mochila, guarda-chuva, bolsa de mão, gravata, mala, frisbee, esquis, snowboard, bola de esportes, pipa, taco de beisebol, luva de beisebol, skate, prancha de surfe, raquete de tênis, garrafa, taça de vinho, xícara, garfo, faca, colher, tigela, banana, maçã, sanduíche, laranja, brócolis, cenoura, cachorro-quente, pizza, donut, bolo, cadeira, sofá, planta em vaso, cama, mesa de jantar, vaso sanitário, tv, laptop, mouse, controle remoto, teclado, telefone celular, micro-ondas, forno, torradeira, pia, refrigerador, livro, relógio, vaso, tesoura, ursinho de pelúcia, secador de cabelo, escova de dentes

**Passo 7.** Selecione o projeto criado anteriormente (My First Project neste caso) e clique em **Add To Project**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/35.png"/></div>

Agora adicionamos o modelo ao nosso projeto com sucesso!

### Implantar seu projeto no dispositivo Jetson usando o computador de desenvolvimento

Agora vamos implantar o projeto que criamos anteriormente no dispositivo Jetson usando o computador de desenvolvimento via SSH

**Passo 1.** Na máquina de desenvolvimento, crie uma nova pasta, abra uma interface de linha de comando dentro da nova pasta e digite o seguinte

```sh
aai app configure
```

:::note
Você será solicitado a inserir o nome de usuário e a senha da conta alwaysAI quando executar o comando acima pela primeira vez
:::

**Passo 2.** Selecione o projeto que você criou anteriormente no painel alwaysAI

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/7.png"/></div>

**Passo 3.** Escolha **Remote device** como **destination**

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/8.png"/></div>

**Passo 4.** Pressione **Y** para criar o arquivo de chave privada

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/9.png"/></div>

**Passo 5.** Clique em **Add a new device** para adicionar seu dispositivo Jetson como um dispositivo remoto

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/10.png"/></div>

**Passo 6.** Escolha o **device mode** como **Development**

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/11.png"/></div>

**Passo 7.** Insira um **device name**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/36.png"/></div>

**Etapa 8.** Digite o **nome de usuário** do dispositivo Jetson juntamente com o **nome do host/endereço IP** como a seguir

```sh
lakshanthad@192.168.2.156
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/37.png"/></div>

:::note
Aqui o nome de usuário do dispositivo Jetson é **lakshanthad** e o endereço IP é **192.168.2.156**
:::

**Etapa 9.** Digite a **senha** do dispositivo Jetson quando solicitado

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/38.png"/></div>

**Etapa 10.** Quando for perguntado o **local** para executar o app, deixe o local padrão e pressione **ENTER**. Aqui o local padrão é definido como **alwaysai/test**. Este é o diretório do projeto dentro do dispositivo Jetson

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/39.png"/></div>

Agora inicializamos com sucesso o projeto no dispositivo Jetson usando o computador de desenvolvimento via SSH

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/17.png"/></div>

Antes de seguir para a instalação do app no dispositivo Jetson, precisamos fazer uma pequena alteração no código principal para mudar o nome do modelo e o tipo de mecanismo de inferência.

**Etapa 11.** No diretório que você criou no seu PC para alwaysAI, abra **app.py** e altere o nome do modelo e o tipo de mecanismo de inferência como a seguir

```python
def main():
    obj_detect = edgeiq.ObjectDetection("alwaysai/ssd_mobilenet_v1_coco_2018_01_28_xavier_nx")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**Etapa 12.** Digite o seguinte para instalar o app

```sh
aai app install
```

Você verá a seguinte saída se ele for instalado com sucesso

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/40.png"/></div>

:::note
Se você encontrar erros nesta etapa, primeiro pode tentar implantar novamente usando o método `aai app install --clean`. Verifique duas vezes se a versão do jetpack é a **versão solicitada 4.6. Isto pode ser verificado digitando o comando `sudo apt-cache show nvidia-jetpack`. Se o número da versão estiver correto, certifique-se de que você concluiu a instalação do sistema Jetson juntamente com os componentes do**Jetson SDK**. Isso ajudará você a resolver a maioria dos problemas.
:::

### Detecção de objetos em fluxo de vídeo ao vivo da câmera

Agora vamos executar a detecção de objetos em um fluxo de vídeo ao vivo a partir de uma câmera USB conectada ao dispositivo Jetson. Você também pode usar câmeras MIPI CSI que são suportadas pelo dispositivo Jetson que você está utilizando

**Etapa 1.** Conecte a câmera USB/ câmera MIPI CSI ao dispositivo Jetson

**Etapa 2.** Execute o seguinte

```sh
aai app start
```

Agora você verá a seguinte saída na linha de comando

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/41.png"/></div>

**Etapa 3.** Abra um navegador da web e digite **http://localhost:5000** para abrir o fluxo de vídeo

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif"/></div>

Como você pode ver, as pessoas estão sendo detectadas em tempo real e a porcentagem de confiança para cada rótulo é mostrada na interface. Além disso, o tempo de inferência no **Jetson Xavier** é de **0,009s, o que equivale a cerca de 111 fps**.

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/car-small.gif"/></div>

Acima está outro demo usando o mesmo modelo.

### Detecção de objetos em arquivo de vídeo pré-carregado

Aqui vamos executar a detecção de objetos em um arquivo de vídeo pré-carregado.

**Etapa 1.** Coloque o arquivo de vídeo dentro do diretório de projeto alwaysAI do dispositivo Jetson. De acordo com nosso exemplo, é **/home/`<username>`/alwaysai/test**

**Etapa 2.** No computador de desenvolvimento, abra o arquivo **app.py** dentro da pasta **test** que criamos antes e substitua esta seção do código

```sh
with edgeiq.WebcamVideoStream(cam=0) as video_stream, \
                edgeiq.Streamer() as streamer:
```

por esta

```sh
with edgeiq.FileVideoStream(
            'file name goes here', play_realtime=True) as video_stream, \
                edgeiq.Streamer() as streamer:
```

E então substitua **file name goes here** pelo nome do arquivo de vídeo e a extensão do arquivo. Certifique-se de que o nome do arquivo esteja entre aspas simples.

**Etapa 3.** Instale o app novamente

```sh
aai app install
```

**Etapa 4.** Por fim, execute o app

```sh
aai app start
```

Aqui você verá a mesma saída na linha de comando como antes e, depois de abrir um navegador da web com o mesmo endereço mencionado antes, verá a detecção de objetos sendo executada no vídeo pré-carregado, fornecendo saída semelhante à anterior.

### Filtrar objetos a serem detectados

Você também pode filtrar objetos específicos que deseja que o modelo detecte. Por exemplo, o conjunto de dados COCO acima que usamos é capaz de detectar 80 tipos de objetos. No entanto, podemos filtrar para detectar apenas pessoas.

Você simplesmente precisa adicionar a linha **results.predictions** após **results** ao arquivo **app.py**

```python
while True:
    frame = video_stream.read()
    results = obj_detect.detect_objects(framconfidence_level=.5)
    results.predictions = edgefilter_predictions_by_label(resulpredictions, ['person'])
    frame = edgeiq.markup_image(
```

## Aplicações alwaysAI no GitHub

alwaysAI fornece uma ampla variedade de aplicações prontas para uso no repositório alwaysAI GitHub. Você pode conferir as diferentes aplicações [aqui](https://github.com/alwaysai/Reference-Applications).

### License Plate Detector

Para fins de demonstração, vamos explicar como implantar uma dessas aplicações, que é o [License Plate Detector](https://github.com/alwaysai/license-plate-detector), em um dispositivo Jetson. Assim, você pode repetir as mesmas etapas para outras aplicações também.

**Etapa 1.** No computador de desenvolvimento, crie uma nova pasta para nosso projeto e entre nela

**Etapa 2.** Baixe [este repositório](https://github.com/alwaysai/license-plate-detector) como um arquivo **.zip** ou faça o clone se você tiver o **Git** instalado no seu PC

Por padrão, o modelo usado para este exemplo não é otimizado para rodar no Jetson Nano. Portanto, primeiro vamos carregar um modelo otimizado para Jetson Nano.

**Etapa 3.** Entre no repositório recém-baixado/ clonado, abra uma linha de comando dentro dele e execute o seguinte

```sh
aai app models add alwaysai/vehicle_license_mobilenet_ssd_nano
```

**Etapa 4.** Abra **app.py**, altere o nome do modelo e o mecanismo de inferência

```python
def main():
    obj_detect = edgeiq.ObjectDetection(
            "alwaysai/vehicle_license_mobilenet_ssd_nano")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**Etapa 5.** Execute o seguinte

```sh
aai app configure
```

:::note
Você será solicitado a inserir o nome de usuário e a senha da conta alwaysAI quando executar o comando acima pela primeira vez
:::

**Etapa 6.** Selecione **Create new project**

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/21.jpg"/></div>

**Etapa 7.** Digite um **Project Name**

**Etapa 8.** Selecione para inicializar o projeto **As an empty app**

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/26.jpg"/></div>

**Etapa 9.** Repita as mesmas etapas da seção **Deploy your project on the Jetson device using development computer**, começando da **Etapa 3** até a **Etapa 11**

**Etapa 10.** Assim que o app estiver instalado no Jetson, execute o seguinte comando para iniciar o app

```sh
aai app start
```

Agora você verá a seguinte saída na linha de comando

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/23.jpg"/></div>

Como você pode ver, estamos usando o **modelo vehicle_license_mobilenet_ssd** e este modelo é capaz de identificar veículos e placas de licença.

**Etapa 11.** Abra um navegador da web no seu PC e digite o seguinte para abrir o fluxo de vídeo

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/25.gif"/></div>

Neste demo, a inferência está sendo realizada nos 2 vídeos [aqui](https://github.com/alwaysai/license-plate-detector/tree/main/video) e, como você pode ver, os veículos e as placas de licença no fluxo de vídeo estão sendo detectados e a porcentagem de confiança para cada rótulo é mostrada na interface.

### Usar inferência com Webcam

Se você quiser realizar a mesma inferência acima em um fluxo de vídeo em tempo real de uma webcam, siga as etapas abaixo

**Etapa 1.** Navegue até a pasta que criamos antes para nosso projeto e abra **app.py**

**Etapa 2.** Copie e cole o código a partir de [aqui](https://github.com/lakshanthad/license-plate-detector-webcam/blob/main/app.py)

**Etapa 3.** Instale o app novamente

```sh
aai app install
```

**Etapa 4.** Por fim, execute o app

```sh
aai app start
```

Aqui você verá a mesma saída na linha de comando como antes e, depois de abrir um navegador da web com o mesmo endereço mencionado antes, verá a detecção de objetos sendo executada em um fluxo de vídeo em tempo real da webcam, fornecendo saída semelhante à anterior.

## alwaysAI Enterprise Edition

alwaysAI também possui uma edição empresarial com os seguintes recursos:

- Acesso ao Freemium com implantação de 1 dispositivo de produção por um ano
- 20 horas de treinamento de modelo alwaysAI Cloud
- 30 dias de acesso ao armazenamento de conjunto de dados alwaysAI Cloud

Você pode saber mais sobre alwaysAI Enterprise Edition aqui.

### Treine seu próprio modelo e faça a implantação

**Etapa 1.** Prepare seu conjunto de dados para treinamento. Certifique-se de que seu conjunto de dados esteja em **formato PascalVOC** e, em seguida, organize todas as imagens e rótulos em 2 diretórios e compacte o arquivo da seguinte forma

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/27.jpg"/></div>

**Etapa 2.** Vá para o [painel alwaysAI](https://console.alwaysai.co/dashboard), clique em **Datasets** no painel de navegação à esquerda e clique em **Upload a Dataset**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/28.jpg"/></div>

**Passo 3.** Depois que o upload do conjunto de dados for concluído, clique em **Train**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/29.jpg"/></div>

**Passo 4.** Aqui você pode alterar as configurações de treinamento de acordo com sua preferência e então clicar em **Start training**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/30.jpg"/></div>

Você verá a seguinte saída depois que o treinamento for concluído

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/31.jpg"/></div>

Agora o modelo treinado está disponível na sua conta. Você pode usar este modelo no seu projeto de detecção de objetos da seguinte forma

**Passo 5.** Navegue até `Models > My Models` e clique no modelo que acabamos de treinar

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/42.png"/></div>

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/43.png"/></div>

**Passo 6.** Como você pode ver, você pode usar o comando abaixo no diretório raiz do seu aplicativo de detecção de objetos

```sh
aai app models add lakshanthad/roadsign-mobilenet
```

**Passo 7.** Depois disso, altere o nome do modelo em **app.py** e execute o aplicativo novamente

```sh
lakshanthad/roadsign-mobilenet
```

## Recursos

- **[Página da Web]** [AlwaysAI Documentation](https://alwaysai.co/docs)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
