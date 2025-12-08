---
description: Este wiki demuestra cómo usar viseron en recomputer.
title: Viseron en reComputer
keywords:
  - reComputer
  - viseron
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif
slug: /es/viseron_on_recomputer
last_update:
  date: 12/07/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Viseron en reComputer

## Introducción

[Viseron](https://github.com/roflcoopter/viseron) es un software NVR y de Visión Artificial autoalojado y solo local implementado en Python. El objetivo de Viseron es ser fácil de configurar y usar, mientras sigue siendo potente y flexible. Está diseñado para ejecutarse en una red local, sin dependencias externas y sin requerir servicios en la nube.

## Prerrequisitos

### Requisitos de Hardware

<table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
</table>

### Requisitos de Software

### Actualizar sistema

Por favor usa el siguiente comando para ejecutar.

```bash
sudo apt update
sudo apt upgrade -y
```

### Descargar docker y docker compose

Por favor usa el siguiente comando para instalar docker.

```bash
wget https://get.docker.com -O get-docker.sh
chmod +x 
sudo sh get-docker.sh
sudo systemctl start docker
sudo systemctl enable docker
docker --version
```

El resultado se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/docker_install.png" alt="pir" width="800" height="auto"/></p>

Por favor usa el siguiente comando para instalar docker compose.

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r .tag_name)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

El resultado se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/docker_compose_version.png" alt="pir" width="800" height="auto"/></p>

## Descargar Viseron

### Crear carpetas

Por favor usa el siguiente comando para crear carpetas

```bash
cd ~
mkdir -p viseron_data/{timelapse,thumbnails,snapshots,segments,models,event_clips,config}

```

### Descargar Modelo

Por favor usa el siguiente comando para descargar el modelo `hef` para el dispositivo hailo8.

```bash
cd ~/viseron_data/models
wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.16.0/hailo8/yolov8n.hef
```

### Crear `docker-compose.yaml`

Por favor usa el siguiente comando para crear `docker-compose.yaml`.

```bash
cd ~ && nano docker-compose.yaml
```

```yaml
services:
  viseron:
    image: roflcoopter/viseron:latest
    container_name: viseron
    shm_size: "1024mb"
    volumes:
      - /home/ain/viseron_data/segments:/segments
      - /home/ain/viseron_data/snapshots:/snapshots
      - /home/ain/viseron_data/thumbnails:/thumbnails
      - /home/ain/viseron_data/event_clips:/event_clips
      - /home/ain/viseron_data/timelapse:/timelapse
      - /home/ain/viseron_data/config:/config
      - /etc/localtime:/etc/localtime:ro
      - /home/ain/viseron_data/models:/models
    ports:
      - 8888:8888
    devices:
      - /dev/hailo0
```

## Configurar Viseron

### Ejecutar Viseron

Por favor usa el siguiente comando para ejecutar viseron

```bash
cd ~
docker compose up
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/viseron/docker.png" alt="pir" width="800" height="auto"/></p>

### Abrir puerto

Por favor abre el puerto 8888, verás un resultado como el siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/viseron/UI.png" alt="pir" width="800" height="auto"/></p>

### Configurar

Por favor sigue los pasos a continuación para configurar `Viseron`, y reemplaza la información de configuración según la dirección de tu cámara.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/viseron/viseron_configure.png" alt="pir" width="800" height="auto"/></p>

```yaml
# Viseron Configuration Example - Resolving Hailo component and camera identifier mismatch
# Core concept: All components use the same camera identifier "cam_front"

# 1. Camera Configuration (FFmpeg Component)
# This is the foundation for all detection features. Ensure the identifier here is correctly referenced by other components.
ffmpeg:
  camera:
    cam_front:  # 🔑 Key identifier: other components must reference this name
      name: "Front Door"  # Camera display name (customizable)
      host: 10.1.1.200  # IP address of the camera
      port: 554            # RTSP port (usually 554)
      path: /cam/realmonitor?channel=1&subtype=1  # RTSP stream path (replace with your camera's actual path)
      username: admin
      password: passw0rd
      fps: 6  # Set the video stream frame rate
      recorder:
        idle_timeout: 1    # Idle timeout setting
        codec: h264        # Recording codec

# 2. Hailo Object Detector Configuration
# This component uses Hailo-8 AI acceleration hardware for object detection and must point to a configured camera.
hailo:
  object_detector:
    model_path: /models/yolov8n.hef  # 🔑 Important: Replace with the path to your HEF model file
    # Add the following line based on your Hailo hardware version (e.g., hailo8 or hailo8l)
    # hailo_arch: hailo8
    cameras:
      cam_front:  # ⬅️ Must exactly match the identifier defined in the ffmpeg section above
        fps: 2  # Detection frame rate (higher consumes more resources)
        scan_on_motion_only: false  # Set to true to perform AI detection only when motion is detected
        labels:
          - label: person  # Detect the "person" class
            confidence: 0.7  # Confidence threshold
            trigger_event_recording: true  # Trigger event recording when detected
          - label: car  # You can add other classes to detect
            confidence: 0.7

# 3. Motion Detector Configuration (MOG2 Component)
# Can provide pre-triggering for Hailo AI detection to save computational resources.
mog2:
  motion_detector:
    cameras:
      cam_front:  # ⬅️ Use the same consistent identifier
        fps: 2  # Motion detection frame rate

# 4. NVR (Network Video Recorder) Configuration
# Binds all the above components together and manages recording.
nvr:
  cam_front:  # ⬅️ Use the same consistent identifier
    motion_detector:  # Enable motion detection
      enabled: true
    object_detector:   # Enable object detection
      enabled: true
      interval: 0.5    # Object detection trigger interval

# (Optional) Logger level adjustment, can be set to 'debug' for troubleshooting
logger:
  default_level: info
```

### Ejecutar

Por favor sigue los pasos a continuación para ejecutar el software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/viseron/run.png" alt="pir" width="800" height="auto"/></p>

## Resultado

Una vez que hayamos configurado todo, podemos ver la transmisión en vivo de la cámara actual. Hemos establecido los fps a 2, por lo que el video puede parecer un poco entrecortado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/viseron/viseron.gif" alt="pir" width="1000" height="auto"/></p>

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
