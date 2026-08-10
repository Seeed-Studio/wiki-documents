---
description: Este tutorial describe cómo usar la tarjeta microSD y el sistema de archivos en la XIAO ESP32S3.
title: Tarjeta microSD para la versión Sense
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
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem/
---

# Sistema de archivos y XIAO ESP32S3 Sense

En este tutorial, nos centraremos en el uso del sistema de archivos de la XIAO ESP32S3, principalmente en el uso de la ranura para tarjeta microSD para la versión Sense. Al mismo tiempo, presentaremos el sistema de archivos oficial de ESP, SPIFFS, la Flash integrada del chip, etc.

:::tip
La parte de la tarjeta microSD de este tutorial **solo** se aplica a la **XIAO ESP32S3 Sense**, el resto del contenido se aplica al chip ESP32-S3, por lo que puedes ejecutar los ejemplos en la XIAO ESP32S3 excepto para la tarjeta microSD.
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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introducción

Dado que se utilizará la tarjeta microSD en este tutorial, necesitamos instalar la placa de expansión Sense y preparar la tarjeta microSD con antelación.

### Instalación de la placa de expansión (para Sense)

Instalar la placa de expansión es muy sencillo, solo necesitas alinear el conector de la placa de expansión con el conector B2B de la XIAO ESP32S3, presionarlo con fuerza y escuchar un "clic"; la instalación habrá finalizado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Preparar la tarjeta microSD

XIAO ESP32S3 Sense admite tarjetas microSD de hasta **32GB**, así que si estás listo para comprar una tarjeta microSD para XIAO, consulta esta especificación. Además, formatea la tarjeta microSD al formato **FAT32** antes de usarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Después de formatearla, puedes insertar la tarjeta microSD en la ranura correspondiente. Ten en cuenta la dirección de inserción: el lado con los contactos dorados debe mirar hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
Si la tarjeta microSD no está siendo reconocida por la ESP32S3 pero sí por tu ordenador **y** el error se ve así :

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

Realiza los siguientes pasos :

- Usar el formateador de Windows

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- Usar [SD Card Formatter](https://www.sdcard.org/downloads/formatter/) (software de terceros)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**Nota :**

- Este proceso llevará significativamente más tiempo que el Formato rápido.

- Estos casos surgen si estás reutilizando una tarjeta microSD que se ha utilizado previamente para otros fines (es decir, cuando se reutiliza una tarjeta microSD que contenía un sistema operativo Linux).

:::

### Diseño del circuito de la ranura de la tarjeta para las placas de expansión

La ranura para tarjeta de la XIAO ESP32S3 Sense ocupa 4 GPIO del ESP32-S3, y los detalles de los pines ocupados se muestran en la tabla siguiente.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Ranura para tarjeta microSD</th>
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

Esto también significa que si eliges usar la función de tarjeta microSD de la placa de expansión, no puedes usar también la función SPI de la XIAO ESP32S3. Puedes activar/desactivar la función de la tarjeta microSD conectando/cortando las almohadillas de J3.

<table align="center">
 <tr>
     <th>Si quieres usar los pines SPI / Desactivar la tarjeta SD de la placa de expansión</th>
     <th>Si quieres activar la tarjeta SD en la placa de expansión / Desactivar los pines SPI</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>Corta a lo largo de la fina línea blanca para desconectar la conexión de la almohadilla de soldadura.</td>
    <td>Suelda juntas las dos almohadillas de soldadura.</td>
  </tr>
</table>

:::tip
De forma predeterminada, la función de la tarjeta microSD está habilitada después de instalar la placa de expansión.
:::

## Modificar los archivos en la tarjeta microSD

:::caution
Esta sección se aplica solo a la XIAO ESP32S3 Sense.
:::

Hay varios ejemplos en Arduino IDE que muestran cómo manejar archivos en la tarjeta microSD usando la XIAO ESP32S3. En el Arduino IDE, ve a **File > Examples > SD > SD_Test**, o copia el siguiente código.

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
Ten en cuenta que no puedes usar el programa de ejemplo directamente, tendrás que hacer pequeñas modificaciones en el programa para asegurarte de que funcione. La modificación consiste en cambiar el código original de `SD.begin()` a `SD.begin(21)` en la función `Setup()`. Especifica el número de pin para la inicialización.
:::

Sube el programa a XIAO ESP32S3 Sense, abre el monitor serie y verás el proceso de creación del archivo y el proceso de escritura. También puedes usar un adaptador de microSD a USB para acceder a los archivos y contenidos recién creados desde tu ordenador.

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### Anotación del programa

Primero, necesitas incluir las siguientes bibliotecas: **FS.h** para manejar archivos, **SD.h** para la interfaz con la tarjeta microSD y **SPI.h** para usar el protocolo de comunicación SPI.

1. En el `setup()`, las siguientes líneas inicializan la tarjeta microSD con `SD.begin(21)`. Aquí, necesitamos pasar un parámetro para `SD.begin()`, que es el pin CS. Y para el diseño de la tarjeta microSD de la placa de expansión, el pin CS está conectado al **GPIO 21**. Si estás usando Round Display for XIAO, entonces el parámetro que se debe pasar debe ser **D2**.

2. Las siguientes líneas imprimen el tipo de tarjeta microSD en el monitor serie.

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

3. Puedes obtener el tamaño de la tarjeta microSD llamando al método `cardSize()`:

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD Card Size: %lluMB\n", cardSize);
```

**El ejemplo proporciona varias funciones para manejar archivos en la tarjeta microSD.**

4. La función `listDir()` lista los directorios en la tarjeta SD. Esta función acepta como argumentos el sistema de archivos (SD), el nombre del directorio principal y los niveles a los que se va a entrar en el directorio.

   Aquí tienes un ejemplo de cómo llamar a esta función. El `/` corresponde al directorio raíz de la tarjeta microSD.

```c
listDir(SD, "/", 0);
```

5. La función `createDir()` crea un nuevo directorio. Pasa como argumento el sistema de archivos `SD` y la ruta del nombre del directorio. Por ejemplo, el siguiente comando crea un nuevo directorio en la raíz llamado `mydir`.

```c
createDir(SD, "/mydir");
```

6. Para eliminar un directorio de la tarjeta microSD, usa la función `removeDir()` y pasa como argumento el sistema de archivos SD y la ruta del nombre del directorio.

```c
removeDir(SD, "/mydir");
```

7. La función `readFile()` lee el contenido de un archivo e imprime el contenido en el monitor serie. Como con las funciones anteriores, pasa como argumento el sistema de archivos `SD` y la ruta del archivo. Por ejemplo, la siguiente línea lee el contenido del archivo `hello.txt`.

```c
readFile(SD, "/hello.txt")
```

8. Para escribir contenido en un archivo, puedes usar la función `writeFile()`. Pasa como argumento el sistema de archivos `SD`, la ruta del archivo y el mensaje. La siguiente línea escribe `Hello` en el archivo `hello.txt`.

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. Del mismo modo, puedes añadir contenido a un archivo (sin sobrescribir el contenido anterior) usando la función `appendFile()`. La siguiente línea añade el mensaje `World!\n` en el archivo `hello.txt`. El `\n` significa que la próxima vez que escribas algo en el archivo, se escribirá en una nueva línea.

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. Puedes cambiar el nombre de un archivo usando la función `renameFile()`. Pasa como argumentos el sistema de archivos SD, el nombre de archivo original y el nuevo nombre de archivo. La siguiente línea cambia el nombre del archivo `hello.txt` a `foo.txt`.

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. Usa la función `deleteFile()` para borrar un archivo. Pasa como argumento el sistema de archivos SD y la ruta del archivo que quieres borrar. La siguiente línea borra el archivo `foo.txt` de la tarjeta microSD.

```c
deleteFile(SD, "/foo.txt");
```

12. La función `testFileIO()` muestra cuánto tiempo se tarda en leer el contenido de un archivo. La siguiente función prueba el archivo test.txt.

```c
testFileIO(SD, "/test.txt");
```

## Aplicación de tarjeta microSD basada en registro de datos de gas

:::caution
Esta sección se aplica solo a XIAO ESP32S3 Sense.
:::

Este proyecto muestra cómo registrar datos con marcas de tiempo en una tarjeta TF usando el XIAO ESP32S3 Sense. Como ejemplo, registraremos lecturas de temperatura del Grove - Multichannel Gas Sensor v2 cada 10 minutos. El XIAO ESP32S3 estará en modo de sueño profundo entre cada lectura y solicitará la fecha y la hora usando el Protocolo de Tiempo de Red (NTP).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

Para completar este proyecto, tendrás que preparar de antemano el siguiente hardware.

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Para el software, necesitas instalar de antemano las siguientes bibliotecas para el IDE de Arduino.

- Biblioteca NTPClient bifurcada por Taranais

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- Biblioteca Multichannel Gas Sensor

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Aquí está el programa de ejemplo completo. En el programa necesitaremos usar la hora obtenida por red, así que debes cambiar el nombre y la contraseña de tu WiFi en el programa por los tuyos.

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

Compila y sube el programa, y abre el monitor del puerto serie. Si el programa se ejecuta sin problemas, verás el siguiente mensaje de salida en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

Siempre puedes retirar la tarjeta microSD cuando te resulte conveniente y acceder a los datos del sensor guardados mediante el lector de tarjetas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
Para facilitar las pruebas, el efecto se muestra cada minuto para guardar datos; el código de ejemplo real proporcionado guarda los datos una vez cada diez minutos.
:::

:::caution
Hay que tener en cuenta lo siguiente sobre este proyecto:

1. El Multichannel Gas Sensor necesita un período de calentamiento antes de que los valores obtenidos sean precisos. Por lo tanto, los primeros conjuntos de datos registrados pueden considerarse descartables si el error es grande.
2. El monitor serie solo mostrará la información guardada una vez, porque este ejemplo utiliza la función de sueño profundo; es equivalente a un reinicio después de despertarse, es decir, necesitas volver a abrir el puerto serie de Arduino para ver la siguiente información de depuración. Pero ten la seguridad de que, si no hay ningún problema con la tarjeta, los datos del sensor se recopilarán puntualmente en el momento que hayas configurado.

   :::

### Anotación del programa

En este ejemplo, el XIAO ESP32S3 está en modo de sueño profundo entre cada lectura. En el modo de sueño profundo, todo tu código debe ir en la función `setup()`, porque el XIAO ESP32S3 nunca llega a `loop()`.

Este ejemplo utiliza un factor de conversión de microsegundos a segundos, de modo que puedas configurar el tiempo de sueño en la variable `TIME_TO_SLEEP` en segundos. En este caso, configuramos el XIAO ESP32S3 para que entre en sueño durante 10 minutos (600 segundos). Si quieres que el XIAO ESP32S3 duerma durante un período de tiempo diferente, solo necesitas introducir el número de segundos para el sueño profundo en la variable `TIME_TO_SLEEP`.

```c
// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000; // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;
```

A continuación, define el pin CS de la tarjeta microSD. En este caso, se establece en **GPIO 21**.

```c
#define SD_CS 21
```

Crea una variable llamada `readingID` para almacenar el ID de lectura. Esta es una forma de mantener tus lecturas organizadas. Para guardar el valor de una variable durante el sueño profundo, podemos guardarlo en la memoria RTC. Para guardar datos en la memoria RTC, solo necesitas añadir `RTC_DATA_ATTR` antes de la definición de la variable.

Crea una variable de tipo String para almacenar los datos que se guardarán en la tarjeta microSD.

Las dos líneas siguientes definen un NTPClient para solicitar fecha y hora a un servidor NTP.

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

A continuación, inicializa el cliente NTP en la función `Setup()` para obtener la fecha y la hora del servidor NTP. Puedes usar el método `setTimeOffset(<time>)` para ajustar la hora a tu zona horaria.

Después de tener todo inicializado, podemos obtener las lecturas, la marca de tiempo y registrar todo en la tarjeta microSD.

Para que el código sea más fácil de entender, hemos creado las siguientes funciones:

- `getReadings()`: lee el valor de gas del Multichannel Gas Sensor;
- `getTimeStamp()`: obtiene la fecha y la hora del servidor NTP;
- `logSDcard()`: registra los datos anteriores en la tarjeta microSD.

Finalmente, el ESP32 inicia el sueño profundo.

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

Recomendamos que utilices estas dos funciones juntas. Asegúrate de que XIAO pueda entrar en modo de sueño profundo lo antes posible después de configurar el tiempo de activación.

## Sistema de archivos Flash de Interfaz Periférica Serie (SPIFFS)

:::caution
Esta sección se aplica a XIAO ESP32C3, XIAO ESP32S3 o XIAO ESP32S3 Sense, pero esta sección no es compatible con Arduino IDE 2.X.
:::

El ESP32 contiene un Sistema de archivos Flash de Interfaz Periférica Serie (SPIFFS). SPIFFS es un sistema de archivos ligero creado para microcontroladores con un chip flash, que está conectado mediante un bus SPI, como la memoria flash del ESP32. En este artículo vamos a mostrar cómo subir fácilmente archivos al sistema de archivos del ESP32 usando un plugin para Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFS te permite acceder a la memoria flash como lo harías en un sistema de archivos normal en tu ordenador, pero más simple y limitado. Puedes leer, escribir, cerrar y borrar archivos. En el momento de escribir esta publicación, SPIFFS no admite directorios, por lo que todo se guarda en una estructura plana.

Usar SPIFFS con el XIAO ESP32 es especialmente útil para:

- Crear archivos de configuración con ajustes
- Guardar datos de forma permanente
- Crear archivos para guardar pequeñas cantidades de datos en lugar de usar una tarjeta microSD
- Guardar archivos HTML y CSS para crear un servidor web
- Guardar imágenes, figuras e iconos

### Instalación del cargador del sistema de archivos de Arduino ESP32

Puedes crear, guardar y escribir archivos en el sistema de archivos del ESP32 escribiendo tú mismo el código en el Arduino IDE. Esto no es muy útil, porque tendrías que escribir el contenido de tus archivos en el sketch de Arduino.

Afortunadamente, hay un plugin para Arduino IDE que te permite subir archivos directamente al sistema de archivos del ESP32 desde una carpeta de tu ordenador. Esto hace que trabajar con archivos sea realmente fácil y sencillo. Vamos a instalarlo.

:::note
Nota: en el momento de escribir esta publicación, el plugin ESP32 Filesystem Uploader **no es compatible con Arduino 2.0**.
:::

#### Windows

**Paso 1.** Ve a la [página de lanzamientos](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) y haz clic en el archivo [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) para descargarlo.

**Paso 2.** Busca la ubicación de tu Sketchbook. En tu Arduino IDE, ve a **File > Preferences** y comprueba la ubicación de tu Sketchbook. En mi caso, está en la siguiente ruta: `C:\Users\mengd\Documents\Arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Ve a la ubicación del sketchbook y crea una carpeta **tools**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**Paso 4.** Descomprime la carpeta _.zip_ descargada. Ábrela y copia la carpeta ESP32FS en la carpeta tools que creaste en el paso anterior. Deberías tener una estructura de carpetas similar:

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**Paso 5.** Finalmente, reinicia tu Arduino IDE.

Para comprobar si el plugin se instaló correctamente, abre tu Arduino IDE. Selecciona **XIAO ESP32S3** o **XIAO ESP32C3**, ve a **Tools** y comprueba que tienes la opción **ESP32 Sketch Data Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**Paso 1.** Ve a la [página de lanzamientos](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) y haz clic en el archivo [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) para descargarlo.

**Paso 2.** Descomprime los archivos.

**Paso 3.** Crea una carpeta llamada **tools** en `/Documents/Arduino/`.

**Paso 4.** Copia la carpeta **ESP32FS** descomprimida en el directorio **tools**. Deberías tener una estructura de carpetas similar.

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**Paso 5.** Finalmente, reinicia tu Arduino IDE.

Para comprobar si el plugin se instaló correctamente, abre tu Arduino IDE. Selecciona **XIAO ESP32S3** o **XIAO ESP32C3**, ve a **Tools** y comprueba que tienes la opción **ESP32 Sketch Data Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### Subir archivos usando el Filesystem Uploader

Para subir archivos al sistema de archivos del ESP32, sigue las siguientes instrucciones.

**Paso 6.** Crea un sketch de Arduino y guárdalo. Para fines de demostración, puedes guardar un sketch vacío.

**Paso 7.** Luego, abre la carpeta del sketch. Puedes ir a **Sketch > Show Sketch Folder**. Se abrirá la carpeta donde está guardado tu sketch.

**Paso 8.** Dentro de esa carpeta, crea una nueva carpeta llamada **data**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**Paso 9.** Dentro de la carpeta data es donde debes colocar los archivos que quieres guardar en el sistema de archivos del ESP32. Como ejemplo, crea un archivo _.txt_ con algo de texto llamado **test_example**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**Paso 10.** Luego, para subir los archivos, en el Arduino IDE, solo necesitas ir a **Tools > ESP32 Sketch Data Upload**.

:::caution
El cargador sobrescribirá cualquier cosa que ya tuvieras guardada en el sistema de archivos.
:::

Los archivos se subieron correctamente al sistema de archivos del ESP32 cuando veas el mensaje **SPIFFS Image Uploaded**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### Probando el Uploader

Ahora, vamos a comprobar si el archivo se guardó realmente en el sistema de archivos del ESP32. Simplemente sube el siguiente código a tu placa ESP32.

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

Después de cargar, abre el Monitor Serie a una velocidad en baudios de 115200. Debería imprimir el contenido de tu archivo _.txt_ en el Monitor Serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## Almacenamiento de datos en la flash

:::caution
Esta sección se aplica a la XIAO ESP32C3, XIAO ESP32S3 o XIAO ESP32S3 Sense.
:::

Cuando usamos placas de desarrollo, muchos de nosotros queremos poder utilizar la memoria flash del chip para almacenar algunos datos importantes. Esto requiere un método de almacenamiento que garantice que no se pierdan datos incluso en caso de un funcionamiento anormal de la placa de desarrollo.

Este tutorial presentará cómo almacenar datos importantes en la memoria flash de la XIAO ESP32 mediante dos métodos de almacenamiento diferentes, como se indica a continuación:

1. La primera guía muestra cómo guardar datos de forma permanente en la memoria flash del ESP32 utilizando la biblioteca Preferences.h. Los datos almacenados en la memoria flash persisten a través de reinicios o fallos de alimentación. Usar la biblioteca Preferences.h es útil para guardar datos como credenciales de red, claves API, valores umbral o incluso el último estado de un GPIO. Aprenderás cómo guardar y leer datos de la memoria flash.

2. La segunda guía explica qué es la EEPROM de la XIAO ESP32C3 y para qué es útil. También te mostraremos cómo escribir y leer desde la EEPROM y construiremos un ejemplo de proyecto para poner en práctica los conceptos aprendidos.

Esta sección ha sido escrita para la XIAO ESP32C3 y es totalmente compatible con la nueva XIAO ESP32S3, por lo que puedes utilizar directamente las rutinas aquí, así que no la repetiremos de nuevo aquí.

- [XIAO ESP32C3 Data Permanently in different ways](https://wiki.seeedstudio.com/es/xiaoesp32c3-flash-storage/)

## Solución de problemas

## Citas y referencias

Este artículo se basa en el contenido del sistema de archivos de **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre ESP32 y lo utiliza verificado en la Seeed Studio XIAO ESP32S3 Sense.

¡Un agradecimiento especial a los autores de **Random Nerd Tutorials** por su arduo trabajo!

A continuación se muestra el enlace de referencia al artículo original; eres bienvenido a aprender más sobre el sistema de archivos del ESP32 a través del siguiente enlace al artículo original.

- [ESP32: Guide for MicroSD Card Module using Arduino IDE](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [ESP32 Data Logging Temperature to MicroSD Card](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [Install ESP32 Filesystem Uploader in Arduino IDE](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

Para obtener más información sobre el uso de la placa de desarrollo ESP32, consulta el sitio web oficial de Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
