---
description: Comenzando con grove mp3 v4.
title: Grove - MP3 v4.0
keywords:
- mp3
- grove
image: https://files.seeedstudio.com/wiki/grove-mp3-v4/0.webp
slug: /es/grove_mp3_v4
last_update:
  date: 12/13/2024
  author: Carla
---

# Grove - MP3 v4.0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg" style={{width:600, height:'auto'}}/></div>

## Introducción

¡Este módulo MP3 con un Arduino puede convertirse en tu reproductor de música multiformato! Es un módulo de música basado en el chip de audio de alta calidad WT2605CX, que tiene mejor rendimiento que el MP3 V3 y soporta interfaz Grove, interfaz JST para altavoz, conector de audio de 3.5mm y tarjeta SD, compatible con SPI-Flash, tarjeta TF y disco flash USB.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Soporte para Múltiples Formatos de Música: Soporta formato de audio de alta calidad de voz, (8kbps~320kbps) con un sonido hermoso, formato MP3, WAV;
- Soporte para Múltiples Formatos de Almacenamiento: Soporta SPI-Flash, tarjeta TF, disco flash USB y soporta sistema de archivos FAT, FAT32;
- Modo de Control: Rica interfaz de comunicación AT para satisfacer tus requerimientos;
- Operación Rica: soporta comandos de reproducción aleatoria, función de reproducción en bucle sin interrupciones, y más;
- Modo de Salida de Audio: salida DAC por defecto para muestras.

## Especificaciones

| Especificación                           | Detalles                                    |
| ---------------------------------------- | ------------------------------------------- |
| Entrada                                  | 5V(DC)                                     |
| Corriente de operación (sin estado de salida de señal) | menos de 15 mA                            |
| Corriente de operación (con estado de salida de señal)    | menos de 40 mA                            |
| Chip                                   | WT2605CX                                     |
| Voltaje de salida LDO del chip                | 3.3 V                                      |
| Corriente de salida del chip                   | 100 mA(máx.)                            |
| Formatos de archivo soportados                 | MP3, WAV, WMA                               |
| Memoria máxima soportada para tarjeta SD    | 32 GB                                      |
| Tasa de muestreo                           | 8/11.025/12/16/22.05/24/32/44.1/48 (KHz)   |

## Descripción General del Hardware

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_716539_x5zKByNTcw7Jc8sR_1706149458?w=2608&h=1322&type=image/png" style={{width:750, height:'auto'}}/></div>

## Primeros Pasos

Si estás usando el módulo Grove MP3 por primera vez, entonces primero necesitarás tener una tarjeta TF con canciones ya almacenadas en ella, y un dispositivo de salida, ya sea unos auriculares con cable de audio de 3.5mm o un altavoz. Los altavoces están incluidos en el kit por defecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/1.jpg" style={{width:600, height:'auto'}}/></div>

### Preparación del Software

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y añádelo al Arduino IDE.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la adición.

- Si quieres usar **Seeeduino V4.3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino_v4.2/)** para completar la adición.

- Si quieres usar **Arduino UNO R4 WiFi** para las rutinas posteriores, por favor haz clic en **Tools-> Board-> Boards Manager...**, escribe la palabra clave "UNO R4 WiFi" en el campo de búsqueda e instala la versión más reciente (o la versión que quieras usar).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>

### Descripción General de la Librería Arduino

#### 1. Librería Seeed Serial MP3 Player

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

##### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `void WT2605C<T>::init(T& serialPort)` —— Esta función es responsable de configurar el puerto serie usado por el módulo MP3.
  - **Parámetros de Entrada**:

    - **serialPort**: El puerto serie.

- `uint8_t WT2605C<T>::playSPIFlashSong(uint16_t index)` —— Especifica el índice del directorio raíz de Flash para reproducir. Los archivos se indexan en el orden en que fueron copiados a Flash.
  - **Parámetros de Entrada**:

    - **index**: Reproduce el índice de la canción.

- `uint8_t WT2605C<T>::playSDRootSong(uint32_t index)` —— Especifica el índice del directorio raíz de la tarjeta TF para reproducción. Este comando indexa los archivos en la tarjeta TF para reproducción, afectado por el orden en que los archivos están almacenados, y los archivos se ordenan según el orden de indexación. El orden de indexación de archivos es según el momento en que los archivos se copiaron a la tarjeta TF.
  - **Parámetros de Entrada**:

    - **index**: Reproduce el índice de la canción.

- `uint8_t WT2605C<T>::playSDSong(const char* fileName)` —— Reproduce música con el nombre de archivo especificado. (Los nombres de archivo no deben ser mayores a 8 caracteres)
  - **Parámetros de Entrada**:

    - **fileName**: El nombre del archivo de música que quieres reproducir.

- `uint8_t WT2605C<T>::playSDDirectorySong(const char* dir, uint16_t index)` —— Especifica reproducción por índice en la carpeta de la tarjeta TF. Este comando puede especificar la carpeta en el directorio raíz, y reproducir el audio en la carpeta según el número de índice de la carpeta (el nombre de la carpeta no debe ser mayor a 8 caracteres) El nombre de la carpeta soporta: Chino, Inglés, números, símbolos especiales. Si usas Chino para enviar código, necesitas usar el formato de "codificación UTF-16" para transcodificar el código antes de enviarlo.
  - **Parámetros de Entrada**:

    - **dir**: La carpeta donde se encuentra la música que quieres reproducir.
    - **index**: Índice de archivos de música.

- `uint8_t WT2605C<T>::playUDiskRootSong(uint32_t index)` —— Especifica la reproducción del índice del directorio raíz de la memoria USB. Este comando indexa los archivos en la unidad flash USB para reproducción, afectado por el orden en que se almacenan los archivos, los archivos se ordenan según el orden del índice. El orden de indexación de archivos es según el momento en que los archivos se copiaron a la unidad flash USB.
  - **Parámetros de Entrada**:

    - **index**: Índice de archivos de música.

- `uint8_t WT2605C<T>::playUDiskSong(const char* fileName)` —— Especifica el nombre del archivo de la memoria USB para reproducción. Este comando permite especificar un nombre de archivo en el directorio raíz para reproducción de audio (el nombre del archivo no debe ser mayor a 8 caracteres). Formatos de audio soportados: `.mp3` y `.wav`.
  - **Parámetros de Entrada**:

    - **fileName**: El nombre del archivo de música que deseas reproducir.

- `uint8_t WT2605C<T>::playUDiskDirectorySong(const char* dir, uint32_t index)` —— Especifica el nombre del archivo a reproducir en la carpeta de la memoria USB. Este comando especifica el nombre de un archivo en una carpeta en el directorio raíz a reproducir. (El nombre del archivo no debe ser mayor a 8 caracteres.) Formatos de audio soportados: `.mp3` y `.wav`.
  - **Parámetros de Entrada**:

    - **dir**: La carpeta donde se encuentra la música que deseas reproducir.
    - **index**: nombre de archivos de música.

- `uint8_t WT2605C<T>::pause_or_play()` —— Comando de Pausa de Reproducción. En estado de reproducción, envía este comando para pausar la reproducción; en estado de pausa, envía este comando para reanudar la reproducción desde la pausa. En estado de parada de reproducción, envía este comando para reiniciar la reproducción en la dirección actual.
  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

- `uint8_t WT2605C<T>::stop()` —— Comando de parada. Envía este comando para detener la reproducción de la música que se está reproduciendo actualmente.
  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

- `uint8_t WT2605C<T>::next()` —— La orden de siguiente canción. Este comando activa la reproducción de la siguiente canción en el directorio actual, y cuando se reproduce la última canción, enviar este comando activa la reproducción de la primera canción.
  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

- `uint8_t WT2605C<T>::previous()` —— Orden de canción anterior. Este comando activa la reproducción de la siguiente canción en el directorio actual, y cuando se está reproduciendo la primera canción, enviar este comando activa la reproducción de la última canción.
  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

- `uint8_t WT2605C<T>::volume(uint8_t vol)` —— Comandos de Control de Volumen. Hay 32 niveles de volumen, de 0 a 31, donde 0 es silencio y 31 es volumen máximo.
  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

- `uint8_t WT2605C<T>::volumeDown()` —— Comandos de control de volumen más.
  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

- `uint8_t WT2605C<T>::volumeUp()` —— Comando de control de volumen menos.
  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

- `uint8_t WT2605C<T>::playMode(PLAY_MODE mode)` —— Especifica el modo de reproducción. Este comando modifica el modo de reproducción en caso de comunicación normal y tiene una función de memoria de apagado.
  - **Parámetros de Entrada**:

    - **mode**:

            1. **CYCLE**: Modo de bucle para todas las pistas.
            2. **SINGLE_CYCLE**: Modo de reproducción de bucle de canción única.
            3. **DIR_CYCLE**: Modo de bucle de carpeta.
            4. **RANDOM**: Modo de reproducción aleatoria.
            5. **SINGLE_SHOT**: Modo de reproducción de canción única.

  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

- `uint8_t WT2003S<T>::cutInPlay(STORAGE device, uint32_t index)` —— Comando de inserción. Este comando solo puede insertarse en el estado de reproducción, y no es válido en el estado de parada. Cuando se envía este comando, la pista que se está reproduciendo se pausará inmediatamente, y luego se ejecutará la pista de reproducción especificada en este comando, y luego se reproducirá la pista pausada original después de la reproducción. Cuando la reproducción termine, se reproducirá la pista pausada original.
  - **Parámetros de Entrada**:

    - **device**:

            1. **SPIFLASH**: Especifica la dirección del índice dentro del FLASH interpolado;
            2. **SD**: Conecta la dirección del índice especificada en la tarjeta SD;
            3. **UDISK**: Conecta y reproduce la dirección del índice especificada en la memoria USB.

    - **index**: Índice de archivos de música.

  - **Parámetros de Salida**: Devuelve 0 para ejecución exitosa y -1 para ejecución no exitosa.

##### Variables Predeterminadas

```cpp
#define AT_HEADER          "AT+"
#define AT_CMD_PLAY        "PLAY"
#define AT_CMD_LPLAY       "LPLAY"
#define AT_CMD_SPLAY       "SPLAY"
#define AT_CMD_FPLAY       "FPLAY"
#define AT_CMD_PP          "PP"
#define AT_CMD_STOP        "STOP"
#define AT_CMD_NEXT        "NEXT"
#define AT_CMD_PREV        "PREV"
#define AT_CMD_VOL         "VOL"
#define AT_CMD_VOLUP       "VOLUP"
#define AT_CMD_VOLDOWN     "VOLDOWN"
#define AT_CMD_REPEATMODE  "REPEATMODE"
#define AT_CMD_STEPINPLAY  "STEPINPLAY"
#define AT_CMD_TOTALTIME   "TOTALTIME"
#define AT_CMD_CURTIME     "CURTIME"
#define AT_CMD_CHANGE_DEV  "CHANGE_DEV"
#define AT_CMD_BUSY        "BUSY"
#define AT_CMD_VBATPCT     "VBATPCT"
#define AT_CMD_GVER        "GVER"
#define AT_CMD_GCFGVER     "GCFGVER"
#define AT_CMD_POWEROFF    "POWEROFF"
#define AT_CMD_OTA         "OTA"
#define AT_CMD_COPY        "COPY"
#define AT_CMD_BAUD        "BAUD"

#define WT2605C_TIMEOUT       1000
#define WT2605C_SEND_MAX_SIZE 64

#define STORAGE_SPIFLASH   "fat_nor"
#define STORAGE_SD         "sd0"
#define STORAGE_UDISK      "udisk0"

typedef enum {
    CYCLE        = 0x00,
    SINGLE_CYCLE = 0x01,
    DIR_CYCLE    = 0x02,
    RANDOM       = 0x03,
    SINGLE_SHOT  = 0x04,
} PLAY_MODE;

typedef enum {
    SPIFLASH = 0x00,
    SD       = 0x01,
    UDISK    = 0x02,
} STORAGE;
```

##### Instalación

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Dado que has descargado la librería en formato zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la librería se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo cual significa que la librería se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

#### 2. Librería Grove Gesture

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture/tree/dev" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2"
viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign:
'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48
1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.
44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.
53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

##### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

1. `bool init()` —— Esta función inicializa el Sensor de Gestos Grove y devuelve **True** si la inicialización es exitosa y **False** si falla.

2. `bool getResult(paj7620_gesture_t& res)` —— La función sirve para obtener el resultado del reconocimiento de gestos del sensor.

##### Instalación

Dado que has descargado la librería en formato zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y
si la librería se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo cual significa que la librería se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Demo 1: Ejemplo de Seeeduino

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro Seeeduino V4.3 para ver cómo se comporta.

**Paso 1.** Materiales requeridos

Este tutorial tomará Seeeduino V4.3 como ejemplo para explicar el uso del módulo Grove MP3. Entonces puede que necesites preparar los siguientes materiales.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino V4.3</th>
   <th>Grove - MP3 v4.0</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**Paso 2.** Conexión del Hardware

Conecta el Grove - MP3 V4.0 al puerto **UART** del Seeeduino V4.3. Luego, conecta el Seeeduino a la PC mediante un cable USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/2.jpg" style={{width:600, height:'auto'}}/></div><br />

**Paso 3.** Abre el ejemplo **WT2605C_Terminal_player** a través de la ruta: **File** → **Examples** → **Seeed_Serial_MP3_Player** → **WT2605C_Terminal_player**. Puedes reproducir archivos de música en formato `.mp3` usando este módulo, y usar el conector de audio de 3.5mm, altavoz a través del puerto de altavoz JST2.0 o incluso salida de ambos al mismo tiempo.

El código de ejemplo `WT2605C_Terminal_player` es el siguiente:

```cpp
#include "WT2605C_Player.h"

#ifdef __AVR__
  #include <SoftwareSerial.h>
  SoftwareSerial SSerial(2, 3); // RX, TX
  #define COMSerial SSerial
  #define ShowSerial Serial

  WT2605C<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define COMSerial Serial1
  #define ShowSerial SerialUSB

  WT2605C<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
  #define COMSerial Serial
  #define ShowSerial SerialUSB

  WT2605C<HardwareSerial> Mp3Player;
#endif

void setup() {
  while (!ShowSerial);
  ShowSerial.begin(9600);
  COMSerial.begin(115200);
  ShowSerial.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
  Mp3Player.init(COMSerial);

  ShowSerial.println("0...");
}


void loop() {
  if(ShowSerial.available()) {
    String input = Serial.readString();
    input.trim();
    
    if(input.startsWith("v")) {
      int vol = input.substring(1).toInt();
      int err = Mp3Player.volume(vol);
      ShowSerial.println(err);
      if(!err) ShowSerial.println("Volume set to: " + String(vol));
      else ShowSerial.println("ERROR");
    }
    
    else if(input.startsWith("m")) {
      if(input.substring(1) == "1"){
        ShowSerial.println("1");
        int err = Mp3Player.playMode(0x00);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "2"){
        ShowSerial.println("2");
        int err = Mp3Player.playMode(0x01);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Single song loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "3"){
        ShowSerial.println("3");
        int err = Mp3Player.playMode(0x02);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Folder loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "4"){
        ShowSerial.println("4");
        int err = Mp3Player.playMode(0x03);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Random mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "5"){
        ShowSerial.println("5");
        int err = Mp3Player.playMode(0x04);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Single song mode.");
        else ShowSerial.println("ERROR");
      }
    }
    else if(input.startsWith("b")){
      int index = input.substring(1).toInt();
      Mp3Player.playSDRootSong(index);
      ShowSerial.println("Play music: " + String(index));
    }
    else if(input.startsWith("+")){
      int err = Mp3Player.volumeUp();
      if(!err) ShowSerial.println("Volume up");
      else ShowSerial.println("ERROR");
    }
    else if(input.startsWith("-")){
      int err = Mp3Player.volumeDown();
      if(!err) ShowSerial.println("Volume down");
      else ShowSerial.println("ERROR");
    }
    else if(input.startsWith("n")){
      Mp3Player.next();
      ShowSerial.println("Next song");
    }
    else if(input.startsWith("p")){
      Mp3Player.previous();
      ShowSerial.println("Previous song");
    }
  }
}
```

**Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/). Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. Establece la velocidad de baudios a **115200**. El resultado debería verse como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/3.png" style={{width:700, height:'auto'}}/></div><br />

Puedes ingresar una serie de comandos para controlar el módulo MP3.

- Ingresa `v{num}` para establecer el volumen de reproducción, por ejemplo, v20 significa establecer el volumen de reproducción a 20.
- Ingresa `m{1~5}` para establecer el modo de reproducción.
- Ingresa `b{num}` para reproducir la música en el índice especificado.
- Ingresa `+`, subir volumen.
- Ingresa `-`, bajar volumen.
- Ingresa `n`, siguiente canción.
- Ingresa `p`, canción anterior.

Puedes ser más creativo y agregar más características de MP4.

## Demostración 2: Control de Música por Gestos

**Paso 1.** Materiales requeridos

Este tutorial utilizará el **Arduino UNO R4 WiFi** como control maestro, puedes mostrar tu dedo frente al sensor de gestos y el sensor reconocerá tu dedo para controlar el reproductor de música. Entonces necesitarás preparar los siguientes materiales.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Arduino UNO R4 WiFi</th>
   <th>Grove - MP3 v4.0</th>
      <th>Grove Smart IR Gesture Sensor (PAJ7660)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/7.png"
style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg"
style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg"
style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</
font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</
font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</
font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**Paso 2.** Gira el interruptor DIP de 4 posiciones del Grove Smart IR Gesture Sensor(PAJ7660) a la posición IIC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style=
{{width:100, height:'auto'}}/></div>

La segunda posición de izquierda a derecha debe configurarse en OFF, todas las demás deben estar en ON.

**Paso 3.** Conexión de Hardware

Conecta el Grove - MP3 V4.0 al puerto **UART** del Arduino UNO R4 WiFi, conecta el Grove Gesture Sensor al puerto **IIC** del Arduino UNO R4 WiFi, inserta la tarjeta SD en la ranura de la tarjeta del **Grove-mp3-v4**, luego, conecta el Arduino a la PC mediante un cable USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/6.jpg" style=
{{width:500, height:'auto'}}/></div>

**Paso 4.** Abre Arduino IDE, el código de ejemplo `Gesture_Control_Music` es el siguiente:

```cpp
#include "WT2605C_Player.h"
#include "Gesture.h"
#include <SoftwareSerial.h>

SoftwareSerial SSerial(2, 3); //use D2,D3 to simulate RX,TX
WT2605C<SoftwareSerial> Mp3Player;
pag7660 Gesture; // Combined mode is used by default

#define COMSerial SSerial
#define ShowSerial Serial


void setup() {
  ShowSerial.print(1);
  ShowSerial.begin(9600);
  COMSerial.begin(115200);
  Mp3Player.init(COMSerial);
  ShowSerial.println("initial finished");

  if(Gesture.init()) {
        ShowSerial.println("PAG7660 initialization success");
        ShowSerial.println("Please input your gestures:\n");
    } else {
        ShowSerial.println("PAG7660 initialization failed");
    }
}

void loop() {
    int ans;
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        ans = printResultCombinedMode(result);
        // ShowSerial.println("ans=");
        // ShowSerial.print(ans);
        playSong(ans);
    }
}

int playSong(int index){
    //if index equate to 0, then don't play song
    if(index==0){
      return 0;
    }
    Mp3Player.playSDRootSong(index);
    ShowSerial.println("Play music: " + String(index));
    return 1;
}

int printResultCombinedMode(const pag7660_gesture_t& result) {

    int ans = 0;
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };

    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                ShowSerial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        ans = result.type;
        ShowSerial.println("finger number");
        break;
    case 6:
        ans = result.type;
        ShowSerial.print("Rotate Right ");
        ShowSerial.println(result.rotate);
        break;
    case 7:
        ans = result.type;
        ShowSerial.print("Rotate Left ");
        ShowSerial.println(result.rotate);
        break;
    case 8:
        ans = result.type;
        ShowSerial.println("Swipe Left");
        break;
    case 9:
        ans = result.type;
        ShowSerial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        ans = result.type;
        ShowSerial.print(result.type - 19 + 1);
        ShowSerial.println("-finger push");
        break;
    default:
        break;
    }
    return ans;
}
```

**Paso 5.** Sube la Demo. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/). Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. Los gestos efectivos puedes consultarlos [aquí](https://wiki.seeedstudio.com/es/grove_gesture_paj7660/#hardware-overview), el resultado debería verse como se muestra a continuación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/5.png" style={{width:800, height:'auto'}}/></div>

## FAQ

### P: ¿La tarjeta TF no puede ser reconocida?

**R:** Verifica el sistema de archivos de la tarjeta TF, asegúrate de que sea un sistema de archivos FAT16 o FAT32.

## Recursos

- **[ZIP]** [Grove-MP3 V4 SCH&PCB](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4_SCH&PCB.zip)
- **[PDF]** [Grove-MP3 V4 SCH](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4.pdf)
- **[PDF]** [Grove-MP3 V4 hoja de datos](https://files.seeedstudio.com/wiki/grove-mp3-v4/WT2605C-32N-A001-datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
