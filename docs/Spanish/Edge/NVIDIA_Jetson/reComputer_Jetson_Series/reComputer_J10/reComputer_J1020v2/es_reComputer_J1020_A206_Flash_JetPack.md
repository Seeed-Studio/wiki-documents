---
description: reComputer J1020 v1 | A206
title: reComputer J1020v1 | A206
keywords:
  - Edge
  - reComputer JetPack™_OS_Instalación
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J1020_A206_Flash_JetPack
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Flashear JetPack a la reComputer J1020v1 (Carrier Board A206)

En esta wiki, te mostraremos cómo actualizar Jetpack OS en la reComputer J1020. Dado que tu Carrier Board está diseñada como la placa oficial de NVIDIA Nano Developer, podemos actualizar el JetPack de dos maneras.

## Primeros pasos

Podemos usar el software Linux **NVIDIA SDK Manager** o podemos usar directamente el **Paquete de controladores NVIDIA Linux** a través de la línea de comandos de Linux para actualizar JetPack OS en la reComputer J1020. Para los principiantes en NVIDIA Jetson, recomendamos utilizar NVIDIA SDK Manager.

- [Opción 1: Flasheo del sistema operativo JetPack a través de NVIDIA SDK Manager](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Opción 2: Flasheo del sistema operativo JetPack a través de la línea de comandos](#flashing-jetpack-os-via-command-line)

Todavía hay algunos preparativos que necesitamos hacer:

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta NVIDIA</span></a>
- Computadora host Linux con sistema operativo Ubuntu 18.04 (o superior)

¡¡¡Nota!!!
 En este tutorial, usaremos el sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación de Hardware (Modo de recuperación forzada)

Antes de que podamos continuar con los pasos de instalación, debemos asegurarnos de que nuestra reComputer esté en el modo de recuperación forzada.

**Paso 1.** Antes de comenzar, debes desconectar la alimentación de la reComputer.
**Paso 2.** Para ingresar al modo de recuperación, debes conectar **FC REC** y **GND** mediante un cable para formar un puente.

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

¡¡¡Atención!!!
    Antes de realizar el cableado, presta atención al conector de alimentación y al conector de datos; no conectes el conector de datos directamente a la alimentación de CC.

**Paso 4.** En la ventana de línea de comandos de la computadora host, ingresa el comando `lsusb`. Cuando el contenido devuelto tiene el `ID 0955:7f21 NVidia Corp.`, significa que la reComputer está en el modo de recuperación forzada y podemos continuar con las operaciones posteriores.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## Flasheo del sistema operativo JetPack a través de NVIDIA SDK Manager

A continuación veremos el tutorial sobre cómo instalar el sistema a través de NVIDIA SDK Manager. Es una herramienta todo en uno de NVIDIA SDK Manager que incluye software de desarrollador y proporciona una solución de configuración del entorno de desarrollo de un extremo a otro para los SDK de NVIDIA. Por tanto, se recomienda para principiantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Paso 1. Instala NVIDIA SDK Manager en la PC host con Linux

Necesitamos abrir el navegador en la PC host de Linux y <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>descargar NVIDIA SDK Manager</span></a> de la página web oficial de NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### Step 2.  Abrir NVIDIA SDK Manager e iniciar sesión

En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse y abrir una Terminal. Luego podemos escribir el siguiente comando para iniciar SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

La primera vez que utilices NVIDIA SDK Manager, aparecerá una página web solicitándote que inicies sesión con tu cuenta NVIDIA previamente registrada.

### Paso 3. Selecciona el dispositivo de destino

Después de iniciar sesión, accederás a la primera pantalla donde se realiza el primer paso de la instalación. Como ya hemos conectado la reComputer J1020, aparecerá una ventana emergente que te permitirá seleccionar el dispositivo de hardware.

La reComputer J1020 está equipada con un **módulo NVIDIA Jetson Nano de 4GB**, por lo que podemos elegir la primera opción.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Hay más opciones para que elijas en la primera pantalla:

- Es necesario seleccionar **Jetson** en el panel Categoría de producto.
- En el panel Configuración de hardware, te recomendamos que **no selecciones Máquina host**. Tomará más tiempo instalar los componentes de NVIDIA para tu host Ubuntu actual. Puedes elegirlo si lo necesitas.
- En el panel Sistema operativo de destino, podemos seleccionar diferentes **sistema operativo** y **versión de JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden admitir diferentes versiones de JetPack. Recomendamos "JetPack 4.6.1".
- En los SDK adicionales, dado que el espacio de almacenamiento de eMMC es de solo 16 GB, te quedarás sin memoria si instalas DeepStream aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz click en continuar para seguir con el paso posterior.

### Paso 4. Revisar los componentes deseados

Desde **Detalles y licencia**, puedes expandir los paneles de componentes del host y de componentes de destino para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

¡¡¡Tip!!!
    Al elegir qué componentes instalar, es posible que desees vigilar la cantidad de memoria utilizada. El tamaño del eMMC integrado es de solo 16 GB; asigna y utiliza este espacio de forma inteligente según tus necesidades reales.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    Después de las pruebas reales, solo quedarán unos 500 MB de espacio eMMC después de instalar el conjunto completo de componentes del SDK.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>

    Si deseas comprobar cómo resolver el problema de memoria insuficiente, consulta la wiki [solución de problemas](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

Si deseas que SDK Manager descargue todos los archivos en una ubicación distinta a la ruta predeterminada, ve a Opciones de descarga e instalación ubicadas en la parte inferior de la pantalla, luego selecciona la ruta que deseas usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecciona Continuar para continuar con el siguiente paso.

### Paso 5. Instala el sistema

Antes de que comience la instalación, SDK Manager te solicita que ingreses tu contraseña como súper usuario `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Después de un tiempo, se nos pedirá que configuremos el nuevo sistema para nuestra reComputer. Dado que forzamos manualmente el modo de recuperación, seleccionamos "Manual setup: set the target to Force Recovery Mode via manual operations" aquí. Mientras tanto, elegimos la **Preconfiguración** predeterminada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, debemos ingresar el nombre y la contraseña de nuestro nuevo sistema Jetson en nuestra reComputer.

Cuando estés listo, haz click en "Flash" para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Espera pacientemente a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional)Paso 6. Instala los componentes del SDK

Si verificó la instalación del componente en el **paso 4** anterior, deberás seguir este paso.

Después de un momento, podrás ver una nueva ventana emergente en NVIDIA SDK Manager, que te indicará que necesitas conectarte a tu dispositivo a través de la dirección IP. Significa que el sistema ya ha sido instalado y se procederá con la instalación de los componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **quitar el puente** y reiniciar la computadora. Luego, debemos conectar la reComputer a un monitor a través de HDMI, ingresar la contraseña que ingresaste en el **paso 4** e iniciar sesión en la interfaz principal.

En este punto, debes conectar la reComputer a la misma LAN que la PC host de Linux y determinar la **dirección IP** de la Jetson usando el comando `ifconfig`.

Regresa a la PC host de Linux e ingresa la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes del SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas aparecer la siguiente ventana, la instalación habrá finalizado. Puedes comenzar a usar la Jetson o continuar con los pasos mostrados a continuación para completar alguna configuración básica de tu nuevo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

¡¡¡Atención!!!
    Asegúrate de desconectar el puente y salir del modo de recuperación forzada antes de volver a encender el sistema.

## Flasheo del sistema operativo JetPack a través de la línea de comandos

Gracias a la libertad de personalizar BSP (Paquete de controladores NVIDIA Linux), flashear JetPack OS a través de la línea de comandos puede ser muy fácil para los usuarios de Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Paso 1. Descarga el paquete de controladores NVIDIA Linux adecuado

En la **PC host Linux**, debemos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos verificar si la versión de Jetson Linux es compatible con nuestro módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Una vez que encuentres la versión adecuada, haz click para ir a la página descargada. Busca y haz click en "Paquete de controladores L4T (BSP)" y "Sistema de archivos raíz de muestra" para descargar los archivos del controlador. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 32.7.1 ya que se incluye como parte de JetPack4.6.1 y es compatible con el módulo Jetson Nano. Los nombres de los archivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Paso 2. Descomprime los archivos del paquete y ensambla los Rootfs mediante la línea de comandos

En la PC host de Linux, debemos buscar una carpeta y almacenar los archivos del paquete que descargamos antes. Luego abre una ventana de línea de comandos (Terminal) en la carpeta y usa los siguientes comandos para descomprimir los archivos y ensamblar los rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

¡¡¡Nota!!!
    `${}` Es donde debes poner los nombres de los archivos.

*Como en el ejemplo de **NVIDIA L4T 32.7.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, por lo que en la ruta '/Desktop/L4T_Drivers' abrimos la ventana de línea de comandos (Terminal) y ejecutamos los siguientes comandos.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

La salida debería lucir de la siguiente manera:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### Paso 3. Flashea el sistema a la computadora

Dado que ya forzamos la reComputer J1020 al modo de recuperación y el módulo es Jetson Nano. Podemos flashear directamente el sistema en la reComputer y ejecutar el siguiente comando:

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

¡¡¡Tip!!!
    La actualización de L4T tarda unos 10 minutos, o más en una computadora host lenta.

En este momento, podemos desconectar el puente y luego encender la computadora nuevamente para usarla.

## Solución de problemas

### Solución de problemas de instalación con NVIDIA SDK Manager

Hay muchas causas de diversos errores de instalación. A continuación se muestra una lista de verificación de problemas de instalación comunes, que pueden ayudarte a identificar y solucionar problemas de instalación.

1. Revisa la tabla de resumen para identificar qué componente falló.

    a. Expandir el grupo con el estado "Error".

    b. Cuando encuentres el componente fallido, haz click en el ícono de detalles a la derecha de Error de instalación para ser redirigido a la pestaña Terminal, que mostrará el error exacto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Si el error está relacionado con un problema de entorno, como un repositorio apt roto o un requisito previo faltante, intenta solucionarlo manualmente y luego haz click en el botón Reintentar elementos fallidos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Reintentar la instalación también está disponible de otras dos maneras:

    a. Desde **Actualizar a eMMC con SDK Manager: Paso 3**, usa el botón Reparar/Desinstalar para acceder a la página Administrar SDK de NVIDIA. Si es necesario, expande el SDK que tiene el estado "Roto" y luego haz click en Reparar para la parte correspondiente (Host o Destino).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. En **Actualizar a eMMC con SDK Manager - Paso 3**, selecciona el SDK requerido y ejecuta la instalación nuevamente.

5. Finalmente, intenta desinstalar y reinstalar el SDK correspondiente.

### Solución de problemas de instalación mediante la línea de comandos

El método de instalación de la línea de comandos es relativamente simple y, a menudo, es propenso a errores en escenarios donde se utiliza el modo de recuperación forzada.

Si encuentras el error que se muestra a continuación en **Actualizar a eMMC con la línea de comandos - Paso 2**, probablemente no lograste que la Carrier Board entrara en modo de recuperación forzada. Presta especial atención, no ingreses al modo de recuperación forzada con la Carrier Board encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes ingresar al sistema en **Flashing to eMMC with command-line - Step 3** y estás atascado en la línea de comandos de la pantalla de inicio, probablemente no saliste del modo de recuperación forzada. Del mismo modo, no es válido que desconectes el puente para salir del modo de recuperación forzada mientras la Carrier Board está encendida; todo esto debe hacerse mientras está apagada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

¡¡¡Nota!!!
    Si se necesita más espacio de almacenamiento, podemos usar una tarjeta SD para ampliar la capacidad o grabar el sistema en una tarjeta SD. Puedes consultar nuestra solución recomendada en [Sistema Flash en una tarjeta SD](https://wiki.seeedstudio.com/J101_Enable_SD_Card/)

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
