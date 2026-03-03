---
title: Histograma
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Histogram/
slug: /es/Wio-Terminal-LCD-Histogram
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Histograma

Este repositorio describe cómo dibujar histogramas en Wio Terminal. Similar a la biblioteca de gráficos de líneas, puedes usar esto para mostrar valores de sensores en bruto para visualizar lecturas en pantalla. Esta biblioteca es muy flexible y se puede modificar según tus necesidades.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200114131505.png" /></div>

## Instalación de Bibliotecas

### Instalando las Bibliotecas de Histograma

- Visita [Seeed_Arduino_Histogram](https://github.com/Seeed-Studio/Seeed_Arduino_Histogram) y descarga todo el repositorio a tu unidad local.

- Ahora, la biblioteca puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_Histogram` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Comenzando

### Para Inicializar el Dibujo de Histograma

Incluye la biblioteca de Histograma e inicializa el histograma como sigue:

```cpp
#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>
#include"Histogram.h"

TFT_Histogram histogram=TFT_Histogram(); //Initializing Histogram
TFT_eSPI tft = TFT_eSPI(); //Initializing TFT

void setup(void) {
  tft.init();
  histogram.initHistogram(&tft);
  ...
}
```

### Creando Columnas en el Histograma

Para crear columnas en el histograma:

```cpp
void formHistogram(String label,int NO,double Histogram_value,int Histogram_WIDTH,uint32_t colour);
```

donde `label` es el nombre de la columna bajo su columna, `NO` es la etiqueta numérica de la columna del histograma, `Histogram_value` es el valor de la columna del histograma, `Histogram_WIDTH` es el ancho de la columna del histograma y `colour` es el color de la columna del histograma.

### Para Mostrar el Histograma

Para mostrar el Histograma:

```cpp
void showHistogram();
```

### Cambiando los Valores de las Columnas

Para cambiar los valores de las columnas existentes:

```cpp
void changeParam(uint8_t NO, String lable, float Histogram_value, uint32_t colour);
```

donde `NO` se refiere a la etiqueta numérica de la columna del histograma (qué columna cambiar).

### Eliminando una Columna

Para eliminar una columna del histograma:

```cpp
void deleteCylinder(uint8_t NO);
```

donde `NO` se refiere a la etiqueta numérica de la columna del histograma.

### Agregando Gráfico de Líneas al Histograma

Agregando gráfico de líneas:

```cpp
void lineChart(uint32_t colour);
```

donde `color` es el color del gráfico de líneas.

### Ocultando el Eje del Histograma

```cpp
void notShowAxis();
```

### Otras funciones útiles

Para más funciones útiles de la biblioteca de histograma, por favor consulta el **`Histogram.h`**. Además, también proporciona conjuntos de ejemplos así como una demostración de función completa que se puede encontrar en la carpeta `examples`.

## Código de Ejemplo

```cpp
#include <TFT_eSPI.h> //Hardware-specific library
#include <SPI.h>
#include"Histogram.h" //include histogram library

TFT_Histogram histogram=TFT_Histogram(); //Initializing tft and histogram
TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  histogram.initHistogram(&tft);
  histogram.formHistogram("a",1,50.55,40,TFT_RED); //Column 1
  histogram.formHistogram("b",2,20,40,TFT_BLACK); //Column 2
  histogram.formHistogram("c",3,100,50,TFT_GREEN); //Column 3
  histogram.formHistogram("d",4,53,50,TFT_BLUE); //Column 4
  histogram.formHistogram("e",5,133,30,TFT_YELLOW); //Column 5
  histogram.formHistogram("f",6,53,50,TFT_ORANGE); //Column 6
  histogram.formHistogram("g",7,80,50,TFT_PINK); //Column 7

  histogram.showHistogram(); //show histogram
  delay(3000);

  histogram.changeParam(6,"F",55,TFT_PINK);//change column 6
  histogram.deleteCylinder(7);//delete colum 7
  histogram.lineChart(TFT_BLACK);

  delay(2000);
  histogram.notShowAxis();//hiding the axis of histogram
}
void loop() {

}
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