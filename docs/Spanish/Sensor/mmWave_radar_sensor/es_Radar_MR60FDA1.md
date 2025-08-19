---
description: 60GHz mmWave Fall Detection Pro
title: 60GHz mmWave Fall Detection Pro
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR60FDA1
last_update:
  date: 07/18/2025
  author: Guillermo
---
# Sensor mmWave 60GHz - Módulo Pro de Detección de Caídas (MR60FDA1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"  style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Sensor Radar mmWave 60GHz - Módulo Pro de Detección de Caídas aplica la teoría FMCW para implementar la detección simultánea de actividades humanas incluyendo movimiento, caída y estado estacionario con alta precisión, proporcionando un entorno completamente privado y seguro, independiente de otras interferencias ruidosas. Es un sistema radar biótico estándar en vigilancia de propiedad privada, alerta de caídas, cuidado de personas mayores, funcionando bien en hogares, hoteles y hospitales. En esta wiki, te mostraremos cómo utilizarlo.

### Aplicaciones

- Hogar inteligente
- Cuidado de la salud
- Detección de caídas
- Hotel inteligente
- Asistentes médicos

### Características

- Teoría habilitada: Implementa detección radar basada en señales FM continuas de 60GHz
- Algoritmo de detección mejorado: Detecta y reporta simultáneamente actividades humanas incluyendo movimiento, caída y estado estacionario en ambientes de auto-adaptación
- Protección perfecta de privacidad: Aplica tecnología de monitoreo FMCW para vigilancia sin identificación
- Estado de trabajo amigable para la salud: Potencia de salida tan baja que no afecta al cuerpo humano
- Alta estabilidad: Independiente de temperatura, humedad, ruido, flujo de aire, polvo, luz y otras influencias ambientales
- Alta precisión medida: Logra hasta 90% de precisión en detección de caídas y hasta 90% en detección de presencia
- Diseño de hardware flexible: Soporta desarrollo secundario, adaptable a diversas aplicaciones

### Especificaciones

| Ángulo y distancia de detección | Mínimo | Típico | Máximo | Unidad |
|---------------------------------|--------|--------|--------|--------|
| Radio de movimiento de detección de personas [1] |        | 6      |        | metros |
| Radio de monitoreo de caídas [2]                 |        | 3      |        | metros |
| Ángulo de detección radar (horizontal)           |        | 60     |        | grados |
| Ángulo de detección radar (inclinación)           |        | 60     |        | grados |
| Nota: [1][2] Altura de montaje radar 2.8 m, radio de proyección radar. |        |        |        |        |
| **Características eléctricas**                     |        |        |        |        |
| Voltaje de operación (VCC)                         | 4.5    | 5      | 6      | V      |
| Corriente de operación (ICC)                       | 90     | 93     | 100    | mA     |
| Temperatura de operación (TOP)                      | -20    |        | 60     | ℃      |
| Temperatura de almacenamiento (TST)                | -40    |        | 80     | ℃      |
| **Rendimiento RF**                                  |        |        |        |        |
| Frecuencia de operación (fTX)                      | 58     |        | 63.5   | GHz    |
| Potencia transmitida (Pout)                         |        |        | 6      | dBm    |

## Visión General del Hardware

Antes de comenzar, es esencial conocer algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Módulo Pro de Detección de Caídas mmWave 60GHz.

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- Interfaz 1:
  - El pin 5V es la entrada de alimentación para el sensor.
  - RX y TX son las interfaces de transmisión de datos. RX significa recepción serial y TX transmisión serial.
  - Interfaz de salida del estado de presencia humana. Puedes usar el nivel de estos pines para determinar el movimiento humano actual en el entorno.
    - Salida GP2: nivel alto - ocupado, nivel bajo - desocupado.
    - Salida GP1: nivel alto - activo, nivel bajo - estacionario.
- Interfaz 2:
  - Pines para actualización de firmware: GND/3.3V/SWD/SWC.
  - Pines de entrada/salida adicionales: GP3~GP6.

## Primeros Pasos

### Actualización de versión de firmware

El sensor mmWave ha pasado por un largo proceso de desarrollo y sugerencias valiosas de usuarios, iterando para ofrecer resultados de monitoreo más precisos y una mejor experiencia.

Los sensores recién enviados vienen con el firmware más reciente por defecto para garantizar la mejor experiencia. Sin embargo, para usuarios antiguos, proporcionamos el firmware más reciente y el método de actualización para que puedas usar la tecnología más avanzada.

#### Método universal - usar J-link para grabar firmware

Si tienes firmware incorrecto, anomalías o mal funcionamiento del radar, este método es el más efectivo para re-flashear el firmware.

**Descarga del firmware más reciente**

| Versión de Firmware | Dirección de descarga |
|:-------------------:|:---------------------:|
| Jlink_MR60FDA1-V0821.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-230821.bin) |
| Jlink_MR60FDA1-V0728.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V0728.bin) |
| Jlink_MR60FDA1-V114.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V114.bin) |

:::caution
1. Por favor verifica cuidadosamente la función de tu producto, no mezcles este firmware con otros sensores mmWave, de lo contrario podrías causar fallos en el funcionamiento y serás responsable.

2. Ten en cuenta que diferentes métodos de actualización usan diferentes archivos de firmware. Este firmware es para actualizar con **J-link**.
:::

**Para actualizar tu radar a la última versión**

**Paso 1.** Necesitarás un **Jlink** y el sensor **MR60FDA1** mmWave 60GHz.

Conecta el radar y el Jlink mediante cables Dupont como muestra el diagrama.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**Paso 2.** Descarga el software y firmware necesarios.

| Archivo | Dirección de descarga |
|:-------:|:---------------------:|
| JlinkV644e.rar | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip) |

**Paso 3.** Descomprime **JlinkV644e.rar** y ejecuta el archivo **JLink_Windows_V644e.exe** dentro.

Sigue las opciones por defecto para instalar. Al terminar, inicia el software **J-Flash V6.44e**.

**Paso 4.** Instala el paquete del chip.

Descomprime **Pack_Segger_AT32F4xx_v1.3.3.zip** y ejecuta **Segger_AT32F4xx_AddOn.exe**.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**Paso 5.** Crea un nuevo proyecto.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

Busca y selecciona **AT32F403ARGT7**.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**Paso 6.** Arrastra y suelta el firmware del radar (.bin) en el software y aparecerá una ventana; usa la dirección de inicio por defecto 0x8000000.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**Paso 7.** Haz clic en **Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

Cuando la conexión sea exitosa aparecerá “Connected successfully”.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

Para borrar el firmware: **Target** -> **Manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

Para actualizar el firmware: **Target** -> **Manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

Aquí termina la actualización del firmware.

#### Actualización de firmware vía UART

Considerando que J-link es costoso, para la mayoría que solo quiere actualizar firmware, ofrecemos método vía UART.

**Descarga del firmware más reciente**

| Versión de Firmware | Dirección de descarga |
|:-------------------:|:---------------------:|
| UART_MR60FDA1-230821.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230821.bin) |
| UART_MR60FDA1-230728.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230728.bin) |
| UART_MR60FDA1-230227.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230227.bin) |
| UART_MR60FDA1-230915.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230915.bin) |

:::caution
1. Verifica cuidadosamente la función de tu producto, no mezcles firmware con otros sensores mmWave, podrías causar mal funcionamiento.

2. Ten en cuenta que diferentes métodos usan diferentes archivos de firmware, este es para actualización por **UART**.

3. Asegúrate que la versión de firmware sea **al menos G60FD1SYv010102** antes de actualizar vía UART, si no, podrías deshabilitar el radar y tendrías que usar J-link para reprogramar.

Puedes consultar la versión enviando el comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` al radar. El radar responderá con un string similar a:

`G60FD1SYv010104` donde `010104` es la versión. Esto indica que el sensor soporta actualización UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/19.png"/></div>
:::

**Para actualizar tu radar a la última versión**

**Paso 1.** Necesitarás un **UART a USB** y el sensor **MR60FDA1** 60GHz mmWave.

Conecta el radar y el UART a USB con cables Dupont como en el diagrama.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Paso 2.** Descarga el software y firmware necesarios.

| Archivo | Dirección de descarga |
|:-------:|:---------------------:|
| PackageMake-v1.1.1.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Paso 3.** Descomprime PackageMake-v1.1.1.zip y ejecuta PackageMake-v1.1.1.exe.

Conecta el UART a USB con el sensor conectado al computador, haz clic en el icono de engranaje arriba a la izquierda del software, selecciona el puerto, configura baud rate a 115200 y confirma. (Si no aparece puerto, revisa conexión y refresca).

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Paso 4.** Conectar el sensor

Tras configurar el puerto serial, haz clic en el segundo icono arriba a la derecha; si el puerto es correcto, verás datos crudos del radar.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Paso 5.** Actualizar firmware

Haz clic en el último icono arriba a la derecha con el botón izquierdo, aparecerá ventana para seleccionar el firmware descargado.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Después de seleccionar, la ruta aparecerá en el software, verifica que versión y modelo coincidan con el sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/14.png"/></div>

Para iniciar la actualización, haz doble clic en la esquina superior izquierda (la última imagen), el firmware comenzará a descargarse al sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espera que la barra de progreso termine y la actualización finalice.

### Uso del software para PC

Conecta el sensor directamente al puerto USB del computador mediante un dispositivo **UART a USB**. La conexión es la siguiente:

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART a USB</td>
     <td align="center"></td>
        <td align="center">Sensor MR60FDA1</td>
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

Además del software serial mencionado, puedes usar el [software para PC](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip) diseñado para el radar.

Las dos siguientes secciones explican la función de cada parte del software.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/10.png"/></div>

- **Área de trabajo**

    Todas las funciones del programa para PC se muestran únicamente en el área de trabajo. El contenido principal se concentra en la parte superior del espacio de trabajo.

    **Estación:** Muestra si hay alguien presente, moviéndose o estático.

    **Estado de caída:** El estado de la caída se presenta como una animación del personaje. La imagen muestra que no hay caída; si alguien cae, se mostrará una animación de una persona cayendo.

    **Configuración:** Se usa para ajustar el número de puerto donde el sensor está conectado al PC. Generalmente, cuando el sensor está conectado vía UART a USB, debes hacer clic en **Actualizar** para refrescar el puerto, luego seleccionar el puerto nuevo que apareció, hacer clic en **Abrir**, y finalmente en **Iniciar** para activar la función de monitoreo.

    **Altura de instalación/cm:** Se refiere a la altura de instalación. Para asegurar la precisión en la detección de caídas, instala el sensor como sigue: ¡instálalo en la parte superior! El radar debe instalarse verticalmente con un ángulo de desviación horizontal ≤5° para cubrir el área de detección; la altura recomendada de instalación es 2m ≤ H ≤ 3m. No debe haber obstrucciones evidentes frente al radar. Según la altura y el rango del haz, el radio máximo para detección de personas en movimiento es R3 ≈ 3 metros; para personas estáticas R2 ≈ 2.25 metros; para detección de caída R1 ≤ 2 metros.

    Por ejemplo, si la altura de instalación es 2.6 metros, deberás ingresar 260 y hacer clic en el botón **Enviar**.

- **Área inválida**

    Esta área no funciona actualmente, solo es una interfaz reservada.

:::caution
¡Este radar actualmente no soporta rango, velocidad ni nubes de puntos!
:::

## Desarrollo con Arduino

### Resumen de la librería Arduino

:::tip
Si es tu primera vez usando Arduino, te recomendamos consultar [Comenzando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

El código de la librería usado en este ejemplo puede descargarse haciendo clic en el ícono a continuación.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### Funciones

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles en la librería.

- `void recvRadarBytes()` —— Esta función recoge los frames de datos reportados por el Sensor vía UART según los encabezados y colas de frames en el protocolo de datos del Sensor. Se usa junto con la función `showData()` para imprimir la información recibida por el puerto serial.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void showData()` —— Esta función imprime el frame de datos completo reportado por el Sensor de una vez vía puerto serial y debe usarse junto con `recvRadarBytes()`.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void HumanExis_Func()` —— Esta función analiza los frames de datos del Sensor y entrega los datos relevantes sobre el estado de presencia humana.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— Valor que indica a qué categoría de estado pertenece el frame analizado. Las categorías específicas están en la sección **Variables por defecto**. La información sobre movimiento humano se reporta solo cuando hay cambios.

    - `int bodysign_val` —— Valor del parámetro de movimiento humano. Se reporta una vez por segundo.

- `void Fall_Detection()` —— Función para analizar y reportar detección de caída. La detección se guarda en `sensor_report`.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— Valor que indica a qué categoría de estado pertenece el frame analizado. Las categorías específicas están en **Variables por defecto**. La información de caída se reporta solo al cambiar.

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— Función para enviar tramas de consulta y comando.

  - **Parámetros de entrada:**

    - `buff` —— Frame de datos a enviar al Sensor.

    - `len` —— Longitud del frame de datos.

    - `cyclic` —— Indicador para envío cíclico. Por defecto `false`; se puede poner en **true** para envío repetido.

  - **Valor de retorno:** Ninguno

- `void reset_func()` —— Función para resetear el Sensor.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

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

#define MOVE_DIS 0x0E           //Determine the distance at which the movement occurs

#define FALL_DETECTION 0x83     //Fall data markers

#define FALL_STATE 0x01         //Fall status marker
#define NO_FALL 0x00            //No falls detected
#define FALLING 0x01            //Fall detected

#define RESIDENT_STATE 0x05     //Resident status
#define NO_RESIDENT 0x00        //No stationary residency
#define RESIDENT 0x01           //There is a stationary residency

#define reset_frame_len 10      //Reset data frame length
//Reset data frame
const unsigned char fall_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

//Return status, Use in arduino
#define NOONE 0x01
#define SOMEONE 0x02
#define NONEPSE 0x03
#define STATION 0x04
#define MOVE 0x05
#define BODYVAL 0x06
#define MOVEDIS 0x07

#define NOFALL 0x08
#define FALL 0x09
#define NORESIDENT 0x10
#define RESIDENCY 0x11

unsigned int sensor_report = 0, bodysign_val = 0, total_detect = 0, height_0005 = 0, height_0510 = 0, height_1015 = 0, height_1520 = 0;
```

### Instalación

**Paso 1.** Necesitas instalar el software de Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Abre la aplicación de Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona el modelo de tu placa de desarrollo y añádelo al Arduino IDE.

- Si quieres usar **Seeeduino V4.2** para los siguientes ejemplos, consulta [este tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) para agregarla.

- Si quieres usar **Seeeduino XIAO**, consulta [este tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software).

- Si quieres usar **XIAO RP2040**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup).

- Si quieres usar **XIAO BLE**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup).

- Si quieres usar **XIAO ESP32C3**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup).

:::caution
Para **XIAO nRF52840**, selecciona **Seeed nRF52 mbed-enabled Boards**, de lo contrario puede que ocurra un error al ejecutar los programas.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**Paso 4.** Instala la librería de Arduino.

Descarga el código base desde [GitHub](https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor) y guárdalo en tu computadora.

Después de descargar el archivo zip de la librería, abre Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library**. Selecciona el archivo zip descargado y si la librería se instala correctamente, verás el mensaje **Library added to your libraries** indicando que la instalación fue exitosa.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Ejemplo en Arduino

Ahora que tenemos la librería instalada y conocemos las funciones básicas, ejecutemos algunos ejemplos con nuestra XIAO BLE para ver cómo funciona.

### Materiales requeridos

Antes de hacer los siguientes ejemplos, prepara estos materiales.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor Radar 60GHz mmWave**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cable Ribbon 2mm a 2.54mm Pitch**|

**Paso 1.** Conecta el dispositivo a la computadora mediante la placa principal. El esquema de conexión está en la tabla siguiente.

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/30.png"/></div></td>
 </tr >
 <tr >
     <td align="center">Seeed Studio XIAO nRF52840</td>
     <td align="center"></td>
        <td align="center">Sensor MR60FDA1</td>
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
        <td align="center">D6</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">D7</td>
 </tr>
</table>

**Paso 2.** En la barra de menú superior izquierda del Arduino IDE, selecciona **Herramientas**, elige el tipo de placa que estás usando y selecciona el puerto serial correspondiente.

:::tip
Si usas **MacOS**, el puerto serial suele comenzar con **/dev/cu.usbmodem xxx**, terminando con el nombre del dispositivo. En **Windows**, el puerto serial suele comenzar con **COM**, seguido del nombre del dispositivo.
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

En este ejemplo, mostraremos cómo funciona el radar con el popular producto XIAO BLE.

### Demo1 Exportación de datos en bruto

Este ejemplo muestra cómo imprimir los datos en bruto reportados por el Sensor vía puerto serial.

El siguiente programa de ejemplo está en la carpeta examples de la librería, llamado **MR60FDA1_print_rawdata**.


```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

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
Si estás usando la serie XIAO ESP32 y no recibes datos del radar mmWave, puedes intentar cambiar el código de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este programa, usamos el puerto hardware **Serial1** del XIAO nRF52840 para conectar con el sensor y el puerto hardware **Serial** para la salida de datos, por lo que necesitamos inicializar este puerto serial por separado en la función `setup()`.

En la función principal `loop()` usamos la función `recvRadarBytes()` para recibir los frames de datos del sensor y luego usamos la función `showData()` para imprimir los frames recibidos vía el puerto serial.

Es importante destacar que entre la recepción y salida de cada dos frames de datos hay un intervalo para evitar saturar la placa principal. Este tiempo debe ser no menor a **150 ms**.

Esto significa que la placa principal no recibe todos los frames reportados por el sensor, pero dado que el número de frames es muy alto y frecuente, esto no afecta la precisión para determinar el entorno con el sensor.

Sube el programa. Al abrir el monitor serial con una velocidad de 115200 baudios, deberías ver el resultado. La salida debería verse similar a la imagen a continuación.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/7.png"/></div>

### Demo2: Uso de la función de detección de presencia humana

En este ejemplo, explicaremos cómo usar la función de detección de presencia humana y mostrar todos los valores de esta función a través del monitor serial.

El siguiente programa de ejemplo está en la carpeta examples de la librería, llamado **MR60FDA1_human_existence_inf_output**.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

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
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Si estás usando la serie XIAO ESP32 y no recibes datos del radar mmWave, puedes intentar cambiar el código de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este ejemplo, la función para detectar la presencia de un cuerpo humano se implementa mediante la función `HumanExis_Func()`.  
La lógica básica del programa es que la función `HumanExis_Func()` asigna la información del estado reportada por el sensor a la variable `sensor_report`.  
Basándonos en el valor de `sensor_report`, imprimimos todos los valores correspondientes a ese estado por el puerto serial.

Nota que el `sensor_report` corresponde a la salida de datos en el puerto serial bajo indentación. Por ejemplo, la variable `bodysign_val`, que representa el parámetro de señal, solo es válida cuando `sensor_report` es `BODYVAL`, y no aparece en otros `sensor_report` reportados por el sensor.

Sube el programa. Al abrir el monitor serial a 115200 baudios deberías ver el resultado. La salida debería parecerse a la imagen a continuación.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/8.png"/></div>

### Demo3: Detección de caídas humanas

En este ejemplo, usaremos la función `Fall_Detection()` para detectar caídas humanas.

:::tip
El principio de la salida del estado de caída es que solo se genera contenido cuando el sensor detecta un cambio en el estado de la caída.
:::

El siguiente programa de ejemplo está en la carpeta examples de la librería llamado **MR60FDA1_Fall_detection**.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

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
  radar.Fall_Detection();           //Receive radar data and start processing
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
        case NOFALL:
            Serial.println("The sensor detects this movement is not a fall.");
            Serial.println("----------------------------");
            break;
        case FALL:
            Serial.println("The sensor detects a fall.");
            Serial.println("----------------------------");
            break;
        case NORESIDENT:
            Serial.println("The sensors did not detect anyone staying in place.");
            Serial.println("----------------------------");
            break;
        case RESIDENCY:
            Serial.println("The sensor detects someone staying in place.");
            Serial.println("----------------------------");
            break;
    }
  }
  delay(200); //Add time delay to avoid program jam
}
```

:::tip
Si estás usando la serie XIAO ESP32 y no recibes datos del radar mmWave, puedes intentar cambiar el código de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Entre las funciones de detección de caídas, también existe una función para la detección de inmovilidad.  
La función principal de esta función es ayudar al usuario o al sensor a determinar si el cuerpo humano ha caído o no.  
Cuando no hay actividad humana durante un periodo tras un cambio brusco de aceleración en la dirección vertical (es decir, permaneciendo en el mismo lugar), hay una alta probabilidad de que el sensor determine que alguien ha caído y está inconsciente.

### Demo4: Enviar datos al sensor

Según los detalles proporcionados en el manual de usuario, el usuario puede enviar tramas de comando al sensor para consultar o configurar ciertos estados o modos del sensor según las necesidades reales.

El archivo .ino llamado **MR60FDA1_Send_frame** en la carpeta examples de la librería del sensor nos muestra cómo enviar un programa que consulta el ID del dispositivo al sensor.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

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
Si usas la serie XIAO ESP32 y no recibes datos del radar mmWave, prueba a cambiar el código de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En el programa de este ejemplo, se define un arreglo `DevID_buff[10]` que almacena en cada byte el número hexadecimal para consultar el ID del dispositivo.

El envío se realiza mediante la función `send_func()`. Los parámetros que recibe son: el arreglo de la trama a enviar, la longitud del arreglo y un booleano que indica si el envío es cíclico.

Si necesitas enviar tus propias tramas de comando, deberás definir el arreglo correcto según el formato de trama provisto en el manual de usuario.

:::tip
**Sobre el cálculo del dígito de verificación "sum".**

Todas las tramas de datos tienen un byte de checksum para asegurar que los datos se envían o reciben correctamente.  
El byte de checksum generalmente está en el penúltimo byte de la trama. Se calcula sumando todos los bytes anteriores y tomando los dos dígitos hexadecimales menos significativos.

Por ejemplo, para la trama de consulta del ID del dispositivo:  
<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

El checksum está en el penúltimo byte. Sumamos los bytes previos:

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

Tomamos los dos dígitos menos significativos: **60**, así que el checksum es **60**. Para consultar el ID del Sensor, la siguiente definición es válida:

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`
:::

Sube el programa. Abre el monitor serial a 115200 baudios para ver el resultado. La salida debería parecerse a la imagen siguiente.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/9.png"/></div>

Revisa que las tramas de datos recibidas coincidan con las descritas en el manual.

Normalmente, no es necesario repetir los comandos al Sensor, pero dado que el Sensor responde muy rápido y no siempre podemos asegurar recibir la trama exacta, existen dos soluciones:

- Repetir varias veces el procedimiento.
- Usar el tercer parámetro de la función `send_func()` (envío cíclico) en `true`.  
  **Advertencia:** El envío repetido de tramas de configuración puede provocar que el Sensor se bloquee. Úsalo con precaución.  
  Si el Sensor se bloquea, desconecta el pin de 5V y espera unos momentos para que se recupere.

### Demo5: Reiniciar el Sensor

Si tienes problemas o quieres borrar todas las configuraciones del Sensor, puedes reiniciarlo con este ejemplo.

El archivo de ejemplo está en la carpeta **examples** de la librería, llamado **MR60FDA1_Reset_sensor**.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

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
Si usas la serie XIAO ESP32 y no recibes datos del radar mmWave, prueba a cambiar el código de  
```Serial1.begin(115200);```  
a  
```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Reiniciar el Sensor es muy sencillo, solo necesitas llamar a la función `reset_func()`.  
El reset solo debe ejecutarse **una vez**, por lo que se recomienda hacerlo en la función `Setup()`.

### Demo6: Uso con Arduino/Seeeduino

Nuestra librería es compatible con Arduino, por lo que puedes usar cualquier placa Arduino para desarrollar tu proyecto con el Sensor.

El Sensor MR60FDA1 se comunica por el puerto serial UART. Solo conecta el Sensor a tu Arduino siguiendo esta tabla:

<table align="center">
 <tr>
     <td align="center">Sensor MR60FDA1</td>
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
        <td align="center">TX puerto serial software</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX puerto serial software</td>
 </tr>
</table>

Las funciones se usan igual que en los demos 1 a 5, por lo que no las repetiremos aquí.  
En este demo daremos una visión general sobre cómo usar el puerto serial software para obtener datos del Sensor.

:::tip
Para notas sobre el puerto serial software de Arduino, consulta la [documentación oficial de Arduino](https://docs.arduino.cc/learn/built-in-libraries/software-serial).
:::

Para evitar conflictos de datos al usar el puerto Serial tanto para salida como para transmisión, en Arduino se recomienda usar un puerto serial software.

La importación de la librería para el serial software y la definición de los pines RX y TX deben hacerse al inicio del programa.  
El siguiente ejemplo define los pines **A2** y **A3** como RX y TX del puerto serial software respectivamente:

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);
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

Usando **Demo1** como ejemplo, si desea utilizar Arduino para imprimir los marcos de datos informados desde el sensor, entonces el programa completo es el siguiente.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

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

### Demo7: Conexión directa al PC para datos

Puedes usar esta rutina si quieres emplear un software de ordenador superior diseñado para el Sensor, o si prefieres usar un puerto serial por software para obtener tramas completas de datos.

Conecta el Sensor directamente al puerto USB del ordenador mediante un dispositivo **UART a USB**. El cableado es el siguiente:

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART a USB</td>
     <td align="center"></td>
        <td align="center">Sensor MR60FDA1</td>
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

Usa un software como un asistente de depuración serial para seleccionar el puerto serial donde está conectado el Sensor.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
El Sensor MR60FDA1 requiere alimentación de 5V, de lo contrario puede no funcionar correctamente.
:::

Tras una conexión exitosa, verás que el Sensor envía un flujo constante de mensajes.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

Además, puedes enviar tramas de datos al Sensor usando la función de envío del software.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
Si eliges **ASCII** para enviar datos, cada dato debe ir precedido por **0x**. Si eliges **HEX**, no es necesario poner el prefijo **0x**.
:::

## Resolución de problemas

### FAQ1: ¿Puede este Sensor detectar más de una persona al mismo tiempo en el mismo ambiente?

> A: No. Este Sensor solo está diseñado para detectar un solo ser vivo. Si hay más de una persona o animal en el área de monitoreo, esto afectará los resultados.

### FAQ2: ¿Por qué no veo datos en el monitor serial con el XIAO ESP32C3?

> El puerto serial del XIAO ESP32C3 funciona de manera diferente al hardware Arduino tradicional, y usar `Serial1` directamente puede impedir que funcione el puerto USB serial. Para más detalles y casos de uso, visita el capítulo [Serial en XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/#serial).

## Recursos

- **[PDF]** [Protocolo Universal](https://files.seeedstudio.com/wiki/60GHzradar/60GHz_mmWave_Sensor_Fall_Detection_Module_Pro-Universal_Protocol.pdf)
- **[PDF]** [Manual de usuario V1.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60FDA1_user_manual-V1.3.pdf)
- **[PDF]** [Diseño de carcasa Seeed Studio MMWave Sensor](https://files.seeedstudio.com/wiki/60GHzradar/Seeed_Studio_MMWave_Sensor-Case_Design.pdf)
- **[EXE]** [Software para ordenador superior](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte para que tu experiencia sea lo más fluida posible.  
Disponemos de varios canales de comunicación para atender tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
