---
description: 'Capítulo 20 del Curso de Introducción a la IA Física de Seeed: preparación del conjunto de datos reBot VLA: requisitos previos, comprobación del conjunto de datos de LeRobot, añadido de descripciones de tareas en lenguaje natural, configuración de las claves de estado/acción/cámara, creación de meta/modality.json, establecimiento de la etiqueta de embodiment, verificación del orden de las articulaciones y las dimensiones, y organización multi‑tarea.'
title: Capítulo 20 - Preparación del conjunto de datos reBot VLA
keywords:
  - reBot
  - GR00T
  - VLA
  - LeRobot
  - Dataset
  - modality
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_20
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-24
  author: ZhuYaoHui
createdAt: '2026-09-24'
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_20/
---

import '/src/css/rebot-wiki-style.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 4 · Capítulo 20 · Práctica</span>
    <h2>20. Preparación del conjunto de datos reBot VLA</h2>
    <p>
      Capítulo 20 del Curso de Introducción a la IA Física de Seeed: requisitos previos, comprobación del
      conjunto de datos de LeRobot, añadido de descripciones de tareas en lenguaje natural, configuración de las claves de estado/acción/cámara,
      creación de meta/modality.json, establecimiento de la etiqueta de embodiment, verificación del orden de las articulaciones y las dimensiones,
      y organización multi‑tarea.
    </p>
    <div className="hero-actions">
      <a href="#comprobar-conjunto-de-datos">Comprobar conjunto de datos</a>
      <a href="#modality-json">modality.json</a>
      <a href="#lista-de-comprobación">Lista de comprobación</a>
    </div>
  </div>
</section>

<section className="section-card">
  <p>GR00T utiliza el <strong>formato LeRobotDataset v2/v3</strong> en LeRobot y, además, requiere <code>meta/modality.json</code> para describir la división semántica de estado, acción, vídeo y anotación. Este capítulo asume que ya has recopilado datos ACT en el reBot Arm mediante <code>lerobot-record</code>; a continuación lo actualizaremos a datos de entrenamiento VLA.</p>

  <div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-01.png" alt="Preparación del conjunto de datos reBot VLA" />
  </div>
</section>

## 20.1 Requisitos previos

<section id="prerequisites" className="section-card">
  <div className="section-title">
    <span>Requisitos previos</span>
    <h2>20.1 Requisitos previos</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-02.png" alt="Requisitos previos" />
</div>

| Elemento | Requisito |
| :--- | :--- |
| Hardware | reBot Arm **B601-RS o B601-DM** calibrado (ver tabla inferior) |
| Software | LeRobot instalado; se recomienda `pip install "lerobot[groot,training]"` |
| Datos | Al menos **50** demostraciones satisfactorias para una tarea; para multi‑tarea, ≥ 30 por tarea |
| Cámara | Entrenamiento e inferencia usan los **mismos nombres de clave, resolución y número de cámaras** |

**Referencia de variantes de modelo** (solo cambia estos tres en todos los `lerobot-record` / `lerobot-rollout` posteriores):

| Versión | `robot.type` | `robot.port` | `robot.can_adapter` | Wiki |
| :--- | :--- | :--- | :--- | :--- |
| B601-RS | `seeed_b601_rs_follower` | `can0` | `socketcan` | [Primeros pasos con LeRobot](https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_lerobot/) |
| B601-DM | `seeed_b601_dm_follower` | `/dev/ttyACM0` | `damiao` | [Primeros pasos con LeRobot](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/) |

Antes de usar RS, configura CAN: `sudo ip link set can0 type can bitrate 1000000 && sudo ip link set can0 up`. El lado de teleoperación es siempre `rebot_arm_102_leader`, normalmente en el puerto `/dev/ttyUSB0`.

Documentos de referencia:

- [Instalación de LeRobot](https://huggingface.co/docs/lerobot/main/en/installation)
- [Tutorial de LeRobot para reBot B601-RS](https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_lerobot/)
- [Tutorial de LeRobot para reBot B601-DM](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/)
- [Preparación de datos de GR00T](https://nvidia-isaac-gr00t.mintlify.app/guides/data-preparation)

</section>

## 20.2 Comprobación del conjunto de datos de LeRobot

<section id="check-dataset" className="section-card">
  <div className="section-title">
    <span>Comprobar conjunto de datos</span>
    <h2>20.2 Comprobación del conjunto de datos de LeRobot</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-03.png" alt="Comprobación del conjunto de datos de LeRobot" />
</div>

### Estructura del directorio del conjunto de datos

Los conjuntos de datos locales se encuentran por defecto en:

```text
~/.cache/huggingface/lerobot/<repo_id>/
├── data/
│   └── chunk-000/
│       └── episode_*.parquet
├── videos/
│   └── chunk-000/
│       └── observation.images.<camera_name>/
├── meta/
│   ├── info.json
│   ├── episodes.jsonl
│   ├── tasks.jsonl          ← language task descriptions
│   ├── stats.json
│   └── modality.json        ← required by GR00T, create or verify manually
```

### Comprobación rápida con Python

```python
from lerobot.datasets.lerobot_dataset import LeRobotDataset

dataset = LeRobotDataset("seeed_rebot_b601_rs/pick_cube")  # RS example; for DM use seeed_rebot_b601_dm/pick_cube
print(dataset)
print("Feature keys:", dataset.features.keys())
print("Frame 0 state shape:", dataset[0]["observation.state"].shape)
print("Frame 0 action shape:", dataset[0]["action"].shape)
```

### Lista de comprobación requerida

| Elemento a comprobar | Valor esperado (reBot B601-RS / B601-DM brazo único) |
| :--- | :--- |
| Dimensión de `observation.state` | `(7,)` - 6 articulaciones + 1 pinza |
| Dimensión de `action` | `(7,)` - alineada con el estado |
| Claves de vídeo | p. ej. `observation.images.front`, `observation.images.side` |
| FPS | Normalmente 30 |
| `tasks.jsonl` | Cada `task_index` tiene una descripción en lenguaje natural correspondiente |
| Episodios fallidos | Eliminados o marcados para evitar contaminar el entrenamiento |

:::warning
Si el estado/acción no es de 7 dimensiones, la configuración del robot durante la grabación era incorrecta; vuelve a `lerobot-record` para depurar. **No fuerces la edición de `modality.json` para rellenar dimensiones.**
:::

</section>

## 20.3 Añadir descripciones de tareas en lenguaje natural

<section id="language" className="section-card">
  <div className="section-title">
    <span>Lenguaje</span>
    <h2>20.3 Añadir descripciones de tareas en lenguaje natural</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-04.png" alt="Añadir descripciones de tareas en lenguaje natural" />
</div>

El entrenamiento VLA **requiere** condicionamiento por lenguaje. Hay dos formas:

### Método A: Escribir directamente durante la grabación (recomendado)

Cada episodio se graba con `--dataset.single_task`. A continuación se usa **B601-RS** como ejemplo ([Wiki](https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_lerobot/)); los usuarios de DM sustituyen `type` / `port` / `can_adapter` por `seeed_b601_dm_follower`, `/dev/ttyACM0`, `damiao`.

```bash
# RS: bring up CAN first
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up

lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.id=follower1 \
  --robot.can_adapter=socketcan \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --teleop.type=rebot_arm_102_leader \
  --teleop.port=/dev/ttyUSB0 \
  --teleop.id=rebot_arm_102_leader \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/rebot_vla_pick_cube \
  --dataset.num_episodes=50 \
  --dataset.single_task="put the black cube on the blue tray" \
  --dataset.push_to_hub=false \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=20
```

### Método B: Rellenar a posteriori `meta/tasks.jsonl`

Si los datos ACT existentes carecen de lenguaje, edita `meta/tasks.jsonl`:

```text
{"task_index": 0, "task": "put the black cube on the blue tray"}
{"task_index": 1, "task": "put the screwdriver into the toolbox"}
```

En un conjunto de datos multi‑tarea, distintos episodios se asocian a diferentes descripciones mediante el campo `task_index`. Todos los episodios de la misma tarea deben compartir el mismo `task_index`.

### Directrices para la anotación en lenguaje natural

1. **Verbo al principio**, describiendo la acción objetivo: «agarrar...», «colocar...», «empujar...».
2. **Sé específico con los nombres de los objetos:** «cubo negro» es mejor que «objeto».
3. **Mantén los patrones de frase consistentes:** para multi‑tarea, usa la misma plantilla, por ejemplo siempre «poner X sobre Y».
4. **Tanto chino como inglés funcionan**, pero el idioma debe ser coherente entre entrenamiento e inferencia.
5. Evita múltiples formulaciones para un mismo punto de datos (especialmente en las primeras fases de fine‑tuning).

</section>

## 20.4 Configuración de claves de estado y de acción

<section id="state-action-keys" className="section-card">
  <div className="section-title">
    <span>Estado y Acción</span>
    <h2>20.4 Configuración de claves de estado y de acción</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-05.png" alt="Configuración de claves de estado y de acción" />
</div>

El vector de 7 dimensiones del reBot Arm B601-RS / B601-DM se concatena en el siguiente orden de articulaciones (coherente con el driver de LeRobot):

| Índice | Nombre de clave (semántica) | Significado |
| :---: | :--- | :--- |
| 0 | `shoulder_pan` | Rotación del hombro |
| 1 | `shoulder_lift` | Elevación del hombro |
| 2 | `elbow_flex` | Flexión del codo |
| 3 | `wrist_flex` | Flexión de la muñeca |
| 4 | `wrist_yaw` | Guiñada de la muñeca |
| 5 | `wrist_roll` | Giro de la muñeca |
| 6 | `gripper` | Apertura/cierre de la pinza |

En el `modality.json` de GR00T, las 7 dimensiones anteriores se dividen en dos claves semánticas:

- `single_arm`: índices **0-5** (6 articulaciones)
- `gripper`: índice **6** (pinza)

:::note
El corte (slicing) en Python es semiabierto: `"end": 6` significa hasta el índice 5, y `"start": 6, "end": 7` significa el índice 6.
:::

</section>

## 20.5 Configuración de claves de cámara

<section id="camera-keys" className="section-card">
  <div className="section-title">
    <span>Cámara</span>
    <h2>20.5 Configuración de claves de cámara</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-06.png" alt="Configuración de claves de cámara" />
</div>

GR00T asigna las claves de cámara originales del conjunto de datos a nombres de clave estándar mediante el campo `video` de `modality.json`.

### Disposiciones de cámara reBot habituales

| Clave del conjunto de datos (`original_key`) | Clave estándar de modality | Uso recomendado |
| :--- | :--- | :--- |
| `observation.images.front` | `front` | Vista amplia montada en el soporte |
| `observation.images.side` | `side` | Primer plano de la muñeca |

Ejemplo: si las claves de cámara durante la grabación son `front` y `side`:

```json
"video": {
  "front": {
    "original_key": "observation.images.front"
  },
  "side": {
    "original_key": "observation.images.side"
  }
}
```

**Principios clave:**

1. `original_key` debe **coincidir exactamente** con la clave real en el conjunto de datos.
2. Las claves estándar en el lado izquierdo de la modalidad (`front`, `side`) se usarán de forma uniforme durante el entrenamiento y la inferencia.
3. Se puede entrenar con una sola cámara, pero dos cámaras suelen funcionar mejor.
4. La resolución recomendada es uniformemente 640x480, consistente con los parámetros de grabación.

Encuentra el índice de la cámara local:

```bash
lerobot-find-cameras opencv
```

</section>

## 20.6 Creación de meta/modality.json

<section id="modality-json" className="section-card">
  <div className="section-title">
    <span>modality.json</span>
    <h2>20.6 Creación de meta/modality.json</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-07.png" alt="Creación de meta/modality.json" />
</div>

Crea `modality.json` en el directorio `meta/` del conjunto de datos. A continuación se muestra el ejemplo completo para el **espacio articular de 7 dimensiones de un solo brazo reBot Arm B601** (idéntico para RS / DM):

```json
{
  "state": {
    "single_arm": {
      "start": 0,
      "end": 6
    },
    "gripper": {
      "start": 6,
      "end": 7
    }
  },
  "action": {
    "single_arm": {
      "start": 0,
      "end": 6
    },
    "gripper": {
      "start": 6,
      "end": 7
    }
  },
  "video": {
    "front": {
      "original_key": "observation.images.front"
    },
    "side": {
      "original_key": "observation.images.side"
    }
  },
  "annotation": {
    "human.task_description": {
      "original_key": "task_index"
    }
  }
}
```

### Descripción de campos

| Campo | Propósito |
| :--- | :--- |
| `state` / `action` | Definir el rango de índice de cada segmento en el vector concatenado |
| `video` | Mapear las claves de vídeo de LeRobot a los nombres estándar de cámara de GR00T |
| `annotation` | Asociar `task_index` con `tasks.jsonl`. reBot usa `human.task_description`; LIBERO / SimplerEnv usan `human.action.task_description` |

:::warning
Si el conjunto de datos solo tiene una tarea y no tiene el campo `task_index`, primero asegúrate de que `lerobot-record` haya escrito `tasks.jsonl`, de lo contrario GR00T no puede leer la condición de lenguaje.
:::

</section>

## 20.7 Configuración de la etiqueta de embodiment

<section id="embodiment-tag" className="section-card">
  <div className="section-title">
    <span>Etiqueta de embodiment</span>
    <h2>20.7 Configuración de la etiqueta de embodiment</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-08.png" alt="Configuración de la etiqueta de embodiment" />
</div>

Para robots personalizados como el reBot Arm, usa la misma configuración tanto para entrenamiento como para inferencia:

```text
embodiment_tag = new_embodiment
```

Significado:

- Indica a GR00T que use la **capa de proyección new-embodiment**, sin reutilizar las dimensiones de estado/acción preentrenadas del humanoide.
- Parámetro de entrenamiento de LeRobot: `--policy.embodiment_tag=new_embodiment`.
- El checkpoint ajustado guarda la configuración de modalidad correspondiente, que se carga automáticamente en tiempo de inferencia.

:::warning
No uses etiquetas de preentrenamiento como `LIBERO_PANDA`, `DROID`, `SIMPLER_ENV_GOOGLE` en datos de reBot: sus dimensiones y semántica de estado/acción no coinciden con reBot. Tampoco existe una etiqueta oficial llamada `libero_sim`.
:::

</section>

## 20.8 Comprobación del orden de las articulaciones y dimensiones de datos

<section id="verify" className="section-card">
  <div className="section-title">
    <span>Verificar</span>
    <h2>20.8 Comprobación del orden de las articulaciones y dimensiones de datos</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-09.png" alt="Comprobación del orden de las articulaciones y dimensiones de datos" />
</div>

Esta es la causa más común de que "la pérdida de entrenamiento disminuye pero el robot real no se mueve en absoluto". Verifica punto por punto:

### Paso 1: Imprimir meta del conjunto de datos

```python
import json
from pathlib import Path

meta_dir = Path.home() / ".cache/huggingface/lerobot/seeed_rebot_b601_rs/pick_cube/meta"
print(json.dumps(json.loads((meta_dir / "info.json").read_text()), indent=2))
print((meta_dir / "modality.json").read_text())
```

### Paso 2: Verificar el corte de modalidades

```python
import numpy as np
from lerobot.datasets.lerobot_dataset import LeRobotDataset

ds = LeRobotDataset("seeed_rebot_b601_rs/pick_cube")
s = ds[0]["observation.state"].numpy()
mod = json.loads((meta_dir / "modality.json").read_text())

arm = s[mod["state"]["single_arm"]["start"]:mod["state"]["single_arm"]["end"]]
grip = s[mod["state"]["gripper"]["start"]:mod["state"]["gripper"]["end"]]
print("single_arm:", arm.shape)  # expect (6,)
print("gripper:", grip.shape)    # expect (1,)
```

### Paso 3: Visualizar los datos

```bash
lerobot-dataset-viz --repo_id=seeed_rebot_b601_rs/pick_cube --episode-index=0
```

Observa:

- ¿Las imágenes están sincronizadas con el movimiento de las articulaciones?
- ¿La dimensión `gripper` cambia cuando el gripper se abre/cierra?
- ¿La descripción en lenguaje coincide con el contenido visual?

### Paso 4: Comprobaciones estadísticas

```python
print(ds.meta.stats["observation.state"])
print(ds.meta.stats["action"])
```

Si alguna dimensión tiene `min == max` (sin variación), esa articulación no se movió en los datos; considera excluirla del entrenamiento o volver a recolectar.

</section>

## 20.9 Organización de conjuntos de datos multi-tarea

<section id="multi-task" className="section-card">
  <div className="section-title">
    <span>Multi-tarea</span>
    <h2>20.9 Organización de conjuntos de datos multi-tarea</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-10.png" alt="Organización de conjuntos de datos multi-tarea" />
</div>

Para entrenar "un modelo, múltiples tareas de lenguaje", se recomiendan dos enfoques:

### Método A: Mismo repo_id, múltiples task_index (recomendado)

```text
{"task_index": 0, "task": "put the black cube on the blue tray"}
{"task_index": 1, "task": "put the screwdriver into the toolbox"}
{"task_index": 2, "task": "push the red cup to the left side of the table"}
```

Cicla a través de `--dataset.single_task` mientras grabas, o graba por lotes y fusiona en el mismo conjunto de datos.

### Método B: Fusión de múltiples conjuntos de datos

LeRobot admite entrenamiento con múltiples conjuntos de datos (dependiendo de la versión); el enfoque más simple es usar un solo `repo_id` durante la grabación y distinguir tareas mediante `task_index`.

### Recomendaciones de volumen de datos

| Escenario | Recomendación |
| :--- | :--- |
| Inicio de una sola tarea | 50 episodios |
| Una sola tarea estable | 100-200 episodios |
| Multi-tarea (3 tareas) | ≥ 30 episodios cada una |
| Generalización de posición | ≥ 10 episodios por variante de posición |

</section>

## 20.10 Lista de comprobación de calidad de datos

<section id="quality" className="section-card">
  <div className="section-title">
    <span>Lista de comprobación</span>
    <h2>20.10 Lista de comprobación de calidad de datos</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-20/ch20-11.png" alt="Lista de comprobación de calidad de datos" />
</div>

Antes de subir al Hub o iniciar el entrenamiento, confirma:

- [ ] `observation.state` y `action` son ambos float32 de 7 dimensiones
- [ ] `meta/modality.json` existe y el corte de índices es correcto
- [ ] Cada `task_index` en `meta/tasks.jsonl` tiene una descripción no vacía
- [ ] Los nombres de las claves de cámara coinciden entre `modality.json` y el conjunto de datos
- [ ] No hay episodios de desperdicio totalmente en cero / inactivos
- [ ] Cámaras fijas, objetos en vista, iluminación estable
- [ ] Unidades de ángulo unificadas (la API de motor de bajo nivel de reBot usa grados; el driver de LeRobot convierte internamente a radianes; el conjunto de datos y el entrenamiento/inferencia deben mantenerse consistentes)
- [ ] Plan para usar `new_embodiment` para `embodiment_tag`

### Subir a Hugging Face Hub (opcional)

```bash
huggingface-cli login
lerobot-record ... --dataset.push_to_hub=true
# or upload manually
huggingface-cli upload ${HF_USER}/rebot_vla_pick_cube ~/.cache/huggingface/lerobot/seeed_rebot_b601_rs/pick_cube
```

</section>

## 20.11 Resumen del capítulo

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>20.11 Resumen del capítulo</h2>
  </div>

- GR00T necesita datos estándar de LeRobot + **`meta/modality.json`**.
- El vector de 7 dimensiones de reBot se divide en `single_arm`(6) + `gripper`(1); RS / DM tienen las mismas dimensiones, solo difieren los parámetros del driver.
- El lenguaje se conecta mediante `tasks.jsonl` + `annotation.human.task_description`.
- Los nombres de las claves de cámara deben alinearse entre grabación, modalidad e inferencia.
- El siguiente capítulo usa los datos preparados para iniciar `lerobot-train --policy.type=groot`.

</section>

</div>
