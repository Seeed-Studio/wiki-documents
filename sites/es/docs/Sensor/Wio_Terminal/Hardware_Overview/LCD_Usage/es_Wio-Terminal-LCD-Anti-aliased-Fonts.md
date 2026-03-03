---
title:  Fuentes Suaves
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Anti-aliased-Fonts./
slug: /es/Wio-Terminal-LCD-Anti-aliased-Fonts
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Mostrando Fuentes Anti-aliased

Este repositorio demuestra cómo usar fuentes Anti-aliased en Wio Terminal (**es decir, mostrar caracteres japoneses, caracteres griegos y otros glifos UCS-2**)! Además, las fuentes suaves también se pueden usar para mostrar caracteres normales en inglés con tu fuente favorita de tu computadora.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117131650.gif" /></div>

## Instalación de Librerías

### Instalando la librería de tarjeta SD para Wio Terminal

- visita [Resumen del Sistema de Archivos](https://wiki.seeedstudio.com/es/Wio-Terminal-FS-Overview/)

### Instalando la Librería TFT LCD Para Wio Terminal

- visita [Resumen de TFT LCD](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/)

## Generar archivo de fuente vlw

Aquí se demuestra cómo generar un archivo de fuente vlw que se puede usar para fuente suave en Wio Terminal.

### Paso 1

Descarga el software [**Processing**](https://processing.org/) y descarga según tu sistema operativo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117095509.jpg" /></div>

### Paso 2

Abre **Processing**, y navega a `Tools` -> `Create Font...`

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100029.jpg" /></div>

### Paso 3

Aparecerá una ventana **Create Font**. Puedes elegir la fuente disponible de tu computadora. Cambia el tamaño de fuente, y haz clic en `Characters...`. También puedes cambiar el nombre del archivo vlw.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100808.jpg" /></div>

### Paso 4

Aparecerá una ventana **Character Selector**, y podrás elegir los Bloques de Caracteres Unicode de idioma específico (es decir, Basic Latin en este caso). ***Para caracteres asiáticos, se recomienda usar bloques unicode de categoría CJK Compatibility o CJK.*** Haz clic en `OK` para guardar la configuración de fuente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117104728.jpg" /></div>

### Paso 5

Navega a `File` -> `Save` y guarda el archivo sketch en tu unidad local en tu computadora. ¡Ahora, hemos generado el archivo de fuente vlw!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117105224.jpg" /></div>

## Almacenando en la Tarjeta SD

Una vez generado el archivo de fuente vlw, puedes encontrar el archivo vlw dentro de la carpeta **`data`** dentro del archivo sketch que guardaste en el paso anterior.

Ahora, copia el archivo de fuente vlw en la tarjeta SD y vuelve a poner la tarjeta SD en Wio Terminal.

## Configurando la Librería LCD

Por defecto, la opción de fuente suave para la Librería LCD está **desactivada** para ahorrar recursos en Wio Terminal. **Por lo que necesita ser configurada para habilitar fuente suave en Wio Terminal.**

Navega a las carpetas de librerías de Arduino (**libraries**) -> **Seeed_Arduino_LCD** y abre **`User_Setup.h`** con un editor. Busca **`#define SMOOTH_FONT`** y descomenta la línea como sigue:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/smoothFont.png" /></div>

Ahora has habilitado fuente suave en Wio Terminal, ¡puedes mostrar cualquier fuente o caracteres que te gusten!

## Mostrando

- **Para cargar fuente desde tarjeta SD a Wio Terminal:**

```cpp
void loadFont(String fontName);
```

donde `fontName` es el nombre del archivo de fuente vlw.

- **Para mostrar todos los caracteres dentro de vlw en pantalla:**

```cpp
void showFont(uint32_t td);
```

donde `td` es el tiempo de retraso entre pantallas mientras se muestran todos los caracteres.

- **Para descargar fuentes:**

```cpp
void unloadFont();
```

Para mostrar caracteres en pantalla, puedes usar las funciones igual que en las librerías tft usando **`tft.println()`**. Además, puedes usar otras funciones como **`tft.setCursor()`** y **`tft.setTextColor`** para cambiar la posición y color de la visualización de caracteres.

**Nota**: Por favor verifica el `User_Setup.h` en la librería LCD y asegúrate de que `#define SMOOTH_FONT` esté descomentado.

## Código Completo

Por favor descarga el código completo y los archivos vlw de ejemplo [aquí](https://files.seeedstudio.com/wiki/Wio-Terminal/res/JanpaneseFonts.zip).

```cpp
#include<SPI.h>
#include "Seeed_FS.h"
#include "SD/Seeed_SD.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;

void setup() {
    tft.begin();
    Serial.begin(115200);
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK); //Black background

    while(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)){
        Serial.println("SD card error!\n");
        while(1);
  }
  delay(1000);

  tft.loadFont("Apple-Chancery-24");
  // Show all characters on screen with 2 second (2000ms) delay between screens
  tft.showFont(2000); // Note: This function moves the cursor position!

  tft.setTextColor(TFT_RED,TFT_BLACK);
  tft.setCursor(0,0);

  tft.println("Konnichiwa");
  tft.println("Sayonara");
  tft.println();
  tft.unloadFont();

  tft.loadFont("Latin-Hiragana-24");
  tft.setTextColor(TFT_GREEN,TFT_BLACK);
  tft.println("こんにちは");
  tft.println("さようなら");
  tft.unloadFont();
  
}
void loop(){}
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