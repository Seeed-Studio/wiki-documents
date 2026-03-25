---
description: Xadow - GSM&#43;BLE
title: Xadow - GSM&#43;BLE
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_GSMPlusBLE
sku: 102040005
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_GSMPlusBLE/
---

![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow_GSM%2BBLE_shangjiatu.JPG)

Seja para fazer e receber chamadas telefônicas por um link de rádio usando alto‑falantes e microfone externos, ou para trocar dados em curas distâncias com Bluetooth, você pode fazer isso com o Xadow GSM+BLE.

<!-- As the heart of RePhone kit Create, the Xadow GSM+BLE is built around the powerful System-On-Chip (SOC) MT2502, offering a rich range of communication protocols - GSM, GPRS and Bluetooth (v4.0 and 2.1 dual mode). It supports quad-band 850/900/1800/1900MHz that covers any GSM network in the world. Just insert a 2G Nano SIM card, and then you can enchant things with cellular connectivity. -->


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/depot/Xadow-GSM-BLE-p-2560.html?cPath=84_120)  


##Features  

- Baseado no menor System-on-Chip comercial  
- (5,4mm x 6,2mm) atualmente no mercado  
- Design modular e de código aberto  
- Fino e pequeno  
- Conectores Xadow integrados para cabos FPC facilmente conectáveis  
- Empilhável, encadeável e costurável com outros módulos Xadow  
- Módulo principal para a maioria dos kits RePhone  
- Escolha perfeita para comunicação de longa distância e de curto alcance  

##Specification  

|Microcontroller	|MT2502                                                                                  |
|-------------------|----------------------------------------------------------------------------------------|
|MCU Core	        |Processador RISC ARM7EJ-STM de 32 bits                                                  |
|RAM	            |4 MB                                                                                    |
|Flash Memory	    |16 MB                                                                                   |
|Power Supply	    |3,3 ~ 4,2V(sem SIM)/3,5 ~ 4,2V(com SIM)                                                 |
|Power Consumption	|20mW/30mW/52mW em standby(sem rádio)/standby(GSM)/standby(BT)                           |
|Quad-band	        |850/900/1800/1900 MHz                                                                   |
|GPRS	            |Modem Classe 12                                                                         |
|Clock Speed	    |260 MHz                                                                                 |
|Connectors     	|Conector de 35 PINs e conector de 11 PINs para módulos Xadow; conector JST 1.0 para a bateria|
|Interfaces	        |LCD, Áudio, I2C, SPI, UART e GPIOs etc                                                  |
|Dimensions       	|25,37mm × 20,30mm / 1” × 0,8”                                                           |  

##Hardware Overview  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow_GSM%2BBLE_Overview.png) 


A imagem abaixo ilustra as definições de pinos do conector Xadow de 11 pinos, pinos breakout soldáveis e o conector Xadow de 35 pinos em sequência da **esquerda para a direita**.  

![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow-connector-Pin-definitions-06.jpg)  

##Power Up  
Ligue o RePhone/Xadow GSM+BLE com uma bateria de **3,5V ~ 4,2V** e **conector macho JST 1.0**, ou alimente-o através do breakout **PIN 3(VCC)** e breakout **PIN 6(GND)** conforme ilustrado na visão de hardware acima.  

##Battery Charging  
O Xadow GSM+BLE usa o [conector JST 1.0 fêmea](https://www.seeedstudio.com/depot/index.php?main_page=opl_info&opl_id=555) para a bateria; você pode carregar a bateria simplesmente conectando sua placa com um cabo USB.  

##Operating Mode  
O Xadow GSM+BLE tem dois modos de operação quando você o liga e conecta ao PC - **pressione e mantenha a tecla de energia por 2 segundos** para ligar (**ON**) ou desligar (**OFF**) o módulo para acessar o **Mass Storage Mode** ou o **Flash/Debug Mode.**  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Operating_mode.png)  

##Mass Storage Mode  
Quando o Xadow GSM+BLE está **OFF**, conecte a placa (com a bateria conectada) ao PC via cabo Micro USB; você pode acessar o ‘Mass Storage Mode’ de 5 MB no PC. Todos os aplicativos (arquivos vxp) e configurações do sistema são armazenados nesse disco de 5 MB.  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Mass_Storage_Mode.png)  

##Flash/Debug Mode  
Quando o Xadow GSM+BLE está **ON**, conecte a placa (com a bateria conectada) ao PC via cabo Micro USB; você encontrará duas **portas COM** no seu **‘Device Manager’**： 

- **MTK USB Debug Port(COM4)**  
- **MTK USB Modem Port(COM5)**  

O número da porta COM pode ser diferente no seu PC. Cada porta COM tem função diferente de acordo com o ambiente de desenvolvimento que você usa; consulte a seção Getting Started para mais detalhes.  

Abra o **Device Manager** clicando no botão **Start**, clicando em **Control Panel**, clicando em **System and Security** e então, em **System**, clicando em **Device Manager**. Se lhe for solicitado uma senha ou confirmação de administrador, digite a senha ou forneça a confirmação. Veja a imagem a seguir:  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Check_ports.png)  


##Getting Started  
Desenvolvemos bibliotecas abrangentes integradas ao Arduino IDE, Lua e JavaScript, com exemplos detalhados para ajudar programadores iniciantes a desenvolver com módulos RePhone de forma fácil e rápida.

Também fornecemos um SDK poderoso baseado no Eclipse IDE para desenvolvedores C/C++ trabalharem com aplicações mais inteligentes.  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Arduino_IDE-17.png)  ]
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Eclipse_IDE-13.png) ](https://www.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit)   
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Lua-14.png)](https://www.seeedstudio.com/wiki/Lua_for_RePhone#Use_Lua_Shellt)  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/JS-15.png) ](https://www.seeedstudio.com/wiki/JavaScript_for_RePhone) 

Para mais informações você pode consultar o ambiente de desenvolvimento RePhone na página principal do RePhone:  

[
RePhone Development Environment](https://wiki.seeedstudio.com/pt-br/RePhone/#development-environment)  
##Related Projects  
Confira projetos incríveis de RePhone que foram realizados com RePhone.  
**Uma Coleira Rastreável para Cães**  
5 passos para fazer uma coleira rastreável para o seu adorável filhote.   
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/450px-Dog_Collar.png.jpeg)  ](https://www.seeedstudio.com/recipe/424-rephone-traceable-dog-collar.html)

##RePhone Community  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/300px-RePhone_Community-2.png) ](http://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)   
Temos procurado um lugar melhor onde nossos apoiadores (usuários RePhone) possam se reunir, de forma acolhedora e confortável, conversar sobre RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento futuro dos módulos. E então aqui está, a RePhone Community.

Agora junte-se a nós na [RePhone Community](https://community.seeedstudio.com/discover.html?t=rephone)! Juntos buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.

###Frequently Asked Questions  
Algumas perguntas frequentes na RePhone Community são coletadas e respondidas no tópico "[Frequently Asked Questions of RePhone (FAQ)](https://community.seeedstudio.com/topic_detail.html?id=5170#p23753)" , que será constantemente atualizado sempre que surgir uma nova FAQ.  

##Resources  
O diagrama esquemático do Xadow GSM+BLE é fornecido no link a seguir:  
[- Arquivos eagle do Xadow_GSM+BLE ](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Xadow_GSM%2BBLE.rar)  
Confira mais informações sobre o chipset MT2502:  
[- Datasheet para arquivos eagle](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Datasheet_for_MT2502.rar)  
Confira esta planilha para a compatibilidade com módulos Xadow 1.0:  
[- Compatibilidade entre GSM+BLE e módulos Xadow 1.0  ](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Compatibility_between_GSM%2BBLE_and_Xadow_1.0_modules.xlsx)

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
