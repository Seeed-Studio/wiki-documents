---
description: "Capítulo 2 del curso Sim-to-Real VLA de SO-ARM101 — LeRobot: contexto y comunidad: por qué LeRobot, el ecosistema del Hub y el ciclo recopilar-entrenar-desplegar-evaluar."
title: Capítulo 2 - LeRobot: contexto y comunidad
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_2
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 1 · Capítulo 2 · Overview</span>
    <h2>2. LeRobot: contexto y comunidad</h2>
    <p>
      LeRobot es la base de software del curso: recolección de datos,
      entrenamiento de políticas, despliegue y evaluación en un solo
      framework — respaldado por una comunidad enorme.
    </p>
    <div className="hero-actions">
      <a href="#what">Qué es LeRobot</a>
      <a href="#why">Por qué LeRobot</a>
      <a href="#community">Comunidad</a>
      <a href="#ready">Preparación</a>
    </div>
  </div>
</section>

## ¿Qué es LeRobot?

<section id="what" className="section-card">
  <div className="section-title">
    <span>Hugging Face</span>
    <h2>¿Qué es LeRobot?</h2>
  </div>

LeRobot es un framework de robótica de código abierto desarrollado por
Hugging Face. Proporciona un conjunto unificado de herramientas para la
recolección de datos de robots, el entrenamiento de políticas, el
despliegue y la evaluación.

</section>

## ¿Por qué LeRobot?

<section id="why" className="section-card">
  <div className="section-title">
    <span>Un solo pipeline</span>
    <h2>¿Por qué LeRobot?</h2>
  </div>

El curso usa LeRobot como framework principal porque ofrece un pipeline
completo de aprendizaje robótico.

LeRobot se integra estrechamente con el Hugging Face Hub, lo que facilita
almacenar, compartir y reutilizar datasets: los datasets de la comunidad
se pueden descargar directamente para entrenar, y las nuevas demostraciones
se pueden subir y compartir con colaboradores.

El framework también soporta métodos modernos de aprendizaje robótico,
incluidos NVIDIA Isaac GR00T y otros modelos Vision-Language-Action. Las
mismas herramientas usadas para recolectar datos sirven después para
entrenar, desplegar y evaluar políticas.

Como resultado, todo el flujo sigue un ciclo simple:

**Recopilar → Entrenar → Desplegar → Evaluar → Iterar**

Los desarrolladores se concentran en los problemas de robótica y no en la
infraestructura.

</section>

## Recursos de la comunidad

<section id="community" className="section-card">
  <div className="section-title">
    <span>Ecosistema</span>
    <h2>Recursos de la comunidad</h2>
  </div>

Una de las fortalezas de LeRobot es su ecosistema creciente.

El Hugging Face Hub aloja una gran colección de datasets de robots que
cubren distintas plataformas y tareas de manipulación. Siguen un formato
estandarizado, lo que facilita compartirlos y reutilizarlos entre
proyectos.

LeRobot también ofrece herramientas como el Dataset Visualizer, que permite
inspeccionar demostraciones, reproducir trayectorias y analizar las
observaciones del robot antes de entrenar.

Juntos, estos recursos bajan la barrera de entrada y aceleran la
experimentación.

</section>

## Preparación para el curso

<section id="ready" className="section-card">
  <div className="section-title">
    <span>Base</span>
    <h2>Preparación para el curso</h2>
  </div>

A lo largo del curso, LeRobot será la base de software para la recolección
de datos, el entrenamiento y el despliegue real del SO-ARM101. El capítulo
7 instala paso a paso el entorno exacto que usan los demás capítulos,
incluido el fork de Seeed con soporte de líder y seguidor SO-101.

Recomendamos revisar antes la documentación oficial de LeRobot. Con el
entorno listo, los capítulos siguientes construyen el flujo completo de IA
encarnada.

</section>

## Más recursos

<section className="section-card">
  <div className="section-title">
    <span>Enlaces</span>
    <h2>Más recursos</h2>
  </div>

- [Documentación de LeRobot](https://huggingface.co/docs/lerobot)
- [Primeros pasos con SO-ARM101 en LeRobot | Seeed Studio Wiki](https://wiki.seeedstudio.com/es/lerobot_so100m/)
- [Curso para principiantes de SO-ARM101](https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_introduction/)

</section>

</div>