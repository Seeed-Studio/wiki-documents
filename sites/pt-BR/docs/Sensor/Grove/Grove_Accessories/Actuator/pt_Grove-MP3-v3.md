---
title: Grove - MP3 v3.0
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-MP3-v3/
slug: /Grove-MP3-v3
sku: 107020069
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-MP3-v3/
---


![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-preview.jpg)

O Grove - MP3 é um módulo de música super mini de 20x40mm baseado no decodificador de áudio WT2003S-20SS. Ele suporta arquivos de áudio em formato MP3 de alta qualidade com taxa de amostragem de 8~48KHz e taxa de bits de 8~320Kbps. Para expandir a capacidade de armazenamento, adicionamos um slot para cartão TF na parte de trás do módulo. O cartão TF adota o modo de interface DIO, suporta até 32GB e os sistemas de arquivos FAT16 e FAT32. Agora, com este pequeno módulo de música, você pode carregar centenas e milhares de músicas no bolso.

Como o nome indica, o Grove - MP3 V3 é a versão atualizada do Grove - MP3 V2. Comparado ao Grove MP3 V2, o V3 adicionou uma porta de alto-falante JST2.0, para que você possa sair o áudio pelo alto-falante e pelo fone de ouvido de 3,5mm ao mesmo tempo.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Suporta arquivos de áudio em formato MP3
- Taxa de amostragem: 8~48KHz / taxa de bits: 8~320Kbps
- Suporta cartão TF de até 32GB
- Suporta saída de áudio simultânea em alto-falante e fone de ouvido
- Compatível com plataformas de 3,3V e 5V.
- Suporta ajuste de volume em 32 níveis

## Especificações

|Parâmetro|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Taxa de amostragem| 8~48KHz / taxa de bits: 8~320Kbps |
|Interface|I2C(Endereço I2C padrão: 0x36) & Não Alterável|
|Saída|Alto-falante/Conector de Áudio 3,5mm|
|Resolução|Suporta ajuste de volume em 32 níveis|

## Visão Geral do Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" /></a></p>
  </figure>
</div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - MP3 V3 - Music Player|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-thumbnail.jpg)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Baseshield.

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - MP3 V3 Music Player à porta **D2** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3** Conecte o Seeeduino ao PC via cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/connect.png)

#### Software

:::tip
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Copie seu arquivo de música `.mp3` para o cartão tf e salve-os na localização raiz do cartão tf.

- **Passo 2.** Faça o download da biblioteca [Seeed_Serial_MP3](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) no Github.

:::note
        Consulte Como instalar biblioteca para [instalar a biblioteca](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para Arduino.
:::

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo **WT2003S_Terminal_Player** pelo caminho: **File** → **Examples** → **Seeed_Serial_MP3_Player** → **WT2003S_Terminal_Player**. Você pode reproduzir arquivos de música em formato `.mp3` usando este módulo e usar o conector de áudio de 3,5mm, o alto-falante pela porta JST2.0 ou até mesmo sair por ambos ao mesmo tempo.

O código de exemplo WT2003S_Terminal_Player é o seguinte:

```cpp
#include "WT2003S_Player.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COMSerial SSerial
    #define ShowSerial Serial

    WT2003S<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define COMSerial Serial1
    #define ShowSerial SerialUSB

    WT2003S<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
    #define COMSerial Serial
    #define ShowSerial SerialUSB

    WT2003S<HardwareSerial> Mp3Player;
#endif


uint8_t vol = 10;
uint32_t spi_flash_songs = 0;
uint32_t sd_songs = 0;
STROAGE workdisk = SD;
struct Play_history {
    uint8_t disk;
    uint16_t index;
    char name[8];
}* SPISong, *SDSong;

void readSongName(struct Play_history* ph, uint32_t num, STROAGE disk) {
    Mp3Player.volume(0);
    delay(100);
    switch (disk) {
        case SPIFLASH:
            Mp3Player.playSPIFlashSong(0x0001);
            break;
        case SD:
            Mp3Player.playSDRootSong(0x0001);
            break;
        case UDISK:
            Mp3Player.playUDiskRootSong(0x0001);
            break;
    }
    ShowSerial.println("2...");
    for (int i = 0; i < num ; i++) {
        delay(300);
        ph[i].disk = disk;
        ph[i].index = Mp3Player.getTracks();
        Mp3Player.getSongName(ph[i].name);
        Mp3Player.next();
    }
    ShowSerial.println("4...");
    Mp3Player.pause_or_play();
    Mp3Player.volume(14);
    delay(100);
}

void getAllSong() {
    uint8_t diskstatus = Mp3Player.getDiskStatus();
    ShowSerial.println(diskstatus);
    spi_flash_songs = Mp3Player.getSPIFlashMp3FileNumber();
    ShowSerial.print("SPIFlash:");
    ShowSerial.println(spi_flash_songs);
    if (spi_flash_songs > 0) {
        SPISong = (struct Play_history*)malloc((spi_flash_songs + 1) * sizeof(struct Play_history));
        readSongName(SPISong, spi_flash_songs, SPIFLASH);
    }
    if (diskstatus && 0x02) { // have SD
        sd_songs = Mp3Player.getSDMp3FileNumber();
        ShowSerial.print("SD:");
        ShowSerial.println(sd_songs);
        if (sd_songs > 0) {
            SDSong = (struct Play_history*)malloc((sd_songs + 1) * sizeof(struct Play_history));
            ShowSerial.println("1...");
            readSongName(SDSong, sd_songs, SD);
        }
    }
}
void printSongs() {
    ShowSerial.print("-------------------");
    ShowSerial.print("index");
    ShowSerial.print("<-------->");
    ShowSerial.print("name");
    ShowSerial.print("-------------------");
    ShowSerial.println();
    ShowSerial.println("-------------------spi flash-------------------------------");
    for (int i = 0 ; i < spi_flash_songs; i++) {
        ShowSerial.print("-------------------");
        ShowSerial.print(SPISong[i].index);
        ShowSerial.print("<-------->");
        ShowSerial.print(SPISong[i].name);
        ShowSerial.print("-------------------");
        ShowSerial.println();
    }
    ShowSerial.println("-------------------sd card-------------------------------");
    for (int i = 0 ; i < sd_songs; i++) {
        ShowSerial.print("-------------------");
        ShowSerial.print(SDSong[i].index);
        ShowSerial.print("<-------->");
        ShowSerial.print(SDSong[i].name);
        ShowSerial.print("-------------------");
        ShowSerial.println();
    }
}

void setup() {
    while (!ShowSerial);
    ShowSerial.begin(9600);
    COMSerial.begin(9600);
    ShowSerial.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
    Mp3Player.init(COMSerial);

    ShowSerial.println("0...");
    getAllSong();
    printMenu();
    printSongs();
}

void loop() {
    if (ShowSerial.available()) {
        char cmd = ShowSerial.read();
        switch (cmd) {
            case '+': {
                    ShowSerial.print("Volume up: ");
                    vol = Mp3Player.getVolume();
                    Mp3Player.volume(++vol);
                    ShowSerial.print(vol);
                    ShowSerial.println();
                    break;
                }
            case '-': {
                    ShowSerial.print("Volume down: ");
                    vol = Mp3Player.getVolume();
                    if (--vol > 31) {
                        vol = 0;
                    }
                    Mp3Player.volume(vol);
                    ShowSerial.print(vol);
                    ShowSerial.println();
                    break;
                }
            case 't': {
                    uint8_t status;
                    ShowSerial.print("status:");
                    status = Mp3Player.getStatus();
                    if (status == 0x01) {
                        ShowSerial.print("playing");
                    }
                    if (status == 0x02) {
                        ShowSerial.print("stop");
                    }
                    if (status == 0x03) {
                        ShowSerial.print("pause");
                    }
                    ShowSerial.println();
                    break;
                }
            case 'n': {
                    Mp3Player.next();
                    break;
                }
            case 'p': {
                    Mp3Player.pause_or_play();
                    break;
                }
            case 'w': {
                    Mp3Player.playMode(SINGLE_SHOT);
                    break;
                }
            case 'x': {
                    Mp3Player.playMode(SINGLE_CYCLE);
                    break;
                }
            case 'y': {
                    Mp3Player.playMode(CYCLE);
                    break;
                }
            case 'z': {
                    Mp3Player.playMode(RANDOM);
                    break;
                }
            case 'c': {
                    ShowSerial.print(Mp3Player.copySDtoSPIFlash());
                    break;
                }
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                ShowSerial.print("play:");
                if (workdisk == SD) {
                    Mp3Player.playSDRootSong(cmd - '0' - 1);
                    ShowSerial.print(cmd + ": ");
                    ShowSerial.print(SDSong[cmd - '0'].name);
                }
                if (workdisk == SPIFLASH) {
                    Mp3Player.playSPIFlashSong(cmd - '0' - 1);
                    ShowSerial.print(cmd + ": ");
                    ShowSerial.print(SPISong[cmd - '0'].name);
                }
                ShowSerial.println();
                break;
            default:
                break;
        }
    }
}

void printMenu(void) {
    ShowSerial.println("MP3 Command List:");
    ShowSerial.println("-----------------");
    ShowSerial.println("'+' or '-'  : raise/lower volume");
    ShowSerial.println("'1' ~ '9'   : select a song");
    ShowSerial.println("'n'         : next song");
    ShowSerial.println("'s'         : switch play disk, spi flash");
    ShowSerial.println("'p'         : play or pause");
    ShowSerial.println("'w'         : set playmode single no loop");
    ShowSerial.println("'x'         : set playmode single loop");
    ShowSerial.println("'y'         : set playmode all loop");
    ShowSerial.println("'z'         : set playmode random");
    ShowSerial.println("'c'         : Copy mp3 to SPIFlash");
    ShowSerial.println("             (Yes, this really does go by copy order.)");
    ShowSerial.println();
    ShowSerial.println("Any other key to show this menu");
    ShowSerial.println();
}
```

- **Passo 3.** Faça o upload da demonstração. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da IDE Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **9600**.

- **Passo 5.** O resultado deve se parecer com o mostrado abaixo. Siga a lista de comandos para reproduzir música ou usar outros recursos úteis.

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/result.jpg)

## Perguntas Frequentes (FAQ)

**Q1#** O cartão TF não pode ser reconhecido.

**A1:** Verifique o sistema de arquivos do cartão TF e certifique-se de que ele esteja no sistema de arquivos FAT16 ou FAT32.

## Recursos

- **[ZIP]** [Grove - MP3 V3 Schematic](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)
- **[PDF]** [WT2003S Datasheet](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
