---
title: Sensor de Flujo de Agua G1/2 pulgada
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/G1_and_2_inch_Water_Flow_Sensor/
slug: /es/G1_and_2_inch_Water_Flow_Sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/flowsensor_LRG.jpg)

El sensor de flujo de agua consiste en un cuerpo de válvula de plástico, un rotor de agua y un sensor de efecto hall. Cuando el agua fluye a través del rotor, el rotor gira. Su velocidad cambia con diferentes tasas de flujo. El sensor de efecto hall emite la señal de pulso correspondiente.

**Seguimiento de Versiones**

|Revisión|	Descripciones|	Lanzamiento|
|---|---|---|---|
|v1.0|	Lanzamiento público inicial	|31 de mayo, 2010|
|v2.0|	Lanzamiento público 2.0|	05 de julio, 2010|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g12-water-flow-sensor-p-635.html?cPath=84_87&zenid=020999c566d2f31841dc54602b7d02ef)

## Especificaciones
---
|elementos|valor|
|---|---|
|Voltaje de Trabajo Mín.|DC 4.5V|
|Corriente de Trabajo Máx.|15mA(DC 5V)|
|Voltaje de Trabajo|5V～24V|
|Rango de Caudal|1～30L/min|
|Capacidad de Carga|≤10mA(DC 5V)|
|Temperatura de Operación|≤80℃|
|Temperatura del Líquido|≤120℃|
|Humedad de Operación|35%～90%RH|
|Presión del Agua|≤2.0MPa|
|Temperatura de Almacenamiento|-25℃～+80℃|
|Humedad de Almacenamiento|25%～95%RH|

## Dimensiones Mecánicas
---
Unidad:mm

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem1.png)

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem2.png)

## Componentes del Sensor
---

|No.	|Nombre|	Cantidad|	Material	|Nota|
|---|---|---|---|---|
|1|	Cuerpo de válvula	|1|	PA66+33% fibra de vidrio	||
|2|	Perla de acero inoxidable|	1|	Acero inoxidable SUS304	||
|3|	Eje	|1	|Acero inoxidable SUS304	||
|4|	Impulsor|	1|	POM	||
|5|	Imán anular	|1|	Ferrita	||
|6|	Anillo intermedio	|1|	PA66+33% fibra de vidrio	||
|7|	Anillo de sellado O	|1|	Caucho	||
|8|	Anillo de sellado electrónico	|1|	Caucho	||
|9|	Cubierta	|1|	PA66+33% fibra de vidrio	||
|10|	Tornillo	|4|	Acero inoxidable SUS304	|3.0*11|
|11	|Cable	|1	|1007 24AWG|||

## Ejemplo de Uso

:::note
    Este ejemplo está abstraído del foro, el cual fue realizado por Charles Gantt. Gracias por su contribución. Veamos cómo funciona.
:::

**Lectura de Caudal de Agua con Sensor de Flujo de Agua**

Esta es parte de un proyecto en el que he estado trabajando y pensé que lo compartiría aquí ya que ha habido algunos hilos sobre cómo leer el caudal de agua en litros por hora usando el Sensor de Flujo de Agua que se encuentra en el Depósito de Seeed Studio. Utiliza una rueda giratoria simple que pulsa un sensor de efecto hall. Al leer estos pulsos e implementar un poco de matemáticas, podemos leer el caudal del líquido con una precisión del 3%. Las roscas son G3/4 simples, por lo que encontrar extremos con púas no será tan difícil.

**Instalación de Hardware**

Necesitarás Seeeduino / Arduino, Sensor de Flujo de Agua, resistor de 10K, una protoboard y algunos cables jumper.

Conectar el Sensor de Flujo de Agua es bastante simple. Hay 3 cables: Negro, Rojo y Amarillo. Negro al pin de tierra del Seeeduino Rojo al pin de 5v del Seeeduino El cable amarillo necesitará ser conectado a un resistor pull up de 10k. y luego al pin 2 en el Seeeduino.

Aquí hay un diagrama de fritzing que hice para mostrarte cómo conectar todo.

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Una vez que lo tengas conectado necesitarás subir el siguiente código a tu Seeeduino. Una vez que esté subido y tengas algo de fluido fluyendo a través del Sensor de Flujo de Agua, puedes abrir el monitor serial y mostrará el caudal, refrescándose cada segundo.

**Programación**

```c
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

Puedes consultar nuestro foro para más detalles sobre la lectura de la tasa de flujo de agua con el Sensor de Flujo de Agua.

## Diagrama de Cableado
---

El diámetro externo de la rosca que usan las conexiones es de 1.4mm.
![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## Tabla de Salida
---

Frecuencia de pulso (Hz) en Prueba Horizontal = 7.5Q, Q es la tasa de flujo en L/min. (Resultados en rango de +/- 3%)

|elementos|valor|
|---|---|
|Nivel alto de pulso de salida|	Voltaje de señal &gt;4.5 V( entrada DC 5 V)|
|Nivel bajo de pulso de salida	|Voltaje de señal &lt;0.5V( entrada DC 5V)|
|Precisión	|3% (Tasa de flujo de 1L/min a 10L/min)|
|Ciclo de trabajo de señal de salida	|40%～60%|

## Proyectos Relacionados

Es una pena que no tengamos ninguna demostración sobre el Sensor de Flujo de Agua G1/2 en las [Recetas](https://community.seeedstudio.com/projects.html#recipe) aún.

Aquí presentamos algunos proyectos sobre [Grove-Water Sensor](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html).

**Qué es Grove - Water Sensor**

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Twig_-_Water_Sensor.jpg)

Este módulo sensor de agua es parte del sistema Twig. Puedes usarlo con los pines analógicos para detectar la cantidad de contacto inducido por agua entre las trazas de tierra y del sensor.

Funciona teniendo una serie de trazas expuestas conectadas a tierra y entrelazadas entre las trazas de tierra están las trazas del sensor.

Las trazas del sensor tienen una resistencia pull-up débil de 1 MΩ. La resistencia llevará el valor de la traza del sensor a alto hasta que una gota de agua cortocircuite la traza del sensor con la traza de tierra.

Este circuito funcionará con los pines de E/S digitales de tu Arduino.


**Arduino Plant Warden**

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/552c2c4f2e5a8.jpg)

Este proyecto usa Grove - Water Sensor para crear una solución simple pero efectiva para regar plantas.
Cómo funciona:
- Muestra lecturas del sensor de agua y sensor de temperatura en pantalla OLED
- Envía alerta y activa un controlador de bomba cuando el agua está bajo el umbral.
- Proporciona la variación en color mediante 10 LEDs RGB.


[Quiero hacerlo.](https://community.seeedstudio.com/project_detail.html?id=103)

[Más Proyectos Increíbles con Sensor de Agua](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

**Comparte Tus Proyectos Increíbles con Nosotros**

Nacidos con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.
Y solo por esto, la comunidad de código abierto puede ser tan próspera como es hoy.
No importa lo que seas y lo que hayas hecho, hacker, maker, artista o ingeniero.
Mientras comiences a compartir tus trabajos con otros, estás siendo parte de la comunidad de código abierto y estás haciendo tus contribuciones.

Ahora comparte tus proyectos increíbles con nosotros en [Recipe](https://community.seeedstudio.com/), y gana la oportunidad de convertirte en Usuario Principal de Seeed.

- Los Usuarios Principales, son aquellos que muestran alto interés en los productos Seeed y hacen contribuciones significativas en Recipe.

- Cooperamos with nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier nuevo producto de Seeed antes de su lanzamiento oficial, y a cambio esperamos retroalimentación valiosa de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y en la mayoría de los casos cuando nuestros Usuarios Principales tienen algunas buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios PCBA así como soporte técnico. Además, una mayor cooperación comercial con los Usuarios Principales es altamente posible.

Obtén más información sobre Usuario Principal, por favor envía un email a: recipe@seeed.cc

## Licencias
---

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](https://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## FAQ

Aquí está el FAQ de Sensores, las personas pueden ir aquí para encontrar preguntas y respuestas para este tipo de productos.

1. **¿De qué materiales está hecho el sensor de flujo de agua?**

  - Nylon con fibra, evitando ácidos fuertes y bases fuertes.

2. **¿Es seguro el sensor de flujo de agua para agua potable?**

  - Sí, ha sido usado en máquinas dispensadoras de agua.

## Recursos
---
- [Hoja de datos del sensor de flujo de agua.pdf](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)
- [Lectura de la tasa de flujo de agua con sensor de flujo de agua](https://community.seeedstudio.com/topic_detail.html?id=575#p3632)
- [Visualización de la tasa de flujo de agua en LCD](https://github.com/practicalarduino/WaterFlowGauge)
- [hoja de datos para el material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

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