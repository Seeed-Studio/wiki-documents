---
description: Usando LVGL y TFT en el Seeed Studio Round Display para XIAO
title: Usando LVGL y TFT para toda la Serie XIAO
keywords:
- XIAO
- Round Dislay
- lvgl
- draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/using_lvgl_and_tft_on_round_display
last_update:
  date: 09/12/2024
  author: Citric
---

# Usando LVGL y TFT en el Seeed Studio Round Display para toda la serie XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>


Gracias por comprar los productos Seeed Studio Round Display. En esta sección del tutorial, nos enfocaremos en cómo usar la biblioteca `Seeed_GFX` y la biblioteca `LVGL` para dibujar varios patrones de esfera ricos e interesantes en el Round Display, e introducir el uso de algunas funciones comunes de estas dos bibliotecas útiles pero complejas de simple a profundo. A través del contenido de este tutorial, espero que puedas usar este producto para dibujar tu patrón de esfera ideal. ¡Que tengas una gran experiencia de aprendizaje!

## Comenzando

Antes de que entres al estudio, nos gustaría que estés preparado para lo siguiente.

### Preparación de Hardware

Para fines de demostración, este tutorial usará el **XIAO ESP32S3** como control maestro.

<table align="center">
 <tr>
     <th>Seeed Studio Round Display para XIAO</th>
     <th>Seeed Studio XIAO ESP32S3</th>
 </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:210, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
 <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Si quieres usar otros productos XIAO, los tutoriales y métodos en este artículo también son aplicables.

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Al instalar el XIAO con Round Display, por favor deja que el conector Type-C del XIAO mire hacia afuera del Round Display, y luego conecta cada pin contra los conectores duales de 7 pines.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### Preparación de Software

Esta parte ha sido descrita en detalle en el [Wiki Básico](https://wiki.seeedstudio.com/es/get_start_round_display#software-preparation), así que puedes saltar directamente a leerlo.

## Dibujando esferas simples usando la biblioteca Seeed_GFX

[Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX) (Basado en modificaciones a la biblioteca TFT_eSPI, con soporte profundo para los productos de pantalla de Seeed) es una biblioteca de gráficos y fuentes rica en características compatible con Arduino IDE para procesadores de 32 bits. La biblioteca TFT proporcionada por el XIAO Round Display está basada en la biblioteca después de la compatibilidad de XIAO y XIAO Round Display, que soporta el uso de toda la serie XIAO.

### Interfaces Comunes para la Biblioteca TFT

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

#### 3. Limpiar pantalla

```c
void fillScreen(uint32_t color) // Fill the screen with a certain color
```

#### 4. Configurar la orientación de la pantalla

```c
void setRotation(uint8_t r);      // Set the display image rotation direction, r optional parameters for 0, 1, 2, 3
uint8_t getRotation(void)         // Read the current rotation angle
```

0, 1, 2, 3 representan 0°, 90°, 180°, 270°. Respectivamente, y 4 es la imagen espejo.

#### 5. Conversión de Color

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

#### 7. Configuraciones relacionadas con texto

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

Como puedes ver en las funciones anteriores, si quieres imprimir el texto mostrado, simplemente puedes usar la función `tft.print()`.

#### 8. Dibujo de formas simples

Puedes dibujar algunas formas simples, incluyendo puntos de píxel, segmentos de línea recta, rectángulos, círculos, etc. usando las siguientes funciones.

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
fillTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triange with a fill color```

#### 9. Dibujo de formas complejas

La biblioteca TFT también nos proporciona métodos para dibujar formas complejas, como rectángulos redondeados, arcos redondeados, formas suaves y sedosas, etc.

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

Además de simplemente mostrar una cadena específica, a veces necesitamos mostrar algunas variables en la pantalla, como tiempo y valores de sensores, etc. Entonces, dependiendo del tipo de variable, puedes elegir usar las siguientes funciones diferentes.

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Draw integer using specified font number. If no font is set (the last parameter, the default font)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Draw float using specified font number. If no font is set (the last parameter, the default font)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Draw string using specified font number. If no font is set (the last parameter, the default font)
```

#### 11. Procesamiento de imágenes

Para usar la función `pushImage()` para mostrar una imagen en pantalla con la biblioteca TFT, puedes seguir estos pasos:

- Convierte el archivo de imagen a un formato de array C/C++ que Arduino pueda reconocer. Puedes usar herramientas en línea como **Image2CPP** para convertir una imagen bitmap a formato de array.

- Incluye el archivo de array de imagen generado en tu programa Arduino.

- Inicializa la biblioteca TFT y la pantalla, establece la resolución de pantalla y el modo de color.

- Usa la función `tft.pushImage(x, y, width, height, data)` para enviar los datos de imagen a la pantalla, donde x e y son las coordenadas de la esquina superior izquierda de la imagen, width y height son el ancho y alto de la imagen, y data es el array de imagen.

```c
// Image data array
const unsigned char image_data[] PROGMEM = {
  // Insert the converted C/C++ array data of the image here
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. Clase TFT_eSprite

`TFT_eSprite` y `TFT_eSPI` son ambas bibliotecas Arduino para pantallas TFT LCD, pero tienen diferentes funciones y propósitos de diseño.

TFT_eSPI es una biblioteca poderosa con muchas características avanzadas y opciones de configuración que puede lograr varios efectos de visualización. Soporta múltiples chips controladores de pantalla y controladores, y puede usarse en múltiples plataformas de hardware Arduino. Usa la interfaz SPI y código altamente optimizado para lograr velocidades de refresco rápidas y una huella de código pequeña. La biblioteca TFT_eSPI puede usarse para varias aplicaciones incluyendo juegos, gráficos y GUI.

TFT_eSprite es un complemento de la biblioteca TFT_eSPI y se usa principalmente para dibujar pequeños sprites en la pantalla, como personajes de juegos, iconos, texto, etc. TFT_eSprite puede lograr velocidades de dibujo más rápidas porque almacena en caché las imágenes en memoria y realiza refrescos parciales. Esto permite velocidades de refresco más rápidas al actualizar pequeños sprites y puede ahorrar tiempo de procesador y espacio de memoria.

Por lo tanto, TFT_eSPI es una biblioteca general poderosa adecuada para múltiples aplicaciones, mientras que TFT_eSprite es una biblioteca que se enfoca en dibujar pequeños sprites y puede proporcionar mayor eficiencia de dibujo.

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
En el código de ejemplo anterior, cuando el programa sale de la función `loop()`, se llama a `spr.deleteSprite();` para eliminar el objeto TFT_eSprite y liberar el espacio de memoria. De esta manera, al crear un objeto TFT_eSprite en el siguiente bucle, se puede usar el espacio de memoria previamente liberado para evitar desperdiciar recursos de memoria.
:::

Para más información sobre las funciones de la biblioteca TFT y su uso, recomendamos leer los archivos **TFT_eSPI.h** y **TFT_eSPI.cpp** en la biblioteca.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:300, height:'auto'}}/></div>

### Acerca de las opciones de personalización de la biblioteca TFT

A veces necesitamos usar algunas bibliotecas de fuentes personalizadas o algunas características que no están habilitadas para ahorrar espacio. En este punto necesitaremos modificar el contenido del archivo **Setup66_Seeed_XIAO_Round.h**.

- La ruta predeterminada para este archivo en sistemas **Windows** es:

`C:\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

- La ruta predeterminada para este archivo en sistemas **MacOS** es:

`\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

Por favor activa o desactiva algunas funciones innecesarias según el uso real.
Por ejemplo, si quieres usar fuentes personalizadas, entonces deberías descomentar `#define SMOOTH_FONT`, de lo contrario, probablemente obtendrás errores al ejecutar.

Por supuesto, los archivos de encabezado de tus fuentes personalizadas deben guardarse en el mismo directorio que los archivos ino, lo cual es un paso necesario para evitar errores.

### Programa de muestra de esfera basado en TFT

Hemos escrito un programa de esfera para la Round Display que puede usarse directamente. Debido a la limitación del espacio de memoria de algunos modelos XIAO, este programa solo realiza la función básica de movimiento de manecillas y no está diseñado para otras funciones. Los usuarios pueden usar este programa para aprender el uso de la biblioteca TFT y la función de movimiento de punteros, y completar el desarrollo de esferas más complejas según la situación real.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
## Dibujando diales simples usando la biblioteca LVGL

La biblioteca LVGL es una biblioteca de gráficos embebidos de propósito general que ofrece un rico conjunto de controles de interfaz gráfica de usuario como botones, etiquetas, listas, etc. que se pueden usar para construir varias interfaces de usuario. A diferencia de la biblioteca TFT, la biblioteca LVGL proporciona una interfaz gráfica abstracta y orientada a objetos que es más fácil de usar y mantener, pero puede venir con algunas compensaciones de rendimiento y confiabilidad.

La biblioteca LVGL es una herramienta muy útil al construir interfaces de usuario complejas que reducen la carga de trabajo de escribir y mantener código. La biblioteca TFT, por otro lado, es más adecuada para algunas aplicaciones que requieren gráficos de alto rendimiento como procesamiento de imágenes en tiempo real, renderizado de video, etc.

### Interfaces Comunes para la Biblioteca LVGL

La API de la biblioteca LVGL es muy rica y compleja, y esperamos que todos los que usen LVGL se tomen el tiempo de leer la documentación oficial de introducción a LVGL.

- [Comenzar](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [Interfaz de pantalla](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [Interfaz de dispositivo de entrada](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [Interfaz de tick](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [Sistema operativo e interrupciones](https://docs.lvgl.io/latest/en/html/porting/os.html)

### Dibujando interfaces UI complejas con SquareLine Studio

Además de leer la extensa documentación oficial de LVGL y escribir nuestros propios programas gráficos LVGL, también podemos usar la herramienta oficial LVGL SquareLine Studio para mejorar nuestra eficiencia de desarrollo.

A continuación, te daremos una breve introducción al uso del software en la pantalla redonda, métodos de configuración, para ayudarte a comenzar rápidamente usando el software para diseñar algunas interfaces.

:::caution
Te recomendamos usar la versión **v1.5.1** de SquareLine Studio. Esta es también la versión de software más reciente al momento de escribir este Wiki.

Entorno usado en la preparación de este tutorial:

1. **[Biblioteca Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)** por Bodmer, modificada por Seeed Studio.

2. **[Biblioteca SeeedStudio_lvgl](https://github.com/Seeed-Projects/SeeedStudio_lvgl)** por kisvegabor, embeddedt, pete-pjb, modificada por Seeed Studio.
:::

#### Paso1. Descargar SuqareLine Studio

Puedes ir al sitio web oficial de SquareLine Studio haciendo clic [aquí](https://squareline.io/), luego haz clic en **TRY IT FOR FREE** para descargar el software a tu computadora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

Si tu computadora está usando este software por primera vez, entonces obtendrás una prueba gratuita de 30 días, si no, la versión gratuita también puede dibujar hasta 5 páginas, usando 50 widgets.

:::caution
Si eres un usuario por primera vez, ¡por favor no te registres para iniciar sesión en tu cuenta que no tiene saldo, podría costarte toda la prueba de 30 días!
:::

#### Paso2. Configurar información de interfaz de pantalla

A continuación, podemos abrir el software y comenzar creando una página de pantalla en blanco.

Dado que estamos usando programación Arduino, entonces lo que creamos también necesita ser un archivo Arduino.

Nuestra pantalla circular tiene una resolución de pantalla de **240*240** y soporta solo profundidad de color de **16bit**. Aparte de eso, el nombre y tema del proyecto necesitan ser definidos por ti, aquí usaré el estilo oscuro como tema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

¿Qué pasa si eres demasiado rápido, como yo, y olvidas configurar la forma del dial y crear el proyecto? No hay problema, en la esquina superior izquierda de la interfaz principal, también puedes encontrar la pestaña Project Settings para hacer cambios a las configuraciones que acabas de hacer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Ten en cuenta que por favor completa la configuración de tu proyecto antes de comenzar oficialmente a dibujar y asegúrate de que coincida con las especificaciones de nuestra pantalla, de lo contrario todo lo que dibujes puede no mostrarse correctamente en la pantalla.

No todo puede ser modificado después de que el proyecto ha sido creado, como el nombre del proyecto. Por favor no uses ningún idioma que no sea inglés o caracteres especiales en el nombre del proyecto, y por favor no uses el signo **"-"**, por favor reemplaza el signo **"-"** con **"_"**. ¡De lo contrario, el programa exportado puede tener errores durante la compilación!
:::

#### Paso3. Entendiendo el diseño funcional del software

Basado en mis hábitos de uso, he dividido la interfaz principal del software en aproximadamente las siguientes partes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **Panel de Jerarquía y Animación**: Esta área te permite configurar diferentes páginas de dial, capas de visualización y animaciones.

- **Widgets**: Aquí puedes elegir qué componentes usar para agregar en la página de visualización. Estos componentes están integrados con el software y pueden ser usados directamente. Los componentes que no están disponibles aquí necesitarán ser agregados más tarde en tu propio software de programación.

- **Área de Trabajo**: En el espacio de trabajo, puedes cambiar la posición de ciertos componentes arrastrándolos y soltándolos. Aún más convenientemente, la visualización final será consistente con lo que se muestra en el espacio de trabajo, así que lo que ves es lo que obtienes.

- **Assets & Console**: Assets muestra los clips de imagen que has agregado, y estos clips de imagen agregados pueden ser usados en los componentes que soportan insertar imágenes. Console te mostrará algunos mensajes de error (si los hay) que ocurrieron durante la configuración.

- **Área de Configuración**: El propósito principal aquí es configurar las propiedades del componente.

Primero tendremos un conocimiento general de la interfaz del software, y luego te llevaremos a través del entendimiento práctico del uso de cada parte.

#### Paso4. Usar software para realizar tus ideas

Supongamos que quiero dibujar una interfaz de música ahora. Por supuesto, me gusta demasiado escuchar música, así que quiero dibujar una interfaz de visualización de música como ejemplo.

Me gustaría tener los siguientes componentes en esta pantalla de visualización de música.

- Arte de portada del álbum de mi música favorita como fondo.
- Tener una barra de progreso de reproducción
- Tener una barra de control de volumen
- Tener un botón de reproducir y pausar

Después de ordenar nuestros requisitos, entonces necesitamos diseñar los componentes de visualización de abajo hacia arriba, como construir un edificio.

El primer paso es crear una imagen de fondo musical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

Selecciona **Panel** en los widgets, puedes hacer clic en él y será automáticamente colocado en el centro del dial, o puedes arrastrarlo a la posición del dial donde quieras colocarlo.

Pondremos la imagen mostrada en el Panel en lugar de directamente en el fondo del dial porque no me gusta que todo el dial sea esta imagen, y el Panel puede ser redimensionado libremente.

En este punto, puedes ver que ya hay una serie de propiedades en el Área de Configuración que podemos establecer. Las configuraciones para cada componente son generalmente similares, con una o dos opciones que pueden ser un poco diferentes.

> **Name**: Debes nombrar el widget. No puede haber un número, guión bajo o un carácter especial al comienzo del nombre. Habiendo exportado el código, puedes encontrar el widget por ese nombre.

> **Layout**: Puedes usar un layout para organizar automáticamente los hijos de un widget. Si el layout está habilitado, los valores X e Y de los hijos no pueden ser ajustados manualmente, a menos que la bandera `IGNORE_LAYOUT` o `FLOATING` esté habilitada en los hijos.

> **Main Flags**
>
> - **Hidden** - Hacer el objeto oculto. (Como si no estuviera allí en absoluto.)
> - **Clickable** - Hacer el objeto clickeable por dispositivos de entrada
> - **Click focusable** - Agregar estado enfocado al objeto cuando se hace clic
> - **Checkable** - Alternar estado marcado cuando se hace clic en el objeto
> - **Snappable** - Si el ajuste de desplazamiento está habilitado en el padre, puede ajustarse a este objeto
> - **Press lock** - Mantener el objeto presionado incluso si la presión se deslizó del objeto
> - **Event bubble** - Propagar los eventos al padre también
> - **Gesture bubble** - Propagar los eventos al padre también
> - **Adv hittest** - Permitir realizar pruebas de golpe (clic) más precisas. Por ejemplo, teniendo en cuenta las esquinas redondeadas
> - **Ignore layout** - Hacer el objeto posicionable por los layouts
> - **Floating** - No desplazar el objeto cuando el padre se desplaza e ignorar layout

> **Scroll Flags**
>
> - **Scrollable** - Hacer el objeto desplazable
> - **Scroll elastic** - Permitir desplazamiento interno pero con velocidad más lenta
> - **Scroll momentum** - Hacer que el objeto se desplace más cuando es "lanzado"
> - **Scroll one** - Permitir desplazamiento solo de un hijo ajustable
> - **Scroll chain** - Permitir propagar el desplazamiento a un padre
> - **Scroll on focus** - Desplazar automáticamente el objeto para hacerlo visible cuando está enfocado

>**Scroll Settings**
>
> - **Scroll direction** - Las barras de desplazamiento se muestran según una configuración
> - **Scrollbar mode** - Las barras de desplazamiento se muestran según un modo configurado. Existen los siguientes modos:
>   - **Off** - Nunca mostrar las barras de desplazamiento
>   - **On** - Siempre mostrar las barras de desplazamiento
>   - **Active** - Mostrar barras de desplazamiento mientras un objeto está siendo desplazado
>   - **Auto** - Mostrar barras de desplazamiento cuando el contenido es lo suficientemente grande para ser desplazado

> **States**: El objeto puede estar en una combinación de los siguientes estados:
>
> - **Clickable** - Estado alternado o marcado
> - **Disable** - Estado deshabilitado
> - **Focusable** - Enfocado vía teclado o codificador o clickeado vía touchpad/mouse
> - **Pressed** - Siendo presionado
> **Configuración de estilo**: Los estilos se pueden usar para agregar efectos a los widgets o sus partes. Puedes agregar un color de fondo personalizado, borde, sombra, etc. En Configuración de Estilo, puedes agregar o modificar los valores de estos parámetros.
>
> **Estado**: Puedes crear un estilo personalizado para cada estado.
>
> **Propiedades de Estilo**: Las Propiedades de Estilo son los parámetros que se deben configurar para los estilos.
>
> - **Arco**: El Estilo de Arco se puede usar en aquellos widgets que tienen el componente Arco.
>   - **Color de línea** - El color de la línea
>   - **Ancho del arco** - El ancho del arco
>   - **Arco redondeado** - Los extremos de la línea del arco están redondeados
>   - **Imagen del arco** - La imagen de fondo para la línea del arco
> - **Fondo**: El Estilo de Fondo es el fondo de los widgets. Puedes crear gradientes o hacer que las esquinas del fondo sean redondeadas.
>   - **Color y alfa** - Establece el color de fondo y alfa del objeto.
>   - **Color de gradiente** - Establece el color de gradiente del fondo.
>   - **Parada principal del fondo** - Establece el punto desde el cual debe comenzar el color de fondo para los gradientes.
>   - **Parada del gradiente del fondo** - Establece el punto desde el cual debe comenzar el color de gradiente del fondo
>   - **Radio del fondo** - El radio que usas para hacer que las esquinas del fondo sean redondeadas
>   - **Dirección del gradiente** - La dirección del gradiente. Puede ser horizontal o vertical.
>   - **Recortar esquina** - Habilita para recortar el contenido desbordado en la esquina redondeada.
> - **Imagen de Fondo**: Puedes establecer una imagen como imagen de fondo.
>   - **Imagen de fondo** - La imagen que usas como imagen de fondo
>   - **Opacidad de imagen de fondo** - La opacidad de la imagen de fondo
>   - **Recolorear** - Con la función Recolorear, puedes usar un color en la imagen de fondo. Establece la profundidad del color cambiando el parámetro alfa.
>   - **Imagen de fondo en mosaico** - Si está habilitado, la imagen de fondo se mostrará en mosaico
> - **Mezcla**: Al usar el Estilo de Mezcla, puedes mezclar los colores de píxeles de la parte actual del widget con los colores del objeto que le sigue.
>   - **Modo de mezcla** - Elige entre cuatro opciones.
>     - **Normal** - Estado predeterminado
>     - **Aditivo** - Sumando píxeles
>     - **Sustractivo** - Restar píxeles
>     - **Multiplicar** - Multiplicar píxeles
>   - **Opacidad de mezcla** - Aquí puedes establecer la opacidad de la parte del widget
> - **Borde**: Usando Borde, puedes dibujar un borde alrededor del objeto seleccionado en las líneas internas.
>   - **Color del borde** - El color del borde
>   - **Ancho del borde** - El ancho del borde
>   - **Lado del borde** - La dirección del borde
> - **Línea**: El Estilo de Línea se puede usar en aquellos widgets que tienen el componente Línea.
>   - **Color** - El color de la línea
>   - **Ancho** - El ancho de la línea
>   - **Línea redondeada** - Los extremos de la línea serán redondeados
> - **Contorno**: El estilo de Contorno es similar al estilo de Borde pero aquí dibujas el borde alrededor de la parte seleccionada del widget.
>   - **Color del contorno** - El color del contorno
>   - **Ancho del contorno** - El ancho del contorno
>   - **Relleno del contorno** - Distancia desde el lado del widget en píxeles
> - **Rellenos**: El estilo de Rellenos pone un relleno en la parte del widget. Significa que las partes debajo de él en la jerarquía se desplazarán por la distancia definida en el relleno con valores de píxeles.
>   - **Relleno** - La extensión del relleno
> - **Sombra**: Usando un Estilo de Sombra, puedes dibujar una sombra o un resplandor a la parte seleccionada del widget.
>   - **Color de sombra** - El color de la sombra
>   - **Ancho de sombra** - El ancho de la sombra
>   - **Extensión de sombra** - La profundidad de la sombra
>   - **Sombra OX** - Desplazar la sombra en el eje X
>   - **Sombra OY** - Desplazar la sombra en el eje Y
> - **Texto**: El Estilo de Texto define los parámetros del texto que se puede encontrar en el widget.
>   - **Color del texto** - El color del texto
>   - **Espaciado de letras** - El espacio entre las letras
Espaciado de líneas - El espacio entre las líneas
>   - **Alineación del texto** - La dirección de la alineación del texto
>   - **Decoración del texto** - Puedes sobrayar o subrayar el texto
>     - **Ninguno** - Texto normal
>     - **Entender** - Texto subrayado
>     - **Tachado** - Texto sobrayado
>     - **Fuente del texto** - La fuente del texto
>
> **Propiedades de Evento**: Agregando eventos, puedes crear diferentes interacciones a los widgets, por ejemplo cambiar la pantalla, reproducir una animación, etc. presionando un botón.
>
> - **Agregar Evento**: En la parte inferior del Panel Inspector, puedes encontrar el botón AGREGAR EVENTO. Primero, debes nombrar el evento, luego elegir un disparador para iniciarlo.
>   - **Nombre del evento** - El nombre del evento
>   - **Disparador del evento** - La interacción de inicio del evento
>     - **Presionado** - Un objeto ha sido presionado
>     - **Clic** - Un objeto fue presionado por un corto período de tiempo, luego liberado. No se llama si se desplaza
>     - **Presión larga** - Un objeto ha sido presionado por un período de tiempo más largo
>     - **Repetición de presión larga** - Llamado después de `long_press_time` en cada `long_press_repeat_time` ms. No se llama si se desplaza
>     - **Enfocado** - Un objeto está enfocado
>     - **Desenfocado** - Un objeto está desenfocado
>     - **Valor cambiado** - El valor del objeto ha sido cambiado.
>     - **Listo** - Un proceso ha terminado
>     - **Cancelar** - Un proceso ha sido cancelado
>     - **Pantalla cargada** - Una pantalla fue cargada, llamado cuando todas las animaciones han terminado
>     - **Pantalla descargada** - Una pantalla fue descargada, llamado cuando todas las animaciones han terminado
>     - **Inicio de carga de pantalla** - Una carga de pantalla comenzó, disparado cuando el retraso de cambio de pantalla ha expirado
>     - **Inicio de descarga de pantalla** - Una descarga de pantalla comenzó, disparado inmediatamente cuando se llama lv_scr_load/lv_scr_load_anim
>       - **Marcado** - Un widget marcado
>       - **Desmarcado** - Un widget desmarcado
>       - **Gesto** - Dirección de deslizamiento del toque con el dedo
> - **Agregar Evento**
>   - **Acciones**: Las acciones son aquellos elementos del evento, que se inician cuando ocurre el disparador.
>     - **Llamar función**: Usando la acción Llamar función, puedes agregar un nombre de función al que el evento puede referirse. Esta función se creará en el archivo ui__events.c o ui_events.py durante el proceso de exportación.
>     - **Cambiar Pantalla**: Puedes cambiar entre pantallas con esta acción.
>       - **Pantalla a** - La pantalla a la que te gustaría cambiar
>       - **Modo de desvanecimiento** - La animación durante el cambio de pantalla
>       - **Velocidad** - La velocidad de cambio de pantalla
>       - **Retraso** - El retraso del cambio de pantalla
>     - **Incrementar Arco**: Puedes modificar el valor del Widget Arco.
>     - **Incrementar Barra**: Puedes modificar el valor del Widget Barra.
>     - **Incrementar Deslizador**: Puedes modificar el valor del Widget Deslizador.
>     - **Modificar Bandera**: Puedes modificar el estado de bandera de un widget.
>     - **Reproducir Animación**: Puedes reproducir las animaciones creadas en el Panel de Animación.
>       - **Animación** - La animación seleccionada
>       - **Objetivo** - Widget objetivo en el que te gustaría usar la animación
>       - **Retraso** - El tiempo de retraso de la animación
>     - **Establecer Opacidad**: La opacidad del widget seleccionado.
>     - **Establecer Bandera**: Establece el valor para el estado de bandera del widget.
>     - **Establecer Propiedad**: Cambia el valor de propiedad del widget.
>     - **Establecer valor de texto desde arco**: Muestra el valor del Widget Arco en un Widget Etiqueta usando esta acción.
>     - **Establecer valor de texto desde deslizador**: Muestra el valor del Widget Deslizador en un Widget Etiqueta usando esta acción.
>     - **Establecer valor de texto cuando está marcado**: Cambia el texto de un Widget Etiqueta dependiendo del estado marcado o desmarcado del objeto objetivo.

##### Uso del Panel

Para resumir, si necesito mostrar la imagen del álbum en la mitad superior del dial, entonces necesito ajustar las coordenadas y el tamaño del Panel y establecer la imagen de fondo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
Para ocupar la menor memoria posible en la placa madre, por favor inserta la imagen tanto como sea posible a la resolución del dial para comprimir, ¡no dejes ir la imagen grande!
:::

Luego podemos establecer la transparencia de la imagen en **Bg Image opa**. No quiero que sea completamente opaca porque una imagen completamente opaca afectará la visualización de mi texto posteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

Vale la pena señalar aquí que todos los componentes tienen líneas de marco por defecto, por lo que para no afectar la estética, necesitamos eliminar las líneas de marco. La forma de hacer esto es establecer la transparencia del color del Borde a 0.

Entonces, **si quieres eliminar cualquier color o cualquier segmento de línea, puedes hacerlo estableciendo la transparencia a 0**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### Uso de Etiqueta

Luego, agregamos texto en el medio (usar widgets **Label**), que muestra el artista y el nombre de la canción. En el estilo, podemos cambiar el tamaño de fuente, color y otro contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Uso de Imgbutton

Bajo el texto, agregamos algunos componentes de reproducción (usar widgets **Imgbutton**), como botón de reproducir/pausar y botón de alternar pista arriba/abajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbutton es un tipo especial de botón, la mayor diferencia entre él y el Botón normal es que Imgbutton puede configurarse con tres estados de estilo antes de presionar el botón, al presionar y después de liberar el botón respectivamente. Este proceso es muy similar al escenario donde presionamos para cambiar el estado de reproducción. Si piensas que el botón arriba/abajo no necesita una función tan complicada, también puedes usar el Botón directamente.

Luego ahora establecemos las imágenes de los botones Presionar y Liberar al estilo de reproducción, y solo en el estado Deshabilitado está el estilo de pausa.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

Luego agregamos un evento, la función de este evento es que cuando el usuario presiona el botón, entonces el estado cambia a Disable, de modo que se logra el efecto del cambio de imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

Si quieres verificar el efecto, puedes hacer clic en el botón de reproducción en la parte superior derecha del espacio de trabajo, y luego puedes hacer clic en el botón de reproducción para ver el efecto del cambio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Uso de Arc

Luego agregamos el último componente, que es la barra de volumen y la barra de progreso de reproducción. Haremos esto usando Arc.

Para Arc, las principales cosas que necesitamos ajustar son el color y el tamaño de los anillos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- MAIN: Esto se refiere al diseño de estilo del fondo rectangular detrás de todo el Arc. El **Arc** configurado en el estilo MAIN no es indicativo del estilo del área del arco.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- INDICATOR: Se refiere a la configuración de estilo del arco del área de indicación inicial. Generalmente se usa la configuración **Arc** bajo INDICATOR.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- KNOB: Esto se refiere a la configuración de este círculo en la imagen. Si no necesitas este círculo, puedes establecer su transparencia en 0. El tamaño de este círculo, necesitas configurarlo dentro del Arc en INDICATOR.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

Este es el efecto que quiero lograr.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

Si has marcado que es clickeable, entonces puedes hacer clic en el botón Run y arrastrar el arco, entonces puedes lograr el efecto de cambiar la barra de volumen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### Cambio de Pantalla

Con la interfaz de música casi diseñada, podríamos agregar una nueva interfaz principal a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

Luego diseña un evento que cambie la pantalla principal a la pantalla de música. Por ejemplo, aquí lo diseño para cambiar a la interfaz de reproducción de música deslizando mi dedo hacia la derecha bajo la interfaz principal.

Dado que la interfaz principal es el personaje principal, este evento debe agregarse a la interfaz principal bajo Screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

Si quieres tener un efecto de animación que cambie lentamente después de un deslizamiento, entonces Speed puedes mantenerlo en 500, si quieres cambiar inmediatamente, entonces Speed debe establecerse en 0.

##### Animación de Puntero

De vuelta al diseño de la interfaz principal, queremos agregar el efecto de animación de rotación de la manecilla del dial.

Lo primero que hay que hacer es que necesitas dibujar tus propias manecillas de segundos, minutos y horas. Luego agrégala al dial principal en el estilo de **Image**.

El ajuste de posición del puntero requiere paciencia, ya que necesitamos asegurarnos de que el puntero esté rotando alrededor de un punto fijo en la imagen.

Transform se establece para la colocación de la imagen. El Pivot en la pestaña Image de abajo establece las coordenadas del punto de rotación. La forma general de establecer esto es primero ajustar el Transform para asegurarse de que el punto fijo del puntero esté en el centro del dial, y luego ajustar las coordenadas del Pivot un poco. Cuando todos los ángulos puedan hacer que el punto fijo del puntero no se mueva, entonces estos parámetros son los más adecuados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

Una vez que tengas todas las posiciones de los punteros determinadas, puedes comenzar a agregar nuevos efectos de animación. La configuración de efectos de animación para diferentes punteros se puede encontrar en la siguiente figura.

<table align="center">
 <tr>
     <th>Segundo</th>
     <th>Minuto </th>
        <th>Hora</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/25.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/26.png" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/27.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>

Finalmente, solo establecemos la animación del movimiento del puntero para que se reproduzca mientras se carga la pantalla principal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
Los tutoriales anteriores han cubierto básicamente el 80% de los escenarios de uso del software, y muchos de los otros componentes son muy similares. Finalmente, aquí tienes algunos consejos y sugerencias para cuando uses el software.

1. Necesitas colocar todos los componentes con funcionalidad táctil en la parte superior, de lo contrario interferirá con la implementación de la funcionalidad táctil del componente.

    Por defecto, el último componente colocado por el software está en la parte superior. Esto significa que en la pestaña Hierarchy, los componentes que están organizados uno al lado del otro tienden a estar en la parte superior. En la interfaz de música que acabas de diseñar, la capa superior es el Arc para ajustar el tamaño del sonido, lo que causa un problema porque el Arc es un rectángulo que ocupa todo el dial y afectará el toque del botón de reproducción, por lo que normalmente necesitas ajustar la capa del botón de reproducción a la parte superior de la capa Arc para que no afecte el toque.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. Desactiva tantas características innecesarias como sea posible para ahorrar más memoria.

    Cada componente tendrá algunos Flags marcados por defecto, pero no todos son requeridos. Aunque los predeterminados no serán un problema, desactivar los Flags no deseados hará que tu interfaz de dial funcione más suavemente.

    Como el álbum de fondo en la interfaz de música, no hay necesidad de hacer clic y no hay animación, y es bueno desactivar la opción en Flags. Pero cerrar también necesita considerar la situación real, por ejemplo, en la escena de deslizar para cambiar la página del dial, cerrar la función de algunos Flags hará que el deslizamiento se desactive, por lo que aún necesita ejecutarse según el efecto de discreción para cerrar.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. Asegúrate de dar un nombre único a todos tus componentes y animaciones, eventos, etc.

    El software solo puede ahorrarte el tiempo de dibujar algunos patrones y animaciones, pero efectos más complejos pueden requerir que los programes más tarde para lograrlos. Entonces es importante poder encontrar rápidamente dónde están ubicados tus componentes en el código. ¡Nombrar componentes, eventos y animaciones es clave!

:::

#### Paso 5. Exportación y aplicación de programas

Una vez que tu interfaz de dial esté dibujada, puedes considerar exportar la interfaz a un programa y subirlo a XIAO a través de Arduino. Haz clic en la esquina superior izquierda del software y haz clic en **Export** -> **Create Template Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

Luego selecciona la ruta para guardar y el código se exportará automáticamente. La plantilla de proyecto exportada tendrá los siguientes archivos en ella.

- **libraries**: Este directorio de carpeta proporciona todas las librerías que necesitas usar en tu proyecto. Para nuestro tutorial, las librerías *lvgl* y *TFT_eSPI* en este directorio **no son necesarias**, pero la *ui* y *lv_conf.h* son **útiles** para nosotros.
- **ui**: Dentro está el programa del proyecto para Arduino, el archivo .ino.
- REANME.md

Lo que necesitamos hacer, entonces, es primero poner las librerías requeridas y los archivos de configuración en la carpeta de librerías de Arduino. Luego modificar el archivo .ino para asegurarse de que la funcionalidad funcione.

Por favor copia la carpeta **ui** y el archivo **lv_conf.h** del directorio de la carpeta libraries exportado por SquareLine Studio al directorio raíz de tu librería de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/101.png" style={{width:1000, height:'auto'}}/></div>

Luego, podemos abrir el archivo .ino directamente bajo la carpeta ui. Entonces, necesitamos hacer cambios a los siguientes archivos para asegurar que el programa compile sin problemas.

- **ui.ino**:

<table align="center">
 <tr>
  <th>Descripciones</th>
     <th>Captura de pantalla</th>
     <th>Segmento de Código</th>
 </tr>
 <tr>
  <th>Definiendo la librería TFT a usar e importando la librería de pantalla redonda</th>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/102.png" style={{width:600, height:'auto'}}/></div></td>  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L1" target="_blank"><b>Ver Código de Ejemplo</b></a></td>
 </tr>
    <tr>
  <th>Comentar definiciones duplicadas de la clase tft</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/103.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L20" target="_blank"><b>Ver Código de Ejemplo</b></a></td>
 </tr>
 <tr>
  <th>Reescribir funciones táctiles</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/104.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L46" target="_blank"><b>Ver Código de Ejemplo</b></a></td>
 </tr>
 <tr>
  <th>Agregar función de inicialización de pantalla y función de inicialización táctil</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/105.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L86" target="_blank"><b>Ver Código de Ejemplo</b></a></td>
 </tr>
 <tr>
  <th>Rotación de pantalla</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/106.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L94" target="_blank"><b>Ver Código de Ejemplo</b></a></td>
 </tr>
</table>

Luego puedes elegir qué XIAO usas para compilar y cargar.

### Acerca de las opciones de personalización de la biblioteca LVGL

Si encuentras un mensaje de error de que algunos componentes no están definidos después de compilar, entonces muy probablemente no reemplazaste el archivo **lv_conf.h** en el directorio raíz de la biblioteca Arduino con el archivo **lv_conf.h** exportado por SquareLine Studio.

Para ahorrar memoria en la placa madre, el archivo lv_conf.h por defecto deshabilita algunas de las características de lvgl. Pero si usas estas funciones en tu dibujo de esfera, necesitas activarlas manualmente.

- La ruta predeterminada para el `lv_conf.h` en sistemas **Windows** es:

`C:\Users\{UserName}\Documents\Arduino\libraries`

- La ruta predeterminada para el `lv_conf.h` en sistemas **MacOS** es:

`\Users\{UserName}\Documents\Arduino\libraries`

Como ejemplo simple, en el ejemplo anterior, usamos la fuente `MONTSERRAT 8`, pero por defecto esta fuente está desactivada, por lo que puede haber un error durante el proceso de compilación.

Entonces todo lo que necesitamos hacer es cambiar el 0 después de esta fuente en el archivo lv_conf.h a 1, lo que significa que la fuente está habilitada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

Si encuentras un error similar, puedes verificar nuevamente que la característica de personalización esté habilitada.

### Programa de esfera basado en LVGL

Hemos creado dos estilos de esfera para la pantalla circular como referencia para los usuarios. Debido a la lógica compleja de la interfaz de usuario, esto requerirá una cierta cantidad de rendimiento y memoria en la placa madre XIAO. Si tu XIAO está compilando el siguiente programa de esfera con error de memoria insuficiente, entonces puede que necesites actualizar tu XIAO o reducir la funcionalidad de las esferas.

- Estilo de Esfera I:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/ui" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<!-- - Dial Style II:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div> -->

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
