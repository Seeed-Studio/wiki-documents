---
description: reComputerJ2021 | J202
title: Placa base J202
keywords:
  - Edge 
  - Jetson
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J2021_J202_Flash_Jetpack
sku: 102991695, 102991714, 110061402, 110061481
last_update:
  date: 08/27/2024
  author: Youjiang
no_comments: false # for Disqus
---

# Primeros pasos con reComputer J202

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
  </a>
</div>

reComputer J202 tiene casi el mismo diseño y función que la placa base NVIDIA® Jetson Xavier NX™, funciona perfectamente con el módulo Jetson Nano/Xavier NX/TX2 NX y consta de 4 puertos USB 3.2 gen 2, M.2 key E para WIFI, M.2 Key M para SSD, RTC, CAN, Raspberry Pi GPIO de 40 pines, etc.

## Características

- **Perfectamente adecuada:** Diseñada para Jetson Nano/Xavier NX/TX2 NX (SODIMM de 260 pines).
- **Periféricos abundantes:** Mayor estabilidad de rendimiento, consta de puertos USB 3.1 (4x), M.2 key E para WIFI, M.2 Key M para SSD, RTC, CAN, Raspberry Pi GPIO de 40 pines, etc.
- **Alta versatilidad:** Adecuada para aplicaciones gráficas de IA complejas.
- **Certificados integrales:** incluye FCC, CE, RoHS.
- **Personalización flexible:** proporciona servicios de cambio de módulos de accesorios, logotipo y modificación de interfaces de hardware basados en el diseño original de la J202.

:::note

Dado que el Jetson Nano solo tiene un carril PCIe, si el módulo utiliza el Jetson Nano para conectarse a la placa base J202, solo puede seleccionar el M.2 Key M para SSD.

:::

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <td colspan={2}>Almacenamiento</td>
      <td>1x M.2 Key M</td>
    </tr>
    <tr>
      <td rowspan={2}>Red</td>
      <td>Ethernet</td>
      <td>1x RJ-45 Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td rowspan={7}>E/S</td>
      <td>USB</td>
      <td>4x USB 3.1 Type-A (10Gbps para Xavier NX, 5Gbps para Nano) <br/> 1x USB2.0 Type-C (Device Mode)</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td>2x CSI</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1x HDMI 2.1, 1x DP</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td>1x Conector de ventilador</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>1x CAN (Solo para Nvidia Xavier Serie)</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td>1x Cabecera de expansión de 40 pines <br/> 1x Cabecera de control y UART de 12 pines</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC de 2 pines</td>
    </tr>
    <tr>
      <td colspan={2}>Alimentación</td>
      <td>DC 12V/5A</td>
    </tr>
    <tr>
      <td rowspan={2}>Mecánico</td>
      <td>Dimensiones (W x D)</td>
      <td>100mm x 80mm</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td>Escritorio, montaje en pared</td>
    </tr>
    <tr>
      <td colspan={2}>Temperatura de funcionamiento</td>
      <td>10℃~60℃</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_1.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_2.jpg"/></div>

## Módulo compatible

- [NVIDIA® Jetson Nano™ 4GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 8GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 16GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html)

## Flashear JetPack

:::danger
Flashear JetPack borrará todos los datos del dispositivo. Procede con precaución.

Si compraste el sistema completo en lugar de solo la placa base, vendrá con el sistema operativo JetPack preinstalado, lo que te permitirá iniciarlo y usarlo directamente. Sin embargo, también puedes seguir el siguiente tutorial para instalar un nuevo sistema operativo si lo prefieres.
:::

El siguiente contenido mostrará cómo flashear el sistema JetPack 4.6.1 en el J2021. Puedes consultar este proceso para flashear la versión de JetPack que desees en otro dispositivo.

:::info
Consulta [aquí](https://developer.nvidia.com/embedded/jetson-linux-archive) para determinar las versiones de sistema compatibles para diferentes [módulos Jetson](#módulo-compatible).
:::

### Requisitos previos

- **Host Computer** con **Ubuntu 18.04 OS o Ubuntu 20.04 OS**
- reComputer J1020/J2021/J2022 o placa base J202 + módulo Nvidia Jetson
- Fuente de alimentación de 9V-12V/5A
- Cable USB Type-C
- Pin de puente o cable Dupont hembra a hembra

### Entrar en modo Force Recovery

Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que nuestro reComputer esté en modo force recovery.

**Paso 1.** Antes de empezar, debes desconectar la alimentación del reComputer.

**Paso 2.** Para entrar en modo recovery, debes conectar **FC REC** y **GND** usando jumpers.

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Cabecera de botón</th>
      <th align="center">Descripción</th>  
      <th align="center">Cabecera de botón</th>
      <th align="center">Descripción</th>
    </tr>
    <tr>
      <td rowSpan={6}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/J202-b.png" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DISABLE</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">FC REC</td>
      <td align="center">9</td>
      <td align="center">UART TXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">10</td>
      <td align="center">UART RXD</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td align="center">SYS RET</td>
      <td align="center">11</td>
      <td align="center">LED +</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">12</td>
      <td align="center">LED -</td>
    </tr>
  </tbody></table>

**Paso 3.** Enciende el reComputer con un cable DC de 12V/5A en el lado izquierdo del reComputer y usa un cable Type-C para conectar el PC host con Linux en el lado derecho del reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**Paso 4.** En la pantalla del PC host con Linux, podemos hacer clic derecho con el ratón para abrir una Terminal e introducir el comando `lsusb`. Cuando el contenido devuelto incluya `ID 0955:xxxx NVidia Corp.`, significa que tu placa base J202 está en modo force recovery y puedes continuar con las operaciones posteriores.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::note

- Para NVIDIA® Jetson Nano™: 0955:7f21 NVidia Corp
- Para NVIDIA® Jetson Xavier™ NX: 0955:7e19 NVidia Corp

:::

:::caution
La interfaz SPI en el Jetson-Nano está multiplexada con GPIO de forma predeterminada y no está habilitada. Consulta [**esta guía**](/es/enable_spi_interface_on_jetsonnano) para obtener instrucciones sobre cómo habilitarla.
:::

### Flashear a Jetson

Hay dos formas opcionales de flashear el sistema operativo JetPack en el reComputer J2021. Para quienes son principiantes con NVIDIA Jetson, recomendamos encarecidamente NVIDIA SDK Manager:

- [Flashear JetPack OS mediante NVIDIA SDK Manage](#flashear-jetpack-os-mediante-nvidia-sdk-manager)
- [Flashear JetPack OS mediante línea de comandos](#flashing-to-emmc-with-command-line)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

NVIDIA SDK Manager es una herramienta todo en uno que agrupa software para desarrolladores y proporciona una solución de configuración de entorno de desarrollo de extremo a extremo para los SDK de NVIDIA. Por lo tanto, se recomienda para principiantes.

:::note
 En este tutorial, usaremos el sistema operativo Ubuntu 18.04 LTS en el ordenador host y la versión de Jetpack que se va a instalar es la 4.6.1 en esta guía.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**Paso 1.**  Instalar NVIDIA SDK Manager en el PC host con Linux

En primer lugar, debes crear una  <a href="https://developer.nvidia.com/login" target="_blank">cuenta NVIDIA</a> para poder usar sdkmanager. Luego, en el PC host con Linux descarga el <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a> desde el sitio web oficial de NVIDIA.

**Paso 2.**  Abrir NVIDIA SDK Manager e iniciar sesión

En la pantalla del PC host con Linux, podemos hacer clic derecho con el ratón y abrir una Terminal. Luego podemos escribir el siguiente comando para iniciar SDK Manager:

```bash
sdkmanager
```

:::note
La primera vez que uses NVIDIA SDK Manager, se abrirá una página web que te pedirá que inicies sesión con tu cuenta NVIDIA registrada previamente.
:::

**Paso 3.**  Seleccionar el dispositivo de destino

Como ya hemos conectado el reComputer J2021, aparecerá una ventana emergente para que selecciones el dispositivo de hardware.

El reComputer J2021 está equipado con el **módulo NVIDIA Jetson Xavier 8GB**, por lo que podemos elegir `Jetson Xavier NX` (la primera opción).

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
Ten en cuenta que la interfaz de las diferentes versiones de SDK Manager puede variar ligeramente. Elige las opciones adecuadas según tu situación real.
:::

Hay más selecciones entre las que puedes elegir en la primera pantalla:

- Es necesario seleccionar **Jetson** en el panel Product Category.
- En el panel Hardware Configuration, recomendamos que **no selecciones Host Machine**. Esto tomará más tiempo para instalar los componentes de NVIDIA en tu host Ubuntu actual. Puedes elegirlo si lo necesitas.
- En el panel Target Operating System, podemos seleccionar diferentes **sistemas operativos** y **versiones de JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden soportar diferentes tipos de JetPack como `JetPack 4.6.1`, `JetPack 5.1.x`, etc. Recomendamos **JetPack 4.6.1** aquí.
- En Additional SDKs, dado que el espacio de almacenamiento de la eMMC es solo de 16GB, se quedará sin memoria si instalamos DeepStream aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz clic en Continue para pasar al siguiente paso.

**Paso 4.**  Revisar los componentes deseados

Desde **Details and License**, puedes expandir los paneles de host components y target components para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
Al elegir qué componentes instalar, quizá quieras prestar atención a la capacidad utilizada. El tamaño de la eMMC integrada es solo de 16GB, por favor asigna y utiliza este espacio sabiamente de acuerdo con tus necesidades reales.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
Después de las pruebas reales, solo queda alrededor de 500MB de espacio en la eMMC después de instalar el conjunto completo de componentes SDK.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
Si quieres comprobar cómo resolver el problema de capacidad insuficiente, consulta:

https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Initiation/#q1-el-espacio-restante-en-la-emmc-en-el-recomputer-jetson-recibido-es-solo-de-aproximadamente-2gb-cómo-puedo-resolver-el-problema-de-espacio-insuficiente .
:::

Si quieres que SDK Manager descargue todos los archivos en una ubicación distinta de la ruta predeterminada, ve a Download & Install Options ubicada en la parte inferior de la pantalla y luego selecciona la ruta que deseas usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecciona Continue para pasar al siguiente paso.

**Paso 5.** Instalar el sistema

Antes de que comience la instalación, SDK Manager te pedirá que introduzcas tu contraseña `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Después de un rato, se nos pedirá que configuremos el nuevo sistema para nuestro reComputer. Como forzamos manualmente el modo de recuperación, seleccionamos `Manual setup: set the target to Force Recovery Mode via manual operations` aquí. Mientras tanto, elegimos el **Pre-Config** predeterminado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, necesitamos introducir el nombre y la contraseña de nuestro nuevo sistema Jetson en nuestro reComputer, lo configuras tú mismo.

Cuando estés listo, haz clic en `Flash` para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Por favor espera pacientemente a que la instalación se complete.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**(Optional)Paso 6.** Instalar los componentes SDK

Si marcaste la instalación del componente en el **paso 4** anterior, tendrás que pasar por este paso.

Después de un momento, podrás ver que aparece una nueva ventana en NVIDIA SDK Manager, indicándote que necesitas conectarte a tu dispositivo mediante la dirección IP. Esto significa que el sistema ya se ha instalado y se procederá a instalar los componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **sacar el jumper** y reiniciar el reComputer. Luego necesitamos conectar el reComputer a un monitor mediante HDMI, introducir la contraseña que ingresaste en el **paso 4** e iniciar sesión en la interfaz principal.

En este punto necesitas conectar el reComputer a la misma LAN que el PC host Linux y determinar la **dirección IP** del Jetson usando el comando `ifconfig`.

Vuelve al PC host Linux e introduce la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas que aparece la siguiente ventana, la instalación habrá finalizado. Puedes empezar a usar Jetson o continuar siguiendo los pasos a continuación para completar alguna configuración básica de tu nuevo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::note
Asegúrate de desenchufar el jumper y salir del modo de recuperación forzada antes de volver a encender el sistema.
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

Gracias a la libertad para personalizar el BSP (NVIDIA Linux Driver Package), flashear JetPack OS mediante la línea de comandos puede ser muy fácil para los usuarios con base de conocimientos en Linux.

**Paso 1.** Descargar el paquete adecuado de NVIDIA Linux Driver

En el **Linux host PC**, necesitamos abrir un navegador e ir a <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos comprobar si la versión de Jetson Linux es compatible con nuestro módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

Una vez que encuentres la versión adecuada, haz clic para ir a la página de descarga. Busca y haz clic en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos del controlador. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 35.1 ya que está incluida como parte de JetPack 5.0.2 y soporta el módulo Jetson Xavier NX. Los nombres de los archivos:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
También puedes elegir otra versión como NVIDIA L4T 32.7.2 que soporta Jetpack 4.6.2.
:::

**Paso 2.**  Descomprimir los archivos del paquete y ensamblar el Rootfs mediante la línea de comandos

En el Linux host PC, debemos encontrar una carpeta y almacenar los archivos de paquete que descargamos antes. Luego abre una ventana de línea de comandos (Terminal) en la carpeta y usa la siguiente línea de comandos para descomprimir los archivos y ensamblar el rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::note
`${}` es donde pones los nombres de los archivos.
:::

Como ejemplo de **NVIDIA L4T 35.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, así que bajo la ruta '/Desktop/L4T_Drivers' abrimos la ventana de línea de comandos (Terminal) y ejecutamos el siguiente comando.

```sh
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

La salida debería ser como:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

**Paso 3.**  Flashear el sistema al reComputer

Como ya forzamos el reComputer J2021 al modo de recuperación y el módulo es Jetson Xavier NX, podemos flashear directamente el sistema en el reComputer ejecutando el siguiente comando:

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

Si usas el módulo Jetson nano, el comando de flasheo es el siguiente:

```sh
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::note
Flashear L4T toma alrededor de 10 minutos, o más en un ordenador host lento.
:::

En este momento, podemos desenchufar el jumper y luego encender de nuevo el reComputer para usarlo.

</TabItem>

<TabItem value="With Seeed BSP (nano)" label="With Seeed BSP (nano)">

:::info

Recientemente, NVIDIA ha actualizado el modelo de DRAM, y Seeed ha lanzado actualmente un nuevo firmware que es compatible con esta actualización del módulo.

Si, durante el proceso de flashear la imagen oficial de NVIDIA, el sistema se congela debido a la señal DP (manifestado como incapacidad para flashear y quedarse atascado en la interfaz de NVIDIA), esto demuestra que has comprado el módulo actualizado. En este caso, necesitas flashear la imagen de fábrica que proporcionamos actualmente.

Las diferencias actuales entre esta imagen de fábrica y la original son las siguientes:

1. Se ha modificado la configuración DP (para evitar que el sistema se congele debido a la señal DP en algunos módulos).
2. La ranura para tarjeta SD está configurada en estado disponible por defecto, y no es necesario modificar adicionalmente el device tree para habilitar la función de la ranura para tarjeta SD.
3. La imagen contiene Jetpack4.6.6.
4. Se ha incorporado el último PCN.

:::

### Paso 1. Download the proper NVIDIA Linux Driver Package

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Download Link</th>
      <th>SHA265</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.6.6</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV7LGr3R0VRDsgfFibgOgfsBam44-zEqOrQJoUKpHXEmRw?e=gJEHhU" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>138547DF526D19F737DEC27856C078217D15FE9160F2669DF57823916BAA260E</td>
    </tr>
  </tbody>
</table>
</div>

### Paso 2.  Descomprime los archivos del paquete y ensambla el Rootfs mediante la línea de comandos

En el PC host con Linux, debemos encontrar una carpeta y almacenar en ella los archivos del paquete que descargamos antes. Luego abre una ventana de línea de comandos (Terminal) en la carpeta y usa la siguiente línea de comandos para descomprimir los archivos y ensamblar el rootfs:

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### Paso 3.  Graba el sistema en la reComputer

Como ya forzamos la reComputer J1010 al modo de recuperación y el módulo es Jetson Nano, podemos grabar directamente el sistema en la reComputer ejecutando el siguiente comando:

```bash
sudo ./nvmflash.sh --showlogs
```

</TabItem>

<TabItem value="With Seeed BSP (Xavier NX)" label="Con Seeed BSP (Xavier NX)">

Aquí instalaremos Jetpack 5.1.3 en la reComputer.

**Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente al módulo Jetson que estás utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Xavier NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfKRq92vAAxEhDx43JOBDxkBCQvjy_-h8UC7HmWK6COMEg?e=PCDzib" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>0cded5b093da648e5371c880037601d1593132780bb869c814ac21b11f2aae5c</td>
    </tr>
    <tr>
      <td>Xavier NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaNbv75ItvNHqdsj9LEW4E0BvP_CCTRWMyUvJOA2JUQv8g?e=lToSlK" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>db960d3f0e31909aa443e3d4317c737de6cec4de9a7df7c09801fcb1574f4595</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre el terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imagen descargado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para grabar el sistema Jetpack en el SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de grabación se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flash-jetpack.png"/></div>

:::note
El comando de grabación puede ejecutarse durante 2-10 minutos.
:::

**Paso 4:** Conecta la J20 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Por favor completa la **System Configuration** según tus necesidades.
:::

</TabItem>

</Tabs>

## Solución de problemas

### Solución de problemas de instalación con NVIDIA SDK Manager

Hay muchas causas de diversos errores de instalación. A continuación se muestra una lista de verificación de problemas de instalación comunes, que puede ayudarte a recuperarte de una instalación dañada.

1. Revisa la tabla de resumen para identificar qué componente falló.

    a. Expande el grupo con el estado "Error".

    b. Cuando encuentres el componente que falló, haz clic en el icono de detalles a la derecha de Install Error para ser redirigido a la pestaña Terminal, donde se mostrará el error exacto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Si el error está relacionado con un problema de entorno, como un repositorio apt dañado o un requisito previo faltante, intenta solucionarlo manualmente y luego haz clic en el botón Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Volver a intentar la instalación también está disponible de otras dos maneras:

    a. Desde **Flashing to eMMC with SDK Manager -- Paso 3**, usa el botón Repair/Uninstall para ir a la página Manage NVIDIA SDKs. Si es necesario, expande el SDK que tiene el estado "Broken" y luego haz clic en Repair para la parte correspondiente (Host o Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. En **Flashing to eMMC with SDK Manager -- Paso 3**, selecciona el SDK requerido y ejecuta de nuevo la instalación.

5. Finalmente, intenta desinstalar y reinstalar el SDK correspondiente.

### Solución de problemas de instalación usando la línea de comandos

El método de instalación por línea de comandos es relativamente sencillo y suele ser propenso a errores en escenarios donde se utiliza el modo de recuperación forzada.

Si encuentras el error que se muestra a continuación en **Flashing to eMMC with command-line -- Paso 2**, probablemente no lograste poner la Jetson-202 Carrier Board en modo de recuperación forzada. Por favor presta especial atención, no entres en modo de recuperación forzada con la Jetson-202 Carrier Board encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes entrar en el sistema en **Flashing to eMMC with command-line -- Paso 3** y te quedas atascado en la línea de comandos de la pantalla de arranque, probablemente no saliste del modo de recuperación forzada. Del mismo modo, no es válido que desconectes el jumper para salir del modo de recuperación forzada mientras la Jetson-202 Carrier Board está encendida, todo esto debe hacerse mientras está apagada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
Si se necesita más espacio de almacenamiento, podemos usar una tarjeta SD para ampliar la capacidad, o grabar el sistema en la tarjeta SD; puedes consultar nuestra solución recomendada  [Flash System on SD card](/es/J101_Enable_SD_Card)
:::

## Recursos

[Hoja de datos de reComputer J202x](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[Archivo 3D de reComputer J202x](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Catálogo de series Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Casos de éxito de Seeed Studio Edge AI](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Comparación de series Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Resumen de dispositivos Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
