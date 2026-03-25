---
description: Relay Shield V1.0
title: Relay Shield V1.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Relay_Shield_V1
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Relay_Shield_V1/
---
<!-- ---

name:  Relay Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Relay-Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: <https://www.research.net/r/Relay-Shield_V1-0>
sku: 103030015
tags:
--- -->

O Relay Shield é um módulo inteligente compatível com Arduino com 4 relés mecânicos, oferecendo uma maneira fácil de controlar alta tensão. A potência máxima de comutação é de 35VDC 70W para cada canal. Ele pode ser controlado diretamente pelo Arduino/Seeeduino através de IOs digitais com fonte de alimentação externa de 9V DC. Com o soquete em formato XBee e a interface de módulo RF de 315/433MHz, o Relay Shield pode ser controlado remotamente, facilitando seu uso em robótica, controle industrial, casas inteligentes etc.
**Nota:** Tome cuidado para que os pinos do Shield não encostem no conector USB do Arduino UNO quando estiverem conectados.
![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

## Recursos ##

- Compatível com Arduino/Seeeduino, Arduino Mega e Seeeduino Mega

- 4 relés mecânicos com circuito fotoacoplado

- Equipado com furos para parafusos para fácil instalação

- Leve

- Pequeno fator de forma

- Compatibilidade nativa com Arduino/Seeeduino

- Extensível

## Especificação ##

|  Item|Mín|Típico|Máx|Unidade   |
|---|---|---|---|---|
|  **Tensão**|7|9|12|VDC     |
|  **Corrente**|8|/|250|mA    |
|   **Tensão de comutação**|/|/|35|VDC   |
| **Corrente de comutação**|/|/|2|A  |  
|   **Resposta de frequência**|-1|/|1|dB |  
|  **Potência de comutação**|/|/|70|W |
|  **Vida útil do relé**|100,000|/|/|Ciclos  |
| **Descarga por contato ESD**| ±4|||KV|
|**Descarga pelo ar ESD**|±8  |  ||/|
|   **Dimensão** |   80.0x58.0x21.2 |   |   | mm  |
|   **Peso líquido** |  31±2 |   |   |  g |

## Cuidados ##

**
Coloque 2 camadas de fita isolante na parte superior do conector usb do [Arduino's](/pt-br/Arduino) (title=undefined). Isso impedirá que o Relay Shield faça contato.
Não opere com tensão superior a 35V DC.
**

## Função da Interface ##

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/Relayshield_schematic.jpg)

**4 grupos de canais para conexão de alta tensão**

Terminal 1:

COM1 - Pino comum

NC1 - Normalmente fechado, caso em que NC1 é conectado com COM1 quando D0 é configurado em nível baixo e desconectado quando D0 está em nível alto;

NO1 - Normalmente aberto, caso em que NO1 é desconectado de COM1 quando D0 é configurado em nível baixo e conectado quando D0 está em nível alto.

Os terminais 2-4 são semelhantes ao terminal 1, exceto que as portas de controle são D1-D3.

**Conexão de alimentação de 9V DC**

A função do Terminal e do Jack é a mesma, pois eles são conectados internamente, e você pode escolher qualquer um deles conforme necessário.

**IO controlando 4 relés on-board**

Os 4 pinos D0-D3 podem ser conectados diretamente aos pinos 7-4 do Arduino, de modo que quatro relés possam ser facilmente controlados pelo Arduino.

**Interface de controle RF 315/433MHz**

Junto com os pinos de GND e 5V, eles formam a interface para RF de 315/433MHz com módulo codificador (pode ser comprado separadamente na Seeed Studio) para controlar remotamente os 4 relés.

**Soquete em formato XBee para controle direto pelo Seeed RFBee**

Os 4 relés podem ser controlados diretamente pelo RFBee através das 4 portas DIO do RFBee (pode ser adquirido separadamente na Seeed Studio).

**Interface de controle em cascata do RFBee**

Como o RFBee possui 12 portas DIO, mais 2 Relay Shields (mais 8 relés) podem ser controlados através de um único RFBee. HUB1 e HUB2 são as portas derivadas do RFBee (4 como um grupo), que são conectadas à interface RF de 315/433MHz do Relay Shield em cascata.

## Uso ##

### Com Arduino/Seeeduino ###

O Relay Shield pode ser diretamente controlado pelo **Arduino**

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithArduino.jpg)

Passo 1. Conecte o Relay Shield na placa **Arduino** Duemilanove (ou compatível);
Passo 2. Forneça alimentação de 9V DC ao **Arduino**;
Passo 3. Baixe o [código de exemplo](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip) e execute no [Arduino IDE](https://arduino.cc/en/Main/Software).

Se estiver usando o Arduino pela sua conexão USB para alimentação, você também deve fornecer alimentação de 9V DC ao Relay Shield ou os relés não irão comutar.

Os relés 1-4 podem ser ativados configurando as portas 4-7 do Arduino como saída e fazendo um digitalWrite(portNumber,HIGH).

Use COMx e NCx (normalmente fechado) ou NOx (normalmente aberto) para comutar a energia para o dispositivo controlado.

### Com [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) ###

#### Um RFBee controla um [Relay Shield](https://seeeddoc.github.io/Relay_Shield/) ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

Passo 1. Baixe o [código Arduino](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip) para o RFBee escravo e mestre.

Passo 2. Conecte o RFBee escravo ao Relay Shield.

Passo 3. Forneça alimentação de 9V DC ao Relay Shield.

Passo 4. Alimente o RFBee mestre com 3,3V pelo [UartSBee](https://seeeddoc.github.io/UartSBee/) ou outro adaptador.

#### Um RFBee controla 3 Relay Shields ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/MutiRelay.jpg)

Passo 1. Baixe o [código Arduino](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip) para o RFBee escravo e mestre.

Passo 2. Conecte o RFBee escravo ao Relay Shield.

Passo 3. Conecte o segundo e o terceiro Relay Shield ao shield principal conectando os pinos RF de 315/433MHz ao hub1 e hub2. (Nota: 5VDC e GND também precisam ser conectados).

Passo 4. Forneça alimentação de 9V DC ao Relay Shield. (Nota: os Relay Shields estendidos NÃO precisam de fonte de alimentação extra).

Passo 5. Alimente o RFBee mestre com 3,3V pelo [UartSBee](https://seeeddoc.github.io/UartSBee/) ou outro adaptador.

###  Com [Módulo RF de 315/433MHz](https://www.seeedstudio.com/depot/315mhz-rf-link-kits-with-encoder-and-decoder-p-151.html?cPath=139_140) ###

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithRF.jpg)

Passo 1. Conecte e solde o receptor no Relay Shield.

Passo 2: Forneça alimentação de 9V DC ao Relay Shield.

Passo 3: [Controle o transmissor](https://seeeddoc.github.io/315Mhz_RF_link_kits-with_encoder_and_decoder/#Using_with_Arduino_without_Encoding_and_Decoding).

## Rastreador de Versão ##

<table>
  <thead>
    <tr>
      <th>Revisão</th>
      <th>Descrições</th>
      <th>Data de lançamento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Relay shield V1.0</td>
      <td>Lançamento público inicial</td>
      <td>31/03/2010</td>
    </tr>
    <tr>
      <td>Relay shield V1.1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Relay shield V1.2</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Relay shield V1.3</td>
      <td>
        1. Alterar o encapsulamento do 7805<br/>
        2. Fazer com que os terminais não encostem no conector USB do Arduino<br/>
        3. Adicionar proteção para a alimentação múltipla ao usar com Arduino<br/>
        4. Aumentar a espessura dos fios conectados aos relés<br/>
        5. Mudar a serigrafia para o lado inferior da placa<br/>
        6. Adicionar o logotipo de hardware open source
      </td>
      <td>01/12/2011</td>
    </tr>
  </tbody>
</table>

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[EAGLE]**  [Arquivos Eagle do Relay Shield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip)

- **[PDF]**  [Esquemático do Relay_shield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay_shield_Schematic.pdf)

- **[PDF]**[PCB do Relay shield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay%20shield.pdf)

- **[CODE]**  [Código de demonstração do Relay Shield para Arduino](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip)

- **[CODE]**  [Código Arduino para o RFBee controlar o RelayShield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
