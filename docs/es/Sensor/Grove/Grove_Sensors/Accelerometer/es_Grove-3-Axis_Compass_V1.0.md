---
description: Grove - Brújula de 3 Ejes V1.0
title: Grove - Brújula de 3 Ejes V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Compass_V1.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg" alt="pir" width={600} height="auto" /></p>

Esta brújula digital de 3 ejes cuenta con un módulo multi-chip de detección magnética de campo bajo HMC5883L, que proporciona una precisión de rumbo de hasta 1° a 2°. El HMC5883L consiste en sensores magneto-resistivos de alta resolución de la serie HMC118X, así como un ASIC desarrollado por Honeywell que contiene amplificación, controladores de correa de desmagnetización automática, cancelación de desplazamiento y ADC de 12 bits. Con un circuito de gestión de energía periférica añadido, este es un módulo de brújula fácil de usar y confiable para aplicaciones de brújula y magnetometría de bajo costo.

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)

Especificaciones
--------------

- Voltaje de Entrada: 3.3V, 5V
- Corriente en Modo de Suspensión: 2.5uA
- Corriente en Modo de Medición: 640uA
- Alta resolución
- Interfaz I2C fácil de controlar
- Compatible con plataformas de desarrollo de 3.3V o 5.0V
- Tasa de salida máxima de 116Hz
- Alta precisión de rumbo

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Compatibles
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar con Arduino

Esta demostración te va a mostrar cómo leer datos en bruto, cómo calibrar los datos con tu ángulo de declinación magnética local y cómo obtener el ángulo de rumbo.

Primero, antes de cualquier acción que vayas a tomar, necesitas preparar un parámetro que vas a usar en tu demostración. Ese es tu declinación magnética local.

Puedes encontrarla en grados a través de [la página web de declinación magnética](http://www.magnetic-declination.com/). Por ejemplo, la mía es -2°37', que es -2.617 grados.

Luego transfórmala de grados a radianes, y ahí obtienes el "declinationAngle". Por ejemplo, en mi caso, declinationAngle = -2.617 \* π / 180 = -0.0456752665 rad. Tres cifras significativas son suficientes. Así que lo acortaría a -0.0456 rad. Y este es el parámetro con el que vas a reemplazar el valor de "declinationAngle" en el código de demostración.

Ahora empecemos a ejecutar tu brújula.

1. Conecta la brújula de 3 ejes al puerto I2C del Grove - Base Shield.

2. Descarga el archivo de biblioteca: [Digital Compass Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip). Descomprímelo en el archivo de bibliotecas del IDE de Arduino por la ruta: ..\\arduino-1.0.1\\libraries.

3. Abre la demostración por la ruta:File ->Example ->Digital Compass ->HMC5883L_Example.

    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg" alt="pir" width={600} height="auto" /></p>

4. Reemplaza el valor de la variable "declinitionAngle" con el que ya has calculado.

5. Sube el Código.

6. Verifica el resultado de salida abriendo el monitor serie.

    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg" alt="pir" width={600} height="auto" /></p>

### Jugar Con Raspberry Pi (con GrovePi_Plus)

1.Deberías tener una raspberry pi y un grovepi o grovepi+.

2.Deberías haber completado la configuración del entorno de desarrollo, de lo contrario sigue [aquí](/es/GrovePi_Plus/).

3.Conexión

- Conecta el sensor al socket i2c-x(1~3) del grovepi usando un cable grove.

4.Navega al directorio de las demostraciones:

       cd yourpath/GrovePi/Software/Python/

- Para ver el código

```
    nano grove_compass_lib.py       
    nano grove_compass_example.py    
```

```
    import grove_compass_lib
    c=grove_compass_lib.compass()
    while True:
            print "X:",c.x,"Y:",c.y,"X:",c.z,"Heading:",c.headingDegrees
            c.update()
            time.sleep(.1)
```

5.Ejecuta la demostración.

```
    sudo python grove_compass_example.py
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle de Brújula Digital 3-Ejes Grove](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip)
- [HMC5883.pdf](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/HMC5883.pdf "File:HMC5883.pdf")
- [Librería de Brújula Digital](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Compass_V1.0 -->

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
