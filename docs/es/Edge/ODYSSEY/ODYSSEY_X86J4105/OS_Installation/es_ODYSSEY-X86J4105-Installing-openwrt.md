---
description: ODYSSEY - X86J41x5
title: Instalación de OpenWRT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-Installing-openwrt
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Installing-openwrt/
sku: 102110399
--- -->

Este tutorial demuestra cómo instalar el sistema operativo de código abierto para redes de router. Con la ayuda de OpenWrt, tu ODYSSEY - X86J41x5 puede convertirse en un router y encargarse de tu red doméstica!

## Requisitos de Hardware

- Una Computadora Funcional

- Una Unidad USB (se recomienda >= 8GB)

- Un Monitor

- Teclado y Ratón

- Cable Ethernet x 2

## Descargar la Imagen del Sistema Operativo OpenWrt

Primero, descarga la imagen del sistema operativo [OpenWrt](https://downloads.openwrt.org/releases/). Elige la versión que desees, navega a `x86` -> `64` y descarga la versión requerida.

En este tutorial, se usa la versión 19.07 y haz clic [aquí](https://downloads.openwrt.org/releases/19.07.0/targets/x86/64/openwrt-19.07.0-x86-64-combined-ext4.img.gz) para descargar.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/Openwrt.jpg" /></div>

## Crear un USB de Arranque

### Paso 1 - Preparar tu USB de Arranque

Formatea la unidad USB. Si eres usuario de Windows, puedes formatear la unidad USB haciendo clic derecho en la Unidad USB y seleccionar `Formatear`.  

**Nota:** Elige `FAT32` para el Sistema de Archivos.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Paso 2 - Descargar el Grabador Flash

Descarga el grabador flash de código abierto [balenaEtcher](https://www.balena.io/etcher/). Descarga la versión según tu sistema operativo (Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Paso 3 - Escribir la Imagen del Sistema Operativo en el USB

Selecciona la Imagen del Sistema Operativo descargada, selecciona la Unidad USB formateada y ¡Graba! Ahora, el USB de arranque está listo para usar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Instalar OpenWrt

### Paso 1 - Habilitar el Modo CSM en ODYSSEY - X86J41x5

Conecta tu USB de arranque, Monitor y teclado al ODYSSEY - X86J41x5, y enciéndelo. Al arrancar, mantén presionada la tecla **`DEL`** para entrar a la pantalla de configuración. Navega a **`Advanced`** -> **`CSM Support`** y presiona Enter para habilitarlo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Paso 2 - Instalar el Sistema Operativo

Reinicia tu ODYSSEY - X86J41x5 y mantén presionada **`F7`** para entrar a la pantalla del administrador de arranque. Selecciona el USB de arranque y presiona Enter.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Paso 3 - Proceso de Instalación

Selecciona **`OpenWrt`** y presiona Enter. Sigue las instrucciones de instalación en la pantalla.
<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/installingOpenwrt.jpg" /></div>

Cuando termine, presiona Enter y deberías ver la pantalla como sigue:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/OpenWrtShell.jpg" /></div>

¡Ahora tu OpenWrt está instalado y listo para ser usado!

## Configuraciones

Ahora, vamos a configurar el acceso al sistema OpenWrt desde una interfaz web desde otra PC. Ingresa lo siguiente en el shell en OpenWrt:

```sh
vi /etc/config/network
```

Y cambia la configuración como sigue:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/settings.jpg" /></div>

Donde cambias la dirección IP de la estación para las configuraciones LAN para que puedas usar esta IP para acceder al router. Aquí la IP se cambia a `192.168.10.1`

**Nota:** En vim, escribe **`i`** primero para estar en modo insertar para que puedas editar. Cuando termines de editar, presiona la tecla **`ESC`** y escribe **`:wq`** y enter para guardar y salir.

## Accediendo desde Otra PC

Ahora, puedes acceder al OpenWrt desde otra computadora a través de la interfaz web LuCI. Simplemente, usa **un cable Ethernet para conectar el Puerto Ethernet que está cerca del puerto HDMI**. Conecta el otro cable ethernet al otro puerto Ethernet en ODYSSEY - X86J41x5 y a internet (Esto puede variar como el método PPPoE).

Ahora, desde tu computadora, escribe `192.168.10.1` (La dirección IP especificada anteriormente) en el navegador web y deberías ver la siguiente pantalla:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/ipAddress.jpg" /></div>

¡Ahora, puedes acceder a tu OpenWrt desde otra PC!

## Configurando LAN y WAN

Navega a **`Network`** -> **`Interfaces`** y configura las configuraciones WAN para acceso a internet:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface.jpg" /></div>

Esto muestra todas las configuraciones de interfaces para OpenWrt. Aquí, simplemente asegúrate de que el **puerto WAN(eth1)** esté conectado a internet y esté configurado como **Protocolo cliente DHCP** como sigue:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface2.jpg" /></div>

¡Ahora, tu computadora debería acceder a internet y tu router está listo para funcionar!

*Para desarrollo adicional, puedes comenzar a descargar e implementar todo tipo de aplicaciones como bloqueo de anuncios, duplicación de puertos y etc! Para más información, por favor visita [OpenWrt](https://openwrt.org/).*

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
