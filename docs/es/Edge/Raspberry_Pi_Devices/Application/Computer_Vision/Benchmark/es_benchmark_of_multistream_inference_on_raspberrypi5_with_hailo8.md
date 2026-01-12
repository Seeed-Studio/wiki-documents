---
description: Este wiki demuestra el benchmark de detección multistream yolov8m en Raspberry Pi5 con hailo8.
title: Benchmark de Inferencia Multistream en Raspberrypi con Hailo8
keywords:
  - Edge
  - RasberryPi 5
  - Object detecton
image: https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/raspberry_pi_ai_hat.webp
slug: /es/benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8
last_update:
  date: 11/21/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Benchmark de Inferencia Multistream en Raspberrypi 5 con Hailo8

## Introducción

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versión 8) es el más popular de la serie YOLO de modelos de estimación de pose en tiempo real y detección de objetos. Se basa en las fortalezas de sus predecesores introduciendo varios avances en velocidad, precisión y flexibilidad. El [Hailo8](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html) se utiliza para acelerar la velocidad de inferencia, con un rendimiento de IA de 26 TOPS.

Este wiki muestra el benchmarking de YOLOv8m para detección de objetos en Raspberry Pi 5 con hailo8. Todas las pruebas utilizan el mismo modelo (YOLOv8m), cuantizado a int8, con un tamaño de entrada de resolución 640x640, tamaño de lote establecido en 8.

## Preparar Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
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

### Instalar kit de IA en RPi5

Por favor consulte [esto](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

## Preparar software

### actualizar el sistema

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Descargar software hailo en la web oficial de hailo

> **Nota:**
necesitas una cuenta oficial de Hailo y asegurarte de estar conectado.
Haz clic en este [enlace](https://hailo.ai/developer-zone/software-downloads/) para descargar las librerías necesarias como sigue:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/hailo_download.png" alt="pir" width={1000} height="auto"/></p>

### Instalar hailort_4.19.0_arm64.deb en respberrypi5

```
sudo dpkg -i hailort_4.19.0_arm64.deb 

sudo reboot

```

### Instalar dkms

```
sudo apt-get install dkms
```

### Instalar hailort-pcie-driver_4.19.0_all.deb

```
sudo dpkg -i hailort-pcie-driver_4.19.0_all.deb 
sudo reboot

```

### Crear y activar un entorno virtual de Python

```
python -m venv hailo_env
source hailo_env/bin/activate
```

### Instalar hailort-4.19.0-cp311-cp311-linux_aarch64.whl

```
pip install hailort-4.19.0-cp311-cp311-linux_aarch64.whl 
```

### Verificar si el software está instalado

```
hailortcli fw-control identify
```

El resultado se muestra como sigue:

```
ain@pi5-hailo:~ $ hailortcli fw-control identify
Executing on device: 0000:01:00.0
Identifying board
Control Protocol Version: 2
Firmware Version: 4.19.0 (release,app,extended context switch buffer)
Logger Version: 0
Board Name: Hailo-8
Device Architecture: HAILO8
Serial Number: HLLWM2B225100548
Part Number: HM218B1C2FAE
Product Name: HAILO-8 AI ACC M.2 M KEY MODULE EXT TEMP
```

### Configurar pcie a gen2/gen3(gen3 es más rápido que gen2)

Agregar el siguiente texto a ```/boot/firmware/config.txt```

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
Si quieres usar gen2, por favor comenta dtparam=pciex1_gen=3
:::

### Instalar Tapps

#### Instalar librerías necesarias

```
sudo apt-get install -y rsync ffmpeg x11-utils python3-dev python3-pip python3-setuptools python3-virtualenv python-gi-dev libgirepository1.0-dev gcc-12 g++-12 cmake git libzmq3-dev

sudo apt-get install -y libopencv-dev python3-opencv

sudo apt-get install -y libcairo2-dev libgirepository1.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio gcc-12 g++-12 python-gi-dev

sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0
```

#### Configurar hailo_pci force_desc_page_size

```
sudo nano /etc/modprobe.d/hailo_pci.conf
```

Y luego ingresa el siguiente contenido.

```
options hailo_pci force_desc_page_size=4096
```

Finalmente, presiona `Ctrl+X`, escribe `Y`, y presiona `Enter` para guardar el archivo

Y luego reinicia el raspberrypi5

```
sudo reboot
```

#### Descargar Tapps

```
git clone --depth 1 https://github.com/hailo-ai/tappas.git
```

#### Descargar hailort a tapps

```
cd tappas
mkdir hailort
git clone https://github.com/hailo-ai/hailort.git hailort/sources
```

#### Cambiar common.py

```
nano downloader/common.py
```

Y cambiar el contenido como se muestra abajo, agregar `RaspberryPI5 = 'rpi5'` en common.py:

```
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

```
./install.sh --skip-hailort --target-platform rpi5

```

#### Cambiar tamaño de lote a 8

```
cd ./apps/h8/gstreamer/general/multistream_detection/
nano multi_stream_detection.sh
```

Agregar `readonly DEFAULT_BATCH_SIZE=8` a la línea 14 como sigue:

```
readonly DEFAULT_NETWORK_NAME="yolov5"
readonly DEFAULT_BATCH_SIZE=8
readonly MAX_NUM_OF_DEVICES=4
```

Agregar `batch_size=$DEFAULT_BATCH_SIZE` a la línea 19 como sigue:

```
network_name=$DEFAULT_NETWORK_NAME
batch_size=$DEFAULT_BATCH_SIZE
num_of_src=12
```

Agregar `batch-size=$batch_size` a la línea 154 como sigue:

```
queue name=hailo_pre_infer_q_0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
hailonet hef-path=$hef_path batch-size=$batch_size device-count=$device_count scheduling-algorithm=0 nms-score-threshold=0.3 nms-iou-threshold=0.45 output-format-type=HAILO_FORMAT_TYPE_FLOAT32 ! \
queue name=hailo_postprocess0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
```

Finalmente `Ctrl+X` e ingresa `Y` para guardar el archivo.

## Ejecutar inferencia multistream

```
sudo chmod +x multi_stream_detection.sh
./multi_stream_detection.sh --network yolov8 --num-of-sources 8 --show-fps
```

## Resultado

Todos los resultados se basan en inferencia con un tamaño de entrada del modelo de 640x640, tamaño de lote de 8, y una resolución de video de 1280x760, que es 720p.

<div class="table-center">

| Cantidad de Canales | Rendimiento PCIE Gen2 | Rendimiento PCIE Gen3 |
|---------------------|-----------------------|-----------------------|
| 1 canal stream      | 39.82FPS             | 76.99FPS             |
| 2 canales streams   | 19.86FPS             | 38.21FPS             |
| 4 canales streams   | 8.45FPS              | 16.94FPS             |
| 8 canales streams   | 3.85FPS              | 8.15FPS              |
| 12 canales streams  | 2.94FPS              | 5.43FPS              |

</div>

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/CHxg7qWTMYw" title="Multistream Inference on Hailo8 with RPi5 AI Box" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
