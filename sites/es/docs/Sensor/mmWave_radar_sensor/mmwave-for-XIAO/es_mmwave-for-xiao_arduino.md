---
description: Introducción sobre cómo desarrollar un sensor mmWave en XIAO.
title: Desarrollo de mmWave de 24GHz en XIAO y Arduino
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_for_xiao_arduino
last_update:
  date: 11/13/2023
  author: Citric
---

# Desarrollo de sensor mmWave de 24GHz en XIAO y Arduino

Esta sección describe cómo usar la biblioteca y el desarrollo secundario de mmWave para XIAO.

:::caution
Todo el contenido de este Wiki se aplica únicamente al mmWave de 24GHz para XIAO y puede no ser utilizado en otros sensores de ondas milimétricas.
:::

## Primeros Pasos

### Preparaciones de Hardware

Antes de comenzar el contenido del tutorial de este artículo, recomendamos que compres cualquiera de los XIAOs que actualmente tenemos a la venta para poder usar el sensor de ondas milimétricas.

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

En los tutoriales de este artículo, utilizaremos el XIAO ESP32C3 y el Sensor mmWave como ejemplos de uso para guiarte sobre cómo usar las librerías de Arduino del sensor y las características relacionadas.

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

El sensor está diseñado para compatibilidad con XIAO, por lo que en general, si quieres usar este sensor, necesitas preparar un XIAO e instalar la fila de pines hembra para el sensor. Al conectar al XIAO, por favor presta especial atención a la dirección de instalación del sensor, por favor no lo conectes al revés, de lo contrario es probable que quemes el sensor o el XIAO.

:::caution
La dirección correcta a seguir es que la antena del sensor debe mirar hacia afuera.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

Después de confirmar que la dirección de conexión es correcta, puedes conectar el cable tipo USB-C a la computadora o fuente de alimentación, y el sensor comenzará a funcionar.

### Preparaciones de Software

Dado que la velocidad de baudios predeterminada utilizada por el sensor es 256000, y la velocidad de baudios del puerto serie suave diseñado por XIAO puede no ser capaz de satisfacer una transmisión de datos de velocidad de baudios tan alta, necesitamos usar software para ajustar la velocidad de baudios del sensor antes de usar el sensor. Entonces, por favor descarga la APP correspondiente según el sistema de teléfono móvil que estés usando.

:::note
La APP no puede leer la velocidad de baudios. Incluso después de la modificación, la APP aún muestra la velocidad de baudios predeterminada.
:::

- [Descargar HLKRadarTool desde Google Play](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [Descargar HLKRadarTool desde App Store](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

## Descripción General de la Librería Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave_for_XIAO" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `Seeed_HSP24(Stream &serial)` —— Usado para pasar el puerto serie al que está conectado el sensor e iniciar la inicialización del sensor.
    - **Parámetros de Entrada**:

        - **serial**: El puerto serie al que está conectado el sensor.

- `Seeed_HSP24(Stream &serial, Stream &debugSerial)` —— Usado para pasar el puerto serie al que está conectado el sensor, agregar el puerto serie de depuración e iniciar la inicialización del sensor.
    - **Parámetros de Entrada**:

        - **serial**: El puerto serie al que está conectado el sensor.
        - **debugSerial**: Habilitar depuración serie y salida en el puerto serie entrante.

- `String getVersion()` —— Obtener el número de versión del software del sensor.
    - **Retorno**: El número de versión del software del sensor.

- `RadarStatus getStatus()` —— Obtener la información de estado del sensor, toda la información reportada por el sensor será analizada por esta función.
    - **Retorno**: 
        - **radarStatus.radarMode**: Modo de Ingeniería o Modo Base. 1 corresponde al Modo de Ingeniería y 2 corresponde al Modo Base.
        - **radarStatus.targetStatus**: Indica la situación actual del objeto de monitoreo. Hay cuatro situaciones en total (NoTarget), la primera es ninguna persona detectada (MovingTarget), la segunda es alguien detectado como estacionario (StaticTarget), la tercera es detectado al mismo tiempo (BothTargets), y la cuarta es una anomalía (ErrorFrame). Donde BothTarget se refiere al movimiento de alguien. Porque el sensor monitorea el entorno actual, tanto la energía de movimiento como la energía estacionaria exceden el umbral establecido, por lo que nombramos "BothTarget", si solo la energía de movimiento excede el umbral, entonces saldrá "MovingTarget".
        - **radarStatus.distance**: Este valor se refiere a la distancia que el sensor detecta del objeto detectado.
        - **radarStatus.radarMovePower.moveGate** (Efectivo en modo de ingeniería): Este arreglo almacena los valores de energía de movimiento para diferentes puertas de distancia.
        - **radarStatus.radarStaticPower.staticGate** (Efectivo en modo de ingeniería): Este arreglo almacena los valores de energía estática para diferentes puertas de distancia.
        - **radarStatus.photosensitive** (Efectivo en modo de ingeniería): Este valor se refiere al valor de fotosensibilidad del sensor, rango 0-255.

- `DataResult sendCommand(const byte* sendData, int sendDataLength)` —— Los comandos se envían al sensor a través de esta función.
    - **Parámetros de Entrada**:
        - **sendData**: El arreglo de tramas de comando enviadas.
        - **sendDataLength**: La longitud de la trama de comando enviada.
    
    - **Retorno**:
        - **resultBuffer**: Apunta a un arreglo asignado dinámicamente.
        - **length**: Longitud del arreglo.

- `AskStatus setDetectionDistance(int distance,int times)` —— Configurar la puerta de distancia máxima y duración desocupada con esta función.
    - **Parámetros de Entrada**:
        - **distance**: Configurar la puerta de distancia máxima.
        - **times**: Tiempo de duración desocupada.

- **Return**:
        - Éxito 0x00 o Error 0x01.

- `AskStatus setGatePower(int gate,int movePower, int staticPower)` —— Diferentes puertas de distancia así como sensibilidades se configuran con esta función.
    - **Parámetros de Entrada**:
        - **gate**: Distancia a la puerta, rango 0-8 m.
        - **movePower**: El valor de energía que activa el umbral de movimiento.
        - **staticPower**: El valor de energía que activa el umbral de reposo.

    - **Ruturn**:
        - Éxito 0x00 o Error 0x01.

- `RadarStatus getConfig()` —— Lee los valores de parámetros del sensor de configuración.
    - **Return**:
        - **radarStatus.detectionDistance**: Número de puertas de distancia de detección de movimiento para el radar.
        - **radarStatus.moveSetDistance**: Número de puertas de distancia de detección estacionaria para el radar.
        - **radarStatus.staticSetDistance**: Puerta de rango de detección más larga del radar.
        - **radarStatus.noTargrtduration**: Duración sin personas.


- `AskStatus setResolution(int resolution)` —— Establece la distancia a la resolución de la puerta, 1 es 0.25M, 0 es 0.75M. Por defecto 0.75M.
    - **Parámetros de Entrada**:
        - **resolution**: 1 es 0.25M, 0 es 0.75M. Por defecto 0.75M.

    - **Ruturn**:
        - Éxito 0x00 o Error 0x01.

- `RadarStatus getResolution()` —— Obtiene la distancia a la resolución de la puerta, 1 es 0.25M, 0 es 0.75M. Por defecto 0.75M.
    - **Ruturn**:
        - **radarStatus.resolution**: 1 es 0.25M, 0 es 0.75M. Por defecto 0.75M.

- `AskStatus rebootRadar()` —— Comando de reinicio del radar.
    - **Ruturn**:
        - Éxito 0x00 o Error 0x01.

- `AskStatus refactoryRadar()` —— Restaura el radar a la configuración de fábrica.
    - **Ruturn**:
        - Éxito 0x00 o Error 0x01.

- `AskStatus enableEngineeringModel()` —— Habilita la salida del modo de ingeniería del sensor.
    - **Ruturn**:
        - Éxito 0x00 o Error 0x01.

- `AskStatus disableEngineeringModel()` —— Salir de la salida del modo de ingeniería.
    - **Ruturn**:
        - Éxito 0x00 o Error 0x01.


### Variables por Defecto

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

Dado que has descargado la biblioteca en formato zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Esto significa que la biblioteca se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Ejemplo XIAO

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro Sensor mmWave de 24GHz para ver cómo se comporta.

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

:::tip
Este tutorial usará el XIAO ESP32C3 como ejemplo.
:::

**Paso 3.** Conecta el sensor al XIAO y conecta el XIAO a la PC mediante un cable tipo USB-C.

**Paso 4.** Abre la APP **HLKRadarTool** descargada y configura la velocidad de baudios apropiada para el sensor.

Abre la app, y la app busca dispositivos de radar cercanos. El nombre de difusión del dispositivo es **HLK-LD2410_xxxx** (xxxx son los últimos cuatro dígitos de la dirección mac).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

En la opción More en la esquina superior derecha del software, puedes acceder al menú de configuración para establecer parámetros personalizados y características para el sensor. Por favor establece la velocidad de baudios del sensor a **9600** y guárdala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/15.png" style={{width:400, height:'auto'}}/></div>

Después, espera a que el sensor se reinicie.

**Paso 5.** Añade las bibliotecas necesarias.

Además de las bibliotecas para los sensores que necesitas añadir a tu entorno Arduino, si estás usando un **XIAO de la serie ESP32** entonces podrías necesitar instalar las bibliotecas para los puertos serie por software por separado para poder usar los ejemplos proporcionados.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Demo 1. Salida en modo básico

Para el primer ejemplo de programa, analizaremos la información general reportada por el sensor. Esto representará la salida de información funcional principal para este producto. Por ejemplo, datos sobre presencia humana, movimiento, distancia, etc.

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

Después de compilar y cargar el programa, abre el monitor serie y establece la velocidad de baudios a 9600. Si todo va bien, deberías ver el siguiente resultado de salida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/16.png" style={{width:700, height:'auto'}}/></div>


### Demo 2. Salida en modo ingeniería

Para el segundo programa de ejemplo, activaremos la carga de datos de ingeniería para el sensor y analizaremos esta información de ingeniería. Comparado con el modo base, la información de ingeniería tiene más valores de energía de movimiento y valores de energía estática para diferentes puertas de distancia. La visualización de estos valores te permite ver los cambios de energía dinámica y estática en el entorno actual, facilitándote el ajuste de los disparadores para que los sensores determinen si alguien está presente, estacionario o en movimiento según la situación real.

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

Después de compilar y cargar el programa, abre el monitor serie y establece la velocidad de baudios a 9600. Si todo va bien, deberías ver el siguiente resultado de salida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/17.png" style={{width:800, height:'auto'}}/></div>

### Demo 3. Otras consultas de configuración y restaurar configuración de fábrica

En el tercer ejemplo, proporcionamos un método para restaurar la configuración del sensor y algunos otros ejemplos del uso de las funciones de consulta de parámetros.

:::caution
Se debe prestar especial atención al hecho de que cuando el sensor se restaura a la configuración de fábrica, también significa que la velocidad de baudios del sensor se restaurará a **256000**. Necesitas seguir los pasos anteriores para restablecer la velocidad de baudios a **9600** en tu aplicación móvil antes de poder usar otros programas de XIAO.
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

Este programa realizará un reinicio después de que enciendas el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/18.png" style={{width:600, height:'auto'}}/></div>


## Solución de problemas

### P1: Estoy usando XIAO nRF52840 (Sense), ¿qué versión de placa de desarrollo debo elegir?

Debes usar la versión no-mbed del paquete de placa de desarrollo XIAO nRF52840 ya que contiene las librerías de puerto serie suave necesarias para el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/19.png" style={{width:800, height:'auto'}}/></div>

### P2: ¿Por qué estoy obteniendo tramas perdidas y flujos de datos del sensor corruptos?

Esto es muy probablemente porque no modificaste la velocidad de baudios del sensor. La velocidad de baudios predeterminada del firmware de fábrica de este producto es 256000. El puerto serie suave de XIAO puede no ser capaz de manejar un flujo de datos de tan alta velocidad, entonces el programa puede quedarse atascado anormalmente e incapaz de analizar las tramas de datos correctamente, así que por favor ajusta la velocidad de baudios hacia abajo y luego usa el programa nuevamente. Recomendamos usar una velocidad de baudios de **9600**.

### P3: ¿Por qué el flujo de datos se retrasa 1~2 segundos cuando uso Demo2?

Esto puede ser un fenómeno normal, el flujo de datos en modo ingeniería es grande, el puerto serie suave ocupa la CPU para procesar los datos de manera limitada, así que se pausará por un momento de vez en cuando.


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
