---
description: ODYSSEY - X86J4105
title: Instalación de OPNsense
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86-OPNsense
last_update:
  date: 01/03/2023
  author: w0x7ce

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/1.png" alt="pir" width={1000} height="auto" /></p>

Esta guía explica cómo convertir tu ODYSSEY-X86 en un router de software y firewall instalando OPNsense. ¡Comencemos!

## ¿Qué es OPNsense?

[OPNsense](https://opnsense.org) es un software de firewall y enrutamiento de código abierto basado en el sistema operativo FreeBSD que es desarrollado por Deciso. Es un fork de pfSense, que a su vez fue un fork de m0n0wall. Fue lanzado en enero de 2015. OPNsense tiene una GUI basada en web y soporta la plataforma x86-64. No solo puede actuar como un firewall, sino que también tiene capacidades de modelado de tráfico, balanceador de carga y red privada virtual. También se pueden añadir otras características a través de plugins.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/25.png" alt="pir" width={300} height="auto" /></p>

## Prerrequisitos

- [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- Unidad Flash USB (>1GB)
- 2 cables Ethernet y un router con acceso a internet
- Medio de almacenamiento externo (Si usas ODYSSEY-X86 con eMMC integrado, también puedes usar eso)

  - SSD NVMe o
  - SSD SATA o
  - HDD SATA o
  - Tarjeta Micro-SD o
  - Unidad Flash USB (>1GB)

## Comenzando

Ahora vamos a repasar el proceso de instalación de OPNsense en ODYSSEY-X86.

### Flashear imagen de OPNsense a una unidad flash USB

- **Paso 1.** Visita [este enlace](https://opnsense.org/download) para abrir la página de descarga de OPNsense

- **Paso 2.** Selecciona **amd64** como la Arquitectura, **vga** como el tipo de imagen, elige **cualquier** Ubicación de Mirror y haz clic en **Download**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/2.png" alt="pir" width={550} height="auto" /></p>

- **Paso 3.** Extrae el archivo **.bz2** para obtener un archivo **.img**

- **Paso 4.** Descarga e instala **BalenaEtcher** según tu SO visitando [este enlace](https://www.balena.io/etcher) y ábrelo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/3.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 5.** Conecta una unidad flash USB a tu PC, haz clic en **Flash from file**, selecciona el archivo descargado/extraído de antes, haz clic en **Select target**, elige la unidad flash USB conectada y haz clic en **Flash**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/4.png" alt="pir" width={1000} height="auto" /></p>

### Arrancar OPNsense desde la unidad flash e instalar en unidad externa

- **Paso 1.** Conecta la unidad flash USB que flasheamos con la imagen de OPNsense antes a uno de los puertos USB del ODYSSEY-X86

- **Paso 2.** Conecta una unidad de almacenamiento externa para instalar OPNsense. ODYSSEY-X86 tiene varias opciones de almacenamiento como:

  - SSD NVMe
  - SSD SATA
  - HDD SATA
  - Tarjeta Micro-SD
  - Unidad Flash USB (>1GB)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

- **Paso 3.** Enciende ODYSSEY-X86 y presiona continuamente la tecla **DELETE** para entrar al BIOS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/5.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 4.** Ve a la pestaña **Boot**, selecciona **Boot Option #1** y selecciona **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/6.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 5.** Ve a la pestaña **Save & Exit**, selecciona **Save Changes and Reset** y selecciona **Yes** para la ventana emergente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/8.jpg" alt="pir" width={1000} height="auto" /></p>

Ahora ODYSSEY-X86 arrancará desde la unidad flash USB hacia OPNsense y verás la siguiente salida si arranca exitosamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/9.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 6.** Escribe **installer** en el prompt **login:** y escribe **opnsense** como la contraseña para entrar a la página de instalación

- **Paso 7.** Selecciona **Continue with default keymap** (opción por defecto) y presiona **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/10.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 8.** Selecciona **Install (UFS)** (opción por defecto) y presiona **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/11.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 9.** Selecciona la unidad externa conectada y presiona **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/12.png" alt="pir" width={1000} height="auto" /></p>

Ahora comenzará a instalar OPNsense en la unidad externa conectada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/13.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 10.** Una vez que la instalación esté completa, te pedirá cambiar **la contraseña de root**. Esto es **recomendado**. Presiona **ENTER** en la ventana y cambia la contraseña de root

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/14.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/15.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 11.** Selecciona **Complete Install** y presiona **ENTER** para reiniciar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/16.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 12.** Cuando el sistema comience a arrancar de nuevo, retira la Unidad Flash USB, entra al BIOS, selecciona la unidad externa conectada como el dispositivo de arranque y arranca de nuevo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/17.png" alt="pir" width={1000} height="auto" /></p>

Ahora ODYSSEY-X86 arrancará desde la unidad externa hacia OPNsense y verás la siguiente salida si arranca exitosamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/9.png" alt="pir" width={1000} height="auto" /></p>

### Configurar OPNsense

#### Cambiar la dirección IP de la interfaz LAN

Por defecto OPNsense asignará la interfaz LAN a **192.168.1.1** con **servidor DHCP** habilitado. Si la dirección IP de tu router también es 192.168.1.1 (la mayoría de routers tienen esta IP), es posible que quieras cambiar la IP LAN de OPNsense. Así que necesitamos hacer eso primero.

Sin embargo, si tu router tiene una dirección IP diferente de 192.168.1.1, puedes omitir esta sección y moverte a la **sección de Configuración de Hardware** que es la sección después de esta

- **Paso 1.** Inicia sesión en la **cuenta root** escribiendo **root** en el prompt **login:** seguido de la contraseña que especificaste antes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/18.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2.** Configura la configuración como sigue

  - Escribe **2** para establecer la dirección IP de la interfaz
  - Escribe **1** para seleccionar LAN como la interfaz a configurar
  - Escribe **N** para NO configurar la dirección IPv4 de la interfaz LAN vía DHCP
  - Escribe **192.168.2.1** como la nueva dirección IPv4 LAN (Puedes ingresar cualquier dirección IP de tu elección aquí)
  - Escribe **24** como el nuevo conteo de bits de subred IPv4 LAN
  - Presiona **ENTER** para configurar para LAN, no para WAN
  - Presiona **ENTER** para omitir configurar la dirección IPv6 de la interfaz LAN vía seguimiento WAN
  - Escribe **y** para habilitar el servidor DHCP en LAN
  - Escribe **192.168.2.1** como la dirección de inicio del rango de direcciones del cliente IPv4
  - Escribe **192.168.2.254** como la dirección final del rango de direcciones del cliente IPv4
  - Escribe **N** para NO cambiar el protocolo de la GUI web de HTTPS a HTTP
  - Escribe **N** para NO generar un nuevo certificado auto-firmado de la GUI web
  - Escribe **N** para NO restaurar los valores predeterminados de acceso de la GUI web

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/20.png" alt="pir" width={1000} height="auto" /></p>

Después de eso verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/21.png" alt="pir" width={1000} height="auto" /></p>

#### Configuración de Hardware

Conecta los 2 puertos Ethernet del ODYSSEY-X86 a una PC (cliente) y un router vía 2 cables Ethernet como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/22.png" alt="pir" width={1000} height="auto" /></p>

Después de esto, tu PC podrá conectarse a internet vía el router OPNsense recién configurado!

#### GUI de OPNsense

Escribe **192.168.2.1** en un navegador web e inicia sesión en la GUI web de OPNsense ingresando los detalles de la cuenta root que especificaste antes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/24.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/1.png" alt="pir" width={1000} height="auto" /></p>

Aquí puedes configurar muchas opciones según tus necesidades visitando la [documentación oficial de OPNsense](https://docs.docker.com)!

## Comunidad

<iframe width={560} height={315} src="https://www.youtube.com/embed/_IzyJTcnPu8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Recursos

- **[Página Web]** [Documentación Oficial de OPNsense](https://docs.docker.com)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
