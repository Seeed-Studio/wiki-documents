---
title: Primeros Pasos con Seeed Studio XIAO RA4M1
description: |
  XIAO RA4M1 - La Placa de Desarrollo Más Pequeña Basada en Renesas RA4M1 de 32 bits, Compatible con Arduino IDE, 19 GPIOs, LED RGB, CAN BUS, USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /es/getting_started_xiao_ra4m1
keywords:
  - XIAO
  - RA4M1
last_update:
  date: 08/15/2024
  author: Carla
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Product Description -->

<div style={{ textAlign: 'center' }}>
  <img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
  </a>
</div><br></br>

## Introducción

El XIAO RA4M1 integra el chip RA4M1 de Renesas (MCU ARM® Cortex®-M4 de 32 bits hasta 48 MHz) en el factor de forma clásico XIAO. Esta placa de desarrollo ofrece 256KB de Flash, 32KB de SRAM, 8KB de EEPROM, un conector USB 2.0, botones de reset y boot, 3 LEDs, un convertidor A/D de 14 bits, un convertidor D/A de 12 bits, y una interfaz CAN BUS. Con circuitería de carga integrada y modos de bajo consumo (tan bajo como 45μA), es ideal para aplicaciones alimentadas por batería. Compartiendo el mismo microcontrolador R7FA4M1AB3CNE de 32 bits que el Arduino Uno R4, es nativamente compatible con Arduino IDE y los extensos accesorios XIAO, convirtiéndolo en el punto de partida perfecto para proyectos electrónicos.

### Características

<!-- Key Features with bullet -->

- **Microcontrolador Popular a Bordo:** Alimentado por Renesas RA4M1, un MCU ARM® Cortex®-M4 R7FA4M1AB3CNE de 32 bits operando hasta 48 MHz, 256 KB de memoria Flash, y 32 KB de SRAM.
- **Recursos Destacados a Bordo:** Equipado con un ADC de 14 bits, DAC de 12 bits, CAN BUS, USB 2.0, y un LED RGB integrado.
- **8 Nuevos IOs Expandidos:** Añade 8 nuevos pines IO en la parte posterior comparado con placas XIAO anteriores (19 GPIOs en total), permitiendo aplicaciones más complejas.
- **Características de Seguridad Potentes:** Cifrado de hardware integrado, arranque seguro, almacenamiento de claves, y otras funciones para garantizar la seguridad de la aplicación.
- **Compatibilidad de Software:** Totalmente compatible con Arduino IDE para desarrollo de proyectos y prototipado sin problemas.
- **Diseño de Energía Eficiente:** Ofrece 4 modos de operación con consumo de energía tan bajo como 45μA en sueño profundo, y soporta gestión de carga de batería de litio.
- **Diseño Compacto del Tamaño del Pulgar:** Midiendo 21 x 17.8mm, adoptando el factor de forma clásico XIAO de Seeed Studio, ideal para aplicaciones con limitaciones de espacio.
- **Amigable para Producción:** Diseño de Dispositivo de Montaje Superficial (SMD) con todos los componentes en el frente y orificios de estampado en ambos lados, facilitando la producción en masa eficiente.


### Especificaciones

<!-- Technical Specifications | Table | or bullet -->

<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>XIAO RA4M1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">Procesador</th>
            <td><a href="https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi">Renesas RA4M1</a></td>
        </tr>
        <tr>
            <td>Núcleo Arm® Cortex®-M4 de 48-MHz</td>
        </tr>
        <tr>
            <th>RAM</th>
            <td>32 KB SRAM</td>
        </tr>
        <tr>
            <th>Flash</th>
            <td>256 KB</td>
        </tr>
        <tr>
            <th>LEDs</th>
            <td>1 LED de Usuario, 1 LED de Alimentación, 1 LED RGB</td>
        </tr>
        <tr>
            <th>Interfaces</th>
            <td>19 Pines:14x Analógico,19x Digital, 2x IIC, 2x UART, 2x SPI</td>
        </tr>
        <tr>
            <th>Botones</th>
            <td>1 Botón RESET, 1 Botón BOOT</td>
        </tr>
        <tr>
            <th>Seguridad</th>
            <td>AES128/256</td>
        </tr>
        <tr>
            <th>Bajo Consumo</th>
            <td>45μA</td>
        </tr>
        <tr>
            <th>Compatibilidad de Software</th>
            <td>Arduino IDE</td>
        </tr>
        <tr>
            <th>Temperatura de Trabajo</th>
            <td>-20°C-70°C</td>
        </tr>
        <tr>
            <th>Dimensiones</th>
            <td>21x17.8 mm</td>
        </tr>
        <tr>
            <th>Alimentación</th>
            <td>Type-C: 5V<br />BAT: 3.8V</td>
        </tr>
    </tbody>
</table>

### Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Seeed Studio XIAO RA4M1.

<!-- 硬件相关 -->

<!-- 引脚等的定义 -->
<table>
	<tr>
	    <th>Diagrama de indicación frontal del XIAO RA4M1</th>
	</tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-components.png" style={{width:380, height:'auto'}}/></div>
        <br />        
    </tr>
    <tr>
        <th>Lista de Pines del XIAO RA4M1</th>
    </tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-pinout.png" style={{width:880, height:'auto'}}/></div>
        <br />
    </tr>
</table>

## Comenzando

### Preparación del Hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x Computadora
- 1 x Cable USB Type-C

<br></br>

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Preparación del Software

La herramienta de programación recomendada para el XIAO RA4M1 es el Arduino IDE, por lo que como parte de la preparación del software, necesitarás completar la instalación de Arduino.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable del Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

- **Paso 2.** Inicia la aplicación Arduino.

- **Paso 3.** Añade el paquete de placa RA4M1 a tu Arduino IDE.

    Navega a **File > Preferences**, y completa **"Additional Boards Manager URLs"** con la url de abajo:
    *https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json*
    
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    Navega a **Tools > Board > Boards Manager...**, escribe la palabra clave **RA4M1** en el cuadro de búsqueda, selecciona la última versión de **Seeed Renesas Board**, e instálala.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **Paso 4.** Selecciona tu placa y puerto.

    En la parte superior del Arduino IDE, puedes buscar **xiao** en la placa de desarrollo de la izquierda, selecciona XIAO_RA4M1, y selecciona el puerto directamente.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>


## Modo BootLoader

A veces, usar el programa incorrecto puede hacer que el XIAO pierda su puerto o no funcione correctamente. Los problemas comunes incluyen:

- El XIAO está conectado a la computadora, pero no se encuentra ningún número de puerto.
- El XIAO está conectado, y aparece un número de puerto, pero la carga del programa falla.

Cuando encuentres las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, que puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- **Método 1.** Presiona y mantén presionado el botón `BOOT` en el XIAO RA4M1 sin soltarlo.
- **Método 2.** Mantén presionado el botón `BOOT` y luego conéctalo a la computadora a través del cable de datos. Suelta el botón BOOT después de conectar a la computadora.

## Reset

Cuando el programa funciona de manera anormal, puedes presionar `Reset` una vez durante el encendido para que XIAO vuelva a ejecutar el programa cargado.
Cuando mantienes presionada la tecla `BOOT` mientras enciendes y luego presionas la tecla `Reset` una vez, también puedes entrar al modo BootLoader.

## Ejecuta tu primer programa Blink

A estas alturas, creo que tienes una buena comprensión de las características y hardware del XIAO RA4M1. A continuación, tomemos el programa Blink más simple como ejemplo y realicemos el primer parpadeo para tu XIAO RA4M1!

- **Paso 1.** Inicia la aplicación Arduino.
- **Paso 2.** Navega a **File > Examples > 01.Basics > Blink**, abre el programa.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa **XIAO RA4M1**, y selecciona el número de puerto correcto para cargar el programa.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

Una vez que el programa se carga exitosamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO RA4M1 está parpadeando.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

¡Felicitaciones, has aprendido cómo escribir y cargar programas para el XIAO RA4M1!
:::note
El LED solo se apagará cuando el pin del LED de usuario en el XIAO RA4M1 se establezca en un nivel alto, y solo se encenderá cuando el pin se establezca en un nivel bajo.
:::

## Juega con LEDs RGB
El XIAO RA4M1 viene con un LED RGB integrado que puedes controlar, a continuación hay un ejemplo de cómo cambiar suavemente el color del LED entre rojo, verde y azul.

- **Paso 1.** Descarga la librería `Adafruit_NeoPixel`

Navega a **Sketch > Include Liarbry > Manage Libraries...**, y busca **Adafruit_NeoPixel**, instala la versión más reciente.

- **Paso 2.** Copia el siguiente código a un nuevo sketch:

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN RGB_BUILTIN  // Define the pin for the built-in RGB LED
#define NUM_PIXELS 1         // Number of WS2812 LEDs

Adafruit_NeoPixel pixels(NUM_PIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(PIN_RGB_EN, OUTPUT); // Set up the power pin
  digitalWrite(PIN_RGB_EN, HIGH); //Turn on power to the LED
  pixels.begin();  // Initialize the NeoPixel library
}

void loop() {
    // Transition from Red to Green
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(255 - i, i, 0));  // Red decreases, Green increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Green to Blue
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(0, 255 - i, i));  // Green decreases, Blue increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Blue to Red
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(i, 0, 255 - i));  // Blue decreases, Red increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }
}

```

- **Paso 3.** Selecciona el modelo de placa **XIAO RA4M1**, y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## Batería y Gestión de Energía

¿Es posible leer el voltaje de la batería sin componentes adicionales? Sí, con el XIAO RA4M1, es más fácil que nunca. En miembros anteriores de la familia XIAO, como el [XIAO ESP32C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), leer el voltaje de la batería requería conectar manualmente a A0 con una resistencia.

Pero con el XIAO RA4M1, este proceso se simplifica. Ahora puedes usar directamente el pin `BAT_DET_PIN/P105` para leer el nivel de voltaje de la batería, optimizando tu diseño y desarrollo. Solo recuerda configurar el pin `BAT_READ_EN/P400` en alto, ya que es necesario para habilitar la lectura del nivel de batería.

- **Paso 1.** Preparación del Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

La pantalla OLED en la placa de expansión XIAO utiliza el protocolo I2C y está conectada a la interfaz I2C del XIAO a través del circuito I2C en la placa. Por lo tanto, podemos conectar directamente el XIAO a la placa de expansión y programarlo para mostrar contenido en la pantalla.

- **Paso 2.** Instalar la biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **Paso 3.** Copiar el código y pegarlo en el IDE de Arduino.

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ WIRE_SCL_PIN, /* data=*/ WIRE_SDA_PIN, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

#define enablePin  BAT_READ_EN  // Pin for enabling battery voltage reading
#define adcPin BAT_DET_PIN     // Analog input pin (GPIO29 in your case)
const float referenceVoltage = 3.3;  // Reference voltage for the ADC
const float voltageDivider = 2.0;    // Voltage divider factor

void setup() {
  Serial.begin(9600);          // Initialize serial communication at 9600 baud
  pinMode(enablePin, OUTPUT);  // Set the enable pin as an output
  digitalWrite(enablePin, HIGH); // Set the pin high to enable battery voltage reading
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
  u8x8.setFont(u8x8_font_chroma48medium8_r);
}

void loop() {
  int rawValue = analogRead(adcPin);    // Read the analog input value
  float voltage = rawValue * (referenceVoltage / 1023.0) * voltageDivider; // Calculate the voltage
  // Print the raw value and the calculated voltage
  u8x8.setCursor(0, 0);
  u8x8.print("Raw value:0x");
  u8x8.print(rawValue, HEX);
  u8x8.setCursor(0, 2);
  u8x8.print("Voltage:");
  u8x8.print(voltage, 2);
  u8x8.print("V");

  delay(500); // Delay for 500 milliseconds
}

```

- **Paso 4.** Selecciona el modelo de placa **XIAO RA4M1**, y selecciona el número de puerto correcto para cargar el programa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/voltage.png" style={{width:600, height:'auto'}}/></div>

## Recursos

- 📄 **[PDF]** [Hoja de datos del RA4M1](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet)
- 📄 **[PDF]** [Esquemático del Seeed Studio XIAO RA4M1](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH_PDF_v1.0_240719.pdf)
- 📄 **[ZIP]** [Librerías KiCAD](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH%26PCB_v1.0_240719.zip)
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip) -->
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 Eagle file](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO_RP2040_v1.22_SCH&PCB.zip) -->
<!-- - 📄 **[DXF]** [Seeed Studio XIAO RA4M1 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-DXF.zip) -->
<!-- - 📄 **[LBR]** [Seeed Studio XIAO RA4M1 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr) -->
<!-- - 📄 **[XLSX]** [Seeed Studio XIAO RA4M1 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-pinout_sheet.xlsx) -->
- 🔗 **[Kicad]** [Huella del Seeed Studio XIAO RA4M1](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


## Solución de problemas


### P1: ¿Qué debo tener en cuenta al soldar pines?

Debido al tamaño miniatura del XIAO RA4M1, ten cuidado al soldar los conectores, no pegues diferentes pines juntos, y no pegues soldadura al blindaje u otros componentes. De lo contrario, puede causar que el XIAO tenga un cortocircuito o no funcione correctamente, y las consecuencias causadas por esto serán responsabilidad del usuario.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
