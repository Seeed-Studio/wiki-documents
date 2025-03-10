---
description: Flashear Jetpack en una A203E Mini PC
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

# Flashear JetPack OS a la A203E Mini PC (NVIDIA Jetson Xavier NX)

En esta wiki, te mostraremos cómo flashear Jetpack OS a la Mini PC A203E que admite el módulo NVIDIA Jetson Xavier NX. Aquí te presentaremos dos formas de flashear el sistema y, debido a que la Mini PC A203E es diferente de la Carrier Board oficial NVIDIA Jetson, también debes instalar el controlador correspondiente.

<div align="center">
  <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank" rel="noopener"><img width={600} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/2/a203_mini_pc_-1.png" alt /></a></p>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>

## Primeros pasos

Podemos hacer esto fácilmente usando la **Terminal Linux**. Para las personas que tienen una base de conocimientos de Linux, recomendamos encarecidamente utilizar únicamente la Terminal de Linux.

- [Flasheo del sistema operativo JetPack a través de la terminal Linux](#flashing-jetpack-os-via-command-line)

### Preparación de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Cuenta NVIDIA</span></a>
- Sistema operativo Ubuntu 18.04 en la computadora host

¡¡¡Nota!!!
	En este tutorial, usaremos el sistema basado en Ubuntu 18.04 LTS para completar la instalación.

### Preparación de Hardware (Modo de recuperación forzada ¿)

* Computadora host con sistema operativo Ubuntu 18.04
* Un cable de datos micro-USB
* Adaptador de alimentación para la A203E

Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en el modo de recuperación forzada.

**Paso 1.** Primero ubica el puerto Micro-USB, el botón de encendido y reinicio en el costado de la A203E.

Para poner la A203E en modo de recuperación forzada, asegúrate de que la A203E esté apagada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A203E/a203E_interface.png" /></div>

**Paso 2.** Conecta la A203E y la computadora host con el cable Micro-USB.

**Paso 3.** Conecta el adaptador de corriente para la A203E.

**Paso 4.** **Presiona y manten presionada** la **tecla Restablecer** primero, y luego **Manten presionada** la **tecla de encendido**, espera a que se encienda el LED, luego **Suelta** la **tecla de encendido**, ahora **Espera 2 segundos** y **Suelta** la **tecla Restablecer**.



**Paso 5.** En la pantalla de la PC host de Linux, podemos hacer click con el botón derecho del mouse para abrir una Terminal e ingresar el comando `lsusb`. Cuando el contenido devuelto tiene "NVidia Corp.", significa que tu Carrier Board A203 está en modo de recuperación forzada y puedes continuar con las operaciones posteriores.

La identificación depende de los módulos en la Carrier Board y la información se muestra a continuación:

- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>


## Flasheando JetPack OS mediante la línea de comandos

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

En la PC host con Linux, abre una ``Terminal`` y usa el siguiente comando para descomprimir los archivos y ensamblar los rootfs:

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

¡¡¡Nota!!!
    `${XXX_XX_XXX}` Aquí deber colocar el nombre de los archivos.

* Por ejemplo, los archivos descargados se almacenan en `~/Descargas/`, abre la ``Terminal`` en tu computadora host de Ubuntu e ingresa los siguientes comandos:

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

### Paso 3. Descarga y aplica el controlador

En la PC Linx Host, descarga el controlador que hemos preparado haciendo click en <a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">*A203E driver Download*</a>

Para aplicar el controlador, ingresa el siguiente comando en ``Terminal`` como continuación del paso de muestra anterior donde el archivo del controlador se descargó y guardó en la carpeta **~/Descargas** y también creamos la carpeta **Jetpack_501** dentro de la carpeta **~/Descargas** para asegurarnos de que solo tengamos los últimos archivos del sistema **Jetpack 5.0.2** en la carpeta **Linux_for_Tegra**:

```
cd ~/Downloads/
unzip 203_jp5.0.2.zip
cp -r203_jp5.0.2/203_jp5.0.2/Linux_for_Tegra Jetpack_501/Linux_for_Tegra
```

### Paso 4. Flashea el sistema a la placa

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
