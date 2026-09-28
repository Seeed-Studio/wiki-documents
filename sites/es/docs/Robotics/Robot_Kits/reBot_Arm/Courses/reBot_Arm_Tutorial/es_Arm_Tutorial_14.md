---
description: "Capítulo 14 del Curso para Principiantes en IA Física de Seeed — estructura del dataset e inspección de calidad: qué se almacena realmente en disco, los cuatro estándares de calidad, reproducción e inspección de imágenes, y qué hacer cuando se encuentran problemas."
title: Capítulo 14 - Estructura del Dataset e Inspección de Calidad
keywords:
  - reBot
  - LeRobot
  - Dataset
  - Inspección de Calidad
  - Parquet
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_14
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_14/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 14 · Teoría y Práctica</span>
    <h2>14. Estructura del Dataset e Inspección de Calidad</h2>
    <p>
      Capítulo 14 del Curso para Principiantes en IA Física de Seeed: qué se almacena realmente en
      disco, los cuatro estándares de calidad, reproducción e inspección de imágenes, y qué hacer cuando se
      encuentran problemas.
    </p>
    <div className="hero-actions">
      <a href="#structure">Estructura</a>
      <a href="#quality">Calidad</a>
      <a href="#fix">Correcciones</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>14.1 Estructura del Dataset: Qué se Almacena Realmente en Disco</span>
    <span>14.2 Qué se Considera Datos "Buenos": Cuatro Estándares de Calidad</span>
    <span>14.3 Reproducción e Inspección de Imágenes</span>
    <span>14.4 Qué Hacer Cuando se Encuentran Problemas</span>
  </div>
</section>

<RebotCourseNav />

## 14.1 Estructura del Dataset: Qué se Almacena Realmente en Disco

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estructura</span>
    <h2>14.1 Estructura del Dataset: Qué se Almacena Realmente en Disco</h2>
  </div>

El dataset grabado en el Capítulo 13, `seeed_rebot_b601_rs/test`, se ve así en disco:

```text
~/.cache/huggingface/lerobot/seeed_rebot_b601_rs/test/
├── data/
│   └── chunk-000/
│       └── file-000.parquet          ← All numeric frames (state / action / timestamps)
├── videos/
│   ├── observation.images.front/
│   │   └── chunk-000/
│   │       └── file-000.mp4          ← Overhead camera: 50 videos concatenated
│   └── observation.images.wrist/
│       └── chunk-000/
│           └── file-000.mp4          ← Wrist camera: same
└── meta/
    ├── info.json                     ← Info: version, fps, total frames, feature definitions
    ├── stats.json                    ← Stats: mean/variance/extremes per feature
    ├── tasks.parquet                 ← Task description table
    └── episodes/
        └── chunk-000/
            └── file-000.parquet      ← Profile card for each Episode
```

**Tres formatos de almacenamiento, cada uno para un tipo de datos:**

| Formato | Qué Almacena | Por Qué |
| :--- | :--- | :--- |
| Vídeo MP4 | Todos los fotogramas de imagen de ambas cámaras | Las imágenes ocupan >90% del tamaño del dataset; la compresión de vídeo ahorra de 1 a 2 órdenes de magnitud frente a imágenes por fotograma. |
| Tabla Parquet | Valores numéricos por fotograma: estado, acción, marcas de tiempo, índices | Almacenamiento columnar; leer "todos los valores de la articulación 3" no requiere cargar el archivo completo. |
| Metainformación | Definiciones de estructura, estadísticas, tareas, índice de episodios | Los cargadores y programas de entrenamiento leen esto primero para saber cómo interpretar los otros dos. |

</section>

## 14.2 Qué se Considera Datos "Buenos": Cuatro Estándares de Calidad

<section id="quality" className="section-card">
  <div className="section-title">
    <span>Calidad</span>
    <h2>14.2 Qué se Considera Datos "Buenos": Cuatro Estándares de Calidad</h2>
  </div>

Para juzgar si un dataset está listo para el entrenamiento, mira cuatro dimensiones:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-14/ch14-01.png" alt="Cuatro estándares de calidad" />
</div>

</section>

## 14.3 Reproducción e Inspección de Imágenes

<section id="inspection" className="section-card">
  <div className="section-title">
    <span>Inspección</span>
    <h2>14.3 Reproducción e Inspección de Imágenes</h2>
  </div>

Para la reproducción de visualización usa `lerobot-dataset-viz`; para la reproducción en robot real usa `lerobot-replay`. Para la reproducción en robot real, usa **el Episodio 0, uno en medio y el último**: el primero comprueba la corrección del flujo de trabajo, el del medio comprueba la deriva de estado, el último revela más fácilmente la disminución de calidad relacionada con la fatiga.

Durante la reproducción, comprueba según estos criterios:

- Ambas señales de cámara presentes; sin pantallas negras, artefactos ni flujos congelados.
- Imágenes claras y bien expuestas; el bloque y la pinza siempre visibles.
- Acciones sincronizadas con las imágenes: en el momento en que la pinza se cierra, debería estar tocando el bloque.
- Comienza en la postura inicial estándar y termina cumpliendo las condiciones finales.

</section>

## 14.4 Qué Hacer Cuando se Encuentran Problemas

<section id="fix" className="section-card">
  <div className="section-title">
    <span>Correcciones</span>
    <h2>14.4 Qué Hacer Cuando se Encuentran Problemas: Borrar, Complementar o Volver a Grabar Todo el Conjunto</h2>
  </div>

Tres caminos cuando se encuentran problemas:

- **Unos pocos Episodios malos** (por ejemplo, los Episodios 3 y 17 están borrosos) → borra esos 2 y luego graba 2 más.
- **Problemas en todo el lote** (por ejemplo, la mitad tiene iluminación cambiada, todo el lote tiene desincronización de audio y vídeo) → no lo remiendes, vuelve a grabar todo el conjunto. Un dataset armado a retazos perjudica más al modelo que tener menos datos.

Dos hechos sobre el borrado: después de borrar, la herramienta **reconstruye** automáticamente el dataset: los episodios se renumeran consecutivamente, `stats.json` se recalcula; no necesitas corregir nada manualmente. Ya sea borrando o complementando, la herramienta regenera la metainformación.

</section>

</div>
