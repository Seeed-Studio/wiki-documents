---
description: "Capítulo 1 del curso Sim-to-Real VLA de SO-ARM101 — resumen del curso: el plan práctico de Seeed × NVIDIA desde demostraciones robóticas y simulación hasta el post-entrenamiento VLA y el despliegue real."
title: Capítulo 1 - Resumen del curso
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Physical AI
  - Sim-to-Real
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_1
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 1 · Capítulo 1 · Overview</span>
    <h2>1. Resumen del curso</h2>
    <p>
      Seeed Studio colabora con NVIDIA en un plan de estudios práctico para
      desarrolladores: de las demostraciones robóticas y la simulación al
      post-entrenamiento VLA y el despliegue en el mundo real — construido
      aquí sobre el SO-ARM101.
    </p>
    <div className="hero-actions">
      <a href="#workflow">Flujo de trabajo</a>
      <a href="#task">La tarea</a>
      <a href="#platform">Plataforma</a>
    </div>
  </div>
</section>

## El flujo de trabajo del curso

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>De extremo a extremo</span>
    <h2>El flujo de trabajo del curso</h2>
  </div>

Este curso se centra en el flujo de desarrollo completo del brazo
SO-ARM101: recorre la configuración del hardware, la recolección de datos,
el entrenamiento del modelo, la validación en simulación y, por último, el
despliegue y la inferencia en el brazo real y en dispositivos Jetson.
Combinando LeRobot, NVIDIA Isaac Sim, Isaac GR00T N1.7 y Jetson, el curso
monta un entorno experimental completo para el aprendizaje por robots y la
IA encarnada.

Al terminar entenderás cómo:

- recopilar datos del brazo mediante teleoperación líder-seguidor;
- entrenar una política Vision-Language-Action con Isaac GR00T N1.7 sobre
  esos datos;
- escalar con episodios simulados y aumento de datos;
- evaluar el modelo entrenado en el mundo real;
- desplegarlo en un Jetson y ejecutar la tarea en el borde.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM101" />
</div>

</section>

## La tarea de demostración

<section id="task" className="section-card">
  <div className="section-title">
    <span>Viales al rack</span>
    <h2>La tarea de demostración</h2>
  </div>

Como demostración, el curso usa una tarea simple de pick-and-place:
**colocar los tres viales en el rack de viales**. El SO-101 Workshop de
NVIDIA usa la misma tarea, así que tu dataset sigue siendo compatible con
los datasets y checkpoints de referencia de NVIDIA.

Puedes ajustar la tarea a tu propio entorno — el pipeline (recopilar →
entrenar → desplegar → evaluar) no cambia.

</section>

## Qué enfatiza este curso

<section id="platform" className="section-card">
  <div className="section-title">
    <span>Plataforma reproducible</span>
    <h2>Qué enfatiza este curso</h2>
  </div>

El curso no se limita a entrenar y ejecutar un modelo: enfatiza construir
una plataforma experimental robótica **reproducible y extensible**:

- un esquema fijo de dataset (seis dimensiones de articulaciones, dos
  cámaras, una frase de tarea) que funciona sin cambios en el robot real,
  Isaac Sim y Jetson;
- comandos verificados de extremo a extremo en el SO-ARM101;
- las mismas herramientas que el curso DLI de reBot, para moverse entre
  ambos brazos sin reaprender el pipeline.

Siguiente: [Capítulo 2 — LeRobot: contexto y comunidad](es_Sim2Real_VLA_02.md).

</section>

</div>