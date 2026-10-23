---
description: "Prepárate para la reproducción práctica: listas de comprobación de hardware del ordenador y del reBot Arm, instalación del entorno LeRobot, configuración de cámara y CAN, y práctica de teleoperación líder–seguidor."
title: "Configuración de Hardware y Software"
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - LeRobot
  - Teleoperation
  - Paper Deep-Dive
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
  - SO-ARM101
  - Hugging Face
  - Arm
  - Robotics
  - Hands-on Deployment
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_hardware_and_teleoperation
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_hardware_and_teleoperation/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-hardware-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · DESPLIEGUE PRÁCTICO</span>
  <h1 id="paper-reading-hardware-title">Configuración de Hardware &amp; Software</h1>
  <p className="paper-reading-lead">Prepara el hardware y el software, establece la teleoperación líder–seguidor y prepárate para la recopilación de datos, el entrenamiento de modelos y la reproducción del artículo.</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Lista de comprobación de hardware</li>
    <li>Configuración del entorno</li>
    <li>Configuración líder–seguidor</li>
    <li>Práctica de teleoperación</li>
  </ul>
</section>

## Configuración de Hardware

### Ordenador: Elige una plataforma

Elige una de las siguientes plataformas de cómputo según el equipo del que dispongas.

| Hardware requerido | Enlace | Cantidad | Notas |
| --- | --- | :---: | --- |
| Sobremesa u ordenador portátil | Aporta el tuyo propio | 1 | Ubuntu 22.04 nativo; GPU RTX 4080 o superior con al menos 12 GB de VRAM; al menos 16 GB de memoria del sistema. |
| NVIDIA Jetson AGX Thor 128G | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/NVIDIAr-Jetson-AGX-Thortm-Developer-Kit-Bundle.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/i/m/image__5.png" alt="NVIDIA Jetson AGX Thor Developer Kit Bundle" loading="lazy" width="128" height="104" /><span>Kit de desarrollo NVIDIA Jetson AGX Thor</span></a> | 1 | Una alternativa a la opción de sobremesa/portátil. |

### Hardware del reBot Arm

| Hardware requerido | Enlace | Cantidad | Notas |
| --- | --- | :---: | --- |
| reBot Arm B601 DM / RS | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/i/m/img_v3_0210p_aea42523-221d-4fb4-8730-9cb074a081ag_2.jpg" alt="reBot Arm B601-DM Assembled Bundle" loading="lazy" width="128" height="104" /><span>Kit ensamblado B601-DM</span></a><br /><a className="paper-reading-product-link" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/e/2/e26062401-gallery-2.jpg" alt="reBot Arm B601-RS Assembled Bundle" loading="lazy" width="128" height="104" /><span>Kit ensamblado B601-RS</span></a> | 1 | Elige DM o RS como brazo seguidor. Selecciona el adaptador de corriente y las abrazaderas de mesa correspondientes en las opciones del kit. |
| Brazo líder reBot Arm 102 | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Star-Arm-102-p-6765.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/7/-/7-100004723-star-arm-102.jpg" alt="Star Arm 102 for reBot B601-DM&amp;RS Leader Arm" loading="lazy" width="128" height="104" /><span>Brazo líder Star Arm 102</span></a><br /><a className="paper-reading-product-link" href="https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-313000002-ac-dc-power-adapter.jpg" alt="AC/DC Power Adapter 12V 2A 5-in-1" loading="lazy" width="128" height="104" /><span>Adaptador de corriente de 12 V / 2 A</span></a> | 1 | Se utiliza para la teleoperación líder–seguidor. El brazo y el adaptador de corriente son listados separados. |
| Cámara RGB USB-100°-720P (vista de muñeca) | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100079619-gallery_img_1_1.png" alt="RGB USB Camera-100°-720P" loading="lazy" width="128" height="104" /><span>RGB USB Camera-100°-720P</span></a> | 1 | Montar en la muñeca del robot. |
| Cámara RGB USB-100°-720P (vista fija) | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100079619-gallery_img_1_1.png" alt="RGB USB Camera-100°-720P" loading="lazy" width="128" height="104" /><span>RGB USB Camera-100°-720P</span></a> | 1 | Proporciona una vista externa fija. Utiliza el mismo modelo de cámara que la vista de muñeca. |
| Soporte para cámara de muñeca | [Modelo de soporte e instrucciones](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/README.md) | 1 | Imprímelo tú mismo; si no tienes impresora, pregunta al servicio de atención al cliente por la disponibilidad de un soporte de cortesía. |
| Soporte de cámara en tercera persona | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Robot-Arm-Camera-Mount-for-LeRobot-SO-10%26reBot-B601-p-7003.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/0/100006505-gallery_img_1.jpg" alt="Robot Arm Camera Mount for LeRobot SO-101 &amp; reBot B601" loading="lazy" width="128" height="104" /><span>Soporte de cámara para brazo robótico para LeRobot SO-101 &amp; reBot B601</span></a> | 1 | Fija la posición y el ángulo de la cámara externa. |

<div className="paper-reading-callout">

**Compra y montaje**

- Para reducir el coste de compra, puedes elegir un kit y seguir las detalladas instrucciones de montaje de Seeed: [Montaje DM](/es/rebot_b601_dm_getting_started/#guía-de-montaje-paso-1) o [Montaje RS](/es/rebot_b601_rs_getting_started/#guía-de-montaje).
- Las fuentes de alimentación enviadas por Seeed utilizan materiales ignífugos, lo que aumenta su coste. Como alternativa, compra una fuente de alimentación original Mean Well y configúrala para que cumpla los requisitos de tu brazo elegido.

</div>

### Sandbox de experimentos de Seeed (opcional)

El sandbox de experimentos es opcional. También puedes aprender y reproducir experimentos utilizando conjuntos de datos compartidos y modelos entrenados por otros usuarios.

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/seeed-sandbox.jpg" alt="Seeed experiment sandbox with a reBot Arm" loading="lazy" />
  <figcaption>Sandbox de experimentos de Seeed (opcional)</figcaption>
</figure>

---

## Entorno de Software

### Instalar LeRobot

Utiliza **Ubuntu 22.04 nativo**, en lugar de una máquina virtual o WSL. Sigue la guía de instalación para tu modelo de brazo.

| Modelo de brazo | Guía de instalación |
| --- | --- |
| SO-ARM 101 | [Instalar LeRobot para SO-ARM 101](/es/lerobot_so100m_new/#instalar-lerobot) |
| reBot Arm DM | [Instalar LeRobot para reBot-DM](/es/rebot_arm_b601_dm_lerobot/#instalar-lerobot) |
| reBot Arm RS | [Instalar LeRobot para reBot-RS](/es/rebot_arm_b601_rs_lerobot/#instalar-lerobot) |

### Configurar cámaras y CAN

Configura la comunicación y las cámaras para tu brazo. SO-ARM 101 utiliza una conexión serie; reBot DM / RS utilizan CAN como se describe en sus respectivas guías.

| Modelo de brazo | Configuración de comunicación | Configuración de cámara |
| --- | --- | --- |
| SO-ARM 101 | [Conexión serie, calibración y teleoperación](/es/lerobot_so100m_new/#teleoperación) | [Añadir cámaras](/es/lerobot_so100m_new/#añadir-cámaras) |
| reBot Arm DM | [Configuración de software y flujo de trabajo de calibración](/es/rebot_b601_dm_getting_started/#flujo-de-trabajo-de-configuración-de-software-y-calibración) | [Añadir cámaras](/es/rebot_arm_b601_dm_lerobot/#añadir-cámaras) |
| reBot Arm RS | [Configuración de software y flujo de trabajo de calibración](/es/rebot_b601_rs_getting_started/#flujo-de-trabajo-de-configuración-de-software-y-calibración) | [Añadir cámaras](/es/rebot_arm_b601_rs_lerobot/#añadir-cámaras) |

---

## Configuración Líder–Seguidor

### Seguidor y Líder

- **Líder**: operado por una persona; sus posiciones articulares proporcionan la entrada de teleoperación.
- **Seguidor**: recibe comandos de control mapeados y sigue el movimiento del líder.

Calibra ambos brazos antes de iniciar la teleoperación. Comprueba las direcciones de las articulaciones, los rangos de movimiento y la apertura y cierre de la pinza.

Recursos relacionados: [Seguidor y Líder (documento original de Feishu)](https://seeedstudio.feishu.cn/sync/CLA2dJJTcss5xPbBjwicny8nn8g) · [Guía wiki para la calibración y teleoperación líder–seguidor](/es/robotics/rebot_physical_ai_course_chapter_11/).

### Frecuencia de control y latencia

Qué tan de cerca sigue el seguidor tu mano depende de dos cosas: cuántas veces se ejecuta el bucle de reenvío por segundo (**frecuencia**) y el retraso entre tu movimiento y la respuesta del brazo (**latencia**).

#### ¿De dónde viene la latencia y por qué es inevitable?

Leer las posiciones articulares del líder, mapearlas, enviar comandos CAN, ejecutar los movimientos del seguidor y leer de nuevo su estado lleva tiempo. La figura siguiente muestra las fuentes de retraso a lo largo de esta cadena.

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/teleoperation-latency.png" alt="reBot leader–follower teleoperation pipeline and its sources of latency" loading="lazy" />
  <figcaption>Fuentes de latencia en la teleoperación líder–seguidor</figcaption>
</figure>

#### ¿Qué es la frecuencia de control? ¿Se puede cambiar?

Esta sección utiliza la configuración de teleoperación a **60 Hz** de la guía de reBot: 60 ciclos por segundo de “leer líder → mapear → enviar CAN → leer de vuelta”, con un presupuesto de tiempo de unos **16,7 ms** por ciclo. Ajústala usando el parámetro `fps` en la configuración de teleoperación.

- **El bucle de hardware determina el límite superior.** Un ciclo en este hardware ya tarda más de diez milisegundos; el límite práctico es aproximadamente 60–100 Hz. Establecer un valor más alto puede no aumentar la tasa real y puede provocar advertencias de sobrepaso de ciclo. Mide los resultados en tu propio hardware y configuración.
- **60 Hz es suficiente para los ejercicios manuales aquí.** Para agarre, transporte y colocación, un muestreo y una ejecución consistentes importan más que simplemente aumentar la frecuencia.

---

## Práctica práctica: agarrar, transportar y colocar

La teleoperación estable permite que el brazo se mueva, pero realizar una tarea de forma fiable requiere práctica deliberada. La calidad de las demostraciones posteriores depende de tu habilidad de operación. Trabaja en los siguientes dos niveles.

### Ejercicio 1: mueve objetos ligeros y familiarízate con los controles

Coloca algunos bloques ligeros en el área de trabajo y practica:

**Moverse sobre el objetivo → Bajar → Cerrar la garra → Elevar**

**Objetivo**: completar 10 intentos consecutivos sin colisiones ni caídas de objetos. Realiza cada secuencia de forma fluida, sin vacilaciones.

### Ejercicio 2: completa la tarea de transportar y colocar

Realiza la secuencia completa:

**Agarrar → Transportar → Colocar en el contenedor designado**

**Objetivo**: completar 10 intentos consecutivos manteniendo las poses inicial y final ampliamente coherentes.

</div>
