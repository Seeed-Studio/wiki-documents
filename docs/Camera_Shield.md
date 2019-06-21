---
name: Camera Shield
category: Shield
bzurl: https://www.seeedstudio.com/Camera-Shield-p-2106.html
oldwikiname:  Camera Shield
prodimagename: CameraShield.jpg
surveyurl: https://www.research.net/r/Camera_Shield
sku:  103990057
---
![](https://github.com/SeeedDocument/Camera_Shield/raw/master/img/CameraShield.jpg)

Camera Shield is the first shield board that support photograph, it is based on the solution of **VC0706 + OV7725**, the former is a high performance camera processor with enhanced image processing functions and it embedded the hard-wired JPEG codec, and the latter is a high-performance 1/4 inch, single-chip VGA camera and image processor in a small footprint package. We have written our library to control the Camera Shield via UART/SPI, which makes it possible to take picture easily by your Arduino board. Come on and use it to take a photo!

##  Specification
---
*   Fully Compatible with Arduino or Seeeduino

*   Still Picture Resolution: (640x480) JPEG Output

*   High Speed Serial Bus Control: UART/SPI

*   Integrated MicroSD card Interface

*   Power Supply: 5 V

## Compatibility

We have produced a lot of extension board that can make your platform board more powerful, however not every extension board is compatible with all the platform board, here we use a table to illustrate how are those boards compatible with platform board.

!!!note
    Please note that "Not recommended" means that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact with techsupport@seeed.cc.

**Click to see full picture**
[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/Shield%20Compatibility.png)](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/Shield%20Compatibility.png)


##  Hardware Interface
---
Camera Shield can be controlled via SPI or UART interface.

![](https://github.com/SeeedDocument/Camera_Shield/raw/master/img/CameraShield_Interface.png)

![](https://github.com/SeeedDocument/Camera_Shield/raw/master/img/CameraShield_Interface2.png)

##  Getting Started
---
Here is a brief introduction to use Camera Shield.

1. Download the [Camera Shield library](https://github.com/Seeed-Studio/Camera_Shield_VC0706) file from gitHub and then extract the library file to your Arduino libraries folder.

2. Open the example folder in libraries/Camera_Shield_VC0706, you will find the snapshot example sketch, double click the snapshot.ino file to open it with arduino IDE.

3. We arrange the library to make it possible to control the Camera Shield via Software Serial/Hardware Serial/SPI, you can have your choice via modifying the code.

```
#include "SoftwareSerial.h"
#include <VC0706_UART.h>
#include <SD.h>
#include <SPI.h>
#define SS_SD  10

//use software serial
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
//use hardware serial
//VC0706 cam = VC0706(&Serial1);

void setup()
{
    Serial.begin(9600);
    Serial.println("VC0706 Camera Snapshot Test ...");

    if (!SD.begin(SS_SD)) {
        Serial.println("SD Card init failed...");
        return;
    }
    if(true == cameraInit()){
        snapShot();
    }else{
        Serial.println("camera init error...");
    }
}

void loop()
{
    //nothing to do
}

bool cameraInit()
{
    cam.begin(BaudRate_19200);
    char *reply = cam.getVersion();
    if (reply == 0) {
        Serial.println("Failed to get version");
        return false;
    } else {
        Serial.println("version:");
        Serial.println("-----------------");
        Serial.println(reply);
        Serial.println("-----------------");
        return true;
    }
}

void snapShot()
{
    Serial.println("Snap in 3 secs...");
    delay(3000);
    if (! cam.takePicture()){
        Serial.println("Failed to snap!");
    }else {
        Serial.println("Picture taken!");
    }
    // Create an image with the name IMAGExx.JPG
    char filename[13];
    strcpy(filename, "IMAGE00.JPG");
    for (int i = 0; i < 100; i++) {
        filename[5] = '0' + i/10;
        filename[6] = '0' + i%10;
        // create if does not exist, do not open existing, write, sync after write
        if (! SD.exists(filename)) {
            break;
        }
    }
    // Open the file for writing
    File imgFile = SD.open(filename, FILE_WRITE);
    Serial.print("create ");
    Serial.println(filename);
    uint16_t jpglen = cam.getFrameLength();
    Serial.print("wait to fetch ");
    Serial.print(jpglen, DEC);
    Serial.println(" byte image ...");
    int32_t time = millis();
    cam.getPicture(jpglen);
    uint8_t *buffer;
    while(jpglen != 0){
        uint8_t bytesToRead = min(32, jpglen);
        buffer = cam.readPicture(bytesToRead);
        imgFile.write(buffer, bytesToRead);
        //Serial.print("Read ");  Serial.print(bytesToRead, DEC); Serial.println(" bytes");
        jpglen -= bytesToRead;
    }
    imgFile.close();
    time = millis() - time;
    Serial.println("Done!");
    Serial.print("Took "); Serial.print(time); Serial.println(" ms");
    cam.resumeVideo();
}
```

**use Hardware Serial or Software Serial for communication**

we use Serial(Software Serial or Hardware serial) to communicate with Camera Shield, you can generate your applicance like below:

```
//use software serial
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&amp;cameraconnection);
```

or if you want to use the hardware serial, you can do it like below:

```
//use hardware serial
VC0706 cam = VC0706(&amp;Serial1);
```

We use the software serial by default. If hardware serial is your choise, you need to modify the code in VC0706_UART head file. Change

```
#define USE_SOFTWARE_SERIAL         1
```

to

```
#define USE_SOFTWARE_SERIAL         0
```

**Use UART or SPI for data transmission**

Usually, you can take a picture by the following steps:

```
cam.takePicture();
uint16_t jpglen = cam.getFrameLength();
cam.getPicture(jpglen);
buffer = cam.readPicture(bytesToRead);
```

and we allow you to read data via two mode:

*   1. UART —— slower mode. Software Serial only support 9600/19200 baud rate. Hardware Serial can be 115200/38400/19200/9600. It will take about 30s to get a picture if you choose the uart mode and at 19200 baud rate.
*   2. SPI —— faster mode. It will only take about 1s or 2s to get the whole picture back.

You can choose your mode in VC0706_UART header file. We use the SPI mode by default.

```
#define TRANSFER_BY_SPI             1
```

change it to

```
#define TRANSFER_BY_SPI             0
```

to use the UART mode.

4. Stack the Camera Shield onto Arduino and Insert a mocro-SD card to the Camera Shield, you should pay attention to the serial jumpers that you defined in you code.

5. Compile the sketch and upload it to your arduino board. Open the Serial port of Arduino IDE, you can see the debug information shown from the Serial port. and the SD card status LED will blink quickly during the data transfer.

6. When the program finishes, pull out the SD card and insert it to your computer, you can see your photos. Have fun

##  Resources

*   [Camera Shield Library on gitHub](https://github.com/Seeed-Studio/Camera_Shield_VC0706)

*   [Schematic of Camera Shield](https://github.com/SeeedDocument/Camera_Shield/raw/master/res/CameraShield-Schematic.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>