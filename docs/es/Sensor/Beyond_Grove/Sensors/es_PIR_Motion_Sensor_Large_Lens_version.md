---
title: Módulo sensor de movimiento PIR
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/PIR_Motion_Sensor_Large_Lens_version/
slug: /es/PIR_Motion_Sensor_Large_Lens_version
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/Pir_motion_sensor_v1.0.jpg)

PIR (Detección Infrarroja Pasiva) se utiliza para detectar el movimiento de personas. Esta versión tiene una lente grande que puede soportar largo alcance y ángulo amplio. El conector estándar de 2.54mm es fácil de fijar en cualquier lugar.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/pir-motion-sensor-module-p-74.html?cPath=84_88&zenid=020999c566d2f31841dc54602b7d02ef)

##   Características
---
*   Largo alcance

*   Ángulo amplio

*   Bajo consumo

*   Fuente de alimentación DC 3.0-5.5V

##   Especificaciones
---
*   Voltaje de entrada: DC3.0-5.5V

*   Corriente: 100uA(máx)

*   Distancia de detección: 9m(máx)

*   Señal de salida: 0,3 VCC (Salida alta cuando se detecta movimiento)

*   Ángulo de detección: 120°

*   Conector: 3 pines paso 2.54mm
*   Tamaño: L36*W26*H21(mm)

##   Uso
---
El siguiente código demuestra una aplicación simple de detección de movimiento. Cuando alguien se mueve en su rango de detección, emitirá Alto a través de su pin SIG y el LED se encenderá. De lo contrario, emitirá BAJO. Entonces puedes usarlo para detectar el movimiento de personas.

![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/PIR_motion_sensor_module_connection.JPG)

###   Programación

Incluye fragmento de código importante.
Código de demostración como:
```
/*******************************************************************************/
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 8//Use pin 8 to receive the signal from the module
#define LED    4//the Grove - LED is connected to D4 of Arduino

void setup()
{
    pinsInit();
}

void loop()
{
    if(isPeopleDetected())//if it detects the moving people?
    turnOnLED();
    else
    turnOffLED();
}
void pinsInit()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
/***************************************************************/
/*Function: Detect whether anyone moves in it's detecting range*/
/*Return:-boolean, ture is someone detected.*/
boolean isPeopleDetected()
{
    int sensorValue = digitalRead(PIR_MOTION_SENSOR);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
```


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos
---
- [Archivo Eagle del sensor de movimiento PIR](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip)

## Soporte Técnico y Discusión de Productos
si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>