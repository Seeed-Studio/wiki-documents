---
description: "Curso para principiantes de SO-ARM Physical AI — una guía gratuita y práctica para construir y aprender con el brazo robótico de código abierto SO-ARM100 / SO-ARM101. Los 4 stages y 22 capítulos están publicados: preparación y ensamblaje, aprendizaje por imitación con LeRobot, entrenamiento de doble brazo, VLA con Isaac GR00T y VLA sin código con SenseCraft Robotics."
title: Curso para principiantes de SO-ARM Physical AI
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - LeRobot
  - brazo robótico
  - Physical AI
  - curso
  - tutorial
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_introduction
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × Physical AI · Los 4 stages publicados</span>
    <h2>4 stages, 22 capítulos — gratis y práctico</h2>
    <p>
      Una guía gratuita y práctica para construir y aprender con el brazo robótico de código abierto
      SO-ARM100 / SO-ARM101. Los capítulos publicados van desde conceptos básicos, ensamblaje y control
      de servos, pasando por el aprendizaje por imitación con LeRobot y el entrenamiento de doble brazo,
      hasta el ajuste fino de VLA con Isaac GR00T — y terminan con la ruta VLA sin código en la
      plataforma SenseCraft Robotics.
    </p>
    <div className="hero-actions">
      <a href="#structure">Estructura del curso</a>
      <a href="#principles">Diseño del curso</a>
      <a href="#community">Comunidad</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Resumen del curso</strong>
    <span>Escrito y compartido gratis por el equipo de robótica de Seeed.</span>
    <span>Acompaña a los kits de brazos líder-seguidor SO-ARM100 / SO-ARM101 de código abierto.</span>
    <span><strong>Los 4 stages publicados</strong> (capítulos 1–22): fundamentos y hardware, ensamblaje y control de servos, aprendizaje por imitación y doble brazo, GR00T VLA y SenseCraft VLA sin código.</span>
    <span>El curso está completo — los 22 capítulos están en el wiki.</span>
  </div>
</section>

<GitHubStarButton owner="TheRobotStudio" repo="SO-ARM100" />

:::tip
Este curso fue creado y compartido gratuitamente por el equipo de AI Robotics de Seeed Studio para ofrecer a estudiantes de robótica, universitarios, buscadores de empleo y makers una ruta de aprendizaje clara y sistemática. Eres bienvenido a aprenderlo y compartirlo, pero está prohibida la copia no autorizada, la redistribución comercial o el mal uso del contenido — los derechos de autor pertenecen a Seeed Studio (Shenzhen) Co., Ltd.

Gira en torno a <strong>SO-ARM100 / SO-ARM101</strong>, el brazo robótico líder-seguidor de código abierto diseñado originalmente por <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio</a> y convertido en kits completos por Seeed Studio, y combina teoría con práctica para cubrir el control de brazos robóticos, el ecosistema de aprendizaje por imitación de LeRobot y la IA encarnada moderna basada en VLA. El curso es completamente gratuito — si te resulta útil, apoya el proyecto dejando una Star a <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">SO-ARM100 en GitHub</a> ⭐, donde también están los archivos STL y otros recursos abiertos. Los usuarios con experiencia pueden ir directamente a nuestro <a href="https://wiki.seeedstudio.com/es/robotics_page/" target="_blank" rel="noopener noreferrer">Wiki de Robótica</a>. El enfoque es la comprensión práctica más que la derivación matemática profunda. El Stage 2 ensambla y configura los brazos paso a paso; el Stage 3 recorre el bucle completo de LeRobot — calibración, teleoperación, datasets, entrenamiento ACT, inferencia en robot real — y cierra con un capítulo optativo de doble brazo; el Stage 4 explica la teoría VLA y la arquitectura de GR00T, ajusta GR00T con un dataset de SO-ARM, y termina con la ruta sin código de SenseCraft Robotics para lectores sin GPU de entrenamiento.
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>Comunidad</span>
    <h2>Grupos de la comunidad</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01.png" alt="Código QR del grupo de Facebook" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Facebook</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Logotipo del grupo de Discord" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>Diseño</span>
    <h2>Principios de diseño del curso</h2>
  </div>

Este curso usa los kits líder-seguidor SO-ARM100 / SO-ARM101 como plataformas prácticas, combinando teoría de brazos robóticos, teoría del aprendizaje en robótica y práctica con hardware real. El esquema del curso es el siguiente:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/Intro_en.png" alt="Esquema del curso" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estructura</span>
    <h2>Estructura del curso</h2>
  </div>

### Etapa 1: Conceptos básicos y preparación del equipo

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>Conociendo los robots y la IA Física</strong>
      <span>Capítulo 1</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>Conociendo el hardware de SO-ARM y el proyecto de código abierto</strong>
      <span>Capítulo 2</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>Selección de hardware para los capítulos siguientes</strong>
      <span>Capítulo 3</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 2: Ensamblaje del SO-ARM y control básico

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>Fundamentos de brazos robóticos y servos de bus</strong>
      <span>Capítulo 4</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>Configuración del entorno de software</strong>
      <span>Capítulo 5</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>Configurar motores y ensamblar los brazos</strong>
      <span>Capítulo 6</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>Depuración de servos con la herramienta de ajuste</strong>
      <span>Capítulo 7</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
</div>

### Etapa 3: Aprendizaje por imitación y LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Fundamentos del aprendizaje en robótica e imitación</strong>
      <span>Capítulo 8</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>Arquitectura del sistema LeRobot y SO-ARM</strong>
      <span>Capítulo 9</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>Calibración y teleoperación de líder y seguidor</strong>
      <span>Capítulo 10</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Datasets de robótica y diseño de tareas</strong>
      <span>Capítulo 11</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>Configuración de cámaras y recolección de datos LeRobot</strong>
      <span>Capítulo 12</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>Estructura del dataset e inspección de calidad</strong>
      <span>Capítulo 13</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>Modelo ACT y acción por bloques</strong>
      <span>Capítulo 14</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Entrenando tu primera política ACT</strong>
      <span>Capítulo 15</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Inferencia real, evaluación e iteración de datos</strong>
      <span>Capítulo 16</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>Entrenamiento de doble brazo SO-ARM</strong>
      <span>Capítulo 17</span>
    </div>
    <span className="course-tag">Optativo</span>
  </a>
</div>

### Etapa 4: VLA — Isaac GR00T y SenseCraft sin código

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>Aprendizaje multimodal y fundamentos de VLA</strong>
      <span>Capítulo 18</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>Embodiment del robot y arquitectura de GR00T</strong>
      <span>Capítulo 19</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>Preparando el dataset VLA de SO-ARM</strong>
      <span>Capítulo 20</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Ajuste fino del SO-ARM con Isaac GR00T</strong>
      <span>Capítulo 21</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/robotics/soarm_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>VLA sin código con SenseCraft Robotics</strong>
      <span>Capítulo 22</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
</div>

</section>

</div>
