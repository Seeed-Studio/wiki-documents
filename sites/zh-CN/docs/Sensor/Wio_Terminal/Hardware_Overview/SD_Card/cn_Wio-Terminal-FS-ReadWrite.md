---
description: 读取和写入
title: 读取和写入
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-FS-ReadWrite
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 从SD卡读取/写入数据

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg"/></div>

本文档描述了如何从SD卡读取或向SD卡写入数据。通过这种方式，您可以从SD卡加载数据，一个简单的演示将是将传感器读数存储到SD卡中。

## 在Wio Terminal上初始化SD卡

按如下方式包含`Seeed_FS`库。并使用：`SD.begin(SDCARD_SS_PIN, SDCARD_SPI)`初始化SD卡，其中SPI用于在Wio Terminal中与SD卡进行通信。

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

File myFile; //初始化文件类并将其命名为myFile

void setup() {
  Serial.begin(115200);
  while (!Serial) {
  }

  Serial.print("Initializing SD card...");
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
    Serial.println("initialization failed!");
    while (1);
  }
  Serial.println("initialization done.");
```

## 写入SD卡

要写入SD卡，需要首先打开文件。文件系统有不同的模式，因此在打开文件时需要说明使用什么模式，模式如下：

| FILE MODE | Name Defined |
|-----------|--------------|
| WRITE     | FILE_WRITE   |
| READ      | FILE_READ    |
| APPEND    | FILE_APPEND  |

要打开文件，使用`open`文件类成员函数，它接受2个参数，如下所示：

```cpp
open(const char *filepath, uint8_t mode = FILE_READ) //默认模式是READ
```

在这种情况下，打开一个名为 `test.txt` 的 txt 文件并使用 `FILE_WRITE`。要在 txt 文件中写入内容可以使用 `println` 函数（File 类）：

```cpp
  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("test.txt", FILE_WRITE); //Writing Mode

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3."); //Writing this to the txt file
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
```

**注意：** 一次只能操作一个文件，所以完成后要关闭文件。

## 从SD卡读取数据

要从SD卡读取文件，也需要先打开文件。这次使用 `FILE_READ` 模式来只读取文件。

使用File成员函数 `availble()` 来检查文件的可用性，使用 `read()` 来打印出文件内的内容。

```cpp
myFile = SD.open("test.txt", FILE_READ); //读取模式
  if (myFile) {
    Serial.println("test.txt:");

    // 从文件中读取，直到没有更多内容：
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // 关闭文件：
    myFile.close();
  } else {
    // 如果文件没有打开，打印错误信息：
    Serial.println("error opening test.txt");
  }
}
```

## 完整代码

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

File myFile;

void setup() {
  Serial.begin(115200);
  while (!Serial) {
  }
  Serial.print("正在初始化SD卡...");
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
    Serial.println("初始化失败！");
    while (1);
  }
  Serial.println("初始化完成。");

  // 打开文件。注意一次只能打开一个文件，
  // 所以在打开另一个文件之前必须先关闭这个文件。
  myFile = SD.open("test.txt", FILE_WRITE);

  // 如果文件打开成功，写入数据：
  if (myFile) {
    Serial.print("正在写入test.txt...");
    myFile.println("testing 1, 2, 3.");
    // 关闭文件：
    myFile.close();
    Serial.println("完成。");
  } else {
    // 如果文件没有打开，打印错误信息：
    Serial.println("打开test.txt时出错");
  }

  // 重新打开文件进行读取：
  myFile = SD.open("test.txt", FILE_READ);
  if (myFile) {
    Serial.println("test.txt:");

    // 从文件中读取数据直到没有更多内容：
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // 关闭文件：
    myFile.close();
  } else {
    // 如果文件没有打开，打印错误信息：
    Serial.println("打开test.txt时出错");
  }
}

void loop() {
  // setup后什么都不会发生
}
```

## 使用 QSPI 读取/写入闪存

随着 FS 库的更新，我们已经将 [**SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) 引入到系统中。现在您可以使用 QSPI 访问 Wio Terminal 上的闪存。

### 完整示例代码

此示例演示了**读取/擦除/写入**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SFUD.png"/></div>

```cpp
#include <sfud.h>

#define SFUD_DEMO_TEST_BUFFER_SIZE                     1024
static uint8_t sfud_demo_test_buf[SFUD_DEMO_TEST_BUFFER_SIZE];
static void sfud_demo(uint32_t addr, size_t size, uint8_t *data);
 
#define SERIAL Serial

void setup()
{
    SERIAL.begin(115200);
    while(!SERIAL) {};
    while(!(sfud_init() == SFUD_SUCCESS));
    #ifdef SFUD_USING_QSPI
    sfud_qspi_fast_read_enable(sfud_get_device(SFUD_W25Q32_DEVICE_INDEX), 2);
    #endif
    sfud_demo(0, sizeof(sfud_demo_test_buf), sfud_demo_test_buf);
}

void loop()
{

}
/**
 * 第一个闪存设备测试的 SFUD 演示。
 *
 * @param addr 闪存起始地址
 * @param size 测试闪存大小
 * @param size 测试闪存数据缓冲区
 */
static void sfud_demo(uint32_t addr, size_t size, uint8_t *data) {
    sfud_err result = SFUD_SUCCESS;
    const sfud_flash *flash = sfud_get_device_table() + 0;
    size_t i;
    /* 准备写入数据 */
    for (i = 0; i < size; i++) {
        data[i] = i;
    }
    /* 擦除测试 */
    result = sfud_erase(flash, addr, size);
    if (result == SFUD_SUCCESS) {
        SERIAL.println("擦除闪存数据完成");
    } else {
        SERIAL.println("擦除闪存数据失败");
        return;
    }
    /* 写入测试 */
    result = sfud_write(flash, addr, size, data);
    if (result == SFUD_SUCCESS) {
        SERIAL.println("写入闪存数据完成");
    } else {
        SERIAL.println("写入闪存数据失败");
        return;
    }
    /* 读取测试 */
    size_t BaseTime = micros();
    result = sfud_read(flash, addr, size, data);
    size_t CostTime = micros() - BaseTime;
    if (result == SFUD_SUCCESS) {
        SERIAL.println("读取闪存数据成功。");
        SERIAL.println("偏移 (h) 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F\r\n");
        for (i = 0; i < size; i++) {
            if (i % 16 == 0) {
                SERIAL.print("0x");
                SERIAL.print(addr + i,HEX);
                SERIAL.print("\t");
            }
            SERIAL.print(data[i],HEX);
            SERIAL.print("\t");
            if (((i + 1) % 16 == 0) || i == size - 1) {
                SERIAL.println("");
            }
        }
        SERIAL.println(" ");
    } else {
        SERIAL.println("读取闪存数据失败。");
    }
    /* 数据检查 */
    for (i = 0; i < size; i++) {
        if (data[i] != i % 256) {
            SERIAL.println("读取和检查写入数据有错误。");
   break;
        }
    }
    if (i == size) {
        SERIAL.println("闪存测试成功。\r\n");
        SERIAL.print("读取耗时: ");
        SERIAL.print(CostTime);
        SERIAL.println(" us");
    }
}
```