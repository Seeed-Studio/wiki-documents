---
description: ODYSSEY - X86J4105
title: Instalación de TrueNAS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86-TrueNAS
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/1.png" alt="pir" width={1000} height="auto" /></p>

Esta guía explica cómo convertir tu ODYSSEY-X86 en un Almacenamiento Conectado a la Red (NAS) instalando TrueNAS. ¡Comencemos!

## ¿Qué es TrueNAS?

[TrueNAS](https://www.truenas.com) es un sistema operativo de almacenamiento conectado a la red (NAS) gratuito y de código abierto desarrollado por iXsystems. Está basado en FreeBSD y Linux y utiliza el sistema de archivos OpenZFS. Puede ejecutarse en casi todo el hardware basado en X86.

TrueNAS tiene varias ediciones e incluye TrueNAS CORE (anteriormente conocido como FreeNAS), TrueNAS Enterprise (edición comercial), y TrueNAS SCALE (edición Linux). Puedes visitar [este enlace](https://www.truenas.com/compare-editions) para aprender más sobre las diferencias entre ellas.

TrueNAS soporta clientes ejecutando múltiples sistemas operativos como Windows, macOS y Linux. También ofrece varios hosts de virtualización como XenServer y VMware usando los protocolos SMB, AFP, NFS, iSCSI, SSH, rsync y FTP/TFTP. También incluye características avanzadas como cifrado de disco completo y una arquitectura de complementos para software de terceros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/2.png" alt="pir" width={400} height="auto" /></p>

## Prerrequisitos

- [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- Unidad Flash USB (>1GB)
- Cable Ethernet y un router con un puerto libre
- Medio de almacenamiento externo (Si usas ODYSSEY-X86 con eMMC integrado, también puedes usar eso)

  - SSD NVMe o
  - SSD SATA o
  - HDD SATA o
  - Tarjeta Micro-SD o
  - Unidad Flash USB (>1GB)

## Comenzando

Ahora vamos a repasar el proceso de instalación de TrueNAS en ODYSSEY-X86. Aquí usaremos TrueNAS Core como ejemplo para recorrer los pasos de instalación.

### Grabar imagen de TrueNAS en una unidad flash USB

- **Paso 1.** Visita [este enlace](https://www.truenas.com/download-truenas-core) para abrir la página de descarga de TrueNAS Core

**Nota:** Si quieres descargar TrueNAS scale, puedes visitar [este enlace](https://www.truenas.com/download-truenas-scale)

- **Paso 2.** Puedes suscribirte al boletín de TrueNAS o elegir omitir ese paso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/3.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 3.** Descarga la versión **Stable**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/4.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 4.** Descarga e instala **BalenaEtcher** según tu SO visitando [este enlace](https://www.balena.io/etcher) y ábrelo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/3.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 5.** Conecta una unidad flash USB a tu PC, haz clic en **Flash from file**, selecciona el archivo descargado anteriormente, haz clic en **Select target**, elige la unidad flash USB conectada y haz clic en **Flash**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/5.jpg" alt="pir" width={1000} height="auto" /></p>

### Arrancar TrueNAS desde la unidad flash e instalar en unidad externa

- **Paso 1.** Conecta la unidad flash USB en la que grabamos la imagen de TrueNAS anteriormente a uno de los puertos USB del ODYSSEY-X86

- **Paso 2.** Conecta una unidad de almacenamiento externa para instalar TrueNAS. ODYSSEY-X86 tiene varias opciones de almacenamiento como:

  - SSD NVMe
  - SSD SATA
  - HDD SATA
  - Tarjeta Micro-SD
  - Unidad Flash USB (>1GB)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

**Nota:** Aquí te recomendamos elegir un SSD M.2 para instalar TrueNAS por confiabilidad y elegir el puerto M.2 y SATA restantes para conectar otras unidades para almacenamiento de archivos

- **Paso 3.** Conecta un extremo de un cable Ethernet a uno de los puertos Ethernet del ODYSSEY-X86 y el otro extremo del cable a un router

- **Paso 4.** Enciende ODYSSEY-X86 y presiona continuamente la tecla **DELETE** para entrar al BIOS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/5.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 5.** Ve a la pestaña **Boot**, selecciona **Boot Option #1** y selecciona **UEFI: USB, Partition 2**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/6.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 6.** Ve a la pestaña **Save & Exit**, selecciona **Save Changes and Reset** y selecciona **Yes** para la ventana emergente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/8.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 7.** Una vez que ODYSSEY-X86 arranque exitosamente en TrueNAS, presiona **ENTER** para proceder con la opción **Install/Upgrade** que está resaltada por defecto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/7.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 8.** Elige tu unidad deseada para instalar TrueNAS presionando **SPACE** después de navegar usando las **teclas de flecha**. Presiona **ENTER** para ir al siguiente paso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/8.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 9.** Presiona **ENTER** nuevamente para proceder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/9.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 10.** Ahora te pedirá cambiar la **contraseña de root**. Esto es **recomendado**. Ingresa una contraseña y presiona **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/10.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 11.** Elige **arrancar vía UEFI** porque ODYSSEY-X86 soporta arranque UEFI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/11.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 12.** Elige **Crear swap** para un mejor rendimiento

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/12.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 13.** Una vez que TrueNAS termine de instalarse, presiona **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/13.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 14.** Selecciona **Reiniciar Sistema** y presiona **ENTER** nuevamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/14.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 15.** Cuando el sistema comience a arrancar nuevamente, retira la Unidad Flash USB, ingresa al BIOS, selecciona la unidad externa conectada como dispositivo de arranque y arranca nuevamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/15.png" alt="pir" width={1000} height="auto" /></p>

Ahora ODYSSEY-X86 arrancará desde la unidad externa hacia TrueNAS y verás la siguiente salida si arranca exitosamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/16.png" alt="pir" width={1000} height="auto" /></p>

### Configurar TrueNAS

Ahora configuraremos el software TrueNAS

#### Acceder a la GUI

- **Paso 1.** Ingresa la dirección IP mostrada en un navegador

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/17.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 2.** Ingresa el nombre de usuario como **root** y la contraseña que configuraste antes para **INICIAR SESIÓN**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/18.png" alt="pir" width={1000} height="auto" /></p>

Finalmente podrás acceder a la GUI del panel de control de TrueNAS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/19.png" alt="pir" width={1000} height="auto" /></p>

Aquí puedes configurar una gran cantidad de ajustes y explorar muchas características. Puedes aprender más visitando la [documentación oficial de TrueNAS](https://www.truenas.com/docs)

#### Configurar pool de almacenamiento

Para esta sección de este wiki, te mostraremos cómo configurar un pool de almacenamiento con el HDD conectado

- **Paso 1.** Primero necesitamos crear un pool de almacenamiento. Navega a `Storage > Pools` y haz clic en **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/20.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2.** Haz clic en **CREATE POOL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/21.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 3.** Escribe un **nombre** para el pool

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/22.png" alt="pir" width={550} height="auto" /></p>

- **Paso 4.** Selecciona todos los discos disponibles y haz clic en la **flecha que apunta a la derecha** para agregar los discos. Aquí solo hemos conectado un HDD. Sin embargo, puedes conectar múltiples HDDs y todos se mostrarán aquí.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/23.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/24.png" alt="pir" width={1000} height="auto" /></p>

Dado que hemos conectado solo un HDD, solo permitirá la configuración **Stripe**. Sin embargo, si se conectan múltiples discos, tendrá la opción de **RAID** que se enfoca en la redundancia de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/25.png" alt="pir" width={500} height="auto" /></p>

- **Paso 5.** Ignora las advertencias sobre **pérdida de datos** (debido a una sola unidad) marcando **Force**, luego **Confirm** y finalmente haz clic en **CONTINUE**. Si tienes múltiples unidades conectadas, no tendrás esta advertencia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/26.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Haz clic en **CREATE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/27.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Marca **Confirm** y luego haz clic en **CREATE POOL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/28.jpg" alt="pir" width={350} height="auto" /></p>

Una vez que el pool sea creado, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/29.png" alt="pir" width={1000} height="auto" /></p>

#### Crear una cuenta de usuario

Ahora crearemos una nueva cuenta de usuario y vincularemos la cuenta de usuario a un dataset

- **Paso 1.** Navega a `Accounts > Users` y haz clic en **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/30.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2.** Escribe **Nombre Completo**, **Nombre de Usuario** y **Contraseña**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/31.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 3.** Marca **Microsoft Account** y haz clic en **SUBMIT**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/32.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 4.** Navega a **Pools** nuevamente, haz clic en los **3 puntos** junto al pool que creamos antes y haz clic en **Add Dataset**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/33.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 5.** Da un nombre para el Dataset y haz clic en **SUBMIT**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/34.png" alt="pir" width={450} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/35.png" alt="pir" width={450} height="auto" /></p>

- **Paso 6.** Haz clic en los **3 puntos** junto al conjunto de datos recién creado y selecciona **Edit Permissions**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/36.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 7.** Selecciona el nombre de usuario creado previamente como **User** y **Group** desde los menús desplegables, marca **Apply User** y **Apply Group** y finalmente haz clic en **SAVE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/37.png" alt="pir" width={1000} height="auto" /></p>

#### Configurar recurso compartido SMB y acceso desde PC

A continuación te mostraremos cómo hacer que este espacio de almacenamiento sea accesible desde una PC

- **Paso 1.** Navega a `Sharing > Windows Shares (SMB)` y haz clic en **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/38.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2.** Selecciona el conjunto de datos que creamos anteriormente al final y haz clic en **SUBMIT**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/39.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 3.** Haz clic en **CONFIGURE NOW** para la ventana emergente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/40.png" alt="pir" width={350} height="auto" /></p>

- **Paso 4.** Selecciona **RESTRICTED** y haz clic en **CONTINUE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/41.png" alt="pir" width={350} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/42.png" alt="pir" width={350} height="auto" /></p>

- **Paso 5.** Haz clic en **SAVE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/43.png" alt="pir" width={1000} height="auto" /></p>

Ahora hemos configurado exitosamente el recurso compartido SMB

- **Paso 6.** Ve al **Explorador de archivos** en una PC, y selecciona **Conectar a unidad de red** desde el **menú de 3 puntos**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/44.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 7.** Junto a **Carpeta**, escribe lo siguiente

```sh
\\<IP_address_of_x86>\<dataset_name>
```

Luego marca ambas casillas debajo de eso y haz clic en **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/45.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Ingresa el nombre de usuario y contraseña que especificaste cuando creaste una nueva cuenta anteriormente, marca la casilla **Remember my credentials** y haz clic en **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/46.png" alt="pir" width={450} height="auto" /></p>

Ahora podrás acceder a esta unidad compartida directamente desde tu PC. Puedes comenzar a copiar archivos directamente desde tu PC a esta unidad

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/47.png" alt="pir" width={400} height="auto" /></p>

## Recursos

- **[Página Web]** [Documentación oficial de TrueNAS](https://www.truenas.com/docs)

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
