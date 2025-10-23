---
description: El usuario aprenderá cómo integrar Watcher con el sistema Grove, permitiéndole expandir sus capacidades y conectarse con una amplia gama de sensores y periféricos.
title: Salida UART
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg
slug: /es/uart_output
sidebar_position: 1
last_update:
  date: 07/10/2024
  author: Citric
---

# Como sensor y Usar Grove

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora</font></span></strong>
    </a>
</div><br />

En esta wiki, exploraremos las emocionantes posibilidades que surgen cuando Watcher, actuando como sensor, aprovecha su funcionalidad UART (Transmisor/Receptor Asíncrono Universal). Al habilitar la comunicación UART, Watcher puede transmitir datos valiosos como imágenes capturadas y resultados de reconocimiento a través de su interfaz UART, ubicada en la parte posterior del dispositivo. Esto abre un mundo de oportunidades para integrar Watcher con varias plataformas de hardware y crear aplicaciones innovadoras.

A lo largo de esta wiki, profundizaremos en los detalles de lectura e interpretación de los datos de salida de la interfaz UART de Watcher. Además, proporcionaremos tutoriales completos sobre cómo analizar y utilizar estos datos usando placas de desarrollo y plataformas populares, incluyendo XIAO, Arduino, Raspberry Pi y Jetson.

## Configuración Avanzada de SenseCAP Watcher

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher es el primer agente LLM físico para lugares inteligentes, capaz de monitorear escenas, activar acciones e interactuar basándose en comandos. Este video introducirá cómo SenseCAP Watcher selecciona modelos de activación de escena basados en análisis de tareas: modelo en dispositivo y modelo LLM. También mostraremos cómo configurar la luz RGB y la alerta de Pantalla y Sonido, y el modo de notificación push: APP, UART, HTTP.

## Cableado UART de Watcher

Cuando esté listo para usar el UART para alarmas de mensajes, conecte el Watcher a su MCU de la siguiente manera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/58.png" style={{width:800, height:'auto'}}/></div>

:::note
Tenga en cuenta que si su Watcher y MCU están alimentados por separado, entonces **no necesita** conectar los pines **3.3V o 5V** del Watcher y MCU.

Si planea usar el Watcher para alimentar el MCU, entonces puede usar **3.3V** para alimentar el MCU además del cableado en la imagen. (No use los pines de 5V, son solo para entrada)

Si planea usar el MCU para alimentar el Watcher, entonces necesitará usar la entrada de **5V**. (3.3V puede no ser suficiente para que el Watcher funcione correctamente)
:::

## Habilitando la Funcionalidad UART en Watcher

Para desbloquear todo el potencial de las capacidades UART de Watcher, primero necesitamos habilitar la funcionalidad UART dentro del dispositivo. Esto es particularmente útil en escenarios donde Watcher se emplea como un sistema de alarma. Cuando se activa una alarma, Watcher puede activar su comunicación UART, permitiéndole transmitir información crítica como imágenes capturadas y resultados de reconocimiento a dispositivos externos para procesamiento y análisis adicional.

Para habilitar la función de alarma UART, tienes dos opciones:

1. Solicitar explícitamente a Watcher que te notifique vía UART al asignar tareas usando la APP SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/60.png" style={{width:250, height:'auto'}}/></div>

2. Habilitar manualmente la función de alarma UART en la configuración detallada de la tarea:

   - Accede a la **Configuración Detallada** de la tarea que deseas configurar.
   - Localiza la sección **Acción**.
   - Marca la casilla para habilitar la **Salida de Puerto Serie / UART**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/86.png" style={{width:250, height:'auto'}}/></div><br />

:::tip
Por favor elige si necesitas habilitar la salida de imágenes según tu escenario de aplicación real. Si **Incluir imagen base64** está habilitado, entonces tu MCU necesita **al menos 70k de memoria** para almacenar en caché la imagen.
:::

Una vez que hayas habilitado la función de alarma UART usando cualquiera de los métodos anteriores, Watcher enviará la información de alarma necesaria vía UART cada vez que detecte el contenido de alarma especificado. Asegúrate de que Watcher esté conectado al dispositivo receptor apropiado, como un microcontrolador o una computadora con un terminal serie, para capturar y procesar la información de alarma transmitida a través de UART.

## Leyendo la Salida UART de Watcher

Una vez que la funcionalidad UART está habilitada, Watcher comenzará a transmitir datos a través de su interfaz UART. En esta sección, proporcionaremos una guía detallada sobre cómo leer e interpretar los datos recibidos de la salida UART de Watcher. Cubriremos las conexiones de hardware necesarias, protocolos de comunicación y formatos de datos para asegurar un proceso de recuperación de datos fluido y exitoso.

Por defecto, Watcher usa la siguiente configuración UART: velocidad de baudios de **115200**, **8 bits de datos**, **sin paridad**, **1 bit de parada**, y **sin control de flujo por hardware**. Al conectar a la interfaz UART de Watcher, asegúrate de que tu dispositivo receptor esté configurado con los mismos ajustes para garantizar una comunicación adecuada.

Cuando Watcher envía información de alarma vía UART, sigue un protocolo específico y formato basado en la estructura `tf_module_uart_alarm_t` definida en el archivo de cabecera `tf_module_uart_alarm.h`. El protocolo UART y formato para el módulo de alarma UART de Watcher son los siguientes:

### Formato de Salida

El formato de la salida UART es controlado por el campo `output_format`.

- Cuando `output_format` está establecido en 0, la salida está en formato binario.
- Cuando `output_format` está establecido en 1, la salida está en formato JSON.

:::note
`output_format` está establecido en 1 por defecto para salida en JSON.
:::

### Formato de Salida Binaria

Cuando `output_format` está establecido en 0, la estructura del paquete de salida UART es la siguiente:

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:1000, height:'auto'}}/></div><br />

- `PKT_MAGIC_HEADER`: El encabezado mágico del paquete, fijo como "SEEED" (5 bytes).
- `Prompt Str Len`: La longitud de la cadena de prompt, entero sin signo de 4 bytes en little-endian.
- `Prompt Str`: La cadena de prompt, usada para explicar brevemente la tarea que Watcher está realizando. Si el parámetro `text` está establecido, se usa su valor.
- `Big Image Len`: La longitud de la imagen grande, entero sin signo de 4 bytes en little-endian. Solo incluido cuando `include_big_image` es `true`.
- `Big Image`: Imagen JPG de 640*480, codificada en base64, sin cajas de objetos detectados. Solo incluido cuando `include_big_image` es `true`.
- `Small Image Len`: La longitud de la imagen pequeña, entero sin signo de 4 bytes en little-endian. Solo incluido cuando `include_small_image` es `true`.
- `Small Image`: Imagen JPG de 240*240, codificada en base64, con cajas dibujadas para objetos detectados. Solo incluido cuando `include_small_image` es `true`.
- `Boxes Count`: El número de cajas de objetos detectados, entero sin signo de 4 bytes en little-endian. Solo incluido cuando `include_boxes` es `true`.
- `Box Structure`: La estructura de una caja de objeto detectado, cada caja ocupa 10 bytes, incluyendo coordenadas, puntuación e ID de clase objetivo. Solo incluido cuando `include_boxes` es `true`.

:::note
El mensaje de cajas reconocidas (boxes) no se recibirá en este momento, ya que la característica correspondiente de Watcher aún está en desarrollo y no ha sido reportada aún en la última versión v1.1.
:::

### Formato de Salida JSON

Cuando `output_format` está establecido en 1, la estructura del paquete de salida UART es la siguiente:

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

Entre ellos, **(x,y)** es la posición del punto central del objeto reconocido, y **(w,h)** es la altura y anchura de la caja de reconocimiento, como se muestra en la figura siguiente. **score** es el nivel de confianza, **target_cls_id** es el id del objeto reconocido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/xyhw.png" style={{width:400, height:'auto'}}/></div>

### Opciones de Configuración

- `output_format`: Controla el formato de la salida UART, por defecto es 1 (formato JSON).
- `text`: Se utiliza para llenar el campo `prompt` del paquete de salida.
- `include_big_image`: Booleano (true | false), controla si la imagen grande se incluye en la salida, por defecto es `true`.
- `include_boxes`: Booleano (true | false), controla si las cajas se incluyen en la salida, por defecto es `true`.

Nota: Si se omite cualquier campo de configuración, se aplicará el valor por defecto.

:::note
El mensaje de cajas reconocidas (boxes) no se recibirá en este momento, ya que la característica correspondiente de Watcher aún está en desarrollo y no ha sido reportada aún en la última versión v1.1.
:::

## Serie XIAO ESP32 y Watcher

Aprende cómo conectar Watcher a la placa de la serie XIAO ESP32 y analizar los datos UART usando Arduino. Esta sección te guiará sobre cómo conectar Watcher a la placa de la serie XIAO ESP32 y analizar los datos UART usando Arduino.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
Esto no significa que otras series XIAO no sean compatibles. Principalmente porque los datos de mensaje reportados por Watcher ocupan aproximadamente **100k** (al menos 70k) de memoria, recomendaríamos usar la serie ESP32 de XIAO para la parte UART del desarrollo de Watcher. Si no necesitas analizar datos de imagen, entonces la memoria de los otros XIAO es perfectamente adecuada.
:::

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/63.png" style={{width:700, height:'auto'}}/></div><br />

- Conecta el pin TX del Watcher al pin RX de la interfaz UART del XIAO.

- Conecta el pin RX del Watcher al pin TX de la interfaz UART del XIAO.

- Conecta el pin GND del Watcher a un pin GND en el XIAO.

### Explicación del Código

Puedes usar cualquier placa de desarrollo de la serie XIAO ESP32, o cualquier otra placa de la serie ESP32 para usar el siguiente programa para leer el flujo de datos UART del Watcher.

:::note
Actualmente, solo se pueden generar flujos de datos JSON, por lo que solo se proporcionan programas que analizan flujos de datos JSON.

Otros XIAOs no siempre son compatibles, principalmente porque analizar un flujo JSON requiere al menos 70k de memoria.
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

El código proporcionado demuestra cómo recibir y analizar datos JSON del Watcher usando el Arduino IDE y la biblioteca ArduinoJson. Aquí hay una breve explicación del código:

1. Se incluye la biblioteca necesaria, **ArduinoJson**, para manejar el análisis JSON. Puedes buscarla e instalarla en el administrador de bibliotecas de Arduino.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/bblanchon/ArduinoJson" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Ir a Github 🖱️</font></span></strong>
    </a>
</div>

2. En la función `setup()`, se inicializa la comunicación serie tanto para el puerto serie USB (para depuración) como para el puerto serie UART (para recibir datos del Watcher).

3. En la función `loop()`, el código verifica si hay datos disponibles en el puerto serie UART.

4. Si hay datos disponibles, se crea un `DynamicJsonDocument` con una capacidad especificada para almacenar los objetos JSON analizados.

5. Los datos JSON se analizan usando la función `deserializeJson()`, y se manejan los errores de análisis.

6. El código luego verifica la presencia de claves específicas en el objeto JSON analizado, como "prompt", "big_image" y "small_image".

:::note
El análisis de información sobre cajas reconocidas (boxes) no está disponible en este momento, porque la función correspondiente del Watcher aún está en desarrollo, y esta información aún no se reporta en la última versión v1.0.1.
:::

7. Si se encuentra una clave, su valor correspondiente se imprime al puerto serie USB para propósitos de depuración.

8. El código también lleva un registro del número de mensajes de alarma recibidos usando la variable `count`.

9. Finalmente, se imprime un mensaje para indicar la finalización de cada recepción de mensaje de alarma, y el código espera el siguiente mensaje.

### Subiendo el Código a la Serie XIAO ESP32

Para subir el código a tu placa de la serie XIAO ESP32, sigue estos pasos:

1. Conecta tu placa de la serie XIAO ESP32 a tu computadora usando un cable USB.

2. Abre el Arduino IDE y asegúrate de tener instalado el paquete de soporte de placa necesario para la serie XIAO ESP32.

   - Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para terminar de agregarlo.

   - Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para terminar de agregarlo.

   - Si quieres usar **Seeed Studio XIAO ESP32C6** para las rutinas, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/)** para terminar de agregarlo.

3. Selecciona la placa y puerto apropiados desde el menú Herramientas en el Arduino IDE.

4. Abre el código proporcionado en el Arduino IDE.

5. Haz clic en el botón **Subir** para compilar y subir el código a tu placa de la serie XIAO ESP32.

### Resultados Esperados

Una vez que el código esté subido y ejecutándose en tu placa de la serie XIAO ESP32, después de que Watcher identifique la alarma objetivo, deberías ver el siguiente comportamiento:

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/62.png" style={{width:800, height:'auto'}}/></div><br />

También puedes intentar usar otra placa de desarrollo Arduino, pero asegúrate de que tenga suficiente memoria.

## Raspberry Pi & Watcher

Explora el proceso de conectar Watcher a una Raspberry Pi y utilizar scripts de Python para analizar y procesar los datos UART.

### Cableado

Esta sección explicará la Raspberry Pi 5 como ejemplo, si lo necesitas, puedes hacer un pedido a través del enlace de abajo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Comprar Raspberry Pi 🖱️</font></span></strong>
    </a>
</div>

Si estás usando otra serie de Raspberry Pi, el código y los tutoriales sobre cómo usarla son esencialmente los mismos.

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/65.png" style={{width:800, height:'auto'}}/></div><br />

- Conecta el pin TX del Watcher al pin RX (GPIO 15) de la Raspberry Pi.

- Conecta el pin RX del Watcher al pin TX (GPIO 14) de la Raspberry Pi.

- Conecta el pin GND del Watcher a un pin GND en la Raspberry Pi.

### Explicación del Código

Antes de ejecutar los scripts de Python, asegúrate de instalar las dependencias requeridas:

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

El primer script de Python lee los datos JSON del Watcher a través de UART y los imprime:

```python
import serial

# Set up the serial port
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Starting serial JSON reader on Raspberry Pi...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/68.png" style={{width:900, height:'auto'}}/></div><br />

:::note

1. Mi interfaz UART corresponde a `/dev/ttyAMA0`, si la tuya no es así, por favor modifícala tú mismo.

2. Este es un script de prueba que puedes usar para verificar si el UART del Raspberry Pi/Watcher está funcionando correctamente.

:::

El segundo script de Python se basa en el primero y añade análisis JSON y guardado de datos de imagen:

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
Actualmente, solo se pueden generar flujos de datos JSON, por lo que solo se proporcionan programas que analizan flujos de datos JSON.
:::

Este script hace lo siguiente:

- Lee datos JSON desde UART en un bucle

- Decodifica los datos JSON y llama a `process_json_data` para manejarlos

- Extrae información de prompt y datos de imagen del JSON

:::note
El análisis de información sobre cajas reconocidas (boxes) no está disponible en este momento, porque la función correspondiente de Watcher aún está en desarrollo, y esta información aún no se reporta en la última versión v1.0.1.
:::

- Decodifica los datos de imagen codificados en base64 y los guarda como archivos PNG usando `decode_and_save_image`

- Imprime la información extraída y los nombres de archivo de las imágenes guardadas

### Ejecutando el Código en Raspberry Pi

1. Crea un nuevo archivo Python en la Raspberry Pi, por ejemplo watcher_uart.py:

```
nano watcher_uart.py
```

2. Copia y pega el código Python completo en el archivo.

3. Presiona Ctrl+X, luego Y y Enter para guardar y salir del editor.

4. Ejecuta el script de Python:

```
python watcher_uart.py
```

### Resultados Esperados

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/69.png" style={{width:1000, height:'auto'}}/></div><br />

Después de ejecutar el script:

- Los datos JSON analizados recibidos del Watcher se imprimirán en el terminal en tiempo real.

- La imagen grande y la imagen pequeña recibidas se guardarán automáticamente como archivos big_image_x.png y small_image_x.png.

¡Eso es todo! Ahora has aprendido cómo conectar el Watcher a una Raspberry Pi, leer los datos UART con Python, analizar el JSON y guardar las imágenes transmitidas. Siéntete libre de experimentar más, como intentar mostrar los datos recibidos en una pantalla conectada a la Raspberry Pi en tiempo real.

## reComputer Jetson & Watch

Explora el proceso de conectar Watcher a un reComputer (un dispositivo basado en NVIDIA Jetson) y utilizar scripts de Python para analizar y procesar los datos UART.

### Cableado

Este tutorial explicará la placa portadora J401 reComputer adecuada para desarrolladores como ejemplo, y si quieres comprar el reComputer, puedes adquirirlo en el enlace de abajo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Comprar reComputer 🖱️</font></span></strong>
    </a>
</div>

En teoría, el contenido y código en esta sección se aplica a todos los productos de la serie NVIDIA Jetson.

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/66.png" style={{width:800, height:'auto'}}/></div><br />

- Conecta el pin TX del Watcher al pin RX de la interfaz UART del reComputer.

- Conecta el pin RX del Watcher al pin TX de la interfaz UART del reComputer.

- Conecta el pin GND del Watcher a un pin GND en el reComputer.

### Explicación del Código

Antes de ejecutar los scripts de Python, asegúrate de instalar las dependencias requeridas:

```
sudo apt-get update
sudo apt-get install python3-serial
sudo apt-get install python3-pillow
```

Si no tienes la intención de usar la Consola Serial en el UART, deberías deshabilitar la Consola Serial:

```
systemctl stop nvgetty
systemctl disable nvgetty
udevadm trigger
```

Es posible que necesites reiniciar tu reComputer en este punto para que los cambios surtan efecto.

Verifica el nombre del dispositivo de la interfaz UART en el reComputer:

```
ls /dev/ttyTHS*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/71.png" style={{width:700, height:'auto'}}/></div><br />

El primer script de Python lee los datos JSON del Watcher a través de UART y los imprime:

```python
import serial

# Set up the serial port
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Starting serial JSON reader on reComputer...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/70.png" style={{width:1000, height:'auto'}}/></div><br />

:::note

1. Mi interfaz UART corresponde a `/dev/ttyTHS0`, si la tuya no es así, por favor modifícala tú mismo.

2. Este es un script de prueba que puedes usar para verificar si el UART del reComputer/Watcher está funcionando correctamente.

:::

El segundo script de Python se basa en el primero y añade análisis JSON y guardado de datos de imagen:

```python
import json
import serial  
import base64
from PIL import Image
import io

# Set up the serial port
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1)

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
    print("Starting serial JSON reader on reComputer...")
    read_json_from_serial()
```

:::note
Actualmente, solo se pueden generar flujos de datos JSON, por lo que solo se proporcionan programas que analizan flujos de datos JSON.
:::

Este script hace lo siguiente:

- Lee datos JSON desde UART en un bucle

- Decodifica los datos JSON y llama a process_json_data para manejarlos

- Extrae información de prompt y datos de imagen del JSON

- Decodifica los datos de imagen codificados en base64 y los guarda como archivos PNG usando `decode_and_save_image`

:::note
El análisis de información sobre cajas reconocidas (boxes) no está disponible en este momento, porque la función correspondiente de Watcher aún está en desarrollo, y esta información aún no se reporta en la última versión v1.0.1.
:::

- Imprime la información extraída y los nombres de archivo de las imágenes guardadas

### Subiendo el Código al reComputer

Crea un nuevo archivo Python en el reComputer, por ejemplo `watcher_uart.py`:

```
nano watcher_uart.py
```

Copia y pega el código Python completo en el archivo. Presiona Ctrl+X, luego Y y Enter para guardar y salir del editor. Ejecuta el script de Python:

```
sudo python watcher_uart.py
```

### Resultados Esperados

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/72.png" style={{width:1000, height:'auto'}}/></div><br />

Después de ejecutar el script:

- Los datos JSON analizados recibidos del Watcher se imprimirán en la terminal en tiempo real, incluyendo la información del prompt.

- La imagen grande y la imagen pequeña recibidas se guardarán automáticamente como archivos big_image_x.png y small_image_x.png.

¡Eso es todo! Ahora has aprendido cómo conectar el Watcher a un reComputer, leer los datos UART con Python, analizar el JSON y guardar las imágenes transmitidas. Siéntete libre de experimentar más y adaptar el código a tu caso de uso específico en la plataforma reComputer.

## Recursos

- [Primeros Pasos con SenseCAP Watcher](https://wiki.seeedstudio.com/es/getting_started_with_watcher/)

- [Serie de Inicio Rápido de Watcher 1# : Cómo asignar tareas al Watcher](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/)

- [Serie de Inicio Rápido de Watcher 2# : Watcher Looks & Herramientas SenseCraft](https://wiki.seeedstudio.com/es/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)

- [Serie de Inicio Rápido de Watcher 3# : Como sensor & Usar Grove](https://wiki.seeedstudio.com/es/watcher_as_grove)

- [Serie de Inicio Rápido de Watcher 4# : Desplegar las capacidades de IA del Watcher localmente](https://wiki.seeedstudio.com/es/watcher_local_deploy)

- Serie de Inicio Rápido de Watcher 5# : Entrenar un modelo para Watcher

- [Serie de Inicio Rápido de Watcher 6# : Qué hace el Watcher](https://wiki.seeedstudio.com/es/what_does_watcher_do)

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
