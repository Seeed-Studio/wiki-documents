---
description: El Receptor Infrarrojo es usado para recibor señales infrarojas e incluso como detención de control remoto.
title: Infrares Receiver
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Infrared_Receiver_Spanish
last_update:
  date: 06/2-/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-Infrared_Receiver/raw/master/img/Grove-Infrared_Receiver.jpg)

El Receptor Infrarrojo es usado para recibor señales infrarojas e incluso como detención de control remoto. Cuenta con un detector IR el cual es usado para obtener la luz infrarroja emitida por un Emisor Infrarrojo. El detector IR tiene un demodulador dentro que recibelas señales IR móduladas a 38KHz. El Receptor Infrarrojo puede recibir señales con una distancia de hasta 10 metros, más allá de eso puede que no capte las señales del todo. Usualmente usamos el conjunto del Grove - Receptor Infrarrojo y [Grove - Emisor Infrarrojo](http://wiki.seeedstudio.com/Grove-Infrared_Emitter) para crear proyectos.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)

## Versión

| Versión del Producto             | Cambios              | Fecha de Lanzamiento |
| -------------------------------- | -------------------- | -------------------- |
| Grove - Receptor Infrarrojo v1.0 | Inicial              | Nov. 01 2015         |
| Grove - Receptor Infrarrojo v1.1 | Cambio de Serigrafía | Jul. 24 2016         |

##　 Especificaciones

- Voltaje: 3.3-5V
- Distancia: 10m

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                                 | BeagleBone                                                                                          | Wio                                                                                               | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

El Grove - Emisor Infrarrojo puede enviar información a tráves del Grove - Receptor Infrarrojo.

### Jugando con Arduino

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

#### Hardware

- **Paso 1.** Prepara los siguientes materiales:

| Seeeduino V4.2                                                                                                        | Shield Base                                                                                                            | Grove - Emisor Infrarrojo                                                                                             | Grove - Receptor Infrarrojo                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduinoX2.png) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/baseshiledX2.png) | ![enter image description here](https://github.com/SeeedDocument/Grove-Infrared_Emitter/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Infrared_Receiver/raw/master/img/little.jpg) |
| [Adquiere uno aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                            | [Adquiere uno aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                            | [Adquiere uno aquí](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)                                    | [Adquiere uno aquí](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)                                 |

- **Paso 2.** Conecta el Grove - Emisor Infrarrojo al puerto **D3** del primer Grove - Base Shield.
- **Paso 3.** Conecta el Grove - Receptor Infrarrojo al puerto **D2** del segundo Grove - Shield Base.

- **Paso 4.** Ensambla el Grove - Shield Base en tu Seeeduino.

- **Paso 5.** Conecta el Seeeduino al PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove-Infrared_Emitter/raw/master/img/connect.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino    | Grove - Emisor Infrarrojo |
| ------------ | ------------------------- |
| 5V           | Rojo                      |
| GND          | Negro                     |
| No Conectado | Blanco                    |
| D3           | Amarrillo                 |

| Seeeduino    | Grove - Receptor Infrarrojo |
| ------------ | --------------------------- |
| 5V           | Rojo                        |
| GND          | Negro                       |
| No Conectado | Blanco                      |
| D2           | Amarillo                    |

#### Software

- **Paso 1.** Descarga la librería [IRSendRev-master library](https://github.com/Seeed-Studio/IRSendRev) desde GitHub.

- **Paso 2.** Refiere a [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería en Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo `recv` por medio del path: **File->Examples->Grove - Infrared Receiver And Emitter->recv**.

![](https://github.com/SeeedDocument/Grove-Infrared_Receiver/raw/master/img/path.png)

O puedes abrir un nuevo sketch y copia el siguiente código en tu IDE de Arduino.

```c++

#include <IRSendRev.h>

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6

const int pinRecv = 2;              // Receptor Ir conecta el puerto D2

void setup()
{
    Serial.begin(115200);
    IR.Init(pinRecv);
    Serial.println("init over");
}

unsigned char dta[20];

void loop()
{
    if(IR.IsDta())                  // Obtener IR data
    {
        IR.Recv(dta);               // Recibe data a dta

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

- **Paso 5.** Abre el ejemplo `send` usando el path: **File->Examples->Grove - Infrared Receiver And Emitter->send**.

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
    dtaSend[BIT_LEN]        = 11;			// toda la información que necesita ser enviada
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

- **[Zip]** [Archivos Eagle Grove - Receptor Infrarrojo](https://raw.githubusercontent.com/SeeedDocument/Grove-Infrared_Receiver/master/res/Grove-Infrared_Receiver_eagle_files.zip)
- **[Lib]** [Librería IR Send and Receiver](https://github.com/Seeed-Studio/IRSendRev)
- **[Lib]** [Librería para LinkIt IR Receive Library](https://github.com/Seeed-Studio/IR_Recv_LinkIt_ONE)
- **[Pdf]** [TSOP282 Datasheet](http://www.vishay.com/docs/82491/tsop382.pdf)

## Proyectos

**IR LaunchPad al LaunchPad Comunicación**: Envía texto de un LaunchPad a otro usando Grove IR Emisor y Receptor!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
