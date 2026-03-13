---
description: Início Rápido para Model Assistant
title: Início Rápido
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Introduce_Quick_Start
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Introduce_Quick_Start/
---
# Início Rápido

Em [Visão Geral](/pt-br/ModelAssistant_Introduce_Overview) apresentamos as funções e recursos fornecidos pelo [SSCMA](https://github.com/Seeed-Studio/ModelAssistant). Considerando que o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) é dividido em vários módulos diferentes, cada módulo concluindo suas respectivas tarefas, sugerimos seguir os passos abaixo para começar rapidamente.

:::tip
Sugerimos que todos os iniciantes em [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) comecem a aprender a partir de [Introdução](#Introdução); se você já está familiarizado com [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) ou [OpenMMLab](https://github.com/open-mmlab), e quiser tentar fazer deploy em dispositivos de computação de borda, modificar redes neurais existentes ou treinar em conjuntos de dados definidos pelo usuário, você pode consultar diretamente a seção [Avançado](#Avançado).
:::

## Introdução

### Deploy de Modelo

Se você quiser fazer o deploy do modelo no dispositivo, consulte a seção [Deploy](/pt-br/ModelAssistant_Deploy_Overview) para aprender como fazer o deploy do modelo.

### Treinamento de Modelo

Se você quiser treinar um modelo, recomendamos fortemente que primeiro tente treinar um modelo na plataforma Colab. Você pode consultar os seguintes tutoriais:

#### Detecção de Objetos

| Modelo                                                                                          | Colab                                                                                                                                                                                                                     |
|:------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Gender_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Detection_Swift-YOLO_192.md)                   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Detection_Swift-YOLO_192.ipynb)          |
| [Digital_Meter_Water_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Water_Swift-YOLO_192.md)             | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Water_Swift-YOLO_192.ipynb)       |
| [Apple_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Apple_Detection_Swift-YOLO_192.md)                     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Apple_Detection_Swift-YOLO_192.ipynb)           |
| [person_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/person_Detection_Swift-YOLO_192.md)                   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/person_Detection_Swift-YOLO_192.ipynb)          |
| [Face_Detection_Swift-YOLO_96](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Face_Detection_Swift-YOLO_96.md)                         | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Face_Detection_Swift-YOLO_96.ipynb)             |
| [COCO_Detection_Swift-YOLO_320](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/COCO_Detection_Swift-YOLO_320.md)                       | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/COCO_Detection_Swift-YOLO_320.ipynb)            |
| [Gesture_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gesture_Detection_Swift-YOLO_192.md)                 | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gesture_Detection_Swift-YOLO_192.ipynb)         |
| [Digital_Meter_Electricity_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Electricity_Swift-YOLO_192.md) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Electricity_Swift-YOLO_192.ipynb) |

#### Classificação de Imagens

| Modelo                                                                                                        | Colab                                                                                                                                                                                                                            |
|:--------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [MNIST_Classification_MobileNetV2_0.5_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.md)         | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.ipynb)     |
| [Gender_Classification_MobileNetV2_0.35_Rep_64](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Classification_MobileNetV2_0.35_Rep_64.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Classification_MobileNetV2_0.35_Rep_64.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_64](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_64.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_64.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_96](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_96.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_96.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_32.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_32.ipynb)   |
| [CIFAR-10_Classification_MobileNetV2_0.35_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.md) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.ipynb) |

## Avançado

1. Primeiro, consulte o [Guia de Instalação](/pt-br/ModelAssistant_Introduce_Installation) para configurar o ambiente de execução do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant).

2. Em seguida, familiarize-se com os métodos básicos de uso do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant):

   - **Treinamento de Modelo**. Consulte [Treinamento de Modelo](/pt-br/ModelAssistant_Tutorials_Training_Overview) para aprender como usar o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) para treinar um modelo. Sugerimos que você selecione um modelo a partir de um exemplo para treinamento.

   - **Exportação de Modelo**. Após concluir o treinamento do modelo, para fazer o deploy no dispositivo de computação de borda, é necessário primeiro exportar o modelo. Para o tutorial de exportação do modelo, consulte [Exportação de Modelo](/pt-br/ModelAssistant_Tutorials_Export_Overview).

   - **Verificação de Modelo**. A verificação do modelo pode ser realizada após o treinamento ou a exportação. A primeira verifica a correção da rede neural e dos resultados do treinamento, enquanto a segunda verifica principalmente a correção do modelo exportado, facilitando o deploy e a depuração posterior em dispositivos de computação de borda. Alguns métodos para validação de modelo foram fornecidos nos documentos nas duas etapas acima.

- **Deploy de Modelo**. Se você quiser fazer o deploy do modelo treinado exportado em dispositivos de computação de borda, consulte [Deploy](/pt-br/ModelAssistant_Deploy_Overview)
- **Conjuntos de Dados Personalizados**. Se você quiser treinar em um conjunto de dados personalizado, consulte [Conjuntos de Dados](/pt-br/ModelAssistant_Tutorials_Datasets).

- **Modelo Personalizado**. Se você quiser modificar uma rede neural existente ou projetar sua própria rede neural, consulte [Configuração de Modelo](/pt-br/ModelAssistant_Tutorials_Config).

## Conhecimentos Necessários

### 📸 Visão Computacional

Os fundamentos da visão computacional são construídos sobre o processamento digital de imagens. Portanto, você precisa primeiro aprender o básico de DlP. Depois você pode avançar para ler tópicos de visão computacional, como reconhecimento de padrões e geometria 3D. Você precisa conhecer álgebra linear para conseguir entender completamente alguns conceitos de visão computacional, como redução de dimensionalidade. Depois de entender os fundamentos da visão computacional, você também deve desenvolver seu conhecimento em deep learning, especialmente em Redes Neurais Convolucionais (CNN).

### 💻 Programação

Python será suficiente para design e prototipagem, mas se você quiser fazer algum
trabalho embarcado, também deve estar familiarizado com C++.

### 🧰 Ferramentas

OpenCV é a principal ferramenta para visão computacional, e Numpy é uma ferramenta importante para processamento e análise de dados. Você precisa conhecê-las. Você nunca sabe, mas deve saber quais ferramentas estão disponíveis e como usá-las. Como usá-las. Outra ferramenta com a qual você precisa se familiarizar é o framework de aprendizado profundo. Frameworks. Você pode começar com Keras, que é o mais fácil de aprender, e depois aprender Tensorflow ou PyTorch.
