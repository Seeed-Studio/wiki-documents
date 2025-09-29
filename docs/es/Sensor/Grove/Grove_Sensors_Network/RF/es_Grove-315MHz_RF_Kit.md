---
title: Grove - Kit RF de 315MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-315MHz_RF_Kit/
slug: /es/Grove-315MHz_RF_Kit
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/img/315MHz-Simple-RF-Link-Kit.jpg)

Este kit se utiliza para comunicación inalámbrica unidireccional a una frecuencia de 315MHz e incluye un módulo transmisor y un módulo receptor. La configuración twig de este kit permite una distancia de transmisión de alrededor de 40 metros en interiores, o alrededor de 100 metros en exteriores. La frecuencia de 315 MHz es adecuada para uso sin licencia en los Estados Unidos. Para uso en Europa, consulte la versión de 433 MHz de este producto.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-315MHz-Simple-RF-Link-Kit-p-1061.html)

Características
--------

- Interfaz compatible con GROVE.
- Utiliza modulación ASK (Amplitude Shift Keying).
- Comunicación unidireccional.

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Ideas de Aplicación
-----------------

- Control remoto
- Automatización remota
- Alarma

Dimensiones Mecánicas
-------------------

- Receptor: 24mm por 42mm
- Transmisor: 20mm por 24mm

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

Los módulos transmisor y receptor dependen ambos de un solo cable para la comunicación. Aunque usar el UART suministrado por la plataforma arduino puede funcionar, se recomienda, en su lugar, usar la biblioteca VirtualWire que utiliza Modulación por Desplazamiento de Amplitud para la modulación, lo cual proporciona mejor comunicación.

Tanto los módulos transmisor como receptor requieren tres cables: Vcc, Tierra y señal. El pin 2 de ambas partes del kit no están conectados.

### Instalación de Hardware

Conecta el módulo Transmisor al I/O Digital 2 del Grove-Base Shield V2 en el arduino que se usa para la transmisión.

Conecta el módulo Transmisor al I/O Digital 2 del Grove-Base Shield V2 en el arduino receptor.

### Programación

Código de ejemplo para Transmisor:

```
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

Código de ejemplo para el Receptor:

```
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
    }
    Serial.println("");
  }
}
```

Recursos
--------

- Código de demostración: [433MHz demo.zip](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/res/433MHz_demo.zip "File:433MHz demo.zip")
- [VirtualWire 1.27](http://www.airspayce.com/mikem/arduino/VirtualWire/VirtualWire-1.27.zip)
- [Documentación de VirtualWire](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
- [TI:LM358PSR](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/res/1110010P1.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_315MHz_RF_Kit -->

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
