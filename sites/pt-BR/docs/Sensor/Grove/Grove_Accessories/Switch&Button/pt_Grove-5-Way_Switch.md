---
description: Grove - Interruptor de 5 Direções
title: Grove - Interruptor de 5 Direções
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-5-Way_Switch
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-5-Way_Switch/
---
<!-- ---
name: Grove - 5-Way Switch
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020048
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/main.jpg)

O Grove - Interruptor de 5 Direções pode ser usado para detectar a posição do interruptor e eventos como clique simples / clique duplo / pressão longa, etc. Ele pode detectar 5 direções: esquerda / direita / cima / baixo / centro.
O interruptor de 5 direções será uma ótima opção para controle multifuncional.

Apenas com um pequeno interruptor para atender a todas as suas necessidades de controle!

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 5-Way Switch | Inicial                                                                                               | Jun 2018      |

## Recursos

- Interruptor individual de 5 direções
- Boa resistência ao calor
- Longa vida útil de operação
- Compatível com Grove

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|3.3V / 5V|
|Interface|I^2^C|
|Endereço I^2^C padrão|0x03|
|Tamanho|C: 40mm L: 20mm A: 10mm|
|Peso|4.1g|
|Tamanho da embalagem|C: 140mm L: 90mm A: 10mm|
|Peso bruto|10g|

## Aplicações

- Controle de jogos
- Controle multifuncional

## Visão Geral de Hardware

### Mapa de Pinos

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/pin_map.jpg)
![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/pin_map_back.jpg)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - 5-Way Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html" target="_blank">Adquira agora</a>|

:::note
**1** Por favor, conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - 5-Way Switch à porta **I^2^C** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/connect.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove - 5-Way Switch           |
|---------------|-------------------------|
| 5V            | Vermelho                     |
| GND           | Preto                   |
| SDA           | Branco                   |
| SCL           | Amarelo                  |

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo pelo caminho: **File --> Examples --> Grove Multi Switch Library --> Grove_Switch_Events**.

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/path.jpg)

Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o seguinte código para um novo sketch na IDE do Arduino.

```cpp
#include "Grove_Multi_Switch.h"

GroveMultiSwitch mswitch[1];
const char* grove_5way_tactile_keys[] = {
 "KEY A",
 "KEY B",
 "KEY C",
 "KEY D",
 "KEY E",
};
const char* grove_6pos_dip_switch_keys[] = {
 "POS 1",
 "POS 2",
 "POS 3",
 "POS 4",
 "POS 5",
 "POS 6",
};

const char** key_names;

int deviceDetect(void) {
 if (!mswitch->begin()) {
  Serial.println("***** Device probe failed *****");
  return -1;
 }

 Serial.println("***** Device probe OK *****");
 if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
  Serial.println("Grove 5-Way Tactile Switch Inserted!");
  key_names = grove_5way_tactile_keys;
 } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
  Serial.println("Grove 6-Position DIP Switch Inserted!");
  key_names = grove_6pos_dip_switch_keys;
 }

 // enable event detection
 mswitch->setEventMode(true);

 // report device model
 Serial.print("A ");
 Serial.print(mswitch->getSwitchCount());
 Serial.print(" Button/Switch Device ");
 Serial.println(mswitch->getDevVer());
 return 0;
}

void setup()
{
 Serial.begin(115200);
 Serial.println("Grove Multi Switch");

 // Initial device probe
 if (deviceDetect() < 0) {
  Serial.println("Insert Grove 5-Way Tactile");
  Serial.println("or Grove 6-Position DIP Switch");
  for (;;);
 }

 return;
}

void loop()
{
 GroveMultiSwitch::ButtonEvent_t* evt;

 delay(1);

 evt = mswitch->getEvent();
 if (!evt) {
  // dynamic device probe
  deviceDetect();
  delay(1000);
  return;
 }

 if (!(evt->event & GroveMultiSwitch::BTN_EV_HAS_EVENT)) {
  #if 0
  Serial.print("No event, errno = ");
  Serial.println(mswitch->errno);
  #endif
  return;
 }

 for (int i = 0; i < mswitch->getSwitchCount(); i++) {
  Serial.print(key_names[i]);
  Serial.print(": RAW - ");
  Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
               "HIGH ": "LOW ");
  if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
                "RELEASED ": "PRESSED ");
  } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
                "OFF ": "ON ");
  }
  Serial.println("");
 }

 for (int i = 0; i < mswitch->getSwitchCount(); i++) {
  if (evt->button[i] & ~GroveMultiSwitch::BTN_EV_RAW_STATUS) {
   Serial.println("");
   Serial.print(key_names[i]);
   Serial.print(": EVENT - ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_SINGLE_CLICK) {
   Serial.print("SINGLE-CLICK ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_DOUBLE_CLICK) {
   Serial.print("DOUBLE-CLICK ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LONG_PRESS) {
   Serial.print("LONG-PRESS ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LEVEL_CHANGED) {
   Serial.print("LEVEL-CHANGED ");
  }
 }
 Serial.println("");
}

```

- **Passo 4.** Envie o demo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **115200**.

:::tip
Se tudo correr bem, você obterá o resultado. Quando você pressionar a **KEY E**, isso acionará **KEY E: RAW - LOW PRESSED**
:::

```cpp
Grove Multi Switch
***** Device probe  Device BN-5E-0.1
Grove Multi Switch
***** Device probe OK *****
Grove 5-Way Tactile Switch Inserted!
A 5 Button/Switch Device BN-5E-0.1
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - LOW PRESSED 

KEY E: EVENT - LEVEL-CHANGED 
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 

KEY E: EVENT - SINGLE-CLICK LEVEL-CHANGED 
KEY A: RAW - LOW PRESSED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 

KEY A: EVENT - LEVEL-CHANGED 
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 
```

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos eagle do Grove - 5-Way Switch](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip)
- **[Zip]** [Biblioteca Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch/archive/master.zip)

## Projeto

Este é o vídeo de introdução deste produto, com demonstrações simples; você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão sobre o Produto

<br />
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
