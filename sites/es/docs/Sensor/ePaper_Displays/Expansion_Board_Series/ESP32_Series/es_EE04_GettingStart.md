---
description: Introducción a XIAO ePaper Display Board(ESP32-S3) - EE04
title: Introducción a EE04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /epaper_ee04
sidebar_position: 3
sku: 104990861,100075670,100064541,E25102101
last_update:
  date: 09/16/2026
  author: Nemo
createdAt: '2025-09-25'
updatedAt: '2026-09-16'
url: https://wiki.seeedstudio.com/es/epaper_ee04/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introducción a XIAO ePaper Display Board - EE04

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

Impulsada por **XIAO ESP32-S3** Plus, la placa de visualización EE04 es compatible tanto con pantallas ePaper de **24 pines** como de **50 pines**. Incorpora un conector de batería JST de 2,0 mm con interruptor de alimentación, CI de carga integrado y viene con un botón de reinicio y tres botones de usuario. Es ideal para proyectos ePaper de bajo consumo, como señalización digital, etiquetas electrónicas y paneles de información portátiles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_1.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **Impulsada por XIAO ESP32-S3 Plus:** Funciona inmediatamente al conectarse a una pantalla ePaper compatible.
- **Compatibilidad versátil de pantallas:** Compatible con una amplia gama de pantallas ePaper, admitiendo interfaces de 24 pines y 50 pines con cambio sencillo mediante jumpers.
- **Conector BAT con interruptor:** Proporciona una conexión de batería sencilla e integra un interruptor, lo que permite una gestión de energía eficiente y ahorro energético.
- **Botones fáciles de usar:** Incluye 1 botón de reinicio y 3 botones programables por el usuario, ofreciendo flexibilidad para acelerar proyectos y funciones personalizables.
- **Diseño de bajo consumo**: Adecuado para aplicaciones ePaper alimentadas por batería, con una duración típica de 3 meses con una carga completa bajo la configuración predeterminada.

### Especificaciones

| Parámetro | Descripción |
|-----------|-------------|
| Procesador | XIAO ESP32-S3 Plus |
| Conector ePaper | FPC 24 pines 0,5 mm<br />FPC 50 pines 0,5 mm |
| Conector de batería | JST 2,0 mm |
| Interruptor | Encendido/Apagado de alimentación por batería |
| Alimentación | - Batería de litio de 3,7 V<br />- USB Type-C |
| Botón | - 1x Botón de reinicio<br />- 3x Botón de usuario |

### Guía de selección de placas ePaper

| Producto | ePaper Display Board EE04 | [ePaper Breakout](https://wiki.seeedstudio.com/es/XIAO-eInk-Expansion-Board/) | [ePaper Driver Board](https://wiki.seeedstudio.com/es/xiao_eink_expansion_board_v2/) |
|---------|---------------------------|---------------|-----------------|
| Procesador | XIAO ESP32-S3 Plus | Serie XIAO | Serie XIAO |
| Pantallas ePaper compatibles | ePaper de 24 pines<br />ePaper de 50 pines | ePaper de 24 pines | ePaper de 24 pines |
| Conector ePaper | FPC 24 pines, 0,5 mm<br />FPC 50 pines, 0,5 mm | FPC 24 pines 0,5 mm | FPC 24 pines 0,5 mm |
| Conector de batería | JST 2,0 mm | / | JST 2,0 mm |
| Interruptor | Encendido/Apagado de alimentación por batería | / | Encendido/Apagado de alimentación por batería |
| Botón | 1x Botón de reinicio<br />3x Botón de usuario | / | / |
| Puerto de E/S de extensión | / | conexión de otros controladores | conexión de sensores adicionales |

### Aplicaciones

- **Panel de control para hogar inteligente**: Muestra información en tiempo real como actualizaciones meteorológicas, eventos del calendario y notificaciones de varios dispositivos de hogar inteligente.
- **Monitorización de energía**: Muestra datos de consumo energético de contadores inteligentes, ayudando a los propietarios a seguir y gestionar su uso de energía de forma más eficiente.
- **Alertas de seguridad**: Muestra alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Pantalla de termostato inteligente**: Muestra niveles de temperatura y humedad, así como los ajustes de control de tu termostato inteligente.
- **Marco de fotos digital**: Crea un marco de fotos digital con WiFi que pueda mostrar imágenes desde tu red de hogar inteligente.

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

:::tip

Esta versión XIAO ePaper Display Board(ESP32-S3) - EE04 no admite funcionalidad NFC.

:::

### ePaper compatible

#### Conector de 24 pines

- [Pantalla ePaper de 1,54 pulgadas - Monocromo 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Pantalla ePaper de 2,13 pulgadas - Monocromo 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [Pantalla ePaper de 2,13 pulgadas - Cuádruple 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Pantalla ePaper de 2,9 pulgadas - Monocromo 296x128](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Pantalla ePaper de 2,9 pulgadas - Monocromo flexible 296x128](https://www.seeedstudio.com/2-9-Flexible-Monochrome-ePaper-Display-with-296x128-Pixels-p-5780.html)
- [Pantalla ePaper de 2,9 pulgadas - Cuádruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Pantalla ePaper de 4,2 pulgadas - Monocromo 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Pantalla ePaper de 4,26 pulgadas - Monocromo 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Pantalla ePaper de 5,83 pulgadas - Monocromo 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Pantalla ePaper de 7,5 pulgadas - Monocromo 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
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

### Botones

La EE04 está equipada con 1 botón de reinicio y 3 botones programables por el usuario, lo que proporciona flexibilidad para la interacción del usuario y la personalización del proyecto.

| Botón | GPIO | Función |
|--------|------|----------|
| KEY0 | GPIO2_D1/A1 | Botón de usuario (programable) |
| KEY1 | GPIO3_D2/A2 | Botón de usuario (programable) |
| KEY2 | GPIO5_D4/A4 | Botón de usuario (programable) |
| RESET | - | Botón de reinicio |

:::note
Los botones de usuario son programables y se pueden configurar para varias funciones, como cambio de página, selección de modo o activación de acciones específicas en tu proyecto ePaper.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

### Selección del jumper

La EE04 admite pantallas ePaper tanto de 24 pines como de 50 pines. Usa el jumper para seleccionar la configuración de pines correcta para tu pantalla:

- **Modo de 24 pines**: Coloca el jumper en el lado de 24 pines
- **Modo de 50 pines**: Coloca el jumper en el lado de 50 pines

:::caution
Asegúrate de que el jumper esté correctamente posicionado de acuerdo con el número de pines de tu pantalla ePaper. Una colocación incorrecta del jumper puede causar problemas de visualización o dañar la pantalla.
:::

### Conector de batería

La placa incorpora un conector de batería JST de 2,0 mm con un interruptor de alimentación, lo que te permite alimentar el dispositivo con una batería de litio de 3,7 V para aplicaciones portátiles. El CI de carga integrado permite la carga de la batería a través de USB Type-C.

Cuando el dispositivo se alimenta con batería, los siguientes fenómenos son comportamientos normales inherentes del propio firmware SenseCraft Seeedash.

- El dispositivo entrará automáticamente en modo de bajo consumo entre actualizaciones
- La duración de la batería depende de la frecuencia de actualización (normalmente 3 meses con una carga completa con la configuración predeterminada)
- El dispositivo mostrará un icono de batería baja en la esquina superior derecha cuando el nivel de batería sea inferior al 20%

## Introducción a SenseCraft Seeedash 

Esta sección te guiará para conectar tu EE04 a la plataforma SenseCraft Seeedash, lo que te permitirá actualizar fácilmente el contenido de la pantalla de forma inalámbrica.

:::note
**¿Qué pantalla utiliza esta guía?** A diferencia de las placas de un solo panel, la EE04 admite varios paneles ePaper (consulta la sección **ePaper compatible** más arriba). Esta guía utiliza la **pantalla ePaper monocroma de 7,5 pulgadas (800 x 480)** como ejemplo en todo el documento; todas las capturas de pantalla siguientes se toman con este panel. Si tienes una pantalla diferente, simplemente selecciona tu propio modelo de panel al flashear el firmware en el Paso 2; los pasos restantes son exactamente los mismos.
:::

:::caution
**¿No aparece la pantalla de bienvenida al primer encendido? Es normal.** Debido a que la EE04 admite varios paneles ePaper, el firmware de fábrica no viene preflasheado para ninguna pantalla específica. Cuando conectes una pantalla y enciendas una placa nueva, lo más probable es que la pantalla permanezca en blanco; esto **no** significa que la placa o la pantalla estén dañadas. Primero debes flashear el firmware SenseCraft Seeedash que coincida con el modelo de tu pantalla (Paso 2 a continuación); las interfaces de bienvenida y de Configuración de red aparecerán después de flashear.
:::
### Instalación del equipo

**Paso 1. Conecta la pantalla y la placa**
Conecta con cuidado el cable FPC de tu pantalla ePaper al conector de la placa controladora EE04. Asegúrate de que el mecanismo de bloqueo esté bien asegurado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/Connect.gif" style={{width:800, height:'auto'}}/></div>

**Paso 2. Flashea el firmware HMI para tu pantalla**

Mantén la placa EE04 conectada a tu ordenador con un cable USB Type-C de **datos** (el mismo cable se usa para alimentación y flasheo), luego:

1. Visita la [plataforma SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi) e inicia sesión en tu cuenta.
2. Abre **Tools** → **Firmware Flasher** desde el menú de la izquierda.
3. En la lista de dispositivos, selecciona **XIAO EE04 DIY Kit**.
4. Selecciona la entrada de firmware que coincida con el modelo de pantalla conectado a tu placa. **En esta guía usamos la pantalla monocroma de 7,5" 800 x 480**; aquí elige tu propio panel si es diferente.
5. Haz clic en **Flash**, elige el puerto serie de tu placa en la ventana emergente y espera a que termine el flasheo.

:::tip
Si no aparece ningún puerto serie, pulsa el botón **RESET** en la placa e inténtalo de nuevo. Asegúrate también de que tu cable USB-C admite transferencia de datos y no solo carga.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_7.png" style={{width:800,height:'auto'}}/></div>

**Paso 3. Entra en el modo de configuración de red**
Una vez completado el flasheo del firmware, la placa se reinicia automáticamente. La pantalla primero muestra la imagen de bienvenida y luego se actualiza a la interfaz de configuración de red. Esto indica que el dispositivo está listo para conectarse a Wi‑Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_1.png" style={{width:300,height:'auto'}}/></div>


### Configuración de red

**Paso 4. Configura el Wi‑Fi mediante el teléfono móvil**
Usa tu teléfono móvil para escanear el código QR que se muestra en la pantalla. Sigue las indicaciones en tu teléfono para introducir el SSID y la contraseña de tu red Wi‑Fi local y conectar el EE04 a Internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**Paso 5. Obtén el código de emparejamiento**
Una vez que la configuración de red sea correcta, la pantalla se actualizará de nuevo y mostrará un **código de emparejamiento** único. Necesitarás este código para el siguiente paso.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_2.png" style={{width:300,height:'auto'}}/></div>

### Vinculación y actualización en la plataforma

**Paso 6. Vincula el dispositivo en SenseCraft Seeedash**
Ve a la [plataforma SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi/device). Inicia sesión en tu cuenta. Navega a la sección de gestión de dispositivos y selecciona "New Device". Introduce el código de emparejamiento que se muestra en tu pantalla de tinta electrónica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**Paso 7. Crea y envía una nueva interfaz**     
En la plataforma SenseCraft Seeedash, selecciona la plantilla adecuada para la pantalla de 7,5 pulgadas para crear una nueva interfaz o subir una imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_5.png" style={{width:500, height:'auto'}}/></div>

**Paso 8. Aplica tus imágenes**
Cuando termines, haz clic en el botón "Apply" y selecciona tu dispositivo EE04.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_6.png" style={{width:800, height:'auto'}}/></div>

**Paso 9. Muestra en la pantalla**
Finalmente, el EE04 recibirá los datos y actualizará la pantalla de 7,5 pulgadas con tu nuevo contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_4.png" style={{width:300, height:'auto'}}/></div>


## Primeros pasos con Arduino

### Instalar la librería Seeed GFX2

:::tip
Esta librería tiene la misma función que la librería TFT y **no** es compatible con ella. Si has instalado la librería TFT u otras librerías de pantalla similares, desinstálalas primero.
:::

Descarga e instala la librería Seeed GFX2 desde GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

Después de descargar la librería, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la librería descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### Configura y graba el programa

Como se muestra en la imagen, navega hasta el ejemplo mediante este menú:
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → XIAO ePaper Display Board - EE04 → 7.5-inch ePaper - Monochrome 800x480 → 7_5_inch_Monochrome_HelloWorld

:::note
Esta guía utiliza la **pantalla de tinta electrónica monocroma de 7,5 pulgadas (800 x 480)** como ejemplo. Si tienes una pantalla diferente, abre en su lugar la carpeta de ejemplo que coincida con el modelo de tu propio panel bajo `EE04`.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/GFX2_EE04_demo_1.png" style={{width:800, height:'auto'}}/></div>

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32S3 Plus** y **Tools** -> **Port** -> **Select the port your board is connected to**. 

Ten en cuenta que PSRAM debe estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

Luego haz clic en **Upload** para subir el código.
Ahora verás la respuesta en tu pantalla de tinta electrónica. A continuación se muestra el resultado del ejemplo HelloWorld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/GFX2_EE04_demo.png" style={{width:300, height:'auto'}}/></div>

## Descripción general del software

### Botones de usuario en la XIAO ePaper Display Board (ESP32-S3) - EE04

Esta sección muestra cómo leer los estados de los botones y responder a las pulsaciones usando Arduino.
Todos los botones son activos en bajo, lo que significa que leen LOW cuando se pulsan y HIGH cuando se sueltan.
Ejemplo básico de lectura de botones
Este ejemplo muestra cómo detectar pulsaciones de botones e imprimir mensajes en el monitor serie.

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

- El dispositivo entrará automáticamente en modo de bajo consumo entre actualizaciones

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

## Recursos

- **[PDF]** [Esquemático de la pantalla de tinta electrónica Seeed Studio XIAO ePaper Display EE04](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Archivo 3D de Grabcad de la pantalla de tinta electrónica Seeed Studio XIAO ePaper Display EE04](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [SCH&PCB de la pantalla de tinta electrónica Seeed Studio XIAO ePaper Display EE04](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



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
