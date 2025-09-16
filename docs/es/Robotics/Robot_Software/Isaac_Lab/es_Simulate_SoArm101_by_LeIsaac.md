---
description: Este tutorial demuestra cómo teleoperar y entrenar el brazo robótico SOArm101 en Isaac Lab usando LeIsaac, incluyendo recolección de datos, ajuste fino del modelo con NVIDIA Isaac GR00T, y despliegue.
title: Lightwheel LeIsaac
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/simulate_soarm101_by_leisaac.webp
slug: /es/simulate_soarm101_by_leisaac
last_update:
  date: 8/1/2025
  author: Youjiang
---

# Comenzar con Lightwheel LeIsaac — Flujo de trabajo de código abierto que combina Hugging Face LeRobot x GR00T N1.5 x Isaac Sim

## Introducción

Este wiki seguirá la documentación de leisaac, mostrando cómo teleoperar el brazo robótico SoArm101 en IsaacLab mediante leisaac. Además, demostraremos el despliegue del modelo Nvidia Isaac GR00T N1.5 ajustado finamente dentro del entorno de simulación Isaac Lab, usando datos recolectados de Isaac Lab. Proyectos principales empleados en este wiki:

- [LeIsaac](https://github.com/LightwheelAI/leisaac) proporciona funcionalidad de teleoperación en IsaacLab usando el SO101Leader (LeRobot), incluyendo recolección de datos, conversión de datos y entrenamiento de políticas posterior.
- [NVIDIA Isaac™ Lab](https://developer.nvidia.com/isaac/lab) es un marco unificado de código abierto para el aprendizaje robótico diseñado para ayudar a entrenar políticas de robots.
- [SO-ARM101](https://github.com/TheRobotStudio/SO-ARM100) es un kit de brazo robótico imprimible en 3D de bajo costo y código abierto. Diseñado para funcionar perfectamente con la biblioteca LeRobot de código abierto.
- [NVIDIA Isaac GR00T N1.5](https://github.com/NVIDIA/Isaac-GR00T) es un modelo fundacional abierto para razonamiento y habilidades generalizadas de robots humanoides.

## Requisitos

- PC Ubuntu
- Brazo Líder SoArm101

:::info
La computadora utilizada en este wiki tiene una GPU NVIDIA RTX 3080 y opera en Ubuntu 22.04 LTS.
:::

## Configuración del Entorno de Simulación

Usa el siguiente comando en la terminal para instalar el entorno de ejecución de Isaac Lab:

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
Si tu computadora no tiene conda instalado, por favor consulta [esta guía](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html) para la instalación.
:::

:::info
Si estás usando GPU de la serie 50, recomendamos usar isaacsim5.0 e isaaclab con la rama feature/isaacsim_5_0.
:::

## Instalar LeIsaac

Clona el repositorio LeIsaac e instálalo como dependencia.

```bash
cd ..
git clone https://github.com/LightwheelAI/leisaac.git
cd leisaac
pip install -e source/leisaac
pip install pynput pyserial deepdiff feetech-servo-sdk
```

:::note
Por favor asegúrate de instalar dentro del entorno virtual conda `leisaac`.
:::

## Preparación de Activos

LeIsaac proporciona un activo USD de ejemplo—una escena de cocina. Podemos descargar la escena relacionada [aquí](https://github.com/LightwheelAI/leisaac/releases/tag/v0.1.0) y extraerla en el directorio de activos. La estructura del directorio debería verse así:

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

## Recolectar Conjunto de Datos

Conecta el líder SO-ARM101 a una computadora Ubuntu mediante cable USB, luego usa comandos para otorgar permisos del puerto serie.

```bash
ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM0
```

Si todo funciona correctamente, deberías ver una salida de registro similar.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/connect_arm.png" />
</div>

Ejecuta tareas de teleoperación con el siguiente script para recolectar el conjunto de datos:

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

Después de entrar en la ventana de IsaacLab, presiona la tecla `b` en tu teclado para comenzar la teleoperación. Luego puedes usar el teleop_device especificado para controlar el robot en la simulación. Si necesitas reiniciar el entorno después de completar tu operación, simplemente presiona la tecla `r` o `n`. `r` significa reiniciar el entorno y marcar la tarea como fallida, mientras que `n` significa reiniciar el entorno y marcar la tarea como exitosa.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XkgBY4aa8AE" title="Teleoperate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Reproducción del Conjunto de Datos

Después de la teleoperación, puedes reproducir el conjunto de datos recolectado en el entorno de simulación usando el siguiente script:

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

## Conversión de Datos

Los datos de teleoperación recolectados se almacenan en formato HDF5 en el directorio especificado. Si usas estos datos para entrenar un modelo proxy, el conjunto de datos debe convertirse al formato compatible con LeRobot usando los scripts de conversión de LeIsaac.

Este script debe ejecutarse dentro del entorno virtual LeRobot. Por favor crea un nuevo entorno LeRobot siguiendo los pasos en este [wiki](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#install-lerobot).

```bash
cd ..
git clone https://github.com/huggingface/lerobot.git
cd lerobot
conda create -y -n lerobot python=3.10
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
Si modificaste la ruta de almacenamiento del conjunto de datos durante la recolección de datos, debes actualizar la ruta correspondiente en el script de conversión antes de la ejecución.
:::

Después de que el programa complete la ejecución, el conjunto de datos convertido se puede encontrar en: `~/.cache/huggingface/lerobot/`.

También podemos inspeccionar los datos convertidos usando el kit de herramientas de visualización de conjuntos de datos integrado de LeRobot.

```bash
cd ../lerobot
python -m lerobot.scripts.visualize_dataset --repo-id EverNorif/so101_test_orange_pick  --episode-index 0
```

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/LPSxPMoP-pk" title="Simulate SoArm101 by LeIsaac (2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Entrenamiento de Políticas

En este wiki, ajustaremos finamente NVIDIA Isaac GR00T N1.5. Comencemos configurando el entorno virtual Isaac-GR00T:

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
La instalación de flash-attn involucra compilación de paquetes, lo cual puede ser extremadamente lento. Se recomienda [descargar](https://github.com/Dao-AILab/flash-attention/releases/tag/v2.7.1.post4) la versión del paquete precompilado que coincida con tu entorno del sistema e instalarlo localmente usando el comando: pip install ./nombre_del_paquete.
:::

Ejecuta el siguiente comando en la terminal para lanzar el entrenamiento:

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

## Inferencia de Políticas

En esta etapa, podemos desplegar nuestro modelo NVIDIA Isaac GR00T N1.5 ajustado finamente para controlar el brazo robótico SO-ARM101 en Isaac Lab.
La arquitectura de despliegue de Isaac-GR00T adopta un diseño desacoplado entre el punto final de inferencia y el punto final de control:

- Punto Final de Inferencia (Servidor): Dedicado únicamente a ejecutar tareas de inferencia del modelo.
- Punto Final de Control (Cliente): Responsable de adquirir estados del brazo robótico y orquestar el control de movimiento.

**Servidor**
Abre una nueva ventana de terminal y ejecuta:

```bash
conda activate gr00t
cd <path-to-Isaac-GR00T>
python scripts/inference_service.py --server --model_path  ./so101-orange-checkpoints/checkpoint-10000 --embodiment_tag new_embodiment --data_config so100_dualcam --port 5555
```

<div align="center">
    <img width={800}    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/server.png" />
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

El modelo entrenado final falló en controlar el brazo robótico SOArm101 para recoger la naranja. Esto se debe a que solo recopilé tres conjuntos de datos durante el experimento. ¡Si se pudieran recopilar más datos, la precisión del modelo mejoraría significativamente!

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
