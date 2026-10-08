---
description: "Curso de iniciación a la IA Física de Seeed — una guía gratuita y práctica para construir y aprender con el brazo robótico reBot, 100% de código abierto. Se han publicado cinco etapas y 26 capítulos, que cubren la configuración y el control básico, el aprendizaje por imitación con LeRobot, VLA con Isaac GR00T, y las matemáticas y el control de movimiento del brazo robótico."
title: Curso de iniciación a la IA Física de Seeed
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Brazo robótico
  - IA Física
  - Curso
  - Tutorial
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_introduction
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × IA Física · 5 etapas publicadas</span>
    <h2>5 etapas, 26 capítulos — gratuito y práctico</h2>
    <p>
      Una guía gratuita y práctica para construir y aprender con el brazo robótico reBot, 100% de código abierto.
      Los capítulos publicados te llevan desde los conceptos básicos, el montaje y el control de motores, pasando por
      el aprendizaje por imitación con LeRobot y VLA con Isaac GR00T, hasta las matemáticas del brazo robótico y
      el control de movimiento que hay detrás de todo ello.
    </p>
    <div className="hero-actions">
      <a href="#estructura">Estructura del curso</a>
      <a href="#principios">Diseño del curso</a>
      <a href="#comunidad">Comunidad</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Resumen del curso</strong>
    <span>Escrito y compartido de forma gratuita por el equipo de robótica de Seeed.</span>
    <span>Se combina con el brazo robótico reBot, 100% de código abierto y reproducible.</span>
    <span><strong>Etapas 1–5 publicadas</strong> (Capítulos 1–26): fundamentos y hardware, montaje y control, aprendizaje por imitación, VLA, matemáticas y control de movimiento.</span>
    <span>Las etapas 6–8 (visión y agarre, integración con ROS2, simulación) están en camino.</span>
  </div>
</section>

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
Este curso fue creado y compartido de forma gratuita por el equipo de IA Robótica de Seeed Studio, para ofrecer a estudiantes de robótica, alumnos, buscadores de empleo y makers una ruta de aprendizaje clara y sistemática. Puedes aprender con él y compartirlo con otras personas, pero se prohíbe la copia no autorizada, la redistribución comercial o el uso indebido del contenido — los derechos de autor pertenecen a Seeed Studio (Shenzhen) Co., Ltd.

Está construido en torno a <strong>reBot</strong>, un brazo robótico 100% de código abierto, reproducible y apto para uso comercial, y combina teoría con práctica para abarcar el control de brazos robóticos, algoritmos tradicionales de robótica y la IA encarnada moderna basada en VLA. El curso es completamente gratuito — si te resulta útil, apoya el proyecto dando una estrella a <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm en GitHub</a> ⭐, donde también encontrarás los planos de hardware, archivos BOM y otros recursos de código abierto. Los usuarios con experiencia pueden ir directamente a nuestra <a href="https://wiki.seeedstudio.com/es/robotics_page/" target="_blank" rel="noopener noreferrer">Wiki de Robótica</a> para ver tutoriales y ejemplos. El enfoque está en la comprensión práctica más que en la derivación matemática profunda, para que puedas construir una base sólida rápidamente y prepararte para estudios más avanzados. La Etapa 5 sí introduce las bases matemáticas — marcos de coordenadas, cinemática, el Jacobiano y la planificación de trayectorias — pero está escrita como material de referencia que puedes leer una vez y luego consultar mientras trabajas en el capítulo práctico.
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>Comunidad</span>
    <h2>Grupos de la comunidad</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01.png" alt="Facebook group QR code" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Facebook</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Discord reBot group logo" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>Diseño</span>
    <h2>Principios de diseño del curso</h2>
  </div>

Este curso utiliza los reBot Arm B601-DM y B601-RS como plataformas prácticas, combinando la teoría de brazos robóticos, la teoría del aprendizaje en robótica y la práctica con hardware real. El esquema del curso es el siguiente:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-03.png" alt="Course outline" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estructura</span>
    <h2>Estructura del curso</h2>
  </div>

### Etapa 1: Conceptos básicos y preparación del equipo

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>Conociendo los robots y la IA Física</strong>
      <span>Capítulo 1</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>Conociendo el hardware del brazo reBot y el proyecto de código abierto</strong>
      <span>Capítulo 2</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>Selección de hardware para los cursos posteriores</strong>
      <span>Capítulo 3</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 2: Montaje del brazo robótico y control básico

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>Fundamentos de brazos robóticos y actuadores articulares</strong>
      <span>Capítulo 4</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>Bus CAN y comunicación con motores</strong>
      <span>Capítulo 5</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>Montaje, alimentación y primer encendido</strong>
      <span>Capítulo 6</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>Biblioteca de control de motores MotorBridge</strong>
      <span>Capítulo 7</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Control del brazo reBot usando el SDK de Python</strong>
      <span>Capítulo 8</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 3: Aprendizaje por imitación y LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>Fundamentos del aprendizaje en robótica y del aprendizaje por imitación</strong>
      <span>Capítulo 9</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>Arquitectura del sistema LeRobot y brazo reBot</strong>
      <span>Capítulo 10</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Calibración de líder y seguidor y teleoperación</strong>
      <span>Capítulo 11</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>Conjuntos de datos de robots y diseño de tareas</strong>
      <span>Capítulo 12</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>Configuración de la cámara y recopilación de datos con LeRobot</strong>
      <span>Capítulo 13</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>Estructura del conjunto de datos e inspección de calidad</strong>
      <span>Capítulo 14</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Modelo ACT y segmentación de acciones</strong>
      <span>Capítulo 15</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Entrenando tu primera política ACT</strong>
      <span>Capítulo 16</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>Inferencia en robot real, evaluación e iteración de datos</strong>
      <span>Capítulo 17</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 4: VLA e Isaac GR00T

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>Aprendizaje multimodal y fundamentos de VLA</strong>
      <span>Capítulo 18</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>Encarnación del robot y arquitectura del sistema GR00T</strong>
      <span>Capítulo 19</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>Preparación del conjunto de datos VLA de reBot</strong>
      <span>Capítulo 20</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Ajuste fino del brazo reBot con Isaac GR00T</strong>
      <span>Capítulo 21</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>Inferencia con GR00T y despliegue en robot real</strong>
      <span>Capítulo 22</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 5: Matemáticas del brazo robótico y control de movimiento

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_23">
    <span className="course-index">23</span>
    <div className="course-path-copy">
      <strong>Fundamentos matemáticos del brazo robótico y sistemas de coordenadas</strong>
      <span>Capítulo 23</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_24">
    <span className="course-index">24</span>
    <div className="course-path-copy">
      <strong>Cinemática directa, cinemática inversa y el Jacobiano</strong>
      <span>Capítulo 24</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_25">
    <span className="course-index">25</span>
    <div className="course-path-copy">
      <strong>Planificación de trayectorias y control del brazo robótico</strong>
      <span>Capítulo 25</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_physical_ai_course_chapter_26">
    <span className="course-index">26</span>
    <div className="course-path-copy">
      <strong>Pinocchio y MeshCat</strong>
      <span>Capítulo 26</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
</div>

### Etapas 6–8

:::note
Próximamente — visión del brazo robótico y agarre autónomo (Etapa 6), ROS2 e integración de sistemas robóticos (Etapa 7), y simulación con MuJoCo / Isaac Sim (Etapa 8) se irán añadiendo progresivamente al wiki.
:::

</section>

</div>
