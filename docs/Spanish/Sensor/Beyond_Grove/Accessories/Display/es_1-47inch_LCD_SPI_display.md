---
description: Getting started with 1.47 inch LCD SPI Display
title: Pantalla LCD SPI de 1.47 pulgadas
keywords:
- oled display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/1-47inch_lcd_spi_display
last_update:
  date: 07/12/2025
  author: Guillermo
---

# 1.47 inch LCD SPI Display

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/1.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-47inch-172x320-Resolution-LCD-Display-Module-p-5756.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Introducción

Esta pantalla LCD de 1.47 pulgadas es una pantalla serial con esquinas redondeadas. Ofrece una resolución superior de 172×320 píxeles y color RGB de 262K, proporcionando una representación de imagen nítida y colorida. La razón de diseño detrás de esta pantalla es ofrecer una solución visual simple y de alta calidad para cubrir las necesidades de diversos proyectos DIY o de Internet de las Cosas (IoT).

Adopta una interfaz de 8 pines, compuesta por 4 pines para alimentación y retroiluminación, y 4 pines SPI que se comunican con el controlador ST7789V3. Hemos preparado la biblioteca y ejemplos para ayudarte a comenzar rápida y cómodamente con tu desarrollo.

### Especificaciones

<div class="table-center">
	<table align="center">
        <tbody>
            <tr>
                <th>Voltaje de operación</th>
                <td>3.3V / 5V</td>
                <th>Resolución</th>
                <td>172 × 320 píxeles</td>
            </tr>
            <tr>
                <th>Interfaz de comunicación</th>
                <td>SPI de 4 hilos</td>
                <th>Tamaño de pantalla</th>
                <td>17.39 × 32.35mm</td>
            </tr>
            <tr>
                <th>Tipo de panel</th>
                <td>IPS</td>
                <th>Paso de píxel</th>
                <td>0.0337 × 0.1011mm</td>
            </tr>
            <tr>
                <th>Controlador</th>
                <td>ST7789V3</td>
                <th>Dimensiones totales</th>
                <td>22.0 × 38.5mm</td>
            </tr>
        </tbody>
    </table>
</div>

### Dimensiones Físicas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/2.jpg" style={{width:400, height:'auto'}}/></div>

### Características

- Resolución de 172×320, 262K colores RGB, imagen clara y colorida  
- Interfaz SPI, minimiza el uso de pines, compatible con XIAO / Raspberry Pi / Arduino / STM32  
- Incluye recursos de desarrollo (ejemplos para XIAO / Raspberry Pi / Arduino / STM32)  

### Ideas de Aplicación

- **Reloj o Banda:** Esta pantalla puede ensamblarse con el microcontrolador XIAO para crear un reloj o banda, mostrando fecha e información con alta resolución y colores. Su tamaño compacto la hace ideal para prototipos rápidos.

- **Pantalla para información de PC:** Puedes conectar esta pantalla a una placa convertidora y usarla para mostrar información como temperatura y velocidad del ventilador. Sus orificios permiten fijarla fácilmente en el gabinete de la PC.

## Descripción de Hardware¿

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/3.png" style={{width:600, height:'auto'}}/></div>

## Primeros Pasos

### Preparación de Hardware

Aquí te mostraremos cómo utilizar la placa XIAO nRF52840, que cuenta con IMU de 6 ejes, Bluetooth y micrófono PDM. Esta placa junto con la pantalla son los componentes clave para construir un reloj digital.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO nRF52840</th>
			<th>Pantalla LCD SPI de 1.47"</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/1.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/1-47inch-172x320-Resolution-LCD-Display-Module-p-5756.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Luego, conecta los pines de la pantalla a la placa XIAO nRF52840 de acuerdo con la siguiente tabla:

| Pantalla LCD SPI 1.47" | XIAO nRF52840 |
|------------------------|----------------|
| VCC                    | 3V3            |
| GND                    | GND            |
| DIN                    | D10            |
| CLK                    | D8             |
| CS                     | D1             |
| DC                     | D3             |
| RST                    | D0             |
| BL                     | D6             |


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/4.png" style={{width:700, height:'auto'}}/></div>


## Biblioteca Arduino

:::tip
Si es tu primera vez usando Arduino, te recomendamos visitar: [Introducción a Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) 
:::

Basándonos en los ejemplos proporcionados por **Waveshare**, hemos escrito una biblioteca Arduino compatible con toda la serie XIAO. Puedes acceder directamente a su repositorio en GitHub mediante el botón siguiente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V3_LCD_Display/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Funciones

Antes de comenzar a desarrollar un sketch, revisemos las funciones disponibles en la biblioteca.

- `void Init(uint8_t cs = CS_PIN, uint8_t dc = DC_PIN, uint8_t rst = RST_PIN, uint8_t bl = BL_PIN)` —— Inicialización común de registros.

    **Parámetros de entrada**
    - `cs`: Define el pin de selección de chip (chip select), el valor por defecto es **D1** de la placa XIAO.
    - `dc`: Define el pin DC, valor por defecto **D3**.
    - `rst`: Define el pin de reinicio, valor por defecto **D0**.
    - `bl`: Pin para controlar la retroiluminación, por defecto es **D6**.

- `void SetBacklight(uint16_t Value)` —— Ajuste de la retroiluminación.

    **Parámetros**
    - `Value`: Intensidad de retroiluminación, de 0 a 255.

- `void Reset(void)` —— Reinicio por hardware.

- `void SetCursor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend)` —— Establece la posición del cursor.

    **Parámetros**
    - `Xstart`: Coordenada X inicial.
    - `Ystart`: Coordenada Y inicial.
    - `Xend`: Coordenada X final.
    - `Yend`: Coordenada Y final.

- `void Clear(uint16_t Color)` —— Limpia la pantalla con un color específico.

    **Parámetros**
    - `Color`: Color con el que se desea limpiar toda la pantalla.

- `void ClearWindow(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t color)` —— Refresca un área específica con un color determinado.

    **Parámetros**
    - `Xstart`: Coordenada X inicial.
    - `Ystart`: Coordenada Y inicial.
    - `Xend`: Coordenada X final.
    - `Yend`: Coordenada Y final.
    - `color`: Color para rellenar.

- `void SetWindowColor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color)` —— Define el color de un área de la pantalla.

- `void SetUWORD(uint16_t x, uint16_t y, uint16_t Color)` —— Dibuja un valor uint16_t en la pantalla.

    **Parámetros**
    - `x`: Coordenada X.
    - `y`: Coordenada Y.
    - `Color`: Color deseado.

- `void SetRotate(uint16_t Rotate)` —— Configura la rotación de la imagen.

    **Parámetros**
    - `Rotate`: ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270

- `void SetMirroring(uint8_t mirror)` —— Configura el espejo de la imagen.

    **Parámetros**
    - `mirror`: MIRROR_NONE, MIRROR_HORIZONTAL, MIRROR_VERTICAL, MIRROR_ORIGIN

- `void SetPixel(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color)` —— Dibuja un píxel.

- `void DrawPoint(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color, DOT_PIXEL Dot_Pixel, DOT_STYLE Dot_FillWay)` —— Dibuja un punto en (X, Y).

    **Parámetros**
    - `Dot_Pixel`: Tamaño del punto.
    - `Dot_FillWay`: Forma del punto (relleno o contorno).

- `void DrawLine(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, LINE_STYLE Line_Style)` —— Dibuja una línea de cualquier inclinación.

- `void DrawRectangle(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Filled)` —— Dibuja un rectángulo.

    **Parámetros adicionales**
    - `Filled`: Si es 1, el rectángulo se rellena. Si es 0, solo se dibuja el contorno.

- `void DrawCircle(uint16_t X_Center, uint16_t Y_Center, uint16_t Radius, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Draw_Fill)` —— Dibuja un círculo con el método de 8 puntos.

    **Parámetros**
    - `Draw_Fill`: 1 para círculo relleno, 0 para solo contorno.

- `void DrawString_EN(int16_t Xstart, int16_t Ystart, const char * pString, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Muestra una cadena de texto en inglés.

    **Parámetros**
    - `pString`: Cadena de texto a mostrar.
    - `Font`: Puntero a la estructura de fuente.
    - `Color_Background`: Color de fondo.
    - `Color_Foreground`: Color del texto.

- `void DrawNum(int16_t Xpoint, int16_t Ypoint, int32_t Nummber, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Muestra un número entero.

- `void DrawFloatNum(int16_t Xpoint, int16_t Ypoint, double Nummber, int8_t Decimal_Point, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— Muestra un número flotante.

    **Parámetros**
    - `Decimal_Point`: Número de decimales a mostrar.

- `void DrawImage(const unsigned char *image, int16_t xStart, int16_t yStart, int16_t W_Image, int16_t H_Image)` —— Muestra una imagen.

    **Parámetros**
    - `image`: Dirección inicial de los datos de la imagen.
    - `W_Image`: Ancho de la imagen.
    - `H_Image`: Alto de la imagen.

### Variables Default

```cpp
#define RST_PIN D0
#define DC_PIN  D3
#define BL_PIN  D6
#define CS_PIN  D1

#define LCD_WIDTH   172 //LCD width
#define LCD_HEIGHT  320 //LCD height

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

Después de descargar el archivo zip de la librería, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Selecciona el archivo zip que acabas de descargar y, si la instalación fue correcta, verás el mensaje **Library added to your libraries** en la ventana de notificaciones. Esto significa que la librería se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Ejemplo para XIAO

Después de descargar e instalar correctamente la librería, puedes encontrar dos ejemplos en la carpeta de ejemplos: **helloworld.ino** y **bgcolor.ino**.  El ejemplo **bgcolor.ino** muestra cómo cambiar el color de fondo; el color rojo está configurado por defecto. 

El ejemplo **helloworld.ino** muestra una animación con el logo de nuestra compañía, e incluye además el efecto de cambio de color de fondo que tiene el ejemplo bgcolor.


```cpp
#include <st7789v3.h>
#include "SPI.h"
#include "seeed.h"

st7789v3 Display;

void setup() {
  // put your setup code here, to run once:
  Display.SetRotate(270);
  Display.SetMirroring(MIRROR_VERTICAL);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // put your main code here, to run repeatedly:
//  Display.SetPixel(100, 100, RED);
//  Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 40, 60, 240, 47);

  Display.DrawLine(40, 50, 65, 50, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(40, 55, 80, 55, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
//  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  
  Display.DrawCircle(0, 0, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(0, 0, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(0, 0, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(0, 0, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(320, 0, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(320, 0, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(320, 0, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(320, 0, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(0, 172, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(0, 172, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(0, 172, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(0, 172, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(320, 172, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(320, 172, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(320, 172, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(320, 172, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(242, 110, 282, 110, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(267, 115, 282, 115, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawString_EN(100, 120, "By: Citric", &Font20, WHITE, BLACK);
//  Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(130, 140, 1.00, 2, &Font20, WHITE, BLACK);
}
```

Verás que el logo de Seeed Studio se muestra dinámicamente en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/5.jpg" style={{width:500, height:'auto'}}/></div>

## Solución de Problemas

### 1. ¿Por qué la pantalla no funciona cuando la vuelvo a programar mientras está conectada?

R: Si tu programa está comunicándose constantemente con la pantalla, reprogramarla puede interrumpir este proceso, causando que la pantalla falle. Puedes intentar apagar la alimentación para restaurar el funcionamiento normal de la pantalla.

### 2. ¿Qué tipo de fuente de alimentación debo usar para la pantalla?

R: La placa acepta un voltaje de entrada de 3.3V o 5V, por lo que puedes usar una fuente de alimentación dentro de este rango.

### 3. Los colores en mi pantalla no se ven bien. ¿Cuál puede ser el problema?

R: Asegúrate de que la pantalla esté correctamente inicializada en tu código y que estés usando los valores de color correctos. Si el problema persiste, puede haber un problema con la pantalla o con los cables de conexión. Revisa las conexiones o prueba con otra pantalla si tienes disponible.

## Recursos

- **[PDF]** [Esquemático](https://www.waveshare.net/w/upload/f/f5/1.47inch_LCD_Module_SchDoc.pdf)
- **[PDF]** [Datasheet](https://www.waveshare.com/w/upload/9/99/1.47inch_LCD_Datasheet.pdf)
- **[PDF]** [ST7789V3](https://www.waveshare.com/w/upload/c/c1/ST7789V3_V0.1.pdf)
- **[ZIP]** [Dibujo 3D](https://www.waveshare.com/w/upload/c/c5/1_47inch_lcd_module_asm-221122.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



