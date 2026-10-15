---
description: "Curso de iniciación a la IA Física de Seeed — una guía gratuita y práctica para construir y aprender con el brazo robótico reBot, 100% de código abierto. Se han publicado las ocho etapas y los 39 capítulos, que cubren la configuración y el control básico, el aprendizaje por imitación con LeRobot, la VLA con Isaac GR00T, las matemáticas y el control de movimiento del brazo robótico, la visión robótica con agarre autónomo, la integración del sistema robótico con ROS2 y la simulación del brazo robótico en MuJoCo e Isaac Sim."
title: Curso de iniciación a la IA Física de Seeed
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Brazo robótico
  - IA Física
  - Curso
  - Tutorial
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_introduction
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/robotics/rebot_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × IA Física · Las 8 etapas publicadas</span>
    <h2>8 etapas, 39 capítulos — gratis y práctico</h2>
    <p>
      Una guía gratuita y práctica para construir y aprender con el brazo robótico reBot, 100% de código abierto.
      Los capítulos publicados te llevan desde los conceptos básicos, el montaje y el control de motores, pasando por
      el aprendizaje por imitación con LeRobot y la VLA con Isaac GR00T, hasta las matemáticas del brazo robótico y
      el control de movimiento que hay detrás de todo — y luego a la visión robótica, el agarre autónomo, la integración del sistema robótico con ROS2
      y la simulación.
    </p>
    <div className="hero-actions">
      <a href="#structure">Estructura del curso</a>
      <a href="#principles">Diseño del curso</a>
      <a href="#community">Comunidad</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Resumen del curso</strong>
    <span>Escrito y compartido de forma gratuita por el equipo de robótica de Seeed.</span>
    <span>Se combina con el brazo robótico reBot, 100% de código abierto y reproducible.</span>
    <span><strong>Las 8 etapas publicadas</strong> (Capítulos 1–39): fundamentos y hardware, montaje y control, aprendizaje por imitación, VLA, matemáticas y control de movimiento, visión robótica y agarre, integración del sistema con ROS2 y simulación en MuJoCo / Isaac Sim.</span>
    <span>El curso está completo — los 39 capítulos están en la wiki.</span>
  </div>
</section>

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
Este curso fue creado y compartido de forma gratuita por el equipo de IA Robótica de Seeed Studio, para ofrecer a estudiantes de robótica, alumnos, buscadores de empleo y makers una ruta de aprendizaje clara y sistemática. Puedes aprender con él y compartirlo con otros, pero se prohíbe la copia no autorizada, la redistribución comercial o el uso indebido del contenido — los derechos de autor pertenecen a Seeed Studio (Shenzhen) Co., Ltd.

Está construido en torno a <strong>reBot</strong>, un brazo robótico 100% de código abierto, reproducible y apto para uso comercial, y combina teoría con práctica para cubrir el control de brazos robóticos, los algoritmos tradicionales de robótica y la IA encarnada moderna basada en VLA. El curso es completamente gratuito — si te resulta útil, apoya el proyecto dando una estrella a <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm en GitHub</a> ⭐, donde también están disponibles los planos de hardware, archivos BOM y otros recursos de código abierto. Los usuarios con experiencia pueden ir directamente a nuestra <a href="https://wiki.seeedstudio.com/es/robotics_page/" target="_blank" rel="noopener noreferrer">Wiki de Robótica</a> para ver tutoriales y ejemplos. El enfoque está en la comprensión práctica más que en la derivación matemática profunda, para que puedas construir una base sólida rápidamente y prepararte para estudios más avanzados. La Etapa 5 sí introduce los fundamentos matemáticos — marcos de coordenadas, cinemática, el Jacobiano y la planificación de trayectorias — pero está escrita como material de referencia que puedes leer una vez y luego consultar mientras trabajas en el capítulo práctico. La Etapa 6 sigue el mismo patrón: los Capítulos 27 y 28 son teoría de visión, y el Capítulo 29 es la práctica de agarre visual. La Etapa 7 hace lo mismo de nuevo — los Capítulos 31 y 32 tratan los conceptos de ROS2, y los Capítulos 33 y 34 ponen el brazo en un sistema ROS2 real. La Etapa 8 cierra el curso poniendo el brazo dentro de un ordenador: el Capítulo 35 es teoría de simulación, los Capítulos 36 y 37 ejecutan el brazo en MuJoCo, el Capítulo 38 lo construye en Isaac Sim y el Capítulo 39 sincroniza el brazo real con la simulación.
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
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>Conociendo los robots y la IA Física</strong>
      <span>Capítulo 1</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>Conociendo el hardware del reBot Arm y el proyecto de código abierto</strong>
      <span>Capítulo 2</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_3">
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
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>Fundamentos de brazos robóticos y actuadores de articulaciones</strong>
      <span>Capítulo 4</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>Bus CAN y comunicación con motores</strong>
      <span>Capítulo 5</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>Montaje, alimentación y primer encendido</strong>
      <span>Capítulo 6</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>Biblioteca de control de motores MotorBridge</strong>
      <span>Capítulo 7</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Controlar el reBot Arm usando el SDK de Python</strong>
      <span>Capítulo 8</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 3: Aprendizaje por imitación y LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>Fundamentos del aprendizaje robótico y del aprendizaje por imitación</strong>
      <span>Capítulo 9</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>Arquitectura del sistema LeRobot y reBot Arm</strong>
      <span>Capítulo 10</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Calibración de líder y seguidor y teleoperación</strong>
      <span>Capítulo 11</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>Conjuntos de datos robóticos y diseño de tareas</strong>
      <span>Capítulo 12</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>Configuración de la cámara y recopilación de datos con LeRobot</strong>
      <span>Capítulo 13</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>Estructura del conjunto de datos e inspección de calidad</strong>
      <span>Capítulo 14</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Modelo ACT y segmentación de acciones</strong>
      <span>Capítulo 15</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Entrenando tu primera política ACT</strong>
      <span>Capítulo 16</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_17">
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
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>Aprendizaje multimodal y fundamentos de VLA</strong>
      <span>Capítulo 18</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>Incorporación robótica y arquitectura del sistema GR00T</strong>
      <span>Capítulo 19</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>Preparación del conjunto de datos VLA de reBot</strong>
      <span>Capítulo 20</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Ajuste fino del brazo reBot con Isaac GR00T</strong>
      <span>Capítulo 21</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_22">
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
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_23">
    <span className="course-index">23</span>
    <div className="course-path-copy">
      <strong>Fundamentos matemáticos del brazo robótico y sistemas de coordenadas</strong>
      <span>Capítulo 23</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_24">
    <span className="course-index">24</span>
    <div className="course-path-copy">
      <strong>Cinemática directa, cinemática inversa y jacobiano</strong>
      <span>Capítulo 24</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_25">
    <span className="course-index">25</span>
    <div className="course-path-copy">
      <strong>Planificación de trayectorias y control del brazo robótico</strong>
      <span>Capítulo 25</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_26">
    <span className="course-index">26</span>
    <div className="course-path-copy">
      <strong>Pinocchio y MeshCat</strong>
      <span>Capítulo 26</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
</div>

### Etapa 6: Visión robótica y agarre autónomo

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_27">
    <span className="course-index">27</span>
    <div className="course-path-copy">
      <strong>Visión robótica y percepción 3D</strong>
      <span>Capítulo 27</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_28">
    <span className="course-index">28</span>
    <div className="course-path-copy">
      <strong>Detección de objetos y calibración mano-ojo</strong>
      <span>Capítulo 28</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_29">
    <span className="course-index">29</span>
    <div className="course-path-copy">
      <strong>Agarre visual autónomo con el brazo reBot</strong>
      <span>Capítulo 29</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_30">
    <span className="course-index">30</span>
    <div className="course-path-copy">
      <strong>Interacción por voz y multimodal</strong>
      <span>Capítulo 30</span>
    </div>
    <span className="course-tag">Optativa</span>
  </a>
</div>

### Etapa 7: ROS2 e integración de sistemas robóticos

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_31">
    <span className="course-index">31</span>
    <div className="course-path-copy">
      <strong>Comunicación ROS2 y arquitectura de software robótico</strong>
      <span>Capítulo 31</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_32">
    <span className="course-index">32</span>
    <div className="course-path-copy">
      <strong>URDF, TF y modelos de robots</strong>
      <span>Capítulo 32</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_33">
    <span className="course-index">33</span>
    <div className="course-path-copy">
      <strong>Integración ROS2 del brazo reBot</strong>
      <span>Capítulo 33</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_34">
    <span className="course-index">34</span>
    <div className="course-path-copy">
      <strong>Planificación de movimiento con MoveIt2</strong>
      <span>Capítulo 34</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 8: Simulación del brazo robótico con MuJoCo e Isaac Sim

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_35">
    <span className="course-index">35</span>
    <div className="course-path-copy">
      <strong>Fundamentos de simulación robótica e introducción a la plataforma</strong>
      <span>Capítulo 35</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_36">
    <span className="course-index">36</span>
    <div className="course-path-copy">
      <strong>Ejecutar el brazo reBot en MuJoCo</strong>
      <span>Capítulo 36</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_37">
    <span className="course-index">37</span>
    <div className="course-path-copy">
      <strong>Cinemática y control de trayectorias en MuJoCo</strong>
      <span>Capítulo 37</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_38">
    <span className="course-index">38</span>
    <div className="course-path-copy">
      <strong>Ejecutar el brazo reBot en Isaac Sim</strong>
      <span>Capítulo 38</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/rebot_physical_ai_course_chapter_39">
    <span className="course-index">39</span>
    <div className="course-path-copy">
      <strong>Sincronización del brazo real y el simulado</strong>
      <span>Capítulo 39</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
</div>

</section>

</div>
