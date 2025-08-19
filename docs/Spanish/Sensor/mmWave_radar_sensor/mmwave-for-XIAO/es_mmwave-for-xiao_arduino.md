---
description: Introduction of how to develop mmWave Sensor on XIAO.
title: Desarrollo del Sensor mmWave de 24 GHz con XIAO y Arduino
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/mmwave_for_xiao_arduino
last_update:
  date: 06/17/2025
  author: Guillermo
---

# Desarrollo del Sensor mmWave de 24 GHz con XIAO y Arduino

Esta sección describe cómo utilizar la librería y realizar un desarrollo secundario del sensor mmWave para XIAO.

:::caution
Todo el contenido de este Wiki aplica únicamente al sensor mmWave de 24 GHz para XIAO y **no debe usarse** en otros sensores de ondas milimétricas.
:::

## Primeros Pasos

### Preparativos de Hardware

Antes de comenzar con el contenido del tutorial, recomendamos adquirir alguno de los modelos XIAO actualmente disponibles para utilizar el sensor de ondas milimétricas.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>Seeed Studio XIAO ESP32S3</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

En este artículo se utilizarán como ejemplo el **XIAO ESP32C3** y el **sensor mmWave**, para mostrar cómo utilizar las librerías de Arduino y sus funciones relacionadas.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consige uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

El sensor está diseñado para ser compatible con XIAO. Asegúrate de instalar correctamente los pines hembra y **no conectarlo al revés**, ya que esto puede dañar el sensor o el módulo XIAO.

:::caution
Dirección correcta: La antena del sensor debe quedar orientada hacia afuera.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

Una vez confirmado que la conexión es correcta, puedes conectar el cable USB-C a tu computadora o fuente de alimentación; el sensor comenzará a funcionar.

### Preparativos de Software

Como la velocidad por defecto del sensor es **256000 baudios**, y algunos puertos seriales por software de XIAO no alcanzan esa velocidad, es necesario ajustar la tasa de baudios del sensor desde una aplicación móvil antes de usarlo. Descarga la app correspondiente según tu sistema operativo:

- [HLKRadarTool en Google Play](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [HLKRadarTool en App Store](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

## Visión General de la Librería Arduino

:::tip
Si es tu primera vez usando Arduino, te recomendamos visitar: [Primeros pasos con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave_for_XIAO" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga la librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Funciones Principales

Antes de comenzar a desarrollar un sketch, revisemos las funciones disponibles en la librería.

- `Seeed_HSP24(Stream &serial)` —— Se utiliza para pasar el puerto serie al que está conectado el sensor e iniciar la inicialización.
  - **Parámetros de entrada**:
    - **serial**: Puerto serie al que está conectado el sensor.

- `Seeed_HSP24(Stream &serial, Stream &debugSerial)` —— Se utiliza para pasar el puerto serie del sensor, habilitar un puerto para depuración e iniciar la inicialización.
  - **Parámetros de entrada**:
    - **serial**: Puerto serie al que está conectado el sensor.
    - **debugSerial**: Habilita la depuración por puerto serie y salida en el puerto especificado.

- `String getVersion()` —— Obtiene el número de versión del software del sensor.
  - **Retorno**: El número de versión del software.

- `RadarStatus getStatus()` —— Obtiene la información de estado del sensor. Toda la información reportada por el sensor es interpretada por esta función.
  - **Retorno**:
    - **radarStatus.radarMode**: Modo Ingeniería o Modo Básico. 1 corresponde a Modo Ingeniería, 2 a Modo Básico.
    - **radarStatus.targetStatus**: Indica el estado actual del objeto monitoreado. Puede ser:
      - `NoTarget`: sin detección de persona
      - `MovingTarget`: persona detectada en movimiento
      - `StaticTarget`: persona detectada en estado estático
      - `BothTargets`: ambas detectadas simultáneamente
      - `ErrorFrame`: error o anomalía
    - **radarStatus.distance**: Distancia al objeto detectado.
    - **radarStatus.radarMovePower.moveGate** (Modo Ingeniería): Array con los valores de energía de movimiento por compuerta.
    - **radarStatus.radarStaticPower.staticGate** (Modo Ingeniería): Array con los valores de energía estática por compuerta.
    - **radarStatus.photosensitive** (Modo Ingeniería): Valor de fotosensibilidad del sensor (rango 0–255).

- `DataResult sendCommand(const byte* sendData, int sendDataLength)` —— Envía comandos al sensor.
  - **Parámetros de entrada**:
    - **sendData**: Array de tramas de comando.
    - **sendDataLength**: Longitud del array.
  - **Retorno**:
    - **resultBuffer**: Apunta a un array asignado dinámicamente.
    - **length**: Longitud del array.

- `AskStatus setDetectionDistance(int distance, int times)` —— Configura la distancia máxima de detección y el tiempo de permanencia sin ocupación.
  - **Parámetros de entrada**:
    - **distance**: Compuerta de distancia máxima.
    - **times**: Tiempo sin ocupación.
  - **Retorno**:
    - `0x00` Éxito, `0x01` Error.

- `AskStatus setGatePower(int gate, int movePower, int staticPower)` —— Configura la energía de detección por compuerta.
  - **Parámetros de entrada**:
    - **gate**: Compuerta de distancia (0–8 m).
    - **movePower**: Umbral de energía para detectar movimiento.
    - **staticPower**: Umbral de energía para detectar reposo.
  - **Retorno**:
    - `0x00` Éxito, `0x01` Error.

- `RadarStatus getConfig()` —— Lee los parámetros actuales del sensor.
  - **Retorno**:
    - **radarStatus.detectionDistance**: Número de compuertas de detección de movimiento.
    - **radarStatus.moveSetDistance**: Número de compuertas de detección de reposo.
    - **radarStatus.staticSetDistance**: Máxima distancia de detección configurada.
    - **radarStatus.noTargrtduration**: Tiempo sin presencia detectada.

- `AskStatus setResolution(int resolution)` —— Configura la resolución de distancia:
  - `1` = 0.25 m  
  - `0` = 0.75 m (por defecto)
  - **Parámetros de entrada**:
    - **resolution**: Resolución deseada.
  - **Retorno**:
    - `0x00` Éxito, `0x01` Error.

- `RadarStatus getResolution()` —— Obtiene la resolución de distancia actual:
  - **Retorno**:
    - **radarStatus.resolution**: `1` = 0.25 m, `0` = 0.75 m.

- `AskStatus rebootRadar()` —— Reinicia el radar.
  - **Retorno**:
    - `0x00` Éxito, `0x01` Error.

- `AskStatus refactoryRadar()` —— Restaura los valores de fábrica del radar.
  - **Retorno**:
    - `0x00` Éxito, `0x01` Error.

- `AskStatus enableEngineeringModel()` —— Activa el Modo Ingeniería del sensor.
  - **Retorno**:
    - `0x00` Éxito, `0x01` Error.

- `AskStatus disableEngineeringModel()` —— Desactiva el Modo Ingeniería.
  - **Retorno**:
    - `0x00` Éxito, `0x01` Error.

### Variables Default 

```cpp
#define BUFFER_SIZE 256     // Serial Buffer Size

class Seeed_HSP24
{
    public:
        static const int FRAME_START_SIZE = 4;
        static const int FRAME_END_SIZE = 4;

        static const byte frameStart[FRAME_START_SIZE];
        static const byte frameEnd[FRAME_END_SIZE];
        static const byte frameAskStart[FRAME_START_SIZE];
        static const byte frameAskEnd[FRAME_END_SIZE];

        struct RadarMovePower // Energy value per movement distance gate
        {
            int moveGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        struct RadarStaticPower // Energy value per stationary distance gate
        {
            int staticGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        //  Define the TargetStatus enum class
        enum class AskStatus : byte
        {
            Success = 0x00, // Success
            Error = 0x01,   // Failed
        };

        //  定义TargetStatus枚举类
        enum class TargetStatus : byte
        {
            NoTarget = 0x00,     // No target
            MovingTarget = 0x01, // Moving target
            StaticTarget = 0x02, // Static target
            BothTargets = 0x03,  // It can be interpreted as motion, meaning that both the set motion and stationary thresholds are above the set value
            ErrorFrame = 0x04    // Failed to get status
        };

        // Define the RadarStatus structure
        struct RadarStatus
        {
            TargetStatus targetStatus = TargetStatus::ErrorFrame; // Target status of the radar
            int distance = -1;                                    // Target distance of the radar in mm
            int moveSetDistance = -1;                             // The number of motion detection distance gates of the radar, which generally do not have to be configured
            int staticSetDistance = -1;                           // Number of static detection distance gates of the radar, which generally do not have to be configured
            int detectionDistance = -1;                           // Radar's longest detection range gate
            int resolution = -1;                                  // Distance gate resolution of radar
            int noTargrtduration = -1;                            // Unmanned duration
            int radarMode = -1;                                   // Used to distinguish whether the module is in basic reporting mode (2) or engineering reporting mode (1)
            RadarMovePower radarMovePower;                        // Exercise Energy Value
            RadarStaticPower radarStaticPower;                    // Stationary energy value
            int photosensitive = -1;                              // Photosensitive 0-255
        };

        // Used to return the result of an issued command
        struct DataResult
        {
            byte *resultBuffer; // Points to a dynamically allocated array
            int length;         // Length of the array
        };
};
```

### Instalación

Ya que descargaste la librería en formato `.zip`, abre el Arduino IDE y haz clic en **Sketch > Include Library > Add .ZIP Library**. Selecciona el archivo `.zip` que descargaste. Si la instalación fue exitosa, verás un mensaje que dice **Library added to your libraries** en la ventana de notificaciones. Esto indica que la librería se instaló correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Ejemplo con XIAO

Ahora que ya tenemos la librería instalada y comprendemos las funciones básicas, ejecutaremos algunos ejemplos para nuestro sensor mmWave de 24 GHz y ver cómo se comporta.

**Paso 1.** Abre la aplicación de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
  <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
    <strong>
      <span>
        <font color={'FFFFFF'} size={"4"}>Descarga Arduino IDE</font>
      </span>
    </strong>
  </a>
</div>


**Paso 2.** Selecciona tu modelo de placa de desarrollo y agrégalo al IDE de Arduino.

- Si vas a usar **Seeed Studio XIAO SAMD21**, sigue [este tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) para agregarlo.
- Si vas a usar **Seeed Studio XIAO RP2040**, sigue [este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup).
- Si vas a usar **Seeed Studio XIAO nRF52840**, sigue [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup).
- Si vas a usar **Seeed Studio XIAO ESP32C3**, sigue [este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup).
- Si vas a usar **Seeed Studio XIAO ESP32S3**, sigue [este tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation).

:::tip
Este tutorial usará como ejemplo el XIAO ESP32C3.
:::

**Paso 3.** Conecta el sensor al XIAO y luego conecta el XIAO a tu computadora mediante un cable USB tipo C.

**Paso 4.** Abre la aplicación **HLKRadarTool** que descargaste y configura la tasa de baudios adecuada para el sensor.

Al abrir la app, esta buscará dispositivos radar cercanos. El nombre de difusión del dispositivo es **HLK-LD2410_xxxx** (donde `xxxx` son los últimos cuatro dígitos de la dirección MAC).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

En el menú **More** (arriba a la derecha), puedes acceder a la configuración para establecer parámetros personalizados para el sensor. Ajusta la tasa de baudios a **9600** y guarda los cambios.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/15.png" style={{width:400, height:'auto'}}/></div>

Después de eso, espera a que el sensor se reinicie.

**Paso 5.** Agrega las librerías necesarias.

Además de la librería del sensor que necesitas incluir en tu entorno de Arduino, si estás usando una placa **XIAO con ESP32**, es posible que necesites instalar por separado las librerías para los puertos seriales por software para poder usar los ejemplos proporcionados.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga la librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Demo 1. Salida en Modo Básico

En este primer ejemplo vamos a interpretar la información general reportada por el sensor. Esto incluye los datos funcionales principales del producto, como presencia humana, movimiento, distancia, etc.

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("Programme Starting!");

  xiao_config.disableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // Maximum number of retries to prevent infinite loops

  //Get radar status
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  //Parses radar status and prints results from debug serial port
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("Status: " + String(targetStatusToString(radarStatus.targetStatus)) + " ---- ");
    ShowSerial.println("Distance: " + String(radarStatus.distance) + "  Mode: " + String(radarStatus.radarMode));
  }
  delay(200);
}

// Parsing the acquired radar status
const char* targetStatusToString(Seeed_HSP24::TargetStatus status) {
  switch (status) {
    case Seeed_HSP24::TargetStatus::NoTarget:
      return "NoTarget";
    case Seeed_HSP24::TargetStatus::MovingTarget:
      return "MovingTarget";
    case Seeed_HSP24::TargetStatus::StaticTarget:
      return "StaticTarget";
    case Seeed_HSP24::TargetStatus::BothTargets:
      return "BothTargets";
    default:
      return "Unknown";
  }
}
```

Después de compilar y subir el programa, abre el monitor serial y ajusta la tasa de baudios a **9600**. Si todo va bien, deberías ver un resultado como el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/16.png" style={{width:700, height:'auto'}}/></div>

### Demo 2. Salida en modo ingeniería

En este segundo ejemplo activaremos el envío de datos en modo ingeniería y analizaremos esta información. A diferencia del modo básico, el modo ingeniería proporciona más valores de energía en movimiento y estática para distintas compuertas de distancia. Esta visualización permite observar los cambios de energía dinámicos y estáticos en el entorno, facilitando el ajuste de los umbrales para que el sensor determine si hay una persona, si está quieta o en movimiento, según la situación real.

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("Programme Starting!");

  xiao_config.enableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // Maximum number of retries to prevent infinite loops

  //Get radar status
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  //Parses radar status and prints results from debug serial port
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("Status: " + String(targetStatusToString(radarStatus.targetStatus)) + "  ----   ");
    ShowSerial.println("Distance: " + String(radarStatus.distance) + "  Mode: " + String(radarStatus.radarMode));
    
    if (radarStatus.radarMode == 1) {
      ShowSerial.print("Move:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarMovePower.moveGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.print("Static:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarStaticPower.staticGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.println("Photosensitive: " + String(radarStatus.photosensitive));
    }
  }
  delay(100);
}

// Parsing the acquired radar status
const char* targetStatusToString(Seeed_HSP24::TargetStatus status) {
  switch (status) {
    case Seeed_HSP24::TargetStatus::NoTarget:
      return "NoTarget";
    case Seeed_HSP24::TargetStatus::MovingTarget:
      return "MovingTarget";
    case Seeed_HSP24::TargetStatus::StaticTarget:
      return "StaticTarget";
    case Seeed_HSP24::TargetStatus::BothTargets:
      return "BothTargets";
    default:
      return "Unknown";
  }
}
```

Después de compilar y subir el programa, abre el monitor serial y ajusta la tasa de baudios a **9600**. Si todo va bien, deberías ver un resultado como el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/17.png" style={{width:800, height:'auto'}}/></div>

### Demo 3. Consulta de configuración y restauración a valores de fábrica

En este tercer ejemplo, mostramos cómo restaurar los valores de fábrica del sensor y cómo utilizar algunas funciones para consultar parámetros de configuración.

:::caution
Presta especial atención a que al restaurar el sensor a los valores de fábrica, también se restablecerá la tasa de baudios a **256000**.  
Debes seguir los pasos previos para volver a configurar la tasa a **9600** usando la app móvil antes de poder utilizar otros programas con XIAO.
:::

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  while(!ShowSerial);                   // Turn on the serial monitor and start executing
  delay(500);
  
  ShowSerial.println("Programme Starting!");

  ShowSerial.print("Sensor Software Version: ");
  ShowSerial.println(xiao_config.getVersion());

  radarStatus = xiao_config.getConfig();
  if (radarStatus.detectionDistance != -1) {
    ShowSerial.println("Detection Distance: " + String(radarStatus.detectionDistance) + " m ");
    ShowSerial.println("Moveing Set Distance: " + String(radarStatus.moveSetDistance) + " m ");
    ShowSerial.println("Static Set Distance: " + String(radarStatus.staticSetDistance) + " m ");
    ShowSerial.println("No Target Duration Time: " + String(radarStatus.noTargrtduration) + " seconds ");
  }
  else ShowSerial.println("Failed to get configuration information, please retry.");

  /*** Restore or reset the radar settings, please operate with caution.
   * * After restoring or resetting the factory settings, please re-modify 
   * * the baud rate to 9600 before using XIAO!
   * */
  xiao_config.refactoryRadar();
//   xiao_config.rebootRadar();                // Reboot the Sensor
}

void loop() {}
```

Este programa realizará un reinicio automáticamente al encender el monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/18.png" style={{width:600, height:'auto'}}/></div>

## Solución de Problemas

### P1: Estoy usando XIAO nRF52840 (Sense), ¿qué versión de placa de desarrollo debo elegir?

Debes usar la versión **no-mbed** del paquete de la placa de desarrollo XIAO nRF52840, ya que contiene las librerías necesarias para puertos seriales por software, requeridas por este programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/19.png" style={{width:800, height:'auto'}}/></div>

### P2: ¿Por qué obtengo tramas perdidas o datos corruptos del sensor?

Lo más probable es que no hayas cambiado la tasa de baudios del sensor.  
La tasa de baudios por defecto en el firmware de fábrica de este producto es **256000**. El puerto serial por software de XIAO puede no ser capaz de manejar un flujo de datos tan alto, lo cual puede hacer que el programa se quede atascado o no pueda interpretar las tramas correctamente.  

Te recomendamos bajar la tasa de baudios a **9600** y volver a ejecutar el programa.

### P3: ¿Por qué el flujo de datos se retrasa de 1 a 2 segundos al usar el Demo 2?

Esto puede ser un comportamiento normal.  
El modo ingeniería genera un flujo de datos muy grande, y el puerto serial por software ocupa el CPU para procesarlos. Por lo tanto, puede haber pausas breves de vez en cuando.

## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos!  
Estamos aquí para ofrecerte diferentes formas de soporte y asegurarnos de que tu experiencia sea lo más fluida posible.  
Contamos con varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
