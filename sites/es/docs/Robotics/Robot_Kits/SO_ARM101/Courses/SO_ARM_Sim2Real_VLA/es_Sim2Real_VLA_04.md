---
description: "Capítulo 4 del curso Sim-to-Real VLA de SO-ARM101 — introducción del SO-ARM101: un par de brazos de código abierto y bajo coste construido alrededor de servos de bus Feetech STS3215."
title: Capítulo 4 - Introducción del SO-ARM101
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - STS3215
  - Hardware
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_4
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_4/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 1 · Capítulo 4 · Overview</span>
    <h2>4. Introducción del SO-ARM101</h2>
    <p>
      Un par de brazos robóticos de bajo coste y código abierto — líder y
      seguidor — construidos sobre servos de bus Feetech STS3215, pensados
      para bajar la barrera del aprendizaje Sim-to-Real de IA encarnada.
    </p>
    <div className="hero-actions">
      <a href="#intro">Introducción</a>
      <a href="#specs">Especificaciones</a>
      <a href="#overview">Kit o preensamblado</a>
      <a href="#apps">Aplicaciones</a>
      <a href="#resources">Recursos</a>
    </div>
  </div>
</section>

## Introducción

<section id="intro" className="section-card">
  <div className="section-title">
    <span>Abierto de verdad</span>
    <h2>Introducción</h2>
  </div>

El SO-ARM101 es un brazo robótico de bajo coste construido alrededor del
concepto de «verdaderamente open source». Su apariencia y todos los
archivos abiertos — piezas imprimibles en 3D, una lista de materiales
detallada y software compatible con LeRobot y NVIDIA Isaac — están
disponibles gratis para desarrolladores individuales, estudiantes e
instituciones educativas.

El curso usa **un par** de brazos:

- el **líder** es el que mueves con la mano; solo lee ángulos de
  articulaciones y los envía al software;
- el **seguidor** es el que ejecuta; refleja al líder durante la
  teleoperación y más tarde ejecuta la política VLA entrenada.

Como el seguidor es la plataforma que usa el SO-101 Workshop de NVIDIA,
cada dataset que grabes en este curso es directamente compatible con los
datasets, checkpoints y herramientas de evaluación de NVIDIA.

</section>

## Especificaciones de hardware

<section id="specs" className="section-card">
  <div className="section-title">
    <span>12 servos</span>
    <h2>Especificaciones de hardware</h2>
  </div>

| Parámetro | SO-ARM101 |
|---|---|
| Grados de libertad | **6** por brazo (5 articulaciones + pinza) |
| Servos | Feetech STS3215 de bus, 6 por brazo (12 en total) |
| Alimentación del líder | servos de clase 7,4 V con fuente de 5 V |
| Alimentación del seguidor (kit Pro) | fuente de 12 V |
| Control | bus serie, una placa USB por brazo |
| Calibración | `lerobot-calibrate` de LeRobot, convención de punto medio |
| Ecosistemas | LeRobot, NVIDIA Isaac Sim / Isaac GR00T, herramientas Feetech |

Cada articulación va movida por un servo serie STS3215; los seis de un
brazo comparten un bus de tres cables (GND, VCC, DATA) encadenado entre
articulaciones. La relación de reducción varía por articulación — el
seguidor y el hombro del líder usan la alta relación 1:345 donde hace falta
par. La tabla completa está en el
[capítulo 4 del curso para principiantes](https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_4/).

:::caution Reglas de alimentación
La tensión debe coincidir con el tipo de servo: 5 V para las versiones
STS3215 de 7,4 V, 12 V para las de 12 V. El líder siempre usa motores de
7,4 V con fuente de 5 V; en el kit Pro el seguidor usa 12 V. Mezclar las
fuentes quema los servos. El cable USB solo transmite datos — conecta
siempre alimentación y USB.
:::

</section>

## Kit o preensamblado

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Dos formas de comprarlo</span>
    <h2>Kit o preensamblado</h2>
  </div>

- **Versión kit**: incluye servos, placas de control y cables; imprimes
  las piezas estructurales (o las compras impresas) y montas. Los IDs de
  servo se escriben con `lerobot-setup-motors` — lo cubre el capítulo 7;
- **Versión preensamblada**: de fábrica, montada y con los IDs ya
  configurados. Omites por completo el montaje y la escritura de IDs y
  empiezas en la calibración.

Enlaces:

- [Kit Pro SO-ARM101](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)
- [Kit SO-ARM100](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html)

</section>

## Aplicaciones

<section id="apps" className="section-card">
  <div className="section-title">
    <span>Dónde encaja</span>
    <h2>Aplicaciones</h2>
  </div>

### Educación y desarrollo de IA encarnada

El SO-ARM101 está diseñado para docencia y experimentos de IA encarnada:
el par líder-seguidor graba demostraciones humanas, LeRobot las convierte
en datasets e Isaac GR00T ajusta encima una política VLA. Su bajo coste
hace viable equipar un aula o laboratorio completo.

### Teleoperación y recolección de datos

Con el ecosistema LeRobot, el par permite control remoto, grabación de
demostraciones y gestión de datasets — la base de todo pipeline de
aprendizaje por imitación y VLA del curso.

### Investigación y prototipado

Las interfaces abiertas de hardware y software permiten personalizar
tareas, cambiar el efector final y validar ideas Sim-to-Real rápidamente
antes de saltar a plataformas mayores.

</section>

## Recursos

<section id="resources" className="section-card">
  <div className="section-title">
    <span>Enlaces</span>
    <h2>Recursos</h2>
  </div>

- [Curso para principiantes de SO-ARM101](https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_introduction/)
- [Primeros pasos con SO-ARM101 en LeRobot](https://wiki.seeedstudio.com/es/lerobot_so100m/)
- [NVIDIA Sim-to-Real SO-101 Workshop](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/index.html)

Siguiente: [Capítulo 5 — Conclusión](es_Sim2Real_VLA_05.md).

</section>

</div>