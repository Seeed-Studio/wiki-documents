---
description: "Comprende la estructura de video, Parquet y metadatos de LeRobot, y verifica la sincronización temporal, la calidad de imagen y la completitud de las demostraciones."
title: "Cómo validar la calidad del dataset para robótica"
hide_title: true
keywords:
  - Despliegue Práctico
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - Brazo Robótico
  - IA Física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - Hugging Face
  - Brazo
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_dataset_quality
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/hands_on_dataset_quality/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-dataset_quality-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · DESPLIEGUE PRÁCTICO</span>
  <h1 id="hands-on-dataset_quality-title">Cómo validar la calidad del dataset para robótica</h1>
  <p className="paper-reading-lead">Comprende los archivos de video, Parquet y metadatos de LeRobot, luego verifica la sincronización temporal, la calidad de imagen y la completitud de las demostraciones.</p>
  <ul className="paper-reading-badges" aria-label="En esta guía">
    <li>Estructura del dataset</li>
    <li>Sincronización temporal</li>
    <li>Verificaciones de calidad</li>
    <li>Resolución de problemas</li>
  </ul>
</section>

## Estructura del Dataset

**Un dataset grabado como `seed_rebot_b601_rs/test` tiene la siguiente estructura:**

```text
~/.cache/huggingface/lerobot/seed_rebot_b601_rs/test/
├── data/
│   └── chunk-000/
│       └── file-000.parquet          ← Numerical frames: state / action / timestamps
├── videos/
│   ├── observation.images.front/
│   │   └── chunk-000/
│   │       └── file-000.mp4          ← Front camera: concatenated video for 50 episodes
│   └── observation.images.wrist/
│       └── chunk-000/
│           └── file-000.mp4          ← Wrist camera: the same arrangement
└── meta/
    ├── info.json                     ← Version, fps, frame count, and feature definitions
    ├── stats.json                    ← Mean, variance, and extrema for each feature
    ├── tasks.parquet                 ← Task descriptions
    └── episodes/
        └── chunk-000/
            └── file-000.parquet      ← Per-episode records
```

**Tres formatos contienen tres tipos de información:**

| Formato | Contenido | ¿Por qué usarlo? |
|---|---|---|
| Video MP4 | Todos los fotogramas de imagen de ambas cámaras | Las imágenes representan más del 90% del tamaño del dataset; la compresión de video puede ahorrar entre uno y dos órdenes de magnitud en comparación con archivos de imagen individuales. |
| Tablas Parquet | Estado por fotograma, acción, marcas de tiempo e índices | El almacenamiento columnar te permite leer, por ejemplo, todos los valores de la articulación 3 sin cargar la tabla completa. |
| Metadatos | Estructura, estadísticas, tareas e índices de episodios | Los cargadores y programas de entrenamiento leen esto primero para interpretar los demás archivos. |

---

## Marcas de Tiempo y Sincronización

- Las imágenes viajan por USB, mientras que los datos de las articulaciones viajan por CAN, por lo que naturalmente llegan al ordenador en momentos distintos. LeRobot asigna **marcas de tiempo** para alinear imágenes, estados y acciones que representan el mismo instante lógico en una fila.

![Estructura del Dataset y Verificaciones de Calidad: Marcas de Tiempo y Sincronización (Figura 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-01-timestamp-sync-en.png)

---

## Evaluar la Calidad Global del Dataset

Revisa cuatro dimensiones antes de usar un dataset para entrenamiento:

![Estructura del Dataset y Verificaciones de Calidad: Evaluar la Calidad Global del Dataset (Figura 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-02-quality-checklist-en.png)

---

## Reproducir e Inspeccionar Imágenes

Usa `lerobot-dataset-viz` para visualización y `lerobot-replay` para reproducir en el robot, como se describió antes. Inspecciona al menos **el episodio 0, un episodio intermedio y el episodio final**. El primero verifica el flujo de trabajo, el intermedio verifica la deriva y el último a menudo revela pérdida de calidad por fatiga del operador.

Durante la reproducción, verifica que:

- Ambas vistas de cámara estén presentes, sin fotogramas negros, imágenes corruptas ni una secuencia congelada.

- Las imágenes sean nítidas y estén correctamente expuestas, con el bloque y la pinza visibles en todo momento.

- Las acciones y las imágenes estén alineadas: cuando la pinza se cierra, la imagen muestra que está contactando con el bloque.

- El episodio comienza en la postura inicial estándar y termina con la condición de parada satisfecha.

---

## Qué Hacer Cuando Aparecen Problemas

Gestiona los problemas según su alcance:

- **Unos pocos episodios defectuosos**, como imágenes borrosas en los episodios 3 y 17: elimina esos dos y graba dos episodios de reemplazo.

- **Problemas generalizados**, como cambios de iluminación en la mitad de los episodios o un lote completo con video y acciones desalineados: vuelve a grabar el dataset. Un mosaico de correcciones inconsistentes puede ser peor que tener menos datos.

Tras la eliminación, la herramienta reconstruye el dataset automáticamente: los índices de episodios se vuelven consecutivos y `stats.json` se vuelve a calcular. Tanto si eliminas como si añades episodios, las herramientas regeneran los metadatos; no necesitas editarlos manualmente.

---

</div>
