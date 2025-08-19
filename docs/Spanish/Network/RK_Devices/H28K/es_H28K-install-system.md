---
description: H28K Boot Tutorial
title: Instalación de Sistema Operativo en H28K
keywords:
- Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/H28K-install-system
last_update:
  date: 06/10/2025
  author: Guillermo
---

<!-- ---
name: H28K Router with 8GB eMMC, QWRT support
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: *******
tags:
--- -->

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/Overview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H28K-0208-p-5848.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El LinkStar-H28K cuenta con dos puertos de red Gigabit que utilizan tecnología PCIE/RGMII y un chip de cuatro núcleos. Tiene 4 GB de memoria LPDDR4X y 8 GB de almacenamiento eMMC, expandible hasta 512 GB mediante una tarjeta TF. También incluye una conexión Type-C de 5 V–12 V con capacidad PD (Power Delivery). En este wiki te mostraremos cómo instalar el sistema operativo usando una tarjeta TF o la memoria eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## Selecciona el sistema que necesitas para H28K

El H28K es compatible con el sistema operativo QWRT. En esta sección, te mostraremos el método de instalación para el sistema QWRT.

### Notas e Instrucciones

El H28K tiene dos tipos de almacenamiento: uno es mediante tarjeta TF y el otro es eMMC. Ambos pueden utilizarse para almacenar el sistema operativo.

En este capítulo, puedes usar una tarjeta TF junto con un lector de tarjetas para grabar el sistema en ella.

- [Flashear QWRT en la tarjeta TF](#jump1)

También es posible flashear el sistema en la memoria eMMC integrada del H28K. 

- [Flashear QWRT en la memoria eMMC](#jump2)

Cuando una tarjeta TF está insertada en el H28K, el sistema en la tarjeta TF es el que se inicia al encender el dispositivo, ya que la **tarjeta TF tiene prioridad de booteo**.

### Flashear QWRT en la tarjeta TF {#jump1}

#### Preparación

- PC con Windows o MacOS
- Cable de datos USB-C
- Una tarjeta TF
- Un lector de tarjetas
- [balenaEtcher](https://www.balena.io/etcher/) —— Por favor, descarga e instala balenaEtcher. Usaremos este software para grabar el sistema en la tarjeta TF.
- Paquete de QWRT

Por favor, prepara el equipo necesario mencionado anteriormente. Los paquetes de firmware pueden descargarse haciendo clic en los botones de descarga a continuación:

| Versión          | Descripción                                               | Descarga                                                     |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| balenaEtcher     | Herramienta para grabar imágenes ISO                      | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| QWRT R24.01.23   | Basado en OpenWRT                                          | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |

:::caution
Al utilizar una tarjeta TF con el H28K, es importante tener en cuenta que puede ser incompatible con algunas **tarjetas de alta velocidad**. Si utilizas una tarjeta de alta velocidad, podrías experimentar errores al cargar datos, fallos de arranque o problemas durante el encendido y carga del sistema debido a la velocidad de la tarjeta.

La ventaja de usar una tarjeta TF es que puedes configurar diferentes redes con diferentes tarjetas. También es posible tener múltiples sistemas: solo necesitas cambiar de tarjeta para usar un sistema distinto.
:::

#### Procedimiento

**Paso 1.** Conectar la tarjeta TF al PC

Inserta la tarjeta TF en el lector de tarjetas que preparaste y conéctalo a tu PC.

**Paso 2.** Grabar el sistema en la tarjeta TF

Abre balenaEtcher, que ya debe estar instalado en tu equipo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/18.png" /></div>

Selecciona el firmware QWRT que descargaste, debe tener extensión **.img**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/19.png" /></div>

Selecciona la unidad donde quieres grabar el sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/20.png" /></div>
<br />
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/21.png" /></div>

Haz clic en el botón **Flash** y el software grabará el sistema en tu tarjeta TF.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/22.png" /></div>

:::caution
Algunos equipos pueden mostrar un mensaje indicando que el dispositivo USB no es reconocido después de grabar el sistema, o preguntar si deseas formatear la tarjeta. Por favor, **no formatees la tarjeta** porque se borraría el sistema instalado.
:::

**Paso 3.** Arrancar QWRT desde la tarjeta TF

Retira la tarjeta TF del lector e insértala en la ranura para tarjeta TF del H28K.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/23.png" /></div>

Luego, enciende el H28K. Puedes alimentarlo mediante el puerto **USB-C-5V**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/24.png" /></div>

**Paso 4.** Gestionar el backend de QWRT

Usa un cable de red para conectar al puerto de red ETH0 del H28K. Después, ingresa la dirección `192.168.1.1` en tu navegador para acceder al panel de administración.

:::caution
ETH0 es el puerto LAN y ETH1 es el puerto WAN. Si deseas gestionar el H28K vía cable de red, conecta el cable al puerto ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

La cuenta y contraseña inicial del sistema son las siguientes.

```text
account: root
password: password
```

Felicitaciones, ahora has instalado exitosamente QWRT desde la tarjeta TF.

### Flashear QWRT en la memoria eMMC {#jump2}

#### Preparación

- PC con Windows  
- Cable USB-C  
- Paquete QWRT  

Por favor, prepara los equipos mencionados. Los paquetes de firmware se pueden descargar haciendo clic en los enlaces de la tabla a continuación:

| Versión                      | Descripción                                             | Descargar                                                   |
| ---------------------------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| QWRT R24.01.23               | Basado en OpenWRT                                       | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| Herramienta y driver para flashear eMMC | V5.12                                                | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |

#### Procedimiento

**Paso 1.** Instalar el driver

Ve a la carpeta **DriverAssitant_v5.12** y haz doble clic en el archivo **DriverInstall.exe** para instalar el driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/2.png" /></div>

En el software de instalación que se abre, haz clic en "驱动安装" (Instalación de driver).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/3.png" /></div>

**Paso 2.** Poner el dispositivo en modo Maskrom

Ve a la carpeta **RKDevTool_Release_v2.84** y haz doble clic en el archivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/4.png" /></div>

Presiona de forma continua el botón **Update keyhole** (agujero para actualización, indicado en recuadro rojo número uno) con el pin de extracción de la tarjeta y no lo sueltes.

Mantén presionado el botón mientras conectas el H28K a tu computadora usando un cable USB-C (recuadro rojo número dos). Después de conectar, puedes soltar el botón **Update keyhole**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/5.png" /></div>

En este momento, observa el software y aparecerá el mensaje "Found One MASKROM Device" (Dispositivo MASKROM encontrado).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/6.png" /></div>

**Paso 3.** Borrar el firmware

Haz clic en "Upgrade Firmware" (Actualizar firmware), luego haz clic en "Firmware" y selecciona el archivo **rk3528_spl_loader_v1.05.104.bin** en el directorio.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/7.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/8.png" /></div>

Después de importar el archivo, haz clic en "EraseFlash" (Borrar flash).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/9.png" /></div>

Espera a que la operación termine y haz clic en "确定" (Aceptar).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/10.png" /></div>

**Paso 4.** Flashear QWRT

:::note
Si has seguido los pasos anteriores, tu H28K debería seguir en modo MASKROM. Si no es así, por favor repite y sigue los pasos del **Paso 2** nuevamente.
:::

Haz clic en "Download Image" (Descargar Imagen) en la esquina superior izquierda del software, luego selecciona el archivo **rk3528_spl_loader_v1.05.104.bin** para la primera línea de opción **Boot** (Arranque).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/11.png" /></div>

Luego, en la segunda línea de opciones **system** (sistema), selecciona la imagen del sistema para QWRT. Debe ser un archivo con extensión **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/12.png" /></div>

Después, haz clic en el botón "Run" (Ejecutar) que está abajo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/13.png" /></div>

Espera a que aparezca el mensaje "Download image OK" (Descarga de imagen OK), lo que indica que el sistema se ha instalado correctamente en la memoria eMMC del H28K.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/14.png" /></div>

Una vez completado el flasheo del sistema, el H28K debería reiniciarse automáticamente y, después de reiniciar, iniciará el sistema QWRT.

**Paso 5.** Gestionar el backend de QWRT

Conecta un cable de red al puerto ETH0 del H28K. Luego, abre tu navegador e ingresa la dirección: `192.168.1.1` para acceder al panel de administración.

:::caution
ETH1 es el puerto WAN y ETH0 es el puerto LAN. Si quieres gestionar QWRT del H28K por cable de red, conecta el cable al puerto LAN (ETH0).
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

La cuenta y contraseña inicial del sistema son las siguientes.

```text
account: root
password: password
```

Felicidades, has instalado exitosamente QWRT en la memoria eMMC del H28K.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## Recursos

El H28K es hardware de código abierto. A continuación encontrarás enlaces para descargar materiales relevantes:

| Versión                     | Descripción               | Descarga                                                     |
| --------------------------- | ------------------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | Basado en OpenWRT         | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| Herramienta y driver para flashear a eMMC | V5.12                    | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |
| balenaEtcher                | Herramienta para grabar ISO | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H28K-SCH                    | Esquemáticos del H28K     | [Descargar](https://files.seeedstudio.com/wiki/H28K/Open_source/H28K-SCH.zip) |

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario para que tu experiencia con ellos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
