---
description: Este tutorial explica cómo usar el XIAO ESP32S3, grabar una voz, reconocerla y luego hacerle una pregunta a ChatGPT y mostrar la respuesta en la pantalla.
title: Asistente de Voz Miniatura con ChatGPT basado en XIAO ESP32S3 Sense
keywords:
- xiao esp32s3 sense
- chatGPT
- speech to text
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_speech2chatgpt
last_update:
  date: 02/10/2025
  author: Guillermo
---

# Asistente de Voz Miniatura con ChatGPT basado en XIAO ESP32S3

<iframe width="100%" height="400" src="https://www.youtube.com/embed/wPi-XjeJPNw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

¡Hoy nos complace presentar un nuevo proyecto utilizando el XIAO ESP32S3 Sense y la pantalla redonda para XIAO! Este proyecto tiene como objetivo construir un sistema de reconocimiento de voz utilizando el micrófono del XIAO ESP32S3 Sense y el servicio de reconocimiento de voz a texto de Google Cloud. El texto reconocido se utiliza luego para llamar a la interfaz de OpenAI, hacer preguntas a ChatGPT y recibir respuestas. Finalmente, mostramos en pantalla tanto el discurso reconocido como el contenido de las respuestas.

¡Este es nuestro asistente inteligente "XIAO"!

Veamos algunos de los pasos generales necesarios para completar este proyecto.

- [Regístrate y habilita el servicio Google Cloud Speech to Text](#sign-up-and-enable-google-cloud-speech-to-text-service)
- [Implementa los servicios de transcripción de voz en hosts locales](#deploy-speech-to-text-services-on-local-hosts)
- [Sube los archivos de sonido grabados con XIAO ESP32S3 Sense a Google Cloud para su reconocimiento](#upload-xiao-esp32s3-sense-recorded-sound-files-to-google-cloud-for-recognition)
- [Implementa ChatGPT en XIAO ESP32S3 Sense](#deploy-chatgpt-on-xiao-esp32s3-sense)
- [Diseño del contenido de la pantalla y la integración de programas](#design-of-screen-display-content--integration-of-programs)

La estructura general del marco se puede ver en el diagrama a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/17.png" style={{width:1000, height:'auto'}}/></div>

## Comenzando

Antes de comenzar con este proyecto, es posible que necesites preparar tu hardware y software con antelación, tal como se describe a continuación.

### Preparación del hardware

Si deseas experimentar todo el contenido del programa en su totalidad, necesitarás al menos el siguiente equipo de hardware.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Además de esto, necesitamos una tarjeta microSD en formato FAT32 de no más de 32 GB para almacenar los archivos de grabación.

Dado que el XIAO ESP32S3 Sense está diseñado con tres resistencias pull-up R4~R6 conectadas al puerto de la tarjeta SD, y la pantalla redonda también tiene resistencias pull-up, la tarjeta SD no puede ser leída cuando ambos se utilizan al mismo tiempo. Para solucionar este problema, necesitamos cortar el J3 en la placa de expansión del XIAO ESP32S3 Sense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

Después de desconectar el J3, el puerto de la tarjeta SD en el XIAO ESP32S3 Sense no funcionará correctamente, por lo que deberás insertar la tarjeta microSD en el puerto de la tarjeta SD de la pantalla redonda.

A continuación, por favor instala la tarjeta microSD, el XIAO ESP32S3 Sense y la pantalla redonda en el orden correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

:::tip
Se recomienda que primero retires el módulo de la cámara para evitar raspar la cámara al cortar la conexión J3 con la cuchilla.
:::

### Preparación del software

Dado que se está utilizando el XIAO ESP32S3, antes de comenzar, debes instalar el paquete de la placa XIAO ESP32S3 siguiendo las instrucciones del Wiki.

- [Introducción a Seeed Studio XIAO ESP32S3 (Sense)](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation)

Además de esto, también utilizamos el Round Display para XIAO, por lo que necesitarás preparar la biblioteca para la placa de expansión según el Wiki.

- [Introducción a Seeed Studio Round Display para XIAO](https://wiki.seeedstudio.com/get_start_round_display/#getting-started)

Durante el proyecto, también podemos usar algunas bibliotecas de terceros, como la biblioteca de ChatGPT y ArduinoJSON, que se pueden descargar y agregar al entorno de desarrollo de Arduino aquí.

- [Bibliotecas](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/tree/main/libraries)

Además de las bibliotecas básicas, también necesitamos usar el servicio Node, por lo que tendrás que instalar Nodejs por tu cuenta. Puedes descargarlo directamente desde el [sitio web oficial](https://nodejs.org/en).

Con todo preparado, comencemos con el tutorial de hoy.

## Registrarse y habilitar el servicio de Google Cloud Speech to Text

:::tip
También puedes referirte directamente al [tutorial oficial de Google Cloud](https://cloud.google.com/speech-to-text/docs/before-you-begin#setting_up_your_google_cloud_platform_project) sobre cómo registrarte e iniciar el servicio de Google Cloud Speech-to-Text para configurarlo.
:::

Speech-to-Text es una API impulsada por la tecnología de inteligencia artificial (IA) de Google. Envías tus datos de audio a Speech-to-Text y luego recibes una transcripción en texto de esos datos de audio como respuesta. Antes de que puedas comenzar a enviar solicitudes a Speech-to-Text, debes habilitar la API en la consola de Google Cloud.

### Paso 1. Inicia sesión en la consola de Google Cloud

Puedes acceder a la consola de Google Cloud haciendo clic [aquí](https://console.cloud.google.com/?_ga=2.241031875.1758680688.1685496686-1606155345.1684977559), y si aún no te has registrado en Google Cloud, puedes hacerlo [aquí](https://console.cloud.google.com/?_ga=2.241031875.1758680688.1685496686-1606155345.1684977559).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/18.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. [Ir a la página de selección de proyectos](https://console.cloud.google.com/projectselector2/home/dashboard?_ga=2.5754355.1758680688.1685496686-1606155345.1684977559)

Puedes elegir un proyecto existente o crear uno nuevo. Para obtener más información sobre cómo crear un proyecto, consulta [Crear y gestionar proyectos](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

Si creas un proyecto nuevo, se te pedirá vincular una cuenta de facturación a este proyecto. Si estás utilizando un proyecto preexistente, asegúrate de que la facturación esté habilitada.

:::note
Nota: Debes habilitar la facturación para usar la API de Speech-to-Text, sin embargo, no se te cobrará a menos que superes la cuota gratuita. Consulta la página de [precios](https://cloud.google.com/speech-to-text/pricing) para más detalles.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Iniciar un servicio de Conversión de Voz a Texto

Una vez que hayas seleccionado un proyecto y lo hayas vinculado a una cuenta de facturación, puedes habilitar la API de Conversión de Voz a Texto. Ve a la barra de búsqueda de productos y recursos en la parte superior de la página y escribe **speech**. Selecciona la **API de Conversión de Voz a Texto en la Nube** de la lista de resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/1.png" style={{width:600, height:'auto'}}/></div>

### Paso 4. Crear una cuenta de servicio

Crea una nueva cuenta de servicio si tu proyecto aún no tiene una. Debes crear una cuenta de servicio para poder utilizar la Conversión de Voz a Texto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/3.png" style={{width:600, height:'auto'}}/></div>

En la nueva página emergente, selecciona **Cuenta de servicio** bajo **CREAR CREDENCIALES**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/4.png" style={{width:1000, height:'auto'}}/></div>

En el cuadro **nombre de la cuenta de servicio**, escribe un nombre único para la nueva cuenta de servicio. Tu entrada se rellenará automáticamente en el cuadro **ID de la cuenta de servicio**. El cuadro de descripción de la cuenta de servicio es opcional, pero se recomienda si planeas asociar varias cuentas de servicio con tu proyecto. Ingresa una breve descripción de la cuenta de servicio en este cuadro y luego haz clic en **CREAR Y CONTINUAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/5.png" style={{width:500, height:'auto'}}/></div>

Te recomendamos que asignes uno de los roles básicos de IAM a tu cuenta de servicio. También puedes asignar varios roles a una sola cuenta de servicio si es necesario. Consulta [roles de IAM](https://cloud.google.com/iam/docs/understanding-roles) para obtener detalles sobre los roles disponibles y los permisos permitidos para cada uno. Haz clic en el menú desplegable **Seleccionar un rol** y desplázate hacia abajo hasta **Propietario**. Puedes elegir un rol para esta cuenta de servicio de las opciones que aparecen en la columna de la derecha. Haz clic en **CONTINUAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/6.png" style={{width:500, height:'auto'}}/></div>

El paso final te permite, de manera opcional, permitir que otras entidades (individuos, grupos de Google, etc.) accedan a tu cuenta de servicio. Si no necesitas otorgar acceso adicional, puedes hacer clic en **LISTO** sin ingresar ninguna información.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/7.png" style={{width:500, height:'auto'}}/></div>

La cuenta de servicio ahora está listada en la página de **Cuentas de servicio**. Puedes cambiar los permisos de la cuenta de servicio, agregar o generar nuevas claves, y otorgar acceso en cualquier momento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/8.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Crear una clave JSON para tu cuenta de servicio

Necesitas usar esta clave privada durante el [proceso de autenticación](https://cloud.google.com/speech-to-text/docs/before-you-begin#set_up_your_environment_variables) cuando envíes una solicitud a la Conversión de Voz a Texto.

Para crear una clave, haz clic en la cuenta de servicio y selecciona la pestaña **CLAVES**. Haz clic en **AGREGAR CLAVE -> Crear nueva clave**. Te recomendamos que crees una clave en formato JSON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/9.png" style={{width:800, height:'auto'}}/></div>

Una nueva clave en el formato de tu elección se descarga automáticamente. Guarda este archivo en un lugar seguro y toma nota de la ruta del archivo. Necesitarás apuntar la variable de entorno **GOOGLE_APPLICATION_CREDENTIALS** a este archivo cuando pases por el proceso de autenticación al inicio de cada nueva sesión de Conversión de Voz a Texto. Este es un paso esencial para autenticar las solicitudes a la Conversión de Voz a Texto. El ID único de la clave aparece junto al nombre de la cuenta de servicio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/10.png" style={{width:1000, height:'auto'}}/></div>

:::note
Por favor, guarda la clave en formato JSON ya que la utilizaremos en un paso posterior.
:::

## Desplegar servicios de conversión de voz a texto en hosts locales

### Paso 6. Descargar el archivo del proyecto

Hemos empaquetado el archivo del proyecto necesario para completar todo el tutorial y puedes descargarlo directamente desde Github usando el botón de abajo, o puedes descargarlo localmente usando el comando Git.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el proyecto</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

```
git clone https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT.git
```

Mientras tanto, puedes copiar el archivo JSON que preparamos en **el paso 5** a la carpeta **NodejsServer** y lo utilizaremos más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/19.png" style={{width:600, height:'auto'}}/></div>


### Paso 7. Configurar la variable de entorno de autenticación

Para configurar tu **GOOGLE_APPLICATION_CREDENTIALS**, debes tener una cuenta de servicio asociada a tu proyecto y acceso a la clave JSON de la cuenta de servicio.

Proporciona las credenciales de autenticación a tu código de aplicación configurando la variable de entorno **GOOGLE_APPLICATION_CREDENTIALS**.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

Para PowerShell:

```
$env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```

Reemplaza **KEY_PATH** con la ruta del archivo JSON que contiene la clave de tu cuenta de servicio.

Por ejemplo:

```
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
```

Para cmd:

```
set GOOGLE_APPLICATION_CREDENTIALS=KEY_PATH
```

Reemplaza **KEY_PATH** con la ruta del archivo JSON que contiene la clave de tu cuenta de servicio.

</TabItem>


<TabItem value="MacOS or Linux" label="MacOS or Linux">

```
export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```


Reemplaza **KEY_PATH** con la ruta del archivo JSON que contiene la clave de tu cuenta de servicio.

Por ejemplo:

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

</TabItem>
</Tabs>

En el paso anterior, colocamos el archivo JSON en la carpeta **NodejsServer**, así que podemos ir directamente a esa carpeta, hacer clic derecho y seleccionar **Abrir en Powershell** para acceder a la terminal de Windows.

Luego, solo ingresa el comando.

```
$env:GOOGLE_APPLICATION_CREDENTIALS="tensile-yen-3xxxxx-fdxxxxxxxxxx.json"
```

:::tip
Por favor, usa el nombre de tu archivo JSON al ejecutar el comando anterior.
:::

:::caution
Si has reiniciado tu computadora o cerrado Powershell, es posible que necesites reconfigurar tus variables de entorno para agregar la clave.
:::

### Paso 8. Probar el despliegue de un servicio local de conversión de voz a texto de Google Cloud

Con todo en su lugar, podemos usar una grabación de audio, combinada con un programa en JSON, para verificar que nuestro despliegue sea exitoso al convertir la grabación en texto.

Por favor, abre una ventana de Powershell en **NodejsServer** en la carpeta del proyecto.

Luego, ingresa el siguiente comando. Este comando ejecutará el archivo `speechAPItest.js` y usará el archivo de grabación en la carpeta de recursos del proyecto como fuente de entrada de audio para enviarlo a Google Cloud para su análisis y devolver el contenido de voz reconocido.

```
node ./speechAPItest.js
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/13.png" style={{width:800, height:'auto'}}/></div>

Si tu implementación funciona como se muestra arriba, esto indica que has desplegado correctamente los servicios de Google Cloud en tu host local y estás listo para continuar con el siguiente paso.

Si encuentras problemas, puedes consultar las [instrucciones oficiales de Google Cloud](https://cloud.google.com/speech-to-text/docs/) para verificar si hay errores o pasos faltantes en el proceso de despliegue.

## Subir archivos de sonido grabados por XIAO ESP32S3 Sense a Google Cloud para su reconocimiento

A continuación, cambiamos la ruta del archivo de audio subido. De una carga local a una carga mediante grabación de XIAO ESP32S3 Sense. Los archivos de audio grabados por el XIAO ESP32S3 Sense se guardan primero en una tarjeta microSD y luego se transfieren a Google Cloud a través del puerto local.

### Paso 9. Activar la escucha del puerto para el servicio de Reconocimiento de Voz de Google Cloud

De manera similar, en la carpeta NodejsServer, usa Powershell para ejecutar el siguiente comando.

```
node ./speechAPIServer.js
```

Una vez ejecutado, el programa **speechAPIServer.js** se ejecutará y escuchará continuamente en `localhost:8888`. Una vez que se transfiera un archivo a este puerto, se llamará al servicio de Google Cloud.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/20.png" style={{width:800, height:'auto'}}/></div>

Una vez que la escucha haya comenzado, solo deja la ventana abierta y el servicio se mantendrá activo.

### Paso 10. Verificar la dirección IP del host

Debido a que los archivos de grabación del XIAO deben subirse a los Servicios de Google Cloud a través del número de puerto del host, necesitamos conocer la dirección IP de tu computadora.



<Tabs>
<TabItem value="Windows" label="Windows">

Ejecuta el siguiente comando en Powershell para obtener información sobre la dirección IP de tu computadora.

```
ipconfig
```

</TabItem>

<TabItem value="MacOS or Linux" label="MacOS or Linux">

Ejecuta el siguiente comando en Powershell para obtener información sobre la dirección IP de tu computadora.

```
ifconfig
```

</TabItem>
</Tabs>

Por favor, toma nota de tu dirección IP ya que la necesitaremos más adelante.

### Paso 11. Subir programas para el XIAO ESP32S3 Sense

En la carpeta del proyecto **[XIAOESP32S3-RECORD-UPLOAD](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino)** hemos preparado el programa para los ejemplos de esta sección.

<details>

<summary>Si tu versión de ESP32 es 2.0.x, haz clic aquí para ver una vista previa del programa completo.</summary>

```cpp
#include <I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

//Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 10      // seconds, The maximum value is 240

// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";

bool isWIFIConnected;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  
  //The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  delay(500);
  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop() {
  // put your main code here, to run repeatedly:
}

void i2s_adc(void *arg)
{
  uint32_t sample_size = 0;

  //This variable will be used to point to the actual recording buffer
  uint8_t *rec_buffer = NULL;
  Serial.printf("Ready to start recording ...\n");

  File file = SD.open(filename, FILE_WRITE);

  // Write the header to the WAV file
  uint8_t wav_header[WAV_HEADER_SIZE];

  //Write the WAV file header information to the wav_header array
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);

  //Call the file.write() function to write the data in the wav_header array to the newly created WAV file
  file.write(wav_header, WAV_HEADER_SIZE);

  // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data.
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Start recording
  // I2S port number (in this case I2S_NUM_0), 
  // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
  // the size of the data to be read (i.e. record_size),
  // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
  // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
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
  rec_buffer = NULL;
  file.close();
  Serial.printf("The recording is over.\n");
    
  listDir(SD, "/", 0);

  if(isWIFIConnected){
    uploadFile();
  }
  
  vTaskDelete(NULL);
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

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  char* ssid = "wifi-ssid";
  char* password = "wifi-password";
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  while(true){
    vTaskDelay(1000);
  }
}

void uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    Serial.println("====================      End      ====================");
  }else{
    Serial.println("Error");
  }
  file.close();
  client.end();
}
```

</details>

<details>

<summary>Si tu versión de ESP32 es 3.0.x, haz clic aquí para ver una vista previa del programa completo.</summary>

```cpp
#include <ESP_I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

//Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 10      // seconds, The maximum value is 240

//define I2S
I2SClass I2S;

// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";

bool isWIFIConnected;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) ;
  
  // setup 42 PDM clock and 41 PDM data pins
  I2S.setPinsPdmRx(42, 41);

  //The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  delay(500);
  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop() {
  // put your main code here, to run repeatedly:
}

void i2s_adc(void *arg)
{
  uint32_t sample_size = 0;

  //This variable will be used to point to the actual recording buffer
  uint8_t *rec_buffer = NULL;
  Serial.printf("Ready to start recording ...\n");

  File file = SD.open(filename, FILE_WRITE);

  // Write the header to the WAV file
  uint8_t wav_header[WAV_HEADER_SIZE];

  //Write the WAV file header information to the wav_header array
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);

  //Call the file.write() function to write the data in the wav_header array to the newly created WAV file
  file.write(wav_header, WAV_HEADER_SIZE);

  // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data.
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Start recording
  // I2S port number (in this case I2S_NUM_0), 
  // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
  // the size of the data to be read (i.e. record_size),
  // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
  // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
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
  rec_buffer = NULL;
  file.close();
  Serial.printf("The recording is over.\n");
    
  listDir(SD, "/", 0);

  if(isWIFIConnected){
    uploadFile();
  }
  
  vTaskDelete(NULL);
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

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  char* ssid = "wifi-ssid";
  char* password = "wifi-password";
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  while(true){
    vTaskDelay(1000);
  }
}

void uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    Serial.println("====================      End      ====================");
  }else{
    Serial.println("Error");
  }
  file.close();
  client.end();
}
```

</details>

Antes de compilar y subir el programa de ejemplo, hay algunos ajustes que necesitarás hacer para adaptarlo a tu situación.

1. **Tiempo de grabación de sonido** - En la [línea 13](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL13C2-L13C2) del código, el tiempo de grabación predeterminado está configurado a 10 segundos. Puedes ajustar este tiempo de grabación según tu necesidad, hasta un máximo de 240 segundos.
2. **Nombre del archivo de grabación guardado** - En la [línea 19](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#L19) del código, puedes cambiar el nombre para tu archivo de grabación.
3. **Nombre de la red WiFi** - Cambia el nombre de la red en la [línea 172](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#L172) del código al nombre de la red que esté bajo la misma LAN que el host donde estás desplegando los Servicios de Google Cloud.
4. **Contraseña de la red WiFi** - En la [línea 172](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL173C5-L173C5) del código, cambia la contraseña correspondiente a la red.
5. **Dirección IP del host** - En la [línea 198](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL198C7-L198C7) del código, necesitas cambiar la dirección IP aquí a la de tu host y mantener el número de puerto en 8888.

Una vez que hayas ajustado el programa según tus necesidades y lo hayas subido, puedes encender el monitor serie y empezar a preparar la grabación de lo que quieras decir. Después de la grabación de diez segundos, Google Cloud analizará tu archivo de grabación y te devolverá los resultados del reconocimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/15.png" style={{width:1000, height:'auto'}}/></div>


## Desplegar ChatGPT en el XIAO ESP32S3 Sense

Ahora aumentamos la dificultad. Continuamos agregando llamadas a ChatGPT al código.

### Paso 12. Hacerle una pregunta a ChatGPT con el texto identificado como pregunta

En la carpeta del proyecto **[XIAOESP32S3-SPEECH-TO-CHATGPT](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino)** hemos preparado el programa para los ejemplos de esta sección.

<details>

<summary>Si tu versión de ESP32 es 2.0.x, haz clic aquí para ver una vista previa del programa completo.</summary>

```cpp
#include <I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // seconds, The maximum value is 240

const char* ssid = "wifi-ssid";
const char* password = "wifi-password";


// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";
bool isWIFIConnected;

String chatgpt_Q;

TaskHandle_t chatgpt_handle;
WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");

//*****************************************Arduino Base******************************************//

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  
  // The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }

  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
  delay(500);
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  xTaskCreate(chatgpt, "chatgpt", 1024 * 8, NULL, 2, &chatgpt_handle);
}

void loop() {
  // put your main code here, to run repeatedly:
}

//*****************************************RTOS TASK******************************************//

void i2s_adc(void *arg)
{
  while(1){
    uint32_t sample_size = 0;
  
    // This variable will be used to point to the actual recording buffer
    uint8_t *rec_buffer = NULL;
    Serial.printf("Ready to start recording ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // Write the header to the WAV file
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // Write the WAV file header information to the wav_header array
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // Call the file.write() function to write the data in the wav_header array to the newly created WAV file
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc failed!\n");
      while(1) ;
    }
    Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // Start recording
    // I2S port number (in this case I2S_NUM_0), 
    // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
    // the size of the data to be read (i.e. record_size),
    // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
    // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
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
    rec_buffer = NULL;
    file.close();
    Serial.printf("The recording is over.\n");
      
    listDir(SD, "/", 0);

    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
    
    if(uploadStatus)
      xTaskNotifyGive(chatgpt_handle);
    vTaskDelay(10000);       // Each recording is spaced 10s apart
  }
//  vTaskDelete(NULL);
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  // Ignore SSL certificate validation
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}

void chatgpt(void *pvParameters){
  while(1){
    // Waiting for notification signal from Task 1
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);

    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", chatgpt_Q, result)) {
      Serial.println("===OK===");
      Serial.println(result);
    } else {
      Serial.println("===ERROR===");
      Serial.println(result);
    }

  }
}

//*****************************************Audio Process******************************************//

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

//*****************************************File Process******************************************//

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

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return false;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    chatgpt_Q = response;
    Serial.println("====================      End      ====================");
    file.close();
    client.end();
    return true;
  }else{
    Serial.println("Error");
    return false;
  }
  
}
```

</details>

<details>

<summary>Si tu versión de ESP32 es 2.0.x, haz clic aquí para ver una vista previa del programa completo.</summary>

```cpp
#include <ESP_I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // seconds, The maximum value is 240

const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

//define I2S
I2SClass I2S;


// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";
bool isWIFIConnected;

String chatgpt_Q;

TaskHandle_t chatgpt_handle;
WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");

//*****************************************Arduino Base******************************************//

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) ;
  
  // setup 42 PDM clock and 41 PDM data pins
  I2S.setPinsPdmRx(42, 41);

  // The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }

  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
  delay(500);
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  xTaskCreate(chatgpt, "chatgpt", 1024 * 8, NULL, 2, &chatgpt_handle);
}

void loop() {
  // put your main code here, to run repeatedly:
}

//*****************************************RTOS TASK******************************************//

void i2s_adc(void *arg)
{
  while(1){
    uint32_t sample_size = 0;
  
    // This variable will be used to point to the actual recording buffer
    uint8_t *rec_buffer = NULL;
    Serial.printf("Ready to start recording ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // Write the header to the WAV file
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // Write the WAV file header information to the wav_header array
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // Call the file.write() function to write the data in the wav_header array to the newly created WAV file
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc failed!\n");
      while(1) ;
    }
    Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // Start recording
    // I2S port number (in this case I2S_NUM_0), 
    // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
    // the size of the data to be read (i.e. record_size),
    // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
    // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
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
    rec_buffer = NULL;
    file.close();
    Serial.printf("The recording is over.\n");
      
    listDir(SD, "/", 0);

    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
    
    if(uploadStatus)
      xTaskNotifyGive(chatgpt_handle);
    vTaskDelay(10000);       // Each recording is spaced 10s apart
  }
//  vTaskDelete(NULL);
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  // Ignore SSL certificate validation
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}

void chatgpt(void *pvParameters){
  while(1){
    // Waiting for notification signal from Task 1
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);

    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", chatgpt_Q, result)) {
      Serial.println("===OK===");
      Serial.println(result);
    } else {
      Serial.println("===ERROR===");
      Serial.println(result);
    }

  }
}

//*****************************************Audio Process******************************************//

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

//*****************************************File Process******************************************//

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

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return false;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    chatgpt_Q = response;
    Serial.println("====================      End      ====================");
    file.close();
    client.end();
    return true;
  }else{
    Serial.println("Error");
    return false;
  }
  
}
```

</details>

De nuevo, antes de usar este programa, tendrás que hacer los siguientes cambios en el código según lo consideres necesario:

1. **Nombre de la red WiFi**: Cambia el nombre de la red en el código [línea 18](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L18) al nombre de la red en el mismo LAN que el host donde estás desplegando los servicios de Google Cloud.
2. **Contraseña de la red WiFi**: En [línea 19](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL19C40-L19C40) del código, cambia la contraseña correspondiente a la red.
3. **Dirección IP del host**: En [línea 241](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL241C7-L241C7) del código, cambia la dirección IP aquí por la de tu host y deja el número de puerto en 8888.
4. **Token de la API de OpenAI**: Como necesitas llamar a la interfaz de ChatGPT, debes preparar el Token de OpenAI y colocarlo en el código [línea 33](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L33). Si es la primera vez que usas tokens, puedes leer el [contenido de este Wiki](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/#submit-questions-via-the-built-in-web-page) para aprender cómo obtenerlos.

Una vez modificados, sube el programa y enciende el monitor serial. Después de grabar, verás la respuesta devuelta por ChatGPT a tu pregunta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/16.png" style={{width:1000, height:'auto'}}/></div>


### Diseño del contenido de la pantalla y la integración de programas

Finalmente, le damos un toque más atractivo. En lugar de usar un monitor serial, que es una interfaz menos adecuada para mostrar efectos, hemos utilizado una pantalla táctil para habilitar las funciones de toque y clic. 

### Paso 13. Usar SquareLine Studio para dibujar pantallas de visualización

SquareLine Studio es una herramienta de diseño de interfaces gráficas (GUI) desarrollada por LVGL, una biblioteca gráfica para sistemas embebidos. SquareLine Studio está diseñado para ayudar a los desarrolladores a crear y diseñar interfaces de usuario para sus sistemas embebidos de manera rápida y eficiente. Proporciona una interfaz de arrastrar y soltar para diseñar interfaces, y soporta diversos widgets y temas.

Te recomendamos usar esta herramienta para diseñar interfaces simples. Si deseas saber más sobre el uso de pantallas redondas en SquareLine Studio, puedes consultar el [Wiki de uso](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display/#drawing-complex-ui-interfaces-with-squareline-studio). 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/21.png" style={{width:1000, height:'auto'}}/></div>

Por razones de espacio, este artículo no entrará en detalles sobre cómo diseñar una página de pantalla, pero proporcionaremos el código del programa exportado que puedes utilizar. Actualmente, se encuentra en la carpeta **ui** dentro de esa [carpeta del proyecto](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/tree/main/ui).

:::caution
Te recomendamos usar la versión **v1.2.3** de SquareLine Studio. Después de realizar pruebas, la versión v1.3.0 puede tener problemas de compatibilidad con la biblioteca tft_eSPI.
:::

El código completo del proyecto final se encuentra en la carpeta **[XIAOESP32S3-SPEECH-CHATGPT-COMPLETE](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-SPEECH-CHATGPT-COMPLETE/XIAOESP32S3-SPEECH-CHATGPT-COMPLETE.ino)**.

<details>

<summary>Si tu versión de ESP32 es 2.0.x, haz clic aquí para ver una vista previa del programa completo.</summary>

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>
#include "ui.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include <I2S.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"


// Import the library for the round display and define the frame used as the TFT display frame
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"


/*Change to your screen resolution*/
static const uint16_t screenWidth  = 240;
static const uint16_t screenHeight = 240;


// Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // seconds, The maximum value is 240


// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;


// Name of the file in which the recording is saved
File file;
const char filename[] = "/recording.wav";


// Network connection status flag
bool isWIFIConnected;


// Answers to the questions chatgpt replied to
String response;


// Flags for different task starts
bool recordTask = false;
bool chatgptTask = false;

WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");   // Please fill in your OpenAI key


// Please change to your network
const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[ screenWidth * screenHeight / 10 ];


//****************************************LVGL****************************************************//

#if LV_USE_LOG != 0
/* Serial debugging */
void my_print(const char * buf)
{
    Serial.printf(buf);
    Serial.flush();
}
#endif

/* Display flushing */
void my_disp_flush( lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p )
{
    uint32_t w = ( area->x2 - area->x1 + 1 );
    uint32_t h = ( area->y2 - area->y1 + 1 );

    tft.startWrite();
    tft.setAddrWindow( area->x1, area->y1, w, h );
    tft.pushColors( ( uint16_t * )&color_p->full, w * h, true );
    tft.endWrite();

    lv_disp_flush_ready( disp );
}

/*Read the touchpad*/
void my_touchpad_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )
{
    // uint16_t touchX = 0, touchY = 0;
    // bool touched = false;//tft.getTouch( &touchX, &touchY, 600 );

    lv_coord_t touchX, touchY;
    chsc6x_get_xy(&touchX, &touchY);

    // if( !touched )
    if(!chsc6x_is_pressed())
    {
        data->state = LV_INDEV_STATE_REL;
    }
    else
    {
        data->state = LV_INDEV_STATE_PR;

        /*Set the coordinates*/
        data->point.x = touchX;
        data->point.y = touchY;

//        Serial.print( "Data x " );
//        Serial.println( touchX );
//
//        Serial.print( "Data y " );
//        Serial.println( touchY );

        // You can also start recording by uncommenting and configuring by clicking on the logo
//        if((touchX < 240 && touchX > 230) && (touchY < 120 && touchY > 100)){
          recordTask = true;
//        }
    }
}

//****************************************Arduino Base****************************************************//

void setup()
{
    Serial.begin( 115200 ); /* prepare for possible serial debug */
//    while(!Serial);

    pinMode(TOUCH_INT, INPUT_PULLUP);
    Wire.begin();

    String LVGL_Arduino = "Hello Arduino! ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();

    Serial.println( LVGL_Arduino );
    Serial.println( "I am LVGL_Arduino" );

    lv_init();

#if LV_USE_LOG != 0
    lv_log_register_print_cb( my_print ); /* register print function for debugging */
#endif

    tft.begin();          /* TFT init */
    tft.setRotation( 0 ); /* Landscape orientation, flipped */

    lv_disp_draw_buf_init( &draw_buf, buf, NULL, screenWidth * screenHeight / 10 );

    /*Initialize the display*/
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init( &disp_drv );
    /*Change the following line to your display resolution*/
    disp_drv.hor_res = screenWidth;
    disp_drv.ver_res = screenHeight;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register( &disp_drv );

    /*Initialize the (dummy) input device driver*/
    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init( &indev_drv );
    indev_drv.type = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register( &indev_drv );

    ui_init();

    I2S.setAllPins(-1, 42, 41, -1, -1);
  
    //The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
        Serial.println("Failed to initialize I2S!");
        while (1) ;
    }

    if(!SD.begin(D2)){
        Serial.println("Failed to mount SD Card!");
        while (1) ;
    }

    Serial.println( "Setup done" );

    // Create a FreeRTOS task to check the connection status of the network at regular intervals.
    xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop()
{
    lv_timer_handler(); /* let the GUI do its work */
    record();
    chatgpt();
    delay(5);
}

//*****************************************Audio Process******************************************//

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

//*****************************************File Process******************************************//

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

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return false;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    const char* chatgpt_Q = response.c_str();
    lv_label_set_text(ui_question, chatgpt_Q);
    Serial.println("====================      End      ====================");
    file.close();
    client.end();
    recordTask = false;
    chatgptTask = true;
    return true;
  }else{
    Serial.println("Error");
    lv_label_set_text(ui_question, "Error");
    recordTask = false;
    chatgptTask = false;
    return false;
  }
}


//*****************************************Main Functions******************************************//

void record(){
  if(recordTask){
    Serial.println("Record Task Begin!!!");
    lv_label_set_text(ui_question, "Recording ...");
    lv_timer_handler();
    uint32_t sample_size = 0;
    
    // This variable will be used to point to the actual recording buffer
    uint8_t *rec_buffer = NULL;
    Serial.printf("Ready to start recording ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // Write the header to the WAV file
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // Write the WAV file header information to the wav_header array
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // Call the file.write() function to write the data in the wav_header array to the newly created WAV file
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data.
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc failed!\n");
      while(1) ;
    }
    Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // Start recording
    // I2S port number (in this case I2S_NUM_0), 
    // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
    // the size of the data to be read (i.e. record_size),
    // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
    // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
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
    rec_buffer = NULL;
    file.close();
    Serial.printf("The recording is over.\n");
    lv_label_set_text(ui_question, "Identifying ...");
    lv_timer_handler();
    listDir(SD, "/", 0);
  
    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
  }
}

void chatgpt(){
  if(chatgptTask){
    Serial.println("ChatGPT Task Begin!!!");
    lv_label_set_text(ui_answer,"Answering ...");
    lv_timer_handler();
    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", response, result)) {
      Serial.println("===OK===");
      Serial.println(result);
      const char* chatgpt_A = result.c_str();
      lv_label_set_text(ui_answer, chatgpt_A);
    } else {
      Serial.println("===ERROR===");
      Serial.println(result);
      lv_label_set_text(ui_answer, "ERROR");
      lv_timer_handler();
    }
    recordTask = false;
    chatgptTask = false;
  }
}

//*****************************************RTOS******************************************//

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  // Ignore SSL certificate validation
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}
```

</details>

<details>

<summary>Si tu versión de ESP32 es 3.0.x, haz clic aquí para ver una vista previa del programa completo.</summary>

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>
#include "ui.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include <ESP_I2S.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"


// Import the library for the round display and define the frame used as the TFT display frame
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"


/*Change to your screen resolution*/
static const uint16_t screenWidth  = 240;
static const uint16_t screenHeight = 240;


// Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // seconds, The maximum value is 240


// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

//define I2S
I2SClass I2S;

// Name of the file in which the recording is saved
File file;
const char filename[] = "/recording.wav";


// Network connection status flag
bool isWIFIConnected;


// Answers to the questions chatgpt replied to
String response;


// Flags for different task starts
bool recordTask = false;
bool chatgptTask = false;

WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");   // Please fill in your OpenAI key


// Please change to your network
const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[ screenWidth * screenHeight / 10 ];


//****************************************LVGL****************************************************//

#if LV_USE_LOG != 0
/* Serial debugging */
void my_print(const char * buf)
{
    Serial.printf(buf);
    Serial.flush();
}
#endif

/* Display flushing */
void my_disp_flush( lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p )
{
    uint32_t w = ( area->x2 - area->x1 + 1 );
    uint32_t h = ( area->y2 - area->y1 + 1 );

    tft.startWrite();
    tft.setAddrWindow( area->x1, area->y1, w, h );
    tft.pushColors( ( uint16_t * )&color_p->full, w * h, true );
    tft.endWrite();

    lv_disp_flush_ready( disp );
}

/*Read the touchpad*/
void my_touchpad_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )
{
    // uint16_t touchX = 0, touchY = 0;
    // bool touched = false;//tft.getTouch( &touchX, &touchY, 600 );

    lv_coord_t touchX, touchY;
    chsc6x_get_xy(&touchX, &touchY);

    // if( !touched )
    if(!chsc6x_is_pressed())
    {
        data->state = LV_INDEV_STATE_REL;
    }
    else
    {
        data->state = LV_INDEV_STATE_PR;

        /*Set the coordinates*/
        data->point.x = touchX;
        data->point.y = touchY;

//        Serial.print( "Data x " );
//        Serial.println( touchX );
//
//        Serial.print( "Data y " );
//        Serial.println( touchY );

        // You can also start recording by uncommenting and configuring by clicking on the logo
//        if((touchX < 240 && touchX > 230) && (touchY < 120 && touchY > 100)){
          recordTask = true;
//        }
    }
}

//****************************************Arduino Base****************************************************//

void setup()
{
    Serial.begin( 115200 ); /* prepare for possible serial debug */
//    while(!Serial);

    pinMode(TOUCH_INT, INPUT_PULLUP);
    Wire.begin();

    String LVGL_Arduino = "Hello Arduino! ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();

    Serial.println( LVGL_Arduino );
    Serial.println( "I am LVGL_Arduino" );

    lv_init();

#if LV_USE_LOG != 0
    lv_log_register_print_cb( my_print ); /* register print function for debugging */
#endif

    tft.begin();          /* TFT init */
    tft.setRotation( 0 ); /* Landscape orientation, flipped */

    lv_disp_draw_buf_init( &draw_buf, buf, NULL, screenWidth * screenHeight / 10 );

    /*Initialize the display*/
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init( &disp_drv );
    /*Change the following line to your display resolution*/
    disp_drv.hor_res = screenWidth;
    disp_drv.ver_res = screenHeight;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register( &disp_drv );

    /*Initialize the (dummy) input device driver*/
    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init( &indev_drv );
    indev_drv.type = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register( &indev_drv );

    ui_init();

    // setup 42 PDM clock and 41 PDM data pins
    I2S.setPinsPdmRx(42, 41);  

    //The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
    if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
        Serial.println("Failed to initialize I2S!");
        while (1) ;
    }

    if(!SD.begin(D2)){
        Serial.println("Failed to mount SD Card!");
        while (1) ;
    }

    Serial.println( "Setup done" );

    // Create a FreeRTOS task to check the connection status of the network at regular intervals.
    xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop()
{
    lv_timer_handler(); /* let the GUI do its work */
    record();
    chatgpt();
    delay(5);
}

//*****************************************Audio Process******************************************//

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

//*****************************************File Process******************************************//

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

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return false;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    const char* chatgpt_Q = response.c_str();
    lv_label_set_text(ui_question, chatgpt_Q);
    Serial.println("====================      End      ====================");
    file.close();
    client.end();
    recordTask = false;
    chatgptTask = true;
    return true;
  }else{
    Serial.println("Error");
    lv_label_set_text(ui_question, "Error");
    recordTask = false;
    chatgptTask = false;
    return false;
  }
}


//*****************************************Main Functions******************************************//

void record(){
  if(recordTask){
    Serial.println("Record Task Begin!!!");
    lv_label_set_text(ui_question, "Recording ...");
    lv_timer_handler();
    uint32_t sample_size = 0;
    
    // This variable will be used to point to the actual recording buffer
    uint8_t *rec_buffer = NULL;
    Serial.printf("Ready to start recording ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // Write the header to the WAV file
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // Write the WAV file header information to the wav_header array
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // Call the file.write() function to write the data in the wav_header array to the newly created WAV file
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data.
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc failed!\n");
      while(1) ;
    }
    Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // Start recording
    // I2S port number (in this case I2S_NUM_0), 
    // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
    // the size of the data to be read (i.e. record_size),
    // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
    // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
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
    rec_buffer = NULL;
    file.close();
    Serial.printf("The recording is over.\n");
    lv_label_set_text(ui_question, "Identifying ...");
    lv_timer_handler();
    listDir(SD, "/", 0);
  
    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
  }
}

void chatgpt(){
  if(chatgptTask){
    Serial.println("ChatGPT Task Begin!!!");
    lv_label_set_text(ui_answer,"Answering ...");
    lv_timer_handler();
    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", response, result)) {
      Serial.println("===OK===");
      Serial.println(result);
      const char* chatgpt_A = result.c_str();
      lv_label_set_text(ui_answer, chatgpt_A);
    } else {
      Serial.println("===ERROR===");
      Serial.println(result);
      lv_label_set_text(ui_answer, "ERROR");
      lv_timer_handler();
    }
    recordTask = false;
    chatgptTask = false;
  }
}

//*****************************************RTOS******************************************//

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  // Ignore SSL certificate validation
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}
```

</details>

Antes de compilar y cargar el programa de ejemplo, hay algunos detalles que necesitarás cambiar para adaptarlo a tu situación.

1. **Nombre de la red WiFi**: Cambia el nombre de la red en el código [línea 18](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L18) al nombre de la red que esté en la misma LAN que el host donde estás desplegando los servicios de Google Cloud.
2. **Contraseña de la red WiFi**: En [línea 19](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL19C40-L19C40) del código, cambia la contraseña correspondiente a la red.
3. **Dirección IP del host**: En [línea 241](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL241C7-L241C7) del código, necesitas cambiar la dirección IP a la de tu host y mantener el número de puerto en 8888.
4. **Token de la API de OpenAI**: Dado que necesitas llamar a la interfaz de ChatGPT, debes preparar el token de OpenAI e ingresarlo en el código en [línea 33](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L33). Si es tu primera vez usando Tokens, puedes leer el [contenido de esta Wiki](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/#submit-questions-via-the-built-in-web-page) para aprender cómo obtenerlos.

Una vez que hayas cargado el programa y hagas clic en la pantalla, comenzará la tarea de grabación, momento en el cual podrás hablar la pregunta que deseas hacer hacia el micrófono. Una vez que el resultado haya sido reconocido, la pregunta se mostrará en la mitad superior de la pantalla. Inmediatamente después, obtendremos la respuesta de ChatGPT, que se mostrará en la parte inferior de la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/22.jpg" style={{width:600, height:'auto'}}/></div>


## Soporte Técnico & Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>





