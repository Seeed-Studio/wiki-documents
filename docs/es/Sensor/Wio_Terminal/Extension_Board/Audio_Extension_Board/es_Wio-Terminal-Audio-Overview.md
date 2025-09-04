---
description: Descripción general
title: Descripción general de la biblioteca de audio para Wio Terminal
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Audio-Overview
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Descripción general de la biblioteca de audio para Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif"/></div>

Este wiki presenta cómo usar la biblioteca de audio con Wio Terminal usando [**ReSpeaker 2-Mic Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html). Con la ayuda de esta biblioteca, ¡puedes grabar, reproducir y analizar audio usando Wio Terminal! Además, esta biblioteca de audio se puede implementar en diferentes áreas como reconocimiento de voz y mucho más.

## Hardware requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**ReSpeaker 2-Mics Pi HAT**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

- *Placa adaptadora Pi HAT de 40 pines para Wio Terminal (Aún no lanzada)*

## Conexión del hardware

> Por ahora, si quieres probar el software, tendrás que usar cables sueltos.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/ai-wt.png"/></div>

## Primeros pasos

Para comenzar con la biblioteca de audio para Wio Terminal, sigue los siguientes pasos:

## Instalación de Seeed_Arduino_Audio

1. Visita los repositorios de [Seeed_Arduino_Audio](https://github.com/Seeed-Studio/Seeed_Arduino_Audio) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca se puede instalar en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_Audio` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Instalación de las bibliotecas FS para Wio Terminal

- Por favor visita la página oficial del wiki [**Sistema de archivos de Wio Terminal**](https://wiki.seeedstudio.com/es/Wio-Terminal-FS-Overview/).