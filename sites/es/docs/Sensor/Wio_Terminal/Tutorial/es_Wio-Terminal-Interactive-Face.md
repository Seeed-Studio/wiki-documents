---
description: Demostración de Caras Interactivas de Wio Terminal
title: Demostración de Caras Interactivas de Wio Terminal
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Interactive-Face
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Caras Emoji Interactivas de Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" /></div>

## Descripción General

Este ejemplo demuestra cómo mostrar múltiples imágenes (ojos) en la pantalla LCD a través de la tarjeta SD (formato BMP), y con el uso de los botones integrados y el giroscopio para interactuar con los usuarios.

### Características

- Botón Izquierdo: Imagen Anterior (ojos)

- Botón Central: Animaciones

- Botón Derecho: Siguiente Imagen (ojos)

- Giroscopio: Ojos moviéndose según la orientación de la placa

## Librerías de Arduino necesarias

- Instala la librería de pantalla LCD `Seeed_Arduino_LCD`, por favor visita [Wio Terminal LCD](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/) para más información.

- Instala la librería de tarjeta SD `Seeed_Arduino_FS`, Por favor visita [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) para más información.

- Instala la librería del acelerómetro integrado `Seeed_Arduino_LIS3DHTR`, Por favor visita [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta) para más información.

- Instala la librería `RawImage.h`, Por favor visita [Loading Images](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Loading-Image/) para más información.

## Instrucciones de Arduino

1. Descarga el archivo [`Emoji_face.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Emoji_face.zip) y `RawImage.h` y súbelos a tu Wio Terminal a través del `IDE de Arduino`. Asegúrate de haber instalado todas las librerías.

2. Arrastra el archivo `face` (incluyendo todas las imágenes), y guárdalas en la tarjeta SD.

3. ¡Comienza a mover tu Wio Terminal e interactúa!

## Código

- **Para inicializar la pantalla LCD**

```Cpp
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(3);
  ...
}
```

- **Para inicializar la tarjeta SD**

```Cpp
void setup() {
  ...
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
      while (1);
  }
  ...
}
```

- **Para inicializar el Acelerómetro integrado**

```Cpp
LIS3DHTR<TwoWire>  lis;

void setup () {
  ...
  lis.begin(Wire1);
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Tasa de salida del Acelerómetro
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Selección de escala
  ...
}

void loop() {
  ...
  float x_raw = lis.getAccelerationX(); //Lee los valores brutos del eje x del acelerómetro
  float y_raw = lis.getAccelerationY(); //Lee los valores brutos del eje y del acelerómetro
  ...
}
```

- **Para inicializar el Botón integrado**

```Cpp
void setup() {
  ...
  pinMode(BUTTON_1, INPUT); //botón izquierdo
  pinMode(BUTTON_2, INPUT); //botón central
  pinMode(BUTTON_3, INPUT); //botón derecho
  ...
}
```

- **Para inicializar Imagen y Dibujar Imagen**

En este ejemplo, las imágenes no son de tamaño completo 320x240, así que al dibujar, es necesario especificar dónde comienza la imagen. Las imágenes se cargan primero en el búfer para evitar el retraso de imagen al agitar el Wio Terminal.

Para más información, por favor visita [Loading Images](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Loading-Image/).

```Cpp
void loop() {
  ...
  Raw8 * eyes = newImage<uint8_t>(eye[eye_count]); //inicializando imágenes de 8 bits
  writeToBuffer(x_axis, y_axis, eyes); //escribiendo al búfer primero, ver código completo para verificar esta función
  ...
}
```