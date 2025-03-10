---
title: Sensor Integrado de XIAO MG24 Sense de Seeed Studio  
description: Este artículo describe cómo usar el micrófono en el XIAO MG24 Sense.
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /es/xiao_mg24_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 02/16/2025
  author: Guillermo
sidebar_position: 3
---

# Uso del Sensor Integrado de Seeed Studio XIAO MG24 Sense

## XIAO MG24 Sense IMU

### Descripción general de los sensores integrados

Los sensores **IMU de 6 ejes (Unidad de Medición Inercial)** como el **LSM6DS3TR-C** integran acelerómetros y giroscopios para medir el movimiento y la orientación de un objeto en el espacio tridimensional. Específicamente, el LSM6DS3TR-C tiene las siguientes características:

**Función del acelerómetro:**
- Mide la aceleración de un objeto a lo largo de los ejes X, Y y Z. Puede detectar el movimiento del objeto (por ejemplo, reposo, aceleración, desaceleración) y los cambios en la inclinación (por ejemplo, el ángulo del objeto).
- Se puede usar para detectar la marcha, cambios de posición, vibraciones, etc.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**Función del giroscopio (Giroscopio):**
- Mide la velocidad angular de un objeto alrededor de los ejes X, Y y Z, es decir, la rotación del objeto.
- Se puede usar para detectar la rotación, la tasa de rotación y el cambio de dirección.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- El **ángulo del eje X (Roll)** es el ángulo en la dirección de rotación alrededor del eje X.
- El **ángulo del eje Y (Pitch)** es el ángulo en la dirección de rotación alrededor del eje Y.
- El **ángulo del eje Z (Yaw)** es el ángulo en la dirección de rotación alrededor del eje Z.

### Preparación del software

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Haz clic en el enlace de descarga de GitHub para controlar el sensor de seis ejes.

### Implementación del código

```cpp
#include <LSM6DS3.h>
#include <Wire.h>

// Crear una instancia de la clase LSM6DS3
LSM6DS3 myIMU(I2C_MODE, 0x6A);    // Dirección del dispositivo I2C 0x6A
float aX, aY, aZ, gX, gY, gZ;
const float accelerationThreshold = 2.5; // umbral de aceleración significativa en G's
const int numSamples = 119;
int samplesRead = numSamples;

void setup() {
  // coloca tu código de configuración aquí, para que se ejecute una vez:
  Serial.begin(9600);
  while (!Serial);

  pinMode(PD5,OUTPUT);
  digitalWrite(PD5,HIGH);
  // Llamar a .begin() para configurar los IMUs
  if (myIMU.begin() != 0) {
    Serial.println("Error del dispositivo");
  } else {
    Serial.println("aX,aY,aZ,gX,gY,gZ");
  }
}

void loop() {
  // esperar a que ocurra un movimiento significativo
  while (samplesRead == numSamples) {
    // leer los datos de aceleración
    aX = myIMU.readFloatAccelX();
    aY = myIMU.readFloatAccelY();
    aZ = myIMU.readFloatAccelZ();

    // sumar los valores absolutos
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);

    // verificar si está por encima del umbral
    if (aSum >= accelerationThreshold) {
      // restablecer el contador de muestras leídas
      samplesRead = 0;
      break;
    }
  }

  // verificar si se han leído todas las muestras requeridas desde
  // la última vez que se detectó un movimiento significativo
  while (samplesRead < numSamples) {
    // verificar si están disponibles tanto los nuevos datos de aceleración como de giroscopio
    // leer los datos de aceleración y giroscopio

    samplesRead++;

    // imprimir los datos en formato CSV
    Serial.print(myIMU.readFloatAccelX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelZ(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroZ(), 3);
    Serial.println();

    if (samplesRead == numSamples) {
      // añadir una línea vacía si es la última muestra
      Serial.println();
    }
  }
}
```
:::tip

Debido a la actualización de la biblioteca LSM6DS3, si previamente la has añadido al usuario, necesitarás volver a descargar la versión 2.0.4 o superior y agregar el archivo ZIP a Arduino.

:::
### Descripción general de la función
- **Incluir bibliotecas**
  ```cpp
    #include <LSM6DS3.h> 
    #include <Wire.h>
  ```
  - Incluye la biblioteca para la comunicación con el sensor LSM6DS3.
  - Incluye la biblioteca para la comunicación I2C.

- **Crear Instancia del Sensor**
    - `LSM6DS3 myIMU(I2C_MODE, 0x6A)` Crea una instancia de la clase LSM6DS3 para el sensor IMU, especificando el modo de comunicación I2C y la dirección del dispositivo 0x6A.

- **Variables y Constantes**
    - `float aX, aY, aZ, gX, gY, gZ`: Variables para almacenar los datos del acelerómetro y giroscopio.
    - `const float accelerationThreshold = 2.5`: El valor umbral en G's para detectar un movimiento significativo.
    - `const int numSamples = 119`: El número de muestras a recolectar después de detectar un movimiento significativo.
    - `int samplesRead = numSamples`: Inicializa el contador de muestras al número total de muestras, indicando que aún no se ha recolectado ningún dato.

- **Configuraciones Básicas**
  ```cpp
    pinMode(PD5,OUTPUT);
    digitalWrite(PD5,HIGH);
  ```

  - Enciende el pin de habilitación de giroscopio.

- **Procesamiento de datos**
    ```cpp
    aX = myIMU.readFloatAccelX();:
    aY = myIMU.readFloatAccelY();:
    aZ = myIMU.readFloatAccelZ();:
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);
    ``` 

  - Lee la aceleración a lo largo del eje X.
  - Lee la aceleración a lo largo del eje Y.
  - Lee la aceleración a lo largo del eje Z.
  - Calcula la suma de los valores absolutos de los datos de aceleración, `fabs()` Devuelve el valor absoluto.

  ```cpp
    // Comprobar si está por encima del umbral
    if (aSum >= accelerationThreshold) {
      // Restablecer el recuento de lectura de la muestra
      samplesRead = 0;
      break;
    }
  ```
  - - Si la suma de los valores absolutos de la aceleración es mayor o igual al umbral establecido, reinicia el contador de muestras `samplesRead` a 0 y sale del bucle.

- **Verificar datos**
  ```cpp
  while (samplesRead < numSamples) {
    samplesRead++;
    .
    .
    .
    .
    .
    if (samplesRead == numSamples) {
      // Agregue una línea vacía si es la última muestra
      Serial.println();
    }
  }
  ```

  - Ve a otro bucle y verifica si se ha leído el número requerido de muestras.
  - Incrementa el contador de samplesRead.
  - Si se han leído todas las muestras, imprime una línea en blanco para separar la salida de datos.



### Resultados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/six_resutl.png" style={{width:700, height:'auto'}}/></div>

### Mayor

Si deseas más ejemplos de código, haz clic en: **"Archivo" -> Ejemplos -> Seeed Arduino LSM6DS3**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/33.png" style={{width:500, height:'auto'}}/></div>



## Micrófono XIAO MG24 Sense

### Descripción de los Sensores Integrados

**Sensor de Micrófono**, como el **MSM381ACT001**, es un micrófono MEMS (Micro-Electro-Mecánico) diseñado para capturar señales de audio con **alta sensibilidad y bajo ruido**. Específicamente, el MSM381ACT001 tiene las siguientes características:

**Función del Micrófono:**

- Captura las ondas sonoras y las convierte en señales eléctricas, lo que permite la detección de entradas de audio en diversos entornos.
- Tiene un amplio rango de respuesta en frecuencia, típicamente de 20 Hz a 20 kHz, adecuado para diversas aplicaciones de audio, como el reconocimiento de voz y la reproducción de música.

**Características Clave:**

- Alta Sensibilidad: Capaz de detectar sonidos débiles, lo que lo hace ideal para aplicaciones que requieren una captura precisa de audio.
- Bajo Ruido: Diseñado para proporcionar una alta relación señal-ruido (SNR), garantizando una salida de audio clara incluso en entornos ruidosos.
- Tamaño Compacto: La tecnología MEMS permite un factor de forma pequeño, facilitando su integración en dispositivos portátiles como teléfonos inteligentes y dispositivos portátiles.
- Salida Digital: Ofrece opciones de salida de señal digital (por ejemplo, I2S), simplificando la interfaz con procesadores de señales digitales (DSP) y microcontroladores.

### Preparación del Software


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_Mic">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Haz clic en el enlace de descarga de GitHub para activar el sensor de micrófono.

:::tip
Actualmente, necesitamos modificar manualmente el archivo de reemplazo. La biblioteca para descarga directa estará disponible próximamente. Por favor, espera la actualización de nuestra wiki.
:::

- **[Archivos de Reemplazo]** [gsdk.a](https://files.seeedstudio.com/wiki/mg24_mic/gsdk_v2.a)

**Cambio de la ruta del archivo**
  - __/Users/tu_nombre/Library/Arduino15/packages/SiliconLabs/hardware/silabs/2.2.0/variants/xiao_mg24/ble_silabs/__

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/file.png" style={{width:350, height:'auto'}}/></div>


### Implementación del código

```cpp
#include <mic.h>
#if defined(WIO_TERMINAL)
#include "processing/filters.h"
#endif

// Configuraciones
#if defined(WIO_TERMINAL)
#define DEBUG 1                 // Habilitar el pulso del pin durante la ISR  
#define SAMPLES 16000*3
#elif defined(ARDUINO_ARCH_NRF52840)
#define DEBUG 1                 // Habilitar el pulso del pin durante la ISR  
#define SAMPLES 800
#elif defined(ARDUINO_SILABS)
#define DEBUG 1                 // Habilitar el pulso del pin durante la ISR  
#define SAMPLES 800
#endif

mic_config_t mic_config{
  .channel_cnt = 1,
  .sampling_rate = 16000,
  .buf_size = 1600,
#if defined(WIO_TERMINAL)
  .debug_pin = 1                // Alterna cada ISR de DAC (si DEBUG está configurado en 1)
#elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN                // Alterna cada ISR de DAC (si DEBUG está configurado en 1)
#elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN                // Alterna cada ISR de DAC (si DEBUG está configurado en 1)  
#endif
};

#if defined(WIO_TERMINAL)
DMA_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_ARCH_NRF52840)
NRF52840_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_SILABS)
MG24_ADC_Class Mic(&mic_config);
#endif

int16_t recording_buf[SAMPLES];
volatile uint8_t recording = 0;
volatile static bool record_ready = false;

#if defined(WIO_TERMINAL)
FilterBuHp filter;
#endif

void setup() {

  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

  Mic.set_callback(audio_rec_callback);

  if (!Mic.begin()) {
    Serial.println("Error de inicialización del micrófono");
    while (1);
  }

  Serial.println("Inicialización del micrófono completada.");

}

void loop() { 

#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {

    Serial.println("Iniciando la toma de muestras");
    recording = 1;
    record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready)
#endif  
  {
  Serial.println("Toma de muestras finalizada");
  
  for (int i = 0; i < SAMPLES; i++) {
    
  //int16_t sample = filter.step(recording_buf[i]);
  int16_t sample = recording_buf[i];
  Serial.println(sample);
  }
  
  record_ready = false; 
  }
}

static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  
  static uint32_t idx = 0;
  // Copiar las muestras del búfer DMA al búfer de inferencia
#if defined(WIO_TERMINAL)
  if (recording) 
#endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
  
      // Convertir el valor ADC sin signo de 12 bits a un valor de audio PCM de 16 bits (con signo)
#if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
      //recording_buf[idx++] = (int16_t)(buf[i] - 1024) * 16;  
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i];
#endif

      if (idx >= SAMPLES){ 
      idx = 0;
      recording = 0;
      record_ready = true;
      break;
     } 
    }
  }

}
```

### Function Overview




**Configuración de Micrófono**

  ```cpp
  mic_config_t mic_config{
  .channel_cnt = 1,
  .sampling_rate = 16000,
  .buf_size = 1600,
  #if defined(WIO_TERMINAL)
  .debug_pin = 1
  #elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN
  #elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN
  #endif
};
  ```

- **mic_config_t**: Define una estructura de configuración para el micrófono.
  - **channel_cnt**: Establecido en 1 para mono.
  - **sampling_rate**: Establecido en 16000 Hz para la frecuencia de muestreo.
  - **buf_size**: Establecido en 1600 para el tamaño del búfer.
  - **debug_pin**: Establece el pin de depuración según la plataforma, utilizado para la indicación de señales durante la depuración.

**Instanciación del micrófono**

  ```cpp
  #if defined(WIO_TERMINAL)
  DMA_ADC_Class Mic(&mic_config);
  #elif defined(ARDUINO_ARCH_NRF52840)
  NRF52840_ADC_Class Mic(&mic_config);
  #elif defined(ARDUINO_SILABS)
  MG24_ADC_Class Mic(&mic_config);
  #endif
  ```

- **Compilación condicional**: Crea las instancias adecuadas de la clase del micrófono para diferentes plataformas, utilizando la configuración previamente definida.

**Búferes de grabación y banderas**

  ```cpp
  int16_t recording_buf[SAMPLES];
  volatile uint8_t recording = 0;
  volatile static bool record_ready = false;
  ```
  - `recording_buf`: Define un arreglo de SAMPLES para almacenar las muestras de grabación.
  - `recording`: una variable volátil que indica si la grabación está en curso para evitar la optimización por parte del compilador.
  - `record_ready`: una variable volátil estática que indica si la grabación está completa y lista para su procesamiento posterior.

**Ejemplo de Filtro (para WIO Terminal)**

  ```cpp
  #if defined(WIO_TERMINAL)
  FilterBuHp filter;
  #endif
  ```
  - Si estás en el WIO Terminal, crea una instancia de un filtro pasa-altos para el procesamiento del filtro.

**setup**
  ```cpp
  void setup() {
  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

  Mic.set_callback(audio_rec_callback);

  if (!Mic.begin()) {
    Serial.println("Inicialización de micrófono fallida.");
    while (1);
  }

  Serial.println("Micrófono inicializado.");
}
  ```

  - Inicializar el Puerto Serial: Inicia la comunicación serial a una velocidad de 115200 baudios y espera a que el puerto serial esté listo.
  - Configurar el Modo de Pin: En el WIO Terminal, configura los pines clave en modo de entrada con pull-up.
  - Establecer la función de callback: llama a Mic.set_callback(audio_rec_callback) para especificar la función de callback cuando se grabe audio.
  - Inicializar el micrófono: llama a Mic.begin(), si la inicialización falla, imprime un mensaje de error y entra en un bucle muerto.

**loop**

  ```cpp
  void loop() { 
#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {
    Serial.println("Empezando muestreo");
    recording = 1;
    record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready)
#endif  
  {
    Serial.println("Muestreo finalizado");
    
    for (int i = 0; i < SAMPLES; i++) {
      int16_t sample = recording_buf[i];
      Serial.println(sample);
    }
    
    record_ready = false; 
  }
}
  ```

  - Detectar Tecla: En el WIO Terminal, comienza a grabar cuando detecta que se ha presionado una tecla y no está grabando.
  - Muestreo Finalizado: Imprime "Muestreo finalizado" si no se está grabando y `record_ready` está establecido en `true`.
  - Itera a través del buffer de grabación e imprime el valor de cada muestra.

**Función de callback de grabación de audio**

  ```cpp
  static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  static uint32_t idx = 0;
  #if defined(WIO_TERMINAL)
  if (recording) 
  #endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
      #if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
      #elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i];
      #endif

      if (idx >= SAMPLES){ 
        idx = 0;
        recording = 0;
        record_ready = true;
        break;
      } 
    }
  }
}
  ```

  - Función de Callback: Se llama durante la grabación de audio, responsable de copiar las muestras desde el buffer DMA al buffer de grabación.
  - Compilación Condicional: Procesa la entrada utilizando filtros si se está utilizando el WIO Terminal.
  - Convierte los valores ADC sin signo de 12 bits a valores de audio PCM de 16 bits (con signo).
  - Llenado de Muestras: Copia las muestras en `recording_buf` y actualiza el índice `idx`.
  - Finalizar Grabación: Si el número de muestras llenadas alcanza `SAMPLES`, reinicia el índice, marca el final de la grabación y establece `record_ready` en `true`.


### Resultados


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result1.png" style={{width:680, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result.png" style={{width:680, height:'auto'}}/></div>

Aquí está la forma de onda del sonido reconocido, cuando soplas, se puede ver claramente que la amplitud de la oscilación de la forma de onda se hace más grande.

### Más

Si deseas más ejemplos de código, haz clic en: -> **"Ejemplo -> Seeed Arduino Mic"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/34.png" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/35.png" style={{width:500, height:'auto'}}/></div>


## Recursos

### Para Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Seeed Studio 6-Axis IMU(LSM6DS3TR-C) datasheet](https://statics3.seeedstudio.com/fusion/opl/sheets/314040211.pdf)
- 📄 **[PDF]** [Seeed Studio Analog Microphone(MSM381ACT001) datasheet](https://files.seeedstudio.com/wiki/mg24_mic/312030602_MEMSensing_MSM381ACT001_Datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
