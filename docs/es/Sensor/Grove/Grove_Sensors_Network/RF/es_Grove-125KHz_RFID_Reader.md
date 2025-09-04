---
title: Grove - Lector RFID de 125KHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-125KHz_RFID_Reader/
slug: /es/Grove-125KHz_RFID_Reader
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Grove-125KHz_RFID_Reader.jpg)

Este Grove - Lector RFID de 125KHz es un módulo utilizado para leer información de tarjetas RFID uem4100 con dos formatos de salida: Uart y Wiegand. Tiene una sensibilidad con una distancia máxima de detección de 7cm. También existe [la versión de ladrillo electrónico](https://www.seeedstudio.com/depot/electronic-brick-125khz-rfid-card-reader-p-702.html?cPath=52) de este módulo. Puede ayudarte con proyectos como internet de las cosas y sistemas de control de acceso.

Y deberías usar el módulo de abajo mientras usas el lector RFID:

- [Combo de etiquetas RFID (125khz)](https://www.seeedstudio.com/depot/rfid-tag-combo-125khz-5-pcs-p-700.html?cPath=19_24)

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html)

## Versión

| Versión del Producto | Cambios | Fecha de Lanzamiento |
|---------------------|---------|---------------------|
| Grove - Lector RFID de 125KHz V1.0 | Inicial | Oct 2015      |

## Especificaciones

|Parámetro| Valor/Rango|
|:------|:------------------|
|Voltaje| 4.75-5.25V|
|Frecuencia de Trabajo| 125 KHz|
|Distancia de Detección (Máx)|70mm|
|Salida TTL| 9600 baudios, 8 bits de datos, 1 bit de parada, y sin bit de verificación|
|Salida Wiegand|Formato Wiegand de 26 bits, 1 bit de verificación par, 24 bits de datos, y 1 bit de verificación impar|


:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Lector RFID 125KHz |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/gr125k_01.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html)|

- **Paso 2.** Conecta Grove - 125KHz RFID Reader al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/RFID_reader.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove_Ultrasonic_Ranger al Seeeduino como se muestra a continuación.
:::
| Seeeduino     | Grove - 125KHz RFID Reader |
|---------------|----------------------------|
| 5V            | Rojo                       |
| GND           | Negro                      |
| D3            | Blanco                     |
| D2            | Amarillo                   |


#### Software

- **Paso 1.** Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
/*
  link between the computer and the SoftSerial Shield
  at 9600 bps 8-N-1
  Computer is connected to Hardware UART
  SoftSerial Shield is connected to the Software UART:D2&D3
*/
 
#include <SoftwareSerial.h>
 
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];       // buffer array for data receive over serial port
int count = 0;                    // counter for buffer array
 
void setup()
{
    SoftSerial.begin(9600);     // the SoftSerial baud rate
    Serial.begin(9600);         // the Serial port of Arduino baud rate.
}
 
void loop()
{
    // if date is coming from software serial port ==> data is coming from SoftSerial shield
    if (SoftSerial.available())              
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++] = SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer, count);     // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();             // call clearBufferArray function to clear the stored data from the array
        count = 0;                      // set counter of while loop to zero
    }
    if (Serial.available())             // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());    // write it to the SoftSerial shield
}
void clearBufferArray()                 // function to clear buffer array
{
    // clear all index of array with command NULL
    for (int i=0; i<count; i++)
    {
        buffer[i]=NULL;
    }                  
}
```

- **Paso 2.** Abre el Monitor Serie, la información de la tarjeta se puede mostrar como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Read_Data_.jpg)

## Modo Wiegand

(Jumper Configurado en los Dos Pines de la Derecha)
Necesitarías seleccionar el jumper en "W" para entrar en este modo.
El [código de demostración Wiegand](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip) para Seeeduino está diseñado para leer datos Wiegand en modo de interrupción.

En Modo Wiegand, los datos de salida están formateados con 26 bits incluyendo 24 bits de información de tarjeta y 2 bits de paridad.

<table border={1}>
  <tbody><tr style={{fontWeight: 'bold'}}>
      <td width={20}>
        bit
      </td>
      <td width={20}>
        0
      </td>
      <td width={20}>
        1
      </td>
      <td width={20}>
        2
      </td>
      <td width={20}>
        3
      </td>
      <td width={20}>
        4
      </td>
      <td width={20}>
        5
      </td>
      <td width={20}>
        6
      </td>
      <td width={20}>
        7
      </td>
      <td width={20}>
        8
      </td>
      <td width={20}>
        9
      </td>
      <td width={20}>
        10
      </td>
      <td width={20}>
        11
      </td>
      <td width={20}>
        12
      </td>
      <td width={20}>
        13
      </td>
      <td width={20}>
        14
      </td>
      <td width={20}>
        15
      </td>
      <td width={20}>
        16
      </td>
      <td width={20}>
        17
      </td>
      <td width={20}>
        18
      </td>
      <td width={20}>
        19
      </td>
      <td width={20}>
        20
      </td>
      <td width={20}>
        21
      </td>
      <td width={20}>
        22
      </td>
      <td width={20}>
        23
      </td>
      <td width={20}>
        24
      </td>
      <td width={20}>
        25
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        PE
      </td>
      <td colSpan={24} rowSpan={1}>
        D
      </td>
      <td>
        P0
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td colSpan={12} rowSpan={1}>
        E
      </td>
      <td colSpan={12} rowSpan={1}>
        0
      </td>
      <td>
        -
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td colSpan={8} rowSpan={1}>
        D2[7..0]
      </td>
      <td colSpan={8} rowSpan={1}>
        D1[7..0]
      </td>
      <td colSpan={8} rowSpan={1}>
        D0[7..0]
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody></table>

- PE es bit par, PO es bit impar;
- E es el bit de datos que estuvo involucrado en par, O es el bit de datos que estuvo involucrado en impar;
- DX\[7..0\] es el bit de datos que corresponde a la ID de solo lectura de tarjetas Mifare@ Standard & Light;

## Preguntas Frecuentes

**P1: ¿Cómo convertir la salida a Número de Tarjeta?**

R1: Por favor sigue los siguientes pasos.

- Toma ID: 0009776930 como ejemplo:
- ID de Número de Tarjeta: 0009776930 ------- Decimal [Bit de Inicio(00) + Número de Tarjeta(8 números)]
- Salida: 0700952F229F ------------- Hex [[Bit de Inicio(07h) + Número de Tarjeta(8 números) + Suma de Verificación]
- La calculadora para números decimales y hexadecimales está disponible en línea.

**P2: ¿Cómo leer etiquetas continuamente?**

R2: El lector RFID puede leer etiquetas continuamente sin ninguna configuración. Mantén la etiqueta a 2.5-4 cm de la antena, y el lector puede leer datos continuamente. Y si la distancia está por debajo de 2.5cm, el lector lee datos una vez si no se alejan las etiquetas.

## Recursos

- **[Demo]** [Grove - Demo del Lector RFID de 125KHz](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip)
- **[PDF]** [Declaración de conformidad](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_Declaration%20of%20conformity.pdf)
- **[PDF]** [Reporte de Prueba](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_test%20report.pdf)

## Proyectos

**Proyecto de Seguridad Basado en Arduino Usando Cayenne**: Proyecto de Seguridad Doméstica basado en Arduino. Alertas SMS/email cuando se detecta intruso. Mensajes personalizados para personal autorizado.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
