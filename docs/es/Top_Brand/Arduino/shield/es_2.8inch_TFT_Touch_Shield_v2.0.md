---
description: 2.8inch_TFT_Touch_Shield_v2.0
title: 2.8inch TFT Touch Shield v2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/2.8inch_TFT_Touch_Shield_v2.0
last_update:
  date: 01/10/2023  
  author: Eico 
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/main.jpg" alt="pir" width={600} height="auto" /></p>

TFT Touch Shield V2.0 es una pantalla táctil resistiva, compatible con las plataformas Arduino/Seeeduino/Arduino Mega/SAMD21. Se puede usar como dispositivo de visualización o bloc de dibujo. En comparación con la versión anterior, 2.8''TFT Touch Shield V1.0, actualizamos el controlador de pantalla a un chip más profesional, el controlador ILI9341, proporcionando comunicación SPI que ahorra pines sin sacrificar la velocidad de transmisión de datos. Debido al cambio en el método de comunicación, los programas desarrollados para la versión original necesitan modificación antes de ser trasplantados a la nueva versión. Con un módulo de tarjeta SD integrado en este shield, este shield reserva capacidad para otras expansiones de tu proyecto.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

* Pantalla grande con experiencia fácil y cómoda
* Retroiluminación controlable mediante programación
* Visualización de 65k colores ricos
* Método de comunicación SPI que ahorra pines
* Rango activo táctil de pantalla completa

## Especificaciones

<table align="center">
  <tbody>
  <tr>
    <td><h3>Elemento</h3></td>
    <td><h3>Valor</h3></td>
  </tr>
  <tr>
    <td><h4>Voltaje de Funcionamiento</h4></td>
    <td><h4>5 V</h4></td>
  </tr>
  <tr>
    <td><h4>Resolución</h4></td>
    <td><h4>320 x 240</h4></td>
  </tr>  
  <tr>
    <td><h4>Colores</h4></td>
    <td><h4>65k</h4></td>
  </tr>
  </tbody></table>

## Placas Compatibles

El 2.8 inch TFT Touch Shield v2.0 está probado y es totalmente compatible con las siguientes placas:

* Arduino Uno(todas las revisiones)/Seeeduino(V4&V4.2)
* Arduino Mega/Seeeduino Mega
* Arduino Zero(M0)/Seeeduino Lorawan
* Arduino Leonardo/Seeeduino Lite
* Seeeduino Cortex-M0+/Seeeduino Lotus Cortex-M0+

## Ideas de Aplicación

* Juego
* Centro de Sensores
* Interfaz Hombre Máquina
* Casa Inteligente

Aquí tienes algunos proyectos increíbles para tu referencia.

<table align="center">
  <tbody>
  <tr>
    <td><h3>Teléfono Arduino</h3></td>
    <td><h3>Monitor de Facebook</h3></td>
    <td><h3>Monitor de Instructables</h3></td>
  </tr>
  <tr>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project1.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project2.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project3.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  </tr>
  <tr>
  <td><a href="https://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/" target="_blank"><span>¡Hazlo Ahora!</span></a></td>
  <td><a href="https://www.instructables.com/id/Facebook-Like-Monitor/" target="_blank"><span>¡Hazlo Ahora!</span></a></td>
  <td><a href="https://www.instructables.com/id/Make-a-Instructables-Indicator/" target="_blank"><span>¡Hazlo Ahora!</span></a></td>  
  </tr>  
  </tbody></table>

## Mapa de Pines

:::note
Puedes usar los pines NOT USED para controlar otros módulos.
:::

Pines Digitales

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre del Pin</h3></td>
    <td><h3>Función</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>  
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>TF_CS</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>TFT_CS</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>TFT_DC</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>BACKLIGHT(Seleccionable)</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>NOT USED</h4></td>
  </tr>
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>SPI_MOSI</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>SPI_MISO</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>SPI_SCK</h4></td>
  </tr>  
  </tbody></table>

Pines Analógicos

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre del Pin</h3></td>
    <td><h3>Función</h3></td>
  </tr>
  <tr>
    <td><h4>A0</h4></td>
    <td><h4>PANEL TÁCTIL</h4></td>
  </tr>
  <tr>
    <td><h4>A1</h4></td>
    <td><h4>PANEL TÁCTIL</h4></td>
  </tr>  
  <tr>
    <td><h4>A2</h4></td>
    <td><h4>PANEL TÁCTIL</h4></td>
  </tr>
  <tr>
    <td><h4>A3</h4></td>
    <td><h4>PANEL TÁCTIL</h4></td>
  </tr>
  <tr>
    <td><h4>A4</h4></td>
    <td><h4>NO USADO</h4></td>
  </tr>
  <tr>
    <td><h4>A5</h4></td>
    <td><h4>NO USADO</h4></td>
  </tr>
  </tbody></table>

## Primeros Pasos

:::note
Esta guía de primeros pasos está basada en el entorno de Win10 y Arduino IDE 1.6.9.
:::
Te mostraremos cómo funciona esta pantalla, por favor prepara los materiales que se indican a continuación para comenzar.

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>2.8 TFT Touch Shield V2</h3></td>
    <td><h3>Cable Micro USB</h3></td>
  </tr>

 <tr>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs1.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs2.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs3.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  </tr>
  <tr>
  <td><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Más Detalles</span></a></td>
  <td><a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank"><span>Más Detalles</span></a></td>
  <td><a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html" target="_blank"><span>Más Detalles</span></a></td>  
  </tr>  
  </tbody></table>

### Descargar Biblioteca de Arduino

Esta biblioteca soporta las siguientes plataformas:

* Arduino/Genuino UNO
* Seeeduino V3/4.0/4.2
* Arduino/Genuino Mega
* Arduino Leonardo
* Seeeduino Lite/Clio/Lotus
* LinkIt ONE(El panel táctil no funciona)

Haz clic para descargar el [Controlador de Pantalla Táctil](https://github.com/Seeed-Studio/Touch_Screen_Driver/archive/master.zip)，luego por favor haz clic en el botón de abajo para descargar la biblioteca e instalarla, si no sabes cómo instalar una biblioteca de Arduino, por favor consulta el tutorial [(CÓMO INSTALAR UNA BIBLIOTECA DE ARDUINO)](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

 <p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/TFT_Touch_Shield_V2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/library.png" /></a></p>
Esta biblioteca incluye los siguientes ejemplos,

* drawCircle
* drawLines
* drawNumber
* drawRectangle
* paint
* shapes
* text
* tftbmp
* tftbmp2

Usamos el ejemplo 'shapes' para esta demostración.

:::note
Recomendamos usar Seeed_Arduino_LCD con chips de memoria flash interna mayores a 128k. Si tienes un dispositivo de memoria flash más pequeña, recomiendo usar TFT_Touch_Shield_V2.
:::

### Conectar los cables y Subir el código

**Paso1.** Inserta la placa TFT_Touch_Shield_V2 en Seeeduino,

**Paso2.** Conecta tu placa Seeeduino a la computadora con cable USB

**Paso3.** Abre Arduino IDE, Selecciona el puerto COM correcto y las Placas(en este ejemplo usamos Seeeduino V4)

**Paso4.** Haz clic en **File > Examples > TFT_Touch_Shield_V2-master > shapes** para abrir el código. Sube el ejemplo a Seeeduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/shapes%20example.png" alt="pir" width={600} height="auto" /></p>
Si tienes alguna pregunta sobre cómo subir el código, por favor consulta [aquí](https://wiki.seeedstudio.com/es/Seeeduino_v4.2/#getting-started) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/display.jpeg" alt="pir" width={600} height="auto" /></p>

## Retroiluminación

La retroiluminación está siempre encendida por defecto, si quieres cambiar la retroiluminación, necesitas hacer algunas modificaciones en la placa. Por favor mira la parte trasera de la placa. Hay una etiqueta BACKLIGHT. Un lado se llama ON, y el otro lado se llama D7. Necesitamos cortar el cable entre la almohadilla del medio y la almohadilla ON, soldar la almohadilla del medio con la almohadilla D7. Como se muestra abajo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/backlight.png" alt="pir" width={600} height="auto" /></p>
Entonces puedes controlar la retroiluminación a través de D7.

 Para encender la retroiluminación:

 ```cpp
     digitalWrite(7, HIGH);
 ```

Para cerrar la retroiluminación:

 ```cpp
    digitaWrite(7, LOW);
 ```

:::caution
Ten cuidado al usar un cúter y un soldador.
:::

## FAQ

P: ¿cómo controlar el 2.8 TFT Touch Shield V2 usando Seeed_Arduino_LCD?

R: Si quieres controlar el 2.8 TFT Touch Shield V2 con Seeed_Arduino_LCD. Los siguientes detalles te mostrarán cómo usarlo.

**Paso 1.** Descarga e instala [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD). Si no sabes cómo instalar una librería de Arduino, consulta el tutorial [(CÓMO INSTALAR UNA LIBRERÍA DE ARDUINO)](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 2.** Configura User_Setup.h consultando los comentarios de User_Setup.h para hacer que tu placa funcione con el LCD.

**Paso 3.** Selecciona Examples -> Seeed_Arduino_LCD -> 320 x 240 que incluye todos los ejemplos del 2.8 TFT Touch Shield V2, para cargar el ejemplo a la placa.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquema y PCB en formato Eagle](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT_Eagle_File.zip)
* [Esquema en formato PDF](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT%20Touch.pdf)
* [PCB en formato PDF](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT%20Touch%20PCB.pdf)
* [Librería en la página de Github](https://github.com/Seeed-Studio/TFT_Touch_Shield_V2)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
