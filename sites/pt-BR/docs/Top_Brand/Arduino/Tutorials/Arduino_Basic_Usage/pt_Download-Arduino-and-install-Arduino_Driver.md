---
description: Baixar o Arduino e instalar o driver do Arduino
title: Baixar o Arduino e instalar o driver do Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Download-Arduino-and-install-Arduino_Driver
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Download-Arduino-and-install-Arduino_Driver/
---

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Arduino_quickstart.jpg)

## Baixar o Ambiente Arduino

Atualmente o Arduino IDE está disponível para Windows, Mac OS X e Linux. Clique no botão abaixo para fazer o download.

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

:::note
    Recomendamos usar a versão mais recente do Arduino DIE.
:::

## Configurar o Arduino IDE

### Para Windows e Mac OS X

Baixe o software correspondente e clique em setup.exe, depois siga as instruções e estará tudo OK.

### Para Linux

Por favor, acesse  ![Installing Arduino on Linux](http://playground.arduino.cc/Learning/Linux)

## Conectar o Seeeduino ao PC

Conecte a placa Seeeduino ao computador usando o cabo USB. O LED verde de alimentação (rotulado PWR) deve acender.

## Instalar o driver

### Instalando drivers para o Seeeduino com Windows 7

* Conecte sua placa e aguarde o Windows iniciar o processo de instalação do driver. Após alguns instantes, o processo falhará.
* Abra o Gerenciador de Dispositivos clicando com o botão direito em “Meu computador” e selecionando painel de controle.

* Procure em Portas (COM &amp; LPT). Você deve ver uma porta aberta chamada "USB Serial Port". Clique com o botão direito em "USB Serial Port" e escolha a opção "Update Driver Software".

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)

* Em seguida, escolha a opção "Browse my computer for Driver software".

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)

* Por fim, selecione o arquivo de driver chamado "FTDI USB Drivers", localizado na pasta "Drivers" do download do Arduino Software.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

<font color="red"><strong>Note:</strong> os FTDI USB Drivers são do Arduino. Mas quando você instalar drivers para outros controladores, como Xadow Main Board, Seeeduino Clio, Seeeduino Lite, você precisa baixar o arquivo de driver correspondente e salvá-lo. E selecione o arquivo de driver que você baixou.</font>

* As caixas de diálogo abaixo aparecem automaticamente se você tiver instalado o driver com sucesso.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)

* Você pode verificar se os drivers foram instalados abrindo o Gerenciador de Dispositivos do Windows. Procure por "USB Serial Port" na seção Portas.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)

* Você também pode ver a porta serial no ambiente Arduino.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

### Instalando drivers para o Seeeduino com Windows 8

Você deve salvar os arquivos que estiver editando antes de instalar o driver no Windows 8, porque haverá várias quedas de energia durante a operação.

* Pressione “Windows Key” +”R”

* Digite shutdown.exe /r /o /f /t 00

* Clique no botão "OK".

* O sistema será reiniciado para a tela "Choose an option"

* Selecione "Troubleshoot" na tela "Choose an option"

* Selecione "Advanced options" na tela "Troubleshoot"

* Selecione "Windows Startup Settings" na tela "Advanced options"

* Clique no botão "Restart"

* O sistema será reiniciado para a tela "Advanced Boot Options"

* Selecione "Disable Driver Signature Enforcement"

* Quando o sistema iniciar, você poderá instalar os drivers do Arduino da mesma forma que no Windows

### Instalando drivers para o Seeeduino com Mac OS

* Acesse a página: [https://www.ftdichip.com](https://www.ftdichip.com).

* Baixe o driver para a versão Mac OS X, chamado 2.2.18 (32bit)

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)

* Abra o arquivo de driver que você acabou de baixar e dê um clique duplo em FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)

* Após o clique duplo, você verá uma janela do instalador.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)

* Clique em “Continue”.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)

* Você pode ver as caixas de diálogo abaixo se tiver instalado o driver com sucesso.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)

* Teste com o Seeeduino

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

-----------------------------

# add

## Instalar o Driver

Antes de tudo, você precisa:

* **Obter um cabo Micro-USB**
  * Primeiro você precisa de um cabo Micro-USB; o cabo de dados de um telefone Android serve bem.
Se você não encontrar um, pode comprar um [aqui](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar a placa**
  * O Seeeduino V4.2 obtém automaticamente energia da conexão USB com o computador ou de uma fonte de alimentação externa. Conecte a placa Arduino ao computador usando o cabo USB. O LED verde de alimentação (rotulado **PWR**) deve acender.

### Para Windows

:::note
Este driver está disponível para Windows XP, Windows Vista, Windows 7, Windows 8/8.1 e Windows 10.
:::

[![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

* Conecte sua placa e aguarde o Windows iniciar o processo de instalação do driver. Após alguns instantes, o processo falhará, apesar dos melhores esforços.
* Clique no Menu Iniciar e abra o Painel de Controle.
* No Painel de Controle, navegue até Sistema e Segurança. Em seguida, clique em Sistema. Quando a janela Sistema estiver aberta, abra o **Gerenciador de Dispositivos**.
* Procure em Portas (COM & LPT). Você deve encontrar uma porta aberta chamada "Seeeduino v4.2". Se não houver seção COM & LPT, procure em "Other Devices" por "Unknown Device".
* Clique com o botão direito na porta "Seeeduino v4.2" e escolha a opção "Update Driver Software".
* Em seguida, escolha a opção "Browse my computer for Driver software".
* Por fim, navegue até e selecione o arquivo de driver chamado "seeed_usb_serial.inf"
* O Windows concluirá a instalação do driver a partir daí.

### Para Mac OSX

Você não precisa instalar nenhum driver.

### Para Linux

## Primeiros Passos no Linux

Para usar no Linux, acesse [Installing Arduino on Linux](http://playground.arduino.cc/Learning/Linux)

Você não precisa instalar nenhum driver.

-----------------------
Antes de tudo, você precisa instalar um Software Arduino.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

-------------

#### P1. Qual é a diferença entre o Arduino UNO e o Seeeduino v4.2

O Seeeduino v4.2 é totalmente compatível com o Arduino UNO. As principais diferenças estão listadas abaixo:

* Usa um micro USB para alimentar e programar a placa
* 3 conectores Grove on-board
* Chave de alimentação do sistema 3,3/5V
* Circuito DCDC em vez de LDO, mais eficiente
* Outros aprimoramentos de circuito

#### P2. Não consigo fazer upload do meu sketch para o Seeeduino v4.2

Por favor, verifique,

* Se o LED de alimentação está aceso
* Se você escolheu a Porta e a Placa corretas (Seeeduino v4.2)
* Feche e reabra o Arduino IDE e tente novamente

#### P3. Onde posso encontrar suporte técnico se eu tiver algum outro problema

Você pode postar uma pergunta no [Seeed Forum](https://community.seeedstudio.com/discover.html?t=Arduino) .

## Suporte Técnico e Discussão de Produto


<br />

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
