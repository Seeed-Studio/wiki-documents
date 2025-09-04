---
description: Xbox
title: Xbox
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBH-Xbox
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Usando el Controlador Xbox ONE en Wio Terminal

Este repositorio presenta cómo usar un Controlador Xbox ONE en Wio Terminal. Con este ejemplo, puedes implementar el uso de un Controlador Xbox para jugar juegos usando el Wio Terminal!

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200109132336.gif"/></div>

## Requisitos

Para trabajar con este ejemplo, necesitarás un **Adaptador USB OTG** y un **Módulo USB a Serial**, donde el adaptador OTG se usa para conectar con el controlador Xbox y el módulo USB a Serial para leer las salidas del Wio Terminal.

**Nota:** Se usa el Controlador Xbox ONE en este ejemplo. Si usas un controlador Xbox 360 o clones, por favor revisa `XBOXOLD.ino` en el ejemplo.

## Procedimientos

1. Sube el código al Wio Terminal usando `Arduino IDE`.

2. Desconecta el cable USB tipo-C del Wio Terminal que se usó para subir el código.

3. Conecta tu **Controlador Xbox ONE** al **adaptador OTG** y luego al puerto USB-C del Wio Terminal.
      - **`Controlador Xbox ONE`** -> **`Adaptador OTG`** -> **`Wio Terminal(Puerto Tipo-C)`**

4. Conecta el **Módulo USB a Serial** al Wio Terminal como sigue:
      - **`TXD(Módulo USB a Serial)`** -> **`RXD(Pin 10 en Wio Terminal)`**
      - **`RXD(Módulo USB a Serial)`** -> **`TXD(Pin 8 en Wio Terminal)`**
      - **`3.3V(Módulo USB a Serial)`** -> **`3.3V(Pin 1 en Wio Terminal)`**
      - **`GND(Módulo USB a Serial)`** -> **`GND(Pin 6 en Wio Terminal)`**

5. Conecta el Módulo USB a Serial a tu computadora. Dependiendo de qué Módulo USB a Serial uses, **descarga el controlador USB** para el módulo para que tu computadora pueda reconocerlo.

6. Para usuarios de Windows, puedes abrir el Administrador de Dispositivos para verificar si es reconocido. Debería aparecer un nuevo `COM`.
      - Para usuarios de Mac, usa `ls /dev/cu.*` en terminal para verificar la disponibilidad del módulo.

7. Para ver datos del Serial:
      - **Windows:** Descarga e instala [PuTTY](https://www.putty.org/). Selecciona `Serial` y cambia el `COM` en línea Serial al COM que apareció en el Administrador de Dispositivos, también cambia la Velocidad a `115200` y presiona Abrir. Debería aparecer una Terminal. Ahora, si empiezas a presionar botones en el controlador Xbox ONE, deberías ver la salida serial!

      - **Mac:** Abre terminal e instala `screen` usando `brew install screen`. Una vez instalado, usa el comando **`screen /dev/cu.usbserial 115200`** donde `/dev/cu.usbserial` debería coincidir con lo anterior. Deberías poder ver la salida serial del Wio Terminal!

**Nota Importante:** Porque el puerto USB del Wio Terminal está siendo usado para USB, para subir otro programa al Wio Terminal requiere entrar al modo Bootloader presionando el botón de encendido dos veces(el LED se atenuará), entonces deberías poder ver el puerto nuevamente.

## Configuraciones de Host USB

Para habilitar Host USB en Wio Terminal, debes configurar dos pines. Necesitas establecer `PIN_USB_HOST_ENABLE` a **LOW** y `OUTPUT_CTR_5V` a **HIGH**.

Puedes hacer esto simplemente agregando el siguiente código en el `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## Código Completo

```cpp
#include <XBOXONE.h>
#define SerialDebug Serial1

USBHost UsbH;
XBOXONE Xbox(&UsbH);

void setup() {
  SerialDebug.begin(115200);
  if (UsbH.Init()) {
    SerialDebug.print(F("\r\nUSB host did not start"));
    while (1); //halt
  }
  SerialDebug.print(F("\r\nXBOX USB Library Started"));

  //Coqnfigure pins to enable USB Host on Wio Terminal
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}
void loop() {
  UsbH.Task();
  if (Xbox.XboxOneConnected) {
    if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500 || Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500 || Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500 || Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
      if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500) {
        SerialDebug.print(F("LeftHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500) {
        SerialDebug.print(F("LeftHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatY));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500) {
        SerialDebug.print(F("RightHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
        SerialDebug.print(F("RightHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatY));
      }
      SerialDebug.println();
    }

    if (Xbox.getButtonPress(L2) > 0 || Xbox.getButtonPress(R2) > 0) {
      if (Xbox.getButtonPress(L2) > 0) {
        SerialDebug.print(F("L2: "));
        SerialDebug.print(Xbox.getButtonPress(L2));
        SerialDebug.print("\t");
      }
      if (Xbox.getButtonPress(R2) > 0) {
        SerialDebug.print(F("R2: "));
        SerialDebug.print(Xbox.getButtonPress(R2));
        SerialDebug.print("\t");
      }
      SerialDebug.println();
    }

    // Set rumble effect
    static uint16_t oldL2Value, oldR2Value;
    if (Xbox.getButtonPress(L2) != oldL2Value || Xbox.getButtonPress(R2) != oldR2Value) {
      oldL2Value = Xbox.getButtonPress(L2);
      oldR2Value = Xbox.getButtonPress(R2);
      uint8_t leftRumble = map(oldL2Value, 0, 1023, 0, 255); // Map the trigger values into a byte
      uint8_t rightRumble = map(oldR2Value, 0, 1023, 0, 255);
      if (leftRumble > 0 || rightRumble > 0)
        Xbox.setRumbleOn(leftRumble, rightRumble, leftRumble, rightRumble);
      else
        Xbox.setRumbleOff();
    }

    if (Xbox.getButtonClick(UP))
      SerialDebug.println(F("Up"));
    if (Xbox.getButtonClick(DOWN))
      SerialDebug.println(F("Down"));
    if (Xbox.getButtonClick(LEFT))
      SerialDebug.println(F("Left"));
    if (Xbox.getButtonClick(RIGHT))
      SerialDebug.println(F("Right"));

    if (Xbox.getButtonClick(START))
      SerialDebug.println(F("Start"));
    if (Xbox.getButtonClick(BACK))
      SerialDebug.println(F("Back"));
    if (Xbox.getButtonClick(XBOX))
      SerialDebug.println(F("Xbox"));
    if (Xbox.getButtonClick(SYNC))
      SerialDebug.println(F("Sync"));

    if (Xbox.getButtonClick(L1))
      SerialDebug.println(F("L1"));
    if (Xbox.getButtonClick(R1))
      SerialDebug.println(F("R1"));
    if (Xbox.getButtonClick(L2))
      SerialDebug.println(F("L2"));
    if (Xbox.getButtonClick(R2))
      SerialDebug.println(F("R2"));
    if (Xbox.getButtonClick(L3))
      SerialDebug.println(F("L3"));
    if (Xbox.getButtonClick(R3))
      SerialDebug.println(F("R3"));


    if (Xbox.getButtonClick(A))
      SerialDebug.println(F("A"));
    if (Xbox.getButtonClick(B))
      SerialDebug.println(F("B"));
    if (Xbox.getButtonClick(X))
      SerialDebug.println(F("X"));
    if (Xbox.getButtonClick(Y))
      SerialDebug.println(F("Y"));
  }
  delay(1);
}
```
