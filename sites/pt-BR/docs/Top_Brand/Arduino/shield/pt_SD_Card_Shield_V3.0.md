---
description: SD Card Shield V3.0
title: SD Card Shield V3.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SD_Card_Shield_V3.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SD_Card_Shield_V3.0/
---

<!-- ---
name: SD Card Shield V3.0
category: Discontinued
bzurl:
oldwikiname: SD_Card_Shield_V3.0
prodimagename:
surveyurl: https://www.research.net/r/SD_Card_Shield_V3-0
sku:   
--- -->
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_shield.jpg)

O shield SD card v3.0 adiciona armazenamento ao seu projeto Arduino. Ele é compatível com cartões SD, SDHC ou MicroSD TF. Use a chave seletora on-board para selecionar o tipo de cartão SD. O shield é compatível com um e somente um formato de cartão SD por vez, SD/SDHC ou MicroSD. Antes de usar um cartão SD ou MicroSD, ajuste a chave "SELECT" do shield para a posição correta: apontando para o slot SD/SDHC ou para o slot MicroSD.

O SD Card shield v3.0 utiliza somente as portas SPI do Arduino. O shield também é empilhável, então shields adicionais podem ser conectados em cima. Há soquetes compatíveis com Grove para as portas I2C e UART na placa.

O SD Card shield v3.0 utiliza o pino 10 como chip select. Certifique-se de que outros shields empilhados não utilizem esse mesmo pino. Veja a versão v4.0 deste shield para uma versão que utiliza o pino 4.

As próximas linhas foram adicionadas por usuários: Este shield funciona bem com o Arduino Mega 2560, você só precisa fazer as conexões apropriadas. 4ou10 →53, 11→51, 12 →50 e 13 →52. Essa configuração funciona bem desde que você se certifique de não atribuir mais nada a esses pinos.

**Modelo: [INT106D1P](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)**

## Recursos  

* Compatível com Arduino/Seeeduino<font color="red">( Não compatível com Mega)</font>

* Compatível com Grove
* Suporta cartão SD, cartão Micro SD e cartão SDHC
* Compatível com tensão lógica de 3,3 V e 5 V
* Alimentação DC de 2,6~3,6 V

## Especificações  

| Item | Mín | Típico | Máx | Unidade |
|------|-----|---------|-----|--------|
| Tensão | 2,7 | 3,3 | 3,6 | V |
| Corrente | 0,159 | 40 | 200 | mA |
| Tipo de Cartão Suportado | Cartão SD(≤2G); Cartão Micro SD(≤2G); Cartão SDHC(≤16G) | | | / |
| Dimensão | 57.15x44.70x19.00 | | | mm |
| Peso Líquido | 16,6 | | | g |

## Função da Interface  

![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_Card_interface.png)
 **D10** – Usado para CS do SPI
 **D11** – Usado para MOSI do SPI
 **D12** – Usado para MISO do SPI
 **D13** – Usado para SCK do SPI
 **Conectores Grove** - Um para a porta serial Uart e o outro para a porta I2C.

## Uso  

### Instalação de Hardware  

Conecte o SD Card Shield ao Arduino; insira seu cartão SD no soquete e certifique-se de que o seletor de cartão esteja apontando para o lado correto (cartão padrão ou micro). Em seguida, conecte o Arduino ao PC com um cabo USB.
 **<font color="red">Aviso: Não insira o cartão SD e o cartão microSD no shield ao mesmo tempo.</font>**
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_shield_hardware.jpg)

### Software  

Primeiro você precisa de um [cartão SD ou micro SD](https://www.seeedstudio.com/depot/sandisk-microsd%C3%82%E2%84%A2-card-2gb-p-546.html?cPath=178_182) e, em seguida, formatar o cartão SD como FAT16 ou FAT32, se necessário.
Formate o cartão SD como nas capturas de tela abaixo:
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format.jpg) ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format2.jpg)

1. Baixe a versão mais recente do **SdFat for Arduino**.

2. Descompacte este pacote e coloque-o no programa Arduino-1.0: ..\arduino-1.0\libraries.

3. Selecione a placa Arduino correspondente, como Arduino UNO ou Duemilanove ou outras, e a porta COM que você está usando.

4. Faça o upload do sketch _**Sdinfo**_. A imagem a seguir mostra o resultado no monitor serial. Claro que você pode fazer o upload de outros sketches.
![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_software.jpg)
5. Se ocorrer um erro, verifique novamente todas as etapas e certifique-se de que o cartão SD está funcionando. Se nada disso resolver o problema, tente substituir o cartão SD.
Com isso feito, você pode dar uma olhada em outros exemplos da biblioteca para leitura, gravação e registro de dados com um GPS ou relógio de tempo real. Aproveite!

## FAQ  

1. O cartão SD não pode ser inicializado.

2. Por favor, reformate o cartão SD para FAT/FAT32. Se ainda não funcionar, recomenda-se baixar o [SD Formatter](https://www.sdcard.org/downloads/formatter_3/) e reformatar o cartão SD com esse software.

## Rastreador de Versão  

| Revisão | Descrições | Lançamento |
|----------|-------------|-----------|
| v3.0 | Lançamento da V3.0 | 2012/3/29 |
| v3.1 | Regulador de tensão atualizado para MIC5205 | 2012/5/10 |

## Visualizador Online do Esquemático do SD Card Shield v3.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do SD Card Shield v3.0

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/pt-br/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos  

* **[Eagle]**  [Arquivo Eagle do SD Card Shield v3.1](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip)

* **[PDF]**[SD Card Shield pdf](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD%20Card%20Shield.pdf)

* **[PDF]**   [Arquivo PDF do SD Card Shield v3.1](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD_Card_Shield.pdf)

* **[Eagle]**   [Arquivo Eagle do SD Card Shield v3.0](https://wiki.seeedstudio.com/pt-br/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
