---
description: Rede Zigbee com XBee Series 2 e produtos Seeed
title: Rede Zigbee com XBee Series 2 e produtos Seeed
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/
---

<!-- 1.  This step-by-step tutorial is created to help users learn to use XBee ZB modules with [ Seeeduino](/pt-br/Seeeduino_V2.2 "Seeeduino V2.2") / Arduino, [XBee® Shield](/pt-br/XBee_Shield "XBee® Shield"), [UartSBee_V3.1](/pt-br/UartSBee_V3.1 "UartSBee_V3.1"), [Grove - XBee Carrier](/pt-br/Grove-XBee_Carrier "Grove - XBee Carrier"), Seeeduino Stalker v2.0. These products makes life easier for working with XBee ZB modules. -->

2.  Os módulos XBee ZB podem ser usados de muitas maneiras diferentes. Eles também oferecem muitos parâmetros de configuração. Neste tutorial, tentamos mostrar as configurações essenciais em etapas simples.
3.  <font color="darkred"> Leia todo o tutorial pelo menos uma vez antes de decidir qual configuração usar na sua aplicação. </font>

4.  Este tutorial faz uso de módulos **XBee Series 2** e não utiliza os antigos módulos Series 1. Vendemos módulos Series 2 em nosso Bazaar.

##  Módulos e Rede Zigbee

**Zigbee** é um padrão para dispositivos sem fio de baixo consumo e curto alcance, baseado em um padrão **IEEE 802** para redes de área pessoal (**PAN**). Os módulos Zigbee funcionam na banda ISM (Industrial, Scientific, Medical) não licenciada. Dispositivos Zigbee são capazes de comunicação ponto a ponto, ponto a multiponto e em malha. Eles oferecem soluções sem fio de baixo consumo convenientes para sistemas embarcados onde o consumo de energia é um fator crítico. Uma rede Zigbee consiste em três tipos diferentes de dispositivos ZigBee: **coordenador**, **roteador**, **dispositivo final**. Cada rede possui um **PAN ID** de 16 bits. Todos os dispositivos em uma rede Zigbee recebem um único PAN ID.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Zigbee_Network_Topology.jpg)

###  Tipos de Dispositivos

*   **ZigBee coordinator (ZC)**: O dispositivo mais capaz; o coordenador forma a raiz da árvore de rede e pode fazer ponte com outras redes. Deve haver um coordenador ZigBee em cada rede, já que é o dispositivo que inicia a rede originalmente. O coordenador inicia uma Rede de Área Pessoal (PAN) selecionando um canal de RF e um PAN ID. O ZC também permite que roteadores e dispositivos finais ingressem na PAN. Ele é capaz de armazenar informações sobre a rede, atuando inclusive como Trust Center e repositório de chaves de segurança.

*   **ZigBee Router (ZR)**: Além de executar uma função de aplicação, um roteador pode atuar como roteador intermediário, repassando dados de outros dispositivos. Um roteador só pode iniciar a operação quando tiver estabelecido conexão com o **ZC**

*   **ZigBee End Device (ZED)**: Contém apenas funcionalidades suficientes para se comunicar com o nó pai (seja o coordenador ou um roteador); ele não pode retransmitir dados de outros dispositivos. Esse relacionamento permite que o nó permaneça em modo de suspensão por uma parte significativa do tempo, garantindo assim longa vida útil à bateria. Um ZED deve ingressar em uma PAN como um roteador antes de enviar qualquer dado de sensor. Um ZED requer a menor quantidade de memória e, portanto, pode ser menos caro de fabricar do que um ZR ou ZC.

###  Endereçamento de Dispositivos

*   Quando um dispositivo se conecta a uma rede Zigbee, ele obtém um **endereço de rede de 16 bits**.

*   Cada dispositivo (nó) possui um **endereço de dispositivo de 64 bits**. Nos módulos XBee ZB, esse endereço de 64 bits é um número permanente e exclusivo atribuído pelo fabricante. Este também é o número de série do dispositivo.

Qualquer dado enviado de um dispositivo Zigbee para outro é enviado especificando o Endereço de Rede de 16 bits e o Endereço de Dispositivo de 64 bits.

##  Obtendo módulos Zigbee

O **Seeedstudio Bazaar** atualmente vende dois tipos de módulos Zigbee da [digi](http://www.digi.com/) :

*   [XBee® RF Modules ZNet 2.5 RF Module](https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142) e

*   [XBee® Pro Series 2 RF module](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-rf-modules-znet-25-1-mw-chip-antenna-p-226.html?cPath=139_142).

[XBee® RF Modules ZNet 2.5 RF Module](https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142) são módulos de hardware **Series 2** que vêm com **firmware ZNet 2.5**.

Neste tutorial vamos usar o **firmware XBee ZB** em um **Módulo XBee Znet 2.5**. Os módulos **XBee ZNet 2.5 Module** podem ser atualizados para firmware **XBee ZB** seguindo o procedimento listado em [Converting a XBee/XBee-PRO ZNet 2.5 Module to a ZB Module](http://www.digi.com/support/kbase/kbaseresultdetl.jsp?id=3025). Esse procedimento também é ilustrado na próxima seção.

##  Hardware XBee ZB e Layout de Pinos

*   O módulo XBee ZB está disponível com antena em chip.

[https://www.seeedstudio.com/depot/images/product/xbee2.jpg](https://www.seeedstudio.com/depot/images/product/xbee2.jpg)

*   Os pinos do módulo XBee ZB são mostrados abaixo.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_PinOut.jpeg)

##  Atualizando o firmware do XBee com UartSBee_V3.1 ou Grove - XBee Carrier

<!-- The XBee modules have to be configured with a 3.3V logic UART. Both [UartSBee_V3.1](/pt-br/UartSBee_V3.1 "UartSBee_V3.1") and [Grove - XBee Carrier](/pt-br/Grove-XBee_Carrier "Grove - XBee Carrier") comes with **FT232RL based USB to Serial Port** and a XBee compatible socket. -->

###  Instalando drivers para a Porta USB-Serial

<!-- *   If you are using [UartSBee_V3.1](/pt-br/UartSBee_V3.1 "UartSBee_V3.1") set the power switch to 3.3V before connecting to PC. [Grove - XBee Carrier](/pt-br/Grove-XBee_Carrier "Grove - XBee Carrier") always works 3.3V logic. -->
<!-- *   Connect the **XBee ZB** to XBee socket of [UartSBee_V3.1](/pt-br/UartSBee_V3.1 "UartSBee_V3.1") or [Grove - XBee Carrier](/pt-br/Grove-XBee_Carrier "Grove - XBee Carrier") like this : -->
<table>
<tr>
<th>XBee ZB connected to UartSBee_V3.1 for configuration</th>
<th>XBee ZB connected to Grove - XBee Carrier for configuration</th>
</tr>
<tr>
<td>![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_UartSBee.jpg)</td>
<td>![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_Stem-XBee-Carrier.jpg)</td>
</tr>
</table>

*   Instale o driver necessário para o chip **FT232RL** seguindo os passos abaixo:

####  **Windows**

*   No Windows, na primeira vez que você conectar o dispositivo (UartSBee ou Grove -XBee Carrier), pode ser solicitado o driver.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Detected_Windows.JPG)

Baixe e instale o driver de **porta COM virtual** no site da FTDI:

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

*   Um assistente será aberto para instalar o driver. Escolha "Install from a list or specific location"

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_1.JPG)

*   Escolha o caminho onde o driver foi baixado

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.JPG)

*   Se você baixou um driver não assinado, a seguinte janela aparecerá. Basta clicar em "Continue Anyway"

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.1.JPG)

*   O driver do **UartSBee** foi instalado com sucesso. O Windows atribui um nome de porta **COM** ao **FT232RL**, como **COM10**, **COM11** etc. Verifique o nome exato no Gerenciador de Dispositivos. Neste caso, "**COM16**" foi atribuído ao UartSBee

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_3.JPG)

#####  **GNU/Linux**

Todos os sistemas **GNU/Linux** modernos vêm com drivers para o FT232RL. Para verificar se o UartSBee ou o Grove -XBee Carrier foi detectado, execute o comando **lsusb**. Uma saída semelhante à abaixo deve aparecer.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Lsub.png)

O **GNU/Linux** atribui **/dev/ttyUSB0**, **/dev/ttyUSB1** etc. como nome de dispositivo.

###  Usando o software X-CTU (XCTU) da Digi

**X-CTU** é a ferramenta de **C**onfiguração e **T**este de **X**Bee (**U**tility). Ela é usada principalmente para configurar **módulos XBee** da **Digi** e também para atualizar o firmware do MCU onboard. Vem com um **Serial-Terminal** para interagir com o modem XBee usando comandos **AT**. O X-CTU é um aplicativo para Windows. Porém, sabe-se que funciona no GNU/Linux usando o [Wine ](http://www.winehq.org/).

*   Baixe o X-CTU na [página X-CTU da Digi](http://www.digi.com/support/productdetl.jsp?pid=3352&amp;osvid=57&amp;s=316&amp;tp=5&amp;tp2=0)

*   Instale o X-CTU.

*   Abra o X-CTU --&gt; Aba PC Settings.

*   Selecione a porta USB Serial (que está conectada ao UartSBee / Grove - XBee Carrier).

*   Clique no botão Test / Query

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU1.jpeg)

*   Uma caixa de diálogo mostra o **Modem Type**, **Modem firmware Version** e **Serial Number**.

*   Neste caso, o modem XBee ZNet 2.5 é exibido como **XB24-B**. Ele deve ser atualizado para o firmware **XB24-ZB**.

*   Abra a aba Modem Configuration.

*   Clique no botão Download New Versions.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_Update_Firmware.jpeg)

*   Isso abre a seguinte caixa de diálogo:

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Sources.jpeg)

*   Clique no botão Web. Isso faz o download de todos os firmwares de dispositivos do servidor da Digi.

*   Uma vez que os firmwares mais recentes são baixados, é exibido um resumo da atualização. Isso indica que a atualização ocorreu sem nenhum problema. Se você não obtiver essa caixa de diálogo, repita as etapas acima.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Summary.jpeg)

*   Abra a aba Modem Configuration.

*   Clique em Modem Parameters and Firmware --&gt; botão Read.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZNet2.5_firmware_detected.jpeg)

*   O firmware XBee ZNet 2.5 XB24-B é detectado e todos os seus parâmetros configurados são exibidos.

*   Ele também mostra o **Function Set** do firmware como **ZIGBEE ROUTER/END DEVICE AT** e a versão como **1220**.

*   O **Function Set** determina qual firmware já está programado / será programado no Módulo XBee. Dispositivos da Série 2 podem ser usados em muitos modos diferentes (**ZC ou ZR, ZED**). Precisamos escolher o conjunto de função de firmware apropriado.

*   Agora, atualize o firmware para **XB24-ZB**. (<font color="redorange">Observe que não estamos usando o firmware **XB24-B**, estamos usando um conjunto de firmware diferente compatível com o hardware do módulo XBee ZNet 2.5</font>)

*   Selecione Modem:XBEE como **XB24-ZB**

*   Selecione Function Set como **ZIGBEE COORDINATOR AT**.
    *   Observação: **ZIGBEE COORDINATOR AT** é um conjunto de função que usaremos na próxima seção. Você pode escolher qualquer conjunto de função que seja adequado para a sua aplicação.

*   Selecione a versão mais recente do firmware. No momento da escrita deste guia, é **208C**

*   Clique no botão Write. Isso grava permanentemente o firmware no módulo XBee.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZB_Firmware_Upgrade.jpeg)

##  Demo de UART sem fio usando módulos XBee ZB e PC

Este demo configura dois módulos XBee para se conectarem automaticamente um ao outro ao serem ligados e continuamente transmitir e receber dados. Esta configuração pode ser usada como uma UART sem fio para conectar dois PCs ou dois MCUs com portas seriais.

<!-- *   Use two [UartSBee_V3.1](/pt-br/UartSBee_V3.1 "UartSBee_V3.1") or two [Grove - XBee Carrier](/pt-br/Grove-XBee_Carrier "Grove - XBee Carrier") with two XBee ZB modules. -->

*   Conecte esses módulos à porta serial dos PCs e certifique-se de que os drivers estejam instalados.

*   Abra o X-CTU, selecione as portas USB-Serial do dispositivo como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_1.png)

*   Programe um módulo com o firmware de conjunto de função **COORDINATOR AT** e o outro módulo com o firmware de conjunto de função **ROUTER AT**. Sempre use a versão mais recente do firmware. Veja a seção acima sobre como programar o firmware.

*   Agora, abra a aba Modem Configuration e configure os endereços de destino de ambos os módulos da seguinte forma:

    *   Defina o endereço de destino alto do COORDINATOR para o número de série alto do ROUTER.

        *   Defina o endereço de destino baixo do COORDINATOR para o número de série baixo do ROUTER.

        *   Defina o endereço de destino alto do ROUTER para o número de série alto do COORDINATOR.
    *   Defina o endereço de destino baixo do ROUTER para o número de série baixo do COORDINATOR.

        *   Grave esses parâmetros nos módulos.

*   O PAN ID não foi modificado durante a configuração dos parâmetros. Ele foi deixado em 0, já que há apenas uma rede Zigbee nas proximidades. Você pode querer mudar esses PAN IDs (de ambos os módulos) para um número de 16 bits.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_2.png)

*   Abra as abas Terminal para ambos os módulos e clique nos botões Show Hex.

*   Digite uma mensagem no terminal do COORDINATOR e ela será enviada ao ROUTER via sem fio. Da mesma forma, qualquer texto digitado no terminal do ROUTER é enviado ao terminal do COORDINATOR.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_3.png)

##  Demo de UART sem fio usando módulos XBee ZB e Arduinos

##  Demo de Redes de Sensores Sem Fio (WSN) com módulos XBee ZB

<!-- ###  Configuring a standalone sensor nodes using XBee ZB module and [Grove - XBee Carrier](/pt-br/Grove-XBee_Carrier "Grove - XBee Carrier")

###  Configuring a Zigbee Coordinator using XBee ZB module, Seeeduino and [XBee® Shield](/pt-br/XBee_Shield "XBee® Shield") -->

<!-- ###  Using Seeeduino as Internet Gateway using XBee ZB module,[Wifi Bee](/pt-br/Wifi_Bee "Wifi Bee") and [Bees Shield](/pt-br/Bees_Shield "Bees Shield") -->

##  Referências

*   Página da Wikipedia sobre Zigbee - [Device types ](https://en.wikipedia.org/wiki/ZigBee#Device_types) (CC-BY-SA)

##  Projetos Relacionados

Se você quiser fazer alguns projetos incríveis com XBee, aqui estão alguns projetos para referência.

###  Hummingbird

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot.JPG)

<!-- This is an interesting demo made by XBee and [Grove](/pt-br/Grove_System "Grove System"). -->

Este projeto usa uma malha zigbee e um cartão GPRS SIM900 para se comunicar com um servidor. O servidor realiza uma análise dos dados e fornece ao usuário informações em tempo real, bem como previsões.

[<font color="#FF0000">**Eu quero fazê-lo.**</font>](https://www.seeedstudio.com/recipe/265-hummingbird.html)

###  Projeto de Caldeira Solar de Água Quente

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot1.JPG)

<!-- This is an IoT demo made by XBee and [Grove](/pt-br/Grove_System "Grove System"). -->

Uma caldeira solar é ótima porque fornece água quente usando energia gratuita do sol, mas e se não houver sol suficiente ou alguém já tiver usado toda a água quente? Este projeto ajuda você a tomar a decisão certa. Ele o avisa quando você ficar sem água quente e permite ligar o aquecimento elétrico. Ele também o informa quando você pode tomar um banho de banheira ou chuveiro!

[<font color="#FF0000">**Eu quero fazê-lo.**</font>](https://www.seeedstudio.com/recipe/168-hot-water-solar-boiler-project.html)

###   Compartilhe Seus Projetos Incríveis Conosco

Nascido com o espírito de fazer e compartilhar, é isso que acreditamos que faz um maker.

E é apenas por causa disso que a comunidade de código aberto pode ser tão próspera como é hoje.

Não importa quem você é e o que você fez, hacker, maker, artista e engenheiro,

contanto que você comece a compartilhar seus trabalhos com outras pessoas,

você está fazendo parte da comunidade de código aberto e está fazendo suas contribuições.

Agora compartilhe seus projetos incríveis conosco no [Recipe](https://www.seeedstudio.com/recipe/), e ganhe a chance de se tornar um Usuário Core da Seeed.

*   Usuários Core são aqueles que demonstram alto interesse e contribuições significativas nos produtos da Seeed.
*   Nós cooperamos com nossos Usuários Core no desenvolvimento de nossos novos produtos, ou seja, em outras palavras, os Usuários Core terão a chance de experimentar quaisquer novos produtos da Seeed antes de seu lançamento oficial e, em troca, esperamos feedback valioso deles para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E, na maioria dos casos, se nossos Usuários Core tiverem boas ideias para fazer coisas, nós ofereceremos peças de hardware, serviços de PCBA, bem como suporte técnico. Além disso, uma cooperação comercial posterior com os Usuários Core é altamente possível.

<font color="#FF0000">Para obter mais informações sobre Usuário Core, envie um e-mail para: recipe@seeed.cc</font>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
