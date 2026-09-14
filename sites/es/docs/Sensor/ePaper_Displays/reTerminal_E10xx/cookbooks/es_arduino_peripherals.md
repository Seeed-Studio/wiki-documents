---
description: cookbook de Arduino para reTerminal E1001 / E1002 / E1003 / E1004 - ejemplos de periféricos de hardware integrados, incluyendo LED, zumbador, tres botones de usuario, sensor de temperatura/humedad SHT4x, monitorización de batería, tarjeta microSD y una canalización de imagen de extremo a extremo (JPEG / BMP / PNG → tramado → ePaper) para las cuatro variantes de panel.
title: 'Cookbook de Arduino: Periféricos Integrados (reTerminal E Serie)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_arduino_peripherals
sidebar_position: 2
sidebar_label: Arduino – Periféricos
last_update:
  date: 05/21/2026
  author: Citric
createdAt: '2026-05-15'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cookbook de Arduino: Periféricos Integrados (reTerminal E Serie)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/245.png" style={{width:600, height:'auto'}}/></div>

:::tip Prueba las demos sin configurar un entorno de desarrollo
Si quieres previsualizar rápidamente los resultados del proyecto o probar el firmware de demostración básico antes de configurar un entorno de desarrollo, abre el **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Puedes elegir un dispositivo reTerminal E Serie compatible y flashear el firmware de demostración directamente desde un navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

:::tip Otros cookbooks en esta serie
- **[Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino)** — representación de texto, gráficos e imágenes en la pantalla de ePaper.
- **[Arduino Cookbook: RTC, Low Power, Audio & Touch](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals_2)** — gestión de tiempo con RTC, deep sleep / light sleep, grabación con micrófono I2S y dibujo táctil capacitivo (solo E1003).
:::

## Introducción

La reTerminal E Serie es más que solo una pantalla de ePaper: cada modelo también expone un LED integrado, un zumbador, tres botones de usuario, un sensor de temperatura y humedad SHT4x, monitorización del voltaje de la batería y una ranura para tarjeta microSD. Este cookbook recopila ejemplos listos para flashear en Arduino para cada uno de esos periféricos, además de una canalización de imagen de extremo a extremo que carga un archivo JPEG / BMP / PNG desde la tarjeta SD, lo traba para la paleta del panel y lo representa en la pantalla de ePaper: un sketch ya preparado por variante de panel (E1001 BW, E1001 Gray4, E1002, E1003, E1004).

Lo que cubre este cookbook:

- **Control del LED** en GPIO6 (lógica invertida).
- **Zumbador** para alertas y tonos musicales en GPIO45.
- **Tres botones de usuario** (KEY0 / KEY1 / KEY2) con detección de estado con eliminación de rebotes.
- **Sensor SHT4x** sobre I²C (GPIO19 SDA / GPIO20 SCL) usando la biblioteca de Sensirion.
- **Monitorización del voltaje de la batería** mediante el circuito ADC + pin de habilitación.
- **Tarjeta microSD**: montaje / detección / listado de archivos en el bus SPI compartido.
- **Ejemplo avanzado — canalización de imagen desde tarjeta SD**: elige cualquier JPEG / BMP / PNG en la tarjeta SD, pásalo por uno de los cinco algoritmos de tramado integrados y represéntalo en el panel con ancla, modo de ajuste y escala configurables.

### Materiales necesarios

Este cookbook se aplica a los cuatro modelos de reTerminal E Serie. Elige el dispositivo que tengas a mano:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos previos

Antes de ejecutar cualquier ejemplo de abajo, ya deberías tener:

- El **Arduino IDE** instalado con el **paquete de placas ESP32** y la placa **XIAO_ESP32S3** seleccionada.
- Un **cable de datos USB-C** funcional y el puerto serie correcto seleccionado.
- Verificado que puedes flashear un sketch básico al dispositivo; consulta la preparación del entorno en [Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino#preparación-del-entorno) si aún no lo has hecho.

Todos los sketches de este cookbook imprimen información de depuración a través de `Serial1` en los pines **GPIO44 (RX) / GPIO43 (TX)** a **115200 baudios**. Abre el Monitor Serie de Arduino y selecciona el puerto y la velocidad en baudios correspondientes para seguir la salida.

## Control del LED

La reTerminal E Serie tiene un LED integrado que puede controlarse mediante GPIO. Ten en cuenta que la lógica del LED está invertida (LOW = ON, HIGH = OFF). El pin del LED difiere entre modelos:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Modelo</th>
			<th>GPIO del LED</th>
		</tr>
		<tr>
			<td>E1001 / E1002</td>
			<td>GPIO6</td>
		</tr>
		<tr>
			<td>E1003</td>
			<td>GPIO16</td>
		</tr>
		<tr>
			<td>E1004</td>
			<td>GPIO48</td>
		</tr>
	</table>
</div>

<Tabs>
<TabItem value="e1001_e1002" label="E1001 / E1002" default>

```cpp
// reTerminal E1001/E1002 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 6  // GPIO6 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
<TabItem value="e1003" label="E1003">

```cpp
// reTerminal E1003 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 16  // GPIO16 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
<TabItem value="e1004" label="E1004">

```cpp
// reTerminal E1004 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 48  // GPIO48 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
</Tabs>

## Control del zumbador

La reTerminal E Serie incluye un zumbador en GPIO45 que puede producir varios tonos y sonidos de alerta.

```cpp
// reTerminal E Series - Buzzer Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO45 - Buzzer

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");
}

void loop() {
  Serial1.println("Simple beep");
  tone(BUZZER_PIN, 1000, 100);  // 1kHz for 100ms
  delay(1000);

  Serial1.println("Double beep");
  for (int i = 0; i < 2; i++) {
    tone(BUZZER_PIN, 2000, 50);  // 2kHz for 50ms
    delay(100);
  }
  delay(900);

  Serial1.println("Long beep");
  tone(BUZZER_PIN, 800, 500);  // 800Hz for 500ms
  delay(1500);

  Serial1.println("Alarm sound");
  for (int i = 0; i < 5; i++) {
    tone(BUZZER_PIN, 1500, 100);
    delay(100);
    tone(BUZZER_PIN, 1000, 100);
    delay(100);
  }
  delay(2000);
}
```

**Zumbador con tonos**

<details>
<summary>Haz clic para desplegar el código completo del ejemplo de zumbador</summary>

```cpp
#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO7 - Buzzer

// Reference:  This list was adapted from the table located here:
//    http://www.phy.mtu.edu/~suits/notefreqs.html
#define  NOTE_C0  16.35  //C0
#define  NOTE_Db0 17.32  //C#0/Db0
#define  NOTE_D0  18.35  //D0
#define  NOTE_Eb0 19.45 //D#0/Eb0
#define  NOTE_E0  20.6  //E0
#define  NOTE_F0  21.83  //F0
#define  NOTE_Gb0 23.12  //F#0/Gb0
#define  NOTE_G0  24.5  //G0
#define  NOTE_Ab0 25.96  //G#0/Ab0
#define  NOTE_A0  27.5  //A0
#define  NOTE_Bb0 29.14  //A#0/Bb0
#define  NOTE_B0  30.87  //B0
#define  NOTE_C1  32.7  //C1
#define  NOTE_Db1 34.65  //C#1/Db1
#define  NOTE_D1  36.71  //D1
#define  NOTE_Eb1 38.89  //D#1/Eb1
#define  NOTE_E1  41.2  //E1
#define  NOTE_F1  43.65  //F1
#define  NOTE_Gb1 46.25  //F#1/Gb1
#define  NOTE_G1  49 //G1
#define  NOTE_Ab1 51.91  //G#1/Ab1
#define  NOTE_A1  55  //A1
#define  NOTE_Bb1 58.27  //A#1/Bb1
#define  NOTE_B1  61.74  //B1
#define  NOTE_C2  65.41  //C2 (Middle C)
#define  NOTE_Db2 69.3  //C#2/Db2
#define  NOTE_D2  73.42  //D2
#define  NOTE_Eb2 77.78  //D#2/Eb2
#define  NOTE_E2  82.41  //E2
#define  NOTE_F2  87.31  //F2
#define  NOTE_Gb2 92.5  //F#2/Gb2
#define  NOTE_G2  98  //G2
#define  NOTE_Ab2 103.83  //G#2/Ab2
#define  NOTE_A2  110  //A2
#define  NOTE_Bb2 116.54  //A#2/Bb2
#define  NOTE_B2  123.47  //B2
#define  NOTE_C3  130.81  //C3
#define  NOTE_Db3 138.59  //C#3/Db3
#define  NOTE_D3  146.83  //D3
#define  NOTE_Eb3 155.56  //D#3/Eb3
#define  NOTE_E3  164.81  //E3
#define  NOTE_F3  174.61  //F3
#define  NOTE_Gb3 185  //F#3/Gb3
#define  NOTE_G3  196  //G3
#define  NOTE_Ab3 207.65  //G#3/Ab3
#define  NOTE_A3  220  //A3
#define  NOTE_Bb3 233.08  //A#3/Bb3
#define  NOTE_B3  246.94  //B3
#define  NOTE_C4  261.63  //C4
#define  NOTE_Db4 277.18  //C#4/Db4
#define  NOTE_D4  293.66  //D4
#define  NOTE_Eb4 311.13  //D#4/Eb4
#define  NOTE_E4  329.63  //E4
#define  NOTE_F4  349.23  //F4
#define  NOTE_Gb4 369.99  //F#4/Gb4
#define  NOTE_G4  392  //G4
#define  NOTE_Ab4 415.3  //G#4/Ab4
#define  NOTE_A4  440  //A4
#define  NOTE_Bb4 466.16  //A#4/Bb4
#define  NOTE_B4  493.88  //B4
#define  NOTE_C5  523.25  //C5
#define  NOTE_Db5 554.37  //C#5/Db5
#define  NOTE_D5  587.33  //D5
#define  NOTE_Eb5 622.25  //D#5/Eb5
#define  NOTE_E5  659.26  //E5
#define  NOTE_F5  698.46  //F5
#define  NOTE_Gb5 739.99  //F#5/Gb5
#define  NOTE_G5  783.99  //G5
#define  NOTE_Ab5 830.61  //G#5/Ab5
#define  NOTE_A5  880  //A5
#define  NOTE_Bb5 932.33  //A#5/Bb5
#define  NOTE_B5  987.77  //B5
#define  NOTE_C6  1046.5  //C6
#define  NOTE_Db6 1108.73  //C#6/Db6
#define  NOTE_D6  1174.66  //D6
#define  NOTE_Eb6 1244.51  //D#6/Eb6
#define  NOTE_E6  1318.51  //E6
#define  NOTE_F6  1396.91  //F6
#define  NOTE_Gb6 1479.98  //F#6/Gb6
#define  NOTE_G6  1567.98  //G6
#define  NOTE_Ab6 1661.22  //G#6/Ab6
#define  NOTE_A6  1760  //A6
#define  NOTE_Bb6 1864.66  //A#6/Bb6
#define  NOTE_B6  1975.53  //B6
#define  NOTE_C7  2093  //C7
#define  NOTE_Db7 2217.46  //C#7/Db7
#define  NOTE_D7  2349.32  //D7
#define  NOTE_Eb7 2489.02  //D#7/Eb7
#define  NOTE_E7  2637.02  //E7
#define  NOTE_F7  2793.83  //F7
#define  NOTE_Gb7 2959.96  //F#7/Gb7
#define  NOTE_G7  3135.96  //G7
#define  NOTE_Ab7 3322.44  //G#7/Ab7
#define  NOTE_A7  3520  //A7
#define  NOTE_Bb7 3729.31  //A#7/Bb7
#define  NOTE_B7  3951.07  //B7
#define  NOTE_C8  4186.01  //C8
#define  NOTE_Db8 4434.92  //C#8/Db8
#define  NOTE_D8  4698.64  //D8
#define  NOTE_Eb8 4978.03  //D#8/Eb8

void buzzer_tone (float noteFrequency, long noteDuration, int silentDuration){
  if(silentDuration==0) {silentDuration=1;}

  tone(BUZZER_PIN, noteFrequency, noteDuration);
  delay(noteDuration);     // milliseconds
  noTone(BUZZER_PIN);      // stop the tone

  delay(silentDuration);
}

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");

  // Configure buzzer pin
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  buzzer_tone(NOTE_C5, 80, 20);
  buzzer_tone(NOTE_E5, 80, 20);
  buzzer_tone(NOTE_G5, 80, 20);
  buzzer_tone(NOTE_C6, 150, 0);
  delay(30000);
}
```

</details>

**Funciones del zumbador:**

- `digitalWrite()`: Control simple de ENCENDIDO/APAGADO para pitidos básicos
- `tone(pin, frequency, duration)`: Genera frecuencias específicas para melodías o alertas
- `noTone(pin)`: Detiene la generación de tono

**Patrones de alerta comunes:**

- Pitido único: Confirmación
- Doble pitido: Advertencia
- Triple pitido: Error
- Continuo: Alerta crítica

## Botones de usuario

La reTerminal E Serie incluye tres botones programables por el usuario que se pueden utilizar para varios propósitos de control. Esta sección muestra cómo leer los estados de los botones y responder a las pulsaciones usando Arduino.

La reTerminal E Serie tiene tres botones conectados al ESP32-S3 a través de KEY0 (GPIO3), KEY1 (GPIO4) y KEY2 (GPIO5). Todos los botones son activos en bajo, lo que significa que leen LOW cuando se presionan y HIGH cuando se sueltan.

La disposición física y la función de estos botones difieren entre modelos:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tecla</th>
			<th>E1001 / E1002 / E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><strong>KEY0</strong> (GPIO3)</td>
			<td>Botón derecho (botón verde)</td>
			<td>Botón de dirección derecha (frontal)</td>
		</tr>
		<tr>
			<td><strong>KEY1</strong> (GPIO4)</td>
			<td>Botón central</td>
			<td>Botón de dirección izquierda (frontal)</td>
		</tr>
		<tr>
			<td><strong>KEY2</strong> (GPIO5)</td>
			<td>Botón izquierdo</td>
			<td>Botón de actualización (frontal izquierdo)</td>
		</tr>
	</table>
</div>

:::note
El E1004 tiene botones tanto en la parte frontal como en la trasera del dispositivo. Las conexiones KEY0–KEY2 listadas arriba corresponden a los botones del panel frontal.
:::

### Ejemplo básico de lectura de botones

Este ejemplo muestra cómo detectar pulsaciones de botones e imprimir mensajes en el monitor serie.

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 3;   // KEY0 - GPIO3
const int BUTTON_KEY1 = 4;   // KEY1 - GPIO4
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial1.begin(115200, SERIAL_8N1, 44, 43);
  while (!Serial1) {
    delay(10); // Wait for serial port to connect
  }

  Serial1.println("=================================");
  Serial1.println("reTerminal E Series - Button Test");
  Serial1.println("=================================");
  Serial1.println("Press any button to see output");
  Serial1.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT);
  pinMode(BUTTON_KEY1, INPUT);
  pinMode(BUTTON_KEY2, INPUT);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial1.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY0
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial1.println("KEY0 (GPIO3) pressed!");
    } else {
      Serial1.println("KEY0 (GPIO3) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY1
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial1.println("KEY1 (GPIO4) pressed!");
    } else {
      Serial1.println("KEY1 (GPIO4) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial1.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial1.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

**Cómo funciona el código:**

1. **Definición de pines**: Definimos constantes para el número de pin GPIO de cada botón.

2. **Configuración de pines**: En `setup()`, configuramos cada pin de botón como `INPUT`.

3. **Detección de botones**: En `loop()`, comprobamos continuamente el estado de cada botón usando `digitalRead()`. Cuando se presiona un botón, el pin lee LOW.

4. **Antirrebote**: Un simple retardo de 200 ms después de cada pulsación evita múltiples detecciones de una sola pulsación debido al rebote mecánico.

5. **Salida serie**: Cada pulsación de botón desencadena un mensaje al monitor serie para depuración y verificación.

---

**Paso 1.** Carga el código en tu dispositivo reTerminal E Serie.

**Paso 2.** Abre el Monitor Serie en Arduino IDE (Tools > Serial Monitor).

**Paso 3.** Configura la velocidad en baudios a 115200.

**Paso 4.** Presiona cada botón y observa la salida en el Monitor Serie.

Salida esperada al presionar los botones:

```
=================================
reTerminal E Series - Button Test
=================================
Press any button to see output

KEY0 (GPIO3) pressed!
KEY0 (GPIO3) released!
KEY1 (GPIO4) pressed!
KEY1 (GPIO4) released!
KEY2 (GPIO5) pressed!
KEY2 (GPIO5) released!
```

## Sensor ambiental (SHT4x)

La reTerminal E Serie incluye un sensor integrado de temperatura y humedad SHT4x conectado mediante I2C.

### Instalación de las bibliotecas necesarias

Instala dos bibliotecas mediante el Administrador de Bibliotecas de Arduino (**Tools > Manage Libraries...**):

1. Busca e instala "**Sensirion I2C SHT4x**"
2. Busca e instala "**Sensirion Core**" (dependencia)

### Ejemplo básico de temperatura y humedad

```cpp
// reTerminal E Series - SHT40 Temperature & Humidity Sensor Example

#include <Wire.h>
#include <SensirionI2cSht4x.h>

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// I2C pins for reTerminal E Series
#define I2C_SDA 19
#define I2C_SCL 20

// Create sensor object
SensirionI2cSht4x sht4x;

void setup() {
    // Initialize Serial1 for reTerminal E Series
    Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
    while (!Serial1) {
        delay(10);
    }

    Serial1.println("SHT4x Basic Example");

    // Initialize I2C with custom pins
    Wire.begin(I2C_SDA, I2C_SCL);

    uint16_t error;
    char errorMessage[256];

    // Initialize the sensor
    sht4x.begin(Wire, 0x44);

    // Read and print serial number
    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);

    if (error) {
        Serial1.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Serial Number: ");
        Serial1.println(serialNumber);
        Serial1.println();
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(5000);  // Wait 5 seconds between measurements

    float temperature;
    float humidity;

    // Measure temperature and humidity with high precision
    error = sht4x.measureHighPrecision(temperature, humidity);

    if (error) {
        Serial1.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Temperature: ");
        Serial1.print(temperature);
        Serial1.print("°C\t");
        Serial1.print("Humidity: ");
        Serial1.print(humidity);
        Serial1.println("%");
    }
}
```

**Función setup:**

1. **Inicialización serie**: Usa `Serial1` con los pines 44 (RX) y 43 (TX) específicos de la reTerminal E Serie
2. **Inicialización I2C**: Configura I2C con los pines 19 (SDA) y 20 (SCL)
3. **Inicialización del sensor**: Llama a `sht4x.begin(Wire, 0x44)` para inicializar el sensor SHT4x en la dirección 0x44
4. **Lectura del número de serie**: Lee y muestra el número de serie único del sensor para su verificación

**Función loop:**

1. **Retardo**: Espera 5 segundos entre mediciones para evitar el sobremuestreo
2. **Medición**: Usa `measureHighPrecision()` para lecturas precisas (toma ~8.3 ms)
3. **Gestión de errores**: Comprueba errores y los convierte en mensajes legibles usando `errorToString()`
4. **Mostrar resultados**: Imprime la temperatura en grados Celsius y el porcentaje de humedad relativa

**Salida esperada**

```
SHT4x Basic Example
Serial Number: 331937553

Temperature: 27.39°C Humidity: 53.68%
Temperature: 27.40°C Humidity: 53.51%
Temperature: 27.38°C Humidity: 53.37%
```

## Sistema de gestión de batería

La reTerminal E Serie incluye capacidad de monitorización de voltaje de batería a través de un pin ADC con un circuito divisor de voltaje.

:::note

El BATTERY_ENABLE_PIN en la reTerminal E1003 es diferente al de E1001/E1002/E1004.

- E1001/E1002/E1004: BATTERY_ENABLE_PIN → GPIO21
- E1003: BATTERY_ENABLE_PIN → IO40
Actualiza tu código en consecuencia cuando portes ejemplos entre diferentes modelos reTerminal E10xx.

:::

### Monitorización simple del voltaje de la batería

```cpp
// reTerminal E Series - Simple Battery Voltage Reading

// Serial configuration
#define SERIAL_RX 44
#define SERIAL_TX 43

// Battery monitoring pins
#define BATTERY_ADC_PIN 1      // GPIO1 - Battery voltage ADC
#define BATTERY_ENABLE_PIN 21  // GPIO21 - Battery monitoring enable

void setup() {
  // Initialize serial
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Battery Voltage Monitor");

  // Configure battery monitoring enable pin
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);  // Enable battery monitoring

  // Configure ADC
  analogReadResolution(12);  // 12-bit resolution
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);

  delay(100);  // Allow circuit to stabilize
}

void loop() {
  // Enable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  delay(5);

  // Read voltage in millivolts
  int mv = analogReadMilliVolts(BATTERY_ADC_PIN);

  // Disable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  // Calculate actual battery voltage (2x due to voltage divider)
  float batteryVoltage = (mv / 1000.0) * 2;

  // Print voltage
  Serial1.print("Battery: ");
  Serial1.print(batteryVoltage, 2);
  Serial1.println(" V");

  delay(2000);
}
```

**Explicación del código:**

- GPIO1 lee el voltaje de la batería dividido a través del ADC
- GPIO21 habilita el circuito de monitorización de la batería
- El voltaje real de la batería es el doble del voltaje medido debido al divisor de voltaje
- Para una batería LiPo completamente cargada, espera alrededor de 4.2V
- Cuando la batería está baja, el voltaje cae a alrededor de 3.3V

**Salida esperada**

```
Battery Voltage Monitor

Battery: 4.18 V
Battery: 4.19 V
Battery: 4.18 V
```

## Uso de la tarjeta MicroSD

Para aplicaciones que requieren almacenamiento adicional, como un marco de fotos digital o registro de datos, la reTerminal E Serie incluye una ranura para tarjeta MicroSD.

Inserta una tarjeta microSD si planeas usar el dispositivo como un marco de fotos digital o necesitas almacenamiento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
La reTerminal E Serie solo admite tarjetas MicroSD de hasta 64GB formateadas con el sistema de archivos **Fat32**.
:::

### Operaciones básicas con la tarjeta SD: listar archivos

Este ejemplo muestra cómo inicializar la tarjeta SD, detectar cuándo se inserta o se extrae y listar todos los archivos y directorios en su raíz. El pin de habilitación de alimentación de la tarjeta SD (`SD_EN_PIN`) difiere entre modelos:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Model</th>
			<th>SD_EN_PIN</th>
			<th>GPIO</th>
		</tr>
		<tr>
			<td>E1001 / E1002 / E1004</td>
			<td>16</td>
			<td>GPIO16</td>
		</tr>
		<tr>
			<td>E1003</td>
			<td>39</td>
			<td>GPIO39</td>
		</tr>
	</table>
</div>

Todos los demás pines de la tarjeta SD (DET, CS, MOSI, MISO, SCK) son los mismos en todos los modelos. Selecciona la pestaña de tu dispositivo y copia el código en tu sketch de Arduino IDE.

<Tabs>
<TabItem value="e1001_e1002_e1004" label="E1001 / E1002 / E1004" default>

<details>
<summary>Haz clic para expandir el código completo de ejemplo de la tarjeta SD</summary>

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   16  // Power enable for the SD card slot
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

</details>

</TabItem>
<TabItem value="e1003" label="E1003">

<details>
<summary>Haz clic para expandir el código completo de ejemplo de la tarjeta SD</summary>

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   39  // Power enable for the SD card slot (E1003)
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

</details>

</TabItem>
</Tabs>

#### Explicación del código

- **Definiciones de pines:** El código comienza definiendo los pines GPIO utilizados para la ranura de la tarjeta MicroSD. Ten en cuenta que los pines SPI (`MOSI`, `SCK`) se comparten con la pantalla de tinta electrónica, pero un Chip Select separado (`SD_CS_PIN`) y una instancia SPI dedicada (`spiSD`) garantizan que puedan usarse de forma independiente.
- **Inicialización de SPI:** Creamos una nueva instancia de SPI, `spiSD(HSPI)`, para usar el segundo controlador SPI por hardware del ESP32 (HSPI). Esta es la mejor práctica para evitar conflictos con otros dispositivos SPI.
- **Detección de tarjeta:** La función `isCardInserted()` lee el `SD_DET_PIN`. En el hardware del reTerminal, este pin se mantiene en nivel BAJO cuando hay una tarjeta presente.
- **Montar/Desmontar:** La función `mountSD()` habilita la alimentación de la tarjeta, configura el bus HSPI con los pines correctos y llama a `SD.begin()` para inicializar el sistema de archivos. `unmountSD()` libera los recursos.
- **Listado de archivos:** `listRoot()` abre el directorio raíz (`/`), y `listDir()` es una función recursiva que recorre el sistema de archivos, imprimiendo los nombres de todos los archivos y directorios.
- **`setup()`:** Inicializa `Serial1` para la salida, configura el pin de detección de tarjeta y realiza una comprobación inicial para ver si ya hay una tarjeta insertada cuando el dispositivo se enciende.
- **`loop()`:** En lugar de comprobar constantemente la tarjeta, el código utiliza un temporizador no bloqueante (`millis()`) para comprobar un cambio en el estado de la tarjeta una vez por segundo. Si se detecta un cambio (tarjeta insertada o retirada), monta o desmonta la tarjeta e imprime el estado en el monitor serie.

#### Resultados esperados

1. Sube el código a tu reTerminal.
2. Abre el Monitor Serie del Arduino IDE (**Tools > Serial Monitor**).
3. Asegúrate de que la velocidad en baudios esté configurada a **115200**.

Verás una salida correspondiente a las siguientes acciones:

- **Al iniciar sin tarjeta:** El monitor imprimirá `[SD] No card detected at startup...`
- **Cuando insertes una tarjeta:** El monitor imprimirá `[SD] Card inserted.`, seguido de un listado completo de todos los archivos y directorios de la tarjeta.
- **Cuando retires la tarjeta:** El monitor imprimirá `[SD] Card removed.`

```
[FILE] live.0.shadowIndexGroups  6 bytes
[FILE] reverseStore.updates  1 bytes
[DIR]  journals.repair
[FILE] Cab.modified  0 bytes
[FILE] live.1.indexPositionTable  8192 bytes
[FILE] live.1.indexTermIds  8192 bytes
[FILE] tmp.spotlight.loc  2143 bytes
[FILE] live.1.shadowIndexTermIds  624 bytes
[FILE] live.1.indexArrays  65536 bytes
[FILE] live.1.shadowIndexArrays  65536 bytes
[FILE] live.1.indexHead  4096 bytes
[FILE] live.1.indexPostings  4096 bytes
```

## Ejemplo avanzado: Canalización de imagen de tarjeta SD → ePaper

Este es el ejemplo insignia para la reTerminal E Serie. Carga un archivo **JPEG / BMP / PNG** desde la tarjeta microSD, lo pasa por una canalización de tramado configurable y representa el resultado en el panel de tinta electrónica, con controles para **algoritmo de tramado**, **brillo**, **posición de anclaje** y **ajuste / escala**. La misma estructura de código funciona en las cuatro variantes de panel; lo único que cambia por modelo es la profundidad de color de salida (1 bit BN, 2 bits Gray4, 4 bits Gray16 o 6 colores E6).

Cinco sketches listos para flashear se incluyen con la biblioteca **Seeed_GFX**; elige el que coincida con tu hardware:

### Índice de ejemplos

<div class="table-center">
  <table>
    <tr>
      <th>Dispositivo</th>
      <th>Sketch de ejemplo</th>
      <th>Resolución del panel</th>
      <th>Paleta de salida</th>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1001 (BN)</td>
      <td><code>reTerminal_E1001_SDcard_BW</code></td>
      <td>800 × 480</td>
      <td>Blanco y negro de 1 bit</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1001 (Gray4)</td>
      <td><code>reTerminal_E1001_SDcard_Gray4</code></td>
      <td>800 × 480</td>
      <td>Escala de grises de 2 bits y 4 niveles</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1002</td>
      <td><code>reTerminal_E1002_SDcard_Color6</code></td>
      <td>800 × 480</td>
      <td>6 colores (B / W / R / Y / G / B)</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1003</td>
      <td><code>reTerminal_E1003_SDcard_Gray16</code></td>
      <td>1872 × 1404</td>
      <td>Escala de grises de 4 bits y 16 niveles</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1004</td>
      <td><code>reTerminal_E1004_SDcard_Color6</code></td>
      <td>1200 × 1600</td>
      <td>6 colores (B / W / R / Y / G / B)</td>
    </tr>
  </table>
</div>

Los cinco sketches se encuentran en [`Seeed_GFX/examples/ePaper/reTerminal_SDcard_Bitmap/`](https://github.com/Seeed-Studio/Seeed_GFX/tree/master/examples/ePaper/reTerminal_SDcard_Bitmap). Cada carpeta es **totalmente autónoma**: no hay bibliotecas adicionales que instalar, solo abrir y flashear.

### Qué hace la canalización

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 1050 300" 
  width="100%" 
  height="auto" 
  style={{ 
    backgroundColor: '#ffffff', 
    borderRadius: '12px', 
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
    padding: '20px',
    marginBottom: '20px'
  }}
>
  {/* Definitions for markers and filters */}
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
    </marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.05" />
    </filter>
  </defs>

  {/* Title */}
  <text x="525" y="40" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="#1e293b" textAnchor="middle">
    Image Processing Pipeline: microSD to ePaper
  </text>

  {/* ================= NODES ================= */}

  {/* Node 1: microSD */}
  <g transform="translate(20, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" filter="url(#shadow)" />
    <path d="M55 15 v14 a2 2 0 0 0 2 2 h12 a2 2 0 0 0 2-2 V19 l-4-4 H57 a2 2 0 0 0-2 2z m4 2 h2 v4 h-2 v-4z m4 0 h2 v4 h-2 v-4z" fill="#3b82f6" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">microSD</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">JPG / BMP / PNG</text>
  </g>

  {/* Node 2: PSRAM */}
  <g transform="translate(240, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#ef4444" strokeWidth="2" filter="url(#shadow)" />
    <path d="M57 17 v12 h20 V17 H57z m2 2 h16 v8 H59 v-8z m-4 2 h-2 v2 h2 v-2z m0 4 h-2 v2 h2 v-2z m24-4 h2 v2 h-2 v-2z m0 4 h2 v2 h-2 v-2z" fill="#ef4444" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">PSRAM</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">RGB888</text>
  </g>

  {/* Node 3: Scaled Buffer */}
  <g transform="translate(460, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#f59e0b" strokeWidth="2" filter="url(#shadow)" />
    <path d="M67 15 l2.3 2.3 -2.89 2.87 1.42 1.42 L70.7 18.7 73 21 V15 h-6z M55 21 l2.3-2.3 2.87 2.89 1.42-1.42 L58.7 17.3 61 15 h-6 v6z m6 12 l-2.3-2.3 2.89-2.87 -1.42-1.42 L57.3 29.3 55 27 v6 h6z m12-6 l-2.3 2.3 -2.87-2.89 -1.42 1.42 2.89 2.87 L73 33 v-6z" fill="#f59e0b" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">Scaled Buffer</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">scaled RGB888</text>
  </g>

  {/* Node 4: Palette Buffer */}
  <g transform="translate(680, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#8b5cf6" strokeWidth="2" filter="url(#shadow)" />
    <path d="M70 14 c-5.52 0-10 4.48-10 10 s4.48 10 10 10 c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.64-1.6-.39-.41-.61-.98-.61-1.6 0-1.38 1.12-2.5 2.5-2.5 h1.5 c2.21 0 4-1.79 4-4 0-3.86-4.48-7-10-7z m-4 7 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5-3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5z m3.5 3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5 3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z" fill="#8b5cf6" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">Palette Buffer</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">panel-palette indices</text>
  </g>

  {/* Node 5: ePaper */}
  <g transform="translate(900, 100)">
    <rect x="0" y="0" width="130" height="90" rx="8" fill="#f8fafc" stroke="#10b981" strokeWidth="2" filter="url(#shadow)" />
    <path d="M77 15 H53 c-1.1 0-2 .9-2 2 v14 c0 1.1 .9 2 2 2 h24 c1.1 0 2-.9 2-2 V17 c0-1.1-.9-2-2-2z m0 16 H53 V17 h24 v14z" fill="#10b981" />
    <text x="65" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">ePaper</text>
    <text x="65" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">panel update</text>
  </g>

  {/* ================= ARROWS & LABELS ================= */}

  {/* Arrow 1: Decode */}
  <g>
    <line x1="160" y1="145" x2="232" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="196" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#3b82f6" textAnchor="middle">decode</text>
    <text x="196" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">pngle / jpeg / bmp</text>
    {/* Animated Data Packet */}
    <circle cy="145" r="4" fill="#3b82f6">
      <animate attributeName="cx" from="160" to="230" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Arrow 2: Resize */}
  <g>
    <line x1="380" y1="145" x2="452" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="416" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#ef4444" textAnchor="middle">redimensionar</text>
    <text x="416" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">vecino más cercano</text>
    {/* Paquete de datos animado */}
    <circle cy="145" r="4" fill="#ef4444">
      <animate attributeName="cx" from="380" to="450" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Flecha 3: Dither */}
  <g>
    <line x1="600" y1="145" x2="672" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="636" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#f59e0b" textAnchor="middle">dither</text>
    <text x="636" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">Bayer / FS / ...</text>
    {/* Paquete de datos animado */}
    <circle cy="145" r="4" fill="#f59e0b">
      <animate attributeName="cx" from="600" to="670" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Flecha 4: Push */}
  <g>
    <line x1="820" y1="145" x2="892" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="856" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#8b5cf6" textAnchor="middle">empujar</text>
    <text x="856" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">Sprite</text>
    {/* Paquete de datos animado */}
    <circle cy="145" r="4" fill="#8b5cf6">
      <animate attributeName="cx" from="820" to="890" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Animación de actualización de pantalla ePaper (pulso) */}
  <rect x="900" y="100" width="130" height="90" rx="8" fill="none" stroke="#10b981" strokeWidth="4" opacity="0">
    <animate attributeName="opacity" values="0;0.6;0" keyTimes="0;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
    <animate attributeName="strokeWidth" values="4;8;4" keyTimes="0;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
  </rect>

</svg>

1. **Decodificar** — el formato de archivo se detecta mediante magic bytes (`FF D8`, `BM` o `89 50 4E 47`). Una extensión engañosa se corrige automáticamente y se registra una advertencia.
2. **Redimensionar** (opcional) — reducción por vecino más cercano basada en `DISPLAY_FIT` / `DISPLAY_SCALE`.
3. **Dither** — uno de cinco algoritmos cuantiza RGB de 24 bits en la diminuta paleta del panel (2 / 4 / 6 / 16 niveles).
4. **Push** — el búfer cuantizado se escribe en el Sprite de ePaper en la posición de anclaje y luego `epaper.update()` lo desplaza hacia el panel.

### Paso 1 — Abre el ejemplo para tu modelo

En el IDE de Arduino: **File → Examples → Seeed_GFX → ePaper → reTerminal_SDcard_Bitmap →** *(elige tu modelo)*.

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1001_SDcard_BW/
    ├── reTerminal_E1001_SDcard_BW.ino   ← config + setup() + loop()
    ├── dither.{h,cpp}                   ← BW dither algorithms
    ├── image_loader.{h,cpp}             ← JPEG / BMP / PNG decoder
    ├── pngle.{h,c} + miniz.{h,c}        ← PNG backend (MIT, vendored)
    └── driver.h                         ← selects Setup520 (UC8179, 800x480)
```

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1001_SDcard_Gray4/
    ├── reTerminal_E1001_SDcard_Gray4.ino
    ├── dither.{h,cpp}                   ← Gray4 dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup520 + initGrayMode(4)
```

</TabItem>
<TabItem value="e1002" label="E1002">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1002_SDcard_Color6/
    ├── reTerminal_E1002_SDcard_Color6.ino
    ├── dither.{h,cpp}                   ← 6-color dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup521 (ED2208, 800x480 E6)
```

</TabItem>
<TabItem value="e1003" label="E1003">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1003_SDcard_Gray16/
    ├── reTerminal_E1003_SDcard_Gray16.ino
    ├── dither.{h,cpp}                   ← Gray16 dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup522 + initGrayMode(16)
```

</TabItem>
<TabItem value="e1004" label="E1004">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1004_SDcard_Color6/
    ├── reTerminal_E1004_SDcard_Color6.ino
    ├── dither.{h,cpp}                   ← 6-color dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup523 (T133A01, 1200x1600 E6)
```

</TabItem>
</Tabs>

:::tip Bocetos autónomos
No necesitas instalar pngle, miniz ni nada más desde el Arduino Library Manager. El código fuente del decodificador PNG se incluye **dentro de cada carpeta de ejemplo**, por lo que el IDE de Arduino lo detecta automáticamente cuando compila el sketch.
:::

### Código completo del sketch

El código fuente completo `.ino` para cada variante se muestra a continuación. Todos los ajustes configurables por el usuario (ruta de la imagen, algoritmo de dithering, ancla, ajuste/escala) están en el bloque de **CONFIGURACIÓN DEL USUARIO** cerca de la parte superior; el resto del archivo es código estándar que normalmente no necesita edición.

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

<details>
<summary>Haz clic aquí para previsualizar el código completo — reTerminal_E1001_SDcard_BW.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup520_Seeed_reTerminal_E1001 -- check driver.h selects BOARD_SCREEN_COMBO 520"
#endif

EPaper epaper;

static constexpr int    PIN_SD_SCK   = 7;
static constexpr int    PIN_SD_MISO  = 8;
static constexpr int    PIN_SD_MOSI  = 9;
static constexpr int    PIN_SD_CS    = 14;
static constexpr int    PIN_SD_EN    = 16;
static constexpr int    PIN_SD_DET   = 15;
static constexpr int    PIN_DBG_RX   = 44;
static constexpr int    PIN_DBG_TX   = 43;
#define LOG       Serial1
#define TAG       "[e1001-bw]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
// 1.0 = neutral, >1.0 darkens, <1.0 brightens
static const float DITHER_GAMMA = 1.0f;
// false = normal, true = invert black/white
static const bool DITHER_INVERT = false;

// ANCHOR_TOP_LEFT / ANCHOR_TOP_CENTER / ANCHOR_TOP_RIGHT /
// ANCHOR_MIDDLE_LEFT / ANCHOR_CENTER / ANCHOR_MIDDLE_RIGHT /
// ANCHOR_BOTTOM_LEFT / ANCHOR_BOTTOM_CENTER / ANCHOR_BOTTOM_RIGHT
enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

// FIT_ORIGINAL / FIT_CONTAIN / FIT_SCALE
enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below -- no need to edit)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap() / 1024),
             (unsigned long)(ESP.getFreePsram() / 1024),
             (unsigned long)(ESP.getPsramSize() / 1024));
  LOG.flush();
}

static void list_sd_root(int max_entries = 32) {
  File root = SD.open("/");
  if (!root || !root.isDirectory()) { LOG.println("[sd] cannot open '/'"); return; }
  LOG.println("[sd] contents of '/' :");
  int n = 0;
  File entry = root.openNextFile();
  while (entry) {
    if (entry.isDirectory()) LOG.printf("   <DIR>  %s\n", entry.name());
    else LOG.printf("   %7lu B  %s\n", (unsigned long)entry.size(), entry.name());
    entry.close();
    if (++n >= max_entries) { LOG.printf("   ... (truncated at %d)\n", max_entries); break; }
    entry = root.openNextFile();
  }
  if (n == 0) LOG.println("   (empty)");
  root.close(); LOG.flush();
}

static void compute_target_size(int src_w, int src_h, DisplayFit fit, float scale,
                                int panel_w, int panel_h, int* out_w, int* out_h) {
  switch (fit) {
    case FIT_ORIGINAL: *out_w = src_w; *out_h = src_h; break;
    case FIT_CONTAIN: {
      double s = (double)panel_w/src_w; if ((double)panel_h/src_h < s) s = (double)panel_h/src_h;
      if (s > 1.0) s = 1.0;
      *out_w = (int)(src_w*s+0.5); *out_h = (int)(src_h*s+0.5); break;
    }
    case FIT_SCALE: *out_w = (int)(src_w*scale+0.5); *out_h = (int)(src_h*scale+0.5); break;
  }
  if (*out_w & 7) *out_w &= ~7;
  if (*out_w < 8) *out_w = 8;
  if (*out_h < 1) *out_h = 1;
}

static void compute_anchor_xy(int img_w, int img_h, DisplayAnchor a,
                              int panel_w, int panel_h, int* out_x, int* out_y) {
  int x = 0, y = 0;
  switch (a) {
    case ANCHOR_TOP_LEFT:      x=0;                     y=0;                    break;
    case ANCHOR_TOP_CENTER:    x=(panel_w-img_w)/2;     y=0;                    break;
    case ANCHOR_TOP_RIGHT:     x=panel_w-img_w;         y=0;                    break;
    case ANCHOR_MIDDLE_LEFT:   x=0;                     y=(panel_h-img_h)/2;    break;
    case ANCHOR_CENTER:        x=(panel_w-img_w)/2;     y=(panel_h-img_h)/2;    break;
    case ANCHOR_MIDDLE_RIGHT:  x=panel_w-img_w;         y=(panel_h-img_h)/2;    break;
    case ANCHOR_BOTTOM_LEFT:   x=0;                     y=panel_h-img_h;        break;
    case ANCHOR_BOTTOM_CENTER: x=(panel_w-img_w)/2;     y=panel_h-img_h;        break;
    case ANCHOR_BOTTOM_RIGHT:  x=panel_w-img_w;         y=panel_h-img_h;        break;
  }
  if (x & 7) x &= ~7;
  *out_x = x; *out_y = y;
}

static bool show_image_on_panel(RgbImage* img) {
  int W, H;
  compute_target_size(img->width, img->height, DISPLAY_FIT, DISPLAY_SCALE,
                      EPD_WIDTH, EPD_HEIGHT, &W, &H);
  int x, y;
  compute_anchor_xy(W, H, DISPLAY_ANCHOR, EPD_WIDTH, EPD_HEIGHT, &x, &y);

  if (W != img->width || H != img->height) {
    if (!resize_image(img, W, H)) { LOG.println("[layout] resize OOM"); return false; }
  }
  const size_t npx = (size_t)W * H;
  uint8_t* idx = (uint8_t*)ps_malloc(npx);
  if (!idx) idx = (uint8_t*)malloc(npx);
  if (!idx) { LOG.println(TAG " OOM idx"); return false; }

  static const char* kDN[] = {"NONE","BAYER8","FS","JARVIS","ATKINSON"};
  LOG.printf(TAG " dithering BW with %s, gamma=%.2f\n", kDN[(int)DITHER_METHOD], DITHER_GAMMA);
  if (!dither_image(img->pixels, W, H, PAL_BW, DITHER_METHOD, DITHER_GAMMA, DITHER_INVERT, idx)) {
    free(idx); return false;
  }
  image_free(img);

  const size_t bm_bytes = ((size_t)W+7)/8 * (size_t)H;
  uint8_t* bm = (uint8_t*)ps_malloc(bm_bytes);
  if (!bm) bm = (uint8_t*)malloc(bm_bytes);
  if (!bm) { free(idx); return false; }
  pack_1bpp_msb(idx, bm, W, H, true);
  free(idx);

  epaper.drawBitmap(x, y, bm, W, H, TFT_BLACK, TFT_WHITE);
  epaper.update();
  free(bm);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1001 -- SD Bitmap (BW)");
  LOG.println("==============================================");
  log_mem("start");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // UC8179 is write-only (TFT_MISO=-1 in Setup520). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED -- aborting"); return;
  }
  list_sd_root();

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed -- aborting"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

<details>
<summary>Haz clic aquí para previsualizar el código completo — reTerminal_E1001_SDcard_Gray4.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup520_Seeed_reTerminal_E1001 -- check driver.h selects BOARD_SCREEN_COMBO 520"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1001-g4]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  // (fit/anchor logic omitted for brevity -- see full source in the library)
  if (W != img->width || H != img->height)
    if (!resize_image(img, W, H)) return false;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_GRAY4, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1001 -- SD Bitmap (Gray4)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();
  epaper.initGrayMode(GRAY_LEVEL4);
  epaper.fillSprite(TFT_GRAY_3);

  // UC8179 is write-only (TFT_MISO=-1 in Setup520). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1002" label="E1002">

<details>
<summary>Haz clic aquí para previsualizar el código completo — reTerminal_E1002_SDcard_Color6.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup521_Seeed_reTerminal_E1002 -- check driver.h selects BOARD_SCREEN_COMBO 521"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1002]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_E6, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1002 -- SD Bitmap (6-color)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // ED2208 is write-only (TFT_MISO=-1 in Setup521). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1003" label="E1003">

<details>
<summary>Haz clic aquí para previsualizar el código completo — reTerminal_E1003_SDcard_Gray16.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup522_Seeed_reTerminal_E1003 -- check driver.h selects BOARD_SCREEN_COMBO 522"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 39;  // E1003 uses GPIO39, not GPIO16
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1003]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
// At 1872x1404, error-diffusion needs >10 MB -- use DITHER_BAYER8 or shrink source first.
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_ORIGINAL;
static const float      DISPLAY_SCALE = 1.0f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_GRAY16, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1003 -- SD Bitmap (Gray16)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();
  epaper.initGrayMode(GRAY_LEVEL16);
  epaper.fillSprite(TFT_GRAY_15);

  // Re-init SPI bus to ensure MISO=GPIO8 is wired (symmetry with E1001/E1002).
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1004" label="E1004">

<details>
<summary>Haz clic aquí para previsualizar el código completo — reTerminal_E1004_SDcard_Color6.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup523_Seeed_reTerminal_E1004 -- check driver.h selects BOARD_SCREEN_COMBO 523"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1004]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
// Default BAYER8: safe at any source size. Switch to FS only for small images.
static const DitherMethod DITHER_METHOD = DITHER_BAYER8;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_ORIGINAL;
static const float      DISPLAY_SCALE = 1.0f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_E6, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1004 -- SD Bitmap (6-color)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // Re-init SPI bus for symmetry with E1001/E1002 (no-op on E1004, MISO already configured).
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
</Tabs>

:::note Código simplificado vs. código fuente completo
Los bloques de código anteriores están **ligeramente condensados** (funciones auxiliares integradas, llamadas de registro detalladas eliminadas) para mantenerlos legibles aquí. Los sketches de la biblioteca — abiertos mediante **File → Examples → Seeed_GFX → ePaper → reTerminal_SDcard_Bitmap** — contienen el registro de diagnóstico completo, toda la lógica de ajuste/anclaje y todos los comentarios.
:::

### Paso 2 — Prepara la tarjeta microSD

1. Formatea la tarjeta como **FAT32**.
2. Crea una estructura de carpetas que coincida con la ruta que establecerás en el sketch — el valor predeterminado es `/img/demo.jpg`:

   ```text
   <SD root>/
   └── img/
       └── demo.jpg          ← or demo.png / demo.bmp
   ```

3. Inserta la tarjeta en el reTerminal **antes** de encenderlo (la conexión en caliente funciona pero es menos fiable).

### Paso 3 — Prepara tu imagen

El cargador acepta tres formatos de forma predeterminada:

| Formato | Qué funciona | Qué evitar |
|---|---|---|
| **JPEG** (`.jpg` / `.jpeg`) | Baseline de 8 bits, YCbCr o escala de grises, cualquier submuestreo de croma (4:4:4 / 4:2:2 / 4:2:0). | JPEG progresivo, CMYK, fuentes con solo rotación EXIF. |
| **BMP** (`.bmp`) | BGR de 24 bits sin comprimir, o indexado de 4 bits (paleta + `BI_RGB`). | `BI_BITFIELDS`, BMP comprimidos con RLE. |
| **PNG** (`.png`) | Cualquier PNG estándar (8 bits, 16 bits, paleta, entrelazado, RGBA). RGBA se compone sobre **blanco** porque los paneles de ePaper son opacos. | Ninguno: pngle maneja todas las variantes estándar de PNG. |

El formato real del archivo se detecta a partir de los **magic bytes**, no de su extensión. Un JPEG guardado como `.bmp` sigue funcionando (solo verás una advertencia en el registro serie).

Guía de tamaño por panel:

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

El panel es de **800 × 480**. Cualquier fuente de hasta aproximadamente **1600 × 1200** se decodifica bien con 8 MB de PSRAM. Las imágenes más grandes siguen siendo aceptadas, pero querrás `DISPLAY_FIT = FIT_CONTAIN` para que el cargador pueda reducirlas antes de cuantizarlas.

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

Mismo panel que BW (**800 × 480**), pero verás un rango tonal significativamente mayor: una foto de retrato o paisaje a resolución nativa se ve notablemente más suave que en el sketch BW.

</TabItem>
<TabItem value="e1002" label="E1002">

El panel es de **800 × 480**. La paleta de 6 colores es escasa, por lo que un tramado intenso (FS / Jarvis) ofrece la mejor calidad percibida en contenido fotográfico.

</TabItem>
<TabItem value="e1003" label="E1003">

El panel es de **1872 × 1404** (alrededor de **2,6 millones de píxeles**, ~7,5 MB en RGB888). Una fuente del tamaño completo del panel saturará la PSRAM y obligará a la etapa de tramado a volver a `DITHER_NONE` — el cargador imprime una advertencia cuando esto sucede.

Para obtener el mejor resultado, **preescala** tu fuente a ≤ 1200 × 900 en el PC (o usa `DISPLAY_FIT = FIT_CONTAIN` con un `DISPLAY_SCALE` más pequeño), y luego deja que el dispositivo haga el tramado final.

</TabItem>
<TabItem value="e1004" label="E1004">

El panel es de **1200 × 1600** (~1,9 millones de píxeles, ~5,5 MB en RGB888). Cabe cómodamente en 8 MB de PSRAM, pero combinar **FS a resolución de panel** con el búfer de error de 11 MB que necesita **sí** activará el modo de reserva. El valor predeterminado es `DITHER_BAYER8` por seguridad; cambia a `DITHER_FS` solo después de reducir la fuente.

</TabItem>
</Tabs>

### Paso 4 — Configura el sketch

Todas las opciones ajustables por el usuario se encuentran en un bloque de configuración en la parte superior de cada archivo `.ino`. A continuación se explican los cuatro controles más importantes.

#### `IMAGE_PATH` — qué archivo mostrar

```cpp
static const char* IMAGE_PATH = "/img/demo.jpg";
```

Usa una `/` inicial. El cargador detecta el formato a partir de los magic bytes, por lo que la extensión es puramente cosmética: `/photo.bmp` que contenga datos JPEG reales sigue decodificándose bien.

#### `DITHER_METHOD` — qué algoritmo de tramado

Los paneles de ePaper solo pueden mostrar físicamente 2 / 4 / 6 / 16 colores. Para representar los millones de colores de una foto típica, el cargador tiene que **cuantizar** cada píxel a una de esas pocas entradas de la paleta. El algoritmo de tramado decide *cómo* se distribuye ese error de cuantización entre los píxeles vecinos.

```cpp
static const DitherMethod DITHER_METHOD = DITHER_FS;
```

| Opción | Qué hace | Cuándo usarla |
|---|---|---|
| `DITHER_NONE` | Color más cercano, sin difusión. El más rápido, el más cuadriculado. | Diagnósticos, o cuando quieres un aspecto posterizado. |
| `DITHER_BAYER8` | Matriz Bayer ordenada de 8×8. Determinista, **sin búfer de error**. | La opción más segura en E1003 / E1004 a resolución de panel: nunca se queda sin memoria. |
| `DITHER_FS` | Difusión de error Floyd-Steinberg. La mejor relación **calidad / velocidad**. | Predeterminado en E1001 / E1002. Ideal para fotos con degradados suaves. |
| `DITHER_JARVIS` | Jarvis-Judice-Ninke. Núcleo más amplio de 12 coeficientes, salida más suave. | Mayor calidad que FS, pero ~3× más lento y usa más PSRAM. |
| `DITHER_ATKINSON` | Atkinson (Mac clásico). Difunde solo 6/8 del error → mayor contraste, aspecto más "grabado". | Salida B&N estilizada, contenido tipo cómic / arte lineal. |

:::caution Coste de memoria de la difusión de error
`DITHER_FS`, `DITHER_JARVIS` y `DITHER_ATKINSON` necesitan un **búfer de error en coma flotante** de aproximadamente `W × H × N_channels × 4` bytes. A 1872 × 1404 eso son unos **31 MB para color** o **10 MB para escala de grises** — muy por encima de la PSRAM disponible.

Cuando `ps_malloc` falla, el cargador imprime

```
[dither] FS error buffer alloc FAILED (10358 kB) -- falling back to DITHER_NONE
```

y cambia silenciosamente a `DITHER_NONE`. Si no quieres este modo de reserva, cambia a `DITHER_BAYER8` (ordenado, sin asignación de memoria) **o** reduce primero la imagen.
:::

#### `DITHER_GAMMA` — compensación de brillo

```cpp
static const float DITHER_GAMMA = 1.0f;
```

`1.0` es neutro. Auméntalo para **oscurecer** la salida (bueno para fotos al aire libre que salen demasiado brillantes en ePaper). Redúcelo para **aclarar** (bueno para fotografía nocturna o capturas de pantalla). El rango útil típico es **0.8 – 1.6**.

#### `DISPLAY_ANCHOR` — dónde cae la imagen en el panel

Una cuadrícula de 3×3 puntos de anclaje. La imagen se coloca de modo que su esquina / borde / centro se alinee con la ubicación correspondiente del panel.

```text
ANCHOR_TOP_LEFT       ANCHOR_TOP_CENTER       ANCHOR_TOP_RIGHT
ANCHOR_MIDDLE_LEFT    ANCHOR_CENTER           ANCHOR_MIDDLE_RIGHT
ANCHOR_BOTTOM_LEFT    ANCHOR_BOTTOM_CENTER    ANCHOR_BOTTOM_RIGHT
```

```cpp
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;
```

Cualquier imagen más pequeña que el panel se **rellena automáticamente** con blanco en el área no utilizada, sin necesidad de cambiar el tamaño previamente para que coincida exactamente con el panel. Las imágenes más grandes que el panel se **recortan** simétricamente alrededor del ancla.

#### `DISPLAY_FIT` + `DISPLAY_SCALE` — dimensionar la imagen

```cpp
static const DisplayFit  DISPLAY_FIT   = FIT_ORIGINAL;
static const float       DISPLAY_SCALE = 1.0f;
```

| Modo | Comportamiento |
|---|---|
| `FIT_ORIGINAL` | Mantiene el tamaño decodificado tal cual. Valor predeterminado recomendado: predecible y siempre seguro. |
| `FIT_CONTAIN` | Reduce la imagen para que quepa **completamente** dentro del panel preservando la relación de aspecto. **Nunca amplía**: una imagen pequeña permanece pequeña (usa `FIT_SCALE` para ampliarla). |
| `FIT_SCALE` | Multiplica el tamaño de origen por `DISPLAY_SCALE`. Se admite tanto reducción (`< 1.0`) como ampliación (`> 1.0`). |

Valores típicos para `DISPLAY_SCALE`: `0.25` un cuarto, `0.5` la mitad, `1.0` original, `2.0` 2×.

:::warning La ampliación es propensa a OOM en paneles grandes
En E1003 (1872 × 1404) y E1004 (1200 × 1600), `DISPLAY_SCALE` mayor que `1.0` agota rápidamente la PSRAM. El cargador imprimirá un mensaje de falta de memoria y abortará. En su lugar, es preferible recortar o cambiar el tamaño previamente en el host.
:::

#### Profundidad de escala de grises (solo E1001)

E1001 se envía con **dos** sketches porque el mismo panel UC8179 puede funcionar en BW (rápido, 1 bit) **o** Gray4 (más lento, 2 bits, cuatro tonos). Elige según el contenido:

| Contenido | Sketch recomendado |
|---|---|
| Dibujo lineal, códigos QR, texto, cómics dibujados a mano. | `reTerminal_E1001_SDcard_BW` |
| Fotografías, ilustraciones con sombreado suave. | `reTerminal_E1001_SDcard_Gray4` |

E1003 utiliza incondicionalmente escala de grises de 16 niveles (`initGrayMode(16)`) — ese modo es la característica distintiva del panel. E1002 y E1004 son de 6 colores y no exponen una opción de profundidad de escala de grises.

### Paso 5 — Compilar, flashear y ver los registros

1. En **Arduino IDE → Tools**: selecciona la placa **XIAO_ESP32S3**, **PSRAM = OPI PSRAM**, **Flash = 8 MB**, **Partition Scheme = Default 8 MB**.
2. Inserta la tarjeta microSD preparada.
3. **Sube** el sketch.
4. Abre un **monitor serie en el puente USB-UART del carrier** (GPIO43 TX / GPIO44 RX, **115200 baudios, 8N1**) — ten en cuenta que esto es `Serial1`, **no** el USB-CDC `Serial` que el IDE abre automáticamente.

Salida típica de registro (E1004 con un PNG de 1080 × 1920):

```text
[reTerm_E1004] dithering Color6 with BAYER8, gamma=1.00 ...
[mem]  before image load        heap=275 kB  PSRAM free=8030/8192 kB
[png]   IHDR 1080x1920, allocating RGB888 buffer: 6075 kB
[img]   image decoded: 1080x1920  (6075 kB in PSRAM)
[mem]  after image decoded      heap=275 kB  PSRAM free=1955/8192 kB
[mem]  after dither             heap=275 kB  PSRAM free=1955/8192 kB
[reTerm_E1004] anchor=CENTER  fit=ORIGINAL  scale=1.00
[reTerm_E1004] frame pushed OK
[reTerm_E1004] done. Sleeping panel.
```

Después de esto el panel se actualizará — esto tarda **de 15 a 45 segundos** para una actualización completa, dependiendo del modelo y del modo de grises / color elegido. Permanece quieto y no reinicies la placa en medio de la actualización.

### Chuleta del presupuesto de memoria

| Panel | Búfer RGB888 | Búfer de error del FS (pico) | ¿Cómodo con FS? |
|---|---|---|---|
| E1001 BW @ 800×480 | 1.1 MB | 1.5 MB | ✅ sí |
| E1001 Gray4 @ 800×480 | 1.1 MB | 1.5 MB | ✅ sí |
| E1002 E6 @ 800×480 | 1.1 MB | 4.6 MB | ✅ sí |
| E1003 Gray16 @ 1872×1404 | 7.5 MB | 10.1 MB | ❌ no — usa `DITHER_BAYER8` o reduce la fuente |
| E1004 E6 @ 1200×1600 | 5.5 MB | 22.0 MB | ❌ no — usa `DITHER_BAYER8` o reduce la fuente |

El módulo OPI PSRAM de 8 MB en el módulo XIAO ESP32-S3 te ofrece aproximadamente **7.9 MB de espacio utilizable** después de la sobrecarga del runtime de Arduino. Si el cargador no puede satisfacer una asignación, registra el tamaño exacto que necesitaba y o bien redimensiona y reintenta (cuando `DISPLAY_FIT = FIT_CONTAIN`) o vuelve a `DITHER_NONE`.

:::tip Sobre la velocidad de actualización
Después de subir el sketch, el ePaper puede permanecer en blanco durante los primeros segundos mientras el controlador ejecuta su forma de onda inicial. Una primera actualización completa puede tardar hasta un par de minutos en un panel frío: esto se debe a la electroquímica del panel, no es un error. Las actualizaciones posteriores son más rápidas.
:::

## Solución de problemas

Para problemas de configuración de Arduino IDE, problemas de controladores USB, fallos de carga o problemas de "la pantalla ePaper no se actualiza", consulta la sección **Troubleshooting** de [Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino#Solución-de-problemas).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
