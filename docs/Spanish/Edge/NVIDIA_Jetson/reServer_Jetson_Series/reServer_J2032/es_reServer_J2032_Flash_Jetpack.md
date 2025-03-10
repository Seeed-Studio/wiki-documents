---
description: reServer J2032
title: reServer J2032 Flashear NVIDIA JetPack™ OS 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reServer_J2032_Flash_Jetpack
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: reServer 2032 Flash Jetpack
category: reServer 2032 Flash Jetpack
bzurl: 
wikiurl: 
sku: 
--- -->

# Introducción
En esta wiki, te mostraremos cómo actualizar el sistema operativo NVIDIA Jetpack en el módulo Jetson Xavier NX con la reServer J2032.

Aquí está la descripción general de la Carrier Board reServer J2030 como referencia:

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    Descripción general de la Carrier Board de la reServer J2030
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">Frente
        </td><td align="center">Parte trasera
        </td></tr>
      <tr>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware1.png" alt />
        </td>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware2.png" alt />
        </td>
      </tr>
    </tbody></table>
</div>


## Primeros pasos

Podemos usar **NVIDIA SDK manager** para actualizar el sistema, o podemos hacerlo fácilmente usando el **Command Line Script**. Para las personas que tienen una base de conocimientos de Linux, recomendamos encarecidamente utilizar **Command Line Script**, que proporciona mucha más funcionalidades.

- [Flasheando el sistema operativo JetPack a través del administrador SDK de NVIDIA y la terminal de Linux](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Actualización del sistema operativo JetPack a través del terminal Linux](#flashing-jetpack-os-via-command-line)

Todavía hay algunos preparativos que se necesitan:

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta NVIDIA</span></a>
- Computadora host Linux con sistema operativo Ubuntu 18.04 (o superior)

¡¡¡Nota!!!
  En este tutorial, usaremos el sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación de Hardware (Modo de recuperación forzada)

Antes de continuar con los pasos de instalación, debemos asegurarnos de que la reServer J2032 esté en el modo de recuperación forzada.

**Paso 1.** Antes de comenzar, debes desconectar la alimentación de la reServer J2032.

**Paso 2.** Para ingresar al modo de recuperación, necesitas conectar los pines **FC REC** y **GND** mediante puentes. Los pines se pueden ubicar como se muestra a continuación:

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    Guía de configuración del puente para recuperación forzada
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">
          <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reServerJ2032/force_recover.png" /></div>
        </td>
        <td align="center">
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/debugheader_REC.png" /></div>
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032jumper.png" /></div>
        </td>
      </tr>
    </tbody></table>
</div>



**Paso 3.** Usando un cable tipo C para conectarte a la PC host Linux con el puerto USB tipo C `NX USB` (como se muestra en la imagen a continuación) en la reServer J2032, conecta el cable de CC de 12 V/5 A y luego presiona el botón de encendido desde el frente para encender la reServer J2032.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/back_type_c.png" /></div>


<!-- !!!Attention
    Before wiring, please pay attention to the power connector and data connector, please do not connect the data connector directly to DC power. -->

**Paso 4.** Ahora en la **Computadora host (Ubuntu 18.04)** abre la `Terminal`, ingresa el comando `lsusb`. Cuando el contenido devuelto muestre el `ID 0955:7e19 NVidia Corp.`, significa que la reServer J2032 está en el modo de recuperación forzada y podemos continuar con el siguiente paso.

- Para la Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>


## Flasheo del sistema operativo JetPack a través de NVIDIA SDK Manager

A continuación veremos el tutorial sobre cómo instalar el sistema a través de NVIDIA SDK Manager. Es una herramienta todo en uno de NVIDIA SDK Manager que incluye software de desarrollador y proporciona una solución de configuración del entorno de desarrollo de un extremo a otro para el SDK de NVIDIA. Por tanto, se recomienda para principiantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>


### Paso 1. Instala NVIDIA SDK Manager en la PC host con Linux.

Necesitamos abrir el navegador en la PC host con Linux y <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>descargar NVIDIA SDK Manager</span></a> del sitio web oficial de NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>


### Paso 2. Abre NVIDIA SDK Manager e inicia sesión.

En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse y abrir una "Terminal". Luego podemos escribir el siguiente comando para iniciar SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>


La primera vez que utilices NVIDIA SDK Manager, aparecerá una página web solicitándote que inicies sesión con tu cuenta NVIDIA previamente registrada.

### Paso 3. Selecciona el dispositivo de destino.

Después de iniciar sesión, accederás a la primera pantalla donde se realiza el primer paso de la instalación. Como ya hemos conectado la reServer J2032, aparecerá una ventana emergente que te permitirá seleccionar el dispositivo de hardware.

La reServer J2032 está equipada con **módulo NVIDIA Jetson NX**, por lo que podemos elegir la primera opción.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>


Hay más opciones para que elijas en la primera pantalla:

- Es necesario seleccionar **Jetson** en el panel Categoría de producto.
- En el panel Configuración de hardware, te recomendamos que **no selecciones Máquina host**. Tomará más tiempo instalar los componentes de NVIDIA para tu host Ubuntu actual. Puedes elegirlo si lo necesitas.
- En el panel Sistema operativo de destino, podemos seleccionar diferentes **sistemas operativos** y **versiones de JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden admitir diferentes tipos de JetPack. Recomendamos "JetPack 4.6.1".
- En los SDK adicionales, dado que el espacio de almacenamiento de eMMC es de solo 16 GB, te quedarás sin memoria si instalamos DeepStream aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>


Haz click en Continuar para continuar con el siguiente paso.

### Paso 4. Revisar los componentes deseados.

Desde **Detalles y licencia**, puedes expandir los paneles de componentes del host y de componentes de destino para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>


Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>


¡¡¡Tip!!!
    Al elegir qué componentes instalar, es posible que desees vigilar la memoria utilizada. El tamaño del eMMC integrado es de solo 16 GB; asigna y utiliza este espacio de forma inteligente según tus necesidades reales.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>

    Después de las pruebas reales, solo quedarán unos 500 MB de espacio eMMC después de instalar el conjunto completo de componentes del SDK.

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>


    Si deseas comprobar cómo resolver el problema de capacidad insuficiente, consulta [Solución de problemas](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

Si deseas que el SDK Manager descargue todos los archivos en una ubicación distinta a la ruta predeterminada, ve a Opciones de descarga e instalación ubicadas en la parte inferior de la pantalla, luego selecciona la ruta que deseas usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>


Selecciona Continuar para continuar con el siguiente paso.

### Paso 5. Instala el sistema.

Antes de que comiences la instalación, SDK Manager te solicitará que ingreses tu contraseña como súper usuario `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>


Después de un tiempo, se nos pedirá que configuremos el nuevo sistema para nuestra reServer J2032. Dado que forzamos manualmente el modo de recuperación, seleccionamos "Configuración manual: establezca el objetivo en Forzar modo de recuperación mediante operaciones manuales" aquí. Mientras tanto, elegimos la **Preconfiguración** predeterminada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>


Después de eso, debemos ingresar el nombre y la contraseña de nuestro nuevo sistema Jetson en nuestra reServer J2032, que tu mismo establecerás.

Cuando estés listo, haz click en "Flash" para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Espera pacientemente a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>


### (Opcional)Paso 6. Instala los componentes del SDK.

Si verificaste la instalación del componente en el **paso 4** anterior, deberás seguir este paso.

Después de un momento, podrás ver una nueva ventana emergente en NVIDIA SDK Manager, que te indicará que necesitas conectarte a tu dispositivo a través de la dirección IP. Significa que el sistema ya ha sido instalado y se procederá con la instalación de los componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>


En este caso, podemos **quitar el puente** y reiniciar la reServer J2032. Luego debemos conectar la reServer J2032 a un monitor a través de HDMI/Puerto de pantalla, ingresar la contraseña que ingresaste en el **paso 4** e iniciar sesión en la interfaz principal.

En este punto, debes conectar la reServer J2032 a la misma LAN que la PC host de Linux y determinar la **dirección IP** de la Jetson usando el comando `ifconfig`.

Regresa a la PC host de Linux e ingresa la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes del SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>


Cuando veas aparecer la siguiente ventana, la instalación habrá finalizado. Puedes comenzar a usar la Jetson o continuar siguiendo los pasos a continuación para completar alguna configuración básica de tu nuevo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>


¡¡¡Atención!!!
    Asegúrate de desconectar el puente y salir del modo de recuperación forzada antes de volver a encender el sistema.

## Actualización del sistema operativo JetPack a través de la línea de comandos

Gracias a la libertad de personalizar BSP (Paquete de controladores NVIDIA Linux), actualizar JetPack OS a través de la línea de comandos puede ser muy fácil para los usuarios de Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>


### Paso 1. Descarga el paquete de controladores NVIDIA Linux adecuado

En la **PC host Linux**, debemos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos verificar si la versión de Jetson Linux es compatible con nuestro módulo reServer J2032 Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/select_L4T.png" /></div>


Una vez que encuentres la versión adecuada, haz click para ir a la página descargada. Busca y haz click en "Paquete de controladores L4T (BSP)" y "Sistema de archivos raíz de muestra" para descargar los archivos del controlador. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/download_file.png" /></div>


Como ejemplo, elegimos la versión NVIDIA L4T 32.7.1 ya que se incluye como parte de JetPack4.6.1 y es compatible con el módulo Jetson Nano. Los nombres de los archivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
- Jetson_Linux_R32.7.1_aarch64.tbz2

### Paso 2. Descomprime los archivos del paquete y ensambla los Rootfs mediante la línea de comandos

En la PC host de Linux, debemos buscar una carpeta y almacenar los archivos del paquete que descargamos antes. Luego abre una ventana de línea de comandos (Terminal) en la carpeta y usa los comandos mostrado a continuación para descomprimir los archivos y ensamblar los rootfs:

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

¡¡¡Nota!!!
    `${}` Aquí es donde debes poner los nombres de los archivos.

*Como en el ejemplo de **NVIDIA L4T 32.7.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, por lo que en la ruta '/Desktop/L4T_Drivers' abrimos la ventana de línea de comandos (Terminal) y ejecutamos el siguiente comando.

```sh
$ tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
$ cd ..
$ sudo ./apply_binaries.sh
```

La salida debería lucir como se muestra a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>


### Paso 3. Flashea el sistema a la computadora

Dado que ya forzamos la reComputer J1020 al modo de recuperación y el módulo es Jetson Nano. Podemos flashear directamente el sistema en la reComputer y ejecutar el siguiente comando:

```sh
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>


¡¡¡Tip!!!
    El flasheo de L4T tarda unos 10 minutos, o más en una computadora host lenta.

En este momento, podemos desconectar el puente y luego encender la computadora nuevamente para usarla.

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
