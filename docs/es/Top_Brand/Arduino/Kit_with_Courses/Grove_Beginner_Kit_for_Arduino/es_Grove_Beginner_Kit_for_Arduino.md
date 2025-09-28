---
description: Grove Kit para Principiantes para Arduino(EOL)
title: Grove Kit para Principiantes para Arduino(EOL)
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Beginner_Kit_for_Arduino
last_update:
  date: 2/14/2023
  author: hushuxu
---


## SISTEMA GROVE

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove es un sistema de prototipado modular que consiste en una unidad base y varios módulos con conector estandarizado. La unidad base es generalmente un microprocesador que permite comunicar, procesar y controlar la entrada o salida de los módulos Grove. Cada módulo Grove individual típicamente aborda una sola función, desde un simple botón hasta un sensor de ritmo cardíaco más complejo. El conector Grove estandarizado permite al usuario ensamblar unidades Grove con un enfoque de bloques de construcción, comparado con el sistema basado en jumpers o soldadura es mucho más fácil de ensamblar o desensamblar, lo que simplifica el sistema de aprendizaje para experimentar, construir y crear prototipos.
También proporcionamos Convertidor de Grove a Pin Header o Grove Base HAT disponible para variedad de plataformas de desarrollo para aquellos que quieren usar módulos de sensores y actuadores grove sin Placa de Desarrollo del Sistema Grove.

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Los usuarios del sistema Grove necesitan tener al menos algunos conocimientos básicos de electrónica, de lo contrario necesitas pasar por este tutorial básico para aprender algunas operaciones básicas en el sistema Grove, la primera parte de este tutorial consiste en una lista de información básica sobre los componentes incluidos en el kit de inicio, seguido por la configuración básica del Arduino IDE para Seeeduino Lotus. Luego, las 11 sesiones de tutorial proporcionan la operación básica en cada componente individual en el kit de inicio y las aplicaciones combinando múltiples módulos juntos, lo que da al aprendiz algunas ideas y conocimiento básico sobre conectar y programar con el sistema Grove.

## Grove Kit para Principiantes para Arduino

El Grove Kit para Principiantes para Arduino contiene una Placa de Desarrollo Seeeduino Lotus V1.1 (Compatible con Arduino) y 8 módulos. La información detallada se lista a continuación.

### Placa de Desarrollo

#### Seeeduino Lotus V1.1

Seeeduino Lotus es una placa de desarrollo con microcontrolador ATMEGA328 AVR, es la combinación de Seeeduino y Grove Base Shield. Usa un microcontrolador Atmel ATmege328-MU y chip CP2102N, ATmege328-MU es un Microcontrolador AVR de 8 bits de alto rendimiento y bajo consumo, CP2102N es un chip convertidor USB a Serial que te permite comunicar el Seeeduino Lotus con la computadora usando un cable micro-USB. Seeeduino Lotus tiene 14 entradas/salidas Digitales (6 pueden ser usadas como salidas PWM) y 7 entradas/salidas Analógicas, una conexión micro USB, un header ICSP, 12 conectores Grove, un botón de reset.

**Características**

- Totalmente compatible con Arduino UNO
- Microcontrolador ATmega328
- 2 conectores Grove integrados
- 14 Pines de E/S Digitales (6 salidas PWM)
- 6 Entradas Analógicas
- Header ISP
- Compatible con Shield Arduino UNO-R3
- Programación y alimentación por Micro USB
- Voltaje de Operación de 5V
- Soporta Windows, Mac OS y Linux

**Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: Un LED está conectado al pin D13 de la placa. Este puede ser usado como un indicador LED integrado para programas/sketches.

Entrada USB: El Puerto USB se usa para conectar la placa a tu PC para programación y para alimentación. Micro USB es un tipo muy común de puerto USB, se puede encontrar con la mayoría de teléfonos Android, y otros dispositivos. Probablemente tienes docenas de estos cables por tu casa.

Reset: Este botón está convenientemente ubicado en el lado para permitirte resetear la placa Seeeduino incluso cuando un shield está colocado encima. mientras que el botón en las otras placas Arduino está colocado arriba lo que hace difícil alcanzarlo con el shield conectado.

Pines de Alimentación, Pines Analógicos y Pines Digitales: Estos headers extra están disponibles cuando quieres conectar otros sensores y actuadores sin conector grove, y especialmente los headers de alimentación se usan cuando quieres alimentar más sensores/dispositivos.

Conectores Grove: Seeed Studio tiene una variedad de sensores/dispositivos que pueden hacer uso de esta conexión Analógica, Digital, I2C y UART. Además, vendemos conectores Grove independientes para ayudarte a hacer tus propias conexiones de sensores.

ICSP: Esta es la conexión ICSP para el ATmega328P, está ubicada en la posición ICSP/SPI estándar para hardware compatible con Arduino Uno, Due, Mega, y Leonardo. Los pines SPI en este puerto: MISO, SCK, y MOSI, también están conectados a los pines digitales 12, 13, y 11 respectivamente igual que los del Arduino Uno.

USB 2 Uart: Pinout de USB-2-Uart. Estos pads pueden ser usados para interactuar con otros dispositivos UART poniendo el ATmega328 integrado en modo reset. Esto hace que Seeeduino Lotus sea usado como una placa de utilidad USB2UART.

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      Fecha de Lanzamiento      |        2018/03       |     2016/02    |
|     Microcontrolador    |      ATMega328P      |   ATMega328P   |
|    Voltaje de Operación   |          5V          |       5V       |
|          Flash         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| Interfaz de alimentación |       Micro USB      |  USB, Puerto DC  |
|    Conectores Grove    |          12          |      Ninguno      |

#### Sensores

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

Este módulo utiliza un buzzer piezoeléctrico como componente principal, puede producir un tono agudo cuando está conectado a una salida digital y el nivel lógico está configurado en Alto, de lo contrario puede producir varios tonos según las frecuencias generadas desde la salida PWM analógica que está conectada a él. (nota: el rango de frecuencia que el oído humano normal puede distinguir está entre 20 Hz y 20kHz.)

**[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove-Tilt Switch es el equivalente de un botón, y se usa como entrada digital. Dentro del interruptor de inclinación hay un par de bolas que hacen contacto con los pines cuando la carcasa está vertical. Inclina la carcasa y las bolas no se tocan, por lo tanto no hacen conexión. Está conectado a la línea SIG, NC no se usa en este módulo Grove.

**[Grove - Chainable RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - Chainable RGB LED está basado en el chip P9813 que es un controlador de LED de color completo. Proporciona 3 controladores de corriente constante así como salida modulada de 256 tonos de gris. Se comunica con un MCU usando transmisión de 2 cables (Datos y Reloj). Esta transmisión de 2 cables puede usarse para conectar en cascada módulos adicionales Grove - Chainable RGB LED. La regeneración de reloj incorporada mejora la distancia de transmisión. Este módulo Grove es adecuado para cualquier proyecto basado en LED coloridos.

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

El Grove - Light sensor integra una foto-resistencia(resistor dependiente de luz) para detectar la intensidad de luz. La resistencia de la foto-resistencia disminuye cuando la intensidad de luz aumenta. Un chip dual OpAmp LM358 a bordo produce voltaje correspondiente a la intensidad de luz(es decir, basado en el valor de resistencia). La señal de salida es un valor analógico, mientras más brillante sea la luz, mayor será el valor.

**[Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/linefinder.jpg)

Grove-Line finder está diseñado para robot seguidor de líneas. Tiene un LED emisor IR y un fototransistor sensible a IR. Puede enviar señal digital a un microcontrolador para que el robot pueda seguir una línea negra sobre fondo blanco, o viceversa.

**[Grove - LCD RGB Backlight](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/LCD.jpg)

Este módulo Grove - LCD RGB Backlight es una pantalla LCD de 16 Caracteres x 2 Líneas, usa interfaz de bus I2C para comunicarse con la placa de desarrollo, por lo tanto esto reducirá el encabezado de pines de 10 a 2 lo cual es muy conveniente para el sistema Grove. Este módulo de pantalla LCD también soporta caracteres personalizados, puedes crear y mostrar símbolos de corazón o figuras de palitos en este módulo LCD a través de una configuración de codificación simple.

**[Grove - Temperature & Humidity Sensor(DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11.jpg)

Este sensor de Temperatura y Humedad proporciona una salida digital pre-calibrada. Un elemento sensor capacitivo único mide la humedad relativa y la temperatura se mide por un termistor de coeficiente de temperatura negativo (NTC). Tiene excelente confiabilidad y estabilidad a largo plazo. Por favor nota que este sensor no funcionará para temperaturas por debajo de 0 grados.

**[Grove - 3-Axis Digital Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5-p-765.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_cover.jpg)

El Acelerómetro Digital de 3 Ejes es la parte clave en proyectos como detección de orientación, detección de gestos y detección de movimiento. Este Acelerómetro Digital de 3 Ejes(±1.5g) está basado en el módulo de bajo consumo de energía de Freescale, MMA7660FC. Cuenta con hasta 10,000g de alta capacidad de supervivencia a choques y tasa configurable de Muestras por Segundo. Para aplicaciones generosas que no requieren un rango de medición demasiado grande, esta es una gran opción porque es duradero, ahorra energía y es costo-eficiente.

## COMENZANDO

### Requisito Mínimo

- Kit de inicio Grove
- Cable micro USB
- Computadora con Arduino IDE

### Tutorial Básico

#### Configuración básica del Arduino IDE

**Paso 1.** Instalar el controlador USB a Serial para Seeeduino Lotus V1.1

Seeeduino lotus Versión 1.1 y superior que adapta el chip USB a serial CP2102N, añade soporte para la mayoría de sistemas operativos incluyendo Windows, MacOS y Linux, por favor descarga e instala el controlador relevante para tu sistema operativo.
Enlaces de descarga:
Sitio web oficial: [CP210x USB to UART Bridge VCP Drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/logo.jpg)

**Instalar controlador**

Windows:

Extrae/descomprime el archivo de controlador comprimido descargado, abre el archivo extraído y selecciona instalar el controlador relevante según los bits de tu sistema operativo, en este caso seleccionamos 64bit, los usuarios de SO de 32bits deben seleccionar el archivo _x86, sigue el asistente de instalación para instalar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win1.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win3.png)

Mac OS:

Haz doble clic en el archivo "Silicon Labs VCP Driver.pkg", y sigue el asistente de configuración para instalar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/mac1.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/mac2.png)

**Paso 2.** Descargar e Instalar [Arduino IDE](https://www.arduino.cc/en/Main/Software)

Por favor descarga e instala el Arduino IDE según tu sistema operativo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard.png)

<b id="step3">Paso 3.</b> Añadir biblioteca para Seeeduino Lotus

- Abre Arduino | Preferencias, desde la ventana de preferencias bajo la página de configuración encuentra URLs Adicionales del Gestor de Placas, copia y pega la URL de la Biblioteca en el cuadro de texto, luego presiona ok para que tome efecto.
URL de la Biblioteca: [https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard3.png)

- Abre Herramientas | Placa: | Gestor de Placas, busca Seeeduino AVR y haz clic en instalar para instalar la biblioteca Seeeduino AVR. si no puedes ver el Seeeduino AVR listado en la ventana del Gestor de Placas, por favor repite el primer paso y asegúrate de que la URL que ingresaste sea correcta.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard4.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard5.png)

- Abre Herramientas | Placa: bajo la lista secundaria deberías encontrar la sección Placas Seeeduino AVR como se muestra, y por favor selecciona las placas correctas según tu entorno de desarrollo, en este tutorial deberíamos seleccionar Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard6.png)
 
**Paso 4.** Conectar Seeeduino Lotus

Por favor conecta Seeeduino Lotus y la computadora a través de un cable Micro-USB, el LED verde de alimentación en Seeeduino lotus debería encenderse.

![with micro-USB](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/usb.jpg)

**Paso 5.** Configurar IDE para Seeeduino Lotus

Por favor sigue los pasos como se mostró antes, selecciona "Seeeduino Lotus" bajo el Gestor de Placas.

Selecciona el dispositivo serial de la placa Arduino desde el menú Herramientas | Puerto Serial. Para encontrar el dispositivo serial correcto, puedes desconectar tu placa Arduino y reabrir el menú; la entrada que desaparezca debería ser la placa Arduino. Reconecta la placa y selecciona ese puerto serial. La entrada que seleccionaste debería contener "SLAB_USB".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard07.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard7.png)

Configura "Herramientas | Programador" como "AVR ISP".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard8.png)

### Demo Blink

Después de toda la configuración básica del Arduino IDE, ahora podemos probar el código demo blink en la placa de desarrollo Seeeduino Lotus. Nota: Deberías completar los pasos anteriores para continuar con lo siguiente.

**Seleccionar Demo Blink Desde el Menú**

Selecciona Archivo | Ejemplos | 01 Basics | Blink desde la barra de menú, el código de ejemplo blink debería aparecer en la nueva ventana.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard9.png)

**Subir código**

Por favor asegúrate de que la Placa, Puerto y Programador correctos estén seleccionados bajo el menú herramientas.
Ahora podemos subir el código a la placa de desarrollo Lotus presionando el icono de flecha derecha en la esquina superior izquierda del IDE.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard10.png)

Una vez que el código se haya subido exitosamente, el texto "avrdude done. Thank you." debería aparecer en la ventana de registro del IDE.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard11.png)

Ahora deberías ver el LED integrado parpadear en un intervalo de un segundo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/blink.jpg)

**Explicación del código blink**

void setup() es la función de configuración que solo se ejecuta una vez cuando presionas reset o enciendes la placa.

```cpp

void setup() {
}

```

inicializa el pin digital LED_BUILTIN como una salida.

```cpp

pinMode(LED_BUILTIN, OUTPUT);

```

void loop() es la función de bucle que se ejecuta una y otra vez para siempre.

```cpp

void loop() {
}

```

digitalWrite() es para establecer el pin LED_BUILTIN como nivel de voltaje HIGH, lo que significa encender el LED. De manera similar, para apagar el LED simplemente establece el nivel de voltaje a LOW cambiando el código HIGH a LOW.

```cpp

digitalWrite(LED_BUILTIN, HIGH);
digitalWrite(LED_BUILTIN, LOW);

```

delay() significa pausar el programa, el número dentro del paréntesis significa la cantidad de tiempo (en milisegundos) para pausar (retrasar).

```cpp

delay(1000);

```

## Tutorial de 10 Sesiones del Kit de Inicio Grove

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/kit.jpg)

### Objetivo

Esta sección consta de 10 tutoriales, los tutoriales se pueden dividir en dos partes, las primeras 8 sesiones introducen la operación básica de cada módulo individual de este kit de inicio, y las últimas 2 sesiones usan casos de ejemplo para mostrar cómo los módulos pueden ser combinados y aplicados en aplicaciones de la vida real.

### Prerrequisito

El conocimiento fundamental para operar Seeeduino Lotus con Arduino IDE y las habilidades de codificación son esenciales para este tutorial. Por lo tanto, por favor asegúrate de haber completado el tutorial de configuración básica anterior e instalado exitosamente el controlador USB a serial en tu sistema operativo para Seeeduino Lotus, terminado la demostración de Blink LED y asegurar que funciona completamente con la placa Seeeduino Lotus.

### Resultado de aprendizaje

- Ser capaz de operar Arduino IDE para escribir código para Seeeduino Lotus V1.1 para controlar módulos del Kit de Inicio Grove.
- Ser capaz de identificar el tipo de módulos incluidos en este Kit y sus aplicaciones.
- Ser capaz de demostrar cada componente del Kit de Inicio Grove y utilizar el módulo relevante para tus propios proyectos después de este tutorial

### Sesión 1: Grove - Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

**Objetivo** 

Usar el buzzer para generar algo de ruido y también configurar frecuencia específica para producir algunos tonos.

**Conocimiento clave**

- El módulo buzzer es un actuador.
- Usar señal digital para hacer ruido de zumbido
- Producir tono específico configurando la frecuencia correspondiente
- Usar la función tone(pin, frequency, duration) para hacer que el buzzer reproduzca música
- Aprender cómo usar "for loop" en Arduino IDE

**Requerimiento de hardware**

Auto-preparar

- cable micro-USB
- una computadora con Arduino IDE y controlador serial-a-USB instalado

Incluido en el kit

- Placa de desarrollo Seeeduino Lotus V1.1
- Cable Grove
- Módulo Grove – Buzzer 

**Conexión de hardware**

**Paso 1.** Por favor usa el cable Grove para conectar el módulo Grove - Buzzer al puerto D6 de Seeeduino Lotus

![D6 with seeeduino](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

**Paso 2.** Conecta Seeeduino Lotus con la computadora mediante un cable micro USB.

**Programación de software** 

**Ejemplo 1**: Usar lógica digital alta/baja para hacer que el buzzer "zumbe"

Paso 1: Copia y pega el siguiente código en Arduino IDE

```
//assign buzzer as pin 6
#define buzzer 6

void setup()
{
  //set buzzer as output
  pinMode(buzzer, OUTPUT);
}

void loop()
{ //turn on buzzer(set logic level high)
  digitalWrite(buzzer, HIGH);
  //wait 1s
  delay(1000);
  //turn off buzzer(set logic level low)
  digitalWrite(buzzer, LOW);
  //wait 1s
  delay(1000);
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

:::success
 Cuando el código termine de cargarse, puedes escuchar "buzz" con un intervalo de 1 segundo entre sonidos.
:::
**Ejemplo 2**: Usar diferentes frecuencias para hacer que el zumbador genere diferentes tonos.

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//assign buzzer as pin 6 
#define buzzer 6                

void setup()
{
  /* tone(pin, frequency, duration) */
  //set buzzer pin to play 264Hz for 300ms
  tone(buzzer, 262, 300);
  //wait 1s
  delay(1000);

  //set buzzer pin to play 297Hz for 300ms
  tone(buzzer, 294, 300);
  //wait 1s
  delay(1000);

  //set buzzer pin to play 330Hz for 300ms
  tone(buzzer, 330, 300);
  //wait 1s
  delay(1000);
}

void loop()
{
  // no need to repeat the tone.
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

:::success
 Cuando el código termine de cargarse, deberías escuchar que el zumbador está haciendo el sonido "Do、 Re、 Mi".
:::
**Ejemplo 3**: Usar la función tone(pin, frequency, duration) para hacer música desde el zumbador 

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

// initalise the frequency of the notes
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

//assign buzzer as pin 6
#define buzzer 6

// notes in the melody:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

void setup() {
  // iterate over the notes of the melody:
  for (int thisNote = 0 ; thisNote < 25 ; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.
    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / noteDurations[thisNote];
    tone(buzzer, melody[thisNote], noteDuration);

    // to distinguish the notes, set a minimum time between them.
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    noTone(buzzer);
  }
}

void loop() {
  // no need to repeat the melody.
}

```

Paso 2: Subir el código al Seeeduino Lotus

Paso 3: Observar el resultado

:::success
 Cuando el código termine de subirse, deberías escuchar una melodía del zumbador, por favor identifica qué canción es.
:::

**Exploración Adicional**

Por favor revisa el repositorio de GitHub de Brett Hagman "[Tone](https://github.com/bhagman/Tone)" para crear tonos y música.

### Sesión 2: Grove - Interruptor de Inclinación

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

**Objetivo** 
Usar el módulo de interruptor de inclinación para encender/apagar el LED integrado en el Seeeduino Lotus, y también usar el interruptor de inclinación para hacer que el módulo zumbador de la sesión anterior suene.

**Conocimiento clave**

- El Interruptor de Inclinación es un módulo de entrada de señal
- La operación del interruptor de inclinación
- usa la función digitalRead(pin) para obtener la señal lógica de entrada del interruptor de inclinación que es HIGH para encendido, y LOW para apagado.
- función if(condición){}else{} y operadores de comparación como !=(no igual a), &lt;(menor que), &lt;=(menor o igual que), ==(igual a), &gt;(mayor que) y &gt;=(mayor o igual que).

**Requisitos de hardware**

Auto-preparar

- cable micro-USB
- una computadora con Arduino IDE y controlador serial-a-USB instalado

Incluido en el kit

- Placa de desarrollo Seeeduino Lotus V1.1
- Cable Grove
- Grove – Interruptor de Inclinación
- Grove – Zumbador
 
**Conexión de hardware**

Paso 1: Conectar Grove – Interruptor de Inclinación al puerto D5 del Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_ard.jpg)

Paso 2: Conectar el Seeeduino Lotus con la computadora mediante un cable micro USB

**Programación de software** 
**Ejemplo 1**: Observar el comportamiento del interruptor de inclinación usando el Monitor Serie

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//assign name tiltswitchPin to pin 5
#define tiltswitchPin 5
//creates a integer variable called 'val' to store read value
int val;

void setup()
{
  //set pinMode of tiltswitchPin to input
  pinMode(tiltswitchPin, INPUT);
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
}

void loop()
{ //read the tilt switch input
  val = digitalRead(tiltswitchPin);
  //display the tilt switch status, 1 is on, 0 is off.
  Serial.println(val);
}

```

Paso 2: Cargar código en Seeeduino Lotus

Paso 3: Abrir Monitor Serie

para abrir el monitor serie por favor selecciona Herramientas | Monitor Serie desde la barra de menú, o simplemente haz clic en el icono de lupa en la barra de herramientas. Nota: Por favor espera a que el código termine de cargarse antes de abrir el monitor serie.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard12.png)

Paso 4: Observar resultado

Por favor inclina el interruptor de inclinación en ambas direcciones, deberías ver "1" o "0" mostrado en el monitor serie, ahora puedes encontrar la orientación correcta para que el interruptor de inclinación se encienda/apague.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_off&on.jpg)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard13.png)

**Ejemplo 2**: Usar interruptor de inclinación para encender/apagar LED integrado

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//set title of pin 5 as tiltSwitch
#define tiltSwitch 5

void setup()
{ //set pin 5(tilt switch) as input pin
  pinMode(tiltSwitch, INPUT);
  //set pin 13(Builtin LED) as output pin
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{ //read the status of tilt switch
  if (HIGH == digitalRead(tiltSwitch)) {
    /*
       if the logic level of tilt switch
       is high turn on the builtin LED
    */
    digitalWrite(LED_BUILTIN, HIGH);
  } else
  {
    //otherwise turn off the builtin LED
    digitalWrite(LED_BUILTIN, LOW);
  }
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

:::success
 Ahora deberías poder encender/apagar el LED integrado en el Seeeduino Lotus inclinando el interruptor de inclinación en la orientación correcta.
:::
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_off&on.jpg)

**Ejemplo 3**: Usar el interruptor de inclinación para pausar y reproducir el tono del zumbador
Por favor conecta el módulo Grove – Buzzer al puerto D6 del Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_tilt.jpg)

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

// initalise the frequency of the notes
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// notes in the melody:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

//set title of pin 5 as tiltSwitch
#define tiltSwitch 5
//set title of pin 6 as buzzer
#define buzzer 6
// set variable currentNote to store latest note played
int currentNote;

void setup()
{
  //set pin 5(tilt switch) as input pin
  pinMode(tiltSwitch, INPUT);
}

void loop()
{
  /*read the status of tilt switch
if the logic level of tilt switch
is high, start play music */
  if (HIGH == digitalRead(tiltSwitch)) {

for (int thisNote = currentNote ; thisNote < 25 ; thisNote++) {
  // to calculate the note duration, take one second divided by the note type.
  //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
  int noteDuration = 1000 / noteDurations[thisNote];
  tone(buzzer, melody[thisNote], noteDuration);

  // to distinguish the notes, set a minimum time between them.
  int pauseBetweenNotes = noteDuration * 1.30;
  delay(pauseBetweenNotes);

  /*reset the currentNote to the 0
is the music is finished*/
  if (thisNote >= 24) {
currentNote = 0;
  }

  /*druing the music read the status
of tilt switch if the logic level
of tilt switch is LOW, stop play
music and store the previous played
tone and jump to next tone*/
  if (LOW == digitalRead(tiltSwitch)) {

//store the current note(thisNote) to currentNote
currentNote = thisNote;
//set the next note ready to play by increase currentNote by 1 increament
currentNote ++;
/*reset the currentNote to the beginning
  is the music is finished*/
if (currentNote >= 25)
{
  //restart the music from beginning by reset the currentNote to 0,
  currentNote = 0;
}
//if the tilt switch is set to logic level low, stop play music
break;
  }
}
  }
}

```

Paso 2: Subir código al Seeeduino Lotus

Paso 3: Observar resultado

:::success
 Ahora deberías poder pausar el tono de llamada inclinando el interruptor de inclinación a la posición de apagado, y reanudar el tono musical inclinando el interruptor de inclinación a la posición de encendido.
:::
**Exploración Adicional**

Después de esta sesión, puedes conectar el módulo sensor de interruptor de inclinación a la tapa de tu caja de herramientas, de modo que cuando levantes la tapa, active el interruptor de inclinación para encenderse, luego puedes establecer un retraso por un período corto para activar el zumbador y hacer algunos tonos que te recuerden que la tapa aún está abierta, así no olvidarás cerrar la tapa después de haber terminado de usar la caja de herramientas.

### Sesión 3: Grove – LED RGB Encadenable

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

**Objetivo** 

Usar código para controlar el LED RGB encadenable para mostrar diferentes colores, y cambiar entre colores usando el interruptor de inclinación.

**Conocimiento clave**

- Grove – LED RGB Encadenable es un actuador
- Importar biblioteca para módulo grove
- Usar función setColorHSB() para controlar el matiz, saturación y brillo del módulo LED
- Usar función setColorRGB() para controlar el color y brillo del módulo LED
- Usar operación % (módulo) para encontrar el resto, ej. 5%2=1, 9%3=0.
- Usar función switch(val)…case…;

**Requerimiento de hardware** 

Auto-preparar

- cable micro-USB
- computadora con Arduino IDE y controlador serial-a-USB instalado

Incluido en el kit

- Placa de desarrollo Seeeduino Lotus V1.1
- Cable Grove
- Grove – LED RGB Encadenable
- Grove – Interruptor de Inclinación
- Grove – Zumbador

**Conexión de hardware**

Paso 1: Conectar Grove – LED RGB Encadenable al puerto D7 del Seeeduino Lotus, Nota: por favor conecta el puerto G|V|DI|CI del LED como se muestra abajo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_ard.jpg)

Paso 2: Conectar Seeeduino Lotus con la computadora mediante un cable micro USB.

**Programación de software**

**Añadir Biblioteca**

Los pasos a continuación muestran cómo añadir [biblioteca](https://github.com/pjpmarques/ChainableLED/archive/v1.2.zip) para Grove – LED RGB Encadenable.

Paso 1: Abrir repositorio Github desde URL de Biblioteca, y descargar los datos zip

Por favor encuentra "Clone or download | Download ZIP" desde la página de Github, debes elegir Download ZIP únicamente, y por favor recuerda la ruta del archivo donde has descargado y guardado el archivo zip.

Paso 2: Seleccionar "include Library | Add .ZIP Library..

Por favor selecciona abrir Sketch | Include Library | Add .ZIP Library…, en la nueva ventana emergente por favor selecciona el archivo zip que has descargado del paso anterior, luego haz clic en elegir.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard14.png)

Paso 3: Probar si la biblioteca se añadió exitosamente

Seleccionar y abrir File | Examples | ChainableLED-1.2 | CycleTroughColors

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard15.png)

Subir Código: Hacer clic en subir el código

:::success
  si el módulo LED está ciclando a través de diferentes colores, entonces sabes que has cargado exitosamente la Biblioteca.
:::
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_flash_8.jpg)

Conclusión: El método de añadir biblioteca permite al usuario añadir fácilmente controladores de sensores de terceros y bibliotecas hechas por vendedores de módulos de sensores, por ejemplo, en esta sesión del tutorial, usamos la función setColorRGB(byte led, byte red, byte green, byte blue) que es una de las funciones implementadas por Seeed Studio, esto reduce el costo de desarrollo del usuario cuando adaptan un nuevo módulo de sensor. Necesitarás añadir más bibliotecas para los otros módulos grove más adelante.

**Ejemplo 1**:Usar función setColorHSB para cambiar el color del LED

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  //initialise ChainableLED leds
  leds.init();
}
//initialise hue as float point with value of 0.0
float hue = 0.0;
//initialise up as boolean with value of true
boolean up = true;

void loop()
{
  /*for loop is used for loop through
    each LED connected to the chain
    in this case there is only one LED
  */
  for (byte i = 0; i < NUM_LEDS; i++) {

    /*setColorHSB(byte led, float hue, float saturation, float brightness);
       in this case set the first and only chainableLED 0 with changing hue
       and full saturation and half brightness
    */
    leds.setColorHSB(i, hue, 1, 0.5);
    //    delay for 50ms for each color
    delay(50);

    /*if up is true increase
      hue at 0.025 interval
      otherwise decrease hue
      at 0.025 interval
    */
    if (up) {
      hue += 0.025;
    }
    else
    {
      hue -= 0.025;
    }
    /*
      if hue is greater than 1.0
       and up is true set up to false,
       otherwise if hue is less or
       equal to 0.0 and up is not
       ture(! means is not) set up
       to true
    */
    if (hue >= 1.0 && up)
    {
      up = false;
    }
    else if (hue <= 0.0 && !up)
    {
      up = true;
    }
  }
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

Deberías ver que el color del LED cambia según el valor del matiz, que aumenta en incrementos de 0.025 y cuando el valor del matiz alcanza 1, el valor del matiz debería reducirse en decrementos de 0.025 hasta que el valor se convierta en 0, y cada color debería encenderse durante 50 milisegundos.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_flash_8.jpg)

**Ejemplo 2**: Usar la función setColorRGB para cambiar el color y brillo del LED

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

/*
   Example of using the ChainableRGB library for controlling a Grove RGB.
   This code fades in an out colors in a strip of leds.
*/

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  //initialise ChainableLED leds
  leds.init();
}
//initialise power as byte with value of 0
byte power = 0;

void loop()
{
  /*for loop is used for loop through
    each LED connected to the chain
    in this case there is only one LED
  */
  for (byte i = 0; i < NUM_LEDS; i++)
  {
    /*
      % means modulo operation to find remainder
      eg 0 % 2 = 0, 1 % 2 = 1,  2 % 2 = 0...
      setColorRGB(byte led, byte red, byte green, byte blue);
      so in this case the even number of the LED chain
      will fading green color, odd number of the LED
      chain will fading red color, since we count the
      first LED as 0.
    */
    if (i % 2 == 0)
      //brighter red color from 0 to full power
      leds.setColorRGB(i, power, 0, 0);
    else
      //dimmer green color from full power to 0
      leds.setColorRGB(i, 0, 255 - power, 0);
  }
  //set power increment as 10
  power += 10;
  //light 0.5s for each brightness
  delay(500);
}

```

Paso 2: Subir el código al Seeeduino Lotus

Paso 3: Observar el resultado

deberías ver que el LED de color rojo aumenta el brillo cada 0.5s, porque solo establecimos el valor para la variable roja en la función setColorRGB(byte led, byte red, byte green ,byte blue).

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_eg2.jpg)

Si cambiamos tanto las variables roja como verde de esto:

```cpp
leds.setColorRGB(i, power, 0, 0);
```

a esto:

```cpp
leds.setColorRGB(i, power, 255-power, 0);
```

por favor observa la diferencia.

**Ejemplo 3**: Usar interruptor de inclinación para controlar el LED y el Buzzer

Conecta Grove – Tilt Switch al puerto D5 del Seeeduino Lotus.

Conecta Grove – Buzzer module al puerto D6 del Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_buzzer_tilt.jpg)

Paso 1: copia y pega el siguiente código en Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

// initalise the frequency of the notes
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// notes in the melody:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

//set title of pin 5 as tiltSwitch
#define tiltSwitch 5
//set title of pin 6 as buzzer
#define buzzer 6

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

// set variable currentNote to store latest note played
int currentNote;
//initialise hue as float point with value of 0.0
float hue = 0.0;
//initialise up as boolean with value of true
boolean up = true;
//initialise power as byte with value of 0
byte power = 0;
//initialise color as integer with value of 0
int color = 0;

void setup()
{
  //set pin 5(tilt switch) as input pin
  pinMode(tiltSwitch, INPUT);
  //initialise ChainableLED leds
  leds.init();
}

void loop()
{
  /*read the status of tilt switch
    if the logic level of tilt switch
    is high, start play music */
  if (HIGH == digitalRead(tiltSwitch)) {

    for (int thisNote = currentNote ; thisNote < 25 ; thisNote++) {
      // to calculate the note duration, take one second divided by the note type.
      //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
      int noteDuration = 1000 / noteDurations[thisNote];
      tone(buzzer, melody[thisNote], noteDuration);

      // to distinguish the notes, set a minimum time between them.
      int pauseBetweenNotes = noteDuration * 1.30;
      delay(pauseBetweenNotes);

      /*reset the currentNote to the 0
        is the music is finished*/
      if (thisNote >= 24) {
        currentNote = 0;
      }

      /*set the LED to loop through
        different colors with different hue*/
      leds.setColorHSB(0, hue, 1, 0.5);

      /*if up is true increase
        hue at 0.025 interval
        otherwise decrease hue
        at 0.025 interval
      */
      if (up) {
        hue += 0.025;
      }
      else
      {
        hue -= 0.025;
      }
      /*if hue is greater than 1.0
         and up is true set up to false,
         otherwise if hue is less or
         equal to 0.0 and up is not
         ture(! means is not) set up
         to true
      */
      if (hue >= 1.0 && up)
      {
        up = false;
      }
      else if (hue <= 0.0 && !up)
      {
        up = true;
      }

      /*druing the music read the status
        of tilt switch if the logic level
        of tilt switch is LOW, stop play
        music and store the previous played
        tone and jump to next tone*/
      if (LOW == digitalRead(tiltSwitch)) {
        /* use switch...case to set the LED loop through three colors
           Red when color = 0 enters case 0
           Green when color = 1 enters case 1
           Blue when color = 2 enters case 2
           reset color to 0 if color is greater or equals 3
        */
        if (color >= 3) {
          color = 0;
        }
        switch (color) {
          case 0:
            //set LED to Red
            leds.setColorRGB(0, 255, 0, 0);
            break;
          case 1:
            //set LED to Green
            leds.setColorRGB(0, 0, 255, 0);
            break;
          case 2:
            //set LED to Blue
            leds.setColorRGB(0, 0, 0, 255);
            break;
        }
        //increase color by 1 increment everytime enter this condition
        color ++;

        //store the thisNote to currentNote
        currentNote = thisNote;
        //set the next note ready to play by increase currentNote by 1 increament
        currentNote ++;
        /*reset the currentNote to the beginning
          is the music is finished*/
        if (currentNote >= 25)
        {
          //restart the music from beginning by reset the currentNote to 0,
          currentNote = 0;
        }
        //if the tilt switch is set to logic level low, stop playing music
        break;
      }
    }
  }
}

```

Paso 2: Cargar código en Seeeduino Lotus

Paso 3: Observar resultado

Al inclinar el interruptor de inclinación, deberías ver que cuando el interruptor de inclinación está activado, el LED cambia de color junto con el tono del zumbador que cambia, cuando el interruptor de inclinación está desactivado, el LED ciclará a través de Rojo, Verde y Azul y el zumbador se detiene.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_eg3.jpg)

**Exploración Adicional**

Después de esta sesión, ahora puedes combinar los módulos de las primeras tres sesiones y convertirlos en una caja de regalo de cumpleaños, donde puedes colocar el sensor de interruptor de inclinación en la tapa de la caja, al momento que la caja se abre, el interruptor de inclinación se activa, entonces el zumbador comienza a reproducir la canción de cumpleaños y la luz LED comienza a parpadear luces coloridas.

### Sesión 4: Grove - Sensor de Luz

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

**Objetivo** 

Usar el módulo sensor de luz para encender/apagar el módulo LED RGB encadenable, y controlar el brillo del LED según la intensidad de luz ambiental.

**Conocimiento clave**

- El módulo Sensor de Luz es un módulo de entrada de señal Analógica
- usar la función map(value, fromLow, fromHigh, toLow, toHigh) para re-mapear el número de salida Analógica de un rango a otro como más claro y práctico.
- usar sensor de luz como un interruptor de luz
- usar sensor de luz para controlar el brillo del LED detectando el brillo ambiental

**Requerimiento de hardware** 

Auto-preparar

- cable micro-USB
- una computadora con Arduino IDE y controlador serial-a-USB instalado

Incluido en el kit

- Placa de desarrollo Seeeduino Lotus V1.1
- cable Grove
- Grove – Sensor de Luz
- Grove – LED RGB Encadenable

**Conexión de hardware**

Paso 1: Conectar el módulo Grove – Sensor de Luz al puerto A0 de Seeeduino Lotus

Paso 2: Conectar Grove – LED RGB Encadenable al puerto D7 de Seeeduino Lotus

Paso 3: Enlazar Seeeduino Lotus con la computadora mediante un cable micro USB

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_rgb.jpg)

**Programación de software**

**Ejemplo 1**: Usa el Sensor de luz para encender/apagar LED por el brillo de la luz ambiental

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED, set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//naming analog pin A0 as LightSensor
#define LightSensor A0

void setup()
{
  //initialise ChainableLED leds
  leds.init();
}

void loop()
{
  //read the value of Light Sensor and store to value
  int value = analogRead(LightSensor);
  //if Sensor reading is less than 150 turn on LED
  if (value < 150) {
    //turn on LED
    leds.setColorRGB(0, 10, 10, 10);
    //delay for 1s
    delay(1000);
  } else
  {
    //turn off LED
    leds.setColorRGB(0, 0, 0, 0);
    //delay for 1s
    delay(1000);
  }
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

Nota: si la luz ambiental es demasiado brillante, puedes usar tu mano para cubrir el módulo del sensor de luz, entonces el LED debería encenderse. Cuando la luz ambiental hace que el valor de lectura del sensor de luz supere 150, el LED debería apagarse.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_eg1.jpg)

**Ejemplo 2**: Usa el sensor de luz para controlar el brillo del LED

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

#define LightSensor A0

void setup()
{
  //initialise ChainableLED leds
  leds.init();
  Serial.begin(9400);
}

//initialise hue as float point with value of 0.0
float hue = 0.0;
//initialise up as boolean with value of true
boolean up = true;

void loop()
{
  //read the value of Light Sensor and store to value
  int value = analogRead(LightSensor);
  /*map(value, fromLow, fromHigh, toLow, toHigh)
    Re-maps a number from one range to another
    In this case maping the analog value of light sensor
    ranging from 0-800 to 100-0, so when the brightness
    of surrounding enviroment is high so the sensor reading
    value is high, therefore the maped value should be opposite,
    so the birghtness LED should be dimmer.
    the brightness of chainable LED only accept float number, so
    we divide the maped value with 100. 
  */
  float value_float = map(value, 0, 800, 50, 0) / 100.0;
  /*setColorHSB(byte led, float hue, float saturation, float brightness);
   * use the maped value(value_float) as brightness
  */
  leds.setColorHSB(0, hue, 1, value_float);
  delay(100);

  /*if up is true increase
    hue at 0.025 interval
    otherwise decrease hue
    at 0.025 interval
  */
  if (up) {
    hue += 0.025;
  }
  else
  {
    hue -= 0.025;
  }
  /*if hue is greater than 1.0
     and up is true set up to false,
     otherwise if hue is less or
     equal to 0.0 and up is not
     ture(! means is not) set up
     to true
  */
  if (hue >= 1.0 && up)
  {
    up = false;
  }
  else if (hue <= 0.0 && !up)
  {
    up = true;
  }
}

```

Paso 2: Cargar código en Seeeduino Lotus

Paso 3: Observar resultado

El brillo del LED debería disminuir cuando el brillo ambiental aumenta. Cuando el brillo ambiental disminuye, el brillo del LED debería estar aumentando. Como se muestra, el LED se atenúa cuando hay una luz brillante que incide sobre el sensor de luz, de lo contrario el LED está brillante.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_eg2.jpg)

**Exploración Adicional**

Ahora puedes integrar este módulo sensor de luz en tu sistema de iluminación de pasillo para controlar el brillo de la luz, durante el día el sensor de luz detecta la luz solar y luego atenúa el brillo de la luz del pasillo a bajo, lo cual no solo ahorra energía, sino que también extiende la vida útil de las bombillas.

### Sesión 5: Grove - Line Finder

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/linefinder.jpg)

**Objetivo** 

Usa el buscador de líneas para detectar línea negra, y controlar el color del LED en consecuencia cuando el buscador de líneas detecta línea negra o no.

**Conocimiento clave**

- Grove – Line Finder es un módulo de entrada de señal digital
- Repaso sobre cómo usar el Monitor Serie
- Usa módulo de entrada de señal para controlar Grove – Chainable RGB LED

**Requerimiento de hardware** 

Auto-preparar

- cable micro-USB
- una computadora con Arduino IDE y controlador serie-a-USB instalado

Incluido en el kit
  
- Grove – Line Finder
- Grove – Chainable RGB LED

**Conexión de hardware**

Paso 1: Conectar módulo Grove – Line Finder al puerto D3 de Seeeduino Lotus

Paso 2: Enlazar Seeeduino Lotus con computadora por un cable micro USB

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_ard.jpg)

**Programación de software**

**Ejemplo 1**: Usa Monitor Serie para mostrar y probar señal de salida del buscador de líneas

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//naming pin3 as singalPin
#define signalPin 3

void setup() {
  // initialize the digital pin as an input:
  pinMode(signalPin, INPUT);
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
}

void loop() {
  //read the line detector input 
  int val = digitalRead(signalPin);
  
  //display the line detector status, 1 is black, 0 is white.
  Serial.println(val);
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

Nota: debes mantener al menos 5cm de distancia del objeto a detectar con el detector de líneas. Para probar el detector de líneas debes pegar una tira de cinta negra sobre un papel blanco o azulejos (o usar objetos negros). Ahora apunta el detector de líneas hacia el objeto negro, el Monitor Serie debería mostrar 0, y si alejas el detector de líneas del objeto negro, el Monitor Serie debería mostrar 1.

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg1_1.jpg)

**Ejemplo 2**: Usa el detector de líneas para encender o apagar el módulo Grove – LED RGB Encadenable.

Conecta Grove – LED RGB Encadenable al puerto D7 de Seeeduino Lotus

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_rgb.jpg)

Paso 1: copia y pega el siguiente código en Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//naming pin3 as lineFinder
#define lineFinder 3

void setup() {
  // initialize the digital pin as an input:
  pinMode(lineFinder, INPUT);
  //initialise ChainableLED leds
  leds.init();
}

void loop() {
  /*read the line detector input
   * if detected black(HIGH) turn on LED
  */
  if (HIGH == digitalRead(lineFinder))
  {
    //turn off LED
    leds.setColorRGB(0, 10, 10, 10);
  }
  
  /*read the line detector input
   * if reading Logic low turn off LED
  */
  if (LOW == digitalRead(lineFinder))
  {
    //turn off LED
    leds.setColorRGB(0, 0, 0, 0);
  }
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

Deberías ver que si el detector de línea detecta una línea negra, el LED debería apagarse, de lo contrario el LED debería encenderse si el detector de línea no puede detectar la línea negra.

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg2.jpg)

**Ejemplo 3**: Usa el detector de línea para controlar el LED para que emita luz Roja o Verde

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//naming pin3 as lineFinder
#define lineFinder 3

void setup() {
  // initialize the digital pin as an input:
  pinMode(lineFinder, INPUT);
  //initialise ChainableLED leds
  leds.init();
}

void loop() {
  /*read the line detector input
   * if detected black(HIGH) set Green LED
  */
  if (HIGH == digitalRead(lineFinder))
  {
    //Green LED
    leds.setColorRGB(0, 0, 255, 0);
  }
  
  /*read the line detector input
   * if reading Logic low set Red LED
  */
  if (LOW == digitalRead(lineFinder))
  {
    //Red LED
    leds.setColorRGB(0, 255, 0, 0);;
  }
}

```

Paso 2: Cargar código en Seeeduino Lotus

Paso 3: Observar resultado

Deberías notar que cuando el detector de línea detecta una línea negra, el LED emitirá luz roja, de lo contrario, si el detector de línea no puede detectar la línea negra, el LED debería emitir luz verde.

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg3.jpg)

**Exploración Adicional**

Ahora puedes construir tu propio coche seguidor de línea usando este módulo detector de línea y dos motores con un controlador de motor (puente H), así cuando el detector de línea detecte una línea negra, activa un lado del motor de la rueda, una vez que el detector de línea esté fuera de la línea negra, detén el lado giratorio del motor de la rueda, y activa el otro lado del motor de la rueda, así el coche conducirá a lo largo de la línea negra con la parte frontal del coche girando constantemente a la izquierda o derecha.

### Sesión 6: Grove - LCD RGB Backlight

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/LCD.jpg)

**Objetivo** 

Usa la pantalla Grove - LCD RGB Backlight para mostrar "Hello World" y algunos caracteres personalizados.

**Conocimiento clave**

- Repasar cómo añadir biblioteca
- Dominar el posicionamiento de caracteres y usar código binario para generar caracteres personalizados.
- Texto desplazante mostrado en la pantalla LCD
- Usar el código de caracteres incorporado del LCD para mostrar caracteres especiales, por ejemplo el signo de grado " ° "

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/chartable.png)

**Requisito de hardware** 

Auto-preparar

- cable micro-USB
- una computadora con Arduino IDE y controlador serial-a-USB instalado

Incluido en el kit

- Placa de desarrollo Seeeduino Lotus V1.1
- Cable Grove
- Grove - LCD RGB Backlight

**Conexión de hardware**

Paso 1: Conecta el módulo Grove - LCD RGB Backlight al puerto I2C. de Seeeduino Lotus nota: es el puerto I2C seguido de un punto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_ard.jpg)

Paso 2: Conecta Seeeduino Lotus con la computadora mediante un cable micro USB.

**Programación de software**

**Añadir Biblioteca**

Añade [Biblioteca](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) para la Pantalla Grove - LCD RGB Backlight

Por favor sigue las instrucciones en el tutorial 3 sobre cómo <a href="#step3">añadir biblioteca</a>.

**Ejemplo 1**: Mostrar Hello World

Paso 1: copia y pega el siguiente código en Arduino IDE

```cpp

//include the rgb_lcd library
#include "rgb_lcd.h"

//assign name lcd to rgb_lcd
rgb_lcd lcd;

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    // Print Hello, World! to the LCD.
    lcd.print("Hello, World!");
    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);
    delay(100);
}

```

Paso 2: Subir el código al Seeeduino Lotus

Paso 3: Observar el resultado

Deberías ver "Hello, World!" mostrado en la primera línea y un temporizador de cuenta regresiva en la segunda línea.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/helloworld.jpg)

**Ejemplo 2**: Mostrar el logo de Seeed Studio y usar código de caracteres integrado para mostrar texto

Paso 1: copiar y pegar el siguiente código en el IDE de Arduino

```cpp

//add LCD library
#include "rgb_lcd.h"

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

/*draw customise character
  in this case is the seeed studio logo
*/
byte top_leftleft[8] = {
  B00000,
  B00000,
  B01000,
  B01000,
  B01000,
  B01100,
  B01100,
  B01110
};
byte top_midleft[8] = {
  B00001,
  B00010,
  B00010,
  B00110,
  B00110,
  B00100,
  B01100,
  B01100
};
byte top_midright[8] = {
  B10000,
  B01000,
  B01000,
  B01100,
  B01100,
  B00100,
  B00110,
  B00110
};
byte top_rightright[8] = {
  B00000,
  B00000,
  B00010,
  B00010,
  B00010,
  B00110,
  B00110,
  B01110
};
byte bot_leftleft[8] = {
  B00110,
  B00111,
  B00011,
  B00011,
  B00001,
  B00000,
  B00000,
  B00000
};
byte bot_midleft[8] = {
  B01100,
  B01110,
  B00110,
  B00110,
  B10011,
  B11011,
  B11111,
  B01111
};
byte bot_midright[8] = {
  B00110,
  B01110,
  B01100,
  B01100,
  B11001,
  B11011,
  B11111,
  B11110
};
byte bot_rightright[8] = {
  B01100,
  B11100,
  B11000,
  B11000,
  B10000,
  B00000,
  B00000,
  B00000
};

void setup()
{
  //initialise the lcd screen;
  // set up the lcd's number of columns and rows:
  lcd.begin(16, 2);

  /*create and assign numbers of
    each seeed studio logo elements
  */
  lcd.createChar(0, top_leftleft);
  lcd.createChar(1, top_midleft);
  lcd.createChar(2, top_midright);
  lcd.createChar(3, top_rightright);
  lcd.createChar(4, bot_leftleft);
  lcd.createChar(5, bot_midleft);
  lcd.createChar(6, bot_midright);
  lcd.createChar(7, bot_rightright);


  /* set the cursor to column 4, line 0
    note: line 0 is the first row, since counting begins with 0
    same rule apply to the column as well
  */
  lcd.setCursor(4, 0);
  //Print I and a space to the LCD at column 4, line 0
  lcd.print("I ");
  //set the cursor to column 6, line 0
  lcd.setCursor(6, 0);
  /* Print LOVE by using the LCD character lookup table
     note write() method is mentt to send raw bytes
     print() is mostly intended to format data as ascii.
     this is different way of display text on lcd.
  */
  //character 76 is L on lookup table
  lcd.write(76);
  //the hex number 0x4F(is 79) associates with O on lookup table
  lcd.write(0x4F);
  //character 86 is V on lookup table
  lcd.write(86);
  //character 69 is E on lookup table
  lcd.write(69);
  //set the cursor to column 10, line 0
  lcd.setCursor(10, 0);
  //Print a space and Grove to the LCD
  lcd.write(" Grove");
  //set the cursor to column 4, line 1
  lcd.setCursor(4, 1);
  //Print text Seeed Studio to the LCD
  lcd.print("Seeed Studio");

  //display seeed studio logo
  lcd.setCursor(0, 0);
  lcd.write((unsigned char)0);
  lcd.setCursor(1, 0);
  lcd.write(1);
  lcd.setCursor(2, 0);
  lcd.write(2);
  lcd.setCursor(3, 0);
  lcd.write(3);
  lcd.setCursor(0, 1);
  lcd.write(4);
  lcd.setCursor(1, 1);
  lcd.write(5);
  lcd.setCursor(2, 1);
  lcd.write(6);
  lcd.setCursor(3, 1);
  lcd.write(7);
}

void loop()
{

}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

Verás el Logo de Seeed Studio mostrado en los primeros 8 bloques, seguido de "I Love Grove" en la primera línea, y "Seeed Studio" en la segunda línea.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_seeed.jpg)

**Ejemplo 3**: Texto desplazándose en pantalla LCD

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp


//add LCD library
#include "rgb_lcd.h"

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

/*draw customise character
  in this case is the seeed studio logo
*/
byte top_leftleft[8] = {
  B00000,
  B00000,
  B01000,
  B01000,
  B01000,
  B01100,
  B01100,
  B01110
};
byte top_midleft[8] = {
  B00001,
  B00010,
  B00010,
  B00110,
  B00110,
  B00100,
  B01100,
  B01100
};
byte top_midright[8] = {
  B10000,
  B01000,
  B01000,
  B01100,
  B01100,
  B00100,
  B00110,
  B00110
};
byte top_rightright[8] = {
  B00000,
  B00000,
  B00010,
  B00010,
  B00010,
  B00110,
  B00110,
  B01110
};
byte bot_leftleft[8] = {
  B00110,
  B00111,
  B00011,
  B00011,
  B00001,
  B00000,
  B00000,
  B00000
};
byte bot_midleft[8] = {
  B01100,
  B01110,
  B00110,
  B00110,
  B10011,
  B11011,
  B11111,
  B01111
};
byte bot_midright[8] = {
  B00110,
  B01110,
  B01100,
  B01100,
  B11001,
  B11011,
  B11111,
  B11110
};
byte bot_rightright[8] = {
  B01100,
  B11100,
  B11000,
  B11000,
  B10000,
  B00000,
  B00000,
  B00000
};

void setup()
{
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //wait for 1s
  delay(1000);
}

void loop()
{

  /*create and assign numbers of
    each seeed studio logo elements
  */
  lcd.createChar(0, top_leftleft);
  lcd.createChar(1, top_midleft);
  lcd.createChar(2, top_midright);
  lcd.createChar(3, top_rightright);
  lcd.createChar(4, bot_leftleft);
  lcd.createChar(5, bot_midleft);
  lcd.createChar(6, bot_midright);
  lcd.createChar(7, bot_rightright);

  /* set the cursor to column 4, line 0
    note: line 0 is the first row, since counting begins with 0
    same rule apply to the column as well
  */
  lcd.setCursor(4, 0);
  //Print I and a space to the LCD at column 4, line 0
  lcd.print("I ");
  //set the cursor to column 6, line 0
  lcd.setCursor(6, 0);
  /* Print LOVE by using the LCD character lookup table
     note write() method is mentt to send raw bytes
     print() is mostly intended to format data as ascii.
     this is different way of display text on lcd.
  */
  //character 76 is L on lookup table
  lcd.write(76);
  //the hex number 0x4F(is 79) associates with O on lookup table
  lcd.write(0x4F);
  //character 86 is V on lookup table
  lcd.write(86);
  //character 69 is E on lookup table
  lcd.write(69);
  //set the cursor to column 10, line 0
  lcd.setCursor(10, 0);
  //Print a space and Grove to the LCD
  lcd.write(" Grove");
  //set the cursor to column 4, line 1
  lcd.setCursor(4, 1);
  //Print text Seeed Studio to the LCD
  lcd.print("Seeed Studio");

  //display seeed studio logo
  lcd.setCursor(0, 0);
  lcd.write((unsigned char)0);
  lcd.setCursor(1, 0);
  lcd.write(1);
  lcd.setCursor(2, 0);
  lcd.write(2);
  lcd.setCursor(3, 0);
  lcd.write(3);
  lcd.setCursor(0, 1);
  lcd.write(4);
  lcd.setCursor(1, 1);
  lcd.write(5);
  lcd.setCursor(2, 1);
  lcd.write(6);
  lcd.setCursor(3, 1);
  lcd.write(7);
  
  // scroll 16 positions (string length) to the left
  // to move it offscreen left:
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // scroll one position left:
    lcd.scrollDisplayLeft();
    // wait a bit:
    delay(200);
  }

  // scroll 32 positions (string length + display length) to the right
  // to move it offscreen right:
  for (int positionCounter = 0; positionCounter < 32; positionCounter++) {
    // scroll one position right:
    lcd.scrollDisplayRight();
    // wait a bit:
    delay(200);
  }

  // scroll 16 positions (display length + string length) to the left
  // to move it back to center:
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // scroll one position left:
    lcd.scrollDisplayLeft();
    // wait a bit:
    delay(200);
  }
}

```

Paso 2: Cargar código en Seeeduino Lotus

Paso 3: Observar resultado

Deberías ver la pantalla mostrando texto desplazándose, primero de derecha a izquierda hasta que todo el texto desaparezca al final del lado izquierdo de la pantalla, luego el texto se desplazará de vuelta de izquierda a derecha.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_scroll.jpg)

**Exploración Adicional**

Este [sitio web](https://maxpromer.github.io/LCD-Character-Creator/) te ayuda a generar caracteres personalizados para pantalla LCD controlada por Arduino.

### Sesión 7: Grove - Sensor de Temperatura y Humedad (DHT11)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11.jpg)

**Objetivo**

Usar el módulo sensor DHT11 para detectar la temperatura y humedad del entorno, y mostrar los datos de salida del DHT11 en la Pantalla LCD.

**Conocimientos clave**

- DHT11 es un módulo sensor digital
- repaso sobre cómo operar el Monitor Serie y la Pantalla LCD
- añadir la Librería DHT11 y configuración inicial para DHT11
- usar el Monitor Serie y la Pantalla LCD para mostrar datos del sensor DHT11

**Requisitos de hardware**

Preparar por cuenta propia

- cable micro-USB
- una computadora con Arduino IDE y controlador serie-a-USB instalado

Incluido en el kit

- Placa de desarrollo Seeeduino Lotus V1.1
- cable Grove
- Grove – Sensor de Temperatura y Humedad(DHT11)

**Conexión de hardware**

Paso 1: Conectar el módulo Grove – Sensor de Temperatura y Humedad(DHT11) al puerto D2 de Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_ard.jpg)

Paso 2: Conectar Seeeduino Lotus con la computadora mediante un cable micro USB

**Programación de software**

**Añadir** [Librería](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip)

**Ejemplo 1**: Usa el Monitor Serie para monitorear la temperatura y humedad del entorno

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//add DHT sensor library
#include <DHT.h>

//set digital pin2 as DHTPIN
#define DHTPIN 2
//set the sensor type as DHT 11
#define DHTTYPE DHT11

/*assign dht as the name of DHT sensor
  set the sensor pin as DHTPIN(pin2),
  set the sensor type as DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  //initialise the dht sensor
  dht.begin();
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
  //wait for 2s to initialise the board
  delay(2000);
}

void loop() {
  //store the humidity value to h
  int h = dht.readHumidity();
  //store the temperature value to t(in Celsius)
  int t = dht.readTemperature();
  //store the converted temperature value in fahrenheit to f
  int f = dht.convertCtoF(t);
  //display the title Temperature in C:
  Serial.print("Temperature in C: ");
  //display the temperature value t
  Serial.print(t);
  /* note the difference Serial.print()
     and Serial.println(),
     Serial.print() print the data in the same line
     Serial.println() print the data on the new line
     display the temperature unit ºC and change new line
  */
  Serial.println("ºC");
  //display the title Temperature in F:
  Serial.print("Temperature in F: ");
  //display the temperature value f
  Serial.print(f);
  //display the temperature unit ºF and change new line
  Serial.println("ºF");
  //display the title Humidity:
  Serial.print("Humidity: ");
  //display the Humidity value h
  Serial.print(h);
  //display the % sign
  Serial.println("%");
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Abrir el Monitor Serie

Paso 4: Observar el resultado

Deberías ver un texto similar de datos de temperatura y humedad mostrados en el monitor serie como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result1.png)

**Ejemplo 2**: Usa la pantalla LCD para mostrar datos del sensor DHT11

Primero conecta el módulo Grove - LCD RGB Backlight al puerto I2C de Seeeduino Lotus nota: es el puerto I2C seguido de un punto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_lcd.png)

Paso 1: copia y pega el siguiente código en Arduino IDE

```cpp

//add DHT sensor library
#include <DHT.h>
//add LCD library
#include <rgb_lcd.h>

//set digital pin2 as DHTPIN
#define DHTPIN 2
//set the sensor type as DHT 11
#define DHTTYPE DHT11

/*assign dht as the name of DHT sensor
  set the sensor pin as DHTPIN(pin2),
  set the sensor type as DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

void setup() {
  //initialise the dht sensor
  dht.begin();
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //wait for 2s
  delay(2000);
}

void loop() {
  //store the humidity value to h
  int h = dht.readHumidity();
  //store the temperature value to t(in Celsius)
  int t = dht.readTemperature();
  
  //set the LCD cursor to column 0, line 0
  lcd.setCursor(0, 0);
  //Print text temperature: to the LCD
  lcd.print("Temperature:");
  //set the LCD cursor to column 12, line 0
  lcd.setCursor(12, 0);
  //Print temperature value t to the LCD
  lcd.print(t);
  //set the LCD cursor to column 14, line 0
  lcd.setCursor(14, 0);
  //Print temperature º is character 223 on lookup table
  lcd.write(223);
  //Print C to the LCD
  lcd.print("C");
  
  //set the LCD cursor to column 0, line 1
  lcd.setCursor(0, 1);
  //Print text Humidity: to the LCD
  lcd.print("Humidity: ");
  //set the LCD cursor to column 10, line 1
  lcd.setCursor(10, 1);
  //Print humidity value h to the LCD
  lcd.print(h);
  //set the LCD cursor to column 12, line 1
  lcd.setCursor(12, 1);
  //Print sign % to the LCD
  lcd.print("%");
}

```

Paso 2: Cargar código en Seeeduino Lotus

Paso 3: Observar resultado

puedes ver la temperatura y humedad actuales de la habitación mostradas en la pantalla LCD.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_result.jpg)

**Exploración Adicional**

Después de esta sesión, puedes construir tu propia estación meteorológica usando el sensor DHT11 y la pantalla Grove - LCD RGB Backlight.

### Sesión 8: Grove - Acelerómetro Digital de 3 Ejes

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_cover.jpg)

**Objetivo** 

Aprender cómo operar el acelerómetro digital de 3 ejes observando los datos de salida mostrados en la pantalla LCD.

**Conocimientos clave**

- Usar el monitor serie para mostrar el valor de desplazamiento y aceleración del acelerómetro de 3 ejes, descubrir las relaciones entre los datos de salida y la posición del acelerómetro de 3 ejes
- Usar los datos de desplazamiento del acelerómetro de 3 ejes para calcular los valores de inclinación y balanceo, y observar el cambio de datos relativo a la posición del acelerómetro de 3 ejes.
- Aprender cómo usar el interruptor de inclinación para alternar entre páginas de la pantalla LCD, para que los datos masivos del acelerómetro de 3 ejes puedan mostrarse claramente.

**Requisitos de hardware**

Auto-preparar

- cable micro-USB
- una computadora con Arduino IDE y controlador serie-a-USB instalado

Incluido en el kit

- Placa de desarrollo Seeeduino Lotus V1.1
- Cable Grove
- Grove – Acelerómetro Digital de 3 Ejes
- Grove - LCD RGB Backlight
- Grove – Interruptor de Inclinación 

**Conexión de hardware**

Paso 1: Conectar Grove – Acelerómetro Digital de 3 Ejes al puerto I2C.. de Seeeduino Lotus nota: es el puerto I2C seguido de dos puntos.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_ard.jpg)

Paso 2: Conectar Seeeduino Lotus con la computadora mediante un cable micro USB.

**Programación de software**

**Añadir Librería**

Por favor añade la [Librería del controlador del acelerómetro de 3 ejes](https://github.com/Seeed-Studio/Accelerometer_MMA7660/archive/master.zip) en Arduino IDE

**Ejemplo 1**: Usar el Monitor Serie para mostrar los datos de salida del acelerómetro de 3 ejes

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//add accelemeter library
#include "MMA7660.h"

//assign accelemeter as the name of MMA7660 accelemeter
MMA7660 accelemeter;

void setup()
{
  //initialise the accelemeter
  accelemeter.init();
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
}
void loop()
{
  //initialise x, y, z as int8_t
  int8_t x;
  int8_t y;
  int8_t z;
  //initialise ax, ay, az as float
  float ax, ay, az;
  //get x y z offset value from accelemeter
  accelemeter.getXYZ(&x, &y, &z);
  //display title x =
  Serial.print("x = ");
  //display value of x
  Serial.println(x);
  //display title y =
  Serial.print("y = ");
  //display value of y
  Serial.println(y);
  //display title z =
  Serial.print("z = ");
  //display value of z
  Serial.println(z);
  
  //get ax ay az acceleration value from accelemeter
  accelemeter.getAcceleration(&ax, &ay, &az);
  //display title accleration of X/Y/Z: 
  Serial.println("accleration of X/Y/Z: ");
  //display value of ax
  Serial.print(ax);
  //display unit g
  Serial.println(" g");
  //display value of ay
  Serial.print(ay);
  //display unit g
  Serial.println(" g");
  //display value of az
  Serial.print(az);
  //display unit g
  Serial.println(" g");
  //display ************* as divider to make thing prettier
  Serial.println("*************");
  //wait for 0.5s
  delay(500);
}

```

Paso 2: Cargar código en Seeeduino Lotus

Paso 3: Abrir Monitor Serie

Paso 4: Observar resultado

Por favor, observe los cambios de datos posicionando el acelerómetro de 3 ejes según las imágenes a continuación.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result2.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result3.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result4.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result5.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result6.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result7.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result8.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result9.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result10.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result11.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result12.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result13.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result14.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result15.png)

**Ejemplo 2**: Usa datos del acelerómetro de 3 ejes para calcular el valor de Pitch y Roll

Conocimiento de fondo:

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/aircraft.png)

como se muestra en la figura anterior:

Pitch (Eje transversal) θ: tiene su origen en el centro de gravedad y se dirige hacia la derecha, paralelo a una línea trazada de punta de ala a punta de ala. El movimiento alrededor de este eje se llama pitch. Un movimiento de pitch positivo eleva la nariz de la aeronave y baja la cola. Los elevadores son el control principal del pitch. (Aircraft principal axes 2018)

Yaw (Eje vertical) ψ: tiene su origen en el centro de gravedad y se dirige hacia la parte inferior de la aeronave, perpendicular a las alas y a la línea de referencia del fuselaje. El movimiento alrededor de este eje se llama yaw. Un movimiento de yaw positivo mueve la nariz de la aeronave hacia la derecha. El timón es el control principal del yaw. (Aircraft principal axes 2018)

Roll (Eje longitudinal) Φ: tiene su origen en el centro de gravedad y se dirige hacia adelante, paralelo a la línea de referencia del fuselaje. El movimiento alrededor de este eje se llama roll. Un desplazamiento angular alrededor de este eje se llama bank.[3] Un movimiento de roll positivo levanta el ala izquierda y baja el ala derecha. (Aircraft principal axes 2018)

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

#include <Wire.h>
//add accelemeter library
#include "MMA7660.h"

//assign accelemeter as the name of MMA7660 accelemeter
MMA7660 accelemeter;

//set value 0.5 to alpha
const float alpha = 0.5;

//initialise fXg, fYg, fZg as double with value of 0
double fXg = 0;
double fYg = 0;
double fZg = 0;
//initialise pitch and roll as double
double pitch, roll;

void setup()
{
  //initialise the accelemeter
  accelemeter.init();
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
}
void loop()
{
  //initialise x, y, z as int8_t
  int8_t x;
  int8_t y;
  int8_t z;
  //get x y z offset value from accelemeter
  accelemeter.getXYZ(&x, &y, &z);

  //Low Pass Filter to reduce the noise
  fXg = x * alpha + (fXg * (1.0 - alpha));
  fYg = y * alpha + (fYg * (1.0 - alpha));
  fZg = z * alpha + (fZg * (1.0 - alpha));

  //Roll & Pitch Equations
  roll  = (atan2(-fYg, fZg) * 180.0) / M_PI;
  pitch = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
  //display title roll =
  Serial.print("roll = ");
  //display the roll value
  Serial.println(roll);
  //display title pitch =
  Serial.print("pitch = ");
  //display the pitch value
  Serial.println(pitch);
  delay(500);
}

```

Paso 2: Cargar el código en Seeeduino Lotus

Paso 3: Observar el resultado

Por favor, coloque el acelerómetro de 3 ejes en una superficie nivelada como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis.jpg)

Observar los datos de Roll
Por favor, voltee hacia arriba/abajo el acelerómetro de 3 ejes según las flechas verdes en la figura anterior, ahora el valor de roll debería aumentar cuando voltee hacia abajo, disminuir cuando voltee hacia arriba, además, el valor de roll es positivo cuando voltea hacia abajo en el origen (colocado paralelo al nivel del agua), negativo cuando voltea hacia arriba.

Observar los datos de Pitch
Por favor, incline hacia la izquierda/derecha el acelerómetro de 3 ejes según las flechas rojas en la figura anterior, ahora el valor de pitch debería aumentar cuando incline hacia la derecha, disminuir cuando incline hacia la izquierda, además, el valor de pitch es positivo cuando incline hacia la derecha relativo al origen (colocado paralelo al nivel del agua), negativo cuando incline hacia la izquierda.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result2.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result16.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result10.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result17.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result8.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result18.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result4.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result19.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result6.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result20.png)

Ahora podemos usar el acelerómetro de 3 ejes para controlar o corregir la dirección de aviones o automóviles, convirtiendo los datos de pitch y roll en señales de control para controlar el actuador, la misma tecnología se aplica al ajuste automático de pantalla en teléfonos móviles cuando inclinas el teléfono de vertical a horizontal.

**Ejemplo 3**: Usa pantalla LCD para mostrar los datos de salida del acelerómetro de 3 ejes

Por favor, conecte Grove – Tilt Switch al puerto D5 de Seeeduino Lotus, y conecte el módulo Grove - LCD RGB Backlight al puerto I2C. de Seeeduino Lotus, NOTA: es el puerto I2C seguido de un punto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_lcd_tilt.jpg)

Aquí usamos el interruptor de inclinación para cambiar la página en la pantalla LCD para mostrar diferentes conjuntos de datos, cuando el interruptor de inclinación está ON la pantalla LCD mostrará datos de X, Y, Z Roll y Pitch, Cuando el interruptor de inclinación está en posición OFF la pantalla LCD mostrará los datos de aceleración de aX, aY, aZ en cada dirección relativamente.

Paso 1: copiar y pegar el siguiente código en Arduino IDE

```cpp

//add accelemeter library
#include "MMA7660.h"
//add LCD library
#include <rgb_lcd.h>


//assign name tiltswitchPin to pin 5
#define tiltswitchPin 5

//assign accelemeter as the name of MMA7660 accelemeter
MMA7660 accelemeter;
//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

//set value 0.5 to alpha
const float alpha = 0.5;

//initialise fXg, fYg, fZg as double with value of 0
double fXg = 0;
double fYg = 0;
double fZg = 0;
//initialise pitch and roll as double

void setup()
{
  //initialise the accelemeter
  accelemeter.init();
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //set pinMode of tiltswitchPin to input
  pinMode(tiltswitchPin, INPUT);
  //wait for 2s
  delay(2000);

}
void loop()
{
  /*if tilt switch is on display X, Y, Z, Roll and Pitch data
    if tilt switch is off display X, Y, Z acceleration data
  */
  if (HIGH == digitalRead(tiltswitchPin))
  {
    //initialise x, y, z as int8_t, pitch and roll as double
    int8_t x;
    int8_t y;
    int8_t z;
    double roll;
    double pitch;
    //get x y z offset value from accelemeter
    accelemeter.getXYZ(&x, &y, &z);

    //Low Pass Filter to reduce the noise
    fXg = x * alpha + (fXg * (1.0 - alpha));
    fYg = y * alpha + (fYg * (1.0 - alpha));
    fZg = z * alpha + (fZg * (1.0 - alpha));

    //Roll & Pitch Equations
    roll  = (atan2(-fYg, fZg) * 180.0) / M_PI;
    pitch = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
    //reset the lcd screen
    lcd.clear();
    //set the LCD cursor to column 0, line 0
    lcd.setCursor(0, 0);
    //display text x:
    lcd.print("x:");
    //display value of x
    lcd.print(x);
    //set the LCD cursor to column 5, line 0
    lcd.setCursor(5, 0);
    //display text y:
    lcd.print("y:");
    //display value of y
    lcd.print(y);
    //set the LCD cursor to column 10, line 0
    lcd.setCursor(10, 0);
    //display text z:
    lcd.print("z:");
    //display value of z
    lcd.print(z);

    //set the LCD cursor to column 0, line 1
    lcd.setCursor(0, 1);
    //display text R:
    lcd.print("R:");
    //display value of roll
    lcd.print(roll);
    //set the LCD cursor to column 8, line 1
    lcd.setCursor(8, 1);
    //display text P:
    lcd.print("P:");
    //display value of pitch
    lcd.print(pitch);
  } else
  {
    //initialise ax, ay, az as float
    float ax, ay, az;
    //get ax ay az acceleration value from accelemeter
    accelemeter.getAcceleration(&ax, &ay, &az);
    //reset the lcd screen
    lcd.clear();
    //set the LCD cursor to column 0, line 0
    lcd.setCursor(0, 0);
    //display text ax:
    lcd.print("ax:");
    //display value of ax
    lcd.print(ax);
    //set the LCD cursor to column 8, line 0
    lcd.setCursor(8, 0);
    //display text ay:
    lcd.print("ay:");
    //display value of ay
    lcd.print(ay);
    //set the LCD cursor to column 0, line 1
    lcd.setCursor(0, 1);
    //display text az:
    lcd.print("az:");
    //display value of az
    lcd.print(az);
  }
  //wait 0.5s
  delay(500);
}

```

Paso 2: Cargar código en Seeeduino Lotus

Paso 3: Observar resultado

Primero, por favor prueba si el interruptor de inclinación está alterando la página de la pantalla LCD. Luego puedes rotar el acelerómetro de 3 ejes alrededor para observar el cambio de datos según las rotaciones, familiarízate con los datos de salida asociados a las orientaciones del acelerómetro de 3 ejes.

Mostrar la velocidad, pitch y roll cuando el interruptor de inclinación está encendido/apagado:

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_tilt_on&off.jpg)

**Exploración Adicional**

Después de jugar con el módulo acelerómetro digital, puedes imaginar que el acelerómetro es uno de los módulos más importantes que se puede encontrar en el sistema de guía de cohetes junto con otros módulos como GPS y giroscopios, etc. El acelerómetro también se usa en teléfonos móviles para detectar si tu teléfono está en modo retrato o paisaje, para que la pantalla pueda inclinarse y ajustarse en consecuencia.

### Sesión 9: Jardín Inteligente

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden.png)

**Objetivo**

Hacer un sensor de Jardín Inteligente y sistema de recordatorio combinando módulos del kit de inicio Grove

**Conocimiento clave**

- aprender cómo combinar múltiples módulos en una aplicación
- aprender cómo codificar para múltiples dispositivos en Arduino IDE
- adoptar múltiples módulos para detectar y analizar el ambiente de plantación, mejorando las habilidades de pensamiento lógico

**Análisis de caso de uso**

**Módulo sensor**

Usar módulo DHT11 para monitorear el ambiente circundante de la planta, usa sensor de luz para detectar la intensidad de luz circundante.

**Módulo actuador**

Usa zumbador para hacer diferentes tonos y LCD para notificar diferentes mensajes de advertencia:

- advertencia 1: la temperatura circundante es mayor a 38°C
- advertencia 2: la humedad circundante es menor al 40%
- advertencia 3: La intensidad de luz es menor a 50
- advertencia 4: recordar al usuario regar la planta

Usa pantalla LCD para mostrar:

- estado 1: Mostrar temperatura
- estado 2: Mostrar humedad
- estado 3: recordar al usuario regar la planta

Usar interruptor de inclinación para reiniciar advertencias.

**Diagrama de flujo**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/flowchart.png)

**Requerimiento de hardware**

Auto-preparar

 - cable micro-USB
 - una computadora con Arduino IDE y controlador serial-a-USB instalado
 - marco acrílico DIY

Incluido en el kit

 - Placa de desarrollo Seeeduino Lotus V1.1
 - Cable Grove
 - Grove – Zumbador
 - Grove – LED RGB Encadenable
 - Grove – Sensor de Luz
 - Grove - LCD RGB Backlight
 - Grove – Sensor de Temperatura y Humedad(DHT11)
 - Grove – Interruptor de Inclinación

**Conexión de hardware**

Paso 1:
Conectar módulo Grove – Zumbador al puerto D6 de Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

Conectar Grove – LED RGB Encadenable al puerto D7 de Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect1.jpg)

Conectar módulo Grove – Sensor de Luz al puerto A0 de Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect2.jpg)

Conectar módulo Grove - LCD RGB Backlight al puerto I2C. de Seeeduino Lotus nota: es el puerto I2C seguido por un punto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect3.jpg)

Conectar módulo Grove – Sensor de Temperatura y Humedad(DHT11) al puerto D2 de Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect4.jpg)

Conectar Grove – Interruptor de Inclinación al puerto D5 de Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect5.jpg)

Fijar todos los componentes juntos en el Marco Acrílico DIY

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden3.png)

Paso 2: Conectar Seeeduino Lotus con la computadora mediante un cable micro USB.

**Programación de software**

Paso 1: Por favor añade la [Librería TimeLib](https://github.com/PaulStoffregen/Time/archive/master.zip) en Arduino IDE
Para más información por favor visita [tutorial Arduino TimeLib](http://playground.arduino.cc/code/time)

Paso 2: copia y pega el siguiente código en Arduino IDE

```cpp

//add DHT sensor library
#include <DHT.h>
//add LCD library
#include <rgb_lcd.h>
//add ChainableLED library to this project
#include <ChainableLED.h>
//add Timelib library
#include <TimeLib.h>

//assign default time as epoch time 1514764800 which is 00:00:00 Jan 1 2018
long DEFAULT_TIME = 1514764800;
long waterTime = DEFAULT_TIME + 86400;

//set the number of leds linked to the chain
#define NUM_LEDS  1

//assign LightSensor as A0
#define LightSensor A0
//set digital pin2 as DHTPIN
#define DHTPIN 2
//set title of pin 5 as tiltSwitch
#define tiltSwitch 5
//assign buzzer as pin 6
#define buzzer 6

//set the sensor type as DHT 11
#define DHTTYPE DHT11

/*assign dht as the name of DHT sensor
  set the sensor pin as DHTPIN(pin2),
  set the sensor type as DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

void setup()
{
  //
  setTime(DEFAULT_TIME);
  //initialise the dht sensor
  dht.begin();
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //initialise ChainableLED leds
  leds.init();
  //set pin 5(tilt switch) as input pin
  pinMode(tiltSwitch, INPUT);
  delay(1000);
}
int mode = 0;
void loop()
{
  //-------------DHT---------------------
  //store the humidity value to h
  int h = dht.readHumidity();

  //store the temperature value to t(in Celsius)
  int t = dht.readTemperature();

  int value = analogRead(LightSensor);
  float value_float = map(value, 0, 800, 50, 0) / 100.0;

  leds.setColorHSB(0, 0, 0, value_float);

  //initialise mode to 0, then set to case 0;

  //temperature exceed 38 degrees, then set to case 1;
  if (t > 38) {
    mode = 1;
  }
  //Humidity is less than 40 %, then set to case 2;
  if (h < 40)
  {
    mode = 2;
  }
  //LightSensor reading value is less than 50, then set to case 3;
  if (value < 50)
  {
    mode = 3;
  }
  //current time is greate or equals to waterTime(24 hour ahead), then set to case 4;
  if (now() >= waterTime  ) {
    mode = 4;
  }

  switch (mode) {
    case 0:
      //set the LCD cursor to column 0, line 0
      lcd.clear();
      lcd.setCursor(0, 0);
      //Print text temperature: to the LCD
      lcd.print("Temperature:");
      //set the LCD cursor to column 12, line 0
      lcd.setCursor(12, 0);
      //Print temperature value t to the LCD
      lcd.print(t);
      //set the LCD cursor to column 14, line 0
      lcd.setCursor(14, 0);
      //Print temperature º is character 223 on lookup table
      lcd.write(223);
      //Print C to the LCD
      lcd.print("C");

      //set the LCD cursor to column 0, line 1
      lcd.setCursor(0, 1);
      //Print text Humidity: to the LCD
      lcd.print("Humidity: ");
      //set the LCD cursor to column 10, line 1
      lcd.setCursor(10, 1);
      //Print humidity value h to the LCD
      lcd.print(h);
      //set the LCD cursor to column 12, line 1
      lcd.setCursor(12, 1);
      //Print sign % to the LCD
      lcd.print("%");
      break;
    case 1:
      tone(buzzer, 262, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Temperature too ");
      lcd.setCursor(0, 1);
      lcd.print("High!!");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 2:
      tone(buzzer, 294, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Warning! Too Dry");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 3:
      tone(buzzer, 330, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Not Enough Light");
      lcd.setCursor(0, 1);
      lcd.print("Check the LED..");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 4:
      tone(buzzer, 349, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Time to water");
      lcd.setCursor(0, 1);
      lcd.print("the plants");
      if (HIGH == digitalRead(tiltSwitch))
      {
        waterTime = now() + 86400;
        mode = 0;
      }
      break;

  }
}

```

Paso 3: Cargar código en Seeeduino Lotus

Paso 4: Observar resultado

En condiciones normales, el LED brilla con luz blanca y la pantalla LCD muestra temperatura y humedad.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden.png)

4 estados de advertencia

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden2.png)
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden3.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden4.png)

Advertencia LED rojo

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden5.png)

Restablecer advertencias usando el interruptor de inclinación

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden6.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden7.png)

### Sesión 10: Taza Inteligente

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartcup.png)

**Objetivo**

Hacer una taza inteligente usando buzzer, LED RGB, Acelerómetro de 3 Ejes y pantalla LCD, que recordará al usuario beber agua en un período de tiempo determinado, la taza inteligente también puede detectar si el usuario consume algo de agua, la pantalla LCD mostrará un tiempo de cuenta regresiva para recordar al usuario cuándo será la próxima vez que debe beber agua.

**Conocimiento clave**

- revisar la Librería TimeLib para configurar y controlar tiempo con Lotus.
- revisar mostrar y desplazar texto en pantalla LCD
- revisar operación if…else…y switch…case…con operador lógico || (o) y &&(y).
- examinar más a fondo las aplicaciones de lectura de valores pitch y roll del Acelerómetro de 3 Ejes.
- usar el método del ejemplo BlinkWithoutDelay para evitar usar la función Delay que previene que la función delay interfiera con el temporizador del sistema.
- aprender cómo hacer y llamar función personalizada, el resultado devuelto podría ser Boolean(verdadero/falso), o un valor de la variable usando return X.

**Análisis de caso de uso**

**Módulo sensor**

Comparando los datos pitch y roll de las lecturas del acelerómetro de 3 ejes para detectar si la botella está inclinada o no, por lo tanto reconoce si el usuario está bebiendo agua o no. si la botella está inclinada, el siguiente paso es detectar si la botella ha sido puesta de vuelta en la mesa, una vez que la botella está en la mesa, los datos pitch y roll del acelerómetro de 3 ejes calibrarán el valor máximo y mínimo para comparar.

**Módulo actuador**

Usa buzzer para hacer diferentes tonos para recordar diferentes estados:

- estado 1: cuando el temporizador de cuenta regresiva de 30min termine, el buzzer sonará para recordar al usuario beber agua
- estado 2: el buzzer sonará si la botella no se mantiene quieta en la mesa.

Usa pantalla LCD para mostrar

- estado 1: temporizador de cuenta regresiva
- estado 2: recordar al usuario beber agua
- estado 3: felicitar al usuario por beber agua
- estado 4: decir al usuario que ponga de vuelta el agua una vez terminado de beber

**Diagrama de flujo**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/flowchart1.png)

**Requerimiento de hardware**

Auto-preparar

- cable micro-USB
- una computadora con Arduino IDE y controlador serial-a-USB instalado

Incluido en el kit

- Placa de desarrollo Seeeduino Lotus V1.1
- Cable Grove
- Grove – Buzzer
- Grove – LED Encadenable RGB LED
- Grove - LCD RGB Backlight
- Grove – Acelerómetro Digital de 3 Ejes

**Conexión de hardware**

Paso 1:
Conectar módulo Grove - Buzzer al puerto D6 de Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

Conectar Grove – LED RGB Encadenable al puerto D7 de Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect1.jpg)

Conectar módulo Grove - LCD RGB Backlight al puerto I2C. de Seeeduino Lotus nota: es el puerto I2C seguido por un punto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect6.jpg)

Conectar Grove – Acelerómetro Digital de 3 Ejes al puerto I2C de Seeeduino Lotus nota: es el puerto I2C seguido por dos puntos.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect7.jpg)

Fijar todos los componentes juntos en una taza.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartcup.png)

**Programación de software**

Paso 1: Por favor añadir la [Librería TimeLib]( https://github.com/PaulStoffregen/Time/archive/master.zip) en Arduino IDE

Copiar y pegar el siguiente código en Arduino IDE

```cpp

//add LCD library
#include <rgb_lcd.h>
//add accelerometer library
#include "MMA7660.h"
//add Timelib library
#include <TimeLib.h>
//add ChainableLED library to this project
#include <ChainableLED.h>

//assign default time as epoch time 1514764800 which is 00:00:00 Jan 1 2018
long DEFAULT_TIME = 1514764800;
//set drinkTime at 30mins(1800s) after default time
//long drinkTime = DEFAULT_TIME + 1800;
long drinkTime = DEFAULT_TIME + 10;
int lastDrink, seconds;
//will store lastest time in milliseconds
unsigned long previousMillis = 0;

//set the number of leds linked to the chain
#define NUM_LEDS  1

//assign buzzer as pin 6
#define buzzer 6

//assign accelerometer as the name of MMA7660 accelerometer
MMA7660 accelerometer;

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//set motion check tolerance value
int tolerance = 50;
//initalise the calibrated and moveDetedted as false
boolean calibrated = false;
boolean moveDetected = false;

//set int8_t for accelerometer reading value x, y, z
int8_t x;
int8_t y;
int8_t z;

//initialise fXg, fYg, fZg as double with value of 0
double fXg = 0;
double fYg = 0;
double fZg = 0;
//initialise pitch and roll as double
double p, r;

//Accelerometer limits
double rMin; //Minimum roll Value
double rMax; //Maximum roll Value
double rVal; //Current roll Value

double pMin; //Minimum pitch Value
double pMax; //Maximum pitch Value
double pVal; //Current pitch Value

//set value 0.5 to alpha for low pass filter tolerance
const float alpha = 0.5;

//iinitialise mode to set the default switch case to first(count from 0)
int mode = 0;

void setup()
{
  //set the system time to 00:00:00 Jan 1 2018
  setTime(DEFAULT_TIME);
  //initialise the accelerometer
  accelerometer.init();
  //initialise ChainableLED leds
  leds.init();
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //calibrate the accelerometer for at the begining
  calibrateAccel();
  //wait for 2
  delay(2000);
}

//setup accelerometer reading function output mapped value of roll and pitch
void Accel() {
  accelerometer.getXYZ(&x, &y, &z);

  //Low Pass Filter to reduce the noise
  fXg = x * alpha + (fXg * (1.0 - alpha));
  fYg = y * alpha + (fYg * (1.0 - alpha));
  fZg = z * alpha + (fZg * (1.0 - alpha));

  r  = (atan2(-fYg, fZg) * 180.0) / M_PI;
  p = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
  r = map(r, -90, 90, 0, 180);
  p = map(p, -90, 90, 0, 180);
  return r;
  return p;
}

//setup function for calibrate the accelerometer
void calibrateAccel() {
  //reset moveDetected to false
  moveDetected = false;

  //call accelerometer reading funtion
  Accel();

  //assign the reading of roll and pitch
  rVal = r;
  rMin = rVal;
  rMax = rVal;

  pVal = p;
  pMin = pVal;
  pMax = pVal;

  //calibrate the Accelerometer
  for (int i = 0; i < 50; i++) {
    //call accelerometer reading funtion
    Accel();
    /*--calibrate roll---*/
    //assign the reading of roll to rVal
    rVal = r;
    //evaluate if the new reading is greater than stored Maximum value
    if (rVal > rMax) {
      //if new reading value is greater save new value to rMax
      rMax = rVal;
      //evaluate if the new reading is less than stored Minimum value
    } else if (rVal < rMin) {
      //if new reading value is less save new value to rMin
      rMin = rVal;
    }

    /*--calibrate pitch---*/
    //assign the reading of pitch to pVal
    pVal = p;
    //evaluate if the new reading is greater than stored Maximum value
    if (pVal > pMax) {
      //if new reading value is greater save new value to pMax
      pMax = pVal;
      //evaluate if the new reading is less than stored Minimum value
    } else if (pVal < pMin) {
      //if new reading value is less save new value to pMin
      pMin = pVal;
    }
    //Delay 10ms between readings
    delay(10);
  }
  //set the calibrated to true
  calibrated = true;
}

//drinking function check if the bottle is tilting output ture/false
boolean drinking() {
  //initialise tilting as false
  boolean tilting = false;
  //reading from accelerometer
  Accel();

  rVal = r;
  pVal = p;
  /*evaluate if new roll value is greater than the maximum value or
     less than the minimum value saved previously.
     || means or
     if rolling is happening then set tilting to ture
     if pitch is happening then set tilting to ture
  */
  if (rVal > (rMax + tolerance) || rVal < (rMin - tolerance)) {
    tilting = true;
  }

  if (pVal > (pMax + tolerance) || pVal < (pMin - tolerance)) {
    tilting = true;
  }
  //output tilting
  return tilting;
}

//mothin function
void Motion() {
  //don't check for movement until recalibrated again
  calibrated = false;
}

void loop()
{
  /*evaluate if current time is greate or equals
    to drinkTime(30mins ahead), then switch to case 1;
    its time to drink
  */
  if (now() >= drinkTime  ) {
    //switch to case 1
    mode = 1;
  }
  //evaluate if the accelerometer is calibrated
  if (calibrated) {
    //evaluate if the bottle is tilted
    if (drinking()) {
      //switch to case 2
      mode = 2;
      //set moveDetected to true
      moveDetected = true;
    }
  }
  //evaluate if the moveDetected is true
  if (moveDetected) {
    //call motion function
    Motion();
  }
  //save current time in millisecond
  unsigned long currentMillis = millis();
  switch (mode) {
    /*Case 0:
      mode to display countdonw time if nothing happened
    */
    case 0:
      //minutes to drink water
      lastDrink = (drinkTime - now()) / 60;
      //seconds to drink water
      seconds = (drinkTime - now()) % 60;

      leds.setColorHSB(0, 0, 0, 0);

      /*refesh the LCD for 1s without using delay, refer
         to Example "BlinkWithoutDelay", so the system
         won't stop and wait
      */
      if (currentMillis - previousMillis >= 1000) {
        // save the last time you refreshed the LCD
        previousMillis = currentMillis;
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Countdown to dri");
        lcd.setCursor(0, 1);
        lcd.print("nk water: ");
        lcd.setCursor(10, 1);
        lcd.print(lastDrink);
        lcd.print(":");
        lcd.print(seconds);
      }
      break;
    /*Case 1:
       reached 30mins time to drink some water
       with buzzer alarm and LCD display time
       to drink some water
    */
    case 1:
      tone(buzzer, 262, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Time to drink");
      lcd.setCursor(0, 1);
      lcd.print("Some water");
      break;
    /*Case 2:
       detect if the wate bottle is tilted
       therefore user is drinking some water
       and recalibrate the sensor(accelerometer)
       once the bottle has been put on a flat
       surface if the bottle is still tilted or
       not sitting flat(accelerometer reading
       is not around 90 degrees), enter case 3
       detected the bottle is resting still enter
       to case 0 and reset the drink time to 30mins
       ahead
    */
    case 2:
      //stop buzzer
      noTone(buzzer);
      //update drinkTime
      drinkTime = now() + 1800;
      leds.setColorRGB(0, 0, 255, 0);
      //display message
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Well Done remind");
      lcd.setCursor(0, 1);
      lcd.print("you in 30mins");
      //wait for 5s for user to drink
      delay(5000);
      //reading accelerometer value
      Accel();
      //evaluate if the bottle is resting on flat
      if (r > 80 && r < 100 && p > 80 && p < 100) {
        //evaluate if the accelerometer calibrated
        if (!calibrated) {
          //calibrate accelerometer
          calibrateAccel();
        }
        else
        { //switch to mode 0
          mode = 0;
          //update drinkTime
          drinkTime = now() + 1800;
          leds.setColorRGB(0, 0, 0, 0);
        }
      }
      else
      { //if bottle is not resting on flat switch to mode 3
        mode = 3;
        leds.setColorRGB(0, 0, 0, 0);
      }
      break;
    /*case 3
       if the bottle is not resting on flat surface,
       display message with scrolling "plaase put
       down water bottle when finished!", then check
       if the bottle is resting still, if so, recalibrate
       accelerometer and once recalibrated switch back to
       case 0 and reset drink time to 30mins ahead
    */
    case 3:
      //update drinkTime
      drinkTime = now() + 1800;

      leds.setColorRGB(0, 0, 0, 255);
      //display message with autoscroll
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Please put down water");
      lcd.setCursor(0, 1);
      lcd.print("bottle when finished!");
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // scroll one position left:
        lcd.scrollDisplayLeft();
        // wait a bit:
        delay(200);
      }
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // scroll one position right:
        lcd.scrollDisplayRight();
        // wait a bit:
        delay(200);
      }
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // scroll one position left:
        lcd.scrollDisplayLeft();
        // wait a bit:
        delay(200);
      }

      //reading accelerometer value
      Accel();
      //evaluate if the bottle is resting on flat
      if (r > 80 && r < 100 && p > 80 && p < 100) {
        //evaluate if the accelerometer calibrated
        if (!calibrated) {
          //calibrate accelerometer
          calibrateAccel();
        }
        else
        { //switch to mode 0
          mode = 0;
          //update drinkTime
          drinkTime = now() + 1800;
          leds.setColorRGB(0, 0, 0, 0);
        }
      }
      break;
  }
  delay(1);
}


```

Paso 2: Subir código al Seeeduino Lotus

Paso 3: Observar resultado

Los 4 estados de la taza inteligente

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup2.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup3.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup4.png)

## REFERENCIA

Ejes principales de aeronave. Consultado el 27 de noviembre de 2018. [https://en.wikipedia.org/wiki/Aircraft_principal_axes](https://en.wikipedia.org/wiki/Aircraft_principal_axes).

## APÉNDICE

Todo el [código](https://github.com/peterpanstechland/Grove_starter_kit.git) en este documento está disponible en Github.

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
