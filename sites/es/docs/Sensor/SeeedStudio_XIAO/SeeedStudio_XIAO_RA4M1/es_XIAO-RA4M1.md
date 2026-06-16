---
title: Primeros pasos con Seeed Studio XIAO RA4M1
description: |
  XIAO RA4M1 - Placa de desarrollo más pequeña basada en Renesas RA4M1 de 32 bits, lista para Arduino IDE, 19 GPIO, LED RGB, BUS CAN, USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /getting_started_xiao_ra4m1
sku: 102010551,102010638
keywords:
  - XIAO
  - RA4M1
last_update:
  date: 08/15/2024
  author: Carla
sidebar_position: 0
createdAt: '2024-08-06'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/getting_started_xiao_ra4m1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Product Description -->

<div style={{ textAlign: 'center' }}>
  <img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
  </a>
</div><br></br>

## Introducción

El XIAO RA4M1 integra el chip RA4M1 de Renesas (MCU ARM® Cortex®-M4 de 32 bits hasta 48 MHz) en el clásico factor de forma XIAO. Esta placa de desarrollo ofrece 256 KB de Flash, 32 KB de SRAM, 8 KB de EEPROM, un conector USB 2.0, botones de reset y boot, 3 LED, un convertidor A/D de 14 bits, un convertidor D/A de 12 bits y una interfaz CAN BUS. Con circuitería de carga integrada y modos de bajo consumo (tan bajos como 45 μA), es ideal para aplicaciones alimentadas por batería. Al compartir el mismo microcontrolador de 32 bits R7FA4M1AB3CNE que el Arduino Uno R4, es nativamente compatible con Arduino IDE y con la amplia gama de accesorios XIAO, lo que la convierte en el punto de partida perfecto para proyectos de electrónica.

### Características

<!-- Key Features with bullet -->

- **Microcontrolador popular integrado:** Impulsado por Renesas RA4M1, un MCU R7FA4M1AB3CNE ARM® Cortex®-M4 de 32 bits que funciona hasta 48 MHz, con 256 KB de memoria Flash y 32 KB de SRAM.
- **Recursos destacados a bordo:** Equipado con un ADC de 14 bits, DAC de 12 bits, CAN BUS, USB 2.0 y un LED RGB integrado.
- **8 nuevos IO ampliados:** Añade 8 nuevos pines IO en la parte posterior en comparación con las placas XIAO anteriores (19 GPIO en total), lo que permite aplicaciones más complejas.
- **Potentes funciones de seguridad:** Cifrado por hardware integrado, arranque seguro, almacenamiento de claves y otras funciones para garantizar la seguridad de la aplicación.
- **Compatibilidad de software:** Totalmente compatible con Arduino IDE para un desarrollo y creación de prototipos de proyectos sin interrupciones.
- **Diseño de energía eficiente:** Ofrece 4 modos de funcionamiento con un consumo de energía tan bajo como 45 μA en sueño profundo y admite gestión de carga de baterías de litio.
- **Diseño compacto del tamaño de un pulgar:** Con unas dimensiones de 21 x 17,8 mm, adopta el clásico factor de forma XIAO de Seeed Studio, ideal para aplicaciones con limitaciones de espacio.
- **Amigable para producción:** Diseño de dispositivo de montaje superficial (SMD) con todos los componentes en la parte frontal y orificios tipo sello en ambos lados, lo que facilita una producción en masa eficiente.

### Especificación

<!-- Technical Specifications | Table | or bullet -->
| Producto | XIAO RA4M1 |
|---------|-----------|
| **Procesador** | [RA4M1 - 32-bit Microcontrollers with 48MHz Arm Cortex-M4 and LCD Controller and Cap Touch for HMI - Renesas](https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi) <br/>Núcleo Arm® Cortex®-M4 de 48 MHz con FPU <br/>|
| **RAM** | 32 KB SRAM |
| **Flash** | 256 KB |
| **LED** | 1x LED de usuario<br/>1x LED de alimentación<br/>1x LED RGB |
| **Interfaces** | 19 IO:<br/>6x Analógico<br/>19x Digital<br/>2x IIC<br/>2x UART<br/>2x SPI |
| **Botones** | 1x Botón RESET<br/>1x Botón BOOT |
| **Seguridad** | AES128/256 |
| **Bajo consumo (típ.)** | `42.6μA@3.7V` |
| **Compatibilidad de software** | Arduino IDE |
| **Temperatura de trabajo** | -20°C~70°C |
| **Dimensiones** | 21×17.8 mm |

## Descripción general del hardware

Antes de empezar, es bastante esencial contar con algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características de Seeed Studio XIAO RA4M1.

### Parte frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO_RA4M1_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte posterior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO_RA4M1_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

## **Mapa de pines**
| Pin XIAO        | Función         | Pin del chip  | Funciones alternativas                  | Descripción                          | Nombre Arduino |
| :-------------: | :-------------: | :-------: | :---------------------------------: | :---------------------------------: | :----------: |
| 5V              | VBUS             |           |                                     | Entrada/Salida de alimentación                   |             |
| GND             |                  |           |                                     |                                      |              |
| 3V3             | 3V3_OUT          |           |                                     | Salida de alimentación                         |              |
| D0              | Analógico          | P014      | AN009                               | GPIO, ADC                            |       0   |
| D1              | Analógico          | P000      | AN000                               | GPIO, ADC                            |          1     |
| D2              | Analógico          | P001      | AN001                               | GPIO, ADC                            |        2       |
| D3              | Analógico          | P002      | AN002                              | GPIO, ADC                            |        3   |
| D4              | SDA1      | P206      |                                            | GPIO, datos I2C             |               4   |
| D5              | Analógico,SCL1      | P100      |                                     | GPIO, reloj I2C, ADC                 |     5    |
| D6              | TXD2             | P302      | SDA2                                | GPIO, transmisión UART,I2C              |    6     |
| D7              | RXD2             | P301      | SCL2                                | GPIO, recepción UART,I2C               |       7  |
| D8              | SPI1_SCK         | P111      |                                     | GPIO, reloj SPI                      |   8      |
| D9              | SPI1_MISO        | P110      | CRX0                                | GPIO, datos SPI,UART                  |   9      |
| D10             | SPI1_MOSI        | P109      | CTX0                                | GPIO, datos SPI,UART                  |    10    |
| D11             | RX9              | P408      |                                     | GPIO, UART                           |        |
| D12             | TX9              | P409      |                                     | GPIO,UART                            |        |
| D13             | GPIO             | P013      |                                     | GPIO                                 |        |
| D14             | GPIO             | P012      |                                     | GPIO                                 |        |
| D15             | TXD0             | P101      | SDA0,AN021,SPI0_MOSI                | GPIO, transmisión UART, ADC,SPI,I2C     |       |
| D16             | RXD0             | P104      | SCL0,SPI0_MISO                      | GPIO,UART, SPI,I2C                   |       |
| D17             | CRX0             | P102      | AN020,SPI0_SCK                      | GPIO, UART , ADC,SPI                 |       |
| D18             | CTX0             | P103      | AN019                               | GPIO, SPI ,ADC,UART                  |       |
| ADC_BAT         |                  | P400      |                                     | Leer el valor de voltaje de la batería           |       |
| Reset           |                  | RES       |                                     | RESET                                |       |
| Boot            |                  | P201      |                                     | Entrar en modo Boot                      |       |
| LED RGB         |                  | P112      |                                     | LED RGB                              |    20   |
| LED RGB         |                  | P500      |                                     | LED RGB   EN                            |    21   |
| CHARGE_LED      |                  | VBUS      |                                     | CHG-LED_Red                          |       |
| USER_LED        |                  | P011      |                                     | Luz de usuario (Y)                      |    19    |
## Primeros pasos

### Preparación de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x Ordenador
- 1 x Cable USB Tipo-C

<br></br>

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Preparación de software

La herramienta de programación recomendada para el XIAO RA4M1 es Arduino IDE, por lo que, como parte de la preparación del software, deberás completar la instalación de Arduino.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE de acuerdo con tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **Paso 2.** Inicia la aplicación Arduino.

- **Paso 3.** Añade el paquete de placa RA4M1 a tu Arduino IDE.

    Navega a **File > Preferences**, y rellena **"Additional Boards Manager URLs"** con la siguiente URL:
    *https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    Ve a **Tools > Board > Boards Manager...**, escribe la palabra clave **RA4M1** en el cuadro de búsqueda, selecciona la última versión de **Seeed Renesas Board** e instálala.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **Paso 4.** Selecciona tu placa y el puerto.

    En la parte superior del Arduino IDE, puedes buscar **xiao** en la placa de desarrollo de la izquierda, seleccionar XIAO_RA4M1 y seleccionar directamente el puerto.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>

## Modo BootLoader

A veces, usar el programa equivocado puede hacer que el XIAO pierda su puerto o no funcione correctamente. Los problemas comunes incluyen:

- El XIAO está conectado al ordenador, pero no se encuentra ningún número de puerto.
- El XIAO está conectado y aparece un número de puerto, pero la carga del programa falla.

Cuando te encuentres con las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, lo que puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- **Método 1.** Mantén pulsado el botón `BOOT` en el XIAO RA4M1 sin soltarlo.
- **Método 2.** Mantén pulsado el botón `BOOT` y luego conéctalo al ordenador mediante el cable de datos. Suelta el botón BOOT después de conectarlo al ordenador.

## Reinicio

Cuando el programa se ejecuta de forma anómala, puedes pulsar `Reset` una vez durante el encendido para que el XIAO vuelva a ejecutar el programa cargado.
Cuando mantienes pulsada la tecla `BOOT` mientras enciendes y luego pulsas la tecla `Reset` una vez, también puedes entrar en el modo BootLoader.

## Ejecuta tu primer programa Blink

Hasta ahora, creo que ya tienes un buen conocimiento de las funciones y el hardware del XIAO RA4M1. A continuación, tomemos como ejemplo el programa Blink más sencillo y realicemos el primer parpadeo para tu XIAO RA4M1.

- **Paso 1.** Inicia la aplicación Arduino.
- **Paso 2.** Ve a **File > Examples > 01.Basics > Blink** y abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa **XIAO RA4M1** y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

Una vez que el programa se haya cargado correctamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO RA4M1 está parpadeando.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

Enhorabuena, ¡has aprendido a escribir y cargar programas para el XIAO RA4M1!
:::note
El LED solo se apagará cuando el pin del LED de usuario en el XIAO RA4M1 se establezca en un nivel alto, y solo se encenderá cuando el pin se establezca en un nivel bajo.
:::

## Juega con los LED RGB

El XIAO RA4M1 viene con un LED RGB integrado que puedes controlar; a continuación se muestra un ejemplo de cómo cambiar suavemente el color del LED entre rojo, verde y azul.

- **Paso 1.** Descarga la biblioteca `Adafruit_NeoPixel`

Ve a **Sketch > Include Liarbry > Manage Libraries...**, y busca **Adafruit_NeoPixel**, instala la última versión.

- **Paso 2.** Copia el siguiente código en un nuevo sketch:

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

- **Paso 3.** Selecciona el modelo de placa **XIAO RA4M1** y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## Batería y gestión de energía

¿Es posible leer el voltaje de la batería sin componentes adicionales? Sí, con el XIAO RA4M1 es más fácil que nunca. En miembros anteriores de la familia XIAO, como el [XIAO ESP32C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), leer el voltaje de la batería requería conectarse manualmente a A0 con una resistencia.

Pero con el XIAO RA4M1, este proceso se simplifica. Ahora puedes usar directamente el pin `BAT_DET_PIN/P105` para leer el nivel de voltaje de la batería, simplificando tu diseño y desarrollo. Solo recuerda configurar el pin `BAT_READ_EN/P400` en alto, ya que es necesario para habilitar la lectura del nivel de la batería.

- **Paso 1.** Preparación de hardware

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

La pantalla OLED en la placa de expansión XIAO utiliza el protocolo I2C y está conectada a la interfaz I2C del XIAO a través del circuito I2C de la placa. Por lo tanto, podemos conectar directamente el XIAO a la placa de expansión y programarlo para mostrar contenido en la pantalla.

- **Paso 2.** Instala la biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **Paso 3.** Copia el código y pégalo en el Arduino IDE.

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

- **Paso 4.** Selecciona el modelo de placa como **XIAO RA4M1** y selecciona el número de puerto correcto para cargar el programa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/voltage.png" style={{width:600, height:'auto'}}/></div>

## Recursos

**Diseño de hardware**
- **📄[Hoja de datos]** [Renesas RA4M1 Datasheet](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet )
- **📄[Esquemático]** [XIAO RA4M1 Schematic](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO%20RA4M1%20V1.01_SCH_PDF_260114%20.pdf.pdf )
- **🗃️[Archivos de diseño de PCB]** [XIAO RA4M1 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/202003977_XIAO%20RA4M1%20v1.01_SCH&PCB_260114.zip )
- **🗃️[Bibliotecas de diseño de PCB]** 
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
## Solución de problemas

### P1: ¿Qué debo tener en cuenta al soldar pines?

Debido al tamaño miniatura de XIAO RA4M1, ten cuidado al soldar los pines; no unas pines diferentes entre sí y no dejes que la soldadura toque la cubierta o otros componentes. De lo contrario, puede provocar que la XIAO se cortocircuite o no funcione correctamente, y las consecuencias derivadas de esto serán asumidas por el usuario.

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
