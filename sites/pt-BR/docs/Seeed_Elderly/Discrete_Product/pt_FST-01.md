---
description: FST-01
title: FST-01
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /FST-01
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/FST-01/
---
![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01_board.jpg)

FST-01 é um pequeno computador USB de 32 bits. Na verdade, FST-01 é uma abreviação e seu nome completo é "Flying Stone Tiny ZERO-ONE".

Ele é projetado pela Flying Stone Technology, uma empresa em Maebashi, Gunma, Japão.

O conceito é "Design Minimalista". Ele é um desenho de hardware livre (no sentido de liberdade). As aplicações previstas são Gnuk (o Token Criptográfico para GnuPG) e NeuG (Gerador de Números Verdadeiramente Aleatórios baseado em ruído de ADC). Essas aplicações são Software Livre.

Flying Stone Technology é um fabricante de segunda origem de "Gnuk", cujo copyright pertence à organização sem fins lucrativos Free Software Initiative of Japan.

Para aqueles que querem recursos mais ricos, por favor considere o [Maple Mini](https://www.seeedstudio.com/depot/maple-mini-p-861.html).

```
                        SWD port
                        (GND, SWD-CLK, SWD-IO)
    Power port +---------------------+
           Vdd |[]           []()() -------+
           GND |[]                  |      |
               |()() I/O port       | USB  |
               |      (PA2, PA3)    |      |
               |                    -------+
               +---------------------+
```

Use o [site de perguntas e respostas do FST-01](http://no-passwd.net/askbot/questions/) para suas dúvidas.

|FST-01 sem invólucro|FST-01 com tubo termo retrátil|FST-01 com caixa (P1A-120704U)|
|---|---|---|
|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-without-enclosure-p-1276.html)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-with-heat-shrink-tube-p-1277.html)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-with-white-enclosure-p-1279.html)|

Ele também está disponível na Flying Stone Technology (飛石技術), de pessoa para pessoa. Veja a página [Buy FST-01!](http://www.gniibe.org/shop/buy-fst-01) em gniibe.org (em japonês).

##   Aplicações
---
Como explicado na seção acima, pretendemos executar o [Gnuk](http://www.fsij.org/gnuk/) no FST-01. É um software com copyright distribuído sob a licença **GPLv3**.

![](https://files.seeedstudio.com/wiki/FST-01/img/Gnuk-sticker.png)

Gnuk é uma implementação de Token Criptográfico para GnuPG, e ele roda em STM32F103. O código-fonte está disponível em http://www.gniibe.org/ (https://git.gniibe.org/cgit/chopstx/ttxs.git/)

Para mais informações sobre o Gnuk, visite: [Documentação Oficial do Gnuk](http://www.fsij.org/doc-gnuk/).

Além disso, pretendemos executar NeuG no FST-01.

![](https://files.seeedstudio.com/wiki/FST-01/img/NeuG.png)

[NeuG](http://www.gniibe.org/memo/development/gnuk/rng/neug) é uma implementação de Gerador de Números Verdadeiramente Aleatórios baseado em erro de quantização de ADC.

Observe que apenas uma aplicação pode ser instalada no FST-01 (Gnuk ou NeuG).

###   Ambiente de Desenvolvimento

Para Gnuk 1.0.1, usamos [GCC ARM Embedded 4.6-2012-q2](https://launchpad.net/gcc-arm-embedded/+milestone/4.6-2012-q2-update).

###   Para o primeiro lote de FST-01

Neste produto, ele contém o software com copyright Gnuk versão 1.0.1, que é licenciado sob a **GPLv3**. Uma cópia dessa licença está incluída neste WiKi, veja **GPLv3**.
Você pode obter o Código-Fonte Correspondente completo por um período de três anos após o último envio deste produto, que não será anterior a 2016-01-01, no site do fabricante em http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git e colocamos a tag "release/1.0.1" para a versão do produto.

Observe que o binário do Gnuk no primeiro lote de FST-01 foi compilado com a opção "-O3 -Os" pelo GCC ARM Embedded 4.6-2012-q2.

###   Lista de discussão para Gnuk/NeuG

Temos uma lista de discussão para Gnuk/NeuG: [https://lists.alioth.debian.org/mailman/listinfo/gnuk-users](https://lists.alioth.debian.org/mailman/listinfo/gnuk-users)

Assim como git.gniibe.org, os repositórios de código-fonte estão disponíveis em: [https://anonscm.debian.org/cgit/gnuk/](https://anonscm.debian.org/cgit/gnuk/)

##   Gravação da flash ROM do MCU
---
Usamos a porta SWD para gravar a flash ROM do MCU. Como SWD é algo relativamente novo, ainda não há boas experiências de hardware e software.

Selecionamos o ST-Link/V2 como debugger SWD barato e escrevemos nossa própria ferramenta stlinkv2.py em Python. A ferramenta stlinkv2.py é distribuída junto com o Gnuk. Veja [este artigo](http://www.gniibe.org/memo/development/fst-01/dongle/fst-01-swd-connection) para a conexão do ST-Link/V2 com o FST-01.

O futuro OpenOCD 0.6.0 suportará ST-Link/V2 e SWD. Você poderá usá-lo também.


###   Descrição

FST-01 é a placa STM32F103 mínima, adequada para executar aplicações orientadas a computação como o Gnuk.
- Dimensões: 1,62 x 0,52 polegada (incluindo o conector USB)
- Alimentado pelo barramento USB
- MCU: ARM Cortex M3 de 32 bits a 72MHz (STM32F103TBU6), flash ROM: 128KB, - RAM: 20KB
- Memória Flash SPI: 4MB
- Porta SWD, Dois pinos de E/S
- Conteúdo da Flash ROM do MCU: Como efeito colateral do plano de teste, o FST-01 vem com o Gnuk versão 1.0.1 instalado na flash ROM do MCU e ela é protegida. Você precisa desabilitar a proteção antes de gravar a flash ROM.

Visite esta página para mais detalhes.

**FST-01 sem invólucro**

Esta é uma placa nua para avaliação, desenvolvimento ou para aqueles que querem seus próprios invólucros.

Você pode acessar a porta SWD e alterar o conteúdo da flash ROM.

**FST-01 com tubo termo retrátil**

A placa é coberta por um tubo termo retrátil transparente. Portanto, não é possível acessar a porta SWD.
Isto pode ser usado diariamente como um Token Gnuk.

**FST-01 com caixa (P1A-120704U)**

A placa vem com a caixa. Observe que são os usuários que colocam a placa na caixa.
Isto é melhor se o tubo transparente não combinar com o seu gosto ou se você quiser alterar o conteúdo da flash ROM do MCU.
Embora a PCB do FST-01 seja projetada seguindo a recomendação da especificação da P1A-120704U, a caixa pode ser um pouco maior e você precisará de um pouco de cola para ajustar a placa e a caixa. Caso contrário, a placa poderá se mover um pouco (< 1mm ou algo assim).

##   Histórico
---
*   2011-08-06: [Ideia](http://www.gniibe.org/memo/development/fst-01/fst-01-idea)

*   2011-08-08: Commit inicial no [repositório Git do FST-01](http://www.gniibe.org/gitweb?p=fst-01.git)

*   2011-08-23: Pedido Fusion PCB para PCB de protótipo: #33163

*   2011-08-26: [Wish for FST-01](https://www.seeedstudio.com/wish/?p=783)

*   2011-09-06: Pedido Fusion PCB para PCB de protótipo: #34012

*   2011-09-13: Pedido Fusion PCB para PCB de protótipo: #34217

*   2011-09-30: Pedido Fusion PCB para PCB de protótipo: #35421

*   2011-10-27: Pedido Fusion PCB para PCB de protótipo: #37126

*   2011-11-14: Versão 1.0 do Design da PCB do FST-01 lançada

*   2012-07-10: Enviado para Propagete

*   2012-08-??: Feito o pedido para produção

*   2012-09-27: Produção finalizada para o primeiro lote

    *   Para o primeiro lote, o cristal (XTAL) é alterado para um com capacitância de carga de 20pF. (Por causa da disponibilidade da peça.)

        *   Para o primeiro lote, o conteúdo da flash ROM do MCU é Gnuk 1.0.1 e está protegido.

*   2012-10-08: Início das vendas no Seeed Bazaar

*   2015-04-01: Início das vendas na FSF Shop, com NeuG instalado: [http://shop.fsf.org/product/usb/](http://shop.fsf.org/product/usb/)

##   Design da Placa Livre (no sentido de liberdade)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-schematic.png)

Fst-01-schematic.png

O design da placa está disponível no formato [KiCAD](http://www.kicad-pcb.org/). Visite http://git.gniibe.org/gitweb?p=gnuk/fst-01.git.

O esquema elétrico é distribuído sob a licença Creative Commons Attribution 3.0 Unported (CC BY 3.0).

O design da PCB é distribuído sob a licença Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0).

##   BOM do FST-01
---
<table cellspacing="0">
<caption>BoM do FST-01</caption>
<tr>
<th>Peça #</th>
<th>Nome</th>
<th>Detalhe</th>
<th>Encapsulamento</th>
<th>Fabricante</th>
<th>Distribuidor</th>
<th>referência do distribuidor</th>
</tr>
<tr>
<td>C1</td>
<td>Capacitor</td>
<td>27pF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C2</td>
<td>Capacitor</td>
<td>27pF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C3</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C4</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C5</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C6</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C7</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td]
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C8</td>
<td>Capacitor</td>
<td>4.7uF</td>
<td>C0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C9</td>
<td>Capacitor</td>
<td>0.01uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C10</td>
<td>Capacitor</td>
<td>4.7uF</td>
<td>C0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C11</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>R1</td>
<td>Resistor</td>
<td>510R</td>
<td>R0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>D1</td>
<td>LED</td>
<td>Azul</td>
<td>LED0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>J1</td>
<td>Conector</td>
<td>USB 2.0, 1002-015-01001</td>
<td>Plug USB A Macho</td>
<td>CNC Tech</td>
<td>Digikey</td>
<td>1175-1020-ND</td>
</tr>
<tr>
<td>U1</td>
<td>MCU</td>
<td>STM32F103TBU6</td>
<td>QFN36</td>
<td>STMicroelectronics</td>
<td>AVNET</td>
<td>STM32F103TBU6</td>
</tr>
<tr>
<td>U2</td>
<td>Regulador LDO V</td>
<td>CAT6217-330TDGT3 +3.3V</td>
<td>TSOT23-5</td>
<td>ON Semiconductor</td>
<td>Mouser</td>
<td>698-CAT6217330TD-G</td>
</tr>
<tr>
<td>U3</td>
<td>Terminador USB</td>
<td>NUF2221W1</td>
<td>SOT363</td>
<td>ON Semiconductor</td>
<td>Digikey</td>
<td>NUF2221W1T2GOSTR-ND</td>
</tr>
<tr>
<td>U4</td>
<td>Memória Flash SPI</td>
<td>SST25VF032B-80-4I-QAE-T</td>
<td>WSON8</td>
<td>Silicon Storage Technology</td>
<td>Digikey</td>
<td>SST25VF032B-80-4I-QAE-T-ND</td>
</tr>
<tr>
<td>X1</td>
<td>Cristal</td>
<td>ABM8G-12.000MHZ-18-D2Y-T</td>
<td>3.2mmx2.5mm</td>
<td>Abracon Corporation</td>
<td>Digikey</td>
<td>535-10261-2-ND</td>
</tr>
<tr>
<td></td>
<td>Gabinete</td>
<td>P1A-120704U  White</td>
<td>1.2 x .71 x .40 polegada</td>
<td>New Age Enclosures</td>
<td></td>
<td></td>
</tr>
</table>

##   Componentes do FST-01
---
*   STM32F103TB
*   Memória Flash SPI (32Mbit)
*   Terminador USB
*   Regulador LDO (3.3V)
*   XTAL de 12MHz C<sub>L</sub>=18pF

*   LED
*   Porta SWD de GND/SWDIO/SWDCLK
*   Porta de extensão de VDD/GND/Port0/Port1
*   Plug USB A

**<big>STM32F103TB </big>**

O MCU é baseado em Cortex-M3 ARM da STMicroelectronics. Ele roda a 72MHz, possui 128KB de flash ROM e 20KB de RAM.

**<big>Memória Flash SPI</big>**

Dados sigilosos devem ficar na flash do MCU, mas dados não confidenciais (como backup do chaveiro público) podem ficar na memória flash SPI.

Usamos SST25VF032B (32Mbit = 4MB).

**<big>Terminador USB</big>**

Usamos o Terminador USB Upstream NUF2221W1.

Isso porque ele possui a funcionalidade de proteção contra descarga eletrostática. Também é melhor por ocupar menos área que dois capacitores e dois resistores.

**<big>Regulador LDO</big>**

Usamos CAT6217-330 para Regulador de 3.3V (a partir de 5V). Corrente de 150mA é suficiente.

**<big>XTAL 12MHz C<sub>L</sub>=18pF</big>**

Usamos XTAL de 12MHz C<sub>L</sub>=18pF.

Isso porque podemos encontrar XTAL de área menor para 12MHz (do que para 8MHz).

**<big>LED</big>**

Usamos um LED para mostrar o estado.

**<big>Porta SWD</big>**

A porta SWD serve para instalar firmware na flash ROM do MCU.

**<big>Porta de extensão de VDD/GND/Port0/Port1</big>**

Decidimos ter dois pinos de E/S. (Um pino de E/S não é suficiente nem mesmo para um minimalista.)

Com dois pinos de E/S, pode ser:

*   TX e RX de comunicação serial
*   Drive e entrada de sensor de toque
*   Controle da porta SWD de outro MCU

**<big>Plug USB A</big>**

O uso do FST-01 é apenas conectá-lo à porta USB, como um pendrive USB.

##   Possíveis alterações no circuito e nas peças
---
**<big>Regulador LDO</big>**

MCP1700T-330 seria uma alternativa (a característica elétrica parece pior, mas para o caso de mais corrente). Nesse caso, precisamos mudar um pouco o circuito.

**<big>XTAL</big>**

É possível simplesmente substituir o XTAL por XTAL de 12MHz C<sub>L</sub>=20pF.
Essa mudança está dentro da margem do projeto.

Seria melhor também substituir C1 e C2 por 33pF juntos nesse caso, se você for fazer isso desde o início.

Veja [explicação sobre capacitância de carga na Wikipedia](https://en.wikipedia.org/wiki/Pierce_oscillator#Load_capacitance).

**<big>GND de blindagem para GND de sinal</big>**

O FST-01 é destinado a ser inserido diretamente na porta USB.
Se o uso não for direto, mas conectado por cabo de extensão, é melhor conectar o GND de blindagem e o GND de sinal por resistor (e capacitor se quiser).

Referência:
[http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield](http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield)

**<big>USB_EN</big>**

USB_EN não é necessário, mas o pino 5 do NUF2221W1 pode ser conectado diretamente a 3.3V (Vdd).

Em muitos projetos de placas com STM32F103, vemos algo assim, mas como é possível controlar o USB D+ para ficar em 0V por software, USB_EN não é necessário.

**<big>Sem memória flash SPI por padrão</big>**

O tamanho é um tanto pequeno demais para ser útil, então, poderia ser uma opção especial para usuários e nenhum chip seria OK por padrão.

##   Imagens da PCB
---
As imagens da PCB são geradas por [prettygerbv](http://projects.qi-hardware.com/index.php/p/eda-tools/source/tree/master/fab/prettygerbv).

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-front.png)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-back.png)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-conn.png)

##   Protótipo de Engenharia do FST-01
---

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01-Prototype-PCB.jpg)

FST-01-Prototype-PCB.jpg

Graças ao serviço Fusion PCB, fizemos a PCB do Protótipo de Engenharia do FST-01.

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01-prototype.jpg)

A montagem da PCB foi feita manualmente por **User:Gniibe**. Veja [meu artigo](http://www.gniibe.org/memo/development/fst-01/qfn-diy-soldering) para mais detalhes.

##   Esboço do plano de testes
---
1.  Verificar ID do MCU
2.  Gravar na flash ROM do MCU
3.  Verificar o piscar do LED
4.  Verificar acesso à Flash ROM SPI
5.  Executar um aplicativo que use USB e ver se funciona (Hub atribuindo endereço)
    1.  Na energização (ou reset), o LED acende.
    2.  O aplicativo FST-01 aguarda a atribuição de endereço USB pelo Hub USB. (Leva alguns segundos para o Hub detectar e atribuir endereço ao dispositivo.)
    3.  Após a atribuição de endereço USB, o aplicativo FST-01 entra no loop
            * esperando 5 segundos
            * piscar LED (acende por 25ms,desligado por 200ms).

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
