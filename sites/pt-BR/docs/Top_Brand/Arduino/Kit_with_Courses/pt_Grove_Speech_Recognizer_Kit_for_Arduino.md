---
description: Grove_Speech_Recognizer_Kit_for_Arduino
title: Kit Grove Speech Recognizer para Arduino
keywords:
  - Grove_Speech_Recognizer_Kit_for_Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Speech_Recognizer_Kit_for_Arduino
sku: 110020108
last_update:
  date: 1/12/2023
  author: Matthew
createdAt: '2023-02-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Speech_Recognizer_Kit_for_Arduino/
---

<!-- ---
name: Grove Speech Recognizer Kit for Arduino
category: Arduino
bzurl: https://www.seeedstudio.com/Grove-Speech-Recognizer-kit-for-Arduino-p-2726.html
oldwikiname:  Grove Speech Recognizer Kit for Arduino
prodimagename: LFUUlWtcc3wNmrxDp3yjPy7I.jpg
surveyurl: https://www.research.net/r/Grove_Speech_Recognizer_Kit_for_Arduino
sku:  110020108
--- -->
![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/LFUUlWtcc3wNmrxDp3yjPy7I.jpg)

O Kit Grove Speech Recognizer para Arduino é projetado para prototipagem de Casas Inteligentes e inclui alguns elementos domésticos básicos, como o Speech Recognizer e o Emissor Infravermelho. Você pode aprender rapidamente as funções e aplicações do Speech Recognizer por meio deste kit; o guia mostra alguns demos comuns, por exemplo, você pode tocar música através do comando de voz "Play music" ou ligar a luz de acordo com o comando correspondente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Speech-Recognizer-kit-for-Arduino-p-2726.html)

## Lista de Peças

---

1. Grove - Speech Recognizer  SKU:101020232

2. [Grove - MP3 v2.0](/pt-br/Grove-MP3_v2.0)

3. [Grove – RTC](/pt-br/Grove-RTC)

4. [Base Shield](/pt-br/Base_Shield_V2)

5. [Grove - Infrared Receiver](/pt-br/Grove-Infrared_Receiver)

6. [Grove - Infrared Emitter](/pt-br/Grove-Infrared_Emitter)

## Aplicação

---

### Como ligar a TV

Às vezes queremos controlar algo com a nossa voz, como a TV ou o ar-condicionado. Esses dispositivos são controlados por um controle remoto infravermelho, então precisamos primeiro saber qual é o código de cada botão do controle remoto infravermelho e depois colocar o código no nosso programa. Por fim, sua voz poderá acionar esses códigos de botão e você poderá controlar esses dispositivos como se fosse o controle remoto infravermelho.

Antes de criar este demo, você deve preparar alguns componentes necessários:

- Grove - Infrared Receiver

- Grove - Infrared Emitter

- Grove - Speech Recognizer

- Base Shield

- Arduino UNO

- Controle remoto infravermelho

**Obter o código de um controle remoto infravermelho usando o Grove - Infrared Receiver**

Baixe as bibliotecas necessárias do GitHub: [IRSendRev](https://github.com/Seeed-Studio/IRSendRev) ,<font color="Red">preste atenção ao caminho das suas bibliotecas: .../arduino/libraries </font>

- Agora abra o arquivo de exemplo "recv": File --&gt; Sketchbook --&gt; libraries --&gt; IRSendRev --&gt; recv.
- Envie o programa para o seu Arduino UNO.

- Conecte o Base Shield ao Arduino UNO e conecte o Grove - Receiver à porta D2 do Base Shield.

```
const int pinRecv = 2;
```

Você também pode usar outra porta, modificando a definição do pino.

- Abra o monitor serial do Arduino UNO.

Pressione um botão de qualquer controle remoto infravermelho; você obterá o código de informação detalhado do botão, veja a seguir:

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/IR_Receiver_IR_controller.png)

Anote as informações detalhadas do botão que você deseja pressionar. A seguir estão as informações de um botão:

```
+------------------------------------------------------+
LEN = 9
START_H: 179    START_L: 88
DATA_H: 11    DATA_L: 33

DATA_LEN = 4
DATA: 0x80    0x7E    0x10    0xEF
DATA: 128    126    16    239
+------------------------------------------------------+
```

**Modificar o programa IRSend**

Agora podemos usar o código de informação anterior de um botão.

- Abra o arquivo de exemplo "send": File --&gt; Sketchbook --&gt; libraries --&gt; IRSendRev --&gt; send.

- Envie o programa para o seu Arduino UNO.

- Conecte o Base Shield ao Arduino UNO e conecte o Grove - Receiver à porta D3 do Base Shield.

Primeiro precisamos modificar as informações padrão do botão:

```
unsigned char dtaSend[20];

void dtaInit()
{
  ............
}
```

Modifique essas informações de acordo com aquelas que você anotou anteriormente:

```
unsigned char dtaSend[20];

void dtaInit()
{
    dtaSend[BIT_LEN]        = 9;            // all data that needs to be sent
    dtaSend[BIT_START_H]    = 179;            // the logic high duration of a button
    dtaSend[BIT_START_L]    = 88;            // the logic low duration of a button
    dtaSend[BIT_DATA_H]     = 11;            // the logic "long" duration in the communication
    dtaSend[BIT_DATA_L]     = 33;            // the logic "short" duration in the communication

    dtaSend[BIT_DATA_LEN]   = 4;            // Number of data which will sent. If the number is other, you should increase or reduce dtaSend[BIT_DATA+x].

    dtaSend[BIT_DATA+0]     = 128;            // data that will sent
    dtaSend[BIT_DATA+1]     = 126;
    dtaSend[BIT_DATA+2]     = 16;
    dtaSend[BIT_DATA+3]     = 239;
    //dtaSend[BIT_DATA+4]     = 192;
    //dtaSend[BIT_DATA+5]     = 63;
}
```

Você pode observar que:

```
DATA_LEN = 4
```

Portanto, você pode comentar ou excluir essas duas linhas.

```
   //dtaSend[BIT_DATA+4]     = 192;
    //dtaSend[BIT_DATA+5]     = 63;
```

É claro que você também pode definir muitos botões:

```
#include <IRSendRev.h>

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6

const int ir_freq = 38;

unsigned char OpenTV[20];
unsigned char CloseTV[20];
unsigned char IncreaseTemp[20];
unsigned char DecreaseTemp[20];

void OpenTVInit()
{
    OpenTV[BIT_LEN]        = 11;
    OpenTV[BIT_START_H]    = 179;
    /*............ omit ............*/
}

void CloseTVInit()
{
    CloseTV[BIT_LEN]        = 11;
    CloseTV[BIT_START_H]    = 179;
    /*............ omit ............*/
}

void IncreaseTempInit()
{
    IncreaseTemp[BIT_LEN]        = 11;
    IncreaseTemp[BIT_START_H]    = 179;
    /*............ omit ............*/
}

void DecreaseTempInit()
{
    DecreaseTemp[BIT_LEN]        = 11;
    DecreaseTemp[BIT_START_H]    = 179;
   /*............ omit ............*/
}

void setup()
{
    OpenTVInit();
    CloseTVInit();
    IncreaseTempInit();
    DecreaseTempInit();
}

void loop()
{
    IR.Send(OpenTV, 38);
    delay(200);
    IR.Send(CloseTV, 38);
    delay(200);
    IR.Send(IncreaseTemp, 38);
    delay(200);
    IR.Send(DecreaseTemp, 38);

    delay(2000);
}
```

**Adicionar o Speech Recognizer ao seu programa IRSend**

- É muito simples usar o Speech Recognizer sozinho; consulte primeiro o wiki dele.

Podemos escolher quais botões precisamos de acordo com a tabela; Tabela de valores de retorno, [Grove - Speech Recognizer](https://wiki.seeedstudio.com/pt-br/Seeed_BLE_Shield/); de valor de retorno do Speech Recognizer. A seguir está a tabela de valores de retorno:

<center>
  <table>
    <tbody>
      <tr>
        <th>Comando</th>
        <th>Valor de Retorno</th>
      </tr>
      <tr>
        <td width="200px">Ligar a luz</td>
        <td width="200px">1</td>
      </tr>
      <tr>
        <td>Desligar a luz</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Tocar música</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Pausar</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Próxima</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Anterior</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Acima</td>
        <td>7</td>
      </tr>
      <tr>
        <td>Abaixo</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Ligar a TV</td>
        <td>9</td>
      </tr>
      <tr>
        <td>Desligar a TV</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Aumentar a temperatura</td>
        <td>11</td>
      </tr>
      <tr>
        <td>Diminuir a temperatura</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Que horas são</td>
        <td>13</td>
      </tr>
      <tr>
        <td>Abrir a porta</td>
        <td>14</td>
      </tr>
      <tr>
        <td>Fechar a porta</td>
        <td>15</td>
      </tr>
      <tr>
        <td>Esquerda</td>
        <td>16</td>
      </tr>
      <tr>
        <td>Direita</td>
        <td>17</td>
      </tr>
      <tr>
        <td>Parar</td>
        <td>18</td>
      </tr>
      <tr>
        <td>Iniciar</td>
        <td>19</td>
      </tr>
      <tr>
        <td>Modo 1</td>
        <td>20</td>
      </tr>
      <tr>
        <td>Modo 2</td>
        <td>21</td>
      </tr>
      <tr>
        <td>Ir</td>
        <td>22</td>
      </tr>
    </tbody>
  </table>
</center>

O exemplo a seguir usa dois comandos: "Turn of the TV" e "Turn off the TV"

- Depois de ler, podemos incorporar o programa do Speech Recognizer no programa IRSend. Veja o seguinte programa completo:

```
#include <IRSendRev.h>
#include <SoftwareSerial.h>

/*========  IR type ========*/

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6
const int ir_freq = 38;                 // 38k

/* ========  How many IR buttons you wanna send  ========*/

unsigned char OpenTV[20];
unsigned char CloseTV[20];


/*=========  Choose the pins of Speech Recognizer  ==========*/

#define SOFTSERIAL_RX_PIN  5
#define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);


/* =======  How to write the IR data  ========*/
/* ====  You can get those data via IR Recevier  ==== */

void OpenTVInit()
{
    OpenTV[BIT_LEN]        = 9;            // all data that needs to be sent
    OpenTV[BIT_START_H]    = 180;            // the logic high duration of "OpenTV"
    OpenTV[BIT_START_L]    = 88;            // the logic low duration of "OpenTV"
    OpenTV[BIT_DATA_H]     = 11;            // the logic "long" duration in the communication
    OpenTV[BIT_DATA_L]     = 33;            // the logic "short" duration in the communication

    OpenTV[BIT_DATA_LEN]   = 4;            // Number of data which will sent. If the number is other, you should increase or reduce dtaSend[BIT_DATA+x].

    OpenTV[BIT_DATA+0]     = 50;            // data that will sent
    OpenTV[BIT_DATA+1]     = 166;
    OpenTV[BIT_DATA+2]     = 80;
    OpenTV[BIT_DATA+3]     = 175;
}

void CloseTVInit()
{
    CloseTV[BIT_LEN]        = 9;            // all data that needs to be sent
    CloseTV[BIT_START_H]    = 178;            // the logic high duration of "CloseTV"
    CloseTV[BIT_START_L]    = 89;            // the logic low duration of "CloseTV"
    CloseTV[BIT_DATA_H]     = 10;            // the logic "long" duration in the communication
    CloseTV[BIT_DATA_L]     = 33;            // the logic "short" duration in the communication

    CloseTV[BIT_DATA_LEN]   = 4;            // Number of data which will sent. If the number is other, you should increase or reduce dtaSend[BIT_DATA+x].

    CloseTV[BIT_DATA+0]     = 50;            // data that will sent
    CloseTV[BIT_DATA+1]     = 166;
    CloseTV[BIT_DATA+2]     = 168;
    CloseTV[BIT_DATA+3]     = 87;
}


void setup()
{
    OpenTVInit()
    CloseTVInit()
    Serial.begin(9600);
    speech.begin(9600);
    speech.listen();
}

void loop()
{
    int a=0;

    if(speech.available())
    {
        a = speech.read();    // Read the return value from the Speech Recognizer
        switch (a)
        {
            case 9:                     //  if (return value) then send (IR data)
            IR.Send(OpenTV, 38);
            delay(1000);
            break;
            case 10:
            IR.Send(CloseTV, 38);
            delay(1000);
            break;
            default:
            break;
        }
    }
}
```

### Como controlar a música

Observe os comandos do Speech Recognizer, há muitos comandos relacionados à música, como "Play music", "Pause", "Stop", "Previous", "Next". Então vamos fazer esta Caixa de Música por Voz!

Baixe as bibliotecas necessárias do GitHub:
[Grove_Serial_MP3_Player_V2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player.git);
biblioteca, [Grove - MP3 v2.0](/pt-br/Grove-MP3_v2.0), <font color="Red">preste atenção ao caminho das suas bibliotecas: .../arduino/libraries </font>.

**Funções úteis sobre Grove - MP3 v2**

Existem algumas funções básicas úteis do Grove - MP3:

```
PlayPause();    // pause music
PlayResume();   // restart a music
PlayNext();  // next song
PlayPrevious();  // previous song
PlayLoop();  //  loop all songs
SetVolume(uint8_t volume);  // set volume. default value is "0x0E", the range is 0x00 to 0x1E.
IncreaseVolume();  // increase volume
DecreaseVolume();  // decrease volume
```

Mas há algumas funções especiais às quais você precisa prestar atenção:

- SelectPlayerDevice(uint8_t device). _O valor padrão do dispositivo é 0x02, seleciona o cartão SD como dispositivo de reprodução._

```
SelectPlayerDevice(0x02);
```

- SpecifyMusicPlay(uint16_t index). _reproduz uma música pelo nome._

<dl>
  <dd>Preste atenção ao nome das músicas, você pode definir um nome como o seguinte tipo:</dd>
</dl>

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/Type_of_songs.png)

<dl>
  <dd>Então podemos reproduzir a música "005" com esta função:</dd>
</dl>

```
SpecifyMusicPlay(5);
```

- SpecifyfolderPlay(uint8_t folder, uint8_t index);   // reproduz uma música pelo nome em uma pasta indicada

<dl>
  <dd>Além disso, às vezes podemos reproduzir músicas em uma nova pasta, a função anterior é útil.</dd>
</dl>

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/Form_of_folder.png)

:::note
O intervalo de índice das pastas é 01-99, então o nome das pastas será apenas qualquer número entre 01 e 99. Preste atenção aos números entre 1-9, o nome da pasta deve ser escrito como 01-09.
:::

Então, se quisermos reproduzir o "005" na pasta "01", podemos fazer assim:

```
SpecifyfolderPlay(1,5);
```

- Outras atenções:

Cada música tem sua duração, portanto se você quiser indicar músicas uma por uma, há duas maneiras que você pode escolher:

```
delay(length of time);  // delay the length of time until the song is played out

while(QueryPlayStatus() != 0);  //  Return: 0: played out;       1:  not play out

```

Normalmente, podemos usar a última. Por exemplo:

```

SpecifyMusicPlay(1);
while(QueryPlayStatus() != 0);
SpecifyMusicPlay(2);
while(QueryPlayStatus() != 0);
SpecifyMusicPlay(3);
while(QueryPlayStatus() != 0);

```

**Programa Integrado**

Certo, vamos integrar o Speech Recognizer e o Grove - MP3. O seguinte demo pode controlar algumas funções do MP3: reproduzir música, pausar música, continuar música, próxima música, música anterior.

- Copie o programa e envie-o para o seu Arduino UNO.

- Conecte o Base Shield ao Arduino UNO e conecte o Grove - MP3 v2 à porta D2 do Base Shield.

```cpp
# include <SoftwareSerial.h>

# include <MP3Player_KT403A.h>

/****** Define the pins of MP3 ******/
SoftwareSerial mp3(2, 3);

/****** Define the pins of Speech Recognizer ******/

# define SOFTSERIAL_RX_PIN  5

# define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

void setup()
{
    mp3.begin(9600);
    speech.begin(9600);
    Serial.begin(9600);
    delay(100);

    SelectPlayerDevice(0x02);       // Select SD card as the player device.
    SetVolume(0x15);                // Set the volume, the range is 0x00 to 0x1E.
}

void loop()
{
    int a=0;
    if(speech.available())
    {
        a = speech.read();   // Read the return value from the Speech Recognizer
        switch (a)
        {
            case 3:      //  speech command : Play music
            SpecifyMusicPlay(1);   // MP3: play the name of "001"
            break;
            case 4:   //  speech command : Pause
            PlayPause();    // MP3: pause music
            break;
            case 19:   //  speech command : Start
            PlayResume();  // MP3: continue music
            break;
            case 5:   //  speech command : Next
            PlayNext();    // MP3: play next song
            break;
            case 6:   //  speech command : Previous
            PlayPrevious();  // MP3: play previous song
            break;
            default:
            break;
        }

        delay(1000);
    }
}

```

### Como transmitir em tempo real

Você já usou o Grove - MP3 para transmitir em tempo real? Vamos tentar por meio do Speech Recognizer, Grove - MP3 e Grove - RTC.

**Ajustar o tempo real**

Baixe as bibliotecas necessárias do GitHub: <font color="Red">[RTC_DS1307](https://github.com/Seeed-Studio/RTC_DS1307);[library, Grove - RTC](/pt-br/Grove-RTC);, preste atenção ao caminho das suas bibliotecas: .../arduino/libraries</font> .

- Abra o arquivo de exemplo "SetTimeAndDisplay" : File --&gt; Sketchbook --&gt; libraries --&gt; RTC_DS1307 --&gt; SetTimeAndDisplay.

- Conecte o Base Shield ao Arduino UNO e conecte o Grove - RTC à porta I2C do Base Shield.

- Defina a hora correta do RTC.

```txt
clock.fillByYMD(2016,1,19);//May 23,2016
clock.fillByHMS(15,28,30);//15:28 30"
clock.fillDayOfWeek(Mon);//Saturday
```

- Envie o programa modificado para o seu Arduino UNO.

**Texto para fala**

Como todos sabemos, há 60 números ao transmitir a hora (0 ~ 59), e podemos pronunciar algumas palavras antes que o MP3 transmita a hora ("It's"). Portanto, precisamos adicionar 61 arquivos de som no cartão SD.

<font color="Red">Mas há algumas dicas sobre o cartão SD às quais você precisa prestar atenção:</font>

- Formato do cartão SD: FAT32.

- Formate o cartão SD antes de apagar qualquer música; nada precisa ser feito ao adicionar músicas.

- A sequência de reprodução depende da sequência de adição das músicas no cartão SD. _portanto, se quisermos reproduzir algumas músicas em ordem, precisamos adicioná-las ao cartão SD em ordem._

A propósito, classificamos 61 arquivos de som em uma pasta, você pode [baixá-la](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/res/Sound_file.zip) e copiá-la para o seu cartão SD. Claro que talvez você precise formatar o cartão SD primeiro.

<center>
  <table>
    <tbody>
      <tr>
        <th>Nome do Arquivo de Som</th>
        <th><font color="Red">Nº do arquivo no Cartão SD</font></th>
        <th>Texto da Voz</th>
      </tr>
      <tr>
        <td width="200px">000</td>
        <td width="200px">1º</td>
        <td width="200px">0</td>
      </tr>
      <tr>
        <td width="200px">001</td>
        <td width="200px">2º</td>
        <td width="200px">1</td>
      </tr>
      <tr>
        <td width="200px">...</td>
        <td width="200px">...</td>
        <td width="200px">...</td>
      </tr>
      <tr>
        <td width="200px">059</td>
        <td width="200px">60º</td>
        <td width="200px">59</td>
      </tr>
      <tr>
        <td width="200px">060</td>
        <td width="200px">61º</td>
        <td width="200px">It's</td>
      </tr>
    </tbody>
  </table>
</center>

**Programa Integrado e transmissão em tempo real**

- Conecte o Base Shield ao Arduino UNO; conecte o Grove - MP3 v2 à porta D2 do Base Shield; conecte o Grove - Speech Recognizer à porta D5 do Base Shield; conecte o Grove - RTC à porta I2C do Base Shield.

- Copie o código a seguir em um novo sketch da Arduino IDE e envie o programa para o Arduino UNO.

- Diga "HiCell, What's the time" , o MP3 irá transmitir o horário em tempo real.

```

# include <Wire.h>

# include "DS1307.h"

# include <SoftwareSerial.h>

# include <MP3Player_KT403A.h>

/******* Define the pins of MP3 ******/
SoftwareSerial mp3(2, 3);

/******* Define the pins of Speech Recognizer ******/

# define SOFTSERIAL_RX_PIN  5

# define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

/******* Define a object of DS1307 class ******/
DS1307 clock;//define a object of DS1307 class

void setup ()
{
  mp3.begin(9600);
  speech.begin(9600);
  clock.begin();
  Serial.begin(9600);
  delay(100);

  SelectPlayerDevice(0x02);       // Select SD card as the player device.
  SetVolume(0x15);   // Set the volume, the range is 0x00 to 0x1E.
}

void loop ()
{
  int a=0;
  speech.listen();   // start to receiver data from the software port of Speech Recognizer
  if(speech.available())
  {
    a = speech.read();  //  Read the return value from the Speech Recognizer
    if(a==13)
    {
      clock.getTime();   // get the real-time from Grove - RTC
      int b=1+clock.hour;  // get hour data; because the 1th name of song is the voice "0" , so in order to get the voice "60" (it's) , the number of the name should be added 1.
      int c=1+clock.minute;  // get hour data; because the 1th name of song is the voice "0" , so in order to get the voice "60" (it's) , the number of the name should be added 1.

      mp3.listen();   // start to receiver data from the software port of Grove - MP3
      SpecifyMusicPlay(61);   // The voice "It's" is the name of "61" song in the folder of SD card
      while(QueryPlayStatus() != 0);  // play next song before the previous song is played out
      SpecifyMusicPlay(b);  // play the name of "b" song in the folder of SD card
      while(QueryPlayStatus() != 0);
      SpecifyMusicPlay(c);  //  play the name of "c" song in the folder of SD card
      while(QueryPlayStatus() != 0);
    }
  }
    delay(1000);
}

```

## Recursos

---

- [Github: IRSendRev](https://github.com/Seeed-Studio/IRSendRev)

- [Github: MP3](https://github.com/Seeed-Studio/Grove_Serial_MP3_Player_V2.0)

- [Github: RTC](https://github.com/Seeed-Studio/RTC_DS1307)

- [Arquivos de som da transmissão](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/res/Sound_file.zip)

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
