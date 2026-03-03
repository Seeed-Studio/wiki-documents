---
description: Descripción general del Asistente de Modelos
title: Descripción general del Asistente de Modelos de IA SenseCraft
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Introduce_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Descripción general

<div align="center">
  <img width="20%" src="https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"/>
</div>

## Introducción

Seeed SenseCraft Model Assistant (o simplemente SSCMA) es un proyecto de código abierto enfocado en IA embebida. Hemos optimizado excelentes algoritmos de [OpenMMLab](https://github.com/open-mmlab) para escenarios del mundo real y hemos hecho la implementación más fácil de usar, logrando inferencia más rápida y precisa en dispositivos embebidos.

## ¿Qué incluye?

Actualmente soportamos las siguientes direcciones de algoritmos:

### 🔍 Detección de Anomalías

En el mundo real, los datos anómalos son a menudo difíciles de identificar, e incluso si pueden identificarse, requieren un costo muy alto. El algoritmo de detección de anomalías recopila datos normales de manera económica, y cualquier cosa fuera de los datos normales se considera anómala.

### 👁️ Visión por Computadora

Aquí proporcionamos una serie de algoritmos de visión por computadora como detección de objetos, clasificación de imágenes, segmentación de imágenes y estimación de pose. Sin embargo, estos algoritmos no pueden ejecutarse en hardware de bajo costo. SSCMA optimiza estos algoritmos de visión por computadora para lograr buena velocidad de ejecución y precisión en dispositivos de gama baja.

### ⏱️ Específicos de Escenario

SSCMA proporciona escenarios personalizados para entornos de producción específicos, como identificación de instrumentos analógicos, medidores digitales tradicionales y clasificación de audio. Continuaremos agregando más algoritmos para escenarios específicos en el futuro.

## Características

### 🤝 Fácil de usar

SSCMA proporciona una plataforma fácil de usar que permite a los usuarios realizar fácilmente entrenamiento en datos recopilados, y comprender mejor el rendimiento de los algoritmos a través de visualizaciones generadas durante el proceso de entrenamiento.

### 🔋 Modelos con baja potencia de cómputo y alto rendimiento

SSCMA se enfoca en la investigación de algoritmos de IA del lado final, y los modelos de algoritmo pueden desplegarse en microprocesadores, similares a [ESP32](https://www.espressif.com.cn/en/products/socs/esp32), algunas placas de desarrollo [Arduino](https://arduino.cc), e incluso en SBCs embebidos como [Raspberry Pi](https://www.raspberrypi.org).

### 🗂️ Soporta múltiples formatos para exportación de modelos

[TensorFlow Lite](https://www.tensorflow.org/lite) se usa principalmente en microcontroladores, mientras que [ONNX](https://onnx.ai) se usa principalmente en dispositivos con Embedded Linux. Hay algunos formatos especiales como [TensorRT](https://developer.nvidia.com/tensorrt), [OpenVINO](https://docs.openvino.ai) que ya están bien soportados por OpenMMLab. SSCMA ha agregado exportación de modelos TFLite para microcontroladores, que puede convertirse directamente a formato [TensorRT](https://developer.nvidia.com/tensorrt), [UF2](https://github.com/microsoft/uf2) y arrastrarse y soltarse en el dispositivo para despliegue.

## Ejemplos de Aplicación

### Detección de Objetos

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/esp32/images/person_detection.png"/></div>

### Reconocimiento de Medidores de Aguja

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/grove/images/pfld_meter.gif"/></div>

### Reconocimiento de Medidores Digitales

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/grove/images/digital_meter.gif"/></div>

Más ejemplos de aplicación se pueden encontrar en [Model Zoo](https://github.com/Seeed-Studio/sscma-model-zoo)。