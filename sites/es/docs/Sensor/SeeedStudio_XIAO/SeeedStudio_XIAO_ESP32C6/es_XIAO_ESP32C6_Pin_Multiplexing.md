---
description: Multiplexación de pines con Seeed Studio XIAO ESP32C6.
title: Multiplexación de Pines con Seeed Studio XIAO ESP32C6
keywords:
  - esp32c6
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg
slug: /es/xiao_pin_multiplexing_esp32c6
sidebar_position: 2
last_update:
  date: 04/10/2024
  author: Spencer
---

# Programación Arduino con Seeed Studio XIAO ESP32C6

<div class="table-center">
	<table>
		<tr>
			<th>Seeed Studio XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

El Seeed Studio XIAO ESP32C6 está alimentado por el [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6) altamente integrado, construido sobre **dos procesadores RISC-V de 32 bits**, con un procesador de alto rendimiento (HP) que **funciona hasta 160 MHz**, y un procesador RISC-V de 32 bits de bajo consumo (LP), que puede funcionar hasta 20 MHz. Hay **512KB de SRAM y 4 MB de Flash en el chip**, permitiendo más espacio de programación y aportando más posibilidades a los escenarios de control IoT.

## Primeros Pasos

### Descripción General de Pines

Antes de comenzar, revisemos todos los pines que tiene el XIAO ESP32C6 y sus funciones con el siguiente esquema.

<table align="center">
	<tr>
	    <th>Diagrama de indicación XIAO ESP32C6/XIAO ESP32C6</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Lista de Pines XIAO ESP32C6/XIAO ESP32C6 Sense</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

- 5V - Esta es la salida de 5v del puerto USB. También puedes usar esto como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, señal, potencia) entre tu fuente de alimentación externa y este pin con ánodo a la batería, cátodo al pin 5V.
- 3V3 - Esta es la salida regulada del regulador integrado. Puedes extraer 700mA
- GND - Tierra de alimentación/datos/señal <!-- Need to be confirmed -->

## Comunicación Serie

Hay dos métodos para la comunicación serie con el XIAO ESP32C6: `serie por software` y `serie por hardware`. La serie por software se usa comúnmente por flexibilidad, mientras que la serie por hardware ofrece mejor rendimiento.

### Configuración de Hardware

1. Conecta el **pin TX** del dispositivo externo al pin RX (`D7`) del XIAO ESP32C6.
2. Conecta el **pin RX** del dispositivo externo al pin TX (`D6`) del XIAO ESP32C6.

### Ejemplos de Código

#### Serie por Software

Para usar serie por software, instala la librería [EspSoftwareSerial](https://github.com/plerup/espsoftwareserial).

:::tip
Actualmente recomendamos la versión **7.0.0** de la librería EspSoftwareSerial. Otras versiones pueden tener diversos grados de problemas que impiden que el puerto serie suave funcione correctamente.
:::

```cpp
#include <SoftwareSerial.h>

SoftwareSerial mySerial(D7, D6); // RX, TX

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() {
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received via software serial: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

Este ejemplo configura el puerto serie por software en los pines `D7 (RX)` y `D6 (TX)` a 9600 baudios. Monitorea tanto el puerto serie por hardware (USB) como el puerto serie por software, haciendo eco de los datos recibidos entre ellos.

#### Puerto Serie por Hardware

El XIAO ESP32C6 cuenta con una UART por hardware (UART0) para comunicación serie, correspondiente a los pines D7/D6.

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(0); // UART0 (Serial0)

void setup() {
  Serial.begin(9600);  // USB serial
  mySerial.begin(9600); // UART0
}

void loop() {
  if (Serial.available()) {
    char data = Serial.read();
    Serial.print("Received on USB: ");
    Serial.println(data);
  }
  
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received on UART0: ");
    Serial.println(data);
  }
}
```

Este ejemplo utiliza el UART0 de hardware (Serial0) para la comunicación. Inicializa tanto el puerto serie USB como UART0, luego monitorea ambos puertos para datos entrantes, imprimiendo los mensajes recibidos al puerto serie USB.

#### Uso de Serial1

Según los diagramas de pines de XIAO ESP32C6 anteriores para parámetros específicos, podemos observar que hay un pin TX y un pin RX.
Esto es diferente de la comunicación serie, pero el uso también es muy similar, excepto que se necesitan agregar algunos parámetros.
Así que a continuación, usaremos los pines extraídos por el chip para la comunicación serie.

Función principal que necesita ser incluida:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- habilita Serial1, el prototipo de función: `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`: velocidad de baudios
  - `config`: bit de configuración
  - `rxPin`: pin de recepción
  - `txPin`: pin de envío

Vale la pena señalar que si usamos puerto de pin digital para definir, este lugar debería ser `#define RX_PIN D7`、`#define TX_PIN D6`, por favor consulte los diagramas de pines de las diferentes series XIAO para parámetros específicos.

Aquí hay un programa de ejemplo:

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

Después de cargar el programa, abre el Monitor Serie en Arduino IDE y establece la velocidad de baudios a 115200. Luego, puedes enviar el contenido que desees en el XIAO ESP32C6 a través del monitor serie Serial, y XIAO imprimirá cada byte del contenido que envíes. Aquí, el contenido que ingresé es "Hello Everyone", mi gráfico de resultados es el siguiente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

## E/S Digital

El XIAO ESP32C6 tiene 12 pines GPIO que puedes configurar como entrada o salida.

### Preparación del Hardware

1. Conecta un botón al pin `D1`:
   - Usa una resistencia pull-up externa (opcional si usas la resistencia pull-up interna).
2. Conecta un LED al pin `D10`:
   - Incluye una resistencia limitadora de corriente en serie con el LED.

### Implementación del Software

La API de GPIO proporciona funciones para configurar e interactuar con los pines GPIO. Consulta la documentación de la [API de GPIO](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html) para más detalles.

```cpp
const int buttonPin = D1; // Button pin
const int ledPin = D10; // LED pin

void setup() {
  pinMode(ledPin, OUTPUT); // Set LED pin as output
  pinMode(buttonPin, INPUT); // Set button pin as input
  // If not using an external pull-up resistor
  pinMode(buttonPin, INPUT_PULLUP); // Enable internal pull-up resistor
}

void loop() {
  int buttonState = digitalRead(buttonPin); // Read button state
  digitalWrite(ledPin, buttonState); // Write button state to LED
}
```

#### Método de Interrupción

También puedes usar interrupciones para manejar las pulsaciones de botón de manera más eficiente.

```cpp
// Define the pin numbers for the button and LED
const int buttonPin = D1;
const int ledPin = D10;

// Define a structure to hold button-related data
struct Button {
    const uint8_t PIN; // Pin number for the button
    uint32_t numberKeyPresses; // Counter for the number of button presses
    bool pressed; // Flag to indicate if the button is currently pressed
};

// Create an instance of the Button structure for the button
Button my_button = {buttonPin, 0, false};

// Interrupt Service Routine (ISR) to handle button presses
void ARDUINO_ISR_ATTR isr(void* arg) {
    Button* s = static_cast<Button*>(arg); // Cast the argument to a Button pointer
    s->numberKeyPresses += 1; // Increment the number of button presses
    s->pressed = true; // Set the pressed flag
}

void setup() {
    Serial.begin(115200);
    pinMode(my_button.PIN, INPUT_PULLUP); // Set the button pin as input with internal pull-up resistor
    attachInterruptArg(my_button.PIN, isr, &my_button, FALLING); // Attach the ISR to the button pin, triggered on falling edge
}

void loop() {
    if (my_button.pressed) { // Check if the button is pressed
        Serial.printf("Button 1 has been pressed %lu times\n", my_button.numberKeyPresses); // Print the number of button presses
        my_button.pressed = false; // Reset the pressed flag
    }

    static uint32_t lastMillis = 0; // Variable to store the last time the interrupt was detached
    if (millis() - lastMillis > 10000) { // Check if 10 seconds have elapsed
        lastMillis = millis(); // Update the last detach time
        detachInterrupt(my_button.PIN); // Detach the interrupt from the button pin
    }
}
```

En este ejemplo, utilizamos una estructura `Button` para almacenar los datos relacionados con el botón, incluyendo el número de pin, el número de pulsaciones de tecla y una bandera para indicar si el botón está actualmente presionado.

La función `isr` es una Rutina de Servicio de Interrupción (ISR) que maneja las pulsaciones del botón. Incrementa el número de pulsaciones del botón y establece la bandera de presionado en verdadero.

En la función `setup`, inicializamos la comunicación serie, configuramos el pin del botón como una entrada con una resistencia pull-up interna, y adjuntamos la función `isr` al pin del botón como un manejador de interrupción activado en un flanco descendente (pulsación del botón).

En la función `loop`, verificamos si el botón está presionado. Si lo está, imprimimos el número de pulsaciones del botón en el monitor serie y reiniciamos la bandera de presionado. Adicionalmente, incluimos una sección que desacopla la interrupción del pin del botón cada 10 segundos, presumiblemente para permitir otras operaciones o para prevenir interrupciones no deseadas.
De acuerdo, entendido. Aquí está la versión reescrita y más comprensible:

## ADC - Convertidor Analógico a Digital

El XIAO ESP32C6 tiene varios pines de entrada analógica que permiten leer voltajes analógicos.

Consulta la documentación de la [API ADC](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/adc.html) para más detalles.

### Configuración del Hardware

1. Conecta un potenciómetro al pin A0, con un extremo conectado a 3.3V y el otro a GND.

### Implementación del Software

Aquí tienes un sketch de Arduino que lee un valor analógico:

```cpp
const int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);
  
  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);
  
  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  
  delay(100); // Delay for clear reading from serial
}
```

Este código lee el valor analógico del pin especificado y lo imprime, junto con el valor en milivoltios, al Monitor Serie.

## Señal PWM / Control de LED

El XIAO ESP32-C6 tiene 6 canales LEDC que pueden generar formas de onda independientes, que se pueden usar, por ejemplo, para controlar dispositivos LED RGB.

Consulta la documentación de la [API LEDC](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ledc.html) para más detalles.

### Configuración de Hardware

1. Conecta un LED al pin `D2` con una resistencia limitadora de corriente en serie.

### Implementación de Software

Aquí tienes sketches de Arduino que demuestran la salida PWM:

#### PWM General

```cpp
const int ledPin = D2;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  for (int dutyCycle = 0; dutyCycle <= 255; dutyCycle++) {
    analogWrite(ledPin, dutyCycle);
    delay(10);
  }
}
```

Este código aumenta gradualmente el brillo del LED usando PWM.

#### Control de LED

```cpp
/*
 LEDC Software Fade

 This example shows how to software fade an LED
 using the ledcWrite function.

 Code adapted from the original Arduino Fade example:
 https://www.arduino.cc/en/Tutorial/Fade

 This example code is in the public domain.
 */

// Use 12-bit precision for the LEDC timer
#define LEDC_TIMER_12_BIT  12

// Use 5000 Hz as the LEDC base frequency
#define LEDC_BASE_FREQ     5000

// Fade LED PIN (replace with LED_BUILTIN constant for the built-in LED)
#define LED_PIN            D5

int brightness = 0;    // How bright the LED is
int fadeAmount = 5;    // How many points to fade the LED by

// Arduino-like analogWrite
// Value has to be between 0 and valueMax
void ledcAnalogWrite(uint8_t pin, uint32_t value, uint32_t valueMax = 255) {
  // Calculate duty, 4095 from 2 ^ 12 - 1
  uint32_t duty = (4095 / valueMax) * min(value, valueMax);

  // Write duty to LEDC
  ledcWrite(pin, duty);
}

void setup() {
  // Setup timer and attach timer to the LED pin
  ledcAttach(LED_PIN, LEDC_BASE_FREQ, LEDC_TIMER_12_BIT);
}

void loop() {
  // Set the brightness on the LEDC channel
  ledcAnalogWrite(LED_PIN, brightness);

  // Change the brightness for the next loop iteration
  brightness = brightness + fadeAmount;

  // Reverse the direction of the fading at the ends of the fade
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  // Wait for 30 milliseconds to see the dimming effect
  delay(30);
}
```

Este código demuestra cómo desvanecer un LED usando la función ledcWrite. El brillo del LED aumenta y disminuye gradualmente en un bucle continuo.

## I2C

El XIAO ESP32C6 tiene una interfaz I2C por hardware para comunicarse con dispositivos I2C.

Consulta la documentación de la [API I2C](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/i2c.html) para más detalles.

### Preparación del Hardware

1. Conecta el pin SDA del dispositivo I2C al pin SDA (`D4`) del XIAO.
2. Conecta el pin SCL del dispositivo I2C al pin SCL (`D5`) del XIAO.

### Implementación del Software

#### Modo Maestro

Aquí tienes un sketch de Arduino que demuestra cómo leer desde un sensor I2C:

```cpp
#include <Wire.h>

const int sensorAddress = 0x40;

void setup() {
  Wire.begin();
  Serial.begin(115200);
}

void loop() {
  Wire.beginTransmission(sensorAddress);
  Wire.write(0x01);  // Register address
  Wire.endTransmission();

  Wire.requestFrom(sensorAddress, 2);
  if (Wire.available() >= 2) {
    int data = Wire.read() << 8 | Wire.read();
    Serial.println(data);
  }

  delay(100);
}
```

Este código lee un valor de 16 bits del registro `0x01` de un sensor I2C.

#### Modo Esclavo

Aquí tienes un sketch de Arduino que demuestra el uso del XIAO ESP32C6 como *dispositivo esclavo* I2C:

```cpp
#include "Wire.h"

#define I2C_DEV_ADDR 0x55

uint32_t i = 0;

void onRequest() {
  Wire.print(i++);
  Wire.print(" Packets.");
  Serial.println("onRequest");
}

void onReceive(int len) {
  Serial.printf("onReceive[%d]: ", len);
  while (Wire.available()) {
    Serial.write(Wire.read());
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Wire.onReceive(onReceive);
  Wire.onRequest(onRequest);
  Wire.begin((uint8_t)I2C_DEV_ADDR);

#if CONFIG_IDF_TARGET_ESP32
  char message[64];
  snprintf(message, 64, "%lu Packets.", i++);
  Wire.slaveWrite((uint8_t *)message, strlen(message));
#endif
}

void loop() {
  // Slave device code here
}
```

En este ejemplo de modo esclavo, el XIAO ESP32C6 está configurado como un dispositivo esclavo I2C con dirección `0x55`. La función de callback `onReceive` se llama cuando el esclavo recibe datos del maestro, y la función de callback `onRequest` se llama cuando el maestro solicita datos del esclavo.

## SPI

La placa microcontroladora XIAO ESP32C6 cuenta con una interfaz SPI integrada, facilitando el intercambio rápido de datos con otros dispositivos compatibles con SPI. Esto es particularmente útil en proyectos que requieren comunicación rápida entre múltiples dispositivos.

- Para especificaciones técnicas detalladas, consulte la [Hoja de datos del XIAO ESP32C6](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf).
- Aprenda más sobre cómo usar la interfaz SPI con el XIAO ESP32C6 consultando la [Documentación de la API SPI](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/spi.html#).

### Preparación del Hardware

Para conectar su XIAO ESP32C6 a otro dispositivo SPI, siga estos pasos:

1. **MOSI (Master Out Slave In):** Conecte el pin `MOSI` del dispositivo SPI al pin `D10` en el XIAO.
2. **MISO (Master In Slave Out):** Conecte el pin `MISO` del dispositivo SPI al pin `D9` en el XIAO.
3. **SCK (Serial Clock):** Conecte el pin `SCK` del dispositivo SPI al pin `D8` en el XIAO.
4. **CS (Chip Select):** Conecte el pin `CS` del dispositivo SPI a un pin digital (por ejemplo, `D3`) en el XIAO.

```
MOSI -> D10
MISO -> D9
SCK -> D8
CS -> D3 (as an example)
```

### Implementación de Software

A continuación se muestra un sketch de Arduino simplificado que demuestra la comunicación básica SPI con un dispositivo SPI usando el XIAO ESP32C6. Este sketch envía un comando al dispositivo SPI y lee la respuesta (lee datos de vuelta desde un dispositivo SPI).

```cpp
#include <SPI.h>

const int csPin = 3;  // Use pin D3 for Chip Select (CS)

void setup() {
  // Initialize SPI communication
  SPI.begin();            
  // Set the CS pin as an output
  pinMode(csPin, OUTPUT); 
  // Set the CS pin high to indicate no active communication
  digitalWrite(csPin, HIGH);
}

void loop() {
  // Start communication with the device
  digitalWrite(csPin, LOW);
  SPI.transfer(0x01);  // Send a command to the device
  int data = SPI.transfer(0);  // Read the response
  digitalWrite(csPin, HIGH);  // End communication

  // Print the received data
  Serial.println(data);       
  delay(100);  // Wait for a short period
}
```

:::note
Asegúrate de que las asignaciones de pines en tu sketch coincidan con las conexiones físicas en tu configuración de hardware. El ejemplo anterior utiliza números de pin predefinidos basados en el archivo `pin_arduino.h` para el XIAO ESP32-C6, con una definición adicional para el pin CS.
:::

## Recursos

- [Documentación del XIAO ESP32C6](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/)
- [Hoja de datos del ESP32-C6](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
- [Referencia de Arduino](https://www.arduino.cc/reference/en/)
- [Referencia de Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/index.html)
