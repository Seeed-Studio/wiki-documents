---
description: Ethernet Shield V2.0
title: Ethernet Shield V2.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Ethernet_Shield_V2.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Ethernet_Shield_V2.0/
---

<!-- ---
name:  Ethernet Shield V2.0‏‎
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V2.0‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V2-0
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/IMG_0042.jpg)

Seu Ethernet Shield acaba de receber uma renovação completa! Este shield fornece conectividade instantânea à Internet com um controlador Ethernet de alta especificação, o W5200, com o dobro do tamanho de buffer da versão 1.0 e suporte para até oito conexões TCP/UDP simultâneas. Um slot SD incluso permite aplicações que exigem armazenamento de grandes quantidades de dados, como registro de dados de IoT. Graças a um conector RJ45 rebaixado, você pode adicionar de forma flexível a maioria dos shields em cima deste Ethernet Shield.

Modelo:[SLD91000P](https://www.seeedstudio.com/depot/w5200-ethernet-shield-p-1577.html)

## Recursos ##

- Controlador Ethernet de alta velocidade W5200

- Interface SPI

- 32 Kbytes de buffer interno

- Porta Ethernet RJ45 mínima

- Suporta até oito conexões TCP/UDP simultâneas

- Função prática de cartão SD

- Portas Grove para I2C e UART pré-configuradas

## Interface ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Ethernet_Interface.jpg)

**Configuração de Hardware**

- RJ45: Porta Ethernet;

- IC HX1198: porta de sinal 10/100BASE-T;

- IC W5200: um controlador Ethernet TCP/IP cabeado;

- U3: CI CJ117, regulador linear de baixa queda;

- U6: CI 74VHC125PW, buffer quádruplo;

- Tecla Reset: reinicia o Ethernet Shield e o Arduino quando pressionada;

- Cartão SD: suporta cartão Micro SD em FAT16 ou FAT32; armazenamento máximo de 2GB.

**Uso de pinos no Arduino**

- D4: chip select do cartão SD

- D10: Chip Select do W5200

- D11: SPI MOSI

- D12: SPI MISO

- D13: SPI SCK

**Aviso:**

Tanto o W5200 quanto o cartão SD se comunicam com o Arduino via barramento SPI. O pino 10 e o pino 4 são pinos de chip select para o W5200 e o slot SD. Eles não podem ser usados como I/O geral.

## Uso ##

Vamos construir um simples servidor web que responde às requisições de um cliente e armazena as leituras de A0 a A5 no cartão SD.

**Passo 1: Conexões**

1. Monte o Ethernet Shield v2.0 no seu Arduino;

2. Conecte o shield ao seu computador ou a um hub de rede ou a um roteador com um cabo Ethernet padrão;

3. Conecte o Arduino ao PC via cabo USB;

4. Insira um cartão SD no slot de cartão SD.

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/IMG_0039.jpg)

**Passo 2: Faça o upload do programa**

1.Baixe a biblioteca：[Ethernet Shield V2.0 Library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)  
Nota: Biblioteca obsoleta/antiga para IDE 1.0.x: [Link](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_Library.zip).

2.Descompacte e coloque-a na pasta libraries da IDE Arduino pelo caminho: ..\arduino-1.0.1\libraries.

3.Reinicie a IDE Arduino.

4.Abra o exemplo "WebServerWithSD" pelo caminho: File --> Examples --> EthernetV2.0 --> WebServerWithSD.  Este exemplo mostra como criar um simples servidor web que exibe as leituras das entradas analógicas A0 a A5 quando solicitado. Depois disso, armazene essas leituras no cartão SD.

**Nota:**

Esta nova biblioteca cobre todas as funções incluídas na biblioteca Ethernet integrada da IDE Arduino. Você pode usar outros exemplos da mesma forma que na biblioteca Ethernet anterior.

5.Faça o upload do programa para o Arduino. Se você não sabe como fazer upload de código, por favor clique aqui.

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Open_WebSeverWithSD_code.jpg)

Neste código, definimos o pino 4 como porta de chip select do cartão SD e o pino 10 como porta de chip select do W5200.

Primeiro, ele enviará um link para esse cliente se houver um cliente solicitando acesso a este servidor. Em seguida, enviará o valor de cada pino de entrada analógica para a rede.

Por fim, você pode visualizar cada pino analógico abrindo o arquivo do Cartão SD.

**Passo 3: Resultados**

Abra um navegador web e digite o endereço IP do seu controlador. Ele depende da sua rede local, mas costuma ser 192.168.168.178. Então você deverá ver as leituras de A0 a A5 aparecendo como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Ethernet_Score.jpg)

Para verificar o que está acontecendo no cartão SD, abra o monitor serial. Você pode usar o monitor serial integrado da IDE Arduino ou uma ferramenta de monitor serial como nós. Após abrir um monitor serial, você pode ler o conteúdo do arquivo "test.txt" que criamos para armazenar as leituras dos pinos analógicos.

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/WebServerWithSD_Result.jpg)

**Aviso:**

1） Certifique-se de que o Ethernet Shield e o seu computador estejam na mesma rede local.

2） Depois que o código tiver sido enviado com sucesso, não há problema em desconectar a placa do seu computador e aplicar alimentação independente a ela, deixando-a funcionar sozinha.

## Projetos Relacionados ##

É uma pena que ainda não tenhamos nenhum demo sobre o Ethernet Shield na [Recipe](https://www.seeedstudio.com/recipe/).

Publique seu projeto incrível sobre Ethernet Shield para **ganhar um cupom de US$100!** Sinta-se à vontade para nos contatar: **recipe@seeed.cc**

Aqui apresentamos alguns projetos sobre o [LinkIt ONE](https://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html).

### O que é o LinkIt ONE ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Linkit-one-page.jpg)

A placa de desenvolvimento LinkIt ONE é uma placa open source de alto desempenho para prototipagem de dispositivos vestíveis (Wearables) e de IoT.

Ela é baseada no SoC líder mundial para vestíveis, o MediaTek Aster (MT2502) combinado com Wi-Fi de alto desempenho (MT5931)

e chipsets de GPS (MT3332) para oferecer acesso a todos os recursos do MediaTek LinkIt.

Ela também oferece recursos de pinagem semelhantes às placas Arduino, facilitando a conexão a vários sensores, periféricos e shields Arduino.

### LinkIt ONE IoT Demo ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Seeed-recipe-77-20141020151546.jpg)

Este é um demo de IoT feito com o LinkIt ONE.

Com este demo, podemos:

- Exibir dados de coleta de temperatura, umidade, luminosidade e controle de volume doméstico em uma tela OLED

- Serviço em nuvem, dados enviados para a plataforma em nuvem Xively, monitoramento em tempo real

- Retenção de dados para revisar como os dados mudam ao longo do tempo

- Controle remoto de eletrodomésticos enviando uma mensagem

- Abajur, Impressão 3D, controlados pelo seu telefone

[Eu quero fazer isso](https://www.seeedstudio.com/recipe/77-linkit-one-iot-demo.html).

### Antena de lata de Pringles com um LinkIt ONE ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/5515ae26588ec.jpg)

Faça uma antena direcional com uma lata de Pringles.

[Eu quero fazer isso.](https://www.seeedstudio.com/recipe/177-pringles-can-antenna-with-a-linkit-one.html)

[Mais projetos incríveis com LinkIt ONE](https://www.seeedstudio.com/recipe/index.php?m=Home&amp;controller=Recipe&amp;action=productDetail&amp;id=2)

### Compartilhe seus projetos incríveis conosco ###

Nascido com o espírito de fazer e compartilhar, é isso que acreditamos que torna alguém um maker.

E é somente por causa disso que a comunidade open source pode ser tão próspera como é hoje.

Não importa o que você é e o que você fez, hacker, maker, artista ou engenheiro.

Desde que você comece a compartilhar seus trabalhos com os outros, você está fazendo parte da comunidade open source e está fazendo suas contribuições.

Agora compartilhe seus projetos incríveis conosco na [Recipe](https://community.seeedstudio.com/projects.html#recipe), e ganhe uma chance de se tornar um Usuário Core da Seeed.

- Usuários Core são aqueles que demonstram grande interesse nos produtos Seeed e fazem contribuições significativas na Recipe.

- Nós cooperamos com nossos Usuários Core no desenvolvimento de nossos novos produtos, ou seja, em outras palavras, os Usuários Core terão a chance de experimentar quaisquer novos produtos da Seeed antes de seu lançamento oficial e, em troca, esperamos feedback valioso deles para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E na maioria dos casos, quando nossos Usuários Core têm boas ideias de coisas para fazer, nós oferecemos peças de hardware, serviços de PCBA bem como suporte técnico. Além disso, cooperação comercial adicional com os Usuários Core é altamente possível.

Para obter mais informações sobre Usuário Core, por favor envie um e-mail para:[recipe@seeed.cc](mailto:recipe@seeed.cc)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Biblioteca]**[Ethernet Shield V2.0 Library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)
- **[Biblioteca]**[Versão obsoleta/antiga da Ethernet Shield V2.0 Library](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_Library.zip)
- **[Eagle]**[Arquivos eagle do Ethernet Shield V2.0](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_eagle_files.zip)
- **[PDF]**[PCB do Ethernet Shield v2.0](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/Ethernet%20Shield%20v2.0.pdf)
- **[PDF]**[SCH do Ethernet Shield v2.0](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/Ethernet%20Shield%20v2.0%20sch.pdf)
- **[Datasheet]**[W5200 Datasheet.pdf](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
