---
description: Introducción a la ePaper Breakout Board
title: Introducción a la ePaper Breakout Board
keywords:
  - XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-eInk-Expansion-Board
sku: 104990843,104990845,104990846,104990847,104990853,104990855,104990857,104990858,104990859,104990861,105990172
sidebar_position: 1
last_update:
  date: 05/23/2023
  author: Carla
createdAt: '2023-10-30'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/XIAO-eInk-Expansion-Board/
---
# Introducción a la ePaper Breakout Board

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

Conoce la XIAO eInk Expansion Board, tu solución ideal para controlar pantallas eInk con la familia XIAO sin esfuerzo. Diseñada con un conector FPC de 24 pines, esta placa proporciona un enlace perfecto con nuestra serie de productos eInk; si quieres ampliar tus opciones, el header de 8 pines 2.54 te permite integrar fácilmente cualquier microcontrolador de tu elección. Piensa en esta placa como la "mejor amiga para siempre" de tu eInk, ampliando sus capacidades y facilitándote la vida.

:::note
Esta breakout board no incluye una pantalla eInk; la pantalla debe comprarse por separado.
:::

## Introducción

### Características

- Conector FPC de 24 pines: Proporciona una conexión robusta y fiable a las pantallas eInk.
- Zócalo XIAO: Te permite usar XIAO como procesador, ofreciendo una solución de control compacta pero potente.
- Header de 8 pines 2.54: Ofrece flexibilidad al permitirte conectar cualquier microcontrolador, abriendo un mundo de posibilidades.
- Plug-and-Play: Diseñada para facilitar su uso, lo que la hace perfecta tanto para principiantes como para expertos.
- Aplicaciones versátiles: Adecuada para una amplia gama de pantallas eInk, desde tamaños pequeños hasta grandes.

### Aplicaciones

- Señalización digital: Usa la eInk Breakout Board para crear carteles digitales dinámicos y de bajo consumo.
- Lectores electrónicos: Construye tu propio lector electrónico personalizado con funciones adaptadas a tus necesidades.
- Paneles de control para hogar inteligente: Integra la placa en un sistema de hogar inteligente para obtener un panel de control moderno y elegante.
- Etiquetas de precio para retail: Crea etiquetas de precio electrónicas para una experiencia de venta más eficiente y ecológica.
- Herramientas educativas: Desarrolla materiales educativos interactivos que puedan actualizarse fácilmente y que sean de bajo consumo energético.

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>

1. Conector FPC de 24 pines: Para la ePaper de 2,13 pulgadas.
2. Zócalo XIAO: Para conectar la placa de desarrollo Seeed Studio XIAO.
3. Salida de IO: Para conectar otros controladores, como Arduino UNO o Raspberry Pi.

### Definiciones de pines

<div class="table-center">

|  Pines SPI de eInk |  XIAO  |
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D5   |
|      SCK       |   D8   |
|      MOSI      |   D10  |

</div>

### eInk compatible

1. [E-paper de 1,54 pulgadas - Matriz de puntos 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [E-Paper de 2,13 pulgadas - Flexible monocromo 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [E-Paper de 2,13 pulgadas - Cuádruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [E-paper de 2,9 pulgadas - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [E-Paper de 4,2 pulgadas - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
6. [E-Paper de 4,26 pulgadas - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
7. [E-paper de 5,65 pulgadas - Siete colores 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
8. [E-paper de 5,83 pulgadas - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)



### Preparación de hardware

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**PASO 2.** Inserta el XIAO en el zócalo XIAO: Alinea los pines e inserta suavemente tu XIAO en el zócalo XIAO de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**PASO 3.** Inserta la eInk en el conector FPC: Desliza con cuidado tu E-paper en el conector FPC de 24 pines de la ePaper Breakout Board.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### Preparación de software

 La herramienta de programación recomendada es el Arduino IDE, y necesitas configurar el entorno de Arduino para el XIAO y añadir el paquete integrado.
:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**Paso 2.** Selecciona el modelo de tu placa de desarrollo y añádelo al Arduino IDE.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#preparación-del-software)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#preparación-del-software)** para completar la adición.

## Instalar la biblioteca Seeed GFX

**Paso 3.** Instalar la biblioteca Seeed GFX

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

Selecciona tu tipo de dispositivo y se generará algo de código. Copia ese código y lo usaremos más tarde.

:::tip
Si haces la elección equivocada, la pantalla no mostrará nada.

Así que asegúrate del tipo de tus dispositivos o componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/epaper_display.jpg" style={{width:600, height:'auto'}}/></div>

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Hay 4 ejemplos básicos, abre un ejemplo básico que te guste:

1. Bitmap: Muestra una imagen de mapa de bits.
2. Clock: Muestra un reloj.
3. Clock_digital: Muestra un reloj digital.
4. Shape: Muestra diferentes tamaños de palabras y formas aleatoriamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### Cargar el código

Crea un **nuevo archivo "driver.h"** y pega ese código en él. El código debería ser como:

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32C6** y **Tools** -> **Port** -> **Select the port your board is connected to**. Luego haz clic en **Upload** para cargar el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

¡Ahora verás la respuesta en tu pantalla de papel electrónico! A continuación se muestran los resultados de los ejemplos de Helloworld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Si estás utilizando una pantalla de tinta electrónica de 1,54 pulgadas o 2,9 pulgadas, debido a sus chips controladores, puede producirse parpadeo al usar efectos dinámicos como relojes. Ten la seguridad de que esto no es un problema del programa. Sin embargo, no se recomienda ejecutar ejemplos de efectos dinámicos durante períodos prolongados para evitar reducir la vida útil de la pantalla.

Si estás utilizando pantallas de 5,83 y 7,5 pulgadas, tienen chips diferentes, por lo que no presentarán el fenómeno de parpadeo.
:::

## Software de extracción de imágenes

### Uso de los sitios web (recomendado)

Aquí estoy usando una pantalla de tinta electrónica de 7,5 pulgadas para la prueba

#### Cómo hacer una imagen

Este [URL](https://jlamch.net/MXChipWelcome/) proporciona una operación de extracción de imágenes muy conveniente, que puede ayudarnos fácilmente a mostrar una variedad de imágenes en la pantalla de tinta electrónica, ¡vamos a empezar!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**Paso 1**.Seleccionar imagen

Primero elige la imagen que quieras, intenta no exceder el tamaño de 800*480.

**Paso 2**.Configuración de la imagen

- Tamaño(s) del lienzo
  - Tamaño del lienzo: Establece las dimensiones del lienzo. Por ejemplo, 800 x 480 píxeles significa que el ancho del lienzo es de 800 píxeles y la altura es de 480 píxeles.

- Color de fondo
  - Color de fondo: Elige el color de fondo del lienzo. Las opciones incluyen:

  - Blanco: Fondo blanco
  - Negro: Fondo negro

- Transparente: Fondo transparente
  - Invertir color de la imagen
  - Invertir color de la imagen: Esta opción se utiliza para invertir los colores de la imagen. Cuando se selecciona, los colores de la imagen se invertirán.

- Brillo / Umbral alfa
  - Brillo / Umbral alfa: Establece el valor de brillo de los píxeles, que va de 0 a 255. Los valores más altos hacen que los píxeles sean más brillantes; los píxeles por debajo de este valor se volverán negros.

- Escalado
  - Escalado: Elige el método de escalado para la imagen. Las opciones incluyen:

- Tamaño original: Mantener el tamaño original
  - Otras opciones de escalado (las opciones específicas pueden necesitar más explicación)
- Centrar
  - Centrar: Elige si deseas centrar la imagen en el lienzo. Nota: Esta opción solo funciona si la imagen es más grande que el tamaño original.

**Paso 3**.Vista previa

Una vez que la configuración esté completa, podrás ver aquí una vista previa de cómo aparecerá tu imagen

**Paso 4**.Salida

- Copia el código convertido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- Sustituye el código de la imagen en este archivo de cabecera
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### Efecto de visualización

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Uso del software Image2lcd

#### Cómo hacer una imagen

Utiliza el software incorporado **Paint** en Windows para crear una imagen con la **misma resolución** que la pantalla que estás utilizando y guárdala como archivo `BMP` o `JPG`;

:::note
La resolución de tu imagen debe ser la misma que la de la pantalla que estás utilizando, por ejemplo, el papel electrónico de 4,2 pulgadas es de 400 x 300 píxeles, entonces no puedes usar el tamaño de 300 x 400, causará que iamge2lcd genere un archivo `.h` con 200 bytes adicionales.
:::

Los colores de la imagen deben ser coherentes con los colores estándar del tablero de dibujo que viene con Windows. El color del tablero de dibujo es el siguiente:

<div class="table-center">

|      E-paper      | Colores |
|       ---      |  ---   |
|1.54-inch E-paper - Dotmatix 200x200           | blanco y negro puros          |
|2.13-inch E-Paper -Flexible Monochrome 212x104 | blanco y negro puros          |
|2.13-inch E-Paper - Quadruple 212x104          | negro, blanco, rojo y amarillo |
|2.9 inch E-paper - Monocolor 128x296           | blanco y negro puros          |
|2.9-inch e-paper - Quadruple color 128x296     | negro, blanco, rojo y amarillo |
|4.2-inch E-Paper - Monocolor 400x300           | blanco y negro puros          |
|4.26-inch E-Paper - Monocolor 800x480          | blanco y negro puros          |
|5.65-inch E-paper -  Sevencolor 600x480        | negro, blanco, rojo, amarillo, azul, verde, naranja|
|5.83-inch E-paper - Monocolor 648x480          | blanco y negro puros          |
|7.5-inch E-paper - Monocolor 800x480           | blanco y negro puros          |
|7.5-inch E-paper - Tri-Color 800x480           | blanco y negro puros          |

</div>

#### Conversión de mapa de bits

**Paso 1.** Abre [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z), extráelo y abre la aplicación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Abre la imagen, selecciona el "Output file type" como "C array (*.c)", selecciona el "Scan mode" como "Horizon Scan", la configuración de los otros parámetros se muestra a continuación:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Epaper</th>
        <th>BitPixl</th>
        <th>Max Width and Height</th>
        <th>Reverse color</th>
        <th>Display mode</th>
    </tr>
    <tr>
        <th>1.54-inch E-paper - Dotmatix 200x200</th>
        <td align="center">Monochrome</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper -Flexible Monochrome 212x104</th>
        <td align="center">Monochrome</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper - Quadruple 212x104 </th>
        <td align="center">4 Gray</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.9 inch E-paper - Monocolor 128x296</th>
         <td align="center">Monochrome</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.9-inch e-paper - Quadruple color 128x296 </th>
        <td align="center">4 Gray</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>4.2-inch E-Paper - Monocolor 400x300</th>
        <td align="center">Monochrome</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>4.26-inch E-Paper - Monocolor 800x480</th>
        <td align="center">Monochrome</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>5.65-inch E-paper -  Sevencolor 600x480</th>
        <td align="center">256 colors</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>5.83-inch E-paper - Monocolor 648x480</th>
        <td align="center">Monochrome</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>7.5-inch E-paper - Monocolor 800x480</th>
        <td align="center">Monochrome</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">Espejo izquierda-derecha</td>
    </tr>
    <tr>
        <th>Pantalla E-paper de 7,5 pulgadas - Tricolor 800x480</th>
        <td align="center">Monocromo</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
  </table>
</div>

:::tip

- Después de configurar el ancho y el alto máximos, es necesario hacer clic en la flecha para confirmar.
- No incluyas los datos de cabecera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Paso 3.** Haz clic en "Save" para guardar la matriz de salida lcd como un archivo `.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## Recursos

- **[ZIP]** [Archivo Eagle de PCB&SCH](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
