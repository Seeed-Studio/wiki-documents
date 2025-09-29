---
description: Este tutorial te mostrará cómo compilar, configurar y grabar balenaOS para R1000.
title: Construir balenaOS para reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/build_balenaOS_for_reComputer_r1000
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## ¿Qué es balena?

[balena](https://www.balena.io/) es una plataforma de Internet de las Cosas (IoT) diseñada para ayudar a los desarrolladores a construir, desplegar y gestionar aplicaciones IoT a través de una flota de dispositivos. Soporta una amplia gama de arquitecturas de dispositivos e incluye características para el despliegue de aplicaciones en contenedores, haciendo posible actualizar fácilmente tu software IoT y HostOS, corregir errores e introducir nuevas características en tus aplicaciones IoT. balena proporciona una forma unificada de enviar actualizaciones de código, gestionar configuraciones de dispositivos y asegurar que los dispositivos funcionen de manera confiable y segura en el campo, independientemente de su ubicación o condiciones de red.

Este tutorial te mostrará cómo compilar, configurar y grabar balenaOS para R1000.
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Comenzando

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

- Entorno [yocto](https://docs.yoctoproject.org/4.0.20/brief-yoctoprojectqs/index.html)
- Entorno [docker](https://www.docker.com/)
- [balenaEtcher](https://etcher.balena.io/) para flashear la memoria del CM4.

### Configuración de Hardware

**Paso 1**: Necesitas configurar el interruptor en el lateral del R1000 al modo de arranque, luego encender el dispositivo

<div class="table-center">

| Posición del Interruptor                                              | Modo        | Descripción    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Arrancar desde eMMC | Bajo       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo flash  | Arrancar desde USB  | Alto      |

</div>

**Paso 2**: Por favor, usa un cable USB Type-C para conectar el reComputer R1000 a tu computadora.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### Compilar R1000-balenaOS

**Paso 1**: Descarga las siguientes librerías y asegúrate de que el entorno actual soporte la compilación del proyecto yocto

```shell
 sudo apt install gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 python3-subunit zstd liblz4-tool file locales libacl1 jq nodejs npm
 sudo locale-gen en_US.UTF-8
```

**Paso 2**: Ingresa las siguientes instrucciones para descargar y configurar `balena-seeed-cm4`, y finalmente compilar el proyecto yocto.

```shell
  git clone https://github.com/Seeed-Studio/balena-seeed-cm4.git
  cd balena-seeed-cm4
  git submodule update --init --recursive
  ./balena-yocto-scripts/build/barys --dry-run
  source layers/poky/oe-init-build-env
  MACHINE=seeed-recomputer-r100x bitbake balena-image
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/0_build_balenaOS.gif" alt="pir" width="700" height="auto" /></div>

**Paso 3**: La imagen compilada se llama `balena-image-seeed-recomputer-r100x.balenaos-img` y está en el directorio `build/tmp/deploy/images/seeed-recomputer-r100x`. En este punto, la compilación de la imagen está completa, el siguiente paso es configurarla.

:::note
La versión predeterminada de balenaOS de este repositorio es 5.3.27+rev1. La información de la versión se encuentra en el archivo `VERSION`. Si necesitas compilar otras versiones de balenaOS, por favor cambia el contenido en el archivo `VERSION`.
:::

### Configurar R1000-balenaOS

**Paso 1**: Ingresa al directorio donde se encuentra la imagen compilada, luego ingresa a la interfaz de línea de comandos, ingresa `balena login`, e inicia sesión en `balena Cloud`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/1_login_balena.gif" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Crea una nueva `Fleet`, selecciona el tipo como `Raspberry Pi 4 (using 64bit os)`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2.1new_fleet.png" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Ingresa el siguiente comando para precargar la imagen

```shell
  balena preload ./balena-image-seeed-recomputer-r100x.balenaos-img --fleet [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2_preload_image.gif" alt="pir" width="700" height="auto" /></div>

**Paso 4**: Registrar el nuevo dispositivo con Fleet y generar un ID de dispositivo

```shell
balena device register [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/3_regester_dev.gif" alt="pir" width="700" height="auto" /></div>

**Paso 5**: Generar archivo de configuración.

```shell
balena config generate --device [uuid] --version 3.0.15+atsss --dev -o config.json
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/4_generate_config.gif" alt="pir" width="700" height="auto" /></div>

**Paso 6**: Cargar el archivo de configuración.

```shell
balena os configure balena-image-seeed-recomputer-r100x.balenaos-img --config config.json  --device [uuid] --version 3.0.15+atsss --dev
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/5_config_image.gif" alt="pir" width="700" height="auto" /></div>

**Paso 7**: Copia el archivo de imagen final, esta imagen puede ser grabada en reComputer R1000

```shell
cp balena-image-seeed-recomputer-r100x.balenaos-img recomputer_balenaos-dev.img
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/6_rename.gif" alt="pir" width="700" height="auto" /></div>

### Pasos para Flashear balena OS

**Paso 1**: Abre el software [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe), y luego el sistema mostrará el nuevo disco

**Paso 2**: Abre la herramienta de flasheo [balenaEtcher](https://etcher.balena.io/), selecciona el archivo de imagen de balena, luego selecciona el disco de destino, y finalmente haz clic en Burn.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Después de que se complete la grabación, reinicia el R1000. Después de un momento, verás el nuevo dispositivo exitosamente en línea en balena Cloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/7_online.png" alt="pir" width="700" height="auto" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
