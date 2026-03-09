---
description: Inicio Rápido Para Model Assistant
title: Inicio Rápido
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Introduce_Quick_Start
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/ModelAssistant_Introduce_Quick_Start/
---
# Inicio Rápido

En [Descripción General](/es/ModelAssistant_Introduce_Overview) hemos introducido las funciones y características proporcionadas por [SSCMA](https://github.com/Seeed-Studio/ModelAssistant). Considerando que [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) se divide en múltiples módulos diferentes, cada módulo completando sus tareas correspondientes, sugerimos seguir los pasos a continuación para comenzar rápidamente.

:::tip
Sugerimos que todos los principiantes de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) comiencen a aprender desde [Primeros Pasos](#primeros-pasos), si estás familiarizado con [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) o [OpenMMLab](https://github.com/open-mmlab), y quieres intentar desplegar en dispositivos de computación en el borde, modificar redes neuronales existentes, o entrenar en conjuntos de datos definidos por el usuario, puedes referirte directamente a [Avanzado](#avanzado).
:::

## Primeros Pasos

### Despliegue de Modelos

Si quieres desplegar el modelo en el dispositivo, por favor consulta la sección [Desplegar](/es/ModelAssistant_Deploy_Overview) para aprender cómo desplegar el modelo.

### Entrenamiento de Modelos

Si quieres entrenar un modelo, recomendamos encarecidamente que primero intentes entrenar un modelo en la plataforma Colab. Puedes consultar los siguientes tutoriales:

#### Detección de Objetos

| Modelo                                                                                           | Colab                                                                                                                                                                                                                     |
|:------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Gender_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Detection_Swift-YOLO_192.md)                   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Detection_Swift-YOLO_192.ipynb)          |
| [Digital_Meter_Water_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Water_Swift-YOLO_192.md)             | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Water_Swift-YOLO_192.ipynb)       |
| [Apple_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Apple_Detection_Swift-YOLO_192.md)                     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Apple_Detection_Swift-YOLO_192.ipynb)           |
| [person_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/person_Detection_Swift-YOLO_192.md)                   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/person_Detection_Swift-YOLO_192.ipynb)          |
| [Face_Detection_Swift-YOLO_96](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Face_Detection_Swift-YOLO_96.md)                         | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Face_Detection_Swift-YOLO_96.ipynb)             |
| [COCO_Detection_Swift-YOLO_320](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/COCO_Detection_Swift-YOLO_320.md)                       | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/COCO_Detection_Swift-YOLO_320.ipynb)            |
| [Gesture_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gesture_Detection_Swift-YOLO_192.md)                 | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gesture_Detection_Swift-YOLO_192.ipynb)         |
| [Digital_Meter_Electricity_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Electricity_Swift-YOLO_192.md) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Electricity_Swift-YOLO_192.ipynb) |

#### Clasificación de Imágenes

| Modelo                                                                                                         | Colab                                                                                                                                                                                                                            |
|:--------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [MNIST_Classification_MobileNetV2_0.5_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.md)         | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.ipynb)     |
| [Gender_Classification_MobileNetV2_0.35_Rep_64](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Classification_MobileNetV2_0.35_Rep_64.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Classification_MobileNetV2_0.35_Rep_64.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_64](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_64.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_64.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_96](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_96.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_96.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_32.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_32.ipynb)   |
| [CIFAR-10_Classification_MobileNetV2_0.35_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.md) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.ipynb) |

## Avanzado

1. Primero, consulta la [Guía de Instalación](/es/ModelAssistant_Introduce_Installation) para configurar el entorno de ejecución de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant).

2. Luego, familiarízate con los métodos básicos de uso de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant):

   - **Entrenamiento de Modelos**, consulta [Entrenamiento de Modelos](/es/ModelAssistant_Tutorials_Training_Overview) para aprender cómo usar [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) para entrenar un modelo. Sugerimos que selecciones un modelo de un ejemplo para el entrenamiento.

   - **Exportación de Modelos**. Después de completar el entrenamiento del modelo, para desplegarlo en el dispositivo de computación en el borde, es necesario primero exportar el modelo. Para el tutorial de exportación del modelo, consulta [Exportación de Modelos](/es/ModelAssistant_Tutorials_Export_Overview).

   - **Verificación de Modelos**. La verificación de modelos se puede realizar después del entrenamiento o la exportación. La primera verifica la corrección de la red neuronal y los resultados del entrenamiento, mientras que la segunda verifica principalmente la corrección del modelo exportado, facilitando el despliegue y la depuración en dispositivos de computación en el borde más adelante. Se han proporcionado algunos métodos para la validación de modelos en los documentos de los dos pasos anteriores.

- **Despliegue de Modelos**. Si quieres desplegar el modelo entrenado exportado en dispositivos de computación en el borde, consulta [Despliegue](/es/ModelAssistant_Deploy_Overview)
- **Conjuntos de Datos Personalizados**. Si quieres entrenar en un conjunto de datos personalizado, consulta [Conjuntos de Datos](/es/ModelAssistant_Tutorials_Datasets).

- **Modelo Personalizado**. Si quieres modificar una red neuronal existente o diseñar tu propia red neuronal, consulta [Configuración de Modelos](/es/ModelAssistant_Tutorials_Config).

## Conocimientos Necesarios

### 📸 Visión por Computadora

Los fundamentos de la visión por computadora se basan en el procesamiento digital de imágenes. Por lo tanto, necesitas aprender primero los fundamentos del procesamiento digital de imágenes. Luego puedes avanzar para leer temas de visión por computadora como reconocimiento de patrones y geometría 3D. Necesitas conocer álgebra lineal para poder entender completamente algunos conceptos de la visión por computadora como la reducción de dimensionalidad. Después de entender los fundamentos de la visión por computadora, también debes construir tu conocimiento en aprendizaje profundo, especialmente en Redes Neuronales Convolucionales (CNN).

### 💻 Programación

Python será suficiente para diseño y prototipado, pero si quieres hacer algún
trabajo embebido, también debes estar familiarizado con C++.

### 🧰 Herramientas

OpenCV es la herramienta principal para visión por computadora, y Numpy es una herramienta importante para procesamiento y análisis de datos. Debes conocerlas. Nunca se sabe, pero debes saber qué herramientas están disponibles y cómo usarlas. Cómo usarlas. Otra herramienta con la que necesitas familiarizarte es el framework de aprendizaje profundo. Frameworks. Puedes comenzar con Keras que es el más fácil de aprender y luego aprender Tensorflow o PyTorch.
