---
description: "Capítulo 1 del curso para principiantes de SO-ARM Physical AI — entiende qué son los robots y los brazos robóticos, los grados de libertad, y la diferencia entre control tradicional, aprendizaje por imitación y VLA."
title: Capítulo 1 - Robots e IA Física
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - brazo robótico
  - robot
  - Physical AI
  - DOF
  - aprendizaje por imitación
  - VLA
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_1
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 1 · Capítulo 1 · Teoría</span>
    <h2>1. Conociendo los robots y la IA Física</h2>
    <p>
      Capítulo 1 del curso para principiantes de SO-ARM Physical AI — entiende qué son los robots y los brazos robóticos, los grados de libertad, y la diferencia entre control tradicional, aprendizaje por imitación y VLA.
    </p>
    <div className="hero-actions">
      <a href="#objectives">Objetivos de aprendizaje</a>
      <a href="#paradigms">Paradigmas de control</a>
    </div>
  </div>
</section>

## 1.1 Objetivos de aprendizaje

<section id="objectives" className="section-card">
  <div className="section-title">
    <span>Objetivos</span>
    <h2>1.1 Objetivos de aprendizaje</h2>
  </div>

Al completar este capítulo, deberías ser capaz de:

1. Explicar los conceptos básicos de robots y brazos robóticos.
2. Identificar articulaciones, eslabones, grados de libertad y efectores finales en un brazo robótico.
3. Entender la percepción, la toma de decisiones y el control en un sistema robótico.
4. Distinguir entre brazos robóticos industriales y de inteligencia encarnada.
5. Distinguir entre control programado tradicional, aprendizaje por imitación y VLA.
6. Describir la composición de un sistema completo de brazo robótico con inteligencia encarnada.
7. Entender el papel del SO-ARM en todo el sistema de inteligencia encarnada.

</section>

## 1.2 ¿Qué es un robot?

<section id="robot" className="section-card">
  <div className="section-title">
    <span>Fundamentos</span>
    <h2>1.2 ¿Qué es un robot?</h2>
  </div>

Un robot no es simplemente una máquina con forma humana. Desde una perspectiva funcional, un robot es un sistema que puede:

- Adquirir información sobre sí mismo o su entorno;
- Realizar cómputo o toma de decisiones basándose en objetivos;
- Cambiar su propio estado o el entorno mediante actuadores.

Un sistema robótico suele abstraerse así:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-01.png" alt="Abstracción de un sistema robótico" />
</div>

Por ejemplo, un robot de escritorio de agarre necesita completar el siguiente proceso:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-02.png" alt="Proceso de un robot de agarre de escritorio" />
</div>

Por tanto, un robot no solo debe "poder moverse", sino también formar un bucle cerrado que funcione de forma continua.

### La diferencia entre robots y máquinas comunes

Las máquinas comunes suelen funcionar de forma fija. Por ejemplo:

- Un ventilador sigue girando tras encenderse;
- Una cinta transportadora corre a velocidad fija;
- Un motor común gira al recibir voltaje.

Los robots, en cambio, suelen tener mayor percepción de estado, control programático y capacidad de ejecución de tareas. Por ejemplo, un brazo robótico puede controlar varias articulaciones para moverse a distintas posturas según posiciones objetivo diferentes.

</section>

## 1.3 ¿Qué es un brazo robótico?

<section id="arm" className="section-card">
  <div className="section-title">
    <span>Fundamentos</span>
    <h2>1.3 ¿Qué es un brazo robótico?</h2>
  </div>

Un brazo robótico es un mecanismo compuesto por múltiples articulaciones y eslabones. Mediante el movimiento coordinado de varias articulaciones, lleva el efector final a una posición y orientación específicas, completando tareas de agarre, manipulación, ensamblaje, pulido y soldadura.

Un brazo robótico puede entenderse simplemente como:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-03.png" alt="Brazo robótico" />
</div>

Los brazos robóticos comparten ciertas similitudes con los brazos humanos, pero no necesariamente imitan la anatomía humana — su número de articulaciones, disposición y espacio de trabajo se diseñan según los requisitos de la tarea.

### Qué son los grados de libertad

Los grados de libertad suelen abreviarse como DOF (Degree of Freedom). El DOF describe el número de direcciones independientes en las que puede moverse un sistema mecánico.

En el espacio tridimensional, la pose completa de un cuerpo rígido incluye:

- Traslación a lo largo de los ejes X, Y y Z;
- Rotación alrededor de los ejes X, Y y Z.

Por tanto, un objeto en el espacio 3D tiene como máximo 6 grados de libertad.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-04.png" alt="6 grados de libertad" />
</div>

Un brazo de seis grados de libertad suele poder controlar tanto la posición como la orientación del efector final en el espacio 3D. El SO-ARM100 / SO-ARM101 de este curso impulsa 5 articulaciones del brazo más una pinza con 6 servos de bus — 5 grados de libertad de rotación bastan para alcanzar cualquier punto de agarre en una mesa, y la pinza añade el grado de libertad de "agarrar / soltar".

:::note
Cinco grados de libertad no significa que el brazo pueda alcanzar cualquier posición con cualquier orientación. Un brazo robótico también está limitado por longitudes de eslabones, límites de articulación, singularidades y colisiones.
:::

</section>

## 1.4 Control tradicional, aprendizaje por imitación y VLA

<section id="paradigms" className="section-card">
  <div className="section-title">
    <span>Paradigmas</span>
    <h2>1.4 Control tradicional, aprendizaje por imitación y VLA</h2>
  </div>

Un brazo robótico puede obtener acciones por distintos métodos.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 1.5rem'}}>
  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Control programado tradicional</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-05.png" alt="Control programado tradicional" />
    </div>
    <p>Adecuado para posiciones fijas, flujos fijos y tareas repetitivas.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Aprendizaje por imitación</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-06.png" alt="Aprendizaje por imitación" />
    </div>
    <p>Una persona teleopera el brazo para completar una tarea y luego un modelo aprende de los datos de demostración. Adecuado para tareas de agarre, organización y operación continua.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>VLA</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-07.png" alt="VLA" />
    </div>
    <p>VLA usa información visual, lingüística y de acción para que el brazo complete tareas a partir de lenguaje natural.</p>
  </div>
</div>

Por ejemplo:

:::note
Pon el bloque rojo de la izquierda dentro de la caja.
:::

</section>

## 1.5 El papel del SO-ARM en el curso

<section id="role" className="section-card">
  <div className="section-title">
    <span>Plataforma práctica</span>
    <h2>1.5 El papel del SO-ARM en el curso</h2>
  </div>

El SO-ARM es la plataforma práctica unificada de todo el curso. Más adelante la usaremos para:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM100 / SO-ARM101" />
</div>

- Ensamblaje, cableado y configuración de servos de bus (Etapa 2);
- Calibración y teleoperación de líder y seguidor (Etapa 3);
- Recolección de datos de demostración con cámaras (Etapa 3);
- Entrenamiento e implementación de aprendizaje por imitación ACT (Etapa 3);
- Entrenamiento cooperativo de doble brazo (Etapa 3, optativo);
- Ajuste fino e inferencia de VLA con Isaac GR00T (Etapa 4);
- VLA sin código en la plataforma SenseCraft Robotics (Etapa 4).

</section>

</div>
