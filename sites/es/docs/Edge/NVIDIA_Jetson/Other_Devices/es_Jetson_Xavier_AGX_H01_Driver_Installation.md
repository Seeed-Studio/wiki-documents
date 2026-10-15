---
description: Flashear Jetpack en Jetson Xavier AGX H01
title: Jetson Xavier AGX H01
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_Xavier_AGX_H01_Driver_Installation
sku: 110991666
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/Jetson_Xavier_AGX_H01_Driver_Installation/
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

# Instalación de Controladores del Kit Jetson Xavier AGX H01

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/first_1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

Este wiki te mostrará cómo instalar controladores en el Kit Jetson Xavier AGX H01. Hay varias formas de lograr esto.

## Instalar Jetson Xavier AGX H01 con Línea de Comandos

Esta es la instalación a través de líneas de comandos, con pasos estabilizados.

### Materiales Requeridos

- PC Host Ubuntu
- Jetson Xavier AGX H01
- Cable de transmisión de datos Type C

### Instalación de Controladores

Antes de instalar el controlador, es necesario configurar la placa en el Modo de Recuperación Forzada.

#### Modo de Recuperación Forzada

Hay un botón de recuperación en la placa, que está en el medio de tres botones. Mantén presionado el botón de recuperación y luego enciéndela, lo que entrará en el Modo de Recuperación Forzada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver1.png" /></div>

Conecta el Jetson Xavier AGX H01 con el PC host Ubuntu con un cable de transmisión de datos Type-C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver.png" /></div>

#### Controlador Requerido

Proporcionamos diferentes versiones de controladores para diferentes versiones del sistema Jetpack, para tu conveniencia de instalación.

<table>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Controlador Requerido</th>
      <th>Archivo Jetson Linux</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.4</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_4.4.zip">Haz Clic para Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r32.4.3">NVIDIA L4T 32.4.3</a></td>
    </tr>
    <tr>
      <td>4.6.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip">Haz Clic para Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r3271">NVIDIA L4T 32.7.1</a></td>
    </tr>
    <tr>
      <td>5.0.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.1.zip">Haz Clic para Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3411">NVIDIA L4T 34.1.1</a></td>
    </tr>
    <tr>
      <td>5.0.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.2.zip">Haz Clic para Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351">NVIDIA L4T 35.1</a></td>
    </tr>
    <tr>
      <td>5.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.rar" target="_blank" rel="noopener noreferrer">Haz Clic para Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3521" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.2.1</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.1.zip" target="_blank" rel="noopener noreferrer">Haz Clic para Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.3.1</a></td>
    </tr>
    <tr>
      <td>5.1.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.2.zip" target="_blank" rel="noopener noreferrer">Haz Clic para Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3541" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.4.1</a></td>
    </tr>
  </tbody>
</table>

#### Comenzando

El ejemplo aquí está usando **NVIDIA L4T 32.7.1** para instalar **Jetpack 4.6.1** en el Jetson AGX H01.

- **Paso 1**. [Descarga](https://developer.nvidia.com/embedded/linux-tegra-r3271) los controladores en el PC host desde NVIDIA. Los controladores 32.7.1 requeridos se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver4.png" /></div>

- **Paso 2**. [Descarga](https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip) archivos de instalación adicionales requeridos **H01_Drivers** en el PC host.

Mueve los archivos descargados en el **Paso 1** a la misma carpeta con **H01_Drivers**. Ahora verás tres archivos descomprimidos en la misma carpeta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01drivera.png" /></div>

- **Paso 3**. Descomprime el archivo de **AGX_H01_Drivers.zip**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver1b.png" /></div>

- **Paso 4**. Abre la terminal en la carpeta y descomprime el resto de archivos. Ejecuta el comando a continuación:

```
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo  ./apply_binaries.sh
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver5.png" /></div>

!!!Note
    Si descargas archivos en otro lugar, asegúrate de agregar la ruta a los archivos. Como el ejemplo aquí es "/Desktop/AGX/". Si abres directamente la terminal en el archivo, la ruta se agregará automáticamente.

Las líneas de comandos deberían ser como:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx0.png" /></div>

- **Paso 5**. Regresa y copia y pega el archivo del archivo **H01_Driver** descargado al archivo descomprimido **Jetson_Linux_R32.6.1_aarch64.tbz2**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver6.png" /></div>

Aquí están los comandos a continuación:

```
cd ..
cp -a -f H01_Driver/Linux_for_Tegra/kernel Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./flash.sh jetson-xavier mmcblk0p1
```

El flasheo se ejecutará y el progreso es como:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx2.png" /></div>

El resultado final debería ser como:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx3.png" /></div>

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
