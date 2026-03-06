---
description: Tutorial de Arranque H28K
title: Instalar Sistema Operativo
keywords:
  - Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /H28K-install-system
sku: 113991236,113991235
last_update:
  date: 11/24/2023
  author: Parker
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/H28K-install-system/
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El LinkStar-H28K tiene dos puertos de red Gigabit que utilizan tecnología gigabit PCIE/RGMII y un chip de cuatro núcleos. Tiene memoria LPDDR4X de 4GB y almacenamiento eMMC de 8GB que se puede expandir hasta 512 GB con una tarjeta TF. También tiene una conexión Type-C de 5V-12V para capacidad PD (Power Delivery). En esta wiki te mostraremos cómo instalar el sistema operativo con tarjeta TF o eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## Selecciona el sistema que necesitas para H28K

El H28K soporta el sistema operativo Qwrt. En esta sección, te mostraremos el método de instalación para el sistema Qwrt.

### Notas e Instrucciones

H28K tiene dos tipos de almacenamiento, uno es almacenamiento con tarjeta TF y el otro es almacenamiento eMMC. Ambas memorias están disponibles para sistemas de memoria flash.

En este capítulo, podemos usar la tarjeta TF con un lector de tarjetas para flashear el sistema a la tarjeta TF.

- [Flashear QWRT a la tarjeta TF](#jump1)

También podemos flashear el sistema al eMMC que viene con el H28K.

- [Flashear QWRT a eMMC](#jump2)

Cuando se inserta una tarjeta TF en el H28K, el sistema en la tarjeta TF es el que arranca cuando se enciende el sistema, ya que la **TF tiene prioridad para arrancar**.

### <span id="jump1">Flashear QWRT a la tarjeta TF</span>

#### Preparación

- PC con Windows/MacOS
- Cable de datos USB - C
- Una tarjeta TF
- Un lector de tarjetas
- [balenaEtcher](https://www.balena.io/etcher/) —— Por favor descarga e instala balenaEtcher, usaremos este software para flashear el sistema a una tarjeta TF.
- Paquete QWRT

Por favor prepara el equipo requerido arriba, los paquetes de actualización de firmware se pueden descargar haciendo clic en el botón de descarga a continuación.

| Versión           | Descripción                                               | Descarga                                                     |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| balenaEtcher      | Herramienta de Grabación ISO                              | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| QWRT R24.01.23    | Basado en OpenWRT                                         | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |

:::caution
Al usar una tarjeta TF con H28K, es importante tener en cuenta que puede ser incompatible con algunas **tarjetas de alta velocidad**. Si estás usando una tarjeta de alta velocidad, puedes experimentar errores de carga de datos, errores de arranque o mal funcionamiento durante el encendido y la carga del sistema debido a la velocidad de la tarjeta.

La ventaja de usar una tarjeta TF es que diferentes redes pueden configurarse con diferentes tarjetas TF. También es posible tener múltiples sistemas - diferentes sistemas pueden usarse reemplazando diferentes tarjetas TF.
:::

#### Procedimiento

**Paso 1.** Conectar la TF a la PC

Por favor, coloca la TF en tu lector de tarjetas preparado y conéctalo a tu PC.

**Paso 2.** Flashear el sistema en una tarjeta TF

Abre balenaEtcher que ha sido instalado con anticipación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/18.png" /></div>

Selecciona el firmware QWRT que descargaste, debería terminar en **.img**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/19.png" /></div>

Selecciona la unidad en la que quieres flashear el sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/20.png" /></div>
<br />
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/21.png" /></div>

Haz clic en el botón **Flash** y el software flasheará el sistema en tu TF.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/22.png" /></div>

:::caution
Algunas computadoras pueden preguntar si el dispositivo USB no es reconocido después de flashear el sistema y si formatearlo, por favor **no** reformatees la tarjeta o el sistema interno será borrado.
:::

**Paso 3.** Arrancar QWRT desde la tarjeta TF

Retira la tarjeta TF del lector de tarjetas e insértala en la ranura de tarjeta TF del H28K.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/23.png" /></div>

Luego enciende el H28K, puedes elegir alimentarlo vía **USB-C-5V**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/24.png" /></div>

**Paso 4.** Gestionar el backend de QWRT

Usa un cable de red para conectar al puerto de red ETH0 del H28K. Luego ingresa la dirección: `192.168.1.1` en tu navegador para acceder al backend de administración.

:::caution
ETH0 es el puerto LAN y el puerto ETH1 es puerto WAN. Si quieres gestionar QWRT del H28K vía un cable de red, entonces conecta el cable de red a ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

La cuenta y contraseña iniciales para el sistema son las siguientes.

```text
account: root
password: password
```

Felicidades, ahora has instalado exitosamente QWRT a través de la tarjeta TF.

### <span id="jump2">Flashear QWRT a eMMC</span>

#### Preparación

- PC con Windows
- Cable de datos USB - C
- Paquete QWRT 

Por favor prepara el equipo requerido mencionado arriba, los paquetes de actualización de firmware pueden descargarse haciendo clic en el botón de descarga a continuación.

| Versión                     | Descripción                                               | Descarga                                                     |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | Basado en OpenWRT | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| Herramienta y controlador para flashear a eMMC | V5.12                                                     | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |

#### Procedimiento

**Paso 1.** Instalar el controlador

Ve a la carpeta **DriverAssistant_v5.12** y haz doble clic para abrir el archivo **DriverInstall.exe** para instalar el controlador.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/2.png" /></div>

En el software de instalación del controlador que se inicia, haz clic en "驱动安装" (Instalación del Controlador).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/3.png" /></div>

**Paso 2.** Poner el dispositivo en modo Maskrom

Ve a la carpeta **RKDevTool_Release_v2.84** y haz doble clic para abrir el archivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/4.png" /></div>

Presiona el botón **Update keyhole** (Cuadro rojo número uno) continuamente con el pin de extracción de tarjetas y no lo sueltes.

Luego mantén tus manos en el H28K y conéctalo (Cuadro rojo número dos) a tu computadora usando un cable tipo USB-C. Después puedes soltar el botón **Update keyhole**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/5.png" /></div>

En este punto observa el software y mostrará "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/6.png" /></div>

**Paso 3.** Borrar firmware

Haz clic en "Upgrade Firmware", luego haz clic en "Firmware" y selecciona el archivo **rk3528_spl_loader_v1.05.104.bin** en el directorio de archivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/7.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/8.png" /></div>

Después de importar el archivo, haz clic en "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/9.png" /></div>

Espera a que la operación se complete y haz clic en "确定" (OK).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/10.png" /></div>

**Paso 4.** Flashear QWRT

:::note
si has seguido los pasos anteriores, tu H28K debería estar aún en modo MASKROOM, si no es así, por favor repite y sigue los pasos del **Paso 2** nuevamente.
:::

Haz clic en "Download Image" en la esquina superior izquierda del software, luego selecciona el archivo **rk3528_spl_loader_v1.05.104.bin** para la primera línea de opción **Boot**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/11.png" /></div>

Luego en la segunda línea de opciones **system**, selecciona la imagen del sistema para QWRT. Debería ser un archivo que termine en **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/12.png" /></div>

Luego haz clic en el botón "Run" de abajo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/13.png" /></div>

Espera el mensaje "Download image OK", entonces el sistema se habrá instalado exitosamente en la eMMC del H28K.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/14.png" /></div>

Una vez que el flasheo del sistema esté completo, el H28K debería reiniciarse automáticamente y una vez reiniciado entrará al sistema QWRT.

**Paso 5.** Gestionar el backend de QWRT

Usa un cable de red para conectarte al puerto de red ETH0 del H28K. Luego ingresa la dirección: `192.168.1.1` en tu navegador para acceder al backend de administración.

:::caution
ETH1 es el puerto WAN y ETH0 es el puerto LAN. Si quieres gestionar el QWRT del H28K a través de un cable de red, entonces conecta el cable de red a un puerto LAN.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

La cuenta y contraseña iniciales del sistema son las siguientes.

```text
account: root
password: password
```

Felicidades, ahora has instalado exitosamente QqWRT en eMMC.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## Recursos

H28K es hardware de código abierto. Enlaces de descarga a materiales relevantes.


| Versión                     | Descripción      | Descarga                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | Basado en OpenWRT | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| Herramienta y controlador Flash to eMMC | V5.12            | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |
| balenaEtcher                | Herramienta de grabación ISO  | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H28K-SCH                    | Esquemáticos H28K  | [Descarga](https://files.seeedstudio.com/wiki/H28K/Open_source/H28K-SCH.zip) |

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
