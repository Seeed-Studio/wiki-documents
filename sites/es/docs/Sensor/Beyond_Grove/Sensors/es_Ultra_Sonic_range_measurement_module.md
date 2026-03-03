---
title: Módulo de medición de distancia ultrasónico
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Ultra_Sonic_range_measurement_module/
slug: /es/Ultra_Sonic_range_measurement_module
last_update:
  date: 01/11/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/front.jpg)

El sensor ultrasónico Seeed es un módulo de medición de distancia sin contacto, que también es compatible con electronic brick.
Está diseñado para uso fácil en proyectos modulares
con rendimiento industrial.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)

##   Características

*   Rango de detección: 3cm-4m
*   Mejor en ángulo de 30 grados
*   Interfaz compatible con electronic brick
*   Alimentación de 5VDC
*   Compatible con protoboard
*   Transductor dual
*   Listo para librería Arduino

##   Especificaciones

<table>
<tr>
<td width="400px"> Voltaje de alimentación</td>
<td width="200px"> 5V</td>
</tr>
<tr>
<td> Consumo de corriente global</td>
<td> 15 mA</td>
</tr>
<tr>
<td>Frecuencia ultrasónica</td>
<td> 40k Hz</td>
</tr>
<tr>
<td> Rango máximo</td>
<td> 400 cm</td>
</tr>
<tr>
<td> Rango mínimo</td>
<td> 3 cm</td>
</tr>
<tr>
<td> Resolución</td>
<td> 1 cm</td>
</tr>
<tr>
<td> Ancho de pulso de disparo</td>
<td> 10 μs</td>
</tr>
<tr>
<td> Dimensiones exteriores</td>
<td> 43x20x15 mm</td>
</tr>
</table>

## Comenzando

Se transmite un pulso ultrasónico corto en el tiempo 0, reflejado por un objeto. El sensor recibe esta señal y la convierte en una señal eléctrica. El siguiente pulso puede transmitirse cuando el eco se ha desvanecido. Este período de tiempo se llama período de ciclo. El período de ciclo recomendado no debe ser menor a 50ms. Si se envía un pulso de activación de 10μs de ancho al pin de señal, el módulo ultrasónico emitirá ocho señales ultrasónicas de 40kHz y detectará el eco de retorno. La distancia medida es proporcional al ancho del pulso de eco y puede calcularse mediante la fórmula anterior. Si no se detecta ningún obstáculo, el pin de salida dará una señal de nivel alto de 38ms.

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Ultra_Sonic_range_measurement_module |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/45d_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)|

- **Paso 2.** Conecta el módulo Ultra_Sonic_range_measurement_module al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

:::note
	Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::
| Seeeduino       |  ??? |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D2            | Amarillo                  |


#### Software

**Paso 1.** Copia el código y grábalo en la placa controladora.
**Paso 2.**  Sube el código y abre la ventana del monitor.

```cpp
#include "Arduino.h"
class Ultrasonic
{
    public:
    Ultrasonic(int pin);
    void DistanceMeasure(void);
    double microsecondsToCentimeters(void);
    double microsecondsToInches(void);
    private:
    int this_pin;//pin number of Arduino that is connected with SIG pin of Ultrasonic Ranger.
    long duration;// the Pulse time received;
};
Ultrasonic::Ultrasonic(int pin)
{
    this_pin = pin;
}
/*Begin the detection and get the pulse back signal*/
void Ultrasonic::DistanceMeasure(void)
{
    pinMode(this_pin, OUTPUT);
    digitalWrite(this_pin, LOW);
    delayMicroseconds(2);
    digitalWrite(this_pin, HIGH);
    delayMicroseconds(5);
    digitalWrite(this_pin,LOW);
    pinMode(this_pin,INPUT);
    duration = pulseIn(this_pin,HIGH);
}
/*The measured distance from the range 0 to 400 Centimeters*/
double Ultrasonic::microsecondsToCentimeters(void)
{
    return duration/29.0/2.0;
}
/*The measured distance from the range 0 to 157 Inches*/
double Ultrasonic::microsecondsToInches(void)
{
    return duration/74.0/2.0;
}

Ultrasonic ultrasonic(2);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    double RangeInInches;
    double RangeInCentimeters;
    ultrasonic.DistanceMeasure();// get the current signal time;
    RangeInInches = ultrasonic.microsecondsToInches();//convert the time to inches;
    RangeInCentimeters = ultrasonic.microsecondsToCentimeters();//convert the time to centimeters
    Serial.println("The distance to obstacles in front is: ");
    Serial.print(RangeInInches);//0~157 inches
    Serial.println(" inch");
    Serial.print(RangeInCentimeters);//0~400cm
    Serial.println(" cm");
    delay(1000);
}
```

## Soporte Técnico y Discusión de Productos
 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>