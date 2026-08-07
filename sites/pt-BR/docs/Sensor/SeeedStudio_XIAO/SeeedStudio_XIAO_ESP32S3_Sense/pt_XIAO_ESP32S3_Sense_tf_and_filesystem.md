---
description: Este tutorial descreve como usar o cartão microSD e o sistema de arquivos no XIAO ESP32S3.
title: Cartão microSD para versão Sense
keywords:
  - xiao esp32s3
  - esp32s3
  - tf
  - sd
  - file
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_sense_filesystem
last_update:
  date: 08/06/2026
  author: Priyanshu Roy
createdAt: '2022-11-15'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_filesystem/
---

# Sistema de arquivos e XIAO ESP32S3 Sense

Neste tutorial, vamos focar no uso do sistema de arquivos do XIAO ESP32S3, principalmente no uso do slot para cartão microSD para a versão Sense. Ao mesmo tempo, vamos apresentar o sistema de arquivos oficial da ESP, SPIFFS, a Flash interna do chip, etc.

:::tip
A parte do cartão microSD deste tutorial **aplica-se apenas** ao **XIAO ESP32S3 Sense**, o restante do conteúdo se aplica ao chip ESP32-S3, então você pode executar os exemplos no XIAO ESP32S3, exceto a parte do cartão microSD.
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introdução

Como o cartão microSD será usado neste tutorial, precisamos instalar a placa de expansão Sense e preparar o cartão microSD com antecedência.

### Instalação da placa de expansão (para Sense)

Instalar a placa de expansão é muito simples, você só precisa alinhar o conector na placa de expansão com o conector B2B no XIAO ESP32S3, pressionar com firmeza até ouvir um “clique” e a instalação estará concluída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Preparar o cartão microSD

O XIAO ESP32S3 Sense suporta cartões microSD de até **32GB**, portanto, se você estiver pronto para comprar um cartão microSD para o XIAO, consulte esta especificação. E formate o cartão microSD para o formato **FAT32** antes de usar o cartão microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Após a formatação, você pode inserir o cartão microSD no slot para cartão microSD. Observe a direção de inserção, o lado com o conector dourado deve ficar voltado para dentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
Se o cartão microSD não estiver sendo reconhecido pelo ESP32S3, mas estiver sendo reconhecido pelo seu computador **e** o erro for parecido com:

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

Siga os passos abaixo:

- Usando o Windows Formatter

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- Usando o [SD Card Formatter](https://www.sdcard.org/downloads/formatter/) (software de terceiros)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**Observação :**

- Este processo levará significativamente mais tempo do que o Quick Format.

- Esses casos surgem se você estiver reutilizando um cartão microSD que foi previamente usado para outros propósitos (ou seja, quando um cartão microSD contendo um sistema operacional Linux está sendo reutilizado).

:::

### Projeto do circuito do slot de cartão para placas de expansão

O slot de cartão do XIAO ESP32S3 Sense ocupa 4 GPIOs do ESP32-S3, e os detalhes dos pinos ocupados são mostrados na tabela abaixo.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">GPIO do ESP32-S3</th>
            <th align="center">Slot para cartão microSD</th>
        </tr>
        <tr>
            <td align="center">GPIO3</td>
            <td align="center">CS</td>
        </tr>
        <tr>
            <td align="center">D8 / A8 / Qt7 / GPIO7</td>
            <td align="center">SCK</td>
        </tr>
        <tr>
            <td align="center">D9 / A9 / Qt8 / GPIO8</td>
            <td align="center">MISO</td>
        </tr>
        <tr>
            <td align="center">D10 / A10 / Qt9 / GPIO9</td>
            <td align="center">MOSI</td>
        </tr>
    </table>
</div>

Isso também significa que, se você optar por usar a função de cartão microSD da placa de expansão, não poderá usar a função SPI do XIAO ESP32S3 ao mesmo tempo. Você pode ativar/desativar a função do cartão microSD conectando/cortando as ilhas de solda do J3.

<table align="center">
 <tr>
     <th>Se você quiser usar os pinos SPI / Desativar o cartão SD da placa de expansão</th>
     <th>Se você quiser ativar o cartão SD na placa de expansão / Desativar os pinos SPI</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>Corte ao longo da linha branca fina para desconectar a conexão da ilha de solda.</td>
    <td>Solde as duas ilhas de solda juntas.</td>
  </tr>
</table>

:::tip
Por padrão, a função de cartão microSD é ativada após a instalação da placa de expansão.
:::

## Modificar os arquivos no cartão microSD

:::caution
Esta seção se aplica apenas ao XIAO ESP32S3 Sense.
:::

Há vários exemplos na Arduino IDE que mostram como manipular arquivos no cartão microSD usando o XIAO ESP32S3. Na Arduino IDE, vá para **File > Examples > SD > SD_Test**, ou copie o código a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/68.png" style={{width:700, height:'auto'}}/></div>

```cpp
#include "FS.h"
#include "SD.h"
#include "SPI.h"

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("Listing directory: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("Failed to open directory");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("Not a directory");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

void createDir(fs::FS &fs, const char * path){
    Serial.printf("Creating Dir: %s\n", path);
    if(fs.mkdir(path)){
        Serial.println("Dir created");
    } else {
        Serial.println("mkdir failed");
    }
}

void removeDir(fs::FS &fs, const char * path){
    Serial.printf("Removing Dir: %s\n", path);
    if(fs.rmdir(path)){
        Serial.println("Dir removed");
    } else {
        Serial.println("rmdir failed");
    }
}

void readFile(fs::FS &fs, const char * path){
    Serial.printf("Reading file: %s\n", path);

    File file = fs.open(path);
    if(!file){
        Serial.println("Failed to open file for reading");
        return;
    }

    Serial.print("Read from file: ");
    while(file.available()){
        Serial.write(file.read());
    }
    file.close();
}

void writeFile(fs::FS &fs, const char * path, const char * message){
    Serial.printf("Writing file: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.print(message)){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

void appendFile(fs::FS &fs, const char * path, const char * message){
    Serial.printf("Appending to file: %s\n", path);

    File file = fs.open(path, FILE_APPEND);
    if(!file){
        Serial.println("Failed to open file for appending");
        return;
    }
    if(file.print(message)){
        Serial.println("Message appended");
    } else {
        Serial.println("Append failed");
    }
    file.close();
}

void renameFile(fs::FS &fs, const char * path1, const char * path2){
    Serial.printf("Renaming file %s to %s\n", path1, path2);
    if (fs.rename(path1, path2)) {
        Serial.println("File renamed");
    } else {
        Serial.println("Rename failed");
    }
}

void deleteFile(fs::FS &fs, const char * path){
    Serial.printf("Deleting file: %s\n", path);
    if(fs.remove(path)){
        Serial.println("File deleted");
    } else {
        Serial.println("Delete failed");
    }
}

void testFileIO(fs::FS &fs, const char * path){
    File file = fs.open(path);
    static uint8_t buf[512];
    size_t len = 0;
    uint32_t start = millis();
    uint32_t end = start;
    if(file){
        len = file.size();
        size_t flen = len;
        start = millis();
        while(len){
            size_t toRead = len;
            if(toRead > 512){
                toRead = 512;
            }
            file.read(buf, toRead);
            len -= toRead;
        }
        end = millis() - start;
        Serial.printf("%u bytes read for %u ms\n", flen, end);
        file.close();
    } else {
        Serial.println("Failed to open file for reading");
    }


    file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }

    size_t i;
    start = millis();
    for(i=0; i<2048; i++){
        file.write(buf, 512);
    }
    end = millis() - start;
    Serial.printf("%u bytes written for %u ms\n", 2048 * 512, end);
    file.close();
}

void setup(){
    Serial.begin(115200);
    while(!Serial);
    if(!SD.begin(21)){
        Serial.println("Card Mount Failed");
        return;
    }
    uint8_t cardType = SD.cardType();

    if(cardType == CARD_NONE){
        Serial.println("No SD card attached");
        return;
    }

    Serial.print("SD Card Type: ");
    if(cardType == CARD_MMC){
        Serial.println("MMC");
    } else if(cardType == CARD_SD){
        Serial.println("SDSC");
    } else if(cardType == CARD_SDHC){
        Serial.println("SDHC");
    } else {
        Serial.println("UNKNOWN");
    }

    uint64_t cardSize = SD.cardSize() / (1024 * 1024);
    Serial.printf("SD Card Size: %lluMB\n", cardSize);

    listDir(SD, "/", 0);
    createDir(SD, "/mydir");
    listDir(SD, "/", 0);
    removeDir(SD, "/mydir");
    listDir(SD, "/", 2);
    writeFile(SD, "/hello.txt", "Hello ");
    appendFile(SD, "/hello.txt", "World!\n");
    readFile(SD, "/hello.txt");
    deleteFile(SD, "/foo.txt");
    renameFile(SD, "/hello.txt", "/foo.txt");
    readFile(SD, "/foo.txt");
    testFileIO(SD, "/test.txt");
    Serial.printf("Total space: %lluMB\n", SD.totalBytes() / (1024 * 1024));
    Serial.printf("Used space: %lluMB\n", SD.usedBytes() / (1024 * 1024));
}

void loop(){

}
```

:::caution
Observe que você não pode usar o programa de exemplo diretamente, será necessário fazer pequenas modificações no programa para garantir que ele funcione. A modificação é alterar o código original de `SD.begin()` para `SD.begin(21)` na função `Setup()`. Especifique o número do pino para a inicialização.
:::

Envie o programa para o XIAO ESP32S3 Sense, abra o monitor serial e você verá o processo de criação e gravação do arquivo. Você também pode usar um adaptador de microSD para USB para acessar, pelo computador, os arquivos e conteúdos recém-criados.

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### Anotação do programa

Primeiro, você precisa incluir as seguintes bibliotecas: **FS.h** para manipular arquivos, **SD.h** para fazer a interface com o cartão microSD e **SPI.h** para usar o protocolo de comunicação SPI.

1. No `setup()`, as seguintes linhas inicializam o cartão microSD com `SD.begin(21)`. Aqui, precisamos passar um parâmetro para `SD.begin()`, que é o pino CS. E, para o design do cartão microSD da placa de expansão, o pino CS está conectado ao **GPIO 21**. Se você estiver usando o Round Display for XIAO, então o parâmetro passado deve ser **D2**.

2. As seguintes linhas imprimem o tipo de cartão microSD no Monitor Serial.

```c
uint8_t cardType = SD.cardType();

if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
}

Serial.print("SD Card Type: ");
if(cardType == CARD_MMC){
    Serial.println("MMC");
} else if(cardType == CARD_SD){
    Serial.println("SDSC");
} else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
} else {
    Serial.println("UNKNOWN");
}
```

3. Você pode obter o tamanho do cartão microSD chamando o método `cardSize()`:

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD Card Size: %lluMB\n", cardSize);
```

**O exemplo fornece várias funções para manipular arquivos no cartão microSD.**

4. A função `listDir()` lista os diretórios no cartão SD. Essa função aceita como argumentos o sistema de arquivos (SD), o nome do diretório principal e os níveis de profundidade dentro do diretório.

   Aqui está um exemplo de como chamar essa função. O `/` corresponde ao diretório raiz do cartão microSD.

```c
listDir(SD, "/", 0);
```

5. A função `createDir()` cria um novo diretório. Passe como argumento o sistema de arquivos `SD` e o caminho do nome do diretório. Por exemplo, o comando a seguir cria um novo diretório na raiz chamado `mydir`.

```c
createDir(SD, "/mydir");
```

6. Para remover um diretório do cartão microSD, use a função `removeDir()` e passe como argumento o sistema de arquivos SD e o caminho do nome do diretório.

```c
removeDir(SD, "/mydir");
```

7. A função `readFile()` lê o conteúdo de um arquivo e imprime o conteúdo no Monitor Serial. Como nas funções anteriores, passe como argumento o sistema de arquivos `SD` e o caminho do arquivo. Por exemplo, a linha a seguir lê o conteúdo do arquivo `hello.txt`.

```c
readFile(SD, "/hello.txt")
```

8. Para gravar conteúdo em um arquivo, você pode usar a função `writeFile()`. Passe como argumentos o sistema de arquivos `SD`, o caminho do arquivo e a mensagem. A linha a seguir grava `Hello` no arquivo `hello.txt`.

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. Da mesma forma, você pode acrescentar conteúdo a um arquivo (sem sobrescrever o conteúdo anterior) usando a função `appendFile()`. A linha a seguir acrescenta a mensagem `World!\n` no arquivo `hello.txt`. O `\n` significa que, da próxima vez que você escrever algo no arquivo, isso será escrito em uma nova linha.

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. Você pode renomear um arquivo usando a função `renameFile()`. Passe como argumentos o sistema de arquivos SD, o nome original do arquivo e o novo nome. A linha a seguir renomeia o arquivo `hello.txt` para `foo.txt`.

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. Use a função `deleteFile()` para excluir um arquivo. Passe como argumento o sistema de arquivos SD e o caminho do arquivo que você deseja excluir. A linha a seguir exclui o arquivo `foo.txt` do cartão microSD.

```c
deleteFile(SD, "/foo.txt");
```

12. A função `testFileIO()` mostra quanto tempo leva para ler o conteúdo de um arquivo. A função a seguir testa o arquivo test.txt.

```c
testFileIO(SD, "/test.txt");
```

## Aplicação com cartão microSD baseada em registro de dados de gás

:::caution
Esta seção se aplica apenas ao XIAO ESP32S3 Sense.
:::

Este projeto mostra como registrar dados com carimbos de data e hora em um cartão TF usando o XIAO ESP32S3 Sense. Como exemplo, registraremos leituras de temperatura do Multichannel Gas Sensor a cada 10 minutos. O XIAO ESP32S3 ficará em modo de sono profundo entre cada leitura e solicitará a data e a hora usando o Network Time Protocol (NTP).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

Para concluir este projeto, você precisará preparar antecipadamente o seguinte hardware.

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Multichannel Gas Sensor v2</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Para o software, você precisa instalar antecipadamente as seguintes bibliotecas para a IDE do Arduino.

- Biblioteca NTPClient bifurcada por Taranais

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- Biblioteca Multichannel Gas Sensor

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Aqui está o programa de exemplo completo. No programa, precisaremos usar o horário obtido pela rede, portanto você precisa alterar o nome e a senha do WiFi no programa para os seus.

```cpp
#include "FS.h"
#include "SD.h"
#include <SPI.h>

//multichannel gas libraries
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>

// Libraries to get time from NTP Server
#include <NTPClient.h>
#include <WiFiUdp.h>

#include "WiFi.h"

// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000;  // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;

// Replace with your network credentials
const char* ssid     = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

// Define CS pin for the SD card module
#define SD_CS 21

// Save reading number on RTC memory
RTC_DATA_ATTR int readingID = 0;

String dataMessage;

// Gas Sensor variables
int NO2_val, C2H5CH_val, VOC_val, CO_val;
GAS_GMXXX<TwoWire> gas;

// Define NTP Client to get time
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

// Variables to save date and time
String formattedDate;
String dayStamp;
String timeStamp;

void setup() {
  // Start serial communication for debugging purposes
  Serial.begin(115200);

  // Connect to Wi-Fi network with SSID and password
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected.");

  // Initialize a NTPClient to get time
  timeClient.begin();
  // Set offset time in seconds to adjust for your timezone, for example:
  // GMT +1 = 3600
  // GMT +8 = 28800
  // GMT -1 = -3600
  // GMT 0 = 0
  timeClient.setTimeOffset(3600);

  // Initialize SD card
  SD.begin(SD_CS);
  if(!SD.begin(SD_CS)) {
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();
  if(cardType == CARD_NONE) {
    Serial.println("No SD card attached");
    return;
  }
  Serial.println("Initializing SD card...");
  if (!SD.begin(SD_CS)) {
    Serial.println("ERROR - SD card initialization failed!");
    return;    // init failed
  }

  // If the data.txt file doesn't exist
  // Create a file on the SD card and write the data labels
  File file = SD.open("/data.txt");
  if(!file) {
    Serial.println("File doens't exist");
    Serial.println("Creating file...");
    writeFile(SD, "/data.txt", "Reading ID, Date, Hour, NO2, C2H5CH, VOC, CO \r\n");
  }
  else {
    Serial.println("File already exists");
  }
  file.close();

  // Start the gas sensor
  gas.begin(Wire, 0x08); // use the hardware I2C

  getReadings();
  getTimeStamp();
  logSDCard();

  // Increment readingID on every new reading
  readingID++;

  // Start deep sleep
  Serial.println("DONE! Going to sleep now.");

  // Enable Timer wake_up
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  esp_deep_sleep_start();
}

void loop() {
  // The ESP32 will be in deep sleep
  // it never reaches the loop()
}

// Function to get temperature
void getReadings(){
  // GM102B NO2 sensor ppm
  NO2_val = gas.getGM102B();
  // GM302B C2H5CH sensor ppm
  C2H5CH_val = gas.getGM302B();
  // GM502B VOC sensor
  VOC_val = gas.getGM502B();
  // GM702B CO sensor
  CO_val = gas.getGM702B();

  Serial.print("NO2 Value is: ");
  Serial.println(NO2_val);

  Serial.print("C2H5CH Value is: ");
  Serial.println(C2H5CH_val);

  Serial.print("VOC Value is: ");
  Serial.println(VOC_val);

  Serial.print("CO Value is: ");
  Serial.println(CO_val);
}

// Function to get date and time from NTPClient
void getTimeStamp() {
  while(!timeClient.update()) {
    timeClient.forceUpdate();
  }
  // The formattedDate comes with the following format:
  // 2018-05-28T16:00:13Z
  // We need to extract date and time
  formattedDate = timeClient.getFormattedDate();
  Serial.println(formattedDate);

  // Extract date
  int splitT = formattedDate.indexOf("T");
  dayStamp = formattedDate.substring(0, splitT);
  Serial.println(dayStamp);
  // Extract time
  timeStamp = formattedDate.substring(splitT+1, formattedDate.length()-1);
  Serial.println(timeStamp);
}

// Write the sensor readings on the SD card
void logSDCard() {
  dataMessage = String(readingID) + "," + String(dayStamp) + "," + String(timeStamp) + "," +
                String(NO2_val) + "," + String(C2H5CH_val) + "," + String(VOC_val) + "," +
                String(CO_val) + "\r\n";
  Serial.print("Save data: ");
  Serial.println(dataMessage);
  appendFile(SD, "/data.txt", dataMessage.c_str());
}

// Write to the SD card (DON'T MODIFY THIS FUNCTION)
void writeFile(fs::FS &fs, const char * path, const char * message) {
  Serial.printf("Writing file: %s\n", path);

  File file = fs.open(path, FILE_WRITE);
  if(!file) {
    Serial.println("Failed to open file for writing");
    return;
  }
  if(file.print(message)) {
    Serial.println("File written");
  } else {
    Serial.println("Write failed");
  }
  file.close();
}

// Append data to the SD card (DON'T MODIFY THIS FUNCTION)
void appendFile(fs::FS &fs, const char * path, const char * message) {
  Serial.printf("Appending to file: %s\n", path);

  File file = fs.open(path, FILE_APPEND);
  if(!file) {
    Serial.println("Failed to open file for appending");
    return;
  }
  if(file.print(message)) {
    Serial.println("Message appended");
  } else {
    Serial.println("Append failed");
  }
  file.close();
}
```

Compile e envie o programa e abra o monitor da porta serial. Se o programa for executado sem problemas, você verá a seguinte mensagem sendo exibida no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

Você pode sempre remover o cartão microSD quando for conveniente e acessar os dados do sensor salvos por meio do leitor de cartões.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
Para facilitar o teste, o efeito é mostrado a cada minuto para salvar dados; o código de exemplo real fornecido salva os dados uma vez a cada dez minutos.
:::

:::caution
Há os seguintes pontos a serem observados sobre este projeto:

1. O Multichannel Gas Sensor precisa de um período de aquecimento antes que os valores obtidos sejam precisos. Portanto, os primeiros conjuntos de dados registrados podem ser considerados para descarte se o erro for grande.
2. O monitor serial só exibirá as informações salvas uma vez, porque este exemplo usa a função de sono profundo; é equivalente a um reset após acordar, ou seja, você precisa reabrir a porta serial do Arduino para ver a próxima informação de depuração. Mas fique tranquilo, se não houver problema com o cartão, os dados do sensor serão coletados pontualmente no horário que você definir.

   :::

### Anotação do programa

Neste exemplo, o XIAO ESP32S3 fica em modo de sono profundo entre cada leitura. No modo de sono profundo, todo o seu código deve ir na função `setup()`, porque o XIAO ESP32S3 nunca chega ao `loop()`.

Este exemplo usa um fator de conversão de microssegundos para segundos, para que você possa definir o tempo de sono na variável `TIME_TO_SLEEP` em segundos. Neste caso, estamos configurando o XIAO ESP32S3 para dormir por 10 minutos (600 segundos). Se você quiser que o XIAO ESP32S3 durma por um período de tempo diferente, basta inserir o número de segundos para o sono profundo na variável `TIME_TO_SLEEP`.

```c
// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000; // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;
```

Em seguida, defina o pino CS do cartão microSD. Neste caso, ele está definido como **GPIO 21**.

```c
#define SD_CS 21
```

Crie uma variável chamada `readingID` para armazenar o ID da leitura. Esta é uma forma de organizar suas leituras. Para salvar o valor de uma variável durante o sono profundo, podemos salvá-lo na memória RTC. Para salvar dados na memória RTC, você só precisa adicionar `RTC_DATA_ATTR` antes da definição da variável.

Crie uma variável do tipo String para armazenar os dados a serem salvos no cartão microSD.

As duas linhas a seguir definem um NTPClient para solicitar data e hora de um servidor NTP.

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

Em seguida, inicialize o cliente NTP na função `Setup()` para obter a data e a hora do servidor NTP. Você pode usar o método `setTimeOffset(<time>)` para ajustar o horário para o seu fuso horário.

Depois de ter tudo inicializado, podemos obter as leituras, o carimbo de data/hora e registrar tudo no cartão microSD.

Para tornar o código mais fácil de entender, criamos as seguintes funções:

- `getReadings()`: lê o valor do gás a partir do Multichannel Gas Sensor;
- `getTimeStamp()`: obtém data e hora do servidor NTP;
- `logSDcard()`: registra os dados anteriores no cartão microSD.

Por fim, o ESP32 inicia o sono profundo.

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

Recomendamos que você use essas duas funções juntas. Certifique-se de que o XIAO possa entrar no modo de sono profundo o mais rápido possível após definir o tempo de despertar.

## Sistema de Arquivos Flash de Interface Periférica Serial (SPIFFS)

:::caution
Esta seção se aplica ao XIAO ESP32C3, XIAO ESP32S3 ou XIAO ESP32S3 Sense, mas esta seção não oferece suporte ao Arduino IDE 2.X.
:::

O ESP32 contém um Sistema de Arquivos Flash de Interface Periférica Serial (SPIFFS). SPIFFS é um sistema de arquivos leve criado para microcontroladores com um chip flash conectado por barramento SPI, como a memória flash do ESP32. Neste artigo, vamos mostrar como enviar facilmente arquivos para o sistema de arquivos do ESP32 usando um plugin para o Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

O SPIFFS permite acessar a memória flash como você faria em um sistema de arquivos normal no seu computador, porém mais simples e limitado. Você pode ler, escrever, fechar e excluir arquivos. No momento em que este artigo foi escrito, o SPIFFS não oferece suporte a diretórios, portanto tudo é salvo em uma estrutura plana.

Usar SPIFFS com o XIAO ESP32 é especialmente útil para:

- Criar arquivos de configuração com ajustes
- Salvar dados permanentemente
- Criar arquivos para salvar pequenas quantidades de dados em vez de usar um cartão microSD
- Salvar arquivos HTML e CSS para construir um servidor web
- Salvar imagens, figuras e ícones

### Instalando o Arduino ESP32 Filesystem Uploader

Você pode criar, salvar e escrever arquivos no sistema de arquivos do ESP32 escrevendo o código você mesmo no Arduino IDE. Isso não é muito útil, porque você teria que digitar o conteúdo dos seus arquivos no sketch do Arduino.

Felizmente, existe um plugin para o Arduino IDE que permite enviar arquivos diretamente para o sistema de arquivos do ESP32 a partir de uma pasta no seu computador. Isso torna o trabalho com arquivos realmente fácil e simples. Vamos instalá-lo.

:::note
Observação: no momento em que este artigo foi escrito, o plugin ESP32 Filesystem Uploader **não é compatível com o Arduino 2.0**.
:::

#### Windows

**Passo 1.** Vá para a [página de releases](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) e clique no arquivo [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) para fazer o download.

**Passo 2.** Encontre o local do seu Sketchbook. No Arduino IDE, vá em **File > Preferences** e verifique o local do Sketchbook. No meu caso, está no seguinte caminho: `C:\Users\mengd\Documents\Arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**Passo 3.** Vá até o local do sketchbook e crie uma pasta **tools**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**Passo 4.** Descompacte a pasta _.zip_ baixada. Abra-a e copie a pasta ESP32FS para a pasta tools que você criou na etapa anterior. Você deve ter uma estrutura de pastas semelhante a:

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**Passo 5.** Por fim, reinicie o Arduino IDE.

Para verificar se o plugin foi instalado com sucesso, abra o Arduino IDE. Selecione **XIAO ESP32S3** ou **XIAO ESP32C3**, vá em **Tools** e verifique se você tem a opção **ESP32 Sketch Data Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**Passo 1.** Vá para a [página de releases](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) e clique no arquivo [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) para fazer o download.

**Passo 2.** Descompacte os arquivos.

**Passo 3.** Crie uma pasta chamada **tools** em `/Documents/Arduino/`.

**Passo 4.** Copie a pasta **ESP32FS** descompactada para o diretório **tools**. Você deve ter uma estrutura de pastas semelhante.

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**Passo 5.** Por fim, reinicie o Arduino IDE.

Para verificar se o plugin foi instalado com sucesso, abra o Arduino IDE. Selecione **XIAO ESP32S3** ou **XIAO ESP32C3**, vá em **Tools** e verifique se você tem a opção **ESP32 Sketch Data Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### Enviando arquivos usando o Filesystem Uploader

Para enviar arquivos para o sistema de arquivos do ESP32, siga as instruções a seguir.

**Passo 6.** Crie um sketch Arduino e salve-o. Para fins de demonstração, você pode salvar um sketch vazio.

**Passo 7.** Em seguida, abra a pasta do sketch. Você pode ir em **Sketch > Show Sketch Folder**. A pasta onde o seu sketch está salvo deve ser aberta.

**Passo 8.** Dentro dessa pasta, crie uma nova pasta chamada **data**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**Passo 9.** Dentro da pasta data é onde você deve colocar os arquivos que deseja salvar no sistema de arquivos do ESP32. Como exemplo, crie um arquivo _.txt_ com algum texto chamado **test_example**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**Passo 10.** Então, para enviar os arquivos, no Arduino IDE, você só precisa ir em **Tools > ESP32 Sketch Data Upload**.

:::caution
O uploader sobrescreverá qualquer coisa que você já tenha salvo no sistema de arquivos.
:::

Os arquivos foram enviados com sucesso para o sistema de arquivos do ESP32 quando você vir a mensagem **SPIFFS Image Uploaded**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### Testando o Uploader

Agora, vamos apenas verificar se o arquivo foi realmente salvo no sistema de arquivos do ESP32. Simplesmente envie o seguinte código para a sua placa ESP32.

```cpp
#include "SPIFFS.h"

void setup() {
  Serial.begin(115200);
  while(!Serial);

  if(!SPIFFS.begin(true)){
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  File file = SPIFFS.open("/test_example.txt");
  if(!file){
    Serial.println("Failed to open file for reading");
    return;
  }

  Serial.println("File Content:");
  while(file.available()){
    Serial.write(file.read());
  }
  file.close();

}

void loop() {

}
```

Após o upload, abra o Monitor Serial com uma taxa de baud de 115200. Ele deve imprimir o conteúdo do seu arquivo _.txt_ no Monitor Serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## Armazenamento de Dados na Flash

:::caution
Esta seção se aplica ao XIAO ESP32C3, XIAO ESP32S3 ou XIAO ESP32S3 Sense.
:::

Quando usamos placas de desenvolvimento, muitos de nós queremos ser capazes de usar a memória flash do chip para armazenar alguns dados importantes. Isso requer um método de armazenamento que garanta que nenhum dado seja perdido mesmo no caso de uma placa de desenvolvimento com funcionamento anormal.

Este tutorial apresentará como armazenar dados importantes na memória flash do XIAO ESP32 a partir de dois métodos de armazenamento diferentes, conforme a seguir:

1. O primeiro guia mostra como salvar dados permanentemente na memória flash do ESP32 usando a biblioteca Preferences.h. Os dados mantidos na memória flash persistem em reinicializações ou falhas de energia. Usar a biblioteca Preferences.h é útil para salvar dados como credenciais de rede, chaves de API, valores de limite ou até mesmo o último estado de um GPIO. Você aprenderá como salvar e ler dados da memória flash.

2. O segundo guia explica o que é a EEPROM do XIAO ESP32C3 e para que ela é útil. Também vamos mostrar como escrever e ler da EEPROM e construir um exemplo de projeto para colocar em prática os conceitos aprendidos.

Esta seção foi escrita para o XIAO ESP32C3 e é totalmente compatível com o novo XIAO ESP32S3, então você pode usar diretamente as rotinas aqui, por isso não vamos repeti-las novamente aqui.

- [XIAO ESP32C3 Data Permanently in different ways](https://wiki.seeedstudio.com/pt-br/xiaoesp32c3-flash-storage/)

## Solução de Problemas

## Citações e Referências

Este artigo se baseia no conteúdo do sistema de arquivos do **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre ESP32 e o utiliza verificado no Seeed Studio XIAO ESP32S3 Sense.

Agradecimentos especiais aos autores do **Random Nerd Tutorials** por seu trabalho árduo!

A seguir está o link de referência para o artigo original; você é bem-vindo para saber mais sobre o sistema de arquivos do ESP32 por meio do seguinte link para o artigo original.

- [ESP32: Guide for MicroSD Card Module using Arduino IDE](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [ESP32 Data Logging Temperature to MicroSD Card](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [Install ESP32 Filesystem Uploader in Arduino IDE](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

Para mais informações sobre o uso da placa de desenvolvimento ESP32, consulte o site oficial do Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

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
