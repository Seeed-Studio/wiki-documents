---
description: Monitoreo de Respiración Durante el Sueño con mmWave de 24GHz
title: Monitoreo de Respiración Durante el Sueño con mmWave de 24GHz
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR24BSD1
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

# Sensor mmWave de 24GHz - Monitoreo de Respiración Durante el Sueño (MR24BSD1)

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Introducción

El módulo de radar de 24GHz MR24BSD1 aplica la teoría de detección Doppler para implementar el monitoreo de la calidad del sueño humano proporcionando un entorno de detección completamente privado y seguro, independiente de otras influencias ruidosas. Es un sistema de radar sensor útil con protección de privacidad y seguridad en aplicaciones de hogar inteligente como alarma de seguridad del sueño, detección respiratoria del sueño.

### Aplicación

- Hogar Inteligente
- Hotel Inteligente
- Monitor de Calidad del Sueño Humano

### Características

- Teoría habilitada: Implementa detección basada en tecnología de radar Doppler mmWave de 24GHz
- Detección de signos vitales: Detecta simultáneamente personas en movimiento y estacionarias, detecta respiración del sueño para monitorear la calidad del sueño humano
- Protección perfecta de privacidad: Aplica tecnología de monitoreo mmWave para proporcionar capacidades de vigilancia sin identificación
- Estado de funcionamiento saludable: Potencia de salida tan baja como para ser inofensiva para el cuerpo humano
- Alta estabilidad: Independiente de temperatura, humedad, ruido, flujo de aire, polvo, luz y otras influencias ambientales
- Radar de alta flexibilidad: Soporta desarrollo secundario y se adapta a varias aplicaciones de escenarios

### Especificaciones

| Parámetros de operación                    |  Valor mínimo |  Valores típicos |  Valor máximo |  Unidad |
|--------------------------------------------|---------------|------------------|---------------|---------|
|  Voltaje de operación (VCC)                |  4.5          |  5.0             |  6            |  V      |
|  Corriente de operación (ICC)              |  90           |  93              |  100          |  mA     |
|  Corriente de Entrada/Salida de E/S de Operación (IIO) |  -            |  8               |  20           |  mA     |
|  Temperatura de operación (TOP)            |  -20          |  -               |  +60          |  ℃      |
|  Temperatura de almacenamiento (TST)       |  -40          |  -               |  +80          |  ℃      |

## Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Radar de Monitoreo de Respiración Durante el Sueño.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/pihnout.png"/></div>

:::note
    Tenemos algunas actualizaciones sobre el hardware.
:::

1. Hay una resistencia utilizada para filtrado RC. Dado que no se usa en el módulo según nuestras pruebas, ha sido removida.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd.png"/></div>

2. Dado que removimos el LED del módulo, la resistencia aquí del circuito limitador también ha sido cancelada.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd2.png"/></div>

## Primeros Pasos

## Descripción General de la Librería de Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

El código de la librería utilizado en este ejemplo se puede descargar haciendo clic en el ícono de abajo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `void recvRadarBytes()` —— Esta función toma la longitud del frame actual devuelto por el radar. Los frames se almacenan en un array según esa longitud.
**Parámetros de entrada:** Ninguno
**Valor de retorno:** Ninguno

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— Los datos devueltos por el radar contienen una gran cantidad de datos físicos. El usuario tiene la flexibilidad de ajustar la información de movimiento detectada basándose en los datos de señal y el algoritmo de decodificación proporcionado por la función. El contenido del juicio será enviado a través del puerto serie.
**Parámetros de entrada:**
  - `byte inf[]` —— Frames de datos enviados por el radar.
  - `float Move_min` —— Determinar el umbral del usuario estando en un estado estacionario o desocupado.
  - `float Move_max` —— Determinar el valor umbral para que el usuario esté en un estado estacionario o un estado donde alguien está en movimiento.

    **Valor de retorno:** Ninguno
    Acerca de la descripción de los parámetros de señal: Teóricamente, los valores calculados de los parámetros de señal van de **0 a 100**. Cuando el valor calculado es **0**, significa que **no se detecta a nadie** en el entorno circundante. Cuando el valor calculado es **1**, significa que se detecta que el entorno está ocupado y en un **estado estacionario**. Un valor calculado de **2 a 100** indica que se detecta que los alrededores están ocupados y **activos**.

- `void Situation_judgment(byte inf[])` —— Esta función detecta si el cuerpo humano se está acercando o alejando de la ubicación donde se encuentra el radar y determina el movimiento del cuerpo humano, según el algoritmo interno del radar. Esta información será enviada a través del puerto serie.
**Parámetros de entrada:**
  - `byte inf[]` —— Frames de datos enviados por el radar.

    **Valor de retorno:** Ninguno

- `void Sleep_inf(byte inf[])` —— Esta función completa la decodificación de la información de sueño devuelta por el radar e imprime los resultados de la detección del radar a través del puerto serie. La información de sueño incluye: frecuencia respiratoria, condiciones respiratorias, juicio de escena, condiciones y calidad del sueño, y duración del sueño, etc.
**Parámetros de entrada:**
  - `byte inf[]` —— Frames de datos enviados por el radar.

    **Valor de retorno:** Ninguno

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— Esta función se utiliza para generar suma de verificación CRC16.
**Parámetros de entrada:**
  - `unsigned char *lpuc_Frame` —— El frame de datos que deseas enviar al radar (sin incluir el frame de suma de verificación final de 2 Bytes).
  - `unsigned short int lus_Len` —— La longitud del frame de datos que deseas enviar al radar.

    **Valor de retorno:** Dígito de verificación de tipo entero de 2 Bytes.

- `void SleepTimeCalculate(unsigned char sleeptime[])` —— Esta función se utiliza para analizar los frames de datos devueltos por el radar en tiempo de sueño. El tiempo de sueño se imprime a través del puerto serie.
**Parámetros de entrada:**
  - `unsigned char sleeptime[]` —— Los datos de duración del sueño de 4 Bytes devueltos por el radar.

    **Valor de retorno:** Ninguno

- `void SerialInit()` —— Establece la velocidad de baudios del puerto serie del radar a 9600. Si es una placa Seeeduino, establece el puerto serie suave a RX: 2, TX: 3.
**Parámetros de entrada:** Ninguno
**Valor de retorno:** Ninguno

### Variables Predeterminadas

```c
#define MESSAGE_HEAD 0x55       //Data frame header
#define ACTIVE_REPORT 0x04      //Proactive reporting

#define REPORT_RADAR 0x03       //Report radar information
#define REPORT_OTHER 0x05       //Report other information

#define HEARTBEAT 0x01          //Heartbeat Pack
#define ABNOEMAL 0x02           //Abnormal Reset
#define ENVIRONMENT 0x05        //Environment
#define BODYSIGN 0x06           //Physical parameters
#define CLOSE_AWAY 0x07         //Approach away

#define CA_BE 0x01              //Approach away head frame
#define CA_CLOSE 0x02           //Someone approaches
#define CA_AWAY 0x03            //Some people stay away
#define SOMEBODY_BE 0x01        //Motion state header frame
#define SOMEBODY_MOVE 0x01      //Somebody move
#define SOMEBODY_STOP 0x00      //Somebody stop
#define NOBODY 0x00             //No one here

#define SLEEP_INF 0x05          //Sleep radar data header frames
#define BREATH 0x01             //Breathing parameters
#define SCENARIO 0x03           //Scenario evaluation
#define SLEEP_TIME 0x04         //Duration parameters
#define SLEEP_QUALITY 0x05      //Sleep quality

#define BREATH_RATE 0x01        //Breathing rate
#define CHECK_SIGN 0x04         //Detection signal

#define BREATH_HOLD 0x01        //Breath-holding abnormalities
#define BREATH_NULL 0x02        //None
#define BREATH_NORMAL 0x03      //Normal breathing
#define BREATH_MOVE 0x04        //Movement abnormalities
#define BREATH_RAPID 0x05       //Acute respiratory abnormalities

#define CLOSE_AWAY_BED 0x07     //Getting in and out of bed judgment
#define SLEEP_STATE 0x08        //Sleep state judgment

#define AWAY_BED 0x00           //Leaving the bed
#define CLOSE_BED 0x01          //Get into bed

#define AWAKE 0x00              //sleep state:Awake
#define LIGHT_SLEEP 0x01        //sleep state:Light sleep
#define DEEP_SLEEP 0x02         //sleep state:deep sleep
#define SLEEP_NULL 0x03         //no sleep state

#define AWAKE_TIME 0x01         //Awake time
#define LIGHT_SLEEP_TIME 0x02   //Light sleep time
#define DEEP_SLEEP_TIME 0x03    //Deep sleep time

#define SLEEP_SCORE 0x01        //Sleep quality score

const byte MsgLen = 12;         //Data frame maximum length value
byte dataLen = 12;              //Real data frame length
byte Msg[12];                   //Set a fixed array to receive the first data
boolean newData = false;        //Controlling the reception of a new set of data
```

### Instalación

**Paso 1.** Necesitas instalar un software de Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Ejecuta la aplicación de Arduino.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona el modelo de tu placa de desarrollo y añádela al IDE de Arduino.

- Si quieres usar **Seeeduino V4.2** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para completar la adición.

- Si quieres usar **Seeeduino XIAO** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software) para completar la adición.

- Si quieres usar **XIAO RP2040** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup) para completar la adición.

- Si quieres usar **XIAO BLE** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup) para completar la adición.

**Paso 4.** Instala la biblioteca de código de Arduino.

Comienza obteniendo la base de código desde [GitHub](https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar) y descargándola a tu computadora local.

Dado que has descargado la biblioteca zip, abre tu IDE de Arduino, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Ejemplo de Arduino

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro XIAO BLE para ver cómo se comporta.

### Materiales Requeridos

Antes de completar los siguientes ejemplos, necesitarás preparar los siguientes materiales.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor de Radar mmWave de 24GHz**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=c2e8ac7c8c6fb3833f49a1a3b5083a04&objectID=5304&indexName=bazaar_retailer_products)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cable de Cinta de 2mm a 2.54mm de Paso**|

**Paso 1.** Conecta el dispositivo a la computadora a través de la placa principal. El diagrama de cableado se muestra en la tabla a continuación.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor de Radar</td>
      <td align="center" />
      <td align="center">Placa Principal</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>

<br />

**Paso 2.** En la barra de menú en la esquina superior izquierda del IDE de Arduino, selecciona **herramientas**, elige el tipo de placa de desarrollo que estás usando y selecciona el puerto serie correspondiente.

:::tip
Si estás usando **MacOS**, el nombre del puerto serie del dispositivo a menudo comenzará con **/dev/cu.usbmodem xxx**, terminando con el nombre del dispositivo. Si estás usando **Windows**, el nombre del puerto serie del dispositivo a menudo comenzará con **COM**, nuevamente terminando con el nombre del dispositivo.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

En este ejemplo, demostraremos cómo funciona el radar con nuestro producto popular XIAO BLE.

### Demo1 Decodificar la salida de datos del algoritmo integrado del radar para el estado del entorno

El radar tiene un conjunto completo de algoritmos integrados que pueden generar directamente las condiciones ambientales obtenidas por el juicio del radar. Esta rutina describirá cómo imprimir las condiciones ambientales detectadas por el radar directamente a través del puerto serie mediante código.

El código en este ejemplo es el siguiente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/4.png"/></div>

```cpp
//Human_State_Data_Decoding_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Situation_judgment(dataMsg);         //Use radar built-in algorithm to output human motion status
  }
}
```

En el código `setup()`, activamos el **puerto Serial** y el **puerto Serial1** en el XIAO BLE. Serial se usa para la impresión de datos y Serial1 se usa para la comunicación entre el XIAO BLE y el radar. Según la velocidad de baudios del radar, establecemos la velocidad de baudios de ambos puertos serie a 9600. Cuando esté listo, el monitor serie imprimirá **Ready**.

```c
radar.recvRadarBytes();
if (radar.newData == true) {
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;
    frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];
    radar.newData = false;
}
```

En el bucle, primero usamos la función `recvRadarBytes()` para almacenar los datos enviados por el radar en un array de longitud fija `Msg[12]`. Debido a la complejidad de los datos del radar, un solo array de longitud fija no es suficiente para nuestra tarea de procesamiento de datos, por lo que necesitamos un array que pueda redimensionarse para almacenar el conjunto de datos según la longitud actual del marco de datos. Aquí es donde entra en juego el array `dataMsg[dataLen]`, viendo que `dataLen` es la longitud real del marco de datos actual.

```c
radar.Situation_judgment(dataMsg);
```

Cuando la lista dataMsg se obtiene completamente, se utilizará como parámetro de la función `Situation_judgment()` para completar la salida de los datos de monitoreo ambiental, y el resultado de salida se imprimirá directamente en el monitor serie.

Sube el programa. Abrir tu monitor serie con una velocidad de baudios de 9600 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
Si no ves datos después de abrir el monitor serie, puede ser normal. La adquisición de esta parte de los datos del radar depende de los cambios en el movimiento humano dentro del rango de monitoreo del radar. Solo cuando el movimiento de la persona dentro del rango cambia, el radar enviará datos, y solo entonces se imprimirán los datos.
:::

    Si quieres ver qué datos devuelve el radar, puedes descomentar `radar.ShowData(dataMsg);`, que mostrará el conjunto completo de tramas de datos recibidas a través del monitor serie.

### Demo2 Obtención del movimiento humano usando análisis de parámetros característicos

Entre la gran cantidad de datos devueltos por el radar, la información sobre datos físicos constituye la mayoría de la información. A veces, la dependencia excesiva de los propios algoritmos del radar puede producir resultados menos que satisfactorios en algunos escenarios. Entonces, podemos elegir usar la información devuelta por el radar para hacer ajustes adecuados según los escenarios de aplicación reales.

El código en este ejemplo es el siguiente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.png"/></div>

```cpp
//Physical_Parameters_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Bodysign_judgment(dataMsg, 1, 15); //Output of human movement using sign parameters
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

Una vez que se obtiene el array dataMsg, podemos pasar los datos de este array como el primer argumento a la función `Bodysign_judgment()`, que analiza los parámetros de signos vitales.

El segundo y tercer parámetros de la función `Bodysign_judgment()` son los valores críticos para juzgar entre desocupado y cuerpo humano en reposo, y los valores críticos para el cuerpo humano en reposo y en movimiento, respectivamente.

(1, 15) significa que cuando el valor calculado de los signos vitales es menor que 1, se muestra que no hay nadie en el entorno. Cuando el valor somático es mayor o igual a 1 y menor que 15, la salida es que el entorno actual está ocupado por alguien en estado estacionario. Cuando el valor de los signos vitales es mayor o igual a 35, muestra que hay alguien moviéndose en el entorno.

Sube el programa. Abrir tu monitor serie a una velocidad de baudios de 9600 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
Los valores que siguen al marco de datos de salida representan los valores de signos vitales calculados.
:::

### Demo 3 Obtener datos de detección de sueño

La detección de sueño como función especial del radar de respiración y sueño de 24GHz, podemos completar la salida de datos de detección mediante el siguiente ejemplo de código.

El código en este ejemplo es el siguiente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/6.png"/></div>

```cpp
//Sleep_Breathing_Data_Decoding.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Sleep_inf(dataMsg);                  //Sleep information output
  }
}
```

```c
radar.Sleep_inf(dataMsg);
```

Cuando la lista dataMsg se obtiene completamente, se utilizará como parámetro de la función `Sleep_inf()` para completar la salida de los datos de monitoreo del sueño, y el resultado de salida se imprimirá directamente en el monitor serie.

Sube el programa. Abrir tu monitor serie con una velocidad de baudios de 9600 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/7.png"/></div>

### Demo 4 Enviando datos al radar

El radar abre una gran cantidad de interfaces para que obtengamos información y para configurar la sensibilidad del radar o la escena. Esta rutina instruirá al usuario sobre cómo usar el manual del usuario para enviar mensajes de datos al radar para ajustar los parámetros del radar o para obtener la información de datos deseada.

**Paso 1.** Obtener tramas de datos basadas en la consulta deseada.

Descarga el [manual del usuario](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) en el área de Recursos, y en el **Capítulo 8.2**, encuentra el contenido de las tramas que necesitas consultar o configurar, y organízalas.

En este ejemplo, asumiendo que quieres consultar el ID del dispositivo radar, deberías poder obtener el código de función deseado, código de dirección 1 y código de dirección 2.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**Paso 2.** Abre el código de ejemplo en Arduino IDE.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

El código en este ejemplo es el siguiente.

```c
//CRC_Checksum_Generation.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;
char buff[30];

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
  //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
  unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
  
  unsigned int length = sizeof(data)/sizeof(unsigned char);
  unsigned char datas[length + 2];
  for (int n = 0; n < length; n++)datas[n] = data[n];
  unsigned short int crc_data = radar.us_CalculateCrc16(data, length);
  sprintf(buff, "The CRC16 values is: %04x", crc_data);
  Serial.println(buff);
  datas[length] = (crc_data & 0xff00) >> 8;
  datas[length+1] = crc_data & 0xff;
  Serial.print("The datas send to the radar: ");
  for (int n = 0; n < length + 2; n++){
    char buffsend[1];
    sprintf(buffsend, "0x%02x ", datas[n]);
    Serial.print(buffsend);
  }
  Serial.println();
  delay(6000);
}
```

**Paso 3.** Modifica el contenido del marco de datos para generar el marco de datos completo enviado al radar.

Lo que necesitamos modificar es el array `data[]` en el bucle.

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

Los lugares que necesitamos modificar son el segundo elemento, del cuarto al último elemento. La trama de cabecera 0x55 es fija y no necesita ser modificada. La segunda trama es la trama de longitud, por favor modifícala según la longitud de los datos que envíes. La tercera trama es fija a 0x00. La cuarta trama es el código de función, la quinta trama es el código de dirección 1, y así sucesivamente.

:::tip
Acerca del método de cálculo de la trama de longitud:<br />
Longitud = Longitud de Datos + Código de Función + Código de Dirección 1 + Código de Dirección 2 + Datos + Suma de Verificación. (Las tramas de cabecera no se cuentan)

Consulta el Capítulo 8 del [manual de usuario](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) para más información sobre formatos y reglas de tramas.
:::

Sube el programa. Abrir tu monitor serie a una velocidad de baudios de 9600 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

Los datos completos que necesitan ser enviados al radar se mostrarán en el monitor serie.

**Otras formas**

Si no quieres usar ningún maestro para generar tramas de datos completas, también puedes pegar este código de abajo en un editor que pueda ejecutar programas C. Sigue el procedimiento anterior y llena los datos del array con el contenido de tus tramas.

```c
#include <stdio.h>

const unsigned char cuc_CRCHi[256]= {
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40
};

const unsigned char  cuc_CRCLo[256]= {
  0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7,
  0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E,
  0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09, 0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9,
  0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC,
  0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
  0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32,
  0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D,
  0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A, 0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38,
  0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF,
  0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
  0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1,
  0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4,
  0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F, 0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB,
  0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA,
  0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
  0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0,
  0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97,
  0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C, 0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E,
  0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89,
  0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
  0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83,
  0x41, 0x81, 0x80, 0x40
};

static unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len){
  unsigned char luc_CRCHi = 0xFF;
  unsigned char luc_CRCLo = 0xFF;
  int li_Index=0;
  while(lus_Len--){
    li_Index = luc_CRCLo ^ *( lpuc_Frame++);
    luc_CRCLo = (unsigned char)( luc_CRCHi ^ cuc_CRCHi[li_Index]);
    luc_CRCHi = cuc_CRCLo[li_Index];
  }
  return (unsigned short int )(luc_CRCLo << 8 | luc_CRCHi);
}

int main() {
    //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
    unsigned char data[] = {0x55, 0x07, 0x00, 0x01, 0x01, 0x01};

    unsigned short int crc_data = 0x0000;
    unsigned int length = sizeof(data)/sizeof(unsigned char);
    unsigned char datas[length + 2];
    for (int n = 0; n < length; n++)datas[n] = data[n];
    printf("The data frame length is: %d\n", length);
    crc_data = us_CalculateCrc16(data, length);
    datas[length] = (crc_data & 0xff00) >> 8;
    datas[length+1] = crc_data & 0xff;
    printf("The last two CRC check digits are: %04x\n", crc_data);
    printf("The datas send to the radar: ");
    for (int n = 0; n < length + 2; n++){
        printf("0x%02x ", datas[n]);
    }
    printf("\n");
    return 0;
}
```

Después de la ejecución del editor, también es posible generar los marcos de datos completos que necesitan ser enviados al radar.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**Paso 4.** Enviar marcos de datos al radar.

Conecta el radar directamente al puerto USB de la computadora a través de un [**dispositivo UART a USB**](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products). El cableado se muestra en la tabla a continuación.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/22.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor de Radar</td>
      <td align="center" />
      <td align="center">Placa Principal</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

Usa un software como asistente de depuración serial para seleccionar el puerto serie donde se encuentra el radar.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
El radar de 24GHz necesita una fuente de alimentación de 5V, de lo contrario el radar puede no funcionar correctamente.
:::

Después de una conexión exitosa, verás el radar enviando un flujo constante de mensajes.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

Pega la trama de datos completa que obtuvimos en el **paso 3** en el área de envío del software. Luego haz clic en Enviar.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

Puedes buscar un conjunto de datos devueltos con el tercer elemento siendo 0x03. Este conjunto de datos es la información obtenida después de la consulta. Si envías datos que ajustan los parámetros del radar, también devolverá dicha información.

:::caution
Si eliges **ASCII** como formato para enviar datos, cada conjunto de datos necesita tener el prefijo **0x**. Si eliges **HEX**, entonces cada conjunto de datos no necesita tener el prefijo **0x**.
:::

## Solución de problemas

**FAQ1: ¿Cómo aplicar el código a Seeeduino (o Arduino)?**

> Debido al diferente diseño de hardware, el puerto serie de la serie XIAO o Wio Terminal se llama Serial1, mientras que Seeeduino o Arduino necesitan usar puerto serie suave. Si quieres usar el radar para Seeeduino, puedes cambiar el puerto serie suave o usar los pines 2 (RX) y 3 (TX).
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: ¿Qué debo hacer si XIAO BLE y el Radar recopilan datos durante mucho tiempo y no pueden cargar el código?**

> En este momento, puedes usar tu dedo para presionar ligeramente el botón de reinicio en la parte superior de XIAO BLE para volver a cargar el programa y ejecutarlo.

## Recursos

- **[PDF]** [Hoja de datos del Sensor de Radar de Respiración durante el Sueño](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_Datasheet.pdf)
- **[PDF]**    [Manual de Usuario del Sensor de Radar de Respiración durante el Sueño de 24GHz](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_User_Manual.pdf)
- **[ZIP]** [Esquemático respiratorio de 24GHz](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PPTX]** [Serie de sensores mmWave de Seeed V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

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
