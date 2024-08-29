---
description: 读取写入数据
title: 读取写入数据
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-FS-ReadWrite
last_update:
  date: 3/09/2024
  author: 金菊
---

# 从SD卡读取/写入数据

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg"/></div>

这个存储库描述了如何从SD卡读取/写入数据。通过这种方式，您可以从SD卡加载数据，一个简单的演示将是将传感器读数存储到SD卡中。

## 在Wio Terminal上初始化SD卡

在代码中包含`Seeed_FS` 库，并使用以下方式初始化SD卡：`SD.begin(SDCARD_SS_PIN, SDCARD_SPI)`，其中SPI用于在Wio Terminal上与SD卡进行通信。

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

File myFile; //Intialise the file Class and named it myFile

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

要在SD卡中写入数据，首先需要打开文件。文件系统有不同的模式，因此在打开文件时需要指定要使用的模式，模式如下所示：

| 文件模式 | 定义名称 |
|-----------|--------------|
| 写入     | FILE_WRITE   |
| 读取      | FILE_READ    |
| 追加    | FILE_APPEND  |

要打开文件，使用 `open` 文件类成员函数，并传入2个参数，如下所示：

```cpp
open(const char *filepath, uint8_t mode = FILE_READ) //default mode is READ
```

In this case, open a txt file name `test.txt` and `FILE_WRITE` is used. To write inside a txt file can use `println` function(File Class):

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

**注:** 一次只能打开一个文件，请在使用完文件后关闭文件。

## 从SD卡读取

要从SD卡中读取文件，同样需要打开文件。这次，使用 `FILE_READ` 模式只读取文件。

使用文件成员函数 `availble()` 检查文件是否可用，并使用 `read()` 打印文件中的内容。

```cpp
myFile = SD.open("test.txt", FILE_READ); //Read Mode
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
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
  Serial.print("Initializing SD card...");
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
    Serial.println("initialization failed!");
    while (1);
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("test.txt", FILE_READ);
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

## 使用QSPI读写Flash

随着FS库的更新，我们在系统中引入了 [**SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) 您现在可以使用QSPI访问Wio Terminal上的Flash。

### 完整示例代码

这个示例演示了 **读取/擦除/写入** 操作:

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
 * SFUD demo for the first flash device test.
 *
 * @param addr flash start address
 * @param size test flash size
 * @param size test flash data buffer
 */
static void sfud_demo(uint32_t addr, size_t size, uint8_t *data) {
    sfud_err result = SFUD_SUCCESS;
    const sfud_flash *flash = sfud_get_device_table() + 0;
    size_t i;
    /* prepare write data */
    for (i = 0; i < size; i++) {
        data[i] = i;
    }
    /* erase test */
    result = sfud_erase(flash, addr, size);
    if (result == SFUD_SUCCESS) {
        SERIAL.println("Erase the flash data finish");
    } else {
        SERIAL.println("Erase flash data failed");
        return;
    }
    /* write test */
    result = sfud_write(flash, addr, size, data);
    if (result == SFUD_SUCCESS) {
        SERIAL.println("Write the flash data finish");
    } else {
        SERIAL.println("Write the flash data failed");
        return;
    }
    /* read test */
    size_t BaseTime = micros();
    result = sfud_read(flash, addr, size, data);
    size_t CostTime = micros() - BaseTime;
    if (result == SFUD_SUCCESS) {
        SERIAL.println("Read the flash data success.");
        SERIAL.println("Offset (h) 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F\r\n");
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
        SERIAL.println("Read the flash data failed.");
    }
    /* data check */
    for (i = 0; i < size; i++) {
        if (data[i] != i % 256) {
            SERIAL.println("Read and check write data has an error.");
   break;
        }
    }
    if (i == size) {
        SERIAL.println("The flash test is success.\r\n");
        SERIAL.print("read costTime: ");
        SERIAL.print(CostTime);
        SERIAL.println(" us");
    }
}
```
