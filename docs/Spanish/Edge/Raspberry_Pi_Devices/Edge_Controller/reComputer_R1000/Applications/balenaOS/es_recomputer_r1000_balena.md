---
description: balena es una plataforma de IoT versátil que permite a los desarrolladores construir, desplegar y administrar aplicaciones IoT en diversas arquitecturas de dispositivos usando contenedores para actualizaciones sin complicaciones y una gestión sólida de dispositivos. El reComputer R1000, un controlador edge IoT potenciado por Raspberry Pi CM4, ofrece capacidades de alto rendimiento para tareas exigentes de computación en el borde. Juntos, balena y reComputer R1000 brindan una solución potente y escalable para un despliegue y administración eficientes y seguros de aplicaciones IoT en entornos diversos.
title: reComputer R1000 con balena
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_r1000_balena
last_update:
  date: 02/15/2025
  author: Erick González
---

## ¿Qué es balena?

[balena](https://www.balena.io/) es una plataforma de Internet de las Cosas (IoT) diseñada para ayudar a los desarrolladores a crear, desplegar y administrar aplicaciones IoT en una flota de dispositivos. Admite una amplia gama de arquitecturas de dispositivos e incluye características para el despliegue de aplicaciones en contenedores, lo que hace posible actualizar fácilmente tu software IoT y el HostOS, corregir errores e introducir nuevas funcionalidades. balena proporciona una forma unificada de enviar actualizaciones de código, administrar configuraciones de dispositivos y asegurar su funcionamiento confiable y seguro en el campo, independientemente de su ubicación o condiciones de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Comenzando

Antes de empezar este proyecto, puede que necesites preparar tu hardware y software como se describe aquí.

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

* Una cuenta de [balenaCloud](https://balena.io) (regístrate aquí) con los primeros 10 dispositivos gratis.
* [balenaEtcher](https://etcher.balena.io/) para flashear la memoria de la CM4.

### Configuración de Hardware

**Paso 1**: Debes poner el interruptor lateral del R1000 en modo "boot" y luego encender el dispositivo.

<div class="table-center">

| Posición del Interruptor                                         | Modo         | Descripción       | nRPI-BOOT |
|-------------------------------------------------------------------|--------------|-------------------|-----------|
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal  | Arranca desde eMMC | Bajo      |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo flash   | Arranca desde USB   | Alto      |

</div>

**Paso 2**: Usa un cable USB Tipo-C para conectar reComputer R1000 a tu computadora.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### Adquisición del Archivo de Imagen

**Paso 1**: Ingresa a balenaCloud, crea una cuenta gratuita y luego crea una flota. El tipo de dispositivo predeterminado a elegir es `Raspberry Pi CM4 IO Board`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Haz clic en "Add device", selecciona la versión y configuración deseada y luego descarga el archivo de imagen de balenaOS en la esquina inferior derecha.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif" alt="pir" width="700" height="auto" /></div>

:::note
Se recomienda descargar la imagen de balenaOS y luego grabarla. Si haces clic directamente en "Flash" en la parte inferior derecha de la ventana, puede que falle la grabación.
:::

### Pasos para Flashear balena OS

**Paso 1**: Abre el software [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe). El sistema mostrará un nuevo disco.

**Paso 2**: Abre la herramienta de flasheo [balenaEtcher](https://etcher.balena.io/), selecciona la imagen de balena descargada, selecciona el disco de destino y, finalmente, haz clic en Burn.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

### Cambiar la Configuración

**Paso 1**: Copia el archivo [reComputer-R100x.dtbo](https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo) a la carpeta `resin-boot => overlays`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Agrega el siguiente contenido al archivo `config.txt`:
```shell
dtparam=i2c_arm=on
dtoverlay=i2c1,pins_44_45
dtoverlay=i2c3,pins_2_3
dtoverlay=i2c6,pins_22_23
dtoverlay=audremap,pins_18_19
dtoverlay=reComputer-R100x,uart2
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Ajusta el DIP switch del reComputer R1000 a modo normal y luego enciende nuevamente. Después de un momento, podrás ver el nuevo dispositivo añadido en balenaCloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png" alt="pir" width="700" height="auto" /></div>

Si el dispositivo aparece como `Online (Heartbeat only)`, podría deberse a restricciones de firewall en tu área. Si tienes el mismo problema, puedes conectar una VPN en el dispositivo para que se muestre como `Online`.

### Prueba de Despliegue

**Paso 1**: Ingresa los siguientes comandos para descargar recursos y desplegarlos:
```shell
balena login
git clone https://github.com/mpous/seeed-recomputer-r100x.git
cd seeed-recomputer-r100x
balena push recomputerR1000
```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Tras completar el despliegue, verás un unicornio en la terminal y el estado de todos los servicios cambiará a `Running`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png" alt="pir" width="700" height="auto" /></div>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
