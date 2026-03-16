---
description: Seeeduino Lotus
title: Seeeduino Lotus
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Lotus
sku: 102010168, 102020001
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Seeeduino_Lotus_Cover.jpg)

Seeeduino Lotus é uma placa de desenvolvimento de microcontrolador ATMEGA328. É uma combinação de Seeeduino e Base Shield. Seeeduino Lotus v1.0 usa um Atmel ATMEGA328P-MU e CH340. ATMEGA328P-MU é um microcontrolador AVR de 8 bits de alto desempenho e baixo consumo. CH340 é um chip conversor de barramento USB que pode realizar uma interface USB‑para‑serial. Seeeduino Lotus v1.1 substitui o CH340 pelo CP2102N para permitir a compatibilidade com MAC; não há nenhuma outra alteração em comparação com Seeeduino Lotus v1.0. Seeeduino Lotus possui 14 entradas/saídas digitais (6 das quais podem gerar PWM) e 7 entradas/saídas analógicas, uma conexão micro USB, um cabeçalho ICSP, 12 conexões Grove, um botão de reset.

:::warning
Seeeduino Lotus 1.0 funciona SOMENTE em sistema operacional Windows. Seeeduino Lotus 1.1 funciona com Windows e Mac.
:::

## Versão

---
| Revisão | Descrições                                              | Lançamento      |Como comprar|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1.0   | Lançamento público inicial (beta)                             | Jul 22, 2014  |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
| v1.1   | Substituir CH340 por CP2102N para permitir a compatibilidade com MAC |Dec 22,2016   |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html)|

## Ideias de Aplicação

* DIY
* IoT e Casa Inteligente
* Robô
* Aprendizado
* Brinquedo

Aqui estão alguns projetos divertidos para sua referência.

|Carro Controlado por Track Ball|Receptor FM|Faça uma Pistola de Madeira|
|-------|-------|-------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/example_1.png)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Fm%20demo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)|
|[Faça Agora](https://community.seeedstudio.com/A-Car-Controlled-by-Track-Ball-p-1132.html)|<a href="/pt-br/FM_Receiver" ><span><font size={"3"}> Faça Agora </font></span></a>|[Faça Agora](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)|

## Características

* Totalmente compatível com Arduino UNO
* Microcontrolador ATmega328
* 12 conectores Grove on‑board
* 14 Pinos Digitais de E/S (6 saídas PWM)
* 6 Entradas Analógicas
* Cabeçalho ISP
* Compatível com Shield Arduino UNO-R3
* Programação e alimentação por Micro USB
* Tensão de Operação de 5V

## Especificação

|Item|Valor|
|------------|-----------|
|Microcontrolador|ATmega328P-MU|
|Tensão de Operação|5V|
|Pinos Digitais de E/S|14|
|Canais PWM|6|
|Canais de Entrada Analógica|7|
|Corrente CC por Pino de E/S|40 mA|
|Memória Flash|32 KB|
|RAM|2 KB|
|EEPROM|1 KB|
|Frequência de Clock|16 MHz|

## Visão Geral do Hardware

As imagens abaixo mostram uma visão geral dos recursos de hardware do Seeeduino Lotus. O pinout e as funções alternativas de vários pinos do Seeeduino Lotus são mostrados no diagrama de pinout. Isso pode ser usado como uma referência rápida.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/seeeduino_lotus_hardware_overview.jpg)

* **LED-D13**
Um LED está conectado ao pino D13 da placa. Ele pode ser usado como um indicador de LED on‑board para programas/sketches.
* **USB Input**
A porta USB é usada para conectar a placa ao seu PC para programação e alimentação. Micro USB é a versão onipresente do USB, encontrada na maioria dos telefones Android e outros dispositivos. Você provavelmente tem dezenas desses cabos espalhados pela sua casa.
* **Reset**
Este botão é convenientemente colocado na lateral para permitir que você reinicie a placa Seeeduino mesmo quando um shield estiver conectado em cima. Esse não é o caso em outras placas Arduino, onde o botão é colocado na parte superior, dificultando o acesso.
* **Pinos de Alimentação & Pinos Analógicos**
Assim como os pads extras do cabeçalho Digital, essas conexões extras são algo que pessoalmente percebemos que as pessoas precisam em seus projetos, especialmente as conexões de alimentação se você quiser alimentar mais de um sensor/dispositivo sem o uso de uma protoboard.
* **Conectores Grove**
A SeeedStudio possui uma variedade de sensores/dispositivos que podem utilizar essas conexões Analógicas, Digitais, I2C e UART. Além disso, vendemos conectores Grove independentes para ajudar você a fazer suas próprias conexões de sensores.
* **ICSP**
Esta é a conexão ICSP para o ATmega328P, localizada na posição padrão ICSP/SPI para hardwares compatíveis com Arduino Uno, Due, Mega e Leonardo (por exemplo, shields) que possam usar esse conector. Os pinos SPI desta porta: MISO, SCK e MOSI, também estão conectados aos pinos digitais 12, 13 e 11, respectivamente, assim como no Arduino Uno.
* **USB 2 Uart**
Pinout do USB‑2‑Uart. Esses pads podem ser usados para interagir com outros dispositivos UART colocando o ATmega328 on‑board em modo de reset. Isso faz com que o Seeeduino Lotus seja usado como uma placa utilitária USB2UART.

:::warning
Manuseie o conector micro USB com cuidado, ou você pode quebrar o soquete.
:::

## Instalar o Driver

Antes de tudo, você precisa:

* **Obter um cabo Micro-USB**
Primeiro você precisa de um cabo Micro-USB; o cabo de dados de um telefone Android serve bem.
Se você não encontrar um, pode comprar um [aqui](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar a placa**
Conecte a placa Arduino ao seu computador usando o cabo USB. O LED verde de alimentação (rotulado **PWR**) deve acender.

:::note
Este driver CH340 (Seeeduino_Lotus V1.0) está disponível para Windows XP, Windows Vista, Windows 7, Windows 8/8.1 e Windows 10.
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png)](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/CH341SER.EXE)

Dê um clique duplo no driver e instale‑o.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/driver_install.png)

:::note
Este driver CP2102N (Seeeduino_Lotus V1.1) está disponível para Windows XP, Windows Vista, Windows 7, Windows 8/8.1, Windows 10 e Mac.
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png)](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)  

## Primeiros Passos

:::note
    Esta parte é baseada no Arduino 1.6.9 em Windows 10.
:::
Antes de tudo, você precisa instalar o Software Arduino.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Dê um clique duplo no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
Se o Software Arduino for carregado em um idioma diferente, você pode alterá‑lo na janela de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para obter detalhes.
:::

**Abra o exemplo Blink**

Abra o sketch de exemplo LED blink: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**Adicione Seeeduino Lite ao seu Arduino IDE**

Não há opção *Seeeduino Lite* nas placas do seu Arduino IDE, clique em [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para as instruções.

**Selecione sua placa**
Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino.
Selecionando um **Seeeduino Lotus**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_seeeduino_lotus.jpg)

**Selecione sua porta serial**
Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_com.jpg)

**Faça o upload do programa**
Agora, simplesmente clique no botão "Upload" no ambiente. Espere alguns segundos e, se o upload for bem‑sucedido, a mensagem "Done uploading." aparecerá na barra de status.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

Alguns segundos depois que o upload terminar, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

## Visualizador Online do Esquemático do Seeeduino Lotus v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do Seeeduino Lotus v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **Esquemático**
  * [Arquivo Eagle do Seeeduino Lotus V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip)
  * [Arquivo Eagle do Seeeduino Lotus V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip)
  * [Arquivo PDF do SCH do Seeeduino Lotus V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_SCH.pdf)
  * [Arquivo PDF do SCH do Seeeduino Lotus V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20SCH.pdf)
  * [Arquivo PDF do PCB do Seeeduino Lotus V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_PCB.pdf)
  * [Arquivo PDF do PCB do Seeeduino Lotus V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20PCB.pdf)

* **Folha de dados**
  * [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
  * [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)

* **Referências**
  * [Primeiros Passos com Arduino](https://www.arduino.cc/en/Guide/HomePage)
  * [Referência da Linguagem Arduino](https://www.arduino.cc/en/Reference/HomePage)
  * [Baixar o Software Arduino (IDE)](https://www.arduino.cc/en/Main/Software)
  * [Perguntas Frequentes sobre Arduino](https://www.arduino.cc/en/Main/FAQ)
  * [Introdução ao Arduino](https://www.arduino.cc/en/guide/introduction)
  * [Página da Wikipedia sobre Arduino](https://en.wikipedia.org/wiki/Arduino)
  * [Driver USB do Seeeduino Lotus V1.1](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

## FAQ

**P1. Qual é a diferença entre o Arduino UNO e o Seeeduino Lotus**

O Seeeduino Lotus é totalmente compatível com o Arduino UNO. E o Seeeduino Lotus possui 12 conectores Grove, o que torna conveniente criar sua demonstração com os módulos Grove da Seeed Studio. Além disso, o Seeeduino Lotus usa uma porta micro USB para alimentação e programação.

**P2. Não consigo fazer upload do meu sketch para o Seeeduino Lotus**

Por favor, verifique:

* Se o LED de energia está ligado
* Se você escolheu a Porta e a Placa corretas (Seeeduino Lotus)
* Feche e reabra a Arduino IDE e tente novamente

## Projeto

**O Código Da Vinci** O trabalho combina arte e eletrônica. A parte artística faz o esqueleto e consiste em 11 camadas de MDF (placa de fibra de média densidade).

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed" width={350} />

**O Pequeno Universo, um Abajur de Chão Controlado por Gestos** O Pequeno Universo é um abajur de chão controlado por gestos com três pernas de madeira e uma cúpula artística.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/100385/the-little-universe-a-gesture-controlled-floor-lamp-323503/embed" width={350} />

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
