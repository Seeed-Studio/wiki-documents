---
title: DSO Nano
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DSO_Nano/
slug: /DSO_Nano
sku: 109990028
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/DSO_Nano/
---
O DSO Nano é um osciloscópio portátil de um canal, adequado para medições rápidas em campo e muito mais. Você vai achá-lo muito simples de usar, mas ainda assim é uma ferramenta pequena e bastante impressionante.

Sendo um projeto novo e dinâmico de hardware aberto e código aberto, as informações tendem a ficar bastante dispersas. Esta página tentará reunir as informações mais relevantes em um único lugar, a fim de ajudar os recém-chegados a se orientarem pela grande quantidade de material não organizado já disponível.

Clique na imagem para acessar diferentes versões do DSO Nano.

|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanointro.jpg)](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanov2intro.jpg)](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Nano_v3.jpg)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)|

<div>
  |:---:|:---:|:---:|
  |[DSO Nano v1](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)<br />**(Descontinuado)**|[DSO Nano v2](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)<br />**(Descontinuado)**|[DSO Nano v3](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)
</div>

##   Detalhes de hardware
---
Até agora houve três versões principais do DSO Nano, o original em 2009 e o DSO Nano V2 em 2010. (Uma atualização significativa de hardware, incluindo canais duplos, foi introduzida com o [DSO Quad](https://wiki.seeedstudio.com/pt-br/DSO_Quad).) Além da unidade de carregamento aprimorada no V2 e de uma placa de circuito impresso redesenhada, as especificações são praticamente as mesmas. Eles podem usar o mesmo firmware.

Uma foto do interior do V2 foi publicada no [fórum](https://community.seeedstudio.com/discover.html?t=DSO).

<table >
<tr>
<td> CPU</td>
<td> ARM Cortex™-M3 (STM32F103VBT6)</td>
</tr>
<tr>
<td> RAM</td>
<td> 20k</td>
</tr>
<tr>
<td> Flash ROM</td>
<td> 128k</td>
</tr>
<tr>
<td> Frequência de clock</td>
<td> 72MHz</td>
</tr>
<tr>
<td> Display</td>
<td> LCD TFT Colorido de 2,8″</td>
</tr]
<tr>
<td> Resolução do display</td>
<td> 320×240</td>
</tr>
<tr>
<td> Cor do display</td>
<td> 65K</td>
</tr>
<tr>
<td> Conexão com PC via USB</td>
<td> como leitor de cartão SD</td>
</tr>
<tr>
<td> Atualização</td>
<td> por bootloader via USB</td>
</tr>
<tr>
<td> Fonte de alimentação</td>
<td> Bateria de lítio recarregável de 3,7 V / USB (controlador de carregador LTC4054)</td>
</tr>
</table>

##   Atualizando o firmware
---
O DSO Nano que você tem em mãos levou algum tempo para chegar até você; é bem provável que uma versão mais recente do firmware já esteja disponível.

O firmware mais recente de BenF está disponível no [Tech Support](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1793)(Este link está quebrado; se você estiver procurando o firmware, consulte o wiki do [DSO Nano V3](https://wiki.seeedstudio.com/pt-br/DSO_Nano_v3/)) fórum. Dentro do arquivo ZIP você também encontrará o manual de operação para esta versão do firmware.

Para atualizar o firmware para a versão mais recente, você tem algumas opções:

*   Se você trabalha com Windows, siga as instruções contidas no [Manual do Usuário v2](https://files.seeedstudio.com/wiki/DSO_Nano/res/DSO%20Nano%20v2%20Manual.pdf) oficial (páginas 8-10). O utilitário necessário DfuSeDemo.exe também está disponível [aqui](http://dsonano.googlecode.com/files/um0412.zip).
*   No Linux e no Mac OS X você pode usar o [Dfu-util](https://wiki.seeedstudio.com/pt-br/Dfu-util) (0.5 ou mais recente).

##   Capacidades
---
<table >
<tr>
<td> Largura de banda analógica</td>
<td> 0 - 1MHz</td>
</tr>
<tr>
<td> Taxa máxima de amostragem</td>
<td> 1Msps 12Bits</td>
</tr>
<tr>
<td> Profundidade da memória de amostragem</td>
<td> 4096 pontos</td>
</tr>
<tr>
<td> Sensibilidade horizontal</td>
<td> 1μS/Div～10S/Div (passos 1-2-5)</td>
</tr>
<tr>
<td> Posição horizontal</td>
<td> ajustável com indicador</td>
</tr>
<tr>
<td> Sensibilidade vertical</td>
<td> 10mV/Div～10V/Div (com sonda ×1)</td>
</tr>
<tr>
<td></td>
<td> 0.5V/Div～100V/Div (com sonda ×10)</td>
</tr>
<tr>
<td> Posição vertical</td>
<td> ajustável com indicador</td>
</tr>
<tr>
<td> Impedância de entrada</td>
<td> &gt;500KΩ</td>
</tr>
<tr>
<td> Tensão máxima de entrada</td>
<td> 80Vpp (com sonda ×1)</td>
</tr>
<tr>
<td> Acoplamento</td>
<td> DC</td>
</tr>
<tr>
<td> Modos de disparo</td>
<td> Auto, Normal, Único, Nenhum e Varredura</td>
</tr>
<tr>
<td> Funcionalidades:</td>
<td> Medição automática: frequência, ciclo, duty,</td>
</tr>
<tr>
<td></td>
<td> V<sub>pp</sub>, V<sub>ram</sub>, V<sub>avg</sub> e tensão DC</td>
</tr>
<tr>
<td></td>
<td> Medição vertical precisa com marcadores</td>
</tr>
<tr>
<td></td>
<td> Medição horizontal precisa com marcadores</td>
</tr>
<tr>
<td></td>
<td> Disparo em borda de subida/descida</td>
</tr>
<tr>
<td></td>
<td> Nível de disparo ajustável com indicador</td>
</tr>
<tr>
<td></td>
<td> Sensibilidade de disparo ajustável com indicador</td>
</tr>
<tr>
<td></td>
<td> Recurso de manter/executar</td>
</tr>
<tr>
<td> Sinal de teste</td>
<td> Integrado 10Hz～1MHz (passos 1-2-5)</td>
</tr>
<tr>
<td> Armazenamento de forma de onda</td>
<td> Cartão SD</td>
</tr>
<tr>
<td> Conexão com PC via USB</td>
<td> como leitor de cartão SD</td>
</tr>
</table>

##   Recursos
---
*   Visite nosso [fórum DSO Nano](https://community.seeedstudio.com/discover.html?t=DSO) para suporte técnico rápido e discussão de uso.
*   [Firmware oficial, esquemáticos e documentação de desenvolvimento](http://code.google.com/p/dsonano/)

*   [Árvore git do código-fonte do firmware da comunidade](https://gitlab.com/dsonano/dso-firmware) (para gcc e IAR)

*   [Modifique a interface do usuário do seu DSO Nano](https://files.seeedstudio.com/wiki/DSO_Nano/res/DSOUI.pdf)

*   [Sewa Mobil Jakarta](http://www.awanirentcar.com), [Aksesoris mobil](http://kiosauto.com)

## Suporte Técnico e Discussão sobre o Produto
 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>