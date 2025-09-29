---
description: Flashear Jetpack en A203E Mini PC
title: A203E Mini PC
tags:
  - Mini PC Jetpack Flash
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_A203E_Flash_System
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

# Flashear OS JetPack en A203E Mini PC (NVIDIA Jetson Xavier NX)

En esta wiki, te mostraremos cómo flashear el OS Jetpack en la A203E Mini PC que soporta el módulo NVIDIA Jetson Xavier NX. Aquí te presentaremos dos formas de flashear el sistema, y debido a que la A203E Mini PC es diferente de la Placa Portadora oficial de NVIDIA Jetson, el controlador correspondiente también debe ser instalado.

<div align="center">
  <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank" rel="noopener"><img width={600} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/2/a203_mini_pc_-1.png" alt /></a></p>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Comenzando

podemos hacer esto fácilmente usando la **Terminal de Linux**. Para personas que tienen conocimientos base de Linux, recomendamos altamente usar solo la Terminal de Linux.

- [Flasheando OS JetPack vía terminal de Linux](#flasheando-jetpack-os-via-linea-de-comandos)

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta de NVIDIA</span></a>
- OS Ubuntu 18.04 en la Computadora Host

!!!note
 En este tutorial, usaremos un sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación de Hardware (Modo de Recuperación Forzada)

- Computadora host con OS Ubuntu 18.04
- un Cable de Datos Micro-USB
- Adaptador de energía para A203E

Antes de que podamos continuar con los pasos de instalación, necesitamos asegurarnos de que la placa esté en modo de recuperación forzada

**Paso 1.** Por favor localiza el puerto Micro-USB, el botón de encendido y reinicio en el lado de la A203E primero.

Para poner la A203E en Modo de Recuperación Forzada, por favor asegúrate de que la A203E esté apagada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A203E/a203E_interface.png" /></div>

**Paso 2.** Conecta la A203E y la computadora host con el cable Micro-USB.

**Paso 3.** Conecta el adaptador de energía para A203E.

**Paso 4.** **Presiona y Mantén** la **Tecla de Reinicio** primero, y luego **Presiona y Mantén** la **Tecla de Encendido**, espera a que el LED se encienda, luego **Suelta** la **Tecla de Encendido**, ahora **Espera 2 segundos** y **Suelta** la **Tecla de Reinicio**.

**Paso 5.** En la pantalla de la PC host Linux, podemos hacer clic derecho con el mouse para abrir una Terminal e ingresar el comando `lsusb`. Cuando el contenido devuelto tenga `NVidia Corp.` en él, significa que tu Placa Portadora A203 está en modo de recuperación forzada y puedes proceder a las operaciones subsecuentes.

El ID depende de los módulos en la placa portadora y la información se muestra como sigue:

- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## Flasheando OS JetPack vía Línea de Comandos

Aquí está el flujo de trabajo de usar el script de Línea de Comandos para flashear el OS Jetpack:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Paso 1. Descargar el Paquete de Controladores de Linux de NVIDIA apropiado

En la **PC host Linux**, necesitamos abrir un navegador e ir al <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Archivo de Jetson Linux</span></a>. Primero debemos verificar si la versión de Jetson Linux es soportada. En este caso estamos usando el NVIDIA L4T 35.1.0 (equivalente de Jetpack 5.0.2)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

Una vez que encuentres la versión apropiada, haz clic para ir a la página de descarga. Encuentra y haz clic en "L4T Driver Package (BSP)" y "Sample Root Filesystem" para descargar los archivos del controlador. Los nombres de los archivos son como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` y `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

Como ejemplo, elegimos la versión NVIDIA L4T 35.1.0, Los nombres de los archivos deberían ser:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### Paso 2. Descomprimir Archivos de Paquete y Ensamblar el Rootfs vía Línea de Comandos

En la PC Host Linux, Por favor abre una ``Terminal`` y usa la línea de comandos de abajo para descomprimir los archivos y ensamblar el rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${XXX_XX_XXX}` es donde pones los nombres de los archivos.

- Por ejemplo, los archivos descargados están almacenados en `~/Downloads/`, por favor abre la ``Terminal`` en tu Computadora Host Ubuntu e ingresa los siguientes comandos:

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

### Paso 3. Descargar y aplicar el controlador

En la PC Host Linux, Por favor descarga el controlador que hemos preparado haciendo clic en <a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">*Descarga del controlador A203E*</a>

Para aplicar el controlador por favor ingresa el siguiente comando en la ``Terminal`` como continuación del paso de muestra previo donde el archivo del controlador ha sido descargado y guardado en la carpeta **~/Downloads** y también creamos la carpeta **Jetpack_501** dentro de la carpeta **~/Downloads** para asegurarnos de que solo tenemos los archivos de sistema más recientes de **Jetpack 5.0.2** en la carpeta **Linux_for_Tegra**:

```
cd ~/Downloads/
unzip 203_jp5.0.2.zip
cp -r203_jp5.0.2/203_jp5.0.2/Linux_for_Tegra Jetpack_501/Linux_for_Tegra
```

### Paso 4. Flashear el Sistema a la Placa

En el ejemplo usamos el módulo NVIDIA Jetson Xavier NX y podemos flashear directamente el sistema en la placa ejecutando el siguiente comando:

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
