---
description: 'Capítulo 21 del Curso de Introducción a la IA Física de Seeed: ajuste fino del reBot Arm con Isaac GR00T: configuración del entorno, descarga del modelo base, ruta del conjunto de datos, ajuste fino con una sola GPU y con múltiples GPU, monitorización de la VRAM y la pérdida, guardado de checkpoints, inferencia en el robot real, resolución de problemas y consejos de entrenamiento.'
title: Capítulo 21 - Ajuste fino del reBot Arm con Isaac GR00T
keywords:
  - reBot
  - GR00T
  - Fine-tuning
  - LeRobot
  - VLA
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_21
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-24
  author: ZhuYaoHui
createdAt: '2026-09-24'
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_21/
---

import '/src/css/rebot-wiki-style.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 4 · Capítulo 21 · Práctica</span>
    <h2>21. Ajuste fino del reBot Arm con Isaac GR00T</h2>
    <p>
      Capítulo 21 del Curso de Introducción a la IA Física de Seeed: configuración del entorno,
      descarga del modelo base, ruta del conjunto de datos, ajuste fino con una sola GPU y con múltiples GPU,
      monitorización de la VRAM y la pérdida, guardado de checkpoints, inferencia en el robot real, resolución de problemas y
      consejos de entrenamiento.
    </p>
    <div className="hero-actions">
      <a href="#environment">Entorno</a>
      <a href="#single-gpu">Ajuste fino</a>
      <a href="#inference">Inferencia</a>
    </div>
  </div>
</section>

<section className="section-card">
  <p>Este capítulo se basa en <strong>LeRobot + GR00T N1.7</strong> (<code>nvidia/GR00T-N1.7-3B</code>). Asegúrate de que el conjunto de datos del Capítulo 20 esté listo.</p>

  <div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-01.png" alt="Ajuste fino con Isaac GR00T" />
  </div>
</section>

## 21.1 Configuración del entorno

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Entorno</span>
    <h2>21.1 Configuración del entorno</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-02.png" alt="Configuración del entorno" />
</div>

### Hardware recomendado

| Configuración | Mínimo para inferencia | Recomendado para ajuste fino |
| :--- | :--- | :--- |
| GPU | 16 GB+ (la RTX 4090 puede ejecutar inferencia) | **40 GB+** (L40 / A100 80GB / H100); el ajuste fino oficial en simulación requiere ≥ 48 GB |
| Sistema | Linux (Ubuntu 22.04+) | Linux nativo o WSL2 |
| Almacenamiento | 50 GB de espacio libre | 100 GB+ (incluyendo la caché del modelo) |

:::warning
GR00T requiere una **GPU CUDA**; el entrenamiento solo con CPU no es compatible. El ajuste fino por defecto (projector + cabeza DiT) alcanza un pico de unas **35 GB**. **La RTX 4090 / 24 GB no puede hacer ajuste fino completo** y solo es adecuada para inferencia; si debes entrenar con 24 GB, usa LoRA / PEFT (`pip install "lerobot[peft]"`), cuyos resultados no son directamente comparables con el ajuste fino completo oficial.
:::

### Instalación de LeRobot y dependencias de GR00T

Después de crear un entorno de Python 3.12 según la [documentación de instalación de LeRobot](https://huggingface.co/docs/lerobot/main/en/installation):

```bash
conda create -y -n lerobot python=3.12
conda activate lerobot

# Install ffmpeg (video decoding, Linux + TorchCodec)
conda install ffmpeg -c conda-forge

# Install LeRobot + GR00T + training tools
pip install "lerobot[groot,training]"
```

### Flash Attention (Importante)

GR00T N1.7 depende de Flash Attention para la aceleración. Se recomienda instalar primero PyTorch que coincida con tu versión de CUDA y luego instalar flash-attn:

```bash
# Example: CUDA 12.8 + PyTorch 2.7 (RTX 50 series can reference this combo)
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu128

pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation

python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} OK')"
```

Si la compilación de flash-attn falla, las causas habituales son:

1. Incompatibilidad entre las versiones de PyTorch y CUDA -> vuelve a instalar la rueda correspondiente.
2. Falta de herramientas de compilación -> `sudo apt install build-essential`.
3. VRAM/memoria insuficiente -> cierra otros procesos de GPU y vuelve a intentarlo.

### Inicio de sesión en Hugging Face y W&B

```bash
huggingface-cli login
wandb login   # optional, for training curve visualization
```

</section>

## 21.2 Descarga del modelo base

<section id="foundation-model" className="section-card">
  <div className="section-title">
    <span>Modelo</span>
    <h2>21.2 Descarga del modelo base</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-03.png" alt="Descarga del modelo base" />
</div>

El modelo base está alojado en Hugging Face:

```text
nvidia/GR00T-N1.7-3B
```

En el primer entrenamiento, LeRobot lo descarga automáticamente en `~/.cache/huggingface/hub/`. La columna vertebral VLM de N1.7, `nvidia/Cosmos-Reason2-2B`, es un modelo **restringido**; debes aceptar los términos en Hugging Face antes de ejecutar `huggingface-cli login`. También puedes descargarlo previamente de forma manual:

```bash
huggingface-cli download nvidia/GR00T-N1.7-3B --local-dir ./models/GR00T-N1.7-3B
huggingface-cli download nvidia/Cosmos-Reason2-2B
```

Especifícalo en los argumentos de entrenamiento:

```text
--policy.base_model_path=nvidia/GR00T-N1.7-3B
```

:::note
La versión actual de LeRobot solo es compatible con GR00T **N1.7**. N1.5 requiere fijar la versión antigua `lerobot==0.5.1`, lo cual no se cubre en este tutorial.
:::

</section>

## 21.3 Configuración de la ruta del conjunto de datos

<section id="dataset-path" className="section-card">
  <div className="section-title">
    <span>Ruta del conjunto de datos</span>
    <h2>21.3 Configuración de la ruta del conjunto de datos</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-04.png" alt="Configuración de la ruta del conjunto de datos" />
</div>

### Conjunto de datos local

Si los datos están en la caché local (no se han subido a Hub), `repo_id` debe coincidir con el utilizado durante la grabación:

```bash
export DATASET_REPO_ID="seeed_rebot_b601_rs/pick_cube"   # for DM: seeed_rebot_b601_dm/pick_cube
```

LeRobot carga automáticamente desde `~/.cache/huggingface/lerobot/`.

### Conjunto de datos en Hub

```bash
export HF_USER="your_hf_username"
export DATASET_REPO_ID="${HF_USER}/rebot_vla_pick_cube"
```

Asegúrate de que el conjunto de datos en Hub incluya `meta/modality.json` (creado en el Capítulo 20).

</section>

## 21.4 Inicio del ajuste fino con una sola GPU

<section id="single-gpu" className="section-card">
  <div className="section-title">
    <span>Ajuste fino</span>
    <h2>21.4 Inicio del ajuste fino con una sola GPU</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-05.png" alt="Ajuste fino con una sola GPU" />
</div>

El siguiente comando está dirigido al **reBot Arm de un solo brazo, new_embodiment** (sustituye el `repo_id` del conjunto de datos para RS/DM). `chunk_size=40` se alinea con el `action_horizon` oficial de N1.7; el código fuente `groot` de LeRobot usa por defecto 50, ambos mucho mayores que los 16 de N1.5/N1.6 — **no uses 16**.

```bash
export HF_USER="your_hf_username"
export DATASET_REPO_ID="seeed_rebot_b601_rs/pick_cube"   # local or Hub; for DM use b601_dm
export REPO_ID="${HF_USER}/rebot_groot17_pick_cube"      # uploaded model name after fine-tuning
export OUTPUT_DIR="outputs/train/${REPO_ID}"

lerobot-train \
  --dataset.repo_id=${DATASET_REPO_ID} \
  --dataset.image_transforms.enable=true \
  --policy.type=groot \
  --policy.device=cuda \
  --policy.base_model_path=nvidia/GR00T-N1.7-3B \
  --policy.embodiment_tag=new_embodiment \
  --policy.chunk_size=40 \
  --policy.n_action_steps=40 \
  --policy.use_relative_actions=true \
  --policy.relative_exclude_joints='["gripper"]' \
  --policy.use_bf16=true \
  --policy.push_to_hub=true \
  --policy.repo_id=${REPO_ID} \
  --seed=42 \
  --batch_size=32 \
  --steps=20000 \
  --save_checkpoint=true \
  --save_freq=5000 \
  --use_policy_training_preset=true \
  --env_eval_freq=0 \
  --eval_steps=0 \
  --log_freq=10 \
  --output_dir=${OUTPUT_DIR} \
  --job_name=rebot_groot_finetune \
  --wandb.enable=true \
  --wandb.disable_artifact=true
```

### Parámetros clave

| Parámetro | Valor | Descripción |
| :--- | :--- | :--- |
| `--policy.type` | `groot` | Usar la política GR00T |
| `--policy.embodiment_tag` | `new_embodiment` | Embodiment personalizado de reBot |
| `--policy.chunk_size` | `40` | Alineado con N1.7 `action_horizon=40` (no uses 16) |
| `--policy.n_action_steps` | `40` | Normalmente coincide con el chunk durante el entrenamiento; se puede reducir en inferencia |
| `--policy.use_relative_actions` | `true` | **Preprocesamiento relativo de articulaciones de LeRobot**, no EEF relativo |
| `--policy.relative_exclude_joints` | `["gripper"]` | Mantener el gripper en control absoluto |
| `--policy.use_bf16` | `true` | Precisión mixta, ahorra VRAM |
| `--batch_size` | `32` (ajustable) | 32 en una tarjeta de 40 GB; bájalo a 8 o 16 si hay OOM |
| `--steps` | `20000` | Pasos de ajuste fino; se puede reducir a 10000 con pocos datos |
| `--save_freq` | `5000` | Guardar un checkpoint cada 5000 pasos |

Para guardar solo localmente sin subir a Hub:

```text
--policy.push_to_hub=false
```

</section>

## 21.5 Inicio del ajuste fino con múltiples GPU

<section id="multi-gpu" className="section-card">
  <div className="section-title">
    <span>Múltiples GPU</span>
    <h2>21.5 Inicio del ajuste fino con múltiples GPU</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-06.png" alt="Ajuste fino con múltiples GPU" />
</div>

Para entornos con múltiples GPU, usa `accelerate`:

```bash
export NUM_GPUS=2
export BATCH_SIZE=16        # per-GPU batch; total batch = 16 x num GPUs
export NUM_STEPS=20000
export SAVE_FREQ=5000
export LOG_FREQ=10
export DATASET_REPO_ID="seeed_rebot_b601_rs/pick_cube"
export REPO_ID="${HF_USER}/rebot_groot17_pick_cube"
export OUTPUT_DIR="outputs/train/${REPO_ID}"

accelerate launch \
  --multi_gpu \
  --num_processes=${NUM_GPUS} \
  $(which lerobot-train) \
  --dataset.repo_id=${DATASET_REPO_ID} \
  --dataset.image_transforms.enable=true \
  --policy.type=groot \
  --policy.device=cuda \
  --policy.base_model_path=nvidia/GR00T-N1.7-3B \
  --policy.embodiment_tag=new_embodiment \
  --policy.chunk_size=40 \
  --policy.n_action_steps=40 \
  --policy.use_relative_actions=true \
  --policy.relative_exclude_joints='["gripper"]' \
  --policy.use_bf16=true \
  --policy.push_to_hub=true \
  --policy.repo_id=${REPO_ID} \
  --output_dir=${OUTPUT_DIR} \
  --save_checkpoint=true \
  --batch_size=${BATCH_SIZE} \
  --steps=${NUM_STEPS} \
  --save_freq=${SAVE_FREQ} \
  --log_freq=${LOG_FREQ} \
  --use_policy_training_preset=true \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=rebot_groot_multi_gpu
```

</section>

## 21.6 Monitorización de VRAM, pérdida y registros de entrenamiento

<section id="monitoring" className="section-card">
  <div className="section-title">
    <span>Monitorización</span>
    <h2>21.6 Monitorización de VRAM, pérdida y registros de entrenamiento</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-07.png" alt="Monitorización de VRAM, pérdida y registros de entrenamiento" />
</div>

### Monitor de VRAM

En una terminal separada:

```bash
watch -n 1 nvidia-smi
```

| Síntoma | Acción |
| :--- | :--- |
| OOM (out of memory) | Primero confirma que la GPU ≥ 40 GB; luego reduce `--batch_size` y mantén `--policy.use_bf16=true`. En 24 GB, usa LoRA/PEFT en lugar de forzar un batch más pequeño para un fine-tuning completo |
| Margen de VRAM disponible | Aumenta `batch_size` de forma adecuada para acelerar el entrenamiento |
| Baja utilización | Revisa `num_workers`; confirma que los datos están en un SSD local |

### Curva de pérdida

Después de habilitar W&B, observa en la web la tendencia decreciente de `train/loss`. Un fine-tuning saludable:

- La pérdida cae rápidamente en los primeros 1000 pasos.
- Se estabiliza después de 5000 pasos.
- Si la pérdida no disminuye: revisa `modality.json`, las dimensiones de los datos y las anotaciones de lenguaje.

### Registros locales

```bash
tail -f ${OUTPUT_DIR}/logs/*.log
```

O bien visualiza el panel de W&B en modo offline/online.

</section>

## 21.7 Guardado de checkpoints

<section id="checkpoints" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>21.7 Guardado de checkpoints</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-08.png" alt="Guardado de checkpoints" />
</div>

Durante el entrenamiento, los checkpoints se guardan en:

```text
outputs/train/<REPO_ID>/
├── checkpoints/
│   ├── 005000/
│   │   └── pretrained_model/
│   ├── 010000/
│   ├── 015000/
│   ├── 020000/
│   └── last/
│       └── pretrained_model/    ← latest weights, use this for inference
└── logs/
```

### Inferencia con un checkpoint específico

```text
--policy.path=outputs/train/${REPO_ID}/checkpoints/010000/pretrained_model
```

### Subida al Hub

Si `--policy.push_to_hub=true`, la subida ocurre automáticamente al final del entrenamiento. Subida manual:

```bash
huggingface-cli upload ${REPO_ID} \
  outputs/train/${REPO_ID}/checkpoints/last/pretrained_model
```

</section>

## 21.8 Inferencia y evaluación en robot real

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Inferencia</span>
    <h2>21.8 Inferencia y evaluación en robot real</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-09.png" alt="Inferencia y evaluación en robot real" />
</div>

### Método A: `lerobot-record` con registro de la política (recomendado para principiantes)

Igual que el flujo de evaluación ACT, solo cambia al checkpoint de GR00T. A continuación se usa **B601-RS** como ejemplo; DM reemplaza `type` / `port` / `can_adapter`.

```bash
export HF_USER="your_hf_username"
export MODEL_PATH="${HF_USER}/rebot_groot17_pick_cube"   # Hub or local path

# RS CAN
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up

lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.id=follower1 \
  --robot.can_adapter=socketcan \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="put the black cube on the blue tray" \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=15 \
  --policy.path=${MODEL_PATH} \
  --policy.base_model_path=nvidia/GR00T-N1.7-3B \
  --policy.embodiment_tag=new_embodiment
```

:::warning
Los `front` y `side` en `--robot.cameras` deben coincidir con los nombres de clave del conjunto de datos de entrenamiento.
:::

### Método B: despliegue en tiempo real con `lerobot-rollout` (avanzado)

Adecuado para control en bucle cerrado de baja latencia; admite RTC (Real-Time Chunking):

```bash
export MODEL_PATH="${HF_USER}/rebot_groot17_pick_cube"

lerobot-rollout \
  --strategy.type=base \
  --policy.path=${MODEL_PATH} \
  --policy.base_model_path=nvidia/GR00T-N1.7-3B \
  --policy.embodiment_tag=new_embodiment \
  --policy.chunk_size=40 \
  --policy.n_action_steps=20 \
  --policy.use_relative_actions=true \
  --policy.relative_exclude_joints='["gripper"]' \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.id=follower1 \
  --robot.can_adapter=socketcan \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --task="put the black cube on the blue tray" \
  --duration=60 \
  --device=cuda \
  --display_data=true \
  --inference.type=rtc \
  --inference.rtc.enabled=true \
  --inference.rtc.execution_horizon=20 \
  --inference.queue_threshold=2
```

Si RTC causa vibraciones, establece `--inference.rtc.enabled=false`. Se recomienda `queue_threshold` en 2-5 (ponerlo en 0 dispara la reinferencia con demasiada frecuencia y tiende a producir vibraciones).

</section>

## 21.9 Preguntas frecuentes de resolución de problemas

<section id="troubleshooting" className="section-card">
  <div className="section-title">
    <span>Resolución de problemas</span>
    <h2>21.9 Preguntas frecuentes de resolución de problemas</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-10.png" alt="Preguntas frecuentes de resolución de problemas" />
</div>

### Error al descargar el modelo

```bash
# Set mirror or proxy and retry
export HF_ENDPOINT=https://hf-mirror.com   # optional
huggingface-cli download nvidia/GR00T-N1.7-3B
huggingface-cli download nvidia/Cosmos-Reason2-2B   # gated; accept terms on HF first
```

### Incompatibilidad de versiones CUDA / PyTorch

```bash
python -c "import torch; print(torch.__version__, torch.cuda.is_available(), torch.version.cuda)"
nvidia-smi
```

Asegúrate de que la versión del driver cumpla los requisitos de CUDA de PyTorch.

### Error al instalar Flash Attention

1. Confirma que `nvcc --version` coincide con la versión de CUDA de PyTorch.
2. Prueba una wheel precompilada: `pip install flash-attn --no-build-isolation`.
3. La serie RTX 50 puede probar: `pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation`.
4. Si aún falla, consulta la [documentación oficial de Isaac GR00T](https://github.com/NVIDIA/Isaac-GR00T).

### La pérdida de entrenamiento es normal pero el robot real se mueve de forma errática

| Posible causa | Investigación |
| :--- | :--- |
| Orden de articulaciones inconsistente | Compara los metadatos del conjunto de datos con `--robot.cameras` / el driver |
| Unidad de ángulo incorrecta | Confirma que deg/rad sean consistentes entre entrenamiento e inferencia |
| Desajuste en el nombre de la clave de la cámara | `front`/`side` alineados con los datos de entrenamiento |
| `embodiment_tag` incorrecto | Debe ser `new_embodiment` |
| Desajuste en la instrucción de lenguaje | El patrón de frase de `--task` coincide con los datos de entrenamiento |
| Acciones relativas no restauradas correctamente | Confirma que `use_relative_actions` coincida entre entrenamiento e inferencia; esto es relativo a la articulación, no al EEF relativo |

### Error `mean is infinity`

Normalmente se debe a que los nombres de clave de la cámara en el momento de la evaluación no coinciden con los del entrenamiento. Revisa los nombres de clave en `--robot.cameras`.

</section>

## 21.10 Sugerencias para mejorar el entrenamiento

<section id="improvements" className="section-card">
  <div className="section-title">
    <span>Mejoras</span>
    <h2>21.10 Sugerencias para mejorar el entrenamiento</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-21/ch21-11.png" alt="Sugerencias para mejorar el entrenamiento" />
</div>

| Dirección | Sugerencia |
| :--- | :--- |
| Volumen de datos | Comienza con 50 episodios para una sola tarea, luego amplía a 100+ |
| Diversidad de datos | Varía las posiciones de los objetos, la iluminación y las poses iniciales |
| Aumento de datos | Mantén `--dataset.image_transforms.enable=true` |
| Pasos | 10k-15k con pocos datos; 20k-30k con más datos |
| Inferencia | Primero prueba `n_action_steps=20` (debe ser ≤ `chunk_size=40` de entrenamiento), luego ajusta RTC |
| Iteración | Recopila datos de los casos fallidos -> fusiona conjuntos de datos -> continúa con el fine-tuning |

</section>

## 21.11 Resumen del capítulo

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>21.11 Resumen del capítulo</h2>
  </div>

- Entorno: `pip install "lerobot[groot,training]"` + Flash Attention + **GPU de 40 GB+ para fine-tuning** (16 GB solo para inferencia).
- Modelo base: `nvidia/GR00T-N1.7-3B` (backbone `Cosmos-Reason2-2B`).
- Entrenamiento: `lerobot-train --policy.type=groot --policy.embodiment_tag=new_embodiment`.
- Configuración clave de reBot: espacio articular + acciones conjuntas relativas opcionales de LeRobot (pinza absoluta) + `chunk_size=40` (alineado con N1.7).
- Variante de modelo: RS usa `seeed_b601_rs_follower` + `can0` + `socketcan`; DM usa `seeed_b601_dm_follower` + `/dev/ttyACM0` + `damiao`.
- Evaluación: `lerobot-record` o `lerobot-rollout`; las cámaras y el lenguaje deben alinearse con el entrenamiento.
- El checkpoint está en `outputs/train/<REPO_ID>/checkpoints/last/pretrained_model`.

Después de completar este capítulo, deberías ser capaz de ejecutar la política VLA en el reBot Arm con instrucciones en lenguaje natural. Si los resultados no son satisfactorios, primero vuelve al Capítulo 20 para comprobar la calidad de los datos, luego aumenta el número de demostraciones y repite el fine-tuning.

</section>

</div>
