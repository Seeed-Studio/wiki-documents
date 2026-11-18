---
description: "Capítulo 13 del curso Sim-to-Real VLA de SO-ARM101 (opcional) — aumento de datasets: genera escenas nuevas a partir de episodios grabados con NVIDIA Cosmos Transfer y cómelos al co-entrenamiento."
title: Capítulo 13 - Aumento de datasets (opcional)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Cosmos Transfer
  - Aumento de datos
  - Co-entrenamiento
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_13
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 13 · Opcional · Aumento</span>
    <h2>13. Aumento de datasets</h2>
    <p>
      Los datos reales son caros y estrechos. Usa NVIDIA Cosmos Transfer
      para re-renderizar episodios grabados en escenas nuevas conservando
      el movimiento del robot — y entrena con el dataset ampliado.
    </p>
    <div className="hero-actions">
      <a href="#why">Por qué aumentar</a>
      <a href="#cosmos">Cosmos Transfer</a>
      <a href="#setup">Entorno</a>
      <a href="#data">Preparar datos</a>
      <a href="#inference">Inferencia</a>
      <a href="#integration">Integración</a>
    </div>
  </div>
</section>

:::note Este capítulo es material opcional avanzado
Se recomienda completar antes el bucle real (recopilar → entrenar →
evaluar, capítulos 9–11). El flujo sirve tanto para el dataset real del
capítulo 9 como para el simulado del capítulo 12.
:::

## 13.1 Por qué aumentar

<section id="why" className="section-card">
  <div className="section-title">
    <span>Límites de los datos reales</span>
    <h2>13.1 Por qué aumentar</h2>
  </div>

Recopilar datos en escenarios reales tiene costes y limitaciones
importantes:

- **Entornos limitados**: normalmente se graba en pocos escenarios fijos;
- **Sobreajuste al fondo**: las redes pueden aprender rasgos irrelevantes
  de la tarea (color de pared, iluminación, disposición) y fallar al
  generalizar;
- **Coste alto de recolección**: cada escena extra exige re-desplegar,
  re-calibrar y volver a grabar.

Usamos el modelo generativo Cosmos Transfer para modificar las escenas de
vídeo y ampliar la diversidad del dataset, mejorando la robustez del
modelo.

</section>

## 13.2 Cómo funciona Cosmos Transfer

<section id="cosmos" className="section-card">
  <div className="section-title">
    <span>Vídeo a vídeo</span>
    <h2>13.2 Cómo funciona Cosmos Transfer</h2>
  </div>

**NVIDIA Cosmos** es una plataforma de IA básica para acelerar el
desarrollo de IA física (robótica y vehículos autónomos). Cosmos Transfer
es un modelo generativo **de vídeo a vídeo**. Recibe tres entradas:

| Entrada | Propósito | Ejemplo |
|---|---|---|
| Vídeo fuente (vision) | Aporta la dinámica temporal | Vídeo de manipulación de la cámara externa SO-101 |
| Señales de control | Restringe la estructura espacial, conserva la morfología | Mapa de bordes Canny + segmentación SAM2 |
| Prompt de texto | Describe el aspecto de la escena destino | "A modern laboratory with white lab benches..." |

Las señales de control (bordes + segmentación) fijan la forma y el
movimiento del robot; el prompt de texto define el nuevo fondo.

| Tipo de control | Propósito | ¿Cómputo previo? |
|---|---|---|
| Edge | Conserva contornos, evita deformar el sujeto | Opcional (Canny automático) |
| Segmentation | Conserva regiones semánticas (robot/objeto/fondo) | Requerido (SAM2) |
| Blur | Conserva el layout global, permite variar textura | Opcional |
| Depth | Conserva relaciones de profundidad | Requerido (DepthAnything) |

:::tip Las etiquetas de acción se conservan
Transfer mantiene la trayectoria del robot, así que las acciones originales
(ángulos articulares, estado de pinza) sirven tal cual para los vídeos
aumentados. El peso alto de bordes (0,9) es lo que hace segura esa
reutilización.
:::

</section>

## 13.3 Montar el entorno

<section id="setup" className="section-card">
  <div className="section-title">
    <span>GPU e instalación</span>
    <h2>13.3 Montar el entorno</h2>
  </div>

Requisitos de hardware:

| Modelo | VRAM mínima | GPU recomendada |
|---|---|---|
| Cosmos-Nano | ~24 GB | Una RTX 4090 / A5000 / Jetson AGX Thor |
| Cosmos-Super | ~80 GB × 4 | 4× A100 / H100 |

Instalación:

```bash
# Clona el repositorio de Cosmos
git clone https://github.com/NVIDIA/Cosmos.git
cd Cosmos

# Entra al directorio del framework
cd packages/cosmos3

# Crea un entorno virtual
uv venv --python 3.13
source .venv/bin/activate

# Instala dependencias
uv pip install -e ".[inference]"

# Inicia sesión en Hugging Face y descarga los pesos
huggingface-cli login
hf download nvidia/Cosmos-Nano --local-dir /path/to/models/Cosmos-Nano
```

</section>

## 13.4 Preparar tus datos

<section id="data" className="section-card">
  <div className="section-title">
    <span>Controles y prompts</span>
    <h2>13.4 Preparar tus datos</h2>
  </div>

Estructura de directorios:

```text
your_project/
├── controls/
│   └── episode_000/
│       ├── vision.mp4                # Vídeo fuente (grabación del robot)
│       ├── control_edge.mp4           # Mapa de bordes Canny
│       └── control_seg.mp4            # Segmentación SAM2
├── prompts/
│   ├── lab_prompt.json               # Prompt de escena destino
│   └── workshop_prompt.json
├── specs/
│   └── my_lab.json                   # Configuración de inferencia
├── negative_prompt.json
└── outputs/
```

Extrae un clip de tu dataset SO-101 (el flujo cenital `external` es el que
mejor estructura da para el aumento):

```bash
ffmpeg -i ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos/chunk-000/observation.images.external/episode_000000.mp4 \
  -c copy your_project/controls/episode_000/vision.mp4
```

Genera la señal de bordes:

```python
python -c "
import cv2
cap = cv2.VideoCapture('your_project/controls/episode_000/vision.mp4')
fps = cap.get(cv2.CAP_PROP_FPS)
w, h = int(cap.get(3)), int(cap.get(4))
out = cv2.VideoWriter('your_project/controls/episode_000/control_edge.mp4',
                      cv2.VideoWriter_fourcc(*'avc1'), fps, (w, h), True)
while True:
    ret, frame = cap.read()
    if not ret: break
    edges = cv2.Canny(cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY), 50, 150)
    out.write(cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR))
cap.release(); out.release()
print('edge control done')
"
```

Genera la segmentación con SAM2 (instalación aparte):

```bash
pip install sam2
python your_sam2_script.py \
  --input your_project/controls/episode_000/vision.mp4 \
  --output your_project/controls/episode_000/control_seg.mp4
```

Escribe el prompt de escena, por ejemplo `prompts/lab_prompt.json`:

```json
{
  "subjects": [{
    "description": "A white SO-ARM101 robotic arm performing a tabletop pick-and-place task",
    "appearance_details": "White 3D-printed links, small two-finger gripper, wrist-mounted camera",
    "action": "pick up a vial and place it into a yellow rack",
    "pose": "Arm reaches toward the vial, gripper closes, the vial lifts and moves to the rack",
    "state_changes": "Gripper transitions from open to closed; the held vial is lifted and placed"
  }],
  "background_setting": "A modern laboratory with white lab benches, soft diffuse lighting, and a plain grey mat",
  "lighting": {
    "description": "Even, diffuse overhead lighting with no hard shadows"
  }
}
```

</section>

## 13.5 Ejecutar la inferencia

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Generar</span>
    <h2>13.5 Ejecutar la inferencia</h2>
  </div>

```bash
cd /path/to/cosmos/packages/cosmos3

export TRANSFER_ROOT="/path/to/your_project"

CUDA_VISIBLE_DEVICES=0 \
  .venv/bin/python -m cosmos_framework.scripts.inference \
    --parallelism-preset=latency \
    -i "$TRANSFER_ROOT/specs/my_lab.json" \
    -o "$TRANSFER_ROOT/outputs/" \
    --checkpoint-path Cosmos-Nano \
    --seed 2026
```

Parámetros de guía (lo que importa es la proporción de pesos; la suma debe
ser ≈ 1,0):

| Parámetro | Recomendado | Efecto |
|---|---|---|
| `guidance` | 3,0 | Fuerza del CFG de texto — cuánto sigue el prompt la escena nueva |
| `control_guidance` | 1,5 | Fuerza del CFG de control — cuán estricto se conserva el movimiento |
| `edge.weight` | 0,75–0,9 | Conserva la estructura del sujeto |
| `seg.weight` | 0,1–0,25 | Consistencia semántica auxiliar |

:::caution Si el robot se deforma
Sube `edge.weight` (0,9 → 0,95), baja `seg.weight` y sube
`control_guidance`. Si el fondo apenas cambia, sube `guidance` y describe
la escena destino con más detalle. En OOM: baja la resolución a `"480"` y
`num_video_frames_per_chunk` a 33.
:::

Generación por lotes: envuelve el comando en un bucle shell sobre tus
directorios de episodios para multiplicar el dataset en varias escenas
destino.

</section>

## 13.6 Integrarlo en el pipeline de entrenamiento

<section id="integration" className="section-card">
  <div className="section-title">
    <span>Volver a GR00T</span>
    <h2>13.6 Integrarlo en el pipeline de entrenamiento</h2>
  </div>

Los vídeos aumentados reutilizan las etiquetas de acción y estado del
episodio original — no hay que re-etiquetar. Para incorporarlos al
entrenamiento:

1. Construye los episodios aumentados como datasets LeRobot (las mismas
   seis columnas articulares, las mismas claves `front`/`external`, la
   misma frase de tarea);
2. Mézclalos con el dataset real como los datos de simulación del
   [capítulo 12](es_Sim2Real_VLA_12.md) — toda fuente con características
   iguales entra en `lerobot-edit-dataset --operation.type=merge`;
3. Convierte el conjunto mezclado a GR00T v2 y entrena como en el
   [capítulo 10](es_Sim2Real_VLA_10.md), ajustando
   `EPISODE_SAMPLING_RATE` / `DS_WEIGHTS_ALPHA` si las fuentes son
   desiguales.

Control de calidad antes de entrenar con datos aumentados: recorre los
fotogramas y confirma que el robot se ve correcto y los fondos creíbles;
después haz una prueba corta de transferencia — entrena brevemente con
datos aumentados y compara la tasa de éxito real frente a una versión
entrenada solo con datos reales.

</section>

## 13.7 Referencias

<section id="references" className="section-card">
  <div className="section-title">
    <span>Enlaces</span>
    <h2>13.7 Referencias</h2>
  </div>

- [Documentación de Cosmos](https://docs.nvidia.com/cosmos)
- [Cosmos Transfer Cookbook](https://github.com/NVIDIA/Cosmos/tree/main/cookbooks/cosmos3/generator/transfer)
- [SO-101 Workshop de NVIDIA — Estrategia 3: aumentar datasets con Cosmos](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/14-strategy3-cosmos.html)

Continúa con el módulo 4: [Capítulo 14 — Preparar tu Jetson](es_Sim2Real_VLA_14.md).

</section>

</div>