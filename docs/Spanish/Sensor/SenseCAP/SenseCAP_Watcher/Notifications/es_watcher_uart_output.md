---
description: User will learn how to integrate Watcher with the Grove system, enabling them to expand its capabilities and connect with a wide range of sensors and peripherals.
title: Sálida UART
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg
slug: /es/uart_output
sidebar_position: 1
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Como sensor y uso de Grove

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora</font></span></strong>
    </a>
</div><br />

En este artículo exploraremos las emocionantes posibilidades que surgen cuando el **Watcher** actúa como **sensor** mediante su funcionalidad UART (Receptor/Transmisor Asíncrono Universal). Al habilitar la comunicación UART, el Watcher puede transmitir datos valiosos como imágenes capturadas y resultados de reconocimiento a través de su interfaz UART, ubicada en la parte posterior del dispositivo. Esto abre un mundo de oportunidades para integrarlo con diversas plataformas de hardware y crear aplicaciones innovadoras.

A lo largo de este artículo, te mostraremos cómo leer e interpretar los datos que emite el Watcher mediante UART. Además, proporcionaremos tutoriales detallados para analizarlos y utilizarlos con placas de desarrollo populares como **XIAO**, **Arduino**, **Raspberry Pi** y **Jetson**.

## Configuración avanzada de SenseCAP Watcher

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

El SenseCAP Watcher es el primer agente físico LLM para espacios inteligentes, capaz de monitorear escenas, activar acciones e interactuar mediante comandos. Este video muestra cómo selecciona modelos de activación de escenas, cómo configurar la luz RGB, la alerta de sonido/pantalla y los métodos de notificación: APP, UART, HTTP.

## Cableado UART del Watcher

Cuando estés listo para usar UART para enviar alertas, conecta el Watcher a tu MCU como se muestra:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/58.png" style={{width:800, height:'auto'}}/></div>

:::note
- Si el Watcher y la MCU tienen **fuentes de alimentación separadas**, **NO conectes** los pines **3.3 V ni 5 V** entre ellos.
- Si deseas que el **Watcher alimente la MCU**, puedes usar el pin **3.3 V** (no uses el de 5 V, es solo entrada).
- Si deseas que la **MCU alimente al Watcher**, debes usar el pin de **entrada 5 V** (3.3 V puede no ser suficiente para su funcionamiento correcto).
:::

## Habilitar la funcionalidad UART en Watcher

Para aprovechar el UART de Watcher, primero debes **habilitarlo** en el dispositivo. Esto es especialmente útil si el Watcher se utiliza como sistema de alarma, ya que puede transmitir por UART información crítica como imágenes y resultados de reconocimiento.

Hay dos formas de habilitar UART:

1. **Desde la app SenseCraft**, al asignar una tarea, selecciona que notifique por UART.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/60.png" style={{width:250, height:'auto'}}/></div>

2. O manualmente desde la configuración avanzada de la tarea:

   - Ve a **Configuración detallada (Detail Config)** de la tarea.
   - Busca la sección **Action**.
   - Marca la casilla **Serial Port / UART Output**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/86.png" style={{width:250, height:'auto'}}/></div><br />

:::tip
Puedes elegir si deseas incluir imágenes o no, según tu caso de uso. Si habilitas **Include base64 image**, tu MCU debe tener **al menos 70 kB de memoria** para almacenarla.
:::

Una vez habilitada, Watcher enviará los datos de alerta por UART al detectar el evento configurado. Asegúrate de que esté conectado a un dispositivo receptor adecuado (como una MCU o un ordenador con terminal serial).

## Lectura de salida UART desde Watcher

Una vez habilitada la funcionalidad UART, Watcher comenzará a transmitir datos a través de su interfaz UART. En esta sección, proporcionaremos una guía detallada sobre cómo leer e interpretar los datos recibidos desde la salida UART de Watcher. Cubriremos las conexiones de hardware necesarias, los protocolos de comunicación y los formatos de datos para asegurar un proceso de lectura fluido y exitoso.

Por defecto, Watcher utiliza la siguiente configuración UART: velocidad en baudios de **115200**, **8 bits de datos**, **sin paridad**, **1 bit de parada** y **sin control de flujo por hardware**. Al conectarse a la interfaz UART de Watcher, asegúrate de que tu dispositivo receptor esté configurado con los mismos parámetros para garantizar una comunicación adecuada.

Cuando Watcher envía información de alerta a través de UART, sigue un protocolo y formato específico basado en la estructura `tf_module_uart_alarm_t` definida en el archivo de cabecera `tf_module_uart_alarm.h`. El protocolo y formato UART para el módulo de alertas de Watcher son los siguientes:

### Formato de salida

El formato de la salida UART está controlado por el campo `output_format`.

- Cuando `output_format` está configurado en 0, la salida es en formato binario.
- Cuando `output_format` está configurado en 1, la salida es en formato JSON.

:::note
`output_format` está configurado en 1 por defecto para emitir en formato JSON.
:::

### Formato de salida binario

Cuando `output_format` está configurado en 0, la estructura del paquete de salida UART es la siguiente:

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:1000, height:'auto'}}/></div><br />

- `PKT_MAGIC_HEADER`: Encabezado mágico del paquete, fijo como "SEEED" (5 bytes).
- `Prompt Str Len`: Longitud de la cadena de mensaje, entero sin signo de 4 bytes en orden little-endian.
- `Prompt Str`: Cadena de mensaje, utilizada para explicar brevemente la tarea que está ejecutando Watcher. Si se configura el parámetro `text`, se utiliza su valor.
- `Big Image Len`: Longitud de la imagen grande, entero sin signo de 4 bytes en orden little-endian. Solo se incluye si `include_big_image` es `true`.
- `Big Image`: Imagen JPG de 640×480 codificada en base64, sin cuadros de los objetos detectados. Solo se incluye si `include_big_image` es `true`.
- `Small Image Len`: Longitud de la imagen pequeña, entero sin signo de 4 bytes en orden little-endian. Solo se incluye si `include_small_image` es `true`.
- `Small Image`: Imagen JPG de 240×240 codificada en base64, con cuadros dibujados de los objetos detectados. Solo se incluye si `include_small_image` es `true`.
- `Boxes Count`: Número de cuadros de objetos detectados, entero sin signo de 4 bytes en orden little-endian. Solo se incluye si `include_boxes` es `true`.
- `Box Structure`: Estructura de un cuadro de objeto detectado, cada cuadro ocupa 10 bytes e incluye coordenadas, puntuación e ID de clase del objetivo. Solo se incluye si `include_boxes` es `true`.

:::note
El mensaje de cuadros reconocidos (boxes) no se recibirá por ahora, ya que la función correspondiente de Watcher aún está en desarrollo y no ha sido incluida en la versión v1.1 más reciente.
:::

### Formato de salida JSON

Cuando `output_format` está configurado en 1, la estructura del paquete de salida UART es la siguiente:

```json
{
      "prompt": "People detected",
      "big_image": "base64 encoded JPG image, if include_big_image is enabled, otherwise this field is omitted",
      "inference":{
        "boxes": [
            {
                "x": 100,
                "y": 100,
                "w": 50,
                "h": 60,
                "score": 0.8,
                "target_cls_id": 1
            }
        ],
        "classes_name": ["person"]
      },

}
```
Entre ellos, **(x,y)** es la posición del punto central del objeto reconocido, y **(w,h)** es la altura y el ancho del cuadro de reconocimiento, como se muestra en la figura a continuación. **score** es el nivel de confianza, **target_cls_id** es el ID del objeto reconocido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/xyhw.png" style={{width:400, height:'auto'}}/></div>

### Opciones de configuración

- `output_format`: Controla el formato de salida por UART, por defecto es 1 (formato JSON).
- `text`: Se utiliza para llenar el campo `prompt` del paquete de salida.
- `include_big_image`: Booleano (true | false), controla si la imagen grande se incluye en la salida, por defecto es `true`.
- `include_boxes`: Booleano (true | false), controla si los cuadros se incluyen en la salida, por defecto es `true`.

Nota: Si se omite cualquier campo de configuración, se asumirá el valor por defecto.

:::note
El mensaje de cuadros reconocidos (boxes) no se recibirá por ahora, ya que la función correspondiente de Watcher aún está en desarrollo y no ha sido incluida en la versión v1.1 más reciente.
:::

## Serie XIAO ESP32 & Watcher

Aprende cómo conectar Watcher a la placa de la serie XIAO ESP32 y cómo analizar los datos UART utilizando Arduino. Esta sección te guiará sobre cómo conectar Watcher a una placa de la serie XIAO ESP32 y cómo interpretar los datos UART con Arduino.

### Cableado

Este tutorial soporta la serie XIAO:

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

:::tip
Esto no significa que otras placas de la serie XIAO no sean compatibles. Principalmente, debido a que los datos reportados por Watcher ocupan aproximadamente **100 kB** (al menos 70 kB) de memoria, recomendamos utilizar la serie XIAO basada en ESP32 para la parte UART del desarrollo con Watcher. Si no necesitas analizar datos de imagen, entonces la memoria de otros modelos XIAO es perfectamente adecuada.
:::

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/63.png" style={{width:700, height:'auto'}}/></div><br />

- Conecta el pin TX del Watcher al pin RX de la interfaz UART del XIAO.

- Conecta el pin RX del Watcher al pin TX de la interfaz UART del XIAO.

- Conecta el pin GND del Watcher a un pin GND del XIAO.

### Explicación del código

Puedes usar cualquier placa de desarrollo de la serie XIAO ESP32, o cualquier otra placa basada en ESP32, para utilizar el siguiente programa y leer el flujo de datos UART del Watcher.

:::note
Actualmente, solo se puede emitir flujo de datos en formato JSON, por lo que solo se proporcionan programas que analicen datos en formato JSON.

Otros modelos XIAO no siempre son compatibles, principalmente porque analizar un flujo JSON requiere al menos 70 kB de memoria.
:::

```cpp
#include <ArduinoJson.h>

long int count = 0;  // Number of alarms

void setup() {
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, D7, D6);  // RX, TX
  while(!Serial);
  delay(100);

  Serial.println("Device Ready. Waiting for Watcher's JSON data...");
}

void loop() {
  if (Serial1.available()) {
    // Set up enough space to store the parsed JSON objects
    const size_t capacity = 1024 * 100 + 512; // At least 70k, insurance 100k
    DynamicJsonDocument doc(capacity);

    // Streaming parsing from Serial1
    DeserializationError error = deserializeJson(doc, Serial1);

    if (error) {
      Serial.print("deserializeJson() failed: ");
      Serial.println(error.c_str());
      return;
    }

    // Print the parsed key-value pairs
    if (doc.containsKey("prompt")) {
      Serial.print("prompt: ");
      Serial.println(doc["prompt"].as<String>());
    }

    if (doc.containsKey("inference")) {
      Serial.print("inference: ");
      Serial.println(doc["inference"].as<String>());
    }

   if (doc.containsKey("inference")) {
     JsonArray boxes = doc["inference"]["boxes"][0].as<JsonArray>();
      Serial.println();
      Serial.println("You can get the number inside the boxes.");
      Serial.print("Box -> ");
      Serial.print("x: ");
      Serial.print(boxes[0].as<int>());
      Serial.print(", y: ");
      Serial.print(boxes[1].as<int>());
      Serial.print(", widths: ");
      Serial.print(boxes[2].as<int>());
      Serial.print(", height: ");
      Serial.print(boxes[3].as<int>());
      Serial.print(", score: ");
      Serial.print(boxes[4].as<int>());
      Serial.print(", target_cls_id: ");
      Serial.println(boxes[5].as<int>());
   }
    
    // You need to turn on "Inculde base64 iamge" button in your app, default is off.
    //And then, uncomment the following code.
    /*
    if (doc.containsKey("big_image")) {
      Serial.print("big_image: ");
      String big_imageData = doc["big_image"].as<String>();
      // Print only the first 100 characters of the image data for example
      Serial.println(big_imageData.substring(0, 100) + "...");
    }
    */


    count++;
    if(count > 2147483646){  // Spillage prevention
      count = 0;
    }
    Serial.print("The ");
    Serial.print(count);
    Serial.println(" alarm message reception is complete. Wait for the next message...");
    Serial.println("------------------------------------------------------------------");
  }
}
```
El siguiente código demuestra cómo recibir y analizar datos JSON desde Watcher usando el IDE de Arduino y la biblioteca ArduinoJson. A continuación, se explica brevemente el funcionamiento del código:

1. Se incluye la biblioteca necesaria, **ArduinoJson**, para el manejo del análisis de datos JSON. Puedes buscarla e instalarla desde el gestor de bibliotecas del IDE de Arduino.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/bblanchon/ArduinoJson" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Ir a Github 🖱️</font></span></strong>
    </a>
</div>

2. En la función `setup()`, se inicializa la comunicación serial tanto por USB (para depuración) como por UART (para recibir datos desde Watcher).

3. En la función `loop()`, el código verifica si hay datos disponibles en la UART.

4. Si hay datos disponibles, se crea un `DynamicJsonDocument` con una capacidad especificada para almacenar los objetos JSON analizados.

5. Los datos JSON se analizan usando la función `deserializeJson()`, y se gestionan posibles errores de análisis.

6. Luego, el código verifica la presencia de claves específicas en el objeto JSON analizado, como `"prompt"`, `"big_image"` y `"small_image"`.

:::note
El análisis de información sobre los cuadros reconocidos (boxes) no está disponible por el momento, ya que la función correspondiente de Watcher aún está en desarrollo y esta información no ha sido incluida en la versión v1.0.1 más reciente.
:::

7. Si se encuentra alguna clave, su valor correspondiente se imprime por USB para fines de depuración.

8. El código también lleva la cuenta del número de mensajes de alerta recibidos mediante la variable `count`.

9. Finalmente, se imprime un mensaje que indica la finalización de cada recepción de alerta, y el código espera el siguiente mensaje.

### Subir el código a la serie XIAO ESP32

Para cargar el código en tu placa XIAO ESP32 Series, sigue estos pasos:

1. Conecta tu placa XIAO ESP32 Series a tu computadora mediante un cable USB.

2. Abre el IDE de Arduino y asegúrate de tener instalado el paquete de soporte adecuado para la serie XIAO ESP32.

   - Si deseas usar **Seeed Studio XIAO ESP32C3**, consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la configuración.

   - Si deseas usar **Seeed Studio XIAO ESP32S3**, consulta **[este tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)**.

   - Si deseas usar **Seeed Studio XIAO ESP32C6**, consulta **[este tutorial](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)**.

3. Selecciona la placa y el puerto correctos desde el menú Herramientas del IDE de Arduino.

4. Abre el código proporcionado en el IDE.

5. Haz clic en el botón **Upload** para compilar y cargar el código en tu placa XIAO ESP32.

### Resultados esperados

Una vez que el código esté cargado y ejecutándose en tu placa XIAO ESP32, cuando Watcher detecte una alarma, deberías observar el siguiente comportamiento:

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/62.png" style={{width:800, height:'auto'}}/></div><br />

También puedes intentar usar otra placa de desarrollo basada en Arduino, pero asegúrate de que tenga suficiente memoria disponible.

## Raspberry Pi y Watcher

Explora el proceso de conexión entre Watcher y una Raspberry Pi, y cómo utilizar scripts en Python para analizar los datos UART.

### Cableado

Esta sección usa como ejemplo la Raspberry Pi 5. Si la necesitas, puedes adquirirla a través del siguiente enlace:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}>Comprar Raspberry Pi 🖱️</font></span></strong>
    </a>
</div>

Si utilizas otro modelo de Raspberry Pi, el código y los tutoriales aplican prácticamente de la misma forma.

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/65.png" style={{width:800, height:'auto'}}/></div><br />

- Conecta el pin TX del Watcher al pin RX (GPIO 15) de la Raspberry Pi.

- Conecta el pin RX del Watcher al pin TX (GPIO 14) de la Raspberry Pi.

- Conecta el pin GND del Watcher a un pin GND de la Raspberry Pi.

### Explicación del código

Antes de ejecutar los scripts en Python, asegúrate de instalar las dependencias necesarias:

```
sudo apt update
sudo apt install python3-pip
pip3 install pyserial pillow
```

Verifica el nombre del dispositivo de la interfaz UART en la Raspberry Pi:

```
ls /dev/ttyAMA*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/67.png" style={{width:700, height:'auto'}}/></div><br />

El primer script en Python lee los datos JSON desde el Watcher a través de UART y los imprime:

```python
import serial

# Configura el puerto serial
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Iniciando lectura de JSON por UART en Raspberry Pi...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/68.png" style={{width:900, height:'auto'}}/></div><br />

:::note
1. Mi interfaz UART corresponde a `/dev/ttyAMA0`; si la tuya es diferente, por favor modifícala según tu configuración.

2. Este es un script de prueba que puedes usar para verificar si la comunicación UART entre la Raspberry Pi y Watcher funciona correctamente.
:::

El segundo script en Python amplía el primero, añadiendo análisis de JSON y guardado de imágenes:

```python
import json
import serial  
import base64
from PIL import Image
import io

# Configura el puerto serial
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1)

# Contadores de imágenes
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("Datos JSON recibidos, procesando...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("Error al decodificar JSON")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"Ocurrió un error: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # Declarar variables globales

    # Procesar mensaje de texto
    if "prompt" in data:  
        print(f"Mensaje: {data['prompt']}")
    
    # Procesar información de cajas (aún no disponible)
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"Cuadro {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, score: {box['score']}, target_cls_id: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"Imagen grande procesada y guardada como {filename}.")
        big_image_counter += 1  # Incrementar contador

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"Imagen pequeña procesada y guardada como {filename}.")  
        small_image_counter += 1  # Incrementar contador

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # Guardar como archivo PNG
    return image

if __name__ == "__main__": 
    print("Iniciando lectura de JSON por UART en Raspberry Pi...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/68.png" style={{width:900, height:'auto'}}/></div><br />

:::note
1. Mi interfaz UART corresponde a `/dev/ttyAMA0`. Si la tuya es diferente, por favor modifícala según tu configuración.

2. Este es un script de prueba que puedes usar para verificar si la comunicación UART entre la Raspberry Pi y Watcher funciona correctamente.
:::

El segundo script en Python amplía el primero, añadiendo análisis JSON y guardado de datos de imagen:

```python
import json
import serial  
import base64
from PIL import Image
import io

# Set up the serial port
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1)

# Initialize image counters
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("Received JSON data, processing...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("Error decoding JSON")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"An error occurred: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # Declare global variables

    # Process prompt info
    if "prompt" in data:  
        print(f"Prompt: {data['prompt']}")
    
    # Process boxes info
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"Box {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, score: {box['score']}, target_cls_id: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"Big image processed and saved as {filename}.")
        big_image_counter += 1  # Update global variable 

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"Small image processed and saved as {filename}.")  
        small_image_counter += 1  # Update global variable

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # Save as PNG file
    return image

if __name__ == "__main__": 
    print("Starting serial JSON reader on Raspberry Pi...")
    read_json_from_serial()
```

:::note
Actualmente, solo se puede emitir flujo de datos en formato JSON, por lo que solo se proporcionan programas que analicen este tipo de datos.
:::

Este script realiza lo siguiente:

- Lee datos JSON desde UART en un bucle continuo

- Decodifica los datos JSON y llama a `process_json_data` para manejarlos

- Extrae el mensaje (`prompt`) y los datos de imagen del JSON

:::note
El análisis de información sobre los cuadros reconocidos (boxes) no está disponible por ahora, ya que la función correspondiente de Watcher aún está en desarrollo y no ha sido incluida en la versión v1.0.1 más reciente.
:::

- Decodifica los datos de imagen codificados en base64 y los guarda como archivos PNG usando `decode_and_save_image`

- Imprime el contenido extraído y los nombres de los archivos de imagen guardados

### Ejecutar el código en Raspberry Pi

1. Crea un nuevo archivo Python en la Raspberry Pi, por ejemplo: `watcher_uart.py`:

```
nano watcher_uart.py
```

2. Copia y pega el código Python completo en el archivo.

3. Presiona Ctrl+X, luego Y y Enter para guardar y salir del editor.

4. Ejecuta el script de Python:

```
python watcher_uart.py
```

### Resultados esperados

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/69.png" style={{width:1000, height:'auto'}}/></div><br />

Después de ejecutar el script:

- Los datos JSON analizados recibidos desde Watcher se imprimirán en tiempo real en la terminal.

- Las imágenes recibidas (grande y pequeña) se guardarán automáticamente como archivos `big_image_x.png` y `small_image_x.png`.

¡Eso es todo! Ahora has aprendido cómo conectar el Watcher a una Raspberry Pi, leer los datos UART con Python, analizar el JSON y guardar las imágenes transmitidas. Si lo deseas, puedes seguir experimentando, por ejemplo, mostrando los datos recibidos en una pantalla conectada a la Raspberry Pi en tiempo real.

---

## reComputer Jetson & Watcher

Explora el proceso de conexión entre Watcher y un reComputer (dispositivo basado en NVIDIA Jetson) y cómo usar scripts en Python para analizar los datos UART.

### Cableado

Este tutorial usa como ejemplo la placa base J401 del reComputer, adecuada para desarrolladores. Si deseas adquirir el reComputer, puedes hacerlo en el siguiente enlace:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}>Comprar reComputer 🖱️</font></span></strong>
    </a>
</div>

En teoría, el contenido y el código de esta sección aplican a todos los productos de la serie NVIDIA Jetson.

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/66.png" style={{width:800, height:'auto'}}/></div><br />

- Conecta el pin TX del Watcher al pin RX de la interfaz UART del reComputer.

- Conecta el pin RX del Watcher al pin TX de la interfaz UART del reComputer.

- Conecta el pin GND del Watcher a un pin GND del reComputer.

### Explicación del código

Antes de ejecutar los scripts en Python, asegúrate de instalar las siguientes dependencias:

```
sudo apt-get update
sudo apt-get install python3-serial
sudo apt-get install python3-pillow
```

Si no planeas usar la consola serial sobre UART, deberías desactivarla:

```
systemctl stop nvgetty
systemctl disable nvgetty
udevadm trigger
```

Es posible que necesites reiniciar el reComputer para que los cambios surtan efecto.

Verifica el nombre del dispositivo de la interfaz UART en el reComputer:

```
ls /dev/ttyTHS*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/71.png" style={{width:700, height:'auto'}}/></div><br />

El primer script en Python lee los datos JSON desde Watcher por UART y los imprime:

```python
import serial

# Configura el puerto serial
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Iniciando lector de JSON por UART en reComputer...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/70.png" style={{width:1000, height:'auto'}}/></div><br />

:::note
1. Mi interfaz UART corresponde a `/dev/ttyTHS0`, si la tuya no es igual, por favor modifícala según corresponda.

2. Este es un script de prueba que puedes usar para verificar si el UART del reComputer/Watcher funciona correctamente.
:::

El segundo script en Python se basa en el primero y añade el análisis de JSON y el guardado de imágenes:

```python
import json
import serial  
import base64
from PIL import Image
import io

# Configurar el puerto serial
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1)

# Inicializar contadores de imágenes
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("Datos JSON recibidos, procesando...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("Error decodificando JSON")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"Ocurrió un error: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # Declarar variables globales

    # Procesar información del prompt
    if "prompt" in data:  
        print(f"Prompt: {data['prompt']}")
    
    # Procesar información de cajas (boxes)
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"Caja {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, score: {box['score']}, target_cls_id: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"Imagen grande procesada y guardada como {filename}.")
        big_image_counter += 1  # Actualizar variable global 

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"Imagen pequeña procesada y guardada como {filename}.")  
        small_image_counter += 1  # Actualizar variable global

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # Guardar como archivo PNG
    return image

if __name__ == "__main__": 
    print("Iniciando lector serial JSON en reComputer...")
    read_json_from_serial()
```

Este script realiza lo siguiente:

* Lee datos JSON desde UART en un bucle

* Decodifica los datos JSON y llama a `process_json_data` para procesarlos

* Extrae información del prompt y datos de imágenes del JSON

* Decodifica las imágenes codificadas en base64 y las guarda como archivos PNG usando `decode_and_save_image`

- Imprime la información extraída y los nombres de los archivos guardados

### Subir el código a reComputer

Crea un nuevo archivo Python en el reComputer, por ejemplo `watcher_uart.py`:

```
nano watcher_uart.py
```

Copia y pega el código Python completo en el archivo. Presiona Ctrl+X, luego Y y Enter para guardar y salir del editor. Ejecuta el script Python:

```
sudo python watcher_uart.py
```

### Resultados esperados

<br />
<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/watcher_getting_started/72.png"
    style={{ width: 1000, height: 'auto' }}
    alt="Watcher Getting Started"
  />
</div>
<br />

Después de ejecutar el script:

* Los datos JSON analizados que reciba el Watcher se mostrarán en tiempo real en la terminal, incluyendo la información del prompt.

* La imagen grande y la pequeña recibidas se guardarán automáticamente como archivos big\_image\_x.png y small\_image\_x.png.

¡Listo! Ahora has aprendido cómo conectar el Watcher a un reComputer, leer datos UART con Python, analizar el JSON y guardar las imágenes transmitidas. Puedes experimentar y adaptar el código a tu caso de uso específico en la plataforma reComputer.

## Recursos

* [Comenzando con SenseCAP Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher/)

* [Serie de inicio rápido Watcher 1#: Cómo asignar tareas a Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)

* [Serie de inicio rápido Watcher 2#: Apariencia de Watcher y herramientas SenseCraft](https://wiki.seeedstudio.com/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)

* [Serie de inicio rápido Watcher 3#: Como sensor y uso con Grove](https://wiki.seeedstudio.com/watcher_as_grove)

* [Serie de inicio rápido Watcher 4#: Desplegar capacidades AI de Watcher localmente](https://wiki.seeedstudio.com/watcher_local_deploy)

* Serie de inicio rápido Watcher 5#: Entrenamiento de un modelo para Watcher

* [Serie de inicio rápido Watcher 6#: Qué hace Watcher](https://wiki.seeedstudio.com/what_does_watcher_do)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
