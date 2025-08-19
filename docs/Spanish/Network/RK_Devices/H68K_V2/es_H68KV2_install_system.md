---
description: LinkStar-V2 Install Operating System
title: Instalación de Sistemas Operativos LinkStar-V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/H68KV2_install_system
last_update:
  date: 06/10/2025
  author: Guillermo
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El router LinkStar-H68K-V2 está equipado con un chip RK3568 de cuatro núcleos Cortex-A55, que incluye 4 interfaces Ethernet: dos de 2.5G y dos de 1G, además de tecnología Wi-Fi 6. También ofrece una alta capacidad de almacenamiento y funciones de reproductor multimedia. En este wiki te mostraremos cómo instalar un sistema operativo utilizando una tarjeta TF o la memoria eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

## Selecciona el sistema que necesitas para LinkStar-V2

El potente LinkStar-V2 es compatible con una amplia gama de sistemas operativos como OpenWRT, Armbian y muchos más. En esta sección, te mostraremos los métodos de instalación para cada sistema. Mientras tanto, es compatible con todo el [firmware](https://wiki.seeedstudio.com/linkstar-install-system/#flash-android--ubuntu-to-emmc) de versiones anteriores del LinkStar H68K.

### Notas e Instrucciones

El LinkStar-V2 tiene dos tipos de almacenamiento, uno es la **tarjeta TF** y el otro es la **memoria eMMC**. Ambos tipos están disponibles para la instalación de sistemas mediante flasheo.

En este capítulo, usaremos la tarjeta TF con un lector de tarjetas para flashear el sistema. Debido a la velocidad de lectura/escritura y estabilidad, este método solo permite flashear el sistema **OpenWRT**.

- [Flashear OpenWRT a la tarjeta TF](#jump1)

También podemos flashear el sistema a la memoria eMMC incluida en el LinkStar-V2. Este método actualmente admite todos los sistemas operativos compatibles con el dispositivo.

- [Flashear OpenWRT a eMMC](#jump2)

Cuando se inserta una tarjeta TF en el LinkStar-V2, el sistema de la tarjeta TF es el que se inicia al encender el equipo, ya que la **tarjeta TF tiene prioridad de arranque**.

### Flashear OpenWRT a la tarjeta TF {#jump1}

#### Preparativos

- PC con Windows o MacOS  
- Cable de datos USB-C  
- Una tarjeta TF  
- Un lector de tarjetas  
- [balenaEtcher](https://www.balena.io/etcher/) —— Por favor, descarga e instala balenaEtcher; usaremos este software para flashear el sistema en la tarjeta TF.  
- Paquete de OpenWRT

Por favor, prepara el equipo necesario mencionado arriba. Los paquetes de firmware se pueden descargar haciendo clic en los botones de descarga a continuación.

| Versión           | Descripción              | Descarga |
|-------------------|--------------------------|----------|
| balenaEtcher      | Herramienta para grabar ISO | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| OpenWRT R22.11.18 | Añade soporte para Docker  | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |

:::caution
Cuando uses una tarjeta TF con el LinkStar-V2, es importante tener en cuenta que puede ser incompatible con algunas **tarjetas de alta velocidad**. Si usas una tarjeta de alta velocidad, podrías experimentar errores de carga de datos, errores de arranque o fallos al encender y cargar el sistema debido a la velocidad de la tarjeta.

La ventaja de usar una tarjeta TF es que puedes configurar diferentes redes en distintas tarjetas TF. También es posible tener múltiples sistemas, cambiando simplemente la tarjeta TF por otra.
:::

#### Procedimiento

**Paso 1.** Conecta la tarjeta TF al PC

Coloca la tarjeta TF en el lector de tarjetas que preparaste y conéctalo a tu computadora.

**Paso 2.** Flashea el sistema en la tarjeta TF

Abre balenaEtcher, que ya debe estar instalado previamente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/25.png" /></div>

Selecciona el firmware de OpenWRT que descargaste. El archivo debe tener la extensión **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/26.png" /></div>

Selecciona la unidad en la que deseas flashear el sistema.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/27.png" /></div>

Haz clic en el botón **Flash** y el software grabará el sistema en tu tarjeta TF.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/28.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/29.png" /></div>

:::caution
Después de flashear el sistema, algunos equipos pueden mostrar un mensaje indicando que el dispositivo USB no se reconoce y preguntando si deseas formatearlo. Por favor, **no formatees** la tarjeta, ya que esto eliminaría el sistema instalado.
:::

**Paso 3.** Inicia OpenWRT desde la tarjeta TF

Retira la tarjeta TF del lector y colócala en la ranura para tarjetas TF del LinkStar-V2.

Luego enciende el LinkStar, puedes alimentarlo mediante un **adaptador de corriente Type-C**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/30.png" /></div>

**Paso 4.** Administra el panel de OpenWRT

Utiliza un cable de red para conectar al puerto de red ETH1/ETH2/ETH3 del LinkStar-V2. Luego escribe la dirección: `192.168.100.1` en tu navegador para acceder al panel de administración.

:::caution
ETH0 es el puerto WAN y los demás puertos de red son puertos LAN. Si deseas administrar OpenWRT del LinkStar-V2 mediante un cable de red, conecta el cable a un puerto LAN distinto a ETH0.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

El usuario y contraseña iniciales para el sistema son los siguientes:

```
account: root
password: password
```

¡Felicidades! Ahora has instalado correctamente OpenWRT a través de la tarjeta TF.

### Flashear OpenWRT en la eMMC {#jump2}

#### Preparación

- Computadora con Windows
- Cable de datos USB-C
- Paquete de OpenWRT
- Paquete de Armbian (Opcional)

Por favor, prepara el equipo necesario indicado arriba. Los paquetes de actualización del firmware se pueden descargar haciendo clic en los siguientes enlaces:

| Versión | Descripción | Descarga |
|---------|-------------|----------|
| OpenWRT R22.11.18  | Añade soporte para Docker. | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Herramientas y driver para flashear en eMMC | - | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| Armbian 24.5.0 desktop (Opcional)  | - | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |

#### Procedimiento

**Paso 1.** Instalar el controlador

El [archivo](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) que descargaste contiene los siguientes tres elementos:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/07.png" /></div>

Ve a la carpeta **Rockchip_DriverAssitant_v5.1.2** y haz doble clic en el archivo **DriverInstall.exe** para instalar el controlador.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/08.png" /></div>

En el instalador que se abre, haz clic en "驱动安装" (Instalación del controlador).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/09.png" /></div>

**Paso 2.** Poner el dispositivo en modo Maskrom

Ve a la carpeta **RKDevTool_Release_v2.84** y abre el archivo **RKDevTool.exe** con doble clic.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/10.png" /></div>

En este punto, la parte inferior del software mostrará "No Devices Found".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/11.png" /></div>

Presiona el botón del orificio de actualización (**Update keyhole**) de forma continua con el pin de extracción de tarjeta y **no lo sueltes**. Mientras mantienes presionado, conecta el LinkStar-V2 a tu computadora con un cable USB-C. Luego puedes soltar el botón.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/12.png" /></div>

Ahora, el software debe mostrar "Found One MASKROM Device" en lugar de "No Devices Found".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/13.png" /></div>

**Paso 3.** Borrar firmware

Haz clic en "Upgrade Firmware", luego haz clic en "Firmware" y selecciona el archivo **H6XK-Boot-Loader.bin** desde el explorador de archivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/14.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/15.png" /></div>

Después de importar el archivo, haz clic en "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/16.png" /></div>

Espera a que se complete la operación y haz clic en "确定" (Aceptar).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/17.png" /></div>

**Paso 4.** Flashear OpenWRT

:::note
Si has seguido correctamente los pasos anteriores, tu LinkStar H68K-V2 debería seguir en modo MASKROM. Si no, por favor repite el **Paso 2**.
:::

Haz clic en "Download Image" en la esquina superior izquierda del software, luego selecciona el archivo **H6XK-Boot-Loader.bin** para la primera opción **Boot**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/18.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/19.png" /></div>

En la segunda línea de opciones **System**, selecciona la imagen del sistema para OpenWRT. Debe ser un archivo con extensión **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/20.png" /></div>

Luego haz clic en el botón "Run" (Ejecutar) debajo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/21.png" /></div>

Espera el mensaje "Download image OK". Esto indica que el sistema ha sido instalado correctamente en la eMMC del LinkStar-V2.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/22.png" /></div>

Una vez completado el flasheo, el LinkStar H68K-V2 se reiniciará automáticamente y al arrancar, iniciará con el sistema OpenWRT.

**Paso 5.** Administrar el panel de OpenWRT

Usa un cable de red para conectarte al puerto de red ETH1, ETH2 o ETH3 del LinkStar-V2. Luego ingresa la dirección `192.168.100.1` en tu navegador para acceder al panel de administración.

:::caution
ETH0 es el puerto WAN y los demás puertos de red son puertos LAN. Si deseas administrar el OpenWRT del LinkStar-V2 mediante un cable de red, conecta el cable a un puerto LAN distinto de ETH0.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/23.png" /></div>

El usuario y contraseña iniciales para el sistema son los siguientes:

```
account: root
password: password
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

¡Felicidades! Has instalado correctamente OpenWRT en la memoria eMMC.

## Recursos

LinkStar H68K-V2 es un hardware de código abierto. A continuación, se muestran los enlaces de descarga a los materiales relevantes:

| Versión                     | Descripción             | Enlace de descarga                                              |
| --------------------------- | ------------------------ | ---------------------------------------------------------------- |
| OpenWRT R22.11.18           | Soporte para Docker      | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (Opcional) | -                  | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| Herramienta y controlador para flasheo a eMMC | -         | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | Herramienta para grabar ISOs | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                 | Esquemático de H68K      | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| Hoja de datos del RK3568   | -                        | [Descargar](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| Módulo Wi-Fi M7921E        | -                        | [Descargar](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte técnico y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
