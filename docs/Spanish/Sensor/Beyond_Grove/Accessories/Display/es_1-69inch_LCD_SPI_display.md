---
description: Getting started with 1.69 inch LCD SPI Display
title: Pantalla LCD SPI de 1.69 pulgadas
keywords:
- oled display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/1-69inch_lcd_spi_display
last_update:
  date: 07/12/2025
  author: Guillermo
---

# Pantalla LCD SPI de 1.69 pulgadas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Introducción

Esta pantalla LCD de 1.69 pulgadas es un display LCD en serie con esquinas redondeadas. Con una resolución superior de 240×280 píxeles y 262K colores RGB, ofrece una representación clara y colorida de las imágenes. El diseño está pensado como una solución simple y de alta calidad para diversos proyectos DIY o de Internet de las Cosas (IoT).

Utiliza una interfaz de 8 pines, 4 para alimentación con retroiluminación y 4 para comunicación SPI con el controlador **ST7789V2**. Hemos preparado una biblioteca de controladores y ejemplos para que puedas comenzar de forma rápida y sencilla en el desarrollo de tu proyecto.

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
                <th>Tamaño de la pantalla</th>
                <td>27.97 × 32.63mm</td>
            </tr>
            <tr>
                <th>Tipo de panel</th>
                <td>IPS</td>
                <th>Pitch de píxel</th>
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

### Dimensiones físicas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/7.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/8.jpg" style={{width:450, height:'auto'}}/></div>

### Características

- Resolución 240×280, 262K colores RGB, efecto visual claro y colorido
- Interfaz SPI, requiere pocos pines de E/S, compatible con placas como XIAO, Raspberry Pi, Arduino, STM32
- Incluye recursos de desarrollo (ejemplos para XIAO/Raspberry Pi/Arduino/STM32)

### Ideas de aplicación

- **Pulsera o reloj**: Esta pantalla puede ensamblarse con el microcontrolador XIAO para construir una pulsera o reloj, donde puede mostrar la fecha y otra información gracias a su alta resolución y colores brillantes. Su pequeño tamaño la hace ideal para crear prototipos rápidamente.

- **Pantalla de información de PC**: Puedes usar esta pantalla LCD con una placa convertidora para mostrar información del estado de tu computadora como temperatura o RPM del ventilador. Sus orificios de montaje permiten fijarla fácilmente en la carcasa del PC.

## Vista general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/9.png" style={{width:800, height:'auto'}}/></div>

## Primeros Pasos

### Preparación de hardware

Aquí te mostramos cómo utilizarla con nuestra placa **XIAO nRF52840**, que incluye IMU de 6 ejes, Bluetooth y micrófono PDM. Esta placa junto con la pantalla son los componentes clave para construir un reloj digital.

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


Luego, debes conectar los pines de la pantalla a la placa **XIAO nRF52840**. Sigue la imagen de referencia y la tabla siguiente para realizar las conexiones correctamente:

| Pantalla LCD SPI de 1.69 pulgadas | XIAO nRF52840 |
| ------------------------------- | -------------- |
| VCC                             | 3V3            |
| GND                             | GND            |
| DIN                             | D10            |
| CLK                             | D8             |
| CS                              | D1             |
| DC                              | D3             |
| RST                             | D0             |
| BL                              | D6             |


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>


## Descripción general de la librería Arduino

:::tip
Si es tu primera vez usando Arduino, te recomendamos consultar esta guía:  
[Primeros pasos con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)

:::

Basándonos en el ejemplo de programa Arduino proporcionado por **Waveshare**, hemos desarrollado una librería compatible con toda la serie **XIAO**. Puedes acceder directamente al repositorio en GitHub a través del botón correspondiente.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga la librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Funciones disponibles

Antes de comenzar a desarrollar un sketch, echemos un vistazo a las funciones que ofrece la librería:

- `void Init(uint8_t cs = CS_PIN, uint8_t dc = DC_PIN, uint8_t rst = RST_PIN, uint8_t bl = BL_PIN)`  
  Inicialización común de registros.

  **Parámetros**:
  - `cs`: Pin Chip Select (por defecto **D1**).
  - `dc`: Pin de datos/comando (por defecto **D3**).
  - `rst`: Pin de reinicio (por defecto **D0**).
  - `bl`: Pin de retroiluminación (por defecto **D6**).

- `void SetBacklight(uint16_t Value)`  
  Establece el nivel de retroiluminación (0–255).

- `void Reset(void)`  
  Reinicio por hardware.

- `void SetCursor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend)`  
  Define la región activa del cursor.

- `void Clear(uint16_t Color)`  
  Limpia la pantalla con un color.

- `void ClearWindow(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t color)`  
  Limpia una zona específica con un color.

- `void SetWindowColor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color)`  
  Asigna un color a una ventana/área.

- `void SetUWORD(uint16_t x, uint16_t y, uint16_t Color)`  
  Dibuja un valor de 16 bits (pixel coloreado).

- `void SetRotate(uint16_t Rotate)`  
  Rota la imagen (ROTATE_0, _90, _180, _270).

- `void SetMirroring(uint8_t mirror)`  
  Espeja la imagen (Ninguno, Horizontal, Vertical, Origen).

- `void SetPixel(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color)`  
  Dibuja un píxel.

- `void DrawPoint(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color, DOT_PIXEL Dot_Pixel, DOT_STYLE Dot_FillWay)`  
  Dibuja un punto con tamaño y estilo definido.

- `void DrawLine(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, LINE_STYLE Line_Style)`  
  Dibuja una línea con grosor y estilo.

- `void DrawRectangle(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Filled)`  
  Dibuja un rectángulo (lleno o sin rellenar).

- `void DrawCircle(uint16_t X_Center, uint16_t Y_Center, uint16_t Radius, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Draw_Fill)`  
  Dibuja un círculo (usando método de 8 puntos), con opción de relleno.

- `void DrawString_EN(int16_t Xstart, int16_t Ystart, const char * pString, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)`  
  Muestra una cadena de texto en inglés.

- `void DrawNum(int16_t Xpoint, int16_t Ypoint, int32_t Nummber, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)`  
  Muestra un número entero.

- `void DrawFloatNum(int16_t Xpoint, int16_t Ypoint, double Nummber, int8_t Decimal_Point, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)`  
  Muestra un número flotante con decimales.

- `void DrawImage(const unsigned char *image, int16_t xStart, int16_t yStart, int16_t W_Image, int16_t H_Image)`  
  Muestra una imagen a partir de datos en memoria.

### Variables Default 

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

Una vez que hayas descargado la librería en formato .zip, abre el **Arduino IDE** y haz clic en: **Sketch > Incluir Librería > Añadir librería .ZIP**

Selecciona el archivo .zip que acabas de descargar. Si la instalación fue exitosa, verás un mensaje indicando: **Library added to your libraries**. Esto significa que la librería se ha instalado correctamente.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Ejemplo para XIAO

Después de instalar correctamente la librería, encontrarás dos programas de ejemplo en la carpeta `examples`:

- **helloworld.ino**  
  Este ejemplo muestra una animación con el logo de Seeed Studio en la pantalla. También incluye el mismo efecto que el ejemplo de color de fondo.

- **bgcolor.ino**  
  Este ejemplo muestra cómo cambiar el color de fondo de la pantalla. El color rojo se establece como color predeterminado.


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

Verás el logotipo de **Seeed Studio** impreso dinámicamente en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/11.jpg" style={{width:700, height:'auto'}}/></div>

## Solución de Problemas

### 1. ¿La pantalla deja de funcionar cuando la reprogramo estando conectada?

**R:** Si tu programa está comunicándose constantemente con la pantalla, reprogramarla puede interrumpir esta comunicación, lo cual puede provocar un mal funcionamiento. Puedes intentar apagar la alimentación y volverla a encender para restaurar su funcionamiento normal.

### 2. ¿Qué tipo de fuente de alimentación debo usar para la pantalla?

**R:** La placa acepta un voltaje de entrada de **3.3V o 5V**, por lo que puedes utilizar cualquier fuente de alimentación que se encuentre dentro de este rango.

### 3. Los colores en mi pantalla no se ven correctamente. ¿Cuál podría ser el problema?

**R:** Asegúrate de que la pantalla esté correctamente inicializada en tu código y de que estés utilizando los valores de color adecuados. Si el problema persiste, podría tratarse de un fallo en la pantalla o en los cables de conexión. Revisa todas las conexiones cuidadosamente o intenta con otra pantalla si es posible.

## Recursos

- **[PDF]** [Esquemático](https://www.waveshare.com/w/upload/2/2b/1.69inch_LCD_Module.pdf)
- **[PDF]** [Hoja de datos (Datasheet)](https://www.waveshare.com/w/upload/c/c9/ST7789V2.pdf)
- **[PDF]** [Dibujo 2D](https://www.waveshare.com/w/upload/4/41/1.69inch_LCD_Module_2Ddrawing.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para atender tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>









