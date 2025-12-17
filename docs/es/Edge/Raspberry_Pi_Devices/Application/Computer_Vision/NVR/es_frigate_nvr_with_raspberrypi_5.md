---
description: Este artículo wiki proporciona una guía paso a paso sobre cómo implementar Frigate NVR en Raspberry Pi 5 con Hailo 8.
title: Frigate NVR con Raspberry Pi 5/CM5
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate.webp
slug: /es/frigate_nvr_with_raspberrypi_5
last_update:
  date: 04/03/2025
  author: Joshua Lee

no_comments: false # for Disqus
---


## Introducción

**Frigate NVR** es un grabador de video en red de código abierto diseñado para detección de objetos en tiempo real con modelos de IA. Emparejado con el **Raspberry Pi 5/CM5**, permite una videovigilancia eficiente en el borde. Esta guía te llevará a través del proceso de instalación y configuración para una configuración óptima.

## Frigate Oficial

### Preparar Hardware

#### Componentes Recomendados

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

**Alternativamente, también necesitas al menos una cámara para transmisión de video. Puedes consultar [Hardware recomendado](https://docs.frigate.video/frigate/hardware#cameras) para ver las cámaras recomendadas.**

### Instalar Controlador PCIe de Hailo

#### Paso 1: Habilitar PCIe Gen 3

Abre una terminal y ejecuta el siguiente comando.

```bash
sudo apt update
sudo raspi-config
```

En el diálogo, selecciona **6 Advanced Options** y luego **A8 PCIe Speed**.

![6 Advanced Options](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/1.png)
![A8 PCIe Speed](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/2.png)

Elige "Yes" para habilitar el modo PCIe Gen 3.

![Choose Yes](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/3.png)

Después, haz clic en "Finish" para salir.

Edita `/boot/firmware/config.txt`, agrega la siguiente línea al final del archivo.

```
dtoverlay=pciex1-compat-pi5,no-mip
```

#### Paso 2: Instalar Controlador PCIe de Hailo

Instala el paquete dkms. Este paquete es requerido para instalar el controlador PCIe de Hailo.

```bash
sudo apt update
sudo apt install dkms
```

Obtén el Controlador PCIe de Hailo desde [GitHub](https://github.com/hailo-ai/hailort-drivers).

```bash
git clone https://github.com/hailo-ai/hailort-drivers
cd hailort-drivers/linux/pcie
git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
```

Luego, instala el controlador PCIe de Hailo.

```bash
sudo make install_dkms
```

Después de la instalación, descarga el firmware para Hailo y cópialo al directorio `/lib/firmware/hailo`.

```bash
cd ../..
./download_firmware.sh
sudo mkdir -p /lib/firmware/hailo
sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

Para evitar el problema de max_desc_page_size de PCIe, también necesitamos crear una regla en `/etc/modprobe.d/hailo_pci.conf` con el siguiente contenido.

```bash
options hailo_pci force_desc_page_size=4096
```

Reinicia el sistema para que tome efecto.

```bash
sudo reboot
```

Después de que el sistema se reinicie, el controlador PCIe de Hailo se instala exitosamente. El dispositivo `/dev/hailo0` será creado. Verifica el dispositivo ejecutando el siguiente comando.

```bash
$ ls /dev/hailo*
/dev/hailo0
```

### Instalar Frigate NVR

En esta parte, asumimos que tienes tu cámara configurada y lista para transmitir con protocolo RTSP en resolución 1920x1080.

- Ejemplo de URL RTSP: `rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0`

#### Paso 1: Preparar el Entorno

1. **Actualiza tu sistema:**

   ```bash
   sudo apt update
   ```

2. **Instala Docker:**

   ```bash
   curl -fsSL get.docker.com | bash
   sudo usermod -aG docker $USER
   ```

3. **Reinicia el sistema:**

   ```
   sudo reboot
   ```

#### Paso 2: Implementar Frigate

1. **Descargar la Imagen de Frigate:**

    Ve a [Package frigate](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/versions), elige una imagen con sufijo `-h8l`. En este ejemplo, elegimos `ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l`.

    ```bash
    docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    ```

2. **Crear Archivo Docker Compose:**

    Aquí hay un ejemplo del archivo `frigate.yml`, el dispositivo `hailo0` es el que creaste en el paso anterior, los archivos de configuración están en el directorio `./config` y los archivos de datos están en el directorio `./data`.:

    ```yml
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

3. **Editar Configuración de Frigate:**

    Aquí hay un ejemplo del archivo `config/config.yml`, que es para la aplicación Frigate:

    ```yml
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

4. **Iniciar Instancia Docker:**

    ```bash
    docker compose -f frigate.yml up -d
    ```

    Después de que Frigate esté funcionando, puedes acceder a la interfaz web de Frigate en `http://<tu-raspberry-pi-ip>:5000` para verificar la transmisión de la cámara.

    ![frigate-web](https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate_web.webp)

## Seeed Frigate

### Modificar configuraciones PCIe

Abre config.txt

```
sudo nano /boot/firmware/config.txt 
```

Agrega el siguiente texto a config.txt

```
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```

Luego usa `Ctrl+x` para guardar el archivo y reinicia la caja de IA

### Instalar docker y hailo-all

```
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### Crear archivo yml

Crea frigate.yml para que docker compose ejecute frigate

```
cd ~
sudo nano frigate.yml
```

Aquí hay un ejemplo de frigate.yml

```
version: "3.9"
services:
    frigate-hailo:
        container_name: frigate-hailo
        privileged: true
        restart: unless-stopped
        image: mjqx2023/frigate_seeed:latest
        shm_size: 1024mb
        environment:
            - HAILO_MONITOR=1
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
                  size: 1000000000
        ports:
            - 5000:5000
            - 1984:1984
            - 5002:5002
            - 5003:5003
```

Descarga el modelo yolo y crea config.yml.

```
mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef

cd .. && nano config.yml
```

Aquí hay un ejemplo de config.yml

```yml
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:passw0rd@10.1.1.188:554/cam/realmonitor?channel=1&subtype=1
    home1:
      - rtsp://admin:passw0rd@10.1.1.188:554/cam/realmonitor?channel=1&subtype=1
    yard:
      - rtsp://admin:passw0rd@10.1.1.189:554/cam/realmonitor?channel=1&subtype=1
    yard1:
      - rtsp://admin:passw0rd@10.1.1.189:554/cam/realmonitor?channel=1&subtype=1

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/home
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true

  yard:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/yard
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true

  home1:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/home1
          roles:
            - detect


    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true

  yard1:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/yard1
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true
mqtt:
  enabled: false

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 640
  height: 640
  path: /config/model_cache/yolov8n.hef

version: 0.16-0

camera_groups:
  test:
    order: 1
    icon: LuAlignEndHorizontal
    cameras:
      - home
      - home1
      - yard
      - yard1
```

### Descargar imagen docker y ejecutar frigate

Descargar imagen frigate_seeed

```
cd ~
docker pull mjqx2023/frigate_seeed
docker compose -f frigate.yml start 
```

Luego abre `localhost:5000` en el navegador web de tu AI box:
 ![frigate-web](https://files.seeedstudio.com/wiki/AI_box_deepseek/seeed_frigate.png)

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
