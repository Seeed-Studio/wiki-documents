---
description: 60GHz mmWave Static Breathing and Heartbeat
title: 60GHz mmWave Static Breathing and Heartbeat
keywords:
  - mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Radar_MR60BHA1
sku: 101990886
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/Radar_MR60BHA1/
---

# Sensor mmWave de 60GHz - Monitoreo de Respiración Estática Humana Durante el Sueño (MR60BHA1)

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


## Introducción

El módulo de radar de 60GHz MR60BHA1 aplica la teoría de detección FMCW para implementar la detección simultánea de la frecuencia respiratoria personal y la frecuencia cardíaca con alta precisión, proporcionando un entorno completamente privado y seguro, independiente de otras influencias ruidosas. Es un sistema de radar biótico estándar en electrónica de consumo, atención médica así como aplicaciones industriales. En esta wiki, te introduciremos cómo utilizarlo.

### Aplicación

- Hogar inteligente
- Atención médica
- Detección de frecuencia respiratoria
- Detección de frecuencia cardíaca
- Hotel inteligente
- Asistentes médicos

### Características

- Teoría habilitada: Implementa detección de radar basada en señales de onda continua FM FMCW
- Algoritmo estándar: Detecta y emite simultáneamente la frecuencia respiratoria humana y el ritmo cardíaco en el entorno de auto-adaptación
- Protección de privacidad perfecta: Aplica tecnología de monitoreo FMCW para proporcionar capacidades de vigilancia sin identificación
- Estado de funcionamiento saludable: Potencia de salida tan baja como inofensiva para el cuerpo humano
- Alta estabilidad: Independiente de temperatura, humedad, ruido, flujo de aire, polvo, luz y otras influencias ambientales
- Alta precisión de medición: Logra precisión de latidos hasta 85% y logra precisión de respiración hasta 90%
- Radar de diseño de hardware de alta flexibilidad: Soporta desarrollo secundario, se adapta a varias aplicaciones de escenarios

### Especificación

| Contenido del parámetro           |  Mínimo  |  Típico  |  Máximo  |  Unidad |
|-----------------------------------|----------|----------|----------|---------|
|  **Rendimiento**                      |          |          |          |         |
|  Distancia de detección (torácica)|  0.4     |          |  1.5     |  m      |
|  Precisión de medición respiratoria|          |  90      |          |  %      |
|  Precisión de medición de latidos |          |  95      |          |  %      |
|  Tiempo de actualización          |  1       |          |  30      |  S      |
|  Tiempo de configuración de observación|      |  20      |          |  S      |
|  **Parámetros de operación**          |          |          |          |         |
|  Voltaje de operación (VCC)       |  4.6     |  5       |  6       |  V      |
|  Corriente de operación (ICC)     |          |  150     |          |  mA     |
|  Temperatura de operación (TOP)   |  -20     |          |  60      |  ℃      |
|  Temperatura de almacenamiento (TST)|  -40    |          |  80      |  ℃      |
|  **Parámetros de lanzamiento**        |          |          |          |         |
|  Frecuencia de operación (fTX)    |  58      |  60      |  63.5    |  GHz    |
|  Potencia transmitida (Pout)      |          |  6       |          |  dBm    |
|  **Parámetros de antena**             |          |          |          |         |
|  Ganancia de antena (GANT)        |          |  4       |          |  dBi    |
|  Haz horizontal (-3dB)            |  -20     |          |  20      |  o      |
|  Haz vertical (-3dB)              |  -20     |          |  20      |  o      |

## Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Módulo de Respiración y Latidos mmWave de 60GHz.

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- Interfaz 1:
  - El pin de 5V es la interfaz de alimentación para el sensor.
  - RX y TX son las interfaces de transmisión de datos para el sensor. RX significa recepción serie y TX significa transmisión serie.
  - La interfaz de salida del estado de presencia humana. Puedes usar el nivel de estos dos pines para determinar el movimiento humano actual en el entorno.
    - Salida GP2: nivel alto - ocupado, nivel bajo - desocupado.
    - Salida GP1: nivel alto - activo, nivel bajo - estacionario.
- Interfaz 2:
  - Pinout de firmware flash: GND/3.3V/SWD/SWC.
  - Pines de entrada/salida adicionales: GP3~GP6.

## Primeros Pasos

### Actualizaciones de Versión de Firmware

El sensor mmwave ha pasado por un largo período de precipitación técnica y valiosas sugerencias proporcionadas por los usuarios, y hemos estado iterando sobre el producto original para proporcionar resultados de monitoreo más precisos y confiables y una mejor experiencia para nuestros usuarios.

Los sensores recién enviados se envían con el firmware más reciente por defecto para asegurar la experiencia de producto más reciente. Sin embargo, por el bien de la experiencia del usuario antiguo, proporcionamos por la presente el firmware más reciente y el método de actualización para asegurar que puedas usar nuestra tecnología más reciente.

#### Método universal - usar J-link para grabar firmware

Si encuentras el firmware incorrecto o anomalía del radar, mal funcionamiento del firmware, etc., usar este método para volver a flashear el firmware es la forma más efectiva.

**Descarga del firmware más reciente**

| Versión de Firmware | Dirección de Descarga |
|:----------------:|:----------------:|
| Jlink_MR60BHA1-V230104.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230104.bin) |
| Jlink_MR60BHA1-V230904.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230904.bin) |

:::caution
1. Por favor verifica la función de tu producto cuidadosamente, por favor no mezcles con otros sensores mmwave para flashear este firmware, de lo contrario puede causar función anormal del producto, ¡las consecuencias necesitan ser tu propia responsabilidad!

2. Por favor también nota que diferentes formas de actualizar el firmware usan diferente contenido de firmware, lo que estás descargando es el firmware grabado vía **J-link**.
:::

**Para actualizar tu radar a la versión más reciente**

**Paso1.** Necesitarás tener un **Jlink** y un Sensor mmWave de 60GHz **MR60BHA1**.

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

**Paso6.** Arrastra y suelta el firmware del radar (archivo .bin) en este software y aparecerá una ventana, simplemente usaremos su dirección de inicio predeterminada de 0x8000000.

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
| UART_MR60BHA1-230104.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230104.bin) |
| UART_MR60BHA1-230904.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230904.bin) |

:::caution
1. Por favor verifica la función de tu producto cuidadosamente, por favor no mezcles con otros sensores mmwave para flashear este firmware, de lo contrario puede causar función anormal del producto, ¡las consecuencias necesitan ser tu propia responsabilidad!

2. Por favor también nota que diferentes formas de actualizar el firmware usan diferente contenido de firmware, lo que estás descargando es el firmware grabado vía **UART**.

3. Asegúrate de que la versión del firmware de tu radar sea **al menos la versión G60SM1SYv010003** antes de usar UART para actualizar el firmware, de lo contrario podría deshabilitar el radar, ¡en cuyo caso tendrás que usar J-link para grabar el firmware para poder usarlo!

Puedes consultar la información del número de versión del firmware enviando el comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` al Radar. Los datos reportados por el radar se muestran entonces como una cadena, y verás un efecto similar al que se muestra a continuación.

`G60SM1SYv010009` es el número de modelo reportado en el radar, donde `10009` es el número de versión. Esto significa que este sensor soporta actualización UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/20.png"/></div>
:::

**Para actualizar tu radar a la última versión**

**Paso 1**. Necesitarás tener un **UART a USB** y un Sensor mmWave de 60GHz **MR60BHA1**.

Conecta el radar y el UART a USB juntos mediante cable Dupont como se muestra en el diagrama a continuación.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Paso 2**. Descarga el software y firmware necesarios.

| Archivo | Dirección de Descarga |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Paso 3**. Descomprime el paquete PackageMake-v1.1.1.zip y abre el archivo PackageMake-v1.1.1.exe que está dentro.

Conecta el UART a USB con el sensor conectado a la computadora, haz clic en el patrón de engranaje en la esquina superior izquierda del software, selecciona el número de puerto, establece la velocidad de baudios a 115200, y luego haz clic en la esquina inferior derecha para confirmar. (Si no se encuentra el número de puerto, verifica la conexión y luego haz clic en el botón de actualizar en la esquina inferior izquierda para reintentar)

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Paso 4**. Conectando el sensor

Después de que hayas terminado de configurar el puerto serie como se describió anteriormente, haz clic en el segundo icono en la esquina superior derecha y verás los datos en bruto del radar impresos si el puerto está seleccionado correctamente.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Paso 5**. Actualizar firmware

Haz clic con el botón izquierdo del ratón en el último icono en la esquina superior derecha, esto abrirá una ventana para seleccionar el firmware. Por favor selecciona la versión de firmware que has descargado.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Después de que la selección esté completa, la ruta del archivo seleccionado aparecerá bajo el software, por favor verifica dos veces si la versión de firmware seleccionada y el modelo es consistente con el sensor que estás usando.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/17.png"/></div>

Para actualizar el firmware, por favor haz doble clic con el botón izquierdo del ratón en la última imagen en la parte superior izquierda del software, entonces el firmware comenzará a descargarse al sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espera a que la barra de progreso termine y la actualización del firmware estará completa.

### Uso del computador superior

Conecta el sensor directamente al puerto usb de la computadora mediante un dispositivo **UART a USB**. El cableado se muestra en la tabla a continuación.

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

Además del software serial mencionado anteriormente, también puedes usar el [software de computadora superior](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe) diseñado directamente para el radar.

:::tip
Si estás usando una versión anterior del OP y firmware, por favor [actualiza a la versión más reciente](#firmware-version-updates) tan pronto como sea posible para asegurar que puedas disfrutar del protocolo de software y el contenido de la Wiki.
:::

Las siguientes cinco secciones explican el papel de cada parte del software.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/1.png"/></div>

1. Configuración de Conexión

    Selecciona el puerto al cual el sensor está conectado a la computadora. Usualmente es necesario refrescar el puerto haciendo clic en el **botón Refresh Serial Port** antes de seleccionarlo. Una vez que el puerto serial está seleccionado correctamente, los datos se actualizan automáticamente en el círculo 4 (si hay datos disponibles).

2. Configuración de Función

    - **Debugging**: Cuando esta función está activada, los datos en bruto en tiempo real pueden ser mostrados en el software. Esta es la ventana en el círculo 3 en la figura.
    - **Save Raw Data**: Cuando haces clic en él, puedes elegir mantener los datos originales en tu computadora local. Sin embargo, nota que esta opción no guarda nuevos datos después de que se hace clic en el botón, solo los datos históricos más recientes.
    - **Save Sleep Data**: Cuando haces clic en él, puedes elegir la ruta para guardar la información de datos en bruto relacionada con el sueño, mientras que otros datos no serán guardados. Sin embargo, nota que esta opción no guarda nuevos datos después de que se hace clic en el botón, solo los datos históricos más recientes.

3. Monitor Serial

    Esta ventana aparece cuando la opción **Debugging** en el círculo 2 está marcada, en cuyo punto el área muestra marcos de datos del sensor en tiempo real. En la parte inferior puedes enviar marcos de comando al sensor. Los comandos que pueden ser enviados o consultados se pueden encontrar en el manual de usuario del sensor.

4. Visualización Gráfica

    Esto muestra el gráfico de líneas en tiempo real. El contenido de datos mostrado es frecuencia respiratoria, frecuencia cardíaca y parámetros físicos, respectivamente. La coordenada horizontal es el tiempo y la coordenada vertical son los datos correspondientes.

5. Estado y Orientación

    Esta área te permite observar el estado de presencia humana y la orientación del cuerpo humano. Los datos de orientación del cuerpo humano son solo para referencia.

## Desarrollo del sensor con Arduino

### Descripción General de la Librería de Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos altamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

El código de la librería usado en este ejemplo puede ser descargado haciendo clic en el ícono de abajo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `void recvRadarBytes()` —— Esta función recolecta los marcos de datos reportados por el Sensor vía UART de acuerdo con los encabezados de marco y colas de marco en el protocolo de datos del Sensor. Usada en conjunto con la función `showData()`, la información de datos recolectada puede ser impresa a través del puerto serial.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void showData()` —— Esta función sirve para imprimir el marco de datos completo reportado por el Sensor de una vez vía el puerto serial y necesita ser usada en conjunto con la función `recvRadarBytes()`.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void HumanExis_Func()` —— Esta función es responsable de analizar los marcos de datos del Sensor y mostrar los datos relevantes sobre el estado de la presencia humana.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— El valor retornado indica a qué clase de estado pertenece el marco de datos analizado. Las categorías específicas se pueden encontrar en la sección **Variables Predeterminadas**. La información de movimiento humano se reporta solo cuando ocurren cambios.

    - `int bodysign_val` —— El valor retornado representa el valor del Parámetro de Movimiento Humano. Este valor se reporta una vez por segundo.

    - `float distance` —— El sensor determina la distancia actual al cuerpo humano, el valor está en metros. Este valor se reporta una vez cada 2 segundos.

    - `float Dir_x, Dir_y, Dir_z` —— Indica la información de posición del cuerpo detectada por el sensor. La información de posición humana tiene unidades positivas y negativas en metros. Este valor se reporta una vez cada 2 segundos.

- `void Breath_Heart()` —— Esta función es responsable de analizar los datos de respiración y latidos del corazón del sensor y retornar los valores asociados.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— El valor retornado indica a qué clase de estado pertenece el marco de datos analizado. Las categorías específicas se pueden encontrar en la sección **Variables Predeterminadas**.

    - `unsigned int heart_rate` —— Valores de frecuencia cardíaca. Reportado cada 3 segundos. Rango de valores 0~100.

    - `unsigned int heart_point_1, heart_point_2, heart_point_3, heart_point_4, heart_point_5` —— Datos de forma de onda de frecuencia cardíaca. 5 bytes representan 5 valores en 1s en tiempo real, la forma de onda son datos de onda sinusoidal, el eje central es 128 lo que significa que cuando la intensidad de frecuencia cardíaca es 0, se mostrará como 128. Este valor se reporta una vez por segundo.

    - `unsigned int breath_rate` —— Valores de respiración. Reportado cada 3 segundos. Rango de valores 0~20.

    - `unsigned int breath_point_1, breath_point_2, breath_point_3, breath_point_4, breath_point_5` —— Datos de forma de onda de frecuencia respiratoria. 5 bytes representan 5 valores en 1s en tiempo real, la forma de onda son datos de onda sinusoidal, el eje central es 128 lo que significa que cuando la intensidad de frecuencia cardíaca es 0, se mostrará como 128. Este valor se reporta una vez por segundo.

- `void SleepInf_Decode()` —— Esta función es responsable de analizar la información de datos de sueño reportada por los sensores. Solo es válida cuando la persona monitoreada ha entrado en la cama y ha estado dormida por más de cinco minutos. Por favor, asegúrese de que el modo de transferencia de estado de sueño esté habilitado al usar esta función.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— El valor devuelto indica a qué clase de estado pertenece la trama de datos analizada. Las categorías específicas se pueden encontrar en la sección **Variables Predeterminadas**.

    - `unsigned int awake_time` —— Este valor indica el tiempo de vigilia de la persona monitoreada si la persona se ha acostado. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int light_time` —— Este valor indica el tiempo de sueño ligero del personaje monitoreado en caso de que el personaje ya esté en la cama. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int deep_time` —— Este valor indica el tiempo de sueño profundo del personaje monitoreado en caso de que el personaje ya esté en la cama. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int sleep_score` —— Este valor indica la puntuación de calidad del sueño. Esta información se reporta al final del proceso de sueño.

    - `boolean existence` —— El valor indica la información de presencia humana. Un resultado de retorno de True indica la presencia de un humano, y un resultado de retorno de False indica la ausencia de un humano. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int sleep_status` —— Este valor indica el estado de sueño. Hay cuatro estados de sueño, a saber, salir de la cama, despierto, sueño ligero y sueño profundo. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int breath_rate` —— Latido promedio durante 10 minutos. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int heart_rate` —— Respiración promedio durante diez minutos. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int turn_num` —— Número de vueltas en diez minutos. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int substantial_move_ratio` —— Diez minutos de movimiento sustancial del personaje contabilizado. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int samll_move_ratio` —— El porcentaje de movimientos pequeños de los personajes en diez minutos. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int apnea_num` —— El número de apneas en diez minutos. Este valor se reportará cada diez minutos junto con otros datos de estado de sueño.

    - `unsigned int sleep_time` —— Horas totales de sueño. Se reporta cuando el sensor determina que el proceso de sueño ha terminado.

    - `unsigned int awake_time_radio` —— El porcentaje de tiempo que una persona está despierta. Se reporta cuando el sensor determina que el proceso de sueño ha terminado.

    - `unsigned int light_time_radio` —— Porcentaje de tiempo pasado en sueño ligero. Se reporta cuando el sensor determina que el proceso de sueño ha terminado.

    - `unsigned int deep_time_radio` —— Porcentaje de tiempo pasado en sueño profundo. Se reporta cuando el sensor determina que el proceso de sueño ha terminado.

    - `unsigned int outbed_time` —— La cantidad de tiempo que una persona está fuera de la cama. Se reporta cuando el sensor determina que el proceso de sueño ha terminado.

    - `unsigned int outbed_num` —— El número de veces que una persona sale de la cama. Se reporta cuando el sensor determina que el proceso de sueño ha terminado.

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— La función se utiliza para enviar tramas de consulta y tramas de comando.

  - **Parámetros de entrada:**

    - `buff` —— La trama de datos que desea enviar al Sensor.

    - `len` —— La longitud de la trama de datos que desea enviar al Sensor.

    - `cyclic` —— Interruptor de envío cíclico. El valor predeterminado es false, que se puede establecer en **true** si desea enviar esta trama de datos de forma cíclica.

  - **Valor de retorno:** Ninguno

- `void ModeSelect_fuc(int mode)` —— Esta función se utiliza para seleccionar el modo de operación del sensor. Hay dos modos de operación, el modo de transmisión de estado de sueño y el modo de transmisión de datos en tiempo real. En el modo de transmisión de estado de sueño, la función de monitoreo de sueño está activada (`SleepInf_Decode()` es válida). En el modo de transmisión de datos en tiempo real, la función de monitoreo de sueño está desactivada (`SleepInf_Decode()` es inválida), pero se reportan datos de forma de onda.

  - **Parámetros de entrada:**

    - `mode` —— El número de modo seleccionado. 1 indica modo de transmisión de datos en tiempo real y 2 indica modo de transmisión de estado de sueño.

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

Comienza obteniendo la base de código desde [GitHub](https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor) y descargándola a tu computadora local.

Dado que has descargado la biblioteca zip, abre tu IDE de Arduino, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Ejemplo de Arduino

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro XIAO BLE para ver cómo se comporta.

### Materiales Requeridos

Antes de completar los siguientes ejemplos, necesitarás preparar los siguientes materiales.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor 60GHz MR60BHA1**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cable de Cinta de 2mm a 2.54mm de Paso**|

**Paso 1.** Conecta el dispositivo a la computadora a través de la placa principal. El diagrama de cableado se muestra en la tabla a continuación.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/30.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Seeed Studio XIAO nRF52840</td>
      <td align="center" />
      <td align="center">Sensor MR60BHA1</td>
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

**Paso 2.** En la barra de menú en la esquina superior izquierda del IDE de Arduino, selecciona **herramientas**, elige el tipo de placa de desarrollo que estás usando y selecciona el puerto serie correspondiente.

:::tip
Si estás usando **MacOS**, el nombre del puerto serie del dispositivo a menudo comenzará con **/dev/cu.usbmodem xxx**, terminando con el nombre del dispositivo. Si estás usando **Windows**, el nombre del puerto serie del dispositivo a menudo comenzará con **COM**, nuevamente terminando con el nombre del dispositivo.
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

En este ejemplo, demostraremos cómo funciona el radar con nuestro producto popular XIAO BLE.

### Demo1 Exportación de datos en bruto

Este ejemplo te guiará a través del proceso de imprimir los datos en bruto reportados por el Sensor a través del puerto serie.

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR60BHA1_print_rawdata**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este programa, estamos usando el puerto **Serial1** de hardware del XIAO nRF52840 para conectar al Sensor y usar el puerto **Serial** de hardware Serial para generar datos, por lo que necesitamos inicializar este puerto serie por separado en la función de inicialización `Setup()`.

En la función principal `loop()` usamos la función `recvRadarBytes()` para recibir tramas de datos del Sensor y luego usar la función `showData()` para imprimir las tramas de datos recibidas a través del puerto serie.

En este programa, es importante tener en cuenta que hay un intervalo entre la recepción y salida de cada dos tramas de datos para evitar un atasco en la placa principal. Este tiempo no debe ser menor a **150ms**.

Esto significa que no hay manera de que la placa principal reciba todas las tramas de datos reportadas por el Sensor, pero como el número de tramas reportadas por el Sensor es muy grande y frecuente, esto no afecta la precisión de usar el Sensor para determinar el ambiente.

Sube el programa. Abriendo tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/2.png"/></div>

### Demo2: Uso de la función de detección de presencia humana

En este ejemplo, explicaremos cómo usar la función de detección de presencia humana e imprimir todos los valores de esta función en la función a través del monitor serie.

El siguiente programa de ejemplo está en la carpeta examples de la biblioteca llamado **MR60BHA1_human_existence_inf_output**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este ejemplo, la función para detectar la presencia de un cuerpo humano se implementa mediante la función `HumanExis_Func()`. La lógica básica de la implementación del programa es que la función `HumanExis_Func()` asigna la información de estado reportada por el sensor a la variable `sensor_report`. Basándose en el valor de `sensor_report`, luego imprimimos todos los valores en ese estado a través del puerto serie.

Ten en cuenta que el `sensor_report` corresponde a la salida de datos del puerto serie bajo sangrado. Por ejemplo, la variable `bodysign_val` que representa el parámetro de signo solo es válida cuando `sensor_report` es `BODYVAL`, y no está presente en otros `sensor_reports` reportados por el sensor.

Sube el programa. Abrir tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/3.png"/></div>

### Demo3: El uso de las funciones respiratorias y de latidos cardíacos en personas en reposo

En este ejemplo, usaremos la función `Breath_Heart()` para detectar la respiración y la frecuencia cardíaca de un cuerpo humano estacionario.

:::tip
Nuestro énfasis está en detectar la respiración y la frecuencia cardíaca en un cuerpo humano estacionario. Por favor no uses el producto mientras el cuerpo humano esté en movimiento, ya que hemos limitado la frecuencia cardíaca y la respiración del sensor. La frecuencia cardíaca máxima **no excederá 100** y la frecuencia respiratoria máxima **no excederá 25**.
:::

El siguiente programa de ejemplo está en la carpeta examples de la biblioteca llamado **MR60BHA1_Breath_heartbeat_inf_output**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Sube el programa. Abrir tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse como la imagen de abajo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/4.png"/></div>

:::caution
Si quieres ver datos de forma de onda, cambia el sensor al modo de transmisión de datos en tiempo real. Después de cambiar de modo, el sensor puede necesitar ser re-energizado para que tome efecto.
:::

### Demo4: Uso de la función de sueño

En este ejemplo, te guiaremos sobre cómo obtener la información sobre el sueño usando la función `SleepInf_Decode()`. Por favor asegúrate de que tú o las personas de prueba estén listas para ir a la cama antes de usar este ejemplo.

:::note
Por defecto, el sensor está en modo de transmisión de estado de sueño. En este modo, la función de monitoreo de sueño está activada. Si cambias al modo de transmisión de datos en tiempo real, entonces los datos de sueño pueden no estar disponibles. Si quieres cambiar el modo de transferencia, puedes usar la función `ModeSelect_fuc()` para hacerlo. Ejemplos de uso también se pueden encontrar en **MR60BHA1_Transfer_mode_selection** en la carpeta de ejemplos. Después de cambiar de modo, el sensor puede necesitar ser re-energizado para que tome efecto.
Los datos relacionados con el sueño necesitan ser reportados cuando una persona está en la cama, y el firmware actual por defecto juzga que alguien está en la cama después de que un estado de persona dure 5 minutos.
:::

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR60BHA1_Sleep_inf_output**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Sube el programa. Abrir tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse como la imagen de abajo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/6.png"/></div>

### Demo5: Enviar datos al Sensor

Basado en los detalles proporcionados en el manual del usuario, el usuario puede enviar tramas de comando al sensor para consultar o establecer ciertos estados o modos del sensor según las necesidades reales.

El archivo .ino llamado **MR60BHA1_Send_frame** en la carpeta de ejemplos de la biblioteca del sensor nos muestra cómo enviar un programa que consulta el ID del dispositivo al sensor.

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

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/5.png"/></div>

En este punto por favor verifica las tramas de datos devueltas y si coinciden con las tramas de datos devueltas como se describe en el manual del usuario.

Normalmente, nuestros comandos no necesitan repetirse al Sensor, pero como el Sensor responde con mensajes tan rápido que no podemos estar seguros de que recibiremos el mensaje de datos exacto devuelto por el Sensor. Hay dos soluciones a este problema.

- Re-subir el procedimiento anterior varias veces.
- Establecer el tercer parámetro de la función `send_func()` (envío cíclico) a `true`. Sin embargo, ten en cuenta que enviar repetidamente tramas de datos del tipo de configuración **puede causar que el Sensor se atasque**, así que por favor usa esta función con precaución. Si el Sensor se atasca, desconecta el pin de alimentación de 5V del Sensor y espera unos momentos para que la función se reanude.

### Demo6: Reiniciar Sensor

Puede haber momentos en que tengas problemas con tu Sensor detectando anomalías o cuando quieras limpiar todas las configuraciones en tu Sensor, entonces puedes reiniciar tu Sensor según este ejemplo.

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR60BHA1_Reset_sensor**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Reiniciar el Sensor es muy simple, solo necesitas llamar `reset_func()`. El reinicio solo necesita ser **ejecutado una vez**, por lo que lo usamos en la función `Setup()`.

### Demo7: Usando Arduino/Seeeduino

Nuestra biblioteca es compatible con Arduino y también puedes elegir el Arduino que tengas a mano para desarrollar tu proyecto de Sensor.

El Sensor MR60BHA1 se comunica usando el puerto serie UART, solo necesitas conectar el Sensor a tu Arduino como se cablea a continuación.

<table align="center">
 <tr>
     <td align="center">Sensor MR60BHA1</td>
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

Todas las funciones se aplican de la misma manera que en Demo1 a Demo6 anteriores, por lo que no las repetiremos en este ejemplo. En este ejemplo, te daremos una visión general de cómo usar el puerto serie suave de Arduino para obtener información de datos del Sensor.

:::tip
Para notas sobre el puerto serie suave de Arduino, consulta la [documentación oficial de Arduino](https://docs.arduino.cc/learn/built-in-libraries/software-serial).
:::

Para evitar la confusión de datos causada por usar Serial tanto para salida como para transmisión de datos, en el lado de Arduino usualmente utilizamos un puerto serie suave.

La importación de la biblioteca del puerto serie suave y la definición de los pines RX y TX deben realizarse antes en el programa. El siguiente programa define los pines **A2** y **A3** como los pines **RX** y **TX** del puerto serie suave.

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);
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

### Demo8: Conexión directa a PC para datos

Puedes consultar esta rutina si quieres usar una computadora superior diseñada para Sensor, o si quieres usar el software serial para obtener un marco de datos completo.

Conecta el Sensor directamente al puerto usb de la computadora a través de un dispositivo **UART a USB**. El cableado se muestra en la tabla a continuación.

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
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

Usa un software como asistente de depuración serial para seleccionar el puerto serie donde se encuentra el Sensor.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
El Sensor MR60BHA1 necesita una fuente de alimentación de 5V, de lo contrario el Sensor puede no funcionar correctamente.
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

- **[PDF]** [Hoja de datos del Sensor de Radar de Respiración y Latidos](https://files.seeedstudio.com/wiki/mmWave-radar/MR60BHA1_Datasheet.pdf)
- **[PDF]** [Manual de Usuario del Sensor de Radar de Respiración y Latidos-V1.9](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_user_manual-V1.9.pdf)
- **[PDF]** [Manual de Usuario del Sensor de Radar de Respiración y Latidos-V2.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_userManual_V2.3.pdf)
- **[EXE]** [Software de Computadora Superior_versión antigua](https://files.seeedstudio.com/wiki/60GHzradar/Human-Vital-Sign-Radar.exe)
- **[EXE]** [Software de Computadora Superior_versión nueva](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)
- **[PPTX]** [Serie de sensores mmWave de Seeed V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)
- **[ZIP]** [60G-Radar-heartbeat-3D](https://files.seeedstudio.com/wiki/mmWave-radar/60G-Radar-heartbeat-3D.zip)

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
