---
title: Cargando Imagen
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Loading-Image/
slug: /es/Wio-Terminal-LCD-Loading-Image
last_update:
  date: 01/11/2022
  author: gunengyu
---


# cargando Imágenes

Este repositorio describe cómo cargar y mostrar imágenes desde la tarjeta SD a la pantalla TFT LCD en Wio Terminal. ¡Esta puede ser una implementación muy útil para tu diseño y puede usarse en varios lugares!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg" /></div>

## Instalación de Librerías

### Instalando la librería de tarjeta SD para Wio Terminal

- visita [Resumen del Sistema de Archivos](https://wiki.seeedstudio.com/es/Wio-Terminal-FS-Overview/)

### Instalando la Librería TFT LCD Para Wio Terminal

- visita [Resumen de TFT LCD](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/)

## Configuración del formato de imagen

### PASO 1: Preparar la imagen
:::note
    Necesitamos convertir el formato de imagen a formato BMP de 24 bits de Windows y poner la imagen en la configuración de carpeta correcta lista. Recomendamos usar `Microsoft paint` para hacerlo.
:::
 - **Paso 1-1:** Usar `Microsoft paint` para redimensionar la imagen para que se ajuste al tamaño máximo de píxeles de tu área de visualización de pantalla

 - **Paso 1-2:** Luego guardar la imagen haciendo clic en `Guardar como` seguido de `Imagen BMP` luego desde el menú desplegable de tipo de archivo seleccionar archivo `mapa de bits de 24 bits (.bmp)`.
  
 - **Paso 1-3:** Crear una carpeta con nombre `bmp` y guardar tus imágenes en formato `.bmp` de Windows dentro de esta carpeta.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png" /></div>

### PASO 2: Convertir la imagen `mapa de bits de 24 bits` al formato `bmp de 8 bits o 16 bits` legible por microcontrolador
:::note
    Para mostrar imágenes bmp en nuestro sistema embebido, necesitamos deshacernos de alguna información (archivos de cabecera) en nuestro formato bmp de Windows. Escribimos un script de python para hacer esto por nosotros, así que por favor elige una de las siguientes dos opciones para convertir tus imágenes.
:::
#### Opción 1: Usando Ejecutables Precompilados de Windows (Solo Windows):

- **Paso 2-1-1:** Hemos preparado el ejecutable usando el paquete [Pyinstaller](https://pyinstaller.org/en/stable/), puedes descargar el ejecutable simplemente haciendo clic en [bmp_converter.exe](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe)

- **Paso 2-1-2:** Poner el `bmp_converter.exe` descargado en el mismo directorio con la `carpeta bmp` creada en el `Paso 1-3`.

- **Paso 2-1-3:** Hacer doble clic para ejecutar el `bmp_converter.exe`, luego en la `terminal` emergente seleccionar una de las dos opciones: "Ingresa `1` para conversión de color de 8 bits; Ingresa `2` para conversión de color de 16 bits".

#### Opción 2: Usando Código Fuente de Python (para multiplataforma)
:::note
    Deberías tener python instalado en tu computadora
:::
- **Paso 2-2-1:** Descargar el script de Python [bmp_converter.py](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py) , y guardarlo en el mismo directorio con la `carpeta bmp` creada en el `Paso 1-3`.

- **Paso 2-2-2:** Abrir `cmd` o `terminal` para ejecutar el script de Python. Primero, `cd` al directorio que guardó el `bmp_converter.py` y la `carpeta bmp`, luego ejecutar el script de Python.

- **Paso 2-2-3:** Dos opciones: Ingresa `1` para conversión de color de 8 bits; Ingresa `2` para conversión de color de 16 bits

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif" /></div>

### PASO 3: Imagen lista

Ahora, puedes encontrar las imágenes `.bmp` convertidas dentro de otra carpeta con nombre `rgb332`(8-bit) o `rgb565`(16-bit) en la carpeta bmp.

## Comenzando

### Instalar la librería [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h)

Esta librería se usa para hacer que cargar y mostrar imágenes sea mucho más fácil. Descarga el [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h) y adjunta este archivo de cabecera a la ubicación de tu sketch.

### Inicialización de Imagen en Arduino

- **Para mostrar imágenes en la pantalla**

```Cpp
//Para dibujar imagen de color de 8 bits en pantalla, comenzando desde el punto (x, y):
drawImage<uint8_t>("ruta a imagen de tarjeta sd", x, y);

//Para dibujar imagen de color de 16 bits en pantalla, comenzando desde el punto (x, y):
drawImage<uint16_t>("ruta a imagen de tarjeta sd", x, y);
```

- **Para inicializar imagen (No necesario si usas la función drawImage anterior)**

```Cpp
//cuando uses color de 8 bits, inicializa la imagen siguiendo esto:
Raw8 * img8 = newImage<uint8_t>("ruta a imagen de tarjeta sd");

//cuando uses color de 16 bits, inicializa la imagen siguiendo esto:
Raw16 * img16 = newImage<uint16_t>("ruta a imagen de tarjeta sd");
```

## Código de ejemplo

```cpp

# include"TFT_eSPI.h"
# include "Seeed_FS.h" //Incluyendo librería de tarjeta SD
# include"RawImage.h"  //Incluyendo librería de procesamiento de imágenes
TFT_eSPI tft;

void setup() {
    //Inicializar tarjeta SD
    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    tft.begin();
    tft.setRotation(3);

    drawImage<uint8_t>("test.bmp", 0, 0); //Mostrar esta imagen de 8 bits en tarjeta sd desde (0, 0)

}

void loop() {
}

```

## FAQs

**Si ocurre `ImportError: No module named PIL`:**

- Instala el módulo de python ingresando `pip install pillow` en el cmd o terminal
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