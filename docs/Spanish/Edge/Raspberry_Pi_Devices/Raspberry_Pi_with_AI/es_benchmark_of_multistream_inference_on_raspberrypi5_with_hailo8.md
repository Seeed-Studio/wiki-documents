---
description: Este wiki muestra el benchmark de detección multicanal con yolov8m en Raspberry Pi 5 con Hailo8.
title: Benchmark de inferencia multicanal en Raspberry Pi con Hailo8
keywords:
  - Edge
  - RaspberryPi 5
  - Detección de objetos
image: https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/raspberry_pi_ai_hat.webp
slug: /es/benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8
last_update:
  date: 02/18/2025
  author: Erick González

no_comments: false # para Disqus
---

# Benchmark de inferencia multicanal en Raspberry Pi 5 con Hailo8

## Introducción

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versión 8) es la serie más popular de modelos de estimación de pose y detección de objetos en tiempo real de YOLO. Se basa en las fortalezas de sus predecesores al introducir varias mejoras en velocidad, precisión y flexibilidad. El [Hailo8](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html) se utiliza para acelerar la velocidad de inferencia, con 26 tera-operaciones por segundo (TOPS).

Este wiki presenta un benchmarking de YOLOv8m para la detección de objetos en Raspberry Pi 5 con Hailo8. Todas las pruebas utilizan el mismo modelo (YOLOv8m), cuantizado a int8, con un tamaño de entrada de 640x640 píxeles, tamaño de lote configurado a 8.

## Preparar el hardware

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
				<strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Instalar el kit AI en RPi5

Por favor consulta [este enlace](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

## Preparar el software

### Actualizar el sistema:

```sh
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Descargar el software Hailo desde el sitio oficial de Hailo

> **Nota:** Necesitarás una cuenta oficial de Hailo y asegurarte de haber iniciado sesión.
Haz clic en este [enlace](https://hailo.ai/developer-zone/software-downloads/) para descargar las bibliotecas necesarias:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/hailo_download.png" alt="pir" width={1000} height="auto"/></p>

### Instalar hailort_4.19.0_arm64.deb en Raspberry Pi 5

```sh
sudo dpkg -i hailort_4.19.0_arm64.deb 

sudo reboot
```

### Instalar dkms

```sh
sudo apt-get install dkms
``` 

### Instalar hailort-pcie-driver_4.19.0_all.deb 

```sh
sudo dpkg -i hailort-pcie-driver_4.19.0_all.deb 
sudo reboot
```

### Crear y activar un entorno virtual en Python

```sh 
python -m venv hailo_env
source hailo_env/bin/activate
``` 

### Instalar hailort-4.19.0-cp311-cp311-linux_aarch64.whl 

```sh
pip install hailort-4.19.0-cp311-cp311-linux_aarch64.whl 
```

### Verificar si el software está instalado correctamente.

```sh
hailortcli fw-control identify
```
El resultado debería ser el siguiente:

```sh
ain@pi5-hailo:~ $ hailortcli fw-control identify
Ejecutando en dispositivo: 0000:01:00.0
Identificando placa
Versión del protocolo de control: 2
Versión del firmware: 4.19.0 (release,app,extended context switch buffer)
Versión del registrador: 0
Nombre de la placa: Hailo-8
Arquitectura del dispositivo: HAILO8
Número de serie: HLLWM2B225100548
Número de parte: HM218B1C2FAE
Nombre del producto: HAILO-8 AI ACC M.2 M KEY MODULE EXT TEMP
```

### Configurar PCIe para gen2/gen3 (gen3 es más rápido que gen2):

Añadir el siguiente texto a ```/boot/firmware/config.txt```

```sh
# Habilitar el conector PCIe externo

dtparam=pciex1

# Forzar velocidades Gen 3.0

dtparam=pciex1_gen=3
```
:::note
Si deseas usar gen2, comenta la línea dtparam=pciex1_gen=3
:::

### Instalar Tapps

#### Instalar bibliotecas necesarias

```sh
sudo apt-get install -y rsync ffmpeg x11-utils python3-dev python3-pip python3-setuptools python3-virtualenv python-gi-dev libgirepository1.0-dev gcc-12 g++-12 cmake git libzmq3-dev

sudo apt-get install -y libopencv-dev python3-opencv

sudo apt-get install -y libcairo2-dev libgirepository1.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio gcc-12 g++-12 python-gi-dev

sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0
```

#### Configurar hailo_pci force_desc_page_size 

```sh
sudo nano /etc/modprobe.d/hailo_pci.conf
```
Y luego ingresa el siguiente contenido:

```sh
options hailo_pci force_desc_page_size=4096
```
Finalmente, presiona `Ctrl+X`, escribe `Y` y presiona `Enter` para guardar el archivo.

Y luego reinicia Raspberry Pi 5:

```sh
sudo reboot
```

#### Descargar Tapps

```sh
git clone --depth 1 https://github.com/hailo-ai/tappas.git
```

#### Descargar hailort a tapps

```sh
cd tappas
mkdir hailort
git clone https://github.com/hailo-ai/hailort.git hailort/sources
```

#### Cambiar common.py

```sh
nano downloader/common.py
```
Y cambia el contenido como sigue, añadiendo `RaspberryPI5 = 'rpi5'` en common.py:

```sh
class Platform(Enum):
    X86 = 'x86'
    ARM = 'arm'
    IMX8 = 'imx8'
    Rockchip = 'rockchip'
    RaspberryPI = 'rpi'
    RaspberryPI5 = 'rpi5'
    
    ANY = 'any'

    def __str__(self):
        return self.value
```

#### Instalar tappas

```sh
./install.sh --skip-hailort --target-platform rpi5
```

#### Cambiar el tamaño del lote a 8

```sh
cd ./apps/h8/gstreamer/general/multistream_detection/
nano multi_stream_detection.sh
```
Añadir `readonly DEFAULT_BATCH_SIZE=8` en la línea 14 como sigue:

```sh
readonly DEFAULT_NETWORK_NAME="yolov5"
readonly DEFAULT_BATCH_SIZE=8
readonly MAX_NUM_OF_DEVICES=4
```

Añadir `batch_size=$DEFAULT_BATCH_SIZE` en la línea 19 como sigue:

```sh
network_name=$DEFAULT_NETWORK_NAME
batch_size=$DEFAULT_BATCH_SIZE
num_of_src=12
```

Añadir `batch-size=$batch_size` en la línea 154 como sigue:

```sh
queue name=hailo_pre_infer_q_0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
hailonet hef-path=$hef_path batch-size=$batch_size device-count=$device_count scheduling-algorithm=0 nms-score-threshold=0.3 nms-iou-threshold=0.45 output-format-type=HAILO_FORMAT_TYPE_FLOAT32 ! \
queue name=hailo_postprocess0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
```

Finalmente `Ctrl+X` y escribe `Y` para guardar el archivo.

## Ejecutar inferencia multicanal

```
sudo chmod +x multi_stream_detection.sh
./multi_stream_detection.sh --network yolov8 --num-of-sources 8 --show-fps
``` 

## Resultados

Todos los resultados se basan en inferencias con un tamaño de entrada de modelo de 640x640, tamaño de lote de 8 y resolución de video de 1280x760, que es 720p.

<div class="table-center">

| Canal | Rendimiento Gen2 PCIE | Rendimiento Gen3 PCIE |
|---------------------|-----------------------|-----------------------|
| 1 canal de flujo    | 39.82FPS             | 76.99FPS             |
| 2 canales de flujo  | 19.86FPS             | 38.21FPS             |
| 4 canales de flujo  | 8.45FPS              | 16.94FPS             |
| 8 canales de flujo  | 3.85FPS              | 8.15FPS              |
| 12 canales de flujo | 2.94FPS              | 5.43FPS              |

</div>

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/CHxg7qWTMYw" title="Inferencia Multicanal en Hailo8 con RPi5 AI Box" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


