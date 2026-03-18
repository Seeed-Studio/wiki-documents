---
description: Firmata para Placas Compatíveis com Arduino
title: Firmata para Placas Compatíveis com Arduino
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-Firmata
sku: 102110399,102110398,102110397
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Firmata/
---

# Tutorial Firmata: Como Usar Firmata em Placas Compatíveis com Arduino

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-py-js.png"/></div>

## O que é Firmata

**[Firmata](http://firmata.org/wiki/Main_Page)** é um protocolo intermediário que conecta um sistema embarcado a um computador host, e o canal do protocolo usa uma porta serial por padrão. A plataforma Arduino é a implementação de referência padrão para Firmata. A Arduino IDE vem com suporte para Firmata.

Isso funciona perfeitamente com a [Odyssey-X86](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html) com seu Arduino Core integrado, o que significa que você pode controlar o Arduino Core simplesmente usando o protocolo Firmata, também com diferentes linguagens de programação! Neste tutorial, é usado o Windows OS.

*Referência: [Firmata Protocols](https://github.com/firmata/protocol)*

## Gravando o Firmware Firmata via Arduino IDE

A versão da Arduino IDE >= 1.6.X já vem com o firmware Firmata, então podemos usar a Arduino IDE para gravar o firmware Firmata no núcleo Arduino.

:::note
You can download [Arduino IDE](https://www.arduino.cc/en/Main/Software) from here.
:::

- Abra a Arduino IDE e navegue até `Examples` -> `Firmata` -> `StandardFirmata`:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-1.jpg"/></div>

- O `StandardFirmata.ino` irá aparecer. Selecione a placa e a porta corretas e clique em **Upload**:

:::note
Se você ainda não instalou a biblioteca de placas para a Odyssey, siga [**isto**](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105/#usando-o-arduino-core-atsamd21g18-no-windows) para instalar a placa.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-2.jpg"/></div>

- Uma vez enviado, deve ficar parecido com isto:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-3.jpg"/></div>

Agora, o firmware Arduino Firmata está gravado no núcleo Arduino da Odyssey-X86!

## Testando o Firmware Firmata

Para testar o firmware Firmata, você pode ir até a **Microsoft Store**, procurar e baixar o **Windows Remote Arduino Experience**. Depois de baixado, você pode conectar ao Arduino Core selecionando a conexão USB, a placa e a taxa de transmissão (baudrate):

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Remote-Arduino.jpg"/></div>

Depois de conectado, você pode conectar um LED aos pinos correspondentes para testar o firmware:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-test.jpg"/></div>

## Usando Python para Interpretar Firmata

Existem bibliotecas que implementam o protocolo Firmata para se comunicar (a partir de um computador, smartphone ou tablet, por exemplo) com o firmware Firmata executando em uma plataforma de microcontrolador.

**[pyFirmata](https://github.com/tino/pyFirmata)** é uma interface Python para o protocolo Firmata e roda em python3.

### Instalação do pyFirmata

:::note
        Python3 é necessário para isto.
:::

Instale com pip:

```sh
pip install pyfirmata
```

### Para piscar um LED conectado em D13

**Nota:** Altere o `COM4` para a porta COM USB do seu Arduino.

Para um módulo LED simples, você pode usar o [Grove - LED module](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html) para testar!

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

### Para ler Sinais Analógicos em A0

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

### Saídas PWM em D6

Gere um sinal PWM para um LED conectado em D6.

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

Agora você pode usar scripts em Python (ou até outras linguagens) para controlar o seu núcleo Arduino na Odyssey-X86, o que o torna muito útil em algumas situações onde os requisitos de tempo real são menos importantes (ou seja, usar Python para construir um servidor Web e usar Arduino para controlar um relé).

**Nota:** Para mais referência de API, visite [pyFirmata API](https://pypi.org/project/pyFirmata/).

:::note
Para um uso mais avançado de Firmata com Python, você pode considerar usar o [pymata4](https://github.com/MrYsLab/pymata4).
:::

## Usando JavaScript para Interpretar Firmata

Assim como usar Python para controlar o Arduino Core via protocolo Firmata, você também pode escolher outras linguagens com as quais esteja familiarizado para programar, como JavaScript! Isso é implementado pela equipe oficial do Firmata e você pode encontrar mais informações em [**firmata.js**](https://github.com/firmata/firmata.js).

### Primeiros Passos com firmata.js

:::note
        Certifique-se de que o **`node.js`** está instalado no PC.
:::

- Crie um novo projeto:

```sh
mkdir js && cd js
npm init -y
npm install --save firmata # Installing firmata.js
```

### Para piscar um LED conectado em D13

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

### Para ler Sinais Analógicos em A0

Para testar os sinais analógicos, você pode simplesmente usar o [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)!

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

### Saídas PWM em D6

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

### Sinais I2C

firmata.js também suporta comunicações I2C e UART, aqui é fornecido um exemplo usando o [Grove - 3-Axis Digital Accelerometer(ADXL345)(±16g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html):

- **Conexão de Hardware:**

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

**Nota:** Para mais referência de API, visite [firmata.js](https://github.com/firmata/firmata.js/tree/master/packages/firmata.js) e verifique os exemplos.
