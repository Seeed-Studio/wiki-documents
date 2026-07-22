---
description: Primeros pasos con XIAO ePaper Display Board(ESP32-S3) - EE04
title: Primeros pasos con EE04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /epaper_ee04
sidebar_position: 3
sku: 104990861,100075670,100064541,E25102101
last_update:
  date: 09/25/2025
  author: Jason
createdAt: '2025-09-25'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/epaper_ee04/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Primeros pasos con XIAO ePaper Display Board - EE04

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Impulsada por **XIAO ESP32-S3** Plus, la placa de visualización EE04 es compatible con pantallas ePaper de **24 pines** y **50 pines**. Incorpora un conector de batería JST de 2,0 mm con interruptor de encendido, un CI de carga integrado y viene con un botón de reinicio y tres botones de usuario. Es ideal para proyectos ePaper de bajo consumo, como señalización digital, etiquetas electrónicas y paneles de información portátiles.

### Características

- **Impulsada por XIAO ESP32-S3 Plus:** Funciona inmediatamente al conectarla a una pantalla ePaper compatible.
- **Compatibilidad versátil de pantallas:** Compatible con una amplia gama de pantallas ePaper, admitiendo interfaces de 24 pines y 50 pines con cambio sencillo mediante jumpers.
- **Conector de batería con interruptor:** Proporciona una conexión de batería sencilla e integra un interruptor, lo que permite una gestión de energía eficiente y ahorro energético.
- **Botones fáciles de usar:** Incluye 1 botón de reinicio y 3 botones programables por el usuario, ofreciendo flexibilidad para acelerar proyectos y funciones personalizables.

### Especificaciones

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Procesador</th>
      <td>XIAO ESP32-S3 Plus</td>
    </tr>
    <tr>
      <th>Conector ePaper</th>
      <td>FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm</td>
    </tr>
    <tr>
      <th>Conector de batería</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>Interruptor</th>
      <td>Encendido/Apagado de alimentación por batería</td>
    </tr>
    <tr>
      <th>Alimentación</th>
      <td>- Batería de litio de 3,7 V<br />- USB Type-C</td>
    </tr>
    <tr>
      <th>Botón</th>
      <td>- 1x Botón de reinicio<br />- 3x Botón de usuario</td>
    </tr>
  </tbody>
</table>

### Guía de selección de placa ePaper

<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>ePaper Display Board EE04</th>
<th><a href="https://wiki.seeedstudio.com/es/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/es/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Procesador</th>
            <td>XIAO ESP32-S3 Plus</td>
            <td>Serie XIAO</td>
            <td>Serie XIAO</td>
        </tr>
        <tr>
            <th>Pantallas ePaper compatibles</th>
            <td>ePaper de 24 pines<br />ePaper de 50 pines</td>
            <td>ePaper de 24 pines</td>
            <td>ePaper de 24 pines</td>
        </tr>
        <tr>
            <th>Conector ePaper</th>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>Conector de batería</th>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>Interruptor</th>
            <td>Encendido/Apagado de alimentación por batería</td>
            <td>/</td>
            <td>Encendido/Apagado de alimentación por batería</td>
        </tr>
        <tr>
            <th>Puerto de extensión IO</th>
            <td>/</td>
            <td>conexión de otros controladores</td>
            <td>conexión de sensores adicionales</td>
        </tr>
        <tr>
            <th>Puerto de extensión IO</th>
            <td>/</td>
            <td>conexión de otros controladores</td>
            <td>conexión de sensores adicionales</td>
        </tr>
    </tbody>
</table>

### Aplicaciones

- **Panel de control para hogar inteligente**: Muestra información en tiempo real como actualizaciones del clima, eventos del calendario y notificaciones de varios dispositivos del hogar inteligente.
- **Monitorización de energía**: Muestra datos de consumo energético de contadores inteligentes, ayudando a los propietarios a seguir y gestionar su uso de energía de forma más eficiente.
- **Alertas de seguridad**: Muestra alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Pantalla de termostato inteligente**: Muestra niveles de temperatura y humedad, así como los ajustes de control de tu termostato inteligente.
- **Marco de fotos digital**: Crea un marco de fotos digital con WiFi que pueda mostrar imágenes desde tu red de hogar inteligente.

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

:::tip

Esta versión XIAO ePaper Display Board(ESP32-S3) - EE04 no es compatible con la funcionalidad NFC.

:::

### ePaper compatible

#### Conector de 24 pines

- [Pantalla ePaper de 1,54 pulgadas - Monocroma 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Pantalla ePaper de 2,13 pulgadas - Flexible monocroma 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Pantalla ePaper de 2,13 pulgadas - Cuádruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Pantalla ePaper de 2,9 pulgadas - Monocroma 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Pantalla ePaper de 2,9 pulgadas - Cuádruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Pantalla ePaper de 4,2 pulgadas - Monocroma 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Pantalla ePaper de 4,26 pulgadas - Monocroma 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Pantalla ePaper de 5,83 pulgadas - Monocroma 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Pantalla ePaper de 7,5 pulgadas - Monocroma 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [Pantalla ePaper de 7,5 pulgadas - Tricolor 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
Al usar la XIAO ePaper Display Board, asegúrate de configurar el jumper según el tipo de pantalla ePaper:

- Para pantallas ePaper de 24 pines → ajusta el jumper a 24 pines

⚠️ Usar una configuración de jumper incorrecta puede hacer que la pantalla ePaper no muestre nada o muestre contenido anómalo. Verifica siempre la posición del jumper antes de encender.

:::

#### Conector de 50 pines

- [ePaper Spectra6 de 7,3 pulgadas](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
Al usar la XIAO ePaper Display Board, asegúrate de configurar el jumper según el tipo de pantalla ePaper:
- Para pantallas ePaper de 50 pines → ajusta el jumper a 50 pines

⚠️ Usar una configuración de jumper incorrecta puede hacer que la pantalla ePaper no muestre nada o muestre contenido anómalo. Verifica siempre la posición del jumper antes de encender.

:::

## Descripción general del software

### Instalar la biblioteca Seeed GFX

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
Si haces una elección incorrecta, la pantalla no mostrará nada.

Así que asegúrate del tipo de tus dispositivos o componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/38.png" style={{width:800, height:'auto'}}/></div>

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Hay 4 ejemplos básicos, abre un ejemplo básico que te guste:

1. Bitmap: Muestra una imagen de mapa de bits.
2. Clock: Muestra un reloj.
3. Clock_digital: Muestra un reloj digital.
4. Shape: Muestra aleatoriamente palabras y formas de diferentes tamaños.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## Primeros pasos

Aquí usamos una pantalla de 5,83 pulgadas como ejemplo. Los pasos son los mismos para todas las pantallas de 24 pines; la única diferencia es seleccionar el tamaño de pantalla adecuado en el controlador.

Crea un **nuevo archivo "driver.h"** y pega ese código en él. El código debería ser como:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/40.png" style={{width:1000, height:'auto'}}/></div>

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.86 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32S3** y **Tools** -> **Port** -> **Select the port your board is connected to**. Luego haz clic en **Upload** para cargar el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.png" style={{width:1000, height:'auto'}}/></div>

¡Ahora verás la respuesta en tu pantalla de epaper! A continuación se muestran los resultados de los ejemplos de Helloworld.

:::tip
⚠️ Nota: Orientación del cable de ePaper
Al conectar la pantalla ePaper a la XIAO ePaper Display Board, asegúrate de que el cable FPC esté insertado en la dirección correcta.

⚠️ ¡No inviertas el conector! Insertar el cable al revés puede hacer que el ePaper no muestre nada o incluso dañar la pantalla/placa.
La imagen de abajo muestra la conexión correcta:
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.jpg" style={{width:500, height:'auto'}}/></div>

### Botones de usuario en la XIAO ePaper Display Board (ESP32-S3) - EE04

La EE04 incorpora tres botones programables por el usuario que se pueden utilizar para varios propósitos de control. Esta sección muestra cómo leer los estados de los botones y responder a las pulsaciones usando Arduino.

En la EE04, los tres botones están conectados a la XIAO ESP32-S3 Plus:

<table>
  <thead>
    <tr>
      <th>KEY1</th>
      <th>KEY2</th>
      <th>KEY3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>GPIO2_D1/A1</th>
      <th>GPIO3_D2/A2</th>
      <th>GPIO5_D4/A4</th>
    </tr>
  </tbody>
</table>


Todos los botones son activos en bajo, lo que significa que leen LOW cuando se presionan y HIGH cuando se sueltan.

Ejemplo básico de lectura de botones

Este ejemplo muestra cómo detectar pulsaciones de botones e imprimir mensajes en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 2;   // KEY0 - GPIO2
const int BUTTON_KEY1 = 3;   // KEY1 - GPIO3
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // Wait for serial port to connect
  }

  Serial.println("=================================");
  Serial.println("Press any button to see output");
  Serial.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY1
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial.println("KEY0 (GPIO2) pressed!");
    } else {
      Serial.println("KEY0 (GPIO2) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial.println("KEY1 (GPIO3) pressed!");
    } else {
      Serial.println("KEY1 (GPIO3) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY3
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

### Batería de usuario en la XIAO ePaper Display Board (ESP32-S3) - EE04

Cuando funcione con alimentación por batería:

- El dispositivo entrará automáticamente en modo de bajo consumo entre las actualizaciones

- La duración de la batería depende de la frecuencia de actualización (normalmente 3 meses con una carga completa y la configuración predeterminada)

- El dispositivo mostrará un icono de batería baja en la esquina superior derecha cuando el nivel de batería sea inferior al 20%

:::tip
Si quieres escribir algo de código por tu cuenta para leer el voltaje de la batería, será más preciso añadir un retardo de 10 ms antes de la función analogRead().
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04battery.jpg" style={{width:700, height:'auto'}}/></div>

```cpp
#define VOLTAGE_PIN A0 //GPIO1
#define ADC_ENABLE_PIN A5 //GPIO6

void setup() {
  Serial.begin(115200);
  delay(10);

  pinMode(VOLTAGE_PIN, INPUT);
  pinMode(ADC_ENABLE_PIN, OUTPUT);
  digitalWrite(ADC_ENABLE_PIN , HIGH);
}


void loop() {
  analogReadResolution(12); 
  int adcValue = analogRead(VOLTAGE_PIN);
  float voltage = (adcValue / 4096.0) *7.16;
  Serial.print("ADC Value: ");
  Serial.print(adcValue);
  Serial.print(" Voltage: ");
  Serial.print(voltage, 3);
  Serial.println(" V");
  delay(10);
}
```

### Mostrar imágenes personalizadas en la XIAO ePaper Display Board (ESP32-S3) - EE04

Busca el ejemplo Bitmap en la biblioteca GFX y selecciónalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image1.png" style={{width:700, height:'auto'}}/></div>

Ten en cuenta que necesitas crear un archivo driver.h dentro del directorio de tu proyecto. [Para más detalles, haz clic para Más información.](#install-seeed-gfx-library).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image2.png" style={{width:700, height:'auto'}}/></div>

A continuación, navega a la herramienta SenseCraft HMI en https://sensecraft.seeed.cc/hmi/tools/dither y sube la imagen que deseas mostrar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image3m.png" style={{width:700, height:'auto'}}/></div>

Después de subir la imagen, genera el array en C (datos de la imagen).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image4.png" style={{width:700, height:'auto'}}/></div>

Copia el contenido del array. Ten cuidado de copiar solo los datos hexadecimales y no incluir caracteres irrelevantes.

:::tip 
Si los colores de tu pantalla aparecen invertidos en comparación con tu diseño original, selecciona la opción Invert Colors en la herramienta HMI antes de generar el código.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image5.png" style={{width:700, height:'auto'}}/></div>

Sobrescribe el array existente en el archivo image.c o image.h dentro de tu sketch de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image6.png" style={{width:700, height:'auto'}}/></div>

Por último, carga el programa en tu XIAO ESP32-S3. Ahora deberías ver tu imagen personalizada mostrada en la pantalla ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image7.png" style={{width:700, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Esquemático de Seeed Studio XIAO ePaper Display EE04](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Archivo 3D de Grabcad de Seeed Studio XIAO ePaper Display EE04](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [SCH&PCB de Seeed Studio XIAO ePaper Display EE04](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
