---
description: Seeeduino Lotus Cortex-M0+
title: Seeeduino Lotus Cortex-M0+
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Lotus_Cortex-M0-
sku: 102010228
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus_Cortex-M0-/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/main.jpg)

Seeeduino Lotus Cortex-M0+ é uma placa de desenvolvimento de microcontrolador ATMEGA SAM D21. O Atmel® | SMART™ SAM D21 é uma série de microcontroladores de baixo consumo que usa o processador ARM® Cortex®-M0+ de 32 bits com 256KB de Flash e 32KB de SRAM. Você pode considerar o Seeeduino Lotus Cortex-M0+ como uma combinação de Seeeduino e Base Shield.

Seeeduino Lotus Cortex-M0+ possui 14 entradas/saídas digitais (10 das quais suportam PWM) e 6 entradas/saídas analógicas, 3 Interfaces de Comunicação Serial, um conector micro USB, um conector JST2.0 Li-Po, um cabeçalho ICSP, 12 conectores Grove, um botão de reset.

Seeeduino Lotus Cortex-M0+ é uma versão atualizada do [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface-p-2917.html), ele substitui um chip mais poderoso, otimiza o layout do circuito e a fonte de alimentação é mais estável. Como esse chip suporta saída direta em nível USB, não há necessidade de usar um chip de porta serial para USB, como o CP2102N. Portanto, mais uma porta serial de hardware está disponível para o usuário.

Seeeduino Lotus possui 14 entradas/saídas digitais (6 das quais podem fornecer PWM) e 7 entradas/saídas analógicas, uma conexão micro USB, um cabeçalho ICSP, 12 conexões Grove, um botão de reset.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)

## Versão

---

| Revisão | Descrições                                              | Lançamento      |Como comprar|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1.0   | Lançamento público inicial (beta)                             | 22 de jul., 2014  |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
| v1.1   | Substitui CH340 por CP2102N para habilitar a compatibilidade com MAC |22 de dez., 2016   |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html)|
|Seeeduino Lotus Cortex-M0+| Altera o chip do microcontrolador Atmega328 para SAM D21 / Design de circuito otimizado, a fonte de alimentação é mais estável|29 de out., 2018|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|

### Instruções de Atualização

Comparado com o Seeeduino Lotus V1.1, o Seeeduino Lotus Cortex-M0+ é principalmente atualizado em hardware. Por favor, verifique a figura abaixo.

|Item|Seeeduino Lotus V1.1|Seeeduino Lotus Cortex-M0+|
|---|---|----|
|MCU|Atmega328 |SAM D21|
|UART|1|2|
|Suporte a bateria Li-po|NÃO|SIM|
|PINO PWM|6|10|

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/area_chart.jpg" />
    <figcaption><b>Figura 1</b>. <i>Gráfico de comparação</i></figcaption>
  </figure>
</div>

## Ideias de Aplicação

* DIY
* IoT e Casa Inteligente
* Robô
* Educação

## Características

* Totalmente compatível com Arduino UNO
* Microcontrolador ARM® Cortex®-M0+ 32bit 48MHz (SAMD21)
* 12 conectores Grove on-board
* 14 Pinos Digitais de E/S (10 saídas PWM)
* 6 Entradas Analógicas
* Suporta Gerenciamento de Caminho de Alimentação
* Suporta alimentação por micro-usb ou bateria Li-Po
* Corrente máxima de carga de 2A
* Adequado para projeto de baixo consumo

## Especificação

|Item|Valor|
|------------|-----------|
|Microcontrolador|SAM D21|
|Entrada de Alimentação|Micro-USB  / JST2.0|
|Tensão de Operação|USB:5V / Lipo:3.5V~4.2V|
|Pinos Digitais de E/S|14|
|Canais PWM|10|
|Canais de Entrada Analógica|6|
|Corrente DC por pino de E/S|40 mA|
|Tensão de Entrada de IO|3.3V|
|SRAM|32 KB|
|Memória Flash|256KB|
|Frequência máxima da CPU|48 MHz|

## Pinout

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/Pin_out.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/Pin_out.jpg" /></a></p>
    <figcaption><b>Figura 2</b>. <i>Pinout, você pode clicar na imagem para ver o arquivo original</i></figcaption>
  </figure>
</div>

## Visão Geral de Hardware

As imagens abaixo mostram uma visão geral dos recursos de hardware do Seeeduino Lotus. O pinout e as funções alternativas de vários pinos do Seeeduino Lotus são mostrados no diagrama de pinout. Isso pode ser usado como uma referência rápida.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/overview.jpg" />
    <figcaption><b>Figura 3</b>. <i>Visão Geral de Hardware</i></figcaption>
  </figure>
</div>

* **Grove Digital**  
Existem 6 conectores Grove digitais, vamos pegar o **D3** como exemplo:  

>GND: GND do sistema  
>VCC: Saída de VCC 3.3V  
>D3: Conecta ao pino digital 3  
>D2: Conecta ao pino digital 2  

Você pode encontrar a serigrafia na parte de trás da placa.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/4.jpg" />
    <figcaption><b>Figura 4</b>. <i>Conectores Grove Digitais</i></figcaption>
  </figure>
</div>

* **Grove Analog**  
Existem três conectores Grove analógicos, a faixa de tensão de entrada é de 0~3.3V. Se você precisar de mais de 3 entradas analógicas, pode usar o pino analógico na área do cabeçalho.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/5.jpg" />
    <figcaption><b>Figura 5</b>. <i>Conectores Grove Analógicos</i></figcaption>
  </figure>
</div>

* **Grove UART**  
Fornecemos 3 portas UART de hardware, uma Grove UART, pinos TX-RX no cabeçalho e pinos de função multiplexada **SCK** **SDO** na porta SWD. No entanto, o pino multiplexado não é suportado pelo firmware agora.
Então, na verdade, apenas duas UART de hardware estão disponíveis agora. **Serial** corresponde à Grove UART, e **Serial1** corresponde a RX-TX na área do cabeçalho.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/3.jpg" />
    <figcaption><b>Figura 6</b>. <i>Grove Hardware UART</i></figcaption>
  </figure>
</div>

* **Female Header**  
O female header do Seeeduino Lotus Cortex-M0+ é totalmente compatível com o Arduino UNO. Vale a pena mencionar que, na parte DIGITAL, todos os pinos com um **~** na frente suportam saída PWM. O que significa **D3,D4,D5,D6,D8,D9,D10,D11,D12,D13**, dez no total.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/2.jpg" />
    <figcaption><b>Figura 7</b>. <i>Female Header</i></figcaption>
  </figure>
</div>

* **Conector Li-Po**  
Você pode usar tanto alimentação por USB quanto por bateria Li-Po para o Seeeduino Lotus Cortex-M0+. Além disso, você pode usar esta placa para carregar sua bateria Li-Po. Quando você alimenta a placa com USB e conecta a bateria Li-Po ao mesmo tempo, a bateria Li-Po será carregada, e o LED **CHR** irá piscar. Depois que a bateria estiver totalmente carregada, o LED **CHR** irá parar de piscar.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/7.jpg" />
    <figcaption><b>Figura 8</b>. <i>Conector JST2.0 Li-Po</i></figcaption>
  </figure>
</div>

## Primeiros Passos

### Hardware

Antes de tudo, você precisa:

* **Obter um cabo Micro-USB**
Primeiro você precisa de um cabo Micro-USB; o cabo de dados de um celular Android serve bem.
Se você não conseguir encontrar um, pode comprar um [aqui](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar a placa**
Conecte a placa Arduino ao seu computador usando o cabo USB. O LED verde de alimentação (rotulado **PWR**) deve acender.

### Software

* **Passo 1. Você precisa instalar um software Arduino.**

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Clique duas vezes no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
    Se o software Arduino for carregado em um idioma diferente, você pode alterá-lo na caixa de diálogo de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::

* **Passo 2. Abra o exemplo Blink**  
Abra o sketch de exemplo de piscar o LED: **File > Examples >01.Basics > Blink**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><b>Figura 9</b>. <i>Caminho do Blink</i></figcaption>
  </figure>
</div>

* **Passo 3. Adicione a Placa Seeed**  
Por favor, siga o [Guia de Instalação da Placa Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para adicionar o Seeeduino samd ao seu Arduino IDE.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png" />
    <figcaption><b>Figura 10</b>. <i>A palavra-chave é Lotus M0</i></figcaption>
  </figure>
</div>

* **Passo 4. Selecione sua placa e porta**  
Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino.
Selecionando um **Seeeduino Zero**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png" />
    <figcaption><b>Figura 11</b>. <i>Escolha a placa correta</i></figcaption>
  </figure>
</div>

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para saber, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png" />
    <figcaption><b>Figura 12</b>. <i>Escolha a porta correta</i></figcaption>
  </figure>
</div>

* **Passo 5. Envie o programa**  
Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos e, se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><b>Figura 13</b>. <i>Envie o código</i></figcaption>
  </figure>
</div>

Alguns segundos após o término do upload, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

## Visualizador Online de Esquema

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/Seeeduino_Lotus_Cortex-M0%2B.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[ZIP]** [Arquivo Eagle do Seeeduino Lotus Cortex-M0+](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/Seeeduino_Lotus_Cortex-M0%2B.zip)
* **[PDF]** [SAM D21 DATASHEET](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/SAM_D21.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
