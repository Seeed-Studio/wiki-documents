---
description: Vigilancia doméstica inteligente DIY con IA usando Frigate NVR y acelerador de IA Hailo en reComputer R2000. Se integra perfectamente con Home Assistant para alertas inteligentes en tiempo real, detección de objetos y procesamiento eficiente de video local en el borde.

title: Frigate NVR y Hailo en reComputer R2000 conectado con Home Assistant

keywords:
- Raspberry pi
- Edge AI Computer
- reComputer R2000
- Frigate
- Home Assistant
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /es/r2000_series_frigate_and_home_assistant
last_update:
  date: 6/18/2025
  author: Kasun Thushara
---

# Frigate NVR y Hailo en reComputer AI box & Industrial box conectado con Home Assistant

## Introducción

Frigate NVR es un grabador de video en red (NVR) de código abierto diseñado específicamente para detección de objetos en tiempo real usando modelos de IA. Es ligero, potente y funciona perfectamente con cámaras a través del protocolo RTSP.

Home Assistant (HA) es una plataforma de código abierto para automatización del hogar inteligente que te permite controlar y automatizar dispositivos en tu hogar.

En esta guía, te explicaremos cómo instalar **Frigate en un reComputer AI box & Industrial box** equipado con **Hailo PCIe**, y cómo conectarlo a tu configuración existente de **Home Assistant** usando **MQTT** con mínimas complicaciones.

## Prerrequisitos

### Requisitos de Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
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
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Instalar Controlador PCIe Hailo

### Paso 1: Configuración de Raspberry Pi

```bash
sudo apt update
sudo raspi-config
```

- Navega a `6 Advanced Options > A8 PCIe Speed`
- Selecciona `Yes` para habilitar PCIe Gen 3
- Sal y selecciona `Finish`

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/pcie.png"
    style={{ width: 600}}
  />
</div>

Añade la siguiente línea al final de `/boot/firmware/config.txt`:

```bash
dtoverlay=pciex1-compat-pi5,no-mip
```

### Paso 2: Instalar Controlador PCIe

```bash
sudo apt update
sudo apt install dkms
```

```bash
git clone https://github.com/hailo-ai/hailort-drivers
cd hailort-drivers/linux/pcie
git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
sudo make install_dkms
```

### Paso 3: Instalar Firmware

```bash
cd ../..
./download_firmware.sh
sudo mkdir -p /lib/firmware/hailo
sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

### Paso 4: Corregir Problema de Tamaño de Descriptor PCIe

Crea `/etc/modprobe.d/hailo_pci.conf` con este contenido:

```bash
options hailo_pci force_desc_page_size=4096
```

### Paso 5: Reiniciar y Verificar

```bash
sudo reboot
ls /dev/hailo*
```

Salida esperada:

```bash
/dev/hailo0
```

## Instalar Frigate NVR con Docker

### Prerrequisitos

Asegúrate de que tu cámara esté configurada para transmisión RTSP a resolución 1920x1080.

### Actualizar Sistema

```bash
sudo apt update
```

### Instalar Docker

```bash
curl -fsSL get.docker.com | bash
sudo usermod -aG docker $USER
sudo reboot
```

### Descargar Imagen de Frigate

```bash
docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
```

### Crear Estructura de Directorios

```bash
mkdir -p ~/frigate/config
mkdir -p ~/frigate/data/db
mkdir -p ~/frigate/data/storage
cd ~/frigate
```

### Crear Archivo Docker Compose (frigate.yml)

```bash
nano frigate.yml
```

```bash
services:
  frigate-hailo:
    container_name: frigate-hailo
    privileged: true
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    shm_size: 1024mb
    devices:
      - /dev/hailo0:/dev/hailo0
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/:/config
      - ./data/db/:/data/db
      - ./data/storage:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1g
    ports:
      - 5000:5000
```

### Crear Archivo de Configuración de Frigate (config/config.yml)

```bash
nano config/config.yml
```

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - record
            - detect

mqtt:
  enabled: False

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 300
  height: 300
  model_type: ssd
  path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

version: 0.15-1
```

### Iniciar Frigate

```bash
docker compose -f frigate.yml up -d
```

### Acceder a la Interfaz Web

Visita: `http://<tu-ip-del-dispositivo>:5000`

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/frigate_web.png"
    style={{ width: 600}}
  />
</div>

## Integración con Home Assistant

### Paso 1: Configuración de HACS

Asumiendo que estás ejecutando Home Assistant (HA Green, HA Yellow, o dispositivos independientes similares):

- Instala [HACS](https://hacs.xyz/docs/use/) si no está ya instalado.
- En HACS, instala la **integración de Frigate** desde la tienda de la comunidad.

Configúrala usando la IP y puerto de tu Frigate AI box

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/config_frigate.PNG"
    style={{ width: 600}}
  />
</div>

### Paso 2: Instalar Complemento MQTT

Sigue la [guía oficial de integración MQTT](https://www.home-assistant.io/integrations/mqtt/) para instalar y configurar el complemento del broker MQTT.

### Paso 3: Actualizar Configuración de Frigate para MQTT

```bash
mqtt:
  host: <HA IP>
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: <HA User Name>
  password: <HA Password>
```

Ejemplo:

```bash
mqtt:
  host: 10.0.0.136
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: kasun
  password: HiezenburgCook
```

ejemplo completo:

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:12345678a@10.0.0.108:554/cam/realmonitor?channel=1&subtype=0

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://admin:12345678a@10.0.0.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - record
            - detect

mqtt:
  host: core-mosquitto
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: kasun
  password: HiezenburgCook

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 300
  height: 300
  model_type: ssd
  path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

version: 0.15-1


```

### Paso 4: Reiniciar Frigate

```bash
docker compose -f frigate.yml down
sudo docker compose -f frigate.yml up -d
```

### Paso 5: Confirmar que MQTT Funciona (opcional)

- Revisa los registros de HA o los registros del complemento MQTT para verificar mensajes de Frigate
- En HA, ahora puedes usar eventos de Frigate en automatizaciones, por ejemplo, alertas de movimiento, objetos detectados, etc.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/HA_interface.PNG"
    style={{ width: 600}}
  />
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
