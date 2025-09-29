---
description: SDK de Gestión de Tráfico DeepStream
title: SDK de Gestión de Tráfico DeepStream
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Traffic-Management-DeepStream-SDK
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Sistema Inteligente de Gestión de Tráfico usando SDK DeepStream

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## Descripción General

A medida que las ciudades crecen día a día, también lo hace el número de vehículos en las carreteras. Debido a esto, la congestión del tráfico también crece rápidamente y esto a su vez puede impactar fuertemente en el desarrollo de un país. Esta wiki propone una solución para este problema usando visión artificial. El video en streaming de las cámaras CCTV ya desplegadas en cada semáforo puede ser capturado, realizar detección de objetos para detectar todos los vehículos y luego controlar los semáforos según la congestión vehicular. Además, estos datos pueden ser enviados a una base de datos junto con la marca del vehículo y el número de peatones para análisis posterior.

Para esta aplicación de visión artificial, usaremos el SDK DeepStream de NVIDIA y realizaremos inferencia en el borde en un dispositivo NVIDIA Jetson. También, usaremos un modelo pre-entrenado para esta tarea del [Catálogo de Modelos NVIDIA NGC](https://catalog.ngc.nvidia.com/models) para hacer el proceso de despliegue rápido y fácil. El Catálogo de Modelos NVIDIA NGC proporciona un gran número de modelos pre-entrenados para muchas otras aplicaciones diferentes también.

## ¿Qué es el SDK DeepStream?

El [SDK DeepStream](https://developer.nvidia.com/deepstream-sdk) de NVIDIA ofrece un kit de herramientas completo de análisis de streaming para procesamiento multi-sensor basado en IA, video, audio y comprensión de imágenes. DeepStream brinda flexibilidad de desarrollo al dar a los desarrolladores la opción de desarrollar en C/C++, Python, o usar programación gráfica de bajo código con Graph Composer. DeepStream viene con varios plugins y extensiones acelerados por hardware.

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

DeepStream está construido tanto para desarrolladores como para empresas y ofrece soporte extensivo de modelos de IA para modelos populares de detección de objetos y segmentación como los modelos de última generación SSD, YOLO, FasterRCNN, y MaskRCNN. También puedes integrar funciones y bibliotecas personalizadas en DeepStream.

Deepstream ofrece la flexibilidad desde prototipado rápido hasta soluciones de nivel de producción completa. También te permite elegir tu ruta de inferencia. Con integración nativa a NVIDIA Triton Inference Server, puedes desplegar modelos en frameworks nativos como PyTorch y TensorFlow para inferencia. Usando NVIDIA TensorRT para inferencia de alto rendimiento con opciones para soporte multi-GPU, multi-stream y batching, puedes lograr el mejor rendimiento posible.

## Hardware soportado

El SDK DeepStream es soportado por el siguiente hardware:

- Kits de Seeed:

  - reComputer J1010 construido con Jetson Nano
  - reComputer J1020 construido con Jetson Nano
  - reComputer J2011 construido con Jetson Xavier NX 8GB
  - reComputer J2012 construido con Jetson Xavier NX 16GB

- Placas Portadoras de Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - Placa Portadora A203
  - Placa Portadora A203 (Versión 2)
  - Placa Portadora A205
  - Placa Portadora A206

- Kits de Desarrollo Oficiales de NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- SoMs Oficiales de NVIDIA:
  
  - Módulo NVIDIA® Jetson Nano
  - Módulo NVIDIA® Jetson Xavier NX
  - Módulo NVIDIA® Jetson TX2 NX
  - Módulo NVIDIA® Jetson TX2
  - Módulo NVIDIA® Jetson AGX Xavier

## Prerrequisitos

- Cualquiera de los dispositivos Jetson mencionados anteriormente ejecutando JetPack
- Teclado y pantalla HDMI
- PC host con Windows, Linux o Mac
- Cámara web USB o cámara MIPI CSI compatible con tu dispositivo Jetson

## Comenzando

Aquí usaremos el [modelo DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet) que actúa como el detector principal, detectando los objetos de interés y para cada automóvil detectado el [modelo VehicleTypeNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet) y el [modelo VehicleMakeNet](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet) actúan como clasificadores secundarios determinando el tipo de automóvil y la marca del automóvil respectivamente. VehicleTypeNet clasifica lo siguiente: cupé, sedán, SUV, van, vehículo grande y camión. Mientras que VehicleMakeNet clasifica los siguientes automóviles: Acura, Audi, BMW, Chevrolet, Chrysler, Dodge, Ford, GMC, Honda, Hyundai, Infiniti, Jeep, Kia, Lexus, Mazda, Mercedes, Nissan, Subaru, Toyota y Volkswagen.

> El siguiente flujo de trabajo está probado en un [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) ejecutando [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)

**Paso 1:** Asegúrate de haber instalado correctamente todos los **Componentes SDK** y **DeepStream SDK** en el dispositivo Jetson. (consulta [esta wiki](https://wiki.seeedstudio.com/es/reComputer_J1020_A206_Flash_JetPack/) como referencia para la instalación)

**Nota:** Se recomienda usar **NVIDIA SDK Manager** para instalar todos los componentes SDK y DeepStream SDK

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

**Paso 5:** Cambia **sync=1** a **sync=0** bajo [sink0]

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**Paso 6:** Bajo [primary-gie], cambia model-engine-file a **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine**

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

**Paso 7:** Bajo [secondary-gie0], cambia model-engine-file a **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine**

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

**Paso 8:** Bajo [secondary-gie1], cambia model-engine-file a **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine**

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

**Paso 9:** Conecta la cámara, teclado, pantalla HDMI al dispositivo Jetson y ejecuta lo siguiente

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

Ahora puedes visualizar la demostración en la pantalla HDMI conectada como sigue

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

Si quieres probar otras demostraciones disponibles bajo **/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/**, simplemente puedes ejecutarlas como sigue

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>