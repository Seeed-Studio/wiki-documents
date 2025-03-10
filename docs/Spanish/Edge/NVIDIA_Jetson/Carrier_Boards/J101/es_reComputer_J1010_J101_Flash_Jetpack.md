---
description: reComputer J1010 | J101
title: J101 Carrier Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J1010_J101_Flash_Jetpack
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Carrier Board J101

En esta wiki, te mostraremos cómo flashear Jetpack OS en la reComputer J1010. podemos actualizar el JetPack de dos maneras.

## Primeros pasos

Podemos usar el software para Linux **NVIDIA SDK Manager** o podemos usar directamente el **paquete de controladores NVIDIA Linux** a través de la línea de comandos de Linux para actualizar JetPack OS en la reComputer J1010. Para los principiantes en NVIDIA Jetson, recomendamos utilizar NVIDIA SDK Manager.

- [Opción 1 - Flashear JetPack OS usando NVIDIA SDK Manage](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Opción 2 - Flashear JetPack OS usando la línea de comandos](#flashing-jetpack-os-via-command-line)

Todavía hay algunos preparativos que necesitamos primero:

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta NVIDIA</span></a>
- PC Host con Ubuntu 18.04 OS (o superior)

:::nota
En este tutorial, usaremos Ubuntu 18.04 LTS para completar la instalación.
:::

### Preparación de Hardware (Modo de recuperación forzado)

Antes de continuar con los pasos de instalación, debemos asegurarnos de que nuestra reComputer esté en el modo de recuperación forzado.

**Paso 1.** Antes de comenzar, debes desconectar la alimentación de la reComputer.

**Paso 2.** Utiliza un jumper (cable) para conectar el pin **FC REC** y el pin **GND**.

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Encabezado del botón</th>
      <th align="center">Descripción</th>  
      <th align="center">Encabezado del botón</th>
      <th align="center">Descripción</th>
    </tr>
    <tr>
      <td rowSpan="{6}"><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/4_3.jpg" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DIS</td>
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
  </tbody>
</table>

**Paso 3.** Enciende la reComputer con un cable tipo C a la izquierda de la reComputer y usa otro cable para conectar la PC host Linux a la derecha de la reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ1010_J101_flash_Jetpack.png" /></div>

¡¡¡Atención!!!
    Antes de realizar el cableado, presta atención al conector de alimentación y al conector de datos; no conectes el conector de datos directamente a la alimentación de CC.

**Paso 4.** En la línea de comandos de la computadora host, ingresa el comando `lsusb`. Cuando el contenido devuelto muestra el `ID 0955:7f21 NVidia Corp.`, significa que la reComputer está en el modo de recuperación forzado y podemos continuar con los siguientes pasos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## Flasheando la JetPack OS con NVIDIA SDK Manager

A continuación veremos cómo instalar el sistema a través de NVIDIA SDK Manager. NVIDIA SDK Manager es una herramienta todo en uno de NVIDIA SDK Manager que incluye software de desarrollador y proporciona una solución de configuración del entorno de desarrollo de un extremo a otro para los SDK de NVIDIA. Por lo tanto, es recomendable para principantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Paso 1.  Instala NVIDIA SDK Manager en la PC host con Linux

Necesitamos abrir el navegador en la PC host con Linux y <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>descargar NVIDIA SDK Manager</span></a> del sitio web oficial de NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### Paso 2.  Abre el NVIDIA SDK Manager e inicia sesión

En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse y abrir una terminal. Luego podemos escribir el siguiente comando para iniciar el SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

La primera vez que utilices NVIDIA SDK Manager, aparecerá una página web solicitándote que inicies sesión con tu cuenta de NVIDIA.

### Paso 3.  Selecciona tu dispositivo

Después de iniciar sesión, accederás a la primera pantalla donde se realiza el primer paso de la instalación. Como ya hemos conectado la reComputer J1010, aparecerá una ventana emergente que te permitirá seleccionar el dispositivo.

La reComputer J1010 está equipadA con un **módulo NVIDIA Jetson Nano de 4GB**, por lo que podemos elegir la primera opción.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Hay más opciones para que elijas en la primera pantalla:

- Es necesario seleccionar **Jetson** en el panel Categoría de producto.
- En el panel Configuración de hardware, te recomendamos que **no selecciones Máquina host**. Tomará más tiempo instalar los componentes de NVIDIA para tu host Ubuntu actual. Puedes elegirlo si lo necesitas.
- En el panel Sistema operativo de destino, podemos seleccionar diferentes **sistemas operativos** y **versión de JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden correr diferentes versiones de JetPack. Recomendamos "JetPack 4.6.1".
- En los SDK adicionales, dado que el espacio de almacenamiento de eMMC es de solo 16 GB, te quedarás sin memoria si instalas DeepStream aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz click en Continuar para ir al siguiente paso.

### Paso 4.  Revisar los componentes deseados

Desde **Details and License**, puedes expandir los paneles de componentes del host y de componentes de destino para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    Al elegir qué componentes instalar, es posible que desees vigilar la memoria utilizada. El tamaño del eMMC integrado es de solo 16 GB; asigna y utiliza este espacio de forma inteligente según tus necesidades reales.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    Después, solo quedarán unos 500 MB de espacio en el eMMC después de instalar el conjunto completo de componentes del SDK.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    Si deseas comprobar cómo resolver el problema de memoria insuficiente, consulta [Solución de problemas](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

Si deseas que SDK Manager descargue todos los archivos en una ubicación distinta a la ruta predeterminada, ve a **Download and Install Options** ubicada en la parte inferior de la pantalla, luego selecciona la ruta que desea usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecciona Continuar para ir al siguiente paso.

### Paso 5. Instala el sistema

Antes de que comiences la instalación, SDK Manager te solicitará que ingreses tu contraseña como súper usuario `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Después de un tiempo, se nos pedirá que configuremos el nuevo sistema para nuestra reComputer. Dado que forzamos manualmente el modo de recuperación, seleccionamos la siguiente opción: `Manual setup: set the target to Force Recovery Mode via manual operations` y elegimos la pre - configuración predeterminada **Pre-config**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, debemos ingresar el nombre y la contraseña de nuestro nuevo sistema Jetson en nuestra reComputer.

Haz click en `Flash` para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Espera a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional)Paso 6. Instala los componentes del SDK

Si verificaste la instalación del componente en el **paso 4**, deberás seguir este paso.

Después de un momento, podrás ver una nueva ventana emergente en NVIDIA SDK Manager, que te indicará que necesitas conectarte a tu dispositivo a través de la dirección IP. Significa que el sistema ya ha sido instalado y se procederá con la instalación de los componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **retirar el puente** y reiniciar la computadora. Luego, debemos conectar la reComputer a un monitor a través de HDMI, ingresar la contraseña que configuraste en el **paso 4** e iniciar sesión en la interfaz principal.

En este punto, debes conectar la reComputer a la misma LAN que la PC host de Linux y determinar la **dirección IP** de la Jetson usando el comando `ifconfig`.

Regresa a la PC host de Linux e ingress la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes del SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas aparecer la siguiente ventana, la instalación habrá finalizado. Puedes comenzar a utilizar la Jetson o seguir los pasos mostrados a continuación para completar alguna configuración básica de tu nuevo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

¡¡¡Atención!!!
    Asegúrate de desconectar el puente y salir del modo de recuperación forzada antes de volver a encender el sistema.

## Flashear JetPack OS mediante la línea de comandos

Gracias a la libertad de personalizar BSP (Paquete de controladores NVIDIA Linux), actualizar JetPack OS a través de la línea de comandos puede ser muy fácil para los usuarios de Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Paso 1. Descarga el paquete de controladores NVIDIA Linux adecuado

En la **PC Host Linux**, deberás abrir un navegador e ingresar a: <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debes verificar si la versión de Jetson Linux es compatible con nuestro módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Una vez que encuentres la versión adecuada, haz click para ir a la página descargada. Busca y haz click en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos del controlador. Los nombres de los archivos son `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 32.7.1 ya que se incluye como parte de JetPack4.6.1 y es compatible con el módulo Jetson Nano. Los nombres de los archivos son:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Paso 2.  Descomprime los archivos del paquete y ensambla los Rootfs mediante la línea de comandos

En la PC host de Linux, debemos buscar una carpeta y almacenar los archivos del paquete que descargamos antes. Luego abre terminal en la carpeta y usa el comando mostrado a continuación para descomprimir los archivos y ensamblar los rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::tip
`${}` Es en donde se coloca el nombre de los archivos.
:::

*Como en el ejemplo de **NVIDIA L4T 32.7.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, por lo que en la ruta '/Desktop/L4T_Drivers' abrimos la terminal y ejecutamos el siguiente comando.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

El output debería lucir de la siguiente forma:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### Paso 3.  Flashea el sistema a la reComputer

Dado que ya forzamos la reComputer J1010 al modo de recuperación y el módulo es Jetson Nano. Podemos actualizar directamente el sistema en la reComputer y ejecutar el siguiente comando:

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    El flaseho de L4T tarda unos 10 minutos, o más en una computadora host lenta.

En este momento, podemos desconectar el puente y luego encender el dispositivo nuevamente para usarlo.

## Resolviendo problemas

### Resolviendo problemas de instalación con NVIDIA SDK Manager

Hay muchas causas de diversos errores de instalación. A continuación se muestra una lista de verificación de problemas de instalación comunes, que pueden ayudarte identificar errores y solucionarlos.

1. Revisa la tabla siguiente para identificar qué componente falló.

    a. Expande el grupo con el estado "Error".

    b. Cuando encuentres el componente fallido, haz click en el ícono de detalles a la derecha de Error de instalación para ser redirigido a la pestaña Terminal, que mostrará el error exacto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Si el error está relacionado con un problema del entorno, como un repositorio apt roto o un pre - requisito faltante, intenta solucionarlo manualmente y luego haz click en el botón **Retry Failed Items**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Reintentar la instalación también está disponible de otras dos formas:

    a. Desde **Actualizar a eMMC con SDK Manager: Paso 3**, usa el botón Repair/Uninstall para acceder a la página NVIDIA SDK Manager. Si es necesario, expande el SDK que tiene el estado "Broken" y luego haz click en **Repair** para la parte correspondiente (Host o Destino).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. En **Actualizar a eMMC con SDK Manager - Paso 3**, selecciona el SDK requerido y ejecuta la instalación nuevamente.

5. Finalmente, intenta desinstalar y reinstalar el SDK correspondiente.

### Solución de problemas de instalación al usar la línea de comandos

El método de instalación de la línea de comandos es relativamente simple y, a menudo, es propenso a errores en escenarios donde se utiliza el modo de recuperación forzada.

Si encuentras el error que se muestra a continuación en **Actualizar a eMMC con la línea de comandos - Paso 2**, probablemente no lograste que la Carrier Board Jetson-101 entrara en modo de recuperación forzado. Presta especial atención, no ingreses al modo de recuperación forzado con la Carrier Board Jetson-101 encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes ingresar al sistema en **Actualizar a eMMC con la línea de comandos - Paso 3** y estás atascado en la línea de comandos de la pantalla de inicio, probablemente no saliste del modo de recuperación forzado. Del mismo modo, no es válido que desconectes el puente para salir del modo de recuperación forzado mientras la Carrier Board Jetson-101 está encendida; esto debe hacerse mientras está apagada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::nota
Si se necesita más espacio de almacenamiento, podemos usar una tarjeta SD para ampliar la capacidad o grabar el sistema en una tarjeta SD. Puedes consultar nuestra solución recomendada [Flashear sistema en tarjeta SD](https://wiki.seeedstudio.com/J1010_Boot_From_SD_Card/)
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
