---
description: ODYSSEY - X86J4105 
title: Instalar Sistema Operativo ODYSSEY - X86J4105
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/linkstar-install-system
last_update:
  date: 06/10/2025
  author: Guillermo
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El router LinkStar-H68K está equipado con el chip quad-core Cortex-A55 RK3568, que cuenta con 4 interfaces Ethernet para dual-2.5G y dual-1G, junto con tecnología Wi-Fi 6 (opcional), además de ofrecer alta capacidad de almacenamiento y funcionalidad de reproductor multimedia. En esta wiki te mostraremos cómo instalar el sistema operativo usando tarjeta TF o eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/25.png" /></div>

## Selecciona el sistema que necesitas para LinkStar

El potente LinkStar soporta una amplia variedad de sistemas operativos como Android, Ubuntu, OpenWRT, Debian y muchos más. En esta sección, te presentaremos los métodos de instalación para cada sistema.

### Notas e instrucciones

LinkStar tiene dos tipos de almacenamiento, uno es el almacenamiento por **tarjeta TF** y el otro es el almacenamiento por **eMMC**. Ambas memorias están disponibles para flashear sistemas operativos.

En este capítulo, podemos usar la tarjeta TF con un lector de tarjetas para flashear el sistema a la tarjeta TF. Debido a la velocidad de lectura/escritura y estabilidad, esta forma solo permite flashear el sistema **OpenWRT**.

- [Flashear OpenWRT a la tarjeta TF](#jump1)

También podemos flashear el sistema a la eMMC que viene con LinkStar. Este método actualmente soporta todos los sistemas operativos soportados por LinkStar.

- [Flashear OpenWRT a eMMC](#jump2)
- [Flashear Android / Ubuntu a eMMC](#jump3)

Cuando una tarjeta TF está insertada en LinkStar, el sistema que arranca es el que está en la tarjeta TF, ya que la **TF tiene prioridad para arrancar**.

### Flashear OpenWRT a la tarjeta TF {#jump1}

#### Preparación

- PC con Windows o MacOS
- Cable de datos USB - C
- Una tarjeta TF
- Un lector de tarjetas
- [balenaEtcher](https://www.balena.io/etcher/) —— Por favor descarga e instala balenaEtcher, usaremos este software para flashear el sistema a la tarjeta TF.
- Paquete OpenWRT

Por favor prepara el equipo requerido arriba, los paquetes de actualización de firmware pueden descargarse haciendo clic en el botón de descarga a continuación.

| Versión | Descripción | Descargar |
|---------|-------------|-----------|
|  balenaEtcher  | - | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-TF-card-tool/) |
|  OpenWRT R22.11.18  | Añade soporte para Docker. | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |

:::caution
Al usar una tarjeta TF con LinkStar, es importante notar que puede ser incompatible con algunas **tarjetas de alta velocidad**. Si usas una tarjeta de alta velocidad, podrías experimentar errores de carga de datos, errores de arranque o fallos durante el encendido y la carga del sistema debido a la velocidad de la tarjeta.

La ventaja de usar una tarjeta TF es que se pueden configurar diferentes redes con diferentes tarjetas TF. También es posible tener múltiples sistemas: diferentes sistemas pueden usarse intercambiando diferentes tarjetas TF.
:::

#### Procedimiento

**Paso 1.** Conecta la tarjeta TF a la PC

Inserta la tarjeta TF en el lector de tarjetas que preparaste y conéctalo a tu PC.

**Paso 2.** Flashea el sistema en la tarjeta TF

Abre balenaEtcher que instalaste previamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/11.png" /></div>

Selecciona el firmware OpenWRT que descargaste, debe tener extensión **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/12.png" /></div>

Selecciona la unidad donde quieres flashear el sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/13.png" /></div>

Haz clic en el botón **Flash** y el software grabará el sistema en tu tarjeta TF.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/14.png" /></div>

:::caution
Algunos computadores pueden mostrar un mensaje indicando que el dispositivo USB no está reconocido luego de flashear el sistema y preguntarte si deseas formatearlo, por favor **no** formatees la tarjeta, de lo contrario el sistema se borrará.
:::

**Paso 3.** Arrancar OpenWRT desde la tarjeta TF

Extrae la tarjeta TF del lector y colócala en la ranura para tarjeta TF del LinkStar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/15.png" /></div>

Luego enciende el LinkStar, puedes alimentarlo con **USB-C-5V** o con **DC-12V**.

Cuando el dispositivo esté encendido, el botón de encendido del LinkStar se iluminará en blanco. Presiona el botón de encendido para iniciar el dispositivo y entrar al sistema.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LinkStar/16.png" /></div>

**Paso 4.** Gestionar el backend de OpenWRT

Conecta un cable de red a uno de los puertos ETH1/ETH2/ETH3 del LinkStar. Luego abre tu navegador y entra a la dirección: `192.168.100.1` para acceder al panel de administración.

:::caution
ETH0 es el puerto WAN y los otros puertos de red son LAN. Si quieres gestionar OpenWRT del LinkStar vía cable de red, conecta el cable a un puerto LAN, es decir, cualquiera excepto ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

La cuenta y contraseña iniciales para el sistema son las siguientes:

```
account: root
password: password
```

¡Felicidades! Ahora has instalado exitosamente OpenWRT vía tarjeta TF.

### Flashear OpenWRT a eMMC {#jump2}

#### Preparación

- PC con Windows  
- Cable USB-C de datos  
- Paquete OpenWRT  
- Paquete Android (Opcional)

Por favor, prepara los equipos mencionados arriba. Los paquetes de firmware se pueden descargar haciendo clic en los botones de descarga a continuación.

| Versión | Descripción | Descargar |
|---------|-------------|-----------|
| OpenWRT R22.11.18 | Añade soporte para Docker. | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |
| Herramienta para borrar firmware | - | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Erase-tool/) |
| Herramienta para flashear a eMMC & driver | - | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
| Android TV R22.11.17 (Opcional) | Soporte para control remoto (no disponible a la venta actualmente) | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/) |

:::caution
Si vas a instalar OpenWRT desde otro sistema, primero necesitarás flashear el sistema Android al eMMC antes de completar la instalación de OpenWRT, por lo que es posible que debas descargar el paquete Android.
:::

#### Procedimiento

**Paso 1.** Instalar el driver

Ve a la carpeta **Rockchip_DriverAssitant_v5.1.1** y haz doble clic en el archivo **DriverInstall.exe** para instalar el driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

En el software de instalación del driver que se abrirá, haz clic en "驱动安装" (Instalar Driver).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**Paso 2.** Poner el dispositivo en modo Maskrom

Ve a la carpeta **RKDevTool_Release_v2.84** y haz doble clic en el archivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

En este momento debería decir "No Devices Found" (No se encontraron dispositivos) en la parte inferior del programa.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

Presiona continuamente el botón **Update keyhole** (botón de actualización) con un pin para tarjetas (como un clip) y no lo sueltes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

Mientras mantienes presionado el botón, conecta el LinkStar a tu computadora usando el cable USB-C. Después de conectar el cable, puedes soltar el botón.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

Fíjate nuevamente en el programa, ahora debería cambiar de "No Devices Found" a "Found One MASKROM Device" (Se encontró un dispositivo MASKROM).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**Paso 3.** Borrar el firmware

Haz clic en "Upgrade Firmware" (Actualizar Firmware), luego haz clic en "Firmware" y selecciona el archivo **LinkStar-H68K-EraseFlash.img** en el directorio de archivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

Después de importar el archivo, haz clic en "EraseFlash" (Borrar Flash).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/9.png" /></div>

Espera a que termine la operación y luego haz clic en "确定" (Aceptar).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/10.png" /></div>

<!-- **Step 4.** Flash Android (Optional)

!!!Note
    If you are installing OpenWRT from another system, please complete this step first, if not, you can skip this one.

Click on "Upgrade Firmware", then click on "Firmware" and select the Android image you want to install, this file ends with **.img**.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/8.png"/></div>

After importing the file, click on "Upgrade".

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/23.png"/></div>

Wait for the prompt to appear that the "Reset Device Success", at which point the system has finished flashing.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/24.png"/></div>

Once the system flash is complete, the LInkStar will automatically reboot and once rebooted it will enter the system.

At this point, please turn off and power off the LinkStar and retry the **step2** to put LinkStar into **Maskrom mode**. -->

**Paso 4.** Flashear OpenWRT

:::note
Si seguiste los pasos anteriores, tu LinkStar H68K debería estar aún en modo MASKROM. Si no es así, por favor repite y sigue nuevamente los pasos desde el **Paso 2**.
:::

Haz clic en "Download Image" (Descargar imagen) en la esquina superior izquierda del software, luego selecciona el archivo **H68K-Boot-Loader_xxx.bin** para la primera línea de la opción **Boot** (Arranque).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/18.png" /></div>

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/19.png" /></div>

Luego, en la segunda línea de opciones de **system** (sistema), selecciona la imagen del sistema para OpenWRT. Debe ser un archivo con extensión **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/20.png" /></div>

Después, haz clic en el botón "Run" (Ejecutar) que está abajo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/21.png" /></div>

Espera a que aparezca el mensaje "Download image OK" (Descarga de imagen OK), lo que indica que el sistema se ha instalado correctamente en la eMMC del LinkStar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/22.png" /></div>

Una vez completado el flasheo del sistema, el LinkStar H68K debería reiniciarse automáticamente y, después del reinicio, arrancará en el sistema OpenWRT.

**Paso 5.** Gestionar el backend de OpenWRT

Conecta un cable de red a uno de los puertos ETH1, ETH2 o ETH3 del LinkStar. Luego, abre tu navegador y escribe la dirección: `192.168.100.1` para acceder al panel de administración.

:::caution
ETH0 es el puerto WAN y los otros puertos de red son LAN. Si quieres administrar el OpenWRT del LinkStar mediante un cable de red, conecta el cable a un puerto LAN que no sea ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

Las credenciales iniciales para el sistema son:

```
account: root
password: password
```

¡Felicidades! Ahora has instalado OpenWRT exitosamente en la memoria eMMC.

### Flashear Android / Ubuntu a eMMC {#jump3}

#### Preparación

- PC con Windows  
- Cable USB-C de datos  
- Paquete del sistema  

Por favor, tenga listos los dispositivos y software mencionados. Los paquetes de actualización de firmware pueden descargarse haciendo clic en los enlaces de descarga a continuación.

| Versión | Descripción | Descarga |
|---------|-------------|----------|
| Flash to eMMC tool & driver | - | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
| Android Pad R22.11.17 | Corrige indicador de trabajo; soluciona problema de HDMI sin sonido; cambia botón derecho del ratón a volver; cambia densidad a 240 | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/) |
| Android TV R22.11.17 | Soporte para control remoto (no está a la venta en este momento) | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/) |
| Ubuntu 20.04 R22.01.15 | Soporte para wifi AP256; Usuario por defecto: linkstar, Contraseña: linkstar; Usuario root: root, Contraseña root: root | [Descargar](https://sourceforge.net/projects/linkstar-h68k-os/files/Ubuntu%2020.04/) |

:::note
Debido a los recursos limitados en el CPU basado en ARM del LinkStar, Ubuntu 20.04 está basado en [Lubuntu](https://lubuntu.me/), una distribución ligera de Linux que usa el entorno de escritorio LXDM o LXQt.  
:::

:::caution
La imagen proporcionada aquí **no** soporta flasheo desde tarjeta (Card-Flashing).  
:::

#### Procedimiento

El tutorial a continuación usa como ejemplo la instalación de **Android TV**, los pasos para otros sistemas son similares, solo debes seleccionar un archivo de imagen distinto.

**Paso 1.** Instalar el driver

Abre la carpeta **Rockchip_DriverAssitant_v5.1.1** y haz doble clic en el archivo **DriverInstall.exe** para instalar el driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

En el programa de instalación que se abre, haz clic en "驱动安装" (Instalar driver).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**Paso 2.** Poner el dispositivo en modo Maskrom

Abre la carpeta **RKDevTool_Release_v2.84** y haz doble clic en **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

El programa mostrará "No Devices Found" (No se encontraron dispositivos) en la parte inferior.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

Presiona de forma continua el botón de **Update keyhole** con un pin (como el del recogedor de tarjetas) y no lo sueltes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

Con el botón presionado, conecta el LinkStar a tu PC mediante un cable USB-C. Luego puedes soltar el botón.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

Observa el software, que cambiará el mensaje de "No Devices Found" a "Found One MASKROM Device" (Dispositivo MASKROM encontrado).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**Paso 3.** Flashear el firmware

Haz clic en "Upgrade Firmware" (Actualizar firmware), luego en "Firmware" y selecciona la imagen del sistema que quieres instalar, debe terminar en **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

Después de importar el archivo, haz clic en "Upgrade" (Actualizar).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/23.png" /></div>

Espera hasta que aparezca el mensaje "Reset Device Success" (Reinicio del dispositivo exitoso), momento en que el flasheo habrá terminado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/24.png" /></div>

Cuando termine, el LinkStar se reiniciará automáticamente y arrancará en el nuevo sistema.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros dispositivos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
