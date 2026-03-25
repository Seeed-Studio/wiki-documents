---
title: Grove - Emissor Infravermelho
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Emitter/
slug: /Grove-Infrared_Emitter
sku: 101020026
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Emitter/
---

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/main.jpg)

O Emissor Infravermelho é usado para transmitir sinais infravermelhos por meio de um LED infravermelho, enquanto há um **receptor infravermelho** para receber os sinais do outro lado. Um LED infravermelho é como qualquer outro LED, com sua cor centrada em torno de 940 nm. Podemos não apenas usar o emissor para transmitir dados ou comandos, mas também para emular controles remotos e controlar seus eletrodomésticos usando um Arduino. O Emissor Infravermelho pode transmitir sinais de forma confiável até 10 metros. Além de 10 metros, o receptor pode não receber os sinais. Geralmente usamos os dois Groves - o [Infrared Receiver](https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Receiver) e o Grove - Infrared Emitter para trabalharem juntos.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Versão

Versão do Produto | Alterações | Data de Lançamento
--|--|--
Grove - Infrared Emitter v1.0 | Inicial | 01 nov. 2015
Grove - Infrared Emitter v1.1 | Alterar a localização do tubo de transmissão infravermelho  | 24 jul. 2016
Grove - Infrared Emitter v1.2 | Alterar o valor de C1 para tornar a alimentação mais estável  | 14 dez. 2016

## Aplicação

- Unidades de controle remoto infravermelho com requisitos de alta potência
- Sistemas de transmissão em espaço livre
- Fonte infravermelha para contadores ópticos e leitores de cartão

## Especificação

| Parâmetro               | Valor/Faixa   |
|-------------------------|---------------|
| Tensão de operação      | 3,3/5 V       |
| Comprimento de onda de pico | 940 nm        |
| Ângulo de meia intensidade | ϕ = ± 17°     |
| Intensidade radiante    | 72 mW/sr      |
| Distância               | 10 metros (MÁX.) |
| Temperatura de operação | -40℃ a +80℃   |
| Tamanho                 | 20mmX20mm     |

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

O Grove - Infrared Emitter pode enviar dados enquanto o Grove - Infrared Receiver irá recebê-los.

### Brincar com Arduino

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Emitter | Grove - Infrared Receiver
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)|

- **Passo 2.** Conecte o Grove - Infrared Emitter à porta **D3** de um Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Infrared Receiver à porta **D2** do outro Grove-Base Shield.

- **Passo 4.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 5.** Conecte o Seeeduino ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Infrared Emitter |
|---------------|-------------------------|
| 5V           | Vermelho                |
| GND           | Preto                   |
| Não conectado | Branco                  |
| D3            | Amarelo                 |

| Seeeduino       | Grove - Infrared Receiver |
|---------------|-------------------------|
| 5V           | Vermelho                |
| GND           | Preto                   |
| Não conectado | Branco                  |
| D2            | Amarelo                 |

#### Software

- **Passo 1.** Baixe o [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

Copie o seguinte **código de exemplo de envio** para a Arduino IDE:

**Send Example Code:**

```cpp
/* send.ino Example sketch for IRLib2
 *  Illustrates how to send a code.
 */
#include <IRLibSendBase.h>    // First include the send base
//Now include only the protocols you wish to actually use.
//The lowest numbered protocol should be first but remainder 
//can be any order.
#include <IRLib_P01_NEC.h>    
#include <IRLib_P02_Sony.h>   
#include <IRLibCombo.h>     // After all protocols, include this
// All of the above automatically creates a universal sending
// class called "IRsend" containing only the protocols you want.
// Now declare an instance of that sender.

IRsend mySender;

#define IR_SEND_PWM_PIN D3

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  Serial.println(F("Every time you press a key is a serial monitor we will send."));
}

void loop() {
  if (Serial.read() != -1) {
    //send a code every time a character is received from the 
    // serial port. You could modify this sketch to send when you
    // push a button connected to an digital input pin.
    //Substitute values and protocols in the following statement
    // for device you have available.
    mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits
    //mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f
    Serial.println(F("Sent signal."));
  }
}

```

Copie o seguinte **código de exemplo de recepção** para a Arduino IDE:

**Receive Example Code:**

```cpp
/* rawR&cv.ino Example sketch for IRLib2
 *  Illustrate how to capture raw timing values for an unknow protocol.
 *  You will capture a signal using this sketch. It will output data the 
 *  serial monitor that you can cut and paste into the "rawSend.ino"
 *  sketch.
 */
// Recommend only use IRLibRecvPCI or IRLibRecvLoop for best results
#include <IRLibRecvPCI.h> 

IRrecvPCI myReceiver(2);//pin number for the receiver

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  myReceiver.enableIRIn(); // Start the receiver
  Serial.println(F("Ready to receive IR signals"));
}

void loop() {
  //Continue looping until you get a complete signal received
  if (myReceiver.getResults()) { 
    Serial.println(F("Do a cut-and-paste of the following lines into the "));
    Serial.println(F("designated location in rawSend.ino"));
    Serial.print(F("\n#define RAW_DATA_LEN "));
    Serial.println(recvGlobal.recvLength,DEC);
    Serial.print(F("uint16_t rawData[RAW_DATA_LEN]={\n\t"));
    for(bufIndex_t i=1;i<recvGlobal.recvLength;i++) {
      Serial.print(recvGlobal.recvBuffer[i],DEC);
      Serial.print(F(", "));
      if( (i % 8)==0) Serial.print(F("\n\t"));
    }
    Serial.println(F("1000};"));//Add arbitrary trailing space
    myReceiver.enableIRIn();      //Restart receiver
  }
}
```

- **Passo 7.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo.

Para o **Send Example**, o Serial deve ser assim:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png" /></div>

Para o **Receive Example**, o Serial Monitor deve ser assim:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png" /></div>

> Para um uso mais avançado da biblioteca, consulte [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR).

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]**  [Arquivos eagle do Grove-Infrared Emitter](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip)
- **[Lib]**  [Biblioteca de Envio e Recebimento IR](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev)
- **[Pdf]**  [Datasheet do TSAL6200](http://www.vishay.com/docs/81010/tsal6200.pdf)

## Projetos

**Comunicação LaunchPad para LaunchPad via IR**: Envie texto de um LaunchPad para outro usando o emissor e o receptor IR Grove!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
