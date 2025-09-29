---
description: ODYSSEY - X86J41x5
title: SO Original
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-Installing-OS
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Installing-OS/
sku: 102110399
--- -->

Este tutorial demuestra cómo crear una unidad USB de arranque e instalar el SO Linux (Ubuntu Desktop 18.04) en el ODYSSEY - X86J41x5.

## Requisitos de Hardware

- Una Computadora Funcional

- Una Unidad USB (se recomienda >= 8GB)

- Un Monitor

- Teclado y Ratón

## Creando una USB de Arranque

### Paso 1 - Descargar la Imagen del Sistema Operativo

Descarga la imagen del SO requerida a tu unidad local. En este tutorial, se usa *Ubuntu Desktop 18.04* para demostrar la instalación en el ODYSSEY - X86J41x5.

- Puedes descargar la imagen del SO [Ubuntu](https://ubuntu.com/download/desktop) desde aquí.

### Paso 2 - Preparar tu USB de Arranque

Formatea la unidad USB. Si eres usuario de Windows, puedes formatear la unidad USB haciendo clic derecho en la Unidad USB y seleccionar `Formatear`.

**Nota:** Elige `FAT32` para el Sistema de Archivos.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Paso 3 - Descargar el Grabador Flash

Descarga el grabador Flash de código abierto [balenaEtcher](https://www.balena.io/etcher/). Descarga la versión según tu sistema operativo (Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Paso 4 - Escribir la Imagen del SO en USB

Selecciona la imagen del Sistema Operativo descargada, selecciona la Unidad USB formateada y ¡Graba! Ahora, la USB de arranque está lista para usar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Instalando el Sistema Operativo (Ubuntu)

### Paso 1 - Seleccionar la USB de Arranque como Dispositivo de Arranque

Conecta tu USB de arranque, Monitor y teclado al ODYSSEY - X86J41x5, y enciéndelo. Al arrancar, mantén presionado **`F7`** para entrar a la Pantalla del Administrador de Arranque. Y usa las teclas &#8593; y &#8595; del teclado para seleccionar tu USB de arranque.

En este Tutorial, `UEFI: Mass Storage Device 1.00` es la USB de arranque.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/bios.png" /></div>

### Paso 2 - Instalando el SO

Selecciona **`Install ubuntu`** y presiona Enter. Sigue las instrucciones de instalación en la pantalla, es decir, idioma del sistema, nombre de usuario, ubicación, etc.

**Nota:** Para pasos detallados de la instalación de ubuntu, puedes seguir [este](https://www.youtube.com/watch?v=vt5Lu_ltPkU) video para más información. *La parte de instalación comienza en el minuto 3:20 del video.*

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/install.png" /></div>

### Paso 3 - Reiniciar y Disfrutar el Nuevo SO

Si todo va bien, ubuntu debería estar instalado en el ODYSSEY - X86J41x5 y ¡puedes comenzar a disfrutar tu nuevo SO!

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg" /></div>

## Notas

- **Ubuntu 16 no es compatible con ODYSSEY - X86J41x5**

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
