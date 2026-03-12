---
description: Conecte o Seeed Studio XIAO SAMD21 ao seu Raspberry PI
title: Conecte o Seeed Studio XIAO SAMD21 ao seu Raspberry PI
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI/
---

# Como usar o Seeed Studio XIAO SAMD21 para fazer login no seu Raspberry PI

Às vezes, quando usamos o Raspberry Pi, essas situações podem ser muito incômodas para nós: não há monitores HDMI extras por perto, mouse e teclado não são fáceis de conectar, optamos por fazer login no Raspberry Pi com o adaptador USB para Serial, mas ele é muito caro. Agora, com o Seeed Studio XIAO SAMD21, todos os problemas são facilmente resolvidos.

## Hardware

## Materiais necessários

- [Seeed Studio XIAO SAMD21 x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [Raspberry PI Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [Cabo jumper x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Cabo Type-C x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

### Conexão de hardware

- **Passo 1.** O **TX** do Raspberry PI é conectado ao **RX** do Seeed Studio XIAO SAMD21

- **Passo 2.** O **RX** do Raspberry PI é conectado ao **TX** do Seeed Studio XIAO SAMD21

- **Passo 3.** O **GND** do Raspberry PI é conectado ao **GND** do Seeed Studio XIAO SAMD21

- **Passo 4.** Conecte o Seeed Studio XIAO SAMD21 ao PC através de um cabo Type-C.

- **Passo 5.** O Raspberry Pi é conectado a uma fonte de alimentação.

<!-- ![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" alt="pir" width={600} height="auto" /></p>

## Software

Encontre o arquivo config.txt no cartão TF onde o sistema oficial do Raspberry Pi está instalado e adicione uma linha ao final:

```c
enable_uart=1
```

### Configurando o Seeed Studio XIAO SAMD21

- **Passo 1.** Abra o [Arduino IDE](https://www.arduino.cc/en/Main/Software) e adicione o Seeed Studio XIAO SAMD21 seguindo o link [aqui.](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)

- **Passo 2.** Copie o código a seguir para o Arduino IDE e envie o código para o Seeed Studio XIAO SAMD21.

```cpp
uint32_t baud;
uint32_t old_baud;
void setup() {

  // put your setup code here, to run once:
  SerialUSB.begin(115200);
  baud = SerialUSB.baud();
  old_baud = baud;
  Serial1.begin(baud);
  while (!Serial);
  while (!SerialUSB);
}

void loop() {
  // put your main code here, to run repeatedly:
  baud = SerialUSB.baud();
  if (baud != old_baud) {
    Serial1.begin(baud);
    while (!Serial);
    old_baud = baud;
    //     SerialUSB.println(baud);
  }
  if (SerialUSB.available() > 0)
  {
    char c = SerialUSB.read();
    Serial1.write(c);
  }
  if (Serial1.available() > 0) {
    char c = Serial1.read();
    SerialUSB.write(c);
  }
}
```

### Configurando o Putty

- **Passo 1.** Baixe e instale o Putty seguindo este [link](https://www.putty.org/)

- **Passo 2.** Defina a taxa de transmissão da porta serial para 115200 (Esta é a taxa de transmissão padrão da porta serial. A comunicação poderá ocorrer corretamente se for consistente com a taxa de transmissão da porta serial do Raspberry Pi.)

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" />
</p>

- **Passo 3.** Em seguida, você verá as informações de inicialização na janela do terminal.

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png" />
</p>

Agora você tem acesso ao Raspberry Pi através do Seeed Studio XIAO SAMD21!

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif" />
</p>
