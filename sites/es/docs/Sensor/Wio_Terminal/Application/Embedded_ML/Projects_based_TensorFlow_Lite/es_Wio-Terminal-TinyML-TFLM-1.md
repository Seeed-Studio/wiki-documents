---
description: TensorFlow Lite Micro Getting Started
title: TensorFlow Lite Micro Getting Started
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-TFLM-1
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Wio Terminal Tensorflow Lite Micro Primeros Pasos

Este artículo presenta cómo instalar la [biblioteca oficial Arduino Tensorflow Lite](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/hello_world) en tu Wio Terminal, permitiéndote probar algunos modelos de Aprendizaje Automático usando Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" /></div>

Para más información, por favor visita [TensorFlow Lite Para Microcontroladores](https://www.tensorflow.org/lite/microcontrollers).

Asegúrate de usar la versión 1.8.2 de las definiciones de placas Seeed SAMD, consulta cómo verificar y actualizar las definiciones de placas en Primeros pasos con Wio Terminal.

## Instalar la Biblioteca Arduino TensorFlow Lite

La versión de la biblioteca Tensorflow Lite para Arduino IDE, que se puede descargar desde el Administrador de Bibliotecas de Arduino IDE está desactualizada en este momento (Octubre 2021). Por lo tanto, se necesita usar una versión de desarrollo del repositorio oficial de Tensorflow Lite para Microcontroladores.

```
git clone https://github.com/tensorflow/tflite-micro-arduino-examples Arduino_TensorFlowLite
```

en tu carpeta de sketches/libraries de Arduino. Puedes encontrar más detalles sobre la instalación de la última versión de desarrollo de la biblioteca en [repositorio TensorFlow Lite Micro Library for Arduino](https://github.com/tensorflow/tflite-micro-arduino-examples).

Los proyectos descritos aquí fueron probados con el commit 219ac1dfed8a8ba0edfdbaae51aed5dc9b208c0c del repositorio TensorFlow Lite Micro Library for Arduino.

## Ejecutar el Ejemplo Hello World de Arduino TensorFlow Lite

El ejemplo está diseñado para demostrar los conceptos básicos absolutos de usar TensorFlow Lite para Microcontroladores. Incluye el flujo de trabajo completo de extremo a extremo de entrenar un modelo, convertirlo para uso con TensorFlow Lite, y ejecutar inferencia en un microcontrolador.

La muestra está construida alrededor de un modelo entrenado para replicar una función seno. Contiene implementaciones para varias plataformas. En cada caso, el modelo se usa para generar un patrón de datos que se usa para hacer parpadear LEDs o controlar una animación.

1. Ve a `Files` -> `Examples` -> `Arduino_TensorFlowLite` -> `hello_world`. El sketch de ejemplo debería aparecer.

2. Si compila ahora, habrá un **error de compilación** porque las funciones `min` y `max` definidas para la placa también están definidas en la Biblioteca Arduino TensorFlow. Así que para resolver esto, usa `#undef max` y `#undef min` justo antes de incluir la biblioteca para evitar el error, así:

```cpp
#undef max
#undef min
#include <TensorFlowLite.h>
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221173149.jpg" /></div>

3. Ahora, haz clic en **Upload** y sube tu primer ejemplo de TensorFlow Lite a Wio Terminal!

4. Abre el Serial Plotter, y deberías ver una forma de onda Seno. Además, verifica el LED incorporado en la parte trasera, debería estar atenuándose y encendiéndose según la onda Seno que acabas de generar desde TensorFlow Lite!

**Nota:** si quieres ver la onda Seno completa en Serial Plotter(es decir, LED parpadeando más rápido), puedes hacer clic en el archivo **arduino_constants.cpp** en la parte superior, y cambiar el `kInferencesPerCycle` a 100 como sigue:

```cpp
const int kInferencesPerCycle = 100;
```