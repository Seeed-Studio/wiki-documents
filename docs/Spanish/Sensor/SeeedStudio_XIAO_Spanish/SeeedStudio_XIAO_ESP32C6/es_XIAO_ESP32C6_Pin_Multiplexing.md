---
description: Pin multiplexing with Seeed Studio XIAO ESP32C6.
title: Multiplexación de pines con Seeed Studio XIAO ESP32C6
keywords:
  - esp32c6
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg
slug: /es/xiao_pin_multiplexing_esp33c6
sidebar_position: 2
last_update:
  date: 02/08/2025
  author: Guillermo
---

# Programando XIAO ESP32C6 de Seeed Studio con Arduino

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
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

El Seeed Studio XIAO ESP32C6 está alimentado por el altamente integrado **ESP32-C6 SoC** (System on Chip), que se basa en **dos procesadores RISC-V de 32 bits**, con un procesador de alto rendimiento (HP) que puede **funcionar hasta 160 MHz**, y un procesador de bajo consumo (LP) de 32 bits, que se puede configurar hasta 20 MHz. El chip cuenta con **512KB de SRAM y 4 MB de Flash**, lo que permite más espacio para la programación y abre más posibilidades para los escenarios de control IoT.

## Empezando

### Visión general del pinout

Antes de comenzar, revisemos todos los pines que tiene el XIAO ESP32C6 y sus funciones con el siguiente esquema.

<table align="center">
	<tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 diagrama de indicación</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32C6/XIAO ESP32C6 Lista de Pines Sense</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


- 5V - Esta es la salida de 5V desde el puerto USB. También puedes usarla como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, de señal, de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo hacia la batería y el cátodo hacia el pin de 5V.
- 3V3 - Esta es la salida regulada del regulador a bordo. Puedes extraer hasta 700mA.
- GND - Tierra de alimentación/datos/señal <!-- Necesita confirmación -->

## Comunicación Serial

Hay dos métodos para la comunicación serial con el XIAO ESP32C6: `serial por software` y `serial por hardware`. El serial por software se usa comúnmente por su flexibilidad, mientras que el serial por hardware ofrece un mejor rendimiento.

### Configuración del Hardware

1. Conecta el **pin TX** del dispositivo externo al pin RX (`D7`) del XIAO ESP32C6.
2. Conecta el **pin RX** del dispositivo externo al pin TX (`D6`) del XIAO ESP32C6.

### Ejemplos de Código

#### Serial por Software

Para usar el serial por software, instala la biblioteca [EspSoftwareSerial](https://github.com/plerup/espsoftwareserial).

:::tip
Actualmente recomendamos la versión **7.0.0** de la biblioteca EspSoftwareSerial. Otras versiones pueden tener diferentes grados de problemas que impiden que el puerto serial por software funcione correctamente.
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

Este ejemplo configura el serial por software en los pines `D7 (RX)` y `D6 (TX)` a 9600 baudios. Monitorea tanto el puerto serial por hardware (USB) como el serial por software, haciendo un eco de los datos recibidos entre ellos.

#### Serial por Hardware

El XIAO ESP32C6 cuenta con un UART de hardware (UART0) para la comunicación serial, correspondiente a los pines D7/D6.

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

Este ejemplo utiliza el UART0 de hardware (Serial0) para la comunicación. Inicializa tanto el puerto serial USB como el UART0, y luego monitorea ambos puertos para detectar datos entrantes, imprimiendo los mensajes recibidos en el puerto serial USB.

#### Uso de Serial1

De acuerdo con los diagramas de pines del XIAO ESP32C6 para parámetros específicos, podemos observar que existen pines TX y RX. Esto es diferente de la comunicación serial, pero el uso es bastante similar, excepto que es necesario añadir algunos parámetros. A continuación, usaremos los pines proporcionados por el chip para la comunicación serial.

Función principal que debe ser incluida:

- `Serial1.begin(BAUD, SERIAL_8N1, RX_PIN, TX_PIN);` — habilita Serial1, el prototipo de la función es: `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`: tasa de baudios
  - `config`: bits de configuración
  - `rxPin`: Pin de recepción
  - `txPin`: Pin de envío

Es importante señalar que si usamos un puerto de pin digital para definir, este lugar debe ser `#define RX_PIN D7` y `#define TX_PIN D6`. Consulta los diagramas de pines de las diferentes series XIAO para obtener parámetros específicos.

Aquí hay un código de ejemplo:

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

Después de cargar el programa, abre el Monitor Serial en el IDE de Arduino y configura la tasa de baudios a 115200. Luego, podrás enviar el contenido que desees al XIAO ESP32C6 a través del monitor serial, y el XIAO imprimirá cada byte del contenido que envíes. En este caso, el contenido que ingresé es "Hello Everyone", y el gráfico de resultados es el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

## Entrada/Salida Digital

El XIAO ESP32C6 tiene 12 pines GPIO que puedes configurar como entrada o salida.

### Preparación del Hardware

1. Conecta un botón al pin `D1`:
   - Usa una resistencia pull-up externa (opcional si utilizas la resistencia pull-up interna).
2. Conecta un LED al pin `D10`:
   - Incluye una resistencia limitadora de corriente en serie con el LED.

### Implementación de Software

La API de GPIO proporciona funciones para configurar e interactuar con los pines GPIO. Consulta la documentación de la [API de GPIO](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html) para más detalles.

```cpp
const int buttonPin = D1; // Pin del botón
const int ledPin = D10; // Pin del LED

void setup() {
  pinMode(ledPin, OUTPUT); // Configurar el pin del LED como salida
  pinMode(buttonPin, INPUT); // Configurar el pin del botón como entrada
  // Si no usas una resistencia pull-up externa
  pinMode(buttonPin, INPUT_PULLUP); // Habilitar la resistencia pull-up interna
}

void loop() {
  int buttonState = digitalRead(buttonPin); // Leer el estado del botón
  digitalWrite(ledPin, buttonState); // Escribir el estado del botón en el LED
}
```

#### Método de interrupción

También puede usar interrupciones para manejar el botón de manera más eficiente.

```cpp
// Definir los números de pin para el botón y el LED
const int buttonPin = D1;
const int ledPin = D10;

// Definir una estructura para contener los datos relacionados con el botón
struct Button {
    const uint8_t PIN; // Número de pin para el botón
    uint32_t numberKeyPresses; // Contador de las veces que se presiona el botón
    bool pressed; // Bandera para indicar si el botón está presionado
};

// Crear una instancia de la estructura Button para el botón
Button my_button = {buttonPin, 0, false};

// Rutina de servicio de interrupción (ISR) para manejar las presiones del botón
void ARDUINO_ISR_ATTR isr(void* arg) {
    Button* s = static_cast<Button*>(arg); // Convertir el argumento en un puntero a Button
    s->numberKeyPresses += 1; // Incrementar el número de presiones del botón
    s->pressed = true; // Establecer la bandera de presionado
}

void setup() {
    Serial.begin(115200);
    pinMode(my_button.PIN, INPUT_PULLUP); // Configurar el pin del botón como entrada con resistencia pull-up interna
    attachInterruptArg(my_button.PIN, isr, &my_button, FALLING); // Adjuntar la ISR al pin del botón, activada en el flanco de bajada
}

void loop() {
    if (my_button.pressed) { // Verificar si el botón está presionado
        Serial.printf("El botón ha sido presionado %lu veces\n", my_button.numberKeyPresses); // Imprimir el número de presiones del botón
        my_button.pressed = false; // Resetear la bandera de presionado
    }

    static uint32_t lastMillis = 0; // Variable para almacenar el último tiempo en que se desactivó la interrupción
    if (millis() - lastMillis > 10000) { // Verificar si han pasado 10 segundos
        lastMillis = millis(); // Actualizar el último tiempo de desactivación
        detachInterrupt(my_button.PIN); // Desactivar la interrupción del pin del botón
    }
}
```

En este ejemplo, usamos una estructura `Button` para almacenar los datos relacionados con el botón, incluyendo el número de pin, la cantidad de pulsaciones del botón y una bandera para indicar si el botón está actualmente presionado.

La función `isr` es una Rutina de Servicio de Interrupción (ISR) que maneja las pulsaciones del botón. Incrementa el número de pulsaciones del botón y establece la bandera de presionado como verdadera.

En la función `setup`, inicializamos la comunicación serial, configuramos el pin del botón como una entrada con una resistencia pull-up interna y adjuntamos la función `isr` al pin del botón como un manejador de interrupciones activado por un flanco descendente (presión del botón).

En la función `loop`, verificamos si el botón está presionado. Si lo está, imprimimos el número de pulsaciones del botón en el monitor serial y reiniciamos la bandera de presionado. Además, incluimos una sección que desactiva la interrupción del pin del botón cada 10 segundos, presumiblemente para permitir otras operaciones o para evitar interrupciones no deseadas.

### ADC - Convertidor Analógico a Digital

El XIAO ESP32C6 tiene varios pines de entrada analógica que permiten leer voltajes analógicos.

Consulta la documentación de la [API ADC](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/adc.html) para más detalles.

### Configuración de Hardware

1. Conecta un potenciómetro al pin A0, con un extremo conectado a 3.3V y el otro a GND.

### Implementación de Software

Aquí tienes un boceto de Arduino que lee un valor analógico:

```cpp
const int analogPin = A0; 

void setup() {
  // Inicializar la comunicación en serie a 115200 bits por segundo
  Serial.begin(115200);
  
  // Establecer la resolución en 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Lea el valor analógico y los milivoltios para el analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);
  
  // Imprimir los valores en el monitor serial
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  
  delay(100); // Retraso para una lectura clara
}
```

Este código lee el valor analógico del pin especificado e imprime el valor junto con el valor en milivoltios en el Monitor Serial.

## Señal PWM / Control de LED

El XIAO ESP32-C6 tiene 6 canales LEDC que pueden generar formas de onda independientes, que pueden ser usadas, por ejemplo, para controlar dispositivos LED RGB.

Consulta la documentación de la [API LEDC](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ledc.html) para más detalles.

### Configuración de Hardware

1. Conecta un LED al pin `D2` con una resistencia limitadora de corriente en serie.

### Implementación de Software

Aquí tienes ejemplos de Arduino que demuestran la salida PWM:

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
 Desvanecimiento por Software con LEDC

 Este ejemplo muestra cómo hacer un desvanecimiento de un LED por software
 utilizando la función ledcWrite.

 Código adaptado del ejemplo original de Arduino Fade:
 https://www.arduino.cc/en/Tutorial/Fade

 Este código de ejemplo es de dominio público.
 */

// Usar precisión de 12 bits para el temporizador LEDC
#define LEDC_TIMER_12_BIT  12

// Usar 5000 Hz como la frecuencia base del LEDC
#define LEDC_BASE_FREQ     5000

// Pin del LED para el desvanecimiento (reemplazar con la constante LED_BUILTIN para el LED incorporado)
#define LED_PIN            D5

int brightness = 0;    // Qué tan brillante está el LED
int fadeAmount = 5;    // Cuántos puntos se desvanecerá el LED

// Función similar a analogWrite de Arduino
// El valor debe estar entre 0 y valueMax
void ledcAnalogWrite(uint8_t pin, uint32_t value, uint32_t valueMax = 255) {
  // Calcular el ciclo de trabajo, 4095 de 2 ^ 12 - 1
  uint32_t duty = (4095 / valueMax) * min(value, valueMax);

  // Escribir el ciclo de trabajo en el LEDC
  ledcWrite(pin, duty);
}

void setup() {
  // Configurar el temporizador y asignar el temporizador al pin del LED
  ledcAttach(LED_PIN, LEDC_BASE_FREQ, LEDC_TIMER_12_BIT);
}

void loop() {
  // Ajustar el brillo en el canal LEDC
  ledcAnalogWrite(LED_PIN, brightness);

  // Cambiar el brillo para la siguiente iteración del ciclo
  brightness = brightness + fadeAmount;

  // Invertir la dirección del desvanecimiento en los extremos del desvanecimiento
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  // Esperar 30 milisegundos para ver el efecto de atenuación
  delay(30);
}
```

Este código demuestra cómo hacer un desvanecimiento de un LED utilizando la función ledcWrite. El brillo del LED aumenta y disminuye gradualmente en un ciclo continuo.

## I2C

El XIAO ESP32C6 tiene una interfaz de hardware I2C para comunicarse con dispositivos I2C.

Consulta la documentación de la [API I2C](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/i2c.html) para más detalles.

### Preparación del hardware

1. Conecta el pin SDA del dispositivo I2C al pin SDA (`D4`) del XIAO.
2. Conecta el pin SCL del dispositivo I2C al pin SCL (`D5`) del XIAO.

### Implementación de software

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
  Wire.write(0x01);  // Registrar dirección
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

#### Modo Receptor

Aquí tienes un sketch de Arduino que demuestra cómo usar el XIAO ESP32C6 como un dispositivo *receptor* I2C:

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
  // Receptor device code here
}
```

En este ejemplo de modo receptor, el XIAO ESP32C6 se configura como un dispositivo I2C con la dirección `0x55`. La función de retorno de llamada `onReceive` se ejecuta cuando el receptor recibe datos del maestro, y la función de retorno de llamada `onRequest` se ejecuta cuando el maestro solicita datos del receptor.

## SPI

La placa del microcontrolador XIAO ESP32C6 cuenta con una interfaz SPI integrada, lo que facilita el intercambio rápido de datos con otros dispositivos compatibles con SPI. Esto es particularmente útil en proyectos que requieren una comunicación rápida entre múltiples dispositivos.

- Para especificaciones técnicas detalladas, consulta el [Datasheet del XIAO ESP32C6](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf).
- Aprende más sobre cómo usar la interfaz SPI con el XIAO ESP32C6 consultando la [Documentación de la API SPI](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/spi.html#).

### Hardware Preparation

### Preparación del hardware

Para conectar tu XIAO ESP32C6 a otro dispositivo SPI, sigue estos pasos:

1. **MOSI (Master Out Slave In):** Conecta el pin `MOSI` del dispositivo SPI al pin `D10` del XIAO.
2. **MISO (Master In Slave Out):** Conecta el pin `MISO` del dispositivo SPI al pin `D9` del XIAO.
3. **SCK (Serial Clock):** Conecta el pin `SCK` del dispositivo SPI al pin `D8` del XIAO.
4. **CS (Chip Select):** Conecta el pin `CS` del dispositivo SPI a un pin digital (por ejemplo, `D3`) del XIAO.

```
MOSI -> D10
MISO -> D9
SCK -> D8
CS -> D3 (como ejemplo)
```

### Implementación de software

A continuación, se muestra un sketch de Arduino simplificado que demuestra la comunicación básica SPI con un dispositivo SPI utilizando el XIAO ESP32C6. Este sketch envía un comando al dispositivo SPI y lee la respuesta (lee los datos de un dispositivo SPI).

```cpp
#include <SPI.h>

const int csPin = 3;  // Usa el pin D3 para la selección de chip (CS)

void setup() {
  // Inicializa la comunicación SPI
  SPI.begin();            
  // Configura el pin CS como salida
  pinMode(csPin, OUTPUT); 
  // Configura el pin CS en alto para indicar que no hay comunicación activa
  digitalWrite(csPin, HIGH);
}

void loop() {
  // Inicia la comunicación con el dispositivo
  digitalWrite(csPin, LOW);
  SPI.transfer(0x01);  // Envía un comando al dispositivo
  int data = SPI.transfer(0);  // Lee la respuesta
  digitalWrite(csPin, HIGH);  // Finaliza la comunicación

  // Imprime los datos recibidos
  Serial.println(data);       
  delay(100);  // Espera un breve periodo
}
```
:::note
Asegúrate de que las asignaciones de los pines en tu sketch coincidan con las conexiones físicas en tu configuración de hardware. El ejemplo anterior utiliza números de pines predefinidos basados en el archivo `pin_arduino.h` para el XIAO ESP32-C6, con una definición adicional para el pin CS.
:::

## Recursos

- [Documentación del XIAO ESP32C6](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)
- [Hoja de datos del ESP32-C6](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
- [Referencia de Arduino](https://www.arduino.cc/reference/en/)
- [Referencia de Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/index.html)
