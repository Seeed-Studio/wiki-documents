---
description: Flashear Jetpack en una A205E Mini PC
title: A205E Mini PC
tags:
  - Mini PC Jetpack Flash
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_A205E_Flash_System
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

# Flashear sistema operativo JetPack a la Carrier Board A205E o A205E Mini PC (Soporte NVIDIA Jetson Xavier NX)

En esta wiki, te mostraremos cómo flashear Jetpack OS a la Carrier Board A205E o a la mini PC A205E que admita el módulo NVIDIA Jetson Xavier. Aquí te presentaremos dos formas de flashear el sistema y, debido a que la Carrier Board A205 es diferente a la Carrier Board oficial NVIDIA Jetson, también debes instalar el controlador correspondiente.

<div align="center">
  <table>
    <tbody><tr>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank"><span>Carrier Baord A205E</span></a>
        </td>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank"><span>A205E Mini PC</span></a>
        </td></tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/5/_/5_7_1.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/1/_/1_9_2.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>

## Primeros pasos

Podemos hacer esto fácilmente usando la **Terminal Linux**. Para las personas que tienen una base de conocimientos de Linux, recomendamos encarecidamente utilizar únicamente la Terminal de Linux.

- [Flasheo de JetPack OS mediante la terminal de Linux](#flashing-jetpack-os-via-command-line)

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta NVIDIA</span></a>
- Sistema operativo Ubuntu 18.04 en la computadora host

¡¡¡Nota!!!
	En este tutorial, usaremos el sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación de Hardware (Modo de recuperación forzada)

* Computadora host con sistema operativo Ubuntu 18.04
* un cable de datos USB Tipo-C
* Adaptador de corriente para Carrier Board A205E o Mini PC A205E

Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en el modo de recuperación forzada.

**Paso 1.** Ubica el puerto USB tipo C, el botón de encendido, el botón de reinicio y el botón de recuperación en el costado de la Carrier Board A205E o la mini PC A205E.

<div align="center">
  <table>
    <tbody><tr>
        <td align="center">Carrier Board A205E
        </td><td align="center">A205E Mini PC
        </td></tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/n/antenna_dc_jack_io_controller_20_pin_1_.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/2/_/2_8_3.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>


Para poner la A205E en modo de recuperación forzada, asegúrate de que la A205E esté apagada.

**Paso 2.** Conecta el cable USB tipo C con el puerto de programación tipo C en la **Carrier Board A205E o mini PC A205E** y la computadora host.

**Paso 3.** Conecta el adaptador de corriente para la **Carrier Board A205E o la mini PC A205E**.

**Paso 4.** **Presiona y manten presionada** la **tecla de recuperación** primero, y luego **Manten presionada** la **tecla de encendido**, espera a que se encienda el LED, luego **Suelta** la **tecla de encendido**, ahora **Espera 2 segundos** y **Suelta** la **tecla de recuperación**.

**O**

Si la **Carrier Board A205E o Mini PC A205E** está en el estado **Encendido**, **Manten presionada** la **Tecla de reinicio** y la **Tecla de recuperación**, **Suelts** la **Tecla de reinicio** durante **2 segundos**, luego **Suelta** la **Llave de recuperación**.

**Paso 5.** En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse para abrir una Terminal e ingresar el comando `lsusb`. Cuando el contenido devuelto tiene "NVidia Corp.", significa que tu Carrier Board A205 está en modo de recuperación forzada y puedes continuar con las operaciones posteriores.

La identificación depende de los módulos en la Carrier Board y la información se muestra a continuación:

- Para la Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>


## Flasheo del sistema operativo JetPack a través de la línea de comandos

Este es el flujo de trabajo para usar el script de línea de comandos para flashear Jetpack OS:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>


### Paso 1. Descarga el paquete de controladores NVIDIA Linux adecuado

En la **PC host Linux**, debemos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primero debemos comprobar si la versión de Jetson Linux es compatible. En este caso estamos usando NVIDIA L4T 35.1.0 (equivalente a Jetpack 5.0.2)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>


Una vez que encuentres la versión adecuada, haz click para ir a la página descargada. Busca y haz click en "Paquete de controladores L4T (BSP)" y "Sistema de archivos raíz de muestra" para descargar los archivos del controlador. Los nombres de los archivos son `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>


Como ejemplo, elegimos la versión NVIDIA L4T 35.1.0. Los nombres de los archivos deben ser:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### Paso 2. Descomprime los archivos del paquete y ensambla los Rootfs mediante la línea de comandos

En la PC host con Linux, abre una ``Terminal`` y usa los siguientes comandos para descomprimir los archivos y ensamblar los rootfs:

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

¡¡¡Nota!!!
    `${XXX_XX_XXX}` Es donde debes colocar los nombres de los archivos.

* Por ejemplo, los archivos descargados se almacenan en `~/Downloads/`, abre la ``Terminal`` en tu computadora host de Ubuntu e ingresa los siguientes comandos:

```bash
cd ~/Downlands/
mkdir Jetpack_502
mv Jetson_Linux_R35.1.0_aarch64.tbz2 Jetpack_502/
mv Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2 Jetpack_502/
cd Jetpack_501/
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

### Paso 3. Flashea el sistema a la placa

En el ejemplo usamos el módulo NVIDIA Jetson Xavier NX y podemos flashear directamente el sistema en la placa ejecutando el siguiente comando:

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>


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
