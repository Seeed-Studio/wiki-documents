---
description:  Conecta XIAO SAMD21 de Seeed Studio a tu Raspberry PI
title:  Conecta XIAO SAMD21 de Seeed Studio a tu Raspberry PI
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI
last_update:
  date: 02/18/2025
  author: Guillermo
---

# Cómo usar Seeed Studio XIAO SAMD21 para iniciar sesión en tu Raspberry Pi

A veces, cuando usamos Raspberry Pi, estas situaciones pueden ser muy molestas: no tenemos pantallas HDMI extra, el ratón y el teclado no son fáciles de conectar, optamos por iniciar sesión en la Raspberry Pi con un adaptador USB a serial, pero es demasiado caro. Ahora, con Seeed Studio XIAO SAMD21, todos estos problemas se pueden resolver rápidamente.

## Hardware

### Materiales necesarios

- [Seeed Studio XIAO SAMD21 x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [Raspberry Pi Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [Cables jumper x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Cable Tipo-C x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

### Conexión del hardware

- **Paso 1.** El **TX** de la Raspberry Pi se conecta al **RX** de Seeed Studio XIAO SAMD21.

- **Paso 2.** El **RX** de la Raspberry Pi se conecta al **TX** de Seeed Studio XIAO SAMD21.

- **Paso 3.** El **GND** de la Raspberry Pi se conecta al **GND** de Seeed Studio XIAO SAMD21.

- **Paso 4.** Conecta Seeed Studio XIAO SAMD21 al PC mediante un cable Tipo-C.

- **Paso 5.** La Raspberry Pi se conecta a una fuente de alimentación.

<!-- ![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" alt="pir" width={600} height="auto" /></p>

## Software

Encuentra el archivo config.txt en la tarjeta TF donde está instalado el sistema oficial de Raspberry Pi, y agrega una línea al final:

```c
enable_uart=1
```

### Configuración de XIAO SAMD21

- **Paso 1.** Abre el [IDE de Arduino](https://www.arduino.cc/en/Main/Software) y agrega tu XIAO SAMD21 siguiendo el enlace [aquí.](https://wiki.seeedstudio.com/Seeeduino-XIAO_spanish/#software)

- **Paso 2.** Copia el siguiente código en Arduino IDE y carga el código en Seeed Studio XIAO SAMD21.

```cpp
uint32_t baud;
uint32_t old_baud;
void setup() {

  // coloca tu código de configuración aquí, para que se ejecute una vez:
  SerialUSB.begin(115200);
  baud = SerialUSB.baud();
  old_baud = baud;
  Serial1.begin(baud);
  while (!Serial);
  while (!SerialUSB);
}

void loop() {
  // coloca tu código principal aquí, para que se ejecute repetidamente:
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

### Configuración de Putty

- **Paso 1.** Descarga e instala Putty siguiendo este [enlace](https://www.putty.org/)

- **Paso 2.** Establece la velocidad de baudios del puerto serial a 115200 (Este es la velocidad de baudios predeterminada del puerto serial. Se puede comunicar correctamente si es consistente con la velocidad de baudios del puerto serial de la Raspberry Pi.)

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" />
</p>

- **Paso 3.** Luego verás la información de inicio en la ventana del terminal.

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png" />
</p>

¡Ahora tienes acceso a Raspberry Pi a través de tu XIAO SAMD21 de Seeed Studio!

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif" />
</p>
