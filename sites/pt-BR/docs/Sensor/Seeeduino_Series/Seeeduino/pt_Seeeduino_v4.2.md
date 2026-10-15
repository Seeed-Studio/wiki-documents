---
description: Seeeduino v4.2
title: Seeeduino v4.2
keywords:
  - Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_v4.2
sku: 102010026
last_update:
  date: 1/12/2022
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/
---


![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/cover.JPG)

Seeeduino v4.2 é uma placa de desenvolvimento de MCU ATmega328 de código aberto e compatível com Arduino. Achamos que o Seeeduino v4.2 é uma das melhores placas derivadas/compatíveis com Arduino disponíveis. O Seeeduino v4.2 é rico em recursos, muito mais estável, fácil de usar e ainda por cima bonito.

Seeeduino v4.2 é baseado no bootloader do Arduino UNO, com um ATmega16U2 como conversor UART-para-USB (basicamente funciona como um chip FTDI USB2UART). A placa vem com um conjunto adicional de pads com furo passante para todos os pinos. Esses pads estão alinhados à grade de 0,1". Isso facilita soldar pinos adicionais para conectar a uma protoboard ou criar seu próprio acessório/shield com PCBs de uso geral em matriz de pontos de 0,1".

Você pode programar a placa por meio de um cabo micro-USB. Além disso, você pode alimentar a placa através de uma entrada DC Jack (7 a 15V DC) que é aceitável. Há uma chave para escolher a tensão de alimentação do sistema entre 3,3V ou 5V, o que é muito útil se você quiser ajustar o sistema para 3,3V para interagir com sensores de baixa tensão.

Por fim, as três interfaces Grove on-board podem fazer sua placa se conectar facilmente aos módulos Grove. Quer fazer algo incrível, talvez apenas um Seeeduino v4.2 e alguns Groves sejam suficientes.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" /></a></p>

## Versão

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#6ab0de;}
.tg .tg-yw4l{vertical-align:top;width:20%}
.tg .tg-yw42{vertical-align:top;width:50%}
.tg .tg-4eph{background-color:#f9f9f9;}
.tg .tg-b7b8{background-color:#f9f9f9;vertical-align:top}
</style> -->

<table className="tg" align={"center"} width = {"100%"}>
  <tbody><tr>
      <th className="tg-yw4l">Product Version</th>
      <th className="tg-yw42">Changes</th>
      <th className="tg-yw4l">Released Date</th>
    </tr>
    <tr>
      <td className="tg-4eph">Seeeduino V4.0</td>
      <td className="tg-4eph">Inicial</td>
      <td className="tg-b7b8">15 de ago. de 2014</td>
    </tr>
    <tr>
      <td className="tg-031e">Seeeduino V4.2</td>
      <td className="tg-031e">
        1.Cancelar alguns pads no canto superior esquerdo.<br />
        <br />
        2.Mudar a localização do USB para o meio<br />
        <br />
        3.Melhorar o circuito DCDC para obter um desempenho melhor<br />
        <br />
        4.Adicionar um conector Grove I2C<br />
        <br />
        5.Mudar algumas serigrafias e a posição de alguns componentes
      </td>
      <td className="tg-yw4l">24 de ago. de 2015</td>
    </tr>
      <tr>
    <td>Seeeduino V4.3</td>
    <td>Alterar de <strong>ATMEGA328P-MU</strong> para ATMEGA328P-AU na V4.2<br />Substituir o chip serial por <strong>cp2102</strong></td>
    <td>nov. de 2022</td>
  </tr>
  </tbody></table>

## Recursos

- Totalmente compatível com Arduino UNO
- Microcontrolador ATmega328
- 14 pinos de E/S digitais (6 saídas PWM)
- 6 entradas analógicas
- Conector ISP
- Compatível com shields Arduino UNO-R3
- Programação e alimentação via Micro USB
- Conectores Grove on-board
- Chave de alimentação do sistema 3,3/5V
- Pads adicionais alinhados à grade de 0,1"

## Especificações

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-yw4l{vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
</style> -->

<table class="tg" align={"center"} width = {"100%"}>
  <tr>
    <th class="tg-yw4l">  Parâmetro</th>
    <th class="tg-yw4l">  Valor/Faixa</th>
  </tr>
  <tr>
    <td class="tg-vn4c">  Entrada pelo DC Jack </td>
    <td class="tg-vn4c">  7-12V</td>
  </tr>
  <tr>
    <td class="tg-031e" rowspan="2">  Corrente de saída DC - pino de 5V </td>
    <td class="tg-031e">  Com Micro USB 500mA máx.</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  Com alimentação pelo DC Jack 2000mA máx.  </td>
  </tr>
  <tr>
    <td class="tg-031e">  Corrente de saída DC - pino de 3V3  </td>
    <td class="tg-031e">  500mA máx.</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  Corrente DC por pino de E/S</td>
    <td class="tg-vn4c">  40mA</td>
  </tr>
  <tr>
    <td class="tg-031e">  Memória Flash</td>
    <td class="tg-031e">  32 KB</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  RAM</td>
    <td class="tg-vn4c">  2 KB</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  EEPROM</td>
    <td class="tg-yw4l">  1 KB</td>
  </tr>
  <tr>
    <td class="tg-6k2t">  Frequência de clock</td>
    <td class="tg-6k2t">  16 MHz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  Dimensões</td>
    <td class="tg-yw4l">  68,6mm x 53,4mm</td>
  </tr>
  <tr>
    <td class="tg-6k2t">  Peso</td>
    <td class="tg-6k2t">  26g</td>
  </tr>
</table>

## Visão geral do hardware

As imagens abaixo mostram uma visão geral dos recursos de hardware do Seeeduino v4.2. O mapeamento de pinos e as funções alternativas de vários pinos do Seeeduino v4.2 são mostrados no diagrama de pinagem. Isso pode ser usado como uma referência rápida.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/hardware_seeed.png)

- **<font face="" size="5" font color="00b0f0">❶</font> Entrada USB:**
A porta USB é usada para conectar a placa ao seu PC para programação e alimentação.

- **<font face="" size="5" font color="00b0f0">❷</font> Entrada DC:**
O conector de alimentação DC permite que sua placa Seeeduino seja alimentada por um adaptador de tomada para que você possa fornecer mais energia ao seu projeto, se necessário. Por exemplo, ao usar motores DC ou outros dispositivos de alta potência. A entrada DC pode ser de 7V-15V.

- **<font face="" size="5" font color="00b0f0">❸</font> Conectores Grove:**
A SeeedStudio possui uma variedade de sensores/dispositivos que podem fazer uso dessa conexão I2C ou UART. Além disso, vendemos conectores Grove independentes para ajudá-lo a fazer suas próprias conexões de sensores. O conector Grove I2C também está conectado ao pino analógico A4 e A5 para SDA e SCL, respectivamente, se você quiser usar esses pinos em vez disso. O conector Grove UART está conectado aos pinos digitais 0 e 1 para RX e TX, respectivamente.

- **<font face="" size="5" font color="00b0f0">❹</font> ICSP:**
Esta é a conexão ICSP para o ATmega328P; ela está localizada na posição padrão ICSP/SPI para hardwares compatíveis com Arduino Uno, Due, Mega e Leonardo (por exemplo, shields) que possam usar esse conector. Os pinos SPI nesta porta: MISO, SCK e MOSI, também estão conectados aos pinos digitais 12, 13 e 11 respectivamente, assim como no Arduino Uno.

- **<font face="" size="5" font color="00b0f0">❺</font> USB 2 Uart:**
Pinagem do USB-2-Uart. Esses pads podem ser usados para interagir com outros dispositivos UART colocando o ATmega328 on-board em modo de reset. Isso faz com que o Seeeduino V4.2 seja usado como uma placa utilitária USB2UART.

- **<font face="" size="5" font color="00b0f0">❻</font> Chave de alimentação do sistema:**
A chave deslizante é usada para alterar o nível lógico e a tensão de operação da placa para 5V ou 3,3V.

- **<font face="" size="5" font color="00b0f0">❼</font> Reset:**
Esse botão está convenientemente colocado na lateral para permitir que você reinicie a placa Seeeduino mesmo quando um shield estiver colocado por cima. Esse não é o caso em outras placas Arduino onde o botão é colocado na parte superior, tornando-o difícil de acessar.

- **<font face="" size="5" font color="00b0f0">❽</font> LED-D13:**
O LED está conectado ao pino D13 da placa. Ele pode ser usado como um indicador de LED on-board para programas/sketches.

- **<font face="" size="5" font color="00b0f0">❾</font> Indicador RX/TX:**
Os LEDs indicadores de TX e RX estão conectados ao TX e RX do chip USB-para-UART. Eles funcionam automaticamente e permitem que você saiba quando a placa está enviando ou recebendo dados, respectivamente.

## Primeiros passos

### Hardware

- Etapa 1. Prepare um Seeeduino V4.2 e um cabo Micro-USB.
- Etapa 2. Conecte o Seeeduino V4.2 ao seu computador com o cabo Micro-USB.
Então o LED verde de alimentação (rotulado PWR) deve acender.

![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/connect.jpg)

:::caution

Conecte o cabo USB com cuidado, caso contrário você pode danificar a interface. Use o cabo USB com 4 fios internos; o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.
:::

### Software

:::note
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Primeiros passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino)
:::

**Etapa 1. Instale o driver**

- **Para Seeeduino V4.2**

Para Windows

Este driver está disponível para Windows XP, Windows Vista, Windows 7, Windows 8/8.1.

:::note
O driver será instalado automaticamente quando instalarmos o Arduino IDE no Windows 10.
:::

[![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- Conecte sua placa e aguarde o Windows iniciar o processo de instalação do driver. Após alguns instantes, o processo falhará, apesar de todos os esforços.
- Clique no Menu Iniciar e abra o Painel de Controle.
- Enquanto estiver no Painel de Controle, navegue até Sistema e Segurança. Em seguida, clique em Sistema. Quando a janela Sistema aparecer, abra o **Gerenciador de Dispositivos**.
- Procure em Portas (COM e LPT). Você deverá encontrar uma porta aberta chamada "Seeeduino v4.2". Se não houver seção COM e LPT, procure em "Outros Dispositivos" por "Dispositivo Desconhecido".
- Clique com o botão direito na porta "Seeeduino v4.2" e escolha a opção "Atualizar software de driver".
- Em seguida, escolha a opção "Procurar software de driver no computador".
- Por fim, navegue até o arquivo de driver chamado "seeed_usb_serial.inf" e selecione-o
- O Windows concluirá a instalação do driver a partir daí.

Para Mac OSX e Linux, você não precisa instalar nenhum driver.

- **Para Seeeduino v4.3**

Você precisa instalar o driver cp2102 para usar a porta serial do Seeeduino V4.3.

Você pode clicar [aqui](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/CP210x_Universal_Windows_Driver.zip) para baixar e descompactar o driver do Windows para o cp2102.

Se você estiver usando outro sistema operacional, pode obter o driver no [site oficial](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads).

**Passo 2. Inicie o aplicativo Arduino.**

Clique duas vezes no aplicativo Arduino (arduino.exe) que você instalou anteriormente.

:::note
Se o Software Arduino carregar em um idioma diferente, você pode alterá-lo na janela de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::

**Passo 3. Abra o exemplo Blink.**

Encontre o sketch de exemplo de piscar LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/blink.png)

**Passo 4. Selecione sua placa.**

Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino. Selecione o **Seeeduino v4.2**.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_board.png)

Se você não conseguir encontrar o Seeeduino v4.2, verifique [Como adicionar placas Seeed ao Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/)

**Passo 5. Selecione sua porta serial.**

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** são normalmente reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_port.png)

:::note
No Mac ou Linux, deve ser algo como **`/dev/tty.USBmodem`**.
:::

**Passo 6. Envie o programa.**

Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos - você deverá ver os indicadores de LED RX e TX na placa piscando. Se o envio for bem-sucedido, aparecerá a mensagem "Done uploading."

Alguns segundos após o término do envio, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_v4_2_L.jpg)

## Ideias de Aplicação

- DIY
- IoT e Casa Inteligente
- Robô
- Aprendizado

Aqui estão alguns projetos divertidos para sua referência.

|Paper Man|Tranca por Impressão Digital|Suporte de Monitor|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project3.jpg)|
| [Faça agora](https://www.instructables.com/id/Paper-Man-a-machine-created-by-Arduino-and-NFC/) | [Faça agora](https://www.instructables.com/id/Door-to-Open-Source-Hardware-A-fingerprint-lock-so/) | [Faça agora](https://www.instructables.com/id/DIY-a-Programmable-Acrylic-Monitor-Stand/)|

|Promoção de Mesa|Máquina Tigre|Pirâmide Colorida|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project6.jpg)|
| [Faça agora](https://www.instructables.com/id/Desk-promo/) | [Faça agora](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/) | [Faça agora](https://www.instructables.com/id/DIY-a-colorful-pyramid/)|

## FAQs

**P1：No Ubuntu, recebo o erro 'avrdue: ser_open(): can't open device `dev/tty/ACM0`: Permission denied'. Como conecto o Seeeduino V4 a um PC Linux?**

R1： Leia as instruções [aqui](http://playground.arduino.cc/Linux/Debian) para fazer o Arduino IDE funcionar sem permissão de root no Ubuntu. Encontre abaixo a parte relevante.

**P2: Qual é a diferença entre o Arduino UNO e o Seeeduino v4.2?**

R2: Seeeduino v4.2 é totalmente compatível com o Arduino UNO. As principais diferenças são listadas abaixo:

- Usa uma micro USB para alimentar e programar a placa
- 3 conectores Grove on-board
- Chave de alimentação de sistema 3,3/5 V
- Circuito DCDC em vez de LDO, mais eficiente
- Outros aprimoramentos de circuito

**P3: Erro ao baixar `<http://downloads.arduino.cc/packages/package_index.json>`**

R3: Siga os passos abaixo para resolver o problema.

- Clique em File -> Preferences
- Clique na URL C:\Users...\AppData\Local\Arduino15\preferences.txt na parte inferior da janela de Preferências.
- Exclua todos os arquivos exceto preferences.txt, staging e packages.
- Feche e reabra uma janela do IDE e ele deverá funcionar.

## Visualizador Online do Esquemático do Seeeduino V4.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Baixar Wiki em PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2.pdf)
- **[Eagle]** [Seeeduino V4.2 em arquivo EAGLE](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip)
- **[PDF]** [Seeeduino V4.2 em PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2_sch.pdf)
- **[Eagle]** [Seeeduino V4.0 em arquivo EAGLE](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[PDF]** [Seeeduino V4.0 em PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[Datasheet]** [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
- **[Datasheet]** [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)
- **[MoreReading]** [Primeiros Passos com Arduino](https://www.arduino.cc/en/Guide/HomePage)
- **[MoreReading]** [Referência da Linguagem Arduino](https://www.arduino.cc/en/Reference/HomePage)
- **[MoreReading]** [Baixar o Software Arduino (IDE)](https://www.arduino.cc/en/Main/Software)
- **[MoreReading]** [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)
- **[MoreReading]** [Introdução ao Arduino](https://www.arduino.cc/en/guide/introduction)
- **[MoreReading]** [Página da Wikipedia sobre Arduino](https://en.wikipedia.org/wiki/Arduino)
- **[MoreReading]** [Como encaixar módulos RF Explorer 3G+ IoT no Seeeduino](http://j3.rf-explorer.com/60-rfe/specifications/184-rf-explorer-3g-iot-for-seeeduino)
- **[Firmware]** [Como gravar o bootloader](https://files.seeedstudio.com/wiki/forum_doc/reg/seeeduino_boot.zip)

## Projeto

**Hackeando as Escadas no Novo Escritório da Seeed**: Transforme as escadas do escritório em uma instalação interativa e até em uma forma legal de transmitir a mensagem "STAFF ONLY" aos visitantes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**Faça uma Matriz de Cores Interativa com Seeeduino/Arduino**: Este é um projeto de arte interativa feito com placas Seeeduino 4.2, com boa aparência e fácil de fazer!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/78141/make-an-interactive-color-matrix-with-seeeduino-arduino-f9f3c0/embed' width='350'></iframe>

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
