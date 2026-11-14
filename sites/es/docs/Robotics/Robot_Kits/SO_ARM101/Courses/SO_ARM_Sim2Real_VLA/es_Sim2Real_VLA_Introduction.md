---
description: "Curso Sim-to-Real VLA de SO-ARM101 — el plan de estudios práctico estilo DLI de Seeed × NVIDIA, migrado al SO-ARM101: construye tu laboratorio real, recopila datos por teleoperación, ajusta Isaac GR00T N1.7 y despliega en el brazo real y en Jetson, con Isaac Sim y Cosmos como opción."
title: Curso Sim-to-Real VLA de SO-ARM101
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Sim-to-Real
  - Isaac Sim
  - LeRobot
  - Isaac GR00T
  - VLA
  - Teleoperación
  - Physical AI
  - Jetson
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_course
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_course/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot × GR00T × Jetson · Curso avanzado</span>
    <h2>SO-ARM101 Sim-to-Real VLA</h2>
    <p>
      El plan de estudios Sim-to-Real completo de Seeed × NVIDIA, migrado al
      SO-ARM101: construye el laboratorio real, recopila tus propios datos
      por teleoperación, ajusta (fine-tune) una política VLA Isaac GR00T
      N1.7 y despliégala en el brazo físico y en Jetson — con episodios de
      Isaac Sim y aumento de datos como opción.
    </p>
    <div className="hero-actions">
      <a href="#pipeline">Pipeline de aprendizaje</a>
      <a href="#modules">Estructura</a>
      <a href="#prerequisites">Requisitos previos</a>
      <a href="#build">Lo que construirás</a>
    </div>
  </div>
</section>

## Resumen del curso

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>De una mesa vacía a una política desplegada en Jetson</h2>
  </div>

Este curso refleja artículo por artículo el plan de estudios DLI de reBot
y lo adapta al **SO-ARM101 blanco** — la misma plataforma que usa el
SO-101 Workshop de NVIDIA:

1. **Overview y entorno** — por qué Sim-to-Real, qué ofrecen LeRobot y
   GR00T, e instalación y verificación de la pila de software;
2. **Build Your Robot Lab** — monta el par SO-101 (los brazos preensamblados
   omiten la escritura de IDs de servos), calibra ambos brazos y monta el
   estudio: lightbox, soportes, posición del rack y objetos;
3. **Get Your Own VLA Model** — teleopera el par real, graba episodios
   LeRobot v3 de doble cámara, ajusta Isaac GR00T N1.7 y ejecútalo en
   el seguidor físico;
4. **Escala (opcional)** — recopila episodios extra del gemelo digital del
   SO-ARM101 blanco en Isaac Sim, aleatoriza la escena y mezcla con los
   datos reales para co-entrenamiento;
5. **Despliegue en Jetson** — exporta motores TensorRT específicos del
   objetivo en un Jetson AGX Orin o Thor y sirve la política en el borde.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM101" />
</div>

</section>

## Estructura del curso

<section id="modules" className="section-card">
  <div class="section-title">
    <span>Módulos DLI</span>
    <h2>Overview → Build Your Robot Lab → Get Your Own VLA Model → Jetson</h2>
  </div>

| Módulo | Capítulos | Tema |
| --- | --- | --- |
| 1 · Overview | 1–5 | Resumen del curso, LeRobot, Sim-to-Real, SO-ARM101, conclusión |
| 2 · Build Your Robot Lab | 6–8 | Introducción, preparación de los brazos (IDs + calibración), espacio de trabajo |
| 3 · Get Your Own VLA Model | 9–11 | Recolección de datos reales, entrenamiento GR00T N1.7, evaluación real |
| 3+ · Opcional | 12–13 | Datos desde Isaac Sim, aumento de datos con Cosmos |
| 4 · Deploy on Jetson | 14–18 | Preparación del Jetson, hardware, entorno GR00T, activos, inferencia TensorRT |
| 5 · Reference | 19 | Repositorios, productos y documentación |

La ruta del robot real es la línea principal del curso. Isaac Sim aparece
solo como un acelerador opcional, tal como se usa en el
[artículo Sim-to-Real de Seeed × NVIDIA](https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac).

</section>

## Requisitos previos

<section id="prerequisites" className="section-card">
  <div class="section-title">
    <span>Antes de empezar</span>
    <h2>Qué necesitas</h2>
  </div>

| Requisito | Detalle |
| --- | --- |
| GPU de estación | RTX con ≥ 8 GB para los capítulos 9–12; 24 GB+ (clase RTX 5090 / RTX 6000) para el ajuste de GR00T |
| SO | Ubuntu 22.04 o superior |
| Software | Isaac Sim 6.1 (solo capítulo 12), entorno LeRobot (capítulo 7) |
| Robot | Líder y seguidor SO-ARM101 — kit o preensamblado; en rigor solo se necesita el seguidor |
| Cámaras | Dos cámaras USB (muñeca + externa) |
| Dispositivo de borde (módulo 4) | Jetson AGX Orin o AGX Thor con JetPack 7.2 |
| Disco | ~100 GB libres en total |

Si planeas dejar que un asistente de IA instale el entorno, copia el
archivo de skill de instalación del repositorio del proyecto — el
capítulo 6 enlaza a él.

</section>

## Lo que construirás

<section id="build" className="section-card">
  <div class="section-title">
    <span>Resultado</span>
    <h2>Entregables tras los diecinueve capítulos</h2>
  </div>

- Un par líder/seguidor SO-ARM101 calibrado — montado o de fábrica, con
  IDs de servos escritos donde haga falta;
- Un estudio de grabación: lightbox, soportes de cámara rígidos y un rack
  fijado con cinta con las posiciones de los objetos marcadas;
- Un dataset LeRobot v3 del mundo real con secuencias de vídeo de dos
  cámaras;
- Una política Isaac GR00T N1.7 ajustada con tus datos, con conjuntos
  opcionales de co-entrenamiento ampliados con simulación y Cosmos;
- Una política funcionando en bucle cerrado sobre el seguidor físico con
  la pila de evaluación de robots reales de NVIDIA;
- Un paquete de motores TensorRT específico del objetivo y un servidor de
  políticas en Jetson AGX Orin o Thor.

</section>

## Capítulos del curso

<section id="chapters" className="section-card">
  <div class="section-title">
    <span>Índice</span>
    <h2>Diecinueve capítulos en cinco módulos</h2>
  </div>

| # | Capítulo | Módulo |
| --- | --- | --- |
| 1 | Resumen del curso | 1 · Overview |
| 2 | LeRobot: contexto y comunidad | 1 · Overview |
| 3 | ¿Qué es Sim-to-Real? | 1 · Overview |
| 4 | Introducción del SO-ARM101 | 1 · Overview |
| 5 | Conclusión | 1 · Overview |
| 6 | Build Your Robot Lab (intro) | 2 · Build Your Robot Lab |
| 7 | Preparar el brazo robótico | 2 · Build Your Robot Lab |
| 8 | Construir el espacio de trabajo | 2 · Build Your Robot Lab |
| 9 | Recopilar datos del entorno real | 3 · Get Your Own VLA Model |
| 10 | Entrenar la política GR00T N1.7 | 3 · Get Your Own VLA Model |
| 11 | Evaluar en el entorno real | 3 · Get Your Own VLA Model |
| 12 | Recopilar datos de Isaac Sim (opcional) | 3 · Opcional |
| 13 | Aumento de datasets (opcional) | 3 · Opcional |
| 14 | Preparar tu Jetson | 4 · Deploy on Jetson |
| 15 | Conectar el hardware del robot | 4 · Deploy on Jetson |
| 16 | Configurar el entorno GR00T | 4 · Deploy on Jetson |
| 17 | Preparar dataset y activos del modelo | 4 · Deploy on Jetson |
| 18 | Ejecutar inferencia TensorRT de GR00T N1.7 | 4 · Deploy on Jetson |
| 19 | Referencias | 5 · Reference |

Empieza por el capítulo 1, o salta directo al 7 si el software ya está
instalado. Si solo necesitas la parte opcional de simulación, ve
directamente al [capítulo 12](es_Sim2Real_VLA_12.md).

</section>

</div>