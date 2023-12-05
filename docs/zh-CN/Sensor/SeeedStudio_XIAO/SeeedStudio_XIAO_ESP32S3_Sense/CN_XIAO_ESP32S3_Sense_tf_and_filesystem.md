---
description: This tutorial describes how to use the microSD card and file system on the XIAO ESP32S3.
title: SD 卡槽使用和文件系统
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_sense_filesystem
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# XIAO ESP32S3 Sense 的文件系统和 SD 卡槽使用

在本教程中，我们将重点介绍XIAO ESP32S3文件系统的使用，主要介绍Sense版本的microSD卡插槽的使用。同时，我们将介绍官方ESP文件系统SPIFFS、芯片内置Flash等。

:::note
本教程的microSD卡部分**仅**适用于**XIAO ESP32S3 Sense**，其余内容适用于ESP32-S3芯片，因此您可以在除microSD卡之外的XIAO ESP32S3上运行示例。
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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 开始

由于本教程将使用microSD卡，因此需要提前安装Sense扩展板并准备microSD卡。 

### 安装扩展板(for Sense)

安装扩展板非常简单，只需要将扩展板上的连接器对准小ESP32S3上的B2B连接器，然后用力按下，听到“咔”的一声，安装完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### 准备microSD卡

XIAO ESP32S3 Sense支持高达**32GB**的microSD卡，所以如果您准备为XIAO购买microSD卡，请参阅此规格。并在使用microSD卡之前将microSD卡格式化为**FAT32**格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

格式化完成后，可以将microSD卡插入microSD卡插槽中。请注意插入的方向，有金手指的那一侧要朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### 扩展板的卡槽电路设计 

XIAO ESP32S3感知卡插槽占用ESP32-S3的4 GPIOs，占用的pin信息如下表所示。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">microSD 卡槽</th>
        </tr>
        <tr>
            <td align="center">GPIO21</td>
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



也就是说，如果选择使用扩展板的microSD卡功能，则不能同时使用肖ESP32S3的SPI功能。您可以通过连接/切割J3的pad来开启/关闭microSD卡功能。

<table align="center">
	<tr>
	    <th>如果要使用SPI引脚/关闭扩展板的SD卡</th>
	    <th>如果需要启用扩展板SD卡/禁用SPI引脚</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
	</tr>
  <tr>
    <td>沿着白色细线切断焊盘连接。</td>
    <td>将两个焊盘焊接在一起。</td>
  </tr>
</table>

:::tip
安装级联板后，microSD卡功能默认开启。
:::


## 修改microSD卡中的文件

:::注意
本节仅适用于XIAO ESP32S3 Sense。
:::

在Arduino IDE中有几个示例，说明如何使用XIAO ESP32S3处理microSD卡上的文件。在Arduino IDE中，转到**File > Examples > SD > SD_Test**，或复制以下代码。

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

:::提示
请注意，您不能直接使用示例程序，您需要对程序进行小的修改以确保其正常工作。修改是将原始代码从'Setup（）'函数中的'SD.begin（）'到'SD.boot（21）'。指定用于初始化的端号。
:::

将程序上传到XIAO ESP32S3 Sense，打开串行监视器，您将看到文件创建过程和写入过程。您还可以使用microSD转USB通过电脑访问新创建的文件和内容。

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### 程序注释

首先，您需要包含以下库:处理文件的**FS.h**，与microSDcard接口的**SD.h**，以及使用SPI通信协议的**SPI.h**。 

1. 在`setup()`中，以下几行代码用`SD.begin(21)`初始化microSDcard。在这里，我们需要为`SD.begin()`传递一个参数，即CS pin。而对于microSD卡设计的扩展板，CS引脚连接到**GPIO 21**。如果你对XIAO使用圆形显示，那么传入的参数应该是**D2**。 

2. 下面的代码在串行显示器上打印microSDcard类型。

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

3. 你可以通过调用`cardSize()`方法来获取microSDcard的大小:

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD Card Size: %lluMB\n", cardSize);
```

**这个例子提供了几个函数来处理microSDcard上的文件**

4. `listDir()`函数列出SD卡上的目录。该函数接受的参数包括文件系统(SD)、主目录的名称以及进入该目录的级别。

下面是如何调用这个函数的例子。`/`对应microSDcard根目录。

```c
listDir(SD, "/", 0);
```

5. `createDir()`函数创建一个新目录。将`SD`文件系统和目录名路径作为参数传递。例如，下面的命令在根目录下创建一个名为`mydir`的新目录。

```c
createDir(SD, "/mydir");
```

6. 要从microSDcard中删除目录，使用`removeDir()`函数并将SD文件系统和目录名称路径作为参数传递。

```c
removeDir(SD, "/mydir");
```

7. `readFile()`函数读取文件的内容并在串行监视器中打印出来。与之前的函数一样，将`SD`文件系统和文件路径作为参数传递。例如，下面这行代码读取了`hello.txt`文件的内容。

```c
readFile(SD, "/hello.txt")
```

8. 要将内容写入文件，你可以使用`writeFile()`函数。将`SD`文件系统、文件路径和消息作为参数传递。下面这行代码在`Hello .txt`文件中写入了`Hello`。

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. 类似地，你可以使用`appendFile()`函数将内容追加到文件中(而不覆盖之前的内容)。下面这行添加了消息`World!\n '在`hello.txt`文件中。' \n '意味着下次你向文件写入内容时，它将被写入一个新行。

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. 你可以使用`renameFile()`函数重命名一个文件。将SD文件系统、原始文件名和新文件名作为参数传递。下面这行代码将`hello.txt`文件重命名为`foo.txt`。

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. U使用`deleteFile()`函数删除文件。将SD文件系统和要删除文件的文件路径作为参数传递。下面这行代码从microSDcard中删除了`foo.txt`文件。

```c
deleteFile(SD, "/foo.txt");
```

12. `testFileIO()`函数显示读取文件内容所需的时间。下面的函数测试了test.txt文件。

```c
testFileIO(SD, "/test.txt");
```

## 基于MicroSD卡的瓦斯数据记录应用

::注意
本节仅适用于XIAO ESP32S3 Sense。
:::

这个项目展示了如何使用XIAO ESP32S3 Sense将带有时间戳的数据记录到TF卡。例如，我们将每10分钟记录一次多通道气体传感器的温度读数。在每次读取数据之间，XIAO ESP32S3将处于深度睡眠模式，并使用NTP (Network time Protocol，网络时间协议)请求日期和时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

为了完成这个项目，您需要提前准备以下硬件。

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>通过Grove OLED为XIAO建立工作室扩展基地</th>
        <th>Grove -多通道气体传感器v2</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

对于软件，您需要提前安装以下Arduino IDE库。 

- 由Taranais创建的NTPClient库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- 多通道气体传感器库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

这是完整的示例程序。在程序中我们会用到网络配对时间，所以你需要把程序中的WiFi名称和密码改成你的。

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

编译并上传程序，打开串口监视器。如果程序运行顺利，您将看到从串行监视器输出的以下消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

您可以随时取下microSD卡，并通过读卡器读取保存的传感器数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::笔记
为了便于测试，每分钟显示一次保存数据的效果，实际提供的示例代码为十分钟保存一次数据。
:::

::小心
关于这个项目，有以下几点需要注意: 

1. 多通道气体传感器需要一段预热时间才能得到准确的数值。因此，如果误差较大，可以认为前几组记录的数据可以被丢弃。 
2. 串口监视器只会输出一次保存的信息，因为本例使用了deep sleep功能，相当于唤醒后重置，即需要重新打开Arduino的串口才能看到下一个调试信息。但请放心，如果卡没有问题，传感器数据会在您设定的时间准时采集。
:::

### 程序注释 ###

在本例中，XIAO ESP32S3在每次读取之间处于深度睡眠模式。在深度睡眠模式下，所有代码都应该放在`setup()`函数中，因为XIAO ESP32S3永远不会到达`loop()`。 

这个例子使用了一个从微秒到秒的转换因子，因此你可以在`TIME_TO_SLEEP`变量中以秒为单位设置睡眠时间。在本例中，我们将XIAO ESP32S3设置为休眠10分钟(600秒)。如果你想让XIAO ESP32S3睡眠一段不同的时间，你只需要在`TIME_TO_SLEEP`变量中输入深度睡眠的秒数。

```c
// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000; // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;
```

接下来，定义microSD卡的CS引脚。在这种情况下，它被设置为**GPIO 21**。

```c
#define SD_CS 21
```

创建一个名为`readingID`的变量来保存读取ID。这是一种组织阅读材料的方法。为了在深度睡眠期间保存变量值，我们可以将其保存在RTC内存中。要在RTC内存中保存数据，你只需要在变量定义之前添加`RTC_DATA_ATTR`。 

创建一个字符串变量，用于保存microSD卡上的数据。 

下面的两行代码定义了一个NTPClient，用于向NTP服务器请求日期和时间。

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

接下来，在`Setup()`函数中初始化NTP客户端，以从NTP服务器获取日期和时间。你可以使用`setTimeOffset(<time>)`方法调整你所在时区的时间。 

初始化所有内容后，我们可以获取读数、时间戳并将所有内容记录到microSD卡中。 

为了让代码更容易理解，我们创建了以下函数: 

- ` getreads()`:从多通道气体传感器读取气体值; 
- `getTimeStamp()`:从NTP服务器获取日期和时间; 
- `logSDcard()`:将上述数据记录到microSD卡。 

最后，ESP32开始深度睡眠。

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start(); 
```

我们建议你同时使用这两个函数。在设定好唤醒时间后，确保肖能尽快进入深度睡眠模式。

## 串行外围接口Flash文件系统(SPIFFS) 

:::注意
本节适用于XIAO ESP32C3、XIAO ESP32S3或XIAO ESP32S3 Sense，但本节不支持Arduino IDE 2.X。
:::

ESP32自带SPIFFS (Serial Peripheral Interface Flash File System)文件系统。SPIFFS是为带有flash芯片的微控制器创建的轻量级文件系统，与ESP32 flash存储器一样，通过SPI总线连接。在本文中，我们将展示如何使用Arduino IDE插件轻松地将文件上传到ESP32文件系统。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFS允许您像在计算机中的普通文件系统中那样访问闪存，但更简单，限制也更多。您可以读取、写入、关闭和删除文件。在撰写本文时，SPIFFS不支持目录，因此所有内容都保存在平面结构上。 

在XIAO ESP32中使用SPIFFS特别有用: 

- 使用settings创建配置文件 
- 永久保存数据 
- 创建文件以保存少量数据，而不是使用microSD卡 
- 保存HTML和CSS文件来构建web服务器 
- 保存图像、图形和图标

### 安装Arduino ESP32文件系统上传器

您可以通过自己在Arduino IDE上编写代码来创建、保存和将文件写入ESP32文件系统。这不是很有用，因为您必须在Arduino sketch中输入文件的内容。 

幸运的是，Arduino IDE有一个插件，允许您从计算机上的文件夹直接将文件上传到ESP32文件系统。这使得处理文件非常容易和简单。让我们来安装它。

:::注意
注意:在撰写本文时，Arduino 2.0**不支持ESP32文件系统上传插件**。
:::

#### Windows

**Step 1.** 访问releases page](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) 然后点击 [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) 文件进行下载

**Step 2.** 找到你的Sketchbook的位置。在您的Arduino IDE中，转到**File > Preferences**并检查您的Sketchbook位置。在我的例子中，它在以下路径中:`C:\Users\mengd\Documents\Arduino`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**Step 3.** 转到sketchbook的位置，创建一个**tools**文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**Step 4.** 解压缩下载的*.zip*文件夹。打开它并将ESP32FS文件夹复制到上一步创建的tools文件夹中。你应该有一个类似的文件夹结构:

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**Step 5.** 最后，重启Arduino IDE。

要检查插件是否成功安装，请打开您的Arduino IDE。选择**XIAO ESP32S3**或**XIAO ESP32C3**，进入**工具**并检查是否有**ESP32 Sketch Data Upload**选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**Step 1.** 转到[releases页面](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)，然后点击[ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip)文件进行下载

**Step 2.** 解压文件

**Step 3.** 在`/Documents/Arduino/`目录下创建一个名为**tools**的文件夹。

**Step 4.** 将解压后的**ESP32FS**文件夹复制到**tools**目录下。你应该有一个类似的文件夹结构。

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**Step 5.** 最后，重启Arduino IDE。

要检查插件是否成功安装，请打开您的Arduino IDE。选择**XIAO ESP32S3**或**XIAO ESP32C3**，进入**工具**并检查是否有**ESP32 Sketch Data Upload**选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### 使用文件系统上传器上传文件 ##

按照下面的说明将文件上传到ESP32文件系统。

**Step 6.** 创建一个Arduino草图并保存它。为了演示的目的，你可以保存一个空的草图。

**Step 7.** 然后，打开sketch文件夹。你可以进入**Sketch > Show Sketch文件夹**。保存草图的文件夹应该会打开。

**Step 8.** 在该文件夹中，创建一个名为**data**的新文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**Step 9.** data文件夹中是你要保存到ESP32文件系统中的文件的位置。例如，创建一个*.txt*文件，其中包含一些名为**test_example**的文本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**Step 10.** 然后，要在Arduino IDE中上传文件，你只需要转到**Tools > ESP32 Sketch Data upload **。

:::注意
上传程序将覆盖你已经保存在文件系统中的所有内容。 
:::

当你看到消息**SPIFFS Image upload **时，文件已经成功上传到ESP32文件系统。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### 测试上传器 ###

现在，让我们检查文件是否真的保存到ESP32文件系统中。只需上传以下代码到您的ESP32板

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

上传完成后，打开波特率为115200的串口监视器。它应该在串行监视器上打印*.txt*文件的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>



## Flash数据存储 

:::注意
本节内容适用于XIAO ESP32C3、XIAO ESP32S3、XIAO ESP32S3 Sense。 
::: 

当我们使用开发板时，我们中的许多人都希望能够使用芯片上的闪存来存储一些重要的数据。这需要一种存储方法，确保即使在开发板异常的情况下也不会丢失数据。 

本教程将介绍如何通过以下两种不同的存储方法将重要数据存储在XIAO ESP32闪存上: 

1. 第一指南展示如何使用Preferences.h库将数据永久保存在ESP32闪存上。保存在闪存中的数据在重置或断电时仍然存在。使用Preferences.h库有助于保存网络凭据、API密钥、阈值甚至GPIO的最后状态等数据。你将学习如何从闪存中保存和读取数据。 

2. 第二guid解释了什么是XIAO ESP32C3 EEPROM和它的用途。我们还将向您展示如何从EEPROM中读写，并构建一个项目示例来将学到的概念付诸实践。 

本节是为XIAO ESP32C3编写的，与新的XIAO ESP32S3完全兼容，因此您可以直接使用这里的例程，因此我们在这里不再赘述。 

- [XIAO ESP32C3数据以不同的方式永久保存](https://wiki.seeedstudio.com/xiaoesp32c3-flash-storage/)


## 故障排除

## 引用和参考文献

本文借鉴了文件系统内容**[Random Nerd Tutorials](https://randomnerdtutorials.com/)**’on ESP32)，并在Seeed Studio XIAO ESP32S3 Sense上使用它进行验证。 

特别感谢**Random Nerd Tutorials**的作者们的辛勤工作!

下面是原文的参考链接，欢迎您通过下面的原文链接了解更多关于ESP32文件系统的信息。 

- [ESP32:使用Arduino IDE的MicroSD卡模块指南](https://randomnerdtutorials.com/esp32-microsd-card-arduino/) 
- [ESP32数据记录温度到MicroSD卡](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/) 
- [在Arduino IDE中安装ESP32文件系统上传器](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/) 

有关使用ESP32开发板的更多信息，请阅读Random Nerd Tutorials的官方网站。 

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## 产品支持和技术讨论



感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>














