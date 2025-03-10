---
description: This tutorial describes how to use the microSD card and file system on the XIAO ESP32S3.
title: Uso de Tarjeta MicroSD en XIAO (Sense)
keywords:
  - xiao esp32s3
  - esp32s3
  - tf
  - sd
  - file
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_sense_filesystem
last_update:
  date: 02/15/2025
  author: Guillermo
---

# Sistema de Archivos y XIAO ESP32S3 Sense

En este tutorial, nos centraremos en el uso del sistema de archivos del XIAO ESP32S3, principalmente en el uso de la ranura para tarjeta microSD de la versión Sense. Al mismo tiempo, presentaremos el sistema de archivos oficial ESP SPIFFS, la memoria Flash integrada del chip, etc.

:::tip
La parte relacionada con la tarjeta microSD de este tutorial **solo** se aplica al **XIAO ESP32S3 Sense**, el resto del contenido es aplicable al chip ESP32-S3, por lo que podrás ejecutar los ejemplos en el XIAO ESP32S3, excepto los que involucren la tarjeta microSD.
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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Empezando

Dado que se utilizará la tarjeta microSD en este tutorial, necesitamos instalar la placa de expansión de Sense y preparar la tarjeta microSD con anticipación.

### Instalación de la placa de expansión (para Sense)

Instalar la placa de expansión es muy sencillo, solo necesitas alinear el conector de la placa de expansión con el conector B2B del XIAO ESP32S3, presionar con fuerza y escuchar un "clic", la instalación estará completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Preparar la tarjeta microSD

El XIAO ESP32S3 Sense es compatible con tarjetas microSD de hasta **32GB**, así que si estás listo para comprar una tarjeta microSD para el XIAO, por favor consulta esta especificación. Además, formatea la tarjeta microSD en formato **FAT32** antes de utilizarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Después de formatear, puedes insertar la tarjeta microSD en la ranura correspondiente. Ten en cuenta la dirección de inserción; el lado con el dedo dorado debe ir hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
Si la tarjeta microSD no es reconocida por el ESP32S3 pero sí por tu computadora **y** el error parece ser el siguiente:

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

Realiza los siguientes pasos:

- Usando el Formateador de Windows:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- Usando [SD Card Formatter](https://www.sdcard.org/downloads/formatter/) (software de terceros)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**Note : **

- Este proceso tomará un tiempo significativamente más largo que el formato rápido.

- Estos casos ocurren si estás reutilizando una tarjeta microSD que ha sido utilizada previamente para otros fines (es decir, cuando se reutiliza una tarjeta microSD que contenía un sistema operativo Linux).
:::

### Diseño del circuito del slot de tarjeta para las placas de expansión

El slot de tarjeta microSD de XIAO ESP32S3 Sense ocupa 4 GPIOs del ESP32-S3, y los detalles de los pines ocupados se muestran en la siguiente tabla.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">microSD Card Slot</th>
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

Esto también significa que si eliges utilizar la función de microSD de la placa de expansión, no podrás usar la función SPI del XIAO ESP32S3 al mismo tiempo. Puedes encender o apagar la función de microSD conectando o cortando los pads de J3.

<table align="center">
	<tr>
	    <th>Si deseas usar los pines SPI / Deshabilita la tarjeta SD de la placa de expansión </th>
	    <th>Si deseas habilitar la tarjeta SD en la placa de expansión / Deshabilitar los pines SPI</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
	</tr>
  <tr>
    <td>Corta a lo largo de la línea delgada blanca para desconectar la conexión del pad de soldadura.</td>
    <td>Solda los dos pads de soldadura juntos..</td>
  </tr>
</table>

:::tip
Por defecto, la función de la microSD está habilitada después de instalar la placa de expansión.
:::

## Modificar los archivos en la tarjeta microSD

:::caution
Esta sección aplica solo para el XIAO ESP32S3 Sense.
:::

Hay varios ejemplos en el IDE de Arduino que muestran cómo manejar archivos en la microSD utilizando el XIAO ESP32S3. En el IDE de Arduino, ve a **Archivo > Ejemplos > SD > SD_Test**, o copia el siguiente código.

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
Ten en cuenta que no puedes usar el programa de ejemplo directamente, necesitarás hacer pequeñas modificaciones al programa para asegurarte de que funcione. La modificación consiste en cambiar el código original de `SD.begin()` a `SD.begin(21)` en la función `Setup()`. Esto especificará el número del pin para la inicialización.
:::

Sube el programa a la XIAO ESP32S3 Sense, abre el monitor serial y podrás ver el proceso de creación de archivos y el proceso de escritura. También puedes usar un adaptador de microSD a USB para acceder a los archivos recién creados y su contenido a través de tu computadora.

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### Descripción del programa

Primero, necesitas incluir las siguientes bibliotecas: **FS.h** para manejar archivos, **SD.h** para la interfaz con la microSD y **SPI.h** para usar el protocolo de comunicación SPI.

1. En el `setup()`, las siguientes líneas inicializan la microSD con `SD.begin(21)`. Aquí, necesitamos pasar un parámetro para `SD.begin()`, que es el pin CS. Y para el diseño de la microSD de la placa de expansión, el pin CS está conectado a **GPIO 21**. Si estás usando la pantalla redonda para XIAO, entonces el parámetro que se pasa debería ser **D2**.

2. Las siguientes líneas imprimen el tipo de la microSD en el Monitor Serial.

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

3. Puedes obtener el tamaño de la microSD utilizando el método `cardSize()`:

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD Card Size: %lluMB\n", cardSize);
```

**El ejemplo proporciona varias funciones para manejar archivos en la microSD.**

4. La función `listDir()` lista los directorios en la tarjeta SD. Esta función acepta como argumentos el sistema de archivos (SD), el nombre del directorio principal y los niveles a los que se desea acceder dentro del directorio.

   Aquí tienes un ejemplo de cómo llamar a esta función. El `/` corresponde al directorio raíz de la microSD.

```c
listDir(SD, "/", 0);
```

5. La función `createDir()` crea un nuevo directorio. Pasa como argumento el sistema de archivos `SD` y el nombre del directorio. Por ejemplo, el siguiente comando crea un nuevo directorio en la raíz llamado `mydir`.

```c
createDir(SD, "/mydir");
```

6. Para eliminar un directorio de la microSD, utiliza la función `removeDir()` y pasa como argumento el sistema de archivos SD y la ruta del nombre del directorio.

```c
removeDir(SD, "/mydir");
```

7. La función `readFile()` lee el contenido de un archivo y muestra el contenido en el Monitor Serial. Al igual que con las funciones anteriores, pasa como argumento el sistema de archivos `SD` y la ruta del archivo. Por ejemplo, la siguiente línea lee el contenido del archivo `hello.txt`.

```c
readFile(SD, "/hello.txt")
```

8. Para escribir contenido en un archivo, puedes utilizar la función `writeFile()`. Pasa como argumento el sistema de archivos `SD`, la ruta del archivo y el mensaje. La siguiente línea escribe `Hello` en el archivo `hello.txt`.

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. De manera similar, puedes agregar contenido a un archivo (sin sobrescribir el contenido anterior) utilizando la función `appendFile()`. La siguiente línea agrega el mensaje `World!\n` al archivo `hello.txt`. El `\n` significa que la próxima vez que escribas algo en el archivo, se escribirá en una nueva línea.

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. Puedes renombrar un archivo utilizando la función `renameFile()`. Pasa como argumentos el sistema de archivos SD, el nombre original del archivo y el nuevo nombre del archivo. La siguiente línea renombra el archivo `hello.txt` a `foo.txt`.

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. Usa la función `deleteFile()` para eliminar un archivo. Pasa como argumento el sistema de archivos SD y la ruta del archivo que deseas eliminar. La siguiente línea elimina el archivo `foo.txt` de la microSD.

```c
deleteFile(SD, "/foo.txt");
```

12. La función `testFileIO()` muestra cuánto tiempo tarda en leer el contenido de un archivo. La siguiente función prueba el archivo `test.txt`.

```c
testFileIO(SD, "/test.txt");
```

## Aplicación de tarjeta microSD basada en registro de datos de gas

:::caution
Esta sección se aplica a XIAO ESP32S3 Sense solamente.
:::

Este proyecto muestra cómo registrar datos con marcas de tiempo en una tarjeta TF utilizando el XIAO ESP32S3 Sense. Como ejemplo, registraremos las lecturas de temperatura del Sensor de Gas Multicanal cada 10 minutos. El XIAO ESP32S3 estará en modo de sueño profundo entre cada lectura y solicitará la fecha y hora utilizando el Protocolo de Tiempo de Red (NTP).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

Para completar este proyecto, deberá preparar el siguiente hardware por adelantado.

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Para el software, necesitas instalar las siguientes bibliotecas en el IDE de Arduino con antelación.

- Biblioteca NTPClient forkeada por Taranais

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- Biblioteca de sensores de gas multicanal

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Aquí está el programa de ejemplo completo. En el programa necesitaremos usar el tiempo de emparejamiento de la red, por lo que debes cambiar el nombre de la red WiFi y la contraseña por los tuyos.

```cpp
#include "FS.h"
#include "SD.h"
#include <SPI.h>

// bibliotecas para sensores de gas multicanal
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>

// Bibliotecas para obtener la hora desde el servidor NTP
#include <NTPClient.h>
#include <WiFiUdp.h>

#include "WiFi.h"

// Definir opciones de sueño profundo
uint64_t uS_TO_S_FACTOR = 1000000;  // Factor de conversión de microsegundos a segundos
// Dormir durante 10 minutos = 600 segundos
uint64_t TIME_TO_SLEEP = 600;

// Reemplaza con tus credenciales de red
const char* ssid     = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

// Definir pin CS para el módulo SD
#define SD_CS 21

// Guardar el número de lectura en la memoria RTC
RTC_DATA_ATTR int readingID = 0;

String dataMessage;

// Variables del sensor de gas
int NO2_val, C2H5CH_val, VOC_val, CO_val;
GAS_GMXXX<TwoWire> gas;

// Definir cliente NTP para obtener la hora
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

// Variables para guardar la fecha y hora
String formattedDate;
String dayStamp;
String timeStamp;

void setup() {
  // Iniciar comunicación serial para propósitos de depuración
  Serial.begin(115200);

  // Conectar a la red Wi-Fi con SSID y contraseña
  Serial.print("Conectando a ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi conectado.");

  // Inicializar un cliente NTP para obtener la hora
  timeClient.begin();
  // Establecer el desfase horario en segundos para ajustar a tu zona horaria, por ejemplo:
  // GMT +1 = 3600
  // GMT +8 = 28800
  // GMT -1 = -3600
  // GMT 0 = 0
  timeClient.setTimeOffset(3600);

  // Inicializar tarjeta SD
  SD.begin(SD_CS);
  if(!SD.begin(SD_CS)) {
    Serial.println("Fallo al montar la tarjeta");
    return;
  }
  uint8_t cardType = SD.cardType();
  if(cardType == CARD_NONE) {
    Serial.println("No se ha adjuntado tarjeta SD");
    return;
  }
  Serial.println("Inicializando tarjeta SD...");
  if (!SD.begin(SD_CS)) {
    Serial.println("ERROR - ¡La inicialización de la tarjeta SD falló!");
    return;    // la inicialización falló
  }

  // Si el archivo data.txt no existe
  // Crear un archivo en la tarjeta SD y escribir las etiquetas de los datos
  File file = SD.open("/data.txt");
  if(!file) {
    Serial.println("El archivo no existe");
    Serial.println("Creando archivo...");
    writeFile(SD, "/data.txt", "ID de lectura, Fecha, Hora, NO2, C2H5CH, VOC, CO \r\n");
  }
  else {
    Serial.println("El archivo ya existe");
  }
  file.close();

  // Iniciar el sensor de gas
  gas.begin(Wire, 0x08); // usar I2C hardware

  getReadings();
  getTimeStamp();
  logSDCard();

  // Incrementar readingID con cada nueva lectura
  readingID++;

  // Iniciar el sueño profundo
  Serial.println("¡HECHO! Ahora entrando en sueño.");

  // Habilitar despertar por temporizador
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  esp_deep_sleep_start();
}

void loop() {
  // El ESP32 estará en sueño profundo
  // nunca llega al loop()
}

// Función para obtener lecturas
void getReadings(){
  // Sensor GM102B NO2 en ppm
  NO2_val = gas.getGM102B();
  // Sensor GM302B C2H5CH en ppm
  C2H5CH_val = gas.getGM302B();
  // Sensor GM502B VOC
  VOC_val = gas.getGM502B();
  // Sensor GM702B CO
  CO_val = gas.getGM702B();

  Serial.print("Valor de NO2 es: ");
  Serial.println(NO2_val);

  Serial.print("Valor de C2H5CH es: ");
  Serial.println(C2H5CH_val);

  Serial.print("Valor de VOC es: ");
  Serial.println(VOC_val);

  Serial.print("Valor de CO es: ");
  Serial.println(CO_val);
}

// Función para obtener la fecha y hora desde el NTPClient
void getTimeStamp() {
  while(!timeClient.update()) {
    timeClient.forceUpdate();
  }
  // La fechaFormateada viene en el siguiente formato:
  // 2018-05-28T16:00:13Z
  // Necesitamos extraer la fecha y la hora
  formattedDate = timeClient.getFormattedDate();
  Serial.println(formattedDate);

  // Extraer la fecha
  int splitT = formattedDate.indexOf("T");
  dayStamp = formattedDate.substring(0, splitT);
  Serial.println(dayStamp);
  // Extraer la hora
  timeStamp = formattedDate.substring(splitT+1, formattedDate.length()-1);
  Serial.println(timeStamp);
}

// Escribir las lecturas de los sensores en la tarjeta SD
void logSDCard() {
  dataMessage = String(readingID) + "," + String(dayStamp) + "," + String(timeStamp) + "," +
                String(NO2_val) + "," + String(C2H5CH_val) + "," + String(VOC_val) + "," +
                String(CO_val) + "\r\n";
  Serial.print("Guardar datos: ");
  Serial.println(dataMessage);
  appendFile(SD, "/data.txt", dataMessage.c_str());
}

// Escribir en la tarjeta SD (NO MODIFICAR ESTA FUNCIÓN)
void writeFile(fs::FS &fs, const char * path, const char * message) {
  Serial.printf("Escribiendo archivo: %s\n", path);

  File file = fs.open(path, FILE_WRITE);
  if(!file) {
    Serial.println("No se pudo abrir el archivo para escribir");
    return;
  }
  if(file.print(message)) {
    Serial.println("Archivo escrito");
  } else {
    Serial.println("Escritura fallida");
  }
  file.close();
}

// Agregar datos a la tarjeta SD (NO MODIFICAR ESTA FUNCIÓN)
void appendFile(fs::FS &fs, const char * path, const char * message) {
  Serial.printf("Agregando al archivo: %s\n", path);

  File file = fs.open(path, FILE_APPEND);
  if(!file) {
    Serial.println("No se pudo abrir el archivo para agregar");
    return;
  }
  if(file.print(message)) {
    Serial.println("Mensaje agregado");
  } else {
    Serial.println("Agregar fallido");
  }
  file.close();
}
```

Compila y carga el programa, y abre el monitor serial. Si el programa se ejecuta correctamente, verás el siguiente mensaje en la salida del monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

Siempre puedes retirar la tarjeta microSD cuando lo desees y acceder a los datos guardados del sensor a través del lector de tarjetas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
Para facilitar las pruebas, el efecto se muestra cada minuto para guardar los datos. El código de muestra real proporcionado guarda los datos una vez cada diez minutos.
:::

:::caution
Hay que tener en cuenta lo siguiente sobre este proyecto:

1. El Sensor de Gas Multicanal necesita un período de calentamiento antes de que los valores obtenidos sean precisos. Por lo tanto, los primeros conjuntos de datos registrados pueden considerarse para ser descartados si el error es grande.
2. El monitor serial solo mostrará la información guardada una vez, ya que este ejemplo utiliza la función de sueño profundo, lo que equivale a un reinicio después de despertarse. Es decir, necesitas volver a abrir el puerto serial de Arduino para ver la siguiente información de depuración. Pero no te preocupes, si no hay problemas con la tarjeta, los datos del sensor se recopilarán puntualmente en el momento que hayas configurado.
   :::

### Anotación del programa

En este ejemplo, el XIAO ESP32S3 está en modo de sueño profundo entre cada lectura. En el modo de sueño profundo, todo tu código debe ir en la función `setup()`, porque el XIAO ESP32S3 nunca llega a la función `loop()`.

Este ejemplo utiliza un factor de conversión de microsegundos a segundos, para que puedas configurar el tiempo de sueño en la variable `TIME_TO_SLEEP` en segundos. En este caso, estamos configurando el XIAO ESP32S3 para que entre en sueño durante 10 minutos (600 segundos). Si deseas que el XIAO ESP32S3 duerma por un período de tiempo diferente, solo necesitas ingresar el número de segundos para el sueño profundo en la variable `TIME_TO_SLEEP`.

```c
// Definir opciones de sueño profundo
uint64_t uS_TO_S_FACTOR = 1000000; // Factor de conversión de microsegundos a segundos
// Dormir durante 10 minutos = 600 segundos
uint64_t TIME_TO_SLEEP = 600;
```

A continuación, define el pin CS de la tarjeta microSD. En este caso, se establece en **GPIO 21**.

```c
#define SD_CS 21
```

Crea una variable llamada `readingID` para almacenar el ID de la lectura. Esta es una forma de organizar tus lecturas. Para guardar el valor de una variable durante el sueño profundo, podemos guardarlo en la memoria RTC. Para guardar datos en la memoria RTC, solo necesitas agregar `RTC_DATA_ATTR` antes de la definición de la variable.

Crea una variable de tipo String para almacenar los datos que se guardarán en la tarjeta microSD.

Las siguientes dos líneas definen un NTPClient para solicitar la fecha y hora desde un servidor NTP.

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

A continuación, inicializa el cliente NTP en la función `Setup()` para obtener la fecha y hora desde el servidor NTP. Puedes usar el método `setTimeOffset(<tiempo>)` para ajustar la hora según tu zona horaria.

Después de haber inicializado todo, podemos obtener las lecturas, la marca de tiempo y registrar todo en la tarjeta microSD.

Para hacer el código más fácil de entender, hemos creado las siguientes funciones:

- `getReadings()`: reads the gas value from the Multichannel Gas Sensor;
- `getTimeStamp()`: gets date and time from the NTP server;
- `logSDcard()`: logs the preceding data to the microSD card.

Finalmente, el ESP32 inicia el sueño profundo.

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

Te recomendamos que utilices estas dos funciones juntas. Asegúrate de que XIAO pueda entrar en el modo de sueño profundo tan pronto como sea posible después de configurar el tiempo de despertar.

## Sistema de Archivos SPI (SPIFFS) para Interfaz Periférica Serial (SPI)

:::caution
Esta sección aplica para el XIAO ESP32C3, XIAO ESP32S3 o XIAO ESP32S3 Sense, pero esta sección no es compatible con Arduino IDE 2.X.
:::

El ESP32 contiene un Sistema de Archivos SPI (SPIFFS) para Interfaz Periférica Serial. SPIFFS es un sistema de archivos liviano creado para microcontroladores con un chip flash, que está conectado mediante el bus SPI, como la memoria flash del ESP32. En este artículo, vamos a mostrar cómo subir archivos fácilmente al sistema de archivos del ESP32 utilizando un complemento para el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFS te permite acceder a la memoria flash como lo harías en un sistema de archivos normal en tu computadora, pero de forma más simple y limitada. Puedes leer, escribir, cerrar y eliminar archivos. En el momento de escribir este artículo, SPIFFS no admite directorios, por lo que todo se guarda en una estructura plana.

Usar SPIFFS con el XIAO ESP32 es especialmente útil para:

- Crear archivos de configuración con ajustes
- Guardar datos de manera permanente
- Crear archivos para guardar pequeñas cantidades de datos en lugar de usar una tarjeta microSD
- Guardar archivos HTML y CSS para construir un servidor web
- Guardar imágenes, figuras e íconos

### Instalando el Cargador de Sistema de Archivos ESP32 para Arduino

Puedes crear, guardar y escribir archivos en el sistema de archivos del ESP32 escribiendo el código tú mismo en el IDE de Arduino. Esto no es muy útil, ya que tendrías que escribir el contenido de tus archivos en el sketch de Arduino.

Afortunadamente, existe un complemento para el IDE de Arduino que te permite cargar archivos directamente al sistema de archivos del ESP32 desde una carpeta en tu computadora. Esto hace que trabajar con archivos sea realmente fácil y sencillo. Vamos a instalarlo.

:::note
Note: at the time of writing this post, the ESP32 Filesystem Uploader plugin **is not supported on Arduino 2.0**.
:::

#### Windows

**Paso 1.** Ve a la [página de lanzamientos](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) y haz clic en el archivo [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) para descargarlo.

**Paso 2.** Encuentra la ubicación de tu Sketchbook. En tu IDE de Arduino, ve a **Archivo > Preferencias** y verifica la ubicación de tu Sketchbook. En mi caso, está en la siguiente ruta: `C:\Users\mengd\Documents\Arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Ve a la ubicación de tu Sketchbook y crea una carpeta llamada **tools**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**Paso 4.** Descomprime la carpeta _.zip_ descargada. Ábrela y copia la carpeta ESP32FS en la carpeta **tools** que creaste en el paso anterior. Deberías tener una estructura de carpetas similar a la siguiente:

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**Paso 5.** Finalmente, reinicia tu IDE de Arduino.

Para verificar si el complemento se instaló correctamente, abre tu IDE de Arduino. Selecciona **XIAO ESP32S3** o **XIAO ESP32C3**, ve a **Herramientas** y verifica que tengas la opción **ESP32 Sketch Data Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**Paso 1.** Ve a la [página de lanzamientos](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) y haz clic en el archivo [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) para descargarlo.

**Paso 2.** Descomprime los archivos.

**Paso 3.** Crea una carpeta llamada **tools** en `/Documents/Arduino/`.

**Paso 4.** Copia la carpeta **ESP32FS** descomprimida en el directorio **tools**. Deberías tener una estructura de carpetas similar a la siguiente:

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**Paso 5.** Finalmente, reinicia tu IDE de Arduino.

Para verificar si el complemento se instaló correctamente, abre tu IDE de Arduino. Selecciona **XIAO ESP32S3** o **XIAO ESP32C3**, ve a **Herramientas** y verifica que tengas la opción **ESP32 Sketch Data Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### Subiendo Archivos usando el Cargador de Sistema de Archivos

Para subir archivos al sistema de archivos del ESP32, sigue las siguientes instrucciones.

**Paso 6.** Crea un sketch de Arduino y guárdalo. Para fines de demostración, puedes guardar un sketch vacío.

**Paso 7.** Luego, abre la carpeta del sketch. Puedes ir a **Sketch > Mostrar Carpeta del Sketch**. Se abrirá la carpeta donde se guarda tu sketch.

**Paso 8.** Dentro de esa carpeta, crea una nueva carpeta llamada **data**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**Paso 9.** Dentro de la carpeta **data** es donde debes poner los archivos que deseas guardar en el sistema de archivos del ESP32. Como ejemplo, crea un archivo _.txt_ con algo de texto llamado **test_example**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**Paso 10.** Luego, para subir los archivos, en el IDE de Arduino, solo necesitas ir a **Herramientas > Cargar Datos de Sketch ESP32**.

:::caution
El cargador sobrescribirá cualquier cosa que ya hayas guardado en el sistema de archivos.
:::

Los archivos se cargaron correctamente en el sistema de archivos del ESP32 cuando veas el mensaje **SPIFFS Image Uploaded**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### Probando el Cargador

Ahora, vamos a verificar si el archivo realmente se guardó en el sistema de archivos del ESP32. Simplemente sube el siguiente código a tu placa ESP32.

```cpp
#include "SPIFFS.h"

void setup() {
  Serial.begin(115200);
  while(!Serial);

  if(!SPIFFS.begin(true)){
    Serial.println("Ocurrió un error al montar SPIFFS");
    return;
  }

  File file = SPIFFS.open("/test_example.txt");
  if(!file){
    Serial.println("Error al abrir el archivo para lectura");
    return;
  }

  Serial.println("Contenido del archivo:");
  while(file.available()){
    Serial.write(file.read());
  }
  file.close();

}

void loop() {

}
```

Después de subir el código, abre el Monitor Serial a una velocidad de baudios de 115200. Debería imprimir el contenido de tu archivo _.txt_ en el Monitor Serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## Almacenamiento de Datos en Flash

:::caution
Esta sección aplica para las placas XIAO ESP32C3, XIAO ESP32S3 o XIAO ESP32S3 Sense.
:::

Cuando usamos placas de desarrollo, muchos de nosotros querremos utilizar la memoria flash del chip para almacenar datos importantes. Esto requiere un método de almacenamiento que asegure que no se pierdan datos incluso en caso de un reinicio inesperado de la placa.

Este tutorial presentará cómo almacenar datos importantes en la memoria flash del XIAO ESP32 utilizando dos métodos de almacenamiento diferentes, como sigue:

1. La primera guía muestra cómo guardar datos de forma permanente en la memoria flash del ESP32 utilizando la librería Preferences.h. Los datos guardados en la memoria flash permanecen incluso después de reinicios o fallos de energía. Usar la librería Preferences.h es útil para guardar datos como credenciales de red, claves API, valores de umbral o incluso el último estado de un GPIO. Aprenderás a guardar y leer datos desde la memoria flash.

2. La segunda guía explica qué es la EEPROM del XIAO ESP32C3 y para qué es útil. También te mostraremos cómo escribir y leer desde la EEPROM y construir un ejemplo de proyecto para poner en práctica los conceptos aprendidos.

Esta sección ha sido escrita para el XIAO ESP32C3 y es totalmente compatible con el nuevo XIAO ESP32S3, por lo que puedes usar las rutinas aquí directamente, y no lo repasaremos nuevamente aquí.

- [XIAO ESP32C3 Datos de forma permanente de diferentes maneras](https://wiki.seeedstudio.com/xiaoesp32c3-flash-storage/)

## Solución de problemas

## Citas y Referencias

Este artículo se basa en el contenido del sistema de archivos de **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre el ESP32 y se verificó en el Seeed Studio XIAO ESP32S3 Sense.

¡Un agradecimiento especial a los autores de **Random Nerd Tutorials** por su arduo trabajo!

A continuación, se presenta el enlace de referencia al artículo original, puedes aprender más sobre el sistema de archivos ESP32 a través de este enlace:

- [ESP32: Guía para el módulo de tarjeta microSD usando Arduino IDE](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [Registro de datos de temperatura en una tarjeta microSD con ESP32](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [Instalar el cargador de sistema de archivos ESP32 en Arduino IDE](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

Para obtener más información sobre el uso de la placa de desarrollo ESP32, por favor visita el sitio web oficial de Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## Soporte técnico y discusión de productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes canales de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
