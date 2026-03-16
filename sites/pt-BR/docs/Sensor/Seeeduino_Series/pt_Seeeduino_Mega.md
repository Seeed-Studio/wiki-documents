---
description: Seeeduino Mega
title: Seeeduino Mega
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Mega
sku: 102010007
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Mega/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/Seeeduino_Mega_cover.jpg)

Seeeduino Mega é um poderoso microcontrolador derivado do Arduino Mega. Ele apresenta o processador ATmega2560, que traz um grande número de pinos de I/O, até 70 I/O digitais, 16 entradas analógicas, 14 PWM e 4 portas seriais de hardware. Em comparação com o Arduino Mega, reduzimos o volume do Arduino Mega em pelo menos 30% e o tornamos 100% compatível com os [produtos Shield da Seeed](https://www.seeedstudio.com/s/shield.html). E, como membro da série Seeeduino, o Seeeduino Mega herda detalhes bem pensados do Seeeduino, como tensão de operação selecionável (3,3V/5V), botão de reset em ângulo reto e assim por diante.


[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Mega-p-717.html)


## Ideias de Aplicação

* Internet das Coisas  
* DIY
* Robô
* Casa Inteligente
* Impressora 3D
* Industrial

Aqui estão alguns projetos divertidos para sua referência.

|Cubo de LED 8*8*8|Robô Hexápode|Impressora 3D Arduino DIY|
|-------|-------|--------
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_3.jpg)|
|[Faça Agora](https://www.instructables.com/id/Arduino-Mega-8x8x8-RGB-LED-Cube/)|[Faça Agora](https://www.instructables.com/id/Arduino-Mega-Hexapod/)|[Faça Agora](https://www.instructables.com/id/Arduino-Controlled-CNC-3D-Printer/)|

## Recursos

* Compatível com a maioria dos Shields Arduino Duemilanove e Diecimila
* ATmega 2560 @ 16MHz
* Operação selecionável em 5V/3,3V
* 70 IO Digitais
* 16 entradas analógicas
* 14 saídas PWM
* 4 portas seriais de hardware (UART)
* Fator de forma pequeno, 30% menor do que o Arduino Mega
* Fácil de programar, nenhum hardware adicional é necessário para carregar o firmware – basta conectar a uma porta USB e pronto.
* Conector ICSP
* Pode ser alimentado por uma bateria ou por um adaptador CA para CC

## Especificações

|Item|Valor|
|------------|-----------|
|Microcontrolador|ATmega2560|
|Tensão de Operação|5V/3,3V|
|Tensão de Entrada|7-12V|
|Pinos de I/O Digitais|70|
|Canais PWM|14|
|Canais de Entrada Analógica|16|
|Corrente CC por Pino de I/O|20 mA|
|Memória Flash|256 KB|
|RAM|8 KB|
|EEPROM|4 KB|
|Velocidade de Clock|16 MHz|


## Visão Geral de Hardware

A imagem abaixo mostra uma visão geral dos recursos de hardware do Seeeduino Mega. O diagrama de pinagem e as funções alternativas de vários pinos do Seeeduino Mega são mostrados no diagrama de pinagem. Isso pode ser usado como uma referência rápida.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/Seeeduino_Mega_hardware1.png)


- **Mini USB**
A porta Mini USB é usada para conectar a placa ao seu PC para programação e alimentação.
- **Modo de Chaveamento**
Chave deslizante usada para permitir ou evitar reset automático e upload.
- **Chave de Energia**
Chave deslizante usada para alterar o nível lógico e a saída de energia da placa para 5V ou 3,3V. Hoje em dia muitos sensores novos e excelentes estão sendo desenvolvidos para funcionar com 3,3V; com outras placas duino você precisaria colocar um conversor de nível lógico entre a placa e estes sensores, com o Seeeduino Mega tudo o que você precisa fazer é deslizar a chave!
- **Entrada CC**
A Entrada CC permite que seu Seeeduino Mega seja alimentado por um adaptador de parede para que você possa fornecer mais energia ao seu projeto, se necessário, por exemplo ao usar motores CC ou outros dispositivos de alta potência. A entrada CC pode ser de 7V-12V. Como a corrente de pico é de 2A quando o módulo é ligado, a alimentação por CC é uma escolha melhor do que a alimentação por USB.
- **Reset**
Este botão é convenientemente colocado na lateral para permitir que você reinicie a placa Seeeduino mesmo quando um shield é colocado em cima. Este não é o caso em outras placas Arduino, onde o botão é colocado na parte superior, tornando-o difícil de acessar.
- **ICSP**
Esta é a conexão ICSP para o ATmega328P, ela está localizada na posição padrão ICSP/SPI para hardware compatível com Arduino Uno, Due, Mega e Leonardo (por exemplo, shields) que podem usar este conector. Os pinos SPI nesta porta: MISO, SCK e MOSI, também estão conectados aos pinos digitais 12, 13 e 11 respectivamente, assim como os do Arduino Uno.
- **Pinos Digitais**
Há até 70 pinos digitais no Seeeduino Mega. Clique [aqui](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino%20Mega%20pin%20mapping.pdf) para ver o mapeamento de pinos entre os pinos do Arduino e os pinos do Atmega2560.
Cada um dos 70 pinos digitais do Mega pode ser usado como entrada ou saída, usando as funções pinMode(), digitalWrite() e digitalRead(). Eles operam a 5 volts. Cada pino pode fornecer ou receber 20 mA como condição de operação recomendada e possui um resistor de pull-up interno (desconectado por padrão) de 20-50 k ohm. Um máximo de 40mA é o valor que não deve ser excedido para evitar danos permanentes ao microcontrolador.
Além disso, alguns pinos têm funções especializadas:
	* Serial: 0 (RX) e 1 (TX); Serial 1: 19 (RX) e 18 (TX); Serial 2: 17 (RX) e 16 (TX); Serial 3: 15 (RX) e 14 (TX). Usados para receber (RX) e transmitir (TX) dados seriais TTL. Os pinos 0 e 1 também estão conectados aos pinos correspondentes do chip Serial USB-para-TTL ATmega16U2.
	* Interrupções Externas: 2 (interrupção 0), 3 (interrupção 1), 18 (interrupção 5), 19 (interrupção 4), 20 (interrupção 3) e 21 (interrupção 2). Esses pinos podem ser configurados para disparar uma interrupção em nível baixo, borda de subida ou descida, ou mudança de nível. Consulte a função attachInterrupt() para detalhes.
	* PWM: 2 a 13 e 44 a 46. Fornecem saída PWM de 8 bits com a função analogWrite().
	* SPI: 50 (MISO), 51 (MOSI), 52 (SCK), 53 (SS). Esses pinos suportam comunicação SPI usando a biblioteca SPI. Os pinos SPI também são expostos no conector ICSP, que é fisicamente compatível com o Arduino/Genuino Uno.
	* LED: 13. Há um LED embutido conectado ao pino digital 13. Quando o pino está em nível HIGH, o LED acende; quando o pino está em nível LOW, ele apaga.
	* TWI: 20 (SDA) e 21 (SCL). Suportam comunicação TWI usando a biblioteca Wire. Observe que esses pinos não estão na mesma localização que os pinos TWI nas antigas placas Arduino Duemilanove ou Diecimila.
	* Analógico: O Mega 2560 tem 16 entradas analógicas, cada uma das quais fornece 10 bits de resolução (ou seja, 1024 valores diferentes). Por padrão, elas medem de terra até 5 volts, embora seja possível mudar o limite superior de sua faixa usando o pino AREF e a função analogReference().
	* AREF: Tensão de referência para as entradas analógicas. Usada com analogReference().
	* Reset: Coloque esta linha em LOW para reiniciar o microcontrolador. Tipicamente usada para adicionar um botão de reset a shields que bloqueiam o da placa.
	* Os pinos sem marcação: Use-os operando o Registrador.

## Instalar o Driver

Antes de tudo, você precisa:

* **Obter um cabo Micro-USB**
Você precisa primeiro de um cabo Micro-USB; o cabo de dados de um telefone Android serve bem.
Se você não conseguir encontrar um, pode comprar um [aqui](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar a placa**
Conecte a placa Arduino ao seu computador usando o cabo USB. O LED verde de energia (rotulado **PWR**) deve acender.


**Para Windows**

:::note
    Este driver está disponível para Windows XP, Windows Vista, Windows 7, Windows 8/8.1 e Windows 10.
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- Conecte sua placa e aguarde o Windows iniciar o processo de instalação do driver. Após alguns momentos, o processo irá falhar, apesar dos melhores esforços.
- Clique no Menu Iniciar e abra o Painel de Controle.
- No Painel de Controle, navegue até Sistema e Segurança. Em seguida, clique em Sistema. Quando a janela Sistema estiver aberta, abra o **Gerenciador de Dispositivos**.
- Procure em Portas (COM & LPT). Você deverá encontrar uma porta aberta chamada "Seeeduino Mega". Se não houver seção COM & LPT, procure em "Outros Dispositivos" por "Dispositivo Desconhecido".
- Clique com o botão direito na porta "Seeeduino Mega" e escolha a opção "Atualizar Software de Driver".
- Em seguida, escolha a opção "Procurar software de driver no computador".
- Finalmente, navegue e selecione o arquivo de driver chamado "Seeeduino Mega.inf"
- O Windows finalizará a instalação do driver a partir daí.

**Para Mac OSX**

Você não precisa instalar nenhum driver.


## Primeiros Passos

:::note
    Esta parte é baseada no Arduino 1.6.9 no Windows 10.
:::
Antes de tudo, você precisa instalar o Software Arduino.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Inicie o aplicativo Arduino**

Dê um clique duplo no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
    Se o Software Arduino carregar em um idioma diferente, você pode alterá-lo no diálogo de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para detalhes.
:::

**Abra o exemplo Blink**

Abra o sketch de exemplo de piscar o LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**Adicione o Seeeduino ao seu Arduino IDE**

Clique em **File > Preference** e preencha Additional Boards Manager URLs com a URL abaixo:
    *https://raw.githubusercontent.com/Seeed-Studio/Seeeduino-Boards/master/package_seeeduino_index.json*

Clique em OK para concluir a configuração. Em seguida, clique em **Tools > Board > Boards Manager**, encontre **Seeeduino by Seeed Studio** e instale-o.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/add_board.png)

**Selecione sua placa**

Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino.
Selecionando um **Seeeduino Mega 2560**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/mega_arduino_ide.png)

**Selecione sua porta serial**

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Conecte a placa novamente e selecione essa porta serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/select_com_seeeduino_mega.png)

:::note
    No Mac, isso deve ser algo como **/dev/tty.USBmodem**.
:::
**Envie o programa**

Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos e, se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

Alguns segundos após o término do envio, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

## Primeiros Passos no Linux

Para usar no Linux, acesse [Installing Arduino on Linux](http://playground.arduino.cc/Learning/Linux)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino_Mega_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

* **Esquemático**

    [Arquivo Eagle do Seeeduino Mega](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino_Mega_v3.0.zip)

* **Mapeamento de Pinos**

    [PDF de Mapeamento de Pinos do Seeeduino Mega](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino%20Mega%20pin%20mapping.pdf)

* **Referências**

    [Primeiros Passos com Arduino](https://www.arduino.cc/en/Guide/HomePage)

    [Referência da Linguagem Arduino](https://www.arduino.cc/en/Reference/HomePage)

    [Baixar o Software Arduino (IDE)](https://www.arduino.cc/en/Main/Software)

    [FAQ do Arduino](https://www.arduino.cc/en/Main/FAQ)

    [Introdução ao Arduino](https://www.arduino.cc/en/guide/introduction)

    [Página da Wikipédia sobre Arduino](https://en.wikipedia.org/wiki/Arduino)

    [Arduino Mega](https://www.arduino.cc/en/Main/ArduinoBoardMega2560?setlang=en)

## Perguntas Frequentes (FAQ)

**Qual é a diferença entre o Arduino Mega e o Seeeduino Mega?**

Seeeduino Mega é um poderoso microcontrolador derivado do Arduino Mega. E aqui está a lista das principais diferenças:

* Usa um cabo mini USB para alimentação e programação
* Adiciona chave de seleção de alimentação do sistema 3,3/5V
* Adiciona chave de modo de reset automático
* Tamanho menor

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
