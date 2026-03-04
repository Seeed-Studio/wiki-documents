---
description: Este tutorial describe cómo usar la tarjeta microSD y el sistema de archivos en el XIAO ESP32S3.
title: Tarjeta MicroSD para la versión Sense
keywords:
  - xiao esp32s3
  - esp32s3
  - tf
  - sd
  - file
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_sense_filesystem
last_update:
  date: 09/15/2024
  author: Priyanshu Roy
---

# Sistema de Archivos y XIAO ESP32S3 Sense

En este tutorial, nos enfocaremos en el uso del sistema de archivos del XIAO ESP32S3, principalmente en el uso de la ranura para tarjeta microSD para la versión Sense. Al mismo tiempo, presentaremos el sistema de archivos oficial ESP SPIFFS, la Flash integrada del chip, etc.

:::tip
La parte de la tarjeta microSD de este tutorial **solo** se aplica al **XIAO ESP32S3 Sense**, el resto del contenido se aplica al chip ESP32-S3, por lo que puedes ejecutar los ejemplos en el XIAO ESP32S3 excepto por la tarjeta microSD.
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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Primeros Pasos

Dado que la tarjeta microSD se utilizará en este tutorial, necesitamos instalar la placa de expansión Sense y preparar la tarjeta microSD con anticipación.

### Instalación de placas de expansión (para Sense)

Instalar la placa de expansión es muy simple, solo necesitas alinear el conector de la placa de expansión con el conector B2B del XIAO ESP32S3, presionarlo fuerte y escuchar un "clic", la instalación está completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Preparar la tarjeta microSD

XIAO ESP32S3 Sense soporta tarjetas microSD de hasta **32GB**, así que si estás listo para comprar una tarjeta microSD para XIAO, por favor consulta esta especificación. Y formatea la tarjeta microSD al formato **FAT32** antes de usar la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Después del formateo, puedes insertar la tarjeta microSD en la ranura para tarjeta microSD. Por favor nota la dirección de inserción, el lado con el contacto dorado debe quedar hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
Si la tarjeta microSD no está siendo reconocida por ESP32S3 pero sí está siendo reconocida por tu computadora **y** el error se ve como:

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

Realiza los siguientes pasos:

- Usando el Formateador de Windows

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- Usando [SD Card Formatter](https://www.sdcard.org/downloads/formatter/) (software de terceros)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**Nota: **

- Este proceso tomará significativamente más tiempo que el Formato Rápido.

- Estos casos surgen si estás reutilizando una tarjeta microSD que ha sido previamente usada para otros propósitos (es decir, cuando una tarjeta microSD que contiene un SO Linux está siendo reutilizada).

:::

### Diseño del circuito de ranura para tarjetas para placas de expansión

La ranura para tarjetas del XIAO ESP32S3 Sense ocupa 4 GPIOs del ESP32-S3, y los detalles de los pines ocupados se muestran en la tabla a continuación.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Ranura para tarjeta microSD</th>
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

Esto también significa que si eliges usar la función de tarjeta microSD de la placa de expansión, no puedes usar también la función SPI del XIAO ESP32S3. Puedes activar/desactivar la función de tarjeta microSD conectando/cortando las almohadillas de J3.

<table align="center">
	<tr>
	    <th>Si quieres usar los Pines SPI / Deshabilitar la tarjeta SD de la placa de expansión</th>
	    <th>Si quieres habilitar la tarjeta SD en la placa de expansión / Deshabilitar los Pines SPI</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
	</tr>
  <tr>
    <td>Corta a lo largo de la línea blanca delgada para desconectar la conexión de la almohadilla de soldadura.</td>
    <td>Solda las dos almohadillas de soldadura juntas.</td>
  </tr>
</table>

:::tip
Por defecto, la función de tarjeta microSD está habilitada después de instalar la placa de expansión.
:::

## Modificar los archivos en la tarjeta microSD

:::caution
Esta sección se aplica solo a XIAO ESP32S3 Sense.
:::

Hay varios ejemplos en Arduino IDE que muestran cómo manejar archivos en la tarjeta microSD usando el XIAO ESP32S3. En el Arduino IDE, ve a **Archivo > Ejemplos > SD > SD_Test**, o copia el siguiente código.

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
Ten en cuenta que no puedes usar el programa de ejemplo directamente, necesitarás hacer modificaciones menores al programa para asegurar que funcione. La modificación es cambiar el código original de `SD.begin()` a `SD.begin(21)` en la función `Setup()`. Especifica el número de pin para la inicialización.
:::

Sube el programa al XIAO ESP32S3 Sense, abre el monitor serie, y verás el proceso de creación de archivos y el proceso de escritura. También puedes usar microSD a USB para acceder a los archivos recién creados y contenidos a través de tu computadora.

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### Anotación del programa

Primero, necesitas incluir las siguientes librerías: **FS.h** para manejar archivos, **SD.h** para interfaz con la tarjeta microSD y **SPI.h** para usar el protocolo de comunicación SPI.

1. En el `setup()`, las siguientes líneas inicializan la tarjeta microSD con `SD.begin(21)`. Aquí, necesitamos pasar un parámetro para `SD.begin()`, que es el pin CS. Y para el diseño de la tarjeta microSD de la placa de expansión, el pin CS está conectado al **GPIO 21**. Si estás usando Round Display para XIAO, entonces el parámetro que se debe pasar debería ser **D2**.

2. Las siguientes líneas imprimen el tipo de tarjeta microSD en el Monitor Serie.

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

4. La función `listDir()` lista los directorios en la tarjeta SD. Esta función acepta como argumentos el sistema de archivos (SD), el nombre del directorio principal y los niveles para entrar en el directorio.

   Aquí hay un ejemplo de cómo llamar a esta función. El `/` corresponde al directorio raíz de la tarjeta microSD.

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

7. La función `readFile()` lee el contenido de un archivo e imprime el contenido en el Monitor Serie. Al igual que con las funciones anteriores, pasa como argumento el sistema de archivos `SD` y la ruta del archivo. Por ejemplo, la siguiente línea lee el contenido del archivo `hello.txt`.

```c
readFile(SD, "/hello.txt")
```

8. Para escribir contenido a un archivo, puedes usar la función `writeFile()`. Pasa como argumento el sistema de archivos `SD`, la ruta del archivo y el mensaje. La siguiente línea escribe `Hello` en el archivo `hello.txt`.

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. De manera similar, puedes agregar contenido a un archivo (sin sobrescribir el contenido previo) usando la función `appendFile()`. La siguiente línea agrega el mensaje `World!\n` en el archivo `hello.txt`. El `\n` significa que la próxima vez que escribas algo en el archivo, se escribirá en una nueva línea.

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. Puedes renombrar un archivo usando la función `renameFile()`. Pasa como argumentos el sistema de archivos SD, el nombre de archivo original y el nuevo nombre de archivo. La siguiente línea renombra el archivo `hello.txt` a `foo.txt`.

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. Usa la función `deleteFile()` para eliminar un archivo. Pasa como argumento el sistema de archivos SD y la ruta del archivo que quieres eliminar. La siguiente línea elimina el archivo `foo.txt` de la tarjeta microSD.

```c
deleteFile(SD, "/foo.txt");
```

12. La función `testFileIO()` muestra cuánto tiempo toma leer el contenido de un archivo. La siguiente función prueba el archivo test.txt.

```c
testFileIO(SD, "/test.txt");
```

## Aplicación de tarjeta MicroSD basada en registro de datos de gas

:::caution
Esta sección se aplica únicamente al XIAO ESP32S3 Sense.
:::

Este proyecto muestra cómo registrar datos con marcas de tiempo en una tarjeta TF usando el XIAO ESP32S3 Sense. Como ejemplo, registraremos lecturas de temperatura del Sensor de Gas Multicanal cada 10 minutos. El XIAO ESP32S3 estará en modo de sueño profundo entre cada lectura, y solicitará la fecha y hora usando el Protocolo de Tiempo de Red (NTP).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

Para completar este proyecto, necesitarás preparar el siguiente hardware con anticipación.

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Base de Expansión para XIAO con Grove OLED</th>
        <th>Grove - Sensor de Gas Multicanal v2</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Para el software, necesitas instalar las siguientes librerías para el Arduino IDE con anticipación.

- Librería NTPClient bifurcada por Taranais

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- Librería del Sensor de Gas Multicanal

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Aquí está el programa de muestra completo. En el programa necesitaremos usar el tiempo de emparejamiento de red, por lo que necesitas cambiar el nombre de WiFi y la contraseña en el programa por los tuyos.

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

Compila y sube el programa, y abre el monitor del puerto serie. Si el programa funciona sin problemas, verás el siguiente mensaje de salida del monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

Siempre puedes retirar la tarjeta microSD cuando te convenga y acceder a los datos del sensor guardados a través del lector de tarjetas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
Para facilitar las pruebas, el efecto se muestra cada minuto para guardar datos, el código de muestra real proporcionado es de diez minutos para guardar datos una vez.
:::

:::caution
Hay las siguientes cosas a tener en cuenta sobre este proyecto:

1. El Sensor de Gas Multicanal necesita un período de calentamiento antes de que los valores obtenidos sean precisos. Por lo tanto, los primeros conjuntos de datos registrados pueden considerarse descartables si el error es grande.
2. El monitor serie solo mostrará la información guardada una vez, porque este ejemplo usa la función de sueño profundo, es equivalente a reiniciar después de despertar, es decir, necesitas reabrir el puerto serie de Arduino para ver la siguiente información de depuración. Pero ten la seguridad de que, si no hay problema con la tarjeta, los datos del sensor se recopilarán a tiempo en el momento que hayas establecido.
   :::

### Anotación del programa

En este ejemplo, el XIAO ESP32S3 está en modo de sueño profundo entre cada lectura. En modo de sueño profundo, todo tu código debe ir en la función `setup()`, porque el XIAO ESP32S3 nunca alcanza el `loop()`.

Este ejemplo usa un factor de conversión de microsegundos a segundos, para que puedas establecer el tiempo de sueño en la variable `TIME_TO_SLEEP` en segundos. En este caso, estamos configurando el XIAO ESP32S3 para que vaya a dormir durante 10 minutos (600 segundos). Si quieres que el XIAO ESP32S3 duerma durante un período de tiempo diferente, solo necesitas ingresar el número de segundos para el sueño profundo en la variable `TIME_TO_SLEEP`.

```c
// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000; // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;
```

A continuación, define el pin CS de la tarjeta microSD. En este caso, está configurado en **GPIO 21**.

```c
#define SD_CS 21
```

Crea una variable llamada `readingID` para almacenar el ID de lectura. Esta es una forma de organizar tus lecturas. Para guardar un valor de variable durante el sueño profundo, podemos guardarlo en la memoria RTC. Para guardar datos en la memoria RTC, solo necesitas añadir `RTC_DATA_ATTR` antes de la definición de la variable.

Crea una variable String para almacenar los datos que se guardarán en la tarjeta microSD.

Las siguientes dos líneas definen un NTPClient para solicitar fecha y hora desde un servidor NTP.

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

A continuación, inicializa el cliente NTP en la función `Setup()` para obtener la fecha y hora del servidor NTP. Puedes usar el método `setTimeOffset(<time>)` para ajustar la hora para tu zona horaria.

Después de tener todo inicializado, podemos obtener las lecturas, la marca de tiempo y registrar todo en la tarjeta microSD.

Para hacer el código más fácil de entender, hemos creado las siguientes funciones:

- `getReadings()`: lee el valor de gas del Sensor de Gas Multicanal;
- `getTimeStamp()`: obtiene fecha y hora del servidor NTP;
- `logSDcard()`: registra los datos anteriores en la tarjeta microSD.

Finalmente, el ESP32 inicia el sueño profundo.

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

Recomendamos que uses estas dos funciones juntas. Asegúrate de que XIAO pueda entrar en modo de sueño profundo lo antes posible después de configurar el tiempo de activación.

## Sistema de Archivos Flash de Interfaz Periférica Serie (SPIFFS)

:::caution
Esta sección se aplica al XIAO ESP32C3, XIAO ESP32S3, o XIAO ESP32S3 Sense, pero esta sección no es compatible con Arduino IDE 2.X.
:::

El ESP32 contiene un Sistema de Archivos Flash de Interfaz Periférica Serie (SPIFFS). SPIFFS es un sistema de archivos ligero creado para microcontroladores con un chip flash, que está conectado por bus SPI, como la memoria flash del ESP32. En este artículo vamos a mostrar cómo subir fácilmente archivos al sistema de archivos del ESP32 usando un plugin para Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFS te permite acceder a la memoria flash como lo harías en un sistema de archivos normal en tu computadora, pero más simple y limitado. Puedes leer, escribir, cerrar y eliminar archivos. Al momento de escribir esta publicación, SPIFFS no soporta directorios, por lo que todo se guarda en una estructura plana.

Usar SPIFFS con el XIAO ESP32 es especialmente útil para:

- Crear archivos de configuración con ajustes
- Guardar datos permanentemente
- Crear archivos para guardar pequeñas cantidades de datos en lugar de usar una tarjeta microSD
- Guardar archivos HTML y CSS para construir un servidor web
- Guardar imágenes, figuras e iconos

### Instalando el Cargador de Sistema de Archivos Arduino ESP32

Puedes crear, guardar y escribir archivos al sistema de archivos del ESP32 escribiendo el código tú mismo en el Arduino IDE. Esto no es muy útil, porque tendrías que escribir el contenido de tus archivos en el sketch de Arduino.

Afortunadamente, hay un plugin para el Arduino IDE que te permite subir archivos directamente al sistema de archivos del ESP32 desde una carpeta en tu computadora. Esto hace que sea realmente fácil y simple trabajar con archivos. Vamos a instalarlo.

:::note
Nota: al momento de escribir esta publicación, el plugin ESP32 Filesystem Uploader **no es compatible con Arduino 2.0**.
:::

#### Windows

**Paso 1.** Ve a la [página de lanzamientos](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) y haz clic en el archivo [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) para descargar.

**Paso 2.** Encuentra la ubicación de tu Sketchbook. En tu Arduino IDE, ve a **File > Preferences** y verifica la ubicación de tu Sketchbook. En mi caso, está en la siguiente ruta: `C:\Users\mengd\Documents\Arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Ve a la ubicación del sketchbook, y crea una carpeta **tools**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**Paso 4.** Descomprime la carpeta _.zip_ descargada. Ábrela y copia la carpeta ESP32FS a la carpeta tools que creaste en el paso anterior. Deberías tener una estructura de carpetas similar:

`<Ubicación-del-Sketchbook>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**Paso 5.** Finalmente, reinicia tu Arduino IDE.

Para verificar si el plugin se instaló exitosamente, abre tu Arduino IDE. Selecciona **XIAO ESP32S3** o **XIAO ESP32C3**, ve a **Tools** y verifica que tengas la opción **ESP32 Sketch Data Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**Paso 1.** Ve a la [página de lanzamientos](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) y haz clic en el archivo [ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) para descargar.

**Paso 2.** Desempaqueta los archivos.

**Paso 3.** Crea una carpeta llamada **tools** en `/Documents/Arduino/`.

**Paso 4.** Copia la carpeta **ESP32FS** desempaquetada al directorio **tools**. Deberías tener una estructura de carpetas similar.

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**Paso 5.** Finalmente, reinicia tu Arduino IDE.

Para verificar si el plugin se instaló exitosamente, abre tu Arduino IDE. Selecciona **XIAO ESP32S3** o **XIAO ESP32C3**, ve a **Tools** y verifica que tengas la opción **ESP32 Sketch Data Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### Subiendo Archivos usando el Cargador de Sistema de Archivos

Para subir archivos al sistema de archivos del ESP32 sigue las siguientes instrucciones.

**Paso 6.** Crea un sketch de Arduino y guárdalo. Para propósitos de demostración, puedes guardar un sketch vacío.

**Paso 7.** Luego, abre la carpeta del sketch. Puedes ir a **Sketch > Show Sketch Folder**. La carpeta donde tu sketch está guardado debería abrirse.

**Paso 8.** Dentro de esa carpeta, crea una nueva carpeta llamada **data**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**Paso 9.** Dentro de la carpeta data es donde deberías poner los archivos que quieres guardar en el sistema de archivos del ESP32. Como ejemplo, crea un archivo _.txt_ con algo de texto llamado **test_example**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**Paso 10.** Luego, para subir los archivos, en el Arduino IDE, solo necesitas ir a **Tools > ESP32 Sketch Data Upload**.

:::caution
El cargador sobrescribirá cualquier cosa que ya hayas guardado en el sistema de archivos.
:::

Los archivos se subieron exitosamente al sistema de archivos del ESP32 cuando veas el mensaje **SPIFFS Image Uploaded**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### Probando el Cargador

Ahora, vamos a verificar si el archivo realmente se guardó en el sistema de archivos del ESP32. Simplemente sube el siguiente código a tu placa ESP32.

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

Después de cargar, abre el Monitor Serie a una velocidad de baudios de 115200. Debería imprimir el contenido de tu archivo _.txt_ en el Monitor Serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## Almacenamiento de Datos Flash

:::caution
Esta sección se aplica al XIAO ESP32C3, XIAO ESP32S3, o XIAO ESP32S3 Sense.
:::

Cuando usamos placas de desarrollo, muchos de nosotros querremos poder usar la memoria flash en el chip para almacenar algunos datos importantes. Esto requiere un método de almacenamiento que garantice que no se pierdan datos incluso en caso de una placa de desarrollo anormal.

Este tutorial introducirá cómo almacenar datos importantes en la memoria flash del XIAO ESP32 desde dos métodos de almacenamiento diferentes como sigue:

1. La primera guía muestra cómo guardar datos permanentemente en la memoria flash del ESP32 usando la biblioteca Preferences.h. Los datos mantenidos en la memoria flash persisten a través de reinicios o fallos de energía. Usar la biblioteca Preferences.h es útil para guardar datos como credenciales de red, claves API, valores umbral, o incluso el último estado de un GPIO. Aprenderás cómo guardar y leer datos desde la memoria flash.

2. La segunda guía explica qué es la EEPROM del XIAO ESP32C3 y para qué es útil. También vamos a mostrarte cómo escribir y leer desde la EEPROM y construir un ejemplo de proyecto para poner en práctica los conceptos aprendidos.

Esta sección ha sido escrita para el XIAO ESP32C3 y es completamente compatible con el nuevo XIAO ESP32S3, por lo que puedes usar las rutinas aquí directamente, así que no lo repasaremos de nuevo aquí.

- [XIAO ESP32C3 Datos Permanentemente de diferentes maneras](https://wiki.seeedstudio.com/es/xiaoesp32c3-flash-storage/)

## Solución de Problemas

## Citas y Referencias

Este artículo se basa en el contenido del sistema de archivos de **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre ESP32 y lo usa verificado en el Seeed Studio XIAO ESP32S3 Sense.

¡Agradecimientos especiales a los autores de **Random Nerd Tutorials** por su arduo trabajo!

Lo siguiente es el enlace de referencia al artículo original, eres bienvenido a aprender más sobre el sistema de archivos ESP32 a través del siguiente enlace al artículo original.

- [ESP32: Guía para Módulo de Tarjeta MicroSD usando Arduino IDE](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [ESP32 Registro de Datos de Temperatura a Tarjeta MicroSD](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [Instalar Cargador de Sistema de Archivos ESP32 en Arduino IDE](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

Para más información sobre el uso de la placa de desarrollo ESP32, por favor lee el sitio web oficial de Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## Soporte Técnico y Discusión de Productos

.

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
