---
description: Seeeduino Cortex M0
title: Seeeduino Cortex M0
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-Cortex-M0
sku: 102010248
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-Cortex-M0/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki.jpg)

O Seeeduino Cortex-M0+ apresenta um MCU Atmel SAMD21, que é baseado em um processador ARM® Cortex®-M0+ de 32 bits. Com a ajuda desse núcleo poderoso, o SAMD21 é muito mais potente do que o AVR e pode realizar muitas funções e cálculos mais complexos que não podem ser implementados em chips AVR.

O [Seeeduino M0+](https://www.seeedstudio.com/tag/Seeeduino-M0%2B.html) é uma nova linha de produtos totalmente compatível com o Arduino Zero e atualmente temos o Seeeduino Cortex-M0+ e o [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html) nessa série.

O Seeeduino Cortex-M0+ tem o mesmo pinout de header que o Seeeduino Lotus Cortex-M0+, incluindo 14 E/S digitais (10 saídas PWM) e 6 E/S analógicas. Ao mesmo tempo, ele fornece 3 conectores Grove on-board: dois I2C e 1 UART. Se você quiser usar mais portas Grove, pode usar um [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2.html) para funcionar com esta placa.

Além disso, o Seeeduino Cortex-M0+ é a primeira placa de desenvolvimento Seeeduino com interface USB tipo C. USB Type C é a tendência futura: os conectores são reversíveis, têm maior taxa de transferência de dados e funções mais escaláveis. Iremos apresentar mais placas de desenvolvimento com Type C. Você pode usar Type C para fornecer energia e transmitir dados ou usar o conector DC de 7~15V para alimentar esta placa.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

<a href="https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></a>

## Características

- CPU ARM Cortex-M0+ rodando até 48MHz
- 256KB de Flash auto-programável no sistema
- 32KB de memória SRAM
- Compatível com Arduino Zero
- Conversor Digital-para-Analógico (DAC) de 10 bits, 350ksps
- Um Conversor Analógico-para-Digital (ADC) de 12 bits, 350ksps com até 20 canais
- USB tipo C para alimentação e dados

## Especificação

|Item|Valor|
|------------|-----------|
|Microcontrolador|SAM D21|
|Entrada de alimentação|USB Type C|
|Tensão de operação|USB:5V|
|Pinos de E/S digitais|14|
|Canais PWM|10|
|Canais de entrada analógica|6|
|Corrente DC por pino de E/S|40 mA|
|Tensão de entrada IO|3.3V|
|SRAM|32 KB|
|Memória Flash|256KB|
|Frequência máxima da CPU|48 MHz|

## Visão Geral do Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/hardware.png)

### UART

Para a [placa serial Seeed M0](https://www.seeedstudio.com/tag/SEEEDUINO-M0%2B.html), há 3 portas UART como mostrado na figura a seguir. Quando você programar com a IDE Arduino, deverá usar o nome de porta correspondente, que é:

```
SerialUSB or Serial
```

para a porta tipo C;

```
Serial1
```

para a porta Grove UART;

e

```
Serial2
```

para os pinos UART no header

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/UART(1).jpg)

### Pinout

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-pinout.jpg)

## Primeiros Passos

### Hardware

**Materiais necessários**

- Seeeduino Cortex-M0+ x1
- Computador x1
- Cabo USB type C x1

:::tip
    Alguns cabos USB só podem fornecer energia e não conseguem transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecte o Seeeduino Cortex-M0+ ao seu computador usando o cabo USB. O LED azul de alimentação (rotulado **PWR**) deve acender.

### Software

- **Passo 1. Você precisa instalar o software Arduino.**

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Clique duas vezes no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
    Se o software Arduino carregar em um idioma diferente, você pode alterá-lo na caixa de diálogo de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::

- **Passo 2. Abra o exemplo Blink**  
Abra o sketch de exemplo de piscar LED: **File > Examples >01.Basics > Blink**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><i>Caminho do Blink</i></figcaption>
  </figure>
</div>

- **Passo 3. Adicione a placa Seeed**  
Siga o [Guia de Instalação das Placas Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) e pesquise a palavra-chave **Seeeduino samd** para adicionar o **Seeeduino Zero** à sua IDE Arduino.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png" />
    <figcaption><i>A palavra-chave é <b>samd_zero</b> </i></figcaption>
  </figure>
</div>

- **Passo 4. Selecione sua placa e porta**  
Você precisará selecionar a entrada no menu **Tools > Board** que corresponda ao seu Arduino.
Selecionando o **Seeeduino zero**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png" />
    <figcaption> <i>Escolha a placa correta</i></figcaption>
  </figure>
</div>

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. É provável que seja COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png" />
    <figcaption><i>Escolha a porta correta</i></figcaption>
  </figure>
</div>

- **Passo 5. Envie o programa**  
Agora, basta clicar no botão "Upload" no ambiente. Aguarde alguns segundos e, se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><i>Envie o código</i></figcaption>
  </figure>
</div>

Alguns segundos após o término do envio, você deverá ver o LED do pino 13 (L) na placa começar a piscar. Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo Eagle Seeeduino Cortex-M0+ v1.0](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip)
- **[PDF]** [SAMD21-Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/SAM-D21-Datasheet.pdf)

:::note
        Para usar o UART do Seeeduino Cortex-M0+, você precisa usar ``
:::

## Suporte Técnico e Discussão do Produto

<div>

  <br />Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
</div>
