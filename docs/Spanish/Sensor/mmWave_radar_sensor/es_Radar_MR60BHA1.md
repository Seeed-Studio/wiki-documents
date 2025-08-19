---
description: 60GHz mmWave Static Breathing and Heartbeat
title: Sensor mmWave 60GHz - Monitor de Respiración y Sueño Estático Humano
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR60BHA1
last_update:
  date: 07/18/2025
  author: Guillermo
---

# Sensor mmWave 60GHz - Monitor de Respiración y Sueño Estático Humano (MR60BHA1)

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El módulo radar MR60BHA1 de 60GHz aplica la teoría FMCW para detectar simultáneamente la frecuencia respiratoria y cardíaca con alta precisión, proporcionando un entorno totalmente privado y seguro, independiente de interferencias externas. Es un sistema radar biótico estándar en electrónica de consumo, salud e industria. En esta wiki te mostraremos cómo utilizarlo.

### Aplicaciones

- Hogar inteligente  
- Cuidado de la salud  
- Detección de ritmo respiratorio  
- Detección de ritmo cardíaco  
- Hoteles inteligentes  
- Asistentes médicos  

### Características

- Teoría habilitada: Detección radar basada en señales FMCW (onda continua de frecuencia modulada).  
- Algoritmo estándar: Detecta y reporta simultáneamente la respiración y ritmo cardíaco en entornos auto-adaptativos.  
- Protección perfecta de privacidad: Tecnología FMCW para vigilancia sin identificación personal.  
- Funcionamiento amigable con la salud: Potencia de salida baja, inofensiva para el cuerpo humano.  
- Alta estabilidad: Independiente de temperatura, humedad, ruido, flujo de aire, polvo, luz y otras influencias ambientales.  
- Alta precisión: Precisión en ritmo cardíaco hasta 85% y respiración hasta 90%.  
- Diseño de hardware flexible: Soporta desarrollo secundario para diversas aplicaciones.  

### Especificaciones

| Parámetro                      | Mínimo | Típico | Máximo | Unidad |
|-------------------------------|--------|--------|--------|--------|
| **Rendimiento**                |        |        |        |        |
| Distancia de detección (torácica) | 0.4    |        | 1.5    | m      |
| Precisión medición respiratoria |        | 90     |        | %      |
| Precisión medición cardíaca     |        | 95     |        | %      |
| Tiempo de actualización         | 1      |        | 30     | s      |
| Tiempo de observación           |        | 20     |        | s      |
| **Parámetros operativos**      |        |        |        |        |
| Voltaje de operación (VCC)      | 4.6    | 5      | 6      | V      |
| Corriente de operación (ICC)    |        | 150    |        | mA     |
| Temperatura operativa (TOP)     | -20    |        | 60     | ℃      |
| Temperatura almacenamiento (TST)| -40    |        | 80     | ℃      |
| **Parámetros de emisión**       |        |        |        |        |
| Frecuencia operativa (fTX)      | 58     | 60     | 63.5   | GHz    |
| Potencia transmitida (Pout)     |        | 6      |        | dBm    |
| **Parámetros de antena**        |        |        |        |        |
| Ganancia de antena (GANT)       |        | 4      |        | dBi    |
| Haz horizontal (-3dB)           | -20    |        | 20     | °      |
| Haz vertical (-3dB)             | -20    |        | 20     | °      |

## Descripción del Hardware

Antes de comenzar, es importante conocer algunos parámetros básicos del producto. La siguiente tabla muestra la información del módulo radar de respiración y latido 60GHz.

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- **Interfaz 1:**  
  - Pin 5V: alimentación del sensor.  
  - RX y TX: interfaz de datos (RX = recepción serial, TX = transmisión serial).  
  - Salida de estado de presencia humana:  
    - GP2: alto = ocupado, bajo = desocupado.  
    - GP1: alto = activo, bajo = quieto.  
- **Interfaz 2:**  
  - Pines para actualización firmware: GND / 3.3V / SWD / SWC.  
  - Pines de entrada/salida adicionales: GP3 ~ GP6.

## Primeros Pasos

### Actualización de Firmware

El sensor mmWave ha evolucionado con base en sugerencias de usuarios para ofrecer mejor precisión y experiencia.

Los sensores nuevos traen por defecto la última versión de firmware, pero para usuarios antiguos se provee aquí el firmware y método para actualización.

#### Método universal - actualización con J-link

Si encuentras fallas de firmware o anomalías, esta es la forma más efectiva para reprogramar.

**Descarga del firmware más reciente**

| Versión firmware            | Enlace de descarga                                         |
|----------------------------|------------------------------------------------------------|
| Jlink_MR60BHA1-V230104.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230104.bin) |
| Jlink_MR60BHA1-V230904.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230904.bin) |

:::caution
1. Verifica bien la función de tu producto. No mezcles con otros sensores mmWave al actualizar firmware, podría causar mal funcionamiento y ser tu responsabilidad.

2. Diferentes métodos de actualización requieren firmware diferente. Los archivos indicados aquí son para J-link.
:::

**Pasos para actualizar con J-link**

1. Necesitas un **Jlink** y el sensor **MR60BHA1**.

2. Conecta sensor y Jlink con cables Dupont según el esquema.

3. Descarga el software y firmware necesario.

4. Sigue la guía paso a paso para instalar software, crear proyecto, seleccionar chip y cargar firmware (detallado con imágenes en el original).

#### Actualización vía UART

Para usuarios sin J-link, ofrecemos actualización vía UART.

**Descarga firmware UART**

| Versión firmware            | Enlace de descarga                                         |
|----------------------------|------------------------------------------------------------|
| UART_MR60BHA1-230104.bin   | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230104.bin) |
| UART_MR60BHA1-230904.bin   | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230904.bin) |

:::caution
1. No mezcles firmware con otros sensores.

2. Este firmware es exclusivo para actualización vía UART.

3. Asegúrate que tu firmware actual sea al menos G60SM1SYv010003 para usar UART; de lo contrario, usa J-link.

Puedes verificar versión con el comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43`.

Ejemplo: `G60SM1SYv010009` indica versión 10009 y soporte UART.
:::

**Para actualizar tu radar a la última versión**

**Paso 1.** Necesitarás tener un **Jlink** y un sensor **MR60BHA1** de 60GHz mmWave.

Conecta el radar y el Jlink juntos mediante cables Dupont como se muestra en el diagrama a continuación.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**Paso 2.** Descarga el software y firmware necesarios.

| Archivo | Dirección de descarga |
|:-------:|:---------------------:|
| JlinkV644e.rar | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip) |

**Paso 3.** Descomprime **JlinkV644e.rar** y abre el archivo **JLink_Windows_V644e.exe** que contiene.

Sigue las opciones predeterminadas para instalar. Una vez finalizada la instalación, inicia el software **J-Flash V6.44e**.

**Paso 4.** Instala el paquete del chip.

Descomprime **Pack_Segger_AT32F4xx_v1.3.3.zip** y abre **Segger_AT32F4xx_AddOn.exe**.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**Paso 5.** Crea un nuevo proyecto.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

Busca y selecciona **AT32F403ARGT7**.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**Paso 6.** Arrastra y suelta el firmware del radar (archivo .bin) en este software; aparecerá una ventana, solo usa la dirección inicial predeterminada 0x8000000.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**Paso 7.** Haz clic en **Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

Cuando la conexión sea exitosa mostrará “Connected successfully”.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

Borrar firmware: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

Actualizar firmware: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

En este punto, la actualización del firmware está completa.

#### Actualización de firmware vía UART

Considerando que el J-link es caro, y es muy costoso para la mayoría de usuarios que solo necesitan actualizar su firmware, ofrecemos un método de actualización vía UART.

**Descarga del firmware más reciente**

| Versión Firmware | Dirección de descarga |
|:----------------:|:---------------------:|
| UART_MR60BHA1-230104.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230104.bin) |
| UART_MR60BHA1-230904.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230904.bin) |

:::caution
1. Revisa cuidadosamente la función de tu producto, no mezcles con otros sensores mmWave al flashear este firmware, ¡podrías causar fallos en el producto y la responsabilidad será tuya!

2. Ten en cuenta que diferentes métodos de actualización usan distinto contenido de firmware; este firmware está para quemarse vía **UART**.

3. Asegúrate que tu versión de firmware del radar sea **al menos G60SM1SYv010003** antes de usar UART para actualizar; si no, puede desactivar el radar y tendrás que usar J-link para restaurarlo.

Puedes consultar la versión del firmware enviando el comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` al radar. Los datos reportados se muestran en cadena, por ejemplo:

`G60SM1SYv010009` es el modelo reportado donde `10009` es la versión, que indica soporte para actualización UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/20.png"/></div>
:::

**Para actualizar tu radar a la última versión**

**Paso 1.** Necesitarás un **UART a USB** y el sensor **MR60BHA1** 60GHz mmWave.

Conecta el radar y el UART a USB con cables Dupont como en el diagrama:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Paso 2.** Descarga el software y firmware necesarios.

| Archivo | Dirección de descarga |
|:-------:|:---------------------:|
| PackageMake-v1.1.1.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Paso 3.** Descomprime PackageMake-v1.1.1.zip y abre PackageMake-v1.1.1.exe.

Conecta el UART a USB con el sensor al computador, haz clic en el engrane arriba a la izquierda, selecciona el puerto, pon baudios en 115200 y confirma abajo a la derecha. (Si no aparece el puerto, revisa conexión y pulsa refrescar abajo a la izquierda).

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Paso 4.** Conectar el sensor

Después de configurar el puerto, haz clic en el segundo icono arriba a la derecha y verás los datos crudos del radar si el puerto está bien seleccionado.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Paso 5.** Actualizar firmware

Haz clic en el último icono arriba a la derecha con el botón izquierdo para seleccionar el firmware descargado.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Después de seleccionar, aparecerá la ruta del archivo bajo el software; verifica que versión y modelo coincidan con tu sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/17.png"/></div>

Para actualizar, haz doble clic izquierdo en la imagen superior izquierda del software y el firmware comenzará a descargarse en el sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espera que la barra de progreso termine y la actualización se completará.

### Uso del programa para PC

Conecta el sensor directamente al puerto USB del PC vía dispositivo **UART a USB**. El cableado es:

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART a USB</td>
     <td align="center"></td>
        <td align="center">Sensor MR60BHA1</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
  <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">TX</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX</td>
 </tr>
</table>

Además del software mencionado, puedes usar el [programa para PC](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe) diseñado para radar.

:::tip
Si usas versión antigua de OP y firmware, [actualiza a la última versión](#firmware-version-updates) para aprovechar protocolo y Wiki.
:::

Las siguientes cinco secciones explican las funciones del software.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/1.png"/></div>

1. Configuración de conexión

    Selecciona el puerto donde está conectado el sensor. Usualmente necesitas refrescar puertos antes de elegir. Si el puerto está bien, se actualizan datos automáticamente en el círculo 4 (si hay datos).

2. Ajustes de función

    - **Depuración**: Activa para mostrar datos crudos en tiempo real en el software (ventana en círculo 3).
    - **Guardar datos crudos**: Guarda datos originales en tu PC, pero solo datos previos a pulsar, no nuevos.
    - **Guardar datos de sueño**: Guarda datos crudos relacionados con sueño, otros no. Igual solo guarda datos previos a pulsar.

3. Monitor serial

    Se muestra con opción **Depuración** activada, donde aparecen datos en tiempo real y puedes enviar comandos al sensor (ver manual).

4. Visualización gráfica

    Muestra gráficas en tiempo real de ritmo respiratorio, ritmo cardiaco y parámetros físicos; eje horizontal es tiempo y vertical los datos.

5. Estado y orientación

    Observa presencia humana y orientación del cuerpo. La orientación es solo referencia.

## Desarrollo con Arduino

### Resumen de la librería Arduino

:::tip
Si es tu primera vez con Arduino, recomendamos ver [Comenzando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

El código de la librería usada puede descargarse aquí:

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### Funciones

Antes de programar, revisa las funciones disponibles en la librería:

- `void recvRadarBytes()` —— Recolecta tramas de datos del Sensor vía UART según protocolo. Usar junto con `showData()` para imprimir datos por serial.

  - **Parámetros:** Ninguno

  - **Retorno:** Ninguno

- `void showData()` —— Imprime la trama completa del Sensor por serial. Usar con `recvRadarBytes()`.

  - **Parámetros:** Ninguno

  - **Retorno:** Ninguno

- `void HumanExis_Func()` —— Parsea tramas para estado de presencia humana.

  - **Parámetros:** Ninguno

  - **Retorno:**

    - `unsigned int sensor_report` —— Indica clase de estado según variables por defecto.

    - `int bodysign_val` —— Valor del parámetro de movimiento humano (una vez por segundo).

    - `float distance` —— Distancia al cuerpo humano (metros, reporte cada 2 segundos).

    - `float Dir_x, Dir_y, Dir_z` —— Posición corporal detectada (metros, reporte cada 2 segundos).

- `void Breath_Heart()` —— Parsea datos de respiración y latidos.

  - **Parámetros:** Ninguno

  - **Retorno:**

    - `unsigned int sensor_report` —— Clase de estado.

    - `unsigned int heart_rate` —— Ritmo cardiaco (cada 3 segundos, 0~100).

    - `unsigned int heart_point_1`...`heart_point_5` —— Datos de forma de onda cardíaca (5 valores por segundo, onda seno con eje en 128).

    - `unsigned int breath_rate` —— Ritmo respiratorio (cada 3 segundos, 0~20).

    - `unsigned int breath_point_1`...`breath_point_5` —— Datos de forma de onda respiratoria (igual a cardíaca).

- `void SleepInf_Decode()` —— Parsea datos de sueño. Válido solo si la persona ha estado dormida >5 minutos y modo sueño activo.

  - **Parámetros:** Ninguno

  - **Retorno:** (varios datos sobre sueño y presencia humana, reportados cada 10 minutos o al final del ciclo)

- `void send_func(const unsigned char* buff, int len, bool cyclic = false)` —— Envía tramas de consulta o comando.

  - **Parámetros:**

    - `buff` —— Datos a enviar.

    - `len` —— Longitud de datos.

    - `cyclic` —— Envío cíclico (false por defecto, true si quieres envío repetido).

  - **Retorno:** Ninguno

- `void ModeSelect_fuc(int mode)` —— Selecciona modo de operación: 1 para datos en tiempo real, 2 para modo sueño.

  - **Parámetros:** modo (1 o 2)

  - **Retorno:** Ninguno

- `void reset_func()` —— Resetea el sensor.

  - **Parámetros:** Ninguno

  - **Retorno:** Ninguno

### Variables por defecto

```c
#define MESSAGE_HEAD1 0x53      //Data frame header1
#define MESSAGE_HEAD2 0x59      //Data frame header2

#define MESSAGE_END1  0x54      //End1 of data frame
#define MESSAGE_END2  0x43      //End2 of data frame

#define HUMAN_PSE_RADAR 0x80    //Human presence data

#define PRESENCE_INF 0x01       //Presence Information
#define SOMEONE_HERE 0x01       //Someone here
#define NOONE_HERE 0x00         //Noone here

#define MOVE_INF 0x02           //Campaign Information
#define PSE_NONE 0x00           //None
#define STATIONARY 0x01         //A person is stationary
#define MOVEMENT 0x02           //A person in motion

#define BODY_SIG 0x03           //Body movement information

#define DISTANCE 0x04           //Distance from the person being detected

#define DIRECTIONS 0x05         //Body orientation

#define HEART_INF 0x85          //Heart rate information

#define HEART_RATE 0x02         //Heart rate

#define HEART_RATE_WAVE 0x05    //Heart rate waveform (No analysis for now)

#define BREATH_RATE_RADAR 0x81  //Respiratory heart rate data

#define BREATH_INF 0x01         //Breathing data
#define BREATH_NORMAL 0x01      //Normal breathing
#define BREATH_RAPID 0x02       //Acute respiratory abnormalities
#define BREATH_SLOW 0x03        //Slow heartbeat
#define BREATH_NONE 0x04        //Radar detection nothing

#define BREATH_VAL 0x02         //Breathing values

#define BREATH_WAVE 0x05        //Respiratory waveform (No analysis for now)

#define SLEEP_INF 0x84          //Sleep information

#define INOUT_BED 0x01          //In bed or out of bed
#define OUT_BED 0x00            //Out of bed
#define IN_BED 0x01             //In bed
#define INOUT_NONE 0x02         //None (Display in real-time detection mode)

#define SLEEP_STATE 0x02        //Sleep state
#define DEEP_SLEEP 0x00         //Deep sleep
#define LIGHT_SLEEP 0x01        //Light sleep
#define AWAKE 0x02              //Awake
#define SLEEP_NONE 0x03         //None (Display in real-time detection mode)

#define AWAKE_TIME 0x03         //Awake time

#define LIGHTSLEEP_TIME 0x04    //Light sleep time

#define DEEPSLEEP_TIME 0x05     //Deep sleep time

#define SLEEP_SCORE 0x06        //Sleep quality score

#define SLEEP_STATUE 0x0C       //Sleep integrated status reporte

#define SLEEP_QUALITY 0x0D      //Comprehensive information reporting on sleep quality

#define SLEEP_ERROR 0x0E        //Abnormal sleep reporte

#define SLEEP_LESS4H 0x00        //Sleep less than 4 hours
#define SLEEP_OVER12H 0x01       //Sleep over 12 hours
#define SLEEP_LONGTIMENOONE 0x02 //Unusual situation, no one for a long time
#define SLEEP_ERRORNONE 0x03     //None

#define reset_frame_len 10      //Reset data frame length
//Reset data frame
const unsigned char breath_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

#define mode_frame_len 10       //Mode selection command frame length
//Mode selection command frame
const unsigned char realtime_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x00, 0x40, 0x54, 0x43};
const unsigned char sleepstatus_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x01, 0x41, 0x54, 0x43};

//Return status, Use in arduino
//Possible values for sensor_report
#define NOONE 0x01
#define SOMEONE 0x02
#define NONEPSE 0x03
#define STATION 0x04
#define MOVE 0x05
#define BODYVAL 0x06
#define DISVAL 0x07
#define DIREVAL 0x08

#define HEARTRATEVAL 0x09
#define HEARTRATEWAVE 0x10
#define BREATHNOR 0x11
#define BREATHRAPID 0x12
#define BREATHSLOW 0x13
#define BREATHNONE 0x14
#define BREATHVAL 0x15
#define BREATHWAVE 0x16

#define OUTBED 0x17
#define INBED 0x18
#define NOINOUT 0x19
#define SLEEPAWAKE 0x20
#define SLEEPLIGHT 0x21
#define SLEEPDEEP 0x22
#define SLEEPNONE 0x23
#define AWAKETIME 0x24
#define LIGHTTIME 0x25
#define DEEPTIME 0x26
#define SLEEPSCORE 0x27
#define SLEEPSTATUE 0x28
#define SLEEPQUALITY 0x29
#define SLEEPLESS4H 0x30
#define SLEEPOVER12H 0x31
#define LONGTIMENOONE 0x32
#define ERRORNONE 0x33


unsigned int sensor_report = 0, bodysign_val = 0, awake_time = 0, light_time = 0, deep_time = 0, sleep_score = 0, turn_num = 0;
unsigned int heart_rate = 0, heart_point_1 = 0, heart_point_2 = 0, heart_point_3 = 0, heart_point_4 = 0, heart_point_5 = 0;
unsigned int breath_rate = 0, breath_point_1 = 0, breath_point_2 = 0, breath_point_3 = 0, breath_point_4 = 0, breath_point_5 = 0;
unsigned int substantial_move_ratio = 0, samll_move_ratio = 0, apnea_num = 0, sleep_status = 0, sleep_time = 0;
unsigned int awake_time_radio = 0, light_time_radio = 0, deep_time_radio = 0;
unsigned int outbed_time = 0, outbed_num = 0;
float distance = 0;
float Dir_x = 0, Dir_y = 0, Dir_z = 0;
boolean existence;
```

### Instalación

**Paso 1.** Necesitas instalar el software de Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Inicia la aplicación de Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona el modelo de tu placa de desarrollo y agrégala al IDE de Arduino.

- Si deseas usar **Seeeduino V4.2** para los ejemplos siguientes, por favor consulta [este tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) para completarlo.

- Si deseas usar **Seeeduino XIAO** para los ejemplos siguientes, por favor consulta [este tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) para completarlo.

- Si deseas usar **XIAO RP2040** para los ejemplos siguientes, por favor consulta [este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup) para completarlo.

- Si deseas usar **XIAO BLE** para los ejemplos siguientes, por favor consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) para completarlo.

- Si deseas usar **XIAO ESP32C3** para los ejemplos siguientes, por favor consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup) para completarlo.

:::caution
Para **XIAO nRF52840**, selecciona **Seeed nRF52 mbed-enabled Boards**, de lo contrario podrías recibir errores al ejecutar programas.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**Paso 4.** Instala la librería de código para Arduino.

Comienza obteniendo el código base desde [GitHub](https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor) y descárgalo a tu computadora local.

Una vez que hayas descargado la librería en formato `.zip`, abre tu IDE de Arduino, haz clic en **Sketch > Include Library > Add .ZIP Library**. Selecciona el archivo `.zip` que descargaste, y si la instalación fue correcta, verás el mensaje **Library added to your libraries** en la ventana de notificaciones. Eso significa que la librería fue instalada exitosamente.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Ejemplo en Arduino

Ahora que ya tenemos instalada la librería y comprendemos las funciones básicas, ejecutaremos algunos ejemplos para nuestro XIAO BLE y observar cómo funciona.

### Materiales requeridos

Antes de completar los siguientes ejemplos, necesitarás preparar los siguientes materiales.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz MR60BHA1 Sensor**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm to 2.54mm Pitch Ribbon Cable**|

**Paso 1.** Conecta el dispositivo a la computadora a través de la placa principal. El diagrama de cableado se muestra en la tabla siguiente.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/30.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Seeed Studio XIAO nRF52840</td>
      <td align="center" />
      <td align="center">MR60BHA1 Sensor</td>
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

**Paso 2.** En la barra de menú superior izquierda del IDE de Arduino, selecciona **Herramientas**, elige el tipo de placa de desarrollo que estás usando y selecciona el puerto serial correspondiente.

:::tip
Si estás usando **macOS**, el nombre del puerto serial del dispositivo usualmente comienza con **/dev/cu.usbmodem xxx**, terminando con el nombre del dispositivo. Si estás usando **Windows**, el nombre del puerto suele comenzar con **COM**, también terminando con el nombre del dispositivo.
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

En este ejemplo, demostraremos cómo funciona el radar con nuestro producto popular XIAO BLE.

### Demo1 Exportación de datos sin procesar

Este ejemplo te guiará por el proceso de impresión de los datos sin procesar que reporta el sensor a través del puerto serial.

El siguiente programa de ejemplo se encuentra en la carpeta `examples` de la librería con el nombre **MR60BHA1_print_rawdata**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Si estás utilizando la serie **XIAO ESP32** y no hay retroalimentación de datos desde el radar mmWave, puedes intentar cambiar el código anterior de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este programa, estamos utilizando el puerto **Serial1** por hardware del **XIAO nRF52840** para conectarnos al sensor, y usamos el puerto serial por hardware **Serial** para imprimir los datos, por lo tanto, necesitamos inicializar este puerto serial por separado en la función de inicialización `setup()`.

En la función principal `loop()`, usamos la función `recvRadarBytes()` para recibir tramas de datos desde el sensor y luego usamos la función `showData()` para imprimir esas tramas de datos recibidas a través del puerto serial.

En este programa, es importante tener en cuenta que hay un intervalo entre la recepción y la salida de cada dos tramas de datos para evitar una congestión en la placa principal. Este intervalo no debe ser inferior a **150 ms**.

Esto significa que no hay forma de que la placa principal reciba todas las tramas reportadas por el sensor, pero como la cantidad y frecuencia de tramas reportadas por el sensor es muy alta, esto no afecta la precisión al usar el sensor para determinar el entorno.

Carga el programa. Abre tu monitor serial con una velocidad de baudios de 115200 para ver el resultado. La salida debería lucir similar a la imagen siguiente:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/2.png"/></div>

### Demo2: Uso de la función de detección de presencia humana

En este ejemplo, explicaremos cómo utilizar la función de detección de presencia humana e imprimir todos los valores correspondientes a través del monitor serial.

El siguiente programa de ejemplo se encuentra en la carpeta `examples` de la librería con el nombre **MR60BHA1_human_existence_inf_output**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.HumanExis_Func();           //Human existence information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case NOONE:
        Serial.println("Nobody here.");
        Serial.println("----------------------------");
        break;
      case SOMEONE:
        Serial.println("Someone is here.");
        Serial.println("----------------------------");
        break;
      case NONEPSE:
        Serial.println("No human activity messages.");
        Serial.println("----------------------------");
        break;
      case STATION:
        Serial.println("Someone stop");
        Serial.println("----------------------------");
        break;
      case MOVE:
        Serial.println("Someone moving");
        Serial.println("----------------------------");
        break;
      case BODYVAL:
        Serial.print("The parameters of human body signs are: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("----------------------------");
        break;
      case DISVAL:
        Serial.print("The sensor judges the distance to the human body to be: ");
        Serial.print(radar.distance, DEC);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
      case DIREVAL:
        Serial.print("The sensor judges the orientation data with the human body as -- x: ");
        Serial.print(radar.Dir_x);
        Serial.print(" m, y: ");
        Serial.print(radar.Dir_y);
        Serial.print(" m, z: ");
        Serial.print(radar.Dir_z);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Si estás utilizando la serie **XIAO ESP32** y no hay retroalimentación de datos desde el radar mmWave, puedes intentar cambiar el código anterior de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este ejemplo, la función de detección de presencia humana se implementa mediante la función `HumanExis_Func()`. La lógica básica del programa consiste en que la función `HumanExis_Func()` asigna la información de estado reportada por el sensor a la variable `sensor_report`. En base al valor de `sensor_report`, se imprimen todos los valores correspondientes a ese estado a través del puerto serial.

Ten en cuenta que `sensor_report` corresponde a los datos de salida del puerto serial con indentación. Por ejemplo, la variable `bodysign_val`, que representa el parámetro de signos vitales, solo es válida cuando `sensor_report` es `BODYVAL`, y no está presente en otros valores de `sensor_report` reportados por el sensor.

Carga el programa. Abre tu monitor serial con una velocidad de baudios de 115200 para ver el resultado. La salida debería parecerse a la imagen siguiente:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/3.png"/></div>

### Demo3: Uso de las funciones de respiración y latido en personas en reposo

En este ejemplo, usaremos la función `Breath_Heart()` para detectar la respiración y la frecuencia cardíaca de una persona en estado estacionario.

:::tip
Nuestro enfoque está en la detección de respiración y frecuencia cardíaca de una persona inmóvil. Por favor, no uses el producto mientras el cuerpo humano esté en movimiento, ya que hemos limitado los valores que el sensor puede detectar. La frecuencia cardíaca máxima **no superará 100** y la frecuencia respiratoria máxima **no superará 25**.
:::

El siguiente programa de ejemplo se encuentra en la carpeta `examples` de la librería con el nombre **MR60BHA1_Breath_heartbeat_inf_output**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Si estás utilizando la serie **XIAO ESP32** y no hay retroalimentación de datos desde el radar mmWave, puedes intentar cambiar el código anterior de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Carga el programa. Abre tu monitor serial con una velocidad de baudios de 115200 para ver el resultado. La salida debería parecerse a la siguiente imagen:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/4.png"/></div>

:::caution
Si deseas ver los datos en forma de onda, cambia el sensor al modo de transmisión de datos en tiempo real. Después de cambiar de modo, puede ser necesario reiniciar la alimentación del sensor para que el cambio surta efecto.
:::

### Demo4: Uso de la función de monitoreo del sueño

En este ejemplo, te guiaremos para obtener información sobre el sueño usando la función `SleepInf_Decode()`. Asegúrate de que tú o la persona que realiza la prueba esté lista para acostarse antes de ejecutar este ejemplo.

:::note
Por defecto, el sensor está en modo de transmisión de datos de sueño. En este modo, la función de monitoreo de sueño está activada.  
Si cambias al modo de transmisión de datos en tiempo real, los datos de sueño pueden no estar disponibles.  
Si deseas cambiar el modo de transmisión, puedes usar la función `ModeSelect_fuc()`. También puedes encontrar un ejemplo de uso en el archivo **MR60BHA1_Transfer_mode_selection** dentro de la carpeta `examples`.  
Después de cambiar de modo, puede ser necesario reiniciar la alimentación del sensor para que el cambio tenga efecto.

Los datos relacionados con el sueño solo se reportan cuando una persona está en la cama, y el firmware actual determina que una persona está en la cama después de que el estado de presencia se mantiene durante 5 minutos.
:::

El siguiente programa de ejemplo se encuentra en la carpeta `examples` de la librería con el nombre **MR60BHA1_Sleep_inf_output**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.SleepInf_Decode();           //Sleep-related information output. Data output begins when the monitoring figure is in bed for five minutes.
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case OUTBED:
        Serial.println("Sensor detects someone currently leaving the bed.");
        Serial.println("----------------------------");
        break;
      case INBED:
        Serial.println("Sensor detects that someone is currently in bed.");
        Serial.println("----------------------------");
        break;
      case NOINOUT:
        Serial.println("No subject is detected leaving or going to bed.");
        Serial.println("----------------------------");
        break;
      case SLEEPAWAKE:
        Serial.println("Sensor detects that the monitoring people is awake.");
        Serial.println("----------------------------");
        break;
      case SLEEPLIGHT:
        Serial.println("Sensor detects that the monitoring people is in light sleeping.");
        Serial.println("----------------------------");
        break;
      case SLEEPDEEP:
        Serial.println("Sensor detects that the monitoring people is in deep sleeping.");
        Serial.println("----------------------------");
        break;
      case SLEEPNONE:
        Serial.println("Sleep state of the object is not detected.");
        Serial.println("----------------------------");
        break;
      case AWAKETIME:
        Serial.print("Sensor monitored the awake sleep time is: ");
        Serial.print(radar.awake_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case LIGHTTIME:
        Serial.print("Sensor monitored the light sleep time is: ");
        Serial.print(radar.light_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case DEEPTIME:
        Serial.print("Sensor monitored the deep sleep time is: ");
        Serial.print(radar.deep_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case SLEEPSCORE:
        Serial.print("Sensor judgment sleep score is: ");
        Serial.println(radar.sleep_score);
        Serial.println("----------------------------");
        break;
      case SLEEPSTATUE:
        Serial.println("Sleep integrated state information -- ");
        Serial.print("Human existence: ");
        if(radar.existence)Serial.println("human exis");
        else Serial.println("human non-existent");
        Serial.print("Sleep state: ");
        if(radar.sleep_status == SLEEPDEEP)Serial.println("sleeping soundly");
        else if(radar.sleep_status == SLEEPLIGHT)Serial.println("light sleep");
        else if(radar.sleep_status == SLEEPAWAKE)Serial.println("awake");
        else if(radar.sleep_status == SLEEPNONE)Serial.println("off the bed");
        Serial.print("Average breathing: ");
        Serial.println(radar.breath_rate);
        Serial.print("Average heart rate: ");
        Serial.println(radar.heart_rate);
        Serial.print("Number of turning over during sleep: ");
        Serial.println(radar.turn_num);
        Serial.print("Percentage of substantial exercise during sleep: ");
        Serial.println(radar.substantial_move_ratio);
        Serial.print("Percentage of small-amplitude movements during sleep: ");
        Serial.println(radar.samll_move_ratio);
        Serial.print("Number of apnea: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPQUALITY:
        Serial.println("Quality of sleep information -- ");
        Serial.print("Sleep score: ");
        Serial.println(radar.sleep_score);
        Serial.print("Total time of sleep: ");
        Serial.print(radar.sleep_time);
        Serial.println(" min");
        Serial.print("Percentage of waking time: ");
        Serial.println(radar.awake_time_radio);
        Serial.print("Percentage of light sleep time: ");
        Serial.println(radar.light_time_radio);
        Serial.print("Percentage of deep sleep time: ");
        Serial.println(radar.deep_time_radio);
        Serial.print("Total time away from bed: ");
        Serial.print(radar.outbed_time);
        Serial.println(" min");
        Serial.print("Total number of times out of bed: ");
        Serial.println(radar.outbed_num);
        Serial.print("The number of turning over during sleep: ");
        Serial.println(radar.turn_num);
        Serial.print("Average breathing: ");
        Serial.println(radar.breath_rate);
        Serial.print("Average heart rate: ");
        Serial.println(radar.heart_rate);
        Serial.print("Number of apnea: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPLESS4H:
        Serial.print("The monitored subjects slept for less than 4 hours.");
        Serial.println("----------------------------");
        break;
      case SLEEPOVER12H:
        Serial.print("The length of sleep of the monitored subjects exceeded 12 hours.");
        Serial.println("----------------------------");
        break;
      case LONGTIMENOONE:
        Serial.print("Abnormally unoccupied for long periods of time.");
        Serial.println("----------------------------");
        break;
      case ERRORNONE:
        Serial.print("No abnormal information.");
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Si estás utilizando la serie **XIAO ESP32** y no hay retroalimentación de datos desde el radar mmWave, puedes intentar cambiar el código anterior de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Carga el programa. Abre tu monitor serial con una velocidad de baudios de 115200 para ver el resultado. La salida debería parecerse a la imagen siguiente:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/6.png"/></div>

### Demo5: Enviar datos al sensor

Con base en los detalles proporcionados en el manual del usuario, es posible enviar tramas de comando al sensor para consultar o configurar ciertos estados o modos de funcionamiento según las necesidades reales.

El archivo `.ino` llamado **MR60BHA1_Send_frame**, ubicado en la carpeta `examples` de la librería del sensor, muestra cómo enviar un programa que consulta el ID del dispositivo al sensor.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x5F, 0x54, 0x43};

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.send_func(DevID_buff, 10, false);
  delay(50);                       //Do not set the delay time too long, as this may affect the reception of the data frames returned by the radar.
}
```

:::tip
Si estás utilizando la serie **XIAO ESP32** y no hay retroalimentación de datos desde el radar mmWave, puedes intentar cambiar el código anterior de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En el programa de este ejemplo, puedes ver que se define un arreglo `DevID_buff[10]`, el cual almacena el número hexadecimal del ID del dispositivo que deseas consultar, un byte por posición.

El envío de este comando se realiza mediante la función `send_func()`. Los parámetros que se le pasan son: el arreglo con los datos del frame, la longitud del arreglo y si deseas enviarlo en modo cíclico.

Si necesitas enviar tus propios frames de comando, entonces debes definir correctamente el arreglo según el formato de frame que se proporciona en el manual de usuario.

:::tip
**Sobre el cálculo del dígito de verificación "sum".**

Todos los frames de datos tienen un bit de suma de verificación (checksum) para asegurar que los datos se envíen o reciban de forma correcta. Este bit suele ubicarse en el penúltimo byte del frame.  
Se calcula sumando todos los bytes anteriores al bit de verificación y tomando los dos últimos dígitos en hexadecimal.

Tomemos como ejemplo un frame que consulta el ID del dispositivo:  
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

Podemos ver que el bit de verificación se encuentra en el penúltimo byte del frame completo. Entonces sumamos todos los valores hexadecimales anteriores:

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

Luego tomamos los dos últimos dígitos de ese resultado, que serían **60**, por lo que el checksum de este frame es **60**.

Si deseas consultar el ID del sensor, entonces puedes definir el siguiente arreglo:

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`
:::

Carga el programa. Abre tu monitor serial con una velocidad de baudios de 115200 para ver el resultado. La salida debería parecerse a la imagen siguiente:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/5.png"/></div>

En este punto, revisa los frames de datos que se devuelven y verifica si coinciden con los descritos en el manual de usuario.

Normalmente, **no es necesario repetir** el envío de comandos al sensor. Sin embargo, como el sensor responde con datos muy rápidamente, no siempre podemos garantizar que recibamos exactamente la respuesta deseada.

Existen dos soluciones para este problema:

- Re-subir el programa anterior varias veces.  
- Establecer el tercer parámetro de la función `send_func()` (envío cíclico) en `true`.  
  Ten en cuenta que si repites el envío de comandos del tipo **configuración**, esto **podría hacer que el sensor se bloquee**, así que utiliza esta función con precaución.  
  Si el sensor se bloquea, desconecta el pin de 5V del sensor y espera unos segundos para que vuelva a la normalidad.

### Demo6: Reiniciar el sensor

Puede haber ocasiones en las que experimentes errores con el sensor o desees borrar todas las configuraciones realizadas. En ese caso, puedes reiniciar el sensor utilizando este ejemplo.

El siguiente programa de ejemplo se encuentra en la carpeta `examples` de la librería con el nombre **MR60BHA1_Reset_sensor**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  radar.reset_func();
}

void loop()
{
  // put your main code here, to run repeatedly:
}
```

:::tip
Si estás utilizando la serie **XIAO ESP32** y no hay retroalimentación de datos desde el radar mmWave, puedes intentar cambiar el código anterior de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Reiniciar el sensor es muy sencillo, solo necesitas llamar a la función `reset_func()`.  
El reinicio solo debe **ejecutarse una vez**, por eso lo usamos dentro de la función `setup()`.

### Demo7: Uso con Arduino/Seeeduino

Nuestra librería es compatible con Arduino, así que también puedes usar el Arduino que tengas a mano para desarrollar tu proyecto con el sensor.

El sensor MR60BHA1 se comunica usando el puerto serie UART. Solo necesitas conectar el sensor a tu placa Arduino según el siguiente diagrama:

<table align="center">
 <tr>
     <td align="center">MR60BHA1 Sensor</td>
     <td align="center"></td>
        <td align="center">MCU</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
    <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">soft serial port TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">soft serial port RX</td>
 </tr>
</table>

Todas las funciones se aplican de la misma manera que en los ejemplos Demo1 a Demo6 anteriores, por lo que no las repetiremos aquí.  
En este ejemplo, te mostraremos cómo usar el puerto serie por software de Arduino para obtener información de datos del sensor.

:::tip
Para más información sobre el puerto serie por software en Arduino, consulta la [documentación oficial de Arduino](https://docs.arduino.cc/learn/built-in-libraries/software-serial).
:::

Para evitar confusiones de datos causadas por usar el puerto `Serial` tanto para la salida como para la transmisión de datos, del lado de Arduino usualmente usamos un puerto serie por software.

La importación de la librería del puerto serie por software y la definición de los pines RX y TX deben realizarse al inicio del programa.  
En el siguiente ejemplo, se definen los pines **A2** y **A3** como **RX** y **TX** del puerto serie por software, respectivamente.

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);
```

Also, don't forget to set the baud rate for the soft serial port in the `Setup()` function.

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}
```

Using **Demo1** as an example, if you want to use the Arduino to print the reported data frames from the Sensor, then the complete program is as follows.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

### Demo8: Conexión directa a la PC para obtener datos

Puedes consultar esta rutina si deseas utilizar un software de PC diseñado para el sensor o si deseas obtener un marco de datos completo mediante un software de comunicación serial.

Conecta el sensor directamente al puerto USB de la computadora mediante un dispositivo **UART a USB**. El cableado se muestra en la tabla siguiente.

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center"><strong>UART a USB</strong></td>
     <td align="center"></td>
     <td align="center"><strong>Sensor MR60BHA1</strong></td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
     <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
     <td align="center">GND</td>
 </tr>
 <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
     <td align="center">TX</td>
 </tr>
 <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
     <td align="center">RX</td>
 </tr>
</table>

Utiliza un software de depuración serial para seleccionar el puerto donde está conectado el sensor.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
El sensor MR60BHA1 necesita una fuente de alimentación de 5V, de lo contrario puede que no funcione correctamente.
:::

Después de una conexión exitosa, verás que el sensor envía un flujo constante de mensajes.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

Al mismo tiempo, también puedes enviar marcos de datos al sensor mediante la función de envío del software.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
Si eliges el formato **ASCII** para enviar los datos, cada conjunto debe ir precedido de **0x**.  
Si eliges **HEX**, entonces no es necesario anteponer **0x** a cada conjunto de datos.
:::

## Resolución de Problemas

### FAQ1: ¿Puede este sensor detectar más de una persona al mismo tiempo en el mismo entorno?

- R: No es posible. Este sensor solo puede utilizarse con un único objeto vivo. Si hay más de una persona o animal dentro del rango de monitoreo, esto afectará los resultados.

### FAQ2: ¿Por qué no veo nada en el monitor serial con el

- R: La función del puerto serie en el XIAO ESP32C3 no es completamente compatible con la del hardware estándar de Arduino, y usar directamente `Serial1` puede hacer que el puerto USB serial no funcione. Para casos de uso relacionados, consulta el [capítulo de Serial del XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/#serial) para más detalles.

## Recursos

- **[PDF]** [Hoja de datos del sensor de respiración y latido](https://files.seeedstudio.com/wiki/mmWave-radar/MR60BHA1_Datasheet.pdf)
- **[PDF]** [Manual de usuario del sensor de respiración y latido - V1.9](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_user_manual-V1.9.pdf)
- **[PDF]** [Manual de usuario del sensor de respiración y latido - V2.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_userManual_V2.3.pdf)
- **[EXE]** [Software para PC - versión antigua](https://files.seeedstudio.com/wiki/60GHzradar/Human-Vital-Sign-Radar.exe)
- **[EXE]** [Software para PC - nueva versión](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)
- **[PPTX]** [Serie de sensores mmWave de Seeed V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)
- **[ZIP]** [60G-Radar-heartbeat-3D](https://files.seeedstudio.com/wiki/mmWave-radar/60G-Radar-heartbeat-3D.zip)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos!  
Estamos aquí para ofrecerte soporte y asegurarnos de que tu experiencia sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
