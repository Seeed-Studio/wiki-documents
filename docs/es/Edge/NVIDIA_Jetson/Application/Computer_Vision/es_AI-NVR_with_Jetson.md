---
description: Este artículo proporciona una guía completa sobre la implementación de un NVR con IA (Grabador de Video en Red) utilizando la plataforma NVIDIA Jetson. Cubre todo desde la configuración del hardware y la instalación del software hasta la configuración de DeepStream y VST para análisis de video en tiempo real y visualización en una pared de video.
title: NVR con IA con Jetson Orin
keywords:
- reComputer
- AI NVR
- Jetpack6.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ai_nvr_with_jetson
last_update:
  date: 08/12/2024
  author: Youjiang
---

# NVR con IA con reServer Jetson

## Introducción

Con el avance de la tecnología de inteligencia artificial, los sistemas tradicionales de videovigilancia están evolucionando hacia una mayor inteligencia. El NVR con IA (Grabador de Video en Red) combina la inteligencia artificial con la tecnología de videovigilancia, permitiendo no solo la grabación de video sino también el análisis, reconocimiento y procesamiento en tiempo real del contenido de video. Esto mejora la eficiencia y precisión del monitoreo de seguridad. Este artículo introducirá cómo implementar un NVR con IA utilizando la plataforma NVIDIA Jetson.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/vst.png" />
</div>

En este wiki, utilizaremos [Nvidia VST](https://docs.nvidia.com/mms/text/media-service/VST_Overview.html) y otros microservicios del [Jetson Platform Service](https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started) para desplegar rápidamente un NVR con IA local en un dispositivo Jetson.
Aquí, usamos VST para agregar cámaras, empleamos el modelo de detección de peatones de DeepStream para detectar objetos, y mostramos los resultados de detección junto con el flujo de video original en la pared de video VST.

### ¿Qué es un NVR con IA?

Un NVR con IA es un dispositivo que integra funciones de grabación de video y análisis de inteligencia artificial. A diferencia de los NVR tradicionales, un NVR con IA puede identificar automáticamente eventos clave en las grabaciones de video, como intrusiones u objetos faltantes, e incluso activar alarmas basadas en reglas predefinidas. Este nivel de inteligencia depende de capacidades de cómputo potentes y algoritmos de aprendizaje profundo.

### ¿Por qué elegir la plataforma reServer (NVIDIA Jetson)?

NVIDIA Jetson es una plataforma de cómputo embebido de alto rendimiento y bajo consumo de energía, lo que la hace ideal para aplicaciones de IA y aprendizaje profundo. La plataforma Jetson está equipada con GPUs NVIDIA, que aceleran el proceso de inferencia de aprendizaje profundo y soportan una amplia gama de herramientas y marcos de IA, como TensorFlow y PyTorch.

reServer es un dispositivo de cómputo en el borde basado en la plataforma Nvidia Jetson. Cuenta con un diseño compacto, enfriamiento pasivo, 5x RJ45 GbE con PoE, 2x bahías de unidades para HDD/SSD de 2.5", y una gran cantidad de interfaces industriales, lo que lo convierte en una opción ideal para dispositivos IoT de IA en el borde.

## Prerrequisitos

- Dispositivo Jetson Orin (con el SO [jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-r363)).
- Cámara IP.

:::note
En este wiki, realizaremos las siguientes tareas utilizando el [reServer Industrial J4012](https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html), pero también puedes intentar usar otros dispositivos Jetson.
:::

:::note
Podemos seguir las instrucciones en [este wiki](https://wiki.seeedstudio.com/es/reServer_Industrial_Getting_Started/#flash-jetpack) para flashear el sistema JetPack 6.0 más reciente en el reServer.
:::

<div align="center">
    <img width={1000} 
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110247.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Comenzando

### Conexión del Hardware
- Conecta el dispositivo Jetson a la red, ratón, teclado y monitor.
- Conecta la Cámara IP a la red.

:::note
Por supuesto, también puedes acceder remotamente al dispositivo Jetson vía SSH a través de la red local.
:::

### Paso1. Instalar `nvidia-jetson-services`

Abre la terminal del dispositivo Jetson e ingresa:

```bash
sudo apt update
sudo apt install nvidia-jetson-services
```

Luego podemos encontrar que hay muchos microservicios en `/opt/nvidia/jetson/services/`.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/jps.png" />
</div>

### Paso 2. Modificar la configuración de ingress

En el directorio `/opt/nvidia/jetson/services/ingress/config/`, crea un nuevo archivo llamado ai-nvr-nginx.conf y llénalo con:

```bash
# especifica tu configuración de descubrimiento de servicios aquí

location /emdx/ {
    rewrite ^/emdx/?(.*)$ /$1 break;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    access_log /var/log/nginx/access.log timed_combined;
    proxy_pass http://emdx_api;
}

location /ws-emdx/ {
    rewrite ^/ws-emdx/?(.*)$ /$1 break;
    proxy_set_header Host $host;
    proxy_pass http://emdx_websocket;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}

```

### Paso 3. Modificar la ubicación de almacenamiento de datos del NVR (opcional)

Abre el archivo `/opt/nvidia/jetson/services/vst/config/vst_storage.json` y cambia el directorio según sea necesario.

```bash
{
    "data_path": "/home/seeed/VST/storage/data/",
    "video_path": "/home/seeed/VST/storage/video/",
    "total_video_storage_size_MB": 10000
}
```

### Paso 4. Iniciar el servicio VST
El servicio VST depende de otros servicios, por lo que todos los servicios dependientes necesitan iniciarse juntos.

```bash
sudo systemctl start jetson-redis
sudo systemctl start jetson-ingress
sudo systemctl start jetson-vst
```

Después de que los microservicios se inicien, se crearán los contenedores de Docker correspondientes.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/dockers.png" />
</div>

:::info
Ahora, podemos abrir la interfaz web de VST en el navegador.

En la red local, abre el navegador e ingresa: `http://<ip-of-jetson>:81/`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/webui.png" />
</div>

### Paso 5. Descargar el archivo de configuración de AI NVR

Abre el navegador y ve a la [página de descarga](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources).

`Download(Esquina superior derecha)` --> `Browser(Descarga Directa)`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/download_ai_nvr.png" />
</div>

```bash
cd <path-of-download>
unzip files.zip
cd files
tar -xvf ai_nvr-1.1.0.tar.gz
cd ai_nvr
```

### Paso6. Modificar el archivo de configuración de DeepStream

Queremos poder ver los resultados de inferencia del modelo en tiempo real, por lo que necesitamos modificar el método de entrada de DeepStream. Aquí, podemos configurarlo para que genere como RTSP.


Localiza este archivo de configuración y actualiza su contenido.

`<path-of-ai_nvr>/config/deepstream/pn26/service-maker/ds-config-0_nx16.yaml`

<details>

<summary> ds-config-0_nx16.yaml </summary>

```yaml
################################################################################
# SPDX-FileCopyrightText: Copyright (c) 2024 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: MIT
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish, distribute, sublicense,
# and/or sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
# DEALINGS IN THE SOFTWARE.
################################################################################

deepstream:
  nodes:
  - type: nvinfer
    # el nombre de la inferencia primaria debe ser 'pgie' para que la aplicación de prueba enrute los flujos aquí
    name: pgie
    properties:
      config-file-path: "/ds-config-files/pn26/config_infer_primary_RN34_PN26_960x544_dla0_orin_unprune_nx.txt"
      model-engine-file: "/pn26-files/dla0_pn26_jp6_halfmem_bs4.engine"
      unique-id: 1
      # asegúrate de renombrar model-engine-file cada vez que se cambie batch-size
      batch-size: 4
  - type: nvtracker
    name: tracker
    properties:
      ll-config-file: "/ds-config-files/pn26/config_tracker_NvDCF_PNv2.6_Interval_1_PVA.yml;/ds-config-files/pn26/config_tracker_NvDCF_PNv2.6_Interval_1_PVA.yml"
      ll-lib-file: "/opt/nvidia/deepstream/deepstream/lib/libnvds_nvmultiobjecttracker.so"
      sub-batches: "2:2"
      tracker-width: 960
      tracker-height: 544
  - type: nvmsgconv
    name: msgconv
    properties:
      payload-type: 1
  - type: nvmsgbroker
    name: msgbroker
    properties:
      config: "/ds-config-files/pn26/cfg_redis.txt"
      proto-lib: "/opt/nvidia/deepstream/deepstream/lib/libnvds_redis_proto.so"
      conn-str: "localhost;6379;test"
      topic: "test"
      sync: false
      async: false
  - type: queue
    name: checkpoint
  - type: nvmultistreamtiler
    name: tiler
    properties:
      width: 1280
      height: 720
  - type: nvdsosd
    name: osd
  - type: nvvideoconvert
    name: converter
  - type: tee
    name: tee
  - type: queue
    name: queue_tracker
  - type: queue
    name: queue_tee
  - type: queue
    name: queue_tiler
  - type: queue
    name: queue_msgconv
  - type: queue
    name: queue_converter
  - type: queue
    name: queue_osd
  - type: queue
    name: queue_sink
  - type: queue
    name: queue_msgbroker
  - type: nvvideoconvert
    name: converter1
  - type: nvrtspoutsinkbin
    name: sink
    properties:
      rtsp-port: 8555
      sync: false
  - type: sample_video_probe.sample_video_probe
    name: osd_counter
    properties:
      font-size: 15
  edges:
    pgie: [queue_tracker, osd_counter]
    queue_tracker: tracker
    tracker: queue_tee
    queue_tee: tee
    tee: [queue_tiler, queue_msgconv]
    queue_tiler: tiler
    tiler: queue_converter
    queue_converter: converter
    converter: queue_osd
    queue_osd: osd
    osd: queue_sink
    queue_sink: converter1
    converter1: sink
    queue_msgconv: msgconv
    msgconv: queue_msgbroker
    queue_msgbroker: msgbroker
```

</details>

:::note
Ten en cuenta el modelo de tu dispositivo Jetson. En este caso, se está utilizando el módulo Orin Nx 16GB. Si estás usando un modelo diferente, localiza el archivo de configuración correspondiente y realiza las modificaciones necesarias.
:::

Añade la variable de entorno WDM_WL_NAME_IGNORE_REGEX bajo SDR en el archivo compose.
Aquí, mi dispositivo Jetson es reServer J4012 que está alimentado por Orin Nx 16GB, así que necesito editar este archivo compose:

`<ruta-de-ai_nvr>/compose_nx16.yaml`

```yaml
...
WDM_CONSUMER_GRP_ID: sdr-deepstream-cg
WDM_CLUSTER_CONTAINER_NAMES: '["deepstream", "vst"]'
WDM_WL_NAME_IGNORE_REGEX: ".*deepstream.*"
...
```

### Paso7. Iniciar la aplicación AI NVR

En la terminal de Jetson, ingresa el comando apropiado para iniciar la aplicación AI NVR.

```bash
cd <ruta-de-descarga>/files/ai_nvr

# Orin AGX: 
# sudo docker compose -f compose_agx.yaml up -d --force-recreate
# Orin NX16: 
sudo docker compose -f compose_nx16.yaml up -d --force-recreate
# Orin NX8: 
# sudo docker compose -f compose_nx8.yaml up -d --force-recreate
# Orin Nano: 
# sudo docker compose -f compose_nano.yaml up -d --force-recreate
```

Durante el proceso de inicio, la aplicación creará contenedores Docker adicionales, como DeepStream.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/all_containers.png" />
</div>

### Paso 8. Configurar el AI NVR local a través de la interfaz web

En este punto, hemos instalado y iniciado exitosamente la aplicación AI NVR en el dispositivo Jetson.
El siguiente paso es configurar la cámara a través de la interfaz web.

En la red local, abra el navegador e ingrese: `http://<ip-of-jetson>:30080/vst/`

Configure manualmente la cámara IP y el flujo de video de salida de Deepstream.

`Sensor Management` -->  `Add device manually`  --> `Submit`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/confing_camera.png" />
</div>

:::info
Aquí, necesitamos ingresar una dirección de cámara válida o la ruta del flujo RTSP.
:::

:::danger
El flujo de salida de DeepStream es rtsp://192.168.49.161:8555/ds-test. 

Esto depende del archivo de configuración de DeepStream, que puede modificarse según sus necesidades.
:::

:::danger
Al configurar el flujo de salida de deepstream, necesitamos agregar el campo `deepstream` en el nombre de la cámara
:::


Una vez que la configuración sea exitosa, puede ver todas las transmisiones en el muro de video.

`Video Wall` -->  `Select All`  --> `Start`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/result.png" />
</div>

### Cerrar la aplicación ai-nvr

En la terminal de Jetson, ingrese el comando apropiado para cerrar la aplicación AI NVR.

```bash
cd <path-of-download>/files/ai_nvr

# Orin AGX: 
# sudo docker compose -f compose_agx.yaml down --remove-orphans

# Orin NX16: 
sudo docker compose -f compose_nx16.yaml down --remove-orphans

# Orin NX8: 
# sudo docker compose -f compose_nx8.yaml down --remove-orphans

# Orin Nano: 
# sudo docker compose -f compose_nano.yaml down --remove-orphans
```

Los servicios pueden detenerse usando los comandos:

`sudo systemctl stop <service-name>`

como por ejemplo:

```bash
sudo systemctl stop jetson-redis
sudo systemctl stop jetson-ingress
sudo systemctl stop jetson-vst
```

## Referencias
- https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started
- https://docs.nvidia.com/jetson/jps/moj-overview.html

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