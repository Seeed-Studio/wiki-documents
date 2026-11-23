---
description: Plataforma controladora de LED Rainbowduino-ATmega328
title: Plataforma controladora de LED Rainbowduino-ATmega328
keywords:
  - Rainbowduino_LED_driver_platform-ATmega328
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rainbowduino_LED_driver_platform-ATmega328
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-02-16'
updatedAt: '2025-07-11'
url: https://wiki.seeedstudio.com/es/Rainbowduino_LED_driver_platform-ATmega328/
---

|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_LRG.jpg) |![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_01_LRG.jpg)
|---|---|

La placa Rainbowduino es una placa controladora compatible con Arduino con capacidad profesional de control de LED. Controlará una matriz de LED RGB de 8x8 (ánodo común).

* No se requiere circuito externo, ¡conecta y brilla!

* 24 canales de corriente constante de 120mA cada uno

* 8 canales de super driver de 500mA cada uno

* Amplia adaptación de voltaje de salida de 6.5V-12VDC

* GPIO y ADC dedicados

* Comunicación UART y I2C por hardware

* Encadenamiento sencillo

* Tamaño reducido y peso ligero

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328-p-371.html)

## Modo autónomo (plug and shine)

---
Hardware necesario:

* 1 x Rainbowduino

* 1 x Matriz de LED RGB

El modo de funcionamiento más simple, no se necesitan sistemas externos (solo un adaptador serie TTL para cargar el firmware). El contenido de la matriz de LED es generado por el propio Rainbowduino.

Caso de uso:

* Animaciones simples en tiempo real calculadas por el Rainbowduino

* Mostrar animaciones prealmacenadas, limitado por la ROM de 32kb del Rainbowduino

## Modo UART

---
Hardware necesario:

* 1x Rainbowduino

* 1x Matriz de LED RGB

* 1x Convertidor de nivel TTL

* 1x Unidad emisora UART (Arduino, PC...)

Envía datos (contenido de la matriz de LED) desde tu ordenador a un Rainbowduino. Como el Rainbowduino no tiene un conector USB sino una conexión serie TTL, necesitas un convertidor de nivel serie TTL (BusPirate, UartSBee, Arduino...).

**Caso de uso:**

Tramas generadas por PC o Arduino mostradas en UNA matriz de LED

## Modo I2C

---
Hardware necesario:

* 1..n x Rainbowduino

* 1..n x Matriz de LED RGB

* 1 x Dispositivo maestro I2C (por ejemplo un Arduino)

* Algunos cables

Envía datos (contenido de la matriz de LED) desde tu ordenador a múltiples Rainbowduino. Una nota adicional si usas un Arduino con un adaptador FTDI USB a serie (Duemillanove, Diecimila...) - hay una latencia de ~16ms para enviar datos desde tu ordenador al Arduino. El nuevo Arduino UNO tiene una latencia mucho menor, ~4ms.

Caso de uso:

Tramas generadas por PC o Arduino mostradas en **múltiples** matrices de LED

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-i2c-cabling.png)

## Encadenamiento I2C

---
Rainbowduino está diseñado para un encadenamiento sencillo. Después de conectarlos físicamente, la alimentación se transmite y puedes controlar la cadena mediante I2C. Ten en cuenta que a cada Rainbowduino se le debe asignar una dirección única para la comunicación I2C.

Prepara la conexión de alimentación:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chain-prepare.png)

Rainbowduino encadenados:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chained.png)

## Especificación

---
* Microprocesador: Atmega 328

* Tamaño de PCB: 60mm *60mm* 1.6mm

* Indicadores: Reset, alimentación, LED del pin 13

* Fuente de alimentación: 6.5-12 VDC (9 VDC recomendado)

* Conector de alimentación: bloques de terminales JST de 2 pines, conectores DC de 3mm

* Conector de alimentación para encadenamiento: bloques de terminales

* Interfaz de programación: UART / ISP

* Zócalos de matriz de puntos LED: 32

* Zócalo de expansión: par de pines acodados de 2.54mm

* Protocolos de comunicación: I2C / UART

* RHOS: Sí

* Voltaje de entrada: 6.5~12V

* Consumo global de corriente: 600~2000mA

* Canales de corriente constante (cátodo): 24

* Corriente constante por canal (cátodo): 20~120mA

* Corriente del driver de fuente por canal (ánodo común): 500mA

* Voltaje del driver de fuente por canal (ánodo común): 9~12V

* Canales del driver de fuente: 8

* Número de LED controlados: 192

* Tiempo de respuesta del circuito: 10ns

* Resolución de color de la matriz de LED RGB por punto: 4096: Velocidad en baudios Uart: 115200baud

## Compatibilidad de dispositivos LED

---
Antes de conectar directamente a los pines hembra, verifica si la matriz de puntos RGB es compatible. La preocupación principal es el pinout, donde los LED del mismo color están agrupados; aquí adjuntamos el esquema y una demostración fotográfica. La secuencia de colores puede cambiar, ya que la lógica de control es de código abierto y fácilmente reprogramable.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-schema.png)

La potencia de Rainbowduino va mucho más allá de controlar una matriz de puntos RGB. Con 192 salidas y hasta 120mA de corriente constante, puedes montar fácilmente configuraciones masivas de LED.

La corriente de salida de cada canal (IOUT) se ajusta mediante una resistencia externa, Rext. La relación entre Iout y Rext se muestra en la siguiente figura. Consulta la hoja de datos del MBI5168 para más detalles. Ajusta el potenciómetro de 1k en el sentido de las agujas del reloj para reducir la corriente de salida (mínimo predeterminado 20mA para la matriz de puntos RGB), gíralo en sentido antihorario para aumentar la corriente de salida. Los potenciómetros son de una sola vuelta, TEN EN CUENTA que una fuerza excesiva lo romperá y lo hará girar sin tope, entonces necesitarás un multímetro para ajustarlo. :)

Esto significa que puedes construir tu propia matriz de LED sin resistencias adicionales.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-voltage.png)

## Demostración

---
<big>Requisitos </big>

* Placa Rainbowduino

* Una matriz RGB de ánodo común

* Una placa Arduino (opcional)

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-connected-matrix.png)

<big>Preparar el hardware de Rainbowduino </big>

Conecta la matriz de LED RGB al Rainbowduino y conecta el "Pin 1" al bloque de conexión rojo. El Pin1 está marcado por un punto de soldadura cuadrado, mientras que los otros pines usan un punto de soldadura redondo.

<big>Cargar firmware  </big>

1.Carga primero un fragmento de código en el Arduino:
Para poder usar el Arduino para cargar el firmware en el Rainbowduino, asegúrate de que el Arduino esté limpio: necesitamos cargarle un sketch de firmware vacío como se muestra a continuación.

```
void setup() {}

void loop() {}
```

2. Cargar firmware en Rainbowduino

Abre el firmware de Rainbowduino, **selecciona la placa correcta** (Tools--&gt;board--&gt; Arduino Duemilanove or Nano w/ ATmega328) y carga el firmware. Al menos esa es la teoría ;)
 Para tu disfrute visual, aquí está el esquema de conexión:
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fritz-uploadfw.png)

Usamos una fuente de alimentación externa, sin embargo también podrías usar los 5V del Arduino.

**NOTA:** Si tienes una placa Rainbowduino v1, ¡debes seleccionar "Arduino Diecimila, Duemilanove, or Nano w/ ATmega168"!

<table >
<tr>
<th>Arduino</th>
<th>Rainbowduino</th>
<th>RESET</th>
<th>DTR</th>
<th>GND</th>
<th>GND</th>
<th>RX</th>
<th>RX</th>
<th>TX</th>
<th>TX</th>
</tr>
</table>

3.Usar UartSB para cargar firmware

Estas capturas de pantalla muestran cómo conectar el UartSBee al Rainbowduino:

| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeONE.jpg)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeTWO.jpg)
|---|---|

Si conectas el UartSBee al bus USB, debería registrarse un nuevo puerto serie. Ahora simplemente carga tu firmware usando el nuevo puerto serie.

4.Usar un Buspirate para cargar firmware / bootloader

Voy a explicar tres métodos de programación (todos usando el buspirate):

* programación a través del ISP.
* programación usando avrdude y reinicio manual (no se necesita parcheo)
* programación a través de avrdude con un pequeño parche.

DESCONECTA EL RAINBOWDUINO DE LA PANTALLA Y DE LA ALIMENTACIÓN.

PASO 1: Para usar el Buspirate necesitas una nueva versión de avrdude [[1]](http://download.savannah.gnu.org/releases/avrdude/). Yo uso la versión 5.10 y esta reconoce la opción de programador '-c buspirate'. Puedes probarlo con

```
./avrdude -c buspirate -C ./avrdude.conf
```

Si esto se queja sobre el programador, entonces necesitas una versión más reciente del buspirate.

PASO 2: conecta el buspirate al conector ISP del rainbowduino de esta forma:

<table >
<tr>
<th> Buspirate</th>
<th> ISP</th>
<th> ISP pin</th>
</tr>
<tr>
<td width="80px"> GND</td>
<td width="80px"> GND</td>
<td width="80px"> 6</td>
</tr>
<tr>
<td> +5V</td>
<td> Vcc</td>
<td> 2</td>
</tr>
<tr>
<td> CS</td>
<td> RESET</td>
<td> 5</td>
</tr>
<tr>
<td> MOSI</td>
<td> MOSI</td>
<td> 4</td>
</tr>
<tr>
<td> MISO</td>
<td> MISO</td>
<td> 1</td>
</tr>
<tr>
<td> SCL/CLK</td>
<td> SCK</td>
<td> 3</td>
</tr>
</table>

PASO 3: encuentra el bootloader correcto (yo uso el firmware tiny optiboot). Copia este archivo a tu directorio recién compilado de avrdude.

PASO 4: programa el atmega 328p con

```
./avrdude -v -c buspirate -p m328p -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:optiboot_atmega328.hex
```

Esto tarda muchísimo tiempo...

Empecé cargando firmwares sin el bootloader y eso funciona bien. El truco es obtener los archivos HEX desde el IDE de Arduino. En la versión 0.22-Linux se almacenan en /tmp/buildXXXXXXXXXXXX y NO en el directorio de los sketches. Simplemente ejecuta el comando 'Upload' sin ningún programador conectado (pulsa &lt;shift&gt; mientras presionas el botón 'upload' para obtener mucha información de depuración del IDE de Arduino).

Después de tener el bootloader en el rainbowduino puedes usar la interfaz serie transparente del buspirate. Ajusta la velocidad en baudios a 115200 y entra en la macro '(3)' para activar el modo transparente. El buspirate ahora actúa como un convertidor USB-serie (se podría usar cualquier otro convertidor USB-serie tipo FTDI). El problema con el buspirate es que no hay DTR para reiniciar el Arduino. Ahora tienes que sincronizar el reinicio y la carga manualmente. Parece que lo mejor es pulsar reset después de iniciar la carga.

```
HiZ>m
1. HiZ
2. 1-WIRE
3. UART
4. I2C
5. SPI
6. JTAG
7. RAW2WIRE
8. RAW3WIRE
9. PC KEYBOARD
10. LCD
(1) >3
Mode selected
Set serial port speed: (bps)
1. 300
2. 1200
3. 2400
4. 4800
5. 9600
6. 19200
7. 38400
8. 57600
9. 115200
10. 31250 (MIDI)
(1) >9
Data bits and parity:
1. 8, NONE *default
2. 8, EVEN
3. 8, ODD
4. 9, NONE
(1) >
Stop bits:
1. 1 *default
2. 2
(1) >
Receive polarity:
1. Idle 1 *default
2. Idle 0
(1) >
Select output type:
1. Open drain (H=Hi-Z, L=GND)
2. Normal (H=3.3V, L=GND)
(1) >2
READY
UART>(3)
UART bridge. Space continues, anything else exits.
Reset to exit.
```

Después de eso puedes programar el Arduino con el bootloader:

```
./avrdude -v -c stk500v1 -p m328p -b 115200 -F -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:Rainbow_Plasma.cpp.hex
```

Un paso más es parchear avrdude en el archivo 'arduino.c'. El Bus Pirate envía la señal 'rts' con la polaridad incorrecta al Arduino, pero intercambiando 1 por 0 y 0 por 1 eso se corrige. A partir de entonces tienes que elegir 'arduino' como programador en lugar de 'stk500v1'.

```
static int arduino_open(PROGRAMMER * pgm, char * port)
{
    fprintf(stderr, "arduino_open...\n");
    strcpy(pgm->port, port);
    serial_open(port, pgm->baudrate? pgm->baudrate: 115200, &pgm->fd);

  /* Clear DTR and RTS to unload the RESET capacitor
   * (for example in Arduino) */
    serial_set_dtr_rts(&pgm->fd, 1);
    usleep(50*1000);
  /* Set DTR and RTS back to high */
    serial_set_dtr_rts(&pgm->fd, 0);
    usleep(50*1000);

  /*
   * drain any extraneous input
   */
    stk500_drain(pgm, 0);

    if (stk500_getsync(pgm) < 0)
    return -1;

    return 0;
}
```

_Nota: cambia el tipo de programador usado por el Arduino IDE en el archivo 'boards.txt'._

Fuente: buspirate-avr-programming [[2]](http://hintshop.ludvig.co.nz/show/buspirate-avr-programming/), Bus_Pirate_AVR_Programming [[3]](http://dangerousprototypes.com/docs/Bus_Pirate_AVR_Programming), Optiboot [[4]](http://code.google.com/p/optiboot/)

## Firmware de Rainbowdunio

<big>Firmware de Neorainbowduino</big>

Este paquete de firmware viene con dos firmwares (uno para un Arduino, otro para el Rainbowduino) y una biblioteca de Processing. Puedes enviar datos desde cualquier aplicación a través de la línea serie al Arduino; el Arduino luego envía las imágenes al dispositivo Rainbowduino correspondiente. Creé una biblioteca de Processing fácil de usar para comenzar.

Fuente: [http://code.google.com/p/neorainbowduino/](http://code.google.com/p/neorainbowduino/)

**Características:**

* Firmware habilitado para I2C (soporta múltiples Rainbowduino)

* Biblioteca de Processing, ¡para que puedas controlar fácilmente tu Rainbowduino desde Processing!

* Envía fotogramas completos desde Processing a Rainbowduino

* Envía fotogramas desde Processing a tu matriz RGB, cada fotograma tiene un tamaño de 8x8 píxeles, resolución de color de 12 bits (4096 colores). La conversión de color es manejada por la biblioteca

* Biblioteca de Processing optimizada: envía fotogramas a Rainbowduino solo si es necesario (ahorra ~50% de tráfico; por supuesto depende de tus fotogramas)

* Intercambio de búfer corregido (no más parpadeos)

* Se añadió un escáner de bus I2C, encuentra tus Rainbowduino si olvidas sus direcciones

Modos de trabajo soportados: I2C

<big>Requisitos </big>

Este firmware te permite usar Processing para controlar el Rainbowduino, así que es obvio que necesitas:

* Software Processing, consíguelo en [http://processing.org/](http://processing.org/)

<big>Parches para Arduino IDE</big>

Debido a que el firmware neorainbowduino envía fotogramas completos vía I2C (92 bytes) necesitamos parchear el tamaño del búfer I2C para el Arduino (para optimizar la velocidad de transferencia). Espero que Arduino soporte tamaños de búfer variables en un futuro cercano. ¡Asegúrate de que tu **Arduino IDE esté cerrado** si parcheas los archivos!

**Archivo a parchear:** Java/libraries/Wire/utility/twi.h

**Motivo:** Aumentar la velocidad I2C de 100kHz a 400kHz, aumentar el tamaño del búfer I2C de 32 bytes a 98 bytes

<big>Archivo original</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ 100000L
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH 32
#endif
```

<big>Archivo parcheado</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ **400000L**
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH **98**
#endif

```

x

**Archivo a parchear:** Java/libraries/Wire/Wire.h

**Motivo:** Aumentar el tamaño del búfer serie de 32 bytes a 98 bytes

<table>
<tr>
<th>Archivo original</th>
<th>Archivo parcheado</th>
</tr>
<tr>
<td width="300px"></td>
<td width="300px"></td>
</tr>
</table>

<pre>#define BUFFER_LENGTH 32</pre>

<pre>#define BUFFER_LENGTH **98**</pre>

<big>Subir firmware a Rainbowduino</big>

Sube el firmware (ver Upload Firmware), el archivo de firmware que necesitas es **rainbowduinoFw/Rainbow_V2_71/Rainbow_V2_71.pde**.

**Nota:** Este firmware usa el protocolo I2C para comunicarse; cada Rainbowduino necesita una dirección I2C única. La dirección se puede configurar editando el archivo Rainbowduino.h (`#define I2C_DEVICE_ADDRESS 0x06`). ¡Así que no olvides cambiar la dirección si subes este firmware a más de un Rainbowduino!

<big>Subir firmware a Arduino</big>

Desconecta las líneas RX/TX entre Rainbowduino y Arduino. Sube el firmware de Arduino **arduinoFw/neoLed/neoLed.pde** al Arduino.

<big>Interactuar con Rainbowduino</big>

Este capítulo te mostrará una **forma sencilla de comunicarte** con tu Rainbowduino. Necesitas un Arduino (funcionando como pasarela de serie a I2C) y un Rainbowduino con una dirección I2C de 0x06.

La conexión entre el Rainbowduino y el Arduino debería verse así:
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-neorainbow.png)

Usamos una fuente de alimentación externa, sin embargo también podrías usar los 5V del Arduino.

<table>
<tr>
<th> Arduino</th>
<th> Rainbowduino</th>
</tr>
<tr>
<td width="150px">RESET</td>
<td width="150px">DTR</td>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>Analog IN 4</td>
<td>SDA</td>
</tr>
<tr>
<td>Analog IN 5</td>
<td>SDL</td>
</tr>
</table>

<big>Instalar bibliotecas de Processing </big>

Después de instalar el software Processing, necesitarás instalar la biblioteca neorainbowduino. Puedes encontrar la biblioteca de Processing en el directorio **processingLib\distribution\neorainbowduino-x.y\download**. Descomprime el archivo zip en tu carpeta de inicio de Processing (hay un archivo README.TXT dentro con instrucciones detalladas sobre cómo instalarla).

Cuando inicies Processing deberías poder importar la biblioteca neorainbowduino):

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-processing-lib.png)

**Ejemplo sencillo**

Aquí hay un sketch de Processing muy sencillo para enviar algunos rectángulos aleatorios al Rainbowduino.

```c
import processing.serial.*;
import com.neophob.lib.rainbowduino.test.*;
import com.neophob.lib.rainbowduino.*;

static final int SIZE = 400;
Rainbowduino r;

void setup() {
    frameRate(15);
    background(0);
    size(SIZE, SIZE);

    //initialize rainbowduino
    List<Integer> list = new ArrayList<Integer>();
    list.add(6);         //use rainbowduino with slave id 6
    try {
        r = new Rainbowduino(this, list);
        System.out.println("ping: "+r.ping());
    } catch (Exception e) {
        println("FAILED to open serial port!!");
        e.printStackTrace();
    }

    smooth();
    noStroke();
}

void draw() {
    //draw some simple stuff on screen
    color c1 = color(128+(int)random(64), 128, (int)random(255));
    fill(c1);

    int size = 80+(int)random(80);
    int x = (int)random(SIZE);
    int y = (int)random(SIZE);
    rect(x, y, size, size);<br>
    //send PApplet to the Rainbowduino lib - and send it to slave id 6
    r.sendRgbFrame((byte)6, this);
}
```

POR HACER: añadir algunas capturas de pantalla

**Cómo funciona el cambio de tamaño de imagen**

La imagen se redimensionará usando un filtro de promedio de área. Así que es importante saber que la imagen debe estar correctamente alineada. Alineada significa que el resultado se ve bien si la imagen se puede dividir por 8. Aquí hay un buen y un mal ejemplo:

|Buen ejemplo (alineado)|Mal ejemplo (no alineado)
|---|---|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-src.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-src.png)
| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-dst.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-dst.png)

## Firmware mtXcontrol

Fuente: [http://www.rngtng.com/mtxcontrol/](http://www.rngtng.com/mtxcontrol/)

**Características:**

* mtXcontrol es un editor escrito en Processing para crear fácilmente secuencias de imágenes para varios dispositivos de salida que contienen una matriz de LED multicolor.

Modos de trabajo soportados: ???

## Firmware 3

Fuente: [http://code.google.com/p/rainbowduino-firmware/](http://code.google.com/p/rainbowduino-firmware/)

**Características:**

* doble búfer sincronizado con la frecuencia de refresco

* 4 búferes auxiliares

* conjunto de instrucciones de alto nivel

* hardware múltiple controlado

* protocolo de comunicación I2C

* almacenamiento de datos permanente en EEPROM

Modos de trabajo soportados: I2C

## RainbowDashboard

Fuente: [http://code.google.com/p/rainbowdash/](http://code.google.com/p/rainbowdash/)

**Características:**

* Base de código limpia y mantenible.

* Compatible con el firmware estándar.

* Soporta modo UART (no se necesita host Arduino: se comunica directamente con Rainbowduino).

* Operaciones gráficas con doble búfer.

* Reloj de tiempo real por software.

* Animación controlada por el propio Rainbowduino.

* Conjunto completo de caracteres Windows ANSI (CP1252).

* Conjunto de comandos de alto nivel.

Modos de trabajo soportados: UART

Se puede cambiar fácilmente para usar I2C; solo es necesario cambiar un archivo (RainbowDash.pde).

## rainbowduino-rs

> **Nota:** `rainbowduino-rs` es un proyecto de firmware independiente desarrollado por la comunidad, creado por [jecaro](https://github.com/jecaro) para Rainbowduino v2.0. No es mantenido ni soportado oficialmente por Seeed Studio. Los usuarios deben verificar la compatibilidad del hardware antes de flashear el firmware y usarlo bajo su propia responsabilidad.

![Plasma on a 16x16 square of four boards](https://raw.githubusercontent.com/jecaro/rainbowduino-rs/284b365f7b7f1e9db90c1e7e6695163262a58217/plasma.webp)

Fuente: [https://github.com/jecaro/rainbowduino-rs](https://github.com/jecaro/rainbowduino-rs)

**Características:**

* Firmware escrito en Rust

* Recibe un framebuffer completo por I2C y lo muestra continuamente

* 16 niveles de brillo (4 bits) por color

* Biblioteca maestra para controlar varias placas encadenadas como una sola pantalla, en cualquier disposición (por ejemplo, una tira de 32x8 o un cuadrado de 16x16, con placas al revés)

* Firmware maestro de ejemplo para un Arduino Uno

Modos de trabajo compatibles: I2C

## Cómo funciona el firmware

<big>Microprocesador - Atmega 168/328</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Schema.png)

<table>
<tr>
<th> PORTD</th>
<th> PORTB</th>
<th> PORTC</th>
</tr>
<tr>
<td width="150px">pin02 / PD0 / RXD</td>
<td width="150px">pin14 / PB0 / INT0</td>
<td width="150px">pin23 / PC0 / SDI</td>
</tr>
<tr>
<td>pin03 / PD1 / TXD</td>
<td>pin15 / PB1 / INT1</td>
<td>pin24 / PC1 / CLK</td>
</tr>
<tr>
<td>pin04 / PD2 / INT0</td>
<td>pin16 / PB2 / INT2</td>
<td>pin25 / PC2 / LE</td>
</tr>
<tr>
<td>pin05 / PD3 / INT19</td>
<td>pin17 / PB3 / INT3</td>
<td>pin26 / PC3 / OE</td>
</tr>
<tr>
<td>pin06 / PD4 / INT20</td>
<td>pin18 / PB4 / INT4</td>
<td>pin27 / PC4 / SDA</td>
</tr>
<tr>
<td>pin11 / PD5 / INT21</td>
<td>pin19 / PB5 / INT5/SCK</td>
<td>pin28 / PC5 / SDL</td>
</tr>
<tr>
<td>pin12 / PD6 / INT22</td>
<td></td>
<td></td>
</tr>
<tr>
<td>pin13 / PD7 / INT23</td>
<td></td>
<td></td>
</tr>
</table>

**PORTB** se asigna a los pines digitales 8 a 13 de Arduino. Los dos bits altos (6 y 7) se asignan a los pines del cristal y no se pueden usar.

**PORTC** se asigna a los pines analógicos 0 a 5 de Arduino. Los pines 6 y 7 solo son accesibles en el Arduino Mini.

**PORTD** se asigna a los pines digitales 0 a 7 de Arduino.

<big>Controlador de LED de corriente constante</big>

Este controlador utiliza el MBI5168. El MBI5168 es un [registro de desplazamiento](https://en.wikipedia.org/wiki/Shift_register) de 8 bits. Convierte los datos en serie en datos en paralelo. Los 3 MBI5168 comparten las entradas LE, CLK y OE.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Mbi-schema.png)

<table>
<tr>
<th> Name</th>
<th> Desc</th>
</tr>
<tr>
<td width="50px">OE</td>
<td width="950px">Salida habilitada; cuando está (activa) en bajo, los controladores de salida están habilitados; cuando está en alto, todos los controladores de salida se apagan (en blanco).</td>
</tr>
<tr>
<td>LE</td>
<td>Terminal de entrada de estroboscopio de datos; los datos en serie se transfieren al latch correspondiente cuando LE está en alto. Los datos se bloquean cuando LE pasa a bajo.</td>
</tr>
<tr>
<td>SDI</td>
<td>Entrada de datos en serie al registro de desplazamiento.</td>
</tr>
<tr>
<td>SDO</td>
<td>Salida de datos en serie hacia la siguiente SDI del siguiente CI controlador.</td>
</tr>
<tr>
<td>R-EXT</td>
<td>Terminal de entrada usado para conectar una resistencia externa para configurar la corriente de salida de todos los canales de salida.</td>
</tr>
<tr>
<td>CLK</td>
<td>Terminal de entrada de reloj para el desplazamiento de datos en el flanco de subida</td>
</tr>
</table>

<big>Super Source Driver</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-schema-M5456.png)

<big>Desplazar datos de salida</big>

Para mostrar un fotograma completo en la matriz de LED, es necesario llamar 128 veces al método de interrupción de Rainbowduino. Hay 8 líneas y 16 niveles de brillo. Cada vez que se llama al método displayNextLine(), se actualiza una línea con el nivel de brillo actual. Después de que se actualizan las 8 líneas, se actualiza el nivel de brillo. Por eso esta función necesita 128 ciclos hasta que un fotograma completo se rellena en la matriz de LED.

A continuación se muestra la pantalla de la matriz de LED después de 32, 64, 96 y 128 ciclos. Se puede notar cómo aumenta el brillo.
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fw.1.png)

<big>Soporta más de 4096 colores (12bit)</big>

El firmware de serie (y la mayoría de los firmwares de terceros) admite una resolución de color de 12 bits. Es posible aumentarla:

<table>
<tr>
<th> Color Resolution</th>
<th> Payload</th>
<th> Brightness Level</th>
</tr>
<tr>
<td width="250px">12 bit (4bit por color), 4096 colores</td>
<td width="250px">96 bytes (12bit*64=768bit)</td>
<td>16</td>
</tr>
<tr>
<td>15 bit (5bit por color), 32768 colores</td>
<td>120 bytes (15bit*64=960bit)</td>
<td>32</td>
</tr>
</table>

El beneficio de usar 4 bits por color es el almacenamiento de datos: un byte contiene 2 valores de color, por lo tanto es fácil obtener el color desde un búfer de bytes. Usar 5 bits por color requiere más potencia de CPU o más espacio de búfer (usar 2 bytes para 3 valores de color, desperdiciando 1 bit por color).

Para lograr una resolución de color de 15 bits, el firmware necesita dos cambios:

* iterar sobre 32 niveles de brillo en lugar de 16

* cambiar la función de desplazamiento de salida

## Recursos

---

* [Una enorme matriz de LED DIY](http://www.neophob.com/2010/11/huge-rgb-led-matrix/)

* [Información genérica de Rainbowduino](http://www.neophob.com/2010/07/rainbowduino-fun-aka-neorainbowduino/)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

* [prod_documents](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

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
