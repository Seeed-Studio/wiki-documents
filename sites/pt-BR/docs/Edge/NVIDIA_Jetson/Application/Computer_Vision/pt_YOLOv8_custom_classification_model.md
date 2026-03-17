---
description: Treine e implemente um modelo de classificação personalizado com YOLOv8
title: Treine e implemente um modelo de classificação personalizado com YOLOv8
keywords:
  - yolov8
  - modelo de classificação personalizado
  - modelo de classificação
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /train_and_deploy_a_custom_classification_model_with_yolov8
last_update:
  date: 06/11/2024
  author: Bruno
createdAt: '2024-06-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/train_and_deploy_a_custom_classification_model_with_yolov8/
---


# Treine e implemente um modelo de classificação personalizado com YOLOv8

## Introdução

Neste guia vamos explicar como treinar e implementar um modelo de classificação personalizado com YOLOv8

## Visão geral

Vamos criar um ambiente virtual onde iremos instalar o YOLOv8, baixar um modelo de classificação do roboflow, treiná-lo e implantá-lo.

### Classificação de Imagens

Classificação de imagens é a tarefa mais simples de visão computacional e envolve classificar uma imagem em uma das classes predefinidas.
O que obtemos como saída é um único rótulo de classe e uma pontuação de confiança.

A classificação de imagens é útil quando não precisamos saber a localização do objeto na imagem e só precisamos saber a que classe a imagem pertence.

## Requisitos de Materiais

### Configuração de Hardware

Para este tutorial, vamos precisar de uma Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

### Configuração de Software

- JetPack 6.0 instalado no reComputer
- uma conta Roboflow para baixar o conjunto de dados

## Preparando o reComputer

O reComputer J4012 da Seeed Studio é um Jetson Orin NX 16GB.
É uma máquina poderosa, mas o Tegra Linux vem com muitas coisas e inicializa em modo gráfico. Vamos mudar isso.

:::note
Vou executar os exemplos e programar remotamente usando o VScode e um terminal SSH com X forwarding habilitado.
X forwarding é uma opção do SSH que pode executar alguns aplicativos gráficos do nosso lado da conexão, em vez do computador remoto.
:::

Se você vai se conectar ao seu reComputer com monitor, teclado e mouse, pule a próxima etapa.

### Alterar modo de boot

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/1_image.png" />
</div>
Está tudo bem, mas não vamos precisar de gráficos e, em modo ocioso, está consumindo cerca de 1.5GB de memória.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/2_image.png" />
</div>

Vamos fazer com que ele inicie na linha de comando.

```bash
sudo systemctl set-default multi-user
```

A partir de agora, nosso reComputer, ao inicializar, irá iniciar no CLI.
Se quiser, você pode reiniciar agora ou podemos apenas ir para o CLI com um comando.

```bash
sudo systemctl isolate multi-user
```

Agora passamos de usar 1.5GB de memória para 700MB. Cada byte de memória conta quando usamos Machine Learning.

### Alterar modo de energia

Por padrão, nosso reComputer deve estar rodando no nível 2 - 15W .
Ao treinar, ou mesmo ao fazer inferência de um modelo de ML, se pudermos rodar em potência máxima, deve ser melhor.

Vamos aprender como mudar isso.

No arquivo /etc/nvpmodel.conf, temos os modos de energia disponíveis.

```bash
< POWER_MODEL ID=0 NAME=MAXN >
< POWER_MODEL ID=1 NAME=10W >
< POWER_MODEL ID=2 NAME=15W >
< POWER_MODEL ID=3 NAME=25W >
```

Podemos então usar *sudo nvpmodel -m `<power model number>`* para alterar o modo de energia. E, de acordo com [este post do fórum](https://forums.developer.nvidia.com/t/power-mode-in-terminal/287224), as configurações são mantidas mesmo após reinicializações.
Para ver em qual nível de energia estamos agora,

```bash
sudo nvpmodel -q
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/3_image.png" />
</div>

Vamos selecionar o modo de potência máxima para o treinamento do nosso modelo

```bash
sudo nvpmodel -m 0
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/4_image.png" />
</div>

Após uma reinicialização, podemos confirmar que estamos rodando em potência máxima

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/5_image.png" />
</div>

## Treinando o modelo

Para o treinamento do modelo, vamos usar YOLOv8. Abaixo estão os passos necessários para instalá-lo com suporte a CUDA.
Também vamos precisar de uma conta [roboflow](https://roboflow.com/).

### O modelo

Vou criar um modelo para classificar pássaros.
Isto é parte de um projeto de um Comedouro Inteligente para Pássaros que vou colocar no meu jardim e quero saber quais são os pássaros que estão se alimentando ali.

Como esta é uma tarefa de classificação, não precisamos saber a posição do pássaro na foto.

Você pode usar outro conjunto de dados de sua escolha, desde que seja um conjunto de dados ou modelo de Classificação

Eu obtive 12 classes de pássaros que sei que vivem na minha região e são comuns perto de mim e criei um [conjunto de dados de classificação](https://universe.roboflow.com/bruno-santos-omqsq/bird-classification-19z7c/dataset/1) no Roboflow.

As classes de pássaros que vou tentar identificar são:

- Andorinha-das-palhas (Barn Swallow)
- Estrelinha-de-cabeça-listada (Common Firecrest)
- Rouxinol-comum (Common Nightingale)
- Tentilhão-comum (Eurasian Chaffinch)
- Andorinhão-das-rochas (Eurasian Crag Martin)
- Pintassilgo-europeu (European Goldfinch)
- Verdilhão-europeu (European Greenfinch)
- Verdilhão-serim (European Serin)
- Pardal-doméstico (House Sparrow)
- Pardal-espanhol (Spanish Sparrow)
- Andorinha-das-chaminés-ocidental (Western House Martin)
- Lavadeira-branca (white Wagtail)

Escolha seu conjunto de dados e faça o download a partir do roboflow.
Depois de selecionar seu conjunto de dados, selecione "Download Dataset". - Você precisa de uma conta para isso.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/7_image.png" />
</div>

Em seguida, selecione *Folder Structure* em Format e selecione *show download code*.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/8_image.png" />
</div>

Depois, selecione *Jupyter* se você for usar um Jupyter Notebook ou *Terminal* se estiver planejando fazer isso no terminal.

Eu selecionei Jupyter, para usar isso em um notebook Jupyter. Copie o código.
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/9_image.png" />
</div>

## Criando o ambiente

Vamos criar um ambiente virtual, instalar o PyTorch e instalar o YOLOv8.
[Per YOLOv8 documentation tip](https://docs.ultralytics.com/quickstart/#install-ultralytics), é melhor instalar o PyTorch primeiro e depois o ultralytics.

Além disso, estou instalando pacotes jupyterlab para usar com o VSCode. O notebook está anexado a este tutorial.

Vamos instalar algumas dependências primeiro.

**NOTA:** Como vamos usar YOLOv8, precisamos fazer alguns passos que normalmente não precisaríamos.

Apenas instalar o Torch seguindo a [documentação de deep learning da NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html) é suficiente para ter o Torch com suporte a CUDA.

Se instalarmos o PyTorch normalmente com PIP, ele não terá suporte a CUDA.

### Dependências

```bash
sudo apt install libopenblas-dev cuda-toolkit libcudnn8 tensorrt python3-libnvinfer nvidia-l4t-dla-compiler
```

Crie o ambiente virtual Python

```bash
python -m venv birdClassificationModel
```

Se você obtiver um erro, é porque o pacote python3-venv não está instalado. Vamos instalá-lo e repetir o comando acima.

```bash
sudo apt install python3-venv
```

Ative o ambiente virtual

```bash
source birdClassificationModel/bin/activate
```

Você pode confirmar que ele está ativo porque o nome dele é colocado antes do seu prompt.

### YOLOv8

Antes, e para [seguir a dica da documentação](https://docs.ultralytics.com/quickstart/#conda-docker-image), vamos primeiro instalar o PyTorch.

Estou usando JetPack 6.0, que vem com NVIDIA Jetson Linux 36.3 e CUDA 12.2.
Vamos atualizar o PIP primeiro

```bash
pip install -U pip
```

Para instalar o Torch para poder usá-lo com YOLOv8, precisamos [seguir os passos nos fóruns da NVIDIA](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048).

Isso será feito com o ambiente virtual ativo, para que seja instalado nele.
Baixe a versão 2.3 do Torch da NVIDIA

```bash
wget https://nvidia.box.com/shared/static/mp164asf3sceb570wvjsrezk1p4ftj8t.whl -O torch-2.3.0-cp310-cp310-linux_aarch64.whl
sudo apt-get install python3-pip libopenblas-base libopenmpi-dev libomp-dev
pip3 install 'Cython<3'
pip install numpy torch-2.3.0-cp310-cp310-linux_aarch64.whl
```

Depois disso, vamos compilar o torchvision. Se o instalarmos pelos wheels, ele não terá suporte a CUDA.

A versão do branch é para a versão do Torch instalada. Você pode ver mais detalhes na página do fórum.

Lembre-se, você precisa ter o ambiente virtual ativo para que tudo isso seja instalado nele.

```bash
sudo apt-get install libjpeg-dev zlib1g-dev libpython3-dev libopenblas-dev libavcodec-dev libavformat-dev libswscale-dev
git clone --branch v0.18.0 https://github.com/pytorch/vision torchvision
cd torchvision/
export BUILD_VERSION=0.18.0
python setup.py install
```

Depois de um tempo, ele será compilado e instalado.
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/10_image.png" />
</div>
Depois de instalar, vamos ver se o Cuda está disponível.
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/11_image.png" />
</div>

Pela linha de comando

```bash
python -c "import torch;print (torch.cuda.is_available())"
```

Isso deve retornar True

#### Instalar YOLOv8

Agora que temos o PyTorch instalado com suporte a CUDA, quando instalarmos o YOLOv8, ele usará a versão instalada em vez de tentar instalar um novo pacote (embora seja a mesma versão) sem o suporte a CUDA.

```bash
pip install ultralytics
```

Vamos instalar o roboflow e o jupyterlab

```bash
pip install roboflow jupyterlab
```

Agora, vamos baixar o dataset.
Se você estiver usando o notebook, apenas substitua o código lá.

```python
rf = Roboflow(api_key="<your_api_key>")
project = rf.workspace("bruno-santos-omqsq").project("bird-classification-19z7c")
version = project.version(1)
dataset = version.download("folder")
```

Depois de baixar o modelo, agora temos um conjunto de três diretórios (test, train, valid), cada um com um certo número de imagens de cada classe. Cada imagem de cada classe está no seu próprio diretório.
Como isto é para classificação de imagens, não precisamos rotular as imagens.
O YOLOv8 saberá as classes, não apenas a partir do arquivo de configuração que vamos criar depois, mas também a partir dos diretórios.
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/12_image.png" />
</div>

### Treinar

Normalmente um dataset tem as imagens e os rótulos (ou anotações) com as coordenadas do objeto. Como esta é uma tarefa de classificação, não precisamos de nada disso. Apenas que as imagens estejam em cada diretório que é o nome da classe.

#### Preparando o arquivo de configuração

Ainda precisamos de um arquivo de configuração para o YOLOv8 reconhecer as classes.  
Este arquivo deve ser colocado dentro do diretório do dataset, com extensão .yaml. O nome não é importante.

```bash
cd <dataset_directory>
vi birdClassificationModel.yaml
```

Insira o seguinte texto no arquivo

```bash
train: train/
valid: valid/
test: test/

# number of classes
nc: 12

# class names

names: ["Barn Swallow","Common Firecrest","Common Nightingale","Eurasian Chaffinch","Eurasian Crag Martin","European Goldfinch","European Greenfinch","European Serin","House Sparrow","Spanish Sparrow","Western House Martin","white Wagtail"]
```

Para a classificação, vamos usar um dos [modelos pré‑treinados já disponíveis da Ultralytics](https://docs.ultralytics.com/tasks/classify/).

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/13_image.png" />
</div>

Esses modelos foram treinados no ImageNet e são ajustados para classificação.
 Vamos usá‑lo e treiná‑lo com nossos dados.

Isto é o que é conhecido como [transfer learning](https://neptune.ai/blog/transfer-learning-guide-examples-for-images-and-text-in-keras).

Vou usar o modelo [YOLOv8l-cls](https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8l-cls.pt). Provavelmente outros também funcionarão bem, mas como não precisamos de tempo real, é um compromisso entre velocidade e precisão.

Então vamos treinar o modelo, usando a interface de linha de comando (CLI) do YOLOv8

```bash
yolo task=classify mode=train model=yolov8l-cls.pt data=Bird-Classification-1 epochs=100
```

- task=classify : Vamos classificar imagens
- mode=train : Estamos treinando o modelo
- model=yolov8l-cls.pt : Estamos usando um modelo pré‑treinado em classificação
- data=Bird-Classification-1 : o diretório onde nosso dataset está localizado
- epochs=100 : por quanto tempo estamos treinando o modelo.

Agora que está executando, aqui estão algumas estatísticas usando jtop (tegra-stats)

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/14_image.png" />
</div>
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/15_image.png" />
</div>
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/16_image.png" />
</div>

Depois de algumas horas, o treinamento é concluído.
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/17_image.png" />
</div>

Agora, vamos ver como o modelo se comporta. Vamos testá‑lo.

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=Bird-Classification-1/test/**/*.jpg
```

Isto fará o yolo entrar nos diretórios de teste e tentar prever cada
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/18_image.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/19_image.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/20_image.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/21_image.png" />
</div>

Os resultados estão todos corretos. Vamos tentar com duas imagens que ele nunca viu.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/22_image.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/23_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=house_sparrow.jpg
```

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/24_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=white_wagtail.jpg
```

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/25_image.png" />
</div>

Vou dizer que esses resultados estão ótimos

## Exportando o modelo

Podemos usar o modelo como está para a inferência, só precisamos abri‑lo e usá‑lo.
Para tempos de inferência mais rápidos podemos exportá‑lo para TensorRT, já que estamos em um NVIDIA Jetson Orin NX, ou mesmo ONNX, por exemplo.

Não é que precisemos de tempos de inferência mais rápidos para este projeto - não vou usar isso em vídeo em tempo real - mas é legal podermos tirar proveito da plataforma em que estamos.

Infelizmente, devido ao ambiente virtual, não consegui exportá‑lo para TensorRT. Por alguma razão, não consegui importar o tensorrt em Python, mas fora do ambiente virtual, não tive problema com as bibliotecas tensorrt.

### ONNX

Podemos exportar o modelo para o formato ONNX assim

```bash
yolo export model='./runs/classify/train6/weights/best.pt' format=onnx imgsz=640
```

Obtemos um best.onnx que podemos usar para executar inferência.

Para executar inferência usando ONNX, precisamos instalar o wheel onnxruntime_gpu.

Para instalar o onnxruntime-gpu com o JetPack 6.0, precisamos baixá‑lo do [Jetson Zoo](https://elinux.org/Jetson_Zoo#ONNX_Runtime).

Vamos baixar o onnxruntime_gpu 1.18.0

Baixe o wheel do pip para nossa versão do Python (Python-3.10)

```bash
wget https://nvidia.box.com/shared/static/48dtuob7meiw6ebgfsfqakc9vse62sg4.whl -O onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```

e então, instale‑o

```bash
pip install onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```

## Inferência

### foto

Usei o seguinte código para executar inferência com o modelo best.pt e ver os resultados

```python
# running inference
from ultralytics import YOLO
# load the  model
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
#run inference
results = bird_model("house_sparrow.jpg")[0]
# get class names
class_names = results.names
# get top class with more probability
top1 = results.probs.top1
# print the class name with the highest probability
print (f" The detected bird is: {class_names[top1]}")
```

O que o código acima faz é carregar o modelo, executar inferência em uma imagem e salvar os resultados na variável results.

Como results é um objeto [ultralytics.engine.results.Results](http://ultralytics.engine.results.results/) do tipo lista com um item, que é uma instância de Results. O [0] na variável results para manter o resultado da inferência nos permitirá chegar aos resultados que queremos.

```python
results = bird_model("house_sparrow.jpg")[0]
```

Em seguida, usamos os resultados para obter os nomes das classes. Não que não os conheçamos, mas assim permitirá que este código funcione em outros modelos também.

```python
class_names = results.names
```

Um dos resultados é uma variável top1 que guarda a classe TOP 1 com mais probabilidades. Esse TOP1 é dado pela lista probs.

```python
top1 = results.probs.top1
```

Em seguida, imprimimos a classe com a probabilidade mais alta, que deve ser a espécie do pássaro.

```python
print (f" The detected bird is: {class_names[top1]}")
The detected bird is: House Sparrow
```

### Câmera

Agora, vamos usar uma câmera para executar inferência.

O Jetson pode usar uma câmera USB ou uma câmera RPI. Vou conectar uma câmera USB.

O código a seguir verificará se é possível exibir um feed da câmera.

```python
#Lets test if we can use a USB camera
import cv2
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

Sou eu, no meu computador desktop. Basta usar *ssh -X username@jetson_ip* e a janela X11 será encaminhada para o seu desktop. Isso funciona porque também estou usando Linux. Acho que o WSL também poderia funcionar.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/26_image.png" />
</div>

Agora, vamos tentar executar inferência em um feed de vídeo, exibindo a classe com a maior probabilidade

Aqui está o código

```python
# again, save this code in a file a run it from the Jetson

import cv2
from ultralytics import YOLO
import time
#define confidence level
#only equal or above this level we say it's a class of bird
confidence = 0.95
# time when processed last frame
prev_frame = 0
# time processed current frame
cur_time = 0
# load the  model
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
# cv2 font
font = cv2.FONT_HERSHEY_SIMPLEX
# open camera
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    # to display fps
    cur_frame = time.time()
    fps = 1 / (cur_frame - prev_frame)
    prev_frame = cur_frame
    fps = int(fps)
    fps = str(fps)
    cv2.putText (img, fps, (550,50), font, 1, (124,10,120), 2, cv2.LINE_AA)

    # inference current frame
    results = bird_model(img, verbose=False)[0]
    # get class names
    class_names = results.names
    # get top class with more probability
    top1 = results.probs.top1
    top1conf = results.probs.top1conf.tolist()
    # we will only show the class name if the confidence is higher than defined level
    # print the class name with the highest probability
    if (top1conf >= confidence):
        bird_class = class_names[top1]
        print (f" The detected bird is: {class_names[top1]}")
        # color is in BGR
        confid = round(top1conf,2)
        img = cv2.putText(img, bird_class, (50,50), font, 0.9, (0, 0, 255), 2, cv2.LINE_AA)
        img = cv2.putText(img, "Conf: " + str(confid), (50,80), font, 0.6, (255, 0, 255), 1, cv2.LINE_AA)
        cv2.imshow('Camera', img)
    else:
        img = cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

<!-- este vídeo também está nos arquivos -->
Aqui está um vídeo mostrando a inferência em um fluxo de vídeo
<!-- <div class="table-center">
<iframe src="https://youtu.be/ovoSMaoA9As" frameBorder={0} />
</div> -->

<iframe width={560} height={315} src="https://www.youtube.com/embed/ovoSMaoA9As?si=-d2buntx0T5oRtr4" title="Reprodutor de vídeo do YouTube" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

## ✨ Projeto de Colaborador

- Este projeto é apoiado pelo Seeed Studio Contributor Project.
- Obrigado pelos **esforços do Bruno** e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
