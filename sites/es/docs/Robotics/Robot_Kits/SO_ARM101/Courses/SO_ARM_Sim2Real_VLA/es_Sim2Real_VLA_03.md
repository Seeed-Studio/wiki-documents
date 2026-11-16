---
description: "Capítulo 3 del curso Sim-to-Real VLA de SO-ARM101 — qué es Sim-to-Real: definición, por qué importa y la brecha que aprenderás a cerrar."
title: Capítulo 3 - ¿Qué es Sim-to-Real?
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Sim-to-Real
  - Isaac
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_3
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 1 · Capítulo 3 · Overview</span>
    <h2>3. ¿Qué es Sim-to-Real?</h2>
    <p>
      Entrenar en simulación, desplegar en hardware real — y entender la
      brecha entre ambos que toda técnica práctica del curso trabaja por
      cerrar.
    </p>
    <div className="hero-actions">
      <a href="#defined">Definición</a>
      <a href="#why">Por qué importa</a>
      <a href="#gap">La brecha</a>
      <a href="#summary">Resumen</a>
    </div>
  </div>
</section>

## Definición de Sim-to-Real

<section id="defined" className="section-card">
  <div className="section-title">
    <span>Definición</span>
    <h2>Definición de Sim-to-Real</h2>
  </div>

Sim-to-Real (de simulación a realidad) es el proceso de entrenar una
política robótica en simulación y desplegarla en hardware del mundo real.

En la robótica con IA moderna, gran parte del entrenamiento se realiza en
simulación. Frente a un robot real, la simulación genera grandes volúmenes
de datos a mucho menor coste, evita el desgaste del hardware y reduce los
riesgos experimentales. Completado el entrenamiento, el objetivo es
transferir la política aprendida a un robot físico y que complete la misma
tarea en el mundo real.

En esta ruta usaremos entornos de simulación NVIDIA Isaac, combinaremos
teleoperación y datos sintéticos, entrenaremos modelos
Vision-Language-Action como Isaac GR00T N1.7 y, finalmente, desplegaremos
las políticas en el SO-ARM101.

</section>

## Por qué importa Sim-to-Real

<section id="why" className="section-card">
  <div className="section-title">
    <span>Economía de los datos</span>
    <h2>Por qué importa Sim-to-Real</h2>
  </div>

Los datos son la base del aprendizaje robótico, pero recopilarlos a gran
escala en el mundo real suele ser caro y lento.

Piensa en una tarea que requiera decenas de miles de demostraciones o
intentos de agarre. Recolectarlos en un robot físico llevaría semanas,
desgastaría el hardware y aumentaría el riesgo de fallos que dañen el
robot o su entorno. En simulación, muchos robots virtuales corren en
paralelo y generan datos de forma continua y segura.

Por eso la simulación es un componente clave del desarrollo robótico
moderno: muchas políticas de vanguardia se entrenan primero en simulación
antes de transferirse al hardware.

El propio robot también influye: cuanto más preciso y predecible es un
robot, menor es la diferencia entre simulación y realidad. El SO-ARM101
encaja bien en este curso porque es exactamente la plataforma que apunta
el SO-101 Workshop de NVIDIA: misma configuración de articulaciones, misma
convención de calibración y checkpoints de referencia entrenados en la
misma plataforma — elimina toda una clase de desajuste de transferencia
antes de empezar.

</section>

## La brecha Sim-to-Real

<section id="gap" className="section-card">
  <div className="section-title">
    <span>La brecha</span>
    <h2>La brecha Sim-to-Real</h2>
  </div>

Aunque la simulación ha avanzado mucho, nunca reproduce el mundo real a la
perfección.

La diferencia de rendimiento entre simulación y realidad se conoce como la
**brecha Sim-to-Real**.

Por ejemplo, las cámaras simuladas no suelen capturar todos los efectos
de la variación de iluminación, el desenfoque de movimiento, la distorsión
óptica o el ruido del sensor. Los actuadores simulados son más idealizados
que los motores reales, que sufren fricción, latencia y otras limitaciones
físicas. Los contactos, los objetos deformables y las variaciones del
entorno también son difíciles de modelar con exactitud.

Por eso una política perfecta en simulación puede seguir fallando en un
robot real.

Reducir la brecha es uno de los retos centrales de la robótica con IA. A lo
largo del curso practicaremos teleoperación, generación de datos en
simulación, aumento de datasets y entrenamiento con GR00T para mejorar el
rendimiento real.

</section>

## Resumen

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Idea clave</span>
    <h2>Resumen</h2>
  </div>

Sim-to-Real es un flujo central de la robótica con IA moderna: los robots
aprenden eficientemente en simulación y aplican esas habilidades en el
mundo físico.

La simulación reduce drásticamente el coste de entrenar y experimentar,
pero las diferencias siempre existen. Entenderlas — y aprender a
minimizarlas — es un paso esencial para construir sistemas robóticos
fiables.

Siguiente: [Capítulo 4 — Introducción del SO-ARM101](es_Sim2Real_VLA_04.md).

</section>

</div>