---
description: Grove - Acelerómetro Digital de 3 Ejes(±1.5g)
title: Grove - Acelerómetro Digital de 3 Ejes(±1.5g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Digital_Accelerometer-1.5g
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<div>
  <table>
    <colgroup>
      <col width="50%" />
      <col width="50%" />
    </colgroup>
    <tbody>
      <tr className="odd">
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />
            </div>
          </div></td>
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_v1.3.jpg" />
            </div>
          </div></td>
      </tr>
      <tr className="even">
        <td><div style={{}}>
            Grove - Acelerómetro Digital de 3 Ejes v1.2
          </div></td>
        <td><div style={{}}>
            Grove - Acelerómetro Digital de 3 Ejes v1.2b
          </div></td>
      </tr>
    </tbody>
  </table>

El Acelerómetro Digital de 3 Ejes es la parte clave en proyectos como detección de orientación, detección de gestos y detección de movimiento. Este Acelerómetro Digital de 3 Ejes (±1.5g) está basado en el módulo de bajo consumo de energía de Freescale, MMA7660FC. Cuenta con una capacidad de supervivencia a impactos altos de hasta 10,000g y una tasa configurable de Muestras por Segundo. Para aplicaciones generosas que no requieren un rango de medición demasiado grande, esta es una excelente opción porque es duradero, ahorra energía y es rentable.
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html)

Especificaciones
--------------

- Voltaje de funcionamiento: 3.0 - 5.5V
- Corriente en Modo Apagado: 0.4μA
- Corriente en Modo Espera: 2μA
- Corriente en Modo Activo: 47 μA a 1 ODR
- Rango de Prueba: ±1.5g
- Sensibilidad: 21LSB/g
- Biblioteca compatible con Suli

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Soportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Demostración
-------------

### Con Arduino

Aquí vamos a mostrarte cómo obtener datos en bruto y datos medidos por "g" de este sensor.

Conecta este módulo al puerto I2C de Grove - Base Shield a través de un cable Grove.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Si quieres activar la función de Interrupción de este módulo, necesitas conectar la almohadilla de soldadura INT que separamos en la placa con un pin de Arduino que sea capaz de Rutina de Servicio de Interrupción.
</div>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg" alt="pir" width={600} height="auto" /></p>

Instala la biblioteca que proporcionamos en la sección de recursos.

Abre el código directamente por la ruta: File -> Example ->DigitalAccelerometer_MMA7660FC ->MMA7660FC_Demo.

En este programa, la información de aceleración se envía desde el sensor al Seeeduino a través del bus I2C y luego Seeeduino los imprime en el monitor serie.
Abre el monitor serie para verificar el resultado.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg" alt="pir" width={600} height="auto" /></p>

Las salidas de este sensor consisten en dos partes: datos en bruto e información de aceleración de 3 ejes convertida a la unidad de gravedad, "g".

### Con Raspberry Pi

1.Deberías tener una raspberry pi y un grovepi o grovepi+.

2.Deberías haber completado la configuración del entorno de desarrollo, de lo contrario sigue [aquí](/es/GrovePi_Plus/).

3.Conexión

- Conecta el sensor al socket grovepi i2c-x(1~3) usando un cable grove.

4.Navega al directorio de demostraciones:

       cd yourpath/GrovePi/Software/Python/

- Para ver el código

```
    nano grove_i2c_accelerometer.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Accelerometer (+/- 1.5g) to any I2C port eg. I2C-1
    # Can be found at I2C address 0x4c
    # SCL,SDA,VCC,GND

    while True:
        try:
            print grovepi.acc_xyz()
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Ejecuta la demostración.

```
    sudo python grove_i2c_accelerometer.py
```

Referencia
----------

A continuación se muestran dos figuras que te ayudan a entender el significado físico del resultado.

La primera figura trata sobre la dirección de cada eje:
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg" alt="pir" width={600} height="auto" /></p>

La segunda figura proporciona algunos ejemplos:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Hoja de datos del MMA7660FC](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/MMA7660FC.pdf)
- [Archivo Eagle del Grove - Acelerómetro Digital de 3 Ejes](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip)
- [repositorio github para el Acelerómetro Digital de 3 Ejes(±1.5g)](https://github.com/Seeed-Studio/Accelerometer_MMA7660)

## Proyecto

**Bastón Luminoso de Ventilador Giratorio Activado por Inclinación** Bastón LED portátil de colores que reacciona a tu movimiento de agitación. Con ventilador adicional y alarma.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/chuartdo/tilt-activated-spinning-fan-light-stick-e05cec/embed" width={350} />

**Máquina de Navegación RC Verde Ecológica**
Un dispositivo conectado a Internet que controla servos y envía actualizaciones de sensores (GPS/giroscopio/acelerómetro/brújula) en tiempo real a través de un enlace celular GSM.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/anemoi/lean-green-rc-sailing-machine-2cdde5/embed" width={350} />

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±1.5g) -->

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
