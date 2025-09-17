---
description: Este wiki presenta cómo comenzar con NVIDIA Jetson Thor y proporciona flujos de trabajo de ejemplo para implementar proyectos de IA y robótica en Thor. También se proporcionan instrucciones detalladas paso a paso y documentación de referencia.
title: Ajustar Isaac GR00T N1.5 para el Brazo LeRobot SO-101 e Implementar en Jetson Thor

keywords:
- Thor
- Robotics
- Seeed
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor
last_update:
  date: 2025-9-11
  author: AI&Robotics Group
---

# Ajustar GR00T N1.5 para el Brazo LeRobot SO-101 e Implementar en NVIDIA Jetson AGX Thor

## Introducción

Este wiki explica cómo **ajustar NVIDIA Isaac GR00T N1.5** para el **brazo LeRobot SO-101** e implementarlo en **NVIDIA Jetson Thor**. Cubre:

- Preparación de hardware para **LeRobot SO-101** y **Jetson AGX Thor**
- Configuración del entorno de software para **GR00T N1.5** en Jetson Thor
- Uso de la **plataforma de entrenamiento LeRobot**: recolección de datos, formateo de conjuntos de datos y ajuste fino para el brazo SO-101
- Flujos de trabajo de ejemplo para implementar la política GR00T N1.5 entrenada (LeRobot + SO-101) en Jetson Thor
- Consejos de solución de problemas y errores comunes

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/cover1.png"/>
</div>

<p></p>

**Se proporcionan instrucciones detalladas paso a paso y documentación de referencia para ayudarle desde la configuración inicial hasta la implementación completa.**

## Comenzando con el Kit de Desarrollo NVIDIA Jetson Thor

### Descripción General de Jetson Thor

El **Kit de Desarrollo NVIDIA® Jetson AGX Thor™** es una potencia para IA física y robótica humanoide. Está construido alrededor de la GPU NVIDIA Blackwell e incluye **128 GB de memoria de alta velocidad**, entregando **hasta 2,070 FP4 TFLOPS** de cómputo de IA mientras opera dentro de un rango de potencia de **40-130 W** (uso común hasta 130 W).

Puedes obtener el Kit de Desarrollo Jetson AGX Thor de Seeed Studio aquí: [Seeed – Kit de Desarrollo NVIDIA Jetson AGX Thor™](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/other/thor-post.png"/>
</div>

Los elementos de hardware incluidos en la caja son una unidad Thor y un adaptador de corriente:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/physical.jpeg"/>
</div>

### Flasheando la Imagen del Sistema Thor

A partir del **10 de septiembre de 2025**, la última versión disponible de imagen del sistema para Thor es **38.2**. Si necesitas volver a flashear el sistema para Thor, por favor sigue las instrucciones en esta sección.
Elementos Requeridos para el Flasheo:

- Un dispositivo host con más de 25 GB de espacio disponible en disco (compatible con Ubuntu o Windows OS)
- Una unidad USB con capacidad de al menos 16 GB
- Un monitor y cable de pantalla DP/HDMI
- Un entorno de suministro de energía capaz de entregar más de 240 W
- Un teclado con interfaz USB

Primero, descarga la imagen del sistema en formato ISO para Thor desde el sitio web oficial de NVIDIA. Haz clic [aquí](https://developer.nvidia.com/embedded/jetpack/downloads) para visitar la página de descarga:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/38.2-iso.png"/>
</div>

Instala Balena Etcher en la máquina host. Para descargar el instalador, haz clic [aquí](https://etcher.balena.io/#:~:text=DOWNLOAD-,Download%20Etcher,-ASSET) y selecciona la versión apropiada basada en tu sistema operativo host:
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/balena.jpg"/>
</div>

Después de descargar el archivo de imagen ISO e instalar exitosamente **Balena Etcher**, inserta la unidad USB en la máquina host. Luego, ejecuta **Balena Etcher** para crear una unidad USB de arranque para flashear Thor:
:::danger
Este proceso formateará la unidad USB. Por favor asegúrate de hacer una copia de seguridad de cualquier dato importante de antemano.
:::

Selecciona el archivo de imagen ISO descargado desde tu almacenamiento local, luego elige el dispositivo objetivo—es decir, tu unidad USB.
<mark>¡Asegúrate de verificar cuidadosamente el nombre del dispositivo objetivo y el directorio de montaje!</mark> Haz clic en `Flash!` y espera a que el proceso se complete. Una vez terminado, la unidad USB para flashear el sistema en Thor está lista:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/step1.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/target.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-U.png" width="300"/>
</div>

<p></p>

A continuación, inserta la unidad USB preparada, teclado, cable de pantalla (DP/HDMI) y fuente de alimentación (Type-C) en la placa Thor para comenzar el proceso de flasheo.
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/flash-insert.jpg"/>
</div>

<p></p>

Enciende el Thor y entra a la interfaz de arranque. Selecciona `Boot Manager`, luego elige la unidad USB que fue insertada en Thor (basado en el nombre de tu unidad USB). Presiona Esc para regresar al menú anterior, y selecciona `Continue`:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/BootM.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/selectU.png" width="300"/>
  <img src="https://files.seeedstudio.com/wiki/other/continue.png" width="300"/>
</div>

<p></p>

Después de una breve pantalla negra, aparecerá la siguiente interfaz. Selecciona `Jetson Thor options` y presiona Enter. Luego, elige la opción
`Flash Jetson AGX Thor Developer Kit on NVMe 0.2.0-r38.2` para flashear la imagen del sistema en la unidad de estado sólido NVMe de Thor:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

Se mostrará una gran cantidad de información de registro en la pantalla. Espera aproximadamente **15 minutos**. Una vez que esta etapa esté completa, el dispositivo se reiniciará automáticamente y procederá a la siguiente interfaz. Espera hasta que la barra de **Progreso de Actualización** alcance el 100%, lo que indica que el proceso de flasheo se ha completado exitosamente:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/option.png" width="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/flash-M2.png" width="450"/>
</div>

Después del flasheo, puedes proceder con la configuración inicial del sistema:
<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/other/ubuntu24.png"/>
</div>

:::warning
Esta imagen del sistema no incluye CUDA, TensorRT u otros componentes SDK de JetPack.
:::

## Configuración Básica del Entorno de Desarrollo en Thor

Esta sección proporciona ejemplos de cómo instalar dependencias de software comúnmente utilizadas en Thor para propósitos de desarrollo. Estas dependencias tienen como objetivo facilitar el desarrollo posterior.

Ten en cuenta que las dependencias listadas son **solo para referencia**—por favor instala paquetes adicionales según los requisitos de sus proyectos individuales.

### Instalando Dependencias Esenciales de Desarrollo

**Instalación del SDK JetPack**
<p></p>
Abre la terminal y ejecuta el siguiente comando. Después de una breve espera, CUDA, TensorRT y otros componentes SDK serán instalados:
```bash
sudo apt update
sudo apt install nvidia-jetpack
```

**Instalación del Navegador**

Firefox ha sido probado y verificado para ejecutarse de manera estable en Ubuntu 24.04:

```bash
sudo apt update
sudo apt install firefox
```

**Instalación de Jtop**

Para instalar jtop, consulta las siguientes instrucciones.

```bash
sudo apt update
sudo apt install python3
sudo apt install python3-pip

sudo pip3 install -U pip
sudo pip3 install jetson-stats
```

**Instalación de Miniconda**

Miniconda se utiliza para aislar entornos de desarrollo. Para instalar miniconda, consulta las siguientes instrucciones:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
source ~/.bashrc
conda --version
```

**Instalando la Versión GPU de PyTorch**

Compilar la versión GPU de PyTorch desde el código fuente en Thor puede resultar en problemas de compatibilidad. Por conveniencia, proporcionamos un archivo `.whl` precompilado para ayudar a los desarrolladores a configurar rápidamente un entorno de desarrollo habilitado para PyTorch en Thor.

Aquí se proporciona un archivo wheel precompilado para instalar PyTorch 2.9 en Thor. Este archivo fue compilado en un entorno `Python 3.10 + CUDA 13`.
Haz clic [**aquí**](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVe_c8F4DR9CluC049HCYoMBP3UXta1kqLEDTvkcYU6s-A?e=d9VEzN) para descargar el archivo `.whl`.

Otros archivos `.whl` de dependencias precompiladas para thor se pueden encontrar [**aquí**](https://pypi.jetson-ai-lab.io/sbsa/cu130).

Si el archivo wheel esperado no está disponible, el desarrollador necesitará construir las dependencias requeridas por sí mismo para completar la configuración del entorno de desarrollo.

### **Instalando Dependencias Adicionales**

Este documento proporciona una imagen Docker de referencia para ayudar a los desarrolladores a adaptarse rápidamente al entorno de desarrollo Jetson AGX Thor.
<mark>Esta imagen es solo para referencia, y los desarrolladores son libres de elegir si usarla basándose en sus necesidades específicas.</mark>

:::note
Dado que el tamaño de la imagen excede los 40 GB, descargarla desde el servidor es relativamente lento.
:::

Esta imagen Docker puede ejecutar de manera estable la inferencia GR00T N1.5. La salida del comando `pip list` en la imagen es la siguiente:

<details>
<summary> pip.list </summary>

```bash
Package                   Version           Location         Installer                              Editable project location
------------------------- ----------------- ---------------- -------------------------------------- -------------------------
absl-py                   2.3.1                              /opt/venv/lib/python3.12/site-packages pip
accelerate                1.2.1                              /opt/venv/lib/python3.12/site-packages pip
aiohappyeyeballs          2.6.1                              /opt/venv/lib/python3.12/site-packages pip
aiohttp                   3.12.15                            /opt/venv/lib/python3.12/site-packages pip
aiosignal                 1.4.0                              /opt/venv/lib/python3.12/site-packages pip
albucore                  0.0.17                             /opt/venv/lib/python3.12/site-packages pip
albumentations            1.4.18                             /opt/venv/lib/python3.12/site-packages pip
annotated-types           0.7.0                              /opt/venv/lib/python3.12/site-packages pip
antlr4-python3-runtime    4.9.3                              /opt/venv/lib/python3.12/site-packages pip
anyio                     4.10.0                             /opt/venv/lib/python3.12/site-packages pip
argon2-cffi               25.1.0                             /opt/venv/lib/python3.12/site-packages pip
argon2-cffi-bindings      25.1.0                             /opt/venv/lib/python3.12/site-packages pip
arrow                     1.3.0                              /opt/venv/lib/python3.12/site-packages pip
asttokens                 3.0.0                              /opt/venv/lib/python3.12/site-packages pip
astunparse                1.6.3                              /opt/venv/lib/python3.12/site-packages pip
async-lru                 2.0.5                              /opt/venv/lib/python3.12/site-packages pip
attrs                     23.2.0                             /usr/lib/python3/dist-packages         debian
av                        12.3.0                             /opt/venv/lib/python3.12/site-packages pip
babel                     2.17.0                             /opt/venv/lib/python3.12/site-packages pip
beautifulsoup4            4.13.5                             /opt/venv/lib/python3.12/site-packages pip
bleach                    6.2.0                              /opt/venv/lib/python3.12/site-packages pip
blessings                 1.7                                /opt/venv/lib/python3.12/site-packages pip
blinker                   1.9.0                              /opt/venv/lib/python3.12/site-packages pip
certifi                   2025.8.3                           /opt/venv/lib/python3.12/site-packages pip
cffi                      2.0.0                              /opt/venv/lib/python3.12/site-packages pip
charset-normalizer        3.4.3                              /opt/venv/lib/python3.12/site-packages pip
click                     8.2.1                              /opt/venv/lib/python3.12/site-packages pip
cloudpickle               3.1.1                              /opt/venv/lib/python3.12/site-packages pip
cmake                     3.31.6                             /opt/venv/lib/python3.12/site-packages pip
comm                      0.2.3                              /opt/venv/lib/python3.12/site-packages pip
contourpy                 1.3.3                              /opt/venv/lib/python3.12/site-packages pip
cramjam                   2.11.0                             /opt/venv/lib/python3.12/site-packages pip
cryptography              41.0.7                             /usr/lib/python3/dist-packages         debian
cuda-bindings             13.0.0                             /opt/venv/lib/python3.12/site-packages pip
cuda-core                 0.3.2                              /opt/venv/lib/python3.12/site-packages pip
cuda-pathfinder           1.2.2                              /opt/venv/lib/python3.12/site-packages pip
cycler                    0.12.1                             /opt/venv/lib/python3.12/site-packages pip
Cython                    3.1.3                              /opt/venv/lib/python3.12/site-packages pip
datasets                  4.0.0                              /opt/venv/lib/python3.12/site-packages pip
dbus-python               1.3.2                              /usr/lib/python3/dist-packages
debugpy                   1.8.16                             /opt/venv/lib/python3.12/site-packages pip
decorator                 5.2.1                              /opt/venv/lib/python3.12/site-packages pip
decord                    0.6.0                              /opt/venv/lib/python3.12/site-packages pip
deepdiff                  8.6.1                              /opt/venv/lib/python3.12/site-packages pip
defusedxml                0.7.1                              /opt/venv/lib/python3.12/site-packages pip
devscripts                2.23.7                             /usr/lib/python3/dist-packages
diffusers                 0.36.0.dev0                        /opt/venv/lib/python3.12/site-packages pip
dill                      0.3.8                              /opt/venv/lib/python3.12/site-packages pip
distro                    1.9.0                              /usr/lib/python3/dist-packages         debian
dm-tree                   0.1.8                              /opt/venv/lib/python3.12/site-packages pip
docker-pycreds            0.4.0                              /opt/venv/lib/python3.12/site-packages pip
docstring_parser          0.17.0                             /opt/venv/lib/python3.12/site-packages pip
docutils                  0.22                               /opt/venv/lib/python3.12/site-packages pip
draccus                   0.11.5                             /opt/venv/lib/python3.12/site-packages pip
einops                    0.8.1                              /opt/venv/lib/python3.12/site-packages pip
eval_type_backport        0.2.2                              /opt/venv/lib/python3.12/site-packages pip
evdev                     1.9.2                              /opt/venv/lib/python3.12/site-packages pip
executing                 2.2.1                              /opt/venv/lib/python3.12/site-packages pip
Farama-Notifications      0.0.4                              /opt/venv/lib/python3.12/site-packages pip
fastjsonschema            2.21.2                             /opt/venv/lib/python3.12/site-packages pip
fastparquet               2024.11.0                          /opt/venv/lib/python3.12/site-packages pip
feetech-servo-sdk         1.0.0                              /opt/venv/lib/python3.12/site-packages pip
filelock                  3.19.1                             /opt/venv/lib/python3.12/site-packages pip
flash_attn                2.8.4                              /opt/venv/lib/python3.12/site-packages pip
Flask                     3.1.2                              /opt/venv/lib/python3.12/site-packages pip
flatbuffers               25.2.10                            /opt/venv/lib/python3.12/site-packages pip
fonttools                 4.59.2                             /opt/venv/lib/python3.12/site-packages pip
fqdn                      1.5.1                              /opt/venv/lib/python3.12/site-packages pip
frozenlist                1.7.0                              /opt/venv/lib/python3.12/site-packages pip
fsspec                    2025.3.0                           /opt/venv/lib/python3.12/site-packages pip
gast                      0.6.0                              /opt/venv/lib/python3.12/site-packages pip
gitdb                     4.0.12                             /opt/venv/lib/python3.12/site-packages pip
GitPython                 3.1.45                             /opt/venv/lib/python3.12/site-packages pip
google-pasta              0.2.0                              /opt/venv/lib/python3.12/site-packages pip
grpcio                    1.74.0                             /opt/venv/lib/python3.12/site-packages pip
gymnasium                 1.0.0                              /opt/venv/lib/python3.12/site-packages pip
h11                       0.16.0                             /opt/venv/lib/python3.12/site-packages pip
h5py                      3.12.1                             /opt/venv/lib/python3.12/site-packages pip
hf-xet                    1.1.9                              /opt/venv/lib/python3.12/site-packages pip
httpcore                  1.0.9                              /opt/venv/lib/python3.12/site-packages pip
httplib2                  0.20.4                             /usr/lib/python3/dist-packages
httpx                     0.28.1                             /opt/venv/lib/python3.12/site-packages pip
huggingface-hub           0.34.4                             /opt/venv/lib/python3.12/site-packages pip
hydra-core                1.3.2                              /opt/venv/lib/python3.12/site-packages pip
id                        1.5.0                              /opt/venv/lib/python3.12/site-packages pip
idna                      3.10                               /opt/venv/lib/python3.12/site-packages pip
imageio                   2.34.2                             /opt/venv/lib/python3.12/site-packages pip
importlib_metadata        8.7.0                              /opt/venv/lib/python3.12/site-packages pip
iniconfig                 2.1.0                              /opt/venv/lib/python3.12/site-packages pip
inquirerpy                0.3.4                              /opt/venv/lib/python3.12/site-packages pip
iopath                    0.1.9                              /opt/venv/lib/python3.12/site-packages pip
ipykernel                 6.30.1                             /opt/venv/lib/python3.12/site-packages pip
ipython                   9.5.0                              /opt/venv/lib/python3.12/site-packages pip
ipython_pygments_lexers   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
ipywidgets                8.1.7                              /opt/venv/lib/python3.12/site-packages pip
isoduration               20.11.0                            /opt/venv/lib/python3.12/site-packages pip
itsdangerous              2.2.0                              /opt/venv/lib/python3.12/site-packages pip
jaraco.classes            3.4.0                              /opt/venv/lib/python3.12/site-packages pip
jaraco.context            6.0.1                              /opt/venv/lib/python3.12/site-packages pip
jaraco.functools          4.3.0                              /opt/venv/lib/python3.12/site-packages pip
jedi                      0.19.2                             /opt/venv/lib/python3.12/site-packages pip
jeepney                   0.9.0                              /opt/venv/lib/python3.12/site-packages pip
Jinja2                    3.1.6                              /opt/venv/lib/python3.12/site-packages pip
json5                     0.12.1                             /opt/venv/lib/python3.12/site-packages pip
jsonlines                 4.0.0                              /opt/venv/lib/python3.12/site-packages pip
jsonpointer               3.0.0                              /opt/venv/lib/python3.12/site-packages pip
jsonschema                4.25.1                             /opt/venv/lib/python3.12/site-packages pip
jsonschema-specifications 2025.9.1                           /opt/venv/lib/python3.12/site-packages pip
jupyter                   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
jupyter_client            8.6.3                              /opt/venv/lib/python3.12/site-packages pip
jupyter-console           6.6.3                              /opt/venv/lib/python3.12/site-packages pip
jupyter_core              5.8.1                              /opt/venv/lib/python3.12/site-packages pip
jupyter-events            0.12.0                             /opt/venv/lib/python3.12/site-packages pip
jupyter-lsp               2.3.0                              /opt/venv/lib/python3.12/site-packages pip
jupyter_server            2.17.0                             /opt/venv/lib/python3.12/site-packages pip
jupyter_server_terminals  0.5.3                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab                4.4.7                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_myst           2.4.2                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_pygments       0.3.0                              /opt/venv/lib/python3.12/site-packages pip
jupyterlab_server         2.27.3                             /opt/venv/lib/python3.12/site-packages pip
jupyterlab_widgets        3.0.15                             /opt/venv/lib/python3.12/site-packages pip
keras                     3.11.3                             /opt/venv/lib/python3.12/site-packages pip
keyring                   25.6.0                             /opt/venv/lib/python3.12/site-packages pip
kiwisolver                1.4.9                              /opt/venv/lib/python3.12/site-packages pip
kornia                    0.7.4                              /opt/venv/lib/python3.12/site-packages pip
kornia_rs                 0.1.9                              /opt/venv/lib/python3.12/site-packages pip
lark                      1.2.2                              /opt/venv/lib/python3.12/site-packages pip
launchpadlib              1.11.0                             /usr/lib/python3/dist-packages
lazr.restfulclient        0.14.6                             /usr/lib/python3/dist-packages
lazr.uri                  1.0.6                              /usr/lib/python3/dist-packages
lazy_loader               0.4                                /opt/venv/lib/python3.12/site-packages pip
lerobot                   0.3.4             /opt/lerobot     /opt/venv/lib/python3.12/site-packages pip
libclang                  18.1.1                             /opt/venv/lib/python3.12/site-packages pip
llvmlite                  0.44.0                             /opt/venv/lib/python3.12/site-packages pip
lockfile                  0.12.2                             /opt/venv/lib/python3.12/site-packages pip
Mako                      1.3.10                             /opt/venv/lib/python3.12/site-packages pip
Markdown                  3.9                                /opt/venv/lib/python3.12/site-packages pip
markdown-it-py            4.0.0                              /opt/venv/lib/python3.12/site-packages pip
MarkupSafe                3.0.2                              /opt/venv/lib/python3.12/site-packages pip
matplotlib                3.10.0                             /opt/venv/lib/python3.12/site-packages pip
matplotlib-inline         0.1.7                              /opt/venv/lib/python3.12/site-packages pip
mdurl                     0.1.2                              /opt/venv/lib/python3.12/site-packages pip
mergedeep                 1.3.4                              /opt/venv/lib/python3.12/site-packages pip
mistune                   3.1.4                              /opt/venv/lib/python3.12/site-packages pip
ml_dtypes                 0.5.3                              /opt/venv/lib/python3.12/site-packages pip
more-itertools            10.8.0                             /opt/venv/lib/python3.12/site-packages pip
mpmath                    1.3.0                              /opt/venv/lib/python3.12/site-packages pip
msgpack                   1.1.1                              /opt/venv/lib/python3.12/site-packages pip
multidict                 6.6.4                              /opt/venv/lib/python3.12/site-packages pip
multiprocess              0.70.16                            /opt/venv/lib/python3.12/site-packages pip
mypy_extensions           1.1.0                              /opt/venv/lib/python3.12/site-packages pip
namex                     0.1.0                              /opt/venv/lib/python3.12/site-packages pip
nbclient                  0.10.2                             /opt/venv/lib/python3.12/site-packages pip
nbconvert                 7.16.6                             /opt/venv/lib/python3.12/site-packages pip
nbformat                  5.10.4                             /opt/venv/lib/python3.12/site-packages pip
nest-asyncio              1.6.0                              /opt/venv/lib/python3.12/site-packages pip
networkx                  3.5                                /opt/venv/lib/python3.12/site-packages pip
nh3                       0.3.0                              /opt/venv/lib/python3.12/site-packages pip
ninja                     1.13.0                             /opt/venv/lib/python3.12/site-packages pip
notebook                  7.4.5                              /opt/venv/lib/python3.12/site-packages pip
notebook_shim             0.2.4                              /opt/venv/lib/python3.12/site-packages pip
numba                     0.61.2                             /opt/venv/lib/python3.12/site-packages pip
numpy                     2.3.3                              /opt/venv/lib/python3.12/site-packages pip
numpydantic               1.6.7                              /opt/venv/lib/python3.12/site-packages pip
nvtx                      0.2.13                             /opt/venv/lib/python3.12/site-packages pip
oauthlib                  3.2.2                              /usr/lib/python3/dist-packages
omegaconf                 2.3.0                              /opt/venv/lib/python3.12/site-packages pip
onnx                      1.17.0                             /opt/venv/lib/python3.12/site-packages pip
opencv-contrib-python     4.13.0                             /opt/venv/lib/python3.12/site-packages pip
opencv-python             4.11.0.86                          /opt/venv/lib/python3.12/site-packages pip
opencv-python-headless    4.11.0.86                          /opt/venv/lib/python3.12/site-packages pip
opt_einsum                3.4.0                              /opt/venv/lib/python3.12/site-packages pip
optimum                   1.27.0                             /opt/venv/lib/python3.12/site-packages pip
optree                    0.17.0                             /opt/venv/lib/python3.12/site-packages pip
orderly-set               5.5.0                              /opt/venv/lib/python3.12/site-packages pip
packaging                 25.0                               /opt/venv/lib/python3.12/site-packages pip
pandas                    2.2.3                              /opt/venv/lib/python3.12/site-packages pip
pandocfilters             1.5.1                              /opt/venv/lib/python3.12/site-packages pip
parso                     0.8.5                              /opt/venv/lib/python3.12/site-packages pip
peft                      0.17.0                             /opt/venv/lib/python3.12/site-packages pip
pettingzoo                1.25.0                             /opt/venv/lib/python3.12/site-packages pip
pexpect                   4.9.0                              /opt/venv/lib/python3.12/site-packages pip
pfzy                      0.3.4                              /opt/venv/lib/python3.12/site-packages pip
pid                       3.0.4                              /opt/venv/lib/python3.12/site-packages pip
pillow                    11.3.0                             /opt/venv/lib/python3.12/site-packages pip
pip                       25.2                               /opt/venv/lib/python3.12/site-packages pip
pkginfo                   1.12.1.2                           /opt/venv/lib/python3.12/site-packages pip
platformdirs              4.4.0                              /opt/venv/lib/python3.12/site-packages pip
pluggy                    1.6.0                              /opt/venv/lib/python3.12/site-packages pip
portalocker               3.2.0                              /opt/venv/lib/python3.12/site-packages pip
prometheus_client         0.22.1                             /opt/venv/lib/python3.12/site-packages pip
prompt_toolkit            3.0.52                             /opt/venv/lib/python3.12/site-packages pip
propcache                 0.3.2                              /opt/venv/lib/python3.12/site-packages pip
protobuf                  6.32.0                             /opt/venv/lib/python3.12/site-packages pip
psutil                    7.0.0                              /opt/venv/lib/python3.12/site-packages pip
ptyprocess                0.7.0                              /opt/venv/lib/python3.12/site-packages pip
pure_eval                 0.2.3                              /opt/venv/lib/python3.12/site-packages pip
pyarrow                   21.0.0                             /opt/venv/lib/python3.12/site-packages pip
pycparser                 2.23                               /opt/venv/lib/python3.12/site-packages pip
pycuda                    2025.1.1                           /opt/venv/lib/python3.12/site-packages pip
pydantic                  2.10.6                             /opt/venv/lib/python3.12/site-packages pip
pydantic_core             2.27.2                             /opt/venv/lib/python3.12/site-packages pip
Pygments                  2.19.2                             /opt/venv/lib/python3.12/site-packages pip
PyGObject                 3.48.2                             /usr/lib/python3/dist-packages
PyJWT                     2.7.0                              /usr/lib/python3/dist-packages         debian
pynput                    1.8.1                              /opt/venv/lib/python3.12/site-packages pip
pyparsing                 3.1.1                              /usr/lib/python3/dist-packages         debian
pyrsistent                0.20.0                             /usr/lib/python3/dist-packages
pyserial                  3.5                                /opt/venv/lib/python3.12/site-packages pip
pytest                    8.4.2                              /opt/venv/lib/python3.12/site-packages pip
python-apt                2.7.7+ubuntu5                      /usr/lib/python3/dist-packages
python-daemon             3.1.2                              /opt/venv/lib/python3.12/site-packages pip
python-dateutil           2.9.0.post0                        /opt/venv/lib/python3.12/site-packages pip
python-json-logger        3.3.0                              /opt/venv/lib/python3.12/site-packages pip
python-xlib               0.33                               /opt/venv/lib/python3.12/site-packages pip
pytools                   2025.2.4                           /opt/venv/lib/python3.12/site-packages pip
pytorch3d                 0.7.8                              /opt/venv/lib/python3.12/site-packages pip
pytz                      2025.2                             /opt/venv/lib/python3.12/site-packages pip
PyYAML                    6.0.2                              /opt/venv/lib/python3.12/site-packages pip
pyyaml-include            1.4.1                              /opt/venv/lib/python3.12/site-packages pip
pyzmq                     27.1.0                             /opt/venv/lib/python3.12/site-packages pip
ray                       2.40.0                             /opt/venv/lib/python3.12/site-packages pip
readme_renderer           44.0                               /opt/venv/lib/python3.12/site-packages pip
referencing               0.36.2                             /opt/venv/lib/python3.12/site-packages pip
regex                     2025.9.1                           /opt/venv/lib/python3.12/site-packages pip
requests                  2.32.3                             /opt/venv/lib/python3.12/site-packages pip
requests-toolbelt         1.0.0                              /opt/venv/lib/python3.12/site-packages pip
rerun-sdk                 0.24.1                             /opt/venv/lib/python3.12/site-packages pip
rfc3339-validator         0.1.4                              /opt/venv/lib/python3.12/site-packages pip
rfc3986                   2.0.0                              /opt/venv/lib/python3.12/site-packages pip
rfc3986-validator         0.1.1                              /opt/venv/lib/python3.12/site-packages pip
rfc3987-syntax            1.1.0                              /opt/venv/lib/python3.12/site-packages pip
rich                      14.1.0                             /opt/venv/lib/python3.12/site-packages pip
rpds-py                   0.27.1                             /opt/venv/lib/python3.12/site-packages pip
safetensors               0.6.2                              /opt/venv/lib/python3.12/site-packages pip
scikit-build              0.18.1                             /opt/venv/lib/python3.12/site-packages pip
scikit-image              0.25.2                             /opt/venv/lib/python3.12/site-packages pip
scipy                     1.16.1                             /opt/venv/lib/python3.12/site-packages pip
SecretStorage             3.4.0                              /opt/venv/lib/python3.12/site-packages pip
semantic-version          2.10.0                             /opt/venv/lib/python3.12/site-packages pip
Send2Trash                1.8.3                              /opt/venv/lib/python3.12/site-packages pip
sentencepiece             0.2.1                              /opt/venv/lib/python3.12/site-packages pip
sentry-sdk                2.37.1                             /opt/venv/lib/python3.12/site-packages pip
service                   0.6.0                              /opt/venv/lib/python3.12/site-packages pip
setproctitle              1.3.7                              /opt/venv/lib/python3.12/site-packages pip
setuptools                80.9.0                             /opt/venv/lib/python3.12/site-packages pip
setuptools-rust           1.12.0                             /opt/venv/lib/python3.12/site-packages pip
shtab                     1.7.2                              /opt/venv/lib/python3.12/site-packages pip
siphash24                 1.8                                /opt/venv/lib/python3.12/site-packages pip
six                       1.16.0                             /usr/lib/python3/dist-packages
smmap                     5.0.2                              /opt/venv/lib/python3.12/site-packages pip
sniffio                   1.3.1                              /opt/venv/lib/python3.12/site-packages pip
soupsieve                 2.8                                /opt/venv/lib/python3.12/site-packages pip
stack-data                0.6.3                              /opt/venv/lib/python3.12/site-packages pip
sympy                     1.14.0                             /opt/venv/lib/python3.12/site-packages pip
tensorboard               2.20.0                             /opt/venv/lib/python3.12/site-packages pip
tensorboard-data-server   0.7.2                              /opt/venv/lib/python3.12/site-packages pip
tensorflow                2.20.0                             /opt/venv/lib/python3.12/site-packages pip
tensorrt                  10.13.2.6                          /opt/venv/lib/python3.12/site-packages pip
termcolor                 3.1.0                              /opt/venv/lib/python3.12/site-packages pip
terminado                 0.18.1                             /opt/venv/lib/python3.12/site-packages pip
tf_keras                  2.20.1                             /opt/venv/lib/python3.12/site-packages pip
tianshou                  0.5.1                              /opt/venv/lib/python3.12/site-packages pip
tifffile                  2025.9.9                           /opt/venv/lib/python3.12/site-packages pip
timm                      1.0.14                             /opt/venv/lib/python3.12/site-packages pip
tinycss2                  1.4.0                              /opt/venv/lib/python3.12/site-packages pip
tokenizers                0.21.4                             /opt/venv/lib/python3.12/site-packages pip
toml                      0.10.2                             /opt/venv/lib/python3.12/site-packages pip
torch                     2.9.0                              /opt/venv/lib/python3.12/site-packages pip
torchvision               0.24.0                             /opt/venv/lib/python3.12/site-packages pip
tornado                   6.5.2                              /opt/venv/lib/python3.12/site-packages pip
tqdm                      4.67.1                             /opt/venv/lib/python3.12/site-packages pip
traitlets                 5.14.3                             /opt/venv/lib/python3.12/site-packages pip
transformers              4.51.3                             /opt/venv/lib/python3.12/site-packages pip
triton                    3.5.0+gite3b8f77a                  /opt/venv/lib/python3.12/site-packages pip
twine                     6.2.0                              /opt/venv/lib/python3.12/site-packages pip
typeguard                 4.4.2                              /opt/venv/lib/python3.12/site-packages pip
types-python-dateutil     2.9.0.20250822                     /opt/venv/lib/python3.12/site-packages pip
typing_extensions         4.12.2                             /opt/venv/lib/python3.12/site-packages pip
typing-inspect            0.9.0                              /opt/venv/lib/python3.12/site-packages pip
tyro                      0.9.17                             /opt/venv/lib/python3.12/site-packages pip
tzdata                    2025.2                             /opt/venv/lib/python3.12/site-packages pip
uri-template              1.3.0                              /opt/venv/lib/python3.12/site-packages pip
urllib3                   2.5.0                              /opt/venv/lib/python3.12/site-packages pip
uv                        0.8.16                             /opt/venv/lib/python3.12/site-packages pip
wadllib                   1.3.6                              /usr/lib/python3/dist-packages
wandb                     0.18.0                             /opt/venv/lib/python3.12/site-packages pip
wcwidth                   0.2.13                             /opt/venv/lib/python3.12/site-packages pip
webcolors                 24.11.1                            /opt/venv/lib/python3.12/site-packages pip
webencodings              0.5.1                              /opt/venv/lib/python3.12/site-packages pip
websocket-client          1.8.0                              /opt/venv/lib/python3.12/site-packages pip
Werkzeug                  3.1.3                              /opt/venv/lib/python3.12/site-packages pip
wheel                     0.45.1                             /opt/venv/lib/python3.12/site-packages pip
widgetsnbextension        4.0.14                             /opt/venv/lib/python3.12/site-packages pip
wrapt                     1.17.3                             /opt/venv/lib/python3.12/site-packages pip
xxhash                    3.5.0                              /opt/venv/lib/python3.12/site-packages pip
yarl                      1.20.1                             /opt/venv/lib/python3.12/site-packages pip
zipp                      3.23.0                             /opt/venv/lib/python3.12/site-packages pip
```

</details>

La imagen se puede extraer directamente desde Docker Hub e incluye dependencias comúnmente utilizadas como `PyTorch`, `TensorRT` y `FlashAttention`:

```bash
docker pull johnnync/lerobot:r38.2.aarch64-cu130-24.04
```

Para ejecutar Docker en Thor, consulte el siguiente comando. Reemplace `your_docker_img:tag` con el nombre y etiqueta de su imagen Docker, o use el ID de la imagen:

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  your_docker_img:tag
```

## Recolección de Datos Usando el SO-ARM

La recolección de datos para el brazo robótico lerobot se puede realizar ya sea en una PC o directamente en un dispositivo Jetson.

- Método 1: Recolectar datos usando Jetson
- Método 2: Recolectar datos usando una PC Ubuntu

Los procedimientos de recolección de datos son esencialmente los mismos para ambos métodos.

:::warning
**¡Jetson puede no ser capaz de transmitir simultáneamente dos cámaras USB con los mismos requisitos de ancho de banda. Si conecta dos cámaras USB, deben estar conectadas a diferentes chips de hub USB!**
:::

Para transmitir dos cámaras USB simultáneamente en Thor, después de conectar una cámara al puerto USB-A, también necesitará usar un **hub USB externo conectado a través del puerto USB Type-C**. Esto asegura que la segunda cámara USB esté montada en un controlador de hub USB diferente dentro de Thor.
 Un ejemplo de un hub USB Type-C compatible se muestra a continuación:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/hub.png" height="400"/>
</div>

### Configuración del Entorno Lerobot

**Instalación de Miniconda**

```bash
#Jetson 
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc


#PC 
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

**Instalación de Dependencias**

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot

# Use the latest version maintained by Seeed
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
conda install ffmpeg -c conda-forge
```

**Instalando lerobot**

:::note
**¡Antes de ejecutar el comando de instalación, asegúrese de que las versiones compatibles con GPU de PyTorch y TorchVision ya estén instaladas!**
:::

Para verificar que su PyTorch instalado esté usando soporte de GPU, ingrese lo siguiente en la terminal:

```bash
import torch
print(torch.cuda.is_available())
```

Si planea recolectar datos en un dispositivo Jetson, puede consultar las secciones anteriores para instalar PyTorch, o revisar este [artículo](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)

Una vez que se confirme que PyTorch está instalado correctamente, ejecute lo siguiente en la terminal:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

### Calibración del Servo

El proceso de calibración del servo no se detalla en este documento. Consulte el siguiente artículo para obtener más información:

[haga clic aquí](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#%E6%A0%A1%E5%87%86%E8%88%B5%E6%9C%BA%E5%B9%B6%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82)

### Calibración del SO-ARM

Primero, asegúrese de que la conexión funcione correctamente y que los puertos correspondientes a los brazos robóticos sean reconocidos correctamente.

```bash
python -m lerobot.find_port

OUTPUT：

Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM0
Reconnect the USB cable.
```

El puerto para el brazo líder es probablemente `/dev/ttyACM0`. El puerto para el brazo seguidor es probablemente: `/dev/ttyACM1`

:::note
**Al calibrar los brazos robóticos, por favor NO conecte ninguna cámara USB, ya que esto puede causar conflictos de puertos o asignaciones incorrectas de puertos.**
:::

**¡Después de ejecutar el script de calibración, mueva manualmente cada articulación del brazo robótico para asegurar que alcance su rango completo de movimiento! No hacerlo puede resultar en una discrepancia entre las poses de los brazos líder y seguidor durante la teleoperación.**

```bash
# Grant permission to access the serial ports
sudo chmod 666 /dev/ttyACM* # This needs to be done each time the USB device is replugged

# Calibrate the follower arm
python -m lerobot.calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm

# Calibrate the follower arm
python -m lerobot.calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

Una vez que tanto el brazo líder como el seguidor estén calibrados, ejecute el script de prueba de teleoperación:

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

Use el brazo líder para teleoperar el brazo seguidor. Asegúrese de que los dos brazos reflejen correctamente la pose del otro. Si no es así, se requiere recalibración.

### Instalación de Cámara

Generalmente se recomienda instalar una cámara en la articulación de la muñeca del brazo robótico, y otra cámara en la superficie del escritorio, para asegurar una cobertura adecuada de la postura del brazo.
<mark>El enfoque específico de instalación depende de su escenario de aplicación; el ejemplo mostrado a continuación es solo para referencia.</mark>
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/camdata1.png" height="450"/>
  <img src="https://files.seeedstudio.com/wiki/other/camdata2.png" height="450"/>
</div>

Ejecute el siguiente script para asegurar que el sistema detecte correctamente las cámaras USB conectadas y que las cámaras puedan ser accedidas correctamente:

```bash
# Use 'opencv' for standard RGB cameras. For Intel Realsense cameras, replace 'opencv' with 'realsense'.
python -m lerobot.find_cameras opencv
```

Si las cámaras son detectadas y accesibles correctamente, la terminal mostrará:

```bash
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

La terminal mostrará una lista de IDs de cámara disponibles. ¡Asegúrese de tomar nota de los IDs para garantizar que su programa pueda acceder correctamente a las cámaras!

Para probar el uso de la cámara durante la teleoperación:

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

Aquí, `--robot.cameras` necesita la configuración correcta de la cámara y el ID.

### Recolección de Datos

Si el SO-ARM está destinado a grabar datos localmente, consulte los siguientes parámetros de línea de comandos:

```bash
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeed_studio/test \
    --dataset.num_episodes=20 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

`--dataset.repo_id`: Especifica el nombre de la carpeta del conjunto de datos

`--dataset.single_task`: Descripción de la tarea

`--dataset.num_episodes`: Número de muestras a recolectar

`--dataset.episode_time_s`: Duración (en segundos) de cada muestra grabada

`--dataset.reset_time_s`: Tiempo (en segundos) para restablecer el entorno

:::note
**Si el proceso de recolección de datos se interrumpe inesperadamente, puede volver a ejecutar el script de recolección de datos con la bandera `--resume=true` para continuar desde donde se quedó.**
:::

Si desea sincronizar los datos recolectados con Hugging Face, debe configurar su HUGGINGFACE_TOKEN antes de grabar:

```bash
hf auth login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential

# Replace ${HUGGINGFACE_TOKEN} with your actual Hugging Face access token
git config --global credential.helper store
HF_USER=$(hf auth whoami | head -n 1)
echo $HF_USER

# Record and upload the dataset to Hugging Face
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=20 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

:::tip
¡Los datos recopilados se guardarán localmente en el directorio `~/.cache/huggingface/lerobot`!
:::

### Visualización de Datos Recopilados

**Visualizar Dataset Basado en la Nube**

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/so101_test \
```

**Visualizar Dataset Local**

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id seeed_studio/so101_test \
```

**Reproducir un Episodio Grabado**

```bash
python -m lerobot.replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/so101_test \
    --dataset.episode=0
```

El parámetro `--dataset.episode=0` especifica qué episodio reproducir en el brazo seguidor.
Por ejemplo: ejecutar este script hará que el brazo seguidor ejecute las acciones exactas grabadas durante `episode_0`.

### Entrenamiento de Políticas

Si planeas entrenar la política localmente, puedes consultar el siguiente comando:

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=seeed_studio/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

`--policy.type`: Especifica el tipo de política a entrenar

`--policy.push_to_hub=false\`: Si subir los pesos entrenados a la nube (Hugging Face Hub)

`--steps`: Número de pasos de entrenamiento

:::tip
En las siguientes secciones, introduciremos una plataforma de entrenamiento basada en la nube y demostraremos el uso básico. Puedes elegir completar el entrenamiento de manera más eficiente en el servidor remoto.
:::

:::note
Si eliges entrenar la política en la nube, asegúrate de que tu dataset esté subido al servidor en la nube con anticipación, o descargado desde Hugging Face Hub. Sin embargo, debido a posibles problemas de red al descargar directamente desde Hugging Face Hub, se recomienda encarecidamente subir manualmente el dataset a tu servidor en la nube.
:::

## Usar NVIDIA Brev para entrenar políticas

NVIDIA Brev proporciona acceso simplificado a instancias GPU de NVIDIA en plataformas de nube populares, configuración automática del entorno y opciones de implementación flexibles, permitiendo a los desarrolladores comenzar a experimentar instantáneamente.

URL de acceso a la plataforma:
[https://login.brev.nvidia.com/signin](https://login.brev.nvidia.com/signin)

Necesitarás registrar una cuenta para usar la plataforma. Esta sección introduce el uso básico de la plataforma de entrenamiento.

### Habilitación de la Plataforma de Entrenamiento Basada en la Nube

**Instrucciones Paso a Paso**

- Crear una Instancia de Servidor en la Nube - paso 1

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train0.png" width="600"/>
</div>

- Crear una Instancia de Servidor en la Nube - paso 2

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train1.png" width="600"/>
</div>

- Crear una Instancia de Servidor en la Nube - paso 3

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train2.png" width="600"/>
</div>

**Lanzar el Jupyter Notebook Basado en Web**：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote0.png" width="600"/>
</div>
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/jnote1.png" width="600"/>
</div>

### Entrenamiento del Modelo y Exportación desde el Servidor

**Los desarrolladores pueden entrenar modelos directamente dentro del terminal del notebook. A continuación se muestra un ejemplo para entrenar un modelo act y exportarlo del servidor posteriormente.**

Instalar Conda en el servidor:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
source ~/miniconda3/bin/activate
conda init --all
```

Instalar el proyecto lerobot:

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot && pip install -e ".[feetech]"
```

Entrenar el modelo ACT:

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train4.png" width="600"/>
</div>

:::note
Si quieres entrenar o ajustar Gr00t en un servidor, puedes consultar este [enlace](https://github.com/NVIDIA/Isaac-GR00T).
:::

**Después de completar el entrenamiento, es posible que quieras descargar el modelo a tu máquina local. Pero la barra lateral de Jupyter Notebook no admite navegación directa a las carpetas de entrenamiento de modelos.**

La solución es: Primero comprimir la carpeta objetivo en un archivo `.zip` o `.tar.gz`, luego descargar el archivo comprimido a través de la interfaz del notebook. Consulta la figura a continuación como ejemplo.
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/train5.png" width="600"/>
</div>

## Inferencia de Isaac GR00T N1.5 en Thor

Jetson AGX Thor, como una poderosa plataforma de computación y despliegue en el borde, proporciona recursos suficientes para soportar inferencia de modelos a gran escala. En esta sección, basándonos en el contenido previamente introducido, demostramos cómo ejecutar inferencia para GR00T N1.5 en Thor.

GR00T N1.5 es un sistema base de código abierto lanzado por NVIDIA Research en el campo del aprendizaje robótico. Su objetivo es proporcionar un marco unificado para el entrenamiento e inferencia de IA encarnada, enfocándose particularmente en el aprendizaje por imitación y el aprendizaje de políticas impulsado por modelos a gran escala.

### Preparación

Los modelos preentrenados de GR00T N1.5 están disponibles a través de **Hugging Faces**. Puedes descargarlos desde el siguiente enlace:

[https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/gr00tD.png" width="600"/>
</div>

Todas las dependencias requeridas para la inferencia de GR00T han sido preconfiguradas en una imagen Docker dedicada.

Usa el siguiente comando para iniciar el contenedor:

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  lerobot:r38.2.aarch64-cu130-24.04
```

Clonar con Git el código fuente de Gr00t, e instalarlo:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

Gr00t es completamente compatible con los datasets recopilados usando el framework lerobot. Consulta la sección anterior "**Recopilación de Datos**" para preparar tu dataset para el ajuste fino del modelo Gr00t.

### Ajuste Fino del Modelo

**El proceso de ajuste fino puede ejecutarse ya sea en la plataforma de entrenamiento en la nube proporcionada o directamente dentro del contenedor Docker en Thor**.

Si no has descargado ningún modelo GR00T preentrenado y no planeas usar una versión personalizada, puedes usar el siguiente comando para ajustar basándote en los pesos de Hugging Face:

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

Este script descargará automáticamente el modelo GR00T preentrenado desde Hugging Face y comenzará el proceso de ajuste fino.

Si deseas usar un modelo GR00T preentrenado almacenado localmente, modifica el comando de la siguiente manera:

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --base-model-path ./pretrained/GR00T-N1.5-3
```

`--dataset-path` es la ruta del archivo de datos de recopilación de SO-ARM.

:::note
La configuración predeterminada de ajuste fino requiere ~25G de VRAM. Si no tienes tanta VRAM, intenta agregar la bandera `--no-tune_diffusion_model` al script gr00t_finetune.py.
:::

### Ejecutar Inferencia con GR00T N1.5

Para lograr un rendimiento óptimo, se recomienda replicar la configuración del mundo real utilizada durante la recopilación de datos lo más fielmente posible al desplegar modelos GR00T ajustados. Esto se debe a que las capacidades de generalización del modelo son limitadas.
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy.jpg" width="400"/>
</div>

Dentro del contenedor Docker, abre un terminal y lanza el servicio de inferencia GR00T:

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

Al lanzarse exitosamente, el terminal debería mostrar logs similares a:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy1.png" width="600"/>
</div>

Abre otro terminal, y usa el siguiente comando para entrar al mismo contenedor desde un shell diferente:

```bash
sudo docker exec -it <container id> /bin/bahs
```

Luego, en este segundo shell, inicia el cliente de inferencia:

```bash
  python examples/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 1, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

Cuando el proceso cliente se inicie exitosamente, debería aparecer la siguiente salida:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/deploy2.png" width="600"/>
</div>

:::tip
Durante la primera ejecución del proceso cliente, debes calibrar los servos del brazo. El proceso de calibración es el mismo que se describió anteriormente.

Asegúrese de que cada articulación se mueva a su rango completo de movimiento para garantizar un comportamiento adecuado de teleoperación e inferencia.
:::

Una vez que todo esté configurado, GR00T N1.5 puede desplegarse exitosamente en Jetson AGX Thor. El sistema y el entorno de hardware ahora están verificados para soportar inferencia completa:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/123.gif" width="600"/>
</div>

## Preguntas Frecuentes

P1: ¿La herramienta Brev CLI no funciona en la plataforma de entrenamiento en la nube?

Esto a menudo se debe a problemas de red.
Puede instalar e iniciar sesión en Brev CLI en su host Ubuntu local, luego intentar conectarse a su instancia en la nube usando SSH desde su terminal local.

P2: ¿Cómo subo datos a la plataforma de entrenamiento?

Use el siguiente comando: `scp <ruta-archivo-local> <nombre-instancia-brev>:<ruta-archivo-remoto>`, por ejemplo `scp -r ./record_2_cameras/ gr00t-trainer:/home/ubuntu/Datasets`

## Referencias

- https://developer.nvidia.com/embedded/jetpack
- https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
