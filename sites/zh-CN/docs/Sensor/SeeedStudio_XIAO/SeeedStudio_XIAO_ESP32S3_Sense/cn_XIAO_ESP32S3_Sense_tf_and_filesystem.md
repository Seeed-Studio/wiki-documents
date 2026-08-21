---
description: 本教程介绍如何在 XIAO ESP32S3 上使用 microSD 卡和文件系统。
title: Sense 版本的 MicroSD 卡
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
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/cn/xiao_esp32s3_sense_filesystem/
---

# 文件系统与 XIAO ESP32S3 Sense

在本教程中，我们将重点介绍 XIAO ESP32S3 的文件系统使用，主要是 Sense 版本上 microSD 卡卡槽的使用。同时，我们还会介绍官方 ESP 文件系统 SPIFFS、芯片内置 Flash 等内容。

:::tip
本教程中关于 microSD 卡的部分**仅**适用于 **XIAO ESP32S3 Sense**，其余内容适用于 ESP32-S3 芯片，因此除了 microSD 卡相关部分外，你可以在 XIAO ESP32S3 上运行这些示例。
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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 入门指南

由于本教程会使用 microSD 卡，我们需要提前安装 Sense 扩展板并准备好 microSD 卡。

### 扩展板安装（适用于 Sense）

安装扩展板非常简单，你只需要将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按压并听到“咔哒”一声，安装就完成了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### 准备 microSD 卡

XIAO ESP32S3 Sense 支持最大 **32GB** 的 microSD 卡，因此如果你准备为 XIAO 购买 microSD 卡，请参考这一规格。在使用 microSD 卡之前，请将其格式化为 **FAT32** 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

格式化完成后，你可以将 microSD 卡插入 microSD 卡卡槽。请注意插入方向，带有金手指的一侧应朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
如果 microSD 卡无法被 ESP32S3 识别，但可以被你的电脑识别，**并且**错误类似如下所示：

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

请按以下步骤操作：

- 使用 Windows 格式化工具

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- 使用 [SD Card Formatter](https://www.sdcard.org/downloads/formatter/)（第三方软件）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**注意：**

- 这个过程将比快速格式化花费更长的时间。

- 如果你在重复使用之前用于其他用途的 microSD 卡（例如之前装有 Linux 操作系统的 microSD 卡被重新使用），就可能会出现这种情况。

:::

### 扩展板的卡槽电路设计

XIAO ESP32S3 Sense 的卡槽占用了 ESP32-S3 的 4 个 GPIO，引脚占用详情如下表所示。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">microSD 卡卡槽</th>
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

这也意味着，如果你选择使用扩展板的 microSD 卡功能，就不能同时使用 XIAO ESP32S3 的 SPI 功能。你可以通过连接/切断 J3 焊盘来打开或关闭 microSD 卡功能。

<table align="center">
 <tr>
     <th>如果你想使用 SPI 引脚 / 禁用扩展板的 SD 卡</th>
     <th>如果你想启用扩展板上的 SD 卡 / 禁用 SPI 引脚</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>沿着白色细线切割，以断开焊盘连接。</td>
    <td>将两个焊盘焊接在一起。</td>
  </tr>
</table>

:::tip
默认情况下，安装扩展板后 microSD 卡功能是启用的。
:::

## 修改 microSD 卡中的文件

:::caution
本节仅适用于 XIAO ESP32S3 Sense。
:::

在 Arduino IDE 中有多个示例展示了如何使用 XIAO ESP32S3 操作 microSD 卡上的文件。在 Arduino IDE 中，依次点击 **File > Examples > SD > SD_Test**，或者复制以下代码。

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
请注意，你不能直接使用示例程序，你需要对程序做一些小的修改以确保其正常工作。修改内容是在 `Setup()` 函数中，将原始代码从 `SD.begin()` 更改为 `SD.begin(21)`。指定用于初始化的引脚编号。
:::

将程序上传到 XIAO ESP32S3 Sense，打开串口监视器，你将看到文件创建过程和写入过程。你也可以通过 microSD 转 USB 的方式，在电脑上访问新创建的文件及其内容。

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### 程序注释

首先，你需要包含以下库：用于处理文件的 **FS.h**，用于与 microSDcard 接口的 **SD.h**，以及用于使用 SPI 通信协议的 **SPI.h**。

1. 在 `setup()` 中，以下代码行使用 `SD.begin(21)` 初始化 microSDcard。在这里，我们需要为 `SD.begin()` 传入一个参数，即 CS 引脚。对于扩展板的 microSD 卡设计，CS 引脚连接到 **GPIO 21**。如果你使用的是 Round Display for XIAO，那么传入的参数应为 **D2**。

2. 以下代码行会在串口监视器上打印 microSDcard 的类型。

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

3. 你可以通过调用 `cardSize()` 方法获取 microSDcard 的容量：

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD Card Size: %lluMB\n", cardSize);
```

**该示例提供了多个函数，用于处理 microSDcard 上的文件。**

4. `listDir()` 函数用于列出 SD 卡上的目录。该函数的参数包括文件系统（SD）、主目录名称以及要进入目录的层级数。

   下面是调用该函数的示例。`/` 对应 microSDcard 的根目录。

```c
listDir(SD, "/", 0);
```

5. `createDir()` 函数用于创建新目录。将 `SD` 文件系统和目录路径作为参数传入。例如，下面的命令会在根目录下创建一个名为 `mydir` 的新目录。

```c
createDir(SD, "/mydir");
```

6. 要从 microSDcard 中删除一个目录，请使用 `removeDir()` 函数，并将 SD 文件系统和目录路径作为参数传入。

```c
removeDir(SD, "/mydir");
```

7. `readFile()` 函数用于读取文件内容，并在串口监视器中打印出来。与之前的函数一样，将 `SD` 文件系统和文件路径作为参数传入。例如，下面这一行会读取 `hello.txt` 文件的内容。

```c
readFile(SD, "/hello.txt")
```

8. 要向文件写入内容，你可以使用 `writeFile()` 函数。将 `SD` 文件系统、文件路径和消息作为参数传入。下面这一行会在 `hello.txt` 文件中写入 `Hello`。

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. 同样，你可以使用 `appendFile()` 函数向文件追加内容（不会覆盖之前的内容）。下面这一行会在 `hello.txt` 文件中追加消息 `World!\n`。其中 `\n` 表示下次向文件写入内容时，会写入到新的一行。

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. 你可以使用 `renameFile()` 函数重命名文件。将 SD 文件系统、原始文件名和新文件名作为参数传入。下面这一行会将 `hello.txt` 文件重命名为 `foo.txt`。

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. 使用 `deleteFile()` 函数删除文件。将 SD 文件系统和要删除文件的文件路径作为参数传入。下面这一行会从 microSDcard 中删除 `foo.txt` 文件。

```c
deleteFile(SD, "/foo.txt");
```

12. `testFileIO()` 函数用于显示读取一个文件内容所花费的时间。下面的函数会测试 test.txt 文件。

```c
testFileIO(SD, "/test.txt");
```

## 基于气体数据记录的 MicroSD 卡应用

:::caution
本节仅适用于 XIAO ESP32S3 Sense。
:::

本项目展示了如何使用 XIAO ESP32S3 Sense 将带有时间戳的数据记录到 TF 卡中。作为示例，我们将每 10 分钟记录一次来自 Multichannel Gas Sensor 的温度读数。XIAO ESP32S3 在每次读数之间会处于深度睡眠模式，并通过网络时间协议（NTP）请求日期和时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

要完成本项目，你需要提前准备以下硬件。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

在软件方面，你需要提前在 Arduino IDE 中安装以下库。

- 由 Taranais fork 的 NTPClient 库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- Multichannel Gas Sensor 库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

下面是完整的示例程序。在程序中我们需要使用网络配对时间，因此你需要将程序中的 WiFi 名称和密码修改为你自己的。

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

编译并上传程序，然后打开串口监视器。如果程序运行顺利，你会在串口监视器中看到如下信息输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

你可以在方便的时候随时取下 microSD 卡，并通过读卡器访问保存的传感器数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
为了方便测试，演示效果为每分钟保存一次数据，实际提供的示例代码是每十分钟保存一次数据。
:::

:::caution
关于本项目，有以下事项需要注意：

1. Multichannel Gas Sensor 需要一段预热时间，之后获取的数值才会准确。因此，如果前几组记录的数据误差较大，可以考虑将其舍弃。
2. 串口监视器只会输出一次保存信息，因为本示例使用了深度睡眠功能，唤醒后相当于复位，也就是说，你需要重新打开 Arduino 的串口才能看到下一次的调试信息。但请放心，只要存储卡没有问题，传感器数据就会在你设定的时间点按时采集。

   :::

### 程序注释

在本示例中，XIAO ESP32S3 在每次读取之间都会进入深度睡眠模式。在深度睡眠模式下，你的所有代码都应该写在 `setup()` 函数中，因为 XIAO ESP32S3 永远不会运行到 `loop()`。

本示例使用了从微秒到秒的转换因子，因此你可以在 `TIME_TO_SLEEP` 变量中以秒为单位设置睡眠时间。在本例中，我们将 XIAO ESP32S3 设置为睡眠 10 分钟（600 秒）。如果你希望 XIAO ESP32S3 睡眠不同的时间，只需在 `TIME_TO_SLEEP` 变量中输入深度睡眠的秒数即可。

```c
// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000; // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;
```

接下来，定义 microSD 卡的 CS 引脚。在本例中，将其设置为 **GPIO 21**。

```c
#define SD_CS 21
```

创建一个名为 `readingID` 的变量来保存读取 ID。这是一种整理读取数据的方式。为了在深度睡眠期间保存变量值，我们可以将其保存在 RTC 内存中。要在 RTC 内存中保存数据，只需在变量定义前添加 `RTC_DATA_ATTR`。

创建一个 String 变量，用于保存要写入 microSD 卡的数据。

下面两行定义了一个 NTPClient，用于从 NTP 服务器请求日期和时间。

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

接下来，在 `Setup()` 函数中初始化 NTP 客户端，以从 NTP 服务器获取日期和时间。你可以使用 `setTimeOffset(<time>)` 方法根据你的时区调整时间。

在一切初始化完成后，我们就可以获取读数、时间戳，并将所有内容记录到 microSD 卡中。

为了让代码更易理解，我们创建了以下函数：

- `getReadings()`: 从 Multichannel Gas Sensor 读取气体数值；
- `getTimeStamp()`: 从 NTP 服务器获取日期和时间；
- `logSDcard()`: 将前述数据记录到 microSD 卡。

最后，ESP32 开始进入深度睡眠。

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

我们建议你将这两个函数一起使用。请确保在设置好唤醒时间后，XIAO 能尽快进入深度睡眠模式。

## 串行外设接口闪存文件系统（SPIFFS）

:::caution
本节适用于 XIAO ESP32C3、XIAO ESP32S3 或 XIAO ESP32S3 Sense，但本节内容不支持 Arduino IDE 2.X。
:::

ESP32 内置了一个串行外设接口闪存文件系统（SPIFFS）。SPIFFS 是为带有闪存芯片的微控制器创建的轻量级文件系统，该闪存芯片通过 SPI 总线连接，例如 ESP32 的闪存。在本文中，我们将演示如何使用 Arduino IDE 的一个插件，轻松地将文件上传到 ESP32 的文件系统。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFS 允许你像在电脑中的普通文件系统那样访问闪存，但更简单且功能更有限。你可以读取、写入、关闭和删除文件。在撰写本文时，SPIFFS 不支持目录，因此所有内容都保存在一个扁平结构中。

在 XIAO ESP32 上使用 SPIFFS 特别适用于：

- 创建带有设置的配置文件
- 永久保存数据
- 创建文件以保存少量数据，而不是使用 microSD 卡
- 保存 HTML 和 CSS 文件以构建 Web 服务器
- 保存图像、图形和图标

### 安装 Arduino ESP32 Filesystem Uploader

你可以在 Arduino IDE 中自己编写代码，在 ESP32 文件系统中创建、保存和写入文件。但这并不是很实用，因为你必须在 Arduino 草图中输入文件的全部内容。

幸运的是，Arduino IDE 有一个插件，可以让你直接从电脑上的文件夹将文件上传到 ESP32 文件系统。这使得处理文件变得非常简单方便。下面我们来安装它。

:::note
注意：在撰写本文时，ESP32 Filesystem Uploader 插件**不支持 Arduino 2.0**。
:::

#### Windows

**步骤 1.** 进入 [releases 页面](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)，点击 [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) 文件进行下载。

**步骤 2.** 找到你的 Sketchbook 位置。在 Arduino IDE 中，进入 **File > Preferences**，查看你的 Sketchbook 位置。以我的情况为例，它在以下路径：`C:\Users\mengd\Documents\Arduino`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 进入 Sketchbook 位置，并创建一个 **tools** 文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**步骤 4.** 解压下载的 _.zip_ 压缩包。打开它并将 ESP32FS 文件夹复制到上一步创建的 tools 文件夹中。你的文件夹结构应类似如下：

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**步骤 5.** 最后，重启你的 Arduino IDE。

要检查插件是否成功安装，打开 Arduino IDE。选择 **XIAO ESP32S3** 或 **XIAO ESP32C3**，进入 **Tools**，检查是否有 **ESP32 Sketch Data Upload** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**步骤 1.** 进入 [releases 页面](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) 并点击 [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) 文件进行下载。

**步骤 2.** 解压文件。

**步骤 3.** 在 `/Documents/Arduino/` 中创建一个名为 **tools** 的文件夹。

**步骤 4.** 将解压得到的 **ESP32FS** 文件夹复制到 **tools** 目录中。你的文件夹结构应类似如下。

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**步骤 5.** 最后，重启你的 Arduino IDE。

要检查插件是否成功安装，打开 Arduino IDE。选择 **XIAO ESP32S3** 或 **XIAO ESP32C3**，进入 **Tools**，检查是否有 **ESP32 Sketch Data Upload** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### 使用 Filesystem Uploader 上传文件

要将文件上传到 ESP32 文件系统，请按照以下说明操作。

**步骤 6.** 创建一个 Arduino 草图并保存。为了演示，你可以保存一个空草图。

**步骤 7.** 然后，打开草图文件夹。你可以进入 **Sketch > Show Sketch Folder**。将会打开保存草图的文件夹。

**步骤 8.** 在该文件夹内创建一个名为 **data** 的新文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**步骤 9.** 你想要保存到 ESP32 文件系统中的文件，都应放在 data 文件夹内。作为示例，创建一个带有一些文本的 _.txt_ 文件，并命名为 **test_example**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**步骤 10.** 然后，在 Arduino IDE 中上传这些文件时，只需进入 **Tools > ESP32 Sketch Data Upload**。

:::caution
上传器会覆盖你之前在文件系统中保存的所有内容。
:::

当你看到 **SPIFFS Image Uploaded** 这条消息时，说明文件已成功上传到 ESP32 文件系统。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### 测试 Uploader

现在，我们来检查一下该文件是否真的被保存到了 ESP32 文件系统中。只需将以下代码上传到你的 ESP32 开发板即可。

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

上传完成后，以 115200 的波特率打开串口监视器。它应该会在串口监视器上打印你的 _.txt_ 文件的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## Flash 数据存储

:::caution
本节适用于 XIAO ESP32C3、XIAO ESP32S3 或 XIAO ESP32S3 Sense。
:::

在使用开发板时，很多人都希望能够使用芯片上的 Flash 存储器来存储一些重要数据。这就需要一种存储方式，即使在开发板出现异常的情况下也能确保数据不丢失。

本教程将介绍如何通过以下两种不同的存储方式，将重要数据存储在 XIAO ESP32 的 Flash 存储器中：

1. 第一个指南展示如何使用 `Preferences.h` 库在 ESP32 的 Flash 存储器中永久保存数据。存储在 Flash 中的数据在复位或断电后仍然会保留。使用 `Preferences.h` 库非常适合保存网络凭据、API 密钥、阈值，甚至 GPIO 的最后状态等数据。你将学习如何在 Flash 存储器中保存和读取数据。

2. 第二个指南解释什么是 XIAO ESP32C3 的 EEPROM，以及它的用途。我们还将向你展示如何对 EEPROM 进行读写，并构建一个项目示例，将学到的概念付诸实践。

本节是为 XIAO ESP32C3 编写的，并且与新的 XIAO ESP32S3 完全兼容，因此你可以直接使用这里的示例程序，这里不再重复讲解。

- [XIAO ESP32C3 以不同方式永久保存数据](https://wiki.seeedstudio.com/cn/xiaoesp32c3-flash-storage/)

## 故障排除

## 引用与参考

本文参考了 **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** 上关于 ESP32 文件系统的内容，并在 Seeed Studio XIAO ESP32S3 Sense 上进行了验证。

特别感谢 **Random Nerd Tutorials** 的作者们所付出的辛勤努力！

以下是原文的参考链接，欢迎你通过以下原文链接进一步了解 ESP32 文件系统。

- [ESP32：使用 Arduino IDE 的 MicroSD 卡模块指南](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [ESP32 将温度数据记录到 MicroSD 卡](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [在 Arduino IDE 中安装 ESP32 文件系统上传工具](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

关于使用 ESP32 开发板的更多信息，请访问 Random Nerd Tutorials 的官方网站。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
