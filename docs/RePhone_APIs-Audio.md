---
name: RePhone APIs - Audio
category: Tutorial
oldwikiname: RePhone_APIs_-_Audio
prodimagename: Xadow_Audio.JPG
surveyurl: https://www.research.net/r/RePhone_APIs-Audio
---

![](https://raw.githubusercontent.com/SeeedDocument/RePhone_APIs-Audio/master/img/Xadow_Audio.JPG)

RePhone supports playback audio files on SD card or on built-in flash. Formats supported include **WAV**, **MP3**, **AAC**, etc. With this library, you can **Play**, **Pause**, **Stop** playback process and **Adjust volume**.

The playback (decoding) job is handled internally by **LinkIt**. Therefore, all functions are **non-blocking**, which means after you call playFile(), it will play the audio and immediately return to your program.

Use getStatus() to check the current status and act correspondingly. The audio status can be "playing", "play finished", "play paused", etc. The audio will be outputted through the earphone jack on the Linkit board.

<div class="admonition note">
<p class="admonition-title">Note</p>
If you try to play another audio file before the previous playback is finished, the previous playback will be stopped automatically, and the new audio will be played.
</div>

[![](https://raw.githubusercontent.com/SeeedDocument/RePhone_APIs-Audio/master/img/Viewallapiofrephone.png)](/RePhone)

Function List
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

Initializes the Audio module.

-   ***Syntax***

LAudio.begin()

-   ***Parameters***

N/A

-   ***Returns***

N/A

-   ***Example***

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

Plays an audio file on SD card or flash storage.

-   ***Syntax***

```
LAudio.playFile(StorageEnum drv, char *songName)
LAudio.playFile(StorageEnum drv, wchar_t* songName)
```

-   ***Parameters***
    -   *drv* - Storage, can be storageSD (SD card) or storageFlash (flash storage)
    -   *songName* - Path of audio file in ascii (char\*) or unicode (wchar\_t\*) encoding


-   ***Returns***

N/A

-   ***Example***

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

Adjusts the playback volume; range is from 0 (silent) to 6 (max).

-   ***Syntax***

LAudio.setVolume(unsigned char volume)

-   ***Parameters***
    -   *volume*: Volume level, can be **0** to **6**; 0 as silent and 6 as max volume


-   ***Returns***

N/A

-   ***Example***

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

Pauses the playback. It only works when there is an active playback ongoing (by playFile()).

-   ***Syntax***

LAudio.pause()

-   ***Parameters***

N/A

-   ***Returns***

N/A

-   ***Example***

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

Resumes playback. It only works when the playback has been paused.

-   ***Syntax***

LAudio.resume()

-   ***Parameters***

N/A

-   ***Returns***

N/A

-   ***Example***

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

Stops playback.

-   ***Syntax***

LAudio.stop()

-   ***Parameters***

N/A

-   ***Returns***

N/A

-   ***Example***

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

Queries the current playback status.

-   ***Syntax***

LAudio.getStatus()

-   ***Parameters***

N/A

-   ***Returns***
    -   *AudioStatus* - Playback status, can be:
    -   *AudioStop* - Playback is stopped.
    -   *AudioPause* - Playback is paused (and can resume).
    -   *AudioResume* - Playback resumes
    -   *AudioEndOfFile* - Playback is finished.
    -   *AudioCommonFailed* - Playback fails (e.g. the audio file is corrupted).


-   ***Example***

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

Example
-------

-   ***Description***

With this example, you can play a mp3 file. Open serial monitor to input a number to control the playing.

Command as below:

1.  Play
2.  Setvolume
3.  Pause
4.  Resume
5.  Stop

-   ***Code***

You can find the code here: **File** -> **Examples** -> **LAudio** -> **AudioPlayer**

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

Resources
---------

-   [Main wiki for RePhone](/RePhone)
-   [Xadow - Audio](/Xadow_Audio)
-   [RePhone APIs main page](/RePhone)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/RePhone_APIs_-_Audio -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>