---
description: "Instala PyTorch optimizado por NVIDIA en reComputer para JetPack 5 y JetPack 6, con entornos conda para cambiar entre versiones de torch."
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
slug: /install_torch_on_recomputer
last_update:
  date: 07/25/2025
  author: Zibo
createdAt: '2025-07-25'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/install_torch_on_recomputer/
---

<div style={{ textAlign: "justify" }}>
NVIDIA publica ruedas de PyTorch para cada versión de JetPack, por lo que la instalación difiere entre JetPack 5 y JetPack 6. Elige la sección que coincida con tu módulo, instala la rueda correspondiente y confirma que `torch.cuda.is_available()` devuelve True. Los entornos conda permiten mantener varias versiones de torch en paralelo cuando un proyecto fija una versión más antigua.
</div>

## Requisitos previos

- [reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) con JetPack instalado
- Conexión a Internet

<a id="Install_Torch"></a>

## Instalar PyTorch para reComputer

Las dos generaciones de JetPack en la mayoría de las unidades reComputer usan ruedas diferentes: JetPack 5.1.3 se empareja con Python 3.8 y JetPack 6.2 con Python 3.10.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

En reComputer, la versión de Jetpack 5 usada con más frecuencia es la 5.1.3. Los pasos siguientes instalan PyTorch para esta versión.

**Paso 1.** Actualiza el sistema e instala las dependencias:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Paso 2.** Descarga la rueda oficial de PyTorch (ejemplo: torch-2.1.0 para JetPack 5.1.3, Python 3.8):

```bash
wget https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

:::note
Si necesitas una versión más reciente de torch que sea compatible con Jetpack 5.1.3, descarga el archivo de rueda compilado desde [aquí](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR) (torch-2.2 para python3.8).
:::

**Paso 3.** Verifica la instalación:

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img alt="salida de torch.__version__ y torch.cuda.is_available() en JetPack 5.1.3 con torch 2.1.0" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

En reComputer, la versión de Jetpack 6 usada con más frecuencia es la 6.2. Los pasos siguientes instalan PyTorch para esta versión.

**Paso 1.** Actualiza el sistema e instala las dependencias:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Paso 2.** Instala cuSPARSELt desde [aquí](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network) (requerido para PyTorch 24.06+):

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELt es una biblioteca CUDA de alto rendimiento desarrollada por NVIDIA específicamente para la multiplicación de matrices dispersas. Se utiliza principalmente para acelerar las operaciones de multiplicación de matrices bajo pesos dispersos, que son comunes en la inferencia de modelos grandes y en redes neuronales dispersas. En la nueva versión de PyTorch (PyTorch 24.06+), se llamará automáticamente a cuSPARSELt para mejorar la velocidad de inferencia de los modelos dispersos, especialmente en GPU embebidas como Jetson, lo que puede mejorar significativamente la eficiencia.
</div>
:::

<div align="center">
  <img alt="página de descarga de cuSPARSELt con Linux, aarch64, Ubuntu 22.04 y compilación nativa seleccionados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
</div>

**Paso 3.** Según la versión seleccionada como se muestra en la figura anterior, obtendrás el siguiente comando de instalación:

```bash
wget https://developer.download.nvidia.com/compute/cusparselt/0.7.1/local_installers/cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo dpkg -i cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo cp /var/cusparselt-local-tegra-repo-ubuntu2204-0.7.1/cusparselt-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
```

**Paso 4.** Descarga e instala PyTorch (ejemplo: torch-2.5.0 para JetPack 6.2, Python 3.10):

```bash
wget https://developer.download.nvidia.cn/compute/redist/jp/v61/pytorch/torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
pip install torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
```

:::note
Si necesitas una versión más reciente de torch que sea compatible con Jetpack 6.2, descarga el archivo de rueda compilado desde [aquí](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH) (torch-2.7 para python3.10).
:::

**Paso 5.** Verifica la instalación:

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img alt="torch.cuda.is_available() devolviendo True bajo Python 3.10 en la configuración de JetPack 6.2" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="Other Version">

**Paso 1.** Actualiza el sistema e instala las dependencias:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

Aquí está el [archivo de rueda compilado de PyTorch](https://developer.download.nvidia.cn/compute/redist/jp/) con soporte CUDA proporcionado oficialmente por NVIDIA.

<div align="center">
  <img alt="índice de ruedas de NVIDIA PyTorch que muestra compilaciones por versión de JetPack y Python" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
</div>

**Paso 2.** Descarga el archivo de rueda apropiado según tu versión de JetPack y tu versión de Python.

```bash
# Download the wheel file
wget https://developer.download.nvidia.cn/compute/redist/jp/v60/pytorch/torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
# Install the wheel file
pip install torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
```

**Paso 3.** Verifica la instalación:

```python
import torch
print(torch.cuda.is_available())
```

</TabItem>
</Tabs>

<!-- Code END -->

## Varias versiones de PyTorch con Conda

Miniconda es un instalador ligero para el gestor de paquetes Conda, que proporciona un entorno mínimo para crear y gestionar rápidamente entornos y paquetes de Python.

**Paso 1.** Instala Miniconda:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- Sigue las instrucciones y escribe "yes" para aceptar los términos.
- Se recomienda usar la ruta de instalación predeterminada, como ~/miniconda3.
- Finalmente, se te preguntará si deseas añadirlo automáticamente a .bashrc. Se recomienda escribir "yes".

:::
<div align="center">
  <img alt="salida de conda init mostrando /home/seeed/.bashrc modificado para que conda se cargue en nuevas shells" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
</div>

**Paso 2.** Inicializa y configura conda:

```bash
source ~/.bashrc
# Verify if conda is functioning properly
conda --version
# Disable automatic entry into the conda base environment
conda config --set auto_activate_base false
# Close and reopen the terminal. By default, it will not enter the base environment.
```

**Paso 3.** Crea un nuevo entorno e instala una rueda específica de PyTorch:

```bash
conda create -n torch_2.0 python=3.8
conda activate torch_2.0
```

**Paso 4.** Descarga e instala el archivo de rueda de PyTorch como se muestra en las [secciones anteriores](#Install_Torch).

:::info
Para más detalles, consulta la [guía de instalación de PyTorch de NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
:::

## Recursos

- [Foro de desarrolladores de NVIDIA](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [Guía de instalación de PyTorch de NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [Notas de la versión de PyTorch para Jetson](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

## Preguntas frecuentes

**¿Qué rueda de PyTorch coincide con mi versión de JetPack?**
JetPack 5.1.3 usa `torch-2.1.0a0+...cp38` (Python 3.8) y JetPack 6.2 usa `torch-2.5.0a0+...cp310` (Python 3.10). Elige la rueda cuyo path `jp/vXX` y etiqueta `cpXX` coincidan con ambos; de lo contrario, pip instalará algo que solo se ejecuta en CPU.

**¿Necesito cuSPARSELt antes de instalar torch?**
Solo para las ruedas más recientes. Las compilaciones de PyTorch desde 24.06 en adelante llaman a cuSPARSELt para multiplicación de matrices dispersas, por lo que la ruta de JetPack 6.2 instala primero la versión 0.7.1. El ejemplo de JetPack 5.1.3 con torch 2.1.0 no la necesita.

**¿Cómo mantengo dos versiones de torch en una misma máquina?**
Usa entornos conda: un entorno por cada par de Python y torch, por ejemplo `conda create -n torch_2.0 python=3.8`. Activa el entorno antes de instalar la rueda y mantén `auto_activate_base` desactivado para que el Python del sistema permanezca limpio.

**`torch.cuda.is_available()` devuelve False. ¿Qué salió mal?**
La rueda es o bien la compilación para CPU de PyPI o está compilada para un JetPack diferente. Vuelve a instalar la rueda de NVIDIA que coincida con tu ruta de JetPack y confírmalo con `torch.__version__`, que incluye la etiqueta de compilación `nv` para las ruedas con CUDA habilitado.

## Recursos relacionados

- [Instalar ROS 2 Humble en reComputer](/es/install_ros2_humble/)
- [Emparejar la Gemini 2 con YOLOv11 para medición de distancia](/es/yolov11_with_depth_camera/)
- [Motor eficiente de inferencia de visión multitarea en Jetson](/es/deploy_visual_perception_engine_recomputer/)
- [Página de producto de reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- [Notas de la versión de PyTorch para Jetson](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
