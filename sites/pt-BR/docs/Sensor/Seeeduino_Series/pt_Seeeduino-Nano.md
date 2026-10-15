---
description: Seeeduino Nano
title: Seeeduino Nano
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-Nano
sku: 102010268
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-Nano/
---
![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg)

O Seeeduino Nano é uma placa compacta semelhante ao [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)/Arduino UNO, e é totalmente compatível com o [Arduino Nano](https://store.arduino.cc/usa/arduino-nano) em pinagem e dimensões.

Assim como o Seeedunio V4.2, o Seeeduino Nano é construído em torno do Atmega328P -- microcontrolador AVR de 8 bits. Portanto, você pode usar o mesmo código de programa em ambas as placas. No entanto, as dimensões das duas são significativamente diferentes. Com menos de um quarto do tamanho, mas com quase os mesmos recursos, o Seeeduino Nano economizará mais espaço para o seu projeto, sendo mais adequado para cenários com espaço limitado.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-compare-2.jpg)

O Seeeduino Nano oferece os mesmos recursos e experiência de alta qualidade do Arduino Nano por menos da metade do preço. Por outro lado, o Seeeduino Nano também fez as seguintes melhorias em comparação com o Arduino Nano. 1-Alterar o conector Mini-USB para Type-C, que é simétrico e reversível. 2- Adicionar um conector Grove I2C, com a ajuda do sistema Grove, você pode usar centenas de sensores e atuadores simplesmente conectando-os.

Mais uma coisa: sabemos que apenas um conector Grove on-board pode não ser suficiente, então fizemos este [Grove shield for Arduino Nano](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html), que possui 3 conectores Grove digitais, 3 conectores Grove analógicos, 1 conector Grove I2C e 1 conector Grove UART.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)

## Características

- Placa minúscula de 43mm*18mm
- 16M ATmega328P
- Totalmente compatível com Arduino Nano
- USB Type C para programação e alimentação
- Conector Grove I2C on-board
- Compatível com breadboard

## Especificações

|Item|Valor|
|------------|-----------|
|Microcontrolador|ATmega328P|
|Entrada de alimentação|USB Type C|
|Tensão de operação|USB:5V|
|Pinos de E/S digitais|14|
|Canais PWM|6|
|Canais de entrada analógica|8|
|Corrente CC por pino de E/S|40 mA|
|Tensão de entrada de IO|5V|
|SRAM|2 KB|
|Memória Flash|32KB|
|Frequência máxima da CPU|16 MHz|

## Visão geral do hardware

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/pinout-1.jpg)

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/pinout-2.png)

:::note
    A interface I2C não está equipada com um resistor de pull-up. Recomenda-se usar um resistor de 4,7k para puxar para VCC ao utilizá-la.
:::

### Alimentação

Em vez de fornecer alimentação pela porta **Type C**, você também pode usar os pinos **VIN** e **GND** para alimentar o Seeeduino Nano. Então a faixa de entrada de VIN é de 7V ~ 12 V.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/Power-1.jpg)
![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/Power-1.jpg)

O parâmetro máximo de potência

|Item|Valor|
|---|---|
|A corrente máxima de entrada do USB Type C|2A|
|A corrente máxima de saída de VCC|1A|
|A corrente máxima de saída do pino 3V3|200mA|

## Primeiros passos

### Hardware

**Materiais necessários**

- Seeeduino Nano x1
- Computador x1
- Cabo USB type C x1

:::tip
    Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecte o Seeeduino Nano ao seu computador usando o cabo USB. O LED azul de alimentação (rotulado **PWR**) deve acender.

### Software

- **Passo 1. Você precisa instalar o software Arduino.**

[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Clique duas vezes no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
    Se o software Arduino for carregado em um idioma diferente, você pode alterá-lo na caixa de diálogo de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::

- **Passo 2. Abra o exemplo Blink**  
Abra o sketch de exemplo de piscar o LED: **File > Examples >01.Basics > Blink**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><b>Figura 9</b>. <i>Caminho do Blink</i></figcaption>
  </figure>
</div>

- **Passo 3. Adicione a placa Seeed**  
Siga o [Seeed Board Intallation Guide](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) e pesquise pela palavra-chave **Seeeduino AVR** para adicionar o **Seeeduino Nano** ao seu Arduino IDE.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-1.jpg" />
    <figcaption><b>Figura 10</b>. <i>A palavra-chave é **Seeeduino Nano**</i></figcaption>
  </figure>
</div>

:::tip
    Ao instalar a placa Seeeduino AVR, certifique-se de selecionar a versão 1.2.1 ou superior.
:::

- **Passo 4. Selecione sua placa e porta**  
Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino.
Selecionando um **Seeeduino Nano**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-2.jpg" />
    <figcaption><b>Figura 11</b>. <i>Escolha a placa correta</i></figcaption>
  </figure>
</div>

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-3.jpg" />
    <figcaption><b>Figura 12</b>. <i>Escolha a porta correta</i></figcaption>
  </figure>
</div>

- **Passo 5. Envie o programa**  
Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos e, se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><b>Figura 13</b>. <i>Envie o código</i></figcaption>
  </figure>
</div>

Alguns segundos após o término do envio, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/Seeeduino%20nano.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo Eagle do Seeeduino nano](https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/Seeeduino%20nano.zip)
- **[PDF]** [ATmega328-datasheet](https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/ATmega328-datasheet.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
