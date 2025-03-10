---
description: A205 Carrier Board
title: A205 Carrier Board
keywords:
  - Edge
  - reComputer Carrier_Board_para_Modulo_Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_A205_Flash_System
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

# Flashea JetPack OS en la Carrier Board A205 (Con soporte para NVIDIA Jetson Nano y NVIDIA Jetson Xavier NX)

En esta wiki, te mostraremos cómo flashear Jetpack OS a la Carrier Board A205 que admite tanto el módulo NVIDIA Jetson Nano como el módulo NVIDIA Jetson Xavier. Aquí te presentaremos dos formas de actualizar el sistema y, debido a que la Carrier Board A205 es diferente a la placa portadora oficial NVIDIA Jetson, también debes instalar el controlador correspondiente.

![image](https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A205.png)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A205-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5133.html"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue una ahora 🖱️</font></span></strong>
    </a>
</div>

## Primeros pasos

Podemos usar **NVIDIA SDK manager y terminal Linux** para actualizar el sistema, o podemos hacerlo fácilmente usando la **Terminal Linux**. Para las personas que tienen experiencia en Linux, recomendamos utilizar únicamente la Terminal de Linux.

- [Flasheando JetPack OS con NVIDIA SDK manager y la terminal de Linux](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Flasheando JetPack OS con la terminal de Linux](#flashing-jetpack-os-via-command-line)

Todavía hay algunos preparativos que necesitamos hacer primero:

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta NVIDIA</span></a>
- Computadora host Linux con sistema operativo Ubuntu 18.04 (o superior)

!!!nota
  En este tutorial, usaremos el sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación del Hardware (Modo de recuperación forzado)

Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en el modo de recuperación forzado. Hay diferentes tipos de Carrier Boards, ten en cuenta la diferencia.

**Paso 1.** Primero, necesitamos desconectar la alimentación de la placa.

**Paso 2.** Conecta tu placa base y tu PC host Linux con un **cable USB tipo C**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2051.png" /></div>

**Paso 3.** Conecta y enciende la placa mientras presionas el **botón RECOVERY (W32)** y luego suelta el botón.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2052.jpg" /></div>

**Paso 4.** En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse para abrir una Terminal e ingresar el comando `lsusb`. Cuando el contenido devuelto tiene "NVidia Corp.", significa que tu Carrier Board A205 está en modo de recuperación forzado y puedes continuar con las operaciones posteriores.

La identificación depende de los módulos en la Carrier Board y la información se muestra a continuación:

- Para la Jetson Nano: **0955:7f21 NVidia Corp**
- Para la Jetson Xavier NX: **0955:7e19 NVidia Corp**
- Para la Jetson TX2 NX: **0955:7c18 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## Flasheando JetPack OS con NVIDIA SDK Manager

A continuación veremos cómo instalar el sistema a través de NVIDIA SDK Manager. Es una herramienta todo en uno de NVIDIA SDK Manager que incluye software de desarrollador y proporciona una solución de configuración del entorno de desarrollo de un extremo a otro para los SDK de NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Paso 1. Instala NVIDIA SDK Manager en la PC host con Linux

Necesitamos abrir el navegador en la PC host de Linux y <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>Descargar el NVIDIA SDK Manager</span></a> desde el sitio oficial de NVIDIA.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack1.png" /></div>

### Paso 2. Abre NVIDIA SDK Manager e inicia sesión

En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse y abrir una Terminal. Luego podemos escribir el siguiente comando para iniciar SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

La primera vez que utilices NVIDIA SDK Manager, aparecerá una página web solicitándotse que inicies sesión con tu cuenta NVIDIA previamente registrada.

### Paso 3. Selecciona el dispositivo deseado

Después de iniciar sesión, accederás a la primera pantalla donde se realiza el primer paso de la instalación. Como ya hemos conectado la placa, aparecerá una ventana emergente que te permitirá seleccionar el dispositivo deseado.

El ejemplo aquí se efectuó con el **módulo NVIDIA Jetson Nano de 4GB**, por lo que podemos elegir el primero.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Hay más opciones para que elijas en la primera pantalla:

- Es necesario seleccionar **Jetson** en el panel Categoría de producto.
- En el panel Configuración de hardware, te recomendamos que **no selecciones Máquina host**. Tomará más tiempo instalar los componentes de NVIDIA para tu host Ubuntu actual. Puedes elegirlo si lo necesitas.
- En el panel Sistema operativo de destino, podemos seleccionar diferentes **sistemas operativos** y **versiones de JetPack**. Pero ten cuidado con la versión de JetPack. Recomendamos "JetPack 4.6.1".
- En los SDK adicionales, dado que el espacio de almacenamiento de eMMC es de solo 16 GB, te quedarás sin memoria si instalas DeepStream.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Haz click en "Continue" para continuar con el siguiente paso.

### Paso 4. Revisar los componentes deseados

Desde **Details and License**, puedes expandir los paneles de componentes del host y de componentes de destino para revisar los componentes que se instalarán en tu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Si solo necesitas instalar el sistema, puedes desmarcar el componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    Al elegir qué componentes instalar, es posible que desees vigilar la cantidad de memoria utilizada. El tamaño del eMMC integrado es de solo 16 GB; asigna y utiliza este espacio de forma inteligente según tus necesidades reales.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    Después de las pruebas reales, solo quedarán unos 500 MB de espacio eMMC después de instalar el conjunto completo de componentes del SDK.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    Si deseas resolver el problema de memoria insuficiente, consulta [Solución de problemas](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

Si deseas que SDK Manager descargue todos los archivos en una ubicación distinta a la ruta predeterminada, ve a Opciones de descarga e instalación ubicadas en la parte inferior de la pantalla, luego selecciona la ruta que deseas usar.

Y debido a que la Carrier Board A205 requiere una unidad flash, asegurate de marcar **Download now. Install later.** para descargar el sistema pero no instalarlo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/60.png" /></div>

Selecciona "Continue" para continuar con el siguiente paso.

En este punto el sistema comenzará a descargar los archivos en la ruta que elijas, por lo que podemos aprovechar este tiempo para tener listo el controlador.

### Paso 5. Elige los Drivers apropiados

Ahora, también necesitamos instalar el controlador para asegurarnos de que cada componente de la placa esté funcionando. Primero debemos elegir los archivos del controlador en el host de Ubuntu de acuerdo con la Carrier Board y el módulo.

<table align="center">
  <tbody><tr>
      <th align="center">Carrier Board</th>
      <th align="center">Módulo Jetson</th>  
      <th align="center">Versión de JetPack</th>
      <th align="center">Versión de L4T</th>
      <th align="center">Dirección de descarga</th>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nano.zip">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nx.zip">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_tx2nx.zip">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A205/205nx_jp5.0.2.zip">Descarga</a></td>
    </tr>
  </tbody></table>

!!!Nota
  Hay dos controladores JetPack 5.0.2 para la A205 incluidos en los archivos descargados. Ambos funcionan bien, excepto que uno de ellos es compatible con **cámara IMX-219** y el otro con **cámara IMX-477**.

### Paso 6. Descomprimir los drivers en el directorio del sistema

¡¡¡Atención!!!
  Asegurate que el SDK Manager haya completado la descarga del sistema antes de continuar con este paso.

En la PC host de Linux, debemos reemplazar algunos archivos de la imagen oficial con los archivos del paquete de controladores descargados. Dado que aquí utilizamos SDK Manager, ruta de la imagen oficial es:

`/home/<username>/nvidia/nvidia_sdk/JetPack_<version num>_Linux_<board name>_TARGETS/Linux_for_Tegra`

### Reemplaza los archivos

¡¡¡Atención!!!
  Antes de reemplazar los archivos, puedes optar por hacer una copia de seguridad del archivo `.dtb` que será reemplazado en la carpeta `kernel` y guardarlo temporalmente en otra ruta para que puedas restaurar la descarga oficial en cualquier momento.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

O podemos ejecutar el siguiente comando para reemplazar los archivos:

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

¡¡¡Nota!!!
    `${}` Se utiliza para variables de entorno.
 `${Drive package kernel path}` indica la ruta completa a la carpeta de imágenes del kernel
 `${Officially unpacked Linux_for_Tegra path}` indica la ruta completa a la carpeta Linux_for_Tegra proporcionada oficialmente después de extraer el paquete zip L4T.

### Paso 7. Instalación del sistema

Como elegimos instalar el sistema más tarde, tendremos que rehacer **los pasos 3 a 4** en este punto, lo que instalará el sistema en la A205 con los archivos del controlador ya reemplazados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/61.png" /></div>

Antes de que comience la instalación, SDK Manager te solicitará que ingreses tu contraseña como súper usuario `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

SDK Manager admite dos opciones para poner tu dispositivo Jetson en modo Force Recovery. Entonces seleccionamos `Manual setup: set the target to Force Recovery Mode via manual operations`.

También puedes elegir si deseas preconfigurar la configuración OEM.

- **Pre-Config**: SDK Manager mostrará el destino con la configuración predefinida y no es necesario completar el Asistente de configuración del sistema después de la actualización.
- **Runtime**: No hay ninguna configuración predeterminada establecida en el destino y deberás completar manualmente el Asistente de configuración del sistema después de flashear.

Selecciona la pre - configuración que viene por defecto **Pre-Config**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Después de eso, ingresa el nombre y la contraseña del nuevo sistema Jetson en la parte inferior, anótalos en algún sitio.

Haz click en `Flash` para continuar.

La pantalla muestra el progreso de la descarga e instalación del software. Espera pacientemente a que se complete la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional)Paso 7. Instala los componentes del SDK 

Si verificaste la instalación del componente en el **paso 4**, deberás seguir este paso.

Después de un momento, podrás ver una nueva ventana emergente en NVIDIA SDK Manager, que te indicará que necesitas conectarte a tu dispositivo a través de la dirección IP. Significa que el sistema ya ha sido instalado y se procederá con la instalación de los componentes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

En este caso, podemos **remover el puente** y reiniciar la carrier board. Luego debemos conectar la placa a un monitor mediante un HDMI, ingresar la contraseña que ingresaste durante el  **paso 4** e iniciar sesión en la interfaz principal.

En este punto, debes conectar la placa a la misma LAN que la PC host de Linux y determinar la **dirección IP** de la Jetson usando el comando `ifconfig`.

Regresa a la PC host de Linux e ingresa la dirección IP que acabas de obtener. NVIDIA SDK Manager intentará conectarse al dispositivo Jetson y procederá a completar la instalación de los siguientes componentes del SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Cuando veas aparecer la siguiente ventana, la instalación habrá finalizado. Pero aún necesitamos instalar el controlador, por lo que debemos mantener la placa en el **Modo de recuperación forzado**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

Después del flasheo puedes comenzar a utilizar tu Carrier Board.

## Flasheando JetPack OS mediante la línea de comandos

Gracias a la libertad de personalizar BSP (Paquete de controladores NVIDIA Linux), actualizar JetPack OS a través de la línea de comandos puede ser muy fácil para los usuarios de Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Paso 1. Descarga la paquetería de drivers de NVIDIA Linux

En la **PC host Linux**, debemos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos comprobar si la versión de Jetson Linux es compatible.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Una vez que encuentres la versión adecuada, haz click para ir a la página descargada. Busca y haz click en "Paquete de controladores L4T (BSP)" y "Sistema de archivos raíz de muestra" para descargar los archivos del controlador. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/A205_Flash_Jetpack.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 32.7.1 ya que se incluye como parte de JetPack4.6.1 y es compatible con el módulo Jetson Nano. Los nombres de los archivos son:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Paso 2. Descomprime los archivos del paquete y ensambla los Rootfs mediante la línea de comandos

En la PC host de Linux, debemos buscar una carpeta y almacenar los archivos del paquete que descargamos antes. Luego abre una terminal en la carpeta y usa los siguientes comandos para descomprimir los archivos y ensamblar los rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
```

!!!Nota
    `${}` Es donde debes poner los nombres de los archivos.

*Como en el ejemplo de **NVIDIA L4T 32.7.1**, los archivos descargados se almacenan en `/Desktop/L4T_Drivers`, por lo que en la ruta '/Desktop/L4T_Drivers' abrimos la Terminal y ejecutamos el siguiente comando.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
```

### Paso 3. Selecciona los Drivers adecuados

Después de descomprimir el paquete, también debemos instalar el controlador para asegurarnos de que cada componente de la placa esté funcionando. Primero debemos elegir los archivos del controlador en el host de Ubuntu de acuerdo con la Carrier Board y el módulo.

<table align="center">
  <tbody><tr>
      <th align="center">Carrier Board</th>
      <th align="center">Módulo Jetson</th>  
      <th align="center">Versión de JetPack</th>
      <th align="center">Versión de L4T</th>
      <th align="center">Dirección de descarga</th>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nano.zip">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nx.zip">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_tx2nx.zip">Descarga</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A205/205nx_jp5.0.2.zip">Descarga</a></td>
    </tr>
  </tbody>
</table>

¡¡¡Nota!!!
  Hay dos controladores JetPack 5.0.2 para la Carrier Board A205 incluidos en los archivos descargados. Ambos funcionan bien, excepto que uno de ellos soporta **cámara IMX-219** y el otro **cámara IMX-477**.

### Paso 4. Descomprime el Driver en el archivo

Puedes arrastrar el archivo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

O podemos ejecutar el siguiente comando para reemplazar los archivos:

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

¡¡¡Nota!!!
    `${}` Se utiliza para variables de entorno.
 `${Drive package kernel path}` indica la ruta completa a la carpeta de imágenes del kernel
 `${Officially unpacked Linux_for_Tegra path}` indica la ruta completa a la carpeta Linux_for_Tegra proporcionada oficialmente después de extraer el paquete zip L4T.

### Paso 5. Flashea el sistema en la Carrier Board

En el ejemplo usamos el módulo NVIDIA Jetson Nano y podemos flashear directamente el sistema en la placa ejecutando el siguiente comando:

```sh
sudo ./apply_binaries.sh
sudo ./flash.sh ${BOARD} mmcblk0p1
```

¡¡¡Nota!!!
  `${BOARD}` es el uso de variables de entorno, la información debe ser el nombre del módulo en tu Carrier Board. Puedes consultar <a href="https://files.seeedstudio.com/wiki/A20X/6.png" target="_blank"><span>aquí</span></a> para obtener información completa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    El flasheo de L4T tarda unos 10 minutos, o más en una computadora host lenta.

Después del flasheo puedes utilizar tu Carrier Board.

## Solución de problemas

### Solución de problemas durante instalación con NVIDIA SDK Manager

Hay muchas causas de diversos errores de instalación. A continuación se muestra una lista de verificación de problemas de instalación comunes, que pueden ayudarte identificar y solucionar errores:

1. Revisa la tabla de resumen para identificar qué componente falló.

    a. Expande el grupo con el estado "Error".

    b. Cuando encuentres el componente fallido, haz click en el ícono de detalles a la derecha de Error de instalación para ser redirigido a la pestaña Terminal, que mostrará el error exacto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Si el error está relacionado con un problema del entorno, como un repositorio apt roto o un requisito previo faltante, intenta solucionarlo manualmente y luego haz click en el botón "Retry failed items".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Reintentar la instalación también está disponible de otras dos formas:

    a. Desde **Actualizar a eMMC con SDK Manager: Paso 3**, usa el botón Reparar/Desinstalar para acceder a la página NVIDIA SDK Manager. Si es necesario, expande el SDK que tiene el estado "Roto" y luego haz click en Reparar para la parte correspondiente (Host o Destino).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. En **Actualizar a eMMC con SDK Manager - Paso 3**, selecciona el SDK requerido y ejecuta la instalación nuevamente.

5. Finalmente, intenta desinstalar y reinstalar el SDK correspondiente.

### Solución de problemas durante instalación usando línea de comandos

El método de instalación de la línea de comandos es relativamente simple y, a menudo, es propenso a errores en escenarios donde se utiliza el modo de recuperación forzada.

Si encuentras el error que se muestra a continuación en **Actualizar a eMMC con la línea de comandos - Paso 2**, probablemente no lograste que la placa entrara en modo de recuperación forzada. Presta especial atención, no ingreses al modo de recuperación forzada con la Carrier Board encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes ingresar al sistema en **Actualizar a eMMC con la línea de comandos - Paso 3** y estás atascado en la línea de comandos de la pantalla de inicio, probablemente no saliste del modo de recuperación forzado. Del mismo modo, no es válido que desconectes el puente para salir del modo de recuperación forzada mientras la placa portadora está encendida; todo esto debe hacerse mientras estás apagado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

¡¡¡Nota!!!
    Si se necesita más espacio de almacenamiento, podemos usar una tarjeta SD para ampliar la capacidad o grabar el sistema en una tarjeta SD. Puedes consultar nuestra solución recomendada [Sistema Flash en una tarjeta SD](https://wiki.seeedstudio.com/J101_Enable_SD_Card/)

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
