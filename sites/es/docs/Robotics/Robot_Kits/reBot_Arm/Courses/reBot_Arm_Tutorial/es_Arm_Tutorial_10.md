---
description: "Capítulo 10 del Curso para Principiantes en Inteligencia Incorporada de Seeed: qué es LeRobot, división del trabajo entre brazo líder/seguidor, la arquitectura de plugins Robot y Teleoperator, el flujo de datos de cámara/CAN/brazo y las diferencias de configuración entre DM y RS."
title: Capítulo 10 - Arquitectura del Sistema LeRobot y Brazo reBot
keywords:
  - reBot
  - LeRobot
  - Teleoperation
  - Leader Arm
  - Follower Arm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_10
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 10 · Teoría</span>
    <h2>10. LeRobot y la Arquitectura del Sistema de Brazo reBot</h2>
    <p>
      Capítulo 10 del Curso para Principiantes en Inteligencia Incorporada de Seeed: qué es LeRobot,
      la división del trabajo entre brazo líder/seguidor, la arquitectura de plugins Robot y Teleoperator,
      el flujo de datos de cámara/CAN/brazo y las diferencias de configuración entre DM y RS.
    </p>
    <div className="hero-actions">
      <a href="#por-que-lerobot">Why LeRobot</a>
      <a href="#brazo-lider-seguidor">Arms</a>
      <a href="#plugins">Plugins</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>10.1 Qué es LeRobot y por qué lo necesitamos</span>
    <span>10.2 Brazo líder y brazo seguidor</span>
    <span>10.3 Arquitectura de plugins</span>
    <span>10.4 Visión general del flujo de datos: cámaras, CAN y el brazo</span>
    <span>10.5 Cuatro flujos de trabajo: cuatro usos del mismo sistema</span>
    <span>10.6 Diferencias de configuración entre DM y RS</span>
  </div>
</section>

<RebotCourseNav />

## 10.1 Qué es LeRobot y por qué lo necesitamos

<section id="why-lerobot" className="section-card">
  <div className="section-title">
    <span>Motivación</span>
    <h2>10.1 Qué es LeRobot y por qué lo necesitamos</h2>
  </div>

En el Capítulo 9 establecimos el marco conceptual del aprendizaje por imitación: demostración, datos, modelo, bucle cerrado. Pero para ejecutar realmente este flujo de trabajo, inmediatamente te encuentras con una serie de problemas triviales pero específicos:

- ¿Cómo alinear las marcas de tiempo entre los fotogramas de la cámara y los ángulos articulares?
- ¿Qué formato debe usarse para almacenar imágenes, estados y acciones para docenas de Episodios?
- ¿Cómo compartir y descargar modelos entrenados en Hugging Face Hub?
- ¿Cómo pueden las tres bases de código — recopilación de datos, entrenamiento e inferencia — compartir la misma lógica de control del brazo?

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-01.png" alt="Reinventing the wheel" />
</div>

Si todo el mundo reinventara la rueda, el aprendizaje de robots seguiría siendo un juego para unos pocos laboratorios. LeRobot es el framework de código abierto que Hugging Face creó para resolver esto: implementa algoritmos probados de aprendizaje por imitación (ACT, smolVLA, GR00T, etc.) en PyTorch, define un formato estándar de conjunto de datos de robots y proporciona una cadena de herramientas completa de línea de comandos desde la teleoperación y la recopilación de datos hasta el entrenamiento y el despliegue en robots reales.

</section>

## 10.2 Brazo líder y brazo seguidor

<section id="leader-follower" className="section-card">
  <div className="section-title">
    <span>Brazos</span>
    <h2>10.2 Brazo líder y brazo seguidor</h2>
  </div>

- El primer paso del aprendizaje por imitación es "el humano demuestra al robot". La pregunta es: ¿cómo "enseña" un humano a un brazo con un alcance de 750 mm a realizar movimientos de agarre precisos? Guiarlo físicamente con la mano es a la vez peligroso y produce datos no suaves.
- La respuesta es la teleoperación maestro-esclavo: usar un brazo de demostración estructuralmente similar, ligero y flexible como "dispositivo de entrada": el humano mueve el líder y el seguidor sigue en tiempo real.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-02.png" alt="Leader arm and follower arm" />
</div>

- **Brazo líder (leader / brazo de enseñanza):** el brazo que la persona sostiene y mueve. **Solo lee posiciones**: lee sus propios ángulos articulares en tiempo real y los envía al ordenador. No necesita generar fuerza, por lo que puede usar una solución de servos ligera y de bajo coste.
- **Brazo seguidor (follower / brazo de ejecución):** el brazo que realmente realiza el trabajo. Recibe los ángulos articulares del Líder y acciona sus motores articulares de alta potencia para seguirlos, completando el agarre real.

Esto es como la relación entre la palanca de control en la cabina de una grúa y el propio brazo de la grúa. El operador mueve la palanca ligera (Líder), mientras que el trabajo pesado lo realiza el brazo exterior (Seguidor). Cada movimiento de la palanca se "traduce" en tiempo real en movimientos del brazo de la grúa.

</section>

## 10.3 Arquitectura de plugins

<section id="plugins" className="section-card">
  <div className="section-title">
    <span>Plugins</span>
    <h2>10.3 Arquitectura de plugins: Robot Plugin y Teleoperator Plugin</h2>
  </div>

Primer principio de diseño de LeRobot: el framework no conoce ningún hardware específico; solo define interfaces. El hardware se conecta como plugins.

| | **Robot Plugin** | **Teleoperator Plugin** |
| :--- | :--- | :--- |
| Rol | Ejecutor: recibe acciones, informa del estado | Entrada: solo lee la intención de movimiento humana |
| Dirección de datos | Bidireccional (lectura + escritura) | Unidireccional (solo lectura) |
| Métodos principales | `get_observation()`, `send_action()` | `get_action()` |
| En el sistema reBot | Brazo esclavo seguidor B601 | Brazo maestro líder reBot 102 |

Distinción en una frase: **el Robot se encarga de "hacer", el Teleoperator se encarga de "leer".**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-03.png" alt="Plugin architecture" />
</div>

</section>

## 10.4 Visión general del flujo de datos: cámaras, CAN y el brazo

<section id="data-flow" className="section-card">
  <div className="section-title">
    <span>Flujo de datos</span>
    <h2>10.4 Visión general del flujo de datos: cámaras, CAN y el brazo</h2>
  </div>

En un ciclo de control, ¿qué datos fluyen, en qué formato y a través de qué ruta? Un ordenador conecta tres tipos de periféricos, que corresponden a tres rutas de datos:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-04.png" alt="Data flow overview" />
</div>

</section>

## 10.5 Cuatro flujos de trabajo: cuatro usos del mismo sistema

<section id="workflows" className="section-card">
  <div className="section-title">
    <span>Flujos de trabajo</span>
    <h2>10.5 Cuatro flujos de trabajo: cuatro usos del mismo sistema</h2>
  </div>

Entendiendo el hardware y el flujo de datos, cuando veas los cuatro flujos de trabajo en los capítulos posteriores de esta etapa, verás que **usan los mismos plugins y la misma configuración; solo cambian las herramientas de LeRobot que se llaman**:

| Flujo de trabajo | Herramienta LeRobot |
|---|---|
| Teleoperation | `lerobot-teleoperate` |
| Data Collection | `lerobot-record` |
| Training | `lerobot-train` |
| Inference & Deployment | `lerobot-record` (con una policy) o un script de inferencia |

- **La teleoperación y la recopilación de datos usan la misma cadena de hardware**: la única diferencia es si se registran los datos o no.
- **El despliegue de inferencia y la recopilación de datos son imágenes especulares estructurales:** durante la recopilación, las acciones provienen del Líder (humano); durante la inferencia, las acciones provienen del modelo (checkpoint). Todo lo demás (lectura de cámara, retroalimentación de State, comandos CAN, límites de seguridad) es idéntico. Este es el beneficio de una arquitectura de plugins: cambiar el tomador de decisiones no requiere cambiar el sistema.
- **Teleoperación y despliegue de inferencia:** ambos tienen todo el hardware activo y controlan el brazo en línea; la diferencia es "quién toma las decisiones": en teleoperación, el tomador de decisiones es el humano; en inferencia, es el modelo.

</section>

## 10.6 Diferencias de configuración entre DM y RS

<section id="dm-vs-rs" className="section-card">
  <div className="section-title">
    <span>Config</span>
    <h2>10.6 Diferencias de configuración entre DM y RS</h2>
  </div>

|  **Elemento de comparación**  |                    **B601-DM**                   |                **B601-RS**               |
| :-------------------: | :----------------------------------------------: | :--------------------------------------: |
|     Conexión al PC     |           Puente serie Damiao USB2CAN           |   Adaptador USB-CAN compatible con SocketCAN   |
|      Nombre del dispositivo      |          `/dev/ttyACM*` (Serial Bridge)          |   `can0` (interfaz de red SocketCAN)   |
|     `--robot.type`    |             `seeed_b601_dm_follower`             |         `seeed_b601_rs_follower`         |
|     `--robot.port`    | `/dev/ttyACM0` (dependiendo de la enumeración real) | `can0` (dependiendo de la enumeración real) |
| `--robot.can_adapter` |                     `damiao`                     |                `socketcan`               |


Una frase que resume la relación entre las dos versiones: **el mismo esqueleto, dos conjuntos de "corazones y nervios".** La estructura mecánica, la denominación de las articulaciones y los flujos de trabajo del software de alto nivel son idénticos; todas las diferencias están en los motores y la cadena de comunicación CAN, que también es el parámetro más comúnmente mal configurado en todos los comandos de LeRobot.

Esto significa que todos los comandos posteriores de teleoperación, recopilación de datos, entrenamiento y evaluación son idénticos para ambos brazos: solo necesitas sustituir el nombre de brazo correspondiente.

</section>

</div>
