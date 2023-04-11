---
description: Read and Write
title: Read and Write
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-FS-ReadWrite
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Reading/Writing from the SD Card

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg"/></div>

This repo describes how to Read/Write from or to the SD Card. With this, you are able to load data from the SD Card, a simple demonstration will be storing sensor reading to the SD Card.

## Initializing the SD Card on Wio Terminal

Include the`Seeed_FS` libraries as follow. And initializing the SD Card using: `SD.begin(SDCARD_SS_PIN, SDCARD_SPI)`, where SPI is used to communicate in Wio Terminal for SD Card.

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

## Writing to the SD Card

To write in the SD Card, need to first open the file. There are different modes for the file system so need to state what mode to use while opening the file, modes are as follow:

| FILE MODE | Name Defined |
|-----------|--------------|
| WRITE     | FILE_WRITE   |
| READ      | FILE_READ    |
| APPEND    | FILE_APPEND  |

To open the file, the `open` File Class member function is used and takes 2 parameters as follow:

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

**Note:** One file at the time, so close a file when done.

## Reading from the SD Card

To read a file from SD Card, also needs to open the file. This time, using `FILE_READ` mode to only read the file.

Using the File member function `availble()` to check the availablity of the file and `read()` to print out things inside the file .

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

## Complete Code

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

## Reading/Writing the Flash using QSPI

As the FS library has updated and we have introduced [**SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) into the systems. You can now access the the Flash on the Wio Terminal using QSPI.

### Full Example Code

This example demonstrates **Read/Erase/Write**:

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
