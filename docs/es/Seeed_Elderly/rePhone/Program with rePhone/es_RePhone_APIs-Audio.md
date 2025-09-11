---
description: RePhone APIs - Audio
title: RePhone APIs - Audio
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RePhone_APIs-Audio
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Xadow_Audio.JPG)

RePhone admite la reproducción de archivos de audio en tarjeta SD o en flash integrado. Los formatos compatibles incluyen **WAV**, **MP3**, **AAC**, etc. Con esta biblioteca, puedes **Reproducir**, **Pausar**, **Detener** el proceso de reproducción y **Ajustar el volumen**.

El trabajo de reproducción (decodificación) es manejado internamente por **LinkIt**. Por lo tanto, todas las funciones son **no bloqueantes**, lo que significa que después de llamar a playFile(), reproducirá el audio e inmediatamente regresará a tu programa.

Usa getStatus() para verificar el estado actual y actuar en consecuencia. El estado del audio puede ser "reproduciendo", "reproducción terminada", "reproducción pausada", etc. El audio será enviado a través del conector de auriculares en la placa Linkit.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Si intentas reproducir otro archivo de audio antes de que termine la reproducción anterior, la reproducción anterior se detendrá automáticamente, y se reproducirá el nuevo audio.
</div>

[![](https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Viewallapiofrephone.png)]

Lista de Funciones
------------------

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

Inicializa el módulo de Audio.

-   ***Sintaxis***

LAudio.begin()

-   ***Parámetros***

N/A

-   ***Devuelve***

N/A

-   ***Ejemplo***

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

Reproduce un archivo de audio en la tarjeta SD o almacenamiento flash.

-   ***Sintaxis***

```
LAudio.playFile(StorageEnum drv, char *songName)
LAudio.playFile(StorageEnum drv, wchar_t* songName)
```

-   ***Parámetros***
    -   *drv* - Almacenamiento, puede ser storageSD (tarjeta SD) o storageFlash (almacenamiento flash)
    -   *songName* - Ruta del archivo de audio en codificación ascii (char\*) o unicode (wchar_t\*)


-   ***Devuelve***

N/A

-   ***Ejemplo***

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

Ajusta el volumen de reproducción; el rango es de 0 (silencio) a 6 (máximo).

-   ***Sintaxis***

LAudio.setVolume(unsigned char volume)

-   ***Parámetros***
    -   *volume*: Nivel de volumen, puede ser **0** a **6**; 0 como silencio y 6 como volumen máximo


-   ***Devuelve***

N/A

-   ***Ejemplo***

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

Pausa la reproducción. Solo funciona cuando hay una reproducción activa en curso (por playFile()).

-   ***Sintaxis***

LAudio.pause()

-   ***Parámetros***

N/A

-   ***Devuelve***

N/A

-   ***Ejemplo***

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

Reanuda la reproducción. Solo funciona cuando la reproducción ha sido pausada.

-   ***Sintaxis***

LAudio.resume()

-   ***Parámetros***

N/A

-   ***Devuelve***

N/A

-   ***Ejemplo***

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

Detiene la reproducción.

-   ***Sintaxis***

LAudio.stop()

-   ***Parámetros***

N/A

-   ***Devuelve***

N/A

-   ***Ejemplo***

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

Consulta el estado actual de reproducción.

-   ***Sintaxis***

LAudio.getStatus()

-   ***Parámetros***

N/A

-   ***Devuelve***
    -   *AudioStatus* - Estado de reproducción, puede ser:
    -   *AudioStop* - La reproducción está detenida.
    -   *AudioPause* - La reproducción está pausada (y puede reanudarse).
    -   *AudioResume* - La reproducción se reanuda
    -   *AudioEndOfFile* - La reproducción ha terminado.
    -   *AudioCommonFailed* - La reproducción falla (por ejemplo, el archivo de audio está corrupto).


-   ***Ejemplo***

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

Ejemplo
-------

-   ***Descripción***

Con este ejemplo, puedes reproducir un archivo mp3. Abre el monitor serie para introducir un número para controlar la reproducción.

Comandos como se muestra a continuación:

1.  Reproducir
2.  Establecer volumen
3.  Pausar
4.  Reanudar
5.  Detener

-   ***Código***

Puedes encontrar el código aquí: **Archivo** -> **Ejemplos** -> **LAudio** -> **AudioPlayer**

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
--------

<!-- -   [Wiki principal para RePhone](/es/RePhone)
-   [Xadow - Audio](/es/Xadow_Audio)
-   [Página principal de APIs de RePhone](/es/RePhone) -->


<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/RePhone_APIs_-_Audio -->

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
