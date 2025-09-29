---
description: Wio Terminal Chassis Battery(650mAh)
title: Wio Terminal Chassis Battery(650mAh)
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Chassis-Battery_650mAh
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

El Wio Terminal Battery Chassis es una placa de extensión imprescindible para la placa de desarrollo [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) ya que proporciona una fuente de alimentación externa para Wio Terminal para mejorar su portabilidad y compacidad. Cuenta con **una batería de polímero de litio recargable de 650mAH, LED de estado de carga/descarga de batería, 4 puertos Grove analógicos/digitales, 1 puerto Grove I2C y 1 puerto Grove UART, así como la carcasa ABS para estética y protección.** ¡También hay el mismo GPIO compatible con 40 pines de Raspberry Pi en la parte posterior del Wio Terminal Battery Chassis para más complementos!

La nueva versión del Wio Terminal Battery Chassis ha añadido el **[BQ27441-G1A](http://www.ti.com/product/BQ27441-G1) de Texas Instrument** - medidor de combustible auto-calibrante basado en I2C para baterías de polímero de litio (LiPo) que se puede usar para medir el voltaje de su batería para estimar su porcentaje de carga y capacidad restante!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## **Características**

- Batería de polímero de litio recargable integrada de 650mAh
- LED de estado de carga/descarga de batería
- Botón de encendido/apagado de batería
- Medidor de combustible BQ27441-G1A integrado para baterías LiPo
- Carga USB Type-C
- Protección contra sobrecorriente
- Modo hiccup/Protección Hiccup
- 4 x puerto Grove analógico/digital
- 1 x puerto Grove I2C
- 1 x puerto Grove UART
- ¡Los imanes están ocultos dentro de la carcasa para que se pueda pegar en la pizarra!

## **Especificaciones**

<!-- <style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-pu0z{background-color:#9b9b9b;border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style> -->

<table className="tg">
  <thead>
    <tr><th className="tg-pu0z">Elemento</th><th className="tg-pu0z">Detalle</th></tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-fymr">Fuente de alimentación</td>
      <td className="tg-0pky">4.75V - 5.25V</td>
    </tr>
    <tr>
      <td className="tg-1wig">Batería integrada</td>
      <td className="tg-0lax">650mAh</td>
    </tr>
    <tr>
      <td className="tg-1wig">Corriente de carga</td>
      <td className="tg-0lax">Máx: 660mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">modo de placa de batería</td>
      <td className="tg-0lax">LED Verde: Encendido significa que la placa está cargando.<br /><br />LED Rojo: Encendido significa que el OTG(descarga de batería) está habilitado.<br /><br />LED Amarillo: Encendido significa que la interfaz macho produce/recibe 5V.</td>
    </tr>
    <tr>
      <td className="tg-1wig">salida GPIO</td>
      <td className="tg-0lax">Voltaje máx: 5.15V <br /><br />Corriente máx: 380mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">Corriente de carga lenta</td>
      <td className="tg-0lax">30mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">Interfaz Grove</td>
      <td className="tg-0lax">Grove Analógico/Digital *4, Grove I2C* 1, Grove UART * 1</td>
    </tr>
  </tbody>
</table>

## **Descripción General del Hardware**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/new-pin.png"/></div>

## **Precauciones**

- Si se retira la batería mientras la placa está en modo de carga, la placa cambiará al modo de falla y la luz verde parpadeará a una frecuencia de 1Hz.

- Cuando la placa de batería no esté en uso, presione el botón para entrar en modo de suspensión y todos los LED se apagarán.

## **Detección del Estado de la Batería LiPo**

1. Visite los repositorios de [SparkFun_BQ27441_Arduino_Library](https://github.com/sparkfun/SparkFun_BQ27441_Arduino_Library) y descargue todo el repositorio a su unidad local.

2. Ahora, la biblioteca puede instalarse en el Arduino IDE. Abra el Arduino IDE, y haga clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elija el archivo `SparkFun_BQ27441_Arduino_Library` que acaba de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### **Código de Ejemplo**

Puede usar el siguiente código para leer las estadísticas de su chasis de batería.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/demo.gif"/></div>

```cpp
#include <SparkFunBQ27441.h>
#include"TFT_eSPI.h"

TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
#define FF17 &FreeSans9pt7b

const unsigned int BATTERY_CAPACITY = 650; // Set Wio Terminal Battery's Capacity 

void setupBQ27441(void)
{
  // Use lipo.begin() to initialize the BQ27441-G1A and confirm that it's
  // connected and communicating.
  if (!lipo.begin()) // begin() will return true if communication is successful
  {
  // If communication fails, print an error message and loop forever.
    Serial.println("Error: Unable to communicate with BQ27441.");
    Serial.println("  Check wiring and try again.");
    Serial.println("  (Battery must be plugged into Battery Babysitter!)");
    tft.setTextColor(TFT_RED);
    tft.setCursor((320 - tft.textWidth("Battery Not Initialised!"))/2, 120);
    tft.print("Battery Not Initialised!");
    while (1) ;
  }
  Serial.println("Connected to BQ27441!");
  
  // Uset lipo.setCapacity(BATTERY_CAPACITY) to set the design capacity
  // of your battery.
  lipo.setCapacity(BATTERY_CAPACITY);
}

void printBatteryStats()
{
  // Read battery stats from the BQ27441-G1A
  unsigned int soc = lipo.soc();  // Read state-of-charge (%)
  unsigned int volts = lipo.voltage(); // Read battery voltage (mV)
  int current = lipo.current(AVG); // Read average current (mA)
  unsigned int fullCapacity = lipo.capacity(FULL); // Read full capacity (mAh)
  unsigned int capacity = lipo.capacity(REMAIN); // Read remaining capacity (mAh)
  int power = lipo.power(); // Read average power draw (mW)
  int health = lipo.soh(); // Read state-of-health (%)

  // Now print out those values:
  String toPrint = String(soc) + "% | ";
  toPrint += String(volts) + " mV | ";
  toPrint += String(current) + " mA | ";
  toPrint += String(capacity) + " / ";
  toPrint += String(fullCapacity) + " mAh | ";
  toPrint += String(power) + " mW | ";
  toPrint += String(health) + "%";
  
  Serial.println(toPrint);

  // LCD Graphics
  tft.setTextColor(TFT_BLUE);
  tft.drawRoundRect(10, 10, 300, 220, 10, TFT_BLUE);
  tft.setTextColor(TFT_MAGENTA);
  tft.drawString("State of Chage:", 20, 30);
  tft.drawString("Battery Voltage:", 20, 55);
  tft.drawString("Average Current:", 20, 80);
  tft.drawString("Remain Capacity:", 20, 105);
  tft.drawString("Full Capacity:", 20, 130);
  tft.drawString("Average Power:", 20, 155);
  tft.drawString("State of Health:", 20, 180);
  
  // Data
  spr.createSprite(80, 170);
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(FF17);
  spr.setTextColor(TFT_WHITE);
  spr.drawString(String(soc)+" % ", 0, 0);
  spr.drawString(String(volts)+" mV ", 0, 25);
  spr.drawString(String(current)+" mA ", 0, 50);
  spr.drawString(String(capacity)+" mAh ", 0, 75);
  spr.drawString(String(fullCapacity)+" mAh ", 0, 100);
  spr.drawString(String(power)+" mW ", 0, 125);
  spr.drawString(String(health)+" % ", 0, 150);
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
  tft.setCursor((320 - tft.textWidth("Battery Initialised!"))/2, 120);
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

## **Visor de Esquemas en Línea**

<div className="altium-ecad-viewer" data-project-src="https://http://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH_NEW.ZIP" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## **Recursos**

- **[ZIP]** [Archivo de Diseño de Esquemas del Chasis de Batería Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/WioTerminal_battry_650mAh.rar)

## **Soporte Técnico**


¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
