---
description: Esta guía te ayudará a configurar rápidamente la Placa de Expansión RS485 de Seeed Studio XIAO y comenzar con la comunicación RS485.
title: Placa de Expansión RS485 para XIAO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /es/XIAO-RS485-Expansion-Board
last_update:
  date: 11/20/2024
  author: Jason
---


# Introducción a la Placa de Expansión RS485 de Seeed Studio XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

## Descripción del Hardware

### material preparado

<div class="table-center">
 <table align="center">
  <tr>
   <th>Placa de Expansión RS485 de Seeed Studio XIAO</th>
   <th>Seeed Studio XIAO ESP32-C3</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Diagrama de Pines

<div class="table-center">
  <table align="center">
    <tr>
        <th>Diagrama de indicación de la Expansión RS485 XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/pinlist.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- INTERRUPTOR 5V OUT/IN : Uno es la entrada y salida del puerto de 5V, cuando el esclavo establece el archivo IN, como entrada, cuando el maestro establece el archivo OUT, este puerto se descarga externamente, se puede conectar al sensor para la alimentación del sensor.

- INTERRUPTOR 120R : El interruptor 120R se utiliza para determinar si la resistencia de 120 ohmios es accesible o no. 485 necesita agregar una resistencia de 120 ohmios al principio y al final de entornos de cableado largo para hacer la coincidencia y asegurar la comunicación.

- INT : Puerto de interrupción reservado.

:::tip
Cuando se usa como modo de entrada, necesitas cambiar el interruptor a IN, y si se usa como modo de salida, necesitas cambiar el interruptor a OUT para prevenir quemaduras.
:::

### Esquema de Conexión

<div class="table-center">
  <table align="center">
    <tr>
        <th>Conexiones de dos placas de expansión RS485</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/connect1.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
En este proyecto, el XIAO ESP32C3 se comunica con la placa de expansión RS485 usando D4 (GPIO6) y D5 (GPIO7).

Si usas una placa de desarrollo diferente, modifica las configuraciones de pines correspondientes según sea necesario.
:::

## Descripción del Software

### Código del Emisor

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); 


#define enable_pin D2 // Define the enable pin as D2

void setup() {
  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO6), TX=D5(GPIO7)


  // Wait for the hardware serial to be ready
  while(!mySerial);
  // Wait for the hardware serial to be ready
  while(!Serial);

  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
  digitalWrite(enable_pin, HIGH); // Set the enable pin to high
}

void loop() {
if (Serial.available()) {
    String receivedData = Serial.readStringUntil('\n'); // Read the data from the hardware serial until a newline character

    // If the received data is not empty
    if (receivedData.length() > 0) {
        Serial.println("Send successfully"); // Print a success message
        mySerial.print("Master send information is: "); // Send a prompt message to the hardware serial
        mySerial.println(receivedData); // Send the received data to the hardware serial
    }
  }
}

```

- **Librería HardwareSerial:** Permite la creación de puertos serie adicionales en ESP32, típicamente usado para comunicación con dispositivos (como sensores o módulos).
- `HardwareSerial mySerial(1);`: Define un objeto HardwareSerial llamado mySerial, usando D5 y D4 como los pines de recepción y transmisión.
- `#define enable_pin D2`: Define un pin de habilitación usado para controlar el estado de envío y recepción del módulo RS485.

- `setup()`:
  - `Serial.begin(115200`: Inicializa el puerto serie de hardware con una velocidad de baudios de 115200.
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`: RX=D4(GPIO4), TX=D5(GPIO5).
  - `while(!mySerial)`: Espera hasta que el puerto serie de hardware esté listo para la comunicación.
  - `while(!Serial)`: Espera hasta que el puerto serie de hardware esté listo para la comunicación.
  - `pinMode(enable_pin, OUTPUT)`: Configura el enable_pin como un pin de salida para controlar el módulo RS485.
  - `digitalWrite(enable_pin, HIGH)`: Establece el enable_pin en HIGH, configurando el módulo RS485 para modo de envío.

- `loop():`
  - `if (receivedData.length() > 0)`: Verifica si hay algún dato disponible para leer desde el puerto serie de hardware.
  - `String receivedData = Serial.readStringUntil('\n');` : Lee los datos del puerto serie de hardware hasta un carácter de nueva línea
  - `Serial.println("Send successfully")`: Imprime un mensaje de éxito.
  - `mySerial.print("Master send information is: ")`: Envía un mensaje de aviso al puerto serie de hardware.
  - `mySerial.println(receivedData)` :Envía los datos que necesitas a una placa de expansión RS485.

### Código del Receptor

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); // Use UART2
#define enable_pin D2 // Define the enable pin as D2

void setup() {
  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)

  // Wait for the hardware serial to be ready
  while(!Serial);
  // Wait for the hardware serial to be ready
  while(!mySerial);

  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
  digitalWrite(enable_pin, LOW); // Set the enable pin to low
}

void loop() {
  // Check if there is data available from the hardware serial
  if (mySerial.available()) {
      String receivedData = mySerial.readStringUntil('\n'); // Read strings based on newlines
      Serial.print("Received data: ");
      Serial.println(receivedData); // Direct printing of received data
  }
}

```

- **Librería HardwareSerial:** Permite la creación de puertos serie adicionales en ESP32, típicamente usado para comunicación con dispositivos (como sensores o módulos).
- `HardwareSerial mySerial(1);`: Define un objeto HardwareSerial llamado mySerial, usando D5 como RX y D4 como TX.
- `define enable_pin D2`: Define un pin de habilitación usado para controlar el estado de envío y recepción del módulo RS485.

- `setup()`:
  - `Serial.begin(115200`: Inicializa el puerto serie de hardware con una velocidad de baudios de 115200.
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`RX=D4(GPIO4), TX=D5(GPIO5).
  - `while(!Serial)`: Espera hasta que el puerto serie de hardware esté listo para la comunicación.
  - `while(!mySerial)`: Espera hasta que el puerto serie de hardware esté listo para la comunicación.
  - `pinMode(enable_pin, OUTPUT)`: Configura el enable_pin como un pin de salida para controlar el módulo RS485.
  - `digitalWrite(enable_pin, LOW)`: Establece el enable_pin en bajo, configurando el módulo RS485 para modo de recepción.

- `loop()`:
  - `if (mySerial.available())`: Verifica si hay algún dato disponible para leer desde el puerto serie de hardware.
  - `String receivedData = mySerial.readStringUntil('\n');`: Lee cadenas basadas en nuevas líneas
  - `Serial.print("Received data: ");`: Imprime un mensaje al puerto serie de hardware indicando que se han recibido datos.
  - `Serial.println(receivedData);`: Imprime los datos enviados al receptor RS485.

## Resultado de Transmisión RS485

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/rs485_result.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[SCH]** [Esquemático de la Placa de Expansión RS485 de Seeed Studio XIAO](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)
- **[PDF]** [Esquemático de la Placa de Expansión RS485 de Seeed Studio XIAO](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
