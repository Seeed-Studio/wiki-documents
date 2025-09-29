---
description: solución para el problema de compatibilidad entre reComputer y la cámara VEYE
title: Solución para el Problema de Compatibilidad entre reComputer y la Cámara VEYE
keywords:
- reComputer
- VEYE Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera
last_update:
  date: 08/01/2024
  author: Youjiang
---

El problema se ha rastreado a un problema de firmware con el chip del hub USB.

Los pasos específicos son los siguientes:

**PASO 1.** Usa SSH para iniciar sesión remotamente en tu dispositivo Jetson, ya que durante el proceso de actualización, se requiere que no haya dispositivos externos conectados a la interfaz USB.

**PASO 2.** Encuentra una manera de copiar el [Driver de la Cámara](https://files.seeedstudio.com/wiki/reComputer/Hard_ware/VEYE_Camera/vl822-fw.tar.bz2) al sistema Jetson. Si usas una unidad USB para copiar, recuerda desconectar la unidad USB después de que se complete la copia.

**PASO 3.** Sigue las instrucciones a continuación para realizar la actualización.
```sh
$ tar -xjvf vl822-fw.tar.bz2
$ cd vl822-fw
```
Luego, por favor sigue el archivo `readme.md` para instalar el firmware.

**PASO 4.** Apaga y espera 5 segundos antes de encender nuevamente. Luego, ejecuta el comando a continuación para confirmar la versión del firmware del hub USB.
```sh
$ ./run_2822_ver.sh
```

**PASO 5.** Felicidades, la actualización ha sido exitosa. Ahora deberías poder usar i2cdetect para detectar la cámara VEYE en 0x3b.


## Soporte Técnico

Por favor no dudes en enviar problemas a nuestro [foro](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>