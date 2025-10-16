---
description: Este wiki demuestra cómo usar la estimación de pose con yolov8 para controlar tus luces.
title: Control de Luces Basado en Pose con Node-Red y Raspberry Pi con AIkit
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
  - AI kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/pose_based_light_control_with_nodered_and_rpi_with_aikit
last_update:
  date: 07/26/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Control de Luces Basado en Pose con Node-Red y Raspberry Pi con AIkit

## Introducción

Este wiki te guiará sobre cómo ejecutar YOLOv8 usando un kit de IA, usar YOLOv8 para monitorear tu postura, y finalmente controlar tus luces basándose en tu postura. En este proyecto, una cámara USB captura tu pose, y yolov8n ejecutándose en [AI kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) con [reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) para detectar tu pose. El video procesado, mostrando la pose detectada, se transmite luego en tiempo real a [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html) usando [gstreamer](https://gstreamer.freedesktop.org/). Mientras tanto, las coordenadas de las articulaciones se envían usando [mqtt](https://mqtt.org/) a [Node-RED](https://nodered.org/) que se despliega en el reComputer R1000. Por último, el flujo de Node-RED controla las luces inteligentes basándose en las coordenadas de las articulaciones.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" alt="pir" width={1000} height="auto"/></p>

## Preparar Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>reTerminal DM</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/k/sku114070262.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Ejecutar este proyecto

### En reComputer R1000

#### Paso 1: Instalar el kit de IA

Por favor consulta [esta wiki](https://wiki.seeedstudio.com/es/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/) y asegúrate de instalar el kit de IA en tu reComputer R1000.

#### Paso 2: Instalar el proyecto

Descarga el proyecto con el siguiente comando:

```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### Paso 3: Ejecutar la estimación de pose

Edita el archivo ```pose_estimation.py``` y cambia el ```mqtt_server``` a la dirección IP de tu reTerminal DM. Y cambia el ```Gstreamer pipeline``` a la dirección IP de tu reTerminal DM. Y luego ejecuta el comando a continuación para iniciar la estimación de pose.

```
bash run.sh
```

#### Paso 4: Instalar Node-RED

Instalar Node-RED. Puedes descargar Node-RED con solo una línea de comando:

```
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

#### Paso 5: Importar flows.json

Importar archivos del proyecto. Haz clic en ```Settings => Import``` en la esquina superior derecha, ```click select a file``` para importar en la nueva ventana emergente, selecciona ```flows.jeson```, y finalmente haz clic en ```Import```.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_import.gif" alt="pir" width={1000} height="auto"/></p>

#### Paso 6: Descargar los controles requeridos

Después de importar el archivo del proyecto, el sistema puede indicar que tu node-red carece de algunos controles. Necesitas descargar los siguientes controles:

```
@bartbutenaers/node-red-rtsp-to-mjpeg
@chirpstack/node-red-contrib-chirpstack
@flowfuse/node-red-dashboard
node-bacnet-contrib-extended
node-red-contrib-buffer-parser
node-red-contrib-image-output
node-red-contrib-image-tools
node-red-contrib-modbus
node-red-contrib-msg-speed
node-red-contrib-multipart-stream-encoder
node-red-contrib-onvif
node-red-contrib-play-audio
node-red-dashboard
node-red-node-base64
node-red-node-mysql
node-red-node-pi-gpio
node-red-node-ping
node-red-node-serialport
node-red-node-smooth
node-red-sensecap-paas
node-red-node-random
```

Tomando ```node-red-node-random``` como ejemplo, haz clic en ```Settings => Manage Palette``` en la esquina superior derecha, selecciona la columna ```Install``` en la nueva ventana, ingresa ```node-red-node-random```, y finalmente haz clic en el botón ```Install```.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_dowload_patelle.gif" alt="pir" width={1000} height="auto"/></p>

#### Paso 7: Desplegar el proyecto

Haz clic en el botón deploy en la esquina superior derecha y el sistema funcionará normalmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_deploy.png" alt="pir" width={1000} height="auto"/></p>

### En reTerminal DM

#### Paso 1: Instalar gstreamer en reTerminal DM

Descarga gstreamer con el siguiente comando:

```
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```

#### Paso 2: Instalar el repositorio

Descarga el repositorio con el siguiente comando:

```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### Paso 3: Ejecutar el receptor de video

```
python3 video_receiver.py
```

## Resultado

Mostramos esta demostración en una transmisión en vivo de YouTube que comienza en ```19:47```. Y puedes ver que la luz se encenderá cuando la presentadora aplauda, luego la luz se apagará cuando la presentadora agite su mano, disfruta esta demostración:

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/v-S6_tH75NI" title="Making Next Gadget: AI Boosted RPi for Real World Applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
