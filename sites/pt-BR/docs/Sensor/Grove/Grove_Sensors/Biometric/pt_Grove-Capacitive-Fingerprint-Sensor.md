---
description: Grove - Sensor/Scanner de Impressão Digital Capacitivo
title: Grove - Sensor/Scanner de Impressão Digital Capacitivo
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Capacitive-Fingerprint-Sensor
sku: 101020713
last_update:
  date: 1/6/2023
  author: jianjing Huang
createdAt: '2023-01-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Capacitive-Fingerprint-Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-connect.jpg" /></div>

O Grove - Capacitive Fingerprint Scanner / Sensor é baseado no módulo de reconhecimento de impressão digital semicondutor KCT203, incluindo um MCU de alto desempenho, um sensor de impressão digital do tipo pressão RF vertical e um dispositivo de detecção por toque. Este módulo possui muitas vantagens, como tamanho pequeno, pequeno modelo de impressão digital, baixo consumo de energia, alta confiabilidade, rápido reconhecimento de impressão digital, etc. Além disso, vale mencionar que há uma charmosa luz RGB ao redor deste módulo para indicar se o reconhecimento da impressão digital foi bem-sucedido.

O sistema é equipado com um algoritmo de impressão digital de alto desempenho, e a função de autoaprendizado é notável. Após cada reconhecimento de impressão digital bem-sucedido, os valores de características mais recentes podem ser integrados ao banco de dados de impressões digitais para melhorar continuamente as características de impressão digital, tornando a experiência melhor.

Nós adicionamos o circuito de mudança de nível de alimentação na placa Grove Driver para que este módulo possa funcionar tanto com sistemas de 3,3V quanto de 5V. E com a ajuda do conector Grove UART e da biblioteca Arduino que oferecemos, você pode construir facilmente seu próprio sensor/scanner de impressão digital Arduino.

Já lançamos o sensor de impressão digital óptico Grove, desta vez trazemos para você o Grove - Capacitive Fingerprint Scanner / Sensor. Então, qual é a diferença? Bem, vamos mostrar os méritos e deméritos de ambos os sensores para que você possa escolher o melhor para atender às suas necessidades.

Produto|Vantagem|Desvantagem
-----|-----|----
[Grove - Capacitive Fingerprint Scanner / Sensor](https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html)|Pode identificar características biológicas, identifica apenas corpo vivo, alta segurança, tamanho pequeno, baixo consumo de energia, alta precisão|Baixa resistência ao desgaste, facilmente suscetível a suor, manchas, desgaste do dedo, etc.
[Grove - Optical Fingerprint Sensor](https://www.seeedstudio.com/Grove-Fingerprint-Sensor.html)|Forte resistência ao desgaste, boa adaptabilidade ao ambiente e boa estabilidade|Tamanho grande, alto consumo de energia e precisão relativamente baixa, não pode identificar corpo vivo, baixa segurança

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Armazenamento interno de 2KByte: suporta até 100 impressões digitais
- Poderosa função de autoaprendizado: quanto mais você usa, mais precisa fica a identificação
- Nível de segurança selecionável
- Tamanho pequeno, baixo consumo de energia, 10uA no modo de espera

Os novos sensores tiveram os algoritmos internos atualizados para melhorar a precisão do reconhecimento, mas as bibliotecas e os códigos utilizados não foram alterados.

## Aplicações

- Dispositivos de fechadura por impressão digital: fechaduras de porta, cofres, travas de volante, cadeados, travas de arma, etc.
- Registro de presença por impressão digital, sistema de controle de acesso

## Especificação

|Parâmetro|Valor|
|---|---|
|CPU|GD32|
|Armazenamento de Modelo de Impressão Digital|Máx. 100|
|Conector|Grove UART|
|Resolução do Sensor|508 DPI|
|Pixel do Sensor|160*160|
|Taxa de Rejeição Falsa|&lt;1%|
|Taxa de Aceitação Falsa|&lt;0.005%|
|Tempo de Resposta de Comparação (Modo 1:N)|&lt;350ms|
|Tempo de Resposta de Comparação (Modo 1:1)|&lt;7ms|
|Tamanho do Sensor|Φ14.9mm|
|Tamanho da Moldura|Φ19mm|
|Consumo de Energia|Velocidade máxima: ≤40 mA; Suspensão: ≤12uA|
|Tensão de Operação|3.3V/5V|
|Temperatura de Operação|-20~70℃|
|Proteção ESD|Sem contato 15KV, contato 8KV|

## Pinagem

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-pin.jpg" /></div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

| Seeeduino V4.2 | Base Shield | Grove - Capacitive Fingerprint Scanner/Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html" target="_blank">Adquira agora</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Capacitive Fingerprint Scanner/Sensor à porta **D2** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/connect.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - Capacitive Fingerprint Scanner/Sensor |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V ou 3.3V     | Vermelho           | VCC |
| D3             | Branco             | RX  |
| D2             | Amarelo            | TX  |

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed_Arduino_KCT202](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE Arduino. Abra o exemplo, você pode abri-lo das seguintes três maneiras：
    1. Abra-o diretamente na IDE Arduino pelo caminho: **File --> Examples --> Seeed_Arduino_KCT202 --> full_process**.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/path.jpg" /></div>

    2. Ou, você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE Arduino.

```cpp

/*

    Copyright (c) 2019 Seeed Technology Co., Ltd.
    Website    : www.seeed.cc
    Author     : downey
    Create Time: Jun 2019
    Change Log :

    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial
    SoftwareSerial uart(2, 3);
    FingerPrint_KCT202<SoftwareSerial, HardwareSerial> kct202;
#elif defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
    #define uart Serial
    FingerPrint_KCT202<Uart, Serial_> kct202;
#elif defined(ARDUINO_ARCH_SAMD)
    #define debug  SerialUSB
    #define uart Serial1
    FingerPrint_KCT202<Uart, Serial_> kct202;
#else
    #define debug  Serial
    SoftwareSerial uart(2, 3);
    FingerPrint_KCT202<SoftwareSerial, HardwareSerial> kct202;
#endif





Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

void setup(void) {
    debug.begin(115200);
    kct202.begin(uart, debug);
}

uint16_t finger_num;
void loop() {
    //The first param is the finger-print ID to check.
    //if set 0xffff,indicates that search for all the finger-print templates and try to match.
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                                 LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    debug.println(" ");
    debug.println("Please put your finger on the touchpad.");
    debug.println("To verify your finger print.");
    debug.println(" ");
    debug.println(" ");
    debug.println(" ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
        debug.println("Verify ok!");
        debug.print("Your finger temp id = ");
        debug.println(finger_num, HEX);
    }
    delay(2000);
}
```

:::caution
O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto, recomendamos que você use o primeiro método.
:::

- **Passo 4.** Envie o demo. Se você não souber como enviar o código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **115200**.

- **Passo 6.** Coloque o dedo no touchpad.

:::tip
Se tudo correr bem, quando você abrir o Serial Monitor, ele poderá mostrar o seguinte:
:::

```cpp
Usage:
    Please put your finger on the touchpad
    Repeat for 4 times or pressed continuously



Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.0.0.0.C. 

***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.1.0.E. 

***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.1.0.F. 

***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.2.0.F. 

***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.2.0.10. 

***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.3.0.10. 

***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.3.0.11. 

***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.4.0.11. 

***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.4.0.12.EF.1.FF.FF.FF.FF.7.0.5.0.4.F0.1.0.EF.1.FF.FF.FF.FF.7.0.5.0.5.F1.1.2.EF.1.FF.FF.FF.FF.7.0.5.0.6.F2.1.4. 

Register ok!
Uart===> : EF.1.FF.FF.FF.FF.1.0.8.32.0.FF.FF.0.7.2.40. 


Please put your finger on the touchpad.
To verify your finger print.



Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.0.0.0.0.0.0.F. 

Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.1.0.0.0.0.0.10. 

Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.5.0.1.0.64.0.79. 

Verify ok!
Your finger temp id = 1
Uart===> : EF.1.FF.FF.FF.FF.1.0.3.D.0.11. 

Uart<=== : EF.1.FF.FF.FF.FF.7.0.3.0.0.A. 

Operation succed.
Delete ok!
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/reg/Grove-Capacitive-Fingerprint-Scanner_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Capacitive Fingerprint Scanner/Sensor arquivo eagle](https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/res/Grove-Capacitive-Fingerprint-Scanner_SCH&PCB.zip)

- **[Zip]** [Grove - Capacitive Fingerprint Scanner/Sensor código](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202/archive/master.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
