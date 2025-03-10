---
description: XIAO Round Dislay Basic Tutorial
title: Comenzando con la pantalla redonda de Seeed Studio para XIAO
keywords:
- XIAO
- Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/get_start_round_display
last_update:
  date: 02/15/2025
  author: Guillermo
---

# Comenzando con la pantalla redonda de Seeed Studio para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>


## Introducción

La pantalla redonda de Seeed Studio para XIAO es una placa de expansión compatible con todas las placas de desarrollo XIAO. Cuenta con una pantalla táctil completamente cubierta en un lado, diseñada como un disco de 39 mm. Además, incluye un RTC integrado, un chip de carga y una ranura para tarjeta TF dentro de su tamaño compacto, lo que la hace perfecta para pantallas interactivas en hogares inteligentes, dispositivos portátiles y más.

<table align="center">
	<tr>
		<th>REV</th>
		<th>Descripción</th>
		<th>FECHA</th>
		<th>POR</th>
	</tr>
	<tr>
		<td>v1.0</td>
		<td>Versión inicial</td>
		<td>2023/1/29</td>
		<td>Linus.Liao</td>
	</tr>
	<tr>
		<td>v1.1</td>
		<td>1.Cambio Cargador Batería Li<br />2. Agregar un interruptor a A0 y D6</td>
		<td>2023/4/7</td>
		<td>Linus.Liao</td>
	</tr>
</table>


### Especificación

<table align="center">
	<tr>
	    <th>Artículo</th>
	    <th>Detalle</th>
	</tr>
	<tr>
	    <th>Fuente de alimentación</th>
	    <td>USB Tipo-C: 5V @35 mA <br></br> Batería: 3.7V @37mA</td>
	</tr>
	<tr>
	    <th>Corriente de carga</th>
	    <td>~ 485 mA</td>
	</tr>
  <tr>
	    <th>Memoria expandible</th>
	    <td>Ranura para tarjeta TF para hasta 32GB FAT</td>
	</tr>
  <tr>
	    <th>Screen</th>
	    <td>Pantalla táctil de 1.28 pulgadas <br></br> 240×240 resolution <br></br> 65K colors</td>
	</tr>
  <tr>
	    <th>Otros equipos externos</th>
	    <td>Conector JST 1.25</td>
	</tr>
  <tr>
	    <th>Dimensión</th>
	    <td>39mm x 39mm</td>
	</tr>
</table>


### Características

- **Pantalla táctil capacitiva de expansión**: Pantalla redonda de 1.28 pulgadas, resolución de 240×240, 65K colores, que proporciona una exhibición de imágenes clara y colorida.
- **Alta compatibilidad**: Alta compatibilidad con todos los productos de la serie XIAO, fácilmente integrable en tus proyectos actuales.
- **Periféricos ricos**: Cuenta con RTC integrado, chip de carga de batería, ranura para tarjeta TF, conector JST 1.25, todo dentro de su tamaño compacto.
- **Diseño tamaño reloj**: Viene con un diseño circular de 39 mm, adecuado para proyectos portátiles y con espacio limitado.
- **Conectar y usar**: Todos los pines están expuestos, no se necesita soldadura.

## Visión general del hardware

Antes de comenzar, podemos consultar las siguientes imágenes para entender el diseño de los pines de la pantalla redonda y facilitar nuestra comprensión de la función de la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

Desde el 7 de abril de 2023, la pantalla redonda mejorada añade un interruptor de 2 bits para controlar la retroiluminación de la pantalla y la lectura de voltaje de la batería. Esto permite al usuario elegir libremente si utilizar el pin o liberarlo. Haz clic [aquí](https://wiki.seeedstudio.com/seeedstudio_round_display_usage/#ke-button--gpio) para leer más detalles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## Empezando

### Preparación de hardware

Si deseas aprovechar al máximo las capacidades de la pantalla redonda y tener una excelente experiencia, te recomendamos encarecidamente que adquieras nuestra serie XIAO como placa base para la pantalla redonda.

:::tip
Las placas XIAO SAMD21, RP2040 y RA4M1 **no** son completamente compatibles con pantallas circulares debido a la memoria insuficiente.
:::

<table align="center">
	<tr>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C6</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

La fila de pines en la parte posterior de la pantalla redonda está diseñada para la serie XIAO. Si tienes una placa XIAO a mano, no necesitarás cables adicionales, solo alinea los pines de la XIAO y conéctalos directamente a la pantalla redonda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
Ten en cuenta que al conectar la XIAO, **el conector Tipo-C de la XIAO debe estar orientado hacia el exterior de la pantalla redonda**. Si por accidente conectas la polaridad al revés, no te preocupes demasiado, ya que la pantalla redonda tiene un circuito de protección de energía que no se dañará fácilmente. Sin embargo, no recomendamos mantener la conexión invertida durante mucho tiempo.
:::

La orientación recomendada para la pantalla redonda es: cuando mires la pantalla redonda, el conector Type-C de la XIAO debe estar orientado hacia la derecha, de modo que el botón de encendido/apagado de la pantalla redonda quede en la esquina inferior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### Preparación de Software

Para usar la pantalla redonda, necesitamos programar la serie XIAO. La herramienta de programación recomendada es el Arduino IDE, y es necesario configurar el entorno de Arduino para la XIAO y agregar el paquete correspondiente para la placa.

:::tip
Si es la primera vez que usas Arduino, te recomendamos consultar el tutorial [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) para una guía detallada.
:::

#### Paso 1. Descarga e instala la versión estable del IDE de Arduino según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### Paso 2. Abre la aplicación de Arduino.

#### Paso 3. Configura el IDE de Arduino para la XIAO que estés utilizando.

- Si deseas usar **Seeed Studio XIAO RP2350** para los siguientes procedimientos, consulta **[este tutorial](https://wiki.seeedstudio.com/getting-started-xiao-rp2350/)** para completar la configuración.

- Si deseas usar **Seeed Studio XIAO nRF52840** para los siguientes procedimientos, consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** para completar la configuración.

- Si deseas usar **Seeed Studio XIAO ESP32C3** para los siguientes procedimientos, consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la configuración.

- Si deseas usar **Seeed Studio XIAO ESP32C6** para los siguientes procedimientos, consulta **[este tutorial](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/#software-preparation)** para completar la configuración.

- Si deseas usar **Seeed Studio XIAO ESP32S3** para los siguientes procedimientos, consulta **[este tutorial](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** para completar la configuración.

#### Paso 4. Añadir la librería Round Display a Arduino.

Primero, necesitas descargar las librerías **TFT_eSPI**, **LVGL** y **Round Screen** en los siguientes enlaces.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/SeeedStudio_lvgl">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar bibliotecas LVGL</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/SeeedStudio_TFT_eSPI">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar bibliotecas TFT</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar bibliotecas de pantalla</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

Una vez que hayas descargado el archivo .ZIP de la librería, abre tu Arduino IDE, haz clic en **Sketch > Incluir librería > Añadir librería .ZIP**. Selecciona el archivo .ZIP que acabas de descargar y, si la librería se instala correctamente, verás un mensaje en la ventana de notificaciones que dice **Librería añadida a tus bibliotecas**. Esto significa que la librería se instaló correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

Necesitamos usar la función RTC en la pantalla redonda, así que también debes buscar e instalar la librería **I2C BM8563 RTC**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>

Luego, debes tomar el archivo `lv_conf.h` y colocarlo en el directorio raíz de la biblioteca de Arduino.

:::caution
Es importante señalar que el archivo `lv_conf.h` aquí es del paquete **Seeed_Arduino_RoundDisplay**, no de la biblioteca **LVGL**.
:::

En Windows, el directorio raíz de la biblioteca Arduino es:

`C:\Users\${UserName}\Documents\Arduino\libraries`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/54.png" style={{width:800, height:'auto'}}/></div>

#### Paso 5. (Opcional) Configurar el entorno de uso

Actualmente, el Round Display es compatible con dos bibliotecas de pantalla diferentes: **TFT_eSPI** y **Arduino GFX**. Para el XIAO SAMD21 y XIAO nRF52840, no hay suficiente memoria para ejecutar la biblioteca TFT, por lo que **Arduino GFX** tendrá un rendimiento significativamente mejor. Puedes buscarla en el Arduino IDE y descargarla.

:::tip
Si necesitas usar la biblioteca **TFT_eSPI**, entonces continúa con el **paso 5**. Si estás usando **Arduino GFX**, puedes omitir este paso.

Para el contenido de Round Display, nuestro tutorial se centrará en el uso de **TFT_eSPI**.
:::



### Resumen de la biblioteca Arduino

Como probablemente se puede deducir del tutorial anterior, **Round Display** utiliza principalmente las bibliotecas **LVGL**, **TFT_eSPI** y **Arduino GFX**. Para ahorrar espacio, presentaremos el uso de las bibliotecas **LVGL** y **TFT_eSPI** por separado con el ejemplo de dibujar un dial.

- Puedes aprender sobre la interfaz y el uso de la biblioteca **TFT_eSPI** haciendo clic **[aquí](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)**.

- Puedes aprender sobre la interfaz y el uso de la biblioteca **LVGL** haciendo clic **[aquí](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)**.

- Puedes aprender sobre la interfaz y el uso de la biblioteca **Arduino GFX** haciendo clic **[aquí](https://github.com/moononournation/Arduino_GFX)**.

## Enciende tu Round Display

### Demo 1: Reloj TFT

Una vez que el hardware y el software estén listos, comenzamos a cargar nuestro primer programa de ejemplo. Este programa de muestra se puede utilizar para verificar si el reloj RTC del Round Display está funcionando correctamente. Debido a que esta demo requiere una pequeña cantidad de memoria, es adecuada para todos los modelos XIAO.

:::tip
Si deseas modificar esta demo para implementar pantallas más complejas, ten en cuenta el tamaño de memoria del XIAO que estás utilizando. El tamaño específico se puede encontrar en la página de introducción de ese XIAO.
:::

YPuedes encontrar este programa de ejemplo en el IDE de Arduino en **Archivo -> Ejemplos -> Seeed Arduino Round display -> TFT_Clock**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

Solo selecciona el XIAO que estás utilizando y el número de puerto donde se encuentra el XIAO, compila y súbelo.

Asegúrate de que el interruptor del Round Display esté en la posición ON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

Si el programa se ejecuta sin problemas, verá el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### Demo 2: Prueba de Hardware

Debido a que la demo HardwareTest es un poco compleja y ocupa una mayor cantidad de memoria, algunos modelos de XIAO pueden no ejecutarse correctamente debido a la falta de memoria. Hemos creado una tabla de prueba para tu referencia, utilizando la biblioteca TFT y la biblioteca Arduino GFX.

|         | Biblioteca TFT | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 non mbed version| ✅  | ❌  |
| XIAO nRF52840 mbed version| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

Este programa de ejemplo se puede utilizar para verificar si el reloj RTC, la tarjeta SD y las funciones táctiles del Round Display están funcionando correctamente.

Puedes encontrar este programa de ejemplo en el IDE de Arduino en **Archivo -> Ejemplos -> Seeed Arduino Round display -> HardwareTest**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

Solo selecciona el XIAO que estás utilizando y el número de puerto donde se encuentra el XIAO, compila y súbelo.

Asegúrate de que el interruptor del Round Display esté en la posición ON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

Si el programa se ejecuta sin problemas, verá el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
Este programa de ejemplo probará todos los elementos funcionales de la placa de expansión, incluida la función RTC. Si no tienes instalada la biblioteca I2C BM8563 RTC, es posible que se reporte un error. Puedes comentar la función `lv_hardware_test()`, de modo que la detección funcional de la tarjeta SD también se desactive.
:::

## Actualización del firmware de calibración

:::tip
Si encuentras que el tacto a veces no responde, puedes seguir los pasos a continuación para actualizar el firmware de calibración de la pantalla.
:::

1. Descarga los códigos desde este [enlace](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. Colócalos en el mismo directorio y ejecuta este firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. Abre el monitor serial y verás un mensaje de éxito como la imagen de abajo, lo que significa que la actualización fue exitosa y puedes cargar tu programa para probarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## Solución de problemas

### P1: ¿Por qué no muestra nada la pantalla después de cargar el programa?

R: Por favor, verifica que el interruptor del Round Display esté encendido. Si estás utilizando el XIAO ESP32C3, también es posible que necesites presionar el botón de Reset después de cargar el programa para que funcione.

### P2: Si quiero conectar el Seeed Studio XIAO ESP32S3 Sense a esta pantalla de expansión, ¿habrá un conflicto con dos ranuras para tarjetas TF?

R: Esto no crea un conflicto. Las diferentes ranuras para tarjetas SD son controladas mediante selección de chip. Si deseas usar la ranura microSD en Sense, el pin de selección de chip debe ser **21**. Si deseas usar la ranura microSD en Round Display, el pin de selección de chip debe ser **D2**.

Tenemos [ejemplos](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera) de cómo usar tanto hardware como microSD en el tutorial de la cámara S3 Sense.

### P3: ¿Por qué mi XIAO RP2040 da un error extraño de C++ al usar el código para HardwareTest con Round Display?

R: Esto puede deberse a que no has seleccionado la opción de compilación adecuada para el XIAO RP2040. Por favor, consulta el diagrama a continuación para configurarlo y volver a cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Hoja de datos del Charge IC](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [Hoja de datos del ETA3410](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [Hoja de datos del RTC PCF8563](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [Hoja de datos de la pantalla LCD TFT a-Si de 1.28''](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Esquema del Seeed Studio Round Display para XIAO](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Esquema del Seeed Studio Round Display para XIAO v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [Hoja de datos de GJX0128A4-15HY](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Esquema y PCB del Seeed Studio Round Display para XIAO](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Esquema y PCB del Seeed Studio Round Display para XIAO v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [Modelo 3D del Round Display para XIAO](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Diagrama del modelo 3D de la carcasa para Round Display](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Caja para Seeed Studio XIAO ESP32 S3 Sense con pantalla redonda](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el apoyo necesario para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

