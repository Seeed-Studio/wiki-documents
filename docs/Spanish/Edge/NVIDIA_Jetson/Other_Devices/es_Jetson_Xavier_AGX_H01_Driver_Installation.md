---
description: Flasheo de Jetpack en una Jetson Xavier AGX H01
title: Jetson Xavier AGX H01
tags:
   - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jetson_Xavier_AGX_H01_Driver_Installation
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

# Instalación del controlador del kit Jetson Xavier AGX H01

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/first_1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html"><strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>


Esta wiki te mostrará cómo instalar el controlador en el kit Jetson Xavier AGX H01. Hay formas de lograrlo mediante uso de servicios en la nube.

## Instala Jetson Xavier AGX H01 mediante la línea de comandos

Se trata de la instalación mediante líneas de comandos, con pasos estandarizados.

### Material requerido

- PC host con Ubuntu OS
- Jetson Xavier AGX H01
- Cable de transmisión de datos Tipo-C

### Instalación de Drivers

Antes de instalar el controlador, es necesario configurar la placa en el modo de recuperación forzada.

#### Modo de recuperación forzada

Hay un botón de recuperación en la placa, que se encuentra en medio de tres botones. Manten presionado el botón de recuperación y luego enciéndela, lo que ingresará al modo de recuperación forzada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver1.png" /></div>


Conecta la Jetson Xavier AGX H01 con la PC host de Ubuntu mediante un cable de transmisión de datos Tipo-C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver.png" /></div>


#### Drivers requeridos

Proporcionamos diferentes versiones de controladores para diferentes versiones del sistema Jetpack, para tu comodidad durante la instalación.

<table>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Driver requerido</th>
      <th>Jetson Linux Archive</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.4</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_4.4.zip">Haz click para descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r32.4.3">NVIDIA L4T 32.4.3</a></td>
    </tr>
    <tr>
      <td>4.6.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip">Haz click para descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r3271">NVIDIA L4T 32.7.1</a></td>
    </tr>
    <tr>
      <td>5.0.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.1.zip">Haz click para descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3411">NVIDIA L4T 34.1.1</a></td>
    </tr>
    <tr>
      <td>5.0.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.2.zip">Haz click para descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351">NVIDIA L4T 35.1</a></td>
    </tr>
    <tr>
      <td>5.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.rar" target="_blank" rel="noopener noreferrer">Haz click para descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3521" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.2.1</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.1.zip" target="_blank" rel="noopener noreferrer">Haz click para descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.3.1</a></td>
    </tr>
    <tr>
      <td>5.1.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.2.zip" target="_blank" rel="noopener noreferrer">Haz click para descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3541" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.4.1</a></td>
    </tr>
  </tbody>
</table>

#### Primeros pasos

El ejemplo mostrado en esta wiki utiliza **NVIDIA L4T 32.7.1** para instalar **Jetpack 4.6.1** en la Jetson AGX H01.

- **Paso 1**. [Descargar](https://developer.nvidia.com/embedded/linux-tegra-r3271) los controladores en la PC host de NVIDIA. Los controladores 32.7.1 necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver4.png" /></div>


- **Paso 2**. [Descargar](https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip) los archivos de instalación adicionales necesarios <H01_Drivers> en la PC host.

Mueve los archivos descargados en el **Paso 1** a la misma carpeta con <H01_Drivers>. Ahora verás tres archivos descomprimidos en la misma carpeta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01drivera.png" /></div>


- **Paso 3**. Descomprimir el archivo de <AGX_H01_Drivers.zip>.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver1b.png" /></div>


- **Paso 4**. Abre la terminal en la carpeta y descomprime el resto de los archivos. ejecuta los siguientes comandos:

```
$ tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
$ cd Linux_for_tegra/rootfs
$ sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
$ cd ..
$ sudo  ./apply_binaries.sh
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver5.png" /></div>


¡¡¡Nota!!!
    Si descargas archivos en otro lugar, asegúrate de agregar la ruta a los archivos. Como ejemplo aquí es "/Desktop/AGX/". Si abres directamente la terminal en el archivo, la ruta se agregará automáticamente.

Las líneas de comando deberían lucir de la siguiente manera:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx0.png" /></div>


- **Paso 5**. Retrocede, copia y pega el archivo desde el archivo <H01_Driver> cargado en el archivo descomprimido <Jetson_Linux_R32.6.1_aarch64.tbz2>.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver6.png" /></div>


A continuación se muestran los comandos que deberías utilizar:

```
$ cd ..
$ cp -a -f H01_Driver/Linux_for_Tegra/kernel Linux_for_Tegra/
$ cd Linux_for_Tegra/
$ sudo ./flash.sh jetson-xavier mmcblk0p1
```

El proceso de flasheo se ejecutará y el progreso lucirá de la siguiente manera:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx2.png" /></div>


El resultado final debería lucir de la siguiente forma:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx3.png" /></div>


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


