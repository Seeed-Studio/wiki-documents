---
description: Este artículo ofrece una guía completa sobre la implementación de un NVR (grabador de video en red) con IA mediante la plataforma NVIDIA Jetson. Abarca todo, desde la configuración del hardware y la instalación del software hasta la configuración de DeepStream y VST para el análisis de video en tiempo real y su visualización en una pared de video.
title: AI NVR con reServer Jetson
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

# AI NVR con reServer Jetson

## Introducción

Con el avance de la tecnología de inteligencia artificial, los sistemas tradicionales de videovigilancia están evolucionando hacia una mayor inteligencia. El AI NVR (Network Video Recorder) combina la inteligencia artificial con la tecnología de videovigilancia, permitiendo no solo la grabación de video, sino también el análisis, reconocimiento y procesamiento en tiempo real del contenido de los videos. Esto mejora la eficiencia y precisión del monitoreo de seguridad. Este artículo presentará cómo implementar un AI NVR utilizando la plataforma NVIDIA Jetson.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/vst.png" />
</div>

En esta wiki, utilizaremos [Nvidia VST](https://docs.nvidia.com/mms/text/media-service/VST_Overview.html) and other microservices from the [Jetson Platform Service](https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started) y otros microservicios de Jetson Platform Service para implementar rápidamente un AI NVR local en un dispositivo Jetson. Aquí, usamos VST para agregar cámaras, empleamos el modelo de detección de peatones de DeepStream para detectar objetos y mostramos los resultados de la detección junto con la transmisión de video original en el muro de videos de VST.

### ¿Qué es "AI NVR"?

Un AI NVR es un dispositivo que integra funciones de grabación de video y análisis mediante el uso de inteligencia artificial. A diferencia de los NVR tradicionales, un AI NVR puede identificar automáticamente eventos clave en las grabaciones de video, como intrusiones u objetos perdidos, e incluso activar alarmas basadas en reglas predefinidas. Este nivel de inteligencia se da gracias a potentes capacidades de procesamiento y algoritmos de aprendizaje profundo.

### ¿Por qué elegir la plataforma reServer (NVIDIA Jetson)?

NVIDIA Jetson es una plataforma de computo embebido de alto rendimiento y bajo consumo energético lo cual la vuelve ideal para aplicaciones de AI y aprendizaje profundo. La plataforma Jetson está equipada con GPUs NVIDIA, que aceleran el proceso de inferencia en sistemas de aprendizaje profundo y tienen soporte para una amplia gama de frameworks y herramientas de AI, como TensorFlow y PyTorch.

reServer es un dispositivo de edge computing basado en la plataforma de Nvidia Jetson. Posee un diseño compacto, enfriamiento pasivo, 5x RJ45 GbE con PoE, 2x bahías de disco para 2.5" HDD/SSD y una gran cantidad de interfaces industriales, lo cual la hace una elección ideal como dispositivo de edge AI IoT.

## Prerrequisitos

- Dispositivo Jetson Orin(con el [jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-r363) OS).
- Cámara IP.

:::nota
En esta wiki, seguiremos los siguientes pasos utilizando la [reServer Industrial J4012](https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html), pero puedes intentarlo utilizando otros dispositivos Jetson.
:::

:::nota
Puedes seguir las instrucciones en [esta wiki](https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/#flash-jetpack) para grabar la última versión JetPack 6.0 en la reServer.
:::

<div align="center">
    <img width={1000} 
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110247.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Una 🖱️</font></span></strong>
    </a>
</div>

## Primeros pasos

### Hardware Connection
- Conectar el dispositivo Jetson a la red, mouse, teclado y a un monitor.
- Conectar la cámara IP a la red.


:::nota
Por su puesto, también puedes acceder remotamente al dispositivo Jetson usando SSH a través de la red local.
:::

### Paso 1. Install `nvidia-jetson-services`

Abre la terminal del dispositivo Jetson e ingresa el siguiente comando: 

```bash
sudo apt update
sudo apt install nvidia-jetson-services
```
Podrás encontrar varios microservicios en `/opt/nvidia/jetson/services/`.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/jps.png" />
</div>

### Paso 2. Modificar la configuración de ingreso

En el directorio `/opt/nvidia/jetson/services/ingress/config/`, crea un nuevo archivo llamado ai-nvr-nginx.conf y llénalo con la siguiente información:

```bash
# specify you service discovery config here

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

### Paso 3. Modificar la localización de almacenamiento de datos del NVR (opcional)

Abre el archivo `/opt/nvidia/jetson/services/vst/config/vst_storage.json` y cambia el directorio como sea necesario.

```bash
{
    "data_path": "/home/seeed/VST/storage/data/",
    "video_path": "/home/seeed/VST/storage/video/",
    "total_video_storage_size_MB": 10000
}
```

### Paso 4. Inicializa el servicio VST
El servicio VST depende de otros servicios, así que todos los servicios dependientes deben inicializarse juntos.

```bash
sudo systemctl start jetson-redis
sudo systemctl start jetson-ingress
sudo systemctl start jetson-vst
```

Tras inicializar los microservicios, el correspondiente contenedor Docker será creado.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/dockers.png" />
</div>

:::info
Ahora, puedes abrir la UI web del VST en el navegador.

En la red local, abre el navegador e ingresa: `http://<ip-of-jetson>:81/`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/webui.png" />
</div>

### Paso 5. Baja el archivo de configuración del AI NVR

Abre el navegador y ve a la [página de descarga](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources).

`Descarga(Esquina superior derecha)` --> `Browser(Descarga directa)`

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

### Paso 6. Modificar el archivo de configuración de DeepStream

Deseamos poder observar los resultados de la inferencia del modelo en tiempo real, así que necesitamos modificar el método de entrada de DeepStream. Aquí, podemos configurar el output como RTSP.


Localiza este fichero de configuración y actualiza su contenido.

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
    # name of the primary inference must be 'pgie' for test app to route streams here
    name: pgie
    properties:
      config-file-path: "/ds-config-files/pn26/config_infer_primary_RN34_PN26_960x544_dla0_orin_unprune_nx.txt"
      model-engine-file: "/pn26-files/dla0_pn26_jp6_halfmem_bs4.engine"
      unique-id: 1
      # be sure to rename model-engine-file whenever batch-size is changed
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

:::nota
Por favor identifica el modelo de tu dispositivo Jetson. En este caso, la Orin Nx 16GB está siendo usada. Si estás utilizando un modelo diferente, encuentra el archivo de configuración correspondiente y realiza las modificaciones pertinentes.
:::

  Añade la variable de entorno WDM_WL_NAME_IGNORE_REGEX en el archivo de redacción. Aquí, mi despositivo Jetson es el reServer J4012 que está basado en la Orin Nx 16Gb, así que necesito editar el siguiente fichero: 

`<path-of-ai_nvr>/compose_nx16.yaml`

```yaml
...
WDM_CONSUMER_GRP_ID: sdr-deepstream-cg
WDM_CLUSTER_CONTAINER_NAMES: '["deepstream", "vst"]'
WDM_WL_NAME_IGNORE_REGEX: ".*deepstream.*"
...
```


### Paso 7. Inicia la aplicación AI NVR

En la terminal de la Jetson, ingresa el comando correcto para inicializar la aplicación AI NVR.

```bash
cd <path-of-download>/files/ai_nvr

# Orin AGX: 
# sudo docker compose -f compose_agx.yaml up -d --force-recreate
# Orin NX16: 
sudo docker compose -f compose_nx16.yaml up -d --force-recreate
# Orin NX8: 
# sudo docker compose -f compose_nx8.yaml up -d --force-recreate
# Orin Nano: 
# sudo docker compose -f compose_nano.yaml up -d --force-recreate
```

Durante el proceso de inicialización, la aplicación creará contenedores Docket adicionales, como DeepStream.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/all_containers.png" />
</div>

### Paso 8. Configura el AI NVR local mediante la UI web

En este punto, has instalado e inicializado la aplicación AI NVR exitosamente en tu dispositivo Jetson.
El siguiente paso es configurar la cámara mediante la UI web.

En la red local, abre el navegador e ingresa: `http://<ip-of-jetson>:30080/vst/`

Manualmente configura la cámara IP y el stream de Deepstream.

`Sensor Management` -->  `Add device manually`  --> `Submit`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/confing_camera.png" />
</div>

:::info
Aquí, necesitamos ingresar una dirección válida de la cámara o la dirección RTSP de stream.
:::

:::danger
The DeepStream output stream is rtsp://192.168.49.161:8555/ds-test. 

Esto depende del fichero de configuración de DeepStream, que puede ser modificado de acuerdo a tus necesidades.
:::

:::danger
Cuando configures el stream de deepstream, necesitas añadir `deepstream` en el campo de 'camera name'
:::


Una vez la configuración es exitosa, puedes ver todas las transmisiones en el muro de videos.

`Video Wall` -->  `Select All`  --> `Start`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/result.png" />
</div>

### Cerrar la aplicación ai-nvr 

En la terminal Jetson, ingresa apropiadamente el comando para cerrar la aplicación AI NVR.

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

Los servicios deberían parar utilizando los siguientes comandos:

`sudo systemctl stop <service-name>`

such as:
```bash
sudo systemctl stop jetson-redis
sudo systemctl stop jetson-ingress
sudo systemctl stop jetson-vst
```

## Referencias
- https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started
- https://docs.nvidia.com/jetson/jps/moj-overview.html

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