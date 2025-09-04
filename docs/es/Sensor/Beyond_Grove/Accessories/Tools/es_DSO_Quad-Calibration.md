---
title: DSO Quad:Calibración
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/DSO_Quad-Calibration/
slug: /es/DSO_Quad-Calibration
last_update:
  date: 02/03/2022
  author: gunengyu
---

La calibración consiste en diferentes partes:

* Calibración DC con

* Desplazamiento de Cero

* Ganancia

* Calibración AC (respuesta de pendiente, sobreimpulso)

* Para 1 ... 10V/div

* Para 50 ... 500mV/div
* Para sonda x10

## Desplazamiento de Cero

Esta calibración se realiza casi automáticamente. El DSO debe estar bien a temperatura de funcionamiento para esto. Por lo tanto, debería haberlo encendido al menos unos 10 minutos antes. Después de seleccionar "Calibr" del menú "Save/Recall" (Botón "Square", desplazándose al último elemento, presionando el botón -/+) se le pide que cortocircuite la entrada CH_A a GND. Si está usando una sonda, esta debe estar en modo "x1", no "x10". Se inicia presionando el botón "Square". Después de unos segundos termina y espera el primer paso de la calibración de Ganancia. Si no desea hacer la calibración de ganancia aquí, vaya con la "flecha derecha" a través de todos los rangos sin modificar nada con el navegador -/+. Entonces puede repetirlo (botón square) o ir "a la siguiente operación" con "derecha" del navegador y hacer el ajuste de cero del CH_B. Información Adicional: Incluso si el voltaje de entrada es cero, un amplificador real tiene un pequeño valor no cero en la salida. Y este valor cambia, si se cambian las resistencias para el rango. Este desplazamiento de cero se evalúa aquí para cada rango y esos valores se usan en el futuro para corregir en la parte digital sumando/restando ese desplazamiento

## Calibración de Ganancia

¡Para la calibración de ganancia se requiere hardware externo adicional! En cada rango se necesita aplicar un voltaje DC bien conocido de aproximadamente 80 ... 100% del rango de escala completa. Ese "rango de escala completa" p.ej. 50mV/div *6 div = 0.3V o 10V/div* 6 div = 60V. Así que necesita los siguientes voltajes:

```
0.25... 0.3 V for 50mV/div range
0.5 ... 0.6 V for 0.1V/div range
1.0 ... 1.2 V for 0.2V/div range
2.5 ... 3.0 V for 0.5V/div range
5.0 ... 6.0 V for   1V/div range
10  ... 12  V for   2V/div range
25  ... 30  V for   5V/div range
50  ... 60  V for  10V/div range
```

Sugiero usar algunas resistencias como divisor de voltaje y un multímetro de voltaje para medir el voltaje. Por favor tenga en cuenta que los voltímetros muy baratos a menudo no son precisos. Pero un medidor con un precio de 25 ... 40 € (o US-$) debería ser lo suficientemente preciso. Los voltajes más bajos se pueden tomar p.ej. de un cargador USB o puede tener p.ej. una fuente de 12V o una fuente de portátil de 19V. Los 50 ... 60V pueden ser los más difíciles de tener disponibles. Pero puede calibrar solo los rangos más pequeños y quedarse con una peor precisión en los rangos más altos. Una posible solución para el voltaje más alto puede ser usar convertidores DC/DC, p.ej. dos convertidores de 5V a 24V, que están disponibles por aproximadamente 5€ por pieza. Una corriente de salida de 5mA es suficiente. Un circuito completo, que puede ser alimentado con 5V puede verse así: [[[1]](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/res/GainCalibrationCircuit.PNG)] Los valores de salida dados pueden variar p.ej. con el voltaje de entrada y las tolerancias de las resistencias. Pero estarán en el rango requerido dado arriba. **Atención:** ¡Los 54V son un voltaje peligroso!

Con este equipo puede conectar el voltímetro y el canal del DSO paso a paso a la salida de ese circuito y usar el -/+ para ajustar el valor del DSO al mismo valor que el voltímetro.

## Calibración AC

Mientras que la calibración DC se aplica en la parte digital del DSO, la calibración AC se hace cambiando los valores de algunos capacitores en el hardware. La relación del divisor de los capacitores necesita coincidir con la relación del divisor de las resistencias.

![](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/img/DSO203_AC-Cal_Circuit_Diagr.PNG).

El procedimiento de calibración para el Quad DSO ya está descrito, p.ej. aquí: [[2]](http://neophob.com/2012/03/dso-quad-for-dummies/) Usa la salida de onda cuadrada incorporada. Para Ch_A primero configure la sonda a x1 y ajuste A1 (=C5A) en el rango 1V/div. Luego ajuste A2 (C3A) en el rango 500mV/div. Luego verifique la configuración A1 nuevamente, luego la A2 nuevamente ya que cada una está influyendo también en la otra un poco. Finalmente configure la sonda a x10, seleccione un rango adecuado y ajuste A3.

## Ver También

* [DSO Quad](/DSO_Quad "DSO Quad")

* [DSO Quad:Upgrading Firmware](/DSO_Quad-Building_Firmware "DSO Quad:Upgrading Firmware")

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>