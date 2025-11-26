---
description: Entrenar Modelo de Reconocimiento de Dígitos de Medidor de Agua con SenseCAP A1101
title: Entrenar Modelo de Reconocimiento de Dígitos de Medidor de Agua con SenseCAP A1101
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101
date: 11/26/2025
author: Twelve
---

# Entrenar Modelo de Reconocimiento de Dígitos de Medidor de Agua con SenseCAP A1101

## Descripción General

En este wiki, te enseñaremos cómo entrenar tu propio modelo de medidor para tu aplicación específica y luego desplegarlo fácilmente en el SenseCAP A1101. ¡Comencemos!
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"/></div>

## Preparación del hardware

- [SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)
- Cable USB Type-C
- Windows/ Linux/ Mac con acceso a internet

## Preparación del software

Utilizaremos las siguientes tecnologías de software en este wiki

- [Roboflow](https://roboflow.com) - para anotar
- [SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) - para entrenar
- [TensorFlow Lite](https://www.tensorflow.org/lite) - para inferencia

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"/></div>

Ahora configuremos el software. La configuración del software para Windows, Linux y Mac Intel será la misma, mientras que para Mac M1/M2 será diferente.

:::tip
**¿Qué es SenseCraft Model Assistant?** Seeed Studio SenseCraft Model Assistant es un proyecto de código abierto enfocado en IA embebida. Hemos optimizado excelentes algoritmos de OpenMMLab para escenarios del mundo real y hemos hecho la implementación más amigable para el usuario, logrando inferencia más rápida y precisa en dispositivos embebidos.
:::

### Windows, Linux, Intel Mac

- **Paso 1.** Asegúrate de que Python ya esté instalado en la computadora. Si no, visita [esta página](https://www.python.org/downloads/) para descargar e instalar la última versión de Python

- **Paso 2.** Instala la siguiente dependencia

```sh
pip3 install libusb1
```

### M1/ M2 Mac

- **Paso 1.** Instala Homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **Paso 2.** Instala conda

```sh
brew install conda
```

- **Paso 3.** Descarga libusb

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **Paso 4.** Instala libusb

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
Necesitas asegurarte de que tu versión de BootLoader sea mayor a 2.0.0 antes de poder cambiar el firmware para hacer lo siguiente. Si no estás seguro, por favor verifica la versión del BootLoader siguiendo los pasos mencionados en [esta sección](https://wiki.seeedstudio.com/es/Train-Deploy-AI-Model-A1101/#check-bootloader-version), y si la versión es menor a 2.0.0, por favor actualiza el BootLoader siguiendo los pasos mencionados en [esta sección](https://wiki.seeedstudio.com/es/Train-Deploy-AI-Model-A1101/#update-bootloader)
:::

## 1. Recopilar Datos de Imagen

- **Paso 1.** Conecta SenseCAP A1101 a la PC usando el cable USB Type-C

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Paso 2.** Haz doble clic en el botón de arranque para entrar en **modo de arranque**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Después de esto verás una nueva unidad de almacenamiento mostrada en tu explorador de archivos como **SENSECAP**

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Paso 3.** Arrastra y suelta [este archivo .uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) a la unidad **SENSECAP**

Tan pronto como el uf2 termine de copiarse en la unidad, la unidad desaparecerá. Esto significa que el uf2 ha sido subido exitosamente al módulo.

- **Paso 4.** Copia y pega [este script de Python](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) dentro de un archivo recién creado llamado **capture_images_script.py** en tu PC

- **Paso 5.** Ejecuta el script de Python para comenzar a capturar imágenes

```sh
python3 capture_images_script.py
```

Por defecto, capturará una imagen cada 300ms. Si quieres cambiar esto, puedes ejecutar el script en este formato

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

Por ejemplo, para capturar una imagen cada segundo

```sh
python3 capture_images_script.py --interval 1000
```

Después de que se ejecute el script anterior, SenseCAP A1101 comenzará a capturar imágenes de las cámaras integradas continuamente y las guardará todas dentro de una carpeta llamada **save_img**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"/></div>

También, abrirá una ventana de vista previa mientras está grabando.

Después de que tengas suficientes imágenes capturadas, haz clic en la ventana del terminal y presiona las siguientes combinaciones de teclas para detener el proceso de captura

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### Cambiar firmware del dispositivo después de la recopilación de imágenes

Después de que hayas terminado de grabar imágenes para el conjunto de datos, necesitas asegurarte de cambiar el firmware dentro del SenseCAP A1101 de vuelta al original, para que puedas cargar nuevamente modelos de detección de objetos para detección. Pasemos por los pasos ahora.

- **Paso 1.** Entra en **modo de arranque** en SenseCAP A1101 como se explicó antes

- **Paso 2.** Arrastra y suelta [este archivo .uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) a la unidad **SENSECAP** según tu dispositivo

Tan pronto como el uf2 termine de copiarse en la unidad, la unidad desaparecerá. Esto significa que el uf2 ha sido subido exitosamente al módulo.

## 2. Generar Conjunto de Datos con RoboFlow

[Roboflow](https://roboflow.com) es una herramienta de anotación basada en línea. Aquí podemos importar directamente las imágenes de video que hemos grabado en Roboflow y se exportarán como una serie de imágenes. Esta herramienta es muy conveniente porque nos permitirá ayudar a distribuir el conjunto de datos en "entrenamiento, validación y prueba". También esta herramienta nos permitirá agregar procesamiento adicional a estas imágenes después de etiquetarlas. Además, puede exportar fácilmente el conjunto de datos etiquetado en **formato COCO** que es exactamente lo que necesitamos!

- **Paso 1.** Haz clic [aquí](https://app.roboflow.com/login) para registrarte en una cuenta de Roboflow

- **Paso 2.** Haz clic en **Create New Project** para comenzar nuestro proyecto

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **Paso 3.** Completa **Project Name**, mantén la **License (CC BY 4.0)** y **Project type (Object Detection (Bounding Box))** como predeterminados. Bajo la columna **What will your model predict?**, completa un nombre de grupo de anotación.

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"/></div>

- **Paso 4.** Arrastra y suelta las imágenes que has capturado usando SenseCAP A1101

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"/></div>

- **Paso 5.** Después de que las imágenes sean procesadas, haz clic en **Finish Uploading**. Espera pacientemente hasta que las imágenes sean subidas.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **Paso 6.** Después de que las imágenes sean subidas, haz clic en **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **Paso 7.** Selecciona una imagen, dibuja una caja rectangular alrededor de los dígitos, elige la etiqueta como **digits** y presiona **ENTER**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"/></div>

- **Paso 8.** Repite lo mismo para las imágenes restantes

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"/></div>

- **Paso 9.** Continúa anotando todas las imágenes en el conjunto de datos

- **Paso 10.** Una vez que el etiquetado esté terminado, haz clic en **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **Paso 11.** A continuación dividiremos las imágenes entre "Train, Valid y Test". Si hay más conjuntos de datos, puede ser 80/20. Si los conjuntos de datos son menos, puede ser 85/15. Por favor nota que 'Train' no debería ser menos del 80.

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"/></div>

- **Paso 12.** Haz clic en **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **Paso 13.** Ahora puedes agregar **Preprocessing** y **Augmentation** si prefieres. Aquí **cambiaremos** la opción **Resize** a **192x192**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"/></div>

Aquí cambiamos el tamaño de imagen a 192x192 porque usaremos ese tamaño para entrenar y el entrenamiento será más rápido. De lo contrario, tendrá que convertir todas las imágenes a 192x192 durante el proceso de entrenamiento lo cual consume más recursos de CPU y hace el proceso de entrenamiento más lento.

- **Paso 14.** A continuación, procede con los valores predeterminados restantes y haz clic en **Generate**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"/></div>

- **Paso 15.** Haz clic en **Export**, selecciona **Format** como **COCO**, selecciona **show download code** y haz clic en **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"/></div>

Esto generará un fragmento de código que usaremos más tarde dentro del entrenamiento de Google Colab. Así que por favor mantén esta ventana abierta en segundo plano.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Entrenar usando SenseCraft Model Assistant en Google Colab

Después de que hayamos elegido un conjunto de datos público, necesitamos entrenar el conjunto de datos. Aquí usamos un entorno de Google Colaboratory para realizar entrenamiento en la nube. Además, usamos la API de Roboflow dentro de Colab para descargar fácilmente nuestro conjunto de datos.

Haz clic [aquí](https://github.com/Seeed-Studio/yolov5-swift/blob/master/notebooks/Google_Colab_Digital_Meter_Example.ipynb) para abrir un espacio de trabajo de Google Colab ya preparado, sigue los pasos mencionados en el espacio de trabajo y ejecuta las celdas de código una por una.

**Nota:** En Google Colab, en la celda de código bajo **Step 4**, puedes copiar directamente el fragmento de código de Roboflow como se mencionó anteriormente

Te guiará a través de lo siguiente:

- Configurar un entorno para el entrenamiento
- Descargar un conjunto de datos
- Realizar el entrenamiento
- Descargar el modelo entrenado

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"/></div>

## 3. Desplegar el modelo entrenado y realizar inferencia

Ahora moveremos el **model-1.uf2** que obtuvimos al final del entrenamiento al SenseCAP A1101.

- **Paso 1.** Instala la última versión de [Google Chrome](https://www.google.com/chrome) o [Microsoft Edge browser](https://www.microsoft.com/en-us/edge?r=1) y ábrelo

- **Paso 2.** Conecta el SenseCAP A1101 a tu PC mediante un cable USB Type-C

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Paso 3.** Haz doble clic en el botón de arranque del SenseCAP A1101 para entrar en modo de almacenamiento masivo

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Después de esto, verás una nueva unidad de almacenamiento mostrada en tu explorador de archivos como **SENSECAP**  

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Paso 4.** Arrastra y suelta el archivo **model-1.uf2** a la unidad **SENSECAP**

Tan pronto como el uf2 termine de copiarse en la unidad, la unidad desaparecerá. Esto significa que el uf2 se ha subido exitosamente al módulo.

**Nota:** Si tienes 4 archivos de modelo listos, puedes arrastrar y soltar cada modelo uno por uno. Suelta el primer modelo, espera hasta que termine de copiarse, entra en modo de arranque nuevamente, suelta el segundo modelo y así sucesivamente. Si solo has cargado un modelo (con índice 1) en el SenseCAP A1101, cargará ese modelo.

- **Paso 5.** [Haz clic aquí](https://vision-ai-demo.seeed.cn/) para abrir una ventana de vista previa del flujo de la cámara

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **Paso 6.** Haz clic en el botón **Connect**. Entonces verás una ventana emergente en el navegador. Selecciona **SenseCAP Vision AI - Paired** y haz clic en **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **Paso 7.** ¡Ve los resultados de inferencia en tiempo real usando la ventana de vista previa!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"/></div>

Como puedes ver arriba, los números están siendo detectados con cajas delimitadoras alrededor de ellos.

## 4. Realizar inferencia con SenseCAP A1101 en SenseCAP Mate

Además de realizar inferencia en el navegador, también podemos usar el SenseCAP Mate para implementar la inferencia del modelo, lo cual implementaremos paso a paso.

- **Paso 1.**  Primero, necesitamos borrar el firmware del A1101, lo cual se puede lograr usando erase_model.uf2. Luego actualizar el firmware del A1101 a la última versión y soltar el modelo de reconocimiento de dígitos del medidor de agua en el A1101

  *Firmware*: [erase_model.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/erase_model.uf2)、[SenseCAP-A1101_v02-00.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/sensecap_ai_v02-00.uf2)

  *Modelo*: [water_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_water_pre_6.uf2)、[pfld_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/pfld_meter_pre_5.uf2)、[digital_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_seg7_pre_6.uf2)

  ***Nota:*** water_meter y digital_meter ambos identifican el nombre del modelo como user-define6 en el escritorio y muestran digital_meter en el lado de la APP. El nombre del modelo identificado por pfld_meter es user-define5, y Point_meter se muestra en el lado de la APP. Los usuarios necesitan subir modelos según sus requisitos de uso reales durante el proceso de despliegue

- **Paso 2.**  [Haz clic aquí](https://vision-ai-demo.seeed.cn/) para abrir una ventana de vista previa del flujo de la cámara

- **Paso 3.**  Haz clic en el botón **Connect**. Entonces verás una ventana emergente en el navegador. Selecciona **SenseCAP A1101** - Paired y haz clic en Connect

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step3.jpg"/></div>

- **Paso 4(Opcional).** Selecciona Digital Meter en Model y Digital Meter en Algorithm, haz clic en Save y luego haz clic en Invoke. Y ahora podemos ver los resultados de inferencia en tiempo real usando la ventana de vista previa.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step4.jpg"/></div>

- **Paso 5.** Abre SenseCAP Mate y emparéjalo con tu propio A1101, selecciona el mismo Model y Algorithm que arriba. Luego haz clic en General y haz clic en Detect en la parte inferior.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step_all.jpg"/></div>

- **Paso 6.** Como puedes ver abajo, la Vista Previa de AI muestra los resultados del reconocimiento del medidor digital.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step5.jpg"/></div>

Después de completar los pasos anteriores, intentaremos agregar nuestro propio A1101 al dispositivo. A través de los siguientes 4 pasos, podemos ver los datos de resultado de la identificación del dispositivo en cualquier momento y lugar a través de la plataforma en la nube como SenseCAP Mate.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4stepfinal.png"/></div>

## Recursos

- **[Página Web]** [Documentación de SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)

- **[Página Web]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Página Web]** [Documentación de Roboflow](https://docs.roboflow.com)

- **[Página Web]** [Documentación de TensorFlow Lite](https://www.tensorflow.org/lite/guide)

- **[PDF]** [Especificación del Sensor de Visión AI LoRaWAN SenseCAP A1101](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [Guía del Usuario del Sensor de Visión AI LoRaWAN SenseCAP A1101](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [Catálogo de Sensores LoRaWAN SenseCAP S210X](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [FAQ para el Sensor de Visión AI LoRaWAN SenseCAP A1101](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## Soporte Técnico y Discusión de Productos

 <br />

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
