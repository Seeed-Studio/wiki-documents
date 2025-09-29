---
title: Sensor de flujo de agua G3-4
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/G3-4_Water_Flow_sensor/
slug: /es/G3-4_Water_Flow_sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/P21408651.jpg)

El sensor de flujo de agua consiste en un cuerpo de válvula de plástico, un rotor de agua y un sensor de efecto Hall. Cuando el agua fluye a través del rotor, el rotor gira. Su velocidad cambia con diferentes tasas de flujo. El sensor de efecto Hall emite la señal de pulso correspondiente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)]( https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151)

## Especificaciones

---
<table>
  <tbody>
    <tr>
      <td>Voltaje de trabajo mínimo</td>
      <td>DC 4.5V</td>
    </tr>
    <tr>
      <td>Corriente de trabajo máxima</td>
      <td>15mA(DC 5V)</td>
    </tr>
    <tr>
      <td width="400px">Voltaje de trabajo</td>
      <td width="400px">5V～24V</td>
    </tr>
    <tr>
      <td>Rango de tasa de flujo</td>
      <td>1～60L/min</td>
    </tr>
    <tr>
      <td>Capacidad de carga</td>
      <td>≤10mA(DC 5V)</td>
    </tr>
    <tr>
      <td>Temperatura de operación</td>
      <td>≤80℃</td>
    </tr>
    <tr>
      <td>Temperatura del líquido</td>
      <td>≤120℃</td>
    </tr>
    <tr>
      <td>Humedad de operación</td>
      <td>35%～90%RH</td>
    </tr>
    <tr>
      <td>Presión del agua</td>
      <td>≤2.0MPa</td>
    </tr>
    <tr>
      <td>Temperatura de almacenamiento</td>
      <td>-25℃～+80℃</td>
    </tr>
    <tr>
      <td>Humedad de almacenamiento</td>
      <td>25%～95%RH</td>
    </tr>
  </tbody>
</table>

## Dimensiones Mecánicas

---

### Componentes del Sensor

<table>
  <tbody>
    <tr>
      <th>No.</th>
      <th>Nombre</th>
      <th>Cantidad</th>
      <th>Material</th>
      <th>Nota</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={200}>1</td>
      <td width={150}>Cuerpo de válvula</td>
      <td width={150}>1</td>
      <td width={150}>PA66+33% fibra de vidrio</td>
      <td width={150}></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={200}>2</td>
      <td width={150}>Perla de acero inoxidable</td>
      <td width={150}>1</td>
      <td width={150}>Acero inoxidable SUS304</td>
      <td width={150}></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>3</td>
      <td>Eje</td>
      <td>1</td>
      <td>Acero inoxidable SUS304</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>4</td>
      <td>Impulsor</td>
      <td>1</td>
      <td>POM</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>5</td>
      <td>Imán anular</td>
      <td>1</td>
      <td>Ferrita</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>6</td>
      <td>Anillo intermedio</td>
      <td>1</td>
      <td>PA66+33% fibra de vidrio</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>7</td>
      <td>Anillo de sellado O</td>
      <td>1</td>
      <td>Caucho</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>8</td>
      <td>Anillo de sellado electrónico</td>
      <td>1</td>
      <td>Caucho</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>9</td>
      <td>Cubierta</td>
      <td>1</td>
      <td>PA66+33% fibra de vidrio</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>10</td>
      <td>Tornillo</td>
      <td>4</td>
      <td>Acero inoxidable SUS304</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>11</td>
      <td>Cable</td>
      <td>1</td>
      <td>1007 24AWG</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Ejemplo de Uso

---
<font>Nota: Este ejemplo está extraído del foro, el cual fue realizado por Charles Gantt. Gracias por su contribución. Veamos cómo funciona.</font>

### Lectura de Caudal de Agua con Sensor de Flujo de Agua

Esta es parte de un proyecto en el que he estado trabajando y pensé que lo compartiría aquí ya que ha habido algunos hilos sobre cómo leer el caudal de agua en litros por hora usando el Sensor de Flujo de Agua que se encuentra en el Depósito de Seeed Studio. Utiliza una rueda giratoria simple que pulsa un sensor de efecto hall. Al leer estos pulsos e implementar un poco de matemáticas, podemos leer el caudal de líquidos con una precisión del 3%. Las roscas son G3/4 simples, por lo que encontrar extremos con púas no será tan difícil.

**Instalación de Hardware**

Necesitarás Seeeduino / Arduino, Sensor de Flujo de Agua, resistor de 10K, una protoboard y algunos cables jumper.

Cablear el Sensor de Flujo de Agua es bastante simple. Hay 3 cables: Negro, Rojo y Amarillo.
Negro al pin de tierra del Seeeduino
Rojo al pin de 5v del Seeeduino
El cable amarillo necesitará ser conectado a un resistor pull up de 10k. y luego al pin 2 en el Seeeduino.

Aquí hay un diagrama de fritzing que hice para mostrarte cómo cablearlo todo.

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Una vez que lo tengas cableado necesitarás subir el siguiente código a tu Seeeduino. Una vez que esté subido y tengas algo de fluido fluyendo a través del Sensor de Flujo de Agua, puedes abrir el monitor serial y mostrará el caudal, refrescándose cada segundo.

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
    Calc = (NbTopsFan * 60 / 5.5); //(Pulse frequency x 60) / 5.5Q, = flow rate

    in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

Puedes consultar nuestro foro para más detalles sobre [Lectura de Caudal de Agua con Sensor de Flujo de Agua](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

## Diagrama de Cableado

---
El diámetro externo de la rosca que usan las conexiones es de 1.4mm.

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Wfs-wiring.jpg)

## Tabla de Salida

---
Frecuencia de pulso (Hz) en Prueba Horizontal = 5.5Q, Q es el caudal en L/min. (Resultados en rango de +/- 3%)

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
    <td>3% (Caudal de 1L/min a 10L/min)</td>
  </tr>
  <tr>
    <td>Ciclo de trabajo de señal de salida</td>
    <td>40%～60%</td>
  </tr>
</table>

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/G34_Flow_rate_to_frequency.jpg)

## FAQ

---
Aquí está el FAQ de Sensores, las personas pueden ir aquí para encontrar preguntas y respuestas para este tipo de productos.

**¿De qué materiales está hecho el sensor de flujo de agua?**

Nylon con fibra, evitando ácidos fuertes y bases fuertes.

**¿Es seguro el sensor de flujo de agua para agua potable?**

Sí, ha sido usado en máquinas dispensadoras de agua.

## Recursos

---

* [Lectura de la tasa de flujo de agua con Sensor de Flujo de Agua](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

* [Visualización de la tasa de flujo de agua en LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

* [hoja de datos para el material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Proyectos Relacionados

---
Es una lástima que no tengamos ninguna demostración sobre el Sensor de Flujo de Agua G3/4 en la [Recipe](https://www.seeedstudio.com/recipe/) aún.

¡Publica tu increíble proyecto sobre el Sensor de Flujo de Agua G3/4 para <font color="#FF0000">ganar un Cupón de $100!</font>. Por favor siéntete libre de contactarnos: [recipe@seeed.cc](mailto:recipe@seeed.cc)

Aquí presentamos algunos proyectos sobre [Grove-Water Sensor](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html).

### Qué es Grove - Water Sensor

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Twig-Water_Sensor.jpg)

Este módulo sensor de agua es parte del sistema Twig. Puedes usarlo con los pines analógicos para detectar la cantidad de contacto inducido por agua entre las trazas de tierra y del sensor.

Funciona teniendo una serie de trazas expuestas conectadas a tierra y entrelazadas entre las trazas de tierra están las trazas del sensor.

Las trazas del sensor tienen una resistencia pull-up débil de 1 MΩ. La resistencia llevará el valor de la traza del sensor a alto hasta que una gota de agua cortocircuite la traza del sensor a la traza de tierra.

Este circuito funcionará con los pines I/O digitales de tu Arduino.

### Arduino Plant Warden

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/552c2c4f2e5a8.jpg)

Este proyecto usa Grove - Water Sensor para crear una solución simple pero efectiva para regar plantas.

Cómo funciona:

* Muestra lecturas del sensor de agua y sensor de temperatura en pantalla OLED

* Envía alerta y activa un controlador de bomba cuando el agua está bajo el umbral.

* Proporciona la variación en color mediante 10 LEDs RGB.

[**Quiero hacerlo.**](https://www.seeedstudio.com/recipe/102-arduino-plant-warden.html)

[**Más Proyectos Increíbles con Water Sensor**](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

### Comparte Tus Proyectos Increíbles con Nosotros

Nacido con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.

Y solo por esto, la comunidad de código abierto puede ser tan próspera como es hoy.

No importa qué eres y qué has hecho, hacker, maker, artista o ingeniero.

Mientras comiences a compartir tus trabajos con otros, estás siendo parte de la comunidad de código abierto y estás haciendo tus contribuciones.

Ahora comparte tus proyectos increíbles con nosotros en [Recipe](https://www.seeedstudio.com/recipe/), y gana una oportunidad de convertirte en Usuario Principal de Seeed.

* Los Usuarios Principales, son aquellos que muestran alto interés en los productos Seeed y hacen contribuciones significativas en Recipe.
* Cooperamos con nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier nuevo producto de Seeed antes de su lanzamiento oficial, y a cambio esperamos retroalimentación valiosa de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y en la mayoría de los casos cuando nuestros Usuarios Principales tienen algunas buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios PCBA así como soporte técnico. Además, una mayor cooperación comercial con los Usuarios Principales es altamente posible.

<font color="#FF0000">Obtén más información sobre Usuario Principal, por favor envía un email a:</font> [recipe@seeed.cc](mailto:recipe@seeed.cc)

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
