---
title:  Grove - Sensor de Proximidad Infrarrojo de 80cm
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-80cm_Infrared_Proximity_Sensor/
slug: /es/Grove-80cm_Infrared_Proximity_Sensor
last_update:
  date: 12/30/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Image_of_PSD.jpg)

El Sensor de Proximidad Infrarrojo de 80cm es un Sensor de Medición de Distancia de Propósito General. Este sensor SharpGP2Y0A21YK, cuenta con un paquete pequeño y un consumo de corriente muy bajo, toma una lectura continua de distancia y devuelve un voltaje analógico correspondiente con un rango de 10cm (4") a 80cm (30"). Puede ser usado en televisores, computadoras personales, automóviles y demás.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html)

Características
--------

- Fácil de usar
- Amplio rango de voltaje de alimentación: 2.5V–7V
- Interfaz Grove

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Ideas de Aplicación
-----------------

- Conservación de gotas de agua
- Juguetes
- Robótica

Especificaciones
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mínimo
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máximo
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Trabajo
</th>
<td>
2.5V
</td>
<td>
5V
</td>
<td>
7V
</td>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Salida Analógica(80cm)
</th>
<td>
0.25V
</td>
<td>
0.4V
</td>
<td>
0.5V
</td>
</tr>
<tr align="center">
<th scope="row">
Consumo Promedio de Corriente
</th>
<td>
-
</td>
<td>
33mA
</td>
<td>
50mA
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

### Con Arduino

El sensor de proximidad infrarrojo es fácil de usar. La relación entre la lectura de voltaje y la distancia se muestra a continuación. Cuando leemos el voltaje, que indica la distancia desde el objeto en frente hasta este sensor.

- Conecta el conector de 3 pines al sensor, y conecta el conector de 4 pines al puerto A1 del **Grove-Base Shield**.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Este sensor es bastante pequeño y usa un conector diminuto llamado conector Japan Solderless Terminal (JST). Estos conectores tienen tres cables: Tierra, Vcc, y la señal de Salida. Debido a que este sensor dispara continuamente y no necesita ningún reloj para iniciar un ciclo de lectura, es fácil de interfaz con cualquier microcontrolador. Para Arduino & Seeeduino, preparamos un cable de 4 pines a 3 pines para convertir el conector de 3 pines en el sensor al conector de 4 pines en el Grove Base Shield, para ser compatible con la interfaz Grove de Seeeduino.
</div>

- Conecta Arduino/Seeeduino a través de un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/80cm_Infrared.jpg)

- Copia y pega el código de abajo en un nuevo sketch de Arduino.

```
    #define IR_PROXIMITY_SENSOR A1 // Analog input pin that  is attached to the sensor
    #define ADC_REF 5//reference voltage of ADC is 5v.If the Vcc switch on the Seeeduino
                     //board switches to 3V3, the ADC_REF should be 3.3
    float voltage;//the sensor voltage, you can calculate or find the distance
                    // to the reflective object according to the figures
                    //on page 4 or page 5 of the datasheet of the GP2Y0A21YK.

    void setup()
    {
        // initialise serial communications at 9600 bps:
        Serial.begin(9600);
    }

    void loop()
    {
        voltage = getVoltage();
        Serial.print("sensor voltage  = " );                       
        Serial.print(voltage);
        // wait 500 milliseconds before the next loop
        delay(500);
    }
    /****************************************************************************/
    /*Function: Get voltage from the sensor pin that is connected with analog pin*/
    /*Parameter:-void                                                       */
    /*Return:   -float,the voltage of the analog pin                        */
    float getVoltage()
    {
        int sensor_value;
        int sum;  
        // read the analog in value:
        for (int i = 0;i < 20;i ++)//Continuous sampling 20 times
        {
            sensor_value = analogRead(IR_PROXIMITY_SENSOR);
            sum += sensor_value;
        }
        sensor_value = sum / 20;
        float voltage;
        voltage = (float)sensor_value*ADC_REF/1024;
        return voltage;
    }
```

- Sube el código.
- Abre el Monitor Serie, puedes obtener el voltaje. puedes calcular o encontrar la distancia al objeto reflectante según las siguientes figuras.

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Infrared_Proximity.jpg)

<div class="admonition note">
<p class="admonition-title">Nota</p>
Debido a algo de trigonometría básica dentro del triángulo desde el emisor hasta el punto de reflexión al receptor, la salida del detector es no lineal con respecto a la distancia que se está midiendo.
</div>

### Con Raspberry Pi

1.Deberías tener una raspberry pi y un grovepi o grovepi+.

2.Deberías haber completado la configuración del entorno de desarrollo.
de lo contrario sigue [aquí](/es/GrovePi_Plus/). 

3.Conexión

- Conecta el sensor al socket D4 del grovepi usando un cable grove.

4.Navega al directorio de las demos:

       cd yourpath/GrovePi/Software/Python/

- Para ver el código

```
    nano grove_infrared_distance_interrupt.py    # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Infrared Distance Interrupt Sensor to digital port D4
    # SIG,NC,VCC,GND
    sensor = 4

    grovepi.pinMode(sensor,"INPUT")

    while True:
        try:
            # Sensor returns LOW and onboard LED lights up when the
            # received infrared light intensity exceeds the calibrated level
            if grovepi.digitalRead(sensor) == 0:
                print "found something"
            else:
                print "nothing"

            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Ejecuta la demostración.

```
    sudo python grove_infrared_distance_interrupt.py
```

Referencia
---------

Estos nuevos sensores de distancia utilizan triangulación y una pequeña matriz CCD lineal para calcular la distancia y/o presencia de objetos en el campo de visión. La idea básica es esta: el emisor emite un pulso de luz infrarroja. Esta luz viaja por el campo de visión y o bien golpea un objeto o simplemente continúa su camino. En el caso de que no haya objeto, la luz nunca se refleja y la lectura no muestra ningún objeto. Si la luz se refleja en un objeto, regresa al detector y crea un triángulo entre el punto de reflexión, el emisor y el detector.

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Theory_of_PSD.jpg)

Los ángulos en este triángulo varían según la distancia al objeto. La porción receptora de estos nuevos detectores es en realidad una lente de precisión que transmite la luz reflejada a varias porciones de la matriz CCD lineal cerrada basándose en el ángulo del triángulo descrito anteriormente. La matriz CCD puede entonces determinar en qué ángulo regresó la luz reflejada y por lo tanto, puede calcular la distancia al objeto.

Este nuevo método de medición de distancia es casi inmune a la interferencia de la luz ambiental y ofrece una increíble indiferencia al color del objeto que se está detectando. Ahora es posible detectar una pared negra bajo la luz solar directa.

Recursos
---------

- [Hoja de datos GP2Y0A21YK](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/res/GP2Y0A21YK.pdf)

## Proyecto

**Rover Autónomo Arduino101 BLE** Mejorando el Rover Arduino101 BLE con sensores para conducción autónoma.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/31926/arduino101-ble-autonomous-rover-2cb19f/embed' width='350'></iframe>

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_80cm_Infrared_Proximity_Sensor -->

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
