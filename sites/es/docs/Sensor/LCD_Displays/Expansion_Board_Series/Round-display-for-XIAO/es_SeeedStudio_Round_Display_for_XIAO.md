---
description: Tutorial básico de XIAO Round Dislay
title: Introducción a Seeed Studio Round Display para XIAO
keywords:
  - XIAO
  - Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /get_start_round_display
sidebar_position: 1
sku: 104030087
last_update:
  date: 4/30/2026
  author: Spencer
createdAt: '2023-03-17'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/get_start_round_display/
---

# Introducción a Seeed Studio Round Display para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Seeed Studio Round Display para XIAO es una placa de expansión compatible con todas las placas de desarrollo XIAO. Incorpora en un lado una pantalla táctil de cobertura completa, diseñada como un disco de 39 mm. Contiene RTC integrado, chip de carga y ranura para tarjeta TF dentro de su tamaño compacto, perfecta para pantallas interactivas en hogares inteligentes, wearables y más.

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
  <td>1.Cambiar el IC de carga de la batería de litio<br />2.Añadir un interruptor a A0 y D6</td>
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
     <th>Alimentación</th>
     <td>USB Type-C: 5V @35 mA <br></br> Carga de batería: 3.7V @37mA</td>
 </tr>
 <tr>
     <th>Corriente de carga</th>
     <td>~ 485 mA</td>
 </tr>
  <tr>
     <th>Memoria ampliable</th>
     <td>Ranura para tarjeta TF de hasta 32GB FAT</td>
 </tr>
  <tr>
     <th>Pantalla</th>
     <td>Pantalla táctil de 1,28 pulgadas <br></br> Resolución 240×240 <br></br> 65K colores</td>
 </tr>
  <tr>
     <th>Otro equipo externo</th>
     <td>Conector JST 1.25</td>
 </tr>
  <tr>
     <th>Dimensiones</th>
     <td>39mm x 39mm</td>
 </tr>
</table>

### Características

- **Placa de expansión con pantalla táctil capacitiva**: Pantalla redonda de 1,28 pulgadas, resolución 240×240, 65K colores, que proporciona una exhibición de imágenes clara y colorida
- **Alta compatibilidad**: Altamente compatible con todos los productos de la serie XIAO, se integra fácilmente en tus proyectos actuales
- **Periféricos ricos**: Incorpora RTC, chip de carga de batería, ranura para tarjeta TF y conector JST 1.25, todo dentro de su tamaño compacto
- **Diseño del tamaño de un reloj**: Presenta un diseño circular de 39 mm, adecuado para proyectos portátiles y con espacio limitado
- **Conectar y usar**: Todos los pines están expuestos, no se necesita soldadura

## Descripción general del hardware

Antes de empezar, podemos consultar las siguientes imágenes para comprender el diseño de pines de la Round Display y así facilitar nuestra comprensión de la función de la Round Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

Desde el 7 de abril de 2023, la Round Display renovada añade un interruptor de 2 bits para controlar la retroiluminación de la pantalla y la lectura del voltaje de la batería, de modo que el usuario pueda elegir libremente si usar el pin o liberarlo. Haz clic [aquí](https://wiki.seeedstudio.com/es/seeedstudio_round_display_usage/#ke-button--gpio) para leer más detalles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## Primeros pasos

### Preparación de hardware

Si quieres aprovechar al máximo las capacidades de la Round Display y tener una gran experiencia, te recomendamos encarecidamente que compres nuestra serie XIAO como placa base para la Round Display.

:::tip
XIAO SAMD21, RP2040 y RA4M1 **pueden no** ser compatibles con pantallas circulares debido a memoria insuficiente.
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
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

La hilera de pines en la parte posterior de la Round Display está diseñada para la serie XIAO. Si ya tienes una XIAO, no necesitas preparar cables adicionales, solo alinea los pines de la XIAO e insértalos directamente en la Round Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
Ten en cuenta que al conectar la XIAO, **el conector Type-C de la XIAO debe mirar hacia el exterior de la Round Display**. Si accidentalmente inviertes la polaridad, no te preocupes demasiado, la Round Display tiene un circuito de protección de alimentación que no se dañará fácilmente, pero no recomendamos que mantengas la conexión invertida durante mucho tiempo.
:::

La orientación recomendada para la Round Display es: cuando mires de frente la Round Display, el conector Type-C de la XIAO debe mirar hacia la derecha, de modo que el botón de encendido/apagado de la Round Display quede en la esquina inferior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### Preparación de software

Para usar la Round Display, necesitamos programar la serie XIAO. La herramienta de programación recomendada es el Arduino IDE, y debes configurar el entorno de Arduino para la XIAO y añadir el paquete de la placa.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Introducción a Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

#### Paso 1. Descarga e instala la versión estable de Arduino IDE según tu sistema operativo

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

#### Paso 2. Inicia la aplicación de Arduino

#### Paso 3. Configura el Arduino IDE para la XIAO que estás utilizando

- Si quieres usar **Seeed Studio XIAO RP2350** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/getting-started-xiao-rp2350/)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32C6** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#software-preparation)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la adición.

#### Paso 4. Instalación de las bibliotecas gráficas y de control de la pantalla

Para usar la Round Display, necesitamos instalar previamente dos bibliotecas. Una es la biblioteca del controlador del dispositivo Round Display, que se utiliza para controlar las funciones de pantalla y táctil del dispositivo. La otra es la biblioteca de visualización gráfica, que proporciona algunas interfaces muy comunes para dibujar gráficos.

1. Descarga la biblioteca **Seeed_Arduino_RoundDisplay** desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. Descarga la biblioteca **Seeed_GFX** desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. Instala la biblioteca añadiendo el archivo ZIP en Arduino IDE. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::note
Si has instalado previamente la biblioteca TFT_eSPI, es posible que tengas que eliminarla temporalmente o cambiarle el nombre en la carpeta de bibliotecas de Arduino para evitar conflictos, ya que Seeed_GFX es un fork de TFT_eSPI con funciones adicionales.
:::

### Descripción general de la biblioteca de Arduino

Como probablemente podamos ver en el tutorial anterior, Round Display utiliza principalmente las bibliotecas **LVGL**, **TFT_eSPI** y **Arduino GFX**. Por motivos de espacio, presentaremos el uso de las bibliotecas **LVGL** y **TFT_eSPI** por separado con el ejemplo de dibujar una esfera.

- Puedes conocer la interfaz y el uso de la biblioteca **TFT_eSPI** haciendo clic **[aquí](https://wiki.seeedstudio.com/es/using_lvgl_and_tft_on_round_display#interfaces-comunes-para-tft-library)**.

- Puedes conocer la interfaz y el uso de la biblioteca **LVGL** haciendo clic **[aquí](https://wiki.seeedstudio.com/es/using_lvgl_and_tft_on_round_display#interfaces-comunes-para-lvgl-library)**.

- Puedes conocer la interfaz y el uso de la biblioteca **Arduino GFX** haciendo clic **[aquí](https://github.com/moononournation/Arduino_GFX)**.

## Enciende tu Round Display

### Demo 1: Arduino Life - Cómo usar la biblioteca Seeed_GFX en la pantalla redonda

Abre el ejemplo de sketch de la biblioteca Seeed_GFX: **[File > Seeed_GFX > Examples > Round Display > Arduino_Life](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/Round%20Display/Arduino_Life/Arduino_Life.ino)**

Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch de Arduino haciendo clic en la flecha junto a la pestaña del ejemplo y seleccionando "New Tab".

Nombra el nuevo archivo como `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

Ve a la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/), y selecciona "Round Display for Seeed Studio XIAO" como se muestra en la imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/108.png" style={{width:600, height:'auto'}}/></div>

Copia el código generado y pégalo en el archivo `driver.h` que creaste. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 501 // Round Display for Seeed Studio XIAO （GC9A01)
```

¡Ahora puedes subir el ejemplo a tu Round Display y ver la pantalla LCD en acción!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/107.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Ten en cuenta que el código de todas las pantallas posteriores debe ir acompañado de un archivo driver.h, que se utiliza para seleccionar el tipo de pantalla que se va a utilizar.
:::

### Demo 2: TFT Clock

:::caution
Por favor, consulta la Demo1, crea un nuevo archivo `driver.h` en el mismo directorio que el archivo `.ino`, y mantén en él el siguiente código: `#define BOARD_SCREEN_COMBO 501`
:::

:::tip
Necesitamos usar la función RTC en la pantalla redonda, por lo que también necesitas buscar e instalar la biblioteca **I2C BM8563 RTC**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

Una vez que el hardware y el software estén listos, empezamos a subir nuestro primer programa de ejemplo. Este programa de ejemplo se puede utilizar para comprobar si el reloj RTC del Round Display funciona correctamente. Debido a que esta demo requiere una pequeña cantidad de memoria, es adecuada para todos los modelos XIAO.

:::tip
Si quieres modificar esta demo para implementar pantallas más complejas, ten en cuenta el tamaño de memoria del XIAO que estás utilizando. El tamaño específico se puede encontrar en la página de introducción de ese XIAO.
:::

Puedes encontrar este programa de ejemplo en Arduino IDE en **File -> Examples -> Seeed Arduino Round display -> TFT_Clock**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

Solo tienes que seleccionar el XIAO que estás utilizando y el número de puerto donde se encuentra el XIAO, compilarlo y subirlo.

Asegúrate de que el interruptor del Round Display esté en la posición ON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

Si el programa se ejecuta sin problemas, verás el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### Demo 3: Hareware Test

:::caution
Por favor, consulta la Demo1, crea un nuevo archivo `driver.h` en el mismo directorio que el archivo `.ino`, y mantén en él el siguiente código: `#define BOARD_SCREEN_COMBO 501`
:::

Debido a que la demo HardwareTest es un poco compleja y ocupa una mayor cantidad de memoria, algunos modelos XIAO pueden no ejecutarse correctamente debido a memoria insuficiente. Hemos creado una tabla de pruebas para tu referencia, utilizando la biblioteca TFT y la biblioteca Arduino GFX.

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

Este programa de ejemplo se puede utilizar para comprobar si el reloj RTC, la tarjeta SD y las funciones táctiles del Round Display funcionan correctamente.

:::tip
Necesitamos usar la función RTC en la pantalla redonda, por lo que también necesitas buscar e instalar la biblioteca **I2C BM8563 RTC**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

Puedes encontrar este programa de ejemplo en Arduino IDE en **File -> Examples -> Seeed Arduino Round display -> HardwareTest**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

Solo tienes que seleccionar el XIAO que estás utilizando y el número de puerto donde se encuentra el XIAO, compilarlo y subirlo.

Asegúrate de que el interruptor del Round Display esté en la posición ON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

Si el programa se ejecuta sin problemas, verás el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
Este programa de ejemplo probará todos los elementos funcionales de la placa de expansión, incluida la función RTC. Si no tienes instalada la biblioteca I2C BM8563 RTC, entonces puede aparecer un error; puedes comentar la función `lv_hardware_test()`, entonces también se desactivará la detección funcional de la tarjeta SD.
:::

## Actualización del firmware de calibración

:::tip
Si descubres que a veces la función táctil no responde, puedes seguir los pasos siguientes para actualizar el firmware de calibración de la pantalla.
:::

1. Descarga el código desde este [enlace](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. Ponlos en el mismo directorio y ejecuta este firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. Abre el monitor serie y verás un mensaje de éxito como en la imagen de abajo, lo que significa que la actualización se ha realizado correctamente y ¡puedes subir tu programa para probarlo!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## Solución de problemas

### P1: ¿Por qué la pantalla no muestra nada después de subir el programa?

R: Por favor, comprueba que el interruptor del Round Display esté encendido. Si estás utilizando el XIAO ESP32C3, es posible que también tengas que pulsar Reset después de subir el programa para que funcione.

### P2: Si quiero conectar Seeed Studio XIAO ESP32S3 Sense a esta pantalla de expansión, ¿habrá un conflicto con dos ranuras para tarjeta TF?

R: Esto no crea ningún conflicto. Las diferentes ranuras para tarjetas SD se controlan mediante chip select; si quieres usar la ranura para tarjeta microSD en Sense, el pin de chip select debe ser **21**, si quieres usar la ranura para tarjeta microSD en Round Display, el pin de chip select debe ser **D2**.

Tenemos [ejemplos](https://wiki.seeedstudio.com/es/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera) de uso tanto del hardware como de tarjetas microSD en el tutorial de la cámara S3 Sense.

### P3: ¿Por qué mi XIAO RP2040 muestra un error de C++ muy extraño cuando uso el código de HardwareTest con la pantalla redonda?

R: Esto puede deberse a que no has seleccionado la opción de compilación adecuada para la XIAO RP2040. Consulta el diagrama siguiente para configurarlo y volver a cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Hoja de datos del IC de carga](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [Hoja de datos ETA3410](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [Hoja de datos del RTC PCF8563](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [Hoja de datos de la pantalla de cristal líquido TFT a-Si de 1,28''](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Esquema de Seeed Studio Round Display for XIAO](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Esquema de Seeed Studio Round Display for XIAO v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [Hoja de datos GJX0128A4-15HY](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Esquema y PCB de Seeed Studio Round Display for XIAO](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Esquema y PCB de Seeed Studio Round Display for XIAO v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [El modelo 3D de la Round Display for XIAO](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [El diagrama del modelo 3D de la carcasa para Round Display](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Carcasa Seeed Studio XIAO ESP32 S3 Sense con pantalla redonda](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
