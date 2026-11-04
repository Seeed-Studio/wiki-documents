---
description: "Capítulo 2 del curso para principiantes de SO-ARM Physical AI — conoce el proyecto de código abierto SO-ARM, la diferencia entre SO-ARM100 y SO-ARM101, las ediciones Standard y Pro, y su hardware y software de código abierto."
title: Capítulo 2 - Hardware y proyecto de código abierto
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - brazo robótico
  - código abierto
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_2
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 1 · Capítulo 2 · Teoría y práctica</span>
    <h2>2. Conociendo el hardware de SO-ARM y el proyecto de código abierto</h2>
    <p>
      Capítulo 2 del curso para principiantes de SO-ARM Physical AI — conoce el proyecto de código abierto SO-ARM, la diferencia entre SO-ARM100 y SO-ARM101, las ediciones Standard y Pro, y su hardware y software de código abierto.
    </p>
    <div className="hero-actions">
      <a href="#what-is-so-arm">Qué es SO-ARM</a>
      <a href="#versions">Versiones</a>
      <a href="#open-source">Código abierto</a>
    </div>
  </div>
</section>

## 2.1 Qué es SO-ARM

<section id="what-is-so-arm" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>2.1 Qué es SO-ARM</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM100 / SO-ARM101" />
</div>

SO-ARM es un brazo robótico de bajo costo y 100% de código abierto diseñado para el aprendizaje de IA y robótica. El SO-ARM100 original fue creado por [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100) como brazo líder-seguidor de referencia del proyecto [LeRobot](https://github.com/huggingface/lerobot) de Hugging Face, y Seeed Studio lo convierte en kits completos — SO-ARM100 y el más nuevo SO-ARM101 — con piezas impresas en 3D verificadas, servos de bus Feetech STS3215, placas de control de servo y soporte completo de wiki.

Un kit SO-ARM siempre contiene **dos brazos**:

- Un **brazo líder** (negro): el brazo de enseñanza ligero que sostienes en la mano. Sus servos solo leen posiciones — es el "dispositivo de entrada" de las demostraciones.
- Un **brazo seguidor** (blanco): el brazo de ejecución. Sus servos se alimentan a plena tensión y realmente agarran y mueven objetos.

Cada brazo se impulsa con 6 servos de bus serie STS3215 (5 articulaciones + 1 pinza), encadenados en un bus de 3 hilos y conectados al ordenador mediante una placa USB de control de servos. De este proyecto de código abierto puedes aprender desde cero:

- Impresión 3D, ensamblaje y configuración de servos de bus;
- Asignación de IDs de servo, calibración y depuración;
- Teleoperación maestro-esclavo;
- Recolección, visualización y gestión de datasets LeRobot;
- Entrenamiento y evaluación en robot real de ACT, SmolVLA y políticas de difusión;
- Entrenamiento cooperativo de doble brazo;
- Ajuste fino de VLA con NVIDIA Isaac GR00T y despliegue en Jetson;
- VLA sin código en la plataforma SenseCraft Robotics.

Su objetivo principal es permitir aprender y validar algoritmos de inteligencia encarnada con hardware verdaderamente económico, abierto y reproducible.

</section>

## 2.2 SO-ARM100 vs. SO-ARM101

<section id="versions" className="section-card">
  <div className="section-title">
    <span>Versiones</span>
    <h2>2.2 SO-ARM100 vs. SO-ARM101</h2>
  </div>

Hay dos generaciones del brazo:

- **SO-ARM100** — la versión original, que hizo famoso el diseño;
- **SO-ARM101** — la versión actual, con clips de cable para un cableado más ordenado y un brazo líder rediseñado.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="Servos y cableado del SO-ARM101" />
</div>

Las dos versiones son muy compatibles:

:::tip
El kit recomendado hoy es el SO-ARM101. Los códigos de SO100 y SO101 son compatibles — los usuarios de SO100 pueden usar directamente los parámetros y comandos de SO101 (`so101_follower` / `so101_leader` en LeRobot), y los archivos de impresión de SO101 son totalmente compatibles con la instalación del kit de motores de SO100.
:::

La diferencia clave a cuidar es la **relación de engranajes de los servos del brazo líder**: las tres primeras articulaciones (L1-L3) del líder de SO-ARM101 usan relaciones distintas a las de SO-ARM100, por lo que la configuración de servos debe seguir la tabla de tu versión (ver Capítulo 6).

</section>

## 2.3 Edición Standard vs. Pro

<section id="standard-pro" className="section-card">
  <div className="section-title">
    <span>Ediciones</span>
    <h2>2.3 Edición Standard vs. Pro</h2>
  </div>

El kit SO-ARM101 viene en dos ediciones que comparten estructura y difieren en par de servos y alimentación:

| Edición | Servos del seguidor | Servos del líder | Alimentación |
| :--- | :--- | :--- | :--- |
| **SO101 Standard** | ST-3215-C001 7.4V (relación 1:345) ×6 | serie ST-3215 7.4V | Ambos brazos a 5V |
| **SO101 Pro** | serie ST-3215 12V (más par, p. ej. C018 / C047) | serie ST-3215 7.4V | Líder 5V, seguidor 12V |

:::danger
Las reglas de alimentación importan. La edición Standard alimenta ambos brazos a 5V. En la Pro, el líder debe usar siempre 5V y el seguidor siempre 12V — conectar el voltaje equivocado puede quemar los servos. Verifica la etiqueta del adaptador antes de cada encendido.
:::

</section>

## 2.4 Parámetros principales

<section id="parameters" className="section-card">
  <div className="section-title">
    <span>Especificaciones</span>
    <h2>2.4 Parámetros principales</h2>
  </div>

| Producto | Kit SO-ARM100 | Kit SO-ARM101 |
| :--- | :--- | :--- |
| **Enlace de compra** | [Bazaar](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) |
| **Grados de libertad** | 5 + pinza | 5 + pinza |
| **Actuadores** | Servo de bus Feetech STS3215 ×6 por brazo | Servo de bus Feetech STS3215 ×6 por brazo |
| **Comunicación** | Bus serie (TTL) vía placa USB | Bus serie (TTL) vía placa USB |
| **Alimentación** | 5V (Standard) / 5V+12V (Pro) | 5V (Standard) / 5V+12V (Pro) |
| **Estructura** | Piezas impresas en PLA+, STL abierto | Piezas impresas con clips de cable, STL abierto |
| **Ecosistema** | LeRobot, GR00T, SenseCraft Robotics | LeRobot, GR00T, SenseCraft Robotics |

</section>

## 2.5 Hardware y software de código abierto

<section id="open-source" className="section-card">
  <div className="section-title">
    <span>Código abierto</span>
    <h2>2.5 Hardware y software de código abierto</h2>
  </div>

SO-ARM es abierto desde la estructura imprimible hasta la pila de software:

- **Diseño del brazo y archivos STL**: <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio/SO-ARM100</a>
- **Fork verificado de LeRobot usado en este curso**: <a href="https://github.com/Seeed-Projects/lerobot" target="_blank" rel="noopener noreferrer">Seeed-Projects/lerobot</a>
- **Framework original**: <a href="https://github.com/huggingface/lerobot" target="_blank" rel="noopener noreferrer">huggingface/lerobot</a>
- **Herramienta de depuración de servos**: <a href="https://github.com/Seeed-Projects/Seeed_RoboController" target="_blank" rel="noopener noreferrer">Seeed-Projects/Seeed_RoboController</a>
- **Modelo base VLA**: <a href="https://huggingface.co/nvidia/GR00T-N1.5-3B" target="_blank" rel="noopener noreferrer">NVIDIA Isaac GR00T en Hugging Face</a>

:::tip
Este curso instala LeRobot desde el fork de Seeed-Projects, verificado con los kits SO-ARM. El repositorio original cambia rápido — argumentos de comandos, formatos de dataset y dependencias pueden diferir de los capítulos de aquí.
:::

</section>

</div>
