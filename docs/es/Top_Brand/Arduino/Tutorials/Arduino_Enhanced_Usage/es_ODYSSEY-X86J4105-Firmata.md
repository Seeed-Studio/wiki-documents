---
description: Firmata para Placas Compatibles con Arduino
title: Firmata para Placas Compatibles con Arduino
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-Firmata
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Tutorial de Firmata: Cómo Usar Firmata en Placas Compatibles con Arduino

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-py-js.png"/></div>

## Qué es Firmata

**[Firmata](http://firmata.org/wiki/Main_Page)** es un protocolo intermedio que conecta un sistema embebido a una computadora host, y el canal del protocolo utiliza un puerto serie por defecto. La plataforma Arduino es la implementación de referencia estándar para Firmata. El IDE de Arduino viene con soporte para Firmata.

Esto podría funcionar perfectamente con [Odyssey-X86](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html) con su núcleo Arduino integrado, lo que significa que puedes controlar el núcleo Arduino simplemente usando el protocolo Firmata con diferentes lenguajes de programación también! En este tutorial, está basado en el sistema operativo Windows.

*Referencia: [Protocolos Firmata](https://github.com/firmata/protocol)*

## Grabando el Firmware Firmata a través del IDE de Arduino

El IDE de Arduino >= versión 1.6.X viene con el firmware Firmata, por lo que podemos usar el IDE de Arduino para grabar el firmware firmata en el núcleo Arduino.

:::note
Puedes descargar el [IDE de Arduino](https://www.arduino.cc/en/Main/Software) desde aquí.
:::

- Abre el IDE de Arduino y navega a `Examples` -> `Firmata` -> `StandardFirmata`:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-1.jpg"/></div>

- Aparecerá `StandardFirmata.ino`. Selecciona la placa y puerto correctos y haz clic en **Upload**:

:::note
Si no has instalado la librería de la placa para Odyssey, por favor sigue [**esto**](https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105/#using-the-arduino-core-atsamd21g18-in-windows) para instalar la placa.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-2.jpg"/></div>

- Una vez subido, debería verse algo así:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-3.jpg"/></div>

¡Ahora, el firmware Arduino Firmata está grabado en el núcleo Arduino en Odyssey-X86!

## Probando el Firmware Firmata

Para probar el firmware Firmata, puedes navegar a la **Microsoft Store**, buscar y descargar la **Windows Remote Arduino Experience**. Una vez descargada, puedes conectarte al núcleo Arduino seleccionando la conexión USB, placa y velocidad de baudios:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Remote-Arduino.jpg"/></div>

Una vez conectado, puedes conectar un LED a los pines correspondientes para probar el firmware:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-test.jpg"/></div>

## Usando Python para Interpretar Firmata

Hay librerías que implementan el protocolo Firmata para comunicarse (desde una computadora, smartphone o tablet por ejemplo) con el firmware Firmata ejecutándose en una plataforma de microcontrolador.

**[pyFirmata](https://github.com/tino/pyFirmata)** es una interfaz Python para el protocolo Firmata y se ejecuta en python3.

### Instalación de pyFirmata

:::note
        Python3 es requerido para esto.
:::

Instalar con pip:

```sh
pip install pyfirmata
```

### Para Hacer Parpadear un LED conectado en D13

**Nota:** Cambia el `COM4` por el COM USB de tu Arduino.

Para un módulo LED simple, ¡puedes usar el [Grove - módulo LED](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html) para probar!

```py
#!/usr/bin/env python3
from pyfirmata import Arduino, util
from time import sleep

board = Arduino('COM4') # Change to your port
print("Start blinking D13")
while True:
    board.digital[13].write(1)
    sleep(1)
    board.digital[13].write(0)
    sleep(1)
```

### Para leer Señales Analógicas en A0

```py
#!/usr/bin/env python3
from pyfirmata import Arduino,util
import time
import sys

board = Arduino('COM4') # Change to your port
it = util.Iterator(board)
it.start()
board.analog[0].enable_reporting()
print ("Read Start")
for i in range(10):
    time.sleep(1)
    print(board.analog[0].read())

board.analog[0].disable_reporting()
```

### Salidas PWM en D6

Envía una señal PWM a un LED conectado en D6.

```py
#!/usr/bin/env python3
from pyfirmata import Arduino, util
from time import sleep

board = Arduino('COM4') # Change to your port
lenPin = board.get_pin('d:6:p') # PWM Pin
print("Starting to output PWM signal")
while True:
    for i in range(0, 101, 4):
        lenPin.write(i/100)
        sleep(0.05)
    sleep(1)
    for i in range(100, -1, -4):
        lenPin.write(i/100)
        sleep(0.05)
    sleep(1)
```

Ahora puedes usar un script de Python (o incluso otros lenguajes) para controlar tu núcleo Arduino en Odyssey-X86, lo que lo hace muy útil en algunas situaciones donde los requisitos de tiempo real son menos importantes (es decir, usar Python para construir un servidor web y usar Arduino para controlar un relé).

**Nota:** Para más referencia de API, por favor visita [pyFirmata API](https://pypi.org/project/pyFirmata/).

:::note
Para un uso más avanzado de Python con Firmata, puedes considerar usar [pymata4](https://github.com/MrYsLab/pymata4).
:::

## Usando JavaScript para Interpretar Firmata

Al igual que usar Python para controlar el núcleo Arduino a través del protocolo Firmata, también puedes elegir otros lenguajes con los que estés familiarizado para programar, ¡como JavaScript! Esto está implementado por el equipo oficial de Firmata y puedes encontrar más información en [**firmata.js**](https://github.com/firmata/firmata.js).

### Comenzando con firmata.js

:::note
        Asegúrate de que **`node.js`** esté instalado en la PC.
:::

- Crea un nuevo proyecto:

```sh
mkdir js && cd js
npm init -y
npm install --save firmata # Installing firmata.js
```

### Para hacer parpadear un LED conectado en D13

```java
const Board = require("firmata");
const pin = 13;

//Initialize
Board.requestPort((error, port) => {
  if (error) {
    console.log(error);
    return;
  }

  const board = new Board(port.path);
  //Waiting to connect
  board.on("ready", () => {
    console.log("Ready!");
    let state = 1;
    //Setting pins to output
    board.pinMode(pin, board.MODES.OUTPUT);
    setInterval(() => {
      console.log("State Change");
      board.digitalWrite(pin, (state ^= 1));
    }, 500);
  });
});
```

### Para leer Señales Analógicas en A0

Para probar las señales analógicas, ¡puedes simplemente usar el [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)!

```java
const Board = require('firmata');
const Pin = 0;

// Initialize
Board.requestPort(function(error, port) {
    if (error) {
        console.log(error);
        return;
    }
    var board = new Board(port.path);
    // Waiting to connect
    board.on("ready", function() {
        console.log("Ready!");
        // Reading Analog values
        board.analogRead(Pin, function(value) {
            console.log("Analog value: ", value);
        });
    });
});
```

### Salidas PWM en D6

```java
var Board = require('firmata');
const LED = 6;

var brightness = 0;
var fadeAmount = 5;

// Initialize
Board.requestPort(function(error, port) {
    if (error) {
        console.log(error);
        return;
    }
    const board = new Board(port.path);
    // Waiting to connect
    board.on("ready", function() {
        console.log("Ready!");
        // Setting pin to PWM mode
        board.pinMode(LED, board.MODES.PWM);

        // PWM signals for LED
        function fadeLed() {
            brightness += fadeAmount;
            if (brightness == 0 || brightness == 255) {
                fadeAmount = -fadeAmount;
            }
            board.analogWrite(LED, brightness);
            setTimeout(fadeLed, 30);
        }
        console.log("Breathing");
        fadeLed();
    });
});
```

### Señales I2C

firmata.js también soporta comunicaciones I2C y UART, aquí se proporciona un ejemplo usando con [Grove - 3-Axis Digital Accelerometer(ADXL345)(±16g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html):

- **Conexión de Hardware:**

<div align="center"><img width ="{550}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-ADXL345.png"/></div>

```java
const Board = require("firmata");

Board.requestPort((error, port) => {
  if (error) {
    console.log(error);
    return;
  }

  const register = {
    POWER: 0x2D,
    RANGE: 0x31,
    READ: 0xB2,
  };

  const board = new Board(port.path);

  board.on("ready", function() {
    console.log("Ready");

    const adxl345 = 0x53;
    const sensitivity = 0.00390625;

    // Enable I2C
    this.i2cConfig();

    // Toggle power to reset
    this.i2cWrite(adxl345, register.POWER, 0);
    this.i2cWrite(adxl345, register.POWER, 8);

    // Set range (this is 2G range)
    this.i2cWrite(adxl345, register.RANGE, 8);

    // Set register to READ position and request 6 bytes
    this.i2cRead(adxl345, register.READ, 6, data => {
      const x = (data[1] << 8) | data[0];
      const y = (data[3] << 8) | data[2];
      const z = (data[5] << 8) | data[4];

      // Wrap and clamp 16 bits;
      const X = (x >> 15 ? ((x ^ 0xFFFF) + 1) * -1 : x) * sensitivity;
      const Y = (y >> 15 ? ((y ^ 0xFFFF) + 1) * -1 : y) * sensitivity;
      const Z = (z >> 15 ? ((z ^ 0xFFFF) + 1) * -1 : z) * sensitivity;

      console.log("X: ", X);
      console.log("Y: ", Y);
      console.log("Z: ", Z);
    });
  });
});
```

**Nota:** Para más referencia de la API, por favor visita [firmata.js](https://github.com/firmata/firmata.js/tree/master/packages/firmata.js) y revisa los ejemplos.
