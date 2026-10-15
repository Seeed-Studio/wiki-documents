---
description: Uso de LVGL y TFT en la pantalla redonda de Seeed Studio para XIAO
title: Uso de LVGL y TFT para toda la Serie XIAO
keywords:
  - XIAO
  - Round Dislay
  - lvgl
  - draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /using_lvgl_and_tft_on_round_display
sidebar_position: 3
sku: 104030087
last_update:
  date: 09/12/2024
  author: Citric
createdAt: '2023-03-17'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/es/using_lvgl_and_tft_on_round_display/
---

# Uso de LVGL y TFT en la pantalla redonda de Seeed Studio para toda la Serie XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>


Gracias por comprar los productos Seeed Studio Round Display. En esta sección del tutorial, nos centraremos en cómo usar la biblioteca `Seeed_GFX` y la biblioteca `LVGL` para dibujar varios patrones de esferas ricos e interesantes en la Round Display, e introduciremos el uso de algunas funciones comunes de estas dos bibliotecas útiles pero complejas, de lo simple a lo profundo. A través del contenido de este tutorial, espero que puedas usar este producto para dibujar tu patrón de esfera ideal. ¡Que tengas una excelente experiencia de aprendizaje!

## Introducción

Antes de comenzar con el estudio, nos gustaría que te prepararas con lo siguiente.

### Preparación de hardware

Para fines de demostración, este tutorial utilizará el **XIAO ESP32S3** como control maestro.

<table align="center">
 <tr>
     <th>Seeed Studio Round Display for XIAO</th>
     <th>Seeed Studio XIAO ESP32S3</th>
 </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:210, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
 <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Si deseas utilizar otros productos XIAO, los tutoriales y métodos de este artículo también son aplicables.

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Al instalar el XIAO con la Round Display, deja que el conector Type-C del XIAO mire hacia el exterior de la Round Display y luego conecta cada pin a los encabezados dobles de 7 pines.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### Preparación de software

Esta parte se ha descrito en detalle en la [Wiki básica](https://wiki.seeedstudio.com/es/get_start_round_display#preparación-de-software), por lo que puedes ir directamente a leerla.

## Dibujo de esferas simples usando la biblioteca Seeed_GFX

[Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX) (basada en modificaciones de la biblioteca TFT_eSPI, con un soporte profundo para los productos de visualización de Seeed) es una biblioteca de gráficos y fuentes rica en funciones, compatible con Arduino IDE para procesadores de 32 bits. La biblioteca TFT proporcionada por la XIAO Round Display se basa en la biblioteca después de la compatibilidad de XIAO y XIAO Round Display, lo que permite el uso de toda la Serie XIAO.

### Interfaces comunes para la biblioteca TFT

#### 1. Crear objetos TFT

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // Set the screen size at the time of object creation
```

#### 2. Inicialización

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```

`tft.begin()` y `tft.init()` son dos funciones con la misma función.

#### 3. Borrar pantalla

```c
void fillScreen(uint32_t color) // Fill the screen with a certain color
```

#### 4. Configuración de la orientación de la pantalla

```c
void setRotation(uint8_t r);      // Set the display image rotation direction, r optional parameters for 0, 1, 2, 3
uint8_t getRotation(void)         // Read the current rotation angle
```

0, 1, 2, 3 representan 0°, 90°, 180°, 270°, respectivamente, y 4 es la imagen en espejo.

#### 5. Conversión de color

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // Convert 8-bit red, green and blue to 16-bit
uint16_t color8to16(uint8_t color332)                          // Convert 8-bit color to 16-bit
uint8_t  color16to8(uint16_t color565)                         // Convert 16-bit color to 8-bit
uint32_t color16to24(uint16_t color565)                        // Convert 16-bit color to 24-bit
uint32_t color24to16(uint32_t color888)                        // Convert 24-bit color to 16-bit
```

#### 6. Inversión de color

```c
void invertDisplay(bool i)      //i = true to invert all display colors, i = false to display normally
```

#### 7. Configuraciones relacionadas con el texto

```c
/* cursor */
void setCursor(int16_t x, int16_t y)                     // Set the cursor for tft.print()
void setCursor(int16_t x, int16_t y, uint8_t font)       // Set the cursor and font size of tft.print()
int16_t getCursorX(void)                                 // Read the current cursor x position (moves with tft.print())
int16_t getCursorY(void)                                 // Retrieve the current cursor y position

/* font color */
void setTextColor(uint16_t color)                        // Set the color of characters only
void setTextColor(uint16_t fgcolor, uint16_t bgcolor, bool bgfill = false)   // Set the character foreground and background colors

/* font size */
void setTextSize(uint8_t size)                           // Set the character size multiplier (this increases the pixel size)
void setTextWrap(bool wrapX, bool wrapY = false)         // Turn on/off line feeds for text in TFT width and/or height

/* Text reference position */
void setTextDatum(uint8_t datum)                         // Set text reference position (default is top left corner)
uint8_t getTextDatum(void)                               // Get the text reference position

/* Set the background fill, which can be used to clear the display of the specified area */
void setTextPadding(uint16_t x_width)                    // Set the text fill (background margin/rewrite) width in pixels
uint16_t getTextPadding(void)                            // Get text fill
```

Como puedes ver en las funciones anteriores, si deseas imprimir el texto mostrado, simplemente puedes usar la función `tft.print()`.

#### 8. Dibujo de formas simples

Puedes dibujar algunas formas simples, incluidos puntos de píxel, segmentos de línea recta, rectángulos, círculos, etc., utilizando las siguientes funciones.

```c
drawPixel(int32_t x, int32_t y, uint32_t color)    // Plotting individual pixel points

drawLine(int32_t xs, int32_t ys, int32_t xe, int32_t ye, uint32_t color)  // Draw a line

drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)   // Draw a rectangle
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)  // Draw a rectangle with a fill color

drawCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Draw a circle
fillCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Draw a circle with a fill color

drawEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Draw a ellipse
fillEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Draw a ellipse with a fill color

drawTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triangle
fillTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triange with a fill color
```

#### 9. Dibujo de formas complejas

La biblioteca TFT también nos proporciona métodos para dibujar formas complejas, como rectángulos redondeados, arcos redondeados, formas muy suaves, etc.

```c
/** 
    Draw a pixel blended with the background pixel colour (bg_color) specified,  return blended colour 
    If the bg_color is not specified, the background pixel colour will be read from TFT or sprite 
**/
drawPixel(int32_t x, int32_t y, uint32_t color, uint8_t alpha, uint32_t bg_color)

/** 
    Draw a small anti-aliased filled circle at ax,ay with radius r (uses drawWideLine)
    If bg_color is not included the background pixel colour will be read from TFT or sprite
**/
drawSpot(float ax, float ay, float r, uint32_t fg_color, uint32_t bg_color)


drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color)  // Draw vertical straight lines
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color)  // Draw horizontal lines
drawWideLine(float ax, float ay, float bx, float by, float wd, uint32_t fg_color, uint32_t bg_color)  // Draw a thick solid line
drawWedgeLine(float ax, float ay, float bx, float by, float aw, float bw, uint32_t fg_color, uint32_t bg_color);  //Draws a tapered line. aw and bw represent the start and end width of the tapered line, respectively.


/**
    As per "drawSmoothArc" except the ends of the arc are NOT anti-aliased, this facilitates dynamic arc length changes with arc segments and ensures clean segment joints. 
    The sides of the arc are anti-aliased by default. If smoothArc is false sides will NOT be anti-aliased
**/
drawArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool smoothArc);

/**
    Draw an anti-aliased (smooth) arc between start and end angles. Arc ends are anti-aliased.
    By default the arc is drawn with square ends unless the "roundEnds" parameter is included and set true
    Angle = 0 is at 6 o'clock position, 90 at 9 o'clock etc. The angles must be in range 0-360 or they will be clipped to these limits
    The start angle may be larger than the end angle. Arcs are always drawn clockwise from the start angle.
**/
drawSmoothArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool roundEnds);

/**
    Draw an anti-aliased filled circle at x, y with radius r
    Note: The thickness of line is 3 pixels to reduce the visible "braiding" effect of anti-aliasing narrow lines this means the inner anti-alias zone is always at r-1 and the outer zone at r+1
**/
drawSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t fg_color, uint32_t bg_color)

/**
    Draw an anti-aliased filled circle at x, y with radius r
    If bg_color is not included the background pixel colour will be read from TFT or sprite
**/
fillSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t color, uint32_t bg_color)


/**
    Draw a rounded rectangle that has a line thickness of r-ir+1 and bounding box defined by x,y and w,h
    The outer corner radius is r, inner corner radius is ir
    The inside and outside of the border are anti-aliased
**/
drawSmoothRoundRect(int32_t x, int32_t y, int32_t r, int32_t ir, int32_t w, int32_t h, uint32_t fg_color, uint32_t bg_color, uint8_t quadrants)

/**
    Draw a filled rounded rectangle , corner radius r and bounding box defined by x,y and w,h
**/
fillSmoothRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t radius, uint32_t color, uint32_t bg_color)
```

#### 10. Variables y texto

Además de simplemente mostrar una cadena específica, a veces necesitamos mostrar algunas variables en la pantalla, como la hora y los valores de los sensores, etc. Entonces, según el tipo de variable, puedes elegir usar las siguientes funciones diferentes.

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Draw integer using specified font number. If no font is set (the last parameter, the default font)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Draw float using specified font number. If no font is set (the last parameter, the default font)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Draw string using specified font number. If no font is set (the last parameter, the default font)
```

#### 11. Procesamiento de imágenes

Para usar la función `pushImage()` para mostrar una imagen en la pantalla con la biblioteca TFT, puedes seguir estos pasos:

- Convierte el archivo de imagen a un formato de arreglo C/C++ que Arduino pueda reconocer. Puedes usar herramientas en línea como **Image2CPP** para convertir una imagen de mapa de bits en un formato de arreglo.

- Incluye el archivo de arreglo de imagen generado en tu programa de Arduino.

- Inicializa la biblioteca y la pantalla TFT, establece la resolución de la pantalla y el modo de color.

- Usa la función `tft.pushImage(x, y, width, height, data)` para enviar los datos de la imagen a la pantalla, donde x e y son las coordenadas de la esquina superior izquierda de la imagen, width y height son el ancho y el alto de la imagen, y data es el arreglo de la imagen.

```c
// Image data array
const unsigned char image_data[] PROGMEM = {
  // Insert the converted C/C++ array data of the image here
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. Clase TFT_eSprite

`TFT_eSprite` y `TFT_eSPI` son ambas bibliotecas de Arduino para pantallas LCD TFT, pero tienen funciones y propósitos de diseño diferentes.

TFT_eSPI es una biblioteca potente con muchas funciones avanzadas y opciones de configuración que pueden lograr varios efectos de visualización. Es compatible con múltiples chips y controladores de pantalla, y se puede usar en múltiples plataformas de hardware Arduino. Utiliza la interfaz SPI y código altamente optimizado para lograr altas tasas de refresco y una huella de código pequeña. La biblioteca TFT_eSPI se puede usar para varias aplicaciones, incluidos juegos, gráficos y GUI.

TFT_eSprite es un complemento de la biblioteca TFT_eSPI y se utiliza principalmente para dibujar pequeños sprites en la pantalla, como personajes de juegos, iconos, texto, etc. TFT_eSprite puede lograr velocidades de dibujo más rápidas porque almacena en caché las imágenes en la memoria y realiza refrescos parciales. Esto permite tasas de refresco más rápidas al actualizar pequeños sprites y puede ahorrar tiempo de procesador y espacio de memoria.

Por lo tanto, TFT_eSPI es una biblioteca general potente adecuada para múltiples aplicaciones, mientras que TFT_eSprite es una biblioteca que se centra en dibujar pequeños sprites y puede proporcionar una mayor eficiencia de dibujo.

El formato general para usar la biblioteca TFT_eSPI es el siguiente.

```c
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    // Write the code to draw the graph
}
```

El formato general para usar la biblioteca TFT_eSprite es el siguiente.

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    spr.createSprite(128, 128);  // Create a sprite of 128*128 size

    // Write the code to draw the graph

    spr.pushSprite(0, 0);  // Placement of the drawn sprite
    spr.deleteSprite();
}
```

:::note
En el código de ejemplo anterior, cuando el programa sale de la función `loop()`, se llama a `spr.deleteSprite();` para eliminar el objeto TFT_eSprite y liberar el espacio de memoria. De este modo, al crear un objeto TFT_eSprite en el siguiente bucle, se puede utilizar el espacio de memoria liberado anteriormente para evitar desperdiciar recursos de memoria.
:::

Para obtener más información sobre las funciones de la biblioteca TFT y su uso, recomendamos leer los archivos **TFT_eSPI.h** y **TFT_eSPI.cpp** en la biblioteca.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:300, height:'auto'}}/></div>

### Acerca de las opciones de personalización de la biblioteca TFT

A veces necesitamos usar algunas bibliotecas de fuentes personalizadas o algunas funciones que no están habilitadas para ahorrar espacio. En este punto necesitaremos modificar el contenido del archivo **Setup66_Seeed_XIAO_Round.h**.

- La ruta predeterminada de este archivo en sistemas **Windows** es:

`C:\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

- La ruta predeterminada de este archivo en sistemas **MacOS** es:

`\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

Activa o desactiva algunas funciones innecesarias según el uso real.
Por ejemplo, si quieres usar fuentes personalizadas, entonces deberías descomentar `#define SMOOTH_FONT`, de lo contrario, probablemente obtendrás errores al ejecutar.

Por supuesto, los archivos de cabecera de tus fuentes personalizadas deben guardarse en el mismo directorio que los archivos ino, lo cual es un paso necesario para evitar errores.

### Programa de ejemplo de dial basado en TFT

Hemos escrito un programa de dial para la pantalla redonda que se puede usar directamente. Debido a la limitación de espacio de memoria de algunos modelos XIAO, este programa solo realiza la función básica de movimiento de la aguja y no está diseñado para otras funciones. Los usuarios pueden usar este programa para aprender el uso de la biblioteca TFT y la función de movimiento del puntero, y completar el desarrollo de diales más complejos según la situación real.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## Dibujar diales simples usando la biblioteca LVGL

La biblioteca LVGL es una biblioteca gráfica embebida de propósito general que ofrece un amplio conjunto de controles de interfaz gráfica de usuario, como botones, etiquetas, listas, etc., que pueden utilizarse para construir diversas interfaces de usuario. A diferencia de la biblioteca TFT, la biblioteca LVGL proporciona una interfaz gráfica orientada a objetos y abstracta que es más fácil de usar y mantener, pero que puede implicar algunas concesiones en rendimiento y fiabilidad.

La biblioteca LVGL es una herramienta muy útil para construir interfaces de usuario complejas que reducen la carga de trabajo de escribir y mantener código. La biblioteca TFT, por otro lado, es más adecuada para algunas aplicaciones que requieren gráficos de alto rendimiento, como el procesamiento de imágenes en tiempo real, el renderizado de vídeo, etc.

### Interfaces comunes para la biblioteca LVGL

El API de la biblioteca LVGL es muy rico y complejo, y esperamos que todos los que utilicen LVGL se tomen el tiempo de leer la documentación de introducción oficial de LVGL.

- [Get Started](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [Display interface](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [Input device interface](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [Tick interface](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [Operating system and interrupts](https://docs.lvgl.io/latest/en/html/porting/os.html)

### Dibujar interfaces de usuario complejas con SquareLine Studio

Además de leer la extensa documentación oficial de LVGL y escribir nuestros propios programas gráficos LVGL, también podemos utilizar la herramienta oficial SquareLine Studio de LVGL para mejorar nuestra eficiencia de desarrollo.

A continuación, te daremos una breve introducción al uso del software en la pantalla redonda, métodos de configuración, para ayudarte a comenzar rápidamente a usar el software para diseñar algunas interfaces.

:::caution
Te recomendamos usar la versión **v1.5.1** de SquareLine Studio. Esta es también la versión más reciente del software en el momento de escribir este Wiki.

Entorno utilizado en la preparación de este tutorial:

1. **[Seeed_GFX library](https://github.com/Seeed-Studio/Seeed_GFX)** por Bodmer, modificada por Seeed Studio.

2. **[SeeedStudio_lvgl library](https://github.com/Seeed-Projects/SeeedStudio_lvgl)** por kisvegabor, embeddedt, pete-pjb, modificada por Seeed Studio.
:::

#### Paso 1. Descargar SquareLine Studio

Puedes ir al sitio web oficial de SquareLine Studio haciendo clic [aquí](https://squareline.io/), luego haz clic en **TRY IT FOR FREE** para descargar el software a tu ordenador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

Si tu ordenador está usando este software por primera vez, entonces obtendrás una prueba gratuita de 30 días; si no, la versión gratuita también es capaz de dibujar hasta 5 páginas, usando 50 widgets.

:::caution
Si eres un usuario por primera vez, por favor no te registres para iniciar sesión en una cuenta que no tenga saldo, ¡podrías perder toda la prueba gratuita de 30 días!
:::

#### Paso 2. Configurar la información de la interfaz de la pantalla

A continuación, podemos abrir el software y empezar creando una página de visualización en blanco.

Como estamos usando programación con Arduino, entonces lo que creemos también necesita ser un archivo de Arduino.

Nuestra pantalla circular tiene una resolución de pantalla de **240*240** y solo admite profundidad de color de **16bit**. Aparte de eso, el nombre y el tema del proyecto deben ser definidos por ti; aquí usaré el estilo oscuro como tema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

¿Qué pasa si eres demasiado rápido, como yo, y olvidas configurar la forma del dial y creas el proyecto? No hay problema, en la esquina superior izquierda de la interfaz principal, también puedes encontrar la pestaña Project Settings para hacer cambios en la configuración que acabas de realizar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Ten en cuenta que debes completar la configuración de tu proyecto antes de empezar oficialmente a dibujar y asegurarte de que coincide con las especificaciones de nuestra pantalla, de lo contrario todo lo que dibujes puede no mostrarse correctamente en la pantalla.

No todo se puede modificar después de que el proyecto haya sido creado, como el nombre del proyecto. Por favor, no uses ningún idioma que no sea inglés ni caracteres especiales en el nombre del proyecto, y por favor no uses el signo **"-"**, reemplaza el signo **"-"** por **"_"**. ¡De lo contrario, el programa exportado puede tener errores durante la compilación!
:::

#### Paso 3. Comprender la distribución funcional del software

Basándome en mis hábitos de uso, he dividido la interfaz principal del software aproximadamente en las siguientes partes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **Panel de Jerarquía y Animación**: Esta área permite configurar diferentes páginas de dial, capas de visualización y animaciones.

- **Widgets**: Aquí puedes elegir qué componentes usar para añadir en la página de visualización. Estos componentes están integrados en el software y pueden utilizarse directamente. Los componentes que no estén disponibles aquí deberán añadirse más tarde en tu propio software de programación.

- **Área de Trabajo**: En el área de trabajo, puedes cambiar la posición de ciertos componentes arrastrándolos y soltándolos. Aún más conveniente, la visualización final será consistente con lo que se muestra en el área de trabajo, así que lo que ves es lo que obtienes.

- **Assets & Console**: Assets muestra los recortes de imagen que has añadido, y estos recortes de imagen añadidos pueden utilizarse en los componentes que admiten insertar imágenes. Console te mostrará algunos mensajes de error (si los hay) que se produjeron durante la configuración.

- **Área de Configuración**: El propósito principal aquí es configurar las propiedades del componente.

Primero tendremos un conocimiento general de la interfaz del software, y luego te guiaremos a través de la comprensión práctica del uso de cada parte.

#### Paso 4. Usar el software para hacer realidad tus ideas

Supongamos que ahora quiero dibujar una interfaz de música. Por supuesto, me gusta mucho escuchar música, así que quiero dibujar una interfaz de visualización de música como ejemplo.

Me gustaría tener los siguientes componentes en esta pantalla de visualización de música.

- Portada del álbum de mi música favorita como fondo.
- Tener una barra de progreso de reproducción
- Tener una barra de control de volumen
- Tener un botón de reproducir y pausar

Después de ordenar nuestros requisitos, necesitamos diseñar los componentes de visualización de abajo hacia arriba, como construir un edificio.

El primer paso es crear una imagen de fondo musical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

Selecciona **Panel** en los widgets, puedes hacer clic en él y se colocará automáticamente en el centro del dial, o puedes arrastrarlo a la posición del dial donde quieras colocarlo.

Pondremos la imagen mostrada en el Panel en lugar de directamente en el fondo del dial porque no me gusta que todo el dial sea esta imagen, y el Panel se puede redimensionar libremente.

En este punto, puedes ver que ya hay una serie de propiedades en el Área de Configuración que podemos establecer. La configuración de cada componente es generalmente similar, con una o dos opciones que pueden ser un poco diferentes.

> **Name**: Debes nombrar el widget. No puede haber un número, guion bajo o un carácter especial al principio del nombre. Una vez exportado el código, puedes encontrar el widget por ese nombre.

> **Layout**: Puedes usar un layout para organizar automáticamente los elementos secundarios de un widget. Si el layout está habilitado, los valores X e Y de los elementos secundarios no se pueden ajustar manualmente, a menos que la bandera `IGNORE_LAYOUT` o `FLOATING` esté habilitada en los elementos secundarios.

> **Main Flags**
>
> - **Hidden** - Hacer que el objeto esté oculto. (Como si no estuviera allí en absoluto).
> - **Clickable** - Hacer que el objeto sea clicable mediante dispositivos de entrada
> - **Click focusable** - Añadir estado enfocado al objeto cuando se hace clic
> - **Checkable** - Alternar el estado marcado cuando se hace clic en el objeto
> - **Snappable** - Si el ajuste de desplazamiento está habilitado en el padre, puede ajustarse a este objeto
> - **Press lock** - Mantener el objeto presionado incluso si la pulsación se desliza fuera del objeto
> - **Event bubble** - Propagar también los eventos al padre
> - **Gesture bubble** - Propagar también los eventos al padre
> - **Adv hittest** - Permitir realizar una prueba de impacto (clic) más precisa. Por ejemplo, teniendo en cuenta las esquinas redondeadas
> - **Ignore layout** - Hacer que el objeto sea posicionable por los layouts
> - **Floating** - No desplazar el objeto cuando el padre se desplaza e ignorar el layout

> **Scroll Flags**
>
> - **Scrollable** - Hacer que el objeto sea desplazable
> - **Scroll elastic** - Permitir el desplazamiento interno pero con menor velocidad
> - **Scroll momentum** - Hacer que el objeto se desplace más cuando se "lanza"
> - **Scroll one** - Permitir desplazar solo un elemento secundario ajustable
> - **Scroll chain** - Permitir propagar el desplazamiento a un padre
> - **Scroll on focus** - Desplazar automáticamente el objeto para hacerlo visible cuando está enfocado

>**Scroll Settings**
>
> - **Scroll direction** - Las barras de desplazamiento se muestran según una configuración
> - **Scrollbar mode** - Las barras de desplazamiento se muestran según un modo configurado. Existen los siguientes modos:
>   - **Off** - Nunca mostrar las barras de desplazamiento
>   - **On** - Mostrar siempre las barras de desplazamiento
>   - **Active** - Mostrar las barras de desplazamiento mientras un objeto se está desplazando
>   - **Auto** - Mostrar las barras de desplazamiento cuando el contenido es lo suficientemente grande como para desplazarse

> **States**: El objeto puede estar en una combinación de los siguientes estados:
>
> - **Clickable** - Estado alternado o marcado
> - **Disable** - Estado deshabilitado
> - **Focusable** - Enfocado mediante teclado o codificador o clicado mediante touchpad/ratón
> - **Pressed** - Siendo presionado

> **Configuración de estilo**: Los estilos se pueden usar para añadir efectos a los widgets o a sus partes. Puedes añadir un color de fondo personalizado, borde, sombra, etc. En Style Settings, puedes añadir o modificar los valores de estos parámetros.
>
> **Estado**: Puedes crear un estilo personalizado para cada estado.
>
> **Propiedades de estilo**: Las propiedades de estilo son los parámetros que se deben configurar para los estilos.
>
> - **Arc**: El estilo Arc se puede usar en aquellos widgets que tienen el componente Arc.
>   - **Line color** - El color de la línea
>   - **Arc width** - El ancho del arco
>   - **Arc rounded** - Los extremos de la línea del arco son redondeados
>   - **Arc image** - La imagen de fondo para la línea del arco
> - **Background**: El estilo Background es el fondo de los widgets. Puedes crear degradados o hacer que las esquinas del fondo sean redondeadas.
>   - **Color and alpha** - Establece el color de fondo y el alfa del objeto.
>   - **Gradient color** - Establece el color del degradado del fondo.
>   - **Bg main stop** - Establece el punto desde el cual debería comenzar el color de fondo para los degradados.
>   - **Bg gradinet stop** - Establece el punto desde el cual debería comenzar el color degradado del fondo
>   - **Bg radius** - El radio que utilizas para hacer redondeadas las esquinas del fondo
>   - **Gradient direction** - La dirección del degradado. Puede ser horizontal o vertical.
>   - **Clip corner** - Habilita recortar el contenido desbordado en la esquina redondeada.
> - **Background Image**: Puedes establecer una imagen como imagen de fondo.
>   - **Bg image** - La imagen que utilizas como imagen de fondo
>   - **Bg image opa** - La opacidad de la imagen de fondo
>   - **Recolor** - Con la función Recolor, puedes usar un color sobre la imagen de fondo. Establece la profundidad del color cambiando el parámetro alfa.
>   - **Bg image tiled** - Si está habilitado, la imagen de fondo se colocará en mosaico
> - **Blend**: Usando el estilo Blend, puedes mezclar los colores de píxel de la parte actual del widget con los colores del objeto que le sigue.
>   - **Blend mode** - Elige entre cuatro opciones.
>     - **Normal** - Estado predeterminado
>     - **Additive** - Sumar píxeles
>     - **Subtractive** - Restar píxeles
>     - **Multiply** - Multiplicar píxeles
>   - **Blend opacity** - Aquí puedes establecer la opacidad de la parte del widget
> - **Border**: Usando Border, puedes dibujar un borde alrededor del objeto seleccionado sobre las líneas internas.
>   - **Border color** - El color del borde
>   - **Border width** - El ancho del borde
>   - **Border side** - La dirección del borde
> - **Line**: El estilo Line se puede usar en aquellos widgets que tienen el componente Line.
>   - **Color** -  El color de la línea
>   - **Width** - El ancho de la línea
>   - **Line rounded** - Los extremos de la línea serán redondeados
> - **Outline**: El estilo Outline es similar al estilo Border pero aquí dibujas el borde alrededor de la parte seleccionada del widget.
>   - **Outline color** - El color del contorno
>   - **Outline width** - El ancho del contorno
>   - **Outline pad** - Distancia desde el lado del widget en píxeles
> - **Paddings**: El estilo Paddings pone un relleno sobre la parte del widget. Significa que las partes que están debajo en la jerarquía se desplazarán por la distancia definida en el padding con valores de píxeles.
>   - **Pad** - La extensión del relleno
> - **Shadow**: Usando un estilo Shadow, puedes dibujar una sombra o un resplandor en la parte seleccionada del widget.
>   - **Shadow color** - El color de la sombra
>   - **Shadow width** - El ancho de la sombra
>   - **Shadow spread** - La profundidad de la sombra
>   - **Shadow OX** - Desplaza la sombra en el eje X
>   - **Shadow OY** - Desplaza la sombra en el eje Y
> - **Text**: El estilo Text define los parámetros del texto que se puede encontrar en el widget.
>   - **Text color** - El color del texto
>   - **Letter spacing** - El espacio entre las letras
Line spacing - El espacio entre las líneas
>   - **Text align** - La dirección de la alineación del texto
>   - **Text decor** - Puedes sobrelinear o subrayar el texto
>     - **None** - Texto normal
>     - **Understand** - Texto subrayado
>     - **Strikethrough** - Texto sobrelineado
>     - **Text font** - La fuente del texto
>
> **Propiedades de evento**: Añadiendo eventos, puedes crear diferentes interacciones para los widgets, por ejemplo cambiar la pantalla, reproducir una animación, etc. al presionar un botón.
>
> - **Add Event**: En la parte inferior del Panel Inspector, puedes encontrar el botón ADD EVENT. Primero, debes nombrar el evento y luego elegir un disparador para iniciarlo.
>   - **Event name** - El nombre del evento
>   - **Event Trigger** - La interacción de inicio del evento
>     - **Pressed** - Un objeto ha sido presionado
>     - **Clicked** - Un objeto fue presionado por un corto período de tiempo y luego liberado. No se llama si se ha hecho scroll
>     - **Long pressed** - Un objeto ha sido presionado durante un período de tiempo más largo
>     - **Long pressed repeat** - Se llama después de `long_press_time` en cada `long_press_repeat_time` ms. No se llama si se ha hecho scroll
>     - **Focused** - Un objeto está enfocado
>     - **Defocused** - Un objeto está desenfocado
>     - **Value changed** - El valor del objeto ha sido cambiado.
>     - **Ready** - Un proceso ha finalizado
>     - **Cancel** - Un proceso ha sido cancelado
>     - **Screen loaded** - Una pantalla fue cargada, se llama cuando todas las animaciones han terminado
>     - **Screen unloaded** - Una pantalla fue descargada, se llama cuando todas las animaciones han terminado
>     - **Screen load start** - La carga de una pantalla ha comenzado, se dispara cuando el retardo de cambio de pantalla ha expirado
>     - **Screen unload start** - La descarga de una pantalla ha comenzado, se dispara inmediatamente cuando se llama a lv_scr_load/lv_scr_load_anim
>       - **Checked** - Un widget marcado
>       - **Unchecked** - Un widget desmarcado
>       - **Gesture** - Dirección del deslizamiento con el dedo
> - **Add Event**
>   - **Actions**: Las acciones son aquellos elementos del evento que comienzan cuando ocurre el disparador.
>     - **Call function**: Usando la acción Call function, puedes añadir un nombre de función al que el evento pueda hacer referencia. Esta función se creará en el archivo ui__events.c o ui_events.py durante el proceso de exportación.
>     - **Change Screen**: Puedes cambiar entre pantallas con esta acción.
>       - **Screen to** - La pantalla a la que te gustaría cambiar
>       - **Fade mode** - La animación durante el cambio de pantalla
>       - **Speed** - La velocidad de cambio de pantalla
>       - **Delay** - El retardo del cambio de pantalla
>     - **Increment Arc**: Puedes modificar el valor del widget Arc.
>     - **Increment Bar**: Puedes modificar el valor del widget Bar.
>     - **Increment Slider**: Puedes modificar el valor del widget Slider.
>     - **Modify Flag**: Puedes modificar el estado de bandera de un widget.
>     - **Play Animation**: Puedes reproducir las animaciones creadas en el Panel de Animación.
>       - **Animation** - La animación seleccionada
>       - **Target** - El widget de destino en el que te gustaría usar la animación
>       - **Delay** - El tiempo de retardo de la animación
>     - **Set Opacity**: La opacidad del widget seleccionado.
>     - **Set Flag**: Establece el valor para el estado de bandera del widget.
>     - **Set Property**: Cambia el valor de la propiedad del widget.
>     - **Set text value from arc**: Muestra el valor del widget Arc en un widget Label usando esta acción.
>     - **Set text value from slider**: Muestra el valor del widget Slider en un widget Label usando esta acción.
>     - **Set text value when checked**: Cambia el texto de un widget Label dependiendo del estado marcado o desmarcado del objeto de destino.

##### Uso del Panel

En resumen, si necesito mostrar la imagen del álbum en la mitad superior de la esfera, entonces necesito ajustar las coordenadas y el tamaño del Panel y establecer la imagen de fondo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
Para ocupar la menor memoria posible en la placa base, inserta la imagen tanto como sea posible a la resolución de la esfera para comprimirla, ¡no uses una imagen demasiado grande!
:::

Luego podemos configurar la transparencia de la imagen en **Bg Image opa**. No quiero que sea completamente opaca porque una imagen completamente opaca afectará a la visualización de mi texto después.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

Cabe destacar aquí que todos los componentes tienen líneas de marco por defecto, por lo que para no afectar a la estética, necesitamos eliminar las líneas de marco. La forma de hacerlo es establecer la transparencia del Border color en 0.

Por lo tanto, **si quieres eliminar cualquier color o cualquier segmento de línea, puedes hacerlo configurando la transparencia en 0**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### Uso de Label

Luego, añadimos texto en el medio (usamos widgets **Label**), que muestra el artista y el nombre de la canción. En el estilo, podemos cambiar el tamaño de la fuente, el color y otros contenidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Uso de Imgbutton

Debajo del texto, añadimos algunos componentes de reproducción (usamos widgets **Imgbutton**), como el botón de reproducir/pausar y el botón de cambiar pista arriba/abajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbutton es un tipo especial de botón, la mayor diferencia entre este y el botón normal es que Imgbutton puede configurarse con tres estados de estilo: antes de presionar el botón, al presionarlo y después de soltarlo. Este proceso es muy similar al escenario en el que presionamos para cambiar el estado de reproducción. Si crees que el botón arriba/abajo no necesita una función tan complicada, también puedes usar directamente el botón Button.

Entonces ahora configuramos las imágenes de los botones Press y Release al estilo de reproducción, y solo en el estado Disable es de estilo de pausa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

Luego añadimos un evento, cuya función es que, cuando el usuario pulsa el botón, el estado cambie a Disable, de modo que se consiga el efecto de cambio de imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

Si quieres verificar el efecto, puedes hacer clic en el botón de reproducción en la parte superior derecha del espacio de trabajo, y luego puedes hacer clic en el botón de reproducción para ver el efecto del cambio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Uso de Arc

Luego añadimos el último componente, que es la barra de volumen y la barra de progreso de reproducción. Haremos esto usando Arc.

Para Arc, lo principal que necesitamos ajustar son el color y el tamaño de los anillos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- MAIN: Se refiere al diseño de estilo del fondo rectangular detrás de todo el Arc. El **Arc** configurado en el estilo MAIN no indica el estilo del área del arco.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- INDICATOR: Se refiere al ajuste de estilo del arco del área de indicación inicial. La configuración de **Arc** bajo INDICATOR es la que se usa generalmente.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- KNOB: Se refiere a la configuración de este círculo en la imagen. Si no necesitas este círculo, puedes ajustar su transparencia a 0. El tamaño de este círculo necesitas configurarlo dentro de Arc en INDICATOR.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

Este es el efecto que quiero conseguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

Si has comprobado que es clicable, entonces puedes hacer clic en el botón Run y arrastrar el arco, así podrás conseguir el efecto de cambiar la barra de volumen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### Cambio de pantalla

Con la interfaz de música casi diseñada, podemos añadir a continuación una nueva interfaz principal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

Luego diseña un evento que cambie la pantalla principal a la pantalla de música. Por ejemplo, aquí lo diseño para cambiar a la interfaz de reproducción de música deslizando el dedo hacia la derecha bajo la interfaz principal.

Dado que la interfaz principal es la protagonista, este evento debe añadirse a la interfaz principal bajo Screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

Si quieres tener un efecto de animación que cambie lentamente después de un deslizamiento, entonces puedes mantener Speed en 500; si quieres cambiar inmediatamente, entonces Speed debe ajustarse a 0.

##### Animación del puntero

Volviendo al diseño de la interfaz principal, queremos añadir el efecto de animación de la rotación de la aguja del dial.

Lo primero que hay que hacer es dibujar tus propias agujas de segundos, minutos y horas. Luego añádelas al dial principal con el estilo de **Image**.

El ajuste de la posición del puntero requiere paciencia, ya que necesitamos asegurarnos de que el puntero gire alrededor de un punto fijo en la imagen.

Transform se configura para la colocación de la imagen. El Pivot en la pestaña Image de abajo establece las coordenadas del punto de rotación. La forma general de configurarlo es primero ajustar Transform para asegurarse de que el punto fijo del puntero esté en el centro del dial, y luego ajustar un poco las coordenadas de Pivot. Cuando todos los ángulos puedan hacer que el punto fijo del puntero no se mueva, entonces estos parámetros son los más adecuados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

Una vez que tengas todas las posiciones de los punteros determinadas, puedes empezar a añadir nuevos efectos de animación. Los ajustes de efectos de animación para diferentes punteros se pueden encontrar en la siguiente figura.

<table align="center">
 <tr>
     <th>Second</th>
     <th>Minute </th>
        <th>Hour</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/25.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/26.png" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/27.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>

Por último, solo tenemos que configurar la animación del movimiento del puntero para que se reproduzca mientras se carga la pantalla principal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
Los tutoriales anteriores han cubierto básicamente el 80% de los escenarios de uso del software, y muchos de los otros componentes son muy similares. Por último, aquí tienes algunos consejos y sugerencias para cuando utilices el software.

1. Debes colocar todos los componentes con funcionalidad táctil en la parte superior, de lo contrario interferirán con la implementación de la funcionalidad táctil del componente.

    Por defecto, el último componente colocado por el software está en la parte superior. Esto significa que, en la pestaña Hierarchy, los componentes que están dispuestos más hacia abajo tienden a estar en la parte superior. En la interfaz de música que acabas de diseñar, la capa superior es el Arc para ajustar el volumen del sonido, lo que provoca un problema porque el Arc es un rectángulo que ocupa todo el dial y afectará al toque del botón de reproducción, por lo que normalmente necesitas ajustar la capa del botón de reproducción a la parte superior de la capa de Arc para que no afecte al toque.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. Apaga tantas funciones innecesarias como sea posible para ahorrar más memoria.

    Cada componente tendrá algunas Flags marcadas por defecto, pero no todas son necesarias. Aunque las opciones por defecto no supondrán un problema, desactivar las Flags no deseadas hará que tu interfaz de dial funcione con mayor fluidez.

    Como el álbum de fondo en la interfaz de música, no es necesario hacer clic ni tiene animación, y es bueno desactivar la opción en Flags. Pero al desactivar también es necesario considerar la situación real; por ejemplo, en la escena de deslizamiento para cambiar la página del dial, desactivar la función de algunas Flags hará que el deslizamiento quede deshabilitado, por lo que aún es necesario decidir desactivar según el efecto durante la ejecución.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. Asegúrate de dar un nombre único a todos tus componentes y animaciones, eventos, etc.

    El software solo puede ahorrarte el tiempo de dibujar algunos patrones y animaciones, pero los efectos más complejos pueden requerir que los programes más tarde para lograrlos. Entonces es importante poder encontrar rápidamente dónde se encuentran tus componentes en el código. ¡Nombrar componentes, eventos y animaciones es clave!

:::

#### Paso 5. Exportación y aplicación de programas

Una vez que tu interfaz de dial esté dibujada, puedes considerar exportar la UI a un programa y subirlo a XIAO mediante Arduino. Haz clic en la esquina superior izquierda del software y haz clic en **Export** -> **Create Template Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

Luego selecciona la ruta para guardar y el código se exportará automáticamente. La plantilla de proyecto exportada tendrá los siguientes archivos en su interior.

- **libraries**: Este directorio de carpeta proporciona todas las bibliotecas que necesitas usar en tu proyecto. Para nuestro tutorial, las bibliotecas *lvgl* y *TFT_eSPI* en este directorio **no son necesarias**, pero *ui* y *lv_conf.h* son **útiles** para nosotros.
- **ui**: Dentro está el programa del proyecto para Arduino, el archivo .ino.
- REANME.md

Lo que necesitamos hacer, entonces, es primero colocar las bibliotecas y archivos de configuración requeridos en la carpeta libraries de Arduino. Luego modificar el archivo .ino para asegurarnos de que la funcionalidad funcione.

Copia por favor la carpeta **ui** y el archivo **lv_conf.h** desde el directorio de la carpeta libraries exportado por SquareLine Studio al directorio raíz de tu biblioteca de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/101.png" style={{width:1000, height:'auto'}}/></div>

Luego, podemos abrir directamente el archivo .ino dentro de la carpeta ui. Después, necesitamos hacer cambios en los siguientes archivos para asegurarnos de que el programa se compile sin problemas.

- **ui.ino**:

<table align="center">
 <tr>
  <th>Descriptions</th>
     <th>Screenshot</th>
     <th>Code Segment</th>
 </tr>
 <tr>
  <th>Defining the TFT library to be used and importing the round screen library</th>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/102.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L1" target="_blank"><b>Ver código de ejemplo</b></a></td>
 </tr>
    <tr>
  <th>Comentar las definiciones duplicadas de la clase tft</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/103.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L20" target="_blank"><b>Ver código de ejemplo</b></a></td>
 </tr>
 <tr>
  <th>Reescribir funciones táctiles</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/104.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L46" target="_blank"><b>Ver código de ejemplo</b></a></td>
 </tr>
 <tr>
  <th>Añadir función de inicialización de pantalla e inicializar función táctil</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/105.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L86" target="_blank"><b>Ver código de ejemplo</b></a></td>
 </tr>
 <tr>
  <th>Rotación de pantalla</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/106.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L94" target="_blank"><b>Ver código de ejemplo</b></a></td>
 </tr>
</table>

Then you can choose which XIAO you use to compile and upload.

### Sobre las opciones de personalización de la biblioteca LVGL

Si encuentras un mensaje de error indicando que algunos componentes no están definidos después de compilar, lo más probable es que no hayas reemplazado el archivo **lv_conf.h** en el directorio raíz de la biblioteca de Arduino con el archivo **lv_conf.h** exportado por SquareLine Studio.

Para ahorrar memoria en la placa base, el archivo lv_conf.h proporcionado por defecto desactiva algunas de las funciones de lvgl. Pero si utilizas estas funciones en el diseño de tu dial, necesitas activarlas manualmente.

- La ruta predeterminada de `lv_conf.h` en sistemas **Windows** es:

`C:\Users\{UserName}\Documents\Arduino\libraries`

- La ruta predeterminada de `lv_conf.h` en sistemas **MacOS** es:

`\Users\{UserName}\Documents\Arduino\libraries`

Como ejemplo sencillo, en el ejemplo anterior utilizamos la fuente `MONTSERRAT 8`, pero por defecto esta fuente está desactivada, por lo que puede producirse un error durante el proceso de compilación.

Entonces todo lo que tenemos que hacer es cambiar el 0 que aparece después de esta fuente en el archivo lv_conf.h por 1, lo que significa que la fuente está habilitada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

Si encuentras un error similar, puedes comprobar de nuevo que la función de personalización esté habilitada.

### Programa de dial basado en LVGL

Hemos creado dos estilos de dial para la pantalla circular como referencia para los usuarios. Debido a la compleja lógica de la interfaz de usuario, esto requerirá cierto rendimiento y memoria en la placa XIAO. Si tu XIAO muestra un error de memoria insuficiente al compilar el siguiente programa de dial, entonces puede que necesites actualizar tu XIAO o reducir la funcionalidad de los diales.

- Estilo de dial I:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/ui" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<!-- - Dial Style II:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div> -->

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
