---
description: Introdução ao TensorFlow Lite Micro
title: Introdução ao TensorFlow Lite Micro
keywords:
  - Wio_terminal
  - Embedded_ML
  - Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-TinyML-TFLM-1
last_update:
  date: 1/30/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML-TFLM-1/
---

# Primeiros passos com Wio Terminal Tensorflow Lite Micro

Este artigo apresenta como instalar a [biblioteca oficial Arduino Tensorflow Lite](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/hello_world) no seu Wio Terminal, permitindo que você teste alguns modelos de Machine Learning usando o Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" /></div>

Para mais informações, visite [TensorFlow Lite For Microcontrollers](https://www.tensorflow.org/lite/microcontrollers).

Certifique-se de usar a versão 1.8.2 das definições de placas Seeed SAMD; veja como verificar e atualizar as definições de placa em Primeiros passos com Wio Terminal.

## Instalar a Biblioteca Arduino TensorFlow Lite

A versão da biblioteca Tensorflow Lite para a Arduino IDE, que pode ser baixada pelo Gerenciador de Bibliotecas da Arduino IDE, está desatualizada no momento (outubro de 2021). Portanto, é necessário usar uma versão de desenvolvimento do repositório oficial Tensorflow Lite for Microcontrollers.

```
git clone https://github.com/tensorflow/tflite-micro-arduino-examples Arduino_TensorFlowLite
```

na sua pasta Arduino sketches/libraries. Você pode encontrar mais detalhes sobre a instalação da versão de desenvolvimento mais recente da biblioteca no [repositório TensorFlow Lite Micro Library for Arduino](https://github.com/tensorflow/tflite-micro-arduino-examples).

Os projetos descritos aqui foram testados com o commit 219ac1dfed8a8ba0edfdbaae51aed5dc9b208c0c do repositório TensorFlow Lite Micro Library for Arduino.

## Executando o exemplo Hello World do Arduino TensorFlow Lite

O exemplo foi projetado para demonstrar o básico absoluto do uso do TensorFlow Lite for Microcontrollers. Ele inclui todo o fluxo de trabalho ponta a ponta de treinamento de um modelo, conversão para uso com TensorFlow Lite e execução de inferência em um microcontrolador.

O exemplo é construído em torno de um modelo treinado para reproduzir uma função seno. Ele contém implementações para várias plataformas. Em cada caso, o modelo é usado para gerar um padrão de dados que é usado para piscar LEDs ou controlar uma animação.

1. Vá para `Files` -> `Examples` -> `Arduino_TensorFlowLite` -> `hello_world`. O sketch de exemplo deve aparecer.

2. Se compilar agora, haverá um **erro de compilação** porque as funções `min` e `max` definidas para a placa também são definidas na Arduino TensorFlow Library. Para resolver isso, use `#undef max` e `#undef min` imediatamente antes de incluir a biblioteca para evitar o erro, assim:

```cpp
#undef max
#undef min
#include <TensorFlowLite.h>
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221173149.jpg" /></div>

3. Agora, clique em **Upload** e envie o seu primeiro exemplo TensorFlow Lite para o Wio Terminal!

4. Abra o Serial Plotter, e você deverá ver uma forma de onda senoidal. Além disso, verifique o LED embutido na parte de trás; ele deve estar aumentando e diminuindo o brilho de acordo com a onda senoidal que você acabou de gerar com o TensorFlow Lite!

**Observação:** se você quiser ver a onda seno completa no Serial Plotter (isto é, o LED piscando mais rápido), você pode clicar no arquivo **arduino_constants.cpp** na parte superior e alterar o `kInferencesPerCycle` para 100, como a seguir:

```cpp
const int kInferencesPerCycle = 100;
```
