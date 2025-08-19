---
description: Este artículo de wiki proporciona una guía paso a paso sobre cómo desplegar Frigate NVR en Raspberry Pi 5 con Hailo 8 ejecutando yolov8n.
title: Frigate NVR con Raspberry Pi 5
keywords:
  - Edge
  - reComputer r1000
  - Detección de objetos
image: https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate.webp
slug: /es/frigate_nvr_with_raspberrypi_5
last_update:
  date: 02/18/2025
  author: Erick González

no_comments: false # para Disqus
---

## Introducción

**Frigate NVR** es un grabador de video en red de código abierto diseñado para la detección de objetos en tiempo real con modelos de IA. Emparejado con la **Raspberry Pi 5**, permite una vigilancia de video eficiente en el borde, potenciada por YOLOv8n. Esta guía te guiará a través del proceso de instalación y configuración para una configuración óptima.

## Preparar el Hardware

### Componentes recomendados

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

**Alternativamente, también necesitarás al menos una cámara para la transmisión de video. Puedes consultar [Hardware recomendado](https://docs.frigate.video/frigate/hardware#cameras) para ver las cámaras recomendadas.**

## Instalar controlador PCIe de Hailo

### Paso 1: Habilitar PCIe Gen 3

Abre una terminal y ejecuta el siguiente comando.

```bash
$ sudo apt update
$ sudo raspi-config
```

En el diálogo, selecciona **6 Opciones avanzadas** y luego **A8 Velocidad PCIe**.

![6 Opciones avanzadas](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/1.png)
![A8 Velocidad PCIe](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/2.png)

Elige "Sí" para habilitar el modo PCIe Gen 3.

![Elige Sí](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/3.png)

Luego, haz clic en "Finalizar" para salir.

Edita `/boot/firmware/config.txt` y agrega la siguiente línea al final del archivo.

```
dtoverlay=pciex1-compat-pi5,no-mip
```

### Paso 2: Instalar el controlador PCIe de Hailo

Instala el paquete dkms. Este paquete es necesario para instalar el controlador PCIe de Hailo.

```bash
$ sudo apt update
$ sudo apt install dkms
```

Obtén el controlador PCIe de Hailo desde [GitHub](https://github.com/hailo-ai/hailort-drivers).

```bash
$ git clone --depth 1 https://github.com/hailo-ai/hailort-drivers
$ git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
$ cd hailort-drivers/linux/pcie
```

Luego, instala el controlador PCIe de Hailo.

```bash
$ sudo make install_dkms
```

Después de la instalación, descarga el firmware para Hailo y cópialo al directorio `/lib/firmware/hailo`.

```bash
$ cd ../..
$ ./download_firmware.sh
$ sudo mkdir -p /lib/firmware/hailo
$ sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

Para evitar el problema de `max_desc_page_size` de PCIe, también necesitamos crear una regla en `/etc/modprobe.d/hailo_pci.conf` con el siguiente contenido.

```bash
options hailo_pci force_desc_page_size=4096
```

Reinicia el sistema para que los cambios surtan efecto.

```bash
$ sudo reboot
```

Después de reiniciar el sistema, el controlador PCIe de Hailo estará instalado correctamente. Se creará el dispositivo `/dev/hailo0`. Verifica el dispositivo ejecutando el siguiente comando.

```bash
$ ls /dev/hailo*
/dev/hailo0
```

## Instalar Frigate NVR

En esta parte, asumimos que ya tienes tu cámara configurada y lista para transmitir con el protocolo RTSP en resolución 1920x1080.

- Ejemplo de URL RTSP: `rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0`

### Paso 1: Preparar el entorno

1. **Actualizar el sistema:**

   ```bash
   $ sudo apt update
   ```

2. **Instalar Docker:**

   ```bash
   $ curl -fsSL get.docker.com | bash
   $ sudo usermod -aG docker $USER
   ```

3. **Reiniciar el sistema:**

   ```
   $ sudo reboot
   ```

### Paso 2: Desplegar Frigate

1. **Obtener la imagen de Frigate:**

    Ve a [Paquete de frigate](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/versions), elige una imagen con el sufijo `-h8l`. En este ejemplo, elegimos `ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l`.

    ```bash
    $ docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    ```

2. **Crear archivo Docker Compose:**

    Aquí tienes un ejemplo del archivo `frigate.yml`, el dispositivo `hailo0` es el que creaste en el paso anterior, los archivos de configuración están en el directorio `./config` y los archivos de datos en el directorio `./data`:

    ```yaml
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

3. **Descargar el modelo:**

    Ve a [Modelos preentrenados públicos](https://github.com/hailo-ai/hailo_model_zoo/blob/master/docs/public_models/HAILO8/HAILO8_object_detection.rst) para descargar el modelo que deseas usar. Aquí un ejemplo usando el modelo YOLOv8n: `yolov8n`.

    ```bash
    $ mkdir -p ./config/model_cache
    $ sudo wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef -O ./config/model_cache/yolov8n.hef
    ```

4. **Editar configuración de Frigate:**

    Aquí tienes un ejemplo del archivo `config/config.yml` para la aplicación Frigate:

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
            model_path: /config/model_cache/yolov8n.hef

    model:
        width: 640
        height: 640
        input_tensor: nhwc
        input_pixel_format: bgr

    version: 0.15-1
    ```

5. **Iniciar la instancia de Docker:**

    ```bash
    $ docker compose -f frigate.yml up -d
    ```

    Después de que Frigate esté en funcionamiento, puedes acceder a la interfaz web de Frigate en `http://<tu-ip-de-raspberry-pi>:5000` para ver la transmisión de la cámara.

    ![frigate-web](https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate_web.webp)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
