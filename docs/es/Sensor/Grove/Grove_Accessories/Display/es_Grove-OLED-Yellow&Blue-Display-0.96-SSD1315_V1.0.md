---
description: Grove - Pantalla OLED Amarilla y Azul 0.96(SSD1315) - SPI/IIC -3.3V/5V
title: Grove - Pantalla OLED Amarilla y Azul 0.96(SSD1315) - SPI/IIC -3.3V/5V
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png" alt="pir" width={600} height="auto" /></p>

El Grove - Pantalla OLED Amarilla y Azul 0.96 (SSD1315) es una pantalla de dos colores **azul y amarillo** con resolución de 128*64. Comparado con las LCD, hay muchas ventajas en los OLED (Diodo Orgánico Emisor de Luz) como auto-emisión, alta relación de contraste, contorno delgado/fino, amplio ángulo de visión y bajo consumo de energía. La pantalla funciona tanto con voltaje de alimentación de 3.3V como de 5V. Puedes usar interfaz **I2C** o **SPI** para encender la pantalla con tu microcontrolador para mostrar palabras, imágenes y lo que desees.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)
## Características

- Compatible con alimentación de 3.3V/5V
- Dirección I2C cambiable
- SPI disponible
- Bajo consumo de energía
- Píxeles de dos colores amarillo y azul 128×64
- Alto contraste, alto brillo
- Amplio rango de temperatura de operación: -40℃ ~ +85 ℃

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img//10402049_Feature-02.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Feature-02.png" /></a></p>
  </figure>
</div>


## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de entrada|3.3V / 5V|
|Voltaje de salida| 0 ~ 2.3V |
|Píxeles|128 x 64|
|Rango de temperatura|-40℃ ~ +85 ℃|
|Interfaz|I2C/SPI|

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Jugar con Arduino


**Materiales requeridos**


| Seeeduino V4.2 | Base Shield | Grove - OLED Yellow&Blue Display 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

#### Conexión de Hardware (**I2C**)

- **Paso 1.** Conecta Grove - OLED Yellow&Blue Display 0.96" al puerto **I2C** del Grove - Base Shield usando el cable Grove.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a una PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg" alt="pir" width={600} height="auto" /></p>

#### Software (**I2C**)

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.**  Navega a **Sketch** -> **Include Library** -> **Manage Libraries...** y busca e instala la librería [**U8g2**](https://github.com/olikraus/u8g2) en el **Library Manager**.

- **Paso 2.**  Abre el IDE de Arduino y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Software I2C

void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_luBIS08_tf);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Seeed!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Studio!");    // write something to the internal memory
  u8g2.drawStr(0,50,"Hello World!");    // write something to the internal memory
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(100);  
}
```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** La Pantalla OLED debería verse así:

<div align="center"><img src="./hd1.jpg" /></div>

#### **Conexión de Hardware (SPI)**

- **Paso 1.** Soldar el header macho y conectar los cables.

- **Paso 2.** Por favor sigue la línea **AMARILLA** para cortar el cable en la placa y sigue la línea **BLANCA** para soldar los paneles SPI y los paneles del medio uno por uno.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::caution
    Por favor **ten cuidado** de cortar los cables uno por uno siguiendo las líneas **AMARILLAS**, de lo contrario dañarás toda la pantalla. Te recomendamos cortar los cables bajo una lupa.
:::
**Precaución**: ¡Este es el método incorrecto para cortar cables!

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Sigue la imagen para conectar la pantalla y Seeeduino con cables.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Conecta Seeeduino a una PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software (**SPI**)

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.**  Navega a **Sketch** -> **Include Library** -> **Manage Libraries...** y Busca e Instala la librería [**U8g2**](https://github.com/olikraus/u8g2) en el **Library Manager**.

- **Paso 2.**  Abre el IDE de Arduino y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 12, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8); // Software SPI
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_luBIS08_tf);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Seeed!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Studio!");    // write something to the internal memory
  u8g2.drawStr(0,50,"Hello World!");    // write something to the internal memory
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(100);  
}
```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** La Pantalla OLED debería verse así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi2.jpg" /></div>


### Jugar Con RaspberryPi


**Materiales requeridos**


| Raspberry pi | Grove Base Hat para Raspberry Pi | Grove - Pantalla OLED Amarilla y Azul 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

#### **Conexión de Hardware(I2C)**

- **Paso 1.** Conecta la Pantalla OLED Amarilla y Azul 0.96" al puerto **I2C** del Grove - Base Hat.

- **Paso 2.** Conecta el Grove - Base Hat en la RaspberryPi.

- **Paso 3.** Conecta la RaspberryPi a una PC vía Serial o SSH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.**  Habilita I2C en RaspberryPi

```shell
sudo apt-get install -y python-smbus
sudo apt-get install -y i2c-tools
sudo raspi-config
```

Sigue las imágenes para habilitar I2C en tu RaspberryPi.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

Y luego reinicia tu RaspberryPi

```shell
sudo reboot
```

- **Paso 2.** Instalar las librerías necesarias

```shell
sudo apt-get install git
sudo apt-get install python-pip python3-pip
sudo apt-get install python-pil python3-pil
sudo pip install Adafruit-BBIO
sudo pip3 install Adafruit-BBIO
sudo pip install Adafruit-SSD1306
sudo pip3 install Adafruit-SSD1306
```

Luego clona el **Seeed_Python_SSD1315** desde GitHub

```shell
git clone https://github.com/IcingTomato/Seeed_Python_SSD1315.git
```

Podemos usar `stats.py` para la demostración.

```shell
cd ~/Adafruit_Python_SSD1306/example/
sudo python stats.py
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg" alt="pir" width={600} height="auto" /></p>

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
- Escribe directamente en la pantalla. No se requiere buffer en el microcontrolador.

Aquí se proporciona la [**wiki de la Biblioteca U8g2**](https://github.com/olikraus/u8g2/wiki) así como la página de [Referencia de API U8g2](https://github.com/olikraus/u8g2/wiki/u8g2reference).

## FAQ

**P1#** ¿El ejemplo no funciona con otras placas?

**R1:** U8g2 tiene diferentes modos al inicializar, en lugar de I2C por hardware, también podría usar I2C por software. Si no funciona, por favor intenta usar I2C por Software. Para más información por favor visita [u8g2](https://github.com/olikraus/U8g2_Arduino). Algunos ejemplos e introducciones breves también se proporcionan [aquí](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0).

## Visor de Esquemáticos en Línea


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Archivo de esquemático Grove - OLED Yellow&Blue Display 0.96 (SSD1315)_V1.0](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip)
- **[PDF]** [Hoja de datos del Módulo OLED](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/0.96-30PIN-ZJY096-2864KSWPG01.pdf)
- **[PDF]** [Hoja de datos SSD1315](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/SSD1315.pdf)

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