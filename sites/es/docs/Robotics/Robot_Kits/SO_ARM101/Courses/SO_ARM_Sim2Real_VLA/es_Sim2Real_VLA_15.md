---
description: "Capítulo 15 del curso Sim-to-Real VLA de SO-ARM101 — conectar el hardware del robot: el seguidor SO-101 por USB serie al Jetson, ambas cámaras, la calibración y la lista de verificación."
title: Capítulo 15 - Conectar el hardware del robot
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - Hardware
  - USB serie
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_15
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 15 · Deploy on Jetson</span>
    <h2>15. Conectar el hardware del robot</h2>
    <p>
      Conecta el seguidor SO-101 al Jetson por USB serie, enchufa las dos
      cámaras y traslada la calibración — el dispositivo de borde ya no
      necesita nada de la estación en tiempo de ejecución.
    </p>
    <div className="hero-actions">
      <a href="#requirements">Requisitos</a>
      <a href="#connect">Conexión</a>
      <a href="#serial">Puerto serie</a>
      <a href="#cameras">Cámaras</a>
      <a href="#checklist">Lista de verificación</a>
    </div>
  </div>
</section>

## 15.1 Requisitos de hardware

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>Qué necesitas</span>
    <h2>15.1 Requisitos de hardware</h2>
  </div>

- Jetson AGX Orin o AGX Thor con JetPack 7.2 (capítulo 14);
- seguidor SO-ARM101 — USB serie, **sin adaptador CAN**;
- dos cámaras USB (muñeca + externa, como en el capítulo 8);
- un hub USB 3.0 alimentado — el Thor solo tiene dos puertos Type-A, que
  no bastan para el seguidor y dos cámaras;
- la fuente de 12 V del seguidor y su cable USB de datos.

:::note El líder no hace falta en el borde
El brazo líder solo sirve para la recolección de datos. Un despliegue
Jetson necesita el seguidor, las cámaras y la política — nada más.
:::

</section>

## 15.2 Conectar los dispositivos

<section id="connect" className="section-card">
  <div className="section-title">
    <span>El orden importa</span>
    <h2>15.2 Conectar los dispositivos</h2>
  </div>

1. Deja la alimentación de 12 V del seguidor apagada.
2. Conecta el puerto USB serie del seguidor al Jetson (directo o por el
   hub alimentado).
3. Conecta las cámaras de muñeca y externa por el hub alimentado.
4. Copia el directorio de calibración desde la estación (ver abajo).
5. Aplica la alimentación del seguidor al final.

:::tip Copia también la calibración, no solo el código
El seguidor reproduce la calibración escrita para su ID exacto. Copia la
calibración de la estación a la misma ruta en el Jetson:

```bash
# en la estación
rsync -av ~/.cache/huggingface/lerobot/calibration/ \
  jetson:/home/<jetson-user>/.cache/huggingface/lerobot/calibration/
```
:::

</section>

## 15.3 Identificar el puerto serie

<section id="serial" className="section-card">
  <div className="section-title">
    <span>USB serie</span>
    <h2>15.3 Identificar el puerto serie</h2>
  </div>

Aplica alimentación al seguidor y comprueba el nodo de dispositivo:

```bash
ls /dev/ttyACM*
```

Confirma el puerto con el buscador de LeRobot (desconecta y reconecta
cuando se indique):

```bash
lerobot-find-port
```

Exporta las variables de los comandos posteriores — los mismos nombres
que en la estación:

```bash
export ROBOT_PORT=/dev/ttyACM0
export ROBOT_ID=so101_follower
```

Si el puerto no se puede abrir, corrige los permisos en el Jetson:

```bash
sudo usermod -aG dialout $USER   # cierra sesión y vuelve a entrar
sudo chmod 666 /dev/ttyACM*
```

</section>

## 15.4 Identificar las cámaras

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Dos nodos de vídeo</span>
    <h2>15.4 Identificar las cámaras</h2>
  </div>

```bash
ls /dev/video*
lerobot-find-cameras opencv
```

Mapea las vistas previas (los nombres contienen el índice) y exporta —
las mismas variables del capítulo 8:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Los índices pueden cambiar tras reiniciar o reconectar; repite esta
comprobación antes de cada sesión de despliegue.

</section>

## 15.5 Lista de verificación de hardware

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Antes del capítulo 16</span>
    <h2>15.5 Lista de verificación de hardware</h2>
  </div>

- [ ] Jetson en el JetPack/L4T validado, arranca de forma fiable;
- [ ] El seguidor aparece en el nodo `/dev/ttyACM*` esperado;
- [ ] Calibración presente en `~/.cache/huggingface/lerobot/calibration/`;
- [ ] Ambas cámaras enumeran y previsualizan a 640×480 y 30 FPS;
- [ ] `ROBOT_PORT`, `ROBOT_ID`, `CAMERA_GRIPPER`, `CAMERA_EXTERNAL`
      exportados;
- [ ] Hub alimentado en uso; ningún dispositivo se cae bajo carga.

Siguiente: [Capítulo 16 — Configurar el entorno GR00T](es_Sim2Real_VLA_16.md).

</section>

</div>