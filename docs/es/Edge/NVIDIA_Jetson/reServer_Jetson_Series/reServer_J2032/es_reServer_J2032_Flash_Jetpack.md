---
description: reServer J2032
title: reServer J2032 Flash NVIDIA JetPack™ OS 
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

En este wiki, te mostraremos cómo flashear el Sistema Operativo NVIDIA Jetpack en el módulo Jetson Xavier NX con reServer J2032.

Aquí está la descripción general de la placa portadora reServer J2030 para referencia:  

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    Descripción general de la placa portadora reServer J2030
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">Frontal</td>
        <td align="center">Posterior</td>
      </tr>
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

## Comenzando

Podemos usar **NVIDIA SDK manager** para flashear el sistema, o podemos hacer esto fácilmente usando el **Script de Línea de Comandos**. Para personas que tienen conocimientos de Linux, recomendamos altamente usar **Script de Línea de Comandos** que proporciona mucha más funcionalidad.

- [Flasheando SO JetPack vía NVIDIA SDK manager y terminal de Linux](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Flasheando SO JetPack vía terminal de Linux](#flashing-jetpack-os-via-command-line)

Todavía hay algunas preparaciones que se necesitan:

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta NVIDIA</span></a>
- Computadora Host Linux con SO Ubuntu 18.04 (o superior)

!!!note
 En este tutorial, usaremos un sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación de Hardware (Modo de Recuperación Forzada)

Antes de que podamos continuar con los pasos de instalación, necesitamos asegurarnos de que el reServer J2032 esté puesto en el modo de recuperación forzada.

**Paso 1.** Antes de comenzar, necesitas desconectar la alimentación del reServer J2032.

**Paso 2.** Para entrar en modo de recuperación, necesitas conectar los pines **FC REC** y **GND** usando jumpers. Los pines se pueden localizar como se muestra a continuación:

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    Guía de Configuración de Jumper de Recuperación Forzada
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

**Paso 3.** Usando un cable Type-C para conectar al PC Host Linux con el puerto USB tipo C `NX USB` (como se muestra en la imagen a continuación) en el reServer J2032, conecta el cable DC de 12V/5A y luego presiona el botón de encendido desde el frente para encender el reServer J2032.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/back_type_c.png" /></div>

<!-- !!!Attention
    Before wiring, please pay attention to the power connector and data connector, please do not connect the data connector directly to DC power. -->

**Paso 4.** Ahora en la **computadora Host (Ubuntu 18.04)** abre `Terminal`, ingresa el comando `lsusb`. Cuando el contenido devuelto tenga `ID 0955:7e19 NVidia Corp.` en él, significa que el reServer J2032 está en modo de recuperación forzada y podemos proceder al siguiente paso.

- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## Flasheando el SO JetPack a través de NVIDIA SDK Manager

A continuación repasaremos el tutorial sobre la instalación del sistema a través de NVIDIA SDK Manager. El NVIDIA SDK Manager es una herramienta todo-en-uno que agrupa software para desarrolladores y proporciona una solución de configuración de entorno de desarrollo de extremo a extremo para los SDKs de NVIDIA. Por lo tanto, se recomienda para principiantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Paso 1. Instalar NVIDIA SDK Manager en el PC Host Linux

Necesitamos abrir el navegador en el PC Host Linux y <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>descargar el NVIDIA SDK Manager</span></a> desde el sitio web oficial de NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### Paso 2. Abrir NVIDIA SDK Manager e iniciar sesión

En la pantalla del PC host Linux, podemos hacer clic derecho con el mouse y abrir una `Terminal`. Luego podemos escribir el comando a continuación para iniciar el SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

La primera vez que uses NVIDIA SDK Manager, aparecerá una página web solicitándote que inicies sesión con tu cuenta NVIDIA previamente registrada.

### Paso 3. Seleccionar el dispositivo objetivo

Después de iniciar sesión, serás llevado a la primera pantalla donde está el primer paso de la instalación. Dado que ya hemos conectado el reServer J2032, aparecerá una ventana para permitirte seleccionar el dispositivo de hardware.

El reServer J2032 está equipado con el **módulo NVIDIA Jetson NX**, por lo que podemos elegir el primero.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Hay más selecciones para elegir en la primera pantalla:

- El **Jetson** en el panel Product Category necesita ser seleccionado.
- En el panel Hardware Configuration, recomendamos que **no selecciones Host Machine**. Esto tomará más tiempo para instalar los componentes NVIDIA para tu Ubuntu host actual. Puedes elegirlo si lo necesitas.
- En el panel Target Operating System, podemos seleccionar diferentes **sistemas operativos** y **versiones de JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden soportar diferentes tipos de JetPack. Recomendamos "JetPack 4.6.1" aquí.
- En los Additional SDKs, dado que el espacio de almacenamiento del eMMC es solo de 16GB, se quedará sin memoria si instalamos DeepStream aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz clic en Continue para proceder al siguiente paso.

### Paso 4. Revisar los componentes deseados

Desde **Details and License**, puedes expandir los paneles de componentes del host y componentes objetivo para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    Al elegir qué componentes instalar, es posible que quieras vigilar la capacidad utilizada. El tamaño del eMMC integrado es solo de 16GB, por favor asigna y usa este espacio sabiamente según tus necesidades reales.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>

    Después de las pruebas reales, solo quedan aproximadamente 500MB de espacio eMMC después de instalar el conjunto completo de componentes SDK.

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>


    Si quieres verificar cómo resolver el problema de capacidad insuficiente, por favor consulta [Troubleshooting](https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

Si quieres que SDK Manager descargue todos los archivos a una ubicación diferente a la ruta predeterminada, ve a Download & Install Options ubicado en la parte inferior de la pantalla, luego selecciona la ruta que deseas usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecciona Continue para proceder al siguiente paso.

### Paso 5. Instalar el sistema

Antes de que comience la instalación, SDK Manager te solicita que ingreses tu contraseña de `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Después de un tiempo, se nos pedirá configurar el nuevo sistema para nuestro reServer J2032. Dado que forzamos manualmente el modo de recuperación, seleccionamos `Manual setup: set the target to Force Recovery Mode via manual operations` aquí. Mientras tanto, elegimos la **Pre-Config** predeterminada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, necesitamos ingresar el nombre y contraseña de nuestro nuevo sistema Jetson a nuestro reServer J2032, esto lo configuras tú mismo.

Cuando esté listo, haz clic en `Flash` para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Por favor espera pacientemente a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional) Paso 6. Instalar los componentes del SDK

Si marcaste la instalación del componente en el **paso 4** anterior, necesitarás pasar por este paso.

Después de un momento, podrás ver una nueva ventana emergente en el NVIDIA SDK Manager, indicándote que necesitas conectarte a tu dispositivo a través de la dirección IP. Esto significa que el sistema ya ha sido instalado y se procederá con la instalación de componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **quitar el jumper** y reiniciar el reServer J2032. Luego necesitamos conectar el reServer J2032 a un monitor a través de HDMI/Display Port, ingresar la contraseña que ingresaste en el **paso 4**, e iniciar sesión en la interfaz principal.

En este punto necesitas conectar el reServer J2032 a la misma LAN que la PC host Linux y determinar la **dirección IP** del Jetson usando el comando `ifconfig`.

Regresa a la PC host Linux e ingresa la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes del SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas aparecer la siguiente ventana, la instalación habrá terminado. Puedes comenzar a usar Jetson o continuar siguiendo los pasos a continuación para completar alguna configuración básica de tu nuevo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    Asegúrate de desconectar el jumper y salir del modo de recuperación forzada antes de volver a encender el sistema.

## Flashear el SO JetPack a través de Línea de Comandos

Gracias a la libertad de personalizar el BSP (NVIDIA Linux Driver Package), flashear el SO JetPack a través de línea de comandos puede ser muy fácil para los usuarios con base de conocimientos de Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Paso 1. Descargar el NVIDIA Linux Driver Package apropiado

En la **PC host Linux**, necesitamos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos verificar si la versión de Jetson Linux es compatible con nuestro módulo Jetson reServer J2032.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/select_L4T.png" /></div>

Una vez que encuentres la versión apropiada, haz clic para ir a la página de descarga. Encuentra y haz clic en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos del controlador. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/download_file.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 32.7.1 ya que está incluida como parte de JetPack4.6.1 y es compatible con el módulo Jetson Nano. Los nombres de los archivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
- Jetson_Linux_R32.7.1_aarch64.tbz2

### Paso 2. Descomprimir Archivos de Paquete y Ensamblar el Rootfs a través de Línea de Comandos

En la PC host Linux, debemos encontrar una carpeta y almacenar los archivos de paquete que descargamos antes. Luego abrir una ventana de línea de comandos (Terminal) en la carpeta y usar la línea de comandos a continuación para descomprimir los archivos y ensamblar el rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${}` es donde pones los nombres de los archivos.

*Como ejemplo de **NVIDIA L4T 32.7.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, así que bajo la ruta '/Desktop/L4T_Drivers' abrimos la ventana de línea de comandos (Terminal) y ejecutamos el siguiente comando.

```sh
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

La salida debería ser como:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### Paso 3. Flashear el Sistema al reComputer

Dado que ya hemos forzado el reComputer J1020 al modo de recuperación y el módulo es Jetson Nano. Podemos flashear directamente el sistema al reComputer ejecutando el siguiente comando:

```sh
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    El flasheo de L4T toma aproximadamente 10 minutos, o más en una computadora host lenta.

En este momento, podemos desconectar el jumper y luego encender el reComputer nuevamente para usarlo.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
