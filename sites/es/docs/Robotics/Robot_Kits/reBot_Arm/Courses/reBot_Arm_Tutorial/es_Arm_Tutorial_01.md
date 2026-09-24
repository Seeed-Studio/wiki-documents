---
description: "Capítulo 1 del Curso para Principiantes de Inteligencia Incorporada de Seeed: comprende qué son los robots y los brazos robóticos, los grados de libertad y la diferencia entre control tradicional, aprendizaje por imitación y VLA."
title: Capítulo 1 - Robots e Inteligencia Incorporada
keywords:
  - reBot
  - Robotic Arm
  - Robot
  - Embodied Intelligence
  - DOF
  - Imitation Learning
  - VLA
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_1
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 1 · Capítulo 1 · Teoría</span>
    <h2>1. Conociendo los Robots y la Inteligencia Incorporada</h2>
    <p>
      Capítulo 1 del Curso para Principiantes de Inteligencia Incorporada de Seeed: comprende qué son los robots y
      los brazos robóticos, los grados de libertad y la diferencia entre control tradicional, aprendizaje por imitación
      y VLA.
    </p>
    <div className="hero-actions">
      <a href="#objectives">Objetivos de aprendizaje</a>
      <a href="#paradigms">Paradigmas de control</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>1.1 Objetivos de aprendizaje</span>
    <span>1.2 ¿Qué es un robot?</span>
    <span>1.3 ¿Qué es un brazo robótico?</span>
    <span>1.4 Control tradicional, aprendizaje por imitación y VLA</span>
    <span>1.5 El papel del reBot Arm en el curso</span>
  </div>
</section>

<RebotCourseNav />

## 1.1 Objetivos de aprendizaje

<section id="objectives" className="section-card">
  <div className="section-title">
    <span>Objetivos</span>
    <h2>1.1 Objetivos de aprendizaje</h2>
  </div>

Después de completar este capítulo, deberías ser capaz de:

1. Explicar los conceptos básicos de los robots y los brazos robóticos.
2. Identificar articulaciones, eslabones, grados de libertad y efectores finales en un brazo robótico.
3. Comprender la percepción, la toma de decisiones y el control en un sistema robótico.
4. Distinguir entre brazos robóticos industriales y brazos robóticos de inteligencia incorporada.
5. Distinguir entre control tradicional por programa, aprendizaje por imitación y VLA.
6. Describir la composición de un sistema completo de brazo robótico de inteligencia incorporada.
7. Comprender el papel del reBot Arm en todo el sistema de inteligencia incorporada.

</section>

## 1.2 ¿Qué es un robot?

<section id="robot" className="section-card">
  <div className="section-title">
    <span>Fundamentos</span>
    <h2>1.2 ¿Qué es un robot?</h2>
  </div>

Un robot no es simplemente una máquina que se parece a un humano. Desde una perspectiva funcional, un robot es un sistema que puede:

- Adquirir información sobre sí mismo o sobre su entorno;
- Realizar cómputo o toma de decisiones en función de objetivos;
- Cambiar su propio estado o el entorno circundante mediante actuadores.

Un sistema robótico normalmente se puede abstraer como:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-01.png" alt="Robot system abstraction" />
</div>

Por ejemplo, un robot de sobremesa para agarre necesita completar el siguiente proceso:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-02.png" alt="Desktop grasping robot process" />
</div>

Por lo tanto, un robot no solo necesita “poder moverse”, sino que también debe ser capaz de formar un bucle cerrado en funcionamiento continuo.

### La diferencia entre robots y máquinas ordinarias

Las máquinas ordinarias a menudo trabajan de una manera fija. Por ejemplo:

- Un ventilador eléctrico sigue girando después de encenderse;
- Una cinta transportadora funciona a una velocidad fija;
- Un motor común gira después de recibir voltaje.

Los robots, por otro lado, suelen tener capacidades más fuertes de percepción de estado, control por programa y ejecución de tareas. Por ejemplo, un brazo robótico puede controlar múltiples articulaciones para moverse a diferentes posturas según distintas posiciones objetivo.

</section>

## 1.3 ¿Qué es un brazo robótico?

<section id="arm" className="section-card">
  <div className="section-title">
    <span>Fundamentos</span>
    <h2>1.3 ¿Qué es un brazo robótico?</h2>
  </div>

Un brazo robótico es un mecanismo robótico compuesto por múltiples articulaciones y eslabones. Mediante el movimiento coordinado de múltiples articulaciones, lleva el efector final a una posición y postura especificadas, y completa tareas como agarre, manipulación, ensamblaje, pulido y soldadura.

Un brazo robótico se puede entender de forma sencilla como:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-03.png" alt="Robotic arm" />
</div>

Los brazos robóticos comparten algunas similitudes con los brazos humanos. Sin embargo, un brazo robótico no necesariamente imita la anatomía humana. Su número de articulaciones, disposición y espacio de trabajo se diseñan de acuerdo con los requisitos de la tarea.

### Qué son los grados de libertad

Los grados de libertad se denotan comúnmente como DOF (Degree of Freedom). DOF describe el número de direcciones independientes en las que un sistema mecánico puede moverse.

En el espacio tridimensional, la pose completa de un cuerpo rígido incluye:

- Traslación a lo largo de los ejes X, Y y Z;
- Rotación alrededor de los ejes X, Y y Z.

Por lo tanto, un objeto en el espacio 3D tiene como máximo 6 grados de libertad.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-04.png" alt="6 degrees of freedom" />
</div>

Un brazo robótico de seis grados de libertad normalmente puede controlar la posición y la postura del efector final en el espacio 3D.

Cabe señalar que:

:::note
Seis grados de libertad no significa que el brazo robótico tenga solo seis motores, ni significa que necesariamente se puedan alcanzar todas las posiciones y posturas.
:::

Un brazo robótico también se ve afectado por factores como las longitudes de los eslabones, los límites de las articulaciones, las singularidades y las colisiones.

</section>

## 1.4 Control tradicional, aprendizaje por imitación y VLA

<section id="paradigms" className="section-card">
  <div className="section-title">
    <span>Paradigmas</span>
    <h2>1.4 Control tradicional, aprendizaje por imitación y VLA</h2>
  </div>

Un brazo robótico puede obtener acciones mediante diferentes métodos.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 1.5rem'}}>
  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Control tradicional por programa</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-05.png" alt="Traditional program control" />
    </div>
    <p>Adecuado para posiciones fijas, flujos de trabajo fijos y tareas repetitivas.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Aprendizaje por imitación</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-06.png" alt="Imitation learning" />
    </div>
    <p>Primero, una persona teleopera el brazo robótico para completar una tarea, y luego un modelo aprende a partir de los datos de demostración. Adecuado para tareas de agarre, organización y operación continua.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>VLA</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-07.png" alt="VLA" />
    </div>
    <p>VLA utiliza información visual, de lenguaje y de acción para permitir que el brazo robótico complete tareas basadas en lenguaje natural.</p>
  </div>
</div>

Por ejemplo:

:::note
Pon el bloque rojo de la izquierda dentro de la caja.
:::

</section>

## 1.5 El papel del reBot Arm en el curso

<section id="role" className="section-card">
  <div className="section-title">
    <span>Plataforma práctica</span>
    <h2>1.5 El papel del reBot Arm en el curso</h2>
  </div>

reBot Arm es la plataforma práctica unificada para todo el curso. Más adelante, lo utilizaremos para completar:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-08.png" alt="The role of reBot Arm" />
</div>

</section>

</div>
