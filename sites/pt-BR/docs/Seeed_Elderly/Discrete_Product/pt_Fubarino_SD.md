---
description: Fubarino SD
title: Fubarino SD
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Fubarino_SD
sku: 102990019
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Fubarino_SD/
---
![](https://files.seeedstudio.com/wiki/Fubarino_SD/img/Fubarinosd.jpg)

Fubarino SD é uma pequena placa microcontroladora de fácil utilização em protoboard. É compatível com chipKIT e MPIDE, o que significa que você pode escrever sketches para ela no MPIDE, que é o fork da IDE Arduino para placas compatíveis com chipKIT. O microcontrolador na placa é um Microchip PIC32MX440F256H.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Fubarino-SD-p-1265.html)

##   Características
---
*   Conector USB ligado ao periférico USB do PIC32.
*   Conector microSD ligado ao periférico SPI de hardware no PIC32.
*   Integração completa e compatibilidade com MPIDE – na verdade, as versões atuais do MPIDE suportam o Fubarino SD como placa de destino.
*   Todos os pinos de E/S e alimentação no formato padrão "DIP" para uso fácil com protoboard.
*   Alimentado pelo conector USB, fonte externa de 3,3 V ou fonte externa de 2,8 V a 13,2 V.
*   15 entradas analógicas (10 bits)
*   45 pinos de E/S digitais
*   Pinos de cabeçalho ICSP se você quiser usar um programador ou depurador de hardware no MPLAB ou MPAB X IDEs (ambos gratuitos da Microchip).
*   Como todas as placas compatíveis com chipKIT, o Fubarino SD pode executar qualquer sketch ou biblioteca Arduino, desde que não acessem diretamente registradores nativos AVR.
*   Toda a E/S opera a 3,3 V, mas muitos pinos de E/S são tolerantes a 5 V.
*   PIC32MX440F256H é um processador de 32 bits rodando a 80 MHz com 256K de Flash e 32K de RAM
*   Pode usar USB (5 V), 3,3 V ou entrada de 2,3 V a 15 V para alimentação
*   Inclui 4 canais DMA, 1 SPI (usado para microSD, mas exposto em pinos), 2 portas I2C, USB (host, function, OTG), 15 canais A/D (10 bits), 5 temporizadores de 16 bits, 5 PWMs de hardware, PMP, etc., como parte do processador PIC32



##   Suporte

Use o [issue tracker](https://github.com/fubarino/fubarino.github.com/issues) do Github para quaisquer bugs relacionados ao hardware do Fubarino SD. Para bugs no MPIDE, software ou bibliotecas, consulte o [fórum chipKIT/MPIDE](http://www.chipkit.org/forum/index.php) ou o [issue tracker](https://github.com/organizations/chipKIT32/dashboard/issues/) do chipKIT/MPIDE no Github.

Observe que as primeiras 100 placas Fubarino SD foram montadas por engano com partes PIC32MX795F512. Isso não deve impactar sketches gerados a partir do MPIDE. No entanto, isso significa que o [RetroBSD](http://retrobsd.org/) é uma opção para essas primeiras 100 placas.

##   Recursos
---
*   Placa e esquemático Fubarino SD v1.4 (formato Eagle 6) - [diretório Github](https://github.com/fubarino/fubarino.github.com/tree/master/sd/v1.4)

*   Fubarino SD v1.4 [esquemático](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_sch.pdf) (PDF)
*   Fubarino SD v1.4 [layout da placa](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_brd.pdf) (PDF)
*   Fubarino SD v1.4 [BOM](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_BOM_SeeedFormat.xlsx) (Excel)
*   Fubarino SD [Manual de Referência](https://github.com/fubarino/fubarino.github.com/raw/master/sd/docs/FubarinoSDURefManual.docx) (Word)
*   USB Bootloader (compatível com avrdude) [arquivo HEX](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/BL_1_1_6_FuncTest_1_0.hex) nota: clique com o botão direito e selecione 'save as' para obter o arquivo .HEX – a placa já vem com esse bootloader pré-programado
*   [Sketch de Teste de Fábrica](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/FubarinoSD_ManufactureTest.pde) Este sketch é o que a fábrica usa para testar a placa Fubarino SD – clique com o botão direito e selecione 'save as'.


##   Autores

O Fubarino SD foi projetado por Brian Schmalz (da [Schmalz Haus LLC](http://www.schmalzhaus.com)) e Rick Anderson (da [Fubar Labs](http://fubarlabs.org)). Ambos também fazem parte da equipe de desenvolvimento do chipKIT/MPIDE.

##   Links Externos

Links para páginas externas que fornecem mais ideias de aplicação, documentos/folhas de dados ou bibliotecas de software

*   MPIDE (Multi Platform Integrated Development Environment) [download](http://www.chipkit.org/forum)

*   [Site do Fubarino](http://fubarino.org/) (inclui arquivos mais recentes, FAQ, tutoriais, exemplos, etc.)
*   [Fóruns chipKIT e MPIDE](http://www.chipkit.org/forum/index.php)

*   [chipKIT/MPIDE wiki](http://chipkit.org/wiki/index.php?title=Main_Page "Main_Page")

*   [Digilent Inc](http://www.digilentinc.com) Designers das placas chipKIT
*   [PIC32MX440F256H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en534168) Processador Microchip PIC32

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
