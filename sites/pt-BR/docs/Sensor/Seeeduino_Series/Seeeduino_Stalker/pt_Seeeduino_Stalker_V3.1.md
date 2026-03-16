---
description: Seeeduino Stalker V3.1
title: Seeeduino Stalker V3.1
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Stalker_V3.1
sku: 102010070
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_V3.1/
---

Talvez você já esteja muito familiarizado com a série Seeeduino Stalker, ou talvez seja totalmente novo nesse nó de Rede de Sensores Sem Fio rico em recursos. Independentemente da situação em que você se encontra, se você for fazer uma aplicação de registro de dados em ambiente externo, verá que o Seeeduino Stalker é a melhor placa.

O principal objetivo de criar esta série é criar uma placa carrier para X-bee para que os usuários possam fazer aplicações externas com mais conveniência. Desde que a primeira versão foi lançada em 2009, os Seeeders vêm coletando continuamente feedback dos usuários e atualizando a placa. Houve 6 versões ao longo dos últimos 7 anos; neste verão estamos empolgados em lançar o membro mais atualizado da família Seeeduino Stalker — Seeeduino Stalker V3.1.

Seeeduino Stalker V3.1 não é apenas uma atualização simples da V3.0. A principal surpresa que você encontrará na placa é o consumo de energia impressionantemente baixo; no modo de suspensão, a corrente de saída de toda a placa será tão baixa quanto 100uA. Esta é uma atualização verdadeiramente derivada do feedback dos usuários (nós realmente nos importamos com a sua opinião). Vamos ver como conseguimos isso.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/cover.JPG)

### Rastreamento de Versões

|Versão|Data de Lançamento|Como Comprar|
|--------|-----------|-----------|
|Seeeduino Stalker V1.0|23 Dez, 2009|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.0|10 Dez, 2010|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.1|3 Out, 2011|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.2|27 Dez, 2011|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.3|10 Jan, 2013|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V3.0|6 Jun, 2014|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V3.1|10 Jul, 2016|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Stalker-V3.1-p-2686.html)|

### O que há de novo no Seeeduino Stalker V3.1

**Melhoria no Gerenciamento de Energia**

Na V3.1, quando o MCU está em modo de suspensão, todos os outros fornecimentos de energia, incluindo a porta da área Bee, porta de 3,3V e VCC, podem ser cortados manualmente, de modo que a energia possa realmente ser economizada.

**Outras Alterações**

Foi adicionada uma chave de alavanca à área X-bee, que permite selecionar a porta serial de hardware ou a porta serial de software com base no que você deseja conectar.

Também adicionamos 2 chaves de alavanca no circuito do RTC correspondentes a 2 pinos INT do MCU, para que os usuários possam facilmente escolher qual pino INT será conectado à porta INT do RTC e então ativar o MCU.

## Recursos

----

- Pinagem compatível com Arduino UNO com bootloader do Arduino Fio
- CI gerenciador de bateria Lipo e entrada de carregamento solar (conector jst2.0)
- Chip de Relógio de Tempo Real onboard **DS1337S** (soquete para uma moeda CR1220, que atua como fonte de alimentação de backup para o RTC)
- Interface serial com DTR para auto-reset durante a programação quando operando em modo autônomo.
- Soquete para cartão microSD
- Conector Grove (tensão de operação selecionável: 5,0V ou 3,3V)
- Botões de reset para os módulos XBee e para o ATMega328P
- Soquete da série Bee 2*10 pinos passo 2,0mm

## Especificação

----

|Parâmetro              |Valor          |
|-------------------    ----|---------------|
|Microcontrolador         |Atmega328P        |
|Frequência de Clock              |8 MHz             |
|Tensão de E/S              |3,3V              |
|RTC                      |DS1337S        |
|Placa para Arduino IDE    |Arduino Pro ou Pro Mini (3,3V , 8 MHz) c/ ATmega328    |
|Fonte de Alimentação            |Bateria LiPo de 3,7V, use painel solar de 5VDC para carregar a bateria|
|Conector de Alimentação        |JST de 2 pinos/ USB|
|Conectividade            |I2C, UART, SPI|
|Cartão SD                   |cartão micro SD |
|Corrente de Circuito Aberto    |6 mA máx.|
|Corrente de Carga        |300mA|
|Corrente Máxima na porta de 3,3V |    800mA|
|Tamanho da PCB             |86,74mm x 60,96mm|

## Ideias de Aplicação

----

- Rede de Sensores Sem Fio (usando **XBee** comprado separadamente)
- Registro de GPS (usando [GPSBee](https://www.seeedstudio.com/wiki/GPS_Bee_kit) comprado separadamente)
- Sistema de Aquisição de Dados capaz de se comunicar com um App em execução em iPhone/Android (usando [BluetoothBee](https://www.seeedstudio.com/wiki/Bluetooth_Bee) comprado separadamente).
- Controle Remoto por RF (usando [RFBee](https://wiki.seeedstudio.com/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node/) comprado separadamente).
- Como uma simples plataforma autônoma de computação física compatível com Arduino.

## Visão Geral de Hardware

----

### Visão Geral

Seeeduino Stalker V3.1 é uma placa de aplicação com funções ricas: RTC, conector para bateria Lipo, soquete Bee e soquete para cartão SD etc. A imagem de visão geral abaixo apresentará cada parte da placa para ajudá-lo a conhecê-la melhor.

[![click to view larger image](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/overview.png)](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/overview.png)

| NOME | FUNÇÃO|
|-------|-------------------------------------|
|RTC BATTERY | Bateria tipo moeda para alimentar o DS1337S  |
|RTC_INT | Interruptor de interrupção do RTC|
|Bee Serial Select|Seleção dos pinos RX/TX do Bee; você pode selecionar D0/D1 ou D6/D7|
|Bee Socket|Inserir um Bee|
|CHARGE STATUS LED|**OK**: um LED verde, aceso quando o carregamento termina. **CH**: um LED vermelho, aceso durante o carregamento|
|BEE RST|Resetar o Bee|
|SOLAR|Entrada solar para carregar a bateria, entrada 4,5~6V|
|LIPO |entrada de bateria lipo, 3,7V|
|L|Um LED conectado ao D13, pode atuar como monitor|
|GROVE2|Porta Grove, conectada ao I2C|
|GROVE1|Porta Grove, conectada ao D7/8|
|PROGRAM|Porta de programação, conecte aqui um UartSBee|
|RST|Resetar o Atmega328P|
|SD CARD|Um soquete para cartão micro SD|

### Mapa de Pinos

Seeeduino Stalker V3.1 é compatível com Arduino; há muitos pinos Analógicos, pinos Digitais, bem como pinos Seriais disponíveis para você fazer sua própria aplicação. A imagem do mapa de pinos abaixo ajudará você a decidir quais pinos estão livres ou não, bem como os pinos utilizados.

[![click to view larger image](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/pinmap1.png)](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/pinmap1.png)

## Primeiros Passos

----
Se esta é a primeira vez que você programa com um Seeeduino Stalker, você pode seguir os passos abaixo para começar. Antes de iniciarmos, certifique-se de ter os itens abaixo em mãos:

|Seeeduino Stalker V3.1|UartSBee V4|Cabo Mini USB|Cabo de 6 pinos|
|----------------------|-----------|--------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_stalker.JPG)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_uartsbee.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_miniusb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_6pincable.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Seeeduino-Stalker-V3.1-p-2686.html)|[GET ONE NOW](https://www.seeedstudio.com/UartSBee-V4-p-688.html)|[GET ONE NOW](https://www.seeedstudio.com/Mini-USB-cable-100cm-p-252.html)|[GET ONE NOW](https://www.seeedstudio.com/6-pin-dual-female-jumper-wire-300mm-(5-PCs-pack)-p-128.html)|

:::note
    UartSBee V4, Cabo Mini USB e cabo de 6 pinos não estão incluídos.
:::

### PASSO1: Conexão

Primeiro conecte o Stalker ao UartSBee através do jumper de 6 pinos e depois conecte o UartSBee a um PC através do cabo mini USB.

|Seeeduino Stalker|UartSBee V4|
|-----------------|-----------|
|    DTR              |    DTR          |
|    TXD              |    RXD          |
|    RXD              |    TXD          |
|    5V               |    VCC          |
|    GND              |    GND          |

:::note
    A chave de alimentação no UartSBee V4 deve estar ajustada para 5V
:::

### PASSO2: UartSBee e o Driver

UartSBee é uma interface USB para Serial UART baseada no FT232RL da FDTI. Clique para baixar o [driver](https://www.ftdichip.com/FTDrivers.htm) para a placa.

No nosso caso, ele desempenhará três funções:

- Programar o Seeeduino Stalker.
- Comunicar-se com o Seeeduino Stalker.
- Fornecer alimentação (a partir da energia USB do PC) ao Seeeduino Stalker (incluindo quaisquer periféricos conectados a ele).

### PASSO3: Arduino IDE

Seeeduino Stalker é uma placa compatível com Arduino, com funções ricas. Se você não tem o Arduino IDE, precisa baixar o software Arduino mais recente para programar a placa.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

### PASSO4: Adicionar Seeeduino Stalker ao seu Arduino IDE

Não há opção *Seeeduino Stalker* na lista de placas do seu Arduino IDE; clique em [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para ver as instruções.

### PASSO5: Blink

Aqui vamos carregar um código simples para o Stalker. Abra o seu Arduino IDE, abra **File > Examples > Basics > Blink**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/arduino_blink.png)

Em seguida, clique no botão Upload; segundos depois que o envio terminar, verifique o **L** na placa: ele piscará na frequência de 1s.

### Exemplos para o Stalker V3.1

Há muitos exemplos para o Seeeduino Stalker V3.1, que consistem em:

- Exemplo de leitura da tensão da bateria
- Exemplo de leitura do status de carregamento
- Exemplo de registro de dados
- Biblioteca de RTC e alguns exemplos
- Função relacionada a modo de suspensão

## RTC

Há um DS1307S onboard com uma bateria tipo moeda de 3V, que pode manter a hora por mais de 3 anos mesmo que não haja fonte de alimentação para a placa. A biblioteca do DS1307S está incluída no sketch do Stalker.

### Ajustar Data/Hora

Abra o Arduino IDE, depois **File > Sketchbook > RTC > Adjust**, depois defina a data/hora atual usando o objeto da classe DateTime **dt** no exemplo:

    DateTime dt(year, month, date, hour, min, sec, week-day(starts from 0 and goes to 6));
    Ex:- DateTime dt(2015, 10, 1, 11, 43, 0, 4);

Compile e faça o upload para o Stalker, então a hora será ajustada.

### Obter Data/Hora Atual

Abra o Arduino IDE, depois **File > Sketchbook > RTC > Now**, a data/hora atual é lida do DS1337 usando a função **RTC.now()**.

    Ex:- DateTime now = RTC.now();

Compile e faça o upload para o Stalker e abra o Monitor Serial; você verá a exibição de data e hora:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/rtc_now.png)

### Exemplo de Interrupções do DS1337

Este exemplo é uma demonstração da detecção de interrupção a partir da saída INT do DS1337. Este recurso é útil para a funcionalidade de data logger, em que o MCU é colocado em modo de suspensão quando não está em uso e o INT do DS1337 acorda a CPU periodicamente. Isso prolonga a energia da bateria. A operação completa está documentada no código.

Existem 2 saídas INT do DS1337, INTA (conectado ao **D2**) e INTB (conectado ao **D3**). Há uma chave para conectar INTA/INTB e D2/D3; se você não precisar da interrupção, pode simplesmente desligar a chave e economizar 1 ou 2 E/S. Chave como abaixo:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/RTC_INT_SELECT.png)

Abra o Arduino IDE, depois **File > Sketchbook > RTC > interrupts**, este exemplo gerará uma interrupção a cada minuto. Se você precisar de outro tipo de alarme, consulte o código.

## Cartão SD

Há um soquete para cartão micro SD no qual você pode inserir um cartão micro SD para armazenar alguns dados. O Stalker lê/grava o cartão SD via interface SPI. Há exemplos suficientes para operar um SD usando a biblioteca SD dentro do Arduino IDE.
Abra o Arduino IDE, **File > Examples > SD**, você encontrará muitos exemplos.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/sd_cs.png)

:::note
    O pino CS está conectado ao D10 do Stalker, portanto você precisa alterar o pino CS para D10 nos exemplos.
:::

## Gerenciador de Energia

Há um circuito de gerenciamento de bateria Lipo integrado no Stalker. Há duas funções úteis fornecidas no sketch.

### Ler a tensão da bateria Lipo

Abra o Arduino IDE, **File > Sketchbook > ReadBattery** para abrir o exemplo.

A tensão da bateria está relacionada à capacidade da bateria. Abaixo está uma referência, mas lembre-se de que não é para todas as baterias; para uma determinada bateria, os dados podem ser um pouco diferentes.

|Capacidade(%)|100%| 80% | 60% | 40% | 20% | 0% |
|-----------|----|-----|-----|-----|-----|----|
|**Tensão(V)**|4.20|4.00 |3.87 |3.79 |3.73 |3.00|

### Obter Status de Carga

Abra o Arduino IdE, **File > Sketchbook > ReadChageStatus** para abrir os exemplos. Esta função retornará 3 status:

    0: Nenhuma bateria inserida
    1: Carregando
    2: Carga concluída

## Bees

Bees são uma série de módulos que possuem funções ricas, como Wi-Fi, BLE, GPS, bem como RF etc. Com um XBee, o Stalker pode atuar como um nó com comunicação. Um Stalker falar com outro Stalker não é mais impossível. Se você precisar de mais detalhes sobre os Bees, abaixo estão algumas referências.

|Bluetooth Bee |XBee Wi-Fi PCB Antenna| RFbee V1.1|
|---|---|---|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee3.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)    |<a href="https://www.seeedstudio.com/XBee-Wi-Fi-PCB-Antenna-S6-p-1114.html">GET ONE NOW</a> |[GET ONE NOW](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|

|Bluetooth Bee - Standalone|GPS Bee kit|Mesh Bee|
|:---:|:---:|:---:|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee6.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)    |<a href="https://www.seeedstudio.com/GPS-Bee-kit-(with-Mini-Embedded-Antenna)-p-560.html">GET ONE NOW</a> |<a href="https://www.seeedstudio.com/Mesh-Bee-Open-Source-Zigbee-Pro-Module-with-MCU-(JN5168)-p-1751.html">GET ONE NOW</a>|

:::note

- Você precisa selecionar o pino Serial para um Bee, D0/D1 e D5/D6 estão disponíveis. Consulte a Visão Geral de Hardware para obter mais informações.
- D9 está controlando a alimentação de Vcc do soquete Bee; se você precisar alimentar um Bee, deve colocar D9 em HIGH: digitalWrite(9, HIGH), e não se esqueça de pinMode(9, OUTPUT) no Setup.
:::

## Exemplo de Data Logger

-----
A principal aplicação do Seeeduino Stalker v3.0 é o registro de dados do sinal do sensor, como tensão da bateria, etc., juntamente com o carimbo de data/hora. Este sketch coloca o MCU em modo de suspensão quando não está realizando operação de amostragem/registro de dados. A implementação completa está muito bem documentada no código.

Abra o Arduino IDE, **File > Sketchbook > StalkerV30_DataLogger_10Sec** para abrir o exemplo.

- Este sketch registra dados de tensão da bateria no cartão SD configurado pela função RTC.enableInterrupts(h, m, s).
- A periodicidade é fornecida usando h, m e s. Uma vez que uma interrupção é detectada, o horário da próxima interrupção é atualizado avançando os valores de h, m e s. A classe DateTime é muito útil para isso.
- ex:- interruptTime = DateTime (interruptTime.get() + interruptInterval); //decide the time for next interrupt
- Este sketch também produz saída detalhada, ou seja, os vários eventos que acontecem dentro do MCU são exibidos no terminal serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/data_log_example.png)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/202000956_Seeeduino%20Stalker%20v3.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
**Esquemático**

- [Esquemático em **Eagle**](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/202000956_Seeeduino%20Stalker%20v3.1.zip)
- [Esquemático em **PDF**](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/Seeeduino%20Stalker%20v3.1.pdf)

**Datasheet**

- [DS1307](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/ds1307.pdf)
- [CN3065](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/DSE-CN3065.pdf)
- [ETA3406](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/eta3406.pdf)
- [Sketchbook](https://github.com/Seeed-Studio/Sketch_Stalker_V3_1)

## FAQ

----

Aqui estão algumas perguntas que geralmente recebemos de novos usuários. Se você tiver quaisquer outros problemas ao usar o Seeeduino Stalker V3.1, seja bem-vindo à [Community of Arduino](https://community.seeedstudio.com/discover.html?t=Arduino), onde há muitos usuários profissionais esperando para lhe dar conselhos e também muitos usuários avançados fornecendo muitas ideias sobre como usar estes produtos!

**P1:** O RTC é redefinido para a hora original quando desligo e ligo novamente.
> Há uma bateria tipo célula para alimentar o RTC quando não há alimentação do sistema. A bateria tipo célula deve durar pelo menos 3 anos. Você pode verificar se a bateria tipo célula acabou.

**P2:** Não consigo fazer upload de sketch para o Stalker V3.1
> Primeiro, verifique se o seu USB-UART está conectado corretamente ao Stalker; depois, verifique se você selecionou o número de porta e a placa corretos (**Arduino Fio** ou **Arduino Arduino Pro or Pro Mini (3.3v , 8 MHz)w/ATmega328**). Por fim, se você inseriu um Bee no soquete e o RX/TX estiver selecionado para D0/D1, você deve remover o Bee ao fazer o upload do sketch.

**P3:** A demonstração de interrupção do RTC não funciona, não consigo obter nenhuma interrupção.
> Primeiro, verifique se você definiu corretamente o horário do alarme e não se esqueça de colocar a chave RTC_INT no lado correto.

**P4:** O painel solar não consegue carregar a bateria lipo.
> Certifique-se de que o seu painel solar é capaz de fornecer tensão de 4.5~6V.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
