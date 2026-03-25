---
title: Grove - Long Range 868MHz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove_LoRa_Radio/
slug: /Grove_LoRa_Radio
sku: 113060007, 113060006
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_LoRa_Radio/
---

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/cover.jpg)

Grove é uma plataforma muito poderosa desenvolvida pela Seeed Studio para simplificar seus projetos de IoT. Nós integramos o conector Grove na maioria das placas produzidas pela Seeed para que elas se tornem um sistema. Desta vez, combinamos Grove com LoRa para fornecer um módulo sem fio de alcance ultra longo para você.

O principal módulo funcional no Grove - LoRa Radio 433MHz é o RFM98, que é um transceptor que apresenta o modem LoRa de longo alcance, que fornece comunicação de espectro espalhado de alcance ultra longo e alta imunidade a interferências, ao mesmo tempo em que minimiza o consumo de corrente. O coração do Grove - LoRa Radio 433MHz é o ATmega168, um chip amplamente utilizado com desempenho muito alto e baixo consumo de energia, especialmente adequado para este módulo Grove.

Aqui já integramos uma simples antena de fio para receber sinal, se o sinal for muito fraco para receber, não se preocupe, o conector MHF ao lado da antena serve para adicionar uma segunda antena que tenha interface MHF para ganhar mais sinal.

Esta é a versão de 433MHz, que pode ser usada para comunicação em 433MHz. Você também pode encontrar a versão para 868MHz em Grove - LoRa Radio 868MHz.

|Versão|Data de Lançamento|Como Comprar|
|--------|-----------|-----------|
|Grove - LoRa Radio 433 MHz |10 Dez, 2016|[![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Grove - LoRa Radio 868 MHz |10 Dez, 2016|[![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz-p-2776.html)|

## Recursos

---

- Usando módulo RFM95 baseado em SX1276 LoRa®
- Tensão de Funcionamento:5V/3.3V
- ~28mA(Méd) @+20dBm transmissão contínua
- ~8.4mA(Méd)@modo de espera
- ~20mA(Méd) @modo de recepção, BW-500kHz
- Temperatura de Funcionamento:-20 – 70℃
- Interface:Grove - UART(RX,TX,VCC,GND)
- Antena de fio simples ou conector MHF para antena externa de alto ganho
- Frequência de Funcionamento:868MHz/433MHz
- Capacidade de Saída de Potência de +20dBm 100 mW
- Tamanho:20*40mm
- Taxa:0.3kps~50kps
- Bibliotecas Arduino prontas para uso
- Conector de antena MHF reservado

:::tip
    Para mais detalhes sobre os módulos Grove, por favor consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Visão Geral do Hardware

---

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/hardware.png)

1. ATMega168 MCU ([datasheet](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf))
2. Conector MHF
3. Antena de Fio
4. Módulo RFM95 ([datesheet](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf))
5. Interface Grove

|PIN|NOME|FUNÇÃO|
|-------|--------|--------|
|1      |TX |TX da UART|
|2      |RX |RX da UART|
|3      |VCC|Fonte de alimentação, 3.3V ou 5V|
|4      |GND|Conectar ao Terra|

## Ideias de Aplicação

---

- Internet das Coisas
- Casa Inteligente
- Hub de Sensores
- Comunicação sem fio de longa distância

## Primeiros Passos

Após esta seção, você pode fazer o **Grove - LoRa Radio** funcionar com apenas alguns passos.

### Preparações

Agora estamos fazendo uma demonstração para comunicação P2P (ponto a ponto) com o Grove - Lora Radio 433MHz, o Grove - LoRa Radio 868MHz é usado da mesma maneira.

:::tip
    Grove - LoRa Radio 433MHz não pode se comunicar com Grove - LoRa Radio 868MHz.
:::

|Item|Qtd|Link|
|----|---|----|
|Seeeduino Lotus|2|[Adquira agora!](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
|Grove - LoRa Radio 433MHz|2|[Adquira agora!](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Cabo Micro USB|2|[Adquira agora!](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

Se esta é a sua primeira vez usando o [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html), por favor consulte o [wiki do Seeeduino Lotus](https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus/).

Seeeduino Lotus é totalmente compatível com Arduino, que funciona de forma tão simples quanto o Arduino.

Se esta é a sua primeira vez usando Arduino, por favor coloque a mão [aqui](https://arduino.cc) para iniciar sua jornada com Arduino.

### Conectando o hardware

O [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) é uma combinação de Seeeduino e Base Shield. Podemos conectar o módulo LoRa Radio diretamente ao soquete D5 como mostra a figura abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/demo.jpg)

### Baixar Biblioteca

Clique para baixar a biblioteca e instalá-la ([How to install an Arduino Library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/))

[![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library.png)](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/archive/master.zip)

:::tip
    A biblioteca suporta dispositivos AVR/SAMD/STM32F4, tanto serial por hardware quanto por software.
:::
Existem 2 tipos de portas seriais. Uma é COMSerial, que representa a porta de comunicação (conectando com Grove-LoRa Radio). A outra é ShowSerial, que representa a porta de exibição de informações seriais (conectando com o PC).

A maioria das placas Arduino tem pelo menos uma Serial, algumas têm múltiplas Serials (Arduino Mega tem 4 Serials). Ela se comunica nos pinos digitais 0 (RX) e 1 (TX) bem como com o computador via USB. Portanto, se você conectar um dispositivo UART no pino D0 e no pino D1, você tem que removê-los antes de fazer o download do programa via USB. Caso contrário, isso causará falhas no upload. Às vezes você precisa de mais portas seriais do que o número de portas seriais de hardware disponíveis. Se este for o caso, você pode usar uma Software Serial que usa software para emular o hardware serial. Software serial requer muita ajuda do controlador Arduino para enviar e receber dados, então não é tão rápida ou eficiente quanto hardware serial. Para mais informações sobre a Serial, por favor consulte [Seeed Arduino Serial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Serial/).

- **AVR:** No exemplo abaixo, nós definimos a Software Serial como SSCOM (conectando com o PC), você precisa de um adaptador USB para TTL para conectar ao PC. Nem todos os pinos digitais podem ser usados para software serial. Você pode consultar [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) para detalhes dos pinos. Definimos a Serial de hardware como COMSerial (conectando com Grove-LoRa Radio). Se você quiser usar a serial de hardware como COMSerial e a software serial como ShowSerial, você pode definir como **#define ShowSerial Serial** e **#define COMSerial SSerial**. Se você usar Arduino Mega, pode conectar a Serial de hardware a ShowSerial e a outra Serial1/Serial2/Serial3 a COMSerial. Então você pode consultar a configuração de AVR Mega.

- **SAMD:** No exemplo abaixo, o SAMD não suporta software serial. Usamos a serial de hardware **Serial1** para se comunicar com Grove-LoRa Radio e **SerialUSB** para imprimir mensagens no PC.

- **STM32F4:** No exemplo abaixo, usamos a serial de hardware **Serial** para se comunicar com Grove-LoRa Radio e **SerialUSB** para imprimir mensagens no PC.

:::note
    Para mais informações sobre a Serial, por favor consulte [Seeed Arduino Serial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Serial/).
:::

```
#include <RH_RF95.h>

#################### AVR #######################

#ifdef __AVR__

#include <SoftwareSerial.h>
SoftwareSerial  SSerial(10, 11); // RX, TX

#define COMSerial Serial
#define ShowSerial SSerial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### AVR Mega ###################

#ifdef __AVR__

#define COMSerial Serial1
#define ShowSerial Serial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### SAMD ######################

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE

#define COMSerial Serial1
#define ShowSerial SerialUSB 

RH_RF95<Uart> rf95(COMSerial);

#endif

#################### STM32F4 ###################

#ifdef ARDUINO_ARCH_STM32F4

#define COMSerial Serial
#define ShowSerial SerialUSB 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif
```

### Abrir o exemplo

Abra sua IDE Arduino, clique em **File > Examples>Grove_LoRa_433MHz_and_915MHz_RF-master** e você obterá muitos exemplos para o módulo.

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library_2.png)

|Node|Nome do Exemplo|Função|
|----|------------|--------|
|Remetente|rf95_client|Envia "Hello World" a cada 1s|
|Receptor|rf95_server|Recebe dados e os imprime|

Clique em **Tools>Board** para escolher "Seeeduino Lotus" e selecione a respectiva porta serial, depois clique no botão Upload para finalizar as etapas.

:::tip
    Se você estiver usando o módulo Grove - LoRa Radio 868MHz, altere o seguinte código.
:::

```c
//rf95.setFrequency(434.0);
rf95.setFrequency(868.0);
```

### Revisar Resultados

Após a conclusão do upload, você pode abrir o monitor serial para ver o resultado.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/result.jpg)

### Taxa de Dados

O gráfico abaixo mostra as relações entre a taxa de transmissão, a largura de banda do sinal, o fator de espalhamento e a sensibilidade.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/DateRate.png)

# 433MHz

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 868MHz

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- ***Esquemáticos***
  - [Grove - LoRa Radio 433MHz v1.0 Esquemáticos (arquivos Eagle)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip)
  - [Grove - LoRa Radio 433MHz v1.0 Esquemáticos (arquivos PDF)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_sch.pdf)
  - [Grove - LoRa Radio 868MHz v1.0 Esquemáticos (arquivos Eagle)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip)
  - [Grove - LoRa Radio 868MHz v1.0 Esquemáticos (arquivos PDF)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_sch.pdf)

- ***Folha de dados***
  - [RFM95/96/97 Datasheet](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf)
  - [Atmega168 Datasheet](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf)

- ***Referências***
  - [LoRa Alliance](https://www.lora-alliance.org/)

- ***Biblioteca***
  - [Grove - LoRa Radio Biblioteca e Exemplos](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/)
  - [LMIC Biblioteca](https://github.com/matthijskooijman/arduino-lmic)

- [***Baixar Tudo Acima***](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/res.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
