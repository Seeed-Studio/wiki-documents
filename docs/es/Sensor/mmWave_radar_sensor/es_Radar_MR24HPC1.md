---
description: 24GHz mmWave Human Static Presence Lite
title: 24GHz mmWave Human Static Presence Lite
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR24HPC1
last_update:
  date: 03/03/2023
  author: Citric
---


# Sensor mmWave de 24GHz - Módulo de Presencia Estática Humana Lite (MR24HPC1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


## Introducción

El Sensor mmWave de 24GHz - Módulo de Presencia Estática Humana Lite es un sensor radar mmwave integrado con antena, saludable para la salud, que aplica tecnología de medición FMCW, con operación en 24GHz, para la implementación de presencia estática humana, independientemente de las influencias ambientales. Este es también un radar personalizado que los usuarios pueden configurar parámetros subyacentes para determinar las funciones detectadas.

### Aplicación

- Iluminación exterior automática
- Apertura automatizada de puertas
- Monitor de toda la casa
- Electrodomésticos inteligentes (TV, calentador de baño, seguridad, etc.)
- Energía de oficina (aire acondicionado, iluminación)
- Curva de monitoreo del sueño
- Seguridad del hogar
- Activador IPC

### Características

- Radar mmwave de presencia humana: Aplica tecnología de medición FMCW, con operación en 24GHz y rango de detección de 5 metros, para detectar comportamiento humano en el área de detección
- Detección de radar personalizada: Proporciona rango de detección configurable, activador de movimiento, tiempo de cambio de estado, así como software de depuración visual para satisfacer los requisitos de varios escenarios
- Estado de funcionamiento saludable: Potencia de salida tan baja como inofensiva para el cuerpo humano
- Alta inmunidad contra interferencias: Datos de salida independientes de influencias ambientales como temperatura, humedad, ruido, flujo de aire, polvo, luz
- Soporte para Arduino

### Descripción del Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/13.jpg" style={{width:500, height:'auto'}}/></div>

1. El pin de 5V es la interfaz de alimentación para el radar y RX y TX son las interfaces de transmisión de datos para el radar. RX significa recepción serie y TX significa transmisión serie.
2. La interfaz de salida del estado de presencia humana. Puedes usar el nivel de estos dos pines para determinar el movimiento humano actual en el ambiente.
  Salida S1: nivel alto - ocupado, nivel bajo - desocupado.
  Salida S2: nivel alto - activo, nivel bajo - estacionario.
3. Pines de flasheo de firmware.
4. Pines de entrada/salida generales.

## Comenzando

### Actualizaciones de Versión de Firmware

El sensor mmwave ha pasado por un largo período de precipitación técnica y valiosas sugerencias proporcionadas por los usuarios, y hemos estado iterando sobre el producto original para proporcionar resultados de monitoreo más precisos y confiables y una mejor experiencia para nuestros usuarios.

Los sensores recién enviados se envían con el firmware más reciente por defecto para asegurar la experiencia de producto más reciente. Sin embargo, por el bien de la experiencia del usuario antiguo, proporcionamos por la presente el firmware más reciente y el método de actualización para asegurar que puedas usar nuestra tecnología más reciente.

#### Método universal - usar J-link para grabar firmware

Si encuentras el firmware incorrecto o anomalía del radar, mal funcionamiento del firmware, etc., usar este método para re-flashear el firmware es la forma más efectiva.

**Descarga del firmware más reciente**

| Versión de Firmware | Dirección de Descarga |
|:----------------:|:----------------:|
| Jlink_MR24HPC1-20230302.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR24HPC1-20230302.bin) |

:::caution
1. Por favor verifica cuidadosamente la función de tu producto, por favor no mezcles con otros sensores mmwave para flashear este firmware, de lo contrario puede causar función anormal del producto, ¡las consecuencias necesitan ser tu propia responsabilidad!

2. Por favor también nota que diferentes formas de actualizar el firmware usan diferente contenido de firmware, lo que estás descargando es el firmware grabado vía **J-link**.
:::

**Para actualizar tu radar a la versión más reciente**

**Paso 1.** Necesitarás tener un **Jlink** y un Sensor mmWave de 24GHz **MR24HPC1**.

Conecta el radar y Jlink juntos vía cable Dupont como se muestra en el diagrama a continuación.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**Paso 2.** Descarga el software y firmware necesarios.

| Archivo | Dirección de Descarga |
|:----------------:|:----------------:|
| JlinkV644e.rar | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**Paso 3.** Descomprime **JlinkV644e.rar** y abre el archivo **JLink_Windows_V644e.exe** dentro.

Solo sigue las opciones predeterminadas para instalar. Una vez que la instalación esté completa, inicia el software **J-Flash V6.44e**.

**Paso 4.** Instala el paquete del chip.

Descomprime **Pack_Segger_AT32F4xx_v1.3.3.zip** y abre **Segger_AT32F4xx_AddOn.exe** dentro.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

:::tip
Si encuentras un error como la imagen a continuación cuando agregues algo a JFlash, puedes seguir la instrucción a continuación para resolver el problema.
:::

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/arteryMcu.png"/></div>

Solución:

1. Descarga este archivo desde https://www.arterychip.com/en/product/AT32F403A.jsp

2. Descomprime el archivo y abre

3. Copia JLinkDevices.xml desde C:\Program Files\SEGGER\JLink_V794 a C:\Users[Usuario]\AppData\Roaming\SEGGER

Esto soluciona el problema y podemos flashear con el software JFlash o JFlash Lite.

**Paso 5.** Crea un nuevo proyecto.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

Busca y elige **AT32F403ARGT7**.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**Paso 6.** Arrastra y suelta el firmware del radar (archivo .bin) en este software y aparecerá una ventana, simplemente usaremos su dirección de inicio predeterminada de 0x8000000.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**Paso 7.** Haz clic en **Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

Cuando la conexión sea exitosa mostrará Connected successfully.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

Borrar firmware: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

Actualizar firmware: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

En este punto, la actualización del firmware está completa.

#### Actualizar firmware vía UART

Considerando que J-link es costoso, es demasiado extravagante comprar un J-link para la gran mayoría de usuarios que solo necesitan actualizar el firmware de su radar, por lo que ofrecemos un método de actualización vía UART.

**Descarga del firmware más reciente**

| Versión del Firmware | Dirección de Descarga |
|:----------------:|:----------------:|
| UART_MR24HPC1-20230302.bin | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR24HPC1-20230302.bin) |

:::caution
1. Por favor verifica cuidadosamente la función de tu producto, por favor no mezcles con otros sensores mmwave para grabar este firmware, de lo contrario puede causar función anormal del producto, ¡las consecuencias necesitan ser tu propia responsabilidad!

2. Por favor también nota que diferentes formas de actualizar el firmware usan diferente contenido de firmware, lo que estás descargando es el firmware grabado vía **UART**.

3. ¡Asegúrate de que la versión del firmware de tu radar sea **al menos la versión G24VD1SYV001006** antes de usar UART para actualizar el firmware, de lo contrario puede deshabilitar el radar, en cuyo punto tendrás que usar J-link para grabar el firmware para usarlo!

Puedes consultar la información del número de versión del firmware enviando el comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` al Radar. Los datos reportados por el radar se muestran entonces como una cadena, y verás un efecto similar al mostrado abajo.

`G24VD1SYV000009` es el número de modelo reportado en el radar, donde `000009` es el número de versión. Esto significa que este sensor **no** soporta actualización UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/21.png"/></div>
:::

**Para actualizar tu radar a la versión más reciente**

**Paso 1**. Necesitarás tener un **UART a USB** y el Sensor mmWave de 24GHz **MR24HPC1**.

Conecta el radar y UART a USB juntos vía cable Dupont como se muestra en el diagrama abajo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Paso 2**. Descarga el software y firmware necesarios.

| Archivo | Dirección de Descarga |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [Descargar](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Paso 3**. Descomprime el paquete PackageMake-v1.1.1.zip y abre el archivo PackageMake-v1.1.1.exe dentro.

Conecta el UART a USB con el sensor conectado a la computadora, haz clic en el patrón de engranaje en la esquina superior izquierda del software, selecciona el número de puerto, establece la velocidad de baudios a 115200, y luego haz clic en la esquina inferior derecha para confirmar. (Si no se encuentra el número de puerto, verifica la conexión y luego haz clic en el botón de actualizar en la esquina inferior izquierda para reintentar)

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Paso 4**. Conectando el sensor

Después de que hayas terminado de configurar el puerto serie como se describió arriba, haz clic en el segundo icono en la esquina superior derecha y verás los datos en bruto del radar impresos si el puerto está seleccionado correctamente.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Paso 5**. Actualizar firmware

Haz clic con el botón izquierdo del ratón en el último icono en la esquina superior derecha, esto abrirá una ventana para seleccionar el firmware. Por favor selecciona la versión de firmware que has descargado.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Después de que la selección esté completa, la ruta del archivo seleccionado aparecerá bajo el software, por favor verifica doblemente si la versión de firmware seleccionada y el modelo es consistente con el sensor que estás usando.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/18.png"/></div>

Para actualizar el firmware, por favor haz doble clic con el botón izquierdo del ratón en la última imagen en la parte superior izquierda del software, entonces el firmware comenzará a descargarse al sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espera a que la barra de progreso termine y la actualización del firmware estará completa.

### Uso del computador superior

Conecta el radar directamente al puerto usb de la computadora vía un dispositivo **UART a USB**. El cableado se muestra en la tabla abajo.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor Radar</td>
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

Además del software serie mencionado anteriormente, también puedes usar el [software de computadora superior](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe) diseñado directamente para el radar.

Las siguientes diez secciones explican el papel de cada parte del software.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

1. Puerto

    Selecciona el puerto al cual el radar está conectado a la computadora. Usualmente es necesario **Actualizar** el puerto haciendo clic en el botón Actualizar antes de seleccionarlo. Una vez seleccionado, por favor haz clic en el botón **Abrir**.

2. Velocidad de baudios

    El radar MR24HPC1 necesita configurarse a una velocidad de baudios de 115200.

3. Energía de Movimiento

    Este valor es equivalente al **valor dinámico**. La variación en este valor representa el ruido de movimiento constante en el ambiente. La Energía de Movimiento es baja cuando no hay nadie en el espacio, y la Energía de Movimiento general se vuelve más alta a medida que el movimiento aumenta en magnitud y distancia.

4. Energía de Salida

    Este valor es equivalente al **valor estático**. La variación en este valor representa el ruido estático constante en el ambiente. La Energía de Salida es baja cuando el espacio está desocupado, y la Energía de Salida general fluctúa en valores más altos cuando hay una persona estacionaria en el espacio (movimiento ligero de la respiración del pecho).

5. Distancia

    **Distancia estacionaria**: La distancia en línea recta entre el ambiente y el radar en presencia de un área con movimiento ligero. Cuando hay alguien estacionario en una ubicación en el espacio, la distancia en línea recta desde el radar se emite en tiempo real.
    **Distancia de movimiento**: La distancia en línea recta entre una posición en movimiento en el ambiente y el radar. Cuando hay una persona en movimiento en una ubicación en el espacio, la distancia en línea recta desde el radar se emite en tiempo real para esa ubicación. la distancia en línea recta desde el radar.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/9.png"/></div>

6. Configuraciones Gráficas

    Se usa para determinar claramente la relación entre las formas de onda en tiempo real y los umbrales. Basándose en los cambios de curva en tiempo real, es posible observar el cambio en el ruido de fondo en diferentes estados del espacio, y basándose en el cambio en el ruido de fondo es posible establecer el umbral para la presencia del cuerpo humano y hacer un juicio simple de la presencia/ausencia/actividad del estado estacionario.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/8.png"/></div>

7. Consulta

    Buscar las configuraciones de parámetros actuales. Para el significado de los valores de parámetros individuales, por favor consulta el manual del usuario para detalles por razones de espacio.

8. Configuraciones

    Establecer los valores de umbral para cada parámetro.

9. Visualización de Estado

    Esta ventana muestra la distancia actual, velocidad y estado de movimiento en tiempo real, entre otros valores.

10. Enviar y Responder

    Las tramas de datos enviadas y recibidas.

## Desarrollo del sensor con Arduino

### Descripción General de la Librería de Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos altamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

El código de la librería usado en este ejemplo puede descargarse haciendo clic en el ícono de abajo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### Función {#function}

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `void recvRadarBytes()` —— Esta función recopila las tramas de datos reportadas por el Sensor vía UART según las cabeceras de trama y colas de trama en el protocolo de datos del Sensor. Usada en conjunto con la función `showData()`, la información de datos recopilada puede imprimirse a través del puerto serie.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void showData()` —— Esta función sirve para imprimir la trama de datos completa reportada por el Sensor de una vez vía el puerto serie y necesita usarse en conjunto con la función `recvRadarBytes()`.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

- `void HumanStatic_func(bool bodysign /*=false*/)` —— Esta función es responsable de analizar las tramas de datos del Sensor y emitir los datos relevantes sobre el estado de la presencia humana.

  - **Parámetros de entrada:** `bodysign` —— Este parámetro es un interruptor que controla si emitir o no los Parámetros de Movimiento Humano. Si es **true**, la salida contendrá una gran cantidad de datos de parámetros de signos humanos, lo que puede afectar tu experiencia de visualización de los datos. Por defecto este parámetro es **false** y no se muestra información sobre los parámetros de signos corporales.

  - <span id="function"><strong>Valor de retorno:</strong></span>

    - `int radarStatus` —— El valor devuelto indica a qué clase de estado pertenece la trama de datos analizada. Las categorías específicas pueden encontrarse en la sección **Variables Predeterminadas**.

    - `int bodysign_val` —— El valor devuelto representa el valor del Parámetro de Movimiento Humano. Este valor solo es válido con el parámetro `bodysign=true`.

    - `int static_val` —— Este valor es equivalente al **valor estático**. La variación en este valor representa el ruido estático constante en el ambiente. La Energía de Salida es baja cuando el espacio está desocupado, y la Energía de Salida general fluctúa en valores más altos cuando hay una persona estacionaria en el espacio (movimiento ligero de la respiración del pecho). Este valor solo es válido si el Mensaje Subyacente Abierto está activado.

- `int dynamic_val` —— La variación en este valor representa el ruido de movimiento constante en el entorno. La Energía de Movimiento es baja cuando no hay nadie en el espacio, y la Energía de Movimiento general se vuelve más alta a medida que el movimiento aumenta en magnitud y distancia. Este valor solo es válido si el mensaje subyacente abierto está activado.

    - `int dis_static` —— La distancia en línea recta entre el entorno y el Sensor en presencia de un área con movimiento ligero. Cuando hay alguien estacionario en una ubicación en el espacio, la distancia en línea recta desde el Sensor se emite en tiempo real. Este valor solo es válido si el Mensaje Subyacente Abierto está activado.

    - `int dis_move` —— La distancia en línea recta entre una posición en movimiento en el entorno y el Sensor. Cuando hay una persona en movimiento en una ubicación en el espacio, la distancia en línea recta desde el Sensor se emite en tiempo real para esa ubicación. la distancia en línea recta desde el Sensor. Este valor solo es válido si el Mensaje Subyacente Abierto está activado.

    - `int speed` —— Este valor indica la velocidad de movimiento del objeto en movimiento. El valor es solo de referencia. Este valor solo es válido si el Mensaje Subyacente Abierto está activado.

- `void checkSetMode_func(const unsigned char* buff, int len, bool cyclic /*= false*/)` —— Esta función se puede usar para enviar tramas de datos al Sensor. Las tramas de datos enviadas y las tramas de datos devueltas se imprimen a través del puerto serie.

  - **Parámetros de entrada:**

    - `buff` —— La trama de datos que deseas enviar al Sensor.

    - `len` —— La longitud de la trama de datos que deseas enviar al Sensor.

    - `cyclic` —— Interruptor de envío cíclico. El valor predeterminado es false, que se puede establecer en **true** si deseas enviar esta trama de datos de forma cíclica.

  - **Valor de retorno:** Ninguno

- `void reset_func()` —— La función sirve para reiniciar el Sensor.

  - **Parámetros de entrada:** Ninguno

  - **Valor de retorno:** Ninguno

#### Variables Predeterminadas

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

**Paso 1.** Necesitas instalar un software de Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Ejecuta la aplicación de Arduino.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona el modelo de tu placa de desarrollo y añádela al IDE de Arduino.

- Si quieres usar **Seeeduino V4.2** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para completar la adición.

- Si quieres usar **Seeeduino XIAO** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software) para completar la adición.

- Si quieres usar **XIAO RP2040** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup) para completar la adición.

- Si quieres usar **XIAO nRF52840** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup) para completar la adición.

- Si quieres usar **XIAO ESP32C3** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#software-setup) para completar la adición.

:::caution
Para **XIAO nRF52840**, por favor selecciona **Seeed nRF52 mbed-enabled Boards**, de lo contrario puede reportarse un error al ejecutar programas.
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>
:::

**Paso 4.** Instala la biblioteca de código de Arduino.

Comienza obteniendo la base de código desde [GitHub](https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite) y descargándola a tu computadora local.

Dado que has descargado la biblioteca zip, abre tu IDE de Arduino, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

## Ejemplo de Arduino

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro XIAO nRF52840 Sense para ver cómo se comporta.

### Materiales Requeridos

Antes de completar los siguientes ejemplos, necesitarás preparar los siguientes materiales.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:240, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:210, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg" style={{width:150, height:'auto'}}/></div>|
|[**MR24HPC1**](https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cable de Cinta de 2mm a 2.54mm de Paso**|

**Paso 1.** Conecta el dispositivo a la computadora a través de la placa principal. El diagrama de cableado se muestra en la tabla a continuación.

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

**Paso 2.** En la barra de menú en la esquina superior izquierda del IDE de Arduino, selecciona **herramientas**, elige el tipo de placa de desarrollo que estás usando y selecciona el puerto serie correspondiente.

:::tip
Si estás usando **MacOS**, el nombre del puerto serie del dispositivo a menudo comenzará con **/dev/cu.usbmodem xxx**, terminando con el nombre del dispositivo. Si estás usando **Windows**, el nombre del puerto serie del dispositivo a menudo comenzará con **COM**, nuevamente terminando con el nombre del dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/3.png" style={{width:600, height:'auto'}}/></div>
:::

En este ejemplo, demostraremos cómo funciona el Sensor con nuestro producto popular XIAO nRF52840 Sense.

### Demo 1: Impresión por puerto serie de tramas de datos sin procesar de la salida del Sensor {#demo1}

Este ejemplo te guiará a través del proceso de imprimir los datos sin procesar reportados por el Sensor a través del puerto serie.

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR24HPCB1_rawdata_print**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

En este programa, estamos usando el puerto **Serial1** de hardware del XIAO nRF52840 para conectar al Sensor y usar el puerto **Serial** de hardware Serial para generar datos, por lo que necesitamos inicializar este puerto serie por separado en la función de inicialización `Setup()`.

En la función principal `loop()` usamos la función `recvRadarBytes()` para recibir tramas de datos del Sensor y luego usar la función `showData()` para imprimir las tramas de datos recibidas a través del puerto serie.

En este programa, es importante tener en cuenta que hay un intervalo entre la recepción y salida de cada dos tramas de datos para evitar un atasco en la placa principal. Este tiempo no debe ser menor a **150ms**.

Esto significa que no hay forma de que la placa principal reciba todas las tramas de datos reportadas por el Sensor, pero como el número de tramas reportadas por el Sensor es muy grande y frecuente, esto no afecta la precisión de usar el Sensor para determinar el entorno.

Sube el programa. Abriendo tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/1.png" style={{width:600, height:'auto'}}/></div>

### Demo 2: Impresión por puerto serie de información de presencia humana analizada {#demo2}

En este ejemplo, usaremos las funciones en la biblioteca para analizar las tramas de datos recibidas e imprimir todos los datos de características reportados por el Sensor activo a través del puerto serie.

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR24HPCB1_parsed_rawdata**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Para implementar la función de análisis de datos, primero necesitamos llamar a la función `HumanStatic_func()`. El parámetro pasado puede ser `true` o `false` para controlar si la visualización de los Parámetros de Movimiento Humano está habilitada o no.

Si eliges activarlo, es decir, pasar el parámetro `true`, puedes obtener el siguiente mensaje para el puerto serie.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/2.png" style={{width:600, height:'auto'}}/></div>

:::note
Parámetros de Movimiento Humano: valores de amplitud de movimiento humano. Los Parámetros de Movimiento Humano son **0** cuando no hay nadie en el espacio, **1-5** cuando alguien está presente y estacionario, y **2-100** cuando el cuerpo está en movimiento (cuanto mayor es la amplitud de movimiento, más cercano es el parámetro de movimiento corporal).
Esto significa que si sientes que los resultados del reconocimiento del Sensor no cumplen con tus expectativas, puedes generar información sobre la presencia del cuerpo humano personalizando el juicio de los Parámetros de Movimiento Humano.
:::

Si quieres detener la salida descontrolada de los Parámetros de Movimiento Humano en el puerto serie, ingresa el parámetro `false` y entonces podrás ver información limpia del estado corporal en el puerto serie.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/3.png" style={{width:600, height:'auto'}}/></div>

:::tip
Puede que no veas contenido impreso en el monitor serie durante un período más largo, esto puede ser normal. El algoritmo integrado en el Sensor es tal que la información solo se genera cuando cambia el estado de movimiento del objeto monitoreado. Si has estado estacionario después del procedimiento de carga, puedes levantarte y moverte y observar el efecto.
:::

También existe la posibilidad de que los datos que recibiste difieran de la información en los datos mostrados en las dos imágenes anteriores. Entonces puede que hayas activado el interruptor de salida de Mensaje Subyacente Abierto.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/4.png"  style={{width:600, height:'auto'}}/></div>

Para más información sobre cómo activar y desactivar el Mensaje Subyacente Abierto, consulta la sección relevante del [Demo 3](#demo3). En resumen, la apertura del Mensaje Subyacente Abierto significa que se exportan datos más detallados.

Para el significado de los datos del Mensaje Subyacente Abierto, consulta la sección [**Función**](#function) o el manual de usuario de este Sensor por razones de espacio.

### Demo 3: Enviar datos al Sensor {#demo3}

El MR24HPC1 ofrece una gran cantidad de funciones de configuración de modo. Este ejemplo explicará la implementación del interruptor Mensaje Subyacente Abierto como ejemplo de cómo enviar tramas de datos.

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR24HPCB1_open_underlyingMes**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Antes de enviar datos al Sensor, necesitamos consultar el manual del usuario para obtener las tramas de datos completas que se enviarán según nuestras necesidades y definir un array en el programa para contener las tramas de datos que se enviarán.

En este ejemplo, hemos creado dos arrays de tramas de datos según el manual del usuario. Su función es activar o desactivar la función Open Underlying Message.

```c
const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //switch off Open Underlying Message
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //switch on Open Underlying Message
```

:::tip
**Respecto al cálculo del dígito de verificación "suma".**

Todas las tramas de datos tienen un bit de suma de verificación para asegurar que los datos se envíen o reciban con precisión. El bit de suma de verificación generalmente está en el penúltimo bit de la trama de datos. Se calcula sumando todos los bits que preceden al bit de verificación y tomando los dos bits inferiores en hexadecimal.
Tomemos el ejemplo de una trama de datos que consulta el ID del dispositivo.
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

Se puede ver que el bit de suma de verificación está en el penúltimo bit de toda la trama de datos. Entonces comenzamos sumando todos los números hexadecimales anteriores.

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

Luego necesitamos tomar los dos dígitos inferiores de este, que serían **60**, por lo que la suma de verificación de esta trama de datos es **60**. Si queremos consultar el ID del Sensor, entonces puedes definir el siguiente array.

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

Luego enviamos la trama de datos llamando a la función `checkSetMode_func()`. Los parámetros pasados son un array de tramas de datos, la longitud del array y un valor booleano para indicar si enviarlo cíclicamente.

```c
radar.checkSetMode_func(open_buff, 10, false);
```

Sube el programa. Abrir tu monitor serie a una velocidad de baudios de 115200 debería mostrar el resultado. La salida debería verse algo como la imagen de abajo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/5.png" style={{width:600, height:'auto'}}/></div>

En este punto, por favor verifica las tramas de datos devueltas y si coinciden con las tramas de datos devueltas como se describe en el manual del usuario, entonces la configuración fue exitosa.

Normalmente, nuestros comandos no necesitan ser repetidos al Sensor, pero como el Sensor responde con mensajes tan rápido que no podemos estar seguros de que recibiremos el mensaje de datos exacto devuelto por el Sensor. Hay dos soluciones a este problema.

- Re-subir el procedimiento anterior varias veces.
- Establecer el tercer parámetro de la función `checkSetMode_func()` (envío cíclico) a `true`. Sin embargo, ten en cuenta que enviar repetidamente tramas de datos del tipo de configuración **puede causar que el Sensor se atasque**, así que por favor usa esta función con precaución. Si el Sensor se atasca, desconecta el pin de alimentación de 5V del Sensor y espera unos momentos para que la función se reanude.

### Demo 4: Reiniciar Sensor {#demo4}

Puede haber momentos en los que tengas problemas con tu Sensor detectando anomalías o cuando quieras borrar todas las configuraciones en tu Sensor, entonces puedes reiniciar tu Sensor según este ejemplo.

El siguiente programa de ejemplo está en la carpeta de ejemplos de la biblioteca llamado **MR24HPCB1_reset_radar**.

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
Si estás usando la serie XIAO ESP32 y no hay retroalimentación de datos del radar mmwave. Puedes intentar cambiar el código anterior de ```Serial1.begin(115200);``` a ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Reiniciar el Sensor es muy simple, solo necesitas llamar `reset_func()`. El reinicio solo necesita ser **ejecutado una vez**, por lo que lo usamos en la función `Setup()`.

### Demo 5: Usando Arduino/Seeeduino {#demo5}

Nuestra biblioteca es compatible con Arduino y también puedes elegir el Arduino que tengas a mano para desarrollar tu proyecto de Sensor.

El Sensor MR24HPC1 se comunica usando el puerto serie UART, solo necesitas conectar el Sensor a tu Arduino como se cablea a continuación.

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
      <td align="center">soft serial port TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--></td>
      <td align="center">soft serial port RX</td>
    </tr>
  </tbody></table>

Todas las funciones se aplican de la misma manera que en `Demo 1` a `Demo 4` anteriores, por lo que no las repetiremos en este ejemplo. En este ejemplo, te daremos una visión general de cómo usar el puerto serie suave de Arduino para obtener información de datos del Sensor.

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
HumanStaticLite radar = HumanStaticLite(&mySerial);
```

Además, no olvides configurar la velocidad de baudios para el puerto serie por software en la función `Setup()`.

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}
```

Usando **Demo 1** como ejemplo, si quieres usar el Arduino para imprimir las tramas de datos reportadas desde el Sensor, entonces el programa completo es el siguiente.

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

### Demo 6: Conexión directa a PC para datos {#demo6}

Puedes consultar esta rutina si quieres usar una computadora superior diseñada para Sensor, o si quieres usar el software serial para obtener un marco de datos completo.

Conecta el Sensor directamente al puerto usb de la computadora a través de un dispositivo **UART a USB**. El cableado se muestra en la tabla a continuación.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor de Radar</td>
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

Usa un software como asistente de depuración serial para seleccionar el puerto serie donde se encuentra el Sensor.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/37.png" style={{width:200, height:'auto'}}/></div>

:::caution
El Sensor MR24HPC1 necesita alimentación de 5V, de lo contrario el Sensor puede no funcionar correctamente.
:::

Después de una conexión exitosa, verás que el Sensor envía un flujo constante de mensajes.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/39.png" style={{width:600, height:'auto'}}/></div>

Al mismo tiempo, también puedes enviar tramas de datos al Sensor a través de la función de envío del software.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/40.png" style={{width:600, height:'auto'}}/></div>

### Demo 7: MR24HPBC1 & XIAO ESP32C3 & ESPHome & Home Assistant {#demo7}

Hemos creado un tutorial para conectar a ESPHome y Home Assistant para este radar y el XIAO ESP32C3, si estás interesado, puedes consultar el tutorial aquí.

- [XIAO ESP32C3 accede a Home Assistant a través del servicio ESPHome](https://wiki.seeedstudio.com/es/xiao-esp32c3-esphome)

### Demo 8: Usando sensores en el XIAO ESP32C3 {#demo8}

Debido al [diseño especial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Pin_Multiplexing/#special-way---use-usb-serial-and-uart0uart1-at-the-same-time) del puerto serie de hardware del XIAO ESP32C3, necesitarás usar el siguiente código para poder usar el UART para enviar y recibir mensajes de datos con el sensor.

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

## Solución de problemas

### FAQ 1: ¿Puede este Sensor detectar más de una persona a la vez en el mismo entorno? {#faq1}

> R: No está disponible. Este Sensor solo puede usarse en un único objeto vivo. Si más de una persona o animal está en el rango de monitoreo, esto tendrá un efecto en los resultados del monitoreo.

### FAQ 2: ¿Por qué no puedo ver nada en el monitor serie con el XIAO ESP32C3? {#faq2}

> La función del puerto serie del XIAO ESP32C3 no es completamente consistente con el hardware general de Arduino, y usar Serial1 directamente puede causar que el puerto serie USB no funcione. Para casos de aplicación relacionados, por favor ve al [capítulo Serial del XIAO ESP32C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Pin_Multiplexing/#serial) para más detalles.

### FAQ 3: ¿Es posible usar otro chip en lugar del XIAO ESP32-C3 para usar la librería? {#faq3}

Sí, es posible usar otros chips en lugar del XIAO ESP32-C3 con la librería. Solo asegúrate de conectar los pines RX/TX correctos o dos pines GPIO y establecer la velocidad de baudios a `115200`.
Confirma qué método usar, software o hardware, por ejemplo si tienes un `Arduino Uno R3` que tiene solo un puerto serie, puedes implementarlo como se muestra a continuación:

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
- **[PDF]** [Hoja de Datos](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [Manual de Usuario](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **[EXE]** [software de computadora superior](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **[ZIP]** [documentos de certificación CE](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
