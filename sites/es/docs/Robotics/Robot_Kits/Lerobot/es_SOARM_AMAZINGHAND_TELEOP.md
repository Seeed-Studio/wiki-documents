---
description: Este documento explica cómo combinar el brazo seguidor SO-ARM101 con la mano hábil AmazingHand y realizar teleoperación usando LeRobot.
title: Guía completa de entrenamiento para SO-ARM con AmazingHand
keywords:
  - Lerobot
  - SO-ARM
  - AmazingHand
  - Robótica
  - Teleoperación
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/soarm_amazinghand.webp
slug: /soarm_amazinghand_teleop
sku: 114993666,114993667,100063642,100062181
last_update:
  date: 2026-07-12
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-12'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/es/soarm_amazinghand_teleop/
---

# Guía completa de entrenamiento para SO-ARM con AmazingHand

Este documento explica cómo combinar el brazo seguidor SO-ARM101 con la mano hábil AmazingHand y realizar teleoperación usando LeRobot.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/soarm_amazinghand.webp" />
</div>

## 1. Conexión de hardware

1. El archivo STL para el adaptador SOARM-a-AmazingHand está disponible aquí:

[lerobot/soarm\_amazinghand\_link\_step\_stl/step at soarm\_amazinghand · xiehuangbao888/lerobot](https://github.com/xiehuangbao888/lerobot/tree/soarm_amazinghand/soarm_amazinghand_link_step_stl/step)

2. Retira la garra original del SOARM.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/1.webp" />
</div>

3. Monta el adaptador SOARM-a-AmazingHand en el brazo.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/2.webp" />
</div>

4. Instala la mano hábil AmazingHand.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/3.webp" />
</div>

5. Cablea los dispositivos de la siguiente manera:

| Dispositivo | Puerto serie | Descripción |
| ---------------------------------- | -------------- | --------------------- |
| Brazo seguidor SO-101 (servo de garra n.º 6 retirado) | `/dev/ttyACM0` | Solo se conservan los servos de las articulaciones 1~5 |
| Brazo líder SO-101 (servo de garra n.º 6 conservado) | `/dev/ttyACM1` | La apertura/cierre de la garra se usa como señal de entrada |
| Mano hábil AmazingHand | `/dev/ttyACM2` | 8 servos con ID 1~8 |

> Si tus puertos serie son diferentes, sustitúyelos por los nombres de puerto reales en los siguientes comandos.

---

El robot:

- Controlará las 5 articulaciones del brazo seguidor (servos 1~5) a través de `/dev/ttyACM0`.
- Controlará la mano hábil AmazingHand a través de `/dev/ttyACM2`.
- Mapeará el `gripper.pos` del brazo líder **de forma proporcional** al ángulo de apertura de la mano hábil (0 = completamente abierta, 100 = completamente cerrada).

Los archivos de calibración se guardan automáticamente en:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_amazing_hand/<robot.id>.json
~/.cache/huggingface/lerobot/calibration/teleoperators/so101_leader/<teleop.id>.json
```

---

## 2. Entorno y conexión

```bash
git clone https://github.com/xiehuangbao888/lerobot.git
```

Cambia al entorno virtual lerobot existente.

Primero, concede permisos al dispositivo:

```bash
sudo chmod 666 /dev/ttyACM*
```

#### Paso 1: Calibrar el brazo líder

```bash
cd ~/lerobot
conda activate lerobot
python -m lerobot.scripts.lerobot_calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader
```

Sigue las indicaciones:

1. Coloca todas las articulaciones del brazo líder en sus posiciones medias y pulsa Enter.
2. Mueve cada articulación a sus rangos máximo y mínimo por turno, luego pulsa Enter para finalizar.

#### Paso 2: Calibrar el brazo seguidor

```bash
python -m lerobot.scripts.lerobot_calibrate \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2
```

Sigue las indicaciones:

1. Coloca las 5 articulaciones del brazo seguidor en sus posiciones medias y pulsa Enter.
2. Mueve las 5 articulaciones a sus rangos máximo y mínimo por turno, luego pulsa Enter para finalizar.

> Nota: El brazo seguidor solo tiene 5 articulaciones; el servo de la garra n.º 6 ha sido retirado.

#### Paso 3: Ejecutar la teleoperación

```bash
python -m lerobot.scripts.lerobot_teleoperate \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader \
    --display_data=true
```

---

Puedes personalizar el movimiento de agarre. El archivo correspondiente se encuentra en:

```text
src/lerobot/robots/so_amazing_hand/config_so_amazing_hand.py
```

---

## 3. Recopilar conjunto de datos con la mano hábil

```bash
python -m lerobot.scripts.lerobot_record \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --robot.cameras='{
      wrist: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30},
      top: {type: opencv, index_or_path: 4, width: 640, height: 480, fps: 30}
    }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader \
    --display_data=true \
    --dataset.repo_id=seeed/amazing_soarm \
    --dataset.num_episodes=20 \
    --dataset.single_task="Pick up the cube with the dexterous hand"
```

Descripciones de parámetros:

| Parámetro | Descripción |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| `--robot.cameras` | Configuración de cámara; admite `opencv`, `realsense`, etc. `index_or_path` es el índice de la cámara o la ruta del flujo de vídeo. |
| `--dataset.repo_id` | ID del conjunto de datos en Hugging Face, con el formato `{username}/{dataset_name}`. |
| `--dataset.num_episodes` | Número de episodios a grabar. |
| `--dataset.single_task` | Descripción de la tarea escrita en los metadatos del conjunto de datos. |
| `--robot.hand_use_proportional_control` | Por defecto es `true`; no es necesario configurarlo explícitamente. Establécelo en `false` para un comportamiento binario de abrir/cerrar. |

---

## 4. Entrenamiento de la política

```bash
lerobot-train \
  --dataset.repo_id=seeed/amazing_soarm \
  --policy.type=act \
  --output_dir=outputs/train/amazing_soarm \
  --job_name=amazing_soarm \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=60000 \
```

## 5. Evaluación y despliegue

### Evaluar la política entrenada en el robot real

```bash
python -m lerobot.scripts.lerobot_record \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --robot.cameras='{
      wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30},
      top: {type: opencv, index_or_path: 4, width: 640, height: 480, fps: 30}
    }' \
    --policy.path=outputs/train/amazing_soarm/checkpoints/last/pretrained_model \
    --dataset.repo_id=seeed_val/amazinghand_pick_cube_eval \
    --dataset.num_episodes=10 \
    --dataset.single_task="Pick up the cube with the dexterous hand" \
    --display_data=true
```
