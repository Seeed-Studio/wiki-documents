---
description: Grove - Receptor Infravermelho
title: Grove - Receptor Infravermelho
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Infrared_Receiver
sku: 101020016
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Receiver/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/Grove-Infrared_Receiver.jpg" /></div>

O Receptor Infravermelho é usado para receber sinais infravermelhos e também para detecção de controle remoto. Há um detector IR no Receptor Infravermelho que é usado para captar a luz infravermelha emitida pelo Emissor Infravermelho. O detector IR tem um demodulador interno que procura por IR modulado a 38 KHz. O Receptor Infravermelho pode receber sinais bem dentro de 10 metros. Se for mais de 10 metros, o receptor pode não receber os sinais. Nós frequentemente usamos os dois Groves — o Receptor Infravermelho e o [Grove - Infrared Emitter](https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Emitter) — para trabalharem juntos.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## Versão

Versão do Produto | Alterações | Data de Lançamento
--|--|--
Grove - Infrared Receiver v1.0 | Inicial | 01 Nov. 2015
Grove - Infrared Receiver v1.1 | Alterar a serigrafia  | 24 Jul. 2016

## 　Especificações

- Tensão: 3,3–5 V
- Distância: 10 m

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
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
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)|

- **Passo 2.** Conecte o Grove - Infrared Emitter à porta **D3** de um Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Infrared Receiver à porta **D2** do outro Grove-Base Shield.

- **Passo 4.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 5.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Infrared Emitter |
|---------------|-------------------------|
| 5V           | Vermelho                |
| GND           | Preto                   |
| Not Conencted | Branco                  |
| D3            | Amarelo                 |

| Seeeduino       | Grove - Infrared Receiver |
|---------------|-------------------------|
| 5V           | Vermelho                |
| GND           | Preto                   |
| Not Conencted | Branco                  |
| D2            | Amarelo                 |

#### Software

- **Passo 1.** Baixe o [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

Copie o seguinte **Código de Exemplo de Envio** para a IDE do Arduino:

**Código de Exemplo de Envio:**

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

Copie o seguinte **Código de Exemplo de Recepção** para a IDE do Arduino:

**Código de Exemplo de Recepção:**

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

- **Passo 7.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo.

Para o **Exemplo de Envio**, o Serial deve ser assim:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png" /></div>

Para o **Exemplo de Recepção**, o Serial Monitor deve ser assim:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png" /></div>

> Para um uso mais avançado da biblioteca, verifique [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR).

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/res/Grove-Infrared_Receiver_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]**  [Grove - Infrared Receiver eagle files](https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/res/Grove-Infrared_Receiver_eagle_files.zip)
- **[Lib]**  [Biblioteca de Envio e Recepção IR](https://github.com/Seeed-Studio/IRSendRev)
- **[Lib]**  [Biblioteca de Recepção IR para LinkIt ONE](https://github.com/Seeed-Studio/IR_Recv_LinkIt_ONE)
- **[Pdf]**  [Datasheet TSOP282](http://www.vishay.com/docs/82491/tsop382.pdf)

## Projetos

**Comunicação IR de LaunchPad para LaunchPad**: Envie texto de um LaunchPad para outro usando o emissor e o receptor IR Grove!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O gabinete IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial bem-sucedido.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
