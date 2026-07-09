---
description: NFC Shield V1.0
title: NFC Shield V1.0
keywords:
  - Shield para Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /NFC_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/NFC_Shield_V1.0/
---
<!-- ---
name:  NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)  é uma interface de **Near Field Communication** para **Arduino** construída em torno do popular circuito integrado NXP PN532. **NFC** é uma tecnologia de rádio de curta distância que permite a comunicação entre dispositivos que são mantidos próximos um do outro. **NFC** tem suas raízes na tecnologia **RFID** e é uma tecnologia de plataforma aberta padronizada na ECMA-340 e ISO/IEC 18092.

NFC é amplamente utilizado como RFID para reconhecer cartões/tags (Cartões / Tags NXP Mifare). NFC pode ser usado como uma alternativa ao **cartão de transporte** usando a memória de leitura/gravação fornecida pelos cartões/tags. Alguns telefones celulares vêm com NFC embutido - eles são usados como leitores de cartões, tags, cartazes inteligentes com uma URL da Web (como um leitor de código QR móvel). Esta tecnologia também está sendo aplicada para **compras inteligentes sem dinheiro**.

Como muitos outros padrões, a tecnologia NFC é regulamentada pelo **Near Field Communication Forum**, que padroniza a comunicação **NFC** -- como os dispositivos se emparelham, compartilham dados e permitem que uma transação segura aconteça. O [NFC Forum](http://www.nfc-forum.org) desenvolve e certifica dispositivos compatíveis com os **padrões NFC**.

NFC opera na faixa ISM (Industry Scientific Medical) não licenciada de frequência de **13.56 MHz**. O alcance de comunicação NFC é de até 10 cm. Porém, isso é limitado pelo projeto da antena e de radiação de energia. A maioria dos dispositivos funciona dentro de um alcance de 10 mm. A antena do [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) é projetada para funcionar dentro de um alcance de 1 cm. O [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) fornece todos os circuitos necessários para o **PN532**, como cristal de 27.12Mhz e fonte de alimentação. Ele também expõe os pinos de I/O do **PN532** para fácil acesso.

A comunicação entre o Arduino e o [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) é via SPI.

Modelo: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)

## Recursos ##

- Compatível com Shield para Arduino. Nenhuma soldagem é necessária.

- Interface **SPI**. Assim, a maioria dos pinos do **Arduino** fica disponível para outras aplicações.

- Antena em **PCB** embutida.

- Suporta operação em 3,3 V e 5 V usando o tradutor de nível **TXB0104** da TI.

- Soquete para conectar outros shields.

- O alcance máximo de comunicação deste NFC Shield é de cerca de 5 cm

- Não é capaz de ler/gravar chip ultralightC, apenas ler seu ID

## Ideias de aplicação ##

- Usar como um leitor RFID com **tags Mifare One** (ISO14443 Tipo-A) e cartões (13,56Mhz).

- Criar sistema de compartilhamento de cartão de visita.

- Criar sistemas de controle de presença.

- Projetar sistemas de autenticação.

- Ler Smart Posters.

- Trocar pequenos dados com segurança com outros dispositivos NFC

- Usar com a [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/) para criar aplicações móveis com NFC.

- E outras possibilidades infinitas.

## Uso ##

### Instalação de hardware ###

- Ajuste a chave deslizante de seleção de energia da **Seeeduino** para 3,3 V.

- Conecte o [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) à **Seeeduino** como mostrado abaixo.

- Compile e envie o sketch de exemplo fornecido.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Conectado à Seeeduino**

- Segure o **Cartão MIFARE** próximo à antena. O NFC Shield irá ler os dados de id passivo.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Cartão Mifare segurado próximo à antena do NFC Shield**

- Segure a Tag MIFARE próxima à antena. O NFC Shield irá ler os dados de id passivo.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Tag Mifare segurada próximo à antena do NFC Shield**

- Use a seguinte configuração para estabelecer comunicação ponto a ponto entre duas Seeeduinos usando NFC Shields.

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**Configuração de comunicação NFC ponto a ponto**

### Programação ###

Baixe a [Biblioteca PN532_SPI para NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) e instale-a em \arduino\libraries. Você pode copiar os seguintes códigos para a Arduino IDE ou abrir os exemplos na biblioteca para começar.

**Demo 1：Ler a memória completa de um cartão MIFARE**

1. Abra e envie o exemplo readAllMemoryBlocks como mostrado abaixo.

```cpp
//This example reads all MIFARE memory block from 0x00 to 0x63.
//It is tested with a new MIFARE 1K cards. Uses default keys for authenication.
//Contributed by Seeed Technology Inc (www.seeedstudio.com)

#include <PN532.h>
#include <SPI.h>

/*Chip select pin can be connected to D10 or D9 which is hareware optional*/
/*if you the version of NFC Shield from SeeedStudio is v2.0.*/
#define PN532_CS 10

PN532 nfc(PN532_CS);

#define  NFC_DEMO_DEBUG 1

void setup(void) {
#ifdef NFC_DEMO_DEBUG
  Serial.begin(9600);
  Serial.println("Hello!");
#endif
  nfc.begin();

  uint32_t versiondata = nfc.getFirmwareVersion();
  if (! versiondata) {
#ifdef NFC_DEMO_DEBUG
    Serial.print("Didn't find PN53x board");
#endif
    while (1); // halt
  }
#ifdef NFC_DEMO_DEBUG
  // Got ok data, print it out!
  Serial.print("Found chip PN5");
  Serial.println((versiondata>>24) & 0xFF, HEX);
  Serial.print("Firmware ver. ");
  Serial.print((versiondata>>16) & 0xFF, DEC);
  Serial.print('.');
  Serial.println((versiondata>>8) & 0xFF, DEC);
  Serial.print("Supports ");
  Serial.println(versiondata & 0xFF, HEX);
#endif
  // configure board to read RFID tags and cards
  nfc.SAMConfig();
}

void loop(void) {
  uint32_t id;
  // look for MiFare type cards
  id = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);

  if (id != 0)
  {
#ifdef NFC_DEMO_DEBUG
    Serial.print("Read card #");
    Serial.println(id);
    Serial.println();
#endif
    uint8_t keys[]= { 0xFF,0xFF,0xFF,0xFF,0xFF,0xFF };// default key of a fresh card
    for(uint8_t blockn=0;blockn<64;blockn++)
    {
      if(nfc.authenticateBlock(1, id ,blockn,KEY_A,keys)) //authenticate block blockn
      {
        //if authentication successful
        uint8_t block[16];
        //read memory block blockn
        if(nfc.readMemoryBlock(1,blockn,block))
        {
#ifdef NFC_DEMO_DEBUG
          //if read operation is successful
          for(uint8_t i=0;i<16;i++)
          {
            //print memory block
            Serial.print(block[i],HEX);
            if(block[i] <= 0xF) //Data arrangement / beautify
            {
              Serial.print("  ");
            }
            else
            {
              Serial.print(" ");
            }
          }

          Serial.print("| Block ");
          if(blockn <= 9) //Data arrangement / beautify
          {
            Serial.print(" ");
          }
          Serial.print(blockn,DEC);
          Serial.print(" | ");

          if(blockn == 0)
          {
            Serial.println("Manufacturer Block");
          }
          else
          {
            if(((blockn + 1) % 4) == 0)
            {
              Serial.println("Sector Trailer");
            }
            else
            {
              Serial.println("Data Block");
            }
          }
#endif
        }
      }
    }
  }
  delay(2000);
}
```

**Este sketch lê a memória completa de um cartão MIFARE Standard usando chaves de autenticação padrão. A saída fornece o layout de memória típico de um cartão MIFARE Standard novo.**

2. Aproxime um Cartão Mifare da Antena NFC. Abra o monitor serial, você pode ver o resultado como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

**Nota:** Os blocos são classificados como Bloco de Fabricante (somente leitura), Bloco de Dados (área gravável pelo usuário/aplicação) e Trailer de Setor (autenticação e bits de acesso para esse setor)

**Demo 2: Gravar dados em um bloco de memória MIFARE**

1. Abra o exemplo writeMifareMemory. Este exemplo grava o bloco de memória MIFARE 0x08 de um novo cartão MIFARE 1K usando chaves de autenticação padrão. Leia a memória do bloco após concluir a gravação de dados no bloco de memória MIFARE.

Nota: O bloco de memória 0 é somente leitura e contém dados do fabricante. Não grave no bloco Trailer de Setor a menos que você saiba o que está fazendo. Caso contrário, o cartão MIFARE pode ficar inutilizável no futuro.

2. Compile e envie o exemplo. Se você não sabe como enviar, clique [aqui](https://seeeddoc.github.io/Upload_Code/).

3. Aproxime um Cartão Mifare da Antena NFC..  
4. Abra o monitor serial, você pode ver o resultado como mostrado abaixo:
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_1.jpg)

**Demo 3: Comunicação ponto a ponto**

Uma comunicação NFC ponto a ponto experimental é implementada na biblioteca NFC mais recente. Isto usa um Iniciador Ativo para comunicação P2P.

1. Baixe o exemplo “PtoPInitiator” e “PtoPTarge” em dois Arduinos diferentes com NFC Shields.

2. Coloque as antenas próximas uma da outra.

3. Abra o terminal serial e observe a trans-recepção de dados.

**Resultado da saída:**

P2P Initiator:
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPInitiator.jpg)

P2P Target:
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPTarget.jpg)

## Código de referência ##

As APIs utilizam os comandos para invocar as interfaces fornecidas pelo firmware PN532 via SPI. Todos esses comandos estão documentados no Manual do Usuário do PN532. As seguintes APIs são fornecidas pela Biblioteca PN532_SPI.

**boolean SAMConfig(void)**

Esta API invoca o comando **SAMConfiguration** do PN532 e o configura para o **Modo Normal**. **SAM** significa Security Access Module (isto é, o sistema PN532). O sistema PN532 pode funcionar nos modos **Normal**, **Virtual Card**, **Wired Card** e **Dual Card**.

**Uso:**

```
nfc.SAMConfig(); // Call this before any read/write operation

```

**uint32_t readPassiveTargetID(uint8_t cardbaudrate)**

Este método lê o ID do alvo passivo e o retorna como um número de 32 bits. No momento, apenas a leitura de cartões/tags MIFARE ISO14443A é suportada. Portanto, use **PN532_MIFARE_ISO14443A** como parâmetro. Retorna o número do cartão de 32 bits

**Uso:**

```
uint32_t cid;
// look for MiFare type cards/tags
cid = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);

```

uint32_t authenticateBlock(uint8_t cardnumber, uint32_t cid, uint8_t blockaddress ,uint8_t authtype, uint8_t * keys)

Este método é usado para autenticar um bloco de memória com a chave antes da operação de leitura/escrita. Retorna verdadeiro quando for bem-sucedido.

- **cardnumber** pode ser 1 ou 2

- **cid** é o ID do cartão de 32 bits

- **blockaddress** é o número do bloco (qualquer número entre 0 - 63 para cartão MIFARE)

- **authtype** é qual chave será usada para autenticação (ou **KEY_A** ou **KEY_B**)

- **keys** aponta para o array de bytes que contém 6 chaves.

**Uso:**

```
uint8_t keys[]= {0xFF,0xFF,0xFF,0xFF,0xFF,0xFF};  // default key of a fresh card
nfc.authenticateBlock(1, id ,3,KEY_A,keys); //authenticate block 3, id is 32-bit passive target id.

```

**uint32_t readMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)**

Este método lê um bloco de memória após a autenticação com a chave. Retorna verdadeiro quando for bem-sucedido.

- **cardnumber** pode ser 1 ou 2

- **blockaddress** é o número do bloco (qualquer número entre 0 - 63 para cartão MIFARE) a ser lido. Cada bloco tem 16 bytes no caso de cartão MIFARE Standard.

- **block** aponta para o buffer (array de bytes) para armazenar 16 bytes de dados do bloco.

**Uso:**

```
uint8_t block[16];
nfc.readMemoryBlock(1,3,block); //Read can be performed only when authentication was successful.

```

**uint32_t writeMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)**

Este método grava dados em um bloco de memória após a autenticação com a chave. Retorna verdadeiro quando for bem-sucedido.

- **cardnumber** pode ser 1 ou 2

- **blockaddress** é o número do bloco (qualquer número entre 0 - 63 para cartão MIFARE) a ser gravado. Cada bloco tem 16 bytes no caso de cartão MIFARE Standard.

- **block** aponta para o buffer (array de bytes) que contém 16 bytes de dados do bloco a serem gravados.**Uso**:

```
uint8_t writeBuffer[16];
    for(uint8_t ii=0;ii<16;ii++)
     {
       writeBuffer[ii]=ii; //Fill buffer with 0,1,2....F
     }
nfc.writeMemoryBlock(1,0x08,writeBuffer); //Write writeBuffer[] to block address 0x08. Read can be performed only when authentication was successful.

```

**uint32_t PN532::configurePeerAsInitiator(uint8_t baudrate)**

Este método implementa um iniciador Peer to Peer. Retorna verdadeiro quando for bem-sucedido.

- **baudrate** pode ser qualquer número de 0-2. 0 para 106kbps ou 1 para 201kbps ou 2 para 424kbps. No momento, apenas 1 e 2 são suportados.

*8Este recurso é experimental e oferece suporte à comunicação NFC Peer to Peer com outros shields NFC. A interação com dispositivos móveis não foi testada.**

**Uso:**

```
// Configure PN532 as Peer to Peer Initiator
if( nfc.configurePeerAsInitiator(2) ) //if connection is error-free
    {
     //Your Send  Receive code here
    }

```

**uint32_t configurePeerAsTarget()**

Este método implementa um alvo Peer to Peer. Retorna verdadeiro quando for bem-sucedido.

**Este recurso é experimental e oferece suporte à comunicação NFC Peer to Peer com outros shields NFC. A interação com dispositivos móveis não foi testada.**

**Uso:**

```
// Configure PN532 as Peer to Peer Target
if(nfc.configurePeerAsTarget()) //if connection is error-free
   {
        //You code to trans-receive data
   }

```

**uint32_t initiatorTxRx(char *DataOut,char *DataIn)**

Este método é usado para transmitir e receber dados de e para o alvo. Este código é usado pelo iniciador NFC Peer to Peer. Retorna verdadeiro quando for bem-sucedido.

- **DataOut** é ponteiro e array de chars (16 bytes) para transmitir dados.

- **DataIn** é ponteiro e array de chars (16 bytes) para receber dados.

**Este recurso é experimental e oferece suporte à comunicação NFC Peer to Peer com outros shields NFC. A interação com dispositivos móveis não foi testada.**

**Uso:**

```
    // Configure PN532 as Peer to Peer Initiator in active mode
    if( nfc.configurePeerAsInitiator(2) ) //if connection is error-free
    {
        //trans-receive data
        if(nfc.initiatorTxRx(DataOut,DataIn))
        {
         Serial.print("Data Sent and Received: ");
         Serial.println(DataIn);
        }
    }

```

**uint32_t targetTxRx(char *DataOut,char *DataIn)**

Este método é usado para transmitir e receber dados de e para o iniciador. Este código é usado pelo alvo NFC Peer to Peer para responder ao iniciador. Retorna verdadeiro quando for bem-sucedido.

- **DataOut** é ponteiro e array de chars (16 bytes) para transmitir dados.

- **DataIn** é ponteiro e array de chars (16 bytes) para receber dados.

**Uso:**

```
    // Configure PN532 as Peer to Peer Target
    if(nfc.configurePeerAsTarget()) //if connection is error-free
    {
        //trans-receive data
        if(nfc.targetTxRx(DataOut,DataIn))
        {
         Serial.print("Data Received: ");
         Serial.println(DataIn);
        }
    }

```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/pt-br/images/8/81/NFC_Shield_V0.9b_Schematic_Board_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Library]**[PN532_SPI Library For NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip)
- **[PDF]**[NXP PN532 - User Manual](https://www.nxp.com/docs/en/user-guide/141520.pdf)
- **[Links]**[NFC Forum](http://www.nfc-forum.org)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
