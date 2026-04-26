---
title: Placa Controladora de ePaper
description: La placa de expansión eInk para XIAO es un módulo inteligente de Seeed Studio diseñado para mostrar contenido en una pantalla de papel electrónico.
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/titleimg.webp
slug: /xiao_eink_expansion_board_v2
sku: 104990861,114993558
keywords:
  - XIAO
  - epaper
  - eink
last_update:
  author: Allen
  date: 12/09/2024
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/xiao_eink_expansion_board_v2/
---

# Introducción a la Placa Controladora de ePaper

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/headimage.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div><br />

La placa controladora de ePaper cuenta con un conector FPC de 24 pines, IC de carga integrado para una carga de batería eficiente y segura, y un conector JST de 2 pines BAT para una fácil conexión de batería. Ideal para crear marcos de fotos digitales habilitados para WiFi.

:::note
Esta placa de expansión no incluye una pantalla ePaper; la pantalla debe comprarse por separado.
:::

## Introducción

### Características

- **IC de Carga Integrado**: Garantiza una carga de batería eficiente y segura.
- **Conector BAT con Interruptor**: Permite una fácil conexión de batería e incluye un interruptor para combinar la batería y el interruptor para un ahorro de energía más eficiente.
- **Conector PFC de 24 Pines**: Proporciona opciones de conectividad versátiles para varios periféricos.
- **Puerto de E/S de Extensión**: Permite la conexión de sensores adicionales, como sensores de temperatura y humedad, para una funcionalidad mejorada.
- **Compatible con el Ecosistema XIAO de Seeed Studio**: Se integra perfectamente con la serie XIAO (Versión Pre-Soldada) para el desarrollo versátil de proyectos.

### Aplicaciones

- **Panel de Control de Hogar Inteligente**: Mostrar información en tiempo real como actualizaciones del clima, eventos del calendario y notificaciones de varios dispositivos de hogar inteligente.
- **Monitoreo de Energía**: Mostrar datos de consumo de energía de medidores inteligentes, ayudando a los propietarios a rastrear y gestionar su uso de energía de manera más eficiente.
- **Alertas de Seguridad**: Mostrar alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Pantalla de Termostato Inteligente**: Mostrar niveles de temperatura y humedad, así como configuraciones de control para su termostato inteligente.
- **Marco de Fotos Digital**: Crear un marco de fotos digital habilitado para WiFi que puede mostrar imágenes desde su red de hogar inteligente.

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/overview.png" style={{width:700, height:'auto'}}/></div>

1. Conector FPC de 24 pines: Para la interfaz de ePaper.
2. Conector JST BAT: Para conexión de batería e interruptor.
3. Socket XIAO: Para conectar la placa de desarrollo Seeed Studio XIAO.
4. Salida de E/S: Para conectar sensores Grove u otros controladores, como Arduino UNO o Raspberry Pi.
5. Interruptor de alimentación: Para control de energía de la batería.

### Definiciones de Pines

<div class="table-center">

|  Pines SPI de ePaper |  XIAO  |
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D2   |
|      SCK       |   D8   |
|      MOSI      |   D10  |
|      3V3       |   3V3   |
|      GND      |   GND  |

</div>

### eInk Compatibles

1. [E-paper de 1.54 pulgadas - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [E-Paper de 2.13 pulgadas - Monocromático Flexible 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [E-Paper de 2.13 pulgadas - Cuádruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [E-paper de 2.9 pulgadas - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [E-paper de 2.9 pulgadas - Color cuádruple 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [E-Paper de 4.2 pulgadas - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [E-Paper de 4.26 pulgadas - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
8. [E-paper de 5.65 pulgadas - Siete colores 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [E-paper de 5.83 pulgadas - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [E-paper de 7.5 pulgadas - Monocolor 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
11. [E-paper de 7.5 pulgadas - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

## Introducción

 Para usar la **Placa de Expansión XIAO eInk**, necesitamos programar la serie XIAO. La tabla de diferentes tamaños de E-paper compatibles con XIAO es la siguiente:

<div class="table-center">

|      E-paper / XIAO     | XIAO SAMD21 | XIAO RP2040|  XIAO nRF52840 | XIAO ESP32-C3 | XIAO ESP32-S3 |
|       ---      |  ---  | --- | --- | --- | --- |
|E-paper de 1.54 pulgadas - Dotmatix 200x200           | ✅ | ✅ | ✅ | ✅ | ✅ |
|E-Paper de 2.13 pulgadas - Monocromático Flexible 212x104 | ✅ | ✅ | ✅ | ✅ | ✅ |
|E-Paper de 2.13 pulgadas - Cuádruple 212x104          | ✅ | ✅ | ✅ | ✅ | ✅ |
|E-paper de 2.9 pulgadas - Monocolor 128x296           | ✅ | ✅ | ✅ | ✅ | ✅ |
|E-paper de 2.9 pulgadas - Color cuádruple 128x296     | ✅ | ✅ | ✅ | ✅ | ✅ |
|E-Paper de 4.2 pulgadas - Monocolor 400x300           | ✅ | ✅ | ✅ | ✅ | ✅ |
|E-Paper de 4.26 pulgadas - Monocolor 800x480          | RAM desbordada | ✅ | ✅ | ✅ | ✅ |
|E-paper de 5.65 pulgadas - Siete colores 600x480        | FLASH desbordada | ✅ | ✅ | ✅ | ✅ |
|E-paper de 5.83 pulgadas - Monocolor 648x480          | ✅ | ✅ | ✅ | ✅ | ✅ |
|E-paper de 7.5 pulgadas - Monocolor 800x480           | RAM desbordada | ✅ | ✅ | ✅ | ✅ |
|E-paper de 7.5 pulgadas - Tri-Color 800x480           | RAM desbordada | ✅ | ✅ | ✅ | ✅ |

</div>

### Preparación del Hardware

**Paso 1.** Preparación de materiales

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**PASO 2.** Insertar el XIAO en el Socket XIAO: Alinee los pines e inserte suavemente su XIAO en el socket XIAO de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**PASO 3.** Insertar el eInk en el Conector FPC: Deslice cuidadosamente su E-paper en el conector FPC de 24 pines de la Placa de Expansión ePaper.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### Preparación del Software

 La herramienta de programación recomendada es el IDE de Arduino, y necesita configurar el entorno de Arduino para el XIAO y agregar el paquete de la placa.
:::tip
Si esta es su primera vez usando Arduino, le recomendamos encarecidamente que consulte [Introducción a Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

**Paso 1.** Inicie la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

**Paso 2.** Selecciona el modelo de tu placa de desarrollo y agrégala al Arduino IDE.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la adición.

## Instalar la Biblioteca Seeed GFX

**Paso 3.** Instalar la Biblioteca Seeed GFX

:::tip
Esta biblioteca tiene la misma función que la biblioteca TFT y no es compatible con ella. Si has instalado la biblioteca TFT u otras bibliotecas de pantalla similares, desinstálalas primero.
:::

Descarga e instala la biblioteca Seeed GFX desde GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

Desplázate hacia abajo y abre este enlace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Selecciona el tipo de tu dispositivo y generará algo de código. Copia ese código y lo usaremos más tarde.

:::tip
Si haces la elección incorrecta, la pantalla no mostrará nada.

Así que asegúrate del tipo de tus dispositivos o componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/config.jpg" style={{width:600, height:'auto'}}/></div>

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Hay 4 ejemplos básicos, abre un ejemplo básico que te guste:

1. Bitmap: Mostrar una imagen bitmap.
2. Clock: Mostrar un reloj.
3. Clock_digital: Mostrar un reloj digital.
4. Shape: Mostrar diferentes tamaños de palabras y formas aleatoriamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### Subir el Código

Crea un **nuevo archivo "driver.h"** y pega ese código en él. El código debería ser así:

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32C6** y **Tools** -> **Port** -> **Selecciona el puerto al que está conectada tu placa**. Luego haz clic en **Upload** para subir el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

¡Ahora verás la respuesta en tu pantalla de papel electrónico! A continuación están los resultados de los ejemplos Helloworld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Si estás usando una pantalla de tinta electrónica de 1.54 pulgadas o 2.9 pulgadas, debido a sus chips controladores, puede ocurrir parpadeo al usar efectos dinámicos como relojes. Ten la seguridad de que esto no es un problema del programa. Sin embargo, no se recomienda ejecutar ejemplos de efectos dinámicos por períodos prolongados para evitar reducir la vida útil de la pantalla.

Si estás usando pantallas de 5.83 y 7.5 pulgadas, tienen chips diferentes, por lo que no tendrán el fenómeno de parpadeo.
:::

## Software de Extracción de Imágenes

### Uso de los Sitios Web (recomendado)

Aquí estoy usando una pantalla de tinta electrónica de 7.5 pulgadas para la prueba

#### Cómo Hacer una Imagen

Esta [URL](https://jlamch.net/MXChipWelcome/) proporciona una operación de extracción de imágenes muy conveniente, que puede ayudarnos fácilmente a realizar la visualización de una variedad de imágenes en la parte superior de la pantalla de tinta electrónica, ¡comencemos!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**Paso 1**.Seleccionar imagen

Primero elige la imagen que quieras, trata de no exceder el tamaño de 800*480.

**Paso 2**.Configuración de Imagen

- Canvas Size(s)
  - Canvas Size: Establece las dimensiones del lienzo. Por ejemplo, 800 x 480 píxeles significa que el ancho del lienzo es de 800 píxeles y la altura es de 480 píxeles.

- Background Color
  - Background Color: Elige el color de fondo del lienzo. Las opciones incluyen:

  - White: Fondo blanco
  - Black: Fondo negro

- Transparent: Fondo transparente
  - Invert Image Color
  - Invert Image Color: Esta opción se usa para invertir los colores de la imagen. Cuando se selecciona, los colores de la imagen se invertirán.

- Brightness / Alpha Threshold
  - Brightness / Alpha Threshold: Establece el valor de brillo de los píxeles, que va de 0 a 255. Valores más altos hacen que los píxeles sean más brillantes; los píxeles por debajo de este valor se volverán negros.

- Scaling
  - Scaling: Elige el método de escalado para la imagen. Las opciones incluyen:

- Original size: Mantener el tamaño original
  - Otras opciones de escalado (las opciones específicas pueden necesitar más explicación)
- Center
  - Center: Elige si centrar la imagen en el lienzo. Nota: Esta opción solo funciona si la imagen es más grande que el tamaño original.

**Paso 3**.Vista previa

Una vez que la configuración esté completa, puedes ver una vista previa de cómo aparecerá tu imagen aquí

**Paso 4**.Salida

- Copia el código convertido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- Reemplaza el código de imagen en este archivo de encabezado
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### Efecto de Visualización

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Uso del software Image2lcd

#### Cómo Hacer una Imagen

Usa el software integrado **Paint** en Windows para crear una imagen con la **misma resolución** que la pantalla que estás usando, y guárdala como archivo `BMP` o `JPG`;

:::note
La resolución de tu imagen debe ser la misma que la pantalla que estás usando, por ejemplo, el papel electrónico de 4.2 pulgadas es de 400 x 300 píxeles, entonces no puedes usar el tamaño de 300 x 400, causará que la salida del archivo `.h` de image2lcd tenga 200 bytes adicionales.
:::

Los colores de la imagen deben ser consistentes con los colores estándar de la tabla de dibujo que viene con Windows. El color de la tabla de dibujo es el siguiente:

<div class="table-center">

|      Papel electrónico      | Colores |
|       ---      |  ---   |
|Papel electrónico de 1.54 pulgadas - Dotmatix 200x200           | negro puro y blanco          |
|Papel electrónico de 2.13 pulgadas - Monocromático Flexible 212x104 | negro puro y blanco          |
|Papel electrónico de 2.13 pulgadas - Cuádruple 212x104          | negro, blanco, rojo y amarillo |
|Papel electrónico de 2.9 pulgadas - Monocolor 128x296           | negro puro y blanco          |
|Papel electrónico de 2.9 pulgadas - Color cuádruple 128x296     | negro, blanco, rojo y amarillo |
|Papel electrónico de 4.2 pulgadas - Monocolor 400x300           | negro puro y blanco          |
|Papel electrónico de 4.26 pulgadas - Monocolor 800x480          | negro puro y blanco          |
|Papel electrónico de 5.65 pulgadas - Siete colores 600x480        | negro, blanco, rojo, amarillo, azul, verde, naranja|
|Papel electrónico de 5.83 pulgadas - Monocolor 648x480          | negro puro y blanco          |
|Papel electrónico de 7.5 pulgadas - Monocolor 800x480           | negro puro y blanco          |
|Papel electrónico de 7.5 pulgadas - Tri-Color 800x480           | negro puro y blanco          |

</div>

#### Conversión de Bitmap

**Paso 1.** Abre [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z), extráelo y abre la aplicación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Abre la imagen, selecciona el "Output file type" como "C array (*.c)", selecciona el "Scan mode" como "Horizon Scan", la configuración de otros parámetros se muestra a continuación:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Papel electrónico</th>
        <th>BitPixl</th>
        <th>Ancho y Alto Máximo</th>
        <th>Color inverso</th>
        <th>Modo de visualización</th>
    </tr>
    <tr>
        <th>Papel electrónico de 1.54 pulgadas - Dotmatix 200x200</th>
        <td align="center">Monocromático</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>Papel electrónico de 2.13 pulgadas - Monocromático Flexible 212x104</th>
        <td align="center">Monocromático</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>E-Paper de 2.13 pulgadas - Cuádruple 212x104 </th>
        <td align="center">4 Grises</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>E-paper de 2.9 pulgadas - Monocolor 128x296</th>
         <td align="center">Monocromo</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>E-paper de 2.9 pulgadas - Color cuádruple 128x296 </th>
        <td align="center">4 Grises</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>E-Paper de 4.2 pulgadas - Monocolor 400x300</th>
        <td align="center">Monocromo</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">Espejo izquierda-derecha</td>
    </tr>
    <tr>
        <th>E-Paper de 4.26 pulgadas - Monocolor 800x480</th>
        <td align="center">Monocromo</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Espejo izquierda-derecha</td>
    </tr>
    <tr>
        <th>E-paper de 5.65 pulgadas - Siete colores 600x480</th>
        <td align="center">256 colores</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>E-paper de 5.83 pulgadas - Monocolor 648x480</th>
        <td align="center">Monocromo</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">Espejo izquierda-derecha</td>
    </tr>
    <tr>
        <th>E-paper de 7.5 pulgadas - Monocolor 800x480</th>
        <td align="center">Monocromo</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">Espejo izquierda-derecha</td>
    </tr>
    <tr>
        <th>E-paper de 7.5 pulgadas - Tri-Color 800x480</th>
        <td align="center">Monocromo</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
  </table>
</div>

:::tip

- Después de establecer el Ancho y Alto Máximo, es necesario hacer clic en la flecha para confirmar.
- No incluir datos de cabecera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Paso 3.** Haz clic en "Save" para guardar el array de salida lcd como un archivo `.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## Recursos

- **[PDF]**: [PDF del Esquema de la Placa Controladora ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
