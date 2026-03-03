---
description: Grove - Serial LCD V1.0
title: Grove - Serial LCD V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Serial_LCD_V1.0
last_update:
  date: 1/29/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/Lcdnew1.jpg)

Grove - Serial LCD V1.0 es la nueva versión de nuestras pantallas LCD seriales. Montado en una sola placa hay un LCD de 16x2 y un circuito integrado basado en un PIC HD44780. El PIC integrado toma una entrada serial TTL e imprime los caracteres que recibe en el LCD. La biblioteca también permite una serie de comandos especiales para que puedas limpiar la pantalla, ajustar el brillo de la retroiluminación, encender/apagar la pantalla, y más.

¡Este LCD es un gran regalo, porque puede ser usado para muchos proyectos diferentes!

## Características ##

- Muy fácil de usar.

- velocidad de baudios: 9600

- Conexión de 4 pines (2 E/S y 2 pines de alimentación).

- Diseño de API similar a la biblioteca LiquidCrystal de Arduino.

- El módulo regresa automáticamente al modo de escucha.

- Viene con un conjunto rico de aplicaciones de demostración.

- Control de retroiluminación para ahorrar energía.

## Ideas de Aplicación ##

- Pantalla LCD para Seeeduino / Arduino / cualquier placa de microcontrolador.

- Pantallas de tiempo y temperatura con un RTC y sensor de temperatura.

- Pantalla de aceleración con un acelerómetro.

- Pantalla de ángulo de rumbo con una brújula.

- Tu imaginación es el límite.

- Pantalla de estado vital de CPU de PC: Puede ser interfazado a PC con un transceptor UART adecuado.

## Especificación ##

 |Elemento| Mín| Típ| Máx|Unidad|
 |--|--|--|--|--|
 |Voltaje de operación| 4.7| 5| 5.5| V|
 |Protocolo de comunicación| UART||| -|
 |Control de retroiluminación|Sí|||-|
 |Corriente de trabajo: Retroiluminación ENCENDIDA|70|75| 80|mA|
 |Corriente de trabajo: Retroiluminación APAGADA|15|20| 25| mA|

## Uso ##

### Instalación de Hardware ###

- Asegúrate de que el voltaje de operación del [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) esté configurado a 5V

- Conecta el LCD Serial al [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) (title=undefined) UART por Software (Pin 11, Pin12) a través del terminal de la **placa base Grove** usando el conector de 4 pines.

- Presiona el interruptor de reinicio después de cargar el firmware al Seeeduino.

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD010.jpg)

### Programación ###

La biblioteca Serial LCD proporciona un conjunto rico de APIs para interactuar con el módulo Serial LCD. Todas las operaciones que podrían realizarse con LCDs normales podrían lograrse enviando comandos y datos serialmente. Las APIs están diseñadas de manera similar a la biblioteca LiquidCrystal de Arduino, para migración instantánea al controlador Serial LCD. La interacción con el módulo Serial LCD comienza con la inicialización, donde el módulo Serial LCD envía instrucciones al MCU para comenzar la comunicación. Después de la inicialización, el LCD entra en modo de trabajo, donde comienza a aceptar comandos y datos para mostrar. Los comandos y respuestas involucrados en la interacción se resumen en [1]

### Aplicaciones de Demostración ###

Descarga la [Biblioteca SerialLCD](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/SerialLCD_Library.zip) y descomprímela en el archivo de bibliotecas del IDE de Arduino por la ruta: ..\arduino-1.0.1\libraries, entonces puedes jugar con tu propio sistema de pantalla.

Si tienes Arduino 1.0 o posterior, NewSoftSerial está incluido en el núcleo de Arduino (llamado SoftwareSerial).
Nota: Cuando hayas conectado Serial LCD a Grove y descargado el ejemplo al Seeeduino/arduino, asegúrate de reiniciar primero el Seeeduino/arduino.

Demo 1: Hola Mundo

```
This sketch prints "hello, world!" on the first row and time in seconds, elapsed from RESET on second row. This uses begin(),
setCursor(row,col) and print() functions.

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // set the cursor to column 0, line 1
  // (note: line 1 is the second row, since counting begins with 0):
  slcd.setCursor(0, 1);
  // print the number of seconds since reset:
  slcd.print(millis()/1000,DEC);
}
```

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_helloworld_example.gif)

Demo 2: Mostrar de forma intermitente

```
This sketch prints "hello World!" to the LCD and uses the display() and noDisplay() functions to switch on and off the display.

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the display:
  slcd.noDisplay();
  delay(1000);
   // Turn on the display:
  slcd.display();
  delay(1000);
}
```

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_display_example.gif)

Demo 3: Parpadeo

```
This sketch prints "hello World!" to the LCD and makes the cursor block blink with Blink() and noBlink() functions.
```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up :
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the blinking cursor:
  slcd.noBlink();
  delay(1000);
   // Turn on the blinking cursor:
  slcd.blink();
  delay(1000);
}
```

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_blink_example.gif)

Demo 4: Visualización del Cursor

```
This sketch prints "hello World!" to the LCD and uses the cursor() and noCursor() methods to switch on and off the cursor.

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the cursor:
  slcd.noCursor();
  delay(1000);
   // Turn on the cursor:
  slcd.cursor();
  delay(1000);
}
```

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_cursor_example.gif)

Demo 5: Dirección del Flujo de Texto y Posición del Cursor

```
This sketch prints "Seeeduino" twice to the LCD. This sketch uses the setCursor(col,row), leftToRight() and rightToLeft() methods
 to demonstrate cursor position and text flow direction (left-to-right and right-to-left).

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  slcd.begin();
  // Turn on the backlight
  slcd.backlight();
  // Switch on the cursor:
  slcd.cursor();
}

void loop() {
    //Set cursor at 0th Row, 0th Column (Top-Left Corner of LCD)
    slcd.setCursor(0,0);
    //Set the text flow direction left-to-right
    slcd.leftToRight();
    slcd.print("Seeeduino");

    //Set cursor at 1st Row, 15th Column (Bottom-Right Corner of LCD)
    slcd.setCursor(15,1);
    //Set the text flow direction right-to-left
    slcd.rightToLeft();
    slcd.print("Seeeduino");

}
```

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_textflow_setcursor_example.jpg)

## Referencia ##

La **biblioteca Serial LCD** proporciona un conjunto completo de instrucciones para ejercitar las capacidades del **LCD1602**. El controlador SerialLCD utiliza la biblioteca **NewSoftSerial** para implementar la lógica UART. El acceso a las APIs se realiza creando primero un objeto de la clase **SerialLCD** proporcionando los puertos serie por software (Rx y Tx):

```
SerialLCD slcd(11,12);// Assign 11 and 12 as RxD and TxD lines of Software Serial Port.
```

**Descripción de la Función:**
1.begin()

Esta función se utiliza para inicializar el módulo LCD Serie.

Ejemplo:

```
slcd.begin(); // Intialize LCD
```

2.print()

Imprime el texto en el LCD. Tiene dos formas:

Ejemplo:

```
slcd.print(data);  // Data can be any text
slcd.print(data,BASE); // BASE can be BIN, DEC, OCT or HEX
slcd.print(float_data,2);//show float data,Decimal digits(1-3)
```

3.clear()

Limpia la pantalla.

Ejemplo:

```
slcd.clear();  // Clear the Screen
```

4.home()

Establece el cursor en la esquina superior izquierda.

Ejemplo:

```
slcd.home();  // go to home
```

5.noDisplay()

Apaga la pantalla sin borrar la RAM.

Ejemplo:

```
slcd.noDisplay();  // Blank the Display
```

6.display()

Enciende la pantalla después de noDisplay(). El texto existente en la RAM se restaura.

Ejemplo:

```
slcd.display();  // Display the text in RAM
```

7.noBlink()

Desactiva el cursor parpadeante de la pantalla LCD.

Ejemplo:

```
slcd.noBlink();  // Disable cursor blinking
```

8.blink()

Muestra un cursor LCD parpadeante. Si se usa con SLCD_CURSOR_ON, el resultado será diferente en diferentes pantallas.

Ejemplo:

```
slcd.blink();  // Enable cursor blinking
```

9.noCursor()

Ocultar el cursor del LCD.

Ejemplo:

```
slcd.noCursor();  // Disable cursor display
```

10.cursor()

Mostrar el cursor del LCD.

Ejemplo:

```
slcd.cursor();  // Enable cursor display
```

11.scrollDisplayLeft()

Desplaza el contenido de la pantalla (texto y cursor) una posición hacia la izquierda.

Ejemplo:

```
slcd.scrollDisplayLeft();  // Scroll Left
```

12.scrollDisplayRight()

Desplaza el contenido de la pantalla (texto y cursor) una posición hacia la derecha

Ejemplo:

```
slcd.scrollDisplayRight();  // Scroll Right
```

13.leftToRight()

Establece la dirección del texto escrito en el LCD a "izquierda-a-derecha", que es la predeterminada. Esto indica que los caracteres posteriores escritos en la pantalla irán de izquierda a derecha, pero no afecta al texto previamente mostrado.

Ejemplo:

```
slcd.leftToRight();  // Set the text flow direction left to right
```

14.rightToLeft()

Establece la dirección del texto escrito en el LCD a "derecha-a-izquierda". Esto indica que los caracteres subsecuentes escritos en la pantalla irán de derecha a izquierda, pero no afecta el texto previamente mostrado.

Ejemplo:

```
preslcd.rightToLeft();  // Set the text flow direction right to left
```

15.autoscroll()

Activa el desplazamiento automático del texto LCD. Esto hace que cada carácter en la pantalla empuje los caracteres anteriores una posición hacia adelante. Si la dirección actual del texto es de izquierda a derecha (por defecto), la pantalla se desplaza hacia la izquierda.

Ejemplo:

```
slcd.autoscroll();  // Enable Auto Scroll
```

16.noAutoscroll()

Desactiva el desplazamiento automático del texto LCD.

Ejemplo:

```
slcd.noAutoscroll();  // Disable Auto Scroll
```

17.setCursor()

Establece el cursor en la posición (Columna,Fila).

Ejemplo:

```
slcd.setCursor(Col,Row);  // Scroll to X,Y position
```

18.noPower()

Apagar la alimentación del LCD y la retroiluminación, pero la alimentación del MCU sigue encendida.

Ejemplo:

```
slcd.noPower();  // Turn off the LCD power and the backlight
```

19.power()

Enciende la alimentación del LCD pero no la retroiluminación.

Ejemplo:

```
slcd.power();  // Turn on the LCD power
```

20.noBacklight()

Apagar la retroiluminación.

Ejemplo:

```
slcd.noBacklight();  // Turn off the backlight
```

21.backlight()

Enciende la retroiluminación.

Ejemplo:

```
slcd.backlight();  // Turn on the backlight
```

22.noPower() (nuevo)

Apaga la alimentación del LCD y la retroiluminación, pero la alimentación del MCU sigue encendida.

Ejemplo:

```

slcd.noPower();  // Turn off the LCD power and the backlight

```

23.power() (nuevo)

Enciende la alimentación del LCD pero no la retroiluminación.

Ejemplo:

```

slcd.power();  // Turn on the LCD power

```

24.noBacklight() (nuevo)

Apagar la retroiluminación.

Ejemplo:

```

slcd.noBacklight();  // Turn off the backlight

```

25.backlight() (nuevo)

Enciende la retroiluminación.

Ejemplo:

```

slcd.backlight();  // Turn on the backlight

```

## Rastreador de Versiones ##

 |Revisión|Descripciones|Lanzamiento|
 |--|--|--|
 |v1.0b|Segunda Versión|20 Mar 2011|

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]** [Archivos de Esquemático y Placa](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip)
- **[Librería]** [Librería SerialLCD para v1.0b y v1.1b](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/New_SerialLCD_Library_.zip)
- **[repositorio]** [repositorio github para SerialLCD](https://github.com/Seeed-Studio/Grove_SerialLCD)
- **[Librería]**  [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)
- **[Librería]** [una pequeña corrección para la Librería v1.0b](https://github.com/ydirson/Wiring/commit/60e58003e8c1dc9be81d0f58b1d0f3ef9fad1446) para begin() que no seguía el protocolo correcto

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
