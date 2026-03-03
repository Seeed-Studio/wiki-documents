---
description: Este artículo describe cómo usar el micrófono en la placa de expansión XIAO ESP32S3 Sense.
title: Uso del Micrófono para la Versión Sense
keywords:
- Template
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_sense_mic
last_update:
  date: 04/14/2023
  author: Citric
---

# Uso del micrófono del Seeed Studio XIAO ESP32S3

En este tutorial, te mostraremos cómo usar el micrófono de la placa de expansión XIAO ESP32S3 Sense. Primero es el uso muy básico del pin I2S, obtendremos el volumen del entorno actual usando I2S y el micrófono, y lo mostraremos en el gráfico de forma de onda serial. Luego explicaremos cómo grabar sonido y guardar el sonido grabado en la tarjeta SD.

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::caution
Todo el contenido de este tutorial es aplicable solo al XIAO ESP32S3 Sense.
:::

## Comenzando

Antes de comenzar el contenido del tutorial, es posible que necesites preparar el siguiente hardware y software con anticipación.

### Instalación de placas de expansión (para Sense)

Instalar la placa de expansión es muy simple, solo necesitas alinear el conector en la placa de expansión con el conector B2B en el XIAO ESP32S3, presionarlo fuerte y escuchar un "clic", la instalación está completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Preparar la tarjeta microSD

Es posible que necesites una tarjeta MicroSD cuando trabajes en un proyecto donde se guardan grabaciones.

XIAO ESP32S3 Sense soporta tarjetas microSD de hasta **32GB**, así que si estás listo para comprar una tarjeta microSD para XIAO, por favor consulta esta especificación. Y formatea la tarjeta microSD al formato **FAT32** antes de usar la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Después del formateo, puedes insertar la tarjeta microSD en la ranura de la tarjeta microSD. Por favor nota la dirección de inserción, el lado con el contacto dorado debe mirar hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### Entendiendo los Pines

<div class="table-center">
	<table align="center">
    <tr>
			<th>Número de Pin</th>
			<th>Descripción de Función</th>
		</tr>
		<tr>
			<td align="center">GPIO 41</td>
			<td align="center">PDM Microphone DATA</td>
		</tr>
		<tr>
			<td align="center">GPIO 42</td>
			<td align="center">PDM Microphone CLK</td>
		</tr>
	</table>
</div>

## Detección del volumen del sonido

Para el primer caso de proyecto, detectemos el ruido en el entorno y mostremos el volumen ambiental detectado por el micrófono usando el gráfico de forma de onda del puerto serial del Arduino IDE.

El siguiente es el programa de muestra completo.

:::tip
Verifica y asegúrate de qué versión de `esp32` estás usando, el siguiente ejemplo es para 2.0.x el de abajo es para 3.0.x y posteriores
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
El ejemplo anterior solo es compatible con 2.0.x de `esp32`, si estás en la última versión (ej. 3.0.x) usa el de abajo
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

Sube este programa para XIAO ESP32S3 Sense y abre **Serial Plotter**, verás la curva de cambio de volumen del sonido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png" style={{width:600, height:'auto'}}/></div>

### Anotación del programa

Al comienzo del programa, necesitamos primero importar la biblioteca I2S para poder usar los pines del micrófono.

```c
#include <I2S.h>
```

La función `setAllPins()` se llama en el objeto I2S para configurar los pines usados para la interfaz I2S. La función toma cinco parámetros enteros que representan los pines GPIO conectados al reloj de bits, selección de palabra, entrada de datos, salida de datos y líneas de selección de canal de la interfaz I2S, respectivamente.

```c
I2S.setAllPins(-1, 42, 41, -1, -1);
```

En este código específico, los valores `-1` indican que los pines correspondientes no se usan, mientras que los valores `42` y `41` representan los pines GPIO conectados a las líneas de selección de palabra y entrada de datos, respectivamente. Las líneas de salida de datos y selección de canal no se usan en esta configuración y se establecen en `-1`.

```c
if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
}
```

La función `begin()` se llama en el objeto I2S para inicializar la interfaz I2S con los parámetros especificados: `PDM_MONO_MODE`, frecuencia de muestreo de `16000` Hz, y resolución de `16-bit`.

:::tip
Debe notarse que para el chip ESP32-S3 actual, solo podemos usar `PDM_MONO_MODE` y el ancho de bits de muestreo solo puede ser `16bit`. solo la frecuencia de muestreo puede ser modificada, pero después de las pruebas, la frecuencia de muestreo a 16kHz es relativamente estable.
:::

```c
int sample = I2S.read();

if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
}
```

La función `read()` se llama en el objeto I2S para leer una sola muestra de audio de la interfaz I2S. La declaración if verifica el valor de la variable sample. Si el valor de la muestra no es 0, -1, o 1, se considera una muestra de audio válida, y el código dentro del bloque if será ejecutado. En este caso, el valor de la muestra se imprime en la consola serial usando la función `Serial.println()`.

## Guardar sonido grabado en la tarjeta microSD

En este próximo proyecto, te guiaremos sobre cómo combinar las funciones de la tarjeta microSD y guardar el sonido grabado en la tarjeta microSD. Entonces para este proyecto, por favor prepara la tarjeta microSD y formatéala al formato **FAT32** con anticipación.

Si esta es tu primera vez usando una tarjeta microSD en el XIAO ESP32S3, puedes leer el contenido del [Wiki del sistema de archivos](https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem/#prepare-the-microsd-card) para aprender sobre la instalación y preparación de la tarjeta microSD.

El siguiente es el programa Arduino para este proyecto.
:::tip
Verifica y asegúrate de qué versión de `esp32` estás usando, el siguiente ejemplo es para 2.0.x el de abajo es para 3.0.x y posteriores
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
El ejemplo anterior solo es compatible con la versión 2.0.x de `esp32`, si estás en la última versión (por ejemplo, 3.0.x) usa el de abajo
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

Para ejecutar este ejemplo, necesitaremos usar la función PSRAM del chip ESP-32, así que por favor actívala antes de subir el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

Este programa se ejecuta solo una vez después de que el usuario **encienda el monitor serie**, grabando durante 20 segundos y guardando el archivo de grabación en la tarjeta microSD como "arduino_rec.wav".

Cuando se muestre un "." cada segundo en el monitor serie, la ejecución del programa habrá terminado y podrás reproducir el archivo de sonido grabado con la ayuda de un lector de tarjetas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/102.png" style={{width:700, height:'auto'}}/></div>

:::tip
Para reproducir el audio grabado desde XIAO ESP32S3, es posible que necesites usar un reproductor de audio que soporte formato WAV.
:::

### Anotaciones del programa

En este programa, hemos escrito dos funciones para la función de grabación, una es `record_wav()` y la otra es `generate_wav_header()`.

- `record_wav()`: Función de grabación. En esta función, el programa lee datos de audio desde un micrófono usando la interfaz I2S, y los almacena en una tarjeta SD como un archivo de audio WAV.

  a. Inicializar variables. El programa define un buffer `rec_buffer` para almacenar los datos grabados, y establece el tiempo de grabación `RECORD_TIME`.

  b. Abrir el archivo WAV. El programa usa la función `SD.open()` para abrir un archivo de audio WAV, y define su nombre de archivo como `WAV_FILE_NAME`.

  c. Escribir el encabezado del archivo WAV. El programa genera la información del encabezado del archivo de audio WAV usando la función `generate_wav_header()`, y la escribe en el archivo WAV abierto.

  d. Asignar memoria e iniciar grabación. El programa usa la función `ps_malloc()` para asignar un bloque de memoria en la PSRAM del ESP32S3 para almacenar los datos grabados, y usa la función `esp_i2s::i2s_read()` para leer datos de audio desde el micrófono. Los datos leídos se almacenan en el buffer rec_buffer.

  e. Aumentar volumen. El programa aumenta el volumen de los datos grabados usando un valor de ganancia definido por la constante `VOLUME_GAIN`.

  f. Escribir los datos grabados en el archivo WAV. El programa usa la función `file.write()` para escribir los datos grabados en el archivo WAV abierto.

  g. Liberar la memoria del buffer y cerrar el archivo WAV. El programa usa la función `free()` para liberar la memoria del buffer `rec_buffer`, y usa la función `file.close()` para cerrar el archivo WAV abierto.

- `generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)`: Función para generar la información del encabezado de un archivo WAV. En esta función, el programa genera un array de bytes que contiene la información del encabezado de un archivo WAV basado en las especificaciones del archivo WAV.

  a. Definir las constantes para la información del encabezado del archivo WAV. El programa define un array de bytes `set_wav_header` que contiene la información del encabezado de un archivo WAV, y define las constantes para las especificaciones del archivo WAV, incluyendo `NUM_CHANNELS`, `BITS_PER_SAMPLE`, `WAV_HEADER_SIZE`, y `SUB_CHUNK_SIZE`.

  b. Establecer la información del encabezado del archivo WAV. El programa establece la información del encabezado del archivo WAV usando las constantes definidas en el paso a, y calcula los valores de algunos campos basados en las especificaciones del archivo WAV, incluyendo `AUDIO_FORMAT`, `BYTE_RATE`, `BLOCK_ALIGN`, `SAMPLES_PER_CHANNEL`, y `CHUNK_SIZE`. Los valores calculados se almacenan en el array de bytes `set_wav_header`.

  c. Copiar la información del encabezado del archivo WAV. El programa copia la información del encabezado almacenada en `set_wav_header` al array de bytes `wav_header`.

## Solución de problemas

### ¿Por qué no puedo reproducir los archivos de audio grabados?

Si encuentras una situación donde no puedes reproducir, por favor verifica la información de depuración impresa por el monitor serie para mensajes de error sobre lectura y escritura de tarjetas. Si los hay, por favor reemplaza la tarjeta microSD o verifica si la conexión entre la tarjeta y la placa de expansión está suelta o inestable. Si no hay problema con la tarjeta, entonces el archivo de audio debería tener tamaño, si hay un problema con la grabación, puede mostrarse como un archivo de audio grabado con un tamaño de solo 0KB.

Por ejemplo, en la figura de abajo, hay un problema con la lectura y escritura de la tarjeta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/103.png" style={{width:600, height:'auto'}}/></div>

Si no hay problemas con la tarjeta y la grabación es bastante exitosa. Entonces necesitas verificar si el software soporta reproducción de audio en formato WAV. Recomendamos usar software especial de reproducción de música para reproducir audio, trata de no usar reproductores de video para reproducir. Después de pruebas reales, hay muchos reproductores de video (aunque soporten formato WAV) que no pueden reproducirlo.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
