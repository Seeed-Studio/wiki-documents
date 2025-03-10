---
description: SDK de DeepStream para gestión de tráfico
title: SDK de DeepStream para gestión de tráfico
keywords:
  - Edge
  - Aplicación con la reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Traffic-Management-DeepStream-SDK
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Sistema de control de tráfico inteligente con DeepStream SDK

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## Descripción general

A medida que las ciudades crecen día a día, también lo hace el número de vehículos en las calles. Debido a esto, la congestión del tráfico aumenta rápidamente, lo que a su vez puede afectar gravemente al desarrollo de un país. Esta wiki propone una solución para este problema utilizando visión artificial. Se puede capturar el video en streaming de las cámaras de CCTV ya desplegadas en cada semáforo, realizar una detección de objetos para identificar todos los vehículos y luego controlar los semáforos según la congestión vehicular. Además, estos datos pueden ser enviados a una base de datos junto con la marca de los vehículos y el número de peatones para un análisis posterior.

Para esta aplicación de visión artificial, utilizaremos DeepStream SDK de NVIDIA y realizaremos la inferencia en el borde utilizando un dispositivo NVIDIA Jetson. Además, utilizaremos un modelo preentrenado para esta tarea del [Catálogo de modelos NVIDIA NGC](https://catalog.ngc.nvidia.com/models) para hacer el proceso de despliegue rápido y fácil. El Catálogo de Modelos de NVIDIA NGC ofrece una gran cantidad de modelos preentrenados para muchas otras aplicaciones diferentes.

## ¿Qué es DeepStream SDK?

El [DeepStream SDK de NVIDIA](https://developer.nvidia.com/deepstream-sdk) ofrece un conjunto completo de herramientas de análisis de streaming para el procesamiento de múltiples sensores basado en IA, comprensión de video, audio e imágenes. DeepStream aporta flexibilidad en el desarrollo al permitir a los desarrolladores elegir entre programar en C/C++, Python, o usar programación gráfica de bajo código con Graph Composer. DeepStream viene con varios complementos y extensiones acelerados por hardware.

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

DeepStream está diseñado tanto para desarrolladores como para empresas y ofrece un amplio soporte para modelos de IA populares de detección y segmentación de objetos, como los modelos de vanguardia SSD, YOLO, FasterRCNN y MaskRCNN. También puedes integrar funciones y bibliotecas personalizadas en DeepStream.

DeepStream ofrece flexibilidad desde la creación rápida de prototipos hasta soluciones de nivel de producción completo. También te permite elegir tu ruta de inferencia. Con la integración nativa al NVIDIA Triton Inference Server, puedes desplegar modelos en marcos nativos como PyTorch y TensorFlow para inferencia. Usando NVIDIA TensorRT para una inferencia de alto rendimiento con opciones de soporte para multi-GPU, multi-stream y procesamiento por lotes, puedes lograr el mejor rendimiento posible.

## Hardware soportado

DeepStream SDK es soportado por el siguiente Hardware:

- Kits de Seeed:

  - reComputer J1010 construida con la Jetson Nano
  - reComputer J1020 construida con la Jetson Nano
  - reComputer J2011 construida con la Jetson Xavier NX 8GB
  - reComputer J2012 construida con la Jetson Xavier NX 16GB

- Placas portadoras de Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

- Kits de desarrollo oficiales de NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- SoMs oficiales de NVIDIA:
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

## Prerequisitos

- Cualquiera de los dispositivos mencionados con JetPack
- Teclado y pantalla HDMI
- PC con Windows, Linux o Mac
- Webcam USB o Cámara MIPI CSI soportada por tu dispositivo Jetson

## Primeros pasos

Aquí utilizaremos el [modelo DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet), que actúa como el detector principal, detectando los objetos de interés. Para cada automóvil detectado, el [modelo VehicleTypeNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet) y el modelo [modelo VehicleMakeNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet) actúan como clasificadores secundarios, determinando el tipo de automóvil y la marca del automóvil, respectivamente VehicleTypeNet clasifica los siguientes tipos de vehículos: coupé, sedán, SUV, furgoneta, vehículo grande y camión. Mientras que VehicleMakeNet clasifica los siguientes automóviles: Acura, Audi, BMW, Chevrolet, Chrysler, Dodge, Ford, GMC, Honda, Hyundai, Infiniti, Jeep, Kia, Lexus, Mazda, Mercedes, Nissan, Subaru, Toyota y Volkswagen.

> El siguiente flujo de trabajo ha sido probado en un [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) que ejecuta [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)

**Paso 1:** Asegúrate de haber instalado correctamente todos los **componentes del SDK** y el **DeepStream SDK** en el dispositivo Jetson. (consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/) como referencia para la instalación).

**Nota:** Es recomendable utilizar el **NVIDIA SDK Manager** para instalar todos los componentes del SDK y el DeepStream SDK

**Paso 2:** Descarga los archivos de configuración

```sh
git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git
cd deepstream_reference_apps/deepstream_app_tao_configs/
sudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
```

**Paso 3:** Descarga los modelos

```sh
sudo apt install -y wget zip
cd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
sudo ./download_models.sh
```

**Paso 4:** Abre **deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt**

```sh
vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

**Pasoo 5:** Cambia **sync=1** a **sync=0** bajo [sink0]

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**Paso 6:** Bajo [primary-gie], cambia el model-engine-file a **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine**

```sh
[primary-gie]
enable=1
gpu-id=0
# Modify as necessary
model-engine-file=../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine
batch-size=1
#Required by the app for OSD, not a plugin property
bbox-border-color0=1;0;0;1
bbox-border-color1=0;1;1;1
bbox-border-color2=0;0;1;1
bbox-border-color3=0;1;0;1
gie-unique-id=1
config-file=config_infer_primary_dashcamnet.txt
```

**Paso 7:** Bajo [secondary-gie0], cambia el model-engine-file a **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine**

```sh
[secondary-gie0]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=4
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehiclemakenet.txt
```

**Paso 8:** Bajo [secondary-gie1], cambia el model-engine-file a **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine**

```sh
[secondary-gie1]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=5
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehicletypenet.txt
```

**Paso 9:** Conecta la cámara, el teclado y el monitor HDMI al dispositivo Jetson y ejecuta el siguiente comando:

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```
Ahora podrás visualizar el demo en el monitor HDMI conectado como se muestra a continuación.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

Si quieres probar otros demos disponibles bajo **/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/**, puedes correrlos como se muestra a continuación:

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
