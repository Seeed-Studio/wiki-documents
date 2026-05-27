---
description: Esta guía te ayudará a comenzar con el reBot Arm B601-RS, incluyendo opciones de compra, ensamblaje, calibración y configuración de software.
title: Inicio rápido de reBot Arm B601-RS
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Brazo robótico
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
# image:
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/
---

# Primeros pasos con reBot Arm B601-RS

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Brazo robótico de 6 GDL · Soporte multi-motor · Solucionador de cinemática · Planificación de trayectoria · Totalmente de código abierto</strong>
</p>

El proyecto reBot Arm ha sido liberado como código abierto en [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Esta guía te llevará a través del inicio rápido del B601-RS, desde el ensamblaje hasta la operación.

¡El contenido de esta guía se dirige hacia ti a la velocidad de la luz — mantente atento!

:::

## Opciones de compra


## Paso 1: Guía de ensamblaje

Antes del ensamblaje:

- Lee atentamente las siguientes instrucciones para garantizar un proceso de ensamblaje fluido.
  1. Este kit incluye varios tornillos y piezas de apariencia similar. Verifica las especificaciones y la orientación antes de apretar.
  2. El video fue grabado a principios de abril. Pueden existir pequeñas actualizaciones, pero el ensamblaje sigue siendo el mismo. Toma como referencia las piezas enviadas como versión final.
  3. Los tornillos enviados tienen fijador de roscas aplicado. Usa herramientas adecuadas o un destornillador eléctrico (recomendado). Ajusta el par a (3–6 kgf·cm) para evitar barrer la rosca. Si se barre, detente de inmediato y reemplaza o realinea el tornillo. Los tornillos con fijador de roscas barridos son difíciles de retirar y pueden dañar las piezas.
  4. Garantiza la seguridad durante el ensamblaje. Evita pellizcos o lesiones. Los niños deben estar supervisados.

## Paso 2: Restablecer ID de los motores

### Antes de restablecer los motores:

Antes de la configuración de parámetros del motor, ten en cuenta las siguientes preparaciones y normas de seguridad:

- Compra 2 pinzas de sujeción (≥3 pulgadas) y una fuente de alimentación conmutada de 48 V con salida XT30 (usa una marca habitual, no productos de baja calidad).
- Mantén una distancia ≥1 m durante la depuración/operación.
- No conectes/desconectes motores en caliente; corta la alimentación antes de enchufar/desenchufar la interfaz XT30 2+2.
- No sobrecargues/sobregires; revisa el cableado y los elementos de fijación antes del arranque; evita entornos húmedos, de alta temperatura o con polvo.
- Establece parámetros de programa razonables y un paro de emergencia para evitar pérdida de control.
- **Sigue estrictamente estas normas. El vendedor no es responsable de los riesgos/responsabilidades derivados de una operación ilegal o errores personales.**

### Lista de preparación

#### Hardware

#### Requisitos del ordenador

- Ordenador personal con arranque dual (Windows + Ubuntu / macOS)

#### Software
