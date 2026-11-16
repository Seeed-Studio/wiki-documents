---
description: "Capítulo 14 del curso Sim-to-Real VLA de SO-ARM101 — preparar tu Jetson: elige el objetivo, instala SDK Manager, entra en modo force recovery, flashea JetPack 7.2 y verifica la placa."
title: Capítulo 14 - Preparar tu Jetson
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - AGX Orin
  - AGX Thor
  - JetPack
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_14
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_14/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 14 · Deploy on Jetson</span>
    <h2>14. Preparar tu Jetson</h2>
    <p>
      Prepara la plataforma Jetson para el despliegue de GR00T N1.7 con
      TensorRT: elige el objetivo, flashea JetPack 7.2 y verifica la placa
      antes de conectar el robot.
    </p>
    <div className="hero-actions">
      <a href="#targets">Objetivos</a>
      <a href="#host">PC anfitrión</a>
      <a href="#recovery">Force recovery</a>
      <a href="#flash">Flashear</a>
      <a href="#verify">Verificar</a>
    </div>
  </div>
</section>

## 14.1 Objetivos soportados

<section id="targets" className="section-card">
  <div className="section-title">
    <span>Orin o Thor</span>
    <h2>14.1 Objetivos soportados</h2>
  </div>

Los objetivos validados para el pipeline SO-ARM101 son:

| Objetivo | Ruta de software validada | Entorno usado después |
|---|---|---|
| Jetson AGX Orin | JetPack 7.2 / L4T R39.2 | `.venv-jp72` con `scripts/deployment/orin_jp72/run_full_trt.sh` |
| Jetson AGX Thor | JetPack 7.2 / L4T R39.2 | `.venv` con `scripts/activate_thor.sh` |

:::caution Los motores son específicos del objetivo
Los motores TensorRT dependen de la arquitectura de GPU. Orin y Thor pueden
compartir el mismo checkpoint y dataset compatibles, pero cada objetivo
debe construir su propio paquete de motores (capítulo 18).
:::

</section>

## 14.2 Preparar el ordenador anfitrión

<section id="host" className="section-card">
  <div className="section-title">
    <span>Anfitrión Ubuntu</span>
    <h2>14.2 Preparar el ordenador anfitrión</h2>
  </div>

Prepara un anfitrión Ubuntu con:

- al menos 25 GB libres para SDK Manager y los paquetes de JetPack;
- un cable de datos USB Type-C fiable;
- una conexión de red estable;
- acceso de administrador.

Instala NVIDIA SDK Manager desde la página oficial:
[https://developer.nvidia.com/sdk-manager](https://developer.nvidia.com/sdk-manager).

</section>

## 14.3 Entrar en modo force recovery

<section id="recovery" className="section-card">
  <div className="section-title">
    <span>Danza de botones</span>
    <h2>14.3 Entrar en modo force recovery</h2>
  </div>

### Jetson AGX Thor Developer Kit

1. Apaga el Jetson.
2. Conecta su puerto USB Type-C de recuperación al anfitrión.
3. Mantén pulsado el botón Force Recovery.
4. Pulsa y suelta Reset sin soltar Force Recovery.
5. Suelta Force Recovery.
6. Confirma que SDK Manager detecta el objetivo.

| Marca | Botón |
|---|---|
| 11 | Encendido |
| 12 | Force Recovery |
| 13 | Reset |

### Jetson AGX Orin Developer Kit

El kit Orin debe estar **encendido** antes de este procedimiento; usa el
botón 2 (Force Recovery) y el 3 (Reset):

1. Conecta el puerto USB Type-C 10 — junto al header de 40 pines — al
   anfitrión Ubuntu.
2. Conecta la alimentación y asegúrate de que el kit está encendido.
3. Mantén pulsado el botón 2 (Force Recovery).
4. Sin soltar Force Recovery, mantén pulsado el botón 3 (Reset).
5. Suelta ambos botones.
6. Confirma que SDK Manager detecta el objetivo Orin.

| Marca | Botón o puerto |
|---|---|
| 1 | Botón de encendido |
| 2 | Botón Force Recovery |
| 3 | Botón Reset |
| 10 | Puerto USB Type-C de flasheo |

### Alternativa: recovery con el equipo apagado

1. Asegúrate de que el kit está apagado.
2. Mantén pulsado el botón 2 (Force Recovery).
3. Conecta la alimentación. Si el LED de encendido no se ilumina, pulsa y
   suelta el botón 1 (Encendido).
4. Suelta Force Recovery.
5. Confirma la detección en SDK Manager.

Referencia: [Guía de usuario del Jetson AGX Orin — Force Recovery Mode](https://docs.nvidia.com/jetson/agx-orin-devkit/user-guide/latest/setup_bsp.html#hardware-setup).

</section>

## 14.4 Instalar JetPack

<section id="flash" className="section-card">
  <div className="section-title">
    <span>SDK Manager</span>
    <h2>14.4 Instalar JetPack</h2>
  </div>

En SDK Manager:

1. Selecciona **Jetson AGX Thor / Jetson AGX Orin** como hardware destino.
2. Selecciona **JetPack 7.2**.
3. Usa **Direct Flash** salvo que tu despliegue requiera un flujo ISO.
4. Completa la instalación del objetivo y la configuración inicial de
   Ubuntu.

Sigue el asistente hasta **Installation completed successfully** antes de
desconectar el cable de recuperación.

</section>

## 14.5 Verificar el Jetson

<section id="verify" className="section-card">
  <div className="section-title">
    <span>En el dispositivo</span>
    <h2>14.5 Verificar el Jetson</h2>
  </div>

Ejecuta estos comandos en el destino:

```bash
tr -d '\0' < /proc/device-tree/model
cat /etc/nv_tegra_release
df -h /
free -h
```

Confirma que:

- el modelo detectado coincide con el objetivo Orin o Thor previsto;
- el sistema informa del release JetPack/L4T esperado;
- el NVMe o el sistema de archivos raíz tiene espacio para el checkpoint,
  el backbone, los ONNX y los motores TensorRT;
- el sistema arranca con normalidad tras un reinicio.

Reserva unos 45–50 GB para un flujo TensorRT local completo.

Siguiente: [Capítulo 15 — Conectar el hardware del robot](es_Sim2Real_VLA_15.md).

</section>

</div>