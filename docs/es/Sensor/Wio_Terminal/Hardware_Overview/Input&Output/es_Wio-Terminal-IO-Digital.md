---
title: Digital
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-IO-Digital/
slug: /es/Wio-Terminal-IO-Digital
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Usando el Puerto Digital Grove en Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2014-55-44.2019-12-12%2014_56_10.gif" /></div>

Este repositorio demuestra cómo usar los Puertos Grove en Wio Terminal como Puertos Digitales. ¡Puedes simplemente usar esta funcionalidad para jugar con el Ecosistema Grove!

## Pines Digitales RPI

Los pinouts de Raspberry Pi están definidos como:

- `RPI_D0` -> `RPI_D8`

## Configuraciones del Puerto Grove

Para usar el **Puerto A/D configurable Grove** como puerto Digital, simplemente defínelo de la siguiente manera:

```cpp
void setup() {
    pinMode(D0, INPUT); //Configure UART TX as Digital port
}
```

### Usando el Puerto I2C Grove como Puerto Digital

El **puerto I2C Grove** también puede ser usado como Puerto Digital en Wio Terminal:

```cpp
void setup() {
    pinMode(PIN_WIRE_SCL, INPUT); //Defined SCL of I2C port as Digital Input
```

¡Ahora, conecta tu sensor Grove al Puerto Grove físico!

**Nota:** Para más nombres de pines variantes definidos, por favor revisa el Esquemático y `variant.h`

## Código de Ejemplo

En este ejemplo, se usan un Botón Grove y un LED Grove para demostrar:

```cpp
#define BUTTON D0 //Button to Grove UART Port
#define LED PIN_WIRE_SCL //LED to Grove I2C Port

void setup() {
  Serial.begin(115200);
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(BUTTON);
  Serial.print("Button State: ");
  Serial.println(buttonState);

  if (buttonState == HIGH) {
    digitalWrite(LED, HIGH);
  }
  else {
    digitalWrite(LED, LOW);
  }
  delay(50);
}
```

## Código de Ejemplo de Salida PWM (Servo)

En este ejemplo, se usa un Servo Grove para demostrar la salida PWM:

```cpp
#include <Servo.h>
Servo myservo;

int pos = 0;

void setup() {
  myservo.attach(D0); //Connect servo to Grove Digital Port
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
    // in steps of 1 degree
    myservo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15);
  }
}
```

**Nota:** Para usar la librería Servo con Wio Terminal, por favor incluye [la versión de Adafruit](https://github.com/PaintYourDragon/Servo) para capacidad SAMD51.

## UART Serial

- El USB Serial en Wio Terminal: `Serial`

- El puerto UART expuesto: `Serial1`

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>