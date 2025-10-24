---
description: ODYSSEY - X86J41x5
title: Instalación de FreeNAS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-Installing-FreeNAS
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Installing-FreeNAS/
sku: 102110399
--- -->

Este tutorial demuestra cómo instalar el sistema operativo de almacenamiento de código abierto. [FreeNAS](https://www.freenas.org/) es un sistema operativo que se puede instalar en prácticamente cualquier plataforma de hardware para compartir datos a través de una red. ¡Al instalar FreeNAS en ODYSSEY - X86J41x5 has construido tu propia unidad de nube personal!

## Requisitos de Hardware

- Una Computadora Funcional

- Unidad USB x 2 (>= 8GB es recomendado)

- Un Monitor

- Teclado

## Descargar la Imagen del SO FreeNAS

Primero, descarga la [Imagen del SO FreeNAS](https://www.freenas.org/download-freenas-release/) en tu unidad. Debe ser un archivo `.iso`.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-download.jpg)

En este tutorial, se utiliza FreeNAS 11.3. FreeNAS necesitará instalarse en una unidad diferente. Puedes instalar FreeNAS en un disco duro HDD o SSD.

**Nota:** En este tutorial, el SO FreeNAS se instala en una unidad USB por conveniencia.

## Crear un USB de Arranque

### Paso 1 - Preparar tu USB de Arranque

Formatea una de las unidades USB. Si eres usuario de Windows, puedes formatear la unidad USB haciendo clic derecho en la Unidad USB y seleccionar `Formatear`.

**Nota:** Elige `FAT32` para el Sistema de Archivos.

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Paso 2 - Descargar Grabador Flash

Descarga el grabador Flash de código abierto [balenaEtcher](https://www.balena.io/etcher/). Descarga la versión según tu sistema operativo(Windows/macOS/Linux).

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Paso 3 - Escribir la Imagen del SO en USB

Selecciona la Imagen del Sistema Operativo descargada, selecciona la Unidad USB formateada y ¡Graba! Ahora, el USB de arranque está listo para usar.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Instalar el SO FreeNAS

### Paso 1 - Habilitar el Modo CSM en ODYSSEY - X86J41x5

Conecta tu USB de arranque, Monitor y teclado a ODYSSEY - X86J41x5, y enciende. Al arrancar, mantén presionada la tecla **`DEL`** para entrar a la pantalla de configuración. Navega a **`Advanced`** -> **`CSM Support`** y presiona Enter para habilitarlo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Paso 2 - Instalar el SO

Reinicia tu ODYSSEY - X86J41x5 y mantén presionada **`F7`** para entrar a la pantalla del administrador de arranque. Selecciona el USB de arranque (Instalador) y presiona Enter.

**Nota:** Recuerda elegir el que tiene la imagen iso de FreeNAS.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Paso 3 - Proceso de instalación

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-boot.jpg)

Debe aparecer una pantalla de arranque como la anterior. Presiona `Enter` para seleccionar Boot FreeNAS Installer.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-option.jpg)

Una vez dentro del instalador, debe aparecer un menú de opciones como el siguiente, selecciona **Install/Select** y presiona `Enter`.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-drive.jpg)

Selecciona una unidad para instalar la imagen de FreeNAS. Aquí deberíamos poder ver la otra unidad USB.

**Nota:** Usa la `barra espaciadora` para seleccionar la unidad USB.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-warning.jpg)

Aparecerá una advertencia indicando que todo en la unidad elegida será borrado, simplemente presiona Yes.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-pw.jpg" /></div>

Crea tu contraseña de root para iniciar sesión en FreeNAS desde la interfaz Web más tarde.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-complete.jpg)

El proceso de instalación tendrá lugar, y espera hasta que la instalación termine. Cuando esté hecho, debería verse como arriba.

El proceso de instalación está completo, puedes reiniciar el ODYSSEY - X86J41x5 y desconectar el USB de arranque(Instalador).

Conecta el cable Ethernet para internet y se puede acceder a la interfaz Web.

## Configuraciones

Reinicia el ODYSSEY - X86J41x5 y presiona `F7` nuevamente para ingresar a la pantalla del Administrador de Arranque, y elige la unidad USB que acaba de instalar FreeNAS.

**Nota:** También puedes cambiarlo en la configuración presionando `DEL` y establecer la unidad USB como la primera opción de arranque.

Una vez iniciado en FreeNAS, deberías ver la dirección de la interfaz web:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-bootcomplete.jpg" /></div>

**Nota:** Si indica que no se puede acceder a la interfaz web, por favor verifica tu conexión a internet.

Usa otra computadora usando el mismo internet, es decir, tu laptop para escribir la dirección en el navegador web:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web1.jpg)

El nombre de usuario es `root` y la contraseña es la que se estableció durante la instalación.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web2.jpg)

Si puedes ver esta pantalla entonces has instalado exitosamente FreeNAS y siéntete libre de agregar más almacenamiento al ODYSSEY - X86J41x5 y diviértete con tu unidad de nube personal!

*Para mayor desarrollo, puedes visitar el [Foro oficial de FreeNAS](https://www.ixsystems.com/community/?__hstc=54333623.367bb0a280861850367fe7c0081ee5de.1582628751612.1582693495900.1582699340011.3&__hssc=54333623.1.1582699340011&__hsfp=3609375136) y descubrir más sobre plugins y características*

## Carcasa Acrílica

¡También hemos diseñado una Carcasa Acrílica para construir tu propio NAS en una carcasa! Aquí proporcionamos dos versiones de carcasa dependiendo del tamaño de tu disco duro:

1. Para disco duro [**SATA HDD de 2.5 pulgadas**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-2.5.dwg).

2. Para disco duro [**SATA HDD de 3.5 pulgadas**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-3.5.dwg).

**Materiales Requeridos:**

- Láminas acrílicas de 3mm

- Pilar Roscado Hexagonal Hembra-Hembra M3 x 20mm x 4

- Pilar Roscado Hexagonal Hembra-Hembra M3 x 40mm x 4 (o usar M3 x 20mm para apilar hasta 40mm)

- Tornillos M3

## Recursos

- Video de Explaining Computers sobre FreeNAS en Odyssey-X86:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qyz91Q_JrBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Otras aplicaciones útiles:

- [Comenzando con FreeNAS 11 Instalar, Configurar, Configurar Usuarios, Configurar Compartidos y Cómo Funcionan las Instantáneas](https://www.youtube.com/watch?v=sMZ-s8wHkHw&list=PLMeX7dgR89SvzGW0eumZuP_LAeBGEDnBb&index=11)

- [Cómo configurar un servidor de archivos doméstico usando FreeNAS](https://www.windowscentral.com/how-to-set-up-freenas-home-file-server)

- [Respaldando FreeNAS y TrueNAS a Backblaze B2](https://www.backblaze.com/blog/how-to-setup-freenas-cloud-storage/)

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
