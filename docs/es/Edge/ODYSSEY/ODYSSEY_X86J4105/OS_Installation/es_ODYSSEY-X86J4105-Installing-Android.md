---
description: ODYSSEY - X86J41x5
title: Instalación de Android-x86
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-Installing-Android
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Installing-Android/
sku: 102110399
--- -->

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/BBC.png" /></div>

Este tutorial demuestra cómo instalar Android-x86 en el ODYSSEY-X86J41x5 y usarlo como un smart TV box para ver transmisiones de TV en vivo o contenido multimedia desde almacenamiento local (como NAS) con la ayuda de [Kodi](https://kodi.tv/).

Android-x86 es un proyecto para portar el proyecto de código abierto de Android a la plataforma x86, anteriormente conocido como "patch hosting for android x86 support". Para más referencia, por favor visita el sitio oficial de [Android-x86](https://www.android-x86.org/).

## Requisitos de Hardware

- Una Computadora Funcional

- Unidad USB x 1 (>= 8GB es recomendado)

- Un Monitor

- Teclado

## Descargar la Imagen del SO Android-x86

Primero, descarga la [Imagen del SO Android-x86](https://www.android-x86.org/download.html) en tu unidad. Debe ser un archivo `.iso`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/download.png" /></div>

En este tutorial, se usa `android-x86-7.1-r4-k419`.

## Crear un USB de Arranque

### Paso 1 - Preparar tu USB de Arranque

Formatea una de las unidades USB. Si eres usuario de Windows, puedes formatear la unidad USB haciendo clic derecho en la Unidad USB y seleccionar `Formatear`.

**Nota:** Elige `FAT32` para el Sistema de Archivos.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Paso 2 - Descargar Grabador Flash

Descarga el grabador flash de código abierto [balenaEtcher](https://www.balena.io/etcher/). Descarga la versión según tu sistema operativo (Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Paso 3 - Escribir la Imagen del SO en USB

Selecciona la Imagen del Sistema Operativo descargada, selecciona la Unidad USB formateada y ¡Graba! Ahora, el USB de arranque está listo para usar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Instalar Android-x86

### Paso 1 - Habilitar Modo CSM en ODYSSEY - X86J41x5

Conecta tu USB de arranque, Monitor y teclado al ODYSSEY - X86J41x5, y enciéndelo. Al arrancar, mantén presionada la tecla **`DEL`** para entrar a la pantalla de configuración. Navega a **`Advanced`** -> **`CSM Support`** y presiona Enter para habilitarlo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Paso 2 - Instalar el SO

Reinicia tu ODYSSEY - X86J41x5 y mantén presionada **`F7`** para entrar a la pantalla del administrador de arranque. Selecciona el USB de arranque (Instalador) y presiona Enter.

**Nota:** Recuerda elegir el que tiene la imagen iso de Android-x86.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Paso 3 - Proceso de instalación

Bajo **opciones GRUB**, selecciona `Advanced options`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/1.png" /></div>

Selecciona `Android-x86** Auto Install to specific harddisk`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/2.png" /></div>

Esto entra al proceso de instalación y puedes elegir dónde se instala Android-x86 en ODYSSEY-X86. Aquí se instala en el eMMC integrado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/3.png" /></div>

Selecciona `Yes` para confirmación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/
ODYSSEY-X86J4105-Installing-Android/4.png" /></div>

Ahora, el proceso de instalación está teniendo lugar y una vez que termine, selecciona `Reboot`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/5.png" /></div>

Retira el USB de arranque y reinicia el dispositivo. Android-x86 debería arrancar.

!!!Note
        Si no arranca correctamente, por favor presiona F7 y selecciona la unidad donde instalaste Android-x86 para arrancar desde ahí.

## Configuraciones

Si todo va bien, arrancarás en Android-x86 como se muestra en la pantalla a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/home.png" /></div>

¡Esto puede resultar familiar para las personas que usan teléfonos Android!

## Configuración como Smart TV Box

Para que ODYSSEY-X86J41x5 funcione como un Smart TV Box, necesitaremos instalar [Kodi](https://kodi.tv/).

Kodi es un software gratuito y de código abierto para centro multimedia que puede ejecutarse en cualquier cosa, desde tu teléfono Android hasta tu PC doméstico, y muchos otros dispositivos intermedios. ¡Y por supuesto es compatible con Android-x86!

### Descargar e Instalar KODI para Android-x86

Puedes descargar [Kodi para Android-x86 aquí](https://mirrors.kodi.tv/releases/android/x86/). Es posible que quieras descargarlo desde otra PC y guardar el archivo `.apk` en una unidad USB e instalar la aplicación desde USB.

### Configuración de Kodi IPTV

Abre **Kodi** y navega a **TV** -> **More Add-on**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/add-on.png" /></div>

Elige **PVR clients**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/PVR.png" /></div>

Selecciona **PVR IPTV Simple Client**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/iptv.png" /></div>

Selecciona **configure** e ingresa la **URL `m3u` de streaming IPTV**. Puedes consultar este [`repositorio iptv`](https://github.com/iptv-org/iptv/blob/master/README.md) como referencia. Selecciona **OK** y recuerda **habilitar**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/config.png" /></div>

Reinicia Kodi y deberías tener los canales cargados! ¡Ahora has convertido tu ODYSSEY-X86 en un Smart TV Box!

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/live.png" /></div>

### Arranque desde el Inicio

Si quieres que el ODYSSEY-X86 arranque Kodi desde el inicio, puedes lograr esto simplemente instalando `Boot apps` desde Google Play Store!

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/boot.png" /></div>

¡Instala la aplicación y selecciona Kodi como aplicación de arranque desde el inicio!

## Recursos

- [Kodi](https://kodi.tv/)

- [Cómo Usar Kodi – Todo Lo Que Necesitas Saber para Streaming Ilimitado](https://troypoint.com/how-to-use-kodi/)

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
