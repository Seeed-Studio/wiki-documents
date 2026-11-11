---
description: "Explora los métodos fundamentales detrás de ACT, la serie π y los modelos VLA generalistas, con tutoriales de LeRobot sobre demostraciones, entrenamiento y despliegue."
title: "Análisis Profundo de Artículos de IA Física y Reproducción Práctica"
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
updatedAt: '2026-11-04'
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
    <h1 id="paper-reading-title">Análisis Profundo de Artículos de IA Física y Reproducción Práctica</h1>
    <p className="paper-reading-lead">Explora la investigación de vanguardia en IA Física, desglosa modelos y algoritmos clave con brazos robóticos de Seeed</p>
    <p>Un <strong>curso que siempre será gratuito</strong>, cuidadosamente desarrollado por el equipo de SeeedStudio AI Robotics, acompañado del <strong>brazo robótico reBot 100% de código abierto, disponible para uso comercial y reproducción</strong>. ¡Complétalo y conviértete en la próxima persona experta en robótica!</p>
    <ul className="paper-reading-badges" aria-label="Course features">
      <li>Siempre gratuito</li>
      <li>100% código abierto · Uso comercial</li>
      <li>Práctico · Reproducible</li>
    </ul>
  </section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ Sin código · Sin configuración de entorno</span>
    <p className="sensecraft-banner__title">Omite la configuración: ejecuta el brazo reBot y LeRobot desde una sola app</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics es la plataforma sin código de Seeed para el SO-ARM101, reBot Arm 102 + B601-RS y B601-DM. Conecta los brazos, calibra, recopila demostraciones, entrena y ejecuta inferencias desde una interfaz guiada, sin entorno de Python ni terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Flujo de trabajo guiado en 6 pasos</li>
      <li>✅ Entrenamiento en la nube — sin GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en/download?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir a SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/es/sensecraft_robotics/">Guía de software</a>
  </div>
</div>

  <div className="paper-reading-directory">
    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-hands-on-title">
      <h2 id="paper-reading-hands-on-title">Despliegue Práctico</h2>
      <p>Comienza con la preparación de la plataforma y la recopilación de datos, sigue los pasos para entrenar y desplegar ACT, luego aprende a cambiar de ACT a otras políticas y domina gradualmente el flujo de trabajo de reproducción para diferentes algoritmos.</p>
      <ol className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_hardware_and_teleoperation/">Configuración de Hardware y Software</a></li>
        <li><a href="/es/robotics/hands_on_task_design/">Diseño de Tareas y Planificación de Demostraciones</a></li>
        <li><a href="/es/robotics/hands_on_camera_recording/">Recopilación de Datos Multivista</a></li>
        <li><a href="/es/robotics/hands_on_dataset_quality/">Calidad de Datos: Estructura, Sincronización y Validación</a></li>
        <li><a href="/es/robotics/hands_on_act_training/">Entrenamiento del Modelo ACT</a></li>
        <li><a href="/es/robotics/hands_on_act_deployment/">Despliegue en el Robot y Evaluación del Rendimiento</a></li>
        <li><a href="/es/robotics/hands_on_algorithm_switching/">Cambio de Políticas y Ejecución de Tareas</a></li>
      </ol>
    </section>

    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-papers-title">
      <h2 id="paper-reading-papers-title">Análisis Profundo de Artículos</h2>
      <p>Lee artículos por tema, desde políticas básicas de aprendizaje por imitación hasta modelos de visión-lenguaje-acción.</p>
      <h3>Parte 1 · Fragmentación de Acciones y Políticas Multitarea</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_act/">ACT — Manipulación Bimanual de Bajo Costo</a></li>
        <li><a href="/es/robotics/paper_reading_multi_task_dit/">LBM / MultiTask DiT — Preentrenamiento Multitarea</a></li>
      </ul>
      <h3>Parte 2 · Modelos VLA Ligeros y Despliegue Eficiente</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_smolvla/">SmolVLA — Modelos de Visión-Lenguaje-Acción Asequibles</a></li>
        <li><a href="/es/robotics/paper_reading_evo1/">Evo-1 — VLA Ligero</a></li>
      </ul>
      <h3>Parte 3 · Modelos Fundacionales de Robots π</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_pi0/">π₀ — Control de Robots de Propósito General</a></li>
        <li><a href="/es/robotics/paper_reading_pi0_fast/">π₀-FAST — Tokenización de Acciones Eficiente</a></li>
        <li><a href="/es/robotics/paper_reading_pi05/">π₀.₅ — Generalización en Mundo Abierto</a></li>
      </ul>
      <h3>Parte 4 · VLA Generalistas y Adaptación Entre Cuerpos</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_gr00t_n1/">NVIDIA GR00T — Adaptación y Fine-Tuning</a></li>
        <li><a href="/es/robotics/paper_reading_eo1/">EO-1 — Preentrenamiento Multimodal Intercalado</a></li>
        <li><a href="/es/robotics/paper_reading_wall_oss/">WALL-OSS — Razonamiento Incorporado y Control de Robots</a></li>
        <li><a href="/es/robotics/paper_reading_lingbot_vla2/">LingBot-VLA 2.0 — Acciones Entre Cuerpos y Percepción Futura</a></li>
        <li><a href="/es/robotics/paper_reading_dm05/">DM0.5 — Contexto Histórico y Alineación de Trayectorias</a></li>
      </ul>
      <h3>Parte 5 · Modelos del Mundo y Aprendizaje de Video-Acción</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/es/robotics/paper_reading_vla_jepa/">VLA-JEPA — Supervisión por Video y Modelos del Mundo Latentes</a></li>
        <li><a href="/es/robotics/paper_reading_lingbot_va/">LingBot-VA — Modelado Causal del Mundo y Control de Robots</a></li>
        <li><a href="/es/robotics/paper_reading_gr00t_2/">GR00T 2 — Modelado Conjunto de Mundo y Acción</a></li>
      </ul>
      <h3>Parte 6 · Evaluación Unificada y Resumen de Investigación</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        Actualizaciones en curso
      </span>
    </section>
  </div>

</div>
