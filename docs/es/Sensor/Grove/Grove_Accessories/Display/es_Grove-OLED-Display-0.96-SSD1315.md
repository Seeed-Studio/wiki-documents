---
description: Grove - Pantalla OLED 0.96" (SSD1315)
title: Grove - Pantalla OLED 0.96" (SSD1315)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-OLED-Display-0.96-SSD1315
last_update:
  date: 1/9/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg" alt="pir" width={600} height="auto" /></p>

El Grove - Pantalla OLED 0.96" (SSD1315) es un módulo de matriz de pantalla pasiva monocromática (blanca) de 128×64 píxeles con interfaz Grove I2C.

Gracias al nuevo chip SSD1315, puede funcionar con 3.3V, por lo que eliminamos el costoso circuito elevador DC-DC. Y con el circuito de cambio de nivel integrado, el nuevo Grove - Pantalla OLED 0.96" puede funcionar con plataformas de 3.3V y 5V. Es decir, puedes usarlo fácilmente como una pantalla OLED Arduino, pantalla OLED Raspberry Pi, etc.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)
## Características

- Compatible con 3.3V/5V
- Dirección I2C modificable
- Bajo consumo de energía
- Monocromática (blanca) 128×64 píxeles
- Alto contraste, alto brillo
- Amplio rango de temperatura de funcionamiento: -40℃ ~ +85 ℃


## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de entrada|3.3V / 5V|
|Voltaje de salida| 0 ~ 2.3V |
|Píxeles|128 x 64|
|Rango de temperatura|-40℃ ~ +85 ℃|
|Interfaz|I2C/Digital|

## Descripción General del Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpgg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpg" /></a></p>
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


| Seeeduino V4.2 | Base Shield | Grove - OLED Display 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

#### Conexión de Hardware

- **Paso 1.** Conecta Grove - TDS Sensor al puerto **I2C** del Grove - Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a una PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.**  Navega a **Sketch** -> **Include Library** -> **Manage Libraries...** y busca e instala la librería **`U8g2`** en el **Library Manager**.

- **Paso 2.**  Abre el Arduino IDE y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif


U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);  // High speed I2C

// U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();					// clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);	// choose a suitable font
  u8g2.drawStr(0,10,"Hello World!");	// write something to the internal memory
  u8g2.sendBuffer();					// transfer internal memory to the display
  delay(1000);  
}
```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** La Pantalla OLED debería verse así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/result.png" /></div>


## Introducción a la Biblioteca U8g2

U8g2 es una biblioteca de gráficos monocromáticos para dispositivos embebidos. U8g2 soporta OLEDs y LCDs monocromáticos, que incluyen nuestro chip SSD1315.

La biblioteca de Arduino U8g2 puede instalarse desde el administrador de bibliotecas del IDE de Arduino. U8g2 también incluye la biblioteca U8x8:

**U8g2**

- Incluye todos los procedimientos gráficos (dibujo de líneas/cajas/círculos).
- Soporta muchas fuentes. (Casi) sin restricción en la altura de la fuente.
- Requiere algo de memoria en el microcontrolador para renderizar la pantalla.

**U8x8**

- Dispositivo de salida de texto únicamente (caracteres).
- Solo se permiten fuentes que encajen en una cuadrícula de píxeles de 8x8.
- Escribe directamente a la pantalla. No se requiere buffer en el microcontrolador.

Aquí se proporciona la [**wiki de la Biblioteca U8g2**](https://github.com/olikraus/u8g2/wiki) así como la página de [Referencia de API U8g2](https://github.com/olikraus/u8g2/wiki/u8g2reference).

## FAQ

**P1#** ¿El ejemplo no funciona con otras placas?

**R1:** El U8g2 tiene diferentes modos al inicializar, en lugar de I2C por hardware, también podría usar I2C por software. Si no funciona, por favor intenta usar I2C por Software. Para más información por favor visita [u8g2](https://github.com/olikraus/U8g2_Arduino). Algunos ejemplos e introducciones breves también se proporcionan [aquí](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0).

## Visor de Esquemático en Línea


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Archivo de esquemático Grove - OLED Display 0.96"](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip)
- **[PDF]** [Hoja de datos del Módulo OLED](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/OEL%20Display%20Module.pdf)

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