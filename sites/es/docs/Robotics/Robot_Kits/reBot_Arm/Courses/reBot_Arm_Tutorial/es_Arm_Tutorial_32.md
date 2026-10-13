---
description: "Capítulo 32 del Curso de Introducción a la IA Física de Seeed: el modelo del robot en ROS2: URDF y Xacro, enlaces y articulaciones, los atributos visual / de colisión / inerciales, el árbol de transformaciones TF, robot_state_publisher, los marcos de la cámara y del efector final, y cómo el modelo digital sigue al brazo real."
title: Capítulo 32 - URDF, TF y modelos de robot
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - ROS2
  - URDF
  - Xacro
  - TF
  - Transform Tree
  - robot_state_publisher
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_32
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_32/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 7 · Capítulo 32 · Teoría</span>
    <h2>32. URDF, TF y modelos de robot</h2>
    <p>
      Capítulo 32 del Curso de Introducción a la IA Física de Seeed: el modelo del robot en ROS2: URDF y Xacro, enlaces y articulaciones, los atributos visual / de colisión / inerciales, el árbol de transformaciones TF, robot_state_publisher, los marcos de la cámara y del efector final, y cómo el modelo digital sigue al brazo real.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#links">Enlaces y articulaciones</a>
      <a href="#tf">El árbol de transformaciones TF</a>
      <a href="#frames">Marcos de la cámara y del efector final</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 32.1 URDF y Xacro: el "ADN digital" y el "plano avanzado" del robot

Así como construir una casa requiere planos de construcción, en ROS2, para permitir que un ordenador controle un brazo, primero tienes que decirle al ordenador cómo es el brazo.

- **URDF (Unified Robot Description Format):**
    - **Qué es:** Un archivo de texto basado en XML: el "plano de diseño de fábrica" del robot. Registra en detalle cuántas piezas tiene el robot, sus dimensiones y cómo se conectan las articulaciones.
    - **Punto doloroso:** El URDF nativo es prolijo y está lleno de código duplicado. Por ejemplo, para un coche con cuatro ruedas, puede que tengas que copiar y pegar el código de la rueda cuatro veces.
- **Xacro (lenguaje de macros):**
    - **Evolución y características:** Es el "plano mejorado" de URDF. Introduce ideas de programación, admitiendo **variables**, **cálculo matemático** y **reutilización de código**.
    - **Ejemplo:** Como construir con LEGO: puedes escribir un "módulo de rueda" genérico en Xacro y luego pasar diferentes parámetros de coordenadas para generar las cuatro ruedas en una sola línea, simplificando enormemente el código del modelo.

> Entonces, ¿qué se dibuja exactamente en este "plano digital"? El núcleo son los dos componentes principales del robot: enlaces y articulaciones.

<a id="links"></a>

## 32.2 Link y Joint: el esqueleto del robot

- **Link (enlace/hueso):** Las partes rígidas del robot, como el brazo superior, el antebrazo y la palma de una persona.
- **Joint (articulación/tendón):** La parte móvil que conecta dos Links, como el codo y la muñeca de una persona. Determina cómo se mueven los huesos entre sí.

### Tipos de articulaciones comunes

- **Revolute (articulación rotacional):** Como una bisagra, solo puede girar dentro de un ángulo limitado (por ejemplo, el codo de un brazo).
- **Continuous (articulación de rotación continua):** Puede girar 360 grados indefinidamente (por ejemplo, la rueda de un coche).
- **Prismatic (articulación deslizante):** Solo puede trasladarse a lo largo de una línea recta (por ejemplo, una puerta corredera o el raíl de una impresora 3D).
- **Fixed (articulación fija):** Dos partes soldadas rígidamente juntas, completamente inmóviles (por ejemplo, fijar una cámara al extremo del brazo).

> El esqueleto por sí solo no es suficiente. Para que el robot parezca real en entornos de simulación física (como Mujoco), también necesitamos dar a cada "hueso (Link)" tres atributos.

## 32.3 Visual, Collision e Inertial: los tres atributos de un hueso

En URDF, debemos describir tres características de cada Link al ordenador:

- **Visual (atributo de apariencia—para que lo vean los humanos):**
    - **Qué es:** La "piel y ropa" del robot, normalmente un modelo 3D detallado (como archivos `.dae` o `.stl`). Es solo para la apariencia y determina cómo se renderiza el robot en el ordenador.
- **Collision (atributo de colisión—para que lo calcule el ordenador):**
    - **Qué es:** La "hitbox" del robot. Para evitar que los cálculos del ordenador se disparen, el modelo de colisión suele ser mucho más simple que el modelo visual (por ejemplo, simplificar una mano mecánica compleja en un cilindro o caja simples).
- **Inertial (atributo de inercia—para el motor físico):**
    - **Qué es:** Contiene información física como la masa y el centro de masa.
    - **Importancia:** Si quieres hacer **compensación de gravedad para el brazo** en un robot real, o comprobar en simulación si se volcará, este atributo debe rellenarse con extrema precisión; de lo contrario, el movimiento del robot parecerá sin peso o simplemente saldrá volando.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-32/ch32-01.png" alt="URDF y Xacro, tipos de articulaciones y los atributos visual, de colisión e inerciales" />
</div>

> Ahora el modelo digital del robot está construido. Pero a medida que se mueve, las posiciones relativas de sus articulaciones cambian a cada momento. ¿Cómo sabe el ordenador dónde está actualmente la "mano" del robot? Esto nos lleva a un concepto extremadamente importante en ROS2: el árbol de transformaciones TF.

<a id="tf"></a>

## 32.4 Árbol de transformaciones TF: el "propioceptor" del robot

- **Qué es:** TF significa Transform. Es un sistema en forma de árbol que registra dinámicamente la relación espacial (a qué distancia, cuántos grados de rotación) de cada parte y sensor del robot entre sí.
- **Ejemplo:** Cierra los ojos ahora mismo. Aunque no puedas ver, aún puedes tocarte la nariz con precisión. Eso es porque tu cerebro tiene un "árbol TF": dónde está la nariz en la cabeza, dónde está la cabeza en los hombros, dónde está la mano con respecto a los hombros.
- **Característica:** Mientras sepamos cuántos grados ha girado actualmente cada articulación, el sistema TF puede, mediante multiplicación de matrices, seguir la cadena y calcular la posición del extremo del brazo (mano) con respecto a la base.

> Entonces, ¿quién calcula y publica silenciosamente este árbol TF entre bastidores?

## 32.5 Robot State Publisher (RSP): el centro que conecta plano y realidad

- **Función:** Es el "traductor jefe" en el sistema del robot.
- **Cómo funciona:** En una mano sostiene el plano URDF estático que escribimos; en la otra recibe la información de ángulo de articulación (Joint States) que los motores envían en tiempo real. Combina ambos y, tras complejos cálculos matemáticos, publica continuamente el último árbol de transformaciones TF en toda la red ROS2. Con él, RViz (software de visualización) puede dibujar la pose en tiempo real del robot.

<a id="frames"></a>

## 32.6 Marcos de la cámara y del efector final: ¿por qué calculamos coordenadas?

En tareas de agarre con brazos, normalmente necesitamos manejar dos marcos de coordenadas extremadamente críticos:

- **Marco del efector final:** El punto central de la garra del brazo.
- **Marco de la cámara:** El "ojo" responsable de "ver" el objetivo.

**Caso de uso real:** Supón que la cámara ve una manzana sobre la mesa y calcula que "la manzana está a 30 cm directamente delante de la cámara". Sin embargo, el cerebro del brazo solo sabe dónde está su propia garra; no tiene idea de dónde están esos 30 cm de la cámara. ¡Aquí es donde entra **TF**! A través del árbol TF, el sistema puede convertir rápidamente "la posición de la manzana en el marco de la cámara" en "la posición de la manzana en el marco de la base del brazo", guiando al brazo para agarrar con precisión.

## 32.7 Modelo digital y brazo real

URDF y Xacro dibujan el plano del robot; Visual/Collision/Inertial le dan leyes físicas reales; y TF y RSP permiten que este cuerpo mantenga una autoconciencia absoluta mientras se mueve. Al dominar este conjunto de modelos, establecemos **una correspondencia perfecta entre el mundo digital del ordenador y el hardware físico real**, sentando una base sólida para la integración del controlador del robot real (reBot Arm) y la planificación de movimiento del próximo capítulo.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-32/ch32-02.png" alt="El árbol de coordenadas TF, robot_state_publisher y las transformaciones de marcos" />
</div>

### Transición de capítulo: del "fantasma digital" al "cuerpo de acero"

Si el Capítulo 31 sentó el "sistema nervioso" que transmite señales para el robot**,** y el Capítulo 32 remodeló su preciso "cuerpo físico" y su "percepción espacial" en el mundo digital, entonces a estas alturas toda nuestra preparación teórica está completa.

Pero el modelo en el ordenador sigue siendo una "marioneta" sin vida: no sabe cuántos grados han girado los motores reales, ni puede ejercer ninguna fuerza sobre el mundo físico real.

**¡Es hora de romper el muro dimensional entre lo digital y la realidad!**

En el próximo Capítulo 33 [Práctica]: Integración de reBot Arm con ROS2, conectaremos un brazo físico real (reBot Arm) a la red ROS2 que hemos construido. Aplicaremos Topic, Service y Action aprendidos en el Capítulo 31, combinados con el modelo URDF construido en el Capítulo 32, y te enseñaremos cómo escribir un "cerebro de controlador" que envuelva los comandos de hardware de bajo nivel en interfaces estándar, permitiendo que el modelo digital virtual y el cuerpo real de acero bailen en perfecta sincronización.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-32/ch32-03.png" alt="Transición de capítulo desde la red ROS2 y el modelo del robot hasta el brazo real" />
</div>

</div>
