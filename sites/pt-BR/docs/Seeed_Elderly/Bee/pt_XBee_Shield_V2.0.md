---
description: XBee Shield V2.0
title: XBee Shield V2.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XBee_Shield_V2.0
sku: 103030004
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XBee_Shield_V2.0/
---
![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/Xbeeshield_01.jpg)

A nova versão do XBee Shield é um shield padronizado e empilhável compatível com Arduino. Você pode facilmente empilhar quaisquer módulos da série Bee sobre ele e construir uma rede sem fio para o seu projeto. Além disso, ele também está equipado com função de conversão de nível, que permite uma conversão bidirecional entre níveis de IO altos e baixos. Os pinos digitais reservados facilitam que os usuários selecionem a porta TX/RX usando jumpers.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)

##   Características
---
-  Design de formato padronizado
-  Pode ser configurado conectando o módulo UartSBee à USB
-  Os pinos DIN e DOUT podem ser conectados tanto à UART quanto a outros pinos digitais (D2~D12)
-  Espaço ampliado para o seu próprio desenvolvimento
-  Indicadores de LED


## Visão Geral de Hardware
---
![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_Interface%202.jpg)

- U2：[CJT1117 IC](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf), fornece tensão de 3,3 V para os módulos XBee.
- U3：[SN74LVC1G125 IC](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf), realiza a função de tradutor de nível lógico.

##   Primeiros Passos
---

Aqui mostraremos como este XBee Shield V2.0 funciona com o RF Bee. Também podemos usar o Bluetooth Bee ou outros módulos.

| XBee Shield V2.0 | RF Bee |
|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee%20Shield%20V2.0_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/rfbee1_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)|[Get ONE Now](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|

- Conecte o RF Bee ao XBee Sheild V2.0.

 ![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_connect_RF_XBee.jpg)

- Use um jumper para **conectar XB_TX e Digital 4**. Além disso, use um jumper para conectar **XB_RX e Digital 5**. Claro que você pode alterar a porta digital como quiser. Mas não se esqueça de mudar o número da porta na definição do código de demonstração ao mesmo tempo.

:::note
        As seguintes são as suas limitações conhecidas:
        1. Se você estiver usando múltiplas portas seriais por software, apenas uma pode receber dados por vez.
        2. Nem todos os pinos no Mega e Mega 2560 suportam interrupções por mudança, então apenas os seguintes podem ser usados para RX: 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69
        3. Nem todos os pinos no Leonardo suportam interrupções por mudança, então apenas os seguintes podem ser usados para RX: 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).
:::
Se você precisar de mais informações sobre como se comunicar, consulte as páginas da WIKI dos módulos relevantes.


## Visualizador de Esquemático Online

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip" style={borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}
</div> -->


##   Recursos
---
- **[Eagle]** [Arquivo Eagle do XBee Shield V2.0](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip)
- **[PDF]** [Arquivo de Esquemático do XBee Shield V2.0b](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_v2.0b.pdf)
- **[PDF]** [Arquivo de PCB do XBee Shield V2.0b](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee%20Shield%20v2.0b%20PCB.pdf)
- **[Datasheet]**[CJT1117 Datasheet](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf)
- **[Datasheet]**[SN74LVC1G125 Datasheet](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
