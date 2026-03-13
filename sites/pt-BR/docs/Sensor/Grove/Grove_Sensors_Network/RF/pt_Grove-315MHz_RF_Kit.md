---
title: Grove - Kit RF de 315MHz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-315MHz_RF_Kit/
slug: /Grove-315MHz_RF_Kit
sku: 113020001
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-315MHz_RF_Kit/
---

![](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/img/315MHz-Simple-RF-Link-Kit.jpg)

Este kit é usado para comunicação sem fio unidirecional em uma frequência de 315MHz e inclui um módulo transmissor e um módulo receptor. A configuração twig deste kit permite cerca de 40 metros de distância de transmissão em ambientes internos ou cerca de 100 metros ao ar livre. A frequência de 315 MHz é adequada para uso sem licença nos Estados Unidos. Para uso na Europa, consulte a versão de 433 MHz deste produto.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-315MHz-Simple-RF-Link-Kit-p-1061.html)

Recursos
--------

- Interface compatível com GROVE.
- Usa modulação ASK (Amplitude Shift Keying).
- Comunicação unidirecional.

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Ideias de Aplicação
-----------------

- Controle remoto
- Automação remota
- Alarme

Dimensões Mecânicas
-------------------

- Receptor: 24mm por 42mm
- Transmissor: 20mm por 24mm

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Uso
-----

Os módulos transmissor e receptor dependem ambos de um único fio para comunicação. Embora o uso da UART fornecida pela plataforma Arduino possa funcionar, é recomendado, em vez disso, utilizar a biblioteca VirtualWire, que usa Amplitude Shift Keying para modulação e oferece melhor comunicação.

Tanto o módulo transmissor quanto o receptor requerem três fios: Vcc, terra e sinal. O pino 2 de ambas as partes do kit não está conectado.

### Instalação de Hardware

Conecte o módulo Transmissor ao I/O Digital 2 do Grove-Base Shield V2 no Arduino utilizado para transmissão.

Conecte o módulo Transmissor ao I/O Digital 2 do Grove-Base Shield V2 no Arduino receptor.

### Programação

Código de exemplo para o Transmissor:

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

Código de exemplo para o Receptor:

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
---------

- Código de demonstração: [433MHz demo.zip](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/res/433MHz_demo.zip "File:433MHz demo.zip")
- [VirtualWire 1.27](http://www.airspayce.com/mikem/arduino/VirtualWire/VirtualWire-1.27.zip)
- [Documentação do VirtualWire](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
- [TI:LM358PSR](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/res/1110010P1.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_315MHz_RF_Kit -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
