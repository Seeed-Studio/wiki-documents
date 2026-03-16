---
title: Kit de Link RF Simples de 315MHz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/315MHz_Simple_RF_Link_Kit/
slug: /315MHz_Simple_RF_Link_Kit
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/315MHz_Simple_RF_Link_Kit/
---
![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/315M_433M.jpg)

Este kit é usado para comunicação sem fio unidirecional em uma frequência de 315MHz e inclui um módulo transmissor e um módulo receptor. A configuração Grove deste kit permite cerca de 40 metros de distância de transmissão em ambientes internos ou cerca de 100 metros em ambientes externos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-315mhz-simple-rf-link-kit-p-1061.html?cPath=139_140)

## Recursos

---

* Interface compatível com GROVE.

* Usa modulação ASK (Amplitude Shift Keying).

* Comunicação unidirecional

## Especificação

### Módulo Transmissor

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item</th>
<th scope="col"> Mín</th>
<th scope="col"> Típico</th>
<th scope="col"> Máx</th>
<th scope="col"> Unidade</th>
</tr>
<tr>
<th scope="row"> Tensão de Trabalho</th>
<td> 3.0</td>
<td> 5.0</td>
<td> 12.0</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> Corrente</th>
<td> 3</td>
<td> /</td>
<td> 10</td>
<td> mA</td>
</tr>
<tr>
<th scope="row">Modo de Trabalho</th>
<td colspan="3"> ASK</td>
<td> /</td>
</tr>
<tr>
<th scope="row"> Potência de Transmissão (Máx)</th>
<td colspan="3"> 15</td>
<td> mW</td>
</tr>
<tr>
<th scope="row"> Distância de Trabalho</th>
<td> 40</td>
<td> /</td>
<td> 100</td>
<td> m</td>
</tr></table>

### Módulo Receptor

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item</th>
<th scope="col"> Típico</th>
<th scope="col"> Unidade</th>
</tr>
<tr>
<th scope="row"> Tensão de Trabalho</th>
<td> 5</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> Corrente em Repouso</th>
<td> 5</td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> Sensibilidade do Receptor</th>
<td> -103</td>
<td> dBm</td>
</tr>
<tr>
<th scope="row"> Frequência de Operação</th>
<td> 315</td>
<td> MHz</td>
</tr></table>

## Ideias de Aplicação

* Controle remoto

* Automação remota

* Alarme

## Uso

Os módulos transmissor e receptor dependem ambos de um único fio para comunicação. Embora usar a UART fornecida pela plataforma Arduino possa funcionar, é recomendável, em vez disso, usar a biblioteca VirtualWire, que utiliza modulação por Amplitude Shift Keying e fornece melhor comunicação.

Tanto o módulo transmissor quanto o receptor requerem três fios: Vcc, Terra e sinal. Ambos os pinos 2 das partes do kit não estão conectados.

* Conecte o módulo Transmissor ao I/O Digital 2 do [Grove_-_Base_Shield](/pt-br/Base_Shield_V2 "Grove - Base Shield") no Arduino usado para transmissão.
Grove-433MHz_Simple_RF_Link_Kit
* Conecte o módulo Receptor ao I/O Digital 2 do [Grove_-_Base_Shield](/pt-br/Base_Shield_V2 "Grove - Base Shield") no Arduino receptor.

**Nota:** A instalação de hardware pode se referir ao [uso do módulo Grove - 433MHz Simple RF Link Kit](/pt-br/Grove-433MHz_Simple_RF_Link_Kit "Grove-433MHz_Simple_RF_Link_Kit").

* Faça o download do [File: VirtualWire library](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip) e descompacte-o na pasta libraries da IDE do Arduino pelo caminho: ..\arduino-1.0\libraries. Por favor, consulte [aqui](http://www.pjrc.com/teensy/td_libs_VirtualWire.html).
* Faça o upload do código abaixo para o módulo transmissor:

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

* Faça o upload do código abaixo para o módulo receptor:

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

* Abra o monitor serial do módulo receptor para ver o resultado.

![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

Este é apenas um exemplo simples de transmissor e receptor como referência.

## Rastreador de Versão

<table>
<tr>
<th> Revisão</th>
<th> Descrições</th>
<th> Lançamento</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> Lançamento público inicial</td>
<td width="200px"> 03,Out,2011</td>
</tr></table>

## Recursos

* [File:VirtualWire Library.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)

* [File:315MHz_demo.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)

* [Documentação do VirtualWire](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que a sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
