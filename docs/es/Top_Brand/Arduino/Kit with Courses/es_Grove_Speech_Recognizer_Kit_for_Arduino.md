---
description: Grove_Speech_Recognizer_Kit_for_Arduino
title: Kit Reconocedor de Voz Grove para Arduino
keywords:
- Grove_Speech_Recognizer_Kit_for_Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Speech_Recognizer_Kit_for_Arduino
last_update:
  date: 1/12/2023
  author: Matthew
---

<!-- ---
name: Kit Reconocedor de Voz Grove para Arduino
category: Arduino
bzurl: https://www.seeedstudio.com/Grove-Speech-Recognizer-kit-for-Arduino-p-2726.html
oldwikiname:  Kit Reconocedor de Voz Grove para Arduino
prodimagename: LFUUlWtcc3wNmrxDp3yjPy7I.jpg
surveyurl: https://www.research.net/r/Grove_Speech_Recognizer_Kit_for_Arduino
sku:  110020108
--- -->
![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/LFUUlWtcc3wNmrxDp3yjPy7I.jpg)

El Kit Reconocedor de Voz Grove para Arduino está diseñado para prototipos de Hogar Inteligente que incluye algunos elementos básicos del hogar como Reconocedor de Voz, Emisor Infrarrojo. Puedes aprender las funciones y aplicaciones del Reconocedor de Voz rápidamente a través de este kit, la guía muestra algunas demostraciones comunes, digamos que puedes reproducir música a través de tu comando de voz 'Reproducir música', o encender la luz según el comando correspondiente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Speech-Recognizer-kit-for-Arduino-p-2726.html)

## Lista de Partes

---

1. Grove - Reconocedor de Voz  SKU:101020232

2. [Grove - MP3 v2.0](/es/Grove-MP3_v2.0)

3. [Grove – RTC](/es/Grove-RTC)

4. [Base Shield](/es/Base_Shield_V2)

5. [Grove - Receptor Infrarrojo](/es/Grove-Infrared_Receiver)

6. [Grove - Emisor Infrarrojo](/es/Grove-Infrared_Emitter)

## Aplicación

---

### Cómo encender la TV

A veces, queremos controlar algo con nuestra voz, como la TV, el aire acondicionado. Esos dispositivos son controlados por control remoto infrarrojo, así que necesitamos conocer primero cuál es el código de cada botón del control remoto infrarrojo, y luego poner el código bajo nuestro programa. Finalmente tu voz podría activar esos códigos de botón y puedes controlar esos dispositivos como un control remoto infrarrojo.

Antes de crear esta demostración debes preparar algunos componentes necesarios:

- Grove - Receptor Infrarrojo

- Grove - Emisor Infrarrojo

- Grove - Reconocedor de Voz

- Base Shield

- Arduino UNO

- Control remoto infrarrojo

**Obtener código de un control remoto infrarrojo a través de Grove - Receptor Infrarrojo**

Descarga las librerías necesarias desde github : [IRSendRev](https://github.com/Seeed-Studio/IRSendRev) ,<font color="Red">presta atención a la ruta de tus librerías: .../arduino/libraries </font>

- Ahora abre el archivo de ejemplo de "recv" : File --&gt; Sketchbook --&gt; libraries --&gt; IRSendRev --&gt; recv.
- Sube el programa a tu Arduino UNO.

- Conecta el Base Shield al Arduino UNO, y conecta el Grove - Receptor al puerto D2 del Base Shield.

```
const int pinRecv = 2;
```

También puedes cambiar otro puerto mientras modificas la definición del pin.

- Abre el monitor de Arduino UNO.

Presiona un botón de cualquier Control Remoto por Infrarrojos, obtendrás el código de información detallada del botón, ve lo siguiente:

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/IR_Receiver_IR_controller.png)

Anota la información detallada del botón que quieres presionar. La siguiente es la información de un botón:

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

**Modificar el programa IRSend**

Ahora podemos usar la información de código anterior de un botón.

- Abrir el archivo de ejemplo de "send" : File --&gt; Sketchbook --&gt; libraries --&gt; IRSendRev --&gt; send.

- Subir el programa a tu Arduino UNO.

- Conectar Base Shield al Arduino UNO, y conectar el Grove - Receiver al puerto D3 del Base Shield.

Primero necesitamos modificar la información predeterminada del botón:

```
unsigned char dtaSend[20];

void dtaInit()
{
  ............
}
```

Modifica esa información de acuerdo con la anterior que escribiste:

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

Puedes observar que:

```
DATA_LEN = 4
```

Así que puedes anotar o eliminar esas dos líneas.

```
   //dtaSend[BIT_DATA+4]     = 192;
    //dtaSend[BIT_DATA+5]     = 63;
```

Por supuesto, también puedes definir muchos botones:

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

**Añadir Reconocedor de Voz a tu programa IRSend**

- Es muy simple usar el Reconocedor de Voz solo, por favor consulta primero su wiki.

Podemos elegir qué botones necesitamos según la tabla; Tabla de valor de retorno, [Grove - Speech Recognizer](https://wiki.seeedstudio.com/es/Seeed_BLE_Shield/); del valor de retorno del Reconocedor de Voz. A continuación se muestra la tabla de valores de retorno:

<center>
  <table>
    <tbody>
      <tr>
        <th>Comando</th>
        <th>Valor de Retorno</th>
      </tr>
      <tr>
        <td width="200px">Encender la luz</td>
        <td width="200px">1</td>
      </tr>
      <tr>
        <td>Apagar la luz</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Reproducir música</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Pausar</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Siguiente</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Anterior</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Arriba</td>
        <td>7</td>
      </tr>
      <tr>
        <td>Abajo</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Encender la TV</td>
        <td>9</td>
      </tr>
      <tr>
        <td>Apagar la TV</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Aumentar temperatura</td>
        <td>11</td>
      </tr>
      <tr>
        <td>Disminuir temperatura</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Qué hora es</td>
        <td>13</td>
      </tr>
      <tr>
        <td>Abrir la puerta</td>
        <td>14</td>
      </tr>
      <tr>
        <td>Cerrar la puerta</td>
        <td>15</td>
      </tr>
      <tr>
        <td>Izquierda</td>
        <td>16</td>
      </tr>
      <tr>
        <td>Derecha</td>
        <td>17</td>
      </tr>
      <tr>
        <td>Detener</td>
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

El siguiente ejemplo usa dos comandos: "Encender la TV" y "Apagar la TV"

- Después de leer, podemos integrar el programa del Reconocedor de Voz en el programa IRSend. Ve el siguiente programa completo:

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

### Cómo controlar música

Observa los comandos del Reconocedor de Voz, hay muchos comandos que están relacionados con música, como "Reproducir música", "Pausar", "Detener", "Anterior", "Siguiente". ¡Así que hagamos esta Caja Musical de Voz!

Descarga las librerías necesarias desde github:
[Grove_Serial_MP3_Player_V2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player.git);
librería, [Grove - MP3 v2.0](/es/Grove-MP3_v2.0), <font color="Red">presta atención a la ruta de tus librerías: .../arduino/libraries </font>.

**Funciones útiles sobre Grove - MP3 v2**

Hay algunas funciones básicas útiles de Grove - MP3:

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

Pero hay algunas funciones especiales a las que necesitas prestar atención:

- SelectPlayerDevice(uint8_t device). _El valor predeterminado del dispositivo es 0x02, Selecciona la tarjeta SD como el dispositivo reproductor._

```
SelectPlayerDevice(0x02);
```

- SpecifyMusicPlay(uint16_t index). _reproduce una canción por nombre._

<dl>
  <dd>Presta atención al nombre de las canciones, puedes establecer un nombre como el siguiente tipo:</dd>
</dl>

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/Type_of_songs.png)

<dl>
  <dd>Así que podemos reproducir la canción "005" con esta función:</dd>
</dl>

```
SpecifyMusicPlay(5);
```

- SpecifyfolderPlay(uint8_t folder, uint8_t index);   // reproduce una canción por nombre en una carpeta designada

<dl>
  <dd>Además, a veces podemos reproducir música en una nueva carpeta, la función anterior resulta útil.</dd>
</dl>

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/Form_of_folder.png)

:::note
El rango de índice de carpeta es 01-99, por lo que los nombres de las carpetas solo serán cualquier número del 01 al 99. Presta atención a los números entre 1-9, el nombre de la carpeta debe agregarse como 01-09.
:::

Así que si queremos reproducir el "005" en la carpeta "01", podemos hacer esto:

```
SpecifyfolderPlay(1,5);
```

- Otra atención:

Cada canción tiene su duración de tiempo, por lo que si quieres designar canciones una por una, hay dos formas que puedes elegir:

```
delay(length of time);  // delay the length of time until the song is played out

while(QueryPlayStatus() != 0);  //  Return: 0: played out;       1:  not play out

```

Normalmente, podemos usar el último. Por ejemplo:

```

SpecifyMusicPlay(1);
while(QueryPlayStatus() != 0);
SpecifyMusicPlay(2);
while(QueryPlayStatus() != 0);
SpecifyMusicPlay(3);
while(QueryPlayStatus() != 0);

```

**Programa Integrado**

OK, integremos el Reconocedor de Voz y Grove - MP3 juntos. La siguiente demostración puede controlar algunas funciones de MP3: reproducir música, pausar música, continuar música, siguiente canción, canción anterior.

- Copia el programa y súbelo a tu Arduino UNO.

- Conecta el Base Shield al Arduino UNO, y conecta el Grove - MP3 v2 al puerto D2 del Base Shield.

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

### Cómo transmitir en tiempo real

¿Usaste Grove - MP3 para transmitir en tiempo real? Probemos a través de Speech Recognizer, Grove - MP3, y Grove - RTC.

**Ajustar el tiempo real**

Descarga las librerías necesarias desde github: <font color="Red">[RTC_DS1307](https://github.com/Seeed-Studio/RTC_DS1307);[library, Grove - RTC](/es/Grove-RTC);, presta atención a la ruta de tus librerías: .../arduino/libraries</font> .

- Abre el archivo de ejemplo de "SetTimeAndDisplay" : File --&gt; Sketchbook --&gt; libraries --&gt; RTC_DS1307 --&gt; SetTimeAndDisplay.

- Conecta Base Shield al Arduino UNO, y conecta el Grove - RTC al I2C del Base Shield.

- Configura la hora correcta del RTC.

```txt
clock.fillByYMD(2016,1,19);//May 23,2016
clock.fillByHMS(15,28,30);//15:28 30"
clock.fillDayOfWeek(Mon);//Saturday
```

- Sube el programa modificado a tu Arduino UNO.

**Texto a voz**

Como todos sabemos, hay 60 números al transmitir la hora (0 ~ 59), y podemos pronunciar algunas palabras antes de que el MP3 transmita la hora (It's). Así que necesitamos añadir 61 archivos de sonido en la tarjeta SD.

<font color="Red">Pero hay algunos consejos sobre la tarjeta SD a los que necesitas prestar atención:</font>

- Formato de la tarjeta SD: FAT32.

- Formatea la tarjeta SD antes de eliminar cualquier canción; No se debe hacer nada al añadir canciones.

- La secuencia de reproducción depende de la secuencia de adición de canciones en la tarjeta SD. _así que si queremos reproducir algunas canciones en orden, necesitamos añadir esas canciones en la tarjeta SD en orden._

Por cierto, hemos clasificado 61 archivos de sonido en una carpeta, puedes [descargarla](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/res/Sound_file.zip) y copiarla a tu tarjeta SD. Por supuesto, puede que necesites formatear la tarjeta SD primero.

<center>
  <table>
    <tbody>
      <tr>
        <th>Nombre del Archivo de Sonido</th>
        <th><font color="Red">NO. de archivo en la tarjeta SD</font></th>
        <th>Texto de Voz</th>
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

**Programa integrado y transmisión en tiempo real**

- Conecta el Base Shield al Arduino UNO; conecta Grove - MP3 v2 al puerto D2 del Base Shield; conecta Grove - Speech Recognizer al puerto D5 del Base Shield; conecta Grove - RTC al puerto I2C del Base Shield.

- Copia los siguientes códigos en un nuevo sketch del Arduino IDE y sube el programa al Arduino UNO.

- Di "HiCell, What's the time", el MP3 transmitirá la hora en tiempo real.

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

- [Archivos de sonido de transmisión](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/res/Sound_file.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
