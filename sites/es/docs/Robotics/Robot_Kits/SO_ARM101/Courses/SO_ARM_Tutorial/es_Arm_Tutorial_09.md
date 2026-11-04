---
description: "Capítulo 9 del curso para principiantes de SO-ARM Physical AI — qué es LeRobot, la división de trabajo líder/seguidor, la arquitectura de plugins Robot y Teleoperator, el flujo de datos de cámaras/bus serie/brazos y lo esencial de la configuración del SO-ARM."
title: Capítulo 9 - Arquitectura del sistema LeRobot y SO-ARM
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - teleoperación
  - brazo líder
  - brazo seguidor
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_9
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 9 · Teoría</span>
    <h2>9. Arquitectura del sistema LeRobot y SO-ARM</h2>
    <p>
      Capítulo 9 del curso para principiantes de SO-ARM Physical AI — qué es LeRobot, la división de trabajo líder/seguidor, la arquitectura de plugins Robot y Teleoperator, el flujo de datos de cámaras/bus serie/brazos y lo esencial de la configuración del SO-ARM.
    </p>
    <div className="hero-actions">
      <a href="#why-lerobot">Por qué LeRobot</a>
      <a href="#leader-follower">Brazos</a>
      <a href="#config">Configuración</a>
    </div>
  </div>
</section>

## 9.1 ¿Qué es LeRobot y por qué lo necesitamos?

<section id="why-lerobot" className="section-card">
  <div className="section-title">
    <span>Motivación</span>
    <h2>9.1 ¿Qué es LeRobot y por qué lo necesitamos?</h2>
  </div>

En el Capítulo 8 establecimos el marco conceptual del aprendizaje por imitación: demostración, datos, modelo, bucle cerrado. Pero para ejecutar ese pipeline, de inmediato aparece una ristra de problemas triviales pero concretos:

- ¿Cómo alinear las marcas de tiempo entre fotogramas de cámara y ángulos de articulación?
- ¿En qué formato almacenar imágenes, estados y acciones de docenas de episodios?
- ¿Cómo compartir y descargar modelos entrenados en Hugging Face Hub?
- ¿Cómo hacen los tres códigos — recolección, entrenamiento e inferencia — para compartir la misma lógica de control del brazo?

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-01.png" alt="Reinventar la rueda" />
</div>

Si cada uno reinventa la rueda, el aprendizaje en robótica seguiría siendo un juego de pocos laboratorios. LeRobot es el framework de código abierto que Hugging Face construyó para resolver esto — implementa algoritmos de imitación probados (ACT, SmolVLA, GR00T, etc.) en PyTorch, define un formato estándar de dataset robótico y aporta una cadena completa de herramientas de línea de comandos, desde teleoperación y recolección hasta entrenamiento y despliegue. El SO-ARM nació precisamente junto a LeRobot como su hardware de referencia de bajo costo — están diseñados el uno para el otro.

</section>

## 9.2 Brazo líder y brazo seguidor

<section id="leader-follower" className="section-card">
  <div className="section-title">
    <span>Brazos</span>
    <h2>9.2 Brazo líder y brazo seguidor</h2>
  </div>

- El primer paso del aprendizaje por imitación es que "un humano demuestre al robot". La pregunta es: ¿cómo "enseña" un humano movimientos precisos a un brazo? Guirarlo con la mano es peligroso y produce datos poco suaves.
- La respuesta es la teleoperación maestro-esclavo: usar un brazo de demostración estructuralmente idéntico, ligero y de movimiento libre como "dispositivo de entrada" — la persona mueve el líder y el seguidor sigue en tiempo real.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-02.png" alt="Brazo líder y brazo seguidor" />
</div>

- **Brazo líder (leader / de enseñanza)**: el brazo que la persona sostiene y mueve. **Solo lee posiciones** — lee sus ángulos en tiempo real y los envía al ordenador. No necesita ejercer fuerza, así que usa los mismos STS3215 con poca carga y relaciones menores donde la mano humana hace el trabajo.
- **Brazo seguidor (follower / de ejecución)**: el brazo que trabaja de verdad. Recibe los ángulos del líder e impulsa sus servos de mayor par y alimentación completa para seguir, completando el agarre real.

Es como la relación entre la palanca de control de la cabina de una grúa y el brazo de la grúa misma. El operador mueve la palanca ligera (líder) mientras el trabajo pesado lo hace el brazo de afuera (seguidor). Cada movimiento de la palanca se "traduce" en tiempo real a movimiento de la grúa.

Un kit SO-ARM trae ambos en la misma caja — por eso es una plataforma de enseñanza tan natural.

</section>

## 9.3 Arquitectura de plugins: plugin Robot y plugin Teleoperator

<section id="plugins" className="section-card">
  <div className="section-title">
    <span>Plugins</span>
    <h2>9.3 Arquitectura de plugins: plugin Robot y plugin Teleoperator</h2>
  </div>

El primer principio de diseño de LeRobot: el framework no conoce hardware específico; solo define interfaces. El hardware se conecta como plugins.

| | **Plugin Robot** | **Plugin Teleoperator** |
| :--- | :--- | :--- |
| Rol | Ejecutor: recibe acciones, reporta estado | Entrada: solo lee la intención de movimiento humano |
| Dirección de datos | Bidireccional (lectura + escritura) | Unidireccional (solo lectura) |
| Métodos núcleo | `get_observation()`, `send_action()` | `get_action()` |
| En el sistema SO-ARM | `so101_follower` (seguidor blanco) | `so101_leader` (líder negro) |

Una frase para distinguirlos: **el Robot se encarga de "hacer", el Teleoperator de "leer".**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-03.png" alt="Arquitectura de plugins" />
</div>

</section>

## 9.4 Flujo de datos: cámaras, bus serie y brazos

<section id="data-flow" className="section-card">
  <div className="section-title">
    <span>Flujo de datos</span>
    <h2>9.4 Flujo de datos: cámaras, bus serie y brazos</h2>
  </div>

En un ciclo de control, ¿qué datos fluyen, en qué formato, por qué ruta? Un ordenador conecta tres tipos de periféricos, correspondientes a tres rutas:

1. **Cámaras → ordenador**: fotogramas USB (vistas frontal y lateral);
2. **Líder → ordenador**: posiciones de articulación por bus serie (`/dev/ttyACM1`) — la intención humana;
3. **Ordenador → seguidor**: posiciones objetivo por bus serie (`/dev/ttyACM0`) — con el estado del propio seguidor leído en el mismo bus.

El ordenador está en el centro: lee cámaras + líder, escribe al seguidor, sella todo con marcas de tiempo y (al grabar) escribe una fila alineada de observación/estado/acción por fotograma.

</section>

## 9.5 Cuatro flujos de trabajo: cuatro usos del mismo sistema

<section id="workflows" className="section-card">
  <div className="section-title">
    <span>Flujos</span>
    <h2>9.5 Cuatro flujos de trabajo: cuatro usos del mismo sistema</h2>
  </div>

Entendido el hardware y el flujo de datos, al mirar los cuatro flujos de esta etapa verás que **usan los mismos plugins y la misma configuración; solo cambia la herramienta de LeRobot invocada**:

| Flujo | Herramienta LeRobot |
|---|---|
| Teleoperación | `lerobot-teleoperate` |
| Recolección de datos | `lerobot-record` |
| Entrenamiento | `lerobot-train` |
| Inferencia y despliegue | `lerobot-record` (con política) o `lerobot-rollout` |

- **Teleoperación y recolección comparten la misma cadena de hardware** — la única diferencia es si se graban datos.
- **Despliegue de inferencia y recolección son imágenes especulares**: durante la recolección las acciones vienen del líder (humano); en la inferencia, del modelo (checkpoint). Todo lo demás (lectura de cámaras, retroalimentación de estado, comandos de servo, límites de seguridad) es idéntico. Ese es el beneficio de la arquitectura de plugins — cambiar al decisor no exige cambiar el sistema.
- **Teleoperación e inferencia**: ambas activan todo el hardware y controlan el brazo en línea; la diferencia es "quién decide" — en la teleoperación, la persona; en la inferencia, el modelo.

</section>

## 9.6 Esenciales de la configuración del SO-ARM

<section id="config" className="section-card">
  <div className="section-title">
    <span>Configuración</span>
    <h2>9.6 Esenciales de la configuración del SO-ARM</h2>
  </div>

| **Ítem** | **Brazo seguidor** | **Brazo líder** |
| :--- | :--- | :--- |
| Tipo LeRobot | `--robot.type=so101_follower` | `--teleop.type=so101_leader` |
| Puerto típico | `/dev/ttyACM0` | `/dev/ttyACM1` |
| Clave de puerto | `--robot.port` | `--teleop.port` |
| Clave de ID | `--robot.id` | `--teleop.id` |
| Alimentación (kit Standard) | 5V | 5V |
| Alimentación (kit Pro) | 12V | 5V |

Notas que evitan los errores más comunes:

- **SO100 y SO101 comparten código.** `so101_leader` y `so100_leader` son la misma implementación; los usuarios de SO100 usan los mismos comandos.
- **El `id` guarda el archivo de calibración.** Usa el mismo `--robot.id` / `--teleop.id` en teleoperación, grabación y evaluación para el mismo brazo físico — si no, LeRobot buscará un archivo que no existe.
- **El orden de puertos sigue el orden de conexión** en Linux y Jetson: primera placa = `ttyACM0`, segunda = `ttyACM1`. Verifica con `lerobot-find-port` antes de cada sesión.

El sistema en una frase: **mismo esqueleto, dos roles.** El líder lee, el seguidor escribe, las cámaras miran, y el ordenador lo cose todo con marcas de tiempo. Todos los comandos posteriores reutilizan exactamente esta configuración.

</section>

</div>
