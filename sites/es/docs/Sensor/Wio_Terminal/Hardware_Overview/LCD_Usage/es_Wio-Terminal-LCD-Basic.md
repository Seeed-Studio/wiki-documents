---
title: Básicos de LCD
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /es/Wio-Terminal-LCD-Basic
last_update:
  date: 01/11/2022
  author: gunengyu
---

# Básicos de la Pantalla TFT LCD

## Sistemas de Coordenadas de Píxeles

Una imagen digital 2-D está compuesta por filas y columnas de píxeles. Un píxel en la imagen se especifica indicando en qué columna y en qué fila se encuentra el píxel. En términos simples, un píxel puede ser identificado por un par de enteros que proporcionan el número de columna y el número de fila. Por ejemplo, el píxel con coordenadas (4,7) estaría ubicado en la columna 4 y la fila 7.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/grids.jpg" /></div>

Convencionalmente, las columnas se numeran desde la parte superior izquierda hacia la derecha, comenzando desde cero, pero en algunos casos, también puede comenzar desde otras esquinas (configurando la rotación).

## Modelo de color de 8 bits y 16 bits

Los píxeles también se expresan en forma de color, por lo que también es mejor cubrir algunos modelos de color. Los modelos de color de 8 bits y 16 bits son buenos para que los MCUs trabajen con ellos, así que este es un buen comienzo. Estos dos modelos de color consisten en 3 componentes de color - **Rojo, Verde y Azul**. Dependiendo del modelo de color, estos 3 componentes de color se almacenarán en una variable de 8 bits o 16 bits.

### Color de 8 bits

| Bit  | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Datos** | Rojo   | Rojo   | Rojo   | Verde   | Verde   | Verde   | Azul   | Azul   |

### Color de 16 bits

| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Datos** | Rojo   | Rojo   | Rojo   | Rojo   | Rojo   | Verde   | Verde   | Verde   | Verde   | Verde   | Verde   | Azul   | Azul   | Azul   | Azul   | Azul   |

Aquí hay algunos colores de ejemplo básicos predefinidos (16 bits) incluidos en la biblioteca LCD:

```cpp
#define TFT_BLACK       0x0000      /*   0,   0,   0 */
#define TFT_NAVY        0x000F      /*   0,   0, 128 */
#define TFT_DARKGREEN   0x03E0      /*   0, 128,   0 */
#define TFT_DARKCYAN    0x03EF      /*   0, 128, 128 */
#define TFT_MAROON      0x7800      /* 128,   0,   0 */
#define TFT_PURPLE      0x780F      /* 128,   0, 128 */
#define TFT_OLIVE       0x7BE0      /* 128, 128,   0 */
#define TFT_LIGHTGREY   0xC618      /* 192, 192, 192 */
#define TFT_DARKGREY    0x7BEF      /* 128, 128, 128 */
#define TFT_BLUE        0x001F      /*   0,   0, 255 */
#define TFT_GREEN       0x07E0      /*   0, 255,   0 */
#define TFT_CYAN        0x07FF      /*   0, 255, 255 */
#define TFT_RED         0xF800      /* 255,   0,   0 */
#define TFT_MAGENTA     0xF81F      /* 255,   0, 255 */
#define TFT_YELLOW      0xFFE0      /* 255, 255,   0 */
#define TFT_WHITE       0xFFFF      /* 255, 255, 255 */
#define TFT_ORANGE      0xFDA0      /* 255, 180,   0 */
#define TFT_GREENYELLOW 0xB7E0      /* 180, 255,   0 */
```

## Inicialización de la Pantalla TFT LCD

Para inicializar la pantalla TFT LCD en Wio Terminal:

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(r);
    digitalWrite(LCD_BACKLIGHT, HIGH); // encender la retroiluminación
  ...
}
```

donde r es la rotación de la pantalla TFT LCD (de 0 a 3), indicando desde qué esquina comenzará.

### Código de ejemplo

Este ejemplo inicializa la pantalla TFT LCD en Wio Terminal y llena la pantalla con color rojo.

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // llena toda la pantalla con color rojo
}

void loop() {

}
```

## Apagar la Retroiluminación LCD

Para apagar la retroiluminación LCD de Wio Terminal, simplemente define el pin de control de retroiluminación LCD `72Ul` y ponlo en `HIGH` para encender y ponlo en `LOW` para apagar:

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;
#define LCD_BACKLIGHT (72Ul) // Pin de Control de LCD

void setup() {
  // pon tu código de configuración aquí, para ejecutar una vez:
  
    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_RED);

    delay(2000);
    // Apagando la retroiluminación LCD
    digitalWrite(LCD_BACKLIGHT, LOW);
    delay(2000);
    // Encendiendo la retroiluminación LCD
    digitalWrite(LCD_BACKLIGHT, HIGH);
}

void loop() {
  // pon tu código principal aquí, para ejecutar repetidamente:

}
```

## Controlando el Brillo de la Retroiluminación LCD

Este ejemplo fue escrito por [**Kenta IDA**](https://github.com/ciniml) y todos los créditos van para Kenta IDA.

**PASO 1.** **Descarga el [repositorio](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook) aquí.**

- Bajo la ubicación `examples/WioTerminal_BackLight`.

**PASO 2.** **Sube el código.**

Sube el `lcd_backlight_control.ino` a Wio Terminal y verás el cambio de brillo en el LCD.

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