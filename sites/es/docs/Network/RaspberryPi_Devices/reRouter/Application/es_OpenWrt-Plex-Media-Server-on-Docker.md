---
description: Plex Media Server en Docker
title: Plex Media Server
keywords:
- Sorftware OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/OpenWrt-Plex-Media-Server-on-Docker
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/thumb-1.png" alt="pir" width="1000" height="auto"/></p>

Esta guía explica cómo configurar Plex Media Server como un contenedor Docker en el firmware OpenWrt de Seeed. ¡Al usar Plex Media Server, puedes transmitir todos tus archivos multimedia locales desde cualquier lugar del mundo! Aquí OpenWrt puede ejecutarse en la [placa ODYSSEY – X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html) o en la [placa portadora Dual Gigabit Ethernet para Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html).

**Nota:** Asegúrate de seguir la [guía de introducción a OpenWrt](https://wiki.seeedstudio.com/es/OpenWrt-Getting-Started) antes de continuar con esta guía.

## ¿Qué es Docker?

[Docker](https://docs.docker.com/) es una plataforma abierta para desarrollar, enviar y ejecutar aplicaciones. Docker proporciona la capacidad de empaquetar y ejecutar una aplicación en un entorno ligeramente aislado llamado contenedor. El aislamiento y la seguridad te permiten ejecutar muchos contenedores simultáneamente en un host determinado. Los contenedores son ligeros y contienen todo lo necesario para ejecutar la aplicación, por lo que no necesitas depender de lo que esté instalado actualmente en el host. Puedes compartir fácilmente contenedores mientras trabajas, y estar seguro de que todos con quienes compartas obtendrán el mismo contenedor que funciona de la misma manera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width="200" height="auto"/></p>

## ¿Qué es Plex Media Server?

[Plex Media Server](https://www.plex.tv) es una herramienta que te permite acceder a la música, imágenes y videos almacenados en un dispositivo con muchos otros dispositivos. Puedes instalar el software Plex Media Server en una computadora Windows, Mac o Linux, dispositivo de almacenamiento conectado a la red (NAS) o incluso un router. Puedes transmitir todos tus archivos multimedia almacenados en tu Plex Media Server de forma remota a través de internet y acceder desde cualquier lugar del mundo usando la aplicación Plex.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

## Plex Media Server en Docker

Ahora vamos a repasar el proceso de ejecutar Plex Media Server como un contenedor Docker en OpenWrt.

### Crear una cuenta de Plex

Primero que todo, necesitamos tener una cuenta de Plex

- **Paso 1.** Haz clic en [este enlace](https://www.plex.tv) para visitar el sitio web de Plex

- **Paso 2.** Haz clic en **Sign Up** y crea una nueva cuenta de Plex

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-sign-up.jpg" alt="pir" width="1000" height="auto"/></p>

### Conectar almacenamiento externo para guardar los medios

Ahora necesitamos conectar unidades de almacenamiento externo para expandir el almacenamiento en las placas X86 y CM4 para que podamos almacenar todos nuestros medios.

ODYSSEY - X86J4125 tiene varias opciones de almacenamiento como:

- SSD PCIe
- SSD SATA
- HDD SATA
- Tarjeta Micro-SD
- Unidades flash USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width="650" height="auto"/></p>

La placa portadora Dual Gigabit Ethernet para Raspberry Pi CM4 tiene varias opciones de almacenamiento como:

- Unidades flash USB
- Tarjeta Micro-SD
- Expansión USB vía conector de 9 pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/cm4-storage-2.jpg" alt="pir" width="1000" height="auto"/></p>

Puedes conectar cualquier almacenamiento externo de tu elección consultando las opciones de almacenamiento anteriores.

### Montar el almacenamiento externo en OpenWrt

Después de conectar un dispositivo de almacenamiento externo necesitamos montarlo para poder usarlo

- **Paso 1.** Abre un navegador web e inicia sesión en el dispositivo OpenWrt

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Luci.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Hemos configurado previamente **192.168.2.1** como la dirección IP para iniciar sesión en OpenWrt. Así que puedes escribir esta dirección IP en el navegador web

- **Paso 2.** Navega a `System > Disk Man` y verás las unidades de almacenamiento conectadas al dispositivo OpenWrt

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Disk-man-1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Bajo la unidad de almacenamiento conectada, haz clic en **EDIT**

- **Paso 4.** Bajo **Partitions Info**, elimina todas las particiones haciendo clic en **REMOVE** junto a la partición

- **Paso 5.** Bajo **Device Info**, selecciona **GPT** para la **Partition Table**

- **Paso 6.** Bajo **Partitions Info**, haz clic en **NEW** para crear una partición

- **Paso 7.** Bajo la partición recién creada, haz clic en **FORMAT**, elige **ext4** y haz clic en **FORMAT** para formatear la partición

- **Paso 8.** Navega a `System > Disk Man` nuevamente

- **Paso 9.** Bajo **Mount Point**, elige la partición que creamos antes

- **Paso 10.** Deja **File system** como **auto**

- **Paso 11.** Bajo **Mount Options** escribe **rw** para permitir acceso de lectura y escritura a esta partición

- **Paso 12.** Bajo **Mount Point** escribe **/plex** y haz clic en **MOUNT** para montar la partición

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/disk-mount-1.png" alt="pir" width="1000" height="auto"/></p>

### Crear contenedor Docker de Plex Media Server

Ahora vamos a crear el contenedor docker de plex media server

- **Paso 1.** En la interfaz Luci de OpenWrt, navega a `Docker > Images`

- **Paso 2.** Bajo **Pull Image** escribe **linuxserver/plex** y haz clic en **PULL** para descargar la imagen Docker de Plex Media Server

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-image.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Espera unos segundos hasta que la imagen se descargue

- **Paso 3.** Navega a `Docker > Containers` y haz clic en **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-add.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Haz clic en **COMMAND LINE** e ingresa lo siguiente:

```sh
docker run \
-d \
--name plex \
--network=host \
-e TZ=<enter timezone> \
-e PLEX_CLAIM=<enter claimToken> \
-v /plex/database:/config \
-v /plex/temp:/transcode \
-v /plex/media:/data \
linuxserver/plex
```

**Nota:** Para obtener la **zona horaria**, visita [este enlace](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) y copia el **nombre de la base de datos TZ**. Para obtener el **claimToken**, visita [este enlace](#www.plex.tv/claim) y copia/pega el token.

- **Paso 5.** Finalmente haz clic en **ENVIAR**

### Ejecutar y Configurar Plex Media Server

- **Paso 1.** Ahora verás el contenedor listado. Haz clic en la **casilla de verificación** y haz clic en **INICIAR** para ejecutar el contenedor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-start.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Escribe **192.168.2.1:32400/web** para abrir la configuración inicial de Plex Media Server

**Nota:** 32400 es el puerto donde se está ejecutando el contenedor docker de Plex.

- **Paso 3.** Escribe un **Nombre del servidor** y haz clic en **SIGUIENTE**

- **Paso 4.** En **Organizar medios**, haz clic en **AGREGAR BIBLIOTECA**

- **Paso 5.** Selecciona el **tipo de biblioteca** y haz clic en **SIGUIENTE**

- **Paso 6.** Haz clic en **BUSCAR CARPETA DE MEDIOS**, selecciona la carpeta **data** y haz clic en **AGREGAR BIBLIOTECA**

**Nota:** Como hemos configurado antes, la carpeta **data** dentro del contenedor plex está vinculada con la carpeta **/plex/media** en OpenWrt

- **Paso 7.** Haz clic en **SIGUIENTE** y luego en **HECHO** para finalizar la configuración inicial.

Ahora verás la interfaz de usuario de Plex Media Server

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-ui.png" alt="pir" width="1000" height="auto"/></p>

### Montar el Directorio de Plex en la PC y Transferir los Medios

Después de montar el almacenamiento externo anteriormente, ahora necesitamos montar el directorio **/plex** en la PC para que pueda ser accedido fácilmente.

- **Paso 1.** En la interfaz Luci de OpenWrt, navega a `Servicios > Recursos Compartidos de Red`

- **Paso 2.** En **Directorios Compartidos**, haz clic en **AGREGAR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/network-shares.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Llena la fila según lo siguiente:

        - name: Plex 
        - Path: /plex
        - Browse-able: marcado
        - Force Root: marcado
        - Allow guests: marcado
        - Create mask: 0666
        - Directory mask: 0777

**Nota:** Aquí el campo **name** puede ser cualquier cosa de tu elección. **Force Root** está habilitado para permitir acceso root a esta carpeta.

- **Paso 4.** Haz clic en **GUARDAR** y luego haz clic en **GUARDAR Y APLICAR**

- **Paso 5.** Ve al **Explorador de archivos** en la PC y haz clic en **Red**

- **Paso 6.** Navega a `OpenWrt > plex > media` y copia todos los medios dentro de este directorio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/PC-shares.png" alt="pir" width="1000" height="auto"/></p>

### Reproducir los Medios en las Aplicaciones Cliente de Plex

Ahora puedes usar las aplicaciones cliente de Plex para ver todos tus medios dentro del Plex Media Server. La aplicación Plex puede ser instalada en varios dispositivos como teléfonos móviles, PCs, televisores inteligentes, etc...

Visita [este enlace](https://www.plex.tv/media-server-downloads/#plex-app) para ver los dispositivos compatibles para que puedas instalar la aplicación Plex en ellos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-client.jpg" alt="pir" width="1000" height="auto"/></p>

¡Ahora puedes navegar a la aplicación cliente de Plex, iniciar sesión y transmitir todas tus películas, música, imágenes y otros medios almacenados en el Plex Media Server!

### Convertir un Televisor Ordinario en un Televisor Inteligente para Ejecutar Plex

Es muy conveniente transmitir medios como películas desde tu Plex Media Server usando un televisor inteligente en casa. Necesitas un televisor inteligente porque la aplicación Plex puede ser instalada si el televisor tiene una tienda de aplicaciones. Sin embargo, si tienes un televisor ordinario, ¡puedes convertirlo en un televisor inteligente usando una Raspberry Pi!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" alt="pir" width="1000" height="auto"/></p>

¡Puedes seguir [este enlace](https://pimylifeup.com/raspberry-pi-android-tv-lineageos) para aprender más!

## Recursos

- **[Página Web]** [Documentación Oficial de Docker](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Plex Media Server](https://www.plex.tv)

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
