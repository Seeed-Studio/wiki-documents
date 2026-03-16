---
description: Introdução ao TensorFlow Lite
title: Introdução ao TensorFlow Lite
keywords:
  - Borda
  - Aplicativo reTerminal
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_ML_TFLite
sku: 102110638, 110070048
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_ML_TFLite/
---


# Primeiros Passos com TensorFlow Lite no reTerminal

<p align="center">
  <img alt="Light" src="https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png" width="45%"/>
&nbsp; &nbsp;
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%"/>
</p>

TensorFlow Lite é um conjunto de ferramentas que viabiliza aprendizado de máquina no dispositivo, ajudando desenvolvedores a executar seus modelos em dispositivos móveis, embarcados e de IoT.
Os principais recursos do TensorFlow Lite são otimizados para aprendizado de máquina no dispositivo, com foco em latência, privacidade, conectividade, tamanho e consumo de energia. O framework é criado para oferecer suporte a várias plataformas, incluindo dispositivos Android e iOS, Linux embarcado e microcontroladores. Ele também possui suporte integrado para diversos idiomas, como Java, Swift, Objective-C, C++ e Python, e tem alto desempenho com aceleração de hardware e otimização de modelo. Ele fornece exemplos ponta a ponta para tarefas comuns de aprendizado de máquina, como classificação de imagens, detecção de objetos, estimativa de pose, resposta a perguntas e classificação de texto, em várias plataformas.

## Instalação do Pacote TensorFlow Lite Runtime

O pacote tflite_runtime é um pacote Python menor e simplificado que inclui apenas o código mínimo necessário para executar inferência com TensorFlow Lite. Esse pacote é ideal quando tudo o que você quer fazer é executar modelos .tflite e evitar desperdiçar espaço em disco com a grande biblioteca TensorFlow.

Para melhor desempenho, recomenda-se usar um sistema operacional 64 bits e o pacote TFLite correspondente, com o delegate XNNPACK otimizado habilitado. Eles podem ser compilados a partir do código-fonte por você mesmo ou instalados com binários pré-compilados fornecidos pela Seeed studio. Como alternativa, você pode instalar a versão estável mais recente com pip

#### Versão estável mais recente (compilações oficiais)

```
pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime

```

#### Pacote otimizado para desempenho para SO 64 bits com XNNPACK habilitado

No momento da escrita deste artigo, não havia rodas oficiais pré-compiladas para Python 3.7 SO 64 bits com otimizações XNNPACK disponíveis, então nós as compilamos e compartilhamos nós mesmos.

```
wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
pip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
```

Depois que a instalação for concluída, tente importar o pacote tflite:

```
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tflite_runtime
>>> tflite_runtime.__version__
'2.6.0'
```

## Exemplos

É possível usar o TFLite Converter para converter qualquer modelo Tensorflow para o formato .tflite, desde que ele consista apenas em operações suportadas pelo TFLite Runtime. A seguir está a lista de demonstrações atualmente testadas no reTerminal, que será expandida e completada no futuro:

### Detecção de Objetos

![Detecção de Veículos](https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg)

Demo: Detecção de Veículos
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_multi_stage.ipynb)
[Example scripts](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/detector)

- alfa 0.25 224x224 66.7 FPS (15 ms.)
- alfa 0.5 224x224 40 FPS (25 ms.)
- alfa 0.75 320x320 14.9 FPS (67 ms.)
- alfa 1.0 320x320 10.4 FPS (96 ms.)

### Classificação de Imagens

![Esteira Industrial](https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png)

Demo: Identificação de Rasgos em Esteira Industrial
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_conveyor_belt_rip_recognition.ipynb)
[Example scripts](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)

### Segmentação Semântica

![Segmentação de Pulmão](https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png)

Demo: Segmentação de Pulmão
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_lung_segmentation.ipynb)
[Example scripts](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/segnet)

### Reconhecimento de Idade/Gênero de Rosto

![Reconhecimento de Idade e Gênero](https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif)

Demo: Inferência em múltiplos estágios: MobileNet YOLOv3 alfa 0.25 -> MobileFaceNet
[Github repository](https://github.com/AIWintermuteAI/edge_ml_age_gender_recognition/tree/master)
[Example scripts](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_age_gender)
~16-20 FPS (com [ARM NN](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_age-gender))

### Reconhecimento de Expressão Facial

![Reconhecimento de Emoções](https://files.seeedstudio.com/ml/emotion/emotions.gif)

Demo: Inferência em múltiplos estágios: MobileNet YOLOv3 alfa 0.25 -> MobileFaceNet
[Github repository](https://github.com/AIWintermuteAI/edge_ml_emotion_recognition/tree/master)
[Example scripts](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_emotion)
~11 FPS

### Anti-spoofing Facial

![Anti-spoofing Facial](https://files.seeedstudio.com/ml/face_anti-spoofing/face_anti-spoofing.gif)

Demo: Inferência em múltiplos estágios: MobileNet YOLOv3 alfa 0.25 -> MobileNet v1 alfa 0.25
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_anti_spoofing.ipynb)
[Example scripts](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)
~23 FPS (ARM NN)

### Reconhecimento Facial

![Reconhecimento Facial](https://files.seeedstudio.com/wiki/reTerminal_ML/face_recognition.gif)

Demo: Inferência em múltiplos estágios: Detector de Rosto Ultra Leve com Detecção de Pontos de Referência -> MobileFaceNet
[Jupyter Notebook](#)
[Example scripts](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_recognition)
~15 FPS (ARM NN)

## Otimização adicional

Os FPS e resultados de inferência na tabela de Exemplos são fornecidos para inferência de modelos quantizados em INT8 no Tensorflow Lite, salvo indicação em contrário. <br />
Como o reTerminal é baseado em Raspberry Pi 4, ele não possui aceleradores de hardware adicionais para inferência de redes neurais, portanto, apenas métodos de otimização padrão para inferência em CPU podem ser aplicados.
A visão geral em vídeo deste tópico é apresentada aqui:

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/BEDEscDQFxk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Abaixo está uma breve visão geral dos métodos de otimização de inferência em CPU:

1) **Projetar redes menores**. Se o objetivo for simples o suficiente (classificação de imagens de < 100 classes ou detecção de objetos de < 10 classes ou similar), uma rede menor pode alcançar precisão aceitável e executar muito rápido. Por exemplo, a rede MobileNet v1 alfa 0.25 YOLOv2 treinada para detectar apenas uma classe de objetos (rostos humanos) atinge 62.5 FPS sem qualquer otimização adicional.

**Inferência FP32 Tensorflow Lite padrão:**
MobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 62.5 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB  7 FPS

2) **Quantização**. Quantização é o processo de reduzir a precisão dos pesos da rede de RN, geralmente de FP32 para INT8. Ela reduz o tamanho em 4x e a latência em ~60-80% usando os kernels padrão do Tensorflow Lite. A perda de precisão pode ser minimizada usando QAT - treinamento ciente de quantização, que é o processo de ajustar finamente a rede com nós de quantização inseridos.

**Inferência INT8 Tensorflow Lite padrão:**
MobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 77 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB  11.5 FPS

3) Usar **kernels otimizados**. A velocidade de inferência pode ser melhorada utilizando frameworks que possuem kernels de CNN otimizados para conjuntos específicos de instruções de CPU, por exemplo, instruções NEON SIMD para ARM. Exemplos de tais redes incluem ARM NN e XNNPACK.

Arm NN SDK é um conjunto de softwares e ferramentas de código aberto que viabiliza cargas de trabalho de aprendizado de máquina em dispositivos com baixo consumo de energia.
A descrição e os benchmarks fornecidos parecem promissores, mas o procedimento de instalação no Raspberry Pi OS mais recente é complicado no momento - a única maneira adequada de instalar a versão mais recente do ARM NN atualmente é compilando a partir do código-fonte. Existem binários disponíveis para Debian Bullseye, mas o Raspberry Pi OS ainda está em Debian Buster. Os resultados de teste de inferência com scripts de benchmark foram mistos; para um único modelo ele mostrou desempenho pior do que até mesmo o Tensorflow Lite padrão, mas acabou sendo mais rápido em inferência de múltiplos modelos, possivelmente devido a uma utilização mais eficiente de multiprocessamento.

**Inferência ARM NN FP32:**
MobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB 7.2 FPS

XNNPACK é uma biblioteca para acelerar a inferência de rede neural para arquiteturas ARM, x86 e WebAssembly em ambientes Android, iOS, Windows, Linux e macOS. Ela é integrada ao Tensorflow Lite como um delegate, que é habilitado por padrão para compilação Android, mas para outros ambientes precisa ser habilitada manualmente - assim, se você quiser usar XNNPACK no Raspberry Pi 4, será necessário compilar o pacote TensorFlow Lite Interpreter a partir do código-fonte ou baixar um dos binários de terceiros, como o que fornecemos acima.

**Inferência FP32 Tensorflow Lite com delegate XNNPACK:**
MobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB 7.2 FPS

O principal problema com kernels otimizados é o suporte desigual a diferentes arquiteturas/operadores de RN/tipos de precisão em diferentes frameworks. Por exemplo, kernels otimizados em INT8 estão em desenvolvimento tanto no ARM NN quanto no XNNPACK. O suporte para kernels otimizados em INT8 no XNNPACK foi adicionado muito recentemente e parece trazer uma melhoria modesta de desempenho, de cerca de ~30%, dependendo dos operadores usados no modelo.
[XNNPACK GitHub Issue](https://github.com/google/XNNPACK/issues/999#issuecomment-870791779)

Outra linha promissora são os kernels otimizados para modelos quantizados dinamicamente, veja a conversa com o desenvolvedor aqui:
[TensorFlow GitHub PR](https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116)

O desenvolvedor afirma uma melhora de latência de 3-4x, mas atualmente isso é limitado apenas a um conjunto muito específico de modelos. Um PR para permitir um uso mais conveniente está em desenvolvimento.

4) **Poda e inferência esparsa**. Poda é um processo de ajuste fino de uma rede neural treinada para encontrar pesos que não contribuem para previsões corretas. Isso permite reduzir tanto o tamanho quanto a latência dos modelos – a redução de acurácia depende das configurações de esparsidade. Experimentalmente é possível obter até 80% de esparsidade com impacto negligenciável na acurácia. Veja detalhes [aqui](https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html) e um guia de poda com TensorFlow [aqui](https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference).
Infelizmente, na forma atual, apenas um conjunto muito limitado de modelos oferece suporte à poda e à inferência esparsa com XNNPACK.

## F.A.Q

#### P1: A política da minha empresa não nos permite usar binários de terceiros

Você pode usar o pacote oficial do interpretador TFLite ou, alternativamente, compilá-lo a partir do código-fonte seguindo as instruções [aqui](https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later).

## Recursos

- **[Página Web]** [Página Oficial do TensorFlow Lite](https://www.tensorflow.org/lite)

- **[Página Web]** [Documentação Oficial do TensorFlow Lite](https://www.tensorflow.org/lite/guide)
