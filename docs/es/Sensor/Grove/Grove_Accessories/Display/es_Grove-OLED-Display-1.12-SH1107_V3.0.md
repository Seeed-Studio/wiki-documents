---
description: Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V
title: Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-OLED-Display-1.12-SH1107_V3.0
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" />
</div>


El Grove - OLED Display 1.12 V3.0 (SH1107) es una pantalla **monocromática** con resolución de 128*128. Comparado con las LCD, hay muchas ventajas en los OLED (Diodo Orgánico Emisor de Luz) como auto-emisión, alta relación de contraste, perfil delgado/fino, amplio ángulo de visión y bajo consumo de energía. La pantalla funciona tanto con voltaje de alimentación de 3.3V como de 5V. Puedes usar interfaz **I2C** o **SPI** para encender la pantalla con tu microcontrolador para mostrar palabras, imágenes y lo que desees.

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)
## Características

- Compatible con alimentación de 3.3V/5V
- Dirección I2C cambiable
- SPI disponible
- Bajo consumo de energía
- 128×128 píxeles monocromáticos
- Alto contraste, alto brillo
- Amplio rango de temperatura de operación: -40℃ ~ +85 ℃


## Versión
  ---
  | Versión del Producto              | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
  |------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
  |Grove - OLED Display 1.12" V1.0 | Inicial                                                                                                                                                                                    | Mar 2012      |
  |Grove - OLED Display 1.12" V2.1 | Cambio del IC controlador de SSD1327 a SH1107G, actualización de los píxeles en escala de grises de 96X96 a 128X128 | Nov 2015     |
  |Grove - OLED Display 1.12" V3.0 | Cambio del IC controlador de SSD1107G a SH1107, actualización de la interfaz de I2C a I2C/SPI | Julio 2021     |

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas
---

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Hardware

Aquí te mostraremos cómo funciona este Grove - OLED Display a través de una demostración simple. En primer lugar, necesitas preparar las siguientes cosas:

| Seeeduino V4 | Grove - OLED Display 1.12`` V3.0 | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

Este es un módulo fácil de usar, lo que necesitas hacer es conectar el módulo al puerto I2C de un Base Shield. Hay 4 pines, definidos como se muestra a continuación.

|pin|Función  | Nota   | Color del cable |
|--------|------|-----|---------------|
|pin1	| SCL | Reloj I2C | AMARILLO |
|pin2   | SDA| Datos I2C| BLANCO|
|pin3   | VCC  | Alimentación, 5V/3.3V| ROJO |
|pin4	| GND  | Tierra | NEGRO |


**Descripción del Hardware (I2C)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2185.JPG" />
</div>


### **Software (I2C)**

- **Paso 1.** Conecta Grove - OLED Display 1.12'' V3.0.
 al puerto **I2C** del Base Shield mediante el cable Grove.

- **Paso 2.** Abre Arduino IDE y el Administrador de Librerías **(Sketch > Include Library > manage Libraries)** para instalar la librería u8g2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **Paso 3.** Ingresa "**u8g2**" en el campo de búsqueda y selecciona la última versión y haz clic en el botón "Install".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **Paso 4.** Sube el código de demostración que se muestra a continuación en tu Arduino IDE.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

:::success
       Se mostrará "Hello Seeed!" en la pantalla del Grove - OLED Display 1.12'' si todo va bien.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>


:::note
        Si no tienes Base Shield contigo, [Seeeduino Vx Series](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) con **interfaz I2C** también funciona.
:::

**Descripción del Hardware (SPI)**

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

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/wires.png" />
</div>


- **Paso 4.** Conecta Seeeduino a una PC mediante un cable USB.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2188.JPG" />
</div>


### Software (**SPI**)

- **Paso 1.** Abre Arduino IDE y el Administrador de Librerías **(Sketch > Include Library > manage Libraries)** para instalar la librería de u8g2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **Paso 2.** Ingresa "**u8g2**" en el campo de búsqueda y selecciona la última versión y haz clic en el botón "Install".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **Paso 3.** Sube el código de demostración de abajo en tu Arduino IDE.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

:::success
       Se mostrará "Hello Seeed!" en la pantalla del Grove - OLED Display 1.12'' si todo va bien.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>


## Jugar en RaspberryPi

**Materiales requeridos**


| Raspberry pi | Grove Base Hat para Raspberry Pi | Grove - OLED Display 1.12" V3.0|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### Prepararse para RaspberryPi

#### Conexión I2C

- **Paso 1.** Conecta OLED Yellow&Blue Display 0.96" al puerto **I2C** del Grove - Base Hat.

- **Paso 2.** Conecta Grove - Base Hat en RaspberryPi.

- **Paso 3.** Conecta RaspberryPi a una PC vía Serial o SSH.

#### Conexión SPI

- **Paso 1.** Sigue la hoja para conectar los cables en Grove - Base Hat.

| Pines Grove - OLED Display 1.12" V3.0 | Raspberry Pi GPIO |  Código BCM2835 |
|--------------|-------------|-------------|
| VCC | 3.3V | 3.3V |
| GND | GND | GND |
| SI | MOSI | 10 |
| SCL | SCLK | 11 |
| CS | CE0 | 8 |
| DC | GPIO.6 | 25 |
| RES | GPIO.2 | 27 |


- **Paso 2.** Conecta Grove - Base Hat en RaspberryPi.

- **Paso 3.** Conecta RaspberryPi a una PC vía Serial o SSH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.**  Habilita I2C y SPI en RaspberryPi

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

Sigue las imágenes para habilitar I2C y SPI en tu RaspberryPi.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>
 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg" alt="pir" width={600} height="auto" /></p>

Y luego reinicia tu RaspberryPi

```shell
sudo reboot
```

- **Paso 2.** Instalar las librerías necesarias

```shell
sudo apt-get install wget gcc make unzip -y
```

Instalar la Biblioteca WiringPi

*Si usas WiringPi, necesitas actualizar WiringPi a la versión 2.52. Esta biblioteca puede no estar actualizada. Se recomiendan otras bibliotecas*
```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

Instalar bcm2835

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

Para más información y las bibliotecas más recientes, consulte el sitio web: [bcm2835](http://www.airspayce.com/mikem/bcm2835/)

- **Paso 3.** Descargar los códigos de demostración

**1.** Para [**I2C**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip)

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip
mkdir I2C
unzip RaspberryPiI2C.zip ./I2C/
cd ./I2C/RaspberryPiI2C/c/
sudo chmod 777 test.sh
./test.sh
```

**2.** Para [**SPI**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip)

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip
mkdir SPI
unzip RaspberryPiSPI.zip ./SPI/
cd ./SPI/RaspberryPiSPI/c/
sudo chmod 777 test.sh
./test.sh
```

Si quieres tener más demos, también tenemos un pequeño videoclip.

```shell
sudo chmod 777 badapple.sh
./badapple.sh
```

<iframe width={560} height={315} src="https://www.youtube.com/embed/mHhZgUNkPM0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## Introducción a la Biblioteca U8g2

U8g2 es una biblioteca de gráficos monocromáticos para dispositivos embebidos. U8g2 soporta OLEDs y LCDs monocromáticos, que incluyen nuestro chip SSD1327/SH1107G.

La biblioteca Arduino U8g2 puede instalarse desde el administrador de bibliotecas del IDE de Arduino. U8g2 también incluye la biblioteca U8x8:

**U8g2**

- Incluye todos los procedimientos gráficos (dibujo de líneas/cajas/círculos).
- Soporta muchas fuentes. (Casi) sin restricción en la altura de la fuente.
- Requiere algo de memoria en el microcontrolador para renderizar la pantalla.

**U8x8**

- Dispositivo de salida de texto únicamente (caracteres).
- Solo se permiten fuentes que encajen en una cuadrícula de píxeles de 8x8.
- Escribe directamente en la pantalla. No se requiere buffer en el microcontrolador.

Aquí se proporciona la [**wiki de la Biblioteca U8g2**](https://github.com/olikraus/u8g2/wiki) así como la página de [Referencia de API U8g2](https://github.com/olikraus/u8g2/wiki/u8g2reference).


## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---------
* **[Eagle]** [Grove-OLED Display 1.12inch en Eagle](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip)
* **[PDF]** [Grove-OLED Display 1.12inch V3.0 Sch](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.pdf)
* **[Hoja de Datos]** [SH1107_datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/SH1107V2.1.pdf)

## Soporte Técnico y Discusión de Productos
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
