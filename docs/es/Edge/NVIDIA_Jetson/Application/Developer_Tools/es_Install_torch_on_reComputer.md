---
description: Este artículo proporciona una guía paso a paso para instalar PyTorch optimizado por NVIDIA en dispositivos reComputer basados en Jetson, adaptada a diferentes versiones de JetPack (5, 6 y otras). Explica cómo configurar las dependencias necesarias, instalar cuSPARSELt para versiones más recientes de PyTorch y verificar la instalación. Además, cubre el uso de Miniconda para gestionar múltiples entornos de Python, permitiendo a los usuarios cambiar fácilmente entre diferentes versiones de PyTorch para desarrollo y despliegue. También se incluyen recursos útiles y enlaces oficiales para referencia adicional.
title: Instalar Pytorch para reComputer Jetson
keywords:
  - reComputer
  - Jetson
  - PyTorch
  - JetPack
  - torch
  - Deep Learning
  - AI
  - CUDA
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /es/install_torch_on_recomputer
last_update:
  date: 07/25/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
Este wiki demuestra cómo instalar PyTorch optimizado por NVIDIA en tu reComputer, coincidiendo con tu versión de JetPack. También cubre cómo usar entornos virtuales (conda) para gestionar múltiples versiones de PyTorch para desarrollo y despliegue.
</div>

## Prerrequisitos

- [reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) con JetPack instalado
- Conexión a Internet

<a id="Install_Torch"></a>

## Instalar PyTorch para reComputer

Aquí, introduciremos cómo instalar PyTorch con soporte CUDA en las dos versiones comúnmente utilizadas de Jetpack 5 y Jetpack 6.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

En reComputer, la versión comúnmente utilizada de Jetpack 5 es 5.1.3. Aquí, la usaremos para introducir cómo instalar PyTorch.

**Paso 1.** Actualizar el sistema e instalar dependencias:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Paso 2.** Descargar el wheel oficial de PyTorch (ejemplo: torch-2.1.0 para JetPack 5.1.3, Python 3.8):

```bash
wget https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

:::note
Si necesitas una versión más reciente de torch que soporte Jetpack 5.1.3, por favor descarga el archivo wheel compilado desde [aquí](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR) (torch-2.2 para python3.8).
:::

**Paso 3.** Verificar la instalación:

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

En reComputer, la versión comúnmente utilizada de Jetpack 6 es 6.2. Aquí, la usaremos para introducir cómo instalar PyTorch.

**Paso 1.** Actualizar el sistema e instalar dependencias:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Paso 2.** Instalar cuSPARSELt desde [aquí](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network) (requerido para PyTorch 24.06+):

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELt es una biblioteca CUDA de alto rendimiento desarrollada por NVIDIA específicamente para multiplicación de matrices dispersas. Se utiliza principalmente para acelerar operaciones de multiplicación de matrices bajo pesos dispersos, que se ven comúnmente en inferencia de modelos grandes y redes neuronales dispersas. En la nueva versión de PyTorch(PyTorch 24.06+), llamará automáticamente a cusparselt para mejorar la velocidad de inferencia de modelos dispersos, especialmente en GPUs embebidas como Jetson, lo que puede mejorar significativamente la eficiencia.
</div>
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
</div>

**Paso 3.** Según la versión seleccionada como se muestra en la figura anterior, obtendrás el siguiente comando de instalación:

```bash
wget https://developer.download.nvidia.com/compute/cusparselt/0.7.1/local_installers/cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo dpkg -i cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo cp /var/cusparselt-local-tegra-repo-ubuntu2204-0.7.1/cusparselt-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
```

**Paso 4.** Descargar e instalar PyTorch (ejemplo: torch-2.5.0 para JetPack 6.2, Python 3.10):

```bash
wget https://developer.download.nvidia.cn/compute/redist/jp/v61/pytorch/torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
pip install torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
```

:::note
Si necesitas una versión más reciente de torch que soporte Jetpack 6.2, por favor descarga el archivo wheel compilado desde [aquí](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH) (torch-2.7 para python3.10).
:::

**Paso 5.** Verificar la instalación:

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="Otra Versión">

**Paso 1.** Actualizar el sistema e instalar dependencias:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

Aquí está el [archivo wheel compilado oficialmente de PyTorch](https://developer.download.nvidia.cn/compute/redist/jp/) con soporte CUDA proporcionado por NVIDIA.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
</div>

**Paso 2.** Descargar el archivo wheel apropiado basado en tu versión de JetPack y versión de Python.

```bash
# Descargar el archivo wheel
wget https://developer.download.nvidia.cn/compute/redist/jp/v60/pytorch/torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
# Instalar el archivo wheel
pip install torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
```

**Paso 3.** Verificar la instalación:

```python
import torch
print(torch.cuda.is_available())
```

</TabItem>
</Tabs>

<!-- Code END -->

## Múltiples Versiones de PyTorch con Conda

Miniconda es un instalador ligero para el gestor de paquetes Conda, proporcionando un entorno mínimo para crear y gestionar rápidamente entornos de Python y paquetes.

**Paso 1.** Instalar Miniconda:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- Sigue las instrucciones e ingresa "yes" para aceptar los términos.
- Se recomienda usar la configuración predeterminada para la ruta de instalación, como ~/miniconda3.
- Finalmente, pregunta si agregar automáticamente a .bashrc. Se recomienda ingresar "yes".

:::
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
</div>

**Paso 2.** Inicializar y configurar conda:

```bash
source ~/.bashrc
# Verificar si conda está funcionando correctamente
conda --version
# Deshabilitar la entrada automática al entorno base de conda
conda config --set auto_activate_base false
# Cerrar y reabrir la terminal. Por defecto, no entrará al entorno base.
```

**Paso 3.** Crear un nuevo entorno e instalar un wheel específico de PyTorch:

```bash
conda create -n torch_2.0 python=3.8
conda activate torch_2.0
```

**Paso 4.** Descargar e instalar el archivo wheel de PyTorch como se muestra en las [secciones anteriores](#Install_Torch).

:::info
Para más detalles, consulta la [guía de instalación de PyTorch de NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
:::

## Recursos

- [Foro de Desarrolladores de NVIDIA](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [Guía de instalación de PyTorch de NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [Notas de Lanzamiento de PyTorch para Jetson](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>