---
description: "Capítulo 17 del curso para principiantes de SO-ARM Physical AI (optativo) — escala de un brazo a dos: cablea cuatro brazos, calibra los pares líder/seguidor izquierdo y derecho, teleopera y graba con bi_so_follower / bi_so_leader, entrena ACT y despliega políticas bimanuales."
title: Capítulo 17 - Entrenamiento de doble brazo SO-ARM
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - doble brazo
  - bimanual
  - entrenamiento
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_17
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 17 · Optativo</span>
    <h2>17. Entrenamiento de doble brazo SO-ARM</h2>
    <p>
      Capítulo 17 del curso para principiantes de SO-ARM Physical AI (optativo) — escala de un brazo a dos: cablea cuatro brazos, calibra los pares líder/seguidor izquierdo y derecho, teleopera y graba con bi_so_follower / bi_so_leader, entrena ACT y despliega políticas bimanuales.
    </p>
    <div className="hero-actions">
      <a href="#wiring">Cableado</a>
      <a href="#calibration">Calibración</a>
      <a href="#training">Entrenar</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Lo que necesitarás</strong>
    <span>Dos kits SO-ARM (4 brazos: 2 líderes + 2 seguidores).</span>
    <span>El mismo entorno de software de los Capítulos 5-16.</span>
    <span>Una tarea que necesite dos manos — p. ej. pasar un objeto del brazo izquierdo al derecho.</span>
  </div>
</section>

## 17.1 Por qué doble brazo

<section id="why" className="section-card">
  <div className="section-title">
    <span>Motivación</span>
    <h2>17.1 Por qué doble brazo</h2>
  </div>

Muchas tareas reales de manipulación son genuinamente de dos manos: recoger y entregar, plegar cajas, ensamblar dos piezas. El aprendizaje bimanual por imitación es además el escenario donde nació ACT (ALOHA), y el ecosistema SO-ARM lo soporta de forma nativa — LeRobot trae los tipos `bi_so_follower` y `bi_so_leader` que tratan dos brazos como un solo robot de 12 dimensiones de acción (6 por brazo).

Todo lo aprendido en los Capítulos 8-16 se transfiere; solo se duplica el hardware y cada comando lleva `left_arm_config` / `right_arm_config`.

</section>

## 17.2 Cableado y puertos

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>Cableado</span>
    <h2>17.2 Cableado y puertos</h2>
  </div>

Conecta las cuatro placas y anota el puerto de cada brazo:

| Rol | Puerto |
| :--- | :--- |
| Seguidor izquierdo | `/dev/ttyACM0` |
| Seguidor derecho | `/dev/ttyACM1` |
| Líder izquierdo | `/dev/ttyACM2` |
| Líder derecho | `/dev/ttyACM3` |

El tipo del seguidor es `so101_follower` y el del líder `so101_leader` para calibrar (en LeRobot, `so100_leader` y `so101_leader` comparten implementación).

Permisos para los cuatro puertos:

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</section>

## 17.3 Calibración (paso clave)

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>Calibración</span>
    <h2>17.3 Calibración (paso clave)</h2>
  </div>

Calibra cada brazo por separado con el procedimiento del Capítulo 10, usando **ids con sufijos `_left` / `_right`** — los tipos bimanuales buscan archivos con exactamente esos sufijos.

**Seguidor izquierdo:**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

**Seguidor derecho:**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

**Líder izquierdo:**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

**Líder derecho:**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

Tras calibrar, los archivos quedan en:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

:::tip
**¿Ya calibraste con otros ids?** Copia los archivos en lugar de repetir el procedimiento físico:

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
:::

</section>

## 17.4 Teleoperación de doble brazo

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>Teleoperación</span>
    <h2>17.4 Teleoperación de doble brazo</h2>
  </div>

**Sin cámaras:**

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

**Con cámaras de muñeca** (índices con `lerobot-find-cameras opencv`, añade o quita según necesites):

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

:::warning
Dos seguidores comparten ahora un mismo espacio de trabajo. Vigila el entorno para evitar colisiones entre ellos — y entre las pinzas en tareas de entrega.
:::

</section>

## 17.5 Grabar un dataset bimanual

<section id="record" className="section-card">
  <div className="section-title">
    <span>Grabación</span>
    <h2>17.5 Grabar un dataset bimanual</h2>
  </div>

Guarda localmente (añade `--dataset.push_to_hub=false`; el `repo_id` debe contener `/`, así que `seeed/` sirve de prefijo local):

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

Los datos van a `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/` con la misma estructura del Capítulo 13. Para subir al Hub, mantén `HF_USER`, quita `push_to_hub=false` y fija `--dataset.repo_id=${HF_USER}/bimanual_so101_task`.

### Continuar una grabación (reanudar)

Si la grabación termina de forma inesperada o recoges por sesiones, usa `--resume`:

- Añade siempre `--resume=true`; si no, `LeRobotDataset.create()` fallará porque el directorio existe.
- `--dataset.num_episodes` cuenta **los episodios de esta sesión** (15 de 50 grabados → pon 35).
- Procura salir durante un episodio o tras un final natural; evita salir en la fase de "reiniciar el entorno" (puede guardar un episodio vacío — el código reciente los salta automáticamente):

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

### Reproducir y borrar episodios

Reproduce un episodio concreto en los brazos reales (`episode` base 0 — 24 significa el 25.º):

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

Borra un episodio malo (kit del Capítulo 13):

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

El original queda respaldado en `.../bimanual_so101_task_old/`; bórralo a mano tras verificar.

</section>

## 17.6 Entrenamiento ACT

<section id="training" className="section-card">
  <div className="section-title">
    <span>Entrenar</span>
    <h2>17.6 Entrenamiento ACT</h2>
  </div>

**Desde el dataset local:**

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

**Desde Hugging Face Hub:**

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

Se usan los parámetros por defecto de ACT (`chunk_size=100`, `dim_model=512`, etc.). La política lee automáticamente estados/acciones de 12 dimensiones (6 por brazo) del dataset — sin configuración extra.

</section>

## 17.7 Despliegue en robot real

<section id="deploy" className="section-card">
  <div className="section-title">
    <span>Desplegar</span>
    <h2>17.7 Despliegue en robot real</h2>
  </div>

Evalúa con la receta del Capítulo 16, ahora con ambos brazos — guarda la evaluación localmente:

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

O súbelo con `--dataset.repo_id=${HF_USER}/eval_bimanual_so101_task` y sin `dataset.root`.

</section>

## 17.8 FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>17.8 FAQ</h2>
  </div>

| Problema | Causa | Solución |
| :--- | :--- | :--- |
| La teleoperación pide recalibrar | `bi_so_follower` no encuentra archivos con sufijo `_left` / `_right` | Recalibra con ids con sufijos, o copia los archivos (17.3) |
| El líder no se puede mover a mano | Par del líder no desactivado | Recalibra o revisa los motores |
| "Directory already exists" al reanudar | Falta `--resume=true` | Añádelo al comando `lerobot-record` |
| Brazos izquierdo y derecho intercambiados | Puerto mal configurado | Intercambia `left_arm_config.port` y `right_arm_config.port` |
| Dataset no encontrado al entrenar | `root` sin especificar para dataset local | Añade `--dataset.root=./datasets/xxx` al entrenar |
| El dataset se sube automáticamente | Falta `push_to_hub=false` | Añádelo al grabar |
| Sale con `You must add one or several frames before calling add_episode` | Saliste en la fase de reinicio; el episodio no tiene fotogramas | Lo ya grabado está a salvo; continúa con `--resume=true`; el código actual salta episodios vacíos |

</section>

</div>
