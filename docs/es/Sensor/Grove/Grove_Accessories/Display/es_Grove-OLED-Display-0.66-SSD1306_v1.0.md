---
description: Grove - Pantalla OLED 0.66" (SSD1306)
title: Grove - Pantalla OLED 0.66" (SSD1306)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-OLED-Display-0.66-SSD1306_v1.0
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" alt="pir" width={600} height="auto" /></p>

Como una nueva versión, el Grove - Pantalla OLED 0.66" (SSD1306) tiene una pantalla más pequeña comparada con otras pantallas OLED como Grove - Pantalla OLED 0.96" (SSD1315). Y aún así puede mostrar con resolución de 64×48 y preserva el rendimiento como las otras, por ejemplo, alto brillo, bajo consumo de energía e interfaz Grove en la parte posterior, etc.

Puedes usar la interfaz I2C para encender la mini pantalla con tu microcontrolador para mostrar palabras, imágenes o lo que quieras. La pantalla de 0.66" te ayuda a mostrar la información en un lugar más pequeño y puedes usarla como pantalla OLED de Arduino, pantalla OLED de Raspberry Pi, etc.

Esta Pantalla OLED Grove soporta la biblioteca de pantallas monocromáticas U8g2 escrita por Olikraus. La biblioteca es tan conveniente y bien compatible que puede soportar SSD1306 y otros chips como SSD1315. ¡Así que consigue uno ahora y diviértete con esta pequeña pantalla!
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)

## Características

- Basado en SSD1306, recortado a resolución de 64×48 (Monocromático)
- Tamaño ultra-pequeño: 20 * 20mm
- Dirección I2C cambiable
- Fuente de alimentación compatible con 3.3V/5V
- Alto contraste, alto brillo
- Bajo consumo de energía
- Amplio rango de temperatura de operación: -40℃ ~ +85 ℃
- Diseño amigable para el usuario: interfaz Grove en la parte posterior

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de entrada|3.3V / 5V|
|Voltaje de salida| 0 ~ 2.3V |
|Píxeles|64 x 48|
|Rango de temperatura|-40℃ ~ +85 ℃|
|Interfaz|I2C|

## Descripción General del Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" /></a></p>
  </figure>
</div>

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - OLED Display 0.66"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/1629856731(1).png" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

#### Conexión de Hardware

- **Paso 1.** Conecta Grove - TDS Sensor al puerto **I2C** de Grove - Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.**  Navega a **Sketch** -> **Include Library** -> **Manage Libraries...** y busca e instala la librería **`U8g2`** en el **Library Manager**.

- **Paso 2.**  Abre el IDE de Arduino y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // All Boards without Reset of the Display

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(32,30,"Hello \n");
  u8g2.drawStr(32,45,"World!");
  u8g2.sendBuffer();
  delay(1000);  
}
```

Nota: Debes saber que la pantalla Grove - OLED Display 0.66" (SSD1306) está basada en una pantalla de resolución 128×64. Cuando quieras mostrar contenido usando el controlador U8g2 SSD 128*64, puede que necesites iniciar el punto en (31,16) en lugar de (0,0). El rango va desde (31,16) hasta (95,63).

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** La Pantalla OLED debería verse así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino2.png" /></div>

## Introducción a la Librería U8g2

U8g2 es una librería de gráficos monocromáticos para dispositivos embebidos. U8g2 soporta OLEDs y LCDs monocromáticos, que incluyen nuestro chip SSD1306.

La librería de Arduino U8g2 puede instalarse desde el administrador de librerías del IDE de Arduino. U8g2 también incluye la librería U8x8:

**U8g2**

- Incluye todos los procedimientos gráficos (dibujo de líneas/cajas/círculos).
- Soporta muchas fuentes. (Casi) sin restricción en la altura de la fuente.
- Requiere algo de memoria en el microcontrolador para renderizar la pantalla.

**U8x8**

- Dispositivo de salida de texto únicamente (caracteres).
- Solo se permiten fuentes que encajen en una cuadrícula de píxeles de 8x8.
- Escribe directamente a la pantalla. No se requiere buffer en el microcontrolador.

Aquí se proporciona la [**wiki de la Librería U8g2**](https://github.com/olikraus/u8g2/wiki) así como la página de [Referencia de API U8g2](https://github.com/olikraus/u8g2/wiki/u8g2reference).

## FAQ

**P1#** ¿El ejemplo no funciona con otras placas?

**R1:** U8g2 tiene diferentes modos al inicializar, en lugar de I2C por hardware, también podría usar I2C por software. Si no funciona, por favor intenta usar I2C por Software. Para más información por favor visita [u8g2](https://github.com/olikraus/U8g2_Arduino). Algunos ejemplos e introducciones breves también se proporcionan [aquí](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0).

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo Grove - OLED Display 0.66 (SSD1306)_v1.0](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar)
- **[ZIP]** [Hoja de Datos SSD1306](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/SSD1306-Datasheet.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
