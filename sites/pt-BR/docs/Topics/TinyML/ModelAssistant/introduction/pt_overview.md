---
description: Visão geral do Model Assistant
title: Visão geral do SenseCraft AI Model Assistant
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Introduce_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Introduce_Overview/
---

# Visão geral

<div align="center">
  <img width="20%" src="https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"/>
</div>

## Introdução

Seeed SenseCraft Model Assistant (ou simplesmente SSCMA) é um projeto open source focado em IA embarcada. Otimizamos algoritmos excelentes do [OpenMMLab](https://github.com/open-mmlab) para cenários do mundo real e tornamos a implementação mais amigável ao usuário, alcançando inferência mais rápida e precisa em dispositivos embarcados.

## O que está incluído?

Atualmente, oferecemos suporte às seguintes direções de algoritmos:

### 🔍 Detecção de anomalias

No mundo real, dados anômalos geralmente são difíceis de identificar e, mesmo quando é possível identificá-los, isso exige um custo muito alto. O algoritmo de detecção de anomalias coleta dados normais de forma de baixo custo, e qualquer coisa fora dos dados normais é considerada anômala.

### 👁️ Visão computacional

Aqui fornecemos vários algoritmos de visão computacional, como detecção de objetos, classificação de imagens, segmentação de imagens e estimativa de pose. No entanto, esses algoritmos não podem ser executados em hardwares de baixo custo. O SSCMA otimiza esses algoritmos de visão computacional para alcançar boa velocidade de execução e precisão em dispositivos de baixo desempenho.

### ⏱️ Cenários específicos

O SSCMA oferece cenários personalizados para ambientes de produção específicos, como identificação de instrumentos analógicos, medidores digitais tradicionais e classificação de áudio. Continuaremos a adicionar mais algoritmos para cenários específicos no futuro.

## Recursos

### 🤝 Amigável ao usuário

O SSCMA fornece uma plataforma amigável ao usuário que permite realizar facilmente o treinamento em dados coletados e compreender melhor o desempenho dos algoritmos por meio de visualizações geradas durante o processo de treinamento.

### 🔋 Modelos com baixa capacidade de computação e alto desempenho

O SSCMA se concentra em pesquisa de algoritmos de IA na borda, e os modelos de algoritmo podem ser implantados em microprocessadores, como [ESP32](https://www.espressif.com.cn/en/products/socs/esp32), algumas placas de desenvolvimento [Arduino](https://arduino.cc) e até mesmo em SBCs embarcados, como o [Raspberry Pi](https://www.raspberrypi.org).

### 🗂️ Suporta vários formatos para exportação de modelos

[TensorFlow Lite](https://www.tensorflow.org/lite) é usado principalmente em microcontroladores, enquanto [ONNX](https://onnx.ai) é usado principalmente em dispositivos com Embedded Linux. Existem alguns formatos especiais, como [TensorRT](https://developer.nvidia.com/tensorrt), [OpenVINO](https://docs.openvino.ai), que já são bem suportados pelo OpenMMLab. O SSCMA adicionou exportação de modelos TFLite para microcontroladores, que podem ser convertidos diretamente para o formato [TensorRT](https://developer.nvidia.com/tensorrt), [UF2](https://github.com/microsoft/uf2) e arrastados para dentro do dispositivo para implantação.

## Exemplos de aplicação

### Detecção de objetos

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/esp32/images/person_detection.png"/></div>

### Reconhecimento de medidor analógico

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/grove/images/pfld_meter.gif"/></div>

### Reconhecimento de medidor digital

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/grove/images/digital_meter.gif"/></div>

Mais exemplos de aplicação podem ser encontrados no [Model Zoo](https://github.com/Seeed-Studio/sscma-model-zoo)。
