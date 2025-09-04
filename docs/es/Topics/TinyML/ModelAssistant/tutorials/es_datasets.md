---
description: Conjuntos de Datos Para Model Assistant
title: Conjuntos de Datos
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Tutorials_Datasets
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Conjuntos de Datos

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) soporta una variedad de conjuntos de datos. Puedes navegar y descargar diferentes conjuntos de datos en Internet, o anotar y crear tus propios conjuntos de datos.

## Conjuntos de Datos de Internet

### [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) actualmente proporciona los siguientes conjuntos de datos oficiales para entrenamiento y pruebas de modelos correspondientes.

Por favor asegúrate de estar en el **Directorio Raíz de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)** antes de ejecutar el comando para descargar conjuntos de datos específicos. El comando descargará automáticamente los conjuntos de datos y los guardará en una carpeta llamada `datasets` en el directorio actual, y finalmente los descomprimirá.

- [Descargar Conjuntos de Datos de Medidor Personalizado](https://files.seeedstudio.com/sscma/datasets/meter.zip):

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/meter.zip -P datasets && unzip datasets/meter.zip -d datasets
  ```

- [Descargar Conjuntos de Datos COCO_MASK](https://files.seeedstudio.com/sscma/datasets/coco_mask.zip):

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/coco_mask.zip -P datasets && unzip datasets/coco_mask.zip -d datasets
  ```

### Roboflow

[Roboflow](https://public.roboflow.com/) es una plataforma de alojamiento gratuita para conjuntos de datos públicos de visión por computadora, que admite formatos incluyendo CreateML JSON, COCO JSON, Pascal VOC XML, YOLO y Tensorflow TFRecords, así como versiones reducidas y mejoradas adicionales de los conjuntos de datos correspondientes que han sido añadidas.

:::tip

Recomendamos encarecidamente buscar conjuntos de datos en Roboflow, y puedes descargar cientos de conjuntos de datos diferentes de Roboflow de forma gratuita para satisfacer tus necesidades específicas simplemente registrándote para obtener una cuenta.

:::

puedes encontrar algunos conjuntos de datos para [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) en Roboflow a continuación:

| Conjunto de Datos | Descripción |
| -- | -- |
| [Digital Meter Water](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-water/dataset/1) | Conjunto de Datos de Medidor Digital de Agua |
| [Digital Meter Seg7](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-seg7/dataset/1) | Conjunto de Datos de Medidor Digital Seg7 |
| [Digit Seg7 Classification](https://universe.roboflow.com/seeed-studio-ovcjn/digit-seg7/1) | Conjunto de Datos de Clasificación de Dígitos Seg7 |

### Kaggle

[Kaggle](https://www.kaggle.com/) es una plataforma de competencias de modelado de datos y análisis de datos. Las empresas e investigadores pueden publicar datos en ella, y los estadísticos y expertos en minería de datos pueden competir para producir los mejores modelos. Kaggle también ofrece miles de conjuntos de datos, y puedes visitar [conjuntos de datos de Kaggle](https://www.kaggle.com/datasets) para elegir el adecuado para tus necesidades.

## Conjuntos de Datos Personalizados

Crear un conjunto de datos personalizado generalmente involucra los siguientes pasos.

1. **Recopilar Datos:** Recopilar datos relacionados con el dominio del problema. Estos datos pueden estar en formatos de texto, imagen, audio o video.

2. **Organizar Datos:** Los datos recopilados se limpian, [anotan](#dataset-annotation) y se eliminan duplicados para garantizar precisión y consistencia. Este paso es crucial para asegurar la precisión del modelo entrenado.

3. **Dividir Conjunto de Datos:** El conjunto de datos organizado se divide en conjunto de entrenamiento, conjunto de validación y conjunto de prueba. Usualmente, se utiliza una proporción de 70%, 15% y 15% para dividir el conjunto de datos.

4. **Convertir Formato de Datos:** Convertir el conjunto de datos organizado a un formato que pueda ser leído por el modelo, como formato de texto, formato de imagen, etc.

5. **Cargar Conjunto de Datos:** Cargar el conjunto de datos convertido en el modelo para entrenamiento y pruebas. Al cargar el conjunto de datos, es importante usar el cargador de datos apropiado y el tamaño de lote.

6. **Mejora de Datos (opcional, recomendado que sea hecho por [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)):** Realizar mejora de datos en el conjunto de datos, como rotar, voltear, recortar, etc., para aumentar la diversidad y número de conjuntos de datos.

## Anotación de Conjuntos de Datos

Etiquetar un conjunto de datos es el proceso de clasificar o etiquetar muestras en un conjunto de datos, lo cual generalmente requiere intervención manual.

El proceso de etiquetar un conjunto de datos es muy crítico y determina la calidad del modelo entrenado. Aquí hay algunas formas y herramientas comunes para etiquetar conjuntos de datos.

- **Anotación Manual:** Anotar el conjunto de datos a mano, para cada muestra, asegura la precisión de la anotación, pero es más lenta.

- **Anotación Semi-automática:** Aplicar los resultados de la anotación manual a otros conjuntos de datos para reducir el tiempo de anotación, pero la precisión de la anotación puede reducirse.

- **Anotación Automática:** Anotación automática de datos usando algunos modelos algorítmicos, como extracción de palabras clave, clasificación de texto, etc. Aunque puede mejorar la eficiencia de anotación, la precisión de la anotación también puede verse afectada.

Herramientas de etiquetado de datos comúnmente utilizadas:

- [LabelImg](https://github.com/heartexlabs/labelImg): Una herramienta para etiquetado de imágenes, que soporta varios formatos de etiquetado, como PASCAL VOC, YOLO, etc.

- [Labelbox](https://labelbox.com/): Una herramienta de etiquetado en línea que soporta imagen, texto, video y otros formatos con varias plantillas de etiquetado y plantillas de etiquetado personalizadas.

- [Doccano](https://github.com/doccano/doccano): Una herramienta de anotación de código abierto para clasificación de texto y anotación de secuencias, soporta una variedad de formatos de anotación, como NER, POS, etc.

- [Annotator](https://github.com/openannotation/annotator): Una herramienta de anotación en línea ligera que soporta imagen, texto, audio y otros formatos.

- [VGG Image Annotator (VIA)](https://gitlab.com/vgg/via): Una herramienta de código abierto para anotación de imágenes, que soporta una variedad de formatos de anotación, como PASCAL VOC, YOLO, etc.

- [COCO Annotator](https://github.com/jsbroks/coco-annotator): Una herramienta de anotación de imágenes y videos basada en web para detección de objetivos, segmentación, anotación de puntos clave y otras tareas.

Las anteriores son algunas herramientas de anotación de datos comunes, diferentes herramientas son adecuadas para diferentes tipos de conjuntos de datos y necesidades de anotación, puedes elegir según las necesidades reales.
