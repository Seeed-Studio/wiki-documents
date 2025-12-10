---
title: Placa Controladora de ePaper
description: La placa de expansión eInk para XIAO es un módulo inteligente de Seeed Studio diseñado para mostrar contenido en pantalla de papel electrónico.
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/titleimg.webp
slug: /es/xiao_eink_expansion_board_v2
keywords:
  - XIAO
  - epaper
  - eink
last_update:
  author: Allen
  date: 12/09/2024
---

# Primeros Pasos con la Placa Controladora de ePaper

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/headimage.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
</div><br />

La placa controladora de ePaper cuenta con un conector FPC de 24 pines, IC de carga integrado para carga eficiente y segura de la batería, y un conector JST de 2 pines BAT para conexión fácil de batería. Ideal para crear marcos de fotos digitales habilitados para WiFi.

:::note
Esta placa de expansión no incluye una pantalla ePaper; la pantalla debe comprarse por separado.
:::

## Introducción

### Características

- **IC de Carga Integrado**: Garantiza carga eficiente y segura de la batería.
- **Conector BAT con Interruptor**: Permite conexión fácil de batería e incluye un interruptor para combinar la batería y el interruptor para un ahorro de energía más eficiente.
- **Conector PFC de 24 Pines**: Proporciona opciones de conectividad versátiles para varios periféricos.
- **Puerto IO de Extensión**: Permite la conexión de sensores adicionales, como sensores de temperatura y humedad, para funcionalidad mejorada.
- **Compatible con el Ecosistema Seeed Studio XIAO**: Se integra perfectamente con la serie XIAO (Versión Pre-Soldada) para desarrollo de proyectos versátil.

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
4. Salida IO: Para conectar sensores Grove u otros controladores, como Arduino UNO o Raspberry Pi.
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

## Comenzando

Para usar la **Placa de Expansión XIAO eInk**, necesitamos programar la serie XIAO. La tabla de diferentes tamaños de papel electrónico soportados por XIAO es la siguiente:

<div class="table-center">

|      E-paper / XIAO     | XIAO SAMD21 | XIAO RP2040|  XIAO nRF52840 | XIAO ESP32-C3 | XIAO ESP32-S3 |
|       ---      |  ---  | --- | --- | --- | --- |
|Papel electrónico de 1.54 pulgadas - Matriz de puntos 200x200           | ✅ | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 2.13 pulgadas - Monocromático flexible 212x104 | ✅ | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 2.13 pulgadas - Cuádruple 212x104          | ✅ | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 2.9 pulgadas - Monocolor 128x296           | ✅ | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 2.9 pulgadas - Color cuádruple 128x296     | ✅ | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 4.2 pulgadas - Monocolor 400x300           | ✅ | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 4.26 pulgadas - Monocolor 800x480          | RAM desbordada | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 5.65 pulgadas - Siete colores 600x480        | FLASH desbordada | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 5.83 pulgadas - Monocolor 648x480          | ✅ | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 7.5 pulgadas - Monocolor 800x480           | RAM desbordada | ✅ | ✅ | ✅ | ✅ |
|Papel electrónico de 7.5 pulgadas - Tri-Color 800x480           | RAM desbordada | ✅ | ✅ | ✅ | ✅ |

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

**PASO 2.** Inserta el XIAO en el Socket XIAO: Alinea los pines e inserta suavemente tu XIAO en el socket XIAO de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**PASO 3.** Inserta el eInk en el Conector FPC: Desliza cuidadosamente tu papel electrónico en el conector FPC de 24 pines de la Placa de Expansión ePaper.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>


### Preparación del Software
 La herramienta de programación recomendada es el IDE de Arduino, y necesitas configurar el entorno de Arduino para el XIAO y agregar el paquete de la placa.
:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

**Paso 2.** Selecciona el modelo de tu placa de desarrollo y agrégala al IDE de Arduino.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para terminar de agregarlo.


## Usando la Biblioteca Seeed_Arduino_LCD

**Paso 3.** Instala la Biblioteca Seeed GFX

:::tip
Esta biblioteca tiene la misma función que la biblioteca TFT y no es compatible con esta biblioteca. Si has instalado la biblioteca TFT, por favor desinstálala primero.
:::

Descarga e instala la biblioteca Seeed GFX desde GitHub.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Hay 4 ejemplos básicos, abre un ejemplo básico que te guste:
1. Bitmap: Muestra una imagen bitmap.
2. Clock: Muestra un reloj.
3. Clock_digital: Muestra un reloj digital.
4. HelloWorld: Muestra patrones básicos y texto de diferentes tamaños en la pantalla de tinta electrónica.
5. Shape: Muestra palabras y formas de diferentes tamaños aleatoriamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/150.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Sube el Código

Antes de subir el código, necesitas abrir **User_Setup_Select.h** en la biblioteca Seeed_Arduino_LCD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/53.png" style={{width:800, height:'auto'}}/></div>

Dado que este ejemplo usa una pantalla de tinta electrónica de 2.9 pulgadas, necesitamos comentar la línea 160 `#include <User_Setups/Setup666_XIAO_ILI9341.h>` en este archivo, y descomentar la línea 165 `#include <User_Setups/Setup504_Seeed_XIAO_EPaper_2inch9.h>`. Si estás usando otras pantallas de tinta electrónica, por favor sigue este enfoque para hacer modificaciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/151.png" style={{width:1000, height:'auto'}}/></div>

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32C6** y **Tools** -> **Port** -> **Selecciona el puerto al que está conectada tu placa**. Luego haz clic en **Upload** para subir el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/152.png" style={{width:1000, height:'auto'}}/></div>

¡Ahora verás la respuesta en tu pantalla de papel electrónico! A continuación están los resultados de los ejemplos Helloworld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>


:::caution
Si estás usando una pantalla de tinta electrónica de 1.54 pulgadas o 2.9 pulgadas, debido a sus chips controladores, puede ocurrir parpadeo al usar efectos dinámicos como relojes. Por favor ten la seguridad de que esto no es un problema del programa. Sin embargo, no se recomienda ejecutar ejemplos de efectos dinámicos por períodos prolongados para evitar reducir la vida útil de la pantalla.
:::

Si estás usando pantallas de 5.83 y 7.5 pulgadas, tienen chips diferentes, por lo que no tendrán el fenómeno de parpadeo.
:::

## Software de Extracción de Imágenes

### Uso de los Sitios Web (recomendado)

Aquí estoy usando una pantalla de tinta electrónica de 7.5 pulgadas para la prueba

#### Cómo Hacer una Imagen

Esta [URL](https://jlamch.net/MXChipWelcome/) proporciona una operación de extracción de imágenes muy conveniente, que puede ayudarnos fácilmente a mostrar una variedad de imágenes en la parte superior de la pantalla de tinta electrónica, ¡comencemos!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**Paso 1**. Seleccionar imagen

Primero elige la imagen que quieras, trata de no exceder el tamaño de 800*480.

**Paso 2**. Configuración de Imagen

- Tamaño del Lienzo
    - Tamaño del Lienzo: Establece las dimensiones del lienzo. Por ejemplo, 800 x 480 píxeles significa que el ancho del lienzo es de 800 píxeles y la altura es de 480 píxeles.

- Color de Fondo
    - Color de Fondo: Elige el color de fondo del lienzo. Las opciones incluyen:

    - Blanco: Fondo blanco
    - Negro: Fondo negro

- Transparente: Fondo transparente
    - Invertir Color de Imagen
    - Invertir Color de Imagen: Esta opción se usa para invertir los colores de la imagen. Cuando se selecciona, los colores de la imagen se invertirán.

- Umbral de Brillo / Alfa
    - Umbral de Brillo / Alfa: Establece el valor de brillo de los píxeles, con un rango de 0 a 255. Valores más altos hacen que los píxeles sean más brillantes; los píxeles por debajo de este valor se volverán negros.

- Escalado
    - Escalado: Elige el método de escalado para la imagen. Las opciones incluyen:

- Tamaño original: Mantener el tamaño original
    - Otras opciones de escalado (las opciones específicas pueden necesitar más explicación)
- Centrar
    - Centrar: Elige si centrar la imagen en el lienzo. Nota: Esta opción solo funciona si la imagen es más grande que el tamaño original.

**Paso 3**. Vista Previa

Una vez que la configuración esté completa, puedes ver una vista previa de cómo aparecerá tu imagen aquí

**Paso 4**. Salida

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
La resolución de tu imagen debe ser la misma que la pantalla que estás usando, por ejemplo, el E-paper de 4.2 pulgadas es de 400 x 300 píxeles, entonces no puedes usar el tamaño de 300 x 400, causará que la salida del archivo `.h` de iamge2lcd tenga 200 bytes adicionales.
:::

Los colores de la imagen deben ser consistentes con los colores estándar de la tabla de dibujo que viene con Windows. El color de la tabla de dibujo es el siguiente:

<div class="table-center">

|      E-paper      | Colores |
|       ---      |  ---   |
|E-paper de 1.54 pulgadas - Dotmatix 200x200           | negro puro y blanco          |
|E-Paper de 2.13 pulgadas - Monocromático Flexible 212x104 | negro puro y blanco          |
|E-Paper de 2.13 pulgadas - Cuádruple 212x104          | negro, blanco, rojo y amarillo |
|E-paper de 2.9 pulgadas - Monocolor 128x296           | negro puro y blanco          |
|e-paper de 2.9 pulgadas - Color cuádruple 128x296     | negro, blanco, rojo y amarillo |
|E-Paper de 4.2 pulgadas - Monocolor 400x300           | negro puro y blanco          |
|E-Paper de 4.26 pulgadas - Monocolor 800x480          | negro puro y blanco          |
|E-paper de 5.65 pulgadas - Siete colores 600x480        | negro, blanco, rojo, amarillo, azul, verde, naranja|
|E-paper de 5.83 pulgadas - Monocolor 648x480          | negro puro y blanco          |
|E-paper de 7.5 pulgadas - Monocolor 800x480           | negro puro y blanco          |
|E-paper de 7.5 pulgadas - Tri-Color 800x480           | negro puro y blanco          |

</div>

#### Conversión de Mapa de Bits

**Paso 1.** Abre [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z), extráelo y abre la aplicación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Abre la imagen, selecciona el "Tipo de archivo de salida" como "C array (*.c)", selecciona el "Modo de escaneo" como "Escaneo Horizontal", la configuración de otros parámetros se muestra a continuación:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Epaper</th>
        <th>BitPixl</th>
        <th>Ancho y Alto Máximo</th>
        <th>Color inverso</th>
        <th>Modo de visualización</th>    
    </tr>
    <tr>
        <th>E-paper de 1.54 pulgadas - Dotmatix 200x200</th>
        <td align="center">Monocromo</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">Espejo izquierda-derecha</td>
    </tr>
    <tr>
        <th>E-Paper de 2.13 pulgadas - Monocromático Flexible 212x104</th>
        <td align="center">Monocromo</td>
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
        <th>e-paper de 2.9 pulgadas - Color cuádruple 128x296 </th>
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
- Después de establecer el Ancho Máximo y la Altura, es necesario hacer clic en la flecha para confirmar.
- No incluir datos de cabecera.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Paso 3.** Haz clic en "Save" para guardar el array de salida lcd como un archivo `.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## Recursos

- **[PDF]**: [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

