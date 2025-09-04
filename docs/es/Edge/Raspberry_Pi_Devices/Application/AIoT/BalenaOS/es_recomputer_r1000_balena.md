---
description: balena es una plataforma IoT versátil que permite a los desarrolladores construir, desplegar y gestionar aplicaciones IoT a través de varias arquitecturas de dispositivos con facilidad, aprovechando el despliegue en contenedores para actualizaciones fluidas y gestión robusta de dispositivos. El controlador IoT edge reComputer R1000, impulsado por el Raspberry Pi CM4, ofrece capacidades de alto rendimiento para tareas exigentes de computación en el borde. Juntos, balena y reComputer R1000 proporcionan una solución potente y escalable para el despliegue y gestión eficiente y segura de aplicaciones IoT en entornos diversos.
title: reComputer R1000 con balena
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_r1000_balena
last_update:
  date: 06/17/2024
  author: ShuishengPeng and Kasun Thushara
---

## ¿Qué es balena?

[balena](https://www.balena.io/) es una plataforma de Internet de las Cosas (IoT) diseñada para ayudar a los desarrolladores a construir, desplegar y gestionar aplicaciones IoT a través de una flota de dispositivos. Soporta una amplia gama de arquitecturas de dispositivos e incluye características para el despliegue de aplicaciones en contenedores, haciendo posible actualizar fácilmente tu software IoT y HostOS, corregir errores e introducir nuevas características en tus aplicaciones IoT. balena proporciona una forma unificada de enviar actualizaciones de código, gestionar configuraciones de dispositivos y asegurar que los dispositivos funcionen de manera confiable y segura en el campo, independientemente de su ubicación o condiciones de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

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

- Una cuenta de [balenaCloud](https://balena.io) (regístrate aquí) y obtén los primeros 10 dispositivos gratis.
- [balenaEtcher](https://etcher.balena.io/) para flashear la memoria del CM4.

### Configuración de Hardware

**Paso 1**: Necesitas configurar el interruptor en el lateral del R1000 al modo de arranque, luego enciende el dispositivo

<div class="table-center">

| Posición del Interruptor                                    | Modo        | Descripción           | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | --------------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Arrancar desde eMMC   | Bajo      |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo flash  | Arrancar desde USB    | Alto      |

</div>

**Paso 2**: Por favor, usa un cable USB Type-c para conectar el reComputer R1000 a tu computadora.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### Adquisición del Archivo de Imagen

**Paso 1**: Ve a balenaCloud, crea una cuenta gratuita, y luego crea una flota. El tipo de dispositivo predeterminado elige `Raspberry Pi CM4 IO Board`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Haz clic en "Add device", selecciona la información de versión e información de configuración que desees, y luego descarga el archivo de imagen balenaOS en la esquina inferior derecha.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif" alt="pir" width="700" height="auto" /></div>

:::note
Se recomienda descargar primero el archivo de imagen de balenaOS y luego grabarlo. Si haces clic directamente en "Flash" en la esquina inferior derecha de la ventana para grabarlo, puede que falle la grabación.
:::

### Pasos para Flashear balena OS

**Paso 1**: Abre el software [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe), y luego el sistema mostrará el nuevo disco

**Paso 2**: Abre la herramienta de flasheo [balenaEtcher](https://etcher.balena.io/), selecciona el archivo de imagen balena descargado previamente, luego selecciona el disco de destino, y finalmente haz clic en Burn.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

### Cambiar Configuración

**Paso 1**: Copia el archivo [reComputer-R100x.dtbo](https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo) a la carpeta `resin-boot => overlays`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Añade el siguiente contenido al archivo `config.txt`:

```shell
dtparam=i2c_arm=on
dtoverlay=i2c1,pins_44_45
dtoverlay=i2c3,pins_2_3
dtoverlay=i2c6,pins_22_23
dtoverlay=audremap,pins_18_19
dtoverlay=reComputer-R100x,uart2
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Configura el interruptor DIP del reComputer R1000 en modo normal, luego enciéndelo nuevamente. Después de un tiempo, puedes ver que el nuevo dispositivo se ha agregado exitosamente en balenaCloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png" alt="pir" width="700" height="auto" /></div>

Si el dispositivo está `Online (Heartbeat only)`. Esto se debe a las restricciones del firewall en mi área. Si tienes el mismo problema, puedes conectar una VPN al dispositivo para que se pueda mostrar normalmente `Online`.

### Prueba de despliegue

**Paso 1**: Ingresa el siguiente comando para descargar los recursos y desplegarlos:

```shell
balena login
git clone https://github.com/mpous/seeed-recomputer-r100x.git
cd seeed-recomputer-r100x
balena push recomputerR1000
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Después de que se complete el despliegue, aparecerá un unicornio en la terminal y el estado de todos los servicios cambiará a `Running`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png" alt="pir" width="700" height="auto" /></div>

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
