---
description: "Capítulo 6 del curso para principiantes de SO-ARM Physical AI — imprime las piezas en 3D, cablea y alimenta el bus de servos, graba IDs y baud rates con lerobot-setup-motors, y luego ensambla los brazos líder y seguidor paso a paso."
title: Capítulo 6 - Configurar motores y ensamblar los brazos
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ensamblaje
  - servo
  - calibración
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_6
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 6 · Práctica</span>
    <h2>6. Configurar motores y ensamblar los brazos</h2>
    <p>
      Capítulo 6 del curso para principiantes de SO-ARM Physical AI — imprime las piezas en 3D, cablea y alimenta el bus de servos, graba IDs y baud rates con lerobot-setup-motors, y luego ensambla los brazos líder y seguidor paso a paso.
    </p>
    <div className="hero-actions">
      <a href="#printing">Impresión 3D</a>
      <a href="#configure">Configurar motores</a>
      <a href="#assembly">Ensamblaje</a>
    </div>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Aviso de seguridad: despeja el espacio de trabajo del brazo antes de ejecutar programas de movimiento</strong>
    <p>
      Antes de ejecutar cualquier programa que pueda mover el brazo, retira objetos de valor, frágiles, herramientas, cables y elementos ajenos a menos de 1 metro del espacio de trabajo. Durante la depuración y operación, mantén a las personas alejadas del rango de movimiento del brazo.
    </p>
    <ul>
      <li>No toques articulaciones, motores, eslabones, la pinza o herramientas del extremo con el brazo encendido.</li>
      <li>Antes de configurar servos, calibrar, teleoperar, grabar datos, reproducir o evaluar políticas, asegúrate de que el brazo esté bien fijado.</li>
      <li>Mantén al menos 1 metro de distancia de seguridad y asegúrate de que los presentes sepan que el brazo puede moverse repentinamente.</li>
      <li>Si hay movimiento anormal, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga antes de revisar.</li>
      <li>Apaga antes de conectar o desconectar cables de servo, USB, conectores de corriente o cables de la placa de control.</li>
    </ul>
  </div>
</div>

:::tip
Si compraste un brazo robótico pre-ensamblado, sáltate este capítulo y ve directamente al Capítulo 10 (calibración del brazo completo).
:::

## 6.1 Guía de impresión 3D (versión kit)

<section id="printing" className="section-card">
  <div className="section-title">
    <span>Impresión 3D</span>
    <h2>6.1 Guía de impresión 3D (versión kit)</h2>
  </div>

Si compraste la versión kit (servos y hardware sin piezas impresas), imprime primero la estructura. Los archivos STL se imprimen en impresoras FDM corrientes:

- **Material**: PLA+
- **Boquilla / altura de capa**: boquilla 0.4mm con capa de 0.2mm, o boquilla 0.6mm con capa de 0.4mm
- **Relleno**: 15%
- **Soportes**: en todas partes, ignorando pendientes superiores a 45° respecto a la horizontal; sin soportes en los agujeros de tornillo horizontales

Todas las piezas del líder o del seguidor vienen en un único STL, ya orientadas con z hacia arriba para minimizar soportes:

- Cama de 220mm × 220mm (p. ej. Ender): [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl) · [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)
- Cama de 205mm × 250mm (p. ej. Prusa / Up): [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl) · [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

:::caution
Tras la actualización oficial de SO101, los archivos fuente de SO100 ya no se mantienen, pero siguen disponibles en nuestro [Makerworld](https://makerworld.com/zh/models/908660). Para quienes compraron SO100, los tutoriales y métodos de instalación siguen siendo compatibles — la impresión de SO101 es totalmente compatible con la instalación del kit de motores de SO100.
:::

**Opcional**: imprime una pinza suave (dedos de TPU, piezas PLA) para objetos blandos, frágiles o irregulares, y el inserto del soporte de cámara si necesitas montar una. Los archivos están en el repositorio [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git).

</section>

## 6.2 Planificar los motores: etiquetas, IDs y relaciones

<section id="plan-motors" className="section-card">
  <div className="section-title">
    <span>Preparación</span>
    <h2>6.2 Planificar los motores: etiquetas, IDs y relaciones</h2>
  </div>

Designa un adaptador de bus y 6 motores para el brazo líder, y otro adaptador y 6 motores para el seguidor. Etiqueta cada motor **F1–F6** (articulaciones 1–6 del seguidor) o **L1–L6** (articulaciones 1–6 del líder) — escribirlo en la carcasa del servo ahorra horas de depuración.

| Modelo de servo | Relación | Articulaciones |
| :--- | :--- | :--- |
| ST-3215-C044 (7.4V) | 1:191 | L1 |
| ST-3215-C001 (7.4V) | 1:345 | L2 |
| ST-3215-C044 (7.4V) | 1:191 | L3 |
| ST-3215-C046 (7.4V) | 1:147 | L4–L6 |
| ST-3215-C001 (7.4V) / C018 (12V) / C047 (12V) | 1:345 | F1–F6 |

:::danger
Alimenta el bus de motores con la fuente que coincida: 5V para los STS3215 de 7.4V y 12V para los de 12V. El brazo líder siempre usa motores de 7.4V — revisa el adaptador antes de conectar si tienes ambos tipos, ¡o podrías quemar los motores! El cable USB no alimenta: la fuente y el USB deben estar ambos conectados.
:::

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="Todos los motores conectados al bus" />
</div>

:::tip
El proceso de calibración e inicialización de servos del SO-ARM101 es idéntico al del SO-ARM100 en método y código — pero las relaciones de las tres primeras articulaciones del líder de SO-ARM101 difieren de las de SO-ARM100, así que distínguelas y configúralas con cuidado.
:::

</section>

## 6.3 Encontrar los puertos USB

<section id="find-ports" className="section-card">
  <div className="section-title">
    <span>Puertos</span>
    <h2>6.3 Encontrar los puertos USB</h2>
  </div>

Ejecuta la utilidad para averiguar qué puerto serie ocupa la placa de cada brazo:

```bash
lerobot-find-port
```

Ejemplo de salida:

```text
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

Consejos que ahorran tiempo:

- Recuerda retirar realmente el USB cuando se te pida, de lo contrario no se detecta la interfaz.
- En Linux y Jetson, el primer dispositivo conectado se mapea a `ttyACM0` (normalmente el seguidor), el segundo a `ttyACM1` (líder).
- Si LeRobot luego reporta `Could not connect on port '/dev/ttyACM0'`, concede permisos y revisa:

```bash
sudo chmod 666 /dev/ttyACM*
```

</section>

## 6.4 Configurar IDs y baud rates

<section id="configure" className="section-card">
  <div className="section-title">
    <span>Configuración</span>
    <h2>6.4 Configurar IDs y baud rates</h2>
  </div>

La herramienta graba el ID y baud rate correctos en cada servo, **de a un servo por vez** (el Capítulo 4 explicó por qué: todos comparten el bus y un ID duplicado se reescribiría en todos).

Usa estas fotos de referencia para la postura estándar de cableado de cada articulación antes de calibrar:

**Imágenes de referencia para la calibración de servos del líder**

| **Articulación 6** | **Articulación 5** | **Articulación 4** | **Articulación 3** | **Articulación 2** | **Articulación 1** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**Imágenes de referencia para la calibración de servos del seguidor**

| **Articulación 6** | **Articulación 5** | **Articulación 4** | **Articulación 3** | **Articulación 2** | **Articulación 1** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

**Calibrar los servos del seguidor.** Conecta el cable USB y la alimentación a la placa del seguidor y ejecuta:

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- pega aquí el puerto del paso anterior
```

La herramienta te guía articulación por articulación:

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

Conecta únicamente el motor de la pinza (F6) a la placa, pulsa **Enter**, y el script fija su ID y baud rate automáticamente:

```text
'gripper' motor id set to 6
```

Luego:

```text
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

Puedes dejar el cable de 3 hilos anterior conectado al motor de la pinza en su extremo; añade un nuevo cable al motor de rotación de muñeca y conecta solo ese a la placa. Repite para cada motor como se indique — siempre exactamente uno conectado.

:::tip
Revisa el cableado antes de cada Enter — el cable de alimentación tiende a soltarse mientras manipulas la placa.
:::

Cuando el script termina, encadena los motores: conecta el cable de 3 hilos de cada motor al siguiente, y el del primer motor (rotación de hombro, ID 1) a la placa, que ya puede fijarse a la base del brazo.

**Calibrar los servos del líder** igual:

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- pega aquí el puerto del paso anterior
```

:::tip
Usuarios de SO100: los códigos de SO100 y SO101 son compatibles — usad los mismos tipos `so101_leader` / `so101_follower` y parámetros.
:::

</section>

## 6.5 Ensamblaje

<section id="assembly" className="section-card">
  <div className="section-title">
    <span>Ensamblaje</span>
    <h2>6.5 Ensamblaje</h2>
  </div>

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
El ensamblaje de doble brazo del SO-ARM101 es igual al del SO-ARM100 — las únicas diferencias son los clips de cable del SO-ARM101 y las relaciones distintas de los servos del líder. Tanto SO100 como SO101 pueden ensamblarse con los pasos siguientes. Antes de ensamblar, revisa de nuevo modelos de motor, relaciones y voltaje contra la tabla de la sección 6.2.
:::

**Ensamblar el brazo líder**

| **Paso 1** | **Paso 2** | **Paso 3** | **Paso 4** | **Paso 5** | **Paso 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Paso 7** | **Paso 8** | **Paso 9** | **Paso 10** | **Paso 11** | **Paso 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Paso 13** | **Paso 14** | **Paso 15** | **Paso 16** | **Paso 17** | **Paso 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Paso 19** | **Paso 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Ensamblar el brazo seguidor**

:::tip
El ensamblaje del seguidor es en general igual al del líder. La única diferencia es la instalación del efector final (pinza y mango) tras el paso 12.
:::

| **Paso 1** | **Paso 2** | **Paso 3** | **Paso 4** | **Paso 5** | **Paso 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Paso 7** | **Paso 8** | **Paso 9** | **Paso 10** | **Paso 11** | **Paso 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Paso 13** | **Paso 14** | **Paso 15** | **Paso 16** | **Paso 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

</section>

## 6.6 Lista de verificación antes de continuar

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Lista de verificación</span>
    <h2>6.6 Lista de verificación antes de continuar</h2>
  </div>

- Ambos brazos ensamblados; cada servo responde con su ID esperado (verifícalo con la herramienta del Capítulo 7);
- Los voltajes coinciden con las reglas de la edición (Standard: ambos 5V; Pro: líder 5V, seguidor 12V);
- Ambas placas aparecen como `/dev/ttyACM0` y `/dev/ttyACM1`;
- Cables bien asentados, sin dobleces agudos y fuera del rango de movimiento de las articulaciones.

Si algunos servos no se detectan, los IDs parecen duplicados o el neutro se ve mal, la herramienta de depuración del próximo capítulo resuelve exactamente estos problemas.

</section>

</div>
