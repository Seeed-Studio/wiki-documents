---
description: Treine e faça o deploy do seu próprio modelo de IA no SenseCAP A1101
title: Treine e faça o deploy do seu próprio modelo de IA no SenseCAP A1101
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Train-Deploy-AI-Model-A1101
sku: 101990962
last_update:
  date: 5/10/2023
  author: Yvonne
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101/
---

# Treine e faça o deploy do seu próprio modelo de IA no SenseCAP A1101

## Visão geral

Neste wiki, vamos ensinar como treinar seu próprio modelo de IA para a sua aplicação específica e depois fazer o deploy dele facilmente no SenseCAP A1101 - Sensor de Visão com IA LoRaWAN. Vamos começar!

:::caution **Note:**
Nosso firmware de dispositivo atual é compatível com [EI](https://wiki.seeedstudio.com/pt-br/One-Stop-Model-Training-with-Edge-Impulse/). Se você comprou o dispositivo após **30 de março de 2023**, será necessário gravar novamente o dispositivo com o [firmware padrão](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101/#alterar-o-firmware-do-dispositivo-após-a-coleta-de-imagens) para seguir este wiki.
:::

## Introdução ao hardware

Usaremos principalmente o SenseCAP A1101 - Sensor de Visão com IA LoRaWAN ao longo deste wiki. Então, primeiro, vamos nos familiarizar com este hardware.

[SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) combina a tecnologia TinyML de IA e a transmissão de longa distância LoRaWAN para possibilitar uma solução de dispositivo de IA de baixo consumo e alto desempenho para uso externo. Este sensor apresenta a solução de visão com IA de alto desempenho e baixo consumo da Himax, que suporta o framework Google TensorFlow Lite e múltiplas plataformas TinyML de IA. Diferentes modelos podem implementar diferentes funções de IA, por exemplo, detecção de pragas, contagem de pessoas, reconhecimento de objetos. Os usuários podem adotar modelos fornecidos pela Seeed, gerar seus próprios modelos por meio de ferramentas de treinamento de IA ou adquirir modelos comerciais e implantáveis de provedores de modelos parceiros da Seeed.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/60.jpg"/></div>

## Introdução ao software

Usaremos as seguintes tecnologias de software neste wiki

- Roboflow - para anotação
- YOLOv5 - para treinamento
- TensorFlow Lite - para inferência

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png"/></div>

### O que é o Roboflow?

[Roboflow](https://roboflow.com) é uma ferramenta de anotação baseada na web. Esta ferramenta permite que você anote facilmente todas as suas imagens, adicione processamento adicional a essas imagens e exporte o conjunto de dados rotulado em diferentes formatos, como YOLOV5 PyTorch, Pascal VOC e muito mais! O Roboflow também possui conjuntos de dados públicos prontamente disponíveis para os usuários.

### O que é YOLOv5?

YOLO é uma abreviação do termo “You Only Look Once”. É um algoritmo que detecta e reconhece vários objetos em uma imagem em tempo real. Ultralytics [YOLOv5](https://ultralytics.com/yolov5) é a versão do YOLO baseada no framework PyTorch.

### O que é TensorFlow Lite?

[TensorFlow Lite](https://www.tensorflow.org/lite) é um framework de aprendizado profundo multiplataforma, pronto para produção e de código aberto, que converte um modelo pré-treinado em TensorFlow em um formato especial que pode ser otimizado para velocidade ou armazenamento. O modelo em formato especial pode ser implantado em dispositivos de borda, como celulares com Android ou iOS ou dispositivos embarcados baseados em Linux, como Raspberry Pi ou microcontroladores, para realizar a inferência na borda.

## Estrutura do wiki

Este wiki será dividido em três seções principais

1. [Treine seu próprio modelo de IA com um conjunto de dados público](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101#1-treine-seu-próprio-modelo-de-ia-com-um-conjunto-de-dados-público)
2. [Treine seu próprio modelo de IA com seu próprio conjunto de dados](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101#2-treine-seu-próprio-modelo-de-ia-com-seu-próprio-conjunto-de-dados)
3. [Faça o deploy do modelo de IA treinado no SenseCAP A1101](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101#3-faça-o-deploy-do-modelo-treinado-e-execute-a-inferência)

A primeira seção será a maneira mais rápida de construir seu próprio modelo de IA com o menor número de etapas. A segunda seção exigirá algum tempo e esforço para construir seu próprio modelo de IA, mas certamente valerá o conhecimento adquirido. A terceira seção, sobre fazer o deploy do modelo de IA, pode ser realizada após a primeira ou a segunda seção.

Portanto, há duas maneiras de seguir este wiki:

1. Siga a [seção 1](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101#1-treine-seu-próprio-modelo-de-ia-com-um-conjunto-de-dados-público) e depois a [seção 3](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101#3-faça-o-deploy-do-modelo-treinado-e-execute-a-inferência) - rápido de seguir

2. Siga a [seção 2](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101#2-treine-seu-próprio-modelo-de-ia-com-seu-próprio-conjunto-de-dados) e depois a [seção 3](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101#3-faça-o-deploy-do-modelo-treinado-e-execute-a-inferência) - lento de seguir

No entanto, recomendamos seguir primeiro a primeira maneira e depois passar para a segunda.

## 1. Treine seu próprio modelo de IA com um conjunto de dados público

O primeiro passo de um projeto de detecção de objetos é obter dados para treinamento. Você pode baixar conjuntos de dados disponíveis publicamente ou criar seu próprio conjunto de dados!

Mas qual é a maneira mais rápida e fácil de começar com detecção de objetos? Bem... Usar conjuntos de dados públicos pode economizar muito tempo que você, de outra forma, gastaria coletando dados por conta própria e anotando-os. Esses conjuntos de dados públicos já vêm anotados prontos para uso, dando-lhe mais tempo para se concentrar em suas aplicações de visão computacional com IA.

### Preparação de hardware

- SenseCAP A1101 - Sensor de Visão com IA LoRaWAN
- Cabo USB Tipo-C
- Windows/ Linux/ Mac com acesso à internet

### Preparação de software

- Não é necessário preparar software adicional

### Use um conjunto de dados anotado disponível publicamente

Você pode baixar vários conjuntos de dados disponíveis publicamente, como o [conjunto de dados COCO](https://cocodataset.org), [conjunto de dados Pascal VOC](http://host.robots.ox.ac.uk/pascal/VOC) e muitos outros. O [Roboflow Universe](https://universe.roboflow.com) é uma plataforma recomendada que fornece uma ampla gama de conjuntos de dados e possui [90.000+ conjuntos de dados com mais de 66 milhões de imagens](https://blog.roboflow.com/computer-vision-datasets-and-apis) disponíveis para a construção de modelos de visão computacional. Além disso, você pode simplesmente pesquisar **open-source datasets** no Google e escolher entre uma variedade de conjuntos de dados disponíveis.

- **Passo 1.** Visite [este URL](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1) para acessar um conjunto de dados de detecção de maçãs disponível publicamente no Roboflow Universe

- **Passo 2.** Clique em **Create Account** para criar uma conta Roboflow

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png"/></div>

- **Passo 3.** Clique em **Download**, selecione **YOLO v5 PyTorch** como o **Format**, clique em **show download code** e clique em **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png"/></div>

Isso gerará um trecho de código que usaremos mais tarde no treinamento no Google Colab. Portanto, mantenha esta janela aberta em segundo plano.

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png"/></div>

### Treine usando YOLOv5 no Google Colab

Depois de escolhermos um conjunto de dados público, precisamos treinar o conjunto de dados. Aqui usamos um ambiente Google Colaboratory para realizar o treinamento na nuvem. Além disso, usamos a API do Roboflow dentro do Colab para baixar facilmente nosso conjunto de dados.

Clique [aqui](https://colab.research.google.com/github/Seeed-Studio/yolov5-swift/blob/master/tutorial.ipynb) para abrir um workspace do Google Colab já preparado, siga as etapas mencionadas no workspace e execute as células de código uma por uma.

**Note:** No Google Colab, na célula de código sob o **Step 4**, você pode copiar diretamente o trecho de código do Roboflow conforme mencionado acima

Ele irá guiá-lo pelos seguintes passos:

- Configurar um ambiente para treinamento
- Baixar um conjunto de dados
- Realizar o treinamento
- Baixar o modelo treinado

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png"/></div>

Para um conjunto de dados de detecção de maçãs com 699 imagens, o processo de treinamento levou cerca de 7 minutos para ser concluído no Google Colab rodando em uma GPU NVIDIA Tesla T4 com 16 GB de memória de GPU.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png"/></div>

Se você seguiu o projeto Colab acima, sabe que pode carregar 4 modelos no dispositivo de uma só vez. No entanto, observe que apenas um modelo pode ser carregado por vez. Isso pode ser especificado pelo usuário e será explicado mais adiante neste wiki.

### Deploy e inferência

Se você quiser ir diretamente para a **seção 3**, que explica como fazer o deploy do modelo de IA treinado no SenseCAP A1101 e executar a inferência, [clique aqui](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101/#3-faça-o-deploy-do-modelo-treinado-e-execute-a-inferência).

## 2. Treine seu próprio modelo de IA com seu próprio conjunto de dados

Se você quiser criar projetos específicos de detecção de objetos em que os conjuntos de dados públicos não possuam os objetos que você deseja detectar, talvez você queira criar seu próprio conjunto de dados. Quando você grava dados para o seu próprio conjunto de dados, precisa garantir que cubra todos os ângulos (360 graus) do objeto, coloque o objeto em diferentes ambientes, diferentes iluminações e diferentes condições climáticas. Depois de gravar seu próprio conjunto de dados, você também precisa anotar as imagens no conjunto de dados. Todas essas etapas serão abordadas nesta seção.

Embora existam diferentes métodos de coleta de dados, como usar a câmera de um telefone celular, a melhor maneira de coletar dados é usar a câmera integrada no SenseCAP A1101. Isso porque as cores, a qualidade de imagem e outros detalhes serão semelhantes quando realizarmos a inferência no SenseCAP A1101, o que torna a detecção geral mais precisa.

### Preparação de hardware

- SenseCAP A1101 - Sensor de Visão com IA LoRaWAN
- Cabo USB Tipo-C
- Windows/ Linux/ Mac com acesso à internet

### Preparação de software

Agora vamos configurar o software. A configuração de software para Windows, Linux e Intel Mac será a mesma, enquanto para Mac M1/M2 será diferente.

#### Windows, Linux, Intel Mac

- **Passo 1.** Certifique-se de que o Python já está instalado no computador. Caso não esteja, visite [esta página](https://www.python.org/downloads/) para baixar e instalar a versão mais recente do Python

- **Passo 2.** Instale a seguinte dependência

```sh
pip3 install libusb1
```

#### Mac M1/ M2

- **Passo 1.** Instale o Homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **Passo 2.** Instale o conda

```sh
brew install conda
```

- **Passo 3.** Baixe o libusb

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **Passo 4.** Instale o libusb

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
Você precisa se certificar de que a versão do seu BootLoader seja maior que 2.0.0 antes de poder alterar o firmware para fazer o seguinte. Se você não tiver certeza, verifique a versão do BootLoader seguindo as etapas mencionadas [nesta seção](#verificar-versao-do-bootloader), e se a versão for menor que 2.0.0, atualize o BootLoader seguindo as etapas mencionadas [nesta seção](#atualizar-bootloader)
:::

### Coletar conjunto de dados

- **Passo 1.** Conecte o SenseCAP A1101 ao PC usando um cabo USB Tipo-C

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Passo 2.** Dê um duplo clique no botão de boot para entrar no **modo de boot**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Depois disso, você verá um novo drive de armazenamento exibido no explorador de arquivos como **SENSECAP**

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Passo 3.** Arraste e solte [este arquivo .uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) no drive **SENSECAP**

Assim que o uf2 terminar de copiar para o drive, o drive desaparecerá. Isso significa que o uf2 foi enviado com sucesso para o módulo.

- **Passo 4.** Copie e cole [este script em Python](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) dentro de um arquivo recém-criado chamado **capture_images_script.py** no seu PC

- **Passo 5.** Execute o script em Python para começar a capturar imagens

```sh
python3 capture_images_script.py
```

Por padrão, ele irá capturar uma imagem a cada 300ms. Se você quiser alterar isso, pode executar o script neste formato

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

Por exemplo, para capturar uma imagem a cada segundo

```sh
python3 capture_images_script.py --interval 1000
```

Após o script acima ser executado, o SenseCAP A1101 começará a capturar imagens continuamente das câmeras embutidas e salvar todas elas dentro de uma pasta chamada **save_img**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/41.png"/></div>

Além disso, será aberta uma janela de pré-visualização enquanto estiver gravando

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/40.jpg"/></div>

Depois que você tiver imagens suficientes capturadas, clique na janela do terminal e pressione as seguintes combinações de teclas para parar o processo de captura

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### Alterar o firmware do dispositivo após a coleta de imagens

Depois de terminar de gravar imagens para o conjunto de dados, você precisa se certificar de alterar o firmware dentro do SenseCAP A1101 de volta ao original, para que possa novamente carregar modelos de detecção de objetos para detecção. Vamos passar pelas etapas agora.

- **Passo 1.** Entre no **modo Boot** no SenseCAP A1101, conforme explicado antes

- **Passo 2.** Arraste e solte [este arquivo .uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) no drive **SENSECAP** de acordo com o seu dispositivo

Assim que o uf2 terminar de copiar para o drive, o drive desaparecerá. Isso significa que o uf2 foi enviado com sucesso para o módulo.

### Anotar conjunto de dados usando o Roboflow

Se você usar seu próprio conjunto de dados, será necessário anotar todas as imagens do seu conjunto de dados. Anotar significa simplesmente desenhar caixas retangulares em torno de cada objeto que queremos detectar e atribuir rótulos a eles. Vamos explicar como fazer isso usando o Roboflow.

[Roboflow](https://roboflow.com) é uma ferramenta de anotação baseada na web. Aqui podemos importar diretamente as gravações de vídeo que registramos para o Roboflow e elas serão exportadas como uma série de imagens. Essa ferramenta é muito conveniente porque nos ajuda a distribuir o conjunto de dados entre "treinamento, validação e teste". Além disso, essa ferramenta nos permitirá adicionar mais processamento a essas imagens depois de rotulá-las. Além disso, ela pode exportar facilmente o conjunto de dados rotulado para o **formato YOLOV5 PyTorch**, que é exatamente o que precisamos!

Para este wiki, usaremos um conjunto de dados com imagens contendo maçãs para que possamos detectar maçãs depois e também fazer a contagem.

- **Passo 1.** Clique [aqui](https://app.roboflow.com/login) para criar uma conta no Roboflow

- **Passo 2.** Clique em **Create New Project** para iniciar nosso projeto

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **Passo 3.** Preencha o **Project Name**, mantenha **License (CC BY 4.0)** e **Project type (Object Detection (Bounding Box))** como padrão. Na coluna **What will your model predict?**, preencha um nome de grupo de anotação. Por exemplo, no nosso caso escolhemos **apples**. Esse nome deve destacar todas as classes do seu conjunto de dados. Por fim, clique em **Create Public Project**.

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg"/></div>

- **Passo 4.** Arraste e solte as imagens que você capturou usando o SenseCAP A1101

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png"/></div>

- **Passo 5.** Depois que as imagens forem processadas, clique em **Finish Uploading**. Aguarde pacientemente até que as imagens sejam carregadas.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **Passo 6.** Depois que as imagens forem carregadas, clique em **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **Passo 7.** Selecione uma imagem, desenhe uma caixa retangular em torno de uma maçã, escolha o rótulo como **apple** e pressione **ENTER**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png"/></div>

- **Passo 8.** Repita o mesmo para as maçãs restantes

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png"/></div>

**Nota:** Tente rotular todas as maçãs que você vê dentro da imagem. Se apenas uma parte de uma maçã estiver visível, tente rotulá-la também.

- **Passo 9.** Continue anotando todas as imagens do conjunto de dados

O Roboflow possui um recurso chamado **Label Assist** em que ele pode prever os rótulos antecipadamente para que sua rotulagem seja muito mais rápida. No entanto, ele não funcionará com todos os tipos de objetos, mas sim com um tipo selecionado de objetos. Para ativar esse recurso, você simplesmente precisa pressionar o botão **Label Assist**, **selecionar um modelo**, **selecionar as classes** e navegar pelas imagens para ver os rótulos previstos com caixas delimitadoras

<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/YOLOV5/41.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/39.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/40.png"/></div>

Como você pode ver acima, ele só pode ajudar a prever anotações para as 80 classes mencionadas. Se suas imagens não contiverem as classes de objetos acima, você não poderá usar o recurso de assistência de rótulos.

- **Passo 10.** Quando a rotulagem estiver concluída, clique em **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **Passo 11.** Em seguida, dividiremos as imagens entre "Train, Valid e Test". Mantenha as porcentagens padrão para a distribuição e clique em **Add Images**

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/YOLOV5/26.png"/></div>

- **Passo 12.** Clique em **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **Passo 13.** Agora você pode adicionar **Preprocessing** e **Augmentation**, se preferir. Aqui nós **alteraremos** a opção **Resize** para **192x192**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png"/></div>

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png"/></div>

Aqui alteramos o tamanho da imagem para 192x192 porque usaremos esse tamanho para o treinamento e o treinamento será mais rápido. Caso contrário, seria necessário converter todas as imagens para 192x192 durante o processo de treinamento, o que consome mais recursos de CPU e torna o processo de treinamento mais lento.

- **Passo 14.** Em seguida, prossiga com os demais padrões e clique em **Generate**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png"/></div>

- **Passo 15.** Clique em **Export**, selecione **Format** como **YOLO v5 PyTorch**, selecione **show download code** e clique em **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png"/></div>

Isso gerará um trecho de código que usaremos mais tarde no treinamento do Google Colab. Portanto, mantenha esta janela aberta em segundo plano.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Treinar usando YOLOv5 no Google Colab

Depois que terminarmos de anotar o conjunto de dados, precisaremos treiná-lo. Vá para [esta parte](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101/#treinar-usando-yolov5-no-google-colab) que explica como treinar um modelo de IA usando YOLOv5 em execução no Google Colab.

## 3. Implantar o modelo treinado e realizar inferência

Agora vamos mover o **model-1.uf2** que obtivemos no final do treinamento para o SenseCAP A1101.

- **Passo 1.** Instale a versão mais recente do [Google Chrome](https://www.google.com/chrome) ou do [navegador Microsoft Edge](https://www.microsoft.com/en-us/edge?r=1) e abra-o

- **Passo 2.** Conecte o SenseCAP A1101 ao seu PC via um cabo USB Type-C

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Passo 3.** Clique duas vezes no botão de boot do SenseCAP A1101 para entrar no modo de armazenamento em massa

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Depois disso, você verá um novo drive de armazenamento exibido no gerenciador de arquivos como **SENSECAP**

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Passo 4.** Arraste e solte o arquivo **model-1.uf2** no drive **SENSECAP**

Assim que o arquivo uf2 terminar de ser copiado para o drive, o drive desaparecerá. Isso significa que o uf2 foi carregado com sucesso no módulo.

**Nota:** Se você tiver 4 arquivos de modelo prontos, pode arrastar e soltar cada modelo um por um. Solte o primeiro modelo, espere até que termine de copiar, entre novamente no modo de boot, solte o segundo modelo e assim por diante. Se você tiver carregado apenas um modelo (com índice 1) no SenseCAP A1101, ele irá carregar esse modelo.

- **Passo 5.** Abra o **SenseCAP Mate App**. Se você não o tiver, faça o download e instale-o no seu celular de acordo com o seu sistema operacional

  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

- **Passo 6.** Abra o app e, na tela **Config**, selecione **Vision AI Sensor**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/21.jpg"/></div>

- **Passo 7.** Pressione e segure o botão de configuração no SenseCap A1101 por 3 segundos para entrar no modo de pareamento por bluetooth

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/37.png"/></div>

- **Passo 8.** Clique em **Setup** e ele começará a procurar dispositivos SenseCAP A1101 próximos

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/23.jpg"/></div>

- **Passo 9.** Clique no dispositivo encontrado

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/24.jpg"/></div>

- **Passo 10.** Vá em **Settings** e certifique-se de que **Object Detection** está selecionado. Se não estiver, selecione-o e clique em **Send**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/25.jpg"/></div>

- **Passo 11.** Vá em **General** e clique em **Detect**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/26.jpg"/></div>

- **Passo 12.** [Clique aqui](https://files.seeedstudio.com/grove_ai_vision/index.html) para abrir uma janela de pré-visualização do stream da câmera

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **Passo 13.** Clique no botão **Connect**. Então você verá um pop-up no navegador. Selecione **SenseCAP Vision AI - Paired** e clique em **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **Passo 14.** Veja os resultados de inferência em tempo real usando a janela de pré-visualização!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg"/></div>

Como você pode ver acima, as maçãs estão sendo detectadas com caixas delimitadoras ao redor delas. Aqui, "0" corresponde a cada detecção da mesma classe. Se você tiver várias classes, elas serão nomeadas como 0,1,2,3,4 e assim por diante. Além disso, a pontuação de confiança para cada maçã detectada (0,8 e 0,84 na demonstração acima) está sendo exibida!

## Conteúdo bônus

Se você se sentir mais aventureiro, pode continuar a seguir o restante do wiki!

### Posso treinar um modelo de IA no meu PC?

Você também pode usar o seu próprio PC para treinar um modelo de detecção de objetos. No entanto, o desempenho do treinamento dependerá do hardware que você possui. Você também precisa ter um PC com sistema operacional Linux para o treinamento. Usamos um PC com Ubuntu 20.04 para este wiki.

- **Passo 1.** Clone o **repositório yolov5-swift** e instale o **requirements.txt** em um ambiente **Python>=3.7.0**

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift
cd yolov5-swift
pip install -r requirements.txt
```

- **Passo 2.** Se você seguiu os passos deste wiki antes, talvez se lembre de que exportamos o conjunto de dados após a anotação no Robolflow. Também no Roboflow Universe, fizemos o download do conjunto de dados. Em ambos os métodos, havia uma janela como a abaixo, onde é perguntado qual formato usar para baixar o conjunto de dados. Então agora, selecione **download zip to computer**, em **Format** escolha **YOLO v5 PyTorch** e clique em **Continue**

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png"/></div>

Depois disso, um **arquivo .zip** será baixado para o seu computador

- **Passo 3.** Copie e cole o arquivo .zip que baixamos no diretório **yolov5-swift** e extraia-o

```sh
# example
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **Passo 4.** Abra o arquivo **data.yaml** e edite os diretórios **train** e **val** como a seguir

```sh
train: train/images
val: valid/images
```

- **Passo 5.** Baixe um modelo pré-treinado adequado para o nosso treinamento

```sh
sudo apt install wget
wget https://github.com/Seeed-Studio/yolov5-swift/releases/download/v0.1.0-alpha/yolov5n6-xiao.pt
```

- **Passo 6.** Execute o seguinte para iniciar o treinamento

Aqui, podemos passar vários argumentos:

- **img:** define o tamanho da imagem de entrada
- **batch:** determina o tamanho do batch
- **epochs:** define o número de épocas de treinamento
- **data:** define o caminho para o nosso arquivo yaml
- **cfg:** especifica a configuração do nosso modelo
- **weights:** especifica um caminho personalizado para os pesos
- **name:** nomes dos resultados
- **nosave:** salva apenas o checkpoint final
- **cache:** coloca imagens em cache para treinamento mais rápido

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

Para um conjunto de dados de detecção de maçãs com 987 imagens, o processo de treinamento levou cerca de 30 minutos em um PC local rodando com uma GPU NVIDIA GeForce GTX 1660 Super com 6GB de memória de GPU.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png"/></div>

Se você seguiu o projeto Colab acima, sabe que pode carregar 4 modelos no dispositivo de uma só vez. No entanto, observe que apenas um modelo pode ser carregado por vez. Isso pode ser especificado pelo usuário e será explicado mais adiante neste wiki.

- **Passo 7.** Se você navegar até `runs/train/exp/weights`, verá um arquivo chamado **best.pt**. Este é o modelo gerado pelo treinamento.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg"/></div>

- **Passo 8.** Exporte o modelo treinado para TensorFlow Lite

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite
```

- **Passo 9.** Converta o TensorFlow Lite para um arquivo UF2

UF2 é um formato de arquivo desenvolvido pela Microsoft. A Seeed usa esse formato para converter .tflite em .uf2, permitindo que arquivos tflite sejam armazenados nos dispositivos AIoT lançados pela Seeed. Atualmente, os dispositivos da Seeed suportam até 4 modelos, cada modelo (.tflite) com menos de 1M.

Você pode especificar o modelo a ser colocado no índice correspondente com -t.

Por exemplo:

- `-t 1`: índice 1
- `-t 2`: índice 2

```sh
# Place the model to index 1
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

Embora você possa carregar 4 modelos no dispositivo de uma só vez, observe que apenas um modelo pode ser carregado por vez. Isso pode ser especificado pelo usuário e será explicado mais adiante neste wiki.

- **Passo 10.** Agora um arquivo chamado **model-1.uf2** será gerado. Este é o arquivo que vamos carregar no Módulo SenseCAP A1101 para realizar a inferência!

## Verificar versão do BootLoader

- Clique duas vezes no botão BOOT e aguarde até que o drive removível seja montado
- Abra o INFO_UF2.TXT no drive removível

<div align="center"><img width="{600}" src="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/raw/master/assert/q2.png"/></div>

## Atualizar BootLoader

Se o seu SenseCAP A1101 não for reconhecido pelo seu computador e se comportar como se não tivesse número de porta, então talvez você precise atualizar o BootLoader.

- **Passo 1**. Baixe o arquivo `.bin` do BootLoader no PC com Windows.

Baixe a versão mais recente do arquivo BootLoader no link abaixo. O nome do BootLoader é normalmente `tinyuf2-sensecap_vision_ai_vx.x.x.bin`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Este é o firmware que controla o chip BL702 que estabelece a conexão entre o computador e o chip Himax. A versão mais recente do BootLoader agora corrigiu o problema de o Vision AI não ser reconhecido por Mac e Linux.

- **Passo 2**. Baixe e abra o software [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar), selecione **BL702/704/706** e, em seguida, clique em **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **Passo 3**. Clique em **View**, escolha primeiro **MCU**. Vá para **Image file**, clique em **Browse** e selecione o firmware que você acabou de baixar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **Passo 4**. Certifique-se de que não haja outros dispositivos conectados ao PC. Em seguida, mantenha pressionado o botão Boot no módulo e conecte-o ao PC.

- **Passo 5**. Volte ao software BLDevCube no PC, clique em **Refresh** e escolha uma porta adequada. Depois clique em **Open UART** e defina **Chip Erase** como **True**, então clique em **Create&Program** e aguarde o término do processo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

## Recursos

- **[Página Web]** [Documentação do YOLOv5](https://docs.ultralytics.com)

- **[Página Web]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Página Web]** [Documentação do Roboflow](https://docs.roboflow.com)

- **[Página Web]** [Documentação do TensorFlow Lite](https://www.tensorflow.org/lite/guide)

- **[PDF]** [Especificação do Sensor SenseCAP A1101 LoRaWAN Vision AI](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [Guia do Usuário do Sensor SenseCAP A1101 LoRaWAN Vision AI](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [Catálogo de Sensores SenseCAP S210X LoRaWAN](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [FAQ para o Sensor SenseCAP A1101 LoRaWAN Vision AI](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## Suporte Técnico e Discussão de Produtos

 <br />

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
