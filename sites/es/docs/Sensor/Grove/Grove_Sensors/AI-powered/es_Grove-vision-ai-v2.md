---
description: Comenzando con el Módulo de IA de Visión Grove V2.
title: Módulo de IA de Visión Grove V2
keywords:
  - vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2a
last_update:
  date: 12/12/2023
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/grove_vision_ai_v2a/
---

# Módulo de IA de Visión Grove V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/es/grove_vision_ai_v2" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Grove - Vision AI V2 es un módulo de IA de visión del tamaño de un pulgar equipado con el procesador WiseEye2 HX6538, que adopta la arquitectura de doble núcleo Arm Cortex-M55. Cuenta con una interfaz CSI estándar y es compatible con cámaras de Raspberry Pi. Tiene un micrófono digital integrado y una ranura para tarjeta SD. Es altamente adecuado para varios proyectos de visión de IA embebida. Con la plataforma de algoritmos de IA SenseCraft, los modelos ML entrenados pueden desplegarse en el sensor sin necesidad de codificación. Es compatible con la serie XIAO y los ecosistemas de Arduino, convirtiéndolo en una opción ideal para diversas aplicaciones de detección de objetos.

<div class="table-center">
<iframe width="900" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Características

- La PRIMERA placa basada en el procesador WiseEye2 HX6538 con arquitectura de doble núcleo Arm Cortex-M55.
- Equipado con una unidad integrada de aceleración de redes neuronales micro Arm Ethos-U55, ideal para aplicaciones de visión de imágenes de IA.
- Compatibilidad con una amplia gama de cámaras de Raspberry Pi.
- Micrófono PDM integrado, ranura para tarjeta SD, Type-C, interfaz Grove, y abundantes dispositivos periféricos facilitan el desarrollo de prototipos.
- Expandibilidad con las placas Seeed Studio XIAO.
- Modelo de IA listo para usar de SenseCraft AI para despliegue sin código.
- Soporte para una variedad de modelos de IA eficientes, incluyendo MobilenetV1, MobilenetV2, Efficientnet-lite, Yolov5, y Yolov8.

### Aplicación

- Automatización Industrial: Inspección de calidad, mantenimiento predictivo, control por voz, etc.
- Ciudades Inteligentes: Monitoreo de dispositivos, gestión de energía, etc.
- Transporte: Monitoreo de estado, seguimiento de ubicación, etc.
- Agricultura Inteligente: Monitoreo ambiental, etc.
- Dispositivos IoT Móviles: Dispositivos portátiles, dispositivos de mano, etc.

## Descripción General del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.jpg" style={{width:1000, height:'auto'}}/></div>

Para usar la funcionalidad completa del Grove Vision AI V2 puede que necesites comprar una cámara CSI por separado, recomendamos el [**Módulo de Cámara OV5647-62 FOV para Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html).

:::caution
Ten en cuenta que la cámara no está en la Lista de Partes del Grove Vision AI V2.
:::

Una vez que tengas el Grove Vision AI V2 y la cámara listos para usar, entonces puedes conectarlos a través del cable de conexión CSI. Al conectar, por favor presta atención a la dirección de la fila de pines y no los conectes al revés.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## Primeros Pasos

### Arranque

Si has utilizado algún método inusual que ha causado que el Grove Vision AI no funcione correctamente en absoluto (a nivel de software), entonces puede que necesites poner el dispositivo en modo BootLoader para revivir el dispositivo. Aquí te mostramos cómo entrar en modo BootLoader.

**Método 1**

Por favor desconecta el cable de conexión entre el Grove Vision AI y tu computadora, luego presiona y mantén presionado el botón Boot en el dispositivo sin soltarlo. En este momento, por favor conecta el Grove Vision AI a tu computadora con un cable de datos tipo Type-C, y luego suéltalo nuevamente. En este punto el dispositivo entrará en modo BootLoader.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**Método 2**

Con el Grove Vision AI conectado a tu computadora, puedes entrar en modo BootLoader presionando el botón Boot y luego presionando rápidamente el botón Reset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### Reinicio

Si estás experimentando problemas con datos del dispositivo que de repente no se cargan o imágenes que se atascan, puedes intentar reiniciar tu dispositivo usando el botón Reset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### Controlador

Si encuentras que el Grove Vision AI V2 no es reconocido después de conectarlo a tu computadora. Entonces puede que necesites instalar el controlador CH343 en tu computadora. Aquí tienes algunos enlaces para descargar e instalar el controlador CH343.

- Instalador de Un Clic del Controlador VCP del Proveedor para Windows: [CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Controlador VCP del Proveedor para Windows: [CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Instalador de un clic del controlador CDC para Windows: [CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Controlador CDC para Windows: [CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.ZIP)
- Controlador VCP del Proveedor para macOS: [CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)


## Descripción General de la Librería Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

El Grove Vision AI utiliza el chip WiseEye2 HX6538, el procesamiento de imágenes y la inferencia del modelo se procesan localmente en el Grove Vision AI, y luego el resultado se envía al XIAO vía IIC o UART, por lo que el propósito principal de esta librería es procesar el flujo de datos del Grove Vision AI, y no involucra inferencia de modelos o procesamiento de imágenes. Así que el propósito principal de esta librería es procesar el flujo de datos del Grove Vision AI, sin involucrar inferencia de modelos o procesamiento de imágenes.

El Grove Vision AI se comunica con el XIAO vía IIC, y la dirección IIC del dispositivo es `0x62`. La transferencia de información de imágenes es vía el puerto serie USB.

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— Inicializar Grove Vision AI V2.

  **Parámetros de Entrada:**
    - `TwoWire *wire` —— Este puntero apunta a un objeto TwoWire, típicamente usado para comunicarse con dispositivos I2C.
    - `uint16_t address` —— Esta es la dirección del dispositivo I2C que identifica el dispositivo particular conectado al bus I2C.
    - `uint32_t wait_delay` —— El retraso (en milisegundos) a esperar por una respuesta antes de enviar un comando.
    - `uint32_t clock` —— Esta es la velocidad de reloj del bus I2C (en Hz).

  **Retorna:** `True` o `False`. El éxito de la inicialización es true, el fallo de la inicialización es false.


- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— Usado para enviar comandos INVOKE al Grove Vision AI V2 para permitir que el Grove Vision AI comience a llamar modelos, inferencia y reconocimiento.

  **Parámetros de Entrada:** 
    - `int times` —— El número de Invoke.
    - `fileter` —— Significa que la respuesta del evento solo se enviará si el último resultado es diferente del resultado anterior (comparado por geometría y puntuación).
    - `bool show` —— Significa que la respuesta del evento solo se enviará si el último resultado es diferente del resultado anterior (comparado por geometría y puntuación).

:::note
Para más información sobre las definiciones del protocolo del Grove Vision AI, puedes leer la [**documentación del protocolo**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md).
:::

  **Retorna:** `CMD_OK` o `CMD_ETIMEDOUT`. Retorna **CMD_OK** si el modelo fue habilitado exitosamente, de lo contrario retorna **CMD_ETIMEDOUT**.

- `int available()` —— Verifica cuántos bytes de datos están disponibles para leer desde el dispositivo conectado a través del IIC.

  **Parámetros de Entrada:** Ninguno.

  **Retorno:** El número de bytes de datos que se pueden leer desde el dispositivo.

- `int read(char *data, int length)` —— Lee datos del Grove Vision AI a través de la interfaz IIC. El propósito de la función es llenar el arreglo apuntado por el puntero de datos proporcionado con los datos leídos.

  **Parámetros de Entrada:** 
    - `char *data` —— Un arreglo para almacenar datos.
    - `int length` —— La longitud de los datos a leer.
  
  **Retorno:** La longitud de los datos a leer.

- `int write(const char *data, int length)` —— Escribe datos al dispositivo especificado a través de la interfaz I2C.

  **Parámetros de Entrada:**
    - `const char *data` —— El contenido de los datos a escribir.
    - `int length` —— La longitud de los datos a escribir.

  **Retorno:** La longitud de los datos a escribir.

- `std::vector<boxes_t> &boxes() { return _boxes; }` —— Genera los resultados en forma de una caja.

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the centre of the box
    uint16_t y;      // Vertical coordinates of the centre of the box
    uint16_t w;      // Width of the identification box
    uint16_t h;      // Height of the identification box
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— Devuelve los resultados como categorías.

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— Devuelve el resultado como un punto.

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the identification point
    uint16_t y;      // Vertical coordinates of identification point
    uint16_t z;      // Relative depth coordinates of the identification point
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} point_t;
```

:::note
La coordenada de profundidad aquí es relativa, no significa que Grove Vision AI tenga habilitada una cámara de profundidad, sino que el algoritmo calcula una coordenada de profundidad relativa que es válida en algunos modelos (por ejemplo, modelos face-3d).
:::

- `perf_t &perf() { return _perf; }` —— Tiempo de procesamiento de imagen e inferencia.

```cpp
typedef struct
{
    uint16_t prepocess;   // Pre-processing time
    uint16_t inference;   // inference time
    uint16_t postprocess; // Post-processing time
} perf_t;
```

:::note
Las salidas no siempre proporcionan información que identifique cajas y puntos, dependiendo del modelo.
:::

### Instalación

Dado que has descargado la biblioteca zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft AI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/sensecraftai.jpg" style={{width:1000, height:'auto'}}/></div>

SenseCraft es una serie de servicios de software desarrollados por Seeed Studio para proporcionar a los usuarios servicios y aplicaciones de software más rápidos y simples. Con tres líneas de productos, línea de Datos, línea Edge y línea AI, SenseCraft es capaz de satisfacer las necesidades de los usuarios en servicios de datos, gestión de dispositivos y aplicaciones de AI. Sin importar qué solución necesites, SenseCraft puede proporcionarte soluciones eficientes y confiables y servicios personalizados.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Aprende Más 📕</font></span></strong></a>
</div>

<br />

Combinado con el empoderamiento del Asistente de Modelos SenseCraft AI, puedes cargar fácilmente una amplia variedad de modelos co-creados y observar directamente los resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Aprende Más 📕</font></span></strong></a>
</div>

<br />

En esta sección, te guiaremos a través del uso del Asistente de Modelos SenseCraft AI para desplegar rápidamente y observar resultados.

### Paso 1. Conectar el Grove Vision AI V2 al Asistente de Modelos SenseCraft AI

Primero, necesitamos abrir la página principal del Asistente de Modelos SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir a SenseCraft AI</font></span></strong></a>
</div>
<br />

Por favor usa un cable tipo Type-C para conectar el Grove Vision AI V2 a tu computadora.

En la esquina superior derecha de la página del Asistente de Modelos SenseCraft AI, puedes seleccionar **Grove Vision AI (WE2)**. Luego haz clic en el botón **Connect** en el extremo derecho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

En la nueva ventana que aparece, selecciona el puerto COM correcto para el dispositivo y haz clic en el botón Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Cargar un modelo adecuado

Luego, simplemente selecciona un modelo que quieras usar y haz clic en el botón **Send** de abajo. Aquí hay un ejemplo de Detección de Gestos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/4.png" style={{width:600, height:'auto'}}/></div>

Espera de 1~2 minutos para que el modelo se cargue.

### Paso 3. Observaciones

Una vez que el modelo se haya cargado exitosamente, podrás ver la transmisión en vivo desde la cámara del Grove Vision AI V2 en la Vista Previa de la derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/5.gif" style={{width:1000, height:'auto'}}/></div>

<br />

Podemos ver que en la Configuración de Vista Previa del lado derecho, hay dos opciones de configuración que se pueden cambiar para optimizar la precisión de reconocimiento del modelo.

- **Confidence:** Confidence se refiere al nivel de certeza o probabilidad asignado por un modelo a sus predicciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras de verdad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

En este punto, has terminado de cargar el modelo y observar los resultados.

## Ejemplo XIAO

Si quieres obtener un prototipo de un sensor con capacidades de visión artificial, entonces podrías considerar añadir un XIAO. Usando XIAO y Grove Vision AI V2, puedes usar el modelo que quieras utilizar y desplegarlo rápidamente en tu área de aplicación.

Antes de eso, aún necesitas seguir los pasos y contenido de [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) para subir primero un modelo que quieras usar.

**Paso 1.** Materiales Requeridos

En este tutorial, usaremos el XIAO ESP32S3 como ejemplo para introducir el uso de programas Arduino. Por lo tanto, te recomendamos preparar el siguiente hardware.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>Módulo de Cámara OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="/es/grove_vision_ai_v2" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Luego necesitas conectar el XIAO y el Grove Vision AI V2 a través de la fila de pines (o usar la placa de expansión y la interfaz Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
Ten en cuenta la dirección de la conexión, el conector Type-C del Grove Vision AI debe estar en la misma dirección que el conector Type-C del XIAO.
:::

**Paso 2.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

<br />

**Paso 3.** Selecciona tu modelo de placa de desarrollo y añádelo al Arduino IDE.

:::tip
A continuación se muestra una lista de placas compatibles para el ejemplo del Grove Vision AI V2, puedes elegir la placa que desees usar para completar el siguiente ejemplo. En este tutorial, se usará XIAO ESP32S3 como ejemplo.
:::

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para terminar de añadirlo.

- Si quieres usar **Seeeduino V4.3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino_v4.2/)** para terminar de añadirlo.


### Demo 1. Usar XIAO para obtener resultados de reconocimiento reportados por Grove Vision AI V2

El siguiente procedimiento es un ejemplo simple para ayudarte a obtener y analizar la información de reconocimiento reportada por Grove Vision AI V2.

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    if (!AI.invoke())
    {
        Serial.println("invoke success");
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", score=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("Point[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.points()[i].target);
            Serial.print(", score=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
    }
}
```

#### Explicación del procedimiento

Este sketch de Arduino utiliza la biblioteca Seeed_Arduino_SSCMA para interactuar con el Módulo Grove Vision AI V2. En la función `setup()`, se inicializa el módulo AI y se inicia la comunicación serie.

La función `loop()` llama repetidamente al método `invoke()` para realizar inferencia utilizando los algoritmos integrados del Módulo Grove Vision AI V2. Tras una inferencia exitosa, el sketch imprime métricas de rendimiento en el monitor serie, incluyendo tiempos de preprocesamiento, inferencia y postprocesamiento.

El sketch procesa e imprime información detallada sobre los resultados de la inferencia, incluyendo:

- Cajas delimitadoras (`boxes()`) que identifican las ubicaciones y dimensiones de objetos detectados en forma de coordenadas x e y, ancho y alto.
- Clasificaciones (`classes()`) que identifican las categorías de objetos detectados junto con sus puntuaciones de confianza.
- Puntos (`points()`) que representan características específicas o puntos clave de objetos detectados, junto con sus coordenadas x e y y puntuaciones de confianza.

Estos resultados proporcionan información sobre los objetos detectados por el módulo AI, sus posiciones, tamaños y el nivel de confianza de cada detección o clasificación. La salida se imprime en el monitor serie para análisis adicional o depuración.


#### Efecto

Seguimos utilizando el modelo de Detección de Gestos. Después de haber subido la aplicación, por favor abre el monitor serie y establece la velocidad de baudios del monitor serie a **9600**. Por favor prepara tu "piedra-papel-tijeras" y apúntalo al área de reconocimiento de la cámara, y el monitor serie mostrará el resultado del reconocimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


### Demo 2. Usar el XIAO para comunicarse en serie con el Grove Vision AI V2

El Grove Vision AI V2 soporta comunicación a través del [protocolo UART](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md), y utilizando el protocolo integrado, es posible operar el chip Himax WE2 del Grove Vision AI V2. El siguiente programa de ejemplo muestra cómo usar el XIAO para comunicarse con el Grove Vision AI V2 a través del puerto serie.

```cpp
#include <Arduino.h>
#include <Wire.h>

#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    // put your setup code here, to run once:
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
        delay(1000);

    Serial.println("Proxy start");
}

char buf[512];
void loop()
{
    int s_len = Serial.available();
    if (s_len)
    {
        int len = Serial.readBytes((char *)buf, s_len);
        AI.write(buf, len);
    }
    int t_len = AI.available();
    if (t_len)
    {
        if (t_len > 512)
        {
            t_len = 512;
        }

        AI.read(buf, t_len);
        Serial.write(buf, t_len);
    }
}
```


#### Explicación del procedimiento

Este sketch de Arduino establece una interfaz de comunicación entre la consola serie y el módulo Grove Vision AI V2, utilizando el Framework de Aprendizaje Automático de Seeed Studio SSCMA. El sketch está diseñado para pasar datos hacia y desde el módulo Grove Vision AI V2 a través de comandos serie.

Aquí está la descripción modificada del sketch:

En la función `setup()`:
- El protocolo de comunicación I2C se inicializa con `Wire.begin()`, permitiendo la comunicación con el módulo Grove Vision AI V2.
- La comunicación serie se configura a una velocidad de baudios de 115200.
- El sketch espera a que la conexión serie esté activa antes de mostrar "Proxy start" en el monitor serie, indicando que el canal de comunicación proxy está listo.

En la función `loop()`:
- El sketch verifica si hay datos serie entrantes usando `Serial.available()`. Si hay datos, los lee en un buffer llamado `buf`.
- Los datos recopilados en el buffer se envían luego al módulo Grove Vision AI V2 usando el método `AI.write()`.
- A continuación, el sketch verifica si el módulo Grove Vision AI V2 tiene algún dato para enviar de vuelta usando `AI.available()`.
- Si el módulo Grove Vision AI V2 ha enviado datos, el sketch lee estos datos en el buffer `buf` con `AI.read()`, asegurándose de que los datos no excedan el tamaño del buffer de 512 bytes.
- Finalmente, los datos recibidos del módulo Grove Vision AI V2 se transmiten de vuelta a la consola serie usando `Serial.write()`, completando la comunicación bidireccional entre la interfaz serie y el módulo de visión AI.

Esta configuración permite la comunicación interactiva con el módulo Grove Vision AI V2, habilitando a los usuarios para enviar instrucciones y recibir datos del módulo a través de una conexión serie.


## Solución de problemas

### P1: ¿Es posible que Grove Vision AI vea la información de resultados de XIAO mientras muestra una pantalla en vivo?

No se puede hacer. Considerando la velocidad de fotogramas o la velocidad de inferencia de imagen, no soportamos la ejecución simultánea de ambos trabajos en esta etapa. Si XIAO está conectado, entonces solo puedes recibir la información de reconocimiento reportada, pero no el fotograma en tiempo real.

### P2: ¿Qué cámaras soporta Grove Vision AI V2? ¿Solo soporta la OV5647-62?

Actualmente hemos escrito controladores para la serie de cámaras OV5642, por lo que Grove Vision AI V2 soporta toda la gama de cámaras Raspberry Pi OV5647, por ejemplo, la OV5647-62, OV5647-67, y OV5647-160. Las otras cámaras CSI están teóricamente soportadas, pero debido al hecho de que algunas de las cámaras no tienen controladores escritos para ellas o no tienen una unidad de procesamiento de color por sí mismas, puede haber un problema de que el color sea solo verde, y la pérdida de color completo tendrá un posible impacto en la precisión del reconocimiento.


## Recursos

- **[PDF]** [Hoja de datos](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [SDK del Módulo Seeed Grove Vision AI V2](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)


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

