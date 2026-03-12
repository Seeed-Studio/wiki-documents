---
title: Grove - Kit de Link RF Simples de 433MHz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-433MHz_Simple_RF_Link_Kit/
slug: /Grove-433MHz_Simple_RF_Link_Kit
sku: 113060000
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-433MHz_Simple_RF_Link_Kit/
---

![](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/img/433MHz_Simple_RF.jpg)

Este kit é usado para comunicação sem fio unidirecional em uma frequência de 433MHz e inclui um módulo transmissor e um módulo receptor. A configuração twig deste kit permite cerca de 40 metros de distância de transmissão em ambientes internos ou cerca de 100 metros em ambientes externos.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-433MHz-Simple-RF-link-kit-p-1062.html)

Rastreador de Versão
---------------

| Revisão | Descrição              | Lançamento  |
|----------|------------------------|-------------|
| v0.9b    | Lançamento público inicial | 03,Oct,2011 |

Recursos
--------

- Interface compatível com GROVE.
- Usa modulação ASK (Amplitude Shift Keying).
- Comunicação unidirecional.

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
-------------

### Módulo Transmissor

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
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
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de Funcionamento
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
Corrente
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
Modo de Trabalho
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
Potência de Transmissão (Máx)
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
Distância de Funcionamento
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

| Item                 | Típico | Unidade |
|----------------------|---------|------|
| Tensão de Funcionamento      | 5       | VDC  |
| Corrente de Repouso    | 5       | mA   |
| Sensibilidade do Receptor | -105    | dBm  |
| Frequência de Operação  | 433.92  | MHz  |

Ideias de Aplicação
-----------------

- Controle remoto
- Automação remota
- Alarme

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Primeiros Passos
---------------

Os módulos transmissor e receptor dependem ambos de um único fio para comunicação. Embora usar a UART fornecida pela plataforma Arduino possa funcionar, é recomendável, em vez disso, usar a biblioteca VirtualWire, que utiliza Amplitude Shift Keying para modulação, proporcionando uma melhor comunicação.

Tanto o módulo transmissor quanto o receptor exigem três fios: Vcc, Terra e sinal. O pino 2 de ambas as partes do kit não está conectado.

- Conecte o módulo Transmissor ao I/O Digital 2 do Grove-Base Shield V2 no Arduino usado para transmissão.

Erro ao criar miniatura: Parâmetros de miniatura inválidos

- Conecte o módulo Receptor ao I/O Digital 2 do Grove-Base Shield V2 no Arduino receptor.

Erro ao criar miniatura: Parâmetros de miniatura inválidos

- Baixe a [biblioteca VirtualWire](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip) e descompacte-a na pasta libraries da IDE do Arduino pelo caminho: ..\\arduino-1.0\\libraries. Por favor, consulte [aqui](http://www.pjrc.com/teensy/td_libs_VirtualWire.html).
- Envie o código abaixo para o módulo transmissor:

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

- Envie o código abaixo para o módulo receptor:

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

- Abra o monitor serial do módulo receptor para ver o resultado.

![](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

Este é apenas um simples exemplo de transmissor e receptor como referência.

Recursos
---------

- [VirtualWire Library.zip](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)
- [433MHz_demo.zip](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)
- [Documentação do VirtualWire](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
- [TI:LM358PSR](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/1110010P1.pdf)
- [R433A Datasheet](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/ADI;ACTR433A.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_433MHz_Simple_RF_Link_Kit -->

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
