---
description: "Curso para principiantes de Inteligencia Incorporada de Seeed — una guía gratuita y práctica para construir y aprender con el brazo robótico reBot 100% de código abierto. La Etapa 1 cubre conceptos básicos, hardware y preparación del equipo."
title: Curso para principiantes de Inteligencia Incorporada de Seeed
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Brazo robótico
  - Inteligencia Incorporada
  - Curso
  - Tutorial
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_introduction
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × Inteligencia Incorporada</span>
    <h2>8 Etapas, 40 Capítulos — gratuito y práctico</h2>
    <p>
      Una guía gratuita y práctica para construir y aprender con el brazo robótico reBot 100% de código abierto.
      La Etapa 1 cubre conceptos básicos, hardware y preparación del equipo.
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
    <span>Se combina con el brazo robótico reBot 100% de código abierto y reproducible.</span>
  </div>
</section>

<RebotCourseNav />

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
Este curso fue creado y compartido de forma gratuita por el equipo de Robótica de IA de Seeed Studio, para ofrecer a estudiantes de robótica, alumnos, buscadores de empleo y makers una ruta de aprendizaje clara y sistemática. Eres bienvenido a aprender de él y compartirlo con otros, pero se prohíbe la copia no autorizada, la redistribución comercial o el uso indebido del contenido: los derechos de autor pertenecen a Seeed Studio (Shenzhen) Co., Ltd.

Está construido en torno a <strong>reBot</strong>, un brazo robótico 100% de código abierto, reproducible y de uso comercial, y combina teoría con práctica para cubrir el control de brazos robóticos, algoritmos de robótica tradicionales y la moderna IA incorporada basada en VLA. El curso es completamente gratuito; si te resulta útil, apoya el proyecto dando una estrella a <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm en GitHub</a> ⭐, donde también están disponibles los planos de hardware, archivos BOM y otros recursos de código abierto. Los usuarios con experiencia pueden ir directamente a nuestro <a href="https://wiki.seeedstudio.com/es/robotics_page/" target="_blank" rel="noopener noreferrer">Wiki de Robótica</a> para tutoriales y ejemplos. El enfoque está en la comprensión práctica más que en la derivación matemática profunda, para que puedas construir una base sólida rápidamente y prepararte para estudios más avanzados.
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

Este curso utiliza el reBot Arm B601-DM y B601-RS como plataformas prácticas, combinando teoría de brazos robóticos, teoría del aprendizaje en robótica y práctica con hardware real. El esquema del curso es el siguiente:

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
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>Conociendo los robots y la Inteligencia Incorporada</strong>
      <span>Capítulo 1</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>Conociendo el hardware del reBot Arm y el proyecto de código abierto</strong>
      <span>Capítulo 2</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>Selección de hardware para los cursos posteriores</strong>
      <span>Capítulo 3</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 2: Ensamblaje del brazo robótico y control básico

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>Fundamentos de brazos robóticos y actuadores de articulaciones</strong>
      <span>Capítulo 4</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>Bus CAN y comunicación con motores</strong>
      <span>Capítulo 5</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>Ensamblaje, fuente de alimentación y primer encendido</strong>
      <span>Capítulo 6</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>Biblioteca de control de motores MotorBridge</strong>
      <span>Capítulo 7</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_8">
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
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>Fundamentos del aprendizaje en robótica y del aprendizaje por imitación</strong>
      <span>Capítulo 9</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>Arquitectura del sistema LeRobot y reBot Arm</strong>
      <span>Capítulo 10</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Calibración de líder y seguidor y teleoperación</strong>
      <span>Capítulo 11</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>Conjuntos de datos de robots y diseño de tareas</strong>
      <span>Capítulo 12</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>Configuración de la cámara y recopilación de datos con LeRobot</strong>
      <span>Capítulo 13</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>Estructura del conjunto de datos e inspección de calidad</strong>
      <span>Capítulo 14</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Modelo ACT y segmentación de acciones</strong>
      <span>Capítulo 15</span>
    </div>
    <span className="course-tag">Teoría</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Entrenar tu primera política ACT</strong>
      <span>Capítulo 16</span>
    </div>
    <span className="course-tag">Práctica</span>
  </a>
  <a className="course-path-item" href="/es/rebot_embodied_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>Inferencia en robot real, evaluación e iteración de datos</strong>
      <span>Capítulo 17</span>
    </div>
    <span className="course-tag">Teoría y práctica</span>
  </a>
</div>

### Etapa 4–8

:::note
Próximamente: las etapas restantes se añadirán progresivamente al wiki.
:::

</section>

</div>
