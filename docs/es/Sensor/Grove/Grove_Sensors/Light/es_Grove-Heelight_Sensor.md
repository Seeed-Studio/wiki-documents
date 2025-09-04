---
description: Grove - Sensor Heelight
title: Grove - Sensor Heelight
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Heelight_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/Heelight%20Sensor%20plus%20coin.jpg" /></div>

Grove – Sensor Heelight es un sensor de voz inteligente que puede reconocer hasta 500 comandos de voz digitales. Originalmente se utilizó en el Heelight – una bombilla inteligente colorida que puede ser controlada por ondas de sonido digitales. Ahora introducimos este sensor en los módulos Grove pequeños y ordenados, permitiéndote realizar control inteligente en tus proyectos basados en Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Reconocimiento de Voz Digital

- Soporta más de 500 comandos de voz digitales

- Compatible con el sistema Grove

## Especificaciones

| Nombre del Producto  | Grove-Sensor Heelight |
|----------------------|-----------------------|
| Voltaje de Operación | DC 3.3V~5V            |
| Corriente de Operación | 15mA                |
| Rango de Identificación | 0.1~10m           |
| Rango de Ángulo      | 360°                  |
| Tamaño               | 20*20mm               |
| Velocidad de Baudios | 115200                |
| Salida del Puerto Serie | Nivel lógico TTL   |

## Primeros Pasos

### ¿Qué necesitamos?

|Nombre |Función| Cantidad |Enlace|
|---|---|---|---|
|Base Shield V2| Proporciona conectores Grove |1 |[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|
|Seeeduino V4.2| Controlador |1 |[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|
|Grove - Heelight Sensor |Sensor| 1| [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html)|


### Conexión de Hardware

- Conecta el Base Shield V2 en el Seeeduino V4.2
- Conecta el Grove - Heelight Sensor al puerto D6 del Base Shield V2.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/hardware%20connection.JPG" /></div>

### Subir el código

Antes de subir el código, por favor asegúrate de haber seleccionado la placa y puerto COM correctos. Para Seeeduino V4.2, podemos elegir Arduino/Genuino Uno.

Este es el ejemplo básico que puede mostrar la capacidad del sensor, el cual genera diferentes valores hexadecimales en el monitor serie cuando recibe (o escucha) diferentes sonidos digitales. También puedes descargar este ejemplo en los Recursos

```
/*
  Software serial multple serial test

 Receives from the hardware serial, sends to software serial.
 Receives from software serial, sends to hardware serial.

 The circuit:
 * RX is digital pin 10 (connect to TX of other device)
 * TX is digital pin 11 (connect to RX of other device)

 Note:
 Not all pins on the Mega and Mega 2560 support change interrupts,
 so only the following can be used for RX:
 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69

 Not all pins on the Leonardo support change interrupts,
 so only the following can be used for RX:
 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).

 created back in the mists of time
 modified 25 May 2012
 by Tom Igoe
 based on Mikal Hart's example

 This example code is in the public domain.
*/

#include <SoftwareSerial.h>

SoftwareSerial mySerial(6, 7); // RX, TX

void setup()
{
  // Open serial communications and wait for port to open:
  Serial.begin(57600);
   mySerial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }


  Serial.println("Goodnight moon!");

  // set the data rate for the SoftwareSerial port

  //mySerial.println("Hello, world?");
}

void loop() // run over and over
{
  if (mySerial.available())
  {
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.println();
  }
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

### Resultados

Abre el monitor serie, configura la velocidad de baudios a 57600, luego reproduce el sonido. Hemos preparado 511 [sonidos digitales](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip) diferentes para ti. Cada vez que se reproduce un sonido, el sensor heelight emitirá un valor hexadecimal correspondiente al sonido, y los últimos 2 caracteres del valor hexadecimal son los mismos que el valor del sonido.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight%20sensor%20output.png" /></div>

:::note
Si este sensor no funciona bien cuando reproduces los sonidos específicos que proporcionamos a través de PC u otros altavoces, por favor configura el volumen en un nivel bajo. Recomendamos 10/100 en PC con Windows.
:::

## Recursos

- [Sitio web de Heelight](http://www.heelight.com/)
- [500+ audio de voz digital](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip)
- [Código de ejemplo](https://github.com/SeeedDocument/Grove_Heelight_Sensor/tree/master/res/Grove_-_Heelight_Sensor_example)

## Soporte Técnico y Discusión de Productos

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah, y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
