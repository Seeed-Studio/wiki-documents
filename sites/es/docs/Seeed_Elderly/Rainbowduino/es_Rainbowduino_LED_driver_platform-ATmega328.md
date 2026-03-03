---
description: Rainbowduino_LED_driver_platform-ATmega328
title: Plataforma controladora LED Rainbowduino-ATmega328
keywords:
- Rainbowduino_LED_driver_platform-ATmega328
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Rainbowduino_LED_driver_platform-ATmega328
last_update:
  date: 01/20/2023
  author: Matthew
---

|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_LRG.jpg) |![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_01_LRG.jpg)
|---|---|

La placa Rainbowduino es una placa controladora compatible con Arduino con capacidad profesional de control de LEDs. Controlará una matriz LED RGB de 8x8 (ánodo común).

* ¡No se requiere circuito externo, conecta y brilla!

* 24 canales de corriente constante de 120mA cada uno

* 8 canales de controlador súper fuente de 500mA cada uno

* Amplia adaptación de voltaje de salida de 6.5V-12VDC

* GPIO y ADC dedicados

* Comunicación UART e I2C por hardware

* Cascada fácil

* Forma pequeña y peso ligero

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328-p-371.html)

## Modo Independiente (conecta y brilla)

---
Hardware Necesario:

* 1 x Rainbowduino

* 1 x Matriz LED RGB

El modo de trabajo más simple, no se necesitan sistemas externos (solo un adaptador serie ttl para cargar el firmware). El contenido de la matriz LED es generado por el propio Rainbowduino.

Caso de Uso:

* Animaciones simples en tiempo real calculadas por el Rainbowduino

* Mostrar animaciones pre-almacenadas, limitadas debido a los 32kb ROM del Rainbowduino

## Modo UART

---
Hardware Necesario:

* 1x Rainbowduino

* 1x Matriz LED RGB

* 1x Convertidor de nivel TTL

* 1x Unidad emisora UART (Arduino, PC...)

Envía datos (contenido de matriz LED) desde tu computadora a un Rainbowduino. Como el Rainbowduino no tiene un conector USB sino una conexión serie TTL necesitas un convertidor de nivel serie TTL (BusPirate, UartSBee, Arduino...).

**Caso de Uso:**

Marcos generados por PC o Arduino mostrados en UNA Matriz Led

## Modo I2C

---
Hardware Necesario:

* 1..n x Rainbowduino

* 1..n x Matriz LED RGB

* 1 x Dispositivo maestro I2C (por ejemplo un Arduino)

* Algunos cables

Envía datos (contenido de matriz LED) desde tu computadora a múltiples Rainbowduino's. Una nota al margen si usas un Arduino con un adaptador USB a Serie FTDI (Duemillanove, Diecimila...) - hay una Latencia de ~16ms para enviar datos desde tu computadora al Arduino. Los nuevos Arduino UNO tienen una latencia mucho menor ~4ms.

Caso de Uso:

Marcos generados por PC o Arduino mostrados en **múltiples** Matrices Led

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-i2c-cabling.png)

## Cascada I2C

---
Rainbowduino está diseñado para cascada fácil. Después de conectarse físicamente, la energía se transmite, y puedes controlar la cadena por I2C. Ten en cuenta que cada Rainbowduino debe ser asignado con una dirección única para comunicación I2C.

Prepara la conexión de energía:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chain-prepare.png)

Rainbowduino en cascada:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chained.png)

## Especificación

---
* Microprocesador：Atmega 328

* Tamaño de PCB：60mm *60mm* 1.6mm

* Indicadores：Reset, Alimentación, LED Pin 13

* Fuente de alimentación：6.5-12 VDC (9 VDC recomendado)

* Conector de alimentación：Bloques de terminales JST de 2 pines, Jacks DC de 3mm

* Conector de alimentación en cascada：Bloques de terminales

* Interfaz de programación：UART / ISP

* Conectores de matriz de puntos LED：32

* Conector de expansión：Par de cabezales de pines doblados de 2.54mm

* Protocolos de comunicación：I2C / UART

* RHOS：Sí

* Voltaje de entrada：6.5~12V

* Consumo de corriente global：600~2000mA

* Canales de corriente constante (Cátodo)：24

* Corriente constante por canal (Cátodo)：20~120mA

* Corriente del controlador de fuente por canal (Ánodo común)：500mA

* Voltaje del controlador de fuente por canal (Ánodo común)：9~12V

* Canales de controlador de fuente：8

* Cantidad de LEDs controlados：192

* Tiempo de respuesta del circuito：10ns

* Resolución de color de matriz LED RGB por punto：4096：Velocidad de baudios Uart：115200baud

## Compatibilidad de dispositivos LED

---
Antes de conectar directamente en los cabezales de pines hembra, por favor verifique si las matrices de puntos RGB son compatibles comprobadas. La preocupación principal está en la distribución de pines, donde los LEDs del mismo color están en grupo, aquí adjuntamos el esquema y demostración fotográfica. La secuencia de colores podría cambiar, ya que la lógica de control es de código abierto y fácilmente reprogramable.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-schema.png)

El poder de Rainbowduino va mucho más allá de controlar una matriz de puntos RGB. Con 192 salidas y hasta 120mA de capacidad de corriente constante, puedes fácilmente poblar configuraciones masivas de LEDs.

La corriente de salida de cada canal (IOUT) se establece por una resistencia externa, Rext. La relación entre Iout y Rext se muestra en la siguiente figura. Por favor consulte la hoja de datos de MBI5168 para más detalles. Ajustar el potenciómetro de 1k en sentido horario para reducir la corriente de salida (mínimo predeterminado 20mA para matriz de puntos RGB), rotar en sentido antihorario para aumentar la corriente de salida. Los potenciómetros son de círculo único, por favor NOTA que la fuerza excesiva los romperá en rotación ilimitada, entonces necesitarías un multímetro para ajustar. :)

Esto significa que puedes construir tu propia matriz LED sin resistencias adicionales.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-voltage.png)

## Demostración

---
<big>Requisitos </big>

* Placa Rainbowduino

* Una Matriz RGB de ánodo común

* Una placa Arduino (Opcional)

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-connected-matrix.png)

<big>Preparar el hardware Rainbowduino </big>

Conecta la matriz LED RGB al Rainbowduino y conecta "Pin 1" al bloque de conexión rojo. Pin1 está marcado por un punto de soldadura cuadrado, mientras que los otros pines usan un punto de soldadura redondo.

<big>Cargar firmware  </big>

1.Cargar un fragmento de código a Arduino primero:
Para usar el Arduino para cargar el firmware al Rainbowduino, asegúrate de que el Arduino esté limpio - necesitamos cargar un sketch de firmware vacío como se muestra a continuación.

```
void setup() {}

void loop() {}
```

2. Subir Firmware al Rainbowduino

Abre el firmware del Rainbowduino, **selecciona la placa correcta** (Tools--&gt;board--&gt; Arduino Duemilanove or Nano w/ ATmega328) y sube el Firmware. Al menos esa es la teoría ;)
Para tu placer visual, aquí está el esquema de conexión:
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fritz-uploadfw.png)

Usamos una fuente de alimentación externa, sin embargo también podrías usar los 5V del Arduino.

**NOTA:** Si posees una placa Rainbowduino v1, necesitas seleccionar "Arduino Diecimila, Duemilanove, or Nano w/ ATmega168"!

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

3.Usar UartSB para Cargar firmware

Estas capturas de pantalla muestran cómo conectar el UartSBee al Rainbowduino:

| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeONE.jpg)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeTWO.jpg)
|---|---|

Si conectas el UartSBee al bus USB, debería registrar un nuevo puerto serie. Ahora simplemente carga tu firmware usando el nuevo puerto serie.

4.Usar un Buspirate para Cargar firmware / bootloader

Estoy explicando tres métodos de programación (todos usando el buspirate):

* programación a través del ISP.
* programación usando avrdude y reinicio manual (no es necesario parchear)
* programación a través de avrdude con un pequeño parche.

DESCONECTA EL RAINBOWDUINO DE LA PANTALLA Y LA ALIMENTACIÓN.

PASO 1: Para usar el Buspirate necesitas una nueva versión de avrdude [[1]](http://download.savannah.gnu.org/releases/avrdude/). Estoy usando la versión 5.10 y esa reconoce la opción de programador '-c buspirate'. Puedes probar esto con

```
./avrdude -c buspirate -C ./avrdude.conf
```

Si esto se queja del programador, entonces necesitas una versión más nueva del buspirate.

PASO 2: conecta el buspirate al conector ISP del rainbowduino de esta manera:

<table >
<tr>
<th> Buspirate</th>
<th> ISP</th>
<th> Pin ISP</th>
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


PASO 3: encuentra el bootloader correcto (estoy usando el firmware tiny optiboot). Copia este archivo a tu directorio avrdude recién compilado.

PASO 4: programa el atmega 328p con

```
./avrdude -v -c buspirate -p m328p -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:optiboot_atmega328.hex
```

Esto toma mucho tiempo...

Comencé subiendo firmwares sin el bootloader y eso funciona bien. El truco es obtener los archivos HEX del IDE de Arduino. En la versión 0.22-Linux se almacenan en /tmp/buildXXXXXXXXXXXX y NO en el directorio de sketches. Solo ejecuta el comando 'Upload' sin ningún programador conectado (presiona &lt;shift&gt; mientras presionas el botón 'upload' para obtener mucha información de depuración del IDE de Arduino).

Después de que tengas el bootloader en el rainbowduino puedes usar la interfaz serie transparente del buspirate. Establece la velocidad de baudios a 115200 e ingresa la macro '(3)' para activar el modo transparente. El buspirate ahora actúa como un convertidor USB-serie (cualquier otro convertidor usb-serie tipo FTDI podría ser usado). El problema con el buspirate es que no hay DTR para reiniciar el arduino. Ahora tienes que cronometrar el reinicio y la subida manualmente. Presionar reset después de iniciar la subida parece funcionar mejor.

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

Después de eso puedes programar el arduino con el bootloader:

```
./avrdude -v -c stk500v1 -p m328p -b 115200 -F -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:Rainbow_Plasma.cpp.hex
```

Un paso más es parchear avrdude en el archivo 'arduino.c'. El buspirate envía la señal 'rts' con la polaridad incorrecta al arduino, pero intercambiando 1 por 0 y 0 por 1 eso se soluciona. A partir de entonces tienes que elegir 'arduino' como programador en lugar de 'stk500v1'.

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

_Nota: cambia el tipo de programador usado por el arduino ide en el archivo 'boards.txt'._

Fuente: buspirate-avr-programming [[2]](http://hintshop.ludvig.co.nz/show/buspirate-avr-programming/), Bus_Pirate_AVR_Programming [[3]](http://dangerousprototypes.com/docs/Bus_Pirate_AVR_Programming), Optiboot [[4]](http://code.google.com/p/optiboot/)

## Firmware Rainbowdunio

<big>Firmware Neorainbowduino</big>

Este paquete de firmware viene con dos firmwares (uno para Arduino, uno para el Rainbowduino) y una biblioteca de Processing. Puedes enviar datos desde cualquier aplicación a través de la línea serie al Arduino - el Arduino luego envía las imágenes al dispositivo Rainbowduino correspondiente. Creé una biblioteca de Processing fácil de usar para comenzar.

Fuente: [http://code.google.com/p/neorainbowduino/](http://code.google.com/p/neorainbowduino/)

**Características:**

* Firmware habilitado para I2C (soporta múltiples Rainbowduino's)

* Biblioteca de Processing, ¡así puedes controlar fácilmente tu Rainbowduino desde Processing!

* Envía marcos completos desde Processing a Rainbowduino

* Envía marcos desde Processing a tu matriz RGB, cada marco tiene un tamaño de 8x8 píxeles, resolución de color de 12 bits (4096 colores). La conversión de color es manejada por la biblioteca

* Biblioteca de processing optimizada - envía marcos a Rainbowduino solo si es necesario (ahorra ~50% del tráfico - por supuesto depende de tus marcos)

* Intercambio de buffer corregido (no más parpadeo)

* Agregado escáner de bus i2c, encuentra tus Rainbowduinos si olvidas sus direcciones

Modos de Trabajo Soportados: I2C

<big>Requisitos </big>

Este firmware te permite usar Processing para controlar el rainbowduino, así que es obvio que necesitas:

* Software Processing, obténlo de [http://processing.org/](http://processing.org/)

<big>Parches para Arduino IDE</big>

Debido a que el firmware neorainbowduino envía marcos completos vía I2c (92 bytes) necesitamos parchear el tamaño del buffer I2c para el arduino (para optimizar la velocidad de transferencia). Espero que Arduino soporte tamaño de buffer variable en el futuro cercano. ¡Asegúrate de que tu **Arduino IDE esté cerrado** si parcheas los archivos!

**Archivo a parchear:** Java/libraries/Wire/utility/twi.h

**Razón:** Aumentar la velocidad I2C de 100kHz a 400kHz, aumentar el tamaño del buffer I2C de 32 bytes a 98 bytes

<big>Archivo Original</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ 100000L
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH 32
#endif
```

<big>Archivo Parcheado</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ **400000L**
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH **98**
#endif

```

**Archivo a parchear:** Java/libraries/Wire/Wire.h

**Razón:** Aumentar el tamaño del buffer Serial de 32 bytes a 98 bytes

<table>
<tr>
<th>Archivo Original</th>
<th>Archivo Parcheado</th>
</tr>
<tr>
<td width="300px"></td>
<td width="300px"></td>
</tr>
</table>


<pre>#define BUFFER_LENGTH 32</pre>

<pre>#define BUFFER_LENGTH **98**</pre>

<big>Subir Firmware a Rainbowduino</big>

Sube el firmware (ver Subir Firmware), el archivo de firmware que necesitas es **rainbowduinoFw/Rainbow_V2_71/Rainbow_V2_71.pde**.

**Nota:** Este firmware usa el protocolo I2C para comunicarse - cada Rainbowduino necesita una dirección I2C única. La dirección puede configurarse editando el archivo Rainbowduino.h (`#define I2C_DEVICE_ADDRESS 0x06`). ¡Así que no olvides cambiar la dirección si subes este firmware a más de un rainbowduino!

<big>Subir Firmware a Arduino</big>

Desconecta las líneas RX/TX entre Rainbowduino y Arduino. Sube el firmware de Arduino **arduinoFw/neoLed/neoLed.pde** al Arduino.

<big>Interactuar con Rainbowduino</big>

Este capítulo te mostrará una **forma simple de comunicarte** con tu Rainbowduino. Necesitas un Arduino (funcionando como puerta de enlace serial a I2C) y un Rainbowduino con una dirección I2C de 0x06.

La conexión entre el Rainbowduino y Arduino debería verse así:
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

<big>Instalar Librerías de Processing </big>

Después de instalar el Software de Processing, necesitarás instalar la librería neorainbowduino. Puedes encontrar la librería de processing en el directorio **processingLib\distribution\neorainbowduino-x.y\download**. Descomprime el archivo zip en tu carpeta home de Processing (hay un archivo README.TXT dentro con instrucciones detalladas sobre cómo instalar).

Cuando inicies Processing deberías poder importar la librería neorainbowduino):

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-processing-lib.png)

**Ejemplo Simple**

Aquí hay un sketch muy simple de Processing para enviar algunos rectángulos aleatorios al rainbowduino.

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

TODO agregar algunas capturas de pantalla

**Cómo funciona el redimensionamiento de imágenes**

La imagen será redimensionada usando un Filtro de Promediado de Área. Por lo tanto, es importante saber que la imagen debe estar correctamente alineada. Alineada significa que el resultado se ve bien si la imagen puede ser dividida por 8. Aquí hay un ejemplo bueno y malo:

|Buen ejemplo (alineado)|Mal ejemplo (no alineado)
|---|---|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-src.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-src.png)
| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-dst.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-dst.png)

## Firmware mtXcontrol

Fuente: [http://www.rngtng.com/mtxcontrol/](http://www.rngtng.com/mtxcontrol/)

**Características:**

* mtXcontrol es un editor escrito en Processing para crear fácilmente secuencias de imágenes para varios dispositivos de salida que contienen matriz LED multicolor.

Modos de Trabajo Soportados: ???

## Firmware 3

Fuente: [http://code.google.com/p/rainbowduino-firmware/](http://code.google.com/p/rainbowduino-firmware/)

**Características:**

* doble búfer sincronizado con la tasa de refresco

* 4 búferes auxiliares

* conjunto de instrucciones de alto nivel

* múltiple hardware controlado

* protocolo de comunicación I2C

* almacenamiento permanente de datos en Eeprom

Modos de Trabajo Soportados: I2C

## RainbowDashboard

Fuente: [http://code.google.com/p/rainbowdash/](http://code.google.com/p/rainbowdash/)

**Características:**

* Base de código limpia y mantenible.

* Compatible con firmware estándar.

* Soporta modo UART (no se necesita host Arduino - habla directamente con Rainbowduino).

* Operaciones gráficas con doble búfer.

* Reloj en tiempo real por software.

* Animación impulsada por el propio Rainbowduino.

* Conjunto completo de caracteres Windows ANSI (CP1252).

* Conjunto de comandos de alto nivel.

Modos de Trabajo Soportados: UART

Puede cambiarse fácilmente para usar I2C; solo un archivo (RainbowDash.pde) necesita ser cambiado.

## Cómo funciona el Firmware

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

**PORTB** se mapea a los pines digitales 8 a 13 de Arduino. Los dos bits altos (6 y 7) se mapean a los pines del cristal y no son utilizables.

**PORTC** se mapea a los pines analógicos 0 a 5 de Arduino. Los pines 6 y 7 solo son accesibles en el Arduino Mini.

**PORTD** se mapea a los pines digitales 0 a 7 de Arduino.

<big>Controlador LED de corriente constante</big>

Este controlador utiliza el MBI5168. El MBI5168 es un [registro de desplazamiento](https://en.wikipedia.org/wiki/Shift_register) de 8 bits. Convierte los datos serie a datos paralelos. Los 3 MBI5168 comparten las entradas LE, CLK y OE.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Mbi-schema.png)

<table>
<tr>
<th> Nombre</th>
<th> Descripción</th>
</tr>
<tr>
<td width="50px">OE</td>
<td width="950px">Salida Habilitada, cuando está (activo) bajo, los controladores de salida están habilitados; cuando está alto, todos los controladores de salida están APAGADOS (en blanco).</td>
</tr>
<tr>
<td>LE</td>
<td>Terminal de entrada de strobe de datos, los datos serie se transfieren al latch respectivo cuando LE está alto. Los datos se almacenan cuando LE pasa a bajo.</td>
</tr>
<tr>
<td>SDI</td>
<td>Entrada de datos serie al registro de desplazamiento.</td>
</tr>
<tr>
<td>SDO</td>
<td>Salida de datos serie al siguiente SDI del siguiente IC controlador.</td>
</tr>
<tr>
<td>R-EXT</td>
<td>Terminal de entrada utilizado para conectar una resistencia externa para configurar la corriente de salida para todos los canales de salida.</td>
</tr>
<tr>
<td>CLK</td>
<td>Terminal de entrada de reloj para el desplazamiento de datos en el flanco ascendente</td>
</tr>
</table>

<big>Controlador Super Source</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-schema-M5456.png)

<big>Desplazar datos de salida</big>

Para mostrar un fotograma completo en la Matriz LED, el método de interrupción de Rainbowduino necesita ser llamado 128 veces. Hay 8 líneas y 16 niveles de brillo. Cada vez que se llama al método displayNextLine(), una línea se actualiza por el nivel de brillo actual. Después de que todas las 8 líneas se actualizan, el nivel de brillo se actualiza. Por eso esta función necesita 128 ciclos hasta que un fotograma completo se puebla en la Matriz LED.

A continuación puedes ver la pantalla de la Matriz LED después de 32, 64, 96 y 128 ciclos. Notas cómo se incrementa el brillo.
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fw.1.png)

<big>Soportar más de 4096 colores (12bit)</big>

El firmware de serie (y la mayoría de firmwares de terceros) soportan resolución de color de 12bit. Es posible incrementar esto:

<table>
<tr>
<th> Resolución de Color</th>
<th> Carga Útil</th>
<th> Nivel de Brillo</th>
</tr>
<tr>
<td width="250px">12 bit (4bit por color), 4096 Colores</td>
<td width="250px">96 bytes (12bit*64=768bit)</td>
<td>16</td>
</tr>
<tr>
<td>15 bit (5bit por color), 32768 Colores</td>
<td>120 bytes (15bit*64=960bit)</td>
<td>32</td>
</tr>
</table>

El beneficio de usar 4 bits por color es el almacenamiento de datos, un byte toma 2 valores de color - por lo tanto es fácil obtener el color de un buffer de bytes. Usar 5 bits por color necesita más potencia de CPU o más espacio de buffer (usar 2 bytes para 3 valores de color - desperdiciando 1 bit por color).

Para lograr una resolución de color de 15 bits, el firmware necesita dos cambios:

* iterar sobre 32 en lugar de 16 niveles de brillo

* cambiar la función de desplazamiento de salida

## Recursos

---

* [A Huge DIY LED Matrix](http://www.neophob.com/2010/11/huge-rgb-led-matrix/)

* [Generic Rainbowduino information](http://www.neophob.com/2010/07/rainbowduino-fun-aka-neorainbowduino/)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

* [prod_documents](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

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
