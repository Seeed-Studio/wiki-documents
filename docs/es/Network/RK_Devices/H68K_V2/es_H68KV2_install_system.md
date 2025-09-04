---
description: LinkStar-V2 Instalar Sistema Operativo
title: Instalar Sistema Operativo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/H68KV2_install_system
last_update:
  date: 04/18/2024
  author: Parker
---

<!-- ---
name: LinkStar-H68K-1432-V2 Router with Wi-Fi 6, 4GB RAM & 32GB eMMC, dual-2.5G & dual-1G Ethernet, 4K output, Pre-installed OpenWRT support Armbian
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El router LinkStar-H68K-V2 está equipado con el chip RK3568 Cortex-A55 de cuatro núcleos, que cuenta con 4 interfaces Ethernet para dual-2.5G y dual-1G, junto con tecnología Wi-Fi 6, mientras proporciona alta capacidad de almacenamiento y funcionalidad de reproductor multimedia. En esta wiki te mostraremos cómo instalar el sistema operativo con tarjeta TF o eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

## Selecciona el sistema que necesitas para LinkStar-V2

El potente LinkStar-V2 soporta una amplia gama de sistemas operativos como OpenWRT, Armbian y muchos más. En esta sección, te mostraremos los métodos de instalación para cada sistema. Mientras tanto, es compatible con todo el [firmware](https://wiki.seeedstudio.com/es/linkstar-install-system/#flash-android--ubuntu-to-emmc) de las versiones anteriores de LinkStar H68K.

### Notas e Instrucciones

LinkStar-V2 tiene dos tipos de almacenamiento, uno es el almacenamiento de **tarjeta TF** y el otro es el almacenamiento **eMMC**. Ambas memorias están disponibles para sistemas de memoria flash.

En este capítulo, podemos usar la tarjeta TF con un lector de tarjetas para flashear el sistema a la tarjeta TF. Debido a la velocidad de lectura/escritura y estabilidad, esta forma solo puede flashear el sistema **OpenWRT**.

- [Flashear OpenWRT a la tarjeta TF](#jump1)

También podemos flashear el sistema al eMMC que viene con el LinkStar-V2. Este método actualmente soporta todos los sistemas operativos compatibles del LinkStar-V2.

- [Flashear OpenWRT a eMMC](#jump2)

Cuando se inserta una tarjeta TF en el LinkStar-V2, el sistema en la tarjeta TF es el que arranca cuando se enciende el sistema, ya que la **TF tiene prioridad para arrancar**.

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
|  balenaEtcher  | Herramienta de Grabación ISO  | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
|  OpenWRT R22.11.18  | Añade soporte para Docker. | [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |

:::caution
Al usar una tarjeta TF con LinkStar-V2, es importante tener en cuenta que puede ser incompatible con algunas **tarjetas de alta velocidad**. Si está usando una tarjeta de alta velocidad, puede experimentar errores de carga de datos, errores de arranque o mal funcionamiento durante el encendido y la carga del sistema debido a la velocidad de la tarjeta.

La ventaja de usar una tarjeta TF es que diferentes redes pueden configurarse con diferentes tarjetas TF. También es posible tener múltiples sistemas - diferentes sistemas pueden usarse reemplazando diferentes tarjetas TF.
:::

#### Procedimiento

**Paso 1.** Conectar la TF a la PC

Por favor, coloque la TF en su lector de tarjetas preparado y conéctelo a su PC.

**Paso 2.** Grabar el sistema en una tarjeta TF

Abra balenaEtcher que ha sido instalado con anticipación.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/25.png" /></div>

Seleccione el firmware OpenWRT que descargó, debería terminar en **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/26.png" /></div>

Seleccione la unidad en la que desea grabar el sistema.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/27.png" /></div>

Haga clic en el botón **Flash** y el software grabará el sistema en su TF.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/28.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/29.png" /></div>

:::caution
Algunas computadoras pueden preguntar si el dispositivo USB no es reconocido después de grabar el sistema y si formatearlo, por favor **no** reformatee la tarjeta o el sistema interno será borrado.
:::

**Paso 3.** Arrancar OpenWRT desde la tarjeta TF

Retire la tarjeta TF del lector de tarjetas e insértela en la ranura de tarjeta TF del LinkStar-V2.

Luego encienda el LinkStar, puede elegir alimentarlo a través de **alimentación Type-C**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/30.png" /></div>

**Paso 4.** Administrar el backend de OpenWRT

Use un cable de red para conectarse al puerto de red ETH1/ETH2/ETH3 del LinkStar-V2. Luego ingrese la dirección: `192.168.100.1` en su navegador para acceder al backend de administración.

:::caution
ETH0 es el puerto WAN y los otros puertos de red son puertos LAN. Si desea administrar OpenWRT del LinkStar-V2 a través de un cable de red, entonces conecte el cable de red a un puerto LAN que no sea ETH0.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

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
- Paquete Armbian (Opcional)

Por favor prepara el equipo requerido mencionado arriba, los paquetes de actualización de firmware pueden descargarse haciendo clic en el botón de descarga a continuación.

| Versión | Descripción | Descarga |
|---------|----------|----------|
| OpenWRT R22.11.18  | Añade soporte para Docker. | [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Herramienta y controlador para flashear a eMMC | - | [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| Armbian 24.5.0 escritorio (Opcional)  | - | [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |

#### Procedimiento

**Paso 1.** Instalar el controlador

El [archivo](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) que descargaste contiene los siguientes tres archivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/07.png" /></div>

Ve a la carpeta **Rockchip_DriverAssistant_v5.1.2** y haz doble clic para abrir el archivo **DriverInstall.exe** para instalar el controlador.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/08.png" /></div>

En el software de instalación del controlador que se inicia, haz clic en "驱动安装" (Instalación del Controlador).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/09.png" /></div>

**Paso 2.** Poner el dispositivo en modo Maskrom

Ve a la carpeta **RKDevTool_Release_v2.84** y haz doble clic para abrir el archivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/10.png" /></div>

En este punto debería decir "No Devices Found" en la parte inferior del software.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/11.png" /></div>

Presiona continuamente el botón **Update keyhole** con el pin de extracción de tarjetas y no lo sueltes. Luego mantén tus manos en el LinkStar-V2 y conéctalo a tu computadora usando un cable tipo USB-C. Después puedes soltar el botón.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/12.png" /></div>

En este punto observa el software nuevamente y mostrará de "No Devices Found" a "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/13.png" /></div>

**Paso 3.** Borrar firmware

Haz clic en "Upgrade Firmware", luego haz clic en "Firmware" y selecciona el archivo **H6XK-Boot-Loader.bin** en el directorio de archivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/14.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/15.png" /></div>

Después de importar el archivo, haz clic en "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/16.png" /></div>

Espera a que la operación se complete y haz clic en "确定" (OK).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/17.png" /></div>

**Paso 4.** Flashear OpenWRT

:::note
si seguiste los pasos anteriores, tu LinkStar H68K-V2 debería estar aún en Modo MASKROOM, si no es así, por favor repite y sigue los pasos del **Paso 2** nuevamente.
:::

Haz clic en "Download Image" en la esquina superior izquierda del software, luego selecciona el archivo **H6XK-Boot-Loader.bin** para la primera línea de opción **Boot**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/18.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/19.png" /></div>

Luego en la segunda línea de opciones **system**, selecciona la imagen del sistema para OpenWRT. Debería ser un archivo que termine en **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/20.png" /></div>

Luego haz clic en el botón "Run" de abajo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/21.png" /></div>

Espera el mensaje "Download image OK", entonces el sistema se ha instalado exitosamente en el eMMC del LInkStar-V2.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/22.png" /></div>

Una vez que el flasheo del sistema esté completo, el LinkStar H68K-V2 debería reiniciarse automáticamente y una vez reiniciado entrará al sistema OpenWRT.

**Paso 5.** Gestionar el backend de OpenWRT

Usa un cable de red para conectarte al puerto de red ETH1/ETH2/ETH3 del LinkStar-V2. Luego ingresa la dirección: `192.168.100.1` en tu navegador para acceder al backend de administración.

:::caution
ETH0 es el puerto WAN y los otros puertos de red son puertos LAN. Si quieres gestionar el OpenWRT del LinkStar-V2 a través de un cable de red, entonces conecta el cable de red a un puerto LAN que no sea ETH0.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/23.png" /></div>

La cuenta y contraseña iniciales del sistema son las siguientes.

```
account: root
password: password
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

¡Felicidades, ahora has instalado exitosamente OpenWRT en eMMC!

## Recursos

LinkStar H68K-V2 es hardware de código abierto. Enlaces de descarga a materiales relevantes.

| Versión                     | Descripción      | Descarga                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | Añade soporte para Docker| [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (Opcional)|-| [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| Herramienta y controlador para flashear a eMMC | - | [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | Herramienta de grabación ISO  | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                    | Esquemáticos H68K  | [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| Hoja de datos RK3568            | - | [Descarga](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| Módulo Wi-Fi M7921E         | - | [Descarga](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

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
