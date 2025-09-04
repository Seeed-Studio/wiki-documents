---
title: Kit de Enlace RF Simple de 315MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/315MHz_Simple_RF_Link_Kit/
slug: /es/315MHz_Simple_RF_Link_Kit
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/315M_433M.jpg)

Este kit se utiliza para comunicación inalámbrica unidireccional a una frecuencia de 315MHz e incluye un módulo transmisor y un módulo receptor. La configuración Grove de este kit permite una distancia de transmisión de alrededor de 40 metros en interiores, o alrededor de 100 metros en exteriores.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-315mhz-simple-rf-link-kit-p-1061.html?cPath=139_140)

## Características

---

* Interfaz compatible con GROVE.

* Utiliza modulación ASK (Amplitude Shift Keying).

* Comunicación unidireccional

## Especificaciones

### Módulo Transmisor

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Elemento</th>
<th scope="col"> Mín</th>
<th scope="col"> Típico</th>
<th scope="col"> Máx</th>
<th scope="col"> Unidad</th>
</tr>
<tr>
<th scope="row"> Voltaje de Trabajo</th>
<td> 3.0</td>
<td> 5.0</td>
<td> 12.0</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> Corriente</th>
<td> 3</td>
<td> /</td>
<td> 10</td>
<td> mA</td>
</tr>
<tr>
<th scope="row">Modo de Trabajo</th>
<td colspan="3"> ASK</td>
<td> /</td>
</tr>
<tr>
<th scope="row"> Potencia de Transmisión(Máx)</th>
<td colspan="3"> 15</td>
<td> mW</td>
</tr>
<tr>
<th scope="row"> Distancia de Trabajo</th>
<td> 40</td>
<td> /</td>
<td> 100</td>
<td> m</td>
</tr></table>

### Módulo Receptor

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Elemento</th>
<th scope="col"> Típico</th>
<th scope="col"> Unidad</th>
</tr>
<tr>
<th scope="row"> Voltaje de Trabajo</th>
<td> 5</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> Corriente de Reposo</th>
<td> 5</td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> Sensibilidad del Receptor</th>
<td> -103</td>
<td> dBm</td>
</tr>
<tr>
<th scope="row"> Frecuencia de operación</th>
<td> 315</td>
<td> MHz</td>
</tr></table>


## Ideas de Aplicación

* Control remoto

* Automatización remota

* Alarma

## Uso

Los módulos transmisor y receptor dependen ambos de un solo cable para la comunicación. Aunque usar el UART suministrado por la plataforma Arduino puede funcionar, se recomienda, en su lugar, usar la biblioteca VirtualWire que utiliza Modulación por Desplazamiento de Amplitud para modulación, lo cual proporciona mejor comunicación.

Tanto los módulos transmisor como receptor requieren tres cables: Vcc, Tierra y señal. Ambos pines 2 de las partes del kit no están conectados.

* Conecta el módulo Transmisor al I/O Digital 2 del [Grove_-_Base_Shield](/Base_Shield_V2 "Grove - Base Shield") en el Arduino que se usa para transmisión.
Grove-433MHz_Simple_RF_Link_Kit
* Conecta el módulo Receptor al I/O Digital 2 del [Grove_-_Base_Shield](/Base_Shield_V2 "Grove - Base Shield") en el Arduino receptor.

**Nota:** La instalación del hardware puede referirse a [el uso del módulo Grove - 433MHz Simple RF Link Kit](/Grove-433MHz_Simple_RF_Link_Kit "Grove-433MHz_Simple_RF_Link_Kit").

* Descarga la [File: biblioteca VirtualWire](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip) y descomprímela en el archivo de bibliotecas del IDE de Arduino por la ruta: ..\arduino-1.0\libraries. Por favor referencia [aquí](http://www.pjrc.com/teensy/td_libs_VirtualWire.html).
* Sube el código de abajo para el módulo transmisor:

```
#include <VirtualWire.h>

//Grove - 315(433) RF link kit Demo v1.0
//by :https://www.seeedstudio.com/
//connect the sent module to D2 to use
#include <VirtualWire.h>

int RF_TX_PIN = 2;

void setup()
{
    vw_set_tx_pin(RF_TX_PIN); // Setup transmit pin
    vw_setup(2000); // Transmission speed in bits per second.
}

void loop()
{
    const char *msg = "hello";
    vw_send((uint8_t *)msg, strlen(msg));  // Send 'hello' every 400ms.
    delay(400);

}
```

* Sube el siguiente código para el módulo receptor:

```
//Grove - 315(433) RF link kit Demo v1.0
//by :https://www.seeedstudio.com/
//connect the receive module to D2 to use ..
#include <VirtualWire.h>

int RF_RX_PIN = 2;

void setup()
{
    Serial.begin(9600);
    Serial.println("setup");
    vw_set_rx_pin(RF_RX_PIN);  // Setup receive pin.
    vw_setup(2000); // Transmission speed in bits per second.
    vw_rx_start(); // Start the PLL receiver.
}

void loop()
{
    uint8_t buf[VW_MAX_MESSAGE_LEN];
    uint8_t buflen = VW_MAX_MESSAGE_LEN;
    if(vw_get_message(buf, &buflen)) // non-blocking I/O
    {
        int i;
        // Message with a good checksum received, dump HEX
        Serial.print("Got: ");
        for(i = 0; i < buflen; ++i)
        {
            Serial.print(buf[i], HEX);
            Serial.print(" ");
            //Serial.print(buf[i]);
        }
        Serial.println("");
    }
}
```

* Abre el monitor serie del módulo receptor para ver el resultado.

![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

Este es solo un ejemplo simple de transmisor y receptor como referencia.

## Seguimiento de Versiones

<table>
<tr>
<th> Revisión</th>
<th> Descripciones</th>
<th> Lanzamiento</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> Lanzamiento público inicial</td>
<td width="200px"> 03,Oct,2011</td>
</tr></table>


## Recursos

* [File:VirtualWire Library.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)

* [File:315MHz_demo.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)

* [Documentación de VirtualWire](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
