---
description: A203 Carrier Board
title: A203 Carrier Board
keywords:
  - Edge
  - reComputer Carrier_Board_for_Jetson_Moudule
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_A203_Flash_System
sku: 114110047,114110049,114110048,103110043
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false # for Disqus
---
<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# Flashear SO JetPack a la Placa Portadora A203 (Compatible con NVIDIA Jetson Nano y NVIDIA Jetson Xavier NX)

En este wiki, te mostraremos cómo flashear el SO Jetpack a la Placa Portadora A203 que es compatible tanto con el módulo NVIDIA Jetson Nano como con el módulo NVIDIA Jetson Xavier. Aquí te presentaremos dos formas de flashear el sistema, y debido a que la Placa Portadora A203 es diferente a la Placa Portadora oficial de NVIDIA Jetson, también se debe instalar el controlador correspondiente.

![image](https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A203.jpeg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Carrier-Board-for-Jetson-Nano-Xavier-NX-V2-p-5214.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Comenzando

Podemos usar el **administrador SDK de NVIDIA y terminal de Linux** para flashear el sistema, o podemos hacer esto fácilmente usando solo la **Terminal de Linux**. Para personas que tienen conocimientos base de Linux, recomendamos altamente usar solo la Terminal de Linux.

- [Flasheando SO JetPack vía administrador SDK de NVIDIA y terminal de Linux](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Flasheando SO JetPack vía terminal de Linux](#flashing-jetpack-os-via-command-line)

Todavía hay algunas preparaciones que necesitamos primero:

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta de NVIDIA</span></a>
- Computadora Host Linux con SO Ubuntu 18.04 (o superior)

!!!note
 En este tutorial, usaremos un sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación de Hardware (Modo de Recuperación Forzada)

Antes de que podamos continuar con los pasos de instalación, necesitamos asegurarnos de que la placa esté en modo de recuperación forzada. Hay diferentes tipos de placa, por favor nota la diferencia.

**Paso 1.** Primero, necesitamos desconectar la alimentación de la placa.

**Paso 2.** Para entrar en modo de recuperación, necesitas conectar **FC REC** y **GND** usando jumpers.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A20X/A203.png" /></div></td>
      <td colSpan={4}><div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A20X/A203V2.png" /></div></td>
    </tr>
    <tr>
      <th colSpan={4} align="center"><a href="https://files.seeedstudio.com/products/114110047/A203_Pin_Description.pdf">Placas Portadoras A203</a></th>
      <th colSpan={4} align="center"><a href="https://files.seeedstudio.com/products/103110043/A203%20V2%20pin%20description.pdf">Placas Portadoras A203 V2</a></th>
    </tr>
    <tr>
      <th align="center">Pin</th>
      <th align="center">Descripción</th>
      <th align="center">Pin</th>
      <th align="center">Descripción</th>
      <th align="center">Pin</th>
      <th align="center">Descripción</th>
      <th align="center">Pin</th>
      <th align="center">Descripción</th>
    </tr>
    <tr>
      <td align="center">1</td>
      <td align="center">GND</td>
      <td align="center">5</td>
      <td align="center">PWR_BTN-</td>
      <td align="center">1</td>
      <td align="center">SYS_RST</td>
      <td align="center">8</td>
      <td align="center">LATCH_SET</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">6</td>
      <td align="center">RECOVERY</td>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">9</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">GND</td>
      <td align="center">7</td>
      <td align="center">RST</td>
      <td align="center">3</td>
      <td align="center">RECOVERY</td>
      <td align="center">7</td>
      <td align="center">UART2_RXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">PWR_BTN+</td>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">11</td>
      <td align="center">CAN_L</td>
    </tr>
    <tr>
      <td align="center" />
      <td align="center" />
      <td align="center" />
      <td align="center" />
      <td align="center">5</td>
      <td align="center">PWR_BTN-</td>
      <td align="center">12</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td colSpan={4} align="center" />
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">13</td>
      <td align="center">CAN_H</td>
    </tr>
    <tr>
      <td colSpan={4} align="center" />
      <td align="center">7</td>
      <td align="center">LATCH_SET_BUT</td>
      <td align="center">14</td>
      <td align="center">GND</td>
    </tr>
  </tbody></table>

**Paso 3.** Conecta tu placa portadora y tu PC host Linux con un **enlace Micro USB**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A2032.jpg" /></div>

**Paso 4.** Enciende la placa con un adaptador de alimentación DC.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A2033.jpg" /></div>

**Paso 5.** En la pantalla del PC host Linux, podemos hacer clic derecho con el mouse para abrir una Terminal e ingresar el comando `lsusb`. Cuando el contenido devuelto tenga `NVidia Corp.` en él, significa que tu Placa Portadora A203 está en modo de recuperación forzada y puedes proceder a las operaciones subsecuentes.

El ID depende de los módulos en la placa portadora y la información se muestra como sigue:

- Para Jetson Nano: **0955:7f21 NVidia Corp**
- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**
- Para Jetson TX2 NX: **0955:7c18 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## Flasheo del SO JetPack a través del NVIDIA SDK Manager

A continuación, revisaremos el tutorial sobre la instalación del sistema a través del NVIDIA SDK Manager. El NVIDIA SDK Manager es una herramienta todo en uno que agrupa software para desarrolladores y proporciona una solución de configuración de entorno de desarrollo integral para los SDK de NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Paso 1. Instalar NVIDIA SDK Manager en la PC Host Linux

Necesitamos abrir el navegador en la PC Host Linux y <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>descargar el NVIDIA SDK Manager</span></a> desde el sitio web oficial de NVIDIA.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack1.png" /></div>

### Paso 2. Abrir NVIDIA SDK Manager e iniciar sesión

En la pantalla de la PC host Linux, podemos hacer clic derecho con el ratón y abrir una Terminal. Luego podemos escribir el comando siguiente para iniciar el SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

La primera vez que uses NVIDIA SDK Manager, aparecerá una página web solicitándote que inicies sesión con tu cuenta NVIDIA previamente registrada.

### Paso 3. Seleccionar el dispositivo objetivo

Después de iniciar sesión, serás llevado a la primera pantalla donde está el primer paso de la instalación. Dado que ya hemos conectado la placa, aparecerá una ventana para permitirte seleccionar el dispositivo de hardware.

El ejemplo aquí está equipado con el **módulo NVIDIA Jetson Nano 4GB**, por lo que podemos elegir el primero.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Hay más selecciones para elegir en la primera pantalla:

- El **Jetson** en el panel Product Category necesita ser seleccionado.
- En el panel Hardware Configuration, recomendamos que **no selecciones Host Machine**. Esto tomará más tiempo para instalar los componentes NVIDIA para tu Ubuntu host actual. Puedes elegirlo si lo necesitas.
- En el panel Target Operating System, podemos seleccionar diferentes **sistema operativo** y **versión de JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden soportar diferentes tipos de JetPack. Recomendamos "JetPack 4.6.1" aquí.
- En los Additional SDKs, dado que el espacio de almacenamiento del eMMC es solo de 16GB, se quedará sin memoria si instalamos DeepStream aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz clic en Continue para proceder al siguiente paso.

### Paso 4. Revisar los componentes deseados

Desde **Details and License**, puedes expandir los paneles de componentes host y componentes objetivo para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    Al elegir qué componentes instalar, es posible que quieras vigilar la capacidad utilizada. El tamaño del eMMC integrado es solo de 16GB, por favor asigna y usa este espacio sabiamente según tus necesidades reales.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    Después de las pruebas reales, solo quedan aproximadamente 500MB de espacio eMMC después de instalar el conjunto completo de componentes SDK.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    Si quieres verificar cómo resolver el problema de capacidad insuficiente, por favor consulta [Troubleshooting](https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

Si quieres que SDK Manager descargue todos los archivos a una ubicación diferente a la ruta predeterminada, ve a las Download & Install Options ubicadas en la parte inferior de la pantalla, luego selecciona la ruta que deseas usar.

Y debido a que la placa portadora A203 requiere una unidad flash, por favor asegúrate de marcar primero la casilla **Download now. Install later.** para descargar el sistema pero no instalarlo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/60.png" /></div>

Selecciona Continue para proceder al siguiente paso.

En este punto el sistema comenzará a descargar a la ruta de tu elección, por lo que podemos aprovechar este tiempo para preparar el controlador.

### Paso 5. Elegir los Controladores Apropiados

Ahora, necesitamos instalar también el controlador para asegurar que cada componente en la placa esté funcionando. Primero necesitamos elegir los archivos de controlador en el host Ubuntu según la placa portadora y el módulo.

<table align="center">
  <tbody><tr>
      <th align="center">Placa Portadora</th>
      <th align="center">Módulo Jetson</th>  
      <th align="center">Versión JetPack</th>
      <th align="center">Versión L4T</th>
      <th align="center">Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nano.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX SD</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx_devkit.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_tx2nx.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.1.4</td>
      <td align="center">35.6.0</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETrn1ItMYHVPmWPvDgMyXbABcpzAgQHQpgwf5CFecVDscA?e=gHOJ4T">Descargar</a></td>
    </tr>
  </tbody>
</table>


!!!Note
 Hay dos controladores JetPack 5.0.2 para A203 incluidos en los archivos descargados. Ambos funcionan bien, excepto que uno de ellos soporta **cámara IMX-219** y el otro soporta **cámara IMX-477**.

### Paso 6. Descomprimir el Controlador en la carpeta del sistema

!!!Attention
 ¡Por favor nota, asegúrate de que el SDK Manager haya completado la descarga del sistema antes de proceder con este paso!

En la PC host Linux, necesitamos reemplazar algunos archivos en la imagen oficial con los archivos del paquete de controladores descargado. Dado que estamos usando SDK Manager aquí, la posición (ruta) de la imagen oficial es:

`/home/<username>/nvidia/nvidia_sdk/JetPack_<version num>_Linux_<board name>_TARGETS/Linux_for_Tegra`

### Reemplazar los Archivos

!!!Attention
 Antes de reemplazar los archivos, puedes elegir hacer una copia de seguridad del archivo `.dtb` que será reemplazado en la carpeta `kernel` y guardarlo temporalmente en otra ruta para que puedas restaurar la descarga oficial en cualquier momento.

Podemos arrastrar el archivo al oficial:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

O podemos ejecutar el siguiente comando para reemplazar los archivos:

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!Note
    `${}` es el uso de variables de entorno.
 `${Drive package kernel path}` indica la ruta completa a la carpeta de imagen del kernel
 `${Officially unpacked Linux_for_Tegra path}` indica la ruta completa a la carpeta Linux_for_Tegra proporcionada oficialmente después de extraer el paquete zip L4T.

### Paso 7. Instalación del sistema

Como elegimos instalar el sistema más tarde anteriormente, necesitaremos rehacer los **pasos 3 a 4** anteriores en este punto, lo cual instalará el sistema en el A203 con los archivos del controlador ya reemplazados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/61.png" /></div>

Antes de que comience la instalación, SDK Manager te solicita que ingreses tu contraseña de `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

SDK Manager admite dos opciones para poner tu objetivo Jetson en Modo de Recuperación Forzada. Entendemos la operación de la Placa Portadora Jetson-202 en modo de recuperación forzada y ya hemos estado en modo de recuperación forzada en los pasos anteriores. Así que seleccionamos `Manual setup: set the target to Force Recovery Mode via manual operations`.

También puedes elegir si preconfigurar la configuración OEM.

- **Pre-Config**: SDK Manager flasheará el objetivo con la configuración predefinida, y no hay necesidad de completar el Asistente de Configuración del Sistema después del flasheo.
- **Runtime**: No se establece configuración predeterminada en el objetivo, y necesitarás completar manualmente el Asistente de Configuración del Sistema después del flasheo.

Aquí, seleccionamos el **Pre-Config** predeterminado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, ingresa el nombre y contraseña del nuevo sistema Jetson en la parte inferior, por favor manténlos en mente.

Cuando esté listo, haz clic en `Flash` para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Por favor espera pacientemente a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional)Paso 7. Instalar los componentes del SDK

Si marcaste la instalación del componente en el **paso 4** anterior, necesitarás pasar por este paso.

Después de un momento, podrás ver una nueva ventana emergente en el NVIDIA SDK Manager, indicándote que necesitas conectarte a tu dispositivo vía dirección IP. Significa que el sistema ya ha sido instalado y se procederá con la instalación de componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **quitar el jumper** y reiniciar la placa. Luego necesitamos conectar la placa a un monitor vía HDMI, ingresar la contraseña que ingresaste en el **paso 4**, e iniciar sesión en la interfaz principal.

En este punto necesitas conectar la placa a la misma LAN que la PC host Linux y determinar la **dirección IP** del Jetson usando el comando `ifconfig`.

Regresa a la PC host Linux e ingresa la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes del SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas aparecer la siguiente ventana, la instalación ha terminado. Pero aún necesitamos instalar el controlador, así que debemos mantener la placa en **Modo de Recuperación Forzada**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

Después del flasheo puedes aplicar completamente la placa.

## Flasheo del SO JetPack vía Línea de Comandos

Gracias a la libertad de personalizar el BSP(Paquete de Controladores Linux de NVIDIA), flashear el SO JetPack vía línea de comandos puede ser muy fácil para los usuarios con base de conocimientos de Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Paso 1. Descargar el Paquete de Controladores Linux de NVIDIA apropiado

En la **PC host Linux**, necesitamos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Archivo Linux de Jetson</span></a>. Primero debemos verificar si la versión de Jetson Linux es compatible.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Una vez que encuentres la versión apropiada, haz clic para ir a la página de descarga. Encuentra y haz clic en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos del controlador. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 32.7.1 ya que está incluida como parte de JetPack4.6.1 y admite el módulo Jetson Nano. Los nombres de los archivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Paso 2. Descomprimir Archivos del Paquete y Ensamblar el Rootfs vía Línea de Comandos

En la PC host Linux, debemos encontrar una carpeta y almacenar los archivos del paquete que descargamos antes. Luego abrir una ventana de línea de comandos(Terminal) en la carpeta y usar la línea de comandos a continuación para descomprimir los archivos y ensamblar el rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
```

!!!Nota
    `${}` es donde pones los nombres de los archivos.

*Como ejemplo de **NVIDIA L4T 32.7.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, así que bajo la ruta '/Desktop/L4T_Drivers' abrimos la ventana de línea de comandos (Terminal) y ejecutamos el siguiente comando.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
```

### Paso 3. Elegir los Controladores Apropiados

Después de descomprimir el paquete, también necesitamos instalar el controlador para asegurar que cada componente en la placa esté funcionando. Primero necesitamos elegir los archivos de controlador en el host Ubuntu según la placa portadora y el módulo.

<table align="center">
  <tbody><tr>
      <th align="center">Placa Portadora</th>
      <th align="center">Módulo Jetson</th>  
      <th align="center">Versión JetPack</th>
      <th align="center">Versión L4T</th>
      <th align="center">Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nano.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX SD</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx_devkit.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_tx2nx.zip">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6.6</td>
      <td align="center">32.7.6</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQmiemIe-7tIjZmUDZ85E8sB81pOtZIyBe9WvdzzE3kPyA?e=8V7Sxt">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.1.4</td>
      <td align="center">35.6.0</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZY6h_VrBrBFhyaMpOGVX3oBDH0eeWQfIk15UB6uI_Ujsg?e=qVCggN">Descargar</a></td>
    </tr>
  </tbody>
</table>

:::note

 Hay dos controladores JetPack 5.0.2 para A203 incluidos en los archivos descargados. Ambos funcionan bien, excepto que uno de ellos soporta **cámara IMX-219** y el otro soporta **cámara IMX-477**.
:::

### Paso 4. Descomprimir el Controlador en el archivo

Podemos arrastrar el archivo al oficial:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

O podemos ejecutar el siguiente comando para reemplazar los archivos:

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!Note
    `${}` es el uso de variables de entorno.
 `${Drive package kernel path}` indica la ruta completa a la carpeta de imagen del kernel
 `${Officially unpacked Linux_for_Tegra path}` indica la ruta completa a la carpeta Linux_for_Tegra proporcionada oficialmente después de extraer el paquete zip L4T.

### Paso 5. Flashear el Sistema a la Placa

En el ejemplo usamos el módulo NVIDIA Jetson Nano y podemos flashear directamente el sistema en la placa ejecutando el siguiente comando:

```sh
sudo ./apply_binaries.sh
sudo ./flash.sh ${BOARD} mmcblk0p1
```

!!!Note
    `${BOARD}` es el uso de variables de entorno, su información debe ser el nombre de tu módulo en la placa portadora. Puedes consultar <a href="https://files.seeedstudio.com/wiki/A20X/6.png" target="_blank"><span>aquí</span></a> para obtener el conocimiento completo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    El flasheo de L4T toma aproximadamente 10 minutos, o más en una computadora host lenta.

## Solución de problemas

### Solución de problemas de instalación con NVIDIA SDK Manager

Hay muchas causas de varios errores de instalación. A continuación se presenta una lista de verificación de problemas comunes de instalación, que puede ayudarte a recuperarte de una instalación fallida.

1. Revisa la tabla de resumen para identificar qué componente falló.

    a. Expande el grupo con el estado "Error".

    b. Cuando encuentres el componente fallido, haz clic en el ícono de detalles a la derecha de Install Error para ser redirigido a la pestaña Terminal, que mostrará el error exacto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Si el error está relacionado con un problema de entorno, como un repositorio apt roto o un prerrequisito faltante, trata de solucionarlo manualmente, luego haz clic en el botón Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Reintentar la instalación también está disponible de otras dos maneras:

    a. Desde **Flasheo a eMMC con SDK Manager -- Paso 3**, usa el botón Repair/Uninstall para llegar a la página Manage NVIDIA SDKs. Si es necesario, expande el SDK que tiene el estado "Broken", luego haz clic en Repair para la parte relevante (Host o Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. En **Flasheo a eMMC con SDK Manager -- Paso 3**, selecciona el SDK requerido y ejecuta la instalación nuevamente.

5. Finalmente, trata de desinstalar y reinstalar el SDK relevante.

### Solución de problemas de instalación usando la línea de comandos

El método de instalación por línea de comandos es relativamente simple, y a menudo es propenso a errores en escenarios donde se usa el modo de recuperación forzada.

Si encuentras el error mostrado abajo en **Flasheo a eMMC con línea de comandos -- Paso 2**, probablemente no lograste poner la Placa Portadora en modo de recuperación forzada. Por favor presta especial atención, no entres al modo de recuperación forzada con la Placa Portadora encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes entrar al sistema en **Flasheo a eMMC con línea de comandos -- Paso 3** y estás atascado en la línea de comandos de la pantalla de arranque, probablemente no saliste del modo de recuperación forzada. De igual manera, no es válido que desconectes el jumper para salir del modo de recuperación forzada mientras la Placa Portadora está encendida, todo esto necesita hacerse mientras estás apagado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    Si se necesita más espacio de almacenamiento, podemos usar una tarjeta SD para expandir la capacidad, o grabar el sistema en una tarjeta SD, puedes consultar nuestra solución recomendada [Flash System on SD card](https://wiki.seeedstudio.com/es/J101_Enable_SD_Card/)

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
