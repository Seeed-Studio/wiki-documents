# Reading/Writing from the SD Card

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg"/></div>

This repo describes how to Read/Write from or to the SD Card. With this, you are able to load data from the SD Card, a simple demonstration will be storing sensor reading to the SD Card.

## Initialising the SD Card on ResScreen

Include the`Seeed_FS` libraries as follow. And intialising the SD Card using: `SD.begin(SDCARD_SS_PIN, SDCARD_SPI)`, where SPI is used to communicate in ReScreen for SD Card.

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

In this case, open a txt file name `test.txt` and `FILE_WRITE` is used. To write inside a txt file can use `println` function(File Classs):

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
