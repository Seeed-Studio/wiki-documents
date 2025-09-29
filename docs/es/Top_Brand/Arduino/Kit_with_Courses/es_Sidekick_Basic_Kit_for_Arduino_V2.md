---
description: Kit Básico Sidekick para Arduino V2
title: Kit Básico Sidekick para Arduino V2
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sidekick_Basic_Kit_for_Arduino_V2
last_update:
  date: 2/17/2023
  author: jianjing Huang
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

El Kit Básico Arduino Sidekick está diseñado para ser usado con tu Arduino / Seeeduino / Seeeduino ADK / Maple Lilypad o cualquier placa MCU. Contiene todo lo necesario para que un usuario principiante conecte su computadora a un Arduino. Incluye muchos de los accesorios más populares para proyectos DIY: como Protoboard, cables de puente, LEDs de colores, resistencias, zumbador, etc.
Todo esto viene con su propia caja práctica que es fácil de transportar y genera un desorden mínimo.

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Contenido del Kit

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Basic_Kit_for_Arduino_Photo_11.jpg)

| Artículo                    | Cantidad                       |
|----------------------------|--------------------------------|
| Protoboard                 | 1                              |
| LED Verde                  | 5                              |
| LED Rojo                   | 5                              |
| LED RGB Ánodo Común        | 1                              |
| Capacitor Cerámico         | 10nF x 10 + 100nF x 10        |
| Capacitor de Aluminio      | 100uF x 5                      |
| Resistencia                | 330R x 10 + 1k x 10 + 10k x 10 |
| Interruptor de inclinación | 1                              |
| Termistor                  | 1                              |
| Fotorresistencia           | 1                              |
| Diodo                      | 1                              |
| Zumbador                   | 1                              |
| Botón                      | 1                              |
| Interruptor                | 5                              |
| Mini Servo                 | 1                              |
| Potenciómetro con perilla  | 1                              |
| Cable de puente para protoboard | 5x largo, 20 x corto     |
| Caja                       | 4                              |

## Repaso de Electrónica Básica

**Corriente y Voltaje**

La corriente es la velocidad de flujo de carga eléctrica en un conductor. El voltaje es la diferencia de potencial (fuerza motriz eléctrica) aplicada entre dos puntos para conducir corriente. La corriente se expresa en términos de Amperios (A) y el Voltaje en términos de Voltios (V).

**Resistor**

Los resistores son obstáculos del flujo de corriente en un conductor. Se utilizan para limitar el flujo de corriente a un dispositivo electrónico como una lámpara. La resistencia al flujo de corriente se expresa en Ohmios (Ω). Se dividen en **Resistor fijo** y **resistor variable (POT)**.

- **Conectando Resistores**

    Los resistores pueden conectarse de dos tipos diferentes: En paralelo o en serie entre sí.

- **Resistores En Serie**

    Cuando los resistores están conectados en serie, la resistencia equivalente total será igual a la suma de todos los valores de resistores en serie.

- **Resistores En Paralelo**

    En paralelo, el recíproco de la resistencia equivalente total es igual a la suma del recíproco de cada resistor.

**Ley de Ohm**

Las relaciones entre Corriente, Voltaje y Resistencia se rigen por la Ley de Ohm - que establece que "La corriente a través de un conductor (I Amperios) entre dos puntos es directamente proporcional a la diferencia de potencial o voltaje a través de los dos puntos (V Voltios), e inversamente proporcional a la resistencia entre ellos (R Ohmios)"
es decir I = V / R. Por lo tanto V = IR o R = V / I. El siguiente triángulo de la Ley de Ohm puede usarse para recordar la relación entre V, I y R. La línea vertical indica operación de multiplicación y la línea horizontal indica operación de división.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Ohm-s_law_triange.jpg)

ej: Por lo tanto para conocer la corriente I, dividimos V por R.

**Protoboard**

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Breadboard_.jpg)

**Protoboard** es un dispositivo de prototipado para circuitos electrónicos. Es muy útil para conectar componentes electrónicos y hacer un circuito sin soldadura. El protoboard consiste en filas y columnas de agujeros con contactos metálicos para insertar componentes. El protoboard suministrado con el Arduino Sidekick Basic Kit está dispuesto de **2 X 30 columnas de cinco agujeros** y **4 X veinticinco filas de agujeros**. Estos agujeros están conectados internamente de una manera como se ilustra a continuación.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Breadboard_Internal_Connections.jpg)

**Resistores Fijos**

Los resistores suministrados con el Kit Básico están hechos de carbón y tienen tipo de valor fijo. El valor de resistencia está marcado por las bandas de colores. Puedes obtener el valor de la hoja de código de colores de resistores.

- La _primera banda_ indica el **primer dígito** del valor de resistencia.

- La _segunda banda_ indica el **segundo dígito**.

- La _tercera banda_ indica el valor **multiplicador** del resistor.

- La _cuarta banda_ denota el **valor de Tolerancia**.

**Potenciómetro (POT)**

POT es un resistor variable cuya resistencia puede cambiarse girando la perilla. Tiene tres terminales - los terminales en los lados ambilaterales del resistor están conectados a los extremos del conductor que está hecho de material resistivo. El terminal medio está conectado a un deslizador que se mueve sobre el material resistivo. El valor de resistencia cambia proporcionalmente a la posición de la perilla.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_POT.png)

**Termistores**

Los termistores son resistores especiales cuya resistencia cambiará con la temperatura a su alrededor. Proporcionan una manera muy útil y conveniente de detectar la diferencia de temperatura.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Thermistor.JPG)

**Resistores Dependientes de Luz (LDR)**

LDR cambiará la resistencia cuando la intensidad de luz que cae sobre ellos cambie. También se llaman fotocélula. Ofrece resistencia máxima cuando no hay luz cayendo sobre él y da resistencia mínima cuando se expone a luz brillante. Está hecho de material fotosensible como Sulfuro de Cadmio y puede conectarse al circuito. Puede usarse como un elemento sensor de luz.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_LDR.JPG)

**Diodos Emisores de Luz**

Los LEDs emitirán se iluminarán cuando esté polarizado hacia adelante. Están encapsulados en una carcasa transparente y vienen en varios colores como rojo, verde y azul. Los LEDs están hechos de fosfuro de arseniuro de galio, y alterando las proporciones de arsénico y fósforo, se pueden obtener diferentes colores. Los LEDs monocolor tienen dos cables Ánodo (+ve) y Cátodo (-ve). Los LEDs tricolor tienen 4 Cables - un ánodo y 3 cátodos para cada color. Los LEDs pueden usarse en tableros de visualización.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_RGB_LED_.JPG)

**Interruptor**

Los interruptores se usan para cerrar o abrir el circuito. Los interruptores suministrados con el kit Básico tienen dos tipos - Interruptor de botón pulsador e Interruptor deslizante.

- **Interruptor de Botón Pulsador**

    El circuito se cerrará mientras presiones el interruptor de botón pulsador.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Push_Button_Switch_.JPG)

- **Interruptor Deslizante**

    El interruptor deslizante es un interruptor simple de dos posiciones. Puede usarse para abrir o cerrar un circuito configurándolo en la posición apropiada.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Slide_Switch_.JPG)

- **Interruptor de Inclinación**

    El interruptor de inclinación contiene dos terminales que están conectados al circuito, _cierra_ el circuito cuando está _inclinado horizontalmente_ mientras _abre_ el circuito cuando está _inclinado verticalmente_.

**Capacitores**

Los capacitores se usan para almacenar carga eléctrica. Se clasifican en dos tipos diferentes: Capacitor Electrolítico y de disco Cerámico. Los capacitores se expresan en términos de micro Faradios (uF).

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Capacitor.JPG)

- **Conectando el Capacitor**

Los condensadores pueden conectarse en dos tipos de configuración en un circuito como se muestra a continuación.

- **Condensadores en Serie**

    La capacitancia equivalente total, cuando dos o más condensadores están conectados en serie entre sí, es igual a la suma del recíproco del valor de capacitancia individual.

- **Condensadores en Paralelo**

    La capacitancia equivalente total, cuando dos o más condensadores están conectados en paralelo, es igual a la suma de la capacitancia individual.

- **Condensadores Electrolíticos**

    Los Condensadores Electrolíticos normalmente tienen pequeño volumen y gran volumen de capacitancia. Se clasifican en condensadores electrolíticos polarizados y no polarizados.
    Metales como aluminio, tantalio, vanadio y bismuto se usan para formar las láminas de ánodo y cátodo.

- **Condensadores de Disco Cerámico**

    Los Condensadores Cerámicos usan dieléctrico cerámico con películas metálicas delgadas como electrodos unidos a la cerámica. En el tipo Disco, el condensador tiene plata fijada en ambos lados de la cerámica para formar placas conductoras. Los condensadores de disco se usan solo para valores pequeños de capacitancia.

**Zumbador**

Un zumbador es un dispositivo de señalización de audio, que puede ser mecánico, electromecánico o Piezoeléctrico. Produce varias señales de audio basadas en la oscilación del material usado en él. Se usan comúnmente en alarmas y temporizadores.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Buzzer.png)

Conecta el pin largo al voltaje positivo, y el pin corto a tierra.

El zumbador puede conectarse a salidas digitales, y emitirá un tono cuando la salida esté en alto. Alternativamente, puede conectarse a una salida de modulación por ancho de pulso analógica para generar varios tonos y efectos.

**Diodo**

Un diodo es un material semiconductor que conduce corriente solo en una dirección. Comienza a conducir solo después de que el voltaje de alimentación sea mayor que el _potencial de barrera_. Actúa como un interruptor cerrado en condición de polarización directa y actúa como un interruptor abierto cuando está polarizado inversamente. Los diodos se clasifican basándose en el material semiconductor y pueden usarse para fabricar, como diodo de unión PN, diodo zener, diodo emisor de luz, etc.

- **Polarización de un Diodo**

    Aplicar voltaje a un diodo se llama polarizar un diodo. El diodo se **polariza directamente** cuando un **voltaje de alimentación positivo** se aplica a través de los terminales y comienza a conducir por encima de _0.7v para un diodo de silicio_ y _0.3v para un diodo de germanio_. Cuando un **voltaje negativo** se aplica a través de los terminales de un diodo, se dice que está **_polarizado inversamente_**. El diodo se daña cuando el voltaje de polarización inversa excede el voltaje de ruptura.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Diode.JPG)

**Mini Servo**

Los servos son motores DC con engranajes y sistema de retroalimentación. Se usan en el mecanismo de conducción de robots.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Mini_Servo_Photo.jpg)

## Lecciones

**1. ¡Hola Mundo! : El LED Parpadeante**

- **Hardware**
  - Conecta un LED al Pin Digital 8 como se muestra a continuación. La resistencia de 330 Ohmios limita la corriente que fluye al LED.
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

  - Conecta 3 LEDs a los Pines Digitales 9, 10 y 11 a través de una resistencia de 330 Ohmios cada uno.
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

**3. Hablar con Arduino: Conectando un Interruptor de Botón**

- **Hardware**

  - Conecta un LED al Pin Digital 8 como se muestra a continuación. La resistencia de 330 Ohm limita la corriente que fluye hacia el LED.

  - Conecta uno de los terminales del interruptor de botón al Pin Digital 12, y otro a GND a través de una resistencia de 10K.

  - Conecta el otro extremo del botón a +5V.

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

- Lo anterior demuestra cómo enviar una señal al Arduino. De hecho, puedes lograr el mismo objetivo sin el Arduino. Solo presiona el botón para cerrar el circuito, luego, cambiemos los valores HIGH/LOW de la siguiente manera:

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

  - Conecta el ánodo del LED a los pines **PWM** a través de una resistencia de 220 ohmios.

  - Conecta el cátodo del LED al pin GND.

  - Monta el potenciómetro en la protoboard.

  - Conecta la pata derecha del potenciómetro a +5v.

  - Conecta la pata del medio del potenciómetro a cualquiera de los pines de entrada analógica (0-5).

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

**5. Arcoíris en el Escritorio: LED Tricolor**

- **Hardware**

    El LED RGB suministrado con el kit básico es de tipo ánodo común. El cable más largo es el ánodo. Los otros tres cables son cátodos para Rojo, Verde y Azul respectivamente.

  - Conecta los cátodos del LED RGB a los Pines Digitales 9, 10 y 11 a través de una resistencia de 330 Ohmios cada uno.
  - Conecta el Ánodo a +5v
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

  - Conecta el ánodo del zumbador a los Pines Digitales 11.

  - Conecta el negativo del zumbador a GND
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

  - Conecta el cable de color rojo del servomotor a la alimentación de +5v.
  - Conecta el cable de color negro del servo a tierra.

  - Conecta el cable amarillo del servo a cualquiera de los pines PWM en el Arduino.

  - Conecta la pata derecha del potenciómetro a +5v.

  - Conecta la pata del medio del potenciómetro a cualquiera de los pines de entrada analógica (0-5).

  - Conecta la pata izquierda del potenciómetro al terminal de tierra.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Mini_Servo.jpg)

- **Software**

  - Compila y carga el siguiente sketch:

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

- Hay una protoboard sin soldadura, por lo tanto, no hay necesidad de comprar un soldador o aprender a soldar.

- Hay muchos cables puente que son largos y flexibles con puntas rígidas. Estos cables puente son mucho mejores que los puentes de alambre sólido de longitud fija del pasado.

- Hay muchos LEDs y resistencias para tu primer proyecto, incluyendo un LED RGB que es un paquete de LED único con tres LEDs de colores primarios en su interior. Al ajustar la intensidad de los diferentes LEDs de colores primarios, los colores se mezclarán y producirán todos los colores del arcoíris.
- Incluso hay una tarjeta educativa de instrucciones para leer los valores de las resistencias.
- El interruptor de inclinación es un dispositivo muy simple con una pequeña bola de metal en su interior. Si el dispositivo se inclina hacia un lado, la bola de metal tocará los contactos eléctricos. Este sensor es útil para una variedad de proyectos como una alarma antirrobo casera.
- El termistor es útil para proyectos cuando quieres detectar la temperatura.
- La fotorresistencia puede detectar luz, y funciona con bombillas y luz solar. Las fotorresistencias se usan comúnmente para detectar cuándo está oscuro y encender las luces por la noche.
- El zumbador en el kit funciona especialmente bien para tocar la canción tema de los Hermanos Mario.
- Hay un motor Servo Mini. Puedes usarlo para abrir y cerrar un cerrojo, interruptor de luz o válvula. Incluso podrías usarlo para hacer una mini catapulta.
- El potenciómetro es un gran dispositivo de entrada. Puedes usarlo para controlar el ángulo del brazo del Servo o la intensidad de los LEDs.

## Recursos

- [Serie de tutoriales en video de Arduino por Jeremy Blum](https://www.youtube.com/playlist?list=PLA567CE235D39FA84)

## Proyectos

**Taller de Introducción con TI LaunchPad de Georgia Tech 2015**: Prueba algunos circuitos básicos de protoboard con un microcontrolador TI

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/launchpad/gtech2015-aa131c/embed' width='350'></iframe>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
