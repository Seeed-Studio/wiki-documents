---
description: Leer y Escribir
title: Leer y Escribir
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-FS-ReadWrite
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Lectura/Escritura desde la Tarjeta SD

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg"/></div>

Este repositorio describe cómo leer/escribir desde o hacia la tarjeta SD. Con esto, puedes cargar datos desde la tarjeta SD, una demostración simple será almacenar lecturas de sensores en la tarjeta SD.

## Inicializando la Tarjeta SD en Wio Terminal

Incluye las librerías `Seeed_FS` como se muestra a continuación. E inicializa la tarjeta SD usando: `SD.begin(SDCARD_SS_PIN, SDCARD_SPI)`, donde SPI se usa para comunicarse en Wio Terminal para la tarjeta SD.

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

## Escribir en la Tarjeta SD

Para escribir en la Tarjeta SD, primero necesitas abrir el archivo. Hay diferentes modos para el sistema de archivos, por lo que necesitas especificar qué modo usar al abrir el archivo, los modos son los siguientes:

| MODO DE ARCHIVO | Nombre Definido |
|-----------------|-----------------|
| WRITE           | FILE_WRITE      |
| READ            | FILE_READ       |
| APPEND          | FILE_APPEND     |

Para abrir el archivo, se usa la función miembro de la Clase File `open` y toma 2 parámetros como sigue:

```cpp
open(const char *filepath, uint8_t mode = FILE_READ) //default mode is READ
```

En este caso, abre un archivo txt llamado `test.txt` y se usa `FILE_WRITE`. Para escribir dentro de un archivo txt se puede usar la función `println` (Clase File):

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

**Nota:** Un archivo a la vez, así que cierre un archivo cuando termine.

## Lectura desde la Tarjeta SD

Para leer un archivo desde la Tarjeta SD, también es necesario abrir el archivo. Esta vez, usando el modo `FILE_READ` para solo leer el archivo.

Usando la función miembro de File `availble()` para verificar la disponibilidad del archivo y `read()` para imprimir las cosas dentro del archivo.

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

## Código Completo

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

## Lectura/Escritura de la Flash usando QSPI

Como la biblioteca FS se ha actualizado y hemos introducido [**SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) en los sistemas. Ahora puedes acceder a la Flash en el Wio Terminal usando QSPI.

### Código de Ejemplo Completo

Este ejemplo demuestra **Lectura/Borrado/Escritura**:

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
