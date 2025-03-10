---
description: reComputerJ2021 | J202
title: J202 Carrier Board
keywords:
  - Edge 
  - Jetson
  - reComputer JetPack™_OS_Instalación
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J2021_J202_Flash_Jetpack
last_update:
  date: 08/27/2024
  author: Youjiang

no_comments: false # for Disqus

---

# Primeros pasos con la reComputer J202


<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue una ahora 🖱️</font></span></strong>
  </a>
</div>

La reComputer J202 tiene casi el mismo diseño y funcionalidades que la Carrier Board NVIDIA® Jetson Xavier NX™, funciona perfectamente con el módulo Jetson Nano/Xavier NX/TX2 NX y consta de 4 puertos USB 3.2 gen 2, clave M.2 E para WIFI, clave M.2 M para SSD, RTC, CAN, Raspberry Pi GPIO de 40 pines, etc.

## Características

- **Perfectamente adaptada:** Diseño para Jetson Nano/Xavier NX/TX2 NX (SODIMM de 260 pines).
- **Periféricos enriquecidos:** La mayor estabilidad de rendimiento consiste en puertos USB 3.1 (4x), clave M.2 E para WIFI, clave M.2 M para SSD, RTC, CAN, Raspberry Pi GPIO de 40 pines, etc.
- **Alta versatilidad:** Adecuada para aplicaciones gráficas de IA.
- **Certificados integrales:** Incluye FCC, CE, RoHS.
- **Customización flexible:** Proporciona servicios de modificación de módulos accesorios, logotipos e interfaces de hardware basados ​​en el diseño original de J202.

:::nota

Dado que la Jetson Nano tiene solo un puerto PCIe, si el módulo usa la Jetson Nano para conectarse a la Carrier Board J202, solo puedes seleccionar la clave M.2 M para SSD.

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
      <td rowspan={2}>Redes</td>
      <td>Ethernet</td>
      <td>1x RJ-45 Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1x Módulo M.2 Key E for WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td rowspan={7}>I/O</td>
      <td>USB</td>
      <td>4x USB 3.1 Tipo-A (10Gbps for Xavier NX, 5Gbps para Nano) <br/> 1x USB2.0 Type-C (Modo dispositivo)</td>
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
      <td>1x CAN</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td>1x 40-Pin Expansion header <br/> 1x 12-Pin Control y UART header</td>
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
      <td rowspan={2}>Mecánica</td>
      <td>Dimensions (W x D)</td>
      <td>100mm x 80mm</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td>Montaje en el muro o escritorio</td>
    </tr>
    <tr>
      <td colspan={2}>Temperatura de operación</td>
      <td>10℃~60℃</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del Hardware 

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_1.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_2.jpg"/></div>


## Módulos soportados

- [NVIDIA® Jetson Nano™ 4GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 8GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 16GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html)


## Flashear Jetpack

:::Peligro
Al flashear JetPack se borrarán todos los datos del dispositivo. Procede con precaución.

Si compraste el sistema completo en lugar de solo la Carrier Board, vendrá preinstalado con el sistema operativo JetPack, lo que te permitirá iniciarlo y usarlo directamente. Sin embargo, también puedes seguir el tutorial a continuación para instalar un nuevo sistema operativo si lo prefieres.
:::

El siguiente contenido demostrará cómo actualizar el sistema JetPack 4.6.1 en el J2021. Puedes consultar este proceso para actualizar la versión de JetPack que desees en otro dispositivo.

:::info
Consulta [aquí](https://developer.nvidia.com/embedded/jetson-linux-archive) para determinar las versiones del sistema admitidas para diferentes [módulos Jetson](#supported-module).
:::

### Prerequisitos

- PC Host con **Ubuntu 18.04 OS o Ubuntu 20.04 OS**
- reComputer J1020/J2021/J2022 o Carrier Board J202 + Nvidia Jetson module
- Fuente de alimentación 9V-12V/5A
- Cable de datos USB - C
- Jumper hembra - hembra

### Entrar al modo de recuperación forzada

Antes de que podamos continuar con los pasos de instalación, debemos asegurarnos de que nuestra reComputer esté en el modo de recuperación forzada.

**Paso 1.** Antes de comenzar, debes desconectar la alimentación de la reComputer.

**Paso 2.** Para ingresar al modo de recuperación, debes conectar **FC REC** y **GND** mediante un puente con un jumper.

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Encabezado del botón</th>
      <th align="center">Descripción</th>  
      <th align="center">Encabezado del botón</th>
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

**Paso 3.** Enciende la reComputer con un cable de CC de 12 V/5 A a la izquierda de la reComputer y usa un cable tipo C para conectar la PC host con Linux a la derecha de la reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**Paso 4.** En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse para abrir una terminal e ingresar el comando `lsusb`. Cuando el contenido devuelto muestra el `ID 0955:xxxx NVidia Corp.`, significa que tu Carrier Board J202 está en modo de recuperación forzada y puedes continuar con las operaciones posteriores.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::nota
- Para NVIDIA® Jetson Nano™: 0955:7f21 NVidia Corp
- Para NVIDIA® Jetson Xavier™ NX: 0955:7e19 NVidia Corp
:::

### Flashea la Jetson

Hay dos formas de actualizar JetPack OS en la reComputer J2021. Para los principiantes en NVIDIA Jetson, recomendamos utilizar NVIDIA SDK Manager:

- [Flasheando JetPack OS con NVIDIA SDK Manage](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Flasheando JetPack OS con la línea de comandos](#flashing-to-emmc-with-command-line)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

NVIDIA SDK Manager es una herramienta todo en uno que incluye software de desarrollador y proporciona una solución de configuración del entorno de desarrollo de un extremo a otro para los SDK de NVIDIA. Es recomendable para principiantes.

:::nota
  En este tutorial, usaremos el sistema operativo Ubuntu 18.04 LTS en la computadora host y la versión Jetpack que se instalará es la 4.6.1.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**Paso 1.**  Instala NVIDIA SDK Manager en la PC host con Linux

Primero que nada, debes crear una  <a href="https://developer.nvidia.com/login" target="_blank">cuenta NVIDIA</a> para poder utilizar sdkmanager. Posteriormente, en la PC Host con Linux, descarga <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a> de la página web oficial de NVIDIA.

**Paso 2.**  Abre NVIDIA SDK Manager e inicia sesión

En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse y abrir una terminal. Luego podemos escribir el siguiente comando para iniciar SDK Manager:

```bash
sdkmanager
```

:::nota
La primera vez que utilices NVIDIA SDK Manager, aparecerá una página web solicitándote que inicies sesión con tu cuenta NVIDIA.
:::

**Paso 3.**  Selecciona tu dispositivo

Como ya hemos conectado la reComputer J2021, aparecerá una ventana emergente que te permitirá seleccionar tu dispositivo.

La reComputer J2021 está equipada con el **módulo NVIDIA Jetson Xavier de 8GB**, por lo que podemos elegir `Jetson Xavier NX` (La primera opción).

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
Ten en cuenta que la interfaz de las diferentes versiones del SDK Manager pueden variar ligeramente. Elige las opciones adecuadas según tus preferencias.
:::

Hay más opciones para que elijas en la primera pantalla:

- Es necesario seleccionar **Jetson** en el panel Categoría de producto.
- En el panel Configuración de hardware, te recomendamos que **no selecciones Máquina host**. Tomará más tiempo instalar los componentes de NVIDIA para tu host Ubuntu actual. Puedes elegirlo si lo necesitas.
- En el panel Sistema operativo de destino, podemos seleccionar diferentes **sistemas operativos** y **versión de JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden admitir diferentes versiones de JetPack, como `JetPack 4.6.1`, `JetPack 5.1.x`, etc. Recomendamos **JetPack 4.6.1**.
- En los SDK adicionales, dado que el espacio de almacenamiento de eMMC es de solo 16 GB, te quedarás sin memoria si instalas DeepStream.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz click en continuar para ir al siguiente paso.

**Paso 4.**  Revisar los componentes deseados

Desde **Details and License**, puedes expandir los paneles de componentes del host y de componentes de destino para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
Al elegir qué componentes instalar, es posible que desees vigilar la memoria utilizada. El tamaño del eMMC integrado es de solo 16 GB; asigna y utiliza este espacio de forma inteligente según tus necesidades.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
Después de las pruebas, solo quedarán unos 500 MB de espacio eMMC después de instalar el conjunto completo de componentes del SDK.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
Si deseas comprobar cómo solucionar el problema de memoria insuficiente, consulta:
https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space .
:::
 

Si deseas que el SDK Manager descargue todos los archivos en una ubicación distinta a la ruta predeterminada, ve a **Download and Install options** ubicada en la parte inferior de la pantalla, luego selecciona la ruta que deseas usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecciona **Continue** para ir al siguiente paso.

**Paso 5.** Instala el sistema

Antes de que comiences la instalación, SDK Manager te solicitará que ingreses tu contraseña como súper usuario `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Después de un tiempo, se nos pedirá que configuremos el nuevo sistema para nuestra reComputer. Dado que forzamos manualmente el modo de recuperación, seleccionamos "Manual setup: set the target to Force Recovery Mode via manual operations". Elige la opción de pre - configuración predeterminada **Pre-config**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, necesitamos ingresar el nombre de usuario y la contraseña de nuestro nuevo sistema Jetson en nuestra reComputer; estos son establecidos por ti mismo.

Haz click en `Flash` para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Espera a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**(Opcional)Paso 6.** Instala los componentes del SDK

Si verificaste la instalación del componente en el **paso 4**, deberás seguir este paso.

Después de un momento, podrás ver una nueva ventana emergente en NVIDIA SDK Manager, que te indicará que necesitas conectarte a tu dispositivo a través de la dirección IP. Significa que el sistema ya ha sido instalado y se procederá con la instalación de los componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **retirar el puente** y reiniciar la computadora. Luego, debemos conectar la reComputer a un monitor a través de un HDMI, ingresar la contraseña configurada en el **paso 4** e iniciar sesión en la interfaz principal.

En este punto, debes conectar la reComputer a la misma LAN que la PC host de Linux y determinar la **dirección IP** de la Jetson usando el comando `ifconfig`.

Regresa a la PC host de Linux e ingresa la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes del SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas aparecer la siguiente ventana, la instalación habrá finalizado. Puedes comenzar a usar la Jetson o seguir los pasos enlistados a continuación para completar alguna configuración básica de tu nuevo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::nota
Asegúrate de desconectar el puente y salir del modo de recuperación forzada antes de volver a encender el sistema.
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

Gracias a la libertad de personalizar BSP (Paquete de controladores NVIDIA Linux), actualizar JetPack OS a través de la línea de comandos puede ser muy fácil para los usuarios de Linux.

**Paso 1.** Descarga el paquete de controladores NVIDIA Linux adecuado

En la **PC host Linux**, debemos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos verificar si la versión de Jetson Linux es compatible con nuestro módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

Una vez que encuentres la versión adecuada, haz click para ir a la página descargada. Busca y haz click en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos del controlador. Los nombres de los archivos son `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 35.1 ya que se incluye como parte de JetPack 5.0.2 y es compatible con el módulo Jetson Xavier NX. Los nombres de los archivos son:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
También puedes elegir otra versión como NVIDIA L4T 32.7.2 que sea compatible con Jetpack 4.6.2.
:::

**Paso 2.**  Descomprime los archivos del paquete y ensambla los Rootfs mediante la línea de comandos

En la PC host de Linux, debemos buscar una carpeta y almacenar los archivos del paquete que descargamos antes. Luego abre una terminal en la carpeta y usa el comando mostrado a continuación para descomprimir los archivos y ensamblar los rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::nota
`${}` Es donde debes colocar los nombres de los archivos.
:::

Como en el ejemplo de **NVIDIA L4T 35.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, por lo que en la ruta '/Desktop/L4T_Drivers' abrimos la terminal y ejecutamos el siguiente comando.

```sh
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

El output debería lucir de la siguiente forma:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

**Paso 3.**  Flashea el sistema en la reComputer

Dado que ya forzamos la reComputer J2021 al modo de recuperación y el módulo es Jetson Xavier NX. Podemos actualizar directamente el sistema desde la reComputer ejecutando el siguiente comando:

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::nota
La actualización de L4T tarda unos 10 minutos, o más en una computadora host lenta.
:::

En este momento, podemos desconectar el puente y luego encender la computadora nuevamente para usarla.

</TabItem>
</Tabs>

## Solución de problemas

### Solución de problemas durante instalación con NVIDIA SDK Manager

Hay muchas causas de diversos errores de instalación. A continuación se muestra una lista de verificación de problemas de instalación comunes, puede ayudarte a identificar y solucionar problemas de instalación:

1. Revisa la siguiente tabla para identificar qué componente falló.

    a. Expande el grupo con el estado "Error".

    b. Cuando encuentres el componente fallido, haz click en el ícono de detalles a la derecha de Error de instalación para ser redirigido a la terminal, que mostrará el error exacto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Si el error está relacionado con un problema del entorno, como un repositorio apt roto o un pre - requisito faltante, intenta solucionarlo manualmente y luego haz click en el botón **Retry Failed Items**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Reintentar la instalación también está disponible de otras dos formas:

    a. Desde **Actualizar a eMMC con SDK Manager: Paso 3**, usa el botón Reparar/Desinstalar para acceder a la página NVIDIA SDK Manager. Si es necesario, expande el SDK que tiene el estado "Broken" y luego haz click en "Repair" para la parte correspondiente (Host o Destino).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. En **Actualizar a eMMC con SDK Manager - Paso 3**, selecciona el SDK requerido y ejecuta la instalación nuevamente.

5. Finalmente, intenta desinstalar y reinstalar el SDK correspondiente.

### Solución de problemas de instalación mediante la línea de comandos

El método de instalación de la línea de comandos es relativamente simple y, a menudo, es propenso a errores en escenarios donde se utiliza el modo de recuperación forzada.

Si encuentras el error que se muestra a continuación en **Actualizar a eMMC con la línea de comandos - Paso 2**, probablemente no lograste que la Carrier Board Jetson-202 entrara en modo de recuperación forzada. Presta atención, no ingreses al modo de recuperación forzada con la Carrier Board Jetson-202 encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes ingresar al sistema en **Actualizar a eMMC con la línea de comandos - Paso 3** y estás atascado en la línea de comandos de la pantalla de inicio, probablemente no saliste del modo de recuperación forzada. Del mismo modo, no es válido que desconectes el puente para salir del modo de recuperación forzada mientras la placa portadora Jetson-202 está encendida; todo esto debe hacerse mientras la placa está apagada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::nota
Si se necesita más espacio de almacenamiento, podemos usar una tarjeta SD para ampliar la memoria o grabar el sistema en una tarjeta SD. Puedes consultar nuestra solución recomendada [Sistema Flash en tarjeta SD](/J101_Enable_SD_Card)
:::

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
