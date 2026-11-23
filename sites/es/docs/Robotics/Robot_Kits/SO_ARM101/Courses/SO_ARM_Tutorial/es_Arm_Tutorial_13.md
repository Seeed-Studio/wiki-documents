---
description: "Capítulo 13 del curso para principiantes de SO-ARM Physical AI — el aspecto de un dataset LeRobot en disco, cuatro criterios de calidad, visualización y reproducción, y el kit de herramientas lerobot-edit-dataset para borrar, dividir, fusionar y convertir a video."
title: Capítulo 13 - Estructura del dataset e inspección de calidad
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - dataset
  - visualización
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_13
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 13 · Teoría y práctica</span>
    <h2>13. Estructura del dataset e inspección de calidad</h2>
    <p>
      Capítulo 13 del curso para principiantes de SO-ARM Physical AI — el aspecto de un dataset LeRobot en disco, cuatro criterios de calidad, visualización y reproducción, y el kit de herramientas lerobot-edit-dataset para borrar, dividir, fusionar y convertir a video.
    </p>
    <div className="hero-actions">
      <a href="#structure">Estructura</a>
      <a href="#quality">Calidad</a>
      <a href="#edit">Editar datasets</a>
    </div>
  </div>
</section>

## 13.1 Estructura del dataset: qué hay realmente en disco

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estructura</span>
    <h2>13.1 Estructura del dataset: qué hay realmente en disco</h2>
  </div>

Un dataset local grabado en el Capítulo 12 vive en `~/.cache/huggingface/lerobot/<repo_id>/`:

```text
├── meta/
│   ├── info.json          ← robot, fps, características, claves de cámara
│   ├── episodes/          ← metadatos por episodio
│   ├── stats/             ← estadísticas por característica (¡necesarias para entrenar!)
│   └── tasks/             ← descripciones de tarea
├── data/                  ← fotogramas parquet: observación / estado / acción
└── videos/                ← flujos de cámara codificados (si video=true)
```

Tres hechos que conviene interiorizar:

- **Las claves de cámara son parte del contrato de datos.** `front` y `side` se convierten en `observation.images.front` / `observation.images.side`. Entrenamiento y evaluación deben usar las mismas claves.
- **Las estadísticas se calculan al terminar la grabación.** Por eso no hay que matar una sesión a mitad.
- **La cadena de `single_task` se guarda en `meta/tasks`** — la anotación lingüística de la Etapa 4 se construye exactamente sobre ese campo.

</section>

## 13.2 Qué cuenta como "buenos" datos: cuatro criterios

<section id="quality" className="section-card">
  <div className="section-title">
    <span>Calidad</span>
    <h2>13.2 Qué cuenta como "buenos" datos: cuatro criterios</h2>
  </div>

1. **Integridad**: cada episodio recorre el flujo completo "acercarse → agarrar → transportar → colocar → retraer", sin finales truncados.
2. **Consistencia**: misma estrategia, velocidad y ritmo en todos; cámaras y escena intactas.
3. **Cobertura**: posiciones objetivo repartidas por la cuadrícula, no apiñadas en una esquina.
4. **Limpieza**: sin agarres fallados dentro, sin fotogramas donde el objeto sale del encuadre, sin el líder tapando las cámaras.

</section>

## 13.3 Visualizar y reproducir

<section id="playback" className="section-card">
  <div className="section-title">
    <span>Inspección</span>
    <h2>13.3 Visualizar y reproducir</h2>
  </div>

### Visualizar un dataset

**En línea** — si grabaste con `--dataset.push_to_hub=true`, pega tu repo id en el [visualizador oficial de datasets](https://huggingface.co/spaces/lerobot/visualize_dataset).

**Local** — el mismo visor funciona sin conexión:

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="Visualización del dataset" />
</div>

### Reproducir un episodio en el brazo real

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>
      La reproducción mueve el seguidor real según acciones grabadas. Despeja el espacio y aleja las manos antes de empezar.
    </p>
  </div>
</div>

La función `replay` reproduce cualquier episodio grabado en el brazo real — la mejor comprobación de consistencia y transferibilidad:

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123 \
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \
    --dataset.episode=0
```

`dataset.root` es la ruta física; `repo_id` el nombre definido al recolectar; `episode` es un índice basado en 0. El brazo debería replicar lo grabado — si se desvía mucho, sospecha primero de la deriva de calibración, luego de los datos.

### Qué hacer al encontrar problemas

- **Episodio malo (caída, agarre fallido, obstrucción)**: bórralo — siguiente sección.
- **Problema sistemático (cada episodio agarra distinto)**: problema de diseño de datos — corrige el protocolo y regraba; borrar episodios no ayuda.
- **Estadísticas raras (infinito/NaN en la visualización)**: suele ser un episodio roto; borra y regenera.

</section>

## 13.4 El kit de herramientas: lerobot-edit-dataset

<section id="edit" className="section-card">
  <div className="section-title">
    <span>Edición</span>
    <h2>13.4 El kit de herramientas: lerobot-edit-dataset</h2>
  </div>

Toda la cirugía de datasets se hace con `lerobot-edit-dataset` y el `--operation.type` adecuado.

### Borrar episodios

Borra episodios malos (aquí 0, 2 y 5):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

O guarda el resultado como dataset **nuevo**, preservando el original:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --new_repo_id seeedstudio123/test_clean \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

:::tip
Tras el borrado en el sitio, los datos originales se respaldan en una carpeta `_old` junto al dataset (p. ej. `.../test_old/`). Verificado el nuevo, puedes borrar el respaldo.
:::

### Dividir un dataset

Por fracciones (p. ej. 80% entrenamiento / 10% test / 10% val) — crea `test_train`, `test_test`, `test_val`:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

O por índices explícitos:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

### Fusionar datasets

Combina tandas de varias sesiones (las descripciones de tarea deben coincidir exactamente):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_merged \
    --operation.type merge \
    --operation.repo_ids "['seeedstudio123/test_batch1', 'seeedstudio123/test_batch2']"
```

### Eliminar características

Descarta una cámara que ya no quieres entrenar (p. ej. conserva solo la de muñeca):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.side']"
```

### Convertir imágenes a video

Convierte un dataset de imágenes a formato video — menos almacenamiento y carga más rápida al entrenar:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_image \
    --new_repo_id seeedstudio123/test_video \
    --operation.type convert_image_to_video \
    --operation.vcodec libsvtav1 \
    --operation.pix_fmt yuv420p \
    --operation.g 2 \
    --operation.crf 30
```

Opciones útiles: `--operation.output_dir` (ruta de salida), `--operation.num_workers 8` (codificación paralela), `--operation.max_episodes_per_batch` / `--operation.max_frames_per_batch` (máquinas con poca memoria). El resultado es un LeRobotDataset completo y estándar — videos bajo `videos/`, metadatos preservados.

</section>

## 13.5 FAQ del capítulo

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>13.5 FAQ del capítulo</h2>
  </div>

- **¿Qué repositorio de LeRobot?** El verificado del Capítulo 5: `https://github.com/Seeed-Projects/lerobot.git`. El oficial se actualiza sin parar y puede cambiar versiones de dataset o sintaxis de comandos.
- **La operación parece atascada.** Pulsa Enter para refrescar la salida. El nuevo formato comprimido hace las operaciones lentas — mira la barra de progreso y ten paciencia.
- **Referencia**: [Using dataset tools](https://huggingface.co/docs/lerobot/using_dataset_tools) en la documentación oficial.

</section>

</div>
