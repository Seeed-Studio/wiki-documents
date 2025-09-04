---
description: Detección de Cuchillos en Escaneo de Rayos X de Seguridad
title: Detección de Cuchillos en Escaneo de Rayos X de Seguridad
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Security_Scan
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Detección de Cuchillos: Un Modelo de Detección de Objetos desplegado en Triton Inference Server basado en reComputer

<iframe width={560} height={315} src="https://www.youtube.com/embed/niS0TLzyn-s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

El control de seguridad es una alarma de seguridad para la consideración de los pasajeros y los sectores de transporte, manteniendo el peligro alejado, aplicándose usualmente en aeropuertos, estaciones de ferrocarril, estaciones de metro, etc. En el campo de inspección de seguridad existente, las máquinas de inspección de seguridad se despliegan en los pasillos de entrada del transporte público. En general, requiere que múltiples dispositivos trabajen al mismo tiempo.

Sin embargo, el rendimiento de detección de artículos prohibidos en imágenes de rayos X aún no es ideal debido a la superposición de objetos detectados durante la inspección de seguridad. Para este asunto, basado en el módulo de des-oclusión en el Triton Interface Server, desplegar un algoritmo de detección de artículos prohibidos en las imágenes de rayos X puede realizar una mejor manera.

Por lo tanto, gracias a [Yanlu Wei, Renshuai Tao et al.](https://arxiv.org/abs/2004.08656), proporcionamos este proyecto fundamental donde vamos a desplegar un modelo de Deep Learning en [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) que podría detectar artículos prohibidos (cuchillos) con la Raspberry Pi y el reComputer J1010 donde usamos un reComputer J1010 como nuestro servidor de inferencia y dos Raspberry Pi para simular máquinas de inspección de seguridad enviando imágenes. El [reComputer 1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html), [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) y [Nvidia Jetson AGX Xavier](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html) son todos compatibles.

## Comenzando

[Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server) proporciona una solución de inferencia en la nube y en el borde, optimizada tanto para CPUs como GPUs. Triton soporta un protocolo HTTP/REST y GRPC que permite a clientes remotos solicitar inferencia para cualquier modelo siendo gestionado por el servidor. Aquí vamos a usar Triton (Triton Inference Server) como nuestro servidor local que desplegará el modelo de detección.

### Hardware

#### Hardware Requerido

En este proyecto los dispositivos requeridos se muestran a continuación:

- [Raspberry Pi 4B](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)*2
- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)
- Pantalla HDMI, ratón y teclado
- PC

#### Configuración de Hardware

Dos Raspberry Pi y reComputer deben estar encendidos y todos ellos deben estar bajo la **misma internet**. En este proyecto, usamos dos Raspberry pi para simular el trabajo de la máquina de seguridad ya que las máquinas de inspección de seguridad son usadas por múltiples dispositivos en la mayoría de instancias. Por lo tanto, ambos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_23.png" /></div>

Solo una Raspberry Pi también podría aplicarse a este proyecto. Sin embargo, la demostración de detección simultánea de cuchillos en dos dispositivos podría ofrecer mejores capacidades de agrupamiento dinámico del Triton Inference Server. En la siguiente instrucción, te introduciremos cómo configurar el software en Raspberry Pi y reComputer J1010.

### Software

Aquí usamos [dataset de imágenes de rayos X](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view) como nuestros **datos de entrada** que serán colocados en la **Raspberry Pi**. Después de eso, reComputer enviará los resultados de inferencia procesados a la Raspberry Pi. Al final, la Raspberry Pi completará el trabajo final y mostrará en la pantalla, es decir, la última capa del modelo de inferencia será desplegada en la Raspberry Pi.

#### Configurar Raspberry Pi

Aquí te mostraremos cómo configurar los softwares requeridos en Raspberry Pi, incluyendo

**Paso 1.** Instalar el sistema Raspbian Buster y configuración básica desde el [sitio web oficial](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-network-installation). En este proyecto, usamos RASPBERRY PI OS(64 bit) como nuestro sistema operativo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_1.png" /></div>

**Paso 2.** Configurar el puerto SSH de Raspberry Pi (opcional).

Antes de desplegar el entorno, podemos abrir el puerto SSH de Raspberry Pi y llamarlo remotamente usando la [interfaz SSH](https://wiki.seeedstudio.com/es/remote_connect/) en la PC.

> Aviso: asegúrate de que la PC y Raspberry Pi estén bajo la misma LAN.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png" /></div>

**Paso 3.** Configurar el entorno Python.

Necesitamos desplegar los entornos requeridos para el modelo de inferencia como **Python, PyTorch, Tritonclient, y TorchVision**. y visualización de imágenes como **OpenCV** en la Raspberry Pi. Proporcionamos las instrucciones a continuación:

**Python**

Podemos ejecutar `python –V` y asegurar que la versión de Python es 3.9.2. Necesitamos instalar PyTorch, Torchclient y TorchVision que las versiones que necesitamos corresponden a la versión de Python 3.9.2. Puedes referirte a [aquí](https://www.python.org/downloads/) para descargar e instalar.

**PyTorch**

Si la versión de Python es correcta. Ahora podemos instalar Pytorch.

>Aviso: Antes de instalar Pytorch, tenemos que verificar la versión de Raspbian.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_10.png" /></div>

Ejecuta el comando a continuación para instalar Pytorch:

```python
# obtener un nuevo comienzo
sudo apt-get update
sudo apt-get upgrade

# instalar las dependencias
sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev

# arriba de 58.3.0 obtienes problemas de versión
sudo -H pip3 install setuptools==58.3.0
sudo -H pip3 install Cython

# instalar gdown para descargar desde Google drive
sudo -H pip3 install gdown

# Buster OS
# descargar el wheel
gdown https://drive.google.com/uc?id=1gAxP9q94pMeHQ1XOvLHqjEcmgyxjlY_R
# instalar PyTorch 1.11.0
sudo -H pip3 install torch-1.11.0a0+gitbc2c6ed-cp39-cp39-linux_aarch64.whl
# limpiar
rm torch-1.11.0a0+gitbc2c6ed-cp39-cp39m-linux_aarch64.whl
```

Después de una instalación exitosa, podemos verificar PyTorch con los siguientes comandos **después de iniciar** `python`:

```python
import torch as tr
print(tr.__version__)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_11.png" /></div>

>Aviso: Las ruedas de PyTorch para Raspberry Pi 4 se pueden encontrar en [https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS](https://github.com/Qengineering/PyTorch-Raspberry-Pi-64-OS)

**Tritonclient**

Podemos ejecutar `pip3 install tritonclient[all]` para descargar Tritonclient.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_9.png" /></div>

**TorchVision**

Después de que Pytorch fue instalado, podemos pasar a la instalación de Torchvision. Aquí están los comandos:

```python
# descargar la rueda
gdown https://drive.google.com/uc?id=1oDsJEHoVNEXe53S9f1zEzx9UZCFWbExh
# instalar torchvision 0.12.0
sudo -H pip3 install torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
# limpiar
rm torchvision-0.12.0a0+9b5a3fe-cp39-cp39-linux_aarch64.whl
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_12.png" /></div>

**OpenCV**

Podemos ejecutar directamente `pip3 install opencv-python` para instalar OpenCV:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_13.png" /></div>

### Configurar reComputer J1010

En este proyecto, desplegaremos Triton Inference Server en el reComputer J1010. Para mejorar la interactividad y conveniencia de despliegue del modelo entrenado, convertiremos el modelo al **formato ONXX**.

**Paso 1.** [Instalar](https://wiki.seeedstudio.com/es/reComputer_J1010_J101_Flash_Jetpack/) Jetpack 4.6.1 en reComputer J1010.

**Paso 2.** Crear una nueva carpeta "opi/1" en "home/server/docs/examples/model_repository ". y luego descargar el [model.onnx](https://drive.google.com/file/d/1RcHK_gthCXHsJLeDOUQ6c3r0RlAUgRfV/view?usp=sharing) entrenado y convertido y ponerlo en la carpeta "1".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_15.jpg" /></div>

>Si necesitas otro servidor general, puedes ejecutar los siguientes pasos.

Abrir una nueva Terminal y ejecutar

```python
git clone https://github.com/triton-inference-server/server
cd ~/server/docs/examples
sh fetch_models.sh
```

**Paso 3.** Instalar la versión de Triton para JetPack 4.6.1 y se proporciona en el archivo tar adjunto: [tritonserver2.21.0-jetpack5.0.tgz](https://github.com/triton-inference-server/server/releases/download/v2.19.0/tritonserver2.19.0-jetpack4.6.1.tgz).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_16.png" /></div>

El archivo tar aquí contiene el ejecutable del servidor Triton y las bibliotecas compartidas incluyendo las bibliotecas cliente de C++ y Python y ejemplos. Para más información sobre cómo instalar y usar Triton en JetPack puedes consultar [aquí](https://github.com/triton-inference-server/server/blob/r22.04/docs/jetson.md).

**Paso 4.** Ejecutar el siguiente comando:

```python

mkdir ~/TritonServer && tar -xzvf tritonserver2.19.0-jetpack4.6.1.tgz -C ~/TritonServer
cd ~/TritonServer/bin
./tritonserver --model-repository=/home/seeed/server/docs/examples/model_repository --backend-directory=/home/seeed/TritonServer/backends --strict-model-config=false --min-supported-compute-capability=5.3
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_17.png" /></div>

Ahora, hemos configurado todos los preparativos.

## Operando el Programa

Dado que todos los entornos requeridos están desplegados, podemos ejecutar nuestro proyecto siguiendo los siguientes pasos.

**Paso 1.** Descargar modelo y archivos relacionados.

1. Clonar módulo desde GitHub.

Abrir una nueva Terminal y ejecutar:.

```python
git clone https://github.com/LemonCANDY42/Seeed_SMG_AIOT.git
cd Seeed_SMG_AIOT/
git clone https://github.com/LemonCANDY42/OPIXray.git
```

2. Crear una nueva carpeta "weights" para almacenar el peso entrenado de este algoritmo "DOAM.pth". Descargar el [archivo de peso](https://files.seeedstudio.com/wiki/SecurityCheck/DOAM.pth.zip) y ejecutar:

- `cd OPIXray/DOAM`
- `mkdir weights`

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_19.png" /></div>

3. Crear una nueva carpeta "Dataset" para almacenar el [conjunto de datos de imágenes Xray](https://drive.google.com/file/d/12moaa-ylpVu0KmUCZj_XXeA5TxZuCQ3o/view?usp=sharing).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_20.png" /></div>

**Paso 2.** Ejecutando modelo de inferencia.

Ejecutar `python OPIXray_grpc_image_client.py -u 192.168.8.230:8001 -m opi Dataset`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_21.png" /></div>

El resultado se mostrará como la figura a continuación:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg" /></div>

## Solución de Problemas

> Cuando inicies el servidor Triton, puedes encontrar los siguientes errores:

>1. si hay error con libb64.so.0d, ejecutar:
`sudo apt-get install libb64-0d`

>2. si hay error con libre2.so.2, ejecutar:
`sudo apt-get install libre2-dev`

>3. si error: creating server: Internal - failed to load all models, ejecutar:
`--exit-on-error=false`

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>