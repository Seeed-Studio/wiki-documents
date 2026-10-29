---
description: "Capítulo 20 del curso para principiantes de SO-ARM Physical AI — convierte un dataset LeRobot de la Etapa 3 en un dataset VLA listo para GR00T: anotaciones de lenguaje, meta/modality.json, la etiqueta new_embodiment y la configuración so100_dualcam, verificación de dimensiones y organización multitarea."
title: Capítulo 20 - Preparando el dataset VLA de SO-ARM
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - dataset
  - modality
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_20
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_20/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 4 · Capítulo 20 · Práctica</span>
    <h2>20. Preparando el dataset VLA de SO-ARM</h2>
    <p>
      Capítulo 20 del curso para principiantes de SO-ARM Physical AI — convierte un dataset LeRobot de la Etapa 3 en un dataset VLA listo para GR00T: anotaciones de lenguaje, meta/modality.json, la etiqueta new_embodiment y la configuración so100_dualcam, verificación de dimensiones y organización multitarea.
    </p>
    <div className="hero-actions">
      <a href="#check">Comprobar el dataset</a>
      <a href="#language">Lenguaje</a>
      <a href="#modality">modality.json</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ Sin código · Sin configuración de entorno</span>
    <p className="sensecraft-banner__title">Omite la configuración: ejecuta el reBot Arm y LeRobot desde una sola aplicación</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics es la plataforma sin código de Seeed para el SO-ARM101, reBot Arm 102 + B601-RS y B601-DM. Conecta los brazos, calibra, recopila demostraciones, entrena y ejecuta inferencias desde una interfaz guiada, sin entorno de Python ni terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Flujo de trabajo guiado en 6 pasos</li>
      <li>✅ Entrenamiento en la nube, sin GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir a SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/es/sensecraft_robotics/">Guía de software</a>
  </div>
</div>

<a id="overview"></a>

## 20.1 Requisitos previos

<section id="prerequisites" className="section-card">
  <div className="section-title">
    <span>Requisitos</span>
    <h2>20.1 Requisitos previos</h2>
  </div>

Necesitas:

- Un dataset limpio de la Etapa 3 grabado en el SO-ARM (Capítulos 11-13): dos vistas (`front` + `side`), 50+ episodios, una tarea por episodio, calidad verificada;
- El repositorio [Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) clonado en tu máquina de entrenamiento (el Capítulo 21 instala el entorno completo — este capítulo solo edita archivos del dataset);
- La receta oficial de referencia: [Ajustar GR00T N1.5 en SO101](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning).

:::tip
Tu dataset ACT existente es la materia prima — GR00T reutiliza los mismos episodios LeRobot. Este capítulo solo añade los metadatos de lenguaje y modalidad.
:::

</section>

## 20.2 Comprobar el dataset LeRobot

<section id="check" className="section-card">
  <div className="section-title">
    <span>Comprobación</span>
    <h2>20.2 Comprobar el dataset LeRobot</h2>
  </div>

### Estructura del directorio

```text
~/.cache/huggingface/lerobot/seeedstudio123/test/
├── meta/
│   ├── info.json        ← fps, características, claves de cámara
│   ├── tasks.jsonl      ← descripciones de tarea (¡editar aquí!)
│   ├── episodes/...     ← metadatos por episodio
│   └── stats/...        ← estadísticas de normalización
├── data/                ← fotogramas parquet
└── videos/              ← flujos de cámara
```

### Comprobación rápida con Python

```python
from lerobot.common.datasets.lerobot_dataset import LeRobotDataset

ds = LeRobotDataset("seeedstudio123/test", root="~/.cache/huggingface/lerobot")
print(ds.meta.info)          # fps, características
print(ds[0]["observation.state"].shape)   # esperado torch.Size([6])
print(ds[0]["action"].shape)              # esperado torch.Size([6])
```

### Lista de comprobación

- [ ] `observation.state` y `action` de 6 dimensiones (5 articulaciones + pinza);
- [ ] Exactamente dos características de imagen, p. ej. `observation.images.front` / `observation.images.side`;
- [ ] Cada episodio pertenece a una tarea con descripción significativa;
- [ ] Sin episodios rotos conocidos (limpieza del Capítulo 13).

</section>

## 20.3 Añadir descripciones de tarea en lenguaje

<section id="language" className="section-card">
  <div className="section-title">
    <span>Lenguaje</span>
    <h2>20.3 Añadir descripciones de tarea en lenguaje</h2>
  </div>

### Método A: escribir al grabar (recomendado)

Si grabas un dataset **nuevo** para la Etapa 4, liga la instrucción al grabar con el mismo `--dataset.single_task` que ya usas:

```bash
--dataset.single_task="Pick up the block at point A and place it at point B"
```

Una tarea = una frase corta que empieza por verbo — fluye automáticamente a los metadatos.

### Método B: rellenar `meta/tasks.jsonl`

Para un dataset existente, edita `meta/tasks.jsonl` para que cada índice mapee a una instrucción correcta. Mantén el mapeo estable: el modelo aprenderá esas cadenas exactas.

### Directrices de anotación

1. Una tarea = una frase fija; nunca dos redacciones para la misma;
2. Empezar por verbo y ser concreto: "Pon el bloque en la caja" mejor que "manejo del bloque";
3. Chino o inglés ambos valen — el VLM de GR00T entiende ambos — pero no mezcles idiomas dentro de una tarea.

</section>

## 20.4 Crear meta/modality.json

<section id="modality" className="section-card">
  <div className="section-title">
    <span>Modalidad</span>
    <h2>20.4 Crear meta/modality.json</h2>
  </div>

`modality.json` dice a GR00T qué campos del dataset alimentan qué entradas del modelo. El montaje estándar de dos cámaras del SO-ARM corresponde a la configuración oficial **`so100_dualcam`**; el equivalente mínimo para un dataset local:

```json
{
    "state": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "action": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "video": {
        "front": "observation.images.front",
        "side": "observation.images.side"
    },
    "annotation": {
        "human.task_description": "task_description"
    }
}
```

### Descripción de campos

| Campo | Significado |
| :--- | :--- |
| `state.single_arm` | Corte `[inicio, fin)` de `observation.state` para las 5 articulaciones |
| `state.gripper` | Corte de la pinza |
| `action.*` | Los mismos cortes en el vector `action` |
| `video` | Clave de cámara → característica del dataset (debe coincidir letra por letra con lo grabado) |
| `annotation.human.task_description` | De dónde viene la instrucción (clave recomendada del Capítulo 18) |

:::note
La configuración `so100_dualcam` del repositorio Isaac-GR00T es la versión canónica de este archivo — si tu montaje coincide con el estándar (dos cámaras, estado/acción de 6), es mejor pasar `--data-config so100_dualcam` al entrenar que mantener una copia a mano.
:::

</section>

## 20.5 Fijar la etiqueta de embodiment

<section id="embodiment-tag" className="section-card">
  <div className="section-title">
    <span>Embodiment</span>
    <h2>20.5 Fijar la etiqueta de embodiment</h2>
  </div>

El SO-ARM se ajusta como embodiment nuevo: etiqueta **`new_embodiment`**. Rara vez se escribe en el dataset mismo — es un argumento de entrenamiento/inferencia (Capítulo 21: `--embodiment-tag new_embodiment` en el servicio; la receta SO101 lo fija al entrenar).

Lo que importa a nivel de dataset es que la **configuración de datos coincida con la realidad**: dos cámaras y estado/acción de 6, verificado en 20.2.

</section>

## 20.6 Verificar orden de articulaciones y dimensiones

<section id="dimensions" className="section-card">
  <div className="section-title">
    <span>Verificación</span>
    <h2>20.6 Verificar orden de articulaciones y dimensiones</h2>
  </div>

### Paso 1: imprimir los metadatos

Confirma la lista de características y dimensiones (ver 20.2): 6/6 para estado/acción, dos características de imagen.

### Paso 2: verificar los cortes de modalidad

Si escribiste un `modality.json` propio, los cortes deben cubrir exactamente `[0,6)`, sin huecos ni solapes.

### Paso 3: visualizar

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

Comprueba: imágenes de las cámaras correctas, la pinza abre/cierra al agarrar, las articulaciones se mueven en orden plausible.

### Paso 4: comprobación estadística

`meta/stats`: los mínimos/máximos de estado dentro del rango calibrado; el brillo medio de las imágenes lejos de 0 o 255 (grabaciones negras o quemadas).

</section>

## 20.7 Organización multitarea

<section id="multi-task" className="section-card">
  <div className="section-title">
    <span>Multitarea</span>
    <h2>20.7 Organización multitarea</h2>
  </div>

### Método A: mismo repo_id, varios task_index (recomendado)

Graba varias tareas en un dataset; cada episodio guarda su `task_index`, y `tasks.jsonl` mapea cada índice a su instrucción. Es la forma natural del ajuste condicionado al lenguaje.

### Método B: fusionar varios datasets

Fusiona datasets por tarea con el kit del Capítulo 13 (`--operation.type merge`). Requisitos: configuración de cámara idéntica, disposición robot/características idéntica y **frases de tarea distintas y consistentes** por fuente.

### Volúmenes recomendados

| Montaje | Episodios | Notas |
| :--- | :--- | :--- |
| Tarea única, A→B fijo | ~50 | Validar el ajuste |
| Tarea única, posiciones variadas | 50-100 | El volumen por defecto de la Etapa 3 |
| Multitarea (3-5 tareas) | 50-100 **por tarea** | El condicionamiento necesita cobertura por tarea |

</section>

## 20.8 Lista de comprobación de calidad

<section id="quality-checklist" className="section-card">
  <div className="section-title">
    <span>Lista</span>
    <h2>20.8 Lista de comprobación de calidad</h2>
  </div>

- [ ] Cada episodio con una instrucción correcta y única;
- [ ] Claves de cámara de `modality.json` idénticas carácter a carácter a las del dataset;
- [ ] `state` / `action` de 6 dimensiones y cortes correctos (`single_arm` / `gripper`);
- [ ] Episodios fallidos y atípicos borrados (Capítulo 13);
- [ ] Estadísticas presentes (`meta/stats`) — nunca entrenes con una sesión matada a mitad;
- [ ] Copia de seguridad del dataset final antes de que el Capítulo 21 toque nada.

Dataset listo — el próximo capítulo ajusta GR00T sobre él.

</section>

</div>
