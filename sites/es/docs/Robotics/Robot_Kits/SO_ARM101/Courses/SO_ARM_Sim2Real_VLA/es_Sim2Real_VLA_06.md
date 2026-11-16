---
description: "Capítulo 6 del curso Sim-to-Real VLA de SO-ARM101 — Build Your Robot Lab (intro): de la teoría a la ejecución física con consistencia cinemática y visual estricta entre el gemelo digital y el mundo."
title: Capítulo 6 - Build Your Robot Lab (intro)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Laboratorio de robótica
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_6
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 2 · Capítulo 6 · Build Your Robot Lab</span>
    <h2>6. Build Your Robot Lab</h2>
    <p>
      Monta tu hardware, estandariza el entorno de tareas y establece tus
      bucles de control — con consistencia estricta entre el gemelo digital
      y el mundo físico.
    </p>
    <div className="hero-actions">
      <a href="#scope">Alcance</a>
      <a href="#env">Entorno de software</a>
      <a href="#chapters">Capítulos</a>
    </div>
  </div>
</section>

## Alcance del módulo

<section id="scope" className="section-card">
  <div className="section-title">
    <span>De la teoría a la práctica</span>
    <h2>Alcance del módulo</h2>
  </div>

En este módulo aprenderás a pasar de la teoría a la ejecución física:
montar el hardware, estandarizar el entorno de tareas y establecer los
bucles de control. Construir un pipeline de IA encarnada exige
consistencia cinemática y visual estricta entre el gemelo digital
(simulación) y el mundo físico.

En concreto: desembalarás o montarás el **par SO-ARM101**, escribirás los
IDs de servos (solo kit — los preensamblados lo omiten), ejecutarás la
**calibración de articulaciones** crítica para un seguimiento preciso, y
construirás un espacio de trabajo estandarizado con luz controlada — el
estudio — con soportes de cámara y posiciones fijas de objetos que casan
con los activos visuales de Isaac Sim. Por último dominarás la
teleoperación directa de hardware, el modo operativo del que depende la
recolección de datos reales.

</section>

## El entorno de software

<section id="env" className="section-card">
  <div className="section-title">
    <span>Instalar una vez</span>
    <h2>El entorno de software</h2>
  </div>

El módulo asume que el entorno LeRobot está listo. El capítulo 7 lo recorre
paso a paso (uv, Python 3.12, el fork de Seeed con soporte SO-101 y el SDK
de Feetech) y todos los capítulos posteriores lo reutilizan.

Si prefieres que un asistente de IA lo instale, el repositorio del proyecto
incluye una skill de instalación legible por máquinas:

**`skills/install-soarm-env.md`** en
[github.com/yuyoujiang/rebot-arm-dli-isaacsim](https://github.com/yuyoujiang/rebot-arm-dli-isaacsim)

Copia el archivo entero a tu asistente (Claude, ChatGPT, etc.) y pídele que
ejecute los pasos. Contiene cada comando en orden ejecutable, la salida
esperada de cada verificación y una tabla de resolución de problemas
(`scservo_sdk` ausente, permisos de serie, cuelgues de GPU, colisiones de
puerto UDP).

</section>

## Capítulos del módulo

<section id="chapters" className="section-card">
  <div className="section-title">
    <span>Dos capítulos</span>
    <h2>Capítulos del módulo</h2>
  </div>

1. [Capítulo 7 — Preparar el brazo robótico](es_Sim2Real_VLA_07.md): IDs
   de servos, calibración y primera teleoperación;
2. [Capítulo 8 — Construir el espacio de trabajo](es_Sim2Real_VLA_08.md):
   lightbox, soportes de cámara, posiciones de objetos y cámaras.

</section>

</div>