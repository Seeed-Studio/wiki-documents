---
description: ODYSSEY - X86J4105
title: Instalar Sistema Operativo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/linkstar-install-system
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: LinkStar-H68K-1432 Router with Wi-Fi 6 & 32GB eMMC, dual-2.5G & dual-1G Ethernet, 4K output, Pre-installed Android 11, Ubuntu & OpenWRT support
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110777
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El router LinkStar-H68K está equipado con el chip RK3568 Cortex-A55 de cuatro núcleos, que cuenta con 4 interfaces Ethernet para dual-2.5G y dual-1G, junto con tecnología Wi-Fi 6 (opcional), mientras proporciona alta capacidad de almacenamiento y funcionalidad de reproductor multimedia. En esta wiki te mostraremos cómo instalar el sistema operativo con tarjeta TF o eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/25.png" /></div>

## Selecciona el sistema que necesitas para LinkStar

El potente LinkStar soporta una amplia gama de sistemas operativos como Android, Ubuntu, OpenWRT, Debian y muchos más. En esta sección, te mostraremos los métodos de instalación para cada sistema.

### Notas e Instrucciones

LinkStar tiene dos tipos de almacenamiento, uno es el almacenamiento de **tarjeta TF** y el otro es el almacenamiento **eMMC**. Ambas memorias están disponibles para sistemas de memoria flash.

En este capítulo, podemos usar la tarjeta TF con un lector de tarjetas para flashear el sistema a la tarjeta TF. Debido a la velocidad de lectura/escritura y estabilidad, esta forma solo puede flashear el sistema **OpenWRT**.

- [Flashear OpenWRT a la tarjeta TF](#jump1)

También podemos flashear el sistema al eMMC que viene con el LinkStar. Este método actualmente soporta todos los sistemas operativos compatibles de LinkStar.

- [Flashear OpenWRT a eMMC](#jump2)
- [Flashear Android / Ubuntu a eMMC](#jump3)

Cuando se inserta una tarjeta TF en el LinkStar, el sistema en la tarjeta TF es el que arranca cuando se enciende el sistema, ya que la **TF tiene prioridad para arrancar**.

### <span id="jump1">Flashear OpenWRT a la tarjeta TF</span>

#### Preparación

- PC Windows/MacOS
- Cable de datos USB - C
- Una tarjeta TF
- Un lector de tarjetas
- [balenaEtcher](https://www.balena.io/etcher/) —— Por favor descarga e instala balenaEtcher, usaremos este software para flashear el sistema a una tarjeta TF.
- Paquete OpenWRT

Por favor prepara el equipo requerido arriba, los paquetes de actualización de firmware se pueden descargar haciendo clic en el botón de descarga a continuación.

| Versión | Descripción | Descarga |
|---------|----------|----------|
|  balenaEtcher  | - | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-TF-card-tool/) |
|  OpenWRT R22.11.18  | Añade soporte para Docker. | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |

:::caution
Al usar una tarjeta TF con LinkStar, es importante tener en cuenta que puede ser incompatible con algunas **tarjetas de alta velocidad**. Si estás usando una tarjeta de alta velocidad, puedes experimentar errores de carga de datos, errores de arranque o mal funcionamiento durante el encendido y la carga del sistema debido a la velocidad de la tarjeta.

La ventaja de usar una tarjeta TF es que diferentes redes pueden configurarse con diferentes tarjetas TF. También es posible tener múltiples sistemas - diferentes sistemas pueden usarse reemplazando diferentes tarjetas TF.
:::

#### Procedimiento

**Paso 1.** Conectar la TF a la PC

Por favor, coloca la TF en tu lector de tarjetas preparado y conéctalo a tu PC.

**Paso 2.** Grabar el sistema en una tarjeta TF

Abre balenaEtcher que ha sido instalado previamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/11.png" /></div>

Selecciona el firmware OpenWRT que descargaste, debería terminar en **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/12.png" /></div>

Selecciona la unidad en la que quieres grabar el sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/13.png" /></div>

Haz clic en el botón **Flash** y el software grabará el sistema en tu TF.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/14.png" /></div>

:::caution
Algunas computadoras pueden preguntar si el dispositivo USB no es reconocido después de grabar el sistema y si formatearlo, por favor **no** reformatees la tarjeta o el sistema interno será borrado.
:::

**Paso 3.** Arrancar OpenWRT desde la tarjeta TF

Retira la tarjeta TF del lector de tarjetas e insértala en la ranura de tarjeta TF del LinkStar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/15.png" /></div>

Luego enciende el LinkStar, puedes elegir alimentarlo vía **USB-C-5V** o vía **DC-12V**.

Cuando se enciende, el botón de encendido del LinkStar se iluminará en blanco. Presiona el botón de encendido y la unidad se encenderá y entrará al sistema.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LinkStar/16.png" /></div>

**Paso 4.** Administrar el backend de OpenWRT

Usa un cable de red para conectar al puerto de red ETH1/ETH2/ETH3 del LinkStar. Luego ingresa la dirección: `192.168.100.1` en tu navegador para acceder al backend de administración.

:::caution
ETH0 es el puerto WAN y los otros puertos de red son puertos LAN. Si quieres administrar el OpenWRT de LinkStar vía cable de red, entonces conecta el cable de red a un puerto LAN diferente a ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

La cuenta y contraseña iniciales para el sistema son las siguientes.

```
account: root
password: password
```

Felicidades, ahora has instalado exitosamente OpenWRT a través de la tarjeta TF.

### <span id="jump2">Flashear OpenWRT a eMMC</span>

#### Preparación

- PC con Windows
- Cable de datos USB - C
- Paquete OpenWRT
- Paquete Android (Opcional)

Por favor prepara el equipo requerido arriba, los paquetes de actualización de firmware pueden descargarse haciendo clic en el botón de descarga a continuación.

| Versión | Descripción | Descarga |
|---------|----------|----------|
| OpenWRT R22.11.18  | Añade soporte para Docker. | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |
| Herramienta de borrado de firmware | - | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Erase-tool/) |
| Herramienta y controlador para flashear a eMMC | - | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
|  Android TV R22.11.17 (Opcional)  | Soporte para control remoto (no está a la venta en este momento) | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/) |

:::caution
Si estás instalando OpenWRT desde otro sistema, necesitarás flashear tu sistema Android a eMMC antes de poder completar la instalación de OpenWRT, entonces puede que necesites descargar el paquete de Android.
:::

#### Procedimiento

**Paso 1.** Instalar el controlador

Ve a la carpeta **Rockchip_DriverAssistant_v5.1.1** y haz doble clic para abrir el archivo **DriverInstall.exe** para instalar el controlador.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

En el software de instalación del controlador que se inicia, haz clic en "驱动安装" (Instalación del Controlador).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**Paso 2.** Poner el dispositivo en modo Maskrom

Ve a la carpeta **RKDevTool_Release_v2.84** y haz doble clic para abrir el archivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

En este punto debería decir "No Devices Found" en la parte inferior del software.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

Presiona el botón **Update keyhole** continuamente con el pin de extracción de tarjetas y no lo sueltes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

Mantén tus manos en el LinkStar y conéctalo a tu computadora usando un cable tipo USB-C. Después puedes soltar el botón.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

En este punto observa el software nuevamente y mostrará de "No Devices Found" a "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**Paso 3.** Borrar firmware

Haz clic en "Upgrade Firmware", luego haz clic en "Firmware" y selecciona el archivo **LinkStar-H68K-EraseFlash.img** en el directorio de archivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

Después de importar el archivo, haz clic en "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/9.png" /></div>

Espera a que la operación se complete y haz clic en "确定" (OK).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/10.png" /></div>

<!-- **Paso 4.** Flash Android (Optional)

!!!Nota
    Si estás instalando OpenWRT desde otro sistema, por favor completa primero este Paso, si no, puedes omitir este paso.

Haz clic en "Upgrade Firmware", luego haz clic en "Firmware" y selecciona la imagen de Android que quieres instalar, este archivo termina con **.img**.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/8.png"/></div>

Después de importar el archivo, haz clic en "Actualizar".

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/23.png"/></div>

Espera a que aparezca el mensaje de que "Reset Device Success", momento en el cual el sistema habrá terminado de flashear.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/24.png"/></div>

Una vez que el flash del sistema esté completo, el LInkStar se reiniciará automáticamente y una vez reiniciado entrará al sistema.

En este punto, por favor apaga y desconecta la alimentación del LinkStar y vuelve a intentar el **Paso2** para poner LinkStar en **modo Maskrom**. -->

**Paso 4.** Flashear OpenWRT

:::note
si has seguido los pasos anteriores tu LinkStar H68K debería estar aún en Modo MASKROOM, si no es así por favor repite y sigue los pasos del **Paso 2** nuevamente.
:::

Haz clic en "Download Image" en la esquina superior izquierda del software, luego selecciona el archivo **H68K-Boot-Loader_xxx.bin** para la primera línea de opción **Boot**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/18.png" /></div>

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/19.png" /></div>

Luego en la segunda línea de opciones **system**, selecciona la imagen del sistema para OpenWRT. Debería ser un archivo que termine en **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/20.png" /></div>

Luego haz clic en el botón "Run" de abajo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/21.png" /></div>

Espera el mensaje "Download image OK", entonces el sistema ha sido instalado exitosamente en el eMMC del LinkStar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/22.png" /></div>

Una vez que el flasheo del sistema esté completo, el LinkStar H68K debería reiniciarse automáticamente y una vez reiniciado entrará al sistema OpenWRT.

**Paso 5.** Gestionar el backend de OpenWRT

Usa un cable de red para conectar al puerto de red ETH1/ETH2/ETH3 del LinkStar. Luego ingresa la dirección: `192.168.100.1` en tu navegador para acceder al backend de administración.

:::caution
ETH0 es el puerto WAN y los otros puertos de red son puertos LAN. Si quieres gestionar el OpenWRT del LinkStar vía cable de red, entonces conecta el cable de red a un puerto LAN que no sea ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

La cuenta y contraseña iniciales para el sistema son las siguientes.

```
account: root
password: password
```

Felicidades, ahora has instalado exitosamente OpenWRT en eMMC.

### <span id="jump3">Flashear Android / Ubuntu a eMMC</span>

#### Preparación

- PC con Windows
- Cable de datos USB - C
- paquete del sistema.

Por favor ten listos los dispositivos y software mencionados arriba, los paquetes de actualización de firmware se pueden descargar haciendo clic en el botón de descarga a continuación.

| Versión | Descripción | Descarga |
|---------|----------|----------|
| Herramienta y controlador para flashear a eMMC | - | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
|  Android Pad R22.11.17  | Corrige indicador de funcionamiento; corrige problema de HDMI sin sonido; cambia botón derecho del ratón a retroceder; cambia densidad a 240 | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/)  |
|  Android TV R22.11.17  | Soporte para control remoto (no está a la venta en este momento) | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/)  |
| Ubuntu 20.04 R22.01.15 | Añade soporte para wifi AP256, `Nombre de usuario predeterminado: linkstar, Contraseña: linkstar, Nombre de usuario Root:root, Contraseña Root:root` | [Descarga](https://sourceforge.net/projects/linkstar-h68k-os/files/Ubuntu%2020.04/) |

:::note
Debido a los recursos limitados en el núcleo de CPU basado en ARM de Linkstar, el Ubuntu 20.04 está basado en [Lubuntu](https://lubuntu.me/) que es una distribución Linux ligera de Ubuntu que utiliza el entorno de escritorio LXDM o LXQt.
:::

:::caution
La imagen proporcionada aquí no soporta Card-Flashing.
:::

#### Procedimiento

El tutorial aquí toma la instalación de **Android TV** como ejemplo, los pasos de instalación para otros sistemas son más o menos los mismos, solo elige un archivo de imagen de sistema diferente.

**Paso 1.** Instalar el controlador

Ve a la carpeta **Rockchip_DriverAssistant_v5.1.1** y haz doble clic para abrir el archivo **DriverInstall.exe** para instalar el controlador.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

En el software de instalación del controlador que se inicia, haz clic en "驱动安装" (Instalación del Controlador).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**Paso 2.** Poner el dispositivo en modo Maskrom

Ve a la carpeta **RKDevTool_Release_v2.84** y haz doble clic para abrir el archivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

En este punto debería decir "No Devices Found" en la parte inferior del software.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

Presiona continuamente el botón **Update keyhole** con el pin de extracción de tarjetas y no lo sueltes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

Mantén tus manos en el LinkStar y conéctalo a tu computadora usando un cable tipo USB-C. Después puedes soltar el botón.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

En este punto observa el software nuevamente y mostrará el cambio de "No Devices Found" a "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**Paso 3.** Flashear Firmware

Haz clic en "Upgrade Firmware", luego haz clic en "Firmware" y selecciona la imagen del sistema que quieres instalar, este archivo termina con **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

Después de importar el archivo, haz clic en "Upgrade".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/23.png" /></div>

Espera a que aparezca el mensaje que dice "Reset Device Success", en este punto el sistema ha terminado de flashearse.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/24.png" /></div>

Una vez que el flasheo del sistema esté completo, el LinkStar se reiniciará automáticamente y una vez reiniciado entrará al sistema.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
