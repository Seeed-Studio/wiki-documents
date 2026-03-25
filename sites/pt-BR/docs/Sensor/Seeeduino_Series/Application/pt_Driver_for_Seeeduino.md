---
description: Driver para Seeeduino
title: Driver para Seeeduino
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Driver_for_Seeeduino
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Driver_for_Seeeduino/
---

##   Instalar o driver

###   Instalando drivers para o Seeeduino com Windows 7



*Conecte sua placa e aguarde o Windows iniciar o processo de instalação do driver. Após alguns instantes, o processo falhará.
*   Abra o Gerenciador de Dispositivos clicando com o botão direito em “Meu Computador” e selecionando painel de controle.

*   Procure em Portas (COM &amp; LPT). Você deve ver uma porta aberta chamada "USB Serial Port". Clique com o botão direito em "USB Serial Port" e escolha a opção "Update Driver Software".


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)



*   Em seguida, escolha a opção "Browse my computer for Driver software".


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)



*   Por fim, selecione o arquivo de driver chamado "FTDI USB Drivers", localizado na pasta "Drivers" do download do Arduino Software.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

**Nota:** os FTDI USB Drivers são do Arduino. Mas quando você instalar drivers para outros controladores, como Xadow Main Board, Seeeduino Clio, Seeeduino Lite,

você precisa baixar o arquivo de driver correspondente e salvá-lo. E selecione o arquivo de driver que você baixou.



*   As caixas de diálogo abaixo aparecem automaticamente se você tiver instalado o driver com sucesso.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)



*   Você pode verificar se os drivers foram instalados abrindo o Gerenciador de Dispositivos do Windows. Procure por "USB Serial Port" na seção Portas.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)



*   Você também pode ver a porta serial no ambiente do Arduino.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

###   Instalando drivers para o Seeeduino com Windows 8

Você deve salvar esses arquivos que está editando antes de instalar o driver com o Windows 8, porque haverá várias quedas de energia durante a operação.



*   Pressione “Windows Key” +”R”

*   Digite shutdown.exe /r /o /f /t 00

*   Clique no botão "OK".

*   O sistema será reiniciado para a tela "Choose an option"

*   Selecione "Troubleshoot" na tela "Choose an option"

*   Selecione "Advanced options" na tela "Troubleshoot"

*   Selecione "Windows Startup Settings" na tela "Advanced options"

*   Clique no botão "Restart"

*   O sistema será reiniciado para a tela "Advanced Boot Options"

*   Selecione "Disable Driver Signature Enforcement"

*   Quando o sistema iniciar, você poderá instalar os drivers do Arduino da mesma forma que no Windows


###   Instalando drivers para o Seeeduino com Mac OS



*   Acesse a página: [https://www.ftdichip.com](https://www.ftdichip.com).


*   Baixe o driver para a versão Mac OS X, chamado 2.2.18 (32bit)


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)



*   Abra o arquivo de driver que você acabou de baixar e clique duas vezes em FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)



*   Após clicar duas vezes, você verá uma janela de instalador.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)



*   Clique em “Continue”.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)



*   Você pode ver as caixas de diálogo abaixo se tiver instalado o driver com sucesso.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)



*   Teste-o com o Seeeduino


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
