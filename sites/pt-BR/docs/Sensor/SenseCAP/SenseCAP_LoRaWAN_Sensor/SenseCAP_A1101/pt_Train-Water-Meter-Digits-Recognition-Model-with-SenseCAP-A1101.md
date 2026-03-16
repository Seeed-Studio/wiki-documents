---
description: Treinar modelo de reconhecimento de dígitos de hidrômetro com SenseCAP A1101
title: Treinar modelo de reconhecimento de dígitos de hidrômetro com SenseCAP A1101
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101
sku: 101990962
date: 11/26/2025
author: Twelve
createdAt: '2023-06-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101/
---

# Treinar modelo de reconhecimento de dígitos de hidrômetro com SenseCAP A1101

## Visão geral

Neste wiki, vamos ensinar como treinar seu próprio modelo de medidor para a sua aplicação específica e depois implantá‑lo facilmente no SenseCAP A1101. Vamos começar!
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"/></div>

## Preparação de hardware

- [SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)
- Cabo USB Type-C
- Windows/ Linux/ Mac com acesso à internet

## Preparação de software

Usaremos as seguintes tecnologias de software neste wiki

- [Roboflow](https://roboflow.com) - para anotação
- [SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) - para treinamento
- [TensorFlow Lite](https://www.tensorflow.org/lite) - para inferência

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"/></div>

Agora vamos configurar o software. A configuração de software para Windows, Linux e Intel Mac será a mesma, enquanto para Mac M1/M2 será diferente.

:::tip
**What is SenseCraft Model Assistant?**Seeed Studio SenseCraft Model Assistant é um projeto de código aberto focado em IA embarcada. Otimizamos excelentes algoritmos do OpenMMLab para cenários do mundo real e tornamos a implementação mais amigável, alcançando inferência mais rápida e precisa em dispositivos embarcados.
:::

### Windows, Linux, Intel Mac

- **Passo 1.** Certifique‑se de que o Python já está instalado no computador. Caso não esteja, visite [esta página](https://www.python.org/downloads/) para baixar e instalar a versão mais recente do Python

- **Passo 2.** Instale a seguinte dependência

```sh
pip3 install libusb1
```

### Mac M1/ M2

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
Você precisa se certificar de que a versão do seu BootLoader é maior que 2.0.0 antes de poder alterar o firmware para fazer o seguinte. Se não tiver certeza, verifique a versão do BootLoader seguindo as etapas mencionadas nesta [seção](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101/#verificar-versão-do-bootloader), e se a versão for menor que 2.0.0, atualize o BootLoader seguindo as etapas mencionadas nesta [seção](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101/#atualizar-bootloader)
:::

## 1. Coletar dados de imagem

- **Passo 1.** Conecte o SenseCAP A1101 ao PC usando o cabo USB Type‑C

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Passo 2.** Clique duas vezes no botão de boot para entrar no **modo boot**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Depois disso, você verá um novo drive de armazenamento exibido no explorador de arquivos como **SENSECAP**

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Passo 3.** Arraste e solte [este arquivo .uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) no drive **SENSECAP**

Assim que o uf2 terminar de ser copiado para o drive, o drive desaparecerá. Isso significa que o uf2 foi carregado com sucesso no módulo.

- **Passo 4.** Copie e cole [este script em Python](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) dentro de um arquivo recém‑criado chamado **capture_images_script.py** no seu PC

- **Passo 5.** Execute o script em Python para começar a capturar imagens

```sh
python3 capture_images_script.py
```

Por padrão, ele capturará uma imagem a cada 300ms. Se você quiser mudar isso, pode executar o script neste formato

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

Por exemplo, para capturar uma imagem a cada segundo

```sh
python3 capture_images_script.py --interval 1000
```

Depois que o script acima for executado, o SenseCAP A1101 começará a capturar imagens continuamente das câmeras integradas e salvará todas elas em uma pasta chamada **save_img**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"/></div>

Além disso, ele abrirá uma janela de pré‑visualização enquanto estiver gravando.

Depois que você tiver capturado imagens suficientes, clique na janela do terminal e pressione as seguintes combinações de teclas para parar o processo de captura

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### Alterar o firmware do dispositivo após a coleta de imagens

Depois de terminar de gravar imagens para o conjunto de dados, você precisa garantir que o firmware dentro do SenseCAP A1101 seja alterado de volta para o original, para que você possa novamente carregar modelos de detecção de objetos para detecção. Vamos ver agora as etapas.

- **Passo 1.** Entre no **modo Boot** no SenseCAP A1101 conforme explicado anteriormente

- **Passo 2.** Arraste e solte [este arquivo .uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) no drive **SENSECAP** de acordo com o seu dispositivo

Assim que o uf2 terminar de ser copiado para o drive, o drive desaparecerá. Isso significa que o uf2 foi carregado com sucesso no módulo.

## 2. Gerar dataset com o RoboFlow

[Roboflow](https://roboflow.com) é uma ferramenta de anotação baseada na web. Aqui podemos importar diretamente as gravações de vídeo que fizemos para o Roboflow e elas serão exportadas em uma série de imagens. Esta ferramenta é muito conveniente porque nos ajudará a distribuir o conjunto de dados em "treinamento, validação e teste". Além disso, essa ferramenta nos permitirá adicionar processamento adicional a essas imagens após rotulá‑las. Além disso, ela pode exportar facilmente o conjunto de dados rotulado no **formato COCO**, que é exatamente o que precisamos!

- **Passo 1.** Clique [aqui](https://app.roboflow.com/login) para se inscrever em uma conta Roboflow

- **Passo 2.** Clique em **Create New Project** para iniciar nosso projeto

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **Passo 3.** Preencha o **Project Name**, mantenha o **License (CC BY 4.0)** e **Project type (Object Detection (Bounding Box))** como padrão. Em **What will your model predict?**, preencha um nome de grupo de anotação.

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"/></div>

- **Passo 4.** Arraste e solte as imagens que você capturou usando o SenseCAP A1101

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"/></div>

- **Passo 5.** Depois que as imagens forem processadas, clique em **Finish Uploading**. Aguarde pacientemente até que as imagens sejam enviadas.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **Passo 6.** Depois que as imagens forem enviadas, clique em **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **Passo 7.** Selecione uma imagem, desenhe uma caixa retangular ao redor dos dígitos, escolha o rótulo como **digits** e pressione **ENTER**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"/></div>

- **Passo 8.** Repita o mesmo para as imagens restantes

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"/></div>

- **Passo 9.** Continue a anotar todas as imagens no conjunto de dados

- **Passo 10.** Quando a rotulagem terminar, clique em **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **Passo 11.** Em seguida, dividiremos as imagens entre "Train, Valid e Test". Se houver mais dados, pode ser 80/20. Se houver menos dados, pode ser 85/15. Observe que o 'Train' não deve ser menor que 80.

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"/></div>

- **Passo 12.** Clique em **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **Passo 13.** Agora você pode adicionar **Preprocessing** e **Augmentation** se preferir. Aqui nós **alteraremos** a opção **Resize** para **192x192**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"/></div>

Aqui alteramos o tamanho da imagem para 192x192 porque usaremos esse tamanho para o treinamento e o treinamento será mais rápido. Caso contrário, seria necessário converter todas as imagens para 192x192 durante o processo de treinamento, o que consome mais recursos de CPU e torna o treinamento mais lento.

- **Passo 14.** Em seguida, prossiga com os demais padrões e clique em **Generate**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"/></div>

- **Passo 15.** Clique em **Export**, selecione **Format** como **COCO**, selecione **show download code** e clique em **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"/></div>

Isso gerará um trecho de código que usaremos posteriormente no treinamento no Google Colab. Portanto, mantenha esta janela aberta em segundo plano.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Treinar usando o SenseCraft Model Assistant no Google Colab

Depois de termos escolhido um conjunto de dados público, precisamos treinar o conjunto de dados. Aqui usamos um ambiente Google Colaboratory para realizar o treinamento na nuvem. Além disso, usamos a API do Roboflow dentro do Colab para baixar facilmente nosso conjunto de dados.

Clique [aqui](https://github.com/Seeed-Studio/yolov5-swift/blob/master/notebooks/Google_Colab_Digital_Meter_Example.ipynb) para abrir um workspace do Google Colab já preparado, siga as etapas mencionadas no workspace e execute as células de código uma a uma.

**Nota:** No Google Colab, na célula de código em **Step 4**, você pode copiar diretamente o trecho de código do Roboflow conforme mencionado acima

Ele irá guiá-lo através do seguinte:

- Configurar um ambiente para treinamento
- Fazer download de um dataset
- Executar o treinamento
- Fazer download do modelo treinado

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"/></div>

## 3. Implantar o modelo treinado e realizar inferência

Agora vamos mover o **model-1.uf2** que obtivemos ao final do treinamento para o SenseCAP A1101.

- **Step 1.** Instale a versão mais recente do [Google Chrome](https://www.google.com/chrome) ou do [navegador Microsoft Edge](https://www.microsoft.com/en-us/edge?r=1) e abra-o

- **Step 2.** Conecte o SenseCAP A1101 ao seu PC por meio de um cabo USB Type-C

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Step 3.** Dê um clique duplo no botão de boot no SenseCAP A1101 para entrar no modo de armazenamento em massa

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Depois disso, você verá um novo dispositivo de armazenamento exibido no explorador de arquivos como **SENSECAP**  

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Step 4.** Arraste e solte o arquivo **model-1.uf2** na unidade **SENSECAP**

Assim que o uf2 terminar de copiar para a unidade, a unidade desaparecerá. Isso significa que o uf2 foi enviado com sucesso para o módulo.

**Nota:** Se você tiver 4 arquivos de modelo prontos, pode arrastar e soltar cada modelo um por um. Solte o primeiro modelo, aguarde até que termine a cópia, entre novamente no modo de boot, solte o segundo modelo e assim por diante. Se você tiver carregado apenas um modelo (com índice 1) no SenseCAP A1101, ele carregará esse modelo.

- **Step 5.** [Clique aqui](https://vision-ai-demo.seeed.cn/) para abrir uma janela de pré-visualização do stream da câmera

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **Step 6.** Clique no botão **Connect**. Em seguida, você verá um pop-up no navegador. Selecione **SenseCAP Vision AI - Paired** e clique em **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **Step 7.** Veja os resultados de inferência em tempo real usando a janela de pré-visualização!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"/></div>

Como você pode ver acima, os números estão sendo detectados com caixas delimitadoras ao redor deles.

## 4. Realizar inferência com o SenseCAP A1101 no SenseCAP Mate

Além de realizar inferência no navegador, também podemos usar o SenseCAP Mate para implementar a inferência do modelo, o que faremos passo a passo.

- **Step 1.**  Primeiro, precisamos apagar o firmware do A1101, o que pode ser feito usando o erase_model.uf2. Em seguida, atualize o firmware do A1101 para a versão mais recente e solte o modelo de reconhecimento de dígitos do hidrômetro no A1101

  *Firmware*: [erase_model.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/erase_model.uf2)、[SenseCAP-A1101_v02-00.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/sensecap_ai_v02-00.uf2)

  *Model*: [water_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_water_pre_6.uf2)、[pfld_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/pfld_meter_pre_5.uf2)、[digital_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_seg7_pre_6.uf2)

  ***Nota:*** water_meter e digital_meter identificam ambos o nome do modelo como user-define6 no desktop e exibem digital_meter no lado do APP. O nome de modelo identificado por pfld_meter é user-define5, e Point_meter é exibido no lado do APP. Os usuários precisam enviar os modelos de acordo com seus requisitos reais de uso durante o processo de implantação

- **Step 2.**  [Clique aqui](https://vision-ai-demo.seeed.cn/) para abrir uma janela de pré-visualização do stream da câmera

- **Step 3.**  Clique no botão **Connect**. Em seguida, você verá um pop-up no navegador. Selecione **SenseCAP A1101** - Paired e clique em Connect

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step3.jpg"/></div>

- **Step 4(Optional).** Selecione Digital Meter em Model e Digital Meter em Algorithm, clique em Save e depois clique em Invoke. E agora podemos ver os resultados de inferência em tempo real usando a janela de pré-visualização.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step4.jpg"/></div>

- **Step 5.** Abra o SenseCAP Mate e faça o pareamento com o seu próprio A1101, selecione o mesmo Model e Algorithm de antes. Em seguida, clique em General e clique em Detect na parte inferior.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step_all.jpg"/></div>

- **Step 6.** Como você pode ver abaixo, o AI Preview mostra os resultados de reconhecimento do medidor digital.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step5.jpg"/></div>

Após concluir as etapas acima, tentaremos adicionar nosso próprio A1101 ao dispositivo. Através das 4 etapas a seguir, podemos visualizar os dados de resultado da identificação do dispositivo a qualquer hora e em qualquer lugar por meio de uma plataforma em nuvem como o SenseCAP Mate.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4stepfinal.png"/></div>

## Recursos

- **[Web Page]** [Documentação do SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)

- **[Web Page]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Web Page]** [Documentação do Roboflow](https://docs.roboflow.com)

- **[Web Page]** [Documentação do TensorFlow Lite](https://www.tensorflow.org/lite/guide)

- **[PDF]** [Especificações do Sensor SenseCAP A1101 LoRaWAN Vision AI](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [Guia do Usuário do Sensor SenseCAP A1101 LoRaWAN Vision AI](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [Catálogo de Sensores SenseCAP S210X LoRaWAN](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [FAQ para o Sensor SenseCAP A1101 LoRaWAN Vision AI](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## Suporte Técnico e Discussão de Produto

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
