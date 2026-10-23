---
description: "Explora la investigación más avanzada en Physical AI, desglosa modelos y algoritmos clave con brazos robóticos de Seeed"
title: "Análisis profundo de artículos sobre Physical AI y despliegue práctico"
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Arm
  - Robotics
  - Paper Deep-Dive
  - Hands-on Deployment
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_getting_started
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_getting_started/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

  <aside className="paper-reading-support" aria-label="Support the open-source project">
    <div>
      <strong>Cursos gratuitos, juntos en código abierto</strong>
      <p>Este curso es completamente gratuito. Para apoyar nuestro trabajo, ¡dale una estrella a nuestro brazo robótico de código abierto!</p>
    </div>
    <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">⭐ Dar estrella en GitHub</a>
  </aside>

  <section className="paper-reading-intro" aria-labelledby="paper-reading-title">
    <span className="paper-reading-eyebrow">SEEED STUDIO · AI ROBOTICS</span>
    <h1 id="paper-reading-title">Análisis profundo de artículos sobre Physical AI y despliegue práctico</h1>
    <p className="paper-reading-lead">Explora la investigación más avanzada en Physical AI, desglosa modelos y algoritmos clave con brazos robóticos de Seeed</p>
    <p>Un <strong>curso que siempre será gratuito</strong>, cuidadosamente desarrollado por el equipo de SeeedStudio AI Robotics, junto con el <strong>brazo robótico reBot 100% de código abierto, disponible para uso comercial y reproducción</strong>. ¡Complétalo y conviértete en la próxima persona experta en robótica!</p>
    <ul className="paper-reading-badges" aria-label="Course features">
      <li>Siempre gratuito</li>
      <li>100% código abierto · Uso comercial</li>
      <li>Práctico · Reproducible</li>
    </ul>
  </section>

  <div className="paper-reading-directory">
    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-hands-on-title">
      <h2 id="paper-reading-hands-on-title">Despliegue práctico</h2>
      <p>Comienza con la preparación de la plataforma y la recopilación de datos, sigue los pasos para entrenar y desplegar ACT, luego aprende a cambiar de ACT a otras políticas y domina gradualmente el flujo de trabajo de reproducción para diferentes algoritmos.</p>
      <ol className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_hardware_and_teleoperation/">Configuración de hardware y software</a></li>
        <li><a href="/es/robotics/hands_on_task_design/">Diseño de tareas y planificación de demostraciones</a></li>
        <li><a href="/es/robotics/hands_on_camera_recording/">Recopilación de datos multivista</a></li>
        <li><a href="/es/robotics/hands_on_dataset_quality/">Calidad de datos: estructura, sincronización y validación</a></li>
        <li><a href="/es/robotics/hands_on_act_training/">Entrenamiento del modelo ACT</a></li>
        <li><a href="/es/robotics/hands_on_act_deployment/">Despliegue en el robot y evaluación del rendimiento</a></li>
        <li><a href="/es/robotics/hands_on_algorithm_switching/">Cambio de políticas y ejecución de tareas</a></li>
      </ol>
    </section>

    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-papers-title">
      <h2 id="paper-reading-papers-title">Análisis profundos de artículos</h2>
      <p>Lee artículos por tema, desde políticas básicas de aprendizaje por imitación hasta modelos de visión-lenguaje-acción.</p>
      <h3>Parte 1 · Fragmentación de acciones y políticas multitarea</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_act/">ACT — Manipulación bimanual de bajo costo</a></li>
      </ul>
      <h3>Parte 2 · Modelos VLA ligeros y despliegue eficiente</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_smolvla/">SmolVLA — Modelos de visión-lenguaje-acción asequibles</a></li>
        <li><a href="/es/robotics/paper_reading_evo1/">Evo-1 — VLA ligero</a></li>
      </ul>
      <h3>Parte 3 · Modelos fundacionales robóticos π</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_pi0/">π₀ — Control robótico de propósito general</a></li>
        <li><a href="/es/robotics/paper_reading_pi0_fast/">π₀-FAST — Tokenización de acciones eficiente</a></li>
        <li><a href="/es/robotics/paper_reading_pi05/">π₀.₅ — Generalización en mundos abiertos</a></li>
      </ul>
      <h3>Parte 4 · VLA generalista y adaptación entre morfologías</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_gr00t_n1/">NVIDIA GR00T — Adaptación y ajuste fino</a></li>
        <li><a href="/es/robotics/paper_reading_eo1/">EO-1 — Preentrenamiento multimodal intercalado</a></li>
        <li><a href="/es/robotics/paper_reading_wall_oss/">WALL-OSS — Razonamiento encarnado y control de robots</a></li>
      </ul>
      <h3>Parte 5 · Modelos de mundo y aprendizaje de video-acción</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        Actualizaciones en curso
      </span>
      <h3>Parte 6 · Evaluación unificada y resumen de investigación</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        Actualizaciones en curso
      </span>
    </section>
  </div>

</div>
