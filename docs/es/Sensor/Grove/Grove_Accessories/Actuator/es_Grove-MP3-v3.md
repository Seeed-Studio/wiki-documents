---
title: Grove - MP3 v3.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-MP3-v3/
slug: /es/Grove-MP3-v3
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-preview.jpg)

El Grove - MP3 es un módulo de música súper mini de 20x40mm basado en el decodificador de audio WT2003S-20SS. Soporta archivos de audio en formato MP3 de alta calidad con una frecuencia de muestreo de 8~48KHz y una tasa de bits de 8~320Kbps. Para expandir la capacidad de almacenamiento, agregamos una ranura para tarjeta TF en la parte posterior del módulo. La tarjeta TF adopta el modo de interfaz DIO, soporta hasta 32GB, soporta sistema de archivos FAT16, FAT32. Ahora con este pequeño módulo de música, puedes llevar cientos y miles de canciones en tu bolsillo.

Como indica el nombre, el Grove - MP3 V3 es la versión mejorada del Grove - MP3 V2. Comparado con el Grove MP3 V2, el V3 agregó un puerto de altavoz JST2.0, para que puedas reproducir el audio a través del altavoz y auriculares de 3.5mm al mismo tiempo.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Soporta archivos de audio en formato MP3
- Frecuencia de muestreo: 8~48KHz / tasa de bits: 8~320Kbps
- Soporta tarjeta TF de hasta 32GB
- Soporta salida de audio por altavoz y auriculares al mismo tiempo
- Compatible con plataformas de 3.3V y 5V.
- Soporta ajuste de volumen de 32 niveles

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Frecuencia de muestreo| 8~48KHz / tasa de bits: 8~320Kbps |
|Interfaz|I2C(Dirección I2C por defecto: 0x36) & No modificable|
|Salida|Altavoz/Conector de audio de 3.5mm|
|Resolución|Soporta ajuste de volumen de 32 niveles|

## Descripción General del Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" /></a></p>
  </figure>
</div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - MP3 V3 -Reproductor de Música|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-thumbnail.jpg)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

#### Conexión de Hardware

- **Paso 1.** Conecta el Grove - MP3 V3 Music Player al puerto **D2** del Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/connect.png)

#### Software

:::tip
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Copia tu archivo de música `.mp3` a la tarjeta tf y guárdalo en la ubicación raíz de la tarjeta tf.

- **Paso 2.** Descarga la librería [Seeed_Serial_MP3](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) desde Github.

:::note
        Consulta Cómo instalar librería para [instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para Arduino.
:::

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo **WT2003S_Terminal_Player** a través de la ruta: **File** → **Examples** → **Seeed_Serial_MP3_Player** → **WT2003S_Terminal_Player**. Puedes reproducir archivos de música en formato `.mp3` usando este módulo, y usar Jack de Audio de 3.5mm, Altavoz a través del puerto de altavoz JST2.0 o incluso salida de ambos al mismo tiempo.

El código de ejemplo WT2003S_Terminal_Player es el siguiente:

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

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**.

- **Paso 5.** El resultado debería verse como se muestra a continuación. Sigue la lista de comandos para reproducir música o usar otras características útiles.

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/result.jpg)

## FAQ

**P1#** La tarjeta TF no puede ser reconocida.

**R1:** Verifica el sistema de archivos de la tarjeta TF, asegúrate de que sea un sistema de archivos FAT16 o FAT32.

## Recursos

- **[ZIP]** [Esquemático del Grove - MP3 V3](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)
- **[PDF]** [Hoja de datos del WT2003S](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
