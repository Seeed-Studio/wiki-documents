---
description: descripción general de la relación entre jetpack y jetson
title: Descripción General de la Relación Entre Jetpack y Jetson
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /es/overview_of_the_relationship_between_jetpack_and_jetson
last_update:
  date: 06/05/2025
  author: Dayu
---

Este wiki proporciona una breve introducción a los componentes de JetPack, ayudándote a entender rápidamente la relación entre JetPack y Jetson, y respondiendo algunas de las preguntas más frecuentes.

## 1. ¿De qué está compuesto JetPack?
JetPack es una colección de paquetes de software que incluye dos componentes principales: 

**① L4T (Linux for Tegra).** L4T es una distribución Linux middleware personalizada para plataformas de hardware Jetson. Consiste en: 

- Sistema de archivos raíz Ubuntu

- Kernel de Linux (con parches de NVIDIA)

- Controladores (GPU, ISP, CSI, I2C, etc.)

- Firmware (Bootloader, UEFI, U-Boot, initrd)

- BSP (Board Support Package) incluyendo árboles de dispositivos, configuraciones de arranque y herramientas de flasheo

- y más

**② SDK de JetPack.** Esta es la capa de software superior que principalmente proporciona herramientas de desarrollo de aplicaciones, incluyendo: 

- CUDA Toolkit

- cuDNN (Biblioteca de Aprendizaje Profundo)

- TensorRT (Motor de Inferencia de Modelos de IA)

- y más

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.png"/></div>

## 2. ¿Cuál es la relación entre JetPack y Ubuntu?

Como se describe en la primera respuesta anterior, Ubuntu es una parte de JetPack. Cada lanzamiento de JetPack incluye una versión específica de Ubuntu. Nuestras versiones de JetPack incluyen las siguientes versiones de Ubuntu:

| Versión de JetPack | Versión de L4T | Versión de Ubuntu |
|------------------|--------------|-----------------|
| JetPack 6.2      | L4T 36.4.3   | Ubuntu 22.04    |
| JetPack 6.1      | L4T 36.4.0   | Ubuntu 22.04    |
| JetPack 6.0      | L4T 36.3.0   | Ubuntu 22.04    |
| JetPack 5.1.3    | L4T 35.5.0   | Ubuntu 20.04    |
| JetPack 5.1.1    | L4T 35.3.1   | Ubuntu 20.04    |
| JetPack 4.6.6    | L4T 32.7.6   | Ubuntu 18.04    |

## 3. ¿Versión de Jetpack soportada por nuestros productos?
Las versiones de JetPack soportadas por nuestros productos actualmente disponibles se pueden encontrar en el siguiente enlace: 

[versión jetpack de seeed](https://docs.google.com/spreadsheets/d/1Sf7IdmVkKTAUH95XwxHK0ojV5aFq3ItKZ-iT28egzIk/edit?pli=1&gid=0#gid=0)


## 4. Relación Entre JetPack 6.2 y el Modo Super

Los dispositivos flasheados con JetPack 6.2 soportan la activación del Modo Super. Sin embargo, ten en cuenta que el Modo Super está actualmente disponible solo en productos selectos de Seeed.

## 5. ¿Cómo encontrar el contenido de cada versión de JetPack?

Puedes consultar los recursos oficiales publicados por NVIDIA. Ve el siguiente enlace para más detalles:

[contenido de cada jetpack](https://developer.nvidia.com/embedded/jetpack-archive)

## Recursos

- [Código fuente del L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>