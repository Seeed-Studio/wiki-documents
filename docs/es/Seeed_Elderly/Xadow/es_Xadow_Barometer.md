---
description: Xadow - Barómetro
title: Xadow - Barómetro
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Barometer
last_update:
  date: 1/13/2023
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Baro_Meter_01.jpg)

El módulo puede medir la presión del aire y la temperatura del entorno actual, y luego puedes convertir esta señal a información de altitud. Si estás planeando usar Xadow para hacer un dispositivo portátil y medir la altitud cuando escales la montaña, entonces este módulo será tu elección perfecta.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-p-1522.html)

## Especificaciones
---
- Voltaje de Funcionamiento: 1.8 ~ 3.3v
- Rango de Presión: 300 ~ 1100hPa(+9000m ~ 4500m sobre el nivel del mar)
- Bajo Consumo
- Modo de Control: I2C (dirección 0x77)
- Temperatura de Funcionamiento：-40 ~ +85 °C
- Dimensiones: 25.43mm x 20.35mm


## Demostración
---
La demostración te mostrará cómo obtener la presión del aire y la temperatura del entorno actual.

**Instalación del Hardware**

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/XadowBarometerUsage.jpg)

:::note
    Cuando conectes Xadow Barómetro a Xadow Main Board, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).
:::
## Descargar Librería
----
- Xadow Barómetro comparte la librería con Grove - Sensor Barómetro. Puedes descargar directamente la [librería](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) desde Github.
- Ahora puedes abrir el código y subirlo a Xadow Main Board. Si no has instalado el Driver de Xadow, puedes aprender los pasos de operación refiriéndote a la [guía de inicio](https://wiki.seeedstudio.com/es/Xadow_Main_Board/) en la página principal del wiki.

```
/*
* Get pressure, altitude, and temperature from the BMP085.
* Serial.print it out at 9600 baud to serial monitor.
*/
#include "Barometer.h"
#include <Wire.h>
float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;
void setup(){
  Serial.begin(9600);
  myBarometer.init();
}

void loop()
{
   temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first
   pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature
   altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters
   atm = pressure / 101325;

  Serial.print("Temperature: ");
  Serial.print(temperature, 2); //display 2 decimal places
  Serial.println("deg C");

  Serial.print("Pressure: ");
  Serial.print(pressure, 0); //whole number only.
  Serial.println(" Pa");

  Serial.print("Ralated Atmosphere: ");
  Serial.println(atm, 4); //display 4 decimal places

  Serial.print("Altitude: ");
  Serial.print(altitude, 2); //display 2 decimal places
  Serial.println(" m");

  Serial.println();

  delay(1000); //wait a second and get values again.
}
```

- Abre el monitor serie para recibir los datos del sensor incluyendo temperatura, valor de presión barométrica, presión atmosférica relativa y altitud.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Xadow_Baremeter_Result.jpg)

- Aquí hay un gráfico de referencia que traza la relación entre la altitud sobre el nivel del mar y la presión barométrica.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Pressure_and_Altitude.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle de Xadow Barómetro](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer.zip)
- [Librería de Xadow Barómetro](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer_Library.zip)
- [BST-BMP085-DS000-06](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/BST-BMP085-DS000-06.pdf)

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