---
description: Detecção de Capacete de Segurança - Rotulagem de Dados, Treinamento de Modelo de IA, Implantação de Modelo de IA com Edge Impulse em NVIDIA Jetson
title: Primeiros Passos com Edge Impulse
tags:
  - Rotulagem de Dados
  - Treinamento de modelo de IA
  - Implantação de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /HardHat
sku: 110061402,110061483
last_update:
  date: 01/04/2023
  author: Bill
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/HardHat/
---

# Detecção de Capacete de Segurança com Edge Impulse

<iframe width={560} height={315} src="https://www.youtube.com/embed/e5pZdJhoeqM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Introdução

Em ambientes de trabalho como locais industriais ou de construção, um capacete de segurança é obrigatório e essencial para proteger a cabeça das pessoas contra ferimentos causados por objetos que caem, impacto com outros objetos, detritos, chuva e choque elétrico. Ele melhora a segurança, mas às vezes as pessoas subestimam sua importância, tanto individual quanto industrialmente. Assim, um monitor baseado em vídeo para detectar capacetes de segurança pode ser uma solução otimizada para esse problema de segurança.

Portanto, com crédito para Louis Moreau e Mihajlo Raljic, fornecemos este projeto fundamental em que vamos treinar um modelo de Aprendizado de Máquina embarcado para detectar capacetes de segurança e implantá‑lo no **Jetson Nano**. O **Jetson NX** e o **Jetson AGX** também são compatíveis.

<div align="center"><img width="auto" src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonedge.png" /></div>

## Primeiros passos

O Edge Impulse permite que desenvolvedores criem a próxima geração de soluções de dispositivos inteligentes com Aprendizado de Máquina embarcado. O Aprendizado de Máquina na borda possibilitará o uso valioso de 99% dos dados de sensores que hoje são descartados devido a limitações de custo, largura de banda ou energia. Aqui vamos aplicar o Edge Impulse para treinar um modelo de Aprendizado de Máquina embarcado.

### Hardware

**Hardware Necessário**

Neste projeto, os dispositivos necessários são mostrados abaixo:

- NVIDIA Jetson Nano ou [NVIDIA Xavier NX](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) ou [NVIDIA Xavier AGX](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)
- PC
- Câmera com cabo USB
- Tela HDMI

**Configuração de Hardware**

Tanto o PC quanto o NVIDIA Jetson Nano devem estar ligados e conectados à internet. Recomenda‑se configurar o NVIDIA Jetson Nano como um PC.

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsongsa.jpg" /></div>

### Software

- [Edge Impusle](https://www.edgeimpulse.com)
- [Sistema Ubuntu](https://www.linux.org/pages/download/) para NVIDIA Jetson Nano

Aqui vamos treinar um modelo de Aprendizado de Máquina embarcado para detectar capacete de segurança. Há várias maneiras de fazer isso.

### Preparação

Antes de começarmos nosso projeto, há alguns trabalhos de preparação que precisam ser feitos primeiro.

- **Passo 1**. Abra o [site do Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1) e registre uma conta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs.png" /></div>

- **Passo 2**. Clique em "Create new project" e digite o nome do projeto.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png" /></div>

Aqui digitamos "Hard hat detection".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs1.png" /></div>

- **Passo 3**. Vamos treinar um modelo de ML embarcado para detectar capacetes de segurança, portanto aqui a opção "image" deve ser selecionada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2.png" /></div>

- **Passo 4**. Configure a opção como "Classify multiple objects (object detection)".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs3.png" /></div>

Agora podemos começar o projeto.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs4.png" /></div>

## Treinamento do Modelo de ML para Detecção de Capacete de Segurança

### Treinamento de Modelo de ML com Base em Conjunto de Dados Públicos

O Edge Impulse oferece várias maneiras de coletar dados. Primeiro vamos enviar os dados públicos para o site e tentar desenvolver um Aprendizado de Máquina embarcado.

- **Passo 1**. Selecione a página "Data acauistion" na coluna da esquerda e colete dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup.png" /></div>

- **Passo 2**. Escolha e baixe os conjuntos de dados do [Flickr-Faces-HQ Dataset Github](https://github.com/NVlabs/ffhq-dataset).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup1.png" /></div>

Clique no botão "upload data" na página "Data acquisition" e envie os conjuntos de dados baixados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup2.png" /></div>

É opcional enviar dados existentes para o projeto no formato Data Acquisition (CBOR, JSON, CSV), como arquivos WAV, JPG ou PNG.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2b.png" /></div>

- **Passo 3**. Uma vez enviados, os dados coletados são preenchidos com imagens rotuladas. Continue clicando em "Impulse desigh" à esquerda da página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup3.png" /></div>

- **Passo 4**. Escolha o bloco adequado de processamento de imagem e o bloco de aprendizado de imagem e salve o impulso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Passo 5**. Clique em "image" à esquerda da página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configure como "GRB" e clique em "Save Parameters"; a página irá mudar automaticamente para o site "Generate features".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Então podemos gerar as features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Passo 6**. Quando "Job completed" for exibido, clique em "Object detection" à esquerda da página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Clique em "start training" e deixe o Edge Impulse treinar um modelo com base nas features geradas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Passo 7**. Quando "job done" for exibido, clique em "Model testing" para verificar como o modelo funciona.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### Treinamento de Modelo de ML com Base em Conjuntos de Dados Personalizados com Câmera do PC

O Edge Impulse oferece várias maneiras de coletar dados. Aqui vamos personalizar nossas próprias imagens e enviá‑las para o site capturando as fotos pela câmera do PC.

- **Passo 1**. Permaneça na página "Dashboard" e então clique em "LET'S COLLECT SOME DATA".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc.png" /></div>

Há múltiplas opções que podemos escolher para coletar dados; aqui estamos usando nosso computador para proceder.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc1.png" /></div>

- **Passo 2**. Depois de um tempo, a página mostrará que foi conectada ao computador. Clique em "Collecting images?" e depois em "Give access to the camera".

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc2.png" /></div>

- **Passo 3**. Clique em "Capture" para tirar a foto de você mesmo ou de outras pessoas. Os dados da imagem precisam ser rotulados como "Hard Hat" e "Head" na seção. Para rotular rapidamente a imagem, é altamente recomendável finalizar a aquisição de dados de uma categoria antes de passar para a próxima, ou seja, recomenda‑se terminar de capturar as fotos de "Hard Hat" e depois seguir para capturar as fotos de "Head".

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc3a.png" /></div>

As fotos capturadas serão armazenadas automaticamente em "Data acquistion". Para melhor desempenho do modelo de treinamento, é altamente recomendável coletar o máximo de fotos possível e coletar a mesma quantidade de dados em diferentes categorias.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

- **Passo 4**. Clique em "Labeling queue" para rotular os dados circulando a cabeça com um quadrado na imagem.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc5.png" /></div>

Use o mouse para arrastar uma caixa ao redor de um objeto para adicionar um rótulo. Em seguida, clique em Save labels para avançar para o próximo item.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc6.png" /></div>

Defina os rótulos como "Head" e "Hard Hat" e preencha a caixa de diálogo. Certifique‑se de que o quadrado enquadre a área da cabeça das pessoas.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc7.png" /></div>

- **Passo 5**. Quando os dados tiverem sido rotulados, clique em "Save labels" e vá para "Impulse design"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc8a.png" /></div>

- **Passo 6**. Escolha o bloco adequado de processamento de imagem e o bloco de aprendizado de imagem e salve o impulso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Passo 7**. Clique em "image" à esquerda da página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configure como "GRB" e clique em "Save Parameters"; a página irá mudar automaticamente para o site "Generate features".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Em seguida, podemos gerar as features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Passo 8**. Quando "Job completed" for exibido, clique em "Object detection" à esquerda da página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Clique em "start training" e deixe o Edge Impulse treinar um modelo com base nas features geradas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Passo 9**. Quando "job done" for exibido, clique em "Model testing" para verificar como o modelo funciona.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### Treinamento de Modelo de ML com base em Conjuntos de Dados de Câmera NVIDIA Jetson Personalizados

O Edge Impulse fornece várias maneiras de coletar dados. Aqui vamos personalizar nossas próprias imagens e enviá‑las para o site capturando fotos pela câmera conectada ao Nvidia Jetson Nano.

- **Passo 1**. De acordo com o hardware, configure o [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) ou o [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write) para a conexão de monitor externo e teclado. Conecte ao Jetson Nano uma tela.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **Passo 2**. Certifique‑se de que o seu Jetson Nano esteja conectado à Internet e configure o dispositivo no Edge Impulse.

Você pode verificar sua rede com os seguintes comandos:

```cpp
ping -c 3 www.google.com
```

Se a rede estiver funcionando bem, o resultado deverá ser semelhante a:

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

A configuração começa a ser executada com o comando abaixo:

```cpp
edge-impulse-linux
```

Em seguida, o site solicitará a conta do Edge Impulse.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

O conteúdo mostrado como abaixo significa que a conexão está completa. Todos os projetos que salvamos no Edge Impulse podem ser selecionados.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

Estamos capturando fotos, portanto aqui precisamos selecionar nossa USB‑Camera para aplicar no site.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

Nomeie o dispositivo que queremos conectar ao site

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

É possível ver claramente que o dispositivo Jetson Nano agora está conectado ao projeto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **Passo 3**. Volte para a página do Edge Impulse e selecione a coluna "Devices". O Jetson Nano conectado é mostrado como abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano5.png" /></div>

- **Passo 4**. Selecione o dispositivo que conectamos ao Edge Impulse e vá para a página "Data acquisation". Clique em "Capture" para tirar uma foto sua ou de outras pessoas. Os dados de imagem precisam ser rotulados como "Hard Hat" e "Head" na seção. Para rotular rapidamente a imagem, é altamente recomendável concluir a aquisição de dados de uma categoria antes de passar para a próxima, ou seja, é recomendável terminar de capturar as imagens de "Hard Hat" e depois passar a capturar as imagens de "Head".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

As fotos capturadas serão armazenadas automaticamente em "Data acquistion". Para melhor desempenho do modelo de treinamento, é altamente recomendável coletar o máximo de imagens possível e coletar a mesma quantidade de dados em diferentes categorias.

- **Passo 5**. Quando a coleta de dados estiver concluída, vá para "Impulse design"

- **Passo 6**. Escolha o bloco de processamento de imagem adequado e o bloco de aprendizado de imagem e salve o impulse.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Passo 7**. Clique em "image" à esquerda da página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configure como "GRB" e clique em "Save Parameters"; a página será redirecionada automaticamente para o site "Generate features".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Em seguida, podemos gerar as features.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Passo 8**. Quando "Job completed" for exibido, clique em "Object detection" à esquerda da página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Clique em "start training" e deixe o Edge Impulse treinar um modelo com base nas features geradas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Passo 9**. Quando "job done" for exibido, clique em "Model testing" para verificar como o modelo funciona.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

É recomendável combinar os métodos que fornecemos acima e verificar o desempenho de cada modelo para ver qual é melhor.

## Fazer o deploy do modelo de ML no Jetson Nano

Agora vamos fazer o deploy do modelo de ML treinado no Jetson Nano e aplicar os códigos para fazê‑lo funcionar.

### Fazer o deploy do modelo de ML por meio do Edge Impulse Linux CLI

- **Passo 1**. De acordo com o hardware, configure o [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) ou o [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write) para a conexão de monitor externo e teclado. Conecte ao Jetson Nano uma tela.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **Passo 2**. Certifique‑se de que o seu Jetson Nano esteja conectado à Internet e configure o dispositivo no Edge Impulse.

!!!Note Se você já conectou o Jetson Nano ao Edge Impulse na seção "ML Model Training based on Custimized NAVDIA Jetson Camera Datasets", este passo pode ser ignorado.

Você pode verificar sua rede com os seguintes comandos:

```cpp
ping -c 3 www.google.com
```

Se a rede estiver funcionando bem, o resultado deverá ser semelhante a:

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

A configuração começa a ser executada com o comando abaixo:

```cpp
edge-impulse-linux
```

O site solicitará a conta do Edge Impulse.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

O conteúdo mostrado como abaixo significa que a conexão está completa. Todos os projetos que salvamos no Edge Impulse podem ser selecionados.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

Estamos capturando fotos, portanto aqui precisamos selecionar nossa USB‑Camera para aplicar no site.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

Nomeie o dispositivo que queremos conectar ao site

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

É possível ver claramente que o dispositivo Jetson Nano agora está conectado ao projeto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **Passo 3**. Baixe o modelo de ML para o Jetson Nano com o código a seguir.

```cpp
edge-impulse-linux-runner
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy.png" /></div>

A conexão bem‑sucedida é mostrada como abaixo e o modelo será ativado automaticamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy1.png" /></div>

- **Passo 4**. Copie o endereço exibido e abra‑o em um navegador.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy2.png" /></div>

A detecção será exibida no navegador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy3a.png" /></div>

E o resultado dos dados será mostrado como abaixo:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy4.png" /></div>

### Fazer o deploy do modelo de ML por meio do Linux Python SDK

Neste projeto, vamos aplicar o modelo para exibir a detecção de Hard Hat na tela mostrando "No entry" e "Welcome". O Edge Impulse fornece uma biblioteca que possibilita a execução de modelos de ML e a coleta de dados de sensores em máquinas Linux usando Python. O SDK é open source e está hospedado no [GitHub](https://github.com/edgeimpulse/linux-sdk-python). Você também pode tentar a [imagem espelho](https://github.com/Zachay-NAU/Hard-Hat-Detectation) que já configuramos.

- **Passo 1**. Instale a versão mais recente do [Python 3](https://www.python.org/downloads/)(>=3.7) para Linux.

- **Passo 2**. Instale o Linux Python SDK com o seguinte comando:

```cpp
sudo apt-get install libatlas-base-dev libportaudio2 libportaudiocpp0 portaudio19-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk.png" /></div>

```cpp
pip3 install edge_impulse_linux
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk1.png" /></div>

- **Passo 3**. Instale o [Edge Impulse for Linux CLI](https://docs.edgeimpulse.com/docs/edge-impulse-for-linux) com o seguinte comando:

```cpp
sudo apt install python3.7-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk2.png" /></div>

```cpp
wget -q -0 - https://cdn.edgeimpulse.com/firmware/linux/jetson.sh | bash
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk3.png" /></div>

- **Passo 4**. Baixe o modelo de ML para o Jetson Nano com o comando abaixo:

```cpp
edge-impulse-linux-runner --download modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk5.png" /></div>

Se esta for a primeira conexão entre o Jetson Nano e o Edge Impulse, o site solicitará as informações da sua conta Edge Impulse para fazer login.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk4.png" /></div>

!!!Note Isso baixa o arquivo para modelfile.eim, se você quiser alternar de projeto, isso pode ser feito adicionando '--clean'.

- **Passo 5**. Execute o [hardhat_detectation.py](https://files.seeedstudio.com/wiki/2.23jetsonedge/hardhat_detectation.py) para aplicar o modelo de ML com o seguinte comando. O código pode exigir um [arquivo](https://files.seeedstudio.com/wiki/2.23jetsonedge/device_patches.py) externo.

```cpp
python3 hardhat_detectation.py /home/jetson-nano/modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk8.png" /></div>

- **Passo 6**. O resultado deve ser semelhante a estes:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult1.png" /></div>

Ou pode ser uma imagem, implante seu aplicativo de ML para o pipeline de detecção de EPI em 5 minutos? Fique ligado conosco!

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

