---
description: Breakout para LinkIt Smart 7688
title: Breakout para LinkIt Smart 7688
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Breakout_for_LinkIt_Smart_7688
sku: 103100002
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Breakout_for_LinkIt_Smart_7688/
---

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_product_view_1200.jpg)

:::danger
Devido ao encerramento do MediaTek Labs, todos os links relacionados se tornaram inválidos. Se você precisar baixar arquivos relevantes, pesquise-os no seguinte link: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

**Breakout for LinkIt Smart 7688** é uma placa de expansão integrada com portas Grove para a placa de desenvolvimento LinkItTM Smart 7688. Esta breakout board economiza muito trabalho e torna a prototipagem mais fácil por meio de cabeamento simplificado. Ela ajuda um iniciante a começar rapidamente. Ela suporta barramentos seriais como I2C, UART. Vem com portas USB, Ethernet e Áudio de 3,5 mm.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-p-2590.html)

##  Recursos
---
*   A interface Grove torna a fiação mais fácil e permite expansões com módulos Grove.

*   USB host

*   Saída de áudio

*   Porta Ethernet

*   Custo-benefício.

##  Ideias de aplicação
---
*   Dispositivo IoT/Gateway.

*   Robótica

*   Dispositivos multimídia inteligentes

*   Ensino e aprendizado

##  Especificação
---
<table>
  <tr>
    <td> Tensão de entrada </td>
    <td> 5.0V(Com porta de alimentação USB)</td>
  </tr>
  <tr>
    <td> Tensão de operação </td>
    <td> 3.3V</td>
  </tr>
  <tr>
    <td colspan="2"> Pinos de debug, pinos Ethernet e pinos USB tipo A host conectam-se ao MT7688, outros pinos conectam-se ao ATmega32U4.</td>
  </tr>
</table>

##  Visão geral de hardware
---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_components_1200_s.jpg)

**Interface Grove**

<!-- Connect rich [Grove](/pt-br/Grove_System) interfaced functional modules. With this kind of ports, you never need jumper wire or soldering work, and you can make more powerful applications with those functional modules. -->

:::note
    **Observação** de que adicionaremos a função de gravação de áudio para esta placa na próxima versão deste produto.
:::

Esta seção mostrará àqueles clientes experientes como adicionar a função de gravação a esta placa.

1.Faça o download do arquivo esquemático no final desta página. Abra o arquivo chamado **Breakout for LinkIt Smart7688 v1.0 brd.pdf** e encontre a seção **MIC Input**. Remova os seguintes componentes: indutor L6 e capacitor C21. Isso adicionará a função de gravação a esta placa. **Observação** este método só funciona se você usar o firmware LinkIt Smart 7688 versão 0.9.3 ou superior.


![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/To_use_recording_function_on_version_1.0.png)



2.Para iniciantes, recomendamos que você compre o Breakout for LinkIt Smart 7688 v2.0 no [bazaar](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html?cPath=122_142).


###  **Lista de peças**

<table>
  <tr>
    <th>Nome das peças</th>
    <th>Quantidade</th>
  </tr>
  <tr>
    <td> Breakout for LinkIt Smart 7688 </td>
    <td> 1PCS </td>
  </tr>
</table>

##  Primeiros passos

###  Material necessário

*   LinkIt Smart 7688 × 1

*   Cabo USB(tipo A para micro tipo-B) × 2

*   Adaptador USB para Serial × 1

*   Jumpers × 3

*   Aparelho de som(com cabo de áudio de 3,5 mm) × 1

*   Pen drive USB(com arquivo de áudio em formato MP3 dentro) × 1

###  Reproduzir música

<!-- 1.Refer [here](/pt-br/LinkIt_Smart_7688#Getting_Started) to connect your LinkIt Smart 7688 to internet.
 -->

:::note
    - Você pode conectar jumpers à porta MT7688 UART2 em vez de soldá-los ao pino 8, pino 9 e pino GND.
    - Em casos raros, você pode não conseguir se conectar à internet com sucesso; reinicie o sistema operacional embarcado.
:::
2.Abra um console com o adaptador USB para Serial.

3.Conecte todas as partes como segue:


![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_demo_connection_1200.jpg)

4.Entre na pasta do USB digitando **cd /Media/USB-A1** no console.

5.Reproduza a música com o utilitário **Madplay**(instalado no OpenWRT) digitando **madplay filename.mp3** no console.

6.Agora você ouvirá a música.



## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Recursos

*   [Arquivos esquemáticos](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)

<!-- *   [LinkIt smart 7688](/pt-br/LinkIt_Smart_7688) -->

*   [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

*   [Link](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142) para comprar um LinkIt Smart 7688.

## Suporte Técnico & Discussão do Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
