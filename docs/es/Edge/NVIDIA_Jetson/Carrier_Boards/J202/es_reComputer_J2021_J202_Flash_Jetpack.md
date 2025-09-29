---
description: reComputerJ2021 | J202
title: Placa Portadora J202
keywords:
  - Edge 
  - Jetson
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J2021_J202_Flash_Jetpack
last_update:
  date: 08/27/2024
  author: Youjiang

no_comments: false # for Disqus

---

# Primeros Pasos con reComputer J202


<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
  </a>
</div>

reComputer J202 tiene prácticamente el mismo diseño y función que la placa portadora NVIDIA® Jetson Xavier NX™, funciona perfectamente con el módulo Jetson Nano/Xavier NX/TX2 NX, y consta de 4x puertos USB 3.2 gen 2, M.2 key E para WIFI, M.2 Key M para SSD, RTC, CAN, Raspberry Pi GPIO de 40 pines, y más.

## Características 

- **Perfectamente Adecuado:** Diseño para Jetson Nano/Xavier NX/TX2 NX (260-pin SODIMM).
- **Periféricos Ricos:** Mayor estabilidad de rendimiento que consta de puertos USB 3.1 (4x), M.2 key E para WIFI, M.2 Key M para SSD, RTC, CAN, Raspberry Pi GPIO de 40 pines, y más.
- **Alta Versatilidad:** Adecuado para aplicaciones gráficas de IA complejas.
- **Certificaciones Integrales:** incluye FCC, CE, RoHS.
- **Personalización Flexible:** proporciona servicios de cambio de módulos de accesorios, logo y modificación de interfaces de hardware basados en el diseño original J202.

:::note

Dado que el Jetson Nano tiene solo un carril PCIe, si el módulo usa el Jetson Nano para conectarse a la placa portadora J202, solo puede seleccionar el M.2 Key M para SSD.

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
      <td>4x USB 3.1 Tipo-A (10Gbps para Xavier NX, 5Gbps para Nano) <br/> 1x USB2.0 Tipo-C (Modo Dispositivo)</td>
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
      <td>1x Conector de Ventilador</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>1x CAN (Solo para Serie Nvidia Xavier)</td>
    </tr>
    <tr>
      <td>Puerto Multifuncional</td>
      <td>1x Cabecera de Expansión de 40 Pines <br/> 1x Cabecera de Control y UART de 12 Pines</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin</td>
    </tr>
    <tr>
      <td colspan={2}>Alimentación</td>
      <td>DC 12V/5A</td>
    </tr>
    <tr>
      <td rowspan={2}>Mecánico</td>
      <td>Dimensiones (A x P)</td>
      <td>100mm x 80mm</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td>Escritorio, montaje en pared</td>
    </tr>
    <tr>
      <td colspan={2}>Temperatura de Funcionamiento</td>
      <td>10℃~60℃</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción General del Hardware 

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_1.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_2.jpg"/></div>


## Módulo Soportado

- [NVIDIA® Jetson Nano™ 4GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 8GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 16GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html)


## Flashear JetPack

:::danger
Flashear JetPack borrará todos los datos del dispositivo. Proceda con precaución.

Si compró el sistema completo en lugar de solo la placa portadora, vendrá preinstalado con el sistema operativo JetPack, permitiéndole iniciarlo y usarlo directamente. Sin embargo, también puede seguir el tutorial a continuación para instalar un nuevo sistema operativo si lo prefiere.
:::

El siguiente contenido demostrará cómo flashear el sistema JetPack 4.6.1 en el J2021. Puede referirse a este proceso para flashear su versión deseada de JetPack en otro dispositivo.

:::info
Consulte [aquí](https://developer.nvidia.com/embedded/jetson-linux-archive) para determinar las versiones de sistema soportadas para diferentes [módulos Jetson](#módulo-soportado).
:::

### Prerrequisito

- **Computadora Host** con **Ubuntu 18.04 OS o Ubuntu 20.04 OS**
- reComputer J1020/J2021/J2022 o placa portadora J202 + módulo Nvidia Jetson
- Fuente de Alimentación 9V-12V/5A
- Cable USB Tipo-C
- Pin jumper o cable Dupont Hembra-a-Hembra

### Entrar al Modo de Recuperación Forzada

Antes de poder continuar con los pasos de instalación, necesitamos asegurarnos de que nuestro reComputer esté en el modo de recuperación forzada.

**Paso 1.** Antes de comenzar, necesita desconectar la alimentación del reComputer.

**Paso 2.** Para entrar al modo de recuperación, necesita conectar **FC REC** y **GND** usando jumpers.

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Cabecera de Botón</th>
      <th align="center">Descripción</th>  
      <th align="center">Cabecera de Botón</th>
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

**Paso 3.** Encienda el reComputer con el cable DC de 12V/5A en el lado izquierdo del reComputer y use un cable Tipo-C para conectar la PC Host Linux en el lado derecho del reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**Paso 4.** En la pantalla de la PC host Linux, podemos hacer clic derecho con el mouse para abrir una Terminal e ingresar el comando `lsusb`. Cuando el contenido devuelto tenga el `ID 0955:xxxx NVidia Corp.` en él, significa que su Placa Portadora J202 está en modo de recuperación forzada y puede proceder a las operaciones subsiguientes.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::note
- Para NVIDIA® Jetson Nano™: 0955:7f21 NVidia Corp
- Para NVIDIA® Jetson Xavier™ NX: 0955:7e19 NVidia Corp
:::

:::caution
La interfaz SPI en el Jetson-Nano está multiplexada con GPIO por defecto y no está habilitada. Por favor consulte [**esta guía**](/es/enable_spi_interface_on_jetsonnano) para instrucciones sobre cómo habilitarla.
:::

### Flashear a Jetson

Hay dos formas opcionales de flashear el OS JetPack en el reComputer J2021. Para los principiantes en NVIDIA Jetson, recomendamos altamente NVIDIA SDK Manager:

- [Flashear OS JetPack vía NVIDIA SDK Manager](#flashear-os-jetpack-vía-nvidia-sdk-manager)
- [Flashear OS JetPack vía Línea de Comandos](#flashear-a-emmc-con-línea-de-comandos)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

El NVIDIA SDK Manager es una herramienta todo-en-uno que agrupa software de desarrollador y proporciona una solución de configuración de entorno de desarrollo de extremo a extremo para los SDKs de NVIDIA. Por lo tanto, se recomienda para principiantes.

:::note
 En este tutorial, usaremos el sistema operativo Ubuntu 18.04 LTS en la computadora host y la Versión de Jetpack a instalar es 4.6.1 en esta guía.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**Paso 1.**  Instalar NVIDIA SDK Manager en la PC Host Linux

Primero necesita crear una  <a href="https://developer.nvidia.com/login" target="_blank">cuenta NVIDIA</a> para poder usar sdkmanager. Luego en la PC Host Linux descargue el <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a> desde el sitio web oficial de NVIDIA.

**Paso 2.**  Abrir NVIDIA SDK Manager e iniciar sesión

En la pantalla de la PC host Linux, podemos hacer clic derecho con el mouse y abrir una Terminal. Luego podemos escribir el comando a continuación para iniciar el SDK Manager:

```bash
sdkmanager
```

:::note
La primera vez que uses NVIDIA SDK Manager, aparecerá una página web que te pedirá iniciar sesión con tu cuenta NVIDIA previamente registrada.
:::

**Paso 3.**  Seleccionar el dispositivo objetivo

Dado que ya hemos conectado el reComputer J2021, aparecerá una ventana para permitirte seleccionar el dispositivo de hardware.

El reComputer J2021 está equipado con el **módulo NVIDIA Jetson Xavier 8GB**, por lo que podemos elegir `Jetson Xavier NX` (La primera opción).

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
Ten en cuenta que la interfaz de diferentes versiones de SDK Manager puede variar ligeramente. Elige las opciones apropiadas según tu situación actual.
:::

Hay más selecciones para elegir en la primera pantalla:

- El **Jetson** en el panel Product Category necesita ser seleccionado.
- En el panel Hardware Configuration, recomendamos que **no selecciones Host Machine**. Esto tomará más tiempo para instalar los componentes NVIDIA para tu host Ubuntu actual. Puedes elegirlo si lo necesitas.
- En el panel Target Operating System, podemos seleccionar diferentes **sistemas operativos** y versiones de **JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden soportar diferentes tipos de JetPack como `JetPack 4.6.1`, `JetPack 5.1.x` y así sucesivamente. Recomendamos **JetPack 4.6.1** aquí.
- En Additional SDKs, dado que el espacio de almacenamiento del eMMC es solo de 16GB, se quedará sin memoria si instalamos DeepStream aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz clic en Continue para proceder al siguiente paso.

**Paso 4.**  Revisar los componentes deseados

Desde **Details and License**, puedes expandir los paneles de componentes del host y componentes objetivo para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
Al elegir qué componentes instalar, es posible que quieras vigilar la capacidad utilizada. El tamaño del eMMC integrado es solo de 16GB, por favor asigna y usa este espacio sabiamente según tus necesidades reales.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
Después de las pruebas reales, solo quedan aproximadamente 500MB de espacio eMMC después de instalar el conjunto completo de componentes SDK.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
Si quieres verificar cómo resolver el problema de capacidad insuficiente, por favor consulta:

https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space .
:::
 

Si quieres que SDK Manager descargue todos los archivos a una ubicación diferente a la ruta predeterminada, ve a Download & Install Options ubicado en la parte inferior de la pantalla, luego selecciona la ruta que deseas usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecciona Continue para proceder al siguiente paso.

**Paso 5.** Instalar el sistema

Antes de que comience la instalación, SDK Manager te pide que ingreses tu contraseña `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Después de un tiempo, se nos pedirá configurar el nuevo sistema para nuestro reComputer. Dado que forzamos manualmente el modo de recuperación, seleccionamos `Manual setup: set the target to Force Recovery Mode via manual operations` aquí. Mientras tanto, elegimos la **Pre-Config** predeterminada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, necesitamos ingresar el nombre y contraseña de nuestro nuevo sistema Jetson para nuestro reComputer, lo estableces tú mismo.

Cuando esté listo, haz clic en `Flash` para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Por favor espera pacientemente a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**(Opcional)Paso 6.** Instalar los componentes SDK

Si marcaste la instalación del componente en el **paso 4** anterior, necesitarás pasar por este paso.

Después de un momento, podrás ver una nueva ventana emergente en NVIDIA SDK Manager, indicándote que necesitas conectarte a tu dispositivo a través de la dirección IP. Significa que el sistema ya ha sido instalado y se procederá con la instalación de componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **quitar el jumper** y reiniciar el reComputer. Luego necesitamos conectar el reComputer a un monitor a través de HDMI, ingresar la contraseña que ingresaste en el **paso 4**, e iniciar sesión en la interfaz principal.

En este punto necesitas conectar el reComputer a la misma LAN que la PC host Linux y determinar la **dirección IP** del Jetson usando el comando `ifconfig`.

Regresa a la PC host Linux e ingresa la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas aparecer la siguiente ventana, la instalación ha terminado. Puedes comenzar a usar Jetson o continuar siguiendo los pasos a continuación para completar alguna configuración básica de tu nuevo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::note
Asegúrate de desconectar el jumper y salir del modo de recuperación forzada antes de volver a encender el sistema.
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

Gracias a la libertad de personalizar el BSP(NVIDIA Linux Driver Package), flashear el SO JetPack a través de línea de comandos puede ser muy fácil para los usuarios con base de conocimientos de Linux.

**Paso 1.** Descargar el NVIDIA Linux Driver Package apropiado

En la **PC host Linux**, necesitamos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos verificar si la versión de Jetson Linux es compatible con nuestro módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

Una vez que encuentres la versión apropiada, haz clic para ir a la página de descarga. Encuentra y haz clic en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos del controlador. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 35.1 ya que está incluida como parte de JetPack 5.0.2 y soporta el módulo Jetson Xavier NX. Los nombres de los archivos:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
También puedes elegir otra versión como NVIDIA L4T 32.7.2 que soporta Jetpack 4.6.2.
:::

**Paso 2.**  Descomprimir archivos de paquete y ensamblar el Rootfs a través de línea de comandos

En la PC host Linux, debemos encontrar una carpeta y almacenar los archivos de paquete que descargamos antes. Luego abrir una ventana de línea de comandos(Terminal) en la carpeta y usar la línea de comandos a continuación para descomprimir los archivos y ensamblar el rootfs:

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

**Paso 3.** Flashear el Sistema al reComputer

Dado que ya hemos forzado el reComputer J2021 al modo de recuperación y el módulo es Jetson Xavier NX. Podemos flashear directamente el sistema al reComputer ejecutando el siguiente comando:

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

Si usas el módulo Jetson nano, el comando flash sigue:

```sh
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::note
El flasheo de L4T toma aproximadamente 10 minutos, o más en una computadora host lenta.
:::

En este momento, podemos desconectar el jumper y luego encender el reComputer nuevamente para usarlo.

</TabItem>


<TabItem value="With Seeed BSP (nano)" label="With Seeed BSP (nano)">

:::info

Recientemente, NVIDIA ha actualizado el modelo DRAM, y Seeed ha lanzado actualmente un nuevo firmware que es compatible con esta actualización del módulo.

Si, durante el proceso de flasheo de la imagen oficial de NVIDIA, el sistema se congela debido a la señal DP (manifestado como una incapacidad para flashear y quedarse atascado en la interfaz de NVIDIA), esto demuestra que has comprado el módulo actualizado. En este caso, necesitas flashear la imagen de fábrica que actualmente proporcionamos.

Las diferencias actuales entre esta imagen de fábrica y la original son las siguientes:
1. La configuración DP ha sido modificada (para prevenir que el sistema se congele debido a la señal DP en algunos módulos).
2. La ranura de tarjeta SD está configurada al estado disponible por defecto, y no hay necesidad de modificar adicionalmente el árbol de dispositivos para habilitar la función de ranura de tarjeta SD.
3. La imagen contiene Jetpack4.6.6.
4. El PCN más reciente ha sido incorporado.

:::

### Paso 1. Descargar el Paquete de Controladores Linux de NVIDIA apropiado

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Enlace de Descarga</th>
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

### Paso 2. Descomprimir Archivos del Paquete y Ensamblar el Rootfs vía Línea de Comandos

En la PC host Linux, debemos encontrar una carpeta y almacenar los archivos del paquete que descargamos antes. Luego abrir una ventana de línea de comandos (Terminal) en la carpeta y usar la línea de comandos a continuación para descomprimir los archivos y ensamblar el rootfs:

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### Paso 3. Flashear el Sistema al reComputer

Dado que ya hemos forzado el reComputer J1010 al modo de recuperación y el módulo es Jetson Nano. Podemos flashear directamente el sistema al reComputer ejecutando el siguiente comando:

```bash
sudo ./nvmflash.sh --showlogs
```

</TabItem>

<TabItem value="With Seeed BSP (Xavier NX)" label="Con Seeed BSP (Xavier NX)">

Aquí instalaremos Jetpack 5.1.3 en el reComputer.

**Paso 1:** Descarga la imagen del sistema a tu PC Ubuntu correspondiente al módulo Jetson que estés usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de Descarga</th>
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

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <Archivo>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imagen descargado:
```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe: 

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flash-jetpack.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 4:** Conecta el J20 a una pantalla usando el conector HDMI en la placa y completa la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>


:::info
Por favor completa la **Configuración del Sistema** según tus necesidades.
:::

</TabItem>


</Tabs>

## Solución de problemas

### Solución de problemas de instalación con NVIDIA SDK Manager

Hay muchas causas de varios errores de instalación. A continuación se presenta una lista de verificación de problemas comunes de instalación, que puede ayudarte a recuperarte de una instalación fallida.

1. Revisa la tabla de resumen para identificar qué componente falló.

    a. Expande el grupo con el estado "Error".

    b. Cuando encuentres el componente fallido, haz clic en el ícono de detalles a la derecha de Install Error para ser redirigido a la pestaña Terminal, que mostrará el error exacto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Si el error está relacionado con un problema del entorno, como un repositorio apt roto o un prerrequisito faltante, trata de solucionarlo manualmente, luego haz clic en el botón Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Reintentar la instalación también está disponible de otras dos maneras:

    a. Desde **Flasheo a eMMC con SDK Manager -- Paso 3**, usa el botón Repair/Uninstall para llegar a la página Manage NVIDIA SDKs. Si es necesario, expande el SDK que tiene el estado "Broken", luego haz clic en Repair para la parte relevante (Host o Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. En **Flasheo a eMMC con SDK Manager -- Paso 3**, selecciona el SDK requerido y ejecuta la instalación nuevamente.

5. Finalmente, trata de desinstalar y reinstalar el SDK relevante.

### Solución de problemas de instalación usando la línea de comandos

El método de instalación por línea de comandos es relativamente simple, y a menudo es propenso a errores en escenarios donde se usa el modo de recuperación forzada.

Si encuentras el error mostrado abajo en **Flasheo a eMMC con línea de comandos -- Paso 2**, probablemente no lograste poner la Placa Portadora Jetson-202 en modo de recuperación forzada. Por favor presta especial atención, no entres al modo de recuperación forzada con la Placa Portadora Jetson-202 encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes entrar al sistema en **Flasheo a eMMC con línea de comandos -- Paso 3** y estás atascado en la línea de comandos de la pantalla de arranque, probablemente no saliste del modo de recuperación forzada. De igual manera, no es válido que desconectes el jumper para salir del modo de recuperación forzada mientras la Placa Portadora Jetson-202 está encendida, todo esto necesita hacerse mientras estás apagado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
Si se necesita más espacio de almacenamiento, podemos usar tarjeta SD para expandir la capacidad, o grabar el sistema en tarjeta SD, puedes consultar nuestra solución recomendada [Flash System on SD card](/es/J101_Enable_SD_Card)
:::

## Recursos

[reComputer J202x datasheet](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComptuer J202x Carrier Boards Schematic](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J202x 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)


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
