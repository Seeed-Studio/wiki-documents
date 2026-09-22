---
description: "Capítulo 6 del Curso para Principiantes de Inteligencia Incorporada de Seeed: ensambla el reBot Arm, ensambla la fuente de alimentación, cablea el brazo y enciéndelo por primera vez."
title: Capítulo 6 - Ensamblaje, fuente de alimentación y primer encendido
keywords:
  - reBot
  - Brazo robótico
  - Ensamblaje
  - Fuente de alimentación
  - Cableado
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_6
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 6 · Práctica</span>
    <h2>6. Ensamblaje, fuente de alimentación y primer encendido</h2>
    <p>
      Capítulo 6 del Curso para Principiantes de Inteligencia Incorporada de Seeed: ensambla el reBot Arm,
      ensambla la fuente de alimentación, cablea el brazo y enciéndelo por primera vez.
    </p>
    <div className="hero-actions">
      <a href="#assembly">Ensamblaje</a>
      <a href="#wiring">Cableado</a>
      <a href="#power">Encendido</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>6.1 Ensamblaje del brazo robótico</span>
    <span>6.2 Ensamblaje de la fuente de alimentación</span>
    <span>6.3 Cableado del brazo robótico</span>
    <span>6.4 Requisitos de la fuente de alimentación del brazo robótico</span>
    <span>6.5 Encendido del brazo robótico</span>
  </div>
</section>

<RebotCourseNav />

## 6.1 Ensamblaje del brazo robótico

<section id="assembly" className="section-card">
  <div className="section-title">
    <span>Paso 1</span>
    <h2>6.1 Ensamblaje del brazo robótico</h2>
  </div>

- [Ensamblaje del brazo robótico reBot DM](https://www.youtube.com/watch?v=rfTQoFCfnMc&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=15)
- [Ensamblaje del brazo robótico reBot RS](https://www.youtube.com/watch?v=Bv60NPO0TRo&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=6)

</section>

## 6.2 Ensamblaje de la fuente de alimentación

<section id="power-supply-assembly" className="section-card">
  <div className="section-title">
    <span>Paso 2</span>
    <h2>6.2 Ensamblaje de la fuente de alimentación</h2>
  </div>

- [Ensamblaje de la fuente de alimentación reBot DM](https://www.youtube.com/watch?v=DHFA2UfQzUo&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=3)
- [Ensamblaje de la fuente de alimentación reBot RS](https://www.youtube.com/watch?v=5GitUWT9gx0)

</section>

## 6.3 Cableado del brazo robótico

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>Paso 3</span>
    <h2>6.3 Cableado del brazo robótico</h2>
  </div>

### Cableado de reBot DM

Video: [Cableado del brazo robótico reBot DM](https://www.youtube.com/watch?v=vVxCOfu5ZCE)

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Conecta el brazo robótico a la placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-01.jpg" alt="Connect the robotic arm to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Conexión de la fuente de alimentación: cable XT60 a XT30.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-02.jpg" alt="Power supply connection: XT60 to XT30 cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Conecta el cable XT60 a XT30 a la placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-03.jpg" alt="Connect the XT60 to XT30 cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Conecta USB2CAN al conector GH1.25 de 2 pines.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-04.jpg" alt="Connect USB2CAN to GH1.25 2-pin" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Conecta el otro extremo del cable GH1.25 de 2 pines a la placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-05.jpg" alt="Connect the other end of the GH1.25 2-pin cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Conecta USB2CAN al ordenador mediante un cable de datos Type-C.</h4>

:::warning
El motor 1 y el motor 2 deben estar conectados entre sí.
:::

</div>
</section>
</div>

### Cableado de reBot RS

Video: [Cableado del brazo robótico reBot RS](https://www.youtube.com/watch?v=llSa6qn3yrY&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=8)

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Conecta el brazo robótico a la placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-06.jpg" alt="Connect the robotic arm to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Conexión de la fuente de alimentación: cable XT60 a XT30.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-07.jpg" alt="Power supply connection: XT60 to XT30 cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Conecta el cable XT60 a XT30 a la placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-08.jpg" alt="Connect the XT60 to XT30 cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Conecta CANable al cable GH1.25 de 2 pines.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-09.jpg" alt="Connect CANable to GH1.25 2-pin cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Conecta el otro extremo del cable GH1.25 de 2 pines a la placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-10.jpg" alt="Connect the other end of the GH1.25 2-pin cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Conecta CANable al ordenador.</h4>

:::warning
El motor 1 y el motor 2 deben estar conectados entre sí.
:::

</div>
</section>
</div>

</section>

## 6.4 Requisitos de la fuente de alimentación del brazo robótico

<section id="power-requirements" className="section-card">
  <div className="section-title">
    <span>Alimentación</span>
    <h2>6.4 Requisitos de la fuente de alimentación del brazo robótico</h2>
  </div>

El requisito de fuente de alimentación para reBot DM es de 24 V, y el requisito de fuente de alimentación para reBot RS es de 48 V.

A continuación se muestran nuestras instrucciones recomendadas para el uso de la fuente de alimentación:

:::danger ¡Configura correctamente el selector de voltaje!
Si el voltaje de tu hogar es 220 V, ajusta el interruptor DIP en el lateral de la fuente de alimentación a 230 V. Si el voltaje de tu hogar es 110 V, ajusta el interruptor DIP de tu fuente de alimentación a 115 V.
:::

| 220V → 230V | 110V → 115V |
| :---: | :---: |
| ![Interruptor DIP de la fuente de alimentación 220V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-11.png) | ![Interruptor DIP de la fuente de alimentación 110V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-12.png) |

</section>

## 6.5 Encendido del brazo robótico

<section id="power" className="section-card">
  <div className="section-title">
    <span>Encendido</span>
    <h2>6.5 Encendido del brazo robótico</h2>
  </div>

Para el brazo robótico reBot DM, las luces de todas las articulaciones se encenderán y se pondrán en rojo; en ese momento, el brazo robótico está en estado deshabilitado.

El brazo robótico reBot RS no presenta diferencias con respecto a cuando está apagado, y solo se puede determinar a través de la comunicación con el motor.

</section>

</div>
