---
description: Introdução ao uso do Grove MP3 v4.
title: Grove - MP3 v4.0
keywords:
  - mp3
  - grove
image: https://files.seeedstudio.com/wiki/grove-mp3-v4/0.webp
slug: /grove_mp3_v4
sku: 107020129
last_update:
  date: 12/13/2024
  author: Carla
createdAt: '2023-10-31'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/grove_mp3_v4/
---

# Grove - MP3 v4.0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg" style={{width:600, height:'auto'}}/></div>

## Introdução

Este módulo MP3 com um Arduino pode se transformar no seu reprodutor de música multi‑formato! É um módulo de música baseado no chip de áudio de alta qualidade WT2605CX, que tem melhor desempenho do que o MP3 V3 e oferece suporte à interface Grove, interface Speaker JST, conector de áudio de 3,5 mm e cartão SD, suportando SPI-Flash, cartão TF e pen drive USB.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Suporte a múltiplos formatos de música: Suporta formato de áudio de voz de alta qualidade (8kbps~320kbps) com som agradável, formatos MP3 e WAV;
- Suporte a múltiplos formatos de armazenamento: Suporta SPI-Flash, cartão TF, pen drive USB e sistema de arquivos FAT, FAT32;
- Modo de controle: Interface de comunicação AT rica para atender às suas necessidades;
- Operações ricas: suporta reprodução aleatória por comandos, função de reprodução em loop contínuo e muito mais;
- Modo de saída de áudio: saída DAC padrão para amostras.

## Especificações

| Especificação                          | Detalhes                                    |
| ---------------------------------------- | ------------------------------------------- |
| Entrada                                | 5V(DC)                                     |
| Corrente de operação (sem estado de saída de sinal) | menor que 15 mA                            |
| Corrente de operação (com estado de saída de sinal) | menor que 40 mA                            |
| Chip                                   | WT2605CX                                     |
| Tensão de saída LDO do chip           | 3,3 V                                      |
| Corrente de saída do chip             | 100 mA (máx.)                              |
| Formatos de arquivo suportados        | MP3, WAV, WMA                               |
| Memória máxima suportada para cartão SD | 32 GB                                      |
| Taxa de amostragem                    | 8/11.025/12/16/22.05/24/32/44.1/48 (KHz)   |

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_716539_x5zKByNTcw7Jc8sR_1706149458?w=2608&h=1322&type=image/png" style={{width:750, height:'auto'}}/></div>

## Primeiros passos

Se você estiver usando o módulo Grove MP3 pela primeira vez, talvez primeiro precise ter um cartão TF com músicas já armazenadas nele e um dispositivo de saída, seja um fone de ouvido com cabo de áudio de 3,5 mm ou um alto‑falante. Os alto‑falantes vêm no kit por padrão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/1.jpg" style={{width:600, height:'auto'}}/></div>

### Preparação de software

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione‑a ao Arduino IDE.

- Se você quiser usar **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#software-preparation)** para concluir a adição.

- Se você quiser usar **Seeeduino V4.3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/)** para concluir a adição.

- Se você quiser usar **Arduino UNO R4 WiFi** para as rotinas posteriores, clique em **Tools-> Board-> Boards Manager...**, digite a palavra‑chave "UNO R4 WiFi" no campo de busca e instale a versão mais recente (ou a versão que você deseja usar).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>

### Visão geral da biblioteca Arduino

#### 1. Biblioteca Seeed Serial MP3 Player

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

##### Função

Antes de começarmos a desenvolver um sketch, vamos observar as funções disponíveis da biblioteca.

- `void WT2605C<T>::init(T& serialPort)` —— Esta função é responsável por configurar a porta serial usada pelo módulo MP3.
  - **Parâmetros de entrada**:

    - **serialPort**: A porta serial.

- `uint8_t WT2605C<T>::playSPIFlashSong(uint16_t index)` —— Especifica o índice do diretório raiz da Flash para reprodução. Os arquivos são indexados na ordem em que foram copiados para a Flash.
  - **Parâmetros de entrada**:

    - **index**: Índice da música a ser reproduzida.

- `uint8_t WT2605C<T>::playSDRootSong(uint32_t index)` —— Especifica o índice do diretório raiz do cartão TF para reprodução. Este comando indexa os arquivos no cartão TF para reprodução, afetado pela ordem em que os arquivos são armazenados, e os arquivos são ordenados de acordo com a ordem de indexação. A ordem de indexação dos arquivos é de acordo com o momento em que os arquivos são copiados para o cartão TF.
  - **Parâmetros de entrada**:

    - **index**: Índice da música a ser reproduzida.

- `uint8_t WT2605C<T>::playSDSong(const char* fileName)` —— Reproduz a música com o nome de arquivo especificado. (Os nomes de arquivo não devem ter mais de 8 caracteres)
  - **Parâmetros de entrada**:

    - **fileName**: O nome do arquivo de música que você deseja reproduzir.

- `uint8_t WT2605C<T>::playSDDirectorySong(const char* dir, uint16_t index)` —— Especifica o índice de reprodução na pasta do cartão TF. Este comando pode especificar a pasta no diretório raiz e reproduzir o áudio na pasta de acordo com o número de índice da pasta (o nome da pasta não deve ter mais de 8 caracteres). O nome da pasta suporta: chinês, inglês, números, símbolos especiais. Se você usar chinês para enviar código, precisa usar o formato de codificação "UTF-16" para transcodificar o código antes de enviá‑lo.
  - **Parâmetros de entrada**:

    - **dir**: A pasta onde a música que você deseja reproduzir está localizada.
    - **index**: Índice dos arquivos de música.

- `uint8_t WT2605C<T>::playUDiskRootSong(uint32_t index)` —— Especifica o índice do diretório raiz do pen drive USB para reprodução. Este comando indexa os arquivos no pen drive USB para reprodução, afetado pela ordem em que os arquivos são armazenados; os arquivos são ordenados de acordo com a ordem de indexação. A ordem de indexação dos arquivos é de acordo com o momento em que os arquivos são copiados para o pen drive USB.
  - **Parâmetros de entrada**:

    - **index**: Índice dos arquivos de música.

- `uint8_t WT2605C<T>::playUDiskSong(const char* fileName)` —— Especifica o nome de arquivo do pen drive USB para reprodução. Este comando permite que você especifique um nome de arquivo no diretório raiz para reprodução de áudio (o nome do arquivo não deve ter mais de 8 caracteres). Formatos de áudio suportados: `.mp3` e `.wav`.
  - **Parâmetros de entrada**:

    - **fileName**: O nome do arquivo de música que você deseja reproduzir.

- `uint8_t WT2605C<T>::playUDiskDirectorySong(const char* dir, uint32_t index)` —— Especifica o nome do arquivo a ser reproduzido na pasta do pen drive USB. Este comando especifica o nome de um arquivo em uma pasta no diretório raiz para ser reproduzido. (O nome do arquivo não deve ter mais de 8 caracteres.) Formatos de áudio suportados: `.mp3` e `.wav`.
  - **Parâmetros de entrada**:

    - **dir**: A pasta onde a música que você deseja reproduzir está localizada.
    - **index**: Nome dos arquivos de música.

- `uint8_t WT2605C<T>::pause_or_play()` —— Comando de pausa de reprodução. No estado de reprodução, envie este comando para pausar a reprodução; no estado de pausa, envie este comando para retomar a reprodução a partir da pausa. No estado de parada de reprodução, envie este comando para reiniciar a reprodução no endereço atual.
  - **Parâmetros de saída**: Retorna 0 para execução bem‑sucedida e -1 para execução malsucedida.

- `uint8_t WT2605C<T>::stop()` —— Comando de parada. Envie este comando para parar de reproduzir a música que está sendo reproduzida no momento.
  - **Parâmetros de saída**: Retorna 0 para execução bem-sucedida e -1 para execução malsucedida.

- `uint8_t WT2605C<T>::next()` —— A próxima ordem de música. Este comando aciona a reprodução da próxima música no diretório atual e, quando a última música é reproduzida, o envio deste comando aciona a reprodução da primeira música.
  - **Parâmetros de saída**: Retorna 0 para execução bem-sucedida e -1 para execução malsucedida.

- `uint8_t WT2605C<T>::previous()` —— Ordem de música anterior. Este comando aciona a reprodução da próxima música no diretório atual e, quando a primeira música está sendo reproduzida, o envio deste comando aciona a reprodução da última música.
  - **Parâmetros de saída**: Retorna 0 para execução bem-sucedida e -1 para execução malsucedida.

- `uint8_t WT2605C<T>::volume(uint8_t vol)` —— Comandos de controle de volume. Existem 32 níveis de volume, de 0 a 31, onde 0 é mudo e 31 é o volume máximo.
  - **Parâmetros de saída**: Retorna 0 para execução bem-sucedida e -1 para execução malsucedida.

- `uint8_t WT2605C<T>::volumeDown()` —— Comandos de controle de volume para diminuir.
  - **Parâmetros de saída**: Retorna 0 para execução bem-sucedida e -1 para execução malsucedida.

- `uint8_t WT2605C<T>::volumeUp()` —— Comando de controle de volume para aumentar.
  - **Parâmetros de saída**: Retorna 0 para execução bem-sucedida e -1 para execução malsucedida.

- `uint8_t WT2605C<T>::playMode(PLAY_MODE mode)` —— Especifica o modo de reprodução. Este comando modifica o modo de reprodução em caso de comunicação normal e possui função de memória após desligar.
  - **Parâmetros de entrada**:

    - **mode**:

            1. **CYCLE**: Modo de repetição para todas as faixas.
            2. **SINGLE_CYCLE**: Modo de reprodução em repetição de uma única música.
            3. **DIR_CYCLE**: Modo de repetição de pasta.
            4. **RANDOM**: Modo de reprodução aleatória.
            5. **SINGLE_SHOT**: Modo de reprodução de uma única música.

  - **Parâmetros de saída**: Retorna 0 para execução bem-sucedida e -1 para execução malsucedida.

- `uint8_t WT2003S<T>::cutInPlay(STORAGE device, uint32_t index)` —— Comando de inserção. Este comando só pode ser inserido no estado de reprodução e não é válido no estado de parada. Quando este comando é enviado, a faixa que está sendo reproduzida será pausada imediatamente e, em seguida, a faixa de reprodução especificada neste comando será executada, e depois a faixa originalmente pausada será reproduzida. Quando a reprodução terminar, a faixa originalmente pausada será reproduzida.
  - **Parâmetros de entrada**:

    - **device**:

            1. **SPIFLASH**: Especifica o endereço de índice dentro da FLASH interpolada;
            2. **SD**: Insere o endereço de índice especificado no cartão SD;
            3. **UDISK**: Insere e reproduz o endereço de índice especificado no pen drive USB.

    - **index**: Índice dos arquivos de música.

  - **Parâmetros de saída**: Retorna 0 para execução bem-sucedida e -1 para execução malsucedida.

##### Variáveis padrão

```cpp
#define AT_HEADER          "AT+"
#define AT_CMD_PLAY        "PLAY"
#define AT_CMD_LPLAY       "LPLAY"
#define AT_CMD_SPLAY       "SPLAY"
#define AT_CMD_FPLAY       "FPLAY"
#define AT_CMD_PP          "PP"
#define AT_CMD_STOP        "STOP"
#define AT_CMD_NEXT        "NEXT"
#define AT_CMD_PREV        "PREV"
#define AT_CMD_VOL         "VOL"
#define AT_CMD_VOLUP       "VOLUP"
#define AT_CMD_VOLDOWN     "VOLDOWN"
#define AT_CMD_REPEATMODE  "REPEATMODE"
#define AT_CMD_STEPINPLAY  "STEPINPLAY"
#define AT_CMD_TOTALTIME   "TOTALTIME"
#define AT_CMD_CURTIME     "CURTIME"
#define AT_CMD_CHANGE_DEV  "CHANGE_DEV"
#define AT_CMD_BUSY        "BUSY"
#define AT_CMD_VBATPCT     "VBATPCT"
#define AT_CMD_GVER        "GVER"
#define AT_CMD_GCFGVER     "GCFGVER"
#define AT_CMD_POWEROFF    "POWEROFF"
#define AT_CMD_OTA         "OTA"
#define AT_CMD_COPY        "COPY"
#define AT_CMD_BAUD        "BAUD"

#define WT2605C_TIMEOUT       1000
#define WT2605C_SEND_MAX_SIZE 64

#define STORAGE_SPIFLASH   "fat_nor"
#define STORAGE_SD         "sd0"
#define STORAGE_UDISK      "udisk0"

typedef enum {
    CYCLE        = 0x00,
    SINGLE_CYCLE = 0x01,
    DIR_CYCLE    = 0x02,
    RANDOM       = 0x03,
    SINGLE_SHOT  = 0x04,
} PLAY_MODE;

typedef enum {
    SPIFLASH = 0x00,
    SD       = 0x01,
    UDISK    = 0x02,
} STORAGE;
```

##### Instalação

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Como você já baixou a biblioteca em formato zip, abra o seu Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

#### 2. Biblioteca Grove Gesture

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture/tree/dev" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2"
viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign:
'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48
1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.
44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.
53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

##### Função

Antes de começarmos a desenvolver um sketch, vamos olhar as funções disponíveis da biblioteca.

1. `bool init()` —— Esta função inicializa o Grove Gesture Sensor e retorna **True** se a inicialização for bem-sucedida e **False** se falhar.

2. `bool getResult(paj7620_gesture_t& res)` —— A função serve para obter o resultado do reconhecimento do gesto pelo sensor.

##### Instalação

Como você já baixou a biblioteca em formato zip, abra o seu Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e
se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Demo 1: Exemplo com Seeeduino

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos rodar alguns exemplos para o nosso Seeeduino V4.3 para ver como ele se comporta.

**Passo 1.** Materiais necessários

Este tutorial usará o Seeeduino V4.3 como exemplo para explicar o uso do módulo Grove MP3. Então você talvez precise preparar os seguintes materiais.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino V4.3</th>
   <th>Grove - MP3 v4.0</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**Passo 2.** Conexão de Hardware

Conecte o Grove - MP3 V4.0 à porta **UART** do Seeeduino V4.3. Depois, conecte o Seeeduino ao PC por meio de um cabo USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/2.jpg" style={{width:600, height:'auto'}}/></div><br />

**Passo 3.** Abra o exemplo **WT2605C_Terminal_player** pelo caminho: **File** → **Examples** → **Seeed_Serial_MP3_Player** → **WT2605C_Terminal_player**. Você pode reproduzir arquivos de música no formato `.mp3` usando este módulo e usar o conector de áudio de 3,5 mm, alto-falante via porta de alto-falante JST2.0 ou até mesmo saída em ambos ao mesmo tempo.

O código de exemplo `WT2605C_Terminal_player` é o seguinte:

```cpp
#include "WT2605C_Player.h"

#ifdef __AVR__
  #include <SoftwareSerial.h>
  SoftwareSerial SSerial(2, 3); // RX, TX
  #define COMSerial SSerial
  #define ShowSerial Serial

  WT2605C<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define COMSerial Serial1
  #define ShowSerial SerialUSB

  WT2605C<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
  #define COMSerial Serial
  #define ShowSerial SerialUSB

  WT2605C<HardwareSerial> Mp3Player;
#endif

void setup() {
  while (!ShowSerial);
  ShowSerial.begin(9600);
  COMSerial.begin(115200);
  ShowSerial.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
  Mp3Player.init(COMSerial);

  ShowSerial.println("0...");
}


void loop() {
  if(ShowSerial.available()) {
    String input = Serial.readString();
    input.trim();

    if(input.startsWith("v")) {
      int vol = input.substring(1).toInt();
      int err = Mp3Player.volume(vol);
      ShowSerial.println(err);
      if(!err) ShowSerial.println("Volume set to: " + String(vol));
      else ShowSerial.println("ERROR");
    }

    else if(input.startsWith("m")) {
      if(input.substring(1) == "1"){
        ShowSerial.println("1");
        int err = Mp3Player.playMode(0x00);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "2"){
        ShowSerial.println("2");
        int err = Mp3Player.playMode(0x01);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Single song loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "3"){
        ShowSerial.println("3");
        int err = Mp3Player.playMode(0x02);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Folder loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "4"){
        ShowSerial.println("4");
        int err = Mp3Player.playMode(0x03);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Random mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "5"){
        ShowSerial.println("5");
        int err = Mp3Player.playMode(0x04);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Single song mode.");
        else ShowSerial.println("ERROR");
      }
    }
    else if(input.startsWith("b")){
      int index = input.substring(1).toInt();
      Mp3Player.playSDRootSong(index);
      ShowSerial.println("Play music: " + String(index));
    }
    else if(input.startsWith("+")){
      int err = Mp3Player.volumeUp();
      if(!err) ShowSerial.println("Volume up");
      else ShowSerial.println("ERROR");
    }
    else if(input.startsWith("-")){
      int err = Mp3Player.volumeDown();
      if(!err) ShowSerial.println("Volume down");
      else ShowSerial.println("ERROR");
    }
    else if(input.startsWith("n")){
      Mp3Player.next();
      ShowSerial.println("Next song");
    }
    else if(input.startsWith("p")){
      Mp3Player.previous();
      ShowSerial.println("Previous song");
    }
  }
}
```

**Passo 4.** Envie o demo. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/). Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Defina a taxa de baud para **115200**. O resultado deve ser semelhante ao mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/3.png" style={{width:700, height:'auto'}}/></div><br />

Você pode inserir vários comandos para controlar o módulo MP3.

- Digite `v{num}` para definir o volume de reprodução, por exemplo, v20 significa definir o volume de reprodução para 20.
- Digite `m{1~5}` para definir o modo de reprodução.
- Digite `b{num}` para reproduzir a música no índice especificado.
- Digite `+`, aumentar o volume.
- Digite `-`, diminuir o volume.
- Digite `n`, próxima música.
- Digite `p`, música anterior.

Você pode ser mais criativo e adicionar mais recursos de MP4.

## Demo 2: Controle de Música por Gestos

**Passo 1.** Materiais necessários

Este tutorial usará o **Arduino UNO R4 WiFi** como controle mestre, você pode mostrar seu dedo na frente do sensor de gesto e o sensor reconhecerá seu dedo para controlar o reprodutor de música. Então você precisará preparar os seguintes materiais.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Arduino UNO R4 WiFi</th>
   <th>Grove - MP3 v4.0</th>
      <th>Grove Smart IR Gesture Sensor (PAJ7660)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/7.png"
style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg"
style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg"
style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</
font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</
font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</
font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**Passo 2.** Coloque a chave DIP de 4 posições do Grove Smart IR Gesture Sensor (PAJ7660) na posição IIC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style=
{{width:100, height:'auto'}}/></div>

A segunda engrenagem da esquerda para a direita precisa ser definida como OFF, todas as outras devem estar em ON.

**Passo 3.** Conexão de Hardware

Conecte o Grove - MP3 V4.0 à porta **UART** do Arduino UNO R4 WiFi, conecte o Grove Gesture Sensor à porta **IIC** do Arduino UNO R4 WiFi, insira o cartão SD no slot de cartão do **Grove-mp3-v4** e, em seguida, conecte o Arduino ao PC por meio de um cabo USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/6.jpg" style=
{{width:500, height:'auto'}}/></div>

**Passo 4.**  Abra o Arduino IDE. O código de exemplo `Gesture_Control_Music` é o seguinte:

```cpp
#include "WT2605C_Player.h"
#include "Gesture.h"
#include <SoftwareSerial.h>

SoftwareSerial SSerial(2, 3); //use D2,D3 to simulate RX,TX
WT2605C<SoftwareSerial> Mp3Player;
pag7660 Gesture; // Combined mode is used by default

#define COMSerial SSerial
#define ShowSerial Serial


void setup() {
  ShowSerial.print(1);
  ShowSerial.begin(9600);
  COMSerial.begin(115200);
  Mp3Player.init(COMSerial);
  ShowSerial.println("initial finished");

  if(Gesture.init()) {
        ShowSerial.println("PAG7660 initialization success");
        ShowSerial.println("Please input your gestures:\n");
    } else {
        ShowSerial.println("PAG7660 initialization failed");
    }
}

void loop() {
    int ans;
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        ans = printResultCombinedMode(result);
        // ShowSerial.println("ans=");
        // ShowSerial.print(ans);
        playSong(ans);
    }
}

int playSong(int index){
    //if index equate to 0, then don't play song
    if(index==0){
      return 0;
    }
    Mp3Player.playSDRootSong(index);
    ShowSerial.println("Play music: " + String(index));
    return 1;
}

int printResultCombinedMode(const pag7660_gesture_t& result) {

    int ans = 0;
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };

    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                ShowSerial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        ans = result.type;
        ShowSerial.println("finger number");
        break;
    case 6:
        ans = result.type;
        ShowSerial.print("Rotate Right ");
        ShowSerial.println(result.rotate);
        break;
    case 7:
        ans = result.type;
        ShowSerial.print("Rotate Left ");
        ShowSerial.println(result.rotate);
        break;
    case 8:
        ans = result.type;
        ShowSerial.println("Swipe Left");
        break;
    case 9:
        ans = result.type;
        ShowSerial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        ans = result.type;
        ShowSerial.print(result.type - 19 + 1);
        ShowSerial.println("-finger push");
        break;
    default:
        break;
    }
    return ans;
}
```

**Passo 5.** Faça o upload da demonstração. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/). Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Para gestos válidos você pode se orientar [aqui](https://wiki.seeedstudio.com/pt-br/grove_gesture_paj7660/#Visão-geral-do-hardware), o resultado deve ser semelhante ao mostrado abaixo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/5.png" style={{width:800, height:'auto'}}/></div>

## FAQ

### P: O cartão TF não pode ser reconhecido?

**R:** Verifique o sistema de arquivos do cartão TF e certifique-se de que ele seja FAT16 ou FAT32.

## Recursos

- **[ZIP]** [Grove-MP3 V4 SCH&PCB](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4_SCH&PCB.zip)
- **[PDF]** [Grove-MP3 V4 SCH](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4.pdf)
- **[PDF]** [Grove-MP3 V4 datasheet](https://files.seeedstudio.com/wiki/grove-mp3-v4/WT2605C-32N-A001-datasheet.pdf)

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
