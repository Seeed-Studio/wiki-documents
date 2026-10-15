---
description: Comenzando con la pantalla LCD SPI de 1.69 pulgadas
title: Pantalla LCD SPI de 1.69 pulgadas
keywords:
  - oled display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /1-69inch_lcd_spi_display
sku: 104990802
last_update:
  date: 08/17/2023
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/1-69inch_lcd_spi_display/
---

# Pantalla LCD SPI de 1.69 pulgadas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Introducción

Esta pantalla LCD de 1.69 pulgadas es una pantalla de cristal líquido serie de esquinas redondeadas de 1.69 pulgadas. Ofreciendo una resolución superior de 240×280 y color de pantalla RGB de 262K, esta pantalla proporciona una representación de imagen cristalina y colorida. La lógica de diseño detrás de esta pantalla es presentar una solución de pantalla simple y de alta calidad para satisfacer las necesidades de varios proyectos DIY o de Internet de las Cosas (IoT).

Adopta una interfaz de 8 pines con la fuente de alimentación de 4 pines con retroiluminación y el SPI de 4 pines que se comunica con el IC controlador ST7789V2. Hemos preparado la biblioteca de controladores y ejemplos para que puedas comenzar rápidamente y convenientemente con el desarrollo de tu proyecto.

### Especificaciones

<div class="table-center">
 <table align="center">
        <tbody>
            <tr>
                <th>Voltaje de operación</th>
                <td>3.3V / 5V</td>
                <th>Resolución</th>
                <td>240 × 280 píxeles</td>
            </tr>
            <tr>
                <th>Interfaz de comunicación</th>
                <td>SPI de 4 hilos</td>
                <th>Tamaño de pantalla</th>
                <td>27.97 × 32.63mm</td>
            </tr>
            <tr>
                <th>Panel de pantalla</th>
                <td>IPS</td>
                <th>Paso de píxel</th>
                <td>0.11655 × 0.11655mm</td>
            </tr>
            <tr>
                <th>Controlador</th>
                <td>ST7789V2</td>
                <th>Dimensiones</th>
                <td>31.50 × 39.00mm</td>
            </tr>
        </tbody>
    </table>
</div>

### Dimensiones del Contorno

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/7.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/8.jpg" style={{width:450, height:'auto'}}/></div>

### Características

- Resolución 240×280, colores RGB 262K, efecto de visualización claro y colorido
- Interfaz SPI, minimiza los pines IO requeridos, soporta placas controladoras como XIAO/Raspberry Pi/Arduino/STM32
- Viene con recursos de desarrollo (ejemplos para XIAO/Raspberry Pi/Arduino/STM32)

### Ideas de Aplicación

- **Banda o Reloj**: La pantalla se puede ensamblar con el mcu XIAO para construir un dispositivo de banda o reloj, donde puede mostrar la fecha e información del reloj con su pantalla de alta resolución y colorida. Su pequeño tamaño lo convierte en un componente excelente para crear rápidamente un prototipo.

- **Pantalla de información de PC:** Puedes usar esta pantalla lcd para conectar con la placa convertidora y usarla para mostrar la información de funcionamiento de tu PC como temperatura y rpm del ventilador. Sus tornillos pueden ayudarte a fijarla fácilmente en la caja del PC.

## Descripción General del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/9.png" style={{width:800, height:'auto'}}/></div>

## Primeros Pasos

### Preparación del Hardware

Ahora te mostraremos cómo usar nuestra placa XIAO nRF52840 que contiene 6 grados de libertad de IMU, Bluetooth y micrófono PDM, puedes darte cuenta de que esta placa con esta pantalla son los componentes clave que necesitas para construir un reloj digital.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO nRF52840</th>
   <th>Pantalla LCD SPI de 1.69 pulgadas</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Luego, debes conectar el pin de la pantalla a la placa XIAO nRF52840, por favor sigue la imagen de abajo para conectarlos:

| Pantalla LCD SPI de 1.69 pulgadas| XIAO nRF52840 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

## Descripción General de la Biblioteca de Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

Basándonos en el programa de ejemplo de Arduino proporcionado por **Waveshare**, hemos escrito una biblioteca de Arduino para usar con toda la serie XIAO, y puedes ir directamente al Github de esta biblioteca a través del botón de abajo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la biblioteca.

- `void Init(uint8_t cs = CS_PIN, uint8_t dc = DC_PIN, uint8_t rst = RST_PIN, uint8_t bl = BL_PIN)` —— Inicialización común de registros.

    **Parámetros de Entrada**
  - `cs`: Establece el pin de selección de chip, el valor predeterminado es el pin **D1** del XIAO.
  - `dc`: Establece el pin DC, el valor predeterminado es el pin **D3** del XIAO.
  - `rst`: Establece el pin de reinicio, el valor predeterminado es el pin **D0** del XIAO.
  - `bl`: Establece el pin de control de retroiluminación, el valor predeterminado es el pin **D6** del XIAO.

- `void SetBacklight(uint16_t Value)` —— Configuración de retroiluminación.

    **Parámetros de Entrada**
  - `Value`: Intensidad de retroiluminación con valores que van de 0 a 255.

- `void Reset(void)` —— Reinicio por hardware.

- `void SetCursor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend)` —— Establece la posición del cursor.

    **Parámetros de Entrada**
  - `Xstart`: Coordenada x de inicio uint16_t.
  - `Ystart`: Coordenada y de inicio uint16_t.
  - `Xend`: Coordenadas de fin uint16_t.
  - `Yend`: Coordenadas de fin uint16_t.

- `void Clear(uint16_t Color)` —— Función de limpiar pantalla, actualiza la pantalla a un cierto color.

    **Parámetros de Entrada**
  - `Color`: El color al que quieres limpiar toda la pantalla.

- `void ClearWindow(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t color)` —— Actualiza una cierta área al mismo color.

    **Parámetros de Entrada**
  - `Xstart`: Coordenada x de inicio uint16_t.
  - `Ystart`: Coordenada y de inicio uint16_t.
  - `Xend`: Coordenadas de fin uint16_t.
  - `Yend`: Coordenadas de fin uint16_t.
  - `color`: Establece el color.

- `void SetWindowColor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color)` —— Establece el color de un área.

    **Parámetros de Entrada**
  - `Xstart`: Coordenada x de inicio uint16_t.
  - `Ystart`: Coordenada y de inicio uint16_t.
  - `Xend`: Coordenadas de fin uint16_t.
  - `Yend`: Coordenadas de fin uint16_t.
  - `color`: Establece el color.

- `void SetUWORD(uint16_t x, uint16_t y, uint16_t Color)` —— Dibuja un uint16_t.

    **Parámetros de Entrada**
  - `x`: Establece la coordenada X.
  - `y`: Establece la coordenada Y.
  - `Color`: Establece el color.

- `void SetRotate(uint16_t Rotate)` —— Selecciona la rotación de imagen.

    **Parámetros de Entrada**
  - `Rotate`: ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270

- `void SetMirroring(uint8_t mirror)` —— Selecciona el espejo de imagen.

    **Parámetros de Entrada**
  - `mirror`: MIRROR_NONE, MIRROR_HORIZONTAL, MIRROR_VERTICAL, MIRROR_ORIGIN

- `void SetPixel(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color)` —— Dibuja píxeles.

    **Parámetros de Entrada**
  - `Xpoint`: En el punto X.
  - `Ypoint`: En el punto Y.
  - `Color`: Colores pintados.

- `void DrawPoint( uint16_t Xpoint, uint16_t Ypoint, uint16_t Color, DOT_PIXEL Dot_Pixel, DOT_STYLE Dot_FillWay)` —— Dibuja punto (Xpoint, Ypoint) llena el color.

    **Parámetros de Entrada**
  - `Xpoint`: La coordenada Xpoint del punto.
  - `Ypoint`: La coordenada Ypoint del punto.
  - `Color`: Establece el color.
  - `Dot_Pixel`: tamaño del punto.

- `void DrawLine(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, LINE_STYLE Line_Style)` —— Dibuja una línea de pendiente arbitraria.

    **Parámetros de Entrada**
  - `Xstart`：Coordenadas del punto Xpoint de inicio.
  - `Ystart`：Coordenadas del punto Xpoint de inicio.
  - `Xend`：Coordenada Xpoint del punto final.
  - `Yend`：Coordenada Ypoint del punto final.
  - `Color`：El color del segmento de línea.

- `void DrawRectangle(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Filled)` —— Dibuja un rectángulo.

    **Parámetros de Entrada**
  - `Xstart`：Coordenadas del punto Xpoint de inicio.
  - `Ystart`：Coordenadas del punto Xpoint de inicio.
  - `Xend`：Coordenada Xpoint del punto final.
  - `Yend`：Coordenada Ypoint del punto final.
  - `Color`：El color del segmento de línea.
  - `Filled`: Si está relleno--- 1 sólido 0：vacío

- `void DrawCircle(uint16_t X_Center, uint16_t Y_Center, uint16_t Radius, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Draw_Fill)` —— Usa el método de 8 puntos para dibujar un círculo del tamaño especificado en la posición especificada.

    **Parámetros de Entrada**
  - `X_Center`：Coordenada X del centro
  - `Y_Center`：Coordenada Y del centro
  - `Radius`：Radio del círculo
  - `Color`：El color del segmento del círculo
  - `Filled`: Si está relleno: 1 rellenar 0：No.

- `void DrawString_EN(int16_t Xstart, int16_t Ystart, const char * pString, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Mostrar la cadena.

    **Parámetros de Entrada**
  - `Xstart`：Coordenada X.
  - `Ystart`：Coordenada Y.
  - `pString`：La primera dirección de la cadena en inglés que se va a mostrar.
  - `Font`：Un puntero de estructura que muestra el tamaño de un carácter.
  - `Color_Background`: Seleccionar el color de fondo del carácter en inglés.
  - `Color_Foreground`: Seleccionar el color de primer plano del carácter en inglés.

- `void DrawNum(int16_t Xpoint, int16_t Ypoint, int32_t Nummber, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Mostrar número.

    **Parámetros de Entrada**
  - `Xstart`：Coordenada X.
  - `Ystart`：Coordenada Y.
  - `Nummber`：El número mostrado.
  - `Font`：Un puntero de estructura que muestra el tamaño de un carácter.
  - `Color_Background`: Seleccionar el color de fondo del carácter en inglés.
  - `Color_Foreground`: Seleccionar el color de primer plano del carácter en inglés.

- `void DrawFloatNum(int16_t Xpoint, int16_t Ypoint, double Nummber,  int8_t Decimal_Point, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Mostrar número flotante.

    **Parámetros de Entrada**
  - `Xstart`：Coordenada X.
  - `Ystart`：Coordenada Y.
  - `Nummber`：Los datos flotantes que desea mostrar.
  - `Decimal_Point`：Mostrar lugares decimales.
  - `Font`: Un puntero de estructura que muestra el tamaño de un carácter.
  - `Color`: Seleccionar el color de fondo del carácter en inglés.

- `void DrawImage(const unsigned char *image, int16_t xStart, int16_t yStart, int16_t W_Image, int16_t H_Image)` —— Mostrar imagen.

    **Parámetros de Entrada**
  - `image`: Dirección de inicio de la imagen.
  - `xStart`：Coordenadas de inicio X.
  - `yStart`：Coordenadas de inicio Y.
  - `xEnd`: Ancho de la imagen.
  - `yEnd`: Altura de la imagen.

### Variables Predeterminadas

```cpp
#define RST_PIN D0
#define DC_PIN  D3
#define BL_PIN  D6
#define CS_PIN  D1

#define LCD_WIDTH   240 //LCD width
#define LCD_HEIGHT  280 //LCD height

/**
 * image color
**/
#define WHITE         0xFFFF
#define BLACK         0x0000    
#define BLUE          0x001F  
#define BRED          0XF81F
#define GRED          0XFFE0
#define GBLUE         0X07FF
#define RED           0xF800
#define MAGENTA       0xF81F
#define GREEN         0x07E0
#define CYAN          0x7FFF
#define YELLOW        0xFFE0
#define BROWN         0XBC40 
#define BRRED         0XFC07 
#define GRAY          0X8430 
#define DARKBLUE      0X01CF  
#define LIGHTBLUE     0X7D7C   
#define GRAYBLUE      0X5458 
#define LIGHTGREEN    0X841F 
#define LGRAY         0XC618 
#define LGRAYBLUE     0XA651
#define LBBLUE        0X2B12

/**
 * Display rotate
**/
#define ROTATE_0            0
#define ROTATE_90           90
#define ROTATE_180          180
#define ROTATE_270          270

#define MIRROR_NONE        0x00
#define MIRROR_HORIZONTAL  0x01
#define MIRROR_VERTICAL    0x02
#define MIRROR_ORIGIN      0x03
```

### Instalación

Dado que has descargado la biblioteca zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo cual significa que la biblioteca se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Ejemplo XIAO

Después de descargar e instalar la biblioteca correctamente, puedes encontrar dos programas de ejemplo llamados **helloworld.ino** y **bgcolor.ino** en la carpeta de ejemplos. El bgcolor.ino es un ejemplo para mostrar el color de fondo, establecemos el rojo como predeterminado. Y el helloworld.ino es un ejemplo para mostrar la animación sobre el logo de nuestra empresa, y este ejemplo contiene el efecto que tiene el ejemplo bgcolor.

```cpp
#include <st7789v2.h>
#include "SPI.h"
#include "seeed.h"

st7789v2 Display;

void setup() {
  // put your setup code here, to run once:
  Display.SetRotate(270);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // put your main code here, to run repeatedly:
//  Display.SetPixel(100, 100, RED);
//  Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 20, 90, 240, 47);

  Display.DrawLine(15, 65, 65, 65, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(15, 70, 80, 70, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  
  Display.DrawCircle(10, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(10, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(200, 160, 265, 160, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(215, 165, 265, 165, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawString_EN(20, 180, "By: Citric", &Font20, WHITE, BLACK);
//  Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(100, 210, 1.00, 2, &Font16, WHITE, BLACK);
}
```

Encontrarás el logo de Seeed Studio impreso en la pantalla de forma dinámica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/11.jpg" style={{width:700, height:'auto'}}/></div>

## Solución de problemas

### 1. ¿La pantalla no funciona cuando la reprogramo mientras está conectada?

R: Si tu programa está comunicándose constantemente con la pantalla, la reprogramación puede interrumpir este proceso, causando que la pantalla funcione mal. Puedes intentar apagar la alimentación para restaurar el funcionamiento normal de la pantalla.

### 2. ¿Qué tipo de fuente de alimentación debo usar para la pantalla?

R: La placa de circuito puede aceptar un voltaje de entrada de 3.3V o 5V, por lo que puedes usar una fuente de alimentación dentro de este rango.

### 3. Los colores en mi pantalla no se ven correctos. ¿Cuál podría ser el problema?

R: Por favor asegúrate de que la pantalla esté correctamente inicializada en tu código y que estés usando los valores de color correctos. Si aún tienes problemas, puede haber un problema con la pantalla o los cables de conexión. Por favor verifica las conexiones o prueba con otra pantalla si está disponible.

## Recursos

- **[PDF]** [Esquemático](https://www.waveshare.com/w/upload/2/2b/1.69inch_LCD_Module.pdf)
- **[PDF]** [Hoja de datos](https://www.waveshare.com/w/upload/c/c9/ST7789V2.pdf)
- **[PDF]** [Dibujo 2D](https://www.waveshare.com/w/upload/4/41/1.69inch_LCD_Module_2Ddrawing.pdf)

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
