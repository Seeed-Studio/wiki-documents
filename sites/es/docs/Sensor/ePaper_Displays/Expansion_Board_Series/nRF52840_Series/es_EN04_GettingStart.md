---
description: Introducción a XIAO ePaper Display Board(nRF52840) - EN04
title: Introducción a EN04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /epaper_EN04
sku: 100003489,E25120101
last_update:
  date: 10/8/2026
  author: Nemo
createdAt: '2025-09-25'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/es/epaper_EN04/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introducción a XIAO ePaper Display Board - EN04

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Impulsada por **XIAO nRF52840** Plus, la placa de visualización EN04 es compatible con pantallas ePaper de **24 pines** y **50 pines**. Incorpora un conector de batería JST de 2,0 mm con interruptor de alimentación, CI de carga integrado y viene con un botón de reinicio y tres botones de usuario. Es ideal para proyectos ePaper de bajo consumo, como señalización digital, etiquetas electrónicas y paneles de información portátiles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_1.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **Impulsada por XIAO nRF52840 Plus:** Funciona inmediatamente al conectarse a una pantalla ePaper compatible.
- **Compatibilidad versátil de pantallas:** Compatible con una amplia gama de pantallas ePaper, admitiendo interfaces de 24 pines y 50 pines con cambio sencillo mediante jumpers.
- **Conector BAT con interruptor:** Proporciona una conexión de batería sencilla e integra un interruptor, lo que permite una gestión de energía eficiente y ahorro energético.
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
      <td>XIAO nRF52840 Plus</td>
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
      <td>Encendido/Apagado de alimentación de la batería</td>
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

### Guía de selección de placas ePaper

<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>ePaper Display Board EN04</th>
<th><a href="https://wiki.seeedstudio.com/es/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/es/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Procesador</th>
            <td>XIAO nRF52840 Plus</td>
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
            <td>Encendido/Apagado de alimentación de la batería</td>
            <td>/</td>
            <td>Encendido/Apagado de alimentación de la batería</td>
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
            <td>connection of others controller</td>
            <td>connection of additional sensors</td>
        </tr>
    </tbody>
</table>


### Aplicaciones

- **Panel de control para hogar inteligente**: Muestra información en tiempo real como actualizaciones meteorológicas, eventos del calendario y notificaciones de varios dispositivos del hogar inteligente.
- **Monitorización de energía**: Muestra datos de consumo energético de contadores inteligentes, ayudando a los propietarios a seguir y gestionar su uso de energía de forma más eficiente.
- **Alertas de seguridad**: Muestra alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Pantalla de termostato inteligente**: Muestra niveles de temperatura y humedad, así como los ajustes de control de tu termostato inteligente.
- **Marco de fotos digital**: Crea un marco de fotos digital con WiFi que pueda mostrar imágenes desde tu red de hogar inteligente.

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

### Pantallas ePaper compatibles

#### Conector de 24 pines

- [Pantalla ePaper de 1,54 pulgadas - Monocromo 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Pantalla ePaper de 2,13 pulgadas - Monocromo 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [Pantalla ePaper de 2,13 pulgadas - Cuádruple color 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Pantalla ePaper de 2,9 pulgadas - Monocromo 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Pantalla ePaper de 2,9 pulgadas - Cuádruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Pantalla ePaper de 4,2 pulgadas - Monocromo 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Pantalla ePaper de 4,26 pulgadas - Monocromo 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Pantalla ePaper de 5,83 pulgadas - Monocromo 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Pantalla ePaper de 7,5 pulgadas - Monocromo 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [Pantalla ePaper de 7,5 pulgadas - Tricolor 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.png" style={{width:800, height:'auto'}}/></div>

:::tip
Al usar la XIAO ePaper Display Board, asegúrate de configurar el jumper según el tipo de pantalla ePaper:

- Para pantallas ePaper de 24 pines → ajusta el jumper a 24 pines

⚠️ Usar una configuración de jumper incorrecta puede hacer que la pantalla ePaper no muestre nada o muestre contenido anómalo. Verifica siempre la posición del jumper antes de encender.

:::

#### Conector de 50 pines

- [ePaper Spectra6 de 7,3 pulgadas](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.png" style={{width:800, height:'auto'}}/></div>

:::tip
Al usar la XIAO ePaper Display Board, asegúrate de configurar el jumper según el tipo de pantalla ePaper:

- Para pantallas ePaper de 50 pines → ajusta el jumper a 50 pines

⚠️ Usar una configuración de jumper incorrecta puede hacer que la pantalla ePaper no muestre nada o muestre contenido anómalo. Verifica siempre la posición del jumper antes de encender.

:::

### Botones de usuario

La EN04 incorpora tres botones programables por el usuario que pueden utilizarse para diversas funciones de control. Todos los botones son activos en bajo: leen LOW cuando se presionan y HIGH cuando se sueltan.

En la EN04, los tres botones están conectados al XIAO nRF52840 Plus de la siguiente manera:

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
      <td>D1 / A1</td>
      <td>D2 / A2</td>
      <td>D4 / A4</td>
    </tr>
  </tbody>
</table>

:::note
Los botones de usuario son programables y pueden configurarse para diversas funciones, como cambio de página, selección de modo o activación de acciones específicas en tu proyecto ePaper.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/3.png" style={{width:500, height:'auto'}}/></div>

### Conector de batería

La EN04 está equipada con un conector de batería JST de 2,0 mm y un CI de carga integrado, lo que la hace adecuada para proyectos ePaper de bajo consumo alimentados por batería.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/2.png" style={{width:600, height:'auto'}}/></div>

## Introducción con Arduino

### Instalar la librería Seeed GFX2

Todos los ejemplos de ePaper para la EN04 se basan en la librería de Arduino **Seeed_GFX2**, que es compatible con todas las pantallas ePaper enumeradas en la sección [Supported ePaper Displays](#Pantallas-ePaper-compatibles). Los ejemplos siguientes utilizan la **pantalla ePaper monocroma de 7,5 pulgadas (800 x 480)** como ejemplo.

**Paso 1. Descargar la librería Seeed_GFX2**

Visita el [repositorio de Seeed_GFX2 en GitHub](https://github.com/Seeed-Studio/Seeed_GFX2), haz clic en el botón verde **Code** y selecciona **Download ZIP** para guardar la librería en tu ordenador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**Paso 2. Añadir la librería al IDE de Arduino**

Abre el IDE de Arduino, navega a **Sketch → Include Library → Add .ZIP Library...** y selecciona el archivo ZIP que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### Configurar y grabar el programa

1. Navega a **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN04 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_01.png" style={{width:300, height:'auto'}}/></div>

2. En **Tools → Board**, selecciona **Seeed XIAO nRF52840 Plus**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:800, height:'auto'}}/></div>

3. Conecta la placa mediante USB Type-C, selecciona el puerto serie correspondiente y haz clic en **Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.png" style={{width:800, height:'auto'}}/></div>

:::note
Las rutas de ejemplo anteriores usan la pantalla monocroma de 7,5 pulgadas como ejemplo. Para otras pantallas compatibles, simplemente elige la carpeta que coincida con el modelo de tu pantalla en **XIAO ePaper Display Board - EN04**: cada pantalla se entrega con ejemplos de **HelloWorld**, **Bitmap** y **Custom_Demo** (excepto la Tri-Color de 7,5 pulgadas, que se entrega con **HelloWorld** y **Custom_Demo**).
:::

## Descripción general del software

#### Ejemplo básico de lectura de botones

Este ejemplo muestra cómo detectar las pulsaciones de los tres botones e imprimir mensajes en el monitor serie.

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (verified on hardware)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D4 / A4 / P0.04
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 4;

void setup() {
  // Initialize serial port
  Serial.begin(9600);
  while (!Serial) delay(10);

  // Configure all button pins as input with internal pull-up
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Three-Button Detection Program Started");
  Serial.println("Press KEY1 / KEY2 / KEY3 to see output...");
}

// Helper function: check if a button is pressed (with debounce)
bool isButtonPressed(int pin) {
  if (digitalRead(pin) == LOW) {
    delay(50); // debounce
    if (digitalRead(pin) == LOW) {
      // Wait for release to prevent repeated triggers
      while (digitalRead(pin) == LOW) {
        delay(10);
      }
      return true;
    }
  }
  return false;
}

void loop() {
  if (isButtonPressed(KEY1_PIN)) {
    Serial.println("Hello. This is KEY1");
  }
  if (isButtonPressed(KEY2_PIN)) {
    Serial.println("Hello. This is KEY2");
  }
  if (isButtonPressed(KEY3_PIN)) {
    Serial.println("Hello. This is KEY3");
  }

  delay(10);
}
```

#### Ejemplo de lectura de voltaje de batería

Este ejemplo muestra cómo leer el voltaje de la batería e imprimirlo en el monitor serie.

:::tip
Si quieres escribir tu propio código para leer el voltaje de la batería, será más preciso añadir un retardo de 10 ms antes de la función analogRead().
:::

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

#define VOLTAGE_PIN A0 //P0.02
#define ADC_ENABLE_PIN A5 //P0.05

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

## Solución de problemas

**P1: La pantalla ePaper no muestra nada después de encenderla.**

- **El kit DIY no tiene firmware preinstalado.** El XIAO EN04 DIY Kit no se entrega con firmware de ePaper; una pantalla en blanco o negra al primer encendido es normal.
- **Comprueba la orientación del cable FPC.** Asegúrate de que el cable FPC de la ePaper esté insertado en la dirección correcta. Invertir el conector puede causar una pantalla en blanco y puede dañar la pantalla.
- **Pulsa el botón RESET.** Después de cargar el firmware o conectar la alimentación, pulsa una vez el botón de reset para forzar una actualización de la pantalla.

**P2: La pantalla muestra contenido ilegible o una actualización parcial.**

- **Verifica la configuración del jumper.** La EN04 es compatible tanto con pantallas ePaper de 24 pines como de 50 pines; el jumper debe coincidir con el tipo de pantalla. Ajústalo a 24 Pin para pantallas de 24 pines y a 50 Pin para pantallas de 50 pines.
- **Confirma la selección del modelo de pantalla.** En tu ejemplo de Arduino, asegúrate de haber seleccionado exactamente el modelo de pantalla (tamaño y tipo de color). Elegir el modelo incorrecto provocará un renderizado incorrecto.
- **Espera a una actualización completa.** Las pantallas ePaper utilizan un ciclo de actualización completo; los efectos parciales o de ghosting durante la actualización son normales y desaparecerán una vez que el ciclo se complete.

**P3: La placa no se enciende cuando se usa la batería.**

- **Comprueba el interruptor de encendido.** Desliza el interruptor de alimentación de la batería a la posición ON; la placa no tomará energía de la batería cuando el interruptor esté apagado.
- **Verifica la polaridad del conector JST.** Asegúrate de que el conector de batería JST de 2,0 mm esté conectado con la polaridad correcta. Invertir la polaridad de la batería puede dañar el hardware. Verifica las marcas +/− del conector antes de conectar la batería.
- **Carga la batería.** Si la batería está completamente descargada, la placa puede no arrancar. Conecta USB Type-C para cargar la batería e inténtalo de nuevo.

**P4: Seeedash Firmware Flasher no puede detectar la placa.**

- **Pulsa el botón RESET.** Con la placa conectada por USB, pulsa y suelta el botón RESET para volver a enumerar el puerto USB y luego intenta detectarla de nuevo.
- **Usa un cable USB con capacidad de datos.** Algunos cables USB solo proporcionan alimentación y no admiten transferencia de datos. Cambia a un cable de datos que sepas que funciona correctamente.
- **Comprueba el puerto USB.** Prueba con otro puerto USB de tu ordenador; algunos puertos pueden tener problemas de alimentación o de controladores.

**P5: La carga desde Arduino IDE falla.**

- **Selecciona la placa correcta.** Ve a **Tools** → **Board** y asegúrate de que **Seeed XIAO nRF52840 Plus** esté seleccionada. No elijas otras variantes de placas XIAO.
- **Selecciona el puerto correcto.** Ve a **Tools** → **Port** y elige el puerto serie correspondiente a tu placa. Si no aparece ningún puerto, comprueba tu cable USB y la conexión.
- **Entra en modo bootloader si es necesario.** Si la carga falla de forma constante, pulsa dos veces el botón RESET para entrar en modo bootloader, luego vuelve a seleccionar el puerto e intenta cargar de nuevo.

## Recursos
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN04/202004502_XIAO_ePaper_Display_Board_EN04_V1_SCH_and_PCB.zip)


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
