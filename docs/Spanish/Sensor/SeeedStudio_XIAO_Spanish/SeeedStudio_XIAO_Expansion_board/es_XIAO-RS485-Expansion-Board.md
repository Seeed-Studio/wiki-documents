---
description: Esta guía te ayudará a configurar rápidamente la placa de expansión RS485 de Seeed Studio para XIAO y comenzar con la comunicación RS485.
title: Placa de Expansión RS485 para XIAO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /es/XIAO-RS485-Expansion-Board
last_update:
  date: 02/16/2025
  author: Guillermo
---


# Comenzando con la Placa de Expansión Seeed Studio XIAO-RS485

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

## Visión General del Hardware

### Material preparado

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO RS485-Expansion-Board</th>
			<th>Seeed Studio XIAO ESP32-C3</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


### Pinout Diagram

<div class="table-center">
  <table align="center">
    <tr>
        <th>Diagrama de Indicación: XIAO RS485 Expansion</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/pinlist.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- **Interruptor 5V OUT/IN**: Uno de los puertos 5V es de entrada y salida. Cuando el dispositivo esclavo configura el archivo **IN**, funciona como entrada; cuando el dispositivo principal configura el archivo **OUT**, este puerto descarga externamente, y se puede conectar al suministro de energía de un sensor.

- **Interruptor 120R**: El interruptor de 120R se utiliza para determinar si la resistencia de 120 ohmios está conectada o no. En una instalación de cables largos, se debe agregar una resistencia de 120 ohmios al inicio y al final para hacer el emparejamiento y asegurar la comunicación.

- **INT**: Puerto de interrupción reservado.

:::tip
Cuando se utiliza en modo de entrada, es necesario girar el interruptor a IN, y si se utiliza en modo de salida, se debe girar el interruptor a OUT para evitar daños.
:::

### Esquema de conexión
<div class="table-center">
  <table align="center">
    <tr>
        <th>Conexión de dos placas de expansión RS485</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/connect1.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## Visión General del Software

### Código del Emisor

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); 


#define enable_pin D2 // Define el pin de habilitación como D2

void setup() {
  Serial.begin(115200); // Inicializa el serial de hardware con una velocidad de 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)

  
  // Espera a que el serial de hardware esté listo
  while(!mySerial);
  // Espera a que el serial de hardware esté listo
  while(!Serial);

  pinMode(enable_pin, OUTPUT); // Establece el pin de habilitación como salida
  digitalWrite(enable_pin, HIGH); // Establece el pin de habilitación en alto
}

void loop() {
  if (Serial.available()) {
    String receivedData = Serial.readStringUntil('\n'); // Lee los datos del serial de hardware hasta un carácter de salto de línea

    // Si los datos recibidos no están vacíos
    if (receivedData.length() > 0) {
        Serial.println("Enviado con éxito"); // Imprime un mensaje de éxito
        mySerial.print("La información enviada por el maestro es: "); // Envía un mensaje de aviso al serial de hardware
        mySerial.println(receivedData); // Envía los datos recibidos al serial de hardware
    }
  }
}

```
- **HardwareSerial Library:** Permite la creación de puertos seriales adicionales en el ESP32, típicamente usados para la comunicación con dispositivos (como sensores o módulos).
- `HardwareSerial mySerial(1);`: Define un objeto HardwareSerial llamado `mySerial`, usando D5 y D4 como los pines de recepción y transmisión.
- `#define enable_pin D2`: Define un pin de habilitación utilizado para controlar el estado de envío y recepción del módulo RS485.

- `setup()`:
  - `Serial.begin(115200);`: Inicializa el puerto serial con una velocidad de baudios de 115200.
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`: RX=D4(GPIO4), TX=D5(GPIO5).
  - `while(!mySerial);`: Espera hasta que el puerto serial esté listo para la comunicación.
  - `while(!Serial);`: Espera hasta que el puerto serial esté listo para la comunicación.
  - `pinMode(enable_pin, OUTPUT);`: Configura el pin de habilitación como un pin de salida para controlar el módulo RS485.
  - `digitalWrite(enable_pin, HIGH);`: Establece el pin de habilitación en HIGH, configurando el módulo RS485 para el modo de envío.

- `loop()`:
  - `if (receivedData.length() > 0)`: Verifica si hay datos disponibles para leer desde el puerto serial.
  - `String receivedData = Serial.readStringUntil('\n');`: Lee los datos desde el puerto serial hasta un carácter de salto de línea.
  - `Serial.println("Envío exitoso");`: Imprime un mensaje de éxito.
  - `mySerial.print("La información enviada por el maestro es: ");`: Envía un mensaje de solicitud al puerto serial.
  - `mySerial.println(receivedData);`: Envía los datos necesarios al módulo de expansión RS485.

### Código del Receptor

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); // Usa UART2
#define enable_pin D2 // Define el pin de habilitación como D2

void setup() {
  Serial.begin(115200); // Inicializa el serial de hardware con una velocidad de 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)
  
  // Espera a que el serial de hardware esté listo
  while(!Serial);
  // Espera a que el serial de hardware esté listo
  while(!mySerial);
  
  pinMode(enable_pin, OUTPUT); // Establece el pin de habilitación como salida
  digitalWrite(enable_pin, LOW); // Establece el pin de habilitación en bajo
}

void loop() {
  // Verifica si hay datos disponibles desde el serial de hardware
  if (mySerial.available()) {
      String receivedData = mySerial.readStringUntil('\n'); // Lee cadenas basadas en saltos de línea
      Serial.print("Datos recibidos: ");
      Serial.println(receivedData); // Imprime directamente los datos recibidos
  }
}

```

- **HardwareSerial Library:** Permite la creación de puertos seriales adicionales en el ESP32, utilizados típicamente para la comunicación con dispositivos (como sensores o módulos).
- `HardwareSerial mySerial(1);`: Define un objeto `HardwareSerial` llamado `mySerial`, utilizando D5 como RX y D4 como TX.
- `#define enable_pin D2`: Define un pin de habilitación utilizado para controlar el estado de envío y recepción del módulo RS485.

- `setup()`:
  - `Serial.begin(115200);`: Inicializa el puerto serial con una velocidad de baudios de 115200.
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`: RX=D4(GPIO4), TX=D5(GPIO5).
  - `while(!Serial);`: Espera hasta que el puerto serial esté listo para la comunicación.
  - `while(!mySerial);`: Espera hasta que el puerto serial esté listo para la comunicación.
  - `pinMode(enable_pin, OUTPUT);`: Configura el pin de habilitación como un pin de salida para controlar el módulo RS485.
  - `digitalWrite(enable_pin, LOW);`: Establece el pin de habilitación en LOW, configurando el módulo RS485 para el modo de recepción.

- `loop()`:
  - `if (mySerial.available())`: Verifica si hay datos disponibles para leer desde el puerto serial.
  - `String receivedData = mySerial.readStringUntil('\n');`: Lee cadenas basadas en saltos de línea.
  - `Serial.print("Datos recibidos: ");`: Imprime un mensaje en el puerto serial indicando que los datos han sido recibidos.
  - `Serial.println(receivedData);`: Imprime los datos enviados al receptor RS485.

### Resultado de la Transmisión RS485

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/rs485_result.png" style={{width:1000, height:'auto'}}/></div>


## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>