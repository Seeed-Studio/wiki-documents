---
title: Shield MaTrix V0.9
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Shield-MaTrix-V0.9b/
slug: /es/Shield-MaTrix-V0.9b
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield_matrix.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/Shield-Matrix-p-1773.html)

Shield MaTrix es un Shield apilable para Arduino, que hace posible aprender programación utilizando los sensores más simples a bordo.

## Seguimiento de Versiones

|Revisión|Descripciones|Lanzamiento|
|------|------|--------|
| 0.9 | Prototipo |11 de abril de 2013|
|0.9b|Versión pública|27 de octubre de 2013|

## Características

- Compatible con Arduino Mega (recomendado Freaduino Mega V1.4 (ATMega 2560))

- Soporte para Arduino Shield

- Soporte para dispositivos inalámbricos basados en nRF24L01+, xBee

- Soporte para matriz LED 60mm 8X8 (rojo brillante, verde brillante, amarillo)

- Control IR (control remoto)

- LED RGB (para indicar varios parámetros)

- Botón de reloj (encender/apagar varias configuraciones)

- Zumbador (alarma o presión de botones del control remoto)

- Sensor de luz (iluminación automática de matrices)

- RTC (reloj de tiempo real)

- Interfaz I2C (E/S opcional)

- Voltaje 9-24 V o controlador USB (recomendado 12V 2A)

## Ideas de Aplicación

- Reloj digital (sincronización NTP) con alarma
- Estación meteorológica (temperatura-casa calle-sótano, presión, humedad)
- Marquesina (lectura de correo electrónico, redes sociales, etc.)
- Transferencia de datos (en un dispositivo similar)

## El principio de visualización de datos

Para mostrar diferente información en la pantalla de matriz LED se usa visualización dinámica.
Al mismo tiempo la información se muestra solo en una línea (se encienden los LEDs correspondientes (rojo y/o verde)), todas las otras líneas están apagadas. El siguiente paso - la línea anterior se apaga y se enciende la siguiente línea (con sus LEDs actuales). El cambio de filas es muy rápido y los ojos perciben este cambio como una sola imagen.

Para minimizar el número de pines involucrados se usan dos tipos diferentes de chips: los registros de desplazamiento (usados para control de columnas) y un demultiplexor (control de líneas).

Los registros de desplazamiento están incluidos en cadena y conectados vía SPI (los pines involucrados se describen abajo).

El demultiplexor tiene tres entradas de dirección (DA0, DA1, DA2) - una combinación de "0" y "1" en las entradas apunta claramente a una de las 8 salidas, la cual tendrá nivel activo. Adicionalmente el demultiplexor tiene entradas de control (E1, E2, E3) - con las primeras dos (E1 y E2, están conectadas en nuestro esquema) se organiza un apagado completo de la matriz, y con la entrada E3 - se organiza el ajuste de brillo (usando PWM).

## Interfaces

- Interfaz para 4 matrices LED bicolor

  - Conjunto de registros de desplazamiento (74HC595 - 8 pcs.) para controlar las columnas de LEDs

  - Demultiplexor 74HC138 para controlar las filas de LEDs y su brillo (vía PWM)

- Reloj incorporado (RTC) - basado en DS1307 con respaldo de batería (CR1220 o CR1226)

- Interfaz para módulo RF nRF24L01+

- Botón de reloj (por ejemplo, para apagar el sonido de alarma)

- Receptor IR a 38kHz (para control remoto)

- Cableado para conectar LED RGB con cátodo común o ánodo (seleccionado por jumper)

- Sensor de luz (por ejemplo, para ajustar automáticamente el brillo)

- Transductor piezoeléctrico "beeper"

- Interfaz I2C

- Interfaz xBee

- Interfaz para Arduino Shield

- Pines en la placa, involucrados en Arduino Mega

  - D5 - receptor IR

  - D24 - botón de reloj

- xBee

  - D16 - DIN

  - D17 - DOUT

- I2C (DS1307)

  - D20 - SDA

  - D21 - SCL

- RGB-LED (verificar)

  - D34 - rojo

  - D35 - Verde

  - D36 - Azul

- nRF24L01+

  - D19 - RF_IRQ

  - D37 - RF_SCK

  - D38 - RF_MISO

  - D39 - RF_MOSI

  - D40 - RF_NSS

  - D41 - RF_CE

  - D45 - zumbador

  - A7 - sensor de luz

- Registros de Desplazamiento

  - D42 - SS

  - D51 - MOSI

  - D52 - SCK

- Demultiplexor

  - D49 - DA0

  - D48 - DA1

  - D47 - DA2

  - D44 - E3 (brillo)

  - D43 - E1, E2 (apagado)

## Bibliotecas necesarias

Para usar los diversos componentes Shield MaTrix requiere las siguientes bibliotecas:

Muestra información en la matriz - MaTrix - [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip) (incluyendo una prueba de visualización simple y dos sketches de visualización en tiempo real.)

- Reloj en tiempo real (RTC) - RTClib - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

- Receptor IR - IRremote [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip) (Con esta biblioteca, puedes controlar la pantalla usando un control remoto IR)

- nRF24L01 + - iBoardRF24 - [iBoardRF24](https://github.com/andykarpov/iBoardRF24/archive/master.zip) ([DevDuino Sensor Node 2.4G nRF24L01+](https://www.seeedstudio.com/depot/DevDuino-Sensor-Node-V13-ATmega-328-RC2032-battery-holder-p-1774.html?cPath=19_22) biblioteca de control remoto)

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield-matrix_nRF24L01Plus.jpg)

Bibliotecas adicionales requeridas que se usan durante la operación de las bibliotecas:

- Wire

- SPI

- [digitalWriteFast](https://code.google.com/p/digitalwritefast/downloads/detail?name=digitalWriteFast.zip&amp;can=2&amp;q=)

## Características usando bibliotecas

Solo dos bibliotecas requieren un pequeño comentario sobre su uso:

### Receptor IR

Dado que el receptor IR conectado al pin digital 5 debe corregir el archivo / IRremote / IRremoteInt.h con el código correcto como sigue:

```

// Arduino Mega
#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__)
  //#define IR_USE_TIMER1   // tx = pin 11
  //#define IR_USE_TIMER2     // tx = pin 9
  #define IR_USE_TIMER3   // tx = pin 5
  //#define IR_USE_TIMER4   // tx = pin 6
  //#define IR_USE_TIMER5   // tx = pin 46

```

### nRF24L01+

Inicializa el módulo de la siguiente manera:

```


//iBoardRF24 radio(CE,CSN,MOSI,MISO,SCK,IRQ);
iBoardRF24 radio(41,40,39,38,37,19);


```

## Funciones de la biblioteca MaTrix

Para usar la biblioteca en tu sketch MaTrix necesitas declarar una función void setup () para ingresar la siguiente línea de código:

`
`

``` #include <SPI.h>
#include <MaTrix.h> //connection library MaTrix

 MaTrix mymatrix;       //object creation mymatrix
```

## Variables

**byte array[8][8]** - matriz principal.
Los datos de esta matriz determinan lo que se muestra actualmente en la matriz LED

`
`

```
 byte array[8][8] = { // An array of 64 bytes
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // строка 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

Cada bit corresponde al LED correspondiente en la matriz. 0 - LED "apagado", 1 - LED "encendido"

**byte shadow[8][8]** - arreglo adicional ("sombra").
Las funciones de la biblioteca se utilizan para organizar varios efectos y texto desplazante (los datos de la sombra del arreglo para un efecto particular reescriben la regla del arreglo "sombra" en el principal).
`
`

```
 byte shadow[8][8] = { //An array of 64 bytes
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // строка 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

## Definiciones

`
`

```
 // Color
 #define RED    0
 #define GREEN  1
 #define YELLOW 2
```

```
 // delay iteration in "drawing" effects (ms)
 #define VSLOW  500
 #define SLOW   150
 #define MID    100
 #define FAST   50
 #define VFAST  25
```

```
 // effects
 #define FADE   4
 #define LEFT   3
 #define UP     1
 #define DOWN   2
 #define NONE   0
```

```
 // hardware data
 #define BRIGHT 44    // brightness (pin 44 - PWM)
 #define LightSENS A7 // light sensor
```

## Función principal

<u> **mymatrix.init();**</u>

<dl><dd>_Descripción_: módulo de inicialización.</dd></dl>

<u> **mymatrix.clearLed();**</u>

<dl><dd>_Descripción_: limpieza de la pantalla.</dd></dl>

<u> **mymatrix.brightness(byte brightLevel);**</u>

<dl><dd>_Descripción_: establece el brillo de la pantalla.</dd><dd>_brightLevel_: nivel de brillo (byte), un valor de 255 - establece el brillo máximo.</dd></dl>

Ejemplo de uso:

`
`

```
 mymatrix.brightness(177);
```

<u> **mymatrix.get Brightness();**</u>

<dl><dd>_Descripción_: devuelve el brillo actual de la pantalla.</dd></dl>

Ejemplo de uso:

`
`

```
 Serial.println(mymatrix.getBrightness());
```

<u> **printString(String s, byte pos, byte color, unsigned char *Font, char effect, int speed);**</u>

<dl><dd>_Descripción_: muestra la cadena especificada.</dd><dd>_pos_: posición inicial del primer carácter (byte). Contando desde el borde derecho de la matriz, comenzando con 0.</dd><dd>_color_: color (byte). Tres valores predefinidos - RED, GREEN, YELLOW</dd><dd>_*Font_: un puntero a la fuente (unsigned char). Fuentes disponibles en la biblioteca: carácter - font5x8 (Latín), font6x8 (Latín y Cirílico); digital - digit6x8bold, digit6x8future. Detalles sobre las fuentes, ver el archivo fonts.c del archivo de la biblioteca MaTrix.</dd><dd>_effect_: el efecto de la inscripción (char). Valores predefinidos disponibles: LEFT, UP, DOWN (desplazamiento en la dirección correspondiente), FADE (manifestación), NONE (Sin efecto - instantáneo). Valor por defecto - NONE.</dd><dd>_speed_: velocidad de reproducción del efecto (int). Valores predefinidos disponibles: VSLOW, SLOW, MID, FAST, VFAST (de "muy lento" a "muy rápido"), valor por defecto - MID.</dd></dl>

Ejemplo de uso:

`
`

```
 mymatrix.printString("123", 3, GREEN, font6x8, UP, SLOW);
```

<u> **printRunningString(String s, byte color, unsigned char *Font, int speed);**</u>

<dl><dd>_Descripción_: muestra la línea "en movimiento" definida.</dd><dd>_color_: color (byte). Tres valores predefinidos - RED, GREEN, YELLOW</dd><dd>_*Font_: un puntero a la fuente (unsigned char). Fuentes disponibles en la biblioteca: carácter - font5x8 (Latín), font6x8 (Latín y Cirílico); digital - digit6x8bold, digit6x8future. Detalles sobre las fuentes, ver el archivo fonts.c del archivo de la biblioteca MaTrix.</dd><dd>_speed_: velocidad de reproducción del efecto (int). Valores predefinidos disponibles: VSLOW, SLOW, MID, FAST, VFAST (de "muy lento" a "muy rápido"), valor por defecto - MID.</dd></dl>

Ejemplo de uso:

`
`

```
 mymatrix.printRunningString("MaTrix test!", RED, font6x8, FAST);
```

## Funciones auxiliares

<u> **printArray();**</u>

<dl><dd>_Descripción_: muestra en el puerto serie el estado actual del array principal (array).</dd></dl>

<u> **printShadow();**</u>

<dl><dd>_Descripción_: muestra en el puerto serie el estado actual de la "sombra" del array (shadow).</dd></dl>

<u> **printChar(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_Descripción_: la función cambia el array principal (array) para que cuando se muestre en la matriz en una posición predeterminada se muestre el símbolo deseado con el color deseado.</dd><dd>_pos_: posición inicial del carácter (byte). Se cuenta desde el borde derecho de la matriz, comenzando con 0.</dd><dd>_color_: color (byte). Tres valores predefinidos - RED, GREEN, YELLOW</dd></dl>

¡Atención! La fuente que se usa al llamar la función debe definirse usando setFont.

<u> **printCharShadow(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_Descripción_: función similar a printChar, pero modifica el array "sombra" (shadow).</dd></dl>

<u> **printStr(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_Descripción_: la función cambia el array principal (array) para que cuando se muestre en la matriz con una posición predeterminada deseada se muestre el array de caracteres con el color deseado.</dd><dd>_*s_: un puntero a un array de caracteres (unsigned char).</dd><dd>_pos_: posición inicial del primer carácter (byte). Se cuenta desde el borde derecho de la matriz, comenzando con 0.</dd><dd>_color_: color (byte). Tres valores predefinidos - RED, GREEN, YELLOW</dd></dl>

¡Atención! La fuente que se usa al llamar la función debe definirse usando setFont.

<u> **printStrShadow(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_Descripción_: función similar a printChar, pero modifica el array "sombra" (shadow).</dd></dl>

## Referencias

[ **ZIP** ] Versión actual de la librería [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip).

## Esquemático

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MFull.JPG)

El lado derecho de la placa (cuando se ve desde la matriz) tiene:

- Botón de reloj

- Interfaz para nRF24l01 +

- Lugar de montaje para LED RGB

- Jumper selector de tipo de LEDs (ánodo común o cátodo común)

- Receptor IR

- Interfaz I2C

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MRight.JPG)

En el lado izquierdo de la placa están:

- Sensor de luz

- Zumbador piezoeléctrico (beeper)

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MLeft.JPG)

[Esquemático del dispositivo](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/res/SM09b_scheme.jpg)

## Soporte Técnico y Discusión del Producto

 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
