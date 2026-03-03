---
description: Introducción a Grove Vision AI V2 y plataforma de software
title: Soporte de Software
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_software_support
last_update:
  date: 12/12/2023
  author: Citric
---

# Resumen de Software Soportado

Hay dos métodos para habilitar el Módulo Grove Vision AI V2:

- [**Introducción sin código con SenseCraft AI**](#jump1)
   - [¿Qué es SenseCraft AI?](#jump2)
   - [Introducción a SenseCraft AI Model Assistant](#jump3)
- [**Programar en Arduino conectando con la Placa Seeed Studio XIAO**](#jump4)
   - [Introducción a la Librería de Arduino](#jump5)
   - [Introducción con Seeed Studio XIAO](#jump6)

## <span id="jump1"> Introducción sin código con SenseCraft AI </span>

En esta sección, te guiaremos a través del uso de SenseCraft AI Model Assistant para desplegar rápidamente y observar resultados, sin código y sin otras placas de desarrollo:

### <span id="jump2"> ¿Qué es SenseCraft AI?  </span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI permite a los usuarios desplegar sin esfuerzo una vasta biblioteca de modelos de IA disponibles públicamente en sus dispositivos edge:

- reComputer (NVIDIA Jetson)
- Placa Seeed Studio XIAO S3
- Módulos Vision AI, y más

Proporciona una experiencia fluida y fácil de usar, permitiéndote desplegar modelos de IA públicos directamente en tus dispositivos edge con solo unos pocos clics.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Aprender Más 📕</font></span></strong></a>
</div>

Incluye:

- Servicio de software Model Assistant
- Servicio de software Device Workspace

En esta sección, usaremos "Model Assistant" aquí para habilitar el módulo. Combinado con el empoderamiento de SenseCraft AI Model Assistant, puedes cargar fácilmente una amplia variedad de modelos co-creados y observar directamente los resultados.




### <span id="jump3"> Introducción a SenseCraft AI Model Assistant  </span>

<!-- SenseCraft is a series of software services developed by Seeed Studio to provide users with faster and simpler software services and applications. With three product lines, Data line, Edge line and AI line, SenseCraft is able to fulfill users' needs in data services, device management and AI applications. No matter what solution you need, SenseCraft can provide you with efficient and reliable solutions and customized services. -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>
 -->
Ahora comenzaremos rápidamente con los módulos usando SenseCraft AI, y esto solo requerirá el módulo únicamente.

#### Paso 1. Elegir modelo

Primero, necesitamos abrir la página principal de SenseCraft AI Model Assistant.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir a SenseCraft AI</font></span></strong></a>
</div>
<br />

Elige el modelo que quieres desplegar y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a1.png" style={{width:1000, height:'auto'}}/></div>

Puedes ver la descripción de este modelo aquí y si te conviene, haz clic en el botón **Deploy Model** en el lado derecho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a2.png" style={{width:1000, height:'auto'}}/></div>

#### Paso 2. Conectar el módulo y cargar un modelo adecuado

Por favor usa un cable tipo Type-C para conectar Grove Vision AI V2 a tu computadora y luego haz clic en el botón **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

Haz clic en el botón **Confirm**. En la esquina superior izquierda de esta página, puedes seleccionar **USB Single Serial**. Luego haz clic en el botón **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

Por favor permanece en esta página durante 1-2 minutos hasta que el modelo se cargue exitosamente. Ten en cuenta que cambiar a otra pestaña de página durante este proceso puede resultar en una carga fallida (nuestro equipo está trabajando activamente en resolver este problema, y se solucionará pronto).

#### Paso 3. Observaciones

Una vez que el modelo se carga exitosamente, podrás ver la transmisión en vivo de la cámara Grove Vision AI V2 en la Vista Previa de la izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a5.png" style={{width:1000, height:'auto'}}/></div>

<br />

Podemos ver que en la Configuración de Vista Previa del lado izquierdo, hay dos opciones de configuración que se pueden cambiar para optimizar la precisión de reconocimiento del modelo.

- **Confidence:** Confidence se refiere al nivel de certeza o probabilidad asignado por un modelo a sus predicciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras verdaderas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

:::tip
- **Confidence:** Esto te dice qué tan seguro está el modelo de visión por computadora sobre su predicción. Piénsalo como un porcentaje: mayor confianza significa que el modelo está más seguro.
- **IoU (Intersection over Union):** Esto mide cuánta superposición hay entre dos cajas. Imagina que dibujaste una caja alrededor de un objeto en una imagen, y el modelo también dibujó una caja. IoU te dice qué tan bien coinciden tus cajas. Mayor IoU significa que las cajas están más cerca entre sí.
:::

En este punto, has terminado de cargar el modelo y observar los resultados.

## <span id="jump4"> Programar en Arduino conectando con la Placa Seeed Studio XIAO </span>

### <span id="jump5"> Introducción a la Librería de Arduino </span>

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AI usa el chip WiseEye2 HX6538, el procesamiento de imágenes y la inferencia del modelo se procesan localmente en Grove Vision AI, y luego el resultado se envía a XIAO vía IIC o UART, por lo que el propósito principal de esta librería es procesar el flujo de datos de Grove Vision AI, y no involucra inferencia de modelo o procesamiento de imágenes. Así que el propósito principal de esta librería es procesar el flujo de datos de Grove Vision AI, sin involucrar inferencia de modelo o procesamiento de imágenes.

El Grove Vision AI se comunica con el XIAO vía IIC, y la dirección IIC del dispositivo es `0x62`. La transferencia de información de imagen es vía el puerto serie USB.

#### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— Inicializar Grove Vision AI V2.

  **Parámetros de Entrada:**
    - `TwoWire *wire` —— Este puntero apunta a un objeto TwoWire, típicamente usado para comunicarse con dispositivos I2C.
    - `uint16_t address` —— Esta es la dirección del dispositivo I2C que identifica el dispositivo particular conectado al bus I2C.
    - `uint32_t wait_delay` —— El retraso (en milisegundos) a esperar por una respuesta antes de enviar un comando.
    - `uint32_t clock` —— Esta es la velocidad de reloj del bus I2C (en Hz).

  **Retorno:** `True` o `False`. El éxito de inicialización es true, el fallo de inicialización es false.


- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— Usado para enviar comandos INVOKE al Grove Vision AI V2 para permitir que el Grove Vision AI comience a llamar modelos, inferencia y reconocimiento.

  **Parámetros de Entrada:** 
    - `int times` —— El número de Invoke.
    - `fileter` —— Significa que la respuesta del evento solo se enviará si el último resultado es diferente del resultado anterior (comparado por geometría y puntuación).
    - `bool show` —— Significa que la respuesta del evento solo se enviará si el último resultado es diferente del resultado anterior (comparado por geometría y puntuación).

:::note
Para más información sobre las definiciones de protocolo de Grove Vision AI, puedes leer la [**documentación del protocolo**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md).
:::

  **Retorno:** `CMD_OK` o `CMD_ETIMEDOUT`. Retorna **CMD_OK** si el modelo se habilitó exitosamente, de lo contrario retorna **CMD_ETIMEDOUT**.

- `int available()` —— Verificar cuántos bytes de datos están disponibles para leer del dispositivo conectado vía IIC.

  **Parámetros de Entrada:** Ninguno.

  **Retorno:** El número de bytes de datos que se pueden leer del dispositivo.

- `int read(char *data, int length)` —— Lee datos del Grove Vision AI a través de la interfaz IIC. El propósito de la función es llenar el array apuntado por el puntero de datos proporcionado con los datos leídos.

  **Parámetros de Entrada:** 
    - `char *data` —— Un array para almacenar datos.
    - `int length` —— La longitud de los datos a leer.

  **Retorno:** La longitud de los datos a leer.

- `int write(const char *data, int length)` —— Escribe datos al dispositivo especificado a través de la interfaz I2C.

  **Parámetros de Entrada:**
    - `const char *data` —— El contenido de los datos a escribir.
    - `int length` —— La longitud de los datos a escribir.

  **Retorno:** La longitud de los datos a escribir.

- `std::vector<boxes_t> &boxes() { return _boxes; }` —— Genera los resultados en forma de caja.

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

- `std::vector<classes_t> &classes() { return _classes; }` —— Genera los resultados como categorías.

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— Genera el resultado como un punto.

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
La coordenada de profundidad aquí es relativa, no significa que Grove Vision AI tenga habilitada la cámara de profundidad, sino que el algoritmo calcula una coordenada de profundidad relativa que es válida en algunos modelos (por ejemplo, modelos face-3d).
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
Las salidas no siempre generan información que identifique cajas y puntos, dependiendo del modelo.
:::

#### Instalación

Dado que has descargado la librería zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la librería se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la librería se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### <span id="jump6"> Introducción con Seeed Studio XIAO </span>


Si quieres obtener un prototipo de un sensor con capacidades de visión artificial, entonces podrías considerar agregar un XIAO. Usando XIAO y Grove Vision AI V2, puedes usar el modelo que desees y desplegarlo rápidamente en tu área de aplicación.

<!-- Before that, you still need to follow the [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) steps and content to upload a model you want to use first. -->

#### Preliminares

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Luego necesitas conectar el XIAO y Grove Vision AI V2 a través de la fila de pines (o usar la placa de expansión y la interfaz Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
Por favor nota la dirección de la conexión, el conector Type-C de Grove Vision AI debe estar en la misma dirección que el conector Type-C de XIAO.
:::

**Paso 2.** Lanza la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

<br />

**Paso 3.** Selecciona tu modelo de placa de desarrollo y agrégala al Arduino IDE.

:::tip
A continuación se muestra una lista de placas compatibles para el ejemplo de Grove Vision AI V2, puedes elegir la placa que desees usar para completar el siguiente ejemplo. En este tutorial, se usará XIAO ESP32S3 como ejemplo.
:::

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para terminar de agregarlo.

- Si quieres usar **Seeeduino V4.3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino_v4.2/)** para terminar de agregarlo.

**Paso 4.** Instala la librería **ArduinoJSON**.

Ve al menú Sketch, luego selecciona **Include Library > Manage Libraries...**. Esto abrirá el Administrador de Librerías. En la barra de búsqueda en la parte superior del Administrador de Librerías, escribe **ArduinoJSON**. Los resultados de búsqueda listarán la librería ArduinoJSON. Habrá un botón Install junto a la librería. Haz clic en el botón Install. El Arduino IDE descargará e instalará automáticamente la librería en tu entorno de desarrollo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/20.png" style={{width:1000, height:'auto'}}/></div>

#### Demo 1. Usar XIAO para obtener resultados de reconocimiento

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

##### Explicación del procedimiento

Este sketch de Arduino utiliza la biblioteca Seeed_Arduino_SSCMA para interactuar con el Grove Vision AI Module V2. En la función `setup()`, se inicializa el módulo AI y se inicia la comunicación serie.

La función `loop()` llama repetidamente al método `invoke()` para realizar inferencias utilizando los algoritmos integrados del Grove Vision AI Module V2. Tras una inferencia exitosa, el sketch imprime métricas de rendimiento en el monitor serie, incluyendo tiempos de preprocesamiento, inferencia y postprocesamiento.

El sketch procesa e imprime información detallada sobre los resultados de la inferencia, incluyendo:

- Cajas delimitadoras (`boxes()`) que identifican las ubicaciones y dimensiones de los objetos detectados en forma de coordenadas x e y, ancho y alto.
- Clasificaciones (`classes()`) que identifican las categorías de los objetos detectados junto con sus puntuaciones de confianza.
- Puntos (`points()`) que representan características específicas o puntos clave de los objetos detectados, junto con sus coordenadas x e y y puntuaciones de confianza.

Estos resultados proporcionan información sobre los objetos detectados por el módulo AI, sus posiciones, tamaños y el nivel de confianza de cada detección o clasificación. La salida se imprime en el monitor serie para análisis adicional o depuración.


##### Efecto

Seguimos utilizando el modelo de Detección de Gestos. Después de haber subido la aplicación, por favor abre el monitor serie y establece la velocidad de baudios del monitor serie a **9600**. Por favor prepara tu "piedra-papel-tijeras" y apúntalo hacia el área de reconocimiento de la cámara, y el monitor serie mostrará el resultado del reconocimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


#### Demo 2. Enviar comandos de control a través de XIAO

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


##### Explicación del procedimiento

Este sketch de Arduino establece una interfaz de comunicación entre la consola serie y el módulo Grove Vision AI V2, utilizando el Framework de Aprendizaje Automático SSCMA de Seeed Studio. El sketch está diseñado para pasar datos hacia y desde el módulo Grove Vision AI V2 a través de comandos serie.

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
- Finalmente, los datos recibidos del módulo Grove Vision AI V2 se transmiten de vuelta a la consola serie usando `Serial.write()`, completando la comunicación bidireccional entre la interfaz serie y el módulo vision AI.

Esta configuración permite la comunicación interactiva con el módulo Grove Vision AI V2, habilitando a los usuarios a enviar instrucciones y recibir datos del módulo a través de una conexión serie.


## Recursos
- [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)
- [SenseCraft AI Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process)
- [Biblioteca Arduino para XIAO](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)
- [Restaurar Grove Vision AI V2 al firmware de fábrica](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/Vision_AI_Module_V2_factory_flasher.zip)

## Solución de problemas

### P1: ¿Por qué no puedo ver el resultado reconocido en el puerto después de subir exitosamente el código del Demo1 usando XIAO ESP32C3?

Si estás usando Arduino IDE versión 1.xx, por favor vuelve a abrir el monitor serie después de presionar Reset en C3 para ver el resultado. Si estás usando Arduino versión 2.xx, el mensaje se actualizará en el monitor serie después de presionar el botón Reset.

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
