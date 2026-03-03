---
description: Pequeño Shield e-Paper
title: Pequeño Shield e-Paper
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Small_e-Paper_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/E_shield_01.jpg)
![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/E_shield_02.jpg)

El e-Paper podría ser el material más cómodo para leer. Refleja la luz en lugar de emitir luz para imitar la experiencia de lectura de papel convencional. Y de esta manera se consume mucha menos energía. El pequeño shield e-paper es un shield controlador para e-papers de tamaños pequeños. Es capaz de controlar e-papers de 1.44 pulgadas, 2.0 pulgadas y 2.7 pulgadas y soporta más de 170 idiomas. La superficie superior de este shield se deja plana y limpia para dar un gran soporte al e-paper adherido a él. Si estás considerando una pantalla ligera y cómoda de leer, el e-paper sería una buena opción.

**Atención:** Dado que esta placa controladora soporta e-papers de diferentes tamaños. el e-paper no está incluido en este producto. Tenemos e-paper de 2.0 pulgadas y 2.7 pulgadas a la venta simultáneamente. ¡Ve y añade el más adecuado a tu carrito ahora!

**Modelo:** [SLD00200P](https://www.seeedstudio.com/depot/small-epaper-shield-p-1597.html)

### Elegir la librería

Para elegir la librería correcta debes conocer la versión de tu panel.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Definition_of_Model_Labels.jpg)

**Presta atención a la etiqueta de tu panel**:

- si el nombre del modelo es 'EG020AS012' o 'EM027AS011', entonces debes elegir la librería antigua, por favor haz clic aquí [Small e-Paper Library](https://github.com/Seeed-Studio/Small_ePaper_Shield).

- si el nombre del modelo es 'EG020BS011' o 'EM027BS013', entonces debes elegir la nueva librería, por favor haz clic aquí [New Panel Library【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/EPDV230.zip).

## Especificaciones

- Placa compatible: Arduino Uno/Leonardo/Arduino Mega

- Voltaje de Operación: 3.3/5VDC

- Corriente de Operación(refrescar pantalla):40mA

- Tipo de Interfaz: SPI

<font color="Green">
</font>

### PINs en Arduino

<table>
  <tr>
    <th>Arduino</th>
    <th>E-paper</th>
  </tr>
  <tr>
    <td width="150px">D2</td>
    <td width="250px">M_EPD_PANEL_ON</td>
  </tr>
  <tr>
    <td>D3</td>
    <td>M_EPD_BORDER</td>
  </tr>
  <tr>
    <td>D4</td>
    <td>M_/SD_CS</td>
  </tr>
  <tr>
    <td>D5</td>
    <td>M_EPD_PWM</td>
  </tr>
  <tr>
    <td>D6</td>
    <td>M_EPD_/RESET</td>
  </tr>
  <tr>
    <td>D7</td>
    <td>M_EPD_BUSY</td>
  </tr>
  <tr>
    <td>D8</td>
    <td>M_EPD_DISCHARGE</td>
  </tr>
  <tr>
    <td>D9</td>
    <td>M_/WORD_STOCK_CS</td>
  </tr>
  <tr>
    <td>D10</td>
    <td>M_/EPD_CS</td>
  </tr>
  <tr>
    <td>ICSP PORT</td>
    <td>M_MOSI , M_SCK , M_MISO</td>
  </tr>
  <tr>
    <td>A0</td>
    <td>M_TEMP_SEN</td>
  </tr>
  <tr>
    <td>A1</td>
    <td>M_OE123﻿﻿</td>
  </tr>
  <tr>
    <td>A2</td>
    <td>M_CKV</td>
  </tr>
  <tr>
    <td>A3</td>
    <td>M_STV_IN</td>
  </tr>
  <tr>
    <td>3.3V</td>
    <td>M_VCC_3V3</td>
  </tr>
  <tr>
    <td>5V</td>
    <td>M_VCC_5V</td>
  </tr>
</table>

## Demostración

Small e-Paper Shield puede mostrar imágenes, una variedad de gráficos y textos. Hay muchos ejemplos en la biblioteca que te dan algunas ideas sobre cómo usar el módulo. Ahora experimentemos con la potente biblioteca y el amplio ángulo de visión del e-Paper.

### Instalación del Hardware

- Conecta el e-Paper a la interfaz FFC del Small e-Paper Shield.
- Conecta el Small e-Paper Shield al Arduino/Seeeduino y conéctalo a la PC usando un cable USB.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/E-Paper_Screen.jpg)

Ahora es momento de mostrar las demostraciones usando la biblioteca que necesitas descargar desde [aquí](https://github.com/Seeed-Studio/ePaper). Después de descargar, necesitas ponerla en el archivo de bibliotecas del Arduino IDE por la ruta:...\arduino-1.0.1\libraries.

### Demostración de Ejemplos

Aquí seleccionamos la pantalla de 2.0 pulgadas como ejemplo para mostrar sus funciones de visualización.

#### Demo 1: Mostrar textos

- Abre el código: File -&gt; Examples -&gt; ePaper -&gt; text como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Text_Code.jpg)

**Nota Importante:**

> Necesitamos volver a enfatizar esta nota:
>
> - Si usas Arduino UNO, Seeeduino 3.0 y cualquier placa que use Atmega 328P o Atmega32U4 como controlador, debes insertar una tarjeta SD usando esta demostración. La tarjeta SD se usa para almacenar datos temporales debido al poco espacio de almacenamiento del Atmega328p y Atmega32U4.
> - Si usas un Arduino Mega, o cualquier otra placa que use Atmega1280 o Atmega2560, no necesitas insertar una tarjeta SD.

- Cambia el parámetro para que coincida con el tamaño de tu pantalla. Necesitas cambiar 200 a 270 si tu pantalla es de 2.7 pulgadas. Y necesitas hacer este cambio cuando uses otros ejemplos.

<pre>#define SCREEN_SIZE 200 // choose screen size: 144, 200, 270</pre>

- Sube el código a tu microcontrolador. Por favor haz clic [aquí](https://seeeddoc.github.io/Upload_Code/) si no sabes cómo hacerlo.

- Ahora puedes ver esto:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Display_text.jpg)

- Intenta cambiar el texto de visualización y la ubicación de visualización. Puedes aprender el uso de cada función.

#### Demo 2: Mostrar gráficos

El ejemplo: _draw_ será un buen ejemplo para mostrar una variedad de gráficos. Necesitas abrir este código: _draw_ como en el demo 1. Recuerda la nota sobre si necesitas una tarjeta SD para completar la demostración. Por favor asegúrate de si la tarjeta SD es necesaria o no, dependiendo del tipo de tu microcontrolador. Y cambia el parámetro para que coincida con el tamaño de tu pantalla.

Después de completar las modificaciones y subir el código, un hermoso patrón se mostrará en la pantalla:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Display_graphic.jpg)

La imagen se crea llamando las funciones de dibujo de gráficos. Puedes hacer tu patrón y probarlo en la pantalla. Cada función de dibujo tiene una descripción específica en la referencia.

#### Demo 3: Mostrar imagen

Similar a las pantallas TFT y pantallas OLED, el small e-Paper Shield soporta mostrar imágenes.

Ahora necesitas abrir el ejemplo de imagen: File -&gt; Examples -&gt; ePaper -&gt; image.

Necesitas subir el código para ver el resultado.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Dispaly_image.jpg)

**Nota：Como puedes ver, el tamaño de pantalla predeterminado en este sketch "image" está configurado como 2.7 pulgadas. Por favor modifica la configuración del tamaño de pantalla en caso de visualización incorrecta.**

<pre>  #define SCREEN_SIZE 200         // choose screen size here: 144, 200, 270 </pre>

Por supuesto, puedes cambiar la imagen de visualización cambiando los datos de cuadrícula de la imagen.

Por ejemplo, si tu pantalla e-Paper es de 2.7 pulgadas, necesitas proporcionar los datos de cuadrícula de 264 X 176 píxeles y copiar el código a 'static unsigned char image_270[] PROGMEM ={}' en picture.h.
Necesitas copiar el código para datos de cuadrícula de 200x96 píxeles a 'static unsigned char image_200[] PROGMEM ={}' cuando uses una pantalla de 2.0 pulgadas.

#### Cómo Mostrar una Imagen

Gracias a una contribución de Muchiri John, obtuvimos una herramienta muy útil y fácil de usar. Con esta herramienta, mostrar una imagen ya no es difícil.

Puedes descargar la herramienta [aquí](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/EpdImageKit.zip)

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/img/Snapshot_epaper_shied_tools.jpg)

## Referencia

La biblioteca Small e-Paper proporciona interfaces de software completas para ejercitar las capacidades de la pantalla e-Paper. Hay descripciones específicas sobre las funciones.

### Descripción de Funciones

<u>1. void begin(EPD_size sz);</u>

_Esta función configura el tamaño de pantalla._

- sz: puede ser EPD_1_44, EPD_2_0, EPD_2_7.

<u>2. void setDirection(EPD_DIR dir);</u>

_Esta función se usa para establecer la dirección de visualización._

- dir: puede ser DIRLEFT,DIRRIGHT,DIRNORMAL,DIRDOWN

<u>3. int drawChar(char c, int x, int y);</u>

_Esta función puede usarse para mostrar un carácter._

- c: el carácter que quieres mostrar.

- x: la coordenada X inicial del carácter.

- y: la coordenada Y inicial del carácter.

<u>4. int drawString(char *string, int poX, int poY);</u>

_Esta función puede usarse para mostrar un carácter._

- *string: la cadena que quieres mostrar.

- poX: la coordenada X inicial de la cadena.

- poY: la coordenada Y inicial de la cadena.

<u>5. int drawNumber(long long_num,int poX, int poY);</u>

_Esta función puede usarse para mostrar un carácter._

- long_num: los datos enteros largos que quieres mostrar. El máximo es

- poX: la coordenada X inicial de los datos

- poY: la coordenada Y inicial de los datos

<u>6. int drawFloat(float floatNumber,int decimal,int poX, int poY);</u>

_Esta función puede usarse para mostrar números flotantes. Los datos flotantes mostrados se redondean según el lugar decimal configurado._

- floatNumber: el número flotante que quieres mostrar.

- decimal: establece el lugar decimal.

- poX: la coordenada X inicial de los datos.

- poY: la coordenada Y inicial de los datos.

<u>7. int drawUnicode(unsigned int uniCode, int x, int y);</u>

_Esta función puede usarse para mostrar un Carácter o un Chino usando unicode. Ve las páginas 18 a 24 de la [hoja de datos GT20L16P1Y](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/GT20L16P1Y_Datasheet.pdf) para encontrar el unicode del carácter, los caracteres incluyen Latín、Hebreo、 Tailandés、Griego、 Cirílico y Árabe. El unicode chino puede verse en la [tabla de códigos de caracteres GB2312 (Chino Simplificado)](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Character_code_table.pdf)._

- uniCode: el código de máquina según un carácter o un chino.

- x: la coordenada X inicial.

- y: la coordenada Y inicial.

Nota: el unicode de caracteres entre 0x0020 a 0x007E puede ingresarse directamente a través del teclado. Como la visualización del carácter 'G', la función puede ser drawUnicode(0x0047, 3,10) o displayChar ('s',3,10);

<u>8. int drawUnicodeString(unsigned int *uniCode, int len, int x, int y);</u>

_Esta función puede usarse para mostrar varios caracteres y chino._

- *uniCode: un arreglo unicode.

- len: longitud de la cadena.

- x: la coordenada X inicial de la cadena.

- y: la coordenada Y inicial de la cadena.

<u>9. void drawLine(int x0, int y0, int x1, int y1);</u>

_Esta función puede usarse para mostrar una línea._

- x0: la coordenada X inicial de la línea

- y0: la coordenada Y inicial de la línea

- x1: la coordenada X final de la línea

- y1: la coordenada Y final de la línea

<u>10. void drawCircle(int poX, int poY, int r);</u>

_Esta función puede usarse para dibujar un círculo._

- poX: la coordenada X del centro

- poY: la coordenada Y del centro
- r: el radio del centro

<u>11. void drawHorizontalLine( int poX, int poY, int len);</u>

_Esta función puede usarse para dibujar una línea horizontal._

- poX: la coordenada X inicial de la línea.

- poY: la coordenada Y inicial de la línea.

- len: la longitud de la línea

<u>12. void drawVerticalLine( int poX, int poY, int len);</u>

_Esta función puede usarse para dibujar una línea vertical._

- poX: la coordenada X inicial de la Línea.

- poY: la coordenada Y inicial de la Línea.

- len: la longitud de la línea.

<u>13. void drawRectangle(int poX, int poY, int len, int width);</u>

_Esta función puede usarse para dibujar un rectángulo._

- poX: la coordenada X inicial del rectángulo.

- poY: la coordenada Y inicial del rectángulo.

- len: la longitud del rectángulo.

- width: el ancho del rectángulo.

<u>14. void fillRectangle(int poX, int poY, int len, int width);</u>

_Esta función puede usarse para dibujar un rectángulo relleno._

- poX: la coordenada X inicial del rectángulo.

- poY: la coordenada Y inicial del rectángulo.

- len: la longitud del rectángulo.

- width: el ancho del rectángulo.

<u>15. void fillCircle(int poX, int poY, int r);</u>

_Esta función puede usarse para dibujar un círculo relleno._

- poX: la coordenada X del centro.

- poY: la coordenada Y del centro.

- r: el radio del centro

**Ejemplo:**

```cpp
EPAPER.drawRectangle(10, 10, 100, 80);
EPAPER.fillCircle(50, 50, 30);
EPAPER.fillRectangle(50, 65, 50, 20);
EPAPER.drawCircle(150, 50, 10);
EPAPER.fillCircle(150, 50, 5);
EPAPER.drawHorizontalLine(120, 50, 60);
EPAPER.drawVerticalLine(150, 20, 60);
```

<u>16. void drawTraingle( int poX1, int poY1, int poX2, int poY2, int poX3, int poY3);</u>

_Esta función se puede usar para dibujar un triángulo. Está formado por tres puntos._

- poX1(poX2,poX3): la coordenada X de un punto del triángulo.

- poY1(poY2,poY3): la coordenada Y de un punto del triángulo.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Small_e-Paper_Shield_V2.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Archivo Eagle del Small e-Paper Shield](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Small_e-Paper_Shield_V2.1.zip)
- **[PDF]**[Small e-PaperShield v2.1 pdf](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Small%20e-PaperShield%20v2.1.pdf)
- **[EAGLE]**[Small e-PaperShield v2.1 SCH](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/Small%20e-PaperShield%20v2.1.sch)
- **[Librería]**  [Librería Small e-Paper](https://github.com/Seeed-Studio/Small_ePaper_Shield)
- **[Hoja de Datos]** [Hoja de Datos de paneles e-Paper](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/4P008-00_02_COG_Driver_Interface_Timing_for_smallPlussize.pdf)
- **[Herramienta]** [Herramienta epdImageKit](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/EpdImageKit.zip)
- **[Librería]** [Nueva Librería de Panel【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield/res/EPDV230.zip)

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
