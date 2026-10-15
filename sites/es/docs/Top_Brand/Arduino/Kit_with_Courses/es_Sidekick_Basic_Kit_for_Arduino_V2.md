---
description: Kit básico Sidekick para Arduino V2
title: Kit básico Sidekick para Arduino V2
keywords:
  - Kit con cursos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sidekick_Basic_Kit_for_Arduino_V2
sku: 110060025
last_update:
  date: 2/17/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/es/Sidekick_Basic_Kit_for_Arduino_V2/
---

<!-- ---
name: Sidekick Basic Kit for Arduino V2
category: Arduino
bzurl: https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html
oldwikiname:   Sidekick Basic Kit for Arduino V2
prodimagename:  BasicKit.jpg
surveyurl: https://www.research.net/r/Sidekick_Basic_Kit_for_Arduino_V2
sku:  110060025
--- -->
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/BasicKit.jpg)

El kit básico Sidekick para Arduino está diseñado para usarse con tu placa Arduino / Seeeduino / Seeeduino ADK / Maple Lilypad o cualquier placa MCU. Contiene todo lo necesario para que un usuario principiante conecte su ordenador a un Arduino. Incluye muchos de los accesorios más populares para proyectos DIY: como protoboard, cables jumper, LEDs de color, resistencias, zumbador, etc.
Todo esto viene en su propia caja práctica, fácil de transportar y con un desorden mínimo.

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Contenido del kit

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Basic_Kit_for_Arduino_Photo_11.jpg)

| Elemento                | Cantidad                       |
|-------------------------|--------------------------------|
| Protoboard              | 1                              |
| LED verde               | 5                              |
| LED rojo                | 5                              |
| LED RGB ánodo común     | 1                              |
| Condensador cerámico    | 10nF x 10 + 100nF x 10         |
| Condensador de aluminio | 100uF x 5                      |
| Resistencia             | 330R x 10 + 1k x 10 + 10k x 10 |
| Interruptor de inclinación | 1                           |
| Termistor               | 1                              |
| Sensor de luz ambiental | 1                              |
| Diodo                   | 1                              |
| Zumbador                | 1                              |
| Botón                   | 1                              |
| Interruptor             | 5                              |
| Mini servo              | 1                              |
| Potenciómetro con perilla | 1                            |
| Cable jumper para protoboard | 5x largos, 20 x cortos     |
| Caja                    | 4                              |

## Repaso de electrónica básica

**Corriente y voltaje**

La corriente es la tasa de flujo de carga eléctrica en un conductor. El voltaje es la diferencia de potencial (fuerza eléctrica impulsora) aplicada entre dos puntos para conducir corriente. La corriente se expresa en Amperios (A) y el voltaje en Voltios (V).

**Resistencia**

Las resistencias son obstáculos al flujo de corriente en un conductor. Se utilizan para limitar el flujo de corriente hacia un dispositivo electrónico como una lámpara. La oposición al flujo de corriente se expresa en Ohmios (Ω). Se dividen en **resistencia fija** y **resistencia variable (POT)**.

- **Conexión de resistencias**

    Las resistencias se pueden conectar de dos formas diferentes: en paralelo o en serie entre sí.

- **Resistencias en serie**

    Cuando las resistencias se conectan en serie, la resistencia equivalente total será igual a la suma de todos los valores de las resistencias en serie.

- **Resistencias en paralelo**

    En paralelo, el recíproco de la resistencia equivalente total es igual a la suma de los recíprocos de cada resistencia.

**Ley de Ohm**

Las relaciones entre corriente, voltaje y resistencia están regidas por la Ley de Ohm, que establece que "La corriente a través de un conductor (I amperios) entre dos puntos es directamente proporcional a la diferencia de potencial o voltaje entre los dos puntos (V voltios), e inversamente proporcional a la resistencia entre ellos (R ohmios)"
es decir, I = V / R. Por lo tanto, V = IR o R = V / I. El siguiente triángulo de la Ley de Ohm puede utilizarse para recordar la relación entre V, I y R. La línea vertical indica operación de multiplicación y la línea horizontal indica operación de división.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Ohm-s_law_triange.jpg)

por ejemplo: para conocer la corriente I, dividimos V entre R.

**Protoboard**

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Breadboard_.jpg)

La **protoboard** es un dispositivo de prototipado para circuitos electrónicos. Es muy útil para conectar componentes electrónicos y hacer un circuito sin soldar. La protoboard consiste en filas y columnas de orificios con contactos metálicos para insertar componentes. La protoboard suministrada con el kit básico Sidekick para Arduino está dispuesta en columnas de **2 X 30 de cinco orificios** y filas de **4 X veinticinco orificios**. Estos orificios están conectados internamente de la manera ilustrada a continuación.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Breadboard_Internal_Connections.jpg)

**Resistencias fijas**

Las resistencias suministradas con el kit básico están hechas de carbono y son de tipo valor fijo. El valor de la resistencia se marca mediante bandas de colores. Puedes obtener el valor a partir de la hoja de código de colores de resistencias.

- La _primera banda_ indica el **primer dígito** del valor de la resistencia.

- La _segunda banda_ indica el **segundo dígito**.

- La _tercera banda_ indica el valor del **multiplicador** de la resistencia.

- La _cuarta banda_ indica el **valor de tolerancia**.

**Potenciómetro (POT)**

El POT es una resistencia variable cuya resistencia puede cambiarse girando la perilla. Tiene tres terminales: los terminales en los lados ambilaterales de la resistencia están conectados a los extremos del conductor, que está hecho de material resistivo. El terminal central está conectado a un cursor que se mueve sobre el material resistivo. El valor de la resistencia cambia proporcionalmente a la posición de la perilla.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_POT.png)

**Termistores**

Los termistores son resistencias especiales cuya resistencia cambia con la temperatura que los rodea. Proporcionan una forma muy útil y conveniente de detectar la diferencia de temperatura.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Thermistor.JPG)

**Sensor de luz**

El sensor de luz detecta la intensidad de la luz ambiental y genera una señal que cambia según la cantidad de luz recibida. Puede utilizarse para detección de luz y proyectos relacionados con el brillo.
A diferencia de las fotorresistencias tradicionales, este sensor es un dispositivo semiconductor polarizado. Asegúrate de que el sensor esté conectado con la polaridad correcta al construir circuitos.

**Diodos emisores de luz**

Los LEDs se encenderán cuando estén polarizados en directo. Están encapsulados en una carcasa transparente y vienen en varios colores como rojo, verde y azul. Los LEDs están hechos de arseniuro fosfuro de galio y, al alterar las proporciones de arsénico y fósforo, se pueden obtener diferentes colores. Los LEDs monocromáticos tienen dos terminales: ánodo (+ve) y cátodo (-ve). Los LEDs tricolor tienen 4 terminales: un ánodo y 3 cátodos, uno para cada color. Los LEDs pueden utilizarse en paneles de visualización.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_RGB_LED_.JPG)

**Interruptor**

Los interruptores se utilizan para cerrar o abrir el circuito. Los interruptores suministrados con el kit básico son de dos tipos: pulsador e interruptor deslizante.

- **Interruptor pulsador**

    El circuito se cerrará mientras mantengas presionado el interruptor pulsador.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Push_Button_Switch_.JPG)

- **Interruptor deslizante**

    El interruptor deslizante es un interruptor simple de dos posiciones. Puede utilizarse para abrir o cerrar un circuito colocándolo en la posición adecuada.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Slide_Switch_.JPG)

- **Interruptor de inclinación**

    El interruptor de inclinación contiene dos terminales que se conectan al circuito; _cierra_ el circuito cuando está _inclinado horizontalmente_, mientras que _abre_ el circuito cuando está _inclinado verticalmente_.

**Condensadores**

Los condensadores se utilizan para almacenar carga eléctrica. Se clasifican en dos tipos diferentes: condensador electrolítico y condensador cerámico de disco. Los condensadores se expresan en microfaradios (uF).

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Capacitor.JPG)

- **Conexión del condensador**

    Los condensadores pueden conectarse en dos tipos de disposición en un circuito, como se muestra a continuación.

- **Condensadores en serie**

    La capacitancia equivalente total, cuando dos o más condensadores se conectan en serie entre sí, es igual a la suma de los recíprocos de los valores individuales de capacitancia.

- **Condensadores en paralelo**

    La capacitancia equivalente total, cuando dos o más condensadores se conectan en paralelo, es igual a la suma de las capacitancias individuales.

- **Condensadores electrolíticos**

    Los condensadores electrolíticos normalmente tienen un volumen pequeño y una gran capacitancia. Se clasifican en condensadores electrolíticos polarizados y no polarizados.
    Metales como aluminio, tántalo, vanadio y bismuto se utilizan para formar las láminas de ánodo y cátodo.

- **Condensadores cerámicos de disco**

    Los condensadores cerámicos utilizan un dieléctrico cerámico con finas películas metálicas como electrodos unidos a la cerámica. En el tipo de disco, la plata del condensador se fija en ambos lados de la cerámica para formar las placas conductoras. Los condensadores de disco se utilizan solo para valores pequeños de capacitancia.

**Zumbador**

Un zumbador es un dispositivo de señalización acústica, que puede ser mecánico, electromecánico o piezoeléctrico. Produce diversas señales de audio basadas en la oscilación del material utilizado en él. Se utilizan comúnmente en alarmas y temporizadores.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Buzzer.png)

Conecta la pata larga al voltaje positivo y la pata corta a tierra.

El zumbador se puede conectar a salidas digitales y emitirá un tono cuando la salida esté en alto. Alternativamente, se puede conectar a una salida analógica de modulación por ancho de pulso para generar varios tonos y efectos.

**Diodo**

Un diodo es un material semiconductor que conduce corriente solo en una dirección. Comienza a conducir solo cuando la tensión de alimentación es mayor que el _potencial de barrera_. Actúa como un interruptor cerrado en condición de polarización directa y actúa como un interruptor abierto cuando está polarizado en inversa. Los diodos se clasifican según el material semiconductor y se pueden usar para fabricar, como el diodo de unión PN, diodo zener, diodo emisor de luz, etc.

- **Polarización de un diodo**

    Aplicar voltaje a un diodo se llama polarizar un diodo. El diodo queda **polarizado directamente** cuando se aplica un voltaje de **alimentación positivo** a través de los terminales y comienza a conducir por encima de _0.7v para un diodo de silicio_ y _0.3v para un diodo de germanio_. Cuando se aplica un **voltaje negativo** a través de los terminales de un diodo, se dice que está**_polarizado en inversa_**. El diodo se daña cuando el voltaje de polarización inversa excede el voltaje de ruptura_._

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Diode.JPG)

**Mini Servo**

Los servos son motores de CC con engranajes y sistema de retroalimentación. Se utilizan en el mecanismo de accionamiento de robots.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Mini_Servo_Photo.jpg)

## Lecciones

**1. ¡Hola Mundo! : El LED intermitente**

- **Hardware**
  - Conecta un LED al Pin Digital 8 como se muestra a continuación. La resistencia de 330 Ohm limita la corriente que fluye hacia el LED.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_1LED_Blink.jpg)

- **Software**

  - Compila y sube el siguiente sketch:

```cpp
//Blink a LED connected to Digital Pin 8 via a 330 Ohm resitors.

void setup()   {
    pinMode(8, OUTPUT);       // Initialize Arduino Digital Pin 8 as output
}


void loop()
{
    digitalWrite(8, HIGH);   // Switch On LED
    delay(500);              // Wait for half a second
    digitalWrite(8, LOW);    // Switch Off LED
    delay(500);              // Wait for half a second
}
```

**2. Pantalla LED en ejecución**

- **Hardware**

  - Conecta 3 LEDs a los Pines Digitales 9, 10 y 11 a través de una resistencia de 330 Ohm cada uno.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_3LEDs_Display.jpg)

- **Software**

  - Compila y sube el siguiente sketch:

```cpp
//Running LED display: Three LEDs connected to Digital Pin 9, 10 and 11.

void setup()
{
    pinMode(9, OUTPUT);        // Initialize Arduino Digital Pins 9 as output
    pinMode(10, OUTPUT);       // Initialize Arduino Digital Pins 10 as output
    pinMode(11, OUTPUT);       // Initialize Arduino Digital Pins 11 as output
}


void loop()
{

    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    digitalWrite(11, HIGH);
    delay(250);              // Wait for quarter of a second
    digitalWrite(9, LOW);
    digitalWrite(10, HIGH);
    digitalWrite(11, LOW);
    delay(250);              // Wait for quarter of a second
    digitalWrite(9, HIGH);
    digitalWrite(10, LOW);
    digitalWrite(11, LOW);
    delay(250);              // Wait for quarter of a second

}
```

**3. Hablar con Arduino : Conectar un interruptor pulsador**

- **Hardware**

  - Conecta un LED al Pin Digital 8 como se muestra a continuación. La resistencia de 330 Ohm limita la corriente que fluye hacia el LED.

  - Conecta un extremo del interruptor pulsador al Pin Digital 12 y el otro a GND a través de una resistencia de 10K.

  - Conecta el otro extremo del interruptor pulsador a +5V.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Pushbutton_LED.jpg)

- **Software**

- Compila y sube el siguiente sketch:

```cpp
//Pushbutton switch demo: LED is connected to digital pin 8 and Pushbutton is connected to digital pin 12.
//The LED glows when the button is pressed.

char inputButtonState;

void setup()
{
    pinMode(8, OUTPUT);        // Initialize Arduino Digital Pins 8 as output for connecting LED
    pinMode(12,INPUT);         // Initialize Arduino Digital Pins 12 as input for connecting Pushbutton
}


void loop()
{
    inputButtonState = digitalRead(12); //Read the Pushbutton state.

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, HIGH);  //Switch on LED
    }
    else
    {
        digitalWrite(8, LOW);   //Switch off LED
    }

}
```

- Lo anterior sí demuestra cómo enviar una señal al Arduino. De hecho, puedes lograr el mismo objetivo sin el Arduino. Solo presiona el botón para cerrar el circuito, luego invirtamos los valores HIGH/LOW como sigue:

```cpp
void loop()
{
    inputButtonState = digitalRead(12); //Read the Pushbutton state.

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, LOW);  //Switch on LED
    }
    else
    {
        digitalWrite(8, HIGH);   //Switch off LED
    }
```

- El LED ahora se enciende con el circuito abierto y se apaga con el circuito cerrado.

**4 Analógico: POT**

- **Hardware**

  - Conecta el ánodo del LED a los pines **PWM** a través de una resistencia de 220 Ohm.

  - Conecta el cátodo del LED al pin GND.

  - Monta el potenciómetro en la breadboard.

  - Conecta la pata derecha del potenciómetro a +5v.

  - Conecta la pata central del potenciómetro a cualquiera de los pines de entrada analógica (0-5).

  - Conecta la pata izquierda del potenciómetro al terminal de tierra.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_potled1.jpg)

- **Software**

  - Conecta el ánodo del LED al pin digital 5 (en lugar de 5V).
  - Compila y sube el siguiente sketch:

```cpp
//Varying the brightness of the LED using a Pot
int value=0;
int mval;
void setup()
{
    pinMode(5, OUTPUT);
}
void loop()
{
    value=analogRead(A1); //read analog value from input A1
    // PWM output given to the LED
    mval = map(value, 0, 1023, 0, 100);
    analogWrite(5,mval);

}
```

**5. Arcoíris en el escritorio: LED tricolor**

- **Hardware**

    El LED RGB suministrado con el kit básico es de tipo ánodo común. La pata más larga es el ánodo. Las otras tres patas son los cátodos para Rojo, Verde y Azul respectivamente.

  - Conecta los cátodos del LED RGB a los Pines Digitales 9, 10 y 11 a través de una resistencia de 330 Ohm cada uno.
  - Conecta el ánodo a +5v
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_RGB_LED_Display.jpg)

**Software**

- Compila y sube el siguiente sketch:

```cpp
void setup()  {

}

void loop()  {


    for(int b = 0 ; b <= 255; b=b+5)
    {
        for(int g = 0 ; g <= 255; g=g+5)
        {
            for(int r= 0 ; r <= 255; r=r+5)
            {
                analogWrite(9, b);
                analogWrite(10, g);
                analogWrite(11, r);
                delay(10);

            }
        }
    }

}
```

**6. Música**

- **Hardware**

  - Conecta el ánodo del zumbador al Pin Digital 11.

  - Conecta el terminal negativo del zumbador a GND
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Music.jpg)

- **Software**

  - Compila y sube el siguiente sketch:

```cpp
#define NOTE_D0 98
#define NOTE_D1 294
#define NOTE_D2 330
#define NOTE_D3 350
#define NOTE_D4 393
#define NOTE_D5 441
#define NOTE_D6 495
#define NOTE_D7 556
#define NOTE_DL1 147
#define NOTE_DL2 165
#define NOTE_DL3 175
#define NOTE_DL4 196
#define NOTE_DL5 221
#define NOTE_DL6 248
#define NOTE_DL7 278
#define NOTE_DH1 589
#define NOTE_DH2 661
#define NOTE_DH3 700
#define NOTE_DH4 786
#define NOTE_DH5 882
#define NOTE_DH6 990
#define NOTE_DH7 112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.125
#define SIXTEENTH 0.625

// notes in the melody:
int tune[] =
{
    NOTE_D0,NOTE_D1,NOTE_D2,NOTE_D3,NOTE_D4,NOTE_D5,NOTE_D6,NOTE_D7,
    NOTE_DL1,NOTE_DL2,NOTE_DL3,NOTE_DL4,NOTE_DL5,NOTE_DL6,NOTE_DL7,
    NOTE_DH1,NOTE_DH2,NOTE_DH3,NOTE_DH4,NOTE_DH5,NOTE_DH6,NOTE_DH7,
};
/* note durations: 1 = one note*/

float duration[]=
{1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,};
int length;
int tonePin=11;                // buzzer pin
void setup()
{ Serial.begin(9600);
    pinMode(tonePin,OUTPUT);   //  initialize the digital pin as an output
    length = sizeof(tune)/sizeof(tune[0]);
}
void loop()
{
    for(int x=1;x<length;x++)
    {tone(tonePin,tune[x]);
        delay(400*duration[(x%100)]);    // to distinguish the notes, set a minimum time between them.

        noTone(tonePin); // stop the tone playing:
    }
}
```

**7. Mini Servo**

- **Hardware**

  - Conecta el cable rojo del servomotor al suministro de +5v.
  - Conecta el cable negro del servo a tierra.

  - Conecta el cable amarillo del servo a cualquiera de los pines PWM en el Arduino.

  - Conecta la pata derecha del potenciómetro a +5v.

  - Conecta la pata central del potenciómetro a cualquiera de los pines de entrada analógica (0-5).

  - Conecta la pata izquierda del potenciómetro al terminal de tierra.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Mini_Servo.jpg)

- **Software**

  - Compila y sube el siguiente sketch:

```
// Controlling a servo position using a potentiometer (variable resistor)
// by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 1;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup()
{
    myservo.attach(5);  // attaches the servo on pin 5 to the servo object
    Serial.begin(19200); // some servos doesn't work without Serial
}

void loop()
{
    val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)
    val = map(val, 0, 1023, 0, 179);     // scale it to use it with the servo (value between 0 and 180)
    myservo.write(val);                  // sets the servo position according to the scaled value
    delay(15);                           // waits for the servo to get there
}
```

## Funciones

- Hay una breadboard sin soldadura, por lo tanto, no es necesario comprar un soldador ni aprender a soldar.

- Hay muchos cables de puente que son largos y flexibles con puntas rígidas. Estos cables de puente son mucho mejores que los antiguos puentes de alambre sólido de longitud fija.

- Hay muchos LED y resistencias para tu primer proyecto, incluido un LED RGB que es un solo encapsulado de LED con tres LED de colores primarios en su interior. Al ajustar la intensidad de los diferentes LED de colores primarios, los colores se mezclarán y producirán todos los colores del arcoíris.
- Incluso hay una tarjeta educativa de instrucciones para leer los valores de las resistencias.
- El interruptor de inclinación es un dispositivo muy simple con una pequeña bola de metal en su interior. Si el dispositivo se inclina hacia un lado, la bola de metal tocará los contactos eléctricos. Este sensor es útil para una variedad de proyectos como una alarma antirrobo DIY.
- El termistor es útil para proyectos en los que quieres detectar la temperatura.
- La fotorresistencia puede detectar la luz, y funciona con bombillas y luz solar. Las fotorresistencias se usan comúnmente para detectar cuándo está oscuro y encender las luces por la noche.
- El zumbador del kit funciona especialmente bien para reproducir la canción principal de Mario Brothers.
- Hay un motor Mini Servo. Puedes usarlo para abrir y cerrar un cerrojo, un interruptor de luz o una válvula. Incluso podrías usarlo para hacer una mini catapulta.
- El potenciómetro es un gran dispositivo de entrada. Puedes usarlo para controlar el ángulo del brazo del Servo o la intensidad de los LED.

## Recursos

- [Serie de tutoriales en video de Arduino por Jeremy Blum](https://www.youtube.com/playlist?list=PLA567CE235D39FA84)

## Proyectos

**Georgia Tech Introducción al Taller TI LaunchPad 2015**: Prueba algunos circuitos básicos de protoboard con un microcontrolador TI

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/launchpad/gtech2015-aa131c/embed' width='350'></iframe>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
