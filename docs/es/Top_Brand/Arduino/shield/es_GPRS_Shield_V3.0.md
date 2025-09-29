---
description:  GPRS Shield V3.0
title:  GPRS Shield V3.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/GPRS_Shield_V3.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: GPRS Shield V3.0
category: Shield
bzurl: https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html
oldwikiname:  GPRS Shield V3.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V3
sku:  113030009
--- -->

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/GPRS_Shield_V3.0_p1.jpg)

Esta es la versión 3.0 del GPRS Shield.
¡Conecta tu Arduino a la red de telefonía celular GSM/GPRS con el shield GPRS! Ahora puedes usar tu Arduino/Seeeduino u otras placas principales para marcar un número de teléfono o enviar un mensaje de texto a tu amigo mediante comandos AT fáciles de usar.
El GPRS Shield cuenta con un módulo GSM/GPRS SIM900 de cuatro bandas y bajo consumo de energía, así como una antena PCB compacta. Mientras tanto, se han realizado mejoras en las interfaces y el circuito básico para hacerlo más conciso y confiable.
Y tienes dos opciones para comunicar el shield GPRS con la placa principal: UART o SoftwareSerial.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html)

## Versión

---
| Revisión | Descripciones                                              | Lanzamiento  |
|----------|-----------------------------------------------------------|--------------|
| v0.9b    | Lanzamiento público inicial (beta)                        | 3 Mar, 2011  |
| v1.2     | Agregado puerto de software para encender/apagar el SIM90 | 2 Dic, 2011  |
| v1.4     | Rediseño del circuito de fuente de alimentación, nueva disposición del PCB | 30 Ago, 2012 |
| v2.0     | Soporte de cuatro bandas y rediseño de la antena PCB      | 3 Feb, 2013  |
| v3.0     | Cambio del socket de arduino al estándar más reciente de Arduino Uno | 20 Mar, 2015 |

**¿Cuál es la diferencia entre V3.0 y la versión anterior?**

- Cambiar el socket arduino al último estándar Arduino Uno. Excepto esto, todas las características son iguales a la versión anterior.

## Precauciones

---
- Asegúrate de que tu tarjeta SIM esté activada.
- GPRS Shield no viene con precauciones ESD. Ten especial cuidado al manipularlo en clima seco.

## Descripción General del Hardware

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/Gprs_shield_v3_layout1.png)

Por favor enlaza a la documentación de [GPRS Shield V2.0](https://wiki.seeedstudio.com/es/GPRS_Shield_V2.0/) para especificaciones y guía de aplicación.

## Preguntas Frecuentes

**P1: ¿Cómo modificar el código para leonardo?**

R1: Aquí está el código.

```cpp
#include <SoftwareSerial.h>

unsigned char buffer[64]; // buffer array for data recieve over serial port
int count = 0;     // counter for buffer array

void setup()
{
    Serial1.begin(19200);               // the GPRS baud rate   
    Serial.begin(19200);             // the Serial port of Arduino baud rate.
}

void loop()
{
    if (Serial1.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
    {
        while (Serial1.available())          // reading data into char array
        {
            buffer[count++] = Serial1.read();     // writing data into array
            if (count == 64)
                break;
        }
    
        for ( int j=0;j<count;j++)
        {
          Serial.write(buffer[j]);
        }
        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
        count = 0;                       // set counter of while loop to zero
    }
    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook
        Serial1.write(Serial.read());       // write it to the GPRS shield
}

void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i < count; i++)
    {
        buffer[i] = NULL;
    }                               // clear all index of array with command NULL
}
```

**P2: ¿Cómo actualizar el firmware del SIM900?**

P2: Por favor descarga el firmware "SIM_900_AGPS_instructions" del módulo de Recursos en la wiki, si tienes algún problema de software o hardware. Y esta última versión puede soportar HTTPS, etc. Para más información por favor consulta la introducción incluida.

**P3: ¿Qué hay sobre el RTC del shield GPRS?**

P3: La especificación del SIM900 dice que tiene un respaldo RTC, pero no lo hemos usado hasta ahora. Tal vez puedas consultar el manual y hacer una demostración tú mismo o lo haremos en el futuro.

**P4: No puedo enviar o recibir ningún SMS con este shield GPRS.**

R4: Por favor sigue las siguientes instrucciones.

- Por favor asegúrate de que la tarjeta SIM esté bien insertada
- Verifica la tarjeta en el teléfono para ver si funciona.
- Intenta subir el código de prueba de nuestra wiki y envía comandos AT para ver si hay buenas respuestas.
- Intenta cambiar el "#define _SS_MAX_RX_BUFF 64 // RX buffer size" en "libraries\SoftwareSerial\SoftwareSeriall.h" a "#define_SS_MAX_RX_BUFF 128 // RX buffer size

**P5: Dos formas alternativas para ayudar a despertar el shield GPRS**

R5: Aquí están las 2 formas.

- Poner el pin DTR en bajo: El puerto serie estará activo después de que DTR se ponga en bajo por 20ms
- La alarma RTC expira

**P6: ¿Qué tipo de tarjetas SIM funcionan con el Shield GPRS?**

R6: El SIM900 usado en el Shield GPRS soporta bandas GSM de 850/900/1800/1900MHz.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático y PCB del Shield GPRS v3.0 en formato eagle](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip)
- **[PDF]** [Esquemático del Shield GPRS v3.0 en formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_v3.0%20sch.pdf)
- **[PDF]** [PCB del Shield GPRS v3.0 en formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS%20Shield%20v3.0%20PCB.pdf)
- **[Librería]** [Librería GPRS_Shield en gitHub - basada en Suli](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[Librería]** [Librería GPRS_SIM900 en gitHub - No Suli](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[Documento]** [Comandos AT v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/AT_Commands_v1.11.pdf)
- **[Documento]** [Diseño de Hardware SIM900](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900_HD_V1.05.pdf)
- **[Hoja de Datos]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[Hoja de Datos]** [Hoja de Datos SIM900](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900datasheeet.zip)
- **[Hoja de Datos]** [SIM_900_AGPS_instructions](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM_900_AGPS_instructions.zip)
- **[Herramientas]** [Firmware y herramienta SIM900(firmware:1137B08SIM900M64_ST)](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B08SIM900M64_ST.zip)
- **[Herramientas]** [Firmware y herramienta SIM900(firmware:1137B13SIM900M64_ST)](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B13SIM900M64_ST.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
