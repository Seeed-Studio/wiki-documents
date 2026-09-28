---
description: "Capítulo 2 del Curso para Principiantes en IA Física de Seeed: conoce el proyecto de código abierto reBot Arm, la diferencia entre las versiones DM y RS, y su hardware y software de código abierto."
title: Capítulo 2 - Hardware y el Proyecto de Código Abierto
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Open Source
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_2
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 1 · Capítulo 2 · Teoría y práctica</span>
    <h2>2. Conociendo el hardware de reBot Arm y el proyecto de código abierto</h2>
    <p>
      Capítulo 2 del Curso para Principiantes en IA Física de Seeed: conoce el reBot Arm,
      su proyecto de código abierto, la diferencia entre las versiones DM y RS, y su hardware y software
      de código abierto.
    </p>
    <div className="hero-actions">
      <a href="#what-is-rebot-arm">Qué es reBot Arm</a>
      <a href="#open-source">Código abierto</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>2.1 Qué es reBot Arm</span>
    <span>2.2 Por qué diseñar dos versiones: DM y RS</span>
    <span>2.3 Comparación de parámetros entre reBot Arm DM y reBot Arm RS</span>
    <span>2.4 Hardware de código abierto y software de código abierto</span>
  </div>
</section>

<RebotCourseNav />

## 2.1 Qué es reBot Arm

<section id="what-is-rebot-arm" className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>2.1 Qué es reBot Arm</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-01.png" alt="reBot Arm" />
</div>

El reBot Arm B601 es un brazo robótico totalmente de código abierto lanzado por Seeed Studio, desde el hardware estructural hasta el software. Es un brazo robótico de escritorio de código abierto para educación en robótica, desarrollo de algoritmos e investigación en inteligencia incorporada. Adopta una estructura mecánica modular, proporciona aproximadamente 750 mm de alcance y 6+1 grados de libertad, se conecta a un ordenador mediante USB-CAN y puede utilizarse para experimentos como control de brazos robóticos, visión robótica, aprendizaje por imitación y VLA.

reBot Arm no es solo hardware de brazo robótico; también proporciona materiales de desarrollo completos desde el control de bajo nivel hasta las aplicaciones de IA de alto nivel. A partir de este proyecto de código abierto, puedes aprender desde cero:

- Diseño y montaje de brazos robóticos (vídeo detallado del producto DM);
- Calibración del brazo robótico y control de las articulaciones;
- Cinemática directa, cinemática inversa y planificación de trayectorias;
- Análisis dinámico con Pinocchio y visualización con MeshCat;
- Teleoperación maestro–esclavo Leader–Follower;
- Recopilación de datos, entrenamiento y evaluación con LeRobot; grabación de páginas web en Hugging Face;
- Reconocimiento visual RGB-D y agarre autónomo;
- Isaac Sim;
- Integración con ROS2 y desarrollo secundario;
- Adaptación de modelos de políticas robóticas como ACT y GR00T.

Su objetivo principal es permitir a los usuarios aprender y validar algoritmos de brazos robóticos e inteligencia incorporada utilizando hardware relativamente económico, abierto y modificable.

</section>

## 2.2 Por qué diseñar dos versiones: DM y RS

<section id="two-versions" className="section-card">
  <div className="section-title">
    <span>Versiones de hardware</span>
    <h2>2.2 Por qué diseñar dos versiones: DM y RS</h2>
  </div>

El reBot Arm B601 ofrece dos versiones:

- **B601-DM**
- **B601-RS**

Ambas versiones utilizan una estructura mecánica similar y un sistema de software de capa superior similar, pero emplean diferentes tipos de motores de articulación.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-02.png" alt="DM and RS comparison" />
</div>

</section>

## 2.3 Comparación de parámetros entre reBot Arm DM y reBot Arm RS

<section id="parameter-comparison" className="section-card">
  <div className="section-title">
    <span>Comparación</span>
    <h2>2.3 Comparación de parámetros entre reBot Arm DM y reBot Arm RS</h2>
  </div>

| Producto               | reBot Arm DM                                                                     | reBot Arm RS                                                                     |
| ---------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **SKU**                | 100065783                                                                        | 100019336                                                                        |
| **Enlace de compra**   | [Bazaar](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html) | [Bazaar](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) |
| **Grados de libertad** | 6+1                                                                              | 6+1                                                                              |
| **Carga nominal**      | **1.5 kg**                                                                       | **2.5 kg**                                                                       |
| **Carga máxima**       | **2.5 kg**                                                                       | **5 kg**                                                                         |
| **Repetibilidad**      | **0.2 mm**                                                                       | **0.1 mm**                                                                       |
| **Alcance**            | 767 mm                                                                           | 754.7 mm                                                                         |
| **Comunicación**       | Bus CAN mediante adaptador USB-CAN                                              | Bus CAN mediante adaptador USB-CAN                                              |
| **Fuente de alimentación** | 24V CC, 15A                                                                  | 48V CC, 12.5A                                                                    |
| **Tipo de actuador**   | [Actuadores de articulación planetarios Damiao DM](https://www.seeedstudio.com/DM4340P-Actuator-p-6663.html)    | [Actuadores de articulación de accionamiento casi directo RoboStride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)  |


</section>

## 2.4 Hardware de código abierto y software de código abierto

<section id="open-source" className="section-card">
  <div className="section-title">
    <span>Código abierto</span>
    <h2>2.4 Hardware de código abierto y software de código abierto</h2>
  </div>

Tanto el hardware como el software de reBot Arm están abiertos al público.

Repositorio de GitHub: <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">https://github.com/Seeed-Projects/reBot-DevArm/</a>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-03.png" alt="Open-source hardware and software" />
</div>

</section>

</div>
