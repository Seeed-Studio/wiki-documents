---
title: Adaptador USB para UART 5V
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /USB_To_Uart_5V
last_update:
  date: 02/03/2022
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/USB_To_Uart_5V/
---
<!-- ---
name: USB To Uart 5V
category: Essentials
bzurl: https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html
oldwikiname:  USB To Uart 5V
prodimagename:  USB_To_Uart_5V_photo.jpg
surveyurl: https://www.research.net/r/USB_To_Uart_5V
sku:  103990051
--- -->
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_photo.jpg)

USB To Uart 5V é um adaptador USB para serial, que é baseado no CH340. O CH340 é um chip conversor de barramento USB e pode realizar conversão de USB para interface serial, USB para infravermelho IrDA ou USB para interface de impressora. Este módulo pode ser usado para fazer upload de código ou para comunicação com MCUs.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html)

## Recursos

---

- Interface de dispositivo USB de velocidade plena, em conformidade com a Especificação USB Versão 2.0

- Suporta taxa de baud variando de 2400bps a 115200bps.

- Interface serial full duplex por hardware, com buffer de transmissão/recepção configurado

- Indicador LED

## Especificação

---

- Tensão de Trabalho: DC 5V

- Corrente de Trabalho &lt;10mA

- Sistema Operacional: Windows, Linux, Mac

## Função das Interfaces

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5v_interface.jpg)

- ①: Indicador de Energia
- ②: Micro USB

- ③: Indicador TX

- ④: Indicador RX
- ⑤: Quebra de Uart

## Uso

---
**Instalação do Driver**

USB To Uart 5V/3V3 é usado como interface USB para porta serial. É necessário instalar o driver.

**Windows/Linux**

Totalmente compatível com programas de aplicação serial no sistema operacional Windows do computador

- 1) Conecte-o ao computador pela porta USB.

- 2) Espere um minuto, você poderá encontrá-lo no Gerenciador de Dispositivos.

- 3) Se você não conseguir encontrar a porta, faça o download do driver a partir [daqui](http://wch-ic.com/download/list.asp?id=127)

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/CH340_Driver.jpg)

**Mac OS**

Download do driver:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

No Mac OS Yosemite:

- 1) Instale o driver CH340

- 2) Abra o programa Terminal (localizado em /Applications/Utilities/)

- 3) Digite o comando: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

- 4）Digite a senha;

- 5）Reinicie o computador;

Se você quiser restaurar as configurações do seu Mac, pode sair do modo de desenvolvedor redefinindo o boot-arg para suas configurações anteriores, ou limpar seus boot-args da seguinte forma:  sudo nvram -d boot-args

**Hardware**

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_Download.jpg)

Você deve conectar seu circuito desta forma.

### Exemplo

Podemos fazer download de código para o Seeeduino Ethernet usando o USB To Uart 5V.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_Usage.jpg)

Observe que você deve selecionar o tipo de placa e a porta COM corretos.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="res/USB_To_Uart_5V_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Arquivo Eagle USB To Uart 5V v1.0](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_Eagle.zip)

- [Esquemático em pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_v1.0_SCH.pdf)

- [Datasheet do CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
