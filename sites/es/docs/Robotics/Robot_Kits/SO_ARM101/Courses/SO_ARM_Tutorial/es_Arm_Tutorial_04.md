---
description: "Capítulo 4 del curso para principiantes de SO-ARM Physical AI — cómo articulaciones, eslabones y grados de libertad forman un brazo, qué es un servo de bus, y cómo funcionan juntos el bus serie STS3215, los IDs de servo y la placa de control."
title: Capítulo 4 - Fundamentos de brazos robóticos y servos de bus
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - brazo robótico
  - servo
  - STS3215
  - servo de bus
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_4
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_4/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 4 · Teoría</span>
    <h2>4. Fundamentos de brazos robóticos y servos de bus</h2>
    <p>
      Capítulo 4 del curso para principiantes de SO-ARM Physical AI — cómo articulaciones, eslabones y grados de libertad forman un brazo, qué es un servo de bus, y cómo funcionan juntos el bus serie STS3215, los IDs de servo y la placa de control.
    </p>
    <div className="hero-actions">
      <a href="#arm-anatomy">Anatomía del brazo</a>
      <a href="#bus-servo">Servo de bus</a>
      <a href="#wiring">Cableado y alimentación</a>
    </div>
  </div>
</section>

## 4.1 Repaso: articulaciones, eslabones y grados de libertad

<section id="arm-anatomy" className="section-card">
  <div className="section-title">
    <span>Anatomía</span>
    <h2>4.1 Repaso: articulaciones, eslabones y grados de libertad</h2>
  </div>

En el Capítulo 1 definimos un brazo robótico como "múltiples articulaciones y eslabones trabajando juntos". Ahora asignémoslo concretamente al SO-ARM. Cada brazo tiene cinco articulaciones de rotación más una pinza paralela:

| Articulación | Nombre | Qué hace |
| :--- | :--- | :--- |
| 1 | Rotación de hombro (base) | Gira todo el brazo izquierda / derecha |
| 2 | Elevación de hombro | Sube / baja el brazo superior |
| 3 | Codo | Sube / baja el antebrazo |
| 4 | Cabeceo de muñeca | Inclina la pinza arriba / abajo |
| 5 | Giro de muñeca | Rota la pinza sobre su eje |
| 6 | Pinza | Abre / cierra los dedos |

Cinco grados de libertad de rotación posicionan y orientan la pinza en cualquier punto del espacio de trabajo del brazo, y la pinza actúa como **efector final** — la parte que toca la pieza.

Cada articulación se impulsa con un servo de bus Feetech STS3215. En total, un par líder-seguidor de SO-ARM usa **12 servos** — ese es todo el sistema de actuación del robot.

</section>

## 4.2 Qué es un actuador servo

<section id="servo" className="section-card">
  <div className="section-title">
    <span>Actuadores</span>
    <h2>4.2 Qué es un actuador servo</h2>
  </div>

Un **actuador** convierte comandos en movimiento. Los brazos robóticos suelen usar motores eléctricos con algún tipo de retroalimentación. Un **servo** (servomotor) empaqueta tres cosas en una sola carcasa:

1. Un **motor DC** que produce rotación;
2. Una **caja reductora** que cambia velocidad por par;
3. Un **sensor de posición** (potenciómetro o encoder magnético) más un circuito de control que mueve el motor hacia el ángulo comandado.

Envíale a un servo una posición objetivo y se moverá allí y la mantendrá — sin controlador externo. Ese comportamiento de "moverse a un ángulo y mantener" es justo lo que necesita una articulación.

### Por qué importa la relación de engranajes

La relación de la caja reductora determina cuánto gira la salida por rotación del motor — y cuánto par ganas. SO-ARM usa servos STS3215 con distintas relaciones según la articulación:

| Modelo de servo | Relación | Se usa en |
| :--- | :--- | :--- |
| ST-3215-C044 (7.4V) | 1:191 | Líder SO101 L1, L3 |
| ST-3215-C001 (7.4V) | 1:345 | Líder SO101 L2 |
| ST-3215-C046 (7.4V) | 1:147 | Líder SO101 L4–L6 |
| ST-3215-C001 (7.4V) / C018 (12V) / C047 (12V) | 1:345 | Seguidor F1–F6 |

- **Relación alta (1:345)** = más par, menos velocidad — necesaria donde el brazo levanta su propio peso y la carga (articulaciones del seguidor, hombro L2 del líder).
- **Relación baja (1:147 / 1:191)** = más rápido y ligero — en articulaciones del líder que la mano humana mueve.

:::note
Como el líder de SO-ARM101 usa relaciones distintas en L1-L3 respecto al SO-ARM100, la configuración de servos del Capítulo 6 debe coincidir exactamente con tu versión del kit. Un servo con una relación inesperada producirá calibración y seguimiento erróneos.
:::

</section>

## 4.3 El bus serie: un cable, seis servos

<section id="bus-servo" className="section-card">
  <div className="section-title">
    <span>Comunicación</span>
    <h2>4.3 El bus serie: un cable, seis servos</h2>
  </div>

Los servos de hobby tradicionales necesitan cada uno su propio cable de señal (PWM). El STS3215 es un **servo de bus serie**: cada servo se conecta a un bus compartido de 3 hilos (GND, VCC, DATA) y se encadena al siguiente.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="Cableado del bus de servos SO-ARM101" />
</div>

Dos conceptos lo hacen funcionar:

- **ID de servo**: cada servo en un bus tiene un ID (1-6 en SO-ARM, acorde a su articulación). Los comandos en el bus llevan el ID de destino, así que los seis servos comparten un cable sin confusión. Durante la configuración (Capítulo 6), los IDs se graban de a un servo por vez.
- **Baud rate (velocidad de transmisión)**: los servos y la placa deben coincidir en la velocidad de comunicación; la herramienta de configuración escribe un baud rate consistente en cada servo.

El protocolo del bus también permite **leer** la posición actual, temperatura, voltaje y carga de cada servo — así es como el brazo líder reporta el movimiento humano durante la teleoperación, y cómo el estado del seguidor se graba en los datasets.

:::danger
Como todos los servos comparten un bus, grabar un ID afecta a todos los servos con ese ID. Si hay IDs duplicados (por ejemplo, dos servos respondiendo como ID 4), reescribir el ID 4 cambia **ambos**. Por eso los IDs siempre se programan con un solo servo conectado a la vez — y por eso la herramienta de depuración del Capítulo 7 pide desconectar primero los demás servos.
:::

</section>

## 4.4 La placa de control, el cableado y la alimentación

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>Cableado</span>
    <h2>4.4 La placa de control, el cableado y la alimentación</h2>
  </div>

Cada brazo tiene una pequeña **placa de control de servos LeRobot**: por un lado el zócalo de 3 hilos del bus de servos, por el otro un conector USB-C hacia el ordenador y un jack DC para la alimentación.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp" alt="Instalación de la placa de control" />
</div>

Reglas que evitan las fallas de hardware más comunes:

- **El USB-C solo transmite datos.** El cable USB no alimenta los servos — la fuente DC también debe conectarse para que algo se mueva.
- **El voltaje debe coincidir con el tipo de servo**: 5V para las versiones STS3215 de 7.4V, 12V para las de 12V. El brazo líder siempre usa motores de 7.4V (fuente de 5V). En el kit Pro el seguidor usa fuente de 12V.
- **Apaga la alimentación antes de conectar o desconectar** cables de servo, USB o conectores de corriente.
- El primer servo (ID 1, base) se conecta a la placa; cada servo siguiente se conecta al anterior. Si el LED de un servo está apagado, el cable anterior puede estar flojo.

</section>

## 4.5 Resumen

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>4.5 Resumen</h2>
  </div>

- Un SO-ARM = 5 articulaciones de rotación + pinza, un servo de bus STS3215 por articulación.
- Un servo es motor + reductora + retroalimentación de posición; la relación de engranajes cambia velocidad por par.
- Los seis servos comparten un bus serie de 3 hilos; los IDs los distinguen y las posiciones se pueden leer.
- La placa de control tiende un puente entre USB (datos) y DC (alimentación) hacia el bus — ambos deben conectarse, con el voltaje correcto.

En el próximo capítulo configuramos el entorno de software y luego configuramos los motores y ensamblamos los brazos.

</section>

</div>
