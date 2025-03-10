---
description: Detección de cuchillos con escáner de rayos X de seguridad
title: Detección de cuchillos con escáner de rayos X de seguridad
keywords:
  - Edge
  - Aplicación con la reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Security_Scan
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Detección de cuchillos: un modelo de detección de objetos implementado en Triton Inference Server basado en reComputer.

<iframe width={560} height={315} src="https://www.youtube.com/embed/niS0TLzyn-s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

La revisión de seguridad es una alarma de seguridad pensada para la protección de los pasajeros y los sectores de transporte, manteniendo el peligro alejado, y se aplica comúnmente en aeropuertos, estaciones de tren, estaciones de metro, etc. En el campo actual de la inspección de seguridad, las máquinas de inspección se despliegan en los pasillos de entrada del transporte público. Generalmente, se requieren varios dispositivos para trabajar al mismo tiempo.

Sin embargo, el rendimiento de la detección de artículos prohibidos en las imágenes de rayos X aún no es ideal debido a la superposición de objetos detectados durante la inspección de seguridad. Para abordar este problema, basado en el módulo de desocultación en el servidor Triton Interface, se puede implementar un algoritmo de detección de artículos prohibidos en las imágenes de rayos X, lo que permite realizar una detección más precisa y efectiva.

Gracias a [Yanlu Wei, Renshuai Tao et al.](https://arxiv.org/abs/2004.08656), Renshuai Tao y otros colaboradores, este proyecto fundamental que estamos desarrollando se centrará en desplegar un modelo de Deep Learning en la [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) para detectar artículos prohibidos (como cuchillos) en imágenes. El proyecto utiliza un reComputer J1010 como servidor de inferencia y dos Raspberry Pi para simular las máquinas de inspección de seguridad enviando imágenes. También se admiten otros dispositivos como la The [reComputer 1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), la [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html), la [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) y la [Nvidia Jetson AGX Xavier](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html). Este sistema permite implementar soluciones más eficientes y precisas para la detección de artículos prohibidos en las inspecciones de seguridad.

## Primeros pasos

[Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server) proporciona una solución de inferencia en la nube y de computo en el borde, optimizada tanto para CPUs como para GPUs. Triton admite un protocolo HTTP/REST y GRPC que permite a los clientes remotos solicitar inferencias para cualquier modelo gestionado por el servidor. Aquí utilizaremos Triton (Triton Inference Server) como nuestro servidor local, que se encargará de desplegar el modelo de detección.

### Hardware

#### Requerimientos de Hardware

Los dispositivos requeridos para desarrollar este proyecto se enlistan a continuación:

- [Raspberry Pi 4B](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)*2
- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)
- Pantalla con HDMI, mouse y teclado
- PC

#### Configuración del hardware

Dos Raspberry Pi y una reComputer deben estar encendidas y todas deben estar conectadas **en la misma red de internet**. En este proyecto, usamos dos Raspberry Pi para simular el funcionamiento de una máquina de seguridad, ya que las máquinas de inspección de seguridad suelen ser utilizadas por múltiples dispositivos en la mayoría de los casos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png" /></div>

También se podría utilizar solo una Raspberry Pi para este proyecto. Sin embargo, la demostración de detección simultánea de cuchillos en dos dispositivos podría ofrecer mejores capacidades de procesamiento por lotes dinámicos del Triton Inference Server. En la siguiente instrucción, te mostraremos cómo configurar el software en la Raspberry Pi y en la reComputer J1010.

### Software

Aquí usamos el [conjunto de datos de imágenes de rayos x](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view) como nuestros datos de entrada, que se colocarán en la Raspberry Pi. Después de eso, la reComputer enviará los resultados de inferencia procesados a la Raspberry Pi. Al final, la Raspberry Pi completará el trabajo final y lo mostrará en la pantalla, es decir, la última capa del modelo de inferencia se desplegará en la Raspberry Pi.

#### Configuración de la Raspberry PI

A continuación se muestra como configurar el software necesario en la Raspberry PI:

**Paso 1.** Instala el sistema Raspbian Buster y realiza la configuración básica desde el [sitio web oficial](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation). En este proyecto, utilizamos RASPBERRY PI OS (64 bits) como nuestro sistema operativo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png" /></div>

**Paso 2.** Configuración del puerto SSH de la Raspberry PI (opcional).

Antes de desplegar el entorno, podemos abrir el puerto SSH de la Raspberry Pi y acceder a ella de forma remota utilizando la [Interfaz SSH](https://wiki.seeedstudio.com/remote_connect/)en el PC.

> Aviso: Asegurate que tu PC y la Raspberry PI estén conectadas a la misma LAN.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png" /></div>

**Paso 3.** Configura el entorno de Python.

Necesitamos desplegar los entornos requeridos para el modelo de inferencia, como **Python, PyTorch, Tritonclient y TorchVision** y para la visualización de imágenes, OpenCV en la Raspberry Pi. A continuación, proporcionamos las instrucciones:

**Python**

Podemos ejecutar python –V y asegurarnos de que la versión de Python sea 3.9.2. Necesitamos instalar PyTorch, Tritonclient y TorchVision, y las versiones que necesitamos deben corresponder a la versión de Python 3.9.2. Puedes consultar [aquí](https://www.python.org/downloads/) para descargar e instalar.

**PyTorch**

Si la versión de Python es correcta, ahora puedes instalar Pytorch.

>Aviso: Antes de instalar Pytorch debes revisar tu versión de Raspbian.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png" /></div>

Ejecuta los comandos mostrados a continuación para instalar Pytorch:

```python
# get a fresh start
sudo apt-get update
sudo apt-get upgrade

# install the dependencies
sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev

# above 58.3.0 you get version issues
sudo -H pip3 install setuptools==58.3.0
sudo -H pip3 install Cython

# install gdown to download from Google drive
sudo -H pip3 install gdown

# Buster OS
# download the wheel
gdown https://drive.google.com/uc?id=1gAxP9q94pMeHQ1XOvLHqjEcmgyxjlY_R
# install PyTorch 1.11.0
sudo -H pip3 install torch-1.11.0a0+gitbc2c6ed-cp39-cp39-linux_aarch64.whl
# clean up
rm torch-1.11.0a0+gitbc2c6ed-cp39-cp39m-linux_aarch64.whl
```

Tras una instalación exitosa, puedes revisar PyTorch usando los siguientes comandos **después de iniciar** `python`:

```python
import torch as tr
print(tr.__version__)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png" /></div>

>Aviso: Los paquetes PyTorch wheels para Raspberry Pi 4 se encuentran en <https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS>

**Tritonclient**

Ejecura el comando `pip3 install tritonclient[all]` para descargar Tritonclient.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png" /></div>

**TorchVision**

Después de instalar PyTorch, podemos continuar con la instalación de TorchVision. Aquí están los comandos:

```python
# download the wheel
gdown https://drive.google.com/uc?id=1oDsJEHoVNEXe53S9f1zEzx9UZCFWbExh
# install torchvision 0.12.0
sudo -H pip3 install torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
# clean up
rm torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_12.png" /></div>

**OpenCV**

Puedes directamente ejecutar `pip3 install opencv-python` para instalar OpenCV:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_13.png" /></div>

### Configuración de la reComputer J1010

En este proyecto, desplegaremos Triton Inference Server en el reComputer J1010. Para mejorar la interactividad y la conveniencia del despliegue del modelo entrenado, convertiremos el modelo al **formato ONNX**.

**Paso 1.** [Instala](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/) Jetpack 4.6.1 en la reComputer J1010.

**Paso 2.** Crea un nuevo folder “opi/1” in “home/server/docs/examples/model_repository ”. Luego descarga el modelo entrenado y convertido [model.onnx](https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing) y colocalo en el folder “1”.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg" /></div>

>Si necesitas otro servidor general, sigue los siguientes pasos.

Abre una nueva terminal y ejectuta:

```python
git clone https://github.com/triton-inference-server/server
cd ~/server/docs/examples
sh fetch_models.sh
```

**Paso 3.** Instala la versión de Triton para JetPack 4.6.1, que se proporciona en el archivo tar adjunto: [tritonserver2.21.0-jetpack5.0.tgz](https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png" /></div>

El archivo tar aquí contiene el ejecutable del servidor Triton y las bibliotecas compartidas, incluidas las bibliotecas cliente de C++ y Python, así como ejemplos. Para obtener más información sobre cómo instalar y usar Triton en JetPack, puedes consultar [aquí](https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md).

**Paso 4.** Ejecuta el siguiente comando:

```python

mkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer
cd ~/TritonServer/bin
./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png" /></div>

Hemos terminado con todos los preparativos.

## Operando el programa.

Dado que todos los entornos necesarios están desplegados, podemos ejecutar nuestro proyecto siguiendo los siguientes pasos.

**Paso 1.** Descarga el modelo y los archivos necesarios.

1. Clona el modulo de GitHub.

Abre una nueva terminal y ejecuta los siguientes comandos.

```python
git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git
cd Seeed_SMG_AIOT/
git clone https://github.com/LemonCANDY42/OPIXray.git
```

2. Crea una nueva carpeta llamada "weights" para almacenar el peso entrenado de este algoritmo "DOAM.pth". Descarga el [archivo de pesos](https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip) y ejecuta:

- `cd OPIXray/DOAM`
- `mkdir weights`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png" /></div>

3. Crea un nuevo folder llamado “Dataset” para almacenar el [conjunto de datos Xray](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png" /></div>

**Paso 2.** Corriendo el modelo de inferencia.

Ejecuta `python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png" /></div>

El resultado se mostrará como en la siguiente figura:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg" /></div>

## Solución de problemas

> Cuando montes el Triton server, puedes encontrarte los siguientes errores:

>1. Si el error es libb64.so.0d, ejecuta:
`sudo apt-get install libb64-0d`

>2. Si el error es libre2.so.2, ejecuta:
`sudo apt-get install libre2-dev`

>3. Si el error es: creating server: Internal - failed to load all models, ejecuta:
`--exit-on-error=false`

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

