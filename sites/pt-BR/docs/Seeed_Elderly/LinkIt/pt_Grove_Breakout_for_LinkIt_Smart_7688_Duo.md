---
description: Grove Breakout para LinkIt Smart 7688 Duo
title: Grove Breakout para LinkIt Smart 7688 Duo
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Breakout_for_LinkIt_Smart_7688_Duo
sku: 103030032
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Breakout_for_LinkIt_Smart_7688_Duo/
---

---
![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Breakout_for_LinkIt_Smart_7688_product_view_1200_s.jpg)

:::danger
Devido ao encerramento do MediaTek Labs, todos os links relacionados se tornaram inválidos. Se você precisar baixar arquivos relevantes, pesquise por eles no seguinte link: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

Grove Breakout para LinkIt Smart 7688 Duo é uma porta Grove integrada e uma placa de expansão de recursos para a placa de desenvolvimento LinkIt Smart 7688 Duo[1]. Esta placa de breakout economizará muito trabalho para prototipagem mais rápida, com o procedimento de fiação simplificado; até mesmo um iniciante com pouco conhecimento de eletrônica pode iniciar um projeto rapidamente. Ela suporta barramentos seriais como I2C, UART e fornece acesso aos pinos originais reservados do LinkItTM Smart 7688 Duo.

[1] LinkItTM Smart 7688 Duo é uma placa de desenvolvimento aberta baseada na distribuição Linux OpenWrt, MT7688 e ATmega32u4. A placa foi projetada especialmente para possibilitar a prototipagem de dispositivos IoT de Aplicações Ricas para Casas Inteligentes.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Breakout-for-LinkIt-Smart-7688-Duo-p-2575.html)

## Recursos
---
- Interface Grove, que torna a fiação mais fácil.
- Mais portas Grove, mais expansão para ricos módulos Grove.
- Custo-benefício.

:::tip
    <!-- More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/) -->
:::
## Ideias de aplicação
---
- Dispositivo IoT/Gateway.
- Robótica
- Dispositivos multimídia inteligentes
- Ensino e aprendizagem

## Especificação
---
- Tensão de entrada:	5,0 V (Com porta de alimentação USB)
- Tensão de operação:	3,3 V
- Pinos de depuração conectados ao MT7688, outros pinos conectados ao ATmega32U4.


## Visão geral de hardware
 ---
 ![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Grove_Breakout_for_LinkIt_Smart_7688_Duo_component_with_text_1200_s.jpg)

:::note
     Como você precisa encaixar o LinkIt Smart 7688 Duo neste breakout, alinhe o lado com o USB micro tipo B do LinkIt Smart 7688 Duo com o lado com a serigrafia Host do Grove Breakout para LinkIt Smart 7688 Duo.
:::
**Interface Grove**

<!-- Connect rich [Grove](/pt-br/Grove_System/) interfaced functional modules. With this kind of ports, you never need jumper wire or soldering work, and you can make more powerful applications with those functional modules. -->

## Primeiros passos

**Materiais necessários**

- LinkIt Smart 7688 Duo × 1
- Cabo USB (tipo A para micro tipo B) × 1
- Adaptador USB para Serial × 1
- Jumpers × 3
- Grove - Buzzer × 1

**Faça algum som com um Grove Buzzer**

<!-- 1.Refer [wiki of LinkIt Smart 7688 Duo](/pt-br/LinkIt_Smart_7688_Duo/) to connect your LinkIt Smart 7688 Duo to internet. -->

:::note
    1. Você pode encontrar o Pino 8, Pino 9 e Pino GND próximos à porta a ser conectada ao LinkIt Smart 7688.
    2. Você pode conectar jumpers na porta MT7688 UART2 em vez de soldá-los aos pinos 8, 9 e GND.
:::
2.Abra um console depois de conectar um adaptador USB para Serial ao LinkIt Smart 7688 Duo.

3.Conecte todas as partes como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

:::note
    Conecte o Grove - Buzzer à porta D4.
:::
<!-- 4.Refer to [wiki of LinkIt Smart 7688 Duo](/pt-br/LinkIt_Smart_7688_Duo/)to build the Arduino environment for LinkIt Smart 7688 Duo platform on host computer. -->

<!-- 5.Download [firmata](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Firmata_to_build_Arduino_IDE_for.zip). Refer to [wiki of LinkIt Smart 7688 Duo](/pt-br/LinkIt_Smart_7688_Duo/) to install Arduino IDE for LinkIt Smart 7688 platform, and flash the file firmata to developent board. -->

:::note
    As etapas a seguir são realizadas no sistema operacional embarcado (OpenWRT).
:::
6.Digite **pip install pyfirmata** no console e pressione Enter para instalar a biblioteca Python pyfirmata.

7.Crie um arquivo chamado buzzer.py digitando vi buzzer.py no console e copie o código abaixo para ele.

```
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```
8.Salve o buzzer.py e digite python buzzer.py para executar o código de exemplo.

9.Agora você ouvirá o zumbido.


## Visualizador de esquema online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivos de esquema](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
