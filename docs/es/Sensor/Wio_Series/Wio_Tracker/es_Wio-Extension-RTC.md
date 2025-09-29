---
title: Wio Extension RTC (Reloj de Tiempo Real)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Extension-RTC/
slug: /es/Wio-Extension-RTC
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)

El Wio Extension - RTC es una placa de extensión para Wio LTE, puede proporcionar la función de Reloj de Tiempo Real a través del puerto I2C. Esta placa está basada en el chip NXP PCF8523, que puede proporcionar información de año, mes, día, día de la semana, horas, minutos y segundos.
  
Esta placa se alimenta por puerto Micro-USB, se comunica con el Wio LTE a través del puerto I2C, y también proporcionamos una salida de alimentación USB que puede ser apagada/encendida por un interruptor integrado, para que puedas usar la placa Wio Extension - RTC para alimentar el Wio LTE. Cuando se suministra energía a las placas Wio (como en la siguiente imagen), la corriente de espera de todo el sistema es menor a 1 uA.

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características  

- Extensibilidad
- Capaz de suministrar a las placas Wio con voltaje de 3.3V.

## Descripción General del Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" /></a></p>
  </figure></div>

![](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/rtc_diagram.png)

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Jugar con Arduino

**Materiales requeridos**

| Placas Wio LTE |   Wio-Extension-RTC  |  Grove - Buzzer |Grove - LED Rojo |
|--------------|-------------|-----------------|---------|
|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-06bazaar837387_img_0005a.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Buzzer.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

>Dado que Wio Extension - RTC solo controla el suministro de energía USB configurado desde I2C, puedes usar esta placa para gestionar el suministro de energía de casi todas las placas MCU que se alimentan desde USB.

:::note
        **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
        **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.                   
:::

#### Hardware

- **Paso 1.** Conecta el Wio-Extension-RTC al puerto **I2C** de las Placas Wio LTE.

- **Paso 2.** Conecta las Placas Wio LTE a la PC mediante un cable USB.

- **Paso 3.** Conecta [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) o [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) al D38 del Wio LTE.

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" /></a></p></figure></div>

#### Software

:::caution
    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar. El controlador de esta placa depende del archivo de cabecera de `Seeed STM32F4 Board(JP mirror) by Seeed K.K.`, así que ya sea que hayas instalado tu placa wio con el tutorial de [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/), necesitas hacer el siguiente paso.
:::
**Paso 1** Instalar biblioteca
Abre tu Arduino IDE, haz clic en File > Preferences, y copia la siguiente url a Additional Boards Manager URLs.  
`http://www.seeed.co.jp/package_SeeedJP_index.json`  
![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Preferences.png)  

Haz clic en Tools > Board > Board Manager, e ingresa `Wio` en el cuadro de texto.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Boards_Manager.png)

Haz clic en `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` luego aparece un botón Install, haz clic en él para terminar el paso, este proceso toma alrededor de 5 minutos a media hora, lo cual depende de la velocidad de tu red.
Haz clic en Tools > Manage Libraries, e ingresa `Wio` en el cuadro de texto.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Library_Manager.png)
Haz clic en `Wio LTE for Arduino by Seeed K.K.` luego aparece un botón Install, haz clic en él para terminar el paso.

Descomprime el [sketch de ejemplo](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/wiortc-sample.zip), y abre `wiortc-sample.ino` con Arduino IDE.

**Paso 2** Descargar el código

1. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
2. Veremos STM BOOTLARDER en el administrador de dispositivos.
3. Selecciona Tools→Boards→Wio_Tracker_LTE.
![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/Snipaste_2019-04-10_15-15-20.jpg)

4. Selecciona Sketch→Upload para subir el código al Wio_LTE.
5. Presiona el botón RST para habilitar el puerto COM.
**Consejos**

>Cuando descargas la mayoría de placas Arduino, necesitas elegir un puerto COM correcto, pero para esta placa, debes mantener la configuración COM en blanco.

>![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/port.jpg)

6. Usa el monitor Serial para imprimir el mensaje serial.

```cpp
#include <WioLTEforArduino.h>
#include "WioRTC.h"

////////////////////////////////////////////////////////////////////////////////
// Defines

#define BOOT_INTERVAL   (30)  // [sec.]

////////////////////////////////////////////////////////////////////////////////
// Global variables

WioLTE Wio;
WioRTC Rtc;

////////////////////////////////////////////////////////////////////////////////
// setup and loop

void setup()
{
  delay(200);

  SerialUSB.begin(115200);
  SerialUSB.println("");
  SerialUSB.println("--- START ---------------------------------------------------");

  ////////////////////////////////////////
  // Low-level initialize

  SerialUSB.println("### I/O Initialize.");
  Wio.Init();

  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  
  ////////////////////////////////////////
  // Device initialize
  
  SerialUSB.println("### Device initialize.");
  Wire.begin();
  Rtc.begin();

  ////////////////////////////////////////
  // Completed

  SerialUSB.println("### Completed.");
}

void loop()
{
  uint8_t val;
  Rtc.EepromRead(0, &val, sizeof(val));
  SerialUSB.print("EEPROM value is ");
  SerialUSB.println(val);
  
  val++;
  Rtc.EepromWrite(0, &val, sizeof(val));
  
  SerialUSB.println("Beep.");
  pinMode(WIO_D38, OUTPUT);
  digitalWrite(WIO_D38, HIGH);
  delay(200);
  digitalWrite(WIO_D38, LOW);
  
  SerialUSB.println("Shutdown.");
  Rtc.SetWakeupPeriod(BOOT_INTERVAL);
  Rtc.Shutdown();
  while (1) {}
}
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Wio-Extension-RTC](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip)
- **[Ejemplo]** [Código de Ejemplo Wio-Extension-RTC](https://github.com/Seeed-Studio/Wio_Extension_RTC/blob/master/wiortc-sample.zip)

## Soporte Técnico y Discusión de Productos

 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
