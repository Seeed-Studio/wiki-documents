---
description: This article describes how to use the microphone on the XIAO ESP32S3 Sense expansion board.
title: Uso del micrófono en XIAO ESP32S3 (Sense)
keywords:
- Template
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_sense_mic
last_update:
  date: 02/15/2025
  author: Guillermo
---

# Uso del micrófono XIAO ESP32S3 de Seeed Studio

En este tutorial, te mostraremos cómo usar el micrófono de la placa de expansión XIAO ESP32S3 Sense. Primero, explicaremos el uso básico del pin I2S, obteniendo la intensidad del sonido del entorno actual utilizando I2S y el micrófono, y mostrándola en el gráfico de forma de onda serial. Luego, explicaremos cómo grabar sonido y guardar el sonido grabado en la tarjeta SD.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::caution
Todo el contenido de este tutorial es aplicable únicamente a XIAO ESP32S3 Sense.
:::

## Empezando

Antes de comenzar con el contenido del tutorial, es posible que necesites preparar el siguiente hardware y software con anticipación.

### Instalación de placas de expansión (para Sense)

La instalación de la placa de expansión es muy sencilla, solo necesitas alinear el conector de la placa de expansión con el conector B2B en el XIAO ESP32S3, presionar con firmeza y escuchar un "clic", la instalación estará completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Prepara la tarjeta microSD

Es posible que necesites una tarjeta microSD al trabajar en un proyecto donde se guardan grabaciones.

XIAO ESP32S3 Sense es compatible con tarjetas microSD de hasta **32GB**, por lo que, si estás listo para comprar una tarjeta microSD para XIAO, consulta esta especificación. Además, formatea la tarjeta microSD en formato **FAT32** antes de utilizarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Después de formatear, puedes insertar la tarjeta microSD en la ranura para tarjetas microSD. Ten en cuenta la dirección de inserción, el lado con el contacto dorado debe quedar hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

## Detección de la intensidad del sonido

Para el primer caso del proyecto, detectemos el ruido en el entorno y mostremos la intensidad ambiental detectada por el micrófono utilizando el gráfico de forma de onda del puerto serial del IDE de Arduino.

A continuación se muestra el programa de ejemplo completo.

:::tip
Verifica y asegúrate de qué versión de `esp32` estás utilizando. El siguiente ejemplo es para la versión 2.0.x, el de abajo es para la versión 3.0.x y posteriores.
:::

```cpp
#include <I2S.h>

void setup() {
  // Open serial communications and wait for port to open:
  // A baud rate of 115200 is used instead of 9600 for a faster data rate
  // on non-native USB ports
  Serial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // start I2S at 16 kHz with 16-bits per sample
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
}

void loop() {
  // read a sample
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

:::tip
El ejemplo anterior solo es compatible con la versión 2.0.x de `esp32`, si estás utilizando la última versión (por ejemplo, 3.0.x), usa el de abajo.
:::

```cpp
#include <ESP_I2S.h>
I2SClass I2S;

void setup() {
  // Open serial communications and wait for port to open:
  // A baud rate of 115200 is used instead of 9600 for a faster data rate
  // on non-native USB ports
  Serial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // setup 42 PDM clock and 41 PDM data pins
  I2S.setPinsPdmRx(42, 41);

  // start I2S at 16 kHz with 16-bits per sample
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
}

void loop() {
  // read a sample
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

Sube este programa para XIAO ESP32S3 Sense y abre **Serial Plotter**. Verás la curva de cambio de la intensidad del sonido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png" style={{width:600, height:'auto'}}/></div>

### Anotación del programa

Al principio del programa, primero necesitamos importar la biblioteca I2S para poder utilizar los pines del micrófono.

```c
#include <I2S.h>
```

La función `setAllPins()` se llama en el objeto I2S para configurar los pines utilizados en la interfaz I2S. La función toma cinco parámetros enteros que representan los pines GPIO conectados al reloj de bits, selección de palabra, entrada de datos, salida de datos y selección de canal de la interfaz I2S, respectivamente.

```c
I2S.setAllPins(-1, 42, 41, -1, -1);
```

En este código específico, los valores `-1` indican que los pines correspondientes no se utilizan, mientras que los valores `42` y `41` representan los pines GPIO conectados a las líneas de selección de palabra y entrada de datos, respectivamente. Las líneas de salida de datos y selección de canal no se utilizan en esta configuración y se establecen en `-1`.

```c
if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
}
```

La función `begin()` se llama en el objeto I2S para inicializar la interfaz I2S con los parámetros especificados: `PDM_MONO_MODE`, una frecuencia de muestreo de `16000` Hz y una resolución de `16 bits`.  

:::tip
Cabe señalar que, para el chip ESP32-S3 actual, solo se puede utilizar `PDM_MONO_MODE`, y la resolución de muestreo solo puede ser de `16 bits`. Únicamente la frecuencia de muestreo puede modificarse, pero después de realizar pruebas, se ha determinado que una frecuencia de muestreo de 16 kHz es relativamente estable.
:::

```c
int sample = I2S.read();

if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
}
```

La función `read()` se llama en el objeto I2S para leer una única muestra de audio desde la interfaz I2S. La declaración `if` verifica el valor de la variable `sample`. Si el valor de la muestra no es 0, -1 o 1, se considera una muestra de audio válida y se ejecutará el código dentro del bloque `if`. En este caso, el valor de la muestra se imprime en la consola serial utilizando la función `Serial.println()`.  

## Guardar el sonido grabado en la microSD  

En este siguiente proyecto, te guiaremos sobre cómo combinar las funciones de la microSD y guardar el sonido grabado en la tarjeta microSD. Para este proyecto, asegúrate de preparar una tarjeta microSD y formatearla en **FAT32** de antemano.  

Si es la primera vez que utilizas una tarjeta microSD en el XIAO ESP32S3, puedes leer el contenido del [Wiki sobre el sistema de archivos](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/#prepare-the-microsd-card) para conocer más sobre la instalación y preparación de la tarjeta microSD.  

A continuación, se muestra el programa en Arduino para este proyecto.  

:::tip
Verifica y asegúrate de qué versión de `esp32` estás utilizando. El siguiente ejemplo es para la versión 2.0.x, el de abajo es para la versión 3.0.x y posteriores.
:::

```cpp
/* 
 * WAV Recorder for Seeed XIAO ESP32S3 Sense 
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// make changes as needed
#define RECORD_TIME   20  // seconds, The maximum value is 240
#define WAV_FILE_NAME "arduino_rec"

// do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  record_wav();
}

void loop() {
  delay(1000);
  Serial.printf(".");
}

void record_wav()
{
  uint32_t sample_size = 0;
  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;
  uint8_t *rec_buffer = NULL;
  Serial.printf("Ready to start recording ...\n");

  File file = SD.open("/"WAV_FILE_NAME".wav", FILE_WRITE);
  // Write the header to the WAV file
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM malloc for recording
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Start recording
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("Record Failed!\n");
  } else {
    Serial.printf("Record %d bytes\n", sample_size);
  }

  // Increase volume
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // Write data to the WAV file
  Serial.printf("Writing to the file ...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("Write file Failed!\n");

  free(rec_buffer);
  file.close();
  Serial.printf("The recording is over.\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

:::tip
El ejemplo anterior solo es compatible con la versión 2.0.x de `esp32`. Si estás usando la versión más reciente (por ejemplo, 3.0.x), utiliza el siguiente.
:::

```cpp
#include "ESP_I2S.h"
#include "FS.h"
#include "SD.h"

void setup() {
  // Create an instance of the I2SClass
  I2SClass i2s;

  // Create variables to store the audio data
  uint8_t *wav_buffer;
  size_t wav_size;

  // Initialize the serial port
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  Serial.println("Initializing I2S bus...");

  // Set up the pins used for audio input
  i2s.setPinsPdmRx(42, 41);

  // start I2S at 16 kHz with 16-bits per sample
  if (!i2s.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }

  Serial.println("I2S bus initialized.");
  Serial.println("Initializing SD card...");

  // Set up the pins used for SD card access
  if(!SD.begin(21)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  Serial.println("SD card initialized.");
  Serial.println("Recording 20 seconds of audio data...");

  // Record 20 seconds of audio data
  wav_buffer = i2s.recordWAV(20, &wav_size);

  // Create a file on the SD card
  File file = SD.open("/arduinor_rec.wav", FILE_WRITE);
  if (!file) {
    Serial.println("Failed to open file for writing!");
    return;
  }

  Serial.println("Writing audio data to file...");

  // Write the audio data to the file
  if (file.write(wav_buffer, wav_size) != wav_size) {
    Serial.println("Failed to write audio data to file!");
    return;
  }

  // Close the file
  file.close();

  Serial.println("Application complete.");
}

void loop() {
  delay(1000);
  Serial.printf(".");
}
```

Para ejecutar este ejemplo, necesitaremos utilizar la función PSRAM del chip ESP32, así que actívala antes de subir el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>


Este programa se ejecuta solo una vez después de que el usuario **abra el monitor serial**, grabando durante 20 segundos y guardando el archivo de grabación en la microSD con el nombre "arduino_rec.wav".  

Cuando se imprime un "." cada segundo en el monitor serial, significa que la ejecución del programa ha finalizado y puedes reproducir el archivo de sonido grabado con la ayuda de un lector de tarjetas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/102.png" style={{width:700, height:'auto'}}/></div>

:::tip
Para reproducir el audio grabado desde XIAO ESP32S3, es posible que necesites un reproductor de audio que sea compatible con el formato WAV.
:::

### Anotaciones del programa

En este programa, hemos escrito dos funciones para la grabación de audio: `record_wav()` y `generate_wav_header()`.

- `record_wav()`: Función de grabación. En esta función, el programa lee datos de audio desde un micrófono utilizando la interfaz I2S y los almacena en una tarjeta SD como un archivo de audio WAV.

  a. **Inicializar variables.** El programa define un búfer `rec_buffer` para almacenar los datos grabados y establece el tiempo de grabación `RECORD_TIME`.

  b. **Abrir el archivo WAV.** El programa usa la función `SD.open()` para abrir un archivo de audio WAV y define su nombre como `WAV_FILE_NAME`.

  c. **Escribir la cabecera del archivo WAV.** El programa genera la información de la cabecera del archivo WAV utilizando la función `generate_wav_header()` y la escribe en el archivo abierto.

  d. **Asignar memoria e iniciar la grabación.** El programa usa la función `ps_malloc()` para asignar un bloque de memoria en la PSRAM del ESP32S3 para almacenar los datos grabados y emplea la función `esp_i2s::i2s_read()` para leer los datos de audio desde el micrófono. Los datos leídos se almacenan en el búfer `rec_buffer`.

  e. **Aumentar el volumen.** El programa incrementa el volumen de los datos grabados utilizando un valor de ganancia definido por la constante `VOLUME_GAIN`.

  f. **Escribir los datos grabados en el archivo WAV.** El programa usa la función `file.write()` para escribir los datos grabados en el archivo WAV abierto.

  g. **Liberar la memoria del búfer y cerrar el archivo WAV.** El programa usa la función `free()` para liberar la memoria del búfer `rec_buffer` y la función `file.close()` para cerrar el archivo WAV abierto.

- `generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)`: Función para generar la información de la cabecera de un archivo WAV. En esta función, el programa genera un arreglo de bytes que contiene la información de la cabecera del archivo WAV según sus especificaciones.

  a. **Definir las constantes para la cabecera del archivo WAV.** El programa define un arreglo de bytes `set_wav_header` que contiene la información de la cabecera del archivo WAV, además de constantes para sus especificaciones, incluyendo `NUM_CHANNELS`, `BITS_PER_SAMPLE`, `WAV_HEADER_SIZE` y `SUB_CHUNK_SIZE`.

  b. **Configurar la información de la cabecera del archivo WAV.** El programa configura la información de la cabecera utilizando las constantes definidas en el paso a y calcula los valores de algunos campos en función de las especificaciones del archivo WAV, como `AUDIO_FORMAT`, `BYTE_RATE`, `BLOCK_ALIGN`, `SAMPLES_PER_CHANNEL` y `CHUNK_SIZE`. Los valores calculados se almacenan en el arreglo de bytes `set_wav_header`.

  c. **Copiar la información de la cabecera del archivo WAV.** El programa copia la información de la cabecera almacenada en `set_wav_header` al arreglo de bytes `wav_header`.

## Solución de problemas

### ¿Por qué no puedo reproducir los archivos de audio grabados?

Si te encuentras con un problema al reproducir el archivo, revisa la información de depuración impresa en el monitor serie para detectar mensajes de error relacionados con la lectura y escritura en la tarjeta SD.  

Si hay un error, intenta reemplazar la tarjeta microSD o verifica si la conexión entre la tarjeta y la placa de expansión está floja o inestable.  

Si no hay problema con la tarjeta, revisa el tamaño del archivo de audio. Si la grabación falló, el archivo puede aparecer con un tamaño de **0KB**.  

Por ejemplo, en la siguiente imagen se muestra un problema con la lectura y escritura de la tarjeta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/103.png" style={{width:600, height:'auto'}}/></div>

Si no hay problemas con la tarjeta y la grabación se ha realizado correctamente, entonces es necesario verificar si el software es compatible con la reproducción de audio en formato WAV. Recomendamos usar un software específico para la reproducción de música para escuchar el audio, evitando utilizar reproductores de video. Tras realizar pruebas, se ha comprobado que muchos reproductores de video (aunque soporten el formato WAV) no pueden reproducirlo correctamente.

## Soporte técnico y discusión de productos

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>









