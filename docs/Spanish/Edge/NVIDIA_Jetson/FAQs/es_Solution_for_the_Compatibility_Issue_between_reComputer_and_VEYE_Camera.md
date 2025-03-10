---
description: Solución al problema de compatibilidad entre reComputer y la cámara VEYE
title: Solución al problema de compatibilidad entre reComputer y la cámara VEYE
keywords:
- reComputer
- Cámara VEYE
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera
last_update:
  date: 08/01/2024
  author: Youjiang
---

El problema se debe a un problema de firmware con el chip del Hub USB.

Los pasos específicos para resolver este problema, se enlistan a continuación:

**Paso 1.** Utiliza SSH para iniciar sesión de forma remota en tu dispositivo Jetson, ya que durante el proceso de actualización, no se requiere que ningún dispositivo externo esté conectado a la interfaz USB.

**Paso 2.** Encuentra una manera de copiar el [Controlador de cámara](https://files.seeedstudio.com/wiki/reComputer/Hard_ware/VEYE_Camera/vl822-fw.tar.bz2) al sistema Jetson. Si utilizas una unidad USB para copiar, recuerda desconectar la unidad USB una vez completada la copia.

**Paso 3.** Sigue las instrucciones mostradas a continuación para realizar la actualización.
```sh
$ tar -xjvf vl822-fw.tar.bz2
$ cd vl822-fw
```
Luego, sigue el archivo `readme.md` para instalar el firmware.

**Paso 4.** Apaga y espera 5 segundos antes de volver a encenderla. Luego, ejecuta el siguiente comando para confirmar la versión del firmware del Hub USB.
```sh
$ ./run_2822_ver.sh
```

**PASO 5.** Felicitaciones, la actualización se realizó correctamente. Ahora deberías poder utilizar i2cdetect para detectar la cámara VEYE en 0x3b.





## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>