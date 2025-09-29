---
description: Xadow - Barómetro BMP180
title: Xadow - Barómetro BMP180
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Barometer_BMP180
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Xadow-bmp180.JPG)

El módulo puede medir la presión del aire y la temperatura del entorno actual, y luego puedes convertir esta señal en información de altitud. El BMP180 es el sucesor funcionalmente compatible del BMP085, una nueva generación de sensores de presión digital de alta precisión para aplicaciones de consumo. La electrónica de ultra bajo consumo y bajo voltaje, el rendimiento superior del BMP180 está optimizado para su uso en dispositivos portátiles, teléfonos móviles, PDAs, dispositivos de navegación GPS y equipos para exteriores. La interfaz I2C permite una fácil integración del sistema con un microcontrolador.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-BMP180-v1.0-p-2412.html)


## Especificaciones
---
Voltaje de Trabajo: 3.3v
Rango de Presión: 300 ~ 1100hPa(+9000m ~ -500m relativo al nivel del mar)
Bajo Consumo
Modo de Control: I2C (dirección 0x77)
Temperatura de Operación: -40 ~ +85 °C
Dimensiones: 25.43mm x 20.35mm


## Demostración
---
**Con Xadow Main Board**

La demostración te mostrará cómo obtener la presión del aire y la temperatura del entorno actual.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/IMG_2379.JPG)

!!!Note
    Al conectar Xadow - Barómetro BMP180 a Xadow - Main Board, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).

## Descargar Biblioteca
---
- Xadow Barómetro BMP180 comparte la biblioteca con Grove - Sensor Barómetro. Puedes descargar directamente la [biblioteca](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) desde GitHub.
- Ahora puedes abrir el código y subirlo a Xadow Main Board. Si no has instalado el Driver de Xadow, puedes aprender los pasos de operación consultando la [guía de inicio](https://wiki.seeedstudio.com/es/Getting_Started_with_Seeeduino/) en la página principal del wiki.

```
/*
* Get pressure, altitude, and temperature from the BMP180.
* Serial.print it out at 9600 baud to serial monitor.
*/
#include "Barometer.h"
#include "Wire.h";
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
  Serial.print(pressure, 0); // whole numbers only.
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

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Barometer_Sensor.jpg)

- Lo siguiente es un gráfico de referencia que traza la relación entre la altitud sobre el nivel del mar y la presión barométrica.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Pressure_and_Altitude.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle de Xadow - Barómetro BMP180](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip)
- [Biblioteca Barometer_Sensor](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- [Hoja de datos BMP180](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/BMP180.pdf)

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