---
description: Bees Shield
title: Bees Shield
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bees_Shield
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Bees_Shield/
---

![enter image description here](https://files.seeedstudio.com/wiki/Bees_Shield/img/bees%20shield.jpg)

Bees_Shield tornará a interface com vários módulos estilo Bee (XBee, GPRS Bee, Bluetooth Bee etc.) mais fácil do que nunca. Além de dois soquetes estilo Bee de 20 p com passo 2,0, ele também possui uma grande área de prototipagem e uma porta serial de software personalizável para facilitar o desenvolvimento de protótipos.

[![Adquira agora](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Bees-Shield-p-672.html)

## Versões
---------------

| Revisão | Descrições  | Lançamento     |
|----------|--------------|----------------|
| v2.12| Lançamento público inicial| 8 de junho de 2010  |


## Recursos
-------------------
- Soquete duplo tipo Bee
- 3 LEDs indicadores (ON/Sleep, RSSI, ASSOC) para cada Xbee
- Tamanho completo com furos livres
- Botão de reset para cada Xbee
- Botão de reset para a placa base
- Fornece no máximo 500 mA sob 3,3 V
- Quebra completa de pinos para cada Bee
- Comunicação comutável entre FTDI-USB / placa base

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees%20Shield%20Hardware.jpg)

## Plataformas Suportadas
-------------------

## Primeiros Passos
-------------------
### Trabalhando com Bee1

#### Conexão
- Conecte o módulo Xbee ao soquete Bee 1, configurando os jumpers como abaixo. Usamos o Bee1 SoftwareSerial para comunicação.

| Pinos do Arduino | Pinos do Bee1 |
| :------------- | :-------------|
| Pino Digital 7 | Bee1_TX       |
| Pino Digital 8 | Bee1_RX       |

- Conecte o Bees Shield ao Arduino.
- Conecte o Arduino ao PC por meio de um cabo USB.

#### Software
- Copie e faça o upload do código para o Arduino.

```
#include <SoftwareSerial.h>
SoftwareSerial mySerial(7, 8);

void setup() {
  Serial.begin(9600);
  Serial.println("Goodnight moon!");

  // set the data rate for the SoftwareSerial port
  mySerial.begin(9600);
  mySerial.println("Hello, world?");
}

void loop() {
  // run over and over
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}

```
- Quando o upload terminar, abra o monitor serial.

### Trabalhando com Bee2

#### Conexão
- Conecte o módulo RFbee ao soquete Bee 2, coloque a chave na posição USB.

:::note
    Coloque a chave para o lado do Atmega se você não estiver enviando um sketch para o Bee2. Ele NÃO funciona se o Arduino estiver usando ATmega168 – precisamos de pelo menos um ATmega328 para fazer a comunicação serial passar.
:::
- Conecte o Bees Shield ao Arduino.
- Conecte o Arduino ao PC por meio de um cabo USB.

#### Software
- Por favor, copie e faça o upload do código para o Arduino para desativar primeiro a porta Uart0 do CI Atmega.

```
void setup() {
   DDRD=0x00;
}

void loop() {}

```

### Programação sem fio do Arduino com Bee2

#### Conexão
- Solde o bloco JP1 na placa para programação sem fio.
- Conecte o Bees Shield ao Arduino.

#### Software
- Baixe o [perfil de configuração do Xbee](https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip) para o Xbee transmissor usando o X-CTU.
- Vamos usar a programação sem fio.

#### Função de expansão

- Primeiro temos que soldar dois headers fêmea de 8 pinos e dois headers fêmea de 6 pinos no Bees Shield.
- Após a expansão podemos inserir um shield pequeno, como o music shield, no Bees Shield e podemos controlá-lo sem fio.

![](https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees-Shield-expan2.jpg)


## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
-------------------
- **[Eagle]** [Arquivo Eagle do Bees_Shield](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip)
- **[PDF]** [Esquemáticos do Bees_Shield](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20Sch.pdf)
- **[PDF]** [PCB do Bees_Shield](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20PCB.pdf)
- **[Tools]** [Perfis de configuração do Xbee](https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
