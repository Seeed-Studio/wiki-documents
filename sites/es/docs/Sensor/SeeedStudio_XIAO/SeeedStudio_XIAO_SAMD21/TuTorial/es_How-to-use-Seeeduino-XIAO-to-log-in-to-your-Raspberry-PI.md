---
description:  Conectar Seeed Studio XIAO SAMD21 a tu Raspberry PI
title:  Conectar Seeed Studio XIAO SAMD21 a tu Raspberry PI
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Cómo usar Seeed Studio XIAO SAMD21 para iniciar sesión en tu Raspberry PI

A veces cuando usamos Raspberry Pi, estas situaciones pueden ser muy molestas para nosotros: no hay pantallas HDMI adicionales alrededor, el mouse y el teclado no son fáciles de conectar, elegir iniciar sesión en la raspberry pi con el adaptador USB a Serial, pero es demasiado caro. Ahora, con Seeed Studio XIAO SAMD21, todos los problemas se resuelven fácilmente.

## Hardware

## Materiales requeridos

- [Seeed Studio XIAO SAMD21 x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [Raspberry PI Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [Cable jumper x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Cable Type-C x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

### Conexión de Hardware

- **Paso 1.** El **TX** de Raspberry PI se conecta al **RX** de Seeed Studio XIAO SAMD21

- **Paso 2.** El **RX** de Raspberry PI se conecta al **TX** de Seeed Studio XIAO SAMD21

- **Paso 3.** El **GND** de Raspberry PI se conecta al **GND** de Seeed Studio XIAO SAMD21

- **Paso 4.** Conecta Seeed Studio XIAO SAMD21 a la PC mediante un cable Type-C.

- **Paso 5.** La raspberry pi se conecta a una fuente de alimentación.

<!-- ![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" alt="pir" width={600} height="auto" /></p>

## Software

Encuentra el archivo config.txt en la tarjeta TF donde está instalado el sistema oficial de Raspberry Pi, y añade una línea al final:

```c
enable_uart=1
```

### Configurando Seeed Studio XIAO SAMD21

- **Paso 1.** Abre [Arduino IDE](https://www.arduino.cc/en/Main/Software) y añade Seeed Studio XIAO SAMD21 siguiendo el enlace [aquí.](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)

- **Paso 2.** Copia el siguiente código a Arduino IDE y sube el código a Seeed Studio XIAO SAMD21.

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

### Configurando Putty

- **Paso 1.** Descarga e instala Putty siguiendo este [enlace](https://www.putty.org/)

- **Paso 2.** Establece la velocidad de baudios del puerto serie a 115200 (Esta es la velocidad de baudios predeterminada del puerto serie. Puede comunicarse correctamente si es consistente con la velocidad de baudios del puerto serie de la Raspberry Pi.)

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" />
</p>

- **Paso 3.** Entonces verás la información de inicio en la ventana del terminal.

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png" />
</p>

¡Ahora tienes acceso a Raspberry Pi a través de Seeed Studio XIAO SAMD21!

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif" />
</p>