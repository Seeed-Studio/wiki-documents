---
description: Wio Terminal Chassis Battery(650mAh)
title: Chasis de Batería para Wio Terminal (650mAh)
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Chassis-Battery_650mAh
last_update:
  date: 07/27/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

El **Wio Terminal Battery Chassis** es una placa de expansión imprescindible para la placa de desarrollo [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html), ya que proporciona una fuente de alimentación externa para mejorar su portabilidad y compactibilidad. Cuenta con **una batería recargable de polímero de litio de 650mAh, LED de estado de carga/descarga de batería, 4 puertos Grove analógicos/digitales, 1 puerto Grove I2C, 1 puerto Grove UART, y una carcasa ABS para estética y protección.** Además, tiene un conector GPIO compatible con Raspberry Pi de 40 pines en la parte trasera para agregar más módulos.

La nueva versión del Wio Terminal Battery Chassis incluye el medidor de batería [BQ27441-G1A](http://www.ti.com/product/BQ27441-G1) de Texas Instruments — un medidor de combustible auto-calibrado basado en I2C para baterías LiPo, que permite medir el voltaje de la batería para estimar el porcentaje de carga y la capacidad restante.

<div className="get_one_now_container" style={{ textAlign: 'center' }}>
  <a className="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html">
    <strong>
      <span>
        <font color="#FFFFFF" size="4">Consigue uno ahora 🖱️</font>
      </span>
    </strong>
  </a>
</div>

## Feature

- Batería recargable integrada de 650mAh
- LED indicador de estado de carga/descarga
- Botón On/OFF de la batería
- Medidor de combustible integrado BQ27441-G1A para baterías LiPo
- Carga por USB Tipo-C
- Protección contra sobrecorriente
- Modo Hiccup / Protección Hiccup
- 4 puertos Grove Analógico/Digital
- 1 puerto Grove I2C
- 1 puerto Grove UART
- Imanes ocultos dentro de la carcasa para pegar en pizarras blancas

## Especificación

| Item                       | Detail                                                                                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Power Supply**           | 4.75V - 5.25V                                                                                                                             |
| **Built-in battery**       | 650mAh                                                                                                                                    |
| **Charging current**       | Max: 660mA                                                                                                                                |
| **Battery board mode** | Verde encendido: carga activa.<br />Rojo encendido: OTG (descarga batería) activo.<br />Amarillo encendido: interfaz macho salida/entrada 5V. |
| **GPIO output**            | Max voltaje: 5.15V<br />Max corriente: 380mA                                                                                                |
| **Trickle charge current** | 30mA                                                                                                                                      |
| **Grove Interface**        | Grove Analógico/Digital *4, Grove I2C*1, Grove UART *1                                                                                |

## Hardware Overview

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/new-pin.png" /></div>

## Precautions

- Si la batería se retira mientras la placa está en modo de carga, la placa entrará en modo fallo y el LED verde parpadeará a 1 Hz.
- Cuando la placa no esté en uso, presiona el botón para entrar en modo suspensión y todos los LEDs se apagarán.

## Detectar el estado de la batería LiPo

1. Descarga la librería [SparkFun_BQ27441_Arduino_Library](https://github.com/sparkfun/SparkFun_BQ27441_Arduino_Library) desde su repositorio oficial.

2. Instala la librería en el Arduino IDE abriendo `Sketch` → `Include Library` → `Add .ZIP Library` y selecciona el archivo ZIP descargado.

![Instalación de la librería](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Ejemplo de código para leer el estado de la batería

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/demo.gif" /></div>

```cpp
#include <SparkFunBQ27441.h>
#include"TFT_eSPI.h"

TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
#define FF17 &FreeSans9pt7b

const unsigned int BATTERY_CAPACITY = 650; // Capacidad de la batería Wio Terminal (mAh)

void setupBQ27441(void)
{
  if (!lipo.begin()) {
    Serial.println("Error: Unable to communicate with BQ27441.");
    Serial.println("  Check wiring and try again.");
    Serial.println("  (Battery must be plugged into Battery Babysitter!)");
    tft.setTextColor(TFT_RED);
    tft.setCursor((320 - tft.textWidth("Battery Not Initialised!"))/2, 120);
    tft.print("Battery Not Initialised!");
    while (1);
  }
  Serial.println("Connected to BQ27441!");
  lipo.setCapacity(BATTERY_CAPACITY);
}

void printBatteryStats()
{
  unsigned int soc = lipo.soc();          // % carga
  unsigned int volts = lipo.voltage();    // mV
  int current = lipo.current(AVG);        // mA
  unsigned int fullCapacity = lipo.capacity(FULL);  // mAh
  unsigned int capacity = lipo.capacity(REMAIN);    // mAh restantes
  int power = lipo.power();                // mW
  int health = lipo.soh();                 // % salud batería

  String toPrint = String(soc) + "% | " + String(volts) + " mV | " + String(current) + " mA | " + 
                   String(capacity) + " / " + String(fullCapacity) + " mAh | " + String(power) + " mW | " + String(health) + "%";
  Serial.println(toPrint);

  // Gráficos LCD
  tft.setTextColor(TFT_BLUE);
  tft.drawRoundRect(10, 10, 300, 220, 10, TFT_BLUE);
  tft.setTextColor(TFT_MAGENTA);
  tft.drawString("State of Charge:", 20, 30);
  tft.drawString("Battery Voltage:", 20, 55);
  tft.drawString("Average Current:", 20, 80);
  tft.drawString("Remain Capacity:", 20, 105);
  tft.drawString("Full Capacity:", 20, 130);
  tft.drawString("Average Power:", 20, 155);
  tft.drawString("State of Health:", 20, 180);
  
  spr.createSprite(80, 170);
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(FF17);
  spr.setTextColor(TFT_WHITE);
  spr.drawString(String(soc) + " %", 0, 0);
  spr.drawString(String(volts) + " mV", 0, 25);
  spr.drawString(String(current) + " mA", 0, 50);
  spr.drawString(String(capacity) + " mAh", 0, 75);
  spr.drawString(String(fullCapacity) + " mAh", 0, 100);
  spr.drawString(String(power) + " mW", 0, 125);
  spr.drawString(String(health) + " %", 0, 150);
  spr.pushSprite(170, 30);
  spr.deleteSprite();
}

void setup()
{
  Serial.begin(115200);
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);
  tft.setFreeFont(FF17);
  setupBQ27441();
  tft.setTextColor(TFT_GREEN);
  tft.setCursor((320 - tft.textWidth("Battery Initialised!")) / 2, 120);
  tft.print("Battery Initialised!");
  delay(1000);
  tft.fillScreen(TFT_BLACK);
}

void loop()
{
  printBatteryStats();
  delay(1000);
}
```

## Recursos

- **[ZIP]** [Archivo de diseño esquemático del Wio Terminal Battery Chassis](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/WioTerminal_battry_650mAh.rar)

## Soporte Técnico

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte para que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
