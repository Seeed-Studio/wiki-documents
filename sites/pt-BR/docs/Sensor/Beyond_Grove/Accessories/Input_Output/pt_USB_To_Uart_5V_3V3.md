---
description: Adaptador USB para Uart 5V/3V3
title: Adaptador USB para Uart 5V/3V3
keywords:
  - Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /USB_To_Uart_5V_3V3
sku: 103990049
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/USB_To_Uart_5V_3V3/
---

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG)

USB To Uart 5V/3V3 é um adaptador USB para serial, que é baseado no CH340. O CH340 é um chip de conversão de barramento USB e pode realizar conversão de USB para interface serial, USB para infravermelho IrDA ou USB para interface de impressora. Este módulo é compatível com 5V e 3V3 e pode ser usado para fazer upload de código ou para comunicação com MCUs.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html)

## Recursos

---

- Interface de dispositivo USB de alta velocidade, em conformidade com a Especificação USB Versão 2.0

- I/Os compatíveis com 3,3V e 5V.

- Suporta taxas de transmissão variando de 2400bps a 115200bps.

- Interface serial full duplex por hardware, com buffer de transmissão e recepção

- LED indicador

## Especificação

---

- Tensão de operação: DC 5V

- Corrente de operação &lt;10mA

- Sistema operacional: Windows, Linux, Mac

## Função da Interface

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_5V_3V3.jpg)

- ①: Indicador de alimentação
- ②: Micro USB

- ③: Indicador TX

- ④: Indicador RX
- ⑤: Quebra de pinos Uart

- ⑥: Chave VCC: escolha 5V ou 3V3

## Uso

---
**Instalação do driver**

USB To Uart 5V/3V3 é usado como interface de Porta Serial USB. É necessário instalar o driver.

**Windows/Linux**

Totalmente compatível com programas de aplicação serial no sistema operacional Windows do computador

- 1) Conecte-o ao computador pela porta USB.

- 2) Aguarde um minuto e você poderá encontrá-lo no Gerenciador de Dispositivos.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/CH340_Driver.jpg)

- 3) Se você não conseguir encontrar a porta, faça o download do driver a partir de [Aqui](http://www.wch.cn/download/CH341SER_ZIP.html)

**Mac OS**

Download do driver:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

No Mac OS Yosemite:

- 1) Instale o driver CH340

- 2) Abra o programa Terminal (localizado em /Applications/Utilities/)

- 3) Digite o comando: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

- 4) Digite a senha;

- 5) Reinicie o computador;

Se você quiser restaurar as configurações do seu Mac, pode sair do modo desenvolvedor redefinindo o boot-arg para suas configurações anteriores ou limpar seus boot-args da seguinte forma:  sudo nvram -d boot-args

<big>Hardware</big>

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_Download.jpg)

Você deve conectar seu circuito desta forma.

<big>Exemplo</big>

Podemos fazer download de código para o Seeeduino Ethernet usando o USB To Uart 5V/3V3.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg)

Observe que você deve selecionar o tipo correto de placa e a porta COM correta.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Arquivo Eagle USB To Uart 5V/3V3 v1.0](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_Eagle.zip)

- [Esquemático em pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_v1.pdf)

- [Datasheet do CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/CH340DS1_EN.PDF)

## Suporte Técnico & Discussão do Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
