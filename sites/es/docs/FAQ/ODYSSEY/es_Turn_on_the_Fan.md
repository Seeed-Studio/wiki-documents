---
description: El ventilador no se enciende
title: El ventilador no se enciende
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /es/Turn_on_the_Fan
last_update:
  date: 2023.6.25   
  author: cheng.tang
---

El ventilador del ODYSSEY - X86J41x5 está controlado por el controlador embebido (EC) que tiene el rol de inicializar el dispositivo antes de que el sistema se encienda. La temperatura en BIOS es detectada por el EC y el sensor de temperatura se ubica cerca de la CPU Intel que no tiene el pin del sensor. En otras palabras, la temperatura no es el valor directo de la CPU, puede tener un error de 5 grados centígrados. Lo que ves como valor de temperatura en el sistema es retroalimentado por el interno de la CPU, la temperatura en la pantalla del BIOS es retroalimentada por el EC, el ventilador funciona o se detiene según el valor del EC.

- El valor detectado por el EC (pantalla del BIOS) y la tabla de velocidad del ventilador es así:

**Estado de ventilador deshabilitado**: parado

**Estado de ventilador normal**: menos de 40°C–parado，45-50°C–50%，50-60℃–60%，por encima de 60℃–80%

**Estado de ventilador positivo**: menos de 40°C–parado，45-50°C–70%，50-60℃–80%，por encima de 60℃–100%