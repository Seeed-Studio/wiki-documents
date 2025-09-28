---
description: Grove - Starter Kit Plus
title: Grove - Starter Kit Plus
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Starter_Kit_Plus
last_update:
  date: 1/13/2023
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Starter_Kit_Plus.jpeg)

¡Bienvenido al mundo de Grove! Grove es una colección de varios sensores y actuadores modulares que te ayudan a sumergirte y disfrutar del mundo electrónico sin complicaciones. Antes de discutir esos módulos Grove uno por uno, necesitas sentarte y completar algunas preparaciones.

**1. ¿Qué es Arduino?**

Arduino es una plataforma de desarrollo de código abierto flexible y fácil de aprender que goza de gran fama entre makers, geeks y artistas interactivos. Encendió la prosperidad del movimiento maker en curso. Toneladas de proyectos creativos cobran vida alrededor de Arduino y su comunidad colaborativa, incluyendo nuestro sistema Grove. Para comenzar con Arduino, necesitas tener uno primero. Arduino y sus clones están disponibles en innumerables sitios web e incluso tiendas minoristas. Una búsqueda en Google es suficiente para conseguir uno.

**2. Instalación del IDE de Arduino**

Arduino es también el nombre de un IDE de programación basado en C/C++. Después de obtener tu Arduino, debes instalar el IDE. Dependiendo de la versión del SO, la instalación específica varía. Afortunadamente, el equipo de Arduino nos proporciona una guía de instalación detallada para la mayoría de sistemas operativos:

[https://arduino.cc/en/Guide/HomePage](https://arduino.cc/en/Guide/HomePage)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Arduino_1.jpg)

**3. Referencia del Lenguaje**

¿Pero qué pasa si no tienes idea de qué se trata el lenguaje de programación? El equipo de Arduino también proporciona un sitio web bueno y completo para que aprendas:

[https://arduino.cc/en/Reference/HomePage](https://arduino.cc/en/Reference/HomePage)

Ahora te has preparado para la exploración de Grove.

### 1. Introducción al Grove Base Shield

El Grove base shield se conecta a un Arduino y es la base del sistema Grove. Todos los puertos I/O del Arduino están expuestos y adaptados en 22 conectores Grove que incluyen I/O digital, I/O analógico y puertos especializados (I2C, SPI, UART).

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-base_shield_v1.3.jpeg)

En el centro, rodeados por las líneas amarillas, están los 13 puertos I/O digitales. Estos pueden usarse para leer y controlar módulos Grove digitales, como el sensor de luz y LEDs. Algunos de los puertos I/O digitales también pueden usarse como salidas PWM (modulación por ancho de pulso). Al generar ondas PWM, el Arduino puede controlar el movimiento de un motor paso a paso o desvanecer un LED. Dentro de las líneas verdes, en el lado izquierdo, están los 5 puertos de entrada analógica. Las entradas analógicas se usan típicamente para leer sensores analógicos, como un potenciómetro o un sensor de temperatura, pero estos puertos también pueden usarse como puertos I/O digitales. Por último, los puertos especializados están delineados en rojo: dos puertos I2C, un puerto SPI y un puerto UART. Usarás estos puertos especiales con módulos Grove más sofisticados, como el acelerómetro de 3 ejes y el módulo Bluetooth serial.

Los sensores compatibles con Grove contenidos en este paquete usarán uno de los siguientes puertos: un puerto digital, un puerto analógico o un puerto I2C. Consulta las instrucciones de cableado y el código de ejemplo a continuación para cada sensor Grove. Diez cables Grove están incluidos en este paquete. Simplemente conecta los cables Grove a los sensores y al base shield. Esto permite operaciones plug and play sin soldadura.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/GroveCable.jpg)

### 2. Grove – Button(P)**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Bgpushb1.jpg)

**Descripción**

Sirviendo como un botón ubicuo, este es una parte básica para manos perezosas. Solo conéctalo al base shield. Entonces aquí tienes un botón limpio sin cables.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/ButtonPicture.jpg)

Este ejemplo te muestra cómo encender o apagar un LED a través de este botón.

```
<pre>int button = 3;   //attach a button to digital pin 3
int LED = 7;      //attach an LED to digital pin 7

void setup()
{
    pinMode(button, INPUT);  //define button an INPUT device
    pinMode(LED, OUTPUT);    //define LED an OUTPUT device
}

void loop()
{
    int buttonState = digitalRead(button);  //read the status of the button
    if(buttonState == 1)
    digitalWrite(LED,1);
    else
    digitalWrite(LED,0);
}</pre>
```

**Consejos**

Este es un botón momentáneo. Eso significa que solo emite HIGH cuando se presiona. Y una vez liberado, ya no emite HIGH sino LOW. Esta es una característica favorita para proyectos como codificadores Moss, pero si prefieres un botón pulsador estable, continúa con el Grove – Switch(P) a continuación.

### 3. Grove – Switch(P)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/SwitchP.jpg)

**Descripción**

Este interruptor es un mini SPDT deslizante. Puedes cambiar la señal a LOW o HIGH a través de él. Diferente del Grove – Button(P) anterior, este emite estados estables.
**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Switch1.jpg)

Puedes reemplazar totalmente el Grove – Button(P) con este interruptor sin modificar una línea en su ejemplo.

**Consejos**

"P" significa "montaje en panel". Para los módulos Grove que incluyen una "P" en su nombre, el objetivo de diseño es una interfaz humana limpia y sin cables.

### 4. Grove – Touch Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/TouchSensor.jpg)

**Descripción**

Este sensor táctil es otro sustituto para un botón común. Cuando tocas el área circular en esta almohadilla, emitirá HIGH. Mejor que el botón, el sensor táctil no tiene problema de desgaste.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Touch1.jpg)

Puedes reemplazar totalmente el Grove – Button(P) con este interruptor sin modificar una línea en su ejemplo.

**Consejos**

Este sensor táctil mide el cambio de capacitancia en su área sensible para determinar su salida. Así que ya sea que toques la almohadilla en la parte frontal o trasera, el resultado sigue siendo el mismo. Si necesitas una versión "P", ¡simplemente dale la vuelta y listo!

### 5. Grove – Magnetic Switch

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Magnetic_Switch.jpg)

**Descripción**

El interruptor magnético Grove detecta la presencia de un imán. Utiliza un CT10, un interruptor de un polo, una vía. Los interruptores magnéticos (también conocidos como interruptores Reed) se usan en sensores de puertas y ventanas para sistemas de alarma antirrobo, laptops modernas para detectar cuando la tapa está cerrada, y sensores de velocidad en ruedas de bicicleta. Cuando el campo magnético ambiental alcanza su umbral, emitirá HIGH en su pin de señal.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/MagneticSwitch1.jpg)

Puedes reemplazar totalmente el Grove – Button(P) con este interruptor sin modificar una línea en su ejemplo.

**Consejos**

En algunas aplicaciones, los interruptores magnéticos han reemplazado a los interruptores mecánicos tradicionales y tienen menos desgaste.

### 6. Grove – Red LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-LED.jpg)

**Descripción**

El LED es la parte más familiar para principiantes, sin "una de". Los usamos para indicar, para crear efectos de luz y demás. Este kit incluye LEDs de 3 colores para satisfacer tu necesidad básica de visualización y demostración.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/LEDKit.jpg)

Ya usamos un LED como indicador en los ejemplos anteriores. Y aquí hagamos algunos efectos de luz más allá de la simple operación de encendido/apagado, para desvanecer un LED.

```
<pre>/* This is an example code from Arduino, you can open it via this path in Arduino IDE: File --> Example --> 1.Basic --> Fade */

int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

void setup()
{
    // declare pin 9 to be an output:
    pinMode(9, OUTPUT);
}

void loop()
{
    // set the brightness of pin 9:
    analogWrite(9, brightness);
    // change the brightness for next time through the loop:
    brightness = brightness + fadeAmount;
    // reverse the direction of the fading at the ends of the fade:
    if (brightness == 0 || brightness == 255)
    {
        fadeAmount = -fadeAmount ;
    }
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
}</pre>
```

**Consejos**

Esta serie de LED tiene 6 colores para satisfacer diferentes preferencias. Todos son capaces de "Montaje en Panel" y los otros LEDs no incluidos en este kit son:

1. Grove – LED Púrpura(3mm);
2. Grove – LED Blanco(5mm);
3. Grove – LED Flash Multicolor(5mm).

### 7. Grove – Zumbador

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grovebuzzer.jpg)

**Descripción**

El zumbador, o altavoz piezoeléctrico, es probablemente tu primer componente electrónico que emite sonido. Además de ser usado como alarma o indicador, el botón es totalmente capaz de cantar una canción. ¡Pruébalo y diviértete con él!

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/BuzzerKit1.jpg)

Este es un breve ejemplo de Oomlout.com, que te reproduce una canción de cuna familiar – "Twinkle Twinkle Little Star".

```
<pre>/* Melody
 * (cleft) 2005 D. Cuartielles for K3
 *
 * This example uses a piezo speaker to play melodies.  It sends
 * a square wave of the appropriate frequency to the piezo, generating
 * the corresponding tone.
 *
 * The calculation of the tones is made following the mathematical
 * operation:
 *
 *       timeHigh = period / 2 = 1 / (2 * toneFrequency)
 *
 * where the different tones are described as in the table:
 *
 * note  frequency  period  timeHigh
 * c          261 Hz          3830  1915
 * d          294 Hz          3400  1700
 * e          329 Hz          3038  1519
 * f          349 Hz          2864  1432
 * g          392 Hz          2550  1275
 * a          440 Hz          2272  1136
 * b          493 Hz          2028 1014
 * C         523 Hz         1912  956
 *
 * https://arduino.cc/en/Tutorial/Melody
 */

int speakerPin = 9;

int length = 15; // the number of notes
char notes[] = "ccggaagffeeddc "; // a space represents a rest
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(speakerPin, HIGH);
        delayMicroseconds(tone);
        digitalWrite(speakerPin, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}

void setup()
{
    pinMode(speakerPin, OUTPUT);
}

void loop() {
    for (int i = 0; i < length; i++) {
        if (notes[i] == ' ')
        {
            delay(beats[i] * tempo); // rest
        }
        else
        {
            playNote(notes[i], beats[i] * tempo);
        }

        // pause between notes
        delay(tempo / 2);
    }
}</pre>
```

**Consejos**

¿Cómo funciona el zumbador piezoeléctrico? Usualmente hay dos obleas cerámicas en cada zumbador piezoeléctrico. Cuando se les aplica voltaje, se atraen o se rechazan entre sí. La vibración del aire causada por el movimiento de estas obleas emite sonido. Cuando la frecuencia de vibración cambia, la frecuencia del sonido cambiará también.

### 8. Grove – Vibrador

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Gvib.jpg)

**Descripción**

Este es un motor de vibración en miniatura adecuado para indicadores no audibles. Cuando se establece en Alto, este motor puede crear el efecto de vibración igual que el modo de vibración de tu teléfono.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Vibrator1.jpg)

Puedes usarlo totalmente como un LED, pero también puedes crear algunos ritmos con él. Sube el ejemplo del zumbador a este vibrador y observa la versión de vibración de "Twinkle Twinkle Little Star".

**Consejos**

La potencia de una unidad es bastante limitada. ¿Quieres algo más grande? Una matriz de vibradores vale la pena intentar.

### 9. Grove – Sensor de Ángulo Rotatorio

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Rotary_Angle_Sensor.jpg)

**Descripción**

Este es un potenciómetro rotatorio lineal de 10Kohm. Tiene un rango activo de 300 grados. También diseñado como un dispositivo HID, se añadió la característica de "montaje en panel". ¡Pero antes de convertirse en un HID encantador y amigable, haz bricolaje con una tapa rotatoria para él!

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Rotaty1.jpg)

Este ejemplo te muestra cómo leer el sensor de ángulo rotatorio.

```
<pre>int potentiometer = 0;

void setup()
{
    Serial.begin(9600); //set the serial communication frequency at 9600 bits per sec
    pinMode(potentiometer, INPUT);
}

void loop()
{
    int value = analogRead(potentiometer);
    Serial.println(value); //print the value on the serial monitor screen
    delay(1000); //wait 1000ms before printing next value
}</pre>
```

**Consejos**

El potenciómetro rotativo se ve bastante similar al codificador rotativo. Pero en realidad son totalmente diferentes.
Funcionalmente, el potenciómetro rotativo es esencialmente un potenciómetro deslizante, solo que en forma circular. Refleja la posición de manera analógica como lo hace un potenciómetro deslizante. Pero el codificador rotativo cuenta el ángulo que rotó tomando notas, digamos un clic, y luego emite los datos procesados por el chip en la placa de manera analógica o digital.

También puedes notar la diferencia en su apariencia exterior. El potenciómetro rotativo tiene un rango activo, digamos 300 grados. Pero el codificador rotativo puede simplemente girar y girar en una dirección.

### 10. Grove - Sensor de Sonido

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Sound_Sensor.jpg)

**Descripción**

El sensor de sonido Grove es un micrófono eléctrico que permite a tu proyecto responder a los sonidos ambientales. La placa contiene un potenciómetro para controlar el nivel de entrada de sonido.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Sound1.jpg)

Este ejemplo establece un umbral para un LED. Cuando la intensidad del sonido ambiental alcanza el umbral preestablecido, el LED se enciende.

```
<pre>int ledPin = 9;                       //attach a LED to Digital 12
int thresholdValue = 0;                 // the threshold to turn on or off the LED

void setup()
{
    pinMode(ledPin, OUTPUT);          //set the LED on Digital 12 as an OUTPUT
}

void loop()
{
    int sensorValue = analogRead(A0); //read the sensorValue on Analog 0
    if(sensorValue>thresholdValue)
    digitalWrite(ledPin,HIGH);
    delay(200);
    digitalWrite(ledPin,LOW);
}</pre>
```

**Consejos**

El micrófono eléctrico recoge la intensidad del sonido para todas las frecuencias. Y el potenciómetro actúa como el portero. Cuando lo giras completamente en sentido horario, deja pasar todo, y cuando lo giras completamente en sentido antihorario, nada puede pasar.

### 11. Grove – Sensor de Luz (P)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Light_SensorP1.jpg)

**Descripción**

El sensor de luz, también conocido como resistor dependiente de la luz (LDR), es un sensor comúnmente utilizado en una amplia variedad de aplicaciones desde proyectos DIY hasta automatización industrial. Típicamente la resistencia del sensor de luz disminuye cuando la intensidad de luz ambiental aumenta.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Light1.jpg)

Este ejemplo encenderá un LED cuando la intensidad de luz caiga por debajo del umbral preestablecido. El sensor de luz está conectado al pin analógico 0 de Arduino (el conector Grove analógico inferior izquierdo) y el LED está conectado al conector digital Grove 12 en el shield base.

```
<pre>int ledPin=12;                  //attach a LED to Digital 12
int thresholdvalue=400;       //the threshold to turn on or off the LED

void setup()
{
    pinMode(ledPin,OUTPUT);           //set the LED on Digital 12 as an OUTPUT
}

void loop()
{
    int sensorValue = analogRead(0); //the light sensor is attached to analog 0
    if(sensorValue<thresholdvalue)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}</pre>
```

**Consejos**

La salida del sensor de luz analógico varía de 0 a 1023, pero la salida no es lineal con la intensidad de la luz ambiental. A continuación se muestra una tabla para ayudarte a entender lo que realmente significa la salida.

<table cellspacing="0" width="80%">
  <tbody>
    <tr>
      <th scope="col">Valor del Sensor</th>
      <th scope="col">Iluminancia (LUX)</th>
      <th scope="col">Descripción (adaptado de Wikipedia)</th>
    </tr>
    <tr>
      <td>100</td>
      <td>&lt;1</td>
      <td></td>
    </tr>
    <tr>
      <td>200</td>
      <td>~1</td>
      <td>Luna llena en el cenit en latitudes tropicales</td>
    </tr>
    <tr>
      <td>300</td>
      <td>~3</td>
      <td>Crepúsculo en la ciudad</td>
    </tr>
    <tr>
      <td>400</td>
      <td>~6</td>
      <td></td>
    </tr>
    <tr>
      <td>500</td>
      <td>~10</td>
      <td></td>
    </tr>
    <tr>
      <td>600</td>
      <td>~15</td>
      <td></td>
    </tr>
    <tr>
      <td>700</td>
      <td>~35</td>
      <td>Sala de estar familiar</td>
    </tr>
    <tr>
      <td>800</td>
      <td>~80</td>
      <td>Iluminación de edificio de oficinas en el pasillo</td>
    </tr>
    <tr>
      <td>900</td>
      <td>&gt;100</td>
      <td>Día muy oscuro y nublado</td>
    </tr>
  </tbody>
</table>

### 12. Grove – Sensor de Temperatura

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Bgtemp1.jpg)

**Descripción**

El sensor de temperatura Grove utiliza un termistor para determinar la temperatura ambiente. El rango de detección de este sensor está entre -40 a 125 grados Celsius con una precisión de ±1.5℃. Sin embargo, no emite el valor de temperatura directamente. Para obtener el valor específico de temperatura, utilizaremos la fórmula en el código a continuación.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/TemperatureKit1.jpg)

Este ejemplo muestra cómo convertir la salida cruda del sensor en el valor específico de temperatura. Puedes ver los datos de salida en Celsius en el monitor serie.

```
<pre>int a;
int del=1000;                // duration between temperature readings
float temperature;
int B=3975;                  //B value of the thermistor
float resistance;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    a=analogRead(0);
    resistance=(float)(1023-a)*10000/a;
    temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
    delay(del);
    Serial.println(temperature);
}</pre>
```

**Consejos**

¿De dónde viene la función intrínseca para encontrar la temperatura? Es una variación de la ecuación de Steinhart-Hart, una aproximación ampliamente utilizada que da T (temperatura) como una función de R (resistencia del termistor). La ecuación original es:

Los tres parámetros en la ecuación anterior pueden describirse por un parámetro: B. Dentro de la industria, las personas caracterizan los termistores por el valor B, como se define en nuestro ejemplo. Así que la función incorporada es en realidad una variación basada en la ecuación del parámetro B.

### 13. Grove – Relé

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Twig-Relay1.jpg)

**Descripción**

¡El relé es una herramienta útil para amplificar la capacidad de control de tu Arduino! Alimenta la señal de control a través de la interfaz Grove, y el relé controlará la apertura/cierre del circuito externo que está conectado a los terminales de tornillo. ¡El voltaje del circuito externo puede llegar hasta 220V! ¡Así que toma este relé y comienza algunos proyectos realmente desafiantes!

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/RelayKit1.jpg)

A continuación se muestra un ejemplo de usar un botón para controlar el relé.

```
<pre>const int buttonPin = 3;     // the button is attached to digital pin 3
const int relayPin =  9;     // the relay is attached to digital pin 9
int buttonState = 0;

void setup()
{
    pinMode(relayPin, OUTPUT);
    pinMode(tiltPin, INPUT);
}

void loop()
{
    // read the state of the button:
    buttonState = digitalRead(buttonPin);
    if (buttonState == 1)   digitalWrite(relayPin, HIGH);
    else   digitalWrite(relayPin, LOW);
    delay(10);
}</pre>
```

**Consejos**

El relé es un interruptor mecánico controlado electrónicamente. El tamaño de uno varía según su capacidad de transportar corriente. Cuanto más grande es un relé (esencialmente solo la parte de la caja de plástico), mayor es la corriente que puede transportar.

### 14. Grove – Terminal de Tornillo

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-screw_terminal.jpg)

**Descripción**

Esta es una pequeña herramienta en caso de que necesites fusionar el sistema de prototipado rápido Grove con otros circuitos de prototipado. Aprieta los cables de señal que necesites a los terminales de tornillo. Entonces puedes usar el circuito externo como un módulo Grove común.

### 15. Grove – Servo

[[![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Servo.jpg)

**Descripción**

¡El servo es absolutamente un dispositivo de control de movimiento divertido para jugar! A través de una biblioteca de servo integrada en Arduino IDE, puedes ubicarlo en cualquier posición entre 0 a 180 grados. Con 4 ejes de diferentes formas incluidos, este servo está listo para impulsar un pequeño ventilador, levantar un objeto, o imitar la manecilla de un reloj.

**Ejemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Servo1.jpg)

El servo es un tipo de actuador analógico. Sin embargo, Arduino no puede generar señal analógica. Para aproximar la señal analógica requerida por el actuador analógico, Arduino adopta PWM (Modulación por Ancho de Pulso) para hacer frente a esto. No todos los puertos Grove pueden usarse como salidas analógicas. Los puertos disponibles son D3, D5, D6, D9, D10 y D11. Aquí hay un ejemplo de cómo usamos un potenciómetro para controlar la posición del servo.

```
<pre>#include <Servo.h>
Servo groveServo; //create a object

int potentiometer = 0;
int shaft;

void setup()
{
    groveServo.attach(3); //the servo is attached to D3
    pinMode(potentiometer, INPUT);
}

void loop()
{
    shaft = analogRead(potentiometer);
    shaft = map(shaft, 0, 1023, 0, 179);
    //analog input data range from 1~1023, but servo
    groveServo.write(shaft);             //only reflects to data ranging from 1~179.
    delay(15);
}</pre>
```

**Consejos**

Dentro de la caja de engranajes hay un conjunto de engranajes. Cuando el servo está funcionando, no trates bruscamente de invertir su dirección con la mano, porque esto podría causar daño permanente a los engranajes.

## Proyectos de Demostración

---

### 1. Una Taza de Flores

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/A_Cup_of_Flower.jpg)

**Descripción**

¿Te gustaría una taza de flores para aliviar tu corazón agotado? Este proyecto está compuesto por Grove – LED y un Grove – Sensor Táctil. Al tocar el sensor, esos encantadores LEDs te brindarán un efecto de luz cálido y cómodo.

**Lista de Materiales**

<dl>
  <dd>1. Arduino x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – LED x 6;</dd>
  <dd>4. Grove – Sensor Táctil x 1;</dd>
  <dd>5. Papel de color de 6 x 6cm x 6;</dd>
  <dd>6. Batería de 9V y clip para batería de 9V x 1.</dd>
</dl>

!!!Note
     El número de LEDs es arbitrario. Hay tres de ellos incluidos en el kit básico. Pero puedes aumentar o disminuir dependiendo del volumen de tu taza. Tengo una taza grande aquí, así que agregué tres más de nuestro sitio web.

**Pasos**

**1. Doblar los Capullos**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Fold_the_buds.jpg)

Elige un patrón de flor que te guste y sigue sus pasos para crear algunos de ellos. Una búsqueda en Google puede ayudar mucho para encontrar uno. Hay tantos aficionados y artistas del origami en Internet que les gusta compartir sus manualidades.

Elegí tulipán aquí, ¡pero girasol, rosa y lirio también suenan genial!

Al doblar el capullo, necesitas dejar un pequeño agujero en su botón para que el cable Grove pase a través.

**2. Configuración**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Set_up.jpg)

Conecta los capullos y el sensor táctil al Grove – Base Shield con el cable Grove de 10cm. Y luego sube el código a tu controlador.

```
<pre>void setup()
{
    pinMode(2, OUTPUT);
    pinMode(4, OUTPUT);
    pinMode(6, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(13, OUTPUT);
    pinMode(9, INPUT); //pin of touch sensor
}

void loop()
{
    int switchState = digitalRead(9);
    if(switchState == HIGH)
    {
        digitalWrite(2, HIGH);
        digitalWrite(4, HIGH);
        digitalWrite(6, HIGH);
        digitalWrite(7, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(13, HIGH);
    }
    else
    {
        digitalWrite(2, LOW);
        digitalWrite(4, LOW);
        digitalWrite(6, LOW);
        digitalWrite(7, LOW);
        digitalWrite(11, LOW);
        digitalWrite(13, LOW);
    }
    delay(100);
}</pre>
```

**3. Encender y Asentar**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Battery.jpg)

Usa una batería portátil de 9V para proporcionar energía a las flores y asiéntala en la taza. ¡Terminado! ¡Disfruta tu taza de flores!

### 2. ¡Cómo Te Va

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/How_you_doing.jpg)

(descargado de think.bigchief.it)

**Descripción**

¿Cómo saludas a un amigo? Big Chief diría "¿qué hay mejor que un apretón de manos?" Cuando uno de estos juguetes de papel Big Chief apoya su espalda contra el otro, ¡se agitarán para saludar!

**Lista de Materiales**

<dl>
  <dd>1. Arduini x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – Interruptor Magnético x 1;</dd>
  <dd>4. Grove – Vibrador x 1;</dd>
  <dd>5. Juguetes de papel x 2;</dd>
  <dd>6. Imán x 1;</dd>
  <dd>7. Batería de 9V y clip para batería de 9V x 1.</dd>
</dl>

:::note
    El número de LEDs es arbitrario. Hay tres de ellos contenidos en el kit básico. Pero puedes aumentar o disminuir dependiendo del volumen de tu taza. Tengo una taza grande aquí, así que agregué tres más de nuestro sitio web.
:::
**Pasos**

**1. ¡Imprímelo!**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Print_it_out.jpg)

Elige un patrón que te guste de Internet. Asegúrate de que haya suficiente espacio para un imán o un interruptor magnético más un vibrador. Igual que la flor de origami de arriba, puedes encontrar toneladas de ellos en Internet.

**2. Llena Los Órganos**

Concéntrate al cortar los juguetes de papel. Solo de esa manera puedes obtener uno limpio. Después de eso, es hora de llenarlos con algunos órganos.
Pegué un imán en la espalda del Big Chief A (¡llamémoslo así!). Lo pegué ahí con cinta adhesiva de doble cara.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck1.jpg)

Y para Big Chief B, pegué un interruptor magnético en su espalda, en la misma posición que A, y un vibrador en sus pies.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck2.jpg)

**3. Pégalos**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck3.jpg)

Sigue cuidadosamente las instrucciones en la hoja impresa. Conecta los cables Grove en los dos Módulos Grove que usamos en Big Chief B. Entonces obtendrás dos lindos juguetes de papel como los de arriba.

**4. Cargar Programa**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck4.jpg)

Carga el código de abajo a tu Arduino. Al hacer esto, les das vida.

```
<pre>void setup()
{
    pinMode(11, INPUT);
    pinMode(9, OUTPUT);
}

void loop()
{
    int sensorState = digitalRead(11);
    if (sensorState == 1) digitalWrite(9, HIGH);
    else digitalWrite(9, LOW);
    delay(100);
}</pre>
```

## Proyectos Relacionados

Si quieres hacer algunos proyectos increíbles con Grove - Starter Kit Plus, aquí tienes algunos proyectos de referencia.

Tenemos esta parte disponible en [geppetto](https://geppetto.seeedstudio.com/), diseño electrónico modular fácil con Seeed y Geppeto. Constrúyelo Ahora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

### Pantalla de Temperatura en Vivo Intel Edison

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Intel_Edison_Live_Temperature_Display.jpg)

Esta es una demostración de IoT hecha con Intel Edison y Grove - Starter Kit Plus.
Intel ha lanzado un kit de desarrollador Intel IoT que puedes obtener para ayudar a desarrolladores y técnicos a tener en sus manos un kit simple y comenzar a desarrollar aplicaciones para uso en el mundo cotidiano.

[<font color="#FF0000">**Quiero hacerlo.**</font>](https://www.seeedstudio.com/recipe/94-intel-edison-live-temperature-display.html)

### Comparte Tus Proyectos Increíbles con Nosotros

Nacido con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.

Y solo por esto, la comunidad de código abierto puede ser tan próspera como es hoy.

No importa lo que seas y lo que hayas hecho, hacker, maker, artista e ingenieros,

mientras comiences a compartir tus trabajos con otros,

estás siendo parte de la comunidad de código abierto y estás haciendo tus contribuciones.

Ahora comparte tus proyectos increíbles con nosotros en [Recipe](https://www.seeedstudio.com/recipe/), y gana la oportunidad de convertirte en Usuario Principal de Seeed.

- Los Usuarios Principales, son aquellos que muestran alto interés y contribuciones significativas en los productos de Seeed.
- Cooperamos con nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier nuevo producto de Seeed antes de su lanzamiento oficial, y a cambio esperamos comentarios valiosos de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y para la mayoría de los casos si nuestros Usuarios Principales tienen buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios de PCBA así como soporte técnico. Además, una mayor cooperación comercial con los Usuarios Principales es altamente posible.

<font color="#FF0000">Obtén más información sobre Usuario Principal por favor envía un email a: recipe@seeed.cc</font>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
