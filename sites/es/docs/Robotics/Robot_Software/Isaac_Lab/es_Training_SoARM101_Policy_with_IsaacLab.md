---
description: Este wiki muestra cómo configurar Isaac Lab en Ubuntu con GPU Nvidia para entrenar políticas de aprendizaje por refuerzo para los brazos robóticos SO-ARM100/101.
title: Entrenamiento de Política SoArm101 con IsaacLab
keywords:
- IsaacLab
- Aprendizaje por Refuerzo
- Brazo Robótico
- SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.webp
slug: /training_soarm101_policy_with_isaacLab
last_update:
  date: 9/4/2025
  author: Youjiang
---

## Introducción
Este wiki introduce cómo usar Isaac Lab para entrenar y probar políticas de brazos robóticos SO-ARM100/101 con aprendizaje por refuerzo.

<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.gif" />
</div>

## 📌Prerrequisitos
- Una PC Ubuntu con GPU Nvidia

:::info
Si no tienes controladores CUDA o Conda instalados, por favor configúralos primero.
:::

## Comenzando

### 🚀 Paso 1. Instalar Isaac Lab
NVIDIA Isaac™ Lab es un marco unificado de código abierto para [aprendizaje robótico](https://www.nvidia.com/en-us/glossary/robot-learning/) que ayuda a investigadores y desarrolladores a entrenar políticas robóticas de manera eficiente.

Ejecuta los siguientes comandos en la terminal de la PC Ubuntu:

```bash
# Create and activate Conda environment
conda create -n isaaclab python=3.10
conda activate isaaclab

# Install PyTorch (GPU version)
pip install torch==2.7.0 torchvision==0.22.0 --index-url https://download.pytorch.org/whl/cu128

# Upgrade pip
pip install --upgrade pip

# Install Isaac Sim (with extensions)
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# Clone IsaacLab repository
cd ~/Documents
git clone https://github.com/isaac-sim/IsaacLab.git

# Install dependencies
sudo apt install cmake build-essential

# Initialize setup
cd IsaacLab
./isaaclab.sh --install
```

Ejecuta el siguiente comando para verificar la instalación:

```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py
```

Si es exitoso, debería aparecer una ventana vacía de Isaac Sim.


<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/create_empty.png" />
</div>


### 🤖 Paso 2. Instalar el Proyecto isaac_so_arm101

<div style={{ textAlign: 'justify' }}>
    Este repositorio implementa tareas para los robots SO‑ARM100 y SO‑ARM101 usando Isaac Lab. Sirve como base para varios tutoriales en la serie de proyectos de LycheeAI Hub: [SO‑ARM101 × Isaac Sim × Isaac Lab](https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series).
</div>

Ejecuta los siguientes comandos:

```bash
cd ~/Documents
git clone https://github.com/MuammerBay/isaac_so_arm101.git
cd isaac_so_arm101

# Install project dependencies
python -m pip install -e source/SO_100

# Test environments
python scripts/list_envs.py
```

Si el proyecto isaac_so_arm101 se instala exitosamente, la ventana de terminal imprimirá el siguiente registro:

<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/install.png" />
</div>

### 🎯 Paso 3. Iniciar Entrenamiento

Lanza el entrenamiento con:

```bash
python scripts/rsl_rl/train.py --task SO-ARM100-Reach-v0
```

Esto abrirá una ventana de Isaac Sim donde puedes observar el proceso de entrenamiento en tiempo real. Puedes agregar el parámetro `--headless` al comando de lanzamiento para acelerar el proceso de entrenamiento.

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/J9JpmeXeKKE" title="Training SoArm100 with IsaacLab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Después del entrenamiento, los pesos del modelo se guardarán en: 
`~/Documents/isaac_so_arm101/logs/rsl_rl/so_arm100_reach`

<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/models.png" />
</div>

### 🧪 Paso 4. Probar el Modelo

Prueba el modelo entrenado con:

```bash
python scripts/rsl_rl/play.py --task SO-ARM100-Reach-Play-v0
```

Durante las pruebas, las posiciones objetivo se generan aleatoriamente dentro de un rango definido, y el modelo entrenado dirige el brazo robótico para alcanzar esos objetivos.

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/9BOOWKCyhXk" title="Test SoArm100 with IsaacLab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias

- https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series
- https://github.com/MuammerBay/isaac_so_arm101
- https://github.com/huggingface/lerobot
- https://github.com/isaac-sim/IsaacLab
- https://github.com/leggedrobotics/rsl_rl

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>