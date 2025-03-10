---
description: Using LVGL and TFT on the Seeed Studio Round Display for XIAO
title: Usando LVGL y TFT para toda la serie XIAO
keywords:
- XIAO
- Round Dislay
- lvgl
- draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/using_lvgl_and_tft_on_round_display
last_update:
  date: 02/14/2025
  author: Guillermo
---

# Usando LVGL y TFT en la pantalla redonda de Seeed Studio para toda la serie XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br></br>


Gracias por comprar productos Seeed Studio Round Display. En esta sección del tutorial, nos enfocaremos en cómo utilizar las bibliotecas `TFT_eSPI` y `LVGL` para dibujar diversos y atractivos diseños de esfera en la Round Display. Además, introduciremos el uso de algunas funciones comunes de estas dos bibliotecas, que aunque son útiles, pueden ser complejas, explicándolas desde lo más básico hasta conceptos más avanzados. A través del contenido de este tutorial, espero que puedas utilizar este producto para dibujar la esfera de reloj ideal. ¡Que tengas una excelente experiencia de aprendizaje!

## Introducción  

Antes de comenzar, es importante que cuentes con lo siguiente.  

### Preparación de Hardware  

Para fines de demostración, este tutorial utilizará la **XIAO ESP32S3** como control principal.

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html"> 
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Si deseas utilizar otros productos XIAO, los tutoriales y métodos en este artículo también son aplicables.

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Al instalar la XIAO con la Round Display, asegúrate de que el conector Type-C de la XIAO esté orientado hacia el exterior de la Round Display y luego conecta cada pin alineándolo con los encabezados duales de 7 pines.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### Preparación de Software  

Esta parte se ha descrito en detalle en la [Wiki Básica](https://wiki.seeedstudio.com/get_start_round_display#software-preparation), por lo que puedes ir directamente a leerla.  

## Dibujando esferas simples con la biblioteca TFT_eSPI  

TFT_eSPI es una biblioteca gráfica y de fuentes compatible con el IDE de Arduino para procesadores de 32 bits. La biblioteca TFT proporcionada por la XIAO Round Display se basa en esta biblioteca, adaptada para la compatibilidad con XIAO y XIAO Round Display, y admite el uso en toda la serie XIAO.  

### Interfaces comunes de la biblioteca TFT  

#### 1. Crear objetos TFT

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // Establezca el tamaño de la pantalla en el momento de la creación de objetos
```

#### 2. Inicialización

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```

`tft.begin()` y `tft.init()` son dos funciones que hacen lo mismo.

#### 3. Limpiar la pantalla  

```c
void fillScreen(uint32_t color) // Llena la pantalla con un cierto color
```

#### 4. Configuración de la orientación de la pantalla  

```c
void setRotation(uint8_t r);      // Establece la dirección de rotación de la imagen en la pantalla. r puede ser 0, 1, 2 o 3.
uint8_t getRotation(void)         // Lee el ángulo de rotación actual
```

Los valores 0, 1, 2 y 3 representan 0°, 90°, 180° y 270°, respectivamente. El valor 4 genera una imagen reflejada.  

#### 5. Conversión de colores  

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // Convierte rojo, verde y azul de 8 bits a 16 bits
uint16_t color8to16(uint8_t color332)                          // Convierte un color de 8 bits a 16 bits
uint8_t  color16to8(uint16_t color565)                         // Convierte un color de 16 bits a 8 bits
uint32_t color16to24(uint16_t color565)                        // Convierte un color de 16 bits a 24 bits
uint32_t color24to16(uint32_t color888)                        // Convierte un color de 24 bits a 16 bits
```

#### 6. Inversión de colores  

```c
void invertDisplay(bool i)      // i = true invierte los colores de la pantalla, i = false los mantiene normales
```

#### 7. Configuración de texto  

```c
/* Cursor */
void setCursor(int16_t x, int16_t y)                     // Establece el cursor para tft.print()
void setCursor(int16_t x, int16_t y, uint8_t font)       // Establece el cursor y el tamaño de fuente de tft.print()
int16_t getCursorX(void)                                 // Obtiene la posición x actual del cursor (se mueve con tft.print())
int16_t getCursorY(void)                                 // Obtiene la posición y actual del cursor

/* Color de fuente */
void setTextColor(uint16_t color)                        // Establece solo el color del texto
void setTextColor(uint16_t fgcolor, uint16_t bgcolor, bool bgfill = false)   // Establece los colores de texto y fondo

/* Tamaño de fuente */
void setTextSize(uint8_t size)                           // Ajusta el tamaño del texto multiplicándolo
void setTextWrap(bool wrapX, bool wrapY = false)         // Activa/desactiva el ajuste automático del texto dentro del ancho y/o alto de la pantalla

/* Posición de referencia del texto */
void setTextDatum(uint8_t datum)                         // Establece la posición de referencia del texto (por defecto es la esquina superior izquierda)
uint8_t getTextDatum(void)                               // Obtiene la posición de referencia del texto

/* Fondo de texto (útil para limpiar un área específica de la pantalla) */
void setTextPadding(uint16_t x_width)                    // Define el ancho del fondo de texto en píxeles
uint16_t getTextPadding(void)                            // Obtiene el ancho del fondo de texto
```

Como se observa en las funciones anteriores, para imprimir texto en la pantalla, simplemente se puede usar la función `tft.print()`.  

#### 8. Dibujo de formas simples  

Se pueden dibujar formas simples como puntos, líneas, rectángulos y círculos usando las siguientes funciones:  

```c
drawPixel(int32_t x, int32_t y, uint32_t color)    // Dibuja un píxel en una posición específica

drawLine(int32_t xs, int32_t ys, int32_t xe, int32_t ye, uint32_t color)  // Dibuja una línea

drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)   // Dibuja un rectángulo
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)  // Dibuja un rectángulo relleno

drawCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Dibuja un círculo
fillCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Dibuja un círculo relleno

drawEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Dibuja una elipse
fillEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Dibuja una elipse rellena

drawTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Dibuja un triángulo
fillTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Dibuja un triángulo relleno
```

#### 9. Dibujo de formas complejas  

La biblioteca TFT también proporciona métodos para dibujar formas más avanzadas, como rectángulos redondeados, arcos suavizados y líneas gruesas.

```c
/** 
    Dibuja un píxel mezclado con el color de fondo especificado (bg_color) y devuelve el color resultante. 
    Si no se especifica bg_color, el color de fondo se obtiene de la pantalla o el sprite.
**/
drawPixel(int32_t x, int32_t y, uint32_t color, uint8_t alpha, uint32_t bg_color)

/** 
    Dibuja un pequeño círculo anti-alias en ax, ay con radio r (usa drawWideLine).
    Si no se incluye bg_color, el color de fondo se obtiene de la pantalla o el sprite.
**/
drawSpot(float ax, float ay, float r, uint32_t fg_color, uint32_t bg_color)


drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color)  // Dibuja líneas verticales
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color)  // Dibuja líneas horizontales
drawWideLine(float ax, float ay, float bx, float by, float wd, uint32_t fg_color, uint32_t bg_color)  // Dibuja una línea gruesa
drawWedgeLine(float ax, float ay, float bx, float by, float aw, float bw, uint32_t fg_color, uint32_t bg_color);  // Dibuja una línea en forma de cuña. aw y bw representan el ancho inicial y final respectivamente.


/**
    Dibuja un arco sin anti-alias en los extremos, lo que facilita los cambios dinámicos de longitud del arco y garantiza uniones limpias.
    Los lados del arco son anti-alias por defecto. Si smoothArc es false, los lados no serán suavizados.
**/
drawArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool smoothArc);

/**
    Dibuja un arco suavizado entre los ángulos de inicio y fin. Los extremos del arco son anti-alias por defecto.
    Se pueden dibujar extremos redondeados usando el parámetro "roundEnds".
    El ángulo 0 está en la posición de las 6 en punto, 90° en las 9 en punto, etc.
    Los ángulos deben estar en el rango 0-360.
**/
drawSmoothArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool roundEnds);

/**
    Dibuja un círculo suavizado y relleno en x, y con radio r.
    Para reducir el efecto visual de trenzado en líneas estrechas, el grosor de la línea es de 3 píxeles.
**/
drawSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t fg_color, uint32_t bg_color)

/**
    Dibuja un círculo suavizado y relleno en x, y con radio r.
    Si no se incluye bg_color, el color de fondo se obtiene de la pantalla o el sprite.
**/
fillSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t color, uint32_t bg_color)


/**
    Dibuja un rectángulo redondeado con grosor de línea definido por r-ir+1.
    Las esquinas interiores y exteriores son anti-alias.
**/
drawSmoothRoundRect(int32_t x, int32_t y, int32_t r, int32_t ir, int32_t w, int32_t h, uint32_t fg_color, uint32_t bg_color, uint8_t quadrants)

/**
    Dibuja un rectángulo redondeado relleno con radio r.
**/
fillSmoothRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t radius, uint32_t color, uint32_t bg_color)
```

#### 10. Variables y texto

Además de simplemente mostrar una cadena específica, a veces necesitamos mostrar algunas variables en la pantalla, como el tiempo y los valores de los sensores, etc. Dependiendo del tipo de variable, puedes elegir usar las siguientes funciones:

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Dibuja un número entero usando el número de fuente especificado. Si no se establece una fuente (el último parámetro, la fuente predeterminada)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Dibuja un número flotante usando el número de fuente especificado. Si no se establece una fuente (el último parámetro, la fuente predeterminada)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Dibuja una cadena de texto usando el número de fuente especificado. Si no se establece una fuente (el último parámetro, la fuente predeterminada)
```

#### 11. Procesamiento de imágenes

Para usar la función `pushImage()` y mostrar una imagen en pantalla con la biblioteca TFT, puedes seguir estos pasos:

- Convierte el archivo de imagen a un formato de arreglo C/C++ que Arduino pueda reconocer. Puedes usar herramientas en línea como **Image2CPP** para convertir una imagen de mapa de bits a un formato de arreglo.

- Incluye el archivo del arreglo de imagen generado en tu programa de Arduino.

- Inicializa la biblioteca TFT y la pantalla, establece la resolución de la pantalla y el modo de color.

- Usa la función `tft.pushImage(x, y, width, height, data)` para enviar los datos de la imagen a la pantalla, donde `x` e `y` son las coordenadas de la esquina superior izquierda de la imagen, `width` y `height` son el ancho y alto de la imagen, y `data` es el arreglo de la imagen.

```c
// Arreglo de datos de la imagen
const unsigned char image_data[] PROGMEM = {
  // Inserta aquí los datos del arreglo C/C++ convertidos de la imagen
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. Clase TFT_eSprite

`TFT_eSprite` y `TFT_eSPI` son ambas bibliotecas de Arduino para pantallas LCD TFT, pero tienen diferentes funciones y propósitos de diseño.

TFT_eSPI es una biblioteca potente con muchas características avanzadas y opciones de configuración que permiten lograr varios efectos de visualización. Es compatible con múltiples chips y controladores de pantallas, y puede usarse en varias plataformas de hardware de Arduino. Utiliza la interfaz SPI y código altamente optimizado para lograr altas tasas de refresco y un bajo consumo de memoria. La biblioteca TFT_eSPI se puede usar en diversas aplicaciones, como juegos, gráficos e interfaces gráficas (GUI).

TFT_eSprite es un complemento de la biblioteca TFT_eSPI y se usa principalmente para dibujar pequeños sprites en la pantalla, como personajes de juegos, íconos, texto, etc. TFT_eSprite puede lograr velocidades de dibujo más rápidas porque almacena en caché las imágenes en memoria y realiza actualizaciones parciales. Esto permite tasas de refresco más rápidas al actualizar pequeños sprites y puede ahorrar tiempo de procesamiento y espacio en memoria.

Por lo tanto, TFT_eSPI es una biblioteca potente y versátil adecuada para múltiples aplicaciones, mientras que TFT_eSprite es una biblioteca enfocada en el dibujo de pequeños sprites y puede ofrecer mayor eficiencia en la representación gráfica.

El formato general para usar la biblioteca TFT_eSPI es el siguiente:

```c
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    // Escribe el código para dibujar el gráfico
}
```

The general format for using the TFT_eSprite library is as follows.

```c
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    spr.createSprite(128, 128);  // Crear un sprite de 128*128 tamaño

    // Escribe el código para dibujar el gráfico

    spr.pushSprite(0, 0);  // Colocación del sprite dibujado
    spr.deleteSprite();
}
```

:::note
En el código de ejemplo anterior, cuando el programa sale de la función `loop()`, se llama a `spr.deleteSprite();` para eliminar el objeto TFT_eSprite y liberar el espacio de memoria. De esta manera, al crear un nuevo objeto TFT_eSprite en el siguiente ciclo, el espacio de memoria previamente liberado puede ser reutilizado para evitar el desperdicio de recursos de memoria.
:::

Para más información sobre las funciones de la biblioteca TFT y su uso, se recomienda leer los archivos **TFT_eSPI.h** y **TFT_eSPI.cpp** en la biblioteca.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:400, height:'auto'}}/></div>

### Sobre las opciones de personalización de la biblioteca TFT

A veces necesitamos usar algunas bibliotecas de fuentes personalizadas o activar funciones que no están habilitadas para ahorrar espacio. En este caso, necesitaremos modificar el contenido del archivo **Setup66_Seeed_XIAO_RoundDisplay.h**.

- La ruta predeterminada para este archivo en sistemas **Windows** es: 

`C:\Users\{NombreDeUsuario}\Documents\Arduino\libraries\TFT_eSPI\User_Setups\Setup66_Seeed_XIAO_RoundDisplay.h`

- La ruta predeterminada para este archivo en sistemas **MacOS** es: 

`\Users\{NombreDeUsuario}\Documents\Arduino\libraries\TFT_eSPI\User_Setups\Setup66_Seeed_XIAO_RoundDisplay.h`

Por favor, activa o desactiva algunas funciones innecesarias según el uso real.  
Por ejemplo, si deseas usar fuentes personalizadas, deberías descomentar `#define SMOOTH_FONT`, de lo contrario, probablemente obtendrás errores al ejecutar el programa.

Por supuesto, los archivos de cabecera de tus fuentes personalizadas deben guardarse en el mismo directorio que los archivos `.ino`, lo cual es un paso necesario para evitar errores.

### Programa de ejemplo basado en TFT para un dial

Hemos escrito un programa de dial para la pantalla redonda que se puede usar directamente. Debido a la limitación de espacio en memoria de algunos modelos de XIAO, este programa solo realiza la función básica de movimiento de manecillas y no está diseñado para otras funciones. Los usuarios pueden usar este programa para aprender el uso de la biblioteca TFT y la función de movimiento del puntero, y completar el desarrollo de diales más complejos según la situación real.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el codigo</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## Dibujando diales simples utilizando la biblioteca LVGL

La biblioteca LVGL es una biblioteca gráfica de propósito general para sistemas embebidos que ofrece un conjunto rico de controles de interfaz gráfica de usuario como botones, etiquetas, listas, etc., que se pueden usar para construir diversas interfaces de usuario. A diferencia de la biblioteca TFT, la biblioteca LVGL proporciona una interfaz gráfica abstracta y orientada a objetos que es más fácil de usar y mantener, pero puede tener algunos compromisos en cuanto a rendimiento y fiabilidad.

La biblioteca LVGL es una herramienta muy útil cuando se construyen interfaces de usuario complejas que reducen la carga de trabajo de escribir y mantener código. Por otro lado, la biblioteca TFT es más adecuada para algunas aplicaciones que requieren gráficos de alto rendimiento, como el procesamiento de imágenes en tiempo real, la renderización de videos, etc.

### Interfaces comunes para la biblioteca LVGL

La API de la biblioteca LVGL es muy rica y compleja, y esperamos que todos los que usen LVGL se tomen el tiempo para leer la documentación oficial de introducción a LVGL.

- [Comenzar](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [Interfaz de pantalla](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [Interfaz de dispositivo de entrada](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [Interfaz de tick](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [Sistema operativo e interrupciones](https://docs.lvgl.io/latest/en/html/porting/os.html)

### Dibujando interfaces de usuario complejas con SquareLine Studio

Además de leer la extensa documentación oficial de LVGL y escribir nuestros propios programas gráficos con LVGL, también podemos utilizar la herramienta oficial LVGL SquareLine Studio para mejorar nuestra eficiencia en el desarrollo.

A continuación, te daremos una breve introducción al uso del software en la pantalla redonda y los métodos de configuración, para ayudarte a comenzar rápidamente a usar el software para diseñar algunas interfaces.

:::caution
Te recomendamos que uses la versión **v1.2.3** de SquareLine Studio. Después de realizar pruebas, la versión v1.3.0 puede tener problemas de compatibilidad con la biblioteca tft_eSPI.

El entorno utilizado en la preparación de este tutorial es el siguiente:

1. **[Biblioteca TFT_eSPI](https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/main/libraries/TFT_eSPI.zip)** de Bodmer, versión: **2.5.22**

2. **[Biblioteca LVGL](https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/libraries/lvgl)** de kisvegabor, embeddedt, pete-pjb, versión: **8.2.0**

:::

#### Paso 1. Descargar SquareLine Studio

Puedes ir al sitio web oficial de SquareLine Studio haciendo clic [aquí](https://squareline.io/), luego haz clic en **TRY IT FOR FREE** para descargar el software a tu computadora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

Si es la primera vez que usas este software en tu computadora, obtendrás una prueba gratuita de 30 días. Si no es así, la versión gratuita también te permite dibujar hasta 5 páginas, utilizando 50 widgets.

:::caution
Si eres un usuario nuevo, por favor no te registres para iniciar sesión en tu cuenta sin saldo, ¡podría costarte el período completo de prueba de 30 días!
:::

#### Paso 2. Configurar la información de la interfaz de la pantalla

A continuación, podemos abrir el software y comenzar creando una página de pantalla en blanco.

Como estamos utilizando programación con Arduino, lo que creemos también debe ser un archivo de Arduino.

Nuestra pantalla circular tiene una resolución de **240*240** y solo soporta **profundidad de color de 16 bits**. Aparte de eso, es necesario definir el nombre y el tema del proyecto. En este caso, utilizaré el estilo oscuro como tema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

¿Qué pasa si eres demasiado rápido, como yo, y olvidas establecer la forma del dial antes de crear el proyecto? No hay problema, en la esquina superior izquierda de la interfaz principal, también puedes encontrar la pestaña de Configuración del Proyecto para realizar los cambios en la configuración que acabas de hacer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Ten en cuenta que debes completar la configuración de tu proyecto antes de comenzar a dibujar oficialmente y asegurarte de que coincida con las especificaciones de nuestra pantalla. De lo contrario, todo lo que dibujes puede no mostrarse correctamente en la pantalla.

No todo se puede modificar después de haber creado el proyecto, como el nombre del proyecto. Por favor, no uses ningún idioma que no sea inglés ni caracteres especiales en el nombre del proyecto, y evita utilizar el signo **"-"**. En su lugar, reemplázalo por **"_"**. ¡De lo contrario, el programa exportado podría tener errores durante la compilación!
:::

#### Paso 3. Entendiendo el diseño funcional del software

Según mis hábitos de uso, he dividido la interfaz principal del software en las siguientes partes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **Panel de Jerarquía y Animación**: Esta área te permite configurar diferentes páginas del dial, capas de visualización y animaciones.

- **Widgets (Componentes)**: Aquí puedes elegir qué componentes utilizar para agregar a la página de visualización. Estos componentes están integrados con el software y se pueden usar directamente. Los componentes que no están disponibles aquí necesitarán ser agregados más tarde en tu propio software de programación.

- **Área de Trabajo**: En el espacio de trabajo, puedes cambiar la posición de ciertos componentes arrastrándolos y soltándolos. Aún más conveniente, la visualización final será consistente con lo que se muestra en el espacio de trabajo, por lo que lo que ves es lo que obtienes.

- **Activos y Consola**: En Activos se muestran los clips de imagen que has agregado, y estos clips de imagen pueden usarse en los componentes que admiten la inserción de imágenes. La Consola te mostrará los mensajes de error (si los hay) que ocurrieron mientras configurabas.

- **Área de Configuración**: El propósito principal aquí es configurar las propiedades de los componentes.

Primero, tendremos un conocimiento general de la interfaz del software y luego te guiaremos a través del uso práctico de cada parte.

#### Paso 4. Usar el software para realizar tus ideas

Supongamos que ahora quiero dibujar una interfaz de música. Por supuesto, me gusta mucho escuchar música, así que quiero dibujar una interfaz de visualización de música como ejemplo.

Me gustaría tener los siguientes componentes en esta pantalla de visualización de música:

- Arte de la portada del álbum de mi música favorita como fondo.
- Tener una barra de progreso de reproducción.
- Tener una barra de control de volumen.
- Tener un botón de reproducir y pausar.

Después de organizar nuestros requisitos, debemos diseñar los componentes de visualización de abajo hacia arriba, como construir un edificio.

El primer paso es crear una imagen de fondo musical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

Selecciona **Panel** en los widgets, puedes hacer clic en él y se colocará automáticamente en el centro del dial, o puedes arrastrarlo a la posición del dial donde deseas colocarlo.

Colocaremos la imagen mostrada en el Panel en lugar de directamente en el fondo del dial, porque no me gusta que todo el dial sea esta imagen, y el Panel puede ser redimensionado libremente.

En este punto, puedes ver que ya hay una serie de propiedades en el Área de Configuración que podemos ajustar. Los ajustes de cada componente son generalmente similares, con una o dos opciones que pueden ser un poco diferentes.

> **Nombre**: Debes nombrar el widget. No puede haber un número, guion bajo o un carácter especial al principio del nombre. Una vez exportado el código, puedes encontrar el widget por ese nombre.

> **Diseño**: Puedes usar un diseño para organizar automáticamente los hijos de un widget. Si el diseño está habilitado, los valores X y Y de los hijos no pueden ajustarse manualmente, a menos que se habilite la opción `IGNORE_LAYOUT` o el flag `FLOATING` en los hijos.

>    **Principales Flags**
>    - **Oculto** - Hace que el objeto sea invisible. (Como si no estuviera allí.)
>    - **Hacible** - Hace que el objeto sea clickeable por dispositivos de entrada.
>    - **Focusable al hacer clic** - Añade el estado de enfoque al objeto cuando se hace clic.
>    - **Marcable** - Cambia el estado de marcado cuando el objeto es clickeado.
>    - **Ajustable** - Si el ajuste de desplazamiento está habilitado en el padre, puede ajustarse a este objeto.
>    - **Bloqueo de presión** - Mantiene el objeto presionado incluso si el deslizamiento de la presión se aleja del objeto.
>    - **Burbuja de evento** - Propaga los eventos también al padre.
>    - **Burbuja de gesto** - Propaga los eventos también al padre.
>    - **Prueba de acierto avanzada** - Permite realizar una prueba de clic más precisa. Ej. teniendo en cuenta las esquinas redondeadas.
>    - **Ignorar diseño** - Hace que el objeto sea posicionable por los diseños.
>    - **Flotante** - No hace que el objeto se desplace cuando el padre lo hace y ignora el diseño.

>   **Flags de desplazamiento**
>   - **Desplazable** - Hace que el objeto sea desplazable.
>   - **Desplazamiento elástico** - Permite el desplazamiento dentro, pero con velocidad más lenta.
>   - **Desplazamiento con impulso** - Hace que el objeto se desplace más lejos cuando es "lanzado".
>   - **Desplazamiento uno** - Permite desplazar solo un hijo ajustable.
>   - **Cadena de desplazamiento** - Permite propagar el desplazamiento a un padre.
>   - **Desplazamiento con enfoque** - Desplaza automáticamente el objeto para hacerlo visible cuando está enfocado.

>**Configuraciones de desplazamiento**
>   - **Dirección de desplazamiento** - Las barras de desplazamiento se muestran según lo configurado.
>   - **Modo de barra de desplazamiento** - Las barras de desplazamiento se muestran según el modo configurado. Existen los siguientes modos:
>       - **Apagar** - Nunca mostrar las barras de desplazamiento.
>       - **Encender** - Siempre mostrar las barras de desplazamiento.
>       - **Activo** - Mostrar las barras de desplazamiento mientras un objeto está siendo desplazado.
>       - **Automático** - Mostrar las barras de desplazamiento cuando el contenido sea lo suficientemente grande para desplazarse.

> **Estados**: El objeto puede estar en una combinación de los siguientes estados:
> - **Hacible** - Estado de marcado o desmarcado.
> - **Deshabilitado** - Estado deshabilitado.
> - **Enfocable** - Enfocado a través de un teclado, codificador o tocado en un touchpad/rato.
> - **Presionado** - Estando presionado.

> **Configuraciones de estilo**: Los estilos pueden usarse para agregar efectos a los widgets o sus partes. Puedes agregar un color de fondo personalizado, borde, sombra, etc. En las configuraciones de estilo, puedes agregar o modificar los valores de estos parámetros.
>
> **Estado**: Puedes crear un estilo personalizado para cada estado.
>
> **Propiedades de estilo**: Las propiedades de estilo son los parámetros que se deben establecer para los estilos.
> - **Arco**: El estilo de arco puede ser utilizado en widgets que tienen el componente Arco.
>    - **Color de línea** - El color de la línea.
>    - **Ancho del arco** - El ancho del arco.
>    - **Arco redondeado** - Los extremos de la línea del arco están redondeados.
>    - **Imagen del arco** - La imagen de fondo para la línea del arco.
> - **Fondo**: El estilo de fondo es el fondo de los widgets. Puedes crear degradados o hacer que las esquinas del fondo sean redondeadas.
>   - **Color y alfa** - Establecer el color de fondo y alfa del objeto.
>   - **Color de degradado** - Establecer el color del degradado del fondo.
>   - **Punto de inicio del fondo** - Establecer el punto desde el cual debe comenzar el color de fondo para los degradados.
>   - **Punto de detención del gradiente del fondo** - Establecer el punto desde el cual debe comenzar el color del fondo en el gradiente.
>   - **Radio de fondo** - El radio que usas para hacer las esquinas del fondo redondeadas.
>   - **Dirección del gradiente** - La dirección del gradiente. Puede ser horizontal o vertical.
>   - **Recortar esquina** - Habilitar para recortar el contenido desbordado en la esquina redondeada.
> - **Imagen de fondo**: Puedes establecer una imagen como imagen de fondo.
>   - **Imagen de fondo** - La imagen que usas como imagen de fondo.
>   - **Opacidad de imagen de fondo** - La opacidad de la imagen de fondo.
>   - **Recolorar** - Con la función Recolorar, puedes usar un color en la imagen de fondo. Establece la profundidad del color cambiando el parámetro alfa.
>   - **Imagen de fondo en mosaico** - Si está habilitado, la imagen de fondo será repetida.
> - **Mezcla**: Usando el estilo de mezcla, puedes mezclar los colores de píxeles de la parte del widget actual con los colores del objeto que sigue.
>   - **Modo de mezcla** - Elige entre cuatro opciones.
>       - **Normal** - Estado por defecto.
>       - **Adictivo** - Sumar píxeles.
>       - **Sustractivo** - Restar píxeles.
>       - **Multiplicación** - Multiplicar píxeles.
>   - **Opacidad de mezcla** - Aquí puedes establecer la opacidad de la parte del widget.
> - **Borde**: Usando Borde, puedes dibujar un borde alrededor del objeto seleccionado en las líneas internas.
>   - **Color del borde** - El color del borde.
>   - **Ancho del borde** - El ancho del borde.
>   - **Lado del borde** - La dirección del borde.
> - **Línea**: El estilo de línea puede ser utilizado en widgets que tienen el componente Línea.
>   - **Color** - El color de la línea.
>   - **Ancho** - El ancho de la línea.
>   - **Línea redondeada** - Los extremos de la línea estarán redondeados.
> - **Contorno**: El estilo de contorno es similar al estilo de Borde, pero aquí dibujas el borde alrededor de la parte seleccionada del widget.
>   - **Color del contorno** - El color del contorno.
>   - **Ancho del contorno** - El ancho del contorno.
>   - **Padding del contorno** - Distancia desde el lado del widget en píxeles.
> - **Rellenos**: El estilo de relleno coloca un relleno sobre la parte del widget. Significa que las partes debajo de ella en la jerarquía se desplazarán por la distancia definida en el relleno con valores en píxeles.
>   - **Relleno** - La extensión del relleno.
> - **Sombra**: Usando el estilo de sombra, puedes dibujar una sombra o un resplandor sobre la parte seleccionada del widget.
>   - **Color de sombra** - El color de la sombra.
>   - **Ancho de sombra** - El ancho de la sombra.
>   - **Difusión de sombra** - La profundidad de la sombra.
>   - **Sombra OX** - Desplazar la sombra en el eje X.
>   - **Sombra OY** - Desplazar la sombra en el eje Y.
> - **Texto**: El estilo de texto define los parámetros del texto que se puede encontrar en el widget.
>   - **Color de texto** - El color del texto.
>   - **Espaciado entre letras** - El espacio entre las letras.
>   - **Espaciado entre líneas** - El espacio entre las líneas.
>   - **Alineación del texto** - La dirección de la alineación del texto.
>   - **Decoración del texto** - Puedes sobreponer o subrayar el texto.
>       - **Ninguna** - Texto normal.
>       - **Subrayado** - Texto subrayado.
>       - **Tachado** - Texto sobrepuesto.
>       - **Fuente del texto** - La fuente del texto.

> **Propiedades de eventos**: Agregar eventos te permite crear diferentes interacciones para los widgets, como cambiar la pantalla, reproducir una animación, etc., al presionar un botón.
> - **Agregar evento**: En la parte inferior del panel del inspector, encontrarás el botón AGREGAR EVENTO. Primero, debes nombrar el evento, luego elegir un disparador para iniciarlo.
>   - **Nombre del evento** - El nombre del evento.
>   - **Disparador del evento** - La interacción del inicio del evento.
>       - **Presionado** - Un objeto ha sido presionado.
>       - **Clickeado** - Un objeto fue presionado por un corto período de tiempo, luego liberado. No se llama si se desplaza.
>       - **Presionado largo** - Un objeto ha sido presionado por un período más largo de tiempo.
>       - **Repetir presión larga** - Llamado después de `long_press_time` en cada `long_press_repeat_time` ms. No se llama si se desplaza.
>       - **Enfocado** - Un objeto está enfocado.
>       - **Desenfocado** - Un objeto está desenfocado.
>       - **Valor cambiado** - El valor del objeto ha cambiado.
>       - **Listo** - Un proceso ha terminado.
>       - **Cancelar** - Un proceso ha sido cancelado.
>       - **Pantalla cargada** - Se cargó una pantalla, se llama cuando todas las animaciones han terminado.
>       - **Pantalla descargada** - Se descargó una pantalla, se llama cuando todas las animaciones han terminado.
>       - **Inicio de carga de pantalla** - Comenzó la carga de una pantalla, se activa cuando ha expirado el retraso del cambio de pantalla.
>       - **Inicio de descarga de pantalla** - Comenzó la descarga de la pantalla, se activa inmediatamente cuando se llama a `lv_scr_load/lv_scr_load_anim`.
>           - **Marcado** - Un widget marcado.
>           - **Desmarcado** - Un widget desmarcado.
>           - **Gesto** - Dirección del deslizamiento táctil.
> - **Agregar evento**
>   - **Acciones**: Las acciones son los elementos del evento, que se inician cuando ocurre el disparador.
>       - **Llamar a función**: Usando la acción Llamar a función, puedes agregar un nombre de función al que el evento puede referirse. Esta función será creada en el archivo `ui__events.c` o `ui_events.py` durante el proceso de exportación.
>       - **Cambiar pantalla**: Puedes cambiar entre pantallas con esta acción.
>           - **Pantalla a** - La pantalla a la que te gustaría cambiar.
>           - **Modo de desvanecimiento** - La animación durante el cambio de pantalla.
>           - **Velocidad** - La velocidad del cambio de pantalla.
>           - **Retraso** - El retraso del cambio de pantalla
>			- **Set Opacity**: Establece la opacidad del widget seleccionado.
>			- **Set Flag**: Establece el valor para el estado del flag del widget.
>			- **Set Property**: Cambia el valor de la propiedad del widget.
>			- **Set text value from arc**: Muestra el valor del widget Arc en un widget Label usando esta acción.
>			- **Set text value from slider**: Muestra el valor del widget Slider en un widget Label usando esta acción.
>			- **Set text value when checked**: Cambia el texto de un widget Label dependiendo del estado marcado o desmarcado del objeto objetivo.

##### Uso del Panel

En resumen, si necesito mostrar la imagen del álbum en la mitad superior del dial, entonces debo ajustar las coordenadas y el tamaño del Panel y configurar la imagen de fondo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
Para ocupar la menor cantidad de memoria posible en la placa base, por favor inserta la imagen ajustándola tanto como sea posible a la resolución del dial para comprimirla, ¡sin dejar que la imagen grande se mantenga!
:::

Entonces, podemos ajustar la transparencia de la imagen en **Bg Image opa**. No quiero que sea completamente opaca, porque una imagen completamente opaca afectaría la visualización de mi texto posteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

Es importante mencionar aquí que todos los componentes tienen líneas de marco por defecto, por lo que para no afectar la estética, necesitamos eliminar las líneas del marco. La forma de hacerlo es estableciendo la transparencia del color del borde a 0.

Así que, **si deseas eliminar cualquier color o segmento de línea, puedes hacerlo estableciendo la transparencia a 0**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### Uso de etiquteas

Luego, agregamos texto en el centro (utilizando los **widgets Label**), que muestra el artista y el nombre de la canción. En el estilo, podemos cambiar el tamaño de la fuente, el color y otros elementos del contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Uso de Imgbutton

Debajo del texto, agregamos algunos componentes de reproducción (utilizando los **widgets Imgbutton**), como el botón de reproducir/pausar y el botón para alternar entre pistas hacia arriba/abajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

El **Imgbutton** es un tipo especial de botón, cuya principal diferencia con el botón normal es que se puede configurar con tres estados de estilo: antes de presionar el botón, cuando se presiona y después de soltar el botón. Este proceso es muy similar al escenario en el que presionamos para cambiar el estado de reproducción. Si consideras que el botón de subir/bajar pista no necesita una función tan compleja, también puedes usar el **Button** directamente.

Ahora, vamos a configurar las imágenes del botón para los estados de presionado y liberado con el estilo de reproducción, y solo en el estado **Deshabilitado** se mostrará el estilo de pausa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

Luego añadimos un evento, cuya función es que cuando el usuario presione el botón, el estado cambie a "Deshabilitado", de modo que se logre el efecto de cambio de imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

Si deseas verificar el efecto, puedes hacer clic en el botón de reproducción en la parte superior derecha del espacio de trabajo, y luego hacer clic en el botón de reproducción para ver el efecto del cambio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Uso de Arc

Luego agregamos el último componente, que es la barra de volumen y la barra de progreso de reproducción. Lo haremos utilizando Arc.

Para Arc, las principales cosas que necesitamos ajustar son el color y el tamaño de los anillos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- **MAIN**: Esto se refiere al diseño del estilo del fondo rectangular detrás de todo el Arc. El **Arc** configurado en el estilo MAIN no indica el estilo del área del arco.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- **INDICATOR**: Se refiere a la configuración del estilo del arco en el área de indicación de inicio. La configuración del **Arc** bajo INDICATOR generalmente se utiliza.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- **KNOB**: Esto se refiere a la configuración de este círculo en la imagen. Si no necesitas este círculo, puedes configurar su transparencia a 0. El tamaño de este círculo debe configurarse dentro del Arc en INDICATOR.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

Este es el efecto que quiero lograr.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

Si has comprobado que es clickeable, entonces puedes hacer clic en el botón Ejecutar y arrastrar el arco, así podrás lograr el efecto de cambiar la barra de volumen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### Cambio de Pantalla

Con la interfaz de música casi diseñada, podemos agregar una nueva interfaz principal a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

Luego diseña un evento que cambie la pantalla principal a la pantalla de música. Por ejemplo, lo diseño aquí para que al deslizar el dedo hacia la derecha bajo la interfaz principal, se cambie a la interfaz de reproducción de música.

Dado que la interfaz principal es la principal, este evento debe agregarse a la interfaz principal bajo la sección de Pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

Si deseas tener un efecto de animación que cambie lentamente después de deslizar, entonces puedes mantener la velocidad en 500; si deseas que el cambio sea inmediato, entonces la velocidad debe establecerse en 0.

##### Animación del Indicador

Volviendo al diseño de la interfaz principal, queremos agregar el efecto de animación de la rotación de la manecilla del reloj.

Lo primero que debes hacer es dibujar tus propias manecillas de segundos, minutos y horas. Luego, agrégalas al dial principal en el estilo de **Imagen**.

El ajuste de la posición del puntero requiere paciencia, ya que debemos asegurarnos de que el puntero esté rotando alrededor de un punto fijo en la imagen.

Se establece Transform para la colocación de la imagen. El Pivot en la pestaña de Imagen abajo establece las coordenadas del punto de rotación. La forma general de configurarlo es primero ajustar el Transform para asegurarse de que el punto fijo del puntero esté en el centro del dial, y luego ajustar un poco las coordenadas del Pivot. Cuando todos los ángulos puedan hacer que el punto fijo del puntero no se mueva, entonces estos parámetros son los más adecuados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

Una vez que hayas determinado todas las posiciones de los punteros, puedes comenzar a agregar nuevos efectos de animación. Las configuraciones de efectos de animación para los diferentes punteros se pueden encontrar en la siguiente figura.

<table align="center">
	<tr>
	    <th>Segundos</th>
	    <th>Minutos </th>
        <th>Horas</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/25.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/26.png" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/27.png" style={{width:300, height:'auto'}}/></div></td>
	</tr>
</table>

Finalmente, solo debemos configurar la animación del movimiento del puntero para que se reproduzca mientras se carga la pantalla principal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
Los tutoriales anteriores han cubierto básicamente el 80% de los escenarios de uso del software, y muchos de los otros componentes son muy similares. Finalmente, aquí tienes algunos consejos y recomendaciones para cuando uses el software.

1. Necesitas colocar todos los componentes con funcionalidad táctil en la parte superior, de lo contrario interferirá con la implementación de la funcionalidad táctil del componente.

    De forma predeterminada, el último componente colocado por el software está en la parte superior. Esto significa que en la pestaña de Jerarquía, los componentes que están uno al lado del otro tienden a estar en la parte superior. En la interfaz de música que acabas de diseñar, la capa superior es el Arco para ajustar el tamaño del volumen, lo que causa un problema porque el Arco es un rectángulo que ocupa todo el dial y afectará el toque del botón de reproducción. Por lo tanto, normalmente necesitas ajustar la capa del botón de reproducción a la parte superior de la capa del Arco para que no afecte el toque.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. Apaga tantas funciones innecesarias como sea posible para ahorrar más memoria.

    Cada componente tendrá algunas casillas de verificación (Flags) activadas por defecto, pero no todas son necesarias. Aunque las opciones predeterminadas no serán un problema, desactivar las Flags no deseadas hará que tu interfaz de usuario del dial funcione de manera más fluida.

    Como el álbum de fondo en la interfaz de música, no es necesario hacer clic ni tiene animación, por lo que es conveniente desactivar la opción en las Flags. Pero también se debe considerar la situación real; por ejemplo, en la escena de cambio de página del dial mediante deslizamiento, desactivar algunas Flags podría deshabilitar el deslizamiento, por lo que aún se debe ejecutar según el efecto que se desea lograr al desactivar.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. Asegúrate de darle un nombre único a todos tus componentes, animaciones, eventos, etc.

    El software solo puede ahorrarte tiempo al dibujar algunos patrones y animaciones, pero los efectos más complejos pueden requerir que los programes más adelante para lograrlos. Por eso, es importante poder encontrar rápidamente dónde están ubicados tus componentes en el código. ¡Nombrar los componentes, eventos y animaciones es clave!
:::

#### Paso 5. Exportación y aplicación de programas

Una vez que hayas dibujado tu interfaz de usuario del dial, puedes considerar exportarla a un programa y cargarla en XIAO a través de Arduino. Haz clic en la esquina superior izquierda del software y selecciona **Exportar** -> **Crear Proyecto de Plantilla**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

Luego, selecciona la ruta para guardar y el código se exportará automáticamente. El proyecto exportado tendrá los siguientes archivos:

- libraries
- ui
- README.md

Lo que necesitamos son los archivos dentro de la carpeta **ui**. Podemos abrir directamente el archivo .ino dentro de la carpeta **ui**. Luego, necesitamos realizar cambios en los siguientes archivos para asegurarnos de que el programa se compile sin problemas.

- **ui.h**: En la sección que contiene las bibliotecas, solo debe mantenerse `#include "lvgl.h"`.

<table align="center">
	<tr>
	    <th>Antes de la modificación</th>
	    <th>Después de la modificación</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/32.png" style={{width:600, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/33.png" style={{width:600, height:'auto'}}/></div></td>
	</tr>
</table>

- **ui.ino**: Activa la función de pantalla táctil y configura la dirección de rotación del dial.

<table align="center">
	<tr>
	    <th>Antes de la modificación</th>
	    <th>Después de la modificación</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/34.png" style={{width:600, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/35.png" style={{width:600, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/36.png" style={{width:600, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/37.png" style={{width:600, height:'auto'}}/></div></td>
	</tr>
</table>

Luego, puedes elegir qué XIAO usar para compilar y cargar.

### Opciones de personalización de la biblioteca LVGL

Si sigues los pasos anteriores y aún obtienes algunos mensajes de error "Undefined" durante la compilación, puede que no hayas configurado el archivo `lvconf.h` para la personalización.

Para ahorrar memoria en la placa base, el archivo `lvconf.h` que proporcionamos desactiva algunas de las funciones de LVGL. Pero si usas estas funciones en tu diseño del dial, necesitarás activarlas manualmente.

- La ruta predeterminada para `lvconf.h` en sistemas **Windows** es:

`C:\Users\{NombreDeUsuario}\Documents\Arduino\libraries`

- La ruta predeterminada para `lvconf.h` en sistemas **MacOS** es:

`\Users\{NombreDeUsuario}\Documents\Arduino\libraries`

Como ejemplo simple, en el ejemplo anterior, usamos la fuente `MONTSERRAT 8`, pero por defecto esta fuente está desactivada, por lo que podría haber un error durante el proceso de compilación.

Lo único que necesitamos hacer es cambiar el 0 después de esta fuente en el archivo `lv_conf.h` a 1, lo que significa que la fuente está habilitada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

Si encuentras un error similar, puedes verificar nuevamente que la función de personalización esté habilitada.

### Programa de dial basado en LVGL

Hemos creado dos estilos de dial para la pantalla circular para la referencia de los usuarios. Debido a la lógica compleja de la interfaz de usuario, esto requerirá una cierta cantidad de rendimiento y memoria en la placa base de XIAO. Si tu XIAO está compilando el siguiente programa de dial con un error de memoria insuficiente, es posible que necesites actualizar tu XIAO o reducir la funcionalidad de los diales.

- Estilo de Dial I:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/ui">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<!-- - Dial Style II:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div> -->

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



