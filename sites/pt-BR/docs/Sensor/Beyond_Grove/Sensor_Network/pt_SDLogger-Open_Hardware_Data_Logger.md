---
title: SDLogger - Registrador de Dados Open Hardware
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/SDLogger-Open_Hardware_Data_Logger/
slug: /SDLogger-Open_Hardware_Data_Logger
sku: 105990002
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/SDLogger-Open_Hardware_Data_Logger/
---
![](http://bz.seeedstudio.com/depot/images/product/sdlogger1.jpg)

SDLogger é um registrador serial simples baseado no [OpenLog de Nathan Seidle](http://www.sparkfun.com/)/[SparkFun](https://github.com/sparkfun/OpenLog/wiki/). Ele utiliza um processador ATmega644P rodando a 14,7456 MHz e registra em cartões SD de tamanho padrão. Ele é compatível tanto com cartões SD padrão (FAT16) quanto com cartões SDHC (FAT32). O SDLogger é fornecido com o firmware OpenLog 1.61 instalado (compilado com suporte a SDHC/FAT32 e grande buffer de entrada de 2048 caracteres), juntamente com um bootloader compatível com Arduino para facilitar a atualização de programa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/sdlogger-open-hardware-data-logger-p-723.html?cPath=132_136)


##   Recursos

*   Simples de configurar e usar

*   Registra automaticamente os dados recebidos na porta de entrada serial

*   Pode ser configurado usando um arquivo de configuração no cartão SD

*   Suporta taxas de baud seriais de 2400, 4800, 9600, 19200, 38400, 57600, 115200 e 230400 em 8-N-1.

*   Suporta tanto cartões SD padrão de até 2 GB (FAT16) quanto cartões SDHC de até 16 GB (FAT32)

*   Grande buffer de entrada (2048 caracteres)

*   Formato de cartão SD de tamanho padrão

*   Oscilador de cristal de 14,7456 MHz para geração precisa da taxa de baud

*   Faixa de tensão de entrada: 3,3 a 12 V

*   Bootloader compatível com Arduino instalado para fácil atualização de programa

*   Suporte completo ao ambiente Arduino - pode ser usado como uma placa Arduino de baixo custo para desenvolvimento de programas

*   Portas de E/S suportadas no ambiente Arduino (além da porta serial principal): 4 entradas analógicas, segunda porta serial, porta I2C

*   Procedimento simples de restauração do firmware original do SDLogger usando o ambiente Arduino

*   Hardware/firmware do SDLogger projetado por Saanlima/Magnus Karlsson e lançado sob a licença CC BY-SA v3

*   Arquivos de projeto, código Arduino e outros códigos portados disponíveis no [GitHub](http://github.com/magnuskarlsson/SDLogger)

##   Documentação

1.  Páginas wiki do SDLogger

1.  *   [Operação básica](https://github.com/magnuskarlsson/SDLogger/wiki/Basic-operation)

1.  *   [Como usar cabo FTDI com SDLogger](https://github.com/magnuskarlsson/SDLogger/wiki/FTDI-cable-Howto)

1.  *   [Como usar SDLogger como placa Arduino](https://github.com/magnuskarlsson/SDLogger/wiki/Arduino-howto)

1.  *   [Como restaurar o firmware original usando o ambiente Arduino](https://github.com/magnuskarlsson/SDLogger/wiki/SDLogger-firmware-restore)

1.  Páginas wiki do OpenLog (muitas das informações aqui também são relevantes para o SDLogger)

1.  *   [Link para o wiki da folha de dados do OpenLog](https://github.com/sparkfun/OpenLog/wiki/datasheet)

1.  *   [Link para o wiki do conjunto de comandos do firmware OpenLog](https://github.com/sparkfun/OpenLog/wiki/command-set)


###   Créditos

1.  O firmware FAT16/FAT32 foi originalmente projetado por Roland Riegel e é disponibilizado sob a licença GPL v2.

2.  Hardware e firmware do OpenLog desenvolvidos pelo [OpenLog de Nathan Seidle](http://www.sparkfun.com/)/SparkFun e lançados sob a licença CC-SA v3

3.  Biblioteca Arduino SdFat escrita por Bill Greiman e disponibilizada sob a licença GPL v3

## Suporte Técnico e Discussão sobre o Produto
 se você tiver qualquer problema técnico, envie a questão em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>