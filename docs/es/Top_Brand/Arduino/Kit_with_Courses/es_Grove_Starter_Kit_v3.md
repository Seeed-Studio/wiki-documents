---
description:  Grove - Starter Kit v3
title: Grove - Starter Kit v3
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Starter_Kit_v3
last_update:
  date: 1/13/2023
  author: shuxu hu
---

Grove es una plataforma de electrónica modular para prototipado conveniente y rápido. Muchas configuraciones se pueden ensamblar sin necesidad de soldadura o uso de protoboard. Simplemente conecta los módulos Grove al shield Grove y aprovecha el código de ejemplo proporcionado para cada módulo Grove. El Grove Starter Kit contiene una multitud de sensores y actuadores, incluyendo soporte para audio, luz, movimiento, táctil y otros modos de interacción. Así que puedes empezar a experimentar de inmediato con una amplia variedad de proyectos.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Starter_Kit_v2_Photo.jpg)

##  Prefacio

###  Acerca de Grove

Grove es un conjunto de herramientas moderado y listo para usar. Al igual que Lego, adopta un enfoque de bloques de construcción para ensamblar electrónicos. Comparado con el método de aprendizaje tradicional y complicado de usar un protoboard y varios componentes electrónicos para ensamblar un proyecto, Grove simplifica y condensa el proceso de aprendizaje significativamente. El sistema Grove consiste en un shield base y varios módulos con conectores estandarizados.

El shield base permite la conexión fácil de cualquier entrada o salida de microprocesador desde los módulos Grove. Cada módulo Grove aborda una función única, como un botón simple o un sensor de ritmo cardíaco más complejo. Cada uno viene con documentación clara y código de demostración para ayudarte a comenzar rápidamente.

###  Conoce Arduino

Si esta es tu primera vez usando un Arduino, necesitarás completar los siguientes pasos:

<!-- *   [Getting Started with Arduino](/es/Getting_Started_with_Arduino)

*   [Install your microcontroller](/es/Getting_Started_with_Seeeduino)

*   [Download and import the Grove - Starter Kit Sketchbook](/es/How_To_Use_Sketchbook) -->

La dirección de descarga del Grove - Starter Kit Sketchbook está [aquí](https://github.com/Seeed-Studio/Sketchbook_Starter_Kit_V2.0).

Ahora estás listo para explorar el ecosistema Grove.

###  Lista de partes

*   1*Base Shield
*   1*Grove - LCD RGB Backlight
*   1*Grove - Smart Relay
*   1*Grove - Buzzer
*   1*Grove - Sound Sensor
*   1*Grove - Touch Sensor
*   1*Grove - Rotary Angle Sensor
*   1*Grove - Temperature Sensor
*   1*Grove - LED
*   1*Grove - Light Sensor
*   1*Grove – Button
*   1*DIP LED Blue-Blue
*   1*DIP LED Green-Green
*   1*DIP LED Red-Red
*   1*Mini Servo
*   10*Grove Cables
*   1*9V to Barrel Jack Adapter
*   1*Grove starter kit  Manual
*   1*Green Plastic Box


###  Detalle de Módulos

#### Grove - Base Shield

Comencemos con la placa shield base Grove. "Grove - Base Shield" es la nueva versión del "Electronic Brick Shield". El Base Shield es compatible con Seeeduino v3.0 (168p y 328p), así como con Arduino UNO y Duemilanove. Hay 16 puertos Grove en el shield base, divididos en cuatro áreas funcionales: analógico(4), digital(7), I2C(4), y UART(1).

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Base_Shield_IO.jpg)

*   Puertos Digitales

Como muestra la foto, hay siete puertos digitales, etiquetados D2-D8. Cada uno de estos maneja un par de pines digitales (2/3 ... 8/9) en el Arduino Uno. Pueden usarse para leer un sensor digital (ej., botón pulsador) o controlar un actuador digital (o analógico, vía PWM). En cualquier caso, cada puerto solo puede manejar dos estados lógicos: 0 o 1.

*   Puertos Analógicos

En el lado izquierdo hay cuatro puertos Grove para tomar lecturas analógicas. Los sensores analógicos pueden devolver lecturas que van de 0 a 1023. Comparado con sensores digitales que solo devuelven 0 o 1, las lecturas analógicas son más detalladas y precisas.

*   Puertos I2C

Debajo de los puertos digitales hay cuatro puertos Grove I2C. I2C es un protocolo de bus de baja velocidad que transfiere datos vía dos cables: SCL y SDA. SCL es la línea de reloj para sincronizar la transferencia de datos sobre el bus I2C; SDA es la línea de datos.

<!-- For detailed information on how to use your Grove – Base Shield, go to [Base Shield V2](/es/Base_Shield_V2). -->

####  Grove - LCD RGB Backlight

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Serial_LEC_RGB_Backlight_Lcd.jpg)

El Grove - LCD RGB Backlight soporta visualización de texto, usando caracteres definidos por el usuario. Te permite establecer el color de la retroiluminación, usando la interfaz Grove simple y concisa. Usa I2C como método de comunicación con tu Arduino. Así, el número de pines requeridos para intercambio de datos y control de retroiluminación se reduce de ~10 a 2, dejando más capacidad de E/S para otras tareas desafiantes.

Grove_LCD_RGB_Backlight ahora también soporta MBED. Muchas gracias a las contribuciones entusiastas de la comunidad. Para más detalles, puedes echar un vistazo [aquí](https://github.com/DavidElmoRoss/Grove_LCD_RGB_Backlight_V5).

**Ejemplo**

El ejemplo te muestra cómo imprimir texto en la pantalla y cambiar el color de la retroiluminación. Encuéntralo vía la ruta:

File -&gt; Sketchbook -&gt; Grove_RGB_Backlight_LCD -&gt; HelloWorld

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/RGBbacklight.jpg)

**Consejos**

Esta es una pantalla LCD de 16x2. Es capaz de mostrar dos filas de textos de dieciséis caracteres, soportando idiomas como inglés y japonés. También puedes crear y usar caracteres personalizados definiendo sus patrones de visualización. Puedes encontrar un ejemplo de hacer un carácter personalizado aquí:

[https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

####  Grove – Relay

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Twig-Relay.jpg)

¡El Relay es una herramienta útil para magnificar la capacidad de control de tu Arduino! Alimenta la señal de control a través de la interfaz Grove y el relé abre o cierra el circuito externo que está conectado a los terminales de tornillo. ¡El voltaje del circuito externo puede llegar hasta 220V! ¡Así que toma este relé y comienza algunos proyectos realmente desafiantes!

**Ejemplo**

El ejemplo te muestra cómo controlar el relé con un botón: File -&gt; Sketchbook -&gt; Grove_Relay.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Relay_Ex.jpg)

**Consejos**

El Relé es un interruptor mecánico controlado electrónicamente. El tamaño de un relé varía según su capacidad para transportar corriente. Cuanto más grande es un relé (esencialmente, solo la parte de la caja de plástico), mayor es la corriente que puede transportar.

<font color="red">
Por favor, tenga mucho cuidado al trabajar con voltajes de red: si tiene dudas, contacte a un profesional como un electricista licenciado para obtener ayuda.
</font>

<!-- For detailed information on how to use your Grove – Relay, you can go to [Grove – Relay page](/es/Grove-Relay). -->

####  Grove – Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Buzzer1.jpg)

El Buzzer es un Grove simple pero divertido de usar. Es un altavoz piezoeléctrico, acoplado con un circuito de control simple. Si se conecta a una salida digital, emitirá un tono cuando la salida esté en alto. Alternativamente, puede conectarse a una salida analógica (realmente, digital modulada por ancho de pulso) para generar varios tonos y efectos.

**Ejemplo**

Puedes usar el código para Grove – Button para hacer que el buzzer suene cuando presiones el botón. Sin embargo, Grove – Buzzer puede ser mucho más divertido: ¡puede tocar canciones! Este es un breve ejemplo de Oomlout.com, tocando una canción de cuna doméstica: "Twinkle Twinkle Little Star".

Encuentra el ejemplo a través de la ruta siguiente: File -&gt; Sketchbook -&gt; Grove_Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Buzzer_Ex.jpg)

**Consejos**

¿Cómo funciona realmente el buzzer Piezo? Usualmente, hay dos obleas cerámicas en cada buzzer Piezo. Cuando se les dan diferentes voltajes, se atraen o se repelen entre sí. El movimiento de estas obleas causa vibraciones del aire (es decir, sonido). Cuando la frecuencia de la vibración cambia, la frecuencia del sonido cambiará en consecuencia.

<!-- For detailed information on how to use your Grove - Buzzer, go to [Grove - Buzzer page](/es/Grove-Buzzer) -->

####   Grove - Sound Sensor

El módulo sensor de sonido es un micrófono simple. Basado en un amplificador LM358 y un micrófono electret, puede usarse para detectar el nivel de sonido en el ambiente.

**Ejemplo**

El código para el Grove – Sound Sensor puede usarse para controlar una luz LED cuyo brillo refleja la intensidad del sonido ambiental.

File -&gt; Sketchbook -&gt; Grove_Sound_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Sound_Sensor_Ex.jpg)

**Consejos**

El micrófono electret recolecta la intensidad del sonido para todas las frecuencias, pero un potenciómetro puede actuar como el portero. Por ejemplo, cuando giras el eje completamente en sentido horario, el potenciómetro podría dejar pasar todo. Cuando lo giras completamente en sentido antihorario, nada pasaría.

<!-- For a detailed information on how to use your Grove - Sound Sensor, go to [Grove - Sound Sensor page](/es/Grove-Sound_Sensor) -->

####   Grove - Touch Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-touch_sensor_Photo.jpg)

El Grove - Touch Sensor te permite reemplazar la presión en un botón con contacto en una superficie de detección. Puede detectar el cambio en capacitancia cuando un dedo está cerca. Entonces, ya sea que tu dedo toque la almohadilla directamente o simplemente se mantenga cerca de ella, el Grove - Touch Sensor produciría una salida HIGH.

**Ejemplo**

El código de Grove – Button funciona con este módulo. Encuentra el ejemplo a través de la ruta siguiente: File -&gt; Sketchbook -&gt; Grove_Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Touch_Sensor_Ex.jpg)

**Consejos**

Esta es una alternativa al botón de contacto momentáneo. El Grove – Touch Sensor detecta el cambio en capacitancia en la región circular (sin pintar) en la parte inferior; cuanto más cerca esté tu dedo de esta región, mayor será el cambio en capacitancia. Incluso si hay papel entre tu dedo y el sensor, seguirá funcionando de manera confiable.

<!-- For detailed information on how to use your Grove - Touch Sensor, go to [Grove - Touch Sensor page](/es/Grove-Touch_Sensor). -->

####   Grove - Rotary Angle Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Potentiometer1.jpg)

El potenciómetro Grove produce una salida analógica entre 0 y VCC (3.3 o 5 VDC). El rango angular es de 300 grados, con un cambio lineal en el valor. El valor de resistencia es de 10k ohmios, perfecto para uso con Arduino. Esto también puede conocerse como un "sensor de ángulo rotatorio".

**Ejemplo**

El ejemplo te muestra cómo leer el valor de un sensor de ángulo rotatorio:

File -&gt; Sketchbook -&gt; Grove_Rotary_Angle_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Rotary_Angle_Sensor_Ex.jpg)

**Consejos**

Un potenciómetro rotatorio se ve muy similar a un codificador rotatorio, pero no son lo mismo. Un potenciómetro rotatorio es esencialmente un potenciómetro deslizante, construido en forma circular. Reporta, de manera analógica, la fracción del elemento resistivo que está siendo usado por el contacto deslizante.

<!-- For a detailed information on how to use your Grove - Rotary Angle Sensor,you can go to [Grove - Rotary Angle Sensor page](/es/Grove-Rotary_Angle_Sensor) -->

####   Grove – Temperature Sensor

![400px](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Tempreture_Sensor_Connector.jpg)

Grove - Temperature Sensor usa un termistor que devuelve la temperatura ambiente. Nuestra placa luego convierte este valor de voltaje medido por un pin de entrada analógica a una temperatura. El rango de operación es de -40 a 125 grados Celsius.

**Ejemplo**

El ejemplo te muestra cómo convertir la salida cruda del sensor a temperaturas. Puedes ver los datos en Celsius en el monitor serie.

File -&gt; Sketchbook -&gt; Grove_Temperature_Sensor.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Temperature_Sensor_Ex.jpg)

**Consejos**

Grove – Temperature Sensor se usa para detectar la temperatura del ambiente.

<!-- For a detailed information on how to use your Grove - Temperature Sensor,you can go to [Grove - Temperature Sensor](/es/Grove-Temperature_Sensor) -->

####   Grove - LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-LED_Photo.jpg)

Grove - LED está diseñado para principiantes de Arduino/Seeeduino para monitorear controles desde puertos digitales. Se puede montar fácilmente en la superficie de tu caja o escritorio y usarse como lámpara piloto para energía o señal.

**Ejemplo**

En este ejemplo hacemos una luz LED con efectos de respiración:

File -&gt; Sketchbook -&gt; Grove_LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-LED_Ex.jpg)

**Consejos**

Preparamos tres colores de bombillas LED para ti, puedes obtener el color que desees cambiando el LED en el pequeño Grove – LED Socket. Los LEDs tienen un cátodo en el lado plano de la bombilla, y un ánodo en el lado redondo de la bombilla. El ánodo necesita ser instalado correspondiendo al signo '+' en el asiento para que el LED funcione correctamente.

<!-- For a detailed information on how to use your Grove - LED,you can go to [Grove - Red LED](/es/Grove-Red_LED) -->

####   Grove - Light Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Light_Sensor_photo.jpg)

El sensor de luz, también conocido como resistor dependiente de luz (LDR). Típicamente, la resistencia del sensor de luz disminuirá cuando la intensidad de luz ambiental aumente.

**Ejemplo**

Este ejemplo encenderá un LED cuando la intensidad de luz caiga por debajo del umbral preestablecido:

File -&gt; Sketchbook -&gt; Grove_Light_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Light_Sensor_Ex.jpg)

**Consejos**

La salida del sensor de luz analógico varía de 0 a 1023, pero la salida no es lineal con respecto a la intensidad de luz ambiental.

<!-- For a detailed information on how to use your Grove - Light Sensor,you can go to [Grove - Light Sensor](/es/Grove-Light_Sensor) -->

####   Grove – Button

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Button1.jpg)

Esta nueva versión del módulo botón Grove contiene un botón independiente, que está configurado con resistor pull-down – listo para usar con nuestros microcontroladores como entrada digital. El botón señala el cable SIG, NC no se usa en este módulo Grove.

**Ejemplo**

Este ejemplo te muestra cómo encender o apagar un LED con este botón.

File -&gt; Sketchbook -&gt; Grove_Button

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Button_Ex.jpg)

**Consejos**

"Momentáneo" significa que el botón rebota después de ser presionado. Este botón produce HIGH cuando se presiona, y LOW cuando se libera.

####  Grove -  Servo

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Servo_Photo.jpg)

Este es un actuador cuya posición puede ser controlada con precisión.

**Ejemplo**

Preparamos un ejemplo de cómo usamos un potenciómetro para controlar la posición del servo:

File --&gt; Sktechbook --&gt; Servo

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Starter_Kit_Servo.jpg)

**Consejos**

Grove – Servo tiene opciones de hardware de montaje para diferentes propósitos: puedes usarlos para mover un pequeño ventilador, levantar un objeto, o imitar la manecilla de un reloj.

##  Proyectos de demostración
---
###  1. Una Taza de Flores

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/A_Cup_of_Flower.jpg)

**Descripción**

¿Te gustaría una taza de flores para aliviar tu corazón exhausto? Este proyecto está compuesto por Grove – LED y un Grove – Touch Sensor. Con el sensor siendo tocado, esos encantadores LEDs te brillarán un efecto de luz cálido y cómodo.

**Lista de Materiales**

<dl>
  <dd>1. Arduino x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – LED x 6;</dd>
  <dd>4. Grove – Touch Sensor x 1;</dd>
  <dd>5. Papel de color de 6 x 6cm x 6;</dd>
  <dd>6. Batería de 9V y clip de batería de 9V x 1.</dd>
</dl>

:::note
    El número de LEDs es arbitrario. Hay tres de ellos contenidos en el kit básico. Pero puedes aumentar o disminuir dependiendo del volumen de tu taza. Tengo una taza grande aquí, así que agregué tres más de nuestro sitio web.
:::
**Pasos**

**1. Doblar Los Capullos **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Fold_the_buds.jpg)

Elige un patrón de flor que te guste y sigue sus pasos para crear algunos de ellos. Una búsqueda en Google puede ayudar mucho para encontrar uno. Hay tantos aficionados y artistas del origami en Internet que les gusta compartir sus manualidades.

Elegí tulipán aquí, ¡pero girasol, rosa y lirio también suenan geniales!

Cuando dobles el capullo, necesitas dejar un pequeño agujero en su botón para que el cable Grove pase a través.

**2. Configurar**


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Set_up.jpg)


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

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Battery.jpg)

Usa una batería portátil de 9V para proporcionar energía a las flores y asiéntala en la taza. ¡Terminado! ¡Disfruta tu taza de flores!

###   2. ¡Cómo Te Va!

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/How_you_doing.jpg)

(descargado de think.bigchief.it)

**Descripción**

¿Cómo saludas a un amigo? Big Chief diría "¿qué hay mejor que un apretón de manos?" Cuando uno de estos juguetes de papel Big Chief apoya su espalda contra el otro, ¡se agitarán para saludar!

**Lista de Materiales**

<dl>
  <dd>1. Arduino x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – Interruptor Magnético x 1;</dd>
  <dd>4. Grove – Vibrador x 1;</dd>
  <dd>5. Juguetes de papel x 2;</dd>
  <dd>6. Imán x 1;</dd>
  <dd>7. Batería de 9V y clip para batería de 9V x 1.</dd>
</dl>

**Nota:** El número de LEDs es arbitrario. Hay tres de ellos incluidos en el kit básico. Pero puedes aumentar o disminuir dependiendo del volumen de tu taza. Tengo una taza grande aquí, así que agregué tres más de nuestro sitio web.

**Pasos**

**1. ¡Imprímelo!**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Print_it_out.jpg)

Elige un patrón que te guste de Internet. Asegúrate de que haya suficiente espacio para un imán o un interruptor magnético más un vibrador. Igual que la flor de origami de arriba, puedes encontrar toneladas de ellos en Internet.

**2. Llena Los Órganos**

Concéntrate al cortar los juguetes de papel. Solo de esa manera puedes obtener uno limpio. Después de eso, es hora de llenarlos con algunos órganos.

Pegué un imán en la espalda del Big Chief A (¡llamémoslo así!). Lo pegué ahí con cinta adhesiva de doble cara.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck1.jpg)

Y para Big Chief B, pegué un interruptor magnético en su espalda, en la misma posición que A, y un vibrador en sus pies.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck2.jpg)

**3. Pégalos**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck3.jpg)

Sigue cuidadosamente las instrucciones en la hoja impresa. Conecta los cables Grove en los dos Módulos Grove que usamos en Big Chief B. Entonces obtendrás dos lindos juguetes de papel como los de arriba.

**4. Subir Programa**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck4.jpg)

Sube el código de abajo a tu Arduino. Al hacer esto, les das vida.
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

##   Características
---
*   **Estandarizado** – forma Jigsaw escalable, conector unificado de 4 pines, rejilla de orificios para tornillos, almohadilla de soldadura en el borde, reduce el desarrollo duplicado, reutilizable en diferentes proyectos para reducir el impacto ambiental

*   **Compacto** – tamaño desde 2cm*2 cm, combinación perfecta, componentes de montaje superficial, cable de paso de 2.0mm

*   **Amigable** – conexión fácil con hebilla, a prueba de errores, varios modos de extensión, abierto para bricolaje, bibliotecas y códigos de demostración

*   **Abundante**- gran selección de circuitos comunes desde básicos (botón, LED) hasta sensores profesionales (Giroscopio, Brújula), se siguen añadiendo según la demanda, contribuciones de terceros, reutilizable

*   **Basado en la comunidad** – satisfaciendo necesidades a través de votación, diseño democratizado, compartir proyectos y recetas, patrón de negocio de reparto de beneficios, Alquiler y Reutilización


## Preguntas Frecuentes

**P1:  ¿Funcionaría esto con la Placa Intel Galileo Gen 1?**
     
R1: Sí, puedes usar este kit en la placa Intel Galileo Gen1/Gen2 y Edison para Arduino.

**P2: No se muestra nada en el Grove - RGB LCD backlight, pero el color de fondo funciona bien.**

R2: Por favor verifica si el interruptor de alimentación(3.3V/5V) está en el lado de 5V.


##   Recursos
---
*   [Sch pdf](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Starter_Kit_v3_sch_pdf.zip)

*   [Sch Eagle](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Starter_Kit_Eagle.zip)

*   [Grove - Archivo Fuente del Botón](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Button_v1.0_Source_File.zip)

*   [Grove - Archivo Fuente del LED](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-LED_v1.0_Source_File.zip)

*   [Grove - Archivo Fuente del Zumbador](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Buzzer_v1.0_Source_File.zip)

*   [Grove - Archivo Fuente del Sensor de Ángulo Rotatorio](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Rotary_Angle_Sensor_v1.2.zip)

*   [Grove -  Archivo Fuente del Relé](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Relay_v1.2_Eagle.zip)

*   [Archivo Fuente del Base Shield](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Base_Shield_v2.zip)

*   [Grove - Archivo Fuente del Sensor de Sonido](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Sound_Sensor_v1.3_eagle.zip)

*   [Grove - Archivo Fuente del Zumbador](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Buzzer_V1.1_eagle.zip)

Tenemos esta parte disponible en [geppetto](https://geppetto.seeedstudio.com/), diseño electrónico modular fácil con Seeed y Geppeto. Constrúyelo Ahora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

##   Reconocimiento
Nos gustaría expresar nuestra gratitud a Rich Morin quien modificó este documento con gramática y palabras más apropiadas.

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
