---
description: Introducción a la Placa de Pantalla ePaper XIAO (ESP32-S3) - EE04
title: Introducción a la Placa de Pantalla ePaper XIAO (ESP32-S3) - EE04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
sidebar_position: 1
slug: /es/epaper_ee04
last_update:
  date: 09/25/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introducción a la Pantalla ePaper XIAO EE04

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Pantalla ePaper XIAO EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Alimentada por **XIAO ESP32-S3** Plus, la placa de pantalla EE04 soporta pantallas ePaper de **24 pines** y **50 pines**. Cuenta con un conector de batería JST de 2.0 mm con interruptor de alimentación, IC de carga integrado, y viene con un botón de reinicio y tres botones de usuario. Ideal para proyectos ePaper de bajo consumo como señalización digital, etiquetas electrónicas y tableros de información portátiles.

### Características

- **Alimentado por XIAO ESP32-S3 Plus:** Funciona inmediatamente cuando se conecta a una pantalla ePaper compatible.
- **Soporte de Pantalla Versátil:** Compatible con una amplia gama de pantallas ePaper, soportando interfaces de 24 pines y 50 pines con cambio fácil mediante tapas de puente.
- **Conector BAT con Interruptor:** Proporciona conexión simple de batería e integra un interruptor, permitiendo gestión eficiente de energía y ahorro energético.
- **Botones Amigables al Usuario:** Incluye 1 botón de reinicio y 3 botones programables por el usuario, ofreciendo flexibilidad para aceleración de proyectos y funciones personalizables.

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
      <td>FPC 24 Pines 0.5mm<br />FPC 50 Pines 0.5mm</td>
    </tr>
    <tr>
      <th>Conector de Batería</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>Interruptor</th>
      <td>Alimentación de Batería ON/OFF</td>
    </tr>
    <tr>
      <th>Fuente de Alimentación</th>
      <td>- Batería Li 3.7V<br />- USB Tipo-C</td>
    </tr>
    <tr>
      <th>Botón</th>
      <td>- 1x Botón de reinicio<br />- 3x Botón de usuario</td>
    </tr>
  </tbody>
</table>

### Guía de Selección de Placa ePaper

<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Placa de Pantalla ePaper EE04</th>
<th><a href="https://wiki.seeedstudio.com/es/XIAO-eInk-Expansion-Board/">Breakout ePaper</a></th>
<th><a href="https://wiki.seeedstudio.com/es/xiao_eink_expansion_board_v2/">Placa Controladora ePaper</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Procesador</th>
            <td>XIAO ESP32-S3 Plus</td>
            <td>XIAO Series</td>
            <td>XIAO Series</td>
        </tr>
        <tr>
            <th>Pantallas ePaper Compatibles</th>
            <td>ePaper 24 Pines<br />ePaper 50 Pines</td>
            <td>ePaper 24 Pines</td>
            <td>ePaper 24 Pines</td>
        </tr>
        <tr>
            <th>Conector ePaper</th>
            <td>FPC 24 Pines, 0.5mm<br />FPC 50 Pines, 0.5mm</td>
            <td>FPC 24 Pines 0.5mm</td>
            <td>FPC 24 Pines 0.5mm</td>
        </tr>
        <tr>
            <th>Conector de Batería</th>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>Interruptor</th>
            <td>Alimentación de Batería ON/OFF</td>
            <td>/</td>
            <td>Alimentación de Batería ON/OFF</td>
        </tr>
        <tr>
            <th>Botón</th>
            <td>1x Botón de reinicio<br />3x Botón de usuario</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>Puerto IO de Extensión</th>
            <td>/</td>
            <td>conexión de otros controladores</td>
            <td>conexión de sensores adicionales</td>
        </tr>
    </tbody>
</table>

### Aplicaciones

- **Panel de Control de Casa Inteligente**: Mostrar información en tiempo real como actualizaciones del clima, eventos del calendario y notificaciones de varios dispositivos de casa inteligente.
- **Monitoreo de Energía**: Mostrar datos de consumo energético de medidores inteligentes, ayudando a los propietarios a rastrear y gestionar su uso de energía de manera más eficiente.
- **Alertas de Seguridad**: Mostrar alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Pantalla de Termostato Inteligente**: Mostrar niveles de temperatura y humedad, así como configuraciones de control para su termostato inteligente.
- **Marco de Fotos Digital**: Crear un marco de fotos digital habilitado para WiFi que puede mostrar imágenes desde su red de casa inteligente.

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

:::tip

Esta versión de la Placa de Pantalla ePaper XIAO (ESP32-S3) - EE04 no soporta funcionalidad NFC.

:::

### ePaper Soportados

#### Conector de 24 Pines

- [ePaper de 1.54 pulgadas - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [ePaper de 2.13 pulgadas - Flexible Monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [ePaper de 2.13 pulgadas - Cuádruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [ePaper de 2.9 pulgadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [ePaper de 2.9 pulgadas - Color cuádruple 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [ePaper de 4.2 pulgadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [ePaper de 4.26 pulgadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [ePaper de 5.83 pulgadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [ePaper de 7.5 pulgadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [ePaper de 7.5 pulgadas - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
Al usar la Placa de Pantalla ePaper XIAO, asegúrese de configurar el puente según el tipo de pantalla ePaper:

- Para pantallas ePaper de 24 Pines → configure el puente a 24 Pines

⚠️ Usar la configuración incorrecta del puente puede causar que el ePaper falle al mostrar o muestre contenido anormal. Siempre verifique dos veces la posición del puente antes de encender.

:::

#### Conector de 50 Pines

- [ePaper Spectra6 de 7.3 pulgadas](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
Al usar la Placa de Pantalla ePaper XIAO, asegúrese de configurar el puente según el tipo de pantalla ePaper:
- Para pantallas ePaper de 50 Pines → configure el puente a 50 Pines

⚠️ Usar la configuración incorrecta del puente puede causar que el ePaper falle al mostrar o muestre contenido anormal. Siempre verifique dos veces la posición del puente antes de encender.

:::

## Descripción del Software

### Instalar la Librería Seeed GFX

:::tip
Esta librería tiene la misma función que la librería TFT y no es compatible con ella. Si ha instalado la librería TFT u otras librerías de pantalla similares, por favor desinstálela primero.
:::

Descargue e instale la librería Seeed GFX desde GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haga clic aquí para descargar</button></p>
</a>
</div>

Desplácese hacia abajo y abra este enlace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Seleccione su tipo de dispositivo y generará algo de código. Copie ese código y lo usaremos más tarde.

:::tip
Si hace la elección incorrecta, la pantalla no mostrará nada.

Así que por favor asegúrese del tipo de sus dispositivos o componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/38.png" style={{width:800, height:'auto'}}/></div>

Después de descargar la librería, vaya a **Sketch** -> **Include Library** -> **Add .ZIP Library** y seleccione la librería descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Hay 4 ejemplos básicos, abra un ejemplo básico que le guste:

1. Bitmap: Mostrar una imagen bitmap.
2. Clock: Mostrar un reloj.
3. Clock_digital: Mostrar un reloj digital.
4. Shape: Mostrar diferentes tamaños de palabras y formas aleatoriamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## Primeros Pasos

Aquí, usamos una pantalla de 5.83 pulgadas como ejemplo. Los pasos son los mismos para todas las pantallas de 24 pines; la única diferencia es seleccionar el tamaño de pantalla apropiado en el controlador.

Cree un **nuevo archivo "driver.h"** y pegue ese código en él. El código debería ser así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/40.png" style={{width:1000, height:'auto'}}/></div>

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.86 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32S3** y **Tools** -> **Port** -> **Selecciona el puerto al que está conectada tu placa**. Luego haz clic en **Upload** para subir el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.png" style={{width:1000, height:'auto'}}/></div>

¡Ahora verás la respuesta en tu pantalla de papel electrónico! A continuación se muestran los resultados de los ejemplos de Helloworld.

:::tip
⚠️ Nota: Orientación del Cable ePaper
Al conectar la pantalla ePaper a la Placa de Pantalla ePaper XIAO, asegúrate de que el cable FPC esté insertado en la dirección correcta.

⚠️ ¡No inviertas el conector! Insertar el cable al revés puede causar que el ePaper no muestre nada o incluso dañar la pantalla/placa.
La imagen de abajo muestra la conexión correcta:
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.jpg" style={{width:500, height:'auto'}}/></div>

### Botones de Usuario en la Placa de Pantalla ePaper XIAO (ESP32-S3) - EE04

El EE04 cuenta con tres botones programables por el usuario que pueden utilizarse para varios propósitos de control. Esta sección demuestra cómo leer los estados de los botones y responder a las pulsaciones de botones usando Arduino.

En el EE04, los tres botones están conectados al XIAO ESP32-S3 Plus:

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


Todos los botones son activos-bajos, lo que significa que leen LOW cuando se presionan y HIGH cuando se liberan.

Ejemplo Básico de Lectura de Botones

Este ejemplo demuestra cómo detectar pulsaciones de botones e imprimir mensajes en el monitor serie.

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

### Batería de Usuario en la Placa de Pantalla ePaper XIAO (ESP32-S3) - EE04

Cuando funciona con alimentación por batería:

- El dispositivo entrará automáticamente en modo de bajo consumo entre actualizaciones

- La duración de la batería depende de la frecuencia de actualización (típicamente 3 meses con una carga completa con configuraciones predeterminadas)

- El dispositivo mostrará un icono de batería baja en la esquina superior derecha cuando el nivel de batería esté por debajo del 20%

:::tip
Si quieres escribir tu propio código para leer el voltaje de la batería, será más preciso agregar un retraso de 10ms antes de la función analogRead().
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



## Recursos

- **[PDF]** [Esquemático de la Pantalla ePaper XIAO EE04 de Seeed Studio](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Archivo 3D Grabcad de la Pantalla ePaper XIAO EE04 de Seeed Studio](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [SCH&PCB de la Pantalla ePaper XIAO EE04 de Seeed Studio](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
