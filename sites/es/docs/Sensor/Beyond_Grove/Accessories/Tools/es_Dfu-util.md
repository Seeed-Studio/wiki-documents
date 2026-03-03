---
title: Dfu-util
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Dfu-util/
slug: /es/Dfu-util
last_update:
  date: 02/03/2022
  author: gunengyu
---

## Actualizando firmware con dfu-util

Necesitarás dfu-util 0.5 o más reciente para descargar archivos dfu al [DSO Nano](/DSO_Nano "DSO Nano").
Las versiones más antiguas de dfu-util no funcionarán. El DSO Nano, y muchos otros dispositivos basados en microcontroladores de ST Micro, utiliza las extensiones DFU propias de ST Micro (DfuSe) que no son compatibles con el estándar DFU.

Puedes encontrar un paquete dfu-util 0.8 para Ubuntu 10.04 en el [PPA de Tormod](https://launchpad.net/~tormodvolden/+archive/ppa/+packages?field.series_filter=lucid). Solo descarga e instala el paquete .deb correcto. El mismo paquete debería instalarse bien en cualquier versión posterior de Ubuntu o Debian unstable también. Para otros sistemas operativos puede que tengas que compilar dfu-util tú mismo como se describe en la página principal de dfu-util.

Para descargar un archivo de firmware .dfu desde tu computadora a tu Nano, ejecuta este comando

```
dfu-util -a 0 -D your-firmware-file.dfu
```

Puede que tengas que ejecutarlo un par de veces hasta que tenga éxito. Si obtienes errores de "permission denied", antepón "sudo " a la línea de comandos.
No olvides repetir el comando con todos los archivos de firmware necesarios (APP y LIB).

## Descargando un archivo no-dfuse a un dispositivo dfuse (avanzado)

Un dispositivo DFU estándar aceptará un archivo binario sin procesar desde la computadora y lo cargará en el lugar correcto en la memoria flash.
Por otro lado, con DfuSe, las direcciones son proporcionadas por el archivo .dfu y la computadora tiene que decirle al dispositivo dónde cargarlo.

Así que para descargar un archivo binario sin procesar a un dispositivo DfuSe tienes que conocer la dirección de destino.

Ejemplo, para descargar un archivo binario sin procesar (en caso de que estés desarrollando):

```
dfu-util -a 0 --dfuse-address 0x08004000 -D your-lib.bin
dfu-util -a 0 --dfuse-address 0x0800C000 -D your-app.bin
```

## Cómo compilar dfu-util desde el código fuente

Consulta las [instrucciones de compilación](http://dfu-util.sourceforge.net/build.html) en la página principal de dfu-util.

## Enlaces

Publicaciones originales del foro y discusión:

* [Procedimiento para Linux](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1353&amp;start=10)

* [Instrucciones específicas para Mac OS X](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1364)

Página principal oficial

* [Página principal de dfu-util](http://dfu-util.sourceforge.net/)

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