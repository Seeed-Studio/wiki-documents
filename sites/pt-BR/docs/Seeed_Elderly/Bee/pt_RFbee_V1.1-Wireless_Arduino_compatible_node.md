---
description: RFbee V1.1 - Nó sem fio compatível com Arduino
title: RFbee V1.1 - Nó sem fio compatível com Arduino
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RFbee_V1.1-Wireless_Arduino_compatible_node
sku: 113050002
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node/
---

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/rfbee1.jpg)

O RFBee é um módulo RF que fornece transmissão de dados sem fio fácil e flexível entre dispositivos. Ele é baseado em um AVR ATmega168 funcionando como um **Arduino** totalmente funcional conectado via SPI a um transceptor RF TI CC1101.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/rfbee-v11-wireless-arduino-compatible-node-p-614.html)

Rastreamento de Versão
---------------

| Revisão | Descrição                | Lançamento   |
|----------|-------------------------|--------------|
| v1.0     | Lançamento inicial      | 05 Mar, 2010 |
| v1.1     | Lançamento revisado     | 27 Ago, 2010 |
| v1.2     | Troca do MCU para ATmega328 | 10 Out, 2015 |

Recursos
--------

- Alcance: Ambiente interno/urbano: até 50 m; Ambiente externo com linha de visada: até 120 m;
- Sensibilidade do receptor: -95 dBm
- Taxa de transmissão de dados RF: 4.800 bps; 76.800 bps
- Frequência de operação: 868 MHz e 915 MHz
- Tipo de comunicação: Ponto a ponto, ou ponto a multiponto.
- Interface serial fácil de usar e portas de extensão ricas
- Comando AT fácil de usar: definir modo de operação, taxa de baud serial, etc.
- Hardware e firmware de código aberto
- Soquete compatível com Xbee, para que você possa conectá-lo a qualquer soquete Xbee como um substituto rápido.

<div class="admonition note">
<p class="admonition-title">Note</p>
Somente os pinos Rx, Tx, VCC e GND são idênticos aos do Xbee. RFbee não se comunica com Xbee, portanto RFbee precisa ser usado em ambas as extremidades da conexão sem fio.
</div>

Ideias de Aplicação
-----------------

- Controle RF poderoso
- Fácil implementação de WSN (Wireless Sensor Network)

Especificações
--------------

| Especificação            | Valor                                                     |
|--------------------------|-----------------------------------------------------------|
| Microprocessador         | ATmega168(Versão &lt; V1.2), ATmega328(Versão &gt;= 1.2) |
| Tamanho da PCB           | 24.38mmx32.94mmx0.8mm                                     |
| Indicadores              | Não                                                       |
| Fonte de alimentação     | 3.3V                                                      |
| Contagem de IO           | 9                                                         |
| Entrada ADC              | 7(6 multiplexado com IO)                                  |
| Interface de programação | USB                                                       |
| Conectividade            | Soquete compatível com XBee                               |
| Protocolo de comunicação | Uart(TTL)                                                 |
| Faixa de frequência de operação | ISM 868MHz e 915MHz                                  |
| Dimensão externa         | 24.38mmx32.94mmx15mm                                      |

### Características Elétricas

| Especificação        | Min | Típ  | Máx | Unidade |
|----------------------|-----|------|-----|---------|
| Tensão de entrada    | 3.0 | 3.3  | 3.6 | VCC     |
| Corrente de transmissão |     | 34.5 |     | mA      |
| Corrente de recepção |     | 18.1 |     | mA      |
| Corrente em idle     |     | 5.2  |     | mA      |
| Corrente em power-down |     | &lt;0.3 |     | mA      |
| Temperatura de operação | -50 |      | 125 | °C      |

Visão Geral do Hardware
-----------------

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-pin.jpg)

| Pino    |  #  | Tipo de almofada | Descrição                         | Número do pino Arduino  |
|---------|-----|------------------|------------------------------------|-------------------------|
| 3V3     | 1   | Entrada de alimentação | VCC, +3.3V                    | -                       |
| TX      | 2   | Saída            | Porta Uart Tx                     | 1(DIO)                  |
| RX      | 3   | Entrada          | Porta Uart Rx                     | 0(DIO)                  |
| PD4     | 4   | Entrada/Saída    | ATmega168 PD4                     | 4(DIO)                  |
|  !RESET | 5   | Entrada          | Porta de reset do ATmega168       |                         |
| PB1     | 6   | Entrada/Saída    | ATmega168 PB1                     | 9(DIO)                  |
| PB0     | 7   | Entrada/Saída    | ATmega168 PB0                     | 8(DIO)                  |
| PD7     | 8   | Entrada/Saída    | ATmega168 PD7                     | 7(DIO)                  |
|  DTR    | 9   | Entrada          | Usado para programar o ATmega168  | -                       |
| GND     | 10  | GND              | GND                               | -                       |
| PC3     | 11  | Entrada/Saída    | ATmega168 PC3                     | 3(Entrada analógica)/17(DIO) |
| PC2     | 12  | Entrada/Saída    | ATmega168 PC2                     | 2(Entrada analógica)/16(DIO) |
| PC1     | 13  | Entrada/Saída    | ATmega168 PC1                     | 1(Entrada analógica)/15(DIO) |
| VREF    | 14  | Entrada          | Porta AREF do ATmega168           | -                       |
| PC0     | 15  | Entrada/Saída    | ATmega168 PC0                     | 0(Entrada analógica)/14(DIO) |
| ADC7    | 16  | Entrada          | ATmega168 ADC7                    | 7(Entrada analógica)    |
| PD5     | 17  | Entrada/Saída    | ATmega168 PD5                     | 5(DIO)                  |
| PD6     | 18  | Entrada/Saída    | ATmega168 PD6                     | 6(DIO)                  |
| PC5     | 19  | Entrada/Saída    | ATmega168 PC5                     | 5(Entrada analógica)/19(DIO) |
| PC4     | 20  | Entrada/Saída    | ATmega168 PC4                     | 4(Entrada analógica)/18(DIO) |

Uso
-----

### Instalação de Hardware

O RFBee pode ser conectado de várias maneiras, por exemplo:

- a um PC via USB usando um dispositivo UartSB.
- a um Seeeduino (ou Arduino) via um XbeeShield.
- a qualquer outro dispositivo que possua uma porta Uart.

<div class="admonition note">
<p class="admonition-title">Note</p>
Os dispositivos UartSBee e XbeeShield são vendidos separadamente.
</div>

#### Figura 1: USB usando UartSBee (A imagem a seguir é demonstrada com a versão mais antiga do UartSBee)

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure1.jpg)

#### Figura 2: Seeduino via XbeeShield (Versão 1)

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure2.jpg)

#### Qualquer dispositivo usando uma Uart

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure3.jpg)

### Exemplo

Aqui está um tutorial de como usar um transceptor RFBee da [SeeedStudio](https://www.seeedstudio.com) com um Analisador de Espectro RF Explorer de [rf-explorer.com](https://www.rf-explorer.com).

#### RFBee monitorado pelo RF Explorer

O RFBee é um bom dispositivo que aceita algumas strings de comandos AT ASCII simples para fazer algumas configurações básicas. Uma ferramenta ideal para experimentar com transmissão RF digital.

Este código de exemplo é de domínio público e está disponível [aqui](http://micro.arocholl.com/download/RFBeeTutorial/Test_RFBee.pde) e foi testado no Arduino IDE v0022.

|                                                                              |                                                                              |                                                                              |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam1.jpg) | ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam2.jpg) | ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam3.jpg) |

##### Requisitos

Você pode usar um Seeeduino Stalker v02b para hospedar o RFBee. Basta conectar o RFBee ao slot XBee. Você também precisa de uma maneira de conectar seu Stalker ao PC para enviar o sketch; eu, pessoalmente, usei uma ponte USB CP2102, você pode usar outras pontes USB, incluindo o UartSBee recomendado pela Seeed.

Como alternativa, você pode fazer o mesmo com uma placa compatível com Arduino, mas terá que conectar o RFBee com RX/TX da CPU usando um conector XBee de 2 mm, que pode não ser fácil de encontrar na sua loja local.

Por fim, você vai precisar de dois cabos jumper para conectar a porta 2 do Stalker ao GND e a porta 3 ao GND. Nós os usaremos como interruptores simples para configurar o RFBee de maneiras diferentes. Sinta-se à vontade para verificar o código trivial do sketch para entender melhor como ele funciona e fazer suas próprias alterações.

Alguma familiaridade com o manual do usuário do RFExplorer e do RFBee é necessária, caso contrário alguns passos podem não ser óbvios para você.

##### Colocar o RFBee para funcionar

Depois de enviar o script para o Stalker, desligue completamente a unidade para que ambos os ATMegas (do Stalker e do RFBee) sejam reiniciados ao mesmo tempo e você comece a partir de um estado limpo.

Ligue novamente a unidade, ela começará a transmitir depois que o LED do Stalker piscar 6 vezes.

O RFExplorer mostrará a potência e a frequência recebidas. Brinque com a orientação da antena até obter a melhor resposta de potência. Neste tutorial usaremos o RFBee em 915 MHz, mas resultados equivalentes serão obtidos em 868 MHz. Dê uma olhada no código do sketch e descomente as duas linhas codificadas para 868 MHz se o seu RF Explorer estiver nessa faixa.

**Para mais detalhes, visite** [micro.arocholl.com](http://micro.arocholl.com/index.php?option=com_content&view=article&id=53:tutorial-how-to-use-rf-explorer-to-monitor-a-rfbee&catid=40:article&Itemid=61).

Suporte
-------

### Como atualizar o firmware

Você pode atualizar o firmware do RFbee usando o Arduino IDE seguindo o procedimento abaixo. Este procedimento assume o uso do UartSB, pois esta é a maneira mais fácil de conectar um RFBee a um PC; veja a seção de instalação de hardware para diferentes maneiras de conectar.

1. Conecte seu RFBee ao UartSB, mova as chaves para XBee e 3.3v e, em seguida, conecte-o ao computador por meio de um cabo USB.
2. Baixe o código-fonte do firmware do RFBee para a sua pasta de sketches do Arduino
3. Abra o Arduino IDE e abra o projeto RFBee_vx_x. Em seguida, selecione Tools->Board->Arduino Pro or Pro Mini (3.3v, 8MHz) w/ATmega168 (ATmega328 quando versão >= V1.2). Escolha a porta serial correta no menu Tools. Agora você pode enviar o firmware para o seu RFBee.
4. Aplique novamente as alterações de configuração no RFBee se elas forem perdidas durante a atualização.
5. Você pode adicionar ou modificar o firmware conforme suas necessidades, já que o RFBee é capaz de funcionar de forma independente como um Arduino.

**Firmware do RFBee:** [Download from Google Code](http://code.google.com/p/rfbee/downloads/list)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Manual do Usuário do RFBee](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/rfbee-manual.pdf)
- [Firmware do RFbee para Arduino 1.0](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/RFbee_for_arduino1.0.zip)
- [Firmware RFbee 1.1 (mais recente)](https://github.com/Seeed-Studio/RFBee)
- [Esquemático e layout em arquivo EAGLE](https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip)
- [Fórum](https://forum.seeedstudio.com/viewtopic.php?f=10&t=682&sid=7a9b1bed4f9fd10a9b1003ca1e48e756)

<!-- This Markdown file was created from https://wiki.seeedstudio.com/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node/ -->

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
