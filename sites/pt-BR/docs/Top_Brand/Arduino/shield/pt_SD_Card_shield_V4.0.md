---
description: SD_Card_shield_V4.0
title: Shield de Cartão SD V4.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SD_Card_shield_V4.0
sku: 103030005
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/SD_Card_shield_V4.0/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_Card_Shield-v4.jpg" alt="pir" width={600} height="auto" /></p>

Este é o recém-lançado shield de cartão SD V4.0. Ele fornece um espaço de armazenamento para o seu Arduino. Os usuários podem ler/gravar o cartão SD por meio da biblioteca SD integrada do Arduino. Ele é compatível com cartões SD, SDHC e Micro SD. Ele ocupará apenas a porta SPI do seu Arduino. Em comparação com as versões anteriores, ele combina o slot SD padrão e o slot Micro SD em um único slot padrão, e o adaptador incluído permite o uso de cartões Micro SD. Você pode empilhar outros shields que funcionem com os pinos não utilizados. Além disso, as portas I2C e UART pré-formadas facilitam sua conexão com módulos Grove.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SD-Card-Shield-V4-p-1381.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Ideias de Aplicação

-----------------

Se você quiser fazer alguns projetos incríveis com o SD Card Shield, aqui estão alguns projetos para sua referência.

Aqui apresentamos um projeto sobre o [LinkIt ONE](https://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html) usando cartão SD.

### Reprodutor de Música com LinkIt One

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/555a29dc85f7f.png" alt="pir" width={600} height="auto" /></p>

Este projeto usa o Grove - Water Sensor para criar uma solução simples, porém eficaz, para regar plantas.

[Faça isso AGORA!](https://www.seeedstudio.com/recipe/246-music-player-with-linkit-one.html)

[***Mais Projetos Incríveis com Cartão SD***](https://www.seeedstudio.com/recipe/index.php?query=SD+Card)

Recursos
--------

- Compatível com cartão SD padrão, cartão SDHC e cartão TF
- Compatível com conexão Grove UART e I2C
- Biblioteca SD totalmente suportada
- Número mínimo de portas SPI
- Verdadeiramente empilhável

Especificações
--------------

<table align={"center"} width = {"100%"}>
  <tbody>
  <tr>
    <td><h3>Item</h3></td>
    <td><h3>Mín</h3></td>
    <td><h3>Típico</h3></td>
    <td><h3>Máx</h3></td>
    <td><h3>Unidade</h3></td>
  </tr>
  <tr>
    <td><h3>Tensão</h3></td>
    <td><h4>3.5</h4></td>
    <td><h4>5.0</h4></td>
    <td><h4>5.5</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h3>Corrente</h3></td>
    <td><h4>0.159</h4></td>
    <td><h4>100</h4></td>
    <td><h4>200</h4></td>
    <td><h4>mA</h4></td>
  </tr>  
  <tr>
    <td><h3>Tipo de Cartão Suportado</h3></td>
    <td rowspan="3" width = {"60%"}><h4>Cartão SD (menos de 32GB); Cartão Micro SD (menos de 32GB); Cartão SDHC (menos de 32GB)</h4></td>
    <td><h4>/</h4></td>
  </tr>
  <tr>
    <td><h4>Dimensão</h4></td>
    <td rowspan="3" width = {"60%"}><h4>68.7x53.5x19.00</h4></td>
    <td><h4>mm</h4></td>
  </tr>
  <tr>
    <td><h4>Peso Líquido</h4></td>
    <td rowspan="3" width = {"60%"}><h4>14.8</h4></td>
    <td><h4>g</h4></td>
  </tr>
  </tbody></table>

Visão Geral de Hardware
-----------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Interface_FunctionV2.0.png" alt="pir" width={600} height="auto" /></p>

**Uso de pinos no Arduino (com cartão SD)** 

D4: SD_CS;

D11: SD_DI;

D12: SD_DO;

D13: SD_CLK.

:::note
O formato do cartão SD pode ser FAT16 ou FAT32. Tamanhos de cartão SD e de cartão SDHC maiores que 16GB não são suportados.
:::

Uso
-----

A seguir está a instalação do shield de cartão SD.

### Instalação de Hardware

1. Insira seu cartão SD no soquete. Conecte o SD Card Shield ao Arduino.
2. Conecte o Arduino ao PC usando um cabo USB.

:::note
Quando você usar um cartão Micro SD, insira o cartão Micro SD no adaptador e, em seguida, insira o adaptador de cartão Micro SD no soquete, como mostrado abaixo.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_card_adopter.JPG" alt="pir" width={600} height="auto" /></p>

Quando você concluir a instalação de hardware, ela deverá ser semelhante a isto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Hardware_connection.JPG" alt="pir" width={600} height="auto" /></p>

### Enviar o programa

1. Reinicie a Arduino IDE. Abra o exemplo "CardInfo" pelo caminho: File --> Examples --> SD --> CardInfo.

    Este exemplo mostra como usar as bibliotecas utilitárias nas quais a biblioteca SD é baseada, a fim de obter informações sobre o seu cartão SD. É muito útil para testar um cartão quando

    você não tem certeza se ele está funcionando ou não. Há também muitos outros exemplos nesta biblioteca, como “ReadWrite”. Você sempre pode experimentá-los.

    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Open_SD_Card_code.jpg" alt="pir" width={600} height="auto" /></p>

    Há uma breve descrição do código acima:

    Primeiro, verifique se o cartão está funcionando. Se não estiver, serão exibidos alguns motivos que podem levar a esse resultado.

    No caso de o cartão SD funcionar normalmente, ele imprimirá o tipo de cartão SD. Em seguida, imprimirá o tipo e o tamanho do volume do tipo FAT.

    Por fim, obtenha as informações dos arquivos, como nome, data e tamanho em bytes, encontrados no cartão.

2. Envie o código.

3. Veja os resultados. Você pode ver a imagem a seguir após clicar no monitor serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_Card_Infor.jpg" alt="pir" width={600} height="auto" /></p>

4. Se ocorrer um erro, por favor, verifique novamente todas as etapas anteriores e certifique-se de que o cartão SD está funcionando. Se nada disso resolver o problema, tente substituir o cartão SD.

:::note
O código padrão do Arduino retorna o tamanho do SD incorretamente se o seu cartão SD for maior que 4G. O código a seguir pode resolver esse problema.
:::

```cpp
    /*
      SD card test

     This example shows how use the utility libraries on which the'
     SD library is based in order to get info about your SD card.
     Very useful for testing a card when you're not sure whether its working or not.

     The circuit:
      * SD card attached to SPI bus as follows:
     ** MOSI - pin 11 on Arduino Uno/Duemilanove/Diecimila
     ** MISO - pin 12 on Arduino Uno/Duemilanove/Diecimila
     ** CLK - pin 13 on Arduino Uno/Duemilanove/Diecimila
     ** CS - depends on your SD card shield or module.
     ** Pin 4 used here for consistency with other Arduino examples


     created  28 Mar 2011
     by Limor Fried
     modified 9 Apr 2012
     by Tom Igoe
     */
    // include the SD library:
    #include <SPI.h>
    #include <SD.h>

    // set up variables using the SD utility library functions:
    Sd2Card card;
    SdVolume volume;
    SdFile root;

    // change this to match your SD shield or module;
    // Arduino Ethernet shield: pin 4
    // Adafruit SD shields and modules: pin 10
    // Sparkfun SD shield: pin 8
    const int chipSelect = 4;

    void setup()
    {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
      }


      Serial.print("\nInitializing SD card...");
      // On the Ethernet Shield, CS is pin 4. It's set as an output by default.
      // Note that even if it's not used as the CS pin, the hardware SS pin
      // (10 on most Arduino boards, 53 on the Mega) must be left as an output
      // or the SD library functions will not work.
      pinMode(10, OUTPUT);     // change this to 53 on a mega


      // we'll use the initialization code from the utility libraries
      // since we're just testing if the card is working!
      if (!card.init(SPI_HALF_SPEED, chipSelect)) {
        Serial.println("initialization failed. Things to check:");
        Serial.println("* is a card is inserted?");
        Serial.println("* Is your wiring correct?");
        Serial.println("* did you change the chipSelect pin to match your shield or module?");
        return;
      } else {
        Serial.println("Wiring is correct and a card is present.");
      }

      // print the type of card
      Serial.print("\nCard type: ");
      switch (card.type()) {
        case SD_CARD_TYPE_SD1:
          Serial.println("SD1");
          break;
        case SD_CARD_TYPE_SD2:
          Serial.println("SD2");
          break;
        case SD_CARD_TYPE_SDHC:
          Serial.println("SDHC");
          break;
        default:
          Serial.println("Unknown");
      }

      // Now we will try to open the 'volume'/'partition' - it should be FAT16 or FAT32
      if (!volume.init(card)) {
        Serial.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
        return;
      }


      // print the type and size of the first FAT-type volume

      uint64_t volumesize64;
      uint32_t volumesize32;
      Serial.print("\nVolume type is FAT");
      Serial.println(volume.fatType(), DEC);
      Serial.println();

      volumesize64 = volume.blocksPerCluster();    // clusters are collections of blocks
      volumesize64 *= volume.clusterCount();       // we'll have a lot of clusters
      volumesize64 *= 512;                            // SD card blocks are always 512 bytes

      Serial.print("Volume size (bytes): ");
      printLLNumber(volumesize64, DEC);
      Serial.println();

      Serial.print("Volume size (Kbytes): ");
      volumesize32 = volumesize64/1024;
      Serial.println(volumesize32);

      Serial.print("Volume size (Mbytes): ");
      volumesize32 /= 1024;
      Serial.println(volumesize32);
      /*uint64_t volumesize;
      Serial.print("\nVolume type is FAT");
      Serial.println(volume.fatType(), DEC);
      Serial.println();

      volumesize = volume.blocksPerCluster();    // clusters are collections of blocks
      volumesize *= volume.clusterCount();       // we'll have a lot of clusters
      volumesize *= 512;                            // SD card blocks are always 512 bytes
      Serial.print("Volume size (bytes): ");
      Serial.println(volumesize,DEC);
      Serial.print("Volume size (Kbytes): ");
      volumesize /= 1024;
      Serial.println(volumesize,DEC);
      Serial.print("Volume size (Mbytes): ");
      volumesize /= 1024;
      Serial.println(volumesize,DEC);
    */

      Serial.println("\nFiles found on the card (name, date and size in bytes): ");
      root.openRoot(volume);

      // list all files in the card with date and size
      root.ls(LS_R | LS_DATE | LS_SIZE);
    }


    void loop(void) {

    }
    void printLLNumber(uint64_t n, uint8_t base)
    {
      unsigned char buf[16 * sizeof(long)];
      unsigned int i = 0;

      if (n == 0)
      {
        Serial.print((char)'0');
        return;
      }

      while (n > 0)
      {
        buf[i++] = n % base;
        n /= base;
      }

      for (; i > 0; i--)
        Serial.print((char) (buf[i - 1] < 10 ?
          '0' + buf[i - 1] :
          'A' + buf[i - 1] - 10));
    }
```

## Visualizador Online de Esquemático do SD Card Shield v4.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/PCBA-SD%20Card%20shield%20V4.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online de Esquemático do SD Card Shield v4.0a

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.0a.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online de Esquemático do SD Card Shield v4.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.3_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Esquemático do SD Card Shield v4.0](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shiled_v4.0.pdf)

- [Arquivo Eagle do SD Card Shield v4.0.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/PCBA-SD%20Card%20shield%20V4.0.zip)

- [Arquivo Eagle do SD Card Shield v4.0a.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.0a.zip)

- [Arquivo Eagle do SD Card Shield v4.3.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.3_eagle_file.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/SD_Card_shield_V4.0 -->

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
