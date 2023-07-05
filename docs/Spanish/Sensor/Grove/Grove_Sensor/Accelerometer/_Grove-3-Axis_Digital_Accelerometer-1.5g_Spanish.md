---
description: l Acelerómetro Digital de 3-Ejes es una parte clave en proyectos de detección de orientación, gestos y movimiento.
title: Grove - Acelerómetro Digital de 3-Ejes
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-3-Axis_Digital_Accelerometer
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

<table>
<colgroup>
<col width="50%" />
<col width="50%" /> 
</colgroup>
<tbody>
<tr class="odd">
<td><div class="center">
<div class="floatnone">
<img src="https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-1.5g/master/img/3_aix_acc.jpg" />
</div>
</div></td>
<td><div class="center">
<div class="floatnone">
<img src="https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-1.5g/master/img/Grove-3-Axis_v1.3.jpg" />
</div>
</div></td>
</tr>
<tr class="even">
<td><div style=": center">
Grove - Acelerómetro Digital de 3-Ejes v1.2
</div></td>
<td><div style=": center">
Grove - Acelerómetro Digital de 3-Ejes v1.2b
</div></td>
</tr>
</tbody>
</table>

El Acelerómetro Digital de 3-Ejes es una parte clave en proyectos de detección de orientación, gestos y movimiento. Este Acelerómetro Digital de 3-Ejes(±1.5g) está basadoen el módulo de bajo consumo de Freescale, MMA7660FC. Cuenta con una alta capacidad de supervivencia a golpes de hasta 10,000g y tasas configuarables de muestras por segundo. Para aquellas aplicaciones que no requieren largos rangos de medición, este es una gran alternativa ya que es durable, de bajo consumo y un gran costo-beneficio.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](<http://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html>)

## Especificaciones

- Voltaje de Operación: 3.0 - 5.5V
- Modo de corriente apagada: 0.4μA
- Corriente en modo de espera: 2μA
- Corriente en modo activo: 47 μA at 1 ODR
- Rango de prueba: ±1.5g
- Sensibilidad: 21LSB/g
- Biblioteca compatible con Suli

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                                 | BeagleBone                                                                                          | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Demostración

### Con [Arduino](/Arduino "Arduino")

Te mostraremos como obtener datos sin procesar y datos "g" medidos por el sensor.

Conecta el módulo al puerto I2C del Grove - Shield Base con ayuda de los cables Grove.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Si deseas activar la función de interrupción de módulo, necesitarás conectar el INT soldando el pad que hemos dejado vacío en la tarjeta con un pin de Arduino capaz de utilizar <em>Interrupt Service Routine</em>.

</div>

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-1.5g/master/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg)

Instale la librería que le proporcionamos en el área de [Recursos](/Grove-3-Axis_Digital_Accelerometer-1.5g#resources).

Abre el código directamente del path:Archivos-> Ejemplos ->DigitalAccelerometer_MMA7660FC ->MMA7660FC_Demo.

En este programa, la información de aceleración es enviada desde el sensor al Seeeduino vía I2C y así mismo el controlador imprime lo recibido en el monitor serial para ver los resultados.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-1.5g/master/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg)

Las salidas de este sensor de dividen en dos partes: Datos sin procesar y datos del acelerómetro de 3-Ejes convertidos en unidades gravitacionales "g".

### Con Raspberry Pi

1.Deberás tener una Raspberry Pi y un grovepi o grovepi+.

2.Deberás contrar con la configuración completa del ambiente de desarrollo, de otra manera logralo [Aquí](/GrovePi_Plus).

3.Conexión

- Conecta el sensor al grovepi en el puertoP i2c-x(1~3) usando un cable Grove.

4.Navega al directorio de demostraciones:

       cd yourpath/GrovePi/Software/Python/

- Para ver el código

```
    nano grove_i2c_accelerometer.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Conecta el Grove Aceleróemtro (+/- 1.5g) al puerto I2C. Ejemplo, I2C-1
    # Puede ser encontrado con la dirección I2C, 0x4c
    # SCL,SDA,VCC,GND

    while True:
        try:
            print grovepi.acc_xyz()
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Ejecute la demostración

```
    sudo python grove_i2c_accelerometer.py
```

## Referencias

Debajo encontrarás dos figuras que nos ayudarán a entender el funcionamiento del principio físico de nuestros resultados.

La primer imagen nos muestra la dirección de cada eje:
![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-1.5g/master/img/MMA7660_Direction.jpg)

La siguiente imagen, es otro ejemplo:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-1.5g/master/img/Sensing_Direction_1.jpg)

## Recursos

- [Datasheet of MMA7660FC](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-1.5g/master/res/MMA7660FC.pdf)
- [Grove - 3-Axis Digital Accelerometer Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-3-Axis_Digital_Accelerometer-1.5g/master/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip)
- [github repository for 3-Axis Digital Accelerometer(±1.5g)](https://github.com/Seeed-Studio/Accelerometer_MMA7660)

## Proyectos

**Barra de luz de ventilador giratorio activada por inclinación** La barra de color LED portátil reacciona a su movimiento. Con ventilador extra y alarma.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/chuartdo/tilt-activated-spinning-fan-light-stick-e05cec/embed' width='350'></iframe>

**Lean Green RC Sailing Machine**
Un dispositivo conectado a Internet que controla los servos y envía actualizaciones de sensores (GPS / giroscopio / aceleración / brújula) en tiempo real a través de un enlace celular GSM.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/anemoi/lean-green-rc-sailing-machine-2cdde5/embed' width='350'></iframe>

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±1.5g) -->

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
