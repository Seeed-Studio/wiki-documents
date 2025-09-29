---
description: 60GHz mmWave Fall Detection Pro
title: 60GHz mmWave Fall Detection Pro
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR60FDA1
last_update:
  date: 03/03/2023
  author: Citric
---
# Sensor mmWave de 60GHz - Módulo de Detección de Caídas Pro (MR60FDA1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"  style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Sensor Radar mmWave de 60GHz - Módulo de Detección de Caídas Pro aplica la teoría de detección FMCW para implementar la detección simultánea de actividades humanas incluyendo movimiento, caídas y estado estacionario con alta precisión, proporcionando un entorno completamente privado y seguro, independiente de otras influencias ruidosas. Es un sistema de radar biótico estándar en vigilancia de propiedad privada, precaución de caídas, cuidado de la salud de ancianos, funcionando bien en el hogar, hotel, así como en hospitales. En esta wiki, te introduciremos cómo utilizarlo.

### Aplicación

- Hogar inteligente
- Cuidado de la salud
- Detección de caídas
- Hotel inteligente
- Asistentes médicos

### Características

- Teoría habilitada: Implementa detección de radar basada en señales de onda continua FM de 60GHz
- Algoritmo de detección mejorado: Detecta y emite simultáneamente actividades humanas incluyendo movimiento, caídas y estado estacionario en el entorno de auto-adaptación
- Protección perfecta de privacidad: Aplica tecnología de monitoreo FMCW para proporcionar capacidades de vigilancia sin identificación
- Estado de funcionamiento saludable: Potencia de salida tan baja como inofensiva para el cuerpo humano
- Alta estabilidad: Independiente de temperatura, humedad, ruido, flujo de aire, polvo, luz y otras influencias ambientales
- Alta precisión de medición: Logra precisión de detección de caídas hasta 90% y logra precisión de función de detección de presencia hasta 90%
- Diseño de hardware de radar de alta flexibilidad: Soporta desarrollo secundario, se adapta a aplicaciones de varios escenarios

### Especificación

| Ángulo y distancia de detección      |  Mínimo |  Típico |  Máximo |  Unidad |
|-----------------------------------|----------|----------|----------|-------|
| **Contenido Mínimo Típico Máximo Unidades**  |          |          |          |       |
| Radio de movimiento de detección de personas [1] |       |     6     |         |  metro    |
|  Radio de monitoreo de caídas [2] |          |   3    |          |  metro   |
|  Ángulo de detección del radar (horizontal)   |          |  60      |          |  grado    |
|  Ángulo de detección del radar (inclinación)                     |         |    60      |        |  grado    |
|  Nota: [1][2] Altura de suspensión del radar 2.8 m, radio de proyección del radar.             |          |          |
|  **Características eléctricas**             |          |          |          |       |
|  Voltaje de operación (VCC)          |  4.5     |  5       |  6       |  V    |
|  Corriente de operación (ICC)          |   90       |  93     |  100        |  mA   |
|  Temperatura de operación (TOP)      |  -20     |          |  60      |  ℃    |
|  Temperatura de almacenamiento (TST)        |  -40     |          |  80      |  ℃    |
|  **Rendimiento RF**                |          |          |          |       |
|  Frecuencia de operación (fTX)        |  58      |        |  63.5    |  GHz  |
|  Potencia transmitida (Pout)         |          |         |     6     |  dBm  |

## Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Módulo Pro de Sensor mmWave de 60GHz - Detección de Caídas.

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- Interfaz 1:
  - El pin de 5V es la interfaz de alimentación para el sensor.
  - RX y TX son las interfaces de transmisión de datos para el sensor. RX significa recepción serie y TX significa transmisión serie.
  - La interfaz de salida del estado de presencia humana. Puedes usar el nivel de estos dos pines para determinar el movimiento humano actual en el entorno.
    - Salida GP2: nivel alto - ocupado, nivel bajo - desocupado.
    - Salida GP1: nivel alto - activo, nivel bajo - estacionario.
- Interfaz 2:
  - Pines de firmware flash: GND/3.3V/SWD/SWC.
  - Pines de entrada/salida adicionales: GP3~GP6.

## Primeros Pasos

### Actualizaciones de Versión de Firmware

El sensor mmwave ha pasado por un largo período de precipitación técnica y valiosas sugerencias proporcionadas por los usuarios, y hemos estado iterando sobre el producto original para proporcionar resultados de monitoreo más precisos y confiables y una mejor experiencia para nuestros usuarios.

Los sensores recién enviados se envían con el firmware más reciente por defecto para asegurar la experiencia de producto más reciente. Sin embargo, por el bien de la experiencia del usuario antiguo, por la presente proporcionamos el firmware más reciente y el método de actualización para asegurar que puedas usar nuestra tecnología más reciente.

#### Método universal - usar J-link para grabar firmware

Si encuentras el firmware incorrecto o anomalía del radar, mal funcionamiento del firmware, etc., usar este método para volver a flashear el firmware es la forma más efectiva.

**Descarga del firmware más reciente**

| Versión de Firmware | Dirección de Descarga |
|:----------------:|:----------------:|
| Jlink_MR60FDA1-V0821.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-230821.bin) |
| Jlink_MR60FDA1-V0728.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V0728.bin) |
| Jlink_MR60FDA1-V114.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V114.bin) |

:::caution
1. Por favor verifica cuidadosamente la función de tu producto, por favor no mezcles con otros sensores mmwave para flashear este firmware, de lo contrario puede causar función anormal del producto, ¡las consecuencias necesitan ser tu propia responsabilidad!

2. Por favor también nota que diferentes formas de actualizar el firmware usan diferente contenido de firmware, lo que estás descargando es el firmware grabado vía **J-link**.
:::

**Para actualizar tu radar a la versión más reciente**

**Paso1.** Necesitarás tener un **Jlink** y un Sensor mmWave de 60GHz **MR60FDA1**.

Conecta el radar y Jlink juntos vía cable Dupont como se muestra en el diagrama a continuación.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**Paso2.** Descarga el software y firmware necesarios.

| Archivo | Dirección de Descarga |
|:----------------:|:----------------:|
| JlinkV644e.rar | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**Paso3.** Descomprime **JlinkV644e.rar** y abre el archivo **JLink_Windows_V644e.exe** dentro.

Solo sigue las opciones predeterminadas para instalar. Una vez que la instalación esté completa, inicia el software **J-Flash V6.44e**.

**Paso4.** Instala el paquete del chip.

Descomprime **Pack_Segger_AT32F4xx_v1.3.3.zip** y abre **Segger_AT32F4xx_AddOn.exe** dentro.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**Paso5.** Crea un nuevo proyecto.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

Encuentra y elige **AT32F403ARGT7**.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**Paso6.** Arrastra y suelta el firmware del radar (archivo .bin) en este software y aparecerá una ventana, solo usaremos su dirección de inicio predeterminada de 0x8000000.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**Paso7.** Haz clic en **Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

Cuando la conexión sea exitosa mostrará Connected successfully.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

Borrar firmware: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

Actualizar firmware: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

En este punto, la actualización del firmware está completa.

#### Actualizar firmware vía UART

Considerando que J-link es caro, es demasiado extravagante comprar un J-link para la gran mayoría de usuarios que solo necesitan actualizar el firmware de su radar, así que ofrecemos un método de actualización vía UART.

**Descarga del firmware más reciente**

| Versión de Firmware | Dirección de Descarga |
|:----------------:|:----------------:|
| UART_MR60FDA1-230821.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230821.bin) |
| UART_MR60FDA1-230728.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230728.bin) |
| UART_MR60FDA1-230227.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230227.bin) |
| UART_MR60FDA1-230915.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230915.bin) |

:::caution
1. Por favor verifica cuidadosamente la función de tu producto, por favor no mezcles con otros sensores mmwave para flashear este firmware, de lo contrario puede causar función anormal del producto, ¡las consecuencias necesitan ser tu propia responsabilidad!

2. También ten en cuenta que diferentes formas de actualizar el firmware utilizan diferente contenido de firmware, lo que estás descargando es el firmware grabado a través de **UART**.

3. ¡Asegúrate de que la versión del firmware de tu radar sea **al menos la versión G60FD1SYv010102** antes de usar UART para actualizar el firmware, de lo contrario puede deshabilitar el radar, en cuyo caso tendrás que usar J-link para grabar el firmware para usarlo!

Puedes consultar la información del número de versión del firmware enviando el comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` al Radar. Los datos reportados por el radar se muestran entonces como una cadena, y verás un efecto similar al mostrado a continuación.

`G60FD1SYv010104` es el número de modelo reportado en el radar, donde `010104` es el número de versión. Esto significa que este sensor soporta actualización UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/19.png"/></div>
:::

**Para actualizar tu radar a la última versión**

**Paso 1**. Necesitarás tener un **UART a USB** y un Sensor mmWave de 60GHz **MR60FDA1**.

Conecta el radar y UART a USB juntos mediante cable Dupont como se muestra en el diagrama a continuación.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Paso 2**. Descarga el software y firmware necesarios.

| Archivo | Dirección de Descarga |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Paso 3**. Descomprime el paquete PackageMake-v1.1.1.zip y abre el archivo PackageMake-v1.1.1.exe dentro.

Conecta el UART a USB con el sensor conectado a la computadora, haz clic en el patrón de engranaje en la esquina superior izquierda del software, selecciona el número de puerto, establece la velocidad de baudios a 115200, y luego haz clic en la esquina inferior derecha para confirmar. (Si no se encuentra el número de puerto, verifica la conexión y luego haz clic en el botón de actualizar en la esquina inferior izquierda para reintentar)

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Paso 4**. Conectando el sensor

Después de haber terminado de configurar el puerto serie como se describió anteriormente, haz clic en el segundo icono en la esquina superior derecha y verás los datos sin procesar del radar impresos si el puerto está seleccionado correctamente.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Paso 5**. Actualizar firmware

Haz clic con el botón izquierdo del ratón en el último icono en la esquina superior derecha, esto abrirá una ventana para seleccionar el firmware. Por favor selecciona la versión de firmware que has descargado.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Después de que la selección esté completa, la ruta del archivo seleccionado aparecerá bajo el software, por favor verifica dos veces si la versión de firmware seleccionada y el modelo es consistente con el sensor que estás usando.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/14.png"/></div>

Para actualizar el firmware, por favor haz doble clic con el botón izquierdo del ratón en la última imagen en la parte superior izquierda del software, entonces el firmware comenzará a descargarse al sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espera a que la barra de progreso termine y la actualización del firmware estará completa.

### Uso del computador superior

Conecta el sensor directamente al puerto usb de la computadora a través de un dispositivo **UART a USB**. El cableado se muestra en la tabla a continuación.

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

Además del software serial mencionado anteriormente, también puedes usar el [software de computadora superior](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip) diseñado directamente para el radar.

Las siguientes dos secciones explican el papel de cada parte del software.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/10.png"/></div>

- **Área de Trabajo**

    Todas las funciones de la computadora superior se muestran únicamente en el área de trabajo. El contenido principal de la pantalla se concentra en la parte superior del espacio de trabajo.

    **Estación:** Muestra si alguien está presente, en movimiento o estacionario.

    **Estado de caída:** El estado de la caída se presentará como una animación del personaje. El estado en la imagen es sin caída, y si alguien se cae, se mostrará una imagen animada de una persona cayendo.

    **Configuraciones:** Se usa para establecer el número de puerto donde el sensor está conectado a la PC. Generalmente, cuando el sensor está conectado a la computadora vía UART a USB, necesitas hacer clic en el botón **Actualizar** para actualizar el puerto, luego seleccionar el número de puerto recién aparecido, después hacer clic en el botón **Abrir**, y finalmente hacer clic en el botón **Iniciar** para habilitar la función de monitoreo.

    **Altura de instalación/cm:** Se refiere a la altura de instalación. Para asegurar la precisión de la detección de caídas, por favor instala el sensor con precisión como sigue. ¡Por favor instálalo en la parte superior! El radar debe instalarse verticalmente con un ángulo de desviación horizontal de ≤5° para asegurar que el haz principal del radar cubra el área de detección; la altura de instalación del radar se recomienda que sea 2m≤H≤3m. Sin obstrucciones obvias y coberturas frente al radar. Afectado por la altura de instalación del radar y el rango del haz del radar, el radio máximo de detección de humanos en movimiento en este modo de instalación es R3 ≈ 3 metros; el radio máximo de detección de humanos estacionarios es R2 ≈ 2.25 metros; el radio de detección de caídas es R1 ≤ 2 metros.

    Por ejemplo, si mi altura de instalación es 2.6 metros, entonces debo llenar 260 y hacer clic en el botón **Enviar**.

- **Área Inválida**

    Esta área no funcionará por el momento, sino solo como una interfaz reservada.

:::caution
¡Este radar actualmente no soporta rango, velocidad o nubes de puntos!
:::

## Desarrollo del sensor con Arduino

### Descripción general de la biblioteca de Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos altamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

El código de la biblioteca usado en este ejemplo puede descargarse haciendo clic en el ícono de abajo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la biblioteca.

- `void recvRadarBytes()` —— Esta función recopila los marcos de datos reportados por el Sensor vía UART según los encabezados de marco y colas de marco en el protocolo de datos del Sensor. Usada en conjunto con la función `showData()`, la información de datos recopilada puede imprimirse vía puerto serial.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void showData()` —— Esta función sirve para imprimir el marco de datos completo reportado por el Sensor de una vez vía puerto serial y necesita usarse en conjunto con la función `recvRadarBytes()`.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void HumanExis_Func()` —— Esta función es responsable de analizar los marcos de datos del Sensor y generar los datos relevantes sobre el estado de la presencia humana.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— El valor devuelto indica a qué clase de estado pertenece el marco de datos analizado. Las categorías específicas pueden encontrarse en la sección **Variables Predeterminadas**. La información de movimiento humano se reporta solo cuando ocurren cambios.

    - `int bodysign_val` —— El valor devuelto representa el valor del Parámetro de Movimiento Humano. Este valor se reporta una vez por segundo.

- `void Fall_Detection()` —— Esta función se usa para analizar y devolver la detección de una caída. La detección se almacena en la variable sensor_report.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** - `unsigned int sensor_report` —— El valor devuelto indica a qué clase de estado pertenece el marco de datos analizado. Las categorías específicas pueden encontrarse en la sección **Variables Predeterminadas**. La información de caída se reporta solo cuando ocurren cambios.

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— La función se usa para enviar marcos de consulta y marcos de comando.

  - **Parámetros de entrada:**

    - `buff` —— El marco de datos que quieres enviar al Sensor.

    - `len` —— La longitud del marco de datos que quieres enviar al Sensor.

    - `cyclic` —— Interruptor de envío cíclico. El predeterminado es false, que puede establecerse a **true** si deseas enviar este marco de datos cíclicamente.

  - **Valor de retorno:** Ninguno

- `void reset_func()` —— La función sirve para reiniciar el Sensor.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

### Variables Predeterminadas

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

**Paso 1.** Necesitas instalar un software de Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Ejecuta la aplicación de Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona tu modelo de placa de desarrollo y añádelo al IDE de Arduino.

- Si quieres usar **Seeeduino V4.2** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para completar la adición.

- Si quieres usar **Seeeduino XIAO** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software) para completar la adición.

- Si quieres usar **XIAO RP2040** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup) para completar la adición.

- Si quieres usar **XIAO BLE** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup) para completar la adición.

- Si quieres usar **XIAO ESP32C3** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#software-setup) para completar la adición.

:::caution
Para **XIAO nRF52840**, por favor selecciona **Seeed nRF52 mbed-enabled Boards**, de lo contrario puede reportarse un error al ejecutar programas.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**Paso 4.** Instala la biblioteca de código de Arduino.

Comienza obteniendo la base de código desde [GitHub](https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor) y descargándola a tu computadora local.

Dado que has descargado la biblioteca zip, abre tu IDE de Arduino, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Ejemplo de Arduino

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro XIAO BLE para ver cómo se comporta.

### Materiales Requeridos

Antes de completar los siguientes ejemplos, necesitarás preparar los siguientes materiales.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor de Radar mmWave de 60GHz**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cable de Cinta de 2mm a 2.54mm de Paso**|

**Paso 1.** Conecta el dispositivo a la computadora a través de la placa principal. El diagrama de cableado se muestra en la tabla a continuación.

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

**Paso 2.** En la barra de menú en la esquina superior izquierda del IDE de Arduino, selecciona **herramientas**, elige el tipo de placa de desarrollo que estás usando y selecciona el puerto serie correspondiente.

:::tip
Si estás usando **MacOS**, el nombre del puerto serie del dispositivo a menudo comenzará con **/dev/cu.usbmodem xxx**, terminando con el nombre del dispositivo. Si estás usando **Windows**, el nombre del puerto serie del dispositivo a menudo comenzará con **COM**, nuevamente terminando con el nombre del dispositivo.
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

En este ejemplo, demostraremos cómo funciona el radar con nuestro producto popular XIAO BLE.

### Demo1 Exportación de datos en bruto

Este ejemplo te guiará a través del proceso de imprimir los datos en bruto reportados por el Sensor a través del puerto serie.

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR60FDA1_print_rawdata**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este programa, estamos usando el puerto **Serial1** de hardware del XIAO nRF52840 para conectar al Sensor y usar el puerto **Serial** de hardware Serial para generar datos, por lo que necesitamos inicializar este puerto serie por separado en la función de inicialización `Setup()`.

En la función principal `loop()` usamos la función `recvRadarBytes()` para recibir tramas de datos del Sensor y luego usar la función `showData()` para imprimir las tramas de datos recibidas a través del puerto serie.

En este programa, es importante tener en cuenta que hay un intervalo entre la recepción y salida de cada dos tramas de datos para evitar un atasco en la placa principal. Este tiempo no debe ser menor a **150ms**.

Esto significa que no hay manera de que la placa principal reciba todas las tramas de datos reportadas por el Sensor, pero como el número de tramas reportadas por el Sensor es muy grande y frecuente, esto no afecta la precisión de usar el Sensor para determinar el ambiente.

Sube el programa. Abriendo tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/7.png"/></div>

### Demo2: Uso de la función de detección de presencia humana

En este ejemplo, explicaremos cómo usar la función de detección de presencia humana e imprimir todos los valores de esta función en la función a través del monitor serie.

El siguiente programa de ejemplo está en la carpeta examples de la biblioteca llamado **MR60FDA1_human_existence_inf_output**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este ejemplo, la función para detectar la presencia de un cuerpo humano se implementa mediante la función `HumanExis_Func()`. La lógica básica de la implementación del programa es que la función `HumanExis_Func()` asigna la información de estado reportada por el sensor a la variable `sensor_report`. Basándose en el valor de `sensor_report`, luego imprimimos todos los valores en ese estado a través del puerto serie.

Nota que el `sensor_report` corresponde a la salida de datos del puerto serie bajo sangrado. Por ejemplo, la variable `bodysign_val` que representa el parámetro de signo solo es válida cuando `sensor_report` es `BODYVAL`, y no está presente en otros `sensor_reports` reportados por el sensor.

Sube el programa. Abrir tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/8.png"/></div>

### Demo3: Detección de caídas humanas

En este ejemplo, usaremos la función `Fall_Detection()` para detectar las caídas humanas.

:::tip
El principio de salida de estado para caídas es que hay salida de contenido solo cuando el sensor detecta un cambio en el estado de la caída.
:::

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR60FDA1_Fall_detection**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Entre las funciones de detección de caídas, también hay una función para detección de permanencia. La función principal de esta función es ayudar al usuario o al sensor a determinar si el cuerpo humano ha caído o no. Cuando no hay actividad humana durante un período de tiempo después de un cambio dramático en la aceleración en la dirección vertical (es decir, permanecer en el lugar), hay una alta probabilidad de que el sensor determine que alguien ha caído y está inconsciente.

### Demo4: Enviar datos al Sensor

Basándose en los detalles proporcionados en el manual del usuario, el usuario puede enviar tramas de comando al sensor para consultar o establecer ciertos estados o modos del sensor según las necesidades reales.

El archivo .ino llamado **MR60FDA1_Send_frame** en la carpeta de ejemplos de la biblioteca del sensor nos muestra cómo enviar un programa que consulta el ID del dispositivo al sensor.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En el programa de este ejemplo, puedes ver que se define un array `DevID_buff[10]`, que almacena el número hexadecimal del ID de tu dispositivo de consulta, una ubicación por byte.

Y el envío se realiza mediante `send_func()`. Los parámetros pasados son el array de tramas a enviar, la longitud del array, y si enviar en bucle.

Si necesitas enviar tus propias tramas de comando, entonces necesitas definir el array correcto según el formato de trama proporcionado en el manual del usuario.

:::tip
**Respecto al cálculo del dígito de verificación "sum".**

Todas las tramas de datos tienen un bit de suma de verificación para asegurar que los datos se envíen o reciban con precisión. El bit de suma de verificación está usualmente en el penúltimo bit de la trama de datos. Se calcula sumando todos los bits que preceden al bit de verificación y tomando los dos bits inferiores en hexadecimal.
Tomemos el ejemplo de una trama de datos que consulta el ID del dispositivo.
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

Se puede ver que el bit de suma de verificación está en el penúltimo bit de toda la trama de datos. Entonces comenzamos sumando todos los números hexadecimales anteriores.

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

Entonces necesitamos tomar los dos dígitos inferiores de esto, que serían **60**, así que la suma de verificación de esta trama de datos es **60**. Si queremos consultar el ID del Sensor, entonces puedes definir el siguiente array.

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

Sube el programa. Abriendo tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/9.png"/></div>

En este punto por favor verifica las tramas de datos devueltas y si coinciden con las tramas de datos devueltas como se describe en el manual del usuario.

Normalmente, nuestros comandos no necesitan repetirse al Sensor, pero como el Sensor responde con mensajes tan rápido que no podemos estar seguros de que recibiremos el mensaje de datos exacto devuelto por el Sensor. Hay dos soluciones a este problema.

- Re-subir el procedimiento anterior varias veces.
- Establecer el tercer parámetro de la función `send_func()` (envío cíclico) a `true`. Sin embargo, ten en cuenta que enviar repetidamente tramas de datos del tipo de configuración **puede causar que el Sensor se atasque**, así que por favor usa esta función con precaución. Si el Sensor se atasca, desconecta el pin de alimentación de 5V del Sensor y espera unos momentos para que la función se reanude.

### Demo5: Reiniciar Sensor

Puede haber momentos cuando tengas problemas con tu Sensor detectando anomalías o cuando quieras limpiar todas las configuraciones en tu Sensor, entonces puedes reiniciar tu Sensor según este ejemplo.

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR60FDA1_Reset_sensor**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Reiniciar el Sensor es muy simple, solo necesitas llamar `reset_func()`. El reinicio solo necesita ser **ejecutado una vez**, por lo que lo usamos en la función `Setup()`.

### Demo6: Usando Arduino/Seeeduino

Nuestra biblioteca es compatible con Arduino y también puedes elegir el Arduino que tengas a mano para desarrollar tu proyecto de Sensor.

El Sensor MR60FDA1 se comunica usando el puerto serie UART, solo necesitas conectar el Sensor a tu Arduino como se muestra en el cableado a continuación.

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
        <td align="center">TX del puerto serie suave</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX del puerto serie suave</td>
 </tr>
</table>

Todas las funciones se aplican de la misma manera que en Demo1 a Demo5 anteriores, por lo que no las repetiremos en este ejemplo. En este ejemplo, te daremos una visión general de cómo usar el puerto serie suave de Arduino para obtener información de datos del Sensor.

:::tip
Para notas sobre el puerto serie suave de Arduino, consulta la [documentación oficial de Arduino](https://docs.arduino.cc/learn/built-in-libraries/software-serial).
:::

Para evitar la confusión de datos causada por usar Serial tanto para salida como para transmisión de datos, en el lado de Arduino usualmente utilizamos un puerto serie suave.

La importación de la biblioteca del puerto serie suave y la definición de los pines RX y TX deben hacerse antes en el programa. El siguiente programa define los pines **A2** y **A3** como los pines **RX** y **TX** del puerto serie suave.

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);
```

Además, no olvides configurar la velocidad de baudios para el puerto serie por software en la función `Setup()`.

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}
```

Usando **Demo1** como ejemplo, si quieres usar el Arduino para imprimir las tramas de datos reportadas desde el Sensor, entonces el programa completo es el siguiente.

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

### Demo7: Conexión directa a PC para datos

Puedes consultar esta rutina si quieres usar una computadora superior diseñada para Sensor, o si quieres usar el software serial para obtener un marco de datos completo.

Conecta el Sensor directamente al puerto usb de la computadora a través de un dispositivo **UART a USB**. El cableado se muestra en la tabla a continuación.

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

Usa un software como asistente de depuración serial para seleccionar el puerto serie donde se encuentra el Sensor.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
El Sensor MR60FDA1 necesita una fuente de alimentación de 5V, de lo contrario el Sensor puede no funcionar correctamente.
:::

Después de una conexión exitosa, verás el Sensor enviando un flujo constante de mensajes.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

Al mismo tiempo, también puedes enviar tramas de datos al Sensor a través de la función de envío del software.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
Si eliges **ASCII** como formato para enviar datos, cada conjunto de datos necesita tener el prefijo **0x**. Si eliges **HEX**, entonces cada conjunto de datos no necesita tener el prefijo **0x**.
:::

## Solución de problemas

### FAQ1: ¿Puede este Sensor detectar más de una persona a la vez en el mismo entorno?

> R: No está disponible. Este Sensor solo puede ser usado en un único objeto vivo. Si más de una persona o animal está en el rango de monitoreo, esto tendrá un efecto en los resultados del monitoreo.

### FAQ2: ¿Por qué no puedo ver nada en el monitor serie con el XIAO ESP32C3?

> La función del puerto serie del XIAO ESP32C3 no es completamente consistente con el hardware general de Arduino, y usar Serial1 directamente puede causar que el puerto serie USB no funcione. Para casos de aplicación relacionados, por favor ve al [capítulo Serial del XIAO ESP32C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Pin_Multiplexing/#serial) para más detalles.

## Recursos

- **[PDF]** [Protocolo Universal](https://files.seeedstudio.com/wiki/60GHzradar/60GHz_mmWave_Sensor_Fall_Detection_Module_Pro-Universal_Protocol.pdf)
- **[PDF]** [Manual de usuario V1.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60FDA1_user_manual-V1.3.pdf)
- **[PDF]** [Diseño de Carcasa para Sensor MMWave de Seeed Studio](https://files.seeedstudio.com/wiki/60GHzradar/Seeed_Studio_MMWave_Sensor-Case_Design.pdf)
- **[EXE]** [Software de Computadora Superior](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
