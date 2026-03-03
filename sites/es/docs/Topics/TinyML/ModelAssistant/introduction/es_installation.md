---
description: Instalación para Model Assistant
title: Instalación
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Introduce_Installation
last_update:
  date: 01/11/2024
  author: LynnL4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Instalación

El entorno de ejecución de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) depende de PyTorch y varias bibliotecas de terceros de OpenMMLab. Puedes encontrar el código de SSCMA en [GitHub](https://github.com/Seeed-Studio/ModelAssistant). Para comenzar, asegúrate de tener PyTorch instalado localmente siguiendo las instrucciones [aquí](https://pytorch.org/get-started/locally/), y luego obtén las bibliotecas necesarias de OpenMMLab.

- [MMCV](https://github.com/open-mmlab/mmcv): Biblioteca de Fundamentos de Visión por Computadora de OpenMMLab.
- [MMClassification](https://github.com/open-mmlab/mmclassification): Kit de herramientas de clasificación de imágenes y benchmarking de OpenMMLab. Además de las tareas de clasificación, también se utiliza para proporcionar una variedad de redes backbone.
- [MMDetection](https://github.com/open-mmlab/mmdetection): Kit de herramientas de detección y benchmark de OpenMMLab.
- [MMPose](https://github.com/open-mmlab/mmpose): Kit de herramientas de inspección y benchmark de OpenMMLab.
- [MIM](https://github.com/open-mmlab/mim): MIM proporciona una interfaz unificada para iniciar e instalar el proyecto OpenMMLab y sus extensiones, y gestionar la biblioteca de modelos de OpenMMLab.

## Prerrequisitos

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) funciona en Linux, Windows y macOS. **Te recomendamos encarecidamente usar [Miniconda](https://docs.conda.io/en/latest/miniconda.html) para gestionar los paquetes de python.** Por favor, sigue los pasos a continuación para preparar el entorno.

:::tip
Miniconda es un instalador mínimo gratuito para conda, puedes descargar e instalar Miniconda3 desde el [Sitio Web Oficial de Miniconda](https://docs.conda.io/en/latest/miniconda.html).
:::

### Paso 0 - Clonar el Repositorio Git

Primero, necesitas clonar el [Código Fuente de SSCMA](https://github.com/Seeed-Studio/ModelAssistant) localmente. Usamos Git para gestionarlo y alojarlo en GitHub, y proporcionamos dos formas diferentes de clonarlo a continuación (elige cualquiera de las dos). Si no tienes Git instalado, puedes configurar Git en tu computadora consultando la [Documentación de Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

<Tabs>
<TabItem value="HTTPS" label="HTTPS">

```sh
git clone https://github.com/Seeed-Studio/ModelAssistant.git --depth 1 && \
cd ModelAssistant
```

</TabItem>
<TabItem value="SSH" label="SSH">

```sh
git clone git@github.com:Seeed-Studio/ModelAssistant.git --depth 1 && \
cd ModelAssistant
```

</TabItem>

</Tabs>


### Paso 1 - Crear Entorno Virtual

Asumiendo que tienes conda instalado, entonces **crea** y **activa** un entorno virtual de conda.

```sh
conda create --name sscma python=3.8 -y && \
conda activate sscma
```

### Paso 2 - Instalar PyTorch

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) depende de PyTorch. Antes de ejecutar el siguiente código, por favor confirma nuevamente que has **activado** el entorno virtual que acabas de crear.

Para dispositivos con GPUs (CUDA), recomendamos instalar dependencias que soporten aceleración por GPU. Hemos listado las opciones de configuración que puedes elegir en 2 casos diferentes, por favor elige manualmente según tu entorno de hardware.

- Plataforma solo CPU:

<Tabs>
<TabItem value="conda" label="conda">

```sh
conda install pytorch torchvision torchaudio cpuonly -c pytorch
```

</TabItem>
<TabItem value="pip" label="pip">

```sh
pip3 install torch torchvision torchaudio
```

</TabItem>
</Tabs>


- Plataforma GPUs (CUDA):

<Tabs>
<TabItem value="conda" label="conda">

```sh
conda install pytorch torchvision torchaudio pytorch-cuda=11.7 cudatoolkit=11.7 -c pytorch -c nvidia
```

</TabItem>
<TabItem value="pip" label="pip">

```sh
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu117
```

</TabItem>
</Tabs>

:::tip
Puedes encontrar instaladores de CUDA en el [Sitio Web del Archivo de NVIDIA CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit-archive) si tu plataforma no tiene CUDA instalado para GPUs NVIDIA, recomendamos usar CUDA 11.7 o superior en tu entorno host. Para instalar PyTorch en otras plataformas, por favor lee más en el [Sitio Web Oficial de PyTorch](https://pytorch.org/get-started/locally/).
:::

### Paso 3 - Instalar Dependencias Esenciales

**Por favor confirma que has activado el entorno virtual y estás en el directorio de trabajo principal del código fuente de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)**, y luego ejecuta el siguiente código para completar la configuración de las dependencias básicas.

- Instalar dependencias de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)

```sh
pip3 install -r requirements/base.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

### Paso 4 - Instalar Dependencias Adicionales (Opcional)

Si necesitas realizar transformación de modelos o pruebas de inferencia, también necesitas instalar las siguientes dependencias adicionales.

```sh
pip3 install -r requirements/inference.txt -r requirements/export.txt
```

Si deseas realizar cambios en [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) y enviárnoslos, recomendamos que ejecutes adicionalmente el siguiente comando para facilitar la verificación de tu código en el momento del commit.

```sh
pip3 install -r requirements/tests.txt
pre-commit install
```

## Otro Método

La configuración del entorno de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) se puede realizar automáticamente usando un script de shell en Linux (probado en Ubuntu 20.04~22.10), si tienes Conda configurado.

```bash
bash scripts/setup_linux.sh
```

O puedes hacer la configuración manualmente usando el archivo de configuración de Conda.

<Tabs>
<TabItem value="CPU" label="CPU">

```sh
conda env create -n sscma -f environment.yml && \
conda activate sscma && \
pip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

</TabItem>
<TabItem value="GPU (CUDA)" label="GPU (CUDA)">

```sh
conda env create -n sscma -f environment_cuda.yml && \
conda activate sscma && \
pip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

</TabItem>
</Tabs>


## Recordatorios

Después de completar la instalación de Miniconda y configurar [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) con Conda, creamos un entorno virtual de Conda llamado `sscma` e instalamos las dependencias en el entorno virtual. Para la configuración y desarrollo posteriores relacionados con [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), asegúrate de estar en el entorno virtual de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), que puedes activar con el siguiente comando.

```sh
conda activate sscma
```

Si deseas reconfigurar o eliminar el entorno virtual de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), puedes ejecutar el siguiente comando.

```sh
conda env remove -n sscma
```

## Preguntas Frecuentes

- Tengo una velocidad de conexión lenta al instalar paquetes desde los canales predeterminados de anaconda.

  Por favor, ten paciencia y prueba algunos canales espejo de terceros, como [SJTU mirror](https://mirror.sjtu.edu.cn/docs/anaconda), [TUNA mirror](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda) y otros.
