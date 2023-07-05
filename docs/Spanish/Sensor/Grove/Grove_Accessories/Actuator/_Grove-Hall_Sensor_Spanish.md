---
description: El sensor Hall está basado en el efecto Hall, el cual es producto de la diferencia de voltaje a tráves de un conductor eléctrico
title: Hall Sensor
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Hall_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Hall_Sensor/master/img/Grove-Hall_Sensor_New.jpg)

El sensor Hall está basado en el efecto Hall, el cual es producto de la diferencia de voltaje a tráves de un conductor eléctrico, transversal a una corriente eléctrica en el conductor y un campo magnético perpendicular a la corriente. En Sensor Grove se encuentra un switch de tiempo-continuo. La salida de estos dispositivos conmuta a low (enciende) cuando el campo mágnetico (polaridad sur) permendicular al sensor Hall excede el punto de operación del umbral BOP, en ese momento conmuta a high (apaga) cuando el campo mágnetico desaparece. Este efecto puede utilizarse para medir RPM.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/grove-hall-sensor-p-965.html)

## Seguimiento de Versiones

| Revisión                  | Descripciones                  | Lanzamiento |
| ------------------------- | ------------------------------ | ----------- |
| Grove - Hall Sensor v0.9b | Lanzamiento al público inicial | 3,Oct,2011  |

## Características

- Compatible con la Interfaz Grove
- Período de transición de 400ns para levantamiento y caida.
- Sensor de Efecto Hall tiempo-continuo.
- Protección de batería inversa.

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Especificaciones

| Articulo              | Min | Típico | Max | Unidad |
| --------------------- | --- | ------ | --- | ------ |
| Supply Voltage        | 3.8 | 5.0    | 24  | V      |
| Supply Current        | 4.1 | -      | 24  | mA     |
| Operating Temperature | -40 | -      | 85  | ºC     |

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                                 | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Ideas de Aplicaciones

- Medidor de RPM.
- Motor DC Simple.

## Primeros Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

#### Demonstración

El Sensor Hall es utilizado por medio de interrupciones externas disponibles en Arduino o Seeeduino. En este ejemplo, utilizamos la interrupción 0, que se encuentra en el pin digital 2. Para otras interrupciones consulte, [attachInterrupt()](http://www.arduino.cc/en/Reference/AttachInterrupt).

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Grove - Hall Sensor                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Hall_Sensor/master/img/Grove-Hall_Sensor_New%20_small.jpg) |
| [¡Obtenlo ya!](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                      | [¡Obtenlo ya!](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                     | [¡Obtenlo ya!](http://www.seeedstudio.com/depot/grove-hall-sensor-p-965.html)                                                                    |

- **Paso 2.** Conectar el Sensor Hall Gove en el puerto D2 del Grove-Shield Base.
- **Paso 3.** Insertar el Shield base - Grove a tu Seeeduino.
- **Paso 4.** Conectar el Seeeduino por medio de un cable USB a la PC.

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino    | Grove - Hall Sensor |
| ------------ | ------------------- |
| 5V           | Rojo                |
| GND          | Negro               |
| Sin Conectar | Blanco              |
| D2           | Amarillo            |

#### Software

- **Paso 1.** Descargue el código [Hall Sensor Code](https://raw.githubusercontent.com/SeeedDocument/Grove-Hall_Sensor/master/res/Grove-Hall_Sensor_Demo_Code.zip)

- **Paso 2.** Abre uno de los dos Códigos. Por Ejemplo, **MagnetControlLED**

- **Paso 3.** Copia el código en el IDE de Arduino y carguelo. Si no sabes como cargar un código, por favor revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c
/****************************************************************************/
//	Function: When a magnet whose south pole is facing up is approaching to
//			  the onboard sensor, the LED will be turned on.Otherwise, the
//			  LED will be turned off.
//	Hardware: Grove - Hall Sensor, Grove - LED
//	Arduino IDE: Arduino-1.0
//	Author:	 FrankieChu
//	Date: 	 Jan 20,2013
//	Version: v1.0
//	by www.seeedstudio.com
//
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
//
/*Macro definiciones del pni magnetico y el pin del LED*/
#define HALL_SENSOR 2
#define LED	4//the Grove - LED is connected to D4 of Arduino

void setup()
{
 	pinsInit();
}

void loop()
{
	if(isNearMagnet())//if the hall sensor is near the magnet?
	{
		turnOnLED();
	}
	else
	{
		turnOffLED();
	}
}
void pinsInit()
{
	pinMode(HALL_SENSOR, INPUT);
	pinMode(LED,OUTPUT);
}

/*If the hall sensor is near the magnet whose south pole is facing up, */
/*it will return ture, otherwise it will return false.				*/
boolean isNearMagnet()
{
	int sensorValue = digitalRead(HALL_SENSOR);
	if(sensorValue == LOW)//if the sensor value is LOW?
	{
		return true;//yes,return ture
	}
	else
	{
		return false;//no,return false
	}
}
void turnOnLED()
{
	digitalWrite(LED,HIGH);
}
void turnOffLED()
{
	digitalWrite(LED,LOW);
}
```

- **Paso 4.** Cuando un imán cuyo polo mágnetico sur se encuentra hacia arriba cerca del borade el sensor, el LED se encenderá. De lo contratio, el led se apagará.

### Jugando con Codecraft

#### Hardware

- **Paso 1.** Conectar el Sensor Hall Gove en el puerto D2 del Grove-Shield Base.
- **Paso 2.** Insertar el Shield base - Grove a tu Seeeduino.
- **Paso 3.** Conectar el Seeeduino por medio de un cable USB a la PC.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo.

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Hall_Sensor/master/img/cc_Hall_Sensor.png)

Sube el programa a tu Arduino o Seeeduino.
¡Éxito!
Cuando el código finalice de subirse, el LED encenderá cuando el Sensor Hall detecte algún cambio en el campo Mágnetico.

## Recursos

- **[Eagle]** [Grove-Hall Sensor Schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-Hall_Sensor/master/res/Twig_Hall_Sensor_v0.9b.zip)

- **[Demostración]** [Hall Sensor Demo Code](https://raw.githubusercontent.com/SeeedDocument/Grove-Hall_Sensor/master/res/Grove-Hall_Sensor_Demo_Code.zip)

- **[Datasheet]** [A1101 datasheet](http://www.allegromicro.com/en/Products/Part_Numbers/1101/1101.pdf)

- **[Codecraft]** [CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-Hall_Sensor/master/res/Grove_Hall_Sensor_CDC_File.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Hall_Sensor -->

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
