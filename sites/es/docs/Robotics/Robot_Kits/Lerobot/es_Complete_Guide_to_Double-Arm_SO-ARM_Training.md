---
description: Guía completa para el entrenamiento de SO-ARM de doble brazo con LeRobot.
title: Guía Completa para el Entrenamiento de SO-ARM de Doble Brazo
keywords:
  - Lerobot
  - SO-ARM
  - Doble brazo
  - Robótica
  - Entrenamiento
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 6/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
url: https://wiki.seeedstudio.com/es/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-07-07'
---

import Link from '@docusaurus/Link';

# Guía Completa para el Entrenamiento de SO-ARM de Doble Brazo

## Introducción

Esta guía recorre todo el flujo para entrenar un sistema robótico SO-ARM de doble brazo con LeRobot. Cubre la configuración de hardware, la calibración de los brazos, la teleoperación bimanual, el registro y la gestión del conjunto de datos, el entrenamiento de la política ACT y el despliegue en el robot real. Siguiendo estos pasos, podrás recopilar datos de demostración con dos brazos líderes y dos brazos seguidores, entrenar una política de aprendizaje por imitación y desplegarla en el robot real.

Primero, conecta los cables de la siguiente manera.


| Rol                | Puerto         |
| ------------------ | -------------- |
| Brazo seguidor izquierdo  | `/dev/ttyACM0` |
| Brazo seguidor derecho | `/dev/ttyACM1` |
| Brazo líder izquierdo    | `/dev/ttyACM2` |
| Brazo líder derecho   | `/dev/ttyACM3` |

El tipo de brazo seguidor es `so101_follower`, y el tipo de brazo líder es `so101_leader` (en LeRobot, `so100_leader` y `so101_leader` comparten la misma implementación).

---

## 0. Requisitos previos

### 0.1 Instalar dependencias

Para la configuración del entorno, consulta el tutorial de SO-ARM:

<div style={{textAlign: 'center'}}>
    <Link to="/lerobot_so100m_new/#instalar-lerobot" style={{display: 'inline-block', width: 'auto', height: '40px', lineHeight: '40px', padding: '0 24px', whiteSpace: 'nowrap', backgroundColor: '#1eff00', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ Ir a la configuración del entorno
    </Link>
</div>

### 0.2 Permisos USB

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

## 1. Calibración (Paso clave)

### 1.1 Calibrar el brazo seguidor izquierdo

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

### 1.2 Calibrar el brazo seguidor derecho

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

### 1.3 Calibrar el brazo líder izquierdo

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

### 1.4 Calibrar el brazo líder derecho

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

Después de la calibración, los archivos se guardarán en:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

### (Opcional) Si has calibrado previamente con otros ID

Por ejemplo, si antes usaste `my_awesome_follower_arm1`, `my_awesome_follower_arm2`, etc., puedes copiar los archivos de calibración:

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration/robots

cp $CAL_DIR/so101_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/so101_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_right.json
```

---

## 2. Teleoperación bimanual

### 2.1 Sin cámara

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

### 2.2 Con cámara

Puedes usar `lerobot-find-cameras opencv` para ver los índices de las cámaras, y puedes añadir o quitar cámaras según sea necesario.

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

### Consejos de seguridad

- Ten en cuenta el entorno para evitar colisiones de los brazos seguidores.

## 3. Registrar conjunto de datos

### 3.1 Guardar localmente (no subir a Hub)

Añade `--dataset.root` y `--dataset.push_to_hub=false`.

> Nota: `repo_id` debe contener `/`. Para conjuntos de datos locales, puedes usar `local/` como prefijo de marcador de posición; en realidad no se subirá.

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

Los datos se guardarán en `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/`, con la siguiente estructura:

```text
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

### 3.2 Subir a Hugging Face Hub

Si quieres subir automáticamente, mantén `HF_USER` y elimina `root` y `push_to_hub=false`:

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM1 \
  --robot.right_arm_config.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM3 \
  --teleop.right_arm_config.port=/dev/ttyACM4 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

### 3.3 Continuar grabando (reanudar)

Si la grabación se cierra inesperadamente (por ejemplo, al pulsar el botón derecho para salir durante la fase de reinicio), o si quieres completar la recopilación en varias sesiones, puedes usar `--resume` para seguir añadiendo episodios al mismo conjunto de datos.

**Notas**:

- Debes añadir `--resume=true`; de lo contrario, `LeRobotDataset.create()` dará un error porque el directorio ya existe.
- `--dataset.num_episodes` se refiere a **cuántos episodios grabar esta vez**, no al objetivo total. Por ejemplo, si ya se han grabado 15 episodios y quieres llegar a 50, configúralo en `35`.
- Intenta salir durante la grabación de un episodio o después de un final natural; evita salir durante la fase de "Reset the environment" (lo que puede causar fallos al guardar episodios vacíos).

```bash
lerobot-record \
  --resume=true \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=35 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

### 3.4 Reproducir y eliminar episodios

#### Reproducir un episodio específico

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

> `episode` es un índice basado en 0, por lo que `24` significa el episodio número 25.

#### Eliminar un episodio específico

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

Después de la eliminación, el conjunto de datos se reescribirá en el mismo lugar y los datos originales se respaldarán en `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old/`. Después de confirmar que el nuevo conjunto de datos es correcto, puedes eliminar manualmente la copia de seguridad:

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

#### Eliminar todo el dataset

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

---

## 4. Entrenamiento ACT

### 4.1 Entrenar desde un dataset local

```bash
lerobot-train \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=60000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

### 4.2 Entrenar desde Hugging Face Hub

```bash
export HF_USER=your_hf_username

lerobot-train \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=100000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

> Lo anterior usa los parámetros predeterminados de ACT (`chunk_size=100`, `dim_model=512`, etc.).

## 5. Despliegue en robot real

### 5.1 Guardar datos de evaluación localmente

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

### 5.2 Subir a Hugging Face Hub

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM1 \
  --robot.right_arm_config.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

---

## 6. Preguntas frecuentes


| Problema                                                                  | Causa                                                                         | Solución                                                                                                                                                                 |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| La teleoperación solicita recalibrar                                      | `bi_so_follower` no puede encontrar archivos de calibración con sufijo `_left` / `_right` | Recalibra con IDs que contengan `_left` / `_right`, o copia los archivos de calibración existentes                                                                      |
| El brazo líder no se puede mover a mano                                   | El par del líder no está deshabilitado                                       | Vuelve a calibrar o revisa los motores                                                                                                                                   |
| "Directory already exists" al continuar la grabación                     | No se añadió `--resume=true`                                                  | Añade `--resume=true` al comando `lerobot-record`                                                                                                                        |
| Los brazos izquierdo y derecho están intercambiados                      | Error de configuración de puertos                                             | Intercambia `left_arm_config.port` y `right_arm_config.port`                                                                                                            |
| No se encuentra el dataset durante el entrenamiento                      | No se especificó `root` para el dataset local                                 | Añade `--dataset.root=./datasets/xxx` durante el entrenamiento                                                                                                           |
| El dataset se sube automáticamente                                       | No se estableció `push_to_hub=false`                                          | Añade `--dataset.push_to_hub=false` durante la grabación                                                                                                                 |
| Sale con `You must add one or several frames before calling add_episode` | Se salió durante la fase de reinicio, el episodio actual no tiene frames      | No afecta a los datos ya grabados; continúa grabando con `--resume=true`; el código actual ha corregido este escenario y los episodios vacíos se omitirán automáticamente |
|                                                                           |                                                                               |                                                                                                                                                                          |
