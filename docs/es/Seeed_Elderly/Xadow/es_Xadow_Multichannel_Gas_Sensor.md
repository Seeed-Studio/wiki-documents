---
description: Xadow - Sensor de Gas Multicanal
title: Xadow - Sensor de Gas Multicanal
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Multichannel_Gas_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Multichannel_Gas_Sensor_photo.jpg)

Xadow – Sensor de Gas Multicanal es una placa de sensor muy pequeña con un sensor MOS compacto, MiCS-6814. El MiCS-6814 es un sensor MEMS robusto para la detección de contaminación de gases de escape de automóviles y para olores agrícolas/industriales. Esta placa de sensor tiene dos interfaces estándar Xadow. Es muy fácil de usar con [Xadow - Main Board.](https://wiki.seeedstudio.com/es/Xadow_Main_Board)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Multichannel-Gas-Sensor-p-2459.html)

## Características
---
- Tres elementos de detección completamente independientes en un paquete
- Construido con ATmega168PA
- Interfaz I2C con dirección programable
- La potencia de calentamiento se puede apagar para bajo consumo
- Contorno estándar Xadow

## Diagrama de Bloques

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Multichannel_Gas_Sensor_block_diagram.jpg)

## Características Eléctricas
---
|Elemento |Condición	|Mín.	|Típ.	|Máx.	|Unidad|
|---|---|---|---|---|---|
|Voltaje|	-	|3.1	|3.3|	3.5|	V|
|Rizado	|@Potencia Máx|	-	|80	|100|	mV|
|Potencia de Calentamiento|	-	|-	|-	|88|	mW|
|Potencia Máxima|	-|	-|	-|	150|	mW|
|Precisión ADC|	-|	-|	10|	-	|Bits|
|Voltaje ADC	|-	|0|	-	|3.3	|V|
|Velocidad I2C|	-|	-	|100	|400	|kHz|
|VIL|	@I2C|	-0.5	|-|	0.99	|V|
|VIH|	@I2C|	2.31|	-|	3.8	|V|

**Sensor RED de rendimiento**

|Característica sensor RED	|Símbolo	|Típ|	Mín	|Máx	|Unidad|
|---|---|---|---|---|
|Resistencia de detección en aire	|R0|	-	|100	|1500|	kΩ|
|Rango típico de detección de CO	|FS|	-	|1|	1000|	ppm|
|Factor de sensibilidad	|SR|	-|	1.2|	50|	-|


![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Red_sensor.jpg)

**Sensor OX de rendimiento**
|Característica sensor OX	|Símbolo|	Típ	|Mín	|Máx	|Unidad|
|---|---|---|---|---|---|
|Resistencia de detección en aire	|R0	|-	|0.8|	20|	kΩ|
|Rango típico de detección de NO2|	FS|	-	|0.05|	10|	ppm|
|Factor de sensibilidad	|SR	|-|	2	|-	|-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/OX_sensor.jpg)

**Rendimiento del sensor NH3**
|Característica del sensor NH3|	Símbolo	|Típico|	Mín|	Máx|	Unidad|
|---|---|---|---|---|---|
|Resistencia de detección en aire	|R0|	-	|10	|1500|	kΩ|
|Rango típico de detección NH3|	FS	|-	|1	|300|	ppm|
|Factor de sensibilidad|	SR|-	|1.5|	15|	-|


![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/NH3_sensor.jpg)

## Definición de Pines
---
![](https://files.seeedstudio.com/wiki/Xadow_Pins.jpg)

## Demostración

Puedes comenzar con [Xadow - Main Board](https://wiki.seeedstudio.com/es/Xadow_Main_Board)

**Instalación de Hardware: **

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Mutichannel_Gas_Sensor_connect_to_Xadow.JPG)

1) Conecta Xadow - Multichannel Gas Sensor a [Xadow - Main Board](https://wiki.seeedstudio.com/es/Xadow_Main_Board). No olvides instalar el controlador Xadow. Nota: cuando conectes Xadow - Multichannel Gas Sensor a [Xadow - Main Board](https://wiki.seeedstudio.com/es/Xadow_Main_Board), debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo xadow).

Cargar Código:

2) Descarga [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor) e instálalo en la Librería de Arduino.

3) Abre el código directamente por la ruta: File -> Example ->Mutichannel_Gas_Sensor->ReadSensorValue_Xadow.

El contenido de ReadSensorValue_Xadow.ino por favor consulta a continuación.

```
/*
    This is a demo to test MutichannelGasSensor library
    This code is running on Xadow-mainboard, and the I2C slave is Xadow-MutichannelGasSensor
    There is a ATmega168PA on Xadow-MutichannelGasSensor, it get sensors output and feed back to master.
    the data is raw ADC value, algorithm should be realized on master.

    please feel free to write email to me if there is any question

    Jacky Zhang, Embedded Software Engineer
    qi.zhang@seeed.cc
    17,mar,2015
*/

#include "xadow.h"
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Xadow.init();

    Serial.begin(9600);  // start serial for output
    Serial.println("power on!");

    mutichannelGasSensor.begin(0x04);//the default I2C address of the slave is 0x04
    //mutichannelGasSensor.changeI2cAddr(0x10);
    //mutichannelGasSensor.doCalibrate();
    //delay(8000);
    while(mutichannelGasSensor.readR0() < 0)
    {
        Serial.println("sensors init error!!");
        delay(1000);
    }
    Serial.print("Res0[0]: ");
    Serial.println(mutichannelGasSensor.res0[0]);
    Serial.print("Res0[1]: ");
    Serial.println(mutichannelGasSensor.res0[1]);
    Serial.print("Res0[2]: ");
    Serial.println(mutichannelGasSensor.res0[2]);
    mutichannelGasSensor.powerOn();
}

void loop()
{
    mutichannelGasSensor.readR();
    Serial.print("Res[0]: ");
    Serial.println(mutichannelGasSensor.res[0]);
    Serial.print("Res[1]: ");
    Serial.println(mutichannelGasSensor.res[1]);
    Serial.print("Res[2]: ");
    Serial.println(mutichannelGasSensor.res[2]);

    mutichannelGasSensor.calcGas();
    Serial.print("NH3: ");
    Serial.print(mutichannelGasSensor.density_nh3);
    Serial.println("ppm");
    Serial.print("CO: ");
    Serial.print(mutichannelGasSensor.density_co);
    Serial.println("ppm");
    Serial.print("NO2: ");
    Serial.print(mutichannelGasSensor.density_no2);
    Serial.println("ppm");

    Xadow.greenLed(LEDON);
    delay(500);
    Xadow.greenLed(LEDOFF);
    delay(500);
    Serial.println("...");
}
```

4) Sube el código. Recuerda seleccionar Seeeduino Xadow desde el menú Herramientas | Placa del entorno de Arduino, y selecciona el puerto serie correcto que está usando [Xadow - Main Board](https://wiki.seeedstudio.com/es/Xadow_Main_Board). O podrías seleccionar Arduino Leonardo en su lugar.

Al abrir el monitor serie, puedes ver los datos en bruto leídos del sensor.

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_XadowPrint.jpg)


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Xadow - Multichannel Gas Sensor v1.0 sch](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_v1.0_sch.pdf)
- [Xadow - Multichannel Gas Sensor eagle files](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip)
- [MiCS-6814 Datasheet](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/MiCS-6814_Datasheet.pdf)
- [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)

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
