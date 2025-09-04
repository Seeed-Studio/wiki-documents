---
description: Esta wiki proporciona una guía paso a paso para instalar Isaac Lab.
title: Instalar Isaac Lab
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.webp
slug: /es/install_isaaclab
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# Instalar Isaac Lab

Esta wiki proporciona una guía paso a paso para instalar Isaac Lab. Isaac Lab requiere Isaac Sim. Este tutorial primero instala Isaac Sim vía pip, luego instala Isaac Lab desde el código fuente.

:::tip
- Este tutorial solo es aplicable a sistemas Ubuntu 20.04 y 22.04 y actualmente no soporta Windows. Por favor asegúrate de que tu computadora tenga controladores gráficos NVIDIA y CUDA 12+ instalados según tu GPU.

- Revisa el enlace oficial de Isaac Sim para verificar si tu hardware cumple con los requisitos.

- Se recomienda Miniconda y debe estar preinstalado.
:::

## Creando un Entorno Virtual con Miniconda  
Recomendamos crear primero un entorno virtual. Asegúrate de que la versión de Python en el entorno virtual sea Python 3.10.  

```bash
conda create -n env_isaaclab python=3.10  
conda activate env_isaaclab  
```  

## Instalando PyTorch y torchvision  
A continuación, instala PyTorch y Torchvision según tu versión de CUDA.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>


<TabItem value="CUDA 11+" label="CUDA 11+">

```bash
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118
```


</TabItem>

<TabItem value="CUDA 12+" label="CUDA 12+">

```bash
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu121
```


</TabItem>

</Tabs>

## Instalando Isaac Sim  
```bash
pip install --upgrade pip  
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com  
```  

## Verificando la Instalación de Isaac Sim  
```bash
isaacsim  
```  

:::note
Al ejecutar Isaac Sim por primera vez, todas las extensiones requeridas serán descargadas del registro. Este proceso puede tomar **más de 10 minutos** y es necesario para la primera ejecución de cada archivo de experiencia. Una vez que las extensiones se descargan, las ejecuciones posteriores con el mismo archivo de experiencia usarán extensiones en caché.  
:::

### Instalando Isaac Lab  

**Clonar el repositorio de Isaac Lab**  
```bash
git clone https://github.com/isaac-sim/IsaacLab.git  
```  

**Instalar dependencias para Isaac Lab**  
```bash
sudo apt install cmake build-essential  
```  

**Instalar las librerías de aprendizaje por refuerzo de Isaac Lab**  
```bash
./isaaclab.sh --install  # o "./isaaclab.sh -i"  
```  
También puedes instalar una librería RL específica individualmente:  
```bash
./isaaclab.sh --install rl_games  # o "rsl_rl, sb3, skrl, robomimic"  
```  

**Verificar la instalación de Isaac Lab**  
Navega al directorio clonado de Isaac Lab.  

**Opción 1: Lanzar vía script de shell**  
```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py  
```  

**Opción 2: Lanzar vía Python**  
```bash
python scripts/tutorials/00_sim/create_empty.py  
```  

:::note
Los comandos anteriores deberían lanzar el simulador y mostrar una ventana con una vista negra, como se muestra a continuación. Puedes salir del script presionando **Ctrl+C** en la terminal. En Windows, usa **Ctrl+Break** o **Ctrl+fn+B** en el Símbolo del sistema para terminar el proceso.
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.png" />
</div>

### Entrenando un Robot Simple  

Puedes entrenar un grupo de arañas usando el script de ejemplo proporcionado:  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/3.jpg" />
</div>


O entrenar un solo perro:  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Velocity-Rough-Anymal-C-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/2.jpg" />
</div>

### Instalando Isaac Gym (Opcional)  
Los pasos de instalación anteriores son suficientes, pero si solo quieres experimentar la parte de aprendizaje por refuerzo con Isaac Gym, puedes instalar Isaac Gym por separado.  

**Descargar y extraer [código de Isaac Gym](https://developer.nvidia.com/isaac-gym/download)**  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/4.png" />
</div>

Extráelo a tu directorio home, luego crea un entorno Conda e instala las dependencias:  
```bash
conda create --name isaac python=3.8  
conda activate isaac  
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia  
conda install numpy=1.23  
```  

**Instalar Isaac Gym**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python  
pip install -e .  
```  

**Verificar la instalación de Isaac Gym**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python/examples  
python 1080_balls_of_solitude.py  
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/5.png" />
</div>


:::warning
**Posible error y solución**  
Al ejecutar el script de Python, puedes encontrar el siguiente error:  
```plaintext
ImportError: libpython3.8.so.1.0: cannot open shared object file: No such file or directory  
```  
Arréglalo con este comando (reemplaza la ruta con la tuya):  
```bash
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/home/{Tu Nombre de Usuario}/anaconda3/envs/pi/lib  
```  
:::