---
description: Este tutorial muestra cómo teleoperar y entrenar el brazo robótico SOArm101 en Isaac Lab usando LeIsaac, incluyendo la recopilación de datos, el ajuste fino del modelo con NVIDIA Isaac GR00T y el despliegue.
title: Lightwheel LeIsaac
keywords:
  - NVIDIA
  - Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/simulate_soarm101_by_leisaac.webp
slug: /simulate_soarm101_by_leisaac
last_update:
  date: 8/1/2025
  author: Youjiang
createdAt: '2025-08-01'
updatedAt: '2025-09-12'
url: https://wiki.seeedstudio.com/es/simulate_soarm101_by_leisaac/
---

# Primeros pasos con Lightwheel LeIsaac — Flujo de trabajo de código abierto que combina Hugging Face LeRobot x GR00T N1.5 x Isaac Sim

## Introducción

Este wiki seguirá el documento de leisaac y mostrará cómo teleoperar el brazo robótico SoArm101 en IsaacLab mediante leisaac. Además, demostraremos el despliegue del modelo Nvidia Isaac GR00T N1.5 ajustado finamente dentro del entorno de simulación Isaac Lab, utilizando datos recopilados desde Isaac Lab. Los proyectos principales utilizados en este wiki son:

- [LeIsaac](https://github.com/LightwheelAI/leisaac) proporciona funcionalidad de teleoperación en IsaacLab usando el SO101Leader (LeRobot), incluyendo recopilación de datos, conversión de datos y entrenamiento posterior de políticas.
- [NVIDIA Isaac™ Lab](https://developer.nvidia.com/isaac/lab) es un framework unificado y de código abierto para aprendizaje robótico diseñado para ayudar a entrenar políticas de robots.
- [SO-ARM101](https://github.com/TheRobotStudio/SO-ARM100) es un kit de brazo robótico imprimible en 3D, de bajo costo y de código abierto. Está diseñado para funcionar perfectamente con la biblioteca de código abierto LeRobot.
- [NVIDIA Isaac GR00T N1.5](https://github.com/NVIDIA/Isaac-GR00T) es un modelo base abierto para razonamiento y habilidades generalizadas de robots humanoides.

## Requisitos

- PC con Ubuntu
- Brazo líder SoArm101

:::info
El ordenador utilizado en este wiki tiene una GPU NVIDIA RTX 3080 y funciona con Ubuntu 22.04 LTS.
:::

## Configuración del entorno de simulación

Utiliza el siguiente comando en la terminal para instalar el entorno de ejecución de Isaac Lab:

```bash
# Create and activate environment
conda create -n leisaac python=3.10
conda activate leisaac

# Install cuda-toolkit
conda install -c "nvidia/label/cuda-11.8.0" cuda-toolkit

# Install PyTorch
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118

# Install IsaacSim
pip install --upgrade pip
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# Install IsaacLab
git clone https://github.com/isaac-sim/IsaacLab.git
sudo apt install cmake build-essential

cd IsaacLab
# fix isaaclab version for isaacsim4.5
git checkout v2.1.0
./isaaclab.sh --install
```

:::note
Si tu ordenador no tiene conda instalado, consulta [esta guía](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html) para la instalación.
:::

:::info
Si estás utilizando una GPU de la serie 50, recomendamos usar isaacsim5.0 e isaaclab con la rama feature/isaacsim_5_0.
:::

## Instalar LeIsaac

Clona el repositorio de LeIsaac e instálalo como dependencia.

```bash
cd ..
git clone https://github.com/LightwheelAI/leisaac.git
cd leisaac
pip install -e source/leisaac
pip install pynput pyserial deepdiff feetech-servo-sdk
```

:::note
Asegúrate de realizar la instalación dentro del entorno virtual conda `leisaac`.
:::

## Preparación de recursos

LeIsaac proporciona un recurso USD de ejemplo: una escena de cocina. Podemos descargar la escena correspondiente [aquí](https://github.com/LightwheelAI/leisaac/releases/tag/v0.1.0) y extraerla en el directorio assets. La estructura del directorio debería verse así:

```txt
<assets>
├── robots/
│   └── so101_follower.usd
└── scenes/
    └── kitchen_with_orange/
        ├── scene.usd
        ├── assets
        └── objects/
            ├── Orange001
            ├── Orange002
            ├── Orange003
            └── Plate
```

## Recopilar conjunto de datos

Conecta el líder SO-ARM101 a un ordenador con Ubuntu mediante un cable USB y luego utiliza comandos para otorgar permisos al puerto serie.

```bash
ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM0
```

Si todo funciona correctamente, deberías ver un registro de salida similar.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/connect_arm.png" />
</div>

Ejecuta tareas de teleoperación con el siguiente script para recopilar el conjunto de datos:

```bash
python scripts/environments/teleoperation/teleop_se3_agent.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --teleop_device=so101leader \
    --port=/dev/ttyACM0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --record \
    --dataset_file=./datasets/dataset.hdf5
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XY3LEXGP8hI" title="Simulate SoArm101 by LeIsaac (1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Después de entrar en la ventana de IsaacLab, pulsa la tecla `b` en tu teclado para iniciar la teleoperación. A continuación, puedes usar el teleop_device especificado para controlar el robot en la simulación. Si necesitas restablecer el entorno después de completar tu operación, simplemente pulsa la tecla `r` o `n`. `r` significa restablecer el entorno y marcar la tarea como fallida, mientras que `n` significa restablecer el entorno y marcar la tarea como exitosa.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XkgBY4aa8AE" title="Teleoperate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Reproducción del conjunto de datos

Después de la teleoperación, puedes reproducir el conjunto de datos recopilado en el entorno de simulación usando el siguiente script:

```bash
python scripts/environments/teleoperation/replay.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --dataset_file=./datasets/dataset.hdf5 \
    --episode_index=0
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/C6KHxKRsWx0" title="Simulate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Conversión de datos

Los datos de teleoperación recopilados se almacenan en formato HDF5 en el directorio especificado. Si se utilizan estos datos para entrenar un modelo proxy, el conjunto de datos debe convertirse al formato compatible con LeRobot utilizando los scripts de conversión de LeIsaac.

Este script debe ejecutarse dentro del entorno virtual de LeRobot. Crea un nuevo entorno LeRobot siguiendo los pasos de este [wiki](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#instalar-lerobot).

```bash
cd ..
git clone https://github.com/huggingface/lerobot.git
cd lerobot
conda create -y -n lerobot python=3.12
conda activate lerobot
pip install -e .
```

Luego, podemos modificar los parámetros en el script y ejecutar el siguiente comando:

```bash
cd ../leisaac
python scripts/convert/isaaclab2lerobot.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/data_conversion.png" />
</div>

:::note
Si modificaste la ruta de almacenamiento del conjunto de datos durante la recopilación de datos, debes actualizar la ruta correspondiente en el script de conversión antes de ejecutarlo.
:::

Después de que el programa termine la ejecución, el conjunto de datos convertido se puede encontrar en: `~/.cache/huggingface/lerobot/`.

También podemos inspeccionar los datos convertidos utilizando la herramienta integrada de visualización de conjuntos de datos de LeRobot.

```bash
cd ../lerobot
python -m lerobot.scripts.visualize_dataset --repo-id EverNorif/so101_test_orange_pick  --episode-index 0
```

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/LPSxPMoP-pk" title="Simulate SoArm101 by LeIsaac (2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Entrenamiento de la política

En este wiki, ajustaremos finamente NVIDIA Isaac GR00T N1.5. Comencemos configurando el entorno virtual de Isaac-GR00T:

```bash
cd ..
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

:::info
La instalación de flash-attn implica la compilación de paquetes, lo que puede ser extremadamente lento. Se recomienda [descargar](https://github.com/Dao-AILab/flash-attention/releases/tag/v2.7.1.post4) la versión precompilada del paquete que coincida con el entorno de tu sistema e instalarla localmente usando el comando: pip install ./package_name.
:::

Ejecuta el siguiente comando en la terminal para iniciar el entrenamiento:

```bash
cd <path-to-Isaac-GR00T>
cp ./getting_started/examples/so100_dualcam__modality.json ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick/meta/modality.json
python scripts/gr00t_finetune.py \
   --dataset-path ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --batch_size 2
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/train.png" />
</div>

## Inferencia de la política

En esta etapa, podemos desplegar nuestro modelo NVIDIA Isaac GR00T N1.5 ajustado finamente para controlar el brazo robótico SO-ARM101 en Isaac Lab.
La arquitectura de despliegue de Isaac-GR00T adopta un diseño desacoplado entre el endpoint de inferencia y el endpoint de control:

- Endpoint de inferencia (Servidor): Dedicado únicamente a ejecutar tareas de inferencia del modelo.
- Endpoint de control (Cliente): Responsable de adquirir los estados del brazo robótico y orquestar el control de movimiento.

**Servidor**
Abre una nueva ventana de terminal y ejecuta:

```bash
conda activate gr00t
cd <path-to-Isaac-GR00T>
python scripts/inference_service.py --server --model_path  ./so101-orange-checkpoints/checkpoint-10000 --embodiment_tag new_embodiment --data_config so100_dualcam --port 5555
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/server.png" />
</div>

**Cliente**
Abre una nueva ventana de terminal y ejecuta:

```bash
conda activate leisaac
cd <path-to-leisaac>
python scripts/evaluation/policy_inference.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --policy_type=gr00tn1.5 \
    --policy_host=localhost \
    --policy_port=5555 \
    --policy_timeout_ms=5000 \
    --policy_action_horizon=16 \
    --policy_language_instruction="Pick up the orange and place it on the plate" \
    --device=cuda \
    --enable_cameras
```

:::note
Si encuentras errores relacionados con ZMQ, ejecuta `pip install pyzmq` para resolverlos.
:::

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/GRzFK7o3lOQ" title="Simulate SoArm101 by LeIsaac (3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

El modelo final entrenado no logró controlar el brazo robótico SOArm101 para recoger la naranja. Esto se debe a que solo recopilé tres conjuntos de datos durante el experimento. ¡Si se pudieran reunir más datos, la precisión del modelo mejoraría significativamente!

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
