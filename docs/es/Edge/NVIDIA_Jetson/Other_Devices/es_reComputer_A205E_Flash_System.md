---
description: Flash Jetpack en A205E Mini PC
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

# Flash del SO JetPack a la Placa Portadora A205E o A205E Mini PC (Compatible con NVIDIA Jetson Xavier NX)

En este wiki, te mostraremos cómo flashear el SO Jetpack a la Placa Portadora A205E o A205E Mini PC que es compatible con el módulo NVIDIA Jetson Xavier. Aquí te presentaremos dos formas de flashear el sistema, y debido a que la Placa Portadora A205 es diferente a la Placa Portadora oficial de NVIDIA Jetson, el controlador correspondiente también debe ser instalado.

<div align="center">
  <table>
    <tbody><tr>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank"><span>Placa Portadora A205E</span></a></td>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank"><span>A205E Mini PC</span></a></td>
      </tr>
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

## Primeros Pasos

podemos hacer esto fácilmente usando la **Terminal de Linux**. Para personas que tienen conocimientos básicos de Linux, recomendamos altamente usar solo la Terminal de Linux.

- [Flasheo del SO JetPack vía terminal de Linux](#flashing-jetpack-os-via-command-line)

### Preparación del Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta de NVIDIA</span></a>
- SO Ubuntu 18.04 en la Computadora Host

!!!note
	En este tutorial, usaremos un sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación del Hardware (Modo de Recuperación Forzada)

* Computadora host con SO Ubuntu 18.04
* un Cable de Datos USB Type-C
* Adaptador de corriente para la Placa Portadora A205E o A205E Mini PC

Antes de que podamos proceder con los pasos de instalación, necesitamos asegurarnos de que la placa esté en modo de recuperación forzada

**Paso 1.** Por favor localiza el puerto USB Type-C, el Botón de Encendido, Botón de Reset y Botón de Recuperación en el lateral de la Placa Portadora A205E o A205E Mini PC.

<div align="center">
  <table>
    <tbody><tr>
        <td align="center">Placa Portadora A205E</td>
        <td align="center">A205E Mini PC</td>
      </tr>
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


PARA poner el A205E en Modo de Recuperación Forzada, por favor asegúrate de que el A205E esté apagado.

**Paso 2.** Conecta el cable USB Type-C con el puerto de programación Type-C en la **Placa Portadora A205E o A205E Mini PC** y la computadora host.

**Paso 3.** Conecta el adaptador de corriente para la **Placa Portadora A205E o A205E Mini PC**.

**Paso 4.** **Presiona y Mantén** la **Tecla de Recuperación** primero, y luego **Presiona y Mantén** la **Tecla de Encendido**, espera a que el LED se encienda, luego **Suelta** la **Tecla de Encendido**, ahora **Espera 2 segundos** y **Suelta** la **Tecla de Recuperación**. 

**O**

Si la **Placa Portadora A205E o A205E Mini PC** está en estado **Encendido**, **Presiona y Mantén** la **Tecla de Reset** y la **Tecla de Recuperación**, **Suelta** la **Tecla de Reset** por **2 Segundos**, luego **Suelta** la **Tecla de Recuperación**. 

**Paso 5.** En la pantalla de la PC host Linux, podemos hacer clic derecho con el mouse para abrir una Terminal e ingresar el comando `lsusb`. Cuando el contenido devuelto tenga `NVidia Corp.` en él, significa que tu Placa Portadora A205 está en modo de recuperación forzada y puedes proceder con las operaciones subsecuentes.

El ID depende de los módulos en la placa portadora y la información se muestra como sigue:

- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## Flasheo del SO JetPack vía Línea de Comandos

Aquí está el flujo de trabajo para usar el script de línea de comandos para flashear el SO Jetpack:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>


### Paso 1. Descargar el Paquete de Controladores Linux de NVIDIA apropiado

En la **PC host Linux**, necesitamos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Archivo de Jetson Linux</span></a>. Primero debemos verificar si la versión de Jetson Linux es compatible. En este caso estamos usando NVIDIA L4T 35.1.0 (equivalente a Jetpack 5.0.2)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>


Una vez que encuentres la versión apropiada, haz clic para ir a la página de descarga. Encuentra y haz clic en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos de controladores. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>


Como ejemplo, elegimos la versión NVIDIA L4T 35.1.0. Los nombres de los archivos deberían ser:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### Paso 2. Descomprimir Archivos de Paquete y Ensamblar el Rootfs vía Línea de Comandos

En la PC Host Linux, por favor abre una ``Terminal`` y usa la línea de comandos a continuación para descomprimir los archivos y ensamblar el rootfs:

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

!!!Nota
    `${XXX_XX_XXX}` es donde pones los nombres de los archivos.

* Por ejemplo, los archivos descargados se almacenan en `~/Downloads/`, por favor abre la ``Terminal`` en tu Computadora Host Ubuntu e ingresa los siguientes comandos:

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

### Paso 3. Flashear el Sistema a la Placa

En el ejemplo usamos el módulo NVIDIA Jetson Xavier NX y podemos flashear directamente el sistema en la placa ejecutando el siguiente comando:

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>


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
