---
description: Multiplexación de pines con Seeed Studio XIAO ESP32C6.
title: Multiplexación de pines con Seeed Studio XIAO ESP32C6
keywords:
  - esp32c6
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg
slug: /xiao_pin_multiplexing_esp32c6
sidebar_position: 2
last_update:
  date: 04/10/2024
  author: Spencer
createdAt: '2024-04-11'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/xiao_pin_multiplexing_esp32c6/
---

# Programación con Arduino con Seeed Studio XIAO ESP32C6

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

El Seeed Studio XIAO ESP32C6 está impulsado por el [SoC ESP32-C6](https://www.espressif.com/en/products/socs/esp32-c6) altamente integrado, construido sobre **dos procesadores RISC-V de 32 bits**, con un procesador de alto rendimiento (HP) que **funciona hasta 160 MHz**, y un procesador RISC-V de 32 bits de bajo consumo (LP), que puede funcionar hasta 20 MHz. Hay **512KB de SRAM y 4 MB de Flash en el chip**, lo que permite más espacio de programación y aporta más posibilidades a los escenarios de control de IoT.

## Introducción

### Descripción general del pinout

Antes de comenzar, revisemos todos los pines que tiene el XIAO ESP32C6 y sus funciones con el siguiente esquema.

### Parte frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAO_ESP32-C6_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAO_ESP32-C6_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

- 5V - Esta es la salida de 5 V desde el puerto USB. También puedes usarla como entrada de tensión, pero debes tener algún tipo de diodo (Schottky, de señal, de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo a la batería y el cátodo al pin de 5V.
- 3V3 - Esta es la salida regulada del regulador integrado. Puedes extraer 700 mA
- GND - Tierra de alimentación/datos/señal <!-- Need to be confirmed -->

## Comunicación serie

Hay dos métodos para la comunicación serie con el XIAO ESP32C6: `software serial` y `hardware serial`. `Software serial` se usa comúnmente por su flexibilidad, mientras que `hardware serial` ofrece un mejor rendimiento.

### Configuración de hardware

1. Conecta el **pin TX** del dispositivo externo al pin RX (`D7`) del XIAO ESP32C6.
2. Conecta el **pin RX** del dispositivo externo al pin TX (`D6`) del XIAO ESP32C6.

### Ejemplos de código

#### Software Serial

Para usar `software serial`, instala la biblioteca [EspSoftwareSerial](https://github.com/plerup/espsoftwareserial).

:::tip
Actualmente recomendamos la versión **7.0.0** de la biblioteca EspSoftwareSerial. Otras versiones pueden tener distintos grados de problemas que impidan que el puerto serie por software funcione correctamente.
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

Este ejemplo configura `software serial` en los pines `D7 (RX)` y `D6 (TX)` a 9600 baudios. Supervisa tanto el puerto serie por hardware (USB) como el puerto serie por software, reenviando los datos recibidos entre ellos.

#### Hardware Serial

El XIAO ESP32C6 incorpora un UART por hardware (UART0) para comunicación serie, correspondiente a los pines D7/D6.

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

Este ejemplo utiliza el UART0 por hardware (`Serial0`) para la comunicación. Inicializa tanto el puerto serie USB como el UART0 y luego supervisa ambos puertos en busca de datos entrantes, imprimiendo los mensajes recibidos en el puerto serie USB.

#### Uso de Serial1

De acuerdo con los diagramas de pines anteriores del XIAO ESP32C6 para parámetros específicos, podemos observar que hay un pin TX y un pin RX.
Esto es diferente de la comunicación serie habitual, pero el uso también es muy similar, excepto que es necesario añadir algunos parámetros.
Así que, a continuación, utilizaremos los pines sacados por el chip para la comunicación serie.

Función principal que debe incluirse:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- habilita `Serial1`, el prototipo de la función es: `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  :velocidad en baudios
  - `config`:bit de configuración
  - `rxPin` :pin de recepción
  - `txPin` :pin de envío

Cabe destacar que si usamos el puerto de pin digital para definir, en este lugar debería ser `#define RX_PIN D7`、`#define TX_PIN D6`, por favor consulta los diagramas de pines de las diferentes XIAO Serie para parámetros específicos.

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

Después de cargar el programa, abre el Monitor Serie en Arduino IDE y ajusta la velocidad en baudios a 115200. Entonces podrás enviar el contenido que quieras al XIAO ESP32C6 a través del monitor serie, y el XIAO imprimirá cada byte del contenido que envíes. Aquí, el contenido que introduje es "Hello Everyone", mi gráfico de resultados es el siguiente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

## E/S digital

El XIAO ESP32C6 tiene 12 pines GPIO que puedes configurar como entrada o salida.

### Preparación de hardware

1. Conecta un botón al pin `D1`:
   - Usa una resistencia de pull-up externa (opcional si utilizas la resistencia de pull-up interna).
2. Conecta un LED al pin `D10`:
   - Incluye una resistencia limitadora de corriente en serie con el LED.

### Implementación por software

La API de GPIO proporciona funciones para configurar e interactuar con los pines GPIO. Consulta la documentación de la [GPIO API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html) para más detalles.

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

#### Método con interrupciones

También puedes usar interrupciones para manejar las pulsaciones del botón de forma más eficiente.

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

En este ejemplo, usamos una estructura `Button` para almacenar los datos relacionados con el botón, incluido el número de pin, el número de pulsaciones y un indicador para señalar si el botón está pulsado en ese momento.

La función `isr` es una rutina de servicio de interrupción (ISR) que gestiona las pulsaciones del botón. Incrementa el número de pulsaciones y establece el indicador de pulsado en verdadero.

En la función `setup`, inicializamos la comunicación serie, configuramos el pin del botón como entrada con una resistencia de pull-up interna y asociamos la función `isr` al pin del botón como manejador de interrupciones activado en un flanco de bajada (pulsación del botón).

En la función `loop`, comprobamos si el botón está pulsado. Si lo está, imprimimos el número de pulsaciones en el monitor serie y restablecemos el indicador de pulsado. Además, incluimos una sección que desasocia la interrupción del pin del botón cada 10 segundos, presumiblemente para permitir otras operaciones o para evitar interrupciones no deseadas.

De acuerdo, entendido. Aquí tienes la versión reescrita y más comprensible:

## ADC - Convertidor Analógico a Digital

El XIAO ESP32C6 tiene varios pines de entrada analógica que permiten leer tensiones analógicas.

Consulta la documentación de la [ADC API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/adc.html) para más detalles.

### Configuración de hardware

1. Conecta un potenciómetro al pin A0, con un extremo conectado a 3.3V y el otro a GND.

### Implementación de software

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

Este código lee el valor analógico del pin especificado y lo imprime, junto con el valor en milivoltios, en el Monitor Serie.

## Señal PWM / Control de LED

La XIAO  ESP32-C6 tiene 6 canales LEDC que pueden generar formas de onda independientes, que pueden utilizarse, por ejemplo, para controlar dispositivos LED RGB.

Consulta la documentación de la [LEDC API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ledc.html) para más detalles.

### Configuración de hardware

1. Conecta un LED al pin `D2` con una resistencia limitadora de corriente en serie.

### Implementación de software

Aquí tienes sketches de Arduino que demuestran la salida PWM:

#### PWM general

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

Este código incrementa gradualmente el brillo del LED usando PWM.

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

Este código muestra cómo hacer un fundido de un LED usando la función ledcWrite. El brillo del LED aumenta y disminuye gradualmente en un bucle continuo.

## I2C

La XIAO ESP32C6 tiene una interfaz I2C por hardware para comunicarse con dispositivos I2C.

Consulta la documentación de la [I2C API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/i2c.html) para más detalles.

### Preparación de hardware

1. Conecta el pin SDA del dispositivo I2C al pin SDA (`D4`) de la XIAO.
2. Conecta el pin SCL del dispositivo I2C al pin SCL (`D5`) de la XIAO.

### Implementación de software

#### Modo maestro

Aquí tienes un sketch de Arduino que muestra cómo leer desde un sensor I2C:

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

#### Modo esclavo

Aquí tienes un sketch de Arduino que muestra cómo usar la XIAO ESP32C6 como un *dispositivo esclavo* I2C:

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

En este ejemplo de modo esclavo, la XIAO ESP32C6 se configura como un dispositivo esclavo I2C con la dirección `0x55`. La función de callback `onReceive` se llama cuando el esclavo recibe datos del maestro, y la función de callback `onRequest` se llama cuando el maestro solicita datos del esclavo.

## SPI

La placa microcontroladora XIAO ESP32C6 incorpora una interfaz SPI, lo que facilita el intercambio rápido de datos con otros dispositivos compatibles con SPI. Esto es especialmente útil en proyectos que requieren una comunicación rápida entre múltiples dispositivos.

- Para especificaciones técnicas detalladas, consulta la [Hoja de datos de la XIAO ESP32C6](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf).
- Obtén más información sobre cómo usar la interfaz SPI con la XIAO ESP32C6 consultando la [Documentación de la SPI API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/spi.html#).

### Preparación de hardware

Para conectar tu XIAO ESP32C6 a otro dispositivo SPI, sigue estos pasos:

1. **MOSI (Master Out Slave In):** Conecta el pin `MOSI` del dispositivo SPI al pin `D10` en la XIAO.
2. **MISO (Master In Slave Out):** Conecta el pin `MISO` del dispositivo SPI al pin `D9` en la XIAO.
3. **SCK (Serial Clock):** Conecta el pin `SCK` del dispositivo SPI al pin `D8` en la XIAO.
4. **CS (Chip Select):** Conecta el pin `CS` del dispositivo SPI a un pin digital (por ejemplo, `D3`) en la XIAO.

```
MOSI -> D10
MISO -> D9
SCK -> D8
CS -> D3 (as an example)
```

### Implementación de software

A continuación se muestra un sketch simplificado de Arduino que demuestra la comunicación SPI básica con un dispositivo SPI usando la XIAO ESP32C6. Este sketch envía un comando al dispositivo SPI y lee la respuesta (lee datos de un dispositivo SPI).

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
Asegúrate de que las asignaciones de pines en tu sketch coincidan con las conexiones físicas en tu configuración de hardware. El ejemplo anterior utiliza números de pin predefinidos basados en el archivo `pin_arduino.h` para la XIAO ESP32-C6, con una definición adicional para el pin CS.
:::

## Recursos

- [Documentación de la XIAO ESP32C6](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/)
- [Hoja de datos del ESP32-C6](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
- [Referencia de Arduino](https://www.arduino.cc/reference/en/)
- [Referencia de Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/index.html)
