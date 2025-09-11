---
title: Grove - Kit de Enlace RF Simple de 433MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-433MHz_Simple_RF_Link_Kit/
slug: /es/Grove-433MHz_Simple_RF_Link_Kit
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/img/433MHz_Simple_RF.jpg)

Este kit se utiliza para comunicación inalámbrica unidireccional a una frecuencia de 433MHz e incluye un módulo transmisor y un módulo receptor. La configuración twig de este kit permite una distancia de transmisión de alrededor de 40 metros en interiores, o alrededor de 100 metros en exteriores.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-433MHz-Simple-RF-link-kit-p-1062.html)

Seguimiento de Versiones
------------------------

| Revisión | Descripción                   | Lanzamiento |
|----------|-------------------------------|-------------|
| v0.9b    | Lanzamiento público inicial   | 03,Oct,2011 |

Características
---------------

- Interfaz compatible con GROVE.
- Utiliza modulación ASK (Amplitude Shift Keying).
- Comunicación unidireccional.

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
----------------

### Módulo Transmisor

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Trabajo
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
12.0
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente
</th>
<td>
3
</td>
<td>
/
</td>
<td>
10
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Modo de Trabajo
</th>
<td colspan="3">
ASK
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Potencia de Transmisión(Máx)
</th>
<td colspan="3">
15
</td>
<td>
mW
</td>
</tr>
<tr align="center">
<th scope="row">
Distancia de Trabajo
</th>
<td>
40
</td>
<td>
/
</td>
<td>
100
</td>
<td>
m
</td>
</tr>
</table>

### Módulo Receptor

| Elemento                | Típico | Unidad |
|-------------------------|--------|--------|
| Voltaje de Trabajo      | 5      | VDC    |
| Corriente de Reposo     | 5      | mA     |
| Sensibilidad del Receptor | -105   | dBm    |
| Frecuencia de operación | 433.92 | MHz    |


Ideas de Aplicación
--------------------

- Control remoto
- Automatización remota
- Alarma

Plataformas Soportadas
----------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Primeros Pasos
--------------

Los módulos transmisor y receptor dependen de un solo cable para la comunicación. Aunque usar el UART suministrado por la plataforma Arduino puede funcionar, se recomienda, en su lugar, usar la biblioteca VirtualWire que utiliza modulación por desplazamiento de amplitud que proporciona mejor comunicación.

Tanto los módulos transmisor como receptor requieren tres cables: Vcc, Tierra y señal. El pin 2 de ambas partes del kit no están conectados.

- Conecta el módulo Transmisor al I/O Digital 2 del Grove-Base Shield V2 en el Arduino que se usa para transmisión.

Error creating thumbnail: Invalid thumbnail parameters

- Conecta el módulo Receptor al I/O Digital 2 del Grove-Base Shield V2 en el Arduino receptor.

Error creating thumbnail: Invalid thumbnail parameters

- Descarga la [biblioteca VirtualWire](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip) y descomprímela en el archivo de bibliotecas del IDE de Arduino por la ruta: ..\\arduino-1.0\\libraries. Por favor consulta [aquí](http://www.pjrc.com/teensy/td_libs_VirtualWire.html).
- Sube el código de abajo para el módulo transmisor:

```
    #include <VirtualWire.h>

    //Grove - 315(433) RF link kit Demo v1.0
    //by :https://www.seeedstudio.com/
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

- Sube el código de abajo para el módulo receptor:

```
    //Grove - 315(433) RF link kit Demo v1.0
    //by :https://www.seeedstudio.com/
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

- Abre el monitor serie del módulo receptor para ver el resultado.

![](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

Este es solo un ejemplo simple de transmisor y receptor como referencia.

Recursos
--------

- [VirtualWire Library.zip](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)
- [433MHz_demo.zip](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)
- [Documentación de VirtualWire](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
- [TI:LM358PSR](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/1110010P1.pdf)
- [Hoja de datos R433A](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/ADI;ACTR433A.pdf)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_433MHz_Simple_RF_Link_Kit -->

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
