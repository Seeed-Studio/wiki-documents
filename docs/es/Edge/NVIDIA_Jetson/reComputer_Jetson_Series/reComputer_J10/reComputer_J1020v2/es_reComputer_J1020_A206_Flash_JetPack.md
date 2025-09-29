---
description: reComputer J1020 v1 | A206
title: reComputer J1020v1 | A206
keywords:
  - Edge
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J1020_A206_Flash_JetPack
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Flashear JetPack a reComputer J1020v1 (placa portadora A206)

En este wiki, te mostraremos cómo flashear el SO Jetpack a reComputer J1020. Dado que su placa portadora está diseñada como la placa portadora oficial NVIDIA Nano Developer, podemos flashear el JetPack de dos maneras.

## Comenzando

Podemos usar el software Linux **NVIDIA SDK Manager** o podemos usar directamente el **NVIDIA Linux Driver Package** a través de la línea de comandos de Linux para flashear el SO JetPack en el reComputer J1020. Para los principiantes en NVIDIA Jetson, recomendamos altamente NVIDIA SDK Manager.

- [Opción 1 - Flashear SO JetPack a través de NVIDIA SDK Manager](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Opción 2 - Flashear SO JetPack a través de línea de comandos](#flashing-jetpack-os-via-command-line)

Todavía hay algunas preparaciones que necesitamos primero:

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta NVIDIA</span></a>
- Computadora host Linux con SO Ubuntu 18.04 (o superior)

!!!note
 En este tutorial, usaremos un sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación de Hardware (Modo de Recuperación Forzada)

Antes de que podamos continuar con los pasos de instalación, necesitamos asegurarnos de que nuestro reComputer esté en modo de recuperación forzada.

**Paso 1.** Antes de comenzar, necesitas desconectar la alimentación del reComputer.
**Paso 2.** Para entrar en modo de recuperación, necesitas conectar **FC REC** y **GND** usando jumpers.

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Encabezado de Botón</th>
      <th align="center">Descripción</th>  
      <th align="center">Encabezado de Botón</th>
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

**Paso 3.** Enciende el reComputer con cable DC de 12V/5A en el lado izquierdo del reComputer y usa un cable Type-C para conectar la PC host Linux en el lado derecho del reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

!!!Attention
    Antes del cableado, por favor presta atención al conector de alimentación y al conector de datos, por favor no conectes el conector de datos directamente a la alimentación DC.

**Paso 4.** Bajo la ventana de línea de comandos de la computadora host, ingresa el comando `lsusb`. Cuando el contenido devuelto tenga el `ID 0955:7f21 NVidia Corp.` en él, significa que el reComputer está en modo de recuperación forzada y podemos proceder a las operaciones subsecuentes.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## Flasheo del SO JetPack a través del Administrador SDK de NVIDIA

A continuación, revisaremos el tutorial sobre la instalación del sistema a través del Administrador SDK de NVIDIA. El Administrador SDK de NVIDIA es una herramienta todo en uno que agrupa software para desarrolladores y proporciona una solución de configuración de entorno de desarrollo integral para los SDK de NVIDIA. Por lo tanto, se recomienda para principiantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Paso 1. Instalar el Administrador SDK de NVIDIA en la PC Host Linux

Necesitamos abrir el navegador en la PC Host Linux y <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>descargar el Administrador SDK de NVIDIA</span></a> desde el sitio web oficial de NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### Paso 2. Abrir el Administrador SDK de NVIDIA e iniciar sesión

En la pantalla de la PC host Linux, podemos hacer clic derecho con el ratón y abrir una Terminal. Luego podemos escribir el comando a continuación para iniciar el Administrador SDK:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

La primera vez que uses el Administrador SDK de NVIDIA, aparecerá una página web que te pedirá iniciar sesión con tu cuenta de NVIDIA previamente registrada.

### Paso 3. Seleccionar el dispositivo objetivo

Después de iniciar sesión, serás llevado a la primera pantalla donde está el primer paso de la instalación. Dado que ya hemos conectado el reComputer J1020, aparecerá una ventana para permitirte seleccionar el dispositivo de hardware.

El reComputer J1020 está equipado con el **módulo NVIDIA Jetson Nano 4GB**, por lo que podemos elegir el primero.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Hay más selecciones para elegir en la primera pantalla:

- El **Jetson** en el panel de Categoría de Producto necesita ser seleccionado.
- En el panel de Configuración de Hardware, recomendamos que **no selecciones Host Machine**. Esto tomará más tiempo para instalar los componentes de NVIDIA para tu Ubuntu host actual. Puedes elegirlo si lo necesitas.
- En el panel de Sistema Operativo Objetivo, podemos seleccionar diferentes **sistemas operativos** y **versiones de JetPack**. Pero ten cuidado con la versión de JetPack, diferentes módulos pueden soportar diferentes tipos de JetPack. Recomendamos "JetPack 4.6.1" aquí.
- En los SDK Adicionales, dado que el espacio de almacenamiento del eMMC es solo de 16GB, se quedará sin memoria si instalamos DeepStream aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz clic en Continuar para proceder al siguiente paso.

### Paso 4. Revisar los componentes deseados

Desde **Detalles y Licencia**, puedes expandir los paneles de componentes del host y componentes objetivo para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    Al elegir qué componentes instalar, es posible que quieras vigilar la capacidad utilizada. El tamaño del eMMC integrado es solo de 16GB, por favor asigna y usa este espacio sabiamente según tus necesidades reales.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    Después de las pruebas reales, solo quedan aproximadamente 500MB de espacio eMMC después de instalar el conjunto completo de componentes SDK.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>

    Si quieres verificar cómo resolver el problema de capacidad insuficiente, por favor consulta [Solución de problemas](https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

Si quieres que el Administrador SDK descargue todos los archivos a una ubicación diferente a la ruta predeterminada, ve a las Opciones de Descarga e Instalación ubicadas en la parte inferior de la pantalla, luego selecciona la ruta que deseas usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecciona Continuar para proceder al siguiente paso.

### Paso 5. Instalar el sistema

Antes de que comience la instalación, el Administrador SDK te pide que ingreses tu contraseña de `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Después de un tiempo, se nos pedirá configurar el nuevo sistema para nuestro reComputer. Dado que forzamos manualmente el modo de recuperación, seleccionamos `Configuración manual: establecer el objetivo en Modo de Recuperación Forzada a través de operaciones manuales` aquí. Mientras tanto, elegimos la **Pre-Configuración** predeterminada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, necesitamos ingresar el nombre y contraseña de nuestro nuevo sistema Jetson para nuestro reComputer, lo estableces tú mismo.

Cuando esté listo, haz clic en `Flash` para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Por favor espera pacientemente a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional)Paso 6. Instalar los componentes SDK

Si marcaste la instalación del componente en el **paso 4** anterior, necesitarás pasar por este paso.

Después de un momento, podrás ver una nueva ventana aparecer en el Administrador SDK de NVIDIA, indicándote que necesitas conectarte a tu dispositivo a través de la dirección IP. Significa que el sistema ya ha sido instalado y se procederá con la instalación de componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **extraer el jumper** y reiniciar el reComputer. Luego necesitamos conectar el reComputer a un monitor vía HDMI, ingresar la contraseña que ingresaste en el **paso 4**, e iniciar sesión en la interfaz principal.

En este punto necesitas conectar el reComputer a la misma LAN que la PC host Linux y determinar la **dirección IP** del Jetson usando el comando `ifconfig`.

Regresa a la PC host Linux e ingresa la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes del SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas que aparece la siguiente ventana, la instalación ha terminado. Puedes comenzar a usar Jetson o continuar siguiendo los pasos a continuación para completar alguna configuración básica de tu nuevo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    Asegúrate de desconectar el jumper y salir del modo de recuperación forzada antes de volver a encender el sistema.

## Flashear el SO JetPack vía Línea de Comandos

Gracias a la libertad de personalizar el BSP(NVIDIA Linux Driver Package), flashear el SO JetPack vía línea de comandos puede ser muy fácil para los usuarios con base de conocimientos de Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Paso 1. Descargar el NVIDIA Linux Driver Package apropiado

En la **PC host Linux**, necesitamos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos verificar si la versión de Jetson Linux es compatible con nuestro módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Una vez que encuentres la versión apropiada, haz clic para ir a la página de descarga. Encuentra y haz clic en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos del driver. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 32.7.1 ya que está incluida como parte de JetPack4.6.1 y es compatible con el módulo Jetson Nano. Los nombres de los archivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Paso 2. Descomprimir Archivos de Paquete y Ensamblar el Rootfs vía Línea de Comandos

En la PC host Linux, debemos encontrar una carpeta y almacenar los archivos de paquete que descargamos antes. Luego abrir una ventana de línea de comandos(Terminal) en la carpeta y usar la línea de comandos a continuación para descomprimir los archivos y ensamblar el rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${}` es donde colocas los nombres de los archivos.

*Como ejemplo de **NVIDIA L4T 32.7.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, por lo que bajo la ruta '/Desktop/L4T_Drivers' abrimos la ventana de línea de comandos (Terminal) y ejecutamos el siguiente comando.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### Paso 3. Flashear el Sistema al reComputer

Dado que ya hemos forzado el reComputer J1020 al modo de recuperación y el módulo es Jetson Nano. Podemos flashear directamente el sistema al reComputer ejecutando el siguiente comando:

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    El flasheo de L4T toma aproximadamente 10 minutos, o más en una computadora host lenta.

En este momento, podemos desconectar el jumper y luego encender el reComputer nuevamente para usarlo.

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

Si encuentras el error mostrado abajo en **Flasheo a eMMC con línea de comandos -- Paso 2**, probablemente no lograste poner la Placa Portadora en modo de recuperación forzada. Por favor presta especial atención, no entres al modo de recuperación forzada con la Placa Portadora encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes entrar al sistema en **Flasheo a eMMC con línea de comandos -- Paso 3** y estás atascado en la línea de comandos de la pantalla de arranque, probablemente no saliste del modo de recuperación forzada. De igual manera, no es válido que desconectes el jumper para salir del modo de recuperación forzada mientras la Placa Portadora está encendida, todo esto necesita hacerse mientras estás apagado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    Si se necesita más espacio de almacenamiento, podemos usar una tarjeta SD para expandir la capacidad, o grabar el sistema en una tarjeta SD, puedes consultar nuestra solución recomendada [Flash System on SD card](https://wiki.seeedstudio.com/es/J101_Enable_SD_Card/)

## Recursos
[Hoja de datos del reComputer J1020](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-Jetson-J1020-w_o-power-adapter-datasheet.pdf)

[Esquemático de las placas portadoras reComptuer J102 (también J202)](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[Archivo 3D del reComputer J1010](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Catálogo de series Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Historias de éxito de Edge AI de Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Comparación de series Jetson de Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Dispositivos Jetson de Seeed en una página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)


## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
