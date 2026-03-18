---
description: Seeeduino Crypto (ATmega4809 ECC608)
title: Seeeduino Crypto (ATmega4809 ECC608)
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-Crypto-ATmega4809-ECC608
sku: 102010288
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-Crypto-ATmega4809-ECC608/
---


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Seeed-Crypto-ATmega4809-ECC608-wiki.jpg)

Seeeduino Crypto é feito para criptografia. Ele é baseado no microcontrolador de alto desempenho ATmega4809 e no chip de criptografia microchip ECC608. Com a ajuda do chip de criptografia ECC608, você pode experimentar criptografia I2C e outras comunicações criptografadas.

Além da criptografia, o Seeeduino Crypto possui as mesmas funções que o Seeeduino V4.2 / Arduino Uno Rev3. Ele tem recursos de interface ricos, incluindo 6 pinos de entrada analógica, 14 pinos de E/S digitais, 5 para saída PWM, com 2 portas Grove I2C e 1 porta Grove UART. Basta conectá-lo e usar centenas de sensores e atuadores.

A solução de controle do Seeeduino Crypto é a mesma do ARDUINO UNO WIFI REV2. A diferença é que o Seeeduino Crypto não possui WIFI onboard. Você pode adicionar um módulo Arduino wifi, se necessário. Correspondentemente, o preço do Seeeduino Crypto é menos da metade do ARDUINO UNO WIFI REV2.

:::tip

    Este produto permite que os usuários experimentem o modo de criptografia da comunicação I2C com grande plasticidade.
:::

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html)

## Recursos

- Microcontrolador ATmega4809 de alto desempenho

- Chip criptográfico ECC608 de alta segurança, suporta SHA-256 e HMAC Hash / AES-128

- 2 Grove I2C + 1 Grove UART, fácil de prototipar

- Alimentação Type C + transmissão de dados

## Especificação

|Item|Detalhe|
|---|---|
| Chip | Microcontrolador: ATMEGA4809-AFR   / Criptografia: ECC608 |
| Clock Speed | 16Mhz |
| Recurso de E/S |Canais de Entrada Analógica: 6  /Pinos de E/S Digitais: 14 / Canais PWM: 5|
| Interface Periférica |2 Portas Grove I2C / 1 Porta Grove UART / 1 Interface ICSP /1 porta de dados USB Type C|
| Tensão de Operação | 5V|
| Fonte de Alimentação |5V USB Type C / Entrada de Jack DC 8 -15 V|

## Visão Geral de Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Hardware-figure.jpg)

- **Type C** É a interface Type C da placa, conectada ao PC, usada como fonte de alimentação e para download.  

- **LED RX / LED TX** LEDs indicadores de comunicação serial TX, RX, convenientes para que os usuários saibam o status de envio e recebimento da comunicação serial.  

- **DC Power Jack** A tensão de entrada é 8V-15V.

- **Botão de Reset e LED de Reset** Usados para reiniciar a placa, quando reiniciada, a luz de reset piscará.

- **LED de Alimentação** O indicador de alimentação do sistema.

- **Chip ATMEGA32U4-MU** O chip usado como USB para download UPDI é conectado ao MCU mestre ATMEGA4809-AFR para gravar o programa no MCU mestre.

- **Chip de Criptografia ATECC608** Um chip de criptografia para comunicação I2C.

- **Chip ATMEGA4809-AFR** MCU onboard, como o chip de controle principal do sistema.

- **Conectores Grove** Contém duas interfaces padrão Grove I2C e uma UART

:::note

    Ao usar a porta serial para comunicar os dados de saída, deve haver um certo atraso de mais de 25 ms, caso contrário a porta serial pode travar.
:::

## Primeiros Passos

:::note

    Esta parte é baseada no Arduino 1.8.10 em Windows 10.
:::

Antes de tudo, você precisa instalar o Arduino Software.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Dê um clique duplo no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note

    Se o Arduino Software carregar em um idioma diferente, você pode alterá-lo na caixa de diálogo de preferências. Veja a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para detalhes.
:::

**Abra o exemplo Blink**

Abra o sketch de exemplo de piscar o LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/select-blink.png)

**Adicione o Seeeduino ao seu Arduino IDE**

Clique em **Tools > Board > Boards Manager**, você pode digitar a palavra-chave 'MegaAVR' na barra de pesquisa, encontrar **Arduino MegaAVR** e instalá-lo.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/install.png)

**Selecione sua placa**

Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino.
Selecionando um **Arduino Uon WIFI Rev2**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/board.png)

**Selecione sua porta serial**

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/port.png)

**Carregue o programa**

Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos e, se o upload for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

Alguns segundos após o término do upload, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino em funcionamento. Se tiver problemas, consulte as sugestões de solução de problemas.

## Recursos

- **Esquemático**

   Diagrama Esquemático do Seeeduino Crypto](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/Seeeduino-Crypto-(ATmega4809%26ECC608).zip)  

- **Data Sheet**

   [ATECC608A-MAHDA-S Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATECC608A-MAHDA-S-datasheet.pdf)

   [ATMEGA32U4-MU Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA32U4-MU-datasheet.pdf)

   [ATMEGA4809-AFR Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA4809-AFR-datasheet.pdf)  

- **Referências**

   [Primeiros Passos com Arduino](https://www.arduino.cc/en/Guide/HomePage)

   [Referência da Linguagem Arduino](https://www.arduino.cc/en/Reference/HomePage)

   [Baixar o Arduino Software(IDE)](https://www.arduino.cc/en/Main/Software)

   [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)

   [Introdução ao Arduino](https://www.arduino.cc/en/guide/introduction)

   [Página da Wikipedia para Arduino](https://en.wikipedia.org/wiki/Arduino)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
