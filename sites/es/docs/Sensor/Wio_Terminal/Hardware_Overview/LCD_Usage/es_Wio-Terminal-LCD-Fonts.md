---
title: Fuentes
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Fonts/
slug: /es/Wio-Terminal-LCD-Fonts
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Usando diferentes Fuentes

Este repositorio describe cómo usar diferentes fuentes gratuitas (GNU FreeFonts) incluidas en la biblioteca. ¡Puedes seguir esta guía para elegir tu fuente favorita para mostrar en el Wio Terminal!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2309.jpeg.jpg" /></div>

## Fuentes Disponibles

Hay tres fuentes principales que se pueden usar en esta biblioteca incluyendo `Serif`, `Sans` y `Mono`. Cada fuente está disponible con pocos estilos (**negrita**, *cursiva*, oblicua) y tamaños de fuente de 9pt, 12pt, 18pt y 24pt.

## Usando Fuentes en Wio Terminal

Para usar estas fuentes fácilmente, se recomienda encarecidamente copiar el archivo `Free_Fonts.h` del [repositorio Seeed_Arduino_LCD](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/#installing-the-tft-lcd-library-separately). Asumimos que ya has descargado el repositorio y la ruta es `~/Arduino/libraries/Seeed_LCD_master/examples/320 x 240/All_Free_Fonts_Demo`, puedes adjuntar este archivo de cabecera a la ubicación de tu sketch. Esto haría que referenciar las fuentes sea mucho más fácil.

Para ahorrar mucho tipeo, cada fuente puede ser referenciada en el sketch de tres maneras, ya sea con:

1.Nombre del archivo de fuente con el `&` al frente, tal como: `&FreeSansBoldOblique24pt7b`.

#### Ejemplo del Método 1

```cpp
tft.setFreeFont(&FreeSansBoldOblique24pt7b);
```

2.FF# donde # es un número determinado mirando la lista en el `Free_Fonts.h`

#### Ejemplo del Método 2

```cpp
tft.setFreeFont(FF32);
```

3.Una abreviación del nombre del archivo. Mira la lista a continuación para ver las abreviaciones usadas.

#### Ejemplo del Método 3

```cpp
tft.setFreeFont(FSSBO24)
```

Donde las letras significan:

- F = Fuente gratuita
- M = Mono
- SS = Sans Serif (doble S para distinguir de las fuentes serif)
- S = Serif
- B = Negrita
- O = Oblicua (letra O no cero)
- I = Cursiva
- No = tamaño de punto, ya sea 9, 12, 18 o 24

## Código de ejemplo usando diferentes fuentes

```cpp
#include"TFT_eSPI.h"
#include"Free_Fonts.h" //incluir el archivo de cabecera
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK); //Fondo negro
  
  tft.setFreeFont(&FreeSansBoldOblique12pt7b); //seleccionar Free, Sans, Bold, Oblique, 12pt.
  tft.drawString("Sans Serif 12pt",70,80);//imprime cadena en (70,80)

  tft.setFreeFont(FF10); //seleccionar Free, Mono, Oblique, 12pt.
  tft.drawString("Mono 12pt",70,110);//imprime cadena en (70,110)

  tft.setFreeFont(FS12); //seleccionar Free, Serif, 12pt.
  tft.drawString("Serif 12pt",70,140);//imprime cadena en (70,140)
  
}
void loop() {}
```

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>