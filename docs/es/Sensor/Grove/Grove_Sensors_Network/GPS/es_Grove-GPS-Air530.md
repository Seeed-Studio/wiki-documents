---
title: Grove - GPS (Air530 / Air530Z)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-GPS-Air530/
slug: /es/Grove-GPS-Air530
last_update:
  date: 01/06/2022
  author: gunengyu
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/03.png" style={{width:600, height:'auto'}}/></div>


¿Confundido porque tu GPS no funciona bien en zonas urbanas o exteriores con solo uno o pocos módulos satelitales? Entonces no deberías perderte nuestro nuevo Grove-GPS (Air530 / Air530Z). Es un módulo de posicionamiento y navegación satelital multimodo de alto rendimiento y altamente integrado. Soporta GPS / Beidou / Glonass / Galileo / QZSS / SBAS, lo que lo hace adecuado para aplicaciones de posicionamiento GNSS como navegación de automóviles, dispositivos inteligentes portátiles y drones.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


:::tip
Hemos lanzado la [Guía de Selección de Módulos GPS de Seeed](https://wiki.seeedstudio.com/es/GPS-Modules-Selection-Guide/), te ayudará a elegir el Módulo GPS que mejor se adapte a tus necesidades.
:::

## Características

- Rentable
- Posicionamiento y navegación satelital multimodo altamente integrado
- Tamaño compacto para fácil implementación
- Volumen pequeño y bajo consumo de energía

:::tip
Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| **Parámetro**    | **Valor**              |
|------------------|------------------------------|
|Voltaje de alimentación|3.3V/5V|
|Corriente de trabajo|hasta 60mA|
|Tiempo de arranque en caliente| 4s|
|Tiempo de arranque en frío| 30s|

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

Esta muestra simplemente lee del GPS usando serial por software y lo envía de vuelta al puerto serie.

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - GPS (Air530 / Air530Z)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/small.png)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

- **Paso 2.** Conecta Grove - GPS al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/Hardware_conection.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - GPS al Seeeduino como se muestra a continuación.
:::
| Seeeduino     | Grove - GPS |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| D3            | Blanco                  |
| D2            | Amarillo                |


#### Software

:::note
Ten en cuenta que el software u-center es solo para Windows.
:::

- **Paso 1.** Instala el software [u-center](https://www.u-blox.com/en/product/u-center-windows).

:::note
Recomendamos usar u-center 2, el software es más versátil y menos lento.
:::

- **Paso 2.** Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, consulta [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];                   // buffer array for data receive over serial port
int count=0;                                // counter for buffer array
void setup()
{
    SoftSerial.begin(9600);                 // the SoftSerial baud rate
    Serial.begin(9600);                     // the Serial port of Arduino baud rate.
}

void loop()
{
    if (SoftSerial.available())                     // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++]=SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);                 // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();                         // call clearBufferArray function to clear the stored data from the array
        count = 0;                                  // set counter of while loop to zero 
    }
    if (Serial.available())                 // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());        // write it to the SoftSerial shield
}


void clearBufferArray()                     // function to clear buffer array
{
    for (int i=0; i<count;i++)
    {
        buffer[i]=NULL;
    }                      // clear all index of array with command NULL
}
```

- **Paso 3.** Abrir U-center.

- **Paso 4.** Hacer clic en Receiver -> Port y seleccionar el puerto COM que está usando el Arduino.

- **Paso 5.** Hacer clic en Receiver -> Baudrate y asegurarse de que esté seleccionado 9600.

- **Paso 6.** Hacer clic en View -> Text Console y debería aparecer una ventana que transmitirá datos NMEA.

- **Paso 7.** Abrir el monitor serie, puedes ver como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/GPS_result.jpg)

**También podemos ver los datos en Google Earth:**

:::tip
Si estás usando u-center 2, entonces puedes omitir los siguientes pasos, todas estas características están integradas en u-center 2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/9.png" style={{width:800, height:'auto'}}/></div>

:::

- **Paso 1.** Hacer clic en File -&gt; Database Export -&gt; Google Earth KML

- **Paso 2.** Esto debería abrir Google Earth con el historial que fue capturado por u-center.

- **Paso 3.** Alternativamente, los datos pueden ser grabados presionando el círculo rojo en la barra de herramientas que luego preguntará dónde quieres guardar la grabación.

- **Paso 4.** Cuando hayamos capturado suficientes datos, hacer clic en el cuadrado negro para detener la grabación.

- **Paso 5.** Luego podemos convertir el archivo .ubx generado a KML subiendo el archivo ubx a [GPSVisualizer](http://www.gpsvisualizer.com/), y la ubicación (punto rojo) se mostraría en el mapa como sigue:

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/outcome.png)

:::note
Las pruebas deberían realizarse preferiblemente al aire libre para evitar imprecisiones de ubicación causadas por mala transmisión de señal.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Grove-GPS_Air530_v1.0_.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Esquema GPS(PDF)](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Grove-GPS_Air530_v1.0_.zip)
- **[PDF]** [Manual del Usuario Air 530](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)
- **[PDF]** [Manual del Usuario Air 530Z (CN)](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530Z_Positioning_Module_User_Manual.pdf)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_GPS -->

## Proyectos

**Proyecto de Rastreador GPS/GPRS**: En este nuevo proyecto presentaremos nuestro Rastreador GPS conectado usando la técnica GPRS y el protocolo MQTT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

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
