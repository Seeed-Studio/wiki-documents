---
description: RePhone APIs - Áudio
title: RePhone APIs - Áudio
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RePhone_APIs-Audio
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/RePhone_APIs-Audio/
---

![](https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Xadow_Audio.JPG)

RePhone oferece suporte à reprodução de arquivos de áudio no cartão SD ou na memória flash interna. Os formatos suportados incluem **WAV**, **MP3**, **AAC**, etc. Com esta biblioteca, você pode **Reproduzir**, **Pausar**, **Parar** o processo de reprodução e **Ajustar o volume**.

A tarefa de reprodução (decodificação) é tratada internamente pelo **LinkIt**. Portanto, todas as funções são **não bloqueantes**, o que significa que após você chamar playFile(), o áudio começará a ser reproduzido e retornará imediatamente para o seu programa.

Use getStatus() para verificar o status atual e agir de forma correspondente. O status de áudio pode ser "reproduzindo", "reprodução concluída", "reprodução pausada", etc. O áudio será emitido pelo conector de fone de ouvido na placa Linkit.

<div class="admonition note">
<p class="admonition-title">Note</p>
Se você tentar reproduzir outro arquivo de áudio antes que a reprodução anterior termine, a reprodução anterior será interrompida automaticamente e o novo áudio será reproduzido.
</div>

[![](https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Viewallapiofrephone.png)]

Lista de Funções
-------------

-   begin()
-   playFile()
-   setVolume()
-   pause()
-   resume()
-   stop()
-   getStatus()

APIs 
----

### LAudio.begin()

Inicializa o módulo de Áudio.

-   ***Sintaxe***

LAudio.begin()

-   ***Parâmetros***

N/A

-   ***Retorno***

N/A

-   ***Exemplo***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}

void loop()
{

}
```

### LAudio.playFile()

Reproduz um arquivo de áudio no cartão SD ou no armazenamento flash.

-   ***Sintaxe***

```
LAudio.playFile(StorageEnum drv, char *songName)
LAudio.playFile(StorageEnum drv, wchar_t* songName)
```

-   ***Parâmetros***
    -   *drv* - Armazenamento, pode ser storageSD (cartão SD) ou storageFlash (armazenamento flash)
    -   *songName* - Caminho do arquivo de áudio em codificação ascii (char\*) ou unicode (wchar_t\*)


-   ***Retorno***

N/A

-   ***Exemplo***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}

void loop()
{

}
```

### LAudio.setVolume()

Ajusta o volume de reprodução; o intervalo é de 0 (mudo) a 6 (máximo).

-   ***Sintaxe***

LAudio.setVolume(unsigned char volume)

-   ***Parâmetros***
    -   *volume*: Nível de volume, pode ser de **0** a **6**; 0 como mudo e 6 como volume máximo


-   ***Retorno***

N/A

-   ***Exemplo***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}

void loop()
{

}
```

### LAudio.pause()

Pausa a reprodução. Só funciona quando há uma reprodução ativa em andamento (por playFile()).

-   ***Sintaxe***

LAudio.pause()

-   ***Parâmetros***

N/A

-   ***Retorno***

N/A

-   ***Exemplo***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();    // play for 5secs and pause

    delay(5000);
    LAudio.resume();    // wait for another 5 secs to resume

    delay(5000);
    LAudio.stop();    // wait for another 5 secs to stop
}

void loop()
{

}
```

### LAudio.resume()

Retoma a reprodução. Só funciona quando a reprodução foi pausada.

-   ***Sintaxe***

LAudio.resume()

-   ***Parâmetros***

N/A

-   ***Retorno***

N/A

-   ***Exemplo***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();  // play for 5secs and pause

    delay(5000);
    LAudio.resume(); // wait for another 5 secs to resume

    delay(5000);
    LAudio.stop();   // wait for another 5 secs to stop
}

void loop()
{

}
```

### LAudio.stop()

Interrompe a reprodução.

-   ***Sintaxe***

LAudio.stop()

-   ***Parâmetros***

N/A

-   ***Retorno***

N/A

-   ***Exemplo***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();  // play for 5secs and pause

    delay(5000);
    LAudio.resume(); // wait for another 5 secs to resume

    delay(5000);
    LAudio.stop();   // wait for another 5 secs to stop
}

void loop()
{

}
```

### LAudio.getStatus()

Consulta o status atual da reprodução.

-   ***Sintaxe***

LAudio.getStatus()

-   ***Parâmetros***

N/A

-   ***Retorno***
    -   *AudioStatus* - Status da reprodução, pode ser:
    -   *AudioStop* - A reprodução está interrompida.
    -   *AudioPause* - A reprodução está pausada (e pode ser retomada).
    -   *AudioResume* - A reprodução é retomada
    -   *AudioEndOfFile* - A reprodução foi concluída.
    -   *AudioCommonFailed* - A reprodução falhou (por exemplo, o arquivo de áudio está corrompido).


-   ***Exemplo***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}

void loop()
{
    AudioStatus status;
    status = LAudio.getStatus();
    if(AudioEndOfFile == status)    // Check if playback finish and restart
    {
        LAudio.playFile(storageFlash,(char*)"sample.mp3");
    }
}
```

Exemplo
-------

-   ***Descrição***

Com este exemplo, você pode reproduzir um arquivo mp3. Abra o monitor serial para inserir um número para controlar a reprodução.

Comando como abaixo:

1.  Reproduzir
2.  Ajustar volume
3.  Pausar
4.  Retomar
5.  Parar

-   ***Código***

Você pode encontrar o código em: **File** -> **Examples** -> **LAudio** -> **AudioPlayer**

```
/*
  RePhone audio test Demo
  First you need to put a mp3 file to storage
  Then open the Serial monitor, input number to change the status
  1 - Play
  2 - Setvolume
  3 - Pause
  4 - Resume
  5 - Stop
*/
#include <LAudio.h>

// add your music file name here
#define    FILE_NAME    "music.mp3"

#define    PLAY         1
#define    SETVOLUME    2
#define    PAUSE        3
#define    RESUME       4
#define    STOP         5

unsigned char Status_Value = STOP;

int volume = 6;

void changeVolume()
{
    volume++;
    volume = volume>6 ? 1 : volume;
}

void setup()
{
    LAudio.begin();
    Serial.begin(115200);
    Serial.println("Play      - 1");
    Serial.println("Setvolume - 2");
    Serial.println("Pause     - 3");
    Serial.println("Resume    - 4");
    Serial.println("Stop      - 5");
    Change_Status(PLAY);
}

char StatusFlag = 0;

void loop()
{
    unsigned char KEY_NUM;
    AudioStatus status;

    KEY_NUM = task_uart_key();

    if(KEY_NUM > 0)
    {
        Change_Status(KEY_NUM);
        KEY_NUM = 0;
    }

    status = LAudio.getStatus();
    if(StatusFlag != status)
    {
        StatusFlag = status;
        Serial.print("LAudio status is ");
        Serial.println(status);
    }

    if(status == AudioEndOfFile)
    {
        Status_Value = PLAY;
        Change_Status(Status_Value);
    }
}

void Change_Status(unsigned char status)
{
    switch(status)
    {
        case 1:
        LAudio.playFile(storageFlash,(char*)"music.mp3");
        LAudio.setVolume(volume);
        Serial.println("playOne");
        break;

        case 2:
        LAudio.setVolume(volume);
        changeVolume();
        Serial.print("set volume to ");
        Serial.println(volume);
        break;

        case 3:
        LAudio.pause();
        Serial.println("pause");
        break;

        case 4:
        LAudio.resume();
        Serial.println("resume");
        break;

        case 5:
        LAudio.stop();
        Serial.println("stop");
        break;

        default:
        break;
    }
}

unsigned int task_uart_key()
{
    String inString = "";
    unsigned int keyValue = 0;
    unsigned char bitCount = 0;
    unsigned char dataTemp1[10] = {0};
    while(Serial.available() > 0)
    {
        unsigned char inChar = Serial.read();
        inString += (char)inChar;
        dataTemp1[bitCount] = inChar - '0';
        bitCount += 1;
        delay(10);
    }
    if(inString != "")
    {
        if(bitCount > 4)
        {
            Serial.println("Key input error.");
        }
        else
        {
            for(char i=0;i<bitCount;i++)
            {
                unsigned int dataTemp2 = 1;
                for(char j=0;j<(bitCount-i-1);j++)dataTemp2 *= 10;
                keyValue += (dataTemp1[i] * dataTemp2);
            }
            Serial.print("Key value is: ");
            Serial.println(keyValue);
        }
    }
    return keyValue;
}
```

Recursos
---------

<!-- -   [Main wiki for RePhone](/pt-br/RePhone)
-   [Xadow - Audio](/pt-br/Xadow_Audio)
-   [RePhone APIs main page](/pt-br/RePhone) -->


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/RePhone_APIs_-_Audio -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
