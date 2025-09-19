---
description: Tutorial Básico de XIAO Round Display
title: Primeros Pasos con Seeed Studio Round Display para XIAO
keywords:
- XIAO
- Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/get_start_round_display
last_update:
  date: 07/11/2024
  author: Spencer
---

# Primeros Pasos con Seeed Studio Round Display para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


## Introducción

Seeed Studio Round Display para XIAO es una placa de expansión compatible con todas las placas de desarrollo XIAO. Cuenta con una pantalla táctil completamente cubierta en un lado, diseñada como un disco de 39mm. Contiene RTC integrado, chip de carga, ranura para tarjeta TF dentro de su tamaño compacto, perfecto para pantallas interactivas en hogar inteligente, dispositivos portátiles y más.

<table align="center">
	<tr>
		<th>REV</th>
		<th>Descripción</th>
		<th>FECHA</th>
		<th>POR</th>
	</tr>
	<tr>
		<td>v1.0</td>
		<td>Versión Inicial</td>
		<td>2023/1/29</td>
		<td>Linus.Liao</td>
	</tr>
	<tr>
		<td>v1.1</td>
		<td>1.Cambiar IC de Carga de Batería Li<br />2.Agregar un interruptor a A0 y D6</td>
		<td>2023/4/7</td>
		<td>Linus.Liao</td>
	</tr>
</table>

### Especificación

<table align="center">
	<tr>
	    <th>Elemento</th>
	    <th>Detalle</th>
	</tr>
	<tr>
	    <th>Fuente de Alimentación</th>
	    <td>USB Tipo-C: 5V @35 mA <br></br> Carga de Batería: 3.7V @37mA</td>
	</tr>
	<tr>
	    <th>Corriente de carga</th>
	    <td>~ 485 mA</td>
	</tr>
  <tr>
	    <th>Memoria expandible</th>
	    <td>Ranura para tarjeta TF hasta 32GB FAT</td>
	</tr>
  <tr>
	    <th>Pantalla</th>
	    <td>Pantalla táctil de 1.28 pulgadas <br></br> Resolución 240×240 <br></br> 65K colores</td>
	</tr>
  <tr>
	    <th>Otro Equipo Externo</th>
	    <td>Conector JST 1.25</td>
	</tr>
  <tr>
	    <th>Dimensión</th>
	    <td>39mm x 39mm</td>
	</tr>
</table>

### Características

- **Placa de Expansión con Pantalla Táctil Capacitiva**: Pantalla redonda de 1.28 pulgadas, resolución 240×240, 65K colores, proporcionando una exhibición de imágenes clara y colorida
- **Alta Compatibilidad**: Altamente compatible con todos los productos de la serie XIAO, fácilmente integrable en tus proyectos actuales
- **Periféricos Ricos**: Incluye RTC integrado, chip de carga de batería, ranura para tarjeta TF, conector JST 1.25, todo dentro de su tamaño compacto
- **Diseño del Tamaño de un Reloj**: Viene con diseño circular de 39 mm, adecuado para proyectos portátiles y con limitaciones de espacio
- **Plug and Play**: Todos los pines están disponibles, no se necesita soldadura


## Descripción General del Hardware

Antes de comenzar, podemos referirnos a las siguientes imágenes para entender el diseño de pines de la Pantalla Redonda para facilitar nuestra comprensión de la función de la Pantalla Redonda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

Desde el 7 de abril de 2023, la Pantalla Redonda renovada añade un Interruptor de 2 bits para controlar la retroiluminación de la pantalla y la lectura del voltaje de la batería. Para que el usuario pueda elegir libremente si usar el pin o liberarlo. Haz clic [aquí](https://wiki.seeedstudio.com/es/seeedstudio_round_display_usage/#ke-button--gpio) para leer más detalles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## Primeros Pasos

### Preparación del Hardware

Si quieres aprovechar todas las capacidades de la Pantalla Redonda y tener una gran experiencia, te recomendamos encarecidamente que compres nuestra serie XIAO como placa madre para la Pantalla Redonda.

:::tip
XIAO SAMD21, RP2040 y RA4M1 pueden **no** ser compatibles con pantallas circulares debido a memoria insuficiente.
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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

La fila de pines en la parte posterior del Round Display está diseñada para la serie XIAO. Si tienes XIAO a mano, no necesitas preparar cables adicionales, simplemente alinea los pines del XIAO y conéctalos directamente al Round Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
Ten en cuenta que al conectar el XIAO, **el conector Type-C del XIAO debe estar orientado hacia el exterior del Round Display**. Si accidentalmente inviertes la polaridad, no te preocupes demasiado, el Round Display tiene un circuito de protección de energía que no se dañará fácilmente, pero no recomendamos que mantengas la conexión invertida durante mucho tiempo.
:::

La orientación recomendada para el Round Display es: cuando mires hacia el Round Display, el conector Type-C del XIAO debe estar orientado hacia la derecha, de modo que el botón de encendido/apagado del Round Display esté en la esquina inferior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### Preparación del Software

Para usar el Round Display, necesitamos programar la serie XIAO. La herramienta de programación recomendada es el Arduino IDE, y necesitas configurar el entorno Arduino para el XIAO y agregar el paquete de la placa.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

#### Paso 1. Descarga e instala la versión estable del Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

#### Paso 2. Ejecuta la aplicación Arduino.

#### Paso 3. Configura el Arduino IDE para el XIAO que estés usando.

- Si quieres usar **Seeed Studio XIAO RP2350** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/getting-started-xiao-rp2350/)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO ESP32C6** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#software-preparation)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la configuración.

#### Paso 4. Instalación de bibliotecas gráficas y bibliotecas de controladores de pantalla

Para usar el round display, necesitamos instalar dos bibliotecas con anticipación. Una es la biblioteca de controladores de dispositivo del round display, que se usa para controlar las funciones de pantalla y táctil del dispositivo. La otra es la biblioteca de visualización gráfica, que proporciona algunas interfaces muy comunes para dibujar gráficos.

1. Descarga la biblioteca **Seeed_Arduino_RoundDisplay** desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. Descarga la biblioteca **Seeed_GFX** desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. Instala la biblioteca agregando el archivo ZIP en Arduino IDE. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::note
Si previamente has instalado la biblioteca TFT_eSPI, es posible que necesites eliminarla temporalmente o renombrarla en tu carpeta de bibliotecas de Arduino para evitar conflictos, ya que Seeed_GFX es una bifurcación de TFT_eSPI con características adicionales.
:::

### Descripción General de la Biblioteca Arduino

Como probablemente podemos deducir del tutorial anterior, Round Display utiliza principalmente las bibliotecas **LVGL**, **TFT_eSPI** y **Arduino GFX**. Por cuestiones de espacio, presentaremos el uso de las bibliotecas **LVGL** y **TFT_eSPI** por separado con el ejemplo de dibujar un dial.

- Puedes aprender sobre la interfaz y el uso de la biblioteca **TFT_eSPI** haciendo clic **[aquí](https://wiki.seeedstudio.com/es/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)**.

- Puedes aprender sobre la interfaz y el uso de la biblioteca **LVGL** haciendo clic **[aquí](https://wiki.seeedstudio.com/es/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)**.

- Puedes aprender sobre la interfaz y el uso de la biblioteca **Arduino GFX** haciendo clic **[aquí](https://github.com/moononournation/Arduino_GFX)**.

## Enciende tu Round Display

### Demo 1: Arduino Life - Cómo usar la biblioteca Seeed_GFX en round display

Abre el sketch de ejemplo de la biblioteca Seeed_GFX: **[File > Seeed_GFX > Examples > Round Display > Arduino_Life](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/Round%20Display/Arduino_Life/Arduino_Life.ino)**

Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch de Arduino haciendo clic en la flecha junto a la pestaña del ejemplo y seleccionando "New Tab".

Nombra el nuevo archivo como `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

Ve a la [Herramienta de Configuración Seeed GFX](https://seeed-studio.github.io/Seeed_GFX/), y selecciona "TRMNL 7.5" (OG) DIY Kit" como se muestra en la imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/108.png" style={{width:600, height:'auto'}}/></div>

Copia el código generado y pégalo en el archivo `driver.h` que creaste. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 501 // Round Display for Seeed Studio XIAO （GC9A01)
```

¡Ahora puedes subir el ejemplo a tu TRMNL DIY Kit y ver la pantalla ePaper en acción!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/107.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Ten en cuenta que el código para todas las pantallas posteriores necesita estar acompañado de un archivo driver.h, que se utiliza para seleccionar el tipo de pantalla a usar.
:::

### Demo 2: Reloj TFT

:::caution
Por favor consulta Demo1, crea un nuevo archivo `driver.h` en el mismo directorio que el archivo `.ino`, y mantén el siguiente código en él: `#define BOARD_SCREEN_COMBO 501`
:::

:::tip
Necesitamos usar la función RTC en la pantalla redonda, así que también necesitas buscar e instalar la librería **I2C BM8563 RTC**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

Una vez que el hardware y software estén listos, comenzamos subiendo nuestro primer programa de ejemplo. Este programa de muestra puede usarse para verificar si el reloj RTC de la Pantalla Redonda está funcionando correctamente. Debido a que esta demo requiere una pequeña cantidad de memoria, es adecuada para todos los modelos XIAO.

:::tip
Si quieres modificar esta demo para implementar pantallas más complejas, por favor ten en cuenta el tamaño de memoria del XIAO que estás usando. El tamaño específico se puede encontrar en la página de introducción de ese XIAO.
:::

Puedes encontrar este programa de muestra en el Arduino IDE bajo **File -> Examples -> Seeed Arduino Round display -> TFT_Clock**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

Solo selecciona el XIAO que estás usando y el número de puerto donde está ubicado el XIAO, compila y súbelo.

Asegúrate de que el interruptor de la Pantalla Redonda esté en la posición ON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

Si el programa se ejecuta sin problemas, verás el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### Demo 3: Prueba de Hardware

:::caution
Por favor consulta Demo1, crea un nuevo archivo `driver.h` en el mismo directorio que el archivo `.ino`, y mantén el siguiente código en él: `#define BOARD_SCREEN_COMBO 501`
:::

Debido a que la demo HardwareTest es un poco compleja y ocupa una mayor cantidad de memoria, algunos modelos XIAO pueden fallar al ejecutarse exitosamente debido a memoria insuficiente. Hemos creado una tabla de prueba para tu referencia, usando la librería TFT y la librería Arduino GFX.

|         | Librería TFT | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 versión no mbed| ✅  | ❌  |
| XIAO nRF52840 versión mbed| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

Este programa de ejemplo se puede usar para verificar si el reloj RTC de la Round Display, la tarjeta SD y las funciones táctiles están funcionando correctamente.

:::tip
Necesitamos usar la función RTC en la pantalla redonda, por lo que también necesitas buscar e instalar la biblioteca **I2C BM8563 RTC**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

Puedes encontrar este programa de ejemplo en el IDE de Arduino bajo **File -> Examples -> Seeed Arduino Round display -> HardwareTest**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

Solo selecciona el XIAO que estés usando y el número de puerto donde se encuentra el XIAO, compila y súbelo.

Asegúrate de que el interruptor de la Round Display esté en la posición ON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

Si el programa se ejecuta sin problemas, verás el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
Este programa de ejemplo probará todos los elementos funcionales de la placa de expansión, incluyendo la función RTC. Si no tienes instalada la biblioteca I2C BM8563 RTC, entonces puede reportarse un error, puedes comentar la función `lv_hardware_test()`, entonces la detección funcional de la tarjeta SD también se desactivará.
:::

## Actualización del Firmware de Calibración
:::tip
Si encuentras que el táctil a veces no responde, puedes seguir los pasos a continuación para actualizar el firmware de calibración de la pantalla.
:::

1. Descarga los códigos desde este [enlace](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. Ponlos en el mismo directorio y ejecuta este firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. Abre el monitor serie y verás un mensaje exitoso como esta imagen a continuación, lo que significa que se actualizó exitosamente y puedes subir tu programa para probarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## Solución de Problemas

### P1: ¿Por qué la pantalla no muestra nada después de subir el programa?

R: Por favor verifica que el interruptor de la Round Display esté encendido. Si estás usando el XIAO ESP32C3, también puede que necesites presionar Reset después de subir el programa para que funcione.

### P2: Si quiero conectar el Seeed Studio XIAO ESP32S3 Sense a esta pantalla de extensión, ¿habrá un conflicto con dos ranuras de tarjeta TF?

R: Esto no crea un conflicto. Las diferentes ranuras de tarjeta SD se controlan mediante selección de chip, si quieres usar la ranura de tarjeta microSD en Sense, el pin de selección de chip debe ser **21**, si quieres usar la ranura de tarjeta microSD en Round Display, el pin de selección de chip debe ser **D2**.

Tenemos [ejemplos](https://wiki.seeedstudio.com/es/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera) de usar tanto hardware como tarjetas microSD en el tutorial de cámara S3 Sense.

### P3: ¿Por qué mi XIAO RP2040 obtiene un error de C++ muy extraño al usar el código para HardwareTest con Round Display?

R: Esto puede ser causado por no seleccionar la opción de compilación apropiada para el XIAO RP2040. Por favor consulta el diagrama a continuación para configurar y volver a subir el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Hoja de datos del IC de carga](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [Hoja de datos ETA3410](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [Hoja de datos RTC PCF8563](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [Hoja de datos de pantalla de cristal líquido TFT a-Si de 1.28''](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Esquemático de Seeed Studio Round Display para XIAO](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Esquemático de Seeed Studio Round Display para XIAO v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [Hoja de datos GJX0128A4-15HY](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Esquemático y PCB de Seeed Studio Round Display para XIAO](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Esquemático y PCB de Seeed Studio Round Display para XIAO v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [El modelo 3D del Round Display para XIAO](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [El diagrama del modelo 3D de la carcasa para Round Display](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Carcasa de Seeed Studio XIAO ESP32 S3 Sense con pantalla redonda](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

