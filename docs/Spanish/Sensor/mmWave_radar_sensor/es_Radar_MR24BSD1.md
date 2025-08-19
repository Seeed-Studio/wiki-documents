---
description: 24GHz mmWave Sleep Breathing Monitoring
title: Sensor mmWave 24GHz - Monitor de Respiración Durante el Sueño
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR24BSD1
last_update:
  date: 07/18/2025
  author: Guillermo
---

# Sensor mmWave 24GHz - Monitor de Respiración Durante el Sueño (MR24BSD1)

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
  </a>
</div>

## Introducción

El módulo radar MR24BSD1 de 24GHz aplica la teoría Doppler para implementar monitoreo de la calidad del sueño humano, proporcionando un entorno de detección totalmente privado y seguro, independiente de otras interferencias ruidosas. Es un sistema de sensor radar útil y protegido para aplicaciones de hogar inteligente como alarma de seguridad para el sueño y detección respiratoria durante el sueño.

### Aplicaciones

- Hogar inteligente
- Hotel inteligente
- Monitor de calidad del sueño humano

### Características

- Teoría habilitada: Implementa detección basada en tecnología radar Doppler mmWave de 24GHz
- Detección de signos vitales: Detecta simultáneamente personas en movimiento y estacionarias, detecta respiración durante el sueño para monitorear calidad del sueño
- Protección perfecta de la privacidad: Aplica tecnología de monitoreo mmWave para ofrecer capacidades de vigilancia sin identificación personal
- Estado de funcionamiento amigable para la salud: Potencia de salida baja y sin daño para el cuerpo humano
- Alta estabilidad: Independiente de temperatura, humedad, ruido, flujo de aire, polvo, luz y otras influencias ambientales
- Radar altamente flexible: Soporta desarrollo secundario y se adapta a diversas aplicaciones y escenarios

### Especificaciones

| Parámetros de operación                      | Valor mínimo | Valor típico | Valor máximo | Unidad |
|---------------------------------------------|--------------|--------------|--------------|--------|
| Voltaje de operación (VCC)                   | 4.5          | 5.0          | 6            | V      |
| Corriente de operación (ICC)                  | 90           | 93           | 100          | mA     |
| Corriente de entrada/salida I/O (IIO)         | -            | 8            | 20           | mA     |
| Temperatura de operación (TOP)                 | -20          | -            | +60          | ℃      |
| Temperatura de almacenamiento (TST)            | -40          | -            | +80          | ℃      |

## Visión General del Hardware

Antes de comenzar, es fundamental conocer algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del radar para monitoreo de respiración durante el sueño.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/pihnout.png"/></div>

:::note
    Tenemos algunas actualizaciones sobre el hardware.
:::

1. Hay una resistencia usada para filtrado RC. Como no se utiliza en el módulo según nuestras pruebas, ha sido removida.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd.png"/></div>

2. Al eliminar el LED del módulo, también se canceló el circuito limitador de resistencia relacionado.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd2.png"/></div>

## Primeros Pasos

## Resumen de la Librería Arduino

:::tip
Si es tu primera vez usando Arduino, te recomendamos revisar [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

El código de la librería utilizado en este ejemplo puede descargarse haciendo clic en el icono a continuación.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### Funciones

Antes de empezar a desarrollar un sketch, veamos las funciones disponibles en la librería.

- `void recvRadarBytes()` —— Esta función toma la longitud del frame actual retornado por el radar. Los frames se almacenan en un arreglo según esa longitud.  
**Parámetros de entrada:** Ninguno  
**Valor de retorno:** Ninguno

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— Los datos retornados por el radar contienen gran cantidad de información física. El usuario tiene flexibilidad para ajustar la información de movimiento detectada con base en los datos de signos y el algoritmo de decodificación provisto por esta función. El contenido del juicio se enviará por el puerto serial.  
**Parámetros de entrada:**  
  - `byte inf[]` —— Frames de datos enviados por el radar.  
  - `float Move_min` —— Umbral para determinar que el usuario está en estado estacionario o ausencia.  
  - `float Move_max` —— Umbral para determinar que el usuario está en estado estacionario o en movimiento.  

  **Valor de retorno:** Ninguno  
  Sobre los parámetros de signo: Teóricamente, los valores calculados varían entre **0 y 100**. Un valor **0** indica que **no hay nadie** detectado en el entorno. Un valor **1** indica que el entorno está ocupado y en estado **estacionario**. Valores entre **2 y 100** indican que el entorno está ocupado y **activo**.

- `void Situation_judgment(byte inf[])` —— Esta función detecta si una persona se acerca o se aleja del radar, determinando el movimiento del cuerpo según el algoritmo del radar. La información se envía por el puerto serial.  
**Parámetros de entrada:**  
  - `byte inf[]` —— Frames de datos enviados por el radar.  

  **Valor de retorno:** Ninguno

- `void Sleep_inf(byte inf[])` —— Esta función decodifica la información de sueño retornada por el radar y muestra los resultados de detección por el puerto serial. La información de sueño incluye: frecuencia respiratoria, condiciones respiratorias, juicio de escena, condiciones y calidad del sueño, duración del sueño, etc.  
**Parámetros de entrada:**  
  - `byte inf[]` —— Frames de datos enviados por el radar.  

  **Valor de retorno:** Ninguno

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— Esta función genera un checksum CRC16.  
**Parámetros de entrada:**  
  - `unsigned char *lpuc_Frame` —— Frame de datos a enviar al radar (sin incluir los 2 bytes finales de checksum).  
  - `unsigned short int lus_Len` —— Longitud del frame de datos a enviar.  

  **Valor de retorno:** Dígito de chequeo de 2 bytes tipo entero.

- `void SleepTimeCalculate(unsigned char sleeptime[])` —— Esta función parsea los frames de datos de duración del sueño retornados por el radar e imprime el tiempo de sueño por el puerto serial.  
**Parámetros de entrada:**  
  - `unsigned char sleeptime[]` —— Datos de duración de sueño de 4 bytes retornados por el radar.  

  **Valor de retorno:** Ninguno

- `void SerialInit()` —— Configura la velocidad del puerto serial del radar a 9600 baudios. Si se usa una placa Seeeduino, configura el puerto serial software en RX: 2, TX: 3.  
**Parámetros de entrada:** Ninguno  
**Valor de retorno:** Ninguno

### Variables por defecto

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

**Paso 1.** Necesitas instalar el software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Abre la aplicación Arduino.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona el modelo de tu placa de desarrollo y añádelo al Arduino IDE.

- Si quieres usar **Seeeduino V4.2** para las siguientes rutinas, consulta [este tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) para completar la instalación.

- Si quieres usar **Seeeduino XIAO**, consulta [este tutorial](https://wiki.seeedstudio.com/Seeed-XIAO/#software) para completar la instalación.

- Si quieres usar **XIAO RP2040**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup) para completar la instalación.

- Si quieres usar **XIAO BLE**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) para completar la instalación.

**Paso 4.** Instala la librería Arduino.

Descarga el código fuente desde [GitHub](https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar) a tu computadora local.

Una vez descargado el archivo zip de la librería, abre el Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**, selecciona el archivo zip descargado y, si la instalación es correcta, verás el mensaje **Library added to your libraries** en la ventana de notificaciones, lo que indica que la librería se ha instalado exitosamente.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Ejemplo Arduino

Ahora que tenemos la librería instalada y entendemos las funciones básicas, probemos algunos ejemplos con nuestro XIAO BLE para ver cómo funciona.

### Materiales requeridos

Antes de comenzar los siguientes ejemplos, necesitas preparar los siguientes materiales.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>| <div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor Radar 24GHz mmWave**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=c2e8ac7c8c6fb3833f49a1a3b5083a04&objectID=5304&indexName=bazaar_retailer_products)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cable tipo cinta 2mm a 2.54mm**|

**Paso 1.** Conecta el dispositivo al ordenador mediante la placa principal. El diagrama de conexiones se muestra en la siguiente tabla.

<table align="center">
  <tbody><tr>
      <td colspan="4"><div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor Radar</td>
      <td align="center"> </td>
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

**Paso 2.** En la barra de menú superior izquierda del Arduino IDE, selecciona **Herramientas**, elige el tipo de placa de desarrollo que estás usando y selecciona el puerto serial correspondiente.

:::tip
Si usas **MacOS**, el nombre del puerto serial suele comenzar con **/dev/cu.usbmodemxxx**, terminando con el nombre del dispositivo. Si usas **Windows**, el puerto serial suele comenzar con **COM**, seguido del nombre del dispositivo.
:::

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

En este ejemplo, mostraremos cómo funciona el radar con nuestro popular producto XIAO BLE.

### Demo1: Decodificar datos del algoritmo interno del radar que indican el estado ambiental

El radar tiene un conjunto completo de algoritmos integrados que pueden entregar directamente las condiciones del entorno detectadas. Este ejemplo muestra cómo imprimir por el puerto serial las condiciones ambientales detectadas por el radar.

El código del ejemplo es el siguiente.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/4.png"/></div>

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

En el código de `setup()`, encendemos el **puerto Serial** y el puerto **Serial1** en el XIAO BLE. Serial se utiliza para imprimir datos y Serial1 para la comunicación entre el XIAO BLE y el radar. Según la velocidad en baudios del radar, configuramos ambos puertos en `9600`. Cuando esté listo, el monitor serial mostrará **Ready**.

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

En el `loop()`, primero llamamos a `recvRadarBytes()` para almacenar en el array fijo `Msg[12]` los datos enviados por el radar. Debido a la complejidad de los datos, un array de longitud fija no es suficiente, así que ampliamos los datos a un array `dataMsg[dataLen]`, donde `dataLen` es la longitud real del frame recibido.

```c
radar.Situation_judgment(dataMsg);
```

Cuando la lista `dataMsg` se haya obtenido por completo, se usará como parámetro de la función `Situation_judgment()` para completar la salida de datos de monitoreo ambiental, y el resultado se imprimirá directamente en el monitor serial.

Sube el programa. Al abrir tu monitor serial con una velocidad en baudios de 9600 debería mostrarse el resultado. La salida debería verse similar a la imagen siguiente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
Si no ves datos después de abrir el monitor serial, puede ser normal. La adquisición de esta parte de los datos del radar depende de los cambios en el movimiento humano dentro del rango de monitoreo del radar. Solo cuando el movimiento de la persona dentro del rango cambie, el radar enviará datos, y solo entonces se imprimirán los datos.
:::

    Si quieres ver qué datos devuelve el radar, puedes descomentar `radar.ShowData(dataMsg);`, lo que mostrará el conjunto completo de tramas de datos recibidas a través del monitor serial.

### Demo2 Obtención de movimiento humano mediante análisis de parámetros de características

Entre la gran cantidad de datos que devuelve el radar, la información sobre datos físicos representa la mayor parte de la información. A veces, depender excesivamente de los algoritmos propios del radar puede arrojar resultados menos satisfactorios en algunos escenarios. Entonces, podemos elegir usar la información devuelta por el radar para hacer ajustes adecuados según los escenarios reales de aplicación.

El código de este ejemplo es el siguiente.

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

Una vez que se obtiene el arreglo `dataMsg`, podemos pasar los datos de este arreglo como primer argumento a la función `Bodysign_judgment()`, la cual analiza los parámetros de signos corporales.

El segundo y tercer parámetro de la función `Bodysign_judgment()` son los valores críticos para juzgar el estado desocupado y el cuerpo humano en reposo, y los valores críticos para el cuerpo humano en reposo y en movimiento, respectivamente.

(1, 15) significa que cuando el valor calculado del signo corporal es menor que 1, se indica que no hay nadie en el ambiente. Cuando el valor corporal es mayor o igual a 1 y menor que 15, la salida indica que el ambiente actual está ocupado por alguien en estado estacionario. Cuando el valor del signo corporal es mayor o igual a 35, indica que hay alguien moviéndose en el ambiente.

Sube el programa. Al abrir tu monitor serial con una velocidad en baudios de 9600 debería mostrarse el resultado. La salida debería verse similar a la imagen siguiente.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
Los valores que siguen al cuadro de datos de salida representan los valores calculados del signo corporal.
:::

### Demo 3 Obtención de datos de detección de sueño

La detección de sueño es una función especial del radar de sueño y respiración de 24GHz, podemos completar la salida de los datos de detección con el siguiente ejemplo de código.

El código de este ejemplo es el siguiente.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/6.png"/></div>

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

Cuando la lista `dataMsg` se haya obtenido por completo, se usará como parámetro de la función `Sleep_inf()` para completar la salida de datos de monitoreo de sueño, y el resultado se imprimirá directamente en el monitor serial.

Sube el programa. Al abrir tu monitor serial con una velocidad en baudios de 9600 debería mostrarse el resultado. La salida debería verse similar a la imagen siguiente.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/7.png"/></div>

### Demo 4 Envío de datos al radar

El radar abre una gran cantidad de interfaces para que obtengamos información y para configurar la sensibilidad o el escenario del radar. Esta rutina indicará cómo usar el manual de usuario para enviar mensajes de datos al radar y ajustar sus parámetros o obtener la información deseada.

**Paso 1.** Obtener tramas de datos basadas en la consulta deseada.

Descarga el [manual de usuario](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) en el área de recursos, y en el **Capítulo 8.2**, encuentra el contenido de las tramas que necesitas consultar o configurar, y organízalas.

En este ejemplo, asumiendo que quieres consultar el ID del dispositivo radar, deberías poder obtener el código de función deseado, el código de dirección 1 y el código de dirección 2.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**Paso 2.** Abre el código de ejemplo en el IDE de Arduino.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

El código en este ejemplo es el siguiente:

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

**Paso 3.** Modifica el contenido de la trama de datos para generar la trama completa que se enviará al radar.

Lo que necesitamos modificar es el arreglo `data[]` dentro del ciclo.

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

Los lugares que debemos modificar son el segundo elemento y del cuarto hasta el último elemento. El encabezado 0x55 es fijo y no necesita ser modificado. El segundo byte es el byte de longitud, modifícalo según la longitud de los datos que envíes. El tercer byte está fijo en 0x00. El cuarto byte es el código de función, el quinto byte es el código de dirección 1, y así sucesivamente.

:::tip
Acerca del método de cálculo del byte de longitud:<br />
Longitud = Longitud de Datos + Código de Función + Código de Dirección 1 + Código de Dirección 2 + Datos + Suma de comprobación. (Los bytes de encabezado no se cuentan)

Consulta el Capítulo 8 del [manual de usuario](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) para más información sobre los formatos y reglas de las tramas.
:::

Sube el programa. Al abrir tu monitor serial con una velocidad en baudios de 9600 debería mostrarse el resultado. La salida debería verse similar a la imagen siguiente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

Los datos completos que se deben enviar al radar se mostrarán en el monitor serial.

**Otras formas**

Si no deseas usar ningún maestro para generar las tramas de datos completas, también puedes pegar este código abajo en un editor que pueda ejecutar programas en C. Sigue el procedimiento anterior y llena el arreglo con el contenido de tus tramas.

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

Después de ejecutar el editor, también es posible obtener las tramas de datos completas que deben enviarse al radar.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**Paso 4.** Enviar tramas de datos al radar.

Conecta el radar directamente al puerto USB de la computadora mediante un dispositivo [**UART a USB**](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products). La conexión está mostrada en la tabla siguiente.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/22.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor Radar</td>
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

Usa un software como Serial Debugging Assistant para seleccionar el puerto serial donde está conectado el radar.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
El radar de 24GHz necesita alimentación de 5V, de lo contrario puede no funcionar correctamente.
:::

Después de una conexión exitosa, verás que el radar envía un flujo constante de mensajes.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

Pega la trama de datos completa que obtuvimos en el **paso 3** en el área de envío del software. Luego haz clic en Enviar.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

Puedes observar un conjunto de datos retornados cuyo tercer elemento sea 0x03. Este conjunto es la información obtenida después de la consulta. Si envías datos para ajustar parámetros del radar, también retornará dicha información.

:::caution
Si eliges **ASCII** como formato para enviar datos, cada conjunto de datos debe tener el prefijo **0x**. Si eliges **HEX**, entonces no es necesario el prefijo **0x**.
:::

## Solución de problemas

**FAQ1: ¿Cómo aplicar el código a Seeeduino (o Arduino)?**

> Debido al diseño diferente del hardware, el puerto serial de la serie XIAO o Wio Terminal se llama Serial1, mientras que Seeeduino o Arduino necesitan usar un puerto serial software. Si deseas usar el radar con Seeeduino, puedes cambiar el puerto serial software o usar los pines 2 (RX) y 3 (TX).
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: What should I do if XIAO BLE and Radar collect data for a long time and cannot upload the code?**

**FAQ2: ¿Qué hacer si XIAO BLE y Radar recogen datos por mucho tiempo y no se puede subir el código?**

> En este caso, puedes presionar suavemente el botón de reset en la parte superior del XIAO BLE para volver a subir el programa y que se ejecute.

## Recursos

- **[PDF]** [Datasheet del Sensor Radar de Respiración para Sueño](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_Datasheet.pdf)
- **[PDF]** [Manual de Usuario del Sensor Radar de Respiración para Sueño de 24GHz](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_User_Manual.pdf)
- **[ZIP]** [Esquemático Respiratorio de 24GHz](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PPTX]** [Serie de sensores Seeed mmWave V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
