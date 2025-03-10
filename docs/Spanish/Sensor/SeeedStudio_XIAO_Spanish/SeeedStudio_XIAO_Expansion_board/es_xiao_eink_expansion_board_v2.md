---
title: Placa Controladora de ePaper para XIAO Versión 2
description: The eInk expansion board For XIAO is a smart module from Seeed Studio designed to display something in epaper screen. 
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/titleimg.webp
slug: /es/xiao_eink_expansion_board_v2
keywords:
  - XIAO
  - epaper
  - eink
last_update:
  author: Guillermo
  date: 02/16/2025
---

# Placa Controladora de ePaper para XIAO Versión 2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/headimage.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

La placa controladora de ePaper cuenta con un conector FPC de 24 pines, un IC de carga incorporado para una carga eficiente y segura de la batería, y un conector JST de 2 pines para una conexión fácil de la batería. Es ideal para crear marcos de fotos digitales habilitados para WiFi.

:::note
Esta placa de expansión no incluye una pantalla ePaper; la pantalla debe ser comprada por separado.
:::

## Introducción

### Características

- **IC de Carga Incorporado**: Asegura una carga eficiente y segura de la batería.
- **Conector BAT con Interruptor**: Permite una conexión fácil de la batería e incluye un interruptor para combinar la batería y el interruptor, logrando un ahorro de energía más eficiente.
- **Conector PFC de 24 Pines**: Proporciona opciones de conectividad versátiles para varios periféricos.
- **Puerto de E/S de Expansión**: Permite la conexión de sensores adicionales, como sensores de temperatura y humedad, para una funcionalidad mejorada.
- **Compatible con el Ecosistema Seeed Studio XIAO**: Se integra perfectamente con la serie XIAO (Versión Pre-Soldada) para el desarrollo versátil de proyectos.

### Aplicaciones

- **Tablero de Hogar Inteligente**: Muestra información en tiempo real como actualizaciones del clima, eventos del calendario y notificaciones de varios dispositivos del hogar inteligente.
- **Monitoreo de Energía**: Muestra datos de consumo energético de medidores inteligentes, ayudando a los propietarios a realizar un seguimiento y gestionar su consumo de energía de manera más eficiente.
- **Alertas de Seguridad**: Muestra alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Pantalla de Termostato Inteligente**: Muestra los niveles de temperatura y humedad, así como las configuraciones de control de tu termostato inteligente.
- **Marco de Fotos Digital**: Crea un marco de fotos digital habilitado para WiFi que pueda mostrar imágenes de tu red de hogar inteligente.

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/overview.png" style={{width:700, height:'auto'}}/></div>

1. **Conector FPC de 24 pines**: Para la interfaz ePaper.
2. **Conector JST BAT**: Para la conexión de la batería e interruptor.
3. **Conector XIAO**: Para conectar la placa de desarrollo Seeed Studio XIAO.
4. **Salida de E/S**: Para conectar sensores Grove u otros controladores, como Arduino UNO o Raspberry Pi.
5. **Interruptor de encendido**: Para el control de la energía de la batería.

### Definiciones de los Pines

<div class="table-center">

|  ePaper SPI Pins |  XIAO  | 
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

### ePaper Soportados

1. [Pantalla ePaper Monocromática de 1.54 pulgadas - 200x200 píxeles](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [Pantalla ePaper Monocromática Flexible de 2.13 pulgadas - 212x104 píxeles](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [Pantalla ePaper de 2.13 pulgadas - Cuádruple color 212x104 píxeles](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [Pantalla ePaper Monocolor de 2.9 pulgadas - 128x296 píxeles](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [Pantalla ePaper de 2.9 pulgadas - Cuádruple color 128x296 píxeles](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [Pantalla ePaper Monocolor de 4.2 pulgadas - 400x300 píxeles](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [Pantalla ePaper de 5.65 pulgadas - Siete colores 600x480 píxeles](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
8. [Pantalla ePaper Monocolor de 5.83 pulgadas - 648x480 píxeles](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
9. [Pantalla ePaper Monocolor de 7.5 pulgadas - 800x480 píxeles](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

## Empezando

### Preparación del Hardware

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32S3</th>
	    <th>ePaper expansion board</th>
	    <th>7.5 inch epaper screen</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010634-seeed-studio-xiao-esp32s3-_pre-soldered_-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/tableimg.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-308030054-ink-7.5-monochrome-epaper-display-with-800x480-pixels-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

:::tip
Excepto por el XIAO SAMD21, que no tiene suficiente FLASH y RAM para ejecutar programas en pantallas ePaper de 5.65 y 7.5 pulgadas, todos los demás modelos de XIAO son compatibles con todos los tamaños de pantallas ePaper.
:::

Inserta el ePaper en el conector FPC: Desliza cuidadosamente tu pantalla ePaper en el conector FPC de 24 pines en la placa de expansión ePaper.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/e3.png" style={{width:600, height:'auto'}}/></div>

Inserta el XIAO en el zócalo XIAO: Alinea los pines y coloca suavemente tu XIAO en el zócalo XIAO de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/e4.png" style={{width:600, height:'auto'}}/></div>



### Preparación del software  
La herramienta de programación recomendada es el Arduino IDE. Necesitarás configurar el entorno de Arduino para el XIAO y añadir el paquete correspondiente a la placa.
:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente consultar [Comenzando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

**Paso 1.** Abre la aplicación de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

**Paso 2.** Selecciona el modelo de tu placa de desarrollo y agrégalo al IDE de Arduino.

- Si deseas usar **Seeed Studio XIAO RP2040** para los siguientes procedimientos, consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** para agregarlo correctamente.

- Si deseas usar **Seeed Studio XIAO nRF52840** para los siguientes procedimientos, consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** para agregarlo correctamente.

- Si deseas usar **Seeed Studio XIAO ESP32C3** para los siguientes procedimientos, consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** para agregarlo correctamente.

- Si deseas usar **Seeed Studio XIAO ESP32S3** para los siguientes procedimientos, consulta **[este tutorial](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** para agregarlo correctamente.

Para otros modelos de XIAO, consulta la página de inicio de ese XIAO para agregarlo correctamente.

### Ejemplo de demostración

#### Demo 1. Mostrar interfaz gráfica

##### Paso 1. Descargar el código

Haz clic en el siguiente botón para descargar el código.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Allen-Kuang/Seeed_ePaper_driver_board_for_XIAO_V2">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/e5.png" style={{width:700, height:'auto'}}/></div>

Descomprime el código y selecciona el tamaño del ePaper que estás utilizando. Luego, abre el archivo **example.ino** a través del IDE de Arduino.

:::tip
Actualmente, solo los ePaper de 4.2 pulgadas y 7.5 pulgadas son compatibles con la función de GUI.
:::

**Descripción de la función**

Antes de comenzar a desarrollar un sketch, echemos un vistazo a las funciones disponibles.

- `void EPD_HW_Init()` —— Inicialización de actualización de pantalla completa.
  
- `void EPD_HW_Init_180()` —— Inicialización de rotación de pantalla a 180 grados.

- `void EPD_WhiteScreen_ALL(const unsigned char *datas)` —— Función de actualización de pantalla completa.
  - **Parámetros de entrada:**
  
    - **datas:** Los datos de la imagen que necesitan ser actualizados.
    
- `void EPD_WhiteScreen_White()` —— Función para borrar la pantalla.
  
- `void EPD_WhiteScreen_Black()` —— Función para mostrar toda la pantalla en negro.
  
- `void EPD_DeepSleep()` —— Función de sueño profundo, entra en el modo de reposo, y no debe eliminarse, de lo contrario, reducirá la vida útil de la pantalla.
  
- `void EPD_Init_Part()` —— Actualización parcial de la pantalla.

- `void EPD_SetRAMValue_BaseMap(const unsigned char * datas)` —— Actualización parcial del fondo de la pantalla.
  - **Parámetros de entrada:**
  
    - **datas:** Los datos de la imagen que necesitan ser actualizados.
    
- `void EPD_Dis_PartAll(const unsigned char *datas)` —— Actualización parcial de pantalla completa.
  
- `void EPD_Dis_Part(unsigned int x_start,unsigned int y_start,const unsigned char * datas,unsigned int PART_COLUMN,unsigned int PART_LINE)` —— Actualización parcial de la pantalla.
  - **Parámetros de entrada:**
  
    - **unsigned int x_start:** El valor de x del punto de inicio.
    - **unsigned int y_start:** El valor de y del punto de inicio.
    - **const unsigned char * datas:** Los datos que necesitan ser cambiados.
    - **unsigned int PART_COLUMN:** La longitud del área a cambiar.
    - **unsigned int PART_LINE:** El ancho del área a cambiar.

- `void EPD_HW_Init_Fast()` —— Función de actualización rápida.

- `void EPD_WhiteScreen_ALL_Fast(const unsigned char *datas)` —— Función de actualización rápida de pantalla completa.
  - **Parámetros de entrada:**
  
    - **datas:** Los datos de la imagen que necesitan ser actualizados.

- `void EPD_HW_Init_Fast2()` —— Función de actualización rápida.

##### Paso 2. Ejecutar código

Selecciona la placa de desarrollo que estás utilizando y haz clic en el **botón de cargar** para cargar el código a XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/e7.png" style={{width:700, height:'auto'}}/></div>

Cuando funcione bien, verá el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_GUI_display.gif" style={{width:700, height:'auto'}}/></div>

#### Demo 2. Mostrar imagen

##### Paso 1. Crear una imagen

Usa el software integrado **Paint** en Windows para crear una imagen con la **misma resolución** (la resolución de los diferentes tipos de pantallas está en la tabla a continuación) que la pantalla que estás utilizando, y guárdala como un archivo `BMP` o `JPG`.

:::tip
La resolución de tu imagen debe ser la misma que la de la pantalla que estás utilizando. Por ejemplo, si la pantalla de papel electrónico de 4.2 pulgadas tiene una resolución de 400 x 300 píxeles, no puedes usar un tamaño de 300 x 400, ya que esto causará que el archivo `.h` generado por image2lcd tenga 200 bytes adicionales.
:::

Los colores de la imagen deben ser consistentes con los colores estándar de la pizarra de dibujo que viene con Windows. Los colores de la pizarra de dibujo son los siguientes:

<div class="table-center">

|      E-paper      | Colores |
|       ---      |  ---   |
|1.54-inch E-paper - Dotmatix **200x200**           | negro puro y blanco          |
|2.13-inch E-Paper - Flexible Monocromo **212x104** | negro puro y blanco          |
|2.13-inch E-Paper - Cuádruple **212x104**          | negro, blanco, rojo y amarillo |
|2.9-inch E-paper - Monocolor **128x296**           | negro puro y blanco          |
|2.9-inch E-paper - Cuádruple color **128x296**     | negro, blanco, rojo y amarillo |
|4.2-inch E-Paper - Monocolor **400x300**           | negro puro y blanco          |
|5.65-inch E-paper - Siete colores **600x480**      | negro, blanco, rojo, amarillo, azul, verde, naranja |
|5.83-inch E-paper - Monocolor **648x480**          | negro puro y blanco          |
|7.5-inch E-paper - Monocolor **800x480**           | negro puro y blanco          |

</div>

##### Paso 2. Conversión de imagen a mapa de bits

Descarga y abre [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z), descomprímelo y abre **Img2Lcd.exe**.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

Abre la imagen, selecciona el "Tipo de archivo de salida" como "C array (*.c)", selecciona el "Modo de escaneo" como "Escaneo horizontal", y configura los demás parámetros de la siguiente manera:

:::tip
- Después de configurar el **ancho y alto máximos**, **es necesario hacer clic en la flecha para confirmar**.
- No incluyas los datos de encabezado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

Haz clic en "Guardar" para guardar el array de salida del LCD **como un archivo `.h`**. Guarda ese archivo, lo usaremos más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>





##### Paso 3. Mostrar imagen

Descarga el código de demostración y abre el código para tu pantalla ePaper específica. 

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Allen-Kuang/Seeed_ePaper_driver_board_for_XIAO_V2">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Toma como ejemplo el uso de una pantalla ePaper de 4.2 pulgadas y un XIAO ESP32S3. Una vez que hayas descargado y descomprimido el código de demostración, navega y abre la carpeta "4.2 inch E-paper - Monocolor 400x300".

Luego, abre la carpeta "example" y usa el Arduino IDE para abrir el archivo "example.ino":

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/3.png" style={{width:700, height:'auto'}}/></div>

Coloca el archivo `.h` generado por image2lcd en la misma carpeta del ejemplo. **Reabre el archivo `example.ino` y agrega la inclusión del archivo `.h`.** Abre el archivo `image.h` y **copia el nombre del array en la función EPD_WhiteScreen_ALL()**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/e1.png" style={{width:800, height:'auto'}}/></div>

Haz clic en el menú desplegable de selección de placa y luego en "Seleccionar otra placa y puerto...",

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/4.png" style={{width:500, height:'auto'}}/></div>

Selecciona el puerto de comunicación de tu XIAO, luego busca y selecciona "XIAO_ESP32S3".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/5.png" style={{width:700, height:'auto'}}/></div>

Haz clic en "Subir" para cargar el firmware en XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/e2.png" style={{width:500, height:'auto'}}/></div>

Deberías ver la pantalla ePaper actualizando y mostrando la imagen de demostración como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/8.png" style={{width:500, height:'auto'}}/></div>


## Soporte Técnico y Discusión de Productos  

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








