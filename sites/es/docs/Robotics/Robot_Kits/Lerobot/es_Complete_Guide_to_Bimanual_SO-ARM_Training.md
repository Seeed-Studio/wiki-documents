---
description: "Cómo entrenar una política SO-ARM bimanual (de doble brazo) con LeRobot: calibrar cuatro brazos, teleoperar, registrar conjuntos de datos, entrenar ACT y desplegar en los robots reales."
title: SO-Arm Bimanual-Teleoperation
keywords:
  - LeRobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
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
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Guía completa para el entrenamiento bimanual de SO-ARM

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" width={800} height={456} style={{height: 'auto'}} alt="Kit de brazo robótico SO-ARM bimanual" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-ARM101-Bimanual-Robot-Arm-Kit.html" target="_blank" rel="noopener noreferrer">
    <span>Obtén el kit SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## Introducción

Esta guía recorre el flujo completo para entrenar un sistema robótico SO-ARM bimanual con LeRobot. Cubre la configuración de hardware, la calibración de los brazos, la teleoperación bimanual, el registro y la gestión de conjuntos de datos, el entrenamiento de la política ACT y el despliegue en el robot real. Siguiendo estos pasos, podrás recopilar datos de demostración con dos brazos líderes y dos brazos seguidores, entrenar una política de aprendizaje por imitación y desplegarla en el robot real.

### Ruta de aprendizaje recomendada

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#0-prerequisites">Prepara el entorno</a></h4>
<p>Instala LeRobot e identifica los cuatro puertos serie.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#1-calibration-key-step">Calibra los brazos</a></h4>
<p>Calibra los brazos líder y seguidor izquierdo y derecho.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#2-bimanual-teleoperation">Teleopera ambos brazos</a></h4>
<p>Verifica el control y luego añade cámaras según sea necesario.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#3-record-dataset">Registra un conjunto de datos</a></h4>
<p>Registra demostraciones y luego reanúdalas o repítelas según sea necesario.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#4-act-training">Entrena una política ACT</a></h4>
<p>Elige un conjunto de datos local o de Hub como entrada.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#5-real-robot-deployment">Evalúa en el robot</a></h4>
<p>Carga un checkpoint y guarda los datos de evaluación.</p>
</div>
</section>

</div>

### Demostración de colaboración bimanual con SO-ARM

<div className="video-container">
  <iframe src="https://www.youtube.com/embed/Y_P0BmlM7VI" title="Demostración de colaboración bimanual con SO-ARM" width="900" height="500" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

## 0. Requisitos previos

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Instala las dependencias {#01-install-dependencies}

<p className="rebot-step-label">Paso 1</p>

Configura LeRobot usando el [SO-ARM Quick Start](/es/lerobot_so100m_new/#install-lerobot).

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Conecta los brazos y comprueba los permisos USB {#02-usb-permissions}

<p className="rebot-step-label">Paso 2</p>

Confirma los puertos asignados a tus cuatro brazos. Los comandos posteriores usan los puertos de ejemplo que se muestran abajo. Sustituye tus puertos reales y mantén las asignaciones de izquierda y derecha coherentes.

| Rol | Puerto serie de ejemplo | Tipo de LeRobot |
| --- | --- | --- |
| Brazo seguidor izquierdo | `/dev/ttyACM0` | `so101_follower` |
| Brazo seguidor derecho | `/dev/ttyACM1` | `so101_follower` |
| Brazo líder izquierdo | `/dev/ttyACM2` | `so101_leader` |
| Brazo líder derecho | `/dev/ttyACM3` | `so101_leader` |

`so100_leader` y `so101_leader` comparten la misma implementación.

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</div>
</section>

</div>

## 1. Calibración (Paso clave)

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Calibra el brazo seguidor izquierdo {#11-calibrate-the-left-follower-arm}

<p className="rebot-step-label">Paso 1</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Calibra el brazo seguidor derecho {#12-calibrate-the-right-follower-arm}

<p className="rebot-step-label">Paso 2</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Calibra el brazo líder izquierdo {#13-calibrate-the-left-leader-arm}

<p className="rebot-step-label">Paso 3</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

### Calibra el brazo líder derecho {#14-calibrate-the-right-leader-arm}

<p className="rebot-step-label">Paso 4</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

</div>
</section>

</div>

Comprueba la ruta guardada que imprime LeRobot. Estas son las carpetas predeterminadas actuales de Seeed LeRobot. Cada nombre de archivo es el `<id>.json` correspondiente.

| Brazo | Carpeta de calibración |
| --- | --- |
| Seguidor | `~/.cache/huggingface/lerobot/calibration/robots/so_follower/` |
| Líder | `~/.cache/huggingface/lerobot/calibration/teleoperators/so_leader/` |

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="optional-if-you-have-previously-calibrated-with-other-ids">
<summary>Opcional: reutilizar archivos de calibración para los mismos brazos</summary>

Reutiliza archivos solo para el mismo brazo físico. El ejemplo usa IDs más antiguos. Comprueba la carpeta y los nombres de archivo en los registros de LeRobot.

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_right.json
```

</details>

</div>

## 2. Teleoperación bimanual

<span id="safety-tips" aria-hidden="true" />

:::caution Consejos de seguridad
Antes de la teleoperación, fija los brazos, despeja su espacio de trabajo y comprueba que cada líder controle a su seguidor correspondiente.
:::

<span id="21-without-camera" aria-hidden="true" />
<span id="22-with-camera" aria-hidden="true" />

<Tabs defaultValue="no-camera">
<TabItem value="no-camera" label="Sin cámaras">

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

</TabItem>
<TabItem value="with-camera" label="Con cámaras">

Ejecuta `lerobot-find-cameras opencv` para encontrar los índices de las cámaras y sustituye los valores según tu configuración.

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

</TabItem>
</Tabs>

## 3. Registrar conjunto de datos

Aquí, un episodio es una grabación completa de una acción del robot.

Ejecuta `lerobot-find-cameras opencv` para encontrar los índices de las cámaras y sustituye los valores según tu configuración.

<span id="31-save-locally-do-not-upload-to-hub" aria-hidden="true" />
<span id="32-upload-to-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Guardar localmente">

Este ejemplo desactiva la subida y usa el directorio de caché predeterminado. Para usar una ruta personalizada, añade `--dataset.root`. El formato de `repo_id` es `namespace/dataset`.

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
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

La ruta predeterminada es `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/`.

```text
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

</TabItem>
<TabItem value="hub" label="Upload to Hugging Face Hub">

Configura `HF_USER` con tu nombre de usuario de Hugging Face y verifica que tienes permisos de escritura en el repositorio de destino. Este ejemplo habilita la subida explícitamente.

```bash
export HF_USER=your_hf_username

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
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

</TabItem>
</Tabs>

| Opción | Significado |
| --- | --- |
| `--dataset.num_episodes` | Número de episodios que se van a grabar en esta ejecución. |
| `--dataset.episode_time_s` | Duración de cada grabación, en segundos. |
| `--dataset.reset_time_s` | Tiempo de reinicio entre grabaciones, en segundos. |
| `--dataset.fps` | Frecuencia de fotogramas de la grabación. |
| `--dataset.single_task` | Descripción en texto de la tarea que se está demostrando. |

### 3.3 Continuar grabando (reanudar)

Usa `--resume=true` para añadir datos al mismo dataset. Mantén coherentes el ID del dataset, la ruta de almacenamiento y la configuración del dispositivo. Si ya grabaste 15 episodios y necesitas 50 en total, establece `--dataset.num_episodes` en 35. Detente después de que un episodio termine cuando sea posible para evitar una grabación sin fotogramas durante el reinicio.

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
  --dataset.rgb_encoder.vcodec=libsvtav1 \
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

Los índices de episodios comienzan en 0, por lo que `24` se refiere a la 25.ª grabación.

#### Eliminar un episodio específico

:::caution
El siguiente ejemplo reescribe el dataset en el mismo lugar y hace una copia de seguridad de los datos anteriores en un directorio que termina en `_old`. Para conservar el dataset original, usa [Guardar como un nuevo dataset](/es/lerobot_dataset_tool/#eliminar-episodios).
:::

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

#### Limpiar la copia de seguridad antigua {#delete-the-entire-dataset}

Una vez que el nuevo dataset esté verificado y la copia de seguridad ya no sea necesaria, confirma que la ruta termina en `_old` antes de eliminarla.

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

## 4. Entrenamiento ACT

<span id="41-train-from-local-dataset" aria-hidden="true" />
<span id="42-train-from-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Train from local data">

Si grabaste en un directorio personalizado, configura también `--dataset.root` para el entrenamiento.

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

</TabItem>
<TabItem value="hub" label="Train from Hub data">

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

</TabItem>
</Tabs>

| Opción | Significado |
| --- | --- |
| `--dataset.repo_id` | ID del dataset de entrenamiento. |
| `--policy.type=act` | Selecciona la política ACT. |
| `--policy.device=cuda` | Entrena en una GPU CUDA. |
| `--steps` | Número de pasos de entrenamiento. Los comandos muestran valores de ejemplo. |
| `--output_dir` | Directorio para la salida del entrenamiento. |

Los ejemplos usan los valores predeterminados de ACT, incluyendo `chunk_size=100` y `dim_model=512`.

## 5. Despliegue en robot real

:::caution
Verifica el checkpoint de la política, los puertos serie y las cámaras, y luego despeja el espacio de trabajo de los brazos antes de iniciar la evaluación.
:::

<span id="51-save-evaluation-data-locally" aria-hidden="true" />
<span id="52-upload-to-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Save evaluation data locally">

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
  --dataset.repo_id=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
<TabItem value="hub" label="Upload evaluation data to Hub">

Configura `HF_USER` con tu nombre de usuario de Hugging Face y verifica que tienes permisos de escritura en el repositorio de destino. Este ejemplo habilita la subida explícitamente.

```bash
export HF_USER=your_hf_username

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
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
</Tabs>

## 6. Preguntas frecuentes

| Problema                                                                   | Causa                                                                         | Solución                                                                                                                                                                 |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| La teleoperación solicita recalibrar                                      | `bi_so_follower` no puede encontrar archivos de calibración con sufijo `_left` / `_right` | Recalibra con IDs que contengan `_left` / `_right`, o copia los archivos de calibración existentes                                                                      |
| El brazo líder no se puede mover a mano                                   | El par del líder no está deshabilitado                                       | Recalibra o revisa los motores                                                                                                                                           |
| "Directory already exists" al continuar la grabación                      | No se añadió `--resume=true`                                                  | Añade `--resume=true` al comando `lerobot-record`                                                                                                                        |
| Los brazos izquierdo y derecho están intercambiados                       | Error de configuración de puertos                                             | Intercambia `left_arm_config.port` y `right_arm_config.port`                                                                                                             |
| Dataset no encontrado durante el entrenamiento                            | No se especificó `root` para el dataset local                                 | Añade `--dataset.root=./datasets/xxx` durante el entrenamiento                                                                                                           |
| El dataset se sube automáticamente                                        | No se estableció `push_to_hub=false`                                          | Añade `--dataset.push_to_hub=false` durante la grabación                                                                                                                 |
| Sale con `You must add one or several frames before calling add_episode`  | Se salió durante la fase de reinicio, el episodio actual no tiene fotogramas  | No afecta a los datos ya grabados; continúa grabando con `--resume=true`; el código actual ha corregido este escenario y los episodios vacíos se omitirán automáticamente |
