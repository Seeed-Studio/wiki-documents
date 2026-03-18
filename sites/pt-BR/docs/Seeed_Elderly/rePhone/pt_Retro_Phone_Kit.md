---
description: Kit de Telefone Retrô
title: Kit de Telefone Retrô
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Retro_Phone_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-05'
url: https://wiki.seeedstudio.com/pt-br/Retro_Phone_Kit/
---
![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Retro%20Phone%20Kit.jpg)

O Retro Phone Kit é um telefone de hardware de código aberto compatível com Arduino. Lembra do RePhone? O primeiro telefone modular e de código aberto do mundo, com o qual você pode hackear coisas ao seu redor com conexão celular. O Retro Phone pode ser considerado como um RePhone com botões físicos que podem levá-lo de volta aos velhos tempos, quando o telefone celular era simplesmente uma ferramenta para fazer chamadas telefônicas. O kit é muito fácil de usar, então você pode fazer um telefone celular em minutos.

A placa principal deste kit é a Xadow-Key Board, que contém uma tela e um painel de botões. A parte mais importante é o RePhone Core 2G-Atmel32u4, que é uma nova placa RePhone Core que acabou de chegar ao mercado. Ele usa o MCU Atmel32u4 e suporta quad-band 850/900/1800/1900MHz que cobre a rede GSM em todo o mundo. Também mantivemos um conector de fone de ouvido de 3,5 mm para que você possa usar um fone de ouvido para fazer chamadas telefônicas. Não incluímos nenhuma carcaça para o telefone, então você é livre para fazer DIY de qualquer carcaça que quiser.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Retro-Phone-Kit-p-2797.html)

## Recursos
---
- Compatível com Arduino

- Suporta áudio analógico

- Apenas SIM Nano 2G

- Certificado PTCRB

- LCD 128*64

- Conector de fone de ouvido de 3,5 mm (com microfone) que suporta OMTP

- Fonte de alimentação: 3,4-4,2V (BAT) 5V (USB)

## Especificação

**Rephone Core 2G-Atmel32u4**

Para mais informações sobre este módulo, consulte [Rephone Core 2G-Atmel32u4](https://wiki.seeedstudio.com/pt-br/RePhone_core_2G-Atmel32u4/)

|Item|	Valor|
|---|---|
|Microcontroller|	Atmega32U4|
|Operating Voltage|	3.3V|
|DC Current per I/O Pin	|50|
|Flash Memory	|32 KB dos quais 4KB usados pelo bootloader|
|SRAM	|2.5 KB
|EEPROM|	1KB
|Clock Speed	|16 MHz
|Lenght	|68 mm
|Width	|30 mm
|Weight	|12 gr

## Conexão do módulo
O Rephone Core 2G-Atmel32u4 integra um conector Xadow de 36 pinos e um conector Xadow de 11 pinos, semelhante ao Xadow - GSM＋BLE. Nesse caso, a conexão do módulo é muito fácil,

1. Conecte a Xadow Key Board à placa principal RePhone por meio do conector de 36 pinos. Tenha em mente que o cabo deve ser inserido de forma firme e plana e, o mais importante, mantenha o lado “TOP” voltado para cima.

2. Insira a antena

3. Insira um cartão SIM nano 2G

4. Conecte a bateria Lipo à placa principal RePhone por meio da interface de bateria.

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/IMG_2275.JPG)

## Execute um código de teste

**RePhone_Menu_GSM**

Etapa 1. Instale o Rephone Core 2G-Atmel32u4, clique [aqui](https://wiki.seeedstudio.com/pt-br/RePhone_core_2G-Atmel32u4/#arduino-ide) para ver as instruções completas.

Etapa 2. Encontre o exemplo e faça o upload para sua placa

Depois que você tiver instalado o Rephone Core 2G-Atmel32u4 na IDE do Arduino, os exemplos básicos também serão incluídos e você poderá encontrá-los na seção de exemplos.

Os exemplos incluem:
- Atmel32u4_gprs.h
- TimerOne.h
- Rephone_lcm.h
- Rephone_button.h
- Rephone_menu_gsm

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Example%20code.png)

Etapa 3. Faça uma chamada telefônica para você mesmo

- Se o exemplo for enviado com sucesso, a tela será ligada e você poderá ver o menu principal como abaixo.

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Main%20Manu.JPG)

- Clique no botão direito para selecionar a interface de chamada telefônica

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Call.JPG)

- Digite seu número e, em seguida, clique no botão direito para escolher "Go"

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Del.JPG)

Então você receberá uma chamada telefônica do Retro Phone.

##  Comunidade RePhone
---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

Estamos procurando um lugar melhor onde nossos apoiadores (usuários do RePhone) possam se reunir, de forma acolhedora e confortável, conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E então aqui está, a Comunidade RePhone.

Agora junte-se a nós na [Comunidade RePhone](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Juntos buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.


## Visualizador Online do Esquemático do RePhone core 2G Atmel32u4

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Visualizador Online do Esquemático da Xadow - Key Board

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- [Esquemático do RePhone core 2G Atmel32u4 em PDF](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [Esquemático do RePhone core 2G Atmel32u4 em Eagle](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip)
- [Esquemático da Xaodw - Key Board em PDF](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/Xadow%20-%20Key%20Board%20v1.0.pdf)
- [Esquemático da Xadow - Key Board em Eagle](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip)
- [Driver para RePhone core 2G Atmel32u4](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20driver.zip)
- [Datasheet do ETA6003](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/ETA6003.pdf)
- [Comandos AT do SIM800](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/SIM800_AT.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
