---
title: FSM-55
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/FSM-55/
slug: /FSM-55
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/FSM-55/
---
![](https://files.seeedstudio.com/wiki/FSM-55/img/FSM-55_board.jpg)

FSM-55 (Flying Stone Mini 55) é uma pequena placa para brincar com um display de matriz de LEDs 5x5.
Ela recebeu esse nome por causa de sua matriz de LEDs.

###   Pronúncia

Por favor, diga F-S-M "Go" "Go", já que "Go" é a pronúncia de 5 em japonês.

##   Sua Liberdade de Computação com Produto Reproduzível

###   Projeto de Hardware

O projeto de hardware está disponível como projeto de hardware livre. Ele é desenvolvido com KiCAD.
A licença é CC-BY 3.0 Unported para seu esquema elétrico e CC-BY-SA 3.0 Unported para o projeto de PCB.
(Isto deveria ser descrito em seu README, vou adicionar isso em breve.)

Quando você usar o projeto de PCB para você mesmo, modifique-o para seu próprio propósito. Por favor, não inclua o logotipo da Flying Stone Technology na sua PCB.

*   http://git.gniibe.org/gitweb/?p=fsm-55.git

###   Firmware

O firmware está disponível como Software Livre sob GPLv3+.

*   http://git.gniibe.org/gitweb/?p=chopstx/chopstx.git;h=refs/heads/cortex-m0-support
<pre>$ git clone --branch cortex-m0-support git://git.gniibe.org/chopstx/chopstx.git</pre>

O programa principal está em: diretório example-fsm-55.

Ah, sim. Eu uso minha própria biblioteca de threads para o firmware e a portei para Cortex-M0.

###   Ferramenta

Se você estiver usando Windows no seu PC, a ferramenta do fornecedor funciona bem com CLI. Recebi um relato de que a versão GUI não funciona bem.

Em sistema operacional livre, talvez um OpenOCD mais novo funcione, mas não funcionou para mim (na versão 0.8 no Debian).

Eu uso minha própria ferramenta, originalmente escrita para o Projeto Gnuk (para FST-01).

Eu precisei modificar a ferramenta (stlinkv2.py) para que ela pudesse funcionar com o MCU Cortex-M0.

*   http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git;h=refs/heads/stlink-m0-support
<pre>$ git clone --branch stlink-m0-support git://git.gniibe.org/gnuk/gnuk.git</pre>

Ela foi desenvolvida originalmente para o FST-01. E há algo específico do FST-01, como a verificação da memória flash SPI. Você precisa chamá-la com a opção -i (inibir verificação da memória flash SPI) para FSM-55.

`
`

<pre>$ stlinkv2.py -i ...</pre>

##   Motivos: Ferramentas Livres são muito importantes para nós!

Um dos principais motivos para esta placa (ser desenvolvida) foi o encerramento do FreeRouting.Net.
Embora eu (gniibe) não usasse o serviço, foi um incidente triste. Eu quis informar muitas pessoas sobre o projeto de PCB com ferramentas livres (no sentido de liberdade) e a situação atual.

*   FreeRouting.Net: [http://freerouting.net/](http://freerouting.net/)

Outro motivo para esta placa foi que eu (gniibe) descobri que o suporte SWD do OpenOCD está melhorando, mas ainda não é perfeito. Eu quis ter mais oportunidades de melhorar a situação em torno do OpenOCD e da ferramenta SWD, por mim mesmo.

*   OpenOCD futuro 0.9.0: [http://openocd.sourceforge.net/](http://openocd.sourceforge.net/)

##   Produtos disponíveis no Seeed Bazaar

*   [FSM-55 LED Matrix Display Kit](https://www.seeedstudio.com/depot/FSM55-LED-Matrix-Display-p-2121.html) (Outubro de 2014)

*   <s>[SWD Programmer (ST-Link/V2 clone)](https://www.seeedstudio.com/depot/STLink-V2-for-STM8-STM32-interface-programmer-p-2297.html)</s>(Março de 2015)

*   **NOTA**: Não tenho certeza se o clone ST-Link/V2 funciona para FSM-55. FSM-55 exige o pino NRST conectado ao programador. Se o pino nº 9 do clone funcionar como NRST, estará OK. Mas parece que o pino NRST e o SWIM_RST são diferentes no ST-Link/V2 original.

*   **NOTA**: Eu consegui um clone do ST-Link/V2, mas não consigo encontrar uma maneira de usá-lo. Precisamos descobrir como acionar o pino 9 de SWIM_RST para o NRST do FSM-55. 2015-05-28

*   **NOTA**: O firmware do próprio ST-Link/V2 é software proprietário. Idealmente, ele também deveria ser software livre. Mas, a situação do desenvolvimento de hardware é assim, atualmente. BusPirate ou Versaloon poderiam ser usados, em vez disso, mas ainda não são estáveis o suficiente para SWD.

##   Links

###   Vídeos do protótipo FSM-55

*   [https://www.youtube.com/watch?v=7L2qUNF0v2U](https://www.youtube.com/watch?v=7L2qUNF0v2U)

*   [https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK](https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK)

*   [https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr](https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr)

###   Artigos do desenvolvedor do FSM-55

*   Artigos sobre o FSM-55 escritos por seu desenvolvedor: [http://www.gniibe.org/tag/fsm-55.html](http://www.gniibe.org/tag/fsm-55.html)

###   Filosofia

*   Graham Seaman, Maio de 2001, "Free Hardware Design - Past, Present, Future": [https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html](https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html)

*   Free Software and Free Hardware Designs: [https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html](https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html)

*   Definição de Hardware Aberto em 1998: [https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html](https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html)

*   Definições: [https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html](https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html)

*   Benjamin Mako Hill, Junho de 2010, "Free Software Needs Free Tools": [http://mako.cc/writing/hill-free_tools.html](http://mako.cc/writing/hill-free_tools.html)

###   OSHW (que não é suficiente para o desenvolvedor do FSM-55)

*   Open Source Hardware: [http://freedomdefined.org/OSHW](http://freedomdefined.org/OSHW)

*   [http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions](http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions)

###   Open Design

*   Open Design: [https://en.wikipedia.org/wiki/Open_design](https://en.wikipedia.org/wiki/Open_design)

###   GCC

*   GCC ARM Embedded: [https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)

## Suporte Técnico & Discussão sobre o Produto
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>