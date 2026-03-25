---
description: Grove - Bee Socket
title: Grove - Bee Socket
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Bee_Socket
sku: 103020002
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Bee_Socket/
---

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_01.jpg)

Grove - Bee Socket é um adaptador da série XBee que pode conectar módulos sem fio ao Arduino, como WIFI Bee, RF Bee, Bluetooth Bee, etc. É compatível com Arduino e mais eficiente para realizar operações de rede ponto a ponto e mesh executadas por módulos sem fio. O regulador CJT1117 garante ao XBee uma tensão estável de 3,3 V. Os LEDs podem exibir claramente os modos de funcionamento do Grove.
<!-- Grove-Bee Socket has the same functions as [XBee Shield](/pt-br/XBee_Shield_V2.0). Grove-Bee Socket and Arduino are connected by cables, and XB Shield is a standard adapter that can plug to Arduino. -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Bee-Socket-p-1449.html)


##  Características
---
*   Soquete Bee padrão e interface Grove

*   Regulador de 3,3 V onboard para alimentar seu XBee

*   Circuito de mudança de nível

*   Botão de reset para módulos Bee

*   LEDs para operações Bee

##  Função da Interface
---
![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_Interface.jpg)

**J1:** Interface Grove, usada para conectar à interface UART do Arduino/Seeeduino.

**J2,J3:** Conexão breakout para cada pino do XBee.

**J4,J5:** Soquetes Bee

**U1:** CI CJT1117, regulador linear de baixa queda. Usado para alimentar 3,3 V para módulos XBee.

**U2,U3:** CI SN74LVC1G125, protege seu XBee de sinais de 5 V, convertendo-os para 3,3 V.

**Indicador RSSI:** Indicador de intensidade de sinal RX do XBee.

**LED PWR:** Indicador de alimentação.

**Indicador ASSOC:** Indicador de associação do XBee.

**LED ON/SLEEP:** Indicador de status do módulo XBee.

##  Uso
---
Usando o Grove - Bee Socket, é fácil controlar módulos Bee com Arduino/Seeeduino. Aqui, tomando o RF Bee como exemplo, mostraremos como usá-lo.

*   Conecte o módulo XBee ao Bee Socket.

*   Em seguida, conecte o Grove - Bee Socket à interface UART do Arduino/Seeeduino usando um cabo Grove. E conecte seu Arduino/Seeeduino ao computador por meio de um cabo USB para ligá-lo.

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Grove-Bee_Socket.jpg)

*   Agora você pode enviar alguns comandos AT simples para fazer algumas configurações básicas para o RF Bee e enviar/receber dados. Claro, você pode atualizar o firmware sem alterar a conexão de hardware.

Se você precisar de mais informações sobre como se comunicar, consulte as páginas WIKI dos módulos Bee relevantes.


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Recurso
---
[Bee Socket Eagle File](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
