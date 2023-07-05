---
description: El Emisor Infrarrojo es usado para transmitir señales infrarrojas a través de un LED Infrarrojo
title: Emisor Infrarrojo
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Infrared_Emiter_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-Infrared_Emitter/raw/master/img/main.jpg)

El Emisor Infrarrojo es usado para transmitir señales infrarrojas a través de un LED Infrarrojo, mientrás haya un **Receptor Infrarrojo** para recibir las señales del otro lado. Un LED Infrarrojo es igual a cualquier otro LED, con su color centrado alrededor de 940nm. No solo podemos usar el Emisor para transmitir información o comandos, es posible también emular un control remoto para controlar aplicaciones en casa usando un Seeeduino o Arduino. El Emisor Infrarrojo puede transmitir señales a una distancia de hasta 10 metros. Más álla de esto, es posible que el receptor no capte las señales. Ofrecemos los dos módulos Grove para trabajar en conjunto el
[Receptor Infrarrojo](http://wiki.seeedstudio.com/Grove-Infrared_Receiver) y el Emisor Infrarrojo.

<p style={{}}><a href="http://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width={210} height={41} border="0/" /></a></p>

## Versión

| Versión del Producto           | Cambios                                                  | Fecha de Lanzamiento |
| ------------------------------ | -------------------------------------------------------- | -------------------- |
| Grove - Emisor Infrarrojo v1.0 | Inicial                                                  | Nov. 01 2015         |
| Grove - Emisor Infrarrojo v1.1 | Cambios en la localización del transmisor infrarrojo     | Jul. 24 2016         |
| Grove - Emisor Infrarrojo v1.2 | Cambios en el valor de C1 para brindar mayor estabilidad | Dec. 14 2016         |

## Aplicaciones

- Control remoto Infrarrojo con mayor capacidad de alimentación
- Sistemas de Transmisión Inalámbrica
- Fuente Infrarroja para contadores ópticos y lectores de tarjetas.

##　 Espeficiaciones

| Parámetros                 | Valor/Rango   |
| -------------------------- | ------------- |
| Voltaje de Operación       | 3.3/5V        |
| Longitud Máxima de Onda    | 940nm         |
| Ángulo de intensidad media | ϕ = ± 17°     |
| Intensidad Radiante        | 72 mW/sr      |
| Distancia                  | 10 meter(MAX) |
| Temperatura de Operación   | -40℃ to +80℃  |
| Tamaño                     | 20mmX20mm     |

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                                 | BeagleBone                                                                                          | Wio                                                                                               | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

El Grove - Emisor Infrarrojo puede enviar información a través del Grove - Receptor Infrarrojo.

### Jugando con Arduino

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

#### Hardware

- **Paso 1.** Prepara el siguiente material:

| Seeeduino V4.2                                                                                                        | Shield Base                                                                                                            | Grove - Emisor Infrarrojo                                                                                             | Grove - Receptor Infrarrojo                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduinoX2.png) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/baseshiledX2.png) | ![enter image description here](https://github.com/SeeedDocument/Grove-Infrared_Emitter/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Infrared_Receiver/raw/master/img/little.jpg) |
| [Adquierelo Aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                              | [Adquierelo Aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                              | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)                                      | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)                                   |

- **Paso 2.** Conecta el Grove - Emisor Infrarrojo al puerto **D3** del Grove - Shield Base.
- **Paso 3.** Conecta el Grove - Receptor Infrarrojo al puerto **D2** del segundo Grove - Shield Base.
- **Paso 4.** Ensambla los Grove - Shield Base en su respectivo Seeeduino.
- **Paso 5.** Conecta los Seeeduinos en tu PC vía USB.

![](https://github.com/SeeedDocument/Grove-Infrared_Emitter/raw/master/img/connect.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino    | Grove - Emisor Infrarrojo |
| ------------ | ------------------------- |
| 5V           | Rojo                      |
| GND          | Negro                     |
| No Conectado | Blanco                    |
| D3           | Amarillo                  |

| Seeeduino    | Grove - Receptor Infrarrojo |
| ------------ | --------------------------- |
| 5V           | Rojo                        |
| GND          | Negro                       |
| No Conectado | Blanco                      |
| D2           | Amarillo                    |

#### Software

- **Paso 1.** Descarga la Librería [IRSendRev-master](https://github.com/Seeed-Studio/IRSendRev) desde GitHub.

- **Paso 2.** Revisa [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería de Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo`recv` usando el path: **File->Examples->Grove - Infrared Receiver And Emitter->recv**.

![](https://github.com/SeeedDocument/Grove-Infrared_Receiver/raw/master/img/path.png)

O puedes abrir un nuevo sketch y copiar el siguiente código en el.

```c++

#include <IRSendRev.h>

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6

const int pinRecv = 2;              // Receptor conectado a D2

void setup()
{
    Serial.begin(115200);
    IR.Init(pinRecv);
    Serial.println("init over");
}

unsigned char dta[20];

void loop()
{
    if(IR.IsDta())                  // Obtenemos los datos IR
    {
        IR.Recv(dta);               // receive data to dta

        Serial.println("+------------------------------------------------------+");
		Serial.print("LEN = ");
        Serial.println(dta[BIT_LEN]);
        Serial.print("START_H: ");
        Serial.print(dta[BIT_START_H]);
        Serial.print("\tSTART_L: ");
        Serial.println(dta[BIT_START_L]);

        Serial.print("DATA_H: ");
        Serial.print(dta[BIT_DATA_H]);
        Serial.print("\tDATA_L: ");
        Serial.println(dta[BIT_DATA_L]);

        Serial.print("\r\nDATA_LEN = ");
        Serial.println(dta[BIT_DATA_LEN]);

		Serial.print("DATA: ");
        for(int i=0; i<dta[BIT_DATA_LEN]; i++)
        {
            Serial.print("0x");
            Serial.print(dta[i+BIT_DATA], HEX);
            Serial.print("\t");
        }
        Serial.println();

		Serial.print("DATA: ");
        for(int i=0; i<dta[BIT_DATA_LEN]; i++)
        {
            Serial.print(dta[i+BIT_DATA], DEC);
            Serial.print("\t");
        }
        Serial.println();
        Serial.println("+------------------------------------------------------+\r\n\r\n");
    }
}

```

- **Paso 4.** Sube la demostración `recv` al seeeduino con el Grove - Receptor Infrarrojo. Si no sabes como subir el código, por favor revisa
  [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Paso 5.** Abre el ejemplo `send` usando el path: **File->Examples->Grove - Infrared Receiver and Emitter->send**.

O puedes abrir un nuevo sketch y copia el siguiente código en el IDE de Arduino.

```
#include <IRSendRev.h>

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6

const int ir_freq = 38;                 // 38k

unsigned char dtaSend[20];

void dtaInit()
{
    dtaSend[BIT_LEN]        = 11;			// all data that needs to be sent
    dtaSend[BIT_START_H]    = 179;			// the logic high duration of "Start"
    dtaSend[BIT_START_L]    = 90;			// the logic low duration of "Start"
    dtaSend[BIT_DATA_H]     = 11;			// the logic "long" duration in the communication
    dtaSend[BIT_DATA_L]     = 33;			// the logic "short" duration in the communication

    dtaSend[BIT_DATA_LEN]   = 6;			// Number of data which will sent. If the number is other, you should increase or reduce dtaSend[BIT_DATA+x].

    dtaSend[BIT_DATA+0]     = 128;			// data that will sent
    dtaSend[BIT_DATA+1]     = 127;
    dtaSend[BIT_DATA+2]     = 192;
    dtaSend[BIT_DATA+3]     = 63;
	dtaSend[BIT_DATA+4]     = 192;
    dtaSend[BIT_DATA+5]     = 63;
}

void setup()
{
    dtaInit();
}

void loop()
{
    IR.Send(dtaSend, 38);

    delay(2000);
}

```

- **Paso 6.** Sube la demostración `send` al Seeeduino con Grove - Emisor Infrarrojo.

- **Paso 7.** Abre el **Monitor Serial** del Arduino IDE dando en click **Tool-> Serial Monitor**. O presiona ctrl+shift+m al mismo tiempo.

Si todo ha salido bien, el resultado debería mostrarse como a continuación:

![](https://github.com/SeeedDocument/Grove-Infrared_Emitter/raw/master/img/results.png)

## Recursos

- **[Zip]** [Archivos Grove-Emisor Infrarrojo](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Emitter/master/res/Grove-Infrared_Emitter_eagle_files.zip)
- **[Lib]** [Librería IR Send and Receiver](https://github.com/Seeed-Studio/IRSendRev)
- **[Pdf]** [TSAL6200 Datasheet](http://www.vishay.com/docs/81010/tsal6200.pdf)

## Proyectos

**IR LaunchPad al LaunchPad Comunicación**: Envía texto de un LaunchPad a otro usando Grove IR Emisor y Receptor!

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed" width={350} />

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
</div>
