---
description: 24GHz mmWave Human Static Presence Lite
title: Sensor mmWave de 24GHz - Módulo Lite de Presencia Humana Estática
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR24HPC1
last_update:
  date: 07/18/2025
  author: Guillermo
---

# Sensor mmWave de 24GHz - Módulo Lite de Presencia Humana Estática (MR24HPC1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>


## Introducción

El Sensor mmWave de 24GHz - Módulo Lite de Presencia Humana Estática es un sensor de radar integrado con antena y seguro para la salud, que aplica tecnología FMCW de medición de distancia, operando en 24GHz, para detectar presencia humana estática independientemente de las influencias ambientales. Este es también un radar personalizable cuyos parámetros pueden ajustarse según las funciones requeridas.

### Aplicaciones

- Iluminación automática exterior
- Apertura automatizada de puertas
- Monitoreo de toda la casa
- Electrodomésticos inteligentes (TV, calefacción, seguridad, etc.)
- Eficiencia energética en oficinas (aire acondicionado, luces)
- Monitoreo del sueño
- Seguridad en el hogar
- Activación de cámaras (IPC trigger)

### Características

- **Detección de presencia humana con radar mmWave**: Usa tecnología FMCW con operación a 24GHz y un rango de detección de 5 metros.
- **Radar personalizable**: Se puede configurar el rango de detección, disparo por movimiento, tiempos de cambio de estado y ofrece software visual para depuración.
- **Funcionamiento seguro para la salud**: Baja potencia de salida, inofensiva para el cuerpo humano.
- **Alta inmunidad a interferencias**: Opera sin verse afectado por temperatura, humedad, ruido, aire, polvo o luz.
- **Compatible con Arduino**

### Descripción del Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/13.jpg" style={{width:500, height:'auto'}}/></div>

1. El pin de 5V alimenta el radar. RX y TX son los pines de transmisión de datos.
   - RX: recepción serial
   - TX: transmisión serial

2. Pines de salida de estado de presencia humana:
   - **S1**: nivel alto = ocupado, nivel bajo = desocupado.
   - **S2**: nivel alto = activo, nivel bajo = estático.

3. Pines para flashear firmware.
4. Pines de E/S generales.

## Primeros Pasos

### Actualización de Firmware

El sensor ha recibido mejoras basadas en sugerencias de usuarios para ofrecer resultados más precisos y una mejor experiencia. Los sensores nuevos ya vienen con el firmware actualizado. Para usuarios antiguos, se ofrece el firmware más reciente y métodos de actualización.

#### Método Universal – Uso de J-Link para flashear firmware

**Firmware más reciente:**

| Versión | Enlace de descarga |
|--------|--------------------|
| Jlink_MR24HPC1-20230302.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR24HPC1-20230302.bin) |

:::caution
1. Verifica que el firmware sea compatible con tu sensor para evitar daños. 
 
2. Este firmware es exclusivo para actualización por **J-Link**.
:::


## Actualizar tu radar a la última versión

### Paso 1. Necesitarás un **Jlink** y el sensor mmWave de 24 GHz **MR24HPC1**

Conecta el radar y el Jlink usando cables Dupont como se muestra en la imagen:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

### Paso 2. Descarga el software y firmware necesarios

| Archivo | Enlace de descarga |
|:-------:|:------------------:|
| JlinkV644e.rar | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip) |

### Paso 3. Instala el software J-Link

Descomprime `JlinkV644e.rar` y ejecuta `JLink_Windows_V644e.exe`. Instala con las opciones predeterminadas y luego abre el software **J-Flash V6.44e**.

### Paso 4. Instala el paquete del chip

Descomprime `Pack_Segger_AT32F4xx_v1.3.3.zip` y ejecuta `Segger_AT32F4xx_AddOn.exe`.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

:::tip
Si aparece un error al añadir soporte a JFlash como el de la imagen, sigue estos pasos:
:::

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/arteryMcu.png"/></div>

**Solución:**

1. Descarga el archivo desde: https://www.arterychip.com/en/product/AT32F403A.jsp  
2. Descomprime y abre el archivo  
3. Copia `JLinkDevices.xml` desde `C:\Program Files\SEGGER\JLink_V794` a `C:\Users\[TuUsuario]\AppData\Roaming\SEGGER`

Esto corrige el error y te permitirá usar JFlash o JFlash Lite.

### Paso 5. Crea un nuevo proyecto

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

Selecciona el chip **AT32F403ARGT7**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

### Paso 6. Arrastra el archivo .bin del firmware al software

Usa la dirección por defecto: `0x8000000`.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

### Paso 7. Conecta y actualiza. 

Click **Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

Si ves "Connected successfully", continúa.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

Borrar firmware: **Target** → **Manual Programming** → **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

Actualizar firmware: **Target** → **Manual Programming** → **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

Para este puento, el firmware se actualizará completamente.

## Actualización de firmware vía UART

Como el J-link es costoso, ofrecemos un método de actualización alternativo usando UART.

### Descargar firmware más reciente

| Versión | Enlace |
|:-------:|:------:|
| UART_MR24HPC1-20230302.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR24HPC1-20230302.bin) |

:::caution
1. Por favor, revise cuidadosamente la función de su producto, no mezcle con otros sensores mmWave para flashear este firmware, de lo contrario puede causar un funcionamiento anormal del producto, ¡las consecuencias serán su propia responsabilidad!

2. También tenga en cuenta que diferentes formas de actualizar el firmware usan contenidos distintos, lo que está descargando es el firmware para quemar vía **UART**.

3. Asegúrese de que la versión del firmware de su radar sea **al menos la versión G24VD1SYV001006** antes de usar UART para actualizar el firmware, de lo contrario puede deshabilitar el radar, ¡en ese caso tendrá que usar J-link para grabar el firmware y poder usarlo!

Puede consultar la versión del firmware enviando el comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` al radar. Los datos reportados por el radar se muestran como una cadena, y verá un resultado similar al que se muestra abajo.

`G24VD1SYV000009` es el número de modelo reportado en el radar, donde `000009` es el número de versión. Esto significa que este sensor **no** soporta actualización vía UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/21.png"/></div>
:::

**Para actualizar su radar a la última versión**

**Paso 1**. Necesitará un **UART a USB** y el sensor **MR24HPC1** 24GHz mmWave.

Conecte el radar y el UART a USB mediante cable Dupont como se muestra en el diagrama siguiente.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Paso 2**. Descargue el software y firmware necesarios.

| Archivo | Dirección de descarga |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Paso 3**. Descomprima el paquete PackageMake-v1.1.1.zip y abra el archivo PackageMake-v1.1.1.exe dentro.

Conecte el UART a USB con el sensor conectado al computador, haga clic en el icono de engranaje en la esquina superior izquierda del software, seleccione el número de puerto, configure la velocidad en 115200 baudios, y luego confirme con el botón en la esquina inferior derecha. (Si no encuentra el puerto, revise la conexión y presione el botón de refrescar en la esquina inferior izquierda para reintentar)

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Paso 4**. Conectando el sensor

Después de configurar el puerto serial como se describió, haga clic en el segundo icono en la esquina superior derecha. Si el puerto está seleccionado correctamente, verá los datos crudos del radar impresos.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Paso 5**. Actualizar firmware

Haga clic en el último icono en la esquina superior derecha con el botón izquierdo del ratón, aparecerá una ventana para seleccionar el firmware. Seleccione la versión de firmware que descargó.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Después de seleccionar, la ruta del archivo aparecerá debajo del software, verifique que la versión y el modelo del firmware coincidan con el sensor que está usando.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/18.png"/></div>

Para actualizar, haga doble clic con el botón izquierdo del ratón en la última imagen en la esquina superior izquierda del software, entonces el firmware empezará a descargarse en el sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espere a que la barra de progreso termine y la actualización de firmware esté completa.

### Uso del software de PC

Conecte el radar directamente al puerto USB de la computadora usando un dispositivo **UART a USB**. El cableado se muestra en la tabla a continuación.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Radar Sensor</td>
      <td align="center" />
      <td align="center">UART a USB</td>
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

Además del software serial mencionado, también puede usar el [software de PC](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe) diseñado para radar directamente.

Las siguientes diez secciones explican el papel de cada parte del software.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

1. Puerto

    Seleccione el puerto al que el radar está conectado en el computador. Generalmente es necesario **Actualizar** el listado haciendo clic en el botón Refrescar antes de seleccionar. Una vez seleccionado, haga clic en **Abrir**.

2. Velocidad (Baudios)

    El radar MR24HPC1 debe configurarse a una velocidad de 115200 baudios.

3. Energía de Movimiento

    Este valor es equivalente al **valor dinámico**. La variación representa el ruido de movimiento constante en el entorno. La Energía de Movimiento es baja cuando no hay nadie en el espacio, y aumenta a medida que el movimiento es mayor en magnitud y distancia.

4. Energía Estática

    Este valor es equivalente al **valor estático**. La variación representa el ruido estático constante en el entorno. La Energía Estática es baja cuando el espacio está desocupado, y fluctúa en valores más altos cuando hay una persona estática en el espacio (ligero movimiento de la respiración).

5. Distancia

    **Distancia estática**: La distancia en línea recta entre el entorno y el radar cuando hay un área con leve movimiento. Cuando hay alguien estacionario en un lugar del espacio, la distancia en línea recta al radar se muestra en tiempo real.  
    **Distancia de movimiento**: La distancia en línea recta entre una posición en movimiento y el radar. Cuando hay una persona en movimiento, la distancia se muestra en tiempo real para esa posición.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/9.png"/></div>

6. Configuración Gráfica

    Utilizado para determinar claramente la relación entre formas de onda en tiempo real y umbrales. Basado en los cambios de la curva en tiempo real, se puede observar el ruido de fondo en diferentes estados del espacio y ajustar el umbral para detectar la presencia humana y hacer un juicio simple sobre presencia/ausencia o actividad.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/8.png"/></div>

7. Consulta

    Busca la configuración actual de parámetros. Para el significado de cada valor, consulte el manual del usuario.

8. Configuración

    Configura los valores umbral para cada parámetro.

9. Visualización de Estado

    Muestra en tiempo real la distancia, velocidad y estado de movimiento, entre otros valores.

10. Enviar y Responder

    Los tramas de datos enviadas y recibidas.

## Desarrollo con Arduino

### Resumen de la librería Arduino

:::tip
Si es la primera vez que usa Arduino, le recomendamos consultar [Introducción a Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

El código de la librería usada en este ejemplo puede descargarse haciendo clic en el icono a continuación.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### Funciones {#function}

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles en la librería.

- `void recvRadarBytes()` —— Esta función recolecta los frames de datos reportados por el sensor vía UART según los encabezados y colas del protocolo de datos del sensor. Se usa junto con la función `showData()` para imprimir los datos vía puerto serial.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void showData()` —— Esta función imprime el frame completo de datos reportados por el sensor vía puerto serial y debe usarse junto con `recvRadarBytes()`.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void HumanStatic_func(bool bodysign /*=false*/)` —— Esta función analiza los frames de datos del sensor y entrega información relevante sobre la presencia humana.

  - **Parámetros de entrada:** `bodysign` —— Es un interruptor que controla si se deben mostrar los parámetros de movimiento humano. Si es **true**, la salida contendrá muchos datos de parámetros de signos humanos, lo que puede dificultar la visualización. Por defecto es **false** y no muestra dicha información.

  - **Valor de retorno:**

    - `int radarStatus` —— Indica a qué categoría de estado pertenece el frame analizado. Las categorías están en la sección **Variables por defecto**.

    - `int bodysign_val` —— Representa el valor del parámetro de movimiento humano. Válido solo si `bodysign=true`.

    - `int static_val` —— Equivale al valor estático. Representa el ruido estático en el entorno. Bajo si el espacio está vacío y más alto si hay una persona estática (ligero movimiento de respiración). Válido solo si el mensaje subyacente está activado.

    - `int dynamic_val` —— Representa el ruido de movimiento. Bajo si no hay nadie y aumenta con la magnitud y distancia del movimiento. Válido solo si el mensaje subyacente está activado.

    - `int dis_static` —— Distancia en línea recta entre el sensor y un área con movimiento leve. Válido solo si el mensaje subyacente está activado.

    - `int dis_move` —— Distancia en línea recta entre el sensor y un área en movimiento. Válido solo si el mensaje subyacente está activado.

    - `int speed` —— Velocidad del objeto en movimiento. Solo referencia. Válido solo si el mensaje subyacente está activado.

- `void checkSetMode_func(const unsigned char* buff, int len, bool cyclic /*= false*/)` —— Esta función envía frames de datos al sensor. Los datos enviados y recibidos se imprimen por puerto serial.

  - **Parámetros de entrada:**

    - `buff` —— Frame de datos a enviar al sensor.

    - `len` —— Longitud del frame.

    - `cyclic` —— Envío cíclico. Por defecto es falso, se puede poner en **true** para enviar repetidamente.

  - **Valor de retorno:** Ninguno

- `void reset_func()` —— Esta función reinicia el sensor.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

#### Variables por defecto

```c
#define MESSAGE_HEAD1 0x53       //Data frame header1
#define MESSAGE_HEAD2 0x59       //Data frame header2

#define MESSAGE_END1  0x54       //End1 of data frame
#define MESSAGE_END2  0x43       //End2 of data frame

#define HUMANSTATUS   0x80       //Human Presence Information
#define HUMANEXIST    0x01       //Presence of the human body
#define HUMANMOVE     0x02       //Human movement information
#define HUMANSIGN     0x03       //Body Signs Parameters
#define HUMANDIRECT   0x0B       //Human movement trends

#define SOMEBODY      0x01       //Somebody move
#define NOBODY        0x00       //No one here

#define NONE          0x00
#define SOMEBODY_STOP 0x01       //Somebody stop
#define SOMEBODY_MOVE 0x02       //Somebody move

#define CA_CLOSE      0x01       //Someone approaches
#define CA_AWAY       0x02       //Some people stay away


#define DETAILSTATUS  0x08       //Underlying parameters of the human state
#define DETAILINFO    0x01       //Detailed data on the state of human movement
#define DETAILDIRECT  0x06       //Human movement trends
#define DETAILSIGN    0x07       //Body Signs Parameters

//Return status, Use in arduino
#define SOMEONE       0x01       //There are people
#define NOONE         0x02       //No one
#define NOTHING       0x03       //No message
#define SOMEONE_STOP  0x04       //Somebody stop
#define SOMEONE_MOVE  0x05       //Somebody move
#define HUMANPARA     0x06       //Body Signs Parameters
#define SOMEONE_CLOSE 0x07       //Someone approaches
#define SOMEONE_AWAY  0x08       //Some people stay away
#define DETAILMESSAGE 0x09       //Underlying parameters of the human state

#define reset_frame_len 10       //Reset data frame length

//Reset data frame
const unsigned char reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};
```

### Instalación

**Paso 1.** Necesitas instalar el software de Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Abre la aplicación Arduino.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona el modelo de tu placa de desarrollo y agrégala al Arduino IDE.

- Si quieres usar **Seeeduino V4.2** para las siguientes rutinas, consulta [este tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) para agregarla.

- Si quieres usar **Seeeduino XIAO**, consulta [este tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) para agregarla.

- Si quieres usar **XIAO RP2040**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup) para agregarla.

- Si quieres usar **XIAO nRF52840**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) para agregarla.

- Si quieres usar **XIAO ESP32C3**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup) para agregarla.

:::caution
Para **XIAO nRF52840**, selecciona **Seeed nRF52 mbed-enabled Boards**, de lo contrario puede ocurrir un error al ejecutar programas.
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>
:::

**Paso 4.** Instala la librería Arduino.

Descarga la base de código desde [GitHub](https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite) a tu computadora.

Después de descargar el zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**, selecciona el archivo zip descargado y, si la instalación es correcta, verás el mensaje **Library added to your libraries**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

## Ejemplo Arduino

Con la librería instalada y conociendo las funciones básicas, probemos algunos ejemplos con nuestro XIAO nRF52840 Sense para ver su comportamiento.

### Materiales Requeridos

Antes de realizar los siguientes ejemplos, prepara los materiales:

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:240, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:210, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg" style={{width:150, height:'auto'}}/></div>|
|[**MR24HPC1**](https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cable de cinta 2mm a 2.54mm**|

**Paso 1.** Conecta el dispositivo a la computadora mediante la placa principal. El diagrama de conexiones se muestra en la tabla siguiente.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/11.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">MR24HPC1</td>
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

**Paso 2.** En la barra de menú superior izquierda del Arduino IDE, selecciona **Herramientas**, escoge el tipo de placa que usas y el puerto serial correspondiente.

:::tip
Si usas **MacOS**, el nombre del puerto serial suele empezar por **/dev/cu.usbmodem xxx**, terminando con el nombre del dispositivo. En **Windows**, el puerto serial comienza usualmente con **COM**, seguido del nombre del dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/3.png" style={{width:600, height:'auto'}}/></div>
:::

En este ejemplo, demostraremos cómo funciona el sensor con nuestro popular XIAO nRF52840 Sense.

### Demo 1: Impresión por puerto serial de frames de datos en bruto desde la salida del sensor {#demo1}

Este ejemplo te guiará para imprimir los datos en bruto reportados por el sensor vía puerto serial.

El programa de ejemplo se encuentra en la carpeta examples de la librería, llamado **MR24HPCB1_rawdata_print**.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Si estás usando la serie XIAO ESP32 y no recibes datos del radar mmWave, puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este programa usamos el puerto hardware **Serial1** del XIAO nRF52840 para conectar el sensor y el puerto hardware **Serial** para la salida de datos, por lo que es necesario inicializar este puerto serial por separado en la función de inicialización `Setup()`.

En la función principal `loop()` usamos la función `recvRadarBytes()` para recibir los frames de datos del sensor y luego la función `showData()` para imprimir los frames recibidos por el puerto serial.

Es importante notar que hay un intervalo entre la recepción y la salida de cada dos frames para evitar congestión en la placa principal. Este intervalo debe ser de al menos **150ms**.

Esto significa que la placa principal no puede recibir todos los frames reportados por el sensor, pero dado que el sensor reporta muchos frames con alta frecuencia, esto no afecta la precisión para determinar el entorno.

Sube el programa. Abre el monitor serial a una velocidad de 115200 baudios para ver el resultado. La salida debería ser similar a la imagen siguiente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/1.png" style={{width:600, height:'auto'}}/></div>

### Demo 2: Impresión por puerto serial de la información analizada de presencia humana {#demo2}

En este ejemplo usaremos las funciones de la librería para analizar los frames recibidos y mostrar todos los datos característicos reportados por el sensor activo vía puerto serial.

El programa de ejemplo está en la carpeta examples de la librería bajo el nombre **MR24HPCB1_parsed_rawdata**.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.HumanStatic_func(true);    //Turn on printing of human movement sign parameters
  if(radar.radarStatus != 0x00){
    switch(radar.radarStatus){
      Serial.println(radar.radarStatus);
      case SOMEONE:
        Serial.println("Someone is here.");
        Serial.println("---------------------------------");
        break;
      case NOONE:
        Serial.println("Nobody here.");
        Serial.println("---------------------------------");
        break;
      case NOTHING:
        Serial.println("No human activity messages.");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_STOP:
        Serial.println("Someone stop");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_MOVE:
        Serial.println("Someone moving");
        Serial.println("---------------------------------");
        break;
      case HUMANPARA:
        Serial.print("The parameters of human body signs are: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("---------------------------------");
        break;
      case SOMEONE_CLOSE:
        Serial.println("Someone is closing");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_AWAY:
        Serial.println("Someone is staying away");
        Serial.println("---------------------------------");
        break;
      case DETAILMESSAGE:
        Serial.print("Spatial static values: ");
        Serial.println(radar.static_val);
        Serial.print("Distance to stationary object: ");
        Serial.print(radar.dis_static);
        Serial.println(" m");

        Serial.print("Spatial dynamic values: ");
        Serial.println(radar.dynamic_val);

        Serial.print("Distance from the movement object: ");
        Serial.print(radar.dis_move);
        Serial.println(" m");
        
        Serial.print("Speed of moving object: ");
        Serial.print(radar.speed);
        Serial.println(" m/s");
        Serial.println("---------------------------------");
        break;
    }
  }
  delay(200);
}
```

:::tip
Si usas la serie XIAO ESP32 y no recibes datos del radar mmWave, puedes intentar cambiar el código de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Para implementar la función de análisis de datos, primero necesitamos llamar a la función `HumanStatic_func()`. El parámetro que se pasa puede ser `true` o `false` para controlar si se activa o no la visualización de los Parámetros de Movimiento Humano.

Si eliges activarlo, es decir, pasar el parámetro `true`, podrías obtener el siguiente mensaje en el puerto serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/2.png" style={{width:600, height:'auto'}}/></div>

:::note
Parámetros de Movimiento Humano: valores de amplitud del movimiento humano. El parámetro es **0** cuando no hay nadie en el espacio, **1-5** cuando alguien está presente y estático, y **2-100** cuando el cuerpo está en movimiento (a mayor amplitud de movimiento, más cercano es el parámetro al valor máximo).
Esto significa que si consideras que los resultados del sensor no cumplen tus expectativas, puedes personalizar el juicio de presencia humana usando estos parámetros.
:::

Si quieres detener la salida constante de los Parámetros de Movimiento Humano en el puerto serial, pasa el parámetro `false` y verás información limpia del estado corporal en el puerto serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/3.png" style={{width:600, height:'auto'}}/></div>

:::tip
Puede que no veas contenido impreso en el monitor serial durante períodos largos, lo cual es normal. El algoritmo del sensor solo emite información cuando cambia el estado de movimiento del objeto monitoreado. Si has estado quieto tras cargar el programa, intenta moverte para observar el efecto.
:::

También puede darse el caso de que los datos que recibas sean diferentes a los mostrados en las imágenes anteriores, esto puede ocurrir si has activado la salida de Open Underlying Message.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/4.png"  style={{width:600, height:'auto'}}/></div>

Para más información sobre cómo activar o desactivar Open Underlying Message, consulta la sección correspondiente en [Demo 3](#demo3). En resumen, activar Open Underlying Message significa que se exportan datos más detallados.

Para entender el significado de los datos de Open Underlying Message, consulta la sección [**Función**](#function) o el manual del usuario por razones de espacio.

### Demo 3: Enviar datos al sensor {#demo3}

El MR24HPC1 ofrece múltiples funciones para configurar modos. Este ejemplo explica cómo implementar el interruptor Open Underlying Message como ejemplo de envío de frames de datos.

El programa de ejemplo está en la carpeta examples de la librería bajo el nombre **MR24HPCB1_open_underlyingMes**.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //switch off Open Underlying Message
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //switch on Open Underlying Message

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.checkSetMode_func(open_buff, 10, false);
  delay(50);   //Do not set the delay time too long, as this may affect the reception of the data frames returned by the radar.
}
```

:::tip
Si usas la serie XIAO ESP32 y no recibes datos del radar mmWave, puedes intentar cambiar el código de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Antes de enviar datos al sensor, debemos consultar el manual de usuario para obtener los frames completos que se enviarán según nuestras necesidades y definir un arreglo en el programa para contener dichos frames.

En este ejemplo, hemos creado dos arreglos de frames según el manual de usuario. Su función es activar o desactivar la función Open Underlying Message.

```c
const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //switch off Open Underlying Message
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //switch on Open Underlying Message
```

:::tip
**Sobre el cálculo del dígito de verificación "suma".**

Todos los frames de datos tienen un bit de checksum para asegurar la correcta transmisión. El bit de checksum suele estar en el penúltimo byte del frame. Se calcula sumando todos los bytes previos y tomando los dos dígitos inferiores en hexadecimal.

Ejemplo de un frame que consulta el ID del dispositivo:

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

El bit checksum está en el penúltimo byte del frame. Sumamos todos los bytes anteriores:

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

Tomamos los dos dígitos inferiores: **60**. Por tanto, el checksum de este frame es **60**. Para consultar el ID del sensor, define el siguiente arreglo:

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

Luego enviamos el frame llamando a la función `checkSetMode_func()`. Los parámetros son: arreglo de frames, longitud del arreglo y booleano para envío cíclico.

```c
radar.checkSetMode_func(open_buff, 10, false);
```

Sube el programa. Abre el monitor serial a 115200 baudios para ver el resultado. La salida será similar a la imagen siguiente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/5.png" style={{width:600, height:'auto'}}/></div>

Verifica que los frames devueltos coincidan con los descritos en el manual para confirmar que la configuración fue exitosa.

Normalmente, no es necesario repetir los comandos al sensor, pero como el sensor responde muy rápido, no siempre recibiremos el mensaje exacto. Para esto hay dos soluciones:

- Repetir varias veces el procedimiento anterior.
- Configurar el tercer parámetro de `checkSetMode_func()` (envío cíclico) en `true`. Atención: enviar frames repetidos puede bloquear el sensor, úsalo con precaución. Si el sensor se bloquea, desconecta el pin de 5V y espera unos momentos para reactivar la función.

### Demo 4: Reiniciar Sensor {#demo4}

En caso de problemas o para borrar todas las configuraciones, puedes reiniciar el sensor usando este ejemplo.

El programa está en la carpeta examples bajo el nombre **MR24HPCB1_reset_radar**.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");

  radar.reset_func();
}

void loop() {
  // put your main code here, to run repeatedly:

}
```

:::tip
Si usas la serie XIAO ESP32 y no recibes datos del radar mmWave, puedes intentar cambiar el código de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Resetear el sensor es muy sencillo, solo necesitas llamar a `reset_func()`. El reset debe ejecutarse **una sola vez**, por lo que se utiliza en la función `Setup()`.

### Demo 5: Usando Arduino/Seeeduino {#demo5}

Nuestra librería es compatible con Arduino y puedes usar cualquier placa Arduino que tengas para desarrollar tu proyecto con el sensor.

El sensor MR24HPC1 se comunica mediante UART serial, solo conecta el sensor a tu Arduino según el esquema siguiente.

<table align="center">
  <tbody><tr>
      <td align="center">MR24HPC1</td>
      <td align="center" />
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
      <td align="center">TX puerto serial por software</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--></td>
      <td align="center">RX puerto serial por software</td>
    </tr>
  </tbody></table>

Todas las funciones se aplican igual que en los demos anteriores (`Demo 1` a `Demo 4`), por lo que no las repetiremos aquí. En este ejemplo haremos una vista general sobre cómo usar el puerto serial por software en Arduino para obtener datos del sensor.

:::tip
Para notas sobre el puerto serial por software en Arduino, consulta la [documentación oficial de Arduino](https://docs.arduino.cc/learn/built-in-libraries/software-serial).
:::

Para evitar confusión de datos al usar Serial tanto para salida como para transmisión, en Arduino normalmente usamos un puerto serial por software.

La importación de la librería de serial por software y la definición de los pines RX y TX deben hacerse al inicio del programa. El siguiente ejemplo define los pines **A2** y **A3** como los pines **RX** y **TX** del puerto serial por software.

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);
```

Also, don't forget to set the baud rate for the soft serial port in the `Setup()` function.

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}
```

Usando **Demo 1** como ejemplo, si quieres usar Arduino para imprimir los frames de datos reportados por el sensor, el programa completo es el siguiente.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

### Demo 6: Conexión directa a PC para obtener datos {#demo6}

Puedes referirte a esta rutina si quieres usar un software de PC diseñado para el sensor, o si deseas usar un software serial para obtener un frame de datos completo.

Conecta el sensor directamente al puerto USB del ordenador mediante un dispositivo **UART a USB**. El cableado se muestra en la tabla siguiente.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Radar Sensor</td>
      <td align="center" />
      <td align="center">UART a USB</td>
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
  </tbody></table>

Usa un software como un asistente de depuración serial para seleccionar el puerto serial donde está ubicado el sensor.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/37.png" style={{width:200, height:'auto'}}/></div>

:::caution
El sensor MR24HPC1 necesita alimentación de 5V, de lo contrario puede no funcionar correctamente.
:::

Tras una conexión exitosa, verás que el sensor envía un flujo constante de mensajes.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/39.png" style={{width:600, height:'auto'}}/></div>

Al mismo tiempo, también puedes enviar frames de datos al sensor mediante la función de envío del software.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/40.png" style={{width:600, height:'auto'}}/></div>

### Demo 7: MR24HPBC1 & XIAO ESP32C3 & ESPHome & Home Assistant {#demo7}

Hemos creado un tutorial para conectar este radar y el XIAO ESP32C3 con ESPHome y Home Assistant. Si te interesa, puedes consultarlo aquí:

- [XIAO ESP32C3 accede a Home Assistant vía ESPHome](https://wiki.seeedstudio.com/xiao-esp32c3-esphome)

### Demo 8: Uso de sensores en XIAO ESP32C3 {#demo8}

Debido al [diseño especial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/#special-way---use-usb-serial-and-uart0uart1-at-the-same-time) del puerto serial hardware del XIAO ESP32C3, necesitarás usar el siguiente código para enviar y recibir datos vía UART con el sensor.

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

//HardwareSerial MySerial(0); // If you want to use D6 and D7 as serial pins, uncomment this line and comment the following line instead.
HardwareSerial MySerial(1);   // Create a new HardwareSerial class

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&MySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  /*
   * 4, 5 indicate GPIO4 and GPIO5, corresponding to pins D2 and D3. 
   * If you want to use the hardware UART pins of the XIAO ESP32C3 directly, you can change 4, 5 to -1, -1.
   * MySerial.begin(115200, SERIAL_8N1, -1, -1);
   * 
   * In addition to this you can also use the D9 (GPIO9) and D10 (GPIO10) pins as serial ports.
   * MySerial1.begin(115200, SERIAL_8N1, 9, 10);
   */
  MySerial.begin(115200, SERIAL_8N1, 4, 5);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  delay(500);

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

## Solución de Problemas

### Pregunta Frecuente 1: ¿Puede este sensor detectar más de una persona a la vez en el mismo entorno? {#faq1}

> R: No es posible. Este sensor solo puede utilizarse para detectar un único objeto vivo. Si hay más de una persona o animal en el rango de monitoreo, esto afectará los resultados de la detección.

### Pregunta Frecuente 2: ¿Por qué no veo nada en el monitor serial con el XIAO ESP32C3? {#faq2}

> La función del puerto serial en el XIAO ESP32C3 no es del todo consistente con el hardware Arduino común, y usar `Serial1` directamente puede causar que el puerto serial USB no funcione. Para casos relacionados, consulta el [capítulo Serial del XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/#serial) para más detalles.

### Pregunta Frecuente 3: ¿Es posible usar otro chip en lugar del XIAO ESP32-C3 con esta librería? {#faq3}

Sí, es posible usar otros chips en lugar del XIAO ESP32-C3 con esta librería. Solo asegúrate de conectar correctamente los pines RX/TX o dos pines GPIO y configurar la velocidad en baudios a `115200`.  
Confirma qué método usar, ya sea software o hardware serial. Por ejemplo, si usas un `Arduino Uno R3`, que solo tiene un puerto serial, puedes implementar lo siguiente:

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  mySerial.begin(115200);
}
void loop() {
  // Your code here
}
```
## Recursos

- **[PDF]** [Plantilla de Configuración Rápida](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [Manual de Usuario](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **[EXE]** [Software para computadora](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **[ZIP]** [Documentos de certificación CE](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte diverso y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Disponemos de varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
