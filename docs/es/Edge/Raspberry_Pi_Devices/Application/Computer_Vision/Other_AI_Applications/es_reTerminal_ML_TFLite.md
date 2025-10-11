---
description: Comenzando con TensorFlow Lite
title: Comenzando con TensorFlow Lite
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_ML_TFLite
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# Comenzando con TensorFlow Lite en reTerminal

<p align="center">
  <img alt="Light" src="https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png" width="45%"/>
&nbsp; &nbsp;
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%"/>
</p>

TensorFlow Lite es un conjunto de herramientas que habilita el aprendizaje automático en dispositivos ayudando a los desarrolladores a ejecutar sus modelos en dispositivos móviles, embebidos e IoT.
Las características clave de TensorFlow Lite están optimizadas para el aprendizaje automático en dispositivos, con un enfoque en latencia, privacidad, conectividad, tamaño y consumo de energía. El framework está construido para proporcionar soporte para múltiples plataformas, incluyendo dispositivos Android e iOS, Linux embebido y microcontroladores. También tiene soporte integrado para una variedad de lenguajes, como Java, Swift, Objective-C, C++ y Python, y tiene alto rendimiento con aceleración de hardware y optimización de modelos. Proporciona ejemplos de extremo a extremo para tareas comunes de aprendizaje automático, como clasificación de imágenes, detección de objetos, estimación de pose, respuesta a preguntas y clasificación de texto, en múltiples plataformas.

## Instalación del Paquete TensorFlow Lite Runtime

El paquete tflite_runtime es un paquete Python más pequeño y simplificado que incluye el código mínimo requerido para ejecutar inferencia con TensorFlow Lite. Este paquete es ideal cuando todo lo que quieres hacer es ejecutar modelos .tflite y evitar desperdiciar espacio en disco con la gran librería TensorFlow.

Para el mejor rendimiento se recomienda usar un SO de 64 bits y el paquete TFLite correspondiente, con el delegado XNNPACK optimizado habilitado. Estos pueden ser compilados desde el código fuente por ti mismo o instalados con binarios pre-construidos proporcionados por Seeed studio. Alternativamente, puedes instalar la última versión estable con pip

#### Última versión estable (compilaciones oficiales)

```
pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime

```

#### Paquete optimizado para rendimiento para SO de 64 bits con XNNPACK habilitado

Las ruedas oficiales pre-construidas para Python 3.7 SO de 64 bits con optimizaciones XNNPACK no estaban disponibles al momento de escribir este artículo, por lo que las compilamos y compartimos nosotros mismos.

```
wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
pip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
```

Después de que la instalación esté completa, intenta importar el paquete tflite:

```
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tflite_runtime
>>> tflite_runtime.__version__
'2.6.0'
```

## Ejemplos

Es posible usar el Convertidor de TFLite para convertir cualquier modelo de Tensorflow al formato .tflite, siempre que solo consista en operaciones soportadas por el Runtime de TFLite. La siguiente es una lista de demos actualmente probadas en reTerminal, que será expandida y completada en el futuro:

### Detección de Objetos

![Detección de Vehículos](https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg)

Demo: Detección de Vehículos
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_multi_stage.ipynb)
[Scripts de ejemplo](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/detector)

- alpha 0.25 224x224 66.7 FPS (15 ms.)
- alpha 0.5 224x224 40 FPS (25 ms.)
- alpha 0.75 320x320 14.9 FPS (67 ms.)
- alpha 1.0 320x320 10.4 FPS (96 ms.)

### Clasificación de Imágenes

![Cinta Transportadora Industrial](https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png)

Demo: Identificación de Desgarros en Cinta Transportadora Industrial
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_conveyor_belt_rip_recognition.ipynb)
[Scripts de ejemplo](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)

### Segmentación Semántica

![Segmentación de Pulmones](https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png)

Demo: Segmentación de pulmones
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_lung_segmentation.ipynb)
[Scripts de ejemplo](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/segnet)

### Reconocimiento de Edad/Género Facial

![Reconocimiento de Edad y Género](https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif)

Demo: Inferencia multi-etapa: MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet
[Repositorio de Github](https://github.com/AIWintermuteAI/edge_ml_age_gender_recognition/tree/master)
[Scripts de ejemplo](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_age_gender)
~16-20 FPS (con [ARM NN](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_age-gender))

### Reconocimiento de Expresiones Faciales

![Reconocimiento de Emociones](https://files.seeedstudio.com/ml/emotion/emotions.gif)

Demo: Inferencia multi-etapa: MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet
[Repositorio de Github](https://github.com/AIWintermuteAI/edge_ml_emotion_recognition/tree/master)
[Scripts de ejemplo](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_emotion)
~11 FPS

### Anti-suplantación Facial

![Anti-suplantación Facial](https://files.seeedstudio.com/ml/face_anti-spoofing/face_anti-spoofing.gif)

Demo: Inferencia multi-etapa: MobileNet YOLOv3 alpha 0.25 -> MobileNet v1 alpha 0.25
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_anti_spoofing.ipynb)
[Scripts de ejemplo](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)
~23 FPS (ARM NN)

### Reconocimiento Facial

![Reconocimiento Facial](https://files.seeedstudio.com/wiki/reTerminal_ML/face_recognition.gif)

Demo: Inferencia multi-etapa: Ultra Light Face Detector con Detección de Puntos de Referencia -> MobileFaceNet
[Jupyter Notebook](#)
[Scripts de ejemplo](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_recognition)
~15 FPS (ARM NN)

## Optimización adicional

Los resultados de FPS e inferencia en la tabla de Ejemplo se proporcionan para modelos cuantizados INT8 de inferencia en Tensorflow Lite, a menos que se indique lo contrario. <br />
Dado que reTerminal está basado en Raspberry Pi 4, no tiene aceleradores de hardware adicionales para inferencia de redes neuronales, por lo que solo se pueden aplicar métodos de optimización estándar para inferencia en CPU.
La descripción general en video de este tema se presenta aquí:

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/BEDEscDQFxk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

A continuación se presenta una breve descripción general de los métodos de optimización de inferencia en CPU:

1) **Diseñar redes más pequeñas**. Si el objetivo es lo suficientemente simple (clasificación de imágenes de < 100 clases o detección de objetos de < 10 clases o similar), una red más pequeña puede lograr una precisión aceptable y ejecutarse muy rápido. Por ejemplo, la red MobileNet v1 alpha 0.25 YOLOv2 entrenada para detectar solo una clase de objetos (rostros humanos) logra 62.5 FPS sin ninguna optimización adicional.

**Inferencia FP32 de Tensorflow Lite estándar:**
MobileNetv1(alpha 0.25) YOLOv2 1 clase 0.89 MB 62.5 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 clases 13.1 MB  7 FPS

2) **Cuantización**. La cuantización es el proceso de reducir la precisión de los pesos de la red neuronal, generalmente de FP32 a INT8. Reduce el tamaño en 4x y la latencia en ~60-80% usando kernels predeterminados de Tensorflow Lite. La pérdida de precisión puede minimizarse usando QAT - entrenamiento consciente de cuantización, que es el proceso de ajuste fino de la red con nodos de cuantización insertados.

**Inferencia INT8 de Tensorflow Lite estándar:**
MobileNetv1(alpha 0.25) YOLOv2 1 clase 0.89 MB 77 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 clases 13.1 MB  11.5 FPS

3) Usar **kernels optimizados**. La velocidad de inferencia puede mejorarse utilizando frameworks que tienen kernels CNN optimizados para conjuntos de instrucciones específicos de CPU, por ejemplo, instrucciones NEON SIMD para ARM. Ejemplos de tales redes incluyen ARM NN y XNNPACK.

Arm NN SDK es un conjunto de software y herramientas de código abierto que permite cargas de trabajo de aprendizaje automático en dispositivos de bajo consumo energético.
La descripción y los benchmarks proporcionados se ven prometedores, pero el procedimiento de instalación en el último Raspberry Pi OS es doloroso en este momento - la única forma adecuada de instalar la última versión de ARM NN actualmente es compilar cruzado desde el código fuente. Hay binarios disponibles para Debian Bullseye, pero Raspberry Pi OS aún está en Debian Buster. Los resultados de las pruebas de inferencia con scripts de benchmark fueron mixtos, para un solo modelo mostró peor rendimiento que incluso Tensorflow Lite estándar, pero resultó ser más rápido en inferencia multi-modelo, posiblemente debido a una utilización más eficiente del multiprocesamiento.

**Inferencia FP32 de ARM NN:**
MobileNetv1(alpha 0.25) YOLOv2 1 clase 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 clases 13.1 MB 7.2 FPS

XNNPACK es una biblioteca para acelerar la inferencia de redes neuronales para arquitecturas ARM, x86 y WebAssembly en entornos Android, iOS, Windows, Linux, macOS. Está integrado en Tensorflow Lite como un delegado, que está habilitado por defecto para la compilación de Android, pero para otros entornos necesita ser habilitado manualmente - por lo tanto, si deseas usar XNNPACK en Raspberry Pi 4, necesitarás construir el paquete TensorFlow Lite Interpreter desde el código fuente o descargar uno de los binarios de terceros, como el que proporcionamos arriba.

**Inferencia FP32 de Tensorflow Lite con delegado XNNPACK:**
MobileNetv1(alpha 0.25) YOLOv2 1 clase 0.89 MB 83 FPS
MobileNetv1(alpha 1.0) YOLOv3 20 clases 13.1 MB 7.2 FPS

El problema principal con los kernels optimizados es el soporte desigual de diferentes arquitecturas/operadores NN/tipos de precisión en diferentes frameworks. Por ejemplo, los kernels optimizados INT8 están en desarrollo tanto en ARM NN como en XNNPACK. El soporte para kernels optimizados INT8 en XNNPACK se agregó muy recientemente y parece traer una mejora modesta en el rendimiento, de aproximadamente ~30%, dependiendo de los operadores utilizados en el modelo.
[XNNPACK GitHub Issue](https://github.com/google/XNNPACK/issues/999#issuecomment-870791779)

Otra pista prometedora son los kernels optimizados para modelos cuantizados dinámicamente, ver la conversación con el desarrollador aquí:
[TensorFlow GitHub PR](https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116)

El desarrollador afirma una mejora de latencia de 3-4x, pero actualmente está limitado solo a un conjunto muy específico de modelos. Un PR para permitir un uso más conveniente está en desarrollo.

4) **Poda e inferencia dispersa**. La poda es un proceso de ajuste fino de una red neuronal entrenada para encontrar pesos que no contribuyen a predicciones correctas. Esto permite reducir tanto el tamaño como la latencia de los modelos - la reducción de precisión depende de la configuración de dispersión. Experimentalmente es posible lograr hasta 80% de dispersión con impacto insignificante en la precisión. Ver detalles [aquí](https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html) y una guía para poda con tensorflow [aquí](https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference).
Desafortunadamente en su forma actual, solo un conjunto muy limitado de modelos soporta poda e inferencia dispersa con XNNPACK.

## P.F

#### P1: La política de mi empresa no nos permite usar binarios de terceros

Puedes usar el paquete oficial del intérprete TFLite o alternativamente compilarlo desde el código fuente siguiendo las instrucciones [aquí](https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later).

## Recursos

- **[Página Web]** [Página Web Oficial de TensorFlow Lite](https://www.tensorflow.org/lite)

- **[Página Web]** [Documentación Oficial de TensorFlow Lite](https://www.tensorflow.org/lite/guide)
