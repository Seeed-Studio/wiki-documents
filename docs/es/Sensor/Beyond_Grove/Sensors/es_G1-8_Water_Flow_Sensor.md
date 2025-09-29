---
title: Sensor de Flujo de Agua G1/8 pulgada
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/G1-8_Water_Flow_Sensor/
slug: /es/G1-8_Water_Flow_Sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---
[![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/G18_Water_Flow_Sensor.jpg)](https://www.seeedstudio.com/depot/G18-Water-Flow-Sensor-p-1346.html?cPath=25_32)

El sensor de flujo de agua consiste en un cuerpo de válvula de plástico, un rotor de agua y un sensor de efecto Hall. Cuando el agua fluye a través del rotor, el rotor gira. Su velocidad cambia con diferentes tasas de flujo. El sensor de efecto Hall emite la señal de pulso correspondiente. Este es adecuado para detectar flujo en dispensadores de agua o máquinas de café.

Tenemos una línea completa de sensores de flujo de agua en diferentes diámetros. Échales un vistazo para encontrar el que mejor satisfaga tu necesidad.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)

##  Características

*   Compacto, Fácil de Instalar

*   Alto Rendimiento de Sellado

*   Sensor de Efecto Hall de Alta Calidad

*   Cumple con RoHS

##  Especificaciones

<table>
  <tr>
    <td>Voltaje de Trabajo Mín.</td>
    <td>DC 4.5V</td>
  </tr>
  <tr>
    <td>Corriente de Trabajo Máx.</td>
    <td>15mA(DC 5V)</td>
  </tr>
  <tr>
    <td width="400px">Voltaje de Trabajo</td>
    <td width="400px">5V～24V</td>
  </tr>
  <tr>
    <td>Rango de Tasa de Flujo</td>
    <td>0.3~6L/min</td>
  </tr>
  <tr>
    <td>Capacidad de Carga</td>
    <td>≤10mA(DC 5V)</td>
  </tr>
  <tr>
    <td>Temperatura de Operación</td>
    <td>≤80℃</td>
  </tr>
  <tr>
    <td>Temperatura del Líquido</td>
    <td>≤120℃</td>
  </tr>
  <tr>
    <td>Humedad de Operación</td>
    <td>35%～90%RH</td>
  </tr>
  <tr>
    <td>Presión del Agua</td>
    <td>≤0.8MPa</td>
  </tr>
  <tr>
    <td>Temperatura de Almacenamiento</td>
    <td>-25℃～+80℃</td>
  </tr>
  <tr>
    <td>Humedad de Almacenamiento</td>
    <td>25%～95%RH</td>
  </tr>
</table>

## Comenzando

<font>Nota: Este ejemplo está extraído del foro, el cual fue realizado por Charles Gantt. Gracias por su contribución. Veamos cómo funciona.</font>

### Lectura de la Tasa de Flujo de Agua con Sensor de Flujo de Agua

Esta es parte de un proyecto en el que he estado trabajando y pensé que lo compartiría aquí ya que ha habido algunos hilos sobre cómo leer la tasa de flujo de agua en litros por hora usando el Sensor de Flujo de Agua que se encuentra en el Depósito de Seeed Studio. Utiliza una simple rueda giratoria que pulsa un sensor de efecto hall. Al leer estos pulsos e implementar un poco de matemáticas, podemos leer la tasa de flujo de líquidos con una precisión del 3%. Las roscas son simples G3/4 por lo que encontrar extremos con púas no será tan difícil.

**Instalación de Hardware**

Necesitarás Seeeduino / Arduino, Sensor de Flujo de Agua, resistor de 10K, una protoboard y algunos cables jumper.

Conectar el Sensor de Flujo de Agua es bastante simple. Hay 3 cables: Negro, Rojo y Amarillo.
Negro al pin de tierra del Seeeduino
Rojo al pin de 5v del Seeeduino
El cable amarillo necesitará ser conectado a un resistor pull up de 10k. y luego al pin 2 en el Seeeduino.

Aquí hay un diagrama de fritzing que hice para mostrarte cómo conectar todo.

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Una vez que lo tengas conectado necesitarás subir el siguiente código a tu Seeeduino. Una vez que esté subido y tengas algo de fluido fluyendo a través del Sensor de Flujo de Agua, puedes abrir el monitor serial y mostrará la tasa de flujo, refrescándose cada segundo.

**Programación**
```
// reading liquid flow rate using Seeeduino and Water Flow Sensor from Seeedstudio.com
// Code adapted by Charles Gantt from PC Fan RPM code written by Crenn @thebestcasescenario.com
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; //measuring the rising edges of the signal
int Calc;
int hallsensor = 2;    //The pin location of the sensor

void rpm ()     //This is the function that the interupt calls
{
    NbTopsFan++;  //This function measures the rising and falling edge of the

    hall effect sensors signal
}
// The setup() method runs once, when the sketch starts
void setup() //
{
    pinMode(hallsensor, INPUT); //initializes digital pin 2 as an input
    Serial.begin(9600); //This is the setup function where the serial port is

    initialised,
    attachInterrupt(0, rpm, RISING); //and the interrupt is attached
}
// the loop() method runs over and over again,
// as long as the Arduino has power
void loop ()
{
    NbTopsFan = 0;   //Set NbTops to 0 ready for calculations
    sei();      //Enables interrupts
    delay (1000);   //Wait 1 second
    cli();      //Disable interrupts
    Calc = (NbTopsFan * 60 / 7.5); //(Pulse frequency x 60) / 7.5Q, = flow rate

    in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

Puedes consultar nuestro foro para más detalles sobre [Lectura de la velocidad de flujo de agua con el Sensor de Flujo de Agua](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

##  Diagrama de Cableado

El diámetro externo de la rosca que usan las conexiones es de 1.4mm.

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Wfs-wiring.jpg)

##  Tabla de Salida

Frecuencia de pulso (Hz) en Prueba Horizontal = 7.5Q, Q es la velocidad de flujo en L/min. (Resultados en rango de +/- 3%)

<table>
  <tr>
    <td width="400px">Nivel alto de pulso de salida</td>
    <td width="400px">Voltaje de señal &gt;4.5 V( entrada DC 5 V)</td>
  </tr>
  <tr>
    <td>Nivel bajo de pulso de salida</td>
    <td>Voltaje de señal &lt;0.5V( entrada DC 5V)</td>
  </tr>
  <tr>
    <td>Precisión</td>
    <td>3% (Velocidad de flujo de 1L/min a 10L/min)</td>
  </tr>
  <tr>
    <td>Ciclo de trabajo de señal de salida</td>
    <td>40%～60%</td>
  </tr>
</table>

##  Recursos

*   [Hoja de datos del sensor de flujo de agua.pdf](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)

*   [Lectura de la tasa de flujo de agua con sensor de flujo de agua](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [Visualización de la tasa de flujo de agua en LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [hoja de datos del material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Soporte Técnico y Discusión de Productos
si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>