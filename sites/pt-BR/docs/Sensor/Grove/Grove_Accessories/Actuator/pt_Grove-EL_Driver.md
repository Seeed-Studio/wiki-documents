---
title: Grove - EL Driver
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-EL_Driver/
slug: /Grove-EL_Driver
sku: 105020005
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-EL_Driver/
---
![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver.jpg)

Grove - EL Driver é projetado para controlar EL Wires. Ele integra um inversor muito pequeno para acionar o EL Wire, então você pode facilmente acender o EL Wire com apenas um único cabo Grove.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html)

Rastreador de Versão
---------------

| Revisão | Descrições              | Lançamento   |
|----------|------------------------|--------------|
| v1.0     | Lançamento público inicial | 11 Dez, 2014 |

#### **EL Wires Suportados:**

- [EL Wire-Green 3m](https://www.seeedstudio.com/depot/EL-WireGreen-3m-p-1102.html)
- [EL Wire-Red 3m](https://www.seeedstudio.com/depot/EL-WireRed-3m-p-1129.html)
- [EL Wire-Blue 3m](https://www.seeedstudio.com/depot/EL-WireBlue-3m-p-1128.html)
- [EL Wire-Yellow 3m](https://www.seeedstudio.com/depot/EL-WireYellow-3m-p-1127.html)
- [EL Wire-White 3m](https://www.seeedstudio.com/depot/EL-WireWhite-3m-p-1130.html)

Características
--------

- Interface compatível com Grove
- Compatível com 3,3V/5V
- Transformador inversor integrado
- Corrente de entrada: 300mA máx (de acordo com a carga)
- Capacitância máxima de EL suportada: 15nF

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Uso
-----

### Brincar com Arduino

Aqui mostramos como usar o Arduino para controlar o estado do LED.

1. Conecte o Grove - EL Driver à **porta digital 2** do Base Shield com o cabo Grove de 4 pinos. Claro que você pode mudar para outras portas digitais válidas, se necessário, e as definições da porta também devem ser alteradas. Conecte um EL Wire à porta **J1** do EL Driver com o cabo fornecido no pacote do produto.

2. Conecte-o ao Arduino/Seeeduino. Conecte a placa ao PC usando um cabo USB.

3. Copie o código de demonstração para o seu sketch e então faça o upload para a placa Arduino ou Seeeduino. Você verá o EL Wire piscar a cada segundo.

```
/*************************   2014 Seeedstudio   **************************
* File Name          : GroveELDriverDemoCode.ino
* Author             : Seeedteam
* Version            : V1.0
* Date               : 11/12/2014
* Description        : Demo code for Grove - EL Driver
*************************************************************************/

#define ELPin 2 //connect EL Driver to digital pin2
void setup() {                
  // initialize the digital pin2 as an output.
  pinMode(ELPin, OUTPUT);     
}

void loop() {
  digitalWrite(ELPin, HIGH);   // set the EL Wire on
  delay(500);               // for 500ms
  digitalWrite(ELPin, LOW);   // set the EL Wire off
  delay(500);
}
```

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver_usage.jpg)

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte o Grove - EL Driver à porta D2 em um Base Shield

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guia para usar o Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/EL_Driver.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
    Quando o código terminar de ser enviado, você verá o EL piscando.
:::

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [sch_pcb_eagle](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip)
- [sch_pdf](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.pdf)
- [Biblioteca CodeCraft](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/EL%20Driver.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EL_Driver -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
