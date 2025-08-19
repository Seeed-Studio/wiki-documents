---
description: Este tutorial mostrará cómo compilar, configurar y grabar balenaOS para R1000.
title: Compilar balenaOS para reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/build_balenaOS_for_reComputer_r1000
last_update:
  date: 02/15/2025
  author: Erick González
---

## ¿Qué es balena?

[balena](https://www.balena.io/) es una plataforma de Internet de las Cosas (IoT) diseñada para ayudar a los desarrolladores a crear, desplegar y administrar aplicaciones IoT en una flota de dispositivos. Admite una gran variedad de arquitecturas e incluye funciones para el despliegue de aplicaciones en contenedores, haciendo posible actualizar fácilmente tu software IoT y el HostOS, corregir errores e introducir nuevas características en tus aplicaciones IoT. balena proporciona una forma unificada de enviar actualizaciones de código, gestionar configuraciones de dispositivos y asegurar un funcionamiento confiable y seguro en el campo, sin importar la ubicación o las condiciones de red.

Este tutorial mostrará cómo compilar, configurar y grabar balenaOS para R1000.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Comenzando

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software como se describe a continuación.

### Preparación de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      </tr>
    </table>
</div>

### Software

* Entorno [yocto](https://docs.yoctoproject.org/4.0.20/brief-yoctoprojectqs/index.html)
* Entorno [docker](https://www.docker.com/)
* [balenaEtcher](https://etcher.balena.io/) para flashear la memoria CM4

### Configuración de Hardware

**Paso 1**: Ajusta el interruptor lateral del R1000 a modo "boot" y enciende el dispositivo.

<div class="table-center">

| Posición del Interruptor                                         | Modo         | Descripción       | nRPI-BOOT |
|-------------------------------------------------------------------|--------------|-------------------|-----------|
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal  | Arranca desde eMMC | Bajo      |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo flash   | Arranca desde USB   | Alto      |

</div>

**Paso 2**: Usa un cable USB Tipo-C para conectar el reComputer R1000 a tu computadora.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### Compilar R1000-balenaOS

**Paso 1**: Descarga las siguientes librerías y asegúrate de que tu entorno actual admita la compilación del proyecto yocto
```shell
sudo apt install gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 python3-subunit zstd liblz4-tool file locales libacl1 jq nodejs npm
sudo locale-gen en_US.UTF-8
```

**Paso 2**: Ingresa los siguientes comandos para descargar y configurar `balena-seeed-cm4`, y finalmente compilar el proyecto yocto.
```shell
git clone https://github.com/Seeed-Studio/balena-seeed-cm4.git
cd balena-seeed-cm4
git submodule update --init --recursive
./balena-yocto-scripts/build/barys --dry-run
source layers/poky/oe-init-build-env
MACHINE=seeed-recomputer-r100x bitbake balena-image
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/0_build_balenaOS.gif" alt="pir" width="700" height="auto" /></div>

**Paso 3**: La imagen compilada se llama `balena-image-seeed-recomputer-r100x.balenaos-img` y se encuentra en el directorio `build/tmp/deploy/images/seeed-recomputer-r100x`. En este punto, la compilación ha finalizado; el siguiente paso es configurarla.

:::note
La versión por defecto de balenaOS en este repositorio es 5.3.27+rev1. La información de versión se encuentra en el archivo `VERSION`. Si necesitas compilar otra versión de balenaOS, modifica el contenido en el archivo `VERSION`.
:::

### Configurar R1000-balenaOS

**Paso 1**: Entra al directorio donde se encuentra la imagen compilada, luego abre la línea de comandos, ejecuta `balena login` e inicia sesión en `balena Cloud`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/1_login_balena.gif" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Crea una nueva flota (Fleet), seleccionando el tipo `Raspberry Pi 4 (using 64bit os)`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2.1new_fleet.png" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Ejecuta el comando para preload de la imagen:
```shell
balena preload ./balena-image-seeed-recomputer-r100x.balenaos-img --fleet [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2_preload_image.gif" alt="pir" width="700" height="auto" /></div>

**Paso 4**: Registra el nuevo dispositivo con la flota y genera un ID de dispositivo:
```shell
balena device register [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/3_regester_dev.gif" alt="pir" width="700" height="auto" /></div>

**Paso 5**: Genera el archivo de configuración.
```shell
balena config generate --device [uuid] --version 3.0.15+atsss --dev -o config.json
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/4_generate_config.gif" alt="pir" width="700" height="auto" /></div>

**Paso 6**: Carga el archivo de configuración.
```shell
balena os configure balena-image-seeed-recomputer-r100x.balenaos-img --config config.json  --device [uuid] --version 3.0.15+atsss --dev
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/5_config_image.gif" alt="pir" width="700" height="auto" /></div>

**Paso 7**: Copia el archivo de imagen final. Esta imagen puede grabarse en reComputer R1000.
```shell
cp balena-image-seeed-recomputer-r100x.balenaos-img recomputer_balenaos-dev.img
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/6_rename.gif" alt="pir" width="700" height="auto" /></div>

### Pasos para Grabar balena OS

**Paso 1**: Abre el software [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe). El sistema mostrará un disco nuevo.

**Paso 2**: Abre la herramienta de flasheo [balenaEtcher](https://etcher.balena.io/), selecciona el archivo de imagen de balena, luego la unidad de destino y, finalmente, haz clic en Burn.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Tras finalizar la grabación, reinicia el R1000. Después de un tiempo, verás el nuevo dispositivo en línea en balena Cloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/7_online.png" alt="pir" width="700" height="auto" /></div>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecer varios tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos canales de comunicación para distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
